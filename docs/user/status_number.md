# 用户状态数

## 关系状态数
> https://api.bilibili.com/x/relation/stat

*请求方式：GET*

认证方式：Cookie（SESSDATA）或APP

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注 |
| ---------- | ---- | ------------ | ----------- | ---- |
| access_key | str  | APP登录Token | APP方式必要 |      |
| vmid       | num  | 目标用户mid  | 必要        |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        |                             |
| data    | obj  | 信息本体 |                             |

`data`对象：

| 字段      | 类型 | 内容        | 备注                                            |
| --------- | ---- | ----------- | ----------------------------------------------- |
| mid       | num  | 目标用户mid |                                                 |
| following | num  | 关注数      |                                                 |
| whisper   | num  | 悄悄关注数  | 需要登录(Cookie或APP) <br />未登录或非自己恒为0 |
| black     | num  | 黑名单数    | 需要登录(Cookie或APP) <br />未登录或非自己恒为0 |
| follower  | num  | 粉丝数      |                                                 |

**示例：**

查询用户`mid=332704117`的关系状态数

```shell
curl -G 'https://api.bilibili.com/x/relation/stat' \
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

> https://api.bilibili.com/x/space/upstat

*请求方式：GET*

认证方式：Cookie（SESSDATA）或APP

注：该接口需要**任意用户**登录，否则**不会返回任何数据**

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注 |
| ---------- | ---- | ------------ | ----------- | ---- |
| access_key | str  | APP登录Token | APP方式必要 |      |
| mid        | num  | 目标用户mid  | 必要        |      |

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

查询用户`mid=456664753`的UP主状态数

```shell
curl -G 'https://api.bilibili.com/x/space/upstat' \
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

## 用户导航栏状态数

> https://api.bilibili.com/x/space/navnum

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | num  | 目标用户mid | 必要   |      |
| web_location | str | 333.999 | 不必要 ||

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
| channel   | obj   | 视频列表数     |              |
| favourite | obj   | 收藏夹数   |  |
| tag       | num   | 关注TAG数  | 无视隐私设置 |
| article   | num   | 投稿专栏数 |              |
| playlist  | num   | 0          | 作用尚不明确 |
| album     | num   | 投稿图文数 |              |
| audio     | num   | 投稿音频数 |              |
| pugv      | num   | 投稿课程数 |              |
| upos      | num   | 动态数     |              |
| season_num | num | 视频合集数 |              |

`data`中的`channel`对象：

| 字段    | 类型  | 内容       | 备注         |
| ------- | ----- | ---------- | ------------ |
| master  | num   | 视频列表数     |              |
| guest   | num   | 视频列表数     |              |

`data`中的`favourite`对象：

| 字段   | 类型 | 内容         | 备注                                    |
| ------ | ---- | ------------ | --------------------------------------- |
| master | num  | 全部收藏夹数 | 需要登录(SESSDATA) <br />只能查看自己的 |
| guest  | num  | 公开收藏夹数 |                             |

**示例：**

查询用户`mid=645769214`的订阅&投稿状态数

```shell
curl -G 'https://api.bilibili.com/x/space/navnum' \
--data-urlencode 'mid=645769214'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "video": 34,
    "bangumi": 1,
    "cinema": 0,
    "channel": {
      "master": 5,
      "guest": 5
    },
    "favourite": {
      "master": 0,
      "guest": 0
    },
    "tag": 0,
    "article": 1,
    "playlist": 0,
    "album": 59,
    "audio": 0,
    "pugv": 0,
    "season_num": 1,
    "opus": 59
  }
}
```

</details>

## 相簿投稿数

> https://api.vc.bilibili.com/link_draw/v1/doc/upload_count

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| uid    | num  | 目标用户mid | 必要   |      |

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

 查询用户`mid=53456`的投稿相簿数

```shell
curl -G 'https://api.vc.bilibili.com/link_draw/v1/doc/upload_count' \
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
