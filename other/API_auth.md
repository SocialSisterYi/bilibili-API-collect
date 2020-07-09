# API认证与鉴权

## cookie方式

cookie中的值在访问登录接口成功登录时，用`set-cookie`写入

在访问api时为`Cookie`头的数据

Token有效期为1月，更改密码或过期失效

| cookie项          | 含义              | 备注               |
| ----------------- | ----------------- | ------------------ |
| DedeUserID        | 当前用户UID       |                    |
| DedeUserID__ckMd5 | 用户UID md5校验值 |                    |
| SESSDATA          | 登录Token         | 用于用户识别与鉴权 |
| bili_jct          | CSRF Token        | 用于操作性接口     |

