# 客服消息

## 心跳

> https://customerservice.bilibili.com/x/custom/session_svr/v1/heart_beat

*请求方式: GET*

认证方式: Cookie (SESSDATA)

**URL参数:**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| shop_id | num  | 0 | 非必要 |  |
| shop_father_id | num  | 0 | 非必要 |  |
| build | num  | 客户端版本 | 非必要 | web: 0 |
| mobi_app | str | 客户端类型 | 非必要 | 如 `web` |

**JSON回复:**

|字段|类型|内容|备注|
|-|-|-|-|
|code|num|返回值|0: 成功|
|msg|str|`ok`|失败时不存在|
|message|str|错误信息|成功时为 `ok`|
|ttl|num|1||

**示例:**

```shell
curl -G "https://customerservice.bilibili.com/x/custom/session_svr/v1/heart_beat" \
-b "SESSDATA=xxx"
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "msg": "ok",
  "message": "ok",
  "ttl": 1
}
```

</details>

## 上传文件

> https://customerservice.bilibili.com/x/custom/msg_svr/v1/upload

*请求方式: POST*

认证方式: Cookie (SESSDATA)

注: 上传的文件 15 分钟内有效, 过期后下载会返回 HTTP 403

**正文参数 (multipart/form-data):**

|参数名|类型|内容|必要性|备注|
|-|-|-|-|-|
|file|file|文件内容|必要||
|filename|str|文件名|必要||
|mid|num|用户 mid|必要||
|csrf|str|CSRF Token (位于 Cookie 中 bili_jct)|必要||

**JSON回复:**

根对象:

|字段|类型|内容|备注|
|-|-|-|-|
|code|num|返回值|0: 成功<br />1000011: 仅支持上传300M内的文件<br />1200201: 获取用户信息失败|
|message|str|错误信息|成功时为 `ok`|
|ttl|num|1||
|data|obj|上传结果||

`data` 对象:

|字段|类型|内容|备注|
|-|-|-|-|
|key|str|文件名||
|url|str|文件 URL|注意转义|

**示例:**

上传文件 `./headers/xx-out.xcf`, 文件名 `ihavenoname`

```shell
curl -X POST "https://customerservice.bilibili.com/x/custom/msg_svr/v1/upload" \
-F 'file=@./headers/xx-out.xcf' \
-F 'filename=ihavenoname' \
-F 'mid=1070915568' \
-F 'csrf=xxx' \
-b 'SESSDATA=xxx; bili_jct=xxx'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "ok",
  "ttl": 1,
  "data": {
    "key": "1a0c88d240852155a111e4cc6893be39.xcf",
    "url": "https://jssz-boss.hdslb.com/customer-video-upload/1a0c88d240852155a111e4cc6893be39.xcf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=f9TxwsagojnE1DWM%2F20240803%2Fjssz%2Fs3%2Faws4_request&X-Amz-Date=20240803T115447Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=cef962c8e503c6ff564fd485bdef1079df1b4a7e38f4fbd9c21a5667207f406e"
  }
}
```

</details>
