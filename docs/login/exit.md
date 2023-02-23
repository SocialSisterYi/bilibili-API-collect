# 退出账号登录

## 退出登录(web端)

> https://passport.bilibili.com/login/exit/v2

_请求方式：POST_

认证方式：Cookie

验证登录成功后会使用`set-cookie`字段清空以下 cookie 项：

`DedeUserID` `DedeUserID__ckMd5` `SESSDATA` `bili_jct`

并在服务器注销该登录 Token (SESSDATA)，该 Token 即失效

请求必须包含以下cookie项：`DedeUserID` `bili_jct` `SESSDATA`

**正文参数 (application/x-www-form-urlencoded)：**

| 参数名   | 类型 | 内容                                     | 必要性 | 备注                              |
| -------- | ---- | ---------------------------------------- | ------ | --------------------------------- |
| biliCSRF | str  | CSRF Token (位于 cookie 中的 `bili_jct`) | 必要   |                                   |
| gourl    | str  | 成功后跳转到的页面                       | 非必要 | 默认为`javascript:history.go(-1)` |

**json 回复：**

如果 cookie 已经失效则输出登录页 html

根对象：

| 字段    | 类型        | 内容     | 备注                              |
| ------- | ----------- | -------- | --------------------------------- |
| code    | num         | 返回值   | 0：成功 <br />2202：csrf 请求非法 |
| status  | bool        | 返回值   | `true`：成功                      |
| ts      | num         | 时间戳   |                                   |
| message | str         | 错误信息 | 成功时不存在                      |
| data    | 有效时：obj | 信息本体 | 失败时不存在                      |

`data`对象：

| 字段        | 类型 | 内容       | 备注 |
| ----------- | ---- | ---------- | ---- |
| redirectUrl | str  | 重定向 url |      |

**示例：**

```shell
curl -L -X POST 'https://passport.bilibili.com/login/exit/v2' \
-H 'Cookie: DedeUserID=xxx; bili_jct=xxx; SESSDATA=xxx' \
-H 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'biliCSRF=xxxxxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "status": true,
  "ts": 1663034005,
  "data": {
    "redirectUrl": "https://passport.biligame.com/crossDomain?DedeUserID=&DedeUserID__ckMd5=&SESSDATA=&bili_jct=&gourl=javascript%3Ahistory.go%28-1%29"
  }
}
```
</details>