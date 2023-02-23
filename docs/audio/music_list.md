# 歌单&音频收藏夹详细信息

## 查询自己创建的歌单

> https://www.bilibili.com/audio/music-service-c/web/collections/list

*请求方式：GET*

认证方式：Cookie（SESSDATA）

鉴权方式：Cookie中`DedeUserID`存在且不为0

**url参数：**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| pn     | num  | 页码     | 必要   |      |
| ps     | num  | 每页项数 | 必要   |      |

**json回复：**

根对象：

| 字段 | 类型                          | 内容     | 备注                                                  |
| ---- | ----------------------------- | -------- | ----------------------------------------------------- |
| code | num                           | 返回值   | 0：成功<br />72000000：参数错误<br />72010002：未登录 |
| msg  | str                           | 错误信息 | 默认为success                                         |
| data | 正确时：obj<br />错误时：null | 信息本体 |                                                       |

`data`对象：

| 字段      | 类型   | 内容         | 备注 |
| --------- | ------ | ------------ | ---- |
| curPage   | num    | 当前页码     |      |
| pageCount | num    | 总计页数     |      |
| totalSize | num    | 总计收藏夹数 |      |
| pageSize  | num    | 当前页面项数 |      |
| data      | array | 歌单列表     |      |

`data`中的`data`数组：

| 项   | 类型 | 内容              | 备注 |
| ---- | ---- | ----------------- | ---- |
| 0    | obj  | 音频收藏夹mlid1     |      |
| n    | obj  | 音频收藏夹mlid(n+1) |      |
| ……   | obj  | ……                | ……   |

`data`数组中的对象：

| 字段      | 类型   | 内容                     | 备注                             |
| --------- | ------ | ------------------------ | -------------------------------- |
| id        | num    | 音频收藏夹mlid             |                                  |
| uid       | num    | 创建用户mid              |                                  |
| uname     | str    | 创建用户昵称             |                                  |
| title     | str    | 歌单标题                 |                                  |
| type      | num    | 收藏夹属性               | 0：普通收藏夹<br />1：默认收藏夹 |
| published | num    | 是否公开                 | 0：不公开<br />1：公开           |
| cover     | str    | 歌单封面图片url          |                                  |
| ctime     | num    | 歌单创建时间             | 时间戳                           |
| song      | num    | 歌单中的音乐数量         |                                  |
| desc      | str    | 歌单备注信息             |                                  |
| sids      | array | 歌单中的音乐             |                                  |
| menuId    | num    | 音频收藏夹对应的歌单amid |                                  |
| statistic | obj    | 歌单状态数信息           |                                  |

`data`中的`sids`数组：

| 项   | 类型 | 内容                | 备注             |
| ---- | ---- | ------------------- | ---------------- |
| 0    | num  | 收藏的音频auid1     |                  |
| n    | num  | 收藏的音频auid(n+1) | 按照歌单顺序排列 |
| ……   | num  | ……                  | ……               |

`data`中的`statistic`对象：

| 字段    | 类型 | 内容                     | 备注 |
| ------- | ---- | ------------------------ | ---- |
| sid     | num  | 音频收藏夹对应的歌单amid |      |
| play    | num  | 播放数                  |      |
| collect | num  | 收藏数                  |      |
| comment | null | 评论数                  |      |
| share   | num  | 分享数                  |      |

**示例：**

```shell
curl -G 'https://www.bilibili.com/audio/music-service-c/web/collections/list' \
--data-urlencode 'ps=2' \
--data-urlencode 'pn=1' \
-b 'SESSDATA=xxx;DedeUserID=1;'
```

共计创建了两个歌单，如下

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "curPage": 1,
        "pageCount": 1,
        "totalSize": 2,
        "pageSize": 2,
        "data": [
            {
                "id": 15967839,
                "uid": 293793435,
                "uname": "社会易姐QwQ",
                "title": "默认歌单",
                "type": 1,
                "published": 1,
                "cover": "http://i0.hdslb.com/bfs/music/1e079693701d2f525850c288fcc48fa4259a73f6.jpg",
                "ctime": 1519295502,
                "song": 13,
                "desc": "",
                "sids": [
                    11673,
                    276404,
                    15664,
                    737904,
                    108588,
                    1286999,
                    658085,
                    682118,
                    736952,
                    48716,
                    15711,
                    13598,
                    57744
                ],
                "menuId": 15958713,
                "statistic": {
                    "sid": 15958713,
                    "play": 0,
                    "collect": 0,
                    "comment": null,
                    "share": 0
                }
            },
            {
                "id": 30894022,
                "uid": 293793435,
                "uname": "社会易姐QwQ",
                "title": "test",
                "type": 0,
                "published": 1,
                "cover": "",
                "ctime": 1590154346,
                "song": 0,
                "desc": "test1",
                "sids": [],
                "menuId": 30866686,
                "statistic": {
                    "sid": 30866686,
                    "play": 0,
                    "collect": 0,
                    "comment": 0,
                    "share": 0
                }
            }
        ]
    }
}
```

</details>

## 查询音频收藏夹（默认歌单）信息

> https://www.bilibili.com/audio/music-service-c/web/collections/info

*请求方式：GET*

认证方式：Cookie（SESSDATA）

鉴权方式：Cookie中`DedeUserID`存在且不为0

**url参数：**

| 参数名 | 类型 | 内容         | 必要性 | 备注               |
| ------ | ---- | ------------ | ------ | ------------------ |
| sid    | num  | 音频收藏夹mlid | 必要   | 必须为默认收藏夹mlid |

**json回复：**

根对象：

| 字段 | 类型                          | 内容     | 备注                                                  |
| ---- | ----------------------------- | -------- | ----------------------------------------------------- |
| code | num                           | 返回值   | 0：成功<br />72000000：参数错误<br />72010002：未登录 |
| msg  | str                           | 错误信息 | 默认为success                                         |
| data | 正确时：obj<br />错误时：null | 信息本体 |                                                       |

`data`对象：

| 字段      | 类型   | 内容                     | 备注                   |
| --------- | ------ | ------------------------ | ---------------------- |
| id        | num    | 音频收藏夹mlid             |                        |
| uid       | num    | 创建用户mid              |                        |
| uname     | str    | 创建用户昵称             |                        |
| title     | str    | 默认歌单                 | 恒为`默认歌单`         |
| type      | num    | 1                        | 恒为`1`                |
| published | num    | 是否公开                 | 0：不公开<br />1：公开 |
| cover     | str    | 歌单封面图片url          |                        |
| ctime     | num    | 歌单创建时间             | 时间戳                 |
| song      | num    | 歌单中的音乐数量         |                        |
| desc      | str    | 空                       | 恒为空                 |
| sids      | array | 歌单中的音乐             |                        |
| menuId    | num    | 音频收藏夹对应的歌单amid | 与普通歌单不同通用     |
| statistic | obj    | 歌单状态数信息           |                        |

`data`中的`sids`数组：

| 项   | 类型 | 内容                | 备注             |
| ---- | ---- | ------------------- | ---------------- |
| 0    | num  | 收藏的音频auid1     |                  |
| n    | num  | 收藏的音频auid(n+1) | 按照歌单顺序排列 |
| ……   | num  | ……                  | ……               |

`data`中的`statistic`对象：

| 字段    | 类型 | 内容                     | 备注 |
| ------- | ---- | ------------------------ | ---- |
| sid     | num  | 音频收藏夹对应的歌单amid |      |
| play    | num  | 0                        |      |
| collect | num  | 0                        |      |
| comment | null | -                        |      |
| share   | num  | 0                        |      |

**示例：**

查询我的默认歌单，id为` 15967839 `

```shell
curl -G 'https://www.bilibili.com/audio/music-service-c/web/collections/info' \
--data-urlencode 'sid=15967839 ' \
-b 'SESSDATA=xxx;DedeUserID=1;'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "id": 15967839,
        "uid": 293793435,
        "uname": "社会易姐QwQ",
        "title": "默认歌单",
        "type": 1,
        "published": 1,
        "cover": "http://i0.hdslb.com/bfs/music/1e079693701d2f525850c288fcc48fa4259a73f6.jpg",
        "ctime": 1519295502,
        "song": 13,
        "desc": "",
        "sids": [
            11673,
            276404,
            15664,
            737904,
            108588,
            1286999,
            658085,
            682118,
            736952,
            48716,
            15711,
            13598,
            57744
        ],
        "menuId": 15958713,
        "statistic": {
            "sid": 15958713,
            "play": 0,
            "collect": 0,
            "comment": null,
            "share": 0
        }
    }
}
```

</details>


## 查询热门歌单

> https://www.bilibili.com/audio/music-service-c/web/menu/hit

*请求方式：GET*

**url参数：**

| 参数名 | 类型  | 内容   | 必要性 | 备注  |
| --- | --- | ---- | --- | --- |
| pn  | num | 页码   | 必要  |     |
| ps  | num | 每页项数 | 必要  |     |

**json回复：**

根对象：

| 字段   | 类型                    | 内容   | 备注                                        |
| ---- | --------------------- | ---- | ----------------------------------------- |
| code | num                   | 返回值  | 0：成功<br />72000000：参数错误<br />72010002：未登录 |
| msg  | str                   | 错误信息 | 默认为success                                |
| data | 正确时：obj<br />错误时：null | 信息本体 |                                           |

`data`对象：

| 字段        | 类型    | 内容     | 备注  |
| --------- | ----- | ------ | --- |
| curPage   | num   | 当前页码   |     |
| pageCount | num   | 总计页数   |     |
| totalSize | num   | 总计收藏夹数 |     |
| pageSize  | num   | 当前页面项数 |     |
| data      | array | 歌单列表   |     |

`data`中的`data`数组：

| 项   | 类型  | 内容             | 备注  |
| --- | --- | -------------- | --- |
| 0   | obj | 音频收藏夹mlid1     |     |
| n   | obj | 音频收藏夹mlid(n+1) |     |
| ……  | obj | ……             | ……  |

`data`数组中的对象：

| 字段        | 类型  | 内容             | 备注                            |
| --------- | --- | -------------- | ----------------------------- |
| menuId    | num | 音频收藏夹对应的歌单amid |                               |
| uid       | num | 创建用户mid        |                               |
| uname     | str | 创建用户昵称         |                               |
| title     | str | 歌单标题           |                               |
| cover     | str | 歌单封面图片url      |                               |
| intro     | str | 歌单介绍           |                               |
| type      | num | 歌单属性           | 1：普通歌单<br/>2：置顶歌单<br/>5：PGC歌单 |
| off       | num | 歌单是否公开         | 0：公开<br/>1：私密                 |
| ctime     | num | 歌单创建时间         | 时间戳                           |
| curtime   | num | 当前时间           | 时间戳                           |
| statistic | obj | 歌单状态数信息        |                               |
| snum      | num | 歌单包含歌曲个数       |                               |

`data`中的`statistic`对象：

| 字段      | 类型  | 内容             | 备注  |
| ------- | --- | -------------- | --- |
| sid     | num | 音频收藏夹对应的歌单amid |     |
| play    | num | 播放数            |     |
| collect | num | 收藏数            |     |
| comment | num | 评论数            |     |
| share   | num | 分享数            |     |

**示例：**

```shell
curl -G 'https://www.bilibili.com/audio/music-service-c/web/menu/hit' \

--data-urlencode 'ps=1' \

--data-urlencode 'pn=6'
```

使用参数：`ps=1&qn=2`

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "curPage": 1,
        "pageCount": 1,
        "totalSize": 11,
        "pageSize": 3,
        "data": [{
            "menuId": 10624,
            "uid": 32708543,
            "uname": "大家的音乐姬",
            "title": "新曲推荐",
            "cover": "http://i0.hdslb.com/bfs/music/a32c1ed4f6ec3f74f8240f4486a750dda3a509e5.jpg",
            "intro": "每天11:00更新，为你推送最新音乐",
            "type": 2,
            "off": 0,
            "ctime": 1501209433,
            "curtime": 1655712354,
            "statistic": {
                "sid": 10624,
                "play": 2366255,
                "collect": 20565,
                "comment": 1104,
                "share": 622
            },
            "snum": 16,
            "attr": 0,
            "isDefault": 0,
            "collectionId": 0
        }, {
            "menuId": 125312,
            "uid": 32708543,
            "uname": "大家的音乐姬",
            "title": "丧甜可口?你意想不到的软萌电音",
            "cover": "http://i0.hdslb.com/bfs/music/04f6c29ed094368253bc05fecb7bf990cee2d3a3.jpg",
            "intro": "这个化学反应是怦然心动?",
            "type": 1,
            "off": 0,
            "ctime": 1533298738,
            "curtime": 1655712354,
            "statistic": {
                "sid": 125312,
                "play": 298018,
                "collect": 9928,
                "comment": 89,
                "share": 239
            },
            "snum": 19,
            "attr": 0,
            "isDefault": 0,
            "collectionId": 0
        }, {
            "menuId": 26241,
            "uid": 32708543,
            "uname": "大家的音乐姬",
            "title": "那些听了会泪目的动漫歌曲",
            "cover": "http://i0.hdslb.com/bfs/music/006832318fc85fdf287667d51d83dba3b78be808.jpg",
            "intro": "那些年陪伴我们的动漫歌曲，你还记得吗？\n",
            "type": 1,
            "off": 0,
            "ctime": 1509608572,
            "curtime": 1655712354,
            "statistic": {
                "sid": 26241,
                "play": 370120,
                "collect": 8390,
                "comment": 110,
                "share": 131
            },
            "snum": 12,
            "attr": 0,
            "isDefault": 0,
            "collectionId": 0
        }]
    }
}
```

</details>

## 查询热门榜单

> https://www.bilibili.com/audio/music-service-c/web/menu/rank

*请求方式：GET*

**url参数：**

| 参数名 | 类型  | 内容   | 必要性 | 备注  |
| --- | --- | ---- | --- | --- |
| pn  | num | 页码   | 必要  |     |
| ps  | num | 每页项数 | 必要  |     |

**json回复：**

根对象：

| 字段   | 类型                    | 内容   | 备注                                        |
| ---- | --------------------- | ---- | ----------------------------------------- |
| code | num                   | 返回值  | 0：成功<br />72000000：参数错误<br />72010002：未登录 |
| msg  | str                   | 错误信息 | 默认为success                                |
| data | 正确时：obj<br />错误时：null | 信息本体 |                                           |

`data`对象：

| 字段        | 类型    | 内容     | 备注  |
| --------- | ----- | ------ | --- |
| curPage   | num   | 当前页码   |     |
| pageCount | num   | 总计页数   |     |
| totalSize | num   | 总计收藏夹数 |     |
| pageSize  | num   | 当前页面项数 |     |
| data      | array | 歌单列表   |     |

`data`中的`data`数组：

| 项   | 类型  | 内容             | 备注  |
| --- | --- | -------------- | --- |
| 0   | obj | 音频收藏夹mlid1     |     |
| n   | obj | 音频收藏夹mlid(n+1) |     |
| ……  | obj | ……             | ……  |

`data`数组中的对象：

| 字段        | 类型    | 内容             | 备注                            |
| --------- | ----- | -------------- | ----------------------------- |
| menuId    | num   | 音频收藏夹对应的歌单amid |                               |
| uid       | num   | 创建用户mid        |                               |
| uname     | str   | 创建用户昵称         |                               |
| title     | str   | 歌单标题           |                               |
| cover     | str   | 歌单封面图片url      |                               |
| intro     | str   | 歌单介绍           |                               |
| type      | num   | 歌单属性           | 1：普通歌单<br/>2：置顶歌单<br/>5：PGC歌单 |
| off       | num   | 歌单是否公开         | 0：公开<br/>1：私密                 |
| ctime     | num   | 歌单创建时间         | 时间戳                           |
| curtime   | num   | 当前时间           | 时间戳                           |
| statistic | obj   | 歌单状态数信息        |                               |
| snum      | num   | 歌单包含歌曲个数       |                               |
| audios    | array | 歌单中的音乐信息(部分)   |                               |

`data`数组中的`statistic`对象：

| 字段      | 类型  | 内容             | 备注  |
| ------- | --- | -------------- | --- |
| sid     | num | 音频收藏夹对应的歌单amid |     |
| play    | num | 收藏数            |     |
| collect | num | 点赞数            |     |
| comment | num | 评论数            |     |
| share   | num | 分享数            |     |

`data`数组中的`audios`数组：

| 项   | 类型  | 内容      | 备注  |
| --- | --- | ------- | --- |
| 0   | obj | 音频1     |     |
| n   | obj | 音频(n+1) |     |
| ……  | obj | ……      | ……  |

`audios`数组中的`audios`对象：

| 字段       | 类型  | 内容   | 备注      |
| -------- | --- | ---- | ------- |
| id       | num | 音频id |         |
| title    | str | 音频标题 |         |
| duration | num | 音频时长 | 单位：秒(s) |



**示例：**

```shell
curl -G 'https://www.bilibili.com/audio/music-service-c/web/menu/rank' \

--data-urlencode 'ps=1' \

--data-urlencode 'pn=6'
```

使用参数：`ps=1&qn=6`

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "curPage": 1,
        "pageCount": 2,
        "totalSize": 12,
        "pageSize": 6,
        "data": [{
            "menuId": 10624,
            "uid": 32708543,
            "uname": "大家的音乐姬",
            "title": "新曲推荐",
            "cover": "http://i0.hdslb.com/bfs/music/a32c1ed4f6ec3f74f8240f4486a750dda3a509e5.jpg",
            "intro": "每天11:00更新，为你推送最新音乐",
            "type": 2,
            "off": 0,
            "ctime": 1501209433,
            "curtime": 1655713346,
            "statistic": {
                "sid": 10624,
                "play": 2366255,
                "collect": 20565,
                "comment": 1104,
                "share": 622
            },
            "snum": 16,
            "attr": 0,
            "isDefault": 0,
            "collectionId": 0,
            "audios": [{
                "id": 1572281,
                "title": "【Mitchie M】Nechusho No!No! (feat. 初音未来 & MEIKO)",
                "duration": 112
            }, {
                "id": 1551077,
                "title": "【洛天依原创】双星伴生",
                "duration": 197
            }, {
                "id": 1544428,
                "title": "【小柔】寄り酔い（cover）",
                "duration": 216
            }]
        }, {
            "menuId": 10627,
            "uid": 32708543,
            "uname": "大家的音乐姬",
            "title": "热歌榜（每日11:00更新）",
            "cover": "http://i0.hdslb.com/bfs/music/bc735b32ab123f7ddc602b9194defae2cd66062f.jpg",
            "intro": "每日上午11:00更新，精选三日内热门投稿作品。",
            "type": 2,
            "off": 0,
            "ctime": 1501211353,
            "curtime": 1655713346,
            "statistic": {
                "sid": 10627,
                "play": 2289612,
                "collect": 11437,
                "comment": 434,
                "share": 223
            },
            "snum": 20,
            "attr": 0,
            "isDefault": 0,
            "collectionId": 0,
            "audios": [{
                "id": 1955567,
                "title": "山海（原唱：草东没有派对）",
                "duration": 215
            }, {
                "id": 923884,
                "title": "platiunm",
                "duration": 181
            }, {
                "id": 1954370,
                "title": "Dark Dawn v1",
                "duration": 200
            }]
        }, {
            "menuId": 10628,
            "uid": 32708543,
            "uname": "大家的音乐姬",
            "title": "原创榜（每日11:00更新）",
            "cover": "http://i0.hdslb.com/bfs/music/58782504cefb307878d12422fd365ed7f971fad1.jpg",
            "intro": "每日上午11:00更新，精选三日内原创投稿音乐。",
            "type": 2,
            "off": 0,
            "ctime": 1501211627,
            "curtime": 1655713346,
            "statistic": {
                "sid": 10628,
                "play": 395817,
                "collect": 2583,
                "comment": 314,
                "share": 88
            },
            "snum": 20,
            "attr": 0,
            "isDefault": 0,
            "collectionId": 0,
            "audios": [{
                "id": 923884,
                "title": "platiunm",
                "duration": 181
            }, {
                "id": 1954370,
                "title": "Dark Dawn v1",
                "duration": 200
            }, {
                "id": 1954654,
                "title": "张真源 - 你要快乐 (Live)",
                "duration": 235
            }]
        }, {
            "menuId": 10629,
            "uid": 32708543,
            "uname": "大家的音乐姬",
            "title": "中文人声三日榜",
            "cover": "http://i0.hdslb.com/bfs/music/f547e3b96d3f283eaa6a3a071de22092fb5101f8.jpg",
            "intro": "每日上午11:00更新，精选三日内中文人声投稿音乐。",
            "type": 2,
            "off": 0,
            "ctime": 1501211818,
            "curtime": 1655713346,
            "statistic": {
                "sid": 10629,
                "play": 842507,
                "collect": 5102,
                "comment": 362,
                "share": 137
            },
            "snum": 20,
            "attr": 0,
            "isDefault": 0,
            "collectionId": 0,
            "audios": [{
                "id": 1955567,
                "title": "山海（原唱：草东没有派对）",
                "duration": 215
            }, {
                "id": 1955546,
                "title": "爱你",
                "duration": 86
            }, {
                "id": 1954654,
                "title": "张真源 - 你要快乐 (Live)",
                "duration": 235
            }]
        }, {
            "menuId": 10630,
            "uid": 32708543,
            "uname": "大家的音乐姬",
            "title": "日文人声三日榜",
            "cover": "http://i0.hdslb.com/bfs/music/7dd5d629f50481e22e2f5eced510f5fbd89f5233.jpg",
            "intro": "每日上午11:00更新，精选三日内日文人声投稿音乐。",
            "type": 2,
            "off": 0,
            "ctime": 1501211959,
            "curtime": 1655713346,
            "statistic": {
                "sid": 10630,
                "play": 891268,
                "collect": 8671,
                "comment": 601,
                "share": 169
            },
            "snum": 20,
            "attr": 0,
            "isDefault": 0,
            "collectionId": 0,
            "audios": [{
                "id": 1954053,
                "title": "派对浪客诸葛孔明 插入歌『ChocoPate』久远七海 starring Lezel",
                "duration": 117
            }, {
                "id": 1956316,
                "title": "ただ君に晴れ（只给予你的晴天）",
                "duration": 196
            }, {
                "id": 1956321,
                "title": "うまぴょい伝説（马儿蹦跳传说）",
                "duration": 262
            }]
        }, {
            "menuId": 10631,
            "uid": 32708543,
            "uname": "大家的音乐姬",
            "title": "VOCALOID三日榜",
            "cover": "http://i0.hdslb.com/bfs/music/ce8b1646cbbd5513de7976ba81d0fd9c340c1899.jpg",
            "intro": "每日上午11:00更新，精选三日内VOCALOID投稿音乐。",
            "type": 2,
            "off": 0,
            "ctime": 1501212166,
            "curtime": 1655713346,
            "statistic": {
                "sid": 10631,
                "play": 170112,
                "collect": 2900,
                "comment": 528,
                "share": 60
            },
            "snum": 10,
            "attr": 0,
            "isDefault": 0,
            "collectionId": 0,
            "audios": [{
                "id": 1954717,
                "title": "弦歌引-翻调",
                "duration": 230
            }, {
                "id": 1956148,
                "title": "告RADIO - 春色リップ",
                "duration": 253
            }, {
                "id": 1954302,
                "title": "susan说",
                "duration": 195
            }]
        }]
    }
}
```

</details>
