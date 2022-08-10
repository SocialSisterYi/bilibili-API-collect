# 风纪委员会用户基本信息

- [基本数据](#基本数据)
- [统计信息](#统计信息)
- [检查申请风纪委员会资格](#检查申请风纪委员会资格)

---

## 基本数据

> http://api.bilibili.com/x/credit/jury/jury

*请求方式：GET*

认证方式：Cookie（SESSDATA）或APP

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注 |
| ---------- | ---- | ------------ | ----------- | ---- |
| access_key | str  | APP登录Token | APP方式必要 |      |

**json回复：**

根对象：

| 字段    | 类型   | 内容     | 备注                          |
| ------- | ------ | -------- | ----------------------------- |
| code    | num    | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str    | 信息     | 默认为0                       |
| ttl     | num    | 1        |                               |
| data    | object | 数据本体 |                               |

`data` 对象：

| 字段       | 类型 | 内容                 | 备注                         |
| ---------- | ---- | -------------------- | ---------------------------- |
| caseTotal  | num  | 总众裁数             |                              |
| face       | str  | 用户头像url          |                              |
| restDays   | num  | 当前资格剩余天数     |                              |
| rightRadio | num  | 当前裁决正确率百分比 | 裁决数小于3时固定为50        |
| status     | num  | 当前状态             | 1：具有资格<br />2：资格失效 |
| uname      | str  | 用户昵称             |                              |

**示例：**

Cookie方式：

```shell
curl 'http://api.bilibili.com/x/credit/jury/jury' \
-b 'SESSDATA=xxx'
```

APP方式：

```shell
curl -G 'http://api.bilibili.com/x/credit/jury/jury' \
--data-urlencode 'access_key=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "caseTotal": 7,
        "face": "http://i1.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg",
        "restDays": 30,
        "rightRadio": 80,
        "status": 1,
        "uname": "社会易姐QwQ"
    }
}
```

</details>

## 统计信息

#### 旧API

> http://api.bilibili.com/x/credit/jury/kpi （旧）

*方式：GET*

认证方式：Cookie（SESSDATA）或APP

***备注**：该api只统计到2021年9月任期，风纪委员改版之前。风纪委员改版之后的数据未收录*

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注 |
| ---------- | ---- | ------------ | ----------- | ---- |
| access_key | str  | APP登录Token | APP方式必要 |      |

**json回复：**

根对象：

| 字段    | 类型  | 内容     | 备注                          |
| ------- | ----- | -------- | ----------------------------- |
| code    | num   | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str   | 信息     | 默认为0                       |
| ttl     | num   | 1        |                               |
| data    | array | 数据本体 |                               |

`data`数组：

| 项   | 类型 | 内容              | 备注 |
| ---- | ---- | ----------------- | ---- |
| 0    | obj  | 第1个月统计       |      |
| n    | obj  | 第（n+1）个月统计 |      |
| ……   | obj  | ……                | ……   |

`data` 数组中的对象：

| 字段          | 类型 | 内容                             | 备注                  |
| ------------- | ---- | -------------------------------- | --------------------- |
| id            | num  | 0                                |                       |
| mid           | num  | 用户id                           |                       |
| number        | num  | 风纪委员编号                     |                       |
| day           | num  | 数据生成时间（也是任期结束时间） | 时间戳，精确到秒      |
| rate          | num  | 任期完成度                       | 1=A；2=S；3=S+；4=S++ |
| rank          | num  | 尚不明确                         |                       |
| rankper       | num  | 尚不明确                         |                       |
| rankTotal     | num  | 尚不明确                         |                       |
| point         | num  | 32767                            |                       |
| activeDays    | num  | 活跃天数                         |                       |
| voteTotal     | num  | 投票总数                         |                       |
| voteRadio     | num  | 尚不明确                         |                       |
| blockedTotal  | num  | 尚不明确                         |                       |
| termStart     | num  | 任期开始时间                     | 时间戳，精确到秒      |
| termEnd       | num  | 任期结束时间（数据生成时间一致） | 时间戳，精确到秒      |
| opinion_likes | num  | 观点获赞                         |                       |

**示例：**

Cookie方式：

```shell
curl 'http://api.bilibili.com/x/credit/jury/kpi' \
-b 'SESSDATA=xxx'
```

APP方式：

```shell
curl -G 'http://api.bilibili.com/x/credit/jury/kpi' \
--data-urlencode 'access_key=xxx'
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

#### 新API（2021年10月任期之后）

>https://api.bilibili.com/x/credit/v2/jury/kpi

*方式：GET*

认证方式：Cookie

***备注**：该api只收录2021年10月开始，风纪委员改版之后的数据，且每次只返回一次任期的数据。*

**url参数：**

| 参数名  | 类型 | 内容    | 必要性       | 备注                                   |
| ------- | ---- | ------- | ------------ | -------------------------------------- |
| term_id | num  | 任期 id | 可不填或留空 | 不填或留空时，**只**返回上一任期的数据 |

**json回复：**

根对象**同旧版API**

`data` 数组：

| 项              | 类型 | 内容               | 备注                                          |
| --------------- | ---- | ------------------ | --------------------------------------------- |
| mid             | num  | 7156596            | 用户 UID                                      |
| uname           | NULL | 留空               |                                               |
| face            | NULL | 留空               |                                               |
| term_id         | num  | 任期 ID            |                                               |
| term_start      | num  | 任期开始时间       | 时间戳，精确到秒                              |
| term_end        | num  | 任期结束时间       | 时间戳，精确到秒                              |
| case_total      | num  | 任内总投票数       |                                               |
| active_days     | num  | 活跃天数           |                                               |
| like_num        | num  | 发表观点，被点赞数 |                                               |
| accuracy_rate   | num  | 投中率             | 所选观点与大多数风纪委员一致，记为一次“投中”  |
| pass            | num  | 1                  | 尚不明确                                      |
| status          | num  | 1                  | 尚不明确                                      |
| apply_status    | num  | 3                  | 尚不明确                                      |
| prev_term_id    | num  | 上一任期的任期ID   | 新版风纪委员启用后的第一个任期，此项的值为0   |
| next_term_id    | num  | 下一任期的任期ID   | 本次任期统计结果未出来时，上一任期此项的值为0 |
| rewards.pendant | num  | 头像挂件礼包 ID |  |
| rewards.coin    | num  | 硬币礼包 ID |                                               |



</details>

## 检查申请风纪委员会资格

> http://api.bilibili.com/x/credit/jury/requirement

*请求方式：GET*

认证方式：Cookie（SESSDATA）或APP

只有用户会员等级≥Lv4、90天内无违规、实名认证且非封禁状态才可以申请加入风纪委员会

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注 |
| ---------- | ---- | ------------ | ----------- | ---- |
| access_key | str  | APP登录Token | APP方式必要 |      |

**json回复：**

根对象：

| 字段    | 类型   | 内容     | 备注                          |
| ------- | ------ | -------- | ----------------------------- |
| code    | num    | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str    | 信息     | 默认为0                       |
| ttl     | num    | 1        |                               |
| data    | object | 数据本体 |                               |

`data` 对象：

| 字段    | 类型 | 内容             | 备注                                  |
| ------- | ---- | ---------------- | ------------------------------------- |
| blocked | bool | 是否被封禁       | true：是<br />false：否<br />**下同** |
| cert    | bool | 是否实名认证     |                                       |
| level   | bool | 等级是否>=4      |                                       |
| rule    | bool | 是否90天内无违规 |                                       |

**示例：**

Cookie方式：

```shell
curl 'http://api.bilibili.com/x/credit/jury/requirement' \
-b 'SESSDATA=xxx'
```

APP方式：

```shell
curl -G 'http://api.bilibili.com/x/credit/jury/requirement' \
--data-urlencode 'access_key=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "blocked": false,
        "cert": true,
        "level": true,
        "rule": true
    }
}
```

</details>
