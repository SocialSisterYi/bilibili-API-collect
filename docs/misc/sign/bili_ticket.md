# BiliTicket

## 简述

`bili_ticket` 位于请求头 Cookie 中, 非必需, 但存在可降低风控概率

由 [@aynuarance](https://github.com/aynuarance) 于 [#903](https://github.com/SocialSisterYi/bilibili-API-collect/issues/903) 提供的思路，根据时间戳使用 `hmac_sha256` 算法计算 `hexsign`。

是 [JWT 令牌](https://jwt.io/)，有效时长为 259260 秒，即 3 天。
例如 `eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDI3NDI3NDYsImlhdCI6MTcwMjQ4MzQ4NiwicGx0IjotMX0.xQgtTAc41NA1gzvd9yKUPgucUy_DKcQj6OG1vj8V7ZA`

```json
{
  "alg": "HS256",
  "kid": "s03",
  "typ": "JWT"
}
```

## 算法

1. 获取 UNIX 秒级时间戳存入变量如 `timestamp`
2. 计算变量 `hexsign` 值，使用 `hmac_sha256` 算法，密钥为 `XgwSnGZ1p`，消息为字符串 `"ts"` 与变量 `timestamp` 值拼接
3. 构造请求参数，`key_id` 为 `ec02`，`hexsign` 为变量 `hexsign` 值，`context[ts]` 为变量 `timestamp` 值，`csrf` 为 cookie 中的 `bili_jct` 值也可为空
4. 发送 `POST` 请求，获取 `data` 字段中的 `ticket` 字段的值即为所求

## Demo

### Python

需要 `requests` 依赖

```python
import hmac
import hashlib
import requests
import time

def hmac_sha256(key, message):
    """
    使用HMAC-SHA256算法对给定的消息进行加密
    :param key: 密钥
    :param message: 要加密的消息
    :return: 加密后的哈希值
    """
    # 将密钥和消息转换为字节串
    key = key.encode('utf-8')
    message = message.encode('utf-8')

    # 创建HMAC对象，使用SHA256哈希算法
    hmac_obj = hmac.new(key, message, hashlib.sha256)

    # 计算哈希值
    hash_value = hmac_obj.digest()

    # 将哈希值转换为十六进制字符串
    hash_hex = hash_value.hex()

    return hash_hex


if __name__ == '__main__':
    o = hmac_sha256("XgwSnGZ1p",f"ts{int(time.time())}")
    url = "https://api.bilibili.com/bapis/bilibili.api.ticket.v1.Ticket/GenWebTicket"
    params = {
        "key_id":"ec02",
        "hexsign":o,
        "context[ts]":f"{int(time.time())}",
        "csrf": ''
    }

    headers = {
            'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0"
        }
    resp = requests.post(url, params=params,headers=headers).json()
    print(resp)
```

### Java

无需第三方依赖

```java
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URI;
import java.nio.charset.StandardCharsets;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

public class BiliTicketDemo {

    /**
     * Convert a byte array to a hex string.
     * 
     * @param bytes The byte array to convert.
     * @return The hex string representation of the given byte array.
     */
    public static String bytesToHex(byte[] bytes) {
        StringBuilder sb = new StringBuilder();
        for (byte b : bytes) {
            String hex = Integer.toHexString(0xff & b);
            if (hex.length() == 1) {
                sb.append('0');
            }
            sb.append(hex);
        }
        return sb.toString();
    }

    /**
     * Generate a HMAC-SHA256 hash of the given message string using the given key
     * string.
     * 
     * @param key     The key string to use for the HMAC-SHA256 hash.
     * @param message The message string to hash.
     * @throws Exception If an error occurs during the HMAC-SHA256 hash generation.
     * @return The HMAC-SHA256 hash of the given message string using the given key
     *         string.
     */
    public static String hmacSha256(String key, String message) throws Exception {
        Mac mac = Mac.getInstance("HmacSHA256");
        SecretKeySpec secretKeySpec = new SecretKeySpec(key.getBytes(StandardCharsets.UTF_8), "HmacSHA256");
        mac.init(secretKeySpec);
        byte[] hash = mac.doFinal(message.getBytes(StandardCharsets.UTF_8));
        return bytesToHex(hash);
    }

    /**
     * Get a Bilibili web ticket for the given CSRF token.
     * 
     * @param csrf The CSRF token to use for the web ticket, can be {@code null} or
     *             empty.
     * @return The Bilibili web ticket raw response for the given CSRF token.
     * @throws Exception If an error occurs during the web ticket generation.
     * @see https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/misc/sign/bili_ticket.md
     */
    public static String getBiliTicket(String csrf) throws Exception {
        // params
        long ts = System.currentTimeMillis() / 1000;
        String hexSign = hmacSha256("XgwSnGZ1p", "ts" + ts);
        StringBuilder url = new StringBuilder(
                "https://api.bilibili.com/bapis/bilibili.api.ticket.v1.Ticket/GenWebTicket");
        url.append('?');
        url.append("key_id=ec02").append('&');
        url.append("hexsign=").append(hexSign).append('&');
        url.append("context[ts]=").append(ts).append('&');
        url.append("csrf=").append(csrf == null ? "" : csrf);
        // request
        HttpURLConnection conn = (HttpURLConnection) new URI(url.toString()).toURL().openConnection();
        conn.setRequestMethod("POST");
        conn.addRequestProperty("User-Agent", "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0");
        InputStream in = conn.getInputStream();
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        int b;
        while ((b = in.read()) != -1) {
            out.write(b);
        }
        return new String(out.toByteArray(), StandardCharsets.UTF_8);
    }

    /**
     * Main method to test the BiliTicketDemo class.
     * 
     * @param args The command line arguments (not used).
     */
    public static void main(String[] args) {
        try {
            System.out.println(getBiliTicket("")); // use empty CSRF here
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
```
