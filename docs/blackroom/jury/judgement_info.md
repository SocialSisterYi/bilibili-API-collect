# 众裁信息

## Enum类型代码

### 投票类型码总览

| 代码 | 含义 |
| ---- | --- |
| 0   | 未投票 |
| 1   | 封禁 |
| 2   | 否 |
| 3   | 弃权 |
| 4   | 删除 |

### 投票选项码总览

<table>
    <tr>
        <th>任务类型</th>
        <th>代码</th>
        <th>含义</th>
    </tr>
    <tr>
        <td rowspan="4">单条评论（弹幕）</td>
        <td>1</td>
        <td>合适</td>
    </tr>
    <tr>
        <td>2</td>
        <td>一般</td>
    </tr>
    <tr>
        <td>3</td>
        <td>不合适</td>
    </tr>
    <tr>
        <td>4</td>
        <td>无法判断</td>
    </tr>
    <tr>
        <td rowspan="4">评论（弹幕）氛围</td>
        <td>11</td>
        <td>好</td>
    </tr>
    <tr>
        <td>12</td>
        <td>一般</td>
    </tr>
    <tr>
        <td>13</td>
        <td>差</td>
    </tr>
    <tr>
        <td>14</td>
        <td>无法判断</td>
    </tr>
</table>



## 获取单个案件信息

> https://api.bilibili.com/x/credit/v2/jury/case/info

*请求方式：GET*

认证方式：Cookie（SESSDATA）或APP

可查询任意案件，无论自己是否参与投票。

**url参数：**

| 参数名 | 类型 | 内容          | 必要性 | 备注           |
| ------ | ------------ | ------ | ------------- | ------------- |
| access_key | str | APP登录Token | APP方式必要 |  |
| case_id | str | 案件id     |  必要  |                |

**json回复：**

根对象：

| 字段    | 类型   | 内容      | 备注         |
| ------- | ------ | -------- | ------------ |
| code    | num    | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str    | 信息     | 默认为 0      |
| ttl     | num    | 1        |  |
| data    | object | 数据本体   |             |

`data` 对象：

| 字段         | 类型   | 内容                             | 备注                                                           |
| ------------ | ------ | -------------------------------- | -------------------------------------------------------------- |
| case_id      | str    | 案件id                           |                                                                |
| case_type    | num    | 任务类型                         | 1：单条评论<br />2：评论氛围<br />3：单条弹幕<br />4：弹幕氛围 |
| jury_state   | num    | `1`                              | 改版后未见过其它值                                             |
| participate  | num    | 是否投票                         | 0：未投票<br />1：已投票                                       |
| vote_items   | object | 投票选项                         | 见开头「投票选项码总览」                                       |
| default_vote | num    | 默认投票选项                     | `4` 或 `14` 即 `无法判断`                                      |
| status       | num    | 裁决状态（新版）                 | 0：进行中<br />1：已结束                                       |
| origin_start | num    | 案件关联视频，播放进度条起始坐标 | 单位：`秒`                                                     |
| avid         | num    | 视频av号                         |                                                                |
| cid          | num    | 弹幕 dmid                        |                                                                |
| vote_cd      | num    | `-1`                             | 暂不明确                                                       |
| result       | num    | 众议结论                         | 见开头「投票选项码总览」                                       |
| result_text  | str    | 众议结论文本                     | 见开头「投票选项码总览」                                       |
| title        | str    | 视频标题                         |                                                                |
| case_info    | object | 案件信息                         |                                                                |
| my_point     | object | 我的观点                         | 仅自己投过票才有该字段                                         |
| vote_info    | object | 投票信息                         |                                                                |

`data` 对象下的`case_info`对象

| 字段         | 类型   | 内容         | 备注                                            |
| ------------ | ------ | ------------ | ----------------------------------------------- |
| comment      | object | 单条评论信息 | 仅当`case_type`为`1`有值。见「对象：评论信息」  |
| danmu_img    | str    | 弹幕截图     | 仅当`case_type`为`4`有值，截图URL               |
| comments     | object | 若干条评论   | 仅当`case_type`为`2`有值。见「对象：评论信息」  |
| single_danmu | str    | 单条弹幕信息 | 仅当`case_type`为`3`有值。见「对象：评论信息)」 |


对象：评论信息

| 字段           | 类型   | 内容                     | 备注                                                           |
| -------------- | ------ | ------------------------ | -------------------------------------------------------------- |
| mid            | num    | 用户uid                  |                                                                |
| uname          | str    | 用户名                   |                                                                |
| face           | str    | 用户头像                 | 头像URL                                                        |
| content        | str    | 评论内容                 |                                                                |
| child_comments | object | 子评论（对该评论的回复） | 见「对象：评论信息」，单条评论和子评论下无`child_comments`字段 |


对象：弹幕信息

| 字段     | 类型 | 内容     |  备注    |
| -------- | ---- | -------- | ------- |
| id_str   | str  | 弹幕dmid |          |
| content  | str  | 弹幕内容 |          |
| progress | num  |          | 尚不明确 |

`data` 对象下的`my_point`对象

记录了自己的投票（观点）信息，仅当自己投过票才有该字段。

| 字段        | 类型 | 内容             | 备注                                                         |
| ----------- | ---- | ---------------- | ------------------------------------------------------------ |
| opid        | num  | 观点编号         | 每当某个一个风纪委员给某个仲裁案件发表观点，就+1             |
| mid         | num  | 风纪委员用户ID   |                                                              |
| uname       | str  | 风纪委员用户名   | 风纪委勾选匿名投票则显示“匿名用户”                           |
| face        | str  | 头像URL          | 头像                                                         |
| vote        | num  | 投票选项         | “合适题”分别为 `1` 或者 `2` 或者 `3` 或者 `4`，<br/>对应：“合适”、“一般”、“不合适”、“无法判断”<br/><br/>“氛围题”分别为 `11` 或者 `12` 或者 `13` 或者 `14`，<br/>对应：“好”、“一般”、“差”、“无法判断”<br/><br/>注释<br/>合适题：“单条弹幕（评论）是否合适？”<br/>氛围题：“弹幕（评论区）氛围如何” |
| vote_text   |      | 内容为空         | *现在系统已不再展示其他风纪委所投的票*                       |
| content     | str  | 观点内容         | 该风纪委员所发表的观点内容                                   |
| anonymous   | num  | 0                | 尚不明确                                                     |
| like        | num  | 被点赞数量       |                                                              |
| hate        | num  | 被点踩数量       |                                                              |
| like_status | num  | 点赞（踩）状态   | 本账号是否给该条评论点赞：<br/>0：没做操作；1：给评论点赞；2：给评论点踩 |
| vote_time   | num  | 投票时间         | 时间戳，精确到秒                                             |
| insiders    | num  | 是否观看此类视频 | 1：平时观看此类视频；0：平时不观看此类视频                   |

`data` 对象下的`vote_info`对象

| 字段            | 类型  | 内容     | 备注                                         |
| --------------- | ----- | -------- | -------------------------------------------- |
| all_count       | num   | 总投票数 |                                              |
| counts          | array | 观点分布 | 格式：`[合适, 一般, 不合适, 无法判断]`       |
| insiders_counts | array | 行为分布 | 格式：`[平时会看此类视频, 平时不看此类视频]` |

**示例：**

```shell
curl -G 'https://api.bilibili.com/x/credit/v2/jury/case/info' \
  --data-urlencode 'case_id=AC2SiaD8jlrL' \
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
        "case_id": "AC2SiaD8jlrL",
        "case_type": 3,
        "jury_state": 1,
        "participate": 1,
        "vote_items": [
            {
                "vote": 1,
                "vote_text": "合适"
            },
            {
                "vote": 2,
                "vote_text": "一般"
            },
            {
                "vote": 3,
                "vote_text": "不合适"
            },
            {
                "vote": 4,
                "vote_text": "无法判断"
            }
        ],
        "default_vote": 4,
        "status": 1,
        "origin_start": 0,
        "avid": 727792866,
        "cid": 756815216,
        "vote_cd": -1,
        "result": 3,
        "result_text": "不合适",
        "title": "“国家队”守门员和朋友打赌，谁能在湿滑的地面踢进足球就送美刀",
        "case_info": {
            "comment": null,
            "danmu_img": "",
            "comments": null,
            "single_danmu": {
                "id_str": "1086612690354524160",
                "content": "这守门员干啥呢？给块骨头我家狗都比他防的好",
                "progress": 27859
            }
        },
        "my_point": {
            "opid": 10001,
            "mid": 10001,
            "uname": "风纪委员用户名",
            "face": "http://i0.hdslb.com/bfs/face/e48952d599dbf011c2235239fafa2bf0deccef5a.jpg",
            "vote": 3,
            "vote_text": "不合适",
            "content": "",
            "anonymous": 0,
            "like": 0,
            "hate": 0,
            "like_status": 0,
            "vote_time": 1663655000,
            "insiders": 1
        },
        "vote_info": {
            "all_count": 306,
            "counts": [90, 33, 177, 6],
            "insiders_counts": [245, 61]
        }
    }
}
```
</details>

**旧 api：**

<details>
<summary>查看旧 api：</summary>

> https://api.bilibili.com/x/credit/jury/juryCase

*请求方式：GET*

认证方式：Cookie（SESSDATA）或APP

只能查询自己参与众裁的

**url参数：**

| 参数名 | 类型 | 内容          | 必要性 | 备注           |
| ------ | ------------ | ------ | ------------- | ------------- |
| access_key | str | APP登录Token | APP方式必要 |  |
| cid    | num | 案件id     |  必要  |                |

**json回复：**

根对象：

| 字段    | 类型   | 内容      | 备注         |
| ------- | ------ | -------- | ------------ |
| code    | num    | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误<br />25010：没有权限查看案件 |
| message | str    | 信息     | 默认为0      |
| ttl     | num    | 1        |  |
| data    | object | 数据本体   |             |

`data` 对象：

| 字段      | 类型   | 内容      | 备注         |
| --------- | ------ | -------- | ------------ |
| id        | num    | 案件id |              |
| mid       | num    | 被举报用户mid |              |
| status    | num    | 裁决状态   | 1：投票中<br />2：停止发放<br />3：复核中（结案中）<br />4：已裁决<br />5：待重启<br />6：未裁决<br />7：冻结中<br />8：队列中 |
| statusTitle | str  | 封禁时间文字 | `judgeType`=1时有效 |
| originType | num   | 来源类型 | 见「封禁公示」中表 |
| reasonType | num   | 原因类型 | 见「封禁公示」中表 |
| originContent | str | 被举报的原文 |  |
| punishResult | num | 处理结果 | 0：无<br />1：封禁3天<br />2：封禁7天<br />3：永封<br />4：其他封禁天数<br />5：封禁15天<br />6：仅删除不封禁 |
| punishTitle | str  | 处罚原因 |              |
| judgeType | num    | 裁决类型 | `status`=4时有效<br />0：未裁决<br/>1：违规<br/>2：不违规 |
| originUrl | str | 来源url |  |
| blockedDays | num  | 封禁时间 | `judgeType`=1时有效 |
| putTotal  | num    | ？？？ | 作用尚不明确 |
| voteRule  | num    | 投票不违规人数 |              |
| voteBreak | num    | 投票建议封禁人数 |              |
| voteDelete | num    | 投票建议删除人数 |             |
| startTime | num    | 裁决起始时间 | 时间戳 |
| endTime   | num    | 裁决截止时间 | 时间戳<br />未结案固定为24小时 |
| ctime     | num    | 举报创建时间 | 时间戳 |
| mtime     | num    | 开始拉取时间 | 时间戳 |
| originTitle | str  | 来源标题 |              |
| relationId | str   | 违规关系标识字 | {评论rpid}-{违规类型id}-{来源对象id} |
| face      | str    | 被举报用户头像url |           |
| uname     | str    | 被举报用户昵称 |              |
| vote      | num    | 我的投票 | **见上表** |
| case_type | num    | 众裁类型 | 0：小众众裁<br />1：大众众裁 |

**示例：**

查询案件`1239790`的信息

Cookie方式：

```shell
curl -G 'https://api.bilibili.com/x/credit/jury/juryCase' \
--data-urlencode 'cid=1239790' \
-b 'SESSDATA=xxx'
```

APP方式：

```shell
curl -G 'https://api.bilibili.com/x/credit/jury/juryCase' \
--data-urlencode 'access_key=xxx' \
--data-urlencode 'cid=1239790' \
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "id": 1239790,
        "mid": 351783425,
        "status": 4,
        "statusTitle": "封禁7天",
        "originType": 1,
        "reasonType": 9,
        "originContent": "up主，在和平精英里的喷子是霰（xian）弹枪，不是散（san）弹枪。",
        "punishResult": 0,
        "punishTitle": "在评论中发布引战言论",
        "judgeType": 2,
        "originUrl": "https://www.bilibili.com/video/BV15x411X7eV/#reply1728344012",
        "blockedDays": 7,
        "putTotal": 272,
        "voteRule": 409,
        "voteBreak": 17,
        "voteDelete": 89,
        "startTime": 1594467941,
        "endTime": 1594471525,
        "ctime": 1594464499,
        "mtime": 1594471678,
        "originTitle": "和平精英揭秘真相68：氪金试水最新抽奖活动，到底是亏了还是赚了？",
        "relationId": "1728344012-1-57465308",
        "face": "http://i2.hdslb.com/bfs/face/e1018566c615059b664dc6eae3a5235c31cd92fe.jpg",
        "uname": "零酱a",
        "vote": 4,
        "case_type": 0
    }
}
```

</details>
</details>

## 查询案件众裁信息

注：这是一个旧版的API，暂未找到对应的新版API。
<details>
<summary>展开：</summary>
> https://api.bilibili.com/x/credit/jury/caseInfo

*请求方式：GET*

注：该接口无需登录

**url参数：**

| 参数名 | 类型 | 内容   | 必要性 | 备注 |
| ------ | ---- | ------ | ------ | ---- |
| cid    | num  | 案件id | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型                             | 内容     | 备注                        |
| ------- | -------------------------------- | -------- | --------------------------- |
| code    | num                              | 返回值   | 0：成功<br />-400：请求错误 |
| message | str                              | 信息     | 默认为0                     |
| ttl     | num                              | 1        |                             |
| data    | 有效时：object<br />无效时：null | 数据本体 |                             |

`data` 对象：

| 字段          | 类型 | 内容              | 备注                                                         |
| ------------- | ---- | ----------------- | ------------------------------------------------------------ |
| id            | num  | 案件id            |                                                              |
| mid           | num  | 被举报用户mid     |                                                              |
| status        | num  | 裁决状态          | 1：投票中<br />2：停止发放<br />3：复核中（结案中）<br />4：已裁决<br />5：待重启<br />6：未裁决<br />7：冻结中<br />8：队列中 |
| originType    | num  | 来源类型          | 见「封禁公示」中表                                           |
| reasonType    | num  | 原因类型          | 见「封禁公示」中表                                           |
| originContent | str  | 被举报的原文      |                                                              |
| punishResult  | num  | 处理结果          | 0：无<br />1：封禁3天<br />2：封禁7天<br />3：永封<br />4：其他封禁天数<br />5：封禁15天<br />6：仅删除不封禁 |
| judgeType     | num  | 裁决类型          | `status`=4时有效<br />0：未裁决<br/>1：违规<br/>2：不违规    |
| originUrl     | str  | 来源url           |                                                              |
| blockedDays   | num  | 封禁时间          | `judgeType`=1时有效                                          |
| putTotal      | num  | ？？？            | 作用尚不明确                                                 |
| voteRule      | num  | 投票不违规人数    |                                                              |
| voteBreak     | num  | 投票建议封禁人数  |                                                              |
| voteDelete    | num  | 投票建议删除人数  |                                                              |
| startTime     | num  | 裁决起始时间      | 时间戳                                                       |
| endTime       | num  | 裁决截止时间      | 时间戳<br />未结案固定为24小时                               |
| ctime         | num  | 举报创建时间      | 时间戳                                                       |
| mtime         | num  | 开始拉取时间      | 时间戳                                                       |
| originTitle   | str  | 来源标题          |                                                              |
| relationId    | str  | 违规关系标识字    | {评论rpid}-{违规类型id}-{来源对象id}                   |
| face          | str  | 被举报用户头像url |                                                              |
| uname         | str  | 被举报用户昵称    |                                                              |
| vote          | num  | 0                 | 固定为0                                                      |
| case_type     | num  | 众裁类型          | 0：小众众裁<br />1：大众众裁                                 |

**示例：**

查询案件`1239790`的信息

```shell
curl -G 'https://api.bilibili.com/x/credit/jury/juryCase' \
--data-urlencode 'cid=1239790'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "id": 1239790,
        "mid": 351783425,
        "status": 4,
        "originType": 1,
        "reasonType": 9,
        "originContent": "up主，在和平精英里的喷子是霰（xian）弹枪，不是散（san）弹枪。",
        "punishResult": 0,
        "judgeType": 2,
        "originUrl": "https://www.bilibili.com/video/BV15x411X7eV/#reply1728344012",
        "blockedDays": 7,
        "putTotal": 272,
        "voteRule": 409,
        "voteBreak": 17,
        "voteDelete": 89,
        "startTime": 1594467941,
        "endTime": 1594471525,
        "ctime": 1594464499,
        "mtime": 1594471678,
        "originTitle": "和平精英揭秘真相68：氪金试水最新抽奖活动，到底是亏了还是赚了？",
        "relationId": "1728344012-1-57465308",
        "face": "http://i2.hdslb.com/bfs/face/e1018566c615059b664dc6eae3a5235c31cd92fe.jpg",
        "uname": "零酱a",
        "vote": 0,
        "case_type": 0
    }
}
```
</details>
</details>

## 查询我的众裁记录

> https://api.bilibili.com/x/credit/v2/jury/case/list

*请求方式：GET*

认证方式：Cookie

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注                 |
| ---------- | ---- | ------------ | ----------- | -------------------- |
| pn         | num  | 页码         | 非必要      | 默认为1              |
| ps         | num  | 每页显示数量 | 非必要      | 默认为30<br />最大30 |

**Headers参数**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ------ | ---- | ---- | ------ | ---- |
| cookie | str  |      | 必要   |      |

**json回复：**

根对象：

| 字段       | 类型   | 内容         | 备注                                              |
| ---------- | ------ | ------------ | ------------------------------------------------- |
| code       | num    | 返回值       | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message    | str    | 信息         | 默认为0                                           |
| ttl        | num    | 1            |                                                   |
| data       | object | 数据本体     |                                                   |
| data.total | num    | 仲裁案例数   |                                                   |
| data.list  | array  | 仲裁记录列表 |                                                   |

`list`数组：

| 项   | 类型   | 内容            | 备注         |
| ---- | ------ | --------------- | ------------ |
| 0    | object | 仲裁记录1       |              |
| n    | object | 仲裁记录（n+1） | 按照时间顺序 |
| ……   | object | ……              | ……           |

`list`数组中的对象：

| 字段      | 类型 | 内容         | 备注                                                         |
| --------- | ---- | ------------ | ------------------------------------------------------------ |
| case_id   | str  | 案件id       |                                                              |
| case_type | num  | 案件类型     | 1：单条评论<br/>2：评论氛围<br/>3：单条弹幕<br/>4：弹幕氛围  |
| status    | num  | 裁决状态     | 0：投票中<br />1：已结束                                     |
| vote      | num  | 投票选项     | “单条评论（弹幕）”分别为 `1` 或者 `2` 或者 `3` 或者 `4`，<br/>对应：“合适”、“一般”、“不合适”、“无法判断”<br/><br/>“评论（弹幕）氛围”分别为 `11` 或者 `12` 或者 `13` 或者 `14`，<br/>对应：“好”、“一般”、“差”、“无法判断” |
| vote_text | str  | 投票选项文本 | *参考上条*                                                   |
| vote_time | num  | 投票时间     | 时间戳，精确到秒                                             |

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "total": 5428,
        "list": [
            {
                "case_id": "AC2sOiNenwj1",
                "case_type": 4,
                "status": 1,
                "vote": 11,
                "vote_text": "好",
                "vote_time": 1662700609
            }
        ]
    }
}
```

</details>

## 查询案件众裁信息(旧 api)

<details>
<summary>查看旧版API：</summary>

> https://api.bilibili.com/x/credit/jury/caseList

*请求方式：GET*

认证方式：Cookie（SESSDATA）或APP

**url参数：**

| 参数名 | 类型 | 内容          | 必要性 | 备注           |
| ------ | ------------ | ------ | ------------- | ------------- |
| access_key | str | APP登录Token | APP方式必要 |  |
| pn     | num  | 页码         | 非必要  | 默认为1  |
| ps     | num  | 每页显示数量  | 非必要  | 默认为30<br />最大30 |

**json回复：**

根对象：

| 字段    | 类型   | 内容      | 备注         |
| ------- | ------ | -------- | ------------ |
| code    | num    | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str    | 信息     | 默认为0      |
| ttl     | num    | 1        |  |
| data    | array  | 仲裁记录列表 |             |

`data`数组：

| 项   | 类型   | 内容            | 备注         |
| ---- | ------ | --------------- | ------------ |
| 0    | object | 仲裁记录1       |              |
| n    | object | 仲裁记录（n+1） | 按照时间顺序 |
| ……   | object | ……              | ……           |

`data`数组中的对象：

| 字段          | 类型 | 内容              | 备注                                                         |
| ------------- | ---- | ----------------- | ------------------------------------------------------------ |
| id            | num  | 案件id            |                                                              |
| mid           | num  | 被举报用户mid     |                                                              |
| status        | num  | 裁决状态          | 1：投票中<br />2：停止发放<br />3：复核中（结案中）<br />4：已裁决<br />5：待重启<br />6：未裁决<br />7：冻结中<br />8：队列中 |
| originType    | num  | 来源类型          | 见「封禁公示」中表                                           |
| reasonType    | num  | 原因类型          | 见「封禁公示」中表                                           |
| originContent | str  | 被举报的原文      |                                                              |
| punishResult  | num  | 处理结果          | 0：无<br />1：封禁3天<br />2：封禁7天<br />3：永封<br />4：其他封禁天数<br />5：封禁15天<br />6：仅删除不封禁 |
| punishTitle   | str  | 处罚原因          |                                                              |
| judgeType     | num  | 裁决类型          | `status`=4时有效<br />0：未裁决<br/>1：违规<br/>2：不违规    |
| originUrl     | str  | 来源url           |                                                              |
| blockedDays   | num  | 封禁时间          | `judgeType`=1时有效                                          |
| putTotal      | num  | ？？？            | 作用尚不明确                                                 |
| voteRule      | num  | 投票不违规人数    |                                                              |
| voteBreak     | num  | 投票建议封禁人数  |                                                              |
| voteDelete    | num  | 投票建议删除人数  |                                                              |
| startTime     | num  | 裁决起始时间      | 时间戳                                                       |
| endTime       | num  | 裁决截止时间      | 时间戳<br />未结案固定为24小时                               |
| ctime         | num  | 举报创建时间      | 时间戳                                                       |
| mtime         | num  | 开始拉取时间      | 时间戳                                                       |
| originTitle   | str  | 来源标题          |                                                              |
| relationId    | str  | 违规关系标识字    | {评论rpid}-{违规类型id}-{来源对象id}                   |
| face          | str  | 被举报用户头像url |                                                              |
| uname         | str  | 被举报用户昵称    |                                                              |
| vote          | num  | 我的投票          | **见上表**                                                   |
| voteTime      | num  | 我的裁决时间      | 毫秒  时间戳                                                 |
| case_type     | num  | 众裁类型          | 0：小众众裁<br />1：大众众裁                                 |

**示例：**

查询我的历史众裁，第1页，每页显示1个案件

Cookie方式：

```shell
curl -G 'https://api.bilibili.com/x/credit/jury/caseList' \
--data-urlencode 'ps=1' \
--data-urlencode 'pn=1' \
-b 'SESSDATA=xxx'
```

APP方式：
```shell
curl -G 'https://api.bilibili.com/x/credit/jury/caseList' \
--data-urlencode 'access_key=xxx' \
--data-urlencode 'ps=1' \
--data-urlencode 'pn=1'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": [
        {
            "id": 1241808,
            "mid": 298264370,
            "status": 4,
            "originType": 1,
            "reasonType": 9,
            "originContent": "别在发这种傻逼视频了好吗？真要搞到禁摩才甘心。",
            "punishResult": 6,
            "punishTitle": "在评论中发布引战言论",
            "judgeType": 1,
            "originUrl": "https://www.bilibili.com/video/av328669697/#reply3165369965",
            "blockedDays": 7,
            "putTotal": 251,
            "voteRule": 14,
            "voteBreak": 140,
            "voteDelete": 373,
            "startTime": 1594528662,
            "endTime": 1594530687,
            "ctime": 1594528108,
            "mtime": 1594530802,
            "originTitle": "我这里有记录仪!略略略略略略哈哈哈，干得漂亮!",
            "relationId": "3165369965-1-328669697",
            "face": "http://i1.hdslb.com/bfs/face/d69912bb2a51f08176bcdbf4ba15e4c2b0962ad9.jpg",
            "uname": "MyLSTicKnight",
            "vote": 4,
            "voteTime": 1594528700000,
            "case_type": 0
        }
    ]
}
```

</details>
</details>

## 获取众议观点

> https://api.bilibili.com/x/credit/v2/jury/case/opinion

*请求方式：GET*

认证方式：Cookie

**标头参数（Headers）：**

| 参数名 | 类型 | 内容   | 必要性 | 备注 |
| ------ | ---- | ------ | ------ | ---- |
| Cookie | str  | Cookie | 必要   |      |

**URL参数（Query Params）：**

| 参数名  | 类型 | 内容       | 备注                                        |
| ------- | ---- | ---------- | ------------------------------------------- |
| case_id | str  | 仲裁案件id | **必填**                                    |
| pn      | num  |            | 显示第x页（default = 1）                    |
| ps      | num  |            | 每页显示y条观点（Max = 20）（default = 10） |

**json回复：**

根对象：

| 字段    | 类型   | 内容     | 备注                                              |
| ------- | ------ | -------- | ------------------------------------------------- |
| code    | num    | 返回值   | 0：成功；<br />-400：`ps`参数大于可允许的最大值`20` |
| message | str    | 信息     | 默认为0                                           |
| ttl     | num    | 1        | 作用尚不明确                                      |
| data    | object | 数据本体 |                                                   |

`data`对象：

| 字段  | 类型  | 内容                       | 备注 |
| ----- | ----- | -------------------------- | ---- |
| total | num   | 当前案件众议观点总数       |      |
| list  | array | 无数据时是一个空数组：“[]” |      |

`data.list`对象是一个数组，里面包含`ps`个object（参数`ps`见上文，object结构见「[附表4](#附表4data-对象下的my_point对象)」）

**示例：**

查看案件`AC1xx411c7ac`的众议观点，每页`2`项，查看第`1`页

```shell
curl -G 'https://api.bilibili.com/x/credit/v2/jury/case/opinion' \
--data-urlencode 'case_id=AC1xx411c7ac' \
--data-urlencode 'pn=1' \
--data-urlencode 'ps=2' \
--header 'cookie: xxxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "total": 48,
        "list": [
            {
                "opid": 46087379,
                "mid": 22006415,
                "uname": "匿名用户",
                "face": "http://i0.hdslb.com/bfs/face/e48952d599dbf011c2235239fafa2bf0deccef5a.jpg",
                "vote": 11,
                "vote_text": "",
                "content": "正常评论",
                "anonymous": 1,
                "like": 0,
                "hate": 0,
                "like_status": 0,
                "vote_time": 1661430391,
                "insiders": 1
            },
            {
                "opid": 46087280,
                "mid": 19243907,
                "uname": "匿名用户",
                "face": "http://i0.hdslb.com/bfs/face/e85d7ab3425d3dd0f0796bd7f945b47ac27ca82a.jpg",
                "vote": 11,
                "vote_text": "",
                "content": "并未发现明显问题。",
                "anonymous": 1,
                "like": 0,
                "hate": 0,
                "like_status": 0,
                "vote_time": 1661430337,
                "insiders": 0
            }
        ]
    }
}
```

</details>

**旧 api**

<details>
<summary>查看旧版API：</summary>

> https://api.bilibili.com/x/credit/jury/case/opinion

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容          | 必要性 | 备注           |
| ------ | ------------ | ------ | ------------- | ------------- |
| cid    | num | 案件id       | 必要    |               |
| ps     | num  | 每页项数 | 非必要  | 默认为10 |
| pn     | num  | 页码         | 非必要  | 默认为1 |

**json回复：**

根对象：

| 字段    | 类型   | 内容      | 备注         |
| ------- | ------ | -------- | ------------ |
| code    | num    | 返回值   | 0：成功<br />-400：请求错误 |
| message | str    | 信息     | 默认为0      |
| ttl     | num    | 1        |  |
| data    | object | 数据本体   |             |

`data` 对象：

| 字段      | 类型   | 内容      | 备注         |
| --------- | ------ | -------- | ------------ |
| count     | num    | 观点总数  |              |
| opinion   | 有效时：array<br />无效时：null | 观点列表 |              |

`data` 中的`opinion` 数组：

| 项   | 类型   | 内容        | 备注         |
| ---- | ------ | ----------- | ------------ |
| 0    | object | 观点1       |              |
| n    | object | 观点（n+1） | 按照时间顺序 |
| ……   | object | ……          | ……           |

`opinion` 数组中的对象：

| 字段      | 类型   | 内容      | 备注         |
| --------- | ------ | -------- | ------------ |
| mid       | num    | 用户mid | 仅非匿名有此项 |
| face      | str    | 用户头像  | 仅非匿名有此项 |
| name      | str    | 用户昵称  | 仅非匿名有此项 |
| opid      | num    | 观点id  |              |
| vote      | num    | 投票选择  | **见上表** |
| content   | str    | 观点内容  |              |
| attr      | num    | 是否匿名    | 0：匿名<br />1：不匿名 |
| hate      | num    | 喜欢人数  |              |
| like      | num    | 不喜欢人数 |             |

**示例：**

查看案件`1239790`的众议观点，每页10项，查看第一页

```shell
curl -G 'https://api.bilibili.com/x/credit/jury/case/opinion' \
--data-urlencode 'cid=1239790' \
--data-urlencode 'ps=10' \
--data-urlencode 'pn=1' \
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "count": 23,
        "opinion": [
            {
                "opid": 250943982,
                "vote": 2,
                "content": "不懂，正常的科普也有人杠吗？没文化真可怕",
                "attr": 0,
                "hate": 0,
                "like": 0
            },
            {
                "mid": 59894,
                "face": "http://i2.hdslb.com/bfs/face/0cc48fc40867537d5a09a125e90f76183efbfdfa.gif",
                "name": "雷歐諾斯",
                "opid": 250956267,
                "vote": 2,
                "content": "这个虽然不是正确的说法，但本身是一种观点。而且已经成为一种梗了。不属于引战。",
                "attr": 1,
                "hate": 0,
                "like": 0
            },
            {
                "opid": 250956259,
                "vote": 2,
                "content": "正常科普，不构成引战。",
                "attr": 0,
                "hate": 0,
                "like": 0
            },
            {
                "mid": 215020429,
                "face": "http://i1.hdslb.com/bfs/face/1d43c302e67db4d21b9c5c0f0dc0b8786e8086d5.jpg",
                "name": "瞎子广_广告歌41",
                "opid": 250955160,
                "vote": 2,
                "content": "这个其实也没啥事真的",
                "attr": 1,
                "hate": 0,
                "like": 0
            },
            {
                "mid": 108194360,
                "face": "http://i0.hdslb.com/bfs/face/b78c92a69ff9977b7d08d4f7edc0a051a3d6ea3e.jpg",
                "name": "籽云奕",
                "opid": 250953998,
                "vote": 2,
                "content": "仅仅是科普评论，无过激言论",
                "attr": 1,
                "hate": 0,
                "like": 0
            },
            {
                "mid": 34503714,
                "face": "http://i2.hdslb.com/bfs/face/eb2d0853235a56d035303f4f3614dcb6e0cf66fa.jpg",
                "name": "十六夜紅月丶",
                "opid": 250950982,
                "vote": 2,
                "content": "无过激言论，正常科普罢了",
                "attr": 1,
                "hate": 0,
                "like": 0
            },
            {
                "opid": 250950973,
                "vote": 2,
                "content": "其实两种读法都是正确的，虽然想要纠正别人的错误。不过自己本身就错了。还是保留吧，没什么引战的",
                "attr": 0,
                "hate": 0,
                "like": 0
            },
            {
                "mid": 436136443,
                "face": "http://i1.hdslb.com/bfs/face/6b4151d8e030eddd073add6ef18ccbb00aa48d0f.jpg",
                "name": "兄弟好牛啤",
                "opid": 250950417,
                "vote": 2,
                "content": "有点经典的争议，但可能还会有人不知道",
                "attr": 1,
                "hate": 0,
                "like": 0
            },
            {
                "mid": 87385400,
                "face": "http://i2.hdslb.com/bfs/face/0f567e7fa49bcef22010f3ff78e90553d8fffb09.jpg",
                "name": "小学生de王者荣耀",
                "opid": 250950402,
                "vote": 2,
                "content": "合理纠正up主的错误，建议追究恶意举报者的责任",
                "attr": 1,
                "hate": 0,
                "like": 0
            },
            {
                "opid": 250949840,
                "vote": 2,
                "content": "正常科普，没有过激言论，建议保留",
                "attr": 0,
                "hate": 0,
                "like": 0
            }
        ]
    }
}
```

</details>
</details>
