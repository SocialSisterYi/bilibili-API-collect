# 获取动态详情

> https://api.bilibili.com/x/polymer/web-dynamic/v1/detail

请求方式：`GET`

是否需要登录：`否`

## URL参数

| 参数名             | 类型  | 必填  | 内容     | 备注  |
|-----------------|-----|-----|--------|-----|
| timezone_offset | num |     | `-480` |     |
| id              | num | √   | 动态id   |     |

## Json回复

### 根对象

| 字段名     | 类型  | 内容   | 备注                       |
|---------|-----|------|--------------------------|
| code    | num | 响应码  | 0：成功<br/>4101139：4101139 |
| message | str |      |                          |
| ttl     | num | 1    |                          |
| data    | obj | 信息本体 |                          |

### `data`对象

| 字段名  | 类型  | 内容  | 备注  |
|------|-----|-----|-----|
| item | obj |     |     |

### `data`对象 -> `item`对象

参照 [获取动态列表](./all.md#获取动态列表)

## 请求示例

```shell
curl -L -X GET 'https://api.bilibili.com/x/polymer/web-dynamic/v1/detail?id=724328028268658744'
```

## 响应示例

<details>
<summary>点击查看</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "item": {
      "basic": {
        "comment_id_str": "724328028268658744",
        "comment_type": 17,
        "like_icon": {
          "action_url": "",
          "end_url": "",
          "id": 0,
          "start_url": ""
        },
        "rid_str": "724328032624443401"
      },
      "id_str": "724328028268658744",
      "modules": {
        "module_author": {
          "face": "https://i2.hdslb.com/bfs/face/876bf5dfa8c583acb5f8689fc923077f6a2aba23.jpg",
          "face_nft": false,
          "following": null,
          "jump_url": "//space.bilibili.com/11357018/dynamic",
          "label": "",
          "mid": 11357018,
          "name": "动画魂-Anitama",
          "official_verify": {
            "desc": "",
            "type": 0
          },
          "pendant": {
            "expire": 0,
            "image": "",
            "image_enhance": "",
            "image_enhance_frame": "",
            "name": "",
            "pid": 0
          },
          "pub_action": "",
          "pub_location_text": "",
          "pub_time": "2022-11-03 22:02",
          "pub_ts": 1667484162,
          "type": "AUTHOR_TYPE_NORMAL",
          "vip": {
            "avatar_subscript": 1,
            "avatar_subscript_url": "",
            "due_date": 1685808000000,
            "label": {
              "bg_color": "#FB7299",
              "bg_style": 1,
              "border_color": "",
              "img_label_uri_hans": "",
              "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
              "img_label_uri_hant": "",
              "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
              "label_theme": "annual_vip",
              "path": "",
              "text": "年度大会员",
              "text_color": "#FFFFFF",
              "use_img_label": true
            },
            "nickname_color": "#FB7299",
            "status": 1,
            "theme_type": 0,
            "type": 2
          }
        },
        "module_dynamic": {
          "additional": null,
          "desc": {
            "rich_text_nodes": [
              {
                "orig_text": "恭喜 @羽希plume @晕乎菌 中奖，已私信联系。——全天加码放水，红包力度很大，打开手淘搜“我爱你红包”，红包每天可以领，积少成多。 ——明天早上9点开另外一则抽奖，有打扰请多保函。\n",
                "text": "恭喜 @羽希plume @晕乎菌 中奖，已私信联系。——全天加码放水，红包力度很大，打开手淘搜“我爱你红包”，红包每天可以领，积少成多。 ——明天早上9点开另外一则抽奖，有打扰请多保函。\n",
                "type": "RICH_TEXT_NODE_TYPE_TEXT"
              }
            ],
            "text": "恭喜 @羽希plume @晕乎菌 中奖，已私信联系。——全天加码放水，红包力度很大，打开手淘搜“我爱你红包”，红包每天可以领，积少成多。 ——明天早上9点开另外一则抽奖，有打扰请多保函。\n"
          },
          "major": null,
          "topic": null
        },
        "module_more": {
          "three_point_items": [
            {
              "label": "举报",
              "type": "THREE_POINT_REPORT"
            }
          ]
        },
        "module_stat": {
          "comment": {
            "count": 5,
            "forbidden": false
          },
          "forward": {
            "count": 1,
            "forbidden": false
          },
          "like": {
            "count": 170,
            "forbidden": false,
            "status": false
          }
        }
      },
      "orig": {
        "basic": {
          "comment_id_str": "",
          "comment_type": 0,
          "like_icon": {
            "action_url": "",
            "end_url": "",
            "id": 0,
            "start_url": ""
          },
          "rid_str": ""
        },
        "id_str": "720590749615259664",
        "modules": {
          "module_author": {
            "face": "https://i2.hdslb.com/bfs/face/876bf5dfa8c583acb5f8689fc923077f6a2aba23.jpg",
            "face_nft": false,
            "following": null,
            "jump_url": "//space.bilibili.com/11357018/dynamic",
            "label": "",
            "mid": 11357018,
            "name": "动画魂-Anitama",
            "official_verify": {
              "desc": "",
              "type": 0
            },
            "pendant": {
              "expire": 0,
              "image": "",
              "image_enhance": "",
              "image_enhance_frame": "",
              "name": "",
              "pid": 0
            },
            "pub_action": "",
            "pub_time": "",
            "pub_ts": 1666614008,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 1,
              "avatar_subscript_url": "",
              "due_date": 1685808000000,
              "label": {
                "bg_color": "#FB7299",
                "bg_style": 1,
                "border_color": "",
                "img_label_uri_hans": "",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                "img_label_uri_hant": "",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                "label_theme": "annual_vip",
                "path": "",
                "text": "年度大会员",
                "text_color": "#FFFFFF",
                "use_img_label": true
              },
              "nickname_color": "#FB7299",
              "status": 1,
              "theme_type": 0,
              "type": 2
            }
          },
          "module_dynamic": {
            "additional": null,
            "desc": {
              "rich_text_nodes": [
                {
                  "orig_text": "​双11天猫红包，超大力度提前发放\n活动很猛，红包很大，加额加量！\n打开手淘搜“我爱你红包”\n打开手淘搜“我爱你红包”\n打开手淘搜“我爱你红包”\n最高可领取28888元\n\n一天可领3次，今天红包额度最大\n越早领取得现金概率越大！\n抽奖=转发+关注",
                  "text": "​双11天猫红包，超大力度提前发放\n活动很猛，红包很大，加额加量！\n打开手淘搜“我爱你红包”\n打开手淘搜“我爱你红包”\n打开手淘搜“我爱你红包”\n最高可领取28888元\n\n一天可领3次，今天红包额度最大\n越早领取得现金概率越大！\n抽奖=转发+关注",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                },
                {
                  "jump_url": "//search.bilibili.com/all?keyword=%23%E4%BA%92%E5%8A%A8%E6%8A%BD%E5%A5%96%23",
                  "orig_text": "#互动抽奖#",
                  "text": "#互动抽奖#",
                  "type": "RICH_TEXT_NODE_TYPE_TOPIC"
                },
                {
                  "orig_text": "\n转+评，留言你领到多少红包\n评论区随机抽取2位，每人补贴50零花钱 ",
                  "text": "\n转+评，留言你领到多少红包\n评论区随机抽取2位，每人补贴50零花钱 ",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                }
              ],
              "text": "​双11天猫红包，超大力度提前发放\n活动很猛，红包很大，加额加量！\n打开手淘搜“我爱你红包”\n打开手淘搜“我爱你红包”\n打开手淘搜“我爱你红包”\n最高可领取28888元\n\n一天可领3次，今天红包额度最大\n越早领取得现金概率越大！\n抽奖=转发+关注#互动抽奖#\n转+评，留言你领到多少红包\n评论区随机抽取2位，每人补贴50零花钱 "
            },
            "major": {
              "draw": {
                "id": 210334026,
                "items": [
                  {
                    "height": 672,
                    "size": 134.85938,
                    "src": "https://i0.hdslb.com/bfs/new_dyn/37c21f8864e47cbeeb7c3e3a66bb250b11357018.jpg",
                    "tags": [],
                    "width": 576
                  }
                ]
              },
              "type": "MAJOR_TYPE_DRAW"
            },
            "topic": null
          }
        },
        "type": "DYNAMIC_TYPE_DRAW",
        "visible": true
      },
      "type": "DYNAMIC_TYPE_FORWARD",
      "visible": true
    }
  }
}
```

</details>