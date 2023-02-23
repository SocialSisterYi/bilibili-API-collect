# 文集基本信息

## 获取文集基本信息

> https://api.bilibili.com/x/article/list/web/articles

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| id     | num  | 文集rlid | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                            |
| ------- | ---- | -------- | ----------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-404：无此信息 |
| message | str  | 错误信息 | 默认为0                                         |
| ttl     | num  | 1        |                                                 |
| data    | obj  | 信息本体 |                                                 |

`data`对象：

| 字段      | 类型  | 内容             | 备注                                                         |
| --------- | ----- | ---------------- | ------------------------------------------------------------ |
| list      | obj   | 文集概览         |                                                              |
| articles  | array | 文集内的文章列表 |                                                              |
| author    | obj   | 文集作者信息     |                                                              |
| last      | obj   | -                | 作用尚不明确<br />结构与data.articles[]中相似                |
| attention | bool  | 是否关注文集作者 | false：未关注<br />true：已关注<br />需要登录(Cookie) <br />未登录为false |

`data`中的`list`对象：

| 字段           | 类型 | 内容            | 备注         |
| -------------- | ---- | --------------- | ------------ |
| id             | num  | 文集rlid        |              |
| mid            | num  | 文集作者mid     |              |
| name           | str  | 文集名称        |              |
| image_url      | str  | 文集封面图片url |              |
| update_time    | num  | 文集更新时间    | 时间戳       |
| ctime          | num  | 文集创建时间    | 时间戳       |
| publish_time   | num  | 文集发布时间    | 时间戳       |
| summary        | str  | 文集简介        |              |
| words          | num  | 文集字数        |              |
| read           | num  | 文集阅读量      |              |
| articles_count | num  | 文集内文章数量  |              |
| state          | num  | 1或3            | 作用尚不明确 |
| reason         | str  | 空              | 作用尚不明确 |
| apply_time     | str  | 空              | 作用尚不明确 |
| check_time     | str  | 空              | 作用尚不明确 |

`data`中的`articles`数组：

| 项   | 类型 | 内容                | 备注 |
| ---- | ---- | ------------------- | ---- |
| 0    | obj  | 文集中第1篇文章     |      |
| n    | obj  | 文集中第(n+1)篇文章 |      |

`data`中的`articles`数组中的对象：

| 字段         | 类型  | 内容           | 备注                                                         |
| ------------ | ----- | -------------- | ------------------------------------------------------------ |
| id           | num   | 专栏cvid       |                                                              |
| title        | str   | 文章标题       |                                                              |
| state        | num   | 0              | 作用尚不明确                                                 |
| publish_time | num   | 发布时间       | 秒时间戳                                                     |
| words        | num   | 文章字数       |                                                              |
| image_urls   | array | 文章封面       |                                                              |
| category     | obj   | 文章标签       |                                                              |
| categories   | array | 文章标签列表   |                                                              |
| summary      | str   | 文章摘要       |                                                              |
| stats        | obj   | 文章状态数信息 |                                                              |
| like_state   | num   | 是否点赞       | 0：未点赞<br />1：已点赞<br />需要登录(Cookie) <br />未登录为0 |

`articles`数组中的对象中的`stats`：

| 字段     | 类型 | 内容       | 备注 |
| -------- | ---- | ---------- | ---- |
| view     | num  | 阅读数     |      |
| favorite | num  | 收藏数     |      |
| like     | num  | 点赞数     |      |
| dislike  | num  | 点踩数     |      |
| reply    | num  | 评论数     |      |
| share    | num  | 分享数     |      |
| coin     | num  | 投币数     |      |
| dynamic  | num  | 动态转发数 |      |

`articles`数组中的对象中的`author`：

| 字段            | 类型 | 内容           | 备注 |
| --------------- | ---- | -------------- | ---- |
| mid             | num  | 作者mid        |      |
| name            | str  | 作者昵称       |      |
| face            | str  | 作者头像url    |      |
| official_verify | obj  | 作者认证信息   |      |
| nameplate       | obj  | 作者勋章       |      |
| vip             | obj  | 作者大会员状态 |      |

**示例：**

查询文集`rl207146`的基本信息

```shell
curl -G 'https://api.bilibili.com/x/article/list/web/articles' \
--data-urlencode 'id=207146' \
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
        "list": {
            "id": 207146, 
            "mid": 293793435, 
            "name": "B站api研究笔记", 
            "image_url": "https://i0.hdslb.com/bfs/article/96d2b3d2a72e6497a011c885ab9245c51507ce18.png", 
            "update_time": 1585036952, 
            "ctime": 1582718126, 
            "publish_time": 1585045493, 
            "summary": "", 
            "words": 8697, 
            "read": 1654, 
            "articles_count": 3, 
            "state": 1, 
            "reason": "", 
            "apply_time": "", 
            "check_time": ""
        }, 
        "articles": [
            {
                "id": 4815593, 
                "title": "【B站API】api研究笔记ep1-视频基本信息", 
                "state": 0, 
                "publish_time": 1582643908, 
                "words": 2906, 
                "image_urls": [
                    "https://i0.hdslb.com/bfs/article/00497c8df7130f22e5b953694b8931a22d32f133.jpg"
                ], 
                "category": {
                    "id": 26, 
                    "parent_id": 17, 
                    "name": "数码"
                }, 
                "categories": [
                    {
                        "id": 17, 
                        "parent_id": 0, 
                        "name": "科技"
                    }, 
                    {
                        "id": 26, 
                        "parent_id": 17, 
                        "name": "数码"
                    }
                ], 
                "summary": "各位小可爱们大家好啊，终于可以结束我长达一年的咕咕了.........在这蝠想联翩的日子里也闲的没事，除了上课就是睡觉，还不如搞点事情哪个猿不想拥有自己的B站爬虫呢（误），当然自制一个B站的综合信息台也是可以的，比如显示粉丝数  获赞数（掉粉警告）于是就萌生了这个研究B站api的想法，以后也会继续不定期分享我的主体思路是利用Chrome中的F12工具进行分析，再用curl进行验证先从视频下手吧qwq我们以av2075941为例network检测下，有各种图片、视频、网页、js。。。。。的传输记录", 
                "stats": {
                    "view": 578, 
                    "favorite": 19, 
                    "like": 26, 
                    "dislike": 0, 
                    "reply": 19, 
                    "share": 6, 
                    "coin": 10, 
                    "dynamic": 0
                }, 
                "like_state": 0
            }, 
            {
                "id": 4820548, 
                "title": "【B站API】api研究笔记ep2-视频其他信息", 
                "state": 0, 
                "publish_time": 1582688189, 
                "words": 4319, 
                "image_urls": [
                    "https://i0.hdslb.com/bfs/article/2416ee72759a5c2c8bba0f10d42e789fc0c0ae2b.jpg"
                ], 
                "category": {
                    "id": 26, 
                    "parent_id": 17, 
                    "name": "数码"
                }, 
                "categories": [
                    {
                        "id": 17, 
                        "parent_id": 0, 
                        "name": "科技"
                    }, 
                    {
                        "id": 26, 
                        "parent_id": 17, 
                        "name": "数码"
                    }
                ], 
                "summary": "大家中午好鸭昨天我们研究了B站api的获取方法和使用方法 这一期我们继续分享另一个从网页中寻找api的方法以及研究视频的其他api接口以av170001为例首先打开视频，在F12的network下的监控中加载页面筛选XHR对象用搜索法的效率较低，不如我们直接进行筛选&观察通过对资源路径的观察可以猜到某些有关的项比如playurl有可能是播放的地址，pagelist可能是分P列表，view不就是昨天研究的『视频基本信息』吗通过继续分析我总结出了以下api这个可以在只想获取简介时应用，而不用处理多余", 
                "stats": {
                    "view": 737, 
                    "favorite": 14, 
                    "like": 18, 
                    "dislike": 0, 
                    "reply": 14, 
                    "share": 1, 
                    "coin": 1, 
                    "dynamic": 0
                }, 
                "like_state": 0
            }, 
            {
                "id": 5263184, 
                "title": "【B站API】api研究笔记Special-AV与BV互转", 
                "state": 0, 
                "publish_time": 1585045493, 
                "words": 1472, 
                "image_urls": [
                    "https://i0.hdslb.com/bfs/article/b520939046899303cfcac1511308eb87ede760d7.jpg"
                ], 
                "category": {
                    "id": 26, 
                    "parent_id": 17, 
                    "name": "数码"
                }, 
                "categories": [
                    {
                        "id": 17, 
                        "parent_id": 0, 
                        "name": "科技"
                    }, 
                    {
                        "id": 26, 
                        "parent_id": 17, 
                        "name": "数码"
                    }
                ], 
                "summary": "昨天视频新编号BV上线了，所有视频的编号默认都变成了BVxxx，不再是avxxx，兼容在链接和搜索中输入av号，评论区和动态av和bv都可以一键传送显然日益增长的投稿量对于编号是个问题，int是有上限的，但一串“乱码”缺少了灵魂，还会让我们想到磁力链接或者熊掌盘的链接（手动狗头）看到av170001，我会想到“法克儿~~”，但看到BV17x411w7KC，我？？？？？其实av号并没有消失，只不过它已经隐藏于大众的视野里了，av和bv本质上是可以双向转换的方法一（电脑版推荐）：打开一个视频，会发现", 
                "stats": {
                    "view": 343, 
                    "favorite": 9, 
                    "like": 13, 
                    "dislike": 0, 
                    "reply": 9, 
                    "share": 0, 
                    "coin": 2, 
                    "dynamic": 0
                }, 
                "like_state": 0
            }
        ], 
        "author": {
            "mid": 293793435, 
            "name": "社会易姐QwQ", 
            "face": "http://i1.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg", 
            "pendant": {
                "pid": 0, 
                "name": "", 
                "image": "", 
                "expire": 0
            }, 
            "official_verify": {
                "type": -1, 
                "desc": ""
            }, 
            "nameplate": {
                "nid": 4, 
                "name": "青铜殿堂", 
                "image": "http://i1.hdslb.com/bfs/face/2879cd5fb8518f7c6da75887994c1b2a7fe670bd.png", 
                "image_small": "http://i1.hdslb.com/bfs/face/6707c120e00a3445933308fd9b7bd9fad99e9ec4.png", 
                "level": "普通勋章", 
                "condition": "单个自制视频总播放数>=1万"
            }, 
            "vip": {
                "type": 2, 
                "status": 1, 
                "due_date": 0, 
                "vip_pay_type": 0, 
                "theme_type": 0, 
                "label": null
            }
        }, 
        "last": {
            "id": 0, 
            "title": "", 
            "state": 0, 
            "publish_time": 0, 
            "words": 0, 
            "image_urls": [ ], 
            "category": {
                "id": 0, 
                "parent_id": 0, 
                "name": ""
            }, 
            "categories": [ ], 
            "summary": ""
        }, 
        "attention": true
    }
}
```

</details>