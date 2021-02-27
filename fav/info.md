# 收藏夹基本信息

- [获取收藏夹元数据](#获取收藏夹元数据)
- [获取指定用户创建的所有收藏夹信息](#获取指定用户创建的所有收藏夹信息)
- [批量获取指定收藏id的内容](#批量获取指定收藏id的内容)

---

## 获取收藏夹元数据

>  http://api.bilibili.com/x/v3/fav/folder/info

*请求方式：GET*

认证方式：Cookie或APP

**注：查询权限收藏夹时需要相应用户登录**

**url参数：**

| 参数名   | 类型 | 内容                   | 必要性 | 备注 |
| -------- | ---- | ---------------------- | ------ | ---- |
| media_id | num  | 目标收藏夹id（完整id） | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型                          | 内容     | 备注                                                |
| ------- | ----------------------------- | -------- | --------------------------------------------------- |
| code    | num                           | 返回值   | 0：成功<br />-400：请求错误<br />-403：访问权限不足 |
| message | str                           | 错误信息 | 默认为0                                             |
| data    | 有效时：obj<br />无效或：null | 信息本体 |                                                     |

`data`对象：

| 字段        | 类型 | 内容                 | 备注                                               |
| ----------- | ---- | -------------------- | -------------------------------------------------- |
| id          | num  | 收藏夹mlid（完整id） | 收藏夹原始id+创建者UID尾号2位                      |
| fid         | num  | 收藏夹原始id         |                                                    |
| mid         | num  | 创建者UID            |                                                    |
| attr        | num  | 属性位（？）         |                                                    |
| title       | str  | 收藏夹标题           |                                                    |
| cover       | str  | 收藏夹封面图片url    |                                                    |
| upper       | obj  | 创建者信息           |                                                    |
| cover_type  | num  | 封面图类别（？）     |                                                    |
| cnt_info    | obj  | 收藏夹状态数         |                                                    |
| type        | num  | 类型（？）           | 一般是11                                           |
| intro       | str  | 备注                 |                                                    |
| ctime       | num  | 创建时间             | 时间戳                                             |
| mtime       | num  | 收藏时间             | 时间戳                                             |
| state       | num  | 状态（？）           | 一般为0                                            |
| fav_state   | num  | 收藏夹收藏状态       | 已收藏收藏夹：1<br />未收藏收藏夹：0<br />需要登录 |
| like_state  | num  | 点赞状态             | 已点赞：1<br />未点赞：0<br />需要登录             |
| media_count | num  | 收藏夹内容数量       |                                                    |


`info`中的`upper`对象：

| 字段       | 类型 | 内容             | 备注                                            |
| ---------- | ---- | ---------------- | ----------------------------------------------- |
| mid        | num  | 创建者UID        |                                                 |
| name       | str  | 创建者昵称       |                                                 |
| face       | str  | 创建者头像url    |                                                 |
| followed   | bool | 是否已关注创建者 |                                                 |
| vip_type   | num  | 会员类别         | 0：无<br />1：月大会员<br />2：年度及以上大会员 |
| vip_statue | num  | 会员开通状态     | 0：无<br />1：有                                |

`info`中的`cnt_info`对象：

| 字段     | 类型 | 内容   | 备注 |
| -------- | ---- | ------ | ---- |
| collect  | num  | 收藏数 |      |
| play     | num  | 播放数 |      |
| thumb_up | num  | 点赞数 |      |
| share    | num  | 分享数 |      |

**示例：**

查询收藏夹`ID=1052622027`的元数据

```shell
curl -G 'http://api.bilibili.com/x/v3/fav/folder/info' \
--data-urlencode 'media_id=1052622027' \
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
        "id": 1052622027,
        "fid": 10526220,
        "mid": 686127,
        "attr": 54,
        "title": "猛 男 生 存",
        "cover": "http://i2.hdslb.com/bfs/archive/bb51ee8a5fc5e03996138155f0f682d30ee16484.jpg",
        "upper": {
            "mid": 686127,
            "name": "籽岷",
            "face": "http://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp",
            "followed": true,
            "vip_type": 2,
            "vip_statue": 1
        },
        "cover_type": 2,
        "cnt_info": {
            "collect": 3393,
            "play": 184822,
            "thumb_up": 3918,
            "share": 44
        },
        "type": 11,
        "intro": "猛 男 生 存",
        "ctime": 1598884758,
        "mtime": 1598884758,
        "state": 0,
        "fav_state": 0,
        "like_state": 0,
        "media_count": 28
    }
}
```

</details>

## 获取指定用户创建的所有收藏夹信息

>  http://api.bilibili.com/x/v3/fav/folder/created/list-all

*请求方式：GET*

认证方式：Cookie或APP

**注：查询权限收藏夹时需要相应用户登录**

该接口也能查询目标内容id存在于那些收藏夹中

**url参数：**

| 参数名 | 类型 | 内容         | 必要性 | 备注                                     |
| ------ | ---- | ------------ | ------ | ---------------------------------------- |
| up_mid | num  | 目标用户UID  | 必要   |                                          |
| type   | num  | 目标内容属性 | 非必要 | 默认为全部<br />0：全部<br />2：视频稿件 |
| rid    | num  | 目标内容id   | 非必要 | 视频稿件：视频稿件avid                   |

**json回复：**

根对象：

| 字段    | 类型                          | 内容     | 备注                        |
| ------- | ----------------------------- | -------- | --------------------------- |
| code    | num                           | 返回值   | 0：成功<br />-400：请求错误 |
| message | str                           | 错误信息 | 默认为0                     |
| data    | 有效时：obj<br />无效或：null | 信息本体 |                             |

`data`对象：

| 字段   | 类型  | 内容             | 备注 |
| ------ | ----- | ---------------- | ---- |
| count  | num   | 创建的收藏夹总数 |      |
| list   | array | 创建的收藏夹列表 |      |
| season | null  | （？）           |      |

`list`数组：

| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| 0    | obj  | 收藏夹1       |      |
| n    | obj  | 收藏夹（n+1） |      |
| ...  | obj  | ...           |      |

`medias`数组中的对象：

| 字段        | 类型 | 内容                     | 备注                                       |
| ----------- | ---- | ------------------------ | ------------------------------------------ |
| id          | num  | 收藏夹mlid（完整id）     | 收藏夹原始id+创建者UID尾号2位              |
| fid         | num  | 收藏夹原始id             |                                            |
| mid         | num  | 创建者UID                |                                            |
| attr        | num  | 属性位（？）             |                                            |
| title       | str  | 收藏夹标题               |                                            |
| fav_state   | num  | 目标id是否存在于该收藏夹 | 存在于该收藏夹：1<br />不存在于该收藏夹：0 |
| media_count | num  | 收藏夹内容数量           |                                            |

**示例：**

查询用户`UID=509372`的所有创建收藏夹列表

```shell
curl -G 'http://api.bilibili.com/x/v3/fav/folder/created/list-all' \
--data-urlencode 'up_mid=509372' \
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
        "count": 2,
        "list": [
            {
                "id": 939227072,
                "fid": 9392270,
                "mid": 509372,
                "attr": 54,
                "title": "学习",
                "fav_state": 0,
                "media_count": 22
            },
            {
                "id": 75020272,
                "fid": 750202,
                "mid": 509372,
                "attr": 22,
                "title": "MAD/AMV",
                "fav_state": 0,
                "media_count": 16
            }
        ],
        "season": null
    }
}
```

</details>

## 批量获取指定收藏id的内容

> http://api.bilibili.com/x/v3/fav/resource/infos

*请求方式：GET*

**url参数：**

| 参数名    | 类型 | 内容           | 必要性 | 备注                                                         |
| --------- | ---- | -------------- | ------ | ------------------------------------------------------------ |
| resources | strs | 目标内容id列表 | 必要   | 格式：{内容id}:{内容类型}<br />每个成员间用`,`分隔<br />类型：<br />2：视频稿件<br />12：音频<br />21：视频合集<br />内容id：<br />视频稿件：视频稿件avid<br />音频：音频auid<br />视频合集：视频合集id |
| platform  | str  | 平台标识       | 非必要 | 可为web（影响内容列表类型）                                  |

**json回复：**

根对象：

| 字段    | 类型                            | 内容         | 备注                        |
| ------- | ------------------------------- | ------------ | --------------------------- |
| code    | num                             | 返回值       | 0：成功<br />-400：请求错误 |
| message | str                             | 错误信息     | 默认为0                     |
| data    | 有效时：array<br />无效或：null | 内容信息列表 |                             |

`data`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | obj  | 内容信息1       |      |
| n    | obj  | 内容信息（n+1） |      |
| ...  | obj  | ...             |      |

`data`数组中的对象：

| 字段     | 类型 | 内容          | 备注                                                         |
| -------- | ---- | ------------- | ------------------------------------------------------------ |
| id       | num  | 内容id        | 视频稿件：视频稿件avid<br />音频：音频auid<br />视频合集：视频合集id |
| type     | num  | 内容类型      | 2：视频稿件<br />12：音频<br />21：视频合集                  |
| title    | str  | 标题          |                                                              |
| cover    | str  | 封面url       |                                                              |
| intro    | str  | 简介          |                                                              |
| page     | num  | 视频分P数     |                                                              |
| duration | num  | 音频/视频时长 |                                                              |
| upper    | obj  | UP主信息      |                                                              |
| attr     | num  | 属性          | 0：正常<br />1：失效                                         |
| cnt_info | obj  | 状态数        |                                                              |
| link     | str  | 跳转uri       |                                                              |
| ctime    | num  | 投稿时间      | 时间戳                                                       |
| pubtime  | num  | 发布时间      | 时间戳                                                       |
| fav_time | num  | 收藏时间      | 时间戳                                                       |
| bv_id    | str  | 视频稿件bvid  |                                                              |
| bvid     | str  | 视频稿件bvid  |                                                              |
| season   | null | （？）        |                                                              |

`data`数组中的对象中的`upper`对象:

| 字段 | 类型 | 内容        | 备注 |
| ---- | ---- | ----------- | ---- |
| mid  | num  | UP主UID     |      |
| name | str  | UP主昵称    |      |
| face | str  | UP主头像url |      |

`data`数组中的对象中的`cnt_info`对象：

| 字段    | 类型 | 内容   | 备注 |
| ------- | ---- | ------ | ---- |
| collect | num  | 收藏数 |      |
| play    | num  | 播放数 |      |
| danmaku | num  | 弹幕数 |      |

**示例：**

批量查询内容

1-视频稿件-`av583785685`

2-视频合集-`523`

3-音频-`au15664`

```shell
curl -G 'http://api.bilibili.com/x/v3/fav/resource/infos' \
--data-urlencode 'resources=583785685:2,523:21,15664:12'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": [
        {
            "id": 583785685,
            "type": 2,
            "title": "已失效视频",
            "cover": "http://i0.hdslb.com/bfs/archive/be27fd62c99036dce67efface486fb0a88ffed06.jpg",
            "intro": "审核君辛苦了~\r\n使用curl命令访问B站api，实现二维码登录 查询登录信息 视频投币 发送评论的操作\r\n本视频作为api收集项目的一个硬核DEMO\r\n由于当时录音的问题，大部分是后期配的，后面声音有点小\r\n想了解更多的去github页面，也可以qq\r\n\r\nbgm：\r\n雲流れ\r\nAutumn rain（未修改版）\r\n四月，初雨微凉",
            "page": 1,
            "duration": 604,
            "upper": {
                "mid": 293793435,
                "name": "社会易姐QwQ",
                "face": "http://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg"
            },
            "attr": 1,
            "cnt_info": {
                "collect": 1470,
                "play": 28374,
                "danmaku": 64
            },
            "link": "bilibili://video/583785685",
            "ctime": 1594049831,
            "pubtime": 1594049831,
            "fav_time": 0,
            "bv_id": "BV1kz4y1X7XP",
            "bvid": "BV1kz4y1X7XP",
            "season": null
        },
        {
            "id": 523,
            "type": 21,
            "title": "2021哔哩哔哩拜年纪",
            "cover": "https://i0.hdslb.com/bfs/archive/8ccc50f7cbc671762e0536491bd2b8aeebc0837d.jpg",
            "intro": "感谢各位制作者们的辛勤付出！节目精彩，愿大家看的开心！",
            "page": 0,
            "duration": 0,
            "upper": {
                "mid": 1868902080,
                "name": "哔哩哔哩拜年纪",
                "face": "http://i0.hdslb.com/bfs/face/7f6cb94fc071aca9fbb4b1ca9cc6415e86847576.jpg"
            },
            "attr": 0,
            "cnt_info": {
                "collect": 0,
                "play": 71527018,
                "danmaku": 480547
            },
            "link": "bilibili://video/373561162",
            "ctime": 0,
            "pubtime": 0,
            "fav_time": 0,
            "bv_id": "",
            "bvid": "",
            "season": null
        },
        {
            "id": 15664,
            "type": 12,
            "title": "威风堂堂",
            "cover": "http://i0.hdslb.com/bfs/music/c417d30b394a8a5d4e8a150ad75837dbae3b79d4.jpg",
            "intro": "翻唱。在电脑里放了半个月终于！！！大家寒假快乐！！❁本家sm19233263；❁压制: 寒雨；❁mix: 三星堆；❁vocal: 茶理理。超喜欢michan的那段英文念白所以加了进来w 谢谢三月月和嘟比比你们后期辛苦了！",
            "page": 1,
            "duration": 200,
            "upper": {
                "mid": 684169,
                "name": "茶理理理子",
                "face": ""
            },
            "attr": 0,
            "cnt_info": {
                "collect": 48872,
                "play": 1508426,
                "danmaku": 0
            },
            "link": "bilibili://music/detail/15664?name=%E5%A8%81%E9%A3%8E%E5%A0%82%E5%A0%82&uperName=%E8%8C%B6%E7%90%86%E7%90%86%E7%90%86%E5%AD%90&cover_url=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Fmusic%2Fc417d30b394a8a5d4e8a150ad75837dbae3b79d4.jpg&upperId=684169&author=%E8%8C%B6%E7%90%86%E7%90%86",
            "ctime": 1502347604,
            "pubtime": 1502347604,
            "fav_time": 0,
            "bv_id": "BV1bx411c7qt",
            "bvid": "BV1bx411c7qt",
            "season": null
        }
    ]
}
```

</details>