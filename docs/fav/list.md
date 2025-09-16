# 收藏夹内容

## 获取收藏夹内容明细列表

> https://api.bilibili.com/x/v3/fav/resource/list

*请求方式：GET*

认证方式：Cookie或APP

**注：查询权限收藏夹时需要相应用户登录**

**url参数：**

| 参数名   | 类型 | 内容                     | 必要性 | 备注                                                         |
| -------- | ---- | ------------------------ | ------ | ------------------------------------------------------------ |
| media_id | num  | 目标收藏夹mlid（完整id） | 必要   |                                                              |
| tid      | num  | 分区tid                  | 非必要 | 默认为全部分区<br />0：全部分区<br />[详见说明](../video/video_zone.md) |
| keyword  | str  | 搜索关键字               | 非必要 |                                                              |
| order    | str  | 排序方式                 | 非必要 | 按收藏时间:mtime<br />按播放量: view<br />按投稿时间：pubtime |
| type     | num  | 查询范围           | 非必要 | 0：当前收藏夹（对应media_id）<br /> 1：全部收藏夹                                                       |
| ps       | num  | 每页数量                 | 必要   |   定义域：1-20                                                           |
| pn       | num  | 页码                     | 非必要 | 默认为1                                                      |
| platform | str  | 平台标识                 | 非必要 | 可为web（影响内容列表类型）                                  |

**json回复：**

根对象：

| 字段    | 类型                          | 内容     | 备注                                                |
| ------- | ----------------------------- | -------- | --------------------------------------------------- |
| code    | num                           | 返回值   | 0：成功<br />-400：请求错误<br />-403：访问权限不足 |
| message | str                           | 错误信息 | 默认为0                                             |
| data    | 有效时：obj<br />无效或：null | 信息本体 |                                                     |

`data`对象：

| 字段   | 类型  | 内容         | 备注 |
| ------ | ----- | ------------ | ---- |
| info   | obj   | 收藏夹元数据 |      |
| medias | array | 收藏夹内容   |      |
| has_more | bool | 收藏夹是否有下一页   |      |
| ttl | num | 接口返回时间  |    时间戳  |

`data`中的`info`对象：

| 字段        | 类型 | 内容                 | 备注                                               |
| ----------- | ---- | -------------------- | -------------------------------------------------- |
| id          | num  | 收藏夹mlid（完整id） | 收藏夹原始id+创建者mid尾号2位                      |
| fid         | num  | 收藏夹原始id         |                                                    |
| mid         | num  | 创建者mid            |                                                    |
| attr        | num  | 属性                 | 0：正常<br />1：失效                               |
| title       | str  | 收藏夹标题           |                                                    |
| cover       | str  | 收藏夹封面图片url    |                                                    |
| upper       | obj  | 创建者信息           |                                                    |
| cover_type  | num  | 封面图类别（？）     |                                                    |
| cnt_info    | obj  | 收藏夹状态数         |                                                    |
| type        | num  | 类型（？）           | 一般是11                                           |
| intro       | str  | 备注                 |                                                    |
| ctime       | num  | 创建时间             | 时间戳                                             |
| mtime       | num  | 收藏时间             | 时间戳                                             |
| state       | num  | 状态（？）           | 一般为0                                            |
| fav_state   | num  | 收藏夹收藏状态       | 已收藏收藏夹：1<br />未收藏收藏夹：0<br />需要登录 |
| like_state  | num  | 点赞状态             | 已点赞：1<br />未点赞：0<br />需要登录             |
| media_count | num  | 收藏夹内容数量       |                                                    |


`info`中的`upper`对象：

| 字段       | 类型 | 内容             | 备注                                            |
| ---------- | ---- | ---------------- | ----------------------------------------------- |
| mid        | num  | 创建者mid        |                                                 |
| name       | str  | 创建者昵称       |                                                 |
| face       | str  | 创建者头像url    |                                                 |
| followed   | bool | 是否已关注创建者 |                                                 |
| vip_type   | num  | 会员类别         | 0：无<br />1：月大会员<br />2：年度及以上大会员 |
| vip_statue | num  | 会员开通状态     | 0：无<br />1：有                                |

`info`中的`cnt_info`对象：

| 字段     | 类型 | 内容   | 备注 |
| -------- | ---- | ------ | ---- |
| collect  | num  | 收藏数 |      |
| play     | num  | 播放数 |      |
| thumb_up | num  | 点赞数 |      |
| share    | num  | 分享数 |      |

`data`中的`medias`数组：

| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| 0    | obj  | 收藏内容1     |      |
| n    | obj  | 收藏内容(n+1) |      |
| ...  | obj  | ...           |      |

`medias`数组中的对象：

| 字段     | 类型 | 内容          | 备注                                                         |
| -------- | ---- | ------------- | ------------------------------------------------------------ |
| id       | num  | 内容id        | 视频稿件：视频稿件avid<br />音频：音频auid<br />视频合集：视频合集id |
| type     | num  | 内容类型      | 2：视频稿件<br />12：音频<br />21：视频合集                  |
| title    | str  | 标题          |                                                              |
| cover    | str  | 封面url       |                                                              |
| intro    | str  | 简介          |                                                              |
| page     | num  | 视频分P数     |                                                              |
| duration | num  | 音频/视频时长 |                                                              |
| upper    | obj  | UP主信息      |                                                              |
| attr     | num  | 失效  | 0: 正常；9: up自己删除；1: 其他原因删除                                                         |
| cnt_info | obj  | 状态数        |                                                              |
| link     | str  | 跳转uri       |                                                              |
| ctime    | num  | 投稿时间      | 时间戳                                                       |
| pubtime  | num  | 发布时间      | 时间戳                                                       |
| fav_time | num  | 收藏时间      | 时间戳                                                       |
| bv_id    | str  | 视频稿件bvid  |                                                              |
| bvid     | str  | 视频稿件bvid  |                                                              |
| season   | null | （？）        |                                                              |

`medias`数组中的对象中的`upper`对象:

| 字段 | 类型 | 内容        | 备注 |
| ---- | ---- | ----------- | ---- |
| mid  | num  | UP主mid     |      |
| name | str  | UP主昵称    |      |
| face | str  | UP主头像url |      |

`medias`数组中的对象中的`cnt_info`对象：

| 字段    | 类型 | 内容   | 备注 |
| ------- | ---- | ------ | ---- |
| collect | num  | 收藏数 |      |
| play    | num  | 播放数 |      |
| danmaku | num  | 弹幕数 |      |

**示例：**

查询收藏夹`id=1052622027`，每页5个视频，第`1`页的内容明细

```shell
curl -G 'https://api.bilibili.com/x/v3/fav/resource/list' \
--data-urlencode 'media_id=1052622027' \
--data-urlencode 'platform=web' \
--data-urlencode 'pn=1' \
--data-urlencode 'ps=5' \
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
                "collect": 3393,
                "play": 184768,
                "thumb_up": 3916,
                "share": 44
            },
            "type": 11,
            "intro": "猛 男 生 存",
            "ctime": 1598884758,
            "mtime": 1598884758,
            "state": 0,
            "fav_state": 0,
            "like_state": 0,
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
                    "collect": 11256,
                    "play": 1638040,
                    "danmaku": 7697
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
                    "collect": 8695,
                    "play": 1334651,
                    "danmaku": 6064
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
                    "collect": 9449,
                    "play": 1429408,
                    "danmaku": 8243
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
                    "collect": 9950,
                    "play": 1309544,
                    "danmaku": 13551
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
                    "collect": 9446,
                    "play": 1235998,
                    "danmaku": 9021
                },
                "link": "bilibili://video/414034824",
                "ctime": 1596023668,
                "pubtime": 1596023668,
                "fav_time": 1598884798,
                "bv_id": "BV17V411z75A",
                "bvid": "BV17V411z75A",
                "season": null
            }
        ],
        "has_more": true,
        "ttl": 1703349018
    }
}
```

</details>

## 获取收藏夹全部内容id

>  https://api.bilibili.com/x/v3/fav/resource/ids

*请求方式：GET*

认证方式：Cookie或APP

**注：查询权限收藏夹时需要相应用户登录**

**url参数：**

| 参数名   | 类型 | 内容                     | 必要性 | 备注                        |
| -------- | ---- | ------------------------ | ------ | --------------------------- |
| media_id | num  | 目标收藏夹mlid（完整id） | 必要   |                             |
| platform | str  | 平台标识                 | 非必要 | 可为web（影响内容列表类型） |

**json回复：**

根对象：

| 字段    | 类型                            | 内容       | 备注                                                |
| ------- | ------------------------------- | ---------- | --------------------------------------------------- |
| code    | num                             | 返回值     | 0：成功<br />-400：请求错误<br />-403：访问权限不足 |
| message | str                             | 错误信息   | 默认为0                                             |
| data    | 有效时：array<br />无效或：null | 内容id列表 |                                                     |

`data`数组中的对象：

| 字段  | 类型 | 内容         | 备注                                                         |
| ----- | ---- | ------------ | ------------------------------------------------------------ |
| id    | num  | 内容id       | 视频稿件：视频稿件avid<br />音频：音频auid<br />视频合集：视频合集id |
| type  | num  | 内容类型     | 2：视频稿件<br />12：音频<br />21：视频合集                  |
| bv_id | str  | 视频稿件bvid |                                                              |
| bvid  | str  | 视频稿件bvid |                                                              |

**示例：**

查询收藏夹`id=1052622027`的全部内容id

```shell
curl -G 'https://api.bilibili.com/x/v3/fav/resource/ids' \
--data-urlencode 'media_id=1052622027' \
--data-urlencode 'platform=web' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": [
        {
            "id": 371494037,
            "type": 2,
            "bv_id": "BV1CZ4y1T7gC",
            "bvid": "BV1CZ4y1T7gC"
        },
        {
            "id": 328991940,
            "type": 2,
            "bv_id": "BV1oA411a72k",
            "bvid": "BV1oA411a72k"
        },
        {
            "id": 884042215,
            "type": 2,
            "bv_id": "BV1fK4y1e7Yj",
            "bvid": "BV1fK4y1e7Yj"
        },
        {
            "id": 669013980,
            "type": 2,
            "bv_id": "BV1Ya4y1E7Y6",
            "bvid": "BV1Ya4y1E7Y6"
        },
        {
            "id": 414034824,
            "type": 2,
            "bv_id": "BV17V411z75A",
            "bvid": "BV17V411z75A"
        },
        {
            "id": 541550765,
            "type": 2,
            "bv_id": "BV1oi4y137sw",
            "bvid": "BV1oi4y137sw"
        },
        {
            "id": 626619000,
            "type": 2,
            "bv_id": "BV1Wt4y1D7Uu",
            "bvid": "BV1Wt4y1D7Uu"
        },
        {
            "id": 969124957,
            "type": 2,
            "bv_id": "BV1Bp4y1q7y9",
            "bvid": "BV1Bp4y1q7y9"
        },
        {
            "id": 244079274,
            "type": 2,
            "bv_id": "BV1Lv411v7G2",
            "bvid": "BV1Lv411v7G2"
        },
        {
            "id": 541500006,
            "type": 2,
            "bv_id": "BV1Xi4y137ER",
            "bvid": "BV1Xi4y137ER"
        },
        {
            "id": 796655080,
            "type": 2,
            "bv_id": "BV1nC4y1879J",
            "bvid": "BV1nC4y1879J"
        },
        {
            "id": 839243447,
            "type": 2,
            "bv_id": "BV1K54y1U77v",
            "bvid": "BV1K54y1U77v"
        },
        {
            "id": 329235451,
            "type": 2,
            "bv_id": "BV13A411e7ad",
            "bvid": "BV13A411e7ad"
        },
        {
            "id": 884202228,
            "type": 2,
            "bv_id": "BV1UK4y1v7K6",
            "bvid": "BV1UK4y1v7K6"
        },
        {
            "id": 926710567,
            "type": 2,
            "bv_id": "BV1BT4y157HK",
            "bvid": "BV1BT4y157HK"
        },
        {
            "id": 754200948,
            "type": 2,
            "bv_id": "BV1qk4y117Uk",
            "bvid": "BV1qk4y117Uk"
        },
        {
            "id": 371795957,
            "type": 2,
            "bv_id": "BV1iZ4y1K7LG",
            "bvid": "BV1iZ4y1K7LG"
        },
        {
            "id": 969268280,
            "type": 2,
            "bv_id": "BV1hp4y1v7mU",
            "bvid": "BV1hp4y1v7mU"
        },
        {
            "id": 414281629,
            "type": 2,
            "bv_id": "BV1xV411U7mm",
            "bvid": "BV1xV411U7mm"
        },
        {
            "id": 839319009,
            "type": 2,
            "bv_id": "BV1t54y1U7hg",
            "bvid": "BV1t54y1U7hg"
        },
        {
            "id": 329271769,
            "type": 2,
            "bv_id": "BV12A411J7JZ",
            "bvid": "BV12A411J7JZ"
        },
        {
            "id": 969365400,
            "type": 2,
            "bv_id": "BV1wp4y1i7U8",
            "bvid": "BV1wp4y1i7U8"
        },
        {
            "id": 796831427,
            "type": 2,
            "bv_id": "BV1yC4y1t7Gb",
            "bvid": "BV1yC4y1t7Gb"
        },
        {
            "id": 711972863,
            "type": 2,
            "bv_id": "BV1YD4y1m7FP",
            "bvid": "BV1YD4y1m7FP"
        },
        {
            "id": 754414390,
            "type": 2,
            "bv_id": "BV1Yk4y127YR",
            "bvid": "BV1Yk4y127YR"
        },
        {
            "id": 839478683,
            "type": 2,
            "bv_id": "BV1i54y127uw",
            "bvid": "BV1i54y127uw"
        },
        {
            "id": 499448381,
            "type": 2,
            "bv_id": "BV19K411N7KE",
            "bvid": "BV19K411N7KE"
        },
        {
            "id": 926919797,
            "type": 2,
            "bv_id": "BV1QT4y1L7Bb",
            "bvid": "BV1QT4y1L7Bb"
        }
    ]
}
```

</details>
