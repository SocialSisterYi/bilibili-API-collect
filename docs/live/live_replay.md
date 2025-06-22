# 直播回放

<!-- 网页端: https://link.bilibili.com/#/my-room/live-record ;移动端: https://live.bilibili.com/p/html/live-app-playback/index.html#new -->

注: 直播回放相关接口较新，随时可能出现变化。

## 获取直播回放列表

> https://api.live.bilibili.com/xlive/app-blink/v1/anchorVideo/AnchorGetReplayList

*请求方法: GET*

认证方式: Cookie (SESSDATA)

只能获取自己14天的回放，详细信息请查看[对应页面](https://link.bilibili.com/#/my-room/live-record)

**url参数：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ----- | --- | ---- | ----- | --- |
| page | num | 页码 | 非必要 | 默认第1页 |
| page_size | num | 每页内容数量 | 非必要 | 默认30项，最大30项 |

**json回复：**

根对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 返回值 | 0：成功<br />-101：未登录 |
| message | str | 提示信息 | 成功时为`"0"` |
| ttl | num | `1` |  |
| data | obj | 信息本体 |  |

`data` 对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| replay_info | arr | 回放信息列表 | 无结果时为`null` |
| pagination | obj | 分页信息 |  |
| archive_flag | bool | (?) | 作用尚不明确 |
| can\_edit | num | (?) | 作用尚不明确 |

`data.replay_info` 数组中的对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| replay_id | num | 直播回放id |  |
| live_info | obj | 直播信息 |  |
| video_info | obj | 回放视频信息 |  |
| alarm_info | obj | 警报信息 |  |
| room_id | num | 直播间id |  |
| live_key | str | 标记直播场次的key |  |
| start_time | num | 直播开始秒时间戳 | 调用[开始直播](manage.md#开始直播)接口的时间 |
| end_time | num | 直播结束秒时间戳 | 调用[关闭直播](manage.md#关闭直播)接口的时间 |

`data.replay_info[i].live_info` 对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| title | str | 直播标题 | 直播结束时的标题 |
| cover | str | 直播封面 |  |
| live_time | num | 直播时间 | 同`data.replay_info[i].start_time` |
| live_type | num | 直播类型? | 作用尚不明确 |

`data.replay_info[i].video_info` 对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| replay_status | num | 回放状态 | 作用尚不明确 |
| estimated_time | str | 直播回放合成结束时间 | 未合成时为`"1970-01-01 08:00:00"` |
| duration | num | 直播时长 | 单位秒 |
| download_url | str | 下载链接片段 | 整场直播回放合成成功时存在<br />建议通过[请求整场直播回放下载链接](#请求整场直播回放下载链接)来获取下载链接 |
| alert_code | num | 快速检查警告代码 | 整场直播回放合成失败时不存在 |
| alert_message | str | 快速检查警告信息 | 整场直播回放合成失败时不存在 |

`data.replay_info[i].alarm_info` 对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 回放合成警报代码 |  |
| message | str | 回放合成错误信息 |  |
| cur_time | num | 当前时间戳 | Unix秒时间戳 |
| is_ban_publish | bool | 是否禁止发布? |  |

`data.pagination` 对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| page | num | 请求的页码 |  |
| page_size | num | 内容数量 |  |
| total | num | 总计内容数量 |  |

**示例：**

获取自己直播回放列表的第1页，每页2项

```shell
curl 'https://api.live.bilibili.com/xlive/app-blink/v1/anchorVideo/AnchorGetReplayList?page=1&page_size=2' \
  -b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "replay_info": [
      {
        "replay_id": 10707737,
        "live_info": {
          "title": "摆",
          "cover": "https://i0.hdslb.com/bfs/live/59fc254c1f51a962dbf69ae85e4920f2f6fb8dcd.png",
          "live_time": 1747509268,
          "live_type": 1
        },
        "video_info": {
          "replay_status": 2,
          "estimated_time": "1970-01-01 08:00:00",
          "duration": 1820,
          "alert_code": 2,
          "alert_message": "录像时长远小于开播时长，请关注直播时网络状况"
        },
        "alarm_info": {
          "code": 2,
          "message": "录像生成失败，请稍后再试",
          "cur_time": 1747557808,
          "is_ban_publish": false
        },
        "room_id": 18992371,
        "live_key": "609043243693510451",
        "start_time": 1747509268,
        "end_time": 1747511088
      },
      {
        "replay_id": 10707664,
        "live_info": {
          "title": "摆",
          "cover": "https://i0.hdslb.com/bfs/live/59fc254c1f51a962dbf69ae85e4920f2f6fb8dcd.png",
          "live_time": 1747508293,
          "live_type": 1
        },
        "video_info": {
          "replay_status": 2,
          "estimated_time": "1970-01-01 08:00:00",
          "duration": 206,
          "alert_code": 2,
          "alert_message": "录像时长远小于开播时长，请关注直播时网络状况"
        },
        "alarm_info": {
          "code": 2,
          "message": "录像生成失败，请稍后再试",
          "cur_time": 1747557808,
          "is_ban_publish": false
        },
        "room_id": 18992371,
        "live_key": "609041817764368179",
        "start_time": 1747508293,
        "end_time": 1747508499
      }
    ],
    "pagination": {
      "page": 1,
      "page_size": 2,
      "total": 29
    },
    "archive_flag": false,
    "can_edit": 1
  }
}
```

</details>

## 获取已发布片段的信息

> https://api.live.bilibili.com/xlive/app-blink/v1/anchorVideo/AnchorGetVideoSliceList

*请求方式: GET*

认证方式: Cookie (SESSDATA)

**url参数：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ----- | --- | ---- | ----- | --- |
| page | num | 页码 | 非必要 | 默认第1页 |
| page_size | num | 每页内容数量 | 非必要 | 默认20项，最大20项 |

**json回复：**

根对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 返回值 | 0：成功<br />-101：未登录 |
| message | str | 提示信息 | 成功时为`"0"` |
| ttl | num | `1` |  |
| data | obj | 信息本体 |  |

`data` 对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| list | arr | 切片信息 |  |
| page | num | 请求的页码 |  |
| page_size | num | 内容数量 |  |
| total | num | 总计内容数量 |  |

`data.list` 数组中的对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| silce_id | num | 切片id |  |
| av_title | str | 切片标题 |  |
| av_cover | str | 切片封面 |  |
| av_status | num | 切片状态 | 1：发布中<br />2：已投稿<br />3：投稿失败 |
| avid | num | 切片视频的avid | 状态为2时存在 |
| ctime | str | 切片创建时间 |  |
| start_tm | str | 切片开始时间 |  |
| end_tm | str | 切片结束时间 |  |
| av_duration | num | 切片时长 | 状态为2且创作中心出现有效视频时长时存在 |
| failed_reason | str | 失败原因 | 状态为3时存在，2024-09-01前发布失败的切片可能不存在 |
| live_type | num | (?) | 作用尚不明确 |
| cnt_play | num | 播放数 | 视频有播放时存在；若该页出现任意状态不为2的项也会不存在 |
| cnt_danmaku | num | 弹幕数 | 视频有弹幕时存在；若该页出现任意状态不为2的项也会不存在 |

**示例：**

获取自己第1页的已发布片段信息，每页3项

```shell
curl 'https://api.live.bilibili.com/xlive/app-blink/v1/anchorVideo/AnchorGetVideoSliceList?page=1&page_size=3' \
  -b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "list": [
      {
        "slice_id": 882357,
        "av_title": "2025051720 error",
        "av_cover": "https://i0.hdslb.com/bfs/live/59fc254c1f51a962dbf69ae85e4920f2f6fb8dcd.png",
        "av_status": 1,
        "ctime": "2025-05-18 18:13:13",
        "start_tm": "2025-05-17 21:07:04",
        "end_tm": "2025-05-17 21:16:00",
        "live_type": 1
      },
      {
        "slice_id": 879189,
        "av_title": "2025051721 zzz 0",
        "av_cover": "https://i0.hdslb.com/bfs/live/59fc254c1f51a962dbf69ae85e4920f2f6fb8dcd.png",
        "av_status": 3,
        "ctime": "2025-05-18 00:32:52",
        "start_tm": "2025-05-17 21:07:34",
        "end_tm": "2025-05-17 23:02:03",
        "failed_reason": "duration_false",
        "live_type": 1
      },
      {
        "slice_id": 876259,
        "av_title": "202505171449",
        "av_cover": "https://i0.hdslb.com/bfs/live/59fc254c1f51a962dbf69ae85e4920f2f6fb8dcd.png",
        "av_status": 2,
        "avid": 114521830065531,
        "ctime": "2025-05-17 14:49:18",
        "start_tm": "2025-05-17 14:19:36",
        "end_tm": "2025-05-17 14:23:48",
        "av_duration": 341,
        "live_type": 1
      }
    ],
    "page": 1,
    "page_size": 3,
    "total": 347
  }
}
```

</details>

## 获取回放剪辑草稿列表

> https://api.live.bilibili.com/xlive/app-blink/v1/anchorVideo/GetDraftList

*请求方法: GET*

认证方式: Cookie (SESSDATA)

**url参数：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ----- | --- | ---- | ----- | --- |
| page | num | 页码 | 非必要 | 默认第1页 |
| page_size | num | 每页内容数量 | 非必要 | 默认30项，最大30项 |

**json回复：**

根对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 返回值 | -101：未登录<br />0：成功 |
| message | str | 错误信息 | 成功时为`"0"` |
| ttl | num | `1` |  |
| data | obj | 信息本体 |  |

`data` 对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| draft_info | arr | 草稿信息 | 无结果时为`null` |
| pagination | obj | 分页信息 |  |

`data.draft_info` 数组中的对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| id | num | 回放剪辑id |  |
| title | str | 回放剪辑标题 |  |
| cover | str | 回放剪辑封面 | 有封面时存在；若不存在将使用 https://s1.hdslb.com/bfs/static/blive/blfe-link-center/static/img/default.187078d.png |
| live\_key | str | 标记直播场次的key |  |
| ctime | str | 回放剪辑创建时间 |  |
| live_start_time | str | 直播开始时间 |  |
| live_end_time | str | 直播结束时间 |  |
| live_type | num | (?) | 作用尚不明确 |

`data.pagination` 对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| page | num | 请求的页码 |  |
| page_size | num | 内容数量 |  |
| total | num | 总计内容数量 |  |

**示例：**

请求自己的回放剪辑草稿列表

```shell
curl 'https://api.live.bilibili.com/xlive/app-blink/v1/anchorVideo/GetDraftList?page=1&page_size=12' \
  -b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "draft_info": [
      {
        "id": 988275,
        "title": "直播场次 2025-05-19 20:45:04",
        "live_key": "609431465787395891",
        "ctime": "2025-05-22 01:08:20",
        "live_start_time": "2025-05-19 20:45:04",
        "live_end_time": "2025-05-20 09:40:13",
        "live_type": 1
      },
      {
        "id": 987665,
        "title": "直播场次 2025-05-19 20:45:04 切片",
        "cover": "http://i0.hdslb.com/bfs/live/9bdf1df3d823734c59382120a9a7c10b177dbefd.png",
        "live_key": "609431465787395891",
        "ctime": "2025-05-21 20:28:48",
        "live_start_time": "2025-05-19 20:45:04",
        "live_end_time": "2025-05-20 09:40:13",
        "live_type": 1
      }
    ],
    "pagination": {
      "page": 1,
      "page_size": 30,
      "total": 2
    }
  }
}
```

</details>

## 删除某个回放剪辑草稿

> https://api.live.bilibili.com/xlive/app-blink/v1/anchorVideo/DeleteSliceDraft

*请求方法: POST*

认证方式: Cookie (SESSDATA)

鉴权方式: Cookie中`bili_jct`的值正确并与`csrf`相同

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ----- | --- | ---- | ----- | --- |
| draft_id | num | 回放剪辑id | 必要 |  |
| csrf_token | str | CSRF Token（位于cookie） | 非必要 |  |
| csrf | str | CSRF Token（位于cookie） | 必要 |  |

**json回复：**

根对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 返回值 | -400：参数错误<br />-101：未登录<br />-111：csrf校验失败<br />0：成功<br />206：无可操作草稿 |
| message | str | 错误信息 | 成功时为`"0"` |
| ttl | num | `1` |  |
| data | obj | 信息本体 |  |

`data` 对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | `0` |  |
| message | str | `""` |  |

**示例：**

删除回放剪辑id为`988275`的草稿

```shell
curl 'https://api.live.bilibili.com/xlive/app-blink/v1/anchorVideo/DeleteSliceDraft' \
  --data-urlencode 'draft_id=988275' \
  --data-urlencode 'csrf=xxx'
  -b 'SESSDATA=xxx;bili_jct=xxx'
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
    "message": ""
  }
}
```

</details>

## 请求整场直播回放下载链接

> https://api.live.bilibili.com/xlive/app-blink/v1/anchorVideo/AnchorVideoDownload

*请求方法: POST*

认证方式: Cookie (SESSDATA)

鉴权方式: Cookie中`bili_jct`的值正确并与`csrf`相同

未生成整场直播回放时将进行生成。

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ----- | --- | ---- | ----- | --- |
| record_id | num | 直播回放id | 必要（可选） | `record_id`和`live_key`必选其一 |
| live_key | str | 标记直播场次的key | 必要（可选） | `record_id`和`live_key`必选其一 |
| csrf_token | str | CSRF Token（位于cookie） | 非必要 |  |
| csrf | str | CSRF Token（位于cookie） | 必要 |  |

**json回复：**

根对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 返回值 | -101：未登录<br />-111：csrf校验失败<br />0：成功<br />100：非法参数<br />210：回放id或场次key无效 |
| message | str | 错误信息 | 成功时为`"0"` |
| ttl | num | `1` |  |
| data | obj | 信息本体 |  |

`data` 对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| record | obj | 回放状态 |  |
| download_url | str | 回放下载链接 | 完成时存在 |
| download_url_list | arr | 回放下载链接列表 | 完成时存在 |

`data.record` 对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| uid | num | 用户mid |  |
| record_id | num | 直播回放id |  |
| status | num | 回放状态 |  |
| estimated_time | num | 预计结束时间 | Unix秒时间戳 |
| current_time | num | 当前时间 | Unix秒时间戳 |
| merge_time | num | 开始合并时间 | Unix秒时间戳 |
| toast | str | 提示信息 | 失败时存在 |

`data.download_url_list` 数组：

| 项 | 类型 | 内容 | 备注 |
| -- | --- | --- | --- |
| 0 | str | 回放下载链接 |  |

**示例：**

请求回放id为`10597910`的下载链接

```shell
curl 'https://api.live.bilibili.com/xlive/app-blink/v1/anchorVideo/AnchorVideoDownload' \
  --data-urlencode 'record_id=10597910' \
  --data-urlencode 'live_key=607942821532667699' \
  --data-urlencode 'csrf=xxx' \
  -b 'SESSDATA=xxx;bili_jct=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "record": {
      "uid": 438160221,
      "record_id": 10597910,
      "status": 30,
      "estimated_time": 1747639543,
      "current_time": 1747639106,
      "merge_time": 1747638665
    },
    "download_url": "https://upos-sz-mirrorali.bilivideo.com/ugcever/n250519sa3hkpirw61hjskuit4d9fdsj.mp4?deadline=1747682306&gen=record2vod&os=upos&trid=da40b42594d5446da29cb0d2b2f25f45&uparams=deadline,gen,os,trid&upsig=c6ac5f218af40b2c120b3f5add2e4d6b&attname=直播回放_2025-05-13_20-49-04.mp4",
    "download_url_list": [
      "https://upos-sz-mirrorali.bilivideo.com/ugcever/n250519sa3hkpirw61hjskuit4d9fdsj.mp4?deadline=1747682306&gen=record2vod&os=upos&trid=da40b42594d5446da29cb0d2b2f25f45&uparams=deadline,gen,os,trid&upsig=c6ac5f218af40b2c120b3f5add2e4d6b&attname=直播回放_2025-05-13_20-49-04.mp4"
    ]
  }
}
```

</details>

## 获取回放的信息

> https://api.live.bilibili.com/xlive/app-blink/v1/anchorVideo/GetAnchorVideoUidRecordsSubsect

*请求方法: GET*

认证方式: Cookie (SESSDATA)

**url参数：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ----- | --- | ---- | ----- | --- |
| record_id | num | 直播回放id | 必要 |  |

**json回复：**

根对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 返回值 | -400：参数错误<br />-101：未登录<br />0：成功 |
| message | str | 错误信息 | 成功时为`"0"` |
| ttl | num | `1` |  |
| data | obj | 信息本体 | 失败时不可用 |

`data` 对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| list | arr | 回放信息列表 |  |

`data.list` 数组中的对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| uid | num | 用户mid |  |
| record_id | num | 直播回放id |  |
| title | str | 直播标题 |  |
| cover | str | 直播封面 |  |
| status | num | 回放状态 |  |
| start\_time | num | 直播开始时间 | Unix秒时间戳 |
| end_time | num | 直播结束时间 | Unix秒时间戳 |

**示例：**

获取回放id为`10707664`的信息

```shell
curl 'https://api.live.bilibili.com/xlive/app-blink/v1/anchorVideo/GetAnchorVideoUidRecordsSubsect?record_id=10707664' \
  -b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "list": [
      {
        "uid": 438160221,
        "record_id": 10707664,
        "title": "摆",
        "cover": "https://i0.hdslb.com/bfs/live/59fc254c1f51a962dbf69ae85e4920f2f6fb8dcd.png",
        "status": 2,
        "start_time": 1747508293,
        "end_time": 1747508499
      }
    ]
  }
}
```

</details>

## 轮询回放合成状态

> https://api.live.bilibili.com/xlive/app-blink/v1/anchorVideo/GetAnchorVideoUidRecord

*请求方法: POST*

认证方式: Cookie (SESSDATA)

鉴权方式: Cookie中`bili_jct`的值正确并与`csrf`相同

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ----- | --- | ---- | ----- | --- |
| records | str | 直播回放id列表 | 必要 | 用`,`分隔 |
| csrf_token | str | CSRF Token（位于cookie） | 非必要 |  |
| csrf | str | CSRF Token（位于cookie） | 必要 |  |

**json回复：**

根对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 返回值 | -101：未登录<br />-400：参数错误<br />0：成功 |
| message | str | 错误信息 | 成功时为`"0"` |
| ttl | num | `1` |  |
| data | obj | 信息本体 |  |

`data` 对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| list | arr | 查询结果 | 无效的id会被忽略 |

`data.list` 数组中的对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| uid | num | 用户mid |  |
| record_id | num | 直播回放id |  |
| status | num | 回放状态 |  |
| current_time | num | 当前时间戳 | Unix秒时间戳 |
| estimated_time | num | 预计结束时间戳 | 初次[请求回放下载链接](#请求整场直播回放下载链接)后存在 |
| merge_time | num | 合成开始时间戳 | 初次[请求回放下载链接](#请求整场直播回放下载链接)后存在 |

**示例：**

查询各种回放id

```shell
curl 'https://api.live.bilibili.com/xlive/app-blink/v1/anchorVideo/GetAnchorVideoUidRecord' \
  --data-urlencode 'records=10727160,10597910,10687720,10230000,99999999' \
  --data-urlencode 'csrf=xxx' \
  -b 'SESSDATA=xxx;bili_jct=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "list": [
      {
        "uid": 91089731,
        "record_id": 10230000,
        "status": 2,
        "current_time": 1747641604
      },
      {
        "uid": 438160221,
        "record_id": 10597910,
        "status": 30,
        "estimated_time": 1747639543,
        "current_time": 1747641604,
        "merge_time": 1747638665
      },
      {
        "uid": 438160221,
        "record_id": 10687720,
        "status": -30,
        "estimated_time": 1747635525,
        "current_time": 1747641604,
        "merge_time": 1747635486,
        "toast": "因直播过程中存在推流质量问题（网络波动或丢包），本场直播回放无法合成"
      },
      {
        "uid": 3493299121817771,
        "record_id": 10727160,
        "status": 2,
        "current_time": 1747641604
      }
    ]
  }
}
```

</details>

## 获取切片视频流

> https://api.live.bilibili.com/xlive/app-blink/v1/anchorVideo/GetSliceStream

*请求方法: GET*

认证方式: Cookie (SESSDATA)

**url参数：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ----- | --- | ---- | ----- | --- |
| live_key | str | 标记直播场次的key | 必要 | 对应[获取直播回放列表](#获取直播回放列表)的`data.replay_info[i].live_key` |
| start_time | num | 直播开始时间戳 | 必要 | 对应[获取直播回放列表](#获取直播回放列表)的`data.replay_info[i].start_time` |
| end_time | num | 直播结束时间戳 | 必要 | 对应[获取直播回放列表](#获取直播回放列表)的`data.replay_info[i].end_time` |
| web_location | str | (?) | 非必要 |  |

**json回复：**

根对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 返回值 | -400：参数缺失<br />-101：未登录<br />0：成功<br />100：非法参数<br />202：场次无效 |
| message | str | 错误信息 | 成功时为`"0"` |
| ttl | num | `1` |  |
| data | obj | 信息本体 |  |

`data` 对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| list | arr | 直播回放视频列表 | 如果该场回放没有视频流将为`null` |

`data.list` 数组中的对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| start_time | num | 片段开始时间戳 | Unix秒时间戳 |
| end_time | num | 片段结束时间戳 | Unix秒时间戳 |
| stream | str | 直播回放视频流 |  |
| type | num | 类型? | 2：一般回放? |

**示例：**

获取某个场次的视频流

```shell
curl 'https://api.live.bilibili.com/xlive/app-blink/v1/anchorVideo/GetSliceStream?live_key=607113721045847859&start_time=1746863101&end_time=1746879299' \
  -b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "list": [
      {
        "start_time": 1746863103,
        "end_time": 1746879246,
        "stream": "https://bvc-live.bilivideo.com/hls-record-gateway/videoPlay?biz_id=live2vod-clip&end_time=1746879246&header_name=1746863103.m4s&host_id=edge-hls-bvc-self-cn-jsyz-ct-03-59-6d854b4bd8-gnlb7&no_end=0&schema=https&sign=12f649dd540096672745d60b84f18eda&start_time=1746863103&stream_name=live_438160221_32373699&ts=1752930893&version=2",
        "type": 2
      },
      {
        "start_time": 1746879267,
        "end_time": 1746879269,
        "stream": "https://bvc-live.bilivideo.com/hls-record-gateway/videoPlay?biz_id=live2vod-clip&end_time=1746879269&header_name=1746863104.m4s&host_id=edge-hls-bvc-self-cn-jsyz-ct-03-59-6d854b4bd8-gnlb7&no_end=0&schema=https&sign=5c63605f1fa88561a6257b6812725b4f&start_time=1746879267&stream_name=live_438160221_32373699&ts=1752930893&version=2",
        "type": 2
      },
      {
        "start_time": 1746879269,
        "end_time": 1746879298,
        "stream": "https://bvc-live.bilivideo.com/hls-record-gateway/videoPlay?biz_id=live2vod-clip&end_time=1746879298&header_name=1746863105.m4s&host_id=edge-hls-bvc-self-cn-jsyz-ct-03-59-6d854b4bd8-gnlb7&no_end=0&schema=https&sign=70929627354f4380b54b97fcdb69c8a2&start_time=1746879269&stream_name=live_438160221_32373699&ts=1752930893&version=2",
        "type": 2
      }
    ]
  }
}
```

</details>

## 获取直播会话数据

> https://api.live.bilibili.com/xlive/app-blink/v1/anchorVideo/GetLiveSessionData

*请求方法: GET*

认证方式: Cookie (SESSDATA)

**url参数：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ----- | --- | ---- | ----- | --- |
| live_key | str | 标记直播场次的key | 必要 |  |
| start_tm | str | 开始时间 | 必要 | 格式为`yyyy-mm-dd+HH:MM:SS`，时区为`UTC+08:00`（中国标准时间）；取值对实际无影响 |
| end_tm | str | 开始时间 | 必要 | 格式为`yyyy-mm-dd+HH:MM:SS`，时区为`UTC+08:00`（中国标准时间）；取值对实际无影响 |
| web_location | str | (?) |  |

**json回复：**

根对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 返回值 | -500：服务器错误<br />-101：未登录<br />0：成功<br />100：非法参数<br />202：场次无效 |
| message | str | 错误信息 | 成功时为`"0"` |
| ttl | num | `1` |  |
| data | obj | 信息本体 |  |

`data` 对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| session_data | arr | 会话数据 |  |
| max_danmaku | num | 弹幕最多的时间戳 | Unix秒时间戳，没有则为`0` |
| max_pcu | num | 进房最多的时间戳 | Unix秒时间戳，没有则为`0` |
| max_value | num | (?) | 效果未知 |
| high_light_data | arr | 高光时刻数据 |  |
| ass_url | str | ASS字幕链接 | 用作弹幕显示 |

`data.session_data` 数组中的对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| ts | num | 采样时间 | Unix秒时间戳 |
| value | num | 弹幕数量 |  |

`data.high_light_data` 数组中的对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| id | num | 高光id |  |
| type | num | 高光类型 | 1：弹幕<br />2：进房 |
| start_time | num | 高光开始时间戳 | Unix秒时间戳 |
| end_time | num | 高光结束时间戳 | Unix秒时间戳 |
| title | str | 高光提示标题 |  |
| cover | str | (?) | 目前为`""` |
| extra | str | (?) | 目前为`""` |

**示例：**

获取场次key为`607113721045847859`的会话数据

```shell
curl 'https://api.live.bilibili.com/xlive/app-blink/v1/anchorVideo/GetLiveSessionData?live_key=607113721045847859&start_tm=0000-01-01+00:00:00&end_tm=1970-01-01+00:00:00' \
  -b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```jsonc
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "session_data": [
      {
        "ts": 1746863100,
        "value": 0
      },
      {
        "ts": 1746863160,
        "value": 0
      },
      {
        "ts": 1746863220,
        "value": 0
      },
      {
        "ts": 1746863280,
        "value": 0
      },
      {
        "ts": 1746863340,
        "value": 0
      },
      {
        "ts": 1746863400,
        "value": 0
      },
      {
        "ts": 1746863460,
        "value": 0
      },
      {
        "ts": 1746863520,
        "value": 0
      },
      {
        "ts": 1746863580,
        "value": 0
      },
      {
        "ts": 1746863640,
        "value": 0
      },
      {
        "ts": 1746863700,
        "value": 0
      },
      {
        "ts": 1746863760,
        "value": 0
      },
      {
        "ts": 1746863820,
        "value": 0
      },
      // 省略100多条数据
      {
        "ts": 1746878520,
        "value": 0
      },
      {
        "ts": 1746878580,
        "value": 0
      },
      {
        "ts": 1746878640,
        "value": 0
      },
      {
        "ts": 1746878700,
        "value": 0
      },
      {
        "ts": 1746878760,
        "value": 0
      },
      {
        "ts": 1746878820,
        "value": 0
      },
      {
        "ts": 1746878880,
        "value": 0
      },
      {
        "ts": 1746878940,
        "value": 0
      },
      {
        "ts": 1746879000,
        "value": 0
      },
      {
        "ts": 1746879060,
        "value": 0
      },
      {
        "ts": 1746879120,
        "value": 0
      },
      {
        "ts": 1746879180,
        "value": 0
      },
      {
        "ts": 1746879240,
        "value": 0
      }
    ],
    "max_danmaku": 1746864660,
    "max_pcu": 1746864660,
    "max_value": 0,
    "high_light_data": [
      {
        "id": 6226272,
        "type": 1,
        "start_time": 1746873300,
        "end_time": 1746873480,
        "title": "弹幕高光 Top 1",
        "cover": "",
        "extra": ""
      },
      {
        "id": 6226274,
        "type": 1,
        "start_time": 1746873120,
        "end_time": 1746873420,
        "title": "弹幕高光 Top 2",
        "cover": "",
        "extra": ""
      },
      {
        "id": 6226271,
        "type": 2,
        "start_time": 1746864600,
        "end_time": 1746864780,
        "title": "进房高光时刻",
        "cover": "",
        "extra": ""
      }
    ],
    "ass_url": "https://jssz-boss.hdslb.com/live2arc_anchor_video/dmass_1899237171_607113721045847859.ass?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=y4zI4XTQzlOkmSKg%2F20250520%2Fjssz%2Fs3%2Faws4_request&X-Amz-Date=20250520T130358Z&X-Amz-Expires=7200&X-Amz-SignedHeaders=host&X-Amz-Signature=5e3ddfbcb8893dc6e76deea7981165e18e5df9a7579f4e6e97c7a32abec53d84"
  }
}
```

</details>

## 获取某个时间的视频帧

> https://api.live.bilibili.com/xlive/app-blink/v1/anchorVideo/GetAnchorVideoKeyFrame

*请求方法: POST*

认证方式: Cookie (SESSDATA)

鉴权方式: Cookie中`bili_jct`的值正确并与`csrf`相同

**url参数：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ----- | --- | ---- | ----- | --- |
| csrf | str | CSRF Token（位于cookie） | 必要 |  |

**正文参数（ application/json ）：**

根对象：

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ----- | --- | ---- | ----- | --- |
| live_key | str | 标记直播场次的key | 必要 |  |
| time_list | str | 秒时间戳列表，用`,`分隔 | 必要 | 时间间隔低于30秒将会导致只提供部分内容 |

**json回复：**

根对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 返回值 | -400：请求错误<br />-111：csrf校验失败<br />-101：未登录<br />0：成功 |
| message | str | 错误信息 | 成功时为`"0"` |
| ttl | num | `1` |  |
| data | obj | 信息本体 |  |

`data` 对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| list | arr | 指定时间的视频帧列表 | 场次key无效时为`null` |

`data.list` 数组中的对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| ts | num | 时间戳 | 对应请求的`time_list`其中某一个 |
| url | str | 该时间的视频帧 | 该时间有视频时存在 |

**示例：**

获取某场直播的视频帧

```shell
curl 'https://api.live.bilibili.com/xlive/app-blink/v1/anchorVideo/GetAnchorVideoKeyFrame?csrf=xxx' \
  -H 'Content-Type: application/json' \
  -b 'SESSDATA=xxx;bili_jct=xxx' \
  -d '{"live_key":"609431465787395891","time_list":"174758900,1747658930,1747658960"}'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "list": [
      {
        "ts": 174758900
      },
      {
        "ts": 1747658930,
        "url": "https://jssz-boss.hdslb.com/live2arc_anchor_video/live_438160221_32373699_20250519204900.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=y4zI4XTQzlOkmSKg%2F20250520%2Fjssz%2Fs3%2Faws4_request&X-Amz-Date=20250520T180202Z&X-Amz-Expires=7200&X-Amz-SignedHeaders=host&X-Amz-Signature=8d42a3d5fd1995e5e2bf98d453a986bec48529a9ae97d5d7eedee8a59b22418a"
      },
      {
        "ts": 1747658960,
        "url": "https://jssz-boss.hdslb.com/live2arc_anchor_video/live_438160221_32373699_20250519205001.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=y4zI4XTQzlOkmSKg%2F20250520%2Fjssz%2Fs3%2Faws4_request&X-Amz-Date=20250520T180202Z&X-Amz-Expires=7200&X-Amz-SignedHeaders=host&X-Amz-Signature=f4a3803d4147492ced14eefbb6953e772b886e195d51dbfac800e77320adeba2"
      }
    ]
  }
}
```

</details>

## 投稿直播回放片段

> https://api.live.bilibili.com/xlive/app-blink/v1/anchorVideo/AnchorPublishVideoSlice

*请求方法: POST*

认证方式: Cookie (SESSDATA)

鉴权方式: Cookie中`bili_jct`的值正确并与`csrf`相同

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ----- | --- | ---- | ----- | --- |
| live_key | str | 标记直播场次的key | 必要 | 必须为自己的live_key |
| start_ts | num | 开始时间戳 | 必要 | 开始和结束时间目前相差不能大于2小时 |
| end_ts | num | 结束时间戳 | 必要 | 开始和结束时间目前相差不能大于2小时 |
| av_title | str | 切片标题 | 必要 | 不能与现有标题重复 |
| av_cover | str | 切片封面URL | 必要 | 必须为`.hdslb.com`域名下的图片，否则合成结束时会出错 |
| av_highlight | num | 高光绑定? | 非必要 |  |
| with_subtitle | num | 是否自动生成字幕? | 非必要 | 效果不明确 |
| with_danmaku | num | 是否带弹幕? | 非必要 | 传递`1`时可能导致处于“发布中”状态时不在[获取已发布片段的信息](#获取已发布片段的信息)中显示 |
| with_reserve | num | (?) | 非必要 | 作用尚不明确 |
| csrf | str | CSRF Token（位于cookie） | 必要 |  |

**json回复：**

根对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 返回值 | -111：csrf校验失败<br />-101：未登录<br />0：成功<br />4000：时长过长<br />4001：操作太快<br />4002：片段已投稿<br />4003：请选择精彩片段再投稿哦<br />4006：标题已使用 |
| message | str | 错误信息 |  |
| ttl | num | `1` |  |
| data | obj | 信息本体 | 成功时有效 |

`data` 对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| video_slice_id | num | 切片id |  |

注: 若返回值出现4001不一定就是操作太快，不提供某些必要参数或某个参数不正确也会导致返回4001。

**示例：**

为某个场次投稿切片

```shell
curl 'https://api.live.bilibili.com/xlive/app-blink/v1/anchorVideo/AnchorPublishVideoSlice' \
  --data-urlencode 'live_key=609431465787395891' \
  --data-urlencode 'start_ts=1747680306' \
  --data-urlencode 'end_ts=1747687506' \
  --data-urlencode 'av_title=2025051920' \
  --data-urlencode 'av_cover=https://i0.hdslb.com/bfs/live/59fc254c1f51a962dbf69ae85e4920f2f6fb8dcd.png' \
  --data-urlencode 'av_highlight=0' \
  --data-urlencode 'with_subtitle=0' \
  --data-urlencode 'with_danmaku=0' \
  --data-urlencode 'csrf=xxx' \
  -b 'SESSDATA=xxx;bili_jct=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data":{
    "video_slice_id": 898374
  }
}
```

</details>

## 下载整场直播回放的流程

此处的流程是从[直播回放](https://link.bilibili.com/#/my-room/live-record)的“下载回放”功能得出的。

1. 先[请求整场直播回放下载链接](#请求整场直播回放下载链接)接口，让它开始合成回放；

2. (可选)请求[获取回放的信息](#获取回放的信息)接口，生成合成进度页面；

3. [轮询回放合成状态](#轮询回放合成状态)，当状态变为`30`转到流程4，变为`-30`转到流程5；

4. 再次[请求整场直播回放下载链接](#请求整场直播回放下载链接)，获取下载链接并下载。

5. 请求[获取直播回放列表](#获取直播回放列表)，刷新页面并根据信息提示失败。

## 直播回放片段发布页面

通过此处的链接可以打开直播回放片段发布页面。

> https://live.bilibili.com/web-cut/quick-publish.html (网页端)

> https://live.bilibili.com/web-cut/quick-publish-mobile.html (移动端)

注：移动端强制限制只能投稿15分钟的片段，网页端则看[投稿直播回放片段](#投稿直播回放片段)接口允许多长的时间。

**url查询参数：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ----- | --- | ---- | ----- | --- |
| start_time | num | 直播开始时间 | 必要 | 对应[获取直播回放列表](#获取直播回放列表)的`data.replay_info[i].start_time` |
| end_time | num | 直播结束时间 | 必要 | 对应[获取直播回放列表](#获取直播回放列表)的`data.replay_info[i].end_time` |
| live_key | str | 标记直播场次的key | 必要 | 对应[获取直播回放列表](#获取直播回放列表)的`data.replay_info[i].live_key` |
| cover | str | 封面URL | 非必要 | 可以自定义封面，或者在[获取直播回放列表](#获取直播回放列表)使用直播封面 |

**示例链接：**

网页端： https://live.bilibili.com/web-cut/quick-publish.html?start_time=1747508293&end_time=1747508499&live_key=609041817764368179&cover=https%3A%2F%2Fi0.hdslb.com%2Fbfs%2Flive%2F59fc254c1f51a962dbf69ae85e4920f2f6fb8dcd.png

移动端： https://live.bilibili.com/web-cut/quick-publish-mobile.html?start_time=1747508293&end_time=1747508499&live_key=609041817764368179

## 直播回放剪辑页面

此链接用于打开直播回放轻剪辑页面，在点击[直播回放片段发布页面](#直播回放片段发布页面)的“高级剪辑工具”或某一个[回放剪辑草稿](#获取回放剪辑草稿列表)后自动打开。

> https://live.bilibili.com/web-cut/index.html

**url查询参数：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ----- | --- | ---- | ----- | --- |
| start_time | num | 直播开始时间戳 | 必要 | 用于[获取切片视频流](#获取切片视频流) |
| end_time | num | 直播结束时间戳 | 必要 | 用于[获取切片视频流](#获取切片视频流) |
| live_key | str | 标记直播场次的key | 必要 | 用于[获取切片视频流](#获取切片视频流) |
| draft_id | num | 回放剪辑id | 必要 |  |

**示例链接：** https://live.bilibili.com/web-cut/index.html?start_time=1747658704&end_time=1747705213&live_key=609431465787395891&draft_id=988275
