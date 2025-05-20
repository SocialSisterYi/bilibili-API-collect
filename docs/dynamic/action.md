# 动态操作

## 删除动态

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
