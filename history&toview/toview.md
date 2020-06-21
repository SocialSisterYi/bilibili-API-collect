# 稍后再看

<img src="/imgs/toview.png" width="25" height="25"/>

## 视频添加稍后再看

>http://api.bilibili.com/x/v2/history/toview/add

*方式：POST*

需要登录(SESSDATA)

最多添加100个视频

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
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />90001：列表已满<br />90003：稿件已经被删除 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |

**示例：**

添加视频`av41687433`/`BV1ht41147kj`到稍后再看列表

curl -b "SESSDATA=xxx" -d "aid=41687433&csrf=xxx" "http://api.bilibili.com/x/v2/history/toview/add"

同curl -b "SESSDATA=xxx" -d "bvid=BV1ht41147kj&csrf=xxx" "http://api.bilibili.com/x/v2/history/toview/add"

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```



## 添加频道中所有视频到稍后再看

> http://space.bilibili.com/ajax/channel/addAllToView

*方式：POST*

需要登录(SESSDATA)

需要验证`DedeUserID`及`DedeUserID__ckMd5`存在且不为0

需要验证`referer`为 `http://.bilibili.com`或`https://.bilibili.com`域名下

带有转义

超过容量后会截取容量之内的添加

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                  | 必要性 | 备注 |
| ------ | ---- | --------------------- | ------ | ---- |
| cid    | num  | 目标频道ID            | 必要   |      |
| mid    | num  | 目标频道所属的用户UID | 必要   |      |
| csrf   | str  | cookies中的bili_jct   | 必要   |      |

**json回复：**

根对象：

| 字段   | 类型 | 内容     | 备注                        |
| ------ | ---- | -------- | --------------------------- |
| status | bool | 是否成功 | false：失败<br />true：成功 |
| data   | str  | 错误信息 |                             |

**示例：**

添加用户`UID=282994`下的频道`4693`中所有视频到稍后再看

curl --referer "http://.bilibili.com" -b "SESSDATA=xxx;DedeUserID=1;DedeUserID__ckMd5=1" -d "cid=4693&mid=282994&csrf=xxx" "http://space.bilibili.com/ajax/channel/addAllToView"

```json
{
    "status": true,
    "data": "操作成功"
}
```



## 获取稍后再看视频列表

> http://api.bilibili.com/x/v2/history/toview

*方式：GET*

需要登录(SESSDATA)

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        | 作用尚不明确                                      |
| data    | data | 数据本体 |                                                   |

`data`对象：

| 字段  | 类型   | 内容             | 备注 |
| ----- | ------ | ---------------- | ---- |
| count | num    | 稍后再看视频数   |      |
| list  | array | 稍后再看视频列表 |      |

`data`中的`list`数组：

| 项   | 类型 | 内容          | 备注                                           |
| ---- | ---- | ------------- | ---------------------------------------------- |
| 0    | obj  | 稍后再看1     |                                                |
| n    | obj  | 稍后再看(n+1) | 按照添加顺序排列<br />项数为总计稍后再看视频数 |
| ……   | obj  | ……            | ……                                             |
| 99   | obj  | 最后一项      |                                                |

`data`中的`list`数组中的对象：

| 字段      | 类型 | 内容                           | 备注                 |
| --------- | ---- | ------------------------------ | -------------------- |
| aid       | num  | 视频avID                       |                      |
| videos    | num  | 视频分P总数                    | 默认为1              |
| tid       | num  | 分区ID                         |                      |
| tname     | str  | 子分区名称                     |                      |
| copyright | num  | 版权标志                       | 1：自制<br />2：转载 |
| pic       | str  | 视频封面图片url                |                      |
| title     | str  | 视频标题                       |                      |
| pubdate   | num  | 视频上传时间                   | 时间戳               |
| ctime     | num  | 视频审核通过时间               | 时间戳               |
| desc      | str  | 视频简介                       |                      |
| state     | num  | 0                              | 作用尚不明确         |
| attribute | num  | ？？？                         | 作用尚不明确         |
| duration  | num  | 视频总计持续时长（所有分P）    | 单位为秒             |
| rights    | obj  | 视频属性标志                   |                      |
| owner     | obj  | 视频UP主信息                   |                      |
| stat      | obj  | 视频状态数                     |                      |
| dynamic   | str  | 视频同步发布的的动态的文字内容 | 无为空               |
| dimension | obj  | 视频1P分辨率                   |                      |
| count     | num  | 分P数                          | 非投稿视频无此项     |
| cid       | num  | 视频CID                        |                      |
| progress  | num  | 观看进度时间                   | 单位为秒             |
| add_at    | num  | 添加时间                       | 时间戳               |
| bvid      | str  | 视频bvID                       |                      |

`data`中的`list`数组中的对象中的`rights`对象：

| 字段            | 类型 | 内容             | 备注                                     |
| --------------- | ---- | ---------------- | ---------------------------------------- |
| bp              | num  | 0                | 作用尚不明确                             |
| elec            | num  | 0                | 作用尚不明确                             |
| download        | num  | 允许下载标志     | 0：不允许<br />1：允许                   |
| movie           | num  | 视频时电影标志   | 0：否<br />1：是                         |
| pay             | num  | 仅会员可观看标志 | 0：无<br />1：有                         |
| hd5             | num  | 有高码率标志     | 0：无<br />1：有                         |
| no_reprint      | num  | 禁止转载标志     | 0：无<br />1：禁止                       |
| autoplay        | num  | 可自动播放标志   | 0：无<br />1：有  区别影视番剧与普通视频 |
| ugc_pay         | num  | 0                | 作用尚不明确                             |
| is_cooperation  | num  | 视频合作标志     | 0：无<br />1：是                         |
| ugc_pay_preview | num  | 0                | 作用尚不明确                             |
| no_background   | num  | 0                | 作用尚不明确                             |

`data`中的`list`数组中的对象中的`owner`对象：

| 字段 | 类型 | 内容     | 备注 |
| ---- | ---- | -------- | ---- |
| mid  | num  | UP主UID  |      |
| name | str  | UP主昵称 |      |
| face | str  | UP主头像 |      |

`data`中的`list`数组中的对象中的`stat`对象：

| 字段       | 类型 | 内容                           | 备注         |
| ---------- | ---- | ------------------------------ | ------------ |
| aid        | num  | 视频avID                       |              |
| view       | num  | 普通：观看次数<br />屏蔽时：-1 |              |
| danmaku    | num  | 弹幕条数                       |              |
| reply      | num  | 评论条数                       |              |
| favorite   | num  | 收藏人数                       |              |
| coin       | num  | 投币枚数                       |              |
| share      | num  | 分享次数                       |              |
| now_rank   | num  | 0                              | 作用尚不明确 |
| his_rank   | num  | 历史最高排行                   |              |
| like       | num  | 获赞次数                       |              |
| dislike    | num  | 0                              | 作用尚不明确 |
| evaluation | str  | 视频评分                       | 默认为空     |

`data`中的`list`数组中的对象中的`pages`对象：

| 字段      | 类型 | 内容            | 备注                                 |
| --------- | ---- | --------------- | ------------------------------------ |
| cid       | num  | 当前分P CID     |                                      |
| page      | num  | 当前分P         |                                      |
| from      | str  | 视频来源        | vupload：用户上传<br />hunan：芒果TV |
| part      | str  | 当前分P标题     |                                      |
| duration  | num  | 当前分P持续时间 | 单位为秒                             |
| vid       | str  | 空              | 作用尚不明确                         |
| weblink   | str  | 空              | 作用尚不明确                         |
| dimension | obj  | 当前分P分辨率   |                                      |

`pages`中的`dimension`对象(同`data`中的`list`数组中的对象中的`dimension`对象)：

| 字段   | 类型 | 内容         | 备注         |
| ------ | ---- | ------------ | ------------ |
| width  | num  | 当前分P 宽度 | 可能为0      |
| height | num  | 当前分P 高度 | 可能为0      |
| rotate | num  | 0            | 作用尚不明确 |

**示例：**

获取稍后再看视频列表

http://api.bilibili.com/x/v2/history/toview

```json
 "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "count": 25,
        "list": [
            {
                "aid": 200333024,
                "videos": 1,
                "tid": 95,
                "tname": "手机平板",
                "copyright": 1,
                "pic": "http://i1.hdslb.com/bfs/archive/a5e3072e670daec4c01a182aae91c1f85a48001e.jpg",
                "title": "【山新】疫情下，配音演员怎么开工录音？",
                "pubdate": 1586959137,
                "ctime": 1586959137,
                "desc": "疫情这段时间，配音演员们是怎么录音的呢=W=",
                "state": 0,
                "attribute": 16768,
                "duration": 218,
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
                    "mid": 14082,
                    "name": "山新",
                    "face": "http://i0.hdslb.com/bfs/face/74c82caee6d9eb623e56161ea8ed6d68afabfeae.jpg"
                },
                "stat": {
                    "aid": 200333024,
                    "view": 361123,
                    "danmaku": 1792,
                    "reply": 1376,
                    "favorite": 7571,
                    "coin": 12129,
                    "share": 895,
                    "now_rank": 0,
                    "his_rank": 0,
                    "like": 54705,
                    "dislike": 0
                },
                "dynamic": "疫情这段时间，配音演员们是怎么录音的呢=W=",
                "dimension": {
                    "width": 3840,
                    "height": 2160,
                    "rotate": 0
                },
                "page": {
                    "cid": 178808041,
                    "page": 1,
                    "from": "vupload",
                    "part": "无标题",
                    "duration": 218,
                    "vid": "",
                    "weblink": "",
                    "dimension": {
                        "width": 3840,
                        "height": 2160,
                        "rotate": 0
                    }
                },
                "count": 1,
                "cid": 178808041,
                "progress": 32,
                "add_at": 1587041785,
                "bvid": "BV1Yz411B7n3"
            },
            {
                "aid": 710350011,
                "videos": 1,
                "tid": 124,
                "tname": "趣味科普人文",
                "copyright": 1,
                "pic": "http://i0.hdslb.com/bfs/archive/c5b7e7c07a4abf27029c5afb3ab65fee4475b9a9.jpg",
                "title": "不花一分钱建立自己的网站！给硬盘里的小姐姐换个新家！",
                "pubdate": 1586919626,
                "ctime": 1586898238,
                "desc": "制作视频不易，你的点赞是对我最大的支持！\nUP主的个人网站：https://amdradeonrin.github.io/MIKU/\n视频提到的文件在网站有下载\nGitHub上的网站源码：https://github.com/AMDRadeonRin/MIKU",
                "state": 0,
                "attribute": 16768,
                "duration": 169,
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
                    "mid": 179757857,
                    "name": "GTX690战术核显卡导弹",
                    "face": "http://i2.hdslb.com/bfs/face/2504de8c1eeef22d91bbc45803f6b29afcbb0adf.jpg"
                },
                "stat": {
                    "aid": 710350011,
                    "view": 3293,
                    "danmaku": 37,
                    "reply": 117,
                    "favorite": 355,
                    "coin": 76,
                    "share": 11,
                    "now_rank": 0,
                    "his_rank": 0,
                    "like": 325,
                    "dislike": 0
                },
                "dynamic": "#网页制作##HTML##网页#给你们科普一下怎么弄网站吧，你们也可以考虑整一个XD",
                "dimension": {
                    "width": 1920,
                    "height": 1080,
                    "rotate": 0
                },
                "count": 1,
                "cid": 0,
                "progress": 0,
                "add_at": 1587012410,
                "bvid": "BV1LQ4y1T7Xh"
            },
            …………
        ]
    }
}
```



## 删除稍后再看视频

> http://api.bilibili.com/x/v2/history/toview/del

*方式：POST*

需要登录(SESSDATA)

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                     | 必要性 | 备注                                                         |
| ------ | ---- | ------------------------ | ------ | ------------------------------------------------------------ |
| viewed | bool | 是否删除所有已观看的视频 | 非必要 | true：删除已观看视频<br />false：不删除已观看视频<br />默认为false |
| aid    | num  | 删除的目标记录的avID     | 非必要 |                                                              |
| csrf   | str  | cookies中的bili_jct      | 必要   |                                                              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |

**示例：**

删除视频`av540580868`的稍后再看记录

curl -b "SESSDATA=xxx" -d "aid=540580868&csrf=xxx" "http://api.bilibili.com/x/v2/history/toview/del"

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

删除所有已观看的视频

curl -b "SESSDATA=xxx" -d "viewed=true&csrf=xxx" "http://api.bilibili.com/x/v2/history/toview/del"

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```



## 清空稍后再看视频列表

> http://api.bilibili.com/x/v2/history/toview/clear

*方式：POST*

需要登录(SESSDATA)

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                | 必要性 | 备注 |
| ------ | ---- | ------------------- | ------ | ---- |
| csrf   | num  | cookies中的bili_jct | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                  |
| ------- | ---- | -------- | ----------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败 |
| message | str  | 错误信息 | 默认为0                                               |
| ttl     | num  | 1        | 作用尚不明确                                          |

**示例：**

清空稍后再看视频列表

curl -b "SESSDATA=xxx" -d "csrf=xxx" "http://api.bilibili.com/x/v2/history/toview/clear"

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

