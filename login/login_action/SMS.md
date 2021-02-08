# 短信登录

web端短信登录流程：

1. [完成人机验证](readme.md)
2. 发送短信，使用国际地区代码`cid`+手机号码`tel`+登录密钥`key`+极验`challenge`+验证结果`validate`+验证结果`seccode`
3. 提交短信验证码以验证登录操作，使用国际地区代码`cid`+手机号码`tel`+短信验证码`smsCode`

---

- [获取国际地区代码（web端）](#获取国际地区代码（web端）)
- [发送短信验证码（web端）](#发送短信验证码（web端）)
- [使用短信验证码登录（web端）](#使用短信验证码登录（web端）)

---

## 获取国际地区代码（web端）

> http://passport.bilibili.com/web/generic/country/list

*请求方式：GET*

**json回复：**

根对象：

| 字段 | 类型 | 内容     | 备注    |
| ---- | ---- | -------- | ------- |
| code | num  | 返回值   | 0：成功 |
| data | obj  | 数据本体 |         |

`data`对象：

| 字段   | 类型  | 内容           | 备注 |
| ------ | ----- | -------------- | ---- |
| common | array | 常用国家或地区 |      |
| others | array | 其他国家或地区 |      |

`data`中的`common`和`others`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | obj  | 国家或地区1     |      |
| n    | obj  | 国家或地区(n+1) |      |
| ……   | obj  | ……              | ……   |

`common`和`others`数组中的对象：

| 字段       | 类型 | 内容           | 备注 |
| ---------- | ---- | -------------- | ---- |
| id         | num  | 国际代码值     |      |
| cname      | str  | 国家或地区名   |      |
| country_id | str  | 国家或地区区号 |      |

**示例：**

```shell
curl 'http://passport.bilibili.com/web/generic/country/list'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "data": {
        "common": [
            {
                "id": 1,
                "cname": "中国大陆",
                "country_id": "86"
            },
            {
                "id": 5,
                "cname": "中国香港特别行政区",
                "country_id": "852"
            },
            …………
        ],
        "others": [
            {
                "id": 22,
                "cname": "阿富汗",
                "country_id": "93"
            },
            {
                "id": 20,
                "cname": "阿尔巴尼亚",
                "country_id": "355"
            },
            …………
        ]
    }
}
```

</details>

## 发送短信验证码（web端）

> http://passport.bilibili.com/web/sms/general/v2/send

*请求方式：POST*

短信发送CD时间为60s

短信验证码超时时间为5min

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| --- | --- | --- | --- | --- |
| tel | num | 手机号码 | 必要 | |
| cid         | num  | 国际地区代码       | 必要 |  |
| type | num | 21 | 必要 | 必须为`21` |
| captchaType | num | 6 | 必要 | 必须为`6` |
| key | str | 登录秘钥 | 必要 | 从B站API获取 |
| challenge | str | 极验challenge | 必要 | 从B站API获取 |
| validate | str | 极验结果 | 必要 | 从极验获取 |
| seccode | str | 极验结果+`|jordan` | 必要   | 从极验获取   |

**json回复：**

根对象：

| 字段   | 类型 | 内容     | 备注         |
| ------ | ---- | -------- | --------- |
| code | num | 返回值 | 0：成功<br />-400：请求错误<br />1002：手机号格式错误<br />86203：短信发送次数已达上限<br />1003：验证码已经发送<br />1025：该手机号在哔哩哔哩有过永久封禁记录，无法再次注册或绑定新账号<br />2400：登录秘钥错误<br />2406：验证极验服务出错 |
| message | str | 错误信息 | 成功为"验证码短信已下发" |

**示例：**

例如手机号为`13888888888`，国际ID为`1（中国大陆）`，登录秘钥为`aabbccdd`，极验challenge为`2333`，极验结果为`666666`，进行发送短信验证码操作

```shell
curl 'http://passport.bilibili.com/web/sms/general/v2/send' \
--data-urlencode 'tel=13888888888' \
--data-urlencode 'cid=1' \
--data-urlencode 'type=21' \
--data-urlencode 'captchaType=6' \
--data-urlencode 'key=aabbccdd' \
--data-urlencode 'challenge=2333' \
--data-urlencode 'validate=666666' \
--data-urlencode 'seccode=666666|jordan'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "验证码短信已下发"
}
```

</details>

## 使用短信验证码登录（web端）

> http://passport.bilibili.com/web/login/rapid

*请求方式：POST*

验证登录成功后会进行设置以下cookie项：

 `DedeUserID` `DedeUserID__ckMd5` `SESSDATA` `bili_jct`

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| --- | --- | --- | --- | --- |
| cid | num | 国际地区代码 | 必要 |  |
| tel | num | 手机号码 | 必要 | |
| smsCode | num | 短信验证码 | 必要 | 超时时间为5min |
| goUrl | str | 跳转url | 非必要 | 默认为https://www.bilibili.com |

**json回复：**

根对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 返回值 | 0：成功<br />-400：请求错误<br />1006：请输入正确的短信验证码<br />1007：短信验证码已过期 |
| message | str | 错误信息 |  |
| data | obj | 信息本体 | |

`data`对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| is_new | bool | false | 未知,估计是未注册时自动注册新用户 |
| status | num | 0 | 未知,可能0就是成功吧 |
| url | str | 跳转url | 默认为https://www.bilibili.com |

**示例：**

使用手机号`13888888888`，短信验证码为`123456`，进行验证登录操作

```shell
curl 'https://passport.bilibili.com/web/login/rapid' 
--data-urlencode 'cid=1' \
--data-urlencode 'tel=13888888888' \
--data-urlencode 'smsCode=123456'
```

<details>
<summary>查看响应示例：</summary>

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

</details>

**响应头部抓包信息：**

可明显看见设置了几个cookie（填入浏览器即可成功登录）

<details>
<summary>查看响应示例：</summary>

```http
HTTP/1.1 200 OK
Date: Mon, 13 Jul 2020 09:57:33 GMT
Content-Type: application/json;charset=UTF-8
Content-Length: 78
Connection: keep-alive
Server: Apache-Coyote/1.1
Set-Cookie: DedeUserID=***; Domain=.bilibili.com; Expires=Sat, 18-Jul-2020 09:57:57 GMT; Path=/
Set-Cookie: DedeUserID__ckMd5=***; Domain=.bilibili.com; Expires=Sat, 18-Jul-2020 09:57:57 GMT; Path=/
Set-Cookie: SESSDATA=***; Domain=.bilibili.com; Expires=Sat, 18-Jul-2020 09:57:57 GMT; Path=/; HttpOnly
Set-Cookie: bili_jct=***; Domain=.bilibili.com; Expires=Sat, 18-Jul-2020 09:57:57 GMT; Path=/
Expires: Mon, 13 Jul 2020 09:57:32 GMT
Cache-Control: no-cache
X-Cache-Webcdn: BYPASS from jd-sxhz-dx-w-01

```

</details>
