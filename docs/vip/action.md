# 大会员操作

## 兑换卡券

> <https://api.bilibili.com/x/vip/privilege/receive>

*请求方式：POST*

认证方式：Cookie (SESSDATA)

**正文参数 (application/x-www-form-urlencoded)：**

| 参数名 | 类型 | 内容                    | 必要性 | 备注                                                                                 |
| ------ | ---- | ----------------------- | ------ | ------------------------------------------------------------------------------------ |
| type   | num  | 兑换类型                | 必要   | 1：B币券<br />2：会员购优惠券<br />3：漫画福利券<br />4：会员购包邮券<br />5：漫画商城优惠券<br />6：装扮体验卡<br />7：课堂优惠券 |
| csrf   | str  | CSRF Token (位于cookie) | 必要   |                                                                                      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                                                              |
| ------- | ---- | -------- | ------------------------------------------------------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf 校验失败<br />-400：请求错误<br />69800：网络繁忙 请稍后再试<br />69801：你已领取过该权益 |
| message | str  | 错误信息 | 成功时为`0`                                                                                       |
| ttl     | num  | 1        |                                                                                                   |

**示例：**

```shell
curl 'https://api.bilibili.com/x/vip/privilege/receive' \
  -b 'SESSDATA=xxx' \
  --data-urlencode 'type=1' \
  --data-urlencode 'csrf=xxx'
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

## 大会员每日经验

> <https://api.bilibili.com/x/vip/experience/add>

*请求方式：POST*

认证方式：Cookie (SESSDATA)

**正文参数 (application/x-www-form-urlencoded)：**

| 参数名 | 类型 | 内容                    | 必要性 | 备注 |
| ------ | ---- | ----------------------- | ------ | ---- |
| csrf   | str  | CSRF Token (位于cookie) | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                                                           |
| ------- | ---- | -------- | ---------------------------------------------------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf 校验失败<br />69198：用户经验已经领取<br />6034007：请求频繁,请稍后再试 |
| message | str  | 错误信息 | 成功时为`0`                                                                                    |
| ttl     | num  | 1        |                                                                                                |
| data    | obj  | 信息本体 |                                                                                                |

`data`对象：

| 字段     | 类型 | 内容         | 备注             |
| -------- | ---- | ------------ | ---------------- |
| type     | num  | 0            | **作用尚不明确** |
| is_grant | bool | 是否领取成功 |                  |

**示例：**

```shell
curl 'https://api.bilibili.com/x/vip/experience/add' \
  -b 'SESSDATA=xxx' \
  --data-urlencode 'csrf=xxx'
```

<details>
<summary>查看响应示例：</summary>

当经验领取成功时：

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "type": 0,
    "is_grant": true
  }
}
```

当经验已经领取过时：

```json
{
  "code": 69198,
  "message": "用户经验已经领取",
  "ttl": 1,
  "data": {
    "type": 0,
    "is_grant": false
  }
}
```

</details>
