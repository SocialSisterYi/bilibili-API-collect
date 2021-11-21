# 获取动态更新信息

> https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_new

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名 | 类型 | 内容       | 必要性 | 备注     |
| ------------ | ---- | ---------- | ------ | -------- |
| uid   | id  | 用户id | 非必要 | |
| type_list  | str | 要返回的动态类型 | 必要 | | 

**type_list：**
| 值 | 类型 |
| --| -- |
| 8 | 视频动态 |
| 512 | 番剧 |
| 4097 | PGC番剧 |
| 4098 | 电影 |
| 4099 | 电视剧 |
| 4100 | 国创动漫 |
| 4101 | 纪录片 |

请求多个更新时，用逗号分隔。

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注    |
| ------- | ---- | -------- | ------- |
| code    | num  | 返回值   | 0：成功 |
| data    | obj  | 信息本体 |         |
| message | str  | 错误信息 | 默认为空 |
| msg     | num  | 空       |         |

`data`对象：

| 字段        | 类型  | 内容       | 备注         |
| ----------- | ----- | ---------- | ------------ |
| attentions  | obj   | 当前用户关注信息 | |
| cards       | array   | 动态卡片内容 | 当动态不存在/删除时不返回此项  |
| exist_gap       | num   |   1 | 作用尚不明确 |
| history_offset | num   | 当前返回动态列表中最旧的动态ID   |   |
| max_dynamic_id | num   | 当前返回动态列表中最新的动态ID   |   |
| new_num       | num   |   0 | 作用尚不明确 |
| open_rcmd       | num   |   1 | 是否开启推荐 |
| update_num       | num   |   0 | 作用尚不明确 |
| \_gt\_       | num   |   0 | 作用尚不明确 |

`data`中的`attentions`对象：
| 字段        | 类型  | 内容       | 备注         |
| ----------- | ----- | ---------- | ------------ |
| bangumis  | array   | 当前用户关注的所有番剧ID | | 
| uids       | array   | 当前用户关注的所有用户ID |   |

`cards`中的对象：
| 字段        | 类型  | 内容       | 备注         |
| ----------- | ----- | ---------- | ------------ |
| card  | str(str格式的obj)   | 该动态的卡片信息 | | 
| desc  | obj   | 动态相关信息 |   |
| display | obj | 动态显示的相关信息 |   |
| extend_json | str(str格式的obj) | 动态扩展项 | 会随着动态类型发生变化 |

**示例：**

获取用户uid为xxx的各类视频更新动态

```shell
curl -G 'https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_new' \
--data-urlencode 'uid=xxx&type_list=8,512,4097,4098,4099,4100,4101'
```

<details>
<summary>查看响应示例</summary>

```json
{
  "code": 0,
  "msg": "",
  "message": "",
  "data": {
    "new_num": 0,
    "exist_gap": 1,
    "update_num": 0,
    "open_rcmd": 1,
    "cards": [
      {
        "desc": {
          "uid": 3766866,
          "type": 8,
          "rid": 891765024,
          "acl": 0,
          "view": 226428,
          "repost": 11,
          "like": 2270,
          "is_liked": 0,
          "dynamic_id": 595539001333805182,
          "timestamp": 1637498129,
          "pre_dy_id": 0,
          "orig_dy_id": 0,
          "orig_type": 0,
          "user_profile": {
            "info": {
              "uid": 3766866,
              "uname": "科技美学",
              "face": "https://i0.hdslb.com/bfs/face/790409b99e6f814024f62a3eef41a58bf7361e65.jpg"
            },
            "card": {
              "official_verify": {
                "type": 0,
                "desc": "bilibili 2020百大UP主、知名UP主"
              }
            },
            "vip": {
              "vipType": 2,
              "vipDueDate": 1657728000000,
              "vipStatus": 1,
              "themeType": 0,
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
              "avatar_subscript_url": "https://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png"
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
            "sign": "微博、微信 @科技美学，每天都会来带最新的数码产品资讯及测评！不定期抽奖送福利，快来关注参加吧！",
            "level_info": {
              "current_level": 6
            }
          },
          "uid_type": 1,
          "stype": 0,
          "r_type": 1,
          "inner_id": 0,
          "status": 1,
          "dynamic_id_str": "595539001333805182",
          "pre_dy_id_str": "0",
          "orig_dy_id_str": "0",
          "rid_str": "891765024",
          "bvid": "BV1dP4y1573H"
        },
        "card": "{\"aid\":891765024,\"attribute\":0,\"cid\":446516713,\"copyright\":1,\"ctime\":1637498129,\"desc\":\"索尼手机Xperia PRO-I 上手体验｜1英寸CMOS打造专业微单手机\",\"dimension\":{\"height\":2048,\"rotate\":0,\"width\":4096},\"duration\":703,\"dynamic\":\"#索尼#手机Xperia PRO-I 上手体验｜1英寸CMOS打造专业微单手机\",\"first_frame\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/storyff\\/n211121qn1ddugnfqlevwzhmg0ps8bri_firsti.jpg\",\"jump_url\":\"bilibili:\\/\\/video\\/891765024\\/?page=1&player_preload=null&player_width=4096&player_height=2048&player_rotate=0\",\"owner\":{\"face\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/790409b99e6f814024f62a3eef41a58bf7361e65.jpg\",\"mid\":3766866,\"name\":\"科技美学\"},\"pic\":\"https:\\/\\/i1.hdslb.com\\/bfs\\/archive\\/304bbe88b95ac7f02dd24c063a6b0ba20fd18958.jpg\",\"player_info\":null,\"pubdate\":1637498129,\"rights\":{\"autoplay\":1,\"bp\":0,\"download\":0,\"elec\":0,\"hd5\":0,\"is_cooperation\":0,\"movie\":0,\"no_background\":0,\"no_reprint\":1,\"pay\":0,\"ugc_pay\":0,\"ugc_pay_preview\":0},\"short_link\":\"https:\\/\\/b23.tv\\/BV1dP4y1573H\",\"short_link_v2\":\"https:\\/\\/b23.tv\\/BV1dP4y1573H\",\"stat\":{\"aid\":891765024,\"coin\":165,\"danmaku\":406,\"dislike\":0,\"favorite\":160,\"his_rank\":0,\"like\":2270,\"now_rank\":0,\"reply\":217,\"share\":160,\"view\":24230},\"state\":0,\"tid\":95,\"title\":\"索尼手机Xperia PRO-I 上手体验｜1英寸CMOS打造专业微单手机\",\"tname\":\"数码\",\"videos\":1}",
        "extend_json": "{\"\":{\"ogv\":{\"ogv_id\":0}},\"dispute\":{\"content\":\"\"},\"from\":{\"from\":\"\",\"verify\":{}},\"like_icon\":{\"action\":\"\",\"action_url\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/garb\\/item\\/f87dc6201be1c17caaac15103e3455c45ebbefd5.bin\",\"end\":\"\",\"end_url\":\"\",\"like_icon_id\":6209,\"start\":\"\",\"start_url\":\"\"},\"topic\":{\"is_attach_topic\":1}}",
        "display": {
          "topic_info": {
            "topic_details": [
              {
                "topic_id": 10726,
                "topic_name": "索尼",
                "is_activity": 0,
                "topic_link": "https://search.bilibili.com/all?keyword=%E7%B4%A2%E5%B0%BC"
              },
              {
                "topic_id": 72003,
                "topic_name": "测评",
                "is_activity": 0,
                "topic_link": "https://search.bilibili.com/all?keyword=%E6%B5%8B%E8%AF%84"
              },
              {
                "topic_id": 43976,
                "topic_name": "SONY",
                "is_activity": 0,
                "topic_link": "https://search.bilibili.com/all?keyword=SONY"
              },
              {
                "topic_id": 16906,
                "topic_name": "数码",
                "is_activity": 0,
                "topic_link": "https://search.bilibili.com/all?keyword=%E6%95%B0%E7%A0%81"
              },
              {
                "topic_id": 22359094,
                "topic_name": "Xperia PRO-I",
                "is_activity": 0,
                "topic_link": "https://search.bilibili.com/all?keyword=Xperia+PRO-I"
              },
              {
                "topic_id": 558376,
                "topic_name": "索尼大法",
                "is_activity": 0,
                "topic_link": "https://search.bilibili.com/all?keyword=%E7%B4%A2%E5%B0%BC%E5%A4%A7%E6%B3%95"
              }
            ]
          },
          "usr_action_txt": "投稿了视频",
          "relation": {
            "status": 2,
            "is_follow": 1,
            "is_followed": 0
          },
          "comment_info": {
            "comments": [
              {
                "uid": 286071985,
                "name": "粼万诗",
                "content": "从相机角度讲，它还挺便宜的[doge]"
              }
            ],
            "emojis": [
              {
                "emoji_name": "[doge]",
                "url": "https://i0.hdslb.com/bfs/emote/3087d273a78ccaff4bb1e9972e2ba2a7583c9f11.png",
                "meta": {
                  "size": 1
                }
              }
            ],
            "comment_ids": "5808369768"
          },
          "show_tip": {
            "del_tip": "要删除动态吗？"
          },
          "cover_play_icon_url": "https://i0.hdslb.com/bfs/album/2269afa7897830b397797ebe5f032b899b405c67.png"
        }
      },
      ...
    ],
    "attentions": {
      "uids": [
        ...
      ],
      "bangumis": [
        ...
      ]
    },
    "max_dynamic_id": 595539001333805182,
    "history_offset": 595439770407743267,
    "_gt_": 0
  }
}
```

</details>

