# APP API 签名与鉴权

## APP API 签名特性

部分客户端专用的 REST API 存在基于参数签名的鉴权，需要使用规定的`appkey`及其对应的`appsec`与原始请求参数进行签名计算，部分`AppKey`及与之对应的`AppSec`已经被公开：见该文档 [APPKey](APPKey.md)

- 不同 `appkey` 对应不同的 app (如客户端、概念版、必剪、漫画、bililink等)

- 不同平台同 app 也会存在不同的 `appkey` (如安卓端、ios端、TV端等)

- 同平台同 app 下不同功能也会存在不同的 `appkey`（如登录专用、取流专用等）

- 不同版本的客户端的 `appkey` 也可能不同

- **appkey与appsec一一对应**

## APP API 签名算法

1. 首先为参数中添加`appkey`字段
2. 然后按照参数的 Key 重新排序
3. 再对这个 Key-Value 进行 url query 序列化，并拼接与之对应的`appsec` (盐) 进行 **md5 Hash 运算**（32-bit 字符小写），该 hash 便是 API 签名
4. 最后在参数尾部增添`sign`字段，它的 Value 为上一步计算所得的 hash，一并作为表单或 Query 提交

## Demo

该 Demo 提供 [Python](#Python) 语言例程

使用 appkey = `1d8b6e7d45233436`, appsec = `560c52ccd288fed045859ed18bffd973` 对如下 `params` 参数进行签名

上述示例`appkey`、`AppSec`均来自文档 [APPKey](APPKey.md)

### Python

```python
import hashlib
import urllib.parse

def appsign(params, appkey, appsec):
    '为请求参数进行 APP 签名'
    params.update({'appkey': appkey})
    params = dict(sorted(params.items())) # 按照 key 重排参数
    query = urllib.parse.urlencode(params) # 序列化参数
    sign = hashlib.md5((query+appsec).encode()).hexdigest() # 计算 api 签名
    params.update({'sign':sign})
    return params

appkey = '1d8b6e7d45233436'
appsec = '560c52ccd288fed045859ed18bffd973'
params = {
    'id':114514,
    'str':'1919810',
    'test':'いいよ，こいよ',
}
signed_params = appsign(params, appkey, appsec)
query = urllib.parse.urlencode(signed_params)
print(signed_params)
print(query)
```

输出内容分别是进行 APP 签名的后参数的 key-Value 以及 url query 形式

```
{'appkey': '1d8b6e7d45233436', 'id': 114514, 'str': '1919810', 'test': 'いいよ，こいよ', 'sign': '01479cf20504d865519ac50f33ba3a7d'}
appkey=1d8b6e7d45233436&id=114514&str=1919810&test=%E3%81%84%E3%81%84%E3%82%88%EF%BC%8C%E3%81%93%E3%81%84%E3%82%88&sign=01479cf20504d865519ac50f33ba3a7d
```
