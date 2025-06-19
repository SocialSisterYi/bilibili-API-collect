# 视频推荐

## 获取单视频推荐列表（web端）

> https://api.bilibili.com/x/web-interface/archive/related

*请求方式：GET*

最多获取40条推荐视频

**url参数：**

| 参数名  | 类型  | 内容     | 必要性    | 备注            |
|------|-----|--------|--------|---------------|
| aid  | num | 稿件avid | 必要（可选） | avid与bvid任选一个 |
| bvid | str | 稿件bvid | 必要（可选） | avid与bvid任选一个 |

**json回复：**

根对象：

| 字段      | 类型    | 内容   | 备注                   |
|---------|-------|------|----------------------|
| code    | num   | 返回值  | 0：成功 <br />-400：请求错误 |
| message | str   | 错误信息 | 默认为0                 |
| ttl     | num   | 1    |                      |
| data    | array | 推荐列表 |                      |

`data`数组：

| 项  | 类型  | 内容        | 备注 |
|----|-----|-----------|----|
| 0  | obj | 推荐视频1     |    |
| n  | obj | 推荐视频(n+1) |    |
| …… | obj | ……        | …… |
| 39 | obj | 推荐视频40    |    |

`data`数组中的对象：

基本同「[获取视频详细信息（web端）](info.md#获取视频详细信息（web端）)」中的data对象，已知没有分P信息

**示例：**

查询视频`av7`/`BV1xx411c7m9`的推荐视频列表

avid方式：

```shell
curl -G 'https://api.bilibili.com/x/web-interface/archive/related' \
--data-urlencode 'aid=7'
```

bvid方式：

```shell
curl -G 'https://api.bilibili.com/x/web-interface/archive/related' \
--data-urlencode 'bvid=BV1xx411c7m9'
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
      "aid": 21322566,
      "videos": 1,
      "tid": 124,
      "tname": "趣味科普人文",
      "copyright": 1,
      "pic": "http://i2.hdslb.com/bfs/archive/37f383ac35d386af1fc578108ad643e5952ff66a.jpg",
      "title": "bilibili上市宣传视频",
      "pubdate": 1522205992,
      "ctime": 1522205994,
      "desc": "今天晚上9点30分（北京时间），bilibili将在美国纳斯达克（NASDAQ）证券交易所挂牌上市。",
      "state": 0,
      "attribute": 16768,
      "duration": 155,
      "rights": {
        "bp": 0,
        "elec": 0,
        "download": 0,
        "movie": 0,
        "pay": 0,
        "hd5": 1,
        "no_reprint": 1,
        "autoplay": 1,
        "ugc_pay": 0,
        "is_cooperation": 0,
        "ugc_pay_preview": 0,
        "no_background": 0
      },
      "owner": {
        "mid": 208259,
        "name": "陈睿",
        "face": "http://i2.hdslb.com/bfs/face/8920e6741fc2808cce5b81bc27abdbda291655d3.png"
      },
      "stat": {
        "aid": 21322566,
        "view": 2129084,
        "danmaku": 51108,
        "reply": 18119,
        "favorite": 46524,
        "coin": 85223,
        "share": 16669,
        "now_rank": 0,
        "his_rank": 1,
        "like": 95621,
        "dislike": 0
      },
      "dynamic": "今天晚上9点30分（北京时间），bilibili将在美国纳斯达克（NASDAQ）证券交易所挂牌上市。",
      "cid": 35063529,
      "dimension": {
        "width": 1920,
        "height": 1080,
        "rotate": 0
      },
      "bvid": ""
    },
    {
      "aid": 271,
      "videos": 1,
      "tid": 53,
      "tname": "",
      "copyright": 1,
      "pic": "http://i1.hdslb.com/bfs/archive/a5980672f3d03e8292148748a63de99cd45679d3.jpg",
      "title": "弹幕测试专用",
      "pubdate": 1249886475,
      "ctime": 1497344798,
      "desc": "给职人发射弹幕定位用.",
      "state": 0,
      "attribute": 32768,
      "duration": 4558,
      "rights": {
        "bp": 0,
        "elec": 0,
        "download": 0,
        "movie": 0,
        "pay": 0,
        "hd5": 0,
        "no_reprint": 0,
        "autoplay": 1,
        "ugc_pay": 0,
        "is_cooperation": 0,
        "ugc_pay_preview": 0,
        "no_background": 0
      },
      "owner": {
        "mid": 2,
        "name": "碧诗",
        "face": "http://i1.hdslb.com/bfs/face/3e60b20604b6fdc7d081eb6a1ec72aa47c5a3964.jpg"
      },
      "stat": {
        "aid": 271,
        "view": 2532266,
        "danmaku": 699214,
        "reply": 10224,
        "favorite": 34927,
        "coin": 9712,
        "share": 3586,
        "now_rank": 0,
        "his_rank": 182,
        "like": 27257,
        "dislike": 0
      },
      "dynamic": "",
      "cid": 3659795,
      "dimension": {
        "width": 0,
        "height": 0,
        "rotate": 0
      },
      "bvid": ""
    },
    {
      "aid": 106,
      "videos": 1,
      "tid": 26,
      "tname": "音MAD",
      "copyright": 2,
      "pic": "http://i2.hdslb.com/bfs/archive/34d8fdf08d1fe28c229dec2fd122815a1d012908.jpg",
      "title": "最终鬼畜蓝蓝路",
      "pubdate": 1350316631,
      "ctime": 1497348932,
      "desc": "sm2057168 把这个音mad的图腾和支柱从UP的怒火中搬出来重新立好，这是我所能做的最后的事情了。",
      "state": 0,
      "attribute": 32768,
      "duration": 318,
      "rights": {
        "bp": 0,
        "elec": 0,
        "download": 0,
        "movie": 0,
        "pay": 0,
        "hd5": 0,
        "no_reprint": 0,
        "autoplay": 1,
        "ugc_pay": 0,
        "is_cooperation": 0,
        "ugc_pay_preview": 0,
        "no_background": 0
      },
      "owner": {
        "mid": 8839,
        "name": "TSA",
        "face": "http://i0.hdslb.com/bfs/face/0ef5daf622bf4789034b3c15147a45e11c48c9b3.jpg"
      },
      "stat": {
        "aid": 106,
        "view": 7607070,
        "danmaku": 212896,
        "reply": 41521,
        "favorite": 200705,
        "coin": 51673,
        "share": 38049,
        "now_rank": 0,
        "his_rank": 22,
        "like": 148550,
        "dislike": 0
      },
      "dynamic": "",
      "cid": 3635863,
      "dimension": {
        "width": 0,
        "height": 0,
        "rotate": 0
      },
      "bvid": ""
    },
    {
      "aid": 50025934,
      "videos": 1,
      "tid": 122,
      "tname": "野生技术协会",
      "copyright": 1,
      "pic": "http://i0.hdslb.com/bfs/archive/af534399612085dbd916381b3377b18c765fab2d.png",
      "title": "B站又一位Lv9的up诞生了",
      "pubdate": 1555829289,
      "ctime": 1555829289,
      "desc": "要不关注一下？",
      "state": 0,
      "attribute": 16512,
      "duration": 45,
      "rights": {
        "bp": 0,
        "elec": 0,
        "download": 0,
        "movie": 0,
        "pay": 0,
        "hd5": 0,
        "no_reprint": 1,
        "autoplay": 1,
        "ugc_pay": 0,
        "is_cooperation": 0,
        "ugc_pay_preview": 0,
        "no_background": 0
      },
      "owner": {
        "mid": 174161216,
        "name": "血色红茶Xenomprph",
        "face": "http://i1.hdslb.com/bfs/face/5a5ececb9b7a688751024c60063ba5853bed7e1e.jpg"
      },
      "stat": {
        "aid": 50025934,
        "view": 159595,
        "danmaku": 62,
        "reply": 153,
        "favorite": 301,
        "coin": 1059,
        "share": 55,
        "now_rank": 0,
        "his_rank": 0,
        "like": 1219,
        "dislike": 0
      },
      "dynamic": "",
      "cid": 87577929,
      "dimension": {
        "width": 2560,
        "height": 1440,
        "rotate": 0
      },
      "bvid": ""
    }
    …
    …
    …
    …
  ]
}
```

</details>

## 获取首页视频推荐列表（web端）

> https://api.bilibili.com/x/web-interface/wbi/index/top/feed/rcmd

*请求方式：GET*

认证方式：Cookie（SESSDATA）

最多获取30条推荐视频,直播及推荐边栏

**url参数：**

| 参数名           | 类型  | 内容           | 必要性 | 备注                             |
|---------------|-----|--------------|-----|--------------------------------|
| fresh_type    | num | 相关性          | 非必要 | 默认为 4 <br /> 值越大推荐内容越相关        |
| ps            | num | 单页返回的记录条数    | 非必要 | 默认为 12, 留空即最大值为 30             |
| fresh_idx     | num | 当前翻页号        | 非必要 | 以 1 开始                         |
| fresh_idx_1h  | num | 当前翻页号(一小时前?) | 非必要 | 以 1 开始, 默认与 fresh_idx 内容相同     |
| brush         | num | 刷子?          | 非必要 | 以 1 开始, 默认与 fresh_idx 内容相同     |
| fetch_row     | num | 本次抓取的最后一行行号  | 非必要 | 1 递归加上本次抓取总行数                  |
| web_location  | num | 网页位置         | 非必要 | 主页为 1430650                    |
| y_num         | num | 普通列数         | 非必要 | 一行中视频,直播及广告数                   |
| last_y_num    | num | 总列数          | 非必要 | 普通列数 + 边栏列数                    |
| feed_version  | str | V8           | 非必要 | 作用尚不明确                         |
| homepage_ver  | num | 1            | 非必要 | 首页版本                           |
| screen        | str | 浏览器视口大小      | 非必要 | 水平在前垂直在后以减号分割                  |
| seo_info      | str | 空            | 非必要 | 作用尚不明确                         |
| last_showlist | str | 上次抓取的视频av号列表 | 非必要 | av与数字间用下划线分隔, 若视频UP主已关注则中间再插入n |
| uniq_id       | str | ???          | 非必要 | 作用尚不明确                         |
| w_rid         | str | WBI 签名       | 非必要 | 见[WBI 签名](../misc/sign/wbi.md) |
| wts           | num | UNIX 时间戳     | 非必要 | 见[WBI 签名](../misc/sign/wbi.md) |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                   |
|---------|-----|------|----------------------|
| code    | num | 返回值  | 0：成功 <br />-400：请求错误 |
| message | str | 错误信息 | 默认为0                 |
| ttl     | num | 1    |                      |
| data    | obj |      |                      |

`data`对象：

| 字段                       | 类型    | 内容    | 备注                 |
|--------------------------|-------|-------|--------------------|
| business_card            | null  |       |                    |
| floor_info               | null  |       |                    |
| item                     | array | 推荐列表  |                    |
| mid                      | num   | 用户mid | 未登录为0              |
| preload_expose_pct       | num   | 0.5   | 用于预加载?             |
| preload_floor_expose_pct | num   | 0.5   | 用于预加载?             |
| side_bar_column          | array | 边栏列表? | 可参考字段 item 及对应功能文档 |
| user_feature             | null  |       |                    |

`data`对象中`item`数组中的对象:

| 字段                | 类型   | 内容            | 备注                                           |
|-------------------|------|---------------|----------------------------------------------|
| av_feature        | null |               |                                              |
| business_info     | obj  | 商业推广信息        | 无为null<br />对于推广内容，视频信息会在这个dict的"archive"属性下 |
| bvid              | str  | 视频bvid        |                                              |
| cid               | num  | 稿件cid         |                                              |
| dislike_switch    | num  | 1             | 显示不感兴趣开关?                                    |
| dislike_switch_pc | num  | 0             | 显示不感兴趣开关(PC)?                                |
| duraion           | num  | 视频时长          |                                              |
| enable_vt         | num  | 0             | 作用尚不明确                                       |
| goto              | num  | 目标类型          | av: 视频<br />ogv: 边栏<br />live: 直播            |
| duraion           | num  | 视频时长          |                                              |
| id                | num  | 视频aid / 直播间id |                                              |
| is_followed       | num  | 已关注           | 0: 未关注<br />1: 已关注                           |
| is_stock          | num  | 0             | 作用尚不明确                                       |
| ogv_info          | null |               |                                              |
| owner             | obj  | UP主           |                                              |
| pic               | str  | 封面            |                                              |
| pic_4_3           | str  | 封面(4:3)       |                                              |
| pos               | num  | 0             | 位置?                                          |
| pubdate           | num  | 发布时间          |                                              |
| rcmd_reason       | obj  | 推荐理由          | 直播等为null                                     |
| room_info         | obj  | 直播间信息         | 普通视频等为null, 参见[直播](../live)                  |
| show_info         | num  | 展示信息          | 1: 普通视频<br />0: 直播                           |
| stat              | obj  | 视频状态信息        | 直播等为null, 参见[视频基本信息](info.md)                |
| title             | str  | 标题            |                                              |
| track_id          | str  | 跟踪标识?         |                                              |
| uri               | str  | 目标页 URI       |                                              |
| vt_display        | str  | 空             | 作用尚不明确                                       |

`item`数组中的对象中的`owner`对象:

| 字段   | 类型  | 内容     | 备注 |
|------|-----|--------|----|
| face | str | 头像URL  |    |
| mid  | num | UP主mid |    |
| name | str | UP昵称   |    |

`item`数组中的对象中的`rcmd_reason`对象:

| 字段          | 类型  | 内容   | 备注                            |
|-------------|-----|------|-------------------------------|
| reason_type | num | 原因类型 | 0: 无<br />1: 已关注<br />3: 高点赞量 |
| content     | str | 原因描述 | 当 reason_type 为 3 时存在         |

**示例：**

获取新版web端首页推荐视频列表

```shell
curl -G 'https://api.bilibili.com/x/web-interface/wbi/index/top/feed/rcmd' \
--data-urlencode 'fresh_type=4' \
--data-urlencode 'ps=12' \
--data-urlencode 'fresh_idx=5' \
--data-urlencode 'fresh_idx_1h=5' \
--data-urlencode 'fetch_row=16'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "item": [
      {
        "id": 1354614895,
        "bvid": "BV1Dz42117GZ",
        "cid": 1548835687,
        "goto": "av",
        "uri": "https://www.bilibili.com/video/BV1Dz42117GZ",
        "pic": "http://i1.hdslb.com/bfs/archive/b47154987b4c0f40a39779c09a9d485176d1238f.jpg",
        "pic_4_3": "http://i0.hdslb.com/bfs/archive/b47154987b4c0f40a39779c09a9d485176d1238f.jpg",
        "title": "做数学题总是抄错 | 看错 | 算错 怎么破？决定高考分数的这个非智力因素不容忽视",
        "duration": 882,
        "pubdate": 1715946937,
        "owner": {
          "mid": 374484802,
          "name": "数学阮禾老师",
          "face": "https://i1.hdslb.com/bfs/face/4df57e4b48b04206bce7572831688741580ca0e1.jpg"
        },
        "stat": {
          "view": 48250,
          "like": 2959,
          "danmaku": 433,
          "vt": 0
        },
        "av_feature": null,
        "is_followed": 0,
        "rcmd_reason": {
          "reason_type": 0
        },
        "show_info": 1,
        "track_id": "web_pegasus_4.router-web-pegasus-1554782-5c89895477-smhn8.1721098961744.133",
        "pos": 0,
        "room_info": null,
        "ogv_info": null,
        "business_info": null,
        "is_stock": 0,
        "enable_vt": 0,
        "vt_display": "",
        "dislike_switch": 1,
        "dislike_switch_pc": 0
      },
      {
        "id": 1255924089,
        "bvid": "BV1DJ4m1u7Mp",
        "cid": 1600833978,
        "goto": "av",
        "uri": "https://www.bilibili.com/video/BV1DJ4m1u7Mp",
        "pic": "http://i0.hdslb.com/bfs/archive/5068d860e8bbc37679ece933aa8e6d8428cfb5c1.jpg",
        "pic_4_3": "http://i0.hdslb.com/bfs/aistory/2024-07-01-1145021255924089_1612_gener.jpg",
        "title": "人类这种生物，看到按钮就会按下去。",
        "duration": 326,
        "pubdate": 1719805500,
        "owner": {
          "mid": 5616993,
          "name": "马夫鱼33",
          "face": "https://i0.hdslb.com/bfs/face/4c2af23046147e91ce5a4af3375464fdcf1956e6.jpg"
        },
        "stat": {
          "view": 667067,
          "like": 28529,
          "danmaku": 483,
          "vt": 0
        },
        "av_feature": null,
        "is_followed": 0,
        "rcmd_reason": {
          "content": "2万点赞",
          "reason_type": 3
        },
        "show_info": 1,
        "track_id": "web_pegasus_4.router-web-pegasus-1554782-5c89895477-smhn8.1721098961744.133",
        "pos": 0,
        "room_info": null,
        "ogv_info": null,
        "business_info": null,
        "is_stock": 0,
        "enable_vt": 0,
        "vt_display": "",
        "dislike_switch": 1,
        "dislike_switch_pc": 0
      },
      {
        "id": 1306020278,
        "bvid": "BV1rM4m117Ry",
        "cid": 1608959606,
        "goto": "av",
        "uri": "https://www.bilibili.com/video/BV1rM4m117Ry",
        "pic": "http://i0.hdslb.com/bfs/archive/49f62c70f17d0afe00e5e620dd366c68149c780e.jpg",
        "pic_4_3": "http://i0.hdslb.com/bfs/archive/49f62c70f17d0afe00e5e620dd366c68149c780e.jpg",
        "title": "Axios 前后端对接教程｜HTTP",
        "duration": 352,
        "pubdate": 1720440325,
        "owner": {
          "mid": 260736087,
          "name": "三分钟实验室",
          "face": "https://i0.hdslb.com/bfs/face/6172aa089ed0b26ffffb72018422eb4280d4da41.jpg"
        },
        "stat": {
          "view": 7527,
          "like": 365,
          "danmaku": 1,
          "vt": 0
        },
        "av_feature": null,
        "is_followed": 0,
        "rcmd_reason": {
          "reason_type": 0
        },
        "show_info": 1,
        "track_id": "web_pegasus_4.router-web-pegasus-1554782-5c89895477-smhn8.1721098961744.133",
        "pos": 0,
        "room_info": null,
        "ogv_info": null,
        "business_info": null,
        "is_stock": 0,
        "enable_vt": 0,
        "vt_display": "",
        "dislike_switch": 1,
        "dislike_switch_pc": 0
      },
      {
        "id": 1755972439,
        "bvid": "BV1g4421D7qn",
        "cid": 1597039275,
        "goto": "av",
        "uri": "https://www.bilibili.com/video/BV1g4421D7qn",
        "pic": "http://i2.hdslb.com/bfs/archive/35ee2ffaab4206d17893a3f48cdf512b4f028fdc.jpg",
        "pic_4_3": "http://i0.hdslb.com/bfs/aistory/2024-06-26-21354756381755972439_16_12_5326_crop.jpg",
        "title": "《我爱发明》里那些抽象发明 歹徒兴奋床！",
        "duration": 659,
        "pubdate": 1719408945,
        "owner": {
          "mid": 348989367,
          "name": "沫子瞪片",
          "face": "https://i0.hdslb.com/bfs/face/a2131d38a2ea73f16ff25e61dbeb40377233f552.jpg"
        },
        "stat": {
          "view": 1540767,
          "like": 65409,
          "danmaku": 5383,
          "vt": 0
        },
        "av_feature": null,
        "is_followed": 0,
        "rcmd_reason": {
          "reason_type": 0
        },
        "show_info": 1,
        "track_id": "web_pegasus_4.router-web-pegasus-1554782-5c89895477-smhn8.1721098961744.133",
        "pos": 0,
        "room_info": null,
        "ogv_info": null,
        "business_info": null,
        "is_stock": 0,
        "enable_vt": 0,
        "vt_display": "",
        "dislike_switch": 1,
        "dislike_switch_pc": 0
      },
      {
        "id": 1055953358,
        "bvid": "BV1jH4y1w7A6",
        "cid": 1598484848,
        "goto": "av",
        "uri": "https://www.bilibili.com/video/BV1jH4y1w7A6",
        "pic": "http://i1.hdslb.com/bfs/archive/accdb655b4f2bef665e6fdedb4de28de2feda078.jpg",
        "pic_4_3": "http://i0.hdslb.com/bfs/aistory/2024-06-28-12560692491055953358_16_12_2438_crop.jpg",
        "title": "为什么一个数的5次方个位数是自己！",
        "duration": 327,
        "pubdate": 1719550565,
        "owner": {
          "mid": 483522694,
          "name": "火星课堂",
          "face": "https://i1.hdslb.com/bfs/face/fe751f0d7062c8e8adcef501390d48330fac0514.jpg"
        },
        "stat": {
          "view": 244673,
          "like": 5406,
          "danmaku": 210,
          "vt": 0
        },
        "av_feature": null,
        "is_followed": 0,
        "rcmd_reason": {
          "reason_type": 0
        },
        "show_info": 1,
        "track_id": "web_pegasus_4.router-web-pegasus-1554782-5c89895477-smhn8.1721098961744.133",
        "pos": 0,
        "room_info": null,
        "ogv_info": null,
        "business_info": {
          "id": 0,
          "contract_id": "",
          "res_id": 1055953358,
          "asg_id": 0,
          "pos_num": 0,
          "name": "",
          "pic": "",
          "litpic": "",
          "url": "",
          "style": 0,
          "agency": "",
          "label": "",
          "intro": "",
          "creative_type": 0,
          "request_id": "1721098961752q172a25a216a162q1363",
          "src_id": 5637,
          "area": 0,
          "is_ad_loc": true,
          "ad_cb": "",
          "title": "",
          "server_type": 0,
          "cm_mark": 0,
          "stime": 0,
          "mid": "",
          "activity_type": 0,
          "epid": 0,
          "sub_title": "",
          "ad_desc": "",
          "adver_name": "",
          "null_frame": false,
          "pic_main_color": "",
          "card_type": 0,
          "business_mark": null,
          "inline": {
            "inline_use_same": 0,
            "inline_type": 0,
            "inline_url": "",
            "inline_barrage_switch": 0
          },
          "operater": "",
          "jump_target": 0,
          "show_urls": null,
          "click_urls": null
        },
        "is_stock": 1,
        "enable_vt": 0,
        "vt_display": "",
        "dislike_switch": 1,
        "dislike_switch_pc": 0
      },
      {
        "id": 1763571437,
        "bvid": "",
        "cid": 0,
        "goto": "live",
        "uri": "https://live.bilibili.com/1763571437",
        "pic": "http://i0.hdslb.com/bfs/live/new_room_cover/f1787ef2ce4a2a031fb4a6a63b62d15493268d71.jpg",
        "pic_4_3": "",
        "title": "【新V】今天不要再把自己笨哭了",
        "duration": 0,
        "pubdate": 0,
        "owner": {
          "mid": 3546712666802274,
          "name": "伊柒璇儿_鹤熙冠",
          "face": "https://i0.hdslb.com/bfs/face/3e0ff3d7d53b9ac1a2d90ea563e22d3f70ad28cc.jpg"
        },
        "stat": null,
        "av_feature": null,
        "is_followed": 0,
        "rcmd_reason": null,
        "show_info": 0,
        "track_id": "web_pegasus_4.router-web-pegasus-1554782-5c89895477-smhn8.1721098961744.133",
        "pos": 0,
        "room_info": {
          "room_id": 1763571437,
          "uid": 3546712666802274,
          "live_status": 1,
          "show": {
            "short_id": 0,
            "title": "【新V】今天不要再把自己笨哭了",
            "cover": "http://i0.hdslb.com/bfs/live/new_room_cover/f1787ef2ce4a2a031fb4a6a63b62d15493268d71.jpg",
            "keyframe": "http://i0.hdslb.com/bfs/live-key-frame/keyframe07161101001763571437k9l40v.jpg",
            "popularity_count": 8539,
            "tag_list": null,
            "live_start_time": 0,
            "live_id": 0,
            "hidden_online": false
          },
          "area": {
            "area_id": 0,
            "area_name": "虚拟日常",
            "parent_area_id": 9,
            "parent_area_name": "虚拟主播",
            "old_area_id": 0,
            "old_area_name": "",
            "old_area_tag": "",
            "area_pk_status": 0,
            "is_video_room": false
          },
          "watched_show": {
            "switch": true,
            "num": 168,
            "text_small": "168",
            "text_large": "168人看过",
            "icon": "https://i0.hdslb.com/bfs/live/a725a9e61242ef44d764ac911691a7ce07f36c1d.png",
            "icon_location": "",
            "icon_web": "https://i0.hdslb.com/bfs/live/8d9d0f33ef8bf6f308742752d13dd0df731df19c.png"
          }
        },
        "ogv_info": null,
        "business_info": null,
        "is_stock": 0,
        "enable_vt": 0,
        "vt_display": "",
        "dislike_switch": 1,
        "dislike_switch_pc": 0
      },
      {
        "id": 1855792572,
        "bvid": "BV16s421T7CU",
        "cid": 1587596195,
        "goto": "av",
        "uri": "https://www.bilibili.com/video/BV16s421T7CU",
        "pic": "http://i2.hdslb.com/bfs/archive/1b9d9799260a075b094212bf79e3d7ccb9e04087.jpg",
        "pic_4_3": "http://i0.hdslb.com/bfs/aistory/2024-06-19-14044883851855792572_16_12_7260_crop.jpg",
        "title": "压缩蚊件.zip",
        "duration": 66,
        "pubdate": 1718777086,
        "owner": {
          "mid": 173947574,
          "name": "好奇五先生",
          "face": "https://i2.hdslb.com/bfs/face/1c69fff12a2d0d50e71931cef0486ab919a818a2.jpg"
        },
        "stat": {
          "view": 951633,
          "like": 22930,
          "danmaku": 932,
          "vt": 0
        },
        "av_feature": null,
        "is_followed": 0,
        "rcmd_reason": {
          "reason_type": 0
        },
        "show_info": 1,
        "track_id": "web_pegasus_4.router-web-pegasus-1554782-5c89895477-smhn8.1721098961744.133",
        "pos": 0,
        "room_info": null,
        "ogv_info": null,
        "business_info": null,
        "is_stock": 0,
        "enable_vt": 0,
        "vt_display": "",
        "dislike_switch": 1,
        "dislike_switch_pc": 0
      },
      {
        "id": 1405866842,
        "bvid": "BV11r421F7E8",
        "cid": 1589772517,
        "goto": "av",
        "uri": "https://www.bilibili.com/video/BV11r421F7E8",
        "pic": "http://i2.hdslb.com/bfs/archive/50b1bb8d227d17a3b6195e80128ab295d152d3be.jpg",
        "pic_4_3": "http://i0.hdslb.com/bfs/aistory/2024-06-20-2148551405866842_1612_gener.jpg",
        "title": "【音游推荐】暑期音游推荐，不同基础都可入坑",
        "duration": 311,
        "pubdate": 1718891332,
        "owner": {
          "mid": 592146708,
          "name": "Qc天水",
          "face": "https://i0.hdslb.com/bfs/face/2998a9e762aa07559b2acf54234f07979c959ffe.jpg"
        },
        "stat": {
          "view": 278997,
          "like": 6698,
          "danmaku": 303,
          "vt": 0
        },
        "av_feature": null,
        "is_followed": 0,
        "rcmd_reason": {
          "reason_type": 0
        },
        "show_info": 1,
        "track_id": "web_pegasus_4.router-web-pegasus-1554782-5c89895477-smhn8.1721098961744.133",
        "pos": 0,
        "room_info": null,
        "ogv_info": null,
        "business_info": null,
        "is_stock": 0,
        "enable_vt": 0,
        "vt_display": "",
        "dislike_switch": 1,
        "dislike_switch_pc": 0
      },
      {
        "id": 1055540151,
        "bvid": "BV1in4y197U4",
        "cid": 1582190043,
        "goto": "av",
        "uri": "https://www.bilibili.com/video/BV1in4y197U4",
        "pic": "http://i2.hdslb.com/bfs/archive/9a366971fadd6e4dfd1813c42b180c8779038627.jpg",
        "pic_4_3": "http://i0.hdslb.com/bfs/aistory/2024-06-15-18004087071055540151_16_12_7856_crop.jpg",
        "title": "我把裁判罚下场了",
        "duration": 217,
        "pubdate": 1718445600,
        "owner": {
          "mid": 475304452,
          "name": "生姜蛋包饭",
          "face": "https://i1.hdslb.com/bfs/face/40feee36c71f7f53931854fc54c88d530360b1a7.jpg"
        },
        "stat": {
          "view": 678085,
          "like": 62171,
          "danmaku": 832,
          "vt": 0
        },
        "av_feature": null,
        "is_followed": 0,
        "rcmd_reason": {
          "content": "6万点赞",
          "reason_type": 3
        },
        "show_info": 1,
        "track_id": "web_pegasus_4.router-web-pegasus-1554782-5c89895477-smhn8.1721098961744.133",
        "pos": 0,
        "room_info": null,
        "ogv_info": null,
        "business_info": null,
        "is_stock": 0,
        "enable_vt": 0,
        "vt_display": "",
        "dislike_switch": 1,
        "dislike_switch_pc": 0
      },
      {
        "id": 1505823466,
        "bvid": "BV1vS421d7No",
        "cid": 1596567774,
        "goto": "av",
        "uri": "https://www.bilibili.com/video/BV1vS421d7No",
        "pic": "http://i2.hdslb.com/bfs/archive/b2b19b067cdbf7dd93be5fc01009e72c20572184.jpg",
        "pic_4_3": "http://i0.hdslb.com/bfs/aistory/2024-06-26-1241021505823466_1612_gener.jpg",
        "title": "AI 视频：两小儿辩日",
        "duration": 138,
        "pubdate": 1719376858,
        "owner": {
          "mid": 589397373,
          "name": "宝玉xp",
          "face": "https://i0.hdslb.com/bfs/face/c2c29f6e1bb9b0860241f0df4d2cdea8242ab5d2.jpg"
        },
        "stat": {
          "view": 1216188,
          "like": 54839,
          "danmaku": 194,
          "vt": 0
        },
        "av_feature": null,
        "is_followed": 0,
        "rcmd_reason": {
          "reason_type": 0
        },
        "show_info": 1,
        "track_id": "web_pegasus_4.router-web-pegasus-1554782-5c89895477-smhn8.1721098961744.133",
        "pos": 0,
        "room_info": null,
        "ogv_info": null,
        "business_info": null,
        "is_stock": 0,
        "enable_vt": 0,
        "vt_display": "",
        "dislike_switch": 1,
        "dislike_switch_pc": 0
      },
      {
        "id": 1055744039,
        "bvid": "BV1Zn4y1Q7zj",
        "cid": 1575814128,
        "goto": "av",
        "uri": "https://www.bilibili.com/video/BV1Zn4y1Q7zj",
        "pic": "http://i0.hdslb.com/bfs/archive/5288cf0830e49de414084c4168b11033b08f8507.jpg",
        "pic_4_3": "http://i0.hdslb.com/bfs/aistory/2024-06-09-17404720501055744039_16_12_294_crop.jpg",
        "title": "【诺子】重新“看见”世界是一种什么样的感觉？",
        "duration": 579,
        "pubdate": 1717926045,
        "owner": {
          "mid": 10276136,
          "name": "诺子喵呜",
          "face": "https://i2.hdslb.com/bfs/face/7e6846ed5619b945c888b8f8db5000469f6353ff.jpg"
        },
        "stat": {
          "view": 1016467,
          "like": 97886,
          "danmaku": 979,
          "vt": 0
        },
        "av_feature": null,
        "is_followed": 0,
        "rcmd_reason": {
          "reason_type": 0
        },
        "show_info": 1,
        "track_id": "web_pegasus_4.router-web-pegasus-1554782-5c89895477-smhn8.1721098961744.133",
        "pos": 0,
        "room_info": null,
        "ogv_info": null,
        "business_info": null,
        "is_stock": 0,
        "enable_vt": 0,
        "vt_display": "",
        "dislike_switch": 1,
        "dislike_switch_pc": 0
      },
      {
        "id": 1706215690,
        "bvid": "BV1tT421k7By",
        "cid": 1611364587,
        "goto": "av",
        "uri": "https://www.bilibili.com/video/BV1tT421k7By",
        "pic": "http://i1.hdslb.com/bfs/archive/cd3308109e8726fe4147dd25ed7ca0dbeeda1dc1.jpg",
        "pic_4_3": "http://i0.hdslb.com/bfs/aistory/2024-07-11-00194836761706215690_16_12_3934_crop.jpg",
        "title": "谷歌翻译20遍《河中石兽》泌尿系统",
        "duration": 145,
        "pubdate": 1720628387,
        "owner": {
          "mid": 1030835113,
          "name": "象哥嘎",
          "face": "https://i1.hdslb.com/bfs/face/aa0ae89fa72dab7b8bc082433769b1768f51c3dc.jpg"
        },
        "stat": {
          "view": 78600,
          "like": 3437,
          "danmaku": 328,
          "vt": 0
        },
        "av_feature": null,
        "is_followed": 0,
        "rcmd_reason": {
          "reason_type": 0
        },
        "show_info": 1,
        "track_id": "web_pegasus_4.router-web-pegasus-1554782-5c89895477-smhn8.1721098961744.133",
        "pos": 0,
        "room_info": null,
        "ogv_info": null,
        "business_info": null,
        "is_stock": 0,
        "enable_vt": 0,
        "vt_display": "",
        "dislike_switch": 1,
        "dislike_switch_pc": 0
      }
    ],
    "side_bar_column": [
      {
        "id": 25502,
        "goto": "comic",
        "track_id": "",
        "pos": 1,
        "card_type": "漫画",
        "card_type_en": "comic",
        "cover": "http://i0.hdslb.com/bfs/manga-static/5e410bf6f73ff87f87b543e4b918de5f024652e8.jpg",
        "url": "https://manga.bilibili.com/detail/mc25502",
        "title": "头文字D",
        "sub_title": "",
        "duration": 0,
        "stats": null,
        "room_info": null,
        "styles": [
          "游戏竞技"
        ],
        "comic": {
          "comic_id": 25502,
          "title": "头文字D",
          "horizontal_cover": "http://i0.hdslb.com/bfs/manga-static/5e410bf6f73ff87f87b543e4b918de5f024652e8.jpg",
          "square_cover": "http://i0.hdslb.com/bfs/manga-static/da660f6274730af82d557f21a6247d4f6b1e300b.jpg",
          "vertical_cover": "http://i0.hdslb.com/bfs/manga-static/64df8b860d2bf6bf2edd0426b4aefbff25b51386.jpg",
          "is_finish": 1,
          "status": 0,
          "last_ord": 724,
          "total": 724,
          "release_time": "",
          "last_short_title": "番外05",
          "discount_type": 0,
          "recommendation": "秋名山下坡最快的AE86神话！",
          "last_read_ep_id": 0,
          "latest_ep_short_title": "",
          "style": [
            "游戏竞技"
          ],
          "author_name": [
            "重野秀一 ",
            "讲谈社"
          ],
          "allow_wait_free": false,
          "type": 0,
          "rank": null,
          "operate_cover": "",
          "rookie_type": 0
        },
        "producer": null,
        "source": "",
        "av_feature": null,
        "is_rec": 0,
        "is_finish": 0,
        "is_started": 0,
        "is_play": 0,
        "enable_vt": 0,
        "vt_display": ""
      },
      {
        "id": 47800,
        "goto": "ogv",
        "track_id": "",
        "pos": 2,
        "card_type": "番剧",
        "card_type_en": "bangumi",
        "cover": "https://i0.hdslb.com/bfs/bangumi/image/1c61f75b571fffb8c5a2bd0396b49ce3529776f4.png",
        "url": "https://www.bilibili.com/bangumi/play/ss47800",
        "title": "铁甲小宝 重制版 中文配音",
        "sub_title": "童年经典回归！",
        "duration": 1382000,
        "stats": {
          "follow": 116644,
          "view": 10864687,
          "danmaku": 42428,
          "reply": 11448,
          "coin": 18904,
          "series_follow": 209046,
          "series_view": 17474247,
          "likes": 61376,
          "favorite": 116644
        },
        "room_info": null,
        "new_ep": {
          "id": 824212,
          "index_show": "更新至第30话",
          "cover": "http://i0.hdslb.com/bfs/archive/e185c054588945a1de6648ff7fb5001852df39f4.png",
          "title": "30",
          "long_title": "巨大机器来袭！！",
          "pub_time": "2024-07-15 18:00:01",
          "duration": 1382000,
          "day_of_week": 1
        },
        "styles": [
          "日常",
          "热血",
          "搞笑",
          "原创",
          "特摄"
        ],
        "comic": null,
        "producer": [
          {
            "mid": 928123,
            "name": "哔哩哔哩番剧",
            "type": 3,
            "is_contribute": 1
          }
        ],
        "source": "",
        "av_feature": null,
        "is_rec": 0,
        "is_finish": 0,
        "is_started": 1,
        "is_play": 1,
        "horizontal_cover_16_9": "https://i0.hdslb.com/bfs/bangumi/image/ec5065dc0e88417abd4792d5caa96dacc99d1d51.png",
        "horizontal_cover_16_10": "https://i0.hdslb.com/bfs/bangumi/image/5cc132e336cc72e6521bba928d8a0e50bd5a6d34.png",
        "enable_vt": 0,
        "vt_display": ""
      },
      {
        "id": 48020,
        "goto": "ogv",
        "track_id": "",
        "pos": 3,
        "card_type": "国创",
        "card_type_en": "guochuang",
        "cover": "https://i0.hdslb.com/bfs/bangumi/image/fcb176fcbf5a66fd122fa99f9fdf2cabf22468bb.png",
        "url": "https://www.bilibili.com/bangumi/play/ss48020",
        "title": "不白吃古诗词漫游记 第二季",
        "sub_title": "古诗词这动人的浪漫",
        "duration": 179000,
        "stats": {
          "follow": 2173495,
          "view": 325366,
          "danmaku": 110,
          "reply": 208,
          "coin": 443,
          "series_follow": 2208624,
          "series_view": 3322752487,
          "likes": 8794,
          "favorite": 2173495
        },
        "room_info": null,
        "new_ep": {
          "id": 830238,
          "index_show": "更新至第7话",
          "cover": "http://i0.hdslb.com/bfs/archive/6db74bc8ab2670181562314a24abe525cebb7c76.jpg",
          "title": "7",
          "long_title": "王维当个官怎么还郁闷了？",
          "pub_time": "2024-07-15 19:00:00",
          "duration": 179000,
          "day_of_week": 1
        },
        "styles": [
          "少儿",
          "历史",
          "原创",
          "古风"
        ],
        "comic": null,
        "producer": [],
        "source": "",
        "av_feature": null,
        "is_rec": 0,
        "is_finish": 0,
        "is_started": 1,
        "is_play": 1,
        "horizontal_cover_16_9": "https://i0.hdslb.com/bfs/bangumi/image/f19013ddd7f87b0e03df10feccc4a61a3a43774a.png",
        "horizontal_cover_16_10": "https://i0.hdslb.com/bfs/bangumi/image/966553b199829aae7e47882edbe053463ee85276.png",
        "enable_vt": 0,
        "vt_display": ""
      }
    ],
    "business_card": null,
    "floor_info": null,
    "user_feature": null,
    "preload_expose_pct": 0.5,
    "preload_floor_expose_pct": 0.5,
    "mid": 645769214
  }
}
```

</details>

## 根据点击视频获取的短视频播放列表

> https://app.bilibili.com/x/v2/feed/index/story

*请求方式：GET*

在APP端点击主页视频后发出的请求

**url参数：**  

| 参数名        | 类型  | 内容                    | 必要性          | 备注                                      |
|---------------|------|-------------------------|----------------|------------------------------------------|
| aid           | num  | 点击视频的aid            | 非必要         | 所点击视频的aid，会影响到后续视频内容       |
| display_id    | num  | 视频列表页数             | 非必要          | 从1开始，第1页会得到比其他页多aid处所填视频 |
| access_key    | str  | APP登录Token            | APP方式必要     |               |
| ad_extra      | str  | 额外广告？               | 非必要         |               |
| appkey        | str  | APP密钥                 | APP方式必要     |               |
| auto_play     | num  | 自动播放                | 非必要          | 可为0         |
| build         | num  | 版本                    | APP方式必要     | 可为`8130300` |
| bvid          | str  | 视频的bv号              | 非必要          | 可为空，如果没有会导致返回不正常 |
| c_locale      | str  | 语言                    | 非必要          | zh_CN         |
| channel       | num  | 频道                    | 非必要          |               |
| cid           | num  | 目标频道id              | 非必要          |               |
| contain       | bool | 未知                    | 非必要          | 可为false      |
| creative_id   | num  | 未知                    | 非必要          | 默认为 `0`     |
| device_name   | str  | 设备名称                | 非必要          | 随意字符串都行  |
| disable_rcmd  | num  | 未知                    | 非必要          | 默认为 `1`     |
| epid          | num  | 未知                    | 非必要          | 默认为 `0`     |
| feed_status   | num  | 未知                    | 非必要          | 默认为 `0`     |
| fnval         | num  | 视频流类型               | 非必要          |               |
| fnver         | num  | 请求时提供的fnver        | 非必要          | 可为 0         |
| force_host    | num  | 源url类型               | 非必要           |  0:无限制 1:使用http 2:使用https    |
| fourk         | num  | 是否允许 4K 视频         | 非必要          | 画质最高 1080P：0（默认）<br />画质最高 4K：1    |
| from          | num  | 未知                    | 非必要           | 可为 `7`         |
| from_spmid    | str  | 未知                    | 非必要           | tm.recommend.0.0 |
| goto          | str  | 未知                    | 非必要           |              |
| mobi_app      | str  | 平台标识                | 非必要           | 可为 `web`、`android` 等 |
| network       | str  | 网络                    | 非必要          | 可为 `wifi`    |
| ogv_style     | num  | 未知                    | 非必要          | 默认为 `0`     |
| platform      | str  | 平台                    | 非必要          | 可为`web`或`android`     |
| player_net    | num  | 未知                    | 非必要          | 默认为 `1`     |
| pull          | num  | 未知                    | 非必要          | 默认为 `1`     |
| pn            | num  | 似乎不是页码             | 非必要          | 默认为 `32`    |
| request_from  | num  | 未知                    | 非必要          | 默认为 `0`     |
| s_locale      | str  | 语言                    | 非必要          | zh_CN          |
| spmid         | str  | 未知                    | 非必要           | main.ugc-video-detail-vertical.0.0 |
| statistics    | str  | 位置                    | 非必要           | 可为{"appId":1,"platform":3,"version":"8.13.0","abtest":""} |
| story_param   | str  | 未知                    | 非必要           |              |
| trackid       | str  | 路径id？未知             | 非必要          |               |
| ts            | num  | 秒级时间戳               | 非必要          |               |
| video_mode    | num  | 视频模式？未知            | 非必要          | 可为 `2`，应该是可以逆向出来的    |
| voice_balance | num  | 未知                     | 非必要          | 默认为 `1`    |
| sign          | str  | APP签名                  | APP方式必要     |               |

**json回复：**

| 字段    | 类型  | 内容     | 备注                          |
| ------- | ---- | -------- | ---------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误    |
| message | str  | 错误信息 | 默认为 0                      |
| ttl     | num  | 1       |                               |
| data    | obj  | 视频信息 |                               |

`data`对象：

| 字段    | 类型   | 内容     | 备注                          |
| ------- | ----- | -------- | ---------------------------- |
| config  | obj   | 配置     |                               |
| items   | array | 视频信息  |                               |

`items`数组：

| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------ | ---- |
| 0    | obj  | 视频信息1     |      |
| n    | obj  | 视频信息(n+1) |      |
| ……   | obj  | ……           | ……   |

`items`数组元素：

| 字段                | 类型   | 内容                     | 备注                     |
| ------------------- | ----- | ----------------------- | ------------------------ |
| bvid                | str   | 视频bv号                 |                          |
| card_goto           | str   | 卡片跳转                 |                          |
| copyright           | num   | 版权                     |                          |
| cover               | str   | 封面url                  |                          |
| desc                | str   | 视频描述                 |                           |
| dimension           | num   | 包括视频尺寸、旋转角度     |                          |
| dislike_reasons_v2  | obj   | 不喜欢原因v2的各种显示     |                          |
| dislike_reasons_v3  | obj   | 不喜欢原因v3的各种显示     |                          |
| duration            | num   | 视频时长                  |                          |
| ff_cover            | str   | 短视频封面原图            |                          |
| goto                | str   | 应该是跳转去向类型        | 此处为vertical_av         |
| owner               | obj   | 拥有者，也就是up信息      |                           |
| param               | str   | 参数，实际为视频aid       |                           |
| player_args         | obj   | 播放器参数               |                           |
| pubdate             | num   | 发布时间秒级时间戳        |                           |
| report_flow_data    | str   | 报告流数据               | 是个伪装成obj的str         |
| req_user            | ?     | 未知                     | 空的                      |
| rights              | obj   | 未知                     |                           |
| share_bottom_button | obj   | 分享下方按钮              |                           |
| share_guide         | obj   | 未知                     |                           |
| short_link          | str   | 视频短链接                |                           |
| show_report         | obj   | 显示举报                  |                           |
| stat                | obj   | 视频信息                  |                           |
| sub_title           | str   | 子标题                    | 但显示的是描述播放量的文字  |
| submission_entrance | obj   | 提交入口                  | icon的uri                 |
| three_point_button  | obj   | 三点按钮要显示的内容       | 里面有两个array            |
| thumb_up_animation  | str   | 未知                      |                           |
| title               | str   | 视频标题                  |                           |
| top_search_bar      | obj   | 搜索栏                    | 内含一个跳转的uri          |
| track_id            | str   | 路由track                 |                          |
| uri                 | str   | uri                       |                          |
| view_content        | str   | 用于显示的文本形式播放量    |                          |
| vip                 | obj   | vip相关的信息              |                          |

`owner`对象：

| 字段                | 类型   | 内容                    | 备注                     |
| ------------------- | ----- | ----------------------- | ------------------------ |
| attention           | num   | 未知                    | 包含一个mid的int字段      |
| avatar              | obj   | 一些显示设置             |                          |
| face                | str   | 头像url                 |                          |
| fans                | num   | 粉丝量                   |                          |
| like_num            | num   | 获赞数                   |                           |
| mid                 | num   | up主的mid                |                          |
| name                | str   | up主的昵称               |                          |
| official_verify     | obj   | 官方认证                 | type=-1为无认证，没有其他字段；type=0为黄闪电同时role=1，type=1为蓝闪电同时role大于1，且type不为-1时有字段title为称号 |
| relation            | num   | 关系？未知               |                          |
| sub_avatar          | obj   | 子形象                   | 包含一个mid的int字段      |
| upower              | obj   | 充电相关                 | 包含一个button_uri字段类型为str，是充电跳转链接 |

`player_args`对象：

| 字段                | 类型   | 内容                    | 备注                     |
| ------------------- | ----- | ----------------------- | ------------------------ |
| aid                 | num   | 视频作者的aid            |                          |
| cid                 | num   | 所属频道的cid            |                          |
| type                | str   | 内容类型                 | 视频一般都是av            |

`player_args`对象：

| 字段                | 类型   | 内容                     | 备注                     |
| ------------------- | ----- | ------------------------ | ------------------------ |
| aid                 | num   | 视频作者的aid             |                          |
| coin                | num   | 视频硬币数                |                          |
| danmaku             | num   | 视频弹幕数                |                          |
| favorite            | num   | 视频收藏数                |                          |
| follow              | num   | 未知                      | 很多都是0                |
| like                | num   | 视频点赞数                |                          |
| reply               | num   | 视频评论与回复总数         |                          |
| share               | num   | 视频分享数                |                          |
| view                | num   | 视频播放                  |                          |

**示例：**

(1)模拟点击aid=113350747029965的视频并获取短视频推荐列表

```python
import json
import requests

mobile_headers = {
    "User-Agent": "xxx",
    "env": "prod",
    "session_id": "xxx",        # 在实际使用中，session_id需要及时更新，否则将导致响应列表有问题
    "APP-KEY": "android64",
    'Buvid': "xxx"
}

story_url = "https://app.bilibili.com/x/v2/feed/index/story"

story_params = {
    "aid": 113350747029965,
    "display_id": 1,
    "appkey": "1d8b6e7d45233436",
    "build": "8130300",
    "bvid": "",
    "mobi_app": "android",
    "statistics": "{\"appId\":1,\"platform\":3,\"version\":\"8.13.0\",\"abtest\":\"\"}"
}

response = requests.get(story_url, params=story_params, headers=mobile_headers)

print(json.dumps(response.json(), indent=4))
```

返回值内容过长，暂不予展示

(2)随机的短视频推荐

> https://app.bilibili.com/x/v2/feed/index/story

浏览器直接输入

返回值内容过长，暂不予展示

## 获取短视频模式视频列表

> https://app.bilibili.com/x/v2/feed/index

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**

有大量不明意义的参数 备注仅供参考

| 参数名           | 类型   | 内容         | 必要性 | 备注                                   |
|---------------|------|------------|-----|--------------------------------------|
| fnval         | num  | 视频流格式标识    | 非必要 | 默认为272                               | 
| fnver         | num  | 视频流版本标识    | 非必要 | 恒为1                                  |
| force_host    | num  | 源url类型     | 非必要 | 0:无限制 1:使用http 2:使用https             |
| fourk         | num  | 是否允许 4K 视频 | 非必要 | 画质最高 1080P：0（默认）<br />画质最高 4K：1      |
| guidance      | num  | 0          | 非必要 |                                      |
| https_url_req | num  | 0          | 非必要 |                                      |
| inline_danmu  | num  | 2          | 非必要 |                                      |
| inline_sound  | num  | 1          | 非必要 |                                      |
| interest_id   | num  | 0          | 非必要 |                                      |
| login_event   | num  | 登录状态       | 非必要 | 0为登录 1为未登录                           |
| mobi_app      | num  | android    | 非必要 | 设备类型                                 |
| network       | num  | wifi       | 非必要 | 网络类型                                 |
| open_event    | num  |            | 非必要 |                                      |
| platform      | num  | android    | 非必要 | 设备类型                                 |
| pull          | boll | false      | 非必要 |                                      |
| qn            | num  | 32         | 非必要 | 似乎是画质                                |
| recsys_mode   | num  | 0          | 非必要 |                                      |
| s_locale      | str  | zh_CN      | 非必要 | 语言                                   |
| video_mode    | num  | 1          | 非必要 |                                      |
| accessKey     | str  |            | 非必要 | 登录成功后返回的accessToken,添加此参数会返回个性化内容和横幅 |
| voice_balance | num  | 音量均衡？      | 非必要 | 默认为1                                 |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注   |
|---------|-----|------|------|
| code    | num | 返回值  | 0：成功 |
| message | str | 错误信息 | 默认为0 |
| ttl     | num | 1    |      |
| data    | obj |      |      |

`data`对象：

| 字段     | 类型    | 内容        | 备注   |
|--------|-------|-----------|------|
| config | obj   | 一些界面相关的内容 | 此处省略 |
| items  | array | 视频列表      |      |

`data`中的`items`数组的对象：

以下为视频类型

| 字段                               | 类型   | 内容               | 备注                             |
|----------------------------------|------|------------------|--------------------------------|
| can_play                         | num  | 1                | 字面意思                           |
| card_goto                        | str  | av               | 横幅时为banner                     |
| card_type                        | str  | 卡片类型             | 视频为small_cover_v2,横幅为banner_v8 |
| cover                            | str  | 封面url            |                                |
| cover_left_1_content_description | str  | 播放量              | 8.9万观看                         |
| cover_left_2_content_description | str  | 弹幕数              | 250弹幕                          |
| cover_left_text_1                | str  | 播放量              | 8.9万                           |
| cover_left_text_2                | str  | 弹幕数              | 250                            |
| cover_right_content_description  | str  | 视频长度             | 1分钟20秒                         |
| cover_right_text                 | str  | 视频长度             | 1:20                           |
| desc_button                      | obj  | up主信息            |                                |
| param                            | str  | 视频aid            |                                |
| player_args                      | obj  | 视频信息             |                                |
| talk_back                        | str  |                  |                                |
| title                            | str  | 标题               |                                |
| uri                              | str  | 跳转链接             |                                |
| goto_icon                        | obj  | 视频卡片左下角图标        | 视频为普通视频时出现                     |
| rcmd_reason_style                | obj  | 左下角的'竖屏'or'2千点赞' | 视频为热门时出现                       |
| banner_item                      | list | 横幅列表             | 登录后使用accessKey出现 包含横幅信息列表      |

`desc_button`对象：

| 字段    | 类型  | 内容   | 备注 |
|-------|-----|------|----|
| event | str |      |    |
| text  | str | up名称 |    |
| type  | num | 1    |    |
| uri   | str | 跳转链接 |    |

`player_args`对象：

| 字段       | 类型  | 内容    | 备注 |
|----------|-----|-------|----|
| aid      | num | 视频aid |    |
| cid      | num | 视频cid |    |
| duration | num | 视频长度  | 秒数 |
| type     | str |       |    |

`goto_icon`对象 :

| 字段             | 类型  | 内容        | 备注 |
|----------------|-----|-----------|----|
| icon_url       | str | 图标链接      |    |
| icon_night_url | str | 应该跟上面那个一样 |    |
| icon_width     | num | 16        | 宽度 |
| icon_height    | num | 16        | 高度 |

`rcmd_reason_style`对象 :

| 字段                 | 类型  | 内容         | 备注      |
|--------------------|-----|------------|---------|
| text               | str | 1万点赞 \| 竖屏 | 文字信息    |
| text_color         | str | #FF6633    | 字体颜色    |
| bg_color           | str | #FFF1ED    | 文本的背景颜色 |
| border_color       | str | #FFF1ED    |         |
| text_color_night   | str | #BF5330    |         |
| bg_color_night     | str | #3D2D29    |         |
| border_color_night | str | #3D2D29    |         |

`banner_item`横幅列表内对象(内容尚未完全解读):

为动态时 (列表索引通常为1)

```json
        {
  "type": "static",
  "resource_id": 4336,
  "id": 1674508,
  "index": 1,
  "static_banner": {
    "id": 1674508,
    "title": "火凤燎原第二季完结！新的战神，来了！",
    "image": "http://i0.hdslb.com/bfs/banner/b1fc0b68f727c2d4ea57bee154f531c3b7f13fca.png",
    "hash": "a6cee3b5b1c05227159f734f68289ba5",
    "uri": "https://www.bilibili.com/bangumi/play/ep1365959?goto=static_banner",
    "request_id": "1745482994326q172a27a87a21q3087",
    "src_id": 4337,
    "is_ad_loc": true,
    "client_ip": "182.89.224.34",
    "server_type": 0,
    "resource_id": 4336,
    "index": 1,
    "cm_mark": 0
  }
}
```

为广告时 index(列表索引通常为2)

```json
{
  "type": "ad",
  "resource_id": 4336,
  "id": 0,
  "index": 2,
  "ad_banner": {
    "id": 0,
    "title": "今日全球首发，千件外观福利免费领",
    "image": "https://i0.hdslb.com/bfs/sycp/creative_img/202504/bbd7cc4e6a74508e9ccee467541cc06a.jpg",
    "hash": "46cbecfe04e047692acfd4a149e81ebd",
    "uri": "https://qrsj.biligame.com/gcxz/h5/?sourceFrom=777&sourceType=adPut",
    "request_id": "1745482994326q172a27a87a21q3087",
    "creative_id": 1017846649959747584,
    "src_id": 4338,
    "is_ad": true,
    "is_ad_loc": true,
    "ad_cb": "CAAQABiAoLC1qsSHkA4gACgAMKm4TDjyIUIfMTc0NTQ4Mjk5NDMyNnExNzJhMjdhODdhMjFxMzA4N0iWpZO35jJSBuafs+W3nloG5bm/6KW/YgbkuK3lm71oAXAAeICAgICAGoABAIgBpYgEkgENMTgyLjg5LjIyNC4zNJoBj0BjcGNfcXVvdGE6Y29uc3RhbnQsZWNvbV9mb3JjZV9yZWNhbGw6YmFzZV8wNjI4XzIwLGJyYW5kX3NwbGFzaF9saXN0X2J5X3RpbWU6YnJhbmRfc3BsYXNoX2xpc3RfYnlfdGltZV80MF90dW5uZWwsdWVzX2VycWk6MTcsamtfY2FydDpqazEsZmVlZHNQcmltYXJ5TW9kZWxDb25mOmJzbDIsY29tbWVudENvbXBvbmVudEFudG91UmF0aW86YmFzZSxTbWFsbEJ1ZGdldFJhdGlvOmRlZmF1bHQsc2VhcmNoX2Fkc19jcmVhdGl2ZTpsbG1fZXhwMSxkYWlodW9fYm9vc3RfZXhwOmJvb3N0X2V4cCxzZWFyY2hfYWRzX3JlbGV2YW5jZTp0b3BfYmxhY2tsaXN0X2NhbGksc3BsYXNoX2lubmVyX291dGVyX2V4cDpiYXNlLGNjZF9leHBfZGVtbzpjY2RfYmFzZSxmcmVxUm91dGluZzpiYXNlLHZpZGVvX3RlbXBsYXRlX3N1cHBvcnQ6ZXhwMyxpYWFfb25seV9lY3BtOjAwLHRlc3RfbW9kZWxfbmFtZTpiYXNlXzExLGZseV9qdW1wX2NvbW1lbnQ6ZXhwMyxsb2dnaW5nX2FkaW5mb19saXN0OmJhc2UsdXNlTmV3WWVsbG93Q2FydFBhbm5lbDpleHAyLGhpZ2hfcXVhbGl0eV9hdmlkX3R1cm5fYmFjazpiYXNlLG5ld19kaXJlY3RfYWRtaXNzaW9uX3YyOm9wZW5fc2hvdXRhb193dWR1YW4sdHJhZGVfcmVjYWxsOmRlZmF1bHQsb3R0X2VjcG1fdGhyZDpiYXNlLGVuYWJsZV9hbHRfZGF2aW5jaTpkZWZhdWx0LGlubmVyX291dGVyX2JpZF9leHA6bmV3X3JhbmtmcmFtZV8wNDAyLG9mZmxpbmVfbWlkX2ZlYV92MjpleHAzLGRjdnJfd29ybGRfMjAyNVEyOmJhc2UxLHVuZGVyZnJhbWVfcHVsbF91cDpleHAxLGVuYWJsZV9pbmR1c3RyeV92Ml9maWx0ZXI6YmFzZSxuRmVkQmFjazE6bG9vc2UsRHBhMlJ0YVBpY2tQcm9kdWN0OnNoYXJlZF8zMCxmaWx0ZXJfY2xlYW46YmFzZSxhY2NvdW50RnJlcUNvbmY6YmFzZSxtaW5pZ2FtZV9iaWRfZXhwOmV4cF8wMzA3LHN0b3J5X2RhaWh1b19zdHlsZTpleHAsbm9fYWdlX2dlbmRlcl9leHA6YWdlMCxvdHRjb25maWc6ZXhwXzE1LE1peGVyRUNvbW1lcmNlOmVuYWJsZSxzc3BEaXJlY3REaXNwYXRjaEFkVm9FeHA6ZXhwXzIscmlza3lfYWRfb3B0OmhpZGRlbl9jb3N0XzAsc0ZCcnU6MyxCaXpNaXhlclJvdXRlcjpiaXpfbWl4ZXJfcGcsMjUzOTkxOmJhc2UsdHNtdjJfdHJhZGU6YmFzZSxmbHlfZGVxOm9yZGVyX2xpdmUsdHNtXzE6ZWR1dGFnX3JlY2FsbF8wMjA2LHJldHJpZXZlX2xvZzpvcGVuLGdkX21vZGVsOmV4cDEsY3BhX3NlYXJjaDpjcGFfdjIsdHNtdjJfc3dpbmdmbHlfb3RoZXJzY2VuZTpiYXNlLGFkeF9yZXF1ZXN0X29wdGltaXphdGlvbl90ZXN0OmRlZmF1bHQsc3RfdnZfbW9kZWw6YmFzZSxicnVzaF9kdXA6ZGVmYXVsdCxzdG9yeV9saXZlX3Z2OmRlZixpbmxpbmVfemVyb19jYXJkX2luZGV4OmV4cCxyZXFfbG9nX3JhdGlvOmJhc2UsZHBhVW5kZXJmcmFtZU5ld1N0eWxlOmV4cDIsZHluYW1pY1RpbWVvdXRNaW5zOjI0MCxtb2RlbF9jYWxpOmV4cDEsZmx5X2NwY19jYWxpX25ldzpvcmRlcl9hY2NfZXhwLGVuYWJsZVNtYXJ0Q292ZXJVcmw6YmFzZV9hYV8wMTE1LG1pbmlfZ2FtZV9sb25nX3RpbWVfZmxpcF9leHA6ZXhwX2dyb3VwLHV2X2FhOmRlZmF1bHQsYWNjb3VudF9ibGFjazpiYXNlLGFzQ29tbWVudENoZWNrRGlmZlJhdGlvRXhwOmV4cDIsY3RyX21vZGVsOmV4cF8wMSxic0R1cEFkOm9wZW4sb3JkZXJfbGF4aW46bGF4aW5fYmFzZV92Ml8xLHByb2dDcmVhRmVlZEN0cjpkaXN0X2x0cix1bmlvbl9mbHlfY3BjOmV4cDAxMjQsQ3VzdG9tQ3JlYXRpdmVTZWxlY3RFeHA6a3Vhbmd4aWFfMDQwMixuZXdCc0ZpbHRlckxvZzpvcGVuLHNlYXJjaF9xdWlja19wbGFjZW1lbnQ6ZXhwMSxib29zdF9leHA6ZXhwMyx0c212Ml9tb2RlbF9yZWNhbGw6YmFzZSxjY2RfdWVzY29yZTpjY2RfYmFzZSxkQWR4MTpvcGVuLGRhbGFvX2NhcmRfb25seV90b3A6ZXhwLGNhc3NpbmlFeHA6c21hbGxfYnVkZ2V0X2Nsb3NlLHNwbGFzaF90d2lzdF9hbmdsZV9leHA6YmFzZSx0c212Ml9vdGhlcnM6YmFzZSxzcGxhc2hNaW5JbnRlcnZhbEV4cDpiYXNlXzFoLGR5bmFtaWNfaW5kZXg6YmFzZSxyZWNhbGxfbGltaXRfcmF0aW86YmFzZSxmbHlfY3BhOmZseV92MyxnYW9uZW5nX2FidGVzdDpiYXNlLHBFTjpQUixzZWFyY2hfY3RyX21vZGVsOmV4cF95LGxpdmVfY2FyZF90YWdfbW92ZTpleHAxXzAzMTgsYmVzdENyZWF0aXZlOmVjcG0yLHN0b3J5X3N0eWxlX3NlbGVjdF9jb25mOmJhc2UyMDI1MDIyNyxjbG9zZV9zcmNfZWZmOmV4cF8wNzI1X25vX3J1bGUsMTA3MjpiYXNlLHNvZnRfYWRfZXhwOjA2LGZseV9saWtlX3RoOmNsb3NlLG1peGVyX3N0b3J5X2FkX3dlaWdodDo2LGFpZ2NfYW50b3U6TFJfYmFzZV8yMDI1MDMxNCxqZzpleHAyLHBkY3ZyX3RocmVzaG9sZDpleHAxLGRjdnJfcmV0ZW50aW9uX25ldzpjb21ib19iYXNlLHBlZ2FzdXNfbWl4ZXI6MDEsZHBhMjpiYXNlLHVuZGVyX2ZyYW1lX2VjcG1fZXhwOmJhc2UsSW5kdXN0cnlFeGNsdWRlSW5mb0NvbmZfdjI6YmFzZSxlbmFibGVfdXNlcl9mZWF0dXJlX2J1Y2tldDpiYXNlbGluZSxlY29tX3JlY2FsbDpMSFVDX0IsZW5hYmxlVGFnTW92ZVVwOmV4cDRfbW92ZV90YWdfZGlzbGlrZWFkaixhZF9icmFuZF9nZF9lbmFibGVfZGlmZjpiYXNlLGZkX3BjdHI6YmFzZV8xLDI1NzM4OmJhc2UscHJvZ0NyZWFEaWN0VmVyOmRlZmF1bHQsc2VhcmNoX3BhcmFsbGVsX3JlcV9yZWRpczpleHAxLHByb2dyYW1DcmVhdGl2ZTpkZWZhdWx0LGRwczpkZWZhdWx0LHBhZF9pbm5lcl9hZGxvYWQ6YmFzZV8yMF8wLHVuZGVyZnJhbWVfcHVsbF91cF9uZXc6YmFzZV9hYWEsY29hcnNlRXhwbG9yZUZhY3RvckNvbmY6ZGVmYXVsdCxmbHlfc3RvcnlfeWVsbG93Y2FyX3N0eWxlOnlvdXh1YW5fYmFzZV9rZmMsZmx5X2NwYV9wYzpleHAxMCxEcGFTdnJQcmVzc3VyZTpiYXNlLGNwYTpiYXNlLGJvb3N0X2JzOmJhc2UsZmx5Q2FyZFF1YWxpdHk6ZXhwNCxhbGw6Y3BjX2Nyb3dkX3RhcmdldCxmbHlfY3BhX2JvdHRvbTpjbG9zZSxSVEFfRElWSURFX0VYUF9UQUdfODkyOnJ0YV9kaXZpZGVfZXhwXzg5Ml81LEluZHVzdHJ5THRyQ29hcnNlQ29uZjpnYW1lbGl2ZSxlZGdlX3JlcmFuazpiYXNlLFJUQV9ESVZJREVfRVhQX1RBR182NTc6cnRhX2RpdmlkZV9leHBfNjU3XzQsaGVhcnRfYm94OmV4cCwyMzUzMTpub3JtYWwscHVwX25hdGl2ZV9hZDpkZWZhdWx0LG90dF9lZHVjYXRpb25fYW50b3U6ZXhwLGg1X3Y6Y29tcGFyZSx1c2VMdWFTY3JpcHQ6YmFzZSxjb2Fyc2VfZGFpaHVvOmJhc2UsZmxvd1J1bGU6b3BlbkZsb3dSdWxlQ2hlY2tTd2l0Y2gsc3Rvcnlfc3R5bGVfc2VsZWN0aW9uX2NvbmY6YmFzZTIwMjQxMTI5LG5ld192aWRlb191cF9taWRfZmlsdGVyOmJhc2UsZmx5X2NvYXJzZTpjb25zdGFudCxkZWxldGVGcmVxQ29kZTpiYXNlMyxob25nZ3VvX25vdF9zaG93X2luX2NoYXJnaW5nX3BhZ2U6YmFzZSxEcGFDcmVhdGl2ZVN0cmF0ZWd5RXhwZXJpbWVudDpzZWFyY2hfbWVyZ2VfaW1hZ2VfZXhwLHNzcF9yZXBsYXlfYXM6YmFzZSxiZnNfc2RwYV9kaXZlcnNpZnk6cmVtYWluLHNlYXJjaF9zdWJjYXJkX3N0eWxlOmZvcm1fYnV0dG9uLGJzLXg6YnMsd2hpdGVfYm94OmNsb3NlLGR1YW5qdV9hcnB1OmFkZF9ub3ZlbF8wMzI3LE1vZGVsRmVhdHVyZXNIaXZlTG9nOmNsb3NlLGZseV9zdXBfZmFjdG9yczpleHAsY2x0cmNvbmY6YnNsMyxkYXZpbmNpX3JlcV9sb2c6ZGVmYXVsdCxmbHdfbGlrZV9lbmdhZ2U6YmFzZSxzdG9yeV9jdXN0b21pemVfZGFubXU6YmFzZSxhZHhQbGF5UGFnZVJhc2lvOmV4cDAsZHBhMlByb21vdGVQcm9kdWN0TWF0ZXJpYWw6YmFzZSxsaXZlX21vZGVsOmxpdmVfYmFzZV8wNDA4LHVzZUFpR2NUaXRsZTpiYXNlLHBlZ2FzdXNfYWRsb2FkXzM6MTQsbGFuY2VyX25hdHVyZTpleHAsc3RvcnlfZGFubXVfY29uZjpkYW5tdV9udW1fMzgsdHNtdjJfdG9rZW5fc2RwYTpiYXNlLDI0aF9yb2lfYXJwdV9uZXc6c3RhbGxfYmFzZV92MyxzcGxhc2hfaGFyZF9maWx0ZXJzOmV4cCxnYW1lX2VjcG1fcm9pX2ZhY3Rvcl9zd2l0Y2g6ZXhwX291dGVyLGJ1cGNwY19nc3A6ZGVmYXVsdCxuRmVkQmFjazpsb29zZSxVbml0RGV0YWlsSW5mbzpjbG9zZSzogIHkuInov57lub/lkYrlsY/olL06YmFzZSxnZF9mb3JjZV9zZWxlY3Q6ZXhwMixjb2xkX2Jvb3RfY2xlYXJfZnJlcTpiYXNlLGdhbWVfb3Blbl9pbnRlcmVzdF9vcmllbnRhdGlvbjpleHBfb3Blbl9ib3RoLGNsb3NlX3BlcnNvbmFsX3JlY29tbWVuZF8yMDI1OmV4cF9vcGVuX2FsbF8wMjI4LFJUQV9ESVZJREVfRVhQX1RBR183MzE6cnRhX2RpdmlkZV9leHBfNzMxXzMsbm9fYWRfc2V0OmJhc2UsUlRBX0RJVklERV9FWFBfVEFHXzg1NTpydGFfZGl2aWRlX2V4cF84NTVfNyxhY2NvdW50X2V4cGxvcmVfc2hvd19saW1pdDpkZWZhdWx0LGZseV9nb29kc19jb21tZW50X3VybDpibHVlbGlua19yZXBsYWNlXzA1LG9yZGVyX2xhcmdlOmRlbGF5MSxlY3BtX3RocmVzaG9sZF9sYXllcjowOCxyZWNhbGxfdW5pdF9saW1pdDpiYXNlLFJUQV9ESVZJREVfRVhQX1RBR182NDA6cnRhX2RpdmlkZV9leHBfNjQwXzE2LGRhaWh1b1doaXRlQ29uZjp3aGl0ZV8yNDEyMDJfNSxSVEFfRElWSURFX0VYUF9UQUdfODgzOnJ0YV9kaXZpZGVfZXhwXzg4M181LGVuYWJsZUlubGluZUV4cDpiYXNlLFJUQV9ESVZJREVfRVhQX1RBR184ODg6cnRhX2RpdmlkZV9leHBfODg4XzIsaWFhX3VuaXRfZWE6ZXhwMSxTbWFsbEJ1ZGdldFRvbGVyYXRlOmV4cF83MixhdXRvX2FkX2Fzc2lzdDpiYXNlLG1peGVyX2JyYW5kX29wdDpiYXNlLGxheWVyZWRfYmlkZGluZzpiYXNlMDkyMixzdG9yeVllbGxvd0NhcnROZXc6ZXhwX2Jhc2UyXzAyMTMseHN0X2NodWRpYW46YmFzZSxkdWFuanVfbW9kZWw6ZGVmYXVsdCxnZF9waWQ6ZXhwX3JlYWQsY3BjMV9leHRlbmRlZDpxdW90YV8xMCxicnVzaF9pbm5lcjpiYXNlLHN0b3J5X3N0eWxlX3NlbGVjdDpyYW5kLGVuYWJsZV9wbGF5cGFnZV9pbmxpbmVfd3hfanVtcDpleHBfMDQwOSxkY3ZyZl8yMDI1UTE6cmV2ZXJzZSxmcmVTOmJhc2UsYWR2dl9waWRfZml4OmJhc2UsQ3JlYXRpdmVRdWFsaXR5OmF1dG8sSW5kdXN0cnlCb29zdDpnYW1lbGl2ZSxmbHlfbTppY2ViZXJnX2Jhc2UsZWNwbV9jcm93ZHNfZmlsdGVyOnRlc3QsZ2Rfc2NoZV9yYXRpbzpiYXNlLHRlc3RfbWl4ZXJfY2NkOmJhc2Usa3Vha2VfbW9iaWxlX2FudG91X3BjOmFudG91X3BjLG5ld192aWRlb19ib29zdDpkZWZhdWx0LHVuZGVyZnJhbWVfdWVzY29yZTpiYXNlLEVBX2V4cDpjbG9zZV9lYV8xMjExLGFuY2hvckFwcERvd25sb2FkU3R5bGVFeHA6YmFzZSwyMzI0NDpiYXNlLFJUQV9ESVZJREVfRVhQX1RBR183MDM6cnRhX2RpdmlkZV9leHBfNzAzXzMsZHVhbmp1X21vZGVsX2N0cjpkZWZhdWx0LGNvbG9yX21hc2s6YmFzZSxwdl9hYTpleHBfMSxwY19jbGllbnRfbm9fYWQ6bm9fYWRfYmFzZSxwcm9nQ3JlYVQ6djEuMCxuZWdhdGl2ZV9zdHJhdGVneV90ZXN0OmJhc2UsZW5hYmxlTmF0aXZlRmVlZHNUb1N0b3J5OmV4cF9oYXJkLGx0dl9pbnNfbG9nOmJhc2UxMCxmbHlfYnVfdW5kZXJmcmFtZTpiYXNlLHNwcmluZ2Zlc3RpdmFsX3N0YWJpbGl0eV9pbmR1c3RyeTpiYXNlLGdpZl9leHA6YmFzZSxjYXNlX2ludmVyc3RpZ2F0ZTpiYXNlLHByZXJhbmtfc2RwYTp4c2RqXzAxMTcscmVzZXJ2ZV9wcmljZTpnc3BfYWxsLHBheV83ZF9udW06ZXhwX2dhbWVfMSx0aW1lRnJlcTpkZWZhdWx0LGZyZXFDaGVja0R1cGxpY2F0ZTpiYXNlLFJUQV9ESVZJREVfRVhQX1RBR183MjQ6cnRhX2RpdmlkZV9leHBfNzI0XzMsc3RvcnlGbHlNb2RlbENvbmY6YWRkX2VhX2V4cCxBcHBDb2V4aXN0RmlsdGVyOmNsb3NlLHVzdWFsX2FyZWFzOmJhc2UsYXBwU3RvcmVQcmlvcml0eVhpYW9ndW9BY2NvdW50SWRzOmJhc2UsbWFiaWRfZW5hYmxlOmJhc2VfMDEwOCxSVEFfRElWSURFX0VYUF9UQUdfODM2OnJ0YV9kaXZpZGVfZXhwXzgzNl8xMCxzb2Z0X2FkOjEyLHN0b3J5X3BsYXkzc190b3VjaF9yYXRpbzpyYXRpb18xMDAsZHVhbmp1X3JldGFyZ2V0OmJhc2UsUlRBX0RJVklERV9FWFBfVEFHXzEwMzc6cnRhX2RpdmlkZV9leHBfMTAzN181LGNhdGVnb3J5X3YzOmJhc2UsaWFhM19vdXRfdXBfYWRzOmV4cF9pYWFfb3V0X3VwLHByb2dDcmVhUmFuZG9tXzE6YmFzZV9tb2RlbDAzMTksZmx5X3lzYW50b3U6YmFzZV8wODIxLGZseV9jdHJfaW5saW5lX3RhcmdldDpjbG9zZSx0ZW1wbGF0ZV9maXg6YmFzZSxicmFuZER5bmFtaWNDYXJkSW5kZXhFeHA6ZXhwLGlubGluZUVjcG06ZGVmYXVsdCxmb3JjZUV4cG9zdXJlLWNhc3Npbmk6ZGFpaHVvX29wZW5fMjMxMTAxLHNwbGFzaF9uZXdfc3R5bGVfZmlsdGVyOmRlZmF1bHQsc2VhcmNoX3RyaXRvbjpiYXNlLGN2cl9mOmluZHVzdHJ5X29wdF9leHAsaW5uZXJfb3ZlcmxvYWRfY3RybDpkZWZhdWx0LHVnX3VuaXRfbGltaXQ6ZXhwLGNsZWFuX3Nsb3Q1MHA6ZXhwLG1lcmdlX2ZpbHRlcjplbmFibGVfc3luY19wcmltYXJ5X2ZpbHRlcixoeV9hcnB1X3JvdXRlX3NwbGl0OnN0YWxsX29yX3VuZGVsZXRlZF9mZWFzX2V4cCwxNTA2OmJhc2UsZ2RGZWVkc0VuYWJsZUJydXNoOmJhc2UsaW5saW5lX2Zsb3dfbm9fYWQ6YmFzZSxlbmFibGVfbGFuY2VyX3JlY29yZF9kbXNfZmVhdHVyZTowNDE0X3Rlc3QsdW5kZXJmcmFtZV9tYXJrX3N3dGljaDpleHAxXzA0MDksQWlFeHBQbGF5UGFnZTpiYXNlXzAsMjRoX3JvaV9hcnB1OmJhc2UzLG9wZW5QcmV2aWV3OmV4cDIsZ3NwX2V4cDpzZWFyY2hfZGVmYXVsdCxydW5uaW5nX29jcGM6YmFzZSxmbHlfcmFua19jb25mX21lcmdlOmJhc2UsbHRyQXBwTG9nOmNscyxzZWFyY2hfYWRzX3F1ZXJ5X3Jld3JpdGU6Y29tYmluZV9leHAxLHJhbmtfZGl2XzE6ZGVmYXVsdCx1bmRlcmZyYW1lX2Rvd25sb2FkX2FkYnV0dG9uOmJhc2UsQnNPZmZsaW5lTG9jYWxDcGFDb25maWdOZXc6ZGVmYXVsdCx1cFNwYWNlQ2hlY2tEaWZmUmF0aW9FeHA6ZXhwX21icyxzcGxhc2hfaW50ZXJmYWNlX2Rvd25ncmFkZTpiYXNlLGZvcmJpZGRlbl9kaXJlY3RfanVtcDpiYXNlLG1pbmlnYW1lX2JvbnVzX2V4cDpyZW1haW4sZW5hYmxlQXBwc3RvcmVEaXJlY3Q6ZXhwXzEsZnJlcV9pbmZvX3JvdXRpbmc6c2hqZF9zeWNwYl9mcmVxX3Rhc2tfY2x1c3Rlcl8xLHNlYXJjaF9hZHNfbWluX2JpZDpkZWZhdWx0LG9wZW5OZXdHZFByZXZpZXc6ZXhwLGRpc2FibGVfaWxsZWdhbF9vbmVfanVtcDpiYXNlLGNvYXJzZV9xdW90YV9jb250cm9sOmJhc2VfMDMyNCxmbHlfZHluYW1pY0FudG91OmJhc2UsQWlFeHBTdG9yeTpiYXNlLGRwYTJSZWNhbGw6Y2hvb3NlX3Byb2R1Y3RzX2Jhc2VfNTAsc2VhcmNoX25ld190YXJnZXRpbmc6YmFzZSxlbmFibGVfbW9kZWxfZGV0YWlsX3RyYWNrZXI6YmFzZSxEcGEyQ1ZSVGhyZXNob2xkOmpkX2N2cl8yMDAsY3RyX3RfZXhwOnQxLjAscGNTZWFyY2g6ZXhwLGVjb21fbWFpbl9zZWFyY2g65a+554Wn57uELGNvYXJzZTpjb2Fyc2VfY3ZyX25ld2NvbnYsZnJlcV9taWdyYXRlOmV4cF9lbmdpbmVfd2l0aF9zdHJpY3RfYnJ1c2g1LHN3aXRjaEJzUGdSZXFSYXRpbzpjbG9zZSxzZWFyY2hfcmVhbHRpbWVfdHJpZ2dlcjpjb25zdGFudCxBaUV4cEZlZWRzOmJhc2UsbWJzX3JlZmFjdG9yOmV4cDIsdWVzX3NlYXJjaDpkZWZhdWx0LHVuZGVyZnJhbWVfbXVsdGlfYWRzOmJhc2UsYWlnY19hbnRvdV9pbWFnZTpiYXNlXzAzMjYsbWl4ZXJfZnVzaW9uX2RpbWVuc2lvbjpnMixyb2xsb3V0X2xpc3R3aXNlX2Jpem1peGVyX2J1Z19maXg6YmFzZSx1c2VCc0ZpbmRhOmZpbmRhX3gsZmx5X3B1cF9lY3BtOmNvbnN0YW50LGZseV9jdHJfaW5saW5lOm1vZGVsLHRlc3RfcGVnYXN1c19wb3M6YmFzZSx0ZXN0X3N0b3J5X3BhY2s6ZXhwIDIsc3RvcnlfYWRsb2FkXzM6MTQsc2RwYV9kaXZlcnNpZnk6Y29uc3RhbnQyLG1pbmlfZ2FtZV9zY2VuZTpiYXNlLGN0cl9kaWx1Y19lbWJfbGF5ZXI6ZXhwcl9lbWJfZGlsdWMscm9pX2J4aWFveW91X25ldzpkZWZhdWx0LEluZHVzdHJ5Tm9UYXJnZXRGaWx0ZXJMYXllcjpleHAsY3JlYXRpdmVfYXZpZF90YWIzOmV4cF8wNTI3LHN0eWxlX2FiaWxpdHlfb2ZmbGluZTpiYXNlLHVuZGVyZnJhbWVfYnJhbmRfaGlnaDpiYXNlLGNyb3dkX2VjcGM6b3Blbl92Mix0c21fdjJfbGF5ZXI6YmFzZSxtaXhlcl9saXN0d2lzZV9wZWdhc3VzOmc1LHVzZUFzUGc6bWFpbl8yNDEyMjcsc3BsaXRfYnVja2V0OmJ1Y2tldF8zLGdsb2JhbF9yZXZlcnNlOmJhc2UscGxhdGZvcm06ZGVmYXVsdKABALIBICjf18utGMJMWQj0kF8utyJl8gRyHD1TIq1K6aKZR3vRugFCaHR0cHM6Ly9xcnNqLmJpbGlnYW1lLmNvbS9nY3h6L2g1Lz9zb3VyY2VGcm9tPTc3NyZzb3VyY2VUeXBlPWFkUHV0wgEA0gEA2AHQAeABAOgBAPABAIACAogCALgCAMACANACANgCAOoCAPACrIYl+AIAiAMGkgMAqAMAsAMAuAMAwgMAyAMX0gOWAXsiMTYiOiIxMjE1NDYwXzAiLCIxNyI6IjQzMzYiLCIxIjoiMTAxNzg0NjY0OTk1OTc0NzU4NCIsIjIiOiIxMjUyMzkzIiwiMyI6IjEyNTIzOTMiLCI2IjoiMTI1MjM5M18wIiwiMTIiOiI0MzM4IiwiMTMiOiIxMjE1NDYwIiwiMTQiOiI4ODciLCIxNSI6IjEzNjkifeADAOgDAPADAPoDBW90aGVyggQJbnVsbDpudWxsmAQAoAQAqgQECAAQBLAEAOIEwwE1Ni57InBzSWQiOjUyMTE4LCJ2MiI6IkFXVXMyZTBidEhmWTVCSzJ0LUQ0U3lNRGJtN2Z1SGIyYmlIREhsTnBjQlB1U2dVRzdLaW80dUkyNXlSdFJXQU5WUnRMbll1OVpxOElrdkVYZURfUmlER25BeTE0UV9CMlAtSzJmQ3pzMWZLQmY5WjZPUSJ9OzYzLnsicHNJZCI6NTIwNjYsInYyIjoiUWcifTs3MC57InBzSWQiOjUwMDQxLCJ2MiI6IktBIn2gBQDIBQPSBQA=",
    "client_ip": "182.89.224.34",
    "server_type": 1,
    "resource_id": 4336,
    "index": 2,
    "cm_mark": 1,
    "extra": {
      "use_ad_web_v2": false,
      "show_urls": [
        ""
      ],
      "click_urls": [],
      "download_whitelist": [],
      "card": {
        "card_type": 0,
        "title": "今日全球首发，千件外观福利免费领",
        "covers": [
          {
            "url": "https://i0.hdslb.com/bfs/sycp/creative_img/202504/bbd7cc4e6a74508e9ccee467541cc06a.jpg",
            "loop": 0,
            "image_height": 0,
            "image_width": 0,
            "gif_tag_show": false,
            "jump_url": "",
            "title": "",
            "desc": ""
          }
        ],
        "jump_url": "https://qrsj.biligame.com/gcxz/h5/?sourceFrom=777&sourceType=adPut",
        "desc": "",
        "callup_url": "",
        "long_desc": "",
        "ad_tag": "",
        "extra_desc": "",
        "universal_app": "",
        "duration": "",
        "adver": {
          "adver_id": 1252393,
          "adver_type": 3
        },
        "extreme_team_status": false,
        "support_transition": false,
        "under_player_interaction_style": 0,
        "referral_pop_active_time": 10000,
        "grade_denominator": 0,
        "star_level": 0,
        "live_booking_population_threshold": 0,
        "ori_mark_hidden": 0,
        "use_multi_cover": false,
        "custom_feedback_panels": [],
        "yellow_cart_pannel_pullup": 0,
        "yellow_cart_pannel_version": 0,
        "goods_item_id": 0,
        "story_interaction_style": 0,
        "videos": [],
        "download_area": 0,
        "goods_pannel_show": 0,
        "goods_panel_show": 0,
        "show_pop_window": 0,
        "search_show_adbutton": 0,
        "jump_interaction_style": 0,
        "live_page_type": 0,
        "ad_tag_style": {
          "type": 4,
          "text": "",
          "text_color": "",
          "bg_border_color": "",
          "bg_color": "",
          "border_color": "",
          "img_url": "https://i0.hdslb.com/bfs/sycp/mng/202408/34463051f8d45a6d3c20f8aff31aad9b.png",
          "img_height": 48,
          "img_width": 72
        },
        "feedback_panel": {
          "panel_type_text": "广告",
          "feedback_panel_detail": [],
          "toast": "将减少相似广告推荐",
          "close_rec_tips": "操作成功",
          "open_rec_tips": "将减少展示此类广告"
        },
        "fold_time": 0,
        "live_room_popularity": 0,
        "live_tag_show": false,
        "quality_infos": [],
        "dynamic_text": "今日全球首发，千件外观福利免费领",
        "choose_button_list": [],
        "grade_level": 0,
        "anim_in_enable": 0,
        "underframe_card_style": 0,
        "playpage_card_style": 0,
        "live_auto_play": false,
        "original_style_level": 0,
        "live_card_show": false,
        "enable_tag_move_up": 0,
        "item_source": 0,
        "closed_loop_item": 0,
        "desc_type": 0,
        "comment_use_game_page": 0,
        "story_takeoff_interaction_style": 0
      },
      "report_time": 2000,
      "sales_type": 31,
      "special_industry": false,
      "preload_landingpage": 0,
      "enable_share": true,
      "share_info": {
        "title": "今日全球首发，千件外观福利免费领",
        "subtitle": "",
        "image_url": "https://i0.hdslb.com/bfs/sycp/creative_img/202504/3eba2979cb9525f14633a39c9f2ec2ab.jpg"
      },
      "upzone_entrance_type": 0,
      "upzone_entrance_report_id": 0,
      "click_area": 0,
      "shop_id": 0,
      "up_mid": 0,
      "track_id": "pbaes.DXUvRhr8IAhiFZ60KoOBStL0Na80m-kKS6CwFKDBtlzOwGJZu7il0VbEU3j2A_dZ96EXDGonAHs9Qx-5X2XbovyGP-xL4lyr_c_3rDZs4q3frmVjEGhu2VPOE5MRHF3AdryKsZiIGCl_f6ZD0y-cNQ==",
      "enable_store_direct_launch": 0,
      "enable_double_jump": false,
      "from_track_id": "all_49.router-pegasus-2021478-7d7955f987-td5kj.1745482993998.1007",
      "store_callup_card": false,
      "enable_h5_alert": false,
      "special_industry_style": 0,
      "macro_replace_priority": 1,
      "feedback_panel_style": 0,
      "ad_content_type": 0,
      "enable_h5_pre_load": 0,
      "hot_activity_id": 0,
      "middle_show_urls": [],
      "middle_click_urls": [],
      "product_id": 0,
      "landingpage_download_style": 2,
      "download_url_type": 0,
      "enable_auto_callup": 0,
      "top_live_stay_time_seconds": 0,
      "vipshop_fast_framework": 0,
      "lottery_id": 0,
      "enable_openapk_dialog": false,
      "user_cancel_jump_type": 0,
      "comment_toast_open": 0,
      "comment_biz_type": 0,
      "app_exp_params": "{\"pegasus_live_inline_background_fill\":0,\"story_live_goods_card_style\":{\"first_type\":1,\"second_type\":2,\"delay_time\":3000}}"
    }
  }
}
```

为普通视频时 则对应最开始的视频类型 也就是

```json
{
  "card_type": "small_cover_v2",
  "card_goto": "av",
  "goto": "av",
  "param": "114375012651120",
  "cover": "http://i1.hdslb.com/bfs/archive/05ec862caac777f9d7d06175becf0413b9c653ee.jpg",
  "title": "「小白」红米Turbo 4 Pro 性能体验：首台8sGen4量产机表现如何？",
  "uri": "bilibili://video/114375012651120?cid=29550644277&player_height=1890&player_preload=%7B%22expire_time%22%3A1745486594%2C%22cid%22%3A29550644277%2C%22quality%22%3A32%2C%22file_info%22%3A%7B%2216%22%3A%7B%22infos%22%3A%5B%7B%22filesize%22%3A2121663%2C%22timelength%22%3A230900%7D%5D%7D%2C%2232%22%3A%7B%22infos%22%3A%5B%7B%22filesize%22%3A3606019%2C%22timelength%22%3A230900%7D%5D%7D%2C%2264%22%3A%7B%22infos%22%3A%5B%7B%22filesize%22%3A6733527%2C%22timelength%22%3A230900%7D%5D%7D%2C%2280%22%3A%7B%22infos%22%3A%5B%7B%22filesize%22%3A10362311%2C%22timelength%22%3A230900%7D%5D%7D%7D%2C%22video_codecid%22%3A7%2C%22video_project%22%3Atrue%2C%22dash%22%3A%7B%22video%22%3A%5B%7B%22id%22%3A32%2C%22base_url%22%3A%22http%3A%2F%2F123.184.35.33%3A8000%2Fv1%2Fresource%2F29550644277-1-100047.m4s%3Fagrr%3D1%5Cu0026build%3D8410300%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026bvc%3Dvod%5Cu0026bw%3D125426%5Cu0026deadline%3D1745490194%5Cu0026dl%3D0%5Cu0026e%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026f%3DU_0_0%5Cu0026gen%3Dplayurlv3%5Cu0026mcdnid%3D50007224%5Cu0026mid%3D479396940%5Cu0026nbs%3D1%5Cu0026nettype%3D0%5Cu0026og%3Dcos%5Cu0026oi%3D3059343394%5Cu0026orderid%3D0%252C3%5Cu0026os%3Dmcdn%5Cu0026platform%3Dandroid%5Cu0026sign%3D158098%5Cu0026tag%3D%5Cu0026traceid%3DtrANPsmzTXNczh_0_U_a%5Cu0026uipk%3D5%5Cu0026uparams%3De%252Ctag%252Cnbs%252Coi%252Cplatform%252Ctrid%252Cmid%252Cdeadline%252Cuipk%252Cgen%252Cos%252Cog%5Cu0026upsig%3Df6ea272dedd17383c1a7c43a39471036%22%2C%22bandwidth%22%3A124895%2C%22codecid%22%3A7%2C%22size%22%3A3606019%2C%22frame_rate%22%3A%2224.991%22%2C%22backup_url%22%3A%5B%22http%3A%2F%2F211.141.224.92%3A4480%2Fupgcxcode%2F77%2F42%2F29550644277%2F29550644277-1-100047.m4s%3Fe%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026tag%3D%5Cu0026nbs%3D1%5Cu0026oi%3D3059343394%5Cu0026platform%3Dandroid%5Cu0026trid%3D000056fb961696ed4d6bb208acb9ce431b1U%5Cu0026mid%3D479396940%5Cu0026deadline%3D1745490194%5Cu0026uipk%3D5%5Cu0026gen%3Dplayurlv3%5Cu0026os%3Dmcdn%5Cu0026og%3Dcos%5Cu0026upsig%3Df6ea272dedd17383c1a7c43a39471036%5Cu0026uparams%3De%2Ctag%2Cnbs%2Coi%2Cplatform%2Ctrid%2Cmid%2Cdeadline%2Cuipk%2Cgen%2Cos%2Cog%5Cu0026mcdnid%3D50007224%5Cu0026bvc%3Dvod%5Cu0026nettype%3D0%5Cu0026bw%3D125426%5Cu0026build%3D8410300%5Cu0026dl%3D0%5Cu0026f%3DU_0_0%5Cu0026agrr%3D1%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026orderid%3D0%2C3%22%2C%22http%3A%2F%2Fupos-sz-estgoss.bilivideo.com%2Fupgcxcode%2F77%2F42%2F29550644277%2F29550644277-1-100047.m4s%3Fe%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026tag%3D%5Cu0026gen%3Dplayurlv3%5Cu0026os%3Dupos%5Cu0026og%3Dcos%5Cu0026trid%3D56fb961696ed4d6bb208acb9ce431b1U%5Cu0026mid%3D479396940%5Cu0026deadline%3D1745490194%5Cu0026nbs%3D1%5Cu0026oi%3D3059343394%5Cu0026uipk%3D5%5Cu0026platform%3Dandroid%5Cu0026upsig%3D464e03491d78d3249012e6c9affbb768%5Cu0026uparams%3De%2Ctag%2Cgen%2Cos%2Cog%2Ctrid%2Cmid%2Cdeadline%2Cnbs%2Coi%2Cuipk%2Cplatform%5Cu0026bvc%3Dvod%5Cu0026nettype%3D0%5Cu0026bw%3D125426%5Cu0026agrr%3D1%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026build%3D8410300%5Cu0026dl%3D0%5Cu0026f%3DU_0_0%5Cu0026orderid%3D1%2C3%22%5D%2C%22audio_id%22%3A30216%7D%2C%7B%22id%22%3A32%2C%22base_url%22%3A%22http%3A%2F%2F59.47.230.23%3A8000%2Fv1%2Fresource%2F29550644277-1-30033.m4s%3Fagrr%3D1%5Cu0026build%3D8410300%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026bvc%3Dvod%5Cu0026bw%3D131973%5Cu0026deadline%3D1745490194%5Cu0026dl%3D0%5Cu0026e%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026f%3DU_0_0%5Cu0026gen%3Dplayurlv3%5Cu0026mcdnid%3D50007224%5Cu0026mid%3D479396940%5Cu0026nbs%3D1%5Cu0026nettype%3D0%5Cu0026og%3Dcos%5Cu0026oi%3D3059343394%5Cu0026orderid%3D0%252C3%5Cu0026os%3Dmcdn%5Cu0026platform%3Dandroid%5Cu0026sign%3D2d5ae2%5Cu0026tag%3D%5Cu0026traceid%3DtrQICyqgrXBqnY_0_U_a%5Cu0026uipk%3D5%5Cu0026uparams%3De%252Cnbs%252Coi%252Cuipk%252Cmid%252Cdeadline%252Cog%252Cplatform%252Ctrid%252Ctag%252Cgen%252Cos%5Cu0026upsig%3D855d6f99090897394e531af9d9cc6dc8%22%2C%22bandwidth%22%3A131411%2C%22codecid%22%3A12%2C%22size%22%3A3794237%2C%22frame_rate%22%3A%2224.991%22%2C%22backup_url%22%3A%5B%22http%3A%2F%2F122.191.18.170%3A8000%2Fv1%2Fresource%2F29550644277-1-30033.m4s%3Fagrr%3D1%5Cu0026build%3D8410300%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026bvc%3Dvod%5Cu0026bw%3D131973%5Cu0026deadline%3D1745490194%5Cu0026dl%3D0%5Cu0026e%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026f%3DU_0_0%5Cu0026gen%3Dplayurlv3%5Cu0026mid%3D479396940%5Cu0026nbs%3D1%5Cu0026nettype%3D0%5Cu0026og%3Dcos%5Cu0026oi%3D3059343394%5Cu0026orderid%3D1%252C3%5Cu0026os%3Dcoso1bv%5Cu0026platform%3Dandroid%5Cu0026sign%3D2d5ae2%5Cu0026tag%3D%5Cu0026traceid%3DtrxqpZsZboLcyN_0_U_a%5Cu0026uipk%3D5%5Cu0026uparams%3De%252Cuipk%252Cplatform%252Ctag%252Cos%252Cog%252Cnbs%252Coi%252Ctrid%252Cmid%252Cdeadline%252Cgen%5Cu0026upsig%3D42f974aacd3f2a9a6ba659f11e469614%22%2C%22http%3A%2F%2F211.141.224.92%3A4480%2Fupgcxcode%2F77%2F42%2F29550644277%2F29550644277-1-30033.m4s%3Fe%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026nbs%3D1%5Cu0026oi%3D3059343394%5Cu0026uipk%3D5%5Cu0026mid%3D479396940%5Cu0026deadline%3D1745490194%5Cu0026og%3Dcos%5Cu0026platform%3Dandroid%5Cu0026trid%3D000056fb961696ed4d6bb208acb9ce431b1U%5Cu0026tag%3D%5Cu0026gen%3Dplayurlv3%5Cu0026os%3Dmcdn%5Cu0026upsig%3D855d6f99090897394e531af9d9cc6dc8%5Cu0026uparams%3De%2Cnbs%2Coi%2Cuipk%2Cmid%2Cdeadline%2Cog%2Cplatform%2Ctrid%2Ctag%2Cgen%2Cos%5Cu0026mcdnid%3D50007224%5Cu0026bvc%3Dvod%5Cu0026nettype%3D0%5Cu0026bw%3D131973%5Cu0026build%3D8410300%5Cu0026dl%3D0%5Cu0026f%3DU_0_0%5Cu0026agrr%3D1%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026orderid%3D0%2C3%22%5D%2C%22audio_id%22%3A30216%7D%5D%2C%22audio%22%3A%5B%7B%22id%22%3A30216%2C%22base_url%22%3A%22http%3A%2F%2F121.31.234.218%3A8000%2Fv1%2Fresource%2F29550644277-1-30216.m4s%3Fagrr%3D1%5Cu0026build%3D8410300%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026bvc%3Dvod%5Cu0026bw%3D43505%5Cu0026deadline%3D1745490194%5Cu0026dl%3D0%5Cu0026e%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026f%3DU_0_0%5Cu0026gen%3Dplayurlv3%5Cu0026mcdnid%3D50007224%5Cu0026mid%3D479396940%5Cu0026nbs%3D1%5Cu0026nettype%3D0%5Cu0026og%3Dhw%5Cu0026oi%3D3059343394%5Cu0026orderid%3D0%252C3%5Cu0026os%3Dmcdn%5Cu0026platform%3Dandroid%5Cu0026sign%3Db0263a%5Cu0026tag%3D%5Cu0026traceid%3DtrDHNJjmfaaueG_0_U_a%5Cu0026uipk%3D5%5Cu0026uparams%3De%252Cplatform%252Ctrid%252Cmid%252Cdeadline%252Cnbs%252Cgen%252Coi%252Cuipk%252Ctag%252Cos%252Cog%5Cu0026upsig%3De92887e43514a81bad4594c670c509d1%22%2C%22bandwidth%22%3A43292%2C%22size%22%3A1250775%2C%22backup_url%22%3A%5B%22http%3A%2F%2F211.141.225.131%3A8000%2Fv1%2Fresource%2F29550644277-1-30216.m4s%3Fagrr%3D1%5Cu0026build%3D8410300%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026bvc%3Dvod%5Cu0026bw%3D43505%5Cu0026deadline%3D1745490194%5Cu0026dl%3D0%5Cu0026e%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026f%3DU_0_0%5Cu0026gen%3Dplayurlv3%5Cu0026mid%3D479396940%5Cu0026nbs%3D1%5Cu0026nettype%3D0%5Cu0026og%3Dhw%5Cu0026oi%3D3059343394%5Cu0026orderid%3D1%252C3%5Cu0026os%3D08hbv%5Cu0026platform%3Dandroid%5Cu0026sign%3Db0263a%5Cu0026tag%3D%5Cu0026traceid%3DtrnTeKCShifUBc_0_U_a%5Cu0026uipk%3D5%5Cu0026uparams%3De%252Cgen%252Cog%252Cdeadline%252Ctag%252Cnbs%252Cplatform%252Ctrid%252Cos%252Cmid%252Coi%252Cuipk%5Cu0026upsig%3D313f602e2d41ebe9637a95fc20bceb93%22%2C%22http%3A%2F%2F211.141.224.92%3A4480%2Fupgcxcode%2F77%2F42%2F29550644277%2F29550644277-1-30216.m4s%3Fe%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026platform%3Dandroid%5Cu0026trid%3D000056fb961696ed4d6bb208acb9ce431b1U%5Cu0026mid%3D479396940%5Cu0026deadline%3D1745490194%5Cu0026nbs%3D1%5Cu0026gen%3Dplayurlv3%5Cu0026oi%3D3059343394%5Cu0026uipk%3D5%5Cu0026tag%3D%5Cu0026os%3Dmcdn%5Cu0026og%3Dhw%5Cu0026upsig%3De92887e43514a81bad4594c670c509d1%5Cu0026uparams%3De%2Cplatform%2Ctrid%2Cmid%2Cdeadline%2Cnbs%2Cgen%2Coi%2Cuipk%2Ctag%2Cos%2Cog%5Cu0026mcdnid%3D50007224%5Cu0026bvc%3Dvod%5Cu0026nettype%3D0%5Cu0026bw%3D43505%5Cu0026f%3DU_0_0%5Cu0026agrr%3D1%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026build%3D8410300%5Cu0026dl%3D0%5Cu0026orderid%3D0%2C3%22%5D%7D%2C%7B%22id%22%3A30280%2C%22base_url%22%3A%22http%3A%2F%2F211.97.94.165%3A8000%2Fv1%2Fresource%2F29550644277-1-30280.m4s%3Fagrr%3D1%5Cu0026build%3D8410300%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026bvc%3Dvod%5Cu0026bw%3D43504%5Cu0026deadline%3D1745490194%5Cu0026dl%3D0%5Cu0026e%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026f%3DU_0_0%5Cu0026gen%3Dplayurlv3%5Cu0026mcdnid%3D50007224%5Cu0026mid%3D479396940%5Cu0026nbs%3D1%5Cu0026nettype%3D0%5Cu0026og%3Dcos%5Cu0026oi%3D3059343394%5Cu0026orderid%3D0%252C3%5Cu0026os%3Dmcdn%5Cu0026platform%3Dandroid%5Cu0026sign%3D3f3ed4%5Cu0026tag%3D%5Cu0026traceid%3DtrQHmKzoFdDeCw_0_U_a%5Cu0026uipk%3D5%5Cu0026uparams%3De%252Cuipk%252Ctag%252Cnbs%252Cgen%252Cos%252Cog%252Coi%252Cplatform%252Ctrid%252Cmid%252Cdeadline%5Cu0026upsig%3D808cd1429841f75b1ccd7ccdc5de7bc3%22%2C%22bandwidth%22%3A43292%2C%22size%22%3A1250767%2C%22backup_url%22%3A%5B%22http%3A%2F%2F123.184.35.19%3A8000%2Fv1%2Fresource%2F29550644277-1-30280.m4s%3Fagrr%3D1%5Cu0026build%3D8410300%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026bvc%3Dvod%5Cu0026bw%3D43504%5Cu0026deadline%3D1745490194%5Cu0026dl%3D0%5Cu0026e%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026f%3DU_0_0%5Cu0026gen%3Dplayurlv3%5Cu0026mid%3D479396940%5Cu0026nbs%3D1%5Cu0026nettype%3D0%5Cu0026og%3Dcos%5Cu0026oi%3D3059343394%5Cu0026orderid%3D1%252C3%5Cu0026os%3Dupos%5Cu0026platform%3Dandroid%5Cu0026sign%3D3f3ed4%5Cu0026tag%3D%5Cu0026traceid%3DtrtSntUkmmkWVz_0_U_a%5Cu0026uipk%3D5%5Cu0026uparams%3De%252Cplatform%252Ctag%252Cnbs%252Cog%252Ctrid%252Cmid%252Cdeadline%252Coi%252Cuipk%252Cgen%252Cos%5Cu0026upsig%3D070e2e2176dd7e2d87777b20161c8d1f%22%2C%22http%3A%2F%2F211.141.224.92%3A4480%2Fupgcxcode%2F77%2F42%2F29550644277%2F29550644277-1-30280.m4s%3Fe%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026uipk%3D5%5Cu0026tag%3D%5Cu0026nbs%3D1%5Cu0026gen%3Dplayurlv3%5Cu0026os%3Dmcdn%5Cu0026og%3Dcos%5Cu0026oi%3D3059343394%5Cu0026platform%3Dandroid%5Cu0026trid%3D000056fb961696ed4d6bb208acb9ce431b1U%5Cu0026mid%3D479396940%5Cu0026deadline%3D1745490194%5Cu0026upsig%3D808cd1429841f75b1ccd7ccdc5de7bc3%5Cu0026uparams%3De%2Cuipk%2Ctag%2Cnbs%2Cgen%2Cos%2Cog%2Coi%2Cplatform%2Ctrid%2Cmid%2Cdeadline%5Cu0026mcdnid%3D50007224%5Cu0026bvc%3Dvod%5Cu0026nettype%3D0%5Cu0026bw%3D43504%5Cu0026dl%3D0%5Cu0026f%3DU_0_0%5Cu0026agrr%3D1%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026build%3D8410300%5Cu0026orderid%3D0%2C3%22%5D%7D%2C%7B%22id%22%3A30232%2C%22base_url%22%3A%22http%3A%2F%2F125.106.124.64%3A8000%2Fv1%2Fresource%2F29550644277-1-30232.m4s%3Fagrr%3D1%5Cu0026build%3D8410300%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026bvc%3Dvod%5Cu0026bw%3D43504%5Cu0026deadline%3D1745490194%5Cu0026dl%3D0%5Cu0026e%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026f%3DU_0_0%5Cu0026gen%3Dplayurlv3%5Cu0026mcdnid%3D50007224%5Cu0026mid%3D479396940%5Cu0026nbs%3D1%5Cu0026nettype%3D0%5Cu0026og%3Dhw%5Cu0026oi%3D3059343394%5Cu0026orderid%3D0%252C3%5Cu0026os%3Dmcdn%5Cu0026platform%3Dandroid%5Cu0026sign%3D3ad163%5Cu0026tag%3D%5Cu0026traceid%3DtrsSvqSMaoCcOa_1_U_a%5Cu0026uipk%3D5%5Cu0026uparams%3De%252Ctag%252Cuipk%252Cgen%252Cos%252Cog%252Ctrid%252Cmid%252Cdeadline%252Cnbs%252Coi%252Cplatform%5Cu0026upsig%3D219bdbd1641753ddc8555f788bc21711%22%2C%22bandwidth%22%3A43292%2C%22size%22%3A1250767%2C%22backup_url%22%3A%5B%22http%3A%2F%2F220.200.12.159%3A5889%2Fv1%2Fresource%2F29550644277-1-30232.m4s%3Fagrr%3D1%5Cu0026build%3D8410300%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026bvc%3Dvod%5Cu0026bw%3D43504%5Cu0026deadline%3D1745490194%5Cu0026dl%3D0%5Cu0026e%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026f%3DU_0_0%5Cu0026gen%3Dplayurlv3%5Cu0026mid%3D479396940%5Cu0026nbs%3D1%5Cu0026nettype%3D0%5Cu0026og%3Dhw%5Cu0026oi%3D3059343394%5Cu0026orderid%3D1%252C3%5Cu0026os%3D08hbv%5Cu0026platform%3Dandroid%5Cu0026sign%3D3ad163%5Cu0026tag%3D%5Cu0026traceid%3DtrQVqwCtxAuTKK_2_U_a%5Cu0026uipk%3D5%5Cu0026uparams%3De%252Ctag%252Coi%252Ctrid%252Cdeadline%252Cgen%252Cos%252Cnbs%252Cuipk%252Cplatform%252Cmid%252Cog%5Cu0026upsig%3Dc45e0be8a46a1b1456b066fc447dcf4a%22%2C%22http%3A%2F%2F211.141.224.92%3A4480%2Fupgcxcode%2F77%2F42%2F29550644277%2F29550644277-1-30232.m4s%3Fe%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026tag%3D%5Cu0026uipk%3D5%5Cu0026gen%3Dplayurlv3%5Cu0026os%3Dmcdn%5Cu0026og%3Dhw%5Cu0026trid%3D000056fb961696ed4d6bb208acb9ce431b1U%5Cu0026mid%3D479396940%5Cu0026deadline%3D1745490194%5Cu0026nbs%3D1%5Cu0026oi%3D3059343394%5Cu0026platform%3Dandroid%5Cu0026upsig%3D219bdbd1641753ddc8555f788bc21711%5Cu0026uparams%3De%2Ctag%2Cuipk%2Cgen%2Cos%2Cog%2Ctrid%2Cmid%2Cdeadline%2Cnbs%2Coi%2Cplatform%5Cu0026mcdnid%3D50007224%5Cu0026bvc%3Dvod%5Cu0026nettype%3D0%5Cu0026bw%3D43504%5Cu0026f%3DU_0_0%5Cu0026agrr%3D1%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026build%3D8410300%5Cu0026dl%3D0%5Cu0026orderid%3D0%2C3%22%5D%7D%5D%7D%2C%22fnval%22%3A272%2C%22accept_formats%22%3A%5B%7B%22quality%22%3A116%2C%22format%22%3A%22flv_p60%22%2C%22description%22%3A%22%E9%AB%98%E6%B8%85%201080P60%22%2C%22new_description%22%3A%221080P%2060%E5%B8%A7%22%2C%22display_desc%22%3A%221080P%22%2C%22superscript%22%3A%2260%E5%B8%A7%22%2C%22need_vip%22%3Atrue%2C%22need_login%22%3Atrue%7D%2C%7B%22quality%22%3A80%2C%22format%22%3A%22flv%22%2C%22description%22%3A%22%E9%AB%98%E6%B8%85%201080P%22%2C%22new_description%22%3A%221080P%20%E9%AB%98%E6%B8%85%22%2C%22display_desc%22%3A%221080P%22%2C%22need_login%22%3Atrue%7D%2C%7B%22quality%22%3A64%2C%22format%22%3A%22flv720%22%2C%22description%22%3A%22%E9%AB%98%E6%B8%85%20720P%22%2C%22new_description%22%3A%22720P%20%E5%87%86%E9%AB%98%E6%B8%85%22%2C%22display_desc%22%3A%22720P%22%2C%22need_login%22%3Atrue%7D%2C%7B%22quality%22%3A32%2C%22format%22%3A%22flv480%22%2C%22description%22%3A%22%E6%B8%85%E6%99%B0%20480P%22%2C%22new_description%22%3A%22480P%20%E6%A0%87%E6%B8%85%22%2C%22display_desc%22%3A%22480P%22%7D%2C%7B%22quality%22%3A16%2C%22format%22%3A%22mp4%22%2C%22description%22%3A%22%E6%B5%81%E7%95%85%20360P%22%2C%22new_description%22%3A%22360P%20%E6%B5%81%E7%95%85%22%2C%22display_desc%22%3A%22360P%22%7D%5D%2C%22volume%22%3A%7B%22measured_i%22%3A-18.2%2C%22measured_lra%22%3A5.9%2C%22measured_tp%22%3A-1.3%2C%22measured_threshold%22%3A-28.3%2C%22target_offset%22%3A0.5%2C%22target_i%22%3A-14%2C%22target_tp%22%3A-1%2C%22multi_scene_args%22%3A%7B%22high_dynamic_target_i%22%3A%22-24%22%2C%22normal_target_i%22%3A%22-14%22%2C%22undersized_target_i%22%3A%22-28%22%7D%7D%2C%22union_player%22%3A%7B%22biz_type%22%3A1%2C%22dimension%22%3A%7B%22width%22%3A4096%2C%22height%22%3A1890%7D%2C%22aid%22%3A114375012651120%7D%2C%22auto_qn_ctl%22%3A%7B%22login_half%22%3A32%2C%22nologin_half%22%3A32%2C%22login_full%22%3A80%2C%22nologin_full%22%3A32%2C%22mobile_login_full%22%3A80%2C%22mobile_nologin_full%22%3A32%7D%2C%22qn_exp%22%3A%7B%22qn_exp_1%22%3Atrue%7D%7D&player_rotate=0&player_width=4096&report_flow_data=%7B%22flow_card_type%22%3A%22av%22%2C%22flow_source%22%3A%22click_u2i%24ann_dssm_u2i_28d%24dssm_u2u%22%7D&trackid=all_49.router-pegasus-2021478-7d7955f987-td5kj.1745482993998.1007"
  ...
}
```

**示例：**

获取短视频模式视频列表

```shell
curl -G 'https://app.bilibili.com/x/v2/feed/index' 
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "items": [
      {
        "card_type": "small_cover_v2",
        "card_goto": "av",
        "goto": "av",
        "param": "411978753",
        "cover": "http://i2.hdslb.com/bfs/archive/a1bda1e57e6812ca8822a8839fc4a1d3539255a8.jpg",
        "title": "帕 鲁 现 状",
        "uri": "bilibili://video/411978753?cid=1423365216\u0026player_height=1920\u0026player_preload=%7B%22cid%22%3A1423365216%2C%22expire_time%22%3A1706633200%2C%22file_info%22%3A%7B%2216%22%3A%5B%7B%22timelength%22%3A79970%2C%22filesize%22%3A3782665%7D%5D%2C%2264%22%3A%5B%7B%22timelength%22%3A79900%2C%22filesize%22%3A9552030%7D%5D%7D%2C%22support_quality%22%3Anull%2C%22support_formats%22%3Anull%2C%22support_description%22%3Anull%2C%22quality%22%3A16%2C%22url%22%3A%22http%3A%2F%2Fcn-gdst-cm-01-12.bilivideo.com%2Fupgcxcode%2F16%2F52%2F1423365216%2F1423365216-1-16.mp4%3Fe%3Dig8euxZM2rNcNbRVhwdVhwdlhWdVhwdVhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8gNEVE5XREto8z5JZC2X2gkX5L5F1eTX1jkXlsTXHeux_f2o859IB_%5Cu0026uipk%3D5%5Cu0026nbs%3D1%5Cu0026deadline%3D1706636800%5Cu0026gen%3Dplayurlv2%5Cu0026os%3Dbcache%5Cu0026oi%3D0%5Cu0026trid%3D00000ccc07d4b7a34140a25493d51003bd95U%5Cu0026mid%3D0%5Cu0026platform%3D%5Cu0026upsig%3D2bf8e99202a181300981ab6ba9d2305d%5Cu0026uparams%3De%2Cuipk%2Cnbs%2Cdeadline%2Cgen%2Cos%2Coi%2Ctrid%2Cmid%2Cplatform%5Cu0026cdnid%3D6876%5Cu0026bvc%3Dvod%5Cu0026nettype%3D0%5Cu0026orderid%3D0%2C3%5Cu0026buvid%3D%5Cu0026build%3D0%5Cu0026f%3DU_0_0%5Cu0026bw%3D47881%5Cu0026logo%3D80000000%22%2C%22video_codecid%22%3A7%2C%22video_project%22%3Atrue%2C%22fnver%22%3A0%2C%22fnval%22%3A0%7D\u0026player_rotate=0\u0026player_width=1080\u0026report_flow_data=%7B%22flow_card_type%22%3A%22av%22%7D",
        "three_point": {
          "dislike_reasons": [
            {
              "id": 4,
              "name": "UP主:锤子game",
              "toast": "将减少相似内容推荐"
            },
            {
              "id": 2,
              "name": "分区:网络游戏",
              "toast": "将减少相似内容推荐"
            },
            {
              "id": 3,
              "name": "频道:搞笑",
              "toast": "将减少相似内容推荐"
            },
            {
              "id": 12,
              "name": "此类内容过多",
              "toast": "将减少相似内容推荐"
            },
            {
              "id": 13,
              "name": "推荐过",
              "toast": "将减少相似内容推荐"
            },
            {
              "id": 1,
              "name": "不感兴趣",
              "toast": "将减少相似内容推荐"
            }
          ],
          "feedbacks": [
            {
              "id": 1,
              "name": "恐怖血腥",
              "toast": "将优化首页此类内容"
            },
            {
              "id": 2,
              "name": "色情低俗",
              "toast": "将优化首页此类内容"
            },
            {
              "id": 3,
              "name": "封面恶心",
              "toast": "将优化首页此类内容"
            },
            {
              "id": 4,
              "name": "标题党/封面党",
              "toast": "将优化首页此类内容"
            }
          ],
          "watch_later": 1
        },
        "args": {
          "up_id": 495695169,
          "up_name": "锤子game",
          "rid": 65,
          "rname": "网络游戏",
          "tid": 1833,
          "tname": "搞笑",
          "aid": 411978753
        },
        "player_args": {
          "aid": 411978753,
          "cid": 1423365216,
          "type": "av",
          "duration": 80
        },
        "idx": 1706629610,
        "three_point_v2": [
          {
            "title": "添加至稍后再看",
            "type": "watch_later",
            "icon": "https://i0.hdslb.com/bfs/activity-plat/static/ce06d65bc0a8d8aa2a463747ce2a4752/NyPAqcn0QF.png"
          },
          {
            "title": "反馈",
            "subtitle": "(选择后将优化首页此类内容)",
            "reasons": [
              {
                "id": 1,
                "name": "恐怖血腥",
                "toast": "将优化首页此类内容"
              },
              {
                "id": 2,
                "name": "色情低俗",
                "toast": "将优化首页此类内容"
              },
              {
                "id": 3,
                "name": "封面恶心",
                "toast": "将优化首页此类内容"
              },
              {
                "id": 4,
                "name": "标题党/封面党",
                "toast": "将优化首页此类内容"
              }
            ],
            "type": "feedback"
          },
          {
            "title": "不感兴趣",
            "subtitle": "(选择后将减少相似内容推荐)",
            "reasons": [
              {
                "id": 4,
                "name": "UP主:锤子game",
                "toast": "将减少相似内容推荐"
              },
              {
                "id": 2,
                "name": "分区:网络游戏",
                "toast": "将减少相似内容推荐"
              },
              {
                "id": 3,
                "name": "频道:搞笑",
                "toast": "将减少相似内容推荐"
              },
              {
                "id": 12,
                "name": "此类内容过多",
                "toast": "将减少相似内容推荐"
              },
              {
                "id": 13,
                "name": "推荐过",
                "toast": "将减少相似内容推荐"
              },
              {
                "id": 1,
                "name": "不感兴趣",
                "toast": "将减少相似内容推荐"
              }
            ],
            "type": "dislike"
          }
        ],
        "talk_back": "视频,帕 鲁 现 状,32.5万观看,257弹幕,时长1分钟20秒,UP主锤子game,",
        "report_flow_data": "{\"flow_card_type\":\"av\"}",
        "cover_left_text_1": "32.5万",
        "cover_left_icon_1": 1,
        "cover_left_1_content_description": "32.5万观看",
        "cover_left_text_2": "257",
        "cover_left_icon_2": 3,
        "cover_left_2_content_description": "257弹幕",
        "cover_right_text": "1:20",
        "cover_right_content_description": "1分钟20秒",
        "desc_button": {
          "text": "锤子game",
          "uri": "bilibili://space/495695169",
          "event": "nickname",
          "type": 1
        },
        "official_icon": 16,
        "can_play": 1,
        "goto_icon": {
          "icon_url": "https://i0.hdslb.com/bfs/activity-plat/static/20230227/0977767b2e79d8ad0a36a731068a83d7/077GOeHOfO.png",
          "icon_night_url": "https://i0.hdslb.com/bfs/activity-plat/static/20230227/0977767b2e79d8ad0a36a731068a83d7/ldbCXtkoK2.png",
          "icon_width": 16,
          "icon_height": 16
        }
      },
      {
        "card_type": "small_cover_v2",
        "card_goto": "av",
        "goto": "av",
        "param": "836990443",
        "cover": "http://i1.hdslb.com/bfs/archive/d16a125d6ec1c68cc9e0815bc28dcb62a1df9932.jpg",
        "title": "【Phigros自制/崩坏：星穹铁道】欢迎来到匹诺康尼！ 不眠之夜 IN Lv.13",
        "uri": "bilibili://video/836990443?cid=1422516399\u0026player_height=1080\u0026player_preload=%7B%22cid%22%3A1422516399%2C%22expire_time%22%3A1706633200%2C%22file_info%22%3A%7B%2216%22%3A%5B%7B%22timelength%22%3A102818%2C%22filesize%22%3A4441802%7D%5D%2C%2264%22%3A%5B%7B%22timelength%22%3A102748%2C%22filesize%22%3A12468618%7D%5D%7D%2C%22support_quality%22%3Anull%2C%22support_formats%22%3Anull%2C%22support_description%22%3Anull%2C%22quality%22%3A16%2C%22url%22%3A%22http%3A%2F%2Fupos-sz-mirrorali.bilivideo.com%2Fupgcxcode%2F99%2F63%2F1422516399%2F1422516399-1-16.mp4%3Fe%3Dig8euxZM2rNcNbRVhwdVhwdlhWdVhwdVhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8gNEVE5XREto8z5JZC2X2gkX5L5F1eTX1jkXlsTXHeux_f2o859IB_%5Cu0026uipk%3D5%5Cu0026nbs%3D1%5Cu0026deadline%3D1706636800%5Cu0026gen%3Dplayurlv2%5Cu0026os%3Dalibv%5Cu0026oi%3D0%5Cu0026trid%3D0ccc07d4b7a34140a25493d51003bd95U%5Cu0026mid%3D0%5Cu0026platform%3D%5Cu0026upsig%3D06ea793aa573018646c0096adf0dcb9e%5Cu0026uparams%3De%2Cuipk%2Cnbs%2Cdeadline%2Cgen%2Cos%2Coi%2Ctrid%2Cmid%2Cplatform%5Cu0026bvc%3Dvod%5Cu0026nettype%3D0%5Cu0026orderid%3D0%2C3%5Cu0026buvid%3D%5Cu0026build%3D0%5Cu0026f%3DU_0_0%5Cu0026bw%3D43547%5Cu0026logo%3D80000000%22%2C%22video_codecid%22%3A7%2C%22video_project%22%3Atrue%2C%22fnver%22%3A0%2C%22fnval%22%3A0%7D\u0026player_rotate=0\u0026player_width=1920\u0026report_flow_data=%7B%22flow_card_type%22%3A%22av%22%7D",
        "three_point": {
          "dislike_reasons": [
            {
              "id": 4,
              "name": "UP主:早期陈总",
              "toast": "将减少相似内容推荐"
            },
            {
              "id": 2,
              "name": "分区:音游",
              "toast": "将减少相似内容推荐"
            },
            {
              "id": 3,
              "name": "频道:音乐游戏",
              "toast": "将减少相似内容推荐"
            },
            {
              "id": 12,
              "name": "此类内容过多",
              "toast": "将减少相似内容推荐"
            },
            {
              "id": 13,
              "name": "推荐过",
              "toast": "将减少相似内容推荐"
            },
            {
              "id": 1,
              "name": "不感兴趣",
              "toast": "将减少相似内容推荐"
            }
          ],
          "feedbacks": [
            {
              "id": 1,
              "name": "恐怖血腥",
              "toast": "将优化首页此类内容"
            },
            {
              "id": 2,
              "name": "色情低俗",
              "toast": "将优化首页此类内容"
            },
            {
              "id": 3,
              "name": "封面恶心",
              "toast": "将优化首页此类内容"
            },
            {
              "id": 4,
              "name": "标题党/封面党",
              "toast": "将优化首页此类内容"
            }
          ],
          "watch_later": 1
        },
        "args": {
          "up_id": 1515475415,
          "up_name": "早期陈总",
          "rid": 136,
          "rname": "音游",
          "tid": 10174,
          "tname": "音乐游戏",
          "aid": 836990443
        },
        "player_args": {
          "aid": 836990443,
          "cid": 1422516399,
          "type": "av",
          "duration": 103
        },
        "idx": 1706629609,
        "three_point_v2": [
          {
            "title": "添加至稍后再看",
            "type": "watch_later",
            "icon": "https://i0.hdslb.com/bfs/activity-plat/static/ce06d65bc0a8d8aa2a463747ce2a4752/NyPAqcn0QF.png"
          },
          {
            "title": "反馈",
            "subtitle": "(选择后将优化首页此类内容)",
            "reasons": [
              {
                "id": 1,
                "name": "恐怖血腥",
                "toast": "将优化首页此类内容"
              },
              {
                "id": 2,
                "name": "色情低俗",
                "toast": "将优化首页此类内容"
              },
              {
                "id": 3,
                "name": "封面恶心",
                "toast": "将优化首页此类内容"
              },
              {
                "id": 4,
                "name": "标题党/封面党",
                "toast": "将优化首页此类内容"
              }
            ],
            "type": "feedback"
          },
          {
            "title": "不感兴趣",
            "subtitle": "(选择后将减少相似内容推荐)",
            "reasons": [
              {
                "id": 4,
                "name": "UP主:早期陈总",
                "toast": "将减少相似内容推荐"
              },
              {
                "id": 2,
                "name": "分区:音游",
                "toast": "将减少相似内容推荐"
              },
              {
                "id": 3,
                "name": "频道:音乐游戏",
                "toast": "将减少相似内容推荐"
              },
              {
                "id": 12,
                "name": "此类内容过多",
                "toast": "将减少相似内容推荐"
              },
              {
                "id": 13,
                "name": "推荐过",
                "toast": "将减少相似内容推荐"
              },
              {
                "id": 1,
                "name": "不感兴趣",
                "toast": "将减少相似内容推荐"
              }
            ],
            "type": "dislike"
          }
        ],
        "talk_back": "视频,【Phigros自制/崩坏：星穹铁道】欢迎来到匹诺康尼！ 不眠之夜 IN Lv.13,22.8万观看,797弹幕,时长1分钟43秒,UP主早期陈总,",
        "report_flow_data": "{\"flow_card_type\":\"av\"}",
        "cover_left_text_1": "22.8万",
        "cover_left_icon_1": 1,
        "cover_left_1_content_description": "22.8万观看",
        "cover_left_text_2": "797",
        "cover_left_icon_2": 3,
        "cover_left_2_content_description": "797弹幕",
        "cover_right_text": "1:43",
        "cover_right_content_description": "1分钟43秒",
        "desc_button": {
          "text": "早期陈总",
          "uri": "bilibili://space/1515475415",
          "event": "nickname",
          "type": 1
        },
        "can_play": 1,
        "goto_icon": {
          "icon_url": "https://i0.hdslb.com/bfs/activity-plat/static/20230227/0977767b2e79d8ad0a36a731068a83d7/077GOeHOfO.png",
          "icon_night_url": "https://i0.hdslb.com/bfs/activity-plat/static/20230227/0977767b2e79d8ad0a36a731068a83d7/ldbCXtkoK2.png",
          "icon_width": 16,
          "icon_height": 16
        }
      }
    ],
    "config": {
      "column": 2,
      "autoplay_card": 2,
      "feed_clean_abtest": 0,
      "home_transfer_test": 0,
      "auto_refresh_time": 1200,
      "show_inline_danmaku": 1,
      "toast": {},
      "is_back_to_homepage": true,
      "enable_rcmd_guide": true,
      "inline_sound": 2,
      "auto_refresh_time_by_appear": 1200,
      "auto_refresh_time_by_active": 1200,
      "visible_area": 80,
      "card_density_exp": 1,
      "story_mode_v2_guide_exp": 6
    },
    "interest_choose": null
  }
}
```

</details>

<details>
<summary>查看登录后的响应示例(精简 包含横幅 热门视频 普通视频)：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "items": [
      {
        "card_type": "banner_v8",
        "card_goto": "banner",
        "args": {},
        "idx": 1745482992,
        "track_id": "all_49.router-pegasus-2021478-7d7955f987-td5kj.1745482993998.1007",
        "hash": "4708571670781279769",
        "banner_item": [
          {
            "type": "static",
            "resource_id": 4336,
            "id": 1674508,
            "index": 1,
            "static_banner": {
              "id": 1674508,
              "title": "火凤燎原第二季完结！新的战神，来了！",
              "image": "http://i0.hdslb.com/bfs/banner/b1fc0b68f727c2d4ea57bee154f531c3b7f13fca.png",
              "hash": "a6cee3b5b1c05227159f734f68289ba5",
              "uri": "https://www.bilibili.com/bangumi/play/ep1365959?goto=static_banner",
              "request_id": "1745482994326q172a27a87a21q3087",
              "src_id": 4337,
              "is_ad_loc": true,
              "client_ip": "182.89.224.34",
              "server_type": 0,
              "resource_id": 4336,
              "index": 1,
              "cm_mark": 0
            }
          },
          {
            "type": "ad",
            "resource_id": 4336,
            "id": 0,
            "index": 2,
            "ad_banner": {
              "id": 0,
              "title": "今日全球首发，千件外观福利免费领",
              "image": "https://i0.hdslb.com/bfs/sycp/creative_img/202504/bbd7cc4e6a74508e9ccee467541cc06a.jpg",
              "hash": "46cbecfe04e047692acfd4a149e81ebd",
              "uri": "https://qrsj.biligame.com/gcxz/h5/?sourceFrom=777&sourceType=adPut",
              "request_id": "1745482994326q172a27a87a21q3087",
              "creative_id": 1017846649959747584,
              "src_id": 4338,
              "is_ad": true,
              "is_ad_loc": true,
              "ad_cb": "CAAQABiAoLC1qsSHkA4gACgAMKm4TDjyIUIfMTc0NTQ4Mjk5NDMyNnExNzJhMjdhODdhMjFxMzA4N0iWpZO35jJSBuafs+W3nloG5bm/6KW/YgbkuK3lm71oAXAAeICAgICAGoABAIgBpYgEkgENMTgyLjg5LjIyNC4zNJoBj0BjcGNfcXVvdGE6Y29uc3RhbnQsZWNvbV9mb3JjZV9yZWNhbGw6YmFzZV8wNjI4XzIwLGJyYW5kX3NwbGFzaF9saXN0X2J5X3RpbWU6YnJhbmRfc3BsYXNoX2xpc3RfYnlfdGltZV80MF90dW5uZWwsdWVzX2VycWk6MTcsamtfY2FydDpqazEsZmVlZHNQcmltYXJ5TW9kZWxDb25mOmJzbDIsY29tbWVudENvbXBvbmVudEFudG91UmF0aW86YmFzZSxTbWFsbEJ1ZGdldFJhdGlvOmRlZmF1bHQsc2VhcmNoX2Fkc19jcmVhdGl2ZTpsbG1fZXhwMSxkYWlodW9fYm9vc3RfZXhwOmJvb3N0X2V4cCxzZWFyY2hfYWRzX3JlbGV2YW5jZTp0b3BfYmxhY2tsaXN0X2NhbGksc3BsYXNoX2lubmVyX291dGVyX2V4cDpiYXNlLGNjZF9leHBfZGVtbzpjY2RfYmFzZSxmcmVxUm91dGluZzpiYXNlLHZpZGVvX3RlbXBsYXRlX3N1cHBvcnQ6ZXhwMyxpYWFfb25seV9lY3BtOjAwLHRlc3RfbW9kZWxfbmFtZTpiYXNlXzExLGZseV9qdW1wX2NvbW1lbnQ6ZXhwMyxsb2dnaW5nX2FkaW5mb19saXN0OmJhc2UsdXNlTmV3WWVsbG93Q2FydFBhbm5lbDpleHAyLGhpZ2hfcXVhbGl0eV9hdmlkX3R1cm5fYmFjazpiYXNlLG5ld19kaXJlY3RfYWRtaXNzaW9uX3YyOm9wZW5fc2hvdXRhb193dWR1YW4sdHJhZGVfcmVjYWxsOmRlZmF1bHQsb3R0X2VjcG1fdGhyZDpiYXNlLGVuYWJsZV9hbHRfZGF2aW5jaTpkZWZhdWx0LGlubmVyX291dGVyX2JpZF9leHA6bmV3X3JhbmtmcmFtZV8wNDAyLG9mZmxpbmVfbWlkX2ZlYV92MjpleHAzLGRjdnJfd29ybGRfMjAyNVEyOmJhc2UxLHVuZGVyZnJhbWVfcHVsbF91cDpleHAxLGVuYWJsZV9pbmR1c3RyeV92Ml9maWx0ZXI6YmFzZSxuRmVkQmFjazE6bG9vc2UsRHBhMlJ0YVBpY2tQcm9kdWN0OnNoYXJlZF8zMCxmaWx0ZXJfY2xlYW46YmFzZSxhY2NvdW50RnJlcUNvbmY6YmFzZSxtaW5pZ2FtZV9iaWRfZXhwOmV4cF8wMzA3LHN0b3J5X2RhaWh1b19zdHlsZTpleHAsbm9fYWdlX2dlbmRlcl9leHA6YWdlMCxvdHRjb25maWc6ZXhwXzE1LE1peGVyRUNvbW1lcmNlOmVuYWJsZSxzc3BEaXJlY3REaXNwYXRjaEFkVm9FeHA6ZXhwXzIscmlza3lfYWRfb3B0OmhpZGRlbl9jb3N0XzAsc0ZCcnU6MyxCaXpNaXhlclJvdXRlcjpiaXpfbWl4ZXJfcGcsMjUzOTkxOmJhc2UsdHNtdjJfdHJhZGU6YmFzZSxmbHlfZGVxOm9yZGVyX2xpdmUsdHNtXzE6ZWR1dGFnX3JlY2FsbF8wMjA2LHJldHJpZXZlX2xvZzpvcGVuLGdkX21vZGVsOmV4cDEsY3BhX3NlYXJjaDpjcGFfdjIsdHNtdjJfc3dpbmdmbHlfb3RoZXJzY2VuZTpiYXNlLGFkeF9yZXF1ZXN0X29wdGltaXphdGlvbl90ZXN0OmRlZmF1bHQsc3RfdnZfbW9kZWw6YmFzZSxicnVzaF9kdXA6ZGVmYXVsdCxzdG9yeV9saXZlX3Z2OmRlZixpbmxpbmVfemVyb19jYXJkX2luZGV4OmV4cCxyZXFfbG9nX3JhdGlvOmJhc2UsZHBhVW5kZXJmcmFtZU5ld1N0eWxlOmV4cDIsZHluYW1pY1RpbWVvdXRNaW5zOjI0MCxtb2RlbF9jYWxpOmV4cDEsZmx5X2NwY19jYWxpX25ldzpvcmRlcl9hY2NfZXhwLGVuYWJsZVNtYXJ0Q292ZXJVcmw6YmFzZV9hYV8wMTE1LG1pbmlfZ2FtZV9sb25nX3RpbWVfZmxpcF9leHA6ZXhwX2dyb3VwLHV2X2FhOmRlZmF1bHQsYWNjb3VudF9ibGFjazpiYXNlLGFzQ29tbWVudENoZWNrRGlmZlJhdGlvRXhwOmV4cDIsY3RyX21vZGVsOmV4cF8wMSxic0R1cEFkOm9wZW4sb3JkZXJfbGF4aW46bGF4aW5fYmFzZV92Ml8xLHByb2dDcmVhRmVlZEN0cjpkaXN0X2x0cix1bmlvbl9mbHlfY3BjOmV4cDAxMjQsQ3VzdG9tQ3JlYXRpdmVTZWxlY3RFeHA6a3Vhbmd4aWFfMDQwMixuZXdCc0ZpbHRlckxvZzpvcGVuLHNlYXJjaF9xdWlja19wbGFjZW1lbnQ6ZXhwMSxib29zdF9leHA6ZXhwMyx0c212Ml9tb2RlbF9yZWNhbGw6YmFzZSxjY2RfdWVzY29yZTpjY2RfYmFzZSxkQWR4MTpvcGVuLGRhbGFvX2NhcmRfb25seV90b3A6ZXhwLGNhc3NpbmlFeHA6c21hbGxfYnVkZ2V0X2Nsb3NlLHNwbGFzaF90d2lzdF9hbmdsZV9leHA6YmFzZSx0c212Ml9vdGhlcnM6YmFzZSxzcGxhc2hNaW5JbnRlcnZhbEV4cDpiYXNlXzFoLGR5bmFtaWNfaW5kZXg6YmFzZSxyZWNhbGxfbGltaXRfcmF0aW86YmFzZSxmbHlfY3BhOmZseV92MyxnYW9uZW5nX2FidGVzdDpiYXNlLHBFTjpQUixzZWFyY2hfY3RyX21vZGVsOmV4cF95LGxpdmVfY2FyZF90YWdfbW92ZTpleHAxXzAzMTgsYmVzdENyZWF0aXZlOmVjcG0yLHN0b3J5X3N0eWxlX3NlbGVjdF9jb25mOmJhc2UyMDI1MDIyNyxjbG9zZV9zcmNfZWZmOmV4cF8wNzI1X25vX3J1bGUsMTA3MjpiYXNlLHNvZnRfYWRfZXhwOjA2LGZseV9saWtlX3RoOmNsb3NlLG1peGVyX3N0b3J5X2FkX3dlaWdodDo2LGFpZ2NfYW50b3U6TFJfYmFzZV8yMDI1MDMxNCxqZzpleHAyLHBkY3ZyX3RocmVzaG9sZDpleHAxLGRjdnJfcmV0ZW50aW9uX25ldzpjb21ib19iYXNlLHBlZ2FzdXNfbWl4ZXI6MDEsZHBhMjpiYXNlLHVuZGVyX2ZyYW1lX2VjcG1fZXhwOmJhc2UsSW5kdXN0cnlFeGNsdWRlSW5mb0NvbmZfdjI6YmFzZSxlbmFibGVfdXNlcl9mZWF0dXJlX2J1Y2tldDpiYXNlbGluZSxlY29tX3JlY2FsbDpMSFVDX0IsZW5hYmxlVGFnTW92ZVVwOmV4cDRfbW92ZV90YWdfZGlzbGlrZWFkaixhZF9icmFuZF9nZF9lbmFibGVfZGlmZjpiYXNlLGZkX3BjdHI6YmFzZV8xLDI1NzM4OmJhc2UscHJvZ0NyZWFEaWN0VmVyOmRlZmF1bHQsc2VhcmNoX3BhcmFsbGVsX3JlcV9yZWRpczpleHAxLHByb2dyYW1DcmVhdGl2ZTpkZWZhdWx0LGRwczpkZWZhdWx0LHBhZF9pbm5lcl9hZGxvYWQ6YmFzZV8yMF8wLHVuZGVyZnJhbWVfcHVsbF91cF9uZXc6YmFzZV9hYWEsY29hcnNlRXhwbG9yZUZhY3RvckNvbmY6ZGVmYXVsdCxmbHlfc3RvcnlfeWVsbG93Y2FyX3N0eWxlOnlvdXh1YW5fYmFzZV9rZmMsZmx5X2NwYV9wYzpleHAxMCxEcGFTdnJQcmVzc3VyZTpiYXNlLGNwYTpiYXNlLGJvb3N0X2JzOmJhc2UsZmx5Q2FyZFF1YWxpdHk6ZXhwNCxhbGw6Y3BjX2Nyb3dkX3RhcmdldCxmbHlfY3BhX2JvdHRvbTpjbG9zZSxSVEFfRElWSURFX0VYUF9UQUdfODkyOnJ0YV9kaXZpZGVfZXhwXzg5Ml81LEluZHVzdHJ5THRyQ29hcnNlQ29uZjpnYW1lbGl2ZSxlZGdlX3JlcmFuazpiYXNlLFJUQV9ESVZJREVfRVhQX1RBR182NTc6cnRhX2RpdmlkZV9leHBfNjU3XzQsaGVhcnRfYm94OmV4cCwyMzUzMTpub3JtYWwscHVwX25hdGl2ZV9hZDpkZWZhdWx0LG90dF9lZHVjYXRpb25fYW50b3U6ZXhwLGg1X3Y6Y29tcGFyZSx1c2VMdWFTY3JpcHQ6YmFzZSxjb2Fyc2VfZGFpaHVvOmJhc2UsZmxvd1J1bGU6b3BlbkZsb3dSdWxlQ2hlY2tTd2l0Y2gsc3Rvcnlfc3R5bGVfc2VsZWN0aW9uX2NvbmY6YmFzZTIwMjQxMTI5LG5ld192aWRlb191cF9taWRfZmlsdGVyOmJhc2UsZmx5X2NvYXJzZTpjb25zdGFudCxkZWxldGVGcmVxQ29kZTpiYXNlMyxob25nZ3VvX25vdF9zaG93X2luX2NoYXJnaW5nX3BhZ2U6YmFzZSxEcGFDcmVhdGl2ZVN0cmF0ZWd5RXhwZXJpbWVudDpzZWFyY2hfbWVyZ2VfaW1hZ2VfZXhwLHNzcF9yZXBsYXlfYXM6YmFzZSxiZnNfc2RwYV9kaXZlcnNpZnk6cmVtYWluLHNlYXJjaF9zdWJjYXJkX3N0eWxlOmZvcm1fYnV0dG9uLGJzLXg6YnMsd2hpdGVfYm94OmNsb3NlLGR1YW5qdV9hcnB1OmFkZF9ub3ZlbF8wMzI3LE1vZGVsRmVhdHVyZXNIaXZlTG9nOmNsb3NlLGZseV9zdXBfZmFjdG9yczpleHAsY2x0cmNvbmY6YnNsMyxkYXZpbmNpX3JlcV9sb2c6ZGVmYXVsdCxmbHdfbGlrZV9lbmdhZ2U6YmFzZSxzdG9yeV9jdXN0b21pemVfZGFubXU6YmFzZSxhZHhQbGF5UGFnZVJhc2lvOmV4cDAsZHBhMlByb21vdGVQcm9kdWN0TWF0ZXJpYWw6YmFzZSxsaXZlX21vZGVsOmxpdmVfYmFzZV8wNDA4LHVzZUFpR2NUaXRsZTpiYXNlLHBlZ2FzdXNfYWRsb2FkXzM6MTQsbGFuY2VyX25hdHVyZTpleHAsc3RvcnlfZGFubXVfY29uZjpkYW5tdV9udW1fMzgsdHNtdjJfdG9rZW5fc2RwYTpiYXNlLDI0aF9yb2lfYXJwdV9uZXc6c3RhbGxfYmFzZV92MyxzcGxhc2hfaGFyZF9maWx0ZXJzOmV4cCxnYW1lX2VjcG1fcm9pX2ZhY3Rvcl9zd2l0Y2g6ZXhwX291dGVyLGJ1cGNwY19nc3A6ZGVmYXVsdCxuRmVkQmFjazpsb29zZSxVbml0RGV0YWlsSW5mbzpjbG9zZSzogIHkuInov57lub/lkYrlsY/olL06YmFzZSxnZF9mb3JjZV9zZWxlY3Q6ZXhwMixjb2xkX2Jvb3RfY2xlYXJfZnJlcTpiYXNlLGdhbWVfb3Blbl9pbnRlcmVzdF9vcmllbnRhdGlvbjpleHBfb3Blbl9ib3RoLGNsb3NlX3BlcnNvbmFsX3JlY29tbWVuZF8yMDI1OmV4cF9vcGVuX2FsbF8wMjI4LFJUQV9ESVZJREVfRVhQX1RBR183MzE6cnRhX2RpdmlkZV9leHBfNzMxXzMsbm9fYWRfc2V0OmJhc2UsUlRBX0RJVklERV9FWFBfVEFHXzg1NTpydGFfZGl2aWRlX2V4cF84NTVfNyxhY2NvdW50X2V4cGxvcmVfc2hvd19saW1pdDpkZWZhdWx0LGZseV9nb29kc19jb21tZW50X3VybDpibHVlbGlua19yZXBsYWNlXzA1LG9yZGVyX2xhcmdlOmRlbGF5MSxlY3BtX3RocmVzaG9sZF9sYXllcjowOCxyZWNhbGxfdW5pdF9saW1pdDpiYXNlLFJUQV9ESVZJREVfRVhQX1RBR182NDA6cnRhX2RpdmlkZV9leHBfNjQwXzE2LGRhaWh1b1doaXRlQ29uZjp3aGl0ZV8yNDEyMDJfNSxSVEFfRElWSURFX0VYUF9UQUdfODgzOnJ0YV9kaXZpZGVfZXhwXzg4M181LGVuYWJsZUlubGluZUV4cDpiYXNlLFJUQV9ESVZJREVfRVhQX1RBR184ODg6cnRhX2RpdmlkZV9leHBfODg4XzIsaWFhX3VuaXRfZWE6ZXhwMSxTbWFsbEJ1ZGdldFRvbGVyYXRlOmV4cF83MixhdXRvX2FkX2Fzc2lzdDpiYXNlLG1peGVyX2JyYW5kX29wdDpiYXNlLGxheWVyZWRfYmlkZGluZzpiYXNlMDkyMixzdG9yeVllbGxvd0NhcnROZXc6ZXhwX2Jhc2UyXzAyMTMseHN0X2NodWRpYW46YmFzZSxkdWFuanVfbW9kZWw6ZGVmYXVsdCxnZF9waWQ6ZXhwX3JlYWQsY3BjMV9leHRlbmRlZDpxdW90YV8xMCxicnVzaF9pbm5lcjpiYXNlLHN0b3J5X3N0eWxlX3NlbGVjdDpyYW5kLGVuYWJsZV9wbGF5cGFnZV9pbmxpbmVfd3hfanVtcDpleHBfMDQwOSxkY3ZyZl8yMDI1UTE6cmV2ZXJzZSxmcmVTOmJhc2UsYWR2dl9waWRfZml4OmJhc2UsQ3JlYXRpdmVRdWFsaXR5OmF1dG8sSW5kdXN0cnlCb29zdDpnYW1lbGl2ZSxmbHlfbTppY2ViZXJnX2Jhc2UsZWNwbV9jcm93ZHNfZmlsdGVyOnRlc3QsZ2Rfc2NoZV9yYXRpbzpiYXNlLHRlc3RfbWl4ZXJfY2NkOmJhc2Usa3Vha2VfbW9iaWxlX2FudG91X3BjOmFudG91X3BjLG5ld192aWRlb19ib29zdDpkZWZhdWx0LHVuZGVyZnJhbWVfdWVzY29yZTpiYXNlLEVBX2V4cDpjbG9zZV9lYV8xMjExLGFuY2hvckFwcERvd25sb2FkU3R5bGVFeHA6YmFzZSwyMzI0NDpiYXNlLFJUQV9ESVZJREVfRVhQX1RBR183MDM6cnRhX2RpdmlkZV9leHBfNzAzXzMsZHVhbmp1X21vZGVsX2N0cjpkZWZhdWx0LGNvbG9yX21hc2s6YmFzZSxwdl9hYTpleHBfMSxwY19jbGllbnRfbm9fYWQ6bm9fYWRfYmFzZSxwcm9nQ3JlYVQ6djEuMCxuZWdhdGl2ZV9zdHJhdGVneV90ZXN0OmJhc2UsZW5hYmxlTmF0aXZlRmVlZHNUb1N0b3J5OmV4cF9oYXJkLGx0dl9pbnNfbG9nOmJhc2UxMCxmbHlfYnVfdW5kZXJmcmFtZTpiYXNlLHNwcmluZ2Zlc3RpdmFsX3N0YWJpbGl0eV9pbmR1c3RyeTpiYXNlLGdpZl9leHA6YmFzZSxjYXNlX2ludmVyc3RpZ2F0ZTpiYXNlLHByZXJhbmtfc2RwYTp4c2RqXzAxMTcscmVzZXJ2ZV9wcmljZTpnc3BfYWxsLHBheV83ZF9udW06ZXhwX2dhbWVfMSx0aW1lRnJlcTpkZWZhdWx0LGZyZXFDaGVja0R1cGxpY2F0ZTpiYXNlLFJUQV9ESVZJREVfRVhQX1RBR183MjQ6cnRhX2RpdmlkZV9leHBfNzI0XzMsc3RvcnlGbHlNb2RlbENvbmY6YWRkX2VhX2V4cCxBcHBDb2V4aXN0RmlsdGVyOmNsb3NlLHVzdWFsX2FyZWFzOmJhc2UsYXBwU3RvcmVQcmlvcml0eVhpYW9ndW9BY2NvdW50SWRzOmJhc2UsbWFiaWRfZW5hYmxlOmJhc2VfMDEwOCxSVEFfRElWSURFX0VYUF9UQUdfODM2OnJ0YV9kaXZpZGVfZXhwXzgzNl8xMCxzb2Z0X2FkOjEyLHN0b3J5X3BsYXkzc190b3VjaF9yYXRpbzpyYXRpb18xMDAsZHVhbmp1X3JldGFyZ2V0OmJhc2UsUlRBX0RJVklERV9FWFBfVEFHXzEwMzc6cnRhX2RpdmlkZV9leHBfMTAzN181LGNhdGVnb3J5X3YzOmJhc2UsaWFhM19vdXRfdXBfYWRzOmV4cF9pYWFfb3V0X3VwLHByb2dDcmVhUmFuZG9tXzE6YmFzZV9tb2RlbDAzMTksZmx5X3lzYW50b3U6YmFzZV8wODIxLGZseV9jdHJfaW5saW5lX3RhcmdldDpjbG9zZSx0ZW1wbGF0ZV9maXg6YmFzZSxicmFuZER5bmFtaWNDYXJkSW5kZXhFeHA6ZXhwLGlubGluZUVjcG06ZGVmYXVsdCxmb3JjZUV4cG9zdXJlLWNhc3Npbmk6ZGFpaHVvX29wZW5fMjMxMTAxLHNwbGFzaF9uZXdfc3R5bGVfZmlsdGVyOmRlZmF1bHQsc2VhcmNoX3RyaXRvbjpiYXNlLGN2cl9mOmluZHVzdHJ5X29wdF9leHAsaW5uZXJfb3ZlcmxvYWRfY3RybDpkZWZhdWx0LHVnX3VuaXRfbGltaXQ6ZXhwLGNsZWFuX3Nsb3Q1MHA6ZXhwLG1lcmdlX2ZpbHRlcjplbmFibGVfc3luY19wcmltYXJ5X2ZpbHRlcixoeV9hcnB1X3JvdXRlX3NwbGl0OnN0YWxsX29yX3VuZGVsZXRlZF9mZWFzX2V4cCwxNTA2OmJhc2UsZ2RGZWVkc0VuYWJsZUJydXNoOmJhc2UsaW5saW5lX2Zsb3dfbm9fYWQ6YmFzZSxlbmFibGVfbGFuY2VyX3JlY29yZF9kbXNfZmVhdHVyZTowNDE0X3Rlc3QsdW5kZXJmcmFtZV9tYXJrX3N3dGljaDpleHAxXzA0MDksQWlFeHBQbGF5UGFnZTpiYXNlXzAsMjRoX3JvaV9hcnB1OmJhc2UzLG9wZW5QcmV2aWV3OmV4cDIsZ3NwX2V4cDpzZWFyY2hfZGVmYXVsdCxydW5uaW5nX29jcGM6YmFzZSxmbHlfcmFua19jb25mX21lcmdlOmJhc2UsbHRyQXBwTG9nOmNscyxzZWFyY2hfYWRzX3F1ZXJ5X3Jld3JpdGU6Y29tYmluZV9leHAxLHJhbmtfZGl2XzE6ZGVmYXVsdCx1bmRlcmZyYW1lX2Rvd25sb2FkX2FkYnV0dG9uOmJhc2UsQnNPZmZsaW5lTG9jYWxDcGFDb25maWdOZXc6ZGVmYXVsdCx1cFNwYWNlQ2hlY2tEaWZmUmF0aW9FeHA6ZXhwX21icyxzcGxhc2hfaW50ZXJmYWNlX2Rvd25ncmFkZTpiYXNlLGZvcmJpZGRlbl9kaXJlY3RfanVtcDpiYXNlLG1pbmlnYW1lX2JvbnVzX2V4cDpyZW1haW4sZW5hYmxlQXBwc3RvcmVEaXJlY3Q6ZXhwXzEsZnJlcV9pbmZvX3JvdXRpbmc6c2hqZF9zeWNwYl9mcmVxX3Rhc2tfY2x1c3Rlcl8xLHNlYXJjaF9hZHNfbWluX2JpZDpkZWZhdWx0LG9wZW5OZXdHZFByZXZpZXc6ZXhwLGRpc2FibGVfaWxsZWdhbF9vbmVfanVtcDpiYXNlLGNvYXJzZV9xdW90YV9jb250cm9sOmJhc2VfMDMyNCxmbHlfZHluYW1pY0FudG91OmJhc2UsQWlFeHBTdG9yeTpiYXNlLGRwYTJSZWNhbGw6Y2hvb3NlX3Byb2R1Y3RzX2Jhc2VfNTAsc2VhcmNoX25ld190YXJnZXRpbmc6YmFzZSxlbmFibGVfbW9kZWxfZGV0YWlsX3RyYWNrZXI6YmFzZSxEcGEyQ1ZSVGhyZXNob2xkOmpkX2N2cl8yMDAsY3RyX3RfZXhwOnQxLjAscGNTZWFyY2g6ZXhwLGVjb21fbWFpbl9zZWFyY2g65a+554Wn57uELGNvYXJzZTpjb2Fyc2VfY3ZyX25ld2NvbnYsZnJlcV9taWdyYXRlOmV4cF9lbmdpbmVfd2l0aF9zdHJpY3RfYnJ1c2g1LHN3aXRjaEJzUGdSZXFSYXRpbzpjbG9zZSxzZWFyY2hfcmVhbHRpbWVfdHJpZ2dlcjpjb25zdGFudCxBaUV4cEZlZWRzOmJhc2UsbWJzX3JlZmFjdG9yOmV4cDIsdWVzX3NlYXJjaDpkZWZhdWx0LHVuZGVyZnJhbWVfbXVsdGlfYWRzOmJhc2UsYWlnY19hbnRvdV9pbWFnZTpiYXNlXzAzMjYsbWl4ZXJfZnVzaW9uX2RpbWVuc2lvbjpnMixyb2xsb3V0X2xpc3R3aXNlX2Jpem1peGVyX2J1Z19maXg6YmFzZSx1c2VCc0ZpbmRhOmZpbmRhX3gsZmx5X3B1cF9lY3BtOmNvbnN0YW50LGZseV9jdHJfaW5saW5lOm1vZGVsLHRlc3RfcGVnYXN1c19wb3M6YmFzZSx0ZXN0X3N0b3J5X3BhY2s6ZXhwIDIsc3RvcnlfYWRsb2FkXzM6MTQsc2RwYV9kaXZlcnNpZnk6Y29uc3RhbnQyLG1pbmlfZ2FtZV9zY2VuZTpiYXNlLGN0cl9kaWx1Y19lbWJfbGF5ZXI6ZXhwcl9lbWJfZGlsdWMscm9pX2J4aWFveW91X25ldzpkZWZhdWx0LEluZHVzdHJ5Tm9UYXJnZXRGaWx0ZXJMYXllcjpleHAsY3JlYXRpdmVfYXZpZF90YWIzOmV4cF8wNTI3LHN0eWxlX2FiaWxpdHlfb2ZmbGluZTpiYXNlLHVuZGVyZnJhbWVfYnJhbmRfaGlnaDpiYXNlLGNyb3dkX2VjcGM6b3Blbl92Mix0c21fdjJfbGF5ZXI6YmFzZSxtaXhlcl9saXN0d2lzZV9wZWdhc3VzOmc1LHVzZUFzUGc6bWFpbl8yNDEyMjcsc3BsaXRfYnVja2V0OmJ1Y2tldF8zLGdsb2JhbF9yZXZlcnNlOmJhc2UscGxhdGZvcm06ZGVmYXVsdKABALIBICjf18utGMJMWQj0kF8utyJl8gRyHD1TIq1K6aKZR3vRugFCaHR0cHM6Ly9xcnNqLmJpbGlnYW1lLmNvbS9nY3h6L2g1Lz9zb3VyY2VGcm9tPTc3NyZzb3VyY2VUeXBlPWFkUHV0wgEA0gEA2AHQAeABAOgBAPABAIACAogCALgCAMACANACANgCAOoCAPACrIYl+AIAiAMGkgMAqAMAsAMAuAMAwgMAyAMX0gOWAXsiMTYiOiIxMjE1NDYwXzAiLCIxNyI6IjQzMzYiLCIxIjoiMTAxNzg0NjY0OTk1OTc0NzU4NCIsIjIiOiIxMjUyMzkzIiwiMyI6IjEyNTIzOTMiLCI2IjoiMTI1MjM5M18wIiwiMTIiOiI0MzM4IiwiMTMiOiIxMjE1NDYwIiwiMTQiOiI4ODciLCIxNSI6IjEzNjkifeADAOgDAPADAPoDBW90aGVyggQJbnVsbDpudWxsmAQAoAQAqgQECAAQBLAEAOIEwwE1Ni57InBzSWQiOjUyMTE4LCJ2MiI6IkFXVXMyZTBidEhmWTVCSzJ0LUQ0U3lNRGJtN2Z1SGIyYmlIREhsTnBjQlB1U2dVRzdLaW80dUkyNXlSdFJXQU5WUnRMbll1OVpxOElrdkVYZURfUmlER25BeTE0UV9CMlAtSzJmQ3pzMWZLQmY5WjZPUSJ9OzYzLnsicHNJZCI6NTIwNjYsInYyIjoiUWcifTs3MC57InBzSWQiOjUwMDQxLCJ2MiI6IktBIn2gBQDIBQPSBQA=",
              "client_ip": "182.89.224.34",
              "server_type": 1,
              "resource_id": 4336,
              "index": 2,
              "cm_mark": 1,
              "extra": {
                "use_ad_web_v2": false,
                "show_urls": [
                  ""
                ],
                "click_urls": [],
                "download_whitelist": [],
                "card": {
                  "card_type": 0,
                  "title": "今日全球首发，千件外观福利免费领",
                  "covers": [
                    {
                      "url": "https://i0.hdslb.com/bfs/sycp/creative_img/202504/bbd7cc4e6a74508e9ccee467541cc06a.jpg",
                      "loop": 0,
                      "image_height": 0,
                      "image_width": 0,
                      "gif_tag_show": false,
                      "jump_url": "",
                      "title": "",
                      "desc": ""
                    }
                  ],
                  "jump_url": "https://qrsj.biligame.com/gcxz/h5/?sourceFrom=777&sourceType=adPut",
                  "desc": "",
                  "callup_url": "",
                  "long_desc": "",
                  "ad_tag": "",
                  "extra_desc": "",
                  "universal_app": "",
                  "duration": "",
                  "adver": {
                    "adver_id": 1252393,
                    "adver_type": 3
                  },
                  "extreme_team_status": false,
                  "support_transition": false,
                  "under_player_interaction_style": 0,
                  "referral_pop_active_time": 10000,
                  "grade_denominator": 0,
                  "star_level": 0,
                  "live_booking_population_threshold": 0,
                  "ori_mark_hidden": 0,
                  "use_multi_cover": false,
                  "custom_feedback_panels": [],
                  "yellow_cart_pannel_pullup": 0,
                  "yellow_cart_pannel_version": 0,
                  "goods_item_id": 0,
                  "story_interaction_style": 0,
                  "videos": [],
                  "download_area": 0,
                  "goods_pannel_show": 0,
                  "goods_panel_show": 0,
                  "show_pop_window": 0,
                  "search_show_adbutton": 0,
                  "jump_interaction_style": 0,
                  "live_page_type": 0,
                  "ad_tag_style": {
                    "type": 4,
                    "text": "",
                    "text_color": "",
                    "bg_border_color": "",
                    "bg_color": "",
                    "border_color": "",
                    "img_url": "https://i0.hdslb.com/bfs/sycp/mng/202408/34463051f8d45a6d3c20f8aff31aad9b.png",
                    "img_height": 48,
                    "img_width": 72
                  },
                  "feedback_panel": {
                    "panel_type_text": "广告",
                    "feedback_panel_detail": [],
                    "toast": "将减少相似广告推荐",
                    "close_rec_tips": "操作成功",
                    "open_rec_tips": "将减少展示此类广告"
                  },
                  "fold_time": 0,
                  "live_room_popularity": 0,
                  "live_tag_show": false,
                  "quality_infos": [],
                  "dynamic_text": "今日全球首发，千件外观福利免费领",
                  "choose_button_list": [],
                  "grade_level": 0,
                  "anim_in_enable": 0,
                  "underframe_card_style": 0,
                  "playpage_card_style": 0,
                  "live_auto_play": false,
                  "original_style_level": 0,
                  "live_card_show": false,
                  "enable_tag_move_up": 0,
                  "item_source": 0,
                  "closed_loop_item": 0,
                  "desc_type": 0,
                  "comment_use_game_page": 0,
                  "story_takeoff_interaction_style": 0
                },
                "report_time": 2000,
                "sales_type": 31,
                "special_industry": false,
                "preload_landingpage": 0,
                "enable_share": true,
                "share_info": {
                  "title": "今日全球首发，千件外观福利免费领",
                  "subtitle": "",
                  "image_url": "https://i0.hdslb.com/bfs/sycp/creative_img/202504/3eba2979cb9525f14633a39c9f2ec2ab.jpg"
                },
                "upzone_entrance_type": 0,
                "upzone_entrance_report_id": 0,
                "click_area": 0,
                "shop_id": 0,
                "up_mid": 0,
                "track_id": "pbaes.DXUvRhr8IAhiFZ60KoOBStL0Na80m-kKS6CwFKDBtlzOwGJZu7il0VbEU3j2A_dZ96EXDGonAHs9Qx-5X2XbovyGP-xL4lyr_c_3rDZs4q3frmVjEGhu2VPOE5MRHF3AdryKsZiIGCl_f6ZD0y-cNQ==",
                "enable_store_direct_launch": 0,
                "enable_double_jump": false,
                "from_track_id": "all_49.router-pegasus-2021478-7d7955f987-td5kj.1745482993998.1007",
                "store_callup_card": false,
                "enable_h5_alert": false,
                "special_industry_style": 0,
                "macro_replace_priority": 1,
                "feedback_panel_style": 0,
                "ad_content_type": 0,
                "enable_h5_pre_load": 0,
                "hot_activity_id": 0,
                "middle_show_urls": [],
                "middle_click_urls": [],
                "product_id": 0,
                "landingpage_download_style": 2,
                "download_url_type": 0,
                "enable_auto_callup": 0,
                "top_live_stay_time_seconds": 0,
                "vipshop_fast_framework": 0,
                "lottery_id": 0,
                "enable_openapk_dialog": false,
                "user_cancel_jump_type": 0,
                "comment_toast_open": 0,
                "comment_biz_type": 0,
                "app_exp_params": "{\"pegasus_live_inline_background_fill\":0,\"story_live_goods_card_style\":{\"first_type\":1,\"second_type\":2,\"delay_time\":3000}}"
              }
            }
          },
          {
            "card_type": "small_cover_v2",
            "card_goto": "av",
            "goto": "av",
            "param": "114375012651120",
            "cover": "http://i1.hdslb.com/bfs/archive/05ec862caac777f9d7d06175becf0413b9c653ee.jpg",
            "title": "「小白」红米Turbo 4 Pro 性能体验：首台8sGen4量产机表现如何？",
            "uri": "bilibili://video/114375012651120?cid=29550644277&player_height=1890&player_preload=%7B%22expire_time%22%3A1745486594%2C%22cid%22%3A29550644277%2C%22quality%22%3A32%2C%22file_info%22%3A%7B%2216%22%3A%7B%22infos%22%3A%5B%7B%22filesize%22%3A2121663%2C%22timelength%22%3A230900%7D%5D%7D%2C%2232%22%3A%7B%22infos%22%3A%5B%7B%22filesize%22%3A3606019%2C%22timelength%22%3A230900%7D%5D%7D%2C%2264%22%3A%7B%22infos%22%3A%5B%7B%22filesize%22%3A6733527%2C%22timelength%22%3A230900%7D%5D%7D%2C%2280%22%3A%7B%22infos%22%3A%5B%7B%22filesize%22%3A10362311%2C%22timelength%22%3A230900%7D%5D%7D%7D%2C%22video_codecid%22%3A7%2C%22video_project%22%3Atrue%2C%22dash%22%3A%7B%22video%22%3A%5B%7B%22id%22%3A32%2C%22base_url%22%3A%22http%3A%2F%2F123.184.35.33%3A8000%2Fv1%2Fresource%2F29550644277-1-100047.m4s%3Fagrr%3D1%5Cu0026build%3D8410300%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026bvc%3Dvod%5Cu0026bw%3D125426%5Cu0026deadline%3D1745490194%5Cu0026dl%3D0%5Cu0026e%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026f%3DU_0_0%5Cu0026gen%3Dplayurlv3%5Cu0026mcdnid%3D50007224%5Cu0026mid%3D479396940%5Cu0026nbs%3D1%5Cu0026nettype%3D0%5Cu0026og%3Dcos%5Cu0026oi%3D3059343394%5Cu0026orderid%3D0%252C3%5Cu0026os%3Dmcdn%5Cu0026platform%3Dandroid%5Cu0026sign%3D158098%5Cu0026tag%3D%5Cu0026traceid%3DtrANPsmzTXNczh_0_U_a%5Cu0026uipk%3D5%5Cu0026uparams%3De%252Ctag%252Cnbs%252Coi%252Cplatform%252Ctrid%252Cmid%252Cdeadline%252Cuipk%252Cgen%252Cos%252Cog%5Cu0026upsig%3Df6ea272dedd17383c1a7c43a39471036%22%2C%22bandwidth%22%3A124895%2C%22codecid%22%3A7%2C%22size%22%3A3606019%2C%22frame_rate%22%3A%2224.991%22%2C%22backup_url%22%3A%5B%22http%3A%2F%2F211.141.224.92%3A4480%2Fupgcxcode%2F77%2F42%2F29550644277%2F29550644277-1-100047.m4s%3Fe%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026tag%3D%5Cu0026nbs%3D1%5Cu0026oi%3D3059343394%5Cu0026platform%3Dandroid%5Cu0026trid%3D000056fb961696ed4d6bb208acb9ce431b1U%5Cu0026mid%3D479396940%5Cu0026deadline%3D1745490194%5Cu0026uipk%3D5%5Cu0026gen%3Dplayurlv3%5Cu0026os%3Dmcdn%5Cu0026og%3Dcos%5Cu0026upsig%3Df6ea272dedd17383c1a7c43a39471036%5Cu0026uparams%3De%2Ctag%2Cnbs%2Coi%2Cplatform%2Ctrid%2Cmid%2Cdeadline%2Cuipk%2Cgen%2Cos%2Cog%5Cu0026mcdnid%3D50007224%5Cu0026bvc%3Dvod%5Cu0026nettype%3D0%5Cu0026bw%3D125426%5Cu0026build%3D8410300%5Cu0026dl%3D0%5Cu0026f%3DU_0_0%5Cu0026agrr%3D1%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026orderid%3D0%2C3%22%2C%22http%3A%2F%2Fupos-sz-estgoss.bilivideo.com%2Fupgcxcode%2F77%2F42%2F29550644277%2F29550644277-1-100047.m4s%3Fe%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026tag%3D%5Cu0026gen%3Dplayurlv3%5Cu0026os%3Dupos%5Cu0026og%3Dcos%5Cu0026trid%3D56fb961696ed4d6bb208acb9ce431b1U%5Cu0026mid%3D479396940%5Cu0026deadline%3D1745490194%5Cu0026nbs%3D1%5Cu0026oi%3D3059343394%5Cu0026uipk%3D5%5Cu0026platform%3Dandroid%5Cu0026upsig%3D464e03491d78d3249012e6c9affbb768%5Cu0026uparams%3De%2Ctag%2Cgen%2Cos%2Cog%2Ctrid%2Cmid%2Cdeadline%2Cnbs%2Coi%2Cuipk%2Cplatform%5Cu0026bvc%3Dvod%5Cu0026nettype%3D0%5Cu0026bw%3D125426%5Cu0026agrr%3D1%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026build%3D8410300%5Cu0026dl%3D0%5Cu0026f%3DU_0_0%5Cu0026orderid%3D1%2C3%22%5D%2C%22audio_id%22%3A30216%7D%2C%7B%22id%22%3A32%2C%22base_url%22%3A%22http%3A%2F%2F59.47.230.23%3A8000%2Fv1%2Fresource%2F29550644277-1-30033.m4s%3Fagrr%3D1%5Cu0026build%3D8410300%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026bvc%3Dvod%5Cu0026bw%3D131973%5Cu0026deadline%3D1745490194%5Cu0026dl%3D0%5Cu0026e%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026f%3DU_0_0%5Cu0026gen%3Dplayurlv3%5Cu0026mcdnid%3D50007224%5Cu0026mid%3D479396940%5Cu0026nbs%3D1%5Cu0026nettype%3D0%5Cu0026og%3Dcos%5Cu0026oi%3D3059343394%5Cu0026orderid%3D0%252C3%5Cu0026os%3Dmcdn%5Cu0026platform%3Dandroid%5Cu0026sign%3D2d5ae2%5Cu0026tag%3D%5Cu0026traceid%3DtrQICyqgrXBqnY_0_U_a%5Cu0026uipk%3D5%5Cu0026uparams%3De%252Cnbs%252Coi%252Cuipk%252Cmid%252Cdeadline%252Cog%252Cplatform%252Ctrid%252Ctag%252Cgen%252Cos%5Cu0026upsig%3D855d6f99090897394e531af9d9cc6dc8%22%2C%22bandwidth%22%3A131411%2C%22codecid%22%3A12%2C%22size%22%3A3794237%2C%22frame_rate%22%3A%2224.991%22%2C%22backup_url%22%3A%5B%22http%3A%2F%2F122.191.18.170%3A8000%2Fv1%2Fresource%2F29550644277-1-30033.m4s%3Fagrr%3D1%5Cu0026build%3D8410300%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026bvc%3Dvod%5Cu0026bw%3D131973%5Cu0026deadline%3D1745490194%5Cu0026dl%3D0%5Cu0026e%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026f%3DU_0_0%5Cu0026gen%3Dplayurlv3%5Cu0026mid%3D479396940%5Cu0026nbs%3D1%5Cu0026nettype%3D0%5Cu0026og%3Dcos%5Cu0026oi%3D3059343394%5Cu0026orderid%3D1%252C3%5Cu0026os%3Dcoso1bv%5Cu0026platform%3Dandroid%5Cu0026sign%3D2d5ae2%5Cu0026tag%3D%5Cu0026traceid%3DtrxqpZsZboLcyN_0_U_a%5Cu0026uipk%3D5%5Cu0026uparams%3De%252Cuipk%252Cplatform%252Ctag%252Cos%252Cog%252Cnbs%252Coi%252Ctrid%252Cmid%252Cdeadline%252Cgen%5Cu0026upsig%3D42f974aacd3f2a9a6ba659f11e469614%22%2C%22http%3A%2F%2F211.141.224.92%3A4480%2Fupgcxcode%2F77%2F42%2F29550644277%2F29550644277-1-30033.m4s%3Fe%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026nbs%3D1%5Cu0026oi%3D3059343394%5Cu0026uipk%3D5%5Cu0026mid%3D479396940%5Cu0026deadline%3D1745490194%5Cu0026og%3Dcos%5Cu0026platform%3Dandroid%5Cu0026trid%3D000056fb961696ed4d6bb208acb9ce431b1U%5Cu0026tag%3D%5Cu0026gen%3Dplayurlv3%5Cu0026os%3Dmcdn%5Cu0026upsig%3D855d6f99090897394e531af9d9cc6dc8%5Cu0026uparams%3De%2Cnbs%2Coi%2Cuipk%2Cmid%2Cdeadline%2Cog%2Cplatform%2Ctrid%2Ctag%2Cgen%2Cos%5Cu0026mcdnid%3D50007224%5Cu0026bvc%3Dvod%5Cu0026nettype%3D0%5Cu0026bw%3D131973%5Cu0026build%3D8410300%5Cu0026dl%3D0%5Cu0026f%3DU_0_0%5Cu0026agrr%3D1%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026orderid%3D0%2C3%22%5D%2C%22audio_id%22%3A30216%7D%5D%2C%22audio%22%3A%5B%7B%22id%22%3A30216%2C%22base_url%22%3A%22http%3A%2F%2F121.31.234.218%3A8000%2Fv1%2Fresource%2F29550644277-1-30216.m4s%3Fagrr%3D1%5Cu0026build%3D8410300%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026bvc%3Dvod%5Cu0026bw%3D43505%5Cu0026deadline%3D1745490194%5Cu0026dl%3D0%5Cu0026e%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026f%3DU_0_0%5Cu0026gen%3Dplayurlv3%5Cu0026mcdnid%3D50007224%5Cu0026mid%3D479396940%5Cu0026nbs%3D1%5Cu0026nettype%3D0%5Cu0026og%3Dhw%5Cu0026oi%3D3059343394%5Cu0026orderid%3D0%252C3%5Cu0026os%3Dmcdn%5Cu0026platform%3Dandroid%5Cu0026sign%3Db0263a%5Cu0026tag%3D%5Cu0026traceid%3DtrDHNJjmfaaueG_0_U_a%5Cu0026uipk%3D5%5Cu0026uparams%3De%252Cplatform%252Ctrid%252Cmid%252Cdeadline%252Cnbs%252Cgen%252Coi%252Cuipk%252Ctag%252Cos%252Cog%5Cu0026upsig%3De92887e43514a81bad4594c670c509d1%22%2C%22bandwidth%22%3A43292%2C%22size%22%3A1250775%2C%22backup_url%22%3A%5B%22http%3A%2F%2F211.141.225.131%3A8000%2Fv1%2Fresource%2F29550644277-1-30216.m4s%3Fagrr%3D1%5Cu0026build%3D8410300%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026bvc%3Dvod%5Cu0026bw%3D43505%5Cu0026deadline%3D1745490194%5Cu0026dl%3D0%5Cu0026e%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026f%3DU_0_0%5Cu0026gen%3Dplayurlv3%5Cu0026mid%3D479396940%5Cu0026nbs%3D1%5Cu0026nettype%3D0%5Cu0026og%3Dhw%5Cu0026oi%3D3059343394%5Cu0026orderid%3D1%252C3%5Cu0026os%3D08hbv%5Cu0026platform%3Dandroid%5Cu0026sign%3Db0263a%5Cu0026tag%3D%5Cu0026traceid%3DtrnTeKCShifUBc_0_U_a%5Cu0026uipk%3D5%5Cu0026uparams%3De%252Cgen%252Cog%252Cdeadline%252Ctag%252Cnbs%252Cplatform%252Ctrid%252Cos%252Cmid%252Coi%252Cuipk%5Cu0026upsig%3D313f602e2d41ebe9637a95fc20bceb93%22%2C%22http%3A%2F%2F211.141.224.92%3A4480%2Fupgcxcode%2F77%2F42%2F29550644277%2F29550644277-1-30216.m4s%3Fe%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026platform%3Dandroid%5Cu0026trid%3D000056fb961696ed4d6bb208acb9ce431b1U%5Cu0026mid%3D479396940%5Cu0026deadline%3D1745490194%5Cu0026nbs%3D1%5Cu0026gen%3Dplayurlv3%5Cu0026oi%3D3059343394%5Cu0026uipk%3D5%5Cu0026tag%3D%5Cu0026os%3Dmcdn%5Cu0026og%3Dhw%5Cu0026upsig%3De92887e43514a81bad4594c670c509d1%5Cu0026uparams%3De%2Cplatform%2Ctrid%2Cmid%2Cdeadline%2Cnbs%2Cgen%2Coi%2Cuipk%2Ctag%2Cos%2Cog%5Cu0026mcdnid%3D50007224%5Cu0026bvc%3Dvod%5Cu0026nettype%3D0%5Cu0026bw%3D43505%5Cu0026f%3DU_0_0%5Cu0026agrr%3D1%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026build%3D8410300%5Cu0026dl%3D0%5Cu0026orderid%3D0%2C3%22%5D%7D%2C%7B%22id%22%3A30280%2C%22base_url%22%3A%22http%3A%2F%2F211.97.94.165%3A8000%2Fv1%2Fresource%2F29550644277-1-30280.m4s%3Fagrr%3D1%5Cu0026build%3D8410300%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026bvc%3Dvod%5Cu0026bw%3D43504%5Cu0026deadline%3D1745490194%5Cu0026dl%3D0%5Cu0026e%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026f%3DU_0_0%5Cu0026gen%3Dplayurlv3%5Cu0026mcdnid%3D50007224%5Cu0026mid%3D479396940%5Cu0026nbs%3D1%5Cu0026nettype%3D0%5Cu0026og%3Dcos%5Cu0026oi%3D3059343394%5Cu0026orderid%3D0%252C3%5Cu0026os%3Dmcdn%5Cu0026platform%3Dandroid%5Cu0026sign%3D3f3ed4%5Cu0026tag%3D%5Cu0026traceid%3DtrQHmKzoFdDeCw_0_U_a%5Cu0026uipk%3D5%5Cu0026uparams%3De%252Cuipk%252Ctag%252Cnbs%252Cgen%252Cos%252Cog%252Coi%252Cplatform%252Ctrid%252Cmid%252Cdeadline%5Cu0026upsig%3D808cd1429841f75b1ccd7ccdc5de7bc3%22%2C%22bandwidth%22%3A43292%2C%22size%22%3A1250767%2C%22backup_url%22%3A%5B%22http%3A%2F%2F123.184.35.19%3A8000%2Fv1%2Fresource%2F29550644277-1-30280.m4s%3Fagrr%3D1%5Cu0026build%3D8410300%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026bvc%3Dvod%5Cu0026bw%3D43504%5Cu0026deadline%3D1745490194%5Cu0026dl%3D0%5Cu0026e%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026f%3DU_0_0%5Cu0026gen%3Dplayurlv3%5Cu0026mid%3D479396940%5Cu0026nbs%3D1%5Cu0026nettype%3D0%5Cu0026og%3Dcos%5Cu0026oi%3D3059343394%5Cu0026orderid%3D1%252C3%5Cu0026os%3Dupos%5Cu0026platform%3Dandroid%5Cu0026sign%3D3f3ed4%5Cu0026tag%3D%5Cu0026traceid%3DtrtSntUkmmkWVz_0_U_a%5Cu0026uipk%3D5%5Cu0026uparams%3De%252Cplatform%252Ctag%252Cnbs%252Cog%252Ctrid%252Cmid%252Cdeadline%252Coi%252Cuipk%252Cgen%252Cos%5Cu0026upsig%3D070e2e2176dd7e2d87777b20161c8d1f%22%2C%22http%3A%2F%2F211.141.224.92%3A4480%2Fupgcxcode%2F77%2F42%2F29550644277%2F29550644277-1-30280.m4s%3Fe%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026uipk%3D5%5Cu0026tag%3D%5Cu0026nbs%3D1%5Cu0026gen%3Dplayurlv3%5Cu0026os%3Dmcdn%5Cu0026og%3Dcos%5Cu0026oi%3D3059343394%5Cu0026platform%3Dandroid%5Cu0026trid%3D000056fb961696ed4d6bb208acb9ce431b1U%5Cu0026mid%3D479396940%5Cu0026deadline%3D1745490194%5Cu0026upsig%3D808cd1429841f75b1ccd7ccdc5de7bc3%5Cu0026uparams%3De%2Cuipk%2Ctag%2Cnbs%2Cgen%2Cos%2Cog%2Coi%2Cplatform%2Ctrid%2Cmid%2Cdeadline%5Cu0026mcdnid%3D50007224%5Cu0026bvc%3Dvod%5Cu0026nettype%3D0%5Cu0026bw%3D43504%5Cu0026dl%3D0%5Cu0026f%3DU_0_0%5Cu0026agrr%3D1%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026build%3D8410300%5Cu0026orderid%3D0%2C3%22%5D%7D%2C%7B%22id%22%3A30232%2C%22base_url%22%3A%22http%3A%2F%2F125.106.124.64%3A8000%2Fv1%2Fresource%2F29550644277-1-30232.m4s%3Fagrr%3D1%5Cu0026build%3D8410300%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026bvc%3Dvod%5Cu0026bw%3D43504%5Cu0026deadline%3D1745490194%5Cu0026dl%3D0%5Cu0026e%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026f%3DU_0_0%5Cu0026gen%3Dplayurlv3%5Cu0026mcdnid%3D50007224%5Cu0026mid%3D479396940%5Cu0026nbs%3D1%5Cu0026nettype%3D0%5Cu0026og%3Dhw%5Cu0026oi%3D3059343394%5Cu0026orderid%3D0%252C3%5Cu0026os%3Dmcdn%5Cu0026platform%3Dandroid%5Cu0026sign%3D3ad163%5Cu0026tag%3D%5Cu0026traceid%3DtrsSvqSMaoCcOa_1_U_a%5Cu0026uipk%3D5%5Cu0026uparams%3De%252Ctag%252Cuipk%252Cgen%252Cos%252Cog%252Ctrid%252Cmid%252Cdeadline%252Cnbs%252Coi%252Cplatform%5Cu0026upsig%3D219bdbd1641753ddc8555f788bc21711%22%2C%22bandwidth%22%3A43292%2C%22size%22%3A1250767%2C%22backup_url%22%3A%5B%22http%3A%2F%2F220.200.12.159%3A5889%2Fv1%2Fresource%2F29550644277-1-30232.m4s%3Fagrr%3D1%5Cu0026build%3D8410300%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026bvc%3Dvod%5Cu0026bw%3D43504%5Cu0026deadline%3D1745490194%5Cu0026dl%3D0%5Cu0026e%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026f%3DU_0_0%5Cu0026gen%3Dplayurlv3%5Cu0026mid%3D479396940%5Cu0026nbs%3D1%5Cu0026nettype%3D0%5Cu0026og%3Dhw%5Cu0026oi%3D3059343394%5Cu0026orderid%3D1%252C3%5Cu0026os%3D08hbv%5Cu0026platform%3Dandroid%5Cu0026sign%3D3ad163%5Cu0026tag%3D%5Cu0026traceid%3DtrQVqwCtxAuTKK_2_U_a%5Cu0026uipk%3D5%5Cu0026uparams%3De%252Ctag%252Coi%252Ctrid%252Cdeadline%252Cgen%252Cos%252Cnbs%252Cuipk%252Cplatform%252Cmid%252Cog%5Cu0026upsig%3Dc45e0be8a46a1b1456b066fc447dcf4a%22%2C%22http%3A%2F%2F211.141.224.92%3A4480%2Fupgcxcode%2F77%2F42%2F29550644277%2F29550644277-1-30232.m4s%3Fe%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026tag%3D%5Cu0026uipk%3D5%5Cu0026gen%3Dplayurlv3%5Cu0026os%3Dmcdn%5Cu0026og%3Dhw%5Cu0026trid%3D000056fb961696ed4d6bb208acb9ce431b1U%5Cu0026mid%3D479396940%5Cu0026deadline%3D1745490194%5Cu0026nbs%3D1%5Cu0026oi%3D3059343394%5Cu0026platform%3Dandroid%5Cu0026upsig%3D219bdbd1641753ddc8555f788bc21711%5Cu0026uparams%3De%2Ctag%2Cuipk%2Cgen%2Cos%2Cog%2Ctrid%2Cmid%2Cdeadline%2Cnbs%2Coi%2Cplatform%5Cu0026mcdnid%3D50007224%5Cu0026bvc%3Dvod%5Cu0026nettype%3D0%5Cu0026bw%3D43504%5Cu0026f%3DU_0_0%5Cu0026agrr%3D1%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026build%3D8410300%5Cu0026dl%3D0%5Cu0026orderid%3D0%2C3%22%5D%7D%5D%7D%2C%22fnval%22%3A272%2C%22accept_formats%22%3A%5B%7B%22quality%22%3A116%2C%22format%22%3A%22flv_p60%22%2C%22description%22%3A%22%E9%AB%98%E6%B8%85%201080P60%22%2C%22new_description%22%3A%221080P%2060%E5%B8%A7%22%2C%22display_desc%22%3A%221080P%22%2C%22superscript%22%3A%2260%E5%B8%A7%22%2C%22need_vip%22%3Atrue%2C%22need_login%22%3Atrue%7D%2C%7B%22quality%22%3A80%2C%22format%22%3A%22flv%22%2C%22description%22%3A%22%E9%AB%98%E6%B8%85%201080P%22%2C%22new_description%22%3A%221080P%20%E9%AB%98%E6%B8%85%22%2C%22display_desc%22%3A%221080P%22%2C%22need_login%22%3Atrue%7D%2C%7B%22quality%22%3A64%2C%22format%22%3A%22flv720%22%2C%22description%22%3A%22%E9%AB%98%E6%B8%85%20720P%22%2C%22new_description%22%3A%22720P%20%E5%87%86%E9%AB%98%E6%B8%85%22%2C%22display_desc%22%3A%22720P%22%2C%22need_login%22%3Atrue%7D%2C%7B%22quality%22%3A32%2C%22format%22%3A%22flv480%22%2C%22description%22%3A%22%E6%B8%85%E6%99%B0%20480P%22%2C%22new_description%22%3A%22480P%20%E6%A0%87%E6%B8%85%22%2C%22display_desc%22%3A%22480P%22%7D%2C%7B%22quality%22%3A16%2C%22format%22%3A%22mp4%22%2C%22description%22%3A%22%E6%B5%81%E7%95%85%20360P%22%2C%22new_description%22%3A%22360P%20%E6%B5%81%E7%95%85%22%2C%22display_desc%22%3A%22360P%22%7D%5D%2C%22volume%22%3A%7B%22measured_i%22%3A-18.2%2C%22measured_lra%22%3A5.9%2C%22measured_tp%22%3A-1.3%2C%22measured_threshold%22%3A-28.3%2C%22target_offset%22%3A0.5%2C%22target_i%22%3A-14%2C%22target_tp%22%3A-1%2C%22multi_scene_args%22%3A%7B%22high_dynamic_target_i%22%3A%22-24%22%2C%22normal_target_i%22%3A%22-14%22%2C%22undersized_target_i%22%3A%22-28%22%7D%7D%2C%22union_player%22%3A%7B%22biz_type%22%3A1%2C%22dimension%22%3A%7B%22width%22%3A4096%2C%22height%22%3A1890%7D%2C%22aid%22%3A114375012651120%7D%2C%22auto_qn_ctl%22%3A%7B%22login_half%22%3A32%2C%22nologin_half%22%3A32%2C%22login_full%22%3A80%2C%22nologin_full%22%3A32%2C%22mobile_login_full%22%3A80%2C%22mobile_nologin_full%22%3A32%7D%2C%22qn_exp%22%3A%7B%22qn_exp_1%22%3Atrue%7D%7D&player_rotate=0&player_width=4096&report_flow_data=%7B%22flow_card_type%22%3A%22av%22%2C%22flow_source%22%3A%22click_u2i%24ann_dssm_u2i_28d%24dssm_u2u%22%7D&trackid=all_49.router-pegasus-2021478-7d7955f987-td5kj.1745482993998.1007",
            "three_point": {
              "dislike_reasons": [
                {
                  "id": 4,
                  "name": "UP主:小白测评",
                  "toast": "将减少相似内容推荐"
                },
                {
                  "id": 3,
                  "name": "频道:骁龙8s Gen4",
                  "toast": "将减少相似内容推荐"
                },
                {
                  "id": 12,
                  "name": "此类内容过多",
                  "toast": "将减少相似内容推荐"
                },
                {
                  "id": 13,
                  "name": "推荐过",
                  "toast": "将减少相似内容推荐"
                },
                {
                  "id": 1,
                  "name": "这个内容",
                  "toast": "将减少相似内容推荐"
                }
              ],
              "feedbacks": [
                {
                  "id": 1,
                  "name": "恐怖血腥",
                  "toast": "将优化首页此类内容"
                },
                {
                  "id": 2,
                  "name": "色情低俗",
                  "toast": "将优化首页此类内容"
                },
                {
                  "id": 3,
                  "name": "封面恶心",
                  "toast": "将优化首页此类内容"
                },
                {
                  "id": 4,
                  "name": "标题党/封面党",
                  "toast": "将优化首页此类内容"
                }
              ],
              "watch_later": 1
            },
            "args": {
              "up_id": 8969156,
              "up_name": "小白测评",
              "tid": 74460002,
              "tname": "骁龙8s Gen4",
              "aid": 114375012651120
            },
            "player_args": {
              "aid": 114375012651120,
              "cid": 29550644277,
              "type": "av",
              "duration": 231
            },
            "idx": 1745482990,
            "three_point_v2": [
              {
                "title": "添加至稍后再看",
                "type": "watch_later",
                "icon": "https://i0.hdslb.com/bfs/activity-plat/static/20240103/0977767b2e79d8ad0a36a731068a83d7/8VhmmUeWnO.png",
                "icon_night": "https://i0.hdslb.com/bfs/activity-plat/static/20240103/0977767b2e79d8ad0a36a731068a83d7/eIyDu5U7GA.png"
              },
              {
                "title": "反馈",
                "subtitle": "（选择后将优化首页此类内容）",
                "reasons": [
                  {
                    "id": 1,
                    "name": "恐怖血腥",
                    "toast": "将优化首页此类内容"
                  },
                  {
                    "id": 2,
                    "name": "色情低俗",
                    "toast": "将优化首页此类内容"
                  },
                  {
                    "id": 3,
                    "name": "封面恶心",
                    "toast": "将优化首页此类内容"
                  },
                  {
                    "id": 4,
                    "name": "标题党/封面党",
                    "toast": "将优化首页此类内容"
                  }
                ],
                "type": "feedback"
              },
              {
                "title": "我不想看",
                "subtitle": "（选择后将减少相似内容推荐）",
                "reasons": [
                  {
                    "id": 4,
                    "name": "UP主:小白测评",
                    "toast": "将减少相似内容推荐"
                  },
                  {
                    "id": 3,
                    "name": "频道:骁龙8s Gen4",
                    "toast": "将减少相似内容推荐",
                    "extend": "{\"tid\":\"74460002\"}"
                  },
                  {
                    "id": 3,
                    "name": "频道:科技猎手2025·1.0计划",
                    "toast": "将减少相似内容推荐",
                    "extend": "{\"tid\":\"74338017\"}"
                  },
                  {
                    "id": 12,
                    "name": "此类内容过多",
                    "toast": "将减少相似内容推荐"
                  },
                  {
                    "id": 13,
                    "name": "推荐过",
                    "toast": "将减少相似内容推荐"
                  },
                  {
                    "id": 1,
                    "name": "这个内容",
                    "toast": "将减少相似内容推荐"
                  }
                ],
                "type": "dislike"
              }
            ],
            "track_id": "all_49.router-pegasus-2021478-7d7955f987-td5kj.1745482993998.1007",
            "talk_back": "视频,「小白」红米Turbo 4 Pro 性能体验：首台8sGen4量产机表现如何？,39.5万观看,1654弹幕,时长3分钟51秒,UP主小白测评,",
            "report_flow_data": "{\"flow_card_type\":\"av\",\"flow_source\":\"click_u2i$ann_dssm_u2i_28d$dssm_u2u\"}",
            "three_point_v": "v2",
            "cover_left_text_1": "39.5万",
            "cover_left_icon_1": 1,
            "cover_left_1_content_description": "39.5万观看",
            "cover_left_text_2": "1654",
            "cover_left_icon_2": 3,
            "cover_left_2_content_description": "1654弹幕",
            "cover_right_text": "3:51",
            "cover_right_content_description": "3分钟51秒",
            "desc_button": {
              "text": "小白测评",
              "uri": "bilibili://space/8969156",
              "event": "nickname",
              "type": 1
            },
            "official_icon": 16,
            "can_play": 1,
            "goto_icon": {
              "icon_url": "https://i0.hdslb.com/bfs/activity-plat/static/20230227/0977767b2e79d8ad0a36a731068a83d7/077GOeHOfO.png",
              "icon_night_url": "https://i0.hdslb.com/bfs/activity-plat/static/20230227/0977767b2e79d8ad0a36a731068a83d7/ldbCXtkoK2.png",
              "icon_width": 16,
              "icon_height": 16
            },
            "cover_info_priority": 123
          },
          {
            "type": "static",
            "resource_id": 4336,
            "id": 1674583,
            "index": 3,
            "static_banner": {
              "id": 1674583,
              "title": "神舟二十号载人飞船今日发射",
              "image": "http://i0.hdslb.com/bfs/banner/3d3f17726926194173a2db2a68ff51fbe1081458.jpg",
              "hash": "e39cbd594c34ac3a0ec12a45dd6db0b5",
              "uri": "https://live.bilibili.com/21686237",
              "request_id": "1745482994326q172a27a87a21q3087",
              "src_id": 4339,
              "is_ad_loc": true,
              "client_ip": "182.89.224.34",
              "server_type": 0,
              "resource_id": 4336,
              "index": 3,
              "cm_mark": 0
            }
          }
        ]
      },
      {
        "card_type": "small_cover_v2",
        "card_goto": "av",
        "goto": "av",
        "param": "114369442680801",
        "cover": "http://i1.hdslb.com/bfs/archive/13d3bace40c362db92d5752aef3ebce24bbcbea3.jpg",
        "title": "【仿】《明日方舟》六周年庆典活动宣传PV",
        "uri": "bilibili://video/114369442680801?cid=29516958739&player_height=1080&player_preload=%7B%22expire_time%22%3A1745486594%2C%22cid%22%3A29516958739%2C%22quality%22%3A32%2C%22file_info%22%3A%7B%2216%22%3A%7B%22infos%22%3A%5B%7B%22filesize%22%3A8427938%2C%22timelength%22%3A239258%7D%5D%7D%2C%2232%22%3A%7B%22infos%22%3A%5B%7B%22filesize%22%3A14979728%2C%22timelength%22%3A239238%7D%5D%7D%2C%2264%22%3A%7B%22infos%22%3A%5B%7B%22filesize%22%3A28834092%2C%22timelength%22%3A239238%7D%5D%7D%2C%2280%22%3A%7B%22infos%22%3A%5B%7B%22filesize%22%3A48620682%2C%22timelength%22%3A239238%7D%5D%7D%7D%2C%22video_codecid%22%3A7%2C%22video_project%22%3Atrue%2C%22dash%22%3A%7B%22video%22%3A%5B%7B%22id%22%3A32%2C%22base_url%22%3A%22http%3A%2F%2F118.184.254.3%3A4480%2Fupgcxcode%2F39%2F87%2F29516958739%2F29516958739-1-100047.m4s%3Fe%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026nbs%3D1%5Cu0026oi%3D3059343394%5Cu0026uipk%3D5%5Cu0026platform%3Dandroid%5Cu0026gen%3Dplayurlv3%5Cu0026tag%3D%5Cu0026trid%3D000056fb961696ed4d6bb208acb9ce431b1U%5Cu0026mid%3D479396940%5Cu0026deadline%3D1745490194%5Cu0026os%3Dmcdn%5Cu0026og%3Dcos%5Cu0026upsig%3D83d78984e6c66cf9fb8f44e16af524dc%5Cu0026uparams%3De%2Cnbs%2Coi%2Cuipk%2Cplatform%2Cgen%2Ctag%2Ctrid%2Cmid%2Cdeadline%2Cos%2Cog%5Cu0026mcdnid%3D50021694%5Cu0026bvc%3Dvod%5Cu0026nettype%3D0%5Cu0026bw%3D501413%5Cu0026f%3DU_0_0%5Cu0026agrr%3D1%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026build%3D8410300%5Cu0026dl%3D0%5Cu0026orderid%3D0%2C3%22%2C%22bandwidth%22%3A500862%2C%22codecid%22%3A7%2C%22size%22%3A14979728%2C%22frame_rate%22%3A%2229.966%22%2C%22backup_url%22%3A%5B%22http%3A%2F%2Fupos-sz-estgoss.bilivideo.com%2Fupgcxcode%2F39%2F87%2F29516958739%2F29516958739-1-100047.m4s%3Fe%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026trid%3D56fb961696ed4d6bb208acb9ce431b1U%5Cu0026os%3Dupos%5Cu0026og%3Dcos%5Cu0026oi%3D3059343394%5Cu0026uipk%3D5%5Cu0026platform%3Dandroid%5Cu0026mid%3D479396940%5Cu0026deadline%3D1745490194%5Cu0026tag%3D%5Cu0026gen%3Dplayurlv3%5Cu0026nbs%3D1%5Cu0026upsig%3D4a9372dc47ff187acaddd4b1bb7ff762%5Cu0026uparams%3De%2Ctrid%2Cos%2Cog%2Coi%2Cuipk%2Cplatform%2Cmid%2Cdeadline%2Ctag%2Cgen%2Cnbs%5Cu0026bvc%3Dvod%5Cu0026nettype%3D0%5Cu0026bw%3D501413%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026build%3D8410300%5Cu0026dl%3D0%5Cu0026f%3DU_0_0%5Cu0026agrr%3D1%5Cu0026orderid%3D1%2C3%22%2C%22http%3A%2F%2Fupos-sz-estgoss.bilivideo.com%2Fupgcxcode%2F39%2F87%2F29516958739%2F29516958739-1-100047.m4s%3Fe%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026deadline%3D1745490194%5Cu0026gen%3Dplayurlv3%5Cu0026os%3Dupos%5Cu0026oi%3D3059343394%5Cu0026uipk%3D5%5Cu0026platform%3Dandroid%5Cu0026trid%3D56fb961696ed4d6bb208acb9ce431b1U%5Cu0026mid%3D479396940%5Cu0026tag%3D%5Cu0026nbs%3D1%5Cu0026og%3Dcos%5Cu0026upsig%3Df4d94d26f589bd25736ae575f46117cb%5Cu0026uparams%3De%2Cdeadline%2Cgen%2Cos%2Coi%2Cuipk%2Cplatform%2Ctrid%2Cmid%2Ctag%2Cnbs%2Cog%5Cu0026bvc%3Dvod%5Cu0026nettype%3D0%5Cu0026bw%3D501413%5Cu0026f%3DU_0_0%5Cu0026agrr%3D1%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026build%3D8410300%5Cu0026dl%3D0%5Cu0026orderid%3D2%2C3%22%5D%2C%22audio_id%22%3A30216%7D%2C%7B%22id%22%3A32%2C%22base_url%22%3A%22http%3A%2F%2F123.184.30.75%3A8000%2Fv1%2Fresource%2F29516958739-1-30033.m4s%3Fagrr%3D1%5Cu0026build%3D8410300%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026bvc%3Dvod%5Cu0026bw%3D261105%5Cu0026deadline%3D1745490194%5Cu0026dl%3D0%5Cu0026e%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026f%3DU_0_0%5Cu0026gen%3Dplayurlv3%5Cu0026mcdnid%3D50021694%5Cu0026mid%3D479396940%5Cu0026nbs%3D1%5Cu0026nettype%3D0%5Cu0026og%3Dcos%5Cu0026oi%3D3059343394%5Cu0026orderid%3D0%252C3%5Cu0026os%3Dmcdn%5Cu0026platform%3Dandroid%5Cu0026sign%3D6c5944%5Cu0026tag%3D%5Cu0026traceid%3DtrrIoIfTKBmhJG_0_U_a%5Cu0026uipk%3D5%5Cu0026uparams%3De%252Cnbs%252Cgen%252Cos%252Cog%252Cplatform%252Ctrid%252Cmid%252Ctag%252Coi%252Cuipk%252Cdeadline%5Cu0026upsig%3D20c184de73caf9072d6615826d43a023%22%2C%22bandwidth%22%3A260788%2C%22codecid%22%3A12%2C%22size%22%3A7800527%2C%22frame_rate%22%3A%2229.966%22%2C%22backup_url%22%3A%5B%22http%3A%2F%2F123.184.30.71%3A8000%2Fv1%2Fresource%2F29516958739-1-30033.m4s%3Fagrr%3D1%5Cu0026build%3D8410300%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026bvc%3Dvod%5Cu0026bw%3D261105%5Cu0026deadline%3D1745490194%5Cu0026dl%3D0%5Cu0026e%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026f%3DU_0_0%5Cu0026gen%3Dplayurlv3%5Cu0026mid%3D479396940%5Cu0026nbs%3D1%5Cu0026nettype%3D0%5Cu0026og%3Dcos%5Cu0026oi%3D3059343394%5Cu0026orderid%3D1%252C3%5Cu0026os%3Dcoso1bv%5Cu0026platform%3Dandroid%5Cu0026sign%3D6c5944%5Cu0026tag%3D%5Cu0026traceid%3DtrKFqEZMFxtfGx_0_U_a%5Cu0026uipk%3D5%5Cu0026uparams%3De%252Cplatform%252Cnbs%252Ctrid%252Cmid%252Cdeadline%252Ctag%252Coi%252Cuipk%252Cgen%252Cos%252Cog%5Cu0026upsig%3D026e2862050e3c63ac42d8c153b140bd%22%2C%22http%3A%2F%2F118.184.254.3%3A4480%2Fupgcxcode%2F39%2F87%2F29516958739%2F29516958739-1-30033.m4s%3Fe%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026nbs%3D1%5Cu0026gen%3Dplayurlv3%5Cu0026os%3Dmcdn%5Cu0026og%3Dcos%5Cu0026platform%3Dandroid%5Cu0026trid%3D000056fb961696ed4d6bb208acb9ce431b1U%5Cu0026mid%3D479396940%5Cu0026tag%3D%5Cu0026oi%3D3059343394%5Cu0026uipk%3D5%5Cu0026deadline%3D1745490194%5Cu0026upsig%3D20c184de73caf9072d6615826d43a023%5Cu0026uparams%3De%2Cnbs%2Cgen%2Cos%2Cog%2Cplatform%2Ctrid%2Cmid%2Ctag%2Coi%2Cuipk%2Cdeadline%5Cu0026mcdnid%3D50021694%5Cu0026bvc%3Dvod%5Cu0026nettype%3D0%5Cu0026bw%3D261105%5Cu0026agrr%3D1%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026build%3D8410300%5Cu0026dl%3D0%5Cu0026f%3DU_0_0%5Cu0026orderid%3D0%2C3%22%5D%2C%22audio_id%22%3A30216%7D%5D%2C%22audio%22%3A%5B%7B%22id%22%3A30216%2C%22base_url%22%3A%22http%3A%2F%2F183.229.247.224%3A6809%2Fv1%2Fresource%2F29516958739-1-30216.m4s%3Fagrr%3D1%5Cu0026build%3D8410300%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026bvc%3Dvod%5Cu0026bw%3D57268%5Cu0026deadline%3D1745490194%5Cu0026dl%3D0%5Cu0026e%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026f%3DU_0_0%5Cu0026gen%3Dplayurlv3%5Cu0026mcdnid%3D50021694%5Cu0026mid%3D479396940%5Cu0026nbs%3D1%5Cu0026nettype%3D0%5Cu0026og%3Dhw%5Cu0026oi%3D3059343394%5Cu0026orderid%3D0%252C3%5Cu0026os%3Dmcdn%5Cu0026platform%3Dandroid%5Cu0026sign%3Dc6f08b%5Cu0026tag%3D%5Cu0026traceid%3DtrOVFXiUwisFJo_1_U_a%5Cu0026uipk%3D5%5Cu0026uparams%3De%252Ctrid%252Cdeadline%252Ctag%252Cos%252Cog%252Cnbs%252Coi%252Cuipk%252Cplatform%252Cmid%252Cgen%5Cu0026upsig%3D65fa2495f72b1652c93ae3e8ed18f2f6%22%2C%22bandwidth%22%3A57154%2C%22size%22%3A1710889%2C%22backup_url%22%3A%5B%22http%3A%2F%2F123.138.84.79%3A8000%2Fv1%2Fresource%2F29516958739-1-30216.m4s%3Fagrr%3D1%5Cu0026build%3D8410300%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026bvc%3Dvod%5Cu0026bw%3D57268%5Cu0026deadline%3D1745490194%5Cu0026dl%3D0%5Cu0026e%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026f%3DU_0_0%5Cu0026gen%3Dplayurlv3%5Cu0026mid%3D479396940%5Cu0026nbs%3D1%5Cu0026nettype%3D0%5Cu0026og%3Dhw%5Cu0026oi%3D3059343394%5Cu0026orderid%3D1%252C3%5Cu0026os%3D08hbv%5Cu0026platform%3Dandroid%5Cu0026sign%3Dc6f08b%5Cu0026tag%3D%5Cu0026traceid%3DtrZvPCHsGisbaS_0_U_a%5Cu0026uipk%3D5%5Cu0026uparams%3De%252Cnbs%252Coi%252Cplatform%252Cmid%252Cgen%252Cos%252Cog%252Cdeadline%252Ctag%252Cuipk%252Ctrid%5Cu0026upsig%3Dc6eeb5169558ca73c36ff87b7925515c%22%2C%22http%3A%2F%2F118.184.254.3%3A4480%2Fupgcxcode%2F39%2F87%2F29516958739%2F29516958739-1-30216.m4s%3Fe%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026trid%3D000056fb961696ed4d6bb208acb9ce431b1U%5Cu0026deadline%3D1745490194%5Cu0026tag%3D%5Cu0026os%3Dmcdn%5Cu0026og%3Dhw%5Cu0026nbs%3D1%5Cu0026oi%3D3059343394%5Cu0026uipk%3D5%5Cu0026platform%3Dandroid%5Cu0026mid%3D479396940%5Cu0026gen%3Dplayurlv3%5Cu0026upsig%3D65fa2495f72b1652c93ae3e8ed18f2f6%5Cu0026uparams%3De%2Ctrid%2Cdeadline%2Ctag%2Cos%2Cog%2Cnbs%2Coi%2Cuipk%2Cplatform%2Cmid%2Cgen%5Cu0026mcdnid%3D50021694%5Cu0026bvc%3Dvod%5Cu0026nettype%3D0%5Cu0026bw%3D57268%5Cu0026f%3DU_0_0%5Cu0026agrr%3D1%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026build%3D8410300%5Cu0026dl%3D0%5Cu0026orderid%3D0%2C3%22%5D%7D%2C%7B%22id%22%3A30280%2C%22base_url%22%3A%22http%3A%2F%2F125.74.62.233%3A8000%2Fv1%2Fresource%2F29516958739-1-30280.m4s%3Fagrr%3D1%5Cu0026build%3D8410300%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026bvc%3Dvod%5Cu0026bw%3D201462%5Cu0026deadline%3D1745490194%5Cu0026dl%3D0%5Cu0026e%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026f%3DU_0_0%5Cu0026gen%3Dplayurlv3%5Cu0026mcdnid%3D50021694%5Cu0026mid%3D479396940%5Cu0026nbs%3D1%5Cu0026nettype%3D0%5Cu0026og%3Dcos%5Cu0026oi%3D3059343394%5Cu0026orderid%3D0%252C3%5Cu0026os%3Dmcdn%5Cu0026platform%3Dandroid%5Cu0026sign%3Db1164b%5Cu0026tag%3D%5Cu0026traceid%3DtrkxYWIjABzQnP_0_U_a%5Cu0026uipk%3D5%5Cu0026uparams%3De%252Cuipk%252Ctrid%252Cmid%252Cnbs%252Cog%252Coi%252Cdeadline%252Ctag%252Cgen%252Cos%252Cplatform%5Cu0026upsig%3D5f5a3ee9562beef98824c40a28a6cf00%22%2C%22bandwidth%22%3A201184%2C%22size%22%3A6018701%2C%22backup_url%22%3A%5B%22http%3A%2F%2F118.182.248.130%3A8000%2Fv1%2Fresource%2F29516958739-1-30280.m4s%3Fagrr%3D1%5Cu0026build%3D8410300%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026bvc%3Dvod%5Cu0026bw%3D201462%5Cu0026deadline%3D1745490194%5Cu0026dl%3D0%5Cu0026e%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026f%3DU_0_0%5Cu0026gen%3Dplayurlv3%5Cu0026mid%3D479396940%5Cu0026nbs%3D1%5Cu0026nettype%3D0%5Cu0026og%3Dcos%5Cu0026oi%3D3059343394%5Cu0026orderid%3D1%252C3%5Cu0026os%3Dcoso1bv%5Cu0026platform%3Dandroid%5Cu0026sign%3Db1164b%5Cu0026tag%3D%5Cu0026traceid%3DtrLzIEoLxgCnJA_0_U_a%5Cu0026uipk%3D5%5Cu0026uparams%3De%252Ctrid%252Cog%252Cnbs%252Coi%252Cuipk%252Cdeadline%252Cgen%252Cos%252Ctag%252Cplatform%252Cmid%5Cu0026upsig%3D67dde445db5a37fb52a4bcf508e81318%22%2C%22http%3A%2F%2F118.184.254.3%3A4480%2Fupgcxcode%2F39%2F87%2F29516958739%2F29516958739-1-30280.m4s%3Fe%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026uipk%3D5%5Cu0026trid%3D000056fb961696ed4d6bb208acb9ce431b1U%5Cu0026mid%3D479396940%5Cu0026nbs%3D1%5Cu0026og%3Dcos%5Cu0026oi%3D3059343394%5Cu0026deadline%3D1745490194%5Cu0026tag%3D%5Cu0026gen%3Dplayurlv3%5Cu0026os%3Dmcdn%5Cu0026platform%3Dandroid%5Cu0026upsig%3D5f5a3ee9562beef98824c40a28a6cf00%5Cu0026uparams%3De%2Cuipk%2Ctrid%2Cmid%2Cnbs%2Cog%2Coi%2Cdeadline%2Ctag%2Cgen%2Cos%2Cplatform%5Cu0026mcdnid%3D50021694%5Cu0026bvc%3Dvod%5Cu0026nettype%3D0%5Cu0026bw%3D201462%5Cu0026agrr%3D1%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026build%3D8410300%5Cu0026dl%3D0%5Cu0026f%3DU_0_0%5Cu0026orderid%3D0%2C3%22%5D%7D%2C%7B%22id%22%3A30232%2C%22base_url%22%3A%22http%3A%2F%2F218.200.4.197%3A6768%2Fv1%2Fresource%2F29516958739-1-30232.m4s%3Fagrr%3D1%5Cu0026build%3D8410300%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026bvc%3Dvod%5Cu0026bw%3D107268%5Cu0026deadline%3D1745490194%5Cu0026dl%3D0%5Cu0026e%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026f%3DU_0_0%5Cu0026gen%3Dplayurlv3%5Cu0026mcdnid%3D50021694%5Cu0026mid%3D479396940%5Cu0026nbs%3D1%5Cu0026nettype%3D0%5Cu0026og%3Dhw%5Cu0026oi%3D3059343394%5Cu0026orderid%3D0%252C3%5Cu0026os%3Dmcdn%5Cu0026platform%3Dandroid%5Cu0026sign%3Df944bf%5Cu0026tag%3D%5Cu0026traceid%3DtrxuDVFEVzmgrz_1_U_a%5Cu0026uipk%3D5%5Cu0026uparams%3De%252Cuipk%252Cgen%252Cplatform%252Ctrid%252Cmid%252Ctag%252Cnbs%252Coi%252Cog%252Cdeadline%252Cos%5Cu0026upsig%3Db3eef15ee3382742abc7374c9113a398%22%2C%22bandwidth%22%3A107097%2C%22size%22%3A3204643%2C%22backup_url%22%3A%5B%22http%3A%2F%2F123.184.35.27%3A8000%2Fv1%2Fresource%2F29516958739-1-30232.m4s%3Fagrr%3D1%5Cu0026build%3D8410300%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026bvc%3Dvod%5Cu0026bw%3D107268%5Cu0026deadline%3D1745490194%5Cu0026dl%3D0%5Cu0026e%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026f%3DU_0_0%5Cu0026gen%3Dplayurlv3%5Cu0026mid%3D479396940%5Cu0026nbs%3D1%5Cu0026nettype%3D0%5Cu0026og%3Dhw%5Cu0026oi%3D3059343394%5Cu0026orderid%3D1%252C3%5Cu0026os%3Dcoso1bv%5Cu0026platform%3Dandroid%5Cu0026sign%3Df944bf%5Cu0026tag%3D%5Cu0026traceid%3DtrEEpUqSymBxaq_0_U_a%5Cu0026uipk%3D5%5Cu0026uparams%3De%252Cplatform%252Cmid%252Cdeadline%252Ctag%252Coi%252Ctrid%252Cnbs%252Cuipk%252Cgen%252Cos%252Cog%5Cu0026upsig%3D3727194e76cf963df693733c2427f660%22%2C%22http%3A%2F%2F118.184.254.3%3A4480%2Fupgcxcode%2F39%2F87%2F29516958739%2F29516958739-1-30232.m4s%3Fe%3Dig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859IB_%5Cu0026uipk%3D5%5Cu0026gen%3Dplayurlv3%5Cu0026platform%3Dandroid%5Cu0026trid%3D000056fb961696ed4d6bb208acb9ce431b1U%5Cu0026mid%3D479396940%5Cu0026tag%3D%5Cu0026nbs%3D1%5Cu0026oi%3D3059343394%5Cu0026og%3Dhw%5Cu0026deadline%3D1745490194%5Cu0026os%3Dmcdn%5Cu0026upsig%3Db3eef15ee3382742abc7374c9113a398%5Cu0026uparams%3De%2Cuipk%2Cgen%2Cplatform%2Ctrid%2Cmid%2Ctag%2Cnbs%2Coi%2Cog%2Cdeadline%2Cos%5Cu0026mcdnid%3D50021694%5Cu0026bvc%3Dvod%5Cu0026nettype%3D0%5Cu0026bw%3D107268%5Cu0026f%3DU_0_0%5Cu0026agrr%3D1%5Cu0026buvid%3DXY6CBD464C1BC5767CE40A77F12B89222B6E7%5Cu0026build%3D8410300%5Cu0026dl%3D0%5Cu0026orderid%3D0%2C3%22%5D%7D%5D%7D%2C%22fnval%22%3A272%2C%22accept_formats%22%3A%5B%7B%22quality%22%3A112%2C%22format%22%3A%22hdflv2%22%2C%22description%22%3A%22%E9%AB%98%E6%B8%85%201080P%2B%22%2C%22new_description%22%3A%221080P%20%E9%AB%98%E7%A0%81%E7%8E%87%22%2C%22display_desc%22%3A%221080P%22%2C%22superscript%22%3A%22%E9%AB%98%E7%A0%81%E7%8E%87%22%2C%22need_vip%22%3Atrue%2C%22need_login%22%3Atrue%7D%2C%7B%22quality%22%3A80%2C%22format%22%3A%22flv%22%2C%22description%22%3A%22%E9%AB%98%E6%B8%85%201080P%22%2C%22new_description%22%3A%221080P%20%E9%AB%98%E6%B8%85%22%2C%22display_desc%22%3A%221080P%22%2C%22need_login%22%3Atrue%7D%2C%7B%22quality%22%3A64%2C%22format%22%3A%22flv720%22%2C%22description%22%3A%22%E9%AB%98%E6%B8%85%20720P%22%2C%22new_description%22%3A%22720P%20%E5%87%86%E9%AB%98%E6%B8%85%22%2C%22display_desc%22%3A%22720P%22%2C%22need_login%22%3Atrue%7D%2C%7B%22quality%22%3A32%2C%22format%22%3A%22flv480%22%2C%22description%22%3A%22%E6%B8%85%E6%99%B0%20480P%22%2C%22new_description%22%3A%22480P%20%E6%A0%87%E6%B8%85%22%2C%22display_desc%22%3A%22480P%22%7D%2C%7B%22quality%22%3A16%2C%22format%22%3A%22mp4%22%2C%22description%22%3A%22%E6%B5%81%E7%95%85%20360P%22%2C%22new_description%22%3A%22360P%20%E6%B5%81%E7%95%85%22%2C%22display_desc%22%3A%22360P%22%7D%5D%2C%22volume%22%3A%7B%22measured_i%22%3A-10.8%2C%22measured_lra%22%3A8.6%2C%22measured_tp%22%3A3.5%2C%22measured_threshold%22%3A-21%2C%22target_offset%22%3A-1.1%2C%22target_i%22%3A-14%2C%22target_tp%22%3A-1%2C%22multi_scene_args%22%3A%7B%22high_dynamic_target_i%22%3A%22-24%22%2C%22normal_target_i%22%3A%22-14%22%2C%22undersized_target_i%22%3A%22-28%22%7D%7D%2C%22union_player%22%3A%7B%22biz_type%22%3A1%2C%22dimension%22%3A%7B%22width%22%3A1920%2C%22height%22%3A1080%7D%2C%22aid%22%3A114369442680801%7D%2C%22auto_qn_ctl%22%3A%7B%22login_half%22%3A32%2C%22nologin_half%22%3A32%2C%22login_full%22%3A80%2C%22nologin_full%22%3A32%2C%22mobile_login_full%22%3A80%2C%22mobile_nologin_full%22%3A32%7D%2C%22qn_exp%22%3A%7B%22qn_exp_1%22%3Atrue%7D%7D&player_rotate=0&player_width=1920&report_flow_data=%7B%22flow_card_type%22%3A%22av%22%2C%22flow_source%22%3A%22dssm_u2u%22%7D&trackid=all_49.router-pegasus-2021478-7d7955f987-td5kj.1745482993998.1007",
        "three_point": {
          "dislike_reasons": [
            {
              "id": 4,
              "name": "UP主:罗德岛蜜饼工坊",
              "toast": "将减少相似内容推荐"
            },
            {
              "id": 3,
              "name": "频道:明日方舟UP主应援计划 – 离解复合",
              "toast": "将减少相似内容推荐"
            },
            {
              "id": 12,
              "name": "此类内容过多",
              "toast": "将减少相似内容推荐"
            },
            {
              "id": 13,
              "name": "推荐过",
              "toast": "将减少相似内容推荐"
            },
            {
              "id": 1,
              "name": "这个内容",
              "toast": "将减少相似内容推荐"
            }
          ],
          "feedbacks": [
            {
              "id": 1,
              "name": "恐怖血腥",
              "toast": "将优化首页此类内容"
            },
            {
              "id": 2,
              "name": "色情低俗",
              "toast": "将优化首页此类内容"
            },
            {
              "id": 3,
              "name": "封面恶心",
              "toast": "将优化首页此类内容"
            },
            {
              "id": 4,
              "name": "标题党/封面党",
              "toast": "将优化首页此类内容"
            }
          ],
          "watch_later": 1
        },
        "args": {
          "up_id": 8412516,
          "up_name": "罗德岛蜜饼工坊",
          "tid": 74654031,
          "tname": "明日方舟UP主应援计划 – 离解复合",
          "aid": 114369442680801
        },
        "player_args": {
          "aid": 114369442680801,
          "cid": 29516958739,
          "type": "av",
          "duration": 240
        },
        "idx": 1745482982,
        "three_point_v2": [
          {
            "title": "添加至稍后再看",
            "type": "watch_later",
            "icon": "https://i0.hdslb.com/bfs/activity-plat/static/20240103/0977767b2e79d8ad0a36a731068a83d7/8VhmmUeWnO.png",
            "icon_night": "https://i0.hdslb.com/bfs/activity-plat/static/20240103/0977767b2e79d8ad0a36a731068a83d7/eIyDu5U7GA.png"
          },
          {
            "title": "反馈",
            "subtitle": "（选择后将优化首页此类内容）",
            "reasons": [
              {
                "id": 1,
                "name": "恐怖血腥",
                "toast": "将优化首页此类内容"
              },
              {
                "id": 2,
                "name": "色情低俗",
                "toast": "将优化首页此类内容"
              },
              {
                "id": 3,
                "name": "封面恶心",
                "toast": "将优化首页此类内容"
              },
              {
                "id": 4,
                "name": "标题党/封面党",
                "toast": "将优化首页此类内容"
              }
            ],
            "type": "feedback"
          },
          {
            "title": "我不想看",
            "subtitle": "（选择后将减少相似内容推荐）",
            "reasons": [
              {
                "id": 4,
                "name": "UP主:罗德岛蜜饼工坊",
                "toast": "将减少相似内容推荐"
              },
              {
                "id": 3,
                "name": "频道:明日方舟UP主应援计划 – 离解复合",
                "toast": "将减少相似内容推荐",
                "extend": "{\"tid\":\"74654031\"}"
              },
              {
                "id": 3,
                "name": "频道:泰拉探索协会",
                "toast": "将减少相似内容推荐",
                "extend": "{\"tid\":\"22177849\"}"
              },
              {
                "id": 12,
                "name": "此类内容过多",
                "toast": "将减少相似内容推荐"
              },
              {
                "id": 13,
                "name": "推荐过",
                "toast": "将减少相似内容推荐"
              },
              {
                "id": 1,
                "name": "这个内容",
                "toast": "将减少相似内容推荐"
              }
            ],
            "type": "dislike"
          }
        ],
        "track_id": "all_49.router-pegasus-2021478-7d7955f987-td5kj.1745482993998.1007",
        "talk_back": "视频,【仿】《明日方舟》六周年庆典活动宣传PV,45.4万观看,1074弹幕,时长4分钟00秒,UP主罗德岛蜜饼工坊,3万点赞,",
        "report_flow_data": "{\"flow_card_type\":\"av\",\"flow_source\":\"dssm_u2u\"}",
        "three_point_v": "v2",
        "cover_left_text_1": "45.4万",
        "cover_left_icon_1": 1,
        "cover_left_1_content_description": "45.4万观看",
        "cover_left_text_2": "1074",
        "cover_left_icon_2": 3,
        "cover_left_2_content_description": "1074弹幕",
        "cover_right_text": "4:00",
        "cover_right_content_description": "4分钟00秒",
        "rcmd_reason": "3万点赞",
        "official_icon": 16,
        "can_play": 1,
        "rcmd_reason_style": {
          "text": "3万点赞",
          "text_color": "#FF6633",
          "bg_color": "#FFF1ED",
          "border_color": "#FFF1ED",
          "text_color_night": "#BF5330",
          "bg_color_night": "#3D2D29",
          "border_color_night": "#3D2D29",
          "bg_style": 1
        },
        "cover_info_priority": 123
      }
    ],
    "config": {
      "column": 2,
      "autoplay_card": 11,
      "feed_clean_abtest": 0,
      "home_transfer_test": 0,
      "auto_refresh_time": 1200,
      "show_inline_danmaku": 1,
      "toast": {},
      "single_autoplay_flag": 1,
      "is_back_to_homepage": true,
      "enable_rcmd_guide": true,
      "auto_refresh_time_by_appear": 1800,
      "auto_refresh_time_by_active": 1800,
      "trigger_loadmore_left_line_num": -1,
      "history_cache_size": 10,
      "visible_area": 80,
      "card_density_exp": 1,
      "small_cover_wh_ratio": 1.333333,
      "video_mode": 1,
      "space_enlarge_exp": 1,
      "auto_refresh_time_by_behavior": 5,
      "story_mode_v2_guide_exp": 6,
      "auto_refresh_by_behavior": 1,
      "three_point_style": 1,
      "exposure_duration_start_ratio": 0.800000011920929,
      "exposure_duration_end_ratio": 0.800000011920929,
      "exposure_duration_min_ms": 1,
      "rcmd_label_mng_entrance": 1
    },
    "interest_choose": null
  }
}
```

</details>