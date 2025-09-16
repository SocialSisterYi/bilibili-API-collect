# WBI 签名

自 2023 年 3 月起，Bilibili Web 端部分接口开始采用 WBI 签名鉴权，表现在 REST API 请求时在 Query param 中添加了 `w_rid` 和 `wts` 字段。WBI 签名鉴权独立于 [APP 鉴权](APP.md) 与其他 Cookie 鉴权，目前被认为是一种 Web 端风控手段。

经持续观察，大部分查询性接口都已经或准备采用 WBI 签名鉴权，请求 WBI 签名鉴权接口时，若签名参数 `w_rid` 与时间戳 `wts` 缺失、错误，会返回 [`v_voucher`](v_voucher.md)，如：

```json
{"code":0,"message":"0","ttl":1,"data":{"v_voucher":"voucher_******"}}
```

感谢 [#631](https://github.com/SocialSisterYi/bilibili-API-collect/issues/631) 的研究与逆向工程。

细节更新：[#885](https://github.com/SocialSisterYi/bilibili-API-collect/issues/885)。

最新进展: [#919](https://github.com/SocialSisterYi/bilibili-API-collect/issues/919)

## WBI 签名算法

1. 获取实时口令 `img_key`、`sub_key`

   从 [nav 接口](../../login/login_info.md#导航栏用户信息) 中获取 `img_url`、`sub_url` 两个字段的参数。
   或从 [bili_ticket 接口](bili_ticket.md#接口) 中获取 `img` `sub` 两个字段的参数。

   **注：`img_url`、`sub_url` 两个字段的值看似为存于 BFS 中的 png 图片 url，实则只是经过伪装的实时 Token，故无需且不能试图访问这两个 url**

   ```json
   {"code":-101,"message":"账号未登录","ttl":1,"data":{"isLogin":false,"wbi_img":{"img_url":"https://i0.hdslb.com/bfs/wbi/7cd084941338484aae1ad9425b84077c.png","sub_url":"https://i0.hdslb.com/bfs/wbi/4932caff0ff746eab6f01bf08b70ac45.png"}}}
   ```

   截取其文件名，分别记为 `img_key`、`sub_key`，如上述例子中的 `7cd084941338484aae1ad9425b84077c` 和 `4932caff0ff746eab6f01bf08b70ac45`。

   `img_key`、`sub_key` 全站统一使用，观测知应为**每日更替**，使用时建议做好**缓存和刷新**处理。

   特别地，发现部分接口将 `img_key`、`sub_key` 硬编码进 JavaScript 文件内，如搜索接口 `https://s1.hdslb.com/bfs/static/laputa-search/client/assets/index.1ea39bea.js`，暂不清楚原因及影响。
   同时, 部分页面会在 SSR 的 `__INITIAL_STATE__` 包含 `wbiImgKey` 与 `wbiSubKey`, 具体可用性与区别尚不明确

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

   随后按键名升序排序后百分号编码 URL Query，拼接前面得到的 `mixin_key`，如 `bar=514&foo=114&wts=1702204169&zab=1919810ea1db124af3c7062474693fa704f4ff8`，计算其 MD5 即为 `w_rid`。

   需要注意的是：如果参数值含中文或特殊字符等，编码字符字母应当**大写** （部分库会错误编码为小写字母），空格应当编码为 `%20`（部分库按 `application/x-www-form-urlencoded` 约定编码为 `+`）, 具体正确行为可参考 [encodeURIComponent 函数](https://tc39.es/ecma262/multipage/global-object.html#sec-encodeuricomponent-uricomponent)

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

含 [Python](#python)、[JavaScript](#javascript)、[Golang](#golang)、[C#](#csharp)、[Java](#java)、[Kotlin](#kotlin)、[Swift](#swift)、[C++](#cplusplus)、[Rust](#rust)、[Haskell](#haskell) 语言编写的 Demo

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

需要 `fetch`(浏览器、NodeJS等环境自带)、`md5` 依赖

<CodeGroup>
  <CodeGroupItem title="JavaScript">

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
      Cookie: 'SESSDATA=xxxxxx',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
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

  </CodeGroupItem>

  <CodeGroupItem title="TypeScript">

```typescript
import md5 from 'md5'

const mixinKeyEncTab = [
  46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49,
  33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40,
  61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11,
  36, 20, 34, 44, 52
]

// 对 imgKey 和 subKey 进行字符顺序打乱编码
const getMixinKey = (orig: string) =>
  mixinKeyEncTab
    .map((n) => orig[n])
    .join("")
    .slice(0, 32);

// 为请求参数进行 wbi 签名
function encWbi(
  params: { [key: string]: string | number | object },
  img_key: string,
  sub_key: string
) {
  const mixin_key = getMixinKey(img_key + sub_key),
    curr_time = Math.round(Date.now() / 1000),
    chr_filter = /[!'()*]/g;

  Object.assign(params, { wts: curr_time }); // 添加 wts 字段
  // 按照 key 重排参数
  const query = Object.keys(params)
    .sort()
    .map((key) => {
      // 过滤 value 中的 "!'()*" 字符
      const value = params[key].toString().replace(chr_filter, "");
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .join("&");

  const wbi_sign = md5(query + mixin_key); // 计算 w_rid

  return query + "&w_rid=" + wbi_sign;
}
// 获取最新的 img_key 和 sub_key
async function getWbiKeys(SESSDATA: string) {
  const res = await fetch('https://api.bilibili.com/x/web-interface/nav', {
    headers: {
      // SESSDATA 字段
      Cookie: `SESSDATA=${SESSDATA}`,
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
      Referer: 'https://www.bilibili.com/'//对于直接浏览器调用可能不适用
    }
  })
  const {
    data: {
      wbi_img: { img_url, sub_url },
    },
  } = (await res.json()) as {
    data: {
      wbi_img: { img_url: string; sub_url: string };
    };
  };

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
  const web_keys = await getWbiKeys("SESSDATA的值")
  const params = { foo: '114', bar: '514', baz: 1919810 },
    img_key = web_keys.img_key,
    sub_key = web_keys.sub_key
  const query = encWbi(params, img_key, sub_key)
  console.log(query)
}

main()
```

  </CodeGroupItem>
</CodeGroup>

输出内容为进行 Wbi 签名的后参数的 url query 形式

```
bar=514&baz=1919810&foo=114&wts=1684805578&w_rid=bb97e15f28edf445a0e4420d36f0157e
```

### Golang

无第三方库

```go
package main

import (
    "bytes"
    "crypto/md5"
    "encoding/hex"
    "encoding/json"
    "fmt"
    "io"
    "net/http"
    "net/url"
    "strconv"
    "strings"
    "time"
)

func main() {
    u, err := url.Parse("https://api.bilibili.com/x/space/wbi/acc/info?mid=1850091")
    if err != nil {
        panic(err)
    }
    fmt.Printf("orig: %s\n", u.String())
    err = Sign(u)
    if err != nil {
        panic(err)
    }
    fmt.Printf("signed: %s\n", u.String())

    // 获取 wbi 时未修改 header
    // 但实际使用签名后的 url 时发现风控较为严重
}

// Sign 为链接签名
func Sign(u *url.URL) error {
    return wbiKeys.Sign(u)
}

// Update 无视过期时间更新
func Update() error {
    return wbiKeys.Update()
}

func Get() (wk WbiKeys, err error) {
    if err = wk.update(false); err != nil {
        return WbiKeys{}, err
    }
    return wbiKeys, nil
}

var wbiKeys WbiKeys

type WbiKeys struct {
    Img            string
    Sub            string
    Mixin          string
    lastUpdateTime time.Time
}

// Sign 为链接签名
func (wk *WbiKeys) Sign(u *url.URL) (err error) {
    if err = wk.update(false); err != nil {
        return err
    }

    values := u.Query()

    values = removeUnwantedChars(values, '!', '\'', '(', ')', '*') // 必要性存疑?

    values.Set("wts", strconv.FormatInt(time.Now().Unix(), 10))

    // [url.Values.Encode] 内会对参数排序,
    // 且遍历 map 时本身就是无序的
    hash := md5.Sum([]byte(values.Encode() + wk.Mixin)) // Calculate w_rid
    values.Set("w_rid", hex.EncodeToString(hash[:]))
    u.RawQuery = values.Encode()
    return nil
}

// Update 无视过期时间更新
func (wk *WbiKeys) Update() (err error) {
    return wk.update(true)
}

// update 按需更新
func (wk *WbiKeys) update(purge bool) error {
    if !purge && time.Since(wk.lastUpdateTime) < time.Hour {
        return nil
    }

    // 测试下来不用修改 header 也能过
    resp, err := http.Get("https://api.bilibili.com/x/web-interface/nav")
    if err != nil {
        return err
    }
    defer resp.Body.Close()
    body, err := io.ReadAll(resp.Body)
    if err != nil {
        return err
    }

    nav := Nav{}
    err = json.Unmarshal(body, &nav)
    if err != nil {
        return err
    }

    if nav.Code != 0 && nav.Code != -101 { // -101 未登录时也会返回两个 key
        return fmt.Errorf("unexpected code: %d, message: %s", nav.Code, nav.Message)
    }
    img := nav.Data.WbiImg.ImgUrl
    sub := nav.Data.WbiImg.SubUrl
    if img == "" || sub == "" {
        return fmt.Errorf("empty image or sub url: %s", body)
    }

    // https://i0.hdslb.com/bfs/wbi/7cd084941338484aae1ad9425b84077c.png
    imgParts := strings.Split(img, "/")
    subParts := strings.Split(sub, "/")

    // 7cd084941338484aae1ad9425b84077c.png
    imgPng := imgParts[len(imgParts)-1]
    subPng := subParts[len(subParts)-1]

    // 7cd084941338484aae1ad9425b84077c
    wbiKeys.Img = strings.TrimSuffix(imgPng, ".png")
    wbiKeys.Sub = strings.TrimSuffix(subPng, ".png")

    wbiKeys.mixin()
    wbiKeys.lastUpdateTime = time.Now()
    return nil
}

func (wk *WbiKeys) mixin() {
    var mixin [32]byte
    wbi := wk.Img + wk.Sub
    for i := range mixin { // for i := 0; i < len(mixin); i++ {
        mixin[i] = wbi[mixinKeyEncTab[i]]
    }
    wk.Mixin = string(mixin[:])
}

var mixinKeyEncTab = [...]int{
    46, 47, 18, 2, 53, 8, 23, 32,
    15, 50, 10, 31, 58, 3, 45, 35,
    27, 43, 5, 49, 33, 9, 42, 19,
    29, 28, 14, 39, 12, 38, 41, 13,
    37, 48, 7, 16, 24, 55, 40, 61,
    26, 17, 0, 1, 60, 51, 30, 4,
    22, 25, 54, 21, 56, 59, 6, 63,
    57, 62, 11, 36, 20, 34, 44, 52,
}

func removeUnwantedChars(v url.Values, chars ...byte) url.Values {
    b := []byte(v.Encode())
    for _, c := range chars {
        b = bytes.ReplaceAll(b, []byte{c}, nil)
    }
    s, err := url.ParseQuery(string(b))
    if err != nil {
        panic(err)
    }
    return s
}

type Nav struct {
    Code    int    `json:"code"`
    Message string `json:"message"`
    Ttl     int    `json:"ttl"`
    Data    struct {
        WbiImg struct {
            ImgUrl string `json:"img_url"`
            SubUrl string `json:"sub_url"`
        } `json:"wbi_img"`

        // ......
    } `json:"data"`
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

```java
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.*;
import java.util.stream.Collectors;

public class WbiTest {
    private static final int[] mixinKeyEncTab = new int[]{
            46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49,
            33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40,
            61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11,
            36, 20, 34, 44, 52
    };

    private static final char[] hexDigits = "0123456789abcdef".toCharArray();

    public static String md5(String input) {
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            byte[] messageDigest = md.digest(input.getBytes(StandardCharsets.UTF_8));
            char[] result = new char[messageDigest.length * 2];
            for (int i = 0; i < messageDigest.length; i++) {
                result[i * 2] = hexDigits[(messageDigest[i] >> 4) & 0xF];
                result[i * 2 + 1] = hexDigits[messageDigest[i] & 0xF];
            }
            return new String(result);
        } catch (NoSuchAlgorithmException e) {
            return null;
        }
    }

    public static String getMixinKey(String imgKey, String subKey) {
        String s = imgKey + subKey;
        StringBuilder key = new StringBuilder();
        for (int i = 0; i < 32; i++)
            key.append(s.charAt(mixinKeyEncTab[i]));
        return key.toString();
    }

    public static String encodeURIComponent(Object o) {
        return URLEncoder.encode(o.toString(), StandardCharsets.UTF_8).replace("+", "%20");
    }

    public static void main(String[] args) {
        String imgKey = "653657f524a547ac981ded72ea172057";
        String subKey = "6e4909c702f846728e64f6007736a338";
        String mixinKey = getMixinKey(imgKey, subKey);
        System.out.println(mixinKey); // 72136226c6a73669787ee4fd02a74c27

        // 用TreeMap自动排序
        TreeMap<String, Object> map = new TreeMap<>();
        map.put("foo", "one one four");
        map.put("bar", "五一四");
        map.put("baz", 1919810);
        map.put("wts", System.currentTimeMillis() / 1000);
        String param = map.entrySet().stream()
                .map(it -> String.format("%s=%s", it.getKey(), encodeURIComponent(it.getValue())))
                .collect(Collectors.joining("&"));
        String s = param + mixinKey;

        String wbiSign = md5(s);
        System.out.println(wbiSign);
        String finalParam = param + "&w_rid=" + wbiSign;
        System.out.println(finalParam);
    }
}
```

### Kotlin

说明: 为了便于使用和缓存, 重新编写为实体类形式, 并拆分了多个文件. 使用官方的JSON序列化. (可以根据需要换成其他的)

WbiParams.kt

```kotlin
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.jsonPrimitive

private fun JsonElement?.get(): String {
    check(this != null) { "No contents found" }
    return this.jsonPrimitive.content.split('/').last().removeSuffix(".png")
}

private val mixinKeyEncTab = intArrayOf(
    46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49,
    33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40,
    61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11,
    36, 20, 34, 44, 52
)

@Serializable
data class WbiParams(
    val imgKey: String,
    val subKey: String,
) {
    // 此处整合了切分参数(直接传入{img_url:string, sub_url:string}即可), 不需要可以删掉
    constructor(wbiImg: JsonObject) : this(wbiImg["img_url"].get(), wbiImg["sub_url"].get())

    private val mixinKey: String
        get() = (imgKey + subKey).let { s ->
            buildString {
                repeat(32) {
                    append(s[mixinKeyEncTab[it]])
                }
            }
        }

    // 创建对象(GET获取或者读缓存, 比如Redis)之后, 直接调用此函数处理
    fun enc(params: Map<String, Any?>): String {
        val sorted = params.filterValues { it != null }.toSortedMap()
        return buildString {
            append(sorted.toQueryString())
            val wts = System.currentTimeMillis() / 1000
            sorted["wts"] = wts
            append("&wts=")
            append(wts)
            append("&w_rid=")
            append((sorted.toQueryString() + mixinKey).toMD5())
        }
    }
}
```

Extensions.kt

```kotlin
import java.security.MessageDigest

private val hexDigits = "0123456789abcdef".toCharArray()

fun ByteArray.toHexString() = buildString(this.size shl 1) {
    this@toHexString.forEach { byte ->
        append(hexDigits[byte.toInt() ushr 4 and 15])
        append(hexDigits[byte.toInt() and 15])
    }
}

fun String.toMD5(): String {
    val md = MessageDigest.getInstance("MD5")
    val digest = md.digest(this.toByteArray())
    return digest.toHexString()
}

fun Map<String, Any?>.toQueryString() = this.filterValues { it != null }.entries.joinToString("&") { (k, v) ->
    "${k.encodeURIComponent()}=${v!!.encodeURIComponent()}"
}
```

获取和使用案例略

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
        .take(32)
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
fn encode_wbi(params: Vec<(&str, String)>, (img_key, sub_key): (String, String)) -> String {
    let cur_time = match SystemTime::now().duration_since(UNIX_EPOCH) {
        Ok(t) => t.as_secs(),
        Err(_) => panic!("SystemTime before UNIX EPOCH!"),
    };
    _encode_wbi(params, (img_key, sub_key), cur_time)
}

fn _encode_wbi(
    mut params: Vec<(&str, String)>,
    (img_key, sub_key): (String, String),
    timestamp: u64,
) -> String {
    let mixin_key = get_mixin_key((img_key + &sub_key).as_bytes());
    // 添加当前时间戳
    params.push(("wts", timestamp.to_string()));
    // 重新排序
    params.sort_by(|a, b| a.0.cmp(b.0));
    // 拼接参数
    let query = params
        .iter()
        .map(|(k, v)| format!("{}={}", get_url_encoded(k), get_url_encoded(v)))
        .collect::<Vec<_>>()
        .join("&");
    // 计算签名
    let web_sign = format!("{:?}", md5::compute(query.clone() + &mixin_key));
    // 返回最终的 query
    query + &format!("&w_rid={}", web_sign)
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
    Ok((
        take_filename(wbi_img.img_url).unwrap(),
        take_filename(wbi_img.sub_url).unwrap(),
    ))
}

fn take_filename(url: String) -> Option<String> {
    url.rsplit_once('/')
        .and_then(|(_, s)| s.rsplit_once('.'))
        .map(|(s, _)| s.to_string())
}

#[tokio::main]
async fn main() {
    let keys = get_wbi_keys().await.unwrap();
    let params = vec![
        ("foo", String::from("114")),
        ("bar", String::from("514")),
        ("baz", String::from("1919810")),
    ];
    let query = encode_wbi(params, keys);
    println!("{}", query);
}

// 取自文档描述的测试用例
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_get_filename() {
        assert_eq!(
            take_filename(
                "https://i0.hdslb.com/bfs/wbi/7cd084941338484aae1ad9425b84077c.png".to_string()
            ),
            Some("7cd084941338484aae1ad9425b84077c".to_string())
        );
    }

    #[test]
    fn test_get_mixin_key() {
        let concat_key =
            "7cd084941338484aae1ad9425b84077c".to_string() + "4932caff0ff746eab6f01bf08b70ac45";
        assert_eq!(
            get_mixin_key(concat_key.as_bytes()),
            "ea1db124af3c7062474693fa704f4ff8"
        );
    }

    #[test]
    fn test_encode_wbi() {
        let params = vec![
            ("foo", String::from("114")),
            ("bar", String::from("514")),
            ("zab", String::from("1919810")),
        ];
        assert_eq!(
            _encode_wbi(
                params,
                (
                    "7cd084941338484aae1ad9425b84077c".to_string(),
                    "4932caff0ff746eab6f01bf08b70ac45".to_string()
                ),
                1702204169
            ),
            "bar=514&foo=114&wts=1702204169&zab=1919810&w_rid=8f6f2b5b3d485fe1886cec6a0be8c5d4"
                .to_string()
        )
    }
}
```

### Swift

需要 [Alamofire](https://github.com/Alamofire/Alamofire) 和 [SwiftyJSON](https://github.com/SwiftyJSON/SwiftyJSON) 库

```swift
import Alamofire
import CommonCrypto
import Foundation
import SwiftyJSON

func biliWbiSign(param: String, completion: @escaping (String?) -> Void) {
    func getMixinKey(orig: String) -> String {
        return String(mixinKeyEncTab.map { orig[orig.index(orig.startIndex, offsetBy: $0)] }.prefix(32))
    }
    
    func encWbi(params: [String: Any], imgKey: String, subKey: String) -> [String: Any] {
        var params = params
        let mixinKey = getMixinKey(orig: imgKey + subKey)
        let currTime = Int(Date().timeIntervalSince1970)
        params["wts"] = currTime
        let query = params.sorted {
            $0.key < $1.key
        }.map { (key, value) -> String in
            let stringValue: String
            if let doubleValue = value as? Double, doubleValue.truncatingRemainder(dividingBy: 1) == 0 {
                stringValue = String(Int(doubleValue))
            } else {
                stringValue = String(describing: value)
            }
            let filteredValue = stringValue.filter { !"!'()*".contains($0) }
            return "\(key)=\(filteredValue)"
        }.joined(separator: "&")
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
            for pair in spdParam {
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

// 使用示例
biliWbiSign(param: "bar=514&foo=114&zab=1919810") {
    signedQuery in
    if let signedQuery = signedQuery {
        print("签名后的参数: \(signedQuery)")
    } else {
        print("签名失败")
    }
}

RunLoop.main.run()//程序类型为命令行程序时需要添加这行代码

```

```text
签名后的参数: bar=514&wts=1741082093&foo=114&zab=1919810&w_rid=04775bb3debbb45bab86a93a1c08d12a
```


### CPlusPlus

需要 c++ 23 标准库，[cpr](https://github.com/libcpr/cpr)、[cryptopp](https://github.com/weidai11/cryptopp)、[nlohmann/json](https://github.com/nlohmann/json) 等依赖

```c++
#include <array>    // std::array
#include <locale>   // std::locale
#include <print>    // std::println

/// thrid party libraries
#include <cpr/cpr.h>
#include <cryptopp/md5.h>
#include <cryptopp/hex.h>
#include <nlohmann/json.hpp>

/*
 * 注意，假定不会发生错误！
 */
class Wbi {
    constexpr static std::array<uint8_t, 64> MIXIN_KEY_ENC_TAB_ = {
        46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35,
        27, 43, 5, 49, 33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13,
        37, 48, 7, 16, 24, 55, 40, 61, 26, 17, 0, 1, 60, 51, 30, 4,
        22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11, 36, 20, 34, 44, 52
    };

    /* 获取 md5 hex(lower) */
    static std::string Get_md5_hex(const std::string &Input_str) {
        CryptoPP::Weak1::MD5 hash;
        std::string          md5_hex;

        CryptoPP::StringSource ss(Input_str, true,
            new CryptoPP::HashFilter(hash,
                new CryptoPP::HexEncoder(
                    new CryptoPP::StringSink(md5_hex)
                )
            )
        );

        std::ranges::for_each(md5_hex, [](char &x) { x = std::tolower(x); });
        return md5_hex;
    }

public:
    /* 将 json 转换为 url 编码字符串 */
    static std::string Json_to_url_encode_str(const nlohmann::json &Json) {
        std::string encode_str;
        for (const auto &[key, value]: Json.items()) {
            encode_str.append(key).append("=").append(cpr::util::urlEncode(value.is_string() ? value.get<std::string>() : to_string(value))).append("&");
        }

        // remove the last '&'
        encode_str.resize(encode_str.size() - 1, '\0');
        return encode_str;
    }

    /* 获取 wbi key */
    static std::pair<std::string, std::string> Get_wbi_key() {
        const auto url    = cpr::Url {"https://api.bilibili.com/x/web-interface/nav"};
        const auto cookie = cpr::Cookies {
            {"SESSDATA", "xxxxxxxxxxxx"},
        };
        const auto header = cpr::Header {
            {"User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"},
            {"Referer", "https://www.bilibili.com/"},
        };
        const auto response = cpr::Get(url, cookie, header);

        nlohmann::json json = nlohmann::json::parse(response.text);

        const std::string img_url = json["data"]["wbi_img"]["img_url"];
        const std::string sub_url = json["data"]["wbi_img"]["sub_url"];

        std::string img_key = img_url.substr(img_url.find("wbi/") + 4, img_url.find(".png") - img_url.find("wbi/") - 4);
        std::string sub_key = sub_url.substr(sub_url.find("wbi/") + 4, sub_url.find(".png") - sub_url.find("wbi/") - 4);
        return {img_key, sub_key};
    }

    /* 获取 mixin key */
    static std::string Get_mixin_key(const std::string &Img_key, const std::string &Sub_key) {
        std::string raw_wbi_key_str = Img_key + Sub_key;
        std::string result;

        std::ranges::for_each(MIXIN_KEY_ENC_TAB_, [&result, &raw_wbi_key_str](const uint8_t x) {
            result.push_back(raw_wbi_key_str.at(x));
        });

        return result.substr(0, 32);
    }

    /* 计算签名(w_rid) */
    static std::string Calc_sign(nlohmann::json &Params, const std::string &Mixin_key) {
        Params["wts"] = std::chrono::duration_cast<std::chrono::seconds>(std::chrono::system_clock::now().time_since_epoch()).count();

        const std::string encode_str = Json_to_url_encode_str(Params).append(Mixin_key);
        return Get_md5_hex(encode_str);
    }
};


int main() {
    nlohmann::json Params;
    // qn=32&fnver=0&fnval=4048&fourk=1&avid=1755630705&cid=1574294582
    Params["qn"]    = 32;
    Params["fnver"] = 0;
    Params["fnval"] = 4048;
    Params["fourk"] = 1;
    Params["avid"]  = 1755630705;
    Params["cid"]   = 1574294582;

    auto       [img_key, sub_key] = Wbi::Get_wbi_key();
    const auto mixin_key          = Wbi::Get_mixin_key(img_key, sub_key);
    const auto w_rid              = Wbi::Calc_sign(Params, mixin_key);
    std::println("{}", Wbi::Json_to_url_encode_str(Params) + "&w_rid=" + w_rid);
}
```

```text
avid=1755630705&cid=1574294582&fnval=4048&fnver=0&fourk=1&qn=32&wts=1717922933&w_rid=43571b838a1611fa121189083cfc1784
```

### Haskell

无第三方依赖: `base`, `Cabal-syntax`, `bytestring`, `containers`<br />
注: 此处使用自写的 URI 编码模块, 实际可用别的第三方库替代

`Main.hs`:
```hs
module Main (wbi, main) where

import Data.ByteString.Char8 (pack)
import qualified Data.Map.Strict as Map
import Distribution.Utils.MD5 (md5, showMD5)
import URIEncoder (encodeURIComponent)
import Data.Time.Clock.System (getSystemTime, systemSeconds)

mixinKeyEncTab :: [Int]
mixinKeyEncTab = [
  46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49,
  33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40,
  61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11,
  36, 20, 34, 44, 52
  ]

getMixinKey :: String -> String -> String
getMixinKey imgKey subKey =
  let s = imgKey ++ subKey
  in map (\i -> s !! (mixinKeyEncTab !! i)) [0..31]

join :: [String] -> String -> String
join arr ins = concatMap (++ ins) (init arr) ++ last arr

wbi :: String -> String -> Integer -> Map.Map String String -> String
wbi imgKey subKey wts params =
  let orig = join (map (\(k, v) -> encodeURIComponent k ++ "=" ++ encodeURIComponent v) (Map.toList $ Map.insert "wts" (show wts) params)) "&"
  in orig ++ "&w_rid=" ++ showMD5 (md5 $ pack $ orig ++ getMixinKey imgKey subKey)

main :: IO ()
main = do -- hard encode for test
  let params1 = Map.fromList [("aid", "2")]
      params2 = Map.fromList [("foo", "114")
                            ,("bar", "514")
                            ,("hello", "世 界")
                            ]
      imgKey = "7cd084941338484aae1ad9425b84077c"
      subKey = "4932caff0ff746eab6f01bf08b70ac45"
  wts1 <- getSystemTime 
  putStrLn $ wbi imgKey subKey (toInteger $ systemSeconds wts1) params1
  wts2 <- getSystemTime 
  putStrLn $ wbi imgKey subKey (toInteger $ systemSeconds wts2) params2
```

`URIEncoder.hs`<!--(by DS)-->:
```hs
module URIEncoder (encodeURIComponent) where

import Data.Char (ord, chr, intToDigit)
import Data.Bits (shiftL, shiftR, (.&.))
import Data.List (isInfixOf)

-- ES 19.2.6.4 encodeURIComponent ( uriComponent )
encodeURIComponent :: String -> String
encodeURIComponent input = case encode input "" of
  Right result -> result
  Left err -> error err

-- ES 19.2.6.5 Encode ( string, extraUnescaped )
encode :: String -> String -> Either String String
encode string extraUnescaped = loop 0 string
  where
    alwaysUnescaped = ['A'..'Z'] ++ ['a'..'z'] ++ ['0'..'9'] ++ "-.!~*'()"
    unescapedSet = alwaysUnescaped ++ extraUnescaped
    
    loop k str
      | k >= length str = Right []
      | otherwise = case codePointAt str k of
          (Nothing, _) -> Left "Unpaired surrogate"
          (Just (cp, _), newK) ->
            if [str !! k] `isInfixOf` unescapedSet
            then (str !! k :) <$> loop (k + 1) str
            else do
              bytes <- utf8Encode cp
              let escaped = concatMap percentEncode bytes
              rest <- loop newK str
              Right (escaped ++ rest)

codePointAt :: String -> Int -> (Maybe (Int, Int), Int)
codePointAt s k
  | k >= length s = (Nothing, k)
  | otherwise =
      let c1 = ord (s !! k)
      in if 0xD800 <= c1 && c1 <= 0xDBFF && k+1 < length s
         then let c2 = ord (s !! (k+1))
              in if 0xDC00 <= c2 && c2 <= 0xDFFF
                 then ( Just (0x10000 + ((c1 - 0xD800) `shiftL` 10) + (c2 - 0xDC00), 2)
                     , k + 2 )
                 else (Just (c1, 1), k + 1)
         else (Just (c1, 1), k + 1)

utf8Encode :: Int -> Either String [Int]
utf8Encode cp
  | cp < 0 = Left "Invalid code point"
  | cp <= 0x007F = Right [cp]
  | cp <= 0x07FF = Right
      [ 0xC0 + (cp `shiftR` 6)
      , 0x80 + (cp .&. 0x3F) ]
  | cp <= 0xFFFF = Right
      [ 0xE0 + (cp `shiftR` 12)
      , 0x80 + ((cp `shiftR` 6) .&. 0x3F)
      , 0x80 + (cp .&. 0x3F) ]
  | cp <= 0x10FFFF = Right
      [ 0xF0 + (cp `shiftR` 18)
      , 0x80 + ((cp `shiftR` 12) .&. 0x3F)
      , 0x80 + ((cp `shiftR` 6) .&. 0x3F)
      , 0x80 + (cp .&. 0x3F) ]
  | otherwise = Left "Code point out of range"

percentEncode :: Int -> String
percentEncode byte = '%' : toHex byte
  where
    toHex n = [hexDigit (n `div` 16), hexDigit (n `mod` 16)]
    hexDigit x
      | x < 10 = intToDigit x
      | otherwise = chr (x - 10 + ord 'A')
```

输出:
```text
aid=2&wts=1744823207&w_rid=a3cd246bd42c066932752b24694eaf0d
bar=514&foo=114&hello=%E4%B8%96%20%E7%95%8C&wts=1744823207&w_rid=93acf59d85f74453e40cea00056c3daf
```
