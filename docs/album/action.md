# 相簿操作

<details>
<summary>功能已下线</summary>

## ~~点赞相簿~~

> https://api.vc.bilibili.com/link_draw/v2/Vote/operate

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名     | 类型 | 内容                     | 必要性 | 备注                   |
| ---------- | ---- | ------------------------ | ------ | ---------------------- |
| doc_id     | num  | 相簿id                   | 必要   |                        |
| type       | num  | 操作方式                 | 必要   | 1：点赞<br />2：取消赞 |
| csrf_token | str  | CSRF Token（位于cookie） | 非必要 |                        |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />1：参数错误<br />3：未登录<br />110022：已经操作过了 |
| msg     | str  | 错误信息 | 默认为success                                                |
| message | str  | 错误信息 | 默认为success                                                |
| data    | obj  | 数据本体 |                                                              |

`data`对象：

| 字段 | 类型 | 内容     | 备注                   |
| ---- | ---- | -------- | ---------------------- |
| type | num  | 操作方式 | 1：点赞<br />2：取消赞 |

**示例：**

点赞相簿`id=99184721`

```shell
curl 'https://api.vc.bilibili.com/link_draw/v2/Vote/operate' \
--data-urlencode 'doc_id=99184721' \
--data-urlencode 'type=1' \
--data-urlencode 'csrf_token=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "msg": "success",
    "message": "success",
    "data": {
        "type": 1
    }
}
```

</details>

## ~~收藏相簿~~

> https://api.vc.bilibili.com/user_plus/v1/Fav/add

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名     | 类型 | 内容                     | 必要性 | 备注         |
| ---------- | ---- | ------------------------ | ------ | ------------ |
| fav_id     | num  | 相簿id                   | 必要   |              |
| biz_type   | num  | 2                        | 必要   | 作用尚不明确 |
| csrf_token | str  | CSRF Token（位于cookie） | 非必要 |              |

**json回复：**

根对象：

| 字段    | 类型  | 内容     | 备注                                                         |
| ------- | ----- | -------- | ------------------------------------------------------------ |
| code    | num   | 返回值   | 0：成功<br />-400：参数错误<br />-500：未登录<br />-507：已收藏 |
| msg     | str   | 错误信息 | 默认为OK                                                     |
| message | str   | 错误信息 | 默认为OK                                                     |
| data    | array | 空       |                                                              |

**示例：**

收藏相簿`id=99184721`

```shell
curl 'https://api.vc.bilibili.com/user_plus/v1/Fav/add' \
--data-urlencode 'fav_id=99184721' \
--data-urlencode 'biz_type=2' \
--data-urlencode 'csrf_token=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>


```json
{
    "code": 0,
    "msg": "OK",
    "message": "OK",
    "data": []
}
```

</details>

## 取消收藏相簿

> https://api.vc.bilibili.com/user_plus/v1/Fav/delete

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名     | 类型 | 内容                     | 必要性 | 备注         |
| ---------- | ---- | ------------------------ | ------ | ------------ |
| fav_id     | num  | 相簿id                   | 必要   |              |
| biz_type   | num  | 2                        | 必要   | 作用尚不明确 |
| csrf_token | str  | CSRF Token（位于cookie） | 非必要 |              |

**json回复：**

根对象：

| 字段    | 类型  | 内容     | 备注                                          |
| ------- | ----- | -------- | --------------------------------------------- |
| code    | num   | 返回值   | 0：成功<br />-400：参数错误<br />-500：未登录 |
| msg     | str   | 错误信息 | 默认为OK                                      |
| message | str   | 错误信息 | 默认为OK                                      |
| data    | array | 空       |                                               |

**示例：**

取消收藏相簿`id=99184721`

```shell
curl 'https://api.vc.bilibili.com/user_plus/v1/Fav/delete' \
--data-urlencode 'fav_id=99184721' \
--data-urlencode 'biz_type=2' \
--data-urlencode 'csrf_token=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>


```json
{
    "code": 0,
    "msg": "OK",
    "message": "OK",
    "data": []
}
```

</details>
</details>
