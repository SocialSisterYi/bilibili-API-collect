# 通知消息

## 获取未读消息数

> <https://api.bilibili.com/x/msgfeed/unread>

> <https://api.vc.bilibili.com/x/im/web/msgfeed/unread> (新接口)

*请求方式：GET*

认证方式：Cookie（SESSDATA）

本接口不会返回未读的私信数，要获取未读的私信数请参阅[未读私信数](private_msg.md#未读私信数)相关说明

**URL参数:**

| 参数名   | 类型 | 内容             | 必要性 | 备注                      |
| -------- | ---- | ---------------- | ------ | ------------------------- |
| build    | num  | 客户端内部版本号 | 非必要 | 默认为 `0`                |
| mobi_app | str  | 平台标识         | 非必要 | 可为 `web` 等             |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                       |
| ttl     | num  | 1        |                               |
| data    | obj  | 信息本体 |                               |

`data` 对象：

| 字段          | 类型 | 内容               | 备注                       |
| ------------- | ---- | ------------------ | -------------------------- |
| at            | num  | 未读at数           |                            |
| chat          | num  | 0                  | 仅旧接口，**作用尚不明确** |
| coin          | num  | 未读投币数         |                            |
| danmu         | num  | 未读弹幕数         |                            |
| favorite      | num  | 未读收藏数         |                            |
| like          | num  | 未读点赞数         |                            |
| recv_like     | num  | 未读点赞数         | 同 `like`                  |
| recv_reply    | num  | 未读回复数         | 同 `reply`                 |
| reply         | num  | 未读回复数         |                            |
| sys_msg       | num  | 未读系统通知数     |                            |
| sys_msg_style | num  | 1                  | 仅新接口, **作用尚不明确** |
| up            | num  | 未读UP主助手信息数 |                            |

**示例：**

以下信息代表了未读点赞数为10，未读回复数为4，未读at消息数为3，未读系统通知数为2，未读UP主助手信息数为1

```shell
curl 'https://api.vc.bilibili.com/x/im/web/msgfeed/unread' \
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
    "at": 3,
    "chat": 0,
    "coin": 0,
    "danmu": 0,
    "favorite": 0,
    "like": 10,
    "recv_like": 10,
    "recv_reply": 4,
    "reply": 4,
    "sys_msg": 2,
    "sys_msg_style": 1,
    "up": 1
  }
}
```

</details>

## 获取“回复我的”信息

根据提供的 JSON 数据，我将完善文档中"获取‘回复我的’信息"部分的 `items` 对象结构。以下是完善后的文档内容：

---

## 获取"回复我的"信息

> <https://api.bilibili.com/x/msgfeed/reply>

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**URL 参数:**

| 参数名       | 类型 | 内容             | 必要性 | 备注          |
| ------------ | ---- | ---------------- | ------ | ------------- |
| build        | num  | 客户端内部版本号 | 非必要 | 默认为 `0`    |
| mobi_app     | str  | 平台标识         | 非必要 | 可为 `web` 等 |
| id           | num  | 起始 id          | 非必要 | 详情见返回    |
| reply_time   | num  | 起始时间         | 非必要 | 详情见返回    |
| platform     | str  | 平台标识         | 非必要 | 可为 `web` 等 |
| web_location | str  | 暂时不知道是啥   | 非必要 |               |

**json 回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为 0                      |
| ttl     | num  | 1        |                               |
| data    | obj  | 信息本体 |                               |

`data` 对象：

| 字段         | 类型  | 内容        | 备注                           |
| ------------ | ----- | ----------- | ------------------------------ |
| cursor       | obj   | 光标        | 下一次查询的指针               |
| items        | array | 通知列表    | 数组，每个元素代表一条回复通知 |
| last_view_at | num   | unix 时间戳 | 上次查看的时间                 |

`cursor` 对象：

| 字段   | 类型 | 内容        | 备注                                           |
| ------ | ---- | ----------- | ---------------------------------------------- |
| is_end | bool | 是否结束    | `false` 表示还有更多数据                       |
| id     | num  | 通知 id     | 最后（旧）一条通知的 id，用作下次查询的起始 id |
| time   | num  | unix 时间戳 | 最后一条通知的时间                             |

`items` 数组中的对象（每条通知）：

| 字段       | 类型 | 内容                 | 备注                         |
| ---------- | ---- | -------------------- | ---------------------------- |
| id         | num  | 通知 id              |                              |
| user       | obj  | **回复者**的用户信息 |                              |
| item       | obj  | 通知详情             |                              |
| counts     | num  | 通知计数             | 固定为 `1`，可能表示单条通知 |
| is_multi   | num  | 是否多回复           | 固定为 `0`，可能表示单条回复 |
| reply_time | num  | unix 时间戳          | 回复时间                     |

`user` 对象（回复者信息）：

| 字段     | 类型 | 内容           | 备注                           |
| -------- | ---- | -------------- | ------------------------------ |
| mid      | num  | 用户 mid       |                                |
| fans     | num  | 粉丝数         | 固定为 `0`，可能不返回实际数据 |
| nickname | str  | 用户昵称       |                                |
| avatar   | str  | 头像 URL       |                                |
| mid_link | str  | 用户主页链接   | 固定为空字符串                 |
| follow   | bool | 是否关注该用户 | `false` 表示未关注             |

`item` 对象（通知详情）：

| 字段                 | 类型  | 内容             | 备注                          |
| -------------------- | ----- | ---------------- | ----------------------------- |
| subject_id           | num   | 主体 id          | 可能是动态/视频 ID            |
| root_id              | num   | 根评论 id        | 最顶层的评论 ID               |
| source_id            | num   | 源评论 id        | 直接回复的评论 ID             |
| target_id            | num   | 目标评论 id      | 被回复的评论 ID               |
| type                 | str   | 通知类型         | 固定为 `"reply"`（回复类型）  |
| business_id          | num   | 业务类型 id      | `1`=视频评论，`11`=动态评论   |
| business             | str   | 业务名称         | `"评论"` 或 `"视频"`          |
| title                | str   | 通知标题         | 摘要文本                      |
| desc                 | str   | 描述             | 固定为空字符串                |
| image                | str   | 图片 URL         | 固定为空字符串                |
| uri                  | str   | 跳转链接         | web 端跳转链接                |
| native_uri           | str   | 客户端跳转链接   | 客户端专用跳转链接            |
| detail_title         | str   | 详细标题         | 固定为空字符串                |
| root_reply_content   | str   | 根评论内容       | 最顶层评论的文本内容          |
| source_content       | str   | 源评论内容       | 直接回复的评论内容            |
| target_reply_content | str   | 目标评论内容     | 被回复的评论内容              |
| at_details           | array | @的用户列表      | 数组，每个元素是被@的用户对象 |
| topic_details        | array | 话题详情         | 固定为空数组                  |
| hide_reply_button    | bool  | 是否隐藏回复按钮 |                               |
| hide_like_button     | bool  | 是否隐藏点赞按钮 |                               |
| like_state           | num   | 点赞状态         | `0`=未点赞                    |
| danmu                | null  | 弹幕信息         | 固定为 `null`                 |
| message              | str   | 消息内容         | 固定为空字符串                |

`at_details` 数组中的对象（被@的用户）：

| 字段     | 类型 | 内容           | 备注               |
| -------- | ---- | -------------- | ------------------ |
| mid      | num  | 用户 mid       |                    |
| fans     | num  | 粉丝数         | 固定为 `0`         |
| nickname | str  | 用户昵称       |                    |
| avatar   | str  | 头像 URL       |                    |
| mid_link | str  | 用户主页链接   | 固定为空字符串     |
| follow   | bool | 是否关注该用户 | `false` 表示未关注 |

**示例：**

```shell
curl 'https://api.bilibili.com/x/msgfeed/reply' \
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
		"cursor": {
			"is_end": false,
			"id": 799449693724680,
			"time": 1746636230
		},
		"items": [
			{
				"id": 821743585689601,
				"user": {
					"mid": 18275670,
					"fans": 0,
					"nickname": "用户A",
					"avatar": "https://example.com/avatar1.jpg",
					"mid_link": "",
					"follow": false
				},
				"item": {
					"subject_id": 353543696,
					"root_id": 264918441776,
					"source_id": 263898848977,
					"target_id": 264927311456,
					"type": "reply",
					"business_id": 11,
					"business": "评论",
					"title": "你对这个话题的见解很深刻...",
					"desc": "",
					"image": "",
					"uri": "https://www.bilibili.com/opus/1075638099321552896",
					"native_uri": "bilibili://comment/detail/11/353543696/264918441776/...",
					"detail_title": "",
					"root_reply_content": "你对这个话题的见解很深刻，我看到的是...",
					"source_content": "回复 @用户B : 谢谢你的观点",
					"target_reply_content": "@用户C @用户D @用户A",
					"at_details": [
						{
							"mid": 321257047,
							"fans": 0,
							"nickname": "用户B",
							"avatar": "https://example.com/avatar2.jpg",
							"mid_link": "",
							"follow": false
						}
					],
					"topic_details": [],
					"hide_reply_button": false,
					"hide_like_button": false,
					"like_state": 0,
					"danmu": null,
					"message": ""
				},
				"counts": 1,
				"is_multi": 0,
				"reply_time": 1749293868
			},
			{
				"id": 821238205480961,
				"user": {
					"mid": 179013671,
					"fans": 0,
					"nickname": "用户C",
					"avatar": "https://example.com/avatar3.jpg",
					"mid_link": "",
					"follow": false
				},
				"item": {
					"subject_id": 114637743855429,
					"root_id": 264873726528,
					"source_id": 263838897153,
					"target_id": 264873726528,
					"type": "reply",
					"business_id": 1,
					"business": "视频",
					"title": "你的视频内容很有趣",
					"desc": "",
					"image": "",
					"uri": "https://www.bilibili.com/video/BV1fbTgzZEVr",
					"native_uri": "bilibili://video/114637743855429?page=0&...",
					"detail_title": "",
					"root_reply_content": "你的视频内容很有趣",
					"source_content": "感谢支持",
					"target_reply_content": "",
					"at_details": [],
					"topic_details": [],
					"hide_reply_button": false,
					"hide_like_button": false,
					"like_state": 0,
					"danmu": null,
					"message": ""
				},
				"counts": 1,
				"is_multi": 0,
				"reply_time": 1749233623
			},
			{
				"id": 820914723848210,
				"user": {
					"mid": 3537122193574340,
					"fans": 0,
					"nickname": "用户D",
					"avatar": "https://example.com/avatar4.jpg",
					"mid_link": "",
					"follow": false
				},
				"item": {
					"subject_id": 353409399,
					"root_id": 264815515152,
					"source_id": 264818622496,
					"target_id": 264815515152,
					"type": "reply",
					"business_id": 11,
					"business": "评论",
					"title": "这个观点很有启发性",
					"desc": "",
					"image": "",
					"uri": "https://www.bilibili.com/opus/1075252634599817218",
					"native_uri": "bilibili://comment/detail/11/353409399/264815515152/...",
					"detail_title": "",
					"root_reply_content": "这个观点很有启发性",
					"source_content": "两人500，还行吧",
					"target_reply_content": "",
					"at_details": [],
					"topic_details": [],
					"hide_reply_button": false,
					"hide_like_button": false,
					"like_state": 0,
					"danmu": null,
					"message": ""
				},
				"counts": 1,
				"is_multi": 0,
				"reply_time": 1749195061
			}
		],
		"last_view_at": 1749440007
	}
}
```

</details>
