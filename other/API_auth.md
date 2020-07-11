# API认证与鉴权

## cookie方式

cookie中的值在访问登录接口成功登录时，用`set-cookie`写入

在访问api时为`Cookie`头的数据

Token有效期为1月，更改密码或过期失效

| cookie项          | 含义              | 备注                                       |
| ----------------- | ----------------- | ------------------------------------------ |
| DedeUserID        | 当前用户UID       |                                            |
| DedeUserID__ckMd5 | 用户UID md5校验值 |                                            |
| SESSDATA          | 登录Token         | 用于用户识别与鉴权<br />作用同`access_key` |
| bili_jct          | CSRF Token        | 用于操作性接口                             |

## app方式

| 参数          | 含义             | 备注           |
| ------------- | ---------------- | -------------- |
| appkey        | app密钥          |                |
| sign          | app签名          |                |
| access_key    | app登录Token     |                |
| refresh_token | app刷新登录Token | 仅在刷新时使用 |

**接口鉴权：**

使用`appkey`作为api的必要参数，并使用除`sign`外所有参数的url字串后连接相对应的盐值进行**md5校验**（32位小写），把计算结果作为sign的值，与前面参数一同发送

**appkey与sign盐值一一对应**

已知的appkey与签名：

| appkey           | sign盐值                         |
| ---------------- | -------------------------------- |
| 1d8b6e7d45233436 | 560c52ccd288fed045859ed18bffd973 |
| bb3101000e232e27 | 36efcfed79309338ced0380abd824ac1 |
| 07da50c9a0bf829f | 75d35aa5c06fb46e40059a6a5bf671a6 |
| 4409e2ce8ffd12b8 | 59b43e04ad6965f34319062b478f83dd |
| 37207f2beaebf8d7 | e988e794d4d4b6dd43bc0e89d6e90c43 |

例如：

参数的url为`appkey=1d8b6e7d45233436&test=123`->连接盐值后为`appkey=1d8b6e7d45233436&test=123560c52ccd288fed045859ed18bffd973`->进行md5 32bit校验，结果为`8a3fdd74911862810f5c78f65afcce5d`->最终参数为`appkey=1d8b6e7d45233436&test=123&sign=8a3fdd74911862810f5c78f65afcce5d`

**身份认证：**

使用参数` access_key `进行身份验证，有效期为1月，作用同`SESSDATA`

可以使用` refresh_token `进行刷新

