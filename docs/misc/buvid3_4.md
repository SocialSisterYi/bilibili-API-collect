# 获取 buvid3 / buvid4

## 游客获取 buvid3 / buvid4

> https://api.bilibili.com/x/frontend/finger/spi

*请求方式: GET*

**JSON回复:**

根对象:

| 字段    | 类型 | 内容     | 备注     |
| ------- | ---- | -------- | -------- |
| code    | num  | 返回值   | 0：成功  |
| message | str  | 信息     | ok: 成功 |
| data    | obj  | 数据本体 |          |

`data`对象:

| 字段 | 类型 | 内容   | 备注 |
| ---- | ---- | ------ | ---- |
| b_3  | str  | buvid3 | 需手动存放至 cookie 中 |
| b_4  | str  | buvid4 | 同上 |

**示例:**

注: 建议自行生成, 不要复制本处示例的 buvid3 / buvid4.

```shell
curl -G 'https://api.bilibili.com/x/frontend/finger/spi'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "data": {
    "b_3": "D9656DA8-9BEF-F464-5B72-C4849AFD336379044infoc",
    "b_4": "F6E0FD4B-520C-1902-4F7B-E461D8D1F5AB79044-024072309-666onEZSnlHVPjoRp4kDYg=="
  },
  "message": "ok"
}
```

</details>
