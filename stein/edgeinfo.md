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
| edge_id       | num  | 选择序列号 | 非必要       |                    |
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

| 字段         | 类型  | 内容           | 备注                  |
| ------------ | ----- | -------------- | --------------------- |
| title        | str   | 分P标题        |                       |
| edge_id      | num   | 当前选择序列号 |                       |
| story_list   | array | 进度回溯条     |                       |
| edges        | obj   | 当前选择信息   |                       |