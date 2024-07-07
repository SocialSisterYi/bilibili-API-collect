# 根据关键字搜索用户 (at别人时的填充列表)

**注意关键字不一定顺序匹配，如最后示例**

> https://api.vc.bilibili.com/dynamic_mix/v1/dynamic_mix/at_search

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名  | 类型 | 内容       | 必要性 | 备注 |
| ------- | ---- | ---------- | ------ | ---- |
| uid     | num  | 自己的mid  | 必要   |      |
| keyword | str  | 搜索关键字 | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                                                          |
| ------- | ---- | -------- | --------------------------------------------------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />1024：系统开小差了<br />2001：关键字不合法<br />7600001：参数出错了，请输入正确参数<br />7600008：`uid`参数与自己的mid不匹配 |
| msg     | str  | 错误信息 | 成功时为空文本                                                                                |
| message | str  | 错误信息 | 同`msg`                                                                                       |
| data    | obj  | 数据本体 |                                                                                               |

`data`对象：

| 字段   | 类型  | 内容     | 备注                                         |
| ------ | ----- | -------- | -------------------------------------------- |
| groups | array | 用户分组 | 根据是否关注该用户来分组，未找到用户时无此项 |
| \_gt\_ | num   | 0        | **作用尚不明确**                             |

`groups`数组：

| 项   | 类型 | 内容      | 备注 |
| ---- | ---- | --------- | ---- |
| 0    | obj  | 分组1     |      |
| n    | obj  | 分组(n+1) |      |
| ……   | obj  | ……        | ……   |

`groups`数组中的对象：

| 字段       | 类型  | 内容             | 备注                     |
| ---------- | ----- | ---------------- | ------------------------ |
| group_type | num   | 分组类型         | 2：我的关注<br />4：其他 |
| group_name | str   | 分组名称         | `我的关注`或`其他`       |
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
| uid                  | num  | 用户mid      |                                          |
| uname                | str  | 用户昵称     |                                          |
| face                 | str  | 用户头像url  |                                          |
| fans                 | num  | 用户粉丝数   |                                          |
| official_verify_type | num  | 用户认证状态 | -1：无<br />0：个人认证<br />1：机构认证 |

**示例：**

搜索关键字为`社会易`的用户

```shell
curl -G 'https://api.vc.bilibili.com/dynamic_mix/v1/dynamic_mix/at_search' \
--data-urlencode 'uid=15858903' \
--data-urlencode 'keyword=社会易' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "msg": "",
  "message": "",
  "data": {
    "groups": [
      {
        "group_type": 2,
        "group_name": "我的关注",
        "items": [
          {
            "uid": 293793435,
            "uname": "社会易姐QwQ",
            "face": "https://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg",
            "fans": 3578,
            "official_verify_type": -1
          }
        ]
      },
      {
        "group_type": 4,
        "group_name": "其他",
        "items": [
          {
            "uid": 484031754,
            "uname": "社会易老师",
            "face": "https://i0.hdslb.com/bfs/face/dbc456bdec5e7a4806c9d0311d95ebcc6be674cf.jpg",
            "fans": 21169,
            "official_verify_type": -1
          },
          {
            "uid": 442101413,
            "uname": "社会李易儒",
            "face": "https://i2.hdslb.com/bfs/face/311cecf9298158b8a5f47ed3e641328ab5c0cfcd.jpg",
            "fans": 10,
            "official_verify_type": -1
          },
          {
            "uid": 3546589855484501,
            "uname": "日本国立貿易株式会社",
            "face": "https://i2.hdslb.com/bfs/face/2dad05e4748b5e91e1ec5d3c5d4f0904a5bcdaf0.jpg",
            "fans": 7,
            "official_verify_type": -1
          },
          {
            "uid": 250129011,
            "uname": "社会小伙肖子易",
            "face": "https://i0.hdslb.com/bfs/face/2ae12d7f71173baa8e00c4cfe97acb5a3de31566.jpg",
            "fans": 6,
            "official_verify_type": -1
          },
          {
            "uid": 486568790,
            "uname": "社会主义接班人小易",
            "face": "https://i2.hdslb.com/bfs/face/1ebb0d4aa8e2c4b532f82983503ec38b62a1820f.jpg",
            "fans": 4,
            "official_verify_type": -1
          },
          {
            "uid": 497214639,
            "uname": "社会你易易",
            "face": "https://i0.hdslb.com/bfs/face/dccb52f3c15ba1bb99aac3c86e9825842cc95295.jpg",
            "fans": 2,
            "official_verify_type": -1
          },
          {
            "uid": 457675287,
            "uname": "易社会",
            "face": "https://i0.hdslb.com/bfs/face/632bf9dd17f4e9f2f12be2c0ad00cdacd2d825fa.jpg",
            "fans": 1,
            "official_verify_type": -1
          },
          {
            "uid": 1602175830,
            "uname": "不谦易会社恐",
            "face": "https://i0.hdslb.com/bfs/face/de6afbda484e114b7cedeb621c3cbbaef7800988.jpg",
            "fans": 0,
            "official_verify_type": -1
          },
          {
            "uid": 155817540,
            "uname": "社会易总",
            "face": "https://i0.hdslb.com/bfs/face/member/noface.jpg",
            "fans": 8,
            "official_verify_type": -1
          },
          {
            "uid": 3546578331634371,
            "uname": "社会存在与社会易逝",
            "face": "https://i0.hdslb.com/bfs/face/member/noface.jpg",
            "fans": 0,
            "official_verify_type": -1
          },
          {
            "uid": 1983403996,
            "uname": "社会易姐QAQ",
            "face": "https://i0.hdslb.com/bfs/face/member/noface.jpg",
            "fans": 0,
            "official_verify_type": -1
          },
          {
            "uid": 408471763,
            "uname": "社会易大佬人狠话不多",
            "face": "https://i1.hdslb.com/bfs/face/510cde8f4e3eb27aa50177d619a4200bb501797b.jpg",
            "fans": 0,
            "official_verify_type": -1
          },
          {
            "uid": 384672256,
            "uname": "社会易轩",
            "face": "https://i1.hdslb.com/bfs/face/7324adb53362527a1bf5f20141a6ae4307011ea7.jpg",
            "fans": 0,
            "official_verify_type": -1
          },
          {
            "uid": 284984452,
            "uname": "社会易哥",
            "face": "https://i0.hdslb.com/bfs/face/member/noface.jpg",
            "fans": 0,
            "official_verify_type": -1
          },
          {
            "uid": 249112673,
            "uname": "社会易姐",
            "face": "https://i0.hdslb.com/bfs/face/member/noface.jpg",
            "fans": 0,
            "official_verify_type": -1
          },
          {
            "uid": 167967213,
            "uname": "社会易大佬",
            "face": "https://i0.hdslb.com/bfs/face/member/noface.jpg",
            "fans": 0,
            "official_verify_type": -1
          }
        ]
      }
    ],
    "_gt_": 0
  }
}
```

</details>