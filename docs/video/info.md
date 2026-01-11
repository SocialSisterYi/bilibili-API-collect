# 视频基本信息

<img src="../../assets/img/ploading.gif" width="100" height="100"/>

## 获取视频详细信息(web端)

> https://api.bilibili.com/x/web-interface/wbi/view  
> https://api.bilibili.com/x/web-interface/view

*请求方式：GET*

认证方式：Cookie(SESSDATA)

限制游客访问的视频需要登录

**url参数：**

| 参数名  | 类型  | 内容     | 必要性    | 备注            |
|------|-----|--------|--------|---------------|
| aid  | num | 稿件avid | 必要(可选) | avid与bvid任选一个 |
| bvid | str | 稿件bvid | 必要(可选) | avid与bvid任选一个 |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                                                                                 |
|---------|-----|------|------------------------------------------------------------------------------------|
| code    | num | 返回值  | 0：成功<br />-400：请求错误<br />-403：权限不足<br />-404：无视频<br />62002：稿件不可见<br />62004：稿件审核中<br />62012：仅UP主自己可见 |
| message | str | 错误信息 | 默认为0                                                                               |
| ttl     | num | 1    |                                                                                    |
| data    | obj | 信息本体 |                                                                                    |

`data`对象：

| 字段                    | 类型    | 内容                           | 备注                                                         |
| ----------------------- | ------- | ------------------------------ | ------------------------------------------------------------ |
| bvid                    | str     | 稿件bvid                       |                                                              |
| aid                     | num     | 稿件avid                       |                                                              |
| videos                  | num     | 稿件分P总数                    | 默认为1                                                      |
| tid                     | num     | 分区tid                        | 详情见[视频分区一览](video_zone.md)                          |
| tid_v2                  | num     | 分区tid (v2)                   | 详情见[视频分区一览 (v2)](video_zone_v2.md)                  |
| tname                   | str     | 子分区名称                     |                                                              |
| tname_v2                | str     | 子分区名称 (v2)                |                                                              |
| copyright               | num     | 视频类型                       | 1：原创<br />2：转载<br />3：未填写                            |
| pic                     | str     | 稿件封面图片url                |                                                              |
| title                   | str     | 稿件标题                       |                                                              |
| pubdate                 | num     | 稿件发布时间                   | 秒级时间戳                                                   |
| ctime                   | num     | 用户投稿时间                   | 秒级时间戳                                                   |
| desc                    | str     | 视频简介                       |                                                              |
| desc_v2                 | array   | 新版视频简介                   |                                                              |
| state                   | num     | 视频状态                       | 详情见[属性数据文档](attribute_data.md#state字段值稿件状态)  |
| ~~attribute~~(已经弃用) | ~~num~~ | ~~稿件属性位配置~~             | 详情见[属性数据文档](attribute_data.md#attribute字段值稿件属性位) |
| duration                | num     | 稿件总时长(所有分P)            | 单位为秒                                                     |
| forward                 | num     | 撞车视频跳转avid               | 仅撞车视频存在此字段                                         |
| mission_id              | num     | 稿件参与的活动id               |                                                              |
| redirect_url            | str     | 重定向url                      | 仅番剧或影视视频存在此字段<br />用于番剧&影视的av/bv->ep     |
| rights                  | obj     | 视频属性标志                   |                                                              |
| owner                   | obj     | 视频UP主信息                   |                                                              |
| stat                    | obj     | 视频状态数                     |                                                              |
| argue_info              | obj     | 争议/警告信息                  |                                                              |
| dynamic                 | str     | 视频同步发布的的动态的文字内容 |                                                              |
| cid                     | num     | 视频1P cid                     |                                                              |
| dimension               | obj     | 视频1P分辨率                   |                                                              |
| premiere                |         | null                           |                                                              |
| teenage_mode            | num     |                                | 用于青少年模式                                               |
| is_chargeable_season    | bool    |                                |                                                              |
| is_story                | bool    | 是否为动态视频                 |                                                              |
| is_upower_exclusive     | bool    | 是否为充电专属视频             |                                                              |
| is_upower_play          | bool    |                                |                                                              |
| is_upower_preview       | bool    | 充电专属视频是否支持试看       |                                                              |
| no_cache                | bool    | 是否不允许缓存?                |                                                              |
| pages                   | array   | 视频分P列表                    |                                                              |
| subtitle                | obj     | 视频CC字幕信息                  |                                                             |
| ugc_season              | obj     | 视频合集信息                   | 不在合集中的视频无此项                                                               |
| staff                   | array   | 合作成员列表                   | 非合作视频无此项                                             |
| is_season_display       | bool    |                                |                                                              |
| user_garb               | obj     | 用户装扮信息                   |                                                              |
| honor_reply             | obj     |                                |                                                              |
| like_icon               | str     | 空串                           |                                                              |
| need_jump_bv            | bool    | 需要跳转到BV号?                |                                                              |
| disable_show_up_info    | bool    | 禁止展示UP主信息?              |                                                              |
| is_story_play           | bool    |                              | 作用未知，可能与动态视频有关                                     |
| is_view_self            | bool    | 是否尽自己可见                |                                                              |

`data`中的`desc_v2`数组：

| 项   | 类型  | 内容     | 备注  |
|-----|-----|--------|-----|
| 0   | obj | 新版简介内容 |     |

`desc_v2`数组中的对象：

| 字段       | 类型  | 内容   | 备注  |
|----------|-----|------|-----|
| raw_text | str | 简介内容 |type=1时显示原文<br />type=2时显示'@'+raw_text+' '并链接至biz_id的主页|
| type     | num | 类型 |1：普通，2：@他人|
| biz_id   | num |被@用户的mid|=0，当type=1|

`data`中的`rights`对象：

| 字段              | 类型  | 内容           | 备注     |
|-----------------|-----|--------------|--------|
| bp              | num | 是否允许承包       |        |
| elec            | num | 是否支持充电       |        |
| download        | num | 是否允许下载       |        |
| movie           | num | 是否电影         |        |
| pay             | num | 是否PGC付费      |        |
| hd5             | num | 是否有高码率       |        |
| no_reprint      | num | 是否显示“禁止转载”标志 |        |
| autoplay        | num | 是否自动播放       |        |
| ugc_pay         | num | 是否UGC付费      |        |
| is_cooperation  | num | 是否为联合投稿      |        |
| ugc_pay_preview | num | 0            | 作用尚不明确 |
| no_background   | num | 0            | 作用尚不明确 |
| clean_mode      | num | 0            | 作用尚不明确 |
| is_stein_gate   | num | 是否为互动视频      |        |
| is_360          | num | 是否为全景视频      |        |
| no_share        | num | 0            | 作用尚不明确 |
| arc_pay         | num | 0            | 作用尚不明确 |
| free_watch      | num | 0            | 作用尚不明确 |

`data`中的`owner`对象：

| 字段   | 类型  | 内容     | 备注  |
|------|-----|--------|-----|
| mid  | num | UP主mid |     |
| name | str | UP主昵称  |     |
| face | str | UP主头像  |     |

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
| vt         | int  | 作用尚不明确 | 恒为`0` |

`data`中的`argue_info`对象：

| 字段       | 类型 | 内容              | 备注         |
| ---------- | ---- | ----------------- | ------------ |
| argue_link | str  |                   | 作用尚不明确 |
| argue_msg  | str  | 警告/争议提示信息 |              |
| argue_type | int  |                   | 作用尚不明确 |

`data`中的`pages`数组：

| 项   | 类型  | 内容       | 备注      |
|-----|-----|----------|---------|
| 0   | obj | 1P内容     | 无分P仅有此项 |
| n   | obj | (n+1)P内容 |         |
| ……  | obj | ……       | ……      |

`pages`数组中的对象：

| 字段        | 类型  | 内容        | 备注                                          |
|-----------|-----|-----------|---------------------------------------------|
| cid       | num | 分P cid    |                                             |
| page      | num | 分P序号      | 从1开始                                        |
| from      | str | 视频来源      | vupload：普通上传（B站）<br />hunan：芒果TV<br />qq：腾讯 |
| part      | str | 分P标题      |                                             |
| duration  | num | 分P持续时间    | 单位为秒                                        |
| vid       | str | 站外视频vid   | 仅站外视频有效                                     |
| weblink   | str | 站外视频跳转url | 仅站外视频有效                                     |
| dimension | obj | 当前分P分辨率   | 部分较老视频无分辨率值                                 |

`pages`数组中的对象中的`dimension`对象(同`data`中的`dimension`对象)：

| 字段     | 类型  | 内容      | 备注             |
|--------|-----|---------|----------------|
| width  | num | 当前分P 宽度 |                |
| height | num | 当前分P 高度 |                |
| rotate | num | 是否将宽高对换 | 0：正常<br />1：对换 |

`subtitle`对象：

| 字段           | 类型    | 内容       | 备注  |
|--------------|-------|----------|-----|
| allow_submit | bool  | 是否允许提交字幕 |     |
| list         | array | 字幕列表     | 未登录为空 |

`subtitle`对象中的`list`数组：

| 项   | 类型  | 内容      | 备注  |
|-----|-----|---------|-----|
| 0   | obj | 字幕1     |     |
| n   | obj | 字幕(n+1) |     |
| ……  | obj | ……      | ……  |

`list`数组中的对象：

| 字段           | 类型   | 内容            | 备注  |
|--------------|------|---------------|-----|
| id           | num  | 字幕id          |     |
| lan          | str  | 字幕语言          |     |
| lan_doc      | str  | 字幕语言名称        |     |
| is_lock      | bool | 是否锁定          |     |
| author_mid   | num  | 字幕上传者mid      |     |
| subtitle_url | str  | json格式字幕文件url |     |
| author       | obj  | 字幕上传者信息       |     |

`list`数组中的对象中的`author`对象：

| 字段              | 类型  | 内容         | 备注     |
|-----------------|-----|------------|--------|
| mid             | num | 字幕上传者mid   |        |
| name            | str | 字幕上传者昵称    |        |
| sex             | str | 字幕上传者性别    | 男 女 保密 |
| face            | str | 字幕上传者头像url |        |
| sign            | str | 字幕上传者签名    |        |
| rank            | num | 10000      | 作用尚不明确 |
| birthday        | num | 0          | 作用尚不明确 |
| is_fake_account | num | 0          | 作用尚不明确 |
| is_deleted      | num | 0          | 作用尚不明确 |

`ugc_season`对象：

| 字段         | 类型    | 内容      | 备注     |
|------------|-------|---------|--------|
| id       | num   | 视频合集id  |        |
| title       | str   | 视频合集标题 |        |
| mid       | str | 视频合集作者id |        |
| intro      | str   | 视频合集介绍  |        |
| sign_state      | num   | ？  |     作用尚不明确   |
| attribute       | num  | 稿件属性位       | 详情见[属性数据文档](attribute_data.md#attribute字段值(稿件属性位)) |
| sections  | array   | 视频合集中分部列表，名称可由up主自定义，默认为正片       |  |
| stat      | obj   | 视频合集状态数  |        |
| ep_count      | num   | 视频合集中视频数量  |        |
| season_type      | num   | 作用尚不明确  |        |
| is_pay_season      | bool   | 是否为付费合集  |        |
| enable_vt      | num   | 作用尚不明确  |        |

`ugc_season`中的`sections`数组：

| 字段         | 类型    | 内容      | 备注     |
|------------|-------|---------|--------|
| season_id       | num   | 视频合集中分部所属视频合集id  |        |
| section_id       | num   | 视频合集中分部id |        |
| title       | str | 视频合集中分部标题 |        |
| type       | num   | ？  |   作用尚不明确     |
| episodes       | array   | 视频合集中分部的视频列表 |        |

`sections`中的`episodes`数组：

| 字段         | 类型    | 内容      | 备注     |
|------------|-------|---------|--------|
| season_id       | num   | 视频合集中分部中视频所属视频合集id  |        |
| section_id       | num   | 视频合集中视频合集中分部中视频所属视频合集分部id |        |
| id       | num | 视频合集分部中视频id(以下简称视频) |        |
| aid       | num   | 视频aid  |        |
| cid       | num   | 视频cid |        |
| title       | str   | 视频标题 | 合集列表中展示的标题。默认视频真实标题，在[创作中心-合集管理-单集标题](https://member.bilibili.com/platform/upload-manager/ep)修改后则以修改后为准 |
| ~~attribute~~(已经弃用) | ~~num~~ | ~~稿件属性位配置~~             | 详情见[属性数据文档](attribute_data.md#attribute字段值(稿件属性位)) |
| arc       | obj   | 视频详细信息 |   基本同「[获取视频详细信息(web端)](#获取视频详细信息(web端))」中的data对象     |

`ugc_season`中的`stat`对象：

|字段         | 类型    | 内容      | 备注     |
|------------|-------|---------|--------|
| season_id       | num   | 视频合集id  |        |
| view       | num   | 视频合集总浏览量 |        |
| danmaku       | num | 视频合集总弹幕量 |        |
| reply       | num   | 视频合集总评论量  |        |
| fav       | num   | 视频合集总收藏数  |        |
| coin       | num   | 视频合集总投币数  |        |
| share       | num   | 视频合集总分享数  |        |
| now_rank       | num   | 视频合集当前排名  |        |
| his_rank       | num   | 视频合集历史排名  |        |
| like       | num   | 视频合集总获赞数  |        |
| vt       | num   | 作用尚不明确  |        |
| vv       | num   | 作用尚不明确  |        |

`ugc_season`示例

```jsonc
            "ugc_season": {
                "id": 2974525,
                "title": "楚汉传奇",
                "cover": "https://archive.biliimg.com/bfs/archive/5a853e8bd10a041360b45a462785d90a58ec469e.png",
                "mid": 1557073149,
                "intro": "",
                "sign_state": 0,
                "attribute": 140,
                "sections": [
                    {
                        "season_id": 2974525,
                        "id": 3341804,
                        "title": "正片",
                        "type": 1,
                        "episodes": [
                            {
                                "season_id": 2974525,
                                "section_id": 3341804,
                                "id": 64976947,
                                "aid": 1804383120,
                                "cid": 1541093346,
                                "title": "项燕的10万大军惨败秦国，临死前，立下狠誓“楚虽三户，亡秦必楚”",
                                "attribute": 0,
                                "arc": {
                                    "aid": 1804383120,
                                    "videos": 0,
                                    "type_id": 0,
                                    "type_name": "",
                                    "copyright": 0,
                                    "pic": "http://i1.hdslb.com/bfs/archive/9d0ebd0a8abd7b005466cb57632ddaa550d24dab.jpg",
                                    "title": "项燕的10万大军惨败秦国，临死前，立下狠誓“楚虽三户，亡秦必楚”",
                                    "pubdate": 1715427472,
                                    "ctime": 1715427472,
                                    "desc": "",
                                    "state": 0,
                                    "duration": 612,
                                    "rights": {
                                        "bp": 0,
                                        "elec": 0,
                                        "download": 0,
                                        "movie": 0,
                                        "pay": 0,
                                        "hd5": 0,
                                        "no_reprint": 0,
                                        "autoplay": 0,
                                        "ugc_pay": 0,
                                        "is_cooperation": 0,
                                        "ugc_pay_preview": 0,
                                        "arc_pay": 0,
                                        "free_watch": 0
                                    },
                                    "author": {
                                        "mid": 0,
                                        "name": "",
                                        "face": ""
                                    },
                                    "stat": {
                                        "aid": 1804383120,
                                        "view": 787330,
                                        "danmaku": 1298,
                                        "reply": 774,
                                        "fav": 2589,
                                        "coin": 1947,
                                        "share": 271,
                                        "now_rank": 0,
                                        "his_rank": 0,
                                        "like": 12320,
                                        "dislike": 0,
                                        "evaluation": "",
                                        "argue_msg": "",
                                        "vt": 2630119,
                                        "vv": 787330
                                    },
                                    "dynamic": "",
                                    "dimension": {
                                        "width": 0,
                                        "height": 0,
                                        "rotate": 0
                                    },
                                    "desc_v2": null,
                                    "is_chargeable_season": false,
                                    "is_blooper": false,
                                    "enable_vt": 0,
                                    "vt_display": ""
                                },
                                "page": {
                                    "cid": 1541093346,
                                    "page": 1,
                                    "from": "vupload",
                                    "part": "项燕的10万大军惨败秦国，临死前，立下狠誓“楚虽三户，亡秦必楚”",
                                    "duration": 612,
                                    "vid": "",
                                    "weblink": "",
                                    "dimension": {
                                        "width": 1920,
                                        "height": 1080,
                                        "rotate": 0
                                    }
                                },
                                "bvid": "BV1Tb421b7mi",
                                "pages": [
                                    {
                                        "cid": 1541093346,
                                        "page": 1,
                                        "from": "vupload",
                                        "part": "项燕的10万大军惨败秦国，临死前，立下狠誓“楚虽三户，亡秦必楚”",
                                        "duration": 612,
                                        "vid": "",
                                        "weblink": "",
                                        "dimension": {
                                            "width": 1920,
                                            "height": 1080,
                                            "rotate": 0
                                        }
                                    }
                                ]
                            },
                            {
                                "season_id": 2974525,
                                "section_id": 3341804,
                                "id": 65121012,
                                "aid": 1004394994,
                                "cid": 1542426326,
                                "title": "卢绾斗鸡输了，眼看十个手指头保不住，刘邦倾家荡产帮了他",
                                "attribute": 0,
                                "arc": {
                                  ///
                                }
                            }
                        ]
                    }
                ],
                "stat": {
                "season_id": 3617611,
                "view": 1826438,
                "danmaku": 5193,
                "reply": 3036,
                "fav": 5970,
                "coin": 2303,
                "share": 663,
                "now_rank": 0,
                "his_rank": 0,
                "like": 40848,
                "vt": 0,
                "vv": 0
            },
            "ep_count": 21,
            "season_type": 1,
            "is_pay_season": false,
            "enable_vt": 0

            }
```

`staff`数组：

| 项   | 类型  | 内容        | 备注  |
|-----|-----|-----------|-----|
| 0   | obj | 合作成员1     |     |
| n   | obj | 合作成员(n+1) |     |
| ……  | obj | ……        | ……  |

`staff`数组中的对象：

| 字段       | 类型  | 内容      | 备注  |
|----------|-----|---------|-----|
| mid      | num | 成员mid   |     |
| title    | str | 成员名称    |     |
| name     | str | 成员昵称    |     |
| face     | str | 成员头像url |     |
| vip      | obj | 成员大会员状态 |     |
| official | obj | 成员认证信息  |     |
| follower | num | 成员粉丝数   |     |
| label_style | num |     |     |

`staff`数组中的对象中的`vip`对象：

| 字段         | 类型  | 内容     | 备注                        |
|------------|-----|--------|---------------------------|
| type       | num | 成员会员类型 | 0：无<br />1：月会员<br />2：年会员 |
| status     | num | 会员状态   | 0：无<br />1：有              |
| due_date   | num | 到期时间   | UNIX 毫秒时间戳               |
| vip_pay_type | num |           |                             |
| theme_type | num | 0      |                           |
| label      | obj |           |                             |

`staff`数组中的对象中的`official`对象：

| 字段    | 类型  | 内容     | 备注                                    |
|-------|-----|--------|---------------------------------------|
| role  | num | 成员认证级别 | 见[用户认证类型一览](../user/official_role.md) |
| title | str | 成员认证名  | 无为空                                   |
| desc  | str | 成员认证备注 | 无为空                                   |
| type  | num | 成员认证类型 | -1：无<br />0：有                         |

`data`中的`user_garb`对象：

| 字段                | 类型  | 内容    | 备注  |
|-------------------|-----|-------|-----|
| url_image_ani_cut | str | 某url？ |     |

`data`中的`honor_reply`对象：

| 字段    | 类型    | 内容  | 备注  |
|-------|-------|-----|-----|
| honor | array |     |     |

`honor`数组中的对象：

| 字段                   | 类型  | 内容                                  | 备注  |
|----------------------|-----|-------------------------------------|-----|
| aid                  | num | 当前稿件aid                             |     |
| type                 | num | 1：入站必刷收录<br/>2：第?期每周必看<br/>3：全站排行榜最高第?名<br/>4：热门 |     |
| desc                 | num | 描述                                  |     |
| weekly_recommend_num | num |                                     |     |

**示例：**

获取视频`av85440373`/`BV117411r7R1`的基本信息

avid方式：

```shell
curl -G 'https://api.bilibili.com/x/web-interface/view' \
--data-urlencode 'aid=85440373'
```

bvid方式：

```shell
curl -G 'https://api.bilibili.com/x/web-interface/view' \
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
    "tid_v2": 2061,
    "tname": "原创音乐",
    "tname_v2": "人力VOCALOID",
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
      "is_stein_gate": 0,
      "is_360": 0,
      "no_share": 0,
      "arc_pay": 0,
      "free_watch": 0
    },
    "owner": {
      "mid": 66606350,
      "name": "陈楒潼桶桶桶",
      "face": "https://i2.hdslb.com/bfs/face/c9af3b32cf74baec5a4b65af8ca18ae5ff571f77.jpg"
    },
    "stat": {
      "aid": 85440373,
      "view": 2404179,
      "danmaku": 12348,
      "reply": 2676,
      "favorite": 58329,
      "coin": 72793,
      "share": 9620,
      "now_rank": 0,
      "his_rank": 55,
      "like": 161270,
      "dislike": 0,
      "evaluation": "",
      "vt": 0
    },
    "argue_info": {
      "argue_msg": "",
      "argue_type": 0,
      "argue_link": ""
    },
    "dynamic": "进来就出不去了！！！\n#全民音乐UP主##CB##warma##电音##快板##拜年祭##诸神的奥运##编曲##Remix#",
    "cid": 146044693,
    "dimension": {
      "width": 1920,
      "height": 1080,
      "rotate": 0
    },
    "premiere": null,
    "teenage_mode": 0,
    "is_chargeable_season": false,
    "is_story": false,
    "is_upower_exclusive": false,
    "is_upower_play": false,
    "is_upower_preview": false,
    "enable_vt": 0,
    "vt_display": "",
    "is_upower_exclusive_with_qa": false,
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
        },
        "ctime": 1580212263
      }
    ],
    "subtitle": {
      "allow_submit": false,
      "list": [
        {
          "id": 1061981378473779968,
          "lan": "ai-zh",
          "lan_doc": "中文（自动生成）",
          "is_lock": false,
          "subtitle_url": "",
          "type": 1,
          "id_str": "1061981378473779968",
          "ai_type": 0,
          "ai_status": 2,
          "author": {
            "mid": 0,
            "name": "",
            "sex": "",
            "face": "",
            "sign": "",
            "rank": 0,
            "birthday": 0,
            "is_fake_account": 0,
            "is_deleted": 0,
            "in_reg_audit": 0,
            "is_senior_member": 0,
            "name_render": null
          }
        }
      ]
    },
    "staff": [
      {
        "mid": 66606350,
        "title": "UP主",
        "name": "陈楒潼桶桶桶",
        "face": "https://i2.hdslb.com/bfs/face/c9af3b32cf74baec5a4b65af8ca18ae5ff571f77.jpg",
        "vip": {
          "type": 2,
          "status": 1,
          "due_date": 1769443200000,
          "vip_pay_type": 1,
          "theme_type": 0,
          "label": {
            "path": "",
            "text": "年度大会员",
            "label_theme": "annual_vip",
            "text_color": "#FFFFFF",
            "bg_style": 1,
            "bg_color": "#FB7299",
            "border_color": "",
            "use_img_label": true,
            "img_label_uri_hans": "",
            "img_label_uri_hant": "",
            "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
            "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png"
          },
          "avatar_subscript": 1,
          "nickname_color": "#FB7299",
          "role": 3,
          "avatar_subscript_url": "",
          "tv_vip_status": 0,
          "tv_vip_pay_type": 0,
          "tv_due_date": 0,
          "avatar_icon": {
            "icon_type": 1,
            "icon_resource": {}
          }
        },
        "official": {
          "role": 1,
          "title": "bilibili 知名音乐UP主",
          "desc": "",
          "type": 0
        },
        "follower": 616428,
        "label_style": 0
      },
      {
        "mid": 53456,
        "title": "曲绘",
        "name": "Warma",
        "face": "https://i2.hdslb.com/bfs/face/87c0b7e4d3eedf04c458a82b9271013beaa4bc59.jpg",
        "vip": {
          "type": 2,
          "status": 1,
          "due_date": 1770480000000,
          "vip_pay_type": 0,
          "theme_type": 0,
          "label": {
            "path": "",
            "text": "年度大会员",
            "label_theme": "annual_vip",
            "text_color": "#FFFFFF",
            "bg_style": 1,
            "bg_color": "#FB7299",
            "border_color": "",
            "use_img_label": true,
            "img_label_uri_hans": "https://i0.hdslb.com/bfs/activity-plat/static/20220608/e369244d0b14644f5e1a06431e22a4d5/0DFy9BHgwE.gif",
            "img_label_uri_hant": "",
            "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d7e624d13d3e134251e4174a7318c19a8edbd71.png",
            "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/uckjAv3Npy.png"
          },
          "avatar_subscript": 1,
          "nickname_color": "#FB7299",
          "role": 3,
          "avatar_subscript_url": "",
          "tv_vip_status": 1,
          "tv_vip_pay_type": 1,
          "tv_due_date": 1753286400,
          "avatar_icon": {
            "icon_type": 1,
            "icon_resource": {}
          }
        },
        "official": {
          "role": 1,
          "title": "bilibili 知名UP主",
          "desc": "",
          "type": 0
        },
        "follower": 4818052,
        "label_style": 0
      }
    ],
    "is_season_display": false,
    "user_garb": {
      "url_image_ani_cut": "https://i0.hdslb.com/bfs/garb/item/e4c1c34e8b87fc05a893ed4a04ad322f75edbed9.bin"
    },
    "honor_reply": {
      "honor": [
        {
          "aid": 85440373,
          "type": 2,
          "desc": "第45期每周必看",
          "weekly_recommend_num": 45
        },
        {
          "aid": 85440373,
          "type": 3,
          "desc": "全站排行榜最高第55名",
          "weekly_recommend_num": 0
        },
        {
          "aid": 85440373,
          "type": 4,
          "desc": "热门",
          "weekly_recommend_num": 0
        },
        {
          "aid": 85440373,
          "type": 7,
          "desc": "热门收录",
          "weekly_recommend_num": 0
        }
      ]
    },
    "like_icon": "",
    "need_jump_bv": false,
    "disable_show_up_info": false,
    "is_story_play": 1,
    "is_view_self": false
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

视频UP主为：`66606350(Crazy_Bucket_陈楒潼)`

视频简介为：

`【CB想说的】看完拜年祭之后最爱的一个节目！给有快板的部分简单加了一些不同风格的配乐hhh，感谢沃玛画的我！太可爱了哈哈哈哈哈哈哈！！！\n【Warma想说的】我画了打碟的CB，画风为了还原原版视频所以参考了四迹老师的画风，四迹老师的画真的太可爱啦！不过其实在画的过程中我遇到了一个问题，CB的耳机……到底是戴在哪个耳朵上呢？\n\n原版：av78977080\n编曲(配乐)：Crazy Bucket\n人声(配音)：Warma/谢拉\n曲绘：四迹/Warma\n动画：四迹/Crazy Bucket\n剧本：Mokurei-木灵君\n音频后期：DMYoung/纳兰寻风/Crazy Bucket\n包装：破晓天`

视频状态为：`0(开放浏览)`

视频属性为： `显示“禁止转载“标志`、`高清`、`禁止其他人添加TAG`、`联合投稿视频`

视频封面为：

https://i1.hdslb.com/bfs/archive/ea0dd34bf41e23a68175680a00e3358cd249105f.jpg

<img src="https://i1.hdslb.com/bfs/archive/ea0dd34bf41e23a68175680a00e3358cd249105f.jpg" referrerpolicy="no-referrer" />

## 获取视频超详细信息(web端)

> https://api.bilibili.com/x/web-interface/view/detail

> https://api.bilibili.com/x/web-interface/wbi/view/detail

*请求方式：GET*

认证方式：Cookie(SESSDATA)

鉴权方式：[Wbi 签名](../misc/sign/wbi.md)

限制游客访问的视频需要登录

**url参数：**

| 参数名    | 类型 | 内容                 | 必要性     | 备注               |
| --------- | ---- | -------------------- | ---------- | ------------------ |
| aid       | num  | 稿件avid             | 必要(可选) | avid与bvid任选一个 |
| bvid      | str  | 稿件bvid             | 必要(可选) | avid与bvid任选一个 |
| need_elec | num  | 是否获取UP主充电信息 | 非必要     | 0：否<br />1：是   |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                                                 |
| ------- | ---- | -------- | ------------------------------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-403：权限不足<br />-404：无视频<br />62002：稿件不可见<br />62004：稿件审核中<br />62012：仅UP主自己可见 |
| message | str  | 错误信息 | 默认为0                                                                              |
| ttl     | num  | 1        |                                                                                      |
| data    | obj  | 信息本体 |                                                                                      |

`data`对象：

| 字段              | 类型  | 内容             | 备注         |
| ----------------- | ----- | ---------------- | ------------ |
| View              | obj   | 视频基本信息     |              |
| Card              | obj   | 视频UP主信息     |              |
| Tags              | array | 视频TAG信息      |              |
| Reply             | obj   | 视频热评信息     |              |
| Related           | array | 推荐视频信息     |              |
| Spec              | null  | ？               | 作用尚不明确 |
| hot_share         | obj   | ？               | 作用尚不明确 |
| elec              | 有效时：obj<br />无效时：null | 充电信息         | 当请求参数 `need_elec=1` 且有充电信息时有效 |
| recommend         | null  | ？               | 作用尚不明确 |
| emergency         | obj   | 视频操作按钮信息 |              |
| view_addit        | obj   | ？               | 作用尚不明确 |
| guide             | null  | ？               | 作用尚不明确 |
| query_tags        | null  | ？               | 作用尚不明确 |
| participle        | array | 分词信息         | 用于推荐     |
| module_ctrl       | null  | ？               | 作用尚不明确 |
| replace_recommend | bool  | ？               | 作用尚不明确 |

`data`中的`View`对象：

基本同「[获取视频详细信息(web端)](#获取视频详细信息web端)」中的data对象

`data`中的`Card`对象：

基本同「[用户名片信息](../user/info.md#用户名片信息)」中的data对象

`data`中的`Tags`数组：

基本同「[获取视频TAG信息（新）](tags.md#获取视频TAG信息新)」中的data数组

`data`中的`Reply`对象：

基本同「[获取评论区热评](../comment/list.md#获取评论区热评)」中的data对象

`data`中的`Related`数组：

| 项   | 类型  | 内容        | 备注  |
|-----|-----|-----------|-----|
| 0   | obj | 推荐视频1     |     |
| n   | obj | 推荐视频(n+1) |     |
| ……  | obj | ……        | ……  |

`Related`数组中的对象：

基本同「[获取视频详细信息(web端)](#获取视频详细信息web端)」中的data对象，已知部分字段有差异，如没有分P信息

`data`中的`hot_share`对象：

| 字段   | 类型    | 内容    | 备注     |
|------|-------|-------|--------|
| show | bool  | false | 作用尚不明确 |
| list | array | 空     | 作用尚不明确 |

`data`中的`elec`对象：

基本同「[获取视频充电鸣谢名单](../electric/charge_list.md#获取视频充电鸣谢名单)」中的data对象

`data`中的`emergency`对象：

| 字段     | 类型 | 内容               | 备注     |
| -------- | ---- | ------------------ | -------- |
| no_like  | bool | 是否不显示点赞按钮 |          |
| no_coin  | bool | 是否不显示投币按钮 |          |
| no_fav   | bool | 是否不显示收藏按钮 |          |
| no_share | bool | 是否不显示分享按钮 |          |

`data`中的`view_addit`对象：

| 字段 | 类型 | 内容                 | 备注         |
| ---- | ---- | -------------------- | ------------ |
| 63   | bool | 是否不显示直播推荐   |              |
| 64   | bool | 是否不显示活动推荐   |              |
| 69   | bool | ？                   | 作用尚不明确 |
| 71   | bool | 是否不显示标签与笔记 |              |
| 72   | bool | ？                   | 作用尚不明确 |

**示例：**

获取视频`av170001`/`BV17x411w7KC`的详细信息

avid方式：

```shell
curl -G 'https://api.bilibili.com/x/web-interface/view/detail' \
--data-urlencode 'aid=170001' \
--data-urlencode 'need_elec=1'
```

bvid方式：

```shell
curl -G 'https://api.bilibili.com/x/web-interface/view/detail' \
--data-urlencode 'bvid=BV17x411w7KC' \
--data-urlencode 'need_elec=1'
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
      "tid_v2": 2017,
      "tname": "MV",
      "tname_v2": "MV",
      "copyright": 2,
      "pic": "http://i2.hdslb.com/bfs/archive/1ada8c32a9d168e4b2ee3e010f24789ba3353785.jpg",
      "title": "【MV】保加利亚妖王AZIS视频合辑",
      "pubdate": 1320850533,
      "ctime": 1497380562,
      "desc": "sina 保加利亚超级天王 Azis1999年出道。他的音乐融合保加利亚名族曲风chalga和pop、rap等元素，不过他惊艳的易装秀与浮夸的角色诠释才是他最为出名的地方 Azis与众多保加利亚天王天后级歌手都有过合作.06年，他作为Mariana Popova的伴唱，在欧洲半决赛上演唱了他们的参赛曲Let Me Cry 06年他被Velikite Balgari评为保加利亚有史以来最伟大的名人之一",
      "desc_v2": [
        {
          "raw_text": "sina 保加利亚超级天王 Azis1999年出道。他的音乐融合保加利亚名族曲风chalga和pop、rap等元素，不过他惊艳的易装秀与浮夸的角色诠释才是他最为出名的地方 Azis与众多保加利亚天王天后级歌手都有过合作.06年，他作为Mariana Popova的伴唱，在欧洲半决赛上演唱了他们的参赛曲Let Me Cry 06年他被Velikite Balgari评为保加利亚有史以来最伟大的名人之一",
          "type": 1,
          "biz_id": 0
        }
      ],
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
        "view": 45252521,
        "danmaku": 914336,
        "reply": 184686,
        "favorite": 883733,
        "coin": 291585,
        "share": 12779204,
        "now_rank": 0,
        "his_rank": 13,
        "like": 928358,
        "dislike": 0,
        "evaluation": "",
        "vt": 0
      },
      "argue_info": {
        "argue_msg": "",
        "argue_type": 0,
        "argue_link": ""
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
      "is_story": false,
      "is_upower_exclusive": false,
      "is_upower_play": false,
      "is_upower_preview": false,
      "enable_vt": 0,
      "vt_display": "",
      "is_upower_exclusive_with_qa": false,
      "no_cache": false,
      "pages": [
        {
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
          },
          "ctime": 1497380562
        },
        {
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
          },
          "ctime": 1497380562
        },
        {
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
          },
          "ctime": 1497380562
        },
        {
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
          },
          "ctime": 1497380562
        },
        {
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
          },
          "ctime": 1497380562
        },
        {
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
          },
          "ctime": 1497380562
        },
        {
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
          },
          "ctime": 1497380562
        },
        {
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
          },
          "ctime": 1497380562
        },
        {
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
          },
          "ctime": 1497380562
        },
        {
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
          },
          "ctime": 1497380562
        }
      ],
      "subtitle": {
        "allow_submit": false,
        "list": []
      },
      "is_season_display": false,
      "user_garb": {
        "url_image_ani_cut": "https://i0.hdslb.com/bfs/garb/item/e4c1c34e8b87fc05a893ed4a04ad322f75edbed9.bin"
      },
      "honor_reply": {
        "honor": [
          {
            "aid": 170001,
            "type": 3,
            "desc": "全站排行榜最高第13名",
            "weekly_recommend_num": 0
          }
        ]
      },
      "like_icon": "",
      "need_jump_bv": false,
      "disable_show_up_info": false,
      "is_story_play": 0,
      "is_view_self": false
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
        "fans": 64052,
        "friend": 45,
        "attention": 45,
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
          "image_enhance_frame": "",
          "n_pid": 0
        },
        "nameplate": {
          "nid": 9,
          "name": "出道偶像",
          "image": "https://i0.hdslb.com/bfs/face/3f2d64f048b39fb6c26f3db39df47e6080ec0f9c.png",
          "image_small": "https://i0.hdslb.com/bfs/face/90c35d41d8a19b19474d6bac672394c17b444ce8.png",
          "level": "高级勋章",
          "condition": "所有自制视频总播放数>=50万"
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
          "tv_due_date": 0,
          "avatar_icon": {
            "icon_resource": {}
          },
          "vipType": 1,
          "vipStatus": 0
        },
        "is_senior_member": 0,
        "name_render": null
      },
      "space": {
        "s_img": "http://i1.hdslb.com/bfs/activity-plat/static/LRjqHhi0wL.png",
        "l_img": "http://i1.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png"
      },
      "following": false,
      "archive_count": 382,
      "article_count": 0,
      "follower": 64052,
      "like_num": 1048712
    },
    "Tags": [
      {
        "tag_id": 0,
        "tag_name": "发现《Hop》",
        "music_id": "MA407124762800730394",
        "tag_type": "bgm",
        "jump_url": "https://music.bilibili.com/h5/music-detail?music_id=MA407124762800730394&cid=279786&aid=170001&na_close_hide=1"
      },
      {
        "tag_id": 117552,
        "tag_name": "保加利亚妖王",
        "music_id": "",
        "tag_type": "old_channel",
        "jump_url": ""
      },
      {
        "tag_id": 112503,
        "tag_name": "保加利亚",
        "music_id": "",
        "tag_type": "old_channel",
        "jump_url": ""
      },
      {
        "tag_id": 2958988,
        "tag_name": "Азис",
        "music_id": "",
        "tag_type": "old_channel",
        "jump_url": ""
      },
      {
        "tag_id": 2622213,
        "tag_name": "azis",
        "music_id": "",
        "tag_type": "old_channel",
        "jump_url": ""
      },
      {
        "tag_id": 2512079,
        "tag_name": "mv",
        "music_id": "",
        "tag_type": "old_channel",
        "jump_url": ""
      }
    ],
    "Reply": {
      "page": null,
      "replies": [
        {
          "rpid": 1,
          "oid": 0,
          "type": 0,
          "mid": 0,
          "root": 0,
          "parent": 0,
          "dialog": 0,
          "count": 0,
          "rcount": 0,
          "state": 0,
          "fansgrade": 0,
          "attr": 0,
          "ctime": 0,
          "like": 0,
          "action": 0,
          "content": null,
          "replies": null,
          "assist": 0,
          "show_follow": false
        }
      ]
    },
    "Related": [
      {
        "aid": 1252180876,
        "videos": 1,
        "tid": 130,
        "tname": "音乐综合",
        "copyright": 2,
        "pic": "http://i2.hdslb.com/bfs/archive/5a4eef19e38a3fa27f9db53cc45e7233e714ae03.jpg",
        "title": "Ricardo Milos - Dancin song [1080p]",
        "pubdate": 1711002767,
        "ctime": 1711002768,
        "desc": "https://www.youtube.com/watch?v=e9ASqhs9770",
        "state": 0,
        "duration": 259,
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
          "mid": 477132,
          "name": "TAKERA",
          "face": "https://i0.hdslb.com/bfs/face/5af8b319889ba7a7d20ac59edb8464d65f43c1e1.gif"
        },
        "stat": {
          "aid": 1252180876,
          "view": 1590321,
          "danmaku": 2766,
          "reply": 2405,
          "favorite": 58654,
          "coin": 13468,
          "share": 15966,
          "now_rank": 0,
          "his_rank": 0,
          "like": 144640,
          "dislike": 0,
          "vt": 0,
          "vv": 1590321,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "",
        "cid": 1483741030,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1hJ4m177RN",
        "first_frame": "http://i0.hdslb.com/bfs/storyff/n240327ad1t4c11o1bbzfc2bkvg5fkuc_firsti.jpg",
        "pub_location": "中国香港",
        "cover43": "",
        "tidv2": 2036,
        "tnamev2": "舞蹈综合",
        "pid_v2": 1004,
        "pid_name_v2": "舞蹈",
        "bvid": "BV1hJ4m177RN",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 1252180876,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 80433022,
        "videos": 1,
        "tid": 193,
        "tname": "MV",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/5242750857121e05146d5d5b13a47a2a6dd36e98.jpg",
        "title": "【官方 MV】Never Gonna Give You Up - Rick Astley",
        "pubdate": 1577835803,
        "ctime": 1577835803,
        "desc": "-",
        "state": 0,
        "duration": 213,
        "rights": {
          "bp": 0,
          "elec": 0,
          "download": 0,
          "movie": 0,
          "pay": 0,
          "hd5": 1,
          "no_reprint": 0,
          "autoplay": 0,
          "ugc_pay": 0,
          "is_cooperation": 0,
          "ugc_pay_preview": 0,
          "no_background": 1,
          "arc_pay": 0,
          "pay_free_watch": 0
        },
        "owner": {
          "mid": 486906719,
          "name": "索尼音乐中国",
          "face": "https://i2.hdslb.com/bfs/face/6bc95d0670863d36bf9167a37b825c39ce258506.jpg"
        },
        "stat": {
          "aid": 80433022,
          "view": 91790223,
          "danmaku": 128050,
          "reply": 170137,
          "favorite": 1286326,
          "coin": 1061915,
          "share": 396054,
          "now_rank": 0,
          "his_rank": 0,
          "like": 2464595,
          "dislike": 0,
          "vt": 0,
          "vv": 91790223,
          "fav_g": 10,
          "like_g": 0
        },
        "dynamic": "",
        "cid": 137649199,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1GJ411x7h7",
        "up_from_v2": 15,
        "pub_location": "未知",
        "cover43": "",
        "tidv2": 2017,
        "tnamev2": "MV",
        "pid_v2": 1003,
        "pid_name_v2": "音乐",
        "bvid": "BV1GJ411x7h7",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 80433022,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
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
          "face": "https://i1.hdslb.com/bfs/face/5566e3a4786959527a72545f908b5664693a2945.jpg"
        },
        "stat": {
          "aid": 718913090,
          "view": 315224,
          "danmaku": 195,
          "reply": 462,
          "favorite": 2897,
          "coin": 702,
          "share": 202,
          "now_rank": 0,
          "his_rank": 0,
          "like": 15615,
          "dislike": 0,
          "vt": 0,
          "vv": 315224,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "咩栗，不可以。",
        "cid": 436835160,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV14Q4y1S7HU",
        "first_frame": "http://i0.hdslb.com/bfs/storyff/n211105a23d8ue6bh0m1ed1cu6yztac5_firsti.jpg",
        "cover43": "",
        "tidv2": 2047,
        "tnamev2": "虚拟UP主",
        "pid_v2": 1005,
        "pid_name_v2": "二次元",
        "bvid": "BV14Q4y1S7HU",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 718913090,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 895258574,
        "videos": 2,
        "tid": 130,
        "tname": "音乐综合",
        "copyright": 2,
        "pic": "http://i2.hdslb.com/bfs/archive/b94b8be43cd0a9a12bf1a334541b017a3bd24cb6.jpg",
        "title": "【全弹幕】av10388 武器A",
        "pubdate": 1648906567,
        "ctime": 1648906567,
        "desc": "sm9307581\n武器A\n[日常]UP主：博丽·灵梦（UID：13308）\n播放:1605344 | 收藏:20926 | 弹幕:42522\n投稿时间：2010/06/20 10:13\n啊哈哈哈，啊哈哈，啊哈，啊……总之就是武器……",
        "state": 0,
        "duration": 144,
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
          "mid": 104657830,
          "name": "尚宜鼎MEMZ",
          "face": "https://i1.hdslb.com/bfs/face/6761798442c6e9607c62803ac4fa5fe4a3e7b25b.jpg"
        },
        "stat": {
          "aid": 895258574,
          "view": 3769820,
          "danmaku": 22377,
          "reply": 2776,
          "favorite": 12271,
          "coin": 484,
          "share": 3748,
          "now_rank": 0,
          "his_rank": 0,
          "like": 47622,
          "dislike": 0,
          "vt": 0,
          "vv": 3769820,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "",
        "cid": 1491314436,
        "dimension": {
          "width": 2848,
          "height": 1600,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1NP4y1K7Ze",
        "first_frame": "http://i0.hdslb.com/bfs/storyff/n240402sa2muwqb7q7sbvedoskth1279_firsti.jpg",
        "pub_location": "广东",
        "cover43": "",
        "tidv2": 2041,
        "tnamev2": "动漫剪辑",
        "pid_v2": 1005,
        "pid_name_v2": "二次元",
        "bvid": "BV1NP4y1K7Ze",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 895258574,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 56927206,
        "videos": 1,
        "tid": 138,
        "tname": "搞笑",
        "copyright": 2,
        "pic": "http://i2.hdslb.com/bfs/archive/fd8324a72f0c6629f6d9b6af0daa11d950863993.jpg",
        "title": "【每天一遍，网抑再见】万恶之源，抖就完事了",
        "pubdate": 1561555314,
        "ctime": 1561555314,
        "desc": "【带字幕版】本人亲自翻译\nBGM：coincidance \n有些人看着看着就抖起来了，别说了，护士姐姐真漂亮\nhttps://www.youtube.com/watch?v=nBHkIWAJitg&feature=share\n肩膀好了，就来摇头吧\nav65659850",
        "state": 0,
        "duration": 139,
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
          "mid": 34232005,
          "name": "200斤的五条艾",
          "face": "https://i1.hdslb.com/bfs/face/5135289ba858105ae466429ba9610e7980cf73f0.jpg"
        },
        "stat": {
          "aid": 56927206,
          "view": 43534329,
          "danmaku": 77687,
          "reply": 19894,
          "favorite": 1584517,
          "coin": 721148,
          "share": 563420,
          "now_rank": 0,
          "his_rank": 15,
          "like": 2118557,
          "dislike": 0,
          "vt": 0,
          "vv": 43534329,
          "fav_g": 3,
          "like_g": 0
        },
        "dynamic": "#沙雕##搞笑视频##魔性#",
        "cid": 99428737,
        "dimension": {
          "width": 960,
          "height": 720,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1Ax411d7jD",
        "up_from_v2": 11,
        "cover43": "",
        "tidv2": 2059,
        "tnamev2": "鬼畜调教",
        "pid_v2": 1007,
        "pid_name_v2": "鬼畜",
        "bvid": "BV1Ax411d7jD",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 56927206,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 3643130,
        "videos": 1,
        "tid": 138,
        "tname": "搞笑",
        "copyright": 2,
        "pic": "http://i1.hdslb.com/bfs/archive/bc23ac6f17c82700d5c1941e0991bc8a6fcbd46c.png",
        "title": "金坷垃原版",
        "pubdate": 1453518942,
        "ctime": 1497431869,
        "desc": "http://v.youku.com/v_show/id_XNTkzMDUxNzI0.html?from=y1.2-1-102.3.1-1.1-1-1-0-0#paction 给知道金坷垃的孩子们补补课",
        "state": 0,
        "duration": 101,
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
          "mid": 11374676,
          "name": "LX秦先生",
          "face": "https://i2.hdslb.com/bfs/face/90a808cdd9414d5f53e04d85b8929333eb61f474.jpg"
        },
        "stat": {
          "aid": 3643130,
          "view": 11110768,
          "danmaku": 29385,
          "reply": 7168,
          "favorite": 287656,
          "coin": 61435,
          "share": 190334,
          "now_rank": 0,
          "his_rank": 0,
          "like": 379164,
          "dislike": 0,
          "vt": 0,
          "vv": 11110768,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "",
        "cid": 5827830,
        "dimension": {
          "width": 640,
          "height": 354,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1Rs411R7Hi",
        "cover43": "",
        "tidv2": 2059,
        "tnamev2": "鬼畜调教",
        "pid_v2": 1007,
        "pid_name_v2": "鬼畜",
        "bvid": "BV1Rs411R7Hi",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 3643130,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 1601123876,
        "videos": 1,
        "tid": 130,
        "tname": "音乐综合",
        "copyright": 1,
        "pic": "http://i0.hdslb.com/bfs/archive/bc7442c6c54ef573ebe0455104ad87703703fad5.jpg",
        "title": "「保加利亚妖王」Hop - Azis 阿吉斯 百万级装备试听【Hi-Res】",
        "pubdate": 1709023713,
        "ctime": 1709023713,
        "desc": "作词 : Azis\n作曲 : Azis\n\n\n\n音响：天朗皇家西敏寺\n功放：麦景图 \n录音MIC：纽曼149 \n录音设备：SSL+ Protools",
        "state": 0,
        "duration": 189,
        "mission_id": 4009709,
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
          "mid": 440121192,
          "name": "JLRS日落fm",
          "face": "https://i0.hdslb.com/bfs/face/008f2cf802f48e1d7f837887a3cefd95b918a0e5.jpg"
        },
        "stat": {
          "aid": 1601123876,
          "view": 549485,
          "danmaku": 1576,
          "reply": 1569,
          "favorite": 7872,
          "coin": 5056,
          "share": 4117,
          "now_rank": 0,
          "his_rank": 0,
          "like": 22458,
          "dislike": 0,
          "vt": 0,
          "vv": 549485,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "还记得这位妖王吗？",
        "cid": 1452568619,
        "dimension": {
          "width": 3840,
          "height": 2160,
          "rotate": 0
        },
        "season_id": 4499678,
        "short_link_v2": "https://b23.tv/BV1e1421f7rA",
        "first_frame": "http://i2.hdslb.com/bfs/storyff/n240227sauzmn6l1y49t5cjnklc5tyvk_firsti.jpg",
        "pub_location": "吉林",
        "cover43": "",
        "tidv2": 2024,
        "tnamev2": "电台·歌单",
        "pid_v2": 1003,
        "pid_name_v2": "音乐",
        "bvid": "BV1e1421f7rA",
        "season_type": 1,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 1601123876,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 1581914,
        "videos": 1,
        "tid": 130,
        "tname": "音乐综合",
        "copyright": 2,
        "pic": "http://i2.hdslb.com/bfs/archive/7437f19df1061f4a9cd2972b81dbd3a6723bf74c.jpg",
        "title": "妖王都开始男人了，怎么办！",
        "pubdate": 1412259320,
        "ctime": 1497428704,
        "desc": "音悦台 保加利亚妖男Azis /Азис携手流行男歌手Giorgos Tsalikis/Тсаликис 最新单曲 Estar Loco /Полудяваме\n纯爷们，男人就该干男人，该干的事。",
        "state": 0,
        "duration": 227,
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
          "mid": 4685783,
          "name": "FoolishJoker",
          "face": "https://i2.hdslb.com/bfs/face/a81786a76af0cbd6d7e35adc488ccc22b0030d72.jpg"
        },
        "stat": {
          "aid": 1581914,
          "view": 2303678,
          "danmaku": 5815,
          "reply": 6856,
          "favorite": 28958,
          "coin": 5696,
          "share": 14014,
          "now_rank": 0,
          "his_rank": 0,
          "like": 24255,
          "dislike": 0,
          "vt": 0,
          "vv": 2303678,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "",
        "cid": 2403522,
        "dimension": {
          "width": 640,
          "height": 360,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1gx411P77L",
        "up_from_v2": 8,
        "cover43": "",
        "tidv2": 2027,
        "tnamev2": "音乐综合",
        "pid_v2": 1003,
        "pid_name_v2": "音乐",
        "bvid": "BV1gx411P77L",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 1581914,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 31130726,
        "videos": 1,
        "tid": 130,
        "tname": "音乐综合",
        "copyright": 2,
        "pic": "http://i0.hdslb.com/bfs/archive/e9755c62c5a38ec352e424aa0d7d20417c1a3fde.jpg",
        "title": "PPAP原版完整视频",
        "pubdate": 1536122369,
        "ctime": 1536122367,
        "desc": "视频时长令强迫症不爽（我故意的）",
        "state": 0,
        "duration": 121,
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
          "mid": 180305935,
          "name": "不懂事的记忆",
          "face": "https://i1.hdslb.com/bfs/face/7c1510f2fc8911cf885c9b14a94a99db738813c2.jpg"
        },
        "stat": {
          "aid": 31130726,
          "view": 3810989,
          "danmaku": 5269,
          "reply": 2587,
          "favorite": 76845,
          "coin": 7721,
          "share": 21117,
          "now_rank": 0,
          "his_rank": 0,
          "like": 122042,
          "dislike": 0,
          "vt": 0,
          "vv": 3810989,
          "fav_g": 8,
          "like_g": 0
        },
        "dynamic": "",
        "cid": 54379754,
        "dimension": {
          "width": 640,
          "height": 360,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1BW411Z7J3",
        "up_from_v2": 8,
        "cover43": "",
        "tidv2": 2027,
        "tnamev2": "音乐综合",
        "pid_v2": 1003,
        "pid_name_v2": "音乐",
        "bvid": "BV1BW411Z7J3",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 31130726,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 675490509,
        "videos": 1,
        "tid": 138,
        "tname": "搞笑",
        "copyright": 2,
        "pic": "http://i1.hdslb.com/bfs/archive/58f8f3c8dfcf3b1ac6cf7a7b0eda660aa2e1e1fc.jpg",
        "title": "奥地利美术生就业经历",
        "pubdate": 1631273645,
        "ctime": 1631272999,
        "desc": "https://m.youtube.com/watch?v=h7s410TPnWg",
        "state": 0,
        "duration": 128,
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
          "mid": 489656132,
          "name": "古米廖夫",
          "face": "https://i2.hdslb.com/bfs/face/633ed3ba1ec5bcde5db105849c2498b03f6b7eee.jpg"
        },
        "stat": {
          "aid": 675490509,
          "view": 40823108,
          "danmaku": 48676,
          "reply": 12360,
          "favorite": 952804,
          "coin": 557605,
          "share": 256173,
          "now_rank": 0,
          "his_rank": 0,
          "like": 1531015,
          "dislike": 0,
          "vt": 0,
          "vv": 40823108,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "",
        "cid": 405970117,
        "dimension": {
          "width": 1280,
          "height": 720,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1jU4y1N7vg",
        "up_from_v2": 35,
        "first_frame": "http://i1.hdslb.com/bfs/storyff/n210910a2u7yjx97xzec435kyzziyn8s_firsti.jpg",
        "pub_location": "黑龙江",
        "cover43": "",
        "tidv2": 2060,
        "tnamev2": "鬼畜剧场",
        "pid_v2": 1007,
        "pid_name_v2": "鬼畜",
        "bvid": "BV1jU4y1N7vg",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 675490509,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 44501,
        "videos": 1,
        "tid": 26,
        "tname": "音MAD",
        "copyright": 2,
        "pic": "http://i0.hdslb.com/bfs/archive/1dff881735a73cdc4757237e45eff03d42c81137.jpg",
        "title": "久本雅美の頭がカービィのBGMに合わせて爆発したようです",
        "pubdate": 1293118092,
        "ctime": 1497366357,
        "desc": "sm6999999 恭请四代御本尊様，45秒后大量召唤三色弹幕，顺带头像同步测试┗(＾o＾ )┓",
        "state": 0,
        "duration": 72,
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
          "mid": 59948,
          "name": "高興帝",
          "face": "http://i2.hdslb.com/bfs/face/68a4fb8cf9442f0db277d58a9dbccbf02eacdad4.jpg"
        },
        "stat": {
          "aid": 44501,
          "view": 2450853,
          "danmaku": 16774,
          "reply": 5627,
          "favorite": 25342,
          "coin": 3316,
          "share": 3531,
          "now_rank": 0,
          "his_rank": 0,
          "like": 47552,
          "dislike": 0,
          "vt": 0,
          "vv": 2450853,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "",
        "cid": 74884,
        "dimension": {
          "width": 480,
          "height": 360,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1Bx411c7NF",
        "cover43": "",
        "tidv2": 2062,
        "tnamev2": "音MAD",
        "pid_v2": 1007,
        "pid_name_v2": "鬼畜",
        "bvid": "BV1Bx411c7NF",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 44501,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 1706416465,
        "videos": 1,
        "tid": 193,
        "tname": "MV",
        "copyright": 2,
        "pic": "http://i2.hdslb.com/bfs/archive/2365889cfca6e33566104487604138906a610c59.jpg",
        "title": "【4K珍藏】诈骗神曲《Never Gonna Give You Up》！愿者上钩！",
        "pubdate": 1723457882,
        "ctime": 1723042776,
        "desc": "《‌Never Gonna Give You Up》‌这首歌曲发行于1987年11月16日。‌这首歌曲由Rick Astley演唱，‌并收录于他的专辑《‌Whenever You Need Somebody》‌中。",
        "state": 0,
        "duration": 213,
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
          "mid": 2043250564,
          "name": "4K音乐馆",
          "face": "https://i1.hdslb.com/bfs/face/4be964615e70e18ab469e4403cb0fa320f8d2fdc.jpg"
        },
        "stat": {
          "aid": 1706416465,
          "view": 1001774,
          "danmaku": 1150,
          "reply": 1204,
          "favorite": 20440,
          "coin": 2354,
          "share": 12072,
          "now_rank": 0,
          "his_rank": 0,
          "like": 28749,
          "dislike": 0,
          "vt": 0,
          "vv": 1001774,
          "fav_g": 38,
          "like_g": 0
        },
        "dynamic": "",
        "cid": 1641702404,
        "dimension": {
          "width": 3840,
          "height": 2160,
          "rotate": 0
        },
        "season_id": 257515,
        "short_link_v2": "https://b23.tv/BV1UT42167xb",
        "first_frame": "http://i1.hdslb.com/bfs/storyff/n240807sa3h3ta5x4y8t48d3i1ld43yn_firsti.jpg",
        "pub_location": "山东",
        "cover43": "",
        "tidv2": 2017,
        "tnamev2": "MV",
        "pid_v2": 1003,
        "pid_name_v2": "音乐",
        "bvid": "BV1UT42167xb",
        "season_type": 1,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 1706416465,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 70025529,
        "videos": 1,
        "tid": 130,
        "tname": "音乐综合",
        "copyright": 2,
        "pic": "http://i0.hdslb.com/bfs/archive/49948624e5b18fda60ec255eeffe9fb86e2a73a0.jpg",
        "title": "大悲咒（高品质珍藏版）",
        "pubdate": 1570435422,
        "ctime": 1570183927,
        "desc": "净化心情，佛祖保佑，大吉大利！！！",
        "state": 0,
        "duration": 1792,
        "rights": {
          "bp": 0,
          "elec": 0,
          "download": 0,
          "movie": 0,
          "pay": 0,
          "hd5": 1,
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
          "mid": 362819520,
          "name": "抹茶牛油果",
          "face": "http://i0.hdslb.com/bfs/face/3b2571027baef2a954c2fc1b5473ed609ef00fb3.jpg"
        },
        "stat": {
          "aid": 70025529,
          "view": 15194194,
          "danmaku": 126652,
          "reply": 36609,
          "favorite": 447623,
          "coin": 115299,
          "share": 201225,
          "now_rank": 0,
          "his_rank": 0,
          "like": 432430,
          "dislike": 0,
          "vt": 0,
          "vv": 15194194,
          "fav_g": 49,
          "like_g": 0
        },
        "dynamic": "#大悲咒##高音质##循环#",
        "cid": 121325699,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1XE411S7Ew",
        "cover43": "",
        "tidv2": 2192,
        "tnamev2": "疗愈成长",
        "pid_v2": 1028,
        "pid_name_v2": "神秘学",
        "bvid": "BV1XE411S7Ew",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 70025529,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 827984205,
        "videos": 1,
        "tid": 193,
        "tname": "MV",
        "copyright": 2,
        "pic": "http://i1.hdslb.com/bfs/archive/ffacd250c10ca7cea1a665e89b691b3b7b837587.jpg",
        "title": "燃!保加利亚妖王2023新歌MV!",
        "pubdate": 1688208848,
        "ctime": 1688208848,
        "desc": "youtube\n保加利亚妖王azis新歌mv",
        "state": 0,
        "duration": 225,
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
          "mid": 1295732260,
          "name": "蒂尼黄DiniHuang",
          "face": "https://i1.hdslb.com/bfs/face/71cc994f3b717fb64dec53cab8b825b471f3886a.jpg"
        },
        "stat": {
          "aid": 827984205,
          "view": 168546,
          "danmaku": 188,
          "reply": 343,
          "favorite": 851,
          "coin": 79,
          "share": 2315,
          "now_rank": 0,
          "his_rank": 0,
          "like": 4373,
          "dislike": 0,
          "vt": 0,
          "vv": 168546,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "",
        "cid": 1181623685,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV19g4y1A7xq",
        "up_from_v2": 8,
        "first_frame": "http://i0.hdslb.com/bfs/storyff/n230701qn3tfuifpjvvh0e2pctwqbkep_firsti.jpg",
        "pub_location": "上海",
        "cover43": "",
        "tidv2": 2017,
        "tnamev2": "MV",
        "pid_v2": 1003,
        "pid_name_v2": "音乐",
        "bvid": "BV19g4y1A7xq",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 827984205,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 80573606,
        "videos": 1,
        "tid": 29,
        "tname": "音乐现场",
        "copyright": 2,
        "pic": "http://i0.hdslb.com/bfs/archive/b0433e71df7f856cf1a45a926361661eca28b8fb.jpg",
        "title": "满级大佬屠杀新手村",
        "pubdate": 1577243562,
        "ctime": 1577243562,
        "desc": "YouTube\n\n*《She Taught Me How to Yodel》\n\n约德尔唱法（Yodeling）是瑞士阿尔卑斯山区的一种特殊唱法，采用真假声迅速切换的方式演唱。“约德尔”，在当地方言中是“树林歌唱”的意思，因此有时也将其翻译为“woods sing”。\n\n小女孩叫Sofia Shkidchenko，演唱于乌克兰达人秀，她有自己的油管频道可以去订阅哦～\n\n自己也没想到随手上传的个视频突然播放量这么多，不是专业的搬运博主，此视频留作纪念，但更新随缘啦。祝大家万事如意。",
        "state": 0,
        "duration": 126,
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
          "mid": 247412150,
          "name": "Ueroey",
          "face": "https://i2.hdslb.com/bfs/face/f8cef132ebaeac9da8c73ad52f6c53b7d1f74637.jpg"
        },
        "stat": {
          "aid": 80573606,
          "view": 62129265,
          "danmaku": 106580,
          "reply": 27081,
          "favorite": 1259191,
          "coin": 453054,
          "share": 189609,
          "now_rank": 0,
          "his_rank": 7,
          "like": 2766708,
          "dislike": 0,
          "vt": 0,
          "vv": 62129265,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "#音乐#",
        "cid": 137890032,
        "dimension": {
          "width": 638,
          "height": 312,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1LJ411W7Bo",
        "up_from_v2": 9,
        "pub_location": "浙江",
        "cover43": "",
        "tidv2": 2018,
        "tnamev2": "音乐现场",
        "pid_v2": 1003,
        "pid_name_v2": "音乐",
        "bvid": "BV1LJ411W7Bo",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 80573606,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
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
          "view": 65490009,
          "danmaku": 454078,
          "reply": 47875,
          "favorite": 1008732,
          "coin": 445010,
          "share": 783444,
          "now_rank": 0,
          "his_rank": 2,
          "like": 1912992,
          "dislike": 0,
          "vt": 0,
          "vv": 65490009,
          "fav_g": 24,
          "like_g": 0
        },
        "dynamic": "",
        "cid": 172423516,
        "dimension": {
          "width": 1280,
          "height": 720,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1NZ4y1j7nw",
        "cover43": "",
        "tidv2": 2059,
        "tnamev2": "鬼畜调教",
        "pid_v2": 1007,
        "pid_name_v2": "鬼畜",
        "bvid": "BV1NZ4y1j7nw",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 370010949,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 161596,
        "videos": 1,
        "tid": 21,
        "tname": "日常",
        "copyright": 2,
        "pic": "http://i2.hdslb.com/bfs/archive/90bc3229e862994ac021a5f0894f232bc49b36bf.jpg",
        "title": "据说80%的男生都听过这段音乐，有木有？",
        "pubdate": 1319379031,
        "ctime": 1497399731,
        "desc": "据说男生都听过，为啥我没有呢？ ",
        "state": 0,
        "duration": 0,
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
          "mid": 211322,
          "name": "卍解←死神",
          "face": "https://i2.hdslb.com/bfs/face/2cb86d5f33a409732e4a0dcc7cda70bc8c199a7f.jpg"
        },
        "stat": {
          "aid": 161596,
          "view": 576962,
          "danmaku": 1042,
          "reply": 1638,
          "favorite": 6576,
          "coin": 227,
          "share": 931,
          "now_rank": 0,
          "his_rank": 612,
          "like": 9845,
          "dislike": 0,
          "vt": 0,
          "vv": 576962,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "",
        "cid": 266868,
        "dimension": {
          "width": 448,
          "height": 336,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1Nx411w7tR",
        "cover43": "",
        "tidv2": 2027,
        "tnamev2": "音乐综合",
        "pid_v2": 1003,
        "pid_name_v2": "音乐",
        "bvid": "BV1Nx411w7tR",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 161596,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 112699505707398,
        "videos": 1,
        "tid": 22,
        "tname": "鬼畜调教",
        "copyright": 1,
        "pic": "http://i0.hdslb.com/bfs/archive/54c8218801e90a957e67541ea7d76e6d310614fe.jpg",
        "title": "【范小勤】HOP",
        "pubdate": 1719658405,
        "ctime": 1719658405,
        "desc": "",
        "state": 0,
        "duration": 200,
        "mission_id": 1729431,
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
          "mid": 40488241,
          "name": "帅气的五岁少年",
          "face": "https://i1.hdslb.com/bfs/face/0438443dd2bbb2fe1b46aa1d2134745f8d9f26c8.jpg"
        },
        "stat": {
          "aid": 112699505707398,
          "view": 47395,
          "danmaku": 176,
          "reply": 125,
          "favorite": 566,
          "coin": 242,
          "share": 1366,
          "now_rank": 0,
          "his_rank": 0,
          "like": 1598,
          "dislike": 0,
          "vt": 0,
          "vv": 47395,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "",
        "cid": 500001599795260,
        "dimension": {
          "width": 1440,
          "height": 1080,
          "rotate": 0
        },
        "season_id": 3617308,
        "short_link_v2": "https://b23.tv/BV1J63veXEvH",
        "first_frame": "http://i1.hdslb.com/bfs/storyff/n240629sabnqqnvswrfyh2h8capwsas5_firsti.jpg",
        "pub_location": "上海",
        "cover43": "",
        "tidv2": 2059,
        "tnamev2": "鬼畜调教",
        "pid_v2": 1007,
        "pid_name_v2": "鬼畜",
        "bvid": "BV1J63veXEvH",
        "season_type": 1,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 112699505707398,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 345957866,
        "videos": 1,
        "tid": 193,
        "tname": "MV",
        "copyright": 2,
        "pic": "http://i2.hdslb.com/bfs/archive/2327de6051626e9f263e265805cbb1be3a05ad8d.jpg",
        "title": "【越南神曲】-《Kẻ Cắp Gặp Bà Già 》！终于找到原版了！",
        "pubdate": 1664102700,
        "ctime": 1664027264,
        "desc": "提到「越南电音」，大家可能会感到比较陌生，甚至摸不着头脑。 事实上，越南电音已经席卷国内短视频平台，没有人可以逃过它的轰炸。  音乐一开，无人不嗨～",
        "state": 0,
        "duration": 234,
        "rights": {
          "bp": 0,
          "elec": 0,
          "download": 0,
          "movie": 0,
          "pay": 0,
          "hd5": 0,
          "no_reprint": 0,
          "autoplay": 0,
          "ugc_pay": 0,
          "is_cooperation": 0,
          "ugc_pay_preview": 0,
          "no_background": 0,
          "arc_pay": 0,
          "pay_free_watch": 0
        },
        "owner": {
          "mid": 2043250564,
          "name": "4K音乐馆",
          "face": "https://i1.hdslb.com/bfs/face/4be964615e70e18ab469e4403cb0fa320f8d2fdc.jpg"
        },
        "stat": {
          "aid": 345957866,
          "view": 8519264,
          "danmaku": 3892,
          "reply": 3755,
          "favorite": 143914,
          "coin": 9867,
          "share": 8152,
          "now_rank": 0,
          "his_rank": 0,
          "like": 136218,
          "dislike": 0,
          "vt": 0,
          "vv": 8519264,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "",
        "cid": 842321779,
        "dimension": {
          "width": 3840,
          "height": 2160,
          "rotate": 0
        },
        "season_id": 725909,
        "short_link_v2": "https://b23.tv/BV1Ud4y1M7C7",
        "first_frame": "http://i1.hdslb.com/bfs/storyff/n220924qn371jsgk4te6781w32102ovo_firsti.jpg",
        "pub_location": "山东",
        "cover43": "",
        "tidv2": 2017,
        "tnamev2": "MV",
        "pid_v2": 1003,
        "pid_name_v2": "音乐",
        "bvid": "BV1Ud4y1M7C7",
        "season_type": 1,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 345957866,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
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
          "face": "https://i2.hdslb.com/bfs/face/edf6a0ae7dfe9adb5e8d5e813a69455554931c73.jpg"
        },
        "stat": {
          "aid": 456093155,
          "view": 1432473,
          "danmaku": 3867,
          "reply": 1839,
          "favorite": 14907,
          "coin": 7949,
          "share": 5164,
          "now_rank": 0,
          "his_rank": 0,
          "like": 75832,
          "dislike": 0,
          "vt": 0,
          "vv": 1432473,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "",
        "cid": 204234033,
        "dimension": {
          "width": 3840,
          "height": 2160,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1r5411W71r",
        "cover43": "",
        "tidv2": 2021,
        "tnamev2": "演奏",
        "pid_v2": 1003,
        "pid_name_v2": "音乐",
        "bvid": "BV1r5411W71r",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 456093155,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 88379669,
        "videos": 1,
        "tid": 138,
        "tname": "搞笑",
        "copyright": 1,
        "pic": "http://i0.hdslb.com/bfs/archive/44deb7e35de1c0d19fc79e6f838ad334585755f6.jpg",
        "title": "当你怂恿网课老师放HOP",
        "pubdate": 1581481509,
        "ctime": 1581481509,
        "desc": "我受不了了我要笑死了\n网课欢乐多",
        "state": 0,
        "duration": 131,
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
          "mid": 8307655,
          "name": "-Holog-",
          "face": "https://i1.hdslb.com/bfs/face/797edf7cf269bdf89d1deb46b2b5068e65920b88.jpg"
        },
        "stat": {
          "aid": 88379669,
          "view": 1553672,
          "danmaku": 5349,
          "reply": 1662,
          "favorite": 7998,
          "coin": 2519,
          "share": 6023,
          "now_rank": 0,
          "his_rank": 0,
          "like": 57979,
          "dislike": 0,
          "vt": 0,
          "vv": 1553672,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "#保加利亚妖王##搞笑视频##HOP#\n把害怕打在公屏上_(:з」∠)_",
        "cid": 150977310,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1D7411G76q",
        "up_from_v2": 8,
        "cover43": "",
        "tidv2": 2207,
        "tnamev2": "随拍·综合",
        "pid_v2": 1032,
        "pid_name_v2": "其他",
        "bvid": "BV1D7411G76q",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 88379669,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 752882938,
        "videos": 1,
        "tid": 21,
        "tname": "日常",
        "copyright": 1,
        "pic": "http://i0.hdslb.com/bfs/archive/f5a60b4edaef1b44faab4ffc47384843a7d47c56.jpg",
        "title": "【av100000000】b站视频破亿了！第一亿个视频十小时循环（补档）",
        "pubdate": 1588142976,
        "ctime": 1588142976,
        "desc": "【av100000000】b站视频破亿了！第一亿个视频十小时循环（补档）\nBV1y7411Q743/av100000000",
        "state": 0,
        "duration": 36000,
        "mission_id": 13243,
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
          "mid": 382043832,
          "name": "輝夜姬想讓人告白",
          "face": "https://i0.hdslb.com/bfs/face/647d2a40ac51b8e1379d6c46c64f5a8e28b269ab.jpg"
        },
        "stat": {
          "aid": 752882938,
          "view": 161614,
          "danmaku": 357,
          "reply": 497,
          "favorite": 1217,
          "coin": 165,
          "share": 166,
          "now_rank": 0,
          "his_rank": 0,
          "like": 4623,
          "dislike": 0,
          "vt": 0,
          "vv": 161614,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "#B站##BILIBILI##哔哩哔哩#",
        "cid": 184673331,
        "dimension": {
          "width": 960,
          "height": 600,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1Yk4y1r7g2",
        "cover43": "",
        "tidv2": 2207,
        "tnamev2": "随拍·综合",
        "pid_v2": 1032,
        "pid_name_v2": "其他",
        "bvid": "BV1Yk4y1r7g2",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 752882938,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 676186170,
        "videos": 1,
        "tid": 193,
        "tname": "MV",
        "copyright": 2,
        "pic": "http://i1.hdslb.com/bfs/archive/24e8bd7eb31bbc142cd2676d28efa4c45c06bc33.jpg",
        "title": "【4K60FPS】查理·普斯《See You Again》爆火神曲！珍惜身边的人！",
        "pubdate": 1634983053,
        "ctime": 1634983053,
        "desc": "官方MV\n原盘提取制作，进行了部分调整\n中英文双语字幕制作，自己双语翻译\n《See You Again》是由美国说唱歌手维兹·卡利法与歌手查理·普斯合作演唱的一首歌曲\n这首歌，我想不用多说了，因为太多人点这首歌了\n希望大家珍惜身边的人",
        "state": 0,
        "duration": 229,
        "rights": {
          "bp": 0,
          "elec": 0,
          "download": 0,
          "movie": 0,
          "pay": 0,
          "hd5": 0,
          "no_reprint": 0,
          "autoplay": 0,
          "ugc_pay": 0,
          "is_cooperation": 0,
          "ugc_pay_preview": 0,
          "no_background": 0,
          "arc_pay": 0,
          "pay_free_watch": 0
        },
        "owner": {
          "mid": 229733301,
          "name": "音乐私藏馆",
          "face": "https://i0.hdslb.com/bfs/face/91a6526445f61e2d491523242b532d5e76f0435a.jpg"
        },
        "stat": {
          "aid": 676186170,
          "view": 19331747,
          "danmaku": 55418,
          "reply": 19047,
          "favorite": 459123,
          "coin": 125647,
          "share": 58270,
          "now_rank": 0,
          "his_rank": 30,
          "like": 560583,
          "dislike": 0,
          "vt": 0,
          "vv": 19331747,
          "fav_g": 208,
          "like_g": 0
        },
        "dynamic": "",
        "cid": 429657756,
        "dimension": {
          "width": 3840,
          "height": 2160,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1qU4y1F73A",
        "first_frame": "http://i1.hdslb.com/bfs/storyff/n211023qn35uju26iwo4pw2enpricqvy_firsti.jpg",
        "pub_location": "陕西",
        "cover43": "",
        "tidv2": 2017,
        "tnamev2": "MV",
        "pid_v2": 1003,
        "pid_name_v2": "音乐",
        "bvid": "BV1qU4y1F73A",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 676186170,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 11841799,
        "videos": 1,
        "tid": 236,
        "tname": "竞技体育",
        "copyright": 2,
        "pic": "http://i2.hdslb.com/bfs/archive/20b223c72345a544272f70014f3a9ce2e30b39c8.jpg",
        "title": "【万恶之源】游泳教练原视频",
        "pubdate": 1499056716,
        "ctime": 1499056716,
        "desc": "在网盘里翻出来的不知道有没有人上传过。不断地摸索和练习，你就学会了游泳\n其中重点不能上传，我试过一次了。",
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
          "mid": 25844288,
          "name": "希爾薇",
          "face": "https://i2.hdslb.com/bfs/face/67b49b90952cd64320432ae561e78e54ea3ecb53.jpg"
        },
        "stat": {
          "aid": 11841799,
          "view": 693786,
          "danmaku": 4253,
          "reply": 1097,
          "favorite": 20296,
          "coin": 2820,
          "share": 14821,
          "now_rank": 0,
          "his_rank": 0,
          "like": 13990,
          "dislike": 0,
          "vt": 0,
          "vv": 693786,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "",
        "cid": 19555184,
        "dimension": {
          "width": 352,
          "height": 288,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1ox411B7jr",
        "cover43": "",
        "tidv2": 2063,
        "tnamev2": "鬼畜综合",
        "pid_v2": 1007,
        "pid_name_v2": "鬼畜",
        "bvid": "BV1ox411B7jr",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 11841799,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 96842562,
        "videos": 1,
        "tid": 193,
        "tname": "MV",
        "copyright": 2,
        "pic": "http://i0.hdslb.com/bfs/archive/5c33d3957fee3dac7376ab12b3e9a2b595600d84.jpg",
        "title": "真正的冰雪女王",
        "pubdate": 1584448702,
        "ctime": 1584448702,
        "desc": "转载https://weibo.com/tv/v/FlXRiE62K?fid=1034:217aa2b6ddb0f47e65468914c7d2c9af\n妖王的歌简直可以洗涤灵魂",
        "state": 0,
        "duration": 219,
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
          "mid": 388982725,
          "name": "萌萌四海为家",
          "face": "https://i1.hdslb.com/bfs/face/f4ce35193db8743094a4efb4e00e97442244f2aa.jpg"
        },
        "stat": {
          "aid": 96842562,
          "view": 39902,
          "danmaku": 47,
          "reply": 32,
          "favorite": 372,
          "coin": 39,
          "share": 627,
          "now_rank": 0,
          "his_rank": 0,
          "like": 507,
          "dislike": 0,
          "vt": 0,
          "vv": 39902,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "#欧美MV##BGM##歌曲#",
        "cid": 165335972,
        "dimension": {
          "width": 480,
          "height": 360,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1V7411Z7HX",
        "cover43": "",
        "tidv2": 2017,
        "tnamev2": "MV",
        "pid_v2": 1003,
        "pid_name_v2": "音乐",
        "bvid": "BV1V7411Z7HX",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 96842562,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 84204989,
        "videos": 1,
        "tid": 267,
        "tname": "电台",
        "copyright": 1,
        "pic": "http://i0.hdslb.com/bfs/archive/c6533d1b6c9fcd3cd574a0117acaa4e5ddbe7fa4.jpg",
        "title": "【B站入站曲】（全站最清晰音质）",
        "pubdate": 1579462179,
        "ctime": 1579462179,
        "desc": "【B站音乐同名】本曲是本人使用Chrome+多种技术手段历时4个小时扒出的原曲，扒曲不易（如有异议请自行尝试即可知之），请多支持！",
        "state": 0,
        "duration": 131,
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
          "mid": 189708807,
          "name": "Yc云灿",
          "face": "https://i0.hdslb.com/bfs/face/c815a0c66ab6adbd208558a0fe25c59c6ee916fa.jpg"
        },
        "stat": {
          "aid": 84204989,
          "view": 113298,
          "danmaku": 2640,
          "reply": 426,
          "favorite": 6659,
          "coin": 1578,
          "share": 238,
          "now_rank": 0,
          "his_rank": 0,
          "like": 8192,
          "dislike": 0,
          "vt": 0,
          "vv": 113298,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "#2019##2019年度报告##年度报告#",
        "cid": 144036516,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV157411v76Z",
        "pub_location": "山西",
        "cover43": "",
        "tidv2": 2024,
        "tnamev2": "电台·歌单",
        "pid_v2": 1003,
        "pid_name_v2": "音乐",
        "bvid": "BV157411v76Z",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 84204989,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 45213203,
        "videos": 1,
        "tid": 138,
        "tname": "搞笑",
        "copyright": 1,
        "pic": "http://i0.hdslb.com/bfs/archive/1c73c8c16fe733568c3b6a5332c85be3ddc41acd.jpg",
        "title": "如果把极乐净土的背景音乐换成hop会怎么样",
        "pubdate": 1551585358,
        "ctime": 1551585358,
        "desc": "-",
        "state": 0,
        "duration": 222,
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
          "mid": 300015102,
          "name": "砂糖血块",
          "face": "https://i0.hdslb.com/bfs/face/77d73e4aa3fa669255be492596e02f1570f4fb5d.jpg"
        },
        "stat": {
          "aid": 45213203,
          "view": 521576,
          "danmaku": 4054,
          "reply": 867,
          "favorite": 12646,
          "coin": 12832,
          "share": 8799,
          "now_rank": 0,
          "his_rank": 0,
          "like": 31530,
          "dislike": 0,
          "vt": 0,
          "vv": 521576,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "",
        "cid": 79166580,
        "dimension": {
          "width": 1144,
          "height": 640,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1bb411B7dn",
        "cover43": "",
        "tidv2": 2036,
        "tnamev2": "舞蹈综合",
        "pid_v2": 1004,
        "pid_name_v2": "舞蹈",
        "bvid": "BV1bb411B7dn",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 45213203,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 66372123,
        "videos": 1,
        "tid": 21,
        "tname": "日常",
        "copyright": 1,
        "pic": "http://i2.hdslb.com/bfs/archive/a12315d2efc49f1862be996093c8076284719e43.jpg",
        "title": "学校食堂公然放HOP，这到底是人性的泯灭，还是道德的伦桑？",
        "pubdate": 1567398824,
        "ctime": 1567398825,
        "desc": "吃饭时的我惊呆了。。。",
        "state": 0,
        "duration": 61,
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
          "mid": 298061175,
          "name": "Dusk-氵夕",
          "face": "https://i0.hdslb.com/bfs/face/803bf620ead9c25168935e31797b25d51f2cb614.jpg"
        },
        "stat": {
          "aid": 66372123,
          "view": 270243,
          "danmaku": 238,
          "reply": 211,
          "favorite": 1443,
          "coin": 116,
          "share": 427,
          "now_rank": 0,
          "his_rank": 0,
          "like": 7846,
          "dislike": 0,
          "vt": 0,
          "vv": 270243,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "#自制##奇葩##HOP#",
        "cid": 115113475,
        "dimension": {
          "width": 1280,
          "height": 720,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV174411177w",
        "up_from_v2": 8,
        "pub_location": "宁夏",
        "cover43": "",
        "tidv2": 2088,
        "tnamev2": "社会观察",
        "pid_v2": 1010,
        "pid_name_v2": "知识",
        "bvid": "BV174411177w",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 66372123,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 669351541,
        "videos": 1,
        "tid": 138,
        "tname": "搞笑",
        "copyright": 1,
        "pic": "http://i2.hdslb.com/bfs/archive/fa08f65dc87fa6a26a99d0dc6fbc141adcef917b.jpg",
        "title": "这TM才是东京热！！！",
        "pubdate": 1597827562,
        "ctime": 1597827562,
        "desc": "祝大家长高3cm！",
        "state": 0,
        "duration": 73,
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
          "mid": 641529005,
          "name": "海胆君の日本留学日记",
          "face": "https://i2.hdslb.com/bfs/face/75b3ddf5767533667d08c4475823fdf6ed7111d0.jpg"
        },
        "stat": {
          "aid": 669351541,
          "view": 183005,
          "danmaku": 78,
          "reply": 54,
          "favorite": 685,
          "coin": 101,
          "share": 225,
          "now_rank": 0,
          "his_rank": 0,
          "like": 1310,
          "dislike": 0,
          "vt": 0,
          "vv": 183005,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "#bilibili新星计划##搞笑##全程高能#",
        "cid": 226269297,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1ea4y177Rj",
        "pub_location": "辽宁",
        "cover43": "",
        "tidv2": 2002,
        "tnamev2": "影视剪辑",
        "pid_v2": 1001,
        "pid_name_v2": "影视",
        "bvid": "BV1ea4y177Rj",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 669351541,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 239236582,
        "videos": 1,
        "tid": 22,
        "tname": "鬼畜调教",
        "copyright": 1,
        "pic": "http://i2.hdslb.com/bfs/archive/60e0c8b0bdb8781ae5213d06e35a80e416b624fd.jpg",
        "title": "av10388闪版",
        "pubdate": 1706161150,
        "ctime": 1706160987,
        "desc": "-",
        "state": 0,
        "duration": 72,
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
          "mid": 352435610,
          "name": "尼911a",
          "face": "https://i2.hdslb.com/bfs/face/dca0c49ddabaae204209764e73a1eeddd4e94fa3.jpg"
        },
        "stat": {
          "aid": 239236582,
          "view": 98736,
          "danmaku": 149,
          "reply": 201,
          "favorite": 700,
          "coin": 45,
          "share": 379,
          "now_rank": 0,
          "his_rank": 0,
          "like": 875,
          "dislike": 0,
          "vt": 0,
          "vv": 98736,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "",
        "cid": 1418632218,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1he411Y7MB",
        "up_from_v2": 11,
        "first_frame": "http://i2.hdslb.com/bfs/storyff/n240125saqkgdlb6aio291t2cc5qola0_firsti.jpg",
        "pub_location": "江苏",
        "cover43": "",
        "tidv2": 2207,
        "tnamev2": "随拍·综合",
        "pid_v2": 1032,
        "pid_name_v2": "其他",
        "bvid": "BV1he411Y7MB",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 239236582,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 294464399,
        "videos": 1,
        "tid": 21,
        "tname": "日常",
        "copyright": 1,
        "pic": "http://i2.hdslb.com/bfs/archive/8327a7955381a3a7fc0606b08ad87dd74a948a4b.png",
        "title": "B站的两个极限AV号被我找到了！",
        "pubdate": 1638019819,
        "ctime": 1638019819,
        "desc": "-",
        "state": 0,
        "duration": 71,
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
          "mid": 495847991,
          "name": "Tedsan",
          "face": "https://i2.hdslb.com/bfs/face/d3689b9a5f93d82deb1f8b6a081767a16b16e5ca.jpg"
        },
        "stat": {
          "aid": 294464399,
          "view": 86852,
          "danmaku": 25,
          "reply": 280,
          "favorite": 338,
          "coin": 54,
          "share": 61,
          "now_rank": 0,
          "his_rank": 0,
          "like": 450,
          "dislike": 0,
          "vt": 0,
          "vv": 86852,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "",
        "cid": 450235439,
        "dimension": {
          "width": 1440,
          "height": 720,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1fF411b7Hm",
        "up_from_v2": 19,
        "first_frame": "http://i1.hdslb.com/bfs/storyff/n211127a23442em8g5nug2775mg3789m_firsti.jpg",
        "pub_location": "四川",
        "cover43": "",
        "tidv2": 2207,
        "tnamev2": "随拍·综合",
        "pid_v2": 1032,
        "pid_name_v2": "其他",
        "bvid": "BV1fF411b7Hm",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 294464399,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 592220402,
        "videos": 1,
        "tid": 193,
        "tname": "MV",
        "copyright": 2,
        "pic": "http://i2.hdslb.com/bfs/archive/234b7c4a99412224007bf21a0e3902946dc45cd6.jpg",
        "title": "【4K50帧】“我在东北玩泥巴”原曲 Daler Mehndi - Tunak Tunak Tun",
        "pubdate": 1638883948,
        "ctime": 1638883948,
        "desc": "-",
        "state": 0,
        "duration": 257,
        "rights": {
          "bp": 0,
          "elec": 0,
          "download": 0,
          "movie": 0,
          "pay": 0,
          "hd5": 0,
          "no_reprint": 0,
          "autoplay": 0,
          "ugc_pay": 0,
          "is_cooperation": 0,
          "ugc_pay_preview": 0,
          "no_background": 0,
          "arc_pay": 0,
          "pay_free_watch": 0
        },
        "owner": {
          "mid": 472562429,
          "name": "智英武54",
          "face": "https://i2.hdslb.com/bfs/face/e7bb5b2f16863992562f10ce2a686035bf33a1b4.jpg"
        },
        "stat": {
          "aid": 592220402,
          "view": 2711581,
          "danmaku": 7298,
          "reply": 1980,
          "favorite": 58898,
          "coin": 5115,
          "share": 17577,
          "now_rank": 0,
          "his_rank": 0,
          "like": 72931,
          "dislike": 0,
          "vt": 0,
          "vv": 2711581,
          "fav_g": 11,
          "like_g": 0
        },
        "dynamic": "",
        "cid": 456563995,
        "dimension": {
          "width": 2880,
          "height": 2160,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1bq4y1q7Ho",
        "up_from_v2": 8,
        "first_frame": "http://i2.hdslb.com/bfs/storyff/n211207a24niqqktio4no1wmwd5tsget_firsti.jpg",
        "pub_location": "江苏",
        "cover43": "",
        "tidv2": 2017,
        "tnamev2": "MV",
        "pid_v2": 1003,
        "pid_name_v2": "音乐",
        "bvid": "BV1bq4y1q7Ho",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 592220402,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 441264199,
        "videos": 1,
        "tid": 26,
        "tname": "音MAD",
        "copyright": 1,
        "pic": "http://i0.hdslb.com/bfs/archive/4e36449edad0021385e5477bbe427ca9243d549a.jpg",
        "title": "五大哲学",
        "pubdate": 1679426636,
        "ctime": 1679426636,
        "desc": "-",
        "state": 0,
        "duration": 13,
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
          "mid": 613658683,
          "name": "长瀞重度依赖",
          "face": "https://i1.hdslb.com/bfs/face/c53f852b5ca574eed9be9877d7ce3f28a2e89385.jpg"
        },
        "stat": {
          "aid": 441264199,
          "view": 671881,
          "danmaku": 92,
          "reply": 230,
          "favorite": 2720,
          "coin": 228,
          "share": 1060,
          "now_rank": 0,
          "his_rank": 0,
          "like": 9049,
          "dislike": 0,
          "vt": 0,
          "vv": 671881,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "",
        "cid": 1064182352,
        "dimension": {
          "width": 720,
          "height": 720,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1nL411r7mS",
        "up_from_v2": 8,
        "first_frame": "http://i2.hdslb.com/bfs/storyff/n230322qntglnzeqo4m1c23cnoyehccs_firsti.jpg",
        "pub_location": "广西",
        "cover43": "",
        "tidv2": 2015,
        "tnamev2": "娱乐综合",
        "pid_v2": 1002,
        "pid_name_v2": "娱乐",
        "bvid": "BV1nL411r7mS",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 441264199,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 49016435,
        "videos": 1,
        "tid": 31,
        "tname": "翻唱",
        "copyright": 1,
        "pic": "http://i2.hdslb.com/bfs/archive/9b7da84975469b7ddcd78717d06c092c4433ccf4.jpg",
        "title": "【喵会长】妹子竟被逼着翻唱保加利亚妖王！⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄！",
        "pubdate": 1555135227,
        "ctime": 1554999201,
        "desc": "这次视频改了N遍，剪的好累~希望大家能多多支持一下\n网易云音频链接：https://music.163.com/#/song?id=1358976277\n关注微博有惊喜！@隔壁班的喵会长",
        "state": 0,
        "duration": 200,
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
          "mid": 21330948,
          "name": "隔壁班的喵会长",
          "face": "https://i0.hdslb.com/bfs/face/75a4a80496daacb478496f6a0aaf4d3ab357393d.jpg"
        },
        "stat": {
          "aid": 49016435,
          "view": 1988312,
          "danmaku": 8866,
          "reply": 5413,
          "favorite": 53008,
          "coin": 136074,
          "share": 13019,
          "now_rank": 0,
          "his_rank": 4,
          "like": 268302,
          "dislike": 0,
          "vt": 0,
          "vv": 1988312,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "那个曾经制霸b站的男银又肥来了！！！！",
        "cid": 86290623,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1vb411M79s",
        "pub_location": "山西",
        "cover43": "",
        "tidv2": 2061,
        "tnamev2": "人力VOCALOID",
        "pid_v2": 1007,
        "pid_name_v2": "鬼畜",
        "bvid": "BV1vb411M79s",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 49016435,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 730704908,
        "videos": 1,
        "tid": 193,
        "tname": "MV",
        "copyright": 2,
        "pic": "http://i1.hdslb.com/bfs/archive/2fd2b442a3f42ed0ba20c5204afdd92dbdfb9a68.jpg",
        "title": "【越南神曲】-《Cứ Chill Thôi》！终于找到原版了！",
        "pubdate": 1663586400,
        "ctime": 1663574508,
        "desc": "听完以后瞬间心情舒畅，太绝了!",
        "state": 0,
        "duration": 281,
        "rights": {
          "bp": 0,
          "elec": 0,
          "download": 0,
          "movie": 0,
          "pay": 0,
          "hd5": 0,
          "no_reprint": 0,
          "autoplay": 0,
          "ugc_pay": 0,
          "is_cooperation": 0,
          "ugc_pay_preview": 0,
          "no_background": 0,
          "arc_pay": 0,
          "pay_free_watch": 0
        },
        "owner": {
          "mid": 2043250564,
          "name": "4K音乐馆",
          "face": "https://i1.hdslb.com/bfs/face/4be964615e70e18ab469e4403cb0fa320f8d2fdc.jpg"
        },
        "stat": {
          "aid": 730704908,
          "view": 4715077,
          "danmaku": 3141,
          "reply": 4132,
          "favorite": 75716,
          "coin": 9002,
          "share": 7597,
          "now_rank": 0,
          "his_rank": 0,
          "like": 79627,
          "dislike": 0,
          "vt": 0,
          "vv": 4715077,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "",
        "cid": 837595821,
        "dimension": {
          "width": 3840,
          "height": 2160,
          "rotate": 0
        },
        "season_id": 725909,
        "short_link_v2": "https://b23.tv/BV1GD4y1i7dA",
        "first_frame": "http://i2.hdslb.com/bfs/storyff/n220919qn29hpyl52if2k1dthb32a0ji_firsti.jpg",
        "pub_location": "山东",
        "cover43": "",
        "tidv2": 2017,
        "tnamev2": "MV",
        "pid_v2": 1003,
        "pid_name_v2": "音乐",
        "bvid": "BV1GD4y1i7dA",
        "season_type": 1,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 730704908,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 413754644,
        "videos": 1,
        "tid": 59,
        "tname": "演奏",
        "copyright": 1,
        "pic": "http://i0.hdslb.com/bfs/archive/4769bc9c91af6fc8598d1b22d16033b540af33a8.jpg",
        "title": "【东京热】TOKY HOT THEME SONG ( FULL VERSION)",
        "pubdate": 1594208253,
        "ctime": 1594208253,
        "desc": "-",
        "state": 0,
        "duration": 157,
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
          "mid": 476156735,
          "name": "星际的小喵",
          "face": "http://i2.hdslb.com/bfs/face/b6fcd4d4d23047432012576dda4239b5d0b5fa6e.jpg"
        },
        "stat": {
          "aid": 413754644,
          "view": 476215,
          "danmaku": 166,
          "reply": 906,
          "favorite": 6630,
          "coin": 627,
          "share": 3116,
          "now_rank": 0,
          "his_rank": 0,
          "like": 6086,
          "dislike": 0,
          "vt": 0,
          "vv": 476215,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "#日本##音乐##东京#",
        "cid": 210245452,
        "dimension": {
          "width": 426,
          "height": 240,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1pV41167y7",
        "cover43": "",
        "tidv2": 2027,
        "tnamev2": "音乐综合",
        "pid_v2": 1003,
        "pid_name_v2": "音乐",
        "bvid": "BV1pV41167y7",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 413754644,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 468509831,
        "videos": 1,
        "tid": 193,
        "tname": "MV",
        "copyright": 2,
        "pic": "http://i0.hdslb.com/bfs/archive/03971484b4c3931e89cbcf5862f8c10645e6aaec.jpg",
        "title": "补裆 av3440 -",
        "pubdate": 1651067890,
        "ctime": 1651067890,
        "desc": "新浪\nbiliplus，里面只有残缺的信息，发布时间应该是2010-2-27",
        "state": 0,
        "duration": 215,
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
          "mid": 675115853,
          "name": "゚゙゙゙゚゚゙゚゚",
          "face": "https://i2.hdslb.com/bfs/face/8706d12c0df1f27aff5ae3c045b7da0133bd8c4a.png"
        },
        "stat": {
          "aid": 468509831,
          "view": 280276,
          "danmaku": 89,
          "reply": 324,
          "favorite": 4518,
          "coin": 151,
          "share": 209,
          "now_rank": 0,
          "his_rank": 0,
          "like": 6403,
          "dislike": 0,
          "vt": 0,
          "vv": 280276,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "",
        "cid": 586522933,
        "dimension": {
          "width": 320,
          "height": 240,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1H541117sZ",
        "up_from_v2": 8,
        "first_frame": "http://i2.hdslb.com/bfs/storyff/n220427qn2g6emv26rnqxq247csj5kgn_firsti.jpg",
        "cover43": "",
        "tidv2": 2027,
        "tnamev2": "音乐综合",
        "pid_v2": 1003,
        "pid_name_v2": "音乐",
        "bvid": "BV1H541117sZ",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 468509831,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 19390801,
        "videos": 1,
        "tid": 22,
        "tname": "鬼畜调教",
        "copyright": 1,
        "pic": "http://i0.hdslb.com/bfs/archive/d52994a1876d07a975dc6683b78a898d9b581208.png",
        "title": "【春晚鬼畜】赵本山：我就是念诗之王！【改革春风吹满地】",
        "pubdate": 1518339644,
        "ctime": 1518230987,
        "desc": "小时候每次吃完年夜饭，都会急急忙忙跑回自己房间跟朋友玩彩虹岛，街头篮球，泡泡堂，极品飞车，CS。一旦听到外面大人们喊“哦！赵本山来咯！”，就马上暂停手上的游戏赶紧跑出去看。对我来说没有赵本山的春晚根本不是春晚。\n鬼畜本家：av18521530\n【举起手来】花姑娘又要吸旺仔牛奶！\nby @疯猴pme",
        "state": 0,
        "duration": 152,
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
          "mid": 353246678,
          "name": "UP-Sings",
          "face": "http://i2.hdslb.com/bfs/face/224815f69567dfbdacffc64185b89568bf8da0f3.jpg"
        },
        "stat": {
          "aid": 19390801,
          "view": 123739584,
          "danmaku": 667864,
          "reply": 325458,
          "favorite": 3047850,
          "coin": 4800461,
          "share": 1494973,
          "now_rank": 0,
          "his_rank": 3,
          "like": 5445710,
          "dislike": 0,
          "vt": 0,
          "vv": 123739584,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "不管今年春晚有没有本山叔，鬼畜区总归是有的！",
        "cid": 31621681,
        "dimension": {
          "width": 640,
          "height": 360,
          "rotate": 0
        },
        "season_id": 879555,
        "short_link_v2": "https://b23.tv/BV1bW411n7fY",
        "cover43": "",
        "tidv2": 2059,
        "tnamev2": "鬼畜调教",
        "pid_v2": 1007,
        "pid_name_v2": "鬼畜",
        "bvid": "BV1bW411n7fY",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 19390801,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 305593327,
        "videos": 1,
        "tid": 255,
        "tname": "颜值·网红舞",
        "copyright": 1,
        "pic": "http://i2.hdslb.com/bfs/archive/b4917bb0a9147f205e6af9d87d6d50b864a7a97f.jpg",
        "title": "蝴蝶步2.0(◦˙▽˙◦)",
        "pubdate": 1669474753,
        "ctime": 1669474753,
        "desc": "-",
        "state": 0,
        "duration": 15,
        "mission_id": 1039224,
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
          "mid": 43724742,
          "name": "怎么这样的呐",
          "face": "https://i0.hdslb.com/bfs/face/f9e9ae6025a9e02b134eec3dd84b87c3689216a3.jpg"
        },
        "stat": {
          "aid": 305593327,
          "view": 13909975,
          "danmaku": 1401,
          "reply": 7111,
          "favorite": 235000,
          "coin": 83120,
          "share": 24633,
          "now_rank": 0,
          "his_rank": 0,
          "like": 383239,
          "dislike": 0,
          "vt": 0,
          "vv": 13909975,
          "fav_g": 14,
          "like_g": 0
        },
        "dynamic": "双更一下~",
        "cid": 904012490,
        "dimension": {
          "width": 1456,
          "height": 2592,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1kP411u7jr",
        "up_from_v2": 19,
        "first_frame": "http://i2.hdslb.com/bfs/storyff/n221126qn2i92o9zf8m22h34kykxw0dl_firsti.jpg",
        "pub_location": "浙江",
        "cover43": "",
        "tidv2": 2030,
        "tnamev2": "颜值·网红舞",
        "pid_v2": 1004,
        "pid_name_v2": "舞蹈",
        "bvid": "BV1kP411u7jr",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 305593327,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      },
      {
        "aid": 114075187020133,
        "videos": 1,
        "tid": 256,
        "tname": "短片",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/3d3aaf0ab2da5e41f4de7ed3e7995babbfd1168a.jpg",
        "title": "中国人自己的保加利亚妖王",
        "pubdate": 1740649401,
        "ctime": 1740649401,
        "desc": "-",
        "state": 0,
        "duration": 53,
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
          "mid": 1247190580,
          "name": "麦克瑟瑟大型纪录片",
          "face": "https://i1.hdslb.com/bfs/face/98df710e5e76e7fe37c0d5fd8047b899b21943d5.jpg"
        },
        "stat": {
          "aid": 114075187020133,
          "view": 9167,
          "danmaku": 1,
          "reply": 12,
          "favorite": 24,
          "coin": 2,
          "share": 9,
          "now_rank": 0,
          "his_rank": 0,
          "like": 166,
          "dislike": 0,
          "vt": 0,
          "vv": 9167,
          "fav_g": 0,
          "like_g": 0
        },
        "dynamic": "",
        "cid": 28602729880,
        "dimension": {
          "width": 1440,
          "height": 1080,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1Xg9cYYEDZ",
        "up_from_v2": 19,
        "first_frame": "http://i0.hdslb.com/bfs/storyff/n250227sao3m0apa1gc9g2yxt3vx2l53_firsti.jpg",
        "pub_location": "河南",
        "cover43": "",
        "tidv2": 2026,
        "tnamev2": "乐评盘点",
        "pid_v2": 1003,
        "pid_name_v2": "音乐",
        "bvid": "BV1Xg9cYYEDZ",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 114075187020133,
          "goto": "av",
          "trackid": "web_related_0.router-related-2004712-fdb74c5f6-v6rmv.1744730526909.62",
          "uniq_id": ""
        }
      }
    ],
    "Spec": null,
    "hot_share": {
      "show": false,
      "list": []
    },
    "elec": null,
    "emergency": {
      "no_like": false,
      "no_coin": false,
      "no_fav": false,
      "no_share": false
    },
    "view_addit": {
      "63": false,
      "64": false,
      "69": false,
      "71": false,
      "72": false
    },
    "guide": null,
    "query_tags": null,
    "participle": [
      "保加利亚",
      "azis",
      "mv"
    ],
    "module_ctrl": null,
    "replace_recommend": false
  }
}
```

</details>

## 获取视频简介

> https://api.bilibili.com/x/web-interface/archive/desc

*请求方式：GET*

**url参数：**

| 参数名  | 类型  | 内容     | 必要性    | 备注            |
|------|-----|--------|--------|---------------|
| aid  | num | 稿件avid | 必要（可选） | avid与bvid任选一个 |
| bvid | str | 稿件bvid | 必要（可选） | avid与bvid任选一个 |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                                   |
|---------|-----|------|--------------------------------------|
| code    | num | 返回值  | 0：成功<br />-400：请求错误<br />62002：稿件不可见 |
| message | str | 错误信息 | 默认为0                                 |
| ttl     | num | 1    |                                      |
| data    | str | 简介内容 |                                      |

**示例：**

查看视频(教主的咕鸽)`av39330059`/`BV1Bt411z799`的简介

avid方式：

```shell
curl -G 'https://api.bilibili.com/x/archive/desc' \
--data-urlencode 'aid=39330059'
```

bvid方式：

```shell
curl -G 'https://api.bilibili.com/x/archive/desc' \
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

## 查询视频分P列表 (avid/bvid转cid)

> https://api.bilibili.com/x/player/pagelist

*请求方式：GET*

**url参数：**

| 参数名  | 类型  | 内容     | 必要性    | 备注            |
|------|-----|--------|--------|---------------|
| aid  | num | 稿件avid | 必要（可选） | avid与bvid任选一个 |
| bvid | str | 稿件bvid | 必要（可选） | avid与bvid任选一个 |

**json回复：**

根对象：

| 字段      | 类型    | 内容   | 备注                                |
|---------|-------|------|-----------------------------------|
| code    | num   | 返回值  | 0：成功<br />-400：请求错误<br />-404：无视频 |
| message | str   | 错误信息 | 默认为0                              |
| ttl     | num   | 1    |                                   |
| data    | array | 分P列表 |                                   |

数组`data`：

| 项   | 类型  | 内容       | 备注      |
|-----|-----|----------|---------|
| 0   | obj | 1P内容     | 无分P仅有此项 |
| n   | obj | (n+1)P内容 |         |
| ……  | obj | ……       | ……      |

数组`data`中的对象：

| 字段          | 类型  | 内容        | 备注                                          |
|-------------|-----|-----------|---------------------------------------------|
| cid         | num | 当前分P cid  |                                             |
| page        | num | 当前分P      |                                             |
| from        | str | 视频来源      | vupload：普通上传（B站）<br />hunan：芒果TV<br />qq：腾讯 |
| part        | str | 当前分P标题    |                                             |
| duration    | num | 当前分P持续时间  | 单位为秒                                        |
| vid         | str | 站外视频vid   |                                             |
| weblink     | str | 站外视频跳转url |                                             |
| dimension   | obj | 当前分P分辨率   | 有部分视频无法获取分辨率                                |
| first_frame | str | 分P封面      |                                             |

数组`data`中的对象中的`dimension`对象：

| 字段     | 类型  | 内容      | 备注             |
|--------|-----|---------|----------------|
| width  | num | 当前分P 宽度 |                |
| height | num | 当前分P 高度 |                |
| rotate | num | 是否将宽高对换 | 0：正常<br />1：对换 |

**示例：**

查询视频`av13502509`/`BV1ex411J7GE`的分P列表

avid方式：

```shell
curl -G 'https://api.bilibili.com/x/player/pagelist' \
--data-urlencode 'aid=13502509'
```

bvid方式：

```shell
curl -G 'https://api.bilibili.com/x/player/pagelist' \
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
    }]
}
```

</details>
