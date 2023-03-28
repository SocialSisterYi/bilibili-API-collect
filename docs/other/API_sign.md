# API 签名与鉴权

部分客户端专用的 RESTful API 存在基于 sign 的鉴权，需要使用规定的`appkey`及其对应的`appsec`与原始请求参数进行签名计算

不同 `appkey` 对应不同的 app (如客户端、概念版、必剪、漫画、bililink等)

不同平台同 app 也会存在不同的 `appkey` (如安卓端、ios端、TV端等)

同平台同 app 下不同功能也会存在不同的 `appkey`（如登录专用、取流专用等）

不同版本的客户端的 `appkey` 也可能不同

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
## 已知的APPKEY/APPSEC, 及部分参数信息

| APPKEY | APPSEC | platform<sup>2</sup> | APP类型 | neuronAppId<sup>1</sup> | mobi_app<sup>2</sup> | 备注 |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| 9d5889cf67e615cd | 8fd9bb32efea8cef801fd895bef2713d | `android` | Ai4cCreatorAndroid |
| 1d8b6e7d45233436 | 560c52ccd288fed045859ed18bffd973 | `android` | 普通版(粉版) | `1` |`android`| 获取资源通用 |
| 783bbb7264451d82 | 2653583c8873dea268ab9386918b1d65 | `android` | 普通版(粉版) | `1` | `android` | 仅获取用户信息时使用(7.X及更新版本) |
| 57263273bc6b67f6 | a0488e488d1567960d3a765e8d129f90 | `android` | 普通版(粉版) | `1` |`android`| 可能来自旧版 |
| 07da50c9a0bf829f | 25bdede4e1581c836cab73a48790ca6e | `android` | 概念版(蓝版) | `3` | `android_b` |
| 191c3b6b975af184 | ******************************** | `android` | 概念版(蓝版) | `3` | `android_b` | 新出现, 仅获取用户信息时使用. 暂未知appsec |
| 178cf125136ca8ea | 34381a26236dd1171185c0beb042e1c6 | `android` | 概念版(蓝版) | `3` | `android_b` | 可能来自旧版 |
| 7d336ec01856996b | a1ce6983bc89e20a36c37f40c4f1a0dd | `android` | 概念版(蓝版) | `3` | `android_b` | 可能来自旧版 |
| dfca71928277209b | b5475a8825547a4fc26c7d518eaaa02e | `android` | HD版 | `5` | `android_hd` |
| bb3101000e232e27 | 36efcfed79309338ced0380abd824ac1 | `android` | play版(国际版) | `14` | `android_i` |
| ae57252b0c09105d | c75875c596a69eb55bd119e74b07cfe3 | `android` | play版(国际版) | `14` | `android_i` | 仅获取用户信息时使用(7.X及更新版本) |
| 8e16697a1b4f8121 | f5dd03b752426f2e623d7badb28d190a | `android` | play版(国际版) | `14` | `android_i` | 可能来自旧版 |
| 7d089525d3611b1c | acd495b248ec528c2eed1e862d393126 | `android` | 东南亚版 | `30` | `bstar_a` |
| iVGUTjsxvpLeuDCf | aHRmhWMLkdeMuILqORnYZocwMBpMEOdt | `android` | - | - | - | 视频取流专用, 仅5.X旧版使用 |
| YvirImLGlLANCLvM | JNlZNgfNGKZEpaDTkCdPQVXntXhuiJEM | `ios` | - | - | - | 视频取流专用 |
| 27eb53fc9058f8c3 | c2ed53a74eeefe3cf99fbd01d8c9c375 | `web`/`ios`? | - | - | - | 第三方授权使用 |
| 84956560bc028eb7 | 94aba54af9065f71de72f5508f1cd42e | ? | UWP版 | - | - | 部分API不接受此appkey, 返回-663错误 |
| 85eb6835b0a1034e | 2ad42749773c441109bdc0191257a664 | ? | UWP版? | - | - | 部分API不接受此appkey, 返回-663错误 |
| 4ebafd7c4951b366 | 8cb98205e9b2ad3669aad0fce12a4c13 | `ios` | iPhone客户端? | `iphone` | ? |
| 8d23902c1688a798 | 710f0212e62bd499b8d3ac6e1db9302a | `android` | AndroidBiliThings | ? | ? |
| 4c6e1021617d40d9 | e559a59044eb2701b7a8628c86aa12ae | `android` | AndroidMallTicket | ? | ? |
| c034e8b74130a886 | e4e8966b1e71847dc4a3830f2d078523 | `android` | AndroidOttSdk | `7` | ? |
| 4409e2ce8ffd12b8 | 59b43e04ad6965f34319062b478f83dd | `android` | 云视听小电视(TV版) | `9`? | `android_tv_yst`? |
| 37207f2beaebf8d7 | e988e794d4d4b6dd43bc0e89d6e90c43 | `android` | BiliLink | ? | ? |
| 9a75abf7de2d8947 | 35ca1c82be6c2c242ecc04d88c735f31 | `android` | BiliScan | ? | ? |
| aae92bc66f3edfab | af125a0d5279fd576c1b4418a3e8276d | ? | PC 投稿工具 | - | ? |
| bca7e84c2d947ac6 | 60698ba2f68e01ce44738920a0ffe768 | ? | login | - | ? |

注释:

<sup>1</sup> `neuronAppId`, 产品编号，由数据平台分配，粉=1，白=2，蓝=3，直播姬=4，HD=5，海外=6，OTT=7，漫画=8，TV野版=9，小视频=10，网易漫画=11，网易漫画lite=12，网易漫画HD=13, 国际版=14.

<sup>2</sup> `platform`, `mobi_app` 仅供参考, 具体值需要抓包确定.
