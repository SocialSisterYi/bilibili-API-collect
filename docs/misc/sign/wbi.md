# Wbi签名

自 2023 年三月起，B站 Web 端部分接口开始使用 Wbi 鉴权方式，即一种独立于 [APP 鉴权](APP.md) 与其他 Cookie 鉴权的方式，表现在 REST API 请求时在 query 中添加了`w_rid`和`wts`字段，为一种 Web 端的风控手段

这些接口涵盖”用户投稿视频“、”用户投稿专栏“、”首页推送“、”推广信息“、”热搜“、”视频信息“、”视频取流“、”搜索“等待主要查询性业务接口，如果请求这些 REST API 缺失`w_rid`和`wts`字段，则会在数次请求后返回`-403:非法访问`这样的风控错误

感谢 [#631](https://github.com/SocialSisterYi/bilibili-API-collect/issues/631) 的研究与逆向工程

## Wbi签名算法

1. 获取实时口令

   从 [nav 接口](../../login/login_info.md#导航栏用户信息) 中获取`img_url`、`sub_url`两个字段的参数，并保存备用（如存入 localStorage），相关内容节选如下：

   **注：`img_url`、`sub_url`两个字段的值看似为存于 BFS 中的 png 图片 url，实则只是经过伪装的实时 Token，故无需且不能试图访问这两个 url**

   ```json
   "wbi_img": {
       "img_url": "https://i0.hdslb.com/bfs/wbi/653657f524a547ac981ded72ea172057.png",
       "sub_url": "https://i0.hdslb.com/bfs/wbi/6e4909c702f846728e64f6007736a338.png"
   },
   ```
   这两个 Key 均为 url 中末尾路径的无扩展名的文件名，即`img_key=653657f524a547ac981ded72ea172057`，`sub_key=6e4909c702f846728e64f6007736a338`

   这两个 Key 的值无关登录 Session 与 IP，属于全站统一使用的，但**每日都会变化**，使用时应做好**缓存和刷新**处理

2. 打乱重排实时口令

   把上一步获取到的`sub_key`拼接在`img_key`后面 **（这里不是`img_url`和`sub_url`）** 作为一个整体，将这个整体进行特定的顺序的字符打乱重排，再将重排后的字符串截取前 32 字符的切片，作为一个新的变量`mixin_key`，重排映射表长为 64，内容如下：

   ```javascript
   const mixinKeyEncTab = [
       46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49,
       33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40,
       61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11,
       36, 20, 34, 44, 52
   ]
   ```

   打乱重排内容如下（以上述第 1 步的参数作为输入）

   ```
   72136226c6a73669787ee4fd02a74c27
   ```

3. 将欲签名的请求参数排序后编码

   若下方内容为欲签名的请求参数（以 js obj 为例）

   ```javascript
   {
   	foo: '114',
   	bar: '514',
       baz: 1919810
   }
   ```

   那么按照 Key 排序并进行 url query 编码后的结果应为：

   ```
   bar=514&baz=1919810&foo=114
   ```

4. 为参数中添加`wts`时间戳

   `wts`字段的值应为以秒为单位的 Unix TimeStamp，如`1684746387`

   将`wts`参数添加在参数列表最后，即：

   ```
   bar=514&baz=1919810&foo=114&wts=1684746387
   ```

5. 计算`w_rid`并添加在其后

   在上一步得出的 url query 字符串后拼接第 2 步计算得出的`mixin_key`（作为盐）

   ```
   bar=514&baz=1919810&foo=114&wts=168474638772136226c6a73669787ee4fd02a74c27
   ```

   对这个整体进行 **md5 Hash 运算**（32-bit 字符小写），得到的值便是 Wbi Sign，也就是参数`w_rid`

   ```
   d3cbd2a2316089117134038bf4caf442
   ```

   最后一步，把这个计算出的值作为参数`w_rid`添加在原始参数列表后，也就完成了一次 Wbi Sign，可以调用 REST API 进行请求了

   ```
   bar=514&baz=1919810&foo=114&wts=1684746387&w_rid=d3cbd2a2316089117134038bf4caf442
   ```

## Wbi签名算法实现Demo

该 Demo 提供 [Python](#Python)、[JavaScript](#JavaScript) 语言

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
    resp = requests.get('https://api.bilibili.com/x/web-interface/nav')
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
{'bar': '514', 'baz': '1919810', 'foo': '114', 'wts': '1684746387', 'w_rid': 'd3cbd2a2316089117134038bf4caf442'}
bar=514&baz=1919810&foo=114&wts=1684746387&w_rid=d3cbd2a2316089117134038bf4caf442
```

### JavaScript

需要`axios`、`md5`依赖

```javascript
import md5 from 'md5'
import axios from 'axios'

const mixinKeyEncTab = [
    46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49,
    33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40,
    61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11,
    36, 20, 34, 44, 52
]

// 对 imgKey 和 subKey 进行字符顺序打乱编码
function getMixinKey(orig) {
    let temp = ''
    mixinKeyEncTab.forEach((n) => {
        temp += orig[n]
    })
    return temp.slice(0, 32)
}

// 为请求参数进行 wbi 签名
function encWbi(params, img_key, sub_key) {
    const mixin_key = getMixinKey(img_key + sub_key),
        curr_time = Math.round(Date.now() / 1000),
        chr_filter = /[!'\(\)*]/g
    let query = []
    params = Object.assign(params, {wts: curr_time})    // 添加 wts 字段
    // 按照 key 重排参数
    Object.keys(params).sort().forEach((key) => {
        query.push(
            encodeURIComponent(key) +
            '=' + 
            // 过滤 value 中的 "!'()*" 字符
            encodeURIComponent(('' + params[key]).replace(chr_filter, ''))
        )
    })
    query = query.join('&')
    const wbi_sign = md5(query + mixin_key) // 计算 w_rid
    return query + '&w_rid=' + wbi_sign
}

// 获取最新的 img_key 和 sub_key
async function getWbiKeys() {
    const resp = await axios({
        url: 'https://api.bilibili.com/x/web-interface/nav',
        method: 'get',
        responseType: 'json'
    }),
        json_content = resp.data,
        img_url = json_content.data.wbi_img.img_url,
        sub_url = json_content.data.wbi_img.sub_url
    return {
        img_key: img_url.substring(img_url.lastIndexOf('/') + 1, img_url.length).split('.')[0],
        sub_key: sub_url.substring(sub_url.lastIndexOf('/') + 1, sub_url.length).split('.')[0]
    }
}

const wbi_keys = await getWbiKeys()

const query = encWbi(
    {
        foo: '114',
        bar: '514',
        baz: 1919810
    },
    wbi_keys.img_key, 
    wbi_keys.sub_key
)
console.log(query)
```

输出内容为进行 Wbi 签名的后参数的 url query 形式

```
bar=514&baz=1919810&foo=114&wts=1684805578&w_rid=bb97e15f28edf445a0e4420d36f0157e
```
