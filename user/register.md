# 用户注册

## 0. 检查昵称是否可注册(可选)

[检查昵称是否可注册(可选)](check_nickname.md)


## 1. 完成人机验证

[完成人机验证(参考验证登录)](../login/login_action/readme.md#验证登录)

完成后得到`key`, `challenge`, `validate`, `seccode`四个参数


## 2. 发送短信验证码

[发送短信验证码(参考短信登录)](../login/login_action/SMS.md#发送短信验证码（web端）)

**注意不同的是这里type=1而非21**,推测此参数决定短信内容

<details>
<summary>查看示例</summary>

```bash
curl 'https://passport.bilibili.com/web/sms/general/v2/send' \ 
    -X POST \
    -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0' \
    -H 'Referer: https://passport.bilibili.com/register/phone.html' \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    --data-raw 'key=6eeb28e7bbd64b389da2be3a2778c7e3&captchaType=6&type=1&cid=1&tel=13888888888&challenge=c52148f88a28b6011db52bb213483ee8&validate=a98841cd6ea58e1b1f5783fca73cddb6&seccode=a98841cd6ea58e1b1f5783fca73cddb6%7Cjordan'
```

```json
{"code":0,"message":"验证码短信已下发"}
```

</details>

## 3. 提交注册请求

> http://passport.bilibili.com/web/reg/tel

*请求方式：POST*

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容 |
| --- | --- | --- |
| nickName | str | 昵称 |
| code | num | 短信验证码 |
| pwd | str | 密码 |
| gourl | str | 注册成功跳转地址 |
| tel | num | 手机号码 |
| cid | num | 1 |
| plat | num | 0 |

**json回复：**

根对象：

| 字段   | 类型 | 内容     | 备注         |
| ------ | ---- | -------- | --------- |
| code | num | 返回值 | 0:成功<br>1005:验证码错误<br>1007:验证码过期 |
| data | obj | 成功信息 | 只在成功时存在 |
| message | str | 错误信息 | 只在错误时存在 |

成功信息

| 字段   | 类型 | 内容     | 备注         |
| ------ | ---- | -------- | --------- |
| redirectUrl | str | 跳转链接 | 不确定是否有用 |
| hint | str | "注册成功" | 成功后不提示成功还能提示什么? |
| in_reg_audit | num | 0 | 未知 |

<details>
<summary>查看示例</summary>

```bash
curl 'https://passport.bilibili.com/web/reg/tel' \
    -X POST \
    -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0' \
    -H 'Accept: application/json, text/plain, */*' \
    -H 'Referer: https://passport.bilibili.com/register/phone.html' \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    --data-raw 'nickName=%E8%90%8C%E7%B3%BB%E5%B0%8F%E5%A6%B9%E7%BA%B8%E3%82%8F&code=121314&pwd=Password1234&gourl=https%3A%2F%2Fpassport.bilibili.com%2Flogin%3Fgourl%3Dhttps%3A%2F%2Fspace.bilibili.com&tel=13888888888&cid=1&plat=0'
```

</details>