# 视频观看笔记

## 保存视频笔记

> http://api.bilibili.com/x/note/add

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）**

| 参数名  | 类型 | 内容                     | 必要性 | 备注           |
| ------- | ---- | ------------------------ | ------ | -------------- |
| aid     | num  | 目标稿件avID             | 必要   |                |
| note_id | num  | 笔记ID                   | 非必要 | 创建时无需此项 |
| title   | str  | 稿件标题                 | 必要   |                |
| summary | str  | 笔记开头节选             | 必要   |                |
| content | str  | 笔记json文本             | 必要   |                |
| tags    | str  |                          | 非必要 | 尚不明确       |
| cls     | num  | 1                        | 非必要 | 尚不明确       |
| from    | str  | save                     | 非必要 | 尚不明确       |
| csrf    | str  | CSRF Token（位于cookie） | 必要   |                |

**content参数：**

根数组：

| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| 0    | obj  | 第1个元素     |      |
| n    | obj  | 第(n+1)个元素 |      |
| ……   | obj  | ……            | ……   |

根数组中的对象：

| 字段       | 类型 | 内容          | 备注                |
| ---------- | ---- | ------------- | ------------------- |
| attributes | obj  | 元素属性      | 无属性无此项        |
| insert     | str  | 元素内容      | 为跳转/图片时无此项 |
| insert     | obj  | 元素跳转信息  | 非跳转/图片时无此项 |

对象中的`attributes`对象：

| 字段       | 类型 | 内容          | 备注                           |
| ---------- | ---- | ------------- | ------------------------------ |
| bold       | bool | 是否加粗      |                                |
| strike     | bool | 是否删除线    |                                |
| underline  | bool | 是否下划线    |                                |
| background | str  | 背景颜色      |                                |
| color      | str  | 文字颜色      |                                |
| list       | str  | 列表属性      | ordered有序列表/bullet无序列表 |
| size       | str  | 文字字号      |                                |

对象中的`insert`对象：

| 字段        | 类型 | 内容     | 备注   |
| ----------- | ---- | -------- | ------ |
| tag         | obj  | 跳转标签 | 二选一 |
| imageUpload | obj  | 笔记图片 | 二选一 |

`insert`中的`tag`对象：

| 字段      | 类型 | 内容              | 备注         |
| --------- | ---- | ----------------- | ------------ |
| cid       | num  | 视频cid           |              |
| status    | num  | 0                 | 作用尚不明确 |
| index     | num  | 在稿件中的分P索引 |              |
| seconds   | num  | 视频进度          |              |
| cidCount  | num  | 稿件总分P数       |              |
| key       | str  | 标签创建时间戳    |              |
| title     | str  | output            | 作用尚不明确 |

`insert`中的`imageUpload`对象：

| 字段    | 类型 | 内容       | 备注         |
| ------- | ---- | ---------- | ------------ |
| url     | str  | 图片链接   |              |
| status  | str  | done       | 作用尚不明确 |
| width   | num  | 图片宽度-2 |              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功 <br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />-79508：该稿件已存在笔记，无法新增 |
| data    | obj  | 数据本体 |                                                              |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

`data`对象：

| 字段    | 类型 | 内容         | 备注 |
| ------- | ---- | ------------ | ---- |
| note_id | num  | 笔记ID       |      |

**示例：**

保存内容为加粗的STRONG的笔记`3809605586518023`于`av970322090`

```shell
curl 'http://api.bilibili.com/x/note/add' \
--data-urlencode 'aid=970322090' \
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

