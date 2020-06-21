# 视频点赞&投币&收藏

**本页所有操作均需登录（SESSDATA）**

## 操作

### 点赞视频 

<img src="/imgs/like.svg" width="100" height="100"/>

> http://api.bilibili.com/x/web-interface/archive/like

*方式：POST*

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                | 必要性       | 备注                   |
| ------ | ---- | ------------------- | ------------ | ---------------------- |
| aid    | num  | 视频avID            | 必要（可选） | avID与bvID任选一个     |
| bvid   | str  | 视频bvID            | 必要（可选） | avID与bvID任选一个     |
| like   | num  | 操作方式            | 必要         | 1：点赞<br />2：取消赞 |
| csrf   | str  | cookies中的bili_jct | 必要         |                        |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功 <br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />10003：不存在该稿件<br />65006：已赞过<br />65004：取消点赞失败 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |

**示例：**

为视频av79677524/BV1uJ411r7hL点赞

curl -b "SESSDATA=xxx" -d "aid=79677524&like=1&csrf=xxx" "http://api.bilibili.com/x/web-interface/archive/like"

同curl -b "SESSDATA=xxx" -d "aid=BV1uJ411r7hL&like=1&csrf=xxx" "http://api.bilibili.com/x/web-interface/archive/like"

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1
}
```



### 投币视频

<img src="/imgs/coin.svg" width="100" height="100"/>

> http://api.bilibili.com/x/web-interface/coin/add

*方式：POST*

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名      | 类型 | 内容                | 必要性       | 备注                                    |
| ----------- | ---- | ------------------- | ------------ | --------------------------------------- |
| aid         | num  | 视频avID            | 必要（可选） | avID与bvID任选一个                      |
| bvid        | str  | 视频bvID            | 必要（可选） | avID与bvID任选一个                      |
| select_like | num  | 附加点赞            | 非必要       | 0：不点赞<br />1：同时点赞<br />默认为0 |
| multiply    | num  | 投币数量            | 必要         | 上限为2                                 |
| csrf        | str  | cookies中的bili_jct | 必要         |                                         |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-104：硬币不足<br />-111：csrf校验失败<br />-400：请求错误<br />10003：不存在该稿件<br />34002：不能给自己投币<br />34003：非法的投币数量<br />34005：超过投币上限 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |
| data    | obj  | 信息本体 |                                                              |

data 对象：

| 字段 | 类型 | 内容         | 备注                                                  |
| ---- | ---- | ------------ | ----------------------------------------------------- |
| like | bool | 是否点赞成功 | true：成功<br />false：失败<br />已赞过则附加点赞失败 |

**示例：**

为视频`av90671873`/`BV1N7411A7wC`投币2枚

curl -b "SESSDATA=xxx" -d "aid=90671873&select_like=1&multiply=2&csrf=xxx" "http://api.bilibili.com/x/web-interface/coin/add"

同curl -b "SESSDATA=xxx" -d "bvid=BV1N7411A7wC&select_like=1&multiply=2&csrf=xxx" "http://api.bilibili.com/x/web-interface/coin/add"

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



### 收藏视频（暂不支持bvID）

<img src="/imgs/fav.svg" width="100" height="100"/>

> http://api.bilibili.com/medialist/gateway/coll/resource/deal

*方式：POST*

需要验证`referer`为 `http://www.bilibili.com`或`https://www.bilibili.com`域名下

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名        | 类型 | 内容                | 必要性 | 备注                    |
| ------------- | ---- | ------------------- | ------ | ----------------------- |
| rid           | num  | 视频avID            | 必要   |                         |
| type          | num  | 必须为2             | 必要   |                         |
| add_media_ids | nums | 需要加入的收藏夹ID  | 非必要 | 同时添加多个，用`,`分隔 |
| del_media_ids | nums | 需要取消的收藏夹ID  | 非必要 | 同时取消多个，用`,`分隔 |
| csrf          | str  | cookies中的bili_jct | 必要   |                         |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />-403：访问权限不足<br />10003：不存在该稿件<br />11201：已经收藏过了<br />11202：已经取消收藏了<br />72010017：参数错误 |
| message | str  | 错误信息 | 正确为success                                                |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段   | 类型 | 内容  | 备注         |
| ------ | ---- | ----- | ------------ |
| prompt | bool | false | 作用尚不明确 |

**示例：**

将视频`av49166435`添加到收藏夹`49166435`中

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



### 一键三连视频

<img src="/imgs/like.svg" align="left" width="50" height="50"/><img src="/imgs/coin.svg" align="left" width="50" height="50"/><img src="/imgs/fav.svg" width="50" height="50"/>

> http://api.bilibili.com/x/web-interface/archive/like/triple

*方式：POST*

同时点赞投币收藏视频，收藏于默认收藏夹中

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                | 必要性       | 备注               |
| ------ | ---- | ------------------- | ------------ | ------------------ |
| aid    | num  | 视频avID            | 必要（可选） | avID与bvID任选一个 |
| bvid   | str  | 视频bvID            | 必要（可选） | avID与bvID任选一个 |
| csrf   | str  | cookies中的bili_jct | 必要         |                    |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />10003：不存在该稿件 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段     | 类型 | 内容         | 备注    |
| -------- | ---- | ------------ | ------- |
| like     | bool | 是否点赞成功 |         |
| coin     | bool | 是否投币成功 |         |
| fav      | bool | 是否收藏成功 |         |
| multiply | num  | 投币枚数     | 默认为2 |

**示例：**

将视频`av91003840`/`BV1Wj411f79U`一键三连

curl -b "SESSDATA=xxx" -d "aid=91003840&csrf=xxx" "http://api.bilibili.com/x/web-interface/archive/like/triple"

同curl -b "SESSDATA=xxx" -d "bvid=BV1Wj411f79U&csrf=xxx" "http://api.bilibili.com/x/web-interface/archive/like/triple"

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



## 判断状态

### 视频是否被收藏

<img src="/imgs/fav.svg" width="100" height="100"/>

> http://api.bilibili.com/x/v2/fav/video/favoured

*方式:GET*

**url参数：**

| 参数名 | 类型     | 内容               | 必要性 | 备注 |
| ------ | -------- | ------------------ | ------ | ---- |
| aid    | num或str | 视频avID或视频bvID | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        | 作用尚不明确                                      |
| data    | obj  | 信息本体 |                                                   |

data 对象：

| 字段     | 类型 | 内容     | 备注                            |
| -------- | ---- | -------- | ------------------------------- |
| count    | num  | 1        | 作用尚不明确                    |
| favoured | bool | 是否收藏 | true：已收藏<br />false：未收藏 |

**示例：**

视频`av46281123`/`BV1Bb411H7Dv`的状态为已收藏

http://api.bilibili.com/x/v2/fav/video/favoured?aid=46281123

同http://api.bilibili.com/x/v2/fav/video/favoured?aid=BV1Bb411H7Dv

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



### 视频是否被点赞

<img src="/imgs/like.svg" width="100" height="100"/>

> http://api.bilibili.com/x/web-interface/archive/has/like

*方式:GET*

**url参数：**

| 参数名 | 类型 | 内容     | 必要性       | 备注               |
| ------ | ---- | -------- | ------------ | ------------------ |
| aid    | num  | 视频avID | 必要（可选） | avID与bvID任选一个 |
| bvid   | str  | 视频bvID | 必要（可选） | avID与bvID任选一个 |

**json回复：**

根对象：

| 字段    | 类型 | 内容       | 备注                                              |
| ------- | ---- | ---------- | ------------------------------------------------- |
| code    | num  | 返回值     | 0：成功<br />-400：请求错误<br />-101：账号未登录 |
| message | str  | 错误信息   | 默认为0                                           |
| ttl     | num  | 1          | 作用尚不明确                                      |
| data    | num  | 被点赞标志 | 0：未点赞<br />1：已点赞                          |

**示例：**

视频`av39330059`/`BV1Bt411z799`的状态为已点赞

http://api.bilibili.com/x/web-interface/archive/has/like?aid=39330059

同http://api.bilibili.com/x/web-interface/archive/has/like?bvid=BV1Bt411z799

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": 1
}
```



### 视频是否被投币

<img src="/imgs/coin.svg" width="100" height="100"/>

> http://api.bilibili.com/x/web-interface/archive/coins

*方式:GET*

**url参数：**

| 参数名 | 类型 | 内容     | 必要性       | 备注               |
| ------ | ---- | -------- | ------------ | ------------------ |
| aid    | num  | 视频avID | 必要（可选） | avID与bvID任选一个 |
| bvid   | str  | 视频bvID | 必要（可选） | avID与bvID任选一个 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        | 作用尚不明确                                      |
| data    | obj  | 信息本体 |                                                   |

`data`对象：

| 字段     | 类型 | 内容     | 备注      |
| -------- | ---- | -------- | --------- |
| multiply | num  | 投币枚数 | 未投币为0 |

**示例：**

视频`av37896701`/`BV18t411q7zz`的投币数为2枚

http://api.bilibili.com/x/web-interface/archive/coins?aid=37896701

同http://api.bilibili.com/x/web-interface/archive/coins?bvid=BV18t411q7zz

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



