# 活动主题信息

## 主题信息

> https://api.bilibili.com/x/activity/subject/info

*请求方式: GET*

**URL参数:**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| - | - | - | - | - |
| sid | num | 活动 id | 必要 |   |
| bvid | str | 来源视频 bvid | 非必要 | |

**JSON回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| - | - | - | - |
| code | num | 返回值 | 0: 成功<br />-400: 请求错误 |
| message | str | 错误信息 | 默认为 0 |
| ttl | num | 1 |   |
| data | obj | 数据本体 |   |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| - | - | - | - |
| id | num | 活动 id |  |
| oid | num | 0 |  |
| type | num | 13 |  |
| state | num | 1 |  |
| stime | num | 开始时间 | UNIX 秒级时间戳 |
| etime | num | 结束时间 | UNIX 秒级时间戳 |
| ctime | num | 创建时间 | UNIX 秒级时间戳 |
| mtime | num | 修改时间 | UNIX 秒级时间戳 |
| name | str | 活动名称 |  |
| act_url | str | 活动链接 |  |
| lstime | num | ? | 作用尚不明确 |
| letime | num | ? | 作用尚不明确 |
| cover | str | 封面图片 |  |
| dic | str | 简介 |  |
| h5_cover | str | H5 封面 |  |
| android_url | str | Android 端活动链接 |  |
| ios_url | str | iOS 端活动链接 |  |
| child_sids | str | 子活动 id? |  |
| calendar | str | 日历? | 空 或 `{}`? |
| lid | num | ? | 仅在传入 bvid 时存在 |

**示例:**

```shell
curl -G --url 'https://api.bilibili.com/x/activity/subject/info' \
--url-query 'sid=4017552' \
--url-query 'bvid=BV1mKY4e8ELy'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "id": 4017552,
    "oid": 0,
    "type": 13,
    "state": 1,
    "stime": 1720540800,
    "etime": 1728575999,
    "ctime": 1720439769,
    "mtime": 1720591285,
    "name": "科技猎手2024第2季",
    "act_url": "https://www.bilibili.com/blackboard/era/kejilieshou2PC.html",
    "lstime": 1720540800,
    "letime": 1728575999,
    "cover": "https://i0.hdslb.com/bfs/activity-plat/static/98bc38873cc71e154019070975cd20a0/fLOEOStVUV.jpg",
    "dic": "科技猎手召集中！投稿赢奖金>>",
    "h5_cover": "https://i0.hdslb.com/bfs/activity-plat/static/98bc38873cc71e154019070975cd20a0/PTIFsXkV0o.jpg",
    "android_url": "https://www.bilibili.com/blackboard/era/kejilieshou2H5.html",
    "ios_url": "https://www.bilibili.com/blackboard/era/kejilieshou2H5.html",
    "child_sids": "",
    "calendar": "",
    "lid": 294258214
  }
}
```

</details>
