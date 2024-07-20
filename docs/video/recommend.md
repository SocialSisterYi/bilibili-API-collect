# 视频推荐

## 获取单视频推荐列表（web端）

> https://api.bilibili.com/x/web-interface/archive/related

*请求方式：GET* 

最多获取40条推荐视频

**url参数：**

| 参数名 | 类型 | 内容     | 必要性       | 备注               |
| ------ | ---- | -------- | ------------ | ------------------ |
| aid    | num  | 稿件avid | 必要（可选） | avid与bvid任选一个 |
| bvid   | str  | 稿件bvid | 必要（可选） | avid与bvid任选一个 |

**json回复：**

根对象：

| 字段    | 类型   | 内容     | 备注                         |
| ------- | ------ | -------- | ---------------------------- |
| code    | num    | 返回值   | 0：成功 <br />-400：请求错误 |
| message | str    | 错误信息 | 默认为0                      |
| ttl     | num    | 1        |                  |
| data    | array | 推荐列表 |                              |

`data`数组：

| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| 0    | obj  | 推荐视频1     |      |
| n    | obj  | 推荐视频(n+1) |      |
| ……   | obj  | ……            | ……   |
| 39   | obj  | 推荐视频40    |      |

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
	"data": [{
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
	}, {
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
	}, {
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
	}, {
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
	},
	…………
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

| 参数名        | 类型 | 内容                   | 必要性 | 备注                                                  |
|---------------|------|------------------------|--------|-------------------------------------------------------|
| fresh_type    | num  | 相关性                 | 非必要 | 默认为 4 <br /> 值越大推荐内容越相关                  |
| ps            | num  | 单页返回的记录条数     | 非必要 | 默认为 12, 留空即最大值为 30                          |
| fresh_idx     | num  | 当前翻页号             | 非必要 | 以 1 开始                                             |
| fresh_idx_1h  | num  | 当前翻页号(一小时前?)  | 非必要 | 以 1 开始, 默认与 fresh_idx 内容相同                  |
| brush         | num  | 刷子?                  | 非必要 | 以 1 开始, 默认与 fresh_idx 内容相同                  |
| fetch_row     | num  | 本次抓取的最后一行行号 | 非必要 | 1 递归加上本次抓取总行数                              |
| web_location  | num  | 网页位置               | 非必要 | 主页为 1430650                                        |
| y_num         | num  | 普通列数               | 非必要 | 一行中视频,直播及广告数                               |
| last_y_num    | num  | 总列数                 | 非必要 | 普通列数 + 边栏列数                                   |
| feed_version  | str  | V8                     | 非必要 | 作用尚不明确                                          |
| homepage_ver  | num  | 1                      | 非必要 | 首页版本                                              |
| screen        | str  | 浏览器视口大小         | 非必要 | 水平在前垂直在后以减号分割                            |
| seo_info      | str  | 空                     | 非必要 | 作用尚不明确                                          |
| last_showlist | str  | 上次抓取的视频av号列表 | 非必要 | av与数字间用下划线分隔, 若视频UP主已关注则中间再插入n |
| uniq_id       | str  | ???                    | 非必要 | 作用尚不明确                                          |
| w_rid         | str  | WBI 签名               | 非必要 | 见[WBI 签名](../misc/sign/wbi.md)                     |
| wts           | num  | UNIX 时间戳            | 非必要 | 见[WBI 签名](../misc/sign/wbi.md)                     |

**json回复：**

根对象：

| 字段        | 类型 | 内容     | 备注                         |
|-------------|------|----------|------------------------------|
| code        | num  | 返回值   | 0：成功 <br />-400：请求错误 |
| message     | str  | 错误信息 | 默认为0                      |
| ttl         | num  | 1        |                              |
| data        | obj  |          |                              |

`data`对象：

| 字段                     | 类型  | 内容      | 备注                           |
|--------------------------|-------|-----------|--------------------------------|
| business_card            | null  |           |                                |
| floor_info               | null  |           |                                |
| item                     | array | 推荐列表  |                                |
| mid                      | num   | 用户mid   | 未登录为0                      |
| preload_expose_pct       | num   | 0.5       | 用于预加载?                    |
| preload_floor_expose_pct | num   | 0.5       | 用于预加载?                    |
| side_bar_column          | array | 边栏列表? | 可参考字段 item 及对应功能文档 |
| user_feature             | null  |           |                                |

`data`对象中`item`数组中的对象:

| 字段                     | 类型 | 内容               | 备注                                      |
|--------------------------|------|--------------------|-------------------------------------------|
| av_feature               | null |                    |                                           |
| business_info            | obj  | 商业推广信息       | 无为null, 此处无参考意义                  |
| bvid                     | str  | 视频bvid           |                                           |
| cid                      | num  | 稿件cid            |                                           |
| dislike_switch           | num  | 1                  | 显示不感兴趣开关?                         |
| dislike_switch_pc        | num  | 0                  | 显示不感兴趣开关(PC)?                     |
| duraion                  | num  | 视频时长           |                                           |
| enable_vt                | num  | 0                  | 作用尚不明确                              |
| goto                     | num  | 目标类型           | av: 视频<br />ogv: 边栏<br />live: 直播   |
| duraion                  | num  | 视频时长           |                                           |
| id                       | num  | 视频aid / 直播间id |                                           |
| is_followed              | num  | 已关注             | 0: 未关注<br />1: 已关注                  |
| is_stock                 | num  | 0                  | 作用尚不明确                              |
| ogv_info                 | null |                    |                                           |
| owner                    | obj  | UP主               |                                           |
| pic                      | str  | 封面               |                                           |
| pic_4_3                  | str  | 封面(4:3)          |                                           |
| pos                      | num  | 0                  | 位置?                                     |
| pubdate                  | num  | 发布时间           |                                           |
| rcmd_reason              | obj  | 推荐理由           | 直播等为null                              |
| room_info                | obj  | 直播间信息         | 普通视频等为null, 参见[直播](../live)     |
| show_info                | num  | 展示信息           | 1: 普通视频<br />0: 直播                  |
| stat                     | obj  | 视频状态信息       | 直播等为null, 参见[视频基本信息](info.md) |
| title                    | str  | 标题               |                                           |
| track_id                 | str  | 跟踪标识?          |                                           |
| uri                      | str  | 目标页 URI         |                                           |
| vt_display               | str  | 空                 | 作用尚不明确                              |

`item`数组中的对象中的`owner`对象:

| 字段 | 类型 | 内容    | 备注 |
| face | str  | 头像URL |      |
| mid  | num  | UP主mid |      |
| name | str  | UP昵称  |      |

`item`数组中的对象中的`rcmd_reason`对象:

| 字段        | 类型 | 内容     | 备注                                  |
| reason_type | num  | 原因类型 | 0: 无<br />1: 已关注<br />3: 高点赞量 |
| content     | str  | 原因描述 | 当 reason_type 为 3 时存在            |

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


## 获取短视频模式视频列表

> https://app.bilibili.com/x/v2/feed/index

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**  

有大量不明意义的参数 备注仅供参考

| 参数名          | 类型  | 内容                        | 必要性 | 备注                           |
|--------------|-----|---------------------------|-----|------------------------------|
| fnval   | num | 视频流格式标识        | 非必要 |  默认为272  | 
| fnver      | num | 视频流版本标识       | 非必要 | 恒为1  |
| force_host | num | 源url类型       | 非必要 |  0:无限制 1:使用http 2:使用https    |
| fourk    | num | 是否允许 4K 视频         | 非必要 | 画质最高 1080P：0（默认）<br />画质最高 4K：1    |
| guidance | num | 0         | 非必要 |        |
| https_url_req | num | 0    | 非必要 |        |
| inline_danmu | num | 2     | 非必要 |        |
| inline_sound | num | 1     | 非必要 |        |
| interest_id | num | 0      | 非必要 |        |
| login_event | num | 登录状态      | 非必要 |  0为登录 1为未登录     |
| mobi_app | num | android   | 非必要 | 设备类型   |
| network | num | wifi       | 非必要 |  网络类型   |
| open_event | num |         | 非必要 |        |
| platform | num | android   | 非必要 |  设备类型    |
| pull | boll | false        | 非必要 |        |
| qn | num | 32              | 非必要 | 似乎是画质 |
| recsys_mode | num | 0      | 非必要 |        |
| s_locale | str | zh_CN     | 非必要 | 语言   |
| video_mode | num | 1       | 非必要 |        |
| voice_balance | num | 音量均衡？    | 非必要 |  默认为1    |


**json回复：**

根对象：

| 字段          | 类型    | 内容   | 备注                   |
|-------------|-------|------|----------------------|
| code        | num   | 返回值  | 0：成功  |
| message     | str   | 错误信息 | 默认为0                 |
| ttl         | num   | 1    |                      |
| data        | obj |  |                  |


`data`对象：

| 字段          | 类型    | 内容   | 备注                   |
|-------------|-------|------|----------------------|
| config        | obj   | 一些界面相关的内容  | 此处省略  |
| items         | array   | 视频列表    |           |

`data`中的`items`数组的对象：

以下为视频类型

| 字段          | 类型    | 内容   | 备注                   |
|-------------|-------|------|----------------------|
| can_play      | num   | 1  | 字面意思  |
| card_goto         | str   |  av    |           |
| card_type         | str   |  卡片类型  | 视频为small_cover_v2    |
| cover             | str   |  封面url   |           |
| cover_left_1_content_description     | str   | 播放量  |   8.9万观看     |
| cover_left_2_content_description         | str   | 弹幕数  |     250弹幕       |
| cover_left_text_1           | str   |   播放量  |    8.9万     |
| cover_left_text_2          | str   |   弹幕数   |     250      |
| cover_right_content_description         | str   | 视频长度  |     1分钟20秒      |
| cover_right_text         | str   | 视频长度 |   1:20     |
| desc_button         | obj   | up主信息 |           |
| param         | str   | 视频aid   |           |
| player_args        | obj   | 视频信息 |           |
| talk_back         | str   |      |           |
| title         | str   | 标题 |           |
| uri         | str   | 跳转链接  |           |

`desc_button`对象：

| 字段          | 类型    | 内容   | 备注                   |
|-------------|-------|------|----------------------|
| event         | str   |      |           |
| text        | str   | up名称 |           |
| type         | num  |   1   |           |
| uri      | str   | 跳转链接 |    |


`player_args`对象：

| 字段          | 类型    | 内容   | 备注                   |
|-------------|-------|------|----------------------|
| aid         | num   | 视频aid   |           |
| cid        | num   | 视频cid   |           |
| duration      | num  |   视频长度   |   秒数     |
| type      | str   |    |    |


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
