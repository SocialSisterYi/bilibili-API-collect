# B币方式充电

<img src="/imgs/battery-100.png" width="100" height="100"/>

**注：1B币折合10电池，一般地充电10电池可获得1经验**

> http://api.bilibili.com/x/ugcpay/trade/elec/pay/quick

*方式：POST*

需要登录(SESSDATA)

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名   | 类型 | 内容                | 必要性 | 备注                                              |
| -------- | ---- | ------------------- | ------ | ------------------------------------------------- |
| elec_num | num  | 充电电池数量        | 必要   | 必须在20-99990之间                                |
| up_mid   | num  | 充电对象用户UID     | 必要   |                                                   |
| otype    | str  | 充电来源            | 必要   | up：空间充电<br />archive：视频充电               |
| oid      | num  | 充电来源代码        | 必要   | 空间充电：充电对象用户UID<br />视频充电：视频avID |
| csrf     | str  | cookies中的bili_jct | 必要   |                                                   |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功（并不代表充电成功） <br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段     | 类型 | 内容        | 备注                                             |
| -------- | ---- | ----------- | ------------------------------------------------ |
| mid      | num  | 本用户UID   |                                                  |
| up_mid   | num  | 目标用户UID |                                                  |
| order_no | str  | 留言token   | 用于添加充电留言                                 |
| elec_num | num  | 充电电池数  |                                                  |
| exp      | num  | 获得经验数  |                                                  |
| status   | num  | 返回结果    | 4：成功<br />-2：低于20电池下限<br />-4：B币不足 |
| msg      | str  | 错误信息    | 默认为空                                         |

**示例：**

以空间的方式向用户`UID=293793435`充了20电池，得到2经验，留言token为`BPRG5CEC3VUPOOANA540`

此时`data`.`status`=`4`

~~（自己冲自己QAQ）~~

curl -b "SESSDATA=xxx" -d "elec_num=20&u
p_mid=293793435&otype=up&oid=293793435&csrf=xxx" "http://api.bilibili.com/x/ugcpay/trade/elec/pay/quick"

```json
{
    "code":0,
    "message":"0",
    "ttl":1,
    "data":{
        "mid":293793435,
        "up_mid":293793435,
        "order_no":"BPRG5CEC3VUPOOANA540",
        "elec_num":20,
        "exp":2,
        "status":4,
        "msg":""
    }
}
```

当所充电池数小于20时，充电不会成功

此时`data`.`status`=`-2`

curl -b SESSDATA=xxx -d "elec_num=1&u
p_mid=293793435&otype=up&oid=293793435&csrf=xxx" "http://api.bilibili.com/x/ugcpay/trade/elec/pay/quick"

```json
{
    "code":0,
    "message":"0",
    "ttl":1,
    "data":{
        "mid":0,
        "up_mid":0,
        "order_no":"",
        "elec_num":0,
        "exp":0,
        "status":-2,
        "msg":"elec raw order create failed: 88201"
    }
}
```

当所充电池数折合的B币数不足时，充电也不会成功

此时`data`.`status`=`-4`

curl -b SESSDATA=xxx -d "elec_num=999&u
p_mid=293793435&otype=up&oid=293793435&csrf=xxx" "http://api.bilibili.com/x/ugcpay/trade/elec/pay/quick"

```json
{
    "code":0,
    "message":"0",
    "ttl":1,
    "data":{
        "mid":0,
        "up_mid":0,
        "order_no":"",
        "elec_num":0,
        "exp":0,
        "status":-4,
        "msg":"bp.to.battery http failed, invalid args, errNo=800409904: B 币余额不足"
    }
}
```

