# 卡片信息

## 获取专栏显示卡片信息

> https://api.bilibili.com/x/article/cards

*请求方法: GET*

鉴权方式: 请求头 `Referer` 在 `.bilibili.com` 下

**URL 参数:**

| 参数  | 类型   | 内容 | 必要性 | 备注 |
| ----- | ------ | ---- | ------ | ---- |
| ids   | string | 被查询的 id 列表 | 不必要 | 以 `,` 分隔, 可填视频完整 AV/BV 号, 专栏 CV 号, 直播间长短 lv 号 (可能会合并同类项) |
| web_location | string | `333.1305` | 不必要 | |
| w_rid | string | WBI 签名 | 不必要 | 参见 [WBI 签名](../misc/sign/wbi.md) |
| wts   | number | UNIX 秒级时间戳 | 不必要 | 参见 [WBI 签名](../misc/sign/wbi.md) |

**JSON 回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| code | number | 返回值 | 0: 成功 |
| data | object | 数据本体 |  |
| message | string | 错误信息 | 成功时为 `0` |
| ttl | number | `1` |  |

`data` 对象:

以请求时 `ids` 字段中每一项为键, 其内容对象为值的表, 注意可能会合并同类项

`data` 中代表视频的对象 (`avxxx` 或 `Bvxxxxxxxxxx`):

详细可参见 [视频基本信息] (../video/info.md)

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| aid | number |  |  |
| bvid | string |  |  |
| cid | number |  |  |
| copyright | number |  |  |
| cover43 | string |  |  |
| ctime | number |  |  |
| desc | string |  |  |
| dimension | object |  |  |
| duration | number |  |  |
| dynamic | string |  |  |
| owner | object |  |  |
| pic | string |  |  |
| pubdate | number |  |  |
| rights | object |  |  |
| short_link_v2 | string |  |  |
| stat | object |  |  |
| state | number |  |  |
| tid | number |  |  |
| title | string |  |  |
| tname | string |  |  |
| videos | number |  |  |
| vt_switch | boolean |  |  |

`data` 中代表专栏的对象 (`cvxxx`):

详细可参见 [专栏内容](view.md)

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| act_id | number |  |  |
| apply_time | string |  |  |
| attributes | number |  |  |
| authenMark | null |  |  |
| author | object |  |  |
| banner_url | string |  |  |
| categories | object[] |  |  |
| category | object |  |  |
| check_state | number |  |  |
| check_time | string |  |  |
| content_pic_list | null |  |  |
| cover_avid | number |  |  |
| ctime | number |  |  |
| dispute | null |  |  |
| dynamic | string |  |  |
| id | number |  |  |
| image_urls | string[] |  |  |
| is_like | boolean |  |  |
| list | object |  |  |
| media | object |  |  |
| mtime | number |  |  |
| origin_image_urls | string[] |  |  |
| origin_template_id | number |  |  |
| original | number |  |  |
| private_pub | number |  |  |
| publish_time | number |  |  |
| reprint | number |  |  |
| state | number |  |  |
| stats | object |  |  |
| summary | string |  |  |
| template_id | number |  |  |
| title | string |  |  |
| top_video_info | null |  |  |
| type | number |  |  |
| words | number |  |  |

`data` 中代表直播间的对象:

详细可参见 [直播间基本信息](../live/info.md)

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| area_v2_name | string | 分区完整名称 |  |
| cover | string | 直播封面 |  |
| face | string | 主播头像 |  |
| live_status | number | 直播状态 |  |
| online | number | 在线人数 |  |
| pendent_ru | string |  |  |
| pendent_ru_color | string |  |  |
| pendent_ru_pic | string |  |  |
| role | number |  |  |
| room_id | number | 直播间长 id |  |
| title | string | 直播间标题 |  |
| uid | number | 主播 UID (mid) |  |
| uname | string | 主播用户名 |  |

**示例:**

```shell
curl 'https://api.bilibili.com/x/article/cards?ids=av2,cv1,cv2,15111509,lv1,lv5440' \
  --referer 'https://www.bilibili.com/'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "data": {
    "av2": {
      "aid": 2,
      "bvid": "BV1xx411c7mD",
      "cid": 62131,
      "copyright": 2,
      "cover43": "",
      "ctime": 1497344798,
      "desc": "www",
      "dimension": {
        "height": 360,
        "rotate": 0,
        "width": 480
      },
      "duration": 2055,
      "dynamic": "",
      "owner": {
        "face": "https://i2.hdslb.com/bfs/face/ef0457addb24141e15dfac6fbf45293ccf1e32ab.jpg",
        "mid": 2,
        "name": "碧诗"
      },
      "pic": "http://static.hdslb.com/images/transparent.gif",
      "pubdate": 1252458549,
      "rights": {
        "arc_pay": 0,
        "autoplay": 1,
        "bp": 0,
        "download": 0,
        "elec": 0,
        "hd5": 0,
        "is_cooperation": 0,
        "movie": 0,
        "no_background": 0,
        "no_reprint": 0,
        "pay": 0,
        "pay_free_watch": 0,
        "ugc_pay": 0,
        "ugc_pay_preview": 0
      },
      "short_link_v2": "https://b23.tv/BV1xx411c7mD",
      "stat": {
        "aid": 2,
        "coin": 38042,
        "danmaku": 121342,
        "dislike": 0,
        "favorite": 107375,
        "his_rank": 0,
        "like": 261036,
        "now_rank": 0,
        "reply": 86021,
        "share": 20052,
        "view": 4983587,
        "vt": 0,
        "vv": 0
      },
      "state": 0,
      "tid": 130,
      "title": "字幕君交流场所",
      "tname": "音乐综合",
      "videos": 1,
      "vt_switch": false
    },
    "cv1": {
      "act_id": 0,
      "apply_time": "",
      "attributes": 24,
      "authenMark": null,
      "author": {
        "face": "https://i1.hdslb.com/bfs/face/89fe260a17891fdadc3365a9698fee52796c7765.jpg",
        "fans": 0,
        "level": 0,
        "mid": 91221505,
        "name": "健行见远渐忘",
        "nameplate": {
          "condition": "2018.6.26-7.8某一天是年度大会员",
          "image": "https://i2.hdslb.com/bfs/face/421179426c929dfeaed4117461c83f5d07ffb148.png",
          "image_small": "https://i1.hdslb.com/bfs/face/682001c2e1c2ae887bdf2a0e18eef61180c48f84.png",
          "level": "稀有勋章",
          "name": "大会员2018年度勋章",
          "nid": 74
        },
        "official_verify": {
          "desc": "",
          "type": -1
        },
        "pendant": {
          "expire": 0,
          "image": "https://i1.hdslb.com/bfs/face/7ae15f06f8c912435206a2578509d6bc77c12353.png",
          "name": "作文鬼才",
          "pid": 255
        },
        "vip": {
          "avatar_subscript": 1,
          "due_date": 0,
          "label": {
            "label_theme": "annual_vip",
            "path": "http://i0.hdslb.com/bfs/vip/label_annual.png",
            "text": "年度大会员"
          },
          "nickname_color": "#FB7299",
          "status": 1,
          "theme_type": 0,
          "type": 2,
          "vip_pay_type": 0
        }
      },
      "banner_url": "https://i0.hdslb.com/bfs/article/b1e1029c08d8ad1bb06460d736839a7741dd7925.jpg",
      "categories": [
        {
          "id": 3,
          "name": "生活",
          "parent_id": 0
        },
        {
          "id": 15,
          "name": "日常",
          "parent_id": 3
        }
      ],
      "category": {
        "id": 15,
        "name": "日常",
        "parent_id": 3
      },
      "check_state": 0,
      "check_time": "",
      "content_pic_list": null,
      "cover_avid": 0,
      "ctime": 1497973729,
      "dispute": null,
      "dynamic": "It's now or never !",
      "id": 1,
      "image_urls": [
        "https://i0.hdslb.com/bfs/article/d2eedf1fd338bceca10099e2f7b33fa9017c859b.jpg"
      ],
      "is_like": false,
      "list": {
        "apply_time": "",
        "articles_count": 0,
        "check_time": "",
        "ctime": 1588601669,
        "id": 253534,
        "image_url": "",
        "mid": 91221505,
        "name": "静夜思",
        "publish_time": 1625900652,
        "read": 0,
        "reason": "",
        "state": 1,
        "summary": "",
        "update_time": 1625900518,
        "words": 3059
      },
      "media": {
        "area": "",
        "cover": "",
        "media_id": 0,
        "score": 0,
        "season_id": 0,
        "spoiler": 0,
        "title": "",
        "type_id": 0,
        "type_name": ""
      },
      "mtime": 1589209079,
      "origin_image_urls": [
        "https://i0.hdslb.com/bfs/article/b1e1029c08d8ad1bb06460d736839a7741dd7925.jpg"
      ],
      "origin_template_id": 4,
      "original": 0,
      "private_pub": 0,
      "publish_time": 1519913233,
      "reprint": 0,
      "state": 0,
      "stats": {
        "coin": 2545,
        "dislike": 1,
        "dynamic": 0,
        "favorite": 17524,
        "like": 32489,
        "reply": 14399,
        "share": 616,
        "view": 1631442
      },
      "summary": "天空像是倾倒出的墨水，黑得静谧而深邃。黎明还远，光亮全无。夜不能寐。披衣，起床。茶香的弥漫，一盏灯的相伴。夜，你是我久别重逢的朋友，那一刹那的相见，带给了我久违的安思。如果不是梦魇的皮闹，我本不该投入",
      "template_id": 4,
      "title": "未知的光",
      "top_video_info": null,
      "type": 0,
      "words": 1190
    },
    "cv2": {
      "act_id": 0,
      "apply_time": "",
      "authenMark": null,
      "author": {
        "face": "http://i0.hdslb.com/bfs/face/ff6b51c3b339dae5f341d1693f52132ab11c86b6.jpg",
        "fans": 0,
        "level": 0,
        "mid": 144900660,
        "name": "专栏小天使",
        "nameplate": {
          "condition": "",
          "image": "",
          "image_small": "",
          "level": "",
          "name": "",
          "nid": 0
        },
        "official_verify": {
          "desc": "专栏小天使 官方账号",
          "type": 0
        },
        "pendant": {
          "expire": 0,
          "image": "",
          "name": "",
          "pid": 0
        },
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
      },
      "banner_url": "https://i0.hdslb.com/bfs/article/131b1d41b857d5308f5bff36591d117bddc48d96.jpg@90p.webp",
      "categories": [
        {
          "id": 3,
          "name": "生活",
          "parent_id": 0
        },
        {
          "id": 15,
          "name": "日常",
          "parent_id": 3
        }
      ],
      "category": {
        "id": 15,
        "name": "日常",
        "parent_id": 3
      },
      "check_state": 0,
      "check_time": "",
      "content_pic_list": null,
      "cover_avid": 0,
      "ctime": 1497973871,
      "dispute": null,
      "id": 2,
      "image_urls": [
        "https://i0.hdslb.com/bfs/article/0a72422ce8e77d8512f010d93b1b7f9bc4e64e52.jpg"
      ],
      "is_like": false,
      "list": null,
      "media": {
        "area": "",
        "cover": "",
        "media_id": 0,
        "score": 0,
        "season_id": 0,
        "spoiler": 0,
        "title": "",
        "type_id": 0,
        "type_name": ""
      },
      "mtime": 1640696950,
      "origin_image_urls": [
        "https://i0.hdslb.com/bfs/article/131b1d41b857d5308f5bff36591d117bddc48d96.jpg"
      ],
      "origin_template_id": 4,
      "original": 0,
      "private_pub": 0,
      "publish_time": 1509517123,
      "reprint": 1,
      "state": 0,
      "stats": {
        "coin": 3590,
        "dislike": 0,
        "dynamic": 0,
        "favorite": 5614,
        "like": 16956,
        "reply": 1944,
        "share": 371,
        "view": 1184187
      },
      "summary": "欢迎各位使用Bilibili专栏，为了保证Bilibili专栏的内容质量，维护专栏的内容生态，让创作者和读者都拥有良好的使用体验和阅读体验，请各位谨遵以下规范条例：\n\n严令禁止条例\nbilibili严",
      "template_id": 4,
      "title": "专栏行为准则  ",
      "top_video_info": null,
      "type": 0,
      "words": 3711
    },
    "lv5440": {
      "area_v2_name": "历史·人文·综合",
      "cover": "https://i0.hdslb.com/bfs/live/9fe50921ab9b49e80dcb398f65135191d1b8252c.jpg",
      "face": "https://i0.hdslb.com/bfs/face/8f6a614a48a3813d90da7a11894ae56a59396fcd.jpg",
      "live_status": 2,
      "online": 0,
      "pendent_ru": "",
      "pendent_ru_color": "",
      "pendent_ru_pic": "",
      "role": 0,
      "room_id": 5440,
      "title": "一场穿越20年的直播｜梦回千禧文学",
      "uid": 9617619,
      "uname": "哔哩哔哩直播"
    }
  },
  "message": "0",
  "ttl": 1
}
```
</details>

<!-- Generated by json-apidoc-gen @ 2025-04-26T08:24:57.605652577Z -->
