# 直播数据

## 获取直播场次的直播数据

> https://api.live.bilibili.com/xlive/app-blink/v1/live/StopLiveData

*请求方法: GET*

认证方式: Cookie (SESSDATA)

只能获取自己的直播数据。最好在直播结束时立即请求，否则直播时长可能不准确。

**URL参数：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ----- | --- | ---- | ----- | --- |
| live_key | str | 标记直播场次的key | 必要 | 若不提供将会获得无效数据 |

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
| LiveTime | num | 该直播场次的直播时长 | 单位:秒，直播结束后还会增长 |
| AddFans | num | 该直播场次的新增粉丝 |  |
| HamsterRmb | num | 该直播场次的收益 |  |
| NewFansClub | num | 该直播场次新获得粉丝勋章数量 |  |
| DanmuNum | num | 该直播场次的弹幕条数 |  |
| MaxOnline | num | 该直播场次的最大在线? | [需要验证] |
| WatchedCount | num | 该直播场次的看过人数 |  |

**示例：**

获取自己的直播数据

```shell
curl 'https://api.live.bilibili.com/xlive/app-blink/v1/live/StopLiveData?live_key=634808443264569139' \
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
    "LiveTime": 77603,
    "AddFans": 0,
    "HamsterRmb": 0,
    "NewFansClub": 0,
    "DanmuNum": 3,
    "MaxOnline": 13,
    "WatchedCount": 2
  }
}
```

</details>

## 获取直播表现

> https://api.live.bilibili.com/xlive/app-blink/v1/date/Overview

*请求方法: GET*

认证方式: Cookie (SESSDATA)

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
| graph | arr | 图表数据 | 在界面显示为雷达图 |
| propose | null | (?) |  |

`data.graph` 数组：

| 索引 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| 0 | obj | 数据类别 |  |
| … | obj | 数据类别 |  |

`data.graph` 数组中对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| name | str | 显示的名称 |  |
| index | str | 类别标识 |  |
| me | num | 自己在这个类别的数值 |  |
| max | num | 这个类别最外侧那条线的数值 |  |
| aver | num | 同水平主播在这个类别的数值 |  |

**示例：**

获取自己的直播表现

```shell
curl 'https://api.live.bilibili.com/xlive/app-blink/v1/date/Overview' \
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
    "graph": [
      {
        "name": "收益",
        "index": "income",
        "me": 0,
        "max": 9.27,
        "aver": 8.04
      },
      {
        "name": "累计观看",
        "index": "watchedCount",
        "me": 5.13,
        "max": 7.01,
        "aver": 6.17
      },
      {
        "name": "新增粉丝",
        "index": "fans",
        "me": 0,
        "max": 2.58,
        "aver": 0
      },
      {
        "name": "用户平均观看时长",
        "index": "watchTime",
        "me": 9.31,
        "max": 11.82,
        "aver": 10.88
      },
      {
        "name": "开播时长",
        "index": "broadcast",
        "me": 17.57,
        "max": 17.42,
        "aver": 16.6
      },
      {
        "name": "弹幕数量",
        "index": "barrage",
        "me": 7.37,
        "max": 8.02,
        "aver": 6.91
      }
    ],
    "propose": null
  }
}
```

</details>
