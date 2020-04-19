# 统计与数据

本页所有操作均需登录（SESSDATA）

统计与数据次日中午12刷新

## UP主视频状态数据

> http://member.bilibili.com/x/web/index/stat

*方式：GET*

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                       |
| ttl     | num  | 1        | 作用尚不明确                  |
| data    | obj  | 信息本体 |                               |

`data`对象：

| 字段              | 类型 | 内容           | 备注 |
| ----------------- | ---- | -------------- | ---- |
| fan_recent_thirty | obj  | 粉丝数变化情况 |      |
| inc_coin          | num  | 新增投币数     |      |
| inc_elec          | num  | 新增充电数     |      |
| inc_fav           | num  | 新增收藏数     |      |
| inc_like          | num  | 新增点赞数     |      |
| inc_share         | num  | 新增分享数     |      |
| incr_click        | num  | 新增播放数     |      |
| incr_dm           | num  | 新增弹幕数     |      |
| incr_fans         | num  | 新增粉丝数     |      |
| incr_reply        | num  | 新增评论数     |      |
| total_click       | num  | 总计播放数     |      |
| total_coin        | num  | 总计投币数     |      |
| total_dm          | num  | 总计弹幕数     |      |
| total_elec        | num  | 总计充电数     |      |
| total_fans        | num  | 总计粉丝数     |      |
| total_fav         | num  | 总计收藏数     |      |
| total_like        | num  | 总计点赞数     |      |
| total_reply       | num  | 总计评论数     |      |
| total_share       | num  | 总计分享数     |      |

`data`中的`fan_recent_thirty`对象：

| 字段     | 类型 | 内容     | 备注 |
| -------- | ---- | -------- | ---- |
| follow   | obj  | 涨粉情况 |      |
| unfollow | obj  | 掉粉情况 |      |

`fan_recent_thirty`中的`follow`对象：

| 字段         | 类型 | 内容   | 备注             |
| ------------ | ---- | ------ | ---------------- |
| ｛YYYYMMDD｝ | num  | 涨粉数 | 字段名为日期     |
| ……           | num  | ……     | 近30天的涨粉情况 |

`fan_recent_thirty`中的`unfollow`对象：

| 字段         | 类型 | 内容   | 备注             |
| ------------ | ---- | ------ | ---------------- |
| ｛YYYYMMDD｝ | num  | 掉粉数 | 字段名为日期     |
| ……           | num  | ……     | 近30天的掉粉情况 |

**示例：**

http://member.bilibili.com/x/web/index/stat

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"fan_recent_thirty": {
			"follow": {
				"20200304": 0,
				"20200305": 1,
				"20200307": 1,
				"20200308": 0,
				"20200309": 1,
				"20200310": 6,
				"20200311": 0,
				"20200313": 0,
				"20200314": 0,
				"20200316": 3,
				"20200317": 0,
				"20200318": 1,
				"20200319": 2,
				"20200320": 0,
				"20200321": 0,
				"20200322": 2,
				"20200323": 5,
				"20200324": 4,
				"20200325": 2,
				"20200326": 2,
				"20200327": 3,
				"20200328": 1,
				"20200329": 1,
				"20200331": 1,
				"20200401": 2
			},
			"unfollow": {
				"20200304": 1,
				"20200305": 0,
				"20200307": 0,
				"20200308": 0,
				"20200309": 2,
				"20200310": 1,
				"20200311": 1,
				"20200313": 2,
				"20200314": 1,
				"20200316": 0,
				"20200317": 1,
				"20200318": 1,
				"20200319": 0,
				"20200320": 1,
				"20200321": 1,
				"20200322": 1,
				"20200323": 1,
				"20200324": 0,
				"20200325": 1,
				"20200326": 0,
				"20200327": 0,
				"20200328": 0,
				"20200329": 0,
				"20200331": 0,
				"20200401": 1
			}
		},
		"inc_coin": 0,
		"inc_elec": 0,
		"inc_fav": 0,
		"inc_like": 2,
		"inc_share": 0,
		"incr_click": 62,
		"incr_dm": 1,
		"incr_fans": 2,
		"incr_reply": 2,
		"total_click": 31059,
		"total_coin": 440,
		"total_dm": 522,
		"total_elec": 90,
		"total_fans": 390,
		"total_fav": 557,
		"total_like": 729,
		"total_reply": 405,
		"total_share": 254
	}
}
```



## UP主专栏状态数据

> http://member.bilibili.com/x/web/data/article

*方式：GET*

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                       |
| ttl     | num  | 1        | 作用尚不明确                  |
| data    | obj  | 信息本体 |                               |

`data`对象：

| 字段       | 类型 | 内容       | 备注 |
| ---------- | ---- | ---------- | ---- |
| view       | num  | 总计阅读数 |      |
| reply      | num  | 总计评论数 |      |
| like       | num  | 总计点赞数 |      |
| coin       | num  | 总计投币数 |      |
| fav        | num  | 总计收藏数 |      |
| share      | num  | 总计分享数 |      |
| incr_view  | num  | 新增阅读数 |      |
| incr_reply | num  | 新增评论数 |      |
| incr_like  | num  | 新增点赞数 |      |
| incr_coin  | num  | 新增投币数 |      |
| incr_fav   | num  | 新增收藏数 |      |
| incr_share | num  | 新增分享数 |      |

**示例：**

http://member.bilibili.com/x/web/data/article

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"view": 290,
		"reply": 17,
		"like": 34,
		"coin": 9,
		"fav": 15,
		"share": 7,
		"incr_view": 6,
		"incr_reply": 0,
		"incr_like": 0,
		"incr_coin": 0,
		"incr_fav": 0,
		"incr_share": 0
	}
}
```



## 视频数据增量趋势

> http://member.bilibili.com/x/web/data/article/thirty 

*方式：GET*

数据为前30天

**参数：**

| 参数名 | 类型 | 内容         | 必要性 | 备注           |
| ------ | ---- | ------------ | ------ | -------------- |
| type   | url  | 目标数据类型 | 必要   | 类型代码见下表 |

类型代码`type`：

| 代码 | 含义 |
| ---- | ---- |
| 1    | 播放 |
| 2    | 弹幕 |
| 3    | 评论 |
| 4    | 分享 |
| 5    | 投币 |
| 6    | 收藏 |
| 7    | 充电 |
| 8    | 点赞 |

**json回复：**

根对象：

| 字段    | 类型  | 内容     | 备注                                              |
| ------- | ----- | -------- | ------------------------------------------------- |
| code    | num   | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str   | 错误信息 | 默认为0                                           |
| ttl     | num   | 1        | 作用尚不明确                                      |
| data    | array | 趋势列表 |                                                   |

`data`数组：

| 项   | 类型 | 内容              | 备注     |
| ---- | ---- | ----------------- | -------- |
| 0    | obj  | 1天前的数据       |          |
| n    | obj  | （n+1）天前的数据 |          |
| ……   | obj  | ……                | ……       |
| 29   | obj  | 30天前的数据      | 最后一条 |

`data`数组中的对象：

| 字段      | 类型 | 内容     | 备注                 |
| --------- | ---- | -------- | -------------------- |
| date_key  | num  | 对应时间 | 时间戳  前一天的8:00 |
| total_inc | num  | 增加数量 | 意义为数据类型决定   |

**示例：**

查询30天前的视频播放增量趋势，可知`2020-04-05`的播放增量为`46`，`2020-04-04`的播放增量为`58`

http://member.bilibili.com/x/web/data/pandect?type=1

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": [{
		"date_key": 1586044800,
		"total_inc": 46
	}, {
		"date_key": 1585958400,
		"total_inc": 58
	}, {
		"date_key": 1585872000,
		"total_inc": 81
	}, {
		"date_key": 1585785600,
		"total_inc": 90
	}, {
		"date_key": 1585699200,
		"total_inc": 62
	}, {
		"date_key": 1585612800,
		"total_inc": 70
	},
	…………
	]
}
```



## 专栏数据增量趋势

>  http://member.bilibili.com/x/web/data/article/thirty 

*方式：GET*

数据为前30天

**参数：**

| 参数名 | 类型 | 内容         | 必要性 | 备注           |
| ------ | ---- | ------------ | ------ | -------------- |
| type   | url  | 目标数据类型 | 必要   | 类型代码见下表 |

类型代码`type`：

| 代码 | 含义 |
| ---- | ---- |
| 1    | 阅读 |
| 2    | 评论 |
| 3    | 分享 |
| 4    | 投币 |
| 5    | 收藏 |
| 6    | 点赞 |

**json回复：**

根对象：

| 字段    | 类型  | 内容     | 备注                                              |
| ------- | ----- | -------- | ------------------------------------------------- |
| code    | num   | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str   | 错误信息 | 默认为0                                           |
| ttl     | num   | 1        | 作用尚不明确                                      |
| data    | array | 趋势列表 |                                                   |

`data`数组：

| 项   | 类型 | 内容               | 备注     |
| ---- | ---- | ------------------ | -------- |
| 0    | obj  | 30天前的数据       |          |
| n    | obj  | （30-n）天前的数据 |          |
| ……   | obj  | ……                 | ……       |
| 29   | obj  | 1天前的数据        | 最后一条 |

`data`数组中的对象：

| 字段      | 类型 | 内容     | 备注                 |
| --------- | ---- | -------- | -------------------- |
| date_key  | num  | 对应时间 | 时间戳  前一天的8:00 |
| total_inc | num  | 增加数量 | 意义为数据类型决定   |

**示例：**

查询30天前的文章阅读增量趋势，可知`2020-04-05`的阅读增量为`6`，`2020-04-04`的阅读增量为`6`

http://member.bilibili.com/x/web/data/article/thirty?type=1

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": [
        …………
        {
		"date_key": 1585699200,
		"total_inc": 6
	}, {
		"date_key": 1585785600,
		"total_inc": 6
	}, {
		"date_key": 1585872000,
		"total_inc": 4
	}, {
		"date_key": 1585958400,
		"total_inc": 6
	}, {
		"date_key": 1586044800,
		"total_inc": 6
	}]
}
```



## 稿件操作来源占比情况

> http://member.bilibili.com/x/web/data/survey

*方式：GET*

数据为上一天的

**参数：**

| 参数名 | 类型 | 内容         | 必要性 | 备注           |
| ------ | ---- | ------------ | ------ | -------------- |
| type   | url  | 目标数据类型 | 必要   | 类型代码见下表 |

类型代码`type`：

| 代码 | 含义 |
| ---- | ---- |
| 1    | 播放 |
| 2    | 弹幕 |
| 3    | 评论 |
| 4    | 分享 |
| 5    | 投币 |
| 6    | 收藏 |
| 7    | 充电 |
| 8    | 点赞 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        | 作用尚不明确                                      |
| data    | obj  | 信息本体 |                                                   |

`data`对象：

| 字段         | 类型 | 内容         | 备注         |
| ------------ | ---- | ------------ | ------------ |
| ｛YYYYMMDD｝ | obj  | 上一天的情况 | 字段名为日期 |

`data`中的`｛YYYYMMDD｝`对象：

| 字段      | 类型   | 内容         | 备注 |
| --------- | ------ | ------------ | ---- |
| arc_inc   | arrary | 稿件情况     |      |
| total_inc | num    | 总计增长情况 |      |
| type_rank | obj    | 分区排名情况 |      |

`｛YYYYMMDD｝`中的`arc_inc`数组：

| 项   | 类型 | 内容        | 备注 |
| ---- | ---- | ----------- | ---- |
| 0    | obj  | 稿件1       |      |
| n    | obj  | 稿件（n+1） |      |
| ……   | obj  | ……          | ……   |

`｛YYYYMMDD｝`中的`arc_inc`数组中的对象：

| 字段        | 类型 | 内容           | 备注         |
| ----------- | ---- | -------------- | ------------ |
| aid         | num  | 稿件avID       |              |
| bvid        | str  | 稿件bvID       |              |
| daytime     | num  | 统计时间       | 时间戳       |
| incr        | num  | 稿件增长情况数 |              |
| interactive | num  | 0              | 作用尚不明确 |
| ptime       | num  | 稿件发布时间   | 时间戳       |
| title       | str  | 稿件标题       |              |

`｛YYYYMMDD｝`中的`type_rank`对象：

| 字段     | 类型 | 内容     | 备注 |
| -------- | ---- | -------- | ---- |
| {分区名} | num  | 该排名数 |      |
| ……       | num  | ……       | ……   |

**示例：**

查询我的稿件来源占比情况

http://member.bilibili.com/x/web/data/survey?type=1

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"20200418": {
			"arc_inc": [{
				"aid": 94916552,
				"bvid": "BV1ZE411K7ux",
				"incr": 18,
				"title": "【8-bit】影  流  之  主（爱河）",
				"daytime": 1587155030,
				"ptime": 1583760165,
				"interactive": 0
			}, {
				"aid": 98948772,
				"bvid": "BV1n741127LD",
				"incr": 14,
				"title": "【特斯拉线圈】组装迷你SSTC",
				"daytime": 1587155030,
				"ptime": 1585054436,
				"interactive": 0
			}, {
				"aid": 37294890,
				"bvid": "BV1kt411D7yW",
				"incr": 9,
				"title": "【病毒】彩虹猫可以调速还带有计时器  MEMZ重构升级版",
				"daytime": 1587155030,
				"ptime": 1543775696,
				"interactive": 0
			}, 
			…………
			],
			"total_inc": 55,
			"type_rank": {
				"生活": 1392,
				"科技": 1597,
				"音乐": 1058
			}
		}
	}
}
```



## 播放来源占比情况（平台及方式）

> http://member.bilibili.com/x/web/data/playsource

*方式：GET*

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                       |
| ttl     | num  | 1        | 作用尚不明确                  |
| data    | obj  | 信息本体 |                               |

`data`对象：

| 字段            | 类型 | 内容         | 备注 |
| --------------- | ---- | ------------ | ---- |
| page_source     | obj  | 播放方式情况 |      |
| play_proportion | obj  | 播放平台情况 |      |

`data`中的`page_source`对象：

| 字段          | 类型 | 内容         | 备注 |
| ------------- | ---- | ------------ | ---- |
| dynamic       | num  | 通过动态     |      |
| other         | num  | 其他方式     |      |
| related_video | num  | 通过推荐列表 |      |
| search        | num  | 通过搜索     |      |
| space         | num  | 空间列表播放 |      |
| tenma         | num  | ？？？       |      |

`data`中的`play_proportion`对象：

| 字段    | 类型 | 内容         | 备注 |
| ------- | ---- | ------------ | ---- |
| android | num  | 安卓端       |      |
| h5      | num  | 移动端h5页面 |      |
| ios     | num  | ios端        |      |
| out     | num  | 站外         |      |
| pc      | num  | 电脑版网页   |      |

**示例：**

http://member.bilibili.com/x/web/data/playsource

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"play_proportion": {
			"android": 6060,
			"h5": 410,
			"ios": 1325,
			"out": 0,
			"pc": 2137
		},
		"page_source": {
			"dynamic": 173,
			"other": 1440,
			"related_video": 1813,
			"search": 1980,
			"space": 501,
			"tenma": 4087
		}
	}
}
```

