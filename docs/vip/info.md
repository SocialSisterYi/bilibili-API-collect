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

| 字段             | 类型  | 内容           | 备注        |
| ---------------- | ----- | -------------- | ----------- |
| list             | array | 卡券信息列表   |             |
| is_short_vip     | bool  | (?)            |             |
| is_freight_open  | bool  | (?)            |             |
| level            | num   | 当前等级       |             |
| cur_exp          | num   | 当前拥有经验值 |             |
| next_exp         | num   | 升级所需经验值 | 满级时为 -1 |
| is_vip           | bool  | 是否为大会员   |             |
| is_senior_member | num   | (?)            |             |
| format060102     | num   | (?)            |             |


`list`数组：

| 索引 | 类型 | 内容                             | type | 备注                            |
| ---- | ---- | -------------------------------- | ---- | ------------------------------- |
| 0    | obj  | B币兑换状态                      | 1    |                                 |
| 1    | obj  | 会员购优惠券兑换状态             | 2    |                                 |
| 2    | obj  | 漫画福利券兑换状态               | 3    |                                 |
| 3    | obj  | 会员购包邮券兑换状态             | 4    |                                 |
| 4    | obj  | 漫画商城优惠券兑换状态           | 5    |                                 |
| 5    | obj  | 装扮体验卡兑换状态               | 6    |                                 |
| 6    | obj  | 课堂优惠券兑换状态               | 7    |                                 |
| 7    | obj  | （~~王者荣耀~~）游戏礼盒兑换状态 | 8    | 每日可领取，目前 state 固定为 1 |
| 8    | obj  | 每日 10 经验领取状态             | 9    | 每日可领取，未完成时 state 为 2 |

`list`中的对象：

| 字段              | 类型 | 内容                 | 备注                                                  |
| ----------------- | ---- | -------------------- | ----------------------------------------------------- |
| type              | num  | 卡券类型             | 详见 `list` 数组表格中的 `type` 项                    |
| state             | num  | 兑换状态             | 0：未兑换<br />1：已兑换<br />2：未完成（若需要完成） |
| expire_time       | num  | 本轮卡券过期时间戳   | 当月月底/当日24点                                     |
| vip_type          | num  | 当前用户的大会员状态 | 2：年度大会员                                         |
| next_receive_days | num  | 距下一轮兑换剩余天数 | 无权限时，每月任务固定为 0，每日固定为 1    	    	|
| period_end_unix   | num  | 下一轮兑换开始时间戳 | 秒级时间戳                                            |

**注意：**
卡券除每日可领取（`type` 为 `8` 和 `9`）的，其他可通过 [https://api.bilibili.com/x/vip/privilege/receive](./action.md#兑换卡券) 领取  
每日 10 经验领取（`type` 为 `9`）需要完成视频观看，未完成的 `state` 为 2。

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
