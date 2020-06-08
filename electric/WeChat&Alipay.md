# 微信&支付宝方式充电

**本页所有操作均需登录（SESSDATA）**

<img src="/imgs/battery-100.png" width="100" height="100"/>

操作流程：

1.申请充电二维码及扫码秘钥，秘钥临时保存备用

2.使用`qr_code_url`中的值生成二维码

3.用支付宝或微信扫描

4.以扫码秘钥作为参数轮询检查扫码支付结果

## 申请充电二维码及扫码秘钥

> http://api.bilibili.com/x/ugcpay/trade/elec/pay/qr_code/create 

*方式：POST*

秘钥有效时间为10分钟

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名              | 类型 | 内容                | 必要性 | 备注                                                         |
| ------------------- | ---- | ------------------- | ------ | ------------------------------------------------------------ |
| up_mid              | num  | 充电对象用户UID     | 必要   |                                                              |
| elec_num            | num  | 充电电池数量        | 必要   | 必须在20-99990之间<br />1-19区间视为充值B币                  |
| is_bp_remains_prior | bool | 是否优先扣除B币     | 必要   | true：是<br />false：否<br />在B币不足时剩余的部分利用支付平台支付 |
| otype               | str  | 充电来源            | 必要   | up：空间充电<br />archive：视频充电                          |
| oid                 | num  | 充电来源代码        | 必要   | 空间充电：充电对象用户UID<br />视频充电：视频avID            |
| csrf                | str  | cookies中的bili_jct | 必要   |                                                              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />-500：服务器错误 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段        | 类型 | 内容               | 备注     |
| ----------- | ---- | ------------------ | -------- |
| qr_code_url | str  | 支付二维码生成内容 | 存在转义 |
| qr_token    | str  | 扫码秘钥           |          |
| exp         | num  | 获得经验数         |          |

**示例：**

申请空间的方式向用户23215368充电10电池且不使用B币的支付二维码

curl -b "SESSDATA=xxx" -d "up_mid=23215368&elec_num=10&is_bp_remains_prior=false&otype=up&oid=23215368&csrf=xxx" "http://api.bilibili.com/x/ugcpay/trade/elec/pay/qr_code/create"

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"qr_code_url": "http://api.bilibili.com/x/ugcpay/trade/elec/pay/qr_code/gateway?mid=293793435\u0026token=c1cb1d95d2194ba58df6bb0f24ae1aaa",
		"qr_token": "c1cb1d95d2194ba58df6bb0f24ae1aaa",
		"exp": 1
	}
}
```



## 检查扫码支付结果

> http://api.bilibili.com/x/ugcpay/trade/elec/pay/order/status

*方式：GET*

**url参数：**

| 参数名   | 类型 | 内容     | 必要性 | 备注 |
| -------- | ---- | -------- | ------ | ---- |
| qr_token | str  | 扫码秘钥 | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                       |
| ttl     | num  | 1        | 作用尚不明确                  |
| data    | obj  | 信息本体 |                               |

`data`对象：

| 字段     | 类型 | 内容        | 备注                                                         |
| -------- | ---- | ----------- | ------------------------------------------------------------ |
| qr_token | str  | 扫码秘钥    |                                                              |
| order_no | str  | 留言token   | 未成功则无此项<br />用于添加充电留言                         |
| mid      | num  | 当前用户UID |                                                              |
| status   | num  | 状态值      | 若秘钥错误则无此项<br />1：已支付<br />2：未扫描<br />3：未确认 |

**示例：**

当申请到的支付二维码未被扫描时，`data`.`ststus`的值为`2`

http://api.bilibili.com/x/ugcpay/trade/elec/pay/order/status?qr_token=c7cbdc47fc424cd18f2146db653597b8

```json
{
    "code":0,
    "message":"0",
    "ttl":1,
    "data":{
        "qr_token":"c7cbdc47fc424cd18f2146db653597b8",
        "mid":293793435,
        "status":2
    }
}
```

当申请到的支付二维码已扫描但未确认时，`data`.`ststus`的值为`3`

http://api.bilibili.com/x/ugcpay/trade/elec/pay/order/status?qr_token=c7cbdc47fc424cd18f2146db653597b8

```json
{
    "code":0,
    "message":"0",
    "ttl":1,
    "data":{
        "qr_token":"c7cbdc47fc424cd18f2146db653597b8",
        "mid":293793435,
        "status":3
    }
}
```

成功支付后，`data`.`ststus`的值为`1`，且`data`.`order_no`存在留言token

http://api.bilibili.com/x/ugcpay/trade/elec/pay/order/status?qr_token=bd649c836c524550bfe22a369334fc05

```json
{
    "code":0,
    "message":"0",
    "ttl":1,
    "data":{
        "qr_token":"bd649c836c524550bfe22a369334fc05",
        "order_no":"BPTD36U3KP82I31RSSLG",
        "mid":293793435,
        "status":1
    }
}
```

