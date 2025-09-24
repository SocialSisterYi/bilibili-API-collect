# 视频AI总结

<img src="../../assets/img/aiSummary.svg" width="100" height="100"/>

## 获取AI总结内容

> https://api.bilibili.com/x/web-interface/view/conclusion/get

*请求方式: GET*

认证方式：Cookie（SESSDATA）

鉴权方式：[Wbi 签名](../misc/sign/wbi.md)

**url参数：**

| 参数名    | 类型  | 内容     | 必要性 | 备注                               |
|--------|-----|--------|-----|----------------------------------|
| aid    | num | 稿件 avid | 必要(可选) | avid与bvid任选一个             |
| bvid   | str | 稿件 bvid | 必要(可选) | avid与bvid任选一个             |
| cid    | num | 视频 cid  | 必要  |                                  |
| up_mid | num | UP主 mid | 可选  |                                  |
| w_rid  | str | Wbi 签名 | 必要  | 详见 [Wbi 签名](../misc/sign/wbi.md) |
| wts    | num | 当前时间戳  | 必要  | 详见 [Wbi 签名](../misc/sign/wbi.md) |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                       |
|---------|-----|------|--------------------------|
| code    | num | 返回值  | 0: 成功<br />-101: 账号未登录<br />-400：请求错误<br /> -403: 访问权限不足 |
| message | str | 错误信息 | 默认为0                     |
| ttl     | num | 1    |                          |
| data    | obj | 数据本体 |                          |

`data`对象:

| 字段           | 类型  | 内容   | 备注                   |
|--------------|-----|------|----------------------|
| code         | num | 返回值  | -1: 不支持AI摘要（敏感内容等）或其他因素导致请求异常<br />0: 有摘要<br />1：无摘要（未识别到语音） |
| model_result | obj | 摘要内容 |                      |
| stid         | str | 摘要 id | 如`code=1`且该字段为`0`时，则未进行 AI 总结，即添加总结队列<br />如`code=1`且该字段为空时未识别到语音                     |
| status       | num | (?) |                      |
| like_num     | num | 点赞数 | 默认为`0`                     |
| dislike_num  | num | 点踩数 | 默认为`0`                     |

`data`中的`model_result`对象:

| 字段          | 类型  | 内容       | 备注                                       |
|-------------|-----|----------|------------------------------------------|
| result_type | num | 数据类型 | 0: 没有摘要<br />1：仅存着摘要总结<br />2：存着摘要以及提纲 |
| summary     | str | 视频摘要 | 通常为一段概括整个视频内容的文本 |
| outline     | 有数据时：array<br />无数据时：空数组 | 分段提纲 | 通常为视频中叙述的各部分及其要点 |
| subtitle    | 有数据时：array<br />无数据时：空数组 | AI字幕 | 由AI识别生成的字幕列表，自动翻译英文，固定返回中文字幕 |

`model_result`对象中的`outline`数组:

| 项   | 类型  | 内容      | 备注  |
|-----|-----|---------|-----|
| 0   | obj | 总结分段1     |     |
| n   | obj | 总结分段(n+1) |     |
| ……  | obj | ……      | ……  |

`outline`数组中的对象:

| 字段          | 类型  | 内容   | 备注 |
|--------------|-----|------|----|
| title        | str   | 分段标题 | 段落内容的概括   |
| part_outline | array | 分段要点 | 当前分段中多个提到的细节   |
| timestamp    | num   | 分段起始时间 | 单位为秒   |

`outline`数组中的对象中的`part_outline`数组:

| 项   | 类型  | 内容      | 备注  |
|-----|-----|---------|-----|
| 0   | obj | 分段要点1     |     |
| n   | obj | 分段要点(n+1) |     |
| ……  | obj | ……      | ……  |

`part_outline`数组中的对象:

| 字段        | 类型  | 内容    | 备注 |
|-----------|-----|-------|----|
| timestamp | num | 要点起始时间 | 单位为秒   |
| content   | str | 小结内容  | 其中一个分段的要点   |

`model_result`对象中`subtitle`数组:

| 项   | 类型  | 内容      | 备注  |
|-----|-----|----------|-----|
| 0   | obj | 字幕列表1 | 若有结果，该数组长度仅为1 |

`subtitle`数组中的对象:

| 字段           | 类型  | 内容     | 备注 |
|-----|-----|---------|-----|
| part_subtitle | array | 字幕分段 | 当前分段中的字幕信息 |
| timestamp     | num | 字幕识别起始时间 | 单位为秒 |
| title         | str | 字幕标题 | 固定为空字符串 |

`subtitle`数组中的对象中的`part_subtitle`数组:

| 项   | 类型  | 内容      | 备注  |
|-----|-----|---------|-----|
| 0   | obj | 字幕分段1 |    |
| n   | obj | 字幕分段n |    |
| ……  | obj | ……      | ……  |

`part_subtitle`数组中的对象:

| 字段        | 类型  | 内容    | 备注 |
|-----------|-----|-------|----|
| content   | str | 字幕内容 | 其中一个分段的字幕内容 |
| start_timestamp | num | 分段开始时间 | 单位为秒 |
| end_timestamp   | num | 分段结束时间 | 单位为秒 |

**示例：**

得到视频`BV1L94y1H7CV`（`cid=1335073288`）的摘要

```bash
curl -G 'https://api.bilibili.com/x/web-interface/view/conclusion/get' \
  --data-urlencode 'bvid=BV1L94y1H7CV' \
  --data-urlencode 'cid=1335073288' \
  --data-urlencode 'up_mid=297242063' \
  --data-urlencode 'wts=1701546363' \
  --data-urlencode 'w_rid=1073871926b3ccd99bd790f0162af634'
```

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
      ],
      "subtitle": [
        {
          "part_subtitle": [
            {
              "content": "有时候上网啊",
              "start_timestamp": 0,
              "end_timestamp": 1
            },
            {
              "content": "看网友的评论内容",
              "start_timestamp": 1,
              "end_timestamp": 3
            },
            {
              "content": "一句话好几个错别字",
              "start_timestamp": 3,
              "end_timestamp": 5
            },
            // ...
            {
              "content": "黄一刀有毒",
              "start_timestamp": 352,
              "end_timestamp": 355
            }
          ],
          "timestamp": 1,
          "title": ""
        }
      ],
    },
    "stid": "5117037934391059183",
    "status": 0,
    "like_num": 6,
    "dislike_num": 2
  }
}
```

</details>

## 点赞&点踩摘要

> https://api.bilibili.com/x/web-interface/view/conclusion/set

*请求方式：POST*

认证方式：Cookie(SESSDATA)

鉴权方式：[Wbi 签名](../misc/sign/wbi.md)

**url参数:**

| 参数名   | 类型  | 内容     | 必要性 | 备注                               |
|-------|-----|--------|-----|----------------------------------|
| w_rid | str | Wbi 签名 | 必要  | 详见 [Wbi 签名](../misc/sign/wbi.md) |
| wts   | num | 当前时间戳  | 必要  | 详见 [Wbi 签名](../misc/sign/wbi.md) |

**正文参数( application/x-www-form-urlencoded ):**

| 参数名      | 类型  | 内容                   | 必要性 | 备注                          |
|------------|-----|----------------------|-----|-----------------------------|
| aid        | num | 稿件 avid | 必要(可选) | avid与bvid任选一个             |
| bvid       | str | 稿件 bvid | 必要(可选) | avid与bvid任选一个             |
| cid        | num | 稿件 cid                | 必要  |                             |
| up_mid     | num | UP主 mid               | 非必要  |                             |
| stid       | num | 摘要 id                 | 必要  |                             |
| like_state | num | 执行操作                 | 必要  | 1: 点赞<br />2: 取消点赞<br />3: 点踩<br />4: 取消点踩 |
| csrf       | str | CSRF Token（位于cookie） | 必要  |                             |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                                       |
|---------|-----|------|------------------------------------------|
| code    | num | 返回值  | 0: 成功 <br />-400: 请求错误<br />65002：origin id 错误<br />65004：取消赞失败 未点赞过<br />65005：取消踩失败 未点踩过<br />65006: 已赞过<br /> 65007：已踩过 |
| message | str | 错误信息 | 默认为0                                     |
| ttl     | num | 1    |                                          |

**示例：**

为视频`BV1L94y1H7CV`（`cid=1335073288`）的摘要点赞

```shell
curl 'https://api.bilibili.com/x/web-interface/view/conclusion/set?w_rid=edb471fc926646ef3889a80488166b66&wts=1700358953' \
  --data-urlencode 'bvid=BV1L94y1H7CV' \
  --data-urlencode 'cid=1335073288' \
  --data-urlencode 'up_mid=297242063' \
  --data-urlencode 'stid=5117037934391059183' \
  --data-urlencode '&like_state=1' \
  --data-urlencode 'csrf=xxx' \
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
