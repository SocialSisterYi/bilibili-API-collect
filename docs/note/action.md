# 笔记操作

## 保存视频笔记

> https://api.bilibili.com/x/note/add

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名       | 类型 | 内容                     | 必要性 | 备注                                                         |
| ------------ | ---- | ------------------------ | ------ | ------------------------------------------------------------ |
| oid          | num  | 目标id                   | 必要   |                                                              |
| oid_type     | num  | 目标id类型               | 必要   | `0`视频(oid=avid)                                            |
| note_id      | num  | 笔记id                   | 非必要 | 创建时无需此项                                               |
| title        | str  | 笔记标题                 | 必要   |                                                              |
| summary      | str  | 笔记预览文本             | 必要   |                                                              |
| content      | str  | 笔记正文json序列         | 必要   | 格式见[附表](readme.md#附表-笔记正文序列格式)                |
| tags         | str  | 笔记跳转标签列表         | 非必要 |                                                              |
| cls          | num  | 1                        | 非必要 | 作用尚不明确                                                 |
| from         | str  | 提交类型                 | 非必要 | `auto`自动提交<br />`save`手动提交<br />`close`关闭时自动提交 |
| cont_len     | num  | 正文字数                 | 非必要 |                                                              |
| platform     | str  | 平台                     | 非必要 | 可为`web`                                                    |
| publish      | num  | 是否公开笔记             | 非必要 | `0`不公开<br />`1`公开                                       |
| auto_comment | num  | 是否添加到评论区         | 非必要 | `0`不添加<br />`1`添加                                       |
| csrf         | str  | CSRF Token（位于cookie） | 必要   |                                                              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | `0`成功 <br />`-101`账号未登录<br />`-111`csrf校验失败<br />`-400`请求错误<br />`79508`该稿件已存在笔记，无法新增<br />`79513`笔记所属视频不合法 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 数据本体 |                                                              |

`data`对象：

| 字段    | 类型 | 内容         | 备注 |
| ------- | ---- | ------------ | ---- |
| note_id | num  | 笔记id       |      |

**示例：**

保存内容为加粗的STRONG的笔记`3809605586518023`于`av970322090`

```shell
curl 'https://api.bilibili.com/x/note/add' \
--data-urlencode 'oid=970322090' \
--data-urlencode 'oid_type=0' \
--data-urlencode 'note_id=3809605586518023'
--data-urlencode 'title=周刊哔哩哔哩排行榜#543'
--data-urlencode 'summary=STRONG'
--data-urlencode 'content=[{"attributes":{"bold":true},"insert":"STRONG"},{"insert":"\n"}]'
--data-urlencode 'tags='
--data-urlencode 'cls=1'
--data-urlencode 'from=save'
--data-urlencode 'csrf=xxx'
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "note_id": 3809605586518023
  }
}
```

</details>

## 删除视频笔记

> https://api.bilibili.com/x/note/del

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名  | 类型 | 内容                     | 必要性 | 备注 |
| ------- | ---- | ------------------------ | ------ | ---- |
| oid     | num  | 目标稿件avid             | 必要   |      |
| note_id | num  | 笔记id                   | 非必要 |      |
| csrf    | str  | CSRF Token（位于cookie） | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功 <br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

删除稿件`av457253380`下的笔记`4075968478576647`

```shell
curl 'https://api.bilibili.com/x/note/del' \
--data-urlencode 'oid=457253380' \
--data-urlencode 'note_id=4075968478576647' \
--data-urlencode 'csrf=xxx'
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1
}
```

</details>
