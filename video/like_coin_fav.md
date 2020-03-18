# 视频点赞&投币&收藏

## 操作

### 点赞视频 

<img src="/imgs/like.svg" width="100" height="100"/>

需要登录(SESSDATA)

api.bilibili.com/x/web-interface/archive/like

*方式：POST*

参数：

| 参数名 | 内容                | 必要性 | 备注               |
| ------ | ------------------- | ------ | ------------------ |
| aid    | 视频avID            | 必要   |                    |
| like   | 操作方式            | 必要   | 1点赞<br />2取消赞 |
| csrf   | cookies中的bili_jct | 必要   |                    |

**json回复：**

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0成功 <br />-400请求错误<br />10003不存在该稿件<br />-111csrf校验失败<br />-101账号未登录<br />65006已赞过<br />65004取消点赞失败 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |

示例：

curl -b "SESSDATA=xxx" -d "aid=79677524&like=1&csrf=xxx" "http://api.bilibili.com/x/web-interface/archive/like"

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1
}
```

成功为视频av79677524点赞



### 投币视频

<img src="/imgs/coin.svg" width="100" height="100"/>

需要登录(SESSDATA)

api.bilibili.com/x/web-interface/coin/add

*方式：POST*

参数：

| 参数名      | 内容                | 必要性 | 备注                                |
| ----------- | ------------------- | ------ | ----------------------------------- |
| aid         | 视频avID            | 必要   |                                     |
| select_like | 同时点赞            | 非必要 | 0不点赞<br />1同时点赞<br />默认为0 |
| multiply    | 投币数量            | 必要   | 上限为2                             |
| csrf        | cookies中的bili_jct | 必要   |                                     |

**json回复：**

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0成功<br />-400请求错误<br />10003不存在该稿件<br />-111csrf校验失败<br />-101账号未登录<br />34005超过投币上限<br />34002不能给自己投币<br />-104硬币不足 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |
| data    | obj  | 信息本体 |                                                              |

data 对象：

| 字段 | 类型 | 内容         | 备注                                 |
| ---- | ---- | ------------ | ------------------------------------ |
| like | bool | 是否点赞成功 | true成功<br />false失败 已赞过则失败 |

示例：

curl -b "SESSDATA=xxx" -d "aid=90671873&select_like=1&multiply=2&csrf=xxx" "api.bilibili.com/x/web-interface/coin/add"

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"like": true
	}
}
```

成功为视频av90671873投币2枚



### 收藏视频

<img src="/imgs/fav.svg" width="100" height="100"/>

需要登录(SESSDATA)

需要验证来源为 "http://www.bilibili.com" 或 "https://www.bilibili.com" 域名下

api.bilibili.com/medialist/gateway/coll/resource/deal

*方式：POST*

参数：

| 参数名        | 内容                | 必要性 | 备注      |
| ------------- | ------------------- | ------ | --------- |
| rid           | 视频avID            | 必要   |           |
| type          | 必须为2             | 必要   |           |
| add_media_ids | 需要加入的收藏夹ID  | 非必要 | 用","分隔 |
| del_media_ids | 需要删除的收藏夹ID  | 非必要 | 用","分隔 |
| csrf          | cookies中的bili_jct | 必要   |           |

**json回复：**

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0成功<br />-400请求错误<br />-403访问权限不足<br />10003不存在该稿件<br />-111csrf校验失败<br />-101账号未登录<br />72010017参数错误<br />11201已经收藏过了<br />11202已经取消收藏了 |
| message | str  | 错误信息 | 正确为success                                                |
| data    | obj  | 信息本体 |                                                              |

data 对象：

| 字段   | 类型 | 内容  | 备注         |
| ------ | ---- | ----- | ------------ |
| prompt | bool | false | 作用尚不明确 |

示例：

curl --referer "http://www.bilibili.com" -b "SESSDATA=xxx" -d "rid=90671873&type=2&add_media_ids=49166435&del_media_ids=&csrf=xxx" "http://api.bilibili.com/medialist/gateway/coll/resource/deal"

```json
{
	"code": 0,
	"data": {
		"prompt": false
	},
	"message": "success"
}
```

成功将av49166435收藏到收藏夹ID为49166435的收藏夹中



### 一键三连视频

<img src="/imgs/like.svg" align="left" width="50" height="50"/><img src="/imgs/coin.svg" align="left" width="50" height="50"/><img src="/imgs/fav.svg" width="50" height="50"/>

需要登录(SESSDATA)

api.bilibili.com/x/web-interface/archive/like/triple

*方式：POST*

参数：

| 参数名 | 内容                | 必要性 | 备注 |
| ------ | ------------------- | ------ | ---- |
| aid    | 视频avID            | 必要   |      |
| csrf   | cookies中的bili_jct | 必要   |      |

**json回复：**

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0成功<br />-400请求错误<br />10003不存在该稿件<br />-111csrf校验失败<br />-101账号未登录 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |
| data    | obj  | 信息本体 |                                                              |

data 对象：

| 字段     | 类型 | 内容         | 备注    |
| -------- | ---- | ------------ | ------- |
| like     | bool | 是否点赞成功 |         |
| coin     | bool | 是否投币成功 |         |
| fav      | bool | 是否收藏成功 |         |
| multiply | num  | 投币枚数     | 默认为2 |

示例：

curl -b "SESSDATA=xxx" -d "aid=91003840&csrf=xxx" "http://api.bilibili.com/x/web-interface/archive/like/triple"

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"like": true,
		"coin": true,
		"fav": true,
		"multiply": 2
	}
}
```

成功将视频av91003840一键三连



## 判断状态

### 视频被收藏

<img src="/imgs/fav.svg" width="100" height="100"/>

需要登录(SESSDATA)

api.bilibili.com/x/v2/fav/video/favoured

*方式:GET*

参数：

| 参数名 | 内容     | 必要性 | 备注 |
| ------ | -------- | ------ | ---- |
| aid    | 视频avID | 必要   |      |

**json回复：**

| 字段    | 类型 | 内容     | 备注                                        |
| ------- | ---- | -------- | ------------------------------------------- |
| code    | num  | 返回值   | 0成功<br />-400请求错误<br />-101账号未登录 |
| message | str  | 错误信息 | 默认为0                                     |
| ttl     | num  | 1        | 作用尚不明确                                |
| data    | obj  | 信息本体 |                                             |

data 对象：

| 字段     | 类型 | 内容     | 备注         |
| -------- | ---- | -------- | ------------ |
| count    | num  | 1        | 作用尚不明确 |
| favoured | bool | 是否收藏 |              |

示例：

http://api.bilibili.com/x/v2/fav/video/favoured?aid=46281123

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"count": 1,
		"favoured": true
	}
}
```

视频av46281123的状态为已收藏



### 视频被点赞

<img src="/imgs/like.svg" width="100" height="100"/>

需要登录(SESSDATA)

api.bilibili.com/x/web-interface/archive/has/like

*方式:GET*

参数：

| 参数名 | 内容     | 必要性 | 备注 |
| ------ | -------- | ------ | ---- |
| aid    | 视频avID | 必要   |      |

**json回复：**

| 字段    | 类型 | 内容       | 备注                                        |
| ------- | ---- | ---------- | ------------------------------------------- |
| code    | num  | 返回值     | 0成功<br />-400请求错误<br />-101账号未登录 |
| message | str  | 错误信息   | 默认为0                                     |
| ttl     | num  | 1          | 作用尚不明确                                |
| data    | num  | 是否被点赞 | 0未点赞<br />1已点赞                        |

示例：

http://api.bilibili.com/x/web-interface/archive/has/like?aid=39330059

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": 1
}
```

视频av39330059的状态为已点赞



### 视频被投币

<img src="/imgs/coin.svg" width="100" height="100"/>

需要登录(SESSDATA)

api.bilibili.com/x/web-interface/archive/coins

*方式:GET*

参数：

| 参数名 | 内容     | 必要性 | 备注 |
| ------ | -------- | ------ | ---- |
| aid    | 视频avID | 必要   |      |

**json回复：**

| 字段    | 类型 | 内容     | 备注                                        |
| ------- | ---- | -------- | ------------------------------------------- |
| code    | num  | 返回值   | 0成功<br />-400请求错误<br />-101账号未登录 |
| message | str  | 错误信息 | 默认为0                                     |
| ttl     | num  | 1        | 作用尚不明确                                |
| data    | obj  | 信息本体 |                                             |

data 对象：

| 字段     | 类型 | 内容     | 备注      |
| -------- | ---- | -------- | --------- |
| multiply | num  | 投币枚数 | 未投币为0 |

示例：

http://api.bilibili.com/x/web-interface/archive/coins?aid=37896701

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"multiply": 2
	}
}
```

视频av37896701的投币数为2枚

