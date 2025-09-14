# 获取动态详情

## 动态详情

> https://api.bilibili.com/x/polymer/web-dynamic/v1/detail
> https://api.bilibili.com/x/polymer/web-dynamic/desktop/v1/detail

*请求方式: GET*

认证方式: Cookie (SESSDATA) (非必要)

鉴权方式: Cookie (User-Agent) (必要), [Wbi 签名](../misc/sign/wbi.md) (非必要)

**URL参数:**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| --- | --- | --- | --- | --- |
| id | num | 动态 ID | 必要 |  |
| timezone_offset | num | -480 | 非必要 |  |
| platform | str | 平台 | 非必要 | `web` |
| gaia_source | str | 来源 | 非必要 | `main_web` |
| features | str | 功能 | 必要 | `itemOpusStyle,opusBigCover,onlyfansVote,endFooterHidden,decorationCard,onlyfansAssetsV2,ugcDelete,onlyfansQaCard,commentsNewVersion`, 参见 [图文 功能模块](../opus/features.md) |
| web_location | str | `333.1368` | 非必要 |  |
| x-bili-device-req-json | obj | 设备信息? | 非必要 | `{"platform":"web","device":"pc"}` |
| x-bili-web-req-json | obj | 请求信息? | 非必要 | `{"spm_id":"333.1368"}` |
| w_rid | str | Wbi 签名 | 不必要 | 参见 [Wbi 签名](../misc/sign/wbi.md) |
| wts | num | UNIX 秒级时间戳 | 不必要 | 参见 [Wbi 签名](../misc/sign/wbi.md) |

**JSON回复:**

根对象:

| 字段名     | 类型  | 内容   | 备注                       |
|---------|-----|------|--------------------------|
| code    | num | 响应码  | 0: 成功<br/>-352: 风控校验失败<br />500: 服务器错误<br />4101139: 4101139 |
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
curl -G 'https://api.bilibili.com/x/polymer/web-dynamic/v1/detail' \
  -A 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0' \
  -b 'SESSDATA=xxxxxx' \
  --url-query 'id=967717348014293017' \
  --url-query 'w_rid=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' \
  --url-query 'wts=1724986186'
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
        "comment_id_str": "326122895",
        "comment_type": 11,
        "like_icon": {
          "action_url": "",
          "end_url": "",
          "id": 0,
          "start_url": ""
        },
        "rid_str": "326122895"
      },
      "id_str": "967717348014293017",
      "modules": {
        "module_author": {
          "avatar": {
            "container_size": {
              "height": 1.35,
              "width": 1.35
            },
            "fallback_layers": {
              "is_critical_group": true,
              "layers": [
                {
                  "general_spec": {
                    "pos_spec": {
                      "axis_x": 0.675,
                      "axis_y": 0.675,
                      "coordinate_pos": 2
                    },
                    "render_spec": {
                      "opacity": 1
                    },
                    "size_spec": {
                      "height": 1,
                      "width": 1
                    }
                  },
                  "layer_config": {
                    "is_critical": true,
                    "tags": {
                      "AVATAR_LAYER": {},
                      "GENERAL_CFG": {
                        "config_type": 1,
                        "general_config": {
                          "web_css_style": {
                            "borderRadius": "50%"
                          }
                        }
                      }
                    }
                  },
                  "resource": {
                    "res_image": {
                      "image_src": {
                        "placeholder": 6,
                        "remote": {
                          "bfs_style": "widget-layer-avatar",
                          "url": "https://i2.hdslb.com/bfs/face/77906db03b1eefac02613de184afad03f7bc58d7.jpg"
                        },
                        "src_type": 1
                      }
                    },
                    "res_type": 3
                  },
                  "visible": true
                }
              ]
            },
            "mid": "645769214"
          },
          "decorate": {
            "card_url": "https://i0.hdslb.com/bfs/vip/a9e3d993c7a15e88ce0bf714a142f7d2b44121e2.png",
            "fan": {
              "color": "",
              "color_format": null,
              "is_fan": false,
              "num_prefix": "",
              "num_str": "",
              "number": 0
            },
            "id": 28,
            "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=28&isdiy=0&part=card&from=post&f_source=garb&vmid=645769214&native.theme=1&navhide=1",
            "name": "2233娘",
            "type": 1
          },
          "face": "https://i2.hdslb.com/bfs/face/77906db03b1eefac02613de184afad03f7bc58d7.jpg",
          "face_nft": false,
          "following": null,
          "jump_url": "//space.bilibili.com/645769214/dynamic",
          "label": "",
          "mid": 645769214,
          "name": "Session小胡",
          "official_verify": {
            "desc": "",
            "type": -1
          },
          "pendant": {
            "expire": 0,
            "image": "",
            "image_enhance": "",
            "image_enhance_frame": "",
            "n_pid": 0,
            "name": "",
            "pid": 0
          },
          "pub_action": "",
          "pub_location_text": "",
          "pub_time": "2024年08月20日 19:17",
          "pub_ts": 1724152653,
          "type": "AUTHOR_TYPE_NORMAL",
          "vip": {
            "avatar_subscript": 0,
            "avatar_subscript_url": "",
            "due_date": 1665158400000,
            "label": {
              "bg_color": "",
              "bg_style": 0,
              "border_color": "",
              "img_label_uri_hans": "",
              "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
              "img_label_uri_hant": "",
              "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
              "label_theme": "",
              "path": "",
              "text": "",
              "text_color": "",
              "use_img_label": true
            },
            "nickname_color": "",
            "status": 0,
            "theme_type": 0,
            "type": 1
          }
        },
        "module_dynamic": {
          "additional": null,
          "desc": {
            "rich_text_nodes": [
              {
                "orig_text": "今天因为Linux被骂, 决定放弃支持 Windows. 而且明天要开始军训了, 将停更若干时间, 遂发此动态, 望不知.",
                "text": "今天因为Linux被骂, 决定放弃支持 Windows. 而且明天要开始军训了, 将停更若干时间, 遂发此动态, 望不知.",
                "type": "RICH_TEXT_NODE_TYPE_TEXT"
              }
            ],
            "text": "今天因为Linux被骂, 决定放弃支持 Windows. 而且明天要开始军训了, 将停更若干时间, 遂发此动态, 望不知."
          },
          "major": {
            "draw": {
              "id": 326122895,
              "items": [
                {
                  "height": 1080,
                  "size": 1005.29,
                  "src": "http://i0.hdslb.com/bfs/new_dyn/0f6f939334104ddc347566514fa4bfa7645769214.jpg",
                  "tags": [],
                  "width": 1440
                }
              ]
            },
            "type": "MAJOR_TYPE_DRAW"
          },
          "topic": null
        },
        "module_more": {
          "three_point_items": [
            {
              "label": "删除",
              "modal": {
                "cancel": "取消",
                "confirm": "确认删除",
                "content": "动态删除后将无法恢复，请谨慎操作",
                "title": "要删除动态吗？"
              },
              "params": {
                "dyn_id_str": "967717348014293017",
                "dyn_type": 2,
                "rid_str": "326122895"
              },
              "type": "THREE_POINT_DELETE"
            }
          ]
        },
        "module_stat": {
          "comment": {
            "count": 34,
            "forbidden": false
          },
          "forward": {
            "count": 2,
            "forbidden": false
          },
          "like": {
            "count": 65,
            "forbidden": false,
            "status": true
          }
        }
      },
      "type": "DYNAMIC_TYPE_DRAW",
      "visible": true
    }
  }
}
```

</details>

## 动态赞与转发列表

> https://api.bilibili.com/x/polymer/web-dynamic/v1/detail/reaction

*请求方式: GET*

认证方式: Cookie (SESSDATA)

注: 登录任意账号即可, 若不登录则返回数为 0

**URL参数:**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| --- | --- | --- | --- | --- |
| id | num | 动态 id | 必要 |  |
| offset | obj | 偏移量 | 非必要 | 用于翻页, 即响应的 `data.offset` |
| web_location | str | 333.1369 | 非必要 |  |

**JSON回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 返回值 | 0: 成功 |
| message | str | 错误信息 | 默认为 0 |
| ttl | num | 1 |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| has_more | bool | 是否有更多 |  |
| items | array | 赞与转发列表 |  |
| offset | str | 偏移量 | 套了一层字符串的 JSON 对象, 用于下次请求 |
| total | num | 总数 |  |

`data` 对象中的 `items` 数组中的对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| action | str | 操作类型 | 赞了/转发了 |
| attend | num | 参与数 | 1: 对方仅关注了发送者<br />2: 发送者关注了对方 |
| desc | str | 描述 |  |
| face | str | 头像 URL |  |
| mid | num | 用户 mid |  |
| name | str | 用户名 |  |

**示例:**

获取动态 `967717348014293017` 的赞与转发列表

```shell
curl -G 'https://api.bilibili.com/x/polymer/web-dynamic/v1/detail/reaction' \
--url-query 'id=967717348014293017' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "has_more": true,
    "items": [
      {
        "action": "赞了",
        "attend": 2,
        "desc": "",
        "face": "https://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg",
        "mid": "293793435",
        "name": "社会易姐QwQ"
      },
      {
        "action": "转发了",
        "attend": 2,
        "desc": "",
        "face": "https://i1.hdslb.com/bfs/face/a8c0d532c19085ff14385abb51450d9c32afe93f.jpg",
        "mid": "662407339",
        "name": "XhuOffice"
      },
      {
        "action": "赞了",
        "attend": 2,
        "desc": "",
        "face": "https://i1.hdslb.com/bfs/face/a8c0d532c19085ff14385abb51450d9c32afe93f.jpg",
        "mid": "662407339",
        "name": "XhuOffice"
      },
      {
        "action": "转发了",
        "attend": 2,
        "desc": "",
        "face": "https://i1.hdslb.com/bfs/face/2c506dcf0b6507041b0bfafea7505cb1badf6ccd.jpg",
        "mid": "616368979",
        "name": "淡紫玲儿"
      },
      {
        "action": "赞了",
        "attend": 2,
        "desc": "",
        "face": "https://i1.hdslb.com/bfs/face/2c506dcf0b6507041b0bfafea7505cb1badf6ccd.jpg",
        "mid": "616368979",
        "name": "淡紫玲儿"
      },
      {
        "action": "赞了",
        "attend": 2,
        "desc": "",
        "face": "https://i2.hdslb.com/bfs/face/77906db03b1eefac02613de184afad03f7bc58d7.jpg",
        "mid": "645769214",
        "name": "Session小胡"
      },
      {
        "action": "赞了",
        "attend": 0,
        "desc": "共同关注了3个Up主",
        "face": "https://i0.hdslb.com/bfs/face/2ac46bacfdedebf9aecf6415b95dd58636b1e22a.jpg",
        "mid": "340463550",
        "name": "折耳喵之心"
      },
      {
        "action": "赞了",
        "attend": 0,
        "desc": "",
        "face": "https://i1.hdslb.com/bfs/face/ec855a27a42e174521399d7508cece6c0c02c6ff.jpg",
        "mid": "628114249",
        "name": "at白日梦想家"
      },
      {
        "action": "赞了",
        "attend": 0,
        "desc": "共同关注了3个Up主",
        "face": "https://i1.hdslb.com/bfs/face/81362ba3f99b2702b9746ca7fe67ffc76d3a97c4.jpg",
        "mid": "198175",
        "name": "傲娇金发黑丝双马尾"
      },
      {
        "action": "赞了",
        "attend": 0,
        "desc": "",
        "face": "https://i2.hdslb.com/bfs/face/df1c9bc7d79c84b7227486a944d7a748093fbb31.jpg",
        "mid": "1007349302",
        "name": "用户9420594"
      },
      {
        "action": "赞了",
        "attend": 0,
        "desc": "",
        "face": "https://i0.hdslb.com/bfs/face/f17befd18cab5e157844ab986bd6c60d58d74738.jpg",
        "mid": "1180456113",
        "name": "人工智能小冰_yoyo"
      },
      {
        "action": "赞了",
        "attend": 0,
        "desc": "共同关注了2个Up主",
        "face": "https://i0.hdslb.com/bfs/face/f1b0ebdf19c2f4b768c5a3e57cbd50e404ad9549.jpg",
        "mid": "273008643",
        "name": "LV1渡劫失败降到"
      },
      {
        "action": "赞了",
        "attend": 0,
        "desc": "",
        "face": "https://i0.hdslb.com/bfs/face/a7732df2624c6a0b6e5856ceb27f3c96598a2fd4.jpg",
        "mid": "452290620",
        "name": "评论永远比视频精彩"
      },
      {
        "action": "赞了",
        "attend": 0,
        "desc": "",
        "face": "https://i0.hdslb.com/bfs/face/cc2ea9088f066b33f24d39434d23aa68cb8ab761.png",
        "mid": "91671246",
        "name": "樱樱之雪"
      },
      {
        "action": "赞了",
        "attend": 0,
        "desc": "共同关注了3个Up主",
        "face": "http://i1.hdslb.com/bfs/face/d20eae4d6339cef2267b36c1c262ae6466395b64.jpg",
        "mid": "340632388",
        "name": "天神永恒hb"
      },
      {
        "action": "赞了",
        "attend": 0,
        "desc": "共同关注了21个Up主",
        "face": "https://i0.hdslb.com/bfs/face/368b2a33eed5dc146bd9ab8bf62bc9667653a350.jpg",
        "mid": "38120922",
        "name": "vgwik"
      },
      {
        "action": "赞了",
        "attend": 0,
        "desc": "共同关注了2个Up主",
        "face": "https://i2.hdslb.com/bfs/face/efbd8bb841ea6340f39854b82d9741f47cb3351e.jpg",
        "mid": "691494413",
        "name": "熬夜肝不好"
      },
      {
        "action": "赞了",
        "attend": 0,
        "desc": "",
        "face": "https://i1.hdslb.com/bfs/face/c46fe783ac7a5291dac4773744b3d35d7cebd77f.jpg",
        "mid": "1486540726",
        "name": "o_90"
      },
      {
        "action": "赞了",
        "attend": 0,
        "desc": "",
        "face": "https://i1.hdslb.com/bfs/face/fece6f971d14fddbddcede65a42edc63d01884d4.jpg",
        "mid": "34474963",
        "name": "Neko_vecter"
      },
      {
        "action": "赞了",
        "attend": 0,
        "desc": "共同关注了8个Up主",
        "face": "https://i0.hdslb.com/bfs/face/e1d66345bdb6f8c75b782ed5c4b93440860c894d.jpg",
        "mid": "88466370",
        "name": "没有钱的首富"
      },
      {
        "action": "赞了",
        "attend": 0,
        "desc": "共同关注了15个Up主",
        "face": "https://i0.hdslb.com/bfs/face/f8a6e77e5839e64a7448ddeb7112af86eb47aa48.jpg",
        "mid": "14625981",
        "name": "龙凌洛"
      },
      {
        "action": "赞了",
        "attend": 0,
        "desc": "",
        "face": "https://i2.hdslb.com/bfs/face/18c0bb87fbc8f9fde0d7f92ab88917e517e53df1.jpg",
        "mid": "36708269",
        "name": "alcoholmole"
      },
      {
        "action": "赞了",
        "attend": 0,
        "desc": "",
        "face": "https://i0.hdslb.com/bfs/face/39f0e0ec39e6828b01afc28ad001471d1efa8c66.jpg",
        "mid": "52874964",
        "name": "黑暗战师"
      },
      {
        "action": "赞了",
        "attend": 1,
        "desc": "对方关注了你",
        "face": "https://i0.hdslb.com/bfs/face/07d73f7d01c8e8cfb9173d8fe6e40a0c8cb5713d.jpg",
        "mid": "702368712",
        "name": "-御帝哥哥-"
      },
      {
        "action": "赞了",
        "attend": 0,
        "desc": "共同关注了22个Up主",
        "face": "http://i0.hdslb.com/bfs/face/member/noface.jpg",
        "mid": "398095475",
        "name": "meipeter"
      },
      {
        "action": "赞了",
        "attend": 0,
        "desc": "",
        "face": "https://i1.hdslb.com/bfs/face/a4a1566d7218307839345a079651bf58a69a028f.jpg",
        "mid": "101358808",
        "name": "香香软软的小阿芙"
      }
    ],
    "offset": "{\"page\":2,\"like\":101358808,\"repost\":-1}",
    "total": 65
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

## 动态转发列表

> https://api.bilibili.com/x/polymer/web-dynamic/v1/detail/forward

*请求方法: GET*

鉴权方式: `User-Agent` 为有效浏览器等

<!-- #1343 -->

**URL 参数:**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ----- | ---- | -------- | ------ | ---- |
| id | number | 动态 id | 必要   |      |
| offset | string | 偏移 | 不必要   | 来自上一次请求的 `data.offset` |

**JSON 回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| code | number | 返回值 | 0: 成功<br />4101001: 参数错误<br />-352: 风控校验失败 |
| data | object | 数据本体 |  |
| message | string | 错误信息 | 成功时为 `0` |
| ttl | number | `1` |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| has_more | boolean | 是否有更多数据 |  |
| items | object[] | 转发列表 |  |
| offset | string | 下一页偏移 | 用于下一次请求 |
| total | number | 总数 |  |

`data.items[]` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| desc | object | 描述 |  |
| id_str | string | 进行转发的动态 id |  |
| pub_time | string | 发布时间 |  |
| user | object | 用户 |  |

`data.items[].desc` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| rich_text_nodes | object[] | 富文本节点 | 参见 [富文本节点](../opus/rich_text_nodesmd) |
| text | string | 纯文本 |  |

`data.items[].user` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| face | string | 头像 URL |  |
| face_nft | boolean | 是否为 NFT 头像 |  |
| mid | number | 用户 mid (UID) |  |
| name | string | 用户名 |  |
| official | object | 认证信息 |  |
| pendant | object | 装扮信息 |  |
| vip | object | 大会员信息 |  |

`data.items[].user.official` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| desc | string |  |  |
| role | number |  |  |
| title | string |  |  |
| type | number |  |  |

`data.items[].user.pendant` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| expire | number |  |  |
| image | string |  |  |
| image_enhance | string |  |  |
| image_enhance_frame | string |  |  |
| n_pid | number |  |  |
| name | string |  |  |
| pid | number |  |  |

`data.items[].user.vip` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| avatar_icon | object |  |  |
| avatar_subscript | number |  |  |
| avatar_subscript_url | string |  |  |
| due_date | number |  |  |
| label | object |  |  |
| nickname_color | string |  |  |
| role | number |  |  |
| status | number |  |  |
| theme_type | number |  |  |
| tv_due_date | number |  |  |
| tv_vip_pay_type | number |  |  |
| tv_vip_status | number |  |  |
| type | number |  |  |
| vip_pay_type | number |  |  |

`data.items[].user.vip.avatar_icon` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| icon_resource | object |  |  |

`data.items[].user.vip.avatar_icon.icon_resource` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |

`data.items[].user.vip.label` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| bg_color | string |  |  |
| bg_style | number |  |  |
| border_color | string |  |  |
| img_label_uri_hans | string |  |  |
| img_label_uri_hans_static | string |  |  |
| img_label_uri_hant | string |  |  |
| img_label_uri_hant_static | string |  |  |
| label_theme | string |  |  |
| path | string |  |  |
| text | string |  |  |
| text_color | string |  |  |
| use_img_label | boolean |  |  |

**示例:**

```shell
curl 'https://api.bilibili.com/x/polymer/web-dynamic/v1/detail/forward' \
--url-query 'id=1091904489085993012' \
-A 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "data": {
    "has_more": true,
    "items": [
      {
        "desc": {
          "rich_text_nodes": [
            {
              "orig_text": "恭喜恭喜​//",
              "text": "恭喜恭喜​//",
              "type": "RICH_TEXT_NODE_TYPE_TEXT"
            },
            {
              "orig_text": "@英伟达GeForce",
              "rid": "485703766",
              "text": "@英伟达GeForce",
              "type": "RICH_TEXT_NODE_TYPE_AT"
            },
            {
              "orig_text": ":热爱从未褪色，拼搏终有回响！\n恭喜 TYLOO 站上了世界冠军的领奖台！\n这就是 GEFORCE，这就是 CS:GO，这就是 TYLOO！\n关注",
              "text": ":热爱从未褪色，拼搏终有回响！\n恭喜 TYLOO 站上了世界冠军的领奖台！\n这就是 GEFORCE，这就是 CS:GO，这就是 TYLOO！\n关注",
              "type": "RICH_TEXT_NODE_TYPE_TEXT"
            },
            {
              "orig_text": "@英伟达GeForce ",
              "rid": "485703766",
              "text": "@英伟达GeForce ",
              "type": "RICH_TEXT_NODE_TYPE_AT"
            },
            {
              "orig_text": " 并转发该条动态内容，我们将抽选 3 位小伙伴获得【100元京东E卡】一张！\n",
              "text": " 并转发该条动态内容，我们将抽选 3 位小伙伴获得【100元京东E卡】一张！\n",
              "type": "RICH_TEXT_NODE_TYPE_TEXT"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23%E8%A3%82%E5%8F%98%E5%A4%A9%E5%9C%B0s1%23",
              "orig_text": "#裂变天地s1#",
              "text": "#裂变天地s1#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23CS2%23",
              "orig_text": "#CS2#",
              "text": "#CS2#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23TYLOO%23",
              "orig_text": "#TYLOO#",
              "text": "#TYLOO#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23%E4%B8%AD%E5%9B%BD%E5%A4%A9%E7%A6%84%E5%88%9B%E5%8E%86%E5%8F%B2%E5%A4%BA%E5%86%A0%23",
              "orig_text": "#中国天禄创历史夺冠#",
              "text": "#中国天禄创历史夺冠#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            }
          ],
          "text": "恭喜恭喜​//@英伟达GeForce:热爱从未褪色，拼搏终有回响！\n恭喜 TYLOO 站上了世界冠军的领奖台！\n这就是 GEFORCE，这就是 CS:GO，这就是 TYLOO！\n关注@英伟达GeForce  并转发该条动态内容，我们将抽选 3 位小伙伴获得【100元京东E卡】一张！\n#裂变天地s1##CS2##TYLOO##中国天禄创历史夺冠#"
        },
        "id_str": "1092279955170000920",
        "pub_time": "1分钟前",
        "user": {
          "face": "https://i2.hdslb.com/bfs/face/c831cf26f1012338306a178d70a436a7ac2d79fb.jpg",
          "face_nft": false,
          "mid": 58964126,
          "name": "see_ka",
          "official": {
            "desc": "",
            "role": 0,
            "title": "",
            "type": -1
          },
          "pendant": {
            "expire": 0,
            "image": "",
            "image_enhance": "",
            "image_enhance_frame": "",
            "n_pid": 0,
            "name": "",
            "pid": 0
          },
          "vip": {
            "avatar_icon": {
              "icon_resource": {}
            },
            "avatar_subscript": 0,
            "avatar_subscript_url": "",
            "due_date": 1699977600000,
            "label": {
              "bg_color": "",
              "bg_style": 0,
              "border_color": "",
              "img_label_uri_hans": "",
              "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
              "img_label_uri_hant": "",
              "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
              "label_theme": "",
              "path": "",
              "text": "",
              "text_color": "",
              "use_img_label": true
            },
            "nickname_color": "",
            "role": 0,
            "status": 0,
            "theme_type": 0,
            "tv_due_date": 0,
            "tv_vip_pay_type": 0,
            "tv_vip_status": 0,
            "type": 1,
            "vip_pay_type": 0
          }
        }
      },
      {
        "desc": {
          "rich_text_nodes": [
            {
              "orig_text": "转发动态//",
              "text": "转发动态//",
              "type": "RICH_TEXT_NODE_TYPE_TEXT"
            },
            {
              "orig_text": "@英伟达GeForce",
              "rid": "485703766",
              "text": "@英伟达GeForce",
              "type": "RICH_TEXT_NODE_TYPE_AT"
            },
            {
              "orig_text": ":热爱从未褪色，拼搏终有回响！\n恭喜 TYLOO 站上了世界冠军的领奖台！\n这就是 GEFORCE，这就是 CS:GO，这就是 TYLOO！\n关注@英伟达GeForce 并转发该条动态内容，我们将抽选 3 位小伙伴获得【100元京东E卡】一张！\n",
              "text": ":热爱从未褪色，拼搏终有回响！\n恭喜 TYLOO 站上了世界冠军的领奖台！\n这就是 GEFORCE，这就是 CS:GO，这就是 TYLOO！\n关注@英伟达GeForce 并转发该条动态内容，我们将抽选 3 位小伙伴获得【100元京东E卡】一张！\n",
              "type": "RICH_TEXT_NODE_TYPE_TEXT"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23%E8%A3%82%E5%8F%98%E5%A4%A9%E5%9C%B0s1%23",
              "orig_text": "#裂变天地s1#",
              "text": "#裂变天地s1#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23CS2%23",
              "orig_text": "#CS2#",
              "text": "#CS2#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23TYLOO%23",
              "orig_text": "#TYLOO#",
              "text": "#TYLOO#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23%E4%B8%AD%E5%9B%BD%E5%A4%A9%E7%A6%84%E5%88%9B%E5%8E%86%E5%8F%B2%E5%A4%BA%E5%86%A0%23",
              "orig_text": "#中国天禄创历史夺冠#",
              "text": "#中国天禄创历史夺冠#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            }
          ],
          "text": "转发动态//@英伟达GeForce:热爱从未褪色，拼搏终有回响！\n恭喜 TYLOO 站上了世界冠军的领奖台！\n这就是 GEFORCE，这就是 CS:GO，这就是 TYLOO！\n关注@英伟达GeForce 并转发该条动态内容，我们将抽选 3 位小伙伴获得【100元京东E卡】一张！\n#裂变天地s1##CS2##TYLOO##中国天禄创历史夺冠#"
        },
        "id_str": "1092279895003758596",
        "pub_time": "1分钟前",
        "user": {
          "face": "https://i2.hdslb.com/bfs/face/d62d4f1d1e8e74a5bc3befd1367c0e0cace13390.jpg",
          "face_nft": false,
          "mid": 3546652805696378,
          "name": "小大宙",
          "official": {
            "desc": "",
            "role": 0,
            "title": "",
            "type": -1
          },
          "pendant": {
            "expire": 0,
            "image": "",
            "image_enhance": "",
            "image_enhance_frame": "",
            "n_pid": 0,
            "name": "",
            "pid": 0
          },
          "vip": {
            "avatar_icon": {
              "icon_resource": {}
            },
            "avatar_subscript": 0,
            "avatar_subscript_url": "",
            "due_date": 0,
            "label": {
              "bg_color": "",
              "bg_style": 0,
              "border_color": "",
              "img_label_uri_hans": "",
              "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
              "img_label_uri_hant": "",
              "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
              "label_theme": "",
              "path": "",
              "text": "",
              "text_color": "",
              "use_img_label": true
            },
            "nickname_color": "",
            "role": 0,
            "status": 0,
            "theme_type": 0,
            "tv_due_date": 0,
            "tv_vip_pay_type": 0,
            "tv_vip_status": 0,
            "type": 0,
            "vip_pay_type": 0
          }
        }
      },
      {
        "desc": {
          "rich_text_nodes": [
            {
              "orig_text": "许愿幸运呀嘿嘿，加油加油",
              "text": "许愿幸运呀嘿嘿，加油加油",
              "type": "RICH_TEXT_NODE_TYPE_TEXT"
            },
            {
              "emoji": {
                "icon_url": "https://i0.hdslb.com/bfs/garb/c2cb4128fd28a727b4aec120e26adc4adf0f4e75.png",
                "size": 2,
                "text": "[Akie秋绘七周年_阳光可爱]",
                "type": 3
              },
              "orig_text": "[Akie秋绘七周年_阳光可爱]",
              "text": "[Akie秋绘七周年_阳光可爱]",
              "type": "RICH_TEXT_NODE_TYPE_EMOJI"
            },
            {
              "emoji": {
                "icon_url": "https://i0.hdslb.com/bfs/garb/c2cb4128fd28a727b4aec120e26adc4adf0f4e75.png",
                "size": 2,
                "text": "[Akie秋绘七周年_阳光可爱]",
                "type": 3
              },
              "orig_text": "[Akie秋绘七周年_阳光可爱]",
              "text": "[Akie秋绘七周年_阳光可爱]",
              "type": "RICH_TEXT_NODE_TYPE_EMOJI"
            },
            {
              "orig_text": "​//",
              "text": "​//",
              "type": "RICH_TEXT_NODE_TYPE_TEXT"
            },
            {
              "orig_text": "@英伟达GeForce",
              "rid": "485703766",
              "text": "@英伟达GeForce",
              "type": "RICH_TEXT_NODE_TYPE_AT"
            },
            {
              "orig_text": ":热爱从未褪色，拼搏终有回响！\n恭喜 TYLOO 站上了世界冠军的领奖台！\n这就是 GEFORCE，这就是 CS:GO，这就是 TYLOO！\n关注",
              "text": ":热爱从未褪色，拼搏终有回响！\n恭喜 TYLOO 站上了世界冠军的领奖台！\n这就是 GEFORCE，这就是 CS:GO，这就是 TYLOO！\n关注",
              "type": "RICH_TEXT_NODE_TYPE_TEXT"
            },
            {
              "orig_text": "@英伟达GeForce ",
              "rid": "485703766",
              "text": "@英伟达GeForce ",
              "type": "RICH_TEXT_NODE_TYPE_AT"
            },
            {
              "orig_text": " 并转发该条动态内容，我们将抽选 3 位小伙伴获得【100元京东E卡】一张！\n",
              "text": " 并转发该条动态内容，我们将抽选 3 位小伙伴获得【100元京东E卡】一张！\n",
              "type": "RICH_TEXT_NODE_TYPE_TEXT"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23%E8%A3%82%E5%8F%98%E5%A4%A9%E5%9C%B0s1%23",
              "orig_text": "#裂变天地s1#",
              "text": "#裂变天地s1#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23CS2%23",
              "orig_text": "#CS2#",
              "text": "#CS2#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23TYLOO%23",
              "orig_text": "#TYLOO#",
              "text": "#TYLOO#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23%E4%B8%AD%E5%9B%BD%E5%A4%A9%E7%A6%84%E5%88%9B%E5%8E%86%E5%8F%B2%E5%A4%BA%E5%86%A0%23",
              "orig_text": "#中国天禄创历史夺冠#",
              "text": "#中国天禄创历史夺冠#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            }
          ],
          "text": "许愿幸运呀嘿嘿，加油加油[Akie秋绘七周年_阳光可爱][Akie秋绘七周年_阳光可爱]​//@英伟达GeForce:热爱从未褪色，拼搏终有回响！\n恭喜 TYLOO 站上了世界冠军的领奖台！\n这就是 GEFORCE，这就是 CS:GO，这就是 TYLOO！\n关注@英伟达GeForce  并转发该条动态内容，我们将抽选 3 位小伙伴获得【100元京东E卡】一张！\n#裂变天地s1##CS2##TYLOO##中国天禄创历史夺冠#"
        },
        "id_str": "1092279663073427464",
        "pub_time": "2分钟前",
        "user": {
          "face": "https://i2.hdslb.com/bfs/face/2286199120c79b81bd77f1c21849288a656e52d3.webp",
          "face_nft": false,
          "mid": 1627169000,
          "name": "咚咚咚巴拉嘎嘎",
          "official": {
            "desc": "",
            "role": 0,
            "title": "",
            "type": -1
          },
          "pendant": {
            "expire": 0,
            "image": "",
            "image_enhance": "",
            "image_enhance_frame": "",
            "n_pid": 0,
            "name": "",
            "pid": 0
          },
          "vip": {
            "avatar_icon": {
              "icon_resource": {}
            },
            "avatar_subscript": 0,
            "avatar_subscript_url": "",
            "due_date": 0,
            "label": {
              "bg_color": "",
              "bg_style": 0,
              "border_color": "",
              "img_label_uri_hans": "",
              "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
              "img_label_uri_hant": "",
              "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
              "label_theme": "",
              "path": "",
              "text": "",
              "text_color": "",
              "use_img_label": true
            },
            "nickname_color": "",
            "role": 0,
            "status": 0,
            "theme_type": 0,
            "tv_due_date": 0,
            "tv_vip_pay_type": 0,
            "tv_vip_status": 0,
            "type": 0,
            "vip_pay_type": 0
          }
        }
      },
      {
        "desc": {
          "rich_text_nodes": [
            {
              "orig_text": "转发动态//",
              "text": "转发动态//",
              "type": "RICH_TEXT_NODE_TYPE_TEXT"
            },
            {
              "orig_text": "@英伟达GeForce",
              "rid": "485703766",
              "text": "@英伟达GeForce",
              "type": "RICH_TEXT_NODE_TYPE_AT"
            },
            {
              "orig_text": ":热爱从未褪色，拼搏终有回响！\n恭喜 TYLOO 站上了世界冠军的领奖台！\n这就是 GEFORCE，这就是 CS:GO，这就是 TYLOO！\n关注@英伟达GeForce 并转发该条动态内容，我们将抽选 3 位小伙伴获得【100元京东E卡】一张！\n",
              "text": ":热爱从未褪色，拼搏终有回响！\n恭喜 TYLOO 站上了世界冠军的领奖台！\n这就是 GEFORCE，这就是 CS:GO，这就是 TYLOO！\n关注@英伟达GeForce 并转发该条动态内容，我们将抽选 3 位小伙伴获得【100元京东E卡】一张！\n",
              "type": "RICH_TEXT_NODE_TYPE_TEXT"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23%E8%A3%82%E5%8F%98%E5%A4%A9%E5%9C%B0s1%23",
              "orig_text": "#裂变天地s1#",
              "text": "#裂变天地s1#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23CS2%23",
              "orig_text": "#CS2#",
              "text": "#CS2#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23TYLOO%23",
              "orig_text": "#TYLOO#",
              "text": "#TYLOO#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23%E4%B8%AD%E5%9B%BD%E5%A4%A9%E7%A6%84%E5%88%9B%E5%8E%86%E5%8F%B2%E5%A4%BA%E5%86%A0%23",
              "orig_text": "#中国天禄创历史夺冠#",
              "text": "#中国天禄创历史夺冠#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            }
          ],
          "text": "转发动态//@英伟达GeForce:热爱从未褪色，拼搏终有回响！\n恭喜 TYLOO 站上了世界冠军的领奖台！\n这就是 GEFORCE，这就是 CS:GO，这就是 TYLOO！\n关注@英伟达GeForce 并转发该条动态内容，我们将抽选 3 位小伙伴获得【100元京东E卡】一张！\n#裂变天地s1##CS2##TYLOO##中国天禄创历史夺冠#"
        },
        "id_str": "1092278962995855364",
        "pub_time": "5分钟前",
        "user": {
          "face": "https://i0.hdslb.com/bfs/face/b829e7e3a9e7b1dc8e2fb0486ddcd60e61ca9bca.jpg",
          "face_nft": false,
          "mid": 3493274574654105,
          "name": "雷冬冬加油呀",
          "official": {
            "desc": "",
            "role": 0,
            "title": "",
            "type": -1
          },
          "pendant": {
            "expire": 0,
            "image": "",
            "image_enhance": "",
            "image_enhance_frame": "",
            "n_pid": 0,
            "name": "",
            "pid": 0
          },
          "vip": {
            "avatar_icon": {
              "icon_resource": {}
            },
            "avatar_subscript": 0,
            "avatar_subscript_url": "",
            "due_date": 0,
            "label": {
              "bg_color": "",
              "bg_style": 0,
              "border_color": "",
              "img_label_uri_hans": "",
              "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
              "img_label_uri_hant": "",
              "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
              "label_theme": "",
              "path": "",
              "text": "",
              "text_color": "",
              "use_img_label": true
            },
            "nickname_color": "",
            "role": 0,
            "status": 0,
            "theme_type": 0,
            "tv_due_date": 0,
            "tv_vip_pay_type": 0,
            "tv_vip_status": 0,
            "type": 0,
            "vip_pay_type": 0
          }
        }
      },
      {
        "desc": {
          "rich_text_nodes": [
            {
              "orig_text": "转发动态//",
              "text": "转发动态//",
              "type": "RICH_TEXT_NODE_TYPE_TEXT"
            },
            {
              "orig_text": "@英伟达GeForce",
              "rid": "485703766",
              "text": "@英伟达GeForce",
              "type": "RICH_TEXT_NODE_TYPE_AT"
            },
            {
              "orig_text": ":热爱从未褪色，拼搏终有回响！\n恭喜 TYLOO 站上了世界冠军的领奖台！\n这就是 GEFORCE，这就是 CS:GO，这就是 TYLOO！\n关注@英伟达GeForce 并转发该条动态内容，我们将抽选 3 位小伙伴获得【100元京东E卡】一张！\n",
              "text": ":热爱从未褪色，拼搏终有回响！\n恭喜 TYLOO 站上了世界冠军的领奖台！\n这就是 GEFORCE，这就是 CS:GO，这就是 TYLOO！\n关注@英伟达GeForce 并转发该条动态内容，我们将抽选 3 位小伙伴获得【100元京东E卡】一张！\n",
              "type": "RICH_TEXT_NODE_TYPE_TEXT"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23%E8%A3%82%E5%8F%98%E5%A4%A9%E5%9C%B0s1%23",
              "orig_text": "#裂变天地s1#",
              "text": "#裂变天地s1#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23CS2%23",
              "orig_text": "#CS2#",
              "text": "#CS2#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23TYLOO%23",
              "orig_text": "#TYLOO#",
              "text": "#TYLOO#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23%E4%B8%AD%E5%9B%BD%E5%A4%A9%E7%A6%84%E5%88%9B%E5%8E%86%E5%8F%B2%E5%A4%BA%E5%86%A0%23",
              "orig_text": "#中国天禄创历史夺冠#",
              "text": "#中国天禄创历史夺冠#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            }
          ],
          "text": "转发动态//@英伟达GeForce:热爱从未褪色，拼搏终有回响！\n恭喜 TYLOO 站上了世界冠军的领奖台！\n这就是 GEFORCE，这就是 CS:GO，这就是 TYLOO！\n关注@英伟达GeForce 并转发该条动态内容，我们将抽选 3 位小伙伴获得【100元京东E卡】一张！\n#裂变天地s1##CS2##TYLOO##中国天禄创历史夺冠#"
        },
        "id_str": "1092278920047230984",
        "pub_time": "5分钟前",
        "user": {
          "face": "https://i1.hdslb.com/bfs/face/97630265e04024f6ae169ffc513480821058fe10.jpg",
          "face_nft": false,
          "mid": 612768016,
          "name": "宇宙尽头是被窝",
          "official": {
            "desc": "",
            "role": 0,
            "title": "",
            "type": -1
          },
          "pendant": {
            "expire": 0,
            "image": "",
            "image_enhance": "",
            "image_enhance_frame": "",
            "n_pid": 0,
            "name": "",
            "pid": 0
          },
          "vip": {
            "avatar_icon": {
              "icon_resource": {}
            },
            "avatar_subscript": 0,
            "avatar_subscript_url": "",
            "due_date": 0,
            "label": {
              "bg_color": "",
              "bg_style": 0,
              "border_color": "",
              "img_label_uri_hans": "",
              "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
              "img_label_uri_hant": "",
              "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
              "label_theme": "",
              "path": "",
              "text": "",
              "text_color": "",
              "use_img_label": true
            },
            "nickname_color": "",
            "role": 0,
            "status": 0,
            "theme_type": 0,
            "tv_due_date": 0,
            "tv_vip_pay_type": 0,
            "tv_vip_status": 0,
            "type": 0,
            "vip_pay_type": 0
          }
        }
      },
      {
        "desc": {
          "rich_text_nodes": [
            {
              "orig_text": "转发动态//",
              "text": "转发动态//",
              "type": "RICH_TEXT_NODE_TYPE_TEXT"
            },
            {
              "orig_text": "@英伟达GeForce",
              "rid": "485703766",
              "text": "@英伟达GeForce",
              "type": "RICH_TEXT_NODE_TYPE_AT"
            },
            {
              "orig_text": ":热爱从未褪色，拼搏终有回响！\n恭喜 TYLOO 站上了世界冠军的领奖台！\n这就是 GEFORCE，这就是 CS:GO，这就是 TYLOO！\n关注@英伟达GeForce 并转发该条动态内容，我们将抽选 3 位小伙伴获得【100元京东E卡】一张！\n",
              "text": ":热爱从未褪色，拼搏终有回响！\n恭喜 TYLOO 站上了世界冠军的领奖台！\n这就是 GEFORCE，这就是 CS:GO，这就是 TYLOO！\n关注@英伟达GeForce 并转发该条动态内容，我们将抽选 3 位小伙伴获得【100元京东E卡】一张！\n",
              "type": "RICH_TEXT_NODE_TYPE_TEXT"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23%E8%A3%82%E5%8F%98%E5%A4%A9%E5%9C%B0s1%23",
              "orig_text": "#裂变天地s1#",
              "text": "#裂变天地s1#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23CS2%23",
              "orig_text": "#CS2#",
              "text": "#CS2#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23TYLOO%23",
              "orig_text": "#TYLOO#",
              "text": "#TYLOO#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23%E4%B8%AD%E5%9B%BD%E5%A4%A9%E7%A6%84%E5%88%9B%E5%8E%86%E5%8F%B2%E5%A4%BA%E5%86%A0%23",
              "orig_text": "#中国天禄创历史夺冠#",
              "text": "#中国天禄创历史夺冠#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            }
          ],
          "text": "转发动态//@英伟达GeForce:热爱从未褪色，拼搏终有回响！\n恭喜 TYLOO 站上了世界冠军的领奖台！\n这就是 GEFORCE，这就是 CS:GO，这就是 TYLOO！\n关注@英伟达GeForce 并转发该条动态内容，我们将抽选 3 位小伙伴获得【100元京东E卡】一张！\n#裂变天地s1##CS2##TYLOO##中国天禄创历史夺冠#"
        },
        "id_str": "1092278580747960353",
        "pub_time": "6分钟前",
        "user": {
          "face": "https://i0.hdslb.com/bfs/face/a5ae348d6ab686e17ab0e2acd5a0d12f4908f55f.jpg",
          "face_nft": false,
          "mid": 1603962291,
          "name": "天堂尿壶_全神贯注",
          "official": {
            "desc": "",
            "role": 0,
            "title": "",
            "type": -1
          },
          "pendant": {
            "expire": 0,
            "image": "",
            "image_enhance": "",
            "image_enhance_frame": "",
            "n_pid": 0,
            "name": "",
            "pid": 0
          },
          "vip": {
            "avatar_icon": {
              "icon_resource": {}
            },
            "avatar_subscript": 0,
            "avatar_subscript_url": "",
            "due_date": 0,
            "label": {
              "bg_color": "",
              "bg_style": 0,
              "border_color": "",
              "img_label_uri_hans": "",
              "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
              "img_label_uri_hant": "",
              "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
              "label_theme": "",
              "path": "",
              "text": "",
              "text_color": "",
              "use_img_label": true
            },
            "nickname_color": "",
            "role": 0,
            "status": 0,
            "theme_type": 0,
            "tv_due_date": 0,
            "tv_vip_pay_type": 0,
            "tv_vip_status": 0,
            "type": 0,
            "vip_pay_type": 0
          }
        }
      },
      {
        "desc": {
          "rich_text_nodes": [
            {
              "jump_url": "https://b23.tv/7cYpOev",
              "orig_text": "https://b23.tv/7cYpOev",
              "text": "网页链接",
              "type": "RICH_TEXT_NODE_TYPE_WEB"
            },
            {
              "orig_text": "\ncncs",
              "text": "\ncncs",
              "type": "RICH_TEXT_NODE_TYPE_TEXT"
            },
            {
              "emoji": {
                "icon_url": "https://i0.hdslb.com/bfs/garb/55b2580bd5c24f87d3910ef8bd7bd70bb6bc22de.png",
                "size": 2,
                "text": "[青春烟火静态表情包_比心心]",
                "type": 3
              },
              "orig_text": "[青春烟火静态表情包_比心心]",
              "text": "[青春烟火静态表情包_比心心]",
              "type": "RICH_TEXT_NODE_TYPE_EMOJI"
            },
            {
              "emoji": {
                "icon_url": "https://i0.hdslb.com/bfs/garb/55b2580bd5c24f87d3910ef8bd7bd70bb6bc22de.png",
                "size": 2,
                "text": "[青春烟火静态表情包_比心心]",
                "type": 3
              },
              "orig_text": "[青春烟火静态表情包_比心心]",
              "text": "[青春烟火静态表情包_比心心]",
              "type": "RICH_TEXT_NODE_TYPE_EMOJI"
            },
            {
              "orig_text": "​//",
              "text": "​//",
              "type": "RICH_TEXT_NODE_TYPE_TEXT"
            },
            {
              "orig_text": "@英伟达GeForce",
              "rid": "485703766",
              "text": "@英伟达GeForce",
              "type": "RICH_TEXT_NODE_TYPE_AT"
            },
            {
              "orig_text": ":热爱从未褪色，拼搏终有回响！\n恭喜 TYLOO 站上了世界冠军的领奖台！\n这就是 GEFORCE，这就是 CS:GO，这就是 TYLOO！\n关注",
              "text": ":热爱从未褪色，拼搏终有回响！\n恭喜 TYLOO 站上了世界冠军的领奖台！\n这就是 GEFORCE，这就是 CS:GO，这就是 TYLOO！\n关注",
              "type": "RICH_TEXT_NODE_TYPE_TEXT"
            },
            {
              "orig_text": "@英伟达GeForce ",
              "rid": "485703766",
              "text": "@英伟达GeForce ",
              "type": "RICH_TEXT_NODE_TYPE_AT"
            },
            {
              "orig_text": " 并转发该条动态内容，我们将抽选 3 位小伙伴获得【100元京东E卡】一张！\n",
              "text": " 并转发该条动态内容，我们将抽选 3 位小伙伴获得【100元京东E卡】一张！\n",
              "type": "RICH_TEXT_NODE_TYPE_TEXT"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23%E8%A3%82%E5%8F%98%E5%A4%A9%E5%9C%B0s1%23",
              "orig_text": "#裂变天地s1#",
              "text": "#裂变天地s1#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23CS2%23",
              "orig_text": "#CS2#",
              "text": "#CS2#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23TYLOO%23",
              "orig_text": "#TYLOO#",
              "text": "#TYLOO#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23%E4%B8%AD%E5%9B%BD%E5%A4%A9%E7%A6%84%E5%88%9B%E5%8E%86%E5%8F%B2%E5%A4%BA%E5%86%A0%23",
              "orig_text": "#中国天禄创历史夺冠#",
              "text": "#中国天禄创历史夺冠#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            }
          ],
          "text": "https://b23.tv/7cYpOev\ncncs[青春烟火静态表情包_比心心][青春烟火静态表情包_比心心]​//@英伟达GeForce:热爱从未褪色，拼搏终有回响！\n恭喜 TYLOO 站上了世界冠军的领奖台！\n这就是 GEFORCE，这就是 CS:GO，这就是 TYLOO！\n关注@英伟达GeForce  并转发该条动态内容，我们将抽选 3 位小伙伴获得【100元京东E卡】一张！\n#裂变天地s1##CS2##TYLOO##中国天禄创历史夺冠#"
        },
        "id_str": "1092278374586384390",
        "pub_time": "7分钟前",
        "user": {
          "face": "https://i0.hdslb.com/bfs/baselabs/ad8743f86fbf3c0afe80505ef2fcf7c567d99cd5.png",
          "face_nft": true,
          "mid": 3546570991601673,
          "name": "敷料",
          "official": {
            "desc": "",
            "role": 0,
            "title": "",
            "type": -1
          },
          "pendant": {
            "expire": 0,
            "image": "https://i0.hdslb.com/bfs/garb/open/e9857ee50a657bf8bc004296d1486522489f9ce9.png",
            "image_enhance": "https://i0.hdslb.com/bfs/garb/open/e9857ee50a657bf8bc004296d1486522489f9ce9.png",
            "image_enhance_frame": "",
            "n_pid": 1733371830001,
            "name": "元大头像挂件",
            "pid": -1794957583
          },
          "vip": {
            "avatar_icon": {
              "icon_resource": {}
            },
            "avatar_subscript": 0,
            "avatar_subscript_url": "",
            "due_date": 1724774400000,
            "label": {
              "bg_color": "",
              "bg_style": 0,
              "border_color": "",
              "img_label_uri_hans": "",
              "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
              "img_label_uri_hant": "",
              "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
              "label_theme": "",
              "path": "",
              "text": "",
              "text_color": "",
              "use_img_label": true
            },
            "nickname_color": "",
            "role": 0,
            "status": 0,
            "theme_type": 0,
            "tv_due_date": 0,
            "tv_vip_pay_type": 0,
            "tv_vip_status": 0,
            "type": 1,
            "vip_pay_type": 0
          }
        }
      },
      {
        "desc": {
          "rich_text_nodes": [
            {
              "orig_text": "//",
              "text": "//",
              "type": "RICH_TEXT_NODE_TYPE_TEXT"
            },
            {
              "orig_text": "@英伟达GeForce",
              "rid": "485703766",
              "text": "@英伟达GeForce",
              "type": "RICH_TEXT_NODE_TYPE_AT"
            },
            {
              "orig_text": ":热爱从未褪色，拼搏终有回响！\n恭喜 TYLOO 站上了世界冠军的领奖台！\n这就是 GEFORCE，这就是 CS:GO，这就是 TYLOO！\n关注",
              "text": ":热爱从未褪色，拼搏终有回响！\n恭喜 TYLOO 站上了世界冠军的领奖台！\n这就是 GEFORCE，这就是 CS:GO，这就是 TYLOO！\n关注",
              "type": "RICH_TEXT_NODE_TYPE_TEXT"
            },
            {
              "orig_text": "@英伟达GeForce",
              "rid": "485703766",
              "text": "@英伟达GeForce",
              "type": "RICH_TEXT_NODE_TYPE_AT"
            },
            {
              "orig_text": " 并转发该条动态内容，我们将抽选 3 位小伙伴获得【100元京东E卡】一张！\n",
              "text": " 并转发该条动态内容，我们将抽选 3 位小伙伴获得【100元京东E卡】一张！\n",
              "type": "RICH_TEXT_NODE_TYPE_TEXT"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23%E8%A3%82%E5%8F%98%E5%A4%A9%E5%9C%B0s1%23",
              "orig_text": "#裂变天地s1#",
              "text": "#裂变天地s1#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23CS2%23",
              "orig_text": "#CS2#",
              "text": "#CS2#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23TYLOO%23",
              "orig_text": "#TYLOO#",
              "text": "#TYLOO#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23%E4%B8%AD%E5%9B%BD%E5%A4%A9%E7%A6%84%E5%88%9B%E5%8E%86%E5%8F%B2%E5%A4%BA%E5%86%A0%23",
              "orig_text": "#中国天禄创历史夺冠#",
              "text": "#中国天禄创历史夺冠#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            }
          ],
          "text": "//@英伟达GeForce:热爱从未褪色，拼搏终有回响！\n恭喜 TYLOO 站上了世界冠军的领奖台！\n这就是 GEFORCE，这就是 CS:GO，这就是 TYLOO！\n关注@英伟达GeForce 并转发该条动态内容，我们将抽选 3 位小伙伴获得【100元京东E卡】一张！\n#裂变天地s1##CS2##TYLOO##中国天禄创历史夺冠#"
        },
        "id_str": "1092277777626824725",
        "pub_time": "9分钟前",
        "user": {
          "face": "https://i0.hdslb.com/bfs/face/3283cc839ebb4f745891ef2b3eb52b608dc6287e.jpg",
          "face_nft": false,
          "mid": 241814478,
          "name": "巧克力糖三角",
          "official": {
            "desc": "",
            "role": 0,
            "title": "",
            "type": -1
          },
          "pendant": {
            "expire": 0,
            "image": "",
            "image_enhance": "",
            "image_enhance_frame": "",
            "n_pid": 0,
            "name": "",
            "pid": 0
          },
          "vip": {
            "avatar_icon": {
              "icon_resource": {},
              "icon_type": 1
            },
            "avatar_subscript": 1,
            "avatar_subscript_url": "",
            "due_date": 1756569600000,
            "label": {
              "bg_color": "#FB7299",
              "bg_style": 1,
              "border_color": "",
              "img_label_uri_hans": "",
              "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
              "img_label_uri_hant": "",
              "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
              "label_theme": "annual_vip",
              "path": "http://i0.hdslb.com/bfs/vip/label_annual.png",
              "text": "年度大会员",
              "text_color": "#FFFFFF",
              "use_img_label": true
            },
            "nickname_color": "#FB7299",
            "role": 3,
            "status": 1,
            "theme_type": 0,
            "tv_due_date": 0,
            "tv_vip_pay_type": 0,
            "tv_vip_status": 0,
            "type": 2,
            "vip_pay_type": 0
          }
        }
      },
      {
        "desc": {
          "rich_text_nodes": [
            {
              "orig_text": "转发动态//",
              "text": "转发动态//",
              "type": "RICH_TEXT_NODE_TYPE_TEXT"
            },
            {
              "orig_text": "@英伟达GeForce",
              "rid": "485703766",
              "text": "@英伟达GeForce",
              "type": "RICH_TEXT_NODE_TYPE_AT"
            },
            {
              "orig_text": ":热爱从未褪色，拼搏终有回响！\n恭喜 TYLOO 站上了世界冠军的领奖台！\n这就是 GEFORCE，这就是 CS:GO，这就是 TYLOO！\n关注",
              "text": ":热爱从未褪色，拼搏终有回响！\n恭喜 TYLOO 站上了世界冠军的领奖台！\n这就是 GEFORCE，这就是 CS:GO，这就是 TYLOO！\n关注",
              "type": "RICH_TEXT_NODE_TYPE_TEXT"
            },
            {
              "orig_text": "@英伟达GeForce",
              "rid": "485703766",
              "text": "@英伟达GeForce",
              "type": "RICH_TEXT_NODE_TYPE_AT"
            },
            {
              "orig_text": " 并转发该条动态内容，我们将抽选 3 位小伙伴获得【100元京东E卡】一张！\n",
              "text": " 并转发该条动态内容，我们将抽选 3 位小伙伴获得【100元京东E卡】一张！\n",
              "type": "RICH_TEXT_NODE_TYPE_TEXT"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23%E8%A3%82%E5%8F%98%E5%A4%A9%E5%9C%B0s1%23",
              "orig_text": "#裂变天地s1#",
              "text": "#裂变天地s1#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23CS2%23",
              "orig_text": "#CS2#",
              "text": "#CS2#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23TYLOO%23",
              "orig_text": "#TYLOO#",
              "text": "#TYLOO#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23%E4%B8%AD%E5%9B%BD%E5%A4%A9%E7%A6%84%E5%88%9B%E5%8E%86%E5%8F%B2%E5%A4%BA%E5%86%A0%23",
              "orig_text": "#中国天禄创历史夺冠#",
              "text": "#中国天禄创历史夺冠#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            }
          ],
          "text": "转发动态//@英伟达GeForce:热爱从未褪色，拼搏终有回响！\n恭喜 TYLOO 站上了世界冠军的领奖台！\n这就是 GEFORCE，这就是 CS:GO，这就是 TYLOO！\n关注@英伟达GeForce 并转发该条动态内容，我们将抽选 3 位小伙伴获得【100元京东E卡】一张！\n#裂变天地s1##CS2##TYLOO##中国天禄创历史夺冠#"
        },
        "id_str": "1092277631582208005",
        "pub_time": "10分钟前",
        "user": {
          "face": "https://i2.hdslb.com/bfs/face/44b28a33ee43080ba8ce3b004f61c6f6a8f84ae2.jpg",
          "face_nft": false,
          "mid": 385330502,
          "name": "LunariaFox",
          "official": {
            "desc": "",
            "role": 0,
            "title": "",
            "type": -1
          },
          "pendant": {
            "expire": 0,
            "image": "",
            "image_enhance": "",
            "image_enhance_frame": "",
            "n_pid": 0,
            "name": "",
            "pid": 0
          },
          "vip": {
            "avatar_icon": {
              "icon_resource": {}
            },
            "avatar_subscript": 0,
            "avatar_subscript_url": "",
            "due_date": 1671292800000,
            "label": {
              "bg_color": "",
              "bg_style": 0,
              "border_color": "",
              "img_label_uri_hans": "",
              "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
              "img_label_uri_hant": "",
              "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
              "label_theme": "",
              "path": "",
              "text": "",
              "text_color": "",
              "use_img_label": true
            },
            "nickname_color": "",
            "role": 0,
            "status": 0,
            "theme_type": 0,
            "tv_due_date": 0,
            "tv_vip_pay_type": 0,
            "tv_vip_status": 0,
            "type": 1,
            "vip_pay_type": 0
          }
        }
      },
      {
        "desc": {
          "rich_text_nodes": [
            {
              "orig_text": "转发动态//",
              "text": "转发动态//",
              "type": "RICH_TEXT_NODE_TYPE_TEXT"
            },
            {
              "orig_text": "@英伟达GeForce",
              "rid": "485703766",
              "text": "@英伟达GeForce",
              "type": "RICH_TEXT_NODE_TYPE_AT"
            },
            {
              "orig_text": ":热爱从未褪色，拼搏终有回响！\n恭喜 TYLOO 站上了世界冠军的领奖台！\n这就是 GEFORCE，这就是 CS:GO，这就是 TYLOO！\n关注@英伟达GeForce 并转发该条动态内容，我们将抽选 3 位小伙伴获得【100元京东E卡】一张！\n",
              "text": ":热爱从未褪色，拼搏终有回响！\n恭喜 TYLOO 站上了世界冠军的领奖台！\n这就是 GEFORCE，这就是 CS:GO，这就是 TYLOO！\n关注@英伟达GeForce 并转发该条动态内容，我们将抽选 3 位小伙伴获得【100元京东E卡】一张！\n",
              "type": "RICH_TEXT_NODE_TYPE_TEXT"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23%E8%A3%82%E5%8F%98%E5%A4%A9%E5%9C%B0s1%23",
              "orig_text": "#裂变天地s1#",
              "text": "#裂变天地s1#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23CS2%23",
              "orig_text": "#CS2#",
              "text": "#CS2#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23TYLOO%23",
              "orig_text": "#TYLOO#",
              "text": "#TYLOO#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            },
            {
              "jump_url": "//search.bilibili.com/all?keyword=%23%E4%B8%AD%E5%9B%BD%E5%A4%A9%E7%A6%84%E5%88%9B%E5%8E%86%E5%8F%B2%E5%A4%BA%E5%86%A0%23",
              "orig_text": "#中国天禄创历史夺冠#",
              "text": "#中国天禄创历史夺冠#",
              "type": "RICH_TEXT_NODE_TYPE_TOPIC"
            }
          ],
          "text": "转发动态//@英伟达GeForce:热爱从未褪色，拼搏终有回响！\n恭喜 TYLOO 站上了世界冠军的领奖台！\n这就是 GEFORCE，这就是 CS:GO，这就是 TYLOO！\n关注@英伟达GeForce 并转发该条动态内容，我们将抽选 3 位小伙伴获得【100元京东E卡】一张！\n#裂变天地s1##CS2##TYLOO##中国天禄创历史夺冠#"
        },
        "id_str": "1092276742539706437",
        "pub_time": "13分钟前",
        "user": {
          "face": "https://i0.hdslb.com/bfs/face/3485b31e66a5edcc35da91daccf92d8374b75109.jpg",
          "face_nft": false,
          "mid": 261738771,
          "name": "ak青旗沽酒",
          "official": {
            "desc": "",
            "role": 0,
            "title": "",
            "type": -1
          },
          "pendant": {
            "expire": 0,
            "image": "",
            "image_enhance": "",
            "image_enhance_frame": "",
            "n_pid": 0,
            "name": "",
            "pid": 0
          },
          "vip": {
            "avatar_icon": {
              "icon_resource": {}
            },
            "avatar_subscript": 0,
            "avatar_subscript_url": "",
            "due_date": 1721318400000,
            "label": {
              "bg_color": "",
              "bg_style": 0,
              "border_color": "",
              "img_label_uri_hans": "",
              "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
              "img_label_uri_hant": "",
              "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
              "label_theme": "",
              "path": "",
              "text": "",
              "text_color": "",
              "use_img_label": true
            },
            "nickname_color": "",
            "role": 0,
            "status": 0,
            "theme_type": 0,
            "tv_due_date": 0,
            "tv_vip_pay_type": 0,
            "tv_vip_status": 0,
            "type": 1,
            "vip_pay_type": 0
          }
        }
      }
    ],
    "offset": "1092276742539706437",
    "total": 1290
  },
  "message": "0",
  "ttl": 1
}
```
</details>

<!-- Generated by json-apidoc-gen @ 2025-07-22T03:25:21.567940914Z -->

## 获取动态中图片

> https://api.bilibili.com/x/polymer/web-dynamic/v1/detail/pic

*请求方法: GET*

<!-- #1303 -->

**URL 参数:**

| 字段 | 类型   | 内容    | 必要性 | 备注 |
| ---- | ------ | ------- | ------ | ---- |
| id   | number | 动态 id | 必要   |      |

**JSON 回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| code | number | 返回值 |  |
| data | object[] | 数据本体 |  |
| message | string | 错误信息 | 成功时为 `0` |
| ttl | number | `1` |  |

`data[]` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| height | number | 图片高度 |  |
| size | number | 图片大小 | k |
| src | string | 图片 URL |  |
| width | number | 图片宽度 |  |

**示例:**

```shell
-curl -G 'https://api.bilibili.com/x/polymer/web-dynamic/v1/detail/pic' \
--url-query 'id=1092404028147499014'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "data": [
    {
      "height": 20112,
      "size": 9609.4560546875,
      "src": "http://i0.hdslb.com/bfs/new_dyn/b3ca19b4a65c2f847fa91d925495eb3f36081646.jpg",
      "width": 4167
    },
    {
      "height": 21146,
      "size": 6948.43359375,
      "src": "http://i0.hdslb.com/bfs/new_dyn/60b1549d91ce580a8499f63368b283fc36081646.jpg",
      "width": 4167
    },
    {
      "height": 29531,
      "size": 10990.845703125,
      "src": "http://i0.hdslb.com/bfs/new_dyn/598a158fff8a5814fe85ae0f9212b1cf36081646.jpg",
      "width": 4167
    }
  ],
  "message": "0",
  "ttl": 1
}
```
</details>

<!-- Generated by json-apidoc-gen @ 2025-07-23T01:44:31.058550428Z -->

## 获取转发动态信息

> https://api.bilibili.com/x/polymer/web-dynamic/v1/detail/forward/item

*请求方法: GET*

认证方式: Cookie (SESSDATA)

**URL 参数:**

| 字段 | 类型   | 内容    | 必要性 | 备注 |
| ---- | ------ | ------ | ---- | ---- |
| id   | number | 动态 id | 必要   |      |
| timezone_offset | number | 时区偏移 | 非必要 | `(new Date).getTimezoneOffset()` |

**JSON 回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| code | number | 返回值 | 0: 成功<br />500: 加载错误，请稍后再试<br />4101105: 请求数据发生错误, 请刷新或稍后重试 |
| data | object | 数据本体 |  |
| message | string | 错误信息 | 成功时为 `0` |
| ttl | number | `1` |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| item | object | 动态信息 | 套了个娃 |

`data.item` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| desc | object | 动态内容 |  |
| id_str | string | 动态 id 字符串 |  |
| pub_time | string | 发布时间 |  |
| user | object | 发布用户信息 |  |

`data.item.desc` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| rich_text_nodes | object[] | 富文本节点 | 参见 [富文本节点](../opus/rich_text_node.md) |
| text | string | 纯文本内容 |  |

`data.item.user` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| face | string | 头像 URL |  |
| face_nft | boolean |  |  |
| mid | number | 用户 mid (UID) |  |
| name | string | 用户名 |  |
| official | object | 认证信息 |  |
| pendant | object | 装扮信息 |  |
| vip | object | 大会员信息 |  |

`data.item.user.official` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| desc | string |  |  |
| role | number |  |  |
| title | string |  |  |
| type | number |  |  |

`data.item.user.pendant` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| expire | number |  |  |
| image | string |  |  |
| image_enhance | string |  |  |
| image_enhance_frame | string |  |  |
| n_pid | number |  |  |
| name | string |  |  |
| pid | number |  |  |

`data.item.user.vip` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| avatar_icon | object |  |  |
| avatar_subscript | number |  |  |
| avatar_subscript_url | string |  |  |
| due_date | number |  |  |
| label | object |  |  |
| nickname_color | string |  |  |
| role | number |  |  |
| status | number |  |  |
| theme_type | number |  |  |
| tv_due_date | number |  |  |
| tv_vip_pay_type | number |  |  |
| tv_vip_status | number |  |  |
| type | number |  |  |
| vip_pay_type | number |  |  |

`data.item.user.vip.avatar_icon` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| icon_resource | object |  |  |
| icon_type | number |  |  |

`data.item.user.vip.avatar_icon.icon_resource` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |

`data.item.user.vip.label` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| bg_color | string |  |  |
| bg_style | number |  |  |
| border_color | string |  |  |
| img_label_uri_hans | string |  |  |
| img_label_uri_hans_static | string |  |  |
| img_label_uri_hant | string |  |  |
| img_label_uri_hant_static | string |  |  |
| label_theme | string |  |  |
| path | string |  |  |
| text | string |  |  |
| text_color | string |  |  |
| use_img_label | boolean |  |  |

**示例:**

```shell
curl -G 'https://api.bilibili.com/x/polymer/web-dynamic/v1/detail/forward/item' \
--url-query 'id=1100082020923473952' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "data": {
    "item": {
      "desc": {
        "rich_text_nodes": [
          {
            "orig_text": "分享视频",
            "text": "分享视频",
            "type": "RICH_TEXT_NODE_TYPE_TEXT"
          }
        ],
        "text": "分享视频"
      },
      "id_str": "1074491510557245446",
      "pub_time": "06月04日",
      "user": {
        "face": "https://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg",
        "face_nft": false,
        "mid": 293793435,
        "name": "社会易姐QwQ",
        "official": {
          "desc": "",
          "role": 0,
          "title": "",
          "type": -1
        },
        "pendant": {
          "expire": 0,
          "image": "https://i0.hdslb.com/bfs/garb/item/4f8f3f1f2d47f0dad84f66aa57acd4409ea46361.png",
          "image_enhance": "https://i0.hdslb.com/bfs/garb/item/fe0b83b53e2342b16646f6e7a9370d8a867decdb.webp",
          "image_enhance_frame": "https://i0.hdslb.com/bfs/garb/item/127c507ec8448be30cf5f79500ecc6ef2fd32f2c.png",
          "n_pid": 2511,
          "name": "初音未来13周年",
          "pid": 2511
        },
        "vip": {
          "avatar_icon": {
            "icon_resource": {},
            "icon_type": 1
          },
          "avatar_subscript": 1,
          "avatar_subscript_url": "",
          "due_date": 1770825600000,
          "label": {
            "bg_color": "#FB7299",
            "bg_style": 1,
            "border_color": "",
            "img_label_uri_hans": "",
            "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
            "img_label_uri_hant": "",
            "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
            "label_theme": "annual_vip",
            "path": "http://i0.hdslb.com/bfs/vip/label_annual.png",
            "text": "年度大会员",
            "text_color": "#FFFFFF",
            "use_img_label": true
          },
          "nickname_color": "#FB7299",
          "role": 3,
          "status": 1,
          "theme_type": 0,
          "tv_due_date": 1640793600,
          "tv_vip_pay_type": 0,
          "tv_vip_status": 0,
          "type": 2,
          "vip_pay_type": 0
        }
      }
    }
  },
  "message": "0",
  "ttl": 1
}
```
</details>

<!-- Generated by json-apidoc-gen @ 2025-08-12T08:52:29.430524983Z -->
