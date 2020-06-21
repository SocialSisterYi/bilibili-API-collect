# 视频状态数

## 视频状态数1（备用  不封python 暂不支持bvID）
> http://api.bilibili.com/archive_stat/stat

*方式:GET*

**url参数：**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| aid    | num  | 视频avID | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                            |
| ------- | ---- | -------- | ----------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />40001：请求错误<br />40003：无视频 |
| message | str  | 错误信息 | 默认为0                                         |
| ttl     | num  | 1        | 作用尚不明确                                    |
| data    | obj  | 信息本体 |                                                 |

`data`对象：

| 字段       | 类型                     | 内容                           | 备注                 |
| ---------- | ------------------------ | ------------------------------ | -------------------- |
| aid        | num                      | 视频avID                       |                      |
| view       | 正常：num<br />屏蔽：str | 正常：播放次数<br />屏蔽："--" |                      |
| danmaku    | num                      | 弹幕条数                       |                      |
| reply      | num                      | 评论条数                       |                      |
| favorite   | num                      | 收藏人数                       |                      |
| coin       | num                      | 投币枚数                       |                      |
| share      | num                      | 分享次数                       |                      |
| now_rank   | num                      | 0                              | 作用尚不明确         |
| his_rank   | num                      | 历史最高排行                   |                      |
| like       | num                      | 获赞次数                       |                      |
| dislike    | num                      | 0                              | 作用尚不明确         |
| no_reprint | num                      | 禁止转载标志                   | 0：无<br />1：禁止   |
| copyright  | num                      | 版权标志                       | 1：自制<br />2：转载 |

**示例：**

查询视频`av91572143`的状态数

http://api.bilibili.com/archive_stat/stat?aid=91572143

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"aid": 91572143,
		"view": 2236510,
		"danmaku": 37856,
		"reply": 5723,
		"favorite": 131317,
		"coin": 143389,
		"share": 44598,
		"now_rank": 0,
		"his_rank": 4,
		"like": 264314,
		"dislike": 0,
		"no_reprint": 1,
		"copyright": 1
	}
}
```



## 视频状态数2（常用 封杀python）

> http://api.bilibili.com/x/web-interface/archive/stat

*方式:GET*

**此API克python，UA中只要存在\*python\*字眼就无法获取正确内容，如用py请改UA**

**此API克python，UA中只要存在\*python\*字眼就无法获取正确内容，如用py请改UA**

**此API克python，UA中只要存在\*python\*字眼就无法获取正确内容，如用py请改UA**

**url参数：**

| 参数名 | 类型 | 内容     | 必要性       | 备注               |
| ------ | ---- | -------- | ------------ | ------------------ |
| aid    | num  | 视频avID | 必要（可选） | avID与bvID任选一个 |
| bvid   | str  | 视频bvID | 必要（可选） | avID与bvID任选一个 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                            |
| ------- | ---- | -------- | ----------------------------------------------- |
| code    | num  | 返回值   | 0：成功 <br />-400：请求错误<br />40003：无视频 |
| message | str  | 错误信息 | 默认为0                                         |
| ttl     | num  | 1        | 作用尚不明确                                    |
| data    | obj  | 信息本体 |                                                 |

`data`对象：

| 字段       | 类型                     | 内容                           | 备注                 |
| ---------- | ------------------------ | ------------------------------ | -------------------- |
| aid        | num                      | 视频avID                       |                      |
| bvid       | str                      | 视频bvID                       |                      |
| view       | 正常：num<br />屏蔽：str | 正常：播放次数<br />屏蔽："--" |                      |
| danmaku    | num                      | 弹幕条数                       |                      |
| reply      | num                      | 评论条数                       |                      |
| favorite   | num                      | 收藏人数                       |                      |
| coin       | num                      | 投币枚数                       |                      |
| share      | num                      | 分享次数                       |                      |
| now_rank   | num                      | 0                              | 作用尚不明确         |
| his_rank   | num                      | 历史最高排行                   |                      |
| like       | num                      | 获赞次数                       |                      |
| dislike    | num                      | 0                              | 作用尚不明确         |
| no_reprint | num                      | 禁止转载标志                   | 0：无<br />1：禁止   |
| copyright  | num                      | 版权标志                       | 1：自制<br />2：转载 |
| argue_msg  | str                      | 警告信息                       | 默认为空             |
| evaluation | str                      | 视频评分                       | 默认为空             |

**示例：**

查询视频`av2271112`/`BV1es411D7sW`的状态数

http://api.bilibili.com/x/web-interface/archive/stat?aid=2271112

同http://api.bilibili.com/x/web-interface/archive/stat?bvid=BV1es411D7sW

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"aid": 2271112,
		"bvid": "BV1es411D7sW",
		"view": 26408224,
		"danmaku": 161919,
		"reply": 52825,
		"favorite": 892560,
		"coin": 599649,
		"share": 240573,
		"like": 628592,
		"now_rank": 0,
		"his_rank": 4,
		"no_reprint": 0,
		"copyright": 1,
		"argue_msg": "",
		"evaluation": ""
	}
}
```



