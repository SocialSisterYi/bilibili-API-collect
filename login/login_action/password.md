# 账号密码登录

web端密码登录流程：

1. [完成人机验证](readme.md)
2. 加密登录密码，获取RSA公钥`key`与盐值`hash`**（盐值有效时间为20s）**，并连接盐值+密码字串（注意先后顺序），使用RSA公钥加密，得到base64格式密文
4. 登录操作验证，使用账号`username`**（手机号或邮箱）**+密文密码`password`+登录密钥`key`+极验`challenge`+验证结果`validate`+验证结果`seccode`

## 获取加密公钥及密码盐值1（web端）

> http://passport.bilibili.com/login?act=getkey

*请求方式：GET*

**json回复：**

根对象：

| 字段 | 类型 | 内容         | 备注             |
| ---- | ---- | ------------ | ---------------- |
| hash | str  | 密码校验盐值 | 有效时间为20s    |
| key  | str  | RSA公钥      | **公钥为固定值** |

**示例：**

```shell
curl 'http://passport.bilibili.com/login?act=getkey'
```

```json
{
    "hash":"07c6501690c1af85",
    "key":"-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDjb4V7EidX/ym28t2ybo0U6t0n\n6p4ej8VjqKHg100va6jkNbNTrLQqMCQCAYtXMXXp2Fwkk6WR+12N9zknLjf+C9sx\n/+l48mjUU8RqahiFD1XT/u2e0m2EN029OhCgkHx3Fc/KlFSIbak93EH/XlYis0w+\nXl69GV6klzgxW6d2xQIDAQAB\n-----END PUBLIC KEY-----\n"
}
```

## 获取加密公钥及密码盐值2（APP端）

>  http://passport.bilibili.com/api/oauth2/getKey

*请求方式：POST*

鉴权方式：appkey

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容    | 必要性      | 备注 |
| ------ | ---- | ------- | ----------- | ---- |
| appkey | str  | APP密钥 | APP方式必要 |      |
| sign   | str  | APP签名 | APP方式必要 |      |

**json回复：**

根对象：

| 字段 | 类型 | 内容         | 备注             |
| ---- | ---- | ------------ | ---------------- |
| hash | str  | 验证hash盐值 | 有效时间为20s    |
| key  | str  | RSA公钥      | **公钥为固定值** |

**示例：**

```shell
curl 'http://passport.bilibili.com/api/oauth2/getKey'\
--data-urlencode 'appkey=1d8b6e7d45233436'\
--data-urlencode 'sign=17004c193f688f0b5665c1068e733aff'
```

```json
{
    "hash":"07c6501690c1af85",
    "key":"-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDjb4V7EidX/ym28t2ybo0U6t0n\n6p4ej8VjqKHg100va6jkNbNTrLQqMCQCAYtXMXXp2Fwkk6WR+12N9zknLjf+C9sx\n/+l48mjUU8RqahiFD1XT/u2e0m2EN029OhCgkHx3Fc/KlFSIbak93EH/XlYis0w+\nXl69GV6klzgxW6d2xQIDAQAB\n-----END PUBLIC KEY-----\n"
}
```

## 登录密码的加密

**注：RSA公钥一般为固定值**

```
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDjb4V7EidX/ym28t2ybo0U6t0n
6p4ej8VjqKHg100va6jkNbNTrLQqMCQCAYtXMXXp2Fwkk6WR+12N9zknLjf+C9sx
/+l48mjUU8RqahiFD1XT/u2e0m2EN029OhCgkHx3Fc/KlFSIbak93EH/XlYis0w+
Xl69GV6klzgxW6d2xQIDAQAB
-----END PUBLIC KEY-----
```

例如登录密码为：

```
BiShi22332323
```

获取到的盐值为：

```
8e0db05c46f4052c
```

那么按照`盐值`+`密码字串`连接二者得到：

```
8e0db05c46f4052cBiShi22332323
```

用公钥进行RSA加密得到base64字串：

因为公钥的**无法解密性**和盐值的**超时机制**，故无法本地验证加密结果

```
YgpjxAQ22pKa9socHIKPCZX0a/NS6Ng9Zzy+rp16b0LJGT6RHw2ERs3+ijCpG96PKTY1Baavwf0xgotmNvpl25l1KO5y4AjcqeWTzNTSVn6ejonBXGmBMybHHYawJ0aMPn1eDGpKrbI91mrF+h2x+fsnnpuZ1gheiYGzFmtshUc=
```

## 使用账号密码登录（web端）

> http://passport.bilibili.com/web/login/v2

*请求方式：POST*

验证登录成功后会进行设置以下cookie项：

`sid` `DedeUserID` `DedeUserID__ckMd5` `SESSDATA` `bili_jct`

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名      | 类型 | 内容               | 必要性 | 备注             |
| ----------- | ---- | ------------------ | ------ | ---------------- |
| captchaType | num  | 6                  | 必要   | 必须为`6`        |
| username    | str  | 用户登录账号       | 必要   | 手机号或邮箱地址 |
| password    | str  | 加密后的带盐密码   | 必要   | base64格式       |
| keep        | bool | true               | 必要   | 必须为`true`     |
| key         | str  | 登录秘钥           | 必要   | 从B站API获取     |
| challenge   | str  | 极验challenge      | 必要   | 从B站API获取     |
| validate    | str  | 极验结果           | 必要   | 从极验获取       |
| seccode     | str  | 极验结果+`|jordan` | 必要   | 从极验获取       |

**json回复：**

根对象：

| 字段    | 类型 | 内容       | 备注                                                         |
| ------- | ---- | ---------- | ------------------------------------------------------------ |
| code    | num  | 返回值     | 0：成功<br />-400：请求错误<br />-629：账号或密码错误<br />-653：用户名或密码不能为空<br />-662：提交超时,请重新提交<br />-2001：缺少必要的的参数<br />2400：登录秘钥错误<br />2406：验证极验服务出错 |
| ts      | num  | 当前时间戳 | 成功时无此项                                                 |
| message | str  | 错误信息   | 默认为0                                                      |
| data    | obj  | 数据本体   | 成功时有此项                                                 |

`data`对象：

**未登录时：**

| 字段        | 类型 | 内容                | 备注 |
| ----------- | ---- | ------------------- | ---- |
| redirectUrl | str  | 游戏分站跨域登录url |      |

**已登录时：**

| 字段    | 类型 | 内容                     | 备注 |
| ------- | ---- | ------------------------ | ---- |
| isLogin | bool | true                     |      |
| goUrl   | str  | https://www.bilibili.com |      |

**示例：**

例如用户账号为`12345678900`，加密后的密码为`xxx`，登录秘钥为`aabbccdd`，极验challenge为`2333`，极验结果为`666666`，进行验证登录操作

```shell
curl 'https://passport.bilibili.com/web/login/v2'\
--data-urlencode 'captchaType=6'\
--data-urlencode 'username=12345678900'\
--data-urlencode 'password=xxx'\
--data-urlencode 'keep=true'\
--data-urlencode 'key=aabbccdd'\
--data-urlencode 'challenge=2333'\
--data-urlencode 'validate=666666'\
--data-urlencode 'seccode=666666|jordan'
```

```json
{
    "code": 0,
    "data": {
        "redirectUrl": "https://passport.biligame.com/crossDomain?DedeUserID=***&DedeUserID__ckMd5=***&Expires=15551000&SESSDATA=***&bili_jct=***&gourl=https%3A%2F%2Fwww.bilibili.com"
    }
}
```

**响应头部抓包信息：**

可明显看见设置了几个cookie（填入浏览器即可成功登录）

```http
HTTP/1.1 200 OK
Date: Mon, 13 Jul 2020 06:56:00 GMT
Content-Type: application/json;charset=UTF-8
Content-Length: 273
Connection: keep-alive
Server: Apache-Coyote/1.1
Set-Cookie: DedeUserID=***; Domain=.bilibili.com; Expires=Sat, 09-Jan-2021 06:39:43 GMT; Path=/
Set-Cookie: DedeUserID__ckMd5=***; Domain=.bilibili.com; Expires=Sat, 09-Jan-2021 06:39:43 GMT; Path=/
Set-Cookie: SESSDATA=***; Domain=.bilibili.com; Expires=Sat, 09-Jan-2021 06:39:43 GMT; Path=/; HttpOnly
Set-Cookie: bili_jct=***; Domain=.bilibili.com; Expires=Sat, 09-Jan-2021 06:39:43 GMT; Path=/
Content-Security-Policy-Report-Only: default-src 'self' data: *.bilibili.com *.hdslb.com; style-src 'self' 'unsafe-inline' *.hdslb.com static.geetest.com; img-src 'self' data: blob: *.bilibili.com *.hdslb.com http://*.hdslb.com static.geetest.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.bilibili.com *.hdslb.com api.geetest.com static.geetest.com; object-src 'self' *.hdslb.com; media-src 'self' *.acgvideo.com http://*.acgvideo.com *.ksyungslb.com; connect-src 'self' data: wss://*.bilibili.com:* *.bilibili.com *.hdslb.com *.biliapi.net *.biliapi.com; frame-ancestors 'self' *.bilibili.com *.biligame.com; report-uri https://security.bilibili.com/csp_report
Expires: Mon, 13 Jul 2020 06:55:59 GMT
Cache-Control: no-cache
X-Cache-Webcdn: BYPASS from jd-sxhz-dx-w-01
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