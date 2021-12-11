# 退出账号登录

- [退出账号登录](#退出账号登录)
  - [退出登录（web 端）](#退出登录web-端)

---

## 退出登录（web 端）

> http://passport.bilibili.com/login/exit/v2

_请求方式：POST_

认证方式：Cookie

验证登录成功后会进行删除以下 cookie 项：

`DedeUserID` `DedeUserID__ckMd5` `SESSDATA` `bili_jct`

并在服务器注销该登录 Token（SESSDATA），该 Token 即失效

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名   | 类型 | 内容                      | 必要性          | 备注                               |
| -------- | ---- | ------------------------- | --------------- | ---------------------------------- |
| biliCSRF | str  | CSRF Token（位于 cookie） | Cookie 方式必要 |                                    |
| gourl    | str  | 成功后跳转到的页面        | 非必要          | 默认为 `javascript:history.go(-1)` |

**json 回复：**

如果 cookie 已经失效则返回登录页面的 html 代码

根对象：

| 字段    | 类型                            | 内容     | 备注                               |
| ------- | ------------------------------- | -------- | ---------------------------------- |
| code    | num                             | 返回值   | 0：成功 <br />-2202：csrf 请求非法 |
| status  | num/不存在                      | 返回值   | true：成功，失败时可能不存在       |
| ts      | num                             | 返回值   | 时间戳（例如：1631796826）         |
| message | str<br />无效时：不存在         | 错误信息 |                                    |
| data    | 有效时：obj<br />无效时：不存在 | 信息本体 |                                    |

`data`对象：

redirectUrl 重定向 url

**示例：**

```shell
curl -X POST https://passport.bilibili.com/login/exit/v2 \
-b "cookie字符串" \
-d "biliCSRF=xxxxxx&gourl=https://www.bilibili.com"
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "status": true,
  "ts": 1631796826,
  "data": {
    "redirectUrl": "https://passport.biligame.com/crossDomain?DedeUserID=&DedeUserID__ckMd5=&SESSDATA=&bili_jct=&gourl=https%3A%2F%2Fwww.bilibili.com"
  }
}
```

</details>
