# 合集管理

关于用户空间的合集及视频列表参见 [合集和视频列表信息](../video/collection.md)

## 获取合集列表

> https://member.bilibili.com/x2/creative/web/seasons

*请求方式: GET*

认证方式: Cookie (SESSDATA)

**URL参数:**

| 参数名 | 类型 | 内容      | 必要性      | 备注              |
| ------ | ---- | --------- | ----------- | ----------------- |
| pn     | num  | 页码      | 必要        | 默认为 1           |
| ps     | num  | 每页数量  | 必要        | 默认为 30          |
| order  | str  | 排序方式  | 不必要        | 创建时间: ctime<br />修改时间: mtime |
| sort   | str  | 排序方式  | 不必要        | 创建时间: asc<br />修改时间: desc |
| draft  | num  | 1        | 不必要        | 作用尚不明确       |

**JSON回复:**

| 字段    | 类型 | 内容     | 备注 |
| ------- | ---- | -------- | ---- |
| code    | num  | 返回值   | 0：成功 |
| message | str  | 错误信息 |      |
| ttl     | num  | 1        |      |
| data    | obj  | 信息本体 |      |

`data`对象:

| 字段      | 类型 | 内容         | 备注 |
| --------- | ---- | ------------ | ---- |
| seasons   | arr  | 合集列表     |      |
| tip       | obj  | 内容 `title` `url` 均为空 | |
| total     | num | 合集总数     |      |
| play_type | num | 1 | 作用尚不明确 |

`seasons`数组中的对象:

| 字段      | 类型 | 内容         | 备注 |
| --------- | ---- | ------------ | ---- |
| season    | obj  | 合集信息     |      |
| course    | null  |      |      |
| checkin   | obj  | 审核信息?     |      |
| seasonStat | obj  | 合集统计信息 |      |
| sections  | obj  | 小节列表     |      |
| part_episodes | arr | 合集视频列表 |      |

`seasons`数组中的对象中的`season`对象:

| 字段      | 类型 | 内容         | 备注 |
| --------- | ---- | ------------ | ---- |
| id        | num  | 合集 ID       |      |
| title     | str  | 合集标题      |      |
| desc      | str  | 合集描述      |      |
| cover     | str  | 合集封面 URL  |      |
| isEnd     | num  | 是否已完结?   | 0: 未完结 |
| mid       | num  | 合集作者 ID   |      |
| isAct     | num  | 是否为活动合集? | 0: 否 |
| is_pay    | num  | 是否付费?     | 0: 否 |
| state     | num  | 合集状态? | 0: 正常显示<br />-6: 正在审核 |
| partState | num  | 合集分段状态? | 0 |
| signState | num  | 合集签名状态? | 0 |
| rejectReason | str | 合集拒绝原因? |      |
| ctime     | num  | 创建时间      |      |
| mtime     | num  | 修改时间      |      |
| no_section | num | 是否设小节 | 1: 不设小节 |
| forbid    | num  | 合集是否禁止? | 0: 否 |
| protocol_id | str | 空 |      |
| ep_num    | num  | 0 |      |
| season_price | num | 合集价格? | 0: 免费 |
| is_opened | num | 是否公开? | 1: 公开 |
| has_charging_pay | num | 是否充电付费? | 0: 否 |

`seasons`数组中的对象中的`checkin`对象:

| 字段      | 类型 | 内容         | 备注 |
| --------- | ---- | ------------ | ---- |
| status    | num  | 状态?     | 0: 正常显示 |
| status_reason | str | 状态原因? |      |
| season_status | num | 合集审核状态? | 1: 审核通过 |

`seasons`数组中的对象中的`seasonStat`对象:

| 字段      | 类型 | 内容         | 备注 |
| --------- | ---- | ------------ | ---- |
| view      | num  | 播放量       |      |
| danmaku   | num  | 弹幕数       |      |
| reply     | num  | 评论数       |      |
| fav       | num  | 收藏数       |      |
| coin      | num  | 硬币数       |      |
| share     | num  | 分享数       |      |
| nowRank   | num  | 当前排名?    |      |
| hisRank   | num  | 历史最高排名? |      |
| like      | num  | 点赞数       |      |
| subscription | num | 订阅数      |      |
| vt        | num  | 0           |      |

`seasons`数组中的对象中的`sections`对象:

| 字段      | 类型 | 内容         | 备注 |
| --------- | ---- | ------------ | ---- |
| sections  | arr  | 小节列表     | 套了个娃 |

`seasons`数组中的对象中的`sections`数组中的对象:

| 字段      | 类型 | 内容         | 备注 |
| --------- | ---- | ------------ | ---- |
| id        | num  | 小节 ID       |      |
| type      | num  | 1           |      |
| seasonId  | num  | 合集 ID       |      |
| title     | str  | 小节标题      |      |
| order     | num  | 排序         |      |
| state     | num  | 状态?        | 0: 正常 |
| partState | num  | 合集分段状态? | 0: 正常 |
| rejectReason | str | 拒绝原因?    |      |
| ctime     | num  | 创建时间      |      |
| mtime     | num  | 修改时间      |      |
| epCount   | num  | 视频数量      |      |
| cover     | str  | 封面 URL      |      |
| has_charging_pay | num | 是否充电付费? | 0: 否 |
| Episodes  | null | | |

`seasons`数组中的对象中的`part_episodes`数组中的对象:

| 字段      | 类型 | 内容         | 备注 |
| --------- | ---- | ------------ | ---- |
| id        | num  | 合集内视频 ID |      |
| title     | str  | 视频标题      |      |
| aid       | num  | 视频 aid     |      |
| bvid      | str  | 视频 bvid    |      |
| cid       | num  | 视频 cid     |      |
| seasonId  | num  | 合集 ID       |      |
| sectionId | num  | 小节 ID       |      |
| order     | num  | 排序编号      |      |
| videoTitle | str | 空 |      |
| archiveTitle | str | 空 |      |
| archiveState | num | 0 |      |
| rejectReason | str | 拒绝理由?    |      |
| state     | num  | 0 |      |
| cover     | str  | 封面 URL      |      |
| is_free   | num  | 是否免费? | 0: 免费 |
| aid_owner | bool | false |      |
| charging_pay | num | 充电付费? | 0: 否 |

**示例:**

```shell
curl -G 'https://member.bilibili.com/x2/creative/web/seasons' \
--data-urlencode 'pn=1' \
--data-urlencode 'ps=30' \
-b "SESSDATA=xxx"
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "seasons": [
      {
        "season": {
          "id": 3541247,
          "title": "🍥Debian",
          "desc": "这里是泽生折腾 Debian GNU/Linux 的珍贵影像记录喵~",
          "cover": "https://archive.biliimg.com/bfs/archive/ec51de61b53159c5e2430cf963f5f97e692baeaf.jpg",
          "isEnd": 0,
          "mid": 645769214,
          "isAct": 0,
          "is_pay": 0,
          "state": 0,
          "partState": 0,
          "signState": 0,
          "rejectReason": "",
          "ctime": 1722573640,
          "mtime": 1722577206,
          "no_section": 1,
          "forbid": 0,
          "protocol_id": "",
          "ep_num": 0,
          "season_price": 0,
          "is_opened": 1,
          "has_charging_pay": 0
        },
        "course": null,
        "checkin": {
          "status": 0,
          "status_reason": "",
          "season_status": 1
        },
        "seasonStat": {
          "view": 6793,
          "danmaku": 21,
          "reply": 93,
          "fav": 64,
          "coin": 26,
          "share": 12,
          "nowRank": 0,
          "hisRank": 0,
          "like": 141,
          "subscription": 0,
          "vt": 0
        },
        "sections": {
          "sections": [
            {
              "id": 3954033,
              "type": 1,
              "seasonId": 3541247,
              "title": "正片",
              "order": 1,
              "state": 0,
              "partState": 0,
              "rejectReason": "",
              "ctime": 1722573640,
              "mtime": 1722577206,
              "epCount": 2,
              "cover": "http://i2.hdslb.com/bfs/archive/b76c0b574862f5a8e8eb133f5f33fcbcd602401a.jpg",
              "has_charging_pay": 0,
              "Episodes": null
            }
          ]
        },
        "part_episodes": [
          {
            "id": 77260687,
            "title": "Linux小寄巧: 原地卸载内核然后尝试救活!",
            "aid": 1906473802,
            "bvid": "BV1MU411S7iJ",
            "cid": 1625992822,
            "seasonId": 3541247,
            "sectionId": 3954033,
            "order": 1,
            "videoTitle": "",
            "archiveTitle": "",
            "archiveState": 0,
            "rejectReason": "",
            "state": 0,
            "cover": "http://i2.hdslb.com/bfs/archive/b76c0b574862f5a8e8eb133f5f33fcbcd602401a.jpg",
            "is_free": 0,
            "aid_owner": false,
            "charging_pay": 0
          },
          {
            "id": 77260688,
            "title": "十多年前的电脑运行Debian12的启动过程",
            "aid": 1956170305,
            "bvid": "BV1Ay411i7Ph",
            "cid": 1607067247,
            "seasonId": 3541247,
            "sectionId": 3954033,
            "order": 2,
            "videoTitle": "",
            "archiveTitle": "",
            "archiveState": 0,
            "rejectReason": "",
            "state": 0,
            "cover": "http://i0.hdslb.com/bfs/archive/0bff6624fdfcbf3326fba1837fef093d455c846a.jpg",
            "is_free": 0,
            "aid_owner": false,
            "charging_pay": 0
          }
        ]
      },
      {
        "season": {
          "id": 3541327,
          "title": "BACollect",
          "desc": "",
          "cover": "https://archive.biliimg.com/bfs/archive/77906db03b1eefac02613de184afad03f7bc58d7.jpg",
          "isEnd": 0,
          "mid": 645769214,
          "isAct": 0,
          "is_pay": 0,
          "state": 0,
          "partState": 0,
          "signState": 0,
          "rejectReason": "",
          "ctime": 1722574656,
          "mtime": 1722574658,
          "no_section": 1,
          "forbid": 0,
          "protocol_id": "",
          "ep_num": 0,
          "season_price": 0,
          "is_opened": 1,
          "has_charging_pay": 0
        },
        "course": null,
        "checkin": {
          "status": 0,
          "status_reason": "",
          "season_status": 0
        },
        "seasonStat": {
          "view": 0,
          "danmaku": 0,
          "reply": 0,
          "fav": 0,
          "coin": 0,
          "share": 0,
          "nowRank": 0,
          "hisRank": 0,
          "like": 0,
          "subscription": 0,
          "vt": 0
        },
        "sections": {
          "sections": [
            {
              "id": 3954127,
              "type": 1,
              "seasonId": 3541327,
              "title": "正片",
              "order": 1,
              "state": 0,
              "partState": 0,
              "rejectReason": "",
              "ctime": 1722574656,
              "mtime": 1722574656,
              "epCount": 0,
              "cover": "http://static.hdslb.com/images/transparent.gif",
              "has_charging_pay": 0,
              "Episodes": null
            }
          ]
        },
        "part_episodes": null
      }
    ],
    "tip": {
      "title": "",
      "url": ""
    },
    "total": 2,
    "play_type": 1
  }
}
```

</details>

## 创建合集

> ttps://member.bilibili.com/x2/creative/web/season/add

*请求方式: POST*

认证方式: Cookie (SESSDATA)

注: 有人工审核

**正文参数:**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| title  | str  | 合集标题 | 必要   |      |
| desc   | str  | 合集简介 | 不必要   |      |
| cover  | str  | 封面图   | 必要   | 从 [上传封面](upload.md#上传封面) 处获取 |
| season_price | num | 0 | 不必要   | 作用尚不明确 |
| csrf   | str  | CSRF Token (即 Cookies 中 bili_jct ) | 必要 |  |

**JSON回复:**

根对象:

| 字段    | 类型 | 内容     | 备注 |
| ------- | ---- | -------- | ---- |
| code    | num  | 返回值   | 0：成功 |
| message | str  | 错误信息 |      |
| ttl     | num  | 1        |      |
| data    | num  | 合集 ID  |      |

**示例:**

```shell
curl -X POST 'https://member.bilibili.com/x2/creative/web/season/add' \
--data-urlencode 'title=🍥Debian' \
--data-urlencode 'desc=这里是泽生折腾 Debian GNU/Linux 的珍贵影像记录喵~' \
--data-urlencode 'cover=https://archive.biliimg.com/bfs/archive/ec51de61b53159c5e2430cf963f5f97e692baeaf.jpg' \
--data-urlencode 'season_price=0' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx; bili_jct=xxx'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": 3541247
}
```

</details>

## 添加视频到合集

> https://member.bilibili.com/x2/creative/web/season/section/episodes/add

*请求方式: POST*

认证方式: Cookie (SESSDATA)

**URL参数:**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| csrf   | str  | CSRF Token (即 Cookies 中 bili_jct ) | 必要 |  |

**正文参数 (application/json):**

根对象:

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| episode | array | 视频列表 | 必要   |      |
| section_id | num | 合集小节 ID | 必要   |      |

`episode` 数组中的对象:

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ----- | --- | ---- | ----- | --- |
| aid | num | 视频 aid | 必要 | |
| cid | num | 稿件 cid | 必要 | |
| title | str | 合集内单集标题 | 必要 | |
| charging_pay | num | 0 | 不必要 | 作用尚不明确 |

**JSON回复:**

根对象:

| 字段    | 类型 | 内容     | 备注 |
| ------- | ---- | -------- | ---- |
| code    | num  | 返回值   | 0：成功 |
| message | str  | 错误信息 |      |
| ttl     | num  | 1        |      |

**示例:**

假设您已经把请求有效荷载放在 `payload.json` 文件中:

```json
{
  "sectionId": 3954033,
  "episodes": [
    {
      "title": "Linux小寄巧: 原地卸载内核然后尝试救活!",
      "aid": 1906473802,
      "cid": 1625992822,
      "charging_pay": 0
    },
    {
      "title": "十多年前的电脑运行Debian12的启动过程",
      "aid": 1956170305,
      "cid": 1607067247,
      "charging_pay": 0
    }
  ]
}
```

```shell
curl -X POST --url 'https://member.bilibili.com/x2/creative/web/season/section/episodes/add' \
--url-query 'csrf=xxx' \
-H 'Content-Type: application/json' \
--data-binary @payload.json \
-b 'SESSDATA=xxx; bili_jct=xxx'
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

## 编辑合集小节

> https://member.bilibili.com/x2/creative/web/season/section/edit

*请求方式: POST*

认证方式: Cookie (SESSDATA)

**URL参数:**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| csrf   | str  | CSRF Token (即 Cookies 中 bili_jct) | 必要 |  |

**正文参数 (application/json):**

根对象:

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| section | obj  | 小节信息 | 必要   |      |
| sorts | array | 排序列表 | 必要   |      |

`section` 对象:

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| id     | num  | 小节 ID   | 必要   |      |
| seasonId | num | 合集 ID | 必要   |      |
| title  | str  | 小节标题 | 必要   |      |
| type   | num  | 1        | 必要   |      |

`sorts` 数组中的对象:

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| id     | num  | 合集内视频 ID   | 必要   |      |
| order  | num  | 排序位置 | 必要   |      |

**JSON回复:**

根对象:

| 字段    | 类型 | 内容     | 备注 |
| ------- | ---- | -------- | ---- |
| code    | num  | 返回值   | 0：成功 |
| message | str  | 错误信息 |      |
| ttl     | num  | 1        |      |

**示例:**

假设您已经把请求有效荷载放在 `payload.json` 文件中:

```json
{
  "section": {
    "id": 3954033,
    "type": 1,
    "seasonId": 3541247,
    "title": "正片"
  },
  "sorts": [
    {
      "id": 77260687,
      "sort": 1
    },
    {
      "id": 77260688,
      "sort": 2
    }
  ]
}
```

```shell
curl -X POST --url 'https://member.bilibili.com/x2/creative/web/season/section/edit' \
--url-query 'csrf=xxx' \
-H 'Content-Type: application/json' \
--data-binary @payload.json \
-b 'SESSDATA=xxx; bili_jct=xxx'
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

## 编辑合集信息

> https://member.bilibili.com/x2/creative/web/season/edit

*请求方式: POST*

认证方式: Cookie (SESSDATA)

注: 也有人工审核

**URL参数:**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| csrf   | str  | CSRF Token (即 Cookies 中 bili_jct) | 必要 |  |

**正文参数 (application/json):**

根对象:

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| season | obj  | 合集信息 | 必要   |      |
| sorts | array | 排序列表 | 必要   |      |

`season` 对象:

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| id     | num  | 合集 ID   | 必要   |      |
| title  | str  | 合集标题 | 必要   |      |
| cover  | str  | 封面图   | 必要   | 从 [上传封面](upload.md#上传封面) 处获取 |
| desc   | str  | 合集简介 | 不必要   |      |
| season_price | num | 0 | 不必要   | 作用尚不明确 |
| isEnd | num | 是否完结 | 不必要 | 0：未完结<br />1：完结 |

`sorts` 数组中的对象:

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| id     | num  | 小节 ID   | 必要   |      |
| sort   | num  | 排序位置 | 必要   |      |

**JSON回复:**

根对象:

| 字段    | 类型 | 内容     | 备注 |
| ------- | ---- | -------- | ---- |
| code    | num  | 返回值   | 0：成功 |
| message | str  | 错误信息 |      |
| ttl     | num  | 1        |      |

**示例:**

假设您已经把请求有效荷载放在 `payload.json` 文件中:

```json
{
  "season": {
    "cover": "https://archive.biliimg.com/bfs/archive/77906db03b1eefac02613de184afad03f7bc58d7.jpg",
    "id": 3541327,
    "title": "IWILLBEDEL"
  },
  "sorts": [
    {
      "id": 3954127,
      "sort": 1
    }
  ]
}
```

```shell
curl -X POST --url 'https://member.bilibili.com/x2/creative/web/season/edit' \
--url-query 'csrf=xxx' \
-H 'Content-Type: application/json' \
--data-binary @payload.json \
-b 'SESSDATA=xxx; bili_jct=xxx'
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

## 删除合集

> https://member.bilibili.com/x2/creative/web/season/del

*请求方式: POST*

认证方式: Cookie (SESSDATA)

**正文参数 (application/x-www-form-urlencoded):**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ----- | --- | ---- | ----- | --- |
| id    | num | 合集 ID | 必要 |    |
| csrf  | str | CSRF Token (即 Cookie 中 bili_jct) | 必要 | |

**JSON回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| code    | num  | 返回值   | 0：成功 |
| message | str  | 错误信息 |      |
| ttl     | num  | 1        |      |

**示例:**

删除合集 `id=3541327`

```shell
curl -X POST 'https://member.bilibili.com/x2/creative/web/season/del' \
--data-urlencode 'id=3541327' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx; bili_jct=xxx'
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
