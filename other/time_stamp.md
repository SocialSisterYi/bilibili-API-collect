# 获取当前时间戳

- [获取当前时间戳](#获取当前时间戳)

---

## 获取当前时间戳

> http://api.bilibili.com/x/report/click/now 

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

| 字段 | 类型 | 内容         | 备注 |
| ---- | ---- | ------------ | ---- |
| now  | num  | 当前的时间戳 |      |

**示例：**

```shell
curl 'http://api.bilibili.com/x/report/click/now'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "now": 1592666471
    }
}
```

</details>
