# 充电留言

## 发送充电留言

> https://api.bilibili.com/x/ugcpay/trade/elec/message

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（application/x-www-form-urlencoded）：**

| 参数名   | 类型 | 内容                     | 必要性 | 备注 |
| -------- | ---- | ------------------------ | ------ | ---- |
| order_id | str  | 留言token                | 必要   |      |
| message  | str  | 留言内容                 | 必要   |      |
| csrf     | str  | CSRF Token（位于cookie） | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功 <br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />88203：不能重复留言 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

为留言token为`BPRG5CEC3VUPOOANA540`的充电操作，添加了内容为`支持一下大佬`的留言

```shell
curl 'https://api.bilibili.com/x/ugcpay/trade/elec/message' \
  --data-urlencode 'order_id=BPRG5CEC3VUPOOANA540' \
  --data-urlencode 'message=支持一下大佬' \
  --data-urlencode 'csrf=xxx' \
  -b 'SESSDATA=xxx'
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

## 查询我收到的充电留言

> https://member.bilibili.com/x/web/elec/remark/list

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名 | 类型 | 内容      | 必要性 | 备注             |
| ------ | ---- | --------- | ------ | ---------------- |
| begin  | str  | 起始日期  | 非必要 | 默认2016-01-01   |
| end    | str  | 结束日期  | 非必要 | 默认2050-01-01   |
| pn     | str  | 页数      | 非必要 |                  |
| ps     | str  | 分页大小  | 非必要 | 取值范围\[1,12\] |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| msg     | str  | 错误信息 | 成功时为`0`                   |
| ttl     | num  | 1        |                               |
| data    | obj  | 信息本体 |                               |

`data`对象：

| 字段  | 类型  | 内容     | 备注 |
| ----- | ----- | -------- | ---- |
| list  | array | 信息本体 |      |
| pager | obj   | 分页信息 |      |

`list`数组中的对象：

| 字段         | 类型 | 内容                   | 备注 |
| ------------ | ---- | ---------------------- | ---- |
| aid          | num  |                        |      |
| bvid         | str  |                        |      |
| id           | num  | 留言记录id             |      |
| mid          | num  | 0                      |      |
| reply_mid    | num  | 0                      |      |
| elec_num     | num  | 0                      |      |
| state        | num  | UP是否已经回复这条留言 | 0：未回复<br />1：已回复 |
| msg          | str  | 留言信息               |      |
| aname        | str  | 空                     |      |
| uname        | str  | 空                     |      |
| avator       | str  | 空                     |      |
| reply_name   | str  | 空                     |      |
| reply_avator | str  | 空                     |      |
| reply_msg    | str  | 空                     |      |
| ctime        | num  | 留言时间               | 毫秒级时间戳 |
| reply_time   | num  | 0                      |      |

`pager`对象：

| 字段    | 类型 | 内容         | 备注 |
| ------- | ---- | ------------ | ---- |
| current | num  | 当前页数     |      |
| size    | num  | 当前分页大小 |      |
| total   | num  | 记录总数     |      |

**示例：**

```shell
curl 'https://member.bilibili.com/x/web/elec/remark/list?begin=2016-01-01&end=2050-01-01&pn=1&ps=10' \
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
    "list": [
      {
        "aid": 0,
        "bvid": "",
        "id": 6715018,
        "mid": 0,
        "reply_mid": 0,
        "elec_num": 0,
        "state": 0,
        "msg": "加油",
        "aname": "",
        "uname": "",
        "avator": "",
        "reply_name": "",
        "reply_avator": "",
        "reply_msg": "",
        "ctime": 1650665119000,
        "reply_time": 0
      }
    ],
    "pager": {
      "current": 1,
      "size": 10,
      "total": 448
    }
  }
}
```

</details>

## 查询充电留言详情

> https://member.bilibili.com/x/web/elec/remark/detail

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| id     | num  | 留言id   | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 成功时为 `0`                                      |
| ttl     | num  | 1        |                                                   |
| data    | obj  | 信息本体 |                                                   |

`data`对象：

| 字段         | 类型 | 内容                   | 备注 |
| ------------ | ---- | ---------------------- | ---- |
| aid          | num  |                        |      |
| bvid         | str  |                        |      |
| id           | num  | 留言id                 |      |
| mid          | num  | 留言者mid（充电用户）  |      |
| reply_mid    | num  | UP主mid                |      |
| elec_num     | num  | 0                      |      |
| state        | num  | UP是否已经回复这条留言 | 0：未回复<br />1：已回复 |
| msg          | str  | 留言内容               |      |
| aname        | str  | 空                     |      |
| uname        | str  | 留言者用户名           |      |
| avator       | str  | 留言者头像             |      |
| reply_name   | str  | UP主用户名             |      |
| reply_avator | str  | UP主头像               |      |
| reply_msg    | str  | 回复内容               |      |
| ctime        | num  | 留言时间               | 毫秒级时间戳 |
| reply_time   | num  | 回复时间               | 毫秒级时间戳 |

**示例：**

```shell
curl 'https://member.bilibili.com/x/web/elec/remark/detail?id=6507563' \
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
    "aid": 0,
    "bvid": "",
    "id": 6507563,
    "mid": 19978396,
    "reply_mid": 2062760,
    "elec_num": 0,
    "state": 1,
    "msg": "感谢搬运",
    "aname": "",
    "uname": "HANSOOOOOL",
    "avator": "http://i1.hdslb.com/bfs/face/5c22af0261b8b3f9a54b6e0038e35430e9ed9cfd.jpg",
    "reply_name": "一把近战都不给六花",
    "reply_avator": "http://i2.hdslb.com/bfs/face/1804b716084908d4992bdd35827d0c2d7222fe97.jpg",
    "reply_msg": "(￣3￣)",
    "ctime": 1646726966000,
    "reply_time": 1646811946000
  }
}
```

</details>

## 回复充电留言

> https://member.bilibili.com/x/web/elec/remark/reply

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（application/x-www-form-urlencoded）：**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| csrf   | str  | csrf     | 必要   |      |
| id     | num  | 留言id   | 必要   |      |
| msg    | str  | 回复信息 | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf 校验失败<br />-400：请求错误<br />20004：充电服务异常 |
| message | str  | 错误信息 |                                                              |
| ttl     | num  | 1        |                                                              |
| data    | num  | 数据本体 | 1：成功<br />2：失败                                         |

**示例：**

```shell
curl 'https://member.bilibili.com/x/web/elec/remark/reply' \
  -b 'SESSDATA=xxx' \
  --data-urlencode 'csrf=xxx' \
  --data-urlencode 'id=6258929' \
  --data-urlencode 'msg=(￣3￣)'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": 1
}
```

</details>
