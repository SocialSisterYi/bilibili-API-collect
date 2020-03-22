# 充电留言

http://api.bilibili.com/x/ugcpay/trade/elec/message

*方式：POST*

需要登录(SESSDATA)

参数：

| 参数名   | 内容                | 必要性 | 备注 |
| -------- | ------------------- | ------ | ---- |
| order_id | 交易编号            | 必要   |      |
| message  | 留言内容            | 必要   |      |
| csrf     | cookies中的bili_jct | 必要   |      |

**json回复：**

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0成功 <br />-400请求错误<br />-111csrf校验失败<br />-101账号未登录<br />88203不能重复留言 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |

示例：

成功为交易编号为`BPRG5CEC3VUPOOANA540`的充电操作，添加了内容为`支持一下大佬`的留言

curl -b SESSDATA=xxx -d "csrf=xxx&order_id=BPRG
5CEC3VUPOOANA540&message=%e6%94%af%e6%8c%81%e4%b8%80%e4%b8%8b%e5%a4%a7%e4%bd%ac" "http://api.bilibili.com/x/ugcpay/trade/elec/message"

```json
{
    "code":0,
    "message":"0",
    "ttl":1
}
```

