# 众裁信息

投票类型码总览：

| 代码 | 含义 |
| - | ---- |
| 0 | 未投票 |
| 1 | 封禁 |
| 2 | 否   |
| 3 | 弃权 |
| 4 | 删除 |

## 查询投票过的单个案件

> http://api.bilibili.com/x/credit/jury/juryCase

*请求方式：GET*

认证方式：Cookie（SESSDATA）或APP

只能查询自己参与众裁的

**url参数：**

| 参数名 | 类型 | 内容          | 必要性 | 备注           |
| ------ | ------------ | ------ | ------------- | ------------- |
| access_key | str | APP登录Token | APP方式必要 |  |
| cid    | num | 案件ID     |  必要  |                |

**json回复：**

根对象：

| 字段    | 类型   | 内容      | 备注         |
| ------- | ------ | -------- | ------------ |
| code    | num    | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误<br />25010：没有权限查看案件 |
| message | str    | 信息     | 默认为0      |
| ttl     | num    | 1        |  |
| data    | obj | 数据本体   |             |

`data` 对象：

| 字段      | 类型   | 内容      | 备注         |
| --------- | ------ | -------- | ------------ |
| id        | num    | 案件ID |              |
| mid       | num    | 被举报用户UID |              |
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
| relationId | str   | 违规关系标识字 | ｛评论rpID｝-｛违规类型ID｝-｛来源对象ID｝ |
| face      | str    | 被举报用户头像url |           |
| uname     | str    | 被举报用户昵称 |              |
| vote      | num    | 我的投票 | **见上表** |
| case_type | num    | 众裁类型 | 0：小众众裁<br />1：大众众裁 |

**示例：**

查询案件`1239790`的信息

Cookie方式：

```shell
curl -G 'http://api.bilibili.com/x/credit/jury/juryCase' \
--data-urlencode 'cid=1239790' \
-b 'SESSDATA=xxx'
```

APP方式：

```shell
curl -G 'http://api.bilibili.com/x/credit/jury/juryCase' \
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

## 查询案件众裁信息

> http://api.bilibili.com/x/credit/jury/caseInfo

*请求方式：GET*

注：该接口无需登录

**url参数：**

| 参数名 | 类型 | 内容   | 必要性 | 备注 |
| ------ | ---- | ------ | ------ | ---- |
| cid    | num  | 案件ID | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型                          | 内容     | 备注                        |
| ------- | ----------------------------- | -------- | --------------------------- |
| code    | num                           | 返回值   | 0：成功<br />-400：请求错误 |
| message | str                           | 信息     | 默认为0                     |
| ttl     | num                           | 1        |                             |
| data    | 有效时：obj<br />无效时：null | 数据本体 |                             |

`data` 对象：

| 字段          | 类型 | 内容              | 备注                                                         |
| ------------- | ---- | ----------------- | ------------------------------------------------------------ |
| id            | num  | 案件ID            |                                                              |
| mid           | num  | 被举报用户UID     |                                                              |
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
| relationId    | str  | 违规关系标识字    | ｛评论rpID｝-｛违规类型ID｝-｛来源对象ID｝                   |
| face          | str  | 被举报用户头像url |                                                              |
| uname         | str  | 被举报用户昵称    |                                                              |
| vote          | num  | 0                 | 固定为0                                                      |
| case_type     | num  | 众裁类型          | 0：小众众裁<br />1：大众众裁                                 |

**示例：**

查询案件`1239790`的信息

```shell
curl -G 'http://api.bilibili.com/x/credit/jury/juryCase' \
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

## 查询我的众裁记录

> http://api.bilibili.com/x/credit/jury/caseList

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

| 项   | 类型 | 内容            | 备注         |
| ---- | ---- | --------------- | ------------ |
| 0    | obj  | 仲裁记录1       |              |
| n    | obj  | 仲裁记录（n+1） | 按照时间顺序 |
| ……   | obj  | ……              | ……           |

`data`数组中的对象：

| 字段          | 类型 | 内容              | 备注                                                         |
| ------------- | ---- | ----------------- | ------------------------------------------------------------ |
| id            | num  | 案件ID            |                                                              |
| mid           | num  | 被举报用户UID     |                                                              |
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
| relationId    | str  | 违规关系标识字    | ｛评论rpID｝-｛违规类型ID｝-｛来源对象ID｝                   |
| face          | str  | 被举报用户头像url |                                                              |
| uname         | str  | 被举报用户昵称    |                                                              |
| vote          | num  | 我的投票          | **见上表**                                                   |
| voteTime      | num  | 我的裁决时间      | 毫秒  时间戳                                                 |
| case_type     | num  | 众裁类型          | 0：小众众裁<br />1：大众众裁                                 |

**示例：**

查询我的历史众裁，第1页，每页显示1个案件

Cookie方式：

```shell
curl -G 'http://api.bilibili.com/x/credit/jury/caseList' \
--data-urlencode 'ps=1' \
--data-urlencode 'pn=1' \
-b 'SESSDATA=xxx'
```

APP方式：
```shell
curl -G 'http://api.bilibili.com/x/credit/jury/caseList' \
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

## 众议观点

> http://api.bilibili.com/x/credit/jury/case/opinion

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
| data    | obj | 数据本体   |             |

`data` 对象：

| 字段      | 类型   | 内容      | 备注         |
| --------- | ------ | -------- | ------------ |
| count     | num    | 观点总数  |              |
| opinion   | 有效时：array<br />无效时：null | 观点列表 |              |

`data` 中的`opinion` 数组：

| 项   | 类型 | 内容        | 备注         |
| ---- | ---- | ----------- | ------------ |
| 0    | obj  | 观点1       |              |
| n    | obj  | 观点（n+1） | 按照时间顺序 |
| ……   | obj  | ……          | ……           |

`opinion` 数组中的对象：

| 字段      | 类型   | 内容      | 备注         |
| --------- | ------ | -------- | ------------ |
| mid       | num    | 用户UID | 仅非匿名有此项 |
| face      | str    | 用户头像  | 仅非匿名有此项 |
| name      | str    | 用户昵称  | 仅非匿名有此项 |
| opid      | num    | 观点ID  |              |
| vote      | num    | 投票选择  | **见上表** |
| content   | str    | 观点内容  |              |
| attr      | num    | 是否匿名    | 0：匿名<br />1：不匿名 |
| hate      | num    | 喜欢人数  |              |
| like      | num    | 不喜欢人数 |             |

**示例：**

查看案件`1239790`的众议观点，每页10项，查看第一页

```shell
curl -G 'http://api.bilibili.com/x/credit/jury/case/opinion' \
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