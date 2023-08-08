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

默认间隔15秒一次

亦可记录播放历史

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名      | 类型 | 内容                     | 必要性       | 备注                                                         |
| ----------- | ---- | ------------------------ | ------------ | ------------------------------------------------------------ |
| aid         | num  | 稿件avid                 | 必要（可选） | avid与bvid任选一个                                           |
| bvid        | str  | 稿件bvid                 | 必要（可选） | avid与bvid任选一个                                           |
| cid         | num  | 视频cid                  | 非必要       | 用于识别分P                                                  |
| epid        | num  | 番剧epid                 | 非必要       |                                                              |
| sid         | num  | 番剧ssid                 | 非必要       |                                                              |
| mid         | num  | 当前用户mid              | 非必要       |                                                              |
| played_time | num  | 视频播放进度             | 非必要       | 单位为秒<br />默认为0                                        |
| realtime    | num  | 总计播放时间             | 非必要       | 单位为秒                                                     |
| start_ts    | num  | 开始播放时刻             | 非必要       | 时间戳                                                       |
| type        | num  | 视频类型                 | 非必要       | 3：投稿视频<br />4：剧集<br />10：课程                       |
| sub_type    | num  | 剧集副类型               | 非必要       | 当`type=4`时本参数有效<br />1：番剧<br />2：电影<br />3：纪录片<br />4：国创<br />5：电视剧<br />7：综艺 |
| dt          | num  | 2                        | 非必要       |                                                              |
| play_type   | num  | 播放动作                 | 非必要       | 0：播放中<br />1：开始播放<br />2：暂停<br />3：继续播放     |
| csrf        | str  | CSRF Token（位于cookie） | 非必要       |                                                              |

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
