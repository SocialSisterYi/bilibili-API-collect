# 搜索

## 分类搜索

> http://api.bilibili.com/x/web-interface/search/type

*请求方式：GET*

根据关键词进行搜索，返回结果每页20项

**url参数：**

| 参数名      | 类型 | 内容                     | 必要性 | 备注                                                         |
| ----------- | ---- | ------------------------ | ------ | ------------------------------------------------------------ |
| keyword     | str  | 需要搜索的关键词         | 必要   |                                                              |
| search_type | str  | 搜索目标类型             | 必要   | 视频：video<br/>番剧：media_bangumi<br/>影视：media_ft<br/>直播间及主播：live<br />直播间：live_room<br/>主播：live_user<br/>专栏：article<br/>话题：topic<br/>用户：bili_user<br/>相簿：photo |
| order       | str  | 结果排序方式             | 非必要 | 搜索类型为视频、专栏及相簿时：<br />默认为totalrank<br />综合排序：totalrank<br/>最多点击：click<br/>最新发布：pubdate<br/>最多弹幕：dm<br/>最多收藏：stow<br/>最多评论：scores<br />最多喜欢：attention（仅用于专栏）<br />----------------------------<br/>搜索结果为直播间时：<br />默认为online<br />人气直播：online<br/>最新开播：live_time<br />----------------------------<br/>搜索结果为用户时：<br />默认为0<br />默认排序：0<br/>粉丝数：fans<br/>用户等级：level |
| order_sort  | num  | 用户粉丝数及等级排序顺序 | 非必要 | 仅用于搜索用户<br />默认为0<br />由高到低：0<br/>由低到高：1 |
| user_type   | num  | 用户分类筛选             | 非必要 | 仅用于搜索用户<br />默认为0<br />全部用户：0<br/>up主：1<br/>普通用户：2<br/>认证用户：3 |
| duration    | num  | 视频时长筛选             | 非必要 | 仅用于搜索视频<br />默认为0<br />全部时长：0<br/>10分钟以下：1<br/>10-30分钟：2<br/>30-60分钟：3<br/>60分钟以上：4 |
| tids        | num  | 视频分区筛选             | 非必要 | 仅用于搜索视频<br />默认为0<br />全部分区：0<br/>筛选分区：目标分区tID |
| category_id | num  | 专栏及相簿分区筛选       | 非必要 | 搜索结果为专栏时：<br />默认为0<br />全部分区：0<br/>动画：2<br/>游戏：1<br/>影视：28<br/>生活：3<br/>兴趣：29<br/>轻小说：16<br/>科技：17<br/>--------<br/>搜索结果为相簿时：<br />默认为0<br />全部分区：0<br/>画友：1<br/>摄影：2 |
| page        | num  | 页码                     | 非必要 | 默认为1                                                      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        |                             |
| data    | obj  | 信息本体 |                             |

`data`对象：

| 字段            | 类型                                                       | 内容         | 备注                           |
| --------------- | ---------------------------------------------------------- | ------------ | ------------------------------ |
| seid            | num                                                        | 搜索seID     |                                |
| page            | num                                                        | 当前页码     |                                |
| pagesize        | num                                                        | 每页条数     | 固定20                         |
| numResults      | num                                                        | 总条数       | 最大值为1000                   |
| numPages        | num                                                        | 总计分页数   | 最大值为50                     |
| suggest_keyword | str                                                        | 空           | **作用尚不明确**               |
| rqt_type        | str                                                        | search       | **作用尚不明确**               |
| cost_time       | obj                                                        | 详细搜索用时 | 大概                           |
| exp_list        | obj                                                        | ？？？       | **作用尚不明确**               |
| egg_hit         | num                                                        | 0            | **作用尚不明确**               |
| pageinfo        | obj                                                        | 副分页信息   | 只在搜索类型为直播间及主播有效 |
| result          | 搜索类型为直播间及主播时：obj<br />搜索类型为其他时：array | 结果列表     |                                |
| show_column     | num                                                        | 0            | **作用尚不明确**               |

`data`中的`cost_time`对象：

| 字段                 | 类型 | 内容 | 备注 |
| -------------------- | ---- | ---- | ---- |
| params_check         | str  |      |      |
| illegal_handler      | str  |      |      |
| as_response_format   | str  |      |      |
| as_request           | str  |      |      |
| save_cache           | str  |      |      |
| deserialize_response | str  |      |      |
| as_request_format    | str  |      |      |
| total                | str  |      |      |
| main_handler         | str  |      |      |

`data`中的`pageinfo`对象：

| 字段      | 类型 | 内容       | 备注 |
| --------- | ---- | ---------- | ---- |
| live_room | obj  | 直播间信息 |      |
| live_user | obj  | 主播信息   |      |

`pageinfo`中的`live_room`及`live_user`对象：

| 字段       | 类型 | 内容     | 备注 |
| ---------- | ---- | -------- | ---- |
| numPages   | num  | 总计页数 |      |
| numResults | num  | 总计项数 |      |
| total      | num  | 总计项数 |      |
| pages      | num  | 总计页数 |      |

**搜索类型为直播间及主播时：**

`data`中的`result`对象：

| 字段      | 类型  | 内容       | 备注 |
| --------- | ----- | ---------- | ---- |
| live_room | array | 直播间信息 |      |
| live_user | array | 主播信息   |      |

`result`中的`live_room`数组：

| 项   | 类型 | 内容                  | 备注                                         |
| ---- | ---- | --------------------- | -------------------------------------------- |
| 0    | obj  | 直播间搜索结果1       | 对象详情见「[搜索结果](search_response.md)」 |
| n    | obj  | 直播间搜索结果（n+1） | 按照参数指定的顺序排列                       |
| ……   | obj  | ……                    | ……                                           |

`result`中的`live_user`数组：

| 项   | 类型 | 内容                | 备注                                         |
| ---- | ---- | ------------------- | -------------------------------------------- |
| 0    | obj  | 主播搜索结果1       | 对象详情见「[搜索结果](search_response.md)」 |
| n    | obj  | 主播搜索结果（n+1） | 按照参数指定的顺序排列                       |
| ……   | obj  | ……                  | ……                                           |

**搜索类型为其他时：**

`data`中的`result`数组：

| 项   | 类型 | 内容            | 备注                                         |
| ---- | ---- | --------------- | -------------------------------------------- |
| 0    | obj  | 搜索结果1       | 对象详情见「[搜索结果](search_response.md)」 |
| n    | obj  | 搜索结果（n+1） | 按照参数指定的顺序排列                       |
| ……   | obj  | ……              | ……                                           |

**示例：**

按照关键词` 少年 `搜索视频，默认排序，全部时长，全部分区，第1页

 http://api.bilibili.com/x/web-interface/search/type?keyword=少年&search_type=video&order=totalrank&duration=0&page=1&tids=0 

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "seid": "9339963973663795027",
        "page": 1,
        "pagesize": 20,
        "numResults": 1000,
        "numPages": 50,
        "suggest_keyword": "",
        "rqt_type": "search",
        "cost_time": {
            "params_check": "0.000300",
            "illegal_handler": "0.000077",
            "as_response_format": "0.003071",
            "as_request": "0.072525",
            "save_cache": "0.001115",
            "deserialize_response": "0.000310",
            "as_request_format": "0.000319",
            "total": "0.077996",
            "main_handler": "0.076419"
        },
        "exp_list": {
            "5520": true
        },
        "egg_hit": 0,
        "result": [
            {
                "type": "video",
                "id": 243082173,
                "author": "大橘爱吃猫",
                "mid": 178932626,
                "typeid": "193",
                "typename": "MV",
                "arcurl": "http://www.bilibili.com/video/av243082173",
                "aid": 243082173,
                "bvid": "BV1De411p77r",
                "title": "梦然-《<em class=\"keyword\">少年</em>》官方版",
                "description": "https://www.ixigua.com/i6822128361129640462/?logTag=EBTB5DTpBmxcfK1GYOOea\n梦然老师《少年》MV官方版，原版：西瓜视频搜索“抖音梦然-《少年》” 抖音搜索 “《少年》MV梦然。",
                "arcrank": "0",
                "pic": "//i0.hdslb.com/bfs/archive/e25120857a6298d1d4b9e64a805c023b5143c8ff.jpg",
                "play": 1037655,
                "video_review": 2616,
                "favorites": 27341,
                "tag": "华语MV,国语MV,梦然,少年,梦想,成长,循环,热歌",
                "review": 1265,
                "pubdate": 1588407050,
                "senddate": 1588407051,
                "duration": "4:18",
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
                "rank_score": 105415949
            },
            {
                "type": "video",
                "id": 97387124,
                "author": "小石头和孩子们",
                "mid": 324914635,
                "typeid": "31",
                "typename": "翻唱",
                "arcurl": "http://www.bilibili.com/video/av97387124",
                "aid": 97387124,
                "bvid": "BV1B7411R7a8",
                "title": "你还是从前的那个<em class=\"keyword\">少年</em>吗？来自元气少女超甜的《<em class=\"keyword\">少年</em>》",
                "description": "",
                "arcrank": "0",
                "pic": "//i1.hdslb.com/bfs/archive/8502088a888aeb37df7c4bd1b77d57aabae4f4d3.jpg",
                "play": 1953494,
                "video_review": 5934,
                "favorites": 50883,
                "tag": "全民音乐UP主,小石头和孩子们,少年,MV,翻唱,音乐推荐",
                "review": 2963,
                "pubdate": 1584581433,
                "senddate": 1584581434,
                "duration": "4:1",
                "badgepay": false,
                "hit_columns": [
                    "title",
                    "tag"
                ],
                "view_type": "",
                "is_pay": 0,
                "is_union_video": 0,
                "rec_tags": null,
                "new_rec_tags": [],
                "rank_score": 101083208
            },
            {
                "type": "video",
                "id": 200115746,
                "author": "似乎一脸懵逼",
                "mid": 110939266,
                "typeid": "22",
                "typename": "鬼畜调教",
                "arcurl": "http://www.bilibili.com/video/av200115746",
                "aid": 200115746,
                "bvid": "BV1Yz411b7A3",
                "title": "【马化腾】我还是充钱那个<em class=\"keyword\">少年</em>，没有一丝丝改变~",
                "description": "临时做的小作品\n音源：-提问-",
                "arcrank": "0",
                "pic": "//i1.hdslb.com/bfs/archive/078a9b50b4df8d25c2f586668741b30348604173.jpg",
                "play": 1069066,
                "video_review": 3198,
                "favorites": 16321,
                "tag": "黄绿合战5th-绿队应援,马化腾,鬼畜调教,腾讯,腾讯游戏,QQ,氪金,少年,我还是从前那个少年",
                "review": 1438,
                "pubdate": 1585650825,
                "senddate": 1586310556,
                "duration": "1:26",
                "badgepay": false,
                "hit_columns": [
                    "title",
                    "tag"
                ],
                "view_type": "",
                "is_pay": 0,
                "is_union_video": 0,
                "rec_tags": null,
                "new_rec_tags": [],
                "rank_score": 100482941
            },
            {
                "type": "video",
                "id": 96440301,
                "author": "Da圣音乐",
                "mid": 353230307,
                "typeid": "130",
                "typename": "音乐综合",
                "arcurl": "http://www.bilibili.com/video/av96440301",
                "aid": 96440301,
                "bvid": "BV1LE411G7F4",
                "title": "最近突然火的《<em class=\"keyword\">少年</em>》太好听了，单曲循环了很多遍！",
                "description": "Hello，大家好，我是阿光\n本期节目为大家盘点三首最近特别火的中文歌曲\n我保证每一首歌都能撩动你的心弦\n来喽，正如：恰同学少年，风华正茂！\n第一首就是歌手梦然发行于2019年的《少年》\n第二首《后会无期》\n第三首《平凡天使》",
                "arcrank": "0",
                "pic": "//i2.hdslb.com/bfs/archive/bcde6fb455902b367138b7a4026419de0a50a42d.jpg",
                "play": 2440158,
                "video_review": 2314,
                "favorites": 7163,
                "tag": "乐评盘点,音乐,少年,后会无期,平凡天使,邓紫棋,热门歌曲,感动,高考,疫情",
                "review": 1072,
                "pubdate": 1584334818,
                "senddate": 1584339026,
                "duration": "3:2",
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
                "rank_score": 100455675
            },
            {
                "type": "video",
                "id": 370000842,
                "author": "猫耳半圆",
                "mid": 485450109,
                "typeid": "24",
                "typename": "MAD·AMV",
                "arcurl": "http://www.bilibili.com/video/av370000842",
                "aid": 370000842,
                "bvid": "BV1AZ4y1j7t6",
                "title": "最近火爆全网的《<em class=\"keyword\">少年</em>》，你喜欢吗？",
                "description": "BGM：少年——梦然\n花了好多心思的作品，求个三连呀φ(&gt;ω&lt;*)",
                "arcrank": "0",
                "pic": "//i0.hdslb.com/bfs/archive/7437b6f66856b0d87437afd8827939954716cb2f.jpg",
                "play": 2257050,
                "video_review": 16225,
                "favorites": 95864,
                "tag": "bilibili新星计划,AMV,MAD,新人向,论BGM的重要性,青春,少年,治愈向,催泪向,多素材",
                "review": 3548,
                "pubdate": 1585459066,
                "senddate": 1585459067,
                "duration": "1:37",
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
                "rank_score": 100409086
            },
            {
                "type": "video",
                "id": 837972700,
                "author": "Da圣音乐",
                "mid": 353230307,
                "typeid": "130",
                "typename": "音乐综合",
                "arcurl": "http://www.bilibili.com/video/av837972700",
                "aid": 837972700,
                "bvid": "BV1Ug4y1z7oN",
                "title": "终于找到日语版《<em class=\"keyword\">少年</em>》了！开口就是恋爱的味道，岛国也要被洗脑",
                "description": "终于找到日语版《少年》了！开口就是恋爱的味道，岛国也要被洗脑",
                "arcrank": "0",
                "pic": "//i2.hdslb.com/bfs/archive/413b5417418c0e1107b3f79a284d20040b8bb4e9.jpg",
                "play": 1390981,
                "video_review": 2344,
                "favorites": 11330,
                "tag": "乐评盘点,梦然,少年,下山,日语,斋藤飞鸟,告白气球,花泽香菜,火影忍者,海贼王",
                "review": 988,
                "pubdate": 1588239130,
                "senddate": 1588241127,
                "duration": "3:12",
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
                "rank_score": 100407822
            },
            {
                "type": "video",
                "id": 285145715,
                "author": "潮汕好男人",
                "mid": 19071708,
                "typeid": "22",
                "typename": "鬼畜调教",
                "arcurl": "http://www.bilibili.com/video/av285145715",
                "aid": 285145715,
                "bvid": "BV1ac411h7BC",
                "title": "【全明星】<em class=\"keyword\">少年</em>",
                "description": "我还是充钱那个少年，又大又圆的少年\nBGM：少年\n制作：MC传奇（潮汕好男人/永远的MG）\n\n黄绿合战Day.3 对阵作品：BV1qQ4y1K7Gs， 投票传送门：https://www.bilibili.com/blackboard/activity-yellowVSgreen5th.html",
                "arcrank": "0",
                "pic": "//i1.hdslb.com/bfs/archive/911faee003fc828c46497cbd58fab0e22c7554f8.jpg",
                "play": 3689254,
                "video_review": 38262,
                "favorites": 115408,
                "tag": "鬼畜调教,鬼畜,黄绿合战,少年,黄绿合战5th,全明星",
                "review": 4560,
                "pubdate": 1586404524,
                "senddate": 1592816392,
                "duration": "3:1",
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
                "rank_score": 100254286
            },
            {
                "type": "video",
                "id": 51475845,
                "author": "吃你的馒头",
                "mid": 25770774,
                "typeid": "137",
                "typename": "明星",
                "arcurl": "http://www.bilibili.com/video/av51475845",
                "aid": 51475845,
                "bvid": "BV1K4411i7mw",
                "title": "【日本<em class=\"keyword\">少年</em>混剪】氧气/心动瞬间/薄荷味的夏天要来了",
                "description": "个人喜欢的霓虹国少年们混剪\n\n喜欢的少年会让我想起夏天，淡淡的薄荷味在校服衬衫晕开，笑容在空气里变成汽水，砰的一声打开砸向心脏。\n\nBGM：米津玄师/菅田将晖《灰色与青》\n\n道枝骏佑/新田真剑佑/菅田将晖\n坂口健太郎/古川雄辉/山崎贤人\n山田凉介/片寄凉太/贺来贤人\n龙星凉/佐藤健/吉沢亮\n柏原崇/锦户亮\n\n不按出场顺序（剪得昏天黑地完全记不住）\n\n禁二改转载出站，微博非本人发布皆为盗取视频，请随手举报或@吃你的馒头。\n\n原创作品不易，谢谢喜欢和理解。",
                "arcrank": "0",
                "pic": "//i2.hdslb.com/bfs/archive/93ae9d66eaf62161f1f12d0102b6c2d66ebe05a9.jpg",
                "play": 1842547,
                "video_review": 10738,
                "favorites": 136384,
                "tag": "明星,龙星凉,新田真剑佑,菅田将晖,古川雄辉,片寄凉太,柏原崇,山崎贤人,道枝骏佑,贺来贤人,山田凉介,锦户亮",
                "review": 2385,
                "pubdate": 1556992133,
                "senddate": 1559716273,
                "duration": "3:5",
                "badgepay": false,
                "hit_columns": [
                    "title",
                    "description"
                ],
                "view_type": "",
                "is_pay": 0,
                "is_union_video": 0,
                "rec_tags": null,
                "new_rec_tags": [],
                "rank_score": 100239604
            },
            {
                "type": "video",
                "id": 967814999,
                "author": "沙拉酱merry",
                "mid": 492472,
                "typeid": "31",
                "typename": "翻唱",
                "arcurl": "http://www.bilibili.com/video/av967814999",
                "aid": 967814999,
                "bvid": "BV1Hp4y1y7iQ",
                "title": "真的不是原唱？！《<em class=\"keyword\">少年</em>》超A御姐音翻唱",
                "description": "少年\n词/曲/原唱/Rap：梦然\n和声编写：海青/梦然\n和声演唱：海青/梦然\n翻唱：沙拉酱merry\n后期：小敏\n这首歌真好听！\nPs：由于这首歌的难度和换气问题，音频和视频是分开录的所以会有口型差异，敬请谅解！！！大家听歌愉快~",
                "arcrank": "0",
                "pic": "//i0.hdslb.com/bfs/archive/565e8cdc98dab13dfa547cb13744410964f2fc00.jpg",
                "play": 959598,
                "video_review": 2447,
                "favorites": 15166,
                "tag": "被才华封印的颜值,少年,翻唱,女声,沙拉酱merry,御姐音",
                "review": 1371,
                "pubdate": 1587114006,
                "senddate": 1587114030,
                "duration": "7:58",
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
                "rank_score": 100235329
            },
            {
                "type": "video",
                "id": 455021866,
                "author": "鲨然鲨然",
                "mid": 435476320,
                "typeid": "126",
                "typename": "人力VOCALOID",
                "arcurl": "http://www.bilibili.com/video/av455021866",
                "aid": 455021866,
                "bvid": "BV195411673y",
                "title": "【川普】我还是曾经那个<em class=\"keyword\">少年</em>",
                "description": "鬼畜娱乐，请勿当真哦\n希望大家能开怀一笑\n笑了的话别忘了点赞哦",
                "arcrank": "0",
                "pic": "//i0.hdslb.com/bfs/archive/7cee31977deb39f297d2d2598e736d26ed337568.jpg",
                "play": 3845319,
                "video_review": 34660,
                "favorites": 74705,
                "tag": "黄绿合战5th-黄队应援,鬼畜调教,人力VOCALOID,自制,UTAU,川普,搞笑,少年,恶搞,青春",
                "review": 4469,
                "pubdate": 1585651085,
                "senddate": 1586266006,
                "duration": "2:56",
                "badgepay": false,
                "hit_columns": [
                    "title",
                    "tag"
                ],
                "view_type": "",
                "is_pay": 0,
                "is_union_video": 0,
                "rec_tags": null,
                "new_rec_tags": [],
                "rank_score": 100163091
            },
            {
                "type": "video",
                "id": 753055295,
                "author": "大门E",
                "mid": 735734,
                "typeid": "31",
                "typename": "翻唱",
                "arcurl": "http://www.bilibili.com/video/av753055295",
                "aid": 753055295,
                "bvid": "BV1xk4y1k7aw",
                "title": "【完整版日语版《<em class=\"keyword\">少年</em>》本尊来了】竟是国人元老唱见~",
                "description": "词：lolo2513&amp;梦然\n曲：梦然\n编曲：张亮\n混音：顾潇予\nPV：大门E\n之前唱了一个片段不料被许多人误以为《少年》原版是日本歌曲改编。因为没有版权一直没full，如今终于得到梦然老师（版权方）的认可及改编授权，终于出来了，再次感谢~！以我的key重新编曲，好哥们儿@lolo2513 老师的完整版日文填词，满满的少年jump既视感，唱的时候满脑子鸣人路飞，作为一个十五年的国人老唱见能被大家认可一首ACG歌曲简直泪流满面，希望大家能够喜欢~",
                "arcrank": "0",
                "pic": "//i1.hdslb.com/bfs/archive/363ece7b0fd61d1eb48a4bc3c2e804446b46ca1d.jpg",
                "play": 676181,
                "video_review": 1209,
                "favorites": 31147,
                "tag": "bilibili新星计划,少年,日语歌,翻唱",
                "review": 1964,
                "pubdate": 1588932007,
                "senddate": 1588957659,
                "duration": "4:1",
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
                "rank_score": 100152701
            },
            {
                "type": "video",
                "id": 328601322,
                "author": "萌宠教主",
                "mid": 23976014,
                "typeid": "24",
                "typename": "MAD·AMV",
                "arcurl": "http://www.bilibili.com/video/av328601322",
                "aid": 328601322,
                "bvid": "BV1EA411i7MD",
                "title": "用三十部动漫唱一首《<em class=\"keyword\">少年</em>》——你长大了，你还在追番吗?",
                "description": "BGM：少年\n【剪辑，填词】萌宠教主\n【演唱】浅若_natsu",
                "arcrank": "0",
                "pic": "//i0.hdslb.com/bfs/archive/eb7c1be356fd3bc6a947bb6398b6f02fc961bec2.jpg",
                "play": 381018,
                "video_review": 2881,
                "favorites": 28530,
                "tag": "少年,AMV,多素材,MAD,综漫,混剪,梦然,催泪",
                "review": 922,
                "pubdate": 1592020805,
                "senddate": 1592020836,
                "duration": "4:5",
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
                "rank_score": 100129139
            },
            {
                "type": "video",
                "id": 838737756,
                "author": "bili_148834382",
                "mid": 148834382,
                "typeid": "138",
                "typename": "搞笑",
                "arcurl": "http://www.bilibili.com/video/av838737756",
                "aid": 838737756,
                "bvid": "BV1Ug4y1v7mU",
                "title": "大爷：我还是从前那个<em class=\"keyword\">少年</em>，没有一丝丝改变!",
                "description": "大爷：我还是从前那个少年，没有一丝丝改变!",
                "arcrank": "0",
                "pic": "//i2.hdslb.com/bfs/archive/912cb238879558119d2f129438d7c71bb4372f9e.jpg",
                "play": 7052,
                "video_review": 18,
                "favorites": 17,
                "tag": "逗比,挑战,卧槽,沙雕,搞笑,大爷,厉害了,不一样呀,秀",
                "review": 8,
                "pubdate": 1593489906,
                "senddate": 1593489906,
                "duration": "1:34",
                "badgepay": false,
                "hit_columns": [
                    "title",
                    "description"
                ],
                "view_type": "",
                "is_pay": 0,
                "is_union_video": 0,
                "rec_tags": null,
                "new_rec_tags": [],
                "rank_score": 100123108
            },
            {
                "type": "video",
                "id": 541162396,
                "author": "鬼兄奇谈",
                "mid": 94641579,
                "typeid": "124",
                "typename": "社科人文",
                "arcurl": "http://www.bilibili.com/video/av541162396",
                "aid": 541162396,
                "bvid": "BV1Bi4y1G7mo",
                "title": "<em class=\"keyword\">少年</em>黑帮“新龙会”覆灭记！史上最“中二”的黑社会，作案后竟留下错别字？",
                "description": "少年黑帮“新龙会”覆灭记！史上最“中二”的黑社会，作案后竟留下错别字？\n视频内容及素材均来源于网络",
                "arcrank": "0",
                "pic": "//i2.hdslb.com/bfs/archive/4c0c8d8f720119e3087b6b02025c3d957d642781.jpg",
                "play": 150747,
                "video_review": 627,
                "favorites": 487,
                "tag": "犯罪,案件,奇闻,全能打卡挑战,学生,法制,黑社会,中二,违法",
                "review": 438,
                "pubdate": 1593596709,
                "senddate": 1593596710,
                "duration": "8:42",
                "badgepay": false,
                "hit_columns": [
                    "title",
                    "description"
                ],
                "view_type": "",
                "is_pay": 0,
                "is_union_video": 0,
                "rec_tags": null,
                "new_rec_tags": [],
                "rank_score": 100120066
            },
            {
                "type": "video",
                "id": 413715309,
                "author": "wkkm13",
                "mid": 4056950,
                "typeid": "76",
                "typename": "美食圈",
                "arcurl": "http://www.bilibili.com/video/av413715309",
                "aid": 413715309,
                "bvid": "BV1gV41167WS",
                "title": "梦开始的地方，一年前那个不会剪辑的<em class=\"keyword\">少年</em>阿强。",
                "description": "转自强哥第一个视频，那时候他还叫“浮华d假象”。\n梦开始的地方，那个不会剪辑的少年。",
                "arcrank": "0",
                "pic": "//i0.hdslb.com/bfs/archive/73772867e6a4ebaf66a12c73f1bc0d7a1f0fa085.jpg",
                "play": 149332,
                "video_review": 332,
                "favorites": 86,
                "tag": "cram阿强,泪目,美食,吃播,梦想,剪辑",
                "review": 437,
                "pubdate": 1593604848,
                "senddate": 1593604848,
                "duration": "5:31",
                "badgepay": false,
                "hit_columns": [
                    "title",
                    "description"
                ],
                "view_type": "",
                "is_pay": 0,
                "is_union_video": 0,
                "rec_tags": null,
                "new_rec_tags": [],
                "rank_score": 100102196
            },
            {
                "type": "video",
                "id": 838507935,
                "author": "木子山上起酥酥",
                "mid": 185924591,
                "typeid": "75",
                "typename": "动物圈",
                "arcurl": "http://www.bilibili.com/video/av838507935",
                "aid": 838507935,
                "bvid": "BV1Jg4y1q77h",
                "title": "<em class=\"keyword\">少年</em>人，这是修行。",
                "description": "微博",
                "arcrank": "0",
                "pic": "//i1.hdslb.com/bfs/archive/8eae881830a5fc2be1434781e086f7191082cec8.jpg",
                "play": 120068,
                "video_review": 43,
                "favorites": 312,
                "tag": "逗比,正能量,水豚,动物",
                "review": 155,
                "pubdate": 1592366769,
                "senddate": 1592366769,
                "duration": "0:15",
                "badgepay": false,
                "hit_columns": [
                    "title"
                ],
                "view_type": "",
                "is_pay": 0,
                "is_union_video": 0,
                "rec_tags": null,
                "new_rec_tags": [],
                "rank_score": 100101593
            },
            {
                "type": "video",
                "id": 47749359,
                "author": "Da圣音乐",
                "mid": 353230307,
                "typeid": "130",
                "typename": "音乐综合",
                "arcurl": "http://www.bilibili.com/video/av47749359",
                "aid": 47749359,
                "bvid": "BV12b411W7nF",
                "title": "16岁中国<em class=\"keyword\">少年</em>韩国综艺上怒怼：老子来自中国！现场一片哗然",
                "description": "16岁中国少年韩国综艺上怒怼：老子来自中国！现场一片哗然",
                "arcrank": "0",
                "pic": "//i1.hdslb.com/bfs/archive/171d9b27a0b9823b71894008117501014dd561ba.jpg",
                "play": 5042589,
                "video_review": 3949,
                "favorites": 26065,
                "tag": "说唱,韩国,中国,音乐选集,Rap,瞧不起,DISS,迪亚克,D.ark,综艺节目",
                "review": 2793,
                "pubdate": 1553926233,
                "senddate": 1553926233,
                "duration": "2:38",
                "badgepay": false,
                "hit_columns": [
                    "title",
                    "description"
                ],
                "view_type": "",
                "is_pay": 0,
                "is_union_video": 0,
                "rec_tags": null,
                "new_rec_tags": [],
                "rank_score": 100101064
            },
            {
                "type": "video",
                "id": 82363754,
                "author": "在下甘柒辣",
                "mid": 374835894,
                "typeid": "24",
                "typename": "MAD·AMV",
                "arcurl": "http://www.bilibili.com/video/av82363754",
                "aid": 82363754,
                "bvid": "BV1qJ411V7QH",
                "title": "我已不再是<em class=\"keyword\">少年</em>，但你们终究活在我心里",
                "description": "国动会越来越好的，它由我们一同注目它的成长。\nBGM: start\n可否给个币，给这个肝疼的up点鼓励(￣y▽￣)~*",
                "arcrank": "0",
                "pic": "//i2.hdslb.com/bfs/archive/2c7afbc835dbce9f554eb1b21b583ef6bed34cce.jpg",
                "play": 1588667,
                "video_review": 6782,
                "favorites": 37909,
                "tag": "国产动画,国漫良心,国漫,国漫王者归来,星游记,镇魂街,灵笼,刺客伍六七,大圣归来,哪吒",
                "review": 1190,
                "pubdate": 1578320753,
                "senddate": 1582999612,
                "duration": "3:44",
                "badgepay": false,
                "hit_columns": [
                    "title"
                ],
                "view_type": "",
                "is_pay": 0,
                "is_union_video": 0,
                "rec_tags": null,
                "new_rec_tags": [],
                "rank_score": 100099970
            },
            {
                "type": "video",
                "id": 413742409,
                "author": "音乐Fans小琼",
                "mid": 342943435,
                "typeid": "130",
                "typename": "音乐综合",
                "arcurl": "http://www.bilibili.com/video/av413742409",
                "aid": 413742409,
                "bvid": "BV1bV41167Un",
                "title": "《<em class=\"keyword\">少年</em>》霸占7周热歌第一，如今终于被新的神曲打破！网友：听吐了！",
                "description": "bgm 纸砚zyan《画皮》\n《惊雷》MC六道\n《素颜》许嵩\n《麻雀》李荣浩\n《点歌的人》海来阿木\n《桥边姑娘》海伦 \n《旧梦一场》阿悠悠\n《世界这么大还是遇见你》程响（翻唱）\n《后来遇见他》胡66\n《处处吻》杨千嬅\n《少年》梦然",
                "arcrank": "0",
                "pic": "//i2.hdslb.com/bfs/archive/f004565df82a9ac3a8a168b4c12e244861f1d812.jpg",
                "play": 12363,
                "video_review": 137,
                "favorites": 100,
                "tag": "乐评盘点,全能打卡挑战,翻唱,许嵩,杨千嬅,李荣浩,喊麦,民谣,热歌,神曲",
                "review": 71,
                "pubdate": 1593523679,
                "senddate": 1593576757,
                "duration": "3:37",
                "badgepay": false,
                "hit_columns": [
                    "title",
                    "description"
                ],
                "view_type": "",
                "is_pay": 0,
                "is_union_video": 0,
                "rec_tags": null,
                "new_rec_tags": [],
                "rank_score": 100097483
            },
            {
                "type": "video",
                "id": 625380628,
                "author": "涩廊",
                "mid": 178366933,
                "typeid": "137",
                "typename": "明星",
                "arcurl": "http://www.bilibili.com/video/av625380628",
                "aid": 625380628,
                "bvid": "BV1Xt4y127bX",
                "title": "这TM才叫日系美<em class=\"keyword\">少年</em>！",
                "description": "道枝骏佑，02年霓虹国弟弟！杰尼斯美少年！没长残的童星代表！身高现在180+了！绰号米七（谐音）\n出演过电视剧《成为母亲》《我的裙子去哪了》\n\n米七是一个超级帅气可爱的男孩子！一直都在努力提升自己，请敬请期待他未来的作品！\n米七米七！未来可期！\n跪求三连三连三连三连三连三连三连三连三连三连三连三连三连三连三连三连三连三连三连三连三连三连三连三连三连",
                "arcrank": "0",
                "pic": "//i2.hdslb.com/bfs/archive/9d727949eed2d82eb0561d08cbb3e28ac6603532.jpg",
                "play": 768179,
                "video_review": 1595,
                "favorites": 29494,
                "tag": "全能打卡挑战,杰尼斯,美少年,道枝骏佑,日系,米七",
                "review": 1545,
                "pubdate": 1588381204,
                "senddate": 1590253109,
                "duration": "1:22",
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
                "rank_score": 100094816
            }
        ],
        "show_column": 0
    }
}
```

