# 二维码登录

流程&逻辑：

1. 获取`二维码内容url`以及`秘钥`，以`二维码内容url`生成二维码，等待手机客户端扫描
2. 以`秘钥`作为参数进行POST
3. if "code"==true goto 6                               else goto 4（是否已经确认）
4. if "data"==-4   goto 2                                else goto 5（是否已经扫描）
5. if "data"==-5   goto 3 && 提示`已扫描`else goto 1&提示`二维码超时或错误`（秘钥是否有效）
6. 成功后会自动配置cookie 如需登录游戏分站则访问`data`.`url`中的url

<img src="/imgs/2233login.png"/>



## 申请二维码URL及扫码秘钥 

> http://passport.bilibili.com/qrcode/getLoginUrl

*方式：GET*

秘钥超时为180秒

**json回复：**

根对象：

| 字段   | 类型 | 内容     | 备注         |
| ------ | ---- | -------- | ------------ |
| code   | num  | 返回值   | 0：成功      |
| status | bool | true     | 作用尚不明确 |
| ts     | num  | 请求时间 | 时间戳       |
| data   | obj  | 信息本体 |              |

`data`对象：

| 字段     | 类型  | 内容          | 备注       |
| -------- | ----- | ------------- | ---------- |
| url      | str   | 二维码内容url | 恒为87字符 |
| oauthKey | str   | 扫码登录秘钥  | 恒为32字符 |

**示例：**

用申请到的`data`.`url`中的值生成二维码，等待手机客户端扫描，并将`data`.`oauthKey`保存等待使用

http://passport.bilibili.com/qrcode/getLoginUrl
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



## 验证二维码登录 

> http://passport.bilibili.com/qrcode/getLoginInfo

*方式：POST*

秘钥超时为180秒

验证正确时会进行设置以下cookie项：

`sid` `DedeUserID` `DedeUserID__ckMd5` `SESSDATA` `bili_jct`

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名   | 类型 | 内容         | 必要性 | 备注                          |
| -------- | ---- | ------------ | ------ | ----------------------------- |
| oauthKey | str  | 扫码登录秘钥 | 必要   |                               |
| gourl    | str  | 跳转url      | 非必要 | 默认为http://www.bilibili.com |

**json回复：**

根对象：

| 字段    | 类型                         | 内容                                      | 备注                                                         |
| ------- | ---------------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| status  | bool                         | 扫码是否成功                              | true：成功<br />false：未成功                                |
| code    | num                          | 返回值                                    | 0：成功                                                      |
| message | str                          | 错误信息                                  | 正确无                                                       |
| ts      | num                          | 扫码时间                                  | 错误无                                                       |
| data    | 正确时：obj<br />错误时：num | 正确时：游戏分站url<br />错误时：错误代码 | 错误时：<br />-1：秘钥错误<br />-2：秘钥超时<br />-4：未扫描<br />-5：未确认 |

data 对象：
| 字段 | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| url  | str  | 游戏分站登录url |      |

**示例：**

curl -d "oauthKey=xxx" "http://passport.bilibili.com/qrcode/getLoginInfo"

当秘钥正确时但未扫描时`status`为`false`，`data`为num值`-4`

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

回复头部抓包信息：

可明显看见设置了几个cookie（本人手打已测试成功登录B站）

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

**游戏分站登录url与cookie的数据对应（也可用于不方便设置cookie的场合提取使用）**

https://passport.biligame.com/crossDomain?

DedeUserID=(登录UID)&

DedeUserID__ckMd5=(DedeUserID__ckMd5)&

Expires=(过期时间 秒)&

SESSDATA=(登录token)&

bili_jct=(登录csrf)&

gourl=(跳转网址 默认为主页)

