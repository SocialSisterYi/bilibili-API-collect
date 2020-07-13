# 短信登录

流程&逻辑：

1. [完成人机验证码](readme.md)
2. 发送短信
3. 提交短信验证码


## 发送短信

> https://passport.bilibili.com/web/sms/general/v2/send

*方式：POST*

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 内容 | 备注 |
| --- | --- | --- |
| tel | 手机号码 | |
| cid | 1 | 固定 | 
| key | 最开始返回来的 | |
| challenge | 最开始返回来的 | |
| validate | 验证后返回的 | |
| seccode | 验证后返回的 | "\|"号要转义成"%7C" |


**json回复：**

根对象：

| 字段   | 类型 | 内容     | 备注         |
| ------ | ---- | -------- | --------- |
| code | num | 返回值 | 0：成功 |
| message | str | "验证码短信已下发" | |

**示例：**

```shell
curl 'https://passport.bilibili.com/web/sms/general/v2/send' \
-d \
'tel=13888888888&'\
'cid=1&type=21&captchaType=6&'\
'key=76fb59fbd83a4d9d816162c5156fc964&'\
'challenge=2903a8eb967a1d990444cb23ea42f417&'\
'validate=f467c345a4e58646234565b6959ca45b&'\
'seccode=f467c345a4e58646234565b6959ca45b%7Cjordan'
```
```json
{
  "code": 0,
  "message": "验证码短信已下发"
}
```


## 短信验证

> https://passport.bilibili.com/web/sms/general/v2/send

*方式：POST*

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 内容 | 备注 |
| --- | --- | --- |
| cid | 1 | 应该是固定的 |
| tel | 手机号码 | |
| smsCode | 短信验证码 | |
| source | main-web | 应该是固定的 |
| goUrl | https://space.bilibili.com | 未测试是否必需 |
| keep | true | 未知, 当它是固定吧 |

**json回复：**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 0 | 0是成功 |
| data | obj | | |

`data`对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| is_new | bool | false | 未知,估计是未注册时自动注册新用户 |
| status | num | 0 | 未知,可能0就是成功吧 |
| url | str | https://space.bilibili.com | 应该是请求时候参数里的那个 |

**http响应头**

和二维码登录一样，会返回`DedeUserID`、`DedeUserID__ckMd5`、`SESSDATA`、`bili_jct` 4个Cookie用于操作之后的接口

**示例：**

```shell
curl 'https://passport.bilibili.com/web/login/rapid' 
-d 'cid=1&'\
'tel=13888888888&'\
'smsCode=123456'\
'&source=main-web&goUrl=https%3A%2F%2Fspace.bilibili.com&keep=true'
```
```json
{
  "code": 0,
  "data": {
    "is_new": false,
    "status": 0,
    "url": "https://space.bilibili.com"
  }
}
```
```plaintext
响应头: Set-Cookie...
```
