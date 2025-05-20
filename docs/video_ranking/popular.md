# 热门视频

## 获取当前热门视频列表

> https://api.bilibili.com/x/web-interface/popular

_请求方式：GET_

注: 当携带Cookie时返回的数据的排行是个性化的

| 参数名 | 类型 | 内容     | 必要性 | 备注      |
| ------ | ---- | -------- | ------ | --------- |
| pn     | num  | 页码     | 非必要 | 默认为 1  |
| ps     | num  | 每页项数 | 非必要 | 默认为 20 |

**json 回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为 0                    |
| ttl     | num  | 1        |                             |
| data    | obj  | 信息本体 |                             |

`data`对象：

| 字段    | 类型  | 内容           | 备注 |
| ------- | ----- | -------------- | ---- |
| list    | array | 视频列表       |      |
| no_more | bool  | 是否有更多数据 |  false：下页还有数据<br />true：下页没有数据    |

`data`中的`list`数组：

| 项   | 类型 | 内容      | 备注 |
| ---- | ---- | --------- | ---- |
| 0    | obj  | 视频1     |      |
| n    | obj  | 视频(n+1) |      |
| ……   | obj  | ……        | ……   |

`data`中的`list`数组中的对象：

基本同[获取视频详细信息（web端）](../video/info.md#获取视频详细信息web端)中的data对象

**示例：**

获取当前热门视频列表(不携带 Cookie)

```shell
curl -G 'https://api.bilibili.com/x/web-interface/popular' \
--data-urlencode 'ps=2' \
--data-urlencode 'pn=1' \
-A 'qwq'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "list": [
      {
        "aid": 1356452135,
        "videos": 1,
        "tid": 250,
        "tname": "出行",
        "copyright": 1,
        "pic": "http://i2.hdslb.com/bfs/archive/5c3a47b7189caa84965c03b08007635a3c2e0405.jpg",
        "title": "《抬您上泰山》",
        "pubdate": 1722060600,
        "ctime": 1722018603,
        "desc": "转型的第一次尝试\n大家觉得还可以的话多多支持\n有什么意见请一定要提！\n谢谢观众老师们！！！",
        "state": 0,
        "duration": 138,
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
          "mid": 1339110285,
          "name": "赵峰山西四人行",
          "face": "https://i0.hdslb.com/bfs/face/6dfc87876cc8e6a0b81f113a5b3c1b473f48cb7a.jpg"
        },
        "stat": {
          "aid": 1356452135,
          "view": 2465053,
          "danmaku": 8467,
          "reply": 4426,
          "favorite": 46567,
          "coin": 168267,
          "share": 23180,
          "now_rank": 0,
          "his_rank": 2,
          "like": 403250,
          "dislike": 0,
          "vt": 0,
          "vv": 2465053
        },
        "dynamic": "更新了xdm 转型之作大家多多支持",
        "cid": 1628605145,
        "dimension": {
          "width": 1080,
          "height": 1920,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1tz421i7zb",
        "first_frame": "http://i1.hdslb.com/bfs/storyff/n240727sa1qmofe0nqz3he18b11gotmv_firsti.jpg",
        "pub_location": "山东",
        "cover43": "",
        "bvid": "BV1tz421i7zb",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "enable_vt": 0,
        "ai_rcmd": null,
        "rcmd_reason": {
          "content": "百万播放",
          "corner_mark": 0
        }
      },
      {
        "aid": 1906472398,
        "videos": 1,
        "tid": 221,
        "tname": "野生动物",
        "copyright": 1,
        "pic": "http://i0.hdslb.com/bfs/archive/1aecafe48c53f8033bda883aad4e18f6a737e6b3.jpg",
        "title": "杭州居然有科普展贩卖保护动物？？？",
        "pubdate": 1722176718,
        "ctime": 1722176718,
        "desc": "-",
        "state": 0,
        "duration": 278,
        "mission_id": 4016856,
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
          "no_background": 0,
          "arc_pay": 0,
          "pay_free_watch": 0
        },
        "owner": {
          "mid": 14309659,
          "name": "凛某人",
          "face": "https://i1.hdslb.com/bfs/face/53a4bed97980363ed9cf5802d811c41a608f36ee.jpg"
        },
        "stat": {
          "aid": 1906472398,
          "view": 406829,
          "danmaku": 786,
          "reply": 2203,
          "favorite": 5698,
          "coin": 20079,
          "share": 2052,
          "now_rank": 0,
          "his_rank": 0,
          "like": 81327,
          "dislike": 0,
          "vt": 0,
          "vv": 406829
        },
        "dynamic": "",
        "cid": 1630483865,
        "dimension": {
          "width": 1080,
          "height": 1920,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1MU411S7Cc",
        "up_from_v2": 9,
        "first_frame": "http://i0.hdslb.com/bfs/storyff/n240728sa1eky6tk8i78rs1xtdt7pgyd_firsti.jpg",
        "pub_location": "浙江",
        "cover43": "",
        "bvid": "BV1MU411S7Cc",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "enable_vt": 0,
        "ai_rcmd": null,
        "rcmd_reason": {
          "content": "6万点赞",
          "corner_mark": 0
        }
      }
    ],
    "no_more": false
  }
}
```

</details>

## 每周必看全部列表

> https://api.bilibili.com/x/web-interface/popular/series/list

*请求方式: GET*

**JSON回复:**

根对象:

| 字段    | 类型 | 内容     | 备注           |
| ------- | ---- | -------- | --------- |
| code    | num  | 返回值   | 0: 成功<br />-352: 请求被风控 |
| message | str  | 错误信息 | 默认为 0  |
| ttl     | num  | 1        |           |
| data    | obj  | 信息本体 |           |

`data`对象:

| 字段 | 类型  | 内容         | 备注 |
| ---- | ----- | ------------ | ---- |
| list | array | 全部信息列表 | 套了个娃 |

`data`对象中`list`数组:

| 项   | 类型 | 内容         | 备注 |
| ---- | ---- | ------------ | ---- |
| 0    | obj  | 第 n+1 期 |      |
| 1    | obj  | 第 n 期 |      |
| 2    | obj  | 第 n-1 期 |      |
| ……   | obj  | …… | ……   |
| n    | obj  | 第 1 期 |      |

`list`数组中的对象:

| 字段     | 类型 | 内容         | 备注 |
| -------- | ---- | ------------ | ---- |
| number   | num  | 期数         |      |
| subject  | str  | 主题         |      |
| status   | num  | 状态         | 2: 已结束    |
| name     | str  | 名称         | yyyy第n期 MM.dd - MM.dd |

**示例:**

```shell
curl -G 'https://api.bilibili.com/x/web-interface/popular/series/list' \
-A ''
```

<details>
<summary>查看响应示例:</summary>

```jsonc
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "list": [
      {
        "number": 279,
        "subject": "身残志坚钻石大盗",
        "status": 2,
        "name": "2024第279期 07.19 - 07.25"
      },
      {
        "number": 278,
        "subject": "中国诸神最强简史",
        "status": 2,
        "name": "2024第278期 07.12 - 07.18"
      },
      {
        "number": 277,
        "subject": "不用脚的射门大赛",
        "status": 2,
        "name": "2024第277期 07.05 - 07.11"
      },
      {
        "number": 276,
        "subject": "火柴人VS几何",
        "status": 2,
        "name": "2024第276期 06.28 - 07.04"
      },
      {
        "number": 275,
        "subject": "重磅自制三体动画",
        "status": 2,
        "name": "2024第275期 06.21 - 06.27"
      },
      /// ...
      {
        "number": 42,
        "subject": "【英雄联盟】——战士",
        "status": 2,
        "name": "2020第42期 01.03 - 01.09"
      },
      {
        "number": 41,
        "subject": "2019年度鬼畜回顾",
        "status": 2,
        "name": "2019第41期 12.27 - 01.02"
      },
      // ...
      {
        "number": 2,
        "subject": "噬元兽大战哥斯拉",
        "status": 2,
        "name": "2019第2期 03.29 - 04.04"
      },
      {
        "number": 1,
        "subject": "神仙爱情",
        "status": 2,
        "name": "2019第1期 03.22 - 03.28"
      }
    ]
  }
}
```

</details>

## 每周必看选期详细信息

> https://api.bilibili.com/x/web-interface/popular/series/one

*请求方式: GET*

**URL参数:**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| number | num  | 期数     | 必要   | 默认为 1 |

**JSON回复:**

根对象:

| 字段    | 类型 | 内容     | 备注           |
| ------- | ---- | -------- | --------- |
| code    | num  | 返回值   | 0: 成功<br />-352: 请求被风控<br />-404: 啥都木有 |
| message | str  | 错误信息 | 默认为 0  |
| ttl     | num  | 1        |           |
| data    | obj  | 信息本体 |           |

`data`对象:

| 字段     | 类型 | 内容         | 备注 |
| -------- | ---- | ------------ | ---- |
| config   | obj  | 选期信息     |      |
| reminder | str  | 提醒         |      |
| list     | array | 选期视频列表 |      |

`data`对象中的`config`对象:

| 字段     | 类型 | 内容         | 备注 |
| -------- | ---- | ------------ | ---- |
| id       | num  | 选期ID       |      |
| type     | str  | 选期类型     |      |
| number   | num  | 期数         |      |
| subject  | str  | 主题         |      |
| stime    | num  | 开始时间     |      |
| etime    | num  | 结束时间     |      |
| status   | num  | 状态         | 2: 已结束 |
| name     | str  | 名称         | yyyy第n期 MM.dd - MM.dd |
| label    | str  | 标题         |      |
| hint     | str  | 提示         |      |
| color    | num  | 颜色?         |      |
| cover    | str  | 封面         |      |
| share_title | str | 分享标题     |      |
| share_subtitle | str | 分享副标题 |      |
| media_id | num | 媒体ID?       |      |

`data`对象中的`list`数组:

| 项   | 类型 | 内容         | 备注 |
| ---- | ---- | ------------ | ---- |
| 0    | obj  | 第 1 个视频 |      |
| 1    | obj  | 第 2 个视频 |      |
| ……   | obj  | …… | ……   |
| n    | obj  | 第 n 个视频 |      |

`list`数组中的对象:

基本同[获取视频详细信息（web端）](../video/info.md#获取视频详细信息web端)中的data对象

**示例:**

查看小破站第 3 期每周必看详细信息

```shell
curl -G 'https://api.bilibili.com/x/web-interface/popular/series/one' \
--data-urlencode 'number=3'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "config": {
      "id": 3,
      "type": "weekly_selected",
      "number": 3,
      "subject": "人类首张黑洞照片",
      "stime": 1554393600,
      "etime": 1554998399,
      "status": 2,
      "name": "2019第3期 04.05 - 04.11",
      "label": "第3期(0412更新)",
      "hint": "本周热词：",
      "color": 2,
      "cover": "http://i0.hdslb.com/bfs/archive/c10fe5913a1e503bcd68db69158605df2bf54424.jpg",
      "share_title": "人类首张黑洞照片  | B站每周必看2019年第3期",
      "share_subtitle": "和B站小伙伴一起见证历史！黑洞到底长啥样？",
      "media_id": 448239988
    },
    "reminder": "每周五晚18:00更新",
    "list": [
      {
        "aid": 48918074,
        "videos": 1,
        "tid": 201,
        "tname": "科学科普",
        "copyright": 1,
        "pic": "http://i0.hdslb.com/bfs/archive/a2cbee9c1e2e854e161f1bddc04d657baf6e95f5.jpg",
        "title": "人类第一张黑洞照片，来了！",
        "pubdate": 1554904794,
        "ctime": 1554904794,
        "desc": "联合出品：中国科学技术协会、中国科学院计算机网络信息中心\n制作：中国科普博览\n科学审核：中国科学院国家天文台 苟利军\n实习生沈慧慧、李哲欣对本视频亦有贡献",
        "state": 0,
        "duration": 89,
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
          "mid": 407045223,
          "name": "二次元的中科院物理所",
          "face": "https://i0.hdslb.com/bfs/face/978ea07f22e54c2e62f01def8e815b59adacc5d0.jpg"
        },
        "stat": {
          "aid": 48918074,
          "view": 1594796,
          "danmaku": 23255,
          "reply": 16022,
          "favorite": 23084,
          "coin": 26411,
          "share": 10095,
          "now_rank": 0,
          "his_rank": 7,
          "like": 62712,
          "dislike": 0,
          "vt": 0,
          "vv": 1594796
        },
        "dynamic": "#趣味科普人文##科学##中科院#",
        "cid": 85668198,
        "dimension": {
          "width": 1280,
          "height": 720,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1Nb411M7r8",
        "cover43": "",
        "bvid": "BV1Nb411M7r8",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "enable_vt": 0,
        "ai_rcmd": null,
        "rcmd_reason": "和B站小伙伴一起见证历史！黑洞到底长啥样？错过直播的你还不快点进来。"
      },
      {
        "aid": 48678913,
        "videos": 1,
        "tid": 161,
        "tname": "手工",
        "copyright": 1,
        "pic": "http://i0.hdslb.com/bfs/archive/8cda8b937795081c5620b95a06670fd15ed5f768.jpg",
        "title": "破釜沉舟跑步机",
        "pubdate": 1554694435,
        "ctime": 1554694435,
        "desc": "-",
        "state": 0,
        "duration": 138,
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
          "no_background": 0,
          "arc_pay": 0,
          "pay_free_watch": 0
        },
        "owner": {
          "mid": 280793434,
          "name": "手工耿",
          "face": "http://i1.hdslb.com/bfs/face/b8a75ae7d2a0e2af1d36ca9f1084d850eebb28e3.jpg"
        },
        "stat": {
          "aid": 48678913,
          "view": 12760040,
          "danmaku": 20334,
          "reply": 14432,
          "favorite": 58473,
          "coin": 179999,
          "share": 146849,
          "now_rank": 0,
          "his_rank": 2,
          "like": 436988,
          "dislike": 0,
          "vt": 0,
          "vv": 12760040
        },
        "dynamic": "#手工##创意##自制#",
        "cid": 85243779,
        "dimension": {
          "width": 1080,
          "height": 1920,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1eb411u7Pz",
        "up_from_v2": 9,
        "cover43": "",
        "bvid": "BV1eb411u7Pz",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "enable_vt": 0,
        "ai_rcmd": null,
        "rcmd_reason": "脑洞发明家手工耿最新力作！如果你恨一个人，就送他这台破釜沉舟跑步机吧。"
      },
      {
        "aid": 48316018,
        "videos": 1,
        "tid": 22,
        "tname": "鬼畜调教",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/90a5f41351f7d8622f5c5e0aa163933e05830bd3.jpg",
        "title": "【名师rap】游戏不打不成才",
        "pubdate": 1554431709,
        "ctime": 1554415633,
        "desc": "欢迎收看由各位名师带来的精彩育儿饶舌讲座，教育孩子最科学的方法就是督促孩子打游戏，你学到了吗？\n如果想学习更多相关课程，可以收看名师讲堂·下一讲：如何让孩子爱上♂学习？（av2274779）",
        "state": 0,
        "duration": 156,
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
          "mid": 375375,
          "name": "伊丽莎白鼠",
          "face": "https://i0.hdslb.com/bfs/face/6c36ec15f6d7ddd9bdb558511521bd0256779e1c.jpg"
        },
        "stat": {
          "aid": 48316018,
          "view": 8560735,
          "danmaku": 25131,
          "reply": 24307,
          "favorite": 206726,
          "coin": 382539,
          "share": 88084,
          "now_rank": 0,
          "his_rank": 2,
          "like": 476744,
          "dislike": 0,
          "vt": 0,
          "vv": 8560735
        },
        "dynamic": "没想到吧，时隔4年的名师rap居然有续作！快点赞投币收藏，素质3连是我更新的最大动力！",
        "cid": 84631475,
        "dimension": {
          "width": 1280,
          "height": 720,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1Yb411g7Mu",
        "cover43": "",
        "bvid": "BV1Yb411g7Mu",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "enable_vt": 0,
        "ai_rcmd": null,
        "rcmd_reason": "爷爷，你关注的鬼畜UP主终终终终于更新啦！还是熟悉的全明星阵容，还是曾经的味道。"
      },
      {
        "aid": 48823532,
        "videos": 1,
        "tid": 21,
        "tname": "日常",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/7cb8e384d34946564453a22131c50aa4eb308dfc.jpg",
        "title": "随机理发！太丢人了！！早知道这样我还不如女装！",
        "pubdate": 1554888608,
        "ctime": 1554817240,
        "desc": "太羞耻了！不能我一个受罪！收藏过2W就抽一个员工理跟我一样的发型！\n发现生活，改变自己\n体验世界的点点滴滴！\nav48289549 和UP主以物换物，最后竟然换到了中国boy的...！\nav48120567 赤身拳击！干翻拳击教练需要几拳？\nav47677645 精子捐献是怎样的体验？\nav47479428 名媛养成指南！\nav47006491 和“少爷”up主互换身份\nav46265017 200万粉UP主在上海开公司到底要花多少钱？\nav45061698 第一次去夜店是怎样的体验？",
        "state": 0,
        "duration": 347,
        "mission_id": 11230,
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
          "no_background": 0,
          "arc_pay": 0,
          "pay_free_watch": 0
        },
        "owner": {
          "mid": 808171,
          "name": "吃素的狮子",
          "face": "https://i1.hdslb.com/bfs/face/dd773c9572494338ada15aa10262a510f161baf1.jpg"
        },
        "stat": {
          "aid": 48823532,
          "view": 1523181,
          "danmaku": 13043,
          "reply": 4401,
          "favorite": 37835,
          "coin": 186720,
          "share": 5163,
          "now_rank": 0,
          "his_rank": 3,
          "like": 161974,
          "dislike": 0,
          "vt": 0,
          "vv": 1523181
        },
        "dynamic": "太羞耻了！不能我一个受罪！收藏过2W就抽一个员工理跟我一样的发型！",
        "cid": 85496423,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1ib411T7bt",
        "cover43": "",
        "bvid": "BV1ib411T7bt",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "enable_vt": 0,
        "ai_rcmd": null,
        "rcmd_reason": "男人就要对自己狠一点，狮子的这个新发型说实话还有点小帅呢！"
      },
      {
        "aid": 48880868,
        "videos": 1,
        "tid": 76,
        "tname": "美食制作",
        "copyright": 1,
        "pic": "http://i2.hdslb.com/bfs/archive/8fd09f285109fc105a3427745329b0bdb055cc6d.jpg",
        "title": "这个水果长得真漂亮，不如做成【水果奶酪三明治】吧~嘻嘻",
        "pubdate": 1554897659,
        "ctime": 1554880873,
        "desc": "记得挑松软的吐司面包，吃起来是有点像甜点的口感！\nBGM：野餐面包 - Happy by Mikki Aglaganov",
        "state": 0,
        "duration": 192,
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
          "mid": 17409016,
          "name": "爱做饭的芋头SAMA",
          "face": "http://i1.hdslb.com/bfs/face/2182d21ff5ae520f392f55b59022bc17f43b4943.jpg"
        },
        "stat": {
          "aid": 48880868,
          "view": 2231330,
          "danmaku": 3383,
          "reply": 3870,
          "favorite": 52784,
          "coin": 102138,
          "share": 9293,
          "now_rank": 0,
          "his_rank": 8,
          "like": 147138,
          "dislike": 0,
          "vt": 0,
          "vv": 2231330
        },
        "dynamic": "还有什么能比美丽的三明治更让人心情大好吗？emm…吃掉它！",
        "cid": 85602013,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV19b411T7a7",
        "cover43": "",
        "bvid": "BV19b411T7a7",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "enable_vt": 0,
        "ai_rcmd": null,
        "rcmd_reason": "这世上还有什么比新鲜的水果三明治更美好的吗？那就是一颗善良的心。"
      },
      {
        "aid": 48220814,
        "videos": 1,
        "tid": 183,
        "tname": "影视剪辑",
        "copyright": 1,
        "pic": "http://i0.hdslb.com/bfs/archive/d4fc8471e6fe3bcdf1de4df43fabffaad74646b4.jpg",
        "title": "【七代小丑/踩点/混剪/高燃】前方高能！欢乐与惊悚的踩点视觉盛宴！希斯莱杰诞辰40周年纪念。",
        "pubdate": 1554368448,
        "ctime": 1554341020,
        "desc": "BGM：《Lock Me Up》 - The Cab\n            《Holocene》 - Bon Iver \n推荐耳机食用，从筹备到剪辑完成断断续续花了一个月，希望我的用心剪辑可以被更多的人看到。\n一直都想做个DC小丑群像剪辑，把所有我喜欢的银幕小丑都剪到一起，\n届时烦请各位小伙伴理性发言。不要在评论区和弹幕引战、人身攻击和散布演员谣言\n谢谢配合！\n要是喜欢这期的话，求点赞、收藏和硬币。\n做视频实属不易，小伙伴们的支持与鼓励是我继续做视频的动力！",
        "state": 0,
        "duration": 343,
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
          "mid": 27259842,
          "name": "迪亚瓦尔Diaval",
          "face": "https://i0.hdslb.com/bfs/face/ade2291e23d48050c1617dbaf3583b98d46be0dc.jpg"
        },
        "stat": {
          "aid": 48220814,
          "view": 23693530,
          "danmaku": 45208,
          "reply": 10213,
          "favorite": 833645,
          "coin": 789760,
          "share": 136694,
          "now_rank": 0,
          "his_rank": 3,
          "like": 1085389,
          "dislike": 0,
          "vt": 0,
          "vv": 23693530
        },
        "dynamic": "#希斯莱杰##自杀小队##小丑#",
        "cid": 517786039,
        "dimension": {
          "width": 3840,
          "height": 2160,
          "rotate": 0
        },
        "season_id": 3223,
        "short_link_v2": "https://b23.tv/BV1Jb411W7dH",
        "first_frame": "http://i1.hdslb.com/bfs/storyff/n220227qn1sayugogts51k3m0m2cihw0_firsti.jpg",
        "cover43": "",
        "bvid": "BV1Jb411W7dH",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "enable_vt": 0,
        "ai_rcmd": null,
        "rcmd_reason": "感谢希斯·莱杰为我们带来如此经典的银幕形象，愿你安好。"
      },
      {
        "aid": 48956942,
        "videos": 1,
        "tid": 17,
        "tname": "单机游戏",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/564e938ae040831fa1620981b2e6e33a51b72ffd.jpg",
        "title": "【敖厂长】沙雕游戏主角死法超级华丽",
        "pubdate": 1554957465,
        "ctime": 1554957466,
        "desc": "500万粉丝达成 收藏充电硬币庆祝一波!",
        "state": 0,
        "duration": 785,
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
          "no_background": 0,
          "arc_pay": 0,
          "pay_free_watch": 0
        },
        "owner": {
          "mid": 122879,
          "name": "敖厂长",
          "face": "https://i2.hdslb.com/bfs/face/71d85b84b0b2aa59009cd6af09b53aac309c3461.jpg"
        },
        "stat": {
          "aid": 48956942,
          "view": 5272672,
          "danmaku": 28520,
          "reply": 9614,
          "favorite": 51080,
          "coin": 234581,
          "share": 7342,
          "now_rank": 0,
          "his_rank": 1,
          "like": 238148,
          "dislike": 0,
          "vt": 0,
          "vv": 5272672
        },
        "dynamic": "#敖厂长#新视频庆祝500万粉丝达成！沙雕游戏主角死法超级华丽！",
        "cid": 85738601,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1bb411M7G2",
        "cover43": "",
        "bvid": "BV1bb411M7G2",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "enable_vt": 0,
        "ai_rcmd": null,
        "rcmd_reason": "恶意满满的摩托赛车游戏，制作组的重点完全放在了花式死法上啊喂→_→"
      },
      {
        "aid": 48949609,
        "videos": 1,
        "tid": 138,
        "tname": "搞笑",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/970b7377cddc309b1793c0d7daace2a2a86e42a3.jpg",
        "title": "探秘印度医药，真的有牛尿做的药吗？",
        "pubdate": 1554951398,
        "ctime": 1554951398,
        "desc": "印度真有牛尿做的药吗？喝一口是什么味道？",
        "state": 0,
        "duration": 375,
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
          "mid": 176037767,
          "name": "我是郭杰瑞",
          "face": "http://i2.hdslb.com/bfs/face/6182455e4d61159121c223ddc7a3a381f2d4d056.jpg"
        },
        "stat": {
          "aid": 48949609,
          "view": 1517839,
          "danmaku": 13115,
          "reply": 3538,
          "favorite": 3016,
          "coin": 16410,
          "share": 2337,
          "now_rank": 0,
          "his_rank": 16,
          "like": 46687,
          "dislike": 0,
          "vt": 0,
          "vv": 1517839
        },
        "dynamic": "印度有牛尿做的药吗？我不是药神！",
        "cid": 85723703,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1Lb411M7B9",
        "cover43": "",
        "bvid": "BV1Lb411M7B9",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "enable_vt": 0,
        "ai_rcmd": null,
        "rcmd_reason": "继续跟随郭杰瑞走进印度。什么？你居然敢把印度神药当水喝w(ﾟДﾟ)w"
      },
      {
        "aid": 48227749,
        "videos": 1,
        "tid": 222,
        "tname": "小宠异宠",
        "copyright": 1,
        "pic": "http://i2.hdslb.com/bfs/archive/f42431037088b5ddceae79ca62df24cc78575eff.jpg",
        "title": "华农兄弟：怀孕好几个月的香猪终于生了，一下生了9只小香猪",
        "pubdate": 1554375629,
        "ctime": 1554375634,
        "desc": "华农兄弟：怀孕好几个月的香猪终于生了，一下生了9只小香猪",
        "state": 0,
        "duration": 151,
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
          "no_background": 0,
          "arc_pay": 0,
          "pay_free_watch": 0
        },
        "owner": {
          "mid": 250858633,
          "name": "华农兄弟",
          "face": "https://i1.hdslb.com/bfs/face/bac504655c69ab937b0be4557e27535f794b0c66.jpg"
        },
        "stat": {
          "aid": 48227749,
          "view": 1743011,
          "danmaku": 6544,
          "reply": 3757,
          "favorite": 2755,
          "coin": 17290,
          "share": 2027,
          "now_rank": 0,
          "his_rank": 10,
          "like": 57675,
          "dislike": 0,
          "vt": 0,
          "vv": 1743011
        },
        "dynamic": "华农兄弟：怀孕好几个月的香猪终于生了，一下生了9只小香猪",
        "cid": 84476924,
        "dimension": {
          "width": 3840,
          "height": 2160,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1pb411W7iY",
        "pub_location": "江西",
        "cover43": "",
        "bvid": "BV1pb411W7iY",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "enable_vt": 0,
        "ai_rcmd": null,
        "rcmd_reason": "刚出生小香猪超可爱啊，好想抱一只回家，再过几个月就可以....( ‵▽′)ψ"
      },
      {
        "aid": 48882824,
        "videos": 1,
        "tid": 182,
        "tname": "影视杂谈",
        "copyright": 1,
        "pic": "http://i0.hdslb.com/bfs/archive/51e06a15b1a02478d7106931cd8bddda8c2c67ab.jpg",
        "title": "电影最TOP 123: 难以超越的奇幻史诗巨制《指环王》三部曲",
        "pubdate": 1554899413,
        "ctime": 1554899415,
        "desc": "本期咱来聊聊彼得•杰克逊执导的魔幻史诗巨著《指环王》三部曲。",
        "state": 0,
        "duration": 4632,
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
          "mid": 17819768,
          "name": "电影最TOP",
          "face": "http://i2.hdslb.com/bfs/face/6b2ade215ea603b495648875c925172a863d16d4.jpg"
        },
        "stat": {
          "aid": 48882824,
          "view": 3771761,
          "danmaku": 56684,
          "reply": 6959,
          "favorite": 73050,
          "coin": 202173,
          "share": 12895,
          "now_rank": 0,
          "his_rank": 2,
          "like": 164801,
          "dislike": 0,
          "vt": 0,
          "vv": 3771761
        },
        "dynamic": "#魔戒##指环王##史诗#",
        "cid": 85605834,
        "dimension": {
          "width": 1280,
          "height": 720,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1db411T7He",
        "cover43": "",
        "bvid": "BV1db411T7He",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "enable_vt": 0,
        "ai_rcmd": null,
        "rcmd_reason": "一小时重温影史经典《指环王》系列。不论再看多少遍，感动与震撼依旧。"
      },
      {
        "aid": 48473798,
        "videos": 1,
        "tid": 21,
        "tname": "日常",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/c0eff150f8ba32fefdb14cf8de4e39a0a4982640.jpg",
        "title": "和日本妹子结婚要花多少钱？日本的收入情况up听到后惊呆了。。。",
        "pubdate": 1554536915,
        "ctime": 1554536915,
        "desc": "记得关注我豆奶子呀~谢谢您嘞！\n→av40409086 日本妹子为什么这么瘦\n→av42806782 日本妹子为啥冬天光腿\n→av43240232 日本妹子吃超难吃中国菜的反应\n→av40892710 日本妹子为啥牙齿不太好看\n→av42064376 日本妹子为啥胸大\n→av41491192 片尾曲 日语版念诗之王\n有什么疑问请弹幕留言！豆奶为您倾情解惑！",
        "state": 0,
        "duration": 350,
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
          "mid": 6574487,
          "name": "纳豆奶奶",
          "face": "https://i2.hdslb.com/bfs/face/0a8638b34173708fcf979bd1166fbb7fdb1110a4.jpg"
        },
        "stat": {
          "aid": 48473798,
          "view": 4564805,
          "danmaku": 21747,
          "reply": 9727,
          "favorite": 44873,
          "coin": 175160,
          "share": 7102,
          "now_rank": 0,
          "his_rank": 6,
          "like": 256532,
          "dislike": 0,
          "vt": 0,
          "vv": 4564805
        },
        "dynamic": "#日本文化##科普##吐槽#身边的男性友人看完这期表示非常喜欢，女性朋友更是爱不释手！结婚？日本收入？这些你最关心的问题都在这里！",
        "cid": 84891041,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1pb411373L",
        "cover43": "",
        "bvid": "BV1pb411373L",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "enable_vt": 0,
        "ai_rcmd": null,
        "rcmd_reason": "日本妹子坦露择偶标准，和你想象的一样吗？不过这和我又有什么关系呢_(:з」∠)_"
      },
      {
        "aid": 48138432,
        "videos": 1,
        "tid": 17,
        "tname": "单机游戏",
        "copyright": 1,
        "pic": "http://i2.hdslb.com/bfs/archive/89baecb3461b6bfaa4a969c812282161a27ebc0d.jpg",
        "title": "【老番茄】史上最骚杀手(第三集)",
        "pubdate": 1554436829,
        "ctime": 1554258253,
        "desc": "第一集：av45629276 ； 第二集：av46295706\n如果收藏到4w会继续做下去的！\n这次请了好朋友Chimera君配音！没看过他视频的一定要去看一看！超级厉害！我特别崇拜的UP主！\nP.S.视频中对原剧情进行了部分改编。如：给女公关写情书的并非里科·戴尔加多，而是他的弟弟赫克托·戴尔加多。为了简化剧情，在视频中说成是里科所写。",
        "state": 0,
        "duration": 624,
        "mission_id": 11225,
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
          "mid": 546195,
          "name": "老番茄",
          "face": "http://i0.hdslb.com/bfs/face/bc5ca101313d4db223c395d64779e76eb3482d60.jpg"
        },
        "stat": {
          "aid": 48138432,
          "view": 19624690,
          "danmaku": 58471,
          "reply": 8593,
          "favorite": 453185,
          "coin": 1213654,
          "share": 26329,
          "now_rank": 0,
          "his_rank": 1,
          "like": 1232305,
          "dislike": 0,
          "vt": 0,
          "vv": 19624690
        },
        "dynamic": "这个杀手真的太骚了！",
        "cid": 84597412,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "season_id": 14014,
        "short_link_v2": "https://b23.tv/BV1Nb411W7uN",
        "cover43": "",
        "bvid": "BV1Nb411W7uN",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "enable_vt": 0,
        "ai_rcmd": null,
        "rcmd_reason": "职业杀手（雾）大光头这次来到了哥伦比亚村庄，他会以怎样奇葩的方式达成目标呢？"
      },
      {
        "aid": 48871442,
        "videos": 1,
        "tid": 182,
        "tname": "影视杂谈",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/c917f4d21543461dcffe0230e0614abef4b54483.jpg",
        "title": "DC超强反英雄「黑亚当」科普，《雷霆沙赞2》反派就是他了！",
        "pubdate": 1554890417,
        "ctime": 1554890426,
        "desc": "DC超强反英雄「黑亚当」科普，《雷霆沙赞2》反派就是他了！",
        "state": 0,
        "duration": 435,
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
          "mid": 7487399,
          "name": "努力的Lorre",
          "face": "http://i2.hdslb.com/bfs/face/c63ebeed7d49967e2348ef953b539f8de90c5140.jpg"
        },
        "stat": {
          "aid": 48871442,
          "view": 1694250,
          "danmaku": 2799,
          "reply": 1588,
          "favorite": 7199,
          "coin": 15416,
          "share": 1089,
          "now_rank": 0,
          "his_rank": 18,
          "like": 49430,
          "dislike": 0,
          "vt": 0,
          "vv": 1694250
        },
        "dynamic": "DC超强反英雄「黑亚当」科普，《雷霆沙赞2》反派就是他了！",
        "cid": 85584748,
        "dimension": {
          "width": 1920,
          "height": 1072,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1wb411M73A",
        "cover43": "",
        "bvid": "BV1wb411M73A",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "enable_vt": 0,
        "ai_rcmd": null,
        "rcmd_reason": "看完《沙赞》是不是还有些意犹未尽？来了解一下DC漫画中的真反派吧。"
      }
    ]
  }
}
```

</details>
