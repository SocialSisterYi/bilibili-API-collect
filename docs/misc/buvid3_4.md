# 获取 buvid3 / buvid4 / b_nut

## 仅获取 buvid3

> https://api.bilibili.com/x/web-frontend/getbuvid

*请求方式: GET*

<!--{
  "gh": [338]
}-->

**JSON回复:**

根对象:

| 字段    | 类型 | 内容     | 备注     |
| ------- | ---- | -------- | -------- |
| code    | num  | 返回值   | 0：成功  |
| data    | obj  | 数据本体 |          |

`data`对象:

| 字段 | 类型 | 内容   | 备注 |
| ---- | ---- | ------ | ---- |
| buvid | str  | buvid3 | 需手动存放至 cookie 中 |

**示例:**

注: 不要复制

```shell
curl -G 'https://api.bilibili.com/x/web-frontend/getbuvid'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "data": {
    "buvid": "54E5EFC1-3C8F-F690-2261-439E4F6A20A979439infoc"
  }
}
```

</details>

## 接口获取 buvid3 / buvid4

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

## 从响应头获取 buvid3 / b_nut

使用 `GET` 或 `HEAD` 方法请求 `https://www.bilibili.com/`, 且请求头中 `User-Agent` 字段不包含 `curl` `python` `awa` 等敏感子字符串, 且相同 `User-Agent` 字段不得短时多次请求. 在响应头中的 `Set-Cookie` 字段中, 即可找到 `buvid3` 和 `b_nut`.

若不带任何 Cookie 请求, 则 `b_nut` 为响应生成时刻的 UNIX 秒级时间戳.
若请求 Cookie 仅带有 `buvid3`, 则 `b_nut` 为 `100`.
若请求 Cookie 仅带有 `b_nut`, 则与不带任何 Cookie 的响应相同.
若请求 Cookie 仅带有 `buvid3` 和 `b_nut`, 则响应无 `Set-Cookie` 字段.
若请求 Cookie 带有其他字段, 无影响.

**示例:**

```shell
curl -I "https://www.bilibili.com/" -A "awa"
```

<details>
<summary>查看响应示例:</summary>

```http
HTTP/2 200 
date: Fri, 26 Jul 2024 06:38:43 GMT
content-type: text/html; charset=utf-8
support: nantianmen
set-cookie: buvid3=805E4894-96A2-0684-6F00-C6EA1FFB911023315infoc; path=/; expires=Sat, 26 Jul 2025 06:38:43 GMT; domain=.bilibili.com
set-cookie: b_nut=1721975923; path=/; expires=Sat, 26 Jul 2025 06:38:43 GMT; domain=.bilibili.com
vary: Origin,Accept-Encoding
idc: shjd
expires: Fri, 26 Jul 2024 06:38:42 GMT
cache-control: no-cache
x-cache-webcdn: MISS from blzone01
x-cache-time: 0
x-save-date: Fri, 26 Jul 2024 06:38:43 GMT
```

</details>
