# 默认搜索&热搜

## 获取默认搜索内容（web端）

> https://api.bilibili.com/x/web-interface/wbi/search/default

> ~~https://api.bilibili.com/x/web-interface/search/default~~ （旧链接）

*请求方式：GET*

鉴权方式：[Wbi 签名](../misc/sign/wbi.md)

默认搜索为搜索框中默认填充内容，用于官方推荐内容，若不输入点击搜索按钮跳转为`url`中的链接

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注    |
| ------- | ---- | -------- | ------- |
| code    | num  | 返回值   | 0：成功 |
| message | str  | 错误信息 | 默认为0 |
| ttl     | num  | 1        |         |
| data    | obj  | 信息本体 |         |

`data`对象：

| 字段       | 类型 | 内容            | 备注           |
| ---------- | ---- | --------------- | -------------- |
| seid       | str  | 搜索seid        |                |
| id         | num  | 默认搜索id      |                |
| type       | num  | 0               |                |
| show_name  | str  | 显示文字        |                |
| name       | str  | 空              |                |
| goto_type  | num  | 跳转类型        | 1：视频        |
| goto_value | str  | 搜索目标id      | 视频：稿件avid |
| url        | str  | 搜索目标跳转url |                |

**示例：**

```shell
curl 'https://api.bilibili.com/x/web-interface/search/default'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "seid": "17607543598496143098",
        "id": 3296036255232726331,
        "type": 0,
        "show_name": "歪果仁在中国做模特能赚多少钱？",
        "name": "",
        "goto_type": 1,
        "goto_value": "243920322",
        "url": "https://www.bilibili.com/video/BV1Tv411q7gx"
    }
}
```

</details>

## 获取热搜列表

> https://api.bilibili.com/x/web-interface/wbi/search/square
> ~~https://api.bilibili.com/x/web-interface/search/square~~

*请求方式: GET*

**URL参数:**

|参数名|类型|内容|必要性|备注|
|-|-|-|-|-|
|limit|num|结果限制|必要|范围 [1, 50]|
|platform|str|平台标识|不必要|web: web 端|

**JSON回复:**

根对象:

|字段|类型|内容|备注|
|-|-|-|-|
|code|num|返回值|0: 成功<br />-400: 请求错误|
|message|str|错误信息|默认为空|
|ttl|num|1||
|data|obj|数据本体||

`data`对象:

|字段|类型|内容|备注|
|-|-|-|-|
|trending|obj|热搜榜单|套了个娃|

`data`中的`trending`对象:

|字段|类型|内容|备注|
|-|-|-|-|
|title|str|标题||
|trackid|str|跟踪 ID?||
|list|array|热搜列表||
|top_list|array|空||

`trending`中的`list`数组:

|项|类型|内容|备注|
|-|-|-|-|
|0|obj|热搜 1||
|1|obj|热搜 2||
|……|obj|……||
|n|obj|热搜 (n+1)||

`list`数组中的对象:

|字段|类型|内容|备注|
|-|-|-|-|
|keyword|str|关键词||
|show_name|str|显示文字||
|icon|str|图标 URL||
|uri|str|空||
|goto|str|空||

**示例:**

获取热搜列表, 数量限制 4

```shell
curl -G --url 'https://api.bilibili.com/x/web-interface/search/square' \
--url-query 'limit=4'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "trending": {
      "title": "bilibili热搜",
      "trackid": "8079760748892487175",
      "list": [
        {
          "keyword": "马克龙祝贺中国世界前两名",
          "show_name": "马克龙祝贺中国世界前两名",
          "icon": "http://i0.hdslb.com/bfs/activity-plat/static/20221213/eaf2dd702d7cc14d8d9511190245d057/lrx9rnKo24.png",
          "uri": "",
          "goto": ""
        },
        {
          "keyword": "小孩电竞世界杯夺冠",
          "show_name": "小孩电竞世界杯夺冠",
          "icon": "http://i0.hdslb.com/bfs/activity-plat/static/20221213/eaf2dd702d7cc14d8d9511190245d057/lrx9rnKo24.png",
          "uri": "",
          "goto": ""
        },
        {
          "keyword": "孙颖莎说我全勤下班了",
          "show_name": "孙颖莎说我全勤下班了",
          "icon": "http://i0.hdslb.com/bfs/activity-plat/static/20221118/eaf2dd702d7cc14d8d9511190245d057/UF7B1wVKT2.png",
          "uri": "",
          "goto": ""
        },
        {
          "keyword": "7月广东新冠新增一万余例",
          "show_name": "7月广东新冠新增一万余例",
          "icon": "http://i0.hdslb.com/bfs/activity-plat/static/20221213/eaf2dd702d7cc14d8d9511190245d057/lrx9rnKo24.png",
          "uri": "",
          "goto": ""
        }
      ],
      "top_list": []
    }
  }
}
```

</details>

## 获取热搜列表（web端）

> https://s.search.bilibili.com/main/hotword

*请求方式：GET*

榜单每隔固定时间统计一次，请求后返回搜索前10的关键词

带有转义

**json回复：**

根对象：

| 字段      | 类型  | 内容         | 备注          |
| --------- | ----- | ------------ | ------------- |
| exp_str   | str   | ？？？       |               |
| code      | num   | 返回值       | 0：成功       |
| cost      | obj   | 详细搜索用时 | 大概是吧？    |
| seid      | str   | 搜索seid     |               |
| timestamp | num   | 榜单统计时间 | 时间戳        |
| message   | str   | 错误信息     | 默认为success |
| list      | array | 热搜列表     |               |

`list`数组：

| 项   | 类型 | 内容            | 备注         |
| ---- | ---- | --------------- | ------------ |
| 0    | obj  | 榜单第1名       |              |
| n    | obj  | 榜单第（n+1）名 | 按照名次顺序 |
| 10   | obj  | 榜单第10名      | 最后一项     |

`list`数组中的对象：

| 字段       | 类型 | 内容     | 备注    |
| ---------- | ---- | -------- | ------- |
| status     | str  | 空       |         |
| hot_id     | num  | 热词id  | 大概是吧？    |
| keyword    | str  | 关键词   |         |
| resource_id| num  | 资源id   |         |
| goto_type  | num  | 0       |         |
| res        | array| null    |         |
| show_name  | str  | 完整关键词|         |
| pos        | num  | 名次     | 1-10    |
| word_type  | num  | 条目属性 | 4: 新<br />5: 热<br />6: [雾,咒,小丑(愚人节)] 具体看icon<b r/>7: 直播中<br />8: 默认(无标签)<br />9: 梗<br />11: 话题<br />12: 独家 |
| id         | num  | 名次     | 1-10    |
| goto_value | str  | 空       |         |
| live_id    | array| null    |         |
| name_type  | str  | 空       |         |
| icon       | str  | 图标url  |         |

**示例：**

```shell
curl 'https://s.search.bilibili.com/main/hotword'
```

<details>
<summary>查看响应示例：</summary>

```json
{
	"exp_str": "8104#8200#8300#8401#8500#5502#6699",
	"code": 0,
	"cost": {
		"reas_request": "0.001895",
		"params_check": "0.000127",
		"reas_response_format": "0.000098",
		"deserialize_response": "0.000080",
		"reas_request_format": "0.000076",
		"total": "0.002479",
		"main_handler": "0.002252"
	},
	"seid": "9318821020548476185",
	"timestamp": 1596034742,
	"message": "success",
	"list": [{
			"status": "",
			"hot_id": 11003,
			"keyword": "流浪地球2刘德华",
			"resource_id": 0,
			"goto_type": 0,
			"res": [

			],
			"show_name": "流浪地球2刘德华造型",
			"pos": 1,
			"word_type": 8,
			"id": 1,
			"goto_value": "",
			"live_id": [

			],
			"name_type": "",
			"icon": "http://i0.hdslb.com/bfs/feed-admin/e9e7a2d8497d4063421b685e72680bf1cfb99a0d.png"
		},
		{
			"status": "",
			"hot_id": 11012,
			"keyword": "QQ飞车手游飞跃黄河",
			"resource_id": 0,
			"goto_type": 0,
			"res": [

			],
			"show_name": "QQ飞车手游飞跃黄河",
			"pos": 2,
			"word_type": 8,
			"id": 2,
			"goto_value": "",
			"live_id": [

			],
			"name_type": "",
			"icon": "http://i0.hdslb.com/bfs/feed-admin/4d579fb61f9655316582db193118bba3a721eec0.png"
		},
		{
			"status": "",
			"hot_id": 10996,
			"keyword": "西工大遭网络攻击最新调查",
			"resource_id": 0,
			"goto_type": 0,
			"res": [

			],
			"show_name": "西工大遭网络攻击最新调查",
			"pos": 3,
			"word_type": 8,
			"id": 3,
			"goto_value": "",
			"live_id": [

			],
			"name_type": "",
			"icon": "http://i0.hdslb.com/bfs/feed-admin/e9e7a2d8497d4063421b685e72680bf1cfb99a0d.png"
		},
		{
			"status": "",
			"hot_id": 11004,
			"keyword": "EDG 起诉",
			"resource_id": 0,
			"goto_type": 0,
			"res": [

			],
			"show_name": "EDGJieJie已起诉多家企业",
			"pos": 4,
			"word_type": 8,
			"id": 4,
			"goto_value": "",
			"live_id": [

			],
			"name_type": "",
			"icon": "http://i0.hdslb.com/bfs/feed-admin/4d579fb61f9655316582db193118bba3a721eec0.png"
		},
		{
			"status": "",
			"hot_id": 10992,
			"keyword": "隐入尘烟",
			"resource_id": 0,
			"goto_type": 0,
			"res": [

			],
			"show_name": "隐入尘烟全平台下架",
			"pos": 5,
			"word_type": 8,
			"id": 5,
			"goto_value": "",
			"live_id": [

			],
			"name_type": "",
			"icon": "http://i0.hdslb.com/bfs/feed-admin/e9e7a2d8497d4063421b685e72680bf1cfb99a0d.png"
		},
		{
			"status": "",
			"hot_id": 10987,
			"keyword": "原神半年内最良心封神池",
			"resource_id": 0,
			"goto_type": 0,
			"res": [

			],
			"show_name": "原神半年内最良心封神池",
			"pos": 6,
			"word_type": 8,
			"id": 6,
			"goto_value": "",
			"live_id": [

			],
			"name_type": "",
			"icon": ""
		},
		{
			"status": "",
			"hot_id": 10988,
			"keyword": "高校回应设国内首个元宇宙院系",
			"resource_id": 0,
			"goto_type": 0,
			"res": [

			],
			"show_name": "高校回应设国内首个元宇宙院系",
			"pos": 7,
			"word_type": 8,
			"id": 7,
			"goto_value": "",
			"live_id": [

			],
			"name_type": "",
			"icon": ""
		},
		{
			"status": "",
			"hot_id": 10994,
			"keyword": "美宇宙飞船成功撞击小行星",
			"resource_id": 0,
			"goto_type": 0,
			"res": [

			],
			"show_name": "美宇宙飞船成功撞击小行星",
			"pos": 8,
			"word_type": 8,
			"id": 8,
			"goto_value": "",
			"live_id": [

			],
			"name_type": "",
			"icon": ""
		},
		{
			"status": "",
			"hot_id": 10991,
			"keyword": "你薅的羊毛可能已违法",
			"resource_id": 0,
			"goto_type": 0,
			"res": [

			],
			"show_name": "你薅的羊毛可能已违法",
			"pos": 9,
			"word_type": 8,
			"id": 9,
			"goto_value": "",
			"live_id": [

			],
			"name_type": "",
			"icon": ""
		},
		{
			"status": "",
			"hot_id": 11013,
			"keyword": "辛普森一家",
			"resource_id": 0,
			"goto_type": 0,
			"res": [

			],
			"show_name": "辛普森一家",
			"pos": 10,
			"word_type": 8,
			"id": 10,
			"goto_value": "",
			"live_id": [

			],
			"name_type": "",
			"icon": "http://i0.hdslb.com/bfs/feed-admin/4d579fb61f9655316582db193118bba3a721eec0.png"
		}
	]
}
```

</details>

## 获取热搜列表（手机端）

> https://app.bilibili.com/x/v2/search/trending/ranking

*请求方式：GET*

榜单每隔固定时间统计一次

带有转义

**url参数：**

| 参数名  | 类型 | 内容             | 必要性 | 备注 |
| ------- | ---- | ---------------- | ------ | ---- |
| limit | num  | 热搜数量 | 非必要   | 留空为20, 最大为100 |

**json回复：**

根对象：

| 字段      | 类型  | 内容         | 备注          |
| --------- | ----- | ------------ | ------------- |
| code      | num   | 返回值       | 0：成功       |
| message   | str   | 错误信息     | 默认为0 |
| ttl       | num   | 返回值       |  默认为1 |

`data`对象：

| 字段      | 类型  | 内容         | 备注          |
| ---- | ---- | --------------- | ------------ |
| trackid    | num  |           |    不知用途   |
| list       | array | 热搜列表   |               |

`list`数组：

| 项   | 类型 | 内容            | 备注         |
| ---- | ---- | --------------- | ------------ |
| 0    | obj  | 榜单第1名       |              |
| n    | obj  | 榜单第（n+1）名 | 按照名次顺序 |
| 20/limit   | obj  | 榜单第20名      | 最后一项     |

`list`数组中的对象：

| 字段       | 类型 | 内容     | 备注    |
| ---------- | ---- | -------- | ------- |
| position   | num  | 名次      |  1-20/limit   |
| keyword    | str  | 关键词   |         |
| show_name  | str  | 完整关键词|         |
| word_type  | num  | 条目属性 | 同 web 端 |
| icon       | str  | 图标url  |         |
| hot_id     | num  | 热词id  | 大概是吧？    |

**示例：**

```shell
curl 'https://app.bilibili.com/x/v2/search/trending/ranking'
```

<details>
<summary>查看响应示例：</summary>

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"trackid": "2578006123492681222",
		"list": [{
			"position": 1,
			"keyword": "列车延误乘务员哽咽安抚乘客",
			"show_name": "列车延误乘务员哽咽安抚乘客",
			"word_type": 5,
			"icon": "http://i0.hdslb.com/bfs/activity-plat/static/20221213/eaf2dd702d7cc14d8d9511190245d057/lrx9rnKo24.png",
			"hot_id": 107814,
			"is_commercial": "0"
		}, {
			"position": 2,
			"keyword": "黑神话悟空首次线下试玩",
			"show_name": "黑神话悟空首次线下试玩",
			"word_type": 5,
			"icon": "http://i0.hdslb.com/bfs/activity-plat/static/20221213/eaf2dd702d7cc14d8d9511190245d057/lrx9rnKo24.png",
			"hot_id": 107781,
			"is_commercial": "0"
		}, {
			"position": 3,
			"keyword": "22万人打出9.9分的动画",
			"show_name": "22万人打出9.9分的动画",
			"word_type": 6,
			"icon": "https://i0.hdslb.com/bfs/legacy/463fa23613670218608e68247a137dd071c0e9c8.png",
			"hot_id": 107818,
			"is_commercial": "0"
		}, {
			"position": 4,
			"keyword": "冰冻近五万年线虫被复活",
			"show_name": "冰冻近五万年线虫被复活",
			"word_type": 5,
			"icon": "http://i0.hdslb.com/bfs/activity-plat/static/20221213/eaf2dd702d7cc14d8d9511190245d057/lrx9rnKo24.png",
			"hot_id": 107774,
			"is_commercial": "0"
		}, {
			"position": 5,
			"keyword": "LNG前任和现任的较量",
			"show_name": "LNG前任和现任的较量",
			"word_type": 4,
			"icon": "http://i0.hdslb.com/bfs/activity-plat/static/20221118/eaf2dd702d7cc14d8d9511190245d057/UF7B1wVKT2.png",
			"hot_id": 107853,
			"is_commercial": "0"
		}, {
			"position": 6,
			"keyword": "LOL手游剑姬女警新皮",
			"show_name": "LOL手游剑姬女警新皮",
			"word_type": 8,
			"hot_id": 107841,
			"is_commercial": "0"
		}, {
			"position": 7,
			"keyword": "抽奖中金条却因过号被取消",
			"show_name": "抽奖中金条却因过号被取消",
			"word_type": 8,
			"hot_id": 107817,
			"is_commercial": "0"
		}, {
			"position": 8,
			"keyword": "雪王到长城开蜜雪冰城",
			"show_name": "雪王到长城开蜜雪冰城",
			"word_type": 4,
			"icon": "http://i0.hdslb.com/bfs/activity-plat/static/20221118/eaf2dd702d7cc14d8d9511190245d057/UF7B1wVKT2.png",
			"hot_id": 107849,
			"is_commercial": "0"
		}, {
			"position": 9,
			"keyword": "堡垒之夜联动终结者",
			"show_name": "堡垒之夜联动终结者",
			"word_type": 8,
			"hot_id": 107846,
			"is_commercial": "0"
		}, {
			"position": 10,
			"keyword": "王者新英雄海诺动画",
			"show_name": "王者新英雄海诺动画",
			"word_type": 4,
			"icon": "http://i0.hdslb.com/bfs/activity-plat/static/20221118/eaf2dd702d7cc14d8d9511190245d057/UF7B1wVKT2.png",
			"hot_id": 107870,
			"is_commercial": "0"
		}, {
			"position": 11,
			"keyword": "周星驰功夫10万字拆解",
			"show_name": "周星驰功夫10万字拆解",
			"word_type": 4,
			"icon": "http://i0.hdslb.com/bfs/activity-plat/static/20221118/eaf2dd702d7cc14d8d9511190245d057/UF7B1wVKT2.png",
			"hot_id": 107848,
			"is_commercial": "0"
		}, {
			"position": 12,
			"keyword": "张杰铁粉彭奶奶去世",
			"show_name": "张杰铁粉彭奶奶去世",
			"word_type": 4,
			"icon": "http://i0.hdslb.com/bfs/activity-plat/static/20221118/eaf2dd702d7cc14d8d9511190245d057/UF7B1wVKT2.png",
			"hot_id": 107840,
			"is_commercial": "0"
		}, {
			"position": 13,
			"keyword": "李玟二姐回应礼服争议",
			"show_name": "李玟二姐回应礼服争议",
			"word_type": 8,
			"hot_id": 107833,
			"is_commercial": "0"
		}, {
			"position": 14,
			"keyword": "洪水中飘来冰箱市民取走饮料",
			"show_name": "洪水中飘来冰箱市民取走饮料",
			"word_type": 8,
			"hot_id": 107802,
			"is_commercial": "0"
		}, {
			"position": 15,
			"keyword": "LOL斗魂觉醒佛耶戈语音",
			"show_name": "LOL斗魂觉醒佛耶戈语音",
			"word_type": 8,
			"hot_id": 107790,
			"is_commercial": "0"
		}, {
			"position": 16,
			"keyword": "全面落实带薪休假制度",
			"show_name": "全面落实带薪休假制度",
			"word_type": 4,
			"icon": "http://i0.hdslb.com/bfs/activity-plat/static/20221118/eaf2dd702d7cc14d8d9511190245d057/UF7B1wVKT2.png",
			"hot_id": 107839,
			"is_commercial": "0"
		}, {
			"position": 17,
			"keyword": "花少北 把病娇治好了",
			"show_name": "花少北 把病娇治好了",
			"word_type": 8,
			"hot_id": 107782,
			"is_commercial": "0"
		}, {
			"position": 18,
			"keyword": "2.28米高的村超娃",
			"show_name": "2.28米高的村超娃",
			"word_type": 8,
			"hot_id": 107805,
			"is_commercial": "0"
		}, {
			"position": 19,
			"keyword": "当在动漫中不小心撞到",
			"show_name": "当在动漫中不小心撞到",
			"word_type": 8,
			"hot_id": 107832,
			"is_commercial": "0"
		}, {
			"position": 20,
			"keyword": "台风卡努路径趋向日本",
			"show_name": "台风卡努路径趋向日本",
			"word_type": 8,
			"hot_id": 107800,
			"is_commercial": "0"
		}],
		"exp_str": "8000#5508#6604#7703",
		"hotword_egg_info": "0"
	}
}
```

</details>
