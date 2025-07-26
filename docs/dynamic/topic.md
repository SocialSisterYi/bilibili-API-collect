# 话题

## 获取话题下动态列表

> https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/topic
> https://app.bilibili.com/x/topic/web/details/cards

*请求方法: GET*

**URL 参数:**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ------ | ---- | ---- | ------ | ---- |
| topic_id | number | 话题 ID | 必要 |  |
| sort_by | number | 排序方式 | 不必要 | 见回复 `data.topic_card_list.topic_sort_by_conf` 对象 |
| offset | string | 偏移量 | 不必要 | 上一次请求回复的 `data.topic_card_list.offset` |
| page_size | number | 每页数量 | 不必要 | 默认为 `20` |
| source | string | 来源 | 不必要 | 如 `Web` (接口 1) `H5` (接口 2) |
| features | string | 功能模块 | 不必要 | 仅接口 1, 如 `itemOpusStyle,listOnlyfans,opusBigCover,onlyfansVote,decorationCard`, 参见 [功能模块](../opus/features.md) |
| web_location | string | `333.1036` | 不必要 | 仅接口 2 |

**JSON 回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| code | number | 返回值 | 0: 成功 |
| data | object | 数据本体 |  |
| message | string | 错误信息 | 成功时为 `0` |
| ttl | number | `1` |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| related_topics | object | 相关话题? | 空对象 |
| topic_card_list | object | 话题卡片列表 |  |

`data.topic_card_list` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| has_more | boolean | 是否有更多 |  |
| items | object[] | 动态列表 | 套了个娃 |
| offset | string | 偏移量 |  |
| topic_sort_by_conf | object | 排序方式配置 |  |

`data.topic_card_list.items[]` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| dynamic_card_item | object | 动态 | 基本同 [获取全部动态列表](all.md#获取全部动态列表) 的 `data.items[]` 对象 |
| topic_type | string | 话题类型? | 目前所见似乎只有 `"DYNAMIC"` |

`data.topic_card_list.topic_sort_by_conf` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| all_sort_by | object[] | 全部排序方式 |  |
| default_sort_by | number | 默认排序方式 |  |
| show_sort_by | number | 展示的排序方式 |  |

`data.topic_card_list.topic_sort_by_conf.all_sort_by[]` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| sort_by | number | 排序方式 |  |
| sort_name | string | 排序名称 |  |

**示例:**

```shell
curl 'https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/topic?topic_id=34958&sort_by=0&offset=&page_size=20&source=Web&features=itemOpusStyle%2ClistOnlyfans%2CopusBigCover%2ConlyfansVote%2CdecorationCard'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "data": {
    "related_topics": {},
    "topic_card_list": {
      "has_more": true,
      "items": [
        {
          "dynamic_card_item": {
            "basic": {
              "comment_id_str": "114687152757937",
              "comment_type": 1,
              "like_icon": {
                "action_url": "",
                "end_url": "",
                "id": 0,
                "start_url": ""
              },
              "rid_str": "114687152757937"
            },
            "id_str": "1078676238928707587",
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
                                "url": "https://i1.hdslb.com/bfs/face/38f6660463a00c412c5cd1917f91bbd8119ee7bc.jpg"
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
                              "local": 4,
                              "src_type": 2
                            }
                          },
                          "res_type": 3
                        },
                        "visible": true
                      }
                    ]
                  },
                  "mid": "1310515966"
                },
                "face": "https://i1.hdslb.com/bfs/face/38f6660463a00c412c5cd1917f91bbd8119ee7bc.jpg",
                "face_nft": false,
                "following": null,
                "jump_url": "//space.bilibili.com/1310515966/dynamic",
                "label": "",
                "mid": 1310515966,
                "name": "声优音画",
                "official_verify": {
                  "desc": "",
                  "type": 1
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
                "pub_location_text": "",
                "pub_time": "06月15日",
                "pub_ts": 1749987283,
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
                "additional": null,
                "desc": null,
                "major": {
                  "archive": {
                    "aid": "114687152757937",
                    "badge": {
                      "bg_color": "#FB7299",
                      "color": "#FFFFFF",
                      "icon_url": null,
                      "text": "投稿视频"
                    },
                    "bvid": "BV1hCMtzKEyP",
                    "cover": "http://i2.hdslb.com/bfs/archive/5994a570d9a12a89bcb50258455ff1302efdb97b.jpg",
                    "desc": "“把妹王”火麟飞携金句杀疯全场，少年意气燃爆童年DNA！\n出镜配音演员：鞠月斌@配音演员鞠月斌",
                    "disable_preview": 0,
                    "duration_text": "00:43",
                    "jump_url": "//www.bilibili.com/video/BV1hCMtzKEyP/",
                    "stat": {
                      "danmaku": "69",
                      "play": "39.3万"
                    },
                    "title": "声优音画｜《超兽武装》经典热血回归！",
                    "type": 1
                  },
                  "type": "MAJOR_TYPE_ARCHIVE"
                },
                "topic": null
              },
              "module_more": {
                "three_point_items": [
                  {
                    "label": "举报",
                    "type": "THREE_POINT_REPORT"
                  },
                  {
                    "label": "与话题无关",
                    "type": "THREE_POINT_TOPIC_IRRELEVANT"
                  }
                ]
              },
              "module_stat": {
                "comment": {
                  "count": 328,
                  "forbidden": false
                },
                "forward": {
                  "count": 6,
                  "forbidden": false
                },
                "like": {
                  "count": 40598,
                  "forbidden": false,
                  "status": false
                }
              }
            },
            "type": "DYNAMIC_TYPE_AV",
            "visible": true
          },
          "topic_type": "DYNAMIC"
        },
        {
          "dynamic_card_item": {
            "basic": {
              "comment_id_str": "473683637",
              "comment_type": 1,
              "like_icon": {
                "action_url": "",
                "end_url": "",
                "id": 0,
                "start_url": ""
              },
              "rid_str": "473683637"
            },
            "id_str": "712669283716431894",
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
                                "url": "https://i2.hdslb.com/bfs/face/eba2897173640343e5f9294f365ee0eb2082f525.jpg"
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
                              "local": 1,
                              "src_type": 2
                            }
                          },
                          "res_type": 3
                        },
                        "visible": true
                      }
                    ]
                  },
                  "mid": "387122516"
                },
                "decoration_card": {
                  "big_card_url": "https://i0.hdslb.com/bfs/garb/open/86e89e72b134283bf72e66c8e7c6e49b2d26d9e3.png",
                  "card_type": 2,
                  "card_type_name": "免费",
                  "card_url": "https://i0.hdslb.com/bfs/garb/open/86e89e72b134283bf72e66c8e7c6e49b2d26d9e3.png",
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
                    "num_desc": "008059",
                    "number": 8059
                  },
                  "id": 69432,
                  "image_enhance": "https://i0.hdslb.com/bfs/garb/open/86e89e72b134283bf72e66c8e7c6e49b2d26d9e3.png",
                  "item_id": 69432,
                  "jump_url": "https://www.bilibili.com/h5/mall/digital-card/home?act_id=102704&from=post&f_source=garb&-Abrowser=live&hybrid_set_header=2&navhide=1&anchor_task=1",
                  "name": "名侦探柯南30周年"
                },
                "face": "https://i2.hdslb.com/bfs/face/eba2897173640343e5f9294f365ee0eb2082f525.jpg",
                "face_nft": false,
                "following": null,
                "jump_url": "//space.bilibili.com/387122516/dynamic",
                "label": "",
                "mid": 387122516,
                "name": "橙子面包酱_",
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
                "pub_location_text": "",
                "pub_time": "2022年10月03日",
                "pub_ts": 1664769648,
                "type": "AUTHOR_TYPE_NORMAL",
                "vip": {
                  "avatar_subscript": 1,
                  "avatar_subscript_url": "",
                  "due_date": 1755273600000,
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
                      "orig_text": "来啦～",
                      "text": "来啦～",
                      "type": "RICH_TEXT_NODE_TYPE_TEXT"
                    }
                  ],
                  "text": "来啦～"
                },
                "major": {
                  "archive": {
                    "aid": "473683637",
                    "badge": {
                      "bg_color": "#FB7299",
                      "color": "#FFFFFF",
                      "icon_url": null,
                      "text": "投稿视频"
                    },
                    "bvid": "BV1BT411K7Gv",
                    "cover": "http://i1.hdslb.com/bfs/archive/d9ac37b09af57553b5d313eef60040a133c730d8.jpg",
                    "desc": "如果再给我一次机会，我一定会早点拍视频，呜呜呜呜拍到凌晨真的太困了dT-Tb\n这首歌很多人点，我也很喜欢！！！（感觉自己没唱好•᷄ࡇ•᷅）",
                    "disable_preview": 0,
                    "duration_text": "04:30",
                    "jump_url": "//www.bilibili.com/video/BV1BT411K7Gv/",
                    "stat": {
                      "danmaku": "463",
                      "play": "53.9万"
                    },
                    "title": "趁17岁唱一首本兮的《未成年》！！！",
                    "type": 1
                  },
                  "type": "MAJOR_TYPE_ARCHIVE"
                },
                "topic": null
              },
              "module_more": {
                "three_point_items": [
                  {
                    "label": "举报",
                    "type": "THREE_POINT_REPORT"
                  },
                  {
                    "label": "与话题无关",
                    "type": "THREE_POINT_TOPIC_IRRELEVANT"
                  }
                ]
              },
              "module_stat": {
                "comment": {
                  "count": 1365,
                  "forbidden": false
                },
                "forward": {
                  "count": 241,
                  "forbidden": false
                },
                "like": {
                  "count": 28628,
                  "forbidden": false,
                  "status": false
                }
              }
            },
            "type": "DYNAMIC_TYPE_AV",
            "visible": true
          },
          "topic_type": "DYNAMIC"
        },
        {
          "dynamic_card_item": {
            "basic": {
              "comment_id_str": "113231091795405",
              "comment_type": 1,
              "like_icon": {
                "action_url": "",
                "end_url": "",
                "id": 0,
                "start_url": ""
              },
              "rid_str": "113231091795405"
            },
            "id_str": "983253769442557958",
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
                                "url": "https://i2.hdslb.com/bfs/face/e84fa744dd3cefd073c446fc7737ff3b2482e3a7.jpg"
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
                  "mid": "2170934"
                },
                "face": "https://i2.hdslb.com/bfs/face/e84fa744dd3cefd073c446fc7737ff3b2482e3a7.jpg",
                "face_nft": false,
                "following": null,
                "jump_url": "//space.bilibili.com/2170934/dynamic",
                "label": "",
                "mid": 2170934,
                "name": "明月庄主",
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
                "pub_location_text": "",
                "pub_time": "2024年10月01日",
                "pub_ts": 1727770008,
                "type": "AUTHOR_TYPE_NORMAL",
                "vip": {
                  "avatar_subscript": 1,
                  "avatar_subscript_url": "",
                  "due_date": 1925308800000,
                  "label": {
                    "bg_color": "#FB7299",
                    "bg_style": 1,
                    "border_color": "",
                    "img_label_uri_hans": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/adb599797dd171e2d3d6d012f448b49679258344.png",
                    "img_label_uri_hant": "",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/sGu57N6pgK.png",
                    "label_theme": "ten_annual_vip",
                    "path": "http://i0.hdslb.com/bfs/vip/label_annual.png",
                    "text": "十年大会员",
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
                      "orig_text": "这个MC存档10岁了！明月庄主单机生存开档十周年。存档发布",
                      "text": "这个MC存档10岁了！明月庄主单机生存开档十周年。存档发布",
                      "type": "RICH_TEXT_NODE_TYPE_TEXT"
                    }
                  ],
                  "text": "这个MC存档10岁了！明月庄主单机生存开档十周年。存档发布"
                },
                "major": {
                  "archive": {
                    "aid": "113231091795405",
                    "badge": {
                      "bg_color": "#FB7299",
                      "color": "#FFFFFF",
                      "icon_url": null,
                      "text": "投稿视频"
                    },
                    "bvid": "BV1RyxYeGEqC",
                    "cover": "http://i0.hdslb.com/bfs/archive/d91bd52665bbc354a57bb6470a56504373092adf.jpg",
                    "desc": "这个MC存档10岁了！明月庄主单机生存开档十周年。存档发布\n\n百度网盘：明月庄主的原版单机生存.优化过1.21.1.7z\n链接：https://pan.baidu.com/s/1eKocLGQyo7sVyysEK1t4lA?pwd=moon \n提取码：moon \n我用夸克网盘分享了「明月庄主的原版单机生存.优化过1.21.1.7z」\n链接：https://pan.quark.cn/s/f47bc9c695b7",
                    "disable_preview": 0,
                    "duration_text": "09:21",
                    "jump_url": "//www.bilibili.com/video/BV1RyxYeGEqC/",
                    "stat": {
                      "danmaku": "455",
                      "play": "9.6万"
                    },
                    "title": "这个MC存档10岁了！明月庄主单机生存开档十周年。存档发布",
                    "type": 1
                  },
                  "type": "MAJOR_TYPE_ARCHIVE"
                },
                "topic": null
              },
              "module_more": {
                "three_point_items": [
                  {
                    "label": "举报",
                    "type": "THREE_POINT_REPORT"
                  },
                  {
                    "label": "与话题无关",
                    "type": "THREE_POINT_TOPIC_IRRELEVANT"
                  }
                ]
              },
              "module_stat": {
                "comment": {
                  "count": 883,
                  "forbidden": false
                },
                "forward": {
                  "count": 33,
                  "forbidden": false
                },
                "like": {
                  "count": 8656,
                  "forbidden": false,
                  "status": false
                }
              }
            },
            "type": "DYNAMIC_TYPE_AV",
            "visible": true
          },
          "topic_type": "DYNAMIC"
        },
        {
          "dynamic_card_item": {
            "basic": {
              "comment_id_str": "812023623",
              "comment_type": 1,
              "like_icon": {
                "action_url": "",
                "end_url": "",
                "id": 0,
                "start_url": ""
              },
              "rid_str": "812023623"
            },
            "id_str": "666777038344945689",
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
                                "url": "http://i0.hdslb.com/bfs/face/010e6ac40fef4d6560d5d716128b499ea5edf729.jpg"
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
                  "mid": "36776949"
                },
                "face": "http://i0.hdslb.com/bfs/face/010e6ac40fef4d6560d5d716128b499ea5edf729.jpg",
                "face_nft": false,
                "following": null,
                "jump_url": "//space.bilibili.com/36776949/dynamic",
                "label": "",
                "mid": 36776949,
                "name": "柚子爱好者",
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
                "pub_location_text": "",
                "pub_time": "2022年06月01日",
                "pub_ts": 1654084527,
                "type": "AUTHOR_TYPE_NORMAL",
                "vip": {
                  "avatar_subscript": 0,
                  "avatar_subscript_url": "",
                  "due_date": 1617552000000,
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
                    "aid": "812023623",
                    "badge": {
                      "bg_color": "#FB7299",
                      "color": "#FFFFFF",
                      "icon_url": null,
                      "text": "投稿视频"
                    },
                    "bvid": "BV1N34y177uz",
                    "cover": "http://i1.hdslb.com/bfs/archive/b0ac9129e78b7cc4cc95d685c38b076dc0cdcf8e.jpg",
                    "desc": "最美好的六一礼物",
                    "disable_preview": 0,
                    "duration_text": "02:08",
                    "jump_url": "//www.bilibili.com/video/BV1N34y177uz/",
                    "stat": {
                      "danmaku": "240",
                      "play": "11.3万"
                    },
                    "title": "最美好的六一礼物",
                    "type": 1
                  },
                  "type": "MAJOR_TYPE_ARCHIVE"
                },
                "topic": null
              },
              "module_more": {
                "three_point_items": [
                  {
                    "label": "举报",
                    "type": "THREE_POINT_REPORT"
                  },
                  {
                    "label": "与话题无关",
                    "type": "THREE_POINT_TOPIC_IRRELEVANT"
                  }
                ]
              },
              "module_stat": {
                "comment": {
                  "count": 359,
                  "forbidden": false
                },
                "forward": {
                  "count": 26,
                  "forbidden": false
                },
                "like": {
                  "count": 9186,
                  "forbidden": false,
                  "status": false
                }
              }
            },
            "type": "DYNAMIC_TYPE_AV",
            "visible": true
          },
          "topic_type": "DYNAMIC"
        },
        {
          "dynamic_card_item": {
            "basic": {
              "comment_id_str": "687206432",
              "comment_type": 1,
              "like_icon": {
                "action_url": "",
                "end_url": "",
                "id": 0,
                "start_url": ""
              },
              "rid_str": "687206432"
            },
            "id_str": "696709872294559798",
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
                                "url": "https://i2.hdslb.com/bfs/face/eba2897173640343e5f9294f365ee0eb2082f525.jpg"
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
                              "local": 1,
                              "src_type": 2
                            }
                          },
                          "res_type": 3
                        },
                        "visible": true
                      }
                    ]
                  },
                  "mid": "387122516"
                },
                "decoration_card": {
                  "big_card_url": "https://i0.hdslb.com/bfs/garb/open/86e89e72b134283bf72e66c8e7c6e49b2d26d9e3.png",
                  "card_type": 2,
                  "card_type_name": "免费",
                  "card_url": "https://i0.hdslb.com/bfs/garb/open/86e89e72b134283bf72e66c8e7c6e49b2d26d9e3.png",
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
                    "num_desc": "008059",
                    "number": 8059
                  },
                  "id": 69432,
                  "image_enhance": "https://i0.hdslb.com/bfs/garb/open/86e89e72b134283bf72e66c8e7c6e49b2d26d9e3.png",
                  "item_id": 69432,
                  "jump_url": "https://www.bilibili.com/h5/mall/digital-card/home?act_id=102704&from=post&f_source=garb&-Abrowser=live&hybrid_set_header=2&navhide=1&anchor_task=1",
                  "name": "名侦探柯南30周年"
                },
                "face": "https://i2.hdslb.com/bfs/face/eba2897173640343e5f9294f365ee0eb2082f525.jpg",
                "face_nft": false,
                "following": null,
                "jump_url": "//space.bilibili.com/387122516/dynamic",
                "label": "",
                "mid": 387122516,
                "name": "橙子面包酱_",
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
                "pub_location_text": "",
                "pub_time": "2022年08月21日",
                "pub_ts": 1661053808,
                "type": "AUTHOR_TYPE_NORMAL",
                "vip": {
                  "avatar_subscript": 1,
                  "avatar_subscript_url": "",
                  "due_date": 1755273600000,
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
                      "orig_text": "♥(｡￫v￩｡)♥本兮本兮本兮",
                      "text": "♥(｡￫v￩｡)♥本兮本兮本兮",
                      "type": "RICH_TEXT_NODE_TYPE_TEXT"
                    }
                  ],
                  "text": "♥(｡￫v￩｡)♥本兮本兮本兮"
                },
                "major": {
                  "archive": {
                    "aid": "687206432",
                    "badge": {
                      "bg_color": "#FB7299",
                      "color": "#FFFFFF",
                      "icon_url": null,
                      "text": "投稿视频"
                    },
                    "bvid": "BV1FU4y1k75W",
                    "cover": "http://i0.hdslb.com/bfs/archive/1890a9b9362d57fe8da5aaf7c52c90b5317e821a.jpg",
                    "desc": "好多人点这首歌，但是我真的驾驭不了wwww˃ʍ˂\n唱错了几句(ᇂ_ᇂ|||)",
                    "disable_preview": 0,
                    "duration_text": "02:55",
                    "jump_url": "//www.bilibili.com/video/BV1FU4y1k75W/",
                    "stat": {
                      "danmaku": "125",
                      "play": "11万"
                    },
                    "title": "【爷青回系列】《你在看孤独的风景》cover本兮",
                    "type": 1
                  },
                  "type": "MAJOR_TYPE_ARCHIVE"
                },
                "topic": null
              },
              "module_more": {
                "three_point_items": [
                  {
                    "label": "举报",
                    "type": "THREE_POINT_REPORT"
                  },
                  {
                    "label": "与话题无关",
                    "type": "THREE_POINT_TOPIC_IRRELEVANT"
                  }
                ]
              },
              "module_stat": {
                "comment": {
                  "count": 477,
                  "forbidden": false
                },
                "forward": {
                  "count": 34,
                  "forbidden": false
                },
                "like": {
                  "count": 5837,
                  "forbidden": false,
                  "status": false
                }
              }
            },
            "type": "DYNAMIC_TYPE_AV",
            "visible": true
          },
          "topic_type": "DYNAMIC"
        },
        {
          "dynamic_card_item": {
            "basic": {
              "comment_id_str": "452289087",
              "comment_type": 1,
              "like_icon": {
                "action_url": "",
                "end_url": "",
                "id": 0,
                "start_url": ""
              },
              "rid_str": "452289087"
            },
            "id_str": "875680820193394744",
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
                                "url": "https://i2.hdslb.com/bfs/face/9780c885127ddf5ae48b1f98c43e63b97c89ac14.jpg"
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
                  "mid": "7062857"
                },
                "face": "https://i2.hdslb.com/bfs/face/9780c885127ddf5ae48b1f98c43e63b97c89ac14.jpg",
                "face_nft": false,
                "following": null,
                "jump_url": "//space.bilibili.com/7062857/dynamic",
                "label": "",
                "mid": 7062857,
                "name": "星际靓仔",
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
                "pub_location_text": "",
                "pub_time": "2023年12月16日",
                "pub_ts": 1702723729,
                "type": "AUTHOR_TYPE_NORMAL",
                "vip": {
                  "avatar_subscript": 0,
                  "avatar_subscript_url": "",
                  "due_date": 1747670400000,
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
                    "aid": "452289087",
                    "badge": {
                      "bg_color": "#FB7299",
                      "color": "#FFFFFF",
                      "icon_url": null,
                      "text": "投稿视频"
                    },
                    "bvid": "BV1vj411p784",
                    "cover": "http://i1.hdslb.com/bfs/archive/3e50d9370c40bd5ea31ecf84419e02c913e895fa.jpg",
                    "desc": "非常感谢@君龙-金君龙  老师的音频授权！这首男版的《只凝视着你》燃爆了！好声音值得被更多人听到！\n歌手简介：金君龙，曾用名君龙，出生于吉林省延边，中国朝鲜族歌手、音乐制作人、阿里郎组合主唱。（以上内容来自百度百科）",
                    "disable_preview": 0,
                    "duration_text": "04:28",
                    "jump_url": "//www.bilibili.com/video/BV1vj411p784/",
                    "stat": {
                      "danmaku": "529",
                      "play": "20.3万"
                    },
                    "title": "恐怖如斯！男歌手竟原调翻唱灌篮高手片尾曲《只凝视着你》！",
                    "type": 1
                  },
                  "type": "MAJOR_TYPE_ARCHIVE"
                },
                "topic": null
              },
              "module_more": {
                "three_point_items": [
                  {
                    "label": "举报",
                    "type": "THREE_POINT_REPORT"
                  },
                  {
                    "label": "与话题无关",
                    "type": "THREE_POINT_TOPIC_IRRELEVANT"
                  }
                ]
              },
              "module_stat": {
                "comment": {
                  "count": 508,
                  "forbidden": false
                },
                "forward": {
                  "count": 23,
                  "forbidden": false
                },
                "like": {
                  "count": 6151,
                  "forbidden": false,
                  "status": false
                }
              }
            },
            "type": "DYNAMIC_TYPE_AV",
            "visible": true
          },
          "topic_type": "DYNAMIC"
        },
        {
          "dynamic_card_item": {
            "basic": {
              "comment_id_str": "684664595",
              "comment_type": 1,
              "like_icon": {
                "action_url": "",
                "end_url": "",
                "id": 0,
                "start_url": ""
              },
              "rid_str": "684664595"
            },
            "id_str": "668133732620697639",
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
                                "url": "https://i2.hdslb.com/bfs/face/eba2897173640343e5f9294f365ee0eb2082f525.jpg"
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
                              "local": 1,
                              "src_type": 2
                            }
                          },
                          "res_type": 3
                        },
                        "visible": true
                      }
                    ]
                  },
                  "mid": "387122516"
                },
                "decoration_card": {
                  "big_card_url": "https://i0.hdslb.com/bfs/garb/open/86e89e72b134283bf72e66c8e7c6e49b2d26d9e3.png",
                  "card_type": 2,
                  "card_type_name": "免费",
                  "card_url": "https://i0.hdslb.com/bfs/garb/open/86e89e72b134283bf72e66c8e7c6e49b2d26d9e3.png",
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
                    "num_desc": "008059",
                    "number": 8059
                  },
                  "id": 69432,
                  "image_enhance": "https://i0.hdslb.com/bfs/garb/open/86e89e72b134283bf72e66c8e7c6e49b2d26d9e3.png",
                  "item_id": 69432,
                  "jump_url": "https://www.bilibili.com/h5/mall/digital-card/home?act_id=102704&from=post&f_source=garb&-Abrowser=live&hybrid_set_header=2&navhide=1&anchor_task=1",
                  "name": "名侦探柯南30周年"
                },
                "face": "https://i2.hdslb.com/bfs/face/eba2897173640343e5f9294f365ee0eb2082f525.jpg",
                "face_nft": false,
                "following": null,
                "jump_url": "//space.bilibili.com/387122516/dynamic",
                "label": "",
                "mid": 387122516,
                "name": "橙子面包酱_",
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
                "pub_location_text": "",
                "pub_time": "2022年06月05日",
                "pub_ts": 1654400407,
                "type": "AUTHOR_TYPE_NORMAL",
                "vip": {
                  "avatar_subscript": 1,
                  "avatar_subscript_url": "",
                  "due_date": 1755273600000,
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
                  "status": 1,
                  "theme_type": 0,
                  "type": 2
                }
              },
              "module_dynamic": {
                "additional": null,
                "desc": null,
                "major": {
                  "archive": {
                    "aid": "684664595",
                    "badge": {
                      "bg_color": "#FB7299",
                      "color": "#FFFFFF",
                      "icon_url": null,
                      "text": "投稿视频"
                    },
                    "bvid": "BV15U4y117XE",
                    "cover": "http://i1.hdslb.com/bfs/archive/abb1dbb1b3b194be1f44ee049a065387bef5560b.jpg",
                    "desc": "-",
                    "disable_preview": 0,
                    "duration_text": "02:05",
                    "jump_url": "//www.bilibili.com/video/BV15U4y117XE/",
                    "stat": {
                      "danmaku": "56",
                      "play": "9.6万"
                    },
                    "title": "当然很《爱你》啦！！！今天是王心凌女孩~",
                    "type": 1
                  },
                  "type": "MAJOR_TYPE_ARCHIVE"
                },
                "topic": null
              },
              "module_more": {
                "three_point_items": [
                  {
                    "label": "举报",
                    "type": "THREE_POINT_REPORT"
                  },
                  {
                    "label": "与话题无关",
                    "type": "THREE_POINT_TOPIC_IRRELEVANT"
                  }
                ]
              },
              "module_stat": {
                "comment": {
                  "count": 290,
                  "forbidden": false
                },
                "forward": {
                  "count": 17,
                  "forbidden": false
                },
                "like": {
                  "count": 5214,
                  "forbidden": false,
                  "status": false
                }
              }
            },
            "type": "DYNAMIC_TYPE_AV",
            "visible": true
          },
          "topic_type": "DYNAMIC"
        },
        {
          "dynamic_card_item": {
            "basic": {
              "comment_id_str": "703146337",
              "comment_type": 1,
              "like_icon": {
                "action_url": "",
                "end_url": "",
                "id": 0,
                "start_url": ""
              },
              "rid_str": "703146337"
            },
            "id_str": "838814083642818565",
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
                                "url": "https://i0.hdslb.com/bfs/face/1d89b423a12ba86987c5c4d4098b285bea645b1c.jpg"
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
                              "local": 1,
                              "src_type": 2
                            }
                          },
                          "res_type": 3
                        },
                        "visible": true
                      }
                    ]
                  },
                  "mid": "44044545"
                },
                "face": "https://i0.hdslb.com/bfs/face/1d89b423a12ba86987c5c4d4098b285bea645b1c.jpg",
                "face_nft": false,
                "following": null,
                "jump_url": "//space.bilibili.com/44044545/dynamic",
                "label": "",
                "mid": 44044545,
                "name": "双马尾钳子",
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
                "pub_location_text": "",
                "pub_time": "2023年09月08日",
                "pub_ts": 1694140023,
                "type": "AUTHOR_TYPE_NORMAL",
                "vip": {
                  "avatar_subscript": 1,
                  "avatar_subscript_url": "",
                  "due_date": 1775750400000,
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
                      "orig_text": "雾草我做了四天（咳咳）（吐血）",
                      "text": "雾草我做了四天（咳咳）（吐血）",
                      "type": "RICH_TEXT_NODE_TYPE_TEXT"
                    }
                  ],
                  "text": "雾草我做了四天（咳咳）（吐血）"
                },
                "major": {
                  "archive": {
                    "aid": "703146337",
                    "badge": {
                      "bg_color": "#FB7299",
                      "color": "#FFFFFF",
                      "icon_url": null,
                      "text": "投稿视频"
                    },
                    "bvid": "BV1gm4y1K7rE",
                    "cover": "http://i1.hdslb.com/bfs/archive/04aadffdc48e010905a0ca2be4167dc4d5300022.jpg",
                    "desc": "BGM：BV1hT411L7fk\n剧情梗概：\n威廉和鲍勃本来是一对神界情侣，鲍勃为了保护威廉被乌鸦打落凡间转世为人，威廉为了追寻鲍勃，化身入树中，历经千辛万苦终于也转世为人。然而此时的两人已不认得对方，仅靠缘分结为情侣，却处处互相折磨，在痛苦中越陷越深，最后两人双双放手成全对方，各自踏上了新的人生之路。\n\n内含大量游戏贴图替换，剧情为恶搞，请勿当真！（不会真有人当真吧）",
                    "disable_preview": 0,
                    "duration_text": "04:25",
                    "jump_url": "//www.bilibili.com/video/BV1gm4y1K7rE/",
                    "stat": {
                      "danmaku": "193",
                      "play": "6.8万"
                    },
                    "title": "【锈湖】用仙剑奇侠传三的方式打开锈湖",
                    "type": 1
                  },
                  "type": "MAJOR_TYPE_ARCHIVE"
                },
                "topic": null
              },
              "module_more": {
                "three_point_items": [
                  {
                    "label": "举报",
                    "type": "THREE_POINT_REPORT"
                  },
                  {
                    "label": "与话题无关",
                    "type": "THREE_POINT_TOPIC_IRRELEVANT"
                  }
                ]
              },
              "module_stat": {
                "comment": {
                  "count": 200,
                  "forbidden": false
                },
                "forward": {
                  "count": 21,
                  "forbidden": false
                },
                "like": {
                  "count": 5565,
                  "forbidden": false,
                  "status": false
                }
              }
            },
            "type": "DYNAMIC_TYPE_AV",
            "visible": true
          },
          "topic_type": "DYNAMIC"
        },
        {
          "dynamic_card_item": {
            "basic": {
              "comment_id_str": "511956063",
              "comment_type": 1,
              "like_icon": {
                "action_url": "",
                "end_url": "",
                "id": 0,
                "start_url": ""
              },
              "rid_str": "511956063"
            },
            "id_str": "664837929337618438",
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
                                "url": "https://i1.hdslb.com/bfs/face/04345e01722540db8dce258f8a0051e1a6dba029.jpg"
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
                  "mid": "19954576"
                },
                "face": "https://i1.hdslb.com/bfs/face/04345e01722540db8dce258f8a0051e1a6dba029.jpg",
                "face_nft": false,
                "following": null,
                "jump_url": "//space.bilibili.com/19954576/dynamic",
                "label": "",
                "mid": 19954576,
                "name": "克里斯不关门_",
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
                "pub_location_text": "",
                "pub_time": "2022年05月27日",
                "pub_ts": 1653633043,
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
                "additional": null,
                "desc": {
                  "rich_text_nodes": [
                    {
                      "orig_text": "王心凌男孩因为一条十年前表演《爱你》的视频 人生第一次被采访了 而且还是央视网…来听听看我的小作文发挥的咋样吧哈哈～还没看过原视频的欢迎来我的主页看看哟～ P.S. 感谢大家之前的热情回应，当年节目的完整版会在这周晚点发，记得关注我才不会错过更新哦 感恩！ <3",
                      "text": "王心凌男孩因为一条十年前表演《爱你》的视频 人生第一次被采访了 而且还是央视网…来听听看我的小作文发挥的咋样吧哈哈～还没看过原视频的欢迎来我的主页看看哟～ P.S. 感谢大家之前的热情回应，当年节目的完整版会在这周晚点发，记得关注我才不会错过更新哦 感恩！ <3",
                      "type": "RICH_TEXT_NODE_TYPE_TEXT"
                    }
                  ],
                  "text": "王心凌男孩因为一条十年前表演《爱你》的视频 人生第一次被采访了 而且还是央视网…来听听看我的小作文发挥的咋样吧哈哈～还没看过原视频的欢迎来我的主页看看哟～ P.S. 感谢大家之前的热情回应，当年节目的完整版会在这周晚点发，记得关注我才不会错过更新哦 感恩！ <3"
                },
                "major": {
                  "archive": {
                    "aid": "511956063",
                    "badge": {
                      "bg_color": "#FB7299",
                      "color": "#FFFFFF",
                      "icon_url": null,
                      "text": "投稿视频"
                    },
                    "bvid": "BV1zg411o7Sn",
                    "cover": "http://i0.hdslb.com/bfs/archive/f9969e889d36042a4addfbe6cffc2b1ccf57efc2.jpg",
                    "desc": "王心凌男孩因为一条十年前表演《爱你》的视频 人生第一次被采访了 而且还是央视网…来听听看我的小作文发挥的咋样吧哈哈～还没看过原视频的欢迎来我的主页看看哟～ P.S. 感谢大家之前的热情回应，当年节目的完整版会在这周晚点发，记得关注我才不会错过更新哦 感恩！ <3",
                    "disable_preview": 0,
                    "duration_text": "03:16",
                    "jump_url": "//www.bilibili.com/video/BV1zg411o7Sn/",
                    "stat": {
                      "danmaku": "59",
                      "play": "5.7万"
                    },
                    "title": "王心凌男孩你好 我是央视网记者 可以问你几个问题吗？",
                    "type": 1
                  },
                  "type": "MAJOR_TYPE_ARCHIVE"
                },
                "topic": null
              },
              "module_more": {
                "three_point_items": [
                  {
                    "label": "举报",
                    "type": "THREE_POINT_REPORT"
                  },
                  {
                    "label": "与话题无关",
                    "type": "THREE_POINT_TOPIC_IRRELEVANT"
                  }
                ]
              },
              "module_stat": {
                "comment": {
                  "count": 136,
                  "forbidden": false
                },
                "forward": {
                  "count": 9,
                  "forbidden": false
                },
                "like": {
                  "count": 3696,
                  "forbidden": false,
                  "status": false
                }
              }
            },
            "type": "DYNAMIC_TYPE_AV",
            "visible": true
          },
          "topic_type": "DYNAMIC"
        },
        {
          "dynamic_card_item": {
            "basic": {
              "comment_id_str": "526638349",
              "comment_type": 1,
              "like_icon": {
                "action_url": "",
                "end_url": "",
                "id": 0,
                "start_url": ""
              },
              "rid_str": "526638349"
            },
            "id_str": "778087296460128312",
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
                                "url": "http://i0.hdslb.com/bfs/face/dbe9074fda0c174a851d0d79e1bd27ddaa18c9e5.jpg"
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
                  "mid": "419805517"
                },
                "face": "http://i0.hdslb.com/bfs/face/dbe9074fda0c174a851d0d79e1bd27ddaa18c9e5.jpg",
                "face_nft": false,
                "following": null,
                "jump_url": "//space.bilibili.com/419805517/dynamic",
                "label": "",
                "mid": 419805517,
                "name": "精分小阿夺",
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
                "pub_location_text": "",
                "pub_time": "2023年03月28日",
                "pub_ts": 1680000966,
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
                "additional": null,
                "desc": null,
                "major": {
                  "archive": {
                    "aid": "526638349",
                    "badge": {
                      "bg_color": "#FB7299",
                      "color": "#FFFFFF",
                      "icon_url": null,
                      "text": "投稿视频"
                    },
                    "bvid": "BV1xM411g7uZ",
                    "cover": "http://i2.hdslb.com/bfs/archive/ea2e6054e898241debf1fe991b5e36ab562a11df.jpg",
                    "desc": "-",
                    "disable_preview": 0,
                    "duration_text": "00:47",
                    "jump_url": "//www.bilibili.com/video/BV1xM411g7uZ/",
                    "stat": {
                      "danmaku": "55",
                      "play": "4.7万"
                    },
                    "title": "有哪些动漫曾带给你“爷青回”的瞬间？",
                    "type": 1
                  },
                  "type": "MAJOR_TYPE_ARCHIVE"
                },
                "topic": null
              },
              "module_more": {
                "three_point_items": [
                  {
                    "label": "举报",
                    "type": "THREE_POINT_REPORT"
                  },
                  {
                    "label": "与话题无关",
                    "type": "THREE_POINT_TOPIC_IRRELEVANT"
                  }
                ]
              },
              "module_stat": {
                "comment": {
                  "count": 45,
                  "forbidden": false
                },
                "forward": {
                  "count": 0,
                  "forbidden": false
                },
                "like": {
                  "count": 3410,
                  "forbidden": false,
                  "status": false
                }
              }
            },
            "type": "DYNAMIC_TYPE_AV",
            "visible": true
          },
          "topic_type": "DYNAMIC"
        },
        {
          "dynamic_card_item": {
            "basic": {
              "comment_id_str": "726866951",
              "comment_type": 1,
              "like_icon": {
                "action_url": "",
                "end_url": "",
                "id": 0,
                "start_url": ""
              },
              "rid_str": "726866951"
            },
            "id_str": "663496718409531463",
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
                                "url": "https://i1.hdslb.com/bfs/face/675aa52717ee9e5aad48e8bd8dd2e1f259b3200c.jpg"
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
                              "local": 1,
                              "src_type": 2
                            }
                          },
                          "res_type": 3
                        },
                        "visible": true
                      }
                    ]
                  },
                  "mid": "77060623"
                },
                "face": "https://i1.hdslb.com/bfs/face/675aa52717ee9e5aad48e8bd8dd2e1f259b3200c.jpg",
                "face_nft": false,
                "following": null,
                "jump_url": "//space.bilibili.com/77060623/dynamic",
                "label": "",
                "mid": 77060623,
                "name": "pH一sH_肨虎花",
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
                "pub_location_text": "",
                "pub_time": "2022年05月23日",
                "pub_ts": 1653320768,
                "type": "AUTHOR_TYPE_NORMAL",
                "vip": {
                  "avatar_subscript": 1,
                  "avatar_subscript_url": "",
                  "due_date": 1799596800000,
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
                      "orig_text": "午夜偷袭！",
                      "text": "午夜偷袭！",
                      "type": "RICH_TEXT_NODE_TYPE_TEXT"
                    }
                  ],
                  "text": "午夜偷袭！"
                },
                "major": {
                  "archive": {
                    "aid": "726866951",
                    "badge": {
                      "bg_color": "#FB7299",
                      "color": "#FFFFFF",
                      "icon_url": null,
                      "text": "投稿视频"
                    },
                    "bvid": "BV1iS4y1z7oC",
                    "cover": "http://i0.hdslb.com/bfs/archive/8b6fe643251147bc3a1791d028c56aa1c2ac6984.jpg",
                    "desc": "听到甜心教主的《爱你》真的忍不住了，忍着伤痛画了这一笔，希望能够得到你的三连！",
                    "disable_preview": 0,
                    "duration_text": "03:52",
                    "jump_url": "//www.bilibili.com/video/BV1iS4y1z7oC/",
                    "stat": {
                      "danmaku": "310",
                      "play": "3.3万"
                    },
                    "title": "这一笔，爷青回！王心凌《梦的光点》",
                    "type": 1
                  },
                  "type": "MAJOR_TYPE_ARCHIVE"
                },
                "topic": null
              },
              "module_more": {
                "three_point_items": [
                  {
                    "label": "举报",
                    "type": "THREE_POINT_REPORT"
                  },
                  {
                    "label": "与话题无关",
                    "type": "THREE_POINT_TOPIC_IRRELEVANT"
                  }
                ]
              },
              "module_stat": {
                "comment": {
                  "count": 211,
                  "forbidden": false
                },
                "forward": {
                  "count": 3,
                  "forbidden": false
                },
                "like": {
                  "count": 2485,
                  "forbidden": false,
                  "status": false
                }
              }
            },
            "type": "DYNAMIC_TYPE_AV",
            "visible": true
          },
          "topic_type": "DYNAMIC"
        },
        {
          "dynamic_card_item": {
            "basic": {
              "comment_id_str": "114820430961589",
              "comment_type": 1,
              "like_icon": {
                "action_url": "",
                "end_url": "",
                "id": 0,
                "start_url": ""
              },
              "rid_str": "114820430961589"
            },
            "id_str": "1087411287614291971",
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
                                "url": "https://i1.hdslb.com/bfs/face/20843b2d7edf0d096bd09ff767065ebcec6fb3ad.jpg"
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
                  "mid": "3546766148372797"
                },
                "face": "https://i1.hdslb.com/bfs/face/20843b2d7edf0d096bd09ff767065ebcec6fb3ad.jpg",
                "face_nft": false,
                "following": null,
                "jump_url": "//space.bilibili.com/3546766148372797/dynamic",
                "label": "",
                "mid": 3546766148372797,
                "name": "柿杂乱",
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
                "pub_location_text": "",
                "pub_time": "07月09日",
                "pub_ts": 1752021070,
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
                "additional": null,
                "desc": null,
                "major": {
                  "archive": {
                    "aid": "114820430961589",
                    "badge": {
                      "bg_color": "#FB7299",
                      "color": "#FFFFFF",
                      "icon_url": null,
                      "text": "投稿视频"
                    },
                    "bvid": "BV1XMGszTE8s",
                    "cover": "http://i0.hdslb.com/bfs/archive/ae8caade776af7e197d8b172f18004916d1f2eb8.jpg",
                    "desc": "这个视频抠图剪辑找素材花了好几天时间，期间运气太非酋抽卡一直不出彩，被迫开了个新号，感谢你对这个系列的支持。",
                    "disable_preview": 0,
                    "duration_text": "00:33",
                    "jump_url": "//www.bilibili.com/video/BV1XMGszTE8s/",
                    "stat": {
                      "danmaku": "39",
                      "play": "1.7万"
                    },
                    "title": "【SCP×BA】SCP蔚蓝档案合作组织。希望这个也能火。",
                    "type": 1
                  },
                  "type": "MAJOR_TYPE_ARCHIVE"
                },
                "topic": null
              },
              "module_more": {
                "three_point_items": [
                  {
                    "label": "举报",
                    "type": "THREE_POINT_REPORT"
                  },
                  {
                    "label": "与话题无关",
                    "type": "THREE_POINT_TOPIC_IRRELEVANT"
                  }
                ]
              },
              "module_stat": {
                "comment": {
                  "count": 223,
                  "forbidden": false
                },
                "forward": {
                  "count": 2,
                  "forbidden": false
                },
                "like": {
                  "count": 2092,
                  "forbidden": false,
                  "status": false
                }
              }
            },
            "type": "DYNAMIC_TYPE_AV",
            "visible": true
          },
          "topic_type": "DYNAMIC"
        },
        {
          "dynamic_card_item": {
            "basic": {
              "comment_id_str": "946166332",
              "comment_type": 1,
              "like_icon": {
                "action_url": "",
                "end_url": "",
                "id": 0,
                "start_url": ""
              },
              "rid_str": "946166332"
            },
            "id_str": "738695406850932758",
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
                                "url": "https://i0.hdslb.com/bfs/face/2e591a702d42f753fdfb847825274ef745675e51.jpg"
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
                                "url": "https://i0.hdslb.com/bfs/garb/item/488870931b1bba66da36d22848f0720480d3d79a.png"
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
                              "local": 1,
                              "src_type": 2
                            }
                          },
                          "res_type": 3
                        },
                        "visible": true
                      }
                    ]
                  },
                  "layers": [
                    {
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
                                  "url": "https://i0.hdslb.com/bfs/face/2e591a702d42f753fdfb847825274ef745675e51.jpg"
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
                    {
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
                            "res_animation": {
                              "webp_src": {
                                "remote": {
                                  "bfs_style": "widget-layer-avatar",
                                  "url": "https://i0.hdslb.com/bfs/garb/item/5974f17f9d96a88bafba2f6d18d647a486e88312.webp"
                                },
                                "src_type": 1
                              }
                            },
                            "res_type": 4
                          },
                          "visible": true
                        }
                      ]
                    },
                    {
                      "layers": [
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
                                "local": 1,
                                "src_type": 2
                              }
                            },
                            "res_type": 3
                          },
                          "visible": true
                        }
                      ]
                    }
                  ],
                  "mid": "2518014"
                },
                "face": "https://i0.hdslb.com/bfs/face/2e591a702d42f753fdfb847825274ef745675e51.jpg",
                "face_nft": false,
                "following": null,
                "jump_url": "//space.bilibili.com/2518014/dynamic",
                "label": "",
                "mid": 2518014,
                "name": "熊木柚子",
                "official_verify": {
                  "desc": "",
                  "type": -1
                },
                "pendant": {
                  "expire": 0,
                  "image": "https://i0.hdslb.com/bfs/garb/item/488870931b1bba66da36d22848f0720480d3d79a.png",
                  "image_enhance": "https://i0.hdslb.com/bfs/garb/item/5974f17f9d96a88bafba2f6d18d647a486e88312.webp",
                  "image_enhance_frame": "https://i0.hdslb.com/bfs/garb/item/4316a3910bb0bd6f2f1c267a3e9187f0b9fe5bd0.png",
                  "n_pid": 32257,
                  "name": "EveOneCat2",
                  "pid": 32257
                },
                "pub_action": "投稿了视频",
                "pub_location_text": "",
                "pub_time": "2022年12月12日",
                "pub_ts": 1670829327,
                "type": "AUTHOR_TYPE_NORMAL",
                "vip": {
                  "avatar_subscript": 1,
                  "avatar_subscript_url": "",
                  "due_date": 1786550400000,
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
                      "orig_text": "彩虹岛里得到的第一件稀有武器就是“黑发狐妖可爱魔杖”",
                      "text": "彩虹岛里得到的第一件稀有武器就是“黑发狐妖可爱魔杖”",
                      "type": "RICH_TEXT_NODE_TYPE_TEXT"
                    }
                  ],
                  "text": "彩虹岛里得到的第一件稀有武器就是“黑发狐妖可爱魔杖”"
                },
                "major": {
                  "archive": {
                    "aid": "946166332",
                    "badge": {
                      "bg_color": "#FB7299",
                      "color": "#FFFFFF",
                      "icon_url": null,
                      "text": "投稿视频"
                    },
                    "bvid": "BV1iW4y1M7y2",
                    "cover": "http://i2.hdslb.com/bfs/archive/f49ae764cbee2f4bcda09334f1a2c64488597b76.jpg",
                    "desc": "彩虹岛游戏音乐翻奏\n作曲：ESti\n演奏乐器：长笛",
                    "disable_preview": 0,
                    "duration_text": "02:20",
                    "jump_url": "//www.bilibili.com/video/BV1iW4y1M7y2/",
                    "stat": {
                      "danmaku": "50",
                      "play": "4.5万"
                    },
                    "title": "【彩虹岛】山岳地带bgm——《shanghai runner》",
                    "type": 1
                  },
                  "type": "MAJOR_TYPE_ARCHIVE"
                },
                "topic": null
              },
              "module_more": {
                "three_point_items": [
                  {
                    "label": "举报",
                    "type": "THREE_POINT_REPORT"
                  },
                  {
                    "label": "与话题无关",
                    "type": "THREE_POINT_TOPIC_IRRELEVANT"
                  }
                ]
              },
              "module_stat": {
                "comment": {
                  "count": 302,
                  "forbidden": false
                },
                "forward": {
                  "count": 10,
                  "forbidden": false
                },
                "like": {
                  "count": 2893,
                  "forbidden": false,
                  "status": false
                }
              }
            },
            "type": "DYNAMIC_TYPE_AV",
            "visible": true
          },
          "topic_type": "DYNAMIC"
        },
        {
          "dynamic_card_item": {
            "basic": {
              "comment_id_str": "274780128",
              "comment_type": 1,
              "like_icon": {
                "action_url": "",
                "end_url": "",
                "id": 0,
                "start_url": ""
              },
              "rid_str": "274780128"
            },
            "id_str": "830237944487870470",
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
                                "url": "https://i2.hdslb.com/bfs/face/0e66175c1933add3de8c7ff2612912b0ed0eabcb.jpg"
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
                  "mid": "1832864498"
                },
                "face": "https://i2.hdslb.com/bfs/face/0e66175c1933add3de8c7ff2612912b0ed0eabcb.jpg",
                "face_nft": false,
                "following": null,
                "jump_url": "//space.bilibili.com/1832864498/dynamic",
                "label": "",
                "mid": 1832864498,
                "name": "桃之夭夭之桃",
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
                "pub_location_text": "",
                "pub_time": "2023年08月16日",
                "pub_ts": 1692143235,
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
                "additional": null,
                "desc": null,
                "major": {
                  "archive": {
                    "aid": "274780128",
                    "badge": {
                      "bg_color": "#FB7299",
                      "color": "#FFFFFF",
                      "icon_url": null,
                      "text": "投稿视频"
                    },
                    "bvid": "BV1tF411y73f",
                    "cover": "http://i2.hdslb.com/bfs/archive/ca224c68033c77cd028aa8c748cc544e0c3db746.jpg",
                    "desc": "最近真的很忙，忙着生病，忙着工作，忙着搬家，所以抓紧时间更新一下。",
                    "disable_preview": 0,
                    "duration_text": "02:20",
                    "jump_url": "//www.bilibili.com/video/BV1tF411y73f/",
                    "stat": {
                      "danmaku": "108",
                      "play": "3.4万"
                    },
                    "title": "你不开心就来看我视频咯！Just forget  me please！",
                    "type": 1
                  },
                  "type": "MAJOR_TYPE_ARCHIVE"
                },
                "topic": null
              },
              "module_more": {
                "three_point_items": [
                  {
                    "label": "举报",
                    "type": "THREE_POINT_REPORT"
                  },
                  {
                    "label": "与话题无关",
                    "type": "THREE_POINT_TOPIC_IRRELEVANT"
                  }
                ]
              },
              "module_stat": {
                "comment": {
                  "count": 152,
                  "forbidden": false
                },
                "forward": {
                  "count": 2,
                  "forbidden": false
                },
                "like": {
                  "count": 1221,
                  "forbidden": false,
                  "status": false
                }
              }
            },
            "type": "DYNAMIC_TYPE_AV",
            "visible": true
          },
          "topic_type": "DYNAMIC"
        },
        {
          "dynamic_card_item": {
            "basic": {
              "comment_id_str": "404110312",
              "comment_type": 1,
              "like_icon": {
                "action_url": "",
                "end_url": "",
                "id": 0,
                "start_url": ""
              },
              "rid_str": "404110312"
            },
            "id_str": "823361087690768450",
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
                                "url": "https://i1.hdslb.com/bfs/face/007e6c54bc86b40950b2d213973cd732f47163ce.jpg"
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
                              "local": 4,
                              "src_type": 2
                            }
                          },
                          "res_type": 3
                        },
                        "visible": true
                      }
                    ]
                  },
                  "mid": "16836724"
                },
                "decoration_card": {
                  "big_card_url": "https://i0.hdslb.com/bfs/garb/item/ceb7d1827f13103f0d499f62b1ffa8af5f05c143.png",
                  "card_type": 2,
                  "card_type_name": "免费",
                  "card_url": "https://i0.hdslb.com/bfs/garb/item/ceb7d1827f13103f0d499f62b1ffa8af5f05c143.png",
                  "fan": {
                    "color": "#942b32",
                    "color_format": {
                      "colors": [
                        "#942b32FF",
                        "#942b32FF"
                      ],
                      "end_point": "0,100",
                      "gradients": [
                        0,
                        100
                      ],
                      "start_point": "0,0"
                    },
                    "is_fan": 1,
                    "name": "刺客信条15周年",
                    "num_desc": "000001",
                    "number": 1
                  },
                  "id": 38456,
                  "image_enhance": "https://i0.hdslb.com/bfs/garb/item/ceb7d1827f13103f0d499f62b1ffa8af5f05c143.png",
                  "item_id": 38456,
                  "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=38456&isdiy=0&part=card&from=post&f_source=garb&vmid=16836724&native.theme=1&navhide=1",
                  "name": "刺客信条15周年粉丝专属"
                },
                "face": "https://i1.hdslb.com/bfs/face/007e6c54bc86b40950b2d213973cd732f47163ce.jpg",
                "face_nft": false,
                "following": null,
                "jump_url": "//space.bilibili.com/16836724/dynamic",
                "label": "",
                "mid": 16836724,
                "name": "UBISOFT育碧",
                "official_verify": {
                  "desc": "",
                  "type": 1
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
                "pub_location_text": "",
                "pub_time": "2023年07月28日",
                "pub_ts": 1690542092,
                "type": "AUTHOR_TYPE_NORMAL",
                "vip": {
                  "avatar_subscript": 1,
                  "avatar_subscript_url": "",
                  "due_date": 1755792000000,
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
                      "orig_text": "每个人都是如王子一般的主角，这段名为人生的冒险，就是一场终将胜利的横版闯关。\n《波斯王子》系列历经34年沉浮，如今",
                      "text": "每个人都是如王子一般的主角，这段名为人生的冒险，就是一场终将胜利的横版闯关。\n《波斯王子》系列历经34年沉浮，如今",
                      "type": "RICH_TEXT_NODE_TYPE_TEXT"
                    },
                    {
                      "jump_url": "//search.bilibili.com/all?keyword=%E6%B3%A2%E6%96%AF%E7%8E%8B%E5%AD%90%EF%BC%9A%E5%A4%B1%E8%90%BD%E7%9A%84%E7%8E%8B%E5%86%A0",
                      "orig_text": "#波斯王子：失落的王冠#",
                      "text": "#波斯王子：失落的王冠#",
                      "type": "RICH_TEXT_NODE_TYPE_TOPIC"
                    },
                    {
                      "orig_text": "回归系列原点，以横版闯关游戏的姿态归来！想知道《波斯王子》系列是如何走到今天的吗？点击视频进入这场人生的“横版闯关”吧",
                      "text": "回归系列原点，以横版闯关游戏的姿态归来！想知道《波斯王子》系列是如何走到今天的吗？点击视频进入这场人生的“横版闯关”吧",
                      "type": "RICH_TEXT_NODE_TYPE_TEXT"
                    },
                    {
                      "emoji": {
                        "icon_url": "https://i0.hdslb.com/bfs/emote/431432c43da3ee5aab5b0e4f8931953e649e9975.png",
                        "size": 1,
                        "text": "[打call]",
                        "type": 1
                      },
                      "orig_text": "[打call]",
                      "text": "[打call]",
                      "type": "RICH_TEXT_NODE_TYPE_EMOJI"
                    }
                  ],
                  "text": "每个人都是如王子一般的主角，这段名为人生的冒险，就是一场终将胜利的横版闯关。\n《波斯王子》系列历经34年沉浮，如今#波斯王子：失落的王冠#回归系列原点，以横版闯关游戏的姿态归来！想知道《波斯王子》系列是如何走到今天的吗？点击视频进入这场人生的“横版闯关”吧[打call]"
                },
                "major": {
                  "archive": {
                    "aid": "404110312",
                    "badge": {
                      "bg_color": "#FB7299",
                      "color": "#FFFFFF",
                      "icon_url": null,
                      "text": "投稿视频"
                    },
                    "bvid": "BV17V41157hA",
                    "cover": "http://i2.hdslb.com/bfs/archive/9c275f2eb0f3c6b051e5c1abbda1db8201dc7b0f.jpg",
                    "desc": "时之神力，逆转乾坤；波斯舞台，王子归来！《波斯王子：失落的王冠》的传奇冒险将于2024年1月18日开启！",
                    "disable_preview": 0,
                    "duration_text": "05:13",
                    "jump_url": "//www.bilibili.com/video/BV17V41157hA/",
                    "stat": {
                      "danmaku": "25",
                      "play": "4.6万"
                    },
                    "title": "波斯最强体操运动员是谁？",
                    "type": 1
                  },
                  "type": "MAJOR_TYPE_ARCHIVE"
                },
                "topic": null
              },
              "module_more": {
                "three_point_items": [
                  {
                    "label": "举报",
                    "type": "THREE_POINT_REPORT"
                  },
                  {
                    "label": "与话题无关",
                    "type": "THREE_POINT_TOPIC_IRRELEVANT"
                  }
                ]
              },
              "module_stat": {
                "comment": {
                  "count": 92,
                  "forbidden": false
                },
                "forward": {
                  "count": 5,
                  "forbidden": false
                },
                "like": {
                  "count": 1350,
                  "forbidden": false,
                  "status": false
                }
              }
            },
            "type": "DYNAMIC_TYPE_AV",
            "visible": true
          },
          "topic_type": "DYNAMIC"
        },
        {
          "dynamic_card_item": {
            "basic": {
              "comment_id_str": "606448624",
              "comment_type": 1,
              "like_icon": {
                "action_url": "",
                "end_url": "",
                "id": 0,
                "start_url": ""
              },
              "rid_str": "606448624"
            },
            "id_str": "741290237143023616",
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
                                "url": "https://i0.hdslb.com/bfs/face/2e591a702d42f753fdfb847825274ef745675e51.jpg"
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
                                "url": "https://i0.hdslb.com/bfs/garb/item/488870931b1bba66da36d22848f0720480d3d79a.png"
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
                              "local": 1,
                              "src_type": 2
                            }
                          },
                          "res_type": 3
                        },
                        "visible": true
                      }
                    ]
                  },
                  "layers": [
                    {
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
                                  "url": "https://i0.hdslb.com/bfs/face/2e591a702d42f753fdfb847825274ef745675e51.jpg"
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
                    {
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
                            "res_animation": {
                              "webp_src": {
                                "remote": {
                                  "bfs_style": "widget-layer-avatar",
                                  "url": "https://i0.hdslb.com/bfs/garb/item/5974f17f9d96a88bafba2f6d18d647a486e88312.webp"
                                },
                                "src_type": 1
                              }
                            },
                            "res_type": 4
                          },
                          "visible": true
                        }
                      ]
                    },
                    {
                      "layers": [
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
                                "local": 1,
                                "src_type": 2
                              }
                            },
                            "res_type": 3
                          },
                          "visible": true
                        }
                      ]
                    }
                  ],
                  "mid": "2518014"
                },
                "face": "https://i0.hdslb.com/bfs/face/2e591a702d42f753fdfb847825274ef745675e51.jpg",
                "face_nft": false,
                "following": null,
                "jump_url": "//space.bilibili.com/2518014/dynamic",
                "label": "",
                "mid": 2518014,
                "name": "熊木柚子",
                "official_verify": {
                  "desc": "",
                  "type": -1
                },
                "pendant": {
                  "expire": 0,
                  "image": "https://i0.hdslb.com/bfs/garb/item/488870931b1bba66da36d22848f0720480d3d79a.png",
                  "image_enhance": "https://i0.hdslb.com/bfs/garb/item/5974f17f9d96a88bafba2f6d18d647a486e88312.webp",
                  "image_enhance_frame": "https://i0.hdslb.com/bfs/garb/item/4316a3910bb0bd6f2f1c267a3e9187f0b9fe5bd0.png",
                  "n_pid": 32257,
                  "name": "EveOneCat2",
                  "pid": 32257
                },
                "pub_action": "投稿了视频",
                "pub_location_text": "",
                "pub_time": "2022年12月19日",
                "pub_ts": 1671433483,
                "type": "AUTHOR_TYPE_NORMAL",
                "vip": {
                  "avatar_subscript": 1,
                  "avatar_subscript_url": "",
                  "due_date": 1786550400000,
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
                  "status": 1,
                  "theme_type": 0,
                  "type": 2
                }
              },
              "module_dynamic": {
                "additional": null,
                "desc": null,
                "major": {
                  "archive": {
                    "aid": "606448624",
                    "badge": {
                      "bg_color": "#FB7299",
                      "color": "#FFFFFF",
                      "icon_url": null,
                      "text": "投稿视频"
                    },
                    "bvid": "BV1J84y147af",
                    "cover": "http://i2.hdslb.com/bfs/archive/81ea384080b7598ed4a4ac7bc3cd68341932b042.jpg",
                    "desc": "-",
                    "disable_preview": 0,
                    "duration_text": "02:19",
                    "jump_url": "//www.bilibili.com/video/BV1J84y147af/",
                    "stat": {
                      "danmaku": "17",
                      "play": "1.4万"
                    },
                    "title": "【彩虹岛】Merry Christmas 尖叫雪地BGM——《snowfield雪地回音》",
                    "type": 1
                  },
                  "type": "MAJOR_TYPE_ARCHIVE"
                },
                "topic": null
              },
              "module_more": {
                "three_point_items": [
                  {
                    "label": "举报",
                    "type": "THREE_POINT_REPORT"
                  },
                  {
                    "label": "与话题无关",
                    "type": "THREE_POINT_TOPIC_IRRELEVANT"
                  }
                ]
              },
              "module_stat": {
                "comment": {
                  "count": 214,
                  "forbidden": false
                },
                "forward": {
                  "count": 5,
                  "forbidden": false
                },
                "like": {
                  "count": 994,
                  "forbidden": false,
                  "status": false
                }
              }
            },
            "type": "DYNAMIC_TYPE_AV",
            "visible": true
          },
          "topic_type": "DYNAMIC"
        },
        {
          "dynamic_card_item": {
            "basic": {
              "comment_id_str": "772580225",
              "comment_type": 1,
              "like_icon": {
                "action_url": "",
                "end_url": "",
                "id": 0,
                "start_url": ""
              },
              "rid_str": "772580225"
            },
            "id_str": "700423623235600425",
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
                                "url": "https://i2.hdslb.com/bfs/face/eba2897173640343e5f9294f365ee0eb2082f525.jpg"
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
                              "local": 1,
                              "src_type": 2
                            }
                          },
                          "res_type": 3
                        },
                        "visible": true
                      }
                    ]
                  },
                  "mid": "387122516"
                },
                "decoration_card": {
                  "big_card_url": "https://i0.hdslb.com/bfs/garb/open/86e89e72b134283bf72e66c8e7c6e49b2d26d9e3.png",
                  "card_type": 2,
                  "card_type_name": "免费",
                  "card_url": "https://i0.hdslb.com/bfs/garb/open/86e89e72b134283bf72e66c8e7c6e49b2d26d9e3.png",
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
                    "num_desc": "008059",
                    "number": 8059
                  },
                  "id": 69432,
                  "image_enhance": "https://i0.hdslb.com/bfs/garb/open/86e89e72b134283bf72e66c8e7c6e49b2d26d9e3.png",
                  "item_id": 69432,
                  "jump_url": "https://www.bilibili.com/h5/mall/digital-card/home?act_id=102704&from=post&f_source=garb&-Abrowser=live&hybrid_set_header=2&navhide=1&anchor_task=1",
                  "name": "名侦探柯南30周年"
                },
                "face": "https://i2.hdslb.com/bfs/face/eba2897173640343e5f9294f365ee0eb2082f525.jpg",
                "face_nft": false,
                "following": null,
                "jump_url": "//space.bilibili.com/387122516/dynamic",
                "label": "",
                "mid": 387122516,
                "name": "橙子面包酱_",
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
                "pub_location_text": "",
                "pub_time": "2022年08月31日",
                "pub_ts": 1661918483,
                "type": "AUTHOR_TYPE_NORMAL",
                "vip": {
                  "avatar_subscript": 1,
                  "avatar_subscript_url": "",
                  "due_date": 1755273600000,
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
                      "orig_text": "上学去了˃ʍ˂",
                      "text": "上学去了˃ʍ˂",
                      "type": "RICH_TEXT_NODE_TYPE_TEXT"
                    }
                  ],
                  "text": "上学去了˃ʍ˂"
                },
                "major": {
                  "archive": {
                    "aid": "772580225",
                    "badge": {
                      "bg_color": "#FB7299",
                      "color": "#FFFFFF",
                      "icon_url": null,
                      "text": "投稿视频"
                    },
                    "bvid": "BV1o14y1W7AZ",
                    "cover": "http://i2.hdslb.com/bfs/archive/fdf552056a23e3118c15b68f4acf3e62ae9a043d.jpg",
                    "desc": "开头有点夹子，对不起＞人＜！！！",
                    "disable_preview": 0,
                    "duration_text": "02:43",
                    "jump_url": "//www.bilibili.com/video/BV1o14y1W7AZ/",
                    "stat": {
                      "danmaku": "30",
                      "play": "1.7万"
                    },
                    "title": "【爷青回系列】《某个心跳》cover本兮",
                    "type": 1
                  },
                  "type": "MAJOR_TYPE_ARCHIVE"
                },
                "topic": null
              },
              "module_more": {
                "three_point_items": [
                  {
                    "label": "举报",
                    "type": "THREE_POINT_REPORT"
                  },
                  {
                    "label": "与话题无关",
                    "type": "THREE_POINT_TOPIC_IRRELEVANT"
                  }
                ]
              },
              "module_stat": {
                "comment": {
                  "count": 159,
                  "forbidden": false
                },
                "forward": {
                  "count": 6,
                  "forbidden": false
                },
                "like": {
                  "count": 1222,
                  "forbidden": false,
                  "status": false
                }
              }
            },
            "type": "DYNAMIC_TYPE_AV",
            "visible": true
          },
          "topic_type": "DYNAMIC"
        },
        {
          "dynamic_card_item": {
            "basic": {
              "comment_id_str": "360051457",
              "comment_type": 1,
              "like_icon": {
                "action_url": "",
                "end_url": "",
                "id": 0,
                "start_url": ""
              },
              "rid_str": "360051457"
            },
            "id_str": "809870209103953945",
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
                                "url": "https://i1.hdslb.com/bfs/face/991b66faf44236cdacacda526b9ab33f1445b10e.jpg"
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
                                "url": "https://i1.hdslb.com/bfs/garb/item/488870931b1bba66da36d22848f0720480d3d79a.png"
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
                              "local": 1,
                              "src_type": 2
                            }
                          },
                          "res_type": 3
                        },
                        "visible": true
                      }
                    ]
                  },
                  "layers": [
                    {
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
                                  "url": "https://i1.hdslb.com/bfs/face/991b66faf44236cdacacda526b9ab33f1445b10e.jpg"
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
                    {
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
                            "res_animation": {
                              "webp_src": {
                                "remote": {
                                  "bfs_style": "widget-layer-avatar",
                                  "url": "https://i1.hdslb.com/bfs/garb/item/5974f17f9d96a88bafba2f6d18d647a486e88312.webp"
                                },
                                "src_type": 1
                              }
                            },
                            "res_type": 4
                          },
                          "visible": true
                        }
                      ]
                    },
                    {
                      "layers": [
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
                                "local": 1,
                                "src_type": 2
                              }
                            },
                            "res_type": 3
                          },
                          "visible": true
                        }
                      ]
                    }
                  ],
                  "mid": "73276978"
                },
                "face": "https://i1.hdslb.com/bfs/face/991b66faf44236cdacacda526b9ab33f1445b10e.jpg",
                "face_nft": false,
                "following": null,
                "jump_url": "//space.bilibili.com/73276978/dynamic",
                "label": "",
                "mid": 73276978,
                "name": "醉樱履冰",
                "official_verify": {
                  "desc": "",
                  "type": -1
                },
                "pendant": {
                  "expire": 0,
                  "image": "https://i1.hdslb.com/bfs/garb/item/488870931b1bba66da36d22848f0720480d3d79a.png",
                  "image_enhance": "https://i1.hdslb.com/bfs/garb/item/5974f17f9d96a88bafba2f6d18d647a486e88312.webp",
                  "image_enhance_frame": "https://i1.hdslb.com/bfs/garb/item/4316a3910bb0bd6f2f1c267a3e9187f0b9fe5bd0.png",
                  "n_pid": 32257,
                  "name": "EveOneCat2",
                  "pid": 32257
                },
                "pub_action": "投稿了视频",
                "pub_location_text": "",
                "pub_time": "2023年06月22日",
                "pub_ts": 1687401002,
                "type": "AUTHOR_TYPE_NORMAL",
                "vip": {
                  "avatar_subscript": 1,
                  "avatar_subscript_url": "",
                  "due_date": 1767542400000,
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
                  "status": 1,
                  "theme_type": 0,
                  "type": 2
                }
              },
              "module_dynamic": {
                "additional": null,
                "desc": null,
                "major": {
                  "archive": {
                    "aid": "360051457",
                    "badge": {
                      "bg_color": "#FB7299",
                      "color": "#FFFFFF",
                      "icon_url": null,
                      "text": "投稿视频"
                    },
                    "bvid": "BV1ZX4y1W7zd",
                    "cover": "http://i2.hdslb.com/bfs/archive/627de932421b996ef8782c35ad17c816a1a9e7b8.jpg",
                    "desc": "回放：BV1tN411r7oU\n【逍遥散人】直播间：https://live.bilibili.com/1017\n【逍遥散人】主页：https://space.bilibili.com/168598",
                    "disable_preview": 0,
                    "duration_text": "20:16",
                    "jump_url": "//www.bilibili.com/video/BV1ZX4y1W7zd/",
                    "stat": {
                      "danmaku": "165",
                      "play": "5.6万"
                    },
                    "title": "【逍遥散人】散人看11年前自己的实况《幽灵诡计》",
                    "type": 1
                  },
                  "type": "MAJOR_TYPE_ARCHIVE"
                },
                "topic": null
              },
              "module_more": {
                "three_point_items": [
                  {
                    "label": "举报",
                    "type": "THREE_POINT_REPORT"
                  },
                  {
                    "label": "与话题无关",
                    "type": "THREE_POINT_TOPIC_IRRELEVANT"
                  }
                ]
              },
              "module_stat": {
                "comment": {
                  "count": 80,
                  "forbidden": false
                },
                "forward": {
                  "count": 0,
                  "forbidden": false
                },
                "like": {
                  "count": 1339,
                  "forbidden": false,
                  "status": false
                }
              }
            },
            "type": "DYNAMIC_TYPE_AV",
            "visible": true
          },
          "topic_type": "DYNAMIC"
        },
        {
          "dynamic_card_item": {
            "basic": {
              "comment_id_str": "897064867",
              "comment_type": 1,
              "like_icon": {
                "action_url": "",
                "end_url": "",
                "id": 0,
                "start_url": ""
              },
              "rid_str": "897064867"
            },
            "id_str": "666670390017261601",
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
                                "url": "https://i2.hdslb.com/bfs/face/c93eb41c2b7c1a1741f4ef6126bc78a5332014df.jpg"
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
                  "mid": "48421904"
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
                  "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=28&isdiy=0&part=card&from=post&f_source=garb&vmid=48421904&native.theme=1&navhide=1",
                  "name": "2233娘"
                },
                "face": "https://i2.hdslb.com/bfs/face/c93eb41c2b7c1a1741f4ef6126bc78a5332014df.jpg",
                "face_nft": false,
                "following": null,
                "jump_url": "//space.bilibili.com/48421904/dynamic",
                "label": "",
                "mid": 48421904,
                "name": "贾逸可",
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
                "pub_location_text": "",
                "pub_time": "2022年06月01日",
                "pub_ts": 1654059696,
                "type": "AUTHOR_TYPE_NORMAL",
                "vip": {
                  "avatar_subscript": 0,
                  "avatar_subscript_url": "",
                  "due_date": 1746288000000,
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
                      "orig_text": "一转眼十年啦，当时我还没有入驻B站，十年前你听过这首《红白机》（游戏机之歌）吗？\n我是既能模仿华语乐坛歌手翻唱，也能原创的贾逸可。祝大家儿童节快乐！\n",
                      "text": "一转眼十年啦，当时我还没有入驻B站，十年前你听过这首《红白机》（游戏机之歌）吗？\n我是既能模仿华语乐坛歌手翻唱，也能原创的贾逸可。祝大家儿童节快乐！\n",
                      "type": "RICH_TEXT_NODE_TYPE_TEXT"
                    }
                  ],
                  "text": "一转眼十年啦，当时我还没有入驻B站，十年前你听过这首《红白机》（游戏机之歌）吗？\n我是既能模仿华语乐坛歌手翻唱，也能原创的贾逸可。祝大家儿童节快乐！\n"
                },
                "major": {
                  "archive": {
                    "aid": "897064867",
                    "badge": {
                      "bg_color": "#FB7299",
                      "color": "#FFFFFF",
                      "icon_url": null,
                      "text": "投稿视频"
                    },
                    "bvid": "BV1aA4y1d7fQ",
                    "cover": "http://i1.hdslb.com/bfs/archive/5a20992eb2a886998afdd82a08b975c0e7ea2dbf.jpg",
                    "desc": "一转眼十年啦，当时我还没有入驻B站，十年前你听过这首《红白机》（游戏机之歌）吗？\n我是既能模仿华语乐坛歌手翻唱，也能原创的贾逸可。祝大家儿童节快乐！\n用这首歌送给我们的童年~一起爷青回，华语乐坛系列：\n【常玉（周董点赞原创）】BV1st4y1s7Kk\n【爱你】BV1gF41157J8\n【热爱105°C的你】BV1qw411Z7Zy\n【孤勇者】BV1AM4y1P7De\n【有何不可】BV1WL411T7vD\n【达拉崩吧】BV1rY411j73X\n【本操纲目】BV1PY411A7sJ\n【萨日朗】BV16L4y1",
                    "disable_preview": 0,
                    "duration_text": "03:32",
                    "jump_url": "//www.bilibili.com/video/BV1aA4y1d7fQ/",
                    "stat": {
                      "danmaku": "129",
                      "play": "2万"
                    },
                    "title": "⚡️爷青回！原创游戏机之歌《红白机》⚡️",
                    "type": 1
                  },
                  "type": "MAJOR_TYPE_ARCHIVE"
                },
                "topic": null
              },
              "module_more": {
                "three_point_items": [
                  {
                    "label": "举报",
                    "type": "THREE_POINT_REPORT"
                  },
                  {
                    "label": "与话题无关",
                    "type": "THREE_POINT_TOPIC_IRRELEVANT"
                  }
                ]
              },
              "module_stat": {
                "comment": {
                  "count": 109,
                  "forbidden": false
                },
                "forward": {
                  "count": 11,
                  "forbidden": false
                },
                "like": {
                  "count": 1867,
                  "forbidden": false,
                  "status": false
                }
              }
            },
            "type": "DYNAMIC_TYPE_AV",
            "visible": true
          },
          "topic_type": "DYNAMIC"
        },
        {
          "dynamic_card_item": {
            "basic": {
              "comment_id_str": "792152742",
              "comment_type": 1,
              "like_icon": {
                "action_url": "",
                "end_url": "",
                "id": 0,
                "start_url": ""
              },
              "rid_str": "792152742"
            },
            "id_str": "874962963680722993",
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
                                "url": "https://i0.hdslb.com/bfs/face/3bb211c6aa7a9adc08d22d30b3c818c5040797c1.jpg"
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
                  "mid": "1621845192"
                },
                "face": "https://i0.hdslb.com/bfs/face/3bb211c6aa7a9adc08d22d30b3c818c5040797c1.jpg",
                "face_nft": false,
                "following": null,
                "jump_url": "//space.bilibili.com/1621845192/dynamic",
                "label": "",
                "mid": 1621845192,
                "name": "太阳嘟嘟小姐姐",
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
                "pub_location_text": "",
                "pub_time": "2023年12月14日",
                "pub_ts": 1702556590,
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
                "additional": null,
                "desc": null,
                "major": {
                  "archive": {
                    "aid": "792152742",
                    "badge": {
                      "bg_color": "#FB7299",
                      "color": "#FFFFFF",
                      "icon_url": null,
                      "text": "投稿视频"
                    },
                    "bvid": "BV1ZC4y1X7zu",
                    "cover": "http://i2.hdslb.com/bfs/archive/edbfc6fa5a168714789678bbea3aab74d8af7e9c.jpg",
                    "desc": "-",
                    "disable_preview": 0,
                    "duration_text": "00:13",
                    "jump_url": "//www.bilibili.com/video/BV1ZC4y1X7zu/",
                    "stat": {
                      "danmaku": "5",
                      "play": "1.5万"
                    },
                    "title": "仿青儿仿得我要心脏骤停了！大家都说太像了，把我高兴得做梦都要笑醒！呜呜呜太喜欢了！",
                    "type": 1
                  },
                  "type": "MAJOR_TYPE_ARCHIVE"
                },
                "topic": null
              },
              "module_more": {
                "three_point_items": [
                  {
                    "label": "举报",
                    "type": "THREE_POINT_REPORT"
                  },
                  {
                    "label": "与话题无关",
                    "type": "THREE_POINT_TOPIC_IRRELEVANT"
                  }
                ]
              },
              "module_stat": {
                "comment": {
                  "count": 41,
                  "forbidden": false
                },
                "forward": {
                  "count": 0,
                  "forbidden": false
                },
                "like": {
                  "count": 1223,
                  "forbidden": false,
                  "status": false
                }
              }
            },
            "type": "DYNAMIC_TYPE_AV",
            "visible": true
          },
          "topic_type": "DYNAMIC"
        }
      ],
      "offset": "heat_2922347_20_20",
      "topic_sort_by_conf": {
        "all_sort_by": [
          {
            "sort_by": 2,
            "sort_name": "热门"
          },
          {
            "sort_by": 3,
            "sort_name": "最新"
          }
        ],
        "default_sort_by": 2,
        "show_sort_by": 2
      }
    }
  },
  "message": "0",
  "ttl": 1
}
```
</details>

<!-- Generated by json-apidoc-gen @ 2025-07-25T01:56:48.912698186Z -->

## ~~获取包含置顶及热门的动态列表~~

> ~~https://api.vc.bilibili.com/topic_svr/v1/topic_svr/fetch_dynamics~~

该接口已失效, 参见 [#852](https://github.com/SocialSisterYi/bilibili-API-collect/issues/852), 历史文档见 [此处](https://github.com/SocialSisterYi/bilibili-API-collect/blob/e99f64c9b5c2bbd156e95ca254620378a22697f7/docs/dynamic/tag_dynamics.md#%E8%8E%B7%E5%8F%96%E5%8C%85%E5%90%AB%E7%BD%AE%E9%A1%B6%E5%8F%8A%E7%83%AD%E9%97%A8%E7%9A%84%E5%8A%A8%E6%80%81%E5%88%97%E8%A1%A8)

## ~~获取历史动态列表~~

> ~~https://api.vc.bilibili.com/topic_svr/v1/topic_svr/topic_history~~

该接口已失效, 参见 [#852](https://github.com/SocialSisterYi/bilibili-API-collect/issues/852), 历史文档见 [此处](https://github.com/SocialSisterYi/bilibili-API-collect/blob/e99f64c9b5c2bbd156e95ca254620378a22697f7/docs/dynamic/tag_dynamics.md#%E8%8E%B7%E5%8F%96%E5%8E%86%E5%8F%B2%E5%8A%A8%E6%80%81%E5%88%97%E8%A1%A80)

## 搜索发布话题

> https://app.bilibili.com/x/topic/pub/search  
> https://api.bilibili.com/x/topic/pub/search

*请求方法: GET*

注: 该接口可能存在传入页面大小与返回数量不匹配的问题, 可能与访问权限有关

<!--{
  "from": {
    "url": "https://t.bilibili.com/"
    "selector": ".bili-topic-search__input__inner"
  }
}-->

**URL参数:**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| --- | --- | --- | --- | --- |
| keywords | str | 关键词 | 不必要 |  |
| content | str | 空 | 不必要 |  |
| upload_id | str | 上传 id? | 不必要 | 页面刷新第一次请求时为空, 后均非空<br />似乎为固定值, 格式: `${your_mid}_${login_or_last_refresh_or_cookie_ts}_${dig4}`, 如 `616368979_1722652786_2534` |
| page_size | int | 页大小 | 不必要 | 默认为 20 |
| page_num | int | 1 | 不必要 | 不用于翻页 |
| offset | int | 偏移 | 不必要 | 可从响应 `data.page_info.offset` 中获取 |
| web_location | str | 333.1365 | 不必要 |  |

**JSON回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 返回值 | 0: 成功<br />-400: 请求错误 |
| message | str | 错误信息 | 默认为 0 |
| ttl | num | 1 |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| new_topic | obj | 新建话题? |  |
| has_create_jurisdiction | bool | false | 是否有创建权限? |
| topic_items | array | 话题列表 |  |
| request_id | str | 请求 id |  |
| page_info | obj | 页信息 |  |

`data` 中的 `new_topic` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| name | str | 请求参数中的 `keywords` |  |

`data` 中的 `topic_items` 数组中的对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| id | num | 话题 id |  |
| name | str | 话题名 |  |
| view | num | 浏览数 |  |
| discuss | num | 讨论数 |  |
| stat_desc | str | 状态描述 |  |
| description | str | 话题描述 |  |
| show_interact_data | bool | false | 是否显示互动数据? |

`data` 中的 `page_info` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| offset | num | 下次请求可用的偏移 | 请求参数中的 `offset` + `page_size` |
| has_more | bool | 是否有更多数据 | 当没有更多时可能不存在该字段 |

**示例:**

注: 该示例就是解释开头所注的问题的一个示例

```shell
curl -G 'https://app.bilibili.com/x/topic/pub/search' \
--url-query 'keywords=2233'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "new_topic": {
      "name": "2233"
    },
    "has_create_jurisdiction": false,
    "topic_items": [
      {
        "id": 1101122,
        "name": "2233异世集",
        "view": 2502,
        "discuss": 11,
        "stat_desc": "2502浏览·11讨论",
        "description": "分享数字周边",
        "show_interact_data": false
      },
      {
        "id": 1050671,
        "name": "2233生日倒计时",
        "view": 21149,
        "discuss": 130,
        "stat_desc": "2.1万浏览·130讨论",
        "description": "2233生日倒计时",
        "show_interact_data": false
      },
      {
        "id": 1057129,
        "name": "2233手办可可爱爱",
        "view": 836,
        "discuss": 14,
        "stat_desc": "836浏览·14讨论",
        "description": "喜欢2233，",
        "show_interact_data": false
      }
    ],
    "request_id": "1$0$1723796266$7f515d4e26b7bd5007fb8ca4b066bf0b",
    "page_info": {
      "offset": 4,
      "has_more": true
    }
  }
}
```

</details>

## 推荐搜索话题?

> https://app.bilibili.com/x/topic/pub/rcmd/search  
> https://api.bilibili.com/x/topic/pub/rcmd/search

*请求方法: GET*

注: 该接口好像啥也不返回, 但是网页端会请求该接口

<!--{
  "from": {
    "url": "https://t.bilibili.com/"
  },
  "gh": [1083]
}-->

**URL参数:**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| --- | --- | --- | --- | --- |
| keywords | str | 空 | 不必要 |  |
| upload_id | str | 上传 id? | 不必要 | 同上 |
| web_location | str | 333.1365 | 不必要 | 有时请求不带该参数 |

**JSON回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 返回值 | 0: 成功 |
| message | str | 错误信息 | 默认为 0 |
| ttl | num | 1 |  |
| data | str | 数据本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | -- | --- |
| topic_items | unknown[] | 空? | 可能与 [推荐话题](#推荐话题) 相同? |
| request_id | str | 请求 id | 当传入 `keywords` 时不为空|

**示例:**

```shell
curl -G 'https://app.bilibili.com/x/topic/pub/rcmd/search'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "topic_items": [],
    "request_id": ""
  }
}
```

</details>

## 推荐话题

> https://app.bilibili.com/x/topic/web/dynamic/rcmd

*请求方法: GET*

**URL 参数:**

| 参数名       | 类型   | 内容       | 必要性 | 备注 |
| ------------ | ------ | ---------- | ------ | ---- |
| source       | string | 来源       | 不必要 | 如 `Web` |
| page_size    | number | 获取数量   | 不必要 | 默认为 `9`, 留空为 `6`, 最大为 `26`, 最小为 `1` |
| web_location | string | `333.1365` | 不必要 |      |


**JSON 回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| code | num | 返回值 | 0: 成功 |
| message | str | 错误信息 | 成功时为 `0` |
| ttl | num | `1` |  |
| data | str | 数据本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| topic_items | object[] | 话题列表 | 套了个娃 |

`data.topic_items[]` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| discuss | number | 讨论数 |  |
| dynamics | number | 动态数 |  |
| id | number | 话题 id |  |
| jump_url | string | 跳转 URL |  |
| name | string | 话题名 |  |
| show_interact_data | boolean | 是否显示互动数据? |  |
| view | number | 浏览数 |  |

**示例:**

```shell
curl -G 'https://app.bilibili.com/x/topic/web/dynamic/rcmd?page_size=9'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "data": {
    "topic_items": [
      {
        "discuss": 147,
        "dynamics": 20,
        "id": 1305890,
        "jump_url": "https://m.bilibili.com/topic-detail?topic_id=1305890",
        "name": "燕云河西凉州篇预测",
        "show_interact_data": false,
        "view": 261060
      },
      {
        "discuss": 554,
        "dynamics": 24,
        "id": 1305885,
        "jump_url": "https://m.bilibili.com/topic-detail?topic_id=1305885",
        "name": "真人版驯龙高手新预告",
        "show_interact_data": false,
        "view": 472265
      },
      {
        "discuss": 24358,
        "dynamics": 57,
        "id": 1305877,
        "jump_url": "https://m.bilibili.com/topic-detail?topic_id=1305877",
        "name": "国米4-3巴萨",
        "show_interact_data": false,
        "view": 4851673
      },
      {
        "discuss": 201,
        "dynamics": 24,
        "id": 1305933,
        "jump_url": "https://m.bilibili.com/topic-detail?topic_id=1305933",
        "name": "公积金住房贷款利率下调0.25%",
        "show_interact_data": false,
        "view": 111704
      },
      {
        "discuss": 20201,
        "dynamics": 70,
        "id": 1305920,
        "jump_url": "https://m.bilibili.com/topic-detail?topic_id=1305920",
        "name": "印度巴基斯坦交火",
        "show_interact_data": false,
        "view": 12102634
      },
      {
        "discuss": 2497,
        "dynamics": 37,
        "id": 1305940,
        "jump_url": "https://m.bilibili.com/topic-detail?topic_id=1305940",
        "name": "降准降息释放什么信号",
        "show_interact_data": false,
        "view": 475373
      },
      {
        "discuss": 11970,
        "dynamics": 51,
        "id": 1305886,
        "jump_url": "https://m.bilibili.com/topic-detail?topic_id=1305886",
        "name": "淮水竹亭值得一看吗",
        "show_interact_data": false,
        "view": 3171863
      },
      {
        "discuss": 860,
        "dynamics": 38,
        "id": 1305904,
        "jump_url": "https://m.bilibili.com/topic-detail?topic_id=1305904",
        "name": "GTA6全新预告",
        "show_interact_data": false,
        "view": 202393
      },
      {
        "discuss": 576,
        "dynamics": 23,
        "id": 1305830,
        "jump_url": "https://m.bilibili.com/topic-detail?topic_id=1305830",
        "name": "默茨正式当选德国新任总理",
        "show_interact_data": false,
        "view": 280448
      }
    ]
  },
  "message": "0",
  "ttl": 1
}
```
</details>

<!-- Generated by json-apidoc-gen @ 2025-05-08T06:56:53.249280549Z -->

## 检查话题是否存在

> https://api.bilibili.com/x/topic/pub/is_existed

*请求方法: GET*

认证方式: Cookie (SESSDATA)

<!-- #1357 -->

**URL 参数:**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ------ | ---- | ---- | ------ | ---- |
| topic  | string | 话题名 | 必要 | 大小写敏感 |

**JSON 回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| code | number | 返回值 | 0: 成功 |
| data | object | 数据本体 |  |
| message | string | 错误信息 | 成功时为 `0` |
| ttl | number | `1` |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| already_existed | boolean | 是否已经存在 |  |
| synonym_topic | object | 类似话题 |  |

`data.synonym_topic` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| topic_items | object[] | 话题列表 |  |

`data.synonym_topic.topic_items[]` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| description | string | 话题描述 |  |
| discuss | number | 讨论数 |  |
| dynamics | number | 动态数 |  |
| id | number | 话题 id |  |
| jump_url | string | 跳转 URL |  |
| name | string | 话题名 |  |
| show_interact_data | boolean | 显示互动数据? |  |
| view | number | 浏览数 |  |

**示例:**

```shell
-curl -G 'https://api.bilibili.com/x/topic/pub/is_existed' \
--url-query 'topic=BW2025' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "data": {
    "already_existed": true,
    "synonym_topic": {
      "topic_items": [
        {
          "description": "Ave Mujica、大石昌良、宫野真守、虹咲学园 学园偶像同好会、偶像大师闪耀色彩、Machico、茅原实里、RAISE A SUILEN、TOGENASHI TOGEARI、yama等参演嘉宾信息已解禁🎶7月11日至13日，在国家会展中心（上海）虹馆EH与大家见面~",
          "discuss": 44910,
          "dynamics": 5183,
          "id": 1297553,
          "jump_url": "https://m.bilibili.com/topic-detail?topic_id=1297553",
          "name": "BML2025",
          "show_interact_data": false,
          "view": 35386975
        },
        {
          "description": "心火燎原，2025季中冠军赛即将到来。",
          "discuss": 48373,
          "dynamics": 523,
          "id": 1313369,
          "jump_url": "https://m.bilibili.com/topic-detail?topic_id=1313369",
          "name": "2025MSI",
          "show_interact_data": false,
          "view": 15264132
        },
        {
          "description": "简中版《命运-冠位指定》将于2025年8月8日-8月10日在杭州举办FES2025九周年纪念展。",
          "discuss": 1421,
          "dynamics": 121,
          "id": 1315085,
          "jump_url": "https://m.bilibili.com/topic-detail?topic_id=1315085",
          "name": "FGOFES2025",
          "show_interact_data": false,
          "view": 927806
        }
      ]
    }
  },
  "message": "0",
  "ttl": 1
}
```
</details>

<!-- Generated by json-apidoc-gen @ 2025-07-26T02:37:34.536597611Z -->

## 获取指定话题详细信息

> https://app.bilibili.com/x/topic/web/details/top

*请求方法: GET*

<!-- #1360 -->

**URL 参数:**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ------ | ---- | ---- | ------ | ---- |
| topic_id | number | 话题 id | 必要 |  |
| source | string | 来源 | 不必要 | 如 `Web` `H5` |
| web_location | string | `333.1036` | 不必要 | 当 `source` 为 `H5` 时 |

**JSON 回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| code | number | 返回值 | 0:    成功 |
| data | object | 数据本体 |  |
| message | string | 错误信息 | 成功时为 `0` |
| ttl | number | `1` |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| click_area_card | object | 点击区域卡片? |  |
| functional_card | object | 功能卡片 |  |
| top_details | object | 话题详情 |  |

`data.click_area_card` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |

`data.functional_card` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| traffic_card | object | 引流卡片 |  |

`data.functional_card.traffic_card` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| benefit_point | string | 奖励点 |  |
| card_desc | string | 卡片描述 |  |
| icon_url | string | 图标 URL |  |
| jump_title | string | 跳转标题 |  |
| jump_url | string | 跳转 URL |  |
| name | string | 名称 |  |

`data.top_details` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| close_pub_layer_entry | boolean | 是否关闭发布层入口? |  |
| has_create_jurisdiction | boolean | 是否有创建权限? |  |
| operation_content | object | 操作内容? |  |
| topic_creator | object | 话题创建者 |  |
| topic_item | object | 话题详情 |  |
| word_color | number | 话题字体颜色? |  |

`data.top_details.operation_content` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |

`data.top_details.topic_creator` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| face | string | 头像 URL |  |
| name | string | 昵称 |  |
| uid | number | mid (UID) |  |

`data.top_details.topic_item` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| back_color | string | 背景色 |  |
| ctime | number | 创建时间 |  |
| description | string | 话题描述 |  |
| discuss | number | 讨论数 |  |
| dynamics | number | 动态数 |  |
| fav | number | 收藏数 |  |
| id | number | 话题 id |  |
| jump_url | string | 跳转 URL |  |
| like | number | 点赞数 |  |
| name | string | 话题名 |  |
| share | number | 分享数 |  |
| share_pic | string | 分享图片 URL | 似乎就是话题的图标 |
| share_url | string | 分享的 URL |  |
| show_interact_data | boolean | 显示互动数据? |  |
| view | number | 浏览数 |  |

**示例:**

```shell
curl -G 'https://app.bilibili.com/x/topic/web/details/top' \
--url-query 'topic_id=1314000'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "data": {
    "click_area_card": {},
    "functional_card": {
      "traffic_card": {
        "benefit_point": "投稿4K视频瓜分千万流量&奖金",
        "card_desc": "2025-10-01 00:00截止",
        "icon_url": "https://i0.hdslb.com/bfs/activity-plat/static/20211019/4c5b6134e2def772efe20dabcca1f6e1/vGqnSBjy8N.png",
        "jump_title": "立即参与",
        "jump_url": "https://www.bilibili.com/blackboard/era/4Kchaoqingpc.html",
        "name": "眼见帧实·B站超高清视频计划"
      }
    },
    "top_details": {
      "close_pub_layer_entry": false,
      "has_create_jurisdiction": false,
      "operation_content": {},
      "topic_creator": {
        "face": "https://i0.hdslb.com/bfs/face/9da46bf581938ff29c2143f186b3f66409c11bf6.jpg",
        "name": "赛博星人科技汪",
        "uid": 394205865
      },
      "topic_item": {
        "back_color": "#6188FF",
        "ctime": 1750734201,
        "description": "来B站，分享你的超高清视频！2025.6.30-9.30期间，参与“眼见帧实·B站超高清视频计划”活动，投稿超清视频，可以分享超清开箱、超清vlog、超清科普、超清美食、超清风光大片等内容！丰厚奖金&礼物等你来拿~",
        "discuss": 435100,
        "dynamics": 7902,
        "fav": 15,
        "id": 1314000,
        "jump_url": "https://m.bilibili.com/topic-detail?topic_id=1314000",
        "like": 19,
        "name": "B站超高清视频计划",
        "share": 7,
        "share_pic": "http://i0.hdslb.com/bfs/vc/7701fba940e721ceb756cc73694ebb8f510fe0cc.png",
        "share_url": "https://m.bilibili.com/topic-detail?topic_id=1314000",
        "show_interact_data": true,
        "view": 90735677
      },
      "word_color": 0
    }
  },
  "message": "0",
  "ttl": 1
}
```
</details>

<!-- Generated by json-apidoc-gen @ 2025-07-26T03:17:14.502472328Z -->
