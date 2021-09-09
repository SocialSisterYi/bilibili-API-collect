# 退出账号登录

- [退出登录（web端）](#退出登录（web端）)

---

## 退出登录（web端）

> https://passport.bilibili.com/login/exit/v2

*请求方式：POST*

认证方式：仅可Cookie（SESSDATA）

<br>

验证登录成功后会进行删除以下cookie项：

`DedeUserID` `DedeUserID__ckMd5` `SESSDATA` `bili_jct`

并在服务器注销该登录Token（SESSDATA），该Token即失效

<br>

**正文参数 (application/x-www-form-urlencoded):**

| 参数名   | 类型 | 内容                   | 必要性 |
| -------- | ---- | ---------------------- | ------ |
| biliCSRF | str  | cookie中的`bili_jct`项 | 必要   |

**示例：**

```shell
curl 'https://passport.bilibili.com/login/exit/v2' \
--data-urlencode 'biliCSRF=abc'
-b 'SESSDATA=xxx;DedeUserID__ckMd5=xxx;SESSDATA=xxx;bili_jct=abc'
```

**响应头部抓包信息：**

使用set-cookie删除了以上cookie项

<details>
<summary>查看响应示例：</summary>

```http
HTTP/1.1 200 OK
content-type: application/json;charset=UTF-8
set-cookie: SESSDATA=""; Domain=.bilibili.com; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/; HttpOnly
set-cookie: SESSDATA__ckMd5=""; Domain=.bilibili.com; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/
set-cookie: SESSDATA=""; Domain=""; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/; HttpOnly
set-cookie: SESSDATA__ckMd5=""; Domain=""; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/
set-cookie: DedeUserID=""; Domain=.bilibili.com; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/
set-cookie: DedeUserID__ckMd5=""; Domain=.bilibili.com; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/
set-cookie: DedeUserID=""; Domain=""; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/
set-cookie: DedeUserID__ckMd5=""; Domain=""; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/
set-cookie: bili_jct=""; Domain=.bilibili.com; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/
set-cookie: bili_jct__ckMd5=""; Domain=.bilibili.com; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/
set-cookie: bili_jct=""; Domain=""; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/
set-cookie: bili_jct__ckMd5=""; Domain=""; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/
...
```

```json
{
    "code":0,
    "status":true,
    "ts":1631193931,
    "data": {
        "redirectUrl": "https://passport.biligame.com/crossDomain?DedeUserID=&DedeUserID__ckMd5=&SESSDATA=&bili_jct=&gourl=https%3A%2F%2Fwww.bilibili.com%2F"
    }
}
```
</details>
