# 仲裁操作

## 申请加入风纪委员会

> https://api.bilibili.com/x/credit/v2/jury/apply

*请求方式：POST*

认证方式：Cookie

只有用户会员90天内无违规、实名认证且非封禁状态才可以申请加入风纪委员会


申请成功后可获得30天资格

**正文参数（ application/x-www-form-urlencoded）：**

| 参数名 | 类型 | 内容                   | 必要性 |
| ------ | ---- | ---------------------- | ------ |
| csrf   | str  | cookie中`bili_jct`的值 | 必要   |

**json回复：**

根对象：

| 字段    | 类型 | 内容   | 备注                                                         |
| ------- | ---- | ------ | ------------------------------------------------------------ |
| code    | num  | 返回值 | 0：成功<br />-101：账号未登录<br />-111：csrf 校验失败<br />25001：申请等级限制(会员等级<3)<br />25002：没有实名认证<br />25003：90天内有封禁记录<br />25013：不能重复申请风纪委资格<br />25016：当日风纪委员名额已发完 |
| message | str  | 信息   | 默认为0                                                      |
| ttl     | num  | 1      |                                                              |


<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

</details>

#### 旧API
<details>
<summary>查看旧版API：</summary>

> https://api.bilibili.com/x/credit/jury/apply

*请求方式：POST*

认证方式：Cookie（SESSDATA）或APP

只有用户会员等级≥Lv4、90天内无违规、实名认证且非封禁状态才可以申请加入风纪委员会

每日10:00开放新名额

申请成功后可获得30天资格

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名     | 类型 | 内容                     | 必要性         | 备注 |
| ---------- | ---- | ------------------------ | -------------- | ---- |
| access_key | str  | APP登录Token             | APP方式必要    |      |
| csrf       | str  | CSRF Token（位于cookie） | Cookie方式必要 |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容   | 备注                                                         |
| ------- | ---- | ------ | ------------------------------------------------------------ |
| code    | num  | 返回值 | 0：成功<br />-101：账号未登录<br />-111：csrf 校验失败<br />25001：申请等级限制(会员等级<3)<br />25002：没有实名认证<br />25003：90天内有封禁记录<br />25013：不能重复申请风纪委资格<br />25016：当日风纪委员名额已发完 |
| message | str  | 信息   | 默认为0                                                      |
| ttl     | num  | 1      |                                                              |

**示例：**

Cookie方式：

```shell
curl 'https://api.bilibili.com/x/credit/jury/apply' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

APP方式：

```shell
curl 'https://api.bilibili.com/x/credit/jury/apply' \
--data-urlencode 'access_key=xxx'
```
<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

</details>
</details>

## 拉取新案件

> https://api.bilibili.com/x/credit/v2/jury/case/next

*请求方式：GET*

认证方式：Cookie

**标头参数（Headers）：**

| 参数名 | 类型 | 内容   | 必要性 | 备注 |
| ------ | ---- | ------ | ------ | ---- |
| Cookie | str  | Cookie | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型   | 内容     | 备注                                                         |
| ------- | ------ | -------- | ------------------------------------------------------------ |
| code    | num    | 返回值   | 0：成功<br/>25006：风纪委员资格已过期<br />25008：没有案件<br/>25014：已审满 |
| message | str    | 信息     | 默认为0，当code不为0时，显示错误信息                         |
| ttl     | num    | 1        | 作用尚不明确                                                 |
| data    | object | 数据本体 |                                                              |

`data`对象：

| 字段    | 类型 | 内容       | 备注 |
| ------- | ---- | ---------- | ---- |
| case_id | str  | 仲裁案件id |      |

**示例：**

Cookie方式：

```shell
curl -G 'https://api.bilibili.com/x/credit/v2/jury/case/next' \
--header 'cookie: XXXXX'
```


<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "case_id": "AC2m4HlrIrHv"
    }
}
```

</details>

#### 旧API
<details>
<summary>查看旧版API：</summary>

> https://api.bilibili.com/x/credit/jury/caseObtain

*请求方式：POST*

认证方式：Cookie（SESSDATA）或APP

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名     | 类型 | 内容                     | 必要性         | 备注 |
| ---------- | ---- | ------------------------ | -------------- | ---- |
| access_key | str  | APP登录Token             | APP方式必要    |      |
| csrf       | str  | CSRF Token（位于cookie） | Cookie方式必要 |      |

**json回复：**

根对象：

| 字段    | 类型   | 内容     | 备注                                                         |
| ------- | ------ | -------- | ------------------------------------------------------------ |
| code    | num    | 返回值   | 0：成功<br/>25005：不是风纪委员<br />25008：没有案件<br/>25014：已审满 |
| message | str    | 信息     | 默认为0                                                      |
| ttl     | num    | 1        | 作用尚不明确                                                 |
| data    | object | 数据本体 |                                                              |

`data`对象：

| 字段 | 类型 | 内容       | 备注 |
| ---- | ---- | ---------- | ---- |
| id   | num  | 仲裁案件id |      |

**示例：**

Cookie方式：

```shell
curl 'https://api.bilibili.com/x/credit/jury/caseObtain' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

APP方式：

```shell
curl 'https://api.bilibili.com/x/credit/jury/caseObtain' \
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
        "id": 1239790
    }
}
```

</details>
</details>


## 进行仲裁投票

> https://api.bilibili.com/x/credit/v2/jury/vote

*请求方式：POST*

认证方式：Cookie

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名    | 类型 | 内容                   | 必要性 | 备注                                                  |
| --------- | ---- | ---------------------- | ------ | ----------------------------------------------------- |
| case_id   | str  | 案件id                 | 必要   |                                                       |
| vote      | num  | 投票类型               | 必要   | 见「[众裁信息](judgement_info.md)」中表               |
| insiders  | num  | 是否观看此类视频       | 非必要 | 默认值为0<br/>见「[众裁信息](judgement_info.md)」中表 |
| content   | str  | 理由                   | 非必要 |                                                       |
| anonymous | num  | 是否匿名               | 非必要 | 默认值为0<br/>0：不匿名<br />1：匿名                  |
| csrf      | str  | cookie中`bili_jct`的值 | 必要   |                                                       |

**json回复：**

根对象：

| 字段    | 类型 | 内容   | 备注                                                         |
| ------- | ---- | ------ | ------------------------------------------------------------ |
| code    | num  | 返回值 | 0：成功<br/>-101：未登录<br />-111：csrf 错误<br />-400：请求错误（投票类型错误）<br />25005：不是风纪委员<br />25011：投票类型错误<br />25018：不能进行此操作<br/><br/>*注：新版本对于一个不存在的`case_id`，不会报错。* |
| message | str  | 信息   | 默认为0                                                      |
| ttl     | num  | 1      | 作用尚不明确                                                 |


<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

</details>

#### 旧API
<details>
<summary>查看旧版API：</summary>
> https://api.bilibili.com/x/credit/jury/vote

*请求方式：POST*

认证方式：Cookie（SESSDATA）或APP

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名        | 类型 | 内容                     | 必要性         | 备注                                    |
| ------------- | ---- | ------------------------ | -------------- | --------------------------------------- |
| cid           | num  | 案件id                   | 必要           |                                         |
| vote          | num  | 投票类型                 | 必要           | 见「[众裁信息](judgement_info.md)」中表 |
| content       | str  | 理由                     | 非必要         | 见「[众裁信息](judgement_info.md)」中表 |
| likes         | nums | 支持的观点               | 非必要         |                                         |
| hates         | nums | 反对的观点               | 非必要         |                                         |
| attr          | num  | 是否匿名                 | 非必要         | 0：匿名<br />1：不匿名                  |
| apply_type    | num  | 是否更改原因             | 非必要         | 0：保持原来原因<br />1：投票给新原因    |
| origin_reason | num  | 原始原因                 | 非必要         | 见「封禁公示」中表                      |
| apply_reason  | num  | 新原因                   | 非必要         | 见「封禁公示」中表                      |
| csrf          | str  | CSRF Token（位于cookie） | Cookie方式必要 |                                         |

**json回复：**

根对象：

| 字段    | 类型 | 内容   | 备注                                                         |
| ------- | ---- | ------ | ------------------------------------------------------------ |
| code    | num  | 返回值 | 0：成功<br/>-101：未登录<br />-111：csrf 错误<br />-400：请求错误（投票类型错误）<br />25005：不是风纪委员<br />25009： 案件不存在<br/>25011：投票类型错误<br />25012：重复投票 |
| message | str  | 信息   | 默认为0                                                      |
| ttl     | num  | 1      | 作用尚不明确                                                 |

**示例：**

为案件`2333`投票，建议封禁，无理由，不匿名，无支持/反对观点，不修改投票原因

Cookie方式：

```shell
curl 'https://api.bilibili.com/x/credit/jury/vote' \
--data-urlencode 'cid=2333' \
--data-urlencode 'vote=1' \
--data-urlencode 'content=' \
--data-urlencode 'likes=' \
--data-urlencode 'hates=' \
--data-urlencode 'attr=1' \
--data-urlencode 'apply_type=0' \
--data-urlencode 'origin_reason=' \
--data-urlencode 'apply_reason=' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

APP方式：

```shell
curl 'https://api.bilibili.com/x/credit/jury/vote' \
--data-urlencode 'access_key=xxx' \
--data-urlencode 'cid=2333' \
--data-urlencode 'vote=1' \
--data-urlencode 'content=' \
--data-urlencode 'likes=' \
--data-urlencode 'hates=' \
--data-urlencode 'attr=1' \
--data-urlencode 'apply_type=0' \
--data-urlencode 'origin_reason=' \
--data-urlencode 'apply_reason='
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

</details>
</details>