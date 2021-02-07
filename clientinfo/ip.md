# 通过ip确定地理位置

- [通过ip确定位置](#通过ip确定位置)

---

## 通过ip确定位置

> http://api.bilibili.com/x/web-interface/zone

*请求方式：GET*

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注    |
| ------- | ---- | -------- | ------- |
| code    | num  | 返回值   | 0：成功 |
| message | str  | 错误信息 | 默认为0 |
| ttl     | num  | 1        |         |
| data    | obj  | 信息本体 |         |

`data`对象：

| 字段         | 类型 | 内容          | 备注         |
| ------------ | ---- | ------------- | ------------ |
| addr         | str  | 公网IP地址    |              |
| country      | str  | 国家/地区名   |              |
| province     | str  | 省/州         | 非必须存在项 |
| city         | str  | 城市          | 非必须存在项 |
| isp          | str  | 运营商名      |              |
| latitude     | num  | 纬度          |              |
| longitude    | num  | 经度          |              |
| zone_id      | num  | ip数据库ID    |              |
| country_code | num  | 国家/地区代码 |              |

**示例：**

```shell
curl 'http://api.bilibili.com/x/web-interface/zone'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code":0,
    "message":"0",
    "ttl":1,
    "data":{
            "addr":"36.40.120.145",
            "country":"中国",
            "province":"陕西",
            "city":"渭南",
            "isp":"电信",
            "latitude":34.4995,
            "longitude":109.492821,
            "zone_id":4472912,
            "country_code":86
        }
}
```

</details>
