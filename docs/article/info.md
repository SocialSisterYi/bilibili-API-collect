# 专栏基本信息

## 获取专栏文章基本信息

> https://api.bilibili.com/x/article/viewinfo

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| id     | num  | 专栏cvid | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                            |
| ------- | ---- | -------- | ----------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-404：无此信息 |
| message | str  | 错误信息 | 默认为0                                         |
| ttl     | num  | 1        |                                                 |
| data    | obj  | 信息本体 |                                                 |

`data`对象：

| 字段              | 类型   | 内容             | 备注                                                         |
| ----------------- | ------ | ---------------- | ------------------------------------------------------------ |
| like              | num    | 是否点赞         | 0：未点赞<br />1：已点赞<br />需要登录(Cookie) <br />未登录为0 |
| attention         | bool   | 是否关注文章作者 | false：未关注<br />true：已关注<br />需要登录(Cookie) <br />未登录为false |
| favorite          | bool   | 是否收藏         | false：未收藏<br />true：已收藏<br />需要登录(Cookie) <br />未登录为false |
| coin              | num    | 为文章投币数     |                                                              |
| stats             | obj    | 状态数信息       |                                                              |
| title             | str    | 文章标题         |                                                              |
| banner_url        | str    | 文章头图url      |                                                              |
| mid               | num    | 文章作者mid      |                                                              |
| author_name       | str    | 文章作者昵称     |                                                              |
| is_author         | bool   | true             | 作用尚不明确                                                 |
| image_urls        | array | 动态封面         |                                                              |
| origin_image_urls | array | 封面图片         |                                                              |
| shareable         | bool   | true             | 作用尚不明确                                                 |
| show_later_watch  | bool   | true             | 作用尚不明确                                                 |
| show_small_window | bool   | true             | 作用尚不明确                                                 |
| in_list           | bool   | 是否收于文集     | false：否<br />true：是                                      |
| pre               | num    | 上一篇文章cvid   | 无为0                                                        |
| next              | num    | 下一篇文章cvid   | 无为0                                                        |
| share_channels    | array | 分享方式列表     |                                                               |
| type              | num    | 文章类别   | 0：文章<br />2：笔记                                                |


`stats`对象：

| 字段     | 类型 | 内容       | 备注 |
| -------- | ---- | ---------- | ---- |
| view     | num  | 阅读数     |      |
| favorite | num  | 收藏数     |      |
| like     | num  | 点赞数     |      |
| dislike  | num  | 点踩数     |      |
| reply    | num  | 评论数     |      |
| share    | num  | 分享数     |      |
| coin     | num  | 投币数     |      |
| dynamic  | num  | 动态转发数 |      |

`data`中的`image_urls`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | str  | 动态封面图片url |      |

`data`中的`origin_image_urls`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | str  | 文章封面图片url |      |

`data`中的`share_channels`数组：

| 项   | 类型 | 内容           | 备注 |
| ---- | ---- | -------------- | ---- |
| 0    | obj  | 分享项：qq     |      |
| 1    | obj  | 分享项：qq空间 |      |
| 2    | obj  | 分享项：微信   |      |
| 3    | obj  | 分享项：朋友圈 |      |
| 4    | obj  | 分享项：微博   |      |

`data`中的`share_channels`数组中的对象：

| 字段          | 类型 | 内容        | 备注 |
| ------------- | ---- | ----------- | ---- |
| name          | str  | 分享名称    |      |
| picture       | str  | 分享图片url |      |
| share_channel | str  | 分享代号    |      |

**示例：**

查询文章`cv2`的基本信息

```shell
curl -G 'https://api.bilibili.com/x/article/viewinfo' \
--data-urlencode 'id=2' \
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
        "like": 0,
        "attention": false,
        "favorite": false,
        "coin": 0,
        "stats": {
            "view": 1072619,
            "favorite": 5481,
            "like": 16465,
            "dislike": 0,
            "reply": 1865,
            "share": 351,
            "coin": 3436,
            "dynamic": 37
        },
        "title": "专栏行为准则  ",
        "banner_url": "https://i0.hdslb.com/bfs/article/131b1d41b857d5308f5bff36591d117bddc48d96.jpg@90p.webp",
        "mid": 144900660,
        "author_name": "专栏小天使",
        "is_author": true,
        "image_urls": [
            "https://i0.hdslb.com/bfs/article/0a72422ce8e77d8512f010d93b1b7f9bc4e64e52.jpg"
        ],
        "origin_image_urls": [
            "https://i0.hdslb.com/bfs/article/131b1d41b857d5308f5bff36591d117bddc48d96.jpg"
        ],
        "shareable": true,
        "show_later_watch": true,
        "show_small_window": true,
        "in_list": false,
        "pre": 115914,
        "next": 38575,
        "share_channels": [
            {
                "name": "QQ",
                "picture": "https://i0.hdslb.com/bfs/album/114ccfb3a999df9c4d11f274c8c61a804c8f8803.png",
                "share_channel": "QQ"
            },
            {
                "name": "QQ空间",
                "picture": "https://i0.hdslb.com/bfs/album/30e9608bbce725bca45b5910866f60ab4d5e18b3.png",
                "share_channel": "QZONE"
            },
            {
                "name": "微信",
                "picture": "https://i0.hdslb.com/bfs/album/658af3c22431cd78bb7c50be3394f7c032eba12c.png",
                "share_channel": "WEIXIN"
            },
            {
                "name": "朋友圈",
                "picture": "https://i0.hdslb.com/bfs/album/c1ebcec8c5302f29f792d15f04e0d6dcef53ec27.png",
                "share_channel": "WEIXIN_MONMENT"
            },
            {
                "name": "微博",
                "picture": "https://i0.hdslb.com/bfs/album/3707fc23f7d3e24022712320284b0de9aa78c87d.png",
                "share_channel": "SINA"
            }
        ],
        "type": 0,
        "video_url": "",
        "location": "",
        "disable_share": false
    }
}
```

</details>
