# 获取动态详情

## 动态详情

> https://api.bilibili.com/x/polymer/web-dynamic/v1/detail

*请求方式: GET*

**URL参数:**

| 参数名             | 类型  | 必填  | 内容     | 备注  |
|-----------------|-----|-----|--------|-----|
| timezone_offset | num |     | `-480` |     |
| id              | num | √   | 动态id   |     |

**JSON回复:**

根对象:

| 字段名     | 类型  | 内容   | 备注                       |
|---------|-----|------|--------------------------|
| code    | num | 响应码  | 0：成功<br/>4101139：4101139 |
| message | str |      |                          |
| ttl     | num | 1    |                          |
| data    | obj | 信息本体 |                          |

`data`对象:

| 字段名  | 类型  | 内容  | 备注  |
|------|-----|-----|-----|
| item | obj |     |     |

`data.item`对象:

参照 [获取动态列表](./all.md#获取动态列表)

**示例:**

```shell
curl -L -X GET 'https://api.bilibili.com/x/polymer/web-dynamic/v1/detail?id=724328028268658744'
```

<details>
<summary>查看响应示例:</summary>

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

## 动态抽奖详情

> https://api.vc.bilibili.com/lottery_svr/v1/lottery_svr/lottery_notice

*请求方法: GET*

**URL参数:**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ----- | ---- | -------- | ------ | ---- |
| business_id | num | 动态 id | 必要   |      |
| bussiness_type | num | 业务类型? | 必要   | 1: 动态抽奖 |
| csrf | str | CSRF Token (即 Cookie 中 bili_jct 字段) | 不必要 | |
| web_location | str | 333.1330 | 不必要 | |

<details>
<summary>旧版参数:</summary>

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ----- | ---- | -------- | ------ | ---- |
| dynamic_id | num | 动态 id | 必要   |      |

</details>

**JSON回复:**

根对象:

| 字段名 | 类型 | 内容 | 备注 |
| - | - | - | - |
| code | num | 返回值 | 0: 成功<br />-9999: 服务系统错误 |
| message | str | 错误信息 | 无则为空串 |
| msg | str | 错误信息 | 无则为空串 |
| data | obj | 信息本体 | 错误时为空对象 |

`data`对象:

| 字段名 | 类型 | 内容 | 备注 |
| - | - | - | - |
| lottery_id | num | 抽奖 id | |
| sender_uid | num | 发送者 mid | |
| business_type | num | 业务类型 | 1: 动态抽奖 |
| business_id | num | 业务 id | 可能与请求参数不同 |
| status | num | 抽奖状态 | 0: 未开奖<br />2: 已开奖 |
| lottery_time | num | 开奖时间 | UNIX 秒级时间戳 |
| lottery_at_num | num | at 人数? | |
| lottery_feed_limit | num | 转发限制? | |
| need_post | num | 是否需要发布? | |
| pay_status | num | 支付状态? | |
| first_prize | num | 一等奖数量 | |
| second_prize | num | 二等奖数量 | |
| third_prize | num | 三等奖数量 | |
| ts | num | 发布时间 | UNIX 秒级时间戳 |
| participants | num | 参与人数 | |
| has_charge_right | bool | 是否有充值权? | |
| participated | bool | 是否参与过? | |
| followed | bool | 是否关注过 | |
| reposted | bool | 是否转发过 | |
| lottery_detail_url | str | 抽奖详情页 URL? | |
| first_prize_cmt | str | 一等奖奖品名称 | |
| third_prize_cmt | str | 三等奖奖品名称 | |
| first_prize_pic | str | 一等奖奖品图片 URL | |
| second_prize_pic | str | 二等奖奖品图片 URL | |
| third_prize_pic | str | 三等奖奖品图片 URL | |
| vip_batch_sign | str | ？ | |
| prize_type_first | obj | 一等奖奖品类型 | |
| prize_type_second | obj | 二等奖奖品类型 | 无则不存在 |
| prize_type_third | obj | 三等奖奖品类型 | 无则不存在 |
| lottery_result | obj | 抽奖结果 | 无则不存在 |

`data`对象中的`prize_type_first`对象:

| 字段名 | 类型 | 内容 | 备注 |
| - | - | - | - |
| type | num | 奖品类型? | 0 |
| value | obj | 奖品价值? | |

`prize_type_first`对象中的`value`对象:

| 字段名 | 类型 | 内容 | 备注 |
| - | - | - | - |
| stype | num | 子奖品类型? | 0 |

`data`对象中的`prize_type_second`对象:

与 `prize_type_first` 格式相同

`data`对象中的`prize_type_third`对象:

与 `prize_type_first` 格式相同

`data`对象中的`lottery_result`对象:

| 字段名 | 类型 | 内容 | 备注 |
| - | - | - | - |
| first_prize_result | array | 一等奖结果 | |
| second_prize_result | array | 二等奖结果 | 无则不存在 |
| third_prize_result | array | 三等奖结果 | 无则不存在 |

`lottery_result`对象中的`first_prize_result`数组:

| 项名 | 类型 | 内容 | 备注 |
| - | - | - | - |
| uid | num | 中奖者 mid | |
| name | str | 中奖者名称 | |
| face | str | 中奖者头像 URL | |
| hongbao_money | num | 奖品金额? | |

`lottery_result`对象中的`second_prize_result`数组:

与 `first_prize_result` 格式相同

`lottery_result`对象中的`third_prize_result`数组:

与 `first_prize_result` 格式相同

**示例:**

```shell
curl -G 'https://api.vc.bilibili.com/lottery_svr/v1/lottery_svr/lottery_notice' \
--url-query 'business_id=969916293954142214' \
--url-query 'business_type=1'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "data": {
    "lottery_id": 314834,
    "sender_uid": 36081646,
    "business_type": 1,
    "business_id": 969916293954142214,
    "status": 2,
    "lottery_time": 1724860800,
    "lottery_at_num": 0,
    "lottery_feed_limit": 1,
    "need_post": 0,
    "pay_status": 0,
    "first_prize": 1,
    "second_prize": 0,
    "third_prize": 0,
    "ts": 1724922650,
    "participants": 9230,
    "has_charge_right": false,
    "participated": false,
    "followed": false,
    "reposted": false,
    "lottery_detail_url": "",
    "first_prize_cmt": "S档门票",
    "third_prize_cmt": "",
    "first_prize_pic": "",
    "second_prize_pic": "",
    "third_prize_pic": "",
    "vip_batch_sign": "",
    "prize_type_first": {
      "type": 0,
      "value": {
        "stype": 0
      }
    },
    "lottery_result": {
      "first_prize_result": [
        {
          "uid": 1014634854,
          "name": "lty世界第一吃货殿下",
          "face": "https://i0.hdslb.com/bfs/face/c746083b15f6761ea75c602661123e68784c6b1c.jpg",
          "hongbao_money": 0
        }
      ]
    }
  },
  "message": "",
  "msg": ""
}
```

</details>
