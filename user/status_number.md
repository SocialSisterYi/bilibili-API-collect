# 用户状态数

## 关系状态数
http://api.bilibili.com/x/relation/stat

*方式:GET*

参数：
| 参数名  | 内容        | 必要性 | 备注 |
| --------| ----------- | ------ |------|
| vmid    | 目标用户UID | 必要   |      |

**json回复：**
| 字段    | 类型 | 内容     | 备注                    |
| ------- | ---- | -------- | ----------------------- |
| code    | num  | 返回值   | 0成功<br />-400请求错误 |
| message | str  | 错误信息 | 默认为0                 |
| ttl     | num  | 1        | 作用尚不明确            |
| data    | obj  | 信息本体 |                         |

`data`对象：

| 字段      | 类型 | 内容        | 备注                                       |
| --------- | ---- | ----------- | ------------------------------------------ |
| mid       | num  | 目标用户UID |                                            |
| following | num  | 关注数      |                                            |
| whisper   | num  | 悄悄关注数  | 需要登录(SESSDATA)  只能查看自己的 默认为0 |
| black     | num  | 黑名单数    | 需要登录(SESSDATA)  只能查看自己的 默认为0 |
| follower  | num  | 粉丝数      |                                            |

示例：

http://api.bilibili.com/x/relation/stat?vmid=332704117
```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"mid": 332704117,
		"following": 32,
		"whisper": 0,
		"black": 0,
		"follower": 919515
	}
}
```

## UP主状态数
http://api.bilibili.com/x/space/upstat

*方式:GET*

参数：
| 参数名 | 内容    | 必要性 | 备注 |
| -------| ------- | ------ |------|
| mid    | 用户UID | 必要   |      |


**json回复：**
| 字段    | 类型 | 内容     | 备注                    |
| ------- | ---- | -------- | ----------------------- |
| code    | num  | 返回值   | 0成功<br />-400请求错误 |
| message | str  | 错误信息 | 默认为0                 |
| ttl     | num  | 1        | 作用尚不明确            |
| data    | obj  | 信息本体 |                         |

`data`对象：

| 字段    | 类型  | 内容       | 备注  |
| ------- | ----- | ---------- | ----- |
| archive | obj   | 视频播放量 |       |
| article | obj   | 专栏阅读量 |       |
| likes   | num   | 获赞次数   |       |

`data`中的`archive`对象：

| 字段 | 类型  | 内容       | 备注  |
| ---- | ----- | ---------- | ----- |
| view | num   | 视频播放量 |       |

`data`中的`article`对象：

| 字段 | 类型  | 内容       | 备注  |
| ---- | ----- | ---------- | ----- |
| view | num   | 专栏阅读量 |       |

示例：

http://api.bilibili.com/x/space/upstat?mid=456664753
```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"archive": {
			"view": 213567370
		},
		"article": {
			"view": 3230808
		},
		"likes": 20295095
	}
}
```

## 订阅&投稿状态数
http://api.bilibili.com/x/space/navnum

*方式:GET*

参数：
| 参数名 | 内容    | 必要性 | 备注 |
| -------| ------- | ------ |------|
| mid    | 用户UID | 必要   |      |

**json回复：**

| 字段    | 类型 | 内容     | 备注                    |
| ------- | ---- | -------- | ----------------------- |
| code    | num  | 返回值   | 0成功<br />-400请求错误 |
| message | str  | 错误信息 | 默认为0                 |
| ttl     | num  | 1        | 作用尚不明确            |
| data    | obj  | 信息本体 |                         |

`data`对象：

| 字段      | 类型  | 内容       | 备注         |
| --------- | ----- | ---------- | ------------ |
| video     | num   | 投稿视频数 |              |
| bangumi   | num   | 追番数     | 无视隐私设置 |
| cinema    | num   | 追剧数     | 无视隐私设置 |
| channel   | obj   | 频道数     |              |
| favourite | obj   | 收藏夹数   | 无视隐私设置 |
| tag       | num   | 关注TAG数  | 无视隐私设置 |
| article   | num   | 投稿专栏数 |              |
| playlist  | num   | 0          | 作用尚不明确 |
| album     | num   | 投稿相簿数 |              |
| audio     | num   | 投稿音频数 |              |
| pugv      | num   | 投稿课程数 |              |

`data`中的`channel`对象：

| 字段    | 类型  | 内容       | 备注         |
| ------- | ----- | ---------- | ------------ |
| master  | num   | 频道数     |              |
| guest   | num   | 频道数     |              |

`data`中的`favourite`对象：

| 字段   | 类型 | 内容         | 备注                               |
| ------ | ---- | ------------ | ---------------------------------- |
| master | num  | 全部收藏夹数 | 需要登录(SESSDATA)  只能查看自己的 |
| guest  | num  | 公开收藏夹数 | 无视隐私设置                       |


示例：

http://api.bilibili.com/x/space/navnum?mid=23920239
```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"video": 290,
		"bangumi": 25,
		"cinema": 13,
		"channel": {
			"master": 2,
			"guest": 2
		},
		"favourite": {
			"master": 6,
			"guest": 6
		},
		"tag": 0,
		"article": 1,
		"playlist": 0,
		"album": 150,
		"audio": 4,
		"pugv": 0
	}
}
```

