# 视频推荐

- [获取单视频推荐列表（web端）](#获取单视频推荐列表（web端）)  
- [获取首页视频推荐列表（web端）](#获取首页视频推荐列表（web端）)

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
curl -G 'http://api.bilibili.com/x/web-interface/archive/related' \
--data-urlencode 'aid=7'
```

bvid方式：

```shell
curl -G 'http://api.bilibili.com/x/web-interface/archive/related' \
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
curl -G 'http://api.bilibili.com/x/web-interface/index/top/rcmd' \
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