# 用户注册

## 人机验证

[完成人机验证(参考验证登录)](../login/login_action/readme.md#验证登录)

完成后得到`key`, `challenge`, `validate`, `seccode`四个参数

## 发送短信验证码

[发送短信验证码(参考短信登录)](../login/login_action/SMS.md#发送短信验证码（web端）)

**注意不同的是这里type=1而非21**,推测此参数决定短信内容

```bash
curl 'https://passport.bilibili.com/web/sms/general/v2/send' \ 
    --data-urlencode 'key=6eeb28e7bbd64b389da2be3a2778c7e3' \
    --data-urlencode 'captchaType=6' \
    --data-urlencode 'type=1' \
    --data-urlencode 'cid=1' \
    --data-urlencode 'tel=13888888888' \
    --data-urlencode 'challenge=c52148f88a28b6011db52bb213483ee8' \
    --data-urlencode 'validate=a98841cd6ea58e1b1f5783fca73cddb6' \
    --data-urlencode 'seccode=a98841cd6ea58e1b1f5783fca73cddb6|jordan'
```

<details>
<summary>查看示例</summary>

```json
{
    "code": 0,
    "message": "验证码短信已下发"
}
```

</details>

##  提交注册请求

> https://passport.bilibili.com/web/reg/tel

*请求方式：POST*

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名   | 类型 | 内容             | 必要性 | 备注                                                         |
| -------- | ---- | ---------------- | ------ | ------------------------------------------------------------ |
| cid      | num  | 国际冠字码       | 必要   | 可以从 [获取国际冠字码](../login/login_action/SMS.md#获取国际冠字码_web端) 接口中获取 |
| tel      | num  | 手机号码         | 必要   |                                                              |
| code     | num  | 短信验证码       | 必要   |                                                              |
| nickName | str  | 昵称             | 必要   |                                                              |
| pwd      | str  | 密码             | 必要   | 密码为明文                                                   |
| plat     | num  | 0                | 必要   | 平台？                                                       |
| gourl    | str  | 注册成功跳转地址 | 非必要 | 默认为主页`https://www.bilibili.com/`                        |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                            |
| ------- | ---- | -------- | ----------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />1005：验证码错误<br />1007：验证码过期 |
| message | str  | 错误信息 | 成功时无此字段                                  |
| data    | obj  | 信息本体 | 只在成功时存在                                  |

`data`对象：

| 字段         | 类型 | 内容       | 备注                          |
| ------------ | ---- | ---------- | ----------------------------- |
| redirectUrl  | str  | 跳转链接   |                               |
| hint         | str  | "注册成功" | 成功后不提示成功还能提示什么? |
| in_reg_audit | num  | (?)        |                               |

```bash
curl 'https://passport.bilibili.com/web/reg/tel' \
    --data-urlencode 'plat=0' \
    --data-urlencode 'cid=1' \
    --data-urlencode 'tel=13888888888' \
    --data-urlencode 'code=121314' \
    --data-urlencode 'nickName=萌系小妹纸わ'
    --data-urlencode 'pwd=Password1234' \
    --data-urlencode 'gourl=https://www.bilibili.com'
```

<details>
<summary>查看示例</summary>

```json
{
    "code": 0,
    "data": {
        "redirectUrl": "https://www.bilibili.com",
        "hint": "注册成功",
        "in_reg_audit": 0
    }
}
```

</details>