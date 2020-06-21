# 视频基本信息

<img src="/imgs/ploading.gif" width="100" height="100"/>

## 获取视频详细信息（avID/bvID互转及转epID）

> http://api.bilibili.com/x/web-interface/view

*方式:GET*

**url参数：**

| 参数名 | 类型 | 内容     | 必要性       | 备注               |
| ------ | ---- | -------- | ------------ | ------------------ |
| aid    | num  | 视频avID | 必要（可选） | avID与bvID任选一个 |
| bvid   | str  | 视频bvID | 必要（可选） | avID与bvID任选一个 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                          |
| ------- | ---- | -------- | --------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-404：无视频 |
| message | str  | 错误信息 | 默认为0                                       |
| ttl     | num  | 1        | 作用尚不明确                                  |
| data    | obj  | 信息本体 |                                               |

`data`对象：

| 字段         | 类型  | 内容                           | 备注                  |
| ------------ | ----- | ------------------------------ | --------------------- |
| bvid         | str   | 视频bvID                       |                       |
| aid          | num   | 视频avID                       |                       |
| videos       | num   | 视频分P总数                    | 默认为1               |
| tid          | num   | 分区ID                         |                       |
| tname        | str   | 子分区名称                     |                       |
| copyright    | num   | 版权标志                       | 1：自制<br />2：转载  |
| pic          | str   | 视频封面图片url                |                       |
| title        | str   | 视频标题                       |                       |
| pubdate      | num   | 视频上传时间                   | 时间戳                |
| ctime        | num   | 视频审核通过时间               | 时间戳                |
| desc         | str   | 视频简介                       |                       |
| state        | num   | 0                              | 作用尚不明确          |
| attribute    | num   | ？？？                         | 作用尚不明确          |
| duration     | num   | 视频总计持续时长（所有分P）    | 单位为秒              |
| mission_id   | num   | 视频参与的活动ID               | 无为0                 |
| redirect_url | str   | 重定向url                      | 用于番剧&影视的av->ep |
| rights       | obj   | 视频属性标志                   |                       |
| owner        | obj   | 视频UP主信息                   |                       |
| stat         | obj   | 视频状态数                     |                       |
| dynamic      | str   | 视频同步发布的的动态的文字内容 | 无为空                |
| cid          | num   | 视频1P CID                     |                       |
| dimension    | obj   | 视频1P分辨率                   |                       |
| no_cache     | bool  | true                           | 作用尚不明确          |
| pages        | array | 视频分P列表                    |                       |
| subtitle     | obj   | 视频CC字幕                     |                       |
| staff        | array | 合作成员列表                   | 可不存在              |

`data`中的`rights`对象：

| 字段            | 类型 | 内容             | 备注                                     |
| --------------- | ---- | ---------------- | ---------------------------------------- |
| bp              | num  | 0                | 作用尚不明确                             |
| elec            | num  | 0                | 作用尚不明确                             |
| download        | num  | 允许下载标志     | 0：不允许<br />1：允许                   |
| movie           | num  | 视频时电影标志   | 0：否<br />1：是                         |
| pay             | num  | 仅会员可观看标志 | 0：无<br />1：有                         |
| hd5             | num  | 有高码率标志     | 0：无<br />1：有                         |
| no_reprint      | num  | 禁止转载标志     | 0：无<br />1：禁止                       |
| autoplay        | num  | 可自动播放标志   | 0：无<br />1：有  区别影视番剧与普通视频 |
| ugc_pay         | num  | 0                | 作用尚不明确                             |
| is_cooperation  | num  | 视频合作标志     | 0：无<br />1：是                         |
| ugc_pay_preview | num  | 0                | 作用尚不明确                             |
| no_background   | num  | 0                | 作用尚不明确                             |

`data`中的`owner`对象：

| 字段 | 类型 | 内容     | 备注 |
| ---- | ---- | -------- | ---- |
| mid  | num  | UP主UID  |      |
| name | str  | UP主昵称 |      |
| face | str  | UP主头像 |      |

`data`中的`stat`对象：

| 字段       | 类型 | 内容                           | 备注         |
| ---------- | ---- | ------------------------------ | ------------ |
| aid        | num  | 视频avID                       |              |
| view       | num  | 普通：观看次数<br />屏蔽时：-1 |              |
| danmaku    | num  | 弹幕条数                       |              |
| reply      | num  | 评论条数                       |              |
| favorite   | num  | 收藏人数                       |              |
| coin       | num  | 投币枚数                       |              |
| share      | num  | 分享次数                       |              |
| now_rank   | num  | 0                              | 作用尚不明确 |
| his_rank   | num  | 历史最高排行                   |              |
| like       | num  | 获赞次数                       |              |
| dislike    | num  | 0                              | 作用尚不明确 |
| evaluation | str  | 视频评分                       | 默认为空     |

`data`中的`pages`数组：

| 项   | 类型 | 内容       | 备注          |
| ---- | ---- | ---------- | ------------- |
| 0    | obj  | 1P内容     | 无分P仅有此项 |
| n    | obj  | (n+1)P内容 |               |
| ……   | obj  | ……         | ……            |

`pages`数组中的对象：

| 字段      | 类型 | 内容            | 备注                                 |
| --------- | ---- | --------------- | ------------------------------------ |
| cid       | num  | 当前分P CID     |                                      |
| page      | num  | 当前分P         |                                      |
| from      | str  | 视频来源        | vupload：用户上传<br />hunan：芒果TV |
| part      | str  | 当前分P标题     |                                      |
| duration  | num  | 当前分P持续时间 | 单位为秒                             |
| vid       | str  | 空              | 作用尚不明确                         |
| weblink   | str  | 空              | 作用尚不明确                         |
| dimension | obj  | 当前分P分辨率   |                                      |

`pages`数组中的对象中的`dimension`对象(同`data`中的`dimension`对象)：

| 字段   | 类型 | 内容         | 备注         |
| ------ | ---- | ------------ | ------------ |
| width  | num  | 当前分P 宽度 | 可能为0      |
| height | num  | 当前分P 高度 | 可能为0      |
| rotate | num  | 0            | 作用尚不明确 |

`subtitle`对象：

| 字段         | 类型  | 内容             | 备注 |
| ------------ | ----- | ---------------- | ---- |
| allow_submit | bool  | 是否允许提交字幕 |      |
| list         | array | 字幕列表         |      |

`subtitle`对象中的`list`数组：

| 项   | 类型 | 内容      | 备注 |
| ---- | ---- | --------- | ---- |
| 0    | obj  | 字幕1     |      |
| n    | obj  | 字幕(n+1) |      |
| ……   | obj  | ……        | ……   |

`list`数组中的对象：

| 字段         | 类型 | 内容                | 备注 |
| ------------ | ---- | ------------------- | ---- |
| id           | num  | 字幕ID              |      |
| lan          | str  | 字幕语言            |      |
| lan_doc      | str  | 字幕语言名称        |      |
| is_lock      | bool | 是否锁定            |      |
| author_mid   | num  | 字幕上传者UID       |      |
| subtitle_url | str  | json格式字幕文件url |      |
| author       | obj  | 字幕上传者信息      |      |

`list`数组中的对象中的`author`对象：

| 字段            | 类型 | 内容              | 备注         |
| --------------- | ---- | ----------------- | ------------ |
| mid             | num  | 字幕上传者UID     |              |
| name            | str  | 字幕上传者昵称    |              |
| sex             | str  | 字幕上传者性别    | 男 女 保密   |
| face            | str  | 字幕上传者头像url |              |
| sign            | str  | 字幕上传者签名    |              |
| rank            | num  | 10000             | 作用尚不明确 |
| birthday        | num  | 0                 | 作用尚不明确 |
| is_fake_account | num  | 0                 | 作用尚不明确 |
| is_deleted      | num  | 0                 | 作用尚不明确 |

`staff`数组：

| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| 0    | obj  | 合作成员1     |      |
| n    | obj  | 合作成员(n+1) |      |
| ……   | obj  | ……            | ……   |

`staff`数组中的对象：

| 字段     | 类型 | 内容           | 备注 |
| -------- | ---- | -------------- | ---- |
| mid      | num  | 成员UID        |      |
| title    | str  | 成员名称       |      |
| name     | str  | 成员昵称       |      |
| face     | str  | 成员头像url    |      |
| vip      | obj  | 成员大会员状态 |      |
| official | obj  | 成员认证信息   |      |
| follower | num  | 成员粉丝数     |      |

`staff`数组中的对象中的`vip`对象：

| 字段       | 类型 | 内容         | 备注                                |
| ---------- | ---- | ------------ | ----------------------------------- |
| type       | num  | 成员会员类型 | 0：无<br />1：月会员<br />2：年会员 |
| status     | num  | 会员状态     | 0：无<br />1：有                    |
| theme_type | num  | 0            |                                     |

`staff`数组中的对象中的`official`对象：

| 字段  | 类型 | 内容         | 备注                                            |
| ----- | ---- | ------------ | ----------------------------------------------- |
| role  | num  | 成员认证级别 | 0：无<br />1 2：个人认证<br />3 4 5 6：机构认证 |
| title | str  | 成员认证名   | 无为空                                          |
| desc  | str  | 成员认证备注 | 无为空                                          |
| type  | num  | 成员认证类型 | -1：无<br />0：有                               |

**示例：**

http://api.bilibili.com/x/web-interface/view?aid=85440373

同http://api.bilibili.com/x/web-interface/view?bvid=BV117411r7R1

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"bvid": "BV117411r7R1",
		"aid": 85440373,
		"videos": 1,
		"tid": 28,
		"tname": "原创音乐",
		"copyright": 1,
		"pic": "http://i1.hdslb.com/bfs/archive/ea0dd34bf41e23a68175680a00e3358cd249105f.jpg",
		"title": "当我给拜年祭的快板加了电音配乐…",
		"pubdate": 1580377255,
		"ctime": 1580212263,
		"desc": "【CB想说的】看完拜年祭之后最爱的一个节目！给有快板的部分简单加了一些不同风格的配乐hhh，感谢沃玛画的我！太可爱了哈哈哈哈哈哈哈！！！\n【Warma想说的】我画了打碟的CB，画风为了还原原版视频所以参考了四迹老师的画风，四迹老师的画真的太可爱啦！不过其实在画的过程中我遇到了一个问题，CB的耳机……到底是戴在哪个耳朵上呢？\n\n原版：av78977080\n编曲（配乐）：Crazy Bucket\n人声（配音）：Warma/谢拉\n曲绘：四迹/Warma\n动画：四迹/Crazy Bucket\n剧本：Mokurei-木灵君\n音频后期：DMYoung/纳兰寻风/Crazy Bucket\n包装：破晓天",
		"state": 0,
		"attribute": 16793984,
		"duration": 486,
		"mission_id": 11838,
		"rights": {
			"bp": 0,
			"elec": 0,
			"download": 1,
			"movie": 0,
			"pay": 0,
			"hd5": 1,
			"no_reprint": 1,
			"autoplay": 1,
			"ugc_pay": 0,
			"is_cooperation": 1,
			"ugc_pay_preview": 0,
			"no_background": 0
		},
		"owner": {
			"mid": 66606350,
			"name": "Crazy_Bucket",
			"face": "http://i2.hdslb.com/bfs/face/5387950a59be8038daaae3f66dfb5a85e20d5737.jpg"
		},
		"stat": {
			"aid": 85440373,
			"view": 1419319,
			"danmaku": 9203,
			"reply": 2519,
			"favorite": 49031,
			"coin": 57470,
			"share": 8120,
			"now_rank": 0,
			"his_rank": 55,
			"like": 118462,
			"dislike": 0,
			"evaluation": ""
		},
		"dynamic": "进来就出不去了！！！\n#全民音乐UP主##CB##warma##电音##快板##拜年祭##诸神的奥运##编曲##Remix#",
		"cid": 146044693,
		"dimension": {
			"width": 1920,
			"height": 1080,
			"rotate": 0
		},
		"no_cache": false,
		"pages": [{
			"cid": 146044693,
			"page": 1,
			"from": "vupload",
			"part": "建议改成：建议改成：诸 神 的 电 音 节（不是）",
			"duration": 486,
			"vid": "",
			"weblink": "",
			"dimension": {
				"width": 1920,
				"height": 1080,
				"rotate": 0
			}
		}],
		"subtitle": {
			"allow_submit": false,
			"list": []
		},
		"staff": [{
			"mid": 66606350,
			"title": "UP主",
			"name": "Crazy_Bucket",
			"face": "http://i2.hdslb.com/bfs/face/5387950a59be8038daaae3f66dfb5a85e20d5737.jpg",
			"vip": {
				"type": 2,
				"status": 1,
				"vip_pay_type": 0,
				"theme_type": 0
			},
			"official": {
				"role": 2,
				"title": "bilibili 知名音乐UP主",
				"desc": "",
				"type": 0
			},
			"follower": 369687,
			"label_style": 0
		}, {
			"mid": 53456,
			"title": "曲绘",
			"name": "Warma",
			"face": "http://i0.hdslb.com/bfs/face/32a43710a69155a5a90441ebedb6c05b63d2fd98.jpg",
			"vip": {
				"type": 2,
				"status": 1,
				"vip_pay_type": 0,
				"theme_type": 0
			},
			"official": {
				"role": 1,
				"title": "bilibili 知名UP主",
				"desc": "",
				"type": 0
			},
			"follower": 1452718,
			"label_style": 0
		}]
	}
}
```

可得出视频封面为：**（可用于封面提取）**

http://i1.hdslb.com/bfs/archive/ea0dd34bf41e23a68175680a00e3358cd249105f.jpg

![](http://i1.hdslb.com/bfs/archive/ea0dd34bf41e23a68175680a00e3358cd249105f.jpg)

UP主头像为：

http://i0.hdslb.com/bfs/face/5387950a59be8038daaae3f66dfb5a85e20d5737.jpg

<img src="http://i0.hdslb.com/bfs/face/5387950a59be8038daaae3f66dfb5a85e20d5737.jpg" width="100" height="100" />



## 获取视频简介

> http://api.bilibili.com/x/web-interface/archive/desc

*方式:GET*

**url参数：**

| 参数名 | 类型 | 内容     | 必要性       | 备注               |
| ------ | ---- | -------- | ------------ | ------------------ |
| aid    | num  | 视频avID | 必要（可选） | avID与bvID任选一个 |
| bvid   | str  | 视频bvID | 必要（可选） | avID与bvID任选一个 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                               |
| ------- | ---- | -------- | -------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />62002：稿件不可见 |
| message | str  | 错误信息 | 默认为0                                            |
| ttl     | num  | 1        | 作用尚不明确                                       |
| data    | str  | 简介内容 |                                                    |

**示例：**

查看视频~~（教主的咕鸽）~~`av39330059`/`BV1Bt411z799`的简介

http://api.bilibili.com/x/web-interface/archive/desc?aid=39330059

同http://api.bilibili.com/x/web-interface/archive/desc?bvid=BV1Bt411z799

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": "1.小朋友们大家好，我是你们爷爷最喜欢的超威一列姆！\r\n2.在过去的一年里，我创作了无数脍炙人口的歌曲，常常被人夸赞高产似雌豚。\r\n3.接下来的日子里我会一如既往地勤勉创作，争取继续保持现在的产量，文体两开花。\r\n4.我感觉照这个势头和速度下去别说日常更新不在话下，连出张新专辑都指日可待了啊。\r\n5.也感谢你们一如既往的支持和鼓励，我会注意身体，不把自己累垮掉的。\r\n6.我个人不建议你们在评论区里艾特任何UP主，我真的不建议，当然你们非要这么做我也没办法的。"
}
```



## 查询视频分P列表  (avID/bvID转CID)

> http://api.bilibili.com/x/player/pagelist

*方式:GET*

**url参数：**

| 参数名 | 类型 | 内容     | 必要性       | 备注               |
| ------ | ---- | -------- | ------------ | ------------------ |
| aid    | num  | 视频avID | 必要（可选） | avID与bvID任选一个 |
| bvid   | str  | 视频bvID | 必要（可选） | avID与bvID任选一个 |

**json回复：**

根对象：

| 字段    | 类型  | 内容     | 备注                                          |
| ------- | ----- | -------- | --------------------------------------------- |
| code    | num   | 返回值   | 0：成功<br />-400：请求错误<br />-404：无视频 |
| message | str   | 错误信息 | 默认为0                                       |
| ttl     | num   | 1        | 作用尚不明确                                  |
| data    | array | 分P列表  |                                               |

数组`data`：

| 项   | 类型 | 内容       | 备注          |
| ---- | ---- | ---------- | ------------- |
| 0    | obj  | 1P内容     | 无分P仅有此项 |
| n    | obj  | (n+1)P内容 |               |
| ……   | obj  | ……         | ……            |

数组`data`中的对象：

| 字段      | 类型 | 内容            | 备注                                 |
| --------- | ---- | --------------- | ------------------------------------ |
| cid       | num  | 当前分P CID     |                                      |
| page      | num  | 当前分P         |                                      |
| from      | str  | 视频来源        | vupload：用户上传<br />hunan：芒果TV |
| part      | str  | 当前分P标题     |                                      |
| duration  | num  | 当前分P持续时间 | 单位为秒                             |
| vid       | str  | 空              | 作用尚不明确                         |
| weblink   | str  | 空              | 作用尚不明确                         |
| dimension | obj  | 当前分P分辨率   |                                      |

数组`data`中的对象中的`dimension`对象：

| 字段   | 类型 | 内容         | 备注         |
| ------ | ---- | ------------ | ------------ |
| width  | num  | 当前分P 宽度 | 可能为0      |
| height | num  | 当前分P 高度 | 可能为0      |
| rotate | num  | 0            | 作用尚不明确 |

**示例：**

查询视频`av13502509`/`BV1ex411J7GE`的分P列表

http://api.bilibili.com/x/player/pagelist?aid=13502509

同http://api.bilibili.com/x/player/pagelist?bvid=BV1ex411J7GE

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": [{
		"cid": 66445301,
		"page": 1,
		"from": "vupload",
		"part": "00. 宣传短片",
		"duration": 33,
		"vid": "",
		"weblink": "",
		"dimension": {
			"width": 1920,
			"height": 1080,
			"rotate": 0
		}
	}, {
		"cid": 35039663,
		"page": 2,
		"from": "vupload",
		"part": "01. 火柴人与动画师",
		"duration": 133,
		"vid": "",
		"weblink": "",
		"dimension": {
			"width": 1484,
			"height": 1080,
			"rotate": 0
		}
	}, {
		"cid": 35039678,
		"page": 3,
		"from": "vupload",
		"part": "02. 火柴人与动画师 II",
		"duration": 210,
		"vid": "",
		"weblink": "",
		"dimension": {
			"width": 1484,
			"height": 1080,
			"rotate": 0
		}
	}, {
		"cid": 35039693,
		"page": 4,
		"from": "vupload",
		"part": "03. 火柴人与动画师 III",
		"duration": 503,
		"vid": "",
		"weblink": "",
		"dimension": {
			"width": 992,
			"height": 720,
			"rotate": 0
		}
	}, 
	…………
	]
}
```



