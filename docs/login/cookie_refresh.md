# Web端Cookie刷新

自从 2023 以来，社区反馈似乎 Web 端的 Cookie 会随着一些敏感接口的访问逐渐失效，而在 Web 页面上会判断 Cookie 是否需要刷新，如需刷新则会以动态加载 iframe 方式实现，同时登录（二维码 / 密码 / 短信验证码等）接口也会返回`refresh_token`字段，需要持久化保存，是一种官方的风控机制实现

感谢 [#524](https://github.com/SocialSisterYi/bilibili-API-collect/issues/524) 提供相关研究报告以及逆向工程结果

> cookie 不会主动刷新的，只要他没有调用下面的刷新接口就不会刷新。也就是说，你只要不再打开浏览器，或者直接把 localStorage 的 ac_time_value 字段删除了。那么 cookie 在真的失效前（登录过期、账号风控等强制下线）都是不变化的。

## 刷新步骤（伪代码）

```python
cookie, refresh_token = 进行登录操作() # can be 二维码 / 密码 / 短信验证码

while True:
    if 每日第一次访问接口:
        if 检查是否需要刷新(cookie):
            CorrespondPath = 生成CorrespondPath(当前毫秒时间戳)
            refresh_csrf = 获取refresh_csrf(CorrespondPath, cookie)
            refresh_token_old = refresh_token # 这一步必须保存旧的 refresh_token 备用
            cookie, refresh_token = 刷新Cookie(refresh_token, refresh_csrf, cookie)
            确认更新(refresh_token_old, cookie) # 这一步需要新的 Cookie 以及旧的 refresh_token
            SSO站点跨域登录(cookie)
    do_somethings(cookie) # 其他业务逻辑处理
```

## 检查是否需要刷新

> https://passport.bilibili.com/x/passport-login/web/cookie/info

*请求方式：GET*

鉴权方式：Cookie

**url 参数：**

| 参数名 | 类型 | 内容                      | 必要性 | 备注 |
| ------ | ---- | ------------------------- | ------ | ---- |
| csrf   | str  | CSRF Token（位于 Cookie） | 非必要 |   位于 Cookie 中的bili_jct字段   |

**json 回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为 0                      |
| ttl     | num  | 1        |                               |
| data    | obj  | 信息本体 |                               |

`data`对象：

| 字段      | 类型 | 内容                | 备注                                                  |
| --------- | ---- | ------------------- | ----------------------------------------------------- |
| refresh   | bool | 是否应该刷新 Cookie | `true`：需要刷新 Cookie<br />`false`：无需刷新 Cookie |
| timestamp | num  | 当前毫秒时间戳      | 用于获取 refresh_csrf                                 |

**示例：**

```bash
curl -G 'https://passport.bilibili.com/x/passport-login/web/cookie/info' \
	--data-urlencode 'csrf=xxx' \
	-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "refresh": false,
        "timestamp": 1684466082562
    }
}
```

</details>

## 生成CorrespondPath算法

该算法逆向于以下 wasm 以及 JavaScript bind 接口，抓取于官方 Web 首页中，感谢 [#524](https://github.com/SocialSisterYi/bilibili-API-collect/issues/524) 提供

https://s1.hdslb.com/bfs/static/jinkela/long/wasm/wasm_rsa_encrypt_bg.wasm

https://s1.hdslb.com/bfs/static/jinkela/long/wasm/wasm_ras_umd.js

### 算法细节

将`refresh_${timestamp}`作为消息体（参数`timestamp`为当前毫秒时间戳），用下方 PubKey 进行 [RSA-OAEP](https://datatracker.ietf.org/doc/html/rfc3447#section-7.1) 算法加密，之后密文通过小写 Base16 编码为字符串

JWK 格式：

> {
>     "kty": "RSA",
>     "n": "y4HdjgJHBlbaBN04VERG4qNBIFHP6a3GozCl75AihQloSWCXC5HDNgyinEnhaQ_4-gaMud_GF50elYXLlCToR9se9Z8z433U3KjM-3Yx7ptKkmQNAMggQwAVKgq3zYAoidNEWuxpkY_mAitTSRLnsJW-NCTa0bqBFF6Wm1MxgfE",
>     "e": "AQAB"
> }

PEM 格式：

> -----BEGIN PUBLIC KEY-----
> MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDLgd2OAkcGVtoE3ThUREbio0Eg
> Uc/prcajMKXvkCKFCWhJYJcLkcM2DKKcSeFpD/j6Boy538YXnR6VhcuUJOhH2x71
> nzPjfdTcqMz7djHum0qSZA0AyCBDABUqCrfNgCiJ00Ra7GmRj+YCK1NJEuewlb40
> JNrRuoEUXpabUzGB8QIDAQAB
> -----END PUBLIC KEY-----

### 相关Demo

该 Demo 提供 [JavaScript](#javascript) [Python](#python) [Kotlin](#kotlin) [Java](#java) [Go](#go) 以及 [Vercel 云函数](#vercel云函数)，感谢 [#524](https://github.com/SocialSisterYi/bilibili-API-collect/issues/524) 提供

#### JavaScript

```javascript
const publicKey = await crypto.subtle.importKey(
  "jwk",
  {
    kty: "RSA",
    n: "y4HdjgJHBlbaBN04VERG4qNBIFHP6a3GozCl75AihQloSWCXC5HDNgyinEnhaQ_4-gaMud_GF50elYXLlCToR9se9Z8z433U3KjM-3Yx7ptKkmQNAMggQwAVKgq3zYAoidNEWuxpkY_mAitTSRLnsJW-NCTa0bqBFF6Wm1MxgfE",
    e: "AQAB",
  },
  { name: "RSA-OAEP", hash: "SHA-256" },
  true,
  ["encrypt"],
)

async function getCorrespondPath(timestamp) {
  const data = new TextEncoder().encode(`refresh_${timestamp}`);
  const encrypted = new Uint8Array(await crypto.subtle.encrypt({ name: "RSA-OAEP" }, publicKey, data))
  return encrypted.reduce((str, c) => str + c.toString(16).padStart(2, "0"), "")
}

const ts = Date.now()
console.log(await getCorrespondPath(ts))
```

```text
b77f21ab5b7ce7879c410b2311dd6e7ea1a2cd1cd941073db067f4c3279fdabca3a06dfa744168ee14ad050b9f4889bd4edb8e76eb597fdd18c16804d82566b55c6dba8e225d838aa93d8e5b31cf7c56720db8244d92373f4944e0561f6ca5bf721a36ac079786060fc853605ccd1ddcb33f54617de6aedd44e3b9850d13b45f
```

#### Python

需要`pycryptodome`依赖

```python
from Crypto.Cipher import PKCS1_OAEP
from Crypto.PublicKey import RSA
from Crypto.Hash import SHA256
import binascii
import time

key = RSA.importKey('''\
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDLgd2OAkcGVtoE3ThUREbio0Eg
Uc/prcajMKXvkCKFCWhJYJcLkcM2DKKcSeFpD/j6Boy538YXnR6VhcuUJOhH2x71
nzPjfdTcqMz7djHum0qSZA0AyCBDABUqCrfNgCiJ00Ra7GmRj+YCK1NJEuewlb40
JNrRuoEUXpabUzGB8QIDAQAB
-----END PUBLIC KEY-----''')

def getCorrespondPath(ts):
    cipher = PKCS1_OAEP.new(key, SHA256)
    encrypted = cipher.encrypt(f'refresh_{ts}'.encode())
    return binascii.b2a_hex(encrypted).decode()

ts = round(time.time() * 1000)
print(getCorrespondPath(ts))
```

```text
47bbd615f333d6a2c597bbb46ad47a6e59752a305a2f545d3ba5d49ca055309347796f80d257613696d36170c57443a0e9dea2b47f83b0b4224d431e46124fadd9a24c8fa468147e8bf2d2501eaacae43310e19bf58fc4a728d80c90b9401afcfc1536ba9a2f6438ea53c0b2652f8b8d01c87355dd5a5da51de998b1a35d519a
```

### Kotlin

```kotlin
import java.security.KeyFactory
import java.security.spec.MGF1ParameterSpec
import java.security.spec.X509EncodedKeySpec
import java.util.*
import javax.crypto.Cipher
import javax.crypto.spec.OAEPParameterSpec
import javax.crypto.spec.PSource


fun main() {
    println(getCorrespondPath(System.currentTimeMillis()))
}

fun getCorrespondPath(timestamp: Long): String {
    val publicKeyPEM = """
        -----BEGIN PUBLIC KEY-----
        MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDLgd2OAkcGVtoE3ThUREbio0Eg
        Uc/prcajMKXvkCKFCWhJYJcLkcM2DKKcSeFpD/j6Boy538YXnR6VhcuUJOhH2x71
        nzPjfdTcqMz7djHum0qSZA0AyCBDABUqCrfNgCiJ00Ra7GmRj+YCK1NJEuewlb40
        JNrRuoEUXpabUzGB8QIDAQAB
        -----END PUBLIC KEY-----
    """.trimIndent()

    val publicKey = KeyFactory.getInstance("RSA").generatePublic(
        X509EncodedKeySpec(Base64.getDecoder().decode(publicKeyPEM
            .replace("-----BEGIN PUBLIC KEY-----", "")
            .replace("-----END PUBLIC KEY-----", "")
            .replace("\n", "")
            .trim()))
    )

    val cipher = Cipher.getInstance("RSA/ECB/OAEPPadding").apply {
        init(Cipher.ENCRYPT_MODE,
            publicKey,
            OAEPParameterSpec("SHA-256", "MGF1", MGF1ParameterSpec.SHA256, PSource.PSpecified.DEFAULT)
        )
    }

    return cipher.doFinal("refresh_$timestamp".toByteArray()).joinToString("") { "%02x".format(it) }
}
```

```text
1428cbd14605ae42a0b42e22662cfe51d8e5034eeaffb36a46db46bd2f93216cbfd4d150cca2de44395add7c664b40acf44424ee8d634fc821b909423665a34d18bd7f4e77ea5388a2b612daf875e2fe8df62990e14b64a465898b0707bc1288586b68f9f4f2f20bea5cb1cada296beb8009e91bc8fb57a4b81b8923299b6eb7
```

### Go

```go
package main

import (
	"crypto/rand"
	"crypto/rsa"
	"crypto/sha256"
	"crypto/x509"
	"encoding/hex"
	"encoding/pem"
	"fmt"
	"time"
)

func main() {
	result, err := getCorrespondPath(time.Now().UnixMilli())
	if err != nil {
		panic(err)
	}
	fmt.Println(result)
}

func getCorrespondPath(ts int64) (string, error) {
	const publicKeyPEM = `
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDLgd2OAkcGVtoE3ThUREbio0Eg
Uc/prcajMKXvkCKFCWhJYJcLkcM2DKKcSeFpD/j6Boy538YXnR6VhcuUJOhH2x71
nzPjfdTcqMz7djHum0qSZA0AyCBDABUqCrfNgCiJ00Ra7GmRj+YCK1NJEuewlb40
JNrRuoEUXpabUzGB8QIDAQAB
-----END PUBLIC KEY-----
`
	pubKeyBlock, _ := pem.Decode([]byte(publicKeyPEM))
	hash := sha256.New()
	random := rand.Reader
	msg := []byte(fmt.Sprintf("refresh_%d", ts))
	var pub *rsa.PublicKey
	pubInterface, parseErr := x509.ParsePKIXPublicKey(pubKeyBlock.Bytes)
	if parseErr != nil {
		return "", parseErr
	}
	pub = pubInterface.(*rsa.PublicKey)
	encryptedData, encryptErr := rsa.EncryptOAEP(hash, random, pub, msg, nil)
	if encryptErr != nil {
		return "", encryptErr
	}
	return hex.EncodeToString(encryptedData), nil
}
```

```text
97759947aa357ed5d88cf9bf1172737570b7bba2d6788d39006f082b2b25ddf53b581f1f0c61ed8573317485ef525d2789faa25a277b4602a4b9cbf837681093a03e96cb9773a11df4bb1e20f1587180b3e958194de922d7dd94d0a2f0b9b0ef74e426e8041f99b99e7c02407ef4ab38040e61be81e4fdfbdb73461e3a2ad810
```

### Java

```Java
import javax.crypto.Cipher;
import javax.crypto.spec.OAEPParameterSpec;
import javax.crypto.spec.PSource;
import java.math.BigInteger;
import java.security.KeyFactory;
import java.security.PublicKey;
import java.security.spec.MGF1ParameterSpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.Base64;

public class CookieRefresh {
    private static final String PUBLIC_KEY = "-----BEGIN PUBLIC KEY-----\n" +
            "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDLgd2OAkcGVtoE3ThUREbio0Eg\n" +
            "Uc/prcajMKXvkCKFCWhJYJcLkcM2DKKcSeFpD/j6Boy538YXnR6VhcuUJOhH2x71\n" +
            "nzPjfdTcqMz7djHum0qSZA0AyCBDABUqCrfNgCiJ00Ra7GmRj+YCK1NJEuewlb40\n" +
            "JNrRuoEUXpabUzGB8QIDAQAB\n" +
            "-----END PUBLIC KEY-----";

    public static void main(String[] args) {
        try {
            String correspondPath = getCorrespondPath(String.format("refresh_%d", System.currentTimeMillis()), PUBLIC_KEY);
            System.out.println(correspondPath);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static String getCorrespondPath(String plaintext, String publicKeyStr) throws Exception {
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        publicKeyStr = publicKeyStr
                .replace("-----BEGIN PUBLIC KEY-----", "")
                .replace("-----END PUBLIC KEY-----", "")
                .replace("\n", "")
                .trim();
        byte[] publicBytes = Base64.getDecoder().decode(publicKeyStr);
        X509EncodedKeySpec x509EncodedKeySpec = new X509EncodedKeySpec(publicBytes);
        PublicKey publicKey = keyFactory.generatePublic(x509EncodedKeySpec);

        String algorithm = "RSA/ECB/OAEPPadding";
        Cipher cipher = Cipher.getInstance(algorithm);
        cipher.init(Cipher.ENCRYPT_MODE, publicKey);

        // Encode the plaintext to bytes
        byte[] plaintextBytes = plaintext.getBytes("UTF-8");

        // Add OAEP padding to the plaintext bytes
        OAEPParameterSpec oaepParams = new OAEPParameterSpec("SHA-256", "MGF1", MGF1ParameterSpec.SHA256, PSource.PSpecified.DEFAULT);
        cipher.init(Cipher.ENCRYPT_MODE, publicKey, oaepParams);
        // Encrypt the padded plaintext bytes
        byte[] encryptedBytes = cipher.doFinal(plaintextBytes);
        // Convert the encrypted bytes to a Base64-encoded string
        return new BigInteger(1, encryptedBytes).toString(16);
    }
}
```

```text
f87666152da692735123f4e49053e5a98c16854673b2e632f31a3ff0c029640772873661a9a8412db6be447a0bfa03a295d15548cbfd2bb35634e98ba5f25b1205519d6e6119b483f4c516c1e106d45b04ff98c73560949d379d3edaf3c0ecd10a1d46134fb9ca443122ab33c16d1dd48280496f949ed960a2fbcd65f10935e
```

#### vercel云函数

```bash
curl -G 'https://wasm-rsa.vercel.app/api/rsa' \
	--data-urlencode "t=$((`date '+%s'`*1000+`date '+%N'`/1000000))"
```

```json
{
    "timestamp": "1684468084078",
    "hash": "a768efe5114ef8610f9ed9ebc28c00827375f4a3448ec4ab17958cacc4fde9898e5b7aa27f649426bba1acae4aa222aafaff7d528669b15249de0b2b60d86618557d8dc90684db4ec68e8d98e41d94f1c97d1d431c288e595ceb522d033822442a9e1ee150b32771a83fbf65c13329e9fda080fbe3bc85c49c1de7ab148d228f",
    "code": 0
}
```

## 获取refresh_csrf

> https://www.bilibili.com/correspond/1/{correspondPath}

*请求方式：GET*

鉴权方式：Cookie

**path 参数：**

| 参数名         | 类型 | 内容                         | 必要性 | 备注                                                         |
| -------------- | ---- | ---------------------------- | ------ | ------------------------------------------------------------ |
| correspondPath | str  | 使用当前毫秒时间戳生成的签名 | 必要   | 由 [生成CorrespondPath算法](#生成CorrespondPath算法) 加密获得 |

将参数`correspondPath`拼接在 https://www.bilibili.com/correspond/1/ 后进行请求，例如

> https://www.bilibili.com/correspond/1/0248397e5139a8b878894cae46f8d6742ef7c728e46403706452b5dda90fe248e58e73bd6c2da0dba515c53af107dc1ecda757ce843579bcf197fcd7800586126e9b896b646cc94c23183a5a067642e96f7b6e803880e1d3cceabc9f1dc52a121b5e3ba5619e008f6b6dcb65a09d7864084ac114f4ec9ccf6218776fe4f2fa95

请求该 url 会返回一个 html 页面，通常由 iframe 方式加载，它通过 SSR 方式返回一个实时刷新口令`refresh_csrf`存放于 html 标签中，并在 Client 端通过 js 请求 RestAPI 完成一些列的提交刷新、确认、SSO 站点登录等操作

若参数`correspondPath`错误或过期，则返回一个 404 Page

以下为返回的参数：

| 标签 id | 内容         | xpath                     | 备注                              |
| ------- | ------------ | ------------------------- | --------------------------------- |
| 1-name  | refresh_csrf | //div[id='1-name']/text() | 实时刷新口令<br />用于更新 Cookie |

**示例：**

```bash
correspondPath='0248397e5139a8b878894cae46f8d6742ef7c728e46403706452b5dda90fe248e58e73bd6c2da0dba515c53af107dc1ecda757ce843579bcf197fcd7800586126e9b896b646cc94c23183a5a067642e96f7b6e803880e1d3cceabc9f1dc52a121b5e3ba5619e008f6b6dcb65a09d7864084ac114f4ec9ccf6218776fe4f2fa95'

curl -G "https://www.bilibili.com/correspond/1/$correspondPath" \
	-b 'SESSDATA=xxx'
```

```html
<!DOCTYPE html>
<html lang="zh-Hans">

<head>
  <meta name="spm_prefix" content="333.1193">
  <link
    href="//s1.hdslb.com/bfs/static/jinkela/token-iframe/css/token-iframe.1.a035e81c3bee5fa1a05633ad534ad1f44b05e54d.css"
    rel="stylesheet">
</head>
<title>Correspond</title>
<script type="text/javascript"
  src="//www.bilibili.com/gentleman/polyfill.js?features=Promise%2CObject.assign%2CString.prototype.includes%2CNumber.isNaN2%CglobalThis"></script>

<body>
  <div id="1-name">b0cc8411ded2f9db2cff2edb3123acac</div>
  <div id="token-iframe-app"></div>
  <script type="text/javascript"
    src="//s1.hdslb.com/bfs/static/jinkela/token-iframe/2.token-iframe.a035e81c3bee5fa1a05633ad534ad1f44b05e54d.js"></script>
  <script type="text/javascript"
    src="//s1.hdslb.com/bfs/static/jinkela/token-iframe/token-iframe.a035e81c3bee5fa1a05633ad534ad1f44b05e54d.js"></script>
</body>
<script type="text/javascript">window.reportMsgObj = {};
  window.reportConfig = {
    sample: 1,
    scrollTracker: true,
    msgObjects: 'reportMsgObj',
  };

  let reportScript = document.createElement('script');
  reportScript.src = '//s1.hdslb.com/bfs/seed/log/report/log-reporter.js';
  document.getElementsByTagName('body')[0].appendChild(reportScript);</script>

</html>
```

所以当前账号的实时刷新口令`refresh_csrf`为`b0cc8411ded2f9db2cff2edb3123acac`

## 刷新Cookie

> https://passport.bilibili.com/x/passport-login/web/cookie/refresh

*请求方式：POST*

鉴权方式：Cookie

刷新成功后会设置以下 Cookie 项：

`sid`、`DedeUserID`、`DedeUserID__ckMd5`、`SESSDATA`、`bili_jct`

**正文参数 (application/x-www-form-urlencoded)或 url 参数：**

| 参数名        | 类型 | 内容           | 必要性 | 备注                                                         |
| ------------- | ---- | -------------- | ------ | ------------------------------------------------------------ |
| csrf          | str  | CSRF Token     | 必要   | 位于 Cookie 中的`bili_jct`字段                               |
| refresh_csrf  | str  | 实时刷新口令   | 必要   | 通过 [获取refresh_csrf](#获取refresh_csrf) 获得              |
| source        | str  | 访问来源？     | 必要   | 一般为`main_web`                                             |
| refresh_token | str  | 持久化刷新口令 | 必要   | localStorage 中的`ac_time_value`字段，在登录成功后返回并保存 |

**json 回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf 校验失败<br />86095：refresh_csrf 错误或 refresh_token 与 cookie 不匹配 |
| message | str  | 错误信息 | 默认为 0                                                     |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段          | 类型 | 内容               | 备注                                                        |
| ------------- | ---- | ------------------ | ----------------------------------------------------------- |
| status        | num  | 0                  |                                                             |
| message       | str  | 空                 |                                                             |
| refresh_token | str  | 新的持久化刷新口令 | 将存储于 localStorage 中的`ac_time_value`字段，以便下次使用 |

**示例：**

```bash
curl -i 'https://passport.bilibili.com/x/passport-login/web/cookie/refresh' \
	--data-urlencode 'csrf=f610640a37f51f6266f6b83cfc5eedbb' \
	--data-urlencode 'refresh_csrf=b0cc8411ded2f9db2cff2edb3123acac' \
	--data-urlencode 'source=main_web' \
	--data-urlencode 'refresh_token=45240a041836905fe953e3b98b83d751' \
	-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

http 响应（关键信息已做脱敏处理）：

```http
HTTP/2 200
date: Fri, 19 May 2023 07:34:11 GMT
content-type: application/json; charset=utf-8
content-length: 116
bili-status-code: 0
bili-trace-id: 17f4251365646726
set-cookie: SESSDATA=***; Path=/; Domain=bilibili.com; Expires=Wed, 15 Nov 2023 07:34:10 GMT; HttpOnly; Secure
set-cookie: bili_jct=***; Path=/; Domain=bilibili.com; Expires=Wed, 15 Nov 2023 07:34:10 GMT
set-cookie: DedeUserID=***; Path=/; Domain=bilibili.com; Expires=Wed, 15 Nov 2023 07:34:10 GMT
set-cookie: DedeUserID__ckMd5=***; Path=/; Domain=bilibili.com; Expires=Wed, 15 Nov 2023 07:34:10 GMT
set-cookie: sid=***; Path=/; Domain=bilibili.com; Expires=Wed, 15 Nov 2023 07:34:10 GMT
x-bili-trace-id: 3f6f6174aaa087b517f4251365646726
expires: Fri, 19 May 2023 07:34:10 GMT
cache-control: no-cache
x-cache-webcdn: BYPASS from blzone03

{"code":0,"message":"0","ttl":1,"data":{"status":0,"message":"","refresh_token":"ae1bd1149b56af9743ffe7bbbeff3e51"}}
```

JSON Payload：

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "status": 0,
        "message": "",
        "refresh_token": "ae1bd1149b56af9743ffe7bbbeff3e51"
    }
}
```

</details>

## 确认更新

> https://passport.bilibili.com/x/passport-login/web/confirm/refresh

*请求方式：POST*

鉴权方式：Cookie

该步操作将让旧的`refresh_token`对应的 Cookie 失效

**正文参数 (application/x-www-form-urlencoded)或 url 参数：**

| 参数名        | 类型 | 内容                      | 必要性 | 备注                                                         |
| ------------- | ---- | ------------------------- | ------ | ------------------------------------------------------------ |
| csrf          | str  | CSRF Token（位于 cookie） | 必要   | 从新的 cookie 中获取，位于 Cookie 中的`bili_jct`字段               |
| refresh_token | str  | 旧的持久化刷新口令        | 必要   | 在刷新前 localStorage 中的`ac_time_value`获取，**并非刷新后返回的值** |

**json 回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf 校验失败<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为 0                                                     |
| ttl     | num  | 1        |                                                              |

**示例：**

```bash
curl 'https://passport.bilibili.com/x/passport-login/web/confirm/refresh' \
	--data-urlencode 'csrf=1e9658858e6da76be64bd92cdc0fa324' \
	--data-urlencode 'refresh_token=45240a041836905fe953e3b98b83d751' \
	-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

</details>
