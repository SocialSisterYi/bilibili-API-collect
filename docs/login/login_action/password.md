# 密码登录

## 密码登录流程(伪代码)

```python
账号 = '2333333'
密码字符串 = 'password'

# 1.人机验证步骤
token, gt, challenge = 获取验证码()
validate = 填写验证码(gt, challenge) # 这一步填写验证码 (访问极验API，得到validate)

# 2.密码加密步骤
pubkey, salt = 获取公钥和盐()
加密后的密码 = RSA公钥加密(pubkey, salt+密码字符串) # 盐需要加在密码字符串前
base64编码后的密文 = base64编码(加密后的密码)

# 3.开始登录
cookie = 密码登录(账号, base64编码后的密文, token, challenge, validate)
存储cookie(cookie)
SSO登录页面跳转()
```

## web端密码登录

### 获取公钥&盐(web端)

> https://passport.bilibili.com/x/passport-login/web/key

*请求方式：GET*

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注   |
|---------|-----|------|------|
| code    | num | 返回值  | 0：成功 |
| message | str | 错误信息 |      |
| ttl     | num | 1    |      |
| data    | obj | 信息本体 |      |

`data`对象：

| 字段   | 类型  | 内容     | 备注                                       |
|------|-----|--------|------------------------------------------|
| hash | str | 密码盐值   | 有效时间为 20s<br />恒为 16 字符<br />需要拼接在明文密码之前 |
| key  | str | rsa 公钥 | PEM 格式编码<br />加密密码时需要使用                  |

**示例：**

```shell
curl 'https://passport.bilibili.com/x/passport-login/web/key'
```

<details>
<summary>查看响应示例：</summary>


```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "hash": "9333681c87fd8d6e",
        "key": "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDjb4V7EidX/ym28t2ybo0U6t0n\n6p4ej8VjqKHg100va6jkNbNTrLQqMCQCAYtXMXXp2Fwkk6WR+12N9zknLjf+C9sx\n/+l48mjUU8RqahiFD1XT/u2e0m2EN029OhCgkHx3Fc/KlFSIbak93EH/XlYis0w+\nXl69GV6klzgxW6d2xQIDAQAB\n-----END PUBLIC KEY-----\n"
    }
}
```

</details>

### 登录操作(web端)

> https://passport.bilibili.com/x/passport-login/web/login

*请求方式：POST*

验证登录成功后会进行设置以下 cookie 项：

`sid` `DedeUserID` `DedeUserID__ckMd5` `SESSDATA` `bili_jct`

**正文参数 (application/x-www-form-urlencoded)：**

| 参数名    | 类型 | 内容                   | 必要性 | 备注                                                         |
| --------- | ---- | ---------------------- | ------ | ------------------------------------------------------------ |
| username  | str  | 用户登录账号           | 必要   | 手机号或邮箱地址                                             |
| password  | str  | 加密后的带盐密码       | 必要   | base64 格式                                                  |
| keep      | num  | 0                      | 必要   |                                                              |
| token     | str  | 登录 token             | 必要   | 在[申请 captcha 验证码](readme.md#申请captcha验证码)接口处获取 |
| challenge | str  | 极验 challenge         | 必要   | 在[申请 captcha 验证码](readme.md#申请captcha验证码)接口处获取 |
| validate  | str  | 极验 result            | 必要   | 极验验证后得到                                               |
| seccode   | str  | 极验 result +`\|jordan` | 必要   | 极验验证后得到                                               |
| go_url    | str  | 跳转 url               | 非必要 | 默认为 https://www.bilibili.com                              |
| source    | str  | 登录来源               | 非必要 | `main_web`：独立登录页<br />`main_mini`：小窗登录            |

**json回复：**

根对象：

| 字段      | 类型                    | 内容   | 备注                                                                                                                                                                                              |
|---------|-----------------------|------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| code    | num                   | 返回值  | 0：成功<br />-105：验证码错误<br />-400：请求错误<br />-629：账号或密码错误<br />-653：用户名或密码不能为空<br />-662：提交超时,请重新提交<br />-2001：缺少必要的的参数<br />-2100：需验证手机号或邮箱<br />2400：登录秘钥错误<br />2406：验证极验服务出错<br />86000：RSA解密失败 |
| message | str                   | 错误信息 |                                                                                                                                                                                                 |
| data    | 成功时：obj<br />失败时：null | 数据本体 |                                                                                                                                                                                                 |

data 对象：

| 字段            | 类型  | 内容                | 备注                     |
|---------------|-----|-------------------|------------------------|
| message       | str | 扫码状态信息            |                        |
| refresh_token | str | 刷新`refresh_token` |                        |
| status        | num | 0                 |                        |
| timestamp     | num | 登录时间              | 未登录为`0`<br />时间戳 单位为毫秒 |
| url           | str | 游戏分站跨域登录 url      |                        |

**示例：**

例如用户账号为`12345678900`，加密后的密码为`xxx`，登录秘钥为`aabbccdd`，极验challenge为`2333`，极验结果为`666666`，进行验证登录操作

```shell
curl 'https://passport.bilibili.com/x/passport-login/web/login' \
--data-urlencode 'username=12345678900' \
--data-urlencode 'password=xxx' \
--data-urlencode 'keep=0' \
--data-urlencode 'source=main_web' \
--data-urlencode 'token=aabbccdd' \
--data-urlencode 'challenge=2333' \
--data-urlencode 'validate=666666' \
--data-urlencode 'seccode=666666|jordan'
```

<details>
<summary>查看响应示例：</summary>


```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "status": 0,
        "message": "",
        "url": "https://passport.biligame.com/crossDomain?DedeUserID=***&DedeUserID__ckMd5=***&Expires=***&SESSDATA=***&bili_jct=***&gourl=https%3A%2F%2Fwww.bilibili.com%2F",
        "refresh_token": "***",
        "timestamp": 1662452570273
    }
}

```

</details>

**响应头部抓包信息：**

可明显看见设置了几个 cookie

<details>
<summary>查看响应示例：</summary>

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

</details>

## web端密码登录-旧版

以下为密码扫码登录 API，尚可正常访问

### 获取公钥&盐(web端-旧版)

> https://passport.bilibili.com/login?act=getkey

*请求方式：GET*

**json回复：**

根对象：

| 字段   | 类型  | 内容     | 备注                                       |
|------|-----|--------|------------------------------------------|
| hash | str | 密码盐值   | 有效时间为 20s<br />恒为 16 字符<br />需要拼接在明文密码之前 |
| key  | str | rsa 公钥 | PEM 格式编码<br />加密密码时需要使用                  |

**示例：**

```shell
curl 'https://passport.bilibili.com/login?act=getkey'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "hash":"07c6501690c1af85",
    "key":"-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDjb4V7EidX/ym28t2ybo0U6t0n\n6p4ej8VjqKHg100va6jkNbNTrLQqMCQCAYtXMXXp2Fwkk6WR+12N9zknLjf+C9sx\n/+l48mjUU8RqahiFD1XT/u2e0m2EN029OhCgkHx3Fc/KlFSIbak93EH/XlYis0w+\nXl69GV6klzgxW6d2xQIDAQAB\n-----END PUBLIC KEY-----\n"
}
```

</details>

### 登录操作(web端-旧版)


> https://passport.bilibili.com/web/login/v2

*请求方式：POST*

验证登录成功后会进行设置以下cookie项：

`sid` `DedeUserID` `DedeUserID__ckMd5` `SESSDATA` `bili_jct`

**正文参数 （application/x-www-form-urlencoded）：**


| 参数名      | 类型 | 内容                   | 必要性 | 备注                                                         |
| ----------- | ---- | ---------------------- | ------ | ------------------------------------------------------------ |
| captchaType | num  | 6                      | 必要   | 必须为`6`                                                    |
| username    | str  | 用户登录账号           | 必要   | 手机号或邮箱地址                                             |
| password    | str  | 加密后的带盐密码       | 必要   | base64 格式                                                  |
| keep        | bool | 是否记住登录           | 必要   | `true`：记住登录<br />`false`：不记住登录                    |
| key         | str  | 登录 token             | 必要   | 在[申请 captcha 验证码](readme.md#申请captcha验证码)接口处获取 |
| challenge   | str  | 极验 challenge         | 必要   | 在[申请 captcha 验证码](readme.md#申请captcha验证码)接口处获取 |
| validate    | str  | 极验 result            | 必要   | 极验验证后得到                                               |
| seccode     | str  | 极验 result +`\|jordan` | 必要   | 极验验证后得到                                               |

**json回复：**

根对象：

| 字段      | 类型  | 内容    | 备注                                                                                                                                                                              |
|---------|-----|-------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| code    | num | 返回值   | 0：成功<br />-400：请求错误<br />-629：账号或密码错误<br />-653：用户名或密码不能为空<br />-662：提交超时,请重新提交<br />-2001：缺少必要的的参数<br />-2100：需验证手机号或邮箱<br />2400：登录秘钥错误<br />2406：验证极验服务出错<br />86000：RSA解密失败 |
| ts      | num | 当前时间戳 | 成功时无此项                                                                                                                                                                          |
| message | str | 错误信息  | 默认为0                                                                                                                                                                            |
| data    | obj | 数据本体  | 成功时有此项                                                                                                                                                                          |

`data`对象：

**未登录时：**

| 字段          | 类型  | 内容           | 备注  |
|-------------|-----|--------------|-----|
| redirectUrl | str | 游戏分站跨域登录 url |     |

**已登录时：**

| 字段      | 类型   | 内容                       | 备注  |
|---------|------|--------------------------|-----|
| isLogin | bool | true                     |     |
| goUrl   | str  | https://www.bilibili.com |     |

**需验证手机号或邮箱时**

| 字段       | 类型  | 内容                       | 备注         |
|----------|-----|--------------------------|------------|
| mid      | num | 用户 mid                   |            |
| tel      | str | 绑定的手机号                   | 星号隐藏部分信息   |
| email    | str | 绑定的邮箱                    | 星号隐藏部分信息   |
| sorce    | num | 0                        | **作用尚不明确** |
| keeptime | num | 1                        | **作用尚不明确** |
| goUrl    | str | https://www.bilibili.com |            |

**示例：**

例如用户账号为`12345678900`，加密后的密码为`xxx`，登录秘钥为`aabbccdd`，极验challenge为`2333`，极验结果为`666666`，进行验证登录操作

```shell
curl 'https://passport.bilibili.com/web/login/v2' \
--data-urlencode 'captchaType=6' \
--data-urlencode 'username=12345678900' \
--data-urlencode 'password=xxx' \
--data-urlencode 'keep=true' \
--data-urlencode 'token=aabbccdd' \
--data-urlencode 'challenge=2333' \
--data-urlencode 'validate=666666' \
--data-urlencode 'seccode=666666|jordan'
```

<details>
<summary>查看响应示例：</summary>


```json
{
    "code": 0,
    "data": {
        "redirectUrl": "https://passport.biligame.com/crossDomain?DedeUserID=***&DedeUserID__ckMd5=***&Expires=15551000&SESSDATA=***&bili_jct=***&gourl=https%3A%2F%2Fwww.bilibili.com"
    }
}
```

</details>

**响应头部抓包信息：**

可明显看见设置了几个 cookie

<details>
<summary>查看响应示例：</summary>

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

</details>

## APP端密码登录

### 获取公钥&盐(APP端)

>  http://passport.bilibili.com/api/oauth2/getKey

*请求方式：POST*

鉴权方式：appkey

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名    | 类型  | 内容    | 必要性     | 备注  |
|--------|-----|-------|---------|-----|
| appkey | str | APP密钥 | APP方式必要 |     |
| sign   | str | APP签名 | APP方式必要 |     |

**json回复：**

根对象：

| 字段   | 类型  | 内容     | 备注                                       |
|------|-----|--------|------------------------------------------|
| hash | str | 密码盐值   | 有效时间为 20s<br />恒为 16 字符<br />需要拼接在明文密码之前 |
| key  | str | rsa 公钥 | PEM 格式编码<br />加密密码时需要使用                  |

**示例：**

```shell
curl 'https://passport.bilibili.com/api/oauth2/getKey' \
--data-urlencode 'appkey=1d8b6e7d45233436' \
--data-urlencode 'sign=17004c193f688f0b5665c1068e733aff'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "hash": "07c6501690c1af85",
    "key": "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDjb4V7EidX/ym28t2ybo0U6t0n\n6p4ej8VjqKHg100va6jkNbNTrLQqMCQCAYtXMXXp2Fwkk6WR+12N9zknLjf+C9sx\n/+l48mjUU8RqahiFD1XT/u2e0m2EN029OhCgkHx3Fc/KlFSIbak93EH/XlYis0w+\nXl69GV6klzgxW6d2xQIDAQAB\n-----END PUBLIC KEY-----\n"
}
```

</details>

### 登录操作(APP端)

TODO

## 登录密码的加密实例

以下实例使用 Python 语言，在任何平台（web、APP）使用密码登录都需要如下加密步骤

首先在需拉取 RSA PubKey 和 salt 备用

```python
import requests

resp = requests.get('https://passport.bilibili.com/x/passport-login/web/key').json()['data']
print('salt =', resp['hash'])
print('PubKey =', resp['key'])
```

`hash`字段为 salt，长度固定为 16 字符，timeout 时间只有 20s

`key`字段为 RSA PubKey，为 PEM 格式，加密需要使用

```
salt = 9773d106a67e27d6
PubKey = -----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDjb4V7EidX/ym28t2ybo0U6t0n
6p4ej8VjqKHg100va6jkNbNTrLQqMCQCAYtXMXXp2Fwkk6WR+12N9zknLjf+C9sx
/+l48mjUU8RqahiFD1XT/u2e0m2EN029OhCgkHx3Fc/KlFSIbak93EH/XlYis0w+
Xl69GV6klzgxW6d2xQIDAQAB
-----END PUBLIC KEY-----
```

例如登录密码为`BiShi22332323`，现在对它进行加盐并使用获取的 PubKey 加密

```python
import rsa
password = 'BiShi22332323'

pubKey = rsa.PublicKey.load_pkcs1_openssl_pem(resp['key']) # 读取 PEM 密钥
encryptedPassword = rsa.encrypt((resp['hash']+password).encode(), pubKey) # 盐需要加在明文密码之前，一并加密
print(encryptedPassword)
```

下面将输出一段 bytes 数据：

```
b'}\x9c\xd4\xcd\x88\x92\xa7\xde\x85\xdb\xabm\xd7\xd3\x08\x02@xo\x85\xa4\xe1\x11\xd0o\x80\x03.$\xc8l\xbe\xba;\xfe\xee\xa7(\xf8S\x95\x1e\x9106\xa4\x1d\xcf\x8e\xbe\x8d\x94A\x86s\xf9"\x12\x0c\x135\xbb\xbc\xe1\xde\x1b\x90\t)P\xeb\xa9\x8fXY]\x83\x18\x81f\n:\xdb\xe1\xbe\xe8\x1e\xba\x1c D8d}B\x17\xf9\x8a\xf0i\'1\xa5\xc4\x05&\xaa;n\xf8{\xa02\xffY\xcelU\xd5\xaf\x8aJK\xdc\xf1@\xbc\x93'
```

接下来需要把加密后的结果进行 base64 编码

```python
import base64
b64Password = base64.b64encode(encryptedPassword).decode()
print('result =', b64Password)
```

以下为最终加密结果，可直接向 API 请求体传参以登录：

因为 RSA 公钥加密的**无法解密性**，故无法本地验证，仅可请求 API 验证（略...

```
result = fZzUzYiSp96F26tt19MIAkB4b4Wk4RHQb4ADLiTIbL66O/7upyj4U5UekTA2pB3Pjr6NlEGGc/kiEgwTNbu84d4bkAkpUOupj1hZXYMYgWYKOtvhvugeuhwgRDhkfUIX+YrwaScxpcQFJqo7bvh7oDL/Wc5sVdWvikpL3PFAvJM=
```

以下为密码加密的Java实现：

```java
package com.ho.test;

import cn.hutool.core.codec.Base64;

import javax.crypto.Cipher;
import java.security.KeyFactory;
import java.security.PublicKey;
import java.security.spec.X509EncodedKeySpec;

public class Test3 {
  public static void main(String[] args) throws Exception {
    //用户密码
    String password = "abcdef";
    //获取到的证书内容
    String key = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDjb4V7EidX/ym28t2ybo0U6t0n\n6p4ej8VjqKHg100va6jkNbNTrLQqMCQCAYtXMXXp2Fwkk6WR+12N9zknLjf+C9sx\n/+l48mjUU8RqahiFD1XT/u2e0m2EN029OhCgkHx3Fc/KlFSIbak93EH/XlYis0w+\nXl69GV6klzgxW6d2xQIDAQAB\n-----END PUBLIC KEY-----\n";
    //获取到的盐值
    String hash = "bb73382121594c46";
    String[] split = key.strip().split("\n");
    String newKey = split[1] + split[2] + split[3] + split[4];
    //进行加密
    KeyFactory keyFactory = KeyFactory.getInstance("RSA");
    X509EncodedKeySpec keySpec = new X509EncodedKeySpec(Base64.decode(newKey));
    PublicKey publicKey = keyFactory.generatePublic(keySpec);
    Cipher cipher = Cipher.getInstance(keyFactory.getAlgorithm());
    cipher.init(Cipher.PUBLIC_KEY, publicKey);
    byte[] bytes = cipher.doFinal((hash + password).getBytes());
    String encode = Base64.encode(bytes);
    System.out.println(encode);
  }
}

```