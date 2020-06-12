# 歌单&音频收藏夹详细信息

## 查询自己创建的歌单

> https://www.bilibili.com/audio/music-service-c/web/collections/list

*方式：GET*

需要登录(SESSDATA)及验证DedeUserID存在且不为0

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
| 0    | obj  | 音频收藏夹ID1     |      |
| n    | obj  | 音频收藏夹ID(n+1) |      |
| ……   | obj  | ……                | ……   |

`data`数组中的对象：

| 字段      | 类型   | 内容                     | 备注                             |
| --------- | ------ | ------------------------ | -------------------------------- |
| id        | num    | 音频收藏夹ID             |                                  |
| uid       | num    | 创建用户UID              |                                  |
| uname     | str    | 创建用户昵称             |                                  |
| title     | str    | 歌单标题                 |                                  |
| type      | num    | 收藏夹属性               | 0：普通收藏夹<br />1：默认收藏夹 |
| published | num    | 是否公开                 | 0：不公开<br />1：公开           |
| cover     | str    | 歌单封面图片url          |                                  |
| ctime     | num    | 歌单创建时间             | 时间戳                           |
| song      | num    | 歌单中的音乐数量         |                                  |
| desc      | str    | 歌单备注信息             |                                  |
| sids      | array | 歌单中的音乐             |                                  |
| menuId    | num    | 音频收藏夹对应的歌单amID |                                  |
| statistic | obj    | 歌单状态数信息           |                                  |

`data`中的`sids`数组：

| 项   | 类型 | 内容                | 备注             |
| ---- | ---- | ------------------- | ---------------- |
| 0    | num  | 收藏的音频auID1     |                  |
| n    | num  | 收藏的音频auID(n+1) | 按照歌单顺序排列 |
| ……   | num  | ……                  | ……               |

`data`中的`statistic`对象：

| 字段    | 类型 | 内容                     | 备注 |
| ------- | ---- | ------------------------ | ---- |
| sid     | num  | 音频收藏夹对应的歌单amID |      |
| play    | num  | 播放次数                 |      |
| collect | num  | 点赞次数                 |      |
| comment | null | -                        |      |
| share   | num  | 分享次数                 |      |

**示例：**

 http://www.bilibili.com/audio/music-service-c/web/collections/list?pn=1&ps=2 

共计创建了两个歌单，如下

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



## 查询音频收藏夹（默认歌单）信息

> https://www.bilibili.com/audio/music-service-c/web/collections/info

*方式：GET*

需要登录(SESSDATA)及验证DedeUserID存在且不为0

**url参数：**

| 参数名 | 类型 | 内容         | 必要性 | 备注               |
| ------ | ---- | ------------ | ------ | ------------------ |
| sid    | num  | 音频收藏夹ID | 必要   | 必须为默认收藏夹ID |

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
| id        | num    | 音频收藏夹ID             |                        |
| uid       | num    | 创建用户UID              |                        |
| uname     | str    | 创建用户昵称             |                        |
| title     | str    | 默认歌单                 | 恒为`默认歌单`         |
| type      | num    | 1                        | 恒为`1`                |
| published | num    | 是否公开                 | 0：不公开<br />1：公开 |
| cover     | str    | 歌单封面图片url          |                        |
| ctime     | num    | 歌单创建时间             | 时间戳                 |
| song      | num    | 歌单中的音乐数量         |                        |
| desc      | str    | 空                       | 恒为空                 |
| sids      | array | 歌单中的音乐             |                        |
| menuId    | num    | 音频收藏夹对应的歌单amID | 与普通歌单不同通用     |
| statistic | obj    | 歌单状态数信息           |                        |

`data`中的`sids`数组：

| 项   | 类型 | 内容                | 备注             |
| ---- | ---- | ------------------- | ---------------- |
| 0    | num  | 收藏的音频auID1     |                  |
| n    | num  | 收藏的音频auID(n+1) | 按照歌单顺序排列 |
| ……   | num  | ……                  | ……               |

`data`中的`statistic`对象：

| 字段    | 类型 | 内容                     | 备注 |
| ------- | ---- | ------------------------ | ---- |
| sid     | num  | 音频收藏夹对应的歌单amID |      |
| play    | num  | 0                        |      |
| collect | num  | 0                        |      |
| comment | null | -                        |      |
| share   | num  | 0                        |      |

**示例：**

查询我的默认歌单，ID为` 15967839 `

 https://www.bilibili.com/audio/music-service-c/web/collections/info?sid=15967839 

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



