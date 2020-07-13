# 验证码登录

人机验证方式登录包含**账号密码登录**与手**机短信验证码登录**

人机验证流程：

1. 请求验证码参数，得到登录密钥`key`与极验ID`gt`和极验KEY`challenge`
2. 进行滑动or点击验证
3. 返回验证结果`validate`与`seccode`，进行短信或密码登录


## 申请验证码参数

> http://passport.bilibili.com/web/captcha/combine?plat=6

*方式：GET*

**json回复：**

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
| gt | str | 极验ID | 一般为固定值 |
| challenge | str | 极验KEY | 由B站后端产生用于人机验证 |
| key | str | 登录秘钥 | 与人机验证无关，与登录接口有关，但与极验KEY对应 |

**示例：**

```shell
curl 'https://passport.bilibili.com/web/captcha/combine?plat=6'
```
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


## 进行验证

本文档为Bilibili文档，验证码为geetest极验提供，故不提供api

附: [手动验证器](https://kuresaru.github.io/geetest-validator/)
[及其源码](https://github.com/kuresaru/geetest-validator)

1. 打开手动验证器，在1、2分别填入上面API返回的`gt`和`challenge`
2. 点击按钮3，稍等加载验证码，点击按钮4进行验证
3. 验证完成后，点击按钮5生成验证结果
4. 使用最开始获得到的`key`、`challenge`和刚获得到的`validate`、`seccode`继续之后的登录操作


## 继续登录

- [短信登录](SMS.md)
- [密码登录](password.md)
