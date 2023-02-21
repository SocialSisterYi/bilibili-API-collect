# 视频笔记

2020-11-16 B站推出了测试版的功能——"视频笔记"，与视频稿件关联，为富文本模式，可供记录观看视频时的感悟以及视频中的重要内容，目前只可在web端操作

笔记分为私有笔记和公开笔记，一个稿件只能添加一篇私有笔记，但可以公开多篇笔记

公开笔记与【专栏】性质相同，使用`cvid`寻址相应的公开笔记

---

**继续查看：**

- [笔记列表](list.md)
- [笔记详细信息](info.md)
- [笔记操作](action.md)

---

## 附表-笔记正文序列格式

根数组：

| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| 0    | obj  | 第1个元素     |      |
| n    | obj  | 第(n+1)个元素 |      |
| ……   | obj  | ……            | ……   |

根数组中的对象：

| 字段       | 类型 | 内容         | 备注                |
| ---------- | ---- | ------------ | ------------------- |
| attributes | obj  | 元素属性     | 无属性无此项        |
| insert     | str  | 元素内容     | 为跳转/图片时无此项 |
| insert     | obj  | 元素跳转信息 | 非跳转/图片时无此项 |

对象中的`attributes`对象：

| 字段       | 类型 | 内容       | 备注                           |
| ---------- | ---- | ---------- | ------------------------------ |
| bold       | bool | 是否加粗   |                                |
| strike     | bool | 是否删除线 |                                |
| underline  | bool | 是否下划线 |                                |
| background | str  | 背景颜色   |                                |
| color      | str  | 文字颜色   |                                |
| list       | str  | 列表属性   | ordered有序列表/bullet无序列表 |
| size       | str  | 文字字号   |                                |

对象中的`insert`对象：

| 字段        | 类型 | 内容     | 备注   |
| ----------- | ---- | -------- | ------ |
| tag         | obj  | 跳转标签 | 二选一 |
| imageUpload | obj  | 笔记图片 | 二选一 |

`insert`中的`tag`对象：

| 字段     | 类型 | 内容              | 备注         |
| -------- | ---- | ----------------- | ------------ |
| cid      | num  | 视频cid           |              |
| status   | num  | 0                 | 作用尚不明确 |
| index    | num  | 在稿件中的分P索引 |              |
| seconds  | num  | 视频进度          |              |
| cidCount | num  | 稿件总分P数       |              |
| key      | str  | 标签创建时间戳    |              |
| title    | str  | output            | 作用尚不明确 |

`insert`中的`imageUpload`对象：

| 字段   | 类型 | 内容       | 备注         |
| ------ | ---- | ---------- | ------------ |
| url    | str  | 图片链接   |              |
| status | str  | done       | 作用尚不明确 |
| width  | num  | 图片宽度-2 |              |

示例：

以下笔记正文序列包含`字号`、`加粗`、`高亮`、`普通文本`格式

```json
[
    {
        "attributes": {
            "size": "24px",
            "bold": true
        },
        "insert": "关掉"
    },
    {
        "attributes": {
            "size": "24px"
        },
        "insert": "，"
    },
    {
        "attributes": {
            "size": "24px",
            "bold": true
        },
        "insert": "关掉"
    },
    {
        "insert": "，"
    },
    {
        "attributes": {
            "background": "#fff359"
        },
        "insert": "一定要"
    },
    {
        "attributes": {
            "background": "#fff359",
            "bold": true
        },
        "insert": "关掉"
    },
    {
        "insert": "\n再不关掉那些"
    },
    {
        "attributes": {
            "bold": true
        },
        "insert": "网络游戏"
    },
    {
        "insert": "，小孩哪有"
    },
    {
        "attributes": {
            "bold": true
        },
        "insert": "美好的未来"
    },
    {
        "insert": "，哪有"
    },
    {
        "attributes": {
            "bold": true
        },
        "insert": "美好的前程"
    },
    {
        "insert": "，祖国哪有"
    },
    {
        "attributes": {
            "bold": true
        },
        "insert": "栋梁之才"
    },
    {
        "insert": "\n"
    }
]
```

