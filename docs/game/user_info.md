# 游戏区获取用户信息

## 获取用户游戏相关信息

> https://le3-api.game.bilibili.com/pc/game/user/info

_请求方式：GET_

认证方式：Cookie(SESSDATA,DedeUserID)

**json 回复：**

根对象:

| 字段       | 类型 | 内容       | 备注                         |
| ---------- | ---- | ---------- | ---------------------------- |
| code       | num  | 返回值     | 0：成功<br/>-101：账号未登录 |
| message    | str  | 验证信息   | 成功或用户尚未登录           |
| request_id | str  | 返回 id    | 随机生成                     |
| ts         | num  | 当前时间戳 |                              |
| data       | obj  | 信息本体   |                              |

`data`对象：

| 字段               | 类型 | 内容                 | 备注 |
| ------------------ | ---- | -------------------- | ---- |
| like_num           | num  |                      |      |
| following_num      | num  | 用户关注的人数       |      |
| follower_num       | num  | 关注用户的人数       |      |
| played_game_num    | num  | 用户玩过的游戏       |      |
| booked_game_num    | num  | 用户订阅的游戏       |      |
| purchased_game_num | num  | 用户购买过的游戏数量 |      |
| comment_num        | num  | 对游戏的评论数量     |      |
| favorite_num       | num  |                      |      |

**示例：**

```shell
curl 'https://le3-api.game.bilibili.com/pc/game/user/info' \
-b 'SESSDATA=xxx;DedeUserID=xxx;'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "成功",
  "request_id": "1b078ffdcb79411ba4d1652aaca42668",
  "ts": 1735817209452,
  "data": {
    "like_num": 0,
    "following_num": 9,
    "follower_num": 3008,
    "played_game_num": 9,
    "booked_game_num": 1,
    "purchased_game_num": 1,
    "comment_num": 0,
    "favorite_num": 0
  }
}
```

</details>

## 获取用户自身信息

> https://le3-api.game.bilibili.com/pc/game/user/myinfo

_请求方式：GET_

认证方式：Cookie(SESSDATA,DedeUserID)

**json 回复：**

根对象:

| 字段       | 类型 | 内容     | 备注                         |
| ---------- | ---- | -------- | ---------------------------- |
| code       | num  | 返回值   | 0：成功<br/>-101：账号未登录 |
| message    | str  | 验证信息 | 成功或用户尚未登录           |
| request_id | str  | 返回 id  | 随机生成                     |
| data       | obj  | 信息本体 |                              |

`data`对象：

| 字段            | 类型 | 内容           | 备注                          |
| --------------- | ---- | -------------- | ----------------------------- |
| mid             | num  | 用户 id        |                               |
| uname           | str  | 用户名称       |                               |
| face            | str  | 头图地址       |                               |
| sex             | num  | 用户性别       | 0：私密<br />1：男<br />2：女 |
| level           | num  | 用户等级       |                               |
| sign            | num  | 用户签名       |                               |
| tel_status      | num  | 是否验证手机号 | 0：未验证<br />1：已验证      |
| vip             | obj  | vip 信息       |                               |
| official_verify | obj  | 官方认证信息   |

`data`中的 `vip` 对象：

| 字段       | 类型 | 内容 | 备注 |
| ---------- | ---- | ---- | ---- |
| vip_type   | num  |      |      |
| vip_status | num  |      |      |

`data`中的`official_verify`对象：

| 字段 | 类型 | 内容     | 备注                |
| ---- | ---- | -------- | ------------------- |
| type | num  | 是否认证 | -1：无<br />0：认证 |
| desc | str  | 认证信息 | 无为空              |

**示例：**

```shell
curl 'https://le3-api.game.bilibili.com/pc/game/user/myinfo' \
-b 'SESSDATA=xxx;DedeUserID=xxx;'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "成功",
  "request_id": "53a7248c49864b1da75309e8db5528c7",
  "ts": 1735807472394,
  "data": {
    "mid": 402724162,
    "uname": "XXX",
    "face": "//i1.hdslb.com/bfs/face/XXX",
    "sex": 0,
    "level": 5,
    "sign": "",
    "tel_status": 1,
    "vip": {
      "vip_type": 1,
      "vip_status": 0
    },
    "official_verify": {
      "type": -1,
      "desc": ""
    }
  }
}
```

</details>
