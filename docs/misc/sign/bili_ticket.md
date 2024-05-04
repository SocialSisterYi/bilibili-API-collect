`bili_ticket` 目前没发现多少风控价值，但是暂且在这里提供一份示例。

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

# Python 示例

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
```