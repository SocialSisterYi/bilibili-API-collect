# 收藏夹基本信息

- [收藏夹基本信息](#收藏夹基本信息)
  - [获取收藏夹详细信息](#获取收藏夹详细信息)

---

## 获取收藏夹详细信息

>http://api.bilibili.com/x/v3/fav/resource/list

*请求方式：GET*

**url参数：**

| 参数名   | 类型           | 内容           | 必要性  | 备注                                                          |
| -------- | -------------- | -------------- | ------- | ------------------------------------------------------------- |
| media_id | num            | 目标收藏夹ID   | 必要    |                                                               |
| pn       | num            | 页码           | 必要    |                                                               |
| ps       | num            | 每页数量       | 必要    |                                                               |
| keyword  | str            | 搜索关键字     | 非必要  |                                                               |
| order    | str            | 排序方式       | 非必要  | 按收藏时间:mtime<br />按播放量: view<br />按投稿时间：pubtime |
| type     | num            | 内容类型（？） | 非必要  | 视频为0                                                       |
| tid      | num            | 分区id         | 非必要  | [详见说明](../video/video_zone.md)                            |
| platform | 请求来源（？） | 非必要         | 可为web |


**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                           |
| ------- | ---- | -------- | ------------------------------ |
| code    | num  | 返回值   | 0：成功                        |
| message | str  | 错误信息 | 默认为0                        |
| data    | obj  | 信息本体 | 收藏夹不存在（被隐藏）时为null |

`data`对象：

| 字段   | 类型  | 内容           | 备注 |
| ------ | ----- | -------------- | ---- |
| info   | obj   | 收藏夹基本信息 |      |
| medias | array | 收藏夹内容     |      |

`data`中的`info`对象：

| 字段        | 类型 | 内容              | 备注                               |
| ----------- | ---- | ----------------- | ---------------------------------- |
| id          | num  | 收藏夹id          |                                    |
| fid         | num  | 未知              | 不知道啥的id,后期补上              |
| mid         | num  | 创建者uid         |                                    |
| attr        | num  | 未知              |                                    |
| title       | str  | 收藏夹标题        |                                    |
| cover       | str  | 收藏夹封面图片url |                                    |
| upper       | obj  | 创建者信息        |                                    |
| cover_type  | num  | 封面图类别（？）  |                                    |
| cnt_info    | obj  | 收藏夹数据        | 点赞观看收藏等                     |
| type        | num  | 不知道是啥        | 一般是11                           |
| intro       | str  | 备注              |                                    |
| ctime       | num  | 创建时间          | 时间戳（秒）                       |
| mtime       | num  | 收藏时间          | 时间戳（秒）                       |
| state       | num  | 未知              | 一般为0                            |
| fav_state   | num  | 收藏状态          | 已被自己收藏:1<br />未被自己收藏:0 |
| like_state  | num  | 点赞状态          | 同上                               |
| media_count | num  | 收藏夹内容数量    |                                    |


`info`中的`upper`对象：

| 字段     | 类型 | 内容             | 备注                                            |
| -------- | ---- | ---------------- | ----------------------------------------------- |
| mid      | num  | 创建者uid        |                                                 |
| name     | str  | 创建者用户名     |                                                 |
| face     | str  | 创建者头像url    |                                                 |
| followed | bool | 是否已关注创建者 |                                                 |
| vip_type | num  | 会员类别         | 0：无<br />1：月大会员<br />2：年度及以上大会员 |
| vip_statue | num  | 会员开通状态  | 0：无<br />1：有                                |

`info`中的`cnt_info`对象：

| 字段     | 类型 | 内容   | 备注 |
| -------- | ---- | ------ | ---- |
| collect  | num  | 收藏数 |      |
| play     | num  | 播放数 |      |
| thumb_up | num  | 点赞数 |      |
| share    | unm  | 分享数 |      |

`data`中的`medias`数组:

| 项  | 类型 | 内容          | 备注 |
| --- | ---- | ------------- | ---- |
| 0   | obj  | 单个收藏      |      |
| n   | obj  | 单个收藏(n+1) |      |
| ... | obj  | ...           |      |

`medias`数组中的单个对象:

| 字段     | 类型 | 内容                 | 备注      |
| -------- | ---- | -------------------- | --------- |
| id       | num  | 视频av号             |           |
| type     | num  | 未知                 |           |
| title    | str  | 视频标题             |           |
| cover    | str  | 视频封面图url        |           |
| intro    | str  | 视频简介             |           |
| page     | num  | 分P（？）            |           |
| duration | num  | 未知                 |           |
| upper    | obj  | up主信息             |           |
| attr     | num  | 未知                 |           |
| cnt_info | obj  | 视频数据             |           |
| link     | str  | b站客户端跳转超链接  |           |
| ctime    | num  | 上传时间             | 秒 时间戳 |
| pubtime  | num  | 上传时间（俩一样？） | 秒 时间戳 |
| fav_time | num  | 收藏时间             | 秒 时间戳 |
| bv_id    | str  | 视频BV号             |           |
| bvid     | str  | 视频BV号             |           |
| season   | obj  | 未知                 |           |

单个对象的`upper`对象:

| 字段 | 类型 | 内容       | 备注 |
| ---- | ---- | ---------- | ---- |
| mid  | num  | up主uid    |      |
| name | str  | up主用户名 |      |
| face | str  | up主头像   |      |

单个对象的`cnt_info`对象：

| 字段    | 类型 | 内容       | 备注 |
| ------- | ---- | ---------- | ---- |
| collect | num  | 视频收藏量 |      |
| play    | num  | 视频播放量 |      |
| danmaku | num  | 视频弹幕量 |      |




**示例：**

查询收藏夹`ID=1052622027`，每页20个视频，第一页的详细信息

```shell
curl -G 'http://api.bilibili.com/x/v3/fav/resource/list' \
--data-urlencode 'media_id=1052622027' \
--data-urlencode 'pn=1' \
--data-urlencode 'ps=20'
```

<details>
<summary>查看响应示例：</summary>


```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "info": {
            "id": 1052622027,
            "fid": 10526220,
            "mid": 686127,
            "attr": 54,
            "title": "猛 男 生 存",
            "cover": "http://i2.hdslb.com/bfs/archive/bb51ee8a5fc5e03996138155f0f682d30ee16484.jpg",
            "upper": {
                "mid": 686127,
                "name": "籽岷",
                "face": "http://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp",
                "followed": true,
                "vip_type": 2,
                "vip_statue": 1
            },
            "cover_type": 2,
            "cnt_info": {
                "collect": 3299,
                "play": 175148,
                "thumb_up": 3829,
                "share": 44
            },
            "type": 11,
            "intro": "猛 男 生 存",
            "ctime": 1598884758,
            "mtime": 1598884758,
            "state": 0,
            "fav_state": 0,
            "like_state": 1,
            "media_count": 28
        },
        "medias": [
            {
                "id": 371494037,
                "type": 2,
                "title": "猛 男 生 存",
                "cover": "http://i2.hdslb.com/bfs/archive/bb51ee8a5fc5e03996138155f0f682d30ee16484.jpg",
                "intro": "如果大家喜欢我的视频，别忘了点个赞，一键三连，或者关注我的频道哦~\n也可以把我的视频分享给你们的朋友们~\n\n第一集：BV1CZ4y1T7gC\n第二集：BV1oA411a72k\n第三集：BV1fK4y1e7Yj\n第四集：BV1Ya4y1E7Y6\n第五集：BV17V411z75A\n第六集：BV1oi4y137sw\n第七集：BV1Wt4y1D7Uu\n第八集：BV1Bp4y1q7y9\n第九集：BV1Lv411v7G2\n第十集：BV1Xi4y137ER\n第十一集：BV1nC4y1879J\n第十二集：BV1K54y1",
                "page": 1,
                "duration": 546,
                "upper": {
                    "mid": 686127,
                    "name": "籽岷",
                    "face": "http://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp"
                },
                "attr": 0,
                "cnt_info": {
                    "collect": 11129,
                    "play": 1621908,
                    "danmaku": 7655
                },
                "link": "bilibili://video/371494037",
                "ctime": 1595690513,
                "pubtime": 1595690513,
                "fav_time": 1598884777,
                "bv_id": "BV1CZ4y1T7gC",
                "bvid": "BV1CZ4y1T7gC",
                "season": null
            },
            {
                "id": 328991940,
                "type": 2,
                "title": "猛 男 生 存 2",
                "cover": "http://i1.hdslb.com/bfs/archive/aa801612ea0229a08d000a525b715af24cba0964.jpg",
                "intro": "如果大家喜欢我的视频，别忘了点个赞，一键三连，或者关注我的频道哦~\n也可以把我的视频分享给你们的朋友们~\n\n第一集：BV1CZ4y1T7gC\n第二集：BV1oA411a72k\n第三集：BV1fK4y1e7Yj\n第四集：BV1Ya4y1E7Y6\n第五集：BV17V411z75A\n第六集：BV1oi4y137sw\n第七集：BV1Wt4y1D7Uu\n第八集：BV1Bp4y1q7y9\n第九集：BV1Lv411v7G2\n第十集：BV1Xi4y137ER\n第十一集：BV1nC4y1879J\n第十二集：BV1K54y1",
                "page": 1,
                "duration": 644,
                "upper": {
                    "mid": 686127,
                    "name": "籽岷",
                    "face": "http://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp"
                },
                "attr": 0,
                "cnt_info": {
                    "collect": 8661,
                    "play": 1324607,
                    "danmaku": 6044
                },
                "link": "bilibili://video/328991940",
                "ctime": 1595770876,
                "pubtime": 1595770876,
                "fav_time": 1598884783,
                "bv_id": "BV1oA411a72k",
                "bvid": "BV1oA411a72k",
                "season": null
            },
            {
                "id": 884042215,
                "type": 2,
                "title": "猛 男 生 存 3",
                "cover": "http://i1.hdslb.com/bfs/archive/f99059637c110dcd1cdae765a946801fbcefe4ab.jpg",
                "intro": "如果大家喜欢我的视频，别忘了点个赞，一键三连，或者关注我的频道哦~\n也可以把我的视频分享给你们的朋友们~\n\n第一集：BV1CZ4y1T7gC\n第二集：BV1oA411a72k\n第三集：BV1fK4y1e7Yj\n第四集：BV1Ya4y1E7Y6\n第五集：BV17V411z75A\n第六集：BV1oi4y137sw\n第七集：BV1Wt4y1D7Uu\n第八集：BV1Bp4y1q7y9\n第九集：BV1Lv411v7G2\n第十集：BV1Xi4y137ER\n第十一集：BV1nC4y1879J\n第十二集：BV1K54y1",
                "page": 1,
                "duration": 703,
                "upper": {
                    "mid": 686127,
                    "name": "籽岷",
                    "face": "http://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp"
                },
                "attr": 0,
                "cnt_info": {
                    "collect": 9429,
                    "play": 1420318,
                    "danmaku": 8214
                },
                "link": "bilibili://video/884042215",
                "ctime": 1595847079,
                "pubtime": 1595847079,
                "fav_time": 1598884788,
                "bv_id": "BV1fK4y1e7Yj",
                "bvid": "BV1fK4y1e7Yj",
                "season": null
            },
            {
                "id": 669013980,
                "type": 2,
                "title": "猛 男 生 存 4",
                "cover": "http://i1.hdslb.com/bfs/archive/def0f7009cb9a8b581ee03be9565918ff0c1913d.jpg",
                "intro": "如果大家喜欢我的视频，别忘了点个赞，一键三连，或者关注我的频道哦~\n也可以把我的视频分享给你们的朋友们~\n\n第一集：BV1CZ4y1T7gC\n第二集：BV1oA411a72k\n第三集：BV1fK4y1e7Yj\n第四集：BV1Ya4y1E7Y6\n第五集：BV17V411z75A\n第六集：BV1oi4y137sw\n第七集：BV1Wt4y1D7Uu\n第八集：BV1Bp4y1q7y9\n第九集：BV1Lv411v7G2\n第十集：BV1Xi4y137ER\n第十一集：BV1nC4y1879J\n第十二集：BV1K54y1",
                "page": 1,
                "duration": 895,
                "upper": {
                    "mid": 686127,
                    "name": "籽岷",
                    "face": "http://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp"
                },
                "attr": 0,
                "cnt_info": {
                    "collect": 9933,
                    "play": 1301219,
                    "danmaku": 13491
                },
                "link": "bilibili://video/669013980",
                "ctime": 1595943988,
                "pubtime": 1595943988,
                "fav_time": 1598884792,
                "bv_id": "BV1Ya4y1E7Y6",
                "bvid": "BV1Ya4y1E7Y6",
                "season": null
            },
            {
                "id": 414034824,
                "type": 2,
                "title": "猛 男 生 存 5",
                "cover": "http://i2.hdslb.com/bfs/archive/b4844ac89dde221d13bb8ddff80a8c4658bf7dc5.jpg",
                "intro": "如果大家喜欢我的视频，别忘了点个赞，一键三连，或者关注我的频道哦~\n也可以把我的视频分享给你们的朋友们~\n\n第一集：BV1CZ4y1T7gC\n第二集：BV1oA411a72k\n第三集：BV1fK4y1e7Yj\n第四集：BV1Ya4y1E7Y6\n第五集：BV17V411z75A\n第六集：BV1oi4y137sw\n第七集：BV1Wt4y1D7Uu\n第八集：BV1Bp4y1q7y9\n第九集：BV1Lv411v7G2\n第十集：BV1Xi4y137ER\n第十一集：BV1nC4y1879J\n第十二集：BV1K54y1",
                "page": 1,
                "duration": 814,
                "upper": {
                    "mid": 686127,
                    "name": "籽岷",
                    "face": "http://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp"
                },
                "attr": 0,
                "cnt_info": {
                    "collect": 9440,
                    "play": 1228306,
                    "danmaku": 8989
                },
                "link": "bilibili://video/414034824",
                "ctime": 1596023668,
                "pubtime": 1596023668,
                "fav_time": 1598884798,
                "bv_id": "BV17V411z75A",
                "bvid": "BV17V411z75A",
                "season": null
            },
            {
                "id": 541550765,
                "type": 2,
                "title": "猛 男 生 存 6",
                "cover": "http://i0.hdslb.com/bfs/archive/ac5fd03077e35149f114aec99394bc34da2d1f91.jpg",
                "intro": "如果大家喜欢我的视频，别忘了点个赞，一键三连，或者关注我的频道哦~\n也可以把我的视频分享给你们的朋友们~\n\n第一集：BV1CZ4y1T7gC\n第二集：BV1oA411a72k\n第三集：BV1fK4y1e7Yj\n第四集：BV1Ya4y1E7Y6\n第五集：BV17V411z75A\n第六集：BV1oi4y137sw\n第七集：BV1Wt4y1D7Uu\n第八集：BV1Bp4y1q7y9\n第九集：BV1Lv411v7G2\n第十集：BV1Xi4y137ER\n第十一集：BV1nC4y1879J\n第十二集：BV1K54y1",
                "page": 1,
                "duration": 809,
                "upper": {
                    "mid": 686127,
                    "name": "籽岷",
                    "face": "http://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp"
                },
                "attr": 0,
                "cnt_info": {
                    "collect": 9875,
                    "play": 1497486,
                    "danmaku": 10799
                },
                "link": "bilibili://video/541550765",
                "ctime": 1596120611,
                "pubtime": 1596120611,
                "fav_time": 1598884803,
                "bv_id": "BV1oi4y137sw",
                "bvid": "BV1oi4y137sw",
                "season": null
            },
            {
                "id": 626619000,
                "type": 2,
                "title": "猛 男 生 存 7",
                "cover": "http://i2.hdslb.com/bfs/archive/4a32b93bdd463315e51b0ee0ff920d8e60ea0fcf.jpg",
                "intro": "如果大家喜欢我的视频，别忘了点个赞，一键三连，或者关注我的频道哦~\n也可以把我的视频分享给你们的朋友们~\n\n第一集：BV1CZ4y1T7gC\n第二集：BV1oA411a72k\n第三集：BV1fK4y1e7Yj\n第四集：BV1Ya4y1E7Y6\n第五集：BV17V411z75A\n第六集：BV1oi4y137sw\n第七集：BV1Wt4y1D7Uu\n第八集：BV1Bp4y1q7y9\n第九集：BV1Lv411v7G2\n第十集：BV1Xi4y137ER\n第十一集：BV1nC4y1879J\n第十二集：BV1K54y1",
                "page": 1,
                "duration": 747,
                "upper": {
                    "mid": 686127,
                    "name": "籽岷",
                    "face": "http://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp"
                },
                "attr": 0,
                "cnt_info": {
                    "collect": 9761,
                    "play": 1311187,
                    "danmaku": 7002
                },
                "link": "bilibili://video/626619000",
                "ctime": 1596254348,
                "pubtime": 1596254348,
                "fav_time": 1598884808,
                "bv_id": "BV1Wt4y1D7Uu",
                "bvid": "BV1Wt4y1D7Uu",
                "season": null
            },
            {
                "id": 969124957,
                "type": 2,
                "title": "猛 男 生 存 8",
                "cover": "http://i2.hdslb.com/bfs/archive/6a86133b015ceaeb9e1976a97c2b8397f7491bfa.jpg",
                "intro": "如果大家喜欢我的视频，别忘了点个赞，一键三连，或者关注我的频道哦~\n也可以把我的视频分享给你们的朋友们~\n\n第一集：BV1CZ4y1T7gC\n第二集：BV1oA411a72k\n第三集：BV1fK4y1e7Yj\n第四集：BV1Ya4y1E7Y6\n第五集：BV17V411z75A\n第六集：BV1oi4y137sw\n第七集：BV1Wt4y1D7Uu\n第八集：BV1Bp4y1q7y9\n第九集：BV1Lv411v7G2\n第十集：BV1Xi4y137ER\n第十一集：BV1nC4y1879J\n第十二集：BV1K54y1",
                "page": 1,
                "duration": 857,
                "upper": {
                    "mid": 686127,
                    "name": "籽岷",
                    "face": "http://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp"
                },
                "attr": 0,
                "cnt_info": {
                    "collect": 9995,
                    "play": 1358309,
                    "danmaku": 8964
                },
                "link": "bilibili://video/969124957",
                "ctime": 1596381146,
                "pubtime": 1596381146,
                "fav_time": 1598884813,
                "bv_id": "BV1Bp4y1q7y9",
                "bvid": "BV1Bp4y1q7y9",
                "season": null
            },
            {
                "id": 244079274,
                "type": 2,
                "title": "猛 男 生 存 9",
                "cover": "http://i2.hdslb.com/bfs/archive/05a99495463375fc474bfe95d190fe4fa76275c1.jpg",
                "intro": "如果大家喜欢我的视频，别忘了点个赞，一键三连，或者关注我的频道哦~\n也可以把我的视频分享给你们的朋友们~\n\n第一集：BV1CZ4y1T7gC\n第二集：BV1oA411a72k\n第三集：BV1fK4y1e7Yj\n第四集：BV1Ya4y1E7Y6\n第五集：BV17V411z75A\n第六集：BV1oi4y137sw\n第七集：BV1Wt4y1D7Uu\n第八集：BV1Bp4y1q7y9\n第九集：BV1Lv411v7G2\n第十集：BV1Xi4y137ER\n第十一集：BV1nC4y1879J\n第十二集：BV1K54y1",
                "page": 1,
                "duration": 907,
                "upper": {
                    "mid": 686127,
                    "name": "籽岷",
                    "face": "http://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp"
                },
                "attr": 0,
                "cnt_info": {
                    "collect": 9891,
                    "play": 1172704,
                    "danmaku": 9025
                },
                "link": "bilibili://video/244079274",
                "ctime": 1596553717,
                "pubtime": 1596553717,
                "fav_time": 1598884819,
                "bv_id": "BV1Lv411v7G2",
                "bvid": "BV1Lv411v7G2",
                "season": null
            },
            {
                "id": 541500006,
                "type": 2,
                "title": "猛 男 生 存 10",
                "cover": "http://i2.hdslb.com/bfs/archive/16767535e73c4053ea9d6aa8f1b0e59f745f6c2b.jpg",
                "intro": "如果大家喜欢我的视频，别忘了点个赞，一键三连，或者关注我的频道哦~\n也可以把我的视频分享给你们的朋友们~\n\n第一集：BV1CZ4y1T7gC\n第二集：BV1oA411a72k\n第三集：BV1fK4y1e7Yj\n第四集：BV1Ya4y1E7Y6\n第五集：BV17V411z75A\n第六集：BV1oi4y137sw\n第七集：BV1Wt4y1D7Uu\n第八集：BV1Bp4y1q7y9\n第九集：BV1Lv411v7G2\n第十集：BV1Xi4y137ER\n第十一集：BV1nC4y1879J\n第十二集：BV1K54y1",
                "page": 1,
                "duration": 783,
                "upper": {
                    "mid": 686127,
                    "name": "籽岷",
                    "face": "http://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp"
                },
                "attr": 0,
                "cnt_info": {
                    "collect": 9835,
                    "play": 1126122,
                    "danmaku": 11139
                },
                "link": "bilibili://video/541500006",
                "ctime": 1596641071,
                "pubtime": 1596641071,
                "fav_time": 1598884824,
                "bv_id": "BV1Xi4y137ER",
                "bvid": "BV1Xi4y137ER",
                "season": null
            },
            {
                "id": 796655080,
                "type": 2,
                "title": "猛 男 生 存 11",
                "cover": "http://i0.hdslb.com/bfs/archive/bc7ca22343d34d63e03fe7b1cf39c04f48c9e9ea.jpg",
                "intro": "如果大家喜欢我的视频，别忘了点个赞，一键三连，或者关注我的频道哦~\n也可以把我的视频分享给你们的朋友们~\n\n第一集：BV1CZ4y1T7gC\n第二集：BV1oA411a72k\n第三集：BV1fK4y1e7Yj\n第四集：BV1Ya4y1E7Y6\n第五集：BV17V411z75A\n第六集：BV1oi4y137sw\n第七集：BV1Wt4y1D7Uu\n第八集：BV1Bp4y1q7y9\n第九集：BV1Lv411v7G2\n第十集：BV1Xi4y137ER\n第十一集：BV1nC4y1879J\n第十二集：BV1K54y1",
                "page": 1,
                "duration": 947,
                "upper": {
                    "mid": 686127,
                    "name": "籽岷",
                    "face": "http://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp"
                },
                "attr": 0,
                "cnt_info": {
                    "collect": 9292,
                    "play": 1145641,
                    "danmaku": 12528
                },
                "link": "bilibili://video/796655080",
                "ctime": 1596718235,
                "pubtime": 1596718235,
                "fav_time": 1598884829,
                "bv_id": "BV1nC4y1879J",
                "bvid": "BV1nC4y1879J",
                "season": null
            },
            {
                "id": 839243447,
                "type": 2,
                "title": "猛 男 生 存 12",
                "cover": "http://i0.hdslb.com/bfs/archive/4af78822d7e3a48fae9b45361a21a54e57a88d4a.jpg",
                "intro": "如果大家喜欢我的视频，别忘了点个赞，一键三连，或者关注我的频道哦~\n也可以把我的视频分享给你们的朋友们~\n\n第一集：BV1CZ4y1T7gC\n第二集：BV1oA411a72k\n第三集：BV1fK4y1e7Yj\n第四集：BV1Ya4y1E7Y6\n第五集：BV17V411z75A\n第六集：BV1oi4y137sw\n第七集：BV1Wt4y1D7Uu\n第八集：BV1Bp4y1q7y9\n第九集：BV1Lv411v7G2\n第十集：BV1Xi4y137ER\n第十一集：BV1nC4y1879J\n第十二集：BV1K54y1",
                "page": 1,
                "duration": 1040,
                "upper": {
                    "mid": 686127,
                    "name": "籽岷",
                    "face": "http://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp"
                },
                "attr": 0,
                "cnt_info": {
                    "collect": 10821,
                    "play": 1242279,
                    "danmaku": 16076
                },
                "link": "bilibili://video/839243447",
                "ctime": 1596804244,
                "pubtime": 1596804244,
                "fav_time": 1598884833,
                "bv_id": "BV1K54y1U77v",
                "bvid": "BV1K54y1U77v",
                "season": null
            },
            {
                "id": 329235451,
                "type": 2,
                "title": "猛 男 生 存 13",
                "cover": "http://i0.hdslb.com/bfs/archive/1880c952e78a7578a6d6ceb702262090376e5b07.jpg",
                "intro": "如果大家喜欢我的视频，别忘了点个赞，一键三连，或者关注我的频道哦~\n也可以把我的视频分享给你们的朋友们~\n\n第一集：BV1CZ4y1T7gC\n第二集：BV1oA411a72k\n第三集：BV1fK4y1e7Yj\n第四集：BV1Ya4y1E7Y6\n第五集：BV17V411z75A\n第六集：BV1oi4y137sw\n第七集：BV1Wt4y1D7Uu\n第八集：BV1Bp4y1q7y9\n第九集：BV1Lv411v7G2\n第十集：BV1Xi4y137ER\n第十一集：BV1nC4y1879J\n第十二集：BV1K54y1",
                "page": 1,
                "duration": 781,
                "upper": {
                    "mid": 686127,
                    "name": "籽岷",
                    "face": "http://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp"
                },
                "attr": 0,
                "cnt_info": {
                    "collect": 10269,
                    "play": 1137153,
                    "danmaku": 10608
                },
                "link": "bilibili://video/329235451",
                "ctime": 1597074384,
                "pubtime": 1597074384,
                "fav_time": 1598884837,
                "bv_id": "BV13A411e7ad",
                "bvid": "BV13A411e7ad",
                "season": null
            },
            {
                "id": 884202228,
                "type": 2,
                "title": "猛 男 生 存 14",
                "cover": "http://i0.hdslb.com/bfs/archive/cdd596eb167202c240b4619464642f077a4eb61b.jpg",
                "intro": "如果大家喜欢我的视频，别忘了点个赞，一键三连，或者关注我的频道哦~\n也可以把我的视频分享给你们的朋友们~\n\n第一集：BV1CZ4y1T7gC\n第二集：BV1oA411a72k\n第三集：BV1fK4y1e7Yj\n第四集：BV1Ya4y1E7Y6\n第五集：BV17V411z75A\n第六集：BV1oi4y137sw\n第七集：BV1Wt4y1D7Uu\n第八集：BV1Bp4y1q7y9\n第九集：BV1Lv411v7G2\n第十集：BV1Xi4y137ER\n第十一集：BV1nC4y1879J\n第十二集：BV1K54y1",
                "page": 1,
                "duration": 792,
                "upper": {
                    "mid": 686127,
                    "name": "籽岷",
                    "face": "http://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp"
                },
                "attr": 0,
                "cnt_info": {
                    "collect": 9318,
                    "play": 1067052,
                    "danmaku": 9358
                },
                "link": "bilibili://video/884202228",
                "ctime": 1597247692,
                "pubtime": 1597247692,
                "fav_time": 1598884842,
                "bv_id": "BV1UK4y1v7K6",
                "bvid": "BV1UK4y1v7K6",
                "season": null
            },
            {
                "id": 926710567,
                "type": 2,
                "title": "猛 男 生 存 15",
                "cover": "http://i1.hdslb.com/bfs/archive/c0d5d48a9d384ba95e6c810b9389e0ae1eafc728.jpg",
                "intro": "如果大家喜欢我的视频，别忘了点个赞，一键三连，或者关注我的频道哦~\n也可以把我的视频分享给你们的朋友们~\n\n第一集：BV1CZ4y1T7gC\n第二集：BV1oA411a72k\n第三集：BV1fK4y1e7Yj\n第四集：BV1Ya4y1E7Y6\n第五集：BV17V411z75A\n第六集：BV1oi4y137sw\n第七集：BV1Wt4y1D7Uu\n第八集：BV1Bp4y1q7y9\n第九集：BV1Lv411v7G2\n第十集：BV1Xi4y137ER\n第十一集：BV1nC4y1879J\n第十二集：BV1K54y1",
                "page": 1,
                "duration": 764,
                "upper": {
                    "mid": 686127,
                    "name": "籽岷",
                    "face": "http://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp"
                },
                "attr": 0,
                "cnt_info": {
                    "collect": 8890,
                    "play": 1028203,
                    "danmaku": 7699
                },
                "link": "bilibili://video/926710567",
                "ctime": 1597334266,
                "pubtime": 1597334266,
                "fav_time": 1598884846,
                "bv_id": "BV1BT4y157HK",
                "bvid": "BV1BT4y157HK",
                "season": null
            },
            {
                "id": 754200948,
                "type": 2,
                "title": "猛 男 生 存 16",
                "cover": "http://i2.hdslb.com/bfs/archive/0cf71c3289e604fb7146fb5fe5f94ee28af736d5.jpg",
                "intro": "如果大家喜欢我的视频，别忘了点个赞，一键三连，或者关注我的频道哦~\n也可以把我的视频分享给你们的朋友们~\n\n第一集：BV1CZ4y1T7gC\n第二集：BV1oA411a72k\n第三集：BV1fK4y1e7Yj\n第四集：BV1Ya4y1E7Y6\n第五集：BV17V411z75A\n第六集：BV1oi4y137sw\n第七集：BV1Wt4y1D7Uu\n第八集：BV1Bp4y1q7y9\n第九集：BV1Lv411v7G2\n第十集：BV1Xi4y137ER\n第十一集：BV1nC4y1879J\n第十二集：BV1K54y1",
                "page": 1,
                "duration": 729,
                "upper": {
                    "mid": 686127,
                    "name": "籽岷",
                    "face": "http://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp"
                },
                "attr": 0,
                "cnt_info": {
                    "collect": 8469,
                    "play": 1032309,
                    "danmaku": 10740
                },
                "link": "bilibili://video/754200948",
                "ctime": 1597421612,
                "pubtime": 1597421611,
                "fav_time": 1598884850,
                "bv_id": "BV1qk4y117Uk",
                "bvid": "BV1qk4y117Uk",
                "season": null
            },
            {
                "id": 371795957,
                "type": 2,
                "title": "猛 男 生 存 17",
                "cover": "http://i1.hdslb.com/bfs/archive/fa19d3e0759d62d8e1ef5c01e5a2976f640bcf82.jpg",
                "intro": "如果大家喜欢我的视频，别忘了点个赞，一键三连，或者关注我的频道哦~\n也可以把我的视频分享给你们的朋友们~\n\n第一集：BV1CZ4y1T7gC\n第二集：BV1oA411a72k\n第三集：BV1fK4y1e7Yj\n第四集：BV1Ya4y1E7Y6\n第五集：BV17V411z75A\n第六集：BV1oi4y137sw\n第七集：BV1Wt4y1D7Uu\n第八集：BV1Bp4y1q7y9\n第九集：BV1Lv411v7G2\n第十集：BV1Xi4y137ER\n第十一集：BV1nC4y1879J\n第十二集：BV1K54y1",
                "page": 1,
                "duration": 809,
                "upper": {
                    "mid": 686127,
                    "name": "籽岷",
                    "face": "http://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp"
                },
                "attr": 0,
                "cnt_info": {
                    "collect": 11076,
                    "play": 1142960,
                    "danmaku": 16434
                },
                "link": "bilibili://video/371795957",
                "ctime": 1597590869,
                "pubtime": 1597590869,
                "fav_time": 1598884854,
                "bv_id": "BV1iZ4y1K7LG",
                "bvid": "BV1iZ4y1K7LG",
                "season": null
            },
            {
                "id": 969268280,
                "type": 2,
                "title": "猛 男 生 存 18",
                "cover": "http://i2.hdslb.com/bfs/archive/09e773606589dad7f2eecd72d3e038d6b9c3d26a.jpg",
                "intro": "如果大家喜欢我的视频，别忘了点个赞，一键三连，或者关注我的频道哦~\n也可以把我的视频分享给你们的朋友们~\n\n第一集：BV1CZ4y1T7gC\n第二集：BV1oA411a72k\n第三集：BV1fK4y1e7Yj\n第四集：BV1Ya4y1E7Y6\n第五集：BV17V411z75A\n第六集：BV1oi4y137sw\n第七集：BV1Wt4y1D7Uu\n第八集：BV1Bp4y1q7y9\n第九集：BV1Lv411v7G2\n第十集：BV1Xi4y137ER\n第十一集：BV1nC4y1879J\n第十二集：BV1K54y1",
                "page": 1,
                "duration": 828,
                "upper": {
                    "mid": 686127,
                    "name": "籽岷",
                    "face": "http://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp"
                },
                "attr": 0,
                "cnt_info": {
                    "collect": 9645,
                    "play": 1048039,
                    "danmaku": 10408
                },
                "link": "bilibili://video/969268280",
                "ctime": 1597673528,
                "pubtime": 1597673528,
                "fav_time": 1598884858,
                "bv_id": "BV1hp4y1v7mU",
                "bvid": "BV1hp4y1v7mU",
                "season": null
            },
            {
                "id": 414281629,
                "type": 2,
                "title": "猛 男 生 存 19",
                "cover": "http://i2.hdslb.com/bfs/archive/c2e6af06dd052c8af0dccb43feb5cfaf9777ac60.jpg",
                "intro": "如果大家喜欢我的视频，别忘了点个赞，一键三连，或者关注我的频道哦~\n也可以把我的视频分享给你们的朋友们~\n\n第一集：BV1CZ4y1T7gC\n第二集：BV1oA411a72k\n第三集：BV1fK4y1e7Yj\n第四集：BV1Ya4y1E7Y6\n第五集：BV17V411z75A\n第六集：BV1oi4y137sw\n第七集：BV1Wt4y1D7Uu\n第八集：BV1Bp4y1q7y9\n第九集：BV1Lv411v7G2\n第十集：BV1Xi4y137ER\n第十一集：BV1nC4y1879J\n第十二集：BV1K54y1",
                "page": 1,
                "duration": 798,
                "upper": {
                    "mid": 686127,
                    "name": "籽岷",
                    "face": "http://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp"
                },
                "attr": 0,
                "cnt_info": {
                    "collect": 9355,
                    "play": 1035744,
                    "danmaku": 7782
                },
                "link": "bilibili://video/414281629",
                "ctime": 1597763961,
                "pubtime": 1597763961,
                "fav_time": 1598884862,
                "bv_id": "BV1xV411U7mm",
                "bvid": "BV1xV411U7mm",
                "season": null
            },
            {
                "id": 839319009,
                "type": 2,
                "title": "猛 男 生 存 20",
                "cover": "http://i2.hdslb.com/bfs/archive/014c1c9cdd515d61067e8ed603634c35c831aa25.jpg",
                "intro": "如果大家喜欢我的视频，别忘了点个赞，一键三连，或者关注我的频道哦~\n也可以把我的视频分享给你们的朋友们~\n\n第一集：BV1CZ4y1T7gC\n第二集：BV1oA411a72k\n第三集：BV1fK4y1e7Yj\n第四集：BV1Ya4y1E7Y6\n第五集：BV17V411z75A\n第六集：BV1oi4y137sw\n第七集：BV1Wt4y1D7Uu\n第八集：BV1Bp4y1q7y9\n第九集：BV1Lv411v7G2\n第十集：BV1Xi4y137ER\n第十一集：BV1nC4y1879J\n第十二集：BV1K54y1",
                "page": 1,
                "duration": 815,
                "upper": {
                    "mid": 686127,
                    "name": "籽岷",
                    "face": "http://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp"
                },
                "attr": 0,
                "cnt_info": {
                    "collect": 9484,
                    "play": 1108520,
                    "danmaku": 8714
                },
                "link": "bilibili://video/839319009",
                "ctime": 1597849999,
                "pubtime": 1597849999,
                "fav_time": 1598884866,
                "bv_id": "BV1t54y1U7hg",
                "bvid": "BV1t54y1U7hg",
                "season": null
            }
        ],
        "has_more": true
    }
}
```

</details>