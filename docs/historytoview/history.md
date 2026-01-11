# 历史记录

## 获取历史记录列表_web端

> https://api.bilibili.com/x/web-interface/history/cursor

*请求方式：GET*

认证方式：Cookie (SESSDATA)

注：`max`、`business`、`view_at`参数用于历史记录列表的 IFS (无限滚动)，其用法类似链表的 next 指针

本接口也可以返回已失效稿件的信息

**url参数：**

| 参数名   | 类型 | 内容                     | 必要性 | 备注                                                         |
| -------- | ---- | ------------------------ | ------ | ------------------------------------------------------------ |
| max      | num  | 历史记录截止目标 id      | 非必要 | 默认为 0<br />稿件：稿件 avid<br />剧集（番剧 / 影视）：剧集 ssid<br />直播：直播间 id<br />文集：文集 rlid<br />文章：文章 cvid |
| business | str  | 历史记录截止目标业务类型 | 非必要 | 默认为空<br />archive：稿件<br />pgc：剧集（番剧 / 影视）<br />live：直播<br />article-list：文集<br />article：文章 |
| view_at  | num  | 历史记录截止时间         | 非必要 | 时间戳<br />默认为 0<br />0 为当前时间                       |
| type     | str  | 历史记录分类筛选         | 非必要 | all：全部类型（默认）<br />archive：稿件<br />live：直播<br />article：文章 |
| ps       | num  | 每页项数                 | 非必要 | 默认为 20，最大 30                                           |

**json回复：**

根对象：

| 字段    | 类型  | 内容         | 备注                                              |
| ------- | ----- | ------------ | ------------------------------------------------- |
| code    | num   | 返回值       | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str   | 错误信息     | 默认为 0                                          |
| ttl     | num   | 1            |                                                   |
| data    | array | 历史记录列表 |                                                   |

`data`对象：

| 字段   | 类型  | 内容             | 备注 |
| ------ | ----- | ---------------- | ---- |
| cursor | obj   | 历史记录页面信息 |      |
| tab    | array | 历史记录筛选类型 |      |
| list   | array | 分段历史记录列表 |      |

`data`中的`cursor`对象：

| 字段     | 类型 | 内容             | 备注           |
| -------- | ---- | ---------------- | -------------- |
| max      | num  | 最后一项目标 id  | **见请求参数** |
| view_at  | num  | 最后一项时间节点 | 时间戳         |
| business | str  | 最后一项业务类型 | **见请求参数** |
| ps       | num  | 每页项数         |                |

`data`中的`tab`数组：

| 项   | 类型 | 内容               | 备注 |
| ---- | ---- | ------------------ | ---- |
| 0    | obj  | 历史记录筛选类型 1 |      |
| 1    | obj  | 历史记录筛选类型 2 |      |
| 2    | obj  | 历史记录筛选类型 3 |      |

`tab`数组中的对象：

| 字段 | 类型 | 内容   | 备注 |
| ---- | ---- | ------ | ---- |
| type | str  | 类型   |      |
| name | str  | 类型名 |      |

`data`中的`list`数组：

| 项   | 类型 | 内容           | 备注             |
| ---- | ---- | -------------- | ---------------- |
| 0    | obj  | 历史记录 1     |                  |
| n    | obj  | 历史记录 (n+1) | 按照查看顺序排列 |
| ……   | obj  |                |                  |

`list`数组中的对象：

| 字段        | 类型                            | 内容                     | 备注                                     |
| ----------- | ------------------------------- | ------------------------ | ---------------------------------------- |
| title       | str                             | 条目标题                 |                                          |
| long_title  | str                             | 条目副标题               |                                          |
| cover       | str                             | 条目封面图 url           | 用于专栏以外的条目                       |
| covers      | 有效时：array<br />无效时：null | 条目封面图组             | 仅用于专栏                               |
| uri         | str                             | 重定向 url               | 仅用于剧集和直播                         |
| history     | obj                             | 条目详细信息             |                                          |
| videos      | num                             | 视频分 P 数目            | 仅用于稿件视频                           |
| author_name | str                             | UP 主昵称                |                                          |
| author_face | str                             | UP 主头像 url            |                                          |
| author_mid  | num                             | UP 主 mid                |                                          |
| view_at     | num                             | 查看时间                 | 时间戳                                   |
| progress    | num                             | 视频观看进度             | 单位为秒<br />用于稿件视频或剧集         |
| badge       | str                             | 角标文案                 | 稿件视频 / 剧集 / 笔记                   |
| show_title  | str                             | 分 P 标题                | 用于稿件视频或剧集                       |
| duration    | num                             | 视频总时长               | 用于稿件视频或剧集                       |
| current     | str                             | (?)                      |                                          |
| total       | num                             | 总计分集数               | 仅用于剧集                               |
| new_desc    | str                             | 最新一话 / 最新一 P 标识 | 用于稿件视频或剧集                       |
| is_finish   | num                             | 是否已完结               | 仅用于剧集<br />0：未完结<br />1：已完结 |
| is_fav      | num                             | 是否收藏                 | 0：未收藏<br />1：已收藏                 |
| kid         | num                             | 条目目标 id              | **详细内容见参数**                       |
| tag_name    | str                             | 子分区名                 | 用于稿件视频和直播                       |
| live_status | num                             | 直播状态                 | 仅用于直播<br />0：未开播<br />1：已开播 |

`list`数组中的对象中的`covers`数组：

| 项   | 类型 | 内容           | 备注 |
| ---- | ---- | -------------- | ---- |
| 0    | str  | 封面图片 1     |      |
| n    | str  | 封面图片 (n+1) |      |
| ……   | str  | ……             |      |

`list`数组中的对象中的`history`对象：

| 字段     | 类型 | 内容                  | 备注                                                         |
| -------- | ---- | --------------------- | ------------------------------------------------------------ |
| oid      | num  | 目标id                | 稿件视频&剧集（当`business=archive`或`business=pgc`时）：稿件avid<br />直播（当`business=live`时）：直播间id<br />文章（当`business=article`时）：文章cvid<br />文集（当`business=article-list`时）：文集rlid |
| epid     | num  | 剧集epid              | 仅用于剧集                                                   |
| bvid     | str  | 稿件bvid              | 仅用于稿件视频                                               |
| page     | num  | 观看到的视频分P数     | 仅用于稿件视频                                               |
| cid      | num  | 观看到的对象id        | 稿件视频&剧集（当`business=archive`或`business=pgc`时）：视频cid<br />文集（当`business=article-list`时）：文章cvid |
| part     | str  | 观看到的视频分 P 标题 | 仅用于稿件视频                                               |
| business | str  | 业务类型              | **见请求参数**                                               |
| dt       | num  | 记录查看的平台代码    | 1 3 5 7：手机端<br />2：web端<br />4 6：pad端<br />9: 智能音箱/游戏机33：TV端<br />0：其他 |

**示例：**

获取当前时间截止的5条历史记录

```shell
curl -G 'https://api.bilibili.com/x/web-interface/history/cursor' \
--data-urlencode 'ps=5' \
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
            "max": 26193,
            "view_at": 1592985807,
            "business": "pgc",
            "ps": 5
        },
        "tab": [
            {
                "type": "archive",
                "name": "视频"
            },
            {
                "type": "live",
                "name": "直播"
            },
            {
                "type": "article",
                "name": "专栏"
            }
        ],
        "list": [
            {
                "title": "韩国漫画如何出海掘金？一年出口额2.8亿元",
                "long_title": "",
                "cover": "",
                "covers": [
                    "https://i0.hdslb.com/bfs/article/b170c6fd7429ae205d6cb935e1d431710d82609d.jpg"
                ],
                "uri": "",
                "history": {
                    "oid": 6470274,
                    "epid": 0,
                    "bvid": "",
                    "page": 0,
                    "cid": 0,
                    "part": "",
                    "business": "article",
                    "dt": 2
                },
                "videos": 0,
                "author_name": "三文娱",
                "author_face": "http://i1.hdslb.com/bfs/face/98566839756a8e3de6e183109984b032de6ff2d9.jpg",
                "author_mid": 34772409,
                "view_at": 1593000539,
                "progress": 0,
                "badge": "专栏",
                "show_title": "",
                "duration": 0,
                "current": "",
                "total": 0,
                "new_desc": "",
                "is_finish": 0,
                "is_fav": 0,
                "kid": 6470274,
                "tag_name": "",
                "live_status": 0
            },
            {
                "title": "从国际空间站俯瞰地球，静谧蓝星守护者",
                "long_title": "",
                "cover": "http://i0.hdslb.com/bfs/live/new_room_cover/f07d8a0c7c5655f81cf1586903a121f2680cf3bc.jpg",
                "covers": null,
                "uri": "https://live.bilibili.com/14047",
                "history": {
                    "oid": 14047,
                    "epid": 0,
                    "bvid": "",
                    "page": 0,
                    "cid": 0,
                    "part": "",
                    "business": "live",
                    "dt": 2
                },
                "videos": 0,
                "author_name": "Zelo-Balance",
                "author_face": "http://i1.hdslb.com/bfs/face/7303b3032d1e13ca7c788cd9c30d4430f8ffd1ea.jpg",
                "author_mid": 19193,
                "view_at": 1592999822,
                "progress": 0,
                "badge": "直播中",
                "show_title": "",
                "duration": 0,
                "current": "",
                "total": 0,
                "new_desc": "",
                "is_finish": 0,
                "is_fav": 0,
                "kid": 14047,
                "tag_name": "户外",
                "live_status": 1
            },
            {
                "title": "许巍 《蓝莲花》吉他Cover，这回你们不用截图抓我了吧",
                "long_title": "",
                "cover": "http://i2.hdslb.com/bfs/archive/0225b1f1a790393097ceebb51e89796be806d6bc.jpg",
                "covers": null,
                "uri": "",
                "history": {
                    "oid": 883617049,
                    "epid": 0,
                    "bvid": "BV1sK4y147ob",
                    "page": 1,
                    "cid": 205017957,
                    "part": "许巍 《蓝莲花》 Cover_1",
                    "business": "archive",
                    "dt": 2
                },
                "videos": 1,
                "author_name": "硬核拆解",
                "author_face": "http://i1.hdslb.com/bfs/face/4e131c9609299303cdde882792fc62b9f99cdcde.jpg",
                "author_mid": 427494870,
                "view_at": 1592999572,
                "progress": 13,
                "badge": "",
                "show_title": "",
                "duration": 91,
                "current": "",
                "total": 0,
                "new_desc": "",
                "is_finish": 0,
                "is_fav": 0,
                "kid": 883617049,
                "tag_name": "演奏",
                "live_status": 0
            },
            {
                "title": "从清楚与混沌之分看Vtuber形象塑造",
                "long_title": "",
                "cover": "",
                "covers": [
                    "https://i0.hdslb.com/bfs/article/5ddb94dd1890c639622717c7083fb2917b4aa475.jpg"
                ],
                "uri": "",
                "history": {
                    "oid": 268656,
                    "epid": 0,
                    "bvid": "",
                    "page": 0,
                    "cid": 6233590,
                    "part": "",
                    "business": "article-list",
                    "dt": 2
                },
                "videos": 0,
                "author_name": "普天一光",
                "author_face": "http://i2.hdslb.com/bfs/face/3702810bdac3d5103d684e61dc5bc8492a74f904.jpg",
                "author_mid": 6614889,
                "view_at": 1592998686,
                "progress": 0,
                "badge": "专栏",
                "show_title": "",
                "duration": 0,
                "current": "",
                "total": 0,
                "new_desc": "",
                "is_finish": 0,
                "is_fav": 0,
                "kid": 268656,
                "tag_name": "",
                "live_status": 0
            },
            {
                "title": "百妖谱",
                "long_title": "庆忌（下）",
                "cover": "http://i0.hdslb.com/bfs/archive/695a4566d05620a24c51d6eb935fa4767d673b45.jpg",
                "covers": null,
                "uri": "https://www.bilibili.com/bangumi/play/ss26193",
                "history": {
                    "oid": 370908663,
                    "epid": 326789,
                    "bvid": "",
                    "page": 0,
                    "cid": 199204975,
                    "part": "",
                    "business": "pgc",
                    "dt": 3
                },
                "videos": 0,
                "author_name": "",
                "author_face": "",
                "author_mid": 0,
                "view_at": 1592985807,
                "progress": 533,
                "badge": "国创",
                "show_title": "第8话 庆忌（下）",
                "duration": 1402,
                "current": "",
                "total": 12,
                "new_desc": "更新至第10话",
                "is_finish": 0,
                "is_fav": 0,
                "kid": 26193,
                "tag_name": "",
                "live_status": 0
            }
        ]
    }
}
```

</details>

## 获取视频观看历史记录_web端旧版

> https://api.bilibili.com/x/v2/history

*请求方式：GET*

认证方式：Cookie (SESSDATA)

本接口也可以返回已失效稿件的信息

**url参数：**

| 参数名 | 类型 | 内容     | 必要性 | 备注    |
| ------ | ---- | -------- | ------ | ------- |
| pn     | num  | 页码     | 非必要 | 默认为1 |
| ps     | num  | 每页项数 | 非必要 |         |

**json回复：**

根对象：

| 字段    | 类型   | 内容         | 备注                                              |
| ------- | ------ | ------------ | ------------------------------------------------- |
| code    | num    | 返回值       | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str    | 错误信息     | 默认为0                                           |
| ttl     | num    | 1            |                                   |
| data    | array | 历史记录列表 |                                                   |

`data`数组：

| 项   | 类型 | 内容          | 备注                                       |
| ---- | ---- | ------------- | ------------------------------------------ |
| 0    | obj  | 历史观看1     |                                            |
| n    | obj  | 历史观看(n+1) | 按照观看顺序排列<br />项数为总计观看视频数 |
| ……   | obj  | ……            | ……                                         |

`data`数组中的对象：

| 字段                            | 类型    | 内容                           | 备注                                                         |
| ------------------------------- | ------- | ------------------------------ | ------------------------------------------------------------ |
| aid                             | num     | 稿件avid                       |                                                              |
| videos                          | num     | 视频分P总数                    | 默认为1                                                      |
| tid                             | num     | 分区tid                        |                                                              |
| tname                           | str     | 子分区名称                     |                                                              |
| copyright                       | num     | 是否转载                       | 1：原创<br />2：转载<br />3：未填写                            |
| pic                             | str     | 视频封面图片url                |                                                              |
| title                           | str     | 稿件标题                       |                                                              |
| pubdate                         | num     | 稿件发布时间                   | 时间戳                                                       |
| ctime                           | num     | 用户提交稿件的时间             | 时间戳                                                       |
| desc                            | str     | 视频简介                       |                                                              |
| state                           | num     | 视频状态                       | 略，见[获取视频详细信息（web端）](../video/info.md#获取视频详细信息（web端）)中的`state`备注 |
| ~~attribute~~（仅做历史性保留） | ~~num~~ | ~~稿件属性位配置~~             | 本字段已被删除<br />~~略，见[获取视频详细信息（web端）](../video/info.md#获取视频详细信息（web端）)中的`attribute`备注~~ |
| duration                        | num     | 视频总计持续时长（所有分P）    | 单位为秒                                                     |
| rights                          | obj     | 视频属性标志                   | 略，见[获取视频详细信息（web端）](../video/info.md#获取视频详细信息（web端）)中的`rights`对象 |
| owner                           | obj     | 视频UP主信息                   | 略，见[获取视频详细信息（web端）](../video/info.md#获取视频详细信息（web端）)中的`owner`对象 |
| stat                            | obj     | 视频状态数                     | 略，见[获取视频详细信息（web端）](../video/info.md#获取视频详细信息（web端）)中的`stat`对象 |
| dynamic                         | str     | 视频同步发布的的动态的文字内容 | 无为空                                                       |
| cid                             | num     | 视频1P cid                     |                                                              |
| dimension                       | obj     | 视频1P分辨率                   | 略，见[获取视频详细信息（web端）](../video/info.md#获取视频详细信息（web端）)中的`dimension`对象 |
| bangumi                         | obj     | 番剧/影视信息                  | 非番剧/影视无此项                                            |
| cheese                          | obj     | 课程信息                       | 非课程无此项                                                 |
| favorite                        | bool    | 是否已收藏                     | true：已收藏<br />false：未收藏                              |
| type                            | num     | 视频属性                       | 3：普通视频<br />4：剧集<br />10：课程                       |
| sub_type                        | num     | 附视频属性                     | 0：普通视频<br />1：番剧<br />2：电影<br />3：纪录片<br />4：国创<br />5：电视剧<br />7：综艺 |
| device                          | num     | 观看平台代码                   | 1 3 5 7：手机端<br />2：web端<br />4 6：pad端<br />33：TV端<br />0：其他 |
| page                            | obj     | 最后观看的分P信息              |                                                              |
| count                           | num     | 分P数                          | 非投稿视频无此项                                             |
| progress                        | num     | 观看进度                       | 单位为秒                                                     |
| view_at                         | num     | 观看时间                       | 时间戳                                                       |
| kid                             | num     | 稿件avid                       |                                                              |
| business                        | str     | 视频类型标识                   | archive：用户投稿视频<br />pgc：番剧/影视<br />cheese：课程  |
| redirect_link                   | str     | 重定向url                      |                                                              |
| bvid                            | str     | 稿件bvid                       |                                                              |

`data`数组中的对象`bangumi`对象：

| 字段           | 类型 | 内容            | 备注         |
| -------------- | ---- | --------------- | ------------ |
| cover          | str  | 番剧封面图片url |              |
| ep_id          | num  | 番剧epid        |              |
| episode_status | num  | ？？？          |              |
| follow         | num  | 0               | 作用尚不明确 |
| long_title     | str  | 单集标题        |              |
| season         | obj  | 剧集信息        |              |
| title          | str  | 集数            |              |

`bangumi`中的`season`对象：

| 字段            | 类型 | 内容         | 备注                   |
| --------------- | ---- | ------------ | ---------------------- |
| is_finish       | num  | 是否完结     | 0：连载中<br />1：完结 |
| newest_ep_id    | num  | 最细一话epid |                        |
| newest_ep_index | str  | 最细一话集数 |                        |
| season_id       | num  | 番剧ssid     |                        |
| season_status   | num  | ？？？       |                        |
| season_type     | num  | ？？？       |                        |
| title           | str  | 番剧标题     |                        |
| total_count     | num  | 总集数       |                        |

`data`数组中的对象`cheese`对象：

| 字段        | 类型 | 内容            | 备注 |
| ----------- | ---- | --------------- | ---- |
| cover       | str  | 课程封面图片url |      |
| long_title  | str  | 完整标题        |      |
| number      | str  | 本集数          |      |
| season_id   | num  | 课程ssid        |      |
| update_info | str  | 总集数          |      |

**示例：**

查询当前视频历史记录列表

```shell
curl -G 'https://api.bilibili.com/x/v2/history' \
--data-urlencode 'ps=5' \
--data-urlencode 'pn=1' \
-b 'SESSDATA=xxx'
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
            "aid": 96523832,
            "videos": 1,
            "tid": 33,
            "tname": "连载动画",
            "copyright": 2,
            "pic": "http://i0.hdslb.com/bfs/archive/dfc29be381565ee041a0ec9cfc7a32f8a63f76cd.jpg",
            "title": "【1月】异度侵入 ID:INVADED 12【独家正版】",
            "pubdate": 1584289800,
            "ctime": 1584289800,
            "desc": "#12",
            "state": 0,
            "attribute": 338688,
            "duration": 1481,
            "redirect_url": "https://www.bilibili.com/bangumi/play/ep307457",
            "rights": {
                "bp": 0,
                "elec": 0,
                "download": 0,
                "movie": 0,
                "pay": 1,
                "hd5": 1,
                "no_reprint": 0,
                "autoplay": 0,
                "ugc_pay": 0,
                "is_cooperation": 0,
                "ugc_pay_preview": 0,
                "no_background": 0
            },
            "owner": {
                "mid": 928123,
                "name": "哔哩哔哩番剧",
                "face": "http://i1.hdslb.com/bfs/face/7a8412cbacb9fd18f40ddbbf0ad183e45afc1365.jpg"
            },
            "stat": {
                "aid": 96523832,
                "view": 4772927,
                "danmaku": 108890,
                "reply": 48584,
                "favorite": 46,
                "coin": 61768,
                "share": 290,
                "now_rank": 0,
                "his_rank": 0,
                "like": 1241,
                "dislike": 0
            },
            "dynamic": "",
            "cid": 164789275,
            "dimension": {
                "width": 1920,
                "height": 1080,
                "rotate": 0
            },
            "favorite": false,
            "type": 4,
            "sub_type": 1,
            "device": 3,
            "page": {
                "cid": 164789275,
                "page": 1,
                "from": "vupload",
                "part": "ID_INVADED_112.encoded",
                "duration": 1481,
                "vid": "",
                "weblink": "",
                "dimension": {
                    "width": 1920,
                    "height": 1080,
                    "rotate": 0
                }
            },
            "bangumi": {
                "ep_id": 307457,
                "title": "12",
                "long_title": "CHANNELED",
                "episode_status": 13,
                "follow": 0,
                "cover": "http://i0.hdslb.com/bfs/archive/dfc29be381565ee041a0ec9cfc7a32f8a63f76cd.jpg",
                "season": {
                    "season_id": 29310,
                    "title": "异度侵入 ID:INVADED",
                    "season_status": 13,
                    "is_finish": 1,
                    "total_count": 13,
                    "newest_ep_id": 307774,
                    "newest_ep_index": "13",
                    "season_type": 1
                }
            },
            "progress": 277,
            "view_at": 1588831600,
            "kid": 29310,
            "business": "pgc",
            "redirect_link": "https://www.bilibili.com/bangumi/play/ep307457",
            "bvid": "BV1K7411f7uu"
        },
        {
            "aid": 497899395,
            "videos": 1,
            "tid": 189,
            "tname": "电脑装机",
            "copyright": 1,
            "pic": "http://i0.hdslb.com/bfs/archive/fd4e0893b234ee729cf15198065eced98367ebfe.jpg",
            "title": "600元的2007款iMac，如今过时了吗？",
            "pubdate": 1587727345,
            "ctime": 1587708111,
            "desc": "苹果东西是真的保值，酷睿2现在都还能卖的这么贵。第一次使用4K画质进行拍摄，应该比以前清楚一些。如有问题请在评论区指出，谢谢！",
            "state": 0,
            "attribute": 16768,
            "duration": 389,
            "mission_id": 13106,
            "rights": {
                "bp": 0,
                "elec": 0,
                "download": 0,
                "movie": 0,
                "pay": 0,
                "hd5": 1,
                "no_reprint": 1,
                "autoplay": 1,
                "ugc_pay": 0,
                "is_cooperation": 0,
                "ugc_pay_preview": 0,
                "no_background": 0
            },
            "owner": {
                "mid": 3391089,
                "name": "数字云糕Official",
                "face": "http://i2.hdslb.com/bfs/face/238dfbca5dda5de2d5ba95ee4e99804714e2b5e2.jpg"
            },
            "stat": {
                "aid": 497899395,
                "view": 23325,
                "danmaku": 92,
                "reply": 115,
                "favorite": 195,
                "coin": 132,
                "share": 23,
                "now_rank": 0,
                "his_rank": 0,
                "like": 555,
                "dislike": 0
            },
            "dynamic": "#IMAC##APPLE##MAC# 苹果东西是真的保值，酷睿2现在都还能卖的这么贵。第一次使用4K画质进行拍摄，应该比以前清楚一些。",
            "cid": 182570131,
            "dimension": {
                "width": 1920,
                "height": 1080,
                "rotate": 0
            },
            "favorite": false,
            "type": 3,
            "sub_type": 0,
            "device": 3,
            "page": {
                "cid": 182570131,
                "page": 1,
                "from": "vupload",
                "part": "iMac",
                "duration": 389,
                "vid": "",
                "weblink": "",
                "dimension": {
                    "width": 1920,
                    "height": 1080,
                    "rotate": 0
                }
            },
            "count": 1,
            "progress": -1,
            "view_at": 1588828357,
            "kid": 497899395,
            "business": "archive",
            "redirect_link": "https://www.bilibili.com/video/av497899395",
            "bvid": "BV1NK41157EF"
        }
    ]
}
```

</details>

## 删除历史记录

> https://api.bilibili.com/x/v2/history/delete

*请求方式：POST*

认证方式：Cookie (SESSDATA)

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                                                | 必要性 | 备注                                                         |
| ------ | ---- | --------------------------------------------------- | ------ | ------------------------------------------------------------ |
| kid    | str  | 删除的目标记录，格式为`{业务类型}_{目标id}`详见备注 | 必要   | 视频：archive\_{稿件avid}<br />直播：live_{直播间id}<br />专栏：article\_{专栏cvid}<br />剧集：pgc\_{剧集ssid}<br />文集：article-list\_{文集rlid} |
| csrf   | str  | CSRF Token（位于cookie）                            | 必要   |                                                              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

删除视频`av540580868`的观看历史记录

```shell
curl 'https://api.bilibili.com/x/v2/history/delete' \
--data-urlencode 'kid=archive_540580868' \
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

## 清空历史记录

> https://api.bilibili.com/x/v2/history/clear

*请求方式：POST*

认证方式：Cookie (SESSDATA)

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                     | 必要性 | 备注 |
| ------ | ---- | ------------------------ | ------ | ---- |
| csrf   | str  | CSRF Token（位于cookie） | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                  |
| ------- | ---- | -------- | ----------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败 |
| message | str  | 错误信息 | 默认为0                                               |
| ttl     | num  | 1        |                                                       |

**示例：**

清空历史记录

```shell
curl 'https://api.bilibili.com/x/v2/history/clear' \
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

## 停用历史记录

> https://api.bilibili.com/x/v2/history/shadow/set

*请求方式：POST*

认证方式：Cookie (SESSDATA)

该操作不会影响原有历史记录

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                     | 必要性 | 备注                                         |
| ------ | ---- | ------------------------ | ------ | -------------------------------------------- |
| switch | bool | 停用开关                 | 非必要 | true：停用<br />false：正常<br />默认为false |
| csrf   | str  | CSRF Token（位于cookie） | 必要   |                                              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                  |
| ------- | ---- | -------- | ----------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败 |
| message | str  | 错误信息 | 默认为0                                               |
| ttl     | num  | 1        |                                                       |

**示例：**

停用历史记录功能

```shell
curl 'https://api.bilibili.com/x/v2/history/shadow/set' \
--data-urlencode 'switch=true' \
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

## 查询历史记录停用状态

> https://api.bilibili.com/x/v2/history/shadow

*请求方式：GET*

认证方式：Cookie (SESSDATA)

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                       |
| ttl     | num  | 1        |                               |
| data    | bool | 停用状态 | true：停用<br />false：正常   |

**示例：**

当前状态为未停用视频历史记录

```shell
curl 'https://api.bilibili.com/x/v2/history/shadow' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": false
}
```

</details>
