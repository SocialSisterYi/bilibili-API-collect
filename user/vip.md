# 大会员兑换福利

- [大会员兑换福利](#大会员兑换福利)
	- [兑换状态查询](#兑换状态查询)
	- [兑换](#兑换)

---

## 卡券状态查询

> http://api.bilibili.com/x/vip/privilege/my

*请求方式:GET*

认证方式：Cookie（SESSDATA）或APP

**json回复：**

根对象：

| 字段    | 类型 | 内容       | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值 | -101：账号未登录<br />-400：请求错误<br />0：成功 |
| message | str  | 错误信息 |                             |
| ttl | num | 1 | |
| data    | obj  | 信息本体  |                              |

`data`对象：

| 字段           | 类型 | 内容             | 备注                     |
| ----- | -------|----------------|------ |
| list  | array | 卡券列表 |              |

`list`数组：

| 字段    | 类型 | 内容             | 备注 |
| ----- | -------|-----------------|------ |
| 0    | obj   | B币兑换状态 |              |
| 1    | obj   | 会员购优惠券兑换状态 |      |

`list`中的对象：

|        字段    | 类型  | 内容             | 备注 |
| -------------- | -----|------------------|------ |
| type           | num  | 卡券类型 | 1：B币<br />2：会员购优惠券<br />3：漫画福利券 |
| state        | num  | 兑换状态 | 0：当月未兑换<br />1：已兑换 |
| expire_time    | num  | 当月过期时间 | 当月月底 |
| vip_type | num | (?) |  |


**示例：**

```shell
curl -G 'http://api.bilibili.com/x/vip/privilege/my' \
-b "SESSDATA=xxx"
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "list": [
            {
                "type": 1,
                "state": 1,
                "expire_time": 1640966399,
                "vip_type": 2
            },
            {
                "type": 2,
                "state": 1,
                "expire_time": 1640966399,
                "vip_type": 2
            },
            {
                "type": 3,
                "state": 0,
                "expire_time": 1640966399,
                "vip_type": 2
            }
        ]
    }
}
```

</details>


## 兑换
> http://api.bilibili.com/x/vip/privilege/receive

*请求方式:POST*

认证方式：Cookie(SESSDATA)

**正文参数：**

| 参数名     | 类型 | 内容        | 必要性         | 备注                      |
| ---------- | ---- | ---------- | -------- | ---------------------- |
| type       | num  | 兑换类型 | 必要          | 1：B币<br />2：会员购优惠券<br />3：漫画福利券<br />4.会员购运费券 |
| csrf       | num  | CSRF token  | 必要          | Cookie bili_jct字段 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | -101：账号未登录<br />-111：csrf 校验失败<br />-400：请求错误<br />69800：网络繁忙 请稍后再试<br />69801：你已领取过该权益<br />0：成功 |
| message | str  | 错误信息 |                                                              |
| ttl     | num  | 1        |                                                              |

**示例：**

```shell
curl 'http://api.bilibili.com/x/vip/privilege/receive' \
-b 'SESSDATA=xxx' \
--data-urlencode 'type=1' \
--data-urlencode 'csrf=csrf_token'
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

</details>
