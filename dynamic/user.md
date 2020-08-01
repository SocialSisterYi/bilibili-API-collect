## 获取用户最新动态

*动态信息有点复杂，目前只解析出少量信息*

*如果仅仅需要获取动态内容，请参考*

*（文本类动态）”`data`中的`cards`列表中`card`字符串经过格式化后的对象中`item`对象“中的`content`和*

*（视频类动态）”`data`中的`cards`列表中`card`字符串“中的`stat`*

*文本类动态内容暂时并未解决u码出现条件与判断方法*



> https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history
> *方式：GET*

**url参数：**

| 参数名            | 类型 | 内容                           | 必要性 | 备注                              |
| ----------------- | ---- | ------------------------------ | ------ | --------------------------------- |
| visitor_uid       | num  | 访问者uid                      | 非必要 | 未发现具体作用                    |
| host_uid          | num  | 被访问者uid                    | 必要   |                                   |
| offset_dynamic_id | num  | 访问某页动态                   | 非必要 | 默认为0表示第一页                 |
| need_top          | num  | 返回json中是否含有置顶动态信息 | 非必要 | 除1以外任何字符串均不返回置顶动态 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0正常 -1参数错误（似乎只有host_uid参数名缺失时候才会导致）500003存在host_uid参数名但为空参数 |
| msg     | str  | 错误信息 | 默认为空                                                     |
| message | str  | 错误信息 | 默认为空                                                     |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段        | 类型  | 内容                                                         | 备注                                |
| ----------- | ----- | ------------------------------------------------------------ | ----------------------------------- |
| has_more    | num   | 是否有下一页动态                                             | 如果为0，则同对象下的next_offset为0 |
| attentions  | obj   | 包含一个名为uids的list，其中包含所登陆的用户(Cookie)所关注的，包括自己在内的所有用户的uid | 不登陆则为空                        |
| cards       | array | 每个动态相关的内容                                           | 最多12个                            |
| next_offset | num   | 下一页动态的id                                               |                                     |
| _gt_        | num   | 0                                                            | **作用尚不明确**                    |

`data`中的`cards`列表中某一元素中的对象：

| 字段        | 类型 | 内容                       | 备注                         |
| ----------- | ---- | -------------------------- | ---------------------------- |
| desc        | obj  | 动态相关信息               | 发送人信息，动态本身信息等等 |
| card        | str  | 动态内容信息               |                              |
| extend_json | str  | 更多的相关信息             |                              |
| extra       | obj  | 更更多的相关信息           | 目前只发现含有“is_space_top” |
| display     | obj  | 主要是视觉展示用的相关信息 |                              |

`data`中的`cards`列表中`desc`对象：

| 字段           | 类型 | 内容                 | 备注                                 |
| -------------- | ---- | -------------------- | ------------------------------------ |
| uid            | num  | 发送动态用户uid      |                                      |
| type           | num  | 动态类型             | **暂时无法确定**                     |
| rid            | num  | 视频av号             | **暂时无法确定**                     |
| acl            | num  |                      | **暂时无法确定**                     |
| view           | num  | 动态观看             | 暂时不知道如何增加计数               |
| repost         | num  | 转发数               |                                      |
| comment        | num  | 评论数               |                                      |
| is_like        | num  | 0/1                  | Cookie包含的账户是否喜欢（赞）该动态 |
| dynamic_id     | num  |                      | **暂时无法确定**                     |
| timestamp      | num  | 动态发送时间的时间戳 |                                      |
| pre_dy_id      | num  |                      | **暂时无法确定**                     |
| orig_dy_id     | num  |                      | **暂时无法确定**                     |
| orig_type      | num  |                      | **暂时无法确定**                     |
| user_profile   | obj  | 用户信息             |                                      |
| uid_type       | num  |                      | **暂时无法确定**                     |
| stype          | num  |                      | **暂时无法确定**                     |
| r_type         | num  |                      | **暂时无法确定**                     |
| inner_id       | num  |                      | **暂时无法确定**                     |
| status         | num  |                      | **暂时无法确定**                     |
| dynamic_id_str | str  | 本动态id             |                                      |
| pre_dy_id_str  | str  | 转发的动态id         | 无转发就是0                          |
| orig_dy_id_str | str  | 转发的原始动态id     | 无转发就是0                          |
| rid_str        | str  | av号                 |                                      |
| previous       | obj  | 转发的动态相关信息   | 在转发动态时候出现                   |
| origin         | obj  | 最初的动态相关信息   | 在转发动态时候出现                   |
| bvid           | str  | bv号                 |                                      |
|                |      |                      |                                      |



`data`中的`cards`列表中`card`字符串：

注意：需要将str格式化为obj！

| 字段           | 类型 | 内容                   | 备注                           |
| -------------- | ---- | ---------------------- | ------------------------------ |
| user           | obj  | 使用者信息             | 文本类动态存在                 |
| item           | obj  | 动态信息               | 文本类动态存在                 |
| aid            | num  | 视频av号               | 视频类动态存在                 |
| attribute      | num  |                        | **暂时无法确定**视频类动态存在 |
| cid            | num  |                        | **暂时无法确定**视频类动态存在 |
| copyright      | num  | 版权保护 0/1           | 视频类动态存在                 |
| ctime          | num  | 视频上传时间戳         | 视频类动态存在                 |
| desc           | str  | 视频描述               | 视频类动态存在                 |
| dimension      | obj  | 视频尺寸？             | 视频类动态存在                 |
| duration       | num  | 视频时长               | 视频类动态存在                 |
| dynamic        | str  | tag？                  | 视频类动态存在                 |
| jump_url       | str  | bilibili链接？         | 视频类动态存在                 |
| owner          | obj  | 上传者信息？           | 视频类动态存在                 |
| pic            | str  | 视频封面（可能非原图） | 视频类动态存在                 |
| player_info    |      |                        | **暂时无法确定**视频类动态存在 |
| pubdate        | num  | 视频上传时间戳         | 视频类动态存在                 |
| rights         | obj  |                        | **暂时无法确定**视频类动态存在 |
| share_subtitle | str  | 分享用副标题？         | **暂时无法确定**视频类动态存在 |
| stat           | obj  | 视频信息               | 视频类动态存在                 |
| state          | obj  |                        | **暂时无法确定**视频类动态存在 |
| tid            | num  |                        | **暂时无法确定**视频类动态存在 |
| title          | str  | 视频标题               | 视频类动态存在                 |
| tname          | str  | 分区？                 | 视频类动态存在                 |
| videos         | num  | 视频数？               | 视频类动态存在                 |



`data`中的`cards`列表中`card`字符串经过格式化后的对象中`user`对象：

**文本类动态存在**

| 字段  | 类型 | 内容           | 备注 |
| ----- | ---- | -------------- | ---- |
| uid   | num  | 用户uid        |      |
| uname | str  | 用户名称       |      |
| face  | str  | 头像的图片地址 |      |



`data`中的`cards`列表中`card`字符串经过格式化后的对象中`item`对象：

**文本类动态存在**

| 字段       | 类型 | 内容           | 备注                                      |
| ---------- | ---- | -------------- | ----------------------------------------- |
| rp_id      | num  |                | **暂时无法确定**                          |
| uid        | num  | 所发动态用户   | **暂时无法确定**                          |
| content    | str  | 动态内容       | **暂时无法确定，且在某种情况下会变成u码** |
| ctrl       | str  |                | **暂时无法确定**                          |
| orig_dy_id | num  | 转发的起始动态 | 无转发就是0                               |
| pre_dy_id  | num  | 转发的动态id   | 无转发就是0                               |
| timestamp  | num  | 本动态时间戳   |                                           |
| reply      | num  | 回复个数       |                                           |



**示例**

以访问者`UID=1`的身份查询`UID=233114659`的包括置顶动态（need_top=1）的第一页（offset_dynamic_id=0）动态

http://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history?visitor_uid=1&host_uid=233114659&offset_dynamic_id=0&need_top=1

```json
{
  "code": 0,
  "msg": "",
  "message": "",
  "data": {
    "has_more": 1,
    "attentions": {
      "uids": [
        546195,
        3514986,
        4162287,
        6574487,
        10851936,
        14481660,
        37090048
      ]
    },
    "cards": [
      {
        "desc": {
          "uid": 233114659,
          "type": 8,
          "rid": 243776320,
          "acl": 0,
          "view": 1397368,
          "repost": 159,
          "like": 16010,
          "is_liked": 0,
          "dynamic_id": 409849839792687500,
          "timestamp": 1594264002,
          "pre_dy_id": 0,
          "orig_dy_id": 0,
          "orig_type": 0,
          "user_profile": {
            "info": {
              "uid": 233114659,
              "uname": "碧蓝航线",
              "face": "https://i0.hdslb.com/bfs/face/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg"
            },
            "card": {
              "official_verify": {
                "type": 1,
                "desc": "碧蓝航线官方账号"
              }
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1596470400000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": ""
              }
            },
            "pendant": {
              "pid": 1987,
              "name": "碧蓝航线2020",
              "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
              "expire": 0,
              "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
            },
            "decorate_card": {
              "mid": 233114659,
              "id": 1970,
              "card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "card_type": 2,
              "name": "碧蓝航线2020粉丝专属",
              "expire_time": 0,
              "card_type_name": "免费",
              "uid": 233114659,
              "item_id": 1970,
              "item_type": 3,
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1988?navhide=1&mid=233114659&from=dynamic",
              "fan": {
                "is_fan": 1,
                "number": 1,
                "color": "#498de1",
                "num_desc": "000001"
              },
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png"
            },
            "rank": "10000",
            "sign": "今天有没有被指挥官偷瞄呢(:3_ヽ)_",
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": "0"
            }
          },
          "uid_type": 1,
          "stype": 0,
          "r_type": 1,
          "inner_id": 0,
          "status": 1,
          "dynamic_id_str": "409849839792687487",
          "pre_dy_id_str": "0",
          "orig_dy_id_str": "0",
          "rid_str": "243776320",
          "bvid": "BV15v411z7BD"
        },
        "card": "{\"aid\":243776320,\"attribute\":16768,\"cid\":210412133,\"copyright\":1,\"ctime\":1594264001,\"desc\":\"信息载入，信息载入！全新方案舰已载入系统！\\n从沉睡中唤醒她们，予她们以使命吧！\\n\\n>>「科研·三期」全新方案舰正式解禁！<< \\n德雷克-重巡洋舰-决战方案\\n美因茨-轻巡洋舰-最高方案\\n奥丁-战列巡洋舰-最高方案\\n柴郡-重巡洋舰-最高方案\\n香槟-战列舰-最高方案\\n等你唤醒！\\n\\n了解全新方案舰信息，可前往：https:\\/\\/game.bilibili.com\\/blhx\\/kysqzsjj\\/\",\"dimension\":{\"height\":1080,\"rotate\":0,\"width\":1920},\"duration\":72,\"dynamic\":\"#碧蓝航线#\",\"jump_url\":\"bilibili:\\/\\/video\\/243776320\\/?page=1&player_preload=null&player_width=1920&player_height=1080&player_rotate=0\",\"owner\":{\"face\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\",\"mid\":233114659,\"name\":\"碧蓝航线\"},\"pic\":\"https:\\/\\/i2.hdslb.com\\/bfs\\/archive\\/206a9c99e45206e9c362458bfb1b067c18a0a191.jpg\",\"player_info\":null,\"pubdate\":1594264001,\"rights\":{\"autoplay\":1,\"bp\":0,\"download\":0,\"elec\":0,\"hd5\":1,\"is_cooperation\":0,\"movie\":0,\"no_background\":0,\"no_reprint\":1,\"pay\":0,\"ugc_pay\":0,\"ugc_pay_preview\":0},\"share_subtitle\":\"已观看14.0万次\",\"stat\":{\"aid\":243776320,\"coin\":4160,\"danmaku\":442,\"dislike\":0,\"favorite\":2233,\"his_rank\":0,\"like\":16010,\"now_rank\":0,\"reply\":1770,\"share\":1579,\"view\":148995},\"state\":0,\"tid\":172,\"title\":\"《碧蓝航线》「科研·三期」PV公开\",\"tname\":\"手机游戏\",\"videos\":1}",
        "extend_json": "{\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"},\"topic\":{\"is_attach_topic\":1}}",
        "extra": {
          "is_space_top": 1
        },
        "display": {
          "topic_info": {
            "topic_details": [
              {
                "topic_id": 2908447,
                "topic_name": "碧蓝航线",
                "is_activity": 0,
                "topic_link": ""
              }
            ]
          },
          "bottom_info": {
            "bottom_details": [
              {
                "content": "碧蓝航线",
                "jump_url": "bilibili://game_center/detail?id=97&sourceFrom=179",
                "bottom_type": 2
              }
            ]
          },
          "usr_action_txt": "投稿了视频",
          "relation": {
            "status": 1,
            "is_follow": 0,
            "is_followed": 0
          },
          "tags": [
            {
              "tag_type": 2,
              "sub_type": 2,
              "icon": "https://i0.hdslb.com/bfs/album/e8613d8debe7fd70737fc5ce59b543e89b0cce31.png",
              "text": "碧蓝航线",
              "link": "bilibili://game_center/detail?id=97&sourceFrom=179"
            }
          ]
        }
      },
      {
        "desc": {
          "uid": 233114659,
          "type": 2,
          "rid": 84571861,
          "acl": 0,
          "view": 423106,
          "repost": 12,
          "like": 5280,
          "is_liked": 0,
          "dynamic_id": 418166485617518500,
          "timestamp": 1596200372,
          "pre_dy_id": 0,
          "orig_dy_id": 0,
          "orig_type": 0,
          "user_profile": {
            "info": {
              "uid": 233114659,
              "uname": "碧蓝航线",
              "face": "https://i0.hdslb.com/bfs/face/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg"
            },
            "card": {
              "official_verify": {
                "type": 1,
                "desc": "碧蓝航线官方账号"
              }
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1596470400000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": ""
              }
            },
            "pendant": {
              "pid": 1987,
              "name": "碧蓝航线2020",
              "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
              "expire": 0,
              "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
            },
            "decorate_card": {
              "mid": 233114659,
              "id": 1970,
              "card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "card_type": 2,
              "name": "碧蓝航线2020粉丝专属",
              "expire_time": 0,
              "card_type_name": "免费",
              "uid": 233114659,
              "item_id": 1970,
              "item_type": 3,
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1988?navhide=1&mid=233114659&from=dynamic",
              "fan": {
                "is_fan": 1,
                "number": 1,
                "color": "#498de1",
                "num_desc": "000001"
              },
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png"
            },
            "rank": "10000",
            "sign": "今天有没有被指挥官偷瞄呢(:3_ヽ)_",
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": "0"
            }
          },
          "uid_type": 1,
          "stype": 0,
          "r_type": 1,
          "inner_id": 0,
          "status": 1,
          "dynamic_id_str": "418166485617518558",
          "pre_dy_id_str": "0",
          "orig_dy_id_str": "0",
          "rid_str": "84571861"
        },
        "card": "{\"item\":{\"id\":84571861,\"title\":\"\",\"description\":\"#\\u78a7\\u84dd\\u822a\\u7ebf# #ChinaJoy# \\nDay 1\\u53c2\\u5c55\\u7ed3\\u675f\\uff01\\u9996\\u65e5\\u573a\\u7167\\u65b0\\u9c9c\\u51fa\\u7089\\uff0c\\u611f\\u8c22\\u7279\\u5730\\u524d\\u6765\\u7684\\u6307\\u6325\\u5b98\\u4eec\\uff5e\\u4e0d\\u77e5\\u9053\\u4eca\\u65e5\\u6307\\u6325\\u5b98\\u4eec\\u6709\\u6ca1\\u6709\\u83b7\\u53d6\\u6211\\u4eec\\u7684\\u300c\\u9038\\u4ed9\\u5957\\u5a03\\u300d\\u5462\\uff1f(\\u2229\\u1d52\\u0334\\u0336\\u0337\\u0324\\u2314\\u1d52\\u0334\\u0336\\u0337\\u0324\\u2229)\\n\\u63a5\\u4e0b\\u6765\\u76843\\u5929\\ud83d\\udccdN5-02\\u5c55\\u4f4d\\uff0c\\u6307\\u6325\\u5b98\\u4e0d\\u4ec5\\u53ef\\u4ee5\\u770b\\u5230\\u7cbe\\u5fc3\\u642d\\u5efa\\u7684\\u7279\\u8272\\u5c55\\u53f0\\uff0c\\u73a9\\u5230\\u78a7\\u84dd\\u822a\\u7ebf\\u7279\\u8272\\u4e92\\u52a8\\u6e38\\u620f\\uff0c\\u8fd8\\u6709\\u673a\\u4f1a\\u8d62\\u53d6\\u300c\\u9038\\u4ed9\\u5957\\u5a03\\u300d\\u3001\\u300c\\u9038\\u4ed9\\u6587\\u4ef6\\u5939\\u300d\\u548c\\u300c\\u9635\\u8425\\u4e3b\\u9898\\u7a97\\u82b1\\u8d34\\u7eb8\\u300d\\u54e6\\uff5e \\n\\u671f\\u5f85\\u5404\\u4f4d\\u6307\\u6325\\u5b98\\u7684\\u5230\\u6765(\\u2022\\u0300\\u03c9\\u2022\\u0301)\\u2727 \",\"category\":\"daily\",\"role\":[],\"source\":[],\"pictures\":[{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/bed0307eaba2d62039e479bacd0391c0ff598ac9.jpg\",\"img_width\":1600,\"img_height\":1067,\"img_size\":2204},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/e251e6d41c436db68abaee88cdc4c67598302283.jpg\",\"img_width\":1600,\"img_height\":1067,\"img_size\":2105},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/5c8f2b66d3a6035be1661d62a5f2d26249cb6cd1.jpg\",\"img_width\":1599,\"img_height\":1067,\"img_size\":841},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/e877ed6f2a9b49984acf6e52eea60de020c7ddb5.jpg\",\"img_width\":1067,\"img_height\":1600,\"img_size\":1675},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/6751fcb84c3f4112b23b2bdc0196a2c0cd56f140.jpg\",\"img_width\":1620,\"img_height\":1080,\"img_size\":452},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/ad0333e6e0ae0f7d86ccdea8290e8c18393f466b.jpg\",\"img_width\":1620,\"img_height\":1080,\"img_size\":460}],\"pictures_count\":6,\"upload_time\":1596200372,\"at_control\":\"\",\"reply\":294,\"settings\":{\"copy_forbidden\":0},\"is_fav\":0},\"user\":{\"uid\":233114659,\"head_url\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\",\"name\":\"\\u78a7\\u84dd\\u822a\\u7ebf\",\"vip\":{\"vipType\":1,\"vipDueDate\":1596470400000,\"dueRemark\":\"\",\"accessStatus\":0,\"vipStatus\":1,\"vipStatusWarn\":\"\",\"themeType\":0,\"label\":{\"path\":\"\"}}}}",
        "extend_json": "{\"from\":{\"emoji_type\":1,\"from\":\"create.dynamic.web\",\"verify\":{\"cc\":{\"nv\":1}}},\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"},\"topic\":{\"is_attach_topic\":1}}",
        "extra": {
          "is_space_top": 0
        },
        "activity_infos": {
          "details": [
            {
              "type": 1,
              "detail": "{\"is_show\":1,\"topic_id\":2538844,\"topic_link\":\"bilibili:\\/\\/pegasus\\/channel\\/2538844?type=topic\",\"topic_name\":\"ChinaJoy\"}"
            }
          ]
        },
        "display": {
          "topic_info": {
            "topic_details": [
              {
                "topic_id": 2908447,
                "topic_name": "碧蓝航线",
                "is_activity": 0,
                "topic_link": ""
              },
              {
                "topic_id": 2538844,
                "topic_name": "ChinaJoy",
                "is_activity": 1,
                "topic_link": "https://game.bilibili.com/2020ChinaJoy/"
              },
              {
                "topic_id": 56787,
                "topic_name": "CHINAJOY",
                "is_activity": 0,
                "topic_link": ""
              }
            ]
          },
          "bottom_info": {
            "bottom_details": [
              {
                "content": "碧蓝航线",
                "jump_url": "bilibili://game_center/detail?id=97&sourceFrom=179",
                "bottom_type": 2
              }
            ]
          },
          "relation": {
            "status": 1,
            "is_follow": 0,
            "is_followed": 0
          },
          "tags": [
            {
              "tag_type": 2,
              "sub_type": 2,
              "icon": "https://i0.hdslb.com/bfs/album/e8613d8debe7fd70737fc5ce59b543e89b0cce31.png",
              "text": "碧蓝航线",
              "link": "bilibili://game_center/detail?id=97&sourceFrom=179"
            }
          ]
        }
      },
      {
        "desc": {
          "uid": 233114659,
          "type": 1,
          "rid": 418066107934388000,
          "acl": 0,
          "view": 427483,
          "repost": 22,
          "comment": 147,
          "like": 3678,
          "is_liked": 0,
          "dynamic_id": 418066107934024260,
          "timestamp": 1596177001,
          "pre_dy_id": 416667030934331100,
          "orig_dy_id": 416667030934331100,
          "orig_type": 2,
          "user_profile": {
            "info": {
              "uid": 233114659,
              "uname": "碧蓝航线",
              "face": "https://i0.hdslb.com/bfs/face/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg"
            },
            "card": {
              "official_verify": {
                "type": 1,
                "desc": "碧蓝航线官方账号"
              }
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1596470400000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": ""
              }
            },
            "pendant": {
              "pid": 1987,
              "name": "碧蓝航线2020",
              "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
              "expire": 0,
              "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
            },
            "decorate_card": {
              "mid": 233114659,
              "id": 1970,
              "card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "card_type": 2,
              "name": "碧蓝航线2020粉丝专属",
              "expire_time": 0,
              "card_type_name": "免费",
              "uid": 233114659,
              "item_id": 1970,
              "item_type": 3,
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1988?navhide=1&mid=233114659&from=dynamic",
              "fan": {
                "is_fan": 1,
                "number": 1,
                "color": "#498de1",
                "num_desc": "000001"
              },
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png"
            },
            "rank": "10000",
            "sign": "今天有没有被指挥官偷瞄呢(:3_ヽ)_",
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": "0"
            }
          },
          "uid_type": 1,
          "stype": 0,
          "r_type": 1,
          "inner_id": 1,
          "status": 1,
          "dynamic_id_str": "418066107934024255",
          "pre_dy_id_str": "416667030934331062",
          "orig_dy_id_str": "416667030934331062",
          "rid_str": "418066107934387983",
          "origin": {
            "uid": 233114659,
            "type": 2,
            "rid": 83888239,
            "acl": 1024,
            "view": 1452366,
            "repost": 19371,
            "like": 8897,
            "is_liked": 0,
            "dynamic_id": 416667030934331100,
            "timestamp": 1595851253,
            "pre_dy_id": 0,
            "orig_dy_id": 0,
            "user_profile": {
              "info": {
                "uid": 233114659,
                "uname": "碧蓝航线",
                "face": "https://i0.hdslb.com/bfs/face/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg"
              },
              "card": {
                "official_verify": {
                  "type": 1,
                  "desc": "碧蓝航线官方账号"
                }
              },
              "vip": {
                "vipType": 1,
                "vipDueDate": 1596470400000,
                "dueRemark": "",
                "accessStatus": 0,
                "vipStatus": 1,
                "vipStatusWarn": "",
                "themeType": 0,
                "label": {
                  "path": ""
                }
              },
              "pendant": {
                "pid": 1987,
                "name": "碧蓝航线2020",
                "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
                "expire": 0,
                "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
              },
              "decorate_card": {
                "mid": 233114659,
                "id": 1970,
                "card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
                "card_type": 2,
                "name": "碧蓝航线2020粉丝专属",
                "expire_time": 0,
                "card_type_name": "免费",
                "uid": 233114659,
                "item_id": 1970,
                "item_type": 3,
                "big_card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
                "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1988?navhide=1&mid=233114659&from=dynamic",
                "fan": {
                  "is_fan": 1,
                  "number": 1,
                  "color": "#498de1",
                  "num_desc": "000001"
                },
                "image_enhance": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png"
              },
              "rank": "10000",
              "sign": "今天有没有被指挥官偷瞄呢(:3_ヽ)_",
              "level_info": {
                "current_level": 6,
                "current_min": 0,
                "current_exp": 0,
                "next_exp": "0"
              }
            },
            "uid_type": 1,
            "stype": 0,
            "r_type": 1,
            "inner_id": 0,
            "status": 1,
            "dynamic_id_str": "416667030934331062",
            "pre_dy_id_str": "0",
            "orig_dy_id_str": "0",
            "rid_str": "83888239"
          }
        },
        "card": "{ \"user\": { \"uid\": 233114659, \"uname\": \"碧蓝航线\", \"face\": \"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\" }, \"item\": { \"rp_id\": 418066107934387983, \"uid\": 233114659, \"content\": \"恭喜@小茶竹 @幽紫pomelo @风灬生水丿起 等10位同学中奖，已私信通知，详情请点击互动抽奖查看。\", \"ctrl\": \"[ { \\\"data\\\": \\\"94872570\\\", \\\"location\\\": 2, \\\"length\\\": 4, \\\"type\\\": 1 }, { \\\"data\\\": \\\"107178682\\\", \\\"location\\\": 7, \\\"length\\\": 9, \\\"type\\\": 1 }, { \\\"data\\\": \\\"97590861\\\", \\\"location\\\": 17, \\\"length\\\": 7, \\\"type\\\": 1 } ]\", \"orig_dy_id\": 416667030934331062, \"pre_dy_id\": 416667030934331062, \"timestamp\": 1596177001, \"reply\": 147, \"orig_type\": 2 }, \"origin\": \"{\\\"item\\\":{\\\"id\\\":83888239,\\\"title\\\":\\\"\\\",\\\"description\\\":\\\"\\\\u200b\\\\u4e92\\\\u52a8\\\\u62bd\\\\u5956 #\\\\u78a7\\\\u84dd\\\\u822a\\\\u7ebf# #CP26# \\\\n\\\\u672c\\\\u6b21\\\\u53c2\\\\u5c55\\\\u5706\\\\u6ee1\\\\u7ed3\\\\u675f\\\\u5566\\\\uff01\\\\u611f\\\\u8c22\\\\u6bcf\\\\u4e00\\\\u4f4d\\\\u524d\\\\u6765\\\\u53c2\\\\u5c55\\\\u7684\\\\u6307\\\\u6325\\\\u5b98~\\\\u03b5\\\\u0669(\\\\u0e51> \\\\u2083 <)\\\\u06f6\\\\u0417\\\\u8fd9\\\\u4e2a\\\\u5468\\\\u672b\\\\u56e0\\\\u4e3a\\\\u6307\\\\u6325\\\\u5b98\\\\u800c\\\\u53d8\\\\u5f97\\\\u975e\\\\u5e38\\\\u7cbe\\\\u5f69\\\\uff01\\\\u8428\\\\u62c9\\\\u9171\\\\u5df2\\\\u7ecf\\\\u5f00\\\\u59cb\\\\u671f\\\\u5f85\\\\u548c\\\\u6307\\\\u6325\\\\u5b98\\\\u7684\\\\u4e0b\\\\u4e00\\\\u6b21\\\\u4f1a\\\\u9762\\\\u5566\\\\uff01\\\\n\\\\u4e0b\\\\u9762\\\\uff0c\\\\u5c31\\\\u7531\\\\u8428\\\\u62c9\\\\u9171\\\\u4e3a\\\\u6307\\\\u6325\\\\u5b98\\\\u4eec\\\\u732e\\\\u4e0a\\\\u8fd9\\\\u6b21CP26\\\\u7684\\\\u7cbe\\\\u5f69\\\\u77ac\\\\u95f4\\\\u4ee5\\\\u53ca\\\\u6ee1\\\\u6ee1\\\\u7684\\\\u798f\\\\u5229\\\\uff01(\\\\u3063\\\\u2022\\\\u0300\\\\u03c9\\\\u2022\\\\u0301)\\\\u3063\\\\n \\\\u2193\\\\u2193\\\\u2193\\\\n\\\\u8f6c\\\\u53d1+\\\\u5173\\\\u6ce8\\\\u672c\\\\u535a\\\\uff0c\\\\u5c06\\\\u62bd\\\\u53d6\\\\uff1a\\\\n5\\\\u4f4d\\\\u6307\\\\u6325\\\\u5b98\\\\u83b7\\\\u5f97\\\\u300c\\\\u5c0f\\\\u52a0\\\\u52a0\\\\u5361\\\\u5957\\\\u300d\\\\u4e00\\\\u4efd\\\\uff01\\\\n5\\\\u4f4d\\\\u6307\\\\u6325\\\\u5b98\\\\u83b7\\\\u5f97\\\\u300c\\\\u5c0f\\\\u52a0\\\\u52a0\\\\u5e03\\\\u888b\\\\u300d+\\\\u300c\\\\u968f\\\\u673a\\\\u6b3e\\\\u6587\\\\u4ef6\\\\u5939\\\\u300d\\\\u4e00\\\\u4efd\\\\uff01\\\\n\\\\u4e8e7\\\\u670831\\\\u65e5\\\\u62bd\\\\u53d6 \\\",\\\"category\\\":\\\"daily\\\",\\\"role\\\":[],\\\"source\\\":[],\\\"pictures\\\":[{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/925a8b119396e41e10a4c27ee0e5d7adf88d7a70.jpg\\\",\\\"img_width\\\":1280,\\\"img_height\\\":853,\\\"img_size\\\":112},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/a1ef676e2a934b0f7219eede2087fc933e5794c4.jpg\\\",\\\"img_width\\\":1280,\\\"img_height\\\":853,\\\"img_size\\\":154},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/e7bc60d6dc8416ceb618a1b3c41875fbed30d03d.jpg\\\",\\\"img_width\\\":1280,\\\"img_height\\\":1920,\\\"img_size\\\":222},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/d952d8c0138e408572d724dd104ff302db1a39ca.jpg\\\",\\\"img_width\\\":4095,\\\"img_height\\\":6143,\\\"img_size\\\":3157},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/1a5eefdb3e55c1c56979764a121cbeb765a723ec.jpg\\\",\\\"img_width\\\":6688,\\\"img_height\\\":3762,\\\"img_size\\\":3155},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/964fc617e26d09f573a3c1040da67bc582800428.jpg\\\",\\\"img_width\\\":6688,\\\"img_height\\\":3762,\\\"img_size\\\":3210},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/09fde4601e28cbce478ba3b7c283acc7b938bc01.jpg\\\",\\\"img_width\\\":1280,\\\"img_height\\\":720,\\\"img_size\\\":103},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/2255180a11ed58f0d6468caa1c49c654ae0cddeb.jpg\\\",\\\"img_width\\\":1280,\\\"img_height\\\":720,\\\"img_size\\\":110},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/a9562058e7b731130e62721e51d07f6b706a35a7.jpg\\\",\\\"img_width\\\":1280,\\\"img_height\\\":1920,\\\"img_size\\\":218}],\\\"pictures_count\\\":9,\\\"upload_time\\\":1595851253,\\\"at_control\\\":\\\"[{\\\\\\\"data\\\\\\\":\\\\\\\"5\\\\\\\",\\\\\\\"length\\\\\\\":0,\\\\\\\"location\\\\\\\":0,\\\\\\\"type\\\\\\\":2}]\\\",\\\"reply\\\":1453,\\\"settings\\\":{\\\"copy_forbidden\\\":0},\\\"is_fav\\\":0},\\\"user\\\":{\\\"uid\\\":233114659,\\\"head_url\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/face\\\\\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\\\",\\\"name\\\":\\\"\\\\u78a7\\\\u84dd\\\\u822a\\\\u7ebf\\\",\\\"vip\\\":{\\\"vipType\\\":1,\\\"vipDueDate\\\":1596470400000,\\\"dueRemark\\\":\\\"\\\",\\\"accessStatus\\\":0,\\\"vipStatus\\\":1,\\\"vipStatusWarn\\\":\\\"\\\",\\\"themeType\\\":0,\\\"label\\\":{\\\"path\\\":\\\"\\\"}}}}\", \"origin_extension\": { \"lott\": \"{\\\"lottery_id\\\":48260}\" }, \"origin_extend_json\": \"{\\\"ctrl\\\":[{\\\"data\\\":\\\"5\\\",\\\"length\\\":0,\\\"location\\\":0,\\\"type\\\":2}],\\\"from\\\":{\\\"emoji_type\\\":1,\\\"from\\\":\\\"create.dynamic.web\\\",\\\"verify\\\":{\\\"cc\\\":{\\\"vf\\\":1}}},\\\"like_icon\\\":{\\\"action\\\":\\\"\\\",\\\"action_url\\\":\\\"\\\",\\\"end\\\":\\\"\\\",\\\"end_url\\\":\\\"\\\",\\\"start\\\":\\\"\\\",\\\"start_url\\\":\\\"\\\"},\\\"lott\\\":{\\\"lottery_id\\\":48260},\\\"topic\\\":{\\\"is_attach_topic\\\":1}}\", \"origin_user\": { \"info\": { \"uid\": 233114659, \"uname\": \"碧蓝航线\", \"face\": \"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\" }, \"card\": { \"official_verify\": { \"type\": 1, \"desc\": \"碧蓝航线官方账号\" } }, \"vip\": { \"vipType\": 1, \"vipDueDate\": 1596470400000, \"dueRemark\": \"\", \"accessStatus\": 0, \"vipStatus\": 1, \"vipStatusWarn\": \"\", \"themeType\": 0, \"label\": { \"path\": \"\" } }, \"pendant\": { \"pid\": 1987, \"name\": \"碧蓝航线2020\", \"image\": \"https:\\/\\/i1.hdslb.com\\/bfs\\/garb\\/item\\/fe1267f786bf69f1471aff715f8d38ec0e486df5.png\", \"expire\": 0, \"image_enhance\": \"https:\\/\\/i1.hdslb.com\\/bfs\\/garb\\/item\\/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp\" }, \"rank\": \"10000\", \"sign\": \"今天有没有被指挥官偷瞄呢(:3_ヽ)_\", \"level_info\": { \"current_level\": 6, \"current_min\": 0, \"current_exp\": 0, \"next_exp\": \"0\" } } }",
        "extend_json": "{\"ctrl\":[{\"data\":\"94872570\",\"length\":4,\"location\":2,\"type\":1},{\"data\":\"107178682\",\"length\":9,\"location\":7,\"type\":1},{\"data\":\"97590861\",\"length\":7,\"location\":17,\"type\":1}],\"from\":{\"from\":\"create.lottery\",\"verify\":{\"cc\":{\"nv\":1},\"sw\":{\"nv\":1}}},\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"}}",
        "extra": {
          "is_space_top": 0
        },
        "display": {
          "origin": {
            "topic_info": {
              "topic_details": [
                {
                  "topic_id": 2908447,
                  "topic_name": "碧蓝航线",
                  "is_activity": 0,
                  "topic_link": ""
                },
                {
                  "topic_id": 12637783,
                  "topic_name": "CP26",
                  "is_activity": 0,
                  "topic_link": ""
                }
              ]
            },
            "bottom_info": {
              "bottom_details": [
                {
                  "content": "碧蓝航线",
                  "jump_url": "bilibili://game_center/detail?id=97&sourceFrom=179",
                  "bottom_type": 2
                }
              ]
            },
            "relation": {
              "status": 1,
              "is_follow": 0,
              "is_followed": 0
            },
            "tags": [
              {
                "tag_type": 2,
                "sub_type": 2,
                "icon": "https://i0.hdslb.com/bfs/album/e8613d8debe7fd70737fc5ce59b543e89b0cce31.png",
                "text": "碧蓝航线",
                "link": "bilibili://game_center/detail?id=97&sourceFrom=179"
              }
            ]
          },
          "relation": {
            "status": 1,
            "is_follow": 0,
            "is_followed": 0
          }
        }
      },
      {
        "desc": {
          "uid": 233114659,
          "type": 8,
          "rid": 201556953,
          "acl": 0,
          "view": 354394,
          "repost": 22,
          "like": 5671,
          "is_liked": 0,
          "dynamic_id": 418065339140117300,
          "timestamp": 1596176822,
          "pre_dy_id": 0,
          "orig_dy_id": 0,
          "orig_type": 0,
          "user_profile": {
            "info": {
              "uid": 233114659,
              "uname": "碧蓝航线",
              "face": "https://i0.hdslb.com/bfs/face/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg"
            },
            "card": {
              "official_verify": {
                "type": 1,
                "desc": "碧蓝航线官方账号"
              }
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1596470400000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": ""
              }
            },
            "pendant": {
              "pid": 1987,
              "name": "碧蓝航线2020",
              "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
              "expire": 0,
              "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
            },
            "decorate_card": {
              "mid": 233114659,
              "id": 1970,
              "card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "card_type": 2,
              "name": "碧蓝航线2020粉丝专属",
              "expire_time": 0,
              "card_type_name": "免费",
              "uid": 233114659,
              "item_id": 1970,
              "item_type": 3,
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1988?navhide=1&mid=233114659&from=dynamic",
              "fan": {
                "is_fan": 1,
                "number": 1,
                "color": "#498de1",
                "num_desc": "000001"
              },
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png"
            },
            "rank": "10000",
            "sign": "今天有没有被指挥官偷瞄呢(:3_ヽ)_",
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": "0"
            }
          },
          "uid_type": 1,
          "stype": 1,
          "r_type": 1,
          "inner_id": 0,
          "status": 1,
          "dynamic_id_str": "418065339140117341",
          "pre_dy_id_str": "0",
          "orig_dy_id_str": "0",
          "rid_str": "201556953",
          "bvid": "BV1eh411Z7jh"
        },
        "card": "{\"aid\":201556953,\"attribute\":8405331,\"attribute_v2\":2,\"cid\":218693950,\"comment_jump_url\":\"bilibili:\\/\\/video\\/201556953\\/?page=1&player_preload=null&player_width=1920&player_height=1080&player_rotate=0\",\"copyright\":1,\"ctime\":1596176822,\"desc\":\"非公开视频\\n#碧蓝航线#\\n⚠️接下来——套娃警告！⚠️\\n一直蒙在神秘面纱下的【逸仙套娃】终于要首次露面了！快与萨拉酱一起360度了解一下我们的套娃吧！ (๑•̀ㅂ•́)و✧ \\nPS：三周年抽奖的 【逸仙套娃】已经陆续发货，正在快马加鞭向指挥官们赶过去！还请指挥官注意查收哦ヾ(✿ﾟ▽ﾟ)ノ\",\"dimension\":{\"height\":1080,\"rotate\":0,\"width\":1920},\"duration\":11,\"dynamic\":\"#碧蓝航线#\\n⚠️接下来——套娃警告！⚠️\\n一直蒙在神秘面纱下的【逸仙套娃】终于要首次露面了！快与萨拉酱一起360度了解一下我们的套娃吧！ (๑•̀ㅂ•́)و✧ \\nPS：三周年抽奖的 【逸仙套娃】已经陆续发货，正在快马加鞭向指挥官们赶过去！还请指挥官注意查收哦ヾ(✿ﾟ▽ﾟ)ノ\",\"jump_url\":\"bilibili:\\/\\/video\\/201556953\\/?page=1&player_preload=null&player_width=1920&player_height=1080&player_rotate=0\",\"owner\":{\"face\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\",\"mid\":233114659,\"name\":\"碧蓝航线\"},\"pic\":\"https:\\/\\/i1.hdslb.com\\/bfs\\/archive\\/38552de741be5863615237ad05fb0d68239ca132.jpg\",\"player_info\":null,\"pubdate\":1596176822,\"rights\":{\"autoplay\":1,\"bp\":0,\"download\":0,\"elec\":0,\"hd5\":1,\"is_cooperation\":0,\"movie\":0,\"no_background\":0,\"no_reprint\":0,\"pay\":0,\"ugc_pay\":0,\"ugc_pay_preview\":0},\"stat\":{\"aid\":201556953,\"coin\":165,\"danmaku\":19,\"dislike\":0,\"favorite\":129,\"his_rank\":0,\"like\":5671,\"now_rank\":0,\"reply\":288,\"share\":90,\"view\":47514},\"state\":0,\"tid\":21,\"title\":\"#碧蓝航线#⚠️接下来——套娃警告！⚠\",\"tname\":\"日常\",\"videos\":1}",
        "extend_json": "{\"from\":{\"emoji_type\":1,\"from\":\"dynamic\"},\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"},\"topic\":{\"is_attach_topic\":1}}",
        "extra": {
          "is_space_top": 0
        },
        "display": {
          "topic_info": {
            "topic_details": [
              {
                "topic_id": 2908447,
                "topic_name": "碧蓝航线",
                "is_activity": 0,
                "topic_link": ""
              }
            ]
          },
          "bottom_info": {
            "bottom_details": [
              {
                "content": "碧蓝航线",
                "jump_url": "bilibili://game_center/detail?id=97&sourceFrom=179",
                "bottom_type": 2
              }
            ]
          },
          "usr_action_txt": "发布了动态",
          "relation": {
            "status": 1,
            "is_follow": 0,
            "is_followed": 0
          },
          "tags": [
            {
              "tag_type": 2,
              "sub_type": 2,
              "icon": "https://i0.hdslb.com/bfs/album/e8613d8debe7fd70737fc5ce59b543e89b0cce31.png",
              "text": "碧蓝航线",
              "link": "bilibili://game_center/detail?id=97&sourceFrom=179"
            }
          ]
        }
      },
      {
        "desc": {
          "uid": 233114659,
          "type": 2,
          "rid": 84005782,
          "acl": 0,
          "view": 598734,
          "repost": 27,
          "like": 8416,
          "is_liked": 0,
          "dynamic_id": 416960609127880450,
          "timestamp": 1595919607,
          "pre_dy_id": 0,
          "orig_dy_id": 0,
          "orig_type": 0,
          "user_profile": {
            "info": {
              "uid": 233114659,
              "uname": "碧蓝航线",
              "face": "https://i0.hdslb.com/bfs/face/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg"
            },
            "card": {
              "official_verify": {
                "type": 1,
                "desc": "碧蓝航线官方账号"
              }
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1596470400000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": ""
              }
            },
            "pendant": {
              "pid": 1987,
              "name": "碧蓝航线2020",
              "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
              "expire": 0,
              "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
            },
            "decorate_card": {
              "mid": 233114659,
              "id": 1970,
              "card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "card_type": 2,
              "name": "碧蓝航线2020粉丝专属",
              "expire_time": 0,
              "card_type_name": "免费",
              "uid": 233114659,
              "item_id": 1970,
              "item_type": 3,
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1988?navhide=1&mid=233114659&from=dynamic",
              "fan": {
                "is_fan": 1,
                "number": 1,
                "color": "#498de1",
                "num_desc": "000001"
              },
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png"
            },
            "rank": "10000",
            "sign": "今天有没有被指挥官偷瞄呢(:3_ヽ)_",
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": "0"
            }
          },
          "uid_type": 1,
          "stype": 0,
          "r_type": 1,
          "inner_id": 0,
          "status": 1,
          "dynamic_id_str": "416960609127880431",
          "pre_dy_id_str": "0",
          "orig_dy_id_str": "0",
          "rid_str": "84005782"
        },
        "card": "{\"item\":{\"id\":84005782,\"title\":\"\",\"description\":\"#\\u78a7\\u84dd\\u822a\\u7ebf# \\n\\u6e2f\\u533a\\u65e9\\u4e0a\\u8fd8\\u98ce\\u548c\\u65e5\\u4e3d\\uff0c\\u5c31\\u5728\\u521a\\u521a\\u7535\\u95ea\\u96f7\\u9e23\\uff0c\\u4e0b\\u8d77\\u4e86\\u4e00\\u573a\\u66b4\\u96e8\\u2614 \\n\\u6307\\u6325\\u5b98\\u4eec\\u51fa\\u884c\\u8981\\u6ce8\\u610f\\u5929\\u6c14\\u60c5\\u51b5\\u54e6\\uff01\\n\\u4e0b\\u96e8\\u7684\\u65f6\\u5019\\uff0c\\u4e5f\\u8bf7\\u6307\\u6325\\u5b98\\u4eec\\u6ce8\\u610f\\u5b89\\u5168\\u3002\\u4e0d\\u8981\\u5728\\u6d77\\u8fb9\\ud83c\\udf0a \\u6446pose\\uff0c\\u66f4\\u4e0d\\u8981\\u5728\\u6d77\\u8fb9\\u4e3e\\u5251\\uff08\\u907f\\u96f7\\u9488\\uff09\\u54e6~~ <(*\\uffe3\\u25bd\\uffe3*)\\/ \",\"category\":\"daily\",\"role\":[],\"source\":[],\"pictures\":[{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/f9f34d7e20c2b8ffb4e6a6c8e09f49b8fb7cc119.png\",\"img_width\":800,\"img_height\":804,\"img_size\":1296}],\"pictures_count\":1,\"upload_time\":1595919607,\"at_control\":\"\",\"reply\":918,\"settings\":{\"copy_forbidden\":0},\"is_fav\":0},\"user\":{\"uid\":233114659,\"head_url\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\",\"name\":\"\\u78a7\\u84dd\\u822a\\u7ebf\",\"vip\":{\"vipType\":1,\"vipDueDate\":1596470400000,\"dueRemark\":\"\",\"accessStatus\":0,\"vipStatus\":1,\"vipStatusWarn\":\"\",\"themeType\":0,\"label\":{\"path\":\"\"}}}}",
        "extend_json": "{\"from\":{\"emoji_type\":1,\"from\":\"timer.publish\"},\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"},\"topic\":{\"is_attach_topic\":1}}",
        "extra": {
          "is_space_top": 0
        },
        "display": {
          "topic_info": {
            "topic_details": [
              {
                "topic_id": 2908447,
                "topic_name": "碧蓝航线",
                "is_activity": 0,
                "topic_link": ""
              }
            ]
          },
          "bottom_info": {
            "bottom_details": [
              {
                "content": "碧蓝航线",
                "jump_url": "bilibili://game_center/detail?id=97&sourceFrom=179",
                "bottom_type": 2
              }
            ]
          },
          "relation": {
            "status": 1,
            "is_follow": 0,
            "is_followed": 0
          },
          "tags": [
            {
              "tag_type": 2,
              "sub_type": 2,
              "icon": "https://i0.hdslb.com/bfs/album/e8613d8debe7fd70737fc5ce59b543e89b0cce31.png",
              "text": "碧蓝航线",
              "link": "bilibili://game_center/detail?id=97&sourceFrom=179"
            }
          ]
        }
      },
      {
        "desc": {
          "uid": 233114659,
          "type": 2,
          "rid": 83981478,
          "acl": 0,
          "view": 692632,
          "repost": 55,
          "like": 6187,
          "is_liked": 0,
          "dynamic_id": 416919089678816600,
          "timestamp": 1595909940,
          "pre_dy_id": 0,
          "orig_dy_id": 0,
          "orig_type": 0,
          "user_profile": {
            "info": {
              "uid": 233114659,
              "uname": "碧蓝航线",
              "face": "https://i0.hdslb.com/bfs/face/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg"
            },
            "card": {
              "official_verify": {
                "type": 1,
                "desc": "碧蓝航线官方账号"
              }
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1596470400000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": ""
              }
            },
            "pendant": {
              "pid": 1987,
              "name": "碧蓝航线2020",
              "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
              "expire": 0,
              "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
            },
            "decorate_card": {
              "mid": 233114659,
              "id": 1970,
              "card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "card_type": 2,
              "name": "碧蓝航线2020粉丝专属",
              "expire_time": 0,
              "card_type_name": "免费",
              "uid": 233114659,
              "item_id": 1970,
              "item_type": 3,
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1988?navhide=1&mid=233114659&from=dynamic",
              "fan": {
                "is_fan": 1,
                "number": 1,
                "color": "#498de1",
                "num_desc": "000001"
              },
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png"
            },
            "rank": "10000",
            "sign": "今天有没有被指挥官偷瞄呢(:3_ヽ)_",
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": "0"
            }
          },
          "uid_type": 1,
          "stype": 0,
          "r_type": 1,
          "inner_id": 0,
          "status": 1,
          "dynamic_id_str": "416919089678816581",
          "pre_dy_id_str": "0",
          "orig_dy_id_str": "0",
          "rid_str": "83981478"
        },
        "card": "{\"item\":{\"id\":83981478,\"title\":\"\",\"description\":\"#\\u78a7\\u84dd\\u822a\\u7ebf# #ChinaJoy#  \\n2020ChinaJoy\\u5373\\u5c06\\u5f00\\u542f\\uff0c\\u65b0\\u9c9c\\u51fa\\u7089\\u7684\\u53c2\\u5c55\\u6307\\u5357\\u6765\\u5566\\uff01 \\n\\n\\u8428\\u62c9\\u9171\\u5df2\\u7ecf\\u5907\\u597d\\u4e86\\u5168\\u65b0\\u7684\\u798f\\u5229\\u5468\\u8fb9\\uff0c\\u7b49\\u5f85\\u5927\\u5bb6\\u524d\\u5f80\\u73b0\\u573a\\u9886\\u53d6\\u5566~|\\u2022\\u0301 \\u2083\\u2022\\u0300)\\u256d\\u10e6 \\n\\u6307\\u6325\\u5b98\\u4eec\\u5173\\u5fc3\\u7684\\u3010\\u9038\\u4ed9\\u5957\\u5a03\\u3011\\u4e5f\\u5df2\\u5168\\u90e8\\u5236\\u4f5c\\u5b8c\\u6210\\uff0c\\u5e76\\u5c06\\u4e8e\\u8fd1\\u671f\\u8d77\\u9646\\u7eed\\u5bc4\\u7ed9\\u83b7\\u5956\\u7684\\u6307\\u6325\\u5b98\\uff01\\nPS\\uff1a\\u3010\\u9038\\u4ed9\\u5957\\u5a03\\u3011\\u4e5f\\u5c06\\u6709\\u673a\\u4f1a\\u5728\\u5c55\\u53f0\\u53ca\\u821e\\u53f0\\u6d3b\\u52a8\\u4e2d\\u83b7\\u5f97\\uff013\\u5468\\u5e74\\u671f\\u95f4\\u9519\\u8fc7\\u3010\\u9038\\u4ed9\\u5957\\u5a03\\u3011\\u7684\\u6307\\u6325\\u5b98\\uff0c\\u8fd9\\u6b21\\u5343\\u4e07\\u4e0d\\u8981\\u9519\\u8fc7\\uff01\\u30fe(\\u25cd\\u00b0\\u2207\\u00b0\\u25cd)\\uff89\\uff9e\\nPPS\\uff1a\\u7279\\u6b8a\\u65f6\\u671f\\uff0c\\u6307\\u6325\\u5b98\\u4eec\\u51fa\\u884c\\u65f6\\u8bb0\\u5f97\\u5e26\\u597d\\u53e3\\u7f69\\uff0c\\u505a\\u597d\\u4e2a\\u4eba\\u9632\\u62a4\\u54e6\\uff01\\n\\n\\u3010\\u65f6\\u95f4\\u3011\\uff1a7\\u670831\\u65e5-8\\u67083\\u65e5\\n\\u3010\\u5730\\u5740\\u3011\\uff1a\\u65b0\\u56fd\\u9645\\u535a\\u89c8\\u4e2d\\u5fc3\\uff08\\u4e0a\\u6d77\\u5e02\\u6d66\\u4e1c\\u9f99\\u9633\\u8def2345\\u53f7\\uff09\\n\\u3010\\u5c55\\u4f4d\\u53f7\\u3011\\uff1aN5-02 \",\"category\":\"daily\",\"role\":[],\"source\":[],\"pictures\":[{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/15ce5235acb98e040830f4e03a161309d37f0f55.jpg\",\"img_width\":750,\"img_height\":3611,\"img_size\":413}],\"pictures_count\":1,\"upload_time\":1595909940,\"at_control\":\"\",\"reply\":425,\"settings\":{\"copy_forbidden\":0},\"is_fav\":0},\"user\":{\"uid\":233114659,\"head_url\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\",\"name\":\"\\u78a7\\u84dd\\u822a\\u7ebf\",\"vip\":{\"vipType\":1,\"vipDueDate\":1596470400000,\"dueRemark\":\"\",\"accessStatus\":0,\"vipStatus\":1,\"vipStatusWarn\":\"\",\"themeType\":0,\"label\":{\"path\":\"\"}}}}",
        "extend_json": "{\"from\":{\"emoji_type\":1,\"from\":\"create.dynamic.web\",\"verify\":{\"cc\":{\"nv\":1}}},\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"},\"topic\":{\"is_attach_topic\":1}}",
        "extra": {
          "is_space_top": 0
        },
        "activity_infos": {
          "details": [
            {
              "type": 1,
              "detail": "{\"is_show\":1,\"topic_id\":2538844,\"topic_link\":\"bilibili:\\/\\/pegasus\\/channel\\/2538844?type=topic\",\"topic_name\":\"ChinaJoy\"}"
            }
          ]
        },
        "display": {
          "topic_info": {
            "topic_details": [
              {
                "topic_id": 2908447,
                "topic_name": "碧蓝航线",
                "is_activity": 0,
                "topic_link": ""
              },
              {
                "topic_id": 2538844,
                "topic_name": "ChinaJoy",
                "is_activity": 1,
                "topic_link": "https://game.bilibili.com/2020ChinaJoy/"
              },
              {
                "topic_id": 56787,
                "topic_name": "CHINAJOY",
                "is_activity": 0,
                "topic_link": ""
              }
            ]
          },
          "bottom_info": {
            "bottom_details": [
              {
                "content": "碧蓝航线",
                "jump_url": "bilibili://game_center/detail?id=97&sourceFrom=179",
                "bottom_type": 2
              }
            ]
          },
          "relation": {
            "status": 1,
            "is_follow": 0,
            "is_followed": 0
          },
          "tags": [
            {
              "tag_type": 2,
              "sub_type": 2,
              "icon": "https://i0.hdslb.com/bfs/album/e8613d8debe7fd70737fc5ce59b543e89b0cce31.png",
              "text": "碧蓝航线",
              "link": "bilibili://game_center/detail?id=97&sourceFrom=179"
            }
          ]
        }
      },
      {
        "desc": {
          "uid": 233114659,
          "type": 2,
          "rid": 83888239,
          "acl": 1024,
          "view": 1452366,
          "repost": 19371,
          "like": 8897,
          "is_liked": 0,
          "dynamic_id": 416667030934331100,
          "timestamp": 1595851253,
          "pre_dy_id": 0,
          "orig_dy_id": 0,
          "orig_type": 0,
          "user_profile": {
            "info": {
              "uid": 233114659,
              "uname": "碧蓝航线",
              "face": "https://i0.hdslb.com/bfs/face/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg"
            },
            "card": {
              "official_verify": {
                "type": 1,
                "desc": "碧蓝航线官方账号"
              }
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1596470400000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": ""
              }
            },
            "pendant": {
              "pid": 1987,
              "name": "碧蓝航线2020",
              "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
              "expire": 0,
              "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
            },
            "decorate_card": {
              "mid": 233114659,
              "id": 1970,
              "card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "card_type": 2,
              "name": "碧蓝航线2020粉丝专属",
              "expire_time": 0,
              "card_type_name": "免费",
              "uid": 233114659,
              "item_id": 1970,
              "item_type": 3,
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1988?navhide=1&mid=233114659&from=dynamic",
              "fan": {
                "is_fan": 1,
                "number": 1,
                "color": "#498de1",
                "num_desc": "000001"
              },
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png"
            },
            "rank": "10000",
            "sign": "今天有没有被指挥官偷瞄呢(:3_ヽ)_",
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": "0"
            }
          },
          "uid_type": 1,
          "stype": 0,
          "r_type": 1,
          "inner_id": 0,
          "status": 1,
          "dynamic_id_str": "416667030934331062",
          "pre_dy_id_str": "0",
          "orig_dy_id_str": "0",
          "rid_str": "83888239"
        },
        "card": "{\"item\":{\"id\":83888239,\"title\":\"\",\"description\":\"\\u200b\\u4e92\\u52a8\\u62bd\\u5956 #\\u78a7\\u84dd\\u822a\\u7ebf# #CP26# \\n\\u672c\\u6b21\\u53c2\\u5c55\\u5706\\u6ee1\\u7ed3\\u675f\\u5566\\uff01\\u611f\\u8c22\\u6bcf\\u4e00\\u4f4d\\u524d\\u6765\\u53c2\\u5c55\\u7684\\u6307\\u6325\\u5b98~\\u03b5\\u0669(\\u0e51> \\u2083 <)\\u06f6\\u0417\\u8fd9\\u4e2a\\u5468\\u672b\\u56e0\\u4e3a\\u6307\\u6325\\u5b98\\u800c\\u53d8\\u5f97\\u975e\\u5e38\\u7cbe\\u5f69\\uff01\\u8428\\u62c9\\u9171\\u5df2\\u7ecf\\u5f00\\u59cb\\u671f\\u5f85\\u548c\\u6307\\u6325\\u5b98\\u7684\\u4e0b\\u4e00\\u6b21\\u4f1a\\u9762\\u5566\\uff01\\n\\u4e0b\\u9762\\uff0c\\u5c31\\u7531\\u8428\\u62c9\\u9171\\u4e3a\\u6307\\u6325\\u5b98\\u4eec\\u732e\\u4e0a\\u8fd9\\u6b21CP26\\u7684\\u7cbe\\u5f69\\u77ac\\u95f4\\u4ee5\\u53ca\\u6ee1\\u6ee1\\u7684\\u798f\\u5229\\uff01(\\u3063\\u2022\\u0300\\u03c9\\u2022\\u0301)\\u3063\\n \\u2193\\u2193\\u2193\\n\\u8f6c\\u53d1+\\u5173\\u6ce8\\u672c\\u535a\\uff0c\\u5c06\\u62bd\\u53d6\\uff1a\\n5\\u4f4d\\u6307\\u6325\\u5b98\\u83b7\\u5f97\\u300c\\u5c0f\\u52a0\\u52a0\\u5361\\u5957\\u300d\\u4e00\\u4efd\\uff01\\n5\\u4f4d\\u6307\\u6325\\u5b98\\u83b7\\u5f97\\u300c\\u5c0f\\u52a0\\u52a0\\u5e03\\u888b\\u300d+\\u300c\\u968f\\u673a\\u6b3e\\u6587\\u4ef6\\u5939\\u300d\\u4e00\\u4efd\\uff01\\n\\u4e8e7\\u670831\\u65e5\\u62bd\\u53d6 \",\"category\":\"daily\",\"role\":[],\"source\":[],\"pictures\":[{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/925a8b119396e41e10a4c27ee0e5d7adf88d7a70.jpg\",\"img_width\":1280,\"img_height\":853,\"img_size\":112},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/a1ef676e2a934b0f7219eede2087fc933e5794c4.jpg\",\"img_width\":1280,\"img_height\":853,\"img_size\":154},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/e7bc60d6dc8416ceb618a1b3c41875fbed30d03d.jpg\",\"img_width\":1280,\"img_height\":1920,\"img_size\":222},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/d952d8c0138e408572d724dd104ff302db1a39ca.jpg\",\"img_width\":4095,\"img_height\":6143,\"img_size\":3157},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/1a5eefdb3e55c1c56979764a121cbeb765a723ec.jpg\",\"img_width\":6688,\"img_height\":3762,\"img_size\":3155},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/964fc617e26d09f573a3c1040da67bc582800428.jpg\",\"img_width\":6688,\"img_height\":3762,\"img_size\":3210},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/09fde4601e28cbce478ba3b7c283acc7b938bc01.jpg\",\"img_width\":1280,\"img_height\":720,\"img_size\":103},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/2255180a11ed58f0d6468caa1c49c654ae0cddeb.jpg\",\"img_width\":1280,\"img_height\":720,\"img_size\":110},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/a9562058e7b731130e62721e51d07f6b706a35a7.jpg\",\"img_width\":1280,\"img_height\":1920,\"img_size\":218}],\"pictures_count\":9,\"upload_time\":1595851253,\"at_control\":\"[{\\\"data\\\":\\\"5\\\",\\\"length\\\":0,\\\"location\\\":0,\\\"type\\\":2}]\",\"reply\":1453,\"settings\":{\"copy_forbidden\":0},\"is_fav\":0},\"user\":{\"uid\":233114659,\"head_url\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\",\"name\":\"\\u78a7\\u84dd\\u822a\\u7ebf\",\"vip\":{\"vipType\":1,\"vipDueDate\":1596470400000,\"dueRemark\":\"\",\"accessStatus\":0,\"vipStatus\":1,\"vipStatusWarn\":\"\",\"themeType\":0,\"label\":{\"path\":\"\"}}}}",
        "extension": {
          "lott": "{\"lottery_id\":48260}"
        },
        "extend_json": "{\"ctrl\":[{\"data\":\"5\",\"length\":0,\"location\":0,\"type\":2}],\"from\":{\"emoji_type\":1,\"from\":\"create.dynamic.web\",\"verify\":{\"cc\":{\"vf\":1}}},\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"},\"lott\":{\"lottery_id\":48260},\"topic\":{\"is_attach_topic\":1}}",
        "extra": {
          "is_space_top": 0
        },
        "display": {
          "topic_info": {
            "topic_details": [
              {
                "topic_id": 2908447,
                "topic_name": "碧蓝航线",
                "is_activity": 0,
                "topic_link": ""
              },
              {
                "topic_id": 12637783,
                "topic_name": "CP26",
                "is_activity": 0,
                "topic_link": ""
              }
            ]
          },
          "bottom_info": {
            "bottom_details": [
              {
                "content": "碧蓝航线",
                "jump_url": "bilibili://game_center/detail?id=97&sourceFrom=179",
                "bottom_type": 2
              }
            ]
          },
          "relation": {
            "status": 1,
            "is_follow": 0,
            "is_followed": 0
          },
          "tags": [
            {
              "tag_type": 2,
              "sub_type": 2,
              "icon": "https://i0.hdslb.com/bfs/album/e8613d8debe7fd70737fc5ce59b543e89b0cce31.png",
              "text": "碧蓝航线",
              "link": "bilibili://game_center/detail?id=97&sourceFrom=179"
            }
          ]
        }
      },
      {
        "desc": {
          "uid": 233114659,
          "type": 1,
          "rid": 416543172663015040,
          "acl": 0,
          "view": 571792,
          "repost": 212,
          "comment": 368,
          "like": 4122,
          "is_liked": 0,
          "dynamic_id": 416543172660325400,
          "timestamp": 1595822415,
          "pre_dy_id": 415875425506125250,
          "orig_dy_id": 415875425506125250,
          "orig_type": 2,
          "user_profile": {
            "info": {
              "uid": 233114659,
              "uname": "碧蓝航线",
              "face": "https://i0.hdslb.com/bfs/face/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg"
            },
            "card": {
              "official_verify": {
                "type": 1,
                "desc": "碧蓝航线官方账号"
              }
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1596470400000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": ""
              }
            },
            "pendant": {
              "pid": 1987,
              "name": "碧蓝航线2020",
              "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
              "expire": 0,
              "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
            },
            "decorate_card": {
              "mid": 233114659,
              "id": 1970,
              "card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "card_type": 2,
              "name": "碧蓝航线2020粉丝专属",
              "expire_time": 0,
              "card_type_name": "免费",
              "uid": 233114659,
              "item_id": 1970,
              "item_type": 3,
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1988?navhide=1&mid=233114659&from=dynamic",
              "fan": {
                "is_fan": 1,
                "number": 1,
                "color": "#498de1",
                "num_desc": "000001"
              },
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png"
            },
            "rank": "10000",
            "sign": "今天有没有被指挥官偷瞄呢(:3_ヽ)_",
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": "0"
            }
          },
          "uid_type": 1,
          "stype": 0,
          "r_type": 1,
          "inner_id": 0,
          "status": 1,
          "dynamic_id_str": "416543172660325358",
          "pre_dy_id_str": "415875425506125270",
          "orig_dy_id_str": "415875425506125270",
          "rid_str": "416543172663015022",
          "origin": {
            "uid": 68559,
            "type": 2,
            "rid": 83514941,
            "acl": 1024,
            "view": 6033652,
            "repost": 12652,
            "like": 0,
            "dynamic_id": 415875425506125250,
            "timestamp": 1595666943,
            "pre_dy_id": 0,
            "orig_dy_id": 0,
            "uid_type": 1,
            "stype": 0,
            "r_type": 1,
            "inner_id": 0,
            "status": 1,
            "dynamic_id_str": "415875425506125270",
            "pre_dy_id_str": "0",
            "orig_dy_id_str": "0",
            "rid_str": "83514941"
          }
        },
        "card": "{ \"user\": { \"uid\": 233114659, \"uname\": \"碧蓝航线\", \"face\": \"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\" }, \"item\": { \"rp_id\": 416543172663015022, \"uid\": 233114659, \"content\": \"#ChinaJoy# 万一中奖了呢？[tv_调皮][tv_调皮]\", \"orig_dy_id\": 415875425506125270, \"pre_dy_id\": 415875425506125270, \"timestamp\": 1595822415, \"reply\": 368, \"orig_type\": 2 }, \"origin\": \"{\\\"item\\\":{\\\"id\\\":83514941,\\\"title\\\":\\\"\\\",\\\"description\\\":\\\"\\\\u200d#ChinaJoy# \\\\u4e0b\\\\u5468\\\\u5c31\\\\u8981\\\\u8fce\\\\u6765ChinaJoy2020\\\\u5566\\\\uff01\\\\u6765\\\\u770b\\\\u770bB\\\\u7ad9\\\\u5c55\\\\u4f4d\\\\u4e3a\\\\u4f60\\\\u51c6\\\\u5907\\\\u7684\\\\u201c\\\\u65b0\\\\u526f\\\\u672c\\\\u201d\\\\u5427[tv_\\\\u601d\\\\u8003] \\\\u56f4\\\\u89c2CJ\\\\u821e\\\\u53f0\\\\u76f4\\\\u64ad\\\\u7684\\\\u5c0f\\\\u4f19\\\\u4f34\\\\u540c\\\\u6837\\\\u4f1a\\\\u6536\\\\u5230\\\\u5c0f\\\\u7535\\\\u89c6\\\\u51c6\\\\u5907\\\\u7684\\\\u60ca\\\\u559c\\\\uff0c\\\\u66f4\\\\u591aCJ\\\\u9650\\\\u5b9a\\\\u5956\\\\u54c1\\\\u6233\\\\uff1ahttps:\\\\\\/\\\\\\/game.bilibili.com\\\\\\/2020ChinaJoy\\\\\\/  \\\\u5173\\\\u6ce8\\\\u54d4\\\\u54e9\\\\u54d4\\\\u54e9\\\\u5a18\\\\u5e76\\\\u8f6c\\\\u53d1\\\\u672c\\\\u6761\\\\u52a8\\\\u6001\\\\uff0c\\\\u8fd8\\\\u6709\\\\u673a\\\\u4f1a\\\\u83b7\\\\u5f97\\\\u4e00\\\\u52a0OnePlus8 Pro\\\\u624b\\\\u673a(\\\\u62bd\\\\u4e24\\\\u540d)\\\\uff5e @\\\\u54d4\\\\u54e9\\\\u54d4\\\\u54e9\\\\u6e38\\\\u620f\\\\u4e2d\\\\u5fc3 @\\\\u54d4\\\\u54e9\\\\u54d4\\\\u54e9\\\\u5f39\\\\u5e55\\\\u7f51 \\\\u5feb\\\\u6765\\\\u7ec4\\\\u961f[2233\\\\u5a18_\\\\u5356\\\\u840c]\\\\u200b\\\\u4e92\\\\u52a8\\\\u62bd\\\\u5956 \\\",\\\"category\\\":\\\"daily\\\",\\\"role\\\":[],\\\"source\\\":[],\\\"pictures\\\":[{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/52022b506bb5e3e41ad4c94d648c2916da8e880f.jpg\\\",\\\"img_width\\\":750,\\\"img_height\\\":3900,\\\"img_size\\\":2681},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/1de7de93693a1b263ea775f6ecbbd06e617ce7c5.jpg\\\",\\\"img_width\\\":750,\\\"img_height\\\":2852,\\\"img_size\\\":1727},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/e81e3bc6478f34948198524edd66e7e217b0f969.jpg\\\",\\\"img_width\\\":750,\\\"img_height\\\":2063,\\\"img_size\\\":1405},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/a198c93caf06c81c23ab525367fd5c66b0eab007.jpg\\\",\\\"img_width\\\":750,\\\"img_height\\\":5601,\\\"img_size\\\":3325},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/463ef46cdf40e0ccb61633c0c914f27c33710410.jpg\\\",\\\"img_width\\\":800,\\\"img_height\\\":1500,\\\"img_size\\\":1249},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/41a1404c757fa22e67a6e771f0ee12321da9627c.jpg\\\",\\\"img_width\\\":750,\\\"img_height\\\":1875,\\\"img_size\\\":953},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/0f0968c40e499fdf8bce25ca6a29f011f1367119.jpg\\\",\\\"img_width\\\":750,\\\"img_height\\\":3600,\\\"img_size\\\":1481},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/914abbbe7154111c5f0851e6a07a00fe0ddbed48.jpg\\\",\\\"img_width\\\":750,\\\"img_height\\\":4251,\\\"img_size\\\":2635},{\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/1f41b4494c3268a78c39c79c1feabc53cc9ef1b1.jpg\\\",\\\"img_width\\\":750,\\\"img_height\\\":1061,\\\"img_size\\\":283}],\\\"pictures_count\\\":9,\\\"upload_time\\\":1595666943,\\\"at_control\\\":\\\"[{\\\\\\\"data\\\\\\\":\\\\\\\"5\\\\\\\",\\\\\\\"length\\\\\\\":0,\\\\\\\"location\\\\\\\":212,\\\\\\\"type\\\\\\\":2},{\\\\\\\"location\\\\\\\":179,\\\\\\\"type\\\\\\\":1,\\\\\\\"length\\\\\\\":10,\\\\\\\"data\\\\\\\":\\\\\\\"1328260\\\\\\\"},{\\\\\\\"location\\\\\\\":189,\\\\\\\"type\\\\\\\":1,\\\\\\\"length\\\\\\\":9,\\\\\\\"data\\\\\\\":\\\\\\\"8047632\\\\\\\"}]\\\",\\\"reply\\\":1280,\\\"settings\\\":{\\\"copy_forbidden\\\":0},\\\"is_fav\\\":0},\\\"user\\\":{\\\"uid\\\":68559,\\\"head_url\\\":\\\"https:\\\\\\/\\\\\\/i2.hdslb.com\\\\\\/bfs\\\\\\/face\\\\\\/46e4f399de1bacda912e8c2cc3d69af6ee2581f8.jpg\\\",\\\"name\\\":\\\"\\\\u54d4\\\\u54e9\\\\u54d4\\\\u54e9\\\\u5a18\\\",\\\"vip\\\":{\\\"vipType\\\":2,\\\"vipDueDate\\\":1622908800000,\\\"dueRemark\\\":\\\"\\\",\\\"accessStatus\\\":0,\\\"vipStatus\\\":1,\\\"vipStatusWarn\\\":\\\"\\\",\\\"themeType\\\":0,\\\"label\\\":{\\\"path\\\":\\\"\\\"}}}}\", \"origin_extension\": { \"lott\": \"{\\\"lottery_id\\\":48166}\" }, \"origin_extend_json\": \"{\\\"ctrl\\\":[{\\\"data\\\":\\\"5\\\",\\\"length\\\":0,\\\"location\\\":212,\\\"type\\\":2},{\\\"data\\\":\\\"1328260\\\",\\\"length\\\":10,\\\"location\\\":179,\\\"type\\\":1},{\\\"data\\\":\\\"8047632\\\",\\\"length\\\":9,\\\"location\\\":189,\\\"type\\\":1}],\\\"from\\\":{\\\"emoji_type\\\":1,\\\"from\\\":\\\"create.dynamic.web\\\",\\\"verify\\\":{\\\"cc\\\":{\\\"vf\\\":1},\\\"sw\\\":{\\\"nv\\\":1}}},\\\"like_icon\\\":{\\\"action\\\":\\\"\\\",\\\"action_url\\\":\\\"\\\",\\\"end\\\":\\\"\\\",\\\"end_url\\\":\\\"\\\",\\\"start\\\":\\\"\\\",\\\"start_url\\\":\\\"\\\"},\\\"lott\\\":{\\\"lottery_id\\\":48166},\\\"topic\\\":{\\\"is_attach_topic\\\":1}}\", \"origin_user\": { \"info\": { \"uid\": 68559, \"uname\": \"哔哩哔哩娘\", \"face\": \"https:\\/\\/i2.hdslb.com\\/bfs\\/face\\/46e4f399de1bacda912e8c2cc3d69af6ee2581f8.jpg\" }, \"card\": { \"official_verify\": { \"type\": 0, \"desc\": \"哔哩哔哩站娘22和33\" } }, \"vip\": { \"vipType\": 2, \"vipDueDate\": 1622908800000, \"dueRemark\": \"\", \"accessStatus\": 0, \"vipStatus\": 1, \"vipStatusWarn\": \"\", \"themeType\": 0, \"label\": { \"path\": \"\" } }, \"pendant\": { \"pid\": 0, \"name\": \"\", \"image\": \"\", \"expire\": 0, \"image_enhance\": \"\" }, \"rank\": \"10000\", \"sign\": \"哔哩哔哩站娘22和33\", \"level_info\": { \"current_level\": 6, \"current_min\": 0, \"current_exp\": 0, \"next_exp\": \"0\" } }, \"activity_infos\": { \"details\": [ { \"type\": 1, \"detail\": \"{\\\"is_show\\\":1,\\\"topic_id\\\":2538844,\\\"topic_link\\\":\\\"bilibili:\\\\\\/\\\\\\/pegasus\\\\\\/channel\\\\\\/2538844?type=topic\\\",\\\"topic_name\\\":\\\"ChinaJoy\\\"}\" } ] } }",
        "extend_json": "{\"from\":{\"emoji_type\":1,\"verify\":{\"cc\":{\"nv\":1}}},\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"},\"topic\":{\"is_attach_topic\":1}}",
        "extra": {
          "is_space_top": 0
        },
        "display": {
          "topic_info": {
            "topic_details": [
              {
                "topic_id": 2538844,
                "topic_name": "ChinaJoy",
                "is_activity": 1,
                "topic_link": "https://game.bilibili.com/2020ChinaJoy/"
              },
              {
                "topic_id": 56787,
                "topic_name": "CHINAJOY",
                "is_activity": 0,
                "topic_link": ""
              }
            ]
          },
          "origin": {
            "topic_info": {
              "topic_details": [
                {
                  "topic_id": 2538844,
                  "topic_name": "ChinaJoy",
                  "is_activity": 1,
                  "topic_link": "https://game.bilibili.com/2020ChinaJoy/"
                },
                {
                  "topic_id": 56787,
                  "topic_name": "CHINAJOY",
                  "is_activity": 0,
                  "topic_link": ""
                }
              ]
            },
            "emoji_info": {
              "emoji_details": [
                {
                  "emoji_name": "[2233娘_卖萌]",
                  "id": 140,
                  "package_id": 6,
                  "state": 0,
                  "type": 2,
                  "attr": 0,
                  "text": "[2233娘_卖萌]",
                  "url": "https://i0.hdslb.com/bfs/emote/ea893aa25355de95ab4f03c2dad3f0c58d0c159e.png",
                  "meta": {
                    "size": 2
                  },
                  "mtime": 1586316683
                },
                {
                  "emoji_name": "[tv_思考]",
                  "id": 44,
                  "package_id": 2,
                  "state": 0,
                  "type": 1,
                  "attr": 0,
                  "text": "[tv_思考]",
                  "url": "https://i0.hdslb.com/bfs/emote/90cf159733e558137ed20aa04d09964436f618a1.png",
                  "meta": {
                    "size": 1
                  },
                  "mtime": 1577952473
                }
              ]
            },
            "relation": {
              "status": 1,
              "is_follow": 0,
              "is_followed": 0
            },
            "tags": [
              {
                "tag_type": 3,
                "sub_type": 1,
                "icon": "https://i0.hdslb.com/bfs/album/4c1880a3e9d5fd2c72b339929a73a4b83d2bab93.png",
                "text": "ChinaJoy",
                "link": "bilibili://pegasus/channel/2538844?type=topic&topic_from=topic-card&name=ChinaJoy",
                "rid": 2538844
              }
            ]
          },
          "emoji_info": {
            "emoji_details": [
              {
                "emoji_name": "[tv_调皮]",
                "id": 51,
                "package_id": 2,
                "state": 0,
                "type": 1,
                "attr": 0,
                "text": "[tv_调皮]",
                "url": "https://i0.hdslb.com/bfs/emote/b9c41de8e82dd7a8515ae5e3cb63e898bf245186.png",
                "meta": {
                  "size": 1
                },
                "mtime": 1577952473
              }
            ]
          },
          "relation": {
            "status": 1,
            "is_follow": 0,
            "is_followed": 0
          }
        }
      },
      {
        "desc": {
          "uid": 233114659,
          "type": 2,
          "rid": 83622691,
          "acl": 0,
          "view": 640988,
          "repost": 19,
          "like": 6863,
          "is_liked": 0,
          "dynamic_id": 416148868897205000,
          "timestamp": 1595730609,
          "pre_dy_id": 0,
          "orig_dy_id": 0,
          "orig_type": 0,
          "user_profile": {
            "info": {
              "uid": 233114659,
              "uname": "碧蓝航线",
              "face": "https://i0.hdslb.com/bfs/face/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg"
            },
            "card": {
              "official_verify": {
                "type": 1,
                "desc": "碧蓝航线官方账号"
              }
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1596470400000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": ""
              }
            },
            "pendant": {
              "pid": 1987,
              "name": "碧蓝航线2020",
              "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
              "expire": 0,
              "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
            },
            "decorate_card": {
              "mid": 233114659,
              "id": 1970,
              "card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "card_type": 2,
              "name": "碧蓝航线2020粉丝专属",
              "expire_time": 0,
              "card_type_name": "免费",
              "uid": 233114659,
              "item_id": 1970,
              "item_type": 3,
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1988?navhide=1&mid=233114659&from=dynamic",
              "fan": {
                "is_fan": 1,
                "number": 1,
                "color": "#498de1",
                "num_desc": "000001"
              },
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png"
            },
            "rank": "10000",
            "sign": "今天有没有被指挥官偷瞄呢(:3_ヽ)_",
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": "0"
            }
          },
          "uid_type": 1,
          "stype": 0,
          "r_type": 1,
          "inner_id": 0,
          "status": 1,
          "dynamic_id_str": "416148868897205005",
          "pre_dy_id_str": "0",
          "orig_dy_id_str": "0",
          "rid_str": "83622691"
        },
        "card": "{\"item\":{\"id\":83622691,\"title\":\"\",\"description\":\"#\\u78a7\\u84dd\\u822a\\u7ebf# #CP26# \\n\\u6628\\u5929\\uff0c\\u78a7\\u84dd\\u822a\\u7ebf\\u5728CP26\\u7b2c\\u4e00\\u5929\\u7684\\u53c2\\u5c55\\u7ed3\\u675f\\u5566\\uff01\\u4e3a\\u6307\\u6325\\u5b98\\u4eec\\u9001\\u4e0a\\u65b0\\u9c9c\\u51fa\\u7089\\u7684\\u9996\\u65e5\\u73b0\\u573a\\u7167~ o(*\\u2267\\u25bd\\u2266)\\u30c4\\u975e\\u5e38\\u611f\\u8c22\\u708e\\u708e\\u590f\\u65e5\\u524d\\u6765\\u53c2\\u5c55\\u7684\\u6307\\u6325\\u5b98\\uff01\\n\\u6211\\u4eec\\u7b2c\\u4e8c\\u5929\\u7684\\u6d3b\\u52a8\\u4e5f\\u5f00\\u59cb\\u5566\\uff01\\u5750\\u6807\\u2192CPB16&CPB18\\uff0c\\u8d85\\u9177\\u70ab\\u821e\\u53f0\\u3001\\u8d85\\u597d\\u73a9\\u4e92\\u52a8\\u4ee5\\u53ca\\u8d85\\u591a\\u5468\\u8fb9\\u7b49\\u7740\\u6307\\u6325\\u5b98\\uff01\\n\\u671f\\u5f85\\u4e0e\\u6307\\u6325\\u5b98\\u89c1\\u9762~ (\\u0e51\\u2022\\u0300\\u3142\\u2022\\u0301)\\u0648\\u2727 \",\"category\":\"daily\",\"role\":[],\"source\":[],\"pictures\":[{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/3fb394881efd36491bdc99b34f50e0def9153627.jpg\",\"img_width\":1600,\"img_height\":1067,\"img_size\":1664},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/6b5e8c2e037575508af00760c0d1a0e9a4d00b8c.jpg\",\"img_width\":1598,\"img_height\":1067,\"img_size\":437},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/c0b7b1a96f0b4febe04509f5c34f39575d23f35d.jpg\",\"img_width\":1600,\"img_height\":1067,\"img_size\":1733},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/eacf0d8441ec39b851e2dd36205c89e6c9c2c16b.jpg\",\"img_width\":1599,\"img_height\":1067,\"img_size\":332},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/a4c7c93a772810ae885b0c485514acf319fe9f9f.jpg\",\"img_width\":1599,\"img_height\":1067,\"img_size\":461},{\"img_src\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/album\\/f7c61b5604536e65b18d5a3c35034c7dc475d7c2.jpg\",\"img_width\":1600,\"img_height\":1067,\"img_size\":1223}],\"pictures_count\":6,\"upload_time\":1595730609,\"at_control\":\"\",\"reply\":434,\"settings\":{\"copy_forbidden\":0},\"is_fav\":0},\"user\":{\"uid\":233114659,\"head_url\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\",\"name\":\"\\u78a7\\u84dd\\u822a\\u7ebf\",\"vip\":{\"vipType\":1,\"vipDueDate\":1596470400000,\"dueRemark\":\"\",\"accessStatus\":0,\"vipStatus\":1,\"vipStatusWarn\":\"\",\"themeType\":0,\"label\":{\"path\":\"\"}}}}",
        "extend_json": "{\"from\":{\"emoji_type\":1,\"from\":\"timer.publish\"},\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"},\"topic\":{\"is_attach_topic\":1}}",
        "extra": {
          "is_space_top": 0
        },
        "display": {
          "topic_info": {
            "topic_details": [
              {
                "topic_id": 2908447,
                "topic_name": "碧蓝航线",
                "is_activity": 0,
                "topic_link": ""
              },
              {
                "topic_id": 12637783,
                "topic_name": "CP26",
                "is_activity": 0,
                "topic_link": ""
              }
            ]
          },
          "bottom_info": {
            "bottom_details": [
              {
                "content": "碧蓝航线",
                "jump_url": "bilibili://game_center/detail?id=97&sourceFrom=179",
                "bottom_type": 2
              }
            ]
          },
          "relation": {
            "status": 1,
            "is_follow": 0,
            "is_followed": 0
          },
          "tags": [
            {
              "tag_type": 2,
              "sub_type": 2,
              "icon": "https://i0.hdslb.com/bfs/album/e8613d8debe7fd70737fc5ce59b543e89b0cce31.png",
              "text": "碧蓝航线",
              "link": "bilibili://game_center/detail?id=97&sourceFrom=179"
            }
          ]
        }
      },
      {
        "desc": {
          "uid": 233114659,
          "type": 4,
          "rid": 415569864353677300,
          "acl": 0,
          "view": 714558,
          "repost": 26,
          "comment": 1391,
          "like": 7306,
          "is_liked": 0,
          "dynamic_id": 415569864354856450,
          "timestamp": 1595595799,
          "pre_dy_id": 0,
          "orig_dy_id": 0,
          "orig_type": 0,
          "user_profile": {
            "info": {
              "uid": 233114659,
              "uname": "碧蓝航线",
              "face": "https://i0.hdslb.com/bfs/face/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg"
            },
            "card": {
              "official_verify": {
                "type": 1,
                "desc": "碧蓝航线官方账号"
              }
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1596470400000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": ""
              }
            },
            "pendant": {
              "pid": 1987,
              "name": "碧蓝航线2020",
              "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
              "expire": 0,
              "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
            },
            "decorate_card": {
              "mid": 233114659,
              "id": 1970,
              "card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "card_type": 2,
              "name": "碧蓝航线2020粉丝专属",
              "expire_time": 0,
              "card_type_name": "免费",
              "uid": 233114659,
              "item_id": 1970,
              "item_type": 3,
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1988?navhide=1&mid=233114659&from=dynamic",
              "fan": {
                "is_fan": 1,
                "number": 1,
                "color": "#498de1",
                "num_desc": "000001"
              },
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png"
            },
            "rank": "10000",
            "sign": "今天有没有被指挥官偷瞄呢(:3_ヽ)_",
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": "0"
            }
          },
          "uid_type": 1,
          "stype": 0,
          "r_type": 1,
          "inner_id": 0,
          "status": 1,
          "dynamic_id_str": "415569864354856431",
          "pre_dy_id_str": "0",
          "orig_dy_id_str": "0",
          "rid_str": "415569864353677316"
        },
        "card": "{ \"user\": { \"uid\": 233114659, \"uname\": \"碧蓝航线\", \"face\": \"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\" }, \"item\": { \"rp_id\": 415569864353677316, \"uid\": 233114659, \"content\": \"7月24日的异常问题补偿：荣誉之冠x500 已发放至邮箱，还请指挥官注意查收。给各位指挥官带来了不便非常抱歉。 \", \"ctrl\": \"\", \"orig_dy_id\": 0, \"pre_dy_id\": 0, \"timestamp\": 1595595799, \"reply\": 1391 } }",
        "extend_json": "{\"from\":{\"emoji_type\":1,\"verify\":{\"cc\":{\"nv\":1}}},\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"}}",
        "extra": {
          "is_space_top": 0
        },
        "display": {
          "relation": {
            "status": 1,
            "is_follow": 0,
            "is_followed": 0
          }
        }
      },
      {
        "desc": {
          "uid": 233114659,
          "type": 4,
          "rid": 415529929750718850,
          "acl": 1024,
          "view": 572481,
          "repost": 11,
          "comment": 1171,
          "like": 4391,
          "is_liked": 0,
          "dynamic_id": 415529929745511600,
          "timestamp": 1595586501,
          "pre_dy_id": 0,
          "orig_dy_id": 0,
          "orig_type": 0,
          "user_profile": {
            "info": {
              "uid": 233114659,
              "uname": "碧蓝航线",
              "face": "https://i0.hdslb.com/bfs/face/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg"
            },
            "card": {
              "official_verify": {
                "type": 1,
                "desc": "碧蓝航线官方账号"
              }
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1596470400000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": ""
              }
            },
            "pendant": {
              "pid": 1987,
              "name": "碧蓝航线2020",
              "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
              "expire": 0,
              "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
            },
            "decorate_card": {
              "mid": 233114659,
              "id": 1970,
              "card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "card_type": 2,
              "name": "碧蓝航线2020粉丝专属",
              "expire_time": 0,
              "card_type_name": "免费",
              "uid": 233114659,
              "item_id": 1970,
              "item_type": 3,
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1988?navhide=1&mid=233114659&from=dynamic",
              "fan": {
                "is_fan": 1,
                "number": 1,
                "color": "#498de1",
                "num_desc": "000001"
              },
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png"
            },
            "rank": "10000",
            "sign": "今天有没有被指挥官偷瞄呢(:3_ヽ)_",
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": "0"
            }
          },
          "uid_type": 1,
          "stype": 0,
          "r_type": 1,
          "inner_id": 0,
          "status": 1,
          "dynamic_id_str": "415529929745511625",
          "pre_dy_id_str": "0",
          "orig_dy_id_str": "0",
          "rid_str": "415529929750718876"
        },
        "card": "{ \"user\": { \"uid\": 233114659, \"uname\": \"碧蓝航线\", \"face\": \"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\" }, \"item\": { \"rp_id\": 415529929750718876, \"uid\": 233114659, \"content\": \"各位亲爱的指挥官：\\n       司令部已于18:20进行在线更新修复了以下的问题（不需要停服维护，重新进入游戏后进行更新）：\\n\\n『涉及港区』\\niOS全港区、安卓全港区\\n\\n『改建内容』\\n1.修复了「永夜幻光」部分关卡无法进入战斗的问题；\\n\\nFrom 司令部\\n在这里联系我们↓↓↓\\n客服QQ公众号：800864530\\n电话专线：400-178-2233\\n \", \"ctrl\": \"\", \"orig_dy_id\": 0, \"pre_dy_id\": 0, \"timestamp\": 1595586501, \"reply\": 1171 } }",
        "extend_json": "{\"from\":{\"emoji_type\":1,\"verify\":{\"cc\":{\"nv\":1},\"sw\":{\"vf\":1}}},\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"}}",
        "extra": {
          "is_space_top": 0
        },
        "display": {
          "relation": {
            "status": 1,
            "is_follow": 0,
            "is_followed": 0
          }
        }
      },
      {
        "desc": {
          "uid": 233114659,
          "type": 1,
          "rid": 415501183536545700,
          "acl": 0,
          "view": 552516,
          "repost": 18,
          "comment": 797,
          "like": 4632,
          "is_liked": 0,
          "dynamic_id": 415501183532328100,
          "timestamp": 1595579808,
          "pre_dy_id": 415493856322269400,
          "orig_dy_id": 415493856322269400,
          "orig_type": 4,
          "user_profile": {
            "info": {
              "uid": 233114659,
              "uname": "碧蓝航线",
              "face": "https://i0.hdslb.com/bfs/face/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg"
            },
            "card": {
              "official_verify": {
                "type": 1,
                "desc": "碧蓝航线官方账号"
              }
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1596470400000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": ""
              }
            },
            "pendant": {
              "pid": 1987,
              "name": "碧蓝航线2020",
              "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
              "expire": 0,
              "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
            },
            "decorate_card": {
              "mid": 233114659,
              "id": 1970,
              "card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "card_type": 2,
              "name": "碧蓝航线2020粉丝专属",
              "expire_time": 0,
              "card_type_name": "免费",
              "uid": 233114659,
              "item_id": 1970,
              "item_type": 3,
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1988?navhide=1&mid=233114659&from=dynamic",
              "fan": {
                "is_fan": 1,
                "number": 1,
                "color": "#498de1",
                "num_desc": "000001"
              },
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png"
            },
            "rank": "10000",
            "sign": "今天有没有被指挥官偷瞄呢(:3_ヽ)_",
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": "0"
            }
          },
          "uid_type": 1,
          "stype": 0,
          "r_type": 1,
          "inner_id": 0,
          "status": 1,
          "dynamic_id_str": "415501183532328150",
          "pre_dy_id_str": "415493856322269363",
          "orig_dy_id_str": "415493856322269363",
          "rid_str": "415501183536545731",
          "origin": {
            "uid": 233114659,
            "type": 4,
            "rid": 415493856322307100,
            "acl": 1024,
            "view": 1062745,
            "repost": 35,
            "comment": 904,
            "like": 4973,
            "is_liked": 0,
            "dynamic_id": 415493856322269400,
            "timestamp": 1595578102,
            "pre_dy_id": 0,
            "orig_dy_id": 0,
            "user_profile": {
              "info": {
                "uid": 233114659,
                "uname": "碧蓝航线",
                "face": "https://i0.hdslb.com/bfs/face/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg"
              },
              "card": {
                "official_verify": {
                  "type": 1,
                  "desc": "碧蓝航线官方账号"
                }
              },
              "vip": {
                "vipType": 1,
                "vipDueDate": 1596470400000,
                "dueRemark": "",
                "accessStatus": 0,
                "vipStatus": 1,
                "vipStatusWarn": "",
                "themeType": 0,
                "label": {
                  "path": ""
                }
              },
              "pendant": {
                "pid": 1987,
                "name": "碧蓝航线2020",
                "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
                "expire": 0,
                "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
              },
              "decorate_card": {
                "mid": 233114659,
                "id": 1970,
                "card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
                "card_type": 2,
                "name": "碧蓝航线2020粉丝专属",
                "expire_time": 0,
                "card_type_name": "免费",
                "uid": 233114659,
                "item_id": 1970,
                "item_type": 3,
                "big_card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
                "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1988?navhide=1&mid=233114659&from=dynamic",
                "fan": {
                  "is_fan": 1,
                  "number": 1,
                  "color": "#498de1",
                  "num_desc": "000001"
                },
                "image_enhance": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png"
              },
              "rank": "10000",
              "sign": "今天有没有被指挥官偷瞄呢(:3_ヽ)_",
              "level_info": {
                "current_level": 6,
                "current_min": 0,
                "current_exp": 0,
                "next_exp": "0"
              }
            },
            "uid_type": 1,
            "stype": 0,
            "r_type": 1,
            "inner_id": 0,
            "status": 1,
            "dynamic_id_str": "415493856322269363",
            "pre_dy_id_str": "0",
            "orig_dy_id_str": "0",
            "rid_str": "415493856322307056"
          }
        },
        "card": "{ \"user\": { \"uid\": 233114659, \"uname\": \"碧蓝航线\", \"face\": \"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\" }, \"item\": { \"rp_id\": 415501183536545731, \"uid\": 233114659, \"content\": \"遇到此问题的指挥官可以暂时通过切换编队进入作战，给指挥官们造成了不便非常抱歉o(╥﹏╥)o\", \"orig_dy_id\": 415493856322269363, \"pre_dy_id\": 415493856322269363, \"timestamp\": 1595579808, \"reply\": 797, \"orig_type\": 4 }, \"origin\": \"{ \\\"user\\\": { \\\"uid\\\": 233114659, \\\"uname\\\": \\\"碧蓝航线\\\", \\\"face\\\": \\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/face\\\\\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\\\" }, \\\"item\\\": { \\\"rp_id\\\": 415493856322307056, \\\"uid\\\": 233114659, \\\"content\\\": \\\"各位亲爱的指挥官：\\\\n      司令部收到反馈，目前已知存在「永夜幻光」B3、D3关卡无法进入战斗的问题，司令部正在积极处理中，会尽快进行修复：\\\\n       在游戏过程中如果遇到任何问题可以通过以下方式联系司令部，感谢指挥官们一直以来的支持。\\\\n\\\\nFrom 司令部\\\\n客服QQ公众号：800864530\\\\n电话专线：400-178-223 \\\", \\\"ctrl\\\": \\\"\\\", \\\"orig_dy_id\\\": 0, \\\"pre_dy_id\\\": 0, \\\"timestamp\\\": 1595578102, \\\"reply\\\": 904 } }\", \"origin_extend_json\": \"{\\\"from\\\":{\\\"emoji_type\\\":1,\\\"verify\\\":{\\\"cc\\\":{\\\"nv\\\":1},\\\"sw\\\":{\\\"vf\\\":1}}},\\\"like_icon\\\":{\\\"action\\\":\\\"\\\",\\\"action_url\\\":\\\"\\\",\\\"end\\\":\\\"\\\",\\\"end_url\\\":\\\"\\\",\\\"start\\\":\\\"\\\",\\\"start_url\\\":\\\"\\\"}}\", \"origin_user\": { \"info\": { \"uid\": 233114659, \"uname\": \"碧蓝航线\", \"face\": \"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\" }, \"card\": { \"official_verify\": { \"type\": 1, \"desc\": \"碧蓝航线官方账号\" } }, \"vip\": { \"vipType\": 1, \"vipDueDate\": 1596470400000, \"dueRemark\": \"\", \"accessStatus\": 0, \"vipStatus\": 1, \"vipStatusWarn\": \"\", \"themeType\": 0, \"label\": { \"path\": \"\" } }, \"pendant\": { \"pid\": 1987, \"name\": \"碧蓝航线2020\", \"image\": \"https:\\/\\/i1.hdslb.com\\/bfs\\/garb\\/item\\/fe1267f786bf69f1471aff715f8d38ec0e486df5.png\", \"expire\": 0, \"image_enhance\": \"https:\\/\\/i1.hdslb.com\\/bfs\\/garb\\/item\\/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp\" }, \"rank\": \"10000\", \"sign\": \"今天有没有被指挥官偷瞄呢(:3_ヽ)_\", \"level_info\": { \"current_level\": 6, \"current_min\": 0, \"current_exp\": 0, \"next_exp\": \"0\" } } }",
        "extend_json": "{\"from\":{\"emoji_type\":1,\"verify\":{\"cc\":{\"nv\":1}}},\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"}}",
        "extra": {
          "is_space_top": 0
        },
        "display": {
          "origin": {
            "relation": {
              "status": 1,
              "is_follow": 0,
              "is_followed": 0
            }
          },
          "relation": {
            "status": 1,
            "is_follow": 0,
            "is_followed": 0
          }
        }
      },
      {
        "desc": {
          "uid": 233114659,
          "type": 4,
          "rid": 415493856322307100,
          "acl": 1024,
          "view": 1062745,
          "repost": 35,
          "comment": 904,
          "like": 4973,
          "is_liked": 0,
          "dynamic_id": 415493856322269400,
          "timestamp": 1595578102,
          "pre_dy_id": 0,
          "orig_dy_id": 0,
          "orig_type": 0,
          "user_profile": {
            "info": {
              "uid": 233114659,
              "uname": "碧蓝航线",
              "face": "https://i0.hdslb.com/bfs/face/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg"
            },
            "card": {
              "official_verify": {
                "type": 1,
                "desc": "碧蓝航线官方账号"
              }
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1596470400000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": ""
              }
            },
            "pendant": {
              "pid": 1987,
              "name": "碧蓝航线2020",
              "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
              "expire": 0,
              "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
            },
            "decorate_card": {
              "mid": 233114659,
              "id": 1970,
              "card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "card_type": 2,
              "name": "碧蓝航线2020粉丝专属",
              "expire_time": 0,
              "card_type_name": "免费",
              "uid": 233114659,
              "item_id": 1970,
              "item_type": 3,
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png",
              "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1988?navhide=1&mid=233114659&from=dynamic",
              "fan": {
                "is_fan": 1,
                "number": 1,
                "color": "#498de1",
                "num_desc": "000001"
              },
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/87c7cab0a624e7dd08a544ba7558aaefcab0e621.png"
            },
            "rank": "10000",
            "sign": "今天有没有被指挥官偷瞄呢(:3_ヽ)_",
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": "0"
            }
          },
          "uid_type": 1,
          "stype": 0,
          "r_type": 1,
          "inner_id": 0,
          "status": 1,
          "dynamic_id_str": "415493856322269363",
          "pre_dy_id_str": "0",
          "orig_dy_id_str": "0",
          "rid_str": "415493856322307056"
        },
        "card": "{ \"user\": { \"uid\": 233114659, \"uname\": \"碧蓝航线\", \"face\": \"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/6392ff1bcdddeba4429aed0f67125b2fa402936d.jpg\" }, \"item\": { \"rp_id\": 415493856322307056, \"uid\": 233114659, \"content\": \"各位亲爱的指挥官：\\n      司令部收到反馈，目前已知存在「永夜幻光」B3、D3关卡无法进入战斗的问题，司令部正在积极处理中，会尽快进行修复：\\n       在游戏过程中如果遇到任何问题可以通过以下方式联系司令部，感谢指挥官们一直以来的支持。\\n\\nFrom 司令部\\n客服QQ公众号：800864530\\n电话专线：400-178-223 \", \"ctrl\": \"\", \"orig_dy_id\": 0, \"pre_dy_id\": 0, \"timestamp\": 1595578102, \"reply\": 904 } }",
        "extend_json": "{\"from\":{\"emoji_type\":1,\"verify\":{\"cc\":{\"nv\":1},\"sw\":{\"vf\":1}}},\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"}}",
        "extra": {
          "is_space_top": 0
        },
        "display": {
          "relation": {
            "status": 1,
            "is_follow": 0,
            "is_followed": 0
          }
        }
      }
    ],
    "next_offset": 415493856322269400,
    "_gt_": 0
  }
}
```



