# 视频基本信息

<img src="/imgs/ploading.gif" width="100" height="100"/>

- [获取视频详细信息(web端)](#获取视频详细信息(web端))
- [获取视频超详细信息(web端)](#获取视频超详细信息(web端))
- [获取视频简介](#获取视频简介)
- [查询视频分P列表  (avid/bvid转cid)](#查询视频分P列表  (avid/bvid转cid))

---

## 获取视频详细信息(web端)

> http://api.bilibili.com/x/web-interface/view

*请求方式：GET*

认证方式：Cookie(SESSDATA)

限制游客访问的视频需要登录

**url参数：**

| 参数名 | 类型 | 内容     | 必要性     | 备注               |
| ------ | ---- | -------- | ---------- | ------------------ |
| aid    | num  | 稿件avid | 必要(可选) | avid与bvid任选一个 |
| bvid   | str  | 稿件bvid | 必要(可选) | avid与bvid任选一个 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-403：权限不足<br />-404：无视频<br />62002：稿件不可见<br />62004：稿件审核中 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段                    | 类型    | 内容                           | 备注                                                         |
| ----------------------- | ------- | ------------------------------ | ------------------------------------------------------------ |
| bvid                    | str     | 稿件bvid                       |                                                              |
| aid                     | num     | 稿件avid                       |                                                              |
| videos                  | num     | 稿件分P总数                    | 默认为1                                                      |
| tid                     | num     | 分区tid                        |                                                              |
| tname                   | str     | 子分区名称                     |                                                              |
| copyright               | num     | 视频类型                       | 1：原创<br />2：转载                                         |
| pic                     | str     | 稿件封面图片url                |                                                              |
| title                   | str     | 稿件标题                       |                                                              |
| pubdate                 | num     | 稿件发布时间                   | 时间戳                                                       |
| ctime                   | num     | 用户投稿时间                   | 时间戳                                                       |
| desc                    | str     | 视频简介                       |                                                              |
| desc_v2                 | array   | 新版视频简介                   |                                                              |
| state                   | num     | 视频状态                       | 详情见[属性数据文档](attribute_data.md#attribute字段值(稿件属性位)) |
| ~~attribute~~(已经弃用) | ~~num~~ | ~~稿件属性位配置~~             | 详情见[属性数据文档](attribute_data.md#state字段值(稿件状态)) |
| duration                | num     | 稿件总时长(所有分P)            | 单位为秒                                                     |
| forward                 | num     | 撞车视频跳转avid               | 仅撞车视频存在此字段                                         |
| mission_id              | num     | 稿件参与的活动id               |                                                              |
| redirect_url            | str     | 重定向url                      | 仅番剧或影视视频存在此字段<br />用于番剧&影视的av/bv->ep     |
| rights                  | obj     | 视频属性标志                   |                                                              |
| owner                   | obj     | 视频UP主信息                   |                                                              |
| stat                    | obj     | 视频状态数                     |                                                              |
| dynamic                 | str     | 视频同步发布的的动态的文字内容 |                                                              |
| cid                     | num     | 视频1P cid                     |                                                              |
| dimension               | obj     | 视频1P分辨率                   |                                                              |
| no_cache                | bool    | true                           | 作用尚不明确                                                 |
| pages                   | array   | 视频分P列表                    |                                                              |
| subtitle                | obj     | 视频CC字幕信息                 |                                                              |
| staff                   | array   | 合作成员列表                   | 非合作视频无此项                                             |
| user_garb               | obj     | 用户装扮信息                   |                                                              |

`data`中的`desc_v2`数组：

| 项   | 类型 | 内容         | 备注 |
| ---- | ---- | ------------ | ---- |
| 0    | obj  | 新版简介内容 |      |

`desc_v2`数组中的对象：

| 字段     | 类型 | 内容     | 备注 |
| -------- | ---- | -------- | ---- |
| raw_text | str  | 简介内容 |      |
| type     | num  | ?        |      |
| biz_id   | num  | ?        |      |

`data`中的`rights`对象：

| 字段            | 类型 | 内容                   | 备注         |
| --------------- | ---- | ---------------------- | ------------ |
| bp              | num  | 0                      | 作用尚不明确 |
| elec            | num  | 是否支持充电           |              |
| download        | num  | 是否允许下载           |              |
| movie           | num  | 是否电影               |              |
| pay             | num  | 是否PGC付费            |              |
| hd5             | num  | 是否有高码率           |              |
| no_reprint      | num  | 是否显示“禁止转载”标志 |              |
| autoplay        | num  | 是否自动播放           |              |
| ugc_pay         | num  | 是否UGC付费            |              |
| is_stein_gate   | num  | 是否为互动视频         |              |
| is_cooperation  | num  | 是否为联合投稿         |              |
| ugc_pay_preview | num  | 0                      | 作用尚不明确 |
| no_background   | num  | 0                      | 作用尚不明确 |

`data`中的`owner`对象：

| 字段 | 类型 | 内容     | 备注 |
| ---- | ---- | -------- | ---- |
| mid  | num  | UP主mid  |      |
| name | str  | UP主昵称 |      |
| face | str  | UP主头像 |      |

`data`中的`stat`对象：

| 字段       | 类型 | 内容         | 备注    |
| ---------- | ---- | ------------ | ------- |
| aid        | num  | 稿件avid     |         |
| view       | num  | 播放数       |         |
| danmaku    | num  | 弹幕数       |         |
| reply      | num  | 评论数       |         |
| favorite   | num  | 收藏数       |         |
| coin       | num  | 投币数       |         |
| share      | num  | 分享数       |         |
| now_rank   | num  | 当前排名     |         |
| his_rank   | num  | 历史最高排行 |         |
| like       | num  | 获赞数       |         |
| dislike    | num  | 点踩数       | 恒为`0` |
| evaluation | str  | 视频评分     |         |
| argue_msg  | str  | 警告/争议提示信息 |         |

`data`中的`pages`数组：

| 项   | 类型 | 内容       | 备注          |
| ---- | ---- | ---------- | ------------- |
| 0    | obj  | 1P内容     | 无分P仅有此项 |
| n    | obj  | (n+1)P内容 |               |
| ……   | obj  | ……         | ……            |

`pages`数组中的对象：

| 字段      | 类型 | 内容            | 备注                                                      |
| --------- | ---- | --------------- | --------------------------------------------------------- |
| cid       | num  | 当前分P cid     |                                                           |
| page      | num  | 当前分P         |                                                           |
| from      | str  | 视频来源        | vupload：普通上传（B站）<br />hunan：芒果TV<br />qq：腾讯 |
| part      | str  | 当前分P标题     |                                                           |
| duration  | num  | 当前分P持续时间 | 单位为秒                                                  |
| vid       | str  | 站外视频vid     | 仅站外视频有效                                            |
| weblink   | str  | 站外视频跳转url | 仅站外视频有效                                            |
| dimension | obj  | 当前分P分辨率   | 部分较老视频无分辨率值                                    |

`pages`数组中的对象中的`dimension`对象(同`data`中的`dimension`对象)：

| 字段   | 类型 | 内容           | 备注                 |
| ------ | ---- | -------------- | -------------------- |
| width  | num  | 当前分P 宽度   |                      |
| height | num  | 当前分P 高度   |                      |
| rotate | num  | 是否将宽高对换 | 0：正常<br />1：对换 |

`subtitle`对象：

| 字段         | 类型  | 内容             | 备注 |
| ------------ | ----- | ---------------- | ---- |
| allow_submit | bool  | 是否允许提交字幕 |      |
| list         | array | 字幕列表         |      |

`subtitle`对象中的`list`数组：

| 项   | 类型 | 内容      | 备注 |
| ---- | ---- | --------- | ---- |
| 0    | obj  | 字幕1     |      |
| n    | obj  | 字幕(n+1) |      |
| ……   | obj  | ……        | ……   |

`list`数组中的对象：

| 字段         | 类型 | 内容                | 备注 |
| ------------ | ---- | ------------------- | ---- |
| id           | num  | 字幕id              |      |
| lan          | str  | 字幕语言            |      |
| lan_doc      | str  | 字幕语言名称        |      |
| is_lock      | bool | 是否锁定            |      |
| author_mid   | num  | 字幕上传者mid       |      |
| subtitle_url | str  | json格式字幕文件url |      |
| author       | obj  | 字幕上传者信息      |      |

`list`数组中的对象中的`author`对象：

| 字段            | 类型 | 内容              | 备注         |
| --------------- | ---- | ----------------- | ------------ |
| mid             | num  | 字幕上传者mid     |              |
| name            | str  | 字幕上传者昵称    |              |
| sex             | str  | 字幕上传者性别    | 男 女 保密   |
| face            | str  | 字幕上传者头像url |              |
| sign            | str  | 字幕上传者签名    |              |
| rank            | num  | 10000             | 作用尚不明确 |
| birthday        | num  | 0                 | 作用尚不明确 |
| is_fake_account | num  | 0                 | 作用尚不明确 |
| is_deleted      | num  | 0                 | 作用尚不明确 |

`staff`数组：

| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| 0    | obj  | 合作成员1     |      |
| n    | obj  | 合作成员(n+1) |      |
| ……   | obj  | ……            | ……   |

`staff`数组中的对象：

| 字段     | 类型 | 内容           | 备注 |
| -------- | ---- | -------------- | ---- |
| mid      | num  | 成员mid        |      |
| title    | str  | 成员名称       |      |
| name     | str  | 成员昵称       |      |
| face     | str  | 成员头像url    |      |
| vip      | obj  | 成员大会员状态 |      |
| official | obj  | 成员认证信息   |      |
| follower | num  | 成员粉丝数     |      |

`staff`数组中的对象中的`vip`对象：

| 字段       | 类型 | 内容         | 备注                                |
| ---------- | ---- | ------------ | ----------------------------------- |
| type       | num  | 成员会员类型 | 0：无<br />1：月会员<br />2：年会员 |
| status     | num  | 会员状态     | 0：无<br />1：有                    |
| theme_type | num  | 0            |                                     |

`staff`数组中的对象中的`official`对象：

| 字段  | 类型 | 内容         | 备注                                              |
| ----- | ---- | ------------ | ------------------------------------------------- |
| role  | num  | 成员认证级别 | 0：无<br />1 2 7：个人认证<br />3 4 5 6：机构认证 |
| title | str  | 成员认证名   | 无为空                                            |
| desc  | str  | 成员认证备注 | 无为空                                            |
| type  | num  | 成员认证类型 | -1：无<br />0：有                                 |

`data`中的`user_garb`对象：

| 字段              | 类型 | 内容    | 备注 |
| ----------------- | ---- | ------- | ---- |
| url_image_ani_cut | str  | 某url？ |      |

**示例：**

获取视频`av85440373`/`BV117411r7R1`的基本信息

avid方式：

```shell
curl -G 'http://api.bilibili.com/x/web-interface/view' \
--data-urlencode 'aid=85440373'
```

bvid方式：

```shell
curl -G 'http://api.bilibili.com/x/web-interface/view' \
--data-urlencode 'bvid=BV117411r7R1'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "bvid": "BV117411r7R1",
        "aid": 85440373,
        "videos": 1,
        "tid": 28,
        "tname": "原创音乐",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/ea0dd34bf41e23a68175680a00e3358cd249105f.jpg",
        "title": "当我给拜年祭的快板加了电音配乐…",
        "pubdate": 1580377255,
        "ctime": 1580212263,
        "desc": "【CB想说的】看完拜年祭之后最爱的一个节目！给有快板的部分简单加了一些不同风格的配乐hhh，感谢沃玛画的我！太可爱了哈哈哈哈哈哈哈！！！\n【Warma想说的】我画了打碟的CB，画风为了还原原版视频所以参考了四迹老师的画风，四迹老师的画真的太可爱啦！不过其实在画的过程中我遇到了一个问题，CB的耳机……到底是戴在哪个耳朵上呢？\n\n原版：av78977080\n编曲（配乐）：Crazy Bucket\n人声（配音）：Warma/谢拉\n曲绘：四迹/Warma\n动画：四迹/Crazy Bucket\n剧本：Mokurei-木灵君\n音频后期：DMYoung/纳兰寻风/Crazy Bucket\n包装：破晓天",
        "desc_v2": [
            {
                "raw_text": "【CB想说的】看完拜年祭之后最爱的一个节目！给有快板的部分简单加了一些不同风格的配乐hhh，感谢沃玛画的我！太可爱了哈哈哈哈哈哈哈！！！\n【Warma想说的】我画了打碟的CB，画风为了还原原版视频所以参考了四迹老师的画风，四迹老师的画真的太可爱啦！不过其实在画的过程中我遇到了一个问题，CB的耳机……到底是戴在哪个耳朵上呢？\n\n原版：av78977080\n编曲（配乐）：Crazy Bucket\n人声（配音）：Warma/谢拉\n曲绘：四迹/Warma\n动画：四迹/Crazy Bucket\n剧本：Mokurei-木灵君\n音频后期：DMYoung/纳兰寻风/Crazy Bucket\n包装：破晓天",
                "type": 1,
                "biz_id": 0
            }
        ],
        "state": 0,
        "duration": 486,
        "mission_id": 11838,
        "rights": {
            "bp": 0,
            "elec": 0,
            "download": 1,
            "movie": 0,
            "pay": 0,
            "hd5": 1,
            "no_reprint": 1,
            "autoplay": 1,
            "ugc_pay": 0,
            "is_cooperation": 1,
            "ugc_pay_preview": 0,
            "no_background": 0,
            "clean_mode": 0,
            "is_stein_gate": 0
        },
        "owner": {
            "mid": 66606350,
            "name": "Crazy_Bucket",
            "face": "http://i2.hdslb.com/bfs/face/c9af3b32cf74baec5a4b65af8ca18ae5ff571f77.jpg"
        },
        "stat": {
            "aid": 85440373,
            "view": 2087084,
            "danmaku": 11495,
            "reply": 2669,
            "favorite": 58113,
            "coin": 68710,
            "share": 9190,
            "now_rank": 0,
            "his_rank": 55,
            "like": 148621,
            "dislike": 0,
            "evaluation": "",
            "argue_msg": ""
        },
        "dynamic": "进来就出不去了！！！\n#全民音乐UP主##CB##warma##电音##快板##拜年祭##诸神的奥运##编曲##Remix#",
        "cid": 146044693,
        "dimension": {
            "width": 1920,
            "height": 1080,
            "rotate": 0
        },
        "no_cache": false,
        "pages": [
            {
                "cid": 146044693,
                "page": 1,
                "from": "vupload",
                "part": "建议改成：建议改成：诸 神 的 电 音 节（不是）",
                "duration": 486,
                "vid": "",
                "weblink": "",
                "dimension": {
                    "width": 1920,
                    "height": 1080,
                    "rotate": 0
                }
            }
        ],
        "subtitle": {
            "allow_submit": false,
            "list": []
        },
        "staff": [
            {
                "mid": 66606350,
                "title": "UP主",
                "name": "Crazy_Bucket",
                "face": "http://i2.hdslb.com/bfs/face/c9af3b32cf74baec5a4b65af8ca18ae5ff571f77.jpg",
                "vip": {
                    "type": 2,
                    "status": 1,
                    "due_date": 1642694400000,
                    "vip_pay_type": 1,
                    "theme_type": 0,
                    "label": {
                        "path": "",
                        "text": "年度大会员",
                        "label_theme": "annual_vip",
                        "text_color": "#FFFFFF",
                        "bg_style": 1,
                        "bg_color": "#FB7299",
                        "border_color": ""
                    },
                    "avatar_subscript": 1,
                    "nickname_color": "#FB7299",
                    "role": 3,
                    "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png"
                },
                "official": {
                    "role": 2,
                    "title": "bilibili 知名音乐UP主",
                    "desc": "",
                    "type": 0
                },
                "follower": 662460,
                "label_style": 0
            },
            {
                "mid": 53456,
                "title": "曲绘",
                "name": "Warma",
                "face": "http://i2.hdslb.com/bfs/face/c1bbee6d255f1e7fc434e9930f0f288c8b24293a.jpg",
                "vip": {
                    "type": 2,
                    "status": 1,
                    "due_date": 1637424000000,
                    "vip_pay_type": 0,
                    "theme_type": 0,
                    "label": {
                        "path": "",
                        "text": "年度大会员",
                        "label_theme": "annual_vip",
                        "text_color": "#FFFFFF",
                        "bg_style": 1,
                        "bg_color": "#FB7299",
                        "border_color": ""
                    },
                    "avatar_subscript": 1,
                    "nickname_color": "#FB7299",
                    "role": 3,
                    "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png"
                },
                "official": {
                    "role": 1,
                    "title": "bilibili 知名UP主",
                    "desc": "",
                    "type": 0
                },
                "follower": 2655737,
                "label_style": 0
            }
        ],
        "user_garb": {
            "url_image_ani_cut": ""
        }
    }
}
```

</details>

视频标题为：`当我给拜年祭的快板加了电音配乐…`

视频分区为：`tid=28(音乐->原创音乐)`

视频时长：`486s`

视频发布时间：`2020/1/30 17:40:55`

视频投稿时间：`2020/1/28 19:51:3`

视频分P为：`1`

视频类型为：`1(原创)`

视频UP主为：`66606350(Crazy_Bucket)`

视频简介为：

`【CB想说的】看完拜年祭之后最爱的一个节目！给有快板的部分简单加了一些不同风格的配乐hhh，感谢沃玛画的我！太可爱了哈哈哈哈哈哈哈！！！\n【Warma想说的】我画了打碟的CB，画风为了还原原版视频所以参考了四迹老师的画风，四迹老师的画真的太可爱啦！不过其实在画的过程中我遇到了一个问题，CB的耳机……到底是戴在哪个耳朵上呢？\n\n原版：av78977080\n编曲(配乐)：Crazy Bucket\n人声(配音)：Warma/谢拉\n曲绘：四迹/Warma\n动画：四迹/Crazy Bucket\n剧本：Mokurei-木灵君\n音频后期：DMYoung/纳兰寻风/Crazy Bucket\n包装：破晓天`

视频状态为：`0(开放浏览)`

视频属性为： `显示“禁止转载“标志`、`高清`、`禁止其他人添加TAG`、`联合投稿视频`

视频封面为：

http://i1.hdslb.com/bfs/archive/ea0dd34bf41e23a68175680a00e3358cd249105f.jpg

![](http://i1.hdslb.com/bfs/archive/ea0dd34bf41e23a68175680a00e3358cd249105f.jpg)

## 获取视频超详细信息(web端)

> http://api.bilibili.com/x/web-interface/view/detail

*请求方式：GET*

认证方式：Cookie(SESSDATA)

限制游客访问的视频需要登录

**url参数：**

| 参数名 | 类型 | 内容     | 必要性     | 备注               |
| ------ | ---- | -------- | ---------- | ------------------ |
| aid    | num  | 稿件avid | 必要(可选) | avid与bvid任选一个 |
| bvid   | str  | 稿件bvid | 必要(可选) | avid与bvid任选一个 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-403：权限不足<br />-404：无视频<br />62002：稿件不可见<br />62004：稿件审核中 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段       | 类型  | 内容         | 备注         |
| ---------- | ----- | ------------ | ------------ |
| View       | obj   | 视频基本信息 |              |
| Card       | obj   | 视频UP主信息 |              |
| Tags       | array | 视频TAG信息  |              |
| Reply      | obj   | 视频热评信息 |              |
| Related    | array | 推荐视频信息 |              |
| Spec       | null  | ？           | 作用尚不明确 |
| hot_share  | obj   | ？           | 作用尚不明确 |
| elec       | null  | ？           | 作用尚不明确 |
| recommend  | null  | ？           | 作用尚不明确 |
| view_addit | obj   | ？           | 作用尚不明确 |

`data`中的`View`对象：

基本同「[获取视频详细信息(web端)](#获取视频详细信息(web端))」中的data对象

`data`中的`Card`对象：

| 字段          | 类型 | 内容           | 备注                                                         |
| ------------- | ---- | -------------- | ------------------------------------------------------------ |
| card          | obj  | UP主名片信息   |                                                              |
| space         | obj  | 主页头图       |                                                              |
| following     | bool | 是否关注此用户 | true：已关注<br />false：未关注<br />需要登录(Cookie) <br />未登录为false |
| archive_count | num  | 用户稿件数     |                                                              |
| article_count | num  | 0              | 作用尚不明确                                                 |
| follower      | num  | 粉丝数         |                                                              |
| like_num      | num  | UP主获赞次数   |                                                              |

`Card`中的`card`对象：

| 字段             | 类型  | 内容            | 备注                               |
| ---------------- | ----- | --------------- | ---------------------------------- |
| mid              | str   | 用户mid         |                                    |
| name             | str   | 用户昵称        |                                    |
| approve          | bool  | false           | 作用尚不明确                       |
| sex              | str   | 用户性别        | 男 女 保密                         |
| rank             | str   | 10000           | 作用尚不明确                       |
| face             | str   | 用户头像链接    |                                    |
| face_nft         | num   | 是否为 nft 头像 | `0`不是nft头像<br />`1`是 nft 头像 |
| DisplayRank      | str   | 0               | 作用尚不明确                       |
| regtime          | num   | 0               | 作用尚不明确                       |
| spacesta         | num   | 0               | 作用尚不明确                       |
| birthday         | str   | 空              | 作用尚不明确                       |
| place            | str   | 空              | 作用尚不明确                       |
| description      | str   | 空              | 作用尚不明确                       |
| article          | num   | 0               | 作用尚不明确                       |
| attentions       | array | 空              | 作用尚不明确                       |
| fans             | num   | 粉丝数          |                                    |
| friend           | num   | 关注数          |                                    |
| attention        | num   | 关注数          |                                    |
| sign             | str   | 签名            |                                    |
| level_info       | obj   | 等级            |                                    |
| pendant          | obj   | 挂件            |                                    |
| nameplate        | obj   | 勋章            |                                    |
| Official         | obj   | 认证信息        |                                    |
| official_verify  | obj   | 认证信息2       |                                    |
| vip              | obj   | 大会员状态      |                                    |
| is_senior_member | num   | 是否为硬核会员  | 0：否<br />1：是                   |

`card`中的`level_info`对象：

| 字段          | 类型 | 内容     | 备注             |
| ------------- | ---- | -------- | ---------------- |
| current_level | num  | 当前等级 | 0-6级            |
| current_min   | num  | 0        | 作用尚不明确     |
| current_exp   | num  | 0        | 作用尚不明确     |
| next_exp      | num  | 0        | 作用尚不明确     |

`card`中的`pendant`对象：

| 字段   | 类型 | 内容        | 备注         |
| ------ | ---- | ----------- | ------------ |
| pid    | num  | 挂件id      |              |
| name   | str  | 挂件名称    |              |
| image  | str  | 挂件图片url |              |
| expire | num  | 0           | 作用尚不明确 |

`card`中的`nameplate`对象：

| 字段        | 类型 | 内容             | 备注             |
| ----------- | ---- | ---------------- | ---------------- |
| nid         | num  | 勋章id           | 详细说明有待补充 |
| name        | str  | 勋章名称         |                  |
| image       | str  | 挂件图片url 正常 |                  |
| image_small | str  | 勋章图片url 小   |                  |
| level       | str  | 勋章等级         |                  |
| condition   | str  | 勋章条件         |                  |

`card`中的`Official`对象：

| 字段  | 类型 | 内容     | 备注                                              |
| ----- | ---- | -------- | ------------------------------------------------- |
| role  | num  | 认证类型 | 0：无<br />1 2 7：个人认证<br />3 4 5 6：机构认证 |
| title | str  | 认证信息 | 无为空                                            |
| desc  | str  | 认证备注 | 无为空                                            |
| type  | num  | 是否认证 | -1：无<br />0：认证                               |

`card`中的`official_verify`对象：

| 字段 | 类型 | 内容     | 备注                |
| ---- | ---- | -------- | ------------------- |
| type | num  | 是否认证 | -1：无<br />0：认证 |
| desc | str  | 认证信息 | 无为空              |

`card`中的`vip`对象：

| 字段          | 类型 | 内容       | 备注                                              |
| ------------- | ---- | ---------- | ------------------------------------------------- |
| vipType       | num  | 大会员类型 | 0：无<br />1：月度大会员<br />2：年度及以上大会员 |
| dueRemark     | str  | 空         | 作用尚不明确                                      |
| accessStatus  | num  | 0          | 作用尚不明确                                      |
| vipStatus     | num  | 大会员状态 | 0：无<br />1：有                                  |
| vipStatusWarn | str  | 空         | 作用尚不明确                                      |
| theme_type    | num  | 0          | 作用尚不明确                                      |

`Card`中的`space`对象：

| 字段  | 类型 | 内容             | 备注 |
| ----- | ---- | ---------------- | ---- |
| s_img | str  | 主页头图url 小图 |      |
| l_img | str  | 主页头图url 正常 |      |

`data`中的`Tags`数组：

基本同「[获取视频TAG信息](tags.md#获取视频TAG信息)」中的data数组

`data`中的`Reply`对象：

基本同「[获取评论区热评](../comment/list.md#获取评论区热评)」中的data对象

`data`中的`Related`数组：

| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| 0    | obj  | 推荐视频1     |      |
| n    | obj  | 推荐视频(n+1) |      |
| ……   | obj  | ……            | ……   |

`Related`数组中的对象：

基本同「[获取视频详细信息(web端)](#获取视频详细信息(web端))」中的data对象，已知没有分P信息

`data`中的`hot_share`对象：

| 字段 | 类型  | 内容  | 备注         |
| ---- | ----- | ----- | ------------ |
| show | bool  | false | 作用尚不明确 |
| list | array | 空    | 作用尚不明确 |

`data`中的`view_addit`对象：

| 字段 | 类型 | 内容  | 备注         |
| ---- | ---- | ----- | ------------ |
| 63   | bool | false | 作用尚不明确 |
| 64   | bool | false | 作用尚不明确 |

**示例：**

获取视频`av170001`/`BV17x411w7KC`的详细信息

avid方式：

```shell
curl -G 'http://api.bilibili.com/x/web-interface/view/detail' \
--data-urlencode 'aid=170001'
```

bvid方式：

```shell
curl -G 'http://api.bilibili.com/x/web-interface/view/detail' \
--data-urlencode 'bvid=BV17x411w7KC'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "View": {
            "bvid": "BV17x411w7KC",
            "aid": 170001,
            "videos": 10,
            "tid": 193,
            "tname": "MV",
            "copyright": 2,
            "pic": "http://i2.hdslb.com/bfs/archive/1ada8c32a9d168e4b2ee3e010f24789ba3353785.jpg",
            "title": "【MV】保加利亚妖王AZIS视频合辑",
            "pubdate": 1320850533,
            "ctime": 1497380562,
            "desc": "sina 保加利亚超级天王 Azis1999年出道。他的音乐融合保加利亚名族曲风chalga和pop、rap等元素，不过他惊艳的易装秀与浮夸的角色诠释才是他最为出名的地方 Azis与众多保加利亚天王天后级歌手都有过合作.06年，他作为Mariana Popova的伴唱，在欧洲半决赛上演唱了他们的参赛曲Let Me Cry 06年他被Velikite Balgari评为保加利亚有史以来最伟大的名人之一",
            "desc_v2": [{
                "raw_text": "sina 保加利亚超级天王 Azis1999年出道。他的音乐融合保加利亚名族曲风chalga和pop、rap等元素，不过他惊艳的易装秀与浮夸的角色诠释才是他最为出名的地方 Azis与众多保加利亚天王天后级歌手都有过合作.06年，他作为Mariana Popova的伴唱，在欧洲半决赛上演唱了他们的参赛曲Let Me Cry 06年他被Velikite Balgari评为保加利亚有史以来最伟大的名人之一",
                "type": 1,
                "biz_id": 0
            }],
            "state": 0,
            "duration": 2412,
            "rights": {
                "bp": 0,
                "elec": 0,
                "download": 1,
                "movie": 0,
                "pay": 0,
                "hd5": 0,
                "no_reprint": 0,
                "autoplay": 1,
                "ugc_pay": 0,
                "is_cooperation": 0,
                "ugc_pay_preview": 0,
                "no_background": 0,
                "clean_mode": 0,
                "is_stein_gate": 0,
                "is_360": 0,
                "no_share": 0,
                "arc_pay": 0,
                "free_watch": 0
            },
            "owner": {
                "mid": 122541,
                "name": "冰封.虾子",
                "face": "http://i0.hdslb.com/bfs/face/40c46ee74dd6ea33d46c38cd6083e6a1286aa482.gif"
            },
            "stat": {
                "aid": 170001,
                "view": 42464277,
                "danmaku": 907795,
                "reply": 175452,
                "favorite": 886859,
                "coin": 273709,
                "share": 613987,
                "now_rank": 0,
                "his_rank": 13,
                "like": 846075,
                "dislike": 0,
                "evaluation": "",
                "argue_msg": ""
            },
            "dynamic": "",
            "cid": 279786,
            "dimension": {
                "width": 512,
                "height": 288,
                "rotate": 0
            },
            "premiere": null,
            "teenage_mode": 0,
            "is_chargeable_season": false,
            "no_cache": false,
            "pages": [{
                "cid": 279786,
                "page": 1,
                "from": "vupload",
                "part": "Хоп",
                "duration": 199,
                "vid": "",
                "weblink": "",
                "dimension": {
                    "width": 512,
                    "height": 288,
                    "rotate": 0
                }
            }, {
                "cid": 275431,
                "page": 2,
                "from": "vupload",
                "part": "Imash li surce",
                "duration": 205,
                "vid": "",
                "weblink": "",
                "dimension": {
                    "width": 640,
                    "height": 360,
                    "rotate": 0
                }
            }, {
                "cid": 279787,
                "page": 3,
                "from": "vupload",
                "part": "No Kazvam Ti Stiga",
                "duration": 308,
                "vid": "",
                "weblink": "",
                "dimension": {
                    "width": 432,
                    "height": 324,
                    "rotate": 0
                }
            }, {
                "cid": 280467,
                "page": 4,
                "from": "vupload",
                "part": "Samo za teb",
                "duration": 273,
                "vid": "",
                "weblink": "",
                "dimension": {
                    "width": 360,
                    "height": 288,
                    "rotate": 0
                }
            }, {
                "cid": 280468,
                "page": 5,
                "from": "vupload",
                "part": "Tochno sega",
                "duration": 241,
                "vid": "",
                "weblink": "",
                "dimension": {
                    "width": 584,
                    "height": 360,
                    "rotate": 0
                }
            }, {
                "cid": 280469,
                "page": 6,
                "from": "vupload",
                "part": "Kak boli",
                "duration": 336,
                "vid": "",
                "weblink": "",
                "dimension": {
                    "width": 384,
                    "height": 288,
                    "rotate": 0
                }
            }, {
                "cid": 274491,
                "page": 7,
                "from": "vupload",
                "part": "Obicham Te",
                "duration": 250,
                "vid": "",
                "weblink": "",
                "dimension": {
                    "width": 402,
                    "height": 208,
                    "rotate": 0
                }
            }, {
                "cid": 267410,
                "page": 8,
                "from": "vupload",
                "part": "Mrazish",
                "duration": 201,
                "vid": "",
                "weblink": "",
                "dimension": {
                    "width": 540,
                    "height": 360,
                    "rotate": 0
                }
            }, {
                "cid": 267714,
                "page": 9,
                "from": "vupload",
                "part": "Няма накъде",
                "duration": 201,
                "vid": "",
                "weblink": "",
                "dimension": {
                    "width": 450,
                    "height": 360,
                    "rotate": 0
                }
            }, {
                "cid": 270380,
                "page": 10,
                "from": "vupload",
                "part": "Gadna poroda",
                "duration": 198,
                "vid": "",
                "weblink": "",
                "dimension": {
                    "width": 432,
                    "height": 324,
                    "rotate": 0
                }
            }],
            "subtitle": {
                "allow_submit": false,
                "list": []
            },
            "is_season_display": false,
            "user_garb": {
                "url_image_ani_cut": "http://i0.hdslb.com/bfs/garb/item/65497c391bedfd4cb6d7e02a135141ebe8547142.bin"
            },
            "honor_reply": {
                "honor": [{
                    "aid": 170001,
                    "type": 3,
                    "desc": "全站排行榜最高第13名",
                    "weekly_recommend_num": 0
                }]
            }
        },
        "Card": {
            "card": {
                "mid": "122541",
                "name": "冰封.虾子",
                "approve": false,
                "sex": "保密",
                "rank": "10000",
                "face": "http://i0.hdslb.com/bfs/face/40c46ee74dd6ea33d46c38cd6083e6a1286aa482.gif",
                "face_nft": 0,
                "face_nft_type": 0,
                "DisplayRank": "0",
                "regtime": 0,
                "spacesta": 0,
                "birthday": "",
                "place": "",
                "description": "",
                "article": 0,
                "attentions": [],
                "fans": 66709,
                "friend": 33,
                "attention": 33,
                "sign": "路亚钓鱼爱好者交流群411267154",
                "level_info": {
                    "current_level": 6,
                    "current_min": 0,
                    "current_exp": 0,
                    "next_exp": 0
                },
                "pendant": {
                    "pid": 0,
                    "name": "",
                    "image": "",
                    "expire": 0,
                    "image_enhance": "",
                    "image_enhance_frame": ""
                },
                "nameplate": {
                    "nid": 9,
                    "name": "出道偶像",
                    "image": "http://i1.hdslb.com/bfs/face/3f2d64f048b39fb6c26f3db39df47e6080ec0f9c.png",
                    "image_small": "http://i1.hdslb.com/bfs/face/90c35d41d8a19b19474d6bac672394c17b444ce8.png",
                    "level": "高级勋章",
                    "condition": "所有自制视频总播放数\u003e=50万"
                },
                "Official": {
                    "role": 0,
                    "title": "",
                    "desc": "",
                    "type": -1
                },
                "official_verify": {
                    "type": -1,
                    "desc": ""
                },
                "vip": {
                    "type": 1,
                    "status": 0,
                    "due_date": 1493827200000,
                    "vip_pay_type": 0,
                    "theme_type": 0,
                    "label": {
                        "path": "",
                        "text": "",
                        "label_theme": "",
                        "text_color": "",
                        "bg_style": 0,
                        "bg_color": "",
                        "border_color": "",
                        "use_img_label": true,
                        "img_label_uri_hans": "",
                        "img_label_uri_hant": "",
                        "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                        "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png"
                    },
                    "avatar_subscript": 0,
                    "nickname_color": "",
                    "role": 0,
                    "avatar_subscript_url": "",
                    "tv_vip_status": 0,
                    "tv_vip_pay_type": 0,
                    "vipType": 1,
                    "vipStatus": 0
                },
                "is_senior_member": 0
            },
            "space": {
                "s_img": "http://i2.hdslb.com/bfs/space/768cc4fd97618cf589d23c2711a1d1a729f42235.png",
                "l_img": "http://i2.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png"
            },
            "following": false,
            "archive_count": 379,
            "article_count": 0,
            "follower": 66709,
            "like_num": 945617
        },
        "Tags": [{
            "tag_id": 117552,
            "tag_name": "保加利亚妖王",
            "cover": "http://i0.hdslb.com/bfs/tag/6828dc0fe5037e1c483d55704f529135d961cb2b.jpg",
            "head_cover": "",
            "content": "　　保加利亚超级天王 Azis\r\n　　Azis生于1978年3月7日，1999年正式出道。他的音乐融合保加利亚名族曲风chalga和pop、rap等元素，不过他惊艳的易装秀与浮夸的角色诠释才是他最为出名的地方。",
            "short_content": "",
            "type": 3,
            "state": 0,
            "ctime": 1436866637,
            "count": {
                "view": 0,
                "use": 8974,
                "atten": 5583
            },
            "is_atten": 0,
            "likes": 1161,
            "hates": 0,
            "attribute": 1,
            "liked": 0,
            "hated": 0,
            "extra_attr": 0,
            "music_id": "",
            "tag_type": "old_channel",
            "is_activity": false,
            "color": "",
            "alpha": 0,
            "is_season": false,
            "subscribed_count": 5583,
            "archive_count": "-",
            "featured_count": 0,
            "jump_url": ""
        }, {
            "tag_id": 112503,
            "tag_name": "保加利亚",
            "cover": "",
            "head_cover": "",
            "content": "",
            "short_content": "",
            "type": 0,
            "state": 0,
            "ctime": 1436866637,
            "count": {
                "view": 0,
                "use": 5147,
                "atten": 162
            },
            "is_atten": 0,
            "likes": 645,
            "hates": 0,
            "attribute": 1,
            "liked": 0,
            "hated": 0,
            "extra_attr": 0,
            "music_id": "",
            "tag_type": "old_channel",
            "is_activity": false,
            "color": "",
            "alpha": 0,
            "is_season": false,
            "subscribed_count": 162,
            "archive_count": "-",
            "featured_count": 0,
            "jump_url": ""
        }, {
            "tag_id": 2958988,
            "tag_name": "Азис",
            "cover": "",
            "head_cover": "",
            "content": "",
            "short_content": "",
            "type": 1,
            "state": 0,
            "ctime": 1482071386,
            "count": {
                "view": 0,
                "use": 35,
                "atten": 59
            },
            "is_atten": 0,
            "likes": 485,
            "hates": 0,
            "attribute": 1,
            "liked": 0,
            "hated": 0,
            "extra_attr": 0,
            "music_id": "",
            "tag_type": "old_channel",
            "is_activity": false,
            "color": "",
            "alpha": 0,
            "is_season": false,
            "subscribed_count": 59,
            "archive_count": "-",
            "featured_count": 0,
            "jump_url": ""
        }, {
            "tag_id": 2622213,
            "tag_name": "azis",
            "cover": "",
            "head_cover": "",
            "content": "",
            "short_content": "",
            "type": 0,
            "state": 0,
            "ctime": 1473763704,
            "count": {
                "view": 0,
                "use": 268,
                "atten": 86
            },
            "is_atten": 0,
            "likes": 420,
            "hates": 0,
            "attribute": 1,
            "liked": 0,
            "hated": 0,
            "extra_attr": 0,
            "music_id": "",
            "tag_type": "old_channel",
            "is_activity": false,
            "color": "",
            "alpha": 0,
            "is_season": false,
            "subscribed_count": 86,
            "archive_count": "-",
            "featured_count": 0,
            "jump_url": ""
        }, {
            "tag_id": 2512079,
            "tag_name": "mv",
            "cover": "",
            "head_cover": "",
            "content": "",
            "short_content": "",
            "type": 0,
            "state": 0,
            "ctime": 1471434073,
            "count": {
                "view": 0,
                "use": 72327,
                "atten": 282
            },
            "is_atten": 0,
            "likes": 384,
            "hates": 0,
            "attribute": 1,
            "liked": 0,
            "hated": 0,
            "extra_attr": 0,
            "music_id": "",
            "tag_type": "old_channel",
            "is_activity": false,
            "color": "",
            "alpha": 0,
            "is_season": false,
            "subscribed_count": 282,
            "archive_count": "-",
            "featured_count": 0,
            "jump_url": ""
        }],
        "Reply": {
            "page": {
                "acount": 175452,
                "count": 147129,
                "num": 1,
                "size": 3
            },
            "replies": [{
                "rpid": 1057984105,
                "oid": 170001,
                "type": 1,
                "mid": 241215549,
                "root": 0,
                "parent": 0,
                "dialog": 0,
                "count": 24,
                "rcount": 21,
                "floor": 62770,
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1536388260,
                "like": 4564,
                "action": 0,
                "content": {
                    "message": "这首歌的mv讲的是在未来的2050年，世界水资源缺乏，洗个澡都要缴纳大量的金钱并且还有预约，但有几个男人有幸掌握了部分水资源，为了节约水资源，他们洗澡的时候都在一起洗，哪怕这会让自己难堪，于是其中的妖王突然灵光一现创造出了这首《hop》来警示后人。",
                    "plat": 0,
                    "device": ""
                },
                "replies": null,
                "assist": 0,
                "show_follow": false
            }, {
                "rpid": 2509627306,
                "oid": 170001,
                "type": 1,
                "mid": 7827964,
                "root": 0,
                "parent": 0,
                "dialog": 0,
                "count": 101,
                "rcount": 72,
                "floor": 78866,
                "state": 0,
                "fansgrade": 0,
                "attr": 1024,
                "ctime": 1583941947,
                "like": 3215,
                "action": 0,
                "content": {
                    "message": "刻在dna里的av号",
                    "plat": 0,
                    "device": ""
                },
                "replies": null,
                "assist": 0,
                "show_follow": false
            }, {
                "rpid": 29939707,
                "oid": 170001,
                "type": 1,
                "mid": 2923193,
                "root": 0,
                "parent": 0,
                "dialog": 0,
                "count": 33,
                "rcount": 27,
                "floor": 3125,
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1430309717,
                "like": 5025,
                "action": 0,
                "content": {
                    "message": "感觉好棒……女人都演绎不出来的那种妩媚……azis这种不分性别的妩媚真称得上艺术了虽然一般人接受起来很难",
                    "plat": 0,
                    "device": ""
                },
                "replies": null,
                "assist": 0,
                "show_follow": false
            }]
        },
        "Related": [{
            "aid": 456093155,
            "videos": 1,
            "tid": 59,
            "tname": "演奏",
            "copyright": 1,
            "pic": "http://i2.hdslb.com/bfs/archive/9c160af2907ba2c161d565a99e61032ba72868ff.png",
            "title": "太羞耻了！敢于琴行挑战演奏《Hop》！",
            "pubdate": 1592883074,
            "ctime": 1592883074,
            "desc": "太羞耻了！敢于琴行挑战演奏《Hop》！     Hop改编版",
            "state": 0,
            "duration": 168,
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
                "no_background": 0,
                "arc_pay": 0,
                "pay_free_watch": 0
            },
            "owner": {
                "mid": 13677047,
                "name": "Piano莱特",
                "face": "http://i2.hdslb.com/bfs/face/edf6a0ae7dfe9adb5e8d5e813a69455554931c73.jpg"
            },
            "stat": {
                "aid": 456093155,
                "view": 1242855,
                "danmaku": 3571,
                "reply": 1760,
                "favorite": 13826,
                "coin": 7105,
                "share": 4675,
                "now_rank": 0,
                "his_rank": 0,
                "like": 69598,
                "dislike": 0
            },
            "dynamic": "",
            "cid": 204234033,
            "dimension": {
                "width": 3840,
                "height": 2160,
                "rotate": 0
            },
            "short_link": "https://b23.tv/BV1r5411W71r",
            "short_link_v2": "https://b23.tv/BV1r5411W71r",
            "bvid": "BV1r5411W71r",
            "season_type": 0,
            "is_ogv": false,
            "ogv_info": null,
            "rcmd_reason": ""
        }, {
            "aid": 631557307,
            "videos": 1,
            "tid": 193,
            "tname": "MV",
            "copyright": 2,
            "pic": "http://i2.hdslb.com/bfs/archive/eafb857ea914589e3830a218d3820e063fb1751c.jpg",
            "title": "Hop（高清无水印）",
            "pubdate": 1625921694,
            "ctime": 1625920960,
            "desc": "https://m.youtube.com/watch?v=P9sQZLtsfp8",
            "state": 0,
            "duration": 231,
            "rights": {
                "bp": 0,
                "elec": 0,
                "download": 0,
                "movie": 0,
                "pay": 0,
                "hd5": 0,
                "no_reprint": 0,
                "autoplay": 1,
                "ugc_pay": 0,
                "is_cooperation": 0,
                "ugc_pay_preview": 0,
                "no_background": 0,
                "arc_pay": 0,
                "pay_free_watch": 0
            },
            "owner": {
                "mid": 404880090,
                "name": "忆-画",
                "face": "http://i0.hdslb.com/bfs/face/member/noface.jpg"
            },
            "stat": {
                "aid": 631557307,
                "view": 505762,
                "danmaku": 4709,
                "reply": 569,
                "favorite": 6046,
                "coin": 1214,
                "share": 13741,
                "now_rank": 0,
                "his_rank": 0,
                "like": 11085,
                "dislike": 0
            },
            "dynamic": "",
            "cid": 367618065,
            "dimension": {
                "width": 1280,
                "height": 576,
                "rotate": 0
            },
            "short_link": "https://b23.tv/BV1Qb4y1r7ig",
            "short_link_v2": "https://b23.tv/BV1Qb4y1r7ig",
            "up_from_v2": 35,
            "bvid": "BV1Qb4y1r7ig",
            "season_type": 0,
            "is_ogv": false,
            "ogv_info": null,
            "rcmd_reason": ""
        }, {
            "aid": 56261839,
            "videos": 1,
            "tid": 21,
            "tname": "日常",
            "copyright": 1,
            "pic": "http://i0.hdslb.com/bfs/archive/2ecd40c61c6031fda0ece8c098724b9bc88ff89d.jpg",
            "title": "当你开启了青少年模式并搜索av170001会发生什么事",
            "pubdate": 1561080121,
            "ctime": 1561080121,
            "desc": "我莫得简介",
            "state": 0,
            "duration": 80,
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
                "no_background": 0,
                "arc_pay": 0,
                "pay_free_watch": 0
            },
            "owner": {
                "mid": 305523767,
                "name": "空城玄亦",
                "face": "http://i2.hdslb.com/bfs/face/a5838c33eeb1b19f04a2967d26bb8b323834ca5e.jpg"
            },
            "stat": {
                "aid": 56261839,
                "view": 543710,
                "danmaku": 727,
                "reply": 590,
                "favorite": 737,
                "coin": 386,
                "share": 76,
                "now_rank": 0,
                "his_rank": 0,
                "like": 6463,
                "dislike": 0
            },
            "dynamic": "#AV170001##妖王##HOP#",
            "cid": 98331390,
            "dimension": {
                "width": 1920,
                "height": 960,
                "rotate": 0
            },
            "short_link": "https://b23.tv/BV15441137Xd",
            "short_link_v2": "https://b23.tv/BV15441137Xd",
            "up_from_v2": 8,
            "pub_location": "浙江",
            "bvid": "BV15441137Xd",
            "season_type": 0,
            "is_ogv": false,
            "ogv_info": null,
            "rcmd_reason": ""
        }, {
            "aid": 5164105,
            "videos": 1,
            "tid": 193,
            "tname": "MV",
            "copyright": 2,
            "pic": "http://i2.hdslb.com/bfs/archive/149aed759c1231948c468c412f67c634e05a4974.jpg",
            "title": "保加利亚妖王AZIS单曲HABIBI新版MV",
            "pubdate": 1467381090,
            "ctime": 1497380583,
            "desc": "www.youtube.com/watch?v=ZmyVZRLOw3M AZIS - HABIBI (latino version) _ Азис - Хабиби (латино версия)",
            "state": 0,
            "duration": 266,
            "rights": {
                "bp": 0,
                "elec": 0,
                "download": 0,
                "movie": 0,
                "pay": 0,
                "hd5": 0,
                "no_reprint": 0,
                "autoplay": 1,
                "ugc_pay": 0,
                "is_cooperation": 0,
                "ugc_pay_preview": 0,
                "no_background": 0,
                "arc_pay": 0,
                "pay_free_watch": 0
            },
            "owner": {
                "mid": 122541,
                "name": "冰封.虾子",
                "face": "http://i0.hdslb.com/bfs/face/40c46ee74dd6ea33d46c38cd6083e6a1286aa482.gif"
            },
            "stat": {
                "aid": 5164105,
                "view": 625378,
                "danmaku": 2132,
                "reply": 801,
                "favorite": 7346,
                "coin": 1625,
                "share": 3287,
                "now_rank": 0,
                "his_rank": 0,
                "like": 9744,
                "dislike": 0
            },
            "dynamic": "",
            "cid": 8392273,
            "dimension": {
                "width": 640,
                "height": 360,
                "rotate": 0
            },
            "short_link": "https://b23.tv/BV1zs411v7K5",
            "short_link_v2": "https://b23.tv/BV1zs411v7K5",
            "bvid": "BV1zs411v7K5",
            "season_type": 0,
            "is_ogv": false,
            "ogv_info": null,
            "rcmd_reason": ""
        }, {
            "aid": 4033926,
            "videos": 1,
            "tid": 22,
            "tname": "鬼畜调教",
            "copyright": 1,
            "pic": "http://i0.hdslb.com/bfs/archive/f004d589847c604f5e3800ce99bced09ec7e20af.jpg",
            "title": "【电音单曲】我是papi酱",
            "pubdate": 1457267935,
            "ctime": 1497423784,
            "desc": "自制 这个集鬼畜与才华于一身的女人，成功地引起了我的注意。",
            "state": 0,
            "duration": 156,
            "rights": {
                "bp": 0,
                "elec": 0,
                "download": 0,
                "movie": 0,
                "pay": 0,
                "hd5": 0,
                "no_reprint": 0,
                "autoplay": 1,
                "ugc_pay": 0,
                "is_cooperation": 0,
                "ugc_pay_preview": 0,
                "no_background": 0,
                "arc_pay": 0,
                "pay_free_watch": 0
            },
            "owner": {
                "mid": 375375,
                "name": "伊丽莎白鼠",
                "face": "http://i0.hdslb.com/bfs/face/6c36ec15f6d7ddd9bdb558511521bd0256779e1c.jpg"
            },
            "stat": {
                "aid": 4033926,
                "view": 43585745,
                "danmaku": 468701,
                "reply": 91980,
                "favorite": 681330,
                "coin": 714334,
                "share": 194397,
                "now_rank": 0,
                "his_rank": 1,
                "like": 873198,
                "dislike": 0
            },
            "dynamic": "",
            "cid": 6505773,
            "dimension": {
                "width": 640,
                "height": 360,
                "rotate": 0
            },
            "short_link": "https://b23.tv/BV1hs411Q7zf",
            "short_link_v2": "https://b23.tv/BV1hs411Q7zf",
            "bvid": "BV1hs411Q7zf",
            "season_type": 0,
            "is_ogv": false,
            "ogv_info": null,
            "rcmd_reason": ""
        }, {
            "aid": 543744396,
            "videos": 1,
            "tid": 138,
            "tname": "搞笑",
            "copyright": 2,
            "pic": "http://i0.hdslb.com/bfs/archive/36f77d7478c18c95f50b9d9c22ba86fb58d0b760.jpg",
            "title": "当van听到了hop会发生什么？",
            "pubdate": 1610800809,
            "ctime": 1610800809,
            "desc": "vanbilibili直播间\nvan一边看mv一边把歌听完的……说这mv太奇怪猎奇了",
            "state": 0,
            "duration": 231,
            "rights": {
                "bp": 0,
                "elec": 0,
                "download": 0,
                "movie": 0,
                "pay": 0,
                "hd5": 0,
                "no_reprint": 0,
                "autoplay": 1,
                "ugc_pay": 0,
                "is_cooperation": 0,
                "ugc_pay_preview": 0,
                "no_background": 0,
                "arc_pay": 0,
                "pay_free_watch": 0
            },
            "owner": {
                "mid": 390902077,
                "name": "花街----",
                "face": "http://i1.hdslb.com/bfs/face/54221846311730ce79129ba3c1f3580c7f072182.jpg"
            },
            "stat": {
                "aid": 543744396,
                "view": 453057,
                "danmaku": 315,
                "reply": 460,
                "favorite": 3980,
                "coin": 278,
                "share": 3225,
                "now_rank": 0,
                "his_rank": 0,
                "like": 13169,
                "dislike": 0
            },
            "dynamic": "",
            "cid": 283284930,
            "dimension": {
                "width": 720,
                "height": 1520,
                "rotate": 0
            },
            "short_link": "https://b23.tv/BV1wv4y1f7wX",
            "short_link_v2": "https://b23.tv/BV1wv4y1f7wX",
            "bvid": "BV1wv4y1f7wX",
            "season_type": 0,
            "is_ogv": false,
            "ogv_info": null,
            "rcmd_reason": ""
        }, {
            "aid": 3904091,
            "videos": 1,
            "tid": 238,
            "tname": "运动综合",
            "copyright": 2,
            "pic": "http://i1.hdslb.com/bfs/archive/2cccf431ac5677c38535ac421daa5818443e258b.jpg",
            "title": "冬钓250磅重的巨型鲶鱼",
            "pubdate": 1455981826,
            "ctime": 1497380578,
            "desc": "youtube GOLIATH CATFISH 250 POUND 8 FEET IN WINTER DRIFT AND LIVE BAIT",
            "state": 0,
            "duration": 406,
            "rights": {
                "bp": 0,
                "elec": 0,
                "download": 0,
                "movie": 0,
                "pay": 0,
                "hd5": 0,
                "no_reprint": 0,
                "autoplay": 1,
                "ugc_pay": 0,
                "is_cooperation": 0,
                "ugc_pay_preview": 0,
                "no_background": 0,
                "arc_pay": 0,
                "pay_free_watch": 0
            },
            "owner": {
                "mid": 122541,
                "name": "冰封.虾子",
                "face": "http://i0.hdslb.com/bfs/face/40c46ee74dd6ea33d46c38cd6083e6a1286aa482.gif"
            },
            "stat": {
                "aid": 3904091,
                "view": 1593935,
                "danmaku": 2661,
                "reply": 1754,
                "favorite": 3056,
                "coin": 196,
                "share": 2048,
                "now_rank": 0,
                "his_rank": 0,
                "like": 14999,
                "dislike": 0
            },
            "dynamic": "",
            "cid": 6280020,
            "dimension": {
                "width": 640,
                "height": 360,
                "rotate": 0
            },
            "short_link": "https://b23.tv/BV1es411972g",
            "short_link_v2": "https://b23.tv/BV1es411972g",
            "bvid": "BV1es411972g",
            "season_type": 0,
            "is_ogv": false,
            "ogv_info": null,
            "rcmd_reason": ""
        }, {
            "aid": 370010949,
            "videos": 2,
            "tid": 138,
            "tname": "搞笑",
            "copyright": 2,
            "pic": "http://i1.hdslb.com/bfs/archive/8339e4a40c1a10cfb0e0abe0bc4ef6ecbd61a45f.jpg",
            "title": "黑人抬棺原版视频",
            "pubdate": 1585735296,
            "ctime": 1585735296,
            "desc": "up主关于本条视频收入的说明戳：BV1YK41157dT\n转载自https://www.youtube.com/watch?v=b3Y_9bTRGVg\n其他：抖棺（肩）舞：BV1kt4y127Ee\n苏卡棺裂：BV1GZ4y1x7mZ\n我是比划，感谢您的观看感谢点赞感谢一切！改天一定陪老铁好好比划比划！（咕）\n（建议大家戳一下宝藏2p）",
            "state": 0,
            "duration": 200,
            "rights": {
                "bp": 0,
                "elec": 0,
                "download": 0,
                "movie": 0,
                "pay": 0,
                "hd5": 0,
                "no_reprint": 0,
                "autoplay": 1,
                "ugc_pay": 0,
                "is_cooperation": 0,
                "ugc_pay_preview": 0,
                "no_background": 0,
                "arc_pay": 0,
                "pay_free_watch": 0
            },
            "owner": {
                "mid": 479724334,
                "name": "比划大魔王",
                "face": "http://i1.hdslb.com/bfs/face/910e60494f7deff1b3bdcf1eaaead6779d77bac5.jpg"
            },
            "stat": {
                "aid": 370010949,
                "view": 60657779,
                "danmaku": 448436,
                "reply": 47741,
                "favorite": 982035,
                "coin": 420669,
                "share": 761499,
                "now_rank": 0,
                "his_rank": 2,
                "like": 1760196,
                "dislike": 0
            },
            "dynamic": "",
            "cid": 172423516,
            "dimension": {
                "width": 1280,
                "height": 720,
                "rotate": 0
            },
            "short_link": "https://b23.tv/BV1NZ4y1j7nw",
            "short_link_v2": "https://b23.tv/BV1NZ4y1j7nw",
            "bvid": "BV1NZ4y1j7nw",
            "season_type": 0,
            "is_ogv": false,
            "ogv_info": null,
            "rcmd_reason": ""
        }, {
            "aid": 34812433,
            "videos": 1,
            "tid": 130,
            "tname": "音乐综合",
            "copyright": 2,
            "pic": "http://i2.hdslb.com/bfs/archive/149aed759c1231948c468c412f67c634e05a4974.jpg",
            "title": "怎么办，妖王开始男人了",
            "pubdate": 1540723612,
            "ctime": 1540723612,
            "desc": "QQ音乐",
            "state": 0,
            "duration": 303,
            "rights": {
                "bp": 0,
                "elec": 0,
                "download": 0,
                "movie": 0,
                "pay": 0,
                "hd5": 0,
                "no_reprint": 0,
                "autoplay": 1,
                "ugc_pay": 0,
                "is_cooperation": 0,
                "ugc_pay_preview": 0,
                "no_background": 0,
                "arc_pay": 0,
                "pay_free_watch": 0
            },
            "owner": {
                "mid": 229574099,
                "name": "清尘埃落定",
                "face": "http://i2.hdslb.com/bfs/face/4b34377580cf12eabe6bc568967dfe22f981c042.jpg"
            },
            "stat": {
                "aid": 34812433,
                "view": 989992,
                "danmaku": 482,
                "reply": 477,
                "favorite": 4293,
                "coin": 251,
                "share": 688,
                "now_rank": 0,
                "his_rank": 0,
                "like": 21740,
                "dislike": 0
            },
            "dynamic": "#音乐选集##保加利亚#",
            "cid": 60984624,
            "dimension": {
                "width": 640,
                "height": 360,
                "rotate": 0
            },
            "short_link": "https://b23.tv/BV1Qb411N7Ez",
            "short_link_v2": "https://b23.tv/BV1Qb411N7Ez",
            "bvid": "BV1Qb411N7Ez",
            "season_type": 0,
            "is_ogv": false,
            "ogv_info": null,
            "rcmd_reason": ""
        }, {
            "aid": 54864793,
            "videos": 2,
            "tid": 138,
            "tname": "搞笑",
            "copyright": 1,
            "pic": "http://i0.hdslb.com/bfs/archive/c3231251ade65cdb35f40f96b9651f13d4355fc4.jpg",
            "title": "全B站模仿保加利亚妖王最像的人",
            "pubdate": 1559913751,
            "ctime": 1559913020,
            "desc": "求点赞！ 求关注！ 求投币！ \n模型：平安夜的噩梦\u0026@i-fox\n动作自制（做的太渣了，想要的就拿走吧）\n                链接：https://pan.baidu.com/s/1kZZHiAY4_pIwds1F_CCj1A \n                提取码：g1yp",
            "state": 0,
            "duration": 218,
            "rights": {
                "bp": 0,
                "elec": 0,
                "download": 0,
                "movie": 0,
                "pay": 0,
                "hd5": 0,
                "no_reprint": 1,
                "autoplay": 1,
                "ugc_pay": 0,
                "is_cooperation": 0,
                "ugc_pay_preview": 0,
                "no_background": 0,
                "arc_pay": 0,
                "pay_free_watch": 0
            },
            "owner": {
                "mid": 93755540,
                "name": "空梦゛",
                "face": "http://i2.hdslb.com/bfs/face/00ac5eec49917b23353a015a3af5af109f82721f.jpg"
            },
            "stat": {
                "aid": 54864793,
                "view": 887553,
                "danmaku": 1862,
                "reply": 574,
                "favorite": 2360,
                "coin": 641,
                "share": 395,
                "now_rank": 0,
                "his_rank": 0,
                "like": 14529,
                "dislike": 0
            },
            "dynamic": "#搞笑视频##恶搞##保加利亚妖王#",
            "cid": 95953526,
            "dimension": {
                "width": 1920,
                "height": 1080,
                "rotate": 0
            },
            "short_link": "https://b23.tv/BV1o4411K7Sp",
            "short_link_v2": "https://b23.tv/BV1o4411K7Sp",
            "bvid": "BV1o4411K7Sp",
            "season_type": 0,
            "is_ogv": false,
            "ogv_info": null,
            "rcmd_reason": ""
        }, {
            "aid": 88606863,
            "videos": 1,
            "tid": 138,
            "tname": "搞笑",
            "copyright": 1,
            "pic": "http://i2.hdslb.com/bfs/archive/f6d607625938ba5bdada81f7ae4c59e43852d57c.jpg",
            "title": "妖王被黑得最惨的一次！用营销号的方式打开av170001",
            "pubdate": 1581565668,
            "ctime": 1581565669,
            "desc": "素材:av170001\n点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞",
            "state": 0,
            "duration": 60,
            "mission_id": 12642,
            "rights": {
                "bp": 0,
                "elec": 0,
                "download": 0,
                "movie": 0,
                "pay": 0,
                "hd5": 0,
                "no_reprint": 1,
                "autoplay": 1,
                "ugc_pay": 0,
                "is_cooperation": 0,
                "ugc_pay_preview": 0,
                "no_background": 0,
                "arc_pay": 0,
                "pay_free_watch": 0
            },
            "owner": {
                "mid": 322628997,
                "name": "湖畔者_Lynn",
                "face": "http://i0.hdslb.com/bfs/face/a43fffdd14e81e992e570fce859351e7bace0ee8.jpg"
            },
            "stat": {
                "aid": 88606863,
                "view": 826213,
                "danmaku": 3046,
                "reply": 5058,
                "favorite": 6102,
                "coin": 3272,
                "share": 3740,
                "now_rank": 0,
                "his_rank": 0,
                "like": 83628,
                "dislike": 0
            },
            "dynamic": "#bilibili新星计划##HOP##AV170001#",
            "cid": 151362415,
            "dimension": {
                "width": 1920,
                "height": 1072,
                "rotate": 0
            },
            "short_link": "https://b23.tv/BV1E741137Pb",
            "short_link_v2": "https://b23.tv/BV1E741137Pb",
            "bvid": "BV1E741137Pb",
            "season_type": 0,
            "is_ogv": false,
            "ogv_info": null,
            "rcmd_reason": ""
        }, {
            "aid": 91287627,
            "videos": 1,
            "tid": 22,
            "tname": "鬼畜调教",
            "copyright": 1,
            "pic": "http://i2.hdslb.com/bfs/archive/07e972b7324b68facb2e3139821b477ab9f0e792.jpg",
            "title": "我不信这么高♂雅的作品破不了100播放量？！",
            "pubdate": 1582518913,
            "ctime": 1582518913,
            "desc": "爱咋咋地！！！！！！！不限流就烧高香了！！！！！！",
            "state": 0,
            "duration": 107,
            "mission_id": 12868,
            "rights": {
                "bp": 0,
                "elec": 0,
                "download": 0,
                "movie": 0,
                "pay": 0,
                "hd5": 0,
                "no_reprint": 1,
                "autoplay": 1,
                "ugc_pay": 0,
                "is_cooperation": 0,
                "ugc_pay_preview": 0,
                "no_background": 0,
                "arc_pay": 0,
                "pay_free_watch": 0
            },
            "owner": {
                "mid": 4915107,
                "name": "初音ミつ",
                "face": "http://i0.hdslb.com/bfs/face/14887f1d272b1417484a109509c25835e6b0c0d5.jpg"
            },
            "stat": {
                "aid": 91287627,
                "view": 5165377,
                "danmaku": 9139,
                "reply": 11905,
                "favorite": 81652,
                "coin": 69402,
                "share": 8244,
                "now_rank": 0,
                "his_rank": 38,
                "like": 392873,
                "dislike": 0
            },
            "dynamic": "#鬼畜调教##VAN##罗西尼#",
            "cid": 155876336,
            "dimension": {
                "width": 720,
                "height": 576,
                "rotate": 0
            },
            "short_link": "https://b23.tv/BV127411M7HC",
            "short_link_v2": "https://b23.tv/BV127411M7HC",
            "bvid": "BV127411M7HC",
            "season_type": 0,
            "is_ogv": false,
            "ogv_info": null,
            "rcmd_reason": ""
        }, {
            "aid": 626849708,
            "videos": 1,
            "tid": 26,
            "tname": "音MAD",
            "copyright": 1,
            "pic": "http://i2.hdslb.com/bfs/archive/701dd594c9060c7f6aaffc634ba8694288f02e45.jpg",
            "title": "调音师的准确率已达170001％",
            "pubdate": 1598149834,
            "ctime": 1598102271,
            "desc": "自制【猫鼠电音】Hop\n原曲：Hop-Azis(其音乐融合保加利亚名族曲风chalga和pop、rap等元素)\n感觉以前做音mad只为了还原原曲 太呆板无趣\n于是就做了这样一次尝试以求改观\n使用此标题已经过 @球球特别大 允许\n\n#猫鼠电音#5",
            "state": 0,
            "duration": 91,
            "mission_id": 14023,
            "rights": {
                "bp": 0,
                "elec": 0,
                "download": 0,
                "movie": 0,
                "pay": 0,
                "hd5": 0,
                "no_reprint": 1,
                "autoplay": 1,
                "ugc_pay": 0,
                "is_cooperation": 0,
                "ugc_pay_preview": 0,
                "no_background": 0,
                "arc_pay": 0,
                "pay_free_watch": 0
            },
            "owner": {
                "mid": 34611143,
                "name": "致明笑笑",
                "face": "http://i2.hdslb.com/bfs/face/b8fd466c7a64a2f2baf0f38f1ff5a1ab8fc1e1fb.jpg"
            },
            "stat": {
                "aid": 626849708,
                "view": 143892,
                "danmaku": 370,
                "reply": 392,
                "favorite": 2879,
                "coin": 1613,
                "share": 386,
                "now_rank": 0,
                "his_rank": 0,
                "like": 11914,
                "dislike": 0
            },
            "dynamic": "#鬼畜大赏2020-音MAD##猫和老鼠##保加利亚妖王#",
            "cid": 227521154,
            "dimension": {
                "width": 1280,
                "height": 720,
                "rotate": 0
            },
            "short_link": "https://b23.tv/BV1Xt4y1U79t",
            "short_link_v2": "https://b23.tv/BV1Xt4y1U79t",
            "bvid": "BV1Xt4y1U79t",
            "season_type": 0,
            "is_ogv": false,
            "ogv_info": null,
            "rcmd_reason": ""
        }, {
            "aid": 590060816,
            "videos": 1,
            "tid": 22,
            "tname": "鬼畜调教",
            "copyright": 1,
            "pic": "http://i1.hdslb.com/bfs/archive/509fda71291eda10687fa839a5f89c6054bed167.png",
            "title": "保 加 利 亚 瓜 王",
            "pubdate": 1629954067,
            "ctime": 1629954067,
            "desc": "哥儿俩生妖王",
            "state": 0,
            "duration": 79,
            "mission_id": 105577,
            "rights": {
                "bp": 0,
                "elec": 0,
                "download": 0,
                "movie": 0,
                "pay": 0,
                "hd5": 0,
                "no_reprint": 1,
                "autoplay": 1,
                "ugc_pay": 0,
                "is_cooperation": 0,
                "ugc_pay_preview": 0,
                "no_background": 0,
                "arc_pay": 0,
                "pay_free_watch": 0
            },
            "owner": {
                "mid": 64827416,
                "name": "城之悠二",
                "face": "http://i2.hdslb.com/bfs/face/032a0ec32dcd880eeb0850e7a03d0990445c9697.jpg"
            },
            "stat": {
                "aid": 590060816,
                "view": 851916,
                "danmaku": 1485,
                "reply": 1278,
                "favorite": 17139,
                "coin": 13256,
                "share": 7825,
                "now_rank": 0,
                "his_rank": 0,
                "like": 67028,
                "dislike": 0
            },
            "dynamic": "",
            "cid": 396779777,
            "dimension": {
                "width": 1920,
                "height": 1080,
                "rotate": 0
            },
            "short_link": "https://b23.tv/BV1eq4y1D7H8",
            "short_link_v2": "https://b23.tv/BV1eq4y1D7H8",
            "up_from_v2": 2,
            "first_frame": "http://i2.hdslb.com/bfs/storyff/n210826139etterlwdx0a2fsl8bfjlk7_firsti.jpg",
            "bvid": "BV1eq4y1D7H8",
            "season_type": 0,
            "is_ogv": false,
            "ogv_info": null,
            "rcmd_reason": ""
        }, {
            "aid": 257143502,
            "videos": 1,
            "tid": 21,
            "tname": "日常",
            "copyright": 1,
            "pic": "http://i0.hdslb.com/bfs/archive/105015bbeab86dd32e8341ff2a53276f1ab5d7a2.jpg",
            "title": "在b站最没存在感的国家是谁？各国相关最高播放的视频是什么？",
            "pubdate": 1654327813,
            "ctime": 1654327813,
            "desc": "本来视频是按播放统计，但撒贝宁/马里奥/黑山大叔 比 贝宁/马里/黑山 还火2333333，所以以标签为准。\n估计视频播放过不了1万5  ；）",
            "state": 0,
            "duration": 661,
            "rights": {
                "bp": 0,
                "elec": 0,
                "download": 0,
                "movie": 0,
                "pay": 0,
                "hd5": 0,
                "no_reprint": 1,
                "autoplay": 1,
                "ugc_pay": 0,
                "is_cooperation": 0,
                "ugc_pay_preview": 0,
                "no_background": 0,
                "arc_pay": 0,
                "pay_free_watch": 0
            },
            "owner": {
                "mid": 544503411,
                "name": "沙琪玛er",
                "face": "http://i0.hdslb.com/bfs/face/8f68cedd741ea2ba5702081ff4f440b1d583fbed.jpg"
            },
            "stat": {
                "aid": 257143502,
                "view": 152085,
                "danmaku": 1333,
                "reply": 553,
                "favorite": 1951,
                "coin": 723,
                "share": 106,
                "now_rank": 0,
                "his_rank": 0,
                "like": 9281,
                "dislike": 0
            },
            "dynamic": "估计播放过不了1万5  ；）",
            "cid": 737740549,
            "dimension": {
                "width": 1920,
                "height": 1080,
                "rotate": 0
            },
            "season_id": 462986,
            "short_link": "https://b23.tv/BV18Y411g7co",
            "short_link_v2": "https://b23.tv/BV18Y411g7co",
            "first_frame": "http://i1.hdslb.com/bfs/storyff/n220604a23d6t17is08tz01wjsgiyhzg_firsti.jpg",
            "bvid": "BV18Y411g7co",
            "season_type": 1,
            "is_ogv": false,
            "ogv_info": null,
            "rcmd_reason": ""
        }, {
            "aid": 327580733,
            "videos": 1,
            "tid": 17,
            "tname": "单机游戏",
            "copyright": 1,
            "pic": "http://i1.hdslb.com/bfs/archive/014591d2f7f129c660bca88e6c5d38638a2a1ea7.jpg",
            "title": "当我的世界种子输入AV170001会怎么样？",
            "pubdate": 1585207605,
            "ctime": 1585207605,
            "desc": "给三连啊！\n\n♂♂♂♂\n♂♂♂♂\n♂♂♂♂\n♂♂♂♂♂♂♂♂\n♂♂♂♂",
            "state": 0,
            "duration": 102,
            "rights": {
                "bp": 0,
                "elec": 0,
                "download": 0,
                "movie": 0,
                "pay": 0,
                "hd5": 0,
                "no_reprint": 1,
                "autoplay": 1,
                "ugc_pay": 0,
                "is_cooperation": 0,
                "ugc_pay_preview": 0,
                "no_background": 0,
                "arc_pay": 0,
                "pay_free_watch": 0
            },
            "owner": {
                "mid": 416313100,
                "name": "木大木大-欧拉欧拉",
                "face": "http://i1.hdslb.com/bfs/face/d70d22d6edc68bfc5d9c6a644de4513a8751eace.jpg"
            },
            "stat": {
                "aid": 327580733,
                "view": 153848,
                "danmaku": 328,
                "reply": 423,
                "favorite": 743,
                "coin": 55,
                "share": 30,
                "now_rank": 0,
                "his_rank": 0,
                "like": 10126,
                "dislike": 0
            },
            "dynamic": "#AV170001##我的世界##HOP#",
            "cid": 169645787,
            "dimension": {
                "width": 640,
                "height": 480,
                "rotate": 0
            },
            "short_link": "https://b23.tv/BV1RA41187Tq",
            "short_link_v2": "https://b23.tv/BV1RA41187Tq",
            "bvid": "BV1RA41187Tq",
            "season_type": 0,
            "is_ogv": false,
            "ogv_info": null,
            "rcmd_reason": ""
        }, {
            "aid": 243979418,
            "videos": 1,
            "tid": 17,
            "tname": "单机游戏",
            "copyright": 1,
            "pic": "http://i1.hdslb.com/bfs/archive/4be3a91598103a9d599d62ac77659b75c1d2c54b.jpg",
            "title": "[缝合怪]HOP？哈哈哈奇怪的缝合生物增加了！(二)",
            "pubdate": 1594986846,
            "ctime": 1594986846,
            "desc": "奇怪的生物...增加了？？！\n这期连更几个创意搞笑小视频，连载上个视频的creeper用到的奥利奥的梗\n反正开心就对啦，之后明天再更一期这类似的小视频，然后这周视频时长就算达标咯\n狐圈：201928737\n“快来养老qwq”",
            "state": 0,
            "duration": 23,
            "mission_id": 13752,
            "rights": {
                "bp": 0,
                "elec": 0,
                "download": 0,
                "movie": 0,
                "pay": 0,
                "hd5": 0,
                "no_reprint": 1,
                "autoplay": 1,
                "ugc_pay": 0,
                "is_cooperation": 0,
                "ugc_pay_preview": 0,
                "no_background": 0,
                "arc_pay": 0,
                "pay_free_watch": 0
            },
            "owner": {
                "mid": 289475254,
                "name": "碧月狐",
                "face": "http://i1.hdslb.com/bfs/face/4492716a1211a20b63015d84a9860b3424e9eca7.jpg"
            },
            "stat": {
                "aid": 243979418,
                "view": 860863,
                "danmaku": 508,
                "reply": 300,
                "favorite": 9400,
                "coin": 1806,
                "share": 2478,
                "now_rank": 0,
                "his_rank": 0,
                "like": 41387,
                "dislike": 0
            },
            "dynamic": "#沙雕日常##Minecraft##我的世界#",
            "cid": 213532895,
            "dimension": {
                "width": 1280,
                "height": 720,
                "rotate": 0
            },
            "season_id": 11746,
            "short_link": "https://b23.tv/BV1xv411q7fJ",
            "short_link_v2": "https://b23.tv/BV1xv411q7fJ",
            "bvid": "BV1xv411q7fJ",
            "season_type": 0,
            "is_ogv": false,
            "ogv_info": null,
            "rcmd_reason": ""
        }, {
            "aid": 74910522,
            "videos": 1,
            "tid": 21,
            "tname": "日常",
            "copyright": 2,
            "pic": "http://i1.hdslb.com/bfs/archive/89dcc6be0083463aab31b22d31032270e363c019.jpg",
            "title": "保加利亚妖王用中文数数",
            "pubdate": 1573152882,
            "ctime": 1573152882,
            "desc": "https://www.youtube.com/watch?v=E68duawIQ7I\n一个意义不明的视频?",
            "state": 0,
            "duration": 10,
            "rights": {
                "bp": 0,
                "elec": 0,
                "download": 0,
                "movie": 0,
                "pay": 0,
                "hd5": 0,
                "no_reprint": 0,
                "autoplay": 1,
                "ugc_pay": 0,
                "is_cooperation": 0,
                "ugc_pay_preview": 0,
                "no_background": 0,
                "arc_pay": 0,
                "pay_free_watch": 0
            },
            "owner": {
                "mid": 122541,
                "name": "冰封.虾子",
                "face": "http://i0.hdslb.com/bfs/face/40c46ee74dd6ea33d46c38cd6083e6a1286aa482.gif"
            },
            "stat": {
                "aid": 74910522,
                "view": 87254,
                "danmaku": 20,
                "reply": 221,
                "favorite": 311,
                "coin": 54,
                "share": 90,
                "now_rank": 0,
                "his_rank": 0,
                "like": 2409,
                "dislike": 0
            },
            "dynamic": "迷之更新? #azis##保加利亚妖王##中文#",
            "cid": 128148307,
            "dimension": {
                "width": 608,
                "height": 1080,
                "rotate": 0
            },
            "short_link": "https://b23.tv/BV1jE411q77T",
            "short_link_v2": "https://b23.tv/BV1jE411q77T",
            "bvid": "BV1jE411q77T",
            "season_type": 0,
            "is_ogv": false,
            "ogv_info": null,
            "rcmd_reason": ""
        }, {
            "aid": 755494777,
            "videos": 2,
            "tid": 193,
            "tname": "MV",
            "copyright": 2,
            "pic": "http://i1.hdslb.com/bfs/archive/e3986406217f03ce31ca46852164c0279a406ecd.png",
            "title": "Rick Astley - Never Gonna Give You Up",
            "pubdate": 1606492404,
            "ctime": 1606492405,
            "desc": "ISRC CN-E20-20-453-08/V.J6   XVCD-20153\n出自于BV1nW4y1C7T5的P9",
            "state": 0,
            "duration": 427,
            "rights": {
                "bp": 0,
                "elec": 0,
                "download": 0,
                "movie": 0,
                "pay": 0,
                "hd5": 0,
                "no_reprint": 0,
                "autoplay": 1,
                "ugc_pay": 0,
                "is_cooperation": 0,
                "ugc_pay_preview": 0,
                "no_background": 0,
                "arc_pay": 0,
                "pay_free_watch": 0
            },
            "owner": {
                "mid": 313290585,
                "name": "作死君-",
                "face": "http://i0.hdslb.com/bfs/face/f917350f82a8cb1ba4c211a28d0e281cb3457206.jpg"
            },
            "stat": {
                "aid": 755494777,
                "view": 615246,
                "danmaku": 322,
                "reply": 500,
                "favorite": 6733,
                "coin": 677,
                "share": 489,
                "now_rank": 0,
                "his_rank": 0,
                "like": 30221,
                "dislike": 0
            },
            "dynamic": "",
            "cid": 425587380,
            "dimension": {
                "width": 960,
                "height": 720,
                "rotate": 0
            },
            "short_link": "https://b23.tv/BV1er4y1c7yZ",
            "short_link_v2": "https://b23.tv/BV1er4y1c7yZ",
            "up_from_v2": 2,
            "first_frame": "http://i2.hdslb.com/bfs/storyff/n2110151395pbo9g2l5ka1arlotq4yxi_firsti.jpg",
            "bvid": "BV1er4y1c7yZ",
            "season_type": 0,
            "is_ogv": false,
            "ogv_info": null,
            "rcmd_reason": ""
        }, {
            "aid": 7250151,
            "videos": 1,
            "tid": 130,
            "tname": "音乐综合",
            "copyright": 2,
            "pic": "http://i2.hdslb.com/bfs/archive/86af45f48db9f136411d11362870394787779d93.jpg",
            "title": "我要唤醒你们曾一度被170001所支配的恐惧",
            "pubdate": 1480076771,
            "ctime": 1497436787,
            "desc": "视频的一段脱节了 嗯 没了",
            "state": 0,
            "duration": 211,
            "rights": {
                "bp": 0,
                "elec": 0,
                "download": 0,
                "movie": 0,
                "pay": 0,
                "hd5": 0,
                "no_reprint": 0,
                "autoplay": 1,
                "ugc_pay": 0,
                "is_cooperation": 0,
                "ugc_pay_preview": 0,
                "no_background": 0,
                "arc_pay": 0,
                "pay_free_watch": 0
            },
            "owner": {
                "mid": 37333418,
                "name": "ZLYHX",
                "face": "http://i2.hdslb.com/bfs/face/69e68acd37fc2a5085f44fdf9982029ec85e8abe.jpg"
            },
            "stat": {
                "aid": 7250151,
                "view": 164919,
                "danmaku": 244,
                "reply": 82,
                "favorite": 552,
                "coin": 75,
                "share": 1745,
                "now_rank": 0,
                "his_rank": 0,
                "like": 1503,
                "dislike": 0
            },
            "dynamic": "",
            "cid": 11852714,
            "dimension": {
                "width": 640,
                "height": 360,
                "rotate": 0
            },
            "short_link": "https://b23.tv/BV1ws411s7Xz",
            "short_link_v2": "https://b23.tv/BV1ws411s7Xz",
            "bvid": "BV1ws411s7Xz",
            "season_type": 0,
            "is_ogv": false,
            "ogv_info": null,
            "rcmd_reason": ""
        }, {
            "aid": 668672894,
            "videos": 1,
            "tid": 138,
            "tname": "搞笑",
            "copyright": 1,
            "pic": "http://i2.hdslb.com/bfs/archive/78376377b1db7026dc63a6f6a8c41cba7992c5cc.jpg",
            "title": "有人跟我要网站，我把AV170001给了他",
            "pubdate": 1593448525,
            "ctime": 1593448525,
            "desc": "有人跟我要网站，我让他下了个B站，还让他去搜AV170001",
            "state": 0,
            "duration": 23,
            "rights": {
                "bp": 0,
                "elec": 0,
                "download": 0,
                "movie": 0,
                "pay": 0,
                "hd5": 0,
                "no_reprint": 1,
                "autoplay": 1,
                "ugc_pay": 0,
                "is_cooperation": 0,
                "ugc_pay_preview": 0,
                "no_background": 0,
                "arc_pay": 0,
                "pay_free_watch": 0
            },
            "owner": {
                "mid": 488613042,
                "name": "蒹葭3588",
                "face": "http://i0.hdslb.com/bfs/face/475c9add5bc619091d8979cfe7f4a7ab5af2c865.jpg"
            },
            "stat": {
                "aid": 668672894,
                "view": 35969,
                "danmaku": 4,
                "reply": 52,
                "favorite": 16,
                "coin": 2,
                "share": 3,
                "now_rank": 0,
                "his_rank": 0,
                "like": 294,
                "dislike": 0
            },
            "dynamic": "#哲学##AV##妖王#",
            "cid": 207235285,
            "dimension": {
                "width": 1080,
                "height": 1920,
                "rotate": 0
            },
            "short_link": "https://b23.tv/BV1Ka4y1e7k3",
            "short_link_v2": "https://b23.tv/BV1Ka4y1e7k3",
            "bvid": "BV1Ka4y1e7k3",
            "season_type": 0,
            "is_ogv": false,
            "ogv_info": null,
            "rcmd_reason": ""
        }, {
            "aid": 497521129,
            "videos": 1,
            "tid": 138,
            "tname": "搞笑",
            "copyright": 1,
            "pic": "http://i0.hdslb.com/bfs/archive/593078d6f292fc241f6b68437976b74b5d601365.jpg",
            "title": "当老师在钉钉放起hop♂",
            "pubdate": 1586053391,
            "ctime": 1586050521,
            "desc": "妖王的直播： hop已结束。在直播过程中，观看人的摄像头全程关闭（仅连麦功能时可选择开启），感谢观看直播。直播回放正在生成中，稍后在“群设置-直播回放”中查看, 查看详情",
            "state": 0,
            "duration": 166,
            "rights": {
                "bp": 0,
                "elec": 0,
                "download": 0,
                "movie": 0,
                "pay": 0,
                "hd5": 0,
                "no_reprint": 1,
                "autoplay": 1,
                "ugc_pay": 0,
                "is_cooperation": 0,
                "ugc_pay_preview": 0,
                "no_background": 0,
                "arc_pay": 0,
                "pay_free_watch": 0
            },
            "owner": {
                "mid": 353603699,
                "name": "群束竹令",
                "face": "http://i2.hdslb.com/bfs/face/34b63faea602e0cd212f874de9db9ad4e01df9dc.jpg"
            },
            "stat": {
                "aid": 497521129,
                "view": 281733,
                "danmaku": 1263,
                "reply": 305,
                "favorite": 1684,
                "coin": 165,
                "share": 617,
                "now_rank": 0,
                "his_rank": 0,
                "like": 12930,
                "dislike": 0
            },
            "dynamic": "#HOP##钉钉#",
            "cid": 174065931,
            "dimension": {
                "width": 1536,
                "height": 720,
                "rotate": 0
            },
            "short_link": "https://b23.tv/BV1rK41177Qd",
            "short_link_v2": "https://b23.tv/BV1rK41177Qd",
            "bvid": "BV1rK41177Qd",
            "season_type": 0,
            "is_ogv": false,
            "ogv_info": null,
            "rcmd_reason": ""
        }, {
            "aid": 200010082,
            "videos": 1,
            "tid": 138,
            "tname": "搞笑",
            "copyright": 1,
            "pic": "http://i1.hdslb.com/bfs/archive/588c51ca3f8f309abeab0e5aaa4ab60dcb3e15a6.jpg",
            "title": "还记得AV17001的内容吗？",
            "pubdate": 1585492555,
            "ctime": 1585492555,
            "desc": "-",
            "state": 0,
            "duration": 428,
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
                "no_background": 0,
                "arc_pay": 0,
                "pay_free_watch": 0
            },
            "owner": {
                "mid": 243683327,
                "name": "可爱的豹二A6",
                "face": "http://i2.hdslb.com/bfs/face/1b8debc465485bc84db4d0c0936ed7692b185b5b.jpg"
            },
            "stat": {
                "aid": 200010082,
                "view": 28740,
                "danmaku": 4,
                "reply": 28,
                "favorite": 17,
                "coin": 6,
                "share": 15,
                "now_rank": 0,
                "his_rank": 0,
                "like": 265,
                "dislike": 0
            },
            "dynamic": "#AV170001##保加利亚妖王##全程高能#",
            "cid": 171166760,
            "dimension": {
                "width": 2160,
                "height": 1080,
                "rotate": 0
            },
            "short_link": "https://b23.tv/BV1hz411h7KH",
            "short_link_v2": "https://b23.tv/BV1hz411h7KH",
            "bvid": "BV1hz411h7KH",
            "season_type": 0,
            "is_ogv": false,
            "ogv_info": null,
            "rcmd_reason": ""
        }, {
            "aid": 926574462,
            "videos": 1,
            "tid": 65,
            "tname": "网络游戏",
            "copyright": 2,
            "pic": "http://i2.hdslb.com/bfs/archive/4449df3efd8d007176a9eedb5dfb35a1dc89af48.jpg",
            "title": "当毛子遇到混血超模（2）",
            "pubdate": 1596097538,
            "ctime": 1596097539,
            "desc": "抖音\n抖音...",
            "state": 0,
            "duration": 30,
            "rights": {
                "bp": 0,
                "elec": 0,
                "download": 0,
                "movie": 0,
                "pay": 0,
                "hd5": 0,
                "no_reprint": 0,
                "autoplay": 1,
                "ugc_pay": 0,
                "is_cooperation": 0,
                "ugc_pay_preview": 0,
                "no_background": 0,
                "arc_pay": 0,
                "pay_free_watch": 0
            },
            "owner": {
                "mid": 543863677,
                "name": "DJStevenAV",
                "face": "http://i1.hdslb.com/bfs/face/9e609b8bced59e57ab68558426e99e24d9430196.jpg"
            },
            "stat": {
                "aid": 926574462,
                "view": 546650,
                "danmaku": 163,
                "reply": 300,
                "favorite": 4158,
                "coin": 467,
                "share": 2817,
                "now_rank": 0,
                "his_rank": 0,
                "like": 9583,
                "dislike": 0
            },
            "dynamic": "#茄子##吃鸡##美女#",
            "cid": 218351947,
            "dimension": {
                "width": 720,
                "height": 1280,
                "rotate": 0
            },
            "short_link": "https://b23.tv/BV1BT4y1j7EV",
            "short_link_v2": "https://b23.tv/BV1BT4y1j7EV",
            "bvid": "BV1BT4y1j7EV",
            "season_type": 0,
            "is_ogv": false,
            "ogv_info": null,
            "rcmd_reason": ""
        }, {
            "aid": 85804489,
            "videos": 1,
            "tid": 27,
            "tname": "综合",
            "copyright": 1,
            "pic": "http://i1.hdslb.com/bfs/archive/d513318c0e5fa55580b7a1f47b6ce5c8fd8959d2.jpg",
            "title": "av170001回来了！'！",
            "pubdate": 1580391994,
            "ctime": 1580391994,
            "desc": "-",
            "state": 0,
            "duration": 20,
            "mission_id": 12642,
            "rights": {
                "bp": 0,
                "elec": 0,
                "download": 0,
                "movie": 0,
                "pay": 0,
                "hd5": 0,
                "no_reprint": 1,
                "autoplay": 1,
                "ugc_pay": 0,
                "is_cooperation": 0,
                "ugc_pay_preview": 0,
                "no_background": 0,
                "arc_pay": 0,
                "pay_free_watch": 0
            },
            "owner": {
                "mid": 251852454,
                "name": "胡桃老婆赛高哒",
                "face": "http://i0.hdslb.com/bfs/face/b91aa1a2c50d9273d6c4c8cbf340ca34e8829642.jpg"
            },
            "stat": {
                "aid": 85804489,
                "view": 54228,
                "danmaku": 5,
                "reply": 83,
                "favorite": 30,
                "coin": 6,
                "share": 5,
                "now_rank": 0,
                "his_rank": 0,
                "like": 189,
                "dislike": 0
            },
            "dynamic": "#bilibili新星计划##AV170001##保加利亚妖王#",
            "cid": 146661863,
            "dimension": {
                "width": 720,
                "height": 1440,
                "rotate": 0
            },
            "short_link": "https://b23.tv/BV1N7411B7Bq",
            "short_link_v2": "https://b23.tv/BV1N7411B7Bq",
            "bvid": "BV1N7411B7Bq",
            "season_type": 0,
            "is_ogv": false,
            "ogv_info": null,
            "rcmd_reason": ""
        }, {
            "aid": 718913090,
            "videos": 1,
            "tid": 27,
            "tname": "综合",
            "copyright": 1,
            "pic": "http://i2.hdslb.com/bfs/archive/6567760d676268e2bf2e2c57486085a31427ed79.jpg",
            "title": "【咩栗】镇 站 之 宝",
            "pubdate": 1636448401,
            "ctime": 1636448403,
            "desc": "可以关注一下可爱的小羊和小狼呀～\n小羊主页：https://space.bilibili.com/745493\n小狼主页：https://space.bilibili.com/617459493\n⚡️☀️\n微博@电击咩阿栗\n微博@呜米嗷呜\n⚡️☀️\n网易云@咩栗\n网易云@呜米",
            "state": 0,
            "duration": 188,
            "rights": {
                "bp": 0,
                "elec": 0,
                "download": 0,
                "movie": 0,
                "pay": 0,
                "hd5": 0,
                "no_reprint": 1,
                "autoplay": 1,
                "ugc_pay": 0,
                "is_cooperation": 0,
                "ugc_pay_preview": 0,
                "no_background": 0,
                "arc_pay": 0,
                "pay_free_watch": 0
            },
            "owner": {
                "mid": 674421433,
                "name": "呜米咩栗的草原日常",
                "face": "http://i1.hdslb.com/bfs/face/5566e3a4786959527a72545f908b5664693a2945.jpg"
            },
            "stat": {
                "aid": 718913090,
                "view": 271803,
                "danmaku": 186,
                "reply": 443,
                "favorite": 2855,
                "coin": 668,
                "share": 181,
                "now_rank": 0,
                "his_rank": 0,
                "like": 14277,
                "dislike": 0
            },
            "dynamic": "咩栗，不可以。",
            "cid": 436835160,
            "dimension": {
                "width": 1920,
                "height": 1080,
                "rotate": 0
            },
            "short_link": "https://b23.tv/BV14Q4y1S7HU",
            "short_link_v2": "https://b23.tv/BV14Q4y1S7HU",
            "first_frame": "http://i0.hdslb.com/bfs/storyff/n211105a23d8ue6bh0m1ed1cu6yztac5_firsti.jpg",
            "bvid": "BV14Q4y1S7HU",
            "season_type": 0,
            "is_ogv": false,
            "ogv_info": null,
            "rcmd_reason": ""
        }, {
            "aid": 627815773,
            "videos": 1,
            "tid": 27,
            "tname": "综合",
            "copyright": 1,
            "pic": "http://i1.hdslb.com/bfs/archive/0d16d4fb0ec25f0c4dd2fff7f0a7de3ac789e5b7.jpg",
            "title": "【开启新世界的大门】整活派派反被整——被「HOP」震惊到神隐",
            "pubdate": 1605237196,
            "ctime": 1605237196,
            "desc": "20201112B限\n--\n翻译：長門準\n时轴：PY\n校对：長門準\n剪辑：PY\n------------------------------------------------------\n箱推粉丝7群：1132670270\n审核群:685228392",
            "state": 0,
            "duration": 392,
            "rights": {
                "bp": 0,
                "elec": 0,
                "download": 0,
                "movie": 0,
                "pay": 0,
                "hd5": 0,
                "no_reprint": 1,
                "autoplay": 1,
                "ugc_pay": 0,
                "is_cooperation": 0,
                "ugc_pay_preview": 0,
                "no_background": 0,
                "arc_pay": 0,
                "pay_free_watch": 0
            },
            "owner": {
                "mid": 421347849,
                "name": "白百合リリィOfficial",
                "face": "http://i0.hdslb.com/bfs/face/236f74251b9ac820908db1e0d2f09d46057cb7fe.jpg"
            },
            "stat": {
                "aid": 627815773,
                "view": 261276,
                "danmaku": 707,
                "reply": 227,
                "favorite": 2152,
                "coin": 1035,
                "share": 247,
                "now_rank": 0,
                "his_rank": 0,
                "like": 9692,
                "dislike": 0
            },
            "dynamic": "",
            "cid": 255272814,
            "dimension": {
                "width": 1280,
                "height": 720,
                "rotate": 0
            },
            "short_link": "https://b23.tv/BV13t4y1v7XG",
            "short_link_v2": "https://b23.tv/BV13t4y1v7XG",
            "bvid": "BV13t4y1v7XG",
            "season_type": 0,
            "is_ogv": false,
            "ogv_info": null,
            "rcmd_reason": ""
        }, {
            "aid": 299723213,
            "videos": 1,
            "tid": 171,
            "tname": "电子竞技",
            "copyright": 1,
            "pic": "http://i2.hdslb.com/bfs/archive/5eb1a2b31854985136c140403db76bd915af8168.jpg",
            "title": "⚡️内 格 夫 の 嘲 讽⚡️",
            "pubdate": 1654141500,
            "ctime": 1654141501,
            "desc": "",
            "state": 0,
            "duration": 89,
            "mission_id": 683731,
            "rights": {
                "bp": 0,
                "elec": 0,
                "download": 0,
                "movie": 0,
                "pay": 0,
                "hd5": 0,
                "no_reprint": 1,
                "autoplay": 1,
                "ugc_pay": 0,
                "is_cooperation": 0,
                "ugc_pay_preview": 0,
                "no_background": 0,
                "arc_pay": 0,
                "pay_free_watch": 0
            },
            "owner": {
                "mid": 91542133,
                "name": "邪神_Karasu_",
                "face": "http://i1.hdslb.com/bfs/face/e1684c4d561628ca2baa326caefe9c7cc88e6b7d.jpg"
            },
            "stat": {
                "aid": 299723213,
                "view": 294255,
                "danmaku": 218,
                "reply": 193,
                "favorite": 1705,
                "coin": 578,
                "share": 350,
                "now_rank": 0,
                "his_rank": 0,
                "like": 18725,
                "dislike": 0
            },
            "dynamic": "",
            "cid": 735728100,
            "dimension": {
                "width": 1920,
                "height": 1080,
                "rotate": 0
            },
            "season_id": 223572,
            "short_link": "https://b23.tv/BV12F411G7GC",
            "short_link_v2": "https://b23.tv/BV12F411G7GC",
            "first_frame": "http://i2.hdslb.com/bfs/storyff/n220601a23cewjt7ozvrxwifaipjgy3m_firsti.jpg",
            "bvid": "BV12F411G7GC",
            "season_type": 1,
            "is_ogv": false,
            "ogv_info": null,
            "rcmd_reason": ""
        }],
        "Spec": null,
        "hot_share": {
            "show": false,
            "list": []
        },
        "elec": null,
        "recommend": null,
        "view_addit": {
            "63": false,
            "64": false
        }
    }
}
```

</details>

## 获取视频简介

> http://api.bilibili.com/x/web-interface/archive/desc

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容     | 必要性       | 备注               |
| ------ | ---- | -------- | ------------ | ------------------ |
| aid    | num  | 稿件avid | 必要（可选） | avid与bvid任选一个 |
| bvid   | str  | 稿件bvid | 必要（可选） | avid与bvid任选一个 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                               |
| ------- | ---- | -------- | -------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />62002：稿件不可见 |
| message | str  | 错误信息 | 默认为0                                            |
| ttl     | num  | 1        |                                                    |
| data    | str  | 简介内容 |                                                    |

**示例：**

查看视频(教主的咕鸽)`av39330059`/`BV1Bt411z799`的简介

avid方式：

```shell
curl -G 'http://api.bilibili.com/x/archive/desc' \
--data-urlencode 'aid=39330059'
```

bvid方式：

```shell
curl -G 'http://api.bilibili.com/x/archive/desc' \
--data-urlencode 'bvid=BV1Bt411z799'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": "1.小朋友们大家好，我是你们爷爷最喜欢的超威一列姆！\r\n2.在过去的一年里，我创作了无数脍炙人口的歌曲，常常被人夸赞高产似雌豚。\r\n3.接下来的日子里我会一如既往地勤勉创作，争取继续保持现在的产量，文体两开花。\r\n4.我感觉照这个势头和速度下去别说日常更新不在话下，连出张新专辑都指日可待了啊。\r\n5.也感谢你们一如既往的支持和鼓励，我会注意身体，不把自己累垮掉的。\r\n6.我个人不建议你们在评论区里艾特任何UP主，我真的不建议，当然你们非要这么做我也没办法的。"
}
```

</details>

## 查询视频分P列表  (avid/bvid转cid)

> http://api.bilibili.com/x/player/pagelist

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容     | 必要性       | 备注               |
| ------ | ---- | -------- | ------------ | ------------------ |
| aid    | num  | 稿件avid | 必要（可选） | avid与bvid任选一个 |
| bvid   | str  | 稿件bvid | 必要（可选） | avid与bvid任选一个 |

**json回复：**

根对象：

| 字段    | 类型  | 内容     | 备注                                          |
| ------- | ----- | -------- | --------------------------------------------- |
| code    | num   | 返回值   | 0：成功<br />-400：请求错误<br />-404：无视频 |
| message | str   | 错误信息 | 默认为0                                       |
| ttl     | num   | 1        |                                               |
| data    | array | 分P列表  |                                               |

数组`data`：

| 项   | 类型 | 内容       | 备注          |
| ---- | ---- | ---------- | ------------- |
| 0    | obj  | 1P内容     | 无分P仅有此项 |
| n    | obj  | (n+1)P内容 |               |
| ……   | obj  | ……         | ……            |

数组`data`中的对象：

| 字段      | 类型 | 内容            | 备注                                                      |
| --------- | ---- | --------------- | --------------------------------------------------------- |
| cid       | num  | 当前分P cid     |                                                           |
| page      | num  | 当前分P         |                                                           |
| from      | str  | 视频来源        | vupload：普通上传（B站）<br />hunan：芒果TV<br />qq：腾讯 |
| part      | str  | 当前分P标题     |                                                           |
| duration  | num  | 当前分P持续时间 | 单位为秒                                                  |
| vid       | str  | 站外视频vid     |                                                           |
| weblink   | str  | 站外视频跳转url |                                                           |
| dimension | obj  | 当前分P分辨率   | 有部分视频无法获取分辨率                                  |

数组`data`中的对象中的`dimension`对象：

| 字段   | 类型 | 内容           | 备注                 |
| ------ | ---- | -------------- | -------------------- |
| width  | num  | 当前分P 宽度   |                      |
| height | num  | 当前分P 高度   |                      |
| rotate | num  | 是否将宽高对换 | 0：正常<br />1：对换 |

**示例：**

查询视频`av13502509`/`BV1ex411J7GE`的分P列表

avid方式：

```shell
curl -G 'http://api.bilibili.com/x/player/pagelist' \
--data-urlencode 'aid=13502509'
```

bvid方式：

```shell
curl -G 'http://api.bilibili.com/x/player/pagelist' \
--data-urlencode 'bvid=BV1ex411J7GE'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": [{
        "cid": 66445301,
        "page": 1,
        "from": "vupload",
        "part": "00. 宣传短片",
        "duration": 33,
        "vid": "",
        "weblink": "",
        "dimension": {
            "width": 1920,
            "height": 1080,
            "rotate": 0
        }
    }, {
        "cid": 35039663,
        "page": 2,
        "from": "vupload",
        "part": "01. 火柴人与动画师",
        "duration": 133,
        "vid": "",
        "weblink": "",
        "dimension": {
            "width": 1484,
            "height": 1080,
            "rotate": 0
        }
    }, {
        "cid": 35039678,
        "page": 3,
        "from": "vupload",
        "part": "02. 火柴人与动画师 II",
        "duration": 210,
        "vid": "",
        "weblink": "",
        "dimension": {
            "width": 1484,
            "height": 1080,
            "rotate": 0
        }
    }, {
        "cid": 35039693,
        "page": 4,
        "from": "vupload",
        "part": "03. 火柴人与动画师 III",
        "duration": 503,
        "vid": "",
        "weblink": "",
        "dimension": {
            "width": 992,
            "height": 720,
            "rotate": 0
        }
    }, 
    …………
    ]
}
```

</details>
