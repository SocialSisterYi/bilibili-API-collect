# 视频观看笔记

## 保存视频笔记

> http://api.bilibili.com/x/note/add

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）**

| 参数名  | 类型 | 内容                     | 必要性 | 备注     |
| ------- | ---- | ------------------------ | ------ | -------- |
| aid     | num  | 目标稿件avID             | 必要   |          |
| note_id | num  | 笔记ID                   | 必要   |          |
| title   | str  | 稿件标题                 | 必要   |          |
| summary | str  | 笔记开头节选             | 必要   |          |
| content | str  | 笔记json文本             | 必要   |          |
| tags    | str  |                          | 必要   | 尚不明确 |
| cls     | num  | 1                        | 必要   | 尚不明确 |
| from    | str  | save                     | 必要   | 尚不明确 |
| csrf    | str  | CSRF Token（位于cookie） | 必要   |          |
Fiddler设置请求参数太长被程序截了，测不了必要性

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

| 字段        | 类型 | 内容     | 备注                     |
| ----------- | ---- | -------- | ------------------------ |
| tag         | obj  | 跳转标签 |                          |
| imageUpload | obj  | 笔记图片 |                          |

`insert`中的`tag`对象：

