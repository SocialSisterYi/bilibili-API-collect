# 稿件观众操作

## 点赞

<img src="../../assets/img/like.svg" width="100" height="100"/>

### 点赞视频（web端）

> https://api.bilibili.com/x/web-interface/archive/like

*请求方式：POST*

认证方式：仅可Cookie（SESSDATA）

需验证 Cookie 中`buvid3`字段存在且正常, 否则将导致触发风控

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                      | 必要性       | 备注                   |
| ------ | ---- | ------------------------- | ------------ | ---------------------- |
| aid    | num  | 稿件 avid                 | 必要（可选） | avid 与 bvid 任选一个  |
| bvid   | str  | 稿件 bvid                 | 必要（可选） | avid 与 bvid 任选一个  |
| like   | num  | 操作方式                  | 必要         | 1：点赞<br />2：取消赞 |
| csrf   | str  | CSRF Token（位于 Cookie） | 必要         |                        |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功 <br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />-403: 账号异常<br/> 10003：不存在该稿件<br />65004：取消点赞失败<br />65006：重复点赞 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

点赞视频`av79677524`/`BV1uJ411r7hL`

avid方式：

```shell
curl 'https://api.bilibili.com/x/web-interface/archive/like' \
--data-urlencode 'aid=79677524' \
--data-urlencode 'like=1' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

bvid方式：

```shell
curl 'https://api.bilibili.com/x/web-interface/archive/like' \
--data-urlencode 'bvid=BV1uJ411r7hL' \
--data-urlencode 'like=1' \
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

### 点赞视频（APP端）

> https://app.bilibili.com/x/v2/view/like

*请求方式：POST*

认证方式：仅可APP

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名     | 类型 | 内容           | 必要性       | 备注                   |
| ---------- | ---- | -------------- | ------------ | ---------------------- |
| access_key | str  | APP 登录 Token | APP 方式必要 |                        |
| aid        | num  | 稿件 avid      | 必要         |                        |
| like       | num  | 操作方式       | 必要         | 0：点赞<br />1：取消赞 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功 <br />-101：账号未登录<br />-400：请求错误<br />-403: 账号异常<br />10003：不存在该稿件 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 数据本体 |                                                              |

`data`对象：

| 字段  | 类型 | 内容         | 备注 |
| ----- | ---- | ------------ | ---- |
| toast | str  | 提示信息内容 |      |

**示例：**

点赞视频`av79677524`

```shell
curl 'https://app.bilibili.com/x/v2/view/like' \
--data-urlencode 'access_key=xxx' \
--data-urlencode 'aid=79677524' \
--data-urlencode 'like=0'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "toast": "点赞收到！视频可能推荐哦"
    }
}
```

</details>

### 判断视频近期是否被点赞（双端）

> https://api.bilibili.com/x/web-interface/archive/has/like

*请求方式：GET*

认证方式：APP或Cookie（SESSDATA）

注: 这一 API 实际上只能判断出视频**在近期内**是否被点赞, 并不能判断出视频是否被点赞.
「近期」的定义不明, 但至少半年前点赞过的视频, 用这一接口获取到的结果就已经是 `0` 了. 参见 [#380](https://github.com/SocialSisterYi/bilibili-API-collect/issues/380).

**url参数：**

| 参数名     | 类型 | 内容           | 必要性       | 备注                  |
| ---------- | ---- | -------------- | ------------ | --------------------- |
| access_key | str  | APP 登录 Token | APP 方式必要 |                       |
| aid        | num  | 稿件 avid      | 必要（可选） | avid 与 bvid 任选一个 |
| bvid       | str  | 稿件 bvid      | 必要（可选） | avid 与 bvid 任选一个 |

**json回复：**

根对象：

| 字段    | 类型 | 内容       | 备注                                              |
| ------- | ---- | ---------- | ------------------------------------------------- |
| code    | num  | 返回值     | 0：成功<br />-400：请求错误<br />-101：账号未登录 |
| message | str  | 错误信息   | 默认为0                                           |
| ttl     | num  | 1          |                                                   |
| data    | num  | 被点赞标志 | 0：未点赞<br />1：已点赞                          |

**示例：**

视频`av39330059`/`BV1Bt411z799`的状态为已点赞

avid方式：

```shell
curl -G 'https://api.bilibili.com/x/web-interface/archive/has/like' \
--data-urlencode 'aid=39330059' \
-b 'SESSDATA=xxx'
```

bvid方式：

```shell
curl -G 'https://api.bilibili.com/x/web-interface/archive/has/like' \
--data-urlencode 'bvid=BV1Bt411z799' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": 1
}
```

</details>

## 点踩

### 点踩视频（App端）

> https://app.biliapi.net/x/v2/view/dislike

*请求方式：POST*

认证方式：仅可App

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名     | 类型 | 内容           | 必要性 | 备注                    |
| ---------- | ---- | -------------- | ------ | ----------------------- |
| access_key | str  | APP 登录 Token | 必要   |                         |
| aid        | num  | 视频 aid       | 必要   |                         |
| dislike    | num  | 操作类型       | 必要   | 0：点踩<br/>1：取消点踩 |

**json回复：**

| 字段      | 类型  | 内容   | 备注                                                                                      |
|---------|-----|------|-----------------------------------------------------------------------------------------|
| code    | num | 返回值  | 0：成功 <br />-101：账号未登录<br />-400：请求错误<br />-404：啥都木有<br/> 65005：取消踩失败 未点踩过<br/>65007：已踩过 |
| message | str | 错误信息 | 默认为0                                                                                    |
| ttl     | num | 1    |                                                                                         |

**示例：**

点踩视频

```shell
curl -L -X POST 'https://app.biliapi.net/x/v2/view/dislike' \
-H 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'access_key=xxx' \
--data-urlencode 'aid=xxx' \
--data-urlencode 'dislike=0'
```

取消点踩

```shell
curl -L -X POST 'https://app.biliapi.net/x/v2/view/dislike' \
-H 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'access_key=xxx' \
--data-urlencode 'aid=xxx' \
--data-urlencode 'dislike=1'
```

## 投币

<img src="../../assets/img/coin.svg" width="100" height="100"/>


### 投币视频（web端）

> https://api.bilibili.com/x/web-interface/coin/add

*请求方式：POST*

认证方式：仅可Cookie（SESSDATA）

需验证 Cookie 中`buvid3`字段存在且正常, 否则将导致触发风控

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名      | 类型 | 内容                      | 必要性       | 备注                                    |
| ----------- | ---- | ------------------------- | ------------ | --------------------------------------- |
| aid         | num  | 稿件 avid                 | 必要（可选） | avid 与 bvid 任选一个                   |
| bvid        | str  | 稿件 bvid                 | 必要（可选） | avid 与 bvid 任选一个                   |
| multiply    | num  | 投币数量                  | 必要         | 上限为2                                 |
| select_like | num  | 是否附加点赞              | 非必要       | 0：不点赞<br />1：同时点赞<br />默认为0 |
| csrf        | str  | CSRF Token（位于 Cookie） | 必要         |                                         |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-104：硬币不足<br />-111：csrf校验失败<br />-400：请求错误<br />-403:   账号异常<br />10003：不存在该稿件<br />34002：不能给自己投币<br />34003：非法的投币数量<br />34004：投币间隔太短<br />34005：超过投币上限 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 信息本体 |                                                              |

data 对象：

| 字段 | 类型 | 内容         | 备注                                                  |
| ---- | ---- | ------------ | ----------------------------------------------------- |
| like | bool | 是否点赞成功 | true：成功<br />false：失败<br />已赞过则附加点赞失败 |

**示例：**

为视频`av90671873`/`BV1N7411A7wC`投币2枚

avid方式：

```shell
curl 'https://api.bilibili.com/x/web-interface/coin/add' \
--data-urlencode 'aid=90671873' \
--data-urlencode 'select_like=1' \
--data-urlencode 'multiply=2' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

bvid方式：

```shell
curl 'https://api.bilibili.com/x/web-interface/coin/add' \
--data-urlencode 'bvid=BV1N7411A7wC' \
--data-urlencode 'select_like=1' \
--data-urlencode 'multiply=2' \
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
		"like": true
	}
}
```

</details>

### 投币视频（APP端）

> https://app.bilibili.com/x/v2/view/coin/add

*请求方式：POST*

认证方式：仅可APP

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名      | 类型 | 内容           | 必要性       | 备注                                    |
| ----------- | ---- | -------------- | ------------ | --------------------------------------- |
| access_key  | str  | APP 登录 Token | APP 方式必要 |                                         |
| aid         | num  | 稿件 avid      | 必要         |                                         |
| multiply    | num  | 投币数量       | 必要         | 上限为2                                 |
| select_like | num  | 附加点赞       | 非必要       | 0：不点赞<br />1：同时点赞<br />默认为0 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                                                                                                                                                                                         |
| ------- | ---- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-104：硬币不足<br />-400：请求错误<br />10003：不存在该稿件<br />34002：不能给自己投币<br />34003：非法的投币数量<br />34004：投币间隔太短<br />34005：超过投币上限 |
| message | str  | 错误信息 | 默认为0                                                                                                                                                                                                                      |
| ttl     | num  | 1        |                                                                                                                                                                                                                              |
| data    | obj  | 信息本体 |                                                                                                                                                                                                                              |

data 对象：

| 字段 | 类型 | 内容         | 备注                                                  |
| ---- | ---- | ------------ | ----------------------------------------------------- |
| like | bool | 是否点赞成功 | true：成功<br />false：失败<br />已赞过则附加点赞失败 |

为视频`av90671873`投币2枚

```shell
curl 'https://app.bilibili.com/x/v2/view/coin/add' \
--data-urlencode 'access_key=xxx' \
--data-urlencode 'aid=90671873' \
--data-urlencode 'select_like=1' \
--data-urlencode 'multiply=2'
```

<details>
<summary>查看响应示例：</summary>

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

</details>

### 判断视频是否被投币（双端）

> https://api.bilibili.com/x/web-interface/archive/coins

*请求方式：GET*

认证方式：APP或Cookie（SESSDATA）

**url参数：**

| 参数名     | 类型 | 内容           | 必要性       | 备注                  |
| ---------- | ---- | -------------- | ------------ | --------------------- |
| access_key | str  | APP 登录 Token | APP方式必要  |                       |
| aid        | num  | 稿件 avid      | 必要（可选） | avid 与 bvid 任选一个 |
| bvid       | str  | 稿件 bvid      | 必要（可选） | avid 与 bvid 任选一个 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        |                                                   |
| data    | obj  | 信息本体 |                                                   |

`data`对象：

| 字段     | 类型 | 内容     | 备注      |
| -------- | ---- | -------- | --------- |
| multiply | num  | 投币枚数 | 未投币为0 |

**示例：**

视频`av37896701`/`BV18t411q7zz`的投币数为2枚

avid方式：

```shell
curl -G 'https://api.bilibili.com/x/web-interface/archive/coins' \
--data-urlencode 'aid=37896701' \
-b 'SESSDATA=xxx'
```

bvid方式：

```shell
curl -G 'https://api.bilibili.com/x/web-interface/archive/coins' \
--data-urlencode 'bvid=BV18t411q7zz' \
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
		"multiply": 2
	}
}
```

</details>

## 收藏

<img src="../../assets/img/fav.svg" width="100" height="100"/>

### 收藏视频（双端）

> https://api.bilibili.com/medialist/gateway/coll/resource/deal

*请求方式：POST*

认证方式：APP或Cookie（SESSDATA）

鉴权方式：Cookie方式时需要验证referer为 `.bilibili.com`域名下

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名        | 类型 | 内容                     | 必要性         | 备注                           |
| ------------- | ---- | ------------------------ | -------------- | ------------------------------ |
| access_key    | str  | APP 登录 Token           | APP 方式必要   |                                |
| rid           | num  | 稿件 avid                | 必要           |                                |
| type          | num  | 必须为2                  | 必要           |                                |
| add_media_ids | nums | 需要加入的收藏夹 mlid      | 必要(可选)   | 同时添加多个，用`,`（%2C）分隔 |
| del_media_ids | nums | 需要取消的收藏夹 mlid      | 必要(可选)   | 同时取消多个，用`,`（%2C）分隔 |
| csrf          | str  | CSRF Token（位于 Cookie） | Cookie 方式必要 |                                |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                                                                                                                                                                                            |
| ------- | ---- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />-403：访问权限不足<br />10003：不存在该稿件<br />11010: 您访问的内容不存在<br />11201：已经收藏过了<br />11202：已经取消收藏了<br />11203：达到收藏上限<br />72010017：参数错误 |
| message | str  | 错误信息 | 正确为success                                                                                                                                                                                                                   |
| data    | obj  | 信息本体 |                                                                                                                                                                                                                                 |

`data`对象：

| 字段   | 类型 | 内容                 | 备注                    |
| ------ | ---- | -------------------- | ----------------------- |
| prompt | bool | 是否为未关注用户收藏 | false：否<br />true：是 |

**示例：**

将视频`av49166435`添加到收藏夹`49166435`中

Cookie方式：

```shell
curl 'https://api.bilibili.com/medialist/gateway/coll/resource/deal' \
--data-urlencode 'rid=90671873' \
--data-urlencode 'type=2' \
--data-urlencode 'add_media_ids=49166435' \
--data-urlencode 'del_media_ids=' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx' \
-e 'https://www.bilibili.com'
```

APP方式：

```shell
curl 'https://api.bilibili.com/medialist/gateway/coll/resource/deal' \
--data-urlencode 'access_key=xxx' \
--data-urlencode 'rid=90671873' \
--data-urlencode 'type=2' \
--data-urlencode 'add_media_ids=49166435' \
--data-urlencode 'del_media_ids='
```

<details>
<summary>查看响应示例：</summary>

```json
{
	"code": 0,
	"data": {
		"prompt": false
	},
	"message": "success"
}
```

</details>

### 收藏视频（Web端）

> https://api.bilibili.com/x/v3/fav/resource/deal

*请求方式: POST*

认证方式: Cookie（SESSDATA）

**正文参数(application/x-www-form-urlencoded):**

| 参数名        | 类型 | 内容                               | 必要性       | 备注                           |
| ------------- | ---- | ---------------------------------- | ------------ | ------------------------------ |
| rid           | num  | 稿件 avid                          | 必要         |                                |
| type          | num  | 必须为2                            | 必要         |                                |
| add_media_ids | nums | 需要加入的收藏夹 mlid              | 必要(可选) | 同时添加多个，用`,`（%2C）分隔 |
| del_media_ids | nums | 需要取消的收藏夹 mlid              | 必要(可选) | 同时取消多个，用`,`（%2C）分隔 |
| csrf          | str  | CSRF Token (即 Cookie 中 bili_jct) | 必要         |                                |
| platform      | str  | 平台标识?                          | 非必要       | web端: web                     |
| eab_x         | num  | 1                                  | 非必要       | 作用尚不明确                   |
| ramval        | num  | 正整数                             | 非必要       | 可能与在该页面的停留时间相关?  |
| ga            | num  | 1                                  | 非必要       | 作用尚不明确                   |
| gaia_source   | str  | ???                                | 非必要       | web端: web_normal              |

**JSON回复:**

根对象:

| 字段    | 类型 | 内容     | 备注    |
| ------- | ---- | -------- | ------- |
| code    | num  | 返回值   | 0: 成功<br />-101: 账号未登录<br />-111: csrf 校验失败<br />2001000: 参数错误 |
| message | str  | 错误信息 | 默认为0 |
| ttl     | num  | 1        |         |
| data    | obj  | 信息本体 | 错误时为 null 或不存在 |

`data`对象:

| 字段        | 类型 | 内容                  | 备注                    |
| ----------- | ---- | --------------------- | ----------------------- |
| prompt      | bool | 是否为未关注用户收藏? | false：否<br />true：是 |
| ga_data     | null |                       | 作用尚不明确            |
| toast_msg   | str  | 空                    | 作用尚不明确            |
| success_num | num  | 0                     | 作用尚不明确            |

**示例:**

将视频 `av2` 添加到收藏夹 `645769214` 中

```shell
curl -X POST "https://api.bilibili.com/x/v3/fav/resource/deal" \
--data-urlencode "rid=2" \
--data-urlencode "type=2" \
--data-urlencode "csrf=xxx" \
--data-urlencode "add_media_ids=1428261914" \
-b "SESSDATA=xxx"
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "prompt": false,
    "ga_data": null,
    "toast_msg": "",
    "success_num": 0
  }
}
```

</details>

### 判断视频是否被收藏（双端）

> https://api.bilibili.com/x/v2/fav/video/favoured

*请求方式：GET*

认证方式：APP或Cookie（SESSDATA）

**url参数：**

| 参数名     | 类型       | 内容                  | 必要性       | 备注 |
| ---------- | ---------- | --------------------- | ------------ | ---- |
| access_key | str        | APP 登录 Token        | APP 方式必要 |      |
| aid        | num 或 str | 稿件 avid 或稿件 bvid | 必要         |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        |                                                   |
| data    | obj  | 信息本体 |                                                   |

data 对象：

| 字段     | 类型 | 内容     | 备注                            |
| -------- | ---- | -------- | ------------------------------- |
| count    | num  | 1        | 作用尚不明确                    |
| favoured | bool | 是否收藏 | true：已收藏<br />false：未收藏 |

**示例：**

视频`av46281123`/`BV1Bb411H7Dv`的状态为已收藏

avid方式：

```shell
curl -G 'https://api.bilibili.com/x/v2/fav/video/favoured' \
--data-urlencode 'aid=46281123' \
-b 'SESSDATA=xxx'
```

bvid方式：

```shell
curl -G 'https://api.bilibili.com/x/v2/fav/video/favoured' \
--data-urlencode 'aid=BV1Bb411H7Dv' \
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
		"count": 1,
		"favoured": true
	}
}
```

</details>

## 一键三连

<img src="../../assets/img/like.svg" align="left" width="50" height="50"/><img src="../../assets/img/coin.svg" align="left" width="50" height="50"/><img src="../../assets/img/fav.svg" width="50" height="50"/>

### 一键三连视频（web端）

> https://api.bilibili.com/x/web-interface/archive/like/triple

*请求方式：POST*

认证方式：仅可Cookie（SESSDATA）

同时点赞投币收藏视频，收藏于默认收藏夹中

需验证 Cookie 中`buvid3`字段存在且正常, 否则将导致触发风控

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                      | 必要性       | 备注                  |
| ------ | ---- | ------------------------- | ------------ | --------------------- |
| aid    | num  | 稿件 avid                 | 必要（可选） | avid 与 bvid 任选一个 |
| bvid   | str  | 稿件 bvid                 | 必要（可选） | avid 与 bvid 任选一个 |
| csrf   | str  | CSRF Token（位于 Cookie） | 必要         |                       |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                                                       |
| ------- | ---- | -------- |------------------------------------------------------------------------------------------|
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />10003：不存在该稿件<br />-403: 账号异常 |
| message | str  | 错误信息 | 默认为0                                                                                     |
| ttl     | num  | 1        |                                                                                          |
| data    | obj  | 信息本体 |                                                                                          |

`data`对象：

| 字段     | 类型 | 内容         | 备注                        |
| -------- | ---- | ------------ | --------------------------- |
| like     | bool | 是否点赞成功 | true：成功<br />false：失败 |
| coin     | bool | 是否投币成功 | true：成功<br />false：失败 |
| fav      | bool | 是否收藏成功 | true：成功<br />false：失败 |
| multiply | num  | 投币枚数     | 默认为2                     |

**示例：**

将视频`av91003840`/`BV1Wj411f79U`一键三连

avid方式：

```shell
curl 'https://api.bilibili.com/x/web-interface/archive/like/triple' \
--data-urlencode 'aid=91003840' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

bvid方式：

```shell
curl 'https://api.bilibili.com/x/web-interface/archive/like/triple' \
--data-urlencode 'bvid=BV1Wj411f79U' \
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
		"like": true,
		"coin": true,
		"fav": true,
		"multiply": 2
	}
}
```

</details>

### 一键三连视频（APP端）

> https://app.bilibili.com/x/v2/view/like/triple

*请求方式：POST*

认证方式：仅可APP

同时点赞投币收藏视频，收藏于默认收藏夹中

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名     | 类型 | 内容           | 必要性       | 备注 |
| ---------- | ---- | -------------- | ------------ | ---- |
| access_key | str  | APP 登录 Token | APP 方式必要 |      |
| aid        | num  | 稿件 avid      | 必要         |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                                       |
| ------- | ---- | -------- | -------------------------------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误<br />10003：不存在该稿件 |
| message | str  | 错误信息 | 默认为0                                                                    |
| ttl     | num  | 1        |                                                                            |
| data    | obj  | 信息本体 |                                                                            |

`data`对象：

| 字段     | 类型 | 内容         | 备注                        |
| -------- | ---- | ------------ | --------------------------- |
| like     | bool | 是否点赞成功 | true：成功<br />false：失败 |
| coin     | bool | 是否投币成功 | true：成功<br />false：失败 |
| fav      | bool | 是否收藏成功 | true：成功<br />false：失败 |
| multiply | num  | 投币枚数     | 默认为2                     |

**示例：**

将视频`av91003840`一键三连

```shell
curl 'https://app.bilibili.com/x/v2/view/like/triple' \
--data-urlencode 'access_key=xxx' \
--data-urlencode 'aid=91003840'
```

<details>
<summary>查看响应示例：</summary>

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

</details>

## 分享

### 分享视频 （Web端）

> https://api.bilibili.com/x/web-interface/share/add

*请求方式：POST*

鉴权方式: Cookie (buvid3)

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                      | 必要性       | 备注                  |
| ------ | ---- | ------------------------- | ------------ | --------------------- |
| aid | num | 稿件 aid | 必要 (可选) | aid 与 bvid 任选一个 |
| bvid | str | 稿件 bvid | 必要 (可选) | aid 与 bvid 任选一个 |
| csrf | str | CSRF Token (即 Cookie 中 bili_jct) | 不必要 | |
| eab_x | num | 2 | 不必要 | 作用尚不明确 |
| ramval | num | 0 | 不必要 | 作用尚不明确 |
| source | str | web_normal | 不必要 | |
| ga | num | 1 | 不必要 | 可能与风控有关? |

**json回复：**

根对象：

| 字段    | 类型 | 内容       | 备注                                                                      |
| ------- | ---- | ---------- | ------------------------------------------------------------------------- |
| code    | num  | 返回值     | 0: 成功<br />-101: 账号未登录<br />-111: csrf校验失败<br />-400: 请求错误<br />403: 账号异常,操作失败<br />71000: 重复分享 |
| message | str  | 错误信息   | 默认为0                                                                   |
| ttl     | num  | 1          |                                                                           |
| data    | num  | 当前分享数 |                                                                           |

**示例：**

分享视频`BV1oA411776z`

```shell
curl 'https://api.bilibili.com/x/web-interface/share/add' \
--data-urlencode 'csrf=xxx' \
--data-urlencode 'bvid=BV1oA411776z'
```

<details>
<summary>查看响应示例：</summary>

```json
{
	"code":0,
	"message":"0",
	"ttl":1,
	"data":19
}
```

</details>
