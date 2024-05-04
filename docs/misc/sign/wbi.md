# WBI 签名

自 2023 年 3 月起，Bilibili Web 端部分接口开始采用 WBI 签名鉴权，表现在 REST API 请求时在 Query param 中添加了 `w_rid` 和 `wts` 字段。WBI 签名鉴权独立于 [APP 鉴权](APP.md) 与其他 Cookie 鉴权，目前被认为是一种 Web 端风控手段。

经持续观察，大部分查询性接口都已经或准备采用 WBI 签名鉴权，请求 WBI 签名鉴权接口时，若签名参数 `w_rid` 与时间戳 `wts` 缺失、错误，会返回 `v_voucher`（推测为内部记录错误请求的 ID 方便 Debug），如：

```json
{"code":0,"message":"0","ttl":1,"data":{"v_voucher":"voucher_******"}}
```

感谢 [#631](https://github.com/SocialSisterYi/bilibili-API-collect/issues/631) 的研究与逆向工程。

细节更新：[#885](https://github.com/SocialSisterYi/bilibili-API-collect/issues/885)。

## WBI 签名算法

1. 获取实时口令 `img_key`、`sub_key`

   从 [nav 接口](../../login/login_info.md#导航栏用户信息) 中获取 `img_url`、`sub_url` 两个字段的参数。

   **注：`img_url`、`sub_url` 两个字段的值看似为存于 BFS 中的 png 图片 url，实则只是经过伪装的实时 Token，故无需且不能试图访问这两个 url**

   ```json
   {"code":-101,"message":"账号未登录","ttl":1,"data":{"isLogin":false,"wbi_img":{"img_url":"https://i0.hdslb.com/bfs/wbi/7cd084941338484aae1ad9425b84077c.png","sub_url":"https://i0.hdslb.com/bfs/wbi/4932caff0ff746eab6f01bf08b70ac45.png"}}}
   ```

   截取其文件名，分别记为 `img_key`、`sub_key`，如上述例子中的 `7cd084941338484aae1ad9425b84077c` 和 `4932caff0ff746eab6f01bf08b70ac45`。

   `img_key`、`sub_key` 全站统一使用，观测知应为**每日更替**，使用时建议做好**缓存和刷新**处理。

   特别地，发现部分接口将 `img_key`、`sub_key` 硬编码进 JavaScript 文件内，如搜索接口 `https://s1.hdslb.com/bfs/static/laputa-search/client/assets/index.1ea39bea.js`，暂不清楚原因及影响。

2. 打乱重排实时口令获得 `mixin_key`

   把上一步获取到的 `sub_key` 拼接在 `img_key` 后面（下例记为 `raw_wbi_key`），遍历重排映射表 `MIXIN_KEY_ENC_TAB`，取出 `raw_wbi_key` 中对应位置的字符拼接得到新的字符串，截取前 32 位，即为 `mixin_key`。

   重排映射表 `MIXIN_KEY_ENC_TAB` 长为 64，内容如下：

   ```rust
   const MIXIN_KEY_ENC_TAB: [u8; 64] = [
       46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49,
       33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40,
       61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11,
       36, 20, 34, 44, 52
   ]
   ```

   重排操作如下例：

   ```rust
    fn gen_mixin_key(raw_wbi_key: impl AsRef<[u8]>) -> String {
        const MIXIN_KEY_ENC_TAB: [u8; 64] = [
            46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49, 33, 9, 42,
            19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40, 61, 26, 17, 0, 1, 60,
            51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11, 36, 20, 34, 44, 52,
        ];
        let raw_wbi_key = raw_wbi_key.as_ref();
        let mut mixin_key = {
            let binding = MIXIN_KEY_ENC_TAB
                .iter()
                // 此步操作即遍历 MIXIN_KEY_ENC_TAB，取出 raw_wbi_key 中对应位置的字符
                .map(|n| raw_wbi_key[*n as usize])
                // 并收集进数组内
                .collect::<Vec<u8>>();
            unsafe { String::from_utf8_unchecked(binding) }
        };
        let _ = mixin_key.split_off(32); // 截取前 32 位字符
        mixin_key
    }
   ```

   如 `img_key` -> `7cd084941338484aae1ad9425b84077c`、`sub_key` -> `4932caff0ff746eab6f01bf08b70ac45` 经过上述操作后得到 `mixin_key` -> `ea1db124af3c7062474693fa704f4ff8`。

3. 计算签名（即 `w_rid`）

   若下方内容为欲签名的**原始**请求参数（以 JavaScript Object 为例）

   ```javascript
   {
        foo: '114',
        bar: '514',
        zab: 1919810
   }
   ```

   `wts` 字段的值应为当前以秒为单位的 Unix 时间戳，如 `1702204169`

   复制一份参数列表，添加 `wts` 参数，即：

   ```javascript
   {
        foo: '114',
        bar: '514',
        zab: 1919810,
        wts: 1702204169
   }
   ```

   随后按键名升序排序后编码 URL Query，拼接前面得到的 `mixin_key`，如 `bar=514&foo=114&wts=1702204169&zab=1919810ea1db124af3c7062474693fa704f4ff8`，计算其 MD5 即为 `w_rid`。

   需要注意的是：如果参数值含中文或特殊字符等，编码字符字母应当**大写** （部分库会编码为小写字母），空格应当编码为 `%20`（部分库按 `application/x-www-form-urlencoded` 约定编码为 `+`）。

   例如：

   ```javascript
   {
        foo: 'one one four',
        bar: '五一四',
        baz: 1919810
   }
   ```

    应该被编码为 `bar=%E4%BA%94%E4%B8%80%E5%9B%9B&baz=1919810&foo=one%20one%20four`。

4. 向原始请求参数中添加 `w_rid`、`wts` 字段

   将上一步得到的 `w_rid` 以及前面的 `wts` 追加到**原始**请求参数编码得到的 URL Query 后即可，目前看来无需对原始请求参数排序。

   如前例最终得到 `bar=514&foo=114&zab=1919810&w_rid=8f6f2b5b3d485fe1886cec6a0be8c5d4&wts=1702204169`。

## Demo

含 [Python](#Python)、[JavaScript](#JavaScript)、[Golang](#Golang)、[C#](#CSharp)、[Java](#Java) 和 [Swift](#Swift) 语言编写的 Demo 。

### Python

需要`requests`依赖

```python
from functools import reduce
from hashlib import md5
import urllib.parse
import time
import requests

mixinKeyEncTab = [
    46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49,
    33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40,
    61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11,
    36, 20, 34, 44, 52
]

def getMixinKey(orig: str):
    '对 imgKey 和 subKey 进行字符顺序打乱编码'
    return reduce(lambda s, i: s + orig[i], mixinKeyEncTab, '')[:32]

def encWbi(params: dict, img_key: str, sub_key: str):
    '为请求参数进行 wbi 签名'
    mixin_key = getMixinKey(img_key + sub_key)
    curr_time = round(time.time())
    params['wts'] = curr_time                                   # 添加 wts 字段
    params = dict(sorted(params.items()))                       # 按照 key 重排参数
    # 过滤 value 中的 "!'()*" 字符
    params = {
        k : ''.join(filter(lambda chr: chr not in "!'()*", str(v)))
        for k, v 
        in params.items()
    }
    query = urllib.parse.urlencode(params)                      # 序列化参数
    wbi_sign = md5((query + mixin_key).encode()).hexdigest()    # 计算 w_rid
    params['w_rid'] = wbi_sign
    return params

def getWbiKeys() -> tuple[str, str]:
    '获取最新的 img_key 和 sub_key'
     headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
        'Referer': 'https://www.bilibili.com/'
    }
    resp = requests.get('https://api.bilibili.com/x/web-interface/nav', headers=headers)
    resp.raise_for_status()
    json_content = resp.json()
    img_url: str = json_content['data']['wbi_img']['img_url']
    sub_url: str = json_content['data']['wbi_img']['sub_url']
    img_key = img_url.rsplit('/', 1)[1].split('.')[0]
    sub_key = sub_url.rsplit('/', 1)[1].split('.')[0]
    return img_key, sub_key

img_key, sub_key = getWbiKeys()

signed_params = encWbi(
    params={
        'foo': '114',
        'bar': '514',
        'baz': 1919810
    },
    img_key=img_key,
    sub_key=sub_key
)
query = urllib.parse.urlencode(signed_params)
print(signed_params)
print(query)
```

输出内容分别是进行 Wbi 签名的后参数的 key-Value 以及 url query 形式

```
{'bar': '514', 'baz': '1919810', 'foo': '114', 'wts': '1702204169', 'w_rid': 'd3cbd2a2316089117134038bf4caf442'}
bar=514&baz=1919810&foo=114&wts=1702204169&w_rid=d3cbd2a2316089117134038bf4caf442
```

### JavaScript

需要 `axios`、`md5` 依赖

```javascript
import md5 from 'md5'

const mixinKeyEncTab = [
  46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49,
  33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40,
  61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11,
  36, 20, 34, 44, 52
]

// 对 imgKey 和 subKey 进行字符顺序打乱编码
const getMixinKey = (orig) => mixinKeyEncTab.map(n => orig[n]).join('').slice(0, 32)

// 为请求参数进行 wbi 签名
function encWbi(params, img_key, sub_key) {
  const mixin_key = getMixinKey(img_key + sub_key),
    curr_time = Math.round(Date.now() / 1000),
    chr_filter = /[!'()*]/g

  Object.assign(params, { wts: curr_time }) // 添加 wts 字段
  // 按照 key 重排参数
  const query = Object
    .keys(params)
    .sort()
    .map(key => {
      // 过滤 value 中的 "!'()*" 字符
      const value = params[key].toString().replace(chr_filter, '')
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    })
    .join('&')

  const wbi_sign = md5(query + mixin_key) // 计算 w_rid

  return query + '&w_rid=' + wbi_sign
}

// 获取最新的 img_key 和 sub_key
async function getWbiKeys() {
  const res = await fetch('https://api.bilibili.com/x/web-interface/nav', {
    headers: {
      // SESSDATA 字段
      Cookie: "SESSDATA=xxxxxx",
      User-Agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
      Referer: 'https://www.bilibili.com/'//对于直接浏览器调用可能不适用
    }
  })
  const { data: { wbi_img: { img_url, sub_url } } } = await res.json()

  return {
    img_key: img_url.slice(
      img_url.lastIndexOf('/') + 1,
      img_url.lastIndexOf('.')
    ),
    sub_key: sub_url.slice(
      sub_url.lastIndexOf('/') + 1,
      sub_url.lastIndexOf('.')
    )
  }
}

async function main() {
  const web_keys = await getWbiKeys()
  const params = { foo: '114', bar: '514', baz: 1919810 },
    img_key = web_keys.img_key,
    sub_key = web_keys.sub_key
  const query = encWbi(params, img_key, sub_key)
  console.log(query)
}

main()
```

输出内容为进行 Wbi 签名的后参数的 url query 形式

```
bar=514&baz=1919810&foo=114&wts=1684805578&w_rid=bb97e15f28edf445a0e4420d36f0157e
```

### Golang

需要 `github.com/tidwall/gjson` 作为依赖

```golang
package main

import (
	"crypto/md5"
	"encoding/hex"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"sort"
	"strconv"
	"strings"
	"sync"
	"time"

	"github.com/tidwall/gjson"
)

var (
	mixinKeyEncTab = []int{
		46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49,
		33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40,
		61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11,
		36, 20, 34, 44, 52,
	}
	cache          sync.Map
	lastUpdateTime time.Time
)

func main() {
	urlStr := "https://api.bilibili.com/x/space/wbi/acc/info?mid=1850091"
	newUrlStr, err := signAndGenerateURL(urlStr)
	if err != nil {
		fmt.Printf("Error: %s", err)
		return
	}
	req, err := http.NewRequest("GET", newUrlStr, nil)
	if err != nil {
		fmt.Printf("Error: %s", err)
		return
	}
	req.Header.Set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
	req.Header.Set("Referer", "https://www.bilibili.com/")
	response, err := http.DefaultClient.Do(req)
	if err != nil {
		fmt.Printf("Request failed: %s", err)
		return
	}
	defer response.Body.Close()
	body, err := io.ReadAll(response.Body)
	if err != nil {
		fmt.Printf("Failed to read response: %s", err)
		return
	}
	fmt.Println(string(body))
}

func signAndGenerateURL(urlStr string) (string, error) {
	urlObj, err := url.Parse(urlStr)
	if err != nil {
		return "", err
	}
	imgKey, subKey := getWbiKeysCached()
	query := urlObj.Query()
	params := map[string]string{}
	for k, v := range query {
		params[k] = v[0]
	}
	newParams := encWbi(params, imgKey, subKey)
	for k, v := range newParams {
		query.Set(k, v)
	}
	urlObj.RawQuery = query.Encode()
	newUrlStr := urlObj.String()
	return newUrlStr, nil
}

func encWbi(params map[string]string, imgKey, subKey string) map[string]string {
	mixinKey := getMixinKey(imgKey + subKey)
	currTime := strconv.FormatInt(time.Now().Unix(), 10)
	params["wts"] = currTime

	// Sort keys
	keys := make([]string, 0, len(params))
	for k := range params {
		keys = append(keys, k)
	}
	sort.Strings(keys)

	// Remove unwanted characters
	for k, v := range params {
		v = sanitizeString(v)
		params[k] = v
	}

	// Build URL parameters
	query := url.Values{}
	for _, k := range keys {
		query.Set(k, params[k])
	}
	queryStr := query.Encode()

	// Calculate w_rid
	hash := md5.Sum([]byte(queryStr + mixinKey))
	params["w_rid"] = hex.EncodeToString(hash[:])
	return params
}

func getMixinKey(orig string) string {
	var str strings.Builder
	for _, v := range mixinKeyEncTab {
		if v < len(orig) {
			str.WriteByte(orig[v])
		}
	}
	return str.String()[:32]
}

func sanitizeString(s string) string {
	unwantedChars := []string{"!", "'", "(", ")", "*"}
	for _, char := range unwantedChars {
		s = strings.ReplaceAll(s, char, "")
	}
	return s
}

func updateCache() {
	if time.Since(lastUpdateTime).Minutes() < 10 {
		return
	}
	imgKey, subKey := getWbiKeys()
	cache.Store("imgKey", imgKey)
	cache.Store("subKey", subKey)
	lastUpdateTime = time.Now()
}

func getWbiKeysCached() (string, string) {
	updateCache()
	imgKeyI, _ := cache.Load("imgKey")
	subKeyI, _ := cache.Load("subKey")
	return imgKeyI.(string), subKeyI.(string)
}

func getWbiKeys() (string, string) {
	client := &http.Client{}
	req, err := http.NewRequest("GET", "https://api.bilibili.com/x/web-interface/nav", nil)
	if err != nil {
		fmt.Printf("Error creating request: %s", err)
		return "", ""
	}
	req.Header.Set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
	req.Header.Set("Referer", "https://www.bilibili.com/")
	resp, err := client.Do(req)
	if err != nil {
		fmt.Printf("Error sending request: %s", err)
		return "", ""
	}
	defer resp.Body.Close()
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Printf("Error reading response: %s", err)
		return "", ""
	}
	json := string(body)
	imgURL := gjson.Get(json, "data.wbi_img.img_url").String()
	subURL := gjson.Get(json, "data.wbi_img.sub_url").String()
	imgKey := strings.Split(strings.Split(imgURL, "/")[len(strings.Split(imgURL, "/"))-1], ".")[0]
	subKey := strings.Split(strings.Split(subURL, "/")[len(strings.Split(subURL, "/"))-1], ".")[0]
	return imgKey, subKey
}
```

### CSharp

无需依赖外部库

```cs
using System.Security.Cryptography;
using System.Text;
using System.Text.Json.Nodes;

class Program
{
    private static HttpClient _httpClient = new();

    private static readonly int[] MixinKeyEncTab =
    {
        46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49, 33, 9, 42, 19, 29, 28, 14, 39,
        12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40, 61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63,
        57, 62, 11, 36, 20, 34, 44, 52
    };

    //对 imgKey 和 subKey 进行字符顺序打乱编码
    private static string GetMixinKey(string orig)
    {
        return MixinKeyEncTab.Aggregate("", (s, i) => s + orig[i])[..32];
    }

    private static Dictionary<string, string> EncWbi(Dictionary<string, string> parameters, string imgKey,
        string subKey)
    {
        string mixinKey = GetMixinKey(imgKey + subKey);
        string currTime = DateTimeOffset.Now.ToUnixTimeSeconds().ToString();
        //添加 wts 字段
        parameters["wts"] = currTime;
        // 按照 key 重排参数
        parameters = parameters.OrderBy(p => p.Key).ToDictionary(p => p.Key, p => p.Value);
        //过滤 value 中的 "!'()*" 字符
        parameters = parameters.ToDictionary(
            kvp => kvp.Key,
            kvp => new string(kvp.Value.Where(chr => !"!'()*".Contains(chr)).ToArray())
        );
        // 序列化参数
        string query = new FormUrlEncodedContent(parameters).ReadAsStringAsync().Result;
        //计算 w_rid
        using MD5 md5 = MD5.Create();
        byte[] hashBytes = md5.ComputeHash(Encoding.UTF8.GetBytes(query + mixinKey));
        string wbiSign = BitConverter.ToString(hashBytes).Replace("-", "").ToLower();
        parameters["w_rid"] = wbiSign;

        return parameters;
    }

    // 获取最新的 img_key 和 sub_key
      private static async Task<(string, string)> GetWbiKeys()
      {
          var httpClient = new HttpClient();
          httpClient.DefaultRequestHeaders.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36");
          httpClient.DefaultRequestHeaders.Referrer = new Uri("https://www.bilibili.com/");
      
          HttpResponseMessage responseMessage = await httpClient.SendAsync(new HttpRequestMessage
          {
              Method = HttpMethod.Get,
              RequestUri = new Uri("https://api.bilibili.com/x/web-interface/nav"),
          });
      
          JsonNode response = JsonNode.Parse(await responseMessage.Content.ReadAsStringAsync())!;
      
          string imgUrl = (string)response["data"]!["wbi_img"]!["img_url"]!;
          imgUrl = imgUrl.Split("/")[^1].Split(".")[0];
      
          string subUrl = (string)response["data"]!["wbi_img"]!["sub_url"]!;
          subUrl = subUrl.Split("/")[^1].Split(".")[0];
          return (imgUrl, subUrl);
      }


    public static async Task Main()
    {
        var (imgKey, subKey) = await GetWbiKeys();

        Dictionary<string, string> signedParams = EncWbi(
            parameters: new Dictionary<string, string>
            {
                { "foo", "114" },
                { "bar", "514" },
                { "baz", "1919810" }
            },
            imgKey: imgKey,
            subKey: subKey
        );

        string query = await new FormUrlEncodedContent(signedParams).ReadAsStringAsync();

        Console.WriteLine(query);
    }
}
```
输出内容为进行 Wbi 签名的后参数的 url query 形式

```
bar=514&baz=1919810&foo=114&wts=1687541921&w_rid=26e82b1b9b3a11dbb1807a9228a40d3b
```

### Java

需要 `hutool` 依赖

```java
package com.example.demo;

import cn.hutool.crypto.SecureUtil;

import java.util.*;

public class WbiTest {
    private static final int[] mixinKeyEncTab = new int[]{
            46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49,
            33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40,
            61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11,
            36, 20, 34, 44, 52
    };

    public static String getMixinKey(String imgKey, String subKey) {
        String s = imgKey + subKey;
        StringBuilder key = new StringBuilder();
        for (int i = 0; i < 32; i++) {
            key.append(s.charAt(mixinKeyEncTab[i]));
        }
        return key.toString();
    }

   public static void main(String[] args) {
      String imgKey = "653657f524a547ac981ded72ea172057";
      String subKey = "6e4909c702f846728e64f6007736a338";
      String mixinKey = getMixinKey(imgKey, subKey);
      System.out.println(mixinKey);
      //72136226c6a73669787ee4fd02a74c27
      //{
      //     foo: 'one one four',
      //     bar: '五一四',
      //     baz: 1919810
      //}
      LinkedHashMap<String, Object> map = new LinkedHashMap<>();
      map.put("foo", "one one four");
      map.put("bar", "五一四");
      map.put("baz", 1919810);
      map.put("wts", System.currentTimeMillis() / 1000);
     map.put("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36");
     map.put("Referer", "https://www.bilibili.com/");
      StringJoiner param = new StringJoiner("&");
      //排序 + 拼接字符串
      map.entrySet().stream()
              .sorted(Map.Entry.comparingByKey())
              .forEach(entry -> param.add(entry.getKey() + "=" + URLUtil.encode(entry.getValue().toString())));
      String s = param + mixinKey;
      String wbiSign = SecureUtil.md5(s);
      System.out.println(wbiSign);
      String finalParam = param + "&w_rid=" + wbiSign;
      System.out.println(finalParam);
   }
}
```

### PHP

来自[SocialSisterYi/bilibili-API-collect#813](https://github.com/SocialSisterYi/bilibili-API-collect/issues/813)

```php
<?php
/**
 * B站 Wbi 测试
 * @author Prk
 */


class Bilibili {

    private $mixinKeyEncTab = [
        46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49,
        33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40,
        61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11,
        36, 20, 34, 44, 52
    ];

    function __construct() {
    }

    public function reQuery(array $query) {
        $wbi_keys = $this->getWbiKeys();
        return $this->encWbi($query, $wbi_keys['img_key'], $wbi_keys['sub_key']);
    }

    private function getMixinKey($orig) {
        $t = '';
        foreach ($this->mixinKeyEncTab as $n) $t .= $orig[$n];
        return substr($t, 0, 32);
    }

    private function encWbi($params, $img_key, $sub_key) {
        $mixin_key = $this->getMixinKey($img_key . $sub_key);
        $curr_time = time();
        $chr_filter = "/[!'()*]/";

        $query = [];
        $params['wts'] = $curr_time;

        ksort($params);

        foreach ($params as $key => $value) {
            $value = preg_replace($chr_filter, '', $value);
            $query[] = urlencode($key) . '=' . urlencode($value);
        }

        $query = implode('&', $query);
        $wbi_sign = md5($query . $mixin_key);

        return $query . '&w_rid=' . $wbi_sign;
    }

    private function getWbiKeys() {
        $resp = @json_decode(
            $this->curl_get(
                'https://api.bilibili.com/x/web-interface/nav',
                null,
                'https://www.bilibili.com/'
            ), true
        );

        if (!$resp) throw new Exception('请求失败');

        $img_url = $resp['data']['wbi_img']['img_url'];
        $sub_url = $resp['data']['wbi_img']['sub_url'];

        return [
            'img_key' => substr(basename($img_url), 0, strpos(basename($img_url), '.')),
            'sub_key' => substr(basename($sub_url), 0, strpos(basename($sub_url), '.'))
        ];
    }

    private function curl_get($url, $cookies = null, $referer = 'https://www.bilibili.com/', $ua = null, $proxy = null, $header = []) {
        $ch = curl_init();
        $header[] = "Accept: */*";
        $header[] = "Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7";
        $header[] = "Connection: close";
        $header[]="Referer:https://www.bilibili.com/";
        $header[] = "Cache-Control: max-age=0";
        curl_setopt_array($ch, [
            CURLOPT_HTTPGET         =>  1,
            CURLOPT_CUSTOMREQUEST   =>  'GET',
            CURLOPT_RETURNTRANSFER  =>  1,
            CURLOPT_HTTPHEADER      =>  $header,
            CURLOPT_ENCODING        =>  '',
            CURLOPT_URL             =>  $url,
            CURLOPT_USERAGENT       =>  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36 Edg/102.0.1245.39',
            CURLOPT_TIMEOUT         =>  15
        ]);

        if ($cookies) curl_setopt(
            $ch,
            CURLOPT_COOKIE,
            $cookies
        );

        if ($referer) curl_setopt_array($ch, [
            CURLOPT_AUTOREFERER =>  $referer,
            CURLOPT_REFERER     =>  $referer
        ]);

        $content = curl_exec($ch);
        curl_close($ch);
        return $content;
    }
}

$c = new Bilibili();
echo $c->reQuery(['foo' => '114', 'bar' => '514', 'baz' => 1919810]);
// bar=514&baz=1919810&foo=114&wts=1700384803&w_rid=4614cb98d60a43e50c3a3033fe3d116b
```

### Rust

需要 serde、serde_json、reqwest、tokio 以及 md5

```rust
use reqwest::header::USER_AGENT;
use serde::Deserialize;
use std::time::{SystemTime, UNIX_EPOCH};

const MIXIN_KEY_ENC_TAB: [usize; 64] = [
    46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49, 33, 9, 42, 19, 29,
    28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40, 61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25,
    54, 21, 56, 59, 6, 63, 57, 62, 11, 36, 20, 34, 44, 52,
];

#[derive(Deserialize)]
struct WbiImg {
    img_url: String,
    sub_url: String,
}

#[derive(Deserialize)]
struct Data {
    wbi_img: WbiImg,
}

#[derive(Deserialize)]
struct ResWbi {
    data: Data,
}

// 对 imgKey 和 subKey 进行字符顺序打乱编码
fn get_mixin_key(orig: &[u8]) -> String {
    MIXIN_KEY_ENC_TAB
        .iter()
        .map(|&i| orig[i] as char)
        .collect::<String>()
}

fn get_url_encoded(s: &str) -> String {
    s.chars()
        .filter_map(|c| match c.is_ascii_alphanumeric() || "-_.~".contains(c) {
            true => Some(c.to_string()),
            false => {
                // 过滤 value 中的 "!'()*" 字符
                if "!'()*".contains(c) {
                    return None;
                }
                let encoded = c
                    .encode_utf8(&mut [0; 4])
                    .bytes()
                    .fold("".to_string(), |acc, b| acc + &format!("%{:02X}", b));
                Some(encoded)
            }
        })
        .collect::<String>()
}

// 为请求参数进行 wbi 签名
fn encode_wbi(params: &mut Vec<(&str, String)>, (img_key, sub_key): (String, String)) -> String {
    let mixin_key = get_mixin_key((img_key + &sub_key).as_bytes());
    let cur_time = match SystemTime::now().duration_since(UNIX_EPOCH) {
        Ok(t) => t.as_secs(),
        Err(_) => panic!("SystemTime before UNIX EPOCH!"),
    };
    // 添加当前时间戳
    params.push(("wts", cur_time.to_string()));
    // 重新排序
    params.sort_by(|a, b| a.0.cmp(b.0));
    let query = params.iter().fold(String::from(""), |acc, (k, v)| {
        acc + format!("{}={}&", get_url_encoded(k), get_url_encoded(v)).as_str()
    });

    let web_sign = format!("{:?}", md5::compute(query.clone() + &mixin_key));

    query + &format!("w_rid={}", web_sign)
}

async fn get_wbi_keys() -> Result<(String, String), reqwest::Error> {
    let client = reqwest::Client::new();
    let ResWbi { data:Data{wbi_img} } = client
    .get("https://api.bilibili.com/x/web-interface/nav")
    .header(USER_AGENT,"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36")
    .header("Referer","https://www.bilibili.com/")
     // SESSDATA=xxxxx
    .header("Cookie", "SESSDATA=xxxxx")
    .send()
    .await?
    .json::<ResWbi>()
    .await?;

    Ok((wbi_img.img_url, wbi_img.sub_url))
}

#[tokio::main]
async fn main() {
    let urls = get_wbi_keys().await.unwrap();
    let mut params = vec![
        ("foo", String::from("114")),
        ("bar", String::from("514")),
        ("baz", String::from("1919810")),
    ];

    let query = encode_wbi(&mut params, urls);

    println!("{}", query);
}
```

### Swift

需要 [Alamofire](https://github.com/Alamofire/Alamofire) 和 [SwiftyJSON](https://github.com/SwiftyJSON/SwiftyJSON) 库

```swift
import Foundation
import CommonCrypto
import Alamofire
import SwiftyJSON

func biliWbiSign(param: String, completion: @escaping (String?) -> Void) {
    func getMixinKey(orig: String) -> String {
        return String(mixinKeyEncTab.map { orig[orig.index(orig.startIndex, offsetBy: $0)] }.prefix(32))
    }
    
    func encWbi(params: [String: Any], imgKey: String, subKey: String) -> [String: Any] {
        var params = params
        let mixinKey = getMixinKey(orig: imgKey + subKey)
        let currTime = round(Date().timeIntervalSince1970)
        params["wts"] = currTime
        params = params.sorted { $0.key < $1.key }.reduce(into: [:]) { $0[$1.key] = $1.value }
        params = params.mapValues { String(describing: $0).filter { !"!'()*".contains($0) } }
        let query = params.map { "\($0.key)=\($0.value)" }.joined(separator: "&")
        let wbiSign = calculateMD5(string: query + mixinKey)
        params["w_rid"] = wbiSign
        return params
    }
    
   func getWbiKeys(completion: @escaping (Result<(imgKey: String, subKey: String), Error>) -> Void) {
       let headers: HTTPHeaders = [
           "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
           "Referer": "https://www.bilibili.com/"
       ]
       
       AF.request("https://api.bilibili.com/x/web-interface/nav", headers: headers).responseJSON { response in
           switch response.result {
           case .success(let value):
               let json = JSON(value)
               let imgURL = json["data"]["wbi_img"]["img_url"].string ?? ""
               let subURL = json["data"]["wbi_img"]["sub_url"].string ?? ""
               let imgKey = imgURL.components(separatedBy: "/").last?.components(separatedBy: ".").first ?? ""
               let subKey = subURL.components(separatedBy: "/").last?.components(separatedBy: ".").first ?? ""
               completion(.success((imgKey, subKey)))
           case .failure(let error):
               completion(.failure(error))
           }
       }
   }

    
    func calculateMD5(string: String) -> String {
        let data = Data(string.utf8)
        var digest = [UInt8](repeating: 0, count: Int(CC_MD5_DIGEST_LENGTH))
        _ = data.withUnsafeBytes {
            CC_MD5($0.baseAddress, CC_LONG(data.count), &digest)
        }
        return digest.map { String(format: "%02hhx", $0) }.joined()
    }
    
    let mixinKeyEncTab = [
        46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49,
        33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40,
        61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11,
        36, 20, 34, 44, 52
    ]
    
    getWbiKeys { result in
        switch result {
        case .success(let keys):
            let spdParam = param.components(separatedBy: "&")
            var spdDicParam = [String: String]()
            spdParam.forEach { pair in
                let components = pair.components(separatedBy: "=")
                if components.count == 2 {
                    spdDicParam[components[0]] = components[1]
                }
            }
            
            let signedParams = encWbi(params: spdDicParam, imgKey: keys.imgKey, subKey: keys.subKey)
            let query = signedParams.map { "\($0.key)=\($0.value)" }.joined(separator: "&")
            completion(query)
        case .failure(let error):
            print("Error getting keys: \(error)")
            completion(nil)
        }
    }
}

```
