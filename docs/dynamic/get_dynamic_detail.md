# 特定动态卡片信息

## 获取特定动态卡片信息

> https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/get_dynamic_detail

*请求方法: GET*

**url参数：**

| 参数名 | 类型 | 内容       | 必要性 | 备注     |
| ------------ | ---- | ---------- | ------ | -------- |
| dynamic_id   | id  | 动态id | 必要 | |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注    |
| ------- | ---- | -------- | ------- |
| code    | number | 返回值 | 0: 成功<br />4128001: 请求数据发生错误，请刷新或稍后重试 |
| data    | object | 信息本体 | 失败时为 `null` |
| message | string | 错误信息 | 成功时为 `0` |
| ttl     | number | `1` | |

`data`对象：

| 字段        | 类型  | 内容       | 备注         |
| ----------- | ----- | ---------- | ------------ |
| card       | object   | 动态卡片内容 | 当动态不存在/删除时不返回此项  |

`data`中的`card`对象：

| 字段   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| activity_infos | obj | 该条动态参与的活动 |当此条动态没有参与任何活动时不显示此项 |
| card    | str  | 动态详细信息   | 会跟随此动态类型不同发生一定的变化，评论数、点赞数等相关信息参考`desc`字段, 详细可见 [动态详细信息字段](card_info.md)  |
| desc    | obj  | 动态相关信息 |  会跟随此动态类型不同发生一定的变化，详细信息（例如动态描述等）参考`card`字段     |
| display   | obj  | 动态部分的可操作项            | 会随着动态类型发生变化，主要用于显示动态   |
| extend_json | str | 动态扩展项 | 会随着动态类型发生变化 |

**示例：**

获取`哔哩哔哩弹幕网`的动态id为`507420325550127049`动态

```shell
curl -G 'https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/get_dynamic_detail' \
--data-urlencode 'dynamic_id=507420325550127049'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "card": {
      "desc": {
        "uid": 8047632,
        "type": 8,
        "rid": 204774719,
        "acl": 0,
        "view": 0,
        "repost": 0,
        "comment": 0,
        "like": 0,
        "is_liked": 0,
        "dynamic_id": 507420325550127040,
        "timestamp": 1616981401,
        "pre_dy_id": 0,
        "orig_dy_id": 0,
        "orig_type": 0,
        "user_profile": {
          "info": {
            "uid": 8047632,
            "uname": "哔哩哔哩弹幕网",
            "face": "https://i0.hdslb.com/bfs/face/0c84b9f4ad546d3f20324809d45fc439a2a8ddab.jpg"
          },
          "card": {
            "official_verify": {
              "type": -1
            }
          },
          "vip": {
            "vipType": 2,
            "vipDueDate": 1924963200000,
            "dueRemark": "",
            "accessStatus": 0,
            "vipStatus": 1,
            "vipStatusWarn": "",
            "themeType": 0,
            "label": {
              "path": "http://i0.hdslb.com/bfs/vip/label_annual.png",
              "text": "十年大会员",
              "label_theme": "ten_annual_vip",
              "text_color": "#FFFFFF",
              "bg_style": 1,
              "bg_color": "#FB7299",
              "border_color": ""
            },
            "avatar_subscript": 1,
            "nickname_color": "#FB7299",
            "role": 7,
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
          "sign": "哔哩哔哩 干杯  ( ゜- ゜)つロ",
          "level_info": {
            "current_level": 6,
            "current_min": 0,
            "current_exp": 0,
            "next_exp": ""
          }
        },
        "spec_type": 0,
        "uid_type": 1,
        "stype": 0,
        "r_type": 1,
        "inner_id": 0,
        "status": 1,
        "dynamic_id_str": "507420325550127049",
        "pre_dy_id_str": "0",
        "orig_dy_id_str": "0",
        "rid_str": "204774719",
        "origin": null,
        "bvid": "BV1Dh411S7sS",
        "previous": null
      },
      "card": "{\"aid\":204774719,\"cid\":316514988,\"ctime\":1616981401,\"desc\":\"2021年3月29日9:30（北京时间），B站在中国香港港交所成功挂牌二次上市。欢迎来到bilibili这座乐园，和超过2亿中国年轻人一起表达自我、拥抱世界。\",\"dimension\":{\"height\":1080,\"rotate\":0,\"width\":1920},\"duration\":290,\"dynamic\":\"\",\"first_frame\":\"\",\"jump_url\":\"bilibili://video/204774719/?page=1\\u0026player_width=1920\\u0026player_height=1080\\u0026player_rotate=0\",\"owner\":{\"face\":\"https://i0.hdslb.com/bfs/face/0c84b9f4ad546d3f20324809d45fc439a2a8ddab.jpg\",\"mid\":8047632,\"name\":\"哔哩哔哩弹幕网\"},\"pic\":\"http://i0.hdslb.com/bfs/archive/bcbcac6560268ef9cbe59fbf759ac28adf5e0432.jpg\",\"pubdate\":1616981400,\"short_link_v2\":\"\",\"stat\":{\"aid\":204774719,\"coin\":9016,\"danmaku\":742,\"dislike\":0,\"favorite\":5463,\"like\":32802,\"reply\":1603,\"share\":2517,\"view\":278278},\"state\":0,\"tid\":207,\"title\":\"欢迎来到2亿年轻人的乐园——bilibili 回香港上市啦！\",\"tname\":\"财经商业\",\"videos\":1}",
      "extend_json": "{\"from\":{\"from\":\"\",\"emoji_type\":1},\"ctrl\":null,\"lott\":null}",
      "display": {
        "origin": null,
        "usr_action_txt": "投稿了视频",
        "relation": null,
        "live_info": null,
        "emoji_info": null,
        "highlight": null
      }
    }
  }
}
```

</details>

## 最近更新UP主列表

> https://api.bilibili.com/x/polymer/web-dynamic/v1/portal

*请求方式：GET*

*认证方式：Cookie(SESSDATA) 和 Access_Token*

**json回复：**

*根对象*

| 字段      | 类型  | 内容   | 备注   |
| ------- | --- | ---- | ---- |
| code    | num | 返回值  | 0：成功 |
| data    | obj | 信息本体 |      |
| message | str | 错误信息 | 默认为0 |
| ttl     | int | 1    | 默认为1 |

`data`对象

| 字段         | 类型    | 内容         | 备注  |
| ---------- | ----- | ---------- | --- |
| live_users | null  | 不明         |     |
| my_info    | obj   | 个人关注的一些信息  |     |
| up_list    | array | 最近更新的up主列表 |     |

`my_info`对象

| 字段         | 类型  | 内容          | 备注   |
| ---------- | --- | ----------- | ---- |
| dyns       | int | 个人动态        |      |
| face       | str | 头像          | 图像地址 |
| face_nft   | int | 不明          |      |
| follower   | int | 粉丝数量        |      |
| following  | int | 我的关注        |      |
| level_info | obj | 本人等级内容      |      |
| mid        | int | 账户mid       |      |
| name       | str | 账户名称        |      |
| offcial    | obj | 认证信息        |      |
| space_bg   | str | 账户个人中心的背景横幅 | 图像地址 |
| vip        | obj | vip信息       |      |

`my_info`中的`level_info`对象：

| 字段            | 类型  | 内容   | 备注         |
| ------------- | --- | ---- | ---------- |
| current_level | num | 当前等级 | 0-6级       |
| current_min   | num | 0    |      |
| current_exp   | num | 0    |  |
| next_exp      | num | 0    |  |

`my_info`中的`Official`对象：

| 字段    | 类型  | 内容   | 备注                                    |
| ----- | --- | ---- | ------------------------------------- |
| role  | num | 认证类型 | 见[用户认证类型一览](../user/official_role.md) |
| title | str | 认证信息 | 无为空                                   |
| desc  | str | 认证备注 | 无为空                                   |
| type  | num | 是否认证 | -1：无<br />0：认证                        |

`my_info`中的`vip`对象：

| 字段                   | 类型  | 内容        | 备注                                           |
| -------------------- | --- | --------- | -------------------------------------------- |
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
| ------------------------- | ---- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
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
| img_label_uri_hant_static | str  | 大会员牌子图片  | 繁体版                                                                                                                          |

`data`中的`up_list`数组对象

| 字段                | 属性   | 内容        | 备注  |
| ----------------- | ---- | --------- | --- |
| face              | str  | UP主头像     |     |
| has_update        | bool | 最近更新是否更新？ |     |
| is_reserve_recall | bool | 不明        |     |
| mid               | int  | UP主mid    |     |
| uname             | str  | up主昵称     |     |

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "live_users": null,
    "my_info": {
      "dyns": 67,
      "face": "http://i0.hdslb.com/bfs/face/44253f4e588d72d4c10dde495752142b588455af.jpg",
      "face_nft": 0,
      "follower": 15,
      "following": 77,
      "level_info": {
        "current_exp": 23846,
        "current_level": 5,
        "current_min": 10800,
        "level_up": -62135596800,
        "next_exp": 28800
      },
      "mid": 108534711,
      "name": "CiaoMyTime",
      "official": {
        "desc": "",
        "role": 0,
        "title": "",
        "type": -1
      },
      "space_bg": "http://i1.hdslb.com/bfs/space/aea2dd7b8894ce31d578d4fad6a7188c7b49cb2f.jpg",
      "vip": {
        "avatar_subscript": 1,
        "avatar_subscript_url": "",
        "due_date": 1670256000000,
        "label": {
          "bg_color": "#FB7299",
          "bg_style": 1,
          "border_color": "",
          "img_label_uri_hans": "",
          "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/3788b674c69072f1ee252b79a31ecc8c43af3039.png",
          "img_label_uri_hant": "",
          "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/jwXBWRVwa5.png",
          "label_theme": "vip",
          "path": "",
          "text": "大会员",
          "text_color": "#FFFFFF",
          "use_img_label": true
        },
        "nickname_color": "",
        "role": 1,
        "status": 1,
        "theme_type": 0,
        "tv_vip_pay_type": 0,
        "tv_vip_status": 0,
        "type": 1,
        "vip_pay_type": 0
      }
    },
    "up_list": [
      {
        "face": "https://i2.hdslb.com/bfs/face/09a47992c9cb08f81effede594ddf014f83047fe.jpg",
        "has_update": true,
        "is_reserve_recall": false,
        "mid": 15135791,
        "uname": "东北大学张引"
      },
      {
        "face": "https://i1.hdslb.com/bfs/face/a83b296101bb36a6f1dacb8fdfa74a57a2c29445.jpg",
        "has_update": true,
        "is_reserve_recall": false,
        "mid": 1856528671,
        "uname": "陆鳐LuLu"
      },
      {
        "face": "https://i0.hdslb.com/bfs/face/60ec600cc9d84c74c8220ab41ce49bacfdc0895c.jpg",
        "has_update": true,
        "is_reserve_recall": false,
        "mid": 39180492,
        "uname": "蒸気火鸡"
      },
      {
        "face": "https://i0.hdslb.com/bfs/face/986a9f29848d17b39a99e41557d56dcd1091a3a9.jpg",
        "has_update": true,
        "is_reserve_recall": false,
        "mid": 2142762,
        "uname": "老戴在此"
      },
      {
        "face": "https://i1.hdslb.com/bfs/face/475f3c05ea494a26f5dd91b277f48b136ae63021.jpg",
        "has_update": true,
        "is_reserve_recall": false,
        "mid": 431313625,
        "uname": "小蓝和他的朋友日常号"
      },
      {
        "face": "https://i1.hdslb.com/bfs/face/bafb36d5726f8062e578474095abb0e906fec163.jpg",
        "has_update": true,
        "is_reserve_recall": false,
        "mid": 233114659,
        "uname": "碧蓝航线"
      },
      {
        "face": "https://i0.hdslb.com/bfs/face/39d23f3c5dd2c96fc35db5c2a98f4a8ff73a2d46.jpg",
        "has_update": true,
        "is_reserve_recall": false,
        "mid": 27534330,
        "uname": "崩坏3第一偶像爱酱"
      },
      {
        "face": "http://i2.hdslb.com/bfs/face/f119348814f30c6bbbcc60bd63c12b8215d19d2f.jpg",
        "has_update": true,
        "is_reserve_recall": false,
        "mid": 524704055,
        "uname": "大庆赶海"
      },
      {
        "face": "https://i0.hdslb.com/bfs/face/c4340d477356ba108098ba9a566e7ce4a54e0936.jpg",
        "has_update": true,
        "is_reserve_recall": false,
        "mid": 194326389,
        "uname": "兮子cc"
      },
      {
        "face": "https://i2.hdslb.com/bfs/face/0455b74f73d6a83eef2d6dfbdb4ae2beda42a3ce.jpg",
        "has_update": true,
        "is_reserve_recall": false,
        "mid": 476833439,
        "uname": "盾之勇者成名录"
      },
      {
        "face": "https://i0.hdslb.com/bfs/face/7c6cdd77937d4bbd2171241fe530e18c0c5bc58e.jpg",
        "has_update": true,
        "is_reserve_recall": false,
        "mid": 492840942,
        "uname": "云视听小电视-TV"
      },
      {
        "face": "https://i0.hdslb.com/bfs/face/b14881845b777d925876f24cb46b1dc1ad5a0e27.jpg",
        "has_update": true,
        "is_reserve_recall": false,
        "mid": 1636034895,
        "uname": "绝区零"
      },
      {
        "face": "http://i1.hdslb.com/bfs/face/3b933fe3c47976dd29f30e3a4f7f2bdfd99e8b08.jpg",
        "has_update": true,
        "is_reserve_recall": false,
        "mid": 603028270,
        "uname": "乃木坂46官方"
      },
      {
        "face": "https://i2.hdslb.com/bfs/face/76ec72b2a530f2f24209c98b5690ef7b536040cf.jpg",
        "has_update": true,
        "is_reserve_recall": false,
        "mid": 5992670,
        "uname": "云之幻"
      },
      {
        "face": "https://i1.hdslb.com/bfs/face/9ca9ea42fa75d9a651b354a95e8e39f48d8c30d2.jpg",
        "has_update": true,
        "is_reserve_recall": false,
        "mid": 299359111,
        "uname": "月圆之夜"
      },
      {
        "face": "https://i1.hdslb.com/bfs/face/c8c0adce728125167fe44371d451b3dc19a84506.jpg",
        "has_update": false,
        "is_reserve_recall": false,
        "mid": 79983517,
        "uname": "一唐老狮一"
      },
      {
        "face": "https://i0.hdslb.com/bfs/face/68b4b212d9738c40d8a6a77beb65a6dd4415f81b.jpg",
        "has_update": false,
        "is_reserve_recall": false,
        "mid": 1861940979,
        "uname": "保卫萝卜"
      },
      {
        "face": "https://i2.hdslb.com/bfs/face/85bab2a17646ccf442d28549e7216fd65c6adeb7.jpg",
        "has_update": false,
        "is_reserve_recall": false,
        "mid": 2162,
        "uname": "GPBeta"
      },
      {
        "face": "https://i1.hdslb.com/bfs/face/7a41310afc08381ad0451bee8ea07f15fcc411bd.jpg",
        "has_update": false,
        "is_reserve_recall": false,
        "mid": 508963009,
        "uname": "HiiroVTuber"
      },
      {
        "face": "https://i1.hdslb.com/bfs/face/b085d34fd9d2cd44641ab648cc96e7a3068eb811.jpg",
        "has_update": false,
        "is_reserve_recall": false,
        "mid": 396848107,
        "uname": "不愧是姐姐大人"
      },
      {
        "face": "https://i0.hdslb.com/bfs/face/3f1496f48a5eb840a974fef0fd7db7a3f225fbe7.jpg",
        "has_update": false,
        "is_reserve_recall": false,
        "mid": 80304,
        "uname": "亚食人"
      },
      {
        "face": "https://i2.hdslb.com/bfs/face/a7716fec14658ef7365b538fdce0d86eb6123ed4.jpg",
        "has_update": false,
        "is_reserve_recall": false,
        "mid": 401742377,
        "uname": "原神"
      },
      {
        "face": "https://i0.hdslb.com/bfs/face/81d5201d6095e3802f14094a6906d1a114bc74c7.jpg",
        "has_update": false,
        "is_reserve_recall": false,
        "mid": 11131476,
        "uname": "绫人太太啊"
      },
      {
        "face": "https://i0.hdslb.com/bfs/face/7d72e58d0ad1b401e4c59960c4b1795efbc57c3a.jpg",
        "has_update": false,
        "is_reserve_recall": false,
        "mid": 409524162,
        "uname": "一线码农聊技术"
      },
      {
        "face": "https://i0.hdslb.com/bfs/face/5634900a3167310fcd0c6b1102ffc308c68aedd1.jpg",
        "has_update": false,
        "is_reserve_recall": false,
        "mid": 260054391,
        "uname": "CHeems的日常"
      },
      {
        "face": "https://i2.hdslb.com/bfs/face/81a4c852925b873f42c4971c836a67ea9dd2ef41.jpg",
        "has_update": false,
        "is_reserve_recall": false,
        "mid": 361469957,
        "uname": "软件工艺师"
      },
      {
        "face": "https://i2.hdslb.com/bfs/face/99e9eb37657f67f547b546b72592d70ab8ce1a4b.jpg",
        "has_update": false,
        "is_reserve_recall": false,
        "mid": 41059757,
        "uname": "刻刻帝TokisakiKuru"
      },
      {
        "face": "https://i1.hdslb.com/bfs/face/affbd5780e44ec1340f60c5283e81cbee2d9a21a.jpg",
        "has_update": false,
        "is_reserve_recall": false,
        "mid": 156785512,
        "uname": "Swety_Core"
      },
      {
        "face": "http://i0.hdslb.com/bfs/face/f576c8bd9eb4ec7f7776880581bea2d6c53d1b65.jpg",
        "has_update": false,
        "is_reserve_recall": false,
        "mid": 298683153,
        "uname": "猫和老鼠官方手游"
      },
      {
        "face": "https://i1.hdslb.com/bfs/face/5161d6bd003c24065c0d0ab2ae2ce7f37f0f607b.jpg",
        "has_update": false,
        "is_reserve_recall": false,
        "mid": 159440647,
        "uname": "Uki----"
      }
    ]
  }
}
```

</details>
