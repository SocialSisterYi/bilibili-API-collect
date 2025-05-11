# 动态操作

## 点赞动态

> https://api.bilibili.com/x/dynamic/feed/dyn/thumb

*请求方法: POST*

认证方式: Cookie (SESSDATA)

**URL 参数:**

| 参数名 | 类型   | 内容   | 必要性 | 备注 |
| ------ | ------ | ------ | ------ | ---- |
| csrf   | string | CSRF Token (即 Cookie 中 bili_jct) | 必要 |  |

**正文参数 (application/json):**

根对象:

| 参数名     | 类型   | 内容     | 必要性 | 备注 |
| ---------- | ------ | -------- | ------ | ---- |
| dyn_id_str | string | 动态 id  | 必要   |      |
| up         | number | 点赞状态 | 必要   | 0: 切换<br />1: 点赞<br />2: 取消点赞 |
| spmid      | string | `333.1369.0.0` | 不必要 | |
| from_spmid | string | `333.999.0.0`  | 不必要 | |

**JSON回复:**

根对象:

| 字段 | 类型   | 内容 | 备注 |
| ---- | ------ | ---- | ---- |
| code | number | 返回值 | 0: 成功<br />-101: 账号未登录<br />-111: csrf 校验失败<br />4100001: 参数错误 |
| message | string | 错误消息 | 成功时为 `0` |
| ttl  | number | `1`  |      |
| data | object | 空对象 |    |

**示例:**

点赞动态 `1057955152016703512`

```shell
curl -X POST 'https://api.bilibili.com/x/dynamic/feed/dyn/thumb' \
  --url-query 'csrf=xxx' \
  -b 'SESSDATA=xxxxx' \
  -H 'content-type: application/json' \
  --data-raw '{"dyn_id_str":"1057955152016703512","up":1}'
```
<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {}
}
```

</details>

## 点赞动态 (旧版)

> https://api.vc.bilibili.com/dynamic_like/v1/dynamic_like/thumb

*请求方法: POST*

认证方式: Cookie (SESSDATA)

**正文参数 (application/x-www-form-urlencoded):**

根对象:

| 参数名     | 类型   | 内容     | 必要性 | 备注 |
| ---------- | ------ | -------- | ------ | ---- |
| dynamic_id | string | 动态 id  | 必要   |      |
| up         | number | 点赞状态 | 必要   | 0: 切换<br />1: 点赞<br />2: 取消点赞 |
| csrf   | string | CSRF Token (即 Cookie 中 bili_jct) | 必要 |  |

**JSON回复:**

根对象:

| 字段 | 类型   | 内容 | 备注 |
| ---- | ------ | ---- | ---- |
| code | number | 返回值 | 0: 成功<br />-101: 账号未登录<br />-111: csrf 校验失败<br />4100001: 参数错误 |
| message | string | 错误消息 | 成功时为 `0` |
| ttl  | number | `1`  |      |
| data | object | 空对象 |    |

**示例:**

点赞动态 `1060771233257226247`

```shell
curl -X POST 'https://api.vc.bilibili.com/dynamic_like/v1/dynamic_like/thumb' \                                                       --data-urlencode 'csrf=xxxxxx' \
  --data-urlencode 'dynamic_id=1060771233257226247' \
  --data-urlencode 'up=1' \
  -b 'SESSDATA=xxx'
```
<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {}
}
```

</details>

## 删除动态

参见 [创作中心 -> 图文操作 -> 删除动态](../creativecenter/opus.md#删除动态)

## 删除动态 (旧版)

> <https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/rm_dynamic>

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（multipart/form-data）：**

| 参数名     | 类型 | 内容   | 必要性 | 备注 |
| ---------- | ---- | ------ | ------ | ---- |
| dynamic_id | num  | 动态id | 必要   |      |
| csrf_token | str  | csrf   | 必要   |      |
| csrf       | str  | csrf   | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                                                    |
| ------- | ---- | -------- | --------------------------------------------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />500404：已经删除过该动态<br />500406：动态不是自己的 |
| msg     | str  | 错误信息 | 成功时为空文本                                                                          |
| message | str  | 错误信息 | 同`msg`                                                                                 |
| data    | obj  | 数据本体 |                                                                                         |

`data`对象：

| 字段    | 类型 | 内容 | 备注             |
| ------- | ---- | ---- | ---------------- |
| \_gt\_  | num  | 0    | **作用尚不明确** |

**示例：**

删除动态`dynamic_id=588320531406678918`

```shell
curl 'https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/rm_dynamic' \
  --data-urlencode 'dynamic_id=588320531406678918' \
  --data-urlencode 'csrf_token=xxx' \
  --data-urlencode 'csrf=xxx' \
  -b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "msg": "",
  "message": "",
  "data": {
    "_gt_": 0
  }
}
```

</details>

## 删除定时发布动态

> <https://api.vc.bilibili.com/dynamic_draft/v1/dynamic_draft/rm_draft>

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（application/x-www-form-urlencoded）：**

| 参数名     | 类型 | 内容           | 必要性 | 备注 |
| ---------- | ---- | -------------- | ------ | ---- |
| draft_id   | num  | 定时发布动态id | 必要   |      |
| csrf_token | str  | csrf           | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                           |
| ------- | ---- | -------- | ------------------------------ |
| code    | num  | 返回值   | 0：成功<br />4120015：系统异常 |
| message | str  | 错误信息 |                                |
| ttl     | num  | 1        |                                |
| data    | obj  | 数据本体 | 空对象，即`{}`                 |

**示例：**

删除定时发布动态`draft_id=755409289278914611`

```shell
curl 'https://api.vc.bilibili.com/dynamic_draft/v1/dynamic_draft/rm_draft' \
  --data-urlencode 'draft_id=755409289278914611' \
  --data-urlencode 'csrf=xxxx'
  -b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0, 
  "message": "0", 
  "ttl": 1, 
  "data": {}
}
```

</details>

## 设置置顶动态

> https://api.bilibili.com/x/dynamic/feed/space/set_top

**请求方法: POST**

认证方式: Cookie (SESSDATA)

鉴权方式: Cookie 中 `buvid3` 不为空

**URL 参数:**

| 参数名 | 类型   | 内容   | 必要性 | 备注 |
| ------ | ------ | ------ | ------ | ---- |
| csrf   | string | CSRF Token (即 Cookie 中 bili_jct) | 必要 |  |

**正文参数 (application/json):**

根对象:

| 参数名  | 类型   | 内容     | 必要性 | 备注 |
| ------- | ------ | -------- | ------ | ---- |
| dyn_str | string | 动态 id  | 必要   |      |

**JSON回复:**

根对象:

| 字段 | 类型   | 内容 | 备注 |
| ---- | ------ | ---- | ---- |
| code | number | 返回值 | 0: 成功<br />-101: 账号未登录<br />-111: csrf 校验失败<br />4100001: 参数错误 |
| message | string | 错误消息 | 成功时为 `0` |
| ttl  | number | `1`  |      |
| data | object | 空对象 |    |

**示例:**


置顶动态 `1063487284684259332`

```shell
curl -X POST 'https://api.bilibili.com/x/dynamic/feed/space/set_top' \
  --url-query 'csrf=xxx' \
  -b 'SESSDATA=xxxxx; buvid3=aaa' \
  -H 'content-type: application/json' \
  --data-raw '{"dyn_str":"1063487284684259332"}'
```
<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {}
}
```

</details>

## 取消置顶动态

> https://api.bilibili.com/x/dynamic/feed/space/rm_top

**请求方法: POST**

认证方式: Cookie (SESSDATA)

**URL 参数:**

| 参数名 | 类型   | 内容   | 必要性 | 备注 |
| ------ | ------ | ------ | ------ | ---- |
| csrf   | string | CSRF Token (即 Cookie 中 bili_jct) | 必要 |  |

**正文参数 (application/json):**

根对象:

| 参数名  | 类型   | 内容     | 必要性 | 备注 |
| ------- | ------ | -------- | ------ | ---- |
| dyn_str | string | 动态 id  | 必要   |      |

**JSON回复:**

根对象:

| 字段 | 类型   | 内容 | 备注 |
| ---- | ------ | ---- | ---- |
| code | number | 返回值 | 0: 成功<br />-101: 账号未登录<br />-111: csrf 校验失败<br />4100001: 参数错误 |
| message | string | 错误消息 | 成功时为 `0` |
| ttl  | number | `1`  |      |
| data | object | 空对象 |    |

**示例:**


取消置顶动态 `1063487284684259332`

```shell
curl -X POST 'https://api.bilibili.com/x/dynamic/feed/space/rm_top' \
  --url-query 'csrf=xxx' \
  -b 'SESSDATA=xxxxx' \
  -H 'content-type: application/json' \
  --data-raw '{"dyn_str":"1063487284684259332"}'
```
<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {}
}
```

</details>
