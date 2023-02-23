# 操作

## 提交答题

### 提交基础题

> https://api.bilibili.com/x/answer/v4/base/check

*请求方式：POST*

认证方式：APP或Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名      | 类型 | 内容                     | 必要性         | 备注                                       |
| ----------- | ---- | ------------------------ | -------------- | ------------------------------------------ |
| question_id | num  | 题目id                   | 必要           | 从[拉取基础题api](fetch.md#拉取基础题)获得 |
| ans_hash    | str  | 选项hash                 | 必要           | 从[拉取基础题api](fetch.md#拉取基础题)获得 |
| csrf        | str  | CSRF Token（位于cookie） | Cookie方式必要 |                                            |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误<br />41014：答题过快或错误太多<br />41012：用户答题提交题目id不合法<br />41020：用户基础题已通过<br />41023：用户答题记录不存在 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段   | 类型 | 内容         | 备注                                |
| ------ | ---- | ------------ | ----------------------------------- |
| passed | bool | 选项是否正确 | true：选项正确<br />false：选项错误 |

**示例：**

提交题目id为`104`的题，选项hash为`cb4c8cc9424fc771f7c1598e74de498f`

```shell
curl 'https://api.bilibili.com/x/answer/v4/base/check' \
--data-urlencode 'question_id=104' \
--data-urlencode 'ans_hash=cb4c8cc9424fc771f7c1598e74de498f' \
--data-urlencode 'csrf=xxxx' \
-b 'SESSDATA=xxxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "passed": true
    }
}
```

</details>

### 提交附加题

> https://api.bilibili.com/x/answer/v4/base/check

*请求方式：POST*

认证方式：APP或Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名      | 类型 | 内容                     | 必要性         | 备注                                       |
| ----------- | ---- | ------------------------ | -------------- | ------------------------------------------ |
| question_id | num  | 题目id                   | 必要           | 从[拉取基础题api](fetch.md#拉取基础题)获得 |
| ans_hash    | str  | 选项hash                 | 必要           | 从[拉取基础题api](fetch.md#拉取基础题)获得 |
| csrf        | str  | CSRF Token（位于cookie） | Cookie方式必要 |                                            |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误<br />41014：答题过快或错误太多<br />41012：用户答题提交题目id不合法<br />41023：用户答题记录不存在 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段   | 类型 | 内容         | 备注                                |
| ------ | ---- | ------------ | ----------------------------------- |
| passed | bool | 选项是否正确 | true：选项正确<br />false：选项错误 |

**示例：**

提交题目id为`104`的题，选项hash为`cb4c8cc9424fc771f7c1598e74de498f`

```shell
curl 'https://api.bilibili.com/x/answer/v4/base/check' \
--data-urlencode 'question_id=104' \
--data-urlencode 'ans_hash=cb4c8cc9424fc771f7c1598e74de498f' \
--data-urlencode 'csrf=xxxx' \
-b 'SESSDATA=xxxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "passed": true
    }
}
```

</details>

### 提交自选题

> https://api.bilibili.com/x/answer/v4/pro/check

*请求方式：POST*

认证方式：APP或Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名      | 类型 | 内容                     | 必要性         | 备注                                       |
| ----------- | ---- | ------------------------ | -------------- | ------------------------------------------ |
| question_id | num  | 题目id                   | 必要           | 从[拉取基础题api](fetch.md#拉取基础题)获得 |
| ans_hash    | str  | 选项hash                 | 必要           | 从[拉取基础题api](fetch.md#拉取基础题)获得 |
| csrf        | str  | CSRF Token（位于cookie） | Cookie方式必要 |                                            |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误<br />41014：答题过快或错误太多<br />41012：用户答题提交题目id不合法<br />41023：用户答题记录不存在<br />41026：获取用户DB题目信息异常 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段   | 类型 | 内容 | 备注       |
| ------ | ---- | ---- | ---------- |
| passed | bool | true | 恒为`true` |

**示例：**

提交题目id为`2935`的题，选项hash为`ffd55cbe0624f466bee2ea3eb576a4d0`

```shell
curl -G 'https://api.bilibili.com/x/answer/v4/pro/check' \
--data-urlencode 'question_id=2935' \
--data-urlencode 'ans_hash=ffd55cbe0624f466bee2ea3eb576a4d0' \
--data-urlencode 'csrf=xxxx' \
-b 'SESSDATA=xxxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "passed": true
    }
}
```

</details>

## 获取验证码

> https://api.bilibili.com/x/answer/v4/captcha

*请求方式：GET*

认证方式：APP或Cookie（SESSDATA）

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误<br />41010：用户答题非法访问<br />41014：答题过快或错误太多<br />41020：用户基础题已通过<br />41021：用户基础题未通过 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段      | 类型 | 内容        | 备注          |
| --------- | ---- | ----------- | ------------- |
| type      | str  | 验证码类型? | geetest：极验 |
| gt        | str  | 极验id      |               |
| challenge | str  | 极验key     |               |
| token     | str  | (?)         |               |
| url       | str  | (?)         |               |

**示例：**

```shell
curl 'https://api.bilibili.com/x/answer/v4/captcha' \
-b 'SESSDATA=xxxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "type": "geetest",
        "gt": "abc55d1fb914cb110cfb4c232a4b4c35",
        "challenge": "90a6e03e626e13ee186ddae0107c3ae2",
        "token": "",
        "url": ""
    }
}
```

</details>

## 提交验证码

> https://api.bilibili.com/x/answer/v4/captcha/check

*请求方式：POST*

认证方式：APP或Cookie（SESSDATA）

**注：**

旧版`edition=0`同时提交自选题分类以及验证码

新版`edition=2`仅仅提交验证码

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名            | 类型 | 内容                   | 必要性         | 备注             |
| ----------------- | ---- | ---------------------- | -------------- | ---------------- |
| types             | nums | 自选题分类(旧版)       | 非必要         | 新版不需要此字段 |
| type              | str  | 验证码类型             | 非必要         |                  |
| bilibili_token    | str  |                        | 非必要         |                  |
| bilibili_code     | str  |                        | 非必要         |                  |
| geetest_challenge | str  | 极验key                | 非必要         |                  |
| geetest_seccode   | str  | 极验结果+\|jordan      | 非必要         |                  |
| geetest_validate  | str  | 极验结果               | 非必要         |                  |
| csrf              | str  | CSRF Token(位于cookie) | Cookie方式必要 |                  |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-105：验证码错误<br />-400：请求错误<br />41010：用户答题非法访问<br />41014：答题过快或错误太多<br />41021：用户基础题未通过<br />41031：自选题未通过 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

```shell
curl 'https://api.bilibili.com/x/answer/v4/captcha/check' \
--data-urlencode 'types=' \
--data-urlencode 'type=geetest' \
--data-urlencode 'bilibili_token=' \
--data-urlencode 'bilibili_code=' \
--data-urlencode 'geetest_challenge=3f809a7a9c51edca751fd26c032c182d' \
--data-urlencode 'geetest_seccode=513ec576a275a3eb250829202d4dce46|jordan' \
--data-urlencode 'geetest_validate=513ec576a275a3eb250829202d4dce46' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxxx'
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

## 提交自选题分类

> https://api.bilibili.com/x/answer/v4/pro/type/check

*请求方式：POST*

认证方式：APP或Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                   | 必要性         | 备注 |
| ------ | ---- | ---------------------- | -------------- | ---- |
| types  | nums | 自选题分类(新版)       | 必要           |      |
| csrf   | str  | CSRF Token(位于cookie) | Cookie方式必要 |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误<br />41010：用户答题非法访问<br />41014：答题过快或错误太多<br />41021：用户基础题未通过<br />41031：自选题未通过<br />41052：用户题目类型不合法<br />41055：基础附加题未通过 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

选择`游戏` `影视` `科教/知识` `动画/动漫`分类

```shell
curl 'https://api.bilibili.com/x/answer/v4/pro/type/check' \
--data-urlencode 'types=1,2,3,4' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxxx'
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

## 提前交卷

> https://api.bilibili.com/x/answer/v4/submit

*请求方式：POST*

认证方式：APP或Cookie（SESSDATA）

当当前得分>=60时，可请求本接口提前完成答题

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                   | 必要性         | 备注 |
| ------ | ---- | ---------------------- | -------------- | ---- |
| csrf   | str  | CSRF Token(位于cookie) | Cookie方式必要 |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误<br />41014：答题过快或错误太多<br />41023：用户答题记录不存在<br />41031：自选题未通过 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段         | 类型 | 内容             | 备注                                         |
| ------------ | ---- | ---------------- | -------------------------------------------- |
| hid          | num  | 答题会话id       |                                              |
| mid          | num  | 答题用户mid      |                                              |
| score        | num  | 得分             |                                              |
| status       | num  | 0                |                                              |
| number       | num  | 0                |                                              |
| result       | str  | succeed          |                                              |
| stage        | str  | result           |                                              |
| version      | str  | 版本             | 目前为`v4`                                   |
| start_time   | num  | 本次答题开始时间 | 时间戳                                       |
| first_answer | num  | 0                |                                              |
| progress     | str  |                  |                                              |
| text         | str  |                  |                                              |
| url          | str  |                  |                                              |
| in_reg_audit | bool |                  |                                              |
| edition      | num  | 答题版本         | 0：旧版（40+10+50）<br />2：新版（40+30+30） |
| rewards      | null |                  |                                              |
| captcha      | num  | 1                |                                              |

**示例：**

```shell
curl 'https://api.bilibili.com/x/answer/v4/submit' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "hid": 1623207905520705,
        "mid": 293793435,
        "score": 63,
        "status": 3,
        "number": 0,
        "result": "succeed",
        "stage": "result",
        "version": "v4",
        "start_time": 1636889218,
        "first_answer": 0,
        "progress": "",
        "text": "",
        "url": "",
        "in_reg_audit": false,
        "edition": 0,
        "rewards": null,
        "captcha": 1
    }
}
```

</details>
