# 验证码登录

流程&逻辑：

1. 请求验证码参数
2. 进行验证
3. 返回验证结果，进行短信或密码登录


## 申请验证码参数

> https://passport.bilibili.com/web/captcha/combine?plat=6

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
| result   | obj   | 套了个娃 | 东西都在这 |
| type     | num   | 1      | 未知      |

`result`对象：

| 字段      | 类型  | 内容     | 备注     |
| -------- | ----- | ------ | -------- |
| success | num | 1 | 1应该就是成功了 |
| gt | str | 一串Hex | 好像是固定的 |
| challenge | str | 一串Hex | 验证码的id |
| key | str | 一串Hex | 验证码无关，但后边需要 |


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

本文档为Bilibili文档，验证码为geetest极验提供，故不提供api.

附: [手动验证器](https://kuresaru.github.io/geetest-validator/)
[及其源码](https://github.com/kuresaru/geetest-validator)

1. 打开手动验证器，在1/2填入上边api返回的`gt`和`challenge`
2. 点击按钮3，稍等加载验证码，点击按钮4进行验证
3. 验证完成后，点击按钮5生成验证结果
4. 使用最开始获得到的`key`、`challenge`和刚获得到的`validate`、`seccode`继续之后的登录操作


## 继续登录

- [短信登录](SMS.md)
- 密码登录
