# 直播投票

## 查询投票信息

> https://api.live.bilibili.com/xlive/app-room/v1/dm/interaction/votePanel

*请求方法: GET*

认证方式: Cookie (SESSDATA)

**url参数：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ----- | --- | ---- | ----- | --- |
| room_id | num | 直播间id | 必要 | 必须为登录信息对应的直播间 |

**json回复：**

根对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 返回值 | -400：请求错误<br />-101：未登录<br />0：成功 |
| message | str | 错误信息 | 成功时为`"0"` |
| ttl | num | `1` |  |
| data | obj | 信息本体 | 不是登录信息对应的直播间时将为 `null` |

`data` 对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| vote_info | obj | 当前活动的投票信息 | 若当前没有活动的投票将为空对象 |
| templates | arr | 投票模板 |  |

`data.vote_info` 对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| status | num | 投票状态 | 见[投票状态](#投票状态)枚举 |
| question | str | 投票问题 |  |
| options | arr | 投票选项 |  |
| duration | num | 投票持续时间 | 单位:毫秒 |
| result | num | 投票结果偏向哪一方状态 |  |
| result_text | str | 投票结果偏向哪一方 |  |
| etime_str | str | 投票结束时间 |  |
| left_duration | num | 投票剩余时间 | 单位:毫秒，投票结束后不存在 |
| interaction_id | num | 投票互动id |  |
| template_id | num | 投票模板id | 使用模板时存在 |

`data.vote_info.options` 数组：

| 索引 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| 0 | obj | 投票选项1 |  |
| 1 | obj | 投票选项2 |  |

`data.vote_info.options` 数组中对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| idx | num | 选项id |  |
| desc | str | 投票选项描述 |  |
| percent | num | 投票选项占比显示 |  |

`data.templates` 数组：

| 索引 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| 0 | obj | 投票模板信息 |  |
| … | obj | 投票模板信息 |  |

`data.templates` 数组中对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| template_id | num | 模板id |  |
| question | str | 投票问题 |  |
| option_a | str | 投票选项A |  |
| option_b | str | 投票选项B |  |

**示例：**

查询投票信息

```shell
curl 'https://api.live.bilibili.com/xlive/app-room/v1/dm/interaction/votePanel?room_id=1'
```

<details>
<summary>查看响应示例：</summary>

```jsonc
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "vote_info": {
      "status": 4,
      "question": "醒醒",
      "options": [
        {
          "idx": 1,
          "desc": "醒",
          "percent": 0.5
        },
        {
          "idx": 2,
          "desc": "睡",
          "percent": 0.5
        }
      ],
      "duration": 600000,
      "result": 1,
      "result_text": "平局",
      "etime_str": "08-31 15:44",
      "left_duration": 549660,
      "interaction_id": 120122595433984
    },
    "templates": [
      {
        "template_id": 54339003518976,
        "question": "哪边赢",
        "option_a": "左",
        "option_b": "右"
      },
      {
        "template_id": 48570973661696,
        "question": "只因你太美唱的好吗？",
        "option_a": "你干嘛",
        "option_b": "哎哟"
      },
      // 省略了大部分内容
      {
        "template_id": 46203444257280,
        "question": "№！",
        "option_a": "虾头",
        "option_b": "抽象"
      },
      {
        "template_id": 96177095781888,
        "question": "相信奇迹吗",
        "option_a": "相信",
        "option_b": "必须相信"
      },
      {
        "template_id": 103827382481920,
        "question": "1",
        "option_a": "1",
        "option_b": "1"
      }
    ]
  }
}
```

</details>

## 查询投票历史

> https://api.live.bilibili.com/xlive/app-room/v1/dm/interaction/voteHistory

*请求方法: GET*

认证方式: Cookie (SESSDATA)

**url参数：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ----- | --- | ---- | ----- | --- |
| room_id | num | 直播间id | 必要 | 必须为登录信息对应的直播间 |

**json回复：**

根对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 返回值 | -400：请求错误<br />-101：未登录<br />0：成功 |
| message | str | 错误信息 | 成功时为`"0"` |
| ttl | num | `1` |  |
| data | obj | 信息本体 | 不是登录信息对应的直播间时将为空对象 |

`data` 对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| history | arr | 投票历史列表 |  |

`data.history` 数组：

| 索引 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| 0 | obj | 投票历史 | 与[查询投票信息](#查询投票信息)`data.vote_info`相同 |
| … | obj | 投票历史 | 与[查询投票信息](#查询投票信息)`data.vote_info`相同 |
| 9 | obj | 投票历史 | 与[查询投票信息](#查询投票信息)`data.vote_info`相同 |

`data.history` 数组中对象：

与 [查询投票信息](#查询投票信息) json回复的 `data.vote_info` 相同。

**示例：**

```shell
curl 'https://api.live.bilibili.com/xlive/app-room/v1/dm/interaction/voteHistory?room_id=1' \
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
    "history": [
      {
        "status": 5,
        "question": "醒醒",
        "options": [
          {
            "idx": 1,
            "desc": "醒",
            "percent": 0.5
          },
          {
            "idx": 2,
            "desc": "睡",
            "percent": 0.5
          }
        ],
        "duration": 600000,
        "result": 1,
        "result_text": "平局",
        "etime_str": "08-31 15:44",
        "interaction_id": 120122595433984
      },
      {
        "status": 5,
        "question": "会不会睡死？",
        "options": [
          {
            "idx": 1,
            "desc": "包会的",
            "percent": 0.5
          },
          {
            "idx": 2,
            "desc": "不会的",
            "percent": 0.5
          }
        ],
        "duration": 60000,
        "result": 1,
        "result_text": "平局",
        "etime_str": "08-31 14:57",
        "interaction_id": 120117830648832
      },
      {
        "status": 5,
        "question": "会不会睡着？",
        "options": [
          {
            "idx": 1,
            "desc": "包会的",
            "percent": 0.5
          },
          {
            "idx": 2,
            "desc": "不会的",
            "percent": 0.5
          }
        ],
        "duration": 180000,
        "result": 1,
        "result_text": "平局",
        "etime_str": "08-31 14:53",
        "interaction_id": 120117121798656
      },
      {
        "status": 5,
        "question": "能不能一把过",
        "options": [
          {
            "idx": 1,
            "desc": "能",
            "percent": 0.5
          },
          {
            "idx": 2,
            "desc": "不能",
            "percent": 0.5
          }
        ],
        "duration": 60000,
        "result": 1,
        "result_text": "平局",
        "etime_str": "08-31 14:41",
        "interaction_id": 120115796409344,
        "template_id": 3109187328000
      }
      // 省略其余6项
    ]
  }
}
```

</details>

## 投票状态

此处列出已发现的投票状态，在投票信息和直播信息流 `DM_INTERACTION` 的类型 `101` 等地方使用。

当前状态信息来自混淆代码寻找而来。

| 值 | 含义 | 备注 |
| -- | ---- | ---- |
| 0 |  | 键名 `NONE` |
| 1 | 等待审核 | 键名 `WAITING_AUDIT` |
| 2 | 审核失败 | 键名 `AUDIT_FAILED` |
| 4 | 投票进行中 | 键名 `DURING` |
| 5 | 投票结束 | 键名 `END` |
| 6 |  | 键名 `STOP` |

## 创建直播投票

> https://api.live.bilibili.com/xlive/app-room/v1/dm/interaction/createVote

*请求方法: POST*

认证方式: Cookie (SESSDATA)

鉴权方式: Cookie中`bili_jct`的值正确并与`csrf`相同

投票创建完成后，投票信息和审核结果将以直播信息流 `DM_INTERACTION` 的类型 `101` 下发。

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ----- | --- | ---- | ----- | --- |
| room_id | num | 直播间id | 必要 | 必须为登录信息对应的直播间 |
| duration | num | 持续时间 | 必要 | 必须为整数，目前范围`0<d<10` |
| question | str | 投票问题 | 必要 |  |
| option_a | str | 选项A | 必要 |  |
| option_b | str | 选项B | 必要 |  |
| template_id | num | 投票模板id | 非必要 |  |
| live_key | str | 直播场次key | 非必要 | 需要更多信息 |
| sub_session_key | str | (?) | 非必要 | 需要更多信息 |
| csrf_token | str | CSRF Token（位于cookie） | 非必要 |  |
| csrf | str | CSRF Token（位于cookie） | 必要 |  |
| visit_id | str | (?) | 非必要 | 作用尚不明确 |

**json回复：**

根对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 返回值 | -404：不是自己的直播间<br />-400：参数错误<br />-101：未登录<br />-111：csrf校验失败<br />0：成功 |
| message | str | 错误信息 | 成功时为`"0"` |
| ttl | num | `1` |  |
| data | obj | 信息本体 |  |

`data` 对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| interaction_id | num | 投票互动id |  |

**示例：**

创建一个投票

```shell
curl 'https://api.live.bilibili.com/xlive/app-room/v1/dm/interaction/createVote' \
  --data-urlencode 'room_id=3' \
  --data-urlencode 'duration=1' \
  --data-urlencode 'question=abcdef' \
  --data-urlencode 'option_a=A' \
  --data-urlencode 'option_b=B' \
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
    "interaction_id":120008099262976
  }
}
```

</details>

## 中断直播投票

> https://api.live.bilibili.com/xlive/app-room/v1/dm/interaction/terminateVote

*请求方法: POST*

认证方式: Cookie (SESSDATA)

鉴权方式: Cookie中`bili_jct`的值正确并与`csrf`相同

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ----- | --- | ---- | ----- | --- |
| interaction_id | num | 投票互动id | 必要 | 必须为该登录信息创建的投票 |
| room_id | num | 直播间id | 必要 | 必须为登录信息对应的直播间 |
| csrf_token | str | CSRF Token（位于cookie） | 非必要 |  |
| csrf | str | CSRF Token（位于cookie） | 必要 |  |
| visit_id | str | (?) | 非必要 | 作用尚不明确 |

**json回复：**

根对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 返回值 | -400：参数错误<br />-101：未登录<br />-111：csrf校验失败<br />0：成功<br />1003402：修改投票状态失败 |
| message | str | 错误信息 | 成功时为`"0"` |
| ttl | num | `1` |  |
| data | null | 无 |  |

**示例：**

中断某个投票

```shell
curl 'https://api.live.bilibili.com/xlive/app-room/v1/dm/interaction/terminateVote' \
  --data-urlencode 'interaction_id=120122595433984' \
  --data-urlencode 'room_id=1' \
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
  "data": null
}
```

</details>

## 弹幕投票主播侧界面

> https://live.bilibili.com/p/html/live-app-guessing-game/anchor_vote.html

直接访问此页面存在部分功能不可用的情况。

**URL查询参数：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ----- | --- | ---- | ----- | --- |
| room_id | num | 直播间id | 必要 | 必须为自己的直播间 |
