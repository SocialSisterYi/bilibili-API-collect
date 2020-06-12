# 个人中心

**本页所有操作均需登录（SESSDATA）**

## 获取我的信息

> http://api.bilibili.com/x/member/web/account

*方式:GET*

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                       |
| ttl     | num  | 1        | 作用尚不明确                  |
| data    | obj  | 信息本体 |                               |

`data`对象：

| 字段      | 类型 | 内容           | 备注                                    |
| --------- | ---- | -------------- | --------------------------------------- |
| mid       | num  | 我的UID        |                                         |
| uname     | str  | 我的昵称       |                                         |
| userid    | str  | 我的用户名     |                                         |
| sign      | str  | 我的签名       |                                         |
| birthday  | str  | 我的生日       | YYYY-MM-DD                              |
| sex       | str  | 我的性别       | 男 女 保密                              |
| nick_free | bool | 是否未设置昵称 | false：设置过昵称<br />true：未设置昵称 |
| rank      | str  | 我的会员等级   |                                         |

**示例：**

http://api.bilibili.com/x/member/web/account

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "mid": 293793435,
        "uname": "社会易姐QwQ",
        "userid": "bili_84675323391",
        "sign": "高中技术宅一枚，爱好MC&电子&音乐&数码&编程，资深猿厨",
        "birthday": "2002-03-05",
        "sex": "男",
        "nick_free": false,
        "rank": "正式会员"
    }
}
```



## 查询每日奖励状态

> http://api.bilibili.com/x/member/web/exp/reward

*方式:GET*

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                       |
| ttl     | num  | 1        | 作用尚不明确                  |
| data    | obj  | 信息本体 |                               |

`data`对象：

| 字段          | 类型 | 内容                 | 备注                                                         |
| ------------- | ---- | -------------------- | ------------------------------------------------------------ |
| login         | bool | 每日登录             | false：未完成<br />true：已完成<br />完成奖励5经验           |
| watch         | bool | 每日观看             | false：未完成<br />true：已完成<br />完成奖励5经验           |
| coins         | num  | 每日投币所奖励的经验 | 上限为50                                                     |
| share         | bool | 每日分享             | false：未完成<br />true：已完成<br />完成奖励5经验           |
| email         | bool | 绑定邮箱             | false：未完成<br />true：已完成                              |
| tel           | bool | 绑定手机号           | false：未完成<br />true：已完成<br />首次完成完成奖励100经验 |
| safe_question | bool | 设置密保问题         | false：未完成<br />true：已完成                              |
| identify_card | bool | 实名认证             | false：未完成<br />true：已完成<br />首次完成奖励50经验      |

**示例：**

http://api.bilibili.com/x/member/web/exp/reward

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "login": true,
        "watch": true,
        "coins": 30,
        "share": true,
        "email": true,
        "tel": true,
        "safe_question": true,
        "identify_card": true
    }
}
```



## 查询大会员状态

> http://api.bilibili.com/x/vip/web/user/info

*方式:GET*

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                       |
| ttl     | num  | 1        | 作用尚不明确                  |
| data    | obj  | 信息本体 |                               |

`data`对象：

| 字段         | 类型 | 内容             | 备注                                                         |
| ------------ | ---- | ---------------- | ------------------------------------------------------------ |
| mid          | num  | 我的UID          |                                                              |
| vip_type     | num  | 大会员类型       | 0：无<br />1：月度<br />2：年度                              |
| vip_status   | num  | 大会员状态       | 1：正常<br />2：由于IP地址更换过于频繁,服务被冻结<br />3：你的大会员账号风险过高，大会员功能已被锁定 |
| vip_due_date | num  | 大会员到期时间   | 时间戳 毫秒                                                  |
| vip_pay_type | num  | 是否已购买大会员 | 0：未购买<br />1：已购买                                     |
| theme_type   | num  | 0                | 作用尚不明确                                                 |

**示例：**

http://api.bilibili.com/x/vip/web/user/info

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "mid": 293793435,
        "vip_type": 2,
        "vip_status": 1,
        "vip_due_date": 1612454400000,
        "vip_pay_type": 1,
        "theme_type": 0
    }
}
```



## 查询账号安全情况

> http://passport.bilibili.com/web/site/user/info

*方式:GET*

需要验证`DedeUserID`存在且不为0

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                       |
| ttl     | num  | 1        | 作用尚不明确                  |
| data    | obj  | 信息本体 |                               |

`data`对象：

| 字段          | 类型 | 内容             | 备注 |
| ------------- | ---- | ---------------- | ---- |
| account_info  | obj  | 账号绑定信息     |      |
| account_safe  | obj  | 密码安全信息     |      |
| account_sns   | obj  | 互联登录绑定信息 |      |
| account_other | obj  |                  |      |

`data`中的`account_info`对象：

| 字段           | 类型 | 内容           | 备注                            |
| -------------- | ---- | -------------- | ------------------------------- |
| hide_tel       | str  | 绑定的手机号   | 星号隐藏部分信息                |
| hide_mail      | str  | 绑定的邮箱     | 星号隐藏部分信息                |
| bind_tel       | bool | 是否绑定手机号 | false：未绑定<br />true：已绑定 |
| bind_mail      | bool | 是否绑定邮箱   | false：未绑定<br />true：已绑定 |
| tel_verify     | bool | 是否验证手机号 | false：未验证<br />true：已验证 |
| mail_verify    | bool | 是否验证邮箱   | false：未验证<br />true：已验证 |
| unneeded_check | bool | 是否未设置密码 | false：已设置<br />true：未设置 |

`data`中的`account_safe`对象：

| 字段      | 类型 | 内容             | 备注                          |
| --------- | ---- | ---------------- | ----------------------------- |
| Score     | num  | 当前密码强度     | 0-100                         |
| pwd_level | num  | 当前密码强度等级 | 1：弱<br />2：中<br />3：强   |
| security  | bool | 当前密码是否安全 | false：不安全<br />true：安全 |

`data`中的`account_sns`对象：

| 字段       | 类型 | 内容         | 备注                     |
| ---------- | ---- | ------------ | ------------------------ |
| weibo_bind | num  | 是否绑定微博 | 0：未绑定<br />1：已绑定 |
| qq_bind    | num  | 是否绑定qq   | 0：未绑定<br />1：已绑定 |

`data`中的`account_other`对象：

| 字段       | 类型 | 内容  | 备注         |
| ---------- | ---- | ----- | ------------ |
| skipVerify | bool | false | 作用尚不明确 |

**示例：**

http://passport.bilibili.com/web/site/user/info

```json
{
    "code": 0,
    "data": {
        "account_info": {
            "hide_tel": "153*****056",
            "hide_mail": "144****@qq.com",
            "bind_tel": true,
            "bind_mail": true,
            "tel_verify": true,
            "mail_verify": true,
            "unneeded_check": false
        },
        "account_safe": {
            "Score": 90,
            "pwd_level": 3,
            "security": true
        },
        "account_sns": {
            "weibo_bind": 1,
            "qq_bind": 1
        },
        "account_other": {
            "skipVerify": false
        }
    }
}
```



## 查询账号实名认证状态

> http://api.bilibili.com/x/member/realname/status

*方式:GET*

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                       |
| ttl     | num  | 1        | 作用尚不明确                  |
| data    | obj  | 信息本体 |                               |

`data`对象：

| 字段   | 类型 | 内容         | 备注                     |
| ------ | ---- | ------------ | ------------------------ |
| status | num  | 实名认证状态 | 0：未认证<br />1：已认证 |

**示例：**

http://api.bilibili.com/x/member/realname/status

当前状态为已认证

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "status": 1
    }
}
```



## 查询实名认证详细信息

> http://api.bilibili.com/x/member/realname/apply/status

*方式:GET*

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                       |
| ttl     | num  | 1        | 作用尚不明确                  |
| data    | obj  | 数据本体 |                               |

`data`对象：

| 字段      | 类型 | 内容         | 备注                                                         |
| --------- | ---- | ------------ | ------------------------------------------------------------ |
| status    | num  | 认证状态     | 1：已认证<br />3：未认证                                     |
| remark    | str  | 驳回信息     | 默认为空                                                     |
| realname  | str  | 实名姓名     | 星号隐藏部分信息                                             |
| card      | str  | 证件号码     | 星号隐藏部分信息                                             |
| card_type | num  | 证件类型代码 | 0：身份证<br />2：港澳居民来往内地通行证<br />3：台湾居民来往大陆通行证<br />4：护照(中国签发)<br />5：外国人永久居留证<br />6：其他国家或地区身份证明 |

http://api.bilibili.com/x/member/realname/apply/status

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "status": 1,
        "remark": "",
        "realname": "*唯恺",
        "card": "6***************17",
        "card_type": 0
    }
}
```



## 查询硬币变化情况

> http://api.bilibili.com/x/member/web/coin/log

*方式:GET*

仅能查询最近一周的情况

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                       |
| ttl     | num  | 1        | 作用尚不明确                  |
| data    | obj  | 数据本体 |                               |

`data`对象：

| 字段  | 类型   | 内容             | 备注 |
| ----- | ------ | ---------------- | ---- |
| list  | array | 变化记录条目列表 |      |
| count | num    | 变化记录条目数   |      |

`data`中的`list`数组：

| 项   | 类型 | 内容              | 备注 |
| ---- | ---- | ----------------- | ---- |
| 0    | obj  | 变化记录条目1     |      |
| n    | obj  | 变化记录条目(n+1) |      |
| ……   | obj  | ……                | ……   |

`list`数组中的对象：

| 字段   | 类型 | 内容     | 备注                   |
| ------ | ---- | -------- | ---------------------- |
| time   | str  | 变化时间 | YYYY-MM-DD HH:MM:SS    |
| delta  | num  | 变化量   | 正值为收入，负值为支出 |
| reason | str  | 变化说明 |                        |

**示例：**

http://api.bilibili.com/x/member/web/coin/log

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "list": [
            {
                "time": "2020-05-19 23:58:29",
                "delta": -1,
                "reason": "给视频 BV1j5411s7M8 打赏"
            },
            {
                "time": "2020-05-19 16:02:53",
                "delta": -1,
                "reason": "给视频 BV1Ht4y117A1 打赏"
            },
            {
                "time": "2020-05-19 15:38:42",
                "delta": 0.1,
                "reason": "给视频 BV1nb411C7aa 打赏"
            },
            {
                "time": "2020-05-19 02:19:20",
                "delta": 1,
                "reason": "登录奖励"
            },
            {
                "time": "2020-05-18 22:34:04",
                "delta": -1,
                "reason": "给视频 BV1Bp4y1Q7uw 打赏"
            },
            {
                "time": "2020-05-18 22:33:59",
                "delta": -1,
                "reason": "给视频 BV1j5411s7M8 打赏"
            },
            {
                "time": "2020-05-18 02:45:53",
                "delta": 1,
                "reason": "登录奖励"
            },
            {
                "time": "2020-05-17 03:02:38",
                "delta": 1,
                "reason": "登录奖励"
            },
            {
                "time": "2020-05-16 01:57:02",
                "delta": 1,
                "reason": "登录奖励"
            },
            {
                "time": "2020-05-15 11:10:35",
                "delta": 0.2,
                "reason": "给视频 BV1Yt41137T6 打赏"
            },
            {
                "time": "2020-05-15 00:34:27",
                "delta": 1,
                "reason": "登录奖励"
            },
            {
                "time": "2020-05-14 02:11:37",
                "delta": 1,
                "reason": "登录奖励"
            },
            {
                "time": "2020-05-13 02:12:28",
                "delta": 1,
                "reason": "登录奖励"
            }
        ],
        "count": 13
    }
}
```

