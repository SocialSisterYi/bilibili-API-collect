# 短信登录

web端短信登录流程：

1. [完成人机验证](readme.md)
2. 发送短信，使用国际地区代码`cid`+手机号码`tel`+登录密钥`token`+极验`challenge`+验证结果`validate`+验证结果`seccode`
3. 提交短信验证码以验证登录操作，使用国际地区代码`cid`+手机号码`tel`+短信验证码`code`

## 获取国际冠字码_web端

> https://passport.bilibili.com/web/generic/country/list

*请求方式：GET*

**json回复：**

根对象：

| 字段 | 类型 | 内容     | 备注    |
| ---- | ---- | -------- | ------- |
| code | num  | 返回值   | 0：成功 |
| data | obj  | 数据本体 |         |

`data`对象：

| 字段   | 类型  | 内容          | 备注 |
| ------ | ----- | ------------- | ---- |
| common | array | 常用国家&地区 |      |
| others | array | 其他国家&地区 |      |

`data`中的`common`和`others`数组：

| 项   | 类型 | 内容           | 备注 |
| ---- | ---- | -------------- | ---- |
| 0    | obj  | 国家&地区1     |      |
| n    | obj  | 国家&地区(n+1) |      |
| ……   | obj  | ……             | ……   |

`common`和`others`数组中的对象：

| 字段       | 类型 | 内容          | 备注 |
| ---------- | ---- | ------------- | ---- |
| id         | num  | 国际代码值    |      |
| cname      | str  | 国家&地区名   |      |
| country_id | str  | 国家&地区区号 |      |

**示例：**

```shell
curl 'https://passport.bilibili.com/web/generic/country/list'
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


## 发送短信验证码_app端

> https://passport.bilibili.com/x/passport-login/sms/send

*请求方式：POST*

同手机号短信发送 CD 时间为 60s

短信验证码 timeout 为 5min

验证内容由第一次返回进行处理,解析recaptcha_url的params传到极验进行验证后取到验证结果入参后再次调用即可

**正文参数 (application/x-www-form-urlencoded)：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| --- | --- | --- | --- | --- |
| cid | num  | 国际冠字码    | 必要 | 可以从[获取国际冠字码](#获取国际冠字码-web端)获取 |
| tel | num | 手机号码 | 必要 | |
| login_session_id | str | 登录标识 | 必要 | uuid去掉'-'后得到
| recaptcha_token | str  | 登录 API token | 必要 | 在[申请 captcha 验证码](readme.md#申请captcha验证码)接口处获取 |
| gee_challenge | str | 极验 challenge | 必要 | 在[申请 captcha 验证码](readme.md#申请captcha验证码)接口处获取 |
| gee_validate | str | 极验 result | 必要 | 极验验证后得到 |
| gee_seccode | str | 极验 result +`\|jordan` | 必要   | 极验验证后得到 |
| channel | str | 通道? | 必要 | 一般固定值为"bili" |
| buvid | str | buvid | 必要 | 参考如下方法生成 |
| local_id | str | 同上 | 必要 | 同上 |
| statistics | str | ? | 必要 | 一般固定为{"appId":1,"platform":3,"version":"7.27.0","abtest":""},非key-value入参需要转URL编码 |

**json回复：**

根对象：

| 字段   | 类型 | 内容     | 备注         |
| ------ | ---- | -------- | --------- |
| code | num | 返回值 | 0：成功<br />-400：请求错误<br />1002：手机号格式错误<br />86203：短信发送次数已达上限<br />1003：验证码已经发送<br />1025：该手机号在哔哩哔哩有过永久封禁记录，无法再次注册或绑定新账号<br />2400：登录秘钥错误<br />2406：验证极验服务出错 |
| message | str | 错误信息 | 成功为0 |
| data | obj | 信息本体 |                                                              |

`data`对象：

| 字段        | 类型 | 内容           | 备注                     |
| ----------- | ---- | -------------- | ------------------------ |
| captcha_key | str  | 短信登录 token | 在下方传参时需要，请备用 |

**示例：**

例如手机号为`13888888888`，国际id为`1 (中国大陆)`，登录秘钥为`aabbccdd`，极验challenge为`2333`，极验结果为`666666`，进行发送短信验证码操作

```shell
curl 'https://passport.bilibili.com/x/passport-login/sms/send' \
--data-urlencode 'tel=13888888888' \
--data-urlencode 'cid=1' \
--data-urlencode 'login_session_id=669900' \
--data-urlencode 'recaptcha_token=aabbccdd' \
--data-urlencode 'gee_challenge=2333' \
--data-urlencode 'gee_validate=666666' \
--data-urlencode 'gee_seccode=666666|jordan' \
--data-urlencode 'channel=bili' \
--data-urlencode 'buvid=999999' \
--data-urlencode 'local_id=999999' \
--data-urlencode 'statistics=%7B%22appId%22%3A1%2C%22platform%22%3A3%2C%22version%22%3A%227.27.0%22%2C%22abtest%22%3A%22%22%7D'
```

生成buvid方法
``` javascript
static buvid() : string {
    var mac = [];
    for (let i = 0; i < 6; i++) {
        var min = Math.min(0, 0xff)
        var max = Math.max(0, 0xff)
        var num = parseInt((Math.random() * (min - max + 1) + max).toString()).toString(16)
        mac.push(num)
    }
    var md5 = this.md5(mac.join(':'));
    var md5Arr = md5.split('');
    return "XY${md5Arr[2]}${md5Arr[12]}${md5Arr[22]}${md5}"
}
```

<details>
<summary>查看响应示例：</summary>

```json
{"code":0,
    "message":"0",
    "ttl":1,
    "data":{
        "captcha_key":"7542f109c3318d74847626495c68c321",
        "recaptcha_url":"...."
    }
}
```

</details>

## 发送短信验证码_web端

> https://passport.bilibili.com/x/passport-login/web/sms/send

*请求方式：POST*

同手机号短信发送 CD 时间为 60s

短信验证码 timeout 为 5min

**正文参数 (application/x-www-form-urlencoded)：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| --- | --- | --- | --- | --- |
| cid | num  | 国际冠字码    | 必要 | 可以从[获取国际冠字码](#获取国际冠字码-web端)获取 |
| tel | num | 手机号码 | 必要 | |
| source | str  | 登录来源 | 必要 | `main_web`：独立登录页<br />`main_mini`：小窗登录 |
| token | str  | 登录 API token | 必要 | 在[申请 captcha 验证码](readme.md#申请captcha验证码)接口处获取 |
| challenge | str | 极验 challenge | 必要 | 在[申请 captcha 验证码](readme.md#申请captcha验证码)接口处获取 |
| validate | str | 极验 result | 必要 | 极验验证后得到 |
| seccode | str | 极验 result +`\|jordan` | 必要   | 极验验证后得到 |

**json回复：**

根对象：

| 字段   | 类型 | 内容     | 备注         |
| ------ | ---- | -------- | --------- |
| code | num | 返回值 | 0：成功<br />-400：请求错误<br />1002：手机号格式错误<br />86203：短信发送次数已达上限<br />1003：验证码已经发送<br />1025：该手机号在哔哩哔哩有过永久封禁记录，无法再次注册或绑定新账号<br />2400：登录秘钥错误<br />2406：验证极验服务出错 |
| message | str | 错误信息 | 成功为0 |
| data | obj | 信息本体 |                                                              |

`data`对象：

| 字段        | 类型 | 内容           | 备注                     |
| ----------- | ---- | -------------- | ------------------------ |
| captcha_key | str  | 短信登录 token | 在下方传参时需要，请备用 |

**示例：**

例如手机号为`13888888888`，国际id为`1 (中国大陆)`，登录秘钥为`aabbccdd`，极验challenge为`2333`，极验结果为`666666`，进行发送短信验证码操作

```shell
curl 'https://passport.bilibili.com/x/passport-login/web/sms/send' \
--data-urlencode 'tel=13888888888' \
--data-urlencode 'cid=1' \
--data-urlencode 'source=main_web' \
--data-urlencode 'token=aabbccdd' \
--data-urlencode 'challenge=2333' \
--data-urlencode 'validate=666666' \
--data-urlencode 'seccode=666666|jordan'
```

<details>
<summary>查看响应示例：</summary>

```json
{"code":0,
    "message":"0",
    "ttl":1,
    "data":{
        "captcha_key":"7542f109c3318d74847626495c68c321"
    }
}
```

</details>

## 使用短信验证码登录_app端

> https://passport.bilibili.com/x/passport-login/login/sms

*请求方式：POST*

验证登录成功后会返回实体内容：

 `mid` `expires_in` `access_token` `refresh_token`

**正文参数 (application/x-www-form-urlencoded)：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| --- | --- | --- | --- | --- |
| cid         | num  | 国际冠字码     | 必要   | 可以从[获取国际冠字码](#获取国际冠字码-web端)获取 |
| tel | num | 手机号码 | 必要 | |
| login_session_id | str | 登录标识 | 必要 | 必须与上述login_session_id保持一致
| code | num | 短信验证码 | 必要 | timeout 为 5min |
| captcha_key | str | 短信登录 token | 必要 | 从[上述API](#发送短信验证码-web端)请求成功后返回 |

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
| mid | str | 用户uid |  |
| expires_in | str | 过时时间 |  |
| access_token | str | 登录 token |  |
| refresh_token | str | 刷新 token | |
| cookie_info | Array | cookie集合 | |

**示例：**

使用手机号`13888888888`，短信验证码为`123456`，进行验证登录操作

```shell
curl 'https://passport.bilibili.com/x/passport-login/login/sms' 
--data-urlencode 'cid=1' \
--data-urlencode 'tel=13888888888' \
--data-urlencode 'code=123456' \
--data-urlencode 'captcha_key=999999' \
--data-urlencode 'login_session_id=669900' 
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "data": {
    "token_info": {
        "mid": "...",
        "expires_in": "114514",
        "access_token": "",
        "refresh_token": ""
        //...
    },
    "cookie_info":[
        //...
    ],
    "message": "0"
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
Set-Cookie: sid=***; Domain=.bilibili.com; Expires=Sat, 18-Jul-2020 09:57:57 GMT; Path=/
Expires: Mon, 13 Jul 2020 09:57:32 GMT
Cache-Control: no-cache
X-Cache-Webcdn: BYPASS from jd-sxhz-dx-w-01

```

</details>


## 使用短信验证码登录_web端

> https://passport.bilibili.com/x/passport-login/web/login/sms

*请求方式：POST*

验证登录成功后会进行设置以下cookie项：

 `DedeUserID` `DedeUserID__ckMd5` `SESSDATA` `bili_jct`

**正文参数 (application/x-www-form-urlencoded)：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| --- | --- | --- | --- | --- |
| cid         | num  | 国际冠字码     | 必要   | 可以从[获取国际冠字码](#获取国际冠字码-web端)获取 |
| tel | num | 手机号码 | 必要 | |
| code | num | 短信验证码 | 必要 | timeout 为 5min |
| source      | str  | 登录来源       | 必要   | `main_web`：独立登录页<br />`main_mini`：小窗登录 |
| captcha_key | str | 短信登录 token | 必要 | 从[上述API](#发送短信验证码-web端)请求成功后返回 |
| go_url | str | 跳转url | 非必要 | 默认为 https://www.bilibili.com |
| keep | bool | 是否记住登录 | 非必要 | `true`：记住登录<br />`false`：不记住登录 |

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
| is_new | bool | 是否为新注册用户 | false：非新注册用户<br />true：新注册用户 |
| status | num | 0 | 未知，可能0就是成功吧 |
| url | str | 跳转 url | 默认为 https://www.bilibili.com |

**示例：**

使用手机号`13888888888`，短信验证码为`123456`，进行验证登录操作

```shell
curl 'https://passport.bilibili.com/x/passport-login/web/login/sms' 
--data-urlencode 'cid=1' \
--data-urlencode 'tel=13888888888' \
--data-urlencode 'code=123456'
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
Set-Cookie: sid=***; Domain=.bilibili.com; Expires=Sat, 18-Jul-2020 09:57:57 GMT; Path=/
Expires: Mon, 13 Jul 2020 09:57:32 GMT
Cache-Control: no-cache
X-Cache-Webcdn: BYPASS from jd-sxhz-dx-w-01

```

</details>
