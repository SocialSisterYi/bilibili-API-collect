# 视频基本信息

<img src="/imgs/ploading.gif" width="100" height="100"/>

- [获取视频详细信息(web端)](#获取视频详细信息(web端))
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
| no_reprint      | num  | 是否显示“禁止转载“标志 |              |
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
| argue_msg | str  | 警告/争议提示信息    |         |

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
