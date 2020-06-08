# 专栏投币&点赞&收藏

**本页所有操作均需登录（SESSDATA）**

## 点赞文章

<img src="/imgs/like.svg" width="100" height="100"/>

> http://api.bilibili.com/x/article/like

*方式：POST*

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                | 必要性 | 备注                   |
| ------ | ---- | ------------------- | ------ | ---------------------- |
| id     | num  | 文章cvID            | 必要   |                        |
| type   | num  | 操作方式            | 必要   | 1：点赞<br />2：取消赞 |
| csrf   | str  | cookies中的bili_jct | 必要   |                        |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功 <br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />10003：不存在该稿件<br />65006：已赞过<br />65004：取消点赞失败 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |

**示例：**

为文章`cv5806746`点赞

curl -b "SESSDATA=xxx" -d "id=5806746&type=1&csrf=xxx" "http://api.bilibili.com/x/article/like"

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```



## 投币文章

<img src="/imgs/coin.svg" width="100" height="100"/>

> http://api.bilibili.com/x/web-interface/coin/add

*方式：POST*

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名   | 类型 | 内容                | 必要性 | 备注    |
| -------- | ---- | ------------------- | ------ | ------- |
| aid      | num  | 文章cvID            | 必要   |         |
| multiply | num  | 投币数量            | 必要   | 上限为2 |
| csrf     | str  | cookies中的bili_jct | 必要   |         |

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

为文章`cv5806746`投币1枚

curl -b "SESSDATA=xxx" -d "aid=5806746&multiply=1&csrf=xxx" "http://api.bilibili.com/x/web-interface/coin/add"

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "like": false
    }
}
```



## 收藏文章

<img src="/imgs/fav.svg" width="100" height="100"/>

>http://api.bilibili.com/x/article/favorites/add

*方式：POST*

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                | 必要性 | 备注 |
| ------ | ---- | ------------------- | ------ | ---- |
| id     | num  | 文章cvID            | 必要   |      |
| csrf   | str  | cookies中的bili_jct | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />-404：无此项 |
| message | str  | 错误信息 | 正确为success                                                |
| data    | obj  | 信息本体 |                                                              |

**示例：**

收藏文章`cv5806746`

curl  -b "SESSDATA=xxx" -d "id=5806746&csrf=xxx" "http://api.bilibili.com/x/article/favorites/add"

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

