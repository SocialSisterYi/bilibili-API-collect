# 互动视频信息

## 获取互动视频单P详细信息

> http://api.bilibili.com/x/stein/edgeinfo_v2

*请求方式：GET*

认证方式：SESSDATA

**url参数：**

| 参数名        | 类型 | 内容       | 必要性       | 备注               |
| ------------- | ---- | ---------- | ------------ | ------------------ |
| aid           | num  | 视频avID   | 必要（可选） | avID与bvID任选一个 |
| bvid          | str  | 视频bvID   | 必要（可选） | avID与bvID任选一个 |
| edge_id       | num  | 选择编号   | 非必要       |                    |
| graph_version | num  | 155446     | 必要         | 作用尚不明确       |
| platform      | str  | 平台名称   | 必要         | 电脑：pc           |
| portal        | num  | 0          | 非必要       | 作用尚不明确       |
| screen        | num  | 0          | 非必要       | 作用尚不明确       |
| buvid         | str  | 位于Cookie | 非必要       | 作用尚不明确       |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                          |
| ------- | ---- | -------- | --------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-404：无视频 |
| message | str  | 错误信息 | 默认为0                                       |
| ttl     | num  | 1        |                                               |
| data    | obj  | 信息本体 |                                               |

`data`对象：

| 字段        | 类型  | 内容           | 备注         |
| ----------- | ----- | -------------- | ------------ |
| title       | str   | 分P标题        |              |
| edge_id     | num   | 当前选择编号   |              |
| story_list  | array | 进度回溯条     |              |
| edges       | obj   | 当前选择信息   |              |
| preload     | obj   | 预加载的分P    |              |
| hidden_vars | array | 变量列表       |              |
| is_leaf     | num   | 0              | 作用尚不明确 |

`data`中的`story_list`数组：

| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| 0    | obj  | 回溯第一项    |      |
| n    | obj  | 回溯第(n+1)项 |      |
| ……   | obj  | ……            | ……   |

`story_list`数组中的对象：

| 项         | 类型 | 内容          | 备注                |
| ---------- | ---- | ------------- | ------------------- |
| node_id    | num  | 与edge_id相等 |                     |
| edge_id    | num  | 选择编号      |                     |
| title      | str  | 分P标题       |                     |
| cid        | num  | 分P CID       |                     |
| start_pos  | num  | 播放开始位置  | 毫秒单位            |
| cover      | str  | 分P封面       |                     |
| is_current | num  | 是否为当前P   | null：否<br />1：是 |
| cursor     | num  | 不定          | 作用尚不明确        |

`data`中的`edges`对象：

| 字段        | 类型  | 内容          | 备注                     |
| ----------- | ----- | ------------- | ------------------------ |
| dimension   | obj   | 当前分P分辨率 | 有部分视频无法获取分辨率 |
| questions   | array | 问题          |                          |
| skin        | obj   | 问题外观      |                          |

`data`中的`edges`对象中的`dimension`对象：

| 字段   | 类型 | 内容           | 备注                 |
| ------ | ---- | -------------- | -------------------- |
| width  | num  | 当前分P 宽度   |                      |
| height | num  | 当前分P 高度   |                      |
| rotate | num  | 是否将宽高对换 | 0：正常<br />1：对换 |

`data`中的`edges`对象中的`questions`数组：

| 项   | 类型 | 内容     | 备注 |
| ---- | ---- | -------- | ---- |
| 0    | obj  | 问题本体 |      |

`data`中的`edges`对象中的`questions`数组中的对象：

| 字段         | 类型  | 内容            | 备注                |
| ------------ | ----- | --------------- | ------------------- |
| id           | num   | 问题编号        |                     |
| type         | num   | 2               | 作用尚不明确        |
| start_time_r | num   | 300 或 duration | 作用尚不明确        |
| duration     | num   | 回答限时        | 毫秒单位，不限为-1  |
| pause_video  | num   | 是否暂停视频    | null：否<br />1：是 |
| title        | str   | 问题标题        |                     |
| choices      | array | 回答列表        |                     |

`data`中的`edges`对象中的`questions`数组中的对象中的`choices`数组：

| 项   | 类型 | 内容        | 备注 |
| ---- | ---- | ----------- | ---- |
| 0    | obj  | 第一选项    |      |
| n    | obj  | 第(n+1)选项 |      |
| ……   | obj  | ……          | ……   |

`data`中的`edges`对象中的`questions`数组中的对象中的`choices`数组中的对象：

| 字段            | 类型 | 内容                      | 备注                  |
| --------------- | ---- | ------------------------- | --------------------- |
| id              | num  | 选项编号                  |                       |
| platform_action | str  | 点击后跳转的分P与选项编号 | JUMP 选项编号 目标cid |
| native_action   | str  | 点击后对变量进行的修改    | 每项间用分号隔开      |
| condition       | str  | 选项出现条件              |                       |
| cid             | num  | 跳转分P CID               |                       |
| x               | num  | 选项出现的x坐标           |                       |
| y               | num  | 选项出现的y坐标           |                       |
| text_align      | num  | 选项文本对齐方式          | 暂不明确              |
| option          | str  | 选项文本                  |                       |
| is_default      | num  | 是否为默认选项            | null：否<br />1：是   |

`data`中的`edges`对象中的`skin`对象：