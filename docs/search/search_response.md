# 搜索响应条目

本页为搜索结果数组`result`中的对象的说明

## 对象类型1-结果为视频

| 字段           | 类型  | 内容           | 备注                                      |
| -------------- | ----- | -------------- | ----------------------------------------- |
| type           | str   | 结果类型       | 固定为video                               |
| id             | num   | 结果         | 为稿件avid                                |
| author         | str   | UP主昵称       |                                           |
| mid            | num   | UP主mid        |                                           |
| typeid         | str   | 视频分区tid    |                                           |
| typename       | str   | 视频子分区名   |                                           |
| arcurl         | str   | 视频重定向url  |                                           |
| aid            | num   | 稿件avid       |                                           |
| bvid           | str   | 稿件bvid       |                                           |
| title          | str   | 视频标题       | 关键字用xml标签`<em class="keyword">`标注 |
| description    | str   | 视频简介       |                                           |
| arcrank        | str   | 0              | **作用尚不明确**                          |
| pic            | str   | 视频封面url    |                                           |
| play           | num   | 视频播放量     |                                           |
| video_review   | num   | 视频弹幕量     |                                           |
| favorites      | num   | 视频收藏数     |                                           |
| tag            | str   | 视频TAG        | 每项TAG用`,`分隔                          |
| review         | num   | 视频评论数     |                                           |
| pubdate        | num   | 视频投稿时间   | 时间戳                                    |
| senddate       | num   | 视频发布时间   | 时间戳                                    |
| duration       | str   | 视频时长       | HH:MM                                     |
| badgepay       | bool  | false          | **作用尚不明确**                          |
| hit_columns    | array | 关键字匹配类型 |                                           |
| view_type      | str   | 空             | **作用尚不明确**                          |
| is_pay         | num   | 0              | **作用尚不明确**                          |
| is_union_video | num   | 是否为合作视频 | 0：否<br />1：是                          |
| rec_tags       | null  | -              | **作用尚不明确**                          |
| new_rec_tags   | array | 空             | **作用尚不明确**                          |
| rank_score     | num   | 结果排序量化值 |                                           |

`视频条目`中的`hit_columns`数组：

| 项   | 类型 | 内容            | 备注                                                         |
| ---- | ---- | --------------- | ------------------------------------------------------------ |
| 0    | str  | 匹配类型1       | title：标题匹配<br />description：简介匹配<br />author：UP主昵称匹配<br />tag：视频TAG匹配 |
| n    | str  | 匹配类型（n+1） | 项数为同时匹配到的类型数                                     |
| ……   | str  | ……              | ……                                                           |

**示例：**

<details>
<summary>查看响应示例：</summary>

```json
{
    "type": "video",
    "id": 78977417,
    "author": "MitchieM",
    "mid": 5669526,
    "typeid": "30",
    "typename": "VOCALOID·UTAU",
    "arcurl": "http://www.bilibili.com/video/av78977417",
    "aid": 78977417,
    "bvid": "BV1KJ411C7Un",
    "title": "【Mitchie M】初音未来《<em class=\"keyword\">买买买</em>》【2020拜年祭单品】",
    "description": "bilibili拜年祭のために、ダンスミュージックと中国の伝統楽器を組み合わせた曲を作りました。歌詞に「买买买」を使ったユニークな曲が出来上がったので、最高のクオリティーのMVと共に楽しんでもらえたら嬉しいです！\n为哔哩哔哩拜年祭制作了一首电子舞曲与中国传统乐器相结合的音乐，歌词是描写【买买买】的独特作品，和最棒的PV一起享受吧!\n\n▶︎ 舞蹈视频 [BV1pA411i7J6]",
    "arcrank": "0",
    "pic": "//i1.hdslb.com/bfs/archive/f0403bbd1ff3bad1df79aaa159d9e1cfb52c92de.jpg",
    "play": 2915520,
    "video_review": 14572,
    "favorites": 114102,
    "tag": "2020拜年祭单品,买买买,初音未来",
    "review": 6124,
    "pubdate": 1579877678,
    "senddate": 1593099008,
    "duration": "4:2",
    "badgepay": false,
    "hit_columns": [
        "title",
        "description",
        "tag"
    ],
    "view_type": "",
    "is_pay": 0,
    "is_union_video": 0,
    "rec_tags": null,
    "new_rec_tags": [],
    "rank_score": 109020056
}
```

</details>

## 对象类型2-结果为番剧&影视

| 字段             | 类型                            | 内容                         | 备注                                                         |
| ---------------- | ------------------------------- | ---------------------------- | ------------------------------------------------------------ |
| type             | str                             | 结果类型                     | media_bangumi：番剧<br />media_ft：影视                      |
| media_id         | num                             | 剧集mdid                     |                                                              |
| season_id        | num                             | 剧集ssid                     |                                                              |
| title            | str                             | 剧集标题                     | 关键字用xml标签`<em class="keyword">`标注                    |
| org_title        | str                             | 剧集原名                     | 关键字用xml标签`<em class="keyword">`标注<br />可为空        |
| cover            | str                             | 剧集封面url                  |                                                              |
| media_type       | num                             | 剧集类型                     | 1：番剧<br />2：电影<br />3：纪录片<br />4：国创<br />5：电视剧<br />7：综艺 |
| areas            | str                             | 地区                         |                                                              |
| styles           | str                             | 风格                         |                                                              |
| cv               | str                             | 声优                         |                                                              |
| staff            | str                             | 制作组                       |                                                              |
| play_state       | num                             | 0                            | **作用尚不明确**                                             |
| goto_url         | str                             | 剧集重定向url                |                                                              |
| desc             | str                             | 简介                         |                                                              |
| corner           | num                             | 角标有无                     | 2：无<br />13：有                                            |
| pubtime          | num                             | 开播时间                     | 时间戳                                                       |
| media_mode       | num                             | 2                            | **作用尚不明确**                                             |
| is_avid          | bool                            | false                        | **作用尚不明确**                                             |
| fix_pubtime_str  | str                             | 开播时间重写信息             | 优先级高于`pubtime`<br />可为空                              |
| media_score      | 有效时：obj<br />无效时：null   | 评分信息                     |                                                              |
| hit_columns      | 有效时：array<br />无效时：null | 关键字匹配类型               |                                                              |
| all_net_name     | str                             | 空                           | **作用尚不明确**                                             |
| all_net_icon     | str                             | 空                           | **作用尚不明确**                                             |
| all_net_url      | str                             | 空                           | **作用尚不明确**                                             |
| angle_title      | str                             | 角标内容                     |                                                              |
| angle_color      | num                             | 角标颜色                     | 0：红色<br />2：橙色                                         |
| display_info     | array                           | 剧集标志信息                 |                                                              |
| hit_epids        | str                             | 关键字匹配分集标题的分集epid | 多个用`,`分隔                                                |
| pgc_season_id    | num                             | 剧集ssid                     |                                                              |
| season_type      | num                             | 剧集类型                     | 1：番剧<br />2：电影<br />3：纪录片<br />4：国创<br />5：电视剧<br />7：综艺 |
| season_type_name | str                             | 剧集类型文字                 |                                                              |
| selection_style  | str                             | 分集选择按钮风格             | horizontal：横排式<br />grid：按钮式                         |
| ep_size          | num                             | 结果匹配的分集数             |                                                              |
| url              | str                             | 剧集重定向url                |                                                              |
| button_text      | str                             | 观看按钮文字                 |                                                              |
| is_follow        | num                             | 是否追番                     | 需要登录(SESSDATA)<br />未登录则恒为0<br />0：否<br />1：是  |
| is_selection     | num                             | 1                            | **作用尚不明确**                                             |
| eps              | array                           | 结果匹配的分集信息           |                                                              |
| badges           | array                           | 剧集标志信息                 |                                                              |

`番剧条目`中的`media_score`对象：

| 字段       | 类型 | 内容         | 备注 |
| ---------- | ---- | ------------ | ---- |
| user_count | num  | 总计评分人数 |      |
| score      | num  | 评分         |      |

`番剧条目`中的`hit_columns`数组：

| 项   | 类型 | 内容            | 备注                                   |
| ---- | ---- | --------------- | -------------------------------------- |
| 0    | str  | 匹配类型1       | title：标题匹配<br />org_title：原标题 |
| n    | str  | 匹配类型（n+1） | 项数为同时匹配到的类型数               |
| ……   | str  | ……              | ……                                     |

`番剧条目`中的`display_info`数组：

| 项   | 类型 | 内容         | 备注 |
| ---- | ---- | ------------ | ---- |
| 0    | obj  | 剧集标志信息 |      |

`display_info`数组中的对象：

| 字段               | 类型 | 内容         | 备注   |
| ------------------ | ---- | ------------ | ------ |
| bg_color_night     | str  | 夜间背景颜色 | 颜色码 |
| text               | str  | 剧集标志     | 颜色码 |
| border_color       | str  | 背景颜色     | 颜色码 |
| bg_style           | num  | 1            |        |
| text_color         | str  | 文字颜色     | 颜色码 |
| bg_color           | str  | 背景颜色     | 颜色码 |
| text_color_night   | str  | 夜间文字颜色 | 颜色码 |
| border_color_night | str  | 夜间背景颜色 | 颜色码 |

`番剧条目`中的`eps`数组：

| 项   | 类型 | 内容            | 备注                     |
| ---- | ---- | --------------- | ------------------------ |
| 0    | obj  | 分集信息1       |                          |
| n    | obj  | 分集信息（n+1） | 项数为同时匹配到的分集数 |
| ……   | obj  | ……              | ……                       |

`eps`数组中的对象：

| 字段         | 类型  | 内容          | 备注 |
| ------------ | ----- | ------------- | ---- |
| id           | num   | 分集epid      |      |
| cover        | str   | 分集封面url   |      |
| title        | str   | 完整标题      |      |
| url          | str   | 分集重定向url |      |
| release_date | str   | 空            |      |
| badges       | array | 分集标志      |      |
| index_title  | str   | 短标题        |      |
| long_title   | str   | 单集标题      |      |

`番剧条目`中的`badges`数组（同`eps`数组中的对象中的`badges`数组）：

| 项   | 类型 | 内容         | 备注 |
| ---- | ---- | ------------ | ---- |
| 0    | obj  | 剧集标志信息 |      |

`badges`数组中的对象：

| 字段               | 类型 | 内容         | 备注   |
| ------------------ | ---- | ------------ | ------ |
| text               | str  | 剧集标志     | 颜色码 |
| text_color         | str  | 文字颜色     | 颜色码 |
| text_color_night   | str  | 夜间文字颜色 | 颜色码 |
| bg_color           | str  | 背景颜色     | 颜色码 |
| bg_color_night     | str  | 夜间背景颜色 | 颜色码 |
| border_color       | str  | 空           |        |
| border_color_night | str  | 空           |        |
| bg_style           | num  | 1            |        |

**示例：**

<details>
<summary>查看响应示例：</summary>

```json
{
    "media_id": 28224080,
    "season_id": 29310,
    "type": "media_bangumi",
    "title": "<em class=\"keyword\">异度侵入</em> ID:INVADED",
    "org_title": "イド：インヴェイデッド",
    "cover": "//i0.hdslb.com/bfs/bangumi/image/9bf9e66968f85b33ec3769a16c86b36dc984abbc.png",
    "media_type": 1,
    "areas": "日本",
    "styles": "原创/科幻/推理",
    "cv": "酒井户：津田健次郎\n百贵：细谷佳正\n富久田：竹内良太\n本堂町：M・A・O\n东乡：布里德卡特·塞拉·惠美\n早濑浦：村治学\n白岳：近藤隆\n羽二重：岩濑周平\n若鹿：榎木淳弥\n国府：加藤涉\n西村：落合福嗣\n松冈：西凛太朗 ",
    "staff": "监督：青木英\n脚本：舞城王太郎\n角色原案：小玉有起\n角色设计：碇谷敦\n美术：曽野由大\n作画监督：又贺大介\n副监督：久保田雄大\n色彩设计：千叶絵美\n动画制作：NAZ",
    "play_state": 0,
    "goto_url": "https://www.bilibili.com/bangumi/play/ss29310/",
    "desc": "本片讲述利用能检测出人们杀意的装置以及利用思想粒子做出的“井”，来探知事件真相的科幻故事。",
    "corner": 13,
    "pubtime": 1578240000,
    "media_mode": 2,
    "is_avid": false,
    "fix_pubtime_str": "",
    "media_score": {
        "user_count": 275391,
        "score": 9.8
    },
    "hit_columns": [
        "title"
    ],
    "all_net_name": "",
    "all_net_icon": "",
    "all_net_url": "",
    "angle_title": "会员专享",
    "angle_color": 0,
    "display_info": [
        {
            "bg_color_night": "#BB5B76",
            "text": "会员专享",
            "border_color": "#FB7299",
            "bg_style": 1,
            "text_color": "#FFFFFF",
            "bg_color": "#FB7299",
            "text_color_night": "#E5E5E5",
            "border_color_night": "#BB5B76"
        }
    ],
    "hit_epids": "",
    "pgc_season_id": 29310,
    "season_type": 1,
    "season_type_name": "番剧",
    "selection_style": "grid",
    "ep_size": 13,
    "url": "https://www.bilibili.com/bangumi/play/ss29310",
    "button_text": "立即观看",
    "is_follow": 1,
    "is_selection": 1,
    "eps": [
        {
            "id": 307446,
            "cover": "http://i0.hdslb.com/bfs/archive/4a1895e5b675209b6948dc321c3cc4991a6262bc.jpg",
            "title": "1",
            "url": "https://www.bilibili.com/bangumi/play/ep307446",
            "release_date": "",
            "badges": [],
            "index_title": "1",
            "long_title": "JIGSAWED 碎片世界"
        },
        {
            "id": 307447,
            "cover": "http://i0.hdslb.com/bfs/archive/c66175203fdb6f54a9fb3accd793da0341b3140a.jpg",
            "title": "2",
            "url": "https://www.bilibili.com/bangumi/play/ep307447",
            "release_date": "",
            "badges": [
                {
                    "text": "会员",
                    "text_color": "#FFFFFF",
                    "text_color_night": "#E5E5E5",
                    "bg_color": "#FB7299",
                    "bg_color_night": "#BB5B76",
                    "border_color": "",
                    "border_color_night": "",
                    "bg_style": 1
                }
            ],
            "index_title": "2",
            "long_title": "JIGSAWED Ⅱ 碎片世界"
        },
        …………
    ],
    "badges": [
        {
            "text": "会员专享",
            "text_color": "#FFFFFF",
            "text_color_night": "#E5E5E5",
            "bg_color": "#FB7299",
            "bg_color_night": "#BB5B76",
            "border_color": "",
            "border_color_night": "",
            "bg_style": 1
        }
    ]
},
```

</details>

## 对象类型3-结果为直播间

| 字段        | 类型  | 内容           | 备注                                      |
| ----------- | ----- | -------------- | ----------------------------------------- |
| type        | str   | 结果类型       | 固定为live_room                           |
| rank_offset | num   | 搜索结果排名值 |                                           |
| uid         | num   | 主播mid        |                                           |
| tas         | str   | 直播间TAG      | 多个用`,`分隔                             |
| hit_columns | array | 关键字匹配类型 |                                           |
| live_time   | str   | 开播时间       | YYYY-MM-DD HH:MM:SS                       |
| cate_name   | str   | 子分区名       |                                           |
| live_status | num   | 1              |                                           |
| uname       | str   | 主播昵称       |                                           |
| uface       | str   | 主播头像url    |                                           |
| user_cover  | str   | 直播间封面url  |                                           |
| short_id    | num   | 0              | **作用尚不明确**                          |
| area        | num   | 1              | **作用尚不明确**                          |
| title       | str   | 直播间标题     | 关键字用xml标签`<em class="keyword">`标注 |
| cover       | str   | 关键帧截图url  |                                           |
| online      | num   | 在线人数       |                                           |
| rank_index  | num   | 0              | **作用尚不明确**                          |
| rank_score  | num   | 结果排序量化值 |                                           |
| roomid      | num   | 直播间id       |                                           |
| attentions  | num   | 主播粉丝数     |                                           |

`直播间条目`中的`hit_columns`数组：

| 项   | 类型 | 内容            | 备注                                                         |
| ---- | ---- | --------------- | ------------------------------------------------------------ |
| 0    | str  | 匹配类型1       | title：直播间标题匹配<br />cate_name：子分区名匹配<br />uname：主播昵称匹配 |
| n    | str  | 匹配类型（n+1） | 项数为同时匹配到的类型数                                     |
| ……   | str  | ……              | ……                                                           |

**示例：**

<details>
<summary>查看响应示例：</summary>

```json
{
    "rank_offset": 1,
    "uid": 682508,
    "tags": "minecraft,声控,我的世界,虚拟主播,助眠",
    "hit_columns": [
        "title",
        "cate_name"
    ],
    "live_time": "2020-07-03 19:08:46",
    "cate_name": "我的世界",
    "live_status": 1,
    "uname": "超心塞的十六",
    "uface": "//i0.hdslb.com/bfs/face/dc33ad47b5e299c08bea9cfe565373213012599c.jpg",
    "user_cover": "//i0.hdslb.com/bfs/live/new_room_cover/cbc7b1d0ba181df2c714c2e45ab00937129d3c5c.jpg",
    "short_id": 148,
    "area": 1,
    "type": "live_room",
    "title": "<em class=\"keyword\">MC</em> 1.16 极限服",
    "cover": "//i0.hdslb.com/bfs/live/keyframe07031915000000010313u3z18a.jpg",
    "online": 34702,
    "rank_index": 0,
    "rank_score": 34702,
    "roomid": 10313,
    "attentions": 317864
}
```

</details>

## 对象类型4-结果为主播

| 字段        | 类型  | 内容           | 备注                                                   |
| ----------- | ----- | -------------- | ------------------------------------------------------ |
| type        | str   | 结果类型       | 固定为live_user                                        |
| rank_offset | num   | 搜索结果排名值 |                                                        |
| uid         | num   | 主播mid        |                                                        |
| tas         | str   | 直播间TAG      | 多个用`,`分隔                                          |
| live_time   | str   | 开播时间       | YYYY-MM-DD HH:MM:SS<br />如未开播为0000-00-00 00:00:00 |
| hit_columns | array | 关键字匹配类型 |                                                        |
| live_status | num   | 是否开播       | 0：未开播<br />1：已开播                               |
| area        | num   | 1              | **作用尚不明确**                                       |
| is_live     | bool  | 是否开播       | false：未开播<br />true：已开播                        |
| uname       | str   | 主播昵称       | 关键字用xml标签`<em class="keyword">`标注              |
| uface       | str   | 主播头像url    |                                                        |
| rank_index  | num   | 0              | **作用尚不明确**                                       |
| rank_score  | num   | 结果排序量化值 |                                                        |
| attentions  | num   | 主播粉丝数     |                                                        |

`主播条目`中的`hit_columns`数组：

| 项   | 类型 | 内容            | 备注                     |
| ---- | ---- | --------------- | ------------------------ |
| 0    | str  | 匹配类型1       | uname：主播昵称匹配      |
| n    | str  | 匹配类型（n+1） | 项数为同时匹配到的类型数 |
| ……   | str  | ……              | ……                       |

**示例：**

<details>
<summary>查看响应示例：</summary>

```json
{
    "rank_offset": 1,
    "uid": 322892,
    "tags": "鬼畜,游戏,瞎扯淡,轰炸挂",
    "type": "live_user",
    "live_time": "2020-07-03 17:57:30",
    "hit_columns": [
        "uname"
    ],
    "live_status": 1,
    "area": 1,
    "is_live": true,
    "uname": "<em class=\"keyword\">痒局长</em>",
    "uface": "//i2.hdslb.com/bfs/face/bcdf640faa16ebaacea1d4c930baabaec9087a80.jpg",
    "rank_index": 0,
    "rank_score": 2620790,
    "roomid": 5441,
    "attentions": 2570790
}
```

</details>

## 对象类型5-结果为专栏

| 字段          | 类型  | 内容           | 备注             |
| ------------- | ----- | -------------- | ---------------- |
| type          | str   | 结果类型       | 固定为article    |
| rank_offset   | num   | 搜索结果排名值 |                  |
| pub_time      | num   | 投稿时间       | 时间戳           |
| like          | num   | 获赞数         |                  |
| title         | str   | 标题           |                  |
| mid           | num   | UP主mid        |                  |
| image_urls    | array | 封面图组       |                  |
| template_id   | num   | ？？？         | **作用尚不明确** |
| category_id   | num   | 专栏分区     |                  |
| view          | num   | 阅读数         |                  |
| reply         | num   | 评论数         |                  |
| rank_index    | num   | 0              | **作用尚不明确** |
| desc          | str   | 文章预览       |                  |
| rank_score    | num   | 结果排序量化值 |                  |
| id            | num   | 专栏cvid       |                  |
| category_name | str   | 子分区名       |                  |

`专栏条目`中的`covers`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | str  | 封面图片1       |      |
| n    | str  | 封面图片（n+1） |      |
| ……   | str  | ……              |      |

**示例：**

<details>
<summary>查看响应示例：</summary>

```json
{
    "pub_time": 1582123245,
    "like": 113,
    "title": "【洛水闲谈】《<em class=\"keyword\">普通DISCO</em>》神话达成后的个人感想",
    "rank_offset": 1,
    "mid": 295535204,
    "image_urls": [
        "//i0.hdslb.com/bfs/article/0c2e7e3cc14f7e097482688600be713a9e9a7029.png"
    ],
    "template_id": 4,
    "category_id": 4,
    "view": 843,
    "reply": 58,
    "rank_index": 0,
    "desc": "今天，2020年2月19日，随着bilibili弹幕网上《普通DISCO》的播放量突破1000W，中文VOCALOID的第一首神话级歌曲诞生了。笔者昨夜盯着《普通DISCO》的播放量的增长速率熬到很晚，今早又起了个大早盯着那最后一万的播放量差距，直到播放量突破1000W才放松紧绷的神经，敲打键盘时肢体困倦神疲乏力，故长话短说，若有表达不妥之处还望各位海涵。ilem教主，其拥有近二十首百万传说曲，占bilibili弹幕网中文VOCALOID百万传说曲的三分之一，中文VOCALOID第一首传说曲与第",
    "rank_score": 19,
    "type": "article",
    "id": 4743576,
    "category_name": "动漫杂谈"
}
```

</details>

## 对象类型6-结果为话题

| 字段        | 类型  | 内容              | 备注             |
| ----------- | ----- | ----------------- | ---------------- |
| type        | str   | 结果类型          | 固定为topic      |
| description | str   | 简介              |                  |
| pubdate     | nm    | 发布时间          | 时间戳           |
| title       | str   | 标题              |                  |
| favourite   | num   | 0                 | **作用尚不明确** |
| hit_columns | array | 关键字匹配类型    |                  |
| review      | num   | 0                 | **作用尚不明确** |
| rank_offset | num   | 搜索结果排名值    |                  |
| cover       | str   | 话题封面url       |                  |
| update      | num   | 上传时间          | 时间戳           |
| mid         | nm    | 0                 | **作用尚不明确** |
| click       | num   | ？？？            | **作用尚不明确** |
| tp_type     | num   | ？？？            | **作用尚不明确** |
| keyword     | str   | 空                | **作用尚不明确** |
| tp_id       | num   | 话题tp          |                  |
| rank_index  | num   | 0                 | **作用尚不明确** |
| author      | str   | UP主昵称          |                  |
| arcurl      | str   | 话题页面重定向url |                  |
| rank_score  | num   | 结果排序量化值    |                  |

`话题条目`中的`hit_columns`数组：

| 项   | 类型 | 内容            | 备注                     |
| ---- | ---- | --------------- | ------------------------ |
| 0    | str  | 匹配类型1       | title：话题标题匹配      |
| n    | str  | 匹配类型（n+1） | 项数为同时匹配到的类型数 |
| ……   | str  | ……              | ……                       |

**示例：**

<details>
<summary>查看响应示例：</summary>

```json
{
    "description": "「Bad Apple」的各式各样的PV有很多很多，小编在这里给大家推荐一些比较特别且高人气的特别PV......",
    "pubdate": 1479380676,
    "title": "「Bad Apple」 的N种特别PV",
    "favourite": 0,
    "hit_columns": [
        "title"
    ],
    "review": 0,
    "rank_offset": 1,
    "cover": "//i0.hdslb.com/bfs/active/3005a94d446db3873d97b483323156b491d850ac.jpg",
    "update": 31507200,
    "mid": 0,
    "click": 211843,
    "tp_type": 0,
    "keyword": "",
    "tp_id": 2215,
    "rank_index": 0,
    "author": "Nuuu",
    "type": "topic",
    "arcurl": "http://www.bilibili.com/topic/50.html",
    "rank_score": 1851888
}
```

</details>

## 对象类型7-结果为用户

| 字段            | 类型  | 内容           | 备注                          |
| --------------- | ----- | -------------- | ----------------------------- |
| type            | str   | 结果类型       | 固定为bili_user               |
| mid             | num   | 用户mid        |                               |
| uname           | str   | 用户昵称       |                               |
| usign           | str   | 用户签名       |                               |
| fans            | num   | 用户粉丝数     |                               |
| videos          | num   | 用户稿件数     |                               |
| upic            | str   | 用户头像url    |                               |
| verify_info     | str   | 空             | **作用尚不明确**              |
| level           | num   | 用户等级       |                               |
| gender          | num   | 用户性别       | 1：男<br />2：女<br />3：私密 |
| is_upuser       | num   | 是否为UP主     | 0：否<br />1：是              |
| is_live         | num   | 是否正在直播   | 0：否<br />1：是              |
| room_id         | num   | 用户直播间id   |                               |
| res             | array | 用户投稿内容   |                               |
| official_verify | obj   | 用户认证信息   |                               |
| hit_columns     | array | 关键字匹配类型 |                               |

`用户条目`中的`res`数组：

| 项   | 类型 | 内容                | 备注                      |
| ---- | ---- | ------------------- | ------------------------- |
| 0    | obj  | 用户投稿视频1       |                           |
| n    | obj  | 用户投稿视频（n+1） | 项数为用户投稿的3个视频数 |
| ……   | obj  | ……                  | ……                        |

`res`数组中的对象：

| 字段           | 类型 | 内容              | 备注             |
| -------------- | ---- | ----------------- | ---------------- |
| aid            | num  | 稿件avid          |                  |
| bvid           | str  | 稿件bvid          |                  |
| title          | str  | 视频标题          |                  |
| pubdate        | num  | 视频投稿时间      | 时间戳           |
| arcurl         | str  | 视频页面重定向url |                  |
| pic            | str  | 视频封面图片url   |                  |
| play           | str  | 播放量            |                  |
| dm             | str  | 弹幕量            |                  |
| coin           | num  | 投币数            |                  |
| fav            | num  | 收藏数            |                  |
| desc           | str  | 视频简介          |                  |
| duration       | str  | 视频时长          | MM:SS            |
| is_pay         | num  | 0                 | **作用尚不明确** |
| is_union_video | num  | 是否为合作视频    | 0：否<br />1：是 |

`用户条目`中的`official_verify`对象：

| 字段 | 类型 | 内容     | 备注                                      |
| ---- | ---- | -------- | ----------------------------------------- |
| type | num  | 是否认证 | 127：无<br />0：个人认证<br />1：组织认证 |
| desc | str  | 认证名称 |                                           |

`用户条目`中的`hit_columns`数组：

| 项   | 类型 | 内容            | 备注                     |
| ---- | ---- | --------------- | ------------------------ |
| 0    | str  | 匹配类型1       | uname：用户昵称匹配      |
| n    | str  | 匹配类型（n+1） | 项数为同时匹配到的类型数 |
| ……   | str  | ……              | ……                       |

**示例：**

<details>
<summary>查看响应示例：</summary>

```json
{
    "type": "bili_user",
    "mid": 208259,
    "uname": "陈睿",
    "usign": "喜欢的话就坚持吧",
    "fans": 1561640,
    "videos": 5,
    "upic": "//i1.hdslb.com/bfs/app/8920e6741fc2808cce5b81bc27abdbda291655d3.png",
    "verify_info": "",
    "level": 6,
    "gender": 1,
    "is_upuser": 1,
    "is_live": 0,
    "room_id": 3394945,
    "res": [
        {
            "aid": 883660923,
            "bvid": "BV1SK4y1477d",
            "title": "BILIBILI 11周年演讲",
            "pubdate": 1593176427,
            "arcurl": "http://www.bilibili.com/video/av883660923",
            "pic": "//i0.hdslb.com/bfs/archive/b28021df9c67ee2821cb9c1142b9d5e594e3b951.jpg",
            "play": "6144081",
            "dm": 185789,
            "coin": 167803,
            "fav": 147421,
            "desc": "BILIBILI 11周年演讲，邀请数位嘉宾分享他们与B站的故事。\n陈睿《bilibili 11周年主题演讲》\n机智的党妹 《在B站，表达自我》\n腾格尔《在B站，做全新的腾格尔》\n周深《在B站，做一个歌手》《起风了》\n罗翔《在B站，授业与解惑》\nCarly李旎《在B站，一起成长》\nBILIBILI 11周年特映片《喜相逢》",
            "duration": "217:7",
            "is_pay": 0,
            "is_union_video": 1
        },
        {
            "aid": 838688095,
            "bvid": "BV1Wg4y1v77h",
            "title": "我们的五年——B站五年员工纪念视频 2020版",
            "pubdate": 1593004830,
            "arcurl": "http://www.bilibili.com/video/av838688095",
            "pic": "//i1.hdslb.com/bfs/archive/701da662dfe00fb180eb4a47f1c38403838570a7.jpg",
            "play": "957960",
            "dm": 10830,
            "coin": 44030,
            "fav": 23108,
            "desc": "每年626前夕，我们都会给本年度满五年工龄的员工颁发金LOGO（金质的小电视胸章），感谢他们对公司的陪伴和付出。“五年守护，感恩有你”",
            "duration": "4:51",
            "is_pay": 0,
            "is_union_video": 0
        },
        {
            "aid": 327892668,
            "bvid": "BV1fA411b7zo",
            "title": "【推荐一本喜欢的书】上帝掷骰子吗？",
            "pubdate": 1587632267,
            "arcurl": "http://www.bilibili.com/video/av327892668",
            "pic": "//i0.hdslb.com/bfs/archive/c3ec25e2e4425303d7f4915692e3a9f0ec027669.jpg",
            "play": "2131624",
            "dm": 13570,
            "coin": 37432,
            "fav": 35498,
            "desc": "#推荐一本喜欢的书# 423世界读书日，推荐我看过的最好看的量子物理科普书籍《上帝掷骰子吗》#读书等身#\n欢迎参与B站读书日活动：https://www.bilibili.com/blackboard/activity-gNeFPygv0.html 你每投一个读书视频，B站都会为你捐出一本书。",
            "duration": "4:46",
            "is_pay": 0,
            "is_union_video": 0
        }
    ],
    "official_verify": {
        "type": 0,
        "desc": "bilibili董事长兼CEO"
    },
    "hit_columns": [
        "uname"
    ]
}
```

</details>

## 对象类型8-结果为相簿

| 字段        | 类型  | 内容           | 备注             |
| ----------- | ----- | -------------- | ---------------- |
| type        | str   | 结果类型       | 固定为photo      |
| count       | num   | 图片数         |                  |
| like        | num   | 收藏数         |                  |
| title       | str   | 相簿标题       |                  |
| hit_columns | array | 关键字匹配类型 |                  |
| rank_offset | num   | 搜索结果排名值 |                  |
| cover       | str   | 相簿封面url    |                  |
| mid         | num   | UP主mid        |                  |
| uname       | str   | UP主昵称       |                  |
| rank_index  | num   | 0              | **作用尚不明确** |
| view        | num   | 观看次数       |                  |
| id          | num   | 相簿id         |                  |
| rank_score  | num   | 结果排序量化值 |                  |

`相簿条目`中的`hit_columns`数组：

| 项   | 类型 | 内容            | 备注                                                         |
| ---- | ---- | --------------- | ------------------------------------------------------------ |
| 0    | str  | 匹配类型1       | title：相簿标贴匹配<br />description：相簿简介匹配<br />source_tag：相簿TAG匹配 |
| n    | str  | 匹配类型（n+1） | 项数为同时匹配到的类型数                                     |
| ……   | str  | ……              | ……                                                           |

**示例：**

<details>
<summary>查看响应示例：</summary>

```json
{
    "count": 4,
    "like": 42,
    "title": "EVA Q 绫波丽",
    "hit_columns": [
        "title"
    ],
    "rank_offset": 1,
    "cover": "http://i0.hdslb.com/bfs/album/1043ee70b677c9aab406142c6aa00d097be07c1e.jpg",
    "mid": 3306217,
    "uname": "迷失人形LLS",
    "rank_index": 0,
    "view": 100924,
    "type": "photo",
    "id": 8952802,
    "rank_score": 25315
}
```

</details>