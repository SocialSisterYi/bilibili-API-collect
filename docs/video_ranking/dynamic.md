# 分区最新视频

## 获取分区最新视频列表

> https://api.bilibili.com/x/web-interface/dynamic/region

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注    |
| ------ | ---- | ----------- | ------ | ------- |
| pn     | num  | 页码        | 非必要 | 默认为1 |
| ps     | num  | 每页项数    | 非必要 | 默认为14, 留空为5 |
| rid    | num  | 目标分区tid | 必要   |         |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        |                             |
| data    | obj  | 信息本体 |                             |

`data`对象：

| 字段     | 类型   | 内容     | 备注 |
| -------- | ------ | -------- | ---- |
| archives | array | 视频列表 |      |
| page     | obj    | 页面信息 |      |

`data`中的`archives`数组：

| 项   | 类型 | 内容      | 备注 |
| ---- | ---- | --------- | ---- |
| 0    | obj  | 视频1     |      |
| n    | obj  | 视频(n+1) |      |
| ……   | obj  | ……        | ……   |

`data`中的`archives`数组中的对象：

基本同[获取视频详细信息（web端）](../video/info.md#获取视频详细信息（web端）)中的data对象

`data`中的`page`对象：

| 字段  | 类型 | 内容       | 备注 |
| ----- | ---- | ---------- | ---- |
| count | num  | 总计视频数 |      |
| num   | num  | 当前页码   |      |
| size  | num  | 每页项数   |      |

**示例：**

获取`tid=21`（生活->日常）分区中的2条最新动态视频信息

```shell
curl -G 'https://api.bilibili.com/x/web-interface/dynamic/region' \
--data-urlencode 'rid=21' \
--data-urlencode 'ps=2' \
--data-urlencode 'pn=1' \
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
		"page": {
			"num": 1,
			"size": 2,
			"count": 189
		},
		"archives": [{
			"aid": 56998612,
			"videos": 24,
			"tid": 21,
			"tname": "日常",
			"copyright": 1,
			"pic": "http://i2.hdslb.com/bfs/archive/76536be425ed98ba1f1b9aef1ada3a09f94c9f04.jpg",
			"title": "操控百万UP主的一天！",
			"pubdate": 1562568733,
			"ctime": 1561624175,
			"desc": "拍这个视频还挺辛苦的，希望大家喜欢的话给个三连叭！",
			"state": 0,
			"attribute": 536887424,
			"duration": 1864,
			"rights": {
				"bp": 0,
				"elec": 0,
				"download": 0,
				"movie": 0,
				"pay": 0,
				"hd5": 0,
				"no_reprint": 1,
				"autoplay": 0,
				"ugc_pay": 0,
				"is_cooperation": 0,
				"ugc_pay_preview": 0,
				"no_background": 0
			},
			"owner": {
				"mid": 2206456,
				"name": "花少北丶",
				"face": "http://i1.hdslb.com/bfs/face/86ef6895a8f88c80f2885e7eb9ba7989db437b93.jpg"
			},
			"stat": {
				"aid": 56998612,
				"view": 2863604,
				"danmaku": 82588,
				"reply": 5502,
				"favorite": 65471,
				"coin": 104905,
				"share": 5815,
				"now_rank": 0,
				"his_rank": 12,
				"like": 165638,
				"dislike": 0
			},
			"dynamic": "你想看的这里都有！",
			"cid": 99548502,
			"dimension": {
				"width": 1920,
				"height": 1080,
				"rotate": 0
			},
			"bvid": "BV1Wx411d7jX"
		}, {
			"aid": 837503204,
			"videos": 1,
			"tid": 21,
			"tname": "日常",
			"copyright": 1,
			"pic": "http://i1.hdslb.com/bfs/archive/7025827d8dbfc6139a2d066daa51a08897282534.jpg",
			"title": "“都是小人物，就别说什么大话了，活着就行”",
			"pubdate": 1585264054,
			"ctime": 1585264054,
			"desc": "每一位用心生活的小人物，都是各自生活中不平凡的英雄！",
			"state": 0,
			"attribute": 16512,
			"duration": 295,
			"mission_id": 12868,
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
				"mid": 350928606,
				"name": "彼岸的岛",
				"face": "http://i2.hdslb.com/bfs/face/9814b8b6defc045aa07c3bb08e8a30e63afd9f3e.jpg"
			},
			"stat": {
				"aid": 837503204,
				"view": 142239,
				"danmaku": 602,
				"reply": 702,
				"favorite": 4728,
				"coin": 4712,
				"share": 917,
				"now_rank": 0,
				"his_rank": 0,
				"like": 7700,
				"dislike": 0
			},
			"dynamic": "#全能打卡挑战##正能量##感人#",
			"cid": 169901162,
			"dimension": {
				"width": 1280,
				"height": 720,
				"rotate": 0
			},
			"bvid": "BV1cg4y1a7tB"
		}]
	}
}
```

</details>

### 获取分区标签近期互动列表

> https://api.bilibili.com/x/web-interface/dynamic/tag

*请求方式: GET*

**url参数：**

| 参数名 | 类型 | 内容       | 必要性 | 备注              |
| ------ | ---- | ---------- | ------ | ----------------- |
| ps     | num  | 视频数     | 非必要 | 默认为14, 留空为5 |
| pn     | num  | 列数       | 非必要 | 留空为1           |
| rid    | num  | 目标分区id | 必要   | 参见[视频分区一览](../video/video_zone.md) |
| tag_id | num  | 目标标签id | 必要   |                   |

**json回复:**

与[获取分区最新视频列表](#获取分区最新视频列表)相同, 略

**示例:**

获取`tid=136(游戏->音游)`分区中`tag_id=10026108(Phigros)`标签近期互动列表的2条视频信息

```shell
curl -G 'https://api.bilibili.com/x/web-interface/dynamic/tag' \
--data-urlencode 'rid=136' \
--data-urlencode 'tag_id=10026108' \
--data-urlencode 'ps=2' \
--data-urlencode 'pn=1'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "page": {
      "num": 1,
      "size": 2,
      "count": 152
    },
    "archives": [
      {
        "aid": 1452657587,
        "videos": 1,
        "tid": 136,
        "tname": "音游",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/4cb13f97e0d4b43645728432468e44b40ad343de.jpg",
        "title": "【MuseDash x Phigros/逆天愚人节谱面】Retribution ~Cycle of Redemption~ Lv.? AP",
        "pubdate": 1712310000,
        "ctime": 1712302810,
        "desc": "谱师：Mayflycmd（@命令提示符 ）",
        "state": 0,
        "duration": 189,
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
          "no_background": 0,
          "arc_pay": 0,
          "pay_free_watch": 0
        },
        "owner": {
          "mid": 3493136175204754,
          "name": "TempoTiger",
          "face": "https://i1.hdslb.com/bfs/face/0cf2722f9aaa0db94f9166a8084e347bca3580f4.jpg"
        },
        "stat": {
          "aid": 1452657587,
          "view": 27021,
          "danmaku": 141,
          "reply": 113,
          "favorite": 306,
          "coin": 144,
          "share": 95,
          "now_rank": 0,
          "his_rank": 0,
          "like": 1050,
          "dislike": 0,
          "vt": 0,
          "vv": 27021
        },
        "dynamic": "",
        "cid": 1494650111,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1Eq421w7T4",
        "first_frame": "http://i0.hdslb.com/bfs/storyff/n240405sa2zsrp9x2i3erx1ln8icirs6_firsti.jpg",
        "pub_location": "广东",
        "cover43": "",
        "bvid": "BV1Eq421w7T4",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": null
      },
      {
        "aid": 1155789590,
        "videos": 1,
        "tid": 136,
        "tname": "音游",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/c75674c8d104421d1794e69926d42ffa90e7d73d.jpg",
        "title": "[Phigros 自制谱] 把一切都倾注进去吧！/ 雑踏、僕らの街 - TOGENASHI TOGEARI",
        "pubdate": 1719687153,
        "ctime": 1719687153,
        "desc": "不是，你们怎么忍住把这键盘歌写这么简单的？\n不是，你们怎么忍住把这键盘歌写这么简单的？\n不是，你们怎么忍住把这键盘歌写这么简单的？\n\n应该是 Phigros 第一个写满三分钟的，虽然后面抄了很多重复配置，但无伤大雅（\n个人定数 16.6，其实就两段 5k 键盘难，看时间长多给了 0.1\n所以啊\n\n愤怒也好喜悦也好悲伤也好，把一切都倾注进去！\n怒りも喜びも哀しさも、全部ぶちこめ。\n\n-- 6.30 更新，修了一个特效的问题，改了一个很蹭的配置和一个很丑的排键",
        "state": 0,
        "duration": 201,
        "mission_id": 1726375,
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
          "no_background": 0,
          "arc_pay": 0,
          "pay_free_watch": 0
        },
        "owner": {
          "mid": 341532844,
          "name": "西宮缄",
          "face": "https://i1.hdslb.com/bfs/face/1387108d9337c04c27ce2d8d75679e40540d4c14.jpg"
        },
        "stat": {
          "aid": 1155789590,
          "view": 39479,
          "danmaku": 303,
          "reply": 169,
          "favorite": 1650,
          "coin": 473,
          "share": 653,
          "now_rank": 0,
          "his_rank": 0,
          "like": 5843,
          "dislike": 0,
          "vt": 0,
          "vv": 39479
        },
        "dynamic": "打这个比溜冰还爽",
        "cid": 1600971084,
        "dimension": {
          "width": 2000,
          "height": 1500,
          "rotate": 0
        },
        "season_id": 3395535,
        "short_link_v2": "https://b23.tv/BV1iZ421g7E8",
        "first_frame": "http://i1.hdslb.com/bfs/storyff/n240630sa3chl8idnpz8d31t6yaczagn_firsti.jpg",
        "pub_location": "天津",
        "cover43": "",
        "bvid": "BV1iZ421g7E8",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": null
      }
    ]
  }
}
```

</details>

### 获取分区近期投稿列表

> https://api.bilibili.com/x/web-interface/newlist

*请求方式: GET*

注: 该接口在 Web 端实际情况中被请求, 但似乎未在页面中显示, 作用尚不清楚

**URL参数:**

| 参数名 | 类型 | 内容       | 必要性 | 备注              |
| ------ | ---- | ---------- | ------ | ----------------- |
| ps     | num  | 视频数     | 非必要 | 默认为14, 留空为5 |
| pn     | num  | 页码       | 非必要 | 默认为1           |
| rid    | num  | 目标分区id | 非必要   | 参见[视频分区一览](../video/video_zone.md) |
| type   | num  | 类型?      | 非必要 | 默认为0           |

**JSON回复:**

与[获取分区最新视频列表](#获取分区最新视频列表)相同, 略

**示例:**

与[获取分区最新视频列表](#获取分区最新视频列表)相似, 略

### 获取分区近期投稿列表 (带排序)

> https://api.bilibili.com/x/web-interface/newlist_rank

*请求方式: GET*

**URL参数:**

| 参数名      | 类型 | 内容      | 必要性 | 备注    |
| ----------- | ---- | --------- | ------ | ------- |
| main_ver    | str  | 主页版本  | 非必要 | 默认为 `v3` |
| search_type | str  | 搜索类型  | 必要   | 默认为 `video` |
| view_type   | str  | 查看类型? | 必要   | 默认为 `hot_rank` |
| copy_right  | num  | 版权?     | 非必要 | 默认为 `-1` |
| new_web_tag | num  | 标签?     | 非必要 | 默认为 `1` |
| order       | str  | 排序方式  | 非必要 | click: 按播放排序(默认)<br />scores: 按评论数排序<br />stow: 按收藏排序<br />coin: 按硬币数排序<br />dm: 按弹幕数排序|
| cate_id     | num  | 分区id    | 必要   | 留空会导致响应中`data`中`result`为`null`, 参见[视频分区一览](../video/video_zone.md) |
| page        | num  | 页码      | 非必要 | 默认以 `1` 开始 |
| pagesize    | num  | 视频数    | 必要   | 默认为 `30`, 留空会导致 -500 |
| time_from   | num  | 起始时间  | 必要   | yyyyMMdd, 默认为 `time_to` - 7 |
| time_to     | num  | 结束时间  | 必要   | yyyyMMdd, 默认为当前时间(大于起始时间) |

**JSON回复:**

根对象:

| 字段    | 类型 | 内容     | 备注  |
| ------- | ---- | -------- | ----- |
| code    | num  | 返回值   | 0：成功<br />-500: 未传pagesize<br />-10: 未传其余必要参数 |
| message | str  | 错误信息 | 无为0 |
| ttl     | num  | 1        |       |
| data    | obj  | 信息本体 | 错误为null |

`data`对象:

| 字段             | 类型  | 内容               | 备注  |
| ---------------- | ----- | ------------------ | ----- |
| exp_list         | null  |                    | 作用尚不明确 |
| show_module_list | array | 显示模块列表?      |  |
| result           | array | 结果本体           | 失败时为null |
| show_column      | num   | 0                  | 作用尚不明确 |
| rqt_type         | str   | search             | 作用尚不明确 |
| numPages         | num   | 页码               | 失败时为0 |
| numResults       | num   | 视频数             | 失败时为0 |
| crr_query        | str   | 空                 | 作用尚不明确 |
| pagesize         | num   | 视频数             |  |
| suggest_keyword  | num   | 空                 | 作用尚不明确 |
| egg_info         | null  |                    | 作用尚不明确 |
| cache            | num   | 0                  | 作用尚不明确 |
| exp_bits         | num   | 1                  | 作用尚不明确 |
| exp_str          | str   | 空                 | 作用尚不明确 |
| seid             | str   | 一串字符串中的数字 | 作用尚不明确 |
| msg              | str   | 结果信息           | 成功时为`success`, 反之为`as error.` |
| egg_hit          | num   | 0                  | 作用尚不明确 |
| page             | num   | 页码               |  |

`data`中的`show_module_list`数组:

| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| 0    | str  | tips          |      |
| 1    | str  | brand_ad      |      |
| 2    | str  | esports       |      |
| 3    | str  | activity      |      |
| 4    | str  | web_game      |      |
| 5    | str  | card          |      |
| 6    | str  | media_bangumi |      |
| 7    | str  | media_ft      |      |
| 8    | str  | bili_user     |      |
| 9    | str  | user          |      |
| 10   | str  | star          |      |
| 11   | str  | video         |      |

`data`中的`result`数组中的对象:

| 字段           | 类型 | 内容           | 备注  |
| -------------- | ---- | -------------- | ----- |
| pubdate        | str  | 发布时间       | 格式为 `yyyy-MM-dd HH:mm:ss` |
| pic            | str  | 封面图         |  |
| tag            | str  | 标签           | 用 `,` 分隔 |
| duration       | num  | 时长           | 单位为秒 |
| id             | num  | aid            |  |
| rank_score     | num  | 排序分数?      |  |
| badgepay       | bool | 是否有角标?    |  |
| senddate       | num  | 发送时间?      | UNIX 秒级时间戳 |
| author         | str  | UP主名         |  |
| review         | num  | 评论数         |  |
| mid            | num  | UP主mid        |  |
| is_union_video | num  | 是否为联合投稿 |  |
| rank_index     | num  | 排序索引号     |  |
| type           | str  | 类型           | video: 视频 |
| arcrank        | str  | 0              | 作用尚不明确 |
| play           | str  | 播放数         |  |
| rank_offset    | num  | 排序偏移?      | 与 `rank_index` 相同 |
| description    | str  | 简介           |  |
| video_review   | num  | 弹幕数?        |  |
| is_pay         | num  | 是否付费?      | 0: 免费<br />1: 付费 |
| favorites      | num  | 收藏数         |  |
| arcurl         | str  | 视频播放页URL  |  |
| bvid           | str  | bvid           |  |
| title          | str  | 标题           |  |
| vt             | num  | 0              | 作用尚不明确 |
| enable_vt      | num  | 0              | 作用尚不明确 |
| vt_display     | str  | 空             | 作用尚不明确 |

**示例:**

获取`tid=231(科技->计算机技术)`分区近期投稿列表, 按播放数排序, 页码为1, 视频数为2, 时间一周

```shell
curl -G 'https://api.bilibili.com/x/web-interface/newlist_rank' \
--data-urlencode 'search_type=video' \
--data-urlencode 'view_type=hot_rank' \
--data-urlencode 'order=click' \
--data-urlencode 'cate_id=231' \
--data-urlencode 'page=1' \
--data-urlencode 'pagesize=2' \
--data-urlencode 'time_from=20240716' \
--data-urlencode 'time_to=20240723'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "exp_list": null,
    "show_module_list": [
      "tips",
      "brand_ad",
      "esports",
      "activity",
      "web_game",
      "card",
      "media_bangumi",
      "media_ft",
      "bili_user",
      "user",
      "star",
      "video"
    ],
    "result": [
      {
        "pubdate": "2024-07-19 15:27:23",
        "pic": "//i0.hdslb.com/bfs/archive/a6c2a8669e623333eee4bd8316b4e7b01716b7f2.jpg",
        "tag": "微软,Microsoft",
        "duration": 14,
        "id": 1406270001,
        "rank_score": 237205,
        "badgepay": false,
        "senddate": 1721410429,
        "author": "柚子木字幕组",
        "review": 928,
        "mid": 221648,
        "is_union_video": 0,
        "rank_index": 1,
        "type": "video",
        "arcrank": "0",
        "play": "237205",
        "rank_offset": 1,
        "description": "X",
        "video_review": 42,
        "is_pay": 0,
        "favorites": 618,
        "arcurl": "http://www.bilibili.com/video/av1406270001",
        "bvid": "BV1gr421M7rE",
        "title": "突发：微软服务中断正在影响全球用户",
        "vt": 0,
        "enable_vt": 0,
        "vt_display": ""
      },
      {
        "pubdate": "2024-07-17 22:12:47",
        "pic": "//i0.hdslb.com/bfs/archive/1b02bc3806369f8c051a84e1ffef11b22695e659.jpg",
        "tag": "演讲,大学,编程,英伟达,人工智能,TED,AI,黄仁勋",
        "duration": 1908,
        "id": 1556206286,
        "rank_score": 52653,
        "badgepay": false,
        "senddate": 1721225567,
        "author": "YouTube精选字幕组",
        "review": 147,
        "mid": 487511093,
        "is_union_video": 0,
        "rank_index": 2,
        "type": "video",
        "arcrank": "0",
        "play": "52648",
        "rank_offset": 2,
        "description": "New SciTech\n上月加州理工学院毕业典礼上，刚刚带领英伟达达成世界第一市值的CEO黄仁勋，到场分享对当下AI革命趋势的见解、带领英伟达转型成AI公司的历程、以及自己在职场这么多年的人生感悟。\n\n全程没有上位者那种空洞无意义的说教，都是真实的发展故事和对未来世界的看法。如果你的工作生活中有涉及到AI技术的可能，那么这期演讲将会非常有意义。",
        "video_review": 16,
        "is_pay": 0,
        "favorites": 2152,
        "arcurl": "http://www.bilibili.com/video/av1556206286",
        "bvid": "BV1C1421b7dD",
        "title": "“这个时代要跑，不要走”黄仁勋加州理工毕业演讲完整版",
        "vt": 0,
        "enable_vt": 0,
        "vt_display": ""
      }
    ],
    "show_column": 0,
    "rqt_type": "search",
    "numPages": 404,
    "numResults": 808,
    "crr_query": "",
    "pagesize": 2,
    "suggest_keyword": "",
    "egg_info": null,
    "cache": 0,
    "exp_bits": 1,
    "exp_str": "",
    "seid": "6717218533109517809",
    "msg": "success",
    "egg_hit": 0,
    "page": 1
  }
}
```

</details>
