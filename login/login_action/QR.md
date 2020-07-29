# 二维码登录

web端流程&逻辑：

1. 获取`二维码内容url`以及`密钥`，以`二维码内容url`生成二维码，等待手机客户端扫描
2. 以`密钥`作为参数进行POST
3. if  `code` == `true` goto `6`                               else goto 4（是否已经确认）
4. if `data` == `-4`   goto `2`                                  else goto 5（是否已经扫描）
5. if `data` == `-5`   goto `3` & 提示`已扫描`        else goto `1`&提示`二维码超时或错误`（密钥是否有效）
6. 成功后会自动配置cookie 如需登录游戏分站则访问`data`.`url`中的url

TV端流程&逻辑：

1. 获取`二维码内容url`以及`密钥`，以`二维码内容url`生成二维码，等待手机客户端扫描
2. 以`密钥`作为参数进行POST
3. if `code` == `0`  提示`扫码成功`并存储`access_key`于`refersh_key` else goto `4`
4. if `code` == `86039`  提示`未扫描`&goto `2`                                         else goto `5`
5. if `code` == `86038` 提示`二维码超时或错误`&goto `1`

<img src="/imgs/2233login.png"/>



## 申请二维码URL及扫码密钥（web端）

> http://passport.bilibili.com/qrcode/getLoginUrl

*请求方式：GET*

密钥超时为180秒

**json回复：**

根对象：

| 字段   | 类型 | 内容     | 备注         |
| ------ | ---- | -------- | ------------ |
| code   | num  | 返回值   | 0：成功      |
| status | bool | true     | 作用尚不明确 |
| ts     | num  | 请求时间 | 时间戳       |
| data   | obj  | 信息本体 |              |

`data`对象：

| 字段     | 类型 | 内容          | 备注       |
| -------- | ---- | ------------- | ---------- |
| url      | str  | 二维码内容url | 恒为87字符 |
| oauthKey | str  | 扫码登录秘钥  | 恒为32字符 |

**示例：**

用申请到的`data`.`url`中的值生成二维码，等待手机客户端扫描，并将`data`.`oauthKey`保存等待使用

```shell
curl 'http://passport.bilibili.com/qrcode/getLoginUrl'
```

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

## 使用扫码登录（web端）

> http://passport.bilibili.com/qrcode/getLoginInfo

*请求方式：POST*

密钥超时为180秒

验证登录成功后会进行设置以下cookie项：

 `DedeUserID` `DedeUserID__ckMd5` `SESSDATA` `bili_jct`

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名   | 类型 | 内容         | 必要性 | 备注                          |
| -------- | ---- | ------------ | ------ | ----------------------------- |
| oauthKey | str  | 扫码登录秘钥 | 必要   |                               |
| gourl    | str  | 跳转url      | 非必要 | 默认为http://www.bilibili.com |

**json回复：**

根对象：

| 字段    | 类型                         | 内容                                      | 备注                                                         |
| ------- | ---------------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| code    | num                          | 返回值                                    | 0：成功                                                      |
| message | str                          | 错误信息                                  | 正确无                                                       |
| ts      | num                          | 扫码时间                                  | 错误无                                                       |
| status  | bool                         | 扫码是否成功                              | true：成功<br />false：未成功                                |
| data    | 正确时：obj<br />错误时：num | 正确时：游戏分站url<br />错误时：错误代码 | 未成功时：<br />-1：密钥错误<br />-2：密钥超时<br />-4：未扫描<br />-5：未确认 |

data 对象：
| 字段 | 类型 | 内容                | 备注 |
| ---- | ---- | ------------------- | ---- |
| url  | str  | 游戏分站跨域登录url |      |

**示例：**

使用扫描秘钥`c3bd5286a2b40a822f5f60e9bf3f602e`登录

```shell
curl "http://passport.bilibili.com/qrcode/getLoginInfo"\
--data-urlencode 'oauthKey=c3bd5286a2b40a822f5f60e9bf3f602e'\
-c 'cookie.txt'
```

当密钥正确时但未扫描时`status`为`false`，`data`为num值`-4`

```json
{
    "status":false,
    "data":-4,
    "message":"Can't scan~"
}
```

扫描成功但手机端未确认时`status`为`false`，`data`为num值`-5`

```json
{
    "status":false,
    "data":-5,
    "message":"Can't confirm~"
}
```

扫描成功手机端确认登录后，`status`为`true`，`data`为对象，并向浏览器写入cookie

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

**响应头部抓包信息：**

可明显看见设置了几个cookie（填入浏览器即可成功登录）

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

**游戏分站跨域登录url：**

游戏分站跨域登录url与cookie的值一一对应，可用于不方便设置cookie的场合提取使用

https://passport.biligame.com/crossDomain?

DedeUserID=(登录UID)&

DedeUserID__ckMd5=(登录UID MD5值)&

Expires=(过期时间 秒)&

SESSDATA=(登录token)&

bili_jct=(csrf)&

gourl=(跳转网址 默认为主页)

## 申请二维码URL及扫码密钥（TV端）

> http://passport.bilibili.com/x/passport-tv-login/qrcode/auth_code 

*请求方式：POST*

鉴权方式：appkey

密钥超时为180秒

本接口可申请用于APP方式登录的`access_key`

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名   | 类型 | 内容       | 必要性      | 备注                     |
| -------- | ---- | ---------- | ----------- | ------------------------ |
| appkey   | str  | APP密钥    | APP方式必要 | 仅可用`4409e2ce8ffd12b8` |
| local_id | str  | TV端ID     | TV端必要    | 可为0                    |
| ts       | num  | 当前时间戳 | APP方式必要 |                          |
| sign     | str  | APP签名    | APP方式必要 |                          |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                 |
| ------- | ---- | -------- | ---------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-3：API校验密匙错误<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                              |
| ttl     | num  | 1        |                                                      |
| data    | obj  | 信息本体 |                                                      |

`data`对象：

| 字段     | 类型 | 内容          | 备注       |
| -------- | ---- | ------------- | ---------- |
| url      | str  | 二维码内容url | 恒为87字符 |
| oauthKey | str  | 扫码登录秘钥  | 恒为32字符 |

**示例：**

```shell
curl 'http://passport.bilibili.com/x/passport-tv-login/qrcode/auth_code'\
--data-urlencode 'appkey=4409e2ce8ffd12b8'\
--data-urlencode 'local_id=0'\
--data-urlencode 'ts=0'\
--data-urlencode 'sign=e134154ed6add881d28fbdf68653cd9c'
```

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

## 使用扫码登录（TV端）

> http://passport.bilibili.com/x/passport-tv-login/qrcode/poll

*请求方式：POST*

鉴权方式：appkey

密钥超时为180秒

验证登录成功后会返回可用于APP方式登录的`access_key`以及`refresh_token`

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名    | 类型 | 内容       | 必要性      | 备注                     |
| --------- | ---- | ---------- | ----------- | ------------------------ |
| appkey    | str  | APP密钥    | APP方式必要 | 仅可用`4409e2ce8ffd12b8` |
| auth_code | str  | 扫码秘钥   | 必要        |                          |
| local_id  | str  | TV端ID     | TV端必要    | 可为0                    |
| ts        | num  | 当前时间戳 | APP方式必要 |                          |
| sign      | str  | APP签名    | APP方式必要 |                          |

**json回复：**

根对象：

| 字段    | 类型                          | 内容     | 备注                                                         |
| ------- | ----------------------------- | -------- | ------------------------------------------------------------ |
| code    | num                           | 返回值   | 0：成功<br />-3：API校验密匙错误<br />-400：请求错误<br />86038：二维码已失效<br />86039：二维码尚未确认 |
| message | str                           | 错误信息 | 默认为0                                                      |
| ttl     | num                           | 1        |                                                              |
| data    | 有效时：obj<br />无效时：null | 信息本体 |                                                              |

`data`对象：

| 字段          | 类型 | 内容         | 备注                 |
| ------------- | ---- | ------------ | -------------------- |
| mid           | num  | 登录用户UID  |                      |
| access_token  | str  | APP登录Token |                      |
| refresh_token | str  | APP刷新Token |                      |
| expires_in    | num  | 有效时间     | 单位为秒  一般为30天 |

**示例：**

使用扫描秘钥`6214464b3025541abf6f654cf7569a01`进行验证登录

```shell
curl 'http://passport.bilibili.com/x/passport-tv-login/qrcode/poll'\
--data-urlencode 'appkey=4409e2ce8ffd12b8'\
--data-urlencode 'auth_code=6214464b3025541abf6f654cf7569a01'\
--data-urlencode 'local_id=0'\
--data-urlencode 'ts=0'\
--data-urlencode 'sign=87de3d0fee7c3f4facd244537238914e'\
```

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "mid": 293793435,
        "access_token": "***",
        "refresh_token": "***",
        "expires_in": 2592000
    }
}
```

