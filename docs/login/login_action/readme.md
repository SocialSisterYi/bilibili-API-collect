# 登录操作

人机验证方式登录包含**账号密码登录**与**手机短信验证码登录**

**注：扫码登录**不需要进行**人机验证**，故**不使用**以下接口

## 扫码登录

- [扫码登录](QR.md)

## 验证登录

人机验证流程：

1. 请求验证码参数，得到登录密钥`key`与极验id`gt`和极验KEY`challenge`
2. 进行滑动or点击验证
3. 返回验证结果`validate`与`seccode`，进行短信或密码登录

### 申请captcha验证码

> https://passport.bilibili.com/x/passport-login/captcha?source=main_web

*请求方式：GET*

注: 另外参见 [密码登录-手机号验证-获取 captcha](password.md#获取-captcha)

**json回复：**

根对象：

| 字段   | 类型 | 内容     | 备注         |
| ------ | ---- | -------- | --------- |
| code   | num  | 返回值   | 0：成功     |
| message   | str  | 返回信息   | |
| ttl   | num  | 1 |  |
| data   | obj  | 信息本体 | |

`data`对象：

| 字段      | 类型  | 内容     | 备注     |
| -------- | ----- | ------ | -------- |
| geetest   | obj   | 极验captcha数据 |  |
| tencent   | obj   | (?) | **作用尚不明确** |
| token    | str   | 登录 API token | 与 captcha 无关，与登录接口有关 |
| type     | str   | 验证方式 | 用于判断使用哪一种验证方式，目前所见只有极验<br />geetest：极验 |

`geetest`对象：

| 字段      | 类型  | 内容     | 备注     |
| -------- | ----- | ------ | -------- |
| gt | str | 极验id | 一般为固定值 |
| challenge | str | 极验KEY | 由B站后端产生用于人机验证 |

**示例：**

```shell
curl 'https://passport.bilibili.com/x/passport-login/captcha?source=main_web'
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
        "token": "00fbe75cc2864ba0af969231f193a974",
        "geetest": {
            "challenge": "a57d9be17505d4a15ed84694c48fbf74",
            "gt": "ac597a4506fee079629df5d8b66dd4fe"
        },
        "tencent": {
            "appid": ""
        }
    }
}
```

</details>

### 申请captcha验证码 (旧版)

> http://passport.bilibili.com/web/captcha/combine

*请求方式：GET*

该接口曾从文档移除过, 经过测试仍可正常使用

**URL参数:**

| 参数名 | 类型 | 内容         | 必要性 | 备注 |
| ------ | ---- | ------------ | ------ | ---- |
| plat   | num  | 平台类型     | 必要   | 默认为 6 |

**JSON回复:**

根对象：

| 字段   | 类型 | 内容     | 备注         |
| ------ | ---- | -------- | --------- |
| code   | num  | 返回值   | 0：成功     |
| data   | obj  | 信息本体 | |

`data`对象：

| 字段      | 类型  | 内容     | 备注     |
| -------- | ----- | ------ | -------- |
| result   | obj   | 套了个娃 |  |
| type     | num   | 1      | **作用尚不明确** |

`result`对象：

| 字段      | 类型  | 内容     | 备注     |
| -------- | ----- | ------ | -------- |
| success | num | 1 | **作用尚不明确** |
| gt | str | 极验id | 一般为固定值 |
| challenge | str | 极验KEY | 由B站后端产生用于人机验证 |
| key | str | 登录秘钥 | 与 captcha 无关, 与登录接口有关, 亦作 token |

**示例:**

```shell
curl 'https://passport.bilibili.com/web/captcha/combine?plat=6'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "data": {
    "result": {
      "success": 1,
      "gt": "bd111e81eda1cbb9f54425aafc0908ac",
      "challenge": "2903a8eb967a1d990444cb23ea42f417",
      "key": "76fb59fbd83a4d9d816162c5156fc964"
    },
    "type": 1
  }
}
```

</details>

### 进行验证

本文档为 Bilibili 文档，验证码为 [geetest 极验](https://docs.geetest.com/sensebot/start/) 提供，故不提供相关 API

附: [手动验证器](https://kuresaru.github.io/geetest-validator/)
[及其源码](https://github.com/kuresaru/geetest-validator)

1. 打开手动验证器，在1、2分别填入上面API返回的`gt`和`challenge`
2. 点击按钮3，稍等加载验证码，点击按钮4进行验证
3. 验证完成后，点击按钮5生成验证结果
4. 使用最开始获得到的`key`、`challenge`和刚获得到的`validate`、`seccode`继续之后的登录操作

### 继续登录

- [短信登录](SMS.md)
- [密码登录](password.md)
