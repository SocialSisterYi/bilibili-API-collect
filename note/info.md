#笔记详细信息

- [查询视频笔记](#查询视频笔记)
- [查询笔记内容](#查询笔记内容)

---

## 查询视频笔记

> http://api.bilibili.com/x/note/list/archive

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名  | 类型 | 内容         | 必要性      | 备注     |
| ------- | ---- | ------------ | ----------- | -------- |
| aid    | num  | 稿件avID | 必要（可选）  | avID与bvID任选一个 |
| bvid   | str  | 稿件bvID | 必要（可选）  | avID与bvID任选一个 |
| csrf   | str  | CSRF Token（位于cookie） | 非必要   |         |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                |
| ------- | ---- | -------- | --------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-101：账号未登录   |
| message | str  | 错误信息 | 默认为0                                             |
| ttl     | num  | 1        |                                                     |
| data    | obj  | 信息本体 |                                                     |

`data`对象：

| 字段       | 类型  | 内容     | 备注           |
| ---------- | ----- | -------- | -------------- |
| noteIds    | array | 套了个娃 | 无笔记则无此项 |

`data`中的`noteIds`数组：

| 项   | 类型 | 内容        | 备注             |
| ---- | ---- | ----------- | ---------------- |
| 0    | num  | 笔记ID      |                  |

**示例：**

查询视频`av970322090`/`BV1op4y167Uo`的笔记ID

avID方式：

```shell
curl 'http://api.bilibili.com/x/note/list/archive' \
--data-urlencode 'aid=970322090' \
-b 'SESSDATA=xxx'
```

bvID方式：

```shell
curl 'http://api.bilibili.com/x/note/list/archive' \
--data-urlencode 'bvid=BV1op4y167Uo' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code":0,
    "message":"0",
    "ttl":1,
    "data":{
        "noteIds":[
            3809605586518023
        ]
    }
}
```

</details>

## 查询笔记内容

> http://api.bilibili.com/x/note/info

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**