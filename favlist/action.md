# 收藏夹操作

- [收藏夹操作](#收藏夹操作)
  - [新建收藏夹(web)](#新建收藏夹web)
  - [修改收藏夹(web)](#修改收藏夹web)
  - [删除收藏夹(web)](#删除收藏夹web)

---

## 新建收藏夹(web)

> https://api.bilibili.com/x/v3/fav/folder/add

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名  | 类型 | 内容       | 必要性 | 备注             |
| ------- | ---- | ---------- | ------ | ---------------- |
| title   | str  | 收藏夹标题 | 必要   |                  |
| intro   | str  | 收藏夹简介 | 非必要 |                  |
| privacy | int  | 是否公开   | 非必要 | 0公开<br />1私密 |
| cover   | str  | 封面图url  | 非必要 | 封面会被审核     |
| csrf    | str  | CSRF Token | 必要   | 位于Cookie       |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注    |
| ------- | ---- | -------- | ------- |
| code    | num  | 返回值   | 0：成功 |
| message | str  | 错误信息 | 默认为0 |
| ttl     | num  | 1        |         |
| data    | obj  | 信息本体 |         |

`data`对象：

| 字段        | 类型 | 内容              | 备注                               |
| ----------- | ---- | ----------------- | ---------------------------------- |
| id          | num  | 收藏夹id          |                                    |
| fid         | num  | 未知              | 不知道啥的id,后期补上              |
| mid         | num  | 创建者uid         |                                    |
| attr        | num  | 未知              |                                    |
| title       | str  | 收藏夹标题        |                                    |
| cover       | str  | 收藏夹封面图片url |                                    |
| upper       | obj  | 创建者信息        |                                    |
| cover_type  | num  | 封面图类别（？）  |                                    |
| cnt_info    | obj  | 收藏夹数据        | 点赞观看收藏等                     |
| type        | num  | 不知道是啥        | 一般是0                            |
| intro       | str  | 简介              |                                    |
| ctime       | num  | 0                 | 看起来意思是创建时间，但是是0      |
| mtime       | num  | 0                 | 看起来意思是创建时间，但是是0      |
| state       | num  | 未知              | 一般为0                            |
| fav_state   | num  | 收藏状态          | 已被自己收藏:1<br />未被自己收藏:0 |
| like_state  | num  | 点赞状态          | 同上                               |
| media_count | num  | 收藏夹内容数量    |                                    |

`data`对象中的`upper`对象

| 字段     | 类型 | 内容             | 备注                                            |
| -------- | ---- | ---------------- | ----------------------------------------------- |
| mid      | num  | 0                | 谁也不知道知道为啥是空的                        |
| name     | str  | 空               | 谁也不知道知道为啥是空的                        |
| face     | str  | 空               | 谁也不知道知道为啥是空的                        |
| followed | bool | 是否已关注创建者 | 肯定是false啦                                   |
| vip_type | num  | 会员类别         | 0：无<br />1：月大会员<br />2：年度及以上大会员 |

`data`对象中的`cnt_info`对象

| 字段     | 类型 | 内容   | 备注          |
| -------- | ---- | ------ | ------------- |
| collect  | num  | 收藏数 | 刚创建当然是0 |
| play     | num  | 播放数 | 刚创建当然是0 |
| thumb_up | num  | 点赞数 | 刚创建当然是0 |
| share    | unm  | 分享数 | 刚创建当然是0 |

**示例：**

创建一个叫`test`,简介是`2333`,封面`http://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png`,的公开收藏夹:

```shell
 curl 'https://api.bilibili.com/x/v3/fav/folder/add' \
 --data-urlencode 'title=test' \
 --data-urlencode 'intro=2333' \
 --data-urlencode 'privacy: 0' \
 --data-urlencode 'csrf=xxxx' \
 --data-urlencode 'cover=http://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png' \
 -b 'SESSDATA=xxxx'
```

<details>
<summary>查看响应示例：</summary>

```json  
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "id": 1182306172,
        "fid": 11823061,
        "mid": 470310172,
        "attr": 6,
        "title": "test",
        "cover": "http://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png",
        "upper": {
            "mid": 0,
            "name": "",
            "face": "",
            "followed": false,
            "vip_type": 0,
            "vip_statue": 0
        },
        "cover_type": 0,
        "cnt_info": {
            "collect": 0,
            "play": 0,
            "thumb_up": 0,
            "share": 0
        },
        "type": 0,
        "intro": "2333",
        "ctime": 0,
        "mtime": 0,
        "state": 0,
        "fav_state": 0,
        "like_state": 0,
        "media_count": 0
    }
}
```

</details>

## 修改收藏夹(web)

> https://api.bilibili.com/x/v3/fav/folder/edit

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名   | 类型 | 内容             | 必要性 | 备注             |
| -------- | ---- | ---------------- | ------ | ---------------- |
| title    | str  | 新收藏夹标题     | 必要   |                  |
| intro    | str  | 新收藏夹简介     | 非必要 |                  |
| privacy  | int  | 是否公开         | 非必要 | 0公开<br />1私密 |
| cover    | str  | 封面图url        | 非必要 | 封面会被审核     |
| csrf     | str  | CSRF Token       | 必要   | 位于Cookie       |
| media_id | int  | 欲修改的收藏夹id | 必要   |                  |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注    |
| ------- | ---- | -------- | ------- |
| code    | num  | 返回值   | 0：成功 |
| message | str  | 错误信息 | 默认为0 |
| ttl     | num  | 1        |         |
| data    | obj  | 信息本体 |         |

`data`对象：

| 字段        | 类型 | 内容              | 备注                               |
| ----------- | ---- | ----------------- | ---------------------------------- |
| id          | num  | 收藏夹id          |                                    |
| fid         | num  | 未知              | 不知道啥的id,后期补上              |
| mid         | num  | 创建者uid         |                                    |
| attr        | num  | 未知              |                                    |
| title       | str  | 收藏夹标题        |                                    |
| cover       | str  | 收藏夹封面图片url |                                    |
| upper       | obj  | 创建者信息        |                                    |
| cover_type  | num  | 封面图类别（？）  |                                    |
| cnt_info    | obj  | 收藏夹数据        | 点赞观看收藏等                     |
| type        | num  | 不知道是啥        | 一般是11                           |
| intro       | str  | 备注              |                                    |
| ctime       | num  | 创建时间          | 时间戳（秒）                       |
| mtime       | num  | 收藏时间          | 时间戳（秒）                       |
| state       | num  | 未知              | 一般为0                            |
| fav_state   | num  | 收藏状态          | 已被自己收藏:1<br />未被自己收藏:0 |
| like_state  | num  | 点赞状态          | 同上                               |
| media_count | num  | 收藏夹内容数量    |                                    |

`data`对象中的`upper`对象

| 字段       | 类型 | 内容             | 备注                                            |
| ---------- | ---- | ---------------- | ----------------------------------------------- |
| mid        | num  | 创建者uid        |                                                 |
| name       | str  | 创建者用户名     |                                                 |
| face       | str  | 创建者头像url    |                                                 |
| followed   | bool | 是否已关注创建者 |                                                 |
| vip_type   | num  | 会员类别         | 0：无<br />1：月大会员<br />2：年度及以上大会员 |
| vip_statue | num  | 会员开通状态     | 0：无<br />1：有                                |

`data`对象中的`cnt_info`对象

| 字段     | 类型 | 内容   | 备注 |
| -------- | ---- | ------ | ---- |
| collect  | num  | 收藏数 |      |
| play     | num  | 播放数 |      |
| thumb_up | num  | 点赞数 |      |
| share    | unm  | 分享数 |      |

**示例：**

修改id为`1182306172`的名字为`test`,简介为`2333`,封面为`http://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png`,公开收藏夹:

```shell
 curl 'https://api.bilibili.com/x/v3/fav/folder/add' \
 --data-urlencode 'title=test' \
 --data-urlencode 'intro=2333' \
 --data-urlencode 'privacy: 0' \
 --data-urlencode 'cover=http://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png' \
 --data-urlencode 'media_id=1182306172' \
 --data-urlencode 'csrf=xxxx' \
 -b 'SESSDATA=xxxx' \
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "id": 1182306172,
        "fid": 11823061,
        "mid": 470310172,
        "attr": 6,
        "title": "test",
        "cover": "http://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png",
        "upper": {
            "mid": 0,
            "name": "",
            "face": "",
            "followed": false,
            "vip_type": 0,
            "vip_statue": 0
        },
        "cover_type": 0,
        "cnt_info": {
            "collect": 0,
            "play": 0,
            "thumb_up": 0,
            "share": 0
        },
        "type": 0,
        "intro": "2333",
        "ctime": 0,
        "mtime": 0,
        "state": 0,
        "fav_state": 0,
        "like_state": 0,
        "media_count": 0
    }
}
```

</details>

## 删除收藏夹(web)

> https://api.bilibili.com/x/v3/fav/folder/del

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名    | 类型 | 内容                    | 必要性 | 备注               |
| --------- | ---- | ----------------------- | ------ | ------------------ |
| media_ids | int  | 收藏夹id                | 必要   | 看名字貌似可以多个 |
| csrf      | str  | CSRF Token (位于Cookie) | 必要   |                    |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注    |
| ------- | ---- | -------- | ------- |
| code    | num  | 返回值   | 0：成功 |
| message | str  | 错误信息 | 成功为0 |
| ttl     | num  | 1        |         |
| data    | num  | 信息本体 | 成功为0 |

**示例：**

删除id为`1182306172`的收藏夹:

```shell
 curl 'https://api.bilibili.com/x/v3/fav/folder/del' \
 --data-urlencode 'csrf=xxxx' \
 --data-urlencode 'media_ids=1182306172' \
 -b 'SESSDATA=xxxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code":0,
    "message":"0",
    "ttl":1,
    "data":0
}
```

</details>