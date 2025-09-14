# 用户空间动态

## 获取用户空间动态

> https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/space
> 
> https://api.bilibili.com/x/polymer/web-dynamic/desktop/v1/feed/space

*请求方法: GET*

鉴权方式:
* 未登录: 请求标头 `User-Agent` 字段, `Cookie` 需含 `buvid3`; WBI 签名, `dm_img` 系列风控
* 已登录: 请求标头 `Cookie` 含有效 `SESSDATA`

注: 该接口现在有一些奇奇怪怪的校验, 存在一定运气成分, 参见 [#686](https://github.com/SocialSisterYi/bilibili-API-collect/issues/686), 所以建议您还是登录吧~

**URL 参数:**

| 参数名          | 类型   | 内容   | 必要性 | 备注  |
|-----------------|--------|--------|-----| - |
| offset          | string | 分页偏移量 | 不必要 |     |
| host_mid        | string | 被查询用户 UID (mid)  |必要| |
| timezone_offset | number | 时区偏移| 不必要| 默认 `-480` |
| platform        | string | 平台 | 不必要 | 如 `web` |
| features        | string | 功能 | 不必要 | 留空为空, 默认为 `itemOpusStyle,listOnlyfans,opusBigCover,onlyfansVote,forwardListHidden,decorationCard,commentsNewVersion,onlyfansAssetsV2,ugcDelete,onlyfansQaCard`, 参见 [功能模块](../opus/features.md#features) |
| web_location    | string | `333.1387` | 不必要 |  |
| dm_img_switch   | number | `0` | 不必要 | 仅登录时存在 |
| dm_img_list     | object[] | `dm_img` 系列风控 | 不必要 | 仅未登录时存在 |
| dm_img_str      | string |  `dm_img` 系列风控 | 不必要 | 仅未登录时存在 |
| dm_cover_img_str | string |  `dm_img` 系列风控 | 不必要 | 仅未登录时存在 |
| dm_img_inter    | object | `dm_img` 系列风控 | 不必要 | 仅未登录时存在 |
| x-bili-device-req-json | object | `{"platform":"web","device":"pc"}` | 不必要 | |
| x-bili-web-req-json | object | `{"spm_id":"333.1387"}` | 不必要 |  |
| w_rid           | string | WBI 签名 | 不必要 | 参见 [WBI 签名](../misc/sign/wbi.md) |
| wts             | number | UNIX 秒级时间戳 | 不必要 | 参见 [WBI 签名](../misc/sign/wbi.md) |

**JSON 回复:**

可参考 [获取动态列表](./all.md#获取动态列表)

**示例:**

```shell
curl 'https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/space?host_mid=2095498218&features=itemOpusStyle,listOnlyfans,opusBigCover,onlyfansVote,forwardListHidden,decorationCard,commentsNewVersion,onlyfansAssetsV2,ugcDelete,onlyfansQaCard' \
-b 'SESSDATA=xxx'
```

<details>
<summary>点击查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "has_more": true,
    "items": [
      {
        "basic": {
          "comment_id_str": "349795473",
          "comment_type": 11,
          "jump_url": "//www.bilibili.com/opus/1063487284684259332",
          "like_icon": {
            "action_url": "https://i0.hdslb.com/bfs/garb/item/cb34de5fbca6b8507adf7364ae785822b74df1f9.bin",
            "end_url": "",
            "id": 68554,
            "start_url": ""
          },
          "rid_str": "349795473"
        },
        "id_str": "1063487284684259332",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.375,
                "width": 1.375
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.787,
                        "width": 0.787
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
                            "url": "https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1.375,
                        "width": 1.375
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "PENDENT_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png"
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
              "mid": "2095498218"
            },
            "decoration_card": {
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "card_type": 2,
              "card_type_name": "免费",
              "card_url": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "fan": {
                "color": "#a465e5",
                "color_format": {
                  "colors": [
                    "#a465e5FF",
                    "#a465e5FF"
                  ],
                  "end_point": "0,100",
                  "gradients": [
                    0,
                    100
                  ],
                  "start_point": "0,0"
                },
                "is_fan": 1,
                "name": "坠落·空",
                "num_desc": "002272",
                "number": 2272
              },
              "id": 68557,
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "item_id": 68557,
              "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=68557&isdiy=0&part=card&from=post&f_source=garb&vmid=2095498218&native.theme=1&navhide=1",
              "name": "坠落·空粉丝"
            },
            "face": "https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg",
            "face_nft": false,
            "following": null,
            "jump_url": "//space.bilibili.com/2095498218/dynamic",
            "label": "",
            "mid": 2095498218,
            "name": "次元壁小宋",
            "official_verify": {
              "desc": "",
              "type": -1
            },
            "pendant": {
              "expire": 0,
              "image": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png",
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png",
              "image_enhance_frame": "",
              "n_pid": 68553,
              "name": "坠落·空",
              "pid": 68553
            },
            "pub_action": "",
            "pub_location_text": "",
            "pub_time": "27分钟前",
            "pub_ts": 1746450829,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 0,
              "avatar_subscript_url": "",
              "due_date": 1683129600000,
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
            "desc": null,
            "major": {
              "opus": {
                "fold_action": [
                  "展开",
                  "收起"
                ],
                "jump_url": "//www.bilibili.com/opus/1063487284684259332",
                "pics": [
                  {
                    "height": 512,
                    "live_url": null,
                    "size": 9.783203125,
                    "url": "http://i0.hdslb.com/bfs/new_dyn/8bc3298efe55f2fc3949678538ed5fa52095498218.png",
                    "width": 512
                  }
                ],
                "summary": {
                  "rich_text_nodes": [
                    {
                      "orig_text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a augue eget sapien ultricies tristique. Integer rutrum convallis elit et vestibulum. Proin porta magna id congue lobortis. Vestibulum et arcu vestibulum, dignissim est ultrices, laoreet lectus. Nam sed sem vehicula, iaculis lorem ac, tempor arcu. Aliquam nec porta sapien. Nam convallis iaculis urna, et varius dolor. Sed non pellentesque enim. Praesent molestie efficitur rutrum. Nunc sit amet tempus nisl, at sodales augue. Nunc eu risus quis eros euismod rhoncus quis at purus. Aliquam vulputate magna non enim dapibus vestibulum. Sed pellentesque leo eget imperdiet viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;\n\nUt porta non ex quis porta. Proin maximus, diam eget commodo tempus, justo libero ultricies ante, feugiat elementum sem ante sit amet magna. Donec auctor arcu sed ligula imperdiet, eget iaculis nunc mollis.",
                      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a augue eget sapien ultricies tristique. Integer rutrum convallis elit et vestibulum. Proin porta magna id congue lobortis. Vestibulum et arcu vestibulum, dignissim est ultrices, laoreet lectus. Nam sed sem vehicula, iaculis lorem ac, tempor arcu. Aliquam nec porta sapien. Nam convallis iaculis urna, et varius dolor. Sed non pellentesque enim. Praesent molestie efficitur rutrum. Nunc sit amet tempus nisl, at sodales augue. Nunc eu risus quis eros euismod rhoncus quis at purus. Aliquam vulputate magna non enim dapibus vestibulum. Sed pellentesque leo eget imperdiet viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;\n\nUt porta non ex quis porta. Proin maximus, diam eget commodo tempus, justo libero ultricies ante, feugiat elementum sem ante sit amet magna. Donec auctor arcu sed ligula imperdiet, eget iaculis nunc mollis.",
                      "type": "RICH_TEXT_NODE_TYPE_TEXT"
                    }
                  ],
                  "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a augue eget sapien ultricies tristique. Integer rutrum convallis elit et vestibulum. Proin porta magna id congue lobortis. Vestibulum et arcu vestibulum, dignissim est ultrices, laoreet lectus. Nam sed sem vehicula, iaculis lorem ac, tempor arcu. Aliquam nec porta sapien. Nam convallis iaculis urna, et varius dolor. Sed non pellentesque enim. Praesent molestie efficitur rutrum. Nunc sit amet tempus nisl, at sodales augue. Nunc eu risus quis eros euismod rhoncus quis at purus. Aliquam vulputate magna non enim dapibus vestibulum. Sed pellentesque leo eget imperdiet viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;\n\nUt porta non ex quis porta. Proin maximus, diam eget commodo tempus, justo libero ultricies ante, feugiat elementum sem ante sit amet magna. Donec auctor arcu sed ligula imperdiet, eget iaculis nunc mollis."
                },
                "title": "Lorem ipsum dolor si"
              },
              "type": "MAJOR_TYPE_OPUS"
            },
            "topic": null
          },
          "module_interaction": {
            "items": [
              {
                "desc": {
                  "rich_text_nodes": [
                    {
                      "orig_text": "RPG_Teng_Lin",
                      "rid": "357413690",
                      "text": "RPG_Teng_Lin",
                      "type": "RICH_TEXT_NODE_TYPE_AT"
                    },
                    {
                      "orig_text": " 赞了",
                      "text": " 赞了",
                      "type": "RICH_TEXT_NODE_TYPE_TEXT"
                    }
                  ],
                  "text": ""
                },
                "type": 0
              }
            ]
          },
          "module_more": {
            "three_point_items": [
              {
                "label": "取消置顶",
                "params": {
                  "dynamic_id": "1063487284684259332",
                  "status": true
                },
                "type": "THREE_POINT_TOP"
              },
              {
                "label": "删除",
                "modal": {
                  "cancel": "取消",
                  "confirm": "确认删除",
                  "content": "动态删除后将无法恢复，请谨慎操作",
                  "title": "要删除动态吗？"
                },
                "params": {
                  "dyn_id_str": "1063487284684259332",
                  "dyn_type": 2,
                  "rid_str": "349795473"
                },
                "type": "THREE_POINT_DELETE"
              }
            ]
          },
          "module_stat": {
            "comment": {
              "count": 0,
              "forbidden": false
            },
            "forward": {
              "count": 0,
              "forbidden": false
            },
            "like": {
              "count": 1,
              "forbidden": false,
              "status": false
            }
          },
          "module_tag": {
            "text": "置顶"
          }
        },
        "type": "DYNAMIC_TYPE_DRAW",
        "visible": true
      },
      {
        "basic": {
          "comment_id_str": "114443295918557",
          "comment_type": 1,
          "like_icon": {
            "action_url": "https://i0.hdslb.com/bfs/garb/item/cb34de5fbca6b8507adf7364ae785822b74df1f9.bin",
            "end_url": "",
            "id": 68554,
            "start_url": ""
          },
          "rid_str": "114443295918557"
        },
        "id_str": "1062695803784527872",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.375,
                "width": 1.375
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.787,
                        "width": 0.787
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
                            "url": "https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1.375,
                        "width": 1.375
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "PENDENT_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png"
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
              "mid": "2095498218"
            },
            "decoration_card": {
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "card_type": 2,
              "card_type_name": "免费",
              "card_url": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "fan": {
                "color": "#a465e5",
                "color_format": {
                  "colors": [
                    "#a465e5FF",
                    "#a465e5FF"
                  ],
                  "end_point": "0,100",
                  "gradients": [
                    0,
                    100
                  ],
                  "start_point": "0,0"
                },
                "is_fan": 1,
                "name": "坠落·空",
                "num_desc": "002272",
                "number": 2272
              },
              "id": 68557,
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "item_id": 68557,
              "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=68557&isdiy=0&part=card&from=post&f_source=garb&vmid=2095498218&native.theme=1&navhide=1",
              "name": "坠落·空粉丝"
            },
            "face": "https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg",
            "face_nft": false,
            "following": null,
            "jump_url": "//space.bilibili.com/2095498218/dynamic",
            "label": "",
            "mid": 2095498218,
            "name": "次元壁小宋",
            "official_verify": {
              "desc": "",
              "type": -1
            },
            "pendant": {
              "expire": 0,
              "image": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png",
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png",
              "image_enhance_frame": "",
              "n_pid": 68553,
              "name": "坠落·空",
              "pid": 68553
            },
            "pub_action": "投稿了视频",
            "pub_location_text": "",
            "pub_time": "2天前",
            "pub_ts": 1746266548,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 0,
              "avatar_subscript_url": "",
              "due_date": 1683129600000,
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
            "desc": null,
            "major": {
              "archive": {
                "aid": "114443295918557",
                "badge": {
                  "bg_color": "#FB7299",
                  "color": "#FFFFFF",
                  "icon_url": null,
                  "text": "投稿视频"
                },
                "bvid": "BV1HUVnz7EX1",
                "cover": "http://i1.hdslb.com/bfs/archive/515f60c051c83f98922f78de95a072feebc8f041.jpg",
                "desc": "-",
                "disable_preview": 0,
                "duration_text": "05:14",
                "jump_url": "//www.bilibili.com/video/BV1HUVnz7EX1/",
                "stat": {
                  "danmaku": "1",
                  "play": "26"
                },
                "title": "来自阿洛娜的权威",
                "type": 1
              },
              "type": "MAJOR_TYPE_ARCHIVE"
            },
            "topic": null
          },
          "module_interaction": {
            "items": [
              {
                "desc": {
                  "rich_text_nodes": [
                    {
                      "orig_text": "长安不见-雪",
                      "rid": "3546712641636719",
                      "text": "长安不见-雪",
                      "type": "RICH_TEXT_NODE_TYPE_AT"
                    },
                    {
                      "orig_text": "、",
                      "text": "、",
                      "type": "RICH_TEXT_NODE_TYPE_TEXT"
                    },
                    {
                      "orig_text": "旋转的M2",
                      "rid": "3493264944531941",
                      "text": "旋转的M2",
                      "type": "RICH_TEXT_NODE_TYPE_AT"
                    },
                    {
                      "orig_text": " 赞了",
                      "text": " 赞了",
                      "type": "RICH_TEXT_NODE_TYPE_TEXT"
                    }
                  ],
                  "text": ""
                },
                "type": 0
              }
            ]
          },
          "module_more": {
            "three_point_items": [
              {
                "label": "置顶",
                "params": {
                  "dynamic_id": "1062695803784527872",
                  "status": false
                },
                "type": "THREE_POINT_TOP"
              },
              {
                "label": "删除",
                "modal": {
                  "cancel": "取消",
                  "confirm": "确认删除",
                  "content": "视频删除后将无法恢复，请谨慎操作",
                  "title": "删除动态会同时删除视频稿件"
                },
                "params": {
                  "dyn_id_str": "1062695803784527872",
                  "dyn_type": 8,
                  "rid_str": "114443295918557"
                },
                "type": "THREE_POINT_DELETE"
              }
            ]
          },
          "module_stat": {
            "comment": {
              "count": 1,
              "forbidden": false
            },
            "forward": {
              "count": 0,
              "forbidden": false
            },
            "like": {
              "count": 4,
              "forbidden": false,
              "status": false
            }
          }
        },
        "type": "DYNAMIC_TYPE_AV",
        "visible": true
      },
      {
        "basic": {
          "comment_id_str": "114402862959003",
          "comment_type": 1,
          "like_icon": {
            "action_url": "https://i0.hdslb.com/bfs/garb/item/cb34de5fbca6b8507adf7364ae785822b74df1f9.bin",
            "end_url": "",
            "id": 68554,
            "start_url": ""
          },
          "rid_str": "114402862959003"
        },
        "id_str": "1060045976462426117",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.375,
                "width": 1.375
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.787,
                        "width": 0.787
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
                            "url": "https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1.375,
                        "width": 1.375
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "PENDENT_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png"
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
              "mid": "2095498218"
            },
            "decoration_card": {
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "card_type": 2,
              "card_type_name": "免费",
              "card_url": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "fan": {
                "color": "#a465e5",
                "color_format": {
                  "colors": [
                    "#a465e5FF",
                    "#a465e5FF"
                  ],
                  "end_point": "0,100",
                  "gradients": [
                    0,
                    100
                  ],
                  "start_point": "0,0"
                },
                "is_fan": 1,
                "name": "坠落·空",
                "num_desc": "002272",
                "number": 2272
              },
              "id": 68557,
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "item_id": 68557,
              "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=68557&isdiy=0&part=card&from=post&f_source=garb&vmid=2095498218&native.theme=1&navhide=1",
              "name": "坠落·空粉丝"
            },
            "face": "https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg",
            "face_nft": false,
            "following": null,
            "jump_url": "//space.bilibili.com/2095498218/dynamic",
            "label": "",
            "mid": 2095498218,
            "name": "次元壁小宋",
            "official_verify": {
              "desc": "",
              "type": -1
            },
            "pendant": {
              "expire": 0,
              "image": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png",
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png",
              "image_enhance_frame": "",
              "n_pid": 68553,
              "name": "坠落·空",
              "pid": 68553
            },
            "pub_action": "投稿了视频",
            "pub_location_text": "",
            "pub_time": "04月26日",
            "pub_ts": 1745649587,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 0,
              "avatar_subscript_url": "",
              "due_date": 1683129600000,
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
            "desc": null,
            "major": {
              "archive": {
                "aid": "114402862959003",
                "badge": {
                  "bg_color": "#FB7299",
                  "color": "#FFFFFF",
                  "icon_url": null,
                  "text": "投稿视频"
                },
                "bvid": "BV1ovLXzPEFq",
                "cover": "http://i0.hdslb.com/bfs/archive/b361f14b56080cb17ed5ff24d0b629945c0c150d.jpg",
                "desc": "-",
                "disable_preview": 0,
                "duration_text": "02:42",
                "jump_url": "//www.bilibili.com/video/BV1ovLXzPEFq/",
                "stat": {
                  "danmaku": "0",
                  "play": "199"
                },
                "title": "终于把星野酱带回家了૮₍˃̶ꇴ˂̶₎ა",
                "type": 1
              },
              "type": "MAJOR_TYPE_ARCHIVE"
            },
            "topic": null
          },
          "module_interaction": {
            "items": [
              {
                "desc": {
                  "rich_text_nodes": [
                    {
                      "orig_text": "蔚蓝绪山",
                      "rid": "3493074818828658",
                      "text": "蔚蓝绪山",
                      "type": "RICH_TEXT_NODE_TYPE_AT"
                    },
                    {
                      "orig_text": "、",
                      "text": "、",
                      "type": "RICH_TEXT_NODE_TYPE_TEXT"
                    },
                    {
                      "orig_text": "蚕茧自缠萦",
                      "rid": "291098307",
                      "text": "蚕茧自缠萦",
                      "type": "RICH_TEXT_NODE_TYPE_AT"
                    },
                    {
                      "orig_text": " 赞了",
                      "text": " 赞了",
                      "type": "RICH_TEXT_NODE_TYPE_TEXT"
                    }
                  ],
                  "text": ""
                },
                "type": 0
              }
            ]
          },
          "module_more": {
            "three_point_items": [
              {
                "label": "置顶",
                "params": {
                  "dynamic_id": "1060045976462426117",
                  "status": false
                },
                "type": "THREE_POINT_TOP"
              },
              {
                "label": "删除",
                "modal": {
                  "cancel": "取消",
                  "confirm": "确认删除",
                  "content": "视频删除后将无法恢复，请谨慎操作",
                  "title": "删除动态会同时删除视频稿件"
                },
                "params": {
                  "dyn_id_str": "1060045976462426117",
                  "dyn_type": 8,
                  "rid_str": "114402862959003"
                },
                "type": "THREE_POINT_DELETE"
              }
            ]
          },
          "module_stat": {
            "comment": {
              "count": 8,
              "forbidden": false
            },
            "forward": {
              "count": 0,
              "forbidden": false
            },
            "like": {
              "count": 9,
              "forbidden": false,
              "status": false
            }
          }
        },
        "type": "DYNAMIC_TYPE_AV",
        "visible": true
      },
      {
        "basic": {
          "comment_id_str": "114398483975404",
          "comment_type": 1,
          "like_icon": {
            "action_url": "https://i0.hdslb.com/bfs/garb/item/cb34de5fbca6b8507adf7364ae785822b74df1f9.bin",
            "end_url": "",
            "id": 68554,
            "start_url": ""
          },
          "rid_str": "114398483975404"
        },
        "id_str": "1059758291001802840",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.375,
                "width": 1.375
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.787,
                        "width": 0.787
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
                            "url": "https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1.375,
                        "width": 1.375
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "PENDENT_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png"
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
              "mid": "2095498218"
            },
            "decoration_card": {
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "card_type": 2,
              "card_type_name": "免费",
              "card_url": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "fan": {
                "color": "#a465e5",
                "color_format": {
                  "colors": [
                    "#a465e5FF",
                    "#a465e5FF"
                  ],
                  "end_point": "0,100",
                  "gradients": [
                    0,
                    100
                  ],
                  "start_point": "0,0"
                },
                "is_fan": 1,
                "name": "坠落·空",
                "num_desc": "002272",
                "number": 2272
              },
              "id": 68557,
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "item_id": 68557,
              "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=68557&isdiy=0&part=card&from=post&f_source=garb&vmid=2095498218&native.theme=1&navhide=1",
              "name": "坠落·空粉丝"
            },
            "face": "https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg",
            "face_nft": false,
            "following": null,
            "jump_url": "//space.bilibili.com/2095498218/dynamic",
            "label": "",
            "mid": 2095498218,
            "name": "次元壁小宋",
            "official_verify": {
              "desc": "",
              "type": -1
            },
            "pendant": {
              "expire": 0,
              "image": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png",
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png",
              "image_enhance_frame": "",
              "n_pid": 68553,
              "name": "坠落·空",
              "pid": 68553
            },
            "pub_action": "投稿了视频",
            "pub_location_text": "",
            "pub_time": "04月25日",
            "pub_ts": 1745582605,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 0,
              "avatar_subscript_url": "",
              "due_date": 1683129600000,
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
            "desc": null,
            "major": {
              "archive": {
                "aid": "114398483975404",
                "badge": {
                  "bg_color": "#FB7299",
                  "color": "#FFFFFF",
                  "icon_url": null,
                  "text": "投稿视频"
                },
                "bvid": "BV1KXLEz9EV8",
                "cover": "http://i2.hdslb.com/bfs/archive/915817adaf0c1618ecf28d06d03eb8be8f6c89ff.jpg",
                "desc": "-",
                "disable_preview": 0,
                "duration_text": "00:14",
                "jump_url": "//www.bilibili.com/video/BV1KXLEz9EV8/",
                "stat": {
                  "danmaku": "0",
                  "play": "205"
                },
                "title": "玩了一年多codm，这个什么玩意……",
                "type": 1
              },
              "type": "MAJOR_TYPE_ARCHIVE"
            },
            "topic": null
          },
          "module_interaction": {
            "items": [
              {
                "desc": {
                  "rich_text_nodes": [
                    {
                      "orig_text": "长安不见-雪",
                      "rid": "3546712641636719",
                      "text": "长安不见-雪",
                      "type": "RICH_TEXT_NODE_TYPE_AT"
                    },
                    {
                      "orig_text": "、",
                      "text": "、",
                      "type": "RICH_TEXT_NODE_TYPE_TEXT"
                    },
                    {
                      "orig_text": "坤坤丨宝宝",
                      "rid": "510272506",
                      "text": "坤坤丨宝宝",
                      "type": "RICH_TEXT_NODE_TYPE_AT"
                    },
                    {
                      "orig_text": " 赞了",
                      "text": " 赞了",
                      "type": "RICH_TEXT_NODE_TYPE_TEXT"
                    }
                  ],
                  "text": ""
                },
                "type": 0
              }
            ]
          },
          "module_more": {
            "three_point_items": [
              {
                "label": "置顶",
                "params": {
                  "dynamic_id": "1059758291001802840",
                  "status": false
                },
                "type": "THREE_POINT_TOP"
              },
              {
                "label": "删除",
                "modal": {
                  "cancel": "取消",
                  "confirm": "确认删除",
                  "content": "视频删除后将无法恢复，请谨慎操作",
                  "title": "删除动态会同时删除视频稿件"
                },
                "params": {
                  "dyn_id_str": "1059758291001802840",
                  "dyn_type": 8,
                  "rid_str": "114398483975404"
                },
                "type": "THREE_POINT_DELETE"
              }
            ]
          },
          "module_stat": {
            "comment": {
              "count": 1,
              "forbidden": false
            },
            "forward": {
              "count": 0,
              "forbidden": false
            },
            "like": {
              "count": 6,
              "forbidden": false,
              "status": false
            }
          }
        },
        "type": "DYNAMIC_TYPE_AV",
        "visible": true
      },
      {
        "basic": {
          "comment_id_str": "114392746165578",
          "comment_type": 1,
          "like_icon": {
            "action_url": "https://i0.hdslb.com/bfs/garb/item/cb34de5fbca6b8507adf7364ae785822b74df1f9.bin",
            "end_url": "",
            "id": 68554,
            "start_url": ""
          },
          "rid_str": "114392746165578"
        },
        "id_str": "1059382215079624725",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.375,
                "width": 1.375
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.787,
                        "width": 0.787
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
                            "url": "https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1.375,
                        "width": 1.375
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "PENDENT_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png"
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
              "mid": "2095498218"
            },
            "decoration_card": {
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "card_type": 2,
              "card_type_name": "免费",
              "card_url": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "fan": {
                "color": "#a465e5",
                "color_format": {
                  "colors": [
                    "#a465e5FF",
                    "#a465e5FF"
                  ],
                  "end_point": "0,100",
                  "gradients": [
                    0,
                    100
                  ],
                  "start_point": "0,0"
                },
                "is_fan": 1,
                "name": "坠落·空",
                "num_desc": "002272",
                "number": 2272
              },
              "id": 68557,
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "item_id": 68557,
              "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=68557&isdiy=0&part=card&from=post&f_source=garb&vmid=2095498218&native.theme=1&navhide=1",
              "name": "坠落·空粉丝"
            },
            "face": "https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg",
            "face_nft": false,
            "following": null,
            "jump_url": "//space.bilibili.com/2095498218/dynamic",
            "label": "",
            "mid": 2095498218,
            "name": "次元壁小宋",
            "official_verify": {
              "desc": "",
              "type": -1
            },
            "pendant": {
              "expire": 0,
              "image": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png",
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png",
              "image_enhance_frame": "",
              "n_pid": 68553,
              "name": "坠落·空",
              "pid": 68553
            },
            "pub_action": "投稿了视频",
            "pub_location_text": "",
            "pub_time": "04月24日",
            "pub_ts": 1745495043,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 0,
              "avatar_subscript_url": "",
              "due_date": 1683129600000,
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
            "desc": null,
            "major": {
              "archive": {
                "aid": "114392746165578",
                "badge": {
                  "bg_color": "#FB7299",
                  "color": "#FFFFFF",
                  "icon_url": null,
                  "text": "投稿视频"
                },
                "bvid": "BV1oZLgz7EeX",
                "cover": "http://i1.hdslb.com/bfs/archive/f62117a5e67f2775c892123d1ebe9e23d3523ca8.jpg",
                "desc": "-",
                "disable_preview": 0,
                "duration_text": "12:25",
                "jump_url": "//www.bilibili.com/video/BV1oZLgz7EeX/",
                "stat": {
                  "danmaku": "0",
                  "play": "335"
                },
                "title": "什么才是叫作史上最绝望的死法，……（这爆率正常吗）",
                "type": 1
              },
              "type": "MAJOR_TYPE_ARCHIVE"
            },
            "topic": null
          },
          "module_interaction": {
            "items": [
              {
                "desc": {
                  "rich_text_nodes": [
                    {
                      "orig_text": "菌哥电影",
                      "rid": "628092353",
                      "text": "菌哥电影",
                      "type": "RICH_TEXT_NODE_TYPE_AT"
                    },
                    {
                      "orig_text": "、",
                      "text": "、",
                      "type": "RICH_TEXT_NODE_TYPE_TEXT"
                    },
                    {
                      "orig_text": "是轻甄不是饭团酱",
                      "rid": "646061108",
                      "text": "是轻甄不是饭团酱",
                      "type": "RICH_TEXT_NODE_TYPE_AT"
                    },
                    {
                      "orig_text": " 赞了",
                      "text": " 赞了",
                      "type": "RICH_TEXT_NODE_TYPE_TEXT"
                    }
                  ],
                  "text": ""
                },
                "type": 0
              }
            ]
          },
          "module_more": {
            "three_point_items": [
              {
                "label": "置顶",
                "params": {
                  "dynamic_id": "1059382215079624725",
                  "status": false
                },
                "type": "THREE_POINT_TOP"
              },
              {
                "label": "删除",
                "modal": {
                  "cancel": "取消",
                  "confirm": "确认删除",
                  "content": "视频删除后将无法恢复，请谨慎操作",
                  "title": "删除动态会同时删除视频稿件"
                },
                "params": {
                  "dyn_id_str": "1059382215079624725",
                  "dyn_type": 8,
                  "rid_str": "114392746165578"
                },
                "type": "THREE_POINT_DELETE"
              }
            ]
          },
          "module_stat": {
            "comment": {
              "count": 8,
              "forbidden": false
            },
            "forward": {
              "count": 0,
              "forbidden": false
            },
            "like": {
              "count": 18,
              "forbidden": false,
              "status": false
            }
          }
        },
        "type": "DYNAMIC_TYPE_AV",
        "visible": true
      },
      {
        "basic": {
          "comment_id_str": "114291361449486",
          "comment_type": 1,
          "like_icon": {
            "action_url": "https://i0.hdslb.com/bfs/garb/item/cb34de5fbca6b8507adf7364ae785822b74df1f9.bin",
            "end_url": "",
            "id": 68554,
            "start_url": ""
          },
          "rid_str": "114291361449486"
        },
        "id_str": "1052737677322878980",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.375,
                "width": 1.375
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.787,
                        "width": 0.787
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
                            "url": "https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1.375,
                        "width": 1.375
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "PENDENT_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png"
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
              "mid": "2095498218"
            },
            "decoration_card": {
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "card_type": 2,
              "card_type_name": "免费",
              "card_url": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "fan": {
                "color": "#a465e5",
                "color_format": {
                  "colors": [
                    "#a465e5FF",
                    "#a465e5FF"
                  ],
                  "end_point": "0,100",
                  "gradients": [
                    0,
                    100
                  ],
                  "start_point": "0,0"
                },
                "is_fan": 1,
                "name": "坠落·空",
                "num_desc": "002272",
                "number": 2272
              },
              "id": 68557,
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "item_id": 68557,
              "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=68557&isdiy=0&part=card&from=post&f_source=garb&vmid=2095498218&native.theme=1&navhide=1",
              "name": "坠落·空粉丝"
            },
            "face": "https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg",
            "face_nft": false,
            "following": null,
            "jump_url": "//space.bilibili.com/2095498218/dynamic",
            "label": "",
            "mid": 2095498218,
            "name": "次元壁小宋",
            "official_verify": {
              "desc": "",
              "type": -1
            },
            "pendant": {
              "expire": 0,
              "image": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png",
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png",
              "image_enhance_frame": "",
              "n_pid": 68553,
              "name": "坠落·空",
              "pid": 68553
            },
            "pub_action": "投稿了视频",
            "pub_location_text": "",
            "pub_time": "04月06日",
            "pub_ts": 1743947991,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 0,
              "avatar_subscript_url": "",
              "due_date": 1683129600000,
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
            "desc": null,
            "major": {
              "archive": {
                "aid": "114291361449486",
                "badge": {
                  "bg_color": "#FB7299",
                  "color": "#FFFFFF",
                  "icon_url": null,
                  "text": "投稿视频"
                },
                "bvid": "BV15tR6YEEGN",
                "cover": "http://i1.hdslb.com/bfs/archive/f53a964d2438e44db579a2ff373b49e57ea9c752.jpg",
                "desc": "-",
                "disable_preview": 0,
                "duration_text": "10:26",
                "jump_url": "//www.bilibili.com/video/BV15tR6YEEGN/",
                "stat": {
                  "danmaku": "0",
                  "play": "152"
                },
                "title": "有这一款游戏，爆率逆天没有别的（封神）",
                "type": 1
              },
              "type": "MAJOR_TYPE_ARCHIVE"
            },
            "topic": null
          },
          "module_interaction": {
            "items": [
              {
                "desc": {
                  "rich_text_nodes": [
                    {
                      "orig_text": "长安不见-雪",
                      "rid": "3546712641636719",
                      "text": "长安不见-雪",
                      "type": "RICH_TEXT_NODE_TYPE_AT"
                    },
                    {
                      "orig_text": " 赞了",
                      "text": " 赞了",
                      "type": "RICH_TEXT_NODE_TYPE_TEXT"
                    }
                  ],
                  "text": ""
                },
                "type": 0
              }
            ]
          },
          "module_more": {
            "three_point_items": [
              {
                "label": "置顶",
                "params": {
                  "dynamic_id": "1052737677322878980",
                  "status": false
                },
                "type": "THREE_POINT_TOP"
              },
              {
                "label": "删除",
                "modal": {
                  "cancel": "取消",
                  "confirm": "确认删除",
                  "content": "视频删除后将无法恢复，请谨慎操作",
                  "title": "删除动态会同时删除视频稿件"
                },
                "params": {
                  "dyn_id_str": "1052737677322878980",
                  "dyn_type": 8,
                  "rid_str": "114291361449486"
                },
                "type": "THREE_POINT_DELETE"
              }
            ]
          },
          "module_stat": {
            "comment": {
              "count": 4,
              "forbidden": false
            },
            "forward": {
              "count": 0,
              "forbidden": false
            },
            "like": {
              "count": 3,
              "forbidden": false,
              "status": true
            }
          }
        },
        "type": "DYNAMIC_TYPE_AV",
        "visible": true
      },
      {
        "basic": {
          "comment_id_str": "1050478468672782345",
          "comment_type": 17,
          "like_icon": {
            "action_url": "https://i0.hdslb.com/bfs/garb/item/cb34de5fbca6b8507adf7364ae785822b74df1f9.bin",
            "end_url": "",
            "id": 68554,
            "start_url": ""
          },
          "rid_str": "1050478468672782345"
        },
        "id_str": "1050478468672782345",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.375,
                "width": 1.375
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.787,
                        "width": 0.787
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
                            "url": "https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1.375,
                        "width": 1.375
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "PENDENT_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png"
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
              "mid": "2095498218"
            },
            "decoration_card": {
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "card_type": 2,
              "card_type_name": "免费",
              "card_url": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "fan": {
                "color": "#a465e5",
                "color_format": {
                  "colors": [
                    "#a465e5FF",
                    "#a465e5FF"
                  ],
                  "end_point": "0,100",
                  "gradients": [
                    0,
                    100
                  ],
                  "start_point": "0,0"
                },
                "is_fan": 1,
                "name": "坠落·空",
                "num_desc": "002272",
                "number": 2272
              },
              "id": 68557,
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "item_id": 68557,
              "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=68557&isdiy=0&part=card&from=post&f_source=garb&vmid=2095498218&native.theme=1&navhide=1",
              "name": "坠落·空粉丝"
            },
            "face": "https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg",
            "face_nft": false,
            "following": null,
            "jump_url": "//space.bilibili.com/2095498218/dynamic",
            "label": "",
            "mid": 2095498218,
            "name": "次元壁小宋",
            "official_verify": {
              "desc": "",
              "type": -1
            },
            "pendant": {
              "expire": 0,
              "image": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png",
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png",
              "image_enhance_frame": "",
              "n_pid": 68553,
              "name": "坠落·空",
              "pid": 68553
            },
            "pub_action": "",
            "pub_location_text": "",
            "pub_time": "03月31日",
            "pub_ts": 1743421978,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 0,
              "avatar_subscript_url": "",
              "due_date": 1683129600000,
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
                  "orig_text": "我昨晚也有Bug，打航天基地的爆破第二局后我的，趴下滑铲不知道咋回事就点不了跳跃键也点不了然后就只能点开火键和操作键，投掷物能丢以外其他啥也干不了，只能跟人机样送一整局就输了",
                  "text": "我昨晚也有Bug，打航天基地的爆破第二局后我的，趴下滑铲不知道咋回事就点不了跳跃键也点不了然后就只能点开火键和操作键，投掷物能丢以外其他啥也干不了，只能跟人机样送一整局就输了",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                },
                {
                  "emoji": {
                    "icon_url": "https://i0.hdslb.com/bfs/emote/493b36cbadea2356f09933b39e49c5a2f8f625b8.png",
                    "size": 2,
                    "text": "[坠落·空_自闭]",
                    "type": 3
                  },
                  "orig_text": "[坠落·空_自闭]",
                  "text": "[坠落·空_自闭]",
                  "type": "RICH_TEXT_NODE_TYPE_EMOJI"
                },
                {
                  "emoji": {
                    "icon_url": "https://i0.hdslb.com/bfs/emote/86c614f2d21263387fa7ef168450ccd69cce9a0b.png",
                    "size": 2,
                    "text": "[坠落·空_哭泣]",
                    "type": 3
                  },
                  "orig_text": "[坠落·空_哭泣]",
                  "text": "[坠落·空_哭泣]",
                  "type": "RICH_TEXT_NODE_TYPE_EMOJI"
                }
              ],
              "text": "我昨晚也有Bug，打航天基地的爆破第二局后我的，趴下滑铲不知道咋回事就点不了跳跃键也点不了然后就只能点开火键和操作键，投掷物能丢以外其他啥也干不了，只能跟人机样送一整局就输了[坠落·空_自闭][坠落·空_哭泣]"
            },
            "major": null,
            "topic": null
          },
          "module_interaction": {
            "items": [
              {
                "desc": {
                  "rich_text_nodes": [
                    {
                      "orig_text": "长安不见-雪",
                      "rid": "3546712641636719",
                      "text": "长安不见-雪",
                      "type": "RICH_TEXT_NODE_TYPE_AT"
                    },
                    {
                      "orig_text": " 赞了",
                      "text": " 赞了",
                      "type": "RICH_TEXT_NODE_TYPE_TEXT"
                    }
                  ],
                  "text": ""
                },
                "type": 0
              }
            ]
          },
          "module_more": {
            "three_point_items": [
              {
                "label": "置顶",
                "params": {
                  "dynamic_id": "1050478468672782345",
                  "status": false
                },
                "type": "THREE_POINT_TOP"
              },
              {
                "label": "删除",
                "modal": {
                  "cancel": "取消",
                  "confirm": "确认删除",
                  "content": "动态删除后将无法恢复，请谨慎操作",
                  "title": "要删除动态吗？"
                },
                "params": {
                  "dyn_id_str": "1050478468672782345",
                  "dyn_type": 1,
                  "rid_str": "1050478468672782345"
                },
                "type": "THREE_POINT_DELETE"
              }
            ]
          },
          "module_stat": {
            "comment": {
              "count": 0,
              "forbidden": false
            },
            "forward": {
              "count": 0,
              "forbidden": false
            },
            "like": {
              "count": 1,
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
          "id_str": "1049725573770772488",
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
                              "url": "https://i2.hdslb.com/bfs/face/ad1944a6564f065fae1b5d7ee963d08c900fe8d3.jpg"
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
                "mid": "289949153"
              },
              "decoration_card": {
                "big_card_url": "https://i0.hdslb.com/bfs/vip/e2ffa1d1d491fe0464338ed3921327ef5e4b42c5.png",
                "card_type": 2,
                "card_type_name": "免费",
                "card_url": "https://i0.hdslb.com/bfs/vip/a9e3d993c7a15e88ce0bf714a142f7d2b44121e2.png",
                "fan": {},
                "id": 28,
                "image_enhance": "https://i0.hdslb.com/bfs/vip/a9e3d993c7a15e88ce0bf714a142f7d2b44121e2.png",
                "item_id": 28,
                "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=28&isdiy=0&part=card&from=post&f_source=garb&vmid=289949153&native.theme=1&navhide=1",
                "name": "2233娘"
              },
              "face": "https://i2.hdslb.com/bfs/face/ad1944a6564f065fae1b5d7ee963d08c900fe8d3.jpg",
              "face_nft": false,
              "following": null,
              "jump_url": "//space.bilibili.com/289949153/dynamic",
              "label": "",
              "mid": 289949153,
              "name": "谁是fufu",
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
              "pub_action": "投稿了视频",
              "pub_time": "",
              "pub_ts": 1743246681,
              "type": "AUTHOR_TYPE_NORMAL",
              "vip": {
                "avatar_subscript": 0,
                "avatar_subscript_url": "",
                "due_date": 1743350400000,
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
              "desc": null,
              "major": {
                "archive": {
                  "aid": "114245391947434",
                  "badge": {
                    "bg_color": "#FB7299",
                    "color": "#FFFFFF",
                    "icon_url": null,
                    "text": "投稿视频"
                  },
                  "bvid": "BV1vmZAYDEcT",
                  "cover": "http://i0.hdslb.com/bfs/archive/d3ccb1bd474d55cc4415e073d21f1c8a3d12c22d.jpg",
                  "desc": "-",
                  "disable_preview": 0,
                  "duration_text": "02:43",
                  "jump_url": "//www.bilibili.com/video/BV1vmZAYDEcT/",
                  "stat": {
                    "danmaku": "49",
                    "play": "6.5万"
                  },
                  "title": "上号成为人机了！是BUG还是分身？",
                  "type": 1
                },
                "type": "MAJOR_TYPE_ARCHIVE"
              },
              "topic": {
                "id": 1061343,
                "jump_url": "https://m.bilibili.com/topic-detail?topic_id=1061343&topic_name=%E4%BD%BF%E5%91%BD%E5%8F%AC%E5%94%A4%E6%89%8B%E6%B8%B8%E8%AE%B0%E5%BD%95",
                "name": "使命召唤手游记录"
              }
            }
          },
          "type": "DYNAMIC_TYPE_AV",
          "visible": true
        },
        "type": "DYNAMIC_TYPE_FORWARD",
        "visible": true
      },
      {
        "basic": {
          "comment_id_str": "1049490226780569608",
          "comment_type": 17,
          "like_icon": {
            "action_url": "https://i0.hdslb.com/bfs/garb/item/cb34de5fbca6b8507adf7364ae785822b74df1f9.bin",
            "end_url": "",
            "id": 68554,
            "start_url": ""
          },
          "rid_str": "1049490226780569608"
        },
        "id_str": "1049490226780569608",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.375,
                "width": 1.375
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.787,
                        "width": 0.787
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
                            "url": "https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1.375,
                        "width": 1.375
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "PENDENT_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png"
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
              "mid": "2095498218"
            },
            "decoration_card": {
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "card_type": 2,
              "card_type_name": "免费",
              "card_url": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "fan": {
                "color": "#a465e5",
                "color_format": {
                  "colors": [
                    "#a465e5FF",
                    "#a465e5FF"
                  ],
                  "end_point": "0,100",
                  "gradients": [
                    0,
                    100
                  ],
                  "start_point": "0,0"
                },
                "is_fan": 1,
                "name": "坠落·空",
                "num_desc": "002272",
                "number": 2272
              },
              "id": 68557,
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "item_id": 68557,
              "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=68557&isdiy=0&part=card&from=post&f_source=garb&vmid=2095498218&native.theme=1&navhide=1",
              "name": "坠落·空粉丝"
            },
            "face": "https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg",
            "face_nft": false,
            "following": null,
            "jump_url": "//space.bilibili.com/2095498218/dynamic",
            "label": "",
            "mid": 2095498218,
            "name": "次元壁小宋",
            "official_verify": {
              "desc": "",
              "type": -1
            },
            "pendant": {
              "expire": 0,
              "image": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png",
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png",
              "image_enhance_frame": "",
              "n_pid": 68553,
              "name": "坠落·空",
              "pid": 68553
            },
            "pub_action": "",
            "pub_location_text": "",
            "pub_time": "03月29日",
            "pub_ts": 1743191885,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 0,
              "avatar_subscript_url": "",
              "due_date": 1683129600000,
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
                  "orig_text": "回复 ",
                  "text": "回复 ",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                },
                {
                  "orig_text": "@狂热的地幔",
                  "rid": "1333987156",
                  "text": "@狂热的地幔",
                  "type": "RICH_TEXT_NODE_TYPE_AT"
                },
                {
                  "orig_text": " :我试过玩上一个月删了，然后现在我又想玩不知道为什么玩几天又想删",
                  "text": " :我试过玩上一个月删了，然后现在我又想玩不知道为什么玩几天又想删",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                },
                {
                  "emoji": {
                    "icon_url": "https://i0.hdslb.com/bfs/emote/c3043ba94babf824dea03ce500d0e73763bf4f40.png",
                    "size": 1,
                    "text": "[笑哭]",
                    "type": 1
                  },
                  "orig_text": "[笑哭]",
                  "text": "[笑哭]",
                  "type": "RICH_TEXT_NODE_TYPE_EMOJI"
                }
              ],
              "text": "回复 @狂热的地幔 :我试过玩上一个月删了，然后现在我又想玩不知道为什么玩几天又想删[笑哭]"
            },
            "major": null,
            "topic": null
          },
          "module_interaction": {
            "items": [
              {
                "desc": {
                  "rich_text_nodes": [
                    {
                      "orig_text": "长安不见-雪",
                      "rid": "3546712641636719",
                      "text": "长安不见-雪",
                      "type": "RICH_TEXT_NODE_TYPE_AT"
                    },
                    {
                      "orig_text": " 赞了",
                      "text": " 赞了",
                      "type": "RICH_TEXT_NODE_TYPE_TEXT"
                    }
                  ],
                  "text": ""
                },
                "type": 0
              }
            ]
          },
          "module_more": {
            "three_point_items": [
              {
                "label": "置顶",
                "params": {
                  "dynamic_id": "1049490226780569608",
                  "status": false
                },
                "type": "THREE_POINT_TOP"
              },
              {
                "label": "删除",
                "modal": {
                  "cancel": "取消",
                  "confirm": "确认删除",
                  "content": "动态删除后将无法恢复，请谨慎操作",
                  "title": "要删除动态吗？"
                },
                "params": {
                  "dyn_id_str": "1049490226780569608",
                  "dyn_type": 1,
                  "rid_str": "1049490226780569608"
                },
                "type": "THREE_POINT_DELETE"
              }
            ]
          },
          "module_stat": {
            "comment": {
              "count": 0,
              "forbidden": false
            },
            "forward": {
              "count": 0,
              "forbidden": false
            },
            "like": {
              "count": 1,
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
          "id_str": "1049336535656169477",
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
                              "url": "https://i1.hdslb.com/bfs/face/929fb162c6eb9f81b55b67b3016364a3d00fb437.jpg"
                            },
                            "src_type": 1
                          }
                        },
                        "res_type": 3
                      },
                      "visible": true
                    },
                    {
                      "general_spec": {
                        "pos_spec": {
                          "axis_x": 0.8000000000000002,
                          "axis_y": 0.8000000000000002,
                          "coordinate_pos": 1
                        },
                        "render_spec": {
                          "opacity": 1
                        },
                        "size_spec": {
                          "height": 0.41666666666666663,
                          "width": 0.41666666666666663
                        }
                      },
                      "layer_config": {
                        "tags": {
                          "GENERAL_CFG": {
                            "config_type": 1,
                            "general_config": {
                              "web_css_style": {
                                "background-color": "rgb(255,255,255)",
                                "border": "2px solid rgba(255,255,255,1)",
                                "borderRadius": "50%",
                                "boxSizing": "border-box"
                              }
                            }
                          },
                          "ICON_LAYER": {}
                        }
                      },
                      "resource": {
                        "res_image": {
                          "image_src": {
                            "local": 3,
                            "src_type": 2
                          }
                        },
                        "res_type": 3
                      },
                      "visible": true
                    }
                  ]
                },
                "mid": "497979931"
              },
              "decoration_card": {
                "big_card_url": "https://i0.hdslb.com/bfs/vip/40b8bef91ed10dd8c2b9302d85db76c5f1f3c292.png",
                "card_type": 2,
                "card_type_name": "免费",
                "card_url": "https://i0.hdslb.com/bfs/vip/99f54078df2412394140aa5df4422bc0a1ca3d3e.png",
                "fan": {},
                "id": 5,
                "image_enhance": "https://i0.hdslb.com/bfs/vip/99f54078df2412394140aa5df4422bc0a1ca3d3e.png",
                "item_id": 5,
                "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=5&isdiy=0&part=card&from=post&f_source=garb&vmid=497979931&native.theme=1&navhide=1",
                "name": "33娘"
              },
              "face": "https://i1.hdslb.com/bfs/face/929fb162c6eb9f81b55b67b3016364a3d00fb437.jpg",
              "face_nft": false,
              "following": null,
              "jump_url": "//space.bilibili.com/497979931/dynamic",
              "label": "",
              "mid": 497979931,
              "name": "冰林L",
              "official_verify": {
                "desc": "",
                "type": 0
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
              "pub_action": "投稿了视频",
              "pub_time": "",
              "pub_ts": 1743156101,
              "type": "AUTHOR_TYPE_NORMAL",
              "vip": {
                "avatar_subscript": 0,
                "avatar_subscript_url": "",
                "due_date": 1745856000000,
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
              "desc": null,
              "major": {
                "archive": {
                  "aid": "114239469520401",
                  "badge": {
                    "bg_color": "#FB7299",
                    "color": "#FFFFFF",
                    "icon_url": null,
                    "text": "投稿视频"
                  },
                  "bvid": "BV1E7oXYhEhp",
                  "cover": "http://i2.hdslb.com/bfs/archive/db15a6d18cdf6cef3cb41b9d9f11847b5c950bc4.jpg",
                  "desc": "我知道MC不是我生活的全部，但我希望他能陪我更久一点，未来我可能会去尝试做一些MC动画，或者其他的游戏。",
                  "disable_preview": 0,
                  "duration_text": "02:39",
                  "jump_url": "//www.bilibili.com/video/BV1E7oXYhEhp/",
                  "stat": {
                    "danmaku": "548",
                    "play": "31.2万"
                  },
                  "title": "做MC视频10年了，为什么MC越来越无聊了…",
                  "type": 1
                },
                "type": "MAJOR_TYPE_ARCHIVE"
              },
              "topic": null
            }
          },
          "type": "DYNAMIC_TYPE_AV",
          "visible": true
        },
        "type": "DYNAMIC_TYPE_FORWARD",
        "visible": true
      },
      {
        "basic": {
          "comment_id_str": "1046005002557980674",
          "comment_type": 17,
          "like_icon": {
            "action_url": "https://i0.hdslb.com/bfs/garb/item/cb34de5fbca6b8507adf7364ae785822b74df1f9.bin",
            "end_url": "",
            "id": 68554,
            "start_url": ""
          },
          "rid_str": "1046376087871815681"
        },
        "id_str": "1046005002557980674",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.375,
                "width": 1.375
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.787,
                        "width": 0.787
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
                            "url": "https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1.375,
                        "width": 1.375
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "PENDENT_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png"
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
              "mid": "2095498218"
            },
            "decoration_card": {
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "card_type": 2,
              "card_type_name": "免费",
              "card_url": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "fan": {
                "color": "#a465e5",
                "color_format": {
                  "colors": [
                    "#a465e5FF",
                    "#a465e5FF"
                  ],
                  "end_point": "0,100",
                  "gradients": [
                    0,
                    100
                  ],
                  "start_point": "0,0"
                },
                "is_fan": 1,
                "name": "坠落·空",
                "num_desc": "002272",
                "number": 2272
              },
              "id": 68557,
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "item_id": 68557,
              "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=68557&isdiy=0&part=card&from=post&f_source=garb&vmid=2095498218&native.theme=1&navhide=1",
              "name": "坠落·空粉丝"
            },
            "face": "https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg",
            "face_nft": false,
            "following": null,
            "jump_url": "//space.bilibili.com/2095498218/dynamic",
            "label": "",
            "mid": 2095498218,
            "name": "次元壁小宋",
            "official_verify": {
              "desc": "",
              "type": -1
            },
            "pendant": {
              "expire": 0,
              "image": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png",
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png",
              "image_enhance_frame": "",
              "n_pid": 68553,
              "name": "坠落·空",
              "pid": 68553
            },
            "pub_action": "",
            "pub_location_text": "",
            "pub_time": "03月19日",
            "pub_ts": 1742380418,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 0,
              "avatar_subscript_url": "",
              "due_date": 1683129600000,
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
                  "jump_url": "//search.bilibili.com/all?keyword=bilibili%E4%B8%AA%E6%80%A7%E8%A3%85%E6%89%AE",
                  "orig_text": "#bilibili个性装扮#",
                  "text": "#bilibili个性装扮#",
                  "type": "RICH_TEXT_NODE_TYPE_TOPIC"
                },
                {
                  "orig_text": " 我正在使用“坠落·空”头像挂件，你也来试试~",
                  "text": " 我正在使用“坠落·空”头像挂件，你也来试试~",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                }
              ],
              "text": "#bilibili个性装扮# 我正在使用“坠落·空”头像挂件，你也来试试~"
            },
            "major": {
              "common": {
                "badge": {
                  "bg_color": "#FB7299",
                  "color": "#ffffff",
                  "text": "装扮"
                },
                "biz_id": 0,
                "biz_type": 231,
                "cover": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png",
                "desc": "挂件",
                "id": "1046376087871815681",
                "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?f_source=dynamic&from=share&isdiy=0&item_id=68595&native.theme=1&navhide=1&part=pendant&q=953008717620250319183338&vmid=2095498218",
                "label": "",
                "sketch_id": "1046376087871815680",
                "style": 1,
                "title": "坠落·空"
              },
              "type": "MAJOR_TYPE_COMMON"
            },
            "topic": null
          },
          "module_more": {
            "three_point_items": [
              {
                "label": "置顶",
                "params": {
                  "dynamic_id": "1046005002557980674",
                  "status": false
                },
                "type": "THREE_POINT_TOP"
              },
              {
                "label": "删除",
                "modal": {
                  "cancel": "取消",
                  "confirm": "确认删除",
                  "content": "动态删除后将无法恢复，请谨慎操作",
                  "title": "要删除动态吗？"
                },
                "params": {
                  "dyn_id_str": "1046005002557980674",
                  "dyn_type": 2048,
                  "rid_str": "1046376087871815681"
                },
                "type": "THREE_POINT_DELETE"
              }
            ]
          },
          "module_stat": {
            "comment": {
              "count": 0,
              "forbidden": false
            },
            "forward": {
              "count": 0,
              "forbidden": false
            },
            "like": {
              "count": 1,
              "forbidden": false,
              "status": false
            }
          }
        },
        "type": "DYNAMIC_TYPE_COMMON_SQUARE",
        "visible": true
      },
      {
        "basic": {
          "comment_id_str": "1044401021238902802",
          "comment_type": 17,
          "like_icon": {
            "action_url": "https://i0.hdslb.com/bfs/garb/item/cb34de5fbca6b8507adf7364ae785822b74df1f9.bin",
            "end_url": "",
            "id": 68554,
            "start_url": ""
          },
          "rid_str": "1044401021238902802"
        },
        "id_str": "1044401021238902802",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.375,
                "width": 1.375
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.787,
                        "width": 0.787
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
                            "url": "https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1.375,
                        "width": 1.375
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "PENDENT_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png"
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
              "mid": "2095498218"
            },
            "decoration_card": {
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "card_type": 2,
              "card_type_name": "免费",
              "card_url": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "fan": {
                "color": "#a465e5",
                "color_format": {
                  "colors": [
                    "#a465e5FF",
                    "#a465e5FF"
                  ],
                  "end_point": "0,100",
                  "gradients": [
                    0,
                    100
                  ],
                  "start_point": "0,0"
                },
                "is_fan": 1,
                "name": "坠落·空",
                "num_desc": "002272",
                "number": 2272
              },
              "id": 68557,
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "item_id": 68557,
              "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=68557&isdiy=0&part=card&from=post&f_source=garb&vmid=2095498218&native.theme=1&navhide=1",
              "name": "坠落·空粉丝"
            },
            "face": "https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg",
            "face_nft": false,
            "following": null,
            "jump_url": "//space.bilibili.com/2095498218/dynamic",
            "label": "",
            "mid": 2095498218,
            "name": "次元壁小宋",
            "official_verify": {
              "desc": "",
              "type": -1
            },
            "pendant": {
              "expire": 0,
              "image": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png",
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png",
              "image_enhance_frame": "",
              "n_pid": 68553,
              "name": "坠落·空",
              "pid": 68553
            },
            "pub_action": "",
            "pub_location_text": "",
            "pub_time": "03月15日",
            "pub_ts": 1742006962,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 0,
              "avatar_subscript_url": "",
              "due_date": 1683129600000,
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
                  "orig_text": "我参与了投票",
                  "text": "我参与了投票",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                },
                {
                  "orig_text": "​视频类型",
                  "rid": "14746295",
                  "text": "​视频类型",
                  "type": "RICH_TEXT_NODE_TYPE_VOTE"
                },
                {
                  "orig_text": "我投给了我想看抽象的2D动画",
                  "text": "我投给了我想看抽象的2D动画",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                }
              ],
              "text": "我参与了投票​视频类型我投给了我想看抽象的2D动画"
            },
            "major": null,
            "topic": null
          },
          "module_interaction": {
            "items": [
              {
                "desc": {
                  "rich_text_nodes": [
                    {
                      "orig_text": "长安不见-雪",
                      "rid": "3546712641636719",
                      "text": "长安不见-雪",
                      "type": "RICH_TEXT_NODE_TYPE_AT"
                    },
                    {
                      "orig_text": " 赞了",
                      "text": " 赞了",
                      "type": "RICH_TEXT_NODE_TYPE_TEXT"
                    }
                  ],
                  "text": ""
                },
                "type": 0
              }
            ]
          },
          "module_more": {
            "three_point_items": [
              {
                "label": "置顶",
                "params": {
                  "dynamic_id": "1044401021238902802",
                  "status": false
                },
                "type": "THREE_POINT_TOP"
              },
              {
                "label": "删除",
                "modal": {
                  "cancel": "取消",
                  "confirm": "确认删除",
                  "content": "动态删除后将无法恢复，请谨慎操作",
                  "title": "要删除动态吗？"
                },
                "params": {
                  "dyn_id_str": "1044401021238902802",
                  "dyn_type": 1,
                  "rid_str": "1044401021238902802"
                },
                "type": "THREE_POINT_DELETE"
              }
            ]
          },
          "module_stat": {
            "comment": {
              "count": 0,
              "forbidden": false
            },
            "forward": {
              "count": 0,
              "forbidden": false
            },
            "like": {
              "count": 1,
              "forbidden": false,
              "status": false
            }
          }
        },
        "orig": {
          "basic": {
            "comment_id_str": "",
            "comment_type": 0,
            "jump_url": "//www.bilibili.com/opus/1044394265267929093",
            "like_icon": {
              "action_url": "",
              "end_url": "",
              "id": 0,
              "start_url": ""
            },
            "rid_str": ""
          },
          "id_str": "1044394265267929093",
          "modules": {
            "module_author": {
              "avatar": {
                "container_size": {
                  "height": 1.375,
                  "width": 1.375
                },
                "fallback_layers": {
                  "is_critical_group": true,
                  "layers": [
                    {
                      "general_spec": {
                        "pos_spec": {
                          "axis_x": 0.6875,
                          "axis_y": 0.6875,
                          "coordinate_pos": 2
                        },
                        "render_spec": {
                          "opacity": 1
                        },
                        "size_spec": {
                          "height": 0.787,
                          "width": 0.787
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
                              "url": "https://i1.hdslb.com/bfs/face/4e08982dd07abbdf86f35a68483424b743f07730.jpg"
                            },
                            "src_type": 1
                          }
                        },
                        "res_type": 3
                      },
                      "visible": true
                    },
                    {
                      "general_spec": {
                        "pos_spec": {
                          "axis_x": 0.6875,
                          "axis_y": 0.6875,
                          "coordinate_pos": 2
                        },
                        "render_spec": {
                          "opacity": 1
                        },
                        "size_spec": {
                          "height": 1.375,
                          "width": 1.375
                        }
                      },
                      "layer_config": {
                        "tags": {
                          "PENDENT_LAYER": {}
                        }
                      },
                      "resource": {
                        "res_image": {
                          "image_src": {
                            "remote": {
                              "bfs_style": "widget-layer-avatar",
                              "url": "https://i1.hdslb.com/bfs/face/5bb7bef5107e448892ab54539298d50eb678de05.png"
                            },
                            "src_type": 1
                          }
                        },
                        "res_type": 3
                      },
                      "visible": true
                    },
                    {
                      "general_spec": {
                        "pos_spec": {
                          "axis_x": 0.7560000000000001,
                          "axis_y": 0.7726666666666667,
                          "coordinate_pos": 1
                        },
                        "render_spec": {
                          "opacity": 1
                        },
                        "size_spec": {
                          "height": 0.41666666666666663,
                          "width": 0.41666666666666663
                        }
                      },
                      "layer_config": {
                        "tags": {
                          "GENERAL_CFG": {
                            "config_type": 1,
                            "general_config": {
                              "web_css_style": {
                                "background-color": "rgb(255,255,255)",
                                "border": "2px solid rgba(255,255,255,1)",
                                "borderRadius": "50%",
                                "boxSizing": "border-box"
                              }
                            }
                          },
                          "ICON_LAYER": {}
                        }
                      },
                      "resource": {
                        "res_image": {
                          "image_src": {
                            "local": 3,
                            "src_type": 2
                          }
                        },
                        "res_type": 3
                      },
                      "visible": true
                    }
                  ]
                },
                "mid": "1142084989"
              },
              "decoration_card": {
                "big_card_url": "https://i0.hdslb.com/bfs/archive/7e0eed18747150fa233ba6994489b9096f1d9fe8.png",
                "card_type": 2,
                "card_type_name": "免费",
                "card_url": "https://i0.hdslb.com/bfs/archive/7e0eed18747150fa233ba6994489b9096f1d9fe8.png",
                "fan": {
                  "color": "#BFC8D2",
                  "color_format": {
                    "colors": [
                      "#B8C7D0FF",
                      "#A2A7B0FF"
                    ],
                    "end_point": "100,100",
                    "gradients": [
                      0,
                      100
                    ],
                    "start_point": "0,0"
                  },
                  "is_fan": 1,
                  "name": "XXXX",
                  "num_desc": "047769",
                  "number": 47769
                },
                "id": 66945,
                "image_enhance": "https://i0.hdslb.com/bfs/archive/7e0eed18747150fa233ba6994489b9096f1d9fe8.png",
                "item_id": 66945,
                "jump_url": "https://www.bilibili.com/h5/mall/digital-card/home?act_id=101116&from=post&f_source=garb&-Abrowser=live&hybrid_set_header=2&navhide=1&anchor_task=1",
                "name": "初音未来三连快乐勋章"
              },
              "face": "https://i1.hdslb.com/bfs/face/4e08982dd07abbdf86f35a68483424b743f07730.jpg",
              "face_nft": false,
              "following": true,
              "jump_url": "//space.bilibili.com/1142084989/dynamic",
              "label": "",
              "mid": 1142084989,
              "name": "不抽象的真菌零_Jack",
              "official_verify": {
                "desc": "",
                "type": 0
              },
              "pendant": {
                "expire": 0,
                "image": "https://i1.hdslb.com/bfs/face/5bb7bef5107e448892ab54539298d50eb678de05.png",
                "image_enhance": "https://i1.hdslb.com/bfs/face/5bb7bef5107e448892ab54539298d50eb678de05.png",
                "image_enhance_frame": "",
                "n_pid": 294,
                "name": "茶啊二中",
                "pid": 294
              },
              "pub_action": "",
              "pub_time": "",
              "pub_ts": 1742005389,
              "type": "AUTHOR_TYPE_NORMAL",
              "vip": {
                "avatar_subscript": 1,
                "avatar_subscript_url": "",
                "due_date": 1751558400000,
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
                "nickname_color": "#FB7299",
                "status": 1,
                "theme_type": 0,
                "type": 1
              }
            },
            "module_dynamic": {
              "additional": {
                "type": "ADDITIONAL_TYPE_VOTE",
                "vote": {
                  "button": {
                    "jump_style": {
                      "text": "参与"
                    },
                    "type": 1
                  },
                  "choice_cnt": 1,
                  "default_share": 1,
                  "desc": "153人参与",
                  "end_time": 1742091752,
                  "join_num": 153,
                  "status": 4,
                  "title": "视频类型",
                  "type": null,
                  "uid": 1142084989,
                  "vote_id": 14746295
                }
              },
              "desc": null,
              "major": {
                "opus": {
                  "fold_action": [
                    "展开",
                    "收起"
                  ],
                  "jump_url": "//www.bilibili.com/opus/1044394265267929093",
                  "pics": [],
                  "summary": {
                    "rich_text_nodes": [
                      {
                        "orig_text": "投票",
                        "text": "投票",
                        "type": "RICH_TEXT_NODE_TYPE_TEXT"
                      },
                      {
                        "orig_text": "​视频类型",
                        "rid": "14746295",
                        "text": "​视频类型",
                        "type": "RICH_TEXT_NODE_TYPE_VOTE"
                      }
                    ],
                    "text": "投票​视频类型"
                  },
                  "title": null
                },
                "type": "MAJOR_TYPE_OPUS"
              },
              "topic": null
            }
          },
          "type": "DYNAMIC_TYPE_WORD",
          "visible": true
        },
        "type": "DYNAMIC_TYPE_FORWARD",
        "visible": true
      },
      {
        "basic": {
          "comment_id_str": "1044400750626603011",
          "comment_type": 17,
          "like_icon": {
            "action_url": "https://i0.hdslb.com/bfs/garb/item/cb34de5fbca6b8507adf7364ae785822b74df1f9.bin",
            "end_url": "",
            "id": 68554,
            "start_url": ""
          },
          "rid_str": "1044400750626603011"
        },
        "id_str": "1044400750626603011",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.375,
                "width": 1.375
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.787,
                        "width": 0.787
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
                            "url": "https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1.375,
                        "width": 1.375
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "PENDENT_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png"
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
              "mid": "2095498218"
            },
            "decoration_card": {
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "card_type": 2,
              "card_type_name": "免费",
              "card_url": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "fan": {
                "color": "#a465e5",
                "color_format": {
                  "colors": [
                    "#a465e5FF",
                    "#a465e5FF"
                  ],
                  "end_point": "0,100",
                  "gradients": [
                    0,
                    100
                  ],
                  "start_point": "0,0"
                },
                "is_fan": 1,
                "name": "坠落·空",
                "num_desc": "002272",
                "number": 2272
              },
              "id": 68557,
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "item_id": 68557,
              "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=68557&isdiy=0&part=card&from=post&f_source=garb&vmid=2095498218&native.theme=1&navhide=1",
              "name": "坠落·空粉丝"
            },
            "face": "https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg",
            "face_nft": false,
            "following": null,
            "jump_url": "//space.bilibili.com/2095498218/dynamic",
            "label": "",
            "mid": 2095498218,
            "name": "次元壁小宋",
            "official_verify": {
              "desc": "",
              "type": -1
            },
            "pendant": {
              "expire": 0,
              "image": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png",
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png",
              "image_enhance_frame": "",
              "n_pid": 68553,
              "name": "坠落·空",
              "pid": 68553
            },
            "pub_action": "",
            "pub_location_text": "",
            "pub_time": "03月15日",
            "pub_ts": 1742006899,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 0,
              "avatar_subscript_url": "",
              "due_date": 1683129600000,
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
                  "orig_text": "我参与了投票",
                  "text": "我参与了投票",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                },
                {
                  "orig_text": "​你们的头像是",
                  "rid": "14514807",
                  "text": "​你们的头像是",
                  "type": "RICH_TEXT_NODE_TYPE_VOTE"
                },
                {
                  "orig_text": "我投给了女性",
                  "text": "我投给了女性",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                }
              ],
              "text": "我参与了投票​你们的头像是我投给了女性"
            },
            "major": null,
            "topic": null
          },
          "module_more": {
            "three_point_items": [
              {
                "label": "置顶",
                "params": {
                  "dynamic_id": "1044400750626603011",
                  "status": false
                },
                "type": "THREE_POINT_TOP"
              },
              {
                "label": "删除",
                "modal": {
                  "cancel": "取消",
                  "confirm": "确认删除",
                  "content": "动态删除后将无法恢复，请谨慎操作",
                  "title": "要删除动态吗？"
                },
                "params": {
                  "dyn_id_str": "1044400750626603011",
                  "dyn_type": 1,
                  "rid_str": "1044400750626603011"
                },
                "type": "THREE_POINT_DELETE"
              }
            ]
          },
          "module_stat": {
            "comment": {
              "count": 0,
              "forbidden": false
            },
            "forward": {
              "count": 0,
              "forbidden": false
            },
            "like": {
              "count": 0,
              "forbidden": false,
              "status": false
            }
          }
        },
        "orig": {
          "basic": {
            "comment_id_str": "",
            "comment_type": 0,
            "jump_url": "//www.bilibili.com/opus/1034151558512640008",
            "like_icon": {
              "action_url": "",
              "end_url": "",
              "id": 0,
              "start_url": ""
            },
            "rid_str": ""
          },
          "id_str": "1034151558512640008",
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
                              "url": "https://i1.hdslb.com/bfs/face/3c35c94e5c9fc5aad09052078339ec9faf1aad87.jpg"
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
                "mid": "1403650486"
              },
              "face": "https://i1.hdslb.com/bfs/face/3c35c94e5c9fc5aad09052078339ec9faf1aad87.jpg",
              "face_nft": false,
              "following": null,
              "jump_url": "//space.bilibili.com/1403650486/dynamic",
              "label": "",
              "mid": 1403650486,
              "name": "小邓Channel",
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
              "pub_time": "",
              "pub_ts": 1739620573,
              "type": "AUTHOR_TYPE_NORMAL",
              "vip": {
                "avatar_subscript": 0,
                "avatar_subscript_url": "",
                "due_date": 1711382400000,
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
              "additional": {
                "type": "ADDITIONAL_TYPE_VOTE",
                "vote": {
                  "button": {
                    "jump_style": {
                      "text": "参与"
                    },
                    "type": 1
                  },
                  "choice_cnt": 1,
                  "default_share": 1,
                  "desc": "1135人参与",
                  "end_time": 1742039701,
                  "join_num": 1135,
                  "status": 4,
                  "title": "你们的头像是",
                  "type": null,
                  "uid": 1403650486,
                  "vote_id": 14514807
                }
              },
              "desc": null,
              "major": {
                "opus": {
                  "fold_action": [
                    "展开",
                    "收起"
                  ],
                  "jump_url": "//www.bilibili.com/opus/1034151558512640008",
                  "pics": [],
                  "summary": {
                    "rich_text_nodes": [
                      {
                        "orig_text": "我发起了一个投票",
                        "text": "我发起了一个投票",
                        "type": "RICH_TEXT_NODE_TYPE_TEXT"
                      },
                      {
                        "orig_text": "​你们的头像是",
                        "rid": "14514807",
                        "text": "​你们的头像是",
                        "type": "RICH_TEXT_NODE_TYPE_VOTE"
                      }
                    ],
                    "text": "我发起了一个投票​你们的头像是"
                  },
                  "title": null
                },
                "type": "MAJOR_TYPE_OPUS"
              },
              "topic": null
            }
          },
          "type": "DYNAMIC_TYPE_WORD",
          "visible": true
        },
        "type": "DYNAMIC_TYPE_FORWARD",
        "visible": true
      },
      {
        "basic": {
          "comment_id_str": "1044400681921806345",
          "comment_type": 17,
          "like_icon": {
            "action_url": "https://i0.hdslb.com/bfs/garb/item/cb34de5fbca6b8507adf7364ae785822b74df1f9.bin",
            "end_url": "",
            "id": 68554,
            "start_url": ""
          },
          "rid_str": "1044400681921806345"
        },
        "id_str": "1044400681921806345",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.375,
                "width": 1.375
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.787,
                        "width": 0.787
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
                            "url": "https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1.375,
                        "width": 1.375
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "PENDENT_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png"
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
              "mid": "2095498218"
            },
            "decoration_card": {
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "card_type": 2,
              "card_type_name": "免费",
              "card_url": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "fan": {
                "color": "#a465e5",
                "color_format": {
                  "colors": [
                    "#a465e5FF",
                    "#a465e5FF"
                  ],
                  "end_point": "0,100",
                  "gradients": [
                    0,
                    100
                  ],
                  "start_point": "0,0"
                },
                "is_fan": 1,
                "name": "坠落·空",
                "num_desc": "002272",
                "number": 2272
              },
              "id": 68557,
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png",
              "item_id": 68557,
              "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=68557&isdiy=0&part=card&from=post&f_source=garb&vmid=2095498218&native.theme=1&navhide=1",
              "name": "坠落·空粉丝"
            },
            "face": "https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg",
            "face_nft": false,
            "following": null,
            "jump_url": "//space.bilibili.com/2095498218/dynamic",
            "label": "",
            "mid": 2095498218,
            "name": "次元壁小宋",
            "official_verify": {
              "desc": "",
              "type": -1
            },
            "pendant": {
              "expire": 0,
              "image": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png",
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png",
              "image_enhance_frame": "",
              "n_pid": 68553,
              "name": "坠落·空",
              "pid": 68553
            },
            "pub_action": "",
            "pub_location_text": "",
            "pub_time": "03月15日",
            "pub_ts": 1742006883,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 0,
              "avatar_subscript_url": "",
              "due_date": 1683129600000,
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
                  "orig_text": "我参与了投票",
                  "text": "我参与了投票",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                },
                {
                  "orig_text": "​你们露过声吗？",
                  "rid": "14689974",
                  "text": "​你们露过声吗？",
                  "type": "RICH_TEXT_NODE_TYPE_VOTE"
                },
                {
                  "orig_text": "我投给了没露过",
                  "text": "我投给了没露过",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                }
              ],
              "text": "我参与了投票​你们露过声吗？我投给了没露过"
            },
            "major": null,
            "topic": null
          },
          "module_more": {
            "three_point_items": [
              {
                "label": "置顶",
                "params": {
                  "dynamic_id": "1044400681921806345",
                  "status": false
                },
                "type": "THREE_POINT_TOP"
              },
              {
                "label": "删除",
                "modal": {
                  "cancel": "取消",
                  "confirm": "确认删除",
                  "content": "动态删除后将无法恢复，请谨慎操作",
                  "title": "要删除动态吗？"
                },
                "params": {
                  "dyn_id_str": "1044400681921806345",
                  "dyn_type": 1,
                  "rid_str": "1044400681921806345"
                },
                "type": "THREE_POINT_DELETE"
              }
            ]
          },
          "module_stat": {
            "comment": {
              "count": 0,
              "forbidden": false
            },
            "forward": {
              "count": 0,
              "forbidden": false
            },
            "like": {
              "count": 0,
              "forbidden": false,
              "status": false
            }
          }
        },
        "orig": {
          "basic": {
            "comment_id_str": "",
            "comment_type": 0,
            "jump_url": "//www.bilibili.com/opus/1041900177728733184",
            "like_icon": {
              "action_url": "",
              "end_url": "",
              "id": 0,
              "start_url": ""
            },
            "rid_str": ""
          },
          "id_str": "1041900177728733184",
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
                              "url": "https://i2.hdslb.com/bfs/face/70af6734f5e92c4345c592b099200b9519fdac23.jpg"
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
                "mid": "3546855879215762"
              },
              "face": "https://i2.hdslb.com/bfs/face/70af6734f5e92c4345c592b099200b9519fdac23.jpg",
              "face_nft": false,
              "following": null,
              "jump_url": "//space.bilibili.com/3546855879215762/dynamic",
              "label": "",
              "mid": 3546855879215762,
              "name": "爱玩休闲区的樱梦雪",
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
              "pub_time": "",
              "pub_ts": 1741424689,
              "type": "AUTHOR_TYPE_NORMAL",
              "vip": {
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
                "status": 0,
                "theme_type": 0,
                "type": 0
              }
            },
            "module_dynamic": {
              "additional": {
                "type": "ADDITIONAL_TYPE_VOTE",
                "vote": {
                  "button": {
                    "jump_style": {
                      "text": "参与"
                    },
                    "type": 1
                  },
                  "choice_cnt": 1,
                  "default_share": 1,
                  "desc": "818人参与",
                  "end_time": 1743239041,
                  "join_num": 818,
                  "status": 4,
                  "title": "你们露过声吗？",
                  "type": null,
                  "uid": 3546855879215762,
                  "vote_id": 14689974
                }
              },
              "desc": null,
              "major": {
                "opus": {
                  "fold_action": [
                    "展开",
                    "收起"
                  ],
                  "jump_url": "//www.bilibili.com/opus/1041900177728733184",
                  "pics": [],
                  "summary": {
                    "rich_text_nodes": [
                      {
                        "orig_text": "我发起了一个投票",
                        "text": "我发起了一个投票",
                        "type": "RICH_TEXT_NODE_TYPE_TEXT"
                      },
                      {
                        "orig_text": "​你们露过声吗？",
                        "rid": "14689974",
                        "text": "​你们露过声吗？",
                        "type": "RICH_TEXT_NODE_TYPE_VOTE"
                      }
                    ],
                    "text": "我发起了一个投票​你们露过声吗？"
                  },
                  "title": null
                },
                "type": "MAJOR_TYPE_OPUS"
              },
              "topic": null
            }
          },
          "type": "DYNAMIC_TYPE_WORD",
          "visible": true
        },
        "type": "DYNAMIC_TYPE_FORWARD",
        "visible": true
      }
    ],
    "offset": "1044400681921806345",
    "update_baseline": "",
    "update_num": 0
  }
}
```

</details>

## 设置置顶动态

参见 [设置置顶动态](action.md#设置置顶动态)

## 取消置顶动态

参见 [取消置顶动态](action.md#取消置顶动态)
