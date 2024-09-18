# 根据关键字搜索用户 (at别人时的填充列表)

**注意关键字不一定顺序匹配，如最后示例**

> https://api.bilibili.com/x/polymer/web-dynamic/v1/mention/search

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名  | 类型 | 内容       | 必要性 | 备注                               |
| ------- | ---- | ---------- | ------ | ---------------------------------- |
| keyword | str  | 搜索关键字 | 非必要 | 若无此项，则返回所有关注用户的信息 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str  | 错误信息 | 成功时为 `0`                  |
| ttl     | num  | 1        |                               |
| data    | obj  | 数据本体 |                               |

`data`对象：

| 字段   | 类型  | 内容     | 备注                                           |
| ------ | ----- | -------- | ---------------------------------------------- |
| groups | array | 用户分组 | 根据是否关注该用户来分组，未找到用户时为空数组 |

`groups`数组：

| 项   | 类型 | 内容      | 备注 |
| ---- | ---- | --------- | ---- |
| 0    | obj  | 分组1     |      |
| n    | obj  | 分组(n+1) |      |
| ……   | obj  | ……        | ……   |

`groups`数组中的对象：

| 字段       | 类型  | 内容             | 备注                     |
| ---------- | ----- | ---------------- | ------------------------ |
| group_name | str   | 分组名称         | `我的关注`或`其他`       |
| group_type | num   | 分组类型         | 2：我的关注<br />4：其他 |
| items      | array | 搜索到的用户信息 | 按照认证状态与粉丝数排序 |

`items`数组：

| 项   | 类型 | 内容      | 备注 |
| ---- | ---- | --------- | ---- |
| 0    | obj  | 用户1     |      |
| n    | obj  | 用户(n+1) |      |
| ……   | obj  | ……        | ……   |

`items`数组中的对象:

| 字段                 | 类型 | 内容         | 备注                                     |
| -------------------- | ---- | ------------ | ---------------------------------------- |
| face                 | str  | 用户头像url  |                                          |
| fans                 | num  | 用户粉丝数   |                                          |
| name                 | str  | 用户昵称     |                                          |
| official_verify_type | num  | 用户认证状态 | -1：无<br />0：个人认证<br />1：机构认证 |
| uid                  | str  | 用户mid      |                                          |

**示例：**

搜索关键字为`社会易`的用户

```shell
curl -G 'https://api.bilibili.com/x/polymer/web-dynamic/v1/mention/search' \
--data-urlencode 'keyword=社会易' \
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
    "groups": [
      {
        "group_name": "我的关注",
        "group_type": 2,
        "items": [
          {
            "face": "https://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg",
            "fans": 3613,
            "name": "社会易姐QwQ",
            "official_verify_type": -1,
            "uid": "293793435"
          }
        ]
      },
      {
        "group_name": "其他",
        "group_type": 4,
        "items": [
          {
            "face": "https://i0.hdslb.com/bfs/face/dbc456bdec5e7a4806c9d0311d95ebcc6be674cf.jpg",
            "fans": 23464,
            "name": "社会易老师",
            "official_verify_type": -1,
            "uid": "484031754"
          },
          {
            "face": "https://i1.hdslb.com/bfs/face/5497859a550a017d0a51c640d232c539c2f48991.jpg",
            "fans": 11,
            "name": "栄禧貿易株式会社",
            "official_verify_type": -1,
            "uid": "4991467"
          },
          {
            "face": "https://i2.hdslb.com/bfs/face/311cecf9298158b8a5f47ed3e641328ab5c0cfcd.jpg",
            "fans": 10,
            "name": "社会李易儒",
            "official_verify_type": -1,
            "uid": "442101413"
          },
          {
            "face": "https://i2.hdslb.com/bfs/face/2dad05e4748b5e91e1ec5d3c5d4f0904a5bcdaf0.jpg",
            "fans": 8,
            "name": "日本国立貿易株式会社",
            "official_verify_type": -1,
            "uid": "3546589855484501"
          },
          {
            "face": "http://i0.hdslb.com/bfs/face/2ae12d7f71173baa8e00c4cfe97acb5a3de31566.jpg",
            "fans": 6,
            "name": "社会小伙肖子易",
            "official_verify_type": -1,
            "uid": "250129011"
          },
          {
            "face": "https://i2.hdslb.com/bfs/face/1ebb0d4aa8e2c4b532f82983503ec38b62a1820f.jpg",
            "fans": 4,
            "name": "社会主义接班人小易",
            "official_verify_type": -1,
            "uid": "486568790"
          },
          {
            "face": "http://i0.hdslb.com/bfs/face/dccb52f3c15ba1bb99aac3c86e9825842cc95295.jpg",
            "fans": 2,
            "name": "社会你易易",
            "official_verify_type": -1,
            "uid": "497214639"
          },
          {
            "face": "https://i1.hdslb.com/bfs/face/1902cc0b07ab4a5de6110f5adb2691cbf7051f2b.jpg",
            "fans": 1,
            "name": "社会打工不容易",
            "official_verify_type": -1,
            "uid": "3546742186314202"
          },
          {
            "face": "https://i0.hdslb.com/bfs/face/19ee1b5975969a47ba085cd1f628d86a479b9950.jpg",
            "fans": 0,
            "name": "社会交易",
            "official_verify_type": -1,
            "uid": "3493291412687622"
          },
          {
            "face": "https://i0.hdslb.com/bfs/face/de6afbda484e114b7cedeb621c3cbbaef7800988.jpg",
            "fans": 0,
            "name": "不谦易会社恐",
            "official_verify_type": -1,
            "uid": "1602175830"
          },
          {
            "face": "http://i0.hdslb.com/bfs/face/member/noface.jpg",
            "fans": 8,
            "name": "社会易总",
            "official_verify_type": -1,
            "uid": "155817540"
          },
          {
            "face": "https://i0.hdslb.com/bfs/face/member/noface.jpg",
            "fans": 0,
            "name": "社会存在与社会易逝",
            "official_verify_type": -1,
            "uid": "3546578331634371"
          },
          {
            "face": "http://i0.hdslb.com/bfs/face/member/noface.jpg",
            "fans": 0,
            "name": "社会易姐QAQ",
            "official_verify_type": -1,
            "uid": "1983403996"
          },
          {
            "face": "http://i1.hdslb.com/bfs/face/510cde8f4e3eb27aa50177d619a4200bb501797b.jpg",
            "fans": 0,
            "name": "社会易大佬人狠话不多",
            "official_verify_type": -1,
            "uid": "408471763"
          },
          {
            "face": "http://i1.hdslb.com/bfs/face/7324adb53362527a1bf5f20141a6ae4307011ea7.jpg",
            "fans": 0,
            "name": "社会易轩",
            "official_verify_type": -1,
            "uid": "384672256"
          },
          {
            "face": "http://i0.hdslb.com/bfs/face/member/noface.jpg",
            "fans": 0,
            "name": "社会易哥",
            "official_verify_type": -1,
            "uid": "284984452"
          },
          {
            "face": "http://i0.hdslb.com/bfs/face/member/noface.jpg",
            "fans": 0,
            "name": "社会易姐",
            "official_verify_type": -1,
            "uid": "249112673"
          },
          {
            "face": "http://i0.hdslb.com/bfs/face/member/noface.jpg",
            "fans": 0,
            "name": "社会易大佬",
            "official_verify_type": -1,
            "uid": "167967213"
          }
        ]
      }
    ]
  }
}
```

</details>