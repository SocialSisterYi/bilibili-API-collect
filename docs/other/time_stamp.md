# 获取当前时间戳

- [获取当前时间戳](#获取当前时间戳)
  - [获取当前时间戳](#获取当前时间戳-1)
  - [获取服务器端UTC时间](#获取服务器端utc时间)

---

## 获取当前时间戳

> https://api.bilibili.com/x/report/click/now 

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
curl 'https://api.bilibili.com/x/report/click/now'
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

## 获取服务器端UTC时间

> https://interface.bilibili.com/serverdate.js

*请求方式：GET*

**js回复：**

```js
window.serverdate = Date.UTC(YYYY, M, D, h, m, s);
```

**示例：**

```shell
curl 'https://interface.bilibili.com/serverdate.js'
```


<details>
<summary>查看响应示例：</summary>

```js
window.serverdate = Date.UTC(2021, 4, 16, 17, 31, 8);
```
</details>
