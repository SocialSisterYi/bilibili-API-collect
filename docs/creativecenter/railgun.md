# 电磁力相关

电磁力每周日下午刷新

## 获取电磁力等级（web端）

> https://api.bilibili.com/studio/up-rating/v3/rating/info

*请求方式：GET*

认证方式：仅可Cookie（SESSDATA）

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                       |
| ttl     | num  | 1        |                               |
| data    | obj  | 信息本体 |                               |

`data`对象：

| 字段   | 类型 | 内容        | 备注             |
| ------ | ---- | ----------- | ---------------- |
| mid    | num  | 当前用户mid |                  |
| level  | num  | 电磁力等级  |                  |
| score  | num  | 电磁力分数  |                  |
| credit | num  | 信用分      |  |
| state  | num  | ? | 一直是2 |

**示例：**

```shell
curl 'https://member.bilibili.com/x/web/elec/user' \
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
        "mid": ***,
        "level": 4,
        "score": 326,
        "credit": 100,
        "state": 2,
        "update_date": 1694966400
    }
}
```

</details>

## （失效）获取电磁力详细数值（双端）

> https://api.bilibili.com/studio/up-rating/rating/summary

*请求方式：GET*

认证方式：Cookie（SESSDATA）或APP

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注 |
| ---------- | ---- | ------------ | ----------- | ---- |
| access_key | str  | APP登录Token | APP方式必要 |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | ------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                       |
| ttl     | num  | 1       |               |
| data    | obj  | 信息本体 |                               |

`data`对象：

| 字段              | 类型  | 内容           | 备注 |
| ----------------- | ---- | -------------- | ---- |
| date              | str  | 数据刷新时间      | YYYY-MM-DD |
| level             | obj  | 电磁力等级      |      |
| creative          | obj  | 创作力         |      |
| influence         | obj  | 影响力         |      |
| credit            | obj  | 信用分         |      |

`data`中的`level` `creative` `influence` `credit`对象：

| 字段     | 类型 | 内容      | 备注 |
| -------- | ---- | -------- | ---- |
| data     | num  | 数值     |      |
| prev     | num  | ？？？ | **作用尚不明确** |
| desc     | str | 描述     |      |
| date     | num  | 刷新时间 | 时间戳 |

**示例：**

Cookie方式：

```shell
curl 'https://api.bilibili.com/studio/up-rating/rating/summary' \
-b 'SESSDATA=xxx'
```

APP方式：

```shell
curl -G 'https://api.bilibili.com/studio/up-rating/rating/summary' \
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
        "date": "2020-07-05",
        "level": {
            "data": 1,
            "prev": 0,
            "desc": "正式开启创作之路，希望未来的路上我们携手相伴，创作更多优质内容~",
            "date": 1593878400
        },
        "creative": {
            "data": 39,
            "prev": 39,
            "desc": "考察近一年来的创作行为，良好的原创投稿行为和互动数据有助于提升创作力。",
            "date": 1593878400
        },
        "influence": {
            "data": 54,
            "prev": 54,
            "desc": "根据近一年活跃粉丝数据进行评估，良好的粉丝活跃度是影响力的基础。",
            "date": 1593878400
        },
        "credit": {
            "data": 100,
            "prev": 100,
            "desc": "良好的投稿记录将维持较高的信用分，违反投稿公约的行为将扣除信用分。",
            "date": 1594106147
        }
    }
}
```

</details>

## 获取电磁力数值历史变化（双端）

> https://api.bilibili.com/studio/up-rating/rating/history 

*请求方式：GET*

认证方式：Cookie（SESSDATA）或APP

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注           |
| ---------- | ---- | ------------ | ----------- | -------------- |
| access_key | str  | APP登录Token | APP方式必要 |                |
| type       | num  | 目标数据类型 | 必要        | 类型代码见下表 |

类型代码`type`：

| 代码 | 含义   |
| ---- | ------ |
| 1    | 创作力 |
| 2    | 影响力 |
| 3    | 信用分 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        |                                                   |
| data    | obj  | 信息本体 |                                                   |

`data`对象：

| 字段  | 类型  | 内容         | 备注     |
| ----- | ----- | ------------ | -------- |
| date  | array | 数据记录时间 | 每周更新 |
| score | array | 电磁力等级   | 每周更新 |

`data`中的`date`数组：

| 项   | 类型 | 内容              | 备注           |
| ---- | ---- | ----------------- | -------------- |
| 0    | str  | 1周前的日期       | MM-DD          |
| n    | str  | （n+1）周前的日期 | 与数值一一对应 |
| ……   | str  | ……                | ……             |
| 7    | str  | 8周前的日期       | 最后一条       |

`data`中的`score`数组：

| 项   | 类型 | 内容              | 备注           |
| ---- | ---- | ----------------- | -------------- |
| 0    | num  | 1周前的数值       |                |
| n    | num  | （n+1）周前的数值 | 与日期一一对应 |
| ……   | num  | ……                | ……             |
| 7    | num  | 8周前的数值       | 最后一条       |

**示例：**

查询创作力的历史变化

Cookie方式：

```shell
curl -G 'https://api.bilibili.com/studio/up-rating/rating/history' \
--data-urlencode 'type=1' \
-b 'SESSDATA=xxx'
```

APP方式：

```shell
curl -G 'https://api.bilibili.com/studio/up-rating/rating/history' \
--data-urlencode 'type=1' \
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
        "date": [
            "05-17",
            "05-24",
            "05-31",
            "06-07",
            "06-14",
            "06-21",
            "06-28",
            "07-05"
        ],
        "score": [
            48,
            48,
            49,
            49,
            49,
            49,
            49,
            49
        ]
    }
}
```

</details>
