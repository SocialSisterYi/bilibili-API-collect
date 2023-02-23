# API 签名与鉴权

部分客户端专用的 rest api 存在基于 sign 的鉴权，需要使用规定的`appkey`及其对应的`appsec`与原始请求参数进行签名计算

不同`appkey`对应不同的 app (如客户端、概念版、必剪、漫画、bililink等)

不同平台同 app 也会存在不同的 `appkey`(如安卓端、ios端、TV端等)

同平台同 app 下不同功能也会存在不同的 `appkey`（如登录专用、取流专用等）

**appkey与appsec一一对应**

## API签名的计算方式

首先为参数中添加`appkey`字段，然后按照参数的 key 重新排序，再将重排序后的参数使用 url query 格式序列化拼接与该 appkey 相对应的 appsec (盐值) 进行**md5 hash计算**（32位小写），该 hash 便是 API 签名

为参数尾部增添`sign`字段，它的值为上一步计算所得的 hash，一并作为表单提交

**实例：**

使用 appkey = `1d8b6e7d45233436`, appsec = `560c52ccd288fed045859ed18bffd973` 对如下 `params` 参数进行签名

```python
import hashlib
import urllib.parse

def appsign(params, appkey, appsec):
    '为请求参数进行 api 签名'
    params.update({'appkey': appkey})
    params = dict(sorted(params.items())) # 重排序参数 key
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

输出以下内容，分别是进行 api 签名后参数的 dict 以及 url query 格式

```
{'appkey': '1d8b6e7d45233436', 'id': 114514, 'str': '1919810', 'test': 'いいよ，こいよ', 'sign': '01479cf20504d865519ac50f33ba3a7d'}
appkey=1d8b6e7d45233436&id=114514&str=1919810&test=%E3%81%84%E3%81%84%E3%82%88%EF%BC%8C%E3%81%93%E3%81%84%E3%82%88&sign=01479cf20504d865519ac50f33ba3a7d
```

## 已知的APPKey

| appkey           | appsec（sign盐值）                   | 平台  | 应用       | 备注   |
|------------------|----------------------------------|-----|----------|------|
| 07da50c9a0bf829f | 25bdede4e1581c836cab73a48790ca6e | 安卓  | 概念版      |      |
| 1d8b6e7d45233436 | 560c52ccd288fed045859ed18bffd973 | 安卓  | 客户端      | 一般用途 |
| 178cf125136ca8ea | 34381a26236dd1171185c0beb042e1c6 | 安卓  | 概念版      |      |
| 27eb53fc9058f8c3 | c2ed53a74eeefe3cf99fbd01d8c9c375 | ios | 客户端      | 一般用途 |
| 37207f2beaebf8d7 | e988e794d4d4b6dd43bc0e89d6e90c43 | 安卓  | biliLink |      |
| 4409e2ce8ffd12b8 | 59b43e04ad6965f34319062b478f83dd | TV  | 客户端      |      |
| 57263273bc6b67f6 | a0488e488d1567960d3a765e8d129f90 | 安卓  | 客户端      |      |
| 8d23902c1688a798 | 710f0212e62bd499b8d3ac6e1db9302a | 安卓  | 车机版      |      |
| 5dce947fe22167f9 |                                  | 安卓  | 必剪       |      |
| 7d336ec01856996b | a1ce6983bc89e20a36c37f40c4f1a0dd | 安卓  | 概念版      |      |
| 85eb6835b0a1034e | 2ad42749773c441109bdc0191257a664 |     |          |      |
| 8e16697a1b4f8121 | f5dd03b752426f2e623d7badb28d190a | 安卓  | 国际版      |      |
| aae92bc66f3edfab | af125a0d5279fd576c1b4418a3e8276d | PC  | 投稿工具     |      |
| ae57252b0c09105d | c75875c596a69eb55bd119e74b07cfe3 | 安卓  | 国际版      |      |
| bb3101000e232e27 | 36efcfed79309338ced0380abd824ac1 | 安卓  | 国际版      |      |
| bca7e84c2d947ac6 | 60698ba2f68e01ce44738920a0ffe768 | 安卓  | 客户端      | 登录专用 |
| cc578d267072c94d | ffb6bb4c4edae2566584dbcacfc6a6ad | 安卓  | 轻视频      |      |
| cc8617fd6961e070 | 3131924b941aac971e45189f265262be | 安卓  | 漫画       |      |
| iVGUTjsxvpLeuDCf | aHRmhWMLkdeMuILqORnYZocwMBpMEOdt | 安卓  | 客户端      | 取流专用 |
| YvirImLGlLANCLvM | JNlZNgfNGKZEpaDTkCdPQVXntXhuiJEM | ios | 客户端      | 取流专用 |
