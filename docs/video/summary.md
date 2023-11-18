

**# 视频AI摘要**



<img src="../../assets/img/aiSummary.svg" width="100" height="100"/>



## 获取摘要



\> https://api.bilibili.com/x/web-interface/view/conclusion/get



**请求方式: Get**



认证方式: 无需认证



鉴权方式：[Wbi 签名](../misc/sign/wbi.md)



***\*url参数：\****



| 参数名 | 类型 | 内容       | 必要性 | 备注                                 |
| ------ | ---- | ---------- | ------ | ------------------------------------ |
| bvid   | str  | 稿件bvid   | 必要   |                                      |
| cid    | num  | 稿件cid    | 必要   |                                      |
| up_mid | num  | UP主mid    | 必要   |                                      |
| w_rid  | str  | Wbi 签名   | 必要   | 详见 [Wbi 签名](../misc/sign/wbi.md) |
| wts    | num  | 当前时间戳 | 必要   | 详见 [Wbi 签名](../misc/sign/wbi.md) |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                       |
| ------- | ---- | -------- | -------------------------- |
| code    | num  | 返回值   | 0: 成功 -403: 访问权限不足 |
| message | str  | 错误信息 | 默认为0                    |
| ttl     | num  | 1        |                            |
| data    | obj  | 数据本体 |                            |

`data`对象:

| 字段         | 类型 | 内容     | 备注                  |
| ------------ | ---- | -------- | --------------------- |
| code         | num  | 返回值   | 0: 有摘要 1: 没有摘要 |
| model_result | obj  | 摘要内容 |                       |

`model_result`对象:

| 字段        | 类型 | 内容             | 备注                                             |
| ----------- | ---- | ---------------- | ------------------------------------------------ |
| result_type | num  | 数据类型         | 0: 没有摘要或者没有时间线 2: 有时间线(1暂不知晓) |
| summary     | str  | 整个视频摘要     |                                                  |
| outline     | obj  | 时间线           | 没有时间线为None                                 |
| like_num    | num  | 喜欢人数         |                                                  |
| dislike_num | num  | 不喜欢人数       |                                                  |
| stid        | num  | 摘要id(暂不知晓) | 没有摘要为0                                      |
| status      | num  | 状态(暂不知晓)   | 正常为0                                          |

`outline`对象:

| 字段         | 类型 | 内容     | 备注 |
| ------------ | ---- | -------- | ---- |
| title        | str  | 分段标题 |      |
| part_outline | obj  | 分段小结 |      |

`part_outline`对象:

| 字段      | 类型 | 内容       | 备注 |
| --------- | ---- | ---------- | ---- |
| timestamp | num  | 小结时间戳 |      |
| content   | str  | 小结内容   |      |

