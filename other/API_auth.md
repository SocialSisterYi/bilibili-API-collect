# API认证与鉴权

- [Cookie方式（web端）](#Cookie方式（web端）)
- [APP方式（手机客户端及TV端等）](#APP方式（手机客户端及TV端等）)

---

## Cookie方式（web端）

cookie中的值在访问登录接口成功登录时，用`set-cookie`写入

在访问api时为`Cookie`头的数据

Token有效期为1月，更改密码或过期失效

| cookie项          | 含义              | 备注                                       |
| ----------------- | ----------------- | ------------------------------------------ |
| DedeUserID        | 当前用户UID       |                                            |
| DedeUserID__ckMd5 | 用户UID md5校验值 |                                            |
| SESSDATA          | 登录Token         | 用于用户识别与鉴权<br />作用同`access_key` |
| bili_jct          | CSRF Token        | 用于操作性接口                             |

## APP方式（手机客户端及TV端等）

| 参数          | 含义             | 备注                   |
| ------------- | ---------------- | ---------------------- |
| access_key    | APP登录Token     | 注意必须在第一个参数   |
| appkey        | APP密钥          |                        |
| refresh_token | APP刷新登录Token | 仅在刷新时使用         |
| ts            | 当前时间戳       |                        |
| sign          | APP签名          | 注意必须在最后一个参数 |

**接口鉴权：**

使用`appkey`作为api的必要参数，并使用除`sign`外所有参数的url字串后连接相对应的盐值进行**md5校验**（32位小写），把计算结果作为sign的值，与前面参数一同发送

**appkey与appsec一一对应**

已知的appkey与签名：

| appkey           | appsec（sign盐值）               | 平台 | 应用     | 备注     |
| ---------------- | -------------------------------- | ---- | -------- | -------- |
| 07da50c9a0bf829f | 25bdede4e1581c836cab73a48790ca6e | 安卓 | 概念版   |          |
| 1d8b6e7d45233436 | 560c52ccd288fed045859ed18bffd973 | 安卓 | 客户端   | 一般用途 |
| 178cf125136ca8ea | 34381a26236dd1171185c0beb042e1c6 | 安卓 | 概念版   |          |
| 37207f2beaebf8d7 | e988e794d4d4b6dd43bc0e89d6e90c43 | 安卓 | biliLink |          |
| 4409e2ce8ffd12b8 | 59b43e04ad6965f34319062b478f83dd | TV   | 客户端   |          |
| 57263273bc6b67f6 | a0488e488d1567960d3a765e8d129f90 | 安卓 | 客户端   |          |
| 5dce947fe22167f9 |                                  | 安卓 | 必剪     |          |
| 7d336ec01856996b | a1ce6983bc89e20a36c37f40c4f1a0dd | 安卓 | 概念版   |          |
| 85eb6835b0a1034e | 2ad42749773c441109bdc0191257a664 |      |          |          |
| 8e16697a1b4f8121 | f5dd03b752426f2e623d7badb28d190a | 安卓 | 国际版   |          |
| aae92bc66f3edfab | af125a0d5279fd576c1b4418a3e8276d | PC   | 投稿工具 |          |
| ae57252b0c09105d | c75875c596a69eb55bd119e74b07cfe3 | 安卓 | 国际版   |          |
| bb3101000e232e27 | 36efcfed79309338ced0380abd824ac1 | 安卓 | 国际版   |          |
| bca7e84c2d947ac6 | 60698ba2f68e01ce44738920a0ffe768 | 安卓 | 客户端   | 登录专用 |
| cc578d267072c94d |                                  | 安卓 | 轻视频   |          |
| cc8617fd6961e070 |                                  | 安卓 | 漫画     |          |
| iVGUTjsxvpLeuDCf | aHRmhWMLkdeMuILqORnYZocwMBpMEOdt | 安卓 | 客户端   | 取流专用 |

例如：

参数的url为`appkey=1d8b6e7d45233436&test=123`->连接盐值后为`appkey=1d8b6e7d45233436&test=123560c52ccd288fed045859ed18bffd973`->进行md5 32bit校验，结果为`8a3fdd74911862810f5c78f65afcce5d`->最终参数为`appkey=1d8b6e7d45233436&test=123&sign=8a3fdd74911862810f5c78f65afcce5d`

**身份认证：**

使用参数` access_key `进行身份验证，有效期为1月，作用同`SESSDATA`

可以使用` refresh_token `进行刷新
