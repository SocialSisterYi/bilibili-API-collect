# 查看注册时间（对于非UP主）或首次投稿时间（对于UP主）
> https://member.bilibili.com/x/web/index/scrolls

*请求方式：get*

认证方式：Cookie(SESSDATA)

**JSON回复**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0: 成功<br />-101: 账号未登录 |
| message | str  | 错误信息 | 默认为 0                      |
| ttl     | num  | 1        |                               |
| data    | obj  | 数据本体 | 失败时不存在                  |

`data` 对象：

`data`中的 `ewcomer` 对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| medals      | num  | ?   | 作用尚不明确 |
| no_receive  | num  | ? |  作用尚不明确     |
| task_received   | num  | ?    |  作用尚不明确  |
| sub_zero    |  bool  | ? |  作用尚不明确 |

`data` 中的 `scrolls`对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| id    | num  | ?   |     作用尚不明确 |
| icon | str | 一张图片的url | 作用尚不明确,图片内容为日历字样        |
| type     | num  | ?       |            作用尚不明确             |
| name    | str  | 信息本体 | 若不为up主则返回注册时间，为up主则返回成为up主的时间    |
| comment | ? | ?  | 作用尚不明确|
| new | num | ? | 作用尚不明确 |
| hot | num | ? | 作用尚不明确 |
| link | url | ? | 提示改页面已废弃|

**请求实例：**

查询自己的注册时间:
```shell
curl -G https://member.bilibili.com/x/web/index/scrolls -b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

对于up主：

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "newcomer": {
      "medals": 0,
      "no_receive": 0,
      "task_received": 0,
      "sub_zero": false,
      "tasks": null
    },
    "scrolls": [
      {
        "id": 0,
        "icon": "http://i0.hdslb.com/bfs/archive/f58a4b33bbf23464d0aa24210cf97233506e50dc.png",
        "type": 1,
        "name": "成为UP主的第29天",
        "comment": "",
        "new": 0,
        "hot": 0,
        "link": "https://member.bilibili.com/studio/gabriel/creator-calendar/today"
      }
    ]
  }
}
```

对于非up主：

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "newcomer": {
      "medals": 0,
      "no_receive": 0,
      "task_received": 0,
      "sub_zero": false,
      "tasks": null
    },
    "scrolls": [
      {
        "id": 0,
        "icon": "http://i0.hdslb.com/bfs/archive/f58a4b33bbf23464d0aa24210cf97233506e50dc.png",
        "type": 1,
        "name": "加入bilibili星球的第29天",
        "comment": "",
        "new": 0,
        "hot": 0,
        "link": "https://member.bilibili.com/studio/gabriel/creator-calendar/today"
      }
    ]
  }
}
```
</details>
