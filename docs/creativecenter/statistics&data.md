# 统计与数据

统计与数据次日中午12刷新

## UP主视频状态数据

> https://member.bilibili.com/x/web/index/stat

*请求方式：GET*

认证方式：仅可Cookie（SESSDATA）

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

**示例：**

```shell
curl 'https://member.bilibili.com/x/web/index/stat' \
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
        "inc_coin": 0,
        "inc_elec": 0,
        "inc_fav": 0,
        "inc_like": 0,
        "inc_share": 0,
        "incr_click": 0,
        "incr_dm": 0,
        "incr_fans": 1,
        "incr_reply": 0,
        "total_click": 9,
        "total_coin": 1,
        "total_dm": 0,
        "total_elec": 0,
        "total_fans": 29,
        "total_fav": 1,
        "total_like": 1,
        "total_reply": 0,
        "total_share": 0
    }
}
```

</details>

## 新版UP主视频数据比较

> https://member.bilibili.com/x/web/data/archive_diagnose/compare

*请求方式：GET*

认证方式：仅可Cookie（SESSDATA）

**url参数：**

| 参数名 | 类型 | 内容         | 必要性 | 备注           |
| ------ | ---- | ------------ | ------ | -------------- |
| t   | num  | 时间戳 | 可选   |  |
| size   | num  | 比较最近的N条视频 | 可选，默认5   | 似乎没有最大值，或者最大值很大 |

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
| list | list | 最近的视频 | |

`data`中的`list`项：
> [!TIP]
> 这里的数字一般都是百分比，小数点后保留两位，100代表1%，10000代表100%

| 字段       | 类型 | 内容       | 备注 |
| ---------- | ---- | ---------- | ---- |
| aid       | num  | av号 |      |
| bvid | str | bv号 | |
| cover | str | 封面url | |
|title| str|标题|
|pubtime|num|发布时间|
|duration|num|视频长度（秒）|
|play|num|播放数||
|vt|num|未知
|like|num|点赞数
|comment|num|评论数
|dm|num|弹幕数
|fav|num|收藏数|
|coin|num|投币数
|share|num|分享数
|full_play_ratio|num|完播比，用户平均在百分之多少退出
|play_viewer_rate|num|游客播放数，这个视频有多少是游客播放
|active_fans_rate|num|粉丝观看率，多少粉丝看了这个视频
|active_fans_med|num|?
|tm_rate|num|封标点击率
|tm_rate_med|num|你自己平均封标点击率
|tm_fan_simi_rate_med|num|同类up粉丝封标点击率
|tm_viewer_simi_rate_med|num|同类up游客封标点击率
|tm_fan_rate|num|粉丝封标点击率
|tm_viewer_rate|num|游客封标点击率
|tm_pass_rate|num|封标点击率超过n%同类稿件
|tm_fan_pass_rate|num|粉丝封标点击率超过n%同类稿件
|tm_viewer_pass_rate|num|游客封标点击率超过n%同类稿件
|crash_rate|num|3秒退出率
|crash_rate_med|num|?
|crash_fan_simi_rate_med|num|同类up粉丝3秒退出率
|crash_viewer_simi_rate_med|num|同类up游客3秒退出率
|crash_fan_rate|num|粉丝3秒退出率
|crash_viewer_rate|num|游客3秒退出率
|interact_rate|num|互动率
|interact_rate_med|num|
|interact_fan_simi_rate_med|num|同类up粉丝互动率
|interact_viewer_simi_rate_med|num|同类up游客互动率
|interact_fan_rate|num|粉丝互动率
|interact_viewer_rate|num|游客互动率
|avg_play_time|num|平均播放时间|注意：此字段总是0，可能b站正在写代码，或者和播放量改播放时长有关？
|total_new_attention_cnt|num|涨粉
|play_trans_fan_rate|num|播转粉率
|play_trans_fan_rate_med|num|其他up平均播转粉率

**示例：**

```shell
curl 'https://member.bilibili.com/x/web/data/archive_diagnose/compare?size=10' \
-b 'SESSDATA=xxx'
```

## UP主专栏状态数据

> https://member.bilibili.com/x/web/data/article

*请求方式：GET*

认证方式：仅可Cookie（SESSDATA）

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

```shell
curl 'https://member.bilibili.com/x/web/data/article' \
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

</details>

## 视频数据增量趋势

> https://member.bilibili.com/x/web/data/pandect 

*请求方式：GET*

认证方式：仅可Cookie（SESSDATA）

数据为前30天

**url参数：**

| 参数名 | 类型 | 内容         | 必要性 | 备注           |
| ------ | ---- | ------------ | ------ | -------------- |
| type   | num  | 目标数据类型 | 必要   | 类型代码见下表 |

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

```shell
curl -G 'https://member.bilibili.com/x/web/data/pandect' \
--data-urlencode 'type=1' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

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

</details>

## 专栏数据增量趋势

>  https://member.bilibili.com/x/web/data/article/thirty 

*请求方式：GET*

认证方式：仅可Cookie（SESSDATA）

数据为前30天

**url参数：**

| 参数名 | 类型 | 内容         | 必要性 | 备注           |
| ------ | ---- | ------------ | ------ | -------------- |
| type   | num  | 目标数据类型 | 必要   | 类型代码见下表 |

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

```shell
curl -G 'https://member.bilibili.com/x/web/data/article/thirty' \
--data-urlencode 'type=1' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

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

</details>

## 稿件操作来源占比情况

> https://member.bilibili.com/x/web/data/survey

*请求方式：GET*

认证方式：仅可Cookie（SESSDATA）

数据为上一天的

**url参数：**

| 参数名 | 类型 | 内容         | 必要性 | 备注           |
| ------ | ---- | ------------ | ------ | -------------- |
| type   | num  | 目标数据类型 | 必要   | 类型代码见下表 |

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
| arc_inc   | array | 稿件情况     |      |
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
| aid         | num  | 稿件avid       |              |
| bvid        | str  | 稿件bvid       |              |
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

```shell
curl -G 'https://member.bilibili.com/x/web/data/survey' \
--data-urlencode 'type=1' \
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

</details>

## 播放来源占比情况（平台及方式）

> https://member.bilibili.com/x/web/data/playsource

*请求方式：GET*

认证方式：仅可Cookie（SESSDATA）

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

| 字段          | 类型 | 内容                      | 备注 |
| ------------- | ---- | ------------------------- | ---- |
| dynamic       | num  | 通过动态                  |      |
| other         | num  | 其他方式                  |      |
| related_video | num  | 通过推荐列表              |      |
| search        | num  | 通过搜索                  |      |
| space         | num  | 空间列表播放              |      |
| tenma         | num  | 天马（APP推荐信息流）来源 |      |

`data`中的`play_proportion`对象：

| 字段    | 类型 | 内容         | 备注 |
| ------- | ---- | ------------ | ---- |
| android | num  | 安卓端       |      |
| h5      | num  | 移动端h5页面 |      |
| ios     | num  | ios端        |      |
| out     | num  | 站外         |      |
| pc      | num  | 电脑版网页   |      |

**示例：**

```shell
curl 'https://member.bilibili.com/x/web/data/playsource' \
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

</details>

## 播放分布情况（粉丝与路人）

> https://member.bilibili.com/x/web/data/base

*请求方式：GET*

认证方式：仅可Cookie（SESSDATA）

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                       |
| ttl     | num  | 1        | 作用尚不明确                  |
| data    | obj  | 信息本体 |                               |

`data`对象：

| 字段        | 类型 | 内容         | 备注 |
| ----------- | ---- | ------------ | ---- |
| period      | obj  | 提示信息     |      |
| viewer_area | obj  | 播放地区情况 |      |
| viewer_base | obj  | 播放数据情况 |      |

`data`中的`period`对象：

| 字段         | 类型 | 内容 | 备注 |
| ------------ | ---- | ---- | ---- |
| module_one   | str  | ???  |      |
| module_two   | str  | ???  |      |
| module_three | str  | ???  |      |
| module_four  | str  | ???  |      |

`data`中的`viewer_area`对象：

| 字段    | 类型 | 内容             | 备注 |
| ------- | ---- | ---------------- | ---- |
| fan     | obj  | 粉丝播放地区情况 |      |
| not_fan | obj  | 路人播放地区情况 |      |

`viewer_area`中的`fan`对象：

| 字段       | 类型 | 内容               | 备注             |
| ---------- | ---- | ------------------ | ---------------- |
| {行政区名} | num  | 该地区的粉丝播放量 | 字段名为行政区名 |
| ……         | num  | ……                 | ……               |

`viewer_area`中的`not_fan`对象：

| 字段       | 类型 | 内容               | 备注             |
| ---------- | ---- | ------------------ | ---------------- |
| {行政区名} | num  | 该地区的路人播放量 | 字段名为行政区名 |
| ……         | num  | ……                 | ……               |

`data`中的`viewer_base`对象：

| 字段    | 类型 | 内容             | 备注 |
| ------- | ---- | ---------------- | ---- |
| fan     | obj  | 粉丝播放数据情况 |      |
| not_fan | obj  | 路人播放数据情况 |      |

`viewer_base`中的`fan`对象：

| 字段           | 类型 | 内容               | 备注 |
| -------------- | ---- | ------------------ | ---- |
| male           | num  | 男性粉丝播放数     |      |
| female         | num  | 女性粉丝播放数     |      |
| age_one        | num  | 0-16岁粉丝播放数   |      |
| age_two        | num  | 16-25岁粉丝播放数  |      |
| age_three      | num  | 25-40岁粉丝播放数  |      |
| age_four       | num  | 40+岁粉丝播放数    |      |
| plat_pc        | num  | pc网页端粉丝播放数 |      |
| plat_h5        | num  | 移动h5端粉丝播放数 |      |
| plat_out       | num  | 站外端粉丝播放数   |      |
| plat_ios       | num  | ios端粉丝播放数    |      |
| plat_android   | num  | 安卓端粉丝播放数   |      |
| plat_other_app | num  | 其他粉丝播放数     |      |

`viewer_base`中的`not_fan`对象：

| 字段           | 类型 | 内容               | 备注 |
| -------------- | ---- | ------------------ | ---- |
| male           | num  | 男性路人播放数     |      |
| female         | num  | 女性路人播放数     |      |
| age_one        | num  | 0-16岁路人播放数   |      |
| age_two        | num  | 16-25岁路人播放数  |      |
| age_three      | num  | 25-40岁路人播放数  |      |
| age_four       | num  | 40+岁路人播放数    |      |
| plat_pc        | num  | pc网页端路人播放数 |      |
| plat_h5        | num  | 移动h5端路人播放数 |      |
| plat_out       | num  | 站外端路人播放数   |      |
| plat_ios       | num  | ios端路人播放数    |      |
| plat_android   | num  | 安卓端路人播放数   |      |
| plat_other_app | num  | 其他路人播放数     |      |

**示例：**

```shell
curl 'https://member.bilibili.com/x/web/data/base' \
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
		"period": {
			"module_one": "各维度每日12:00 a.m. 更新前一日数据",
			"module_two": "每日12:00 a.m. 更新前一日数据",
			"module_three": "每周二12:00 a.m. 更新前一周数据",
			"module_four": "各维度每日12:00 a.m. 更新前一日数据"
		},
		"viewer_area": {
			"fan": {
				"上海": 7,
				"中国台湾": 2,
				"云南": 6,
				"内蒙古": 8,
				"北京": 14,
				"吉林": 4,
				"四川": 4,
				"天津": 11,
				"宁夏": 1,
				"安徽": 8,
				"山东": 18,
				"山西": 10,
				"广东": 50,
				"广西": 7,
				"新疆": 2,
				"江苏": 17,
				"江西": 6,
				"河北": 13,
				"河南": 13,
				"浙江": 20,
				"海南": 1,
				"湖北": 13,
				"湖南": 13,
				"甘肃": 4,
				"福建": 10,
				"贵州": 4,
				"辽宁": 9,
				"重庆": 5,
				"陕西": 93,
				"香港特别行政区": 1,
				"黑龙江": 12
			},
			"not_fan": {
				"上海": 28,
				"中国台湾": 3,
				"云南": 22,
				"内蒙古": 15,
				"北京": 53,
				"吉林": 20,
				"四川": 60,
				"天津": 18,
				"宁夏": 7,
				"安徽": 43,
				"山东": 81,
				"山西": 31,
				"广东": 176,
				"广西": 81,
				"新疆": 11,
				"江苏": 93,
				"江西": 26,
				"河北": 50,
				"河南": 84,
				"浙江": 97,
				"海南": 10,
				"湖北": 43,
				"湖南": 43,
				"甘肃": 14,
				"福建": 54,
				"西藏": 1,
				"贵州": 16,
				"辽宁": 47,
				"重庆": 31,
				"陕西": 102,
				"青海": 2,
				"香港特别行政区": 4,
				"黑龙江": 25
			}
		},
		"viewer_base": {
			"fan": {
				"male": 153,
				"female": 24,
				"age_one": 91,
				"age_two": 174,
				"age_three": 77,
				"age_four": 53,
				"plat_pc": 12072,
				"plat_h5": 186,
				"plat_out": 0,
				"plat_ios": 23453,
				"plat_android": 87387,
				"plat_other_app": 1631
			},
			"not_fan": {
				"male": 462,
				"female": 72,
				"age_one": 425,
				"age_two": 445,
				"age_three": 360,
				"age_four": 188,
				"plat_pc": 64760,
				"plat_h5": 660,
				"plat_out": 1,
				"plat_ios": 111259,
				"plat_android": 467767,
				"plat_other_app": 3408
			}
		}
	}
}
```

</details>
