# 视频观看数据上报

**本页所有操作均需登录（SESSDATA）**

## 上报观看进度（暂不支持bvID）

> http://api.bilibili.com/x/v2/history/report

*方式：POST*

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名   | 类型 | 内容                | 必要性 | 备注                  |
| -------- | ---- | ------------------- | ------ | --------------------- |
| aid      | num  | 视频avID            | 必要   |                       |
| cid      | num  | 视频CID             | 必要   | 用于识别分P           |
| progress | num  | 观看进度            | 非必要 | 单位为秒<br />默认为0 |
| csrf     | str  | cookies中的bili_jct | 必要   |                       |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功 <br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |

**示例：**

记录视频`av13662970`（`CID=126654047`）的观看记录位于`1248`秒

curl -b "SESSDATA=xxx" -d "aid=13662970&cid=126654047&progress=1248&csrf=xxx" "http://api.bilibili.com/x/v2/history/report"

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```



## 上报视频播放心跳（web端）

> http://api.bilibili.com/x/click-interface/web/heartbeat 

*方式：POST*

默认间隔15秒一次

亦可记录播放历史

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名      | 类型 | 内容                | 必要性       | 备注                                                         |
| ----------- | ---- | ------------------- | ------------ | ------------------------------------------------------------ |
| aid         | num  | 视频avID            | 必要（可选） | avID与bvID任选一个                                           |
| bvid        | str  | 视频bvID            | 必要（可选） | avID与bvID任选一个                                           |
| cid         | num  | 视频CID             | 非必要       | 用于识别分P                                                  |
| epid        | num  | 番剧epID            | 非必要       |                                                              |
| sid         | num  | 番剧ssID            | 非必要       |                                                              |
| mid         | num  | 当前用户UID         | 非必要       |                                                              |
| played_time | num  | 视频播放进度        | 非必要       | 单位为秒<br />默认为0                                        |
| realtime    | num  | 总计播放时间        | 非必要       | 单位为秒                                                     |
| start_ts    | num  | 开始播放时刻        | 非必要       | 时间戳                                                       |
| type        | num  | 视频类型            | 非必要       | 3：投稿视频<br />4：剧集<br />10：课程                       |
| sub_type    | num  | 剧集副类型          | 非必要       | 当`type=4`时本参数有效<br />1：番剧<br />2：电影<br />3：纪录片<br />4：国创<br />5：电视剧<br />7：综艺 |
| dt          | num  | 2                   | 非必要       |                                                              |
| play_type   | num  | 播放动作            | 非必要       | 0：播放中<br />1：开始播放<br />2：暂停<br />3：继续播放     |
| csrf        | str  | cookies中的bili_jct | 非必要       |                                                              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        | 作用尚不明确                |

**示例：**

上报一次视频`av2`/`BV1xx411c7mD`的心跳数据

 http://api.bilibili.com/x/click-interface/web/heartbeat?aid=2&bvid=BV1xx411c7mD&cid=62131&played_time=60&realtime=60&start_ts=1592720840&type=3&dt=2&play_type=0&csrf=xxx

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

