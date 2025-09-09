# 动态卡片信息字段

不同动态内容卡片的具体信息。包含在 [获取特定动态卡片信息](get_dynamic_detail.md#获取特定动态卡片信息) 等 API 的 JSON 回复中

以card字段的形式出现，内容为一个可被解析为Json对象的字符串。

不同类型的动态内容拥有不同的字段。

注: 本处 `type` 一般不包含在 `card` 字符串代表的对象内

****

## 转发动态 (type=1)

需注意账号转发视频投稿，其他用户的动态以及分享收藏夹等均为转发类内容，并不属于type=4300的收藏类动态等。

在type=1的转发类动态中，解析出的对象包含以下内容：

| 字段 | 类型 | 内容 | 备注 |
| ------- | ---- | -------- | ------- |
| user | obj | 转发者用户信息 | 包含用户名，用户id和头像 |
| item | obj | 转发相关信息 |  `content`字段为转发附言 | |
| origin | str | 被转发动态信息 | 即本文档所描述的动态详细信息字段。<br/>动态类型为`item`对象的`orig_type`字段 |
| origin_extend_json | str | 被转发动态补充信息 | |
| origin_user | obj | 被转发用户信息 | |
| activity_infos | obj | 被转发动态参与的活动 | |

<details>
<summary>查看字段内容示例：</summary>

```json
{
  "user": {
    "uid": 1704629193,
    "uname": "钢板狗的狐",
    "face": "https://i0.hdslb.com/bfs/face/443bfd128429f84c0d81c20c4354ea5007f7480c.jpg"
  },
  "item": {
    "rp_id": 587236631985408400,
    "uid": 1704629193,
    "content": "#阅机无数#这是什么本子",
    "ctrl": "",
    "orig_dy_id": 587058081595689300,
    "pre_dy_id": 587058081595689300,
    "timestamp": 1635565083,
    "reply": 0,
    "orig_type": 8
  },
  "origin": "{\"aid\":933765713,\"attribute\":0,\"cid\":433047365,\"copyright\":1,\"ctime\":1635523511,\"desc\":\"-\",\"dimension\":{\"height\":1920,\"rotate\":0,\"width\":1080},\"duration\":200,\"dynamic\":\"\",\"first_frame\":\"https:\\/\\/i2.hdslb.com\\/bfs\\/storyff\\/n211029a2nf13h6fhybt231isumtaj9x_firsti.jpg\",\"jump_url\":\"bilibili:\\/\\/video\\/933765713\\/?page=1&player_preload=null&player_width=1080&player_height=1920&player_rotate=0\",\"owner\":{\"face\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/e4c06054bc9d6c564637f70a7565a6a2d24ee521.jpg\",\"mid\":492755628,\"name\":\"Leojdj\"},\"pic\":\"https:\\/\\/i2.hdslb.com\\/bfs\\/archive\\/8b3bd4387d4041389ba7f02ce813b17f96a7f1e2.jpg\",\"player_info\":null,\"pubdate\":1635523511,\"rights\":{\"autoplay\":1,\"bp\":0,\"download\":0,\"elec\":0,\"hd5\":0,\"is_cooperation\":0,\"movie\":0,\"no_background\":0,\"no_reprint\":1,\"pay\":0,\"ugc_pay\":0,\"ugc_pay_preview\":0},\"short_link\":\"https:\\/\\/b23.tv\\/BV16T4y1R7H9\",\"short_link_v2\":\"https:\\/\\/b23.tv\\/BV16T4y1R7H9\",\"stat\":{\"aid\":933765713,\"coin\":0,\"danmaku\":0,\"dislike\":0,\"favorite\":1,\"his_rank\":0,\"like\":2,\"now_rank\":0,\"reply\":2,\"share\":1,\"view\":70},\"state\":0,\"tid\":95,\"title\":\"试图安装Windows10\",\"tname\":\"数码\",\"up_from_v2\":9,\"videos\":1}",
  "origin_extend_json": "{\"\":{\"ogv\":{\"ogv_id\":0}},\"dispute\":{\"content\":\"\"},\"from\":{\"from\":\"\"},\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"},\"topic\":{\"is_attach_topic\":1}}",
  "origin_user": {
    "info": {
      "uid": 492755628,
      "uname": "Leojdj",
      "face": "https://i0.hdslb.com/bfs/face/e4c06054bc9d6c564637f70a7565a6a2d24ee521.jpg"
    },
    "card": {
      "official_verify": {
        "type": -1,
        "desc": ""
      }
    },
    "vip": {
      "vipType": 0,
      "vipDueDate": 0,
      "vipStatus": 0,
      "themeType": 0,
      "label": {
        "path": "",
        "text": "",
        "label_theme": "",
        "text_color": "",
        "bg_style": 0,
        "bg_color": "",
        "border_color": ""
      },
      "avatar_subscript": 0,
      "nickname_color": "",
      "role": 0,
      "avatar_subscript_url": ""
    },
    "pendant": {
      "pid": 0,
      "name": "",
      "image": "",
      "expire": 0,
      "image_enhance": "",
      "image_enhance_frame": ""
    },
    "rank": "10000",
    "sign": "",
    "level_info": {
      "current_level": 3
    }
  },
  "activity_infos": {
    "details": [
      {
        "type": 1,
        "detail": "{\"is_show\":1,\"topic_id\":10511051,\"topic_link\":\"https:\\/\\/member.bilibili.com\\/york\\/punch-card?navhide=1\",\"topic_name\":\"打卡挑战\"}"
      }
    ]
  }
}
```

</details>

## 图片动态 (type=2)

在type=2的图片动态中，解析出的对象包含以下内容：

| 字段 | 类型 | 内容 | 备注 |
| ------- | ---- | -------- | ------- |
| item | obj | 图片动态内容 |  `description`字段为文字内容<br/>`pictures`字段图片 | |
| user | obj | 发布者用户信息 | 包含用户名，用户id和头像 |


<details>
<summary>查看字段内容示例：</summary>

```json
{
  "item": {
    "at_control": "",
    "category": "daily",
    "description": "#阅机无数#已知这个笔记本的品牌为Dell，隶属于灵越系列，主打外观的设计，目测应该是4代酷睿之前的型号，CPU应该是低压i5/i3，不知道能否找出具体型号",
    "id": 172408258,
    "is_fav": 0,
    "pictures": [
      {
        "img_height": 2400,
        "img_size": 1425.97998046875,
        "img_src": "https://i0.hdslb.com/bfs/album/3716f26eeede4d77874f3eeacd49b0e2e597fcc3.jpg",
        "img_tags": null,
        "img_width": 1080
      }
    ],
    "pictures_count": 1,
    "reply": 2,
    "role": [],
    "settings": {
      "copy_forbidden": "0"
    },
    "source": [],
    "title": "",
    "upload_time": 1635433727
  },
  "user": {
    "head_url": "https://i1.hdslb.com/bfs/face/98f88e00306ac92d30bae013f8295d26bd018093.jpg",
    "name": "LostCity失落之城",
    "uid": 169216498,
    "vip": {
      "avatar_subscript": 0,
      "due_date": 0,
      "label": {
        "label_theme": "",
        "path": "",
        "text": ""
      },
      "nickname_color": "",
      "status": 0,
      "theme_type": 0,
      "type": 0,
      "vip_pay_type": 0
    }
  }
}
```

</details>

## 文字动态 (type=4)

在type=4的文字动态中，解析出的对象包含以下内容：

| 字段 | 类型 | 内容 | 备注 |
| ------- | ---- | -------- | ------- |
| item | obj | 文字动态内容 |  `description`字段为文字内容 | |
| user | obj | 发布者用户信息 | 包含用户名，用户id和头像 |


<details>
<summary>查看字段内容示例：</summary>

```json
{
  "user": {
    "uid": 403417570,
    "uname": "杯子人一君羊",
    "face": "https://i1.hdslb.com/bfs/face/cf0772f2e4d76f75ca4c230d9ab1b50012a8bbfa.jpg"
  },
  "item": {
    "rp_id": 586612173803463700,
    "uid": 403417570,
    "content": "#阅机无数# 文字题\nthinkpad 09-15年\n触控笔\nenergy star\ncore i5\n[藏狐]",
    "ctrl": "",
    "orig_dy_id": 0,
    "pre_dy_id": 0,
    "timestamp": 1635419690,
    "reply": 2
  }
}
```

</details>

## 视频投稿动态 (type=8)

在type=8的视频投稿动态中，解析出的对象包含以下内容：

| 字段 | 类型 | 内容 | 备注 |
| ------- | ---- | -------- | ------- |
| aid | num | 视频avid | |
| attribute | num | `0` | [可能已弃用](https://shakaianee.top/archives/9/) |
| cid | num | 视频cid | |
| copyright | num | 原创信息 | 1为原创，2为转载 |
| desc | str | 视频简介 | |
| dimension | obj |视频1p分辨率| |
| duration | num | 视频时长 | 单位秒 |
| dynamic | str | 动态文字内容 | |
| first_frame | str | 视频第一帧图片 | 图片链接 |
| jump_url | str | 视频跳转链接 | |
| mission_id | num | 稿件参与的活动id | |
| owner | obj | 动态作者信息 | 即up主 |
| pic | str | 视频封面 | |
| player_info | ? | 可能是播放器信息 | |
| pubdate | num | 发布时间 | 时间戳 |
| rights | obj | 联合投稿，是否付费等信息 | 可能用来代替原`attribute`字段 |
| stat | obj | 视频数据 | 点赞投币等 |
| state | num | 视频状态 | 详情见**属性数据文档** |
| tid | num | 视频分区编号 | |
| title | str | 视频标题 | |
| tname | str | 视频分区名称 | |
| video | num | 视频数| |



<details>
<summary>查看字段内容示例：</summary>

```json
{
  "aid": 506318410,
  "attribute": 0,
  "cid": 432711595,
  "copyright": 1,
  "ctime": 1635403080,
  "desc": "我看谁敢欺负天依依？都别动啊，放那儿让我来！\n好久不写萌歌歌了，耐心心看到结尾，有天依依激萌嚎叫（不\n\n作曲曲/编曲曲/混音音：iKz @Signal-E | 作词词：叫叫与壶壶\n唱歌歌：洛天依 | 调校校：Creuzer\n曲绘绘：pelokio & 贝贝web & 壶芬奇\nPVV：AYWC八毛 @Signal-E\n制作人：iKz\n\n蛀牙牙版：BV1FR4y1n7rt",
  "dimension": {
    "height": 1080,
    "rotate": 0,
    "width": 1920
  },
  "duration": 265,
  "dynamic": "我看谁敢欺负天依依？都别动啊，放那儿让我来！\n好久不写萌歌歌了，耐心心看到结尾，有洛天依激萌嚎叫（不",
  "first_frame": "https://i1.hdslb.com/bfs/storyff/n211029a21oldgobzh2ob1uf3tqav4yy_firsti.jpg",
  "jump_url": "bilibili://video/506318410/?page=1&player_preload=null&player_width=1920&player_height=1080&player_rotate=0",
  "mission_id": 122069,
  "owner": {
    "face": "https://i1.hdslb.com/bfs/face/4935c75aecf986c3c129400882ee9c5ceeeec4b5.jpg",
    "mid": 25681,
    "name": "iKz_茶壶"
  },
  "pic": "https://i0.hdslb.com/bfs/archive/06749bfe8b9505b00bd572950615912fecadb513.jpg",
  "player_info": null,
  "pubdate": 1635501604,
  "rights": {
    "autoplay": 1,
    "bp": 0,
    "download": 0,
    "elec": 0,
    "hd5": 1,
    "is_cooperation": 1,
    "movie": 0,
    "no_background": 0,
    "no_reprint": 1,
    "pay": 0,
    "ugc_pay": 0,
    "ugc_pay_preview": 0
  },
  "short_link": "https://b23.tv/BV13u411o7Ht",
  "short_link_v2": "https://b23.tv/BV13u411o7Ht",
  "stat": {
    "aid": 506318410,
    "coin": 5490,
    "danmaku": 486,
    "dislike": 0,
    "favorite": 6017,
    "his_rank": 0,
    "like": 8526,
    "now_rank": 0,
    "reply": 597,
    "share": 568,
    "view": 44737
  },
  "state": 0,
  "tid": 30,
  "title": "【超萌萌洛天依！万圣节原创】嘤嘤大作战【iKz-茶壶壶】",
  "tname": "VOCALOID·UTAU",
  "videos": 1
}
```

</details>

## 小视频 (type=16)

## 戏剧? (type=32)

## 专栏投稿动态 (type=64)

在type=64的专栏投稿动态中，解析出的对象包含以下内容：

| 字段 | 类型 | 内容 | 备注 |
| ------- | ---- | -------- | ------- |
| id | num | 专栏的id，即cv号 | |
| category | obj | 分类号和分类名称 | |
| categories | obj | 分类信息 | |
| title | str | 专栏标题 | |
| summary | str | 专栏简介 | |
| banner_url | str | 头图链接 | |
| template_id | num | 模板信息 | |
| state | num | 专栏状态 | |
| author | obj | 作者信息 | 包含了头像挂件和勋章等 |
| reprint | num | 可能是转载 | |
| image_urls | obj | 图片链接 | |
| publish_time | num | 发布时间 | 时间戳，应该指专栏 |
| ctime | num | 发布时间 | 时间戳，应该指动态 |
| stats | obj | 专栏数据,点赞之类 | 有点踩字段，但并未实装此功能 |
| words | num | 字数 | |
| origin_image_urls | obj | 源图片地址 | |
| list | ? | 可能为文集 | |
| is_like | bool | 是否点赞 | |
| media | obj | 番剧电影相关内容 | 影评的分数，是否有剧透等 |
| apply_time | ? | ? | |
| check_time | ? | ? | |
| original | num | 是否原创 | |
| act_id | num | ? | |
| dispute | ? | 可能为是否争议内容 | |
| authenMark | ? | ? | |
| cover_avid | num | 相关视频id | 例如笔记专栏的原视频 |
| top_video_info | ? | ? | |
| type | num | 可能是专栏类别 | |

<details>
<summary>查看字段内容示例：</summary>

```json
{
  "id": 12457797,
  "category": {
    "id": 42,
    "parent_id": 41,
    "name": "全部笔记"
  },
  "categories": [
    {
      "id": 41,
      "parent_id": 0,
      "name": "笔记"
    },
    {
      "id": 42,
      "parent_id": 41,
      "name": "全部笔记"
    }
  ],
  "title": "【编曲教程】弦乐如何编写？二十分钟学会弦乐基础写法~",
  "summary": "点击进入查看全文",
  "banner_url": "https://i0.hdslb.com/bfs/archive/9c0f743f0d79bf3f73ea196eced55a9211ef363f.jpg",
  "template_id": 4,
  "state": 0,
  "author": {
    "mid": 310236726,
    "name": "珞林ltyxh",
    "face": "https://i0.hdslb.com/bfs/face/8c4aebb01b3cc34154168be51241b0345f110aeb.webp",
    "pendant": {
      "pid": 2155,
      "name": "洛天依8th生日纪念",
      "image": "https://i0.hdslb.com/bfs/garb/item/e98718ae0d09e48bc85df969820b88241bc06883.png",
      "expire": 0
    },
    "official_verify": {
      "type": -1,
      "desc": ""
    },
    "nameplate": {
      "nid": 4,
      "name": "青铜殿堂",
      "image": "https://i0.hdslb.com/bfs/face/2879cd5fb8518f7c6da75887994c1b2a7fe670bd.png",
      "image_small": "https://i2.hdslb.com/bfs/face/6707c120e00a3445933308fd9b7bd9fad99e9ec4.png",
      "level": "普通勋章",
      "condition": "单个自制视频总播放数>=1万"
    },
    "vip": {
      "type": 2,
      "status": 1,
      "due_date": 0,
      "vip_pay_type": 0,
      "theme_type": 0,
      "label": {
        "path": "",
        "text": "年度大会员",
        "label_theme": "annual_vip"
      },
      "avatar_subscript": 1,
      "nickname_color": "#FB7299"
    }
  },
  "reprint": 0,
  "image_urls": [
    "https://i0.hdslb.com/bfs/article/banner/6daa4ac60ddec2456bb720dbb4979b07dd705e8a.png"
  ],
  "publish_time": 1627921161,
  "ctime": 1627921161,
  "stats": {
    "view": 107,
    "favorite": 5,
    "like": 11,
    "dislike": 0,
    "reply": 1,
    "share": 0,
    "coin": 1,
    "dynamic": 0
  },
  "words": 225,
  "origin_image_urls": [
    "https://i0.hdslb.com/bfs/article/banner/6daa4ac60ddec2456bb720dbb4979b07dd705e8a.png"
  ],
  "list": null,
  "is_like": false,
  "media": {
    "score": 0,
    "media_id": 0,
    "title": "",
    "cover": "",
    "area": "",
    "type_id": 0,
    "type_name": "",
    "spoiler": 0,
    "season_id": 0
  },
  "apply_time": "",
  "check_time": "",
  "original": 1,
  "act_id": 0,
  "dispute": null,
  "authenMark": null,
  "cover_avid": 57337301,
  "top_video_info": null,
  "type": 2
}
```

</details>

## 音频投稿动态 (type=256)

在type=256的音频投稿动态中，解析出的对象包含以下内容：

| 字段 | 类型 | 内容 | 备注 |
| ------- | ---- | -------- | ------- |
| id | num | 投稿编号 | 即au号 |
| upId | num | 音乐人id | 与用户uid不同 |
| title | str | 音频标题 | |
| upper | str | 上传者名称 | |
| cover | str | 封面图链接 | |
| author | str | 作者名称 | |
| ctime | num | 上传时间 | 时间戳的后面加了三个0 |
| playCnt | num | 播放量 | |
| intro | str | 音频介绍 | |
| schema | str | 跳转链接 | 似乎并不只是url |
| typeInfo | str | 分区信息 | |
| upperAvatar | str | 上传者的头像链接 | |

<details>
<summary>查看字段内容示例：</summary>

```json
{
  "id": 2562895,
  "upId": 482834,
  "title": "[蓝猫原创伴奏]无衣",
  "upper": "NBluecat",
  "cover": "https://i0.hdslb.com/bfs/music/1e7c4d04bd405159b66893d4cb68977ddf784b42.jpg",
  "author": "NBluecat",
  "ctime": 1632115270000,
  "replyCnt": 1,
  "playCnt": 252,
  "intro": "_(:з」∠)_这是无衣的伴奏，非常简单",
  "schema": "bilibili://music/detail/2562895?name=%5B%E8%93%9D%E7%8C%AB%E5%8E%9F%E5%88%9B%E4%BC%B4%E5%A5%8F%5D%E6%97%A0%E8%A1%A3&uperName=&cover_url=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Fmusic%2F1e7c4d04bd405159b66893d4cb68977ddf784b42.jpg&upperId=&author=NBluecat",
  "typeInfo": "音乐 · 纯音乐/演奏",
  "upperAvatar": "https://i2.hdslb.com/bfs/face/d5bf3c9f179803134172ff1c6090ba6b999651c6.jpg"
}
```

</details>

## 番剧 (type=512)

## ??? (type=1000)

## ??? (type=1001)

## ??? (type=1024)

## H5 活动动态 (type=2048)

根对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| rid | number | 动态 id |  |
| sketch | object | 动态卡片内容 |  |
| user | object | 用户信息 |  |
| vest | object | 动态正文内容 |  |

`sketch` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| cover_url | string | 封面 URL |  |
| desc_text | string | 描述文本 |  |
| sketch_id | number | 卡片 id | 即动态 id |
| target_url | string | 目标 URL |  |
| text | string | 文本? | 空? |
| title | string | 标题 |  |

`user` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| face | string | 头像 URL |  |
| uid | number | mid (UID) |  |
| uname | string | 用户名 |  |

`vest` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| content | string | 内容 |  |
| uid | number | 用户 mid (UID) |  |

**示例:**

<details>
<summary>查看示例:</summary>

```json
{
  "rid": 1093384350151475200,
  "sketch": {
    "cover_url": "https://i0.hdslb.com/bfs/game/65e4fa4b3cf2d177148328e2ff76535500bc563c.png",
    "desc_text": "分享了一条动态",
    "sketch_id": 1093755435448533000,
    "target_url": "https://space.bilibili.com/645769214",
    "text": "",
    "title": "你好,世界"
  },
  "user": {
    "face": "https://i2.hdslb.com/bfs/face/77906db03b1eefac02613de184afad03f7bc58d7.jpg",
    "uid": 645769214,
    "uname": "Session小胡"
  },
  "vest": {
    "content": "[笑哭]",
    "uid": 645769214
  }
}
```
</details>

<!-- Generated by json-apidoc-gen @ 2025-07-26T01:40:56.464495209Z -->

## 漫画分享 (type=2049)

## PGC 番剧 (type=4097)

## 电影 (type=4098)

## 电视剧 (type=4099)

## 国创动漫 (type=4100)

## 纪录片 (type=4101)

## 直播 (type=4200)

## 直播 (type=4201)

## 收藏夹 (type=4300)

## 付费课程 (type=4302)

## 付费课程 (type=4303)

## 直播 (type=4308)

## 合集 (type=4310)

## ??? (type=4311)

## ??? (type=268435455)
