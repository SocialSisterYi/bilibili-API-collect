# 退出账号登录

## 退出登录（web端）

> http://passport.bilibili.com/login?act=exit

*请求方式：GET*

认证方式：仅可Cookie（SESSDATA）

验证登录成功后会进行删除以下cookie项：

 `DedeUserID` `DedeUserID__ckMd5` `SESSDATA` `bili_jct`

并在服务器注销该登录Token（SESSDATA），该Token即失效

**回复：**

响应为一个用于跳转html页面

**示例：**

```shell
curl 'http://passport.bilibili.com/login?act=exit'\
-b 'SESSDATA=xxx;DedeUserID__ckMd5=xxx;SESSDATA=xxx;bili_jct=xxx'
```

**响应头部抓包信息：**

使用set-cookie删除了以上cookie项

<details>
<summary>查看响应示例：</summary>

```http
HTTP/1.1 200 OK
Date: Mon, 27 Jul 2020 13:42:21 GMT
Content-Type: text/html;charset=UTF-8
Transfer-Encoding: chunked
Connection: keep-alive
Server: Apache-Coyote/1.1
Set-Cookie: SESSDATA=""; Domain=.bilibili.com; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/; HttpOnly
Set-Cookie: SESSDATA__ckMd5=""; Domain=.bilibili.com; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/
Set-Cookie: SESSDATA=""; Domain=""; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/; HttpOnly
Set-Cookie: SESSDATA__ckMd5=""; Domain=""; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/
Set-Cookie: DedeUserID=""; Domain=.bilibili.com; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/
Set-Cookie: DedeUserID__ckMd5=""; Domain=.bilibili.com; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/
Set-Cookie: DedeUserID=""; Domain=""; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/
Set-Cookie: DedeUserID__ckMd5=""; Domain=""; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/
Set-Cookie: bili_jct=""; Domain=.bilibili.com; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/
Set-Cookie: bili_jct__ckMd5=""; Domain=.bilibili.com; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/
Set-Cookie: bili_jct=""; Domain=""; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/
Set-Cookie: bili_jct__ckMd5=""; Domain=""; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/
Set-Cookie: JSESSIONID=F857ED4084F8824BFDB4CD97EEC3D758; Path=/; HttpOnly
Content-Language: zh-CN
X-TKID: 1595857341658620367002
Expires: Mon, 27 Jul 2020 13:42:20 GMT
Cache-Control: no-cache
X-Cache-Webcdn: BYPASS from jd-sxhz-dx-w-01
Content-Encoding: gzip

```

</details>