# 终端信息查询

- [终端信息查询](#终端信息查询)

---

## 终端信息查询

>  http://api.bilibili.com/client_info

*请求方式：任意*

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注    |
| ------- | ---- | -------- | ------- |
| code    | num  | 返回值   | 0：成功 |
| message | str  | 错误信息 | 默认为0 |
| ttl     | num  | 1        |         |
| data    | obj  | 信息本体 |         |

`data`对象：

| 字段     | 类型     | 内容                | 备注         |
| -------- | -------- | ------------------- | ------------ |
| country  | str      | 国家/地区名         |              |
| ip       | str      | 公网IP地址          |              |
| province | str      | 省/州               | 非必须存在项 |
| city     | str      | 城市                | 非必须存在项 |
| district | district | ？                  |              |
| isp      | str      | 运营商名            |              |
| dns      | str      | dns服务器ip         |              |
| dns_isp  | str      | dns服务器ip运营商名 |              |
| headers  | obj      | 头部字段            |              |

`data`中的`headers`对象：

| 字段                              | 类型 | 内容              | 备注 |
| --------------------------------- | ---- | ----------------- | ---- |
| HTTP_ACCEPT_ENCODING              | str  |                   |      |
| HTTP_X_CACHE_SERVER               | str  | CDN服务器名       |      |
| HTTP_X_CACHE_SERVER_ADDR          | str  | CDN服务器ip       |      |
| HTTP_X_BACKEND_BILI_REAL_IP       | str  | 真实服务器ip      |      |
| HTTP_X_BACKEND_BILI_REAL_IPPORT   | str  | 真实服务器端口    |      |
| HTTP_X_BACKEND_BILI_REAL_IP_CHAIN | str  | 真实服务器ip+端口 |      |
| HTTP_X_SCHEME                     | str  | 访问协议          |      |
| HTTP_HOST                         | str  | 访问域名          |      |
| HTTP_USER_AGENT                   | str  | 客户端UA          |      |
| HTTP_ACCEPT                       | str  |                   |      |
| HTTP_CACHE_CONTROL                | str  |                   |      |

**示例：**

```shell
curl 'http://api.bilibili.com/client_info'
```

<details>
<summary>查看响应示例：</summary>


```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "country": "中国",
        "ip": "36.40.120.140",
        "province": "陕西",
        "city": "渭南",
        "district": null,
        "isp": "电信",
        "dns": null,
        "dns_isp": null,
        "headers": {
            "HTTP_ACCEPT_ENCODING": "gzip",
            "HTTP_X_CACHE_SERVER": "ks-bj-webcdn-07",
            "HTTP_X_CACHE_SERVER_ADDR": "10.33.2.170",
            "HTTP_X_BACKEND_BILI_REAL_IP": "36.40.120.140",
            "HTTP_X_BACKEND_BILI_REAL_IPPORT": "22058",
            "HTTP_X_BACKEND_BILI_REAL_IP_CHAIN": "36.40.120.140:22058",
            "HTTP_X_SCHEME": "https",
            "HTTP_HOST": "api.bilibili.com",
            "HTTP_USER_AGENT": "PostmanRuntime/7.26.8",
            "HTTP_ACCEPT": "*/*",
            "HTTP_CACHE_CONTROL": "no-cache"
        }
    }
}
```

</details>

