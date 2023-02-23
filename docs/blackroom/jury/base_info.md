# 风纪委员会用户基本信息

## 基本数据

> https://api.bilibili.com/x/credit/v2/jury/jury

*请求方式：GET*

认证方式：Cookie（SESSDATA）或 APP

**url 参数：**

| 参数名     | 类型 | 内容           | 必要性       | 备注 |
| ---------- | ---- | -------------- | ------------ | ---- |
| access_key | str  | APP 登录 Token | APP 方式必要 |      |

**json 回复：**

根对象：

| 字段    | 类型   | 内容     | 备注                          |
| ------- | ------ | -------- | ----------------------------- |
| code    | num    | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str    | 信息     | 默认为 0                      |
| ttl     | num    | 1        |                               |
| data    | object | 数据本体 |                               |

`data` 对象：

| 字段         | 类型 | 内容         | 备注                                                                                               |
| ------------ | ---- | ------------ | -------------------------------------------------------------------------------------------------- |
| allow_apply  | bool | true         | 尚不明确（用户从未担任风纪委员时也为 true）                                                        |
| apply_status | num  | 任期审核状态 | -1 资格失效，且未申请<br />0 刚申请连任时<br />5 申请后，等待审核<br />3 申请连任成功，status 为 1 |
| case_total   | num  | 总众裁数     |                                                                                                    |
| err_msg      | str  | 空           | 尚不明确                                                                                           |
| face         | str  | 用户头像 url |                                                                                                    |
| status       | num  | 当前资格状态 | 0 未曾拥有资格<br />1 任期内<br />2 资格失效                                                       |
| term_end     | num  | 任期结束时间 | 时间戳（秒级），无任期时为 0                                                                       |
| uname        | str  | 用户昵称     |                                                                                                    |

## 基本数据(旧API)

部分字段信息停留在 2021 年 10 月。

<details>
<summary>查看折叠内容：</summary>

> https://api.bilibili.com/x/credit/jury/jury

根数据与新 API 一致，`data` 对象：

| 字段       | 类型 | 内容                 | 备注                         |
| ---------- | ---- | -------------------- | ---------------------------- |
| caseTotal  | num  | 总众裁数             |                              |
| face       | str  | 用户头像 url         |                              |
| restDays   | num  | 当前资格剩余天数     | 自 2021 年 10 月起，固定为 0 |
| rightRadio | num  | 当前裁决正确率百分比 | 裁决数小于 3 时固定为 50     |
| status     | num  | 当前状态             | 1：具有资格<br />2：资格失效 |
| uname      | str  | 用户昵称             |                              |

</details>

## 统计信息

新API(2021年10月任期之后)

>https://api.bilibili.com/x/credit/v2/jury/kpi

*方式：GET*

认证方式：Cookie

**备注**：该api只收录2021年10月开始，风纪委员改版之后的数据，且每次只返回一次任期的数据。

**url参数：**

| 参数名  | 类型 | 内容    | 必要性       | 备注                                   |
| ------- | ---- | ------- | ------------ | -------------------------------------- |
| term_id | num  | 任期 id | 可不传此参数或将值留空或设为`0` | 未传参或留空时，**只**返回最近一次已结束的任期的数据 |

**json回复：**

根对象：

| 字段    | 类型   | 内容     | 备注                                                         |
| ------- | ------ | -------- | ------------------------------------------------------------ |
| code    | num    | 返回值   | 0：成功<br />-101：账号未登录<br />25018：不能进行此操作（还没有成为新风纪委员，或传入了不属于你的`term_id`） |
| message | str    | 信息     | 默认为 0                                                     |
| ttl     | num    | 1        |                                                              |
| data    | object | 数据本体 |                                                              |

`data` 对象：

| 项              | 类型   | 内容               | 备注                                                         |
| --------------- | ------ | ------------------ | ------------------------------------------------------------ |
| mid             | num    | 用户 UID           |                                                              |
| uname           | str    | 留空               |                                                              |
| face            | str    | 留空               |                                                              |
| term_id         | num    | 任期 ID            | 未传入`term_id`时，返回的是最近一次已结束的任期的id          |
| term_start      | num    | 任期开始时间       | 时间戳，精确到秒                                             |
| term_end        | num    | 任期结束时间       | 时间戳，精确到秒                                             |
| case_total      | num    | 任内总投票数       |                                                              |
| active_days     | num    | 活跃天数           |                                                              |
| like_num        | num    | 发表观点，被点赞数 |                                                              |
| accuracy_rate   | num    | 投中率             | 所选观点与大多数风纪委员一致，记为一次“投中”                 |
| pass            | num    | 任期是否合格       | 0 不合格<br />1 合格                                         |
| status          | num    | 当前资格状态       | 0 未曾拥有资格<br />1 任期内<br />2 资格失效                 |
| apply_status    | num    | 当前资格申请状态   | -1 资格失效，且未申请<br />0 刚申请连任时<br />5 申请后，等待审核<br />3 申请连任成功，status 为 1 |
| prev_term_id    | num    | 上一任期的任期 ID  | 新版风纪委员启用后的第一个任期，此项的值为 0                 |
| next_term_id    | num    | 下一任期的任期 ID  | 若当前任期尚未结束，此项的值为 0                             |
| rewards         | object | 任期奖励           | 有`pendant`和`coin`两个子项                                  |
| rewards.pendant | num    | 头像挂件礼包 ID    | 合格后一般为 1，不合格为 0                                   |
| rewards.coin    | num    | 硬币礼包 ID        | 合格后一般为 3，不合格为 0                                   |

<details>
<summary>查看响应示例：</summary>

注：本示例未传入`term_id`，返回的是最近一次已结束任期的统计结果

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "mid": 10001,
        "uname": "",
        "face": "",
        "term_id": 300009,
        "term_start": 1669100000,
        "term_end": 1671690000,
        "case_total": 591,
        "active_days": 30,
        "like_num": 0,
        "accuracy_rate": 74,
        "pass": 1,
        "status": 1,
        "apply_status": 3,
        "prev_term_id": 300007,
        "next_term_id": 0,
        "rewards": {
            "pendant": 1,
            "coin": 3
        }
    }
}
```
</details>

## 统计信息(旧API)

<details>
<summary>查看折叠内容：</summary>

> https://api.bilibili.com/x/credit/jury/kpi

*方式：GET*

认证方式：Cookie（SESSDATA）或APP

**备注**：该api只统计到2021年9月任期，风纪委员改版之前。风纪委员改版之后的数据未收录

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
| voteRadio     | num  | 投中率                           |                       |
| blockedTotal  | num  | 尚不明确                         |                       |
| termStart     | num  | 任期开始时间                     | 时间戳，精确到秒      |
| termEnd       | num  | 任期结束时间（数据生成时间一致） | 时间戳，精确到秒      |
| opinion_likes | num  | 观点获赞                         |                       |

**示例：**

Cookie方式：

```shell
curl 'https://api.bilibili.com/x/credit/jury/kpi' \
-b 'SESSDATA=xxx'
```

APP方式：

```shell
curl -G 'https://api.bilibili.com/x/credit/jury/kpi' \
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

</details>
</details>

## 检查申请风纪委员会资格

> ~~https://api.bilibili.com/x/credit/jury/requirement~~ (旧版）

> https://api.bilibili.com/x/credit/v2/jury/requirement (新版)

*请求方式：GET*

认证方式：Cookie（SESSDATA）或APP

新版 api 与旧版的区别仅在新版没有 `level` 字段（新版风纪委员没有等级限制）。

只有用户~~会员等级≥Lv4、~~ 90 天内无违规、实名认证且非封禁状态才可以申请加入风纪委员会。

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
| level   | bool | 等级是否>=4      | 新版无该字段                          |
| rule    | bool | 是否90天内无违规 |                                       |

**示例：**

Cookie方式：

```shell
curl 'https://api.bilibili.com/x/credit/v2/jury/requirement' \
-b 'SESSDATA=xxx'
```

APP方式：

```shell
curl -G 'https://api.bilibili.com/x/credit/v2/jury/requirement' \
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
        "rule": true
    }
}
```

</details>
