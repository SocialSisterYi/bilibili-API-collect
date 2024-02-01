# 视频推荐

- [获取单视频推荐列表（web端）](#获取单视频推荐列表（web端）)  
- [获取首页视频推荐列表（web端）](#获取首页视频推荐列表（web端）)
- [获取短视频模式视频列表](#获取短视频模式视频列表)
---

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

基本同「[获取视频详细信息（web端）](info.md#获取视频详细信息（web端）)」中的data对象

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

> https://api.bilibili.com/x/web-interface/index/top/rcmd

*请求方式：GET*

认证方式：Cookie（SESSDATA）

最多获取14条推荐视频

**url参数：**  

| 参数名          | 类型  | 内容                        | 必要性 | 备注                           |
|--------------|-----|---------------------------|-----|------------------------------|
| fresh_type   | num | 相关性                      | 非必要 | 默认为3 <br /> 值越大推荐内容越相关       | 
| version      | num | web端新旧版本:0为旧版本1为新版本       | 非必要 | 默认为0 <br /> 1,0分别为新旧web端     |
| ps           | num | pagesize 单页返回的记录条数默认为10或8 | 非必要 | 默认为10 <br /> 当version为1时默认为8 |
| fresh_idx    | num | 翻页相关                      | 非必要 | 默认为1 <br /> 与翻页相关            |
| fresh_idx_1h | num | 翻页相关                      | 非必要 | 默认为1 <br /> 与翻页相关            |

**json回复：**

根对象：

| 字段          | 类型    | 内容   | 备注                   |
|-------------|-------|------|----------------------|
| code        | num   | 返回值  | 0：成功 <br />-400：请求错误 |
| message     | str   | 错误信息 | 默认为0                 |
| ttl         | num   | 1    |                      |
| data        | array | 推荐列表 |                      |
| userfeature | str   | 用户功能 |                      |
| abtest      | obj   | 用户分组 |                      |

`data`数组：

| 项   | 类型 | 内容        | 备注 |
|-----| ---- |-----------| ---- |
| 0   | obj  | 推荐视频1     |      |
| n   | obj  | 推荐视频(n+1) |      |
| ……  | obj  | ……        | ……   |
| 13  | obj  | 推荐视频13    |      |

`data`数组中的对象：

基本同「[获取视频详细信息（web端）](info.md#获取视频详细信息（web端）)」中的data对象

`abtest`对象:

| 字段    | 类型  | 内容   | 备注  |
|-------|-----|------|-----|
| group | str | 用户分组 |     |

**示例：**

获取新版web端首页推荐视频列表

```shell
curl -G 'https://api.bilibili.com/x/web-interface/index/top/rcmd' \
--data-urlencode 'fresh_type=3' \
--data-urlencode 'version=1' \
--data-urlencode 'ps=10' \
--data-urlencode 'fresh_idx=1' \
--data-urlencode 'fresh_idx_1h=1'
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
        "id": 511495739,
        "bvid": "BV1Cu411z7mG",
        "cid": 717978243,
        "goto": "av",
        "uri": "http://www.bilibili.com/video/BV1Cu411z7mG",
        "pic": "http://i2.hdslb.com/bfs/archive/e05f487bc9f26baa568f10fe69a0e1ea5e0fbc23.jpg",
        "title": "请大家助力我的梦想！为凑够10万赞，在街头唱《Be Crazy For Me》！",
        "duration": 199,
        "pubdate": 1652605500,
        "owner": {
          "mid": 1723817,
          "name": "樱萍Apple",
          "face": "http://i2.hdslb.com/bfs/face/6e0fa1bdbbf7e0dd929d968df3b57ca99d187e25.jpg"
        },
        "stat": {
          "view": 263169,
          "like": 39871,
          "danmaku": 543
        },
        "avfeature": "{\"ctr\":0.192554,\"wdur\":2.323159,\"duration\":213.318313,\"wdlks\":0.685926,\"multi_score_0\":0.452564,\"multi_score_1\":0.112414,\"multi_score_2\":0.03976,\"rankscore\":13.906487,\"av_play\":258890,\"av_like\":39224,\"av_coin\":7165,\"reason_type\":3,\"av_feature\":\"|real_matchtype -1  |s_e online_av2av_v2  |source_len 1  |m_k_w 0  \"}",
        "isfollowed": 0,
        "rcmdreason": {
          "content": "3万点赞",
          "reasontype": 3
        },
        "showinfo": 1,
        "trackid": "web_pegasus_0.shylf-ai-recsys-1355.165525355529.398"
      }
      ......
    ],
    "userfeature": "{\"enter_rank\":1500,\"is_fallback\":0,\"s_fresh_idx\":41,\"s_fresh_idx_session\":31,\"s_session_idx\":1,\"fresh_idx\":1,\"fresh_idx_1h\":1}",
    "abtest": {
      "group": "b"
    }
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
