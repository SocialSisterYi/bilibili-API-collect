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
| tid                     | num     | 分区tid                        |                                                              |
| tname                   | str     | 子分区名称                     |                                                              |
| copyright               | num     | 视频类型                       | 1：原创<br />2：转载                                         |
| pic                     | str     | 稿件封面图片url                |                                                              |
| title                   | str     | 稿件标题                       |                                                              |
| pubdate                 | num     | 稿件发布时间                   | 秒级时间戳                                                   |
| ctime                   | num     | 用户投稿时间                   | 秒级时间戳                                                   |
| desc                    | str     | 视频简介                       |                                                              |
| desc_v2                 | array   | 新版视频简介                   |                                                              |
| state                   | num     | 视频状态                       | 详情见[属性数据文档](attribute_data.md#state字段值(稿件状态)) |
| ~~attribute~~(已经弃用) | ~~num~~ | ~~稿件属性位配置~~             | 详情见[属性数据文档](attribute_data.md#attribute字段值(稿件属性位)) |
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
| premiere                |         | null                           |                                                              |
| teenage_mode            | num     |                                | 用于青少年模式                                               |
| is_chargeable_season    | bool    |                                |                                                              |
| is_story                | bool    | 是否可以在 Story Mode 展示?    |                                                              |
| is_upower_exclusive     | bool    | 是否为充电专属                  |                                                              |
| is_upower_pay           | bool    |                                 |                                                              |
| is_upower_show          | bool    |                                 |                                                              |
| no_cache                | bool    | 是否不允许缓存?                |                                                              |
| pages                   | array   | 视频分P列表                    |                                                              |
| subtitle                | obj     | 视频CC字幕信息                 |                                                              |
| staff                   | array   | 合作成员列表                   | 非合作视频无此项                                             |
| is_season_display       | bool    |                                |                                                              |
| user_garb               | obj     | 用户装扮信息                   |                                                              |
| honor_reply             | obj     |                                |                                                              |
| like_icon               | str     | 空串                           |                                                              |
| need_jump_bv            | bool    | 需要跳转到BV号?               |                                                              |
| disable_show_up_info    | bool    | 禁止展示UP主信息?             |                                                              |
| is_story_play           | bool    | 是否为 Story Mode 视频?       |                                                              |
| is_view_self            | bool    | 是否为自己投稿的视频?          |                                                              |
| argue_info              | obj     | 争议/警告信息                  |                                                              |

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

`data`中的`argue_info`对象：

| 字段       | 类型 | 内容              | 备注         |
| ---------- | ---- | ----------------- | ------------ |
| argue_link | str  |                   | 作用尚不明确 |
| argue_msg  | str  | 警告/争议提示信息 |              |
| argue_type | int  |                   | 作用尚不明确 |

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
      "view": 2387699,
      "danmaku": 12146,
      "reply": 2671,
      "favorite": 58591,
      "coin": 72578,
      "share": 9598,
      "now_rank": 0,
      "his_rank": 55,
      "like": 160683,
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
        "name": "陈楒潼桶桶桶",
        "face": "https://i2.hdslb.com/bfs/face/c9af3b32cf74baec5a4b65af8ca18ae5ff571f77.jpg",
        "vip": {
          "type": 2,
          "status": 1,
          "due_date": 1737820800000,
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
        "follower": 629775,
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
        "follower": 4600968,
        "label_style": 0
      }
    ],
    "is_season_display": false,
    "user_garb": {
      "url_image_ani_cut": ""
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

![](https://i1.hdslb.com/bfs/archive/ea0dd34bf41e23a68175680a00e3358cd249105f.jpg)

## 获取视频超详细信息(web端)

> https://api.bilibili.com/x/web-interface/view/detail

> https://api.bilibili.com/x/web-interface/wbi/view/detail

*请求方式：GET*

认证方式：Cookie(SESSDATA)

鉴权方式：[Wbi 签名](../misc/sign/wbi.md)

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

| 字段         | 类型    | 内容      | 备注     |
|------------|-------|---------|--------|
| View       | obj   | 视频基本信息  |        |
| Card       | obj   | 视频UP主信息 |        |
| Tags       | array | 视频TAG信息 |        |
| Reply      | obj   | 视频热评信息  |        |
| Related    | array | 推荐视频信息  |        |
| Spec       | null  | ？       | 作用尚不明确 |
| hot_share  | obj   | ？       | 作用尚不明确 |
| elec       | null  | ？       | 作用尚不明确 |
| recommend  | null  | ？       | 作用尚不明确 |
| view_addit | obj   | ？       | 作用尚不明确 |

`data`中的`View`对象：

基本同「[获取视频详细信息(web端)](#获取视频详细信息(web端))」中的data对象

`data`中的`Card`对象：

| 字段            | 类型   | 内容      | 备注                                                        |
|---------------|------|---------|-----------------------------------------------------------|
| card          | obj  | UP主名片信息 |                                                           |
| space         | obj  | 主页头图    |                                                           |
| following     | bool | 是否关注此用户 | true：已关注<br />false：未关注<br />需要登录(Cookie) <br />未登录为false |
| archive_count | num  | 用户稿件数   |                                                           |
| article_count | num  | 用户专栏数   |                                                           |
| follower      | num  | 粉丝数     |                                                           |
| like_num      | num  | UP主获赞次数 |                                                           |

`Card`中的`card`对象：

| 字段               | 类型    | 内容         | 备注                          |
|------------------|-------|------------|-----------------------------|
| mid              | str   | 用户mid      |                             |
| name             | str   | 用户昵称       |                             |
| approve          | bool  | false      | 作用尚不明确                      |
| sex              | str   | 用户性别       | 男 女 保密                      |
| rank             | str   | 10000      | 作用尚不明确                      |
| face             | str   | 用户头像链接     |                             |
| face_nft         | num   | 是否为 nft 头像 | `0`不是nft头像<br />`1`是 nft 头像 |
| DisplayRank      | str   | 0          | 作用尚不明确                      |
| regtime          | num   | 0          | 作用尚不明确                      |
| spacesta         | num   | 0          | 作用尚不明确                      |
| birthday         | str   | 空          | 作用尚不明确                      |
| place            | str   | 空          | 作用尚不明确                      |
| description      | str   | 空          | 作用尚不明确                      |
| article          | num   | 0          | 作用尚不明确                      |
| attentions       | array | 空          | 作用尚不明确                      |
| fans             | num   | 粉丝数        |                             |
| friend           | num   | 关注数        |                             |
| attention        | num   | 关注数        |                             |
| sign             | str   | 签名         |                             |
| level_info       | obj   | 等级         |                             |
| pendant          | obj   | 挂件         |                             |
| nameplate        | obj   | 勋章         |                             |
| Official         | obj   | 认证信息       |                             |
| official_verify  | obj   | 认证信息2      |                             |
| vip              | obj   | 大会员状态      |                             |
| is_senior_member | num   | 是否为硬核会员    | 0：否<br />1：是                |

`card`中的`level_info`对象：

| 字段            | 类型  | 内容   | 备注     |
|---------------|-----|------|--------|
| current_level | num | 当前等级 | 0-6级   |
| current_min   | num | 0    | 作用尚不明确 |
| current_exp   | num | 0    | 作用尚不明确 |
| next_exp      | num | 0    | 作用尚不明确 |

`card`中的`pendant`对象：

| 字段     | 类型  | 内容      | 备注     |
|--------|-----|---------|--------|
| pid    | num | 挂件id    |        |
| name   | str | 挂件名称    |        |
| image  | str | 挂件图片url |        |
| expire | num | 0       | 作用尚不明确 |

`card`中的`nameplate`对象：

| 字段          | 类型  | 内容         | 备注       |
|-------------|-----|------------|----------|
| nid         | num | 勋章id       | 详细说明有待补充 |
| name        | str | 勋章名称       |          |
| image       | str | 挂件图片url 正常 |          |
| image_small | str | 勋章图片url 小  |          |
| level       | str | 勋章等级       |          |
| condition   | str | 勋章条件       |          |

`card`中的`Official`对象：

| 字段    | 类型  | 内容   | 备注                                    |
|-------|-----|------|---------------------------------------|
| role  | num | 认证类型 | 见[用户认证类型一览](../user/official_role.md) |
| title | str | 认证信息 | 无为空                                   |
| desc  | str | 认证备注 | 无为空                                   |
| type  | num | 是否认证 | -1：无<br />0：认证                        |

`card`中的`official_verify`对象：

| 字段   | 类型  | 内容   | 备注             |
|------|-----|------|----------------|
| type | num | 是否认证 | -1：无<br />0：认证 |
| desc | str | 认证信息 | 无为空            |

`card`中的`vip`对象：

| 字段                   | 类型  | 内容        | 备注                                           |
|----------------------|-----|-----------|----------------------------------------------|
| type                 | num | 会员类型      | 0：无<br />1：月大会员<br />2：年度及以上大会员              |
| status               | num | 会员状态      | 0：无<br />1：有                                 |
| due_date             | num | 会员过期时间    | Unix时间戳(毫秒)                                  |
| vip_pay_type         | num | 支付类型      | 0：未支付（常见于官方账号）<br />1：已支付（以正常渠道获取的大会员均为此值）   |
| theme_type           | num | 0         | 作用尚不明确                                       |
| label                | obj | 会员标签      |                                              |
| avatar_subscript     | num | 是否显示会员图标  | 0：不显示<br />1：显示                              |
| nickname_color       | str | 会员昵称颜色    | 颜色码，一般为`#FB7299`，曾用于愚人节改变大会员配色               |
| role                 | num | 大角色类型     | 1：月度大会员<br/>3：年度大会员<br/>7：十年大会员<br/>15：百年大会员 |
| avatar_subscript_url | str | 大会员角标地址   |                                              |
| tv_vip_status        | num | 电视大会员状态   | 0：未开通                                        |
| tv_vip_pay_type      | num | 电视大会员支付类型 |                                              |

`vip`中的`label`对象：

| 字段                        | 类型   | 内容       | 备注                                                                                                                           |
|---------------------------|------|----------|------------------------------------------------------------------------------------------------------------------------------|
| path                      | str  | 空        | 作用尚不明确                                                                                                                       |
| text                      | str  | 会员类型文案   | `大会员` `年度大会员` `十年大会员` `百年大会员` `最强绿鲤鱼`                                                                                        |
| label_theme               | str  | 会员标签     | vip：大会员<br />annual_vip：年度大会员<br />ten_annual_vip：十年大会员<br />hundred_annual_vip：百年大会员<br/>fools_day_hundred_annual_vip：最强绿鲤鱼 |
| text_color                | str  | 会员标签     |                                                                                                                              |
| bg_style                  | num  | 1        |                                                                                                                              |
| bg_color                  | str  | 会员标签背景颜色 | 颜色码，一般为`#FB7299`，曾用于愚人节改变大会员配色                                                                                               |
| border_color              | str  | 会员标签边框颜色 | 未使用                                                                                                                          |
| use_img_label             | bool | `true`   |                                                                                                                              |
| img_label_uri_hans        | str  | `空串`     |                                                                                                                              |
| img_label_uri_hant        | str  | `空串`     |                                                                                                                              |
| img_label_uri_hans_static | str  | 大会员牌子图片  | 简体版                                                                                                                          |
| img_label_uri_hant_static | str  | 大会员牌子图片  | 繁体版 

`Card`中的`space`对象：

| 字段    | 类型  | 内容         | 备注  |
|-------|-----|------------|-----|
| s_img | str | 主页头图url 小图 |     |
| l_img | str | 主页头图url 正常 |     |

`data`中的`Tags`数组：

基本同「[获取视频TAG信息](tags.md#获取视频TAG信息)」中的data数组

`data`中的`Reply`对象：

基本同「[获取评论区热评](../comment/list.md#获取评论区热评)」中的data对象

`data`中的`Related`数组：

| 项   | 类型  | 内容        | 备注  |
|-----|-----|-----------|-----|
| 0   | obj | 推荐视频1     |     |
| n   | obj | 推荐视频(n+1) |     |
| ……  | obj | ……        | ……  |

`Related`数组中的对象：

基本同「[获取视频详细信息(web端)](#获取视频详细信息(web端))」中的data对象，已知没有分P信息

`data`中的`hot_share`对象：

| 字段   | 类型    | 内容    | 备注     |
|------|-------|-------|--------|
| show | bool  | false | 作用尚不明确 |
| list | array | 空     | 作用尚不明确 |

`data`中的`view_addit`对象：

| 字段  | 类型   | 内容    | 备注     |
|-----|------|-------|--------|
| 63  | bool | false | 作用尚不明确 |
| 64  | bool | false | 作用尚不明确 |
| 69  | bool | false | 作用尚不明确 |
| 71  | bool | false | 作用尚不明确 |
| 72  | bool | false | 作用尚不明确 |

**示例：**

获取视频`av170001`/`BV17x411w7KC`的详细信息

avid方式：

```shell
curl -G 'https://api.bilibili.com/x/web-interface/view/detail' \
--data-urlencode 'aid=170001'
```

bvid方式：

```shell
curl -G 'https://api.bilibili.com/x/web-interface/view/detail' \
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
        "view": 44433679,
        "danmaku": 912351,
        "reply": 180971,
        "favorite": 889815,
        "coin": 285498,
        "share": 637667,
        "now_rank": 0,
        "his_rank": 13,
        "like": 904145,
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
      "enable_vt": 0,
      "vt_display": "",
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
          }
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
          }
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
          }
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
          }
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
          }
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
          }
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
          }
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
          }
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
          }
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
          }
        }
      ],
      "subtitle": {
        "allow_submit": false,
        "list": []
      },
      "is_season_display": false,
      "user_garb": {
        "url_image_ani_cut": "https://i0.hdslb.com/bfs/garb/item/311b29b795eb3f09ed0401a56eddf5c90b8fbfd6.bin"
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
      "disable_show_up_info": false
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
        "fans": 65409,
        "friend": 44,
        "attention": 44,
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
          "image": "https://i2.hdslb.com/bfs/face/3f2d64f048b39fb6c26f3db39df47e6080ec0f9c.png",
          "image_small": "https://i1.hdslb.com/bfs/face/90c35d41d8a19b19474d6bac672394c17b444ce8.png",
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
      "archive_count": 390,
      "article_count": 0,
      "follower": 65409,
      "like_num": 1020481
    },
    "Tags": [
      {
        "tag_id": 0,
        "tag_name": "Hop",
        "cover": "",
        "head_cover": "",
        "content": "",
        "short_content": "",
        "type": 0,
        "state": 0,
        "ctime": 0,
        "count": {
          "view": 0,
          "use": 0,
          "atten": 0
        },
        "is_atten": 0,
        "likes": 0,
        "hates": 0,
        "attribute": 0,
        "liked": 0,
        "hated": 0,
        "extra_attr": 0,
        "music_id": "MA407124762800730394",
        "tag_type": "bgm",
        "is_activity": false,
        "color": "",
        "alpha": 0,
        "is_season": false,
        "subscribed_count": 0,
        "archive_count": "",
        "featured_count": 0,
        "jump_url": "https://music.bilibili.com/h5/music-detail?music_id=MA407124762800730394&cid=279786&aid=170001"
      },
      {
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
          "use": 0,
          "atten": 0
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
        "subscribed_count": 0,
        "archive_count": "-",
        "featured_count": 0,
        "jump_url": ""
      },
      {
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
          "use": 0,
          "atten": 0
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
        "subscribed_count": 0,
        "archive_count": "-",
        "featured_count": 0,
        "jump_url": ""
      },
      {
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
          "use": 0,
          "atten": 0
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
        "subscribed_count": 0,
        "archive_count": "-",
        "featured_count": 0,
        "jump_url": ""
      },
      {
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
          "use": 0,
          "atten": 0
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
        "subscribed_count": 0,
        "archive_count": "-",
        "featured_count": 0,
        "jump_url": ""
      },
      {
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
          "use": 0,
          "atten": 0
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
        "subscribed_count": 0,
        "archive_count": "-",
        "featured_count": 0,
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
        "aid": 429064052,
        "videos": 1,
        "tid": 138,
        "tname": "搞笑",
        "copyright": 2,
        "pic": "http://i2.hdslb.com/bfs/archive/d894070d2dad98a17f6f9d6c20885ac00ccc372f.jpg",
        "title": "【高清版本修复】van样暗黑配音",
        "pubdate": 1659252811,
        "ctime": 1659251713,
        "desc": "BV1rU4y1Q7Fh的高清修复版本\n高清版本",
        "state": 0,
        "duration": 92,
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
          "mid": 2138730253,
          "name": "Kochiya-Sanae",
          "face": "https://i1.hdslb.com/bfs/face/32c7158bb57634488fc7624c8f64e9a7b2cc66c3.jpg"
        },
        "stat": {
          "aid": 429064052,
          "view": 871978,
          "danmaku": 951,
          "reply": 794,
          "favorite": 28667,
          "coin": 7401,
          "share": 18597,
          "now_rank": 0,
          "his_rank": 0,
          "like": 39961,
          "dislike": 0,
          "vt": 0,
          "vv": 871978
        },
        "dynamic": "",
        "cid": 1249117530,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1CG411h7We",
        "up_from_v2": 8,
        "first_frame": "http://i1.hdslb.com/bfs/storyff/n230828qn1qsxsilxzs5ee3ngc96ejhn_firsti.jpg",
        "pub_location": "江苏",
        "bvid": "BV1CG411h7We",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 429064052,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 331415167,
        "videos": 1,
        "tid": 138,
        "tname": "搞笑",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/709a2da2014aba9b11cbb3bdbb229e82860f5c40.jpg",
        "title": "𓀬古埃及𓀯宽带广告𓀿𓀶𓈷𓉅 𓁞 𓁟𓂮 𓂯𓃠𓃄𓀰 𓀱𓀐𓀡 𓀼 𓀽𓁀𓉆𓁀𓁁𓁂𓁃𓁄𓁅𓁆𓀷𓀾",
        "pubdate": 1612174676,
        "ctime": 1612174676,
        "desc": "??? ?最新?发掘出的 ?古埃及?宽带? 广告? ?? ???? ??? ? ???\n??汉谟拉比?宽带??? BV1rv411s7b6\n印尼宽带西藏特供版ཧིན་ཉི་ཐགས་ཡངས་དམིགས་བསལ་མཁོ་འདོན་པར་གཞི་BV1ao4y1d7VH\n印औ度ष宽फ 带（梵ह文）औगळऴॊवशछजॊझञस BV1bA411u7Fy\n【乱 码】此 宽 带 无 法 显 示     迠鐩\u0007\u0010内 暫?\u0015\fV/豬嶬 源=塇  BV1P54y1W75k",
        "state": 0,
        "duration": 37,
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
          "mid": 294594289,
          "name": "不咕的鱼鸽子",
          "face": "https://i1.hdslb.com/bfs/face/10eb0658f6ff99e8f042168b15f7c684533f359e.webp"
        },
        "stat": {
          "aid": 331415167,
          "view": 2756922,
          "danmaku": 12348,
          "reply": 3179,
          "favorite": 37005,
          "coin": 7427,
          "share": 8592,
          "now_rank": 0,
          "his_rank": 0,
          "like": 134223,
          "dislike": 0,
          "vt": 0,
          "vv": 2756922
        },
        "dynamic": "#IndiHomePaket##印度尼西亚##印尼##印尼宽带##鬼畜##古埃及#\n𓀬𓀷𓀾 𓀿最新𓀯发掘出的 𓀶古埃及𓈷宽带𓉅 广告𓁞 𓁟𓂮 𓂯𓃠𓃄𓀰 𓀱𓀐𓀡 𓀼 𓀽𓁀𓉆\n𓁀𓁁𓁂𓁃𓁄𓁅𓁆𓁇𓁈𓁉𓁊𓁋𓁌𓁍𓁎𓁏𓁐𓁑𓁒𓁓𓁔𓁕𓁖𓁗𓁘𓁙𓁚𓁛𓁜𓁝𓁞𓁟𓁠𓁡𓁢𓁣𓁤𓁥",
        "cid": 291047427,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1LA411u7MY",
        "bvid": "BV1LA411u7MY",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 331415167,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 586401881,
        "videos": 1,
        "tid": 21,
        "tname": "日常",
        "copyright": 2,
        "pic": "http://i0.hdslb.com/bfs/archive/06c2aa7637c8bc97addb2e4d51c5eb5f9c64b7a5.jpg",
        "title": "【凭良心广告补档】天灾！天灾！天灾！（绝望）（av114514）",
        "pubdate": 1612109179,
        "ctime": 1612109179,
        "desc": "原b站视频补档\n飞机君将该广告视频删除后的普通补档。\n弹幕付与无弹幕录屏版本已有T-N-O-K兄贵搬过，如需生草可移步那里。\n本视频是非录屏的无弹幕版本，就是当初的原视频。适合想要极致观看体验的人与想要使用本素材进行二次创作者。",
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
          "mid": 1731873,
          "name": "Codex_Septimia",
          "face": "https://i0.hdslb.com/bfs/face/ad55ee98ae7992f5e7631bc8340ee1ac91eeccee.jpg"
        },
        "stat": {
          "aid": 586401881,
          "view": 791249,
          "danmaku": 1667,
          "reply": 691,
          "favorite": 8050,
          "coin": 453,
          "share": 2117,
          "now_rank": 0,
          "his_rank": 0,
          "like": 19435,
          "dislike": 0,
          "vt": 0,
          "vv": 791249
        },
        "dynamic": "KNN有知名的美声，银环妈作为戏曲工作者一定也有美声。\n银环妈为凭良心做形象代言人，KNNUnofficial发布凭良心视频。\nKNN是木毛的母亲，银环妈的艺名中有“妈”字。\nKNN银环妈说成立。",
        "cid": 290699578,
        "dimension": {
          "width": 368,
          "height": 276,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1cz4y1D7Mz",
        "up_from_v2": 8,
        "pub_location": "山西",
        "bvid": "BV1cz4y1D7Mz",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 586401881,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 320315699,
        "videos": 1,
        "tid": 21,
        "tname": "日常",
        "copyright": 2,
        "pic": "http://i0.hdslb.com/bfs/archive/b146c7765d450bd1dee28bd86ed7102f769df827.jpg",
        "title": "HARDCORE大爷",
        "pubdate": 1693051288,
        "ctime": 1693051288,
        "desc": "群友发的",
        "state": 0,
        "duration": 31,
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
          "mid": 99802647,
          "name": "丿情缘灬风",
          "face": "https://i0.hdslb.com/bfs/face/7329960b16484d612fc714063dba592b1e09f936.jpg"
        },
        "stat": {
          "aid": 320315699,
          "view": 694032,
          "danmaku": 493,
          "reply": 1332,
          "favorite": 16817,
          "coin": 1356,
          "share": 16275,
          "now_rank": 0,
          "his_rank": 0,
          "like": 32469,
          "dislike": 0,
          "vt": 0,
          "vv": 694032
        },
        "dynamic": "",
        "cid": 1247688806,
        "dimension": {
          "width": 544,
          "height": 960,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1Xw411Q7Ah",
        "up_from_v2": 28,
        "first_frame": "http://i1.hdslb.com/bfs/storyff/n230826qn3j53pg60bkvzg3cghpme06f_firsti.jpg",
        "pub_location": "浙江",
        "bvid": "BV1Xw411Q7Ah",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 320315699,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 472001919,
        "videos": 1,
        "tid": 193,
        "tname": "MV",
        "copyright": 2,
        "pic": "http://i1.hdslb.com/bfs/archive/80d4ec02cbb98db2c828f0707c01d6c096a3a9d8.jpg",
        "title": "【年龄和声音终于一致了】rick应邀重新演绎经典MV",
        "pubdate": 1660644003,
        "ctime": 1660644003,
        "desc": "www.sina.com\n【高清重制版“你被骗了”】",
        "state": 0,
        "duration": 58,
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
          "mid": 313884779,
          "name": "submarineboy",
          "face": "https://i2.hdslb.com/bfs/face/f8d8aca5418f41dead66db2940aca4fab6bf578c.jpg"
        },
        "stat": {
          "aid": 472001919,
          "view": 1507776,
          "danmaku": 499,
          "reply": 361,
          "favorite": 11986,
          "coin": 1258,
          "share": 1893,
          "now_rank": 0,
          "his_rank": 0,
          "like": 53487,
          "dislike": 0,
          "vt": 0,
          "vv": 1507776
        },
        "dynamic": "",
        "cid": 805405430,
        "dimension": {
          "width": 864,
          "height": 480,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1aT411A7YY",
        "up_from_v2": 8,
        "first_frame": "http://i0.hdslb.com/bfs/storyff/n220816qno8liw07p36rv296yk523ze3_firsti.jpg",
        "pub_location": "安徽",
        "bvid": "BV1aT411A7YY",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 472001919,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 978001831,
        "videos": 1,
        "tid": 138,
        "tname": "搞笑",
        "copyright": 2,
        "pic": "http://i2.hdslb.com/bfs/archive/d4f59d4d0767f7d2b0fb27e99a60825459b77db2.jpg",
        "title": "德国某游乐场",
        "pubdate": 1641964720,
        "ctime": 1641964720,
        "desc": "https://www.reddit.com/r/AccidentalRacism/comments/ruy8i7/this_funfair_ride_that_is_in_germany/?utm_source=share&utm_medium=ios_app&utm_name=iossmf",
        "state": 0,
        "duration": 23,
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
          "mid": 393830038,
          "name": "Jed_Toastie",
          "face": "https://i1.hdslb.com/bfs/face/6bb2426ddcecca66b12f2cf3899bfca0b02e966d.jpg"
        },
        "stat": {
          "aid": 978001831,
          "view": 1007311,
          "danmaku": 341,
          "reply": 441,
          "favorite": 10873,
          "coin": 542,
          "share": 5990,
          "now_rank": 0,
          "his_rank": 0,
          "like": 24825,
          "dislike": 0,
          "vt": 0,
          "vv": 1007311
        },
        "dynamic": "",
        "cid": 482608581,
        "dimension": {
          "width": 426,
          "height": 240,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1y44y1j7Hm",
        "up_from_v2": 11,
        "first_frame": "http://i0.hdslb.com/bfs/storyff/n220112ad1wiskq1jv187v18sk8ybhpx_firsti.jpg",
        "pub_location": "中国香港",
        "bvid": "BV1y44y1j7Hm",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 978001831,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
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
          "view": 1476915,
          "danmaku": 644,
          "reply": 650,
          "favorite": 6183,
          "coin": 368,
          "share": 1100,
          "now_rank": 0,
          "his_rank": 0,
          "like": 30637,
          "dislike": 0,
          "vt": 0,
          "vv": 1476915
        },
        "dynamic": "#音乐选集##保加利亚#",
        "cid": 60984624,
        "dimension": {
          "width": 640,
          "height": 360,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1Qb411N7Ez",
        "up_from_v2": 8,
        "bvid": "BV1Qb411N7Ez",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 34812433,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 30406016,
        "videos": 1,
        "tid": 124,
        "tname": "社科·法律·心理",
        "copyright": 1,
        "pic": "http://i0.hdslb.com/bfs/archive/655cecf4c63455a5eedf650425b5b72d043746c8.jpg",
        "title": "youtube（油管）的镇管之宝 （播放量破30亿的视频）",
        "pubdate": 1535318818,
        "ctime": 1535318815,
        "desc": "不知道为什么大晚上的想做这个\n（可能是我早上作死看了什么镇店之宝，然后就去查了一下B站有没有youtube的镇店之宝排行，发现没有，然后想做，然后。。这个就出来了，不过。。。50亿播放有点吓人）\n简介字数不够撑，相关链接会在明晚发（晚修）\nhttps://www.youtube.com/watch?v=OPf0YbXqDm0\nwatch?v=9bZkp7q19f0、RgKAFK5djSk、kJQP7kiw5Fk、JGwWNGJdvx8、KYniUCGPGLs",
        "state": 0,
        "duration": 262,
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
          "mid": 24532501,
          "name": "orange橙汁juice",
          "face": "https://i1.hdslb.com/bfs/face/0b8852420761029a8d121d22a8311bc19e0a5905.jpg"
        },
        "stat": {
          "aid": 30406016,
          "view": 13872585,
          "danmaku": 34046,
          "reply": 6961,
          "favorite": 116501,
          "coin": 26718,
          "share": 3391,
          "now_rank": 0,
          "his_rank": 0,
          "like": 277220,
          "dislike": 0,
          "vt": 0,
          "vv": 13872585
        },
        "dynamic": "#油管的镇店之宝##Youtube##MV和点击量#\n不知道为什么想做这个，但已经做了，那就凑合吧，这也不是水视频，我查了十多个视频才找到这些数据",
        "cid": 53051723,
        "dimension": {
          "width": 784,
          "height": 596,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1PW411Q7LB",
        "bvid": "BV1PW411Q7LB",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 30406016,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 265120317,
        "videos": 1,
        "tid": 184,
        "tname": "预告·资讯",
        "copyright": 2,
        "pic": "http://i2.hdslb.com/bfs/archive/225cd9efeb8bf7899faac9c0eb52189a9d2721e5.jpg",
        "title": "\"人类能活下来吗？\"吴京刘德华灵魂发问 电影《流浪地球 2 》 发布\"MOSS \" 预告",
        "pubdate": 1673251590,
        "ctime": 1673251590,
        "desc": "",
        "state": 0,
        "duration": 112,
        "redirect_url": "https://www.bilibili.com/bangumi/play/ep741418?theme=movie",
        "rights": {
          "bp": 0,
          "elec": 0,
          "download": 0,
          "movie": 1,
          "pay": 0,
          "hd5": 1,
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
          "mid": 207539637,
          "name": "哔哩哔哩放映员",
          "face": "https://i0.hdslb.com/bfs/face/370e15e2cb6caf92a86d210b393617a9bbf6e884.jpg"
        },
        "stat": {
          "aid": 265120317,
          "view": 1592156,
          "danmaku": 1080,
          "reply": 4147,
          "favorite": 2938,
          "coin": 8553,
          "share": 1209,
          "now_rank": 0,
          "his_rank": 0,
          "like": 23059,
          "dislike": 0,
          "vt": 0,
          "vv": 1592156
        },
        "dynamic": "#B刷电影资讯#电影《流浪地球2》的故事围绕《流浪地球》前作展开，讲述了危机刚刚降临，地球开始\"流浪\"之前，世界陷入一片恐慌之中，万座行星发动机正在建造，人类面临末日灾难的严峻挑战。影片由郭帆导演，刘慈欣监制，吴京、李雪健、沙溢、宁理、王智、朱颜曼滋领衔主演，刘德华先生特别演出。即将于2023年大年初一全国上映。",
        "cid": 958149402,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1TY411y7Ds",
        "first_frame": "http://i0.hdslb.com/bfs/storyff/n230109qn1wytmh3zto827u2z3wfe251_firsti.jpg",
        "pub_location": "上海",
        "bvid": "BV1TY411y7Ds",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 265120317,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 851303752,
        "videos": 1,
        "tid": 21,
        "tname": "日常",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/1642e1c237b72955ba5aee24629469725d332a94.jpg",
        "title": "这可能是b站最牛的用户了，居然有人敢在b站创始人之一的评论区写日记？？？还更新了十多年！？",
        "pubdate": 1644248539,
        "ctime": 1644248539,
        "desc": "av349",
        "state": 0,
        "duration": 157,
        "mission_id": 342009,
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
          "mid": 18061914,
          "name": "练实",
          "face": "https://i0.hdslb.com/bfs/face/3eb152e249e72170553c88d1702ba99b317e4399.jpg"
        },
        "stat": {
          "aid": 851303752,
          "view": 2700655,
          "danmaku": 205,
          "reply": 2653,
          "favorite": 10211,
          "coin": 759,
          "share": 1693,
          "now_rank": 0,
          "his_rank": 0,
          "like": 86268,
          "dislike": 0,
          "vt": 0,
          "vv": 2700655
        },
        "dynamic": "",
        "cid": 503631036,
        "dimension": {
          "width": 1080,
          "height": 2160,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1cL4y1s7kH",
        "up_from_v2": 19,
        "first_frame": "http://i0.hdslb.com/bfs/storyff/n220207a22mkkm3hl8kqyc10hhl7xxan_firsti.jpg",
        "bvid": "BV1cL4y1s7kH",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 851303752,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 1018701,
        "videos": 1,
        "tid": 21,
        "tname": "日常",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/c392b46c9da4c53f6d9ec9b2e317ed636f96d6bf.jpg",
        "title": "【克里米亚 女检察官】我有特别的卖萌技巧",
        "pubdate": 1395305501,
        "ctime": 1497423668,
        "desc": "自制 萌就是正义！",
        "state": 0,
        "duration": 68,
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
          "mid": 330676,
          "name": "庄生晓梦Void",
          "face": "https://i1.hdslb.com/bfs/face/c513e74972761bd3aaf9da5beb1a5dad00dcefb4.gif"
        },
        "stat": {
          "aid": 1018701,
          "view": 6959542,
          "danmaku": 25812,
          "reply": 5682,
          "favorite": 62703,
          "coin": 12863,
          "share": 3544,
          "now_rank": 0,
          "his_rank": 2,
          "like": 89183,
          "dislike": 0,
          "vt": 0,
          "vv": 6959542
        },
        "dynamic": "",
        "cid": 1473824,
        "dimension": {
          "width": 480,
          "height": 360,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1es411Z7UG",
        "bvid": "BV1es411Z7UG",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 1018701,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 424669369,
        "videos": 1,
        "tid": 27,
        "tname": "综合",
        "copyright": 1,
        "pic": "http://i2.hdslb.com/bfs/archive/6b9e84717a9586cd6f46ee896dc730c23310e875.jpg",
        "title": "被观众推荐看《HOP》的日本vtuber 你们都喜欢这种的吗",
        "pubdate": 1647085427,
        "ctime": 1647085427,
        "desc": "太厉害了",
        "state": 0,
        "duration": 270,
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
          "mid": 1861416807,
          "name": "羽澄照乌愈Official",
          "face": "https://i0.hdslb.com/bfs/face/589d1c9bc57916158a166af5399c1a5234858924.jpg"
        },
        "stat": {
          "aid": 424669369,
          "view": 948657,
          "danmaku": 1381,
          "reply": 946,
          "favorite": 5509,
          "coin": 2278,
          "share": 508,
          "now_rank": 0,
          "his_rank": 0,
          "like": 36605,
          "dislike": 0,
          "vt": 0,
          "vv": 948657
        },
        "dynamic": "",
        "cid": 547889792,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1g3411L7iP",
        "first_frame": "http://i0.hdslb.com/bfs/storyff/n220312qn1fhcj5tl3giyi3m43p8scsu_firsti.jpg",
        "bvid": "BV1g3411L7iP",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 424669369,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 243915800,
        "videos": 1,
        "tid": 138,
        "tname": "搞笑",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/4d7ee00b0124c65d0fa89ae99709a0e4f19ba4d7.jpg",
        "title": "建议改成：美国国歌",
        "pubdate": 1595583733,
        "ctime": 1595583734,
        "desc": "BGM: What Did You learn in School Today? - Pete Seeger",
        "state": 0,
        "duration": 100,
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
          "mid": 36022720,
          "name": "勺子与保鲜膜",
          "face": "https://i1.hdslb.com/bfs/face/bb2037d6db4075c06da5fc798b0fe3fcf11a64fe.jpg"
        },
        "stat": {
          "aid": 243915800,
          "view": 11676714,
          "danmaku": 7781,
          "reply": 5271,
          "favorite": 261968,
          "coin": 158421,
          "share": 33328,
          "now_rank": 0,
          "his_rank": 0,
          "like": 640175,
          "dislike": 0,
          "vt": 0,
          "vv": 11676714
        },
        "dynamic": "#特朗普##美国##美利坚#",
        "cid": 216095542,
        "dimension": {
          "width": 1024,
          "height": 576,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1Nv411q7dJ",
        "bvid": "BV1Nv411q7dJ",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 243915800,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 843702081,
        "videos": 1,
        "tid": 138,
        "tname": "搞笑",
        "copyright": 2,
        "pic": "http://i1.hdslb.com/bfs/archive/ba6bef51ed095c85250af0427da105eec2b20727.jpg",
        "title": "油管官方惨遭Rickroll",
        "pubdate": 1610655191,
        "ctime": 1610655191,
        "desc": "twitter.com/edma06RBLX/status/1336063965701545988\n真实事件",
        "state": 0,
        "duration": 24,
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
          "mid": 477500,
          "name": "tobラハイサ",
          "face": "https://i2.hdslb.com/bfs/face/74909beeba74b6ecb53e8d93f36d14e3371170a6.jpg"
        },
        "stat": {
          "aid": 843702081,
          "view": 2473244,
          "danmaku": 789,
          "reply": 882,
          "favorite": 14983,
          "coin": 678,
          "share": 3097,
          "now_rank": 0,
          "his_rank": 0,
          "like": 79300,
          "dislike": 0,
          "vt": 0,
          "vv": 2473244
        },
        "dynamic": "",
        "cid": 282521485,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1L54y1s7wg",
        "bvid": "BV1L54y1s7wg",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 843702081,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 805480295,
        "videos": 1,
        "tid": 138,
        "tname": "搞笑",
        "copyright": 2,
        "pic": "http://i2.hdslb.com/bfs/archive/1801214eb4b7add422f2e08406204978b2b9b481.jpg",
        "title": "Ngana Rindu高级版",
        "pubdate": 1631568595,
        "ctime": 1631568595,
        "desc": "https://www.youtube.com/watch?v=DkrAxPsKJv8\n鉴于很多人想要视频，我就打包了视频和bgm。需要的话请自行下载[\n链接: https://pan.baidu.com/s/1sDIdjy-FHrpcb9PDsi6XEg 提取码: u83n",
        "state": 0,
        "duration": 83,
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
          "mid": 1603908990,
          "name": "schei8e",
          "face": "https://i0.hdslb.com/bfs/face/4d3127af1eb8ff4784f29f7a909ff1b152df8e11.jpg"
        },
        "stat": {
          "aid": 805480295,
          "view": 28247298,
          "danmaku": 20112,
          "reply": 7761,
          "favorite": 513278,
          "coin": 170786,
          "share": 207987,
          "now_rank": 0,
          "his_rank": 31,
          "like": 943402,
          "dislike": 0,
          "vt": 0,
          "vv": 28247298
        },
        "dynamic": "",
        "cid": 407888077,
        "dimension": {
          "width": 608,
          "height": 1080,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1R34y1Q7J4",
        "first_frame": "http://i2.hdslb.com/bfs/storyff/n210914a233a5cb5ku791zvxkpays3r6_firsti.jpg",
        "bvid": "BV1R34y1Q7J4",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 805480295,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 600031475,
        "videos": 1,
        "tid": 193,
        "tname": "MV",
        "copyright": 2,
        "pic": "http://i2.hdslb.com/bfs/archive/7b9bd555ed88c9ff6ff746551ab49219ce2bf344.jpg",
        "title": "【8K】MV 宮本浩次 《冬之花》「冬の花」—— 收藏级画质",
        "pubdate": 1655283491,
        "ctime": 1655283492,
        "desc": "关注后自动回复获取群号\n往期视频下载链接在群文件\n群文件没有上传的请私信UP\n感谢各位看官老爷的一键三连和充电\n你的支持是我更新的动力！",
        "state": 0,
        "duration": 267,
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
          "no_background": 0,
          "arc_pay": 0,
          "pay_free_watch": 0
        },
        "owner": {
          "mid": 34870081,
          "name": "Sallos",
          "face": "https://i1.hdslb.com/bfs/face/ac268f534cb26fe6bfb8fbfd229e4b323456b4d8.jpg"
        },
        "stat": {
          "aid": 600031475,
          "view": 10158426,
          "danmaku": 23883,
          "reply": 8656,
          "favorite": 280801,
          "coin": 80915,
          "share": 65081,
          "now_rank": 0,
          "his_rank": 0,
          "like": 321518,
          "dislike": 0,
          "vt": 0,
          "vv": 10158426
        },
        "dynamic": "",
        "cid": 747397025,
        "dimension": {
          "width": 7680,
          "height": 4320,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1sB4y147MZ",
        "first_frame": "http://i2.hdslb.com/bfs/storyff/n220615a221rk8h1nhwgqs20l5vtj9xt_firsti.jpg",
        "pub_location": "北京",
        "bvid": "BV1sB4y147MZ",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 600031475,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 51473940,
        "videos": 1,
        "tid": 130,
        "tname": "音乐综合",
        "copyright": 2,
        "pic": "http://i2.hdslb.com/bfs/archive/e017186678d864cee15c7bbf6a7053a1cff5ecea.jpg",
        "title": "抑郁听两遍-《孤儿乐园》",
        "pubdate": 1556983085,
        "ctime": 1556983085,
        "desc": "《孤儿乐园》是台湾女歌手卓依婷演唱的一首歌曲，收录于1996年发行的专辑《校园青春乐》中。",
        "state": 0,
        "duration": 165,
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
          "mid": 84121473,
          "name": "Ottimisti",
          "face": "https://i0.hdslb.com/bfs/face/62340162f04ae2607c48608fa44513dcd091d4de.webp"
        },
        "stat": {
          "aid": 51473940,
          "view": 11158972,
          "danmaku": 153407,
          "reply": 14915,
          "favorite": 150203,
          "coin": 23518,
          "share": 109196,
          "now_rank": 0,
          "his_rank": 34,
          "like": 246194,
          "dislike": 0,
          "vt": 0,
          "vv": 11158972
        },
        "dynamic": "#音乐##治愈向##致郁#",
        "cid": 90097246,
        "dimension": {
          "width": 1080,
          "height": 1920,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1N4411i7Pt",
        "bvid": "BV1N4411i7Pt",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 51473940,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
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
          "view": 82923631,
          "danmaku": 116923,
          "reply": 145821,
          "favorite": 1138175,
          "coin": 917605,
          "share": 337308,
          "now_rank": 0,
          "his_rank": 0,
          "like": 2161145,
          "dislike": 0,
          "vt": 0,
          "vv": 82923631
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
        "bvid": "BV1GJ411x7h7",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 80433022,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 598292501,
        "videos": 1,
        "tid": 138,
        "tname": "搞笑",
        "copyright": 1,
        "pic": "http://i2.hdslb.com/bfs/archive/c9dcb4b6d27c587c2d703efc29d31bffd6266ec0.jpg",
        "title": "我爸的收藏，来自三十年前的骗局",
        "pubdate": 1657626186,
        "ctime": 1657626186,
        "desc": "-",
        "state": 0,
        "duration": 244,
        "mission_id": 755832,
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
          "mid": 3173690,
          "name": "面霜_facecream",
          "face": "https://i2.hdslb.com/bfs/face/c765c540e50f38522cb7421fe48eb26168c2251c.jpg"
        },
        "stat": {
          "aid": 598292501,
          "view": 5253173,
          "danmaku": 4018,
          "reply": 4056,
          "favorite": 62433,
          "coin": 19041,
          "share": 10281,
          "now_rank": 0,
          "his_rank": 40,
          "like": 434897,
          "dislike": 0,
          "vt": 0,
          "vv": 5253173
        },
        "dynamic": "",
        "cid": 771205689,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV11B4y1e7Zp",
        "up_from_v2": 20,
        "first_frame": "http://i1.hdslb.com/bfs/storyff/n220712qn1v1aiz14ttdc3sp5cjbv7m1_firsti.jpg",
        "pub_location": "北京",
        "bvid": "BV11B4y1e7Zp",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 598292501,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 752817708,
        "videos": 1,
        "tid": 138,
        "tname": "搞笑",
        "copyright": 1,
        "pic": "http://i0.hdslb.com/bfs/archive/064da6608c12892d673c4fbf6849736a8d370970.jpg",
        "title": "接 单 成 功",
        "pubdate": 1587060098,
        "ctime": 1587060098,
        "desc": "切勿疲劳驾驶",
        "state": 0,
        "duration": 23,
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
          "mid": 834635,
          "name": "黑玛瑙",
          "face": "http://i2.hdslb.com/bfs/face/d9253039e6da0c266104f8ff225b8a83ecf289b9.jpg"
        },
        "stat": {
          "aid": 752817708,
          "view": 9211533,
          "danmaku": 3650,
          "reply": 2338,
          "favorite": 50476,
          "coin": 24078,
          "share": 33582,
          "now_rank": 0,
          "his_rank": 19,
          "like": 257783,
          "dislike": 0,
          "vt": 0,
          "vv": 9211533
        },
        "dynamic": "#黑人抬棺#",
        "cid": 179358597,
        "dimension": {
          "width": 1080,
          "height": 1920,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1zk4y1R7gi",
        "pub_location": "广东",
        "bvid": "BV1zk4y1R7gi",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 752817708,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 628641603,
        "videos": 4,
        "tid": 17,
        "tname": "单机游戏",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/1e1f0d1b3457bc17c7d0ad59bf15f68c69214404.jpg",
        "title": "骗 过 上 帝",
        "pubdate": 1610796481,
        "ctime": 1610796481,
        "desc": "P2音量注意！！\nP2音量注意！！",
        "state": 0,
        "duration": 55,
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
          "mid": 31933468,
          "name": "天そら",
          "face": "https://i1.hdslb.com/bfs/face/ca130aa54daa846ee8d39c0bf8db7e19afc4af89.jpg"
        },
        "stat": {
          "aid": 628641603,
          "view": 10114976,
          "danmaku": 2384,
          "reply": 2770,
          "favorite": 199680,
          "coin": 63408,
          "share": 37938,
          "now_rank": 0,
          "his_rank": 0,
          "like": 236177,
          "dislike": 0,
          "vt": 0,
          "vv": 10114976
        },
        "dynamic": "",
        "cid": 283868302,
        "dimension": {
          "width": 1280,
          "height": 720,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV15t4y1z7sS",
        "bvid": "BV15t4y1z7sS",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 628641603,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 508705976,
        "videos": 1,
        "tid": 138,
        "tname": "搞笑",
        "copyright": 2,
        "pic": "http://i1.hdslb.com/bfs/archive/d53d2b502305a9e6cf942ffdeb50e1e223e1581e.jpg",
        "title": "我一直在等他说德语",
        "pubdate": 1643556577,
        "ctime": 1643556577,
        "desc": "tik tok\nQQ空间转载视频\n侵删",
        "state": 0,
        "duration": 95,
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
          "mid": 12922294,
          "name": "屠龙的番茄炒蛋",
          "face": "https://i1.hdslb.com/bfs/face/d890299b31edeb9959cc1a76ace2fe68f5af3bea.jpg"
        },
        "stat": {
          "aid": 508705976,
          "view": 12094647,
          "danmaku": 9717,
          "reply": 4528,
          "favorite": 179645,
          "coin": 48401,
          "share": 101874,
          "now_rank": 0,
          "his_rank": 0,
          "like": 403291,
          "dislike": 0,
          "vt": 0,
          "vv": 12094647
        },
        "dynamic": "",
        "cid": 498009758,
        "dimension": {
          "width": 856,
          "height": 480,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1uu411d7ax",
        "up_from_v2": 35,
        "first_frame": "http://i2.hdslb.com/bfs/storyff/n220130a225h5i4fqeu9zuqns20wgj97_firsti.jpg",
        "bvid": "BV1uu411d7ax",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 508705976,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 469143727,
        "videos": 1,
        "tid": 201,
        "tname": "科学科普",
        "copyright": 2,
        "pic": "http://i1.hdslb.com/bfs/archive/33e2ce4fd06847ce703b6bb0151cc37a3bb40550.jpg",
        "title": "不可思议！蚂蚁沿着这个方向一直走，神奇的一幕来了！@油兔不二字幕组",
        "pubdate": 1652782288,
        "ctime": 1652782288,
        "desc": "https://www.youtube.com/watch?v=_PCoPzf8i9o",
        "state": 0,
        "duration": 25,
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
          "mid": 15967711,
          "name": "油兔不二字幕组",
          "face": "https://i1.hdslb.com/bfs/face/23e00144a96d7110db302f50d52e340f98af377d.jpg"
        },
        "stat": {
          "aid": 469143727,
          "view": 507538,
          "danmaku": 63,
          "reply": 328,
          "favorite": 1779,
          "coin": 37,
          "share": 84,
          "now_rank": 0,
          "his_rank": 0,
          "like": 8366,
          "dislike": 0,
          "vt": 0,
          "vv": 507538
        },
        "dynamic": "睁大眼认真看！千万不要眨眼！一直走，一直走，居然走到了……这真的是个神奇的空间，数学是如此美妙！",
        "cid": 722525913,
        "dimension": {
          "width": 450,
          "height": 560,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1u5411R7RK",
        "first_frame": "http://i2.hdslb.com/bfs/storyff/n220517qnmvx8etq4vyx2t3sgafi1zc3_firsti.jpg",
        "pub_location": "福建",
        "bvid": "BV1u5411R7RK",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 469143727,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 605316920,
        "videos": 1,
        "tid": 29,
        "tname": "音乐现场",
        "copyright": 2,
        "pic": "http://i1.hdslb.com/bfs/archive/7782e2eeab413bec5c46edfd15bffb5e7b3892da.jpg",
        "title": "泽连斯基在俄国跨年节目上歌舞2013(完整版)",
        "pubdate": 1669000560,
        "ctime": 1669000560,
        "desc": "youtube\n原曲\nДискотека Авария — Новогодняя",
        "state": 0,
        "duration": 199,
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
          "mid": 306423517,
          "name": "Nayrok",
          "face": "https://i1.hdslb.com/bfs/face/29523c7f3ee91f55676fd681c03168a7e2018d3e.jpg"
        },
        "stat": {
          "aid": 605316920,
          "view": 3683544,
          "danmaku": 3941,
          "reply": 7528,
          "favorite": 26701,
          "coin": 2891,
          "share": 27710,
          "now_rank": 0,
          "his_rank": 0,
          "like": 55089,
          "dislike": 0,
          "vt": 0,
          "vv": 3683544
        },
        "dynamic": "",
        "cid": 898106941,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1Q84y1k7dT",
        "up_from_v2": 35,
        "first_frame": "http://i1.hdslb.com/bfs/storyff/n221121adatz2r5mjg8cd1688brlzti7_firsti.jpg",
        "pub_location": "中国台湾",
        "bvid": "BV1Q84y1k7dT",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 605316920,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 669307520,
        "videos": 1,
        "tid": 193,
        "tname": "MV",
        "copyright": 1,
        "pic": "http://i0.hdslb.com/bfs/archive/e91f2d6c4b8aefe862c75bca6f997bac13e1a689.jpg",
        "title": "【官方MV】ナナヲアカリ「完全放棄宣言」",
        "pubdate": 1599408049,
        "ctime": 1598266568,
        "desc": "",
        "state": 0,
        "duration": 266,
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
          "aid": 669307520,
          "view": 1866712,
          "danmaku": 983,
          "reply": 1635,
          "favorite": 70439,
          "coin": 31735,
          "share": 9715,
          "now_rank": 0,
          "his_rank": 0,
          "like": 81500,
          "dislike": 0,
          "vt": 0,
          "vv": 1866712
        },
        "dynamic": "",
        "cid": 228238849,
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "season_id": 1307508,
        "short_link_v2": "https://b23.tv/BV1pa4y177qi",
        "up_from_v2": 15,
        "pub_location": "未知",
        "bvid": "BV1pa4y177qi",
        "season_type": 1,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 669307520,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
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
          "view": 34555566,
          "danmaku": 43970,
          "reply": 9671,
          "favorite": 851993,
          "coin": 497044,
          "share": 233825,
          "now_rank": 0,
          "his_rank": 0,
          "like": 1310434,
          "dislike": 0,
          "vt": 0,
          "vv": 34555566
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
        "bvid": "BV1jU4y1N7vg",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 675490509,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 424255760,
        "videos": 1,
        "tid": 27,
        "tname": "综合",
        "copyright": 2,
        "pic": "http://i2.hdslb.com/bfs/archive/00d44d28329c6b42fa2b701ab16ae9011d955374.jpg",
        "title": "【绊爱】万恶之源 花Q",
        "pubdate": 1645927038,
        "ctime": 1645927038,
        "desc": "https://www.youtube.com/watch?v=FyFYH-7Ody0\n@AIChannel官方  \n爱的b站主页：https://space.bilibili.com/1473830\n祝ai酱一帆风顺",
        "state": 0,
        "duration": 17,
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
          "mid": 418077794,
          "name": "沐秋的伞",
          "face": "https://i2.hdslb.com/bfs/face/aa133427eff9b3a21aad471691e27b4fd54439a5.jpg"
        },
        "stat": {
          "aid": 424255760,
          "view": 813059,
          "danmaku": 40,
          "reply": 492,
          "favorite": 10383,
          "coin": 725,
          "share": 1497,
          "now_rank": 0,
          "his_rank": 0,
          "like": 28100,
          "dislike": 0,
          "vt": 0,
          "vv": 813059
        },
        "dynamic": "",
        "cid": 517786072,
        "dimension": {
          "width": 2160,
          "height": 1080,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1R3411L7Jc",
        "up_from_v2": 19,
        "first_frame": "http://i2.hdslb.com/bfs/storyff/n220227qn1euzixuzs9w981rpjcapccw_firsti.jpg",
        "bvid": "BV1R3411L7Jc",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 424255760,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 843793876,
        "videos": 1,
        "tid": 138,
        "tname": "搞笑",
        "copyright": 2,
        "pic": "http://i1.hdslb.com/bfs/archive/74234c81ff5a00cc8a1db6c37b955cadee2e0737.jpg",
        "title": "【8K超高清重制版】印尼魔性电信广告原版完整版IndiHome Paket Phoenix",
        "pubdate": 1611702584,
        "ctime": 1611702584,
        "desc": "前面那个被锁了，现在重投了\n原版看累了来康康up的其他印尼宽带视频吧\n哔哩哔哩大会员广告印尼特供版 8K超高清重制版BV14T4y1K7gY\n印尼宽带西藏特供版ཧིན་ཉི་ཐགས་ཡངས་དམིགས་བསལ་མཁོ་འདོན་པར་གཞི་BV1ao4y1d7VH\n【4K⁶⁰ᶠᵖˢ】这里有一个初音给你的视频唷 BV19T4y1A7fJ\n古埃及宽带广告最新出土av331415167\n汉谟拉比宽带 BV1rv411s7b6\n【乱 码】此 宽 带 无 法 显 示    迠鐩 BV1P54y1W75k",
        "state": 0,
        "duration": 262,
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
          "mid": 294594289,
          "name": "不咕的鱼鸽子",
          "face": "https://i1.hdslb.com/bfs/face/10eb0658f6ff99e8f042168b15f7c684533f359e.webp"
        },
        "stat": {
          "aid": 843793876,
          "view": 3971358,
          "danmaku": 29319,
          "reply": 2663,
          "favorite": 102296,
          "coin": 24942,
          "share": 27730,
          "now_rank": 0,
          "his_rank": 0,
          "like": 165773,
          "dislike": 0,
          "vt": 0,
          "vv": 3971358
        },
        "dynamic": "https://www.youtube.com/watch?v=5WVTFZAiB5Y，自己进行了8K高清重制\n前面那个被锁了，现在重投了\n记得多发弹幕吖~~~多发点空耳的唷\n原版看累了来康康up的其他印尼宽带视频吧\n哔哩哔哩大会员广告印尼特供版 8K超高清重制版BV14T4y1K7gY\n【4K⁶⁰ᶠᵖˢ】这里有一个初音给你的视频唷~~ BV19T4y1A7fJ\n\n#IndiHome paket Phoen##印尼宽带#",
        "cid": 288188355,
        "dimension": {
          "width": 3840,
          "height": 2160,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1y54y1s74a",
        "bvid": "BV1y54y1s74a",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 843793876,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 16744787,
        "videos": 1,
        "tid": 138,
        "tname": "搞笑",
        "copyright": 2,
        "pic": "http://i0.hdslb.com/bfs/archive/fc7356c9e697b4f9f911a4f1c14c15ac24444ea5.jpg",
        "title": "一个愤怒的德国小哥，为了证明德国人非常幽默，给大家讲了个笑话……",
        "pubdate": 1511852220,
        "ctime": 1511852220,
        "desc": "https://weibo.com/2393541445/Fx2D0xQ9e?from=page_1005052393541445_profile&amp;wvr=6&amp;mod=weibotime\n一个愤怒的德国小哥，为了证明德国人非常幽默，给大家讲了个笑话……\n（微博@松鼠视频）",
        "state": 0,
        "duration": 25,
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
          "mid": 95511972,
          "name": "松鼠视频",
          "face": "http://i0.hdslb.com/bfs/face/706c7b0f8131aaae59886094d6dda3ae789775c9.jpg"
        },
        "stat": {
          "aid": 16744787,
          "view": 3829756,
          "danmaku": 1607,
          "reply": 1795,
          "favorite": 24529,
          "coin": 1377,
          "share": 6101,
          "now_rank": 0,
          "his_rank": 0,
          "like": 106929,
          "dislike": 0,
          "vt": 0,
          "vv": 3829756
        },
        "dynamic": "一个愤怒的德国小哥，为了证明德国人非常幽默，给大家讲了个笑话……\n（微博@松鼠视频）",
        "cid": 27360814,
        "dimension": {
          "width": 360,
          "height": 360,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1kx41157pM",
        "bvid": "BV1kx41157pM",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 16744787,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 738113948,
        "videos": 1,
        "tid": 138,
        "tname": "搞笑",
        "copyright": 1,
        "pic": "http://i2.hdslb.com/bfs/archive/1b3dc4772ba90b6fc2e258023ea8082cf11f1556.jpg",
        "title": "当年成功暂停了b站最短的视频",
        "pubdate": 1677983278,
        "ctime": 1677983279,
        "desc": "哼哼哼，喝啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊哇啊啊啊啊啊这简介太臭力",
        "state": 0,
        "duration": 26,
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
          "mid": 1942788306,
          "name": "神经兮兮的病猫",
          "face": "https://i0.hdslb.com/bfs/face/7e72c58637ff26df68fb30939de078d2bbbfcdbe.jpg"
        },
        "stat": {
          "aid": 738113948,
          "view": 1126625,
          "danmaku": 239,
          "reply": 964,
          "favorite": 1503,
          "coin": 359,
          "share": 90,
          "now_rank": 0,
          "his_rank": 0,
          "like": 12365,
          "dislike": 0,
          "vt": 0,
          "vv": 1126625
        },
        "dynamic": "|-|",
        "cid": 1039873906,
        "dimension": {
          "width": 616,
          "height": 1280,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1kD4y1M7xk",
        "up_from_v2": 8,
        "first_frame": "http://i0.hdslb.com/bfs/storyff/n230305qn2e096agbu88t6j39xe0mk9t_firsti.jpg",
        "pub_location": "广东",
        "bvid": "BV1kD4y1M7xk",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 738113948,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 207094984,
        "videos": 1,
        "tid": 21,
        "tname": "日常",
        "copyright": 1,
        "pic": "http://i2.hdslb.com/bfs/archive/8a52c7b347410bd7fc76f12243cc5cfa8287281e.jpg",
        "title": "Van Darkholme 听完这首歌绷不住了",
        "pubdate": 1628157469,
        "ctime": 1628157469,
        "desc": "Van Darkholme 听完这首歌绷不住了",
        "state": 0,
        "duration": 376,
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
          "mid": 477631979,
          "name": "vansamaofficial",
          "face": "https://i2.hdslb.com/bfs/face/78ce170986aa6a8536a74f20d512efb1ba01abc7.jpg"
        },
        "stat": {
          "aid": 207094984,
          "view": 2048608,
          "danmaku": 2829,
          "reply": 3263,
          "favorite": 16843,
          "coin": 11612,
          "share": 6341,
          "now_rank": 0,
          "his_rank": 0,
          "like": 104351,
          "dislike": 0,
          "vt": 0,
          "vv": 2048608
        },
        "dynamic": "Van Darkholme 听完这首歌绷不住了",
        "cid": 383094867,
        "dimension": {
          "width": 1280,
          "height": 720,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1eh411q7ic",
        "first_frame": "http://i1.hdslb.com/bfs/storyff/n210805a23chpxg28zrbpo2kec99cy76_firsti.jpg",
        "pub_location": "浙江",
        "bvid": "BV1eh411q7ic",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 207094984,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 2056621,
        "videos": 1,
        "tid": 21,
        "tname": "日常",
        "copyright": 2,
        "pic": "http://i0.hdslb.com/bfs/archive/b7c6370dc85a19722d94f1677468c6443a1c40e1.jpg",
        "title": "德国BOY原版 (空耳字幕版)",
        "pubdate": 1425053793,
        "ctime": 1497430587,
        "desc": "http://v.qq.com/boke/page/k/q/z/k0147k30cqz.html 这才是真正的德国男孩说中文",
        "state": 0,
        "duration": 262,
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
          "mid": 8224350,
          "name": "UmiKu39",
          "face": "https://i0.hdslb.com/bfs/face/81ca8715513197e252d795b14b16d25f77072929.jpg"
        },
        "stat": {
          "aid": 2056621,
          "view": 8428011,
          "danmaku": 98925,
          "reply": 17208,
          "favorite": 303576,
          "coin": 83034,
          "share": 146215,
          "now_rank": 0,
          "his_rank": 0,
          "like": 321054,
          "dislike": 0,
          "vt": 0,
          "vv": 8428011
        },
        "dynamic": "",
        "cid": 3183008,
        "dimension": {
          "width": 444,
          "height": 360,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1yx411A72S",
        "bvid": "BV1yx411A72S",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 2056621,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 585887630,
        "videos": 1,
        "tid": 138,
        "tname": "搞笑",
        "copyright": 2,
        "pic": "http://i0.hdslb.com/bfs/archive/56d158e4816546efbf8adda8fa2c1649ab053723.jpg",
        "title": "Rick astley本人被Rickroll给Rickroll了",
        "pubdate": 1609655387,
        "ctime": 1609655387,
        "desc": "https://www.youtube.com/watch?v=bIY0OYCB15w",
        "state": 0,
        "duration": 9,
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
          "mid": 25072174,
          "name": "通訊录好友",
          "face": "https://i1.hdslb.com/bfs/baselabs/5e0044971bc5740363e6df59c9d4be59a6489651.jpg"
        },
        "stat": {
          "aid": 585887630,
          "view": 2082713,
          "danmaku": 145,
          "reply": 395,
          "favorite": 6660,
          "coin": 243,
          "share": 355,
          "now_rank": 0,
          "his_rank": 0,
          "like": 42458,
          "dislike": 0,
          "vt": 0,
          "vv": 2082713
        },
        "dynamic": "",
        "cid": 276435856,
        "dimension": {
          "width": 1280,
          "height": 720,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1fz4y1r7dH",
        "bvid": "BV1fz4y1r7dH",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 585887630,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 29842657,
        "videos": 1,
        "tid": 21,
        "tname": "日常",
        "copyright": 1,
        "pic": "http://i0.hdslb.com/bfs/archive/36be926b50bc091fc8074c540e2a9510844318e2.jpg",
        "title": "班长：我@#真的看不下去了！",
        "pubdate": 1535580001,
        "ctime": 1535579997,
        "desc": "已置顶被迫害的同学",
        "state": 0,
        "duration": 22,
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
          "mid": 108330718,
          "name": "芙兰D嗒啦",
          "face": "https://i1.hdslb.com/bfs/face/9c63726ee0900789aaabcc4db07c812b654c1fca.jpg"
        },
        "stat": {
          "aid": 29842657,
          "view": 327790,
          "danmaku": 156,
          "reply": 175,
          "favorite": 629,
          "coin": 32,
          "share": 159,
          "now_rank": 0,
          "his_rank": 0,
          "like": 2990,
          "dislike": 0,
          "vt": 0,
          "vv": 327790
        },
        "dynamic": "",
        "cid": 51962975,
        "dimension": {
          "width": 1280,
          "height": 720,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1aW411975v",
        "up_from_v2": 8,
        "bvid": "BV1aW411975v",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 29842657,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 816173477,
        "videos": 1,
        "tid": 17,
        "tname": "单机游戏",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/12a107b256a8984ac3e18c720d0ec1cf8786f07e.jpg",
        "title": "『SLG/像素/安卓直装』白毛萝莉…嘿嘿嘿！😍",
        "pubdate": 1664855100,
        "ctime": 1664797579,
        "desc": "可恶，我想去其他地方耍，河南农村太悲了，虽然房子确实蛮大的，但是灰尘好多啊啊啊啊啊",
        "state": 0,
        "duration": 31,
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
          "mid": 503190013,
          "name": "卡卡萌拉",
          "face": "https://i1.hdslb.com/bfs/face/db1e5deb2a25e54a7a857cb5ba285066e4d0c587.jpg"
        },
        "stat": {
          "aid": 816173477,
          "view": 488050,
          "danmaku": 41,
          "reply": 446,
          "favorite": 7598,
          "coin": 8801,
          "share": 135,
          "now_rank": 0,
          "his_rank": 0,
          "like": 15446,
          "dislike": 0,
          "vt": 0,
          "vv": 488050
        },
        "dynamic": "让我看看是谁让我妊娠了",
        "cid": 851127373,
        "dimension": {
          "width": 1280,
          "height": 720,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1pG4y1W73S",
        "up_from_v2": 19,
        "first_frame": "http://i2.hdslb.com/bfs/storyff/n221003a22arnbc249oey1v6tsl6s1kk_firsti.jpg",
        "pub_location": "河南",
        "bvid": "BV1pG4y1W73S",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 816173477,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 895258574,
        "videos": 1,
        "tid": 130,
        "tname": "音乐综合",
        "copyright": 2,
        "pic": "http://i2.hdslb.com/bfs/archive/b94b8be43cd0a9a12bf1a334541b017a3bd24cb6.jpg",
        "title": "【全弹幕】av10388 武器A",
        "pubdate": 1648906567,
        "ctime": 1648906567,
        "desc": "sm9307581\n武器A\n[日常]UP主：博丽·灵梦（UID：13308）\n播放:0 | 弹幕:38279 | 硬币:3921 | 收藏:40047\n投稿时间：2010/06/20 10:13\n啊哈哈哈，啊哈哈，啊哈，啊……总之就是武器……",
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
          "mid": 104657830,
          "name": "尚宜鼎MEMZ",
          "face": "https://i1.hdslb.com/bfs/face/6761798442c6e9607c62803ac4fa5fe4a3e7b25b.jpg"
        },
        "stat": {
          "aid": 895258574,
          "view": 2763614,
          "danmaku": 14104,
          "reply": 2200,
          "favorite": 9211,
          "coin": 367,
          "share": 2980,
          "now_rank": 0,
          "his_rank": 0,
          "like": 36940,
          "dislike": 0,
          "vt": 0,
          "vv": 2763614
        },
        "dynamic": "",
        "cid": 565705666,
        "dimension": {
          "width": 2560,
          "height": 1442,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1NP4y1K7Ze",
        "first_frame": "http://i1.hdslb.com/bfs/storyff/n220402qnljolmy317ncyss4pr3ds863_firsti.jpg",
        "pub_location": "广东",
        "bvid": "BV1NP4y1K7Ze",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 895258574,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
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
          "name": "SJM-史密斯",
          "face": "https://i1.hdslb.com/bfs/face/5a9898c57668ab662ad509151896284b10d2f3f7.jpg"
        },
        "stat": {
          "aid": 827984205,
          "view": 144989,
          "danmaku": 170,
          "reply": 324,
          "favorite": 761,
          "coin": 76,
          "share": 2247,
          "now_rank": 0,
          "his_rank": 0,
          "like": 4081,
          "dislike": 0,
          "vt": 0,
          "vv": 144989
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
        "bvid": "BV19g4y1A7xq",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 827984205,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
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
          "view": 5385788,
          "danmaku": 2780,
          "reply": 2811,
          "favorite": 104536,
          "coin": 7321,
          "share": 5689,
          "now_rank": 0,
          "his_rank": 0,
          "like": 97393,
          "dislike": 0,
          "vt": 0,
          "vv": 5385788
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
        "bvid": "BV1Ud4y1M7C7",
        "season_type": 1,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 345957866,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
          "uniq_id": ""
        }
      },
      {
        "aid": 827183116,
        "videos": 1,
        "tid": 138,
        "tname": "搞笑",
        "copyright": 1,
        "pic": "http://i1.hdslb.com/bfs/archive/724f74b61f670b10a78e026a352864eb7e89a138.jpg",
        "title": "对不起马老师，我真的没忍住",
        "pubdate": 1686386780,
        "ctime": 1686386780,
        "desc": "-",
        "state": 0,
        "duration": 23,
        "mission_id": 1570720,
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
          "mid": 207454032,
          "name": "趣看视频",
          "face": "https://i0.hdslb.com/bfs/face/ff1317c16a58620a8e7a3c27d9db9a9edf569d59.jpg"
        },
        "stat": {
          "aid": 827183116,
          "view": 2797645,
          "danmaku": 2818,
          "reply": 2023,
          "favorite": 20772,
          "coin": 5499,
          "share": 25617,
          "now_rank": 0,
          "his_rank": 0,
          "like": 56003,
          "dislike": 0,
          "vt": 0,
          "vv": 2797645
        },
        "dynamic": "",
        "cid": 1159242423,
        "dimension": {
          "width": 1080,
          "height": 1920,
          "rotate": 0
        },
        "short_link_v2": "https://b23.tv/BV1ou4y1d7Z3",
        "up_from_v2": 19,
        "first_frame": "http://i2.hdslb.com/bfs/storyff/n230610a21n9lcrrzzdtud2zi8janufy_firsti.jpg",
        "pub_location": "广西",
        "bvid": "BV1ou4y1d7Z3",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 827183116,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
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
          "view": 40520266,
          "danmaku": 76914,
          "reply": 17391,
          "favorite": 1545707,
          "coin": 693056,
          "share": 547011,
          "now_rank": 0,
          "his_rank": 15,
          "like": 1970242,
          "dislike": 0,
          "vt": 0,
          "vv": 40520266
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
        "bvid": "BV1Ax411d7jD",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": {
          "id": 56927206,
          "goto": "av",
          "trackid": "web_related_0.router-related-1359031-c4bbc7796-vzc6q.1702381552599.144",
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
    "recommend": null,
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
    "is_old_user": false,
    "participle": null
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
    }, 
    …………
    ]
}
```

</details>
