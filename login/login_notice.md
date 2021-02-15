# 登录记录

- [查询登录记录](#查询登录记录)

---

## 查询登录记录

> http://api.bilibili.com/x/safecenter/login_notice

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容    | 必要性 | 备注                                         |
| ------ | ---- | ------- | ------ | -------------------------------------------- |
| mid    | num  | 用户UID | 必要   |                                              |
| buvid  | str  | 设备ID  | 非必要 | 为操作登录接口时Cookie中的`buvid3`可为任意值 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        |                             |
| data    | obj  | 信息本体 |                             |

`data`对象：

| 字段        | 类型 | 内容        | 备注                       |
| ----------- | ---- | ----------- | -------------------------- |
| mid         | num  | 登录用户UID |                            |
| device_name | str  | 登录设备    | 依靠操作登录接口时的UA决定 |
| login_type  | str  | 登录方式    | 根据登录接口决定           |
| login_time  | str  | 登录时间    | YYYY-MM-DD hh:mm:ss        |
| location    | str  | 登录位置    | 依靠ip决定                 |
| ip          | str  | 登录ip      | 部分用`*`打码              |

**示例：**

查询用户`293793435`设备ID为`fuck_chenrui`的登录记录

```shell
curl -G 'http://api.bilibili.com/x/safecenter/login_notice' \
--data-urlencode 'mid=293793435' \
--data-urlencode 'buvid=fuck_chenrui'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "mid": 293793435,
        "device_name": "Chrome浏览器",
        "login_type": "扫码登录",
        "login_time": "2020-10-02 22:42:38",
        "location": "中国陕西渭南",
        "ip": "36.40.***.**"
    }
}
```

</details>
