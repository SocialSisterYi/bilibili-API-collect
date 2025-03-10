# 视频排行榜

<img src="../../assets/img/ranking.svg" width="100" height="100"/>

- [获取分区视频排行榜列表](#获取分区视频排行榜列表)

---

## 获取分区视频排行榜列表

> https://api.bilibili.com/x/web-interface/ranking/v2

*请求方式：GET*

鉴权方式: 请求头 `User-Agent` 非敏感字符串

获取稿件内容质量，近期的数据前100个稿件，动态更新。

**url参数：**

| 参数名       | 类型   | 内容         | 必要性 | 备注 |
| ------------ | ------ | ------------ | ------ | ------------------------------------- |
| rid          | number | 目标分区 tid | 非必要 | 默认为 0 (全站), 详细参见 [视频分区一览](../video/video_zone.md#视频分区一览), 仅支持主分区 |
| type         | string | 排行榜类型   | 非必要 | 全部: all<br />新人: rokkie<br />原创: origin |
| web_location | string | 333.934      | 非必要 |      |
| w_rid        | string | WBI 签名     | 非必要 | 参见 [WBI 签名](../misc/sign/wbi.md) |
| wts          | number | Unix 时间戳  | 非必要 | 参见 [WBI 签名](../misc/sign/wbi.md) |

**json回复：**

根对象：

| 字段    | 类型  | 内容     | 备注                        |
| ------- | ----- | -------- | --------------------------- |
| code    | num   | 返回值   | 0：成功<br />-400：请求错误 |
| message | str   | 错误信息 | 默认为0                     |
| ttl     | num   | 1        |                             |
| data    | array | 视频列表 |                             |

`data`对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| note | str | “根据稿件内容质量、近期的数据综合展示，动态更新” | 目前恒为此结果 |
| list | list | 视频列表 | 暂无 |

`list`列表：

| 项  | 类型 | 内容            | 备注 |
| --- | ---- | --------------- | ---- |
| 0   | obj  | 排行榜第1名     |      |
| n   | obj  | 排行榜第(n+1)名 |      |
| ……  | obj  | ……              | ……   |
| 99  | obj  | 排行榜第100名    |      |

`data`列表中的对象：

可参考[获取视频详细信息（web端）](../video/info.md#获取视频详细信息（web端）)中的data对象。本API对象中所有字段，均可在链接对象中找到。

**示例：**

获取`tid=1`（动画）分区中所有稿件排行榜排行榜

```shell
curl -G 'https://api.bilibili.com/x/web-interface/ranking/v2' \
--data-urlencode 'tid=1' \
--data-urlencode 'type=all'
```

<details>
<summary>因本API返回对象过多（100个），故不全部展示，使用者可自行尝试。查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "note": "根据稿件内容质量、近期的数据综合展示，动态更新",
    "list": [
      {
        "aid": 517751921,
        "videos": 1,
        "tid": 253,
        "tname": "动漫杂谈",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/c70d89ce459eb4a501885f7050ee37d94a5944e4.jpg",
        "title": "神作之月！十年前的奇迹！新番时光机「2012年10月篇」",
        "pubdate": 1668856639,
        "ctime": 1668856639,
        "desc": "新番时光机，回顾十年前的动画！本期为2012年10月\n\n往期：\nBV1Br4y1y7ri\nBV1Ly4y1s7wp\nBV16r4y1A7w4\nBV1c64y1f7ff\nBV1sA411A7JD\nBV1wT4y1D729\nBV1mR4y1A7Ey\nBV1gB4y1V7sz",
        "state": 0,
        "duration": 752,
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
          "mid": 63231,
          "name": "泛式",
          "face": "https://i0.hdslb.com/bfs/face/2608aaa45309c77ac88fbfaa40e160b8c7892985.jpg"
        },
        "stat": {
          "aid": 517751921,
          "view": 1156543,
          "danmaku": 14224,
          "reply": 5601,
          "favorite": 28753,
          "coin": 58324,
          "share": 6548,
          "now_rank": 0,
          "his_rank": 11,
          "like": 136884,
          "dislike": 0
        },
        "dynamic": "泛式队长，时光机更新！",
        "cid": 896512490,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "season_id": 21183,
        "short_link": "https://b23.tv/BV1Eg411v7a1",
        "short_link_v2": "https://b23.tv/BV1Eg411v7a1",
        "first_frame": "http://i2.hdslb.com/bfs/storyff/n221119a29spw3xihz66g3aeuae34t8i_firsti.jpg",
        "pub_location": "上海",
        "bvid": "BV1Eg411v7a1",
        "score": 0
      },
      {
        "aid": 987795979,
        "videos": 1,
        "tid": 27,
        "tname": "综合",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/6045782867b5dd91196d93324028f3346eed663a.jpg",
        "title": "看海贼的和看火影的都沉默了......",
        "pubdate": 1668830400,
        "ctime": 1668780416,
        "desc": "这一期我把之前十多期的火影加海贼王的内容做了个合集，把做得还可以的片段浓缩成这3分钟，有部分重制了，下一次这类型的视频等着绿牛和尼卡路飞出场，在做多一期—。—感觉还可以的话就给我个三连……或者一个免费的赞，谢谢了",
        "state": 0,
        "duration": 196,
        "mission_id": 1074046,
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
          "mid": 601674546,
          "name": "-夏秋冬-",
          "face": "https://i0.hdslb.com/bfs/face/83b4dd8830c24ee73fbc59f0bd974ea37b0a9470.jpg"
        },
        "stat": {
          "aid": 987795979,
          "view": 2098359,
          "danmaku": 3460,
          "reply": 2393,
          "favorite": 33358,
          "coin": 54977,
          "share": 45656,
          "now_rank": 0,
          "his_rank": 15,
          "like": 116834,
          "dislike": 0
        },
        "dynamic": "",
        "cid": 895657562,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "short_link": "https://b23.tv/BV1D44y1Q7im",
        "short_link_v2": "https://b23.tv/BV1D44y1Q7im",
        "first_frame": "http://i2.hdslb.com/bfs/storyff/n221118qn157llqyqytou2d6cypvute8_firsti.jpg",
        "pub_location": "广东",
        "bvid": "BV1D44y1Q7im",
        "score": 0
      },
      {
        "aid": 690264225,
        "videos": 1,
        "tid": 86,
        "tname": "特摄",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/f1ff369250c5fa72106e32e3d7862740ba6a3ab9.jpg",
        "title": "评分7.0！风评不佳？诚实吐槽特摄电影《新奥特曼》",
        "pubdate": 1668860302,
        "ctime": 1668860302,
        "desc": "点个关注再走哦~",
        "state": 0,
        "duration": 832,
        "mission_id": 1028236,
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
          "mid": 730732,
          "name": "瓶子君152",
          "face": "https://i1.hdslb.com/bfs/face/951d0a41b33e0c73a0460d20ee83c4c62b0da45f.jpg"
        },
        "stat": {
          "aid": 690264225,
          "view": 1503667,
          "danmaku": 4718,
          "reply": 3816,
          "favorite": 20847,
          "coin": 49980,
          "share": 4100,
          "now_rank": 0,
          "his_rank": 18,
          "like": 131574,
          "dislike": 0
        },
        "dynamic": "#动漫杂谈# #新奥特曼# \n新奥特曼这部电影终于也是借着在你B的推出全网首播\n我也终于是蹭到一回热度了\n这次电影其实评价十分的两极化，那么他究竟讲了什么，我又觉得他怎么样呢，答案就在视频中\n本期视频点赞10w投币4w后面做德凯完结吐槽",
        "cid": 896556696,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "short_link": "https://b23.tv/BV1S24y1y7yn",
        "short_link_v2": "https://b23.tv/BV1S24y1y7yn",
        "first_frame": "http://i0.hdslb.com/bfs/storyff/n221119a23dw30m9rx43073w439ptba1_firsti.jpg",
        "pub_location": "上海",
        "bvid": "BV1S24y1y7yn",
        "score": 0
      },
      {
        "aid": 690367853,
        "videos": 1,
        "tid": 47,
        "tname": "短片·手书·配音",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/a79fc307134273460bcc2ebcf56569097dcf5537.jpg",
        "title": "”B 站 用 户 精 神 现 状 Ⅱ “",
        "pubdate": 1668829018,
        "ctime": 1668829019,
        "desc": "耶 熬夜之后\n准备看柯南去！\n希望这个视频能带给你快乐！\n☆··☆··☆··☆··☆··☆··☆··☆··☆··☆··☆\n\n文案/绘画/配音/剪辑：鸽一品 \n本节目基本保持1-2周1更！如果喜欢的话请一定要多多三连互动哦！\n\n平时我也会在直播间和大家互动发\n直播时间会在动态中发布周表 大概一周五播\n从0开始做V！ 请多多支持！\n\n ☆··☆··☆··☆··☆··☆··☆··☆··☆··☆··☆\n\n感谢你的支持！鸽子也有自己贩售周边的桃宝店啦~\n一品鸽子窝：https://shop409788748.tao",
        "state": 0,
        "duration": 122,
        "mission_id": 1074046,
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
          "mid": 11399495,
          "name": "鸽一品",
          "face": "https://i2.hdslb.com/bfs/face/87f1fca837a16d6bbae552861454b45b1519301e.jpg"
        },
        "stat": {
          "aid": 690367853,
          "view": 1158451,
          "danmaku": 2596,
          "reply": 338,
          "favorite": 11617,
          "coin": 3685,
          "share": 429,
          "now_rank": 0,
          "his_rank": 45,
          "like": 132542,
          "dislike": 0
        },
        "dynamic": "耶 熬夜之后\n准备看柯南去！\n希望这个视频能带给你快乐！",
        "cid": 896076372,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "season_id": 174909,
        "short_link": "https://b23.tv/BV1n24y117Zz",
        "short_link_v2": "https://b23.tv/BV1n24y117Zz",
        "first_frame": "http://i2.hdslb.com/bfs/storyff/n221119a23psu3qlqb6ssz3rae8wrk8s_firsti.jpg",
        "pub_location": "浙江",
        "bvid": "BV1n24y117Zz",
        "score": 0
      },
      {
        "aid": 605336408,
        "videos": 1,
        "tid": 47,
        "tname": "短片·手书·配音",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/69ce5bd3ab899d2212e6dab962c8cfa7f41ad5af.jpg",
        "title": "【封号斗罗】哔哩哔哩，来封我朋友的号呀！",
        "pubdate": 1668830400,
        "ctime": 1668823531,
        "desc": "我好坏~\n\n后期 可大师 / 桥和你\n封号斗罗 CV 海盐奶糖白露\nBGM Girls Generation-Gee (Instrumental)",
        "state": 0,
        "duration": 64,
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
          "is_cooperation": 1,
          "ugc_pay_preview": 0,
          "no_background": 0,
          "arc_pay": 0,
          "pay_free_watch": 0
        },
        "owner": {
          "mid": 20603745,
          "name": "其人",
          "face": "https://i0.hdslb.com/bfs/face/f5eb49deb5e87dde3f143c5d2d95d3338060ab93.jpg"
        },
        "stat": {
          "aid": 605336408,
          "view": 652606,
          "danmaku": 1527,
          "reply": 757,
          "favorite": 17896,
          "coin": 5787,
          "share": 762,
          "now_rank": 0,
          "his_rank": 49,
          "like": 118886,
          "dislike": 0
        },
        "dynamic": "",
        "cid": 895984408,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "season_id": 780987,
        "short_link": "https://b23.tv/BV1u84y1C7w3",
        "short_link_v2": "https://b23.tv/BV1u84y1C7w3",
        "first_frame": "http://i2.hdslb.com/bfs/storyff/n221119a2tl68uyltrxucgeyufpd33gz_firsti.jpg",
        "pub_location": "广东",
        "bvid": "BV1u84y1C7w3",
        "score": 0
      },
      {
        "aid": 220294467,
        "videos": 1,
        "tid": 24,
        "tname": "MAD·AMV",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/f18d4ecf7578e997d870f0aaf83a26e4fc379d2f.jpg",
        "title": "【原神夜店风】深 夜 邂 逅~",
        "pubdate": 1668827100,
        "ctime": 1668770318,
        "desc": "希望大家希望 做了蛮久的",
        "state": 0,
        "duration": 77,
        "mission_id": 1060142,
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
          "is_cooperation": 1,
          "ugc_pay_preview": 0,
          "no_background": 0,
          "arc_pay": 0,
          "pay_free_watch": 0
        },
        "owner": {
          "mid": 1542136,
          "name": "三笠・阿克曼",
          "face": "http://i1.hdslb.com/bfs/face/871d3db6a329d2b0e1a67c546301a65f9752d62a.jpg"
        },
        "stat": {
          "aid": 220294467,
          "view": 353464,
          "danmaku": 594,
          "reply": 474,
          "favorite": 34617,
          "coin": 11816,
          "share": 2647,
          "now_rank": 0,
          "his_rank": 66,
          "like": 88222,
          "dislike": 0
        },
        "dynamic": "大的来了！#原神##MAD#",
        "cid": 895467115,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "season_id": 330790,
        "short_link": "https://b23.tv/BV1d8411j7xK",
        "short_link_v2": "https://b23.tv/BV1d8411j7xK",
        "first_frame": "http://i2.hdslb.com/bfs/storyff/n221118qntcb67e8mcic613b3frykpxn_firsti.jpg",
        "pub_location": "陕西",
        "bvid": "BV1d8411j7xK",
        "score": 0
      },
      {
        "aid": 562862605,
        "videos": 1,
        "tid": 47,
        "tname": "短片·手书·配音",
        "copyright": 1,
        "pic": "http://i0.hdslb.com/bfs/archive/1cd7cb6cf45cdbd65b5b2cb85ac48bd045a110bf.jpg",
        "title": "【孤独摇滚/手书】给波奇酱穿新衣服~",
        "pubdate": 1668816600,
        "ctime": 1668798123,
        "desc": "小波奇那么漂亮！快给她买新衣服！！\n感谢原画姐姐们把波奇画得那么可爱！！！",
        "state": 0,
        "duration": 105,
        "mission_id": 1074046,
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
          "is_cooperation": 1,
          "ugc_pay_preview": 0,
          "no_background": 0,
          "arc_pay": 0,
          "pay_free_watch": 0
        },
        "owner": {
          "mid": 1992514,
          "name": "纸欣Dream",
          "face": "https://i1.hdslb.com/bfs/face/2c09ba55a475fafa1e82eff79869a9580774f1b0.jpg"
        },
        "stat": {
          "aid": 562862605,
          "view": 428030,
          "danmaku": 793,
          "reply": 854,
          "favorite": 24869,
          "coin": 25730,
          "share": 6026,
          "now_rank": 0,
          "his_rank": 96,
          "like": 48593,
          "dislike": 0
        },
        "dynamic": "#孤独摇滚# 给波奇酱换新衣服！！",
        "cid": 896737541,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "short_link": "https://b23.tv/BV1fv4y117Qh",
        "short_link_v2": "https://b23.tv/BV1fv4y117Qh",
        "first_frame": "http://i0.hdslb.com/bfs/storyff/n221119a2usulbe9u89fy3g0479v48y0_firsti.jpg",
        "pub_location": "广东",
        "bvid": "BV1fv4y117Qh",
        "score": 0
      },
      {
        "aid": 945304847,
        "videos": 1,
        "tid": 47,
        "tname": "短片·手书·配音",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/76026f6a6d7698fcc5656fb2d7c151dcb4b4ea65.jpg",
        "title": "【丧病中配】如果2077的CV来配音《赛博朋克：边缘行者》（第五话）",
        "pubdate": 1668843300,
        "ctime": 1668836610,
        "desc": "本作品为剪辑二创，非商业用途仅供娱乐，喜欢的朋友欢迎去看完整版原片！\n有幸邀请到CV大佬们一起配《赛博朋克：边缘行者》玩，希望大家喜欢。本视频点赞过5万，继续更新第六话，谢谢大家的支持啦！\nCAST：\n大卫：@刘照坤Jock  \n露西：CV张琦@Kii崽 \n曼恩：嘟督\n吉米黑咲：@配音演员虞晓旭   \n琦薇：﻿@楼倾司  \n多莉欧：CV张琦@Kii崽  \n田中：@黑石稔  \n校长：@黑石稔  \n葛洛莉亚：CV张琦@Kii崽  \nNCPD（全）：@是没有风的内个无风吖  \n义体医生：嘟督\n夹暴机动队：@菇力",
        "state": 0,
        "duration": 1034,
        "mission_id": 1089377,
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
          "is_cooperation": 1,
          "ugc_pay_preview": 0,
          "no_background": 0,
          "arc_pay": 0,
          "pay_free_watch": 0
        },
        "owner": {
          "mid": 2403047,
          "name": "嘟督不噶油",
          "face": "https://i2.hdslb.com/bfs/face/74738ef7c1ff743959908029b4c9d2dd8b5827c6.jpg"
        },
        "stat": {
          "aid": 945304847,
          "view": 397714,
          "danmaku": 2559,
          "reply": 1513,
          "favorite": 16296,
          "coin": 39497,
          "share": 3686,
          "now_rank": 0,
          "his_rank": 0,
          "like": 54893,
          "dislike": 0
        },
        "dynamic": "久等了！丧病中配《赛博朋克：边缘行者》第五话参上！做个好梦，大卫~",
        "cid": 896151792,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "season_id": 751347,
        "short_link": "https://b23.tv/BV1gW4y1W7f4",
        "short_link_v2": "https://b23.tv/BV1gW4y1W7f4",
        "first_frame": "http://i0.hdslb.com/bfs/storyff/n221119a23injccl1ujog874rrzkgjbq_firsti.jpg",
        "pub_location": "上海",
        "bvid": "BV1gW4y1W7f4",
        "score": 0
      },
      {
        "aid": 432692681,
        "videos": 1,
        "tid": 47,
        "tname": "短片·手书·配音",
        "copyright": 1,
        "pic": "http://i0.hdslb.com/bfs/archive/13b14a9003bd55b842e3d956f951719e37d4698d.jpg",
        "title": "✨踏入白色殿堂，你选择谁？✨",
        "pubdate": 1668679200,
        "ctime": 1668669686,
        "desc": "听说国内人均白毛控？\n小狐兔粉毛MEME指路：BV17B4y1J7vW\nBGM：Di Young-Pixel Pig",
        "state": 0,
        "duration": 45,
        "mission_id": 1074046,
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
          "mid": 1118188465,
          "name": "在下小狐兔",
          "face": "https://i1.hdslb.com/bfs/face/182be1a72202ae348f9d39f047d7b13e32798f80.jpg"
        },
        "stat": {
          "aid": 432692681,
          "view": 1167712,
          "danmaku": 3754,
          "reply": 2080,
          "favorite": 88688,
          "coin": 53575,
          "share": 5869,
          "now_rank": 0,
          "his_rank": 5,
          "like": 170078,
          "dislike": 0
        },
        "dynamic": "染头白毛，直接少走60年弯路~",
        "cid": 894207559,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "season_id": 73722,
        "short_link": "https://b23.tv/BV1oG411F7B9",
        "short_link_v2": "https://b23.tv/BV1oG411F7B9",
        "first_frame": "http://i0.hdslb.com/bfs/storyff/n221117a2a2f8je8qiu2724qkdbgwjch_firsti.jpg",
        "pub_location": "浙江",
        "bvid": "BV1oG411F7B9",
        "score": 0
      },
      {
        "aid": 262671873,
        "videos": 1,
        "tid": 47,
        "tname": "短片·手书·配音",
        "copyright": 1,
        "pic": "http://i0.hdslb.com/bfs/archive/0d03863e63cc426bbc579bcb54433e3c2f412686.jpg",
        "title": "《不做》",
        "pubdate": 1668598143,
        "ctime": 1668598143,
        "desc": "咸鱼日常",
        "state": 0,
        "duration": 40,
        "mission_id": 1074046,
        "rights": {
          "bp": 0,
          "elec": 0,
          "download": 0,
          "movie": 0,
          "pay": 0,
          "hd5": 1,
          "no_reprint": 0,
          "autoplay": 1,
          "ugc_pay": 0,
          "is_cooperation": 0,
          "ugc_pay_preview": 0,
          "no_background": 0,
          "arc_pay": 0,
          "pay_free_watch": 0
        },
        "owner": {
          "mid": 357538100,
          "name": "懒小熊_LXX",
          "face": "https://i2.hdslb.com/bfs/face/7cc145cb9831c319f4a20dc560915478561110a8.jpg"
        },
        "stat": {
          "aid": 262671873,
          "view": 1682548,
          "danmaku": 384,
          "reply": 1984,
          "favorite": 51955,
          "coin": 21220,
          "share": 49865,
          "now_rank": 0,
          "his_rank": 11,
          "like": 231688,
          "dislike": 0
        },
        "dynamic": "",
        "cid": 893540811,
        "dimension": {
          "width": 1440,
          "height": 1080,
          "rotate": 0
        },
        "short_link": "https://b23.tv/BV1RY411d7Sp",
        "short_link_v2": "https://b23.tv/BV1RY411d7Sp",
        "up_from_v2": 8,
        "first_frame": "http://i1.hdslb.com/bfs/storyff/n221116a2qu5s05btpwu93sv0xig9hx5_firsti.jpg",
        "pub_location": "湖南",
        "bvid": "BV1RY411d7Sp",
        "score": 0
      },
      {
        "aid": 432645631,
        "videos": 1,
        "tid": 253,
        "tname": "动漫杂谈",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/976382dd53576cc1af0926a31103e5d179cd26b3.jpg",
        "title": "童年引爆全国的动画！《小鲤鱼》的最终结局和剧情究竟是什么？【拾荒记#29】",
        "pubdate": 1668741505,
        "ctime": 1668741505,
        "desc": "相关动画：《小鲤鱼历险记》\n关于拾荒记这个栏目，我将在这个系列节目和大家一起在记忆的杂物堆里翻点什么出来\n\n大家还有什么想看我解读的，欢迎在评论区指出，说不定我下期就做了呢",
        "state": 0,
        "duration": 1945,
        "mission_id": 993288,
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
          "mid": 3078223,
          "name": "野灿baka",
          "face": "https://i1.hdslb.com/bfs/face/db80dbe62245bd35b32c293670190bf8ccd47975.jpg"
        },
        "stat": {
          "aid": 432645631,
          "view": 1901441,
          "danmaku": 14422,
          "reply": 2815,
          "favorite": 20903,
          "coin": 26252,
          "share": 6618,
          "now_rank": 0,
          "his_rank": 39,
          "like": 97232,
          "dislike": 0
        },
        "dynamic": "这期下饭很足，做了一个月呢，看个饱！",
        "cid": 895004016,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "season_id": 210289,
        "short_link": "https://b23.tv/BV19G411F7iz",
        "short_link_v2": "https://b23.tv/BV19G411F7iz",
        "first_frame": "http://i0.hdslb.com/bfs/storyff/n221118a23ee03atvk7k4525jkiqwvxo_firsti.jpg",
        "pub_location": "广西",
        "bvid": "BV19G411F7iz",
        "score": 0
      },
      {
        "aid": 732840638,
        "videos": 1,
        "tid": 24,
        "tname": "MAD·AMV",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/5bf52f12ed2eb3d3576f6eb4931e82a4f0aec9ce.jpg",
        "title": "“  现 在 开 始  ，电 锯 人 也 要 起 飞 了  ”",
        "pubdate": 1668826313,
        "ctime": 1668826313,
        "desc": "是我低估了特效向MAD的难度，这次做了快一个月才做好（大概是累到很久都不想剪mad的程度。。）\n灵感来自林逸大佬的MAD视频\nbgm：16shots\n这次真的花费巨多心思，希望大家多多三连哇",
        "state": 0,
        "duration": 121,
        "mission_id": 1074046,
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
          "mid": 13458092,
          "name": "笔龙XDDD",
          "face": "https://i2.hdslb.com/bfs/face/fda9b8f0fb9d42c3ed90190b49b7478c87684078.jpg"
        },
        "stat": {
          "aid": 732840638,
          "view": 456933,
          "danmaku": 474,
          "reply": 497,
          "favorite": 16240,
          "coin": 20333,
          "share": 2288,
          "now_rank": 0,
          "his_rank": 0,
          "like": 42301,
          "dislike": 0
        },
        "dynamic": "叩",
        "cid": 896032916,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "season_id": 861825,
        "short_link": "https://b23.tv/BV1hD4y1s7fJ",
        "short_link_v2": "https://b23.tv/BV1hD4y1s7fJ",
        "first_frame": "http://i0.hdslb.com/bfs/storyff/n221119a23flpz3l68ol27195z5warrj_firsti.jpg",
        "pub_location": "浙江",
        "bvid": "BV1hD4y1s7fJ",
        "score": 0
      },
      {
        "aid": 520311091,
        "videos": 1,
        "tid": 25,
        "tname": "MMD·3D",
        "copyright": 1,
        "pic": "http://i0.hdslb.com/bfs/archive/0b15fe71c25d0c226a96a4ef253cfb946dda3a15.jpg",
        "title": "万叶：哥把你揣兜里，你把哥踹沟里",
        "pubdate": 1668871911,
        "ctime": 1668871911,
        "desc": "模型：米哈游/观海子\n渲染：小二今天吃啥啊、克里斯提亚娜\n动作/镜头：CME6大神犬\n原声：伤心欲茄",
        "state": 0,
        "duration": 16,
        "mission_id": 1060142,
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
          "mid": 403425503,
          "name": "甜甜草酿鸡",
          "face": "https://i2.hdslb.com/bfs/face/66eb2201458e7bf1875c6a1da629cf1c887e30fd.jpg"
        },
        "stat": {
          "aid": 520311091,
          "view": 401135,
          "danmaku": 206,
          "reply": 597,
          "favorite": 15559,
          "coin": 2623,
          "share": 12448,
          "now_rank": 0,
          "his_rank": 0,
          "like": 64094,
          "dislike": 0
        },
        "dynamic": "",
        "cid": 896780848,
        "dimension": {
          "width": 1080,
          "height": 1920,
          "rotate": 0
        },
        "short_link": "https://b23.tv/BV1hM411C7ez",
        "short_link_v2": "https://b23.tv/BV1hM411C7ez",
        "up_from_v2": 35,
        "first_frame": "http://i0.hdslb.com/bfs/storyff/n221119a213u50mtr1xje1pmh9ufufp1_firsti.jpg",
        "pub_location": "广东",
        "bvid": "BV1hM411C7ez",
        "score": 0
      },
      {
        "aid": 775289285,
        "videos": 1,
        "tid": 210,
        "tname": "手办·模玩",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/8defd33e5c2dd860ecb46dfef3445aad14a1f7fa.jpg",
        "title": "“最帅最强”的“究极体”？万代 MGEX 强袭自由高达 拼装模型【评头论足】",
        "pubdate": 1668830154,
        "ctime": 1668830154,
        "desc": "大家喜欢视频的话多多点赞关注投币哦~\n《评头论足》主要以第一人称的方式去介绍最新上市的模玩产品，给人以把玩在手中最真实的直观感受，为广大模型爱好者选购模型玩具产品提供方便。合作油箱 pinggaoda@qq.com",
        "state": 0,
        "duration": 1120,
        "mission_id": 1080009,
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
          "mid": 2029306,
          "name": "-评头论足-",
          "face": "https://i1.hdslb.com/bfs/face/c20b5d1f044448ff2c5f4dbafc5dc464fdcdbca5.jpg"
        },
        "stat": {
          "aid": 775289285,
          "view": 422301,
          "danmaku": 12251,
          "reply": 4824,
          "favorite": 11219,
          "coin": 26475,
          "share": 10777,
          "now_rank": 0,
          "his_rank": 0,
          "like": 37206,
          "dislike": 0
        },
        "dynamic": "年度关注度超高的MGEX强袭自由，他来了！",
        "cid": 896057755,
        "dimension": {
          "width": 3840,
          "height": 2160,
          "rotate": 0
        },
        "season_id": 573806,
        "short_link": "https://b23.tv/BV1h14y1H7Ls",
        "short_link_v2": "https://b23.tv/BV1h14y1H7Ls",
        "first_frame": "http://i2.hdslb.com/bfs/storyff/n221119a21mwd5z96o6l7q1tg8gqhh6m_firsti.jpg",
        "pub_location": "辽宁",
        "bvid": "BV1h14y1H7Ls",
        "score": 0
      },
    ]
  }
}
```

</details>
