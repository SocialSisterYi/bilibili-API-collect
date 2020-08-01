# 众裁信息

**本页所有操作均需登录（SESSDATA）**

投票类型码总览：

| 代码 | 意义 |
| - | ---- |
| 1 | 封禁 |
| 2 | 否   |
| 3 | 弃权 |
| 4 | 删除 |

## 基本数据

> <https://api.bilibili.com/x/credit/jury/jury>

*方式：GET*

**JSON回复：**

根对象：

| 字段    | 类型   | 内容      | 备注         |
| ------- | ------ | -------- | ------------ |
| code    | num    | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str    | 信息     | 默认为0      |
| ttl     | num    | 1        | 作用尚不明确 |
| data    | object | 数据     |             |

`data` 对象：

| 字段      | 类型   | 内容      | 备注         |
| --------- | ------ | -------- | ------------ |
| caseTotal | num    | 众裁数    |             |
| face      | str    | 头像url   |             |
| restDays  | num    | 剩余天数  |              |
| rightRadio | num   | 尚不明确  |              |
| status    | num    | 状态      | 无法测试，猜测1为风纪委员 |
| uname     | str    | 用户名    |              |

**示例：**

查询我的数据

<https://api.bilibili.com/x/credit/jury/jury>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "caseTotal": 9205,
        "face": "http://i1.hdslb.com/bfs/face/aef00604488a2430a73eac4sd9e9890b7f3a5a3e.jpg",
        "restDays": 27,
        "rightRadio": 92,
        "status": 1,
        "uname": "myusername"
    }
}
```

## 统计信息

> <https://api.bilibili.com/x/credit/jury/kpi>

*方式：GET*

**JSON回复：**

根对象：

| 字段    | 类型   | 内容      | 备注         |
| ------- | ------ | -------- | ------------ |
| code    | num    | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str    | 信息     | 默认为0      |
| ttl     | num    | 1        | 作用尚不明确 |
| data    | array  | 每月统计  |             |

`data` 数组中的每个对象：

| 字段      | 类型   | 内容      | 备注         |
| --------- | ------ | -------- | ------------ |
| id        | num    | 0        |             |
| mid       | num    | 用户id   |             |
| number    | num    | 尚不明确 |              |
| day       | num    | 开始时间 |              |
| rate      | num    | 尚不明确 |              |
| rank      | num    | 尚不明确 |              |
| rankper   | num    | 尚不明确 |              |
| rankTotal | num    | 尚不明确 |              |
| point     | num    | 32767   |              |
| activeDays | num   | 活跃天数 |              |
| voteTotal | num    | 投票总数 |              |
| voteRadio | num    | 尚不明确 |              |
| blockedTotal | num | 尚不明确 |              |
| termStart | num    | 尚不明确 |              |
| termEnd   | num    | 尚不明确 |              |
| opinion_likes | num | 观点获赞 |             |

**示例：**

查询我的数据(删减至只有一个周期的)

<https://api.bilibili.com/x/credit/jury/kpi>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": [
        {
            "id": 0,
            "mid": 114343368,
            "number": 199046,
            "day": 1539792000,
            "rate": 1,
            "rank": 0,
            "rankper": 1,
            "rankTotal": 39584,
            "point": 32767,
            "activeDays": 23,
            "voteTotal": 422,
            "voteRadio": 0,
            "blockedTotal": 0,
            "termStart": 1537200000,
            "termEnd": 1539792000,
            "opinion_likes": 18
        }
    ]
}
```

## 查询单个案件

> <https://api.bilibili.com/x/credit/jury/juryCase>

只能查询我参与众裁的

*方式：GET*

**url参数：**

| 参数名 | 内容          | 必要性 | 备注           |
| ------ | ------------ | ------ | ------------- |
| cid    | 案件id       |  必要  |                |

**JSON回复：**

根对象：

| 字段    | 类型   | 内容      | 备注         |
| ------- | ------ | -------- | ------------ |
| code    | num    | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str    | 信息     | 默认为0      |
| ttl     | num    | 1        | 作用尚不明确 |
| data    | object | 数据     |             |

`data` 对象：

| 字段      | 类型   | 内容      | 备注         |
| --------- | ------ | -------- | ------------ |
| id        | num    | 案件id   |              |
| mid       | num    | 用户id   |              |
| status    | num    | 状态     | 4:已裁决<br />6:未裁决 |
| statusTitle | str  | 封禁7/15天 | 就是这样的  |
| originType | num   | 来源类型 | 需要对照表    |
| reasonType | num   | 原因类型 | 需要对照表    |
| punishTitle | str  | 处罚原因 |              |
| judgeType | num    | 裁决类型 | 0:未裁决<br/>1:违规<br/>2:不违规 | originUrl | str    | 来源地址 |              |
| blockedDays | num  | 封禁天数 |              |
| putTotal  | num    | 尚不明确 |              |
| voteRule  | num    | 投不违规 |              |
| voteBreak | num    | 建议封禁 |              |
| voteDelete | num    | 建议删除 |             |
| startTime | num    | 尚不明确 |              |
| endTime   | num    | 尚不明确 |              |
| ctime     | num    | 尚不明确 |              |
| mtime     | num    | 尚不明确 |              |
| originTitle | str  | 来源标题 |              |
| relationId | str   | 尚不明确 |              |
| face      | str    | 用户头像url |           |
| uname     | str    | 用户id   |              |
| vote      | num    | 投票类型 |              |
| case_type | num    | 尚不明确 |              |

**示例：**

查询案件`1239790`的信息

<https://api.bilibili.com/x/credit/jury/juryCase?cid=1239790>

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

## 众裁记录

> <https://api.bilibili.com/x/credit/jury/caseList>

*方式：GET*

**url参数：**

| 参数名 | 内容          | 必要性 | 备注           |
| ------ | ------------ | ------ | ------------- |
| pn     | 页码         | 非必要  | 无上限         |
| ps     | 每页显示数量  | 非必要  | 默认30, 最大30 |

**JSON回复：**

根对象：

| 字段    | 类型   | 内容      | 备注         |
| ------- | ------ | -------- | ------------ |
| code    | num    | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str    | 信息     | 默认为0      |
| ttl     | num    | 1        | 作用尚不明确 |
| data    | array  | 数据     |             |

`data` 数组中的每个对象与获取单个案件信息相比

缺少`statusTitle`

增加`voteTime`, 内容为我的投票时间(毫秒)

**示例：**

查询我的历史众裁，第1页，每页显示1个案件

<https://api.bilibili.com/x/credit/jury/caseList?pn=1&ps=1>

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

## 众议观点

> <https://api.bilibili.com/x/credit/jury/case/opinion>

*方式：GET*

**url参数：**

| 参数名 | 内容          | 必要性 | 备注           |
| ------ | ------------ | ------ | ------------- |
| cid    | 案件id       | 必要    |               |
| pn     | 页码         | 非必要  |               |
| ps     | 每页显示数量  | 非必要  |               |

**JSON回复：**

根对象：

| 字段    | 类型   | 内容      | 备注         |
| ------- | ------ | -------- | ------------ |
| code    | num    | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str    | 信息     | 默认为0      |
| ttl     | num    | 1        | 作用尚不明确 |
| data    | object | 数据     |             |

`data` 对象:

| 字段      | 类型   | 内容      | 备注         |
| --------- | ------ | -------- | ------------ |
| count     | num    | 观点总数  |              |
| opinion   | array  | 观点数组  |              |

`data` 对象中 `opinion` 数组的每个对象:

前三个仅非匿名观点有

| 字段      | 类型   | 内容      | 备注         |
| --------- | ------ | -------- | ------------ |
| mid       | num    | 用户id    |              |
| face      | str    | 用户头像  |              |
| name      | str    | 用户名    |              |
| opid      | num    | 观点id    |              |
| vote      | num    | 投票选择  |              |
| content   | str    | 观点内容  |              |
| attr      | num    | 1        | 作用尚不明确  |
| hate      | num    | 喜欢人数  |              |
| like      | num    | 不喜欢人数 |             |

**示例：**

查看案件`1239790`的众议观点

<https://api.bilibili.com/x/credit/jury/case/opinion?cid=1239790>

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

## 获取案件

> <https://api.bilibili.com/x/credit/jury/caseObtain>

参数为`csrf`, 必选

*方式：POST*

**json回复：**

根对象：

| 字段    | 类型   | 内容      | 备注         |
| ------- | ------ | -------- | ------------ |
| code    | num    | 返回值   | 0: 成功<br/>25008: 没有案件<br/>25014: 已审满 |
| message | str    | 信息     | 默认为0      |
| ttl     | num    | 1        | 作用尚不明确 |
| data    | object | 数据     |             |

**示例：**

获取一个案件

<https://api.bilibili.com/x/credit/jury/caseObtain>

参数:

```json
{
    "csrf": "38e17ae249a8ea498eaea56a9743aa85a"
}
```

回复：

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "id": 1239790
    }
}
```

## 进行众裁

> <https://api.bilibili.com/x/credit/jury/vote>

参数为`csrf`, 必选

*方式：POST*

**正文参数：**

| 参数名   | 类型 | 内容             | 必要性 | 备注       |
| ------- | ---- | ---------------- | ------ | ----------|
| cid     | num  | 案件id           | 必要   |           |
| vote    | num  | 投票类型         | 必要   |            |
| content | str  | 理由             | 非必要 |            |
| csrf    | str  | csrf            | 必要   |            |

**json回复：**

根对象：

| 字段    | 类型   | 内容      | 备注         |
| ------- | ------ | -------- | ------------ |
| code    | num    | 返回值   | 0: 成功<br/>25009: 案件不存在<br/>25012: 重复投票 |
| message | str    | 信息     | 默认为0      |
| ttl     | num    | 1        | 作用尚不明确 |
| data    | object | 数据     |             |

**示例：**

给某个案件进行建议删除投票，没有理由

<https://api.bilibili.com/x/credit/jury/vote>

参数:

```json
{
    "cid": 1234567,
    "vote": 4,
    "csrf": "38e17ae249a8ea498eaea56a9743aa85a"
}
```

回复：

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
