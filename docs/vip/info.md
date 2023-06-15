# 大会员信息

## 卡券状态查询

> https://api.bilibili.com/x/vip/privilege/my

*请求方式：GET*

认证方式：Cookie (SESSDATA) / access_key

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | -101：账号未登录<br />-400：请求错误<br />0：成功 |
| message | str  | 错误信息 |                                                   |
| ttl     | num  | 1        |                                                   |
| data    | obj  | 信息本体 |                                                   |

`data`对象：

| 字段            | 类型  | 内容         | 备注 |
| --------------- | ----- | ------------ | ---- |
| list            | array | 卡券信息列表 |      |
| is_short_vip    | bool  | (?)          |      |
| is_freight_open | bool  | (?)          |      |

`list`数组：

| 字段 | 类型  | 内容          | 备注 |
|----|-----|-------------|----|
| 0  | obj | B币兑换状态      |    |
| 1  | obj | 会员购优惠券兑换状态  |    |
| 2  | obj | 漫画福利券兑换状态   |    |
| 3  | obj | 会员购包邮券兑换状态  |    |
| 4  | obj | 漫画商城优惠券兑换状态 |    |
| 5  | obj | 装扮体验卡兑换状态   |    |
| 6  | obj | 课堂优惠券兑换状态   |    |

`list`中的对象：

| 字段              | 类型 | 内容                 | 备注                                                         |
| ----------------- | ---- | -------------------- | ------------------------------------------------------------ |
| type              | num  | 卡券类型             | 1：B币券<br />2：会员购优惠券<br />3：漫画福利券<br />4：会员购包邮券<br/>5：漫画商城优惠券 |
| state             | num  | 兑换状态             | 0：当月未兑换<br />1：已兑换                                 |
| expire_time       | num  | 本轮卡券过期时间戳   | 当月月底                                                     |
| vip_type          | num  |                      | 2：年度大会员可兑换                                          |
| next_receive_days | num  | 距下一轮兑换剩余天数 |                                                              |
| period_end_unix   | num  | 下一轮兑换开始时间戳 | 秒级时间戳                                                   |

**示例：**

```shell
curl 'https://api.bilibili.com/x/vip/privilege/my' \
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
        "state": 0,
        "expire_time": 1667231999,
        "vip_type": 2,
        "next_receive_days": 29,
        "period_end_unix": 1667491200
      },
      {
        "type": 2,
        "state": 0,
        "expire_time": 1667231999,
        "vip_type": 2,
        "next_receive_days": 29,
        "period_end_unix": 1667491200
      },
      {
        "type": 3,
        "state": 0,
        "expire_time": 1667231999,
        "vip_type": 2,
        "next_receive_days": 29,
        "period_end_unix": 1667491200
      },
      {
        "type": 4,
        "state": 0,
        "expire_time": 1667231999,
        "vip_type": 2,
        "next_receive_days": 29,
        "period_end_unix": 1667491200
      },
      {
        "type": 5,
        "state": 0,
        "expire_time": 1667231999,
        "vip_type": 2,
        "next_receive_days": 29,
        "period_end_unix": 1667491200
      }
    ],
    "is_short_vip": false,
    "is_freight_open": true
  }
}
```

</details>