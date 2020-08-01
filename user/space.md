# 用户空间相关

## 主页

<img src="/imgs/home.svg" width="100" height="100" />

### 置顶视频

#### 查询用户置顶视频

>http://api.bilibili.com/x/space/top/arc

*请求方式：GET*

粉丝在其主页上可见

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| vmid   | num  | 目标用户UID | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                 |
| ------- | ---- | -------- | ---------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />53016：没有置顶视频 |
| message | str  | 错误信息 | 默认为0                                              |
| ttl     | num  | 1        |                                                      |
| data    | obj  | 信息本体 |                                                      |

`data`对象：

| 字段        | 类型 | 内容                           | 备注                    |
| ----------- | ---- | ------------------------------ | ----------------------- |
| aid         | num  | 视频avID                       |                         |
| videos      | num  | 视频分P总数                    | 默认为1                 |
| tid         | num  | 分区ID                         |                         |
| tname       | str  | 子分区名称                     |                         |
| copyright   | num  | 版权标志                       | 1：自制<br />2：转载    |
| pic         | str  | 视频封面图片url                |                         |
| title       | str  | 视频标题                       |                         |
| pubdate     | num  | 视频上传时间                   | 时间戳                  |
| ctime       | num  | 视频审核通过时间               | 时间戳                  |
| desc        | str  | 视频简介                       |                         |
| state       | num  | 0                              | 作用尚不明确            |
| attribute   | num  |                                | 作用尚不明确            |
| duration    | num  | 视频总计持续时长（所有分P）    | 单位为秒                |
| rights      | obj  | 视频属性标志                   |                         |
| owner       | obj  | 视频UP主信息                   |                         |
| stat        | obj  | 视频状态数                     |                         |
| dynamic     | str  | 视频同步发布的的动态的文字内容 | 无为空                  |
| cid         | num  | 视频1P CID                     |                         |
| dimension   | obj  | 视频1P分辨率                   |                         |
| bvid        | str  | 视频bvID                       |                         |
| reason      | str  | 置顶视频备注                   |                         |
| inter_video | bool | 是否为合作视频                 | false：否<br />true：是 |

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

同`data`中的`dimension`对象

| 字段   | 类型 | 内容           | 备注                 |
| ------ | ---- | -------------- | -------------------- |
| width  | num  | 当前分P 宽度   | 可能为0              |
| height | num  | 当前分P 高度   | 可能为0              |
| rotate | num  | 是否将宽高对换 | 0：正常<br />1：对换 |

**示例：**

查询用户`UID=23215368`的置顶视频

```shell
curl -G 'http://api.bilibili.com/x/space/top/arc'\
--data-urlencode 'vmid=23215368'
```

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"aid": 37896701,
		"videos": 1,
		"tid": 28,
		"tname": "原创音乐",
		"copyright": 1,
		"pic": "http://i2.hdslb.com/bfs/archive/cc9e72822d68fffdd0406144f1b5348a13c89652.jpg",
		"title": "燃烧吧！铃声！把主流手机铃声编成一首曲子",
		"pubdate": 1544469671,
		"ctime": 1544469671,
		"desc": "各品牌的手机铃声大合奏，毫无违和感~",
		"state": 0,
		"attribute": 16768,
		"duration": 208,
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
			"mid": 23215368,
			"name": "Wayjon冰冰酱",
			"face": "http://i2.hdslb.com/bfs/face/7c9715f1768191137eb7ebf91918ca0f99532012.jpg"
		},
		"stat": {
			"aid": 37896701,
			"view": 1058237,
			"danmaku": 16821,
			"reply": 3725,
			"favorite": 76888,
			"coin": 100694,
			"share": 17091,
			"now_rank": 0,
			"his_rank": 0,
			"like": 90521,
			"dislike": 0
		},
		"dynamic": "#编曲##FL##纯音乐#",
		"cid": 66621209,
		"dimension": {
			"width": 1920,
			"height": 1080,
			"rotate": 0
		},
		"bvid": "BV18t411q7zz",
		"reason": "",
		"inter_video": false
	}
}
```

#### 设置置顶视频

> http://api.bilibili.com/x/space/top/arc/set

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                     | 必要性       | 备注                             |
| ------ | ---- | ------------------------ | ------------ | -------------------------------- |
| aid    | num  | 置顶目标视频avID         | 必要（可选） | avID与bvID任选一个               |
| bvid   | str  | 置顶目标视频bvID         | 必要（可选） | avID与bvID任选一个               |
| reason | str  | 置顶视频备注             | 非必要       | 置顶备注最大40字符<br />默认为空 |
| csrf   | str  | CSRF Token（位于cookie） | 必要         |                                  |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-304：未修改<br />-400：请求错误<br />53014：稿件已失效<br />53015：备注过长<br />53017：置顶非自己的稿件 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

置顶视频`av98948772`/`BV1n741127LD`

avID方式：

```shell
curl 'http://api.bilibili.com/x/space/top/arc/set'\
--data-urlencode 'aid=98948772'\
-b 'SESSDATA=xxx'
```

bvID方式：

```shell
curl 'http://api.bilibili.com/x/space/top/arc/set'\
--data-urlencode 'bvid=BV1n741127LD'\
-b 'SESSDATA=xxx'
```

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

#### 取消置顶视频

> http://api.bilibili.com/x/space/top/arc/cancel

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                     | 必要性 | 备注 |
| ------ | ---- | ------------------------ | ------ | ---- |
| csrf   | str  | CSRF Token（位于cookie） | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误（重复取消） |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

```shell
curl 'http://api.bilibili.com/x/space/top/arc/cancel'\
--data-urlencode 'csrf=xxx'\
-b 'SESSDATA=xxx'
```

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

### 代表作视频

#### 查询用户代表作视频列表

> http://api.bilibili.com/x/space/masterpiece

*请求方式：GET*

新访客在其主页上可见

最多可以设置3个

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| vmid   | num  | 目标用户UID | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型   | 内容       | 备注                        |
| ------- | ------ | ---------- | --------------------------- |
| code    | num    | 返回值     | 0：成功<br />-400：请求错误 |
| message | str    | 错误信息   | 默认为0                     |
| ttl     | num    | 1          |                 |
| data    | array | 代表作列表 |                             |

`data`数组：

| 项   | 类型 | 内容    | 备注                      |
| ---- | ---- | ------- | ------------------------- |
| 0    | obj  | 代表作1 | 无则为空                  |
| 1    | obj  | 代表作2 | 无则为空                  |
| 2    | obj  | 代表作3 | 无则为空<br />最多设置3个 |

`data`数组中的对象：

同查询用户置顶视频中的`data`对象

**示例：**

查询用户`UID=23215368`的代表作视频列表

```shell
curl -G 'http://api.bilibili.com/x/space/masterpiece'\
--data-urlencode 'vmid=23215368'
```

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": [{
		"aid": 37896701,
		"videos": 1,
		"tid": 28,
		"tname": "原创音乐",
		"copyright": 1,
		"pic": "http://i2.hdslb.com/bfs/archive/cc9e72822d68fffdd0406144f1b5348a13c89652.jpg",
		"title": "燃烧吧！铃声！把主流手机铃声编成一首曲子",
		"pubdate": 1544469671,
		"ctime": 1544469671,
		"desc": "各品牌的手机铃声大合奏，毫无违和感~",
		"state": 0,
		"attribute": 16768,
		"duration": 208,
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
			"mid": 23215368,
			"name": "Wayjon冰冰酱",
			"face": "http://i2.hdslb.com/bfs/face/7c9715f1768191137eb7ebf91918ca0f99532012.jpg"
		},
		"stat": {
			"aid": 37896701,
			"view": 1058241,
			"danmaku": 16821,
			"reply": 3725,
			"favorite": 76888,
			"coin": 100694,
			"share": 17091,
			"now_rank": 0,
			"his_rank": 0,
			"like": 90521,
			"dislike": 0
		},
		"dynamic": "#编曲##FL##纯音乐#",
		"cid": 66621209,
		"dimension": {
			"width": 1920,
			"height": 1080,
			"rotate": 0
		},
		"bvid": "BV18t411q7zz",
		"reason": "",
		"inter_video": false
	}, {
		"aid": 39596658,
		"videos": 1,
		"tid": 21,
		"tname": "日常",
		"copyright": 1,
		"pic": "http://i2.hdslb.com/bfs/archive/431e51d0e40e3461e1c1b0f59c755ae8843b1adb.jpg",
		"title": "MY2018 - 纪念我的2018年",
		"pubdate": 1546328392,
		"ctime": 1546328392,
		"desc": "",
		"state": 0,
		"attribute": 16768,
		"duration": 239,
		"mission_id": 10996,
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
			"mid": 23215368,
			"name": "Wayjon冰冰酱",
			"face": "http://i2.hdslb.com/bfs/face/7c9715f1768191137eb7ebf91918ca0f99532012.jpg"
		},
		"stat": {
			"aid": 39596658,
			"view": 1518,
			"danmaku": 16,
			"reply": 40,
			"favorite": 22,
			"coin": 60,
			"share": 9,
			"now_rank": 0,
			"his_rank": 0,
			"like": 112,
			"dislike": 0
		},
		"dynamic": "#vlog##记录##生活记录#",
		"cid": 69561078,
		"dimension": {
			"width": 1920,
			"height": 1080,
			"rotate": 0
		},
		"bvid": "BV1Jt411B7La",
		"reason": "",
		"inter_video": false
	}, {
		"aid": 44721369,
		"videos": 1,
		"tid": 28,
		"tname": "原创音乐",
		"copyright": 1,
		"pic": "http://i0.hdslb.com/bfs/archive/9887797402599c42f74a7624f3db4a92a0ebf465.jpg",
		"title": "【铃声串烧系列】华米两开花；中华有为，国之荣耀！把主流手机铃声编成一首曲子",
		"pubdate": 1551128445,
		"ctime": 1551128445,
		"desc": "把主流手机铃声编成一首曲子，这一版用华为的铃声作为主旋律，毫无违和感~伴随着2019mwc的开幕，希望国产厂商能获得全世界的目光，并且将属于中国人的科技自信传递到全世界！",
		"state": 0,
		"attribute": 16768,
		"duration": 174,
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
			"mid": 23215368,
			"name": "Wayjon冰冰酱",
			"face": "http://i2.hdslb.com/bfs/face/7c9715f1768191137eb7ebf91918ca0f99532012.jpg"
		},
		"stat": {
			"aid": 44721369,
			"view": 306757,
			"danmaku": 7713,
			"reply": 1520,
			"favorite": 17216,
			"coin": 16489,
			"share": 2917,
			"now_rank": 0,
			"his_rank": 0,
			"like": 21439,
			"dislike": 0
		},
		"dynamic": "#铃声##纯音乐##音乐#【铃声串烧】Mix Ringtones！船新的版本来啦！这一版用华为的铃声作为主旋律，毫无违和感~伴随着2019mwc的开幕，希望国产厂商能获得全世界的目光，并且将属于中国人的科技自信传递到全世界！",
		"cid": 78290138,
		"dimension": {
			"width": 1920,
			"height": 1080,
			"rotate": 0
		},
		"bvid": "BV1vb411879C",
		"reason": "",
		"inter_video": false
	}]
}
```

#### 添加代表作视频

> http://api.bilibili.com/x/space/masterpiece/add

*请求方式：POST*

认证方式：Cookie（SESSDATA）

代表作上限为3个稿件

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                     | 必要性       | 备注                             |
| ------ | ---- | ------------------------ | ------------ | -------------------------------- |
| aid    | num  | 置顶目标视频avID         | 必要（可选） | avID与bvID任选一个               |
| bvid   | str  | 置顶目标视频bvID         | 必要（可选） | avID与bvID任选一个               |
| reason | str  | 代表作备注               | 非必要       | 置顶备注最大40字符<br />默认为空 |
| csrf   | str  | CSRF Token（位于cookie） | 必要         |                                  |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />53014：稿件已失效<br />53015：备注过长<br />53017：置顶非自己的稿件<br />53019：达到上限<br />53020：已经存在该稿件 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

添加视频`av94916552`/`BV1ZE411K7ux`到代表作列表

avID方式：

```shell
curl 'http://api.bilibili.com/x/space/masterpiece/add'\
--data-urlencode 'aid=94916552'\
--data-urlencode 'csrf=xxx'\
-b 'SESSDATA=xxx'
```

bvID方式：

```shell
curl 'http://api.bilibili.com/x/space/masterpiece/add'\
--data-urlencode 'bvid=BV1ZE411K7ux'\
--data-urlencode 'csrf=xxx'\
-b 'SESSDATA=xxx'
```

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

#### 删除代表作视频

> http://api.bilibili.com/x/space/masterpiece/cancel

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                     | 必要性       | 备注               |
| ------ | ---- | ------------------------ | ------------ | ------------------ |
| aid    | num  | 要删除的目标视频avID     | 必要（可选） | avID与bvID任选一个 |
| bvid   | str  | 要删除的目标视频bvID     | 必要（可选） | avID与bvID任选一个 |
| csrf   | str  | CSRF Token（位于cookie） | 必要         |                    |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />53021：置顶列表中没有该视频 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |

**示例：**

删除置顶视频`av59765630`/`BV1Yt41137T6`

avID方式：

```shell
curl 'api.bilibili.com/x/space/masterpiece/cancel'\
--data-urlencode 'aid=59765630'\
--data-urlencode 'csrf=xxx'\
-b 'SESSDATA=xxx'
```

bvID方式：

```shell
curl 'http://api.bilibili.com/x/space/masterpiece/cancel'\
--data-urlencode 'bvid=BV1Yt41137T6'\
--data-urlencode 'csrf=xxx'\
-b 'SESSDATA=xxx'
```

### 个人TAG

#### 查看用户个人TAG

> http://api.bilibili.com/x/space/acc/tags

*请求方式：GET*

上限5条，且内容由用户自定义

带有转义

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | num  | 目标用户UID | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型  | 内容     | 备注                        |
| ------- | ----- | -------- | --------------------------- |
| code    | num   | 返回值   | 0：成功<br />-400：请求错误 |
| message | str   | 错误信息 | 默认为0                     |
| ttl     | num   | 1        |                             |
| data    | array | 信息本体 |                             |

`data`数组：

| 项   | 类型 | 内容     | 备注          |
| ---- | ---- | -------- | ------------- |
| 0    | obj  | 套了个娃 | 只有1项？？？ |

`data`数组中的对象：

| 字段 | 类型  | 内容        | 备注 |
| ---- | ----- | ----------- | ---- |
| mid  | num   | 目标用户UID |      |
| tags | array | TAG名称     |      |

`data`数组中的对象中的`tags`数组：

| 项   | 类型 | 内容     | 备注    |
| ---- | ---- | -------- | ------- |
| 0    | str  | TAG1     |         |
| n    | str  | TAG(n+1) |         |
| ……   | str  | ……       |         |
| 4    | str  | TAG5     | 上限5条 |

**示例：**

查看用户`UID=53456`的个人TAG

```shell
curl -G 'http://api.bilibili.com/x/space/acc/tags'\
--data-urlencode 'mid=53456'
```

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": [
        {
            "mid": 53456,
            "tags": [
                "游戏",
                "音乐",
                "warma",
                "搞笑",
                "动画"
            ]
        }
    ]
}
```

#### 修改个人TAG

> http://api.bilibili.com/x/space/acc/tags/set

*请求方式：POST*

认证方式：Cookie（SESSDATA）

鉴权方式：Cookie中`DedeUserID`存在且不为0

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                     | 必要性 | 备注                                                         |
| ------ | ---- | ------------------------ | ------ | ------------------------------------------------------------ |
| tags   | strs | 要设置的TAG内容          | 非必要 | 删除公告留空或省去即可<br />各TAG长度小于10字符<br />最多5个TAG<br />各TAG之间用","(%2C)分隔<br />重复TAG无效 |
| csrf   | str  | CSRF Token（位于cookie） | 必要   |                                                              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误（超出长度限制） |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

修改个人TAG为`minecraft,技术宅,大佬,小哥哥,可爱`

```shell
curl 'http://api.bilibili.com/x/space/acc/tags/set'\
--data-urlencode 'tags=minecraft,技术宅,大佬,小哥哥,可爱'\
--data-urlencode 'csrf=xxx'\
-b 'SESSDATA=xxx;DedeUserID=1'
```

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

### 空间公告

#### 查看用户空间公告

> http://api.bilibili.com/x/space/notice

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | num  | 目标用户UID | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        |                             |
| data    | str  | 公告信息 | 无则为空                    |

**示例：**

查看用户`UID=53456`的空间公告

```shell
curl -G 'http://api.bilibili.com/x/space/notice'\
--data-urlencode 'mid=53456'
```

```json
{
    "code":0,
    "message":"0",
    "ttl":1,
    "data":"我的微博 @_warma_\n直播录像上传到：warma养鸽场\n头像画师是：微博@Dr-H_喵_\n横幅画师：@薬屋"
}
```

#### 修改空间公告

> http://api.bilibili.com/x/space/notice/set

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                     | 必要性 | 备注                                    |
| ------ | ---- | ------------------------ | ------ | --------------------------------------- |
| notice | str  | 要设置的公告内容         | 非必要 | 删除公告留空或省去即可<br />少于150字符 |
| csrf   | str  | CSRF Token（位于cookie） | 必要   |                                         |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-304：未修改<br />-400：请求错误（超出长度限制） |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |

**示例：**

修改个人空间公告为`鸽子`

```shell
curl 'http://api.bilibili.com/x/space/notice/set'\
--data-urlencode 'notice=鸽子'\
--data-urlencode 'csrf=xxx'\
-b 'SESSDATA=xxx'
```

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

### 主页板块布局与权限

#### 调整空间板块布局

> http://space.bilibili.com/ajax/settings/setIndexOrder

*请求方式：POST*

认证方式：Cookie（SESSDATA）

鉴权方式：Cookie中`DedeUserID`及`DedeUserID__ckMd5`存在且不为0，referer为 `.bilibili.com`域名下

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名      | 类型 | 内容                     | 必要性 | 备注                                                         |
| ----------- | ---- | ------------------------ | ------ | ------------------------------------------------------------ |
| index_order | nums | 布局列表                 | 必要   | 每个值之间用","（%2C）分隔<br />先左侧布局再右侧布局<br />值的意义见下表 |
| csrf        | str  | CSRF Token（位于cookie） | 必要   |                                                              |

布局参数`index_order`：

| 值   | 含义                   |
| ---- | ---------------------- |
| 1    | （左侧）我的稿件       |
| 2    | （左侧）我的收藏夹     |
| 3    | （左侧）订阅番剧       |
| 4    | （左侧）订阅标签       |
| 5    | （左侧）最近投币的视频 |
| 6    | **作用尚不明确**       |
| 7    | （左侧）我的频道       |
| 8    | （左侧）我的专栏       |
| 9    | （左侧）我的相簿       |
| 21   | （右侧）公告           |
| 22   | （右侧）直播间         |
| 23   | （右侧）个人资料       |
| 24   | （右侧）官方活动       |
| 25   | （右侧）最近玩的游戏   |

**json回复：**

根对象：

| 字段   | 类型 | 内容     | 备注                                |
| ------ | ---- | -------- | ----------------------------------- |
| ststus | bool | 操作结果 | true：操作成功<br />false：操作失败 |
| data   | str  | 错误信息 | 正确时无此项                        |

**示例：**

调整空间布局为：

>我的稿件            直播间
>我的专栏            个人资料
>订阅番剧            公告
>我的收藏夹        官方活动
>我的相簿            最近玩的游戏
>最近投币的视频
>订阅标签
>我的频道

```shell
curl 'http://space.bilibili.com/ajax/settings/setIndexOrder'\
--data-urlencode 'index_order=1,8,3,2,9,5,4,7,22,23,21,24,25,6'\
--data-urlencode 'csrf=xxx'\
-b 'SESSDATA=xxx;DedeUserID=1;DedeUserID__ckMd5=1;'\
-e 'https://www.bilibili.com'
```

```json
{
    "status": true
}
```

#### 修改空间隐私权限

> http://space.bilibili.com/ajax/settings/setPrivacy

*请求方式：POST*

认证方式：Cookie（SESSDATA）

鉴权方式：Cookie中`DedeUserID`及`DedeUserID__ckMd5`存在且不为0，referer为 `.bilibili.com`域名下

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名      | 类型 | 内容                     | 必要性 | 备注                               |
| ----------- | ---- | ------------------------ | ------ | ---------------------------------- |
| fav_video   | num  | 收藏视频                 | 非必要 | 0：隐藏<br />1：公开<br />**下同** |
| bangumi     | num  | 追番及追剧               | 非必要 |                                    |
| tags        | num  | 关注的TAG                | 非必要 |                                    |
| coins_video | num  | 投币的视频               | 非必要 |                                    |
| user_info   | num  | 个人信息                 | 非必要 |                                    |
| played_game | num  | 玩过的游戏               | 非必要 |                                    |
| csrf        | nstr | CSRF Token（位于cookie） | 必要   |                                    |

**json回复：**

根对象：

| 字段   | 类型 | 内容     | 备注                                |
| ------ | ---- | -------- | ----------------------------------- |
| ststus | bool | 操作结果 | true：操作成功<br />false：操作失败 |
| data   | str  | 错误信息 | 正确时无此项                        |

**示例：**

设置`关注的TAG`为隐藏

```shell
curl 'http://space.bilibili.com/ajax/settings/setPrivacy'\
--data-urlencode 'tags=0'\
--data-urlencode 'csrf=xxx'\
-b 'SESSDATA=xxx;DedeUserID=1;DedeUserID__ckMd5=1;'\
-e 'https://www.bilibili.com'
```

```json
{
    "status": true
}
```

### 查询用户最近玩过的游戏

> http://api.bilibili.com/x/space/lastplaygame 

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | num  | 目标用户UID | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型                            | 内容     | 备注                                                       |
| ------- | ------------------------------- | -------- | ---------------------------------------------------------- |
| code    | num                             | 返回值   | 0：成功<br />-400：请求错误<br />53013：用户隐私设置未公开 |
| message | str                             | 错误信息 | 默认为0                                                    |
| ttl     | num                             | 1        |                                                            |
| data    | 隐藏时：null<br />公开时：array | 信息本体 |                                                            |

`data`数组：

| 项   | 类型 | 内容      | 备注             |
| ---- | ---- | --------- | ---------------- |
| 0    | obj  | 游戏1     |                  |
| n    | obj  | 游戏(n+1) | 项数为总计游戏数 |
| ……   | obj  | ……        | ……               |

`data`数组中的对象：

| 字段    | 类型 | 内容            | 备注 |
| ------- | ---- | --------------- | ---- |
| website | str  | 游戏主页链接url |      |
| image   | str  | 游戏图片url     |      |
| name    | str  | 游戏名          |      |

**示例：**

查询`UID=2`的最近玩过的游戏

```shell
curl -G 'http://api.bilibili.com/x/space/lastplaygame'\
--data-urlencode 'mid=2 '
```

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": [
        {
            "website": "https://game.bilibili.com/fgo/event_meihosou",
            "image": "http://i0.hdslb.com/bfs/game/f7d4ee0877089e4079b8f0b4f5c95dd4ceba512a.png",
            "name": "命运-冠位指定（Fate/GO）"
        },
        {
            "website": "https://game.bilibili.com/pcr/xxtix",
            "image": "http://i0.hdslb.com/bfs/game/7922ecea5cc76fe3c8c177e1d4a6c8cf1c36a700.jpg",
            "name": "公主连结Re:Dive"
        },
        {
            "website": "https://game.bilibili.com/dwbgx/",
            "image": "http://i0.hdslb.com/bfs/game/6d5b2df70dfa987408d8d09110cdc327949885e3.png",
            "name": "大王不高兴"
        },
        {
            "website": "https://game.bilibili.com/bangdream/1stanniversary-yxzx/",
            "image": "http://i0.hdslb.com/bfs/game/4a7d0b7272dffe5a489ee935b6bd2d4f7d5f1257.png",
            "name": "BanG Dream！"
        },
        {
            "website": "http://www.biligame.com/detail/?id=101772",
            "image": "http://i0.hdslb.com/bfs/game/8e8b04e7bd2170c2ba2c9f563a62c72bac2eba2c.jpg",
            "name": "明日方舟"
        }
    ]
}
```



### 查询用户动态

动态信息有点复杂，目前只解析出少量信息

如果仅仅需要获取动态内容，请参考

（文本类动态）”`data`中的`cards`列表中`card`字符串经过格式化后的对象中`item`对象“中的`content`和

（视频类动态）”`data`中的`cards`列表中`card`字符串“中的`stat`

文本类动态内容暂时并未解决u码出现条件与判断方法



> https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history
> *方式：GET*

**url参数：**

| 参数名            | 类型 | 内容                           | 必要性 | 备注                              |
| ----------------- | ---- | ------------------------------ | ------ | --------------------------------- |
| visitor_uid       | num  | 访问者uid                      | 非必要 | 未发现具体作用                    |
| host_uid          | num  | 被访问者uid                    | 必要   |                                   |
| offset_dynamic_id | num  | 访问某页动态                   | 非必要 | 默认为0表示第一页                 |
| need_top          | num  | 返回json中是否含有置顶动态信息 | 非必要 | 除1以外任何字符串均不返回置顶动态 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0正常 -1参数错误（似乎只有host_uid参数名缺失时候才会导致）500003存在host_uid参数名但为空参数 |
| msg     | str  | 错误信息 | 默认为空                                                     |
| message | str  | 错误信息 | 默认为空                                                     |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段        | 类型  | 内容                                                         | 备注                                |
| ----------- | ----- | ------------------------------------------------------------ | ----------------------------------- |
| has_more    | num   | 是否有下一页动态                                             | 如果为0，则同对象下的next_offset为0 |
| attentions  | obj   | 包含一个名为uids的list，其中包含所登陆的用户(Cookie)所关注的，包括自己在内的所有用户的uid | 不登陆则为空                        |
| cards       | array | 每个动态相关的内容                                           | 最多12个                            |
| next_offset | num   | 下一页动态的id                                               |                                     |
| _gt_        | num   | 0                                                            | **作用尚不明确**                    |

`data`中的`cards`列表中某一元素中的对象：

| 字段        | 类型 | 内容                       | 备注                         |
| ----------- | ---- | -------------------------- | ---------------------------- |
| desc        | obj  | 动态相关信息               | 发送人信息，动态本身信息等等 |
| card        | str  | 动态内容信息               |                              |
| extend_json | str  | 更多的相关信息             |                              |
| extra       | obj  | 更更多的相关信息           | 目前只发现含有“is_space_top” |
| display     | obj  | 主要是视觉展示用的相关信息 |                              |

`data`中的`cards`列表中`desc`对象：

| 字段           | 类型 | 内容                 | 备注                                 |
| -------------- | ---- | -------------------- | ------------------------------------ |
| uid            | num  | 发送动态用户uid      |                                      |
| type           | num  | 动态类型             | **暂时无法确定**                     |
| rid            | num  | 视频av号             | **暂时无法确定**                     |
| acl            | num  |                      | **暂时无法确定**                     |
| view           | num  | 动态观看             | 暂时不知道如何增加计数               |
| repost         | num  | 转发数               |                                      |
| comment        | num  | 评论数               |                                      |
| is_like        | num  | 0/1                  | Cookie包含的账户是否喜欢（赞）该动态 |
| dynamic_id     | num  |                      | **暂时无法确定**                     |
| timestamp      | num  | 动态发送时间的时间戳 |                                      |
| pre_dy_id      | num  |                      | **暂时无法确定**                     |
| orig_dy_id     | num  |                      | **暂时无法确定**                     |
| orig_type      | num  |                      | **暂时无法确定**                     |
| user_profile   | obj  | 用户信息             |                                      |
| uid_type       | num  |                      | **暂时无法确定**                     |
| stype          | num  |                      | **暂时无法确定**                     |
| r_type         | num  |                      | **暂时无法确定**                     |
| inner_id       | num  |                      | **暂时无法确定**                     |
| status         | num  |                      | **暂时无法确定**                     |
| dynamic_id_str | str  | 本动态id             |                                      |
| pre_dy_id_str  | str  | 转发的动态id         | 无转发就是0                          |
| orig_dy_id_str | str  | 转发的原始动态id     | 无转发就是0                          |
| rid_str        | str  | av号                 |                                      |
| previous       | obj  | 转发的动态相关信息   | 在转发动态时候出现                   |
| origin         | obj  | 最初的动态相关信息   | 在转发动态时候出现                   |
| bvid           | str  | bv号                 |                                      |
|                |      |                      |                                      |



`data`中的`cards`列表中`card`字符串：

注意：需要将str格式化为obj！

| 字段           | 类型 | 内容                   | 备注                           |
| -------------- | ---- | ---------------------- | ------------------------------ |
| user           | obj  | 使用者信息             | 文本类动态存在                 |
| item           | obj  | 动态信息               | 文本类动态存在                 |
| aid            | num  | 视频av号               | 视频类动态存在                 |
| attribute      | num  |                        | **暂时无法确定**视频类动态存在 |
| cid            | num  |                        | **暂时无法确定**视频类动态存在 |
| copyright      | num  | 版权保护 0/1           | 视频类动态存在                 |
| ctime          | num  | 视频上传时间戳         | 视频类动态存在                 |
| desc           | str  | 视频描述               | 视频类动态存在                 |
| dimension      | obj  | 视频尺寸？             | 视频类动态存在                 |
| duration       | num  | 视频时长               | 视频类动态存在                 |
| dynamic        | str  | tag？                  | 视频类动态存在                 |
| jump_url       | str  | bilibili链接？         | 视频类动态存在                 |
| owner          | obj  | 上传者信息？           | 视频类动态存在                 |
| pic            | str  | 视频封面（可能非原图） | 视频类动态存在                 |
| player_info    |      |                        | **暂时无法确定**视频类动态存在 |
| pubdate        | num  | 视频上传时间戳         | 视频类动态存在                 |
| rights         | obj  |                        | **暂时无法确定**视频类动态存在 |
| share_subtitle | str  | 分享用副标题？         | **暂时无法确定**视频类动态存在 |
| stat           | obj  | 视频信息               | 视频类动态存在                 |
| state          | obj  |                        | **暂时无法确定**视频类动态存在 |
| tid            | num  |                        | **暂时无法确定**视频类动态存在 |
| title          | str  | 视频标题               | 视频类动态存在                 |
| tname          | str  | 分区？                 | 视频类动态存在                 |
| videos         | num  | 视频数？               | 视频类动态存在                 |



`data`中的`cards`列表中`card`字符串经过格式化后的对象中`user`对象：

**文本类动态存在**

| 字段  | 类型 | 内容           | 备注 |
| ----- | ---- | -------------- | ---- |
| uid   | num  | 用户uid        |      |
| uname | str  | 用户名称       |      |
| face  | str  | 头像的图片地址 |      |



`data`中的`cards`列表中`card`字符串经过格式化后的对象中`item`对象：

**文本类动态存在**

| 字段       | 类型 | 内容           | 备注                                      |
| ---------- | ---- | -------------- | ----------------------------------------- |
| rp_id      | num  |                | **暂时无法确定**                          |
| uid        | num  | 所发动态用户   | **暂时无法确定**                          |
| content    | str  | 动态内容       | **暂时无法确定，且在某种情况下会变成u码** |
| ctrl       | str  |                | **暂时无法确定**                          |
| orig_dy_id | num  | 转发的起始动态 | 无转发就是0                               |
| pre_dy_id  | num  | 转发的动态id   | 无转发就是0                               |
| timestamp  | num  | 本动态时间戳   |                                           |
| reply      | num  | 回复个数       |                                           |



**示例**

以访问者`UID=1`的身份查询`UID=233114659`的包括置顶动态（need_top=1）的第一页（offset_dynamic_id=0）动态

http://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history?visitor_uid=1&host_uid=233114659&offset_dynamic_id=0&need_top=1

```json
{
  "code": 0,
  "msg": "",
  "message": "",
  "data": {
    "has_more": 1,
    "attentions": {
      "uids": [
        546195,
        3514986,
        4162287,
        6574487,
        10851936,
        14481660,
        37090048
      ]
    },
    "cards": [
      {
        "desc": {
          "uid": 233114659,
          "type": 8,
          "rid": 243776320,
          "acl": 0,
          "view": 1397368,
          "repost": 159,
          "like": 16010,
          "is_liked": 0,
          "dynamic_id": 409849839792687500,
          "timestamp": 1594264002,
          "pre_dy_id": 0,
          "orig_dy_id": 0,
          "orig_type": 0,
          "user_profile": {
            "info": {
              "uid": 233114659,
              "uname": "碧蓝航线",
              "face": "https://i0.hdslb.com/bfs/face/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg"
            },
            "card": {
              "official_verify": {
                "type": 1,
                "desc": "碧蓝航线官方账号"
              }
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1596470400000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": ""
              }
            },
            "pendant": {
              "pid": 1987,
              "name": "碧蓝航线2020",
              "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
              "expire": 0,
              "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
            },
            "decorate_card": {
              "mid": 233114659,
              "id": 1970,
              "card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "card_type": 2,
              "name": "碧蓝航线2020粉丝专属",
              "expire_time": 0,
              "card_type_name": "免费",
              "uid": 233114659,
              "item_id": 1970,
              "item_type": 3,
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1988?navhide=1&mid=233114659&from=dynamic",
              "fan": {
                "is_fan": 1,
                "number": 1,
                "color": "#498de1",
                "num_desc": "000001"
              },
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png"
            },
            "rank": "10000",
            "sign": "今天有没有被指挥官偷瞄呢(:3_ヽ)_",
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": "0"
            }
          },
          "uid_type": 1,
          "stype": 0,
          "r_type": 1,
          "inner_id": 0,
          "status": 1,
          "dynamic_id_str": "409849839792687487",
          "pre_dy_id_str": "0",
          "orig_dy_id_str": "0",
          "rid_str": "243776320",
          "bvid": "BV15v411z7BD"
        },
        "card": "{\"aid\":243776320,\"attribute\":16768,\"cid\":210412133,\"copyright\":1,\"ctime\":1594264001,\"desc\":\"信息载入，信息载入！全新方案舰已载入系统！\\n从沉睡中唤醒她们，予她们以使命吧！\\n\\n>>「科研·三期」全新方案舰正式解禁！<< \\n德雷克-重巡洋舰-决战方案\\n美因茨-轻巡洋舰-最高方案\\n奥丁-战列巡洋舰-最高方案\\n柴郡-重巡洋舰-最高方案\\n香槟-战列舰-最高方案\\n等你唤醒！\\n\\n了解全新方案舰信息，可前往：https:\\/\\/game.bilibili.com\\/blhx\\/kysqzsjj\\/\",\"dimension\":{\"height\":1080,\"rotate\":0,\"width\":1920},\"duration\":72,\"dynamic\":\"#碧蓝航线#\",\"jump_url\":\"bilibili:\\/\\/video\\/243776320\\/?page=1&player_preload=null&player_width=1920&player_height=1080&player_rotate=0\",\"owner\":{\"face\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\",\"mid\":233114659,\"name\":\"碧蓝航线\"},\"pic\":\"https:\\/\\/i2.hdslb.com\\/bfs\\/archive\\/206a9c99e45206e9c362458bfb1b067c18a0a191.jpg\",\"player_info\":null,\"pubdate\":1594264001,\"rights\":{\"autoplay\":1,\"bp\":0,\"download\":0,\"elec\":0,\"hd5\":1,\"is_cooperation\":0,\"movie\":0,\"no_background\":0,\"no_reprint\":1,\"pay\":0,\"ugc_pay\":0,\"ugc_pay_preview\":0},\"share_subtitle\":\"已观看14.0万次\",\"stat\":{\"aid\":243776320,\"coin\":4160,\"danmaku\":442,\"dislike\":0,\"favorite\":2233,\"his_rank\":0,\"like\":16010,\"now_rank\":0,\"reply\":1770,\"share\":1579,\"view\":148995},\"state\":0,\"tid\":172,\"title\":\"《碧蓝航线》「科研·三期」PV公开\",\"tname\":\"手机游戏\",\"videos\":1}",
        "extend_json": "{\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"},\"topic\":{\"is_attach_topic\":1}}",
        "extra": {
          "is_space_top": 1
        },
        "display": {
          "topic_info": {
            "topic_details": [
              {
                "topic_id": 2908447,
                "topic_name": "碧蓝航线",
                "is_activity": 0,
                "topic_link": ""
              }
            ]
          },
          "bottom_info": {
            "bottom_details": [
              {
                "content": "碧蓝航线",
                "jump_url": "bilibili://game_center/detail?id=97&sourceFrom=179",
                "bottom_type": 2
              }
            ]
          },
          "usr_action_txt": "投稿了视频",
          "relation": {
            "status": 1,
            "is_follow": 0,
            "is_followed": 0
          },
          "tags": [
            {
              "tag_type": 2,
              "sub_type": 2,
              "icon": "https://i0.hdslb.com/bfs/album/e8613d8debe7fd70737fc5ce59b543e89b0cce31.png",
              "text": "碧蓝航线",
              "link": "bilibili://game_center/detail?id=97&sourceFrom=179"
            }
          ]
        }
      },
      {
        "desc": {
          "uid": 233114659,
          "type": 2,
          "rid": 84571861,
          "acl": 0,
          "view": 423106,
          "repost": 12,
          "like": 5280,
          "is_liked": 0,
          "dynamic_id": 418166485617518500,
          "timestamp": 1596200372,
          "pre_dy_id": 0,
          "orig_dy_id": 0,
          "orig_type": 0,
          "user_profile": {
            "info": {
              "uid": 233114659,
              "uname": "碧蓝航线",
              "face": "https://i0.hdslb.com/bfs/face/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg"
            },
            "card": {
              "official_verify": {
                "type": 1,
                "desc": "碧蓝航线官方账号"
              }
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1596470400000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": ""
              }
            },
            "pendant": {
              "pid": 1987,
              "name": "碧蓝航线2020",
              "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
              "expire": 0,
              "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
            },
            "decorate_card": {
              "mid": 233114659,
              "id": 1970,
              "card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "card_type": 2,
              "name": "碧蓝航线2020粉丝专属",
              "expire_time": 0,
              "card_type_name": "免费",
              "uid": 233114659,
              "item_id": 1970,
              "item_type": 3,
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1988?navhide=1&mid=233114659&from=dynamic",
              "fan": {
                "is_fan": 1,
                "number": 1,
                "color": "#498de1",
                "num_desc": "000001"
              },
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png"
            },
            "rank": "10000",
            "sign": "今天有没有被指挥官偷瞄呢(:3_ヽ)_",
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": "0"
            }
          },
          "uid_type": 1,
          "stype": 0,
          "r_type": 1,
          "inner_id": 0,
          "status": 1,
          "dynamic_id_str": "418166485617518558",
          "pre_dy_id_str": "0",
          "orig_dy_id_str": "0",
          "rid_str": "84571861"
        },
        "card": "{\"item\":{\"id\":84571861,\"title\":\"\",\"description\":\"#\\u78a7\\u84dd\\u822a\\u7ebf# #ChinaJoy# \\nDay 1\\u53c2\\u5c55\\u7ed3\\u675f\\uff01\\u9996\\u65e5\\u573a\\u7167\\u65b0\\u9c9c\\u51fa\\u7089\\uff0c\\u611f\\u8c22\\u7279\\u5730\\u524d\\u6765\\u7684\\u6307\\u6325\\u5b98\\u4eec\\uff5e\\u4e0d\\u77e5\\u9053\\u4eca\\u65e5\\u6307\\u6325\\u5b98\\u4eec\\u6709\\u6ca1\\u6709\\u83b7\\u53d6\\u6211\\u4eec\\u7684\\u300c\\u9038\\u4ed9\\u5957\\u5a03\\u300d\\u5462\\uff1f(\\u2229\\u1d52\\u0334\\u0336\\u0337\\u0324\\u2314\\u1d52\\u0334\\u0336\\u0337\\u0324\\u2229)\\n\\u63a5\\u4e0b\\u6765\\u76843\\u5929\\ud83d\\udccdN5-02\\u5c55\\u4f4d\\uff0c\\u6307\\u6325\\u5b98\\u4e0d\\u4ec5\\u53ef\\u4ee5\\u770b\\u5230\\u7cbe\\u5fc3\\u642d\\u5efa\\u7684\\u7279\\u8272\\u5c55\\u53f0\\uff0c\\u73a9\\u5230\\u78a7\\u84dd\\u822a\\u7ebf\\u7279\\u8272\\u4e92\\u52a8\\u6e38\\u620f\\uff0c\\u8fd8\\u6709\\u673a\\u4f1a\\u8d62\\u53d6\\u300c\\u9038\\u4ed9\\u5957\\u5a03\\u300d\\u3001\\u300c\\u9038\\u4ed9\\u6587\\u4ef6\\u5939\\u300d\\u548c\\u300c\\u9635\\u8425\\u4e3b\\u9898\\u7a97\\u82b1\\u8d34\\u7eb8\\u300d\\u54e6\\uff5e \\n\\u671f\\u5f85\\u5404\\u4f4d\\u6307\\u6325\\u5b98\\u7684\\u5230\\u6765(\\u2022\\u0300\\u03c9\\u2022\\u0301)\\u2727 \",\"category\":\"daily\",\"role\":[],\"source\":[],\"pictures\":[{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/bed0307eaba2d62039e479bacd0391c0ff598ac9.jpg\",\"img_width\":1600,\"img_height\":1067,\"img_size\":2204},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/e251e6d41c436db68abaee88cdc4c67598302283.jpg\",\"img_width\":1600,\"img_height\":1067,\"img_size\":2105},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/5c8f2b66d3a6035be1661d62a5f2d26249cb6cd1.jpg\",\"img_width\":1599,\"img_height\":1067,\"img_size\":841},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/e877ed6f2a9b49984acf6e52eea60de020c7ddb5.jpg\",\"img_width\":1067,\"img_height\":1600,\"img_size\":1675},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/6751fcb84c3f4112b23b2bdc0196a2c0cd56f140.jpg\",\"img_width\":1620,\"img_height\":1080,\"img_size\":452},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/ad0333e6e0ae0f7d86ccdea8290e8c18393f466b.jpg\",\"img_width\":1620,\"img_height\":1080,\"img_size\":460}],\"pictures_count\":6,\"upload_time\":1596200372,\"at_control\":\"\",\"reply\":294,\"settings\":{\"copy_forbidden\":0},\"is_fav\":0},\"user\":{\"uid\":233114659,\"head_url\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\",\"name\":\"\\u78a7\\u84dd\\u822a\\u7ebf\",\"vip\":{\"vipType\":1,\"vipDueDate\":1596470400000,\"dueRemark\":\"\",\"accessStatus\":0,\"vipStatus\":1,\"vipStatusWarn\":\"\",\"themeType\":0,\"label\":{\"path\":\"\"}}}}",
        "extend_json": "{\"from\":{\"emoji_type\":1,\"from\":\"create.dynamic.web\",\"verify\":{\"cc\":{\"nv\":1}}},\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"},\"topic\":{\"is_attach_topic\":1}}",
        "extra": {
          "is_space_top": 0
        },
        "activity_infos": {
          "details": [
            {
              "type": 1,
              "detail": "{\"is_show\":1,\"topic_id\":2538844,\"topic_link\":\"bilibili:\\/\\/pegasus\\/channel\\/2538844?type=topic\",\"topic_name\":\"ChinaJoy\"}"
            }
          ]
        },
        "display": {
          "topic_info": {
            "topic_details": [
              {
                "topic_id": 2908447,
                "topic_name": "碧蓝航线",
                "is_activity": 0,
                "topic_link": ""
              },
              {
                "topic_id": 2538844,
                "topic_name": "ChinaJoy",
                "is_activity": 1,
                "topic_link": "https://game.bilibili.com/2020ChinaJoy/"
              },
              {
                "topic_id": 56787,
                "topic_name": "CHINAJOY",
                "is_activity": 0,
                "topic_link": ""
              }
            ]
          },
          "bottom_info": {
            "bottom_details": [
              {
                "content": "碧蓝航线",
                "jump_url": "bilibili://game_center/detail?id=97&sourceFrom=179",
                "bottom_type": 2
              }
            ]
          },
          "relation": {
            "status": 1,
            "is_follow": 0,
            "is_followed": 0
          },
          "tags": [
            {
              "tag_type": 2,
              "sub_type": 2,
              "icon": "https://i0.hdslb.com/bfs/album/e8613d8debe7fd70737fc5ce59b543e89b0cce31.png",
              "text": "碧蓝航线",
              "link": "bilibili://game_center/detail?id=97&sourceFrom=179"
            }
          ]
        }
      },
      {
        "desc": {
          "uid": 233114659,
          "type": 1,
          "rid": 418066107934388000,
          "acl": 0,
          "view": 427483,
          "repost": 22,
          "comment": 147,
          "like": 3678,
          "is_liked": 0,
          "dynamic_id": 418066107934024260,
          "timestamp": 1596177001,
          "pre_dy_id": 416667030934331100,
          "orig_dy_id": 416667030934331100,
          "orig_type": 2,
          "user_profile": {
            "info": {
              "uid": 233114659,
              "uname": "碧蓝航线",
              "face": "https://i0.hdslb.com/bfs/face/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg"
            },
            "card": {
              "official_verify": {
                "type": 1,
                "desc": "碧蓝航线官方账号"
              }
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1596470400000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": ""
              }
            },
            "pendant": {
              "pid": 1987,
              "name": "碧蓝航线2020",
              "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
              "expire": 0,
              "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
            },
            "decorate_card": {
              "mid": 233114659,
              "id": 1970,
              "card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "card_type": 2,
              "name": "碧蓝航线2020粉丝专属",
              "expire_time": 0,
              "card_type_name": "免费",
              "uid": 233114659,
              "item_id": 1970,
              "item_type": 3,
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1988?navhide=1&mid=233114659&from=dynamic",
              "fan": {
                "is_fan": 1,
                "number": 1,
                "color": "#498de1",
                "num_desc": "000001"
              },
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png"
            },
            "rank": "10000",
            "sign": "今天有没有被指挥官偷瞄呢(:3_ヽ)_",
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": "0"
            }
          },
          "uid_type": 1,
          "stype": 0,
          "r_type": 1,
          "inner_id": 1,
          "status": 1,
          "dynamic_id_str": "418066107934024255",
          "pre_dy_id_str": "416667030934331062",
          "orig_dy_id_str": "416667030934331062",
          "rid_str": "418066107934387983",
          "origin": {
            "uid": 233114659,
            "type": 2,
            "rid": 83888239,
            "acl": 1024,
            "view": 1452366,
            "repost": 19371,
            "like": 8897,
            "is_liked": 0,
            "dynamic_id": 416667030934331100,
            "timestamp": 1595851253,
            "pre_dy_id": 0,
            "orig_dy_id": 0,
            "user_profile": {
              "info": {
                "uid": 233114659,
                "uname": "碧蓝航线",
                "face": "https://i0.hdslb.com/bfs/face/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg"
              },
              "card": {
                "official_verify": {
                  "type": 1,
                  "desc": "碧蓝航线官方账号"
                }
              },
              "vip": {
                "vipType": 1,
                "vipDueDate": 1596470400000,
                "dueRemark": "",
                "accessStatus": 0,
                "vipStatus": 1,
                "vipStatusWarn": "",
                "themeType": 0,
                "label": {
                  "path": ""
                }
              },
              "pendant": {
                "pid": 1987,
                "name": "碧蓝航线2020",
                "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
                "expire": 0,
                "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
              },
              "decorate_card": {
                "mid": 233114659,
                "id": 1970,
                "card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
                "card_type": 2,
                "name": "碧蓝航线2020粉丝专属",
                "expire_time": 0,
                "card_type_name": "免费",
                "uid": 233114659,
                "item_id": 1970,
                "item_type": 3,
                "big_card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
                "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1988?navhide=1&mid=233114659&from=dynamic",
                "fan": {
                  "is_fan": 1,
                  "number": 1,
                  "color": "#498de1",
                  "num_desc": "000001"
                },
                "image_enhance": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png"
              },
              "rank": "10000",
              "sign": "今天有没有被指挥官偷瞄呢(:3_ヽ)_",
              "level_info": {
                "current_level": 6,
                "current_min": 0,
                "current_exp": 0,
                "next_exp": "0"
              }
            },
            "uid_type": 1,
            "stype": 0,
            "r_type": 1,
            "inner_id": 0,
            "status": 1,
            "dynamic_id_str": "416667030934331062",
            "pre_dy_id_str": "0",
            "orig_dy_id_str": "0",
            "rid_str": "83888239"
          }
        },
        "card": "{ \"user\": { \"uid\": 233114659, \"uname\": \"碧蓝航线\", \"face\": \"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\" }, \"item\": { \"rp_id\": 418066107934387983, \"uid\": 233114659, \"content\": \"恭喜@小茶竹 @幽紫pomelo @风灬生水丿起 等10位同学中奖，已私信通知，详情请点击互动抽奖查看。\", \"ctrl\": \"[ { \\\"data\\\": \\\"94872570\\\", \\\"location\\\": 2, \\\"length\\\": 4, \\\"type\\\": 1 }, { \\\"data\\\": \\\"107178682\\\", \\\"location\\\": 7, \\\"length\\\": 9, \\\"type\\\": 1 }, { \\\"data\\\": \\\"97590861\\\", \\\"location\\\": 17, \\\"length\\\": 7, \\\"type\\\": 1 } ]\", \"orig_dy_id\": 416667030934331062, \"pre_dy_id\": 416667030934331062, \"timestamp\": 1596177001, \"reply\": 147, \"orig_type\": 2 }, \"origin\": \"{\\\"item\\\":{\\\"id\\\":83888239,\\\"title\\\":\\\"\\\",\\\"description\\\":\\\"\\\\u200b\\\\u4e92\\\\u52a8\\\\u62bd\\\\u5956 #\\\\u78a7\\\\u84dd\\\\u822a\\\\u7ebf# #CP26# \\\\n\\\\u672c\\\\u6b21\\\\u53c2\\\\u5c55\\\\u5706\\\\u6ee1\\\\u7ed3\\\\u675f\\\\u5566\\\\uff01\\\\u611f\\\\u8c22\\\\u6bcf\\\\u4e00\\\\u4f4d\\\\u524d\\\\u6765\\\\u53c2\\\\u5c55\\\\u7684\\\\u6307\\\\u6325\\\\u5b98~\\\\u03b5\\\\u0669(\\\\u0e51> \\\\u2083 <)\\\\u06f6\\\\u0417\\\\u8fd9\\\\u4e2a\\\\u5468\\\\u672b\\\\u56e0\\\\u4e3a\\\\u6307\\\\u6325\\\\u5b98\\\\u800c\\\\u53d8\\\\u5f97\\\\u975e\\\\u5e38\\\\u7cbe\\\\u5f69\\\\uff01\\\\u8428\\\\u62c9\\\\u9171\\\\u5df2\\\\u7ecf\\\\u5f00\\\\u59cb\\\\u671f\\\\u5f85\\\\u548c\\\\u6307\\\\u6325\\\\u5b98\\\\u7684\\\\u4e0b\\\\u4e00\\\\u6b21\\\\u4f1a\\\\u9762\\\\u5566\\\\uff01\\\\n\\\\u4e0b\\\\u9762\\\\uff0c\\\\u5c31\\\\u7531\\\\u8428\\\\u62c9\\\\u9171\\\\u4e3a\\\\u6307\\\\u6325\\\\u5b98\\\\u4eec\\\\u732e\\\\u4e0a\\\\u8fd9\\\\u6b21CP26\\\\u7684\\\\u7cbe\\\\u5f69\\\\u77ac\\\\u95f4\\\\u4ee5\\\\u53ca\\\\u6ee1\\\\u6ee1\\\\u7684\\\\u798f\\\\u5229\\\\uff01(\\\\u3063\\\\u2022\\\\u0300\\\\u03c9\\\\u2022\\\\u0301)\\\\u3063\\\\n \\\\u2193\\\\u2193\\\\u2193\\\\n\\\\u8f6c\\\\u53d1+\\\\u5173\\\\u6ce8\\\\u672c\\\\u535a\\\\uff0c\\\\u5c06\\\\u62bd\\\\u53d6\\\\uff1a\\\\n5\\\\u4f4d\\\\u6307\\\\u6325\\\\u5b98\\\\u83b7\\\\u5f97\\\\u300c\\\\u5c0f\\\\u52a0\\\\u52a0\\\\u5361\\\\u5957\\\\u300d\\\\u4e00\\\\u4efd\\\\uff01\\\\n5\\\\u4f4d\\\\u6307\\\\u6325\\\\u5b98\\\\u83b7\\\\u5f97\\\\u300c\\\\u5c0f\\\\u52a0\\\\u52a0\\\\u5e03\\\\u888b\\\\u300d+\\\\u300c\\\\u968f\\\\u673a\\\\u6b3e\\\\u6587\\\\u4ef6\\\\u5939\\\\u300d\\\\u4e00\\\\u4efd\\\\uff01\\\\n\\\\u4e8e7\\\\u670831\\\\u65e5\\\\u62bd\\\\u53d6 \\\",\\\"category\\\":\\\"daily\\\",\\\"role\\\":[],\\\"source\\\":[],\\\"pictures\\\":[{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/925a8b119396e41e10a4c27ee0e5d7adf88d7a70.jpg\\\",\\\"img_width\\\":1280,\\\"img_height\\\":853,\\\"img_size\\\":112},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/a1ef676e2a934b0f7219eede2087fc933e5794c4.jpg\\\",\\\"img_width\\\":1280,\\\"img_height\\\":853,\\\"img_size\\\":154},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/e7bc60d6dc8416ceb618a1b3c41875fbed30d03d.jpg\\\",\\\"img_width\\\":1280,\\\"img_height\\\":1920,\\\"img_size\\\":222},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/d952d8c0138e408572d724dd104ff302db1a39ca.jpg\\\",\\\"img_width\\\":4095,\\\"img_height\\\":6143,\\\"img_size\\\":3157},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/1a5eefdb3e55c1c56979764a121cbeb765a723ec.jpg\\\",\\\"img_width\\\":6688,\\\"img_height\\\":3762,\\\"img_size\\\":3155},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/964fc617e26d09f573a3c1040da67bc582800428.jpg\\\",\\\"img_width\\\":6688,\\\"img_height\\\":3762,\\\"img_size\\\":3210},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/09fde4601e28cbce478ba3b7c283acc7b938bc01.jpg\\\",\\\"img_width\\\":1280,\\\"img_height\\\":720,\\\"img_size\\\":103},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/2255180a11ed58f0d6468caa1c49c654ae0cddeb.jpg\\\",\\\"img_width\\\":1280,\\\"img_height\\\":720,\\\"img_size\\\":110},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/a9562058e7b731130e62721e51d07f6b706a35a7.jpg\\\",\\\"img_width\\\":1280,\\\"img_height\\\":1920,\\\"img_size\\\":218}],\\\"pictures_count\\\":9,\\\"upload_time\\\":1595851253,\\\"at_control\\\":\\\"[{\\\\\\\"data\\\\\\\":\\\\\\\"5\\\\\\\",\\\\\\\"length\\\\\\\":0,\\\\\\\"location\\\\\\\":0,\\\\\\\"type\\\\\\\":2}]\\\",\\\"reply\\\":1453,\\\"settings\\\":{\\\"copy_forbidden\\\":0},\\\"is_fav\\\":0},\\\"user\\\":{\\\"uid\\\":233114659,\\\"head_url\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/face\\\\\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\\\",\\\"name\\\":\\\"\\\\u78a7\\\\u84dd\\\\u822a\\\\u7ebf\\\",\\\"vip\\\":{\\\"vipType\\\":1,\\\"vipDueDate\\\":1596470400000,\\\"dueRemark\\\":\\\"\\\",\\\"accessStatus\\\":0,\\\"vipStatus\\\":1,\\\"vipStatusWarn\\\":\\\"\\\",\\\"themeType\\\":0,\\\"label\\\":{\\\"path\\\":\\\"\\\"}}}}\", \"origin_extension\": { \"lott\": \"{\\\"lottery_id\\\":48260}\" }, \"origin_extend_json\": \"{\\\"ctrl\\\":[{\\\"data\\\":\\\"5\\\",\\\"length\\\":0,\\\"location\\\":0,\\\"type\\\":2}],\\\"from\\\":{\\\"emoji_type\\\":1,\\\"from\\\":\\\"create.dynamic.web\\\",\\\"verify\\\":{\\\"cc\\\":{\\\"vf\\\":1}}},\\\"like_icon\\\":{\\\"action\\\":\\\"\\\",\\\"action_url\\\":\\\"\\\",\\\"end\\\":\\\"\\\",\\\"end_url\\\":\\\"\\\",\\\"start\\\":\\\"\\\",\\\"start_url\\\":\\\"\\\"},\\\"lott\\\":{\\\"lottery_id\\\":48260},\\\"topic\\\":{\\\"is_attach_topic\\\":1}}\", \"origin_user\": { \"info\": { \"uid\": 233114659, \"uname\": \"碧蓝航线\", \"face\": \"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\" }, \"card\": { \"official_verify\": { \"type\": 1, \"desc\": \"碧蓝航线官方账号\" } }, \"vip\": { \"vipType\": 1, \"vipDueDate\": 1596470400000, \"dueRemark\": \"\", \"accessStatus\": 0, \"vipStatus\": 1, \"vipStatusWarn\": \"\", \"themeType\": 0, \"label\": { \"path\": \"\" } }, \"pendant\": { \"pid\": 1987, \"name\": \"碧蓝航线2020\", \"image\": \"https:\\/\\/i1.hdslb.com\\/bfs\\/garb\\/item\\/fe1267f786bf69f1471aff715f8d38ec0e486df5.png\", \"expire\": 0, \"image_enhance\": \"https:\\/\\/i1.hdslb.com\\/bfs\\/garb\\/item\\/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp\" }, \"rank\": \"10000\", \"sign\": \"今天有没有被指挥官偷瞄呢(:3_ヽ)_\", \"level_info\": { \"current_level\": 6, \"current_min\": 0, \"current_exp\": 0, \"next_exp\": \"0\" } } }",
        "extend_json": "{\"ctrl\":[{\"data\":\"94872570\",\"length\":4,\"location\":2,\"type\":1},{\"data\":\"107178682\",\"length\":9,\"location\":7,\"type\":1},{\"data\":\"97590861\",\"length\":7,\"location\":17,\"type\":1}],\"from\":{\"from\":\"create.lottery\",\"verify\":{\"cc\":{\"nv\":1},\"sw\":{\"nv\":1}}},\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"}}",
        "extra": {
          "is_space_top": 0
        },
        "display": {
          "origin": {
            "topic_info": {
              "topic_details": [
                {
                  "topic_id": 2908447,
                  "topic_name": "碧蓝航线",
                  "is_activity": 0,
                  "topic_link": ""
                },
                {
                  "topic_id": 12637783,
                  "topic_name": "CP26",
                  "is_activity": 0,
                  "topic_link": ""
                }
              ]
            },
            "bottom_info": {
              "bottom_details": [
                {
                  "content": "碧蓝航线",
                  "jump_url": "bilibili://game_center/detail?id=97&sourceFrom=179",
                  "bottom_type": 2
                }
              ]
            },
            "relation": {
              "status": 1,
              "is_follow": 0,
              "is_followed": 0
            },
            "tags": [
              {
                "tag_type": 2,
                "sub_type": 2,
                "icon": "https://i0.hdslb.com/bfs/album/e8613d8debe7fd70737fc5ce59b543e89b0cce31.png",
                "text": "碧蓝航线",
                "link": "bilibili://game_center/detail?id=97&sourceFrom=179"
              }
            ]
          },
          "relation": {
            "status": 1,
            "is_follow": 0,
            "is_followed": 0
          }
        }
      },
      {
        "desc": {
          "uid": 233114659,
          "type": 8,
          "rid": 201556953,
          "acl": 0,
          "view": 354394,
          "repost": 22,
          "like": 5671,
          "is_liked": 0,
          "dynamic_id": 418065339140117300,
          "timestamp": 1596176822,
          "pre_dy_id": 0,
          "orig_dy_id": 0,
          "orig_type": 0,
          "user_profile": {
            "info": {
              "uid": 233114659,
              "uname": "碧蓝航线",
              "face": "https://i0.hdslb.com/bfs/face/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg"
            },
            "card": {
              "official_verify": {
                "type": 1,
                "desc": "碧蓝航线官方账号"
              }
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1596470400000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": ""
              }
            },
            "pendant": {
              "pid": 1987,
              "name": "碧蓝航线2020",
              "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
              "expire": 0,
              "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
            },
            "decorate_card": {
              "mid": 233114659,
              "id": 1970,
              "card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "card_type": 2,
              "name": "碧蓝航线2020粉丝专属",
              "expire_time": 0,
              "card_type_name": "免费",
              "uid": 233114659,
              "item_id": 1970,
              "item_type": 3,
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1988?navhide=1&mid=233114659&from=dynamic",
              "fan": {
                "is_fan": 1,
                "number": 1,
                "color": "#498de1",
                "num_desc": "000001"
              },
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png"
            },
            "rank": "10000",
            "sign": "今天有没有被指挥官偷瞄呢(:3_ヽ)_",
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": "0"
            }
          },
          "uid_type": 1,
          "stype": 1,
          "r_type": 1,
          "inner_id": 0,
          "status": 1,
          "dynamic_id_str": "418065339140117341",
          "pre_dy_id_str": "0",
          "orig_dy_id_str": "0",
          "rid_str": "201556953",
          "bvid": "BV1eh411Z7jh"
        },
        "card": "{\"aid\":201556953,\"attribute\":8405331,\"attribute_v2\":2,\"cid\":218693950,\"comment_jump_url\":\"bilibili:\\/\\/video\\/201556953\\/?page=1&player_preload=null&player_width=1920&player_height=1080&player_rotate=0\",\"copyright\":1,\"ctime\":1596176822,\"desc\":\"非公开视频\\n#碧蓝航线#\\n⚠️接下来——套娃警告！⚠️\\n一直蒙在神秘面纱下的【逸仙套娃】终于要首次露面了！快与萨拉酱一起360度了解一下我们的套娃吧！ (๑•̀ㅂ•́)و✧ \\nPS：三周年抽奖的 【逸仙套娃】已经陆续发货，正在快马加鞭向指挥官们赶过去！还请指挥官注意查收哦ヾ(✿ﾟ▽ﾟ)ノ\",\"dimension\":{\"height\":1080,\"rotate\":0,\"width\":1920},\"duration\":11,\"dynamic\":\"#碧蓝航线#\\n⚠️接下来——套娃警告！⚠️\\n一直蒙在神秘面纱下的【逸仙套娃】终于要首次露面了！快与萨拉酱一起360度了解一下我们的套娃吧！ (๑•̀ㅂ•́)و✧ \\nPS：三周年抽奖的 【逸仙套娃】已经陆续发货，正在快马加鞭向指挥官们赶过去！还请指挥官注意查收哦ヾ(✿ﾟ▽ﾟ)ノ\",\"jump_url\":\"bilibili:\\/\\/video\\/201556953\\/?page=1&player_preload=null&player_width=1920&player_height=1080&player_rotate=0\",\"owner\":{\"face\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\",\"mid\":233114659,\"name\":\"碧蓝航线\"},\"pic\":\"https:\\/\\/i1.hdslb.com\\/bfs\\/archive\\/38552de741be5863615237ad05fb0d68239ca132.jpg\",\"player_info\":null,\"pubdate\":1596176822,\"rights\":{\"autoplay\":1,\"bp\":0,\"download\":0,\"elec\":0,\"hd5\":1,\"is_cooperation\":0,\"movie\":0,\"no_background\":0,\"no_reprint\":0,\"pay\":0,\"ugc_pay\":0,\"ugc_pay_preview\":0},\"stat\":{\"aid\":201556953,\"coin\":165,\"danmaku\":19,\"dislike\":0,\"favorite\":129,\"his_rank\":0,\"like\":5671,\"now_rank\":0,\"reply\":288,\"share\":90,\"view\":47514},\"state\":0,\"tid\":21,\"title\":\"#碧蓝航线#⚠️接下来——套娃警告！⚠\",\"tname\":\"日常\",\"videos\":1}",
        "extend_json": "{\"from\":{\"emoji_type\":1,\"from\":\"dynamic\"},\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"},\"topic\":{\"is_attach_topic\":1}}",
        "extra": {
          "is_space_top": 0
        },
        "display": {
          "topic_info": {
            "topic_details": [
              {
                "topic_id": 2908447,
                "topic_name": "碧蓝航线",
                "is_activity": 0,
                "topic_link": ""
              }
            ]
          },
          "bottom_info": {
            "bottom_details": [
              {
                "content": "碧蓝航线",
                "jump_url": "bilibili://game_center/detail?id=97&sourceFrom=179",
                "bottom_type": 2
              }
            ]
          },
          "usr_action_txt": "发布了动态",
          "relation": {
            "status": 1,
            "is_follow": 0,
            "is_followed": 0
          },
          "tags": [
            {
              "tag_type": 2,
              "sub_type": 2,
              "icon": "https://i0.hdslb.com/bfs/album/e8613d8debe7fd70737fc5ce59b543e89b0cce31.png",
              "text": "碧蓝航线",
              "link": "bilibili://game_center/detail?id=97&sourceFrom=179"
            }
          ]
        }
      },
      {
        "desc": {
          "uid": 233114659,
          "type": 2,
          "rid": 84005782,
          "acl": 0,
          "view": 598734,
          "repost": 27,
          "like": 8416,
          "is_liked": 0,
          "dynamic_id": 416960609127880450,
          "timestamp": 1595919607,
          "pre_dy_id": 0,
          "orig_dy_id": 0,
          "orig_type": 0,
          "user_profile": {
            "info": {
              "uid": 233114659,
              "uname": "碧蓝航线",
              "face": "https://i0.hdslb.com/bfs/face/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg"
            },
            "card": {
              "official_verify": {
                "type": 1,
                "desc": "碧蓝航线官方账号"
              }
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1596470400000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": ""
              }
            },
            "pendant": {
              "pid": 1987,
              "name": "碧蓝航线2020",
              "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
              "expire": 0,
              "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
            },
            "decorate_card": {
              "mid": 233114659,
              "id": 1970,
              "card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "card_type": 2,
              "name": "碧蓝航线2020粉丝专属",
              "expire_time": 0,
              "card_type_name": "免费",
              "uid": 233114659,
              "item_id": 1970,
              "item_type": 3,
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1988?navhide=1&mid=233114659&from=dynamic",
              "fan": {
                "is_fan": 1,
                "number": 1,
                "color": "#498de1",
                "num_desc": "000001"
              },
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png"
            },
            "rank": "10000",
            "sign": "今天有没有被指挥官偷瞄呢(:3_ヽ)_",
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": "0"
            }
          },
          "uid_type": 1,
          "stype": 0,
          "r_type": 1,
          "inner_id": 0,
          "status": 1,
          "dynamic_id_str": "416960609127880431",
          "pre_dy_id_str": "0",
          "orig_dy_id_str": "0",
          "rid_str": "84005782"
        },
        "card": "{\"item\":{\"id\":84005782,\"title\":\"\",\"description\":\"#\\u78a7\\u84dd\\u822a\\u7ebf# \\n\\u6e2f\\u533a\\u65e9\\u4e0a\\u8fd8\\u98ce\\u548c\\u65e5\\u4e3d\\uff0c\\u5c31\\u5728\\u521a\\u521a\\u7535\\u95ea\\u96f7\\u9e23\\uff0c\\u4e0b\\u8d77\\u4e86\\u4e00\\u573a\\u66b4\\u96e8\\u2614 \\n\\u6307\\u6325\\u5b98\\u4eec\\u51fa\\u884c\\u8981\\u6ce8\\u610f\\u5929\\u6c14\\u60c5\\u51b5\\u54e6\\uff01\\n\\u4e0b\\u96e8\\u7684\\u65f6\\u5019\\uff0c\\u4e5f\\u8bf7\\u6307\\u6325\\u5b98\\u4eec\\u6ce8\\u610f\\u5b89\\u5168\\u3002\\u4e0d\\u8981\\u5728\\u6d77\\u8fb9\\ud83c\\udf0a \\u6446pose\\uff0c\\u66f4\\u4e0d\\u8981\\u5728\\u6d77\\u8fb9\\u4e3e\\u5251\\uff08\\u907f\\u96f7\\u9488\\uff09\\u54e6~~ <(*\\uffe3\\u25bd\\uffe3*)\\/ \",\"category\":\"daily\",\"role\":[],\"source\":[],\"pictures\":[{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/f9f34d7e20c2b8ffb4e6a6c8e09f49b8fb7cc119.png\",\"img_width\":800,\"img_height\":804,\"img_size\":1296}],\"pictures_count\":1,\"upload_time\":1595919607,\"at_control\":\"\",\"reply\":918,\"settings\":{\"copy_forbidden\":0},\"is_fav\":0},\"user\":{\"uid\":233114659,\"head_url\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\",\"name\":\"\\u78a7\\u84dd\\u822a\\u7ebf\",\"vip\":{\"vipType\":1,\"vipDueDate\":1596470400000,\"dueRemark\":\"\",\"accessStatus\":0,\"vipStatus\":1,\"vipStatusWarn\":\"\",\"themeType\":0,\"label\":{\"path\":\"\"}}}}",
        "extend_json": "{\"from\":{\"emoji_type\":1,\"from\":\"timer.publish\"},\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"},\"topic\":{\"is_attach_topic\":1}}",
        "extra": {
          "is_space_top": 0
        },
        "display": {
          "topic_info": {
            "topic_details": [
              {
                "topic_id": 2908447,
                "topic_name": "碧蓝航线",
                "is_activity": 0,
                "topic_link": ""
              }
            ]
          },
          "bottom_info": {
            "bottom_details": [
              {
                "content": "碧蓝航线",
                "jump_url": "bilibili://game_center/detail?id=97&sourceFrom=179",
                "bottom_type": 2
              }
            ]
          },
          "relation": {
            "status": 1,
            "is_follow": 0,
            "is_followed": 0
          },
          "tags": [
            {
              "tag_type": 2,
              "sub_type": 2,
              "icon": "https://i0.hdslb.com/bfs/album/e8613d8debe7fd70737fc5ce59b543e89b0cce31.png",
              "text": "碧蓝航线",
              "link": "bilibili://game_center/detail?id=97&sourceFrom=179"
            }
          ]
        }
      },
      {
        "desc": {
          "uid": 233114659,
          "type": 2,
          "rid": 83981478,
          "acl": 0,
          "view": 692632,
          "repost": 55,
          "like": 6187,
          "is_liked": 0,
          "dynamic_id": 416919089678816600,
          "timestamp": 1595909940,
          "pre_dy_id": 0,
          "orig_dy_id": 0,
          "orig_type": 0,
          "user_profile": {
            "info": {
              "uid": 233114659,
              "uname": "碧蓝航线",
              "face": "https://i0.hdslb.com/bfs/face/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg"
            },
            "card": {
              "official_verify": {
                "type": 1,
                "desc": "碧蓝航线官方账号"
              }
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1596470400000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": ""
              }
            },
            "pendant": {
              "pid": 1987,
              "name": "碧蓝航线2020",
              "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
              "expire": 0,
              "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
            },
            "decorate_card": {
              "mid": 233114659,
              "id": 1970,
              "card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "card_type": 2,
              "name": "碧蓝航线2020粉丝专属",
              "expire_time": 0,
              "card_type_name": "免费",
              "uid": 233114659,
              "item_id": 1970,
              "item_type": 3,
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1988?navhide=1&mid=233114659&from=dynamic",
              "fan": {
                "is_fan": 1,
                "number": 1,
                "color": "#498de1",
                "num_desc": "000001"
              },
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png"
            },
            "rank": "10000",
            "sign": "今天有没有被指挥官偷瞄呢(:3_ヽ)_",
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": "0"
            }
          },
          "uid_type": 1,
          "stype": 0,
          "r_type": 1,
          "inner_id": 0,
          "status": 1,
          "dynamic_id_str": "416919089678816581",
          "pre_dy_id_str": "0",
          "orig_dy_id_str": "0",
          "rid_str": "83981478"
        },
        "card": "{\"item\":{\"id\":83981478,\"title\":\"\",\"description\":\"#\\u78a7\\u84dd\\u822a\\u7ebf# #ChinaJoy#  \\n2020ChinaJoy\\u5373\\u5c06\\u5f00\\u542f\\uff0c\\u65b0\\u9c9c\\u51fa\\u7089\\u7684\\u53c2\\u5c55\\u6307\\u5357\\u6765\\u5566\\uff01 \\n\\n\\u8428\\u62c9\\u9171\\u5df2\\u7ecf\\u5907\\u597d\\u4e86\\u5168\\u65b0\\u7684\\u798f\\u5229\\u5468\\u8fb9\\uff0c\\u7b49\\u5f85\\u5927\\u5bb6\\u524d\\u5f80\\u73b0\\u573a\\u9886\\u53d6\\u5566~|\\u2022\\u0301 \\u2083\\u2022\\u0300)\\u256d\\u10e6 \\n\\u6307\\u6325\\u5b98\\u4eec\\u5173\\u5fc3\\u7684\\u3010\\u9038\\u4ed9\\u5957\\u5a03\\u3011\\u4e5f\\u5df2\\u5168\\u90e8\\u5236\\u4f5c\\u5b8c\\u6210\\uff0c\\u5e76\\u5c06\\u4e8e\\u8fd1\\u671f\\u8d77\\u9646\\u7eed\\u5bc4\\u7ed9\\u83b7\\u5956\\u7684\\u6307\\u6325\\u5b98\\uff01\\nPS\\uff1a\\u3010\\u9038\\u4ed9\\u5957\\u5a03\\u3011\\u4e5f\\u5c06\\u6709\\u673a\\u4f1a\\u5728\\u5c55\\u53f0\\u53ca\\u821e\\u53f0\\u6d3b\\u52a8\\u4e2d\\u83b7\\u5f97\\uff013\\u5468\\u5e74\\u671f\\u95f4\\u9519\\u8fc7\\u3010\\u9038\\u4ed9\\u5957\\u5a03\\u3011\\u7684\\u6307\\u6325\\u5b98\\uff0c\\u8fd9\\u6b21\\u5343\\u4e07\\u4e0d\\u8981\\u9519\\u8fc7\\uff01\\u30fe(\\u25cd\\u00b0\\u2207\\u00b0\\u25cd)\\uff89\\uff9e\\nPPS\\uff1a\\u7279\\u6b8a\\u65f6\\u671f\\uff0c\\u6307\\u6325\\u5b98\\u4eec\\u51fa\\u884c\\u65f6\\u8bb0\\u5f97\\u5e26\\u597d\\u53e3\\u7f69\\uff0c\\u505a\\u597d\\u4e2a\\u4eba\\u9632\\u62a4\\u54e6\\uff01\\n\\n\\u3010\\u65f6\\u95f4\\u3011\\uff1a7\\u670831\\u65e5-8\\u67083\\u65e5\\n\\u3010\\u5730\\u5740\\u3011\\uff1a\\u65b0\\u56fd\\u9645\\u535a\\u89c8\\u4e2d\\u5fc3\\uff08\\u4e0a\\u6d77\\u5e02\\u6d66\\u4e1c\\u9f99\\u9633\\u8def2345\\u53f7\\uff09\\n\\u3010\\u5c55\\u4f4d\\u53f7\\u3011\\uff1aN5-02 \",\"category\":\"daily\",\"role\":[],\"source\":[],\"pictures\":[{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/15ce5235acb98e040830f4e03a161309d37f0f55.jpg\",\"img_width\":750,\"img_height\":3611,\"img_size\":413}],\"pictures_count\":1,\"upload_time\":1595909940,\"at_control\":\"\",\"reply\":425,\"settings\":{\"copy_forbidden\":0},\"is_fav\":0},\"user\":{\"uid\":233114659,\"head_url\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\",\"name\":\"\\u78a7\\u84dd\\u822a\\u7ebf\",\"vip\":{\"vipType\":1,\"vipDueDate\":1596470400000,\"dueRemark\":\"\",\"accessStatus\":0,\"vipStatus\":1,\"vipStatusWarn\":\"\",\"themeType\":0,\"label\":{\"path\":\"\"}}}}",
        "extend_json": "{\"from\":{\"emoji_type\":1,\"from\":\"create.dynamic.web\",\"verify\":{\"cc\":{\"nv\":1}}},\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"},\"topic\":{\"is_attach_topic\":1}}",
        "extra": {
          "is_space_top": 0
        },
        "activity_infos": {
          "details": [
            {
              "type": 1,
              "detail": "{\"is_show\":1,\"topic_id\":2538844,\"topic_link\":\"bilibili:\\/\\/pegasus\\/channel\\/2538844?type=topic\",\"topic_name\":\"ChinaJoy\"}"
            }
          ]
        },
        "display": {
          "topic_info": {
            "topic_details": [
              {
                "topic_id": 2908447,
                "topic_name": "碧蓝航线",
                "is_activity": 0,
                "topic_link": ""
              },
              {
                "topic_id": 2538844,
                "topic_name": "ChinaJoy",
                "is_activity": 1,
                "topic_link": "https://game.bilibili.com/2020ChinaJoy/"
              },
              {
                "topic_id": 56787,
                "topic_name": "CHINAJOY",
                "is_activity": 0,
                "topic_link": ""
              }
            ]
          },
          "bottom_info": {
            "bottom_details": [
              {
                "content": "碧蓝航线",
                "jump_url": "bilibili://game_center/detail?id=97&sourceFrom=179",
                "bottom_type": 2
              }
            ]
          },
          "relation": {
            "status": 1,
            "is_follow": 0,
            "is_followed": 0
          },
          "tags": [
            {
              "tag_type": 2,
              "sub_type": 2,
              "icon": "https://i0.hdslb.com/bfs/album/e8613d8debe7fd70737fc5ce59b543e89b0cce31.png",
              "text": "碧蓝航线",
              "link": "bilibili://game_center/detail?id=97&sourceFrom=179"
            }
          ]
        }
      },
      {
        "desc": {
          "uid": 233114659,
          "type": 2,
          "rid": 83888239,
          "acl": 1024,
          "view": 1452366,
          "repost": 19371,
          "like": 8897,
          "is_liked": 0,
          "dynamic_id": 416667030934331100,
          "timestamp": 1595851253,
          "pre_dy_id": 0,
          "orig_dy_id": 0,
          "orig_type": 0,
          "user_profile": {
            "info": {
              "uid": 233114659,
              "uname": "碧蓝航线",
              "face": "https://i0.hdslb.com/bfs/face/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg"
            },
            "card": {
              "official_verify": {
                "type": 1,
                "desc": "碧蓝航线官方账号"
              }
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1596470400000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": ""
              }
            },
            "pendant": {
              "pid": 1987,
              "name": "碧蓝航线2020",
              "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
              "expire": 0,
              "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
            },
            "decorate_card": {
              "mid": 233114659,
              "id": 1970,
              "card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "card_type": 2,
              "name": "碧蓝航线2020粉丝专属",
              "expire_time": 0,
              "card_type_name": "免费",
              "uid": 233114659,
              "item_id": 1970,
              "item_type": 3,
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1988?navhide=1&mid=233114659&from=dynamic",
              "fan": {
                "is_fan": 1,
                "number": 1,
                "color": "#498de1",
                "num_desc": "000001"
              },
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png"
            },
            "rank": "10000",
            "sign": "今天有没有被指挥官偷瞄呢(:3_ヽ)_",
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": "0"
            }
          },
          "uid_type": 1,
          "stype": 0,
          "r_type": 1,
          "inner_id": 0,
          "status": 1,
          "dynamic_id_str": "416667030934331062",
          "pre_dy_id_str": "0",
          "orig_dy_id_str": "0",
          "rid_str": "83888239"
        },
        "card": "{\"item\":{\"id\":83888239,\"title\":\"\",\"description\":\"\\u200b\\u4e92\\u52a8\\u62bd\\u5956 #\\u78a7\\u84dd\\u822a\\u7ebf# #CP26# \\n\\u672c\\u6b21\\u53c2\\u5c55\\u5706\\u6ee1\\u7ed3\\u675f\\u5566\\uff01\\u611f\\u8c22\\u6bcf\\u4e00\\u4f4d\\u524d\\u6765\\u53c2\\u5c55\\u7684\\u6307\\u6325\\u5b98~\\u03b5\\u0669(\\u0e51> \\u2083 <)\\u06f6\\u0417\\u8fd9\\u4e2a\\u5468\\u672b\\u56e0\\u4e3a\\u6307\\u6325\\u5b98\\u800c\\u53d8\\u5f97\\u975e\\u5e38\\u7cbe\\u5f69\\uff01\\u8428\\u62c9\\u9171\\u5df2\\u7ecf\\u5f00\\u59cb\\u671f\\u5f85\\u548c\\u6307\\u6325\\u5b98\\u7684\\u4e0b\\u4e00\\u6b21\\u4f1a\\u9762\\u5566\\uff01\\n\\u4e0b\\u9762\\uff0c\\u5c31\\u7531\\u8428\\u62c9\\u9171\\u4e3a\\u6307\\u6325\\u5b98\\u4eec\\u732e\\u4e0a\\u8fd9\\u6b21CP26\\u7684\\u7cbe\\u5f69\\u77ac\\u95f4\\u4ee5\\u53ca\\u6ee1\\u6ee1\\u7684\\u798f\\u5229\\uff01(\\u3063\\u2022\\u0300\\u03c9\\u2022\\u0301)\\u3063\\n \\u2193\\u2193\\u2193\\n\\u8f6c\\u53d1+\\u5173\\u6ce8\\u672c\\u535a\\uff0c\\u5c06\\u62bd\\u53d6\\uff1a\\n5\\u4f4d\\u6307\\u6325\\u5b98\\u83b7\\u5f97\\u300c\\u5c0f\\u52a0\\u52a0\\u5361\\u5957\\u300d\\u4e00\\u4efd\\uff01\\n5\\u4f4d\\u6307\\u6325\\u5b98\\u83b7\\u5f97\\u300c\\u5c0f\\u52a0\\u52a0\\u5e03\\u888b\\u300d+\\u300c\\u968f\\u673a\\u6b3e\\u6587\\u4ef6\\u5939\\u300d\\u4e00\\u4efd\\uff01\\n\\u4e8e7\\u670831\\u65e5\\u62bd\\u53d6 \",\"category\":\"daily\",\"role\":[],\"source\":[],\"pictures\":[{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/925a8b119396e41e10a4c27ee0e5d7adf88d7a70.jpg\",\"img_width\":1280,\"img_height\":853,\"img_size\":112},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/a1ef676e2a934b0f7219eede2087fc933e5794c4.jpg\",\"img_width\":1280,\"img_height\":853,\"img_size\":154},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/e7bc60d6dc8416ceb618a1b3c41875fbed30d03d.jpg\",\"img_width\":1280,\"img_height\":1920,\"img_size\":222},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/d952d8c0138e408572d724dd104ff302db1a39ca.jpg\",\"img_width\":4095,\"img_height\":6143,\"img_size\":3157},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/1a5eefdb3e55c1c56979764a121cbeb765a723ec.jpg\",\"img_width\":6688,\"img_height\":3762,\"img_size\":3155},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/964fc617e26d09f573a3c1040da67bc582800428.jpg\",\"img_width\":6688,\"img_height\":3762,\"img_size\":3210},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/09fde4601e28cbce478ba3b7c283acc7b938bc01.jpg\",\"img_width\":1280,\"img_height\":720,\"img_size\":103},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/2255180a11ed58f0d6468caa1c49c654ae0cddeb.jpg\",\"img_width\":1280,\"img_height\":720,\"img_size\":110},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/a9562058e7b731130e62721e51d07f6b706a35a7.jpg\",\"img_width\":1280,\"img_height\":1920,\"img_size\":218}],\"pictures_count\":9,\"upload_time\":1595851253,\"at_control\":\"[{\\\"data\\\":\\\"5\\\",\\\"length\\\":0,\\\"location\\\":0,\\\"type\\\":2}]\",\"reply\":1453,\"settings\":{\"copy_forbidden\":0},\"is_fav\":0},\"user\":{\"uid\":233114659,\"head_url\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\",\"name\":\"\\u78a7\\u84dd\\u822a\\u7ebf\",\"vip\":{\"vipType\":1,\"vipDueDate\":1596470400000,\"dueRemark\":\"\",\"accessStatus\":0,\"vipStatus\":1,\"vipStatusWarn\":\"\",\"themeType\":0,\"label\":{\"path\":\"\"}}}}",
        "extension": {
          "lott": "{\"lottery_id\":48260}"
        },
        "extend_json": "{\"ctrl\":[{\"data\":\"5\",\"length\":0,\"location\":0,\"type\":2}],\"from\":{\"emoji_type\":1,\"from\":\"create.dynamic.web\",\"verify\":{\"cc\":{\"vf\":1}}},\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"},\"lott\":{\"lottery_id\":48260},\"topic\":{\"is_attach_topic\":1}}",
        "extra": {
          "is_space_top": 0
        },
        "display": {
          "topic_info": {
            "topic_details": [
              {
                "topic_id": 2908447,
                "topic_name": "碧蓝航线",
                "is_activity": 0,
                "topic_link": ""
              },
              {
                "topic_id": 12637783,
                "topic_name": "CP26",
                "is_activity": 0,
                "topic_link": ""
              }
            ]
          },
          "bottom_info": {
            "bottom_details": [
              {
                "content": "碧蓝航线",
                "jump_url": "bilibili://game_center/detail?id=97&sourceFrom=179",
                "bottom_type": 2
              }
            ]
          },
          "relation": {
            "status": 1,
            "is_follow": 0,
            "is_followed": 0
          },
          "tags": [
            {
              "tag_type": 2,
              "sub_type": 2,
              "icon": "https://i0.hdslb.com/bfs/album/e8613d8debe7fd70737fc5ce59b543e89b0cce31.png",
              "text": "碧蓝航线",
              "link": "bilibili://game_center/detail?id=97&sourceFrom=179"
            }
          ]
        }
      },
      {
        "desc": {
          "uid": 233114659,
          "type": 1,
          "rid": 416543172663015040,
          "acl": 0,
          "view": 571792,
          "repost": 212,
          "comment": 368,
          "like": 4122,
          "is_liked": 0,
          "dynamic_id": 416543172660325400,
          "timestamp": 1595822415,
          "pre_dy_id": 415875425506125250,
          "orig_dy_id": 415875425506125250,
          "orig_type": 2,
          "user_profile": {
            "info": {
              "uid": 233114659,
              "uname": "碧蓝航线",
              "face": "https://i0.hdslb.com/bfs/face/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg"
            },
            "card": {
              "official_verify": {
                "type": 1,
                "desc": "碧蓝航线官方账号"
              }
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1596470400000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": ""
              }
            },
            "pendant": {
              "pid": 1987,
              "name": "碧蓝航线2020",
              "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
              "expire": 0,
              "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
            },
            "decorate_card": {
              "mid": 233114659,
              "id": 1970,
              "card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "card_type": 2,
              "name": "碧蓝航线2020粉丝专属",
              "expire_time": 0,
              "card_type_name": "免费",
              "uid": 233114659,
              "item_id": 1970,
              "item_type": 3,
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1988?navhide=1&mid=233114659&from=dynamic",
              "fan": {
                "is_fan": 1,
                "number": 1,
                "color": "#498de1",
                "num_desc": "000001"
              },
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png"
            },
            "rank": "10000",
            "sign": "今天有没有被指挥官偷瞄呢(:3_ヽ)_",
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": "0"
            }
          },
          "uid_type": 1,
          "stype": 0,
          "r_type": 1,
          "inner_id": 0,
          "status": 1,
          "dynamic_id_str": "416543172660325358",
          "pre_dy_id_str": "415875425506125270",
          "orig_dy_id_str": "415875425506125270",
          "rid_str": "416543172663015022",
          "origin": {
            "uid": 68559,
            "type": 2,
            "rid": 83514941,
            "acl": 1024,
            "view": 6033652,
            "repost": 12652,
            "like": 0,
            "dynamic_id": 415875425506125250,
            "timestamp": 1595666943,
            "pre_dy_id": 0,
            "orig_dy_id": 0,
            "uid_type": 1,
            "stype": 0,
            "r_type": 1,
            "inner_id": 0,
            "status": 1,
            "dynamic_id_str": "415875425506125270",
            "pre_dy_id_str": "0",
            "orig_dy_id_str": "0",
            "rid_str": "83514941"
          }
        },
        "card": "{ \"user\": { \"uid\": 233114659, \"uname\": \"碧蓝航线\", \"face\": \"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\" }, \"item\": { \"rp_id\": 416543172663015022, \"uid\": 233114659, \"content\": \"#ChinaJoy# 万一中奖了呢？[tv_调皮][tv_调皮]\", \"orig_dy_id\": 415875425506125270, \"pre_dy_id\": 415875425506125270, \"timestamp\": 1595822415, \"reply\": 368, \"orig_type\": 2 }, \"origin\": \"{\\\"item\\\":{\\\"id\\\":83514941,\\\"title\\\":\\\"\\\",\\\"description\\\":\\\"\\\\u200d#ChinaJoy# \\\\u4e0b\\\\u5468\\\\u5c31\\\\u8981\\\\u8fce\\\\u6765ChinaJoy2020\\\\u5566\\\\uff01\\\\u6765\\\\u770b\\\\u770bB\\\\u7ad9\\\\u5c55\\\\u4f4d\\\\u4e3a\\\\u4f60\\\\u51c6\\\\u5907\\\\u7684\\\\u201c\\\\u65b0\\\\u526f\\\\u672c\\\\u201d\\\\u5427[tv_\\\\u601d\\\\u8003] \\\\u56f4\\\\u89c2CJ\\\\u821e\\\\u53f0\\\\u76f4\\\\u64ad\\\\u7684\\\\u5c0f\\\\u4f19\\\\u4f34\\\\u540c\\\\u6837\\\\u4f1a\\\\u6536\\\\u5230\\\\u5c0f\\\\u7535\\\\u89c6\\\\u51c6\\\\u5907\\\\u7684\\\\u60ca\\\\u559c\\\\uff0c\\\\u66f4\\\\u591aCJ\\\\u9650\\\\u5b9a\\\\u5956\\\\u54c1\\\\u6233\\\\uff1ahttps:\\\\\\/\\\\\\/game.bilibili.com\\\\\\/2020ChinaJoy\\\\\\/  \\\\u5173\\\\u6ce8\\\\u54d4\\\\u54e9\\\\u54d4\\\\u54e9\\\\u5a18\\\\u5e76\\\\u8f6c\\\\u53d1\\\\u672c\\\\u6761\\\\u52a8\\\\u6001\\\\uff0c\\\\u8fd8\\\\u6709\\\\u673a\\\\u4f1a\\\\u83b7\\\\u5f97\\\\u4e00\\\\u52a0OnePlus8 Pro\\\\u624b\\\\u673a(\\\\u62bd\\\\u4e24\\\\u540d)\\\\uff5e @\\\\u54d4\\\\u54e9\\\\u54d4\\\\u54e9\\\\u6e38\\\\u620f\\\\u4e2d\\\\u5fc3 @\\\\u54d4\\\\u54e9\\\\u54d4\\\\u54e9\\\\u5f39\\\\u5e55\\\\u7f51 \\\\u5feb\\\\u6765\\\\u7ec4\\\\u961f[2233\\\\u5a18_\\\\u5356\\\\u840c]\\\\u200b\\\\u4e92\\\\u52a8\\\\u62bd\\\\u5956 \\\",\\\"category\\\":\\\"daily\\\",\\\"role\\\":[],\\\"source\\\":[],\\\"pictures\\\":[{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/52022b506bb5e3e41ad4c94d648c2916da8e880f.jpg\\\",\\\"img_width\\\":750,\\\"img_height\\\":3900,\\\"img_size\\\":2681},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/1de7de93693a1b263ea775f6ecbbd06e617ce7c5.jpg\\\",\\\"img_width\\\":750,\\\"img_height\\\":2852,\\\"img_size\\\":1727},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/e81e3bc6478f34948198524edd66e7e217b0f969.jpg\\\",\\\"img_width\\\":750,\\\"img_height\\\":2063,\\\"img_size\\\":1405},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/a198c93caf06c81c23ab525367fd5c66b0eab007.jpg\\\",\\\"img_width\\\":750,\\\"img_height\\\":5601,\\\"img_size\\\":3325},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/463ef46cdf40e0ccb61633c0c914f27c33710410.jpg\\\",\\\"img_width\\\":800,\\\"img_height\\\":1500,\\\"img_size\\\":1249},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/41a1404c757fa22e67a6e771f0ee12321da9627c.jpg\\\",\\\"img_width\\\":750,\\\"img_height\\\":1875,\\\"img_size\\\":953},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/0f0968c40e499fdf8bce25ca6a29f011f1367119.jpg\\\",\\\"img_width\\\":750,\\\"img_height\\\":3600,\\\"img_size\\\":1481},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/914abbbe7154111c5f0851e6a07a00fe0ddbed48.jpg\\\",\\\"img_width\\\":750,\\\"img_height\\\":4251,\\\"img_size\\\":2635},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/1f41b4494c3268a78c39c79c1feabc53cc9ef1b1.jpg\\\",\\\"img_width\\\":750,\\\"img_height\\\":1061,\\\"img_size\\\":283}],\\\"pictures_count\\\":9,\\\"upload_time\\\":1595666943,\\\"at_control\\\":\\\"[{\\\\\\\"data\\\\\\\":\\\\\\\"5\\\\\\\",\\\\\\\"length\\\\\\\":0,\\\\\\\"location\\\\\\\":212,\\\\\\\"type\\\\\\\":2},{\\\\\\\"location\\\\\\\":179,\\\\\\\"type\\\\\\\":1,\\\\\\\"length\\\\\\\":10,\\\\\\\"data\\\\\\\":\\\\\\\"1328260\\\\\\\"},{\\\\\\\"location\\\\\\\":189,\\\\\\\"type\\\\\\\":1,\\\\\\\"length\\\\\\\":9,\\\\\\\"data\\\\\\\":\\\\\\\"8047632\\\\\\\"}]\\\",\\\"reply\\\":1280,\\\"settings\\\":{\\\"copy_forbidden\\\":0},\\\"is_fav\\\":0},\\\"user\\\":{\\\"uid\\\":68559,\\\"head_url\\\":\\\"https:\\\\\\/\\\\\\/i2.hdslb.com\\\\\\/bfs\\\\\\/face\\\\\\/46e4f399de1bacda912e8c2cc3d69af6ee2581f8.jpg\\\",\\\"name\\\":\\\"\\\\u54d4\\\\u54e9\\\\u54d4\\\\u54e9\\\\u5a18\\\",\\\"vip\\\":{\\\"vipType\\\":2,\\\"vipDueDate\\\":1622908800000,\\\"dueRemark\\\":\\\"\\\",\\\"accessStatus\\\":0,\\\"vipStatus\\\":1,\\\"vipStatusWarn\\\":\\\"\\\",\\\"themeType\\\":0,\\\"label\\\":{\\\"path\\\":\\\"\\\"}}}}\", \"origin_extension\": { \"lott\": \"{\\\"lottery_id\\\":48166}\" }, \"origin_extend_json\": \"{\\\"ctrl\\\":[{\\\"data\\\":\\\"5\\\",\\\"length\\\":0,\\\"location\\\":212,\\\"type\\\":2},{\\\"data\\\":\\\"1328260\\\",\\\"length\\\":10,\\\"location\\\":179,\\\"type\\\":1},{\\\"data\\\":\\\"8047632\\\",\\\"length\\\":9,\\\"location\\\":189,\\\"type\\\":1}],\\\"from\\\":{\\\"emoji_type\\\":1,\\\"from\\\":\\\"create.dynamic.web\\\",\\\"verify\\\":{\\\"cc\\\":{\\\"vf\\\":1},\\\"sw\\\":{\\\"nv\\\":1}}},\\\"like_icon\\\":{\\\"action\\\":\\\"\\\",\\\"action_url\\\":\\\"\\\",\\\"end\\\":\\\"\\\",\\\"end_url\\\":\\\"\\\",\\\"start\\\":\\\"\\\",\\\"start_url\\\":\\\"\\\"},\\\"lott\\\":{\\\"lottery_id\\\":48166},\\\"topic\\\":{\\\"is_attach_topic\\\":1}}\", \"origin_user\": { \"info\": { \"uid\": 68559, \"uname\": \"哔哩哔哩娘\", \"face\": \"https:\\/\\/i2.hdslb.com\\/bfs\\/face\\/46e4f399de1bacda912e8c2cc3d69af6ee2581f8.jpg\" }, \"card\": { \"official_verify\": { \"type\": 0, \"desc\": \"哔哩哔哩站娘22和33\" } }, \"vip\": { \"vipType\": 2, \"vipDueDate\": 1622908800000, \"dueRemark\": \"\", \"accessStatus\": 0, \"vipStatus\": 1, \"vipStatusWarn\": \"\", \"themeType\": 0, \"label\": { \"path\": \"\" } }, \"pendant\": { \"pid\": 0, \"name\": \"\", \"image\": \"\", \"expire\": 0, \"image_enhance\": \"\" }, \"rank\": \"10000\", \"sign\": \"哔哩哔哩站娘22和33\", \"level_info\": { \"current_level\": 6, \"current_min\": 0, \"current_exp\": 0, \"next_exp\": \"0\" } }, \"activity_infos\": { \"details\": [ { \"type\": 1, \"detail\": \"{\\\"is_show\\\":1,\\\"topic_id\\\":2538844,\\\"topic_link\\\":\\\"bilibili:\\\\\\/\\\\\\/pegasus\\\\\\/channel\\\\\\/2538844?type=topic\\\",\\\"topic_name\\\":\\\"ChinaJoy\\\"}\" } ] } }",
        "extend_json": "{\"from\":{\"emoji_type\":1,\"verify\":{\"cc\":{\"nv\":1}}},\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"},\"topic\":{\"is_attach_topic\":1}}",
        "extra": {
          "is_space_top": 0
        },
        "display": {
          "topic_info": {
            "topic_details": [
              {
                "topic_id": 2538844,
                "topic_name": "ChinaJoy",
                "is_activity": 1,
                "topic_link": "https://game.bilibili.com/2020ChinaJoy/"
              },
              {
                "topic_id": 56787,
                "topic_name": "CHINAJOY",
                "is_activity": 0,
                "topic_link": ""
              }
            ]
          },
          "origin": {
            "topic_info": {
              "topic_details": [
                {
                  "topic_id": 2538844,
                  "topic_name": "ChinaJoy",
                  "is_activity": 1,
                  "topic_link": "https://game.bilibili.com/2020ChinaJoy/"
                },
                {
                  "topic_id": 56787,
                  "topic_name": "CHINAJOY",
                  "is_activity": 0,
                  "topic_link": ""
                }
              ]
            },
            "emoji_info": {
              "emoji_details": [
                {
                  "emoji_name": "[2233娘_卖萌]",
                  "id": 140,
                  "package_id": 6,
                  "state": 0,
                  "type": 2,
                  "attr": 0,
                  "text": "[2233娘_卖萌]",
                  "url": "https://i0.hdslb.com/bfs/emote/ea893aa25355de95ab4f03c2dad3f0c58d0c159e.png",
                  "meta": {
                    "size": 2
                  },
                  "mtime": 1586316683
                },
                {
                  "emoji_name": "[tv_思考]",
                  "id": 44,
                  "package_id": 2,
                  "state": 0,
                  "type": 1,
                  "attr": 0,
                  "text": "[tv_思考]",
                  "url": "https://i0.hdslb.com/bfs/emote/90cf159733e558137ed20aa04d09964436f618a1.png",
                  "meta": {
                    "size": 1
                  },
                  "mtime": 1577952473
                }
              ]
            },
            "relation": {
              "status": 1,
              "is_follow": 0,
              "is_followed": 0
            },
            "tags": [
              {
                "tag_type": 3,
                "sub_type": 1,
                "icon": "https://i0.hdslb.com/bfs/album/4c1880a3e9d5fd2c72b339929a73a4b83d2bab93.png",
                "text": "ChinaJoy",
                "link": "bilibili://pegasus/channel/2538844?type=topic&topic_from=topic-card&name=ChinaJoy",
                "rid": 2538844
              }
            ]
          },
          "emoji_info": {
            "emoji_details": [
              {
                "emoji_name": "[tv_调皮]",
                "id": 51,
                "package_id": 2,
                "state": 0,
                "type": 1,
                "attr": 0,
                "text": "[tv_调皮]",
                "url": "https://i0.hdslb.com/bfs/emote/b9c41de8e82dd7a8515ae5e3cb63e898bf245186.png",
                "meta": {
                  "size": 1
                },
                "mtime": 1577952473
              }
            ]
          },
          "relation": {
            "status": 1,
            "is_follow": 0,
            "is_followed": 0
          }
        }
      },
      {
        "desc": {
          "uid": 233114659,
          "type": 2,
          "rid": 83622691,
          "acl": 0,
          "view": 640988,
          "repost": 19,
          "like": 6863,
          "is_liked": 0,
          "dynamic_id": 416148868897205000,
          "timestamp": 1595730609,
          "pre_dy_id": 0,
          "orig_dy_id": 0,
          "orig_type": 0,
          "user_profile": {
            "info": {
              "uid": 233114659,
              "uname": "碧蓝航线",
              "face": "https://i0.hdslb.com/bfs/face/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg"
            },
            "card": {
              "official_verify": {
                "type": 1,
                "desc": "碧蓝航线官方账号"
              }
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1596470400000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": ""
              }
            },
            "pendant": {
              "pid": 1987,
              "name": "碧蓝航线2020",
              "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
              "expire": 0,
              "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
            },
            "decorate_card": {
              "mid": 233114659,
              "id": 1970,
              "card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "card_type": 2,
              "name": "碧蓝航线2020粉丝专属",
              "expire_time": 0,
              "card_type_name": "免费",
              "uid": 233114659,
              "item_id": 1970,
              "item_type": 3,
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1988?navhide=1&mid=233114659&from=dynamic",
              "fan": {
                "is_fan": 1,
                "number": 1,
                "color": "#498de1",
                "num_desc": "000001"
              },
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png"
            },
            "rank": "10000",
            "sign": "今天有没有被指挥官偷瞄呢(:3_ヽ)_",
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": "0"
            }
          },
          "uid_type": 1,
          "stype": 0,
          "r_type": 1,
          "inner_id": 0,
          "status": 1,
          "dynamic_id_str": "416148868897205005",
          "pre_dy_id_str": "0",
          "orig_dy_id_str": "0",
          "rid_str": "83622691"
        },
        "card": "{\"item\":{\"id\":83622691,\"title\":\"\",\"description\":\"#\\u78a7\\u84dd\\u822a\\u7ebf# #CP26# \\n\\u6628\\u5929\\uff0c\\u78a7\\u84dd\\u822a\\u7ebf\\u5728CP26\\u7b2c\\u4e00\\u5929\\u7684\\u53c2\\u5c55\\u7ed3\\u675f\\u5566\\uff01\\u4e3a\\u6307\\u6325\\u5b98\\u4eec\\u9001\\u4e0a\\u65b0\\u9c9c\\u51fa\\u7089\\u7684\\u9996\\u65e5\\u73b0\\u573a\\u7167~ o(*\\u2267\\u25bd\\u2266)\\u30c4\\u975e\\u5e38\\u611f\\u8c22\\u708e\\u708e\\u590f\\u65e5\\u524d\\u6765\\u53c2\\u5c55\\u7684\\u6307\\u6325\\u5b98\\uff01\\n\\u6211\\u4eec\\u7b2c\\u4e8c\\u5929\\u7684\\u6d3b\\u52a8\\u4e5f\\u5f00\\u59cb\\u5566\\uff01\\u5750\\u6807\\u2192CPB16&CPB18\\uff0c\\u8d85\\u9177\\u70ab\\u821e\\u53f0\\u3001\\u8d85\\u597d\\u73a9\\u4e92\\u52a8\\u4ee5\\u53ca\\u8d85\\u591a\\u5468\\u8fb9\\u7b49\\u7740\\u6307\\u6325\\u5b98\\uff01\\n\\u671f\\u5f85\\u4e0e\\u6307\\u6325\\u5b98\\u89c1\\u9762~ (\\u0e51\\u2022\\u0300\\u3142\\u2022\\u0301)\\u0648\\u2727 \",\"category\":\"daily\",\"role\":[],\"source\":[],\"pictures\":[{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/3fb394881efd36491bdc99b34f50e0def9153627.jpg\",\"img_width\":1600,\"img_height\":1067,\"img_size\":1664},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/6b5e8c2e037575508af00760c0d1a0e9a4d00b8c.jpg\",\"img_width\":1598,\"img_height\":1067,\"img_size\":437},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/c0b7b1a96f0b4febe04509f5c34f39575d23f35d.jpg\",\"img_width\":1600,\"img_height\":1067,\"img_size\":1733},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/eacf0d8441ec39b851e2dd36205c89e6c9c2c16b.jpg\",\"img_width\":1599,\"img_height\":1067,\"img_size\":332},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/a4c7c93a772810ae885b0c485514acf319fe9f9f.jpg\",\"img_width\":1599,\"img_height\":1067,\"img_size\":461},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/f7c61b5604536e65b18d5a3c35034c7dc475d7c2.jpg\",\"img_width\":1600,\"img_height\":1067,\"img_size\":1223}],\"pictures_count\":6,\"upload_time\":1595730609,\"at_control\":\"\",\"reply\":434,\"settings\":{\"copy_forbidden\":0},\"is_fav\":0},\"user\":{\"uid\":233114659,\"head_url\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\",\"name\":\"\\u78a7\\u84dd\\u822a\\u7ebf\",\"vip\":{\"vipType\":1,\"vipDueDate\":1596470400000,\"dueRemark\":\"\",\"accessStatus\":0,\"vipStatus\":1,\"vipStatusWarn\":\"\",\"themeType\":0,\"label\":{\"path\":\"\"}}}}",
        "extend_json": "{\"from\":{\"emoji_type\":1,\"from\":\"timer.publish\"},\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"},\"topic\":{\"is_attach_topic\":1}}",
        "extra": {
          "is_space_top": 0
        },
        "display": {
          "topic_info": {
            "topic_details": [
              {
                "topic_id": 2908447,
                "topic_name": "碧蓝航线",
                "is_activity": 0,
                "topic_link": ""
              },
              {
                "topic_id": 12637783,
                "topic_name": "CP26",
                "is_activity": 0,
                "topic_link": ""
              }
            ]
          },
          "bottom_info": {
            "bottom_details": [
              {
                "content": "碧蓝航线",
                "jump_url": "bilibili://game_center/detail?id=97&sourceFrom=179",
                "bottom_type": 2
              }
            ]
          },
          "relation": {
            "status": 1,
            "is_follow": 0,
            "is_followed": 0
          },
          "tags": [
            {
              "tag_type": 2,
              "sub_type": 2,
              "icon": "https://i0.hdslb.com/bfs/album/e8613d8debe7fd70737fc5ce59b543e89b0cce31.png",
              "text": "碧蓝航线",
              "link": "bilibili://game_center/detail?id=97&sourceFrom=179"
            }
          ]
        }
      },
      {
        "desc": {
          "uid": 233114659,
          "type": 4,
          "rid": 415569864353677300,
          "acl": 0,
          "view": 714558,
          "repost": 26,
          "comment": 1391,
          "like": 7306,
          "is_liked": 0,
          "dynamic_id": 415569864354856450,
          "timestamp": 1595595799,
          "pre_dy_id": 0,
          "orig_dy_id": 0,
          "orig_type": 0,
          "user_profile": {
            "info": {
              "uid": 233114659,
              "uname": "碧蓝航线",
              "face": "https://i0.hdslb.com/bfs/face/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg"
            },
            "card": {
              "official_verify": {
                "type": 1,
                "desc": "碧蓝航线官方账号"
              }
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1596470400000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": ""
              }
            },
            "pendant": {
              "pid": 1987,
              "name": "碧蓝航线2020",
              "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
              "expire": 0,
              "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
            },
            "decorate_card": {
              "mid": 233114659,
              "id": 1970,
              "card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "card_type": 2,
              "name": "碧蓝航线2020粉丝专属",
              "expire_time": 0,
              "card_type_name": "免费",
              "uid": 233114659,
              "item_id": 1970,
              "item_type": 3,
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1988?navhide=1&mid=233114659&from=dynamic",
              "fan": {
                "is_fan": 1,
                "number": 1,
                "color": "#498de1",
                "num_desc": "000001"
              },
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png"
            },
            "rank": "10000",
            "sign": "今天有没有被指挥官偷瞄呢(:3_ヽ)_",
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": "0"
            }
          },
          "uid_type": 1,
          "stype": 0,
          "r_type": 1,
          "inner_id": 0,
          "status": 1,
          "dynamic_id_str": "415569864354856431",
          "pre_dy_id_str": "0",
          "orig_dy_id_str": "0",
          "rid_str": "415569864353677316"
        },
        "card": "{ \"user\": { \"uid\": 233114659, \"uname\": \"碧蓝航线\", \"face\": \"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\" }, \"item\": { \"rp_id\": 415569864353677316, \"uid\": 233114659, \"content\": \"7月24日的异常问题补偿：荣誉之冠x500 已发放至邮箱，还请指挥官注意查收。给各位指挥官带来了不便非常抱歉。 \", \"ctrl\": \"\", \"orig_dy_id\": 0, \"pre_dy_id\": 0, \"timestamp\": 1595595799, \"reply\": 1391 } }",
        "extend_json": "{\"from\":{\"emoji_type\":1,\"verify\":{\"cc\":{\"nv\":1}}},\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"}}",
        "extra": {
          "is_space_top": 0
        },
        "display": {
          "relation": {
            "status": 1,
            "is_follow": 0,
            "is_followed": 0
          }
        }
      },
      {
        "desc": {
          "uid": 233114659,
          "type": 4,
          "rid": 415529929750718850,
          "acl": 1024,
          "view": 572481,
          "repost": 11,
          "comment": 1171,
          "like": 4391,
          "is_liked": 0,
          "dynamic_id": 415529929745511600,
          "timestamp": 1595586501,
          "pre_dy_id": 0,
          "orig_dy_id": 0,
          "orig_type": 0,
          "user_profile": {
            "info": {
              "uid": 233114659,
              "uname": "碧蓝航线",
              "face": "https://i0.hdslb.com/bfs/face/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg"
            },
            "card": {
              "official_verify": {
                "type": 1,
                "desc": "碧蓝航线官方账号"
              }
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1596470400000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": ""
              }
            },
            "pendant": {
              "pid": 1987,
              "name": "碧蓝航线2020",
              "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
              "expire": 0,
              "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
            },
            "decorate_card": {
              "mid": 233114659,
              "id": 1970,
              "card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "card_type": 2,
              "name": "碧蓝航线2020粉丝专属",
              "expire_time": 0,
              "card_type_name": "免费",
              "uid": 233114659,
              "item_id": 1970,
              "item_type": 3,
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1988?navhide=1&mid=233114659&from=dynamic",
              "fan": {
                "is_fan": 1,
                "number": 1,
                "color": "#498de1",
                "num_desc": "000001"
              },
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png"
            },
            "rank": "10000",
            "sign": "今天有没有被指挥官偷瞄呢(:3_ヽ)_",
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": "0"
            }
          },
          "uid_type": 1,
          "stype": 0,
          "r_type": 1,
          "inner_id": 0,
          "status": 1,
          "dynamic_id_str": "415529929745511625",
          "pre_dy_id_str": "0",
          "orig_dy_id_str": "0",
          "rid_str": "415529929750718876"
        },
        "card": "{ \"user\": { \"uid\": 233114659, \"uname\": \"碧蓝航线\", \"face\": \"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\" }, \"item\": { \"rp_id\": 415529929750718876, \"uid\": 233114659, \"content\": \"各位亲爱的指挥官：\\n       司令部已于18:20进行在线更新修复了以下的问题（不需要停服维护，重新进入游戏后进行更新）：\\n\\n『涉及港区』\\niOS全港区、安卓全港区\\n\\n『改建内容』\\n1.修复了「永夜幻光」部分关卡无法进入战斗的问题；\\n\\nFrom 司令部\\n在这里联系我们↓↓↓\\n客服QQ公众号：800864530\\n电话专线：400-178-2233\\n \", \"ctrl\": \"\", \"orig_dy_id\": 0, \"pre_dy_id\": 0, \"timestamp\": 1595586501, \"reply\": 1171 } }",
        "extend_json": "{\"from\":{\"emoji_type\":1,\"verify\":{\"cc\":{\"nv\":1},\"sw\":{\"vf\":1}}},\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"}}",
        "extra": {
          "is_space_top": 0
        },
        "display": {
          "relation": {
            "status": 1,
            "is_follow": 0,
            "is_followed": 0
          }
        }
      },
      {
        "desc": {
          "uid": 233114659,
          "type": 1,
          "rid": 415501183536545700,
          "acl": 0,
          "view": 552516,
          "repost": 18,
          "comment": 797,
          "like": 4632,
          "is_liked": 0,
          "dynamic_id": 415501183532328100,
          "timestamp": 1595579808,
          "pre_dy_id": 415493856322269400,
          "orig_dy_id": 415493856322269400,
          "orig_type": 4,
          "user_profile": {
            "info": {
              "uid": 233114659,
              "uname": "碧蓝航线",
              "face": "https://i0.hdslb.com/bfs/face/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg"
            },
            "card": {
              "official_verify": {
                "type": 1,
                "desc": "碧蓝航线官方账号"
              }
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1596470400000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": ""
              }
            },
            "pendant": {
              "pid": 1987,
              "name": "碧蓝航线2020",
              "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
              "expire": 0,
              "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
            },
            "decorate_card": {
              "mid": 233114659,
              "id": 1970,
              "card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "card_type": 2,
              "name": "碧蓝航线2020粉丝专属",
              "expire_time": 0,
              "card_type_name": "免费",
              "uid": 233114659,
              "item_id": 1970,
              "item_type": 3,
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1988?navhide=1&mid=233114659&from=dynamic",
              "fan": {
                "is_fan": 1,
                "number": 1,
                "color": "#498de1",
                "num_desc": "000001"
              },
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png"
            },
            "rank": "10000",
            "sign": "今天有没有被指挥官偷瞄呢(:3_ヽ)_",
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": "0"
            }
          },
          "uid_type": 1,
          "stype": 0,
          "r_type": 1,
          "inner_id": 0,
          "status": 1,
          "dynamic_id_str": "415501183532328150",
          "pre_dy_id_str": "415493856322269363",
          "orig_dy_id_str": "415493856322269363",
          "rid_str": "415501183536545731",
          "origin": {
            "uid": 233114659,
            "type": 4,
            "rid": 415493856322307100,
            "acl": 1024,
            "view": 1062745,
            "repost": 35,
            "comment": 904,
            "like": 4973,
            "is_liked": 0,
            "dynamic_id": 415493856322269400,
            "timestamp": 1595578102,
            "pre_dy_id": 0,
            "orig_dy_id": 0,
            "user_profile": {
              "info": {
                "uid": 233114659,
                "uname": "碧蓝航线",
                "face": "https://i0.hdslb.com/bfs/face/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg"
              },
              "card": {
                "official_verify": {
                  "type": 1,
                  "desc": "碧蓝航线官方账号"
                }
              },
              "vip": {
                "vipType": 1,
                "vipDueDate": 1596470400000,
                "dueRemark": "",
                "accessStatus": 0,
                "vipStatus": 1,
                "vipStatusWarn": "",
                "themeType": 0,
                "label": {
                  "path": ""
                }
              },
              "pendant": {
                "pid": 1987,
                "name": "碧蓝航线2020",
                "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
                "expire": 0,
                "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
              },
              "decorate_card": {
                "mid": 233114659,
                "id": 1970,
                "card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
                "card_type": 2,
                "name": "碧蓝航线2020粉丝专属",
                "expire_time": 0,
                "card_type_name": "免费",
                "uid": 233114659,
                "item_id": 1970,
                "item_type": 3,
                "big_card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
                "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1988?navhide=1&mid=233114659&from=dynamic",
                "fan": {
                  "is_fan": 1,
                  "number": 1,
                  "color": "#498de1",
                  "num_desc": "000001"
                },
                "image_enhance": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png"
              },
              "rank": "10000",
              "sign": "今天有没有被指挥官偷瞄呢(:3_ヽ)_",
              "level_info": {
                "current_level": 6,
                "current_min": 0,
                "current_exp": 0,
                "next_exp": "0"
              }
            },
            "uid_type": 1,
            "stype": 0,
            "r_type": 1,
            "inner_id": 0,
            "status": 1,
            "dynamic_id_str": "415493856322269363",
            "pre_dy_id_str": "0",
            "orig_dy_id_str": "0",
            "rid_str": "415493856322307056"
          }
        },
        "card": "{ \"user\": { \"uid\": 233114659, \"uname\": \"碧蓝航线\", \"face\": \"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\" }, \"item\": { \"rp_id\": 415501183536545731, \"uid\": 233114659, \"content\": \"遇到此问题的指挥官可以暂时通过切换编队进入作战，给指挥官们造成了不便非常抱歉o(╥﹏╥)o\", \"orig_dy_id\": 415493856322269363, \"pre_dy_id\": 415493856322269363, \"timestamp\": 1595579808, \"reply\": 797, \"orig_type\": 4 }, \"origin\": \"{ \\\"user\\\": { \\\"uid\\\": 233114659, \\\"uname\\\": \\\"碧蓝航线\\\", \\\"face\\\": \\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/face\\\\\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\\\" }, \\\"item\\\": { \\\"rp_id\\\": 415493856322307056, \\\"uid\\\": 233114659, \\\"content\\\": \\\"各位亲爱的指挥官：\\\\n      司令部收到反馈，目前已知存在「永夜幻光」B3、D3关卡无法进入战斗的问题，司令部正在积极处理中，会尽快进行修复：\\\\n       在游戏过程中如果遇到任何问题可以通过以下方式联系司令部，感谢指挥官们一直以来的支持。\\\\n\\\\nFrom 司令部\\\\n客服QQ公众号：800864530\\\\n电话专线：400-178-223 \\\", \\\"ctrl\\\": \\\"\\\", \\\"orig_dy_id\\\": 0, \\\"pre_dy_id\\\": 0, \\\"timestamp\\\": 1595578102, \\\"reply\\\": 904 } }\", \"origin_extend_json\": \"{\\\"from\\\":{\\\"emoji_type\\\":1,\\\"verify\\\":{\\\"cc\\\":{\\\"nv\\\":1},\\\"sw\\\":{\\\"vf\\\":1}}},\\\"like_icon\\\":{\\\"action\\\":\\\"\\\",\\\"action_url\\\":\\\"\\\",\\\"end\\\":\\\"\\\",\\\"end_url\\\":\\\"\\\",\\\"start\\\":\\\"\\\",\\\"start_url\\\":\\\"\\\"}}\", \"origin_user\": { \"info\": { \"uid\": 233114659, \"uname\": \"碧蓝航线\", \"face\": \"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\" }, \"card\": { \"official_verify\": { \"type\": 1, \"desc\": \"碧蓝航线官方账号\" } }, \"vip\": { \"vipType\": 1, \"vipDueDate\": 1596470400000, \"dueRemark\": \"\", \"accessStatus\": 0, \"vipStatus\": 1, \"vipStatusWarn\": \"\", \"themeType\": 0, \"label\": { \"path\": \"\" } }, \"pendant\": { \"pid\": 1987, \"name\": \"碧蓝航线2020\", \"image\": \"https:\\/\\/i1.hdslb.com\\/bfs\\/garb\\/item\\/fe1267f786bf69f1471aff715f8d38ec0e486df5.png\", \"expire\": 0, \"image_enhance\": \"https:\\/\\/i1.hdslb.com\\/bfs\\/garb\\/item\\/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp\" }, \"rank\": \"10000\", \"sign\": \"今天有没有被指挥官偷瞄呢(:3_ヽ)_\", \"level_info\": { \"current_level\": 6, \"current_min\": 0, \"current_exp\": 0, \"next_exp\": \"0\" } } }",
        "extend_json": "{\"from\":{\"emoji_type\":1,\"verify\":{\"cc\":{\"nv\":1}}},\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"}}",
        "extra": {
          "is_space_top": 0
        },
        "display": {
          "origin": {
            "relation": {
              "status": 1,
              "is_follow": 0,
              "is_followed": 0
            }
          },
          "relation": {
            "status": 1,
            "is_follow": 0,
            "is_followed": 0
          }
        }
      },
      {
        "desc": {
          "uid": 233114659,
          "type": 4,
          "rid": 415493856322307100,
          "acl": 1024,
          "view": 1062745,
          "repost": 35,
          "comment": 904,
          "like": 4973,
          "is_liked": 0,
          "dynamic_id": 415493856322269400,
          "timestamp": 1595578102,
          "pre_dy_id": 0,
          "orig_dy_id": 0,
          "orig_type": 0,
          "user_profile": {
            "info": {
              "uid": 233114659,
              "uname": "碧蓝航线",
              "face": "https://i0.hdslb.com/bfs/face/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg"
            },
            "card": {
              "official_verify": {
                "type": 1,
                "desc": "碧蓝航线官方账号"
              }
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1596470400000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": ""
              }
            },
            "pendant": {
              "pid": 1987,
              "name": "碧蓝航线2020",
              "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
              "expire": 0,
              "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
            },
            "decorate_card": {
              "mid": 233114659,
              "id": 1970,
              "card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "card_type": 2,
              "name": "碧蓝航线2020粉丝专属",
              "expire_time": 0,
              "card_type_name": "免费",
              "uid": 233114659,
              "item_id": 1970,
              "item_type": 3,
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1988?navhide=1&mid=233114659&from=dynamic",
              "fan": {
                "is_fan": 1,
                "number": 1,
                "color": "#498de1",
                "num_desc": "000001"
              },
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png"
            },
            "rank": "10000",
            "sign": "今天有没有被指挥官偷瞄呢(:3_ヽ)_",
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": "0"
            }
          },
          "uid_type": 1,
          "stype": 0,
          "r_type": 1,
          "inner_id": 0,
          "status": 1,
          "dynamic_id_str": "415493856322269363",
          "pre_dy_id_str": "0",
          "orig_dy_id_str": "0",
          "rid_str": "415493856322307056"
        },
        "card": "{ \"user\": { \"uid\": 233114659, \"uname\": \"碧蓝航线\", \"face\": \"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\" }, \"item\": { \"rp_id\": 415493856322307056, \"uid\": 233114659, \"content\": \"各位亲爱的指挥官：\\n      司令部收到反馈，目前已知存在「永夜幻光」B3、D3关卡无法进入战斗的问题，司令部正在积极处理中，会尽快进行修复：\\n       在游戏过程中如果遇到任何问题可以通过以下方式联系司令部，感谢指挥官们一直以来的支持。\\n\\nFrom 司令部\\n客服QQ公众号：800864530\\n电话专线：400-178-223 \", \"ctrl\": \"\", \"orig_dy_id\": 0, \"pre_dy_id\": 0, \"timestamp\": 1595578102, \"reply\": 904 } }",
        "extend_json": "{\"from\":{\"emoji_type\":1,\"verify\":{\"cc\":{\"nv\":1},\"sw\":{\"vf\":1}}},\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"}}",
        "extra": {
          "is_space_top": 0
        },
        "display": {
          "relation": {
            "status": 1,
            "is_follow": 0,
            "is_followed": 0
          }
        }
      }
    ],
    "next_offset": 415493856322269400,
    "_gt_": 0
  }
}
```



## 投稿

<img src="/imgs/video_up.svg" width="100" height="100" />

### 查询用户投稿视频明细

> http://api.bilibili.com/x/space/arc/search

*请求方式：GET*

**url参数：**

| 参数名  | 类型 | 内容         | 必要性 | 备注                                                         |
| ------- | ---- | ------------ | ------ | ------------------------------------------------------------ |
| mid     | num  | 目标用户UID  | 必要   |                                                              |
| order   | str  | 排序方式     | 非必要 | 默认为pubdate<br />最新发布：pubdate<br />最多播放：click<br />最多收藏：stow |
| tid     | num  | 筛选目标分区 | 非必要 | 默认为0<br />0：不进行分区筛选<br />分区tID为所筛选的分区    |
| keyword | str  | 关键词筛选   | 非必要 | 用于使用关键词搜索该UP主视频稿件                             |
| pn      | num  | 页码         | 必要   |                                                              |
| ps      | num  | 每页项数     | 必要   |                                                              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-412：请求被拦截 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        |                 |
| data    | obj  | 信息本体 |                             |

`data`对象：

| 字段 | 类型 | 内容     | 备注 |
| ---- | ---- | -------- | ---- |
| list | obj  | 列表信息 |      |
| page | obj  | 页面信息 |      |

`data`中的`list`对象：

| 字段  | 类型   | 内容             | 备注 |
| ----- | ------ | ---------------- | ---- |
| tlist | obj    | 投稿视频分区索引 |      |
| vlist | array | 投稿视频列表     |      |

`list`中的`tlist`对象：

| 字段  | 类型 | 内容         | 备注                  |
| ----- | ---- | ------------ | --------------------- |
| {tID} | obj  | 该分区的详情 | 字段名为存在的分区tID |
| ……    | obj  | ……           | 向下扩展              |

`tlist`中的`{tID}`对象：

| 字段  | 类型 | 内容                 | 备注 |
| ----- | ---- | -------------------- | ---- |
| count | num  | 投稿至该分区的视频数 |      |
| name  | str  | 该分区名称           |      |
| tid   | num  | 该分区tID            |      |

`list`中的`vlist`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | obj  | 投稿视频1       |      |
| n    | obj  | 投稿视频（n+1） |      |
| ……   | obj  | ……              | ……   |

`list`中的`vlist`数组中的对象：

| 字段           | 类型 | 内容           | 备注                         |
| -------------- | ---- | -------------- | ---------------------------- |
| aid            | num  | 稿件avID       |                              |
| author         | str  | 视频UP主       | 不一定为目标用户（合作视频） |
| bvid           | str  | 稿件bvID       |                              |
| comment        | num  | 视频评论数     |                              |
| copyright      | str  | 空             | 作用尚不明确                 |
| created        | num  | 投稿时间       | 时间戳                       |
| description    | str  | 视频简介       |                              |
| hide_click     | bool | false          | 作用尚不明确                 |
| is_pay         | num  | 0              | 作用尚不明确                 |
| is_union_video | num  | 是否为合作视频 | 0：否<br />1：是             |
| length         | str  | 视频长度       | MM:SS                        |
| mid            | num  | 视频UP主UID    | 不一定为目标用户（合作视频） |
| pic            | str  | 视频封面       |                              |
| play           | num  | 视频播放次数   |                              |
| review         | num  | 0              | 作用尚不明确                 |
| subtitle       | str  | 空             | 作用尚不明确                 |
| title          | str  | 视频标题       |                              |
| typeid         | num  | 视频分区tID    |                              |
| video_review   | num  | 视频弹幕数     |                              |

`data`中的`page`对象：

| 字段  | 类型 | 内容       | 备注 |
| ----- | ---- | ---------- | ---- |
| count | num  | 总计稿件数 |      |
| pn    | num  | 当前页码   |      |
| ps    | num  | 每页项数   |      |

**示例：**

`pn`（页码）和`ps`（每页项数）只改变`vlist`中成员的多少与内容

以每页2项查询用户`UID=53456`的第1页投稿视频明细

```shell
curl -G 'http://api.bilibili.com/x/space/arc/search'\
--data-urlencode 'ps=2'\
--data-urlencode 'pn=1'
```

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"list": {
			"tlist": {
				"1": {
					"tid": 1,
					"count": 17,
					"name": "动画"
				},
				"160": {
					"tid": 160,
					"count": 43,
					"name": "生活"
				},
				"3": {
					"tid": 3,
					"count": 33,
					"name": "音乐"
				},
				"4": {
					"tid": 4,
					"count": 70,
					"name": "游戏"
				}
			},
			"vlist": [{
				"comment": 4626,
				"typeid": 17,
				"play": 954380,
				"pic": "//i0.hdslb.com/bfs/archive/b40edb19d3000763e1984f854f8f13d2159e13bc.jpg",
				"subtitle": "",
				"description": "游戏：动物森友会 平台：Switch\n封面画师：微博@HRDrifter \n终于盼来了动森的新作，和大家一起守夜等着游戏解锁，终于能在第一时间和大家一起分享这份喜悦~\n但是为什么这份高兴的心情最后会变成越来越多的房债呢……\n我的微博：@_warma_",
				"copyright": "",
				"title": "【warma】用水壶往海里浇水海平面会升高吗？《动物森友会》",
				"review": 0,
				"author": "Warma",
				"mid": 53456,
				"created": 1585311134,
				"length": "48:16",
				"video_review": 25064,
				"aid": 667551016,
				"bvid": "BV1na4y1t7Bf",
				"hide_click": false,
				"is_pay": 0,
				"is_union_video": 0
			}, {
				"comment": 3372,
				"typeid": 17,
				"play": 838204,
				"pic": "//i1.hdslb.com/bfs/archive/fc2bd95021e5c88a16b16a3bef803e0fc141d059.jpg",
				"subtitle": "",
				"description": "游戏：Rimworld\n上一期：av96139881\n点赞过8W会更新下一期的~\n录制这一期的时候嗓子炎症加剧了，所以说话有点点闷，不过现在已经好很多了~ 下一期要录的话，我会在嗓子完全康复后再录制的，大家放心~\n我的微博：@_warma_",
				"copyright": "",
				"title": "【warma实况】拿起狼牙棒去交朋友！《Rimworld》【第二期】",
				"review": 0,
				"author": "Warma",
				"mid": 53456,
				"created": 1584758891,
				"length": "21:40",
				"video_review": 12964,
				"aid": 98061972,
				"bvid": "BV1vE411c7Wu",
				"hide_click": false,
				"is_pay": 0,
				"is_union_video": 0
			}]
		},
		"page": {
			"count": 163,
			"pn": 1,
			"ps": 2
		}
	}
}
```

### 查询用户投稿相簿预览

> http://api.bilibili.com/x/space/album/index

*请求方式：GET*

所有类型的相簿

**url参数：**

| 参数名 | 类型 | 内容         | 必要性 | 备注    |
| ------ | ---- | ------------ | ------ | ------- |
| mid    | num  | 目标用户UID  | 必要   |         |
| ps     | num  | 获取的相簿量 | 非必要 | 默认为8 |

**json回复：**

根对象：

| 字段    | 类型   | 内容     | 备注                        |
| ------- | ------ | -------- | --------------------------- |
| code    | num    | 返回值   | 0：成功<br />-400：请求错误 |
| message | str    | 错误信息 | 默认为0                     |
| ttl     | num    | 1        |                 |
| data    | array | 相簿列表 |                             |

`data`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | obj  | 相簿内容1       |      |
| n    | obj  | 相簿内容（n+1） |      |
| ……   | obj  | ……              | ……   |

`data`数组中的对象：

| 字段        | 类型   | 内容        | 备注           |
| ----------- | ------ | ----------- | -------------- |
| count       | num    | 总计图片数  |                |
| ctime       | num    | 发布时间    | 时间戳         |
| description | str    | 简介        |                |
| doc_id      | num    | 相簿ID     | 非动态ID！！！ |
| like        | num    | 点赞数      |                |
| pictures    | array | 图片内容    |                |
| poster_uid  | num    | 上传用户UID |                |
| title       | str    | 标题        | 动态内容无     |
| view        | num    | 浏览数      |                |

`data`数组中的对象中的`pictures`数组：

| 项   | 类型 | 内容            | 备注                  |
| ---- | ---- | --------------- | --------------------- |
| 0    | obj  | 内容图片1       |                       |
| n    | obj  | 内容图片（n+1） | 项数取决于`count`的值 |
| ……   | obj  | ……              | ……                    |

`pictures`数组中的对象：

| 字段       | 类型 | 内容     | 备注        |
| ---------- | ---- | -------- | ----------- |
| img_height | num  | 图片高度 |             |
| img_size   | num  | 图片大小 | 单位为KByte |
| img_src    | str  | 图片url  |             |
| img_width  | num  | 图片宽度 |             |

**示例：**

查询用户`UID=53456`的投稿相簿预览

```shell
curl -G 'http://api.bilibili.com/x/space/album/index'\
--data-urlencode 'mid=53456'\
--data-urlencode 'ps=2'
```

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": [{
		"doc_id": 60470424,
		"poster_uid": 53456,
		"title": "",
		"description": "你醒啦！[tv_大佬]\n之前说到过的百万粉纪念的视频已经定时在了今天下午七点，欢迎来看呀！",
		"pictures": [{
			"img_src": "https://i0.hdslb.com/bfs/album/2840366e30bf7c0aba9da5adde1a771255a57bc7.jpg",
			"img_width": 625,
			"img_height": 134,
			"img_size": 14
		}],
		"count": 1,
		"ctime": 1583444859,
		"view": 1677521,
		"like": 29974
	}, {
		"doc_id": 58962388,
		"poster_uid": 53456,
		"title": "",
		"description": "上次的那些写实儿童画发出来啦！可以打印下来辟邪[tv_大佬]",
		"pictures": [{
			"img_src": "https://i0.hdslb.com/bfs/album/8acaf7c7897cb858cccab36c33a5e875adfef177.jpg",
			"img_width": 2172,
			"img_height": 3258,
			"img_size": 2831
		}, {
			"img_src": "https://i0.hdslb.com/bfs/album/1611b6b56d3d4328889a62b9f9bdc92e9d065532.jpg",
			"img_width": 3456,
			"img_height": 5184,
			"img_size": 3024
		}, {
			"img_src": "https://i0.hdslb.com/bfs/album/f3a30a2ef5b39711af8b945d54d85ffd1e932b8a.jpg",
			"img_width": 1200,
			"img_height": 757,
			"img_size": 313
		}],
		"count": 3,
		"ctime": 1582881332,
		"view": 1176646,
		"like": 25734
	}]
}
```

### 查询用户投稿相簿明细

> http://api.vc.bilibili.com/link_draw/v1/doc/doc_list

*请求方式：GET*

**url参数：**

| 参数名    | 类型 | 内容        | 必要性 | 备注                                                         |
| --------- | ---- | ----------- | ------ | ------------------------------------------------------------ |
| uid       | num  | 目标用户UID | 必要   |                                                              |
| page_num  | num  | 页码        | 非必要 | 默认为1                                                      |
| page_size | num  | 每页项数    | 非必要 | 默认为20                                                     |
| biz       | str  | 查询类型    | 非必要 | 全部：all<br />绘画：draw<br />摄影：photo<br />日常：daily<br />默认为all |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注          |
| ------- | ---- | -------- | ------------- |
| code    | num  | 返回值   | 0：成功       |
| msg     | str  | 错误信息 | 默认为success |
| message | str  | 错误信息 | 默认为success |
| data    | obj  | 信息本体 |               |

`data`对象：

| 字段  | 类型   | 内容     | 备注 |
| ----- | ------ | -------- | ---- |
| items | array | 相簿列表 |      |

`items`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | obj  | 相簿内容1       |      |
| n    | obj  | 相簿内容（n+1） |      |
| ……   | obj  | ……              | ……   |

`items`数组中的对象：

| 字段        | 类型   | 内容        | 备注           |
| ----------- | ------ | ----------- | -------------- |
| count       | num    | 总计图片数  |                |
| ctime       | num    | 发布时间    | 时间戳         |
| description | str    | 简介        |                |
| doc_id      | num    | 相簿ID     | 非动态ID！！！ |
| like        | num    | 点赞数      |                |
| pictures    | array | 图片内容    |                |
| poster_uid  | num    | 上传用户UID |                |
| title       | str    | 标题        | 动态内容无     |
| view        | num    | 浏览数      |                |

`items`数组中的对象中的`pictures`数组：

| 项   | 类型 | 内容            | 备注                  |
| ---- | ---- | --------------- | --------------------- |
| 0    | obj  | 内容图片1       |                       |
| n    | obj  | 内容图片（n+1） | 项数取决于`count`的值 |
| ……   | obj  | ……              | ……                    |

`pictures`数组中的对象：

| 字段       | 类型 | 内容     | 备注        |
| ---------- | ---- | -------- | ----------- |
| img_height | num  | 图片高度 |             |
| img_size   | num  | 图片大小 | 单位为KByte |
| img_src    | str  | 图片url  |             |
| img_width  | num  | 图片宽度 |             |

**示例：**

查询用户`UID=53456`的投稿明细中的全部类型

```shell
curl -G 'http://api.vc.bilibili.com/link_draw/v1/doc/doc_list'\
--data-urlencode 'uid=2'\
--data-urlencode 'page_num=1'\
--data-urlencode 'page_size=2'\
--data-urlencode 'biz=all'
```

```json
{
	"code": 0,
	"msg": "success",
	"message": "success",
	"data": {
		"items": [{
			"doc_id": 59015720,
			"poster_uid": 2,
			"title": "",
			"description": "6影是真的无脑，2个宝石都护不住（设计师：这真是太酷了）",
			"pictures": [{
				"img_src": "http://i0.hdslb.com/bfs/album/8456f050ec8639c6e0cef36aba27bfdedc550590.jpg",
				"img_width": 1824,
				"img_height": 840,
				"img_size": 1024
			}],
			"count": 1,
			"ctime": 1582894607,
			"view": 707073,
			"like": 7055
		}, {
			"doc_id": 46853140,
			"poster_uid": 2,
			"title": "",
			"description": "#年度报告# #新年Flag# https://www.bilibili.com/blackboard/timemachine2019.html\n决定了，这就是我的新年Flag！今年我一定要…",
			"pictures": [{
				"img_src": "http://i0.hdslb.com/bfs/album/5b3ae76f79d7cf2501afc3ca7c7da509dcf0e38a.jpg",
				"img_width": 1125,
				"img_height": 2184,
				"img_size": 465
			}, {
				"img_src": "http://i0.hdslb.com/bfs/album/87789fe9644337a1f7e6a0655a32584705af8bda.jpg",
				"img_width": 1125,
				"img_height": 2184,
				"img_size": 421
			}, {
				"img_src": "http://i0.hdslb.com/bfs/album/f752d7f3bb7952f6c0013b3f48ddcb07060b4721.jpg",
				"img_width": 1125,
				"img_height": 2184,
				"img_size": 524
			}, {
				"img_src": "http://i0.hdslb.com/bfs/active/7a52a411bccb716c8e67fe70e6c330d5209346de.jpg",
				"img_width": 1125,
				"img_height": 2184,
				"img_size": 534
			}],
			"count": 4,
			"ctime": 1577966163,
			"view": 833193,
			"like": 5667
		}]
	}
}
```

## 频道

<img src="/imgs/channel.svg" width="100" height="100" />

### 查询用户频道列表

> http://api.bilibili.com/x/space/channel/list

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | num  | 目标用户UID | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注     |
| ------- | ---- | -------- | -------- |
| code    | num  | 返回值   | 0：成功  |
| message | str  | 错误信息 | 默认为0  |
| ttl     | num  | 1        |          |
| data    | obj  | 信息本体 | 无则为空 |

`data`对象：

| 字段  | 类型   | 内容       | 备注 |
| ----- | ------ | ---------- | ---- |
| count | num    | 总计频道数 |      |
| list  | array | 频道列表   |      |

`data`中的`list`数组：

| 项   | 类型 | 内容        | 备注                  |
| ---- | ---- | ----------- | --------------------- |
| 0    | obj  | 频道1       |                       |
| n    | obj  | 频道（n+1） | 项数取决于`count`的值 |
| ……   | obj  | ……          | ……                    |

`data`中的`list`数组中的对象：

| 字段  | 类型 | 内容           | 备注     |
| ----- | ---- | -------------- | -------- |
| cid   | num  | 频道ID         |          |
| count | num  | 频道内含视频数 |          |
| cover | str  | 封面图片url    |          |
| intro | str  | 简介           | 无则为空 |
| mid   | num  | 创建用户UID    |          |
| mtime | num  | 创建时间       | 时间戳   |
| name  | str  | 标题           |          |

**示例：**

查询用户`UID=53456`的频道列表

```shell
curl -G 'http://api.bilibili.com/x/space/channel/list'\
--data-urlencode 'mid=53456'
```

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"count": 6,
		"list": [{
			"cid": 100249,
			"mid": 53456,
			"name": "【实况】动物之森",
			"intro": "",
			"mtime": 1579898830,
			"count": 2,
			"cover": "http://i1.hdslb.com/bfs/archive/6a7ed9483c34e839dfca981b9e2b94cd4c4efa0a.jpg"
		}, {
			"cid": 79323,
			"mid": 53456,
			"name": "忆雨",
			"intro": "忆雨出现过的视频",
			"mtime": 1562535222,
			"count": 7,
			"cover": "http://i2.hdslb.com/bfs/archive/1783e4f03042b282495799adda1cb56270cea647.jpg"
		}, {
			"cid": 79322,
			"mid": 53456,
			"name": "大画家",
			"intro": "",
			"mtime": 1562535122,
			"count": 6,
			"cover": "http://i0.hdslb.com/bfs/archive/9c85a14e805c6c23cb7a42e1dbef97821bb68960.jpg"
		}, {
			"cid": 77758,
			"mid": 53456,
			"name": "灭火器",
			"intro": "",
			"mtime": 1561270856,
			"count": 4,
			"cover": "http://i2.hdslb.com/bfs/archive/0073208d086b4ebe9cdc540e7664aa74b483aeb6.jpg"
		}, {
			"cid": 75696,
			"mid": 53456,
			"name": "沃玛小剧场",
			"intro": "",
			"mtime": 1559129460,
			"count": 5,
			"cover": "http://i2.hdslb.com/bfs/archive/db2b20ecdb6ed013fc3780b0e741ea88d46b5b40.jpg"
		}, {
			"cid": 170,
			"mid": 53456,
			"name": "爆炸电台",
			"intro": "闲聊的电台",
			"mtime": 1503298893,
			"count": 7,
			"cover": "http://i2.hdslb.com/bfs/archive/73d77bc6bb0d44b239fd4f5a2682fe3144e81692.jpg"
		}]
	}
}
```



### 查询用户频道中的视频

> http://api.bilibili.com/x/space/channel/video

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注      |
| ------ | ---- | ----------- | ------ | --------- |
| mid    | num  | 目标用户UID | 必要   |           |
| cid    | num  | 目标频道ID  | 必要   |           |
| pn     | num  | 页码        | 非必要 | 默认为1   |
| ps     | num  | 每页项数    | 非必要 | 默认为100 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                    |
| ------- | ---- | -------- | ------------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-404：无用户对应的频道 |
| message | str  | 错误信息 | 默认为0                                                 |
| ttl     | num  | 1        |                                                         |
| data    | obj  | 信息本体 |                                                         |

`data`对象：

| 字段 | 类型 | 内容     | 备注 |
| ---- | ---- | -------- | ---- |
| list | obj  | 频道信息 |      |
| page | obj  | 页面信息 |      |

`data`中的`list`对象：

| 字段     | 类型   | 内容           | 备注     |
| -------- | ------ | -------------- | -------- |
| archives | array | 包含的视频列表 |          |
| cid      | num    | 频道ID         |          |
| count    | num    | 频道内含视频数 |          |
| cover    | str    | 封面图片url    |          |
| intro    | str    | 简介           | 无则为空 |
| mid      | num    | 创建用户UID    |          |
| mtime    | num    | 创建时间       | 时间戳   |
| name     | str    | 标题           |          |

`list`中的`archives`数组：

| 项   | 类型 | 内容        | 备注                  |
| ---- | ---- | ----------- | --------------------- |
| 0    | obj  | 视频1       |                       |
| n    | obj  | 视频（n+1） | 项数取决于`count`的值 |
| ……   | obj  | ……          | ……                    |

`list`中的`archives`数组中的对象：

基本同「[视频详细信息](https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/video/info.md#视频详细信息（avID/bvID互转）)」中的data对象

`data`中的`page`对象：

| 字段  | 类型 | 内容       | 备注 |
| ----- | ---- | ---------- | ---- |
| count | num  | 总计视频数 |      |
| num   | num  | 当前页码   |      |
| size  | num  | 每页项数   |      |

**示例：**

查询用户`UID=53456`的频道`170`中的视频

```shell
curl -G 'http://api.bilibili.com/x/space/channel/video'\
--data-urlencode 'mid=53456'\
--data-urlencode 'cid=170'\
--data-urlencode 'ps=2'\
--data-urlencode 'pn=1'
```

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"list": {
			"cid": 170,
			"mid": 53456,
			"name": "爆炸电台",
			"intro": "闲聊的电台",
			"mtime": 1503298893,
			"count": 7,
			"cover": "http://i2.hdslb.com/bfs/archive/73d77bc6bb0d44b239fd4f5a2682fe3144e81692.jpg",
			"archives": [{
				"aid": 87673204,
				"videos": 1,
				"tid": 21,
				"tname": "日常",
				"copyright": 1,
				"pic": "http://i0.hdslb.com/bfs/archive/5387bdcbbe4d5551adbf0ee2e607e4b7d3d8f2f0.jpg",
				"title": "【warma爆炸电台】迟来的自我介绍【第八期】",
				"pubdate": 1581244539,
				"ctime": 1581244540,
				"desc": "时隔半年的新的一期爆炸电台来啦，这是我的一系列杂谈聊天电台，这次因为多了很多新关注的朋友们，所以来做个自我介绍吧！\n画师：Dr-H_喵_   动画：K_Lacid\n结尾提到的壁纸稍后在动态发原图，动态壁纸在steam那个壁纸软件的创意工坊里搜warma能找到\n\n往期的电台：\n第一期：av6786024 \n第三期：av13619263\n第四期：av18862091\n第五期：av25092410\n第六期：av42492515\n第七期：av62910468",
				"state": 0,
				"attribute": 16512,
				"duration": 2388,
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
					"mid": 53456,
					"name": "Warma",
					"face": "http://i1.hdslb.com/bfs/face/c1bbee6d255f1e7fc434e9930f0f288c8b24293a.jpg"
				},
				"stat": {
					"aid": 87673204,
					"view": 1383542,
					"danmaku": 88908,
					"reply": 9237,
					"favorite": 32929,
					"coin": 68849,
					"share": 5140,
					"now_rank": 0,
					"his_rank": 52,
					"like": 116164,
					"dislike": 0
				},
				"dynamic": "来做个自我介绍吧！ #warma##沃玛##爆炸电台#",
				"cid": 149793525,
				"dimension": {
					"width": 1920,
					"height": 1080,
					"rotate": 0
				},
				"bvid": "BV1D7411t7Be",
				"inter_video": false
			}, {
				"aid": 62910468,
				"videos": 1,
				"tid": 21,
				"tname": "日常",
				"copyright": 1,
				"pic": "http://i2.hdslb.com/bfs/archive/4bd598f71a144d4505e259b143c0de0bf27968b2.jpg",
				"title": "【warma爆炸电台】居然收到了几千条问题！【第七期】",
				"pubdate": 1565345410,
				"ctime": 1565338559,
				"desc": "时隔半年的爆炸电台第七期终于来啦！在这一期里回答了很多问题，祝看得开心！此外，就在昨天，50万订阅了…真的谢谢大家！\n也欢迎来看往期的电台：\n第一期：av6786024 （2016年10月）\n第二期：av10373352（2017年5月）\n第三期：av13619263（2017年8月）\n第四期：av18862091（2018年1月）\n第五期：av25092410（2018年6月）\n第六期：av42492515（2019年2月）",
				"state": 0,
				"attribute": 16512,
				"duration": 1987,
				"mission_id": 11740,
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
					"mid": 53456,
					"name": "Warma",
					"face": "http://i1.hdslb.com/bfs/face/c1bbee6d255f1e7fc434e9930f0f288c8b24293a.jpg"
				},
				"stat": {
					"aid": 62910468,
					"view": 455277,
					"danmaku": 19383,
					"reply": 2108,
					"favorite": 10507,
					"coin": 19422,
					"share": 1208,
					"now_rank": 0,
					"his_rank": 0,
					"like": 31515,
					"dislike": 0
				},
				"dynamic": "爆炸电台 第七期 来啦！",
				"cid": 109284065,
				"dimension": {
					"width": 1920,
					"height": 1080,
					"rotate": 0
				},
				"bvid": "BV1gt411K7Ga",
				"inter_video": false
			}]
		},
		"page": {
			"count": 7,
			"num": 1,
			"size": 2
		}
	}
}
```

### 创建频道

> http://api.bilibili.com/x/space/channel/add

*请求方式：POST*

认证方式：Cookie（SESSDATA）

创建成功后会返回新建频道的ID

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                     | 必要性 | 备注 |
| ------ | ---- | ------------------------ | ------ | ---- |
| name   | str  | 频道名                   | 必要   |      |
| intro  | str  | 频道简介                 | 非必要 |      |
| csrf   | str  | CSRF Token（位于cookie） | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />53001：频道名字数超过限制<br />53002：频道简介字数超过限制<br />53004：创建的频道已经满额<br />53007：频道名称已经存在<br />53024：编辑内容命中敏感信息 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 数据本体 | 成功有此项                                                   |

`data`对象：

| 字段 | 类型 | 内容   | 备注 |
| ---- | ---- | ------ | ---- |
| cid  | num  | 频道ID |      |

**示例：**

创建名为`test1`的频道，简介为空

```shell
curl 'http://api.bilibili.com/x/space/channel/add'\
--data-urlencode 'name=test1'\
--data-urlencode 'intro='\
--data-urlencode 'csrf=xxx'\
-b 'SESSDATA=xxx'
```

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "cid": 138996
    }
}
```

### 修改频道

> http://api.bilibili.com/x/space/channel/edit

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                     | 必要性 | 备注 |
| ------ | ---- | ------------------------ | ------ | ---- |
| cid    | num  | 频道ID                   | 必要   |      |
| name   | str  | 频道名                   | 必要   |      |
| intro  | str  | 频道简介                 | 非必要 |      |
| csrf   | str  | CSRF Token（位于cookie） | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />53001：频道名字数超过限制<br />53002：频道简介字数超过限制<br />53007：频道名称已经存在<br />53024：编辑内容命中敏感信息 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

修改频道`138996`名称为`测试`，简介为`123456`

```shell
curl 'http://api.bilibili.com/x/space/channel/edit'\
--data-urlencode 'cid=138996'\
--data-urlencode 'name=测试'\
--data-urlencode 'intro=123456'\
--data-urlencode 'csrf=xxx'\
-b 'SESSDATA=xxx'
```

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

### 删除频道

> http://api.bilibili.com/x/space/channel/del 

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                     | 必要性 | 备注 |
| ------ | ---- | ------------------------ | ------ | ---- |
| cid    | num  | 需要删除的频道ID         | 必要   |      |
| csrf   | str  | CSRF Token（位于cookie） | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

删除频道`138996`

```shell
curl 'http://api.bilibili.com/x/space/channel/del'\
--data-urlencode 'cid=138996'\
--data-urlencode 'csrf=xxx'\
-b 'SESSDATA=xxx'
```

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

### 频道添加视频

> http://api.bilibili.com/x/space/channel/video/add

*请求方式：POST*

认证方式：Cookie（SESSDATA）

仅能添加自己是UP主的视频

如添加多个视频，仅会添加正确的

**注：完成后需要使用接口「查询用户频道中的视频」刷新**

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                     | 必要性 | 备注                   |
| ------ | ---- | ------------------------ | ------ | ---------------------- |
| cid    | num  | 频道ID                   | 必要   |                        |
| aids   | nums | 要添加的目标视频avID     | 必要   | 多个使用","（%2C）分隔 |
| csrf   | str  | CSRF Token（位于cookie） | 必要   |                        |

**json回复：**

根对象：

| 字段    | 类型  | 内容             | 备注                                                         |
| ------- | ----- | ---------------- | ------------------------------------------------------------ |
| code    | num   | 返回值           | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />-404：无此项<br />53003：本频道里的视频已满<br />53006：提交视频已失效或频道里有（非该视频UP主） |
| message | str   | 错误信息         | 默认为0                                                      |
| ttl     | num   | 1                |                                                              |
| data    | array | 出错视频avID列表 |                                                              |

`data`数组：

| 项   | 类型 | 内容                | 备注 |
| ---- | ---- | ------------------- | ---- |
| 0    | num  | 出错视频avID1       |      |
| n    | num  | 出错视频avID（n+1） |      |
| ……   | num  | ……                  | ……   |

**示例：**

向频道`138995`中添加视频`av583785685`和`av243322853`

```shell
curl 'http://api.bilibili.com/x/space/channel/video/add'\
--data-urlencode 'cid=138995'\
--data-urlencode 'aids=583785685,243322853'\
--data-urlencode 'csrf=xxx'\
-b 'SESSDATA=xxx'
```

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": []
}
```

### 频道删除视频

> http://api.bilibili.com/x/space/channel/video/del

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**注：完成后需要使用接口「查询用户频道中的视频」刷新**

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                     | 必要性 | 备注 |
| ------ | ---- | ------------------------ | ------ | ---- |
| cid    | num  | 频道ID                   | 必要   |      |
| aid    | num  | 要删除的目标视频avID     | 必要   |      |
| csrf   | str  | CSRF Token（位于cookie） | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />-404：无此项<br />53008：频道内没有视频<br />53009：频道内没有该视频 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

删除频道`138995`中的视频`av583785685`

```shell
curl 'http://api.bilibili.com/x/space/channel/video/del'\
--data-urlencode 'cid=138995'\
--data-urlencode 'aid=583785685'\
--data-urlencode 'csrf=xxx'\
-b 'SESSDATA=xxx'
```

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

### 调整频道视频排序

> http://api.bilibili.com/x/space/channel/video/sort

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                     | 必要性 | 备注                                                         |
| ------ | ---- | ------------------------ | ------ | ------------------------------------------------------------ |
| cid    | num  | 频道ID                   | 必要   |                                                              |
| aid    | num  | 要移动的目标视频avID     | 必要   |                                                              |
| to     | num  | 视频排序倒数位置         | 非必要 | 默认为1<br />1为列表底部，视频总数为首端<br />与显示顺序恰好相反 |
| csrf   | str  | CSRF Token（位于cookie） | 必要   |                                                              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

调整`138995`中的视频`av583785685`位置为倒数第2

```shell
curl 'http://api.bilibili.com/x/space/channel/video/sort'\
--data-urlencode 'cid=138995'\
--data-urlencode 'aid=583785685'\
--data-urlencode 'to=2'\
--data-urlencode 'csrf=xxx'\
-b 'SESSDATA=xxx'
```

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

### 检查频道中有无失效视频

> http://api.bilibili.com/x/space/channel/video/check 

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名 | 类型 | 内容       | 必要性 | 备注 |
| ------ | ---- | ---------- | ------ | ---- |
| cid    | num  | 目标频道ID | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />-404：无此项<br />53005：频道内有失效视频 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

检查频道`138995`

```shell
curl -G 'http://api.bilibili.com/x/space/channel/video/check
--data-urlencode 'cid=138995'\
-b 'SESSDATA=xxx'
```

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

## 收藏

<img src="/imgs/collect.svg" width="100" height="100" />

### 查询用户创建的视频收藏夹

> http://api.bilibili.com/x/v3/fav/folder/created/list-all 

*请求方式：GET*

认证方式：Cookie（SESSDATA）

查看私有收藏夹时需要认证

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| up_mid | num  | 目标用户UID | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型                          | 内容     | 备注                        |
| ------- | ----------------------------- | -------- | --------------------------- |
| code    | num                           | 返回值   | 0：成功<br />-400：请求错误 |
| message | str                           | 错误信息 | 默认为0                     |
| ttl     | num                           | 1        |                             |
| data    | 隐藏时：null<br />公开时：obj | 信息本体 |                             |

`data`对象：

| 字段  | 类型                                    | 内容           | 备注 |
| ----- | --------------------------------------- | -------------- | ---- |
| count | num                                     | 创建的收藏夹数 |      |
| list  | 无收藏夹时：null<br />有收藏夹时：array | 收藏夹列表     |      |

`data`中的`list`数组：

| 项   | 类型 | 内容        | 备注                  |
| ---- | ---- | ----------- | --------------------- |
| 0    | obj  | 收藏夹1     |                       |
| n    | obj  | 收藏夹(n+1) | 项数取决于`count`的值 |
| ……   | obj  | ……          |                       |

`data`中的`list`数组中的对象：

| 字段        | 类型 | 内容             | 备注                                      |
| ----------- | ---- | ---------------- | ----------------------------------------- |
| id          | num  | 收藏夹mlID       |                                           |
| fid         | num  | 原始收藏夹ID     | 去除两位UID尾号                           |
| mid         | num  | 创建用户UID      |                                           |
| attr        | num  | 收藏夹属性       | 转换成8-bit二进制处理<br />详细说明见下表 |
| title       | str  | 收藏夹标题       |                                           |
| fav_state   | num  | 0                | 作用尚不明确                              |
| media_count | num  | 收藏夹总计视频数 |                                           |

`attr`属性二进制值表：

| 其他有待补充... | 1：默认收藏夹                    | 0：公开性            |
| --------------- | -------------------------------- | -------------------- |
|                 | 0：默认收藏夹<br />1：其他收藏夹 | 0：公开<br />1：私有 |

**示例：**

查询用户`UID=7792521`的收藏夹列表

```shell
curl -G 'http://api.bilibili.com/x/v3/fav/folder/created/list-all'\
--data-urlencode 'up_mid=7792521'\
-b 'SESSDATA=xxx'
```

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"count": 5,
		"list": [{
			"id": 44233921,
			"fid": 442339,
			"mid": 7792521,
			"attr": 0,
			"title": "默认收藏夹",
			"fav_state": 0,
			"media_count": 85
		}, {
			"id": 936347621,
			"fid": 9363476,
			"mid": 7792521,
			"attr": 22,
			"title": "放假君的鬼畜私房歌",
			"fav_state": 0,
			"media_count": 2
		}, {
			"id": 845218621,
			"fid": 8452186,
			"mid": 7792521,
			"attr": 22,
			"title": "♪一言不合就开唱♪",
			"fav_state": 0,
			"media_count": 4
		}, {
			"id": 844998121,
			"fid": 8449981,
			"mid": 7792521,
			"attr": 22,
			"title": "个人作品精选",
			"fav_state": 0,
			"media_count": 25
		}, {
			"id": 381779121,
			"fid": 3817791,
			"mid": 7792521,
			"attr": 22,
			"title": "鬼畜小课堂",
			"fav_state": 0,
			"media_count": 25
		}]
	}
}
```

### 查询用户收藏的视频收藏夹

> http://api.bilibili.com/x/v3/fav/folder/collected/list 

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| ps     | num  | 每页项数    | 必要   |      |
| pn     | num  | 页码        | 必要   |      |
| up_mid | num  | 目标用户UID | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型                          | 内容     | 备注                                                         |
| ------- | ----------------------------- | -------- | ------------------------------------------------------------ |
| code    | num                           | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />40022：签名过长 |
| message | str                           | 错误信息 | 默认为0                                                      |
| ttl     | num                           | 1        |                                                              |
| data    | 隐藏时：null<br />公开时：obj | 信息本体 |                                                              |

`data`对象：

| 字段  | 类型                                    | 内容           | 备注 |
| ----- | --------------------------------------- | -------------- | ---- |
| count | num                                     | 创建的收藏夹数 |      |
| list  | 无收藏夹时：null<br />有收藏夹时：array | 收藏夹列表     |      |

`data`中的`list`数组：

| 项   | 类型 | 内容        | 备注                  |
| ---- | ---- | ----------- | --------------------- |
| 0    | obj  | 收藏夹1     |                       |
| n    | obj  | 收藏夹(n+1) | 项数取决于`count`的值 |
| ……   | obj  | ……          |                       |

`data`中的`list`数组中的对象：

| 字段        | 类型 | 内容               | 备注                                      |
| ----------- | ---- | ------------------ | ----------------------------------------- |
| id          | num  | 收藏夹mlID         |                                           |
| fid         | num  | 原始收藏夹ID       | 去除两位UID尾号                           |
| mid         | num  | 创建用户UID        |                                           |
| attr        | num  | 收藏夹属性         | 转换成8-bit二进制处理<br />详细说明见下表 |
| title       | str  | 收藏夹标题         |                                           |
| cover       | str  | 收藏夹封面图片url  |                                           |
| upper       | obj  | 收藏夹创建用户信息 |                                           |
| cover_type  | num  | 2                  | 作用尚不明确                              |
| intro       | str  | 空                 | 作用尚不明确                              |
| ctime       | num  | 创建时间           | 时间戳                                    |
| mtime       | num  | 审核时间           | 时间戳                                    |
| state       | num  | 0                  | 作用尚不明确                              |
| fav_state   | num  | 0                  | 作用尚不明确                              |
| media_count | num  | 收藏夹总计视频数   |                                           |

`attr`属性二进制值表：

| 其他有待补充... | 1：默认收藏夹                    | 0：公开性            |
| --------------- | -------------------------------- | -------------------- |
|                 | 0：默认收藏夹<br />1：其他收藏夹 | 0：公开<br />1：私有 |

`data`中的`list`数组中的对象中的`upper`对象：

| 字段 | 类型 | 内容       | 备注         |
| ---- | ---- | ---------- | ------------ |
| mid  | num  | 创建人UID  |              |
| name | str  | 创建人昵称 |              |
| face | str  | 空         | 作用尚不明确 |

**示例：**

查询用户`UID=293793435`的收藏夹收藏列表

```shell
curl -G 'http://api.bilibili.com/x/v3/fav/folder/collected/list'\
--data-urlencode 'up_mid=293793435'\
--data-urlencode 'ps=20'\
--data-urlencode 'pn=1'\
-b 'SESSDATA=xxx'
```

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"count": 2,
		"list": [{
			"id": 496307088,
			"fid": 4963070,
			"mid": 412466388,
			"attr": 22,
			"title": "入站必刷",
			"cover": "http://i0.hdslb.com/bfs/archive/baae2b4050363c0ab45465b7cf696b8304fdaca8.jpg",
			"upper": {
				"mid": 412466388,
				"name": "热门菌",
				"face": ""
			},
			"cover_type": 2,
			"intro": "",
			"ctime": 1563394571,
			"mtime": 1563394571,
			"state": 0,
			"fav_state": 0,
			"media_count": 55
		}, {
			"id": 381779121,
			"fid": 3817791,
			"mid": 7792521,
			"attr": 22,
			"title": "鬼畜小课堂",
			"cover": "http://i2.hdslb.com/bfs/archive/09a668cfdb38fb3a85f905c10f48a2947e36a695.jpg",
			"upper": {
				"mid": 7792521,
				"name": "还有一天就放假了",
				"face": ""
			},
			"cover_type": 2,
			"intro": "",
			"ctime": 1553700224,
			"mtime": 1557291666,
			"state": 0,
			"fav_state": 0,
			"media_count": 25
		}]
	}
}
```

## 订阅

<img src="/imgs/sub.svg" width="100" height="100" />

### 订阅查询用户追番预览列表

> http://space.bilibili.com/ajax/Bangumi/getList

*请求方式：GET*

认证方式：Cookie（SESSDATA）

如设置隐私查看自己的需要认证

带有转义，且只能获取最多15条

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | num  | 目标用户UID | 必要   |      |

**json回复：**

根对象：

| 字段   | 类型                     | 内容                               | 备注                        |
| ------ | ------------------------ | ---------------------------------- | --------------------------- |
| status | bool                     | 状态                               | false：失败<br />true：成功 |
| data   | 失败：str<br />成功：obj | 失败：错误信息<br />成功：信息本体 |                             |

`data`对象：

| 字段   | 类型  | 内容         | 备注         |
| ------ | ----- | ------------ | ------------ |
| count  | num   | 总计追番数   |              |
| pages  | num   | 0            | 作用尚不明确 |
| result | array | 追番预览列表 |              |

`data`中的`result`数组：

| 项   | 类型 | 内容        | 备注                       |
| ---- | ---- | ----------- | -------------------------- |
| 0    | obj  | 追番1       |                            |
| n    | obj  | 追番（n+1） | 按照目标用户的关注顺序排列 |
| ……   | obj  | ……          |                            |
| 14   | obj  | 追番15      | 最后一项                   |

`data`中的`result`数组中的对象：

| 字段            | 类型 | 内容            | 备注                              |
| --------------- | ---- | --------------- | --------------------------------- |
| brief           | str  | 简介            |                                   |
| cover           | str  | 封面图片url     |                                   |
| evaluate        | str  | 空              |                                   |
| favorites       | num  | 追番数          |                                   |
| is_finish       | num  | 是否已完结      | 0：未完结<br />1：已完结          |
| last_ep_index   | num  | 0               | 作用尚不明确                      |
| newest_ep_index | num  | 最新一话        | 可能为0                           |
| season_id       | str  | 番剧ssID        |                                   |
| share_url       | str  | 播放页面链接url |                                   |
| title           | str  | 标题            |                                   |
| total_count     | num  | 总计集数        | 未完结：-1<br />已完结：非0正整数 |

**示例：**

查看用户`UID=14082`的追番预览列表

```shell
curl -G 'http://space.bilibili.com/ajax/Bangumi/getList'\
--data-urlencode 'mid=14082'\
-b 'SESSDATA=xxx'
```

```json
{
	"status": true,
	"data": {
		"count": 25,
		"pages": 0,
		"result": [{
			"season_id": "29310",
			"share_url": "http:\/\/bangumi.bilibili.com\/anime\/29310\/",
			"title": "异度侵入 ID:INVADED",
			"is_finish": 1,
			"favorites": 3479220,
			"newest_ep_index": 13,
			"last_ep_index": 0,
			"total_count": 13,
			"cover": "http:\/\/i0.hdslb.com\/bfs\/bangumi\/image\/9bf9e66968f85b33ec3769a16c86b36dc984abbc.png",
			"evaluate": "",
			"brief": "本片讲述利用能检测出人们杀意的装置以及利用思想粒子做出的“井”，来探知事件真相的科幻故事。"
		}, {
			"season_id": "25739",
			"share_url": "http:\/\/bangumi.bilibili.com\/anime\/25739\/",
			"title": "关于我转生变成史莱姆这档事",
			"is_finish": 1,
			"favorites": 5518829,
			"newest_ep_index": 0,
			"last_ep_index": 0,
			"total_count": 27,
			"cover": "http:\/\/i0.hdslb.com\/bfs\/bangumi\/a4c0e0ccc44fe3949a734f546cf5bb07da925bad.png",
			"evaluate": "",
			"brief": "史莱姆生活，开始了。\n上班族的三上悟在道路上被歹徒给刺杀身亡后，回过神来发现自己转生到了异世界。\n不..."
		}, 
		…………
		]
	}
}
```

### 查询用户追番（追剧）明细

> http://api.bilibili.com/x/space/bangumi/follow/list

*请求方式：GET*

认证方式：Cookie（SESSDATA）

如设置隐私查看自己的需要认证

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注                 |
| ------ | ---- | ----------- | ------ | -------------------- |
| vmid   | num  | 目标用户UID | 必要   |                      |
| pn     | num  | 页码        | 非必要 | 默认为1              |
| ps     | num  | 每页项数    | 非必要 | 默认为15             |
| type   | num  | 查询类型    | 必要   | 1：追番<br />2：追剧 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                       |
| ------- | ---- | -------- | ---------------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />53013：用户隐私设置未公开 |
| message | str  | 错误信息 | 默认为0                                                    |
| ttl     | num  | 1        |                                                            |
| data    | obj  | 信息本体 |                                                            |

`data`对象：

| 字段  | 类型  | 内容       | 备注 |
| ----- | ----- | ---------- | ---- |
| list  | array | 追番列表   |      |
| pn    | num   | 当前页码   |      |
| ps    | num   | 每页项数   |      |
| total | num   | 总计追番数 |      |

`data`中的`list`数组：

| 项   | 类型 | 内容        | 备注                       |
| ---- | ---- | ----------- | -------------------------- |
| 0    | obj  | 追番1       |                            |
| n    | obj  | 追番（n+1） | 按照目标用户的关注顺序排列 |
| ……   | obj  | ……          |                            |

`data`中的`list`数组中的对象：

基本同「番剧详细信息」中的result对象（未完工）

**示例：**

查看用户`UID=14082`的追番明细

```shell
curl -G 'http://api.bilibili.com/x/space/bangumi/follow/list'\
--data-urlencode 'vmid=14082'\
--data-urlencode 'type=1'\
--data-urlencode 'ps=2'\
--data-urlencode 'pn=1'\
-b 'SESSDATA=xxx'
```

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"list": [{
			"season_id": 29310,
			"media_id": 28224080,
			"season_type": 1,
			"season_type_name": "番剧",
			"title": "异度侵入 ID:INVADED",
			"cover": "http://i0.hdslb.com/bfs/bangumi/image/9bf9e66968f85b33ec3769a16c86b36dc984abbc.png",
			"total_count": 13,
			"is_finish": 1,
			"is_started": 1,
			"is_play": 1,
			"badge": "会员专享",
			"badge_type": 0,
			"rights": {
				"allow_review": 1,
				"is_selection": 1,
				"selection_style": 1
			},
			"stat": {
				"follow": 3475768,
				"view": 87500861,
				"danmaku": 1334654,
				"reply": 316632,
				"coin": 835150,
				"series_follow": 3475242,
				"series_view": 87500861
			},
			"new_ep": {
				"id": 307774,
				"index_show": "全13话",
				"cover": "http://i0.hdslb.com/bfs/archive/3dce2b856a7b0ea667aa288b51b7c0478fa56c4d.jpg",
				"title": "13",
				"long_title": "CHANNELEDⅡ",
				"pub_time": "2020-03-23 00:30:00",
				"duration": 1481000
			},
			"rating": {
				"score": 9.8,
				"count": 262589
			},
			"square_cover": "http://i0.hdslb.com/bfs/bangumi/image/664dbf039ec2da8dd982b697a108e28e87b9897e.jpg",
			"season_status": 13,
			"season_title": "TV",
			"badge_ep": "会员",
			"media_attr": 196608,
			"season_attr": 0,
			"evaluate": "本片讲述利用能检测出人们杀意的装置以及利用思想粒子做出的“井”，来探知事件真相的科幻故事。...",
			"areas": [{
				"id": 2,
				"name": "日本"
			}],
			"subtitle": "",
			"first_ep": 307446,
			"can_watch": 1,
			"series": {
				"series_id": 4760,
				"title": "ID:INVADED",
				"season_count": 1,
				"new_season_id": 29310
			},
			"publish": {
				"pub_time": "2020-01-06 00:30:00",
				"pub_time_show": "敬请期待",
				"release_date": "2020-01-06",
				"release_date_show": "2020年1月6日"
			},
			"mode": 2,
			"section": [{
				"section_id": 39327,
				"season_id": 29310,
				"limit_group": 328,
				"watch_platform": 15,
				"copyright": "dujia",
				"ban_area_show": 1
			}, {
				"section_id": 39633,
				"season_id": 29310,
				"limit_group": 328,
				"watch_platform": 15,
				"type": 1,
				"copyright": "dujia",
				"title": "其他",
				"ban_area_show": 1
			}, {
				"section_id": 44101,
				"season_id": 29310,
				"limit_group": 316,
				"watch_platform": 15,
				"type": 4,
				"copyright": "ugc",
				"ban_area_show": 1
			}],
			"url": "https://www.bilibili.com/bangumi/play/ss29310",
			"follow_status": 2,
			"is_new": 0,
			"progress": "",
			"both_follow": true
		}, {
			"season_id": 25739,
			"media_id": 139252,
			"season_type": 1,
			"season_type_name": "番剧",
			"title": "关于我转生变成史莱姆这档事",
			"cover": "http://i0.hdslb.com/bfs/bangumi/a4c0e0ccc44fe3949a734f546cf5bb07da925bad.png",
			"total_count": 27,
			"is_finish": 1,
			"is_started": 1,
			"is_play": 1,
			"badge": "会员专享",
			"badge_type": 0,
			"rights": {
				"allow_review": 1,
				"is_selection": 1,
				"selection_style": 1
			},
			"stat": {
				"follow": 5516519,
				"view": 246739631,
				"danmaku": 3802465,
				"reply": 460225,
				"coin": 1338958,
				"series_follow": 5516535,
				"series_view": 246739631
			},
			"new_ep": {
				"id": 316957,
				"index_show": "全27话",
				"cover": "http://i0.hdslb.com/bfs/archive/81d07d1a478ce3a6209b557e14df9b9c78c42abb.jpg",
				"title": "OAD03",
				"long_title": "外传：利姆鲁的华丽教师生活 其一",
				"pub_time": "2020-03-27 00:00:03",
				"duration": 1493000
			},
			"rating": {
				"score": 9.4,
				"count": 83354
			},
			"square_cover": "http://i0.hdslb.com/bfs/bangumi/8d9f5b4a566d0547bc2e3f6f733b732a09c0d3d4.jpg",
			"season_status": 13,
			"season_title": "TV",
			"badge_ep": "会员",
			"media_attr": 0,
			"season_attr": 0,
			"evaluate": "史莱姆生活，开始了。\n上班族的三上悟在道路上被歹徒给刺杀身亡后，回过神来发现自己转生到了异世界。\n不过，自己居然是“史莱姆”！\n他在得到利姆鲁这个名字后开始了自己的史莱姆人生，随着与各个种族相处交流的...",
			"areas": [{
				"id": 2,
				"name": "日本"
			}],
			"subtitle": "",
			"first_ep": 250460,
			"can_watch": 1,
			"series": {
				"series_id": 4188,
				"title": "关于我转生变成史莱姆这档事",
				"season_count": 1,
				"new_season_id": 25739
			},
			"publish": {
				"pub_time": "2018-10-02 00:30:00",
				"pub_time_show": "2018年10月02日00:30",
				"release_date": "2018-10-02",
				"release_date_show": "2018年10月2日"
			},
			"mode": 2,
			"section": [{
				"section_id": 34988,
				"season_id": 25739,
				"limit_group": 328,
				"watch_platform": 15,
				"copyright": "bilibili",
				"ban_area_show": 1
			}],
			"url": "https://www.bilibili.com/bangumi/play/ss25739",
			"follow_status": 2,
			"is_new": 0,
			"progress": "",
			"both_follow": true
		}],
		"pn": 1,
		"ps": 2,
		"total": 25
	}
}
```





### 查询用户关注的TAG（话题）

> http://space.bilibili.com/ajax/tags/getSubList

*请求方式：GET*

认证方式：Cookie（SESSDATA）

如设置隐私查看自己的需要认证

带有转义

只显示前100个

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | num  | 目标用户UID | 必要   |      |

**json回复：**

根对象：

| 字段   | 类型                         | 内容                                   | 备注                        |
| ------ | ---------------------------- | -------------------------------------- | --------------------------- |
| ststus | bool                         | 返回值                                 | false：错误<br />true：正确 |
| data   | 错误时：str<br />正确时：obj | 错误时：错误信息<br />正确时：数据本体 | 正确时不返回错误信息        |

`data`对象：

| 字段  | 类型  | 内容        | 备注 |
| ----- | ----- | ----------- | ---- |
| tags  | array | 关注TAG列表 |      |
| count | num   | 关注TAG的数 |      |

`data`中的`tags`数组：

| 项   | 类型 | 内容           | 备注     |
| ---- | ---- | -------------- | -------- |
| 0    | obj  | 关注TAG1       |          |
| n    | obj  | 关注TAG（n+1） |          |
| ……   | obj  | ……             | ……       |
| 99   | obj  | 关注TAG100     | 最后一项 |

`data`中的`tags`数组中的对象：

| 字段          | 类型 | 内容                | 备注         |
| ------------- | ---- | ------------------- | ------------ |
| archive_count | num  | 0                   | 作用尚不明确 |
| cover         | str  | TAG图片url          | 无则为空     |
| name          | str  | TAG名               |              |
| notify        | num  | 1                   | 作用尚不明确 |
| tag_id        | num  | TAGID               |              |
| updated_ts    | str  | 1970-01-01 08:00:00 | 作用尚不明确 |

**示例：**

查询用户`UID=2`的关注TAG

```shell
curl -G 'http://space.bilibili.com/ajax/tags/getSubList'\
--data-urlencode 'mid=2'\
-b 'SESSDATA=xxx'
```

```json
{
	"status": true,
	"data": {
		"tags": [{
			"name": "豪宅",
			"cover": "",
			"tag_id": 47637,
			"notify": 1,
			"archive_count": 0,
			"updated_ts": "1970-01-01 08:00:00"
		}, {
			"name": "死亡搁浅",
			"cover": "",
			"tag_id": 1737239,
			"notify": 1,
			"archive_count": 0,
			"updated_ts": "1970-01-01 08:00:00"
		},
		…………
		],
		"count": 58
	}
}
```

