# B币方式充电

<img src="../../assets/img/battery-100.png" width="100" height="100"/>

**注**：以前充电是电池的概念，1B币折合10电池，一般地充电10电池可获得1经验

**目前（2020/12/02后）则是贝壳的概念，1B币折合1贝壳、1经验（如果存在小数点，则经验值向下取整，即2.5B币获得2经验）**

## 新版本B币充电

> https://api.bilibili.com/x/ugcpay/web/v2/trade/elec/pay/quick

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名   | 类型 | 内容                     | 必要性 | 备注                                              |
| -------- | ---- | ------------------------ | ------ | ------------------------------------------------- |
| bp_num   | num  | 贝壳数量                 | 必要   | 必须在2-9999之间                                |
| is_bp_remains_prior | bool  | 是否优先扣除B币余额                 | 必要   | [true,false]，B币充电请选择true                                |
| up_mid   | num  | 充电对象用户mid          | 必要   |                                                   |
| otype    | str  | 充电来源                 | 必要   | up：空间充电<br />archive：视频充电               |
| oid      | num  | 充电来源代码             | 必要   | 空间充电：充电对象用户mid<br />视频充电：稿件avid |
| csrf     | str  | CSRF Token（位于cookie） | 必要   |                                                   |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功（并不代表充电成功） <br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />-500：服务器错误 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段     | 类型 | 内容        | 备注                                             |
| -------- | ---- | ----------- | ------------------------------------------------ |
| mid      | num  | 本用户mid   |                                                  |
| up_mid   | num  | 目标用户mid |                                                  |
| order_no | str  | 留言token   | 用于添加充电留言                                 |
| bp_num   | str  | 充电贝壳数  |                                                  |
| exp      | num  | 获得经验数  |                                                  |
| status   | num  | 返回结果    | 4：成功<br />-2：低于20电池下限<br />-4：B币不足 |
| msg      | str  | 错误信息    | 默认为空                                         |

**示例：**

以空间的方式向用户`mid=293793435`充了2贝壳，得到2经验，留言token为`BPRG5CEC3VUPOOANA540`

此时`data`.`status`=`4`

~~自己给自己冲QAQ~~

```shell
curl 'https://api.bilibili.com/x/ugcpay/web/v2/trade/elec/pay/quick' \
--data-urlencode 'bp_num=2' \
--data-urlencode 'is_bp_remains_prior=true' \
--data-urlencode 'up_mid=293793435' \
--data-urlencode 'otype=up' \
--data-urlencode 'oid=293793435' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "mid": 293793435,
        "up_mid": 293793435,
        "order_no": "BPRG5CEC3VUPOOANA540",
        "bp_num": 2,
        "exp": "2",
        "status": 4,
        "msg": ""
    }
}
```

</details>

当所充电贝壳数小于2时，充电不会成功

此时`data`.`status`=`-2`

```shell
curl 'https://api.bilibili.com/x/ugcpay/web/v2/trade/elec/pay/quick' \
--data-urlencode 'bp_num=1' \
--data-urlencode 'is_bp_remains_prior=true' \
--data-urlencode 'otype=up' \
--data-urlencode 'oid=293793435' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "mid": 0,
        "up_mid": 0,
        "order_no": "",
        "bp_num": "0",
        "exp": 0,
        "status": -2,
        "msg": "elec raw order create failed: 88201"
    }
}
```

</details>

当所充贝壳数折合的B币数不足时，充电也不会成功

此时`data`.`status`=`-4`

```shell
curl 'https://api.bilibili.com/x/ugcpay/web/v2/trade/elec/pay/quick' \
--data-urlencode 'bp_num=99' \
--data-urlencode 'is_bp_remains_prior=true' \
--data-urlencode 'up_mid=293793435' \
--data-urlencode 'otype=up' \
--data-urlencode 'oid=293793435' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "mid": 0,
        "up_mid": 0,
        "order_no": "",
        "bp_num": "0",
        "exp": 0,
        "status": -4,
        "msg": "bp.to.battery http failed, invalid args, errNo=800409904: B 币余额不足"
    }
}
```

</details>


## 老版本B币充电

老版本目前已过期，调用接口成功后（code返回0），data.status会返回0，且B币不会消耗，贝壳也不会增加。以下是历史信息：

<details>
<summary>查看折叠内容</summary>

> https://api.bilibili.com/x/ugcpay/trade/elec/pay/quick

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名   | 类型 | 内容                     | 必要性 | 备注                                              |
| -------- | ---- | ------------------------ | ------ | ------------------------------------------------- |
| elec_num | num  | 充电电池数量             | 必要   | 必须在2-9999之间                                |
| up_mid   | num  | 充电对象用户mid          | 必要   |                                                   |
| otype    | str  | 充电来源                 | 必要   | up：空间充电<br />archive：视频充电               |
| oid      | num  | 充电来源代码             | 必要   | 空间充电：充电对象用户mid<br />视频充电：稿件avid |
| csrf     | str  | CSRF Token（位于cookie） | 必要   |                                                   |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功（并不代表充电成功） <br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段     | 类型 | 内容        | 备注                                             |
| -------- | ---- | ----------- | ------------------------------------------------ |
| mid      | num  | 本用户mid   |                                                  |
| up_mid   | num  | 目标用户mid |                                                  |
| order_no | str  | 留言token   | 用于添加充电留言                                 |
| elec_num | num  | 充电电池数  |                                                  |
| exp      | num  | 获得经验数  |                                                  |
| status   | num  | 返回结果    | 4：成功<br />-2：低于20电池下限<br />-4：B币不足 |
| msg      | str  | 错误信息    | 默认为空                                         |

**示例：**

以空间的方式向用户`mid=293793435`充了20电池，得到2经验，留言token为`BPRG5CEC3VUPOOANA540`

此时`data`.`status`=`4`

~~再次自己冲自己QAQ~~

```shell
curl 'https://api.bilibili.com/x/ugcpay/trade/elec/pay/quick' \
--data-urlencode 'elec_num=20' \
--data-urlencode 'up_mid=293793435' \
--data-urlencode 'otype=up' \
--data-urlencode 'oid=293793435' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "mid": 293793435,
        "up_mid": 293793435,
        "order_no": "BPRG5CEC3VUPOOANA540",
        "elec_num": 20,
        "exp": 2,
        "status": 4,
        "msg": ""
    }
}
```

</details>

当所充电池数小于2时，充电不会成功

此时`data`.`status`=`-2`

```shell
curl 'https://api.bilibili.com/x/ugcpay/trade/elec/pay/quick' \
--data-urlencode 'elec_num=1' \
--data-urlencode 'up_mid=293793435' \
--data-urlencode 'otype=up' \
--data-urlencode 'oid=293793435' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "mid": 0,
        "up_mid": 0,
        "order_no": "",
        "elec_num": 0,
        "exp": 0,
        "status": -2,
        "msg": "elec raw order create failed: 88201"
    }
}
```

</details>

当所充电池数折合的B币数不足时，充电也不会成功

此时`data`.`status`=`-4`

```shell
curl 'https://api.bilibili.com/x/ugcpay/trade/elec/pay/quick' \
--data-urlencode 'elec_num=999' \
--data-urlencode 'up_mid=293793435' \
--data-urlencode 'otype=up' \
--data-urlencode 'oid=293793435' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "mid": 0,
        "up_mid": 0,
        "order_no": "",
        "elec_num": 0,
        "exp": 0,
        "status": -4,
        "msg": "bp.to.battery http failed, invalid args, errNo=800409904: B 币余额不足"
    }
}
```

</details>
</details>
