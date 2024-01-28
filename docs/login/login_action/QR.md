# 二维码登录

<img src="../../../assets/img/2233login.png"/>

## 扫码登录流程(伪代码)

```python
token, url = 申请二维码()
生成二维码(url) # 等待客户端扫码
while True:
    status, cookie = 扫码登录(token)
    match status:
        case 未扫描:
            continue
        case 二维码超时 | 二维码失效:
            提示('二维码失效或超时') # 需要用户重新操作
            break
        case 已扫描未确认:
            提示('扫描成功')
        case 登录成功:
            提示('扫描成功')
            存储cookie(cookie)
            SSO登录页面跳转()
            break
```

## web端扫码登录

### 申请二维码(web端)

> https://passport.bilibili.com/x/passport-login/web/qrcode/generate

*请求方式：GET*

密钥超时为180秒

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注   |
|---------|-----|------|------|
| code    | num | 返回值  | 0：成功 |
| message | str | 错误信息 |      |
| ttl     | num | 1    |      |
| data    | obj | 信息本体 |      |

`data`对象：

| 字段         | 类型  | 内容               | 备注     |
|------------|-----|------------------|--------|
| url        | str | 二维码内容 (登录页面 url) |        |
| qrcode_key | str | 扫码登录秘钥           | 恒为32字符 |

**示例：**

`url`中的值生成二维码，等待手机客户端扫描，并将`qrcode_key`保存备用

```shell
curl 'https://passport.bilibili.com/x/passport-login/web/qrcode/generate'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "url": "https://passport.bilibili.com/h5-app/passport/login/scan?navhide=1\u0026qrcode_key=8587cf8106a0b863c46d6bab913537f6\u0026from=",
        "qrcode_key": "8587cf8106a0b863c46d6bab913537f6"
    }
}
```

</details>

### 扫码登录(web端)

> https://passport.bilibili.com/x/passport-login/web/qrcode/poll

*请求方式：GET*

**url参数：**

| 参数名        | 类型  | 内容     | 必要性 | 备注  |
|------------|-----|--------|-----|-----|
| qrcode_key | str | 扫码登录秘钥 | 必要 |     |


密钥超时为180秒

验证登录成功后会进行设置以下cookie项：

`DedeUserID` `DedeUserID__ckMd5` `SESSDATA` `bili_jct`

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注   |
|---------|-----|------|------|
| code    | num | 返回值  | 0：成功 |
| message | str | 错误信息 |      |
| data    | obj | 信息本体 |      |

data 对象：

| 字段            | 类型  | 内容                                                             | 备注                     |
|---------------|-----|----------------------------------------------------------------|------------------------|
| url           | str | 游戏分站跨域登录 url                                                   | 未登录为空                  |
| refresh_token | str | 刷新`refresh_token`                                              | 未登录为空                  |
| timestamp     | num | 登录时间                                                           | 未登录为`0`<br />时间戳 单位为毫秒 |
| code          | num | 0：扫码登录成功<br />86038：二维码已失效<br />86090：二维码已扫码未确认<br />86101：未扫码 |                        |
| message       | str | 扫码状态信息                                                         |                        |

**示例：**

使用扫描秘钥`c3bd5286a2b40a822f5f60e9bf3f602e`登录

```shell
curl -G "https://passport.bilibili.com/x/passport-login/web/qrcode/poll"\
--data-urlencode 'qrcode_key=c3bd5286a2b40a822f5f60e9bf3f602e' \
-c 'cookie.txt'
```

当密钥正确时但未扫描时`code`为`86101`

<details>
<summary>查看响应示例：</summary>


```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "url": "",
    "refresh_token": "",
    "timestamp": 0,
    "code": 86101,
    "message": "未扫码"
  }
}
```

</details>

扫描成功但手机端未确认时`code`为`86090`

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "url": "",
        "refresh_token": "",
        "timestamp": 0,
        "code": 86090,
        "message": "二维码已扫码未确认"
    }
}
```

</details>

扫描成功手机端确认登录后，`code`为`0`，并向浏览器写入cookie

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "url": "https://passport.biligame.com/crossDomain?DedeUserID=***\u0026DedeUserID__ckMd5=***\u0026Expires=***\u0026SESSDATA=***\u0026bili_jct=***\u0026gourl=https%3A%2F%2Fpassport.bilibili.com",
        "refresh_token": "***",
        "timestamp": 1662363009601,
        "code": 0,
        "message": ""
    }
}
```

</details>

**响应头部抓包信息：**

可明显看见设置了几个cookie

<details>
<summary>查看响应示例：</summary>

```http
HTTP/1.1 200 OK
Date: Mon, 05 Sep 2022 07:30:09 GMT
Expires: Mon, 05 Sep 2022 07:30:08 GMT
Cache-control: no-cache
Content-encoding: br
Content-type: application/json; charset=utf-8
bili-status-code: 0
bili-trace-id: 0d23fe044a6315a5
set-cookie: SESSDATA=***; Path=/; Domain=bilibili.com; Expires=Sat, 04 Mar 2023 07:30:09 GMT; HttpOnly; Secure
set-cookie: bili_jct=***; Path=/; Domain=bilibili.com; Expires=Sat, 04 Mar 2023 07:30:09 GMT
set-cookie: DedeUserID=***; Path=/; Domain=bilibili.com; Expires=Sat, 04 Mar 2023 07:30:09 GMT
set-cookie: DedeUserID__ckMd5=***; Path=/; Domain=bilibili.com; Expires=Sat, 04 Mar 2023 07:30:09 GMT
set-cookie: sid=***; Path=/; Domain=bilibili.com; Expires=Sat, 04 Mar 2023 07:30:09 GMT
x-bili-trace-id: 2fbd8abd97dbd4db0d23fe044a6315a5
x-cache-webcdn: BYPASS from blzone02
```

</details>

二维码失效时`code`为`86038`

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
      "url": "",
      "refresh_token": "",
      "timestamp": 0,
      "code": 86038,
      "message": "二维码已失效"
    }
}
```

</details>

## web端扫码登录-旧版

以下为旧版扫码登录 API，部分可正常访问

### 申请二维码(web端-旧版)

> https://passport.bilibili.com/qrcode/getLoginUrl

*请求方式：GET*

密钥超时为180秒

**json回复：**

根对象：

| 字段     | 类型   | 内容   | 备注     |
|--------|------|------|--------|
| code   | num  | 返回值  | 0：成功   |
| status | bool | true | 作用尚不明确 |
| ts     | num  | 请求时间 | 时间戳    |
| data   | obj  | 信息本体 |        |

`data`对象：

| 字段       | 类型  | 内容               | 备注     |
|----------|-----|------------------|--------|
| url      | str | 二维码内容 (登录页面 url) |        |
| oauthKey | str | 扫码登录秘钥           | 恒为32字符 |

**示例：**

`url`中的值生成二维码，等待手机客户端扫描，并将`oauthKey`保存备用

```shell
curl 'https://passport.bilibili.com/qrcode/getLoginUrl'
```

<details>
<summary>查看响应示例：</summary>

```json
{
	"code": 0,
	"status": true,
	"ts": 1583314311,
	"data": {
		"url": "https://passport.bilibili.com/qrcode/h5/login?oauthKey=c3bd5286a2b40a822f5f60e9bf3f602e",
		"oauthKey": "c3bd5286a2b40a822f5f60e9bf3f602e"
	}
}
```

</details>

### 扫码登录(web端-旧版)

**接口已失效，请求结果始终为 `{ code: 20000, message: '该版本已不支持当前功能，请升级新版本！' }`**

> ~~https://passport.bilibili.com/qrcode/getLoginInfo~~

*请求方式：POST*

<details>
<summary>内容已过时：</summary>

密钥超时为180秒

验证登录成功后会进行设置以下cookie项：

`DedeUserID` `DedeUserID__ckMd5` `SESSDATA` `bili_jct`

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名      | 类型  | 内容     | 必要性 | 备注                         |
|----------|-----|--------|-----|----------------------------|
| oauthKey | str | 扫码登录秘钥 | 必要  |                            |
| gourl    | str | 跳转url  | 非必要 | 默认为http://www.bilibili.com |

**json回复：**

根对象：

| 字段      | 类型                   | 内容                        | 备注                                                      |
|---------|----------------------|---------------------------|---------------------------------------------------------|
| code    | num                  | 返回值                       | 0：成功，<br />20000：该版本已不支持当前功能，请升级新版本！ |
| message | str                  |                           | 正确无                                                     |
| ts      | num                  | 扫码时间                      | 错误无                                                     |
| status  | bool                 | 扫码是否成功                    | true：成功<br />false：未成功                                  |
| data    | 正确时：obj<br />错误时：num | 正确时：游戏分站url<br />错误时：错误代码 | 未成功时：<br />-1：密钥错误<br />-2：密钥超时<br />-4：未扫描<br />-5：未确认 |

data 对象：

| 字段  | 类型  | 内容           | 备注  |
|-----|-----|--------------|-----|
| url | str | 游戏分站跨域登录 url |     |

**示例：**

使用扫描秘钥`c3bd5286a2b40a822f5f60e9bf3f602e`登录

```shell
curl "https://passport.bilibili.com/qrcode/getLoginInfo"\
--data-urlencode 'oauthKey=c3bd5286a2b40a822f5f60e9bf3f602e' \
-c 'cookie.txt'
```

当密钥正确时但未扫描时`status`为`false`，`data`为`-4`

<details>
<summary>查看响应示例：</summary>

```json
{
    "status":false,
    "data":-4,
    "message":"Can't scan~"
}
```

</details>

扫描成功但手机端未确认时`status`为`false`，`data`为`-5`

<details>
<summary>查看响应示例：</summary>

```json
{
    "status":false,
    "data":-5,
    "message":"Can't confirm~"
}
```

</details>

扫描成功手机端确认登录后，`status`为`true`，`data`为对象，并向浏览器写入cookie

<details>
<summary>查看响应示例：</summary>

```json
{
	"code": 0,
	"status": true,
	"ts": 1583315474,
	"data": {
		"url": "https://passport.biligame.com/crossDomain?DedeUserID=***&DedeUserID__ckMd5=***&Expires=***&SESSDATA=***&bili_jct=***&gourl=http%3A%2F%2Fwww.bilibili.com"
	}
}
```

</details>

**响应头部抓包信息：**

可明显看见设置了几个cookie

<details>
<summary>查看响应示例：</summary>

```http
HTTP/1.1 200 OK
Date: Wed, 04 Mar 2020 10:36:37 GMT
Content-Type: application/json;charset=UTF-8
Transfer-Encoding: chunked
Connection: keep-alive
Server: Apache-Coyote/1.1
Set-Cookie: sid=***; Domain=.bilibili.com; Expires=Thu, 04-Mar-2021 10:36:37 GMT; Path=/
Set-Cookie: DedeUserID=***; Domain=.bilibili.com; Expires=Mon, 31-Aug-2020 10:19:57 GMT; Path=/
Set-Cookie: DedeUserID__ckMd5=***; Domain=.bilibili.com; Expires=Mon, 31-Aug-2020 10:19:57 GMT; Path=/
Set-Cookie: SESSDATA=***; Domain=.bilibili.com; Expires=Mon, 31-Aug-2020 10:19:57 GMT; Path=/; HttpOnly
Set-Cookie: bili_jct=***; Domain=.bilibili.com; Expires=Mon, 31-Aug-2020 10:19:57 GMT; Path=/
Expires: Wed, 04 Mar 2020 10:36:36 GMT
Cache-Control: no-cache
X-Cache-Webcdn: BYPASS from ks-sxhz-dx-w-01
```

</details>

</details>

## TV端扫码登录

### 申请二维码(TV端)

> https://passport.snm0516.aisee.tv/x/passport-tv-login/qrcode/auth_code
> 
> https://passport.bilibili.com/x/passport-tv-login/qrcode/auth_code

*请求方式：POST*

鉴权方式：appkey

密钥超时为180秒

本接口可申请用于TV端APP方式登录的`access_key`

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名   | 类型 | 内容       | 必要性       | 备注                       |
| -------- | ---- | ---------- | ------------ | -------------------------- |
| appkey   | str  | APP 密钥   | APP 方式必要 | [可用](#appkey-可用列表)     |
| local_id | num  | TV 端 id   | TV 端必要    | 可为`0`                    |
| ts       | num  | 当前时间戳 | APP 方式必要 |                            |
| sign     | str  | APP 签名   | APP 方式必要 |                            |
| mobi_app | str  | 平台标识   | 非必要       | 会被拼接到返回的 url query |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                                    |
|---------|-----|------|---------------------------------------|
| code    | num | 返回值  | 0：成功<br />-3：API校验密匙错误<br />-400：请求错误 |
| message | str | 错误信息 | 默认为0                                  |
| ttl     | num | 1    |                                       |
| data    | obj | 信息本体 |                                       |

`data`对象：

| 字段      | 类型 | 内容           | 备注         |
| --------- | ---- | -------------- | ------------ |
| url       | str  | 二维码内容 url |              |
| auth_code | str  | 扫码登录秘钥   | 恒为 32 字符 |

**示例：**

```shell
curl 'https://passport.snm0516.aisee.tv/x/passport-tv-login/qrcode/auth_code' \
--data-urlencode 'appkey=4409e2ce8ffd12b8' \
--data-urlencode 'local_id=0' \
--data-urlencode 'ts=0' \
--data-urlencode 'sign=e134154ed6add881d28fbdf68653cd9c'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "url": "https://passport.bilibili.com/x/passport-tv-login/h5/qrcode/auth?auth_code=0eeb635a64526709d70cb4c854a3b001",
    "auth_code": "0eeb635a64526709d70cb4c854a3b001"
  }
}
```

</details>

### 扫码登录(TV端)

> https://passport.snm0516.aisee.tv/x/passport-tv-login/qrcode/poll
> 
> https://passport.bilibili.com/x/passport-tv-login/qrcode/poll

*请求方式：POST*

鉴权方式：appkey

密钥超时为180秒

验证登录成功后会返回可用于APP方式登录的`access_key`以及`refresh_token`

**正文参数 (application/x-www-form-urlencoded)：**

| 参数名       | 类型  | 内容    | 必要性     | 备注                    |
|-----------|-----|-------|---------|-----------------------|
| appkey    | str | APP密钥 | APP方式必要 |[可用](#appkey-可用列表)  |
| auth_code | str | 扫码秘钥  | 必要      |                       |
| local_id  | num | TV端id | TV端必要   | 可为0                   |
| ts        | num | 当前时间戳 | APP方式必要 |                       |
| sign      | str | APP签名 | APP方式必要 |                       |

**json回复：**

根对象：

| 字段      | 类型                    | 内容   | 备注                                                                                                           |
|---------|-----------------------|------|--------------------------------------------------------------------------------------------------------------|
| code    | num                   | 返回值  | 0：成功<br />-3：API校验密匙错误<br />-400：请求错误<br/>-404：啥都木有<br />86038：二维码已失效<br />86039：二维码尚未确认<br/>86090：二维码已扫码未确认 |
| message | str                   | 错误信息 | 默认为0                                                                                                         |
| ttl     | num                   | 1    |                                                                                                              |
| data    | 有效时：obj<br />无效时：null | 信息本体 |                                                                                                              |

`data`对象：

| 字段            | 类型  | 内容         | 备注                  |
|---------------|-----|------------|---------------------|
| mid           | num | 登录用户mid    |                     |
| access_token  | str | APP登录Token |                     |
| refresh_token | str | APP刷新Token |                     |
| expires_in    | num | 有效时间       | 默认：15552000秒，等于180天 |

**示例：**

使用扫描秘钥`6214464b3025541abf6f654cf7569a01`进行验证登录

```shell
curl 'https://passport.snm0516.aisee.tv/x/passport-tv-login/qrcode/poll' \
--data-urlencode 'appkey=4409e2ce8ffd12b8' \
--data-urlencode 'auth_code=6214464b3025541abf6f654cf7569a01' \
--data-urlencode 'local_id=0' \
--data-urlencode 'ts=0' \
--data-urlencode 'sign=87de3d0fee7c3f4facd244537238914e' 
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "is_new": false,
    "mid": 10086,
    "access_token": "********************************",
    "refresh_token": "********************************",
    "expires_in": 15552000,
    "token_info": {
      "mid": 10086,
      "access_token": "********************************",
      "refresh_token": "********************************",
      "expires_in": 15552000
    },
    "cookie_info": {
      "cookies": [
        {
          "name": "SESSDATA",
          "value": "********************************",
          "http_only": 1,
          "expires": 1679988973,
          "secure": 0
        },
        {
          "name": "bili_jct",
          "value": "********************************",
          "http_only": 0,
          "expires": 1679988973,
          "secure": 0
        },
        {
          "name": "DedeUserID",
          "value": "*******",
          "http_only": 0,
          "expires": 1679988973,
          "secure": 0
        },
        {
          "name": "DedeUserID__ckMd5",
          "value": "****************",
          "http_only": 0,
          "expires": 1679988973,
          "secure": 0
        },
        {
          "name": "sid",
          "value": "********",
          "http_only": 0,
          "expires": 1679988973,
          "secure": 0
        }
      ],
      "domains": [
        ".bilibili.com",
        ".biligame.com",
        ".bigfun.cn",
        ".bigfunapp.cn",
        ".dreamcast.hk"
      ]
    },
    "sso": [
      "https://passport.bilibili.com/api/v2/sso",
      "https://passport.biligame.com/api/v2/sso",
      "https://passport.bigfunapp.cn/api/v2/sso"
    ]
  }
}
```

</details>

### appkey 可用列表

**仅覆盖 [docs/misc/sign/APPKey](../../misc/sign/APPKey.md) 中包含的 appkey**

|      APPKEY      |              APPSEC              | platform |      APP类型       | neuronAppId | mobi_app<sup>2</sup> |                    备注                    |
| :--------------: | :------------------------------: | :------------------: | :----------------: | :---------------------: | :------------------: | :----------------------------------------: |
| 783bbb7264451d82 | 2653583c8873dea268ab9386918b1d65 |      `android`       |        粉版        |           `1`           |      `android`       |    仅获取用户信息时使用(7.X及更新版本)     |
| 8d23902c1688a798 | 710f0212e62bd499b8d3ac6e1db9302a |      `android`       | AndroidBiliThings  |            ?            |          ?           |                                            |
| bca7e84c2d947ac6 | 60698ba2f68e01ce44738920a0ffe768 |          ?           |       login        |            -            |          ?           |                                            |
| 27eb53fc9058f8c3 | c2ed53a74eeefe3cf99fbd01d8c9c375 |     `web`/`ios`?     |         -          |            -            |          -           |               第三方授权使用               |
| 4409e2ce8ffd12b8 | 59b43e04ad6965f34319062b478f83dd |      `android`       | 云视听小电视(TV版) |          `9`?           |  `android_tv_yst`?   |                                            |
| dfca71928277209b | b5475a8825547a4fc26c7d518eaaa02e |      `android`       |       HD 版        |           `5`           |     `android_hd`     |                                            |

**注意：**

通过某一组 APPKEY/APPSEC 获取到的 access_token，当接口需要 `sign` 签名时也只能使用该组 APPKEY/APPSEC，否则出现 `{ code: -663, message: '鉴权失败，请联系账号组', ttl: 1 }` 错误。

**例外：**

`783bbb7264451d82`/`2653583c8873dea268ab9386918b1d65` 获取到的 access_token 可配合 `1d8b6e7d45233436`/`560c52ccd288fed045859ed18bffd973` 使用。
