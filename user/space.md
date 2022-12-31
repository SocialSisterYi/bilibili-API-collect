# 用户空间相关

- [主页](#主页)
  - [置顶视频](#置顶视频)
    - [查询用户置顶视频](#查询用户置顶视频)
    - [设置置顶视频](#设置置顶视频)
    - [取消置顶视频](#取消置顶视频)
  - [代表作视频](#代表作视频)
    - [查询用户代表作视频列表](#查询用户代表作视频列表)
    - [添加代表作视频](#添加代表作视频)
    - [删除代表作视频](#删除代表作视频)
  - [个人TAG](#个人TAG)
    - [查看用户个人TAG](#查看用户个人TAG)
    - [修改个人TAG](#修改个人TAG)
  - [空间公告](#空间公告)
    - [查看用户空间公告](#查看用户空间公告)
    - [修改空间公告](#修改空间公告)
  - [主页板块布局与权限](#主页板块布局与权限)
    - [查询空间设置](#查询空间设置)
    - [调整空间板块布局](#调整空间板块布局)
    - [修改空间隐私权限](#修改空间隐私权限)
  - [查询用户最近玩过的游戏](#查询用户最近玩过的游戏)
  - [获取用户最近投币的视频明细](#获取用户最近投币的视频明细)
  - [获取用户最近点赞的视频明细](#获取用户最近点赞的视频明细)
- [投稿](#投稿)
  - [查询用户投稿视频明细](#查询用户投稿视频明细)
  - [查询用户投稿相簿预览](#查询用户投稿相簿预览)
  - [查询用户投稿相簿明细](#查询用户投稿相簿明细)
- [频道](#频道)
  - [查询用户频道列表](#查询用户频道列表)
  - [查询用户频道中的视频](#查询用户频道中的视频)
  - [创建频道](#创建频道)
  - [修改频道](#修改频道)
  - [删除频道](#删除频道)
  - [频道添加视频](#频道添加视频)
  - [频道删除视频](#频道删除视频)
  - [调整频道视频排序](#调整频道视频排序)
  - [检查频道中有无失效视频](#检查频道中有无失效视频)
- [收藏](#收藏)
  - [查询用户创建的视频收藏夹](#查询用户创建的视频收藏夹)
  - [查询用户收藏的视频收藏夹](#查询用户收藏的视频收藏夹)
- [课程](#课程)
  - [查询用户发布的课程列表](#查询用户发布的课程列表)
- [订阅](#订阅)
  - [查询用户追番预览列表](#查询用户追番预览列表)
  - [查询用户追番（追剧）明细](#查询用户追番（追剧）明细)
  - [查询用户关注的TAG（话题）](#查询用户关注的TAG话题)

---

## 主页

<img src="/imgs/home.svg" width="100" height="100" />

### 置顶视频

#### 查询用户置顶视频

>http://api.bilibili.com/x/space/top/arc

*请求方式：GET*

粉丝在其主页上可见

**url参数：**

| 参数名  | 类型  | 内容      | 必要性 | 备注  |
|------|-----|---------|-----|-----|
| vmid | num | 目标用户mid | 必要  |     |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                                    |
|---------|-----|------|---------------------------------------|
| code    | num | 返回值  | 0：成功<br />-400：请求错误<br />53016：没有置顶视频 |
| message | str | 错误信息 | 默认为0                                  |
| ttl     | num | 1    |                                       |
| data    | obj | 信息本体 |                                       |

`data`对象：

| 字段          | 类型   | 内容              | 备注                                                                |
|-------------|------|-----------------|-------------------------------------------------------------------|
| aid         | num  | 稿件avid          |                                                                   |
| videos      | num  | 视频分P总数          | 默认为1                                                              |
| tid         | num  | 分区tid           |                                                                   |
| tname       | str  | 子分区名称           |                                                                   |
| copyright   | num  | 是否转载            | 1：原创<br />2：转载                                                    |
| pic         | str  | 视频封面图片url       |                                                                   |
| title       | str  | 稿件标题            |                                                                   |
| pubdate     | num  | 稿件发布时间          | 时间戳                                                               |
| ctime       | num  | 用户提交稿件的时间       | 时间戳                                                               |
| desc        | str  | 视频简介            |                                                                   |
| state       | num  | 视频状态            | 略，见[获取视频详细信息（web端）](/video/info.md#获取视频详细信息（web端）)中的`state`备注     |
| attribute   | num  | 稿件属性位配置         | 略，见[获取视频详细信息（web端）](/video/info.md#获取视频详细信息（web端）)中的`attribute`备注 |
| duration    | num  | 视频总计持续时长（所有分P）  | 单位为秒                                                              |
| rights      | obj  | 视频属性标志          | 略，见[获取视频详细信息（web端）](/video/info.md#获取视频详细信息（web端）)中的`rights`对象    |
| owner       | obj  | 视频UP主信息         | 略，见[获取视频详细信息（web端）](/video/info.md#获取视频详细信息（web端）)中的`owner`对象     |
| stat        | obj  | 视频状态数           | 略，见[获取视频详细信息（web端）](/video/info.md#获取视频详细信息（web端）)中的`stat`对象      |
| dynamic     | str  | 视频同步发布的的动态的文字内容 | 无为空                                                               |
| cid         | num  | 视频1P cid        |                                                                   |
| dimension   | obj  | 视频1P分辨率         | 略，见[获取视频详细信息（web端）](/video/info.md#获取视频详细信息（web端）)中的`dimension`对象 |
| bvid        | str  | 稿件bvid          |                                                                   |
| reason      | str  | 置顶视频备注          |                                                                   |
| inter_video | bool | 是否为合作视频         | false：否<br />true：是                                               |

**示例：**

查询用户`mid=23215368`的置顶视频

```shell
curl -G 'http://api.bilibili.com/x/space/top/arc' \
--data-urlencode 'vmid=23215368'
```

<details>
<summary>查看响应示例：</summary>

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

</details>

#### 设置置顶视频

> http://api.bilibili.com/x/space/top/arc/set

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名    | 类型  | 内容                   | 必要性    | 备注                   |
|--------|-----|----------------------|--------|----------------------|
| aid    | num | 置顶目标稿件avid           | 必要（可选） | avid与bvid任选一个        |
| bvid   | str | 置顶目标稿件bvid           | 必要（可选） | avid与bvid任选一个        |
| reason | str | 置顶视频备注               | 非必要    | 置顶备注最大40字符<br />默认为空 |
| csrf   | str | CSRF Token（位于cookie） | 必要     |                      |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                                                                                                                        |
|---------|-----|------|---------------------------------------------------------------------------------------------------------------------------|
| code    | num | 返回值  | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-304：未修改<br />-400：请求错误<br />53014：稿件已失效<br />53015：备注过长<br />53017：置顶非自己的稿件 |
| message | str | 错误信息 | 默认为0                                                                                                                      |
| ttl     | num | 1    |                                                                                                                           |

**示例：**

置顶视频`av98948772`/`BV1n741127LD`

avid方式：

```shell
curl 'http://api.bilibili.com/x/space/top/arc/set' \
--data-urlencode 'aid=98948772' \
-b 'SESSDATA=xxx'
```

bvid方式：

```shell
curl 'http://api.bilibili.com/x/space/top/arc/set' \
--data-urlencode 'bvid=BV1n741127LD' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

</details>

#### 取消置顶视频

> http://api.bilibili.com/x/space/top/arc/cancel

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名  | 类型  | 内容                   | 必要性 | 备注  |
|------|-----|----------------------|-----|-----|
| csrf | str | CSRF Token（位于cookie） | 必要  |     |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                                                           |
|---------|-----|------|--------------------------------------------------------------|
| code    | num | 返回值  | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误（重复取消） |
| message | str | 错误信息 | 默认为0                                                         |
| ttl     | num | 1    |                                                              |

**示例：**

```shell
curl 'http://api.bilibili.com/x/space/top/arc/cancel' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

</details>

### 代表作视频

#### 查询用户代表作视频列表

> http://api.bilibili.com/x/space/masterpiece

*请求方式：GET*

新访客在其主页上可见

最多可以设置3个

**url参数：**

| 参数名  | 类型  | 内容      | 必要性 | 备注  |
|------|-----|---------|-----|-----|
| vmid | num | 目标用户mid | 必要  |     |

**json回复：**

根对象：

| 字段      | 类型    | 内容    | 备注                  |
|---------|-------|-------|---------------------|
| code    | num   | 返回值   | 0：成功<br />-400：请求错误 |
| message | str   | 错误信息  | 默认为0                |
| ttl     | num   | 1     |                     |
| data    | array | 代表作列表 |                     |

`data`数组：

| 项   | 类型  | 内容   | 备注               |
|-----|-----|------|------------------|
| 0   | obj | 代表作1 | 无则为空             |
| 1   | obj | 代表作2 | 无则为空             |
| 2   | obj | 代表作3 | 无则为空<br />最多设置3个 |

`data`数组中的对象：

同[查询用户置顶视频](#查询用户置顶视频)中的`data`对象

**示例：**

查询用户`mid=23215368`的代表作视频列表

```shell
curl -G 'http://api.bilibili.com/x/space/masterpiece' \
--data-urlencode 'vmid=23215368'
```

<details>
<summary>查看响应示例：</summary>

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

</details>

#### 添加代表作视频

> http://api.bilibili.com/x/space/masterpiece/add

*请求方式：POST*

认证方式：Cookie（SESSDATA）

代表作上限为3个稿件

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名    | 类型  | 内容                   | 必要性    | 备注                   |
|--------|-----|----------------------|--------|----------------------|
| aid    | num | 置顶目标稿件avid           | 必要（可选） | avid与bvid任选一个        |
| bvid   | str | 置顶目标稿件bvid           | 必要（可选） | avid与bvid任选一个        |
| reason | str | 代表作备注                | 非必要    | 置顶备注最大40字符<br />默认为空 |
| csrf   | str | CSRF Token（位于cookie） | 必要     |                      |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                                                                                                                                             |
|---------|-----|------|------------------------------------------------------------------------------------------------------------------------------------------------|
| code    | num | 返回值  | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />53014：稿件已失效<br />53015：备注过长<br />53017：置顶非自己的稿件<br />53019：达到上限<br />53020：已经存在该稿件 |
| message | str | 错误信息 | 默认为0                                                                                                                                           |
| ttl     | num | 1    |                                                                                                                                                |

**示例：**

添加视频`av94916552`/`BV1ZE411K7ux`到代表作列表

avid方式：

```shell
curl 'http://api.bilibili.com/x/space/masterpiece/add' \
--data-urlencode 'aid=94916552' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

bvid方式：

```shell
curl 'http://api.bilibili.com/x/space/masterpiece/add' \
--data-urlencode 'bvid=BV1ZE411K7ux' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

</details>

#### 删除代表作视频

> http://api.bilibili.com/x/space/masterpiece/cancel

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名  | 类型  | 内容                   | 必要性    | 备注            |
|------|-----|----------------------|--------|---------------|
| aid  | num | 要删除的目标稿件avid         | 必要（可选） | avid与bvid任选一个 |
| bvid | str | 要删除的目标稿件bvid         | 必要（可选） | avid与bvid任选一个 |
| csrf | str | CSRF Token（位于cookie） | 必要     |               |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                                                                           |
|---------|-----|------|------------------------------------------------------------------------------|
| code    | num | 返回值  | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />53021：置顶列表中没有该视频 |
| message | str | 错误信息 | 默认为0                                                                         |
| ttl     | num | 1    | 作用尚不明确                                                                       |

**示例：**

删除置顶视频`av59765630`/`BV1Yt41137T6`

avid方式：

```shell
curl 'api.bilibili.com/x/space/masterpiece/cancel' \
--data-urlencode 'aid=59765630' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

bvid方式：

```shell
curl 'http://api.bilibili.com/x/space/masterpiece/cancel' \
--data-urlencode 'bvid=BV1Yt41137T6' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

### 个人TAG

#### 查看用户个人TAG

> http://api.bilibili.com/x/space/acc/tags

*请求方式：GET*

上限5条，且内容由用户自定义

带有转义

**url参数：**

| 参数名 | 类型  | 内容      | 必要性 | 备注  |
|-----|-----|---------|-----|-----|
| mid | num | 目标用户mid | 必要  |     |

**json回复：**

根对象：

| 字段      | 类型    | 内容   | 备注                  |
|---------|-------|------|---------------------|
| code    | num   | 返回值  | 0：成功<br />-400：请求错误 |
| message | str   | 错误信息 | 默认为0                |
| ttl     | num   | 1    |                     |
| data    | array | 信息本体 |                     |

`data`数组：

| 项   | 类型  | 内容   | 备注      |
|-----|-----|------|---------|
| 0   | obj | 套了个娃 | 只有1项？？？ |

`data`数组中的对象：

| 字段   | 类型    | 内容      | 备注  |
|------|-------|---------|-----|
| mid  | num   | 目标用户mid |     |
| tags | array | TAG名称   |     |

`data`数组中的对象中的`tags`数组：

| 项   | 类型  | 内容       | 备注   |
|-----|-----|----------|------|
| 0   | str | TAG1     |      |
| n   | str | TAG(n+1) |      |
| ……  | str | ……       |      |
| 4   | str | TAG5     | 上限5条 |

**示例：**

查看用户`mid=53456`的个人TAG

```shell
curl -G 'http://api.bilibili.com/x/space/acc/tags' \
--data-urlencode 'mid=53456'
```

<details>
<summary>查看响应示例：</summary>

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

</details>

#### 修改个人TAG

> http://api.bilibili.com/x/space/acc/tags/set

*请求方式：POST*

认证方式：Cookie（SESSDATA）

鉴权方式：Cookie中`DedeUserID`存在且不为0

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名  | 类型   | 内容                   | 必要性 | 备注                                                                             |
|------|------|----------------------|-----|--------------------------------------------------------------------------------|
| tags | strs | 要设置的TAG内容            | 非必要 | 删除公告留空或省去即可<br />各TAG长度小于10字符<br />最多5个TAG<br />各TAG之间用","(%2C)分隔<br />重复TAG无效 |
| csrf | str  | CSRF Token（位于cookie） | 必要  |                                                                                |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                                                             |
|---------|-----|------|----------------------------------------------------------------|
| code    | num | 返回值  | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误（超出长度限制） |
| message | str | 错误信息 | 默认为0                                                           |
| ttl     | num | 1    |                                                                |

**示例：**

修改个人TAG为`minecraft,技术宅,大佬,小哥哥,可爱`

```shell
curl 'http://api.bilibili.com/x/space/acc/tags/set' \
--data-urlencode 'tags=minecraft,技术宅,大佬,小哥哥,可爱' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx;DedeUserID=1'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

</details>

### 空间公告

#### 查看用户空间公告

> http://api.bilibili.com/x/space/notice

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | num  | 目标用户mid | 必要   |      |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                  |
|---------|-----|------|---------------------|
| code    | num | 返回值  | 0：成功<br />-400：请求错误 |
| message | str | 错误信息 | 默认为0                |
| ttl     | num | 1    |                     |
| data    | str | 公告信息 | 无则为空                |

**示例：**

查看用户`mid=53456`的空间公告

```shell
curl -G 'http://api.bilibili.com/x/space/notice' \
--data-urlencode 'mid=53456'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code":0,
    "message":"0",
    "ttl":1,
    "data":"我的微博 @_warma_\n直播录像上传到：warma养鸽场\n头像画师是：微博@Dr-H_喵_\n横幅画师：@薬屋"
}
```

</details>

#### 修改空间公告

> http://api.bilibili.com/x/space/notice/set

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名    | 类型  | 内容                   | 必要性 | 备注                       |
|--------|-----|----------------------|-----|--------------------------|
| notice | str | 要设置的公告内容             | 非必要 | 删除公告留空或省去即可<br />少于150字符 |
| csrf   | str | CSRF Token（位于cookie） | 必要  |                          |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                                                                           |
|---------|-----|------|------------------------------------------------------------------------------|
| code    | num | 返回值  | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-304：未修改<br />-400：请求错误（超出长度限制） |
| message | str | 错误信息 | 默认为0                                                                         |
| ttl     | num | 1    | 作用尚不明确                                                                       |

**示例：**

修改个人空间公告为`鸽子`

```shell
curl 'http://api.bilibili.com/x/space/notice/set' \
--data-urlencode 'notice=鸽子' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

</details>

### 主页板块布局与权限

#### 查询空间设置

> http://space.bilibili.com/ajax/settings/getSettings

*请求方式：GET*

注：带有转义

**url参数：**

| 参数名 | 类型  | 内容      | 必要性 | 备注  |
|-----|-----|---------|-----|-----|
| mid | num | 目标用户mid | 必要  |     |

**json回复：**

根对象：

| 字段     | 类型                      | 内容                        | 备注                   |
|--------|-------------------------|---------------------------|----------------------|
| status | bool                    | 用户是否存在                    | true：存在<br>false：不存在 |
| data   | 用户存在时：obj<br>用户不存在时：str | 用户存在时：信息本体<br>用户不存在时：错误信息 |                      |

`data`对象：

| 字段                     | 类型    | 内容         | 备注     |
|------------------------|-------|------------|--------|
| privacy                | obj   | 空间隐私权限     |        |
| index_order            | array | 空间板块布局     |        |
| theme                  | str   | default主题？ | 作用尚不明确 |
| theme_preview_img_path | str   | 主题预览图路径？   | 作用尚不明确 |
| toutu                  | obj   | 空间头图       |        |

`privacy`对象：

| 字段          | 类型  | 内容      | 备注                     |
|-------------|-----|---------|------------------------|
| bangumi     | num | 追番及追剧   | 0：隐藏<br>1：公开<br>**下同** |
| bbq         | num | 轻视频     |                        |
| channel     | num | 频道      |                        |
| coins_video | num | 最近投币的视频 |                        |
| comic       | num | 追漫      |                        |
| dress_up    | num | 装扮      |                        |
| fav_video   | num | 收藏夹     |                        |
| groups      | num | 圈子？     | 作用尚不明确                 |
| likes_video | num | 最近点赞的视频 |                        |
| played_game | num | 最近玩过的游戏 |                        |
| tags        | num | 订阅标签    |                        |
| user_info   | num | 个人资料    |                        |

`index_order`数组：

| 项   | 类型  | 内容      | 备注                       |
|-----|-----|---------|--------------------------|
| 0   | obj | 板块1     | 根据板块布局顺序排序<br>先左侧布局后右侧布局 |
| n   | obj | 板块(n+1) |                          |
| ……  | obj | ……      | ……                       |

`index_order`数组内对象：

| 字段   | 类型  | 内容   | 备注  |
|------|-----|------|-----|
| id   | num | 板块编号 |     |
| name | str | 板块名称 |     |

`toutu`对象：

| 字段            | 类型  | 内容         | 备注                                |
|---------------|-----|------------|-----------------------------------|
| sid           | num | 空间头图ID     |                                   |
| expire        | num | 到期时间？      | 时间戳？<br />作用尚不明确                  |
| s_img         | str | 空间头图小图相对路径 | 完整url为`http://i0.hdslb.com/`+相对路径 |
| l_img         | str | 空间头图相对路径   | **同上**                            |
| android_img   | str | 空          | 注：**手机端头图与web端不同，需要用另一个api获取**    |
| iphone_img    | str | 空          |                                   |
| ipad_img      | str | 空          |                                   |
| thumbnail_img | str | 缩略图        |                                   |
| platform      | num | 0          | 作用尚不明确                            |

**示例：**

查看`mid=2`的空间设置

```shell
curl -G 'http://space.bilibili.com/ajax/settings/getSettings' \
--data-urlencode 'mid=2'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "status":true,
    "data":{
        "privacy":{
            "bangumi":1,
            "bbq":1,
            "channel":1,
            "coins_video":0,
            "comic":1,
            "dress_up":1,
            "fav_video":0,
            "groups":0,
            "likes_video":0,
            "played_game":1,
            "tags":1,
            "user_info":1
        },
        "index_order":[
            {
                "id":1,
                "name":"我的稿件"
            },
            {
                "id":8,
                "name":"我的专栏"
            },
            {
                "id":7,
                "name":"我的频道"
            },
            {
                "id":2,
                "name":"我的收藏夹"
            },
            {
                "id":3,
                "name":"订阅番剧"
            },
            {
                "id":4,
                "name":"订阅标签"
            },
            {
                "id":5,
                "name":"最近投币的视频"
            },
            {
                "id":6,
                "name":"我的圈子"
            },
            {
                "id":9,
                "name":"我的相簿"
            },
            {
                "id":21,
                "name":"公告"
            },
            {
                "id":22,
                "name":"直播间"
            },
            {
                "id":23,
                "name":"个人资料"
            },
            {
                "id":24,
                "name":"官方活动"
            },
            {
                "id":25,
                "name":"最近玩过的游戏"
            }
        ],
        "theme":"default",
        "theme_preview_img_path":"",
        "toutu":{
            "sid":1,
            "expire":2861874560,
            "s_img":"bfs/space/768cc4fd97618cf589d23c2711a1d1a729f42235.png",
            "l_img":"bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png",
            "android_img":"",
            "iphone_img":"",
            "ipad_img":"",
            "thumbnail_img":"",
            "platform":0
        }
    }
}
```

</details>

#### 调整空间板块布局

> http://space.bilibili.com/ajax/settings/setIndexOrder

*请求方式：POST*

认证方式：Cookie（SESSDATA）

鉴权方式：Cookie中`DedeUserID`及`DedeUserID__ckMd5`存在且不为0，referer为 `.bilibili.com`域名下

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名         | 类型   | 内容                   | 必要性 | 备注                                            |
|-------------|------|----------------------|-----|-----------------------------------------------|
| index_order | nums | 布局列表                 | 必要  | 每个值之间用","（%2C）分隔<br />先左侧布局再右侧布局<br />值的意义见下表 |
| csrf        | str  | CSRF Token（位于cookie） | 必要  |                                               |

布局参数`index_order`：

| 值   | 含义                   |
|-----|----------------------|
| 1   | （左侧）我的稿件             |
| 2   | （左侧）我的收藏夹            |
| 3   | （左侧）订阅番剧             |
| 4   | （左侧）订阅标签             |
| 5   | （左侧）最近投币的视频          |
| 6   | （左侧）我的圈子**（此板块被隐藏）** |
| 7   | （左侧）我的频道             |
| 8   | （左侧）我的专栏             |
| 9   | （左侧）我的相簿             |
| 21  | （右侧）公告               |
| 22  | （右侧）直播间              |
| 23  | （右侧）个人资料             |
| 24  | （右侧）官方活动             |
| 25  | （右侧）最近玩的游戏           |

**json回复：**

根对象：

| 字段     | 类型   | 内容   | 备注                        |
|--------|------|------|---------------------------|
| ststus | bool | 操作结果 | true：操作成功<br />false：操作失败 |
| data   | str  | 错误信息 | 正确时无此项                    |

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
curl 'http://space.bilibili.com/ajax/settings/setIndexOrder' \
--data-urlencode 'index_order=1,8,3,2,9,5,4,7,22,23,21,24,25,6' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx;DedeUserID=1;DedeUserID__ckMd5=1;' \
-e 'https://www.bilibili.com'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "status": true
}
```

</details>

#### 修改空间隐私权限

> http://space.bilibili.com/ajax/settings/setPrivacy

*请求方式：POST*

认证方式：Cookie（SESSDATA）

鉴权方式：Cookie中`DedeUserID`及`DedeUserID__ckMd5`存在且不为0，referer为 `.bilibili.com`域名下

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名         | 类型   | 内容                   | 必要性 | 备注                         |
|-------------|------|----------------------|-----|----------------------------|
| fav_video   | num  | 收藏视频                 | 非必要 | 0：隐藏<br />1：公开<br />**下同** |
| bangumi     | num  | 追番及追剧                | 非必要 |                            |
| tags        | num  | 关注的TAG               | 非必要 |                            |
| coins_video | num  | 投币的视频                | 非必要 |                            |
| user_info   | num  | 个人信息                 | 非必要 |                            |
| played_game | num  | 玩过的游戏                | 非必要 |                            |
| csrf        | nstr | CSRF Token（位于cookie） | 必要  |                            |

**json回复：**

根对象：

| 字段     | 类型   | 内容   | 备注                        |
|--------|------|------|---------------------------|
| ststus | bool | 操作结果 | true：操作成功<br />false：操作失败 |
| data   | str  | 错误信息 | 正确时无此项                    |

**示例：**

设置`关注的TAG`为隐藏

```shell
curl 'http://space.bilibili.com/ajax/settings/setPrivacy' \
--data-urlencode 'tags=0' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx;DedeUserID=1;DedeUserID__ckMd5=1;' \
-e 'https://www.bilibili.com'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "status": true
}
```

</details>

### 查询用户最近玩过的游戏

> http://api.bilibili.com/x/space/lastplaygame

*请求方式：GET*

**url参数：**

| 参数名 | 类型  | 内容      | 必要性 | 备注  |
|-----|-----|---------|-----|-----|
| mid | num | 目标用户mid | 必要  |     |

**json回复：**

根对象：

| 字段      | 类型                      | 内容   | 备注                                       |
|---------|-------------------------|------|------------------------------------------|
| code    | num                     | 返回值  | 0：成功<br />-400：请求错误<br />53013：用户隐私设置未公开 |
| message | str                     | 错误信息 | 默认为0                                     |
| ttl     | num                     | 1    |                                          |
| data    | 隐藏时：null<br />公开时：array | 信息本体 |                                          |

`data`数组：

| 项   | 类型  | 内容      | 备注       |
|-----|-----|---------|----------|
| 0   | obj | 游戏1     |          |
| n   | obj | 游戏(n+1) | 项数为总计游戏数 |
| ……  | obj | ……      | ……       |

`data`数组中的对象：

| 字段      | 类型  | 内容        | 备注  |
|---------|-----|-----------|-----|
| website | str | 游戏主页链接url |     |
| image   | str | 游戏图片url   |     |
| name    | str | 游戏名       |     |

**示例：**

查询`mid=2`的最近玩过的游戏

```shell
curl -G 'http://api.bilibili.com/x/space/lastplaygame' \
--data-urlencode 'mid=2'
```

<details>
<summary>查看响应示例：</summary>

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

</details>

### 获取用户最近投币的视频明细

> http://api.bilibili.com/x/space/coin/video

*请求方式：GET*

认证方式：Cookie（SESSDATA）

如设置隐私查看自己的需要认证 仅包含最近投币的20个视频，如超过指定时间未投币（也许一个月），列表将为空

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| vmid   | num  | 目标用户mid | 必要   |      |

**json回复：**

根对象：

| 字段      | 类型                      | 内容   | 备注                                       |
|---------|-------------------------|------|------------------------------------------|
| code    | num                     | 返回值  | 0：成功<br />-400：请求错误<br />53013：用户隐私设置未公开 |
| message | str                     | 错误信息 | 默认为0                                     |
| ttl     | num                     | 1    |                                          |
| data    | 隐藏时：null<br />公开时：array | 信息本体 |                                          |

`data`数组：

| 项   | 类型  | 内容        | 备注  |
|-----|-----|-----------|-----|
| 0   | obj | 投币视频1     |     |
| n   | obj | 投币视频（n+1） |     |
| ……  | obj | ……        |     |

`data`数组中的对象：

基本同[获取视频详细信息（web端）](/video/info.md#获取视频详细信息（web端）)中的data对象

**示例：**

查看用户`mid=15858903`的最近投币视频

```shell
curl -L -X GET 'http://api.bilibili.com/x/space/coin/video?vmid=15858903'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": [
    {
      "aid": 259434557,
      "videos": 1,
      "tid": 218,
      "tname": "喵星人",
      "copyright": 1,
      "pic": "http://i2.hdslb.com/bfs/archive/47d46ad72bf1898ebbfe7d82a9d972d4b53e61fc.jpg",
      "title": "42度在家造溜冰场降温，猫上去直呼脚滑！",
      "pubdate": 1660361400,
      "ctime": 1660361407,
      "desc": "刚开始真的觉得很难，不可能，学会理论知识后觉得，就这？太简单了，所以随便做做是成立的。就是学费有点贵，1w多……，我现在空调随便修！希望日后修空调能把这钱在挣回来！（溜冰场上期指路：BV1ga411f79y）\n萌宠区手工up主往期发明指路： \n猫力跑步发电机：BV1iy4y1a7Cb \n电动撸毛器：BV1H64y1v7gq\n戒烟头盔：BV1H64y1k7tz \n猫热能暖床器：BV1xF411i7tw \n全透明赏猫床：BV1Qb4y1C7sn \n写不完啦 还有很多，就要靠各位慢慢挖掘啦！",
      "state": 0,
      "duration": 501,
      "mission_id": 859937,
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
        "mid": 20951119,
        "name": "蒂姆嘟嘟Tim",
        "face": "http://i1.hdslb.com/bfs/face/9860c4c559fd2517b1fa92e592d3d71b95bb3ec2.jpg"
      },
      "stat": {
        "aid": 259434557,
        "view": 1403311,
        "danmaku": 5762,
        "reply": 1295,
        "favorite": 26633,
        "coin": 100847,
        "share": 4502,
        "now_rank": 0,
        "his_rank": 64,
        "like": 130944,
        "dislike": 0
      },
      "dynamic": "猫确实会两条腿滑冰！猫和老鼠诚不欺我",
      "cid": 800970167,
      "dimension": {
        "width": 1920,
        "height": 1080,
        "rotate": 0
      },
      "season_id": 3702,
      "short_link_v2": "https://b23.tv/BV1wa411Z77n",
      "first_frame": "http://i0.hdslb.com/bfs/storyff/n220812a228chhkmeci9f0hizo6ivhzv_firsti.jpg",
      "pub_location": "上海",
      "bvid": "BV1wa411Z77n",
      "coins": 2,
      "time": 1662182649,
      "ip": "",
      "inter_video": false,
      "resource_type": "ugc",
      "subtitle": ""
    }
  ]
}
```

</details>

### 获取用户最近点赞的视频明细

> http://api.bilibili.com/x/space/like/video

*请求方式：GET*

认证方式：Cookie（SESSDATA）

如设置隐私查看自己的需要认证 仅包含最近点赞的20个视频，也可能为空

**url参数：**

| 参数名  | 类型  | 内容      | 必要性 | 备注  |
|------|-----|---------|-----|-----|
| vmid | num | 目标用户mid | 必要  |     |

**json回复：**

根对象：

| 字段      | 类型                      | 内容   | 备注                                       |
|---------|-------------------------|------|------------------------------------------|
| code    | num                     | 返回值  | 0：成功<br />-400：请求错误<br />53013：用户隐私设置未公开 |
| message | str                     | 错误信息 | 默认为0                                     |
| ttl     | num                     | 1    |                                          |
| data    | 隐藏时：null<br />公开时：array | 信息本体 |                                          |

`data`数组：

| 项   | 类型  | 内容        | 备注  |
|-----|-----|-----------|-----|
| 0   | obj | 点赞视频1     |     |
| n   | obj | 点赞视频（n+1） |     |
| ……  | obj | ……        |     |

`data`数组中的对象：

基本同[获取视频详细信息(web端)](/video/info.md#获取视频详细信息(web端))中的data对象

**示例：**

查看用户`mid=15858903`的最近投币视频

```shell
curl -L -X GET 'http://api.bilibili.com/x/space/like/video?vmid=15858903'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "list": [
      {
        "aid": 53516907,
        "videos": 1,
        "tid": 26,
        "tname": "音MAD",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/3653400bb9a5996c9f0702d20fc431210dca0c5e.jpg",
        "title": "喵内我回来了Brain Power",
        "pubdate": 1558756227,
        "ctime": 1558756227,
        "desc": "在准备一个合作，所以一直没更新，O-oooooooooo AAAAE-A-A-I-A-U- JO-oooooooooooo AAE-O-A-A-U-U-A- E-eee-ee-eee AAAAE-A-E-I-E-A- JO-ooo-oo-oo-oo EEEEO-A-AAA-AAAA",
        "state": 0,
        "duration": 48,
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
          "mid": 12466098,
          "name": "不知道4576",
          "face": "http://i0.hdslb.com/bfs/face/1361b4a2e686e9efa89fc0f1024985d0c44345c6.jpg"
        },
        "stat": {
          "aid": 53516907,
          "view": 125484,
          "danmaku": 258,
          "reply": 441,
          "favorite": 4268,
          "coin": 3132,
          "share": 859,
          "now_rank": 0,
          "his_rank": 0,
          "like": 5767,
          "dislike": 0
        },
        "dynamic": "#BRAIN POWER##音MAD##天使降临到我身边#",
        "cid": 93639076,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1V4411s7Qr",
        "bvid": "BV1V4411s7Qr",
        "inter_video": false,
        "resource_type": "ugc",
        "subtitle": ""
      },
      {
        "aid": 557851916,
        "videos": 1,
        "tid": 122,
        "tname": "野生技能协会",
        "copyright": 2,
        "pic": "http://i1.hdslb.com/bfs/archive/fea0d9efa7e2dc8cd9960bd466f78b2ed84d907d.jpg",
        "title": "请问：「宁可在屎山上不断堆代码，也不愿意优化项目需求」❓",
        "pubdate": 1662441923,
        "ctime": 1662441923,
        "desc": "https://fishc.com.cn/thread-217312-1-1.html\n⬆️关于产品迭代的3个关键⬆️",
        "state": 0,
        "duration": 312,
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
          "mid": 314076440,
          "name": "鱼C-小甲鱼",
          "face": "http://i2.hdslb.com/bfs/face/4543ce186f9b74e60a85e66c010187bd3be3d0e1.jpg"
        },
        "stat": {
          "aid": 557851916,
          "view": 89834,
          "danmaku": 245,
          "reply": 164,
          "favorite": 490,
          "coin": 265,
          "share": 570,
          "now_rank": 0,
          "his_rank": 0,
          "like": 1601,
          "dislike": 0
        },
        "dynamic": "【遇山开路 逢水搭桥】超完美产品是如何「迭代」出来的❓",
        "cid": 825277912,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "season_id": 4830,
        "short_link_v2": "https://b23.tv/BV1pe4y1C7XD",
        "up_from_v2": 20,
        "first_frame": "http://i0.hdslb.com/bfs/storyff/n220906qn22r4a6hff6vie1bodoftvgi_firsti.jpg",
        "pub_location": "广东",
        "bvid": "BV1pe4y1C7XD",
        "inter_video": false,
        "resource_type": "ugc",
        "subtitle": ""
      },
      {
        "aid": 730007618,
        "videos": 1,
        "tid": 27,
        "tname": "综合",
        "copyright": 1,
        "pic": "http://i0.hdslb.com/bfs/archive/1f65fd131db7eb81fd270e6ccb7257b68dfd60c4.jpg",
        "title": "细！《猫和老鼠》中的小穿帮竟然有这么多！画师偷懒？",
        "pubdate": 1661862565,
        "ctime": 1661862565,
        "desc": "BGM：超级马里奥世界\n            匈牙利狂想曲-李斯特\n            Used to-James Carter",
        "state": 0,
        "duration": 338,
        "mission_id": 779615,
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
          "mid": 38968617,
          "name": "大福咕咕",
          "face": "http://i0.hdslb.com/bfs/face/e4a00d5409f1888c10e7382bf15df0fbd9f78ae8.jpg"
        },
        "stat": {
          "aid": 730007618,
          "view": 8052558,
          "danmaku": 6994,
          "reply": 1905,
          "favorite": 181436,
          "coin": 113827,
          "share": 5447,
          "now_rank": 0,
          "his_rank": 2,
          "like": 698492,
          "dislike": 0
        },
        "dynamic": "考虑到广大朋友们要开学了 直接提前更新！",
        "cid": 819285197,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "season_id": 371093,
        "short_link_v2": "https://b23.tv/BV1kD4y1672t",
        "first_frame": "http://i2.hdslb.com/bfs/storyff/n220830a238owa0pg6docs2wak8t6tg2_firsti.jpg",
        "pub_location": "北京",
        "bvid": "BV1kD4y1672t",
        "inter_video": false,
        "resource_type": "ugc",
        "subtitle": ""
      },
      {
        "aid": 886537437,
        "videos": 2,
        "tid": 22,
        "tname": "鬼畜调教",
        "copyright": 1,
        "pic": "http://i0.hdslb.com/bfs/archive/db9314a8b2730ee95cb9cac7fc5054c770ea9c9f.jpg",
        "title": "电棍：向♿奔去(修复版)",
        "pubdate": 1612420280,
        "ctime": 1612420280,
        "desc": "原作@_Karasu_ \n拙劣的模仿 歌词有修改",
        "state": 0,
        "duration": 448,
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
          "mid": 12771348,
          "name": "DJRicher",
          "face": "http://i0.hdslb.com/bfs/face/4a033640048238cb039add4e064804e227e87082.jpg"
        },
        "stat": {
          "aid": 886537437,
          "view": 8790816,
          "danmaku": 11516,
          "reply": 50330,
          "favorite": 106746,
          "coin": 157098,
          "share": 66553,
          "now_rank": 0,
          "his_rank": 0,
          "like": 155180,
          "dislike": 0
        },
        "dynamic": "",
        "cid": 312766707,
        "dimension": {
          "width": 1280,
          "height": 720,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1vK4y1p7F5",
        "bvid": "BV1vK4y1p7F5",
        "inter_video": false,
        "resource_type": "ugc",
        "subtitle": ""
      },
      {
        "aid": 514421957,
        "videos": 1,
        "tid": 21,
        "tname": "日常",
        "copyright": 2,
        "pic": "http://i2.hdslb.com/bfs/archive/8570e2264c585ec47fa2f90f0fb41fcbe24082c1.jpg",
        "title": "女子“巨乳症” 至Q杯，医生切除26斤赘乳",
        "pubdate": 1660436958,
        "ctime": 1660436958,
        "desc": "网络",
        "state": 0,
        "duration": 157,
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
          "no_background": 0,
          "arc_pay": 0,
          "pay_free_watch": 0
        },
        "owner": {
          "mid": 153362257,
          "name": "微胖委员会",
          "face": "http://i1.hdslb.com/bfs/face/7bce12b8b5fef2f31d215dec94fc5fc18cdd41a2.jpg"
        },
        "stat": {
          "aid": 514421957,
          "view": 1863705,
          "danmaku": 1357,
          "reply": 2953,
          "favorite": 3091,
          "coin": 95,
          "share": 25867,
          "now_rank": 0,
          "his_rank": 0,
          "like": 16315,
          "dislike": 0
        },
        "dynamic": "",
        "cid": 802910768,
        "dimension": {
          "width": 1280,
          "height": 720,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1xg411k7L1",
        "up_from_v2": 8,
        "first_frame": "http://i1.hdslb.com/bfs/storyff/n220814qn1cm2zo6jetqmu2nvlcxssy1_firsti.jpg",
        "pub_location": "江苏",
        "bvid": "BV1xg411k7L1",
        "inter_video": false,
        "resource_type": "ugc",
        "subtitle": ""
      },
      {
        "aid": 259434557,
        "videos": 1,
        "tid": 218,
        "tname": "喵星人",
        "copyright": 1,
        "pic": "http://i2.hdslb.com/bfs/archive/47d46ad72bf1898ebbfe7d82a9d972d4b53e61fc.jpg",
        "title": "42度在家造溜冰场降温，猫上去直呼脚滑！",
        "pubdate": 1660361400,
        "ctime": 1660361407,
        "desc": "刚开始真的觉得很难，不可能，学会理论知识后觉得，就这？太简单了，所以随便做做是成立的。就是学费有点贵，1w多……，我现在空调随便修！希望日后修空调能把这钱在挣回来！（溜冰场上期指路：BV1ga411f79y）\n萌宠区手工up主往期发明指路： \n猫力跑步发电机：BV1iy4y1a7Cb \n电动撸毛器：BV1H64y1v7gq\n戒烟头盔：BV1H64y1k7tz \n猫热能暖床器：BV1xF411i7tw \n全透明赏猫床：BV1Qb4y1C7sn \n写不完啦 还有很多，就要靠各位慢慢挖掘啦！",
        "state": 0,
        "duration": 501,
        "mission_id": 859937,
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
          "mid": 20951119,
          "name": "蒂姆嘟嘟Tim",
          "face": "http://i1.hdslb.com/bfs/face/9860c4c559fd2517b1fa92e592d3d71b95bb3ec2.jpg"
        },
        "stat": {
          "aid": 259434557,
          "view": 1403315,
          "danmaku": 5762,
          "reply": 1295,
          "favorite": 26633,
          "coin": 100847,
          "share": 4502,
          "now_rank": 0,
          "his_rank": 64,
          "like": 130944,
          "dislike": 0
        },
        "dynamic": "猫确实会两条腿滑冰！猫和老鼠诚不欺我",
        "cid": 800970167,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "season_id": 3702,
        "short_link_v2": "https://b23.tv/BV1wa411Z77n",
        "first_frame": "http://i0.hdslb.com/bfs/storyff/n220812a228chhkmeci9f0hizo6ivhzv_firsti.jpg",
        "pub_location": "上海",
        "bvid": "BV1wa411Z77n",
        "inter_video": false,
        "resource_type": "ugc",
        "subtitle": ""
      },
      {
        "aid": 765765040,
        "videos": 1,
        "tid": 26,
        "tname": "音MAD",
        "copyright": 1,
        "pic": "http://i0.hdslb.com/bfs/archive/f92297d237bc330e4c70bd7cb4b6a5988a4a35df.jpg",
        "title": "向 先 辈 奔 去",
        "pubdate": 1642843003,
        "ctime": 1642843003,
        "desc": "远野说大家听不出他的和声所以不愿意来了（迫真）\nBGM：夜に駆ける\nPV：BV1Ph411C7S5\n封面：@十人比白 \n其他作品：\n病 名 为 臭 BV1W3411Y7R3\nHomo KING BV1p3411Y7Qf\n先 辈 の 名 は BV1bF411p7W7\n野兽先辈的消失 BV1XL4y147KK",
        "state": 0,
        "duration": 119,
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
          "mid": 26540403,
          "name": "小王子擎天",
          "face": "http://i0.hdslb.com/bfs/face/70723d05c4fcd3af47ac7e453bee06feea48b804.jpg"
        },
        "stat": {
          "aid": 765765040,
          "view": 125123,
          "danmaku": 168,
          "reply": 384,
          "favorite": 3518,
          "coin": 878,
          "share": 858,
          "now_rank": 0,
          "his_rank": 0,
          "like": 6224,
          "dislike": 0
        },
        "dynamic": "",
        "cid": 490015078,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "season_id": 185827,
        "short_link_v2": "https://b23.tv/BV19r4y1Y7De",
        "first_frame": "http://i1.hdslb.com/bfs/storyff/n220122a26mtv7cs4x1ga3329ew4cqhb_firsti.jpg",
        "bvid": "BV19r4y1Y7De",
        "inter_video": false,
        "resource_type": "ugc",
        "subtitle": ""
      },
      {
        "aid": 599348400,
        "videos": 1,
        "tid": 218,
        "tname": "喵星人",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/6c0b56f7b2a378e32c40c2ec7cf4a34cf6e42ad2.jpg",
        "title": "打开前请先降低音量哦！！",
        "pubdate": 1660007700,
        "ctime": 1660007701,
        "desc": "日常投食小猫咪\n视频里的是两个窝次的15只崽崽\n5月30日和6月1日出生\nliliya和Tessa的宝宝",
        "state": 0,
        "duration": 203,
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
          "mid": 43099315,
          "name": "颖姥姥的小猪喵",
          "face": "http://i1.hdslb.com/bfs/face/6261098e074624891f5f1cdf35b4df64401c4307.jpg"
        },
        "stat": {
          "aid": 599348400,
          "view": 5611104,
          "danmaku": 14300,
          "reply": 8180,
          "favorite": 122270,
          "coin": 45195,
          "share": 126333,
          "now_rank": 0,
          "his_rank": 5,
          "like": 536114,
          "dislike": 0
        },
        "dynamic": "日常投食小猫咪\n视频里的是两个窝次的15只崽崽\n5月30日和6月1日出生\nliliya和Tessa的宝宝",
        "cid": 797762429,
        "dimension": {
          "width": 1080,
          "height": 1920,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1cB4y167B8",
        "up_from_v2": 9,
        "first_frame": "http://i1.hdslb.com/bfs/storyff/n220809a2ku7vu7oisum1632zs07p7dg_firsti.jpg",
        "pub_location": "山东",
        "bvid": "BV1cB4y167B8",
        "inter_video": false,
        "resource_type": "ugc",
        "subtitle": ""
      },
      {
        "aid": 472194944,
        "videos": 1,
        "tid": 162,
        "tname": "绘画",
        "copyright": 1,
        "pic": "http://i2.hdslb.com/bfs/archive/aee4307632ecad127f60ae556cc5981f1a329c15.jpg",
        "title": "有些画，不需要太清晰",
        "pubdate": 1660817303,
        "ctime": 1660817303,
        "desc": "先画个狗头保命",
        "state": 0,
        "duration": 147,
        "mission_id": 761022,
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
          "mid": 28330240,
          "name": "叶无趣",
          "face": "http://i1.hdslb.com/bfs/face/9416d6dd723d271bdd805ccf2e44dc47436c5a07.jpg"
        },
        "stat": {
          "aid": 472194944,
          "view": 2378719,
          "danmaku": 6517,
          "reply": 2815,
          "favorite": 33778,
          "coin": 24411,
          "share": 11461,
          "now_rank": 0,
          "his_rank": 0,
          "like": 209110,
          "dislike": 0
        },
        "dynamic": "",
        "cid": 807922809,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1DT411c7AD",
        "first_frame": "http://i1.hdslb.com/bfs/storyff/n220819a213lvuk7uqfgh91m9lv1esx1_firsti.jpg",
        "pub_location": "湖南",
        "bvid": "BV1DT411c7AD",
        "inter_video": false,
        "resource_type": "ugc",
        "subtitle": ""
      },
      {
        "aid": 599779624,
        "videos": 1,
        "tid": 173,
        "tname": "桌游棋牌",
        "copyright": 1,
        "pic": "http://i0.hdslb.com/bfs/archive/70800347ccbd019b678b41318c203b8fecb9aaec.jpg",
        "title": "【雀魂汪汪录】第196期 谁能给我翻译翻译 什么叫做惊喜",
        "pubdate": 1661394900,
        "ctime": 1661252218,
        "desc": "BGM可以通过网易云搜索【雀魂汪汪录BGM】就可以找到啦！\n雀魂汪汪录 周四中午见\n微博 @雀魂麻将majsoul\n——————————————————————————\n想要投稿的玩家~务必请通过邮箱来进行投稿~【请不要在评论区或是私信投稿，谢谢】\n邮箱地址：tg@catfoodstudio.com\n投稿最少需要注明【局目、内容、牌谱链接】哦！",
        "state": 0,
        "duration": 575,
        "mission_id": 808212,
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
          "mid": 353240497,
          "name": "雀魂麻将majsoul",
          "face": "http://i1.hdslb.com/bfs/face/053f02d2a7eb96884b1020ca20d6d02241df6099.jpg"
        },
        "stat": {
          "aid": 599779624,
          "view": 187150,
          "danmaku": 1958,
          "reply": 516,
          "favorite": 342,
          "coin": 787,
          "share": 646,
          "now_rank": 0,
          "his_rank": 0,
          "like": 7429,
          "dislike": 0
        },
        "dynamic": "#雀魂# #雀魂汪汪录# #立直麻将#",
        "cid": 812183140,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "season_id": 2739,
        "short_link_v2": "https://b23.tv/BV1aB4y1z74J",
        "first_frame": "http://i0.hdslb.com/bfs/storyff/n220823qn266np8ftodq2t2m2paam9xj_firsti.jpg",
        "pub_location": "上海",
        "bvid": "BV1aB4y1z74J",
        "inter_video": false,
        "resource_type": "ugc",
        "subtitle": ""
      },
      {
        "aid": 685619632,
        "videos": 1,
        "tid": 17,
        "tname": "单机游戏",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/750b5fabea1ff363d775ba58f95a23b5cb890be9.jpg",
        "title": "多人群峦传说联机3:用木炭炉做出铜溶液，浇筑出铜镐和探矿镐！",
        "pubdate": 1656756676,
        "ctime": 1656756677,
        "desc": "-",
        "state": 0,
        "duration": 268,
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
          "mid": 1771879421,
          "name": "方块局安神",
          "face": "http://i2.hdslb.com/bfs/face/c3781165f41f2b4d99e7beb1356105f624cc424e.jpg"
        },
        "stat": {
          "aid": 685619632,
          "view": 215,
          "danmaku": 0,
          "reply": 2,
          "favorite": 1,
          "coin": 0,
          "share": 0,
          "now_rank": 0,
          "his_rank": 0,
          "like": 8,
          "dislike": 0
        },
        "dynamic": "",
        "cid": 761921385,
        "dimension": {
          "width": 1920,
          "height": 864,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1MU4y1D7ND",
        "up_from_v2": 35,
        "first_frame": "http://i1.hdslb.com/bfs/storyff/n220702qndfrow9p4eq991lyl8em2v9w_firsti.jpg",
        "pub_location": "宁夏",
        "bvid": "BV1MU4y1D7ND",
        "inter_video": false,
        "resource_type": "ugc",
        "subtitle": ""
      },
      {
        "aid": 427974127,
        "videos": 1,
        "tid": 17,
        "tname": "单机游戏",
        "copyright": 1,
        "pic": "http://i0.hdslb.com/bfs/archive/1f81be8fd2eec800e3134f24928b66b75c25a078.jpg",
        "title": "多人群峦传说联机1:开局做出篝火和木炭窑！很快的进入陶器时代！",
        "pubdate": 1656660681,
        "ctime": 1656660682,
        "desc": "-",
        "state": 0,
        "duration": 313,
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
          "mid": 1771879421,
          "name": "方块局安神",
          "face": "http://i2.hdslb.com/bfs/face/c3781165f41f2b4d99e7beb1356105f624cc424e.jpg"
        },
        "stat": {
          "aid": 427974127,
          "view": 186,
          "danmaku": 0,
          "reply": 7,
          "favorite": 1,
          "coin": 2,
          "share": 0,
          "now_rank": 0,
          "his_rank": 0,
          "like": 7,
          "dislike": 0
        },
        "dynamic": "",
        "cid": 760818007,
        "dimension": {
          "width": 1920,
          "height": 864,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1MG411x7Jh",
        "up_from_v2": 35,
        "first_frame": "http://i0.hdslb.com/bfs/storyff/n220701qn3ejknxipb82r1a0hut5chj5_firsti.jpg",
        "pub_location": "宁夏",
        "bvid": "BV1MG411x7Jh",
        "inter_video": false,
        "resource_type": "ugc",
        "subtitle": ""
      },
      {
        "aid": 602112213,
        "videos": 1,
        "tid": 22,
        "tname": "鬼畜调教",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/5edabb39c8ac3a3202111e8e60f8e45b8b3c180d.jpg",
        "title": "你被百度骗了，呵呵",
        "pubdate": 1660561467,
        "ctime": 1660561467,
        "desc": "分区和参与活动真的合理吗（）\n很草的点子\n烂活",
        "state": 0,
        "duration": 62,
        "mission_id": 738105,
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
          "mid": 361685930,
          "name": "啰嗦_Losso",
          "face": "http://i2.hdslb.com/bfs/face/e26253ff660c19fdb953825aef990c30ad08c8dc.jpg"
        },
        "stat": {
          "aid": 602112213,
          "view": 58957,
          "danmaku": 112,
          "reply": 231,
          "favorite": 1401,
          "coin": 514,
          "share": 117,
          "now_rank": 0,
          "his_rank": 0,
          "like": 9353,
          "dislike": 0
        },
        "dynamic": "",
        "cid": 804462941,
        "dimension": {
          "width": 828,
          "height": 1792,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1yB4y1L7iG",
        "first_frame": "http://i1.hdslb.com/bfs/storyff/n220815qn31gxoi0spl1yr35uq27n3u4_firsti.jpg",
        "pub_location": "美国",
        "bvid": "BV1yB4y1L7iG",
        "inter_video": false,
        "resource_type": "ugc",
        "subtitle": ""
      },
      {
        "aid": 856393020,
        "videos": 1,
        "tid": 238,
        "tname": "运动综合",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/d7edbba4eb63bb9ceed978ae46e676cb3fdbaf6a.jpg",
        "title": "极限难度！不碰其他球把45颗球打入洞中！海外知名桌球博主来B站啦！",
        "pubdate": 1659105213,
        "ctime": 1659105213,
        "desc": "",
        "state": 0,
        "duration": 756,
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
          "mid": 1954176521,
          "name": "桌球小哥genipool官方",
          "face": "http://i2.hdslb.com/bfs/face/90ca22fa8c79d0d5042c7c24daf1ec574679a740.jpg"
        },
        "stat": {
          "aid": 856393020,
          "view": 342876,
          "danmaku": 365,
          "reply": 159,
          "favorite": 809,
          "coin": 800,
          "share": 283,
          "now_rank": 0,
          "his_rank": 0,
          "like": 4266,
          "dislike": 0
        },
        "dynamic": "",
        "cid": 788065599,
        "dimension": {
          "width": 1280,
          "height": 720,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV18V4y1E7zo",
        "first_frame": "http://i0.hdslb.com/bfs/storyff/n220729qn15m1fxzexlmvq1j541qvx6r_firsti.jpg",
        "pub_location": "福建",
        "bvid": "BV18V4y1E7zo",
        "inter_video": false,
        "resource_type": "ugc",
        "subtitle": ""
      },
      {
        "aid": 728238452,
        "videos": 1,
        "tid": 232,
        "tname": "科工机械",
        "copyright": 1,
        "pic": "http://i2.hdslb.com/bfs/archive/6613ccabbf0828d0071efbb2351818c3cab62725.jpg",
        "title": "烧脑故障，家庭漏电维修图解",
        "pubdate": 1657075740,
        "ctime": 1657075740,
        "desc": "-",
        "state": 0,
        "duration": 433,
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
          "mid": 1985127693,
          "name": "城阳电工电路",
          "face": "http://i0.hdslb.com/bfs/face/faae5daababbf652d97faedab1a25d78b654fc44.jpg"
        },
        "stat": {
          "aid": 728238452,
          "view": 138664,
          "danmaku": 277,
          "reply": 263,
          "favorite": 681,
          "coin": 601,
          "share": 85,
          "now_rank": 0,
          "his_rank": 0,
          "like": 9567,
          "dislike": 0
        },
        "dynamic": "",
        "cid": 765013281,
        "dimension": {
          "width": 1080,
          "height": 1920,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV12S4y1E7rt",
        "up_from_v2": 8,
        "first_frame": "http://i2.hdslb.com/bfs/storyff/n220706qn257g5ymn00jrq1tbc2y0k4s_firsti.jpg",
        "pub_location": "山东",
        "bvid": "BV12S4y1E7rt",
        "inter_video": false,
        "resource_type": "ugc",
        "subtitle": ""
      },
      {
        "aid": 556671285,
        "videos": 1,
        "tid": 173,
        "tname": "桌游棋牌",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/02aa212793ebfdc5bd2b243109961d01ef74015f.jpg",
        "title": "【整活向】麻将新手不常见错误示范——偷换牌山",
        "pubdate": 1659761706,
        "ctime": 1659761706,
        "desc": "大家千万不要学习@肉目 的反面教材噢\n不然胡萝卜很快就被切光了",
        "state": 0,
        "duration": 61,
        "mission_id": 808212,
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
          "mid": 5256791,
          "name": "凤鸣麻雀社",
          "face": "http://i2.hdslb.com/bfs/face/79c578d5a00dc25498913187f1e2e7b63463b027.jpg"
        },
        "stat": {
          "aid": 556671285,
          "view": 28016,
          "danmaku": 17,
          "reply": 62,
          "favorite": 25,
          "coin": 34,
          "share": 22,
          "now_rank": 0,
          "his_rank": 0,
          "like": 845,
          "dislike": 0
        },
        "dynamic": "健康麻将 保护胡萝卜 从@肉目 做起\n玩儿花的手法是越来越熟练了 危险危险",
        "cid": 795200966,
        "dimension": {
          "width": 1080,
          "height": 1440,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV12e4y1D7mp",
        "up_from_v2": 8,
        "first_frame": "http://i0.hdslb.com/bfs/storyff/n220806a21h7h5icb0b5fv1v71d6cwu7_firsti.jpg",
        "pub_location": "广东",
        "bvid": "BV12e4y1D7mp",
        "inter_video": false,
        "resource_type": "ugc",
        "subtitle": ""
      },
      {
        "aid": 471592118,
        "videos": 1,
        "tid": 59,
        "tname": "演奏",
        "copyright": 1,
        "pic": "http://i0.hdslb.com/bfs/archive/3f1fcd0461235f8881a86faaa1321744b251b26f.jpg",
        "title": "有仪式感的植物大战僵尸",
        "pubdate": 1659409876,
        "ctime": 1659409876,
        "desc": "-",
        "state": 0,
        "duration": 150,
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
          "mid": 523219895,
          "name": "上官画画",
          "face": "http://i2.hdslb.com/bfs/face/a69355ca44c5343e202e1e1294245ba588e92e96.jpg"
        },
        "stat": {
          "aid": 471592118,
          "view": 314596,
          "danmaku": 302,
          "reply": 630,
          "favorite": 2532,
          "coin": 2648,
          "share": 1294,
          "now_rank": 0,
          "his_rank": 0,
          "like": 20552,
          "dislike": 0
        },
        "dynamic": "",
        "cid": 791291889,
        "dimension": {
          "width": 960,
          "height": 540,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1WT41177PD",
        "up_from_v2": 36,
        "first_frame": "http://i2.hdslb.com/bfs/storyff/n220802qn3bbryqe32dploiilb7xtqft_firsti.jpg",
        "pub_location": "浙江",
        "bvid": "BV1WT41177PD",
        "inter_video": false,
        "resource_type": "ugc",
        "subtitle": ""
      },
      {
        "aid": 599162361,
        "videos": 1,
        "tid": 238,
        "tname": "运动综合",
        "copyright": 1,
        "pic": "http://i0.hdslb.com/bfs/archive/bc086df16873a9bc619d625bc176359220062d79.jpg",
        "title": "张镇辉台球正经教学【6个不太建议使用的技巧】15.0版本",
        "pubdate": 1659690000,
        "ctime": 1659690022,
        "desc": "靓仔，用一句话证明你是老粉！！\n \n \n \n长按点赞，有彩蛋哟～",
        "state": 0,
        "duration": 119,
        "mission_id": 846900,
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
          "mid": 88895225,
          "name": "张镇辉台球教学",
          "face": "http://i2.hdslb.com/bfs/face/2af69641c86d3915440b28ef64214e112390c15c.jpg"
        },
        "stat": {
          "aid": 599162361,
          "view": 2275313,
          "danmaku": 23143,
          "reply": 2608,
          "favorite": 22825,
          "coin": 15344,
          "share": 3584,
          "now_rank": 0,
          "his_rank": 73,
          "like": 243787,
          "dislike": 0
        },
        "dynamic": "",
        "cid": 794017093,
        "dimension": {
          "width": 2160,
          "height": 3840,
          "rotate": 0
        },
        "season_id": 39377,
        "short_link_v2": "https://b23.tv/BV1CB4y1r7d5",
        "first_frame": "http://i2.hdslb.com/bfs/storyff/n220805qn1xjr322hy7j1tc0t7ntj0r3_firsti.jpg",
        "pub_location": "广东",
        "bvid": "BV1CB4y1r7d5",
        "inter_video": false,
        "resource_type": "ugc",
        "subtitle": ""
      },
      {
        "aid": 729057411,
        "videos": 1,
        "tid": 59,
        "tname": "演奏",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/365e41383e10a774d54b908c018e66a0f90bcc65.jpg",
        "title": "今天练练脚下钢琴",
        "pubdate": 1659322244,
        "ctime": 1659322244,
        "desc": "-",
        "state": 0,
        "duration": 16,
        "mission_id": 741439,
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
          "mid": 397865300,
          "name": "Rhythm梦龙",
          "face": "http://i2.hdslb.com/bfs/face/297f26c89a43d60619e552d5606e575d2a8406aa.jpg"
        },
        "stat": {
          "aid": 729057411,
          "view": 17740,
          "danmaku": 8,
          "reply": 27,
          "favorite": 74,
          "coin": 37,
          "share": 20,
          "now_rank": 0,
          "his_rank": 0,
          "like": 1878,
          "dislike": 0
        },
        "dynamic": "",
        "cid": 790320365,
        "dimension": {
          "width": 1080,
          "height": 1920,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1zS4y1x7ZM",
        "up_from_v2": 9,
        "first_frame": "http://i1.hdslb.com/bfs/storyff/n220801qn337b2rig3v6l23kyehiinaa_firsti.jpg",
        "pub_location": "上海",
        "bvid": "BV1zS4y1x7ZM",
        "inter_video": false,
        "resource_type": "ugc",
        "subtitle": ""
      }
    ]
  }
}
```

</details>

## 投稿

<img src="/imgs/video_up.svg" width="100" height="100" />

### 查询用户投稿视频明细

> http://api.bilibili.com/x/space/arc/search

*请求方式：GET*

**url参数：**

| 参数名     | 类型  | 内容      | 必要性 | 备注                                                          |
|---------|-----|---------|-----|-------------------------------------------------------------|
| mid     | num | 目标用户mid | 必要  |                                                             |
| order   | str | 排序方式    | 非必要 | 默认为pubdate<br />最新发布：pubdate<br />最多播放：click<br />最多收藏：stow |
| tid     | num | 筛选目标分区  | 非必要 | 默认为0<br />0：不进行分区筛选<br />分区tid为所筛选的分区                       |
| keyword | str | 关键词筛选   | 非必要 | 用于使用关键词搜索该UP主视频稿件                                           |
| pn      | num | 页码      | 必要  |                                                             |
| ps      | num | 每页项数    | 必要  | 最小1，最大50                                                    |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                                  |
|---------|-----|------|-------------------------------------|
| code    | num | 返回值  | 0：成功<br />-400：请求错误<br />-412：请求被拦截<br />-1200：被降级过滤的请求(一种意义不明的偶发状况) |
| message | str | 错误信息 | 默认为0                                |
| ttl     | num | 1    |                                     |
| data    | obj | 信息本体 |                                     |

`data`对象：

| 字段              | 类型  | 内容       | 备注  |
|-----------------|-----|----------|-----|
| list            | obj | 列表信息     |     |
| page            | obj | 页面信息     |     |
| episodic_button | obj | “播放全部“按钮 |     |

`data`中的`list`对象：

| 字段    | 类型    | 内容       | 备注  |
|-------|-------|----------|-----|
| tlist | obj   | 投稿视频分区索引 |     |
| vlist | array | 投稿视频列表   |     |

`list`中的`tlist`对象：

| 字段    | 类型  | 内容     | 备注           |
|-------|-----|--------|--------------|
| {tid} | obj | 该分区的详情 | 字段名为存在的分区tid |
| ……    | obj | ……     | 向下扩展         |

`tlist`中的`{tid}`对象：

| 字段    | 类型  | 内容         | 备注  |
|-------|-----|------------|-----|
| count | num | 投稿至该分区的视频数 |     |
| name  | str | 该分区名称      |     |
| tid   | num | 该分区tid     |     |

`list`中的`vlist`数组：

| 项   | 类型  | 内容        | 备注  |
|-----|-----|-----------|-----|
| 0   | obj | 投稿视频1     |     |
| n   | obj | 投稿视频（n+1） |     |
| ……  | obj | ……        | ……  |

`list`中的`vlist`数组中的对象：

| 字段             | 类型   | 内容       | 备注             |
|----------------|------|----------|----------------|
| aid            | num  | 稿件avid   |                |
| author         | str  | 视频UP主    | 不一定为目标用户（合作视频） |
| bvid           | str  | 稿件bvid   |                |
| comment        | num  | 视频评论数    |                |
| copyright      | str  | 空        | 作用尚不明确         |
| created        | num  | 投稿时间     | 时间戳            |
| description    | str  | 视频简介     |                |
| hide_click     | bool | false    | 作用尚不明确         |
| is_pay         | num  | 0        | 作用尚不明确         |
| is_union_video | num  | 是否为合作视频  | 0：否<br />1：是   |
| length         | str  | 视频长度     | MM:SS          |
| mid            | num  | 视频UP主mid | 不一定为目标用户（合作视频） |
| pic            | str  | 视频封面     |                |
| play           | num  | 视频播放次数   |  如果视频基本信息API对应的状态为-403视频访问权限不足，数据类型将变为str，如（"play": "--",），于mid79发表的av5132474可见          |
| review         | num  | 0        | 作用尚不明确         |
| subtitle       | str  | 空        | 作用尚不明确         |
| title          | str  | 视频标题     |                |
| typeid         | num  | 视频分区tid  |                |
| video_review   | num  | 视频弹幕数    |                |

`data`中的`page`对象：

| 字段    | 类型  | 内容    | 备注  |
|-------|-----|-------|-----|
| count | num | 总计稿件数 |     |
| pn    | num | 当前页码  |     |
| ps    | num | 每页项数  |     |

`data`中的`episodic_button`对象：

| 字段   | 类型  | 内容       | 备注  |
|------|-----|----------|-----|
| text | str | 按钮文字     |     |
| uri  | str | 全部播放页url |     |

**示例：**

`pn`（页码）和`ps`（每页项数）只改变`vlist`中成员的多少与内容

以每页2项查询用户`mid=53456`的第1页投稿视频明细

```shell
curl -G 'http://api.bilibili.com/x/space/arc/search' \
--data-urlencode 'mid=53456' \
--data-urlencode 'ps=2' \
--data-urlencode 'pn=1'
```

<details>
<summary>查看响应示例：</summary>

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
          "count": 26,
          "name": "动画"
        },
        "160": {
          "tid": 160,
          "count": 42,
          "name": "生活"
        },
        "211": {
          "tid": 211,
          "count": 3,
          "name": "美食"
        },
        "3": {
          "tid": 3,
          "count": 33,
          "name": "音乐"
        },
        "4": {
          "tid": 4,
          "count": 72,
          "name": "游戏"
        }
      },
      "vlist": [
        {
          "comment": 3558,
          "typeid": 47,
          "play": 1275661,
          "pic": "//i2.hdslb.com/bfs/archive/90157806a34646ac2d4c6af3e8b6156cb3460d14.jpg",
          "subtitle": "",
          "description": "第一期：BV1ak4y1B7aG\n第二期：BV1eA411Y7FN\n脚本/绘画/配音/动画/片尾曲：warma\n第三期终于做完啦！这是一个以我平时发呆的时候想到的一些灵感组成的冷笑话合集，名字叫《沃玛的生活》，可以当作日常搞笑单元小动画来看。\n如果你喜欢这个系列的话请点赞投币收藏一键三连给我一些继续制作的动力吧，我真的非常非常需要更多的动力！\n祝看得开心~\n我的微博：@_warma_",
          "copyright": "",
          "title": "【warma】沃玛的新番更新！从现在开始放飞自我【沃玛的生活/第三期】",
          "review": 0,
          "author": "Warma",
          "mid": 53456,
          "created": 1605844817,
          "length": "05:16",
          "video_review": 7470,
          "aid": 585275804,
          "bvid": "BV1sz4y1y7KJ",
          "hide_click": false,
          "is_pay": 0,
          "is_union_video": 0,
          "is_steins_gate": 0
        },
        {
          "comment": 2979,
          "typeid": 21,
          "play": 840676,
          "pic": "//i2.hdslb.com/bfs/archive/b43f88c6ebae8fdc7dfb663f6f6f2931b924c763.jpg",
          "subtitle": "",
          "description": "前一阵子过生日，大家的礼物经过几番转寄终于收到了~于是录了这期礼物开箱视频。\n现在也在感慨，大家的礼物真的都太强了，居然这些全都是手工做的，真的好厉害！\n这些手工礼物背后得花多少时间和心力啊……这些对我来说都是无价的礼物，制作礼物的大家真的有心了，谢谢！！\n收到这些礼物真的很开心，视频的封面也是在这样激动的情况下画出来的，祝你看得开心~\n我的微博：@_warma_",
          "copyright": "",
          "title": "【warma】来开箱！大家寄来的生日礼物",
          "review": 0,
          "author": "Warma",
          "mid": 53456,
          "created": 1604635221,
          "length": "24:28",
          "video_review": 10476,
          "aid": 287744380,
          "bvid": "BV1xf4y1q7XN",
          "hide_click": false,
          "is_pay": 0,
          "is_union_video": 0,
          "is_steins_gate": 0
        }
      ]
    },
    "page": {
      "pn": 1,
      "ps": 2,
      "count": 176
    },
    "episodic_button": {
      "text": "播放全部",
      "uri": "//www.bilibili.com/medialist/play/53456?from=space"
    }
  }
}
```

</details>

### 查询用户投稿相簿预览

> http://api.bilibili.com/x/space/album/index

*请求方式：GET*

所有类型的相簿

**url参数：**

| 参数名 | 类型  | 内容      | 必要性 | 备注                         |
|-----|-----|---------|-----|----------------------------|
| mid | num | 目标用户mid | 必要  |                            |
| ps  | num | 获取的相簿量  | 非必要 | 默认为8 定义域 1-大于1700 (注意滥用风险) | 

**json回复：**

根对象：

| 字段      | 类型    | 内容   | 备注                  |
|---------|-------|------|---------------------|
| code    | num   | 返回值  | 0：成功<br />-400：请求错误 |
| message | str   | 错误信息 | 默认为0                |
| ttl     | num   | 1    |                     |
| data    | array | 相簿列表 |                     |

`data`数组：

| 项   | 类型  | 内容        | 备注  |
|-----|-----|-----------|-----|
| 0   | obj | 相簿内容1     |     |
| n   | obj | 相簿内容（n+1） |     |
| ……  | obj | ……        | ……  |

`data`数组中的对象：

| 字段          | 类型    | 内容      | 备注     |
|-------------|-------|---------|--------|
| count       | num   | 总计图片数   |        |
| ctime       | num   | 发布时间    | 时间戳    |
| description | str   | 简介      |        |
| doc_id      | num   | 相簿id    | 非动态！！！ |
| like        | num   | 点赞数     |        |
| pictures    | array | 图片内容    |        |
| poster_uid  | num   | 上传用户mid |        |
| title       | str   | 标题      | 动态内容无  |
| view        | num   | 浏览数     |        |

`data`数组中的对象中的`pictures`数组：

| 项   | 类型  | 内容        | 备注             |
|-----|-----|-----------|----------------|
| 0   | obj | 内容图片1     |                |
| n   | obj | 内容图片（n+1） | 项数取决于`count`的值 |
| ……  | obj | ……        | ……             |

`pictures`数组中的对象：

| 字段         | 类型  | 内容    | 备注       |
|------------|-----|-------|----------|
| img_height | num | 图片高度  |          |
| img_size   | num | 图片大小  | 单位为KByte |
| img_src    | str | 图片url |          |
| img_width  | num | 图片宽度  |          |

**示例：**

查询用户`mid=53456`的投稿相簿预览

```shell
curl -G 'http://api.bilibili.com/x/space/album/index' \
--data-urlencode 'mid=53456' \
--data-urlencode 'ps=2'
```

<details>
<summary>查看响应示例：</summary>

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

</details>

### 查询用户投稿相簿明细

> http://api.vc.bilibili.com/link_draw/v1/doc/doc_list

*请求方式：GET*

**url参数：**

| 参数名       | 类型  | 内容      | 必要性 | 备注                                                          |
|-----------|-----|---------|-----|-------------------------------------------------------------|
| uid       | num | 目标用户mid | 必要  |                                                             |
| page_num  | num | 页码      | 非必要 | 默认为0                                                        |
| page_size | num | 每页项数    | 必要 | 默认为30                                                       |
| biz       | str | 查询类型    | 非必要 | 全部：all<br />绘画：draw<br />摄影：photo<br />日常：daily<br />默认为all |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注         |
|---------|-----|------|------------|
| code    | num | 返回值  | 0：成功       |
| msg     | str | 错误信息 | 默认为success |
| message | str | 错误信息 | 默认为success |
| data    | obj | 信息本体 |            |

`data`对象：

| 字段    | 类型    | 内容   | 备注  |
|-------|-------|------|-----|
| items | array | 相簿列表 |     |

`items`数组：

| 项   | 类型  | 内容        | 备注  |
|-----|-----|-----------|-----|
| 0   | obj | 相簿内容1     |     |
| n   | obj | 相簿内容（n+1） |     |
| ……  | obj | ……        | ……  |

`items`数组中的对象：

| 字段          | 类型    | 内容      | 备注     |
|-------------|-------|---------|--------|
| count       | num   | 总计图片数   |        |
| ctime       | num   | 发布时间    | 时间戳    |
| description | str   | 简介      |        |
| doc_id      | num   | 相簿id    | 非动态！！！ |
| like        | num   | 点赞数     |        |
| pictures    | array | 图片内容    |        |
| poster_uid  | num   | 上传用户mid |        |
| title       | str   | 标题      | 动态内容无  |
| view        | num   | 浏览数     |        |

`items`数组中的对象中的`pictures`数组：

| 项   | 类型  | 内容        | 备注             |
|-----|-----|-----------|----------------|
| 0   | obj | 内容图片1     |                |
| n   | obj | 内容图片（n+1） | 项数取决于`count`的值 |
| ……  | obj | ……        | ……             |

`pictures`数组中的对象：

| 字段         | 类型  | 内容    | 备注       |
|------------|-----|-------|----------|
| img_height | num | 图片高度  |          |
| img_size   | num | 图片大小  | 单位为KByte |
| img_src    | str | 图片url |          |
| img_width  | num | 图片宽度  |          |

**示例：**

查询用户`mid=53456`的投稿明细中的全部类型

```shell
curl -G 'http://api.vc.bilibili.com/link_draw/v1/doc/doc_list' \
--data-urlencode 'uid=2' \
--data-urlencode 'page_num=1' \
--data-urlencode 'page_size=2' \
--data-urlencode 'biz=all'
```

<details>
<summary>查看响应示例：</summary>

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

</details>

## 频道

<img src="/imgs/channel.svg" width="100" height="100" />

### 查询用户频道列表

> http://api.bilibili.com/x/space/channel/list

*请求方式：GET*

**url参数：**

| 参数名 | 类型  | 内容      | 必要性 | 备注  |
|-----|-----|---------|-----|-----|
| mid | num | 目标用户mid | 必要  |     |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                         |
|---------|-----|------|----------------------------|
| code    | num | 返回值  | 0：成功                       |
| message | str | 错误信息 | 默认为0                       |
| ttl     | num | 1    |                            |
| data    | obj | 信息本体 | 无则为空 所有频道内均无视频则为空，此时code为0 |

`data`对象：

| 字段    | 类型    | 内容    | 备注  |
|-------|-------|-------|-----|
| count | num   | 总计频道数 |     |
| list  | array | 频道列表  |     |

`data`中的`list`数组：

| 项   | 类型  | 内容      | 备注             |
|-----|-----|---------|----------------|
| 0   | obj | 频道1     |                |
| n   | obj | 频道（n+1） | 项数取决于`count`的值 |
| ……  | obj | ……      | ……             |

`data`中的`list`数组中的对象：

| 字段    | 类型  | 内容      | 备注   |
|-------|-----|---------|------|
| cid   | num | 频道id    |      |
| count | num | 频道内含视频数 |      |
| cover | str | 封面图片url |      |
| intro | str | 简介      | 无则为空 |
| mid   | num | 创建用户mid |      |
| mtime | num | 创建时间    | 时间戳  |
| name  | str | 标题      |      |

**示例：**

查询用户`mid=53456`的频道列表

```shell
curl -G 'http://api.bilibili.com/x/space/channel/list' \
--data-urlencode 'mid=53456'
```

<details>
<summary>查看响应示例：</summary>

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

</details>



### 查询用户频道中的视频

> http://api.bilibili.com/x/space/channel/video

*请求方式：GET*

**url参数：**

| 参数名 | 类型  | 内容      | 必要性 | 备注     |
|-----|-----|---------|-----|--------|
| mid | num | 目标用户mid | 必要  |        |
| cid | num | 目标频道id  | 必要  |        |
| pn  | num | 页码      | 非必要 | 默认为1   |
| ps  | num | 每页项数    | 非必要 | 默认为100 |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                                     |
|---------|-----|------|----------------------------------------|
| code    | num | 返回值  | 0：成功<br />-400：请求错误<br />-404：无用户对应的频道 |
| message | str | 错误信息 | 默认为0                                   |
| ttl     | num | 1    |                                        |
| data    | obj | 信息本体 |                                        |

`data`对象：

| 字段   | 类型  | 内容   | 备注  |
|------|-----|------|-----|
| list | obj | 频道信息 |     |
| page | obj | 页面信息 |     |

`data`中的`list`对象：

| 字段       | 类型    | 内容      | 备注   |
|----------|-------|---------|------|
| archives | array | 包含的视频列表 |      |
| cid      | num   | 频道id    |      |
| count    | num   | 频道内含视频数 |      |
| cover    | str   | 封面图片url |      |
| intro    | str   | 简介      | 无则为空 |
| mid      | num   | 创建用户mid |      |
| mtime    | num   | 创建时间    | 时间戳  |
| name     | str   | 标题      |      |

`list`中的`archives`数组：

| 项   | 类型  | 内容      | 备注             |
|-----|-----|---------|----------------|
| 0   | obj | 视频1     |                |
| n   | obj | 视频（n+1） | 项数取决于`count`的值 |
| ……  | obj | ……      | ……             |

`list`中的`archives`数组中的对象：

基本同「[视频详细信息](https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/video/info.md#视频详细信息（avid/bvid互转）)」中的data对象

`data`中的`page`对象：

| 字段  | 类型 | 内容       | 备注 |
| ----- | ---- | ---------- | ---- |
| count | num  | 总计视频数 |      |
| num   | num  | 当前页码   |      |
| size  | num  | 每页项数   |      |

**示例：**

查询用户`mid=53456`的频道`170`中的视频

```shell
curl -G 'http://api.bilibili.com/x/space/channel/video' \
--data-urlencode 'mid=53456' \
--data-urlencode 'cid=170' \
--data-urlencode 'ps=2' \
--data-urlencode 'pn=1'
```

<details>
<summary>查看响应示例：</summary>

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

</details>

### 创建频道

> http://api.bilibili.com/x/space/channel/add

*请求方式：POST*

认证方式：Cookie（SESSDATA）

创建成功后会返回新建频道的id

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名   | 类型  | 内容                   | 必要性 | 备注  |
|-------|-----|----------------------|-----|-----|
| name  | str | 频道名                  | 必要  |     |
| intro | str | 频道简介                 | 非必要 |     |
| csrf  | str | CSRF Token（位于cookie） | 必要  |     |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                                                                                                                                                               |
|---------|-----|------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| code    | num | 返回值  | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />53001：频道名字数超过限制<br />53002：频道简介字数超过限制<br />53004：创建的频道已经满额<br />53007：频道名称已经存在<br />53024：编辑内容命中敏感信息 |
| message | str | 错误信息 | 默认为0                                                                                                                                                             |
| ttl     | num | 1    |                                                                                                                                                                  |
| data    | obj | 数据本体 | 成功有此项                                                                                                                                                            |

`data`对象：

| 字段  | 类型  | 内容   | 备注  |
|-----|-----|------|-----|
| cid | num | 频道id |     |

**示例：**

创建名为`test1`的频道，简介为空

```shell
curl 'http://api.bilibili.com/x/space/channel/add' \
--data-urlencode 'name=test1' \
--data-urlencode 'intro=' \
--data-urlencode 'csrf=xxx' \
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
    "cid": 138996
  }
}
```

</details>

### 修改频道

> http://api.bilibili.com/x/space/channel/edit

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名   | 类型  | 内容                   | 必要性 | 备注  |
|-------|-----|----------------------|-----|-----|
| cid   | num | 频道id                 | 必要  |     |
| name  | str | 频道名                  | 必要  |     |
| intro | str | 频道简介                 | 非必要 |     |
| csrf  | str | CSRF Token（位于cookie） | 必要  |     |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                                                                                                                                          |
|---------|-----|------|---------------------------------------------------------------------------------------------------------------------------------------------|
| code    | num | 返回值  | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />53001：频道名字数超过限制<br />53002：频道简介字数超过限制<br />53007：频道名称已经存在<br />53024：编辑内容命中敏感信息 |
| message | str | 错误信息 | 默认为0                                                                                                                                        |
| ttl     | num | 1    |                                                                                                                                             |

**示例：**

修改频道`138996`名称为`测试`，简介为`123456`

```shell
curl 'http://api.bilibili.com/x/space/channel/edit' \
--data-urlencode 'cid=138996' \
--data-urlencode 'name=测试' \
--data-urlencode 'intro=123456' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1
}
```

</details>

### 删除频道

> http://api.bilibili.com/x/space/channel/del

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                     | 必要性 | 备注 |
| ------ | ---- | ------------------------ | ------ | ---- |
| cid    | num  | 需要删除的频道id         | 必要   |      |
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
curl 'http://api.bilibili.com/x/space/channel/del' \
--data-urlencode 'cid=138996' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1
}
```

</details>

### 频道添加视频

> http://api.bilibili.com/x/space/channel/video/add

*请求方式：POST*

认证方式：Cookie（SESSDATA）

仅能添加自己是UP主的视频

如添加多个视频，仅会添加正确的

**注：完成后需要使用接口「查询用户频道中的视频」刷新**

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名  | 类型   | 内容                   | 必要性 | 备注             |
|------|------|----------------------|-----|----------------|
| cid  | num  | 频道id                 | 必要  |                |
| aids | nums | 要添加的目标稿件avid         | 必要  | 多个使用","（%2C）分隔 |
| csrf | str  | CSRF Token（位于cookie） | 必要  |                |

**json回复：**

根对象：

| 字段      | 类型    | 内容         | 备注                                                                                                                         |
|---------|-------|------------|----------------------------------------------------------------------------------------------------------------------------|
| code    | num   | 返回值        | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />-404：无此项<br />53003：本频道里的视频已满<br />53006：提交视频已失效或频道里有（非该视频UP主） |
| message | str   | 错误信息       | 默认为0                                                                                                                       |
| ttl     | num   | 1          |                                                                                                                            |
| data    | array | 出错稿件avid列表 |                                                                                                                            |

`data`数组：

| 项   | 类型  | 内容            | 备注  |
|-----|-----|---------------|-----|
| 0   | num | 出错稿件avid1     |     |
| n   | num | 出错稿件avid（n+1） |     |
| ……  | num | ……            | ……  |

**示例：**

向频道`138995`中添加视频`av583785685`和`av243322853`

```shell
curl 'http://api.bilibili.com/x/space/channel/video/add' \
--data-urlencode 'cid=138995' \
--data-urlencode 'aids=583785685,243322853' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": []
}
```

</details>

### 频道删除视频

> http://api.bilibili.com/x/space/channel/video/del

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**注：完成后需要使用接口「查询用户频道中的视频」刷新**

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型  | 内容           | 必要性 | 备注  |
|-----|-----|--------------|-----|-----|
| cid | num | 频道id         | 必要  |     |
| aid | num | 要删除的目标稿件avid | 必要  |     |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                                                                                                          |
|---------|-----|------|-------------------------------------------------------------------------------------------------------------|
| code    | num | 返回值  | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />-404：无此项<br />53008：频道内没有视频<br />53009：频道内没有该视频 |
| message | str | 错误信息 | 默认为0                                                                                                        |
| ttl     | num | 1    |                                                                                                             |

**示例：**

删除频道`138995`中的视频`av583785685`

```shell
curl 'http://api.bilibili.com/x/space/channel/video/del' \
--data-urlencode 'cid=138995' \
--data-urlencode 'aid=583785685' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1
}
```

</details>

### 调整频道视频排序

> http://api.bilibili.com/x/space/channel/video/sort

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名  | 类型  | 内容                   | 必要性 | 备注                                      |
|------|-----|----------------------|-----|-----------------------------------------|
| cid  | num | 频道id                 | 必要  |                                         |
| aid  | num | 要移动的目标稿件avid         | 必要  |                                         |
| to   | num | 视频排序倒数位置             | 非必要 | 默认为1<br />1为列表底部，视频总数为首端<br />与显示顺序恰好相反 |
| csrf | str | CSRF Token（位于cookie） | 必要  |                                         |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                                                     |
|---------|-----|------|--------------------------------------------------------|
| code    | num | 返回值  | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误 |
| message | str | 错误信息 | 默认为0                                                   |
| ttl     | num | 1    |                                                        |

**示例：**

调整`138995`中的视频`av583785685`位置为倒数第2

```shell
curl 'http://api.bilibili.com/x/space/channel/video/sort' \
--data-urlencode 'cid=138995' \
--data-urlencode 'aid=583785685' \
--data-urlencode 'to=2' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1
}
```

</details>

### 检查频道中有无失效视频

> http://api.bilibili.com/x/space/channel/video/check

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名 | 类型  | 内容     | 必要性 | 备注  |
|-----|-----|--------|-----|-----|
| cid | num | 目标频道id | 必要  |     |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                                                                    |
|---------|-----|------|-----------------------------------------------------------------------|
| code    | num | 返回值  | 0：成功<br />-101：账号未登录<br />-400：请求错误<br />-404：无此项<br />53005：频道内有失效视频 |
| message | str | 错误信息 | 默认为0                                                                  |
| ttl     | num | 1    |                                                                       |

**示例：**

检查频道`138995`

```shell
curl -G 'http://api.bilibili.com/x/space/channel/video/check
--data-urlencode 'cid=138995' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1
}
```

</details>

## 收藏

<img src="/imgs/collect.svg" width="100" height="100" />

### 查询用户创建的视频收藏夹

> http://api.bilibili.com/x/v3/fav/folder/created/list-all

*请求方式：GET*

认证方式：Cookie（SESSDATA）

查看私有收藏夹时需要认证

**url参数：**

| 参数名    | 类型  | 内容      | 必要性 | 备注  |
|--------|-----|---------|-----|-----|
| up_mid | num | 目标用户mid | 必要  |     |

**json回复：**

根对象：

| 字段      | 类型                    | 内容   | 备注                  |
|---------|-----------------------|------|---------------------|
| code    | num                   | 返回值  | 0：成功<br />-400：请求错误 |
| message | str                   | 错误信息 | 默认为0                |
| ttl     | num                   | 1    |                     |
| data    | 隐藏时：null<br />公开时：obj | 信息本体 |                     |

`data`对象：

| 字段    | 类型                          | 内容      | 备注  |
|-------|-----------------------------|---------|-----|
| count | num                         | 创建的收藏夹数 |     |
| list  | 无收藏夹时：null<br />有收藏夹时：array | 收藏夹列表   |     |

`data`中的`list`数组：

| 项   | 类型  | 内容       | 备注             |
|-----|-----|----------|----------------|
| 0   | obj | 收藏夹1     |                |
| n   | obj | 收藏夹(n+1) | 项数取决于`count`的值 |
| ……  | obj | ……       |                |

`data`中的`list`数组中的对象：

| 字段          | 类型  | 内容        | 备注        |
|-------------|-----|-----------|-----------|
| id          | num | 收藏夹mlid   |           |
| fid         | num | 原始收藏夹mlid | 去除两位mid尾号 |
| mid         | num | 创建用户mid   |           |
| attr        | num | 收藏夹属性位配置  |           |
| title       | str | 收藏夹标题     |           |
| fav_state   | num | 0         | 作用尚不明确    |
| media_count | num | 收藏夹总计视频数  |           |

`attr`属性位二进制值表：

| 位         | 内容       | 备注                   |
|-----------|----------|----------------------|
| 0         | 是否为默认收藏夹 | 0：默认收藏夹<br />1：其他收藏夹 |
| 1         | 私有收藏夹    | 0：公开<br />1：私有       |
| 其他有待补充... |          |                      |

**示例：**

查询用户`mid=7792521`的收藏夹列表

```shell
curl -G 'http://api.bilibili.com/x/v3/fav/folder/created/list-all' \
--data-urlencode 'up_mid=7792521' \
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

</details>

### 查询用户收藏的视频收藏夹

> http://api.bilibili.com/x/v3/fav/folder/collected/list

*请求方式：GET*

**url参数：**

| 参数名    | 类型  | 内容      | 必要性 | 备注           |
|--------|-----|---------|-----|--------------|
| ps     | num | 每页项数    | 必要  | 定义域 1 - 大于70 |
| pn     | num | 页码      | 必要  |              |
| up_mid | num | 目标用户mid | 必要  |              |

**json回复：**

根对象：

| 字段      | 类型                    | 内容   | 备注                                                      |
|---------|-----------------------|------|---------------------------------------------------------|
| code    | num                   | 返回值  | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />40022：签名过长 |
| message | str                   | 错误信息 | 默认为0                                                    |
| ttl     | num                   | 1    |                                                         |
| data    | 隐藏时：null<br />公开时：obj | 信息本体 |                                                         |

`data`对象：

| 字段    | 类型                          | 内容      | 备注  |
|-------|-----------------------------|---------|-----|
| count | num                         | 创建的收藏夹数 |     |
| list  | 无收藏夹时：null<br />有收藏夹时：array | 收藏夹列表   |     |

`data`中的`list`数组：

| 项   | 类型  | 内容       | 备注             |
|-----|-----|----------|----------------|
| 0   | obj | 收藏夹1     |                |
| n   | obj | 收藏夹(n+1) | 项数取决于`count`的值 |
| ……  | obj | ……       |                |

`data`中的`list`数组中的对象：

| 字段          | 类型  | 内容         | 备注                         |
|-------------|-----|------------|----------------------------|
| id          | num | 收藏夹ml      |                            |
| fid         | num | 原始收藏夹mlid  | 去除两位mid尾号                  |
| mid         | num | 创建用户mid    |                            |
| attr        | num | 收藏夹属性      | 转换成8-bit二进制处理<br />详细说明见下表 |
| title       | str | 收藏夹标题      |                            |
| cover       | str | 收藏夹封面图片url |                            |
| upper       | obj | 收藏夹创建用户信息  |                            |
| cover_type  | num | 2          | 作用尚不明确                     |
| intro       | str | 空          | 作用尚不明确                     |
| ctime       | num | 创建时间       | 时间戳                        |
| mtime       | num | 审核时间       | 时间戳                        |
| state       | num | 0          | 作用尚不明确                     |
| fav_state   | num | 0          | 作用尚不明确                     |
| media_count | num | 收藏夹总计视频数   |                            |

`attr`属性二进制值表：

| 其他有待补充... | 1：默认收藏夹              | 0：公开性          |
|-----------|----------------------|----------------|
|           | 0：默认收藏夹<br />1：其他收藏夹 | 0：公开<br />1：私有 |

`data`中的`list`数组中的对象中的`upper`对象：

| 字段   | 类型  | 内容     | 备注     |
|------|-----|--------|--------|
| mid  | num | 创建人mid |        |
| name | str | 创建人昵称  |        |
| face | str | 空      | 作用尚不明确 |

**示例：**

查询用户`mid=293793435`的收藏夹收藏列表

```shell
curl -G 'http://api.bilibili.com/x/v3/fav/folder/collected/list' \
--data-urlencode 'up_mid=293793435' \
--data-urlencode 'ps=20' \
--data-urlencode 'pn=1' \
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

</details>

## 课程

<img src="/imgs/class.svg" width="100" height="100" />

###  查询用户发布的课程列表

> http://api.bilibili.com/pugv/app/web/season/page

*请求方式：GET*

**url参数：**

| 参数名 | 类型  | 内容      | 必要性 | 备注    |
|-----|-----|---------|-----|-------|
| mid | num | 目标用户mid | 必要  |       |
| pn  | num | 页码      | 非必要 | 默认为1  |
| ps  | num | 每页项数    | 非必要 | 默认为20 |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                                       |
|---------|-----|------|------------------------------------------|
| code    | num | 返回值  | 0：成功<br />-400：请求错误<br />53013：用户隐私设置未公开 |
| message | str | 错误信息 | 默认为0                                     |
| ttl     | num | 1    |                                          |
| data    | obj | 信息本体 |                                          |

`data`对象：

| 字段   | 类型    | 内容   | 备注  |
|------|-------|------|-----|
| list | array | 课程列表 |     |
| page | obj   | 页面信息 |     |

`data`中的`page`对象：

| 字段    | 类型   | 内容      | 备注                         |
|-------|------|---------|----------------------------|
| next  | bool | 是否存在下一页 | false：最后一页<br />true：存在下一页 |
| num   | num  | 当前页码    |                            |
| size  | num  | 每页项数    |                            |
| total | num  | 总计项数    |                            |

`data`中的`list`数组：

| 项   | 类型  | 内容      | 备注            |
|-----|-----|---------|---------------|
| 0   | obj | 课程1     |               |
| n   | obj | 课程（n+1） | 按照目标用户的发布顺序排列 |
| ……  | obj | ……      |               |

`data`中的`list`数组中的对象：

| 字段        | 类型  | 内容      | 备注       |
|-----------|-----|---------|----------|
| cover     | str | 课程封面url |          |
| ep_count  | num | 课程集数    |          |
| link      | str | 课程页面url | 手机版页面url |
| page      | num | 1       | 作用尚不明确   |
| play      | num | 课程播放数   |          |
| season_id | num | 课程ssid  |          |
| status    | str | 更新状态说明  |          |
| subtitle  | str | 课程副标题   |          |
| title     | str | 课程标题    |          |

**示例：**

查询用户`mid=33683045`的课程发布列表

```shell
curl -G 'http://api.bilibili.com/pugv/app/web/season/page' \
--data-urlencode 'mid=33683045' \
--data-urlencode 'ps=5' \
--data-urlencode 'pn=1'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "data": {
    "items": [
      {
        "cover": "http://i0.hdslb.com/bfs/archive/596575057885fff7f0ceff047437186cba459358.jpg",
        "ep_count": 10,
        "link": "https://m.bilibili.com/cheese/play/ss80",
        "page": 1,
        "play": 174467,
        "season_id": 80,
        "status": "共10期",
        "subtitle": "百科全书式军事科普短视频系列",
        "title": "《战忽知道》第一季"
      },
      {
        "cover": "http://i0.hdslb.com/bfs/archive/322aa94d27cece62d2a859caf71ac2426f29eee2.jpg",
        "ep_count": 1,
        "link": "https://m.bilibili.com/cheese/play/ss145",
        "page": 1,
        "play": 22155,
        "season_id": 145,
        "status": "更新至第1期",
        "subtitle": "此课程为《局座：第四次工业革命来了》部分集数，请谨慎购买",
        "title": "【体验课】局座讲5G：5G如何改变我们的生活？"
      },
      {
        "cover": "http://i0.hdslb.com/bfs/archive/b9794ac4507f8764e219df413b661b5faf499a19.jpg",
        "ep_count": 10,
        "link": "https://m.bilibili.com/cheese/play/ss113",
        "page": 1,
        "play": 49833,
        "season_id": 113,
        "status": "更新至第10期",
        "subtitle": "百科全书式军事科普短视频系列",
        "title": "《战忽知道》第二季"
      },
      {
        "cover": "http://i0.hdslb.com/bfs/archive/7351fcb33592a4bc7aac9f71d421b4b5ce0177d3.jpg",
        "ep_count": 10,
        "link": "https://m.bilibili.com/cheese/play/ss51",
        "page": 1,
        "play": 4981037,
        "season_id": 51,
        "status": "共10期",
        "subtitle": "洞悉国际局势，学习战略思维",
        "title": "局座的国际战略课"
      },
      {
        "cover": "http://i0.hdslb.com/bfs/archive/31e2a170b5a815e34f0537a2727b28f1b87dca18.jpg",
        "ep_count": 10,
        "link": "https://m.bilibili.com/cheese/play/ss121",
        "page": 1,
        "play": 30754,
        "season_id": 121,
        "status": "更新至第10期",
        "subtitle": "百科全书式军事科普短视频系列",
        "title": "《战忽知道》第三季"
      }
    ],
    "page": {
      "next": true,
      "num": 1,
      "size": 5,
      "total": 8
    }
  },
  "message": "success"
}
```

</details>

## 订阅

<img src="/imgs/sub.svg" width="100" height="100" />

### 查询用户追番预览列表

> http://space.bilibili.com/ajax/Bangumi/getList

*请求方式：GET*

认证方式：Cookie（SESSDATA）

如设置隐私查看自己的需要认证

带有转义，且只能获取最多15条

**url参数：**

| 参数名 | 类型  | 内容      | 必要性 | 备注  |
|-----|-----|---------|-----|-----|
| mid | num | 目标用户mid | 必要  |     |

**json回复：**

根对象：

| 字段     | 类型                 | 内容                   | 备注                    |
|--------|--------------------|----------------------|-----------------------|
| status | bool               | 状态                   | false：失败<br />true：成功 |
| data   | 失败：str<br />成功：obj | 失败：错误信息<br />成功：信息本体 |                       |

`data`对象：

| 字段     | 类型    | 内容     | 备注     |
|--------|-------|--------|--------|
| count  | num   | 总计追番数  |        |
| pages  | num   | 0      | 作用尚不明确 |
| result | array | 追番预览列表 |        |

`data`中的`result`数组：

| 项   | 类型  | 内容      | 备注            |
|-----|-----|---------|---------------|
| 0   | obj | 追番1     |               |
| n   | obj | 追番（n+1） | 按照目标用户的关注顺序排列 |
| ……  | obj | ……      |               |
| 14  | obj | 追番15    | 最后一项          |

`data`中的`result`数组中的对象：

| 字段              | 类型  | 内容        | 备注                    |
|-----------------|-----|-----------|-----------------------|
| brief           | str | 简介        |                       |
| cover           | str | 封面图片url   |                       |
| evaluate        | str | 空         |                       |
| favorites       | num | 追番数       |                       |
| is_finish       | num | 是否已完结     | 0：未完结<br />1：已完结      |
| last_ep_index   | num | 0         | 作用尚不明确                |
| newest_ep_index | num | 最新一话      | 可能为0                  |
| season_id       | str | 番剧ssid    |                       |
| share_url       | str | 播放页面链接url |                       |
| title           | str | 标题        |                       |
| total_count     | num | 总计集数      | 未完结：-1<br />已完结：非0正整数 |

**示例：**

查看用户`mid=14082`的追番预览列表

```shell
curl -G 'http://space.bilibili.com/ajax/Bangumi/getList' \
--data-urlencode 'mid=14082' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

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

</details>

### 查询用户追番（追剧）明细

> http://api.bilibili.com/x/space/bangumi/follow/list

*请求方式：GET*

认证方式：Cookie（SESSDATA）

如设置隐私查看自己的需要认证

**url参数：**

| 参数名  | 类型  | 内容      | 必要性 | 备注             |
|------|-----|---------|-----|----------------|
| vmid | num | 目标用户mid | 必要  |                |
| pn   | num | 页码      | 非必要 | 默认为1           |
| ps   | num | 每页项数    | 非必要 | 默认为15 定义域1-30  |
| type | num | 查询类型    | 必要  | 1：追番<br />2：追剧 |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                                       |
|---------|-----|------|------------------------------------------|
| code    | num | 返回值  | 0：成功<br />-400：请求错误<br />53013：用户隐私设置未公开 |
| message | str | 错误信息 | 默认为0                                     |
| ttl     | num | 1    |                                          |
| data    | obj | 信息本体 |                                          |

`data`对象：

| 字段    | 类型    | 内容    | 备注  |
|-------|-------|-------|-----|
| list  | array | 追番列表  |     |
| pn    | num   | 当前页码  |     |
| ps    | num   | 每页项数  |     |
| total | num   | 总计追番数 |     |

`data`中的`list`数组：

| 项   | 类型  | 内容      | 备注            |
|-----|-----|---------|---------------|
| 0   | obj | 追番1     |               |
| n   | obj | 追番（n+1） | 按照目标用户的关注顺序排列 |
| ……  | obj | ……      |               |

`data`中的`list`数组中的对象：

基本同「番剧详细信息」中的result对象（未完工）

**示例：**

查看用户`mid=14082`的追番明细

```shell
curl -G 'http://api.bilibili.com/x/space/bangumi/follow/list' \
--data-urlencode 'vmid=14082' \
--data-urlencode 'type=1' \
--data-urlencode 'ps=2' \
--data-urlencode 'pn=1' \
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

</details>

### 查询用户关注的TAG（话题）

> http://space.bilibili.com/ajax/tags/getSubList

*请求方式：GET*

认证方式：Cookie（SESSDATA）

如设置隐私查看自己的需要认证

带有转义

只显示前100个

**url参数：**

| 参数名 | 类型  | 内容      | 必要性 | 备注  |
|-----|-----|---------|-----|-----|
| mid | num | 目标用户mid | 必要  |     |

**json回复：**

根对象：

| 字段     | 类型                   | 内容                     | 备注                    |
|--------|----------------------|------------------------|-----------------------|
| ststus | bool                 | 返回值                    | false：错误<br />true：正确 |
| data   | 错误时：str<br />正确时：obj | 错误时：错误信息<br />正确时：数据本体 | 正确时不返回错误信息            |

`data`对象：

| 字段    | 类型    | 内容      | 备注  |
|-------|-------|---------|-----|
| tags  | array | 关注TAG列表 |     |
| count | num   | 关注TAG的数 |     |

`data`中的`tags`数组：

| 项   | 类型  | 内容         | 备注   |
|-----|-----|------------|------|
| 0   | obj | 关注TAG1     |      |
| n   | obj | 关注TAG（n+1） |      |
| ……  | obj | ……         | ……   |
| 99  | obj | 关注TAG100   | 最后一项 |

`data`中的`tags`数组中的对象：

| 字段            | 类型  | 内容                  | 备注     |
|---------------|-----|---------------------|--------|
| archive_count | num | 0                   | 作用尚不明确 |
| cover         | str | TAG图片url            | 无则为空   |
| name          | str | TAG名                |        |
| notify        | num | 1                   | 作用尚不明确 |
| tag_id        | num | tag_id              |        |
| updated_ts    | str | 1970-01-01 08:00:00 | 作用尚不明确 |

**示例：**

查询用户`mid=2`的关注TAG

```shell
curl -G 'http://space.bilibili.com/ajax/tags/getSubList' \
--data-urlencode 'mid=2' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

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

</details>
