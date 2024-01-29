# 青少年模式
## 开启/关闭
> https://app.bilibili.com/x/v2/account/teenagers/update

*请求方式：POST*

认证方式：APP（详见[设备各类标识算法](../misc/device_identity.md)）

**POST参数：**

| 参数名    | 类型  | 内容    | 必要性     | 备注  |
|--------|-----|-------|---------|-----|
| appkey | str | APP密钥 | APP必要 |     |
| ts     | num | 当前时间戳 | APP必要 |     |
| sign   | str | APP签名 | APP必要 |     |
| access_key   | str |  APP登录Token | APP必要 |     |
| device_model   | str | 设备 Model | APP必要 |     |
| channel | str | APP下载渠道 | APP必要 | 比如yingyongbao |
| mobi_app | str |APP 包类型 | APP必要 |  |
| platform | str |平台类型| APP必要 | android |
| c_locale | str |语言| 非必要 | zh_CN |
| s_locale | str |语言| 非必要 | zh_CN |
| statistics | str | ? | 必要 | 一般固定为{"appId":1,"platform":3,"version":"7.27.0","abtest":""},非key-value入参需要转URL编码 |
| pwd | num |密码| 必要 | 开启时为4位，关闭时必须为空 |
| teenagers_mode | num |开启/关闭模式| 必要 | 0为开启，1为关闭 |
| teenagers_status | num |当前模式状态| 必要 | 0为已经开启，1为目前关闭 |

**json回复：**

根对象：

| 字段    | 类型   | 内容     | 备注                         |
| ------- | ------ | -------- | ---------------------------- |
| code    | num    | 返回值   | 0：成功 <br />-400：请求错误 |
| message | str    | 错误信息 | 默认为0                      |
| ttl     | num    | 1        |                  |

**示例：**
关闭本账号的青少年模式（pwd=&teenagers_mode=1&teenagers_status=0）
```shell
curl --location 'https://app.bilibili.com/x/v2/account/teenagers/update' \
--header 'Device-Id: 你的设备id' \
--header 'Fp_local: 你的本地设备指纹' \
--header 'Fp_remote: 你的远程设备指纹' \
--header 'Session_id: 会话id' \
--header 'App-Key: android' \
--header 'Content-Type: application/x-www-form-urlencoded; charset=utf-8' \
--data-urlencode 'access_key=你的access_key' \
--data-urlencode 'appkey=1d8b6e7d45233436' \
--data-urlencode 'build=6270200' \
--data-urlencode 'c_locale=zh_CN' \
--data-urlencode 'channel=yingyongbao' \
--data-urlencode 'device_model=samsung%257CSM-G955N' \
--data-urlencode 'mobi_app=android' \
--data-urlencode 'platform=android' \
--data-urlencode 's_locale=zh_CN' \
--data-urlencode 'statistics=%257B%2522appId%2522%253A1%252C%2522platform%2522%253A3%252C%2522version%2522%253A%25226.27.0%2522%252C%2522abtest%2522%253A%2522%2522%257D' \
--data-urlencode 'pwd=' \
--data-urlencode 'teenagers_mode=1' \
--data-urlencode 'teenagers_status=0' \
--data-urlencode 'ts=1699301298' \
--data-urlencode 'sign=0666c38cb79691c4a0d9570a0669ec96' \
```

<details>
<summary>查看响应示例：</summary>
  
```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```
pwd有数值时
```json
{
    "code": -400,
    "message": "关闭时密码必须为空",
    "ttl": 1
}
```

</details>
