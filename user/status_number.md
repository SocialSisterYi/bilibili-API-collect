# 用户状态数

## 关系状态数
> http://api.bilibili.com/x/relation/stat

*方式:GET*

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| vmid   | num  | 目标用户UID | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        | 作用尚不明确                |
| data    | obj  | 信息本体 |                             |

`data`对象：

| 字段      | 类型 | 内容        | 备注                                                 |
| --------- | ---- | ----------- | ---------------------------------------------------- |
| mid       | num  | 目标用户UID |                                                      |
| following | num  | 关注数      |                                                      |
| whisper   | num  | 悄悄关注数  | 需要登录(SESSDATA) <br />只能查看自己的<br />默认为0 |
| black     | num  | 黑名单数    | 需要登录(SESSDATA) <br />只能查看自己的<br />默认为0 |
| follower  | num  | 粉丝数      |                                                      |

**示例：**

查询用户`UID=332704117`的关系状态数

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

> http://api.bilibili.com/x/space/upstat

*方式:GET*

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
| ttl     | num  | 1        | 作用尚不明确                |
| data    | obj  | 信息本体 |                             |

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

**示例：**

查询用户`UID=456664753`的UP主状态数

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

> http://api.bilibili.com/x/space/navnum

*方式:GET*

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
| ttl     | num  | 1        | 作用尚不明确                |
| data    | obj  | 信息本体 |                             |

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

| 字段   | 类型 | 内容         | 备注                                    |
| ------ | ---- | ------------ | --------------------------------------- |
| master | num  | 全部收藏夹数 | 需要登录(SESSDATA) <br />只能查看自己的 |
| guest  | num  | 公开收藏夹数 | 无视隐私设置                            |

**示例：**

查询用户`UID=239202390`的订阅&投稿状态数

http://api.bilibili.com/x/space/navnum?mid=239202390
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



## 投稿相簿数

> http://api.vc.bilibili.com/link_draw/v1/doc/upload_count

*方式：GET*

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| uid    | num  | 目标用户UID | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注          |
| ------- | ---- | -------- | ------------- |
| code    | num  | 返回值   | 0：成功       |
| msg     | str  | 错误信息 | 默认为success |
| message | str  | 错误信息 | 默认为success |
| data    | obj  | 信息本体 |               |

`data`对象：

| 字段        | 类型 | 内容                   | 备注               |
| ----------- | ---- | ---------------------- | ------------------ |
| all_count   | num  | 相簿总数               | 总数为以下三者之和 |
| draw_count  | num  | 发布绘画数             |                    |
| photo_count | num  | 发布摄影数             |                    |
| daily_count | num  | 发布日常（图片动态）数 |                    |

**示例：**

 查询用户`UID=53456`的投稿相簿数

http://api.vc.bilibili.com/link_draw/v1/doc/upload_count?uid=53456

```json
{
    "code":0,
    "msg":"success",
    "message":"success",
    "data":{
        "all_count":92,
        "draw_count":5,
        "photo_count":0,
        "daily_count":87
    }
}
```

