# 视频观看数据上报

## 上报观看进度（双端）

> https://api.bilibili.com/x/v2/history/report

*请求方式：POST*

认证方式：APP或Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名     | 类型 | 内容                     | 必要性         | 备注                  |
| ---------- | ---- | ------------------------ | -------------- | --------------------- |
| access_key | str  | APP登录Token             | APP方式必要    |                       |
| aid        | num  | 稿件avid                 | 必要           |                       |
| cid        | num  | 视频cid                  | 必要           | 用于识别分P           |
| progress   | num  | 观看进度                 | 非必要         | 单位为秒<br />默认为0 |
| platform   | str  | 平台标识                 | 非必要         | 可为android           |
| csrf       | str  | CSRF Token（位于cookie） | Cookie方式必要 |                       |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功 <br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

记录视频`av13662970`（`cid=126654047`）的观看记录位于`1248`秒

Cookie方式：

```shell
curl 'https://api.bilibili.com/x/v2/history/report' \
--data-urlencode 'aid=13662970' \
--data-urlencode 'cid=126654047' \
--data-urlencode 'progress=1248' \
--data-urlencode 'platform=android' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

APP方式：

```shell
curl 'https://api.bilibili.com/x/v2/history/report' \
--data-urlencode 'access_key=xxx' \
--data-urlencode 'aid=13662970' \
--data-urlencode 'cid=126654047' \
--data-urlencode 'progress=1248' \
--data-urlencode 'platform=android'
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

## 上报视频播放心跳（web端）

> https://api.bilibili.com/x/click-interface/web/heartbeat

*请求方式：POST*

认证方式：仅可Cookie（SESSDATA）

默认间隔15秒一次, 亦可记录播放历史

该接口较为复杂, 且参数计算方法均为推测, 实际过程不明, 可能含有错误, 若要正式使用可以把已播放的持续时间全都设为相同值

**URL参数:**

| 参数名                    | 类型 | 内容                           | 必要性 | 备注    |
| ------------------------- | ---- | ------------------------------ | ------ | ------- |
| w_start_ts                | num  | 参见请求正文同名无`w_`前缀参数 | 非必要 | UNIX 秒级时间戳 |
| w_mid                     | num  | 参见请求正文同名无`w_`前缀参数 | 非必要 |         |
| w_aid                     | num  | 参见请求正文同名无`w_`前缀参数 | 非必要 |         |
| w_dt                      | num  | 2                              | 非必要 |         |
| w_realtime                | num  | 参见请求正文同名无`w_`前缀参数 | 非必要 | 单位 秒 |
| w_playedtime              | num  | 参见请求正文同名无`w_`前缀参数 | 非必要 | 单位 秒 |
| w_real_played_time        | num  | 参见请求正文同名无`w_`前缀参数 | 非必要 | 单位 秒 |
| w_video_duration          | num  | 参见请求正文同名无`w_`前缀参数 | 非必要 | 单位 秒 |
| w_last_play_progress_time | num  | 参见请求正文同名无`w_`前缀参数 | 非必要 | 单位 秒 |
| web_location              | num  | 网页位置                       | 非必要 | 视频详情页播放器: 1315873 |
| w_rid                     | num  | WBI 签名                       | 非必要 | 参见[WBI 签名](../misc/sign/wbi.md) |
| wts                       | num  | UNIX 秒级时间戳                | 非必要 | 参见[WBI 签名](../misc/sign/wbi.md) |

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名                  | 类型 | 内容                               | 必要性       | 备注                                                        |
| ----------------------- | ---- | ---------------------------------- | ------------ | ----------------------------------------------------------- |
| aid                     | num  | 稿件avid                           | 必要（可选） | avid与bvid任选一个(网页端请求默认仅使用aid)                 |
| bvid                    | str  | 稿件bvid                           | 必要（可选） | avid与bvid任选一个                                          |
| cid                     | num  | 视频cid                            | 非必要       | 用于识别分P                                                 |
| epid                    | num  | 番剧epid                           | 非必要       |                                                             |
| sid                     | num  | 番剧ssid                           | 非必要       |                                                             |
| mid                     | num  | 当前用户mid                        | 非必要       |                                                             |
| played_time             | num  | 视频播放进度                       | 非必要       | 单位 秒<br />播放完成为 -1                                  |
| realtime                | num  | 本轮页面会话真实播放时间           | 非必要       | 单位 秒                                                     |
| real_played_time        | num  | 本轮页面会话真实视频播放持续时间   | 非必要       | 单位 秒                                                     |
| refer_url               | str  | 与请求头 Referer 字段相同          | 非必要       |                                                             |
| quality                 | num  | 视频清晰度                         | 非必要       | 参见[qn视频清晰度标识](videostream_url.md#qn视频清晰度标识) |
| video_duration          | num  | 视频时长                           | 非必要       | 单位 秒                                                     |
| last_play_progress_time | num  | play_time 与 本轮页面会话开始时 played_time  之和 | 非必要 | 单位 秒                                            |
| max_play_progress_time  | num  | 本轮页面会话所有最大 last_play_progress_time 与 本轮页面会话开始时 played_time  之和 | 非必要 | 单位 秒         |
| start_ts                | num  | 开始播放时刻                       | 非必要       | 时间戳                                                      |
| type                    | num  | 视频类型                           | 非必要       | 3：投稿视频<br />4：剧集<br />10：课程                      |
| sub_type                | num  | 剧集副类型                         | 非必要       | 0: 普通投稿视频<br />1：番剧<br />2：电影<br />3：纪录片<br />4：国创<br />5：电视剧<br />7：综艺 |
| dt                      | num  | 2                                  | 非必要       |                                                             |
| outer                   | num  | 0                                  | 非必要       |                                                             |
| spmid                   | str  | 333.788.0.0                        | 非必要       | 作用尚不明确                                                |
| from_spmid              | str  | 播放来源?                          | 非必要       | 也可为空, 如: `444.41.list.card_archive.click` `333.999.0.0` |
| session                 | str  | 会话信息?                          | 非必要       | 一串无分隔小写 UUID                            |
| extra                   | obj  | 额外信息, 如播放器版本             | 非必要       | 如: `{"player_version":"4.8.36"}`                           |
| play_type               | num  | 播放动作                           | 非必要       | 0：播放中<br />1：开始播放<br />2：暂停<br />3：继续播放<br />4: 结束播放 |
| csrf                    | str  | CSRF Token (即 Cookie 中 bili_jct) | 非必要       |                                                             |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        |                             |

**示例：**

上报一次视频`av2`/`BV1xx411c7mD`的心跳数据

```shell
curl 'https://api.bilibili.com/x/click-interface/web/heartbeat' \
--data-urlencode 'aid=2' \
--data-urlencode 'bvid=BV1xx411c7mD' \
--data-urlencode 'cid=62131' \
--data-urlencode 'played_time=60' \
--data-urlencode 'realtime=60' \
--data-urlencode 'start_ts=1592720840' \
--data-urlencode 'type=3' \
--data-urlencode 'dt=2' \
--data-urlencode 'play_type=0' \
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

## 开始观看视频 (web端)

> https://api.bilibili.com/x/click-interface/click/web/h5

*请求方式: POST*

认证方式: Cookie (SESSDATA)

该接口亦被用于计算播放量, 播放量更新不是实时的<br />
该接口使用似乎存在 200 播放限制, **请勿滥用!**

**URL参数:**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| w_aid | num  | 稿件 aid | 不必要   |      |
| w_part | num  | 视频分 P 编号 | 不必要   |      |
| w_ftime | num  | 点击时间戳? | 不必要   | UNIX 秒级时间戳 |
| w_stime | num  | 开始播放时间戳? | 不必要   | UNIX 秒级时间戳 |
| w_type | num  | 视频类型 | 不必要   | 见[上报视频播放心跳（web端）](#上报视频播放心跳web端) |
| web_location | num  | 网页位置? | 不必要   | 1315873 |
| w_rid | num  | WBI 签名 | 不必要   | 参见[WBI 签名](../misc/sign/wbi.md) |
| wts | num  | UNIX 秒级时间戳 | 不必要   | 参见[WBI 签名](../misc/sign/wbi.md) |

**正文参数 (application/x-www-form-urlencoded):**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| mid | num  | 当前用户 mid | 不必要   |      |
| aid | num  | 稿件 aid | 必要   |      |
| cid | num  | 视频 cid | 不必要   |      |
| part | num  | 视频分 P 编号 | 不必要   |      |
| lv | num | 当前用户等级 | 不必要 |   |
| ftime | num | 同 URL 参数中带有 `w_` 前缀的同名参数 | 不必要 | |
| stime | num | 同 URL 参数中带有 `w_` 前缀的同名参数 | 不必要 | |
| type | num | 视频类型 | 不必要   | 见[上报视频播放心跳（web端）](#上报视频播放心跳web端) |
| sub_type | num | 视频子类型 | 不必要   | 见[上报视频播放心跳（web端）](#上报视频播放心跳web端) |
| referer_url | str | 与请求头 Referer 字段相同 | 不必要   |      |
| outer | num | 0 | 不必要   |      |
| spmid | str | 333.788.0.0 | 不必要   | 作用尚不明确 |
| from_spmid | str | 播放来源? | 不必要   | 见[上报视频播放心跳（web端）](#上报视频播放心跳web端) |
| session | str | 会话信息? | 不必要   | 一串无分隔小写 UUID |
| csrf | str | CSRF Token (即 Cookie 中 bili_jct) | 不必要   |      |

**JSON回复:**

根对象:

|字段|类型|内容|备注|
|-|-|-|-|
|code|num|返回值|0：成功<br />-400：请求错误|
|message|str|错误信息|默认为 `0`|
|ttl|num|1||

**示例:**

```shell
curl 'https://api.bilibili.com/x/click-interface/click/web/h5' \
--data-urlencode 'aid=2' \
```

<details>
<summary>查看响应示例:</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

</details>
