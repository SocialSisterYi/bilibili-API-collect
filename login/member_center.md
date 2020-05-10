# 个人中心

## 获取我的信息

> http://api.bilibili.com/x/member/web/account

*方式:GET*

需要登录(SESSDATA)

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

需要登录(SESSDATA)

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



## 查询我的大会员状态

> http://api.bilibili.com/x/vip/web/user/info

*方式:GET*

需要登录(SESSDATA)

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

