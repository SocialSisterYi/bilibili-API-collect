# 根据关键字搜索用户(at别人时的填充列表)

**注意关键字不一定顺序匹配,如最后示例**

> https://api.vc.bilibili.com/dynamic_mix/v1/dynamic_mix/at_search

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**正文参数（multipart/form-data）：**

| 参数名 | 类型 | 内容 |
| --- | --- | --- |
| uid | num | 自己的uid |
| keyword | str | 搜索关键字 |

**json回复：**

根对象：

| 字段 | 类型 | 内容 |
| --- | --- | --- |
| code | num | 0成功 |
| msg | str | 成功为空文本 |
| message | str | 同msg |
| data | obj | 数据本体 |

data对象:

| 字段 | 类型 | 内容 |
| --- | --- | --- |
| groups | obj[] | 内容分组(好像是根据关注列表分) |
| \_gt_ | num | 0 |

group对象:

| 字段 | 类型 | 内容 |
| --- | --- | --- |
| group_type | num | 2:我的关注<br>4:其他 |
| group_name | str | 分组名字 |
| items | obj[] | 用户信息 |

item对象:

| 字段 | 类型 | 内容 |
| --- | --- | --- |
| uid | num | 用户id |
| uname | str | 用户昵称 |
| face | str | 用户头像url |
| fans | num | 用户粉丝数 |
| official_verify_type | num | 认证信息? |

<details>
<summary>查看示例</summary>

```shell
# 搜索关键字:社会易
curl 'https://api.vc.bilibili.com/dynamic_mix/v1/dynamic_mix/at_search?uid=15858903&keyword=%e7%a4%be%e4%bc%9a%e6%98%93' \
    -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0' -H 'Accept: application/json, text/plain, */*' \
    -H 'Referer: https://t.bilibili.com/' \
    -H 'Cookie: SESSDATA=******'
```

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
            "fans": 1179,
            "official_verify_type": -1
          }
        ]
      },
      {
        "group_type": 4,
        "group_name": "其他",
        "items": [
          {
            "uid": 250129011,
            "uname": "社会小伙肖子易",
            "face": "https://i0.hdslb.com/bfs/face/2ae12d7f71173baa8e00c4cfe97acb5a3de31566.jpg",
            "fans": 7,
            "official_verify_type": -1
          },
          {
            "uid": 394873001,
            "uname": "社会你易叔",
            "face": "https://i2.hdslb.com/bfs/face/bde2811aa895e349036aba9ece5630bcd1341ff0.jpg",
            "fans": 5,
            "official_verify_type": -1
          },
          {
            "uid": 486568790,
            "uname": "社会主义接班人小易",
            "face": "https://i2.hdslb.com/bfs/face/1ebb0d4aa8e2c4b532f82983503ec38b62a1820f.jpg",
            "fans": 3,
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
            "uid": 496622388,
            "uname": "社会你易哥",
            "face": "https://i0.hdslb.com/bfs/face/daac5514a7622741f767c68b1cbc6b91e60b4798.jpg",
            "fans": 1,
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
            "uid": 123270058,
            "uname": "周易社会",
            "face": "https://i1.hdslb.com/bfs/face/c6100396729112230deb3b0972db1504e9ce21bf.jpg",
            "fans": 1,
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