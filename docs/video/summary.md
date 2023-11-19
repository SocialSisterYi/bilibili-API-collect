

**# 视频AI总结**



<img src="../../assets/img/aiSummary.svg" width="100" height="100"/>



**## 获取总结**



> https://api.bilibili.com/x/web-interface/view/conclusion/get



**请求方式: Get**



认证方式: 无需认证



鉴权方式：[Wbi 签名](../misc/sign/wbi.md)



**url参数：**


| 参数名 | 类型 | 内容       | 必要性 | 备注                                 |
| ------ | ---- | ---------- | ------ | ------------------------------------ |
| bvid   | str  | 稿件bvid   | 必要   |                                      |
| cid    | num  | 稿件cid    | 必要   |                                      |
| up_mid | num  | UP主mid    | 必要   |                                      |
| w_rid  | str  | Wbi 签名   | 必要   | 详见 [Wbi 签名](../misc/sign/wbi.md) |
| wts    | num  | 当前时间戳 | 必要   | 详见 [Wbi 签名](../misc/sign/wbi.md) |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                             |
| ------- | ---- | -------- | -------------------------------- |
| code    | num  | 返回值   | 0: 成功<br /> -403: 访问权限不足 |
| message | str  | 错误信息 | 默认为0                          |
| ttl     | num  | 1        |                                  |
| data    | obj  | 数据本体 |                                  |

`data`对象:

| 字段         | 类型 | 内容     | 备注                        |
| ------------ | ---- | -------- | --------------------------- |
| code         | num  | 返回值   | 0: 有摘要<br />-1: 没有摘要 |
| model_result | obj  | 摘要内容 |                             |

`model_result`对象:

| 字段        | 类型 | 内容           | 备注                                                        |
| ----------- | ---- | -------------- | ----------------------------------------------------------- |
| result_type | num  | 数据类型       | 0: 没有摘要或者没有时间线<br />2: 有时间线<br />(1暂不知晓) |
| summary     | str  | 整个视频总结   |                                                             |
| outline     | obj  | 时间线         | 没有时间线为None                                            |
| like_num    | num  | 喜欢人数       |                                                             |
| dislike_num | num  | 不喜欢人数     |                                                             |
| stid        | num  | 摘要id         | 没有摘要为0                                                 |
| status      | num  | 状态(暂不知晓) | 正常为0                                                     |

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

**示例**

得到视频`BV1L94y1H7CV`的摘要

```shell
curl 'https://api.bilibili.com/x/web-interface/view/conclusion/get?bvid=BV1L94y1H7CV&cid=1335073288&up_mid=297242063&web_location=333.788&w_rid=d76ea8eaa47b3c9f0c4a910a8b9b66f5&wts=1700358732' \
  --compressed
```

有摘要示例:

<details>
<summary>查看响应示例：</summary>


```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "code": 0,
        "model_result": {
            "result_type": 2,
            "summary": "在网上阅读时遇到错别字和语言梗的烦恼,以及正确使用语言的重要性。作者认为,我们每个人都应该有包容心,不掉渣,不纠正别人的错误,同时也需要明辨是非,规范使用语言。视频还提到了一些常见的语言梗和错误用法,呼吁大家不要过分使用网络词汇,而应该注重语言的艺术性和深度。最后,作者欢迎大家关注他的微信公众号。",
            "outline": [
                {
                    "title": "现代人使用中文时面临的困境,包括错别字、用法不正确等问题,并呼吁大家规范使用中文。",
                    "part_outline": [
                        {
                            "timestamp": 1,
                            "content": "网友评论有错别字，勉强能看懂，但难受。"
                        },
                        {
                            "timestamp": 39,
                            "content": "重来一次，明辨是非。"
                        },
                        {
                            "timestamp": 167,
                            "content": "粉墨登场是贬义词，形容坏人打扮好老登场。"
                        }
                    ],
                    "timestamp": 1
                },
                {
                    "title": "网络词汇的过度使用导致语言生硬,以及对流行语言梗的短暂使用感到厌倦。",
                    "part_outline": [
                        {
                            "timestamp": 241,
                            "content": "网络词汇过分使用会误导别人，使规范词汇生硬"
                        },
                        {
                            "timestamp": 270,
                            "content": "以前的语言梗有深度，现在的流行梗很短命"
                        },
                        {
                            "timestamp": 338,
                            "content": "巨星之间需要化学反应的过程，前几场发挥欠佳"
                        }
                    ],
                    "timestamp": 241
                }
            ]
        },
        "stid": "5117037934391059183",
        "status": 0,
        "like_num": 3,
        "dislike_num": 0
    }
}
```

</details>

无摘要示例:

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "code": 1,
    "model_result": {
      "result_type": 0,
      "summary": "",
      "outline": None
    },
    "stid": "0",
    "status": 0,
    "like_num": 0,
    "dislike_num": 0
  }
}
```

</details>

## 点赞&点踩摘要(对应上面link_num&dislike_num)

认证方式：Cookie(SESSDATA)

鉴权方式：[Wbi 签名](../misc/sign/wbi.md)



***\*url参数:\****

| 参数名 | 类型 | 内容       | 必要性 | 备注                                 |
| ------ | ---- | ---------- | ------ | ------------------------------------ |
| w_rid  | str  | Wbi 签名   | 必要   | 详见 [Wbi 签名](../misc/sign/wbi.md) |
| wts    | num  | 当前时间戳 | 必要   | 详见 [Wbi 签名](../misc/sign/wbi.md) |

**正文参数( application/x-www-form-urlencoded ):**

| 参数名     | 类型 | 内容                     | 必要性 | 备注                              |
| ---------- | ---- | ------------------------ | ------ | --------------------------------- |
| bvid       | str  | 稿件bvid                 | 必要   |                                   |
| cid        | num  | 稿件cid                  | 必要   |                                   |
| up_mid     | num  | UP主mid                  | 必要   |                                   |
| stid       | num  | 摘要id                   | 必要   |                                   |
| like_state | num  | 喜欢状态                 | 必要   | 1: 点赞<br />2: 取消<br />3: 点踩 |
| csrf       | str  | CSRF Token（位于cookie） | 必要   |                                   |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                               |
| ------- | ---- | -------- | -------------------------------------------------- |
| code    | num  | 返回值   | 0: 成功 <br />-400: 请求错误<br />65006: 已赞/踩过 |
| message | str  | 错误信息 | 默认为0                                            |
| ttl     | num  | 1        |                                                    |

**示例：**

为视频`BV1L94y1H7CV`的摘要`5117037934391059183`点赞

```shell
curl 'https://api.bilibili.com/x/web-interface/view/conclusion/set?w_rid=edb471fc926646ef3889a80488166b66&wts=1700358953' \
  --data-raw 'bvid=BV1L94y1H7CV&cid=1335073288&up_mid=297242063&stid=5117037934391059183&like_state=1&csrf=522xxxxxxxxxxxxxxx6f4' \
  --compressed
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
