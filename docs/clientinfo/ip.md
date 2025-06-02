# 通过ip确定地理位置

## 根据请求IP确定属地

> https://api.bilibili.com/x/web-interface/zone
>
> https://api.live.bilibili.com/xlive/web-room/v1/index/getIpInfo
>
> https://app.bilibili.com/x/resource/ip

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
| zone_id      | num  | ip数据库id    | 第二个接口无 |
| country_code | num  | 国家/地区代码 | 第二个接口无 |

**示例：**

```shell
curl 'https://api.bilibili.com/x/web-interface/zone'
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

## 查询任意 IP 地址的归属地

> https://api.live.bilibili.com/ip_service/v1/ip_service/get_ip_addr  
> https://api.live.bilibili.com/client/v1/Ip/getInfoNew

注: 以上接口等效

*请求方式：GET*

**URL参数:**


| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| ip     | str  | IP地址   | 不必要   | IPv4或IPv6地址不限, 留空与[根据请求IP确定地理位置](#根据请求ip确定地理位置)基本相同 |

**JSON回复:**

根对象：

| 字段    | 类型 | 内容     | 备注    |
| ------- | ---- | -------- | ------- |
| code    | num  | 返回值   | 0: 成功 |
| message | str  | 错误信息 | 默认为空 |
| msg     | str  | 错误信息 | 同message |
| data    | obj  | 信息本体 | 出错时为空数组 |

`data`对象：

与[根据请求IP确定地理位置](#根据请求ip确定地理位置)回复的`data`对象基本相同, 但无 `zone_id` `country_code` 字段

**示例:**

查询请求IP地址的归属地:

```shell
curl -G 'https://api.live.bilibili.com/client/v1/Ip/getInfoNew'
```

<details>
<summary>查看响应示例:</summary>


```json
{
  "code": 0,
  "msg": "",
  "message": "",
  "data": {
    "addr": "104.28.156.113",
    "country": "新加坡",
    "province": "新加坡",
    "city": "",
    "isp": "cloudflare.com",
    "latitude": "1.352083",
    "longitude": "103.819836"
  }
}
```

</details>

查询IP地址`8.8.8.8`的归属地:

```shell
curl -G 'https://api.live.bilibili.com/ip_service/v1/ip_service/get_ip_addr' \
--data-urlencode 'ip=8.8.8.8'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "msg": "",
  "message": "",
  "data": {
    "addr": "8.8.8.8",
    "country": "GOOGLE.COM",
    "province": "GOOGLE.COM",
    "city": "",
    "isp": "level3.com",
    "latitude": "",
    "longitude": ""
  }
}
```

</details>
