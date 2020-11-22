# 用户状态数

- [关系状态数](#关系状态数)
- [UP主状态数](#UP主状态数)
- [~~订阅&投稿状态数（已弃用）~~](#~~订阅&投稿状态数（已弃用）~~)
- [相簿投稿数](#相簿投稿数)

---

## 关系状态数
> http://api.bilibili.com/x/relation/stat

*请求方式：GET*

认证方式：Cookie（SESSDATA）或APP

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注 |
| ---------- | ---- | ------------ | ----------- | ---- |
| access_key | str  | APP登录Token | APP方式必要 |      |
| vmid       | num  | 目标用户UID  | 必要        |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        |                             |
| data    | obj  | 信息本体 |                             |

`data`对象：

| 字段      | 类型 | 内容        | 备注                                             |
| --------- | ---- | ----------- | ------------------------------------------------ |
| mid       | num  | 目标用户UID |                                                  |
| following | num  | 关注数      |                                                  |
| whisper   | num  | 悄悄关注数  | 需要登录(Cooklie或APP) <br />未登录或非自己恒为0 |
| black     | num  | 黑名单数    | 需要登录(Cooklie或APP) <br />未登录或非自己恒为0 |
| follower  | num  | 粉丝数      |                                                  |

**示例：**

查询用户`UID=332704117`的关系状态数

```shell
curl -G 'http://api.bilibili.com/x/relation/stat' \
--data-urlencode 'vmid=332704117' \
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
		"mid": 332704117,
		"following": 32,
		"whisper": 0,
		"black": 0,
		"follower": 919515
	}
}
```

</details>

## UP主状态数

> http://api.bilibili.com/x/space/upstat

*请求方式：GET*

认证方式：Cookie（SESSDATA）或APP

注：该接口需要**任意用户**登录，否则**不会返回任何数据**

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注 |
| ---------- | ---- | ------------ | ----------- | ---- |
| access_key | str  | APP登录Token | APP方式必要 |      |
| mid        | num  | 目标用户UID  | 必要        |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        |                             |
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

```shell
curl -G 'http://api.bilibili.com/x/space/upstat' \
--data-urlencode 'mid=456664753' \
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

</details>

## ~~订阅&投稿状态数（已弃用）~~

<details>
<summary>查看折叠内容</summary>
> http://api.bilibili.com/x/space/navnum

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

```shell
curl -G 'http://api.bilibili.com/x/space/navnum' \
--data-urlencode 'mid=239202390' \
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

</details>
</details>

## 相簿投稿数

> http://api.vc.bilibili.com/link_draw/v1/doc/upload_count

*请求方式：GET*

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

```shell
curl -G 'http://api.vc.bilibili.com/link_draw/v1/doc/upload_count' \
--data-urlencode 'uid=53456'
```

<details>
<summary>查看响应示例：</summary>

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

</details>
