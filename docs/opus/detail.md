# 图文详细

## 获取图文详细信息

> https://api.bilibili.com/x/polymer/web-dynamic/v1/opus/detail

*请求方法: GET*

鉴权方式: `Cookie` 中 `buvid3` 存在且不为空

**URL 参数:**

| 参数名          | 类型   | 内容     | 必要性 | 备注 |
| --------------- | ------ | -------- | ------ | ---- |
| id              | string | 动态 id  | 必要   | 数字 |
| timezone_offset | number | 时区偏移 | 非必要 | 如 `-480` |
| features        | string | 功能     | 非必要（部分专栏要求htmlNewStyle） | `onlyfansVote,onlyfansAssetsV2,decorationCard,htmlNewStyle,ugcDelete,editable,opusPrivateVisible,tribeeEdit,avatarAutoTheme,avatarTypeOpus` |

**JSON 回复（旧版专栏未携带htmlNewStyle feature时）**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| code | number | 返回值 | 0: 成功<br />-352: 风控校验失败  |
| data | object | 数据本体 |  |
| message | string | 错误信息 | 成功时为 `0` |
| ttl | number | `1` |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| fallback | object | 回退的内容信息 |  |

`fallback` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| id | number | 回退的内容ID |  |
| type | number | 回退的内容类型 | 已知2为专栏 |

**JSON 回复（正常返回情况）:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| code | number | 返回值 | 0: 成功<br />-352: 风控校验失败  |
| data | object | 数据本体 |  |
| message | string | 错误信息 | 成功时为 `0` |
| ttl | number | `1` |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| item | object | 项 | 套了个娃 |

`data.item` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| basic | object | 基本信息 |  |
| id_str | string | 动态 id |  |
| modules | object[] | 模块信息 | 参见 [功能模块](features.md) |
| type | number | 类型 |  |
| fallback | number | 回滚信息 | 请检查请求参数 `features` |

`data.item.basic` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| comment_id_str | string | 评论对象 id 字符串 |  |
| comment_type | number | 评论区类型 |  |
| like_icon | object | 点赞图标? |  |
| rid_str | string | 关联 id 字符串 |  |
| title | string | 图文标题 |  |
| uid | number | 作者 mid (UID) |  |

`data.item.basic.like_icon` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| action_url | string |  |  |
| end_url | string |  |  |
| id | number |  |  |
| start_url | string |  |  |

**示例:**

```shell
curl -G 'https://api.bilibili.com/x/polymer/web-dynamic/v1/opus/detail' \
--url-query 'id=933099353259638816' \
--url-query 'features=onlyfansVote,onlyfansAssetsV2,decorationCard,htmlNewStyle,ugcDelete,editable,opusPrivateVisible,tribeeEdit,avatarAutoTheme,avatarTypeOpus' \
-b 'buvid3=awa'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "data": {
    "item": {
      "basic": {
        "comment_id_str": "34646640",
        "comment_type": 12,
        "like_icon": {
          "action_url": "",
          "end_url": "",
          "id": 0,
          "start_url": ""
        },
        "rid_str": "34646640",
        "title": "【服务搭建】零开销在线运行代码！glot.io服务私有化部署 - 哔哩哔哩",
        "uid": 293793435
      },
      "id_str": "933099353259638816",
      "modules": [
        {
          "module_title": {
            "text": "【服务搭建】零开销在线运行代码！glot.io服务私有化部署"
          },
          "module_type": "MODULE_TYPE_TITLE"
        },
        {
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
                            "url": "https://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg"
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
                            "url": "https://i0.hdslb.com/bfs/garb/item/4f8f3f1f2d47f0dad84f66aa57acd4409ea46361.png"
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
                              "background-color": "var(--bg1)",
                              "border": "2px solid var(--bg1)",
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
                              "url": "https://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg"
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
                              "url": "https://i0.hdslb.com/bfs/garb/item/fe0b83b53e2342b16646f6e7a9370d8a867decdb.webp"
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
                                "background-color": "var(--bg1)",
                                "border": "2px solid var(--bg1)",
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
              "mid": "293793435"
            },
            "decorate_card": {
              "big_card_url": "https://i0.hdslb.com/bfs/garb/item/c0cf2235089ed314d92f30efa855c9b5611fa2cd.png",
              "card_type": 2,
              "card_type_name": "免费",
              "card_url": "https://i0.hdslb.com/bfs/garb/item/c0cf2235089ed314d92f30efa855c9b5611fa2cd.png",
              "fan": {
                "color": "#07b6d5",
                "color_format": {
                  "colors": [
                    "#07b6d5FF",
                    "#07b6d5FF"
                  ],
                  "end_point": "0,100",
                  "gradients": [
                    0,
                    100
                  ],
                  "start_point": "0,0"
                },
                "is_fan": 1,
                "name": "初音未来周年纪念",
                "num_desc": "005638",
                "number": 5638
              },
              "id": 2513,
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/c0cf2235089ed314d92f30efa855c9b5611fa2cd.png",
              "item_id": 2513,
              "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=2513&isdiy=0&part=card&from=post&f_source=garb&vmid=293793435&native.theme=1&navhide=1",
              "name": "初音未来粉丝专属"
            },
            "face": "https://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg",
            "face_nft": false,
            "following": true,
            "jump_url": "//space.bilibili.com/293793435",
            "label": "",
            "mid": 293793435,
            "more": {
              "three_point_items": [
                {
                  "label": "举报",
                  "type": "THREE_POINT_REPORT"
                }
              ]
            },
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
            "pub_location_text": "",
            "pub_time": "编辑于 2024年05月19日 12:18",
            "pub_ts": 1716092523,
            "views_text": "",
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
          },
          "module_type": "MODULE_TYPE_AUTHOR"
        },
        {
          "module_content": {
            "paragraphs": [
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "感谢 "
                      }
                    },
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "color": "#ff968d",
                        "font_size": 17,
                        "style": {},
                        "words": "来笙云 Laysense.cn"
                      }
                    },
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": " 提供算力"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "作为一个全栈工程师，开发、维护和测试一些软件系统时，必然会涉及到多种编程语言，有时还需要测试一些编程语言的安全特性，常常需要敏捷地了解它们并立即上手。在朋友的推荐和社区分享下，我了解到一个名叫 glot.io 的开源项目。"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "它支持40多种编程语言，无论是热门的 Python、Go、Rust、Kotlin，还是冷门的 COBOL、Erlang、Haskell 只需在网页上选择对应的语言，即可开始编写。为使用者提供了一个 Sandbox（沙箱）和 Playground（游乐场）环境，既不需要配置它们的 Runtime（运行环境）和 IDE（集成开发环境），也不需要担心误操作对系统产生破坏性，还不会占用任何用户端的系统资源，实现真正的零开销运行代码。"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 2,
                "pic": {
                  "pics": [
                    {
                      "height": 1120,
                      "live_url": null,
                      "size": null,
                      "url": "https://i0.hdslb.com/bfs/article/06582181a80a3f367ae0486aec34759f293793435.png",
                      "width": 1776
                    }
                  ],
                  "style": 2
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "在代码编写界面，可以创建多个源码文件，完成后点击Run就能执行它并得到输出，类似我们平时编程那样，将输出打在终端上。整个过程不会生成任何可执行文件，所以它的应用场景不是在线编译，而是在线运行代码片段。"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "\n"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 2,
                "pic": {
                  "pics": [
                    {
                      "height": null,
                      "live_url": null,
                      "size": null,
                      "url": "https://i0.hdslb.com/bfs/new_dyn/bb4e8fc35a33ba0b771478f4bc5aaca7293793435.png",
                      "width": null
                    }
                  ],
                  "style": 2
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "glot.io 这个网站提供了公开的代码片段执行和分享功能，任何人在注册后都可以分享自己的代码片段，并使用它的 API。但有时为了安全性和访问速度考量，需要自行搭建这个开源平台，这篇文章将介绍 Glot 的私有化部署。"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 24,
                        "style": {
                          "bold": true
                        },
                        "words": "Glot是什么"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "根据项目 README 上的一句介绍："
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 4,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "an open source pastebin with runnable snippets and API."
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "这是一个开源的共享剪切板和代码片段执行器，并提供 API。它使用 MIT 协议开源，代码托管于 github 之上。"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "https://github.com/glotcode/glot"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "Glot 并不是一个独立的工程，它分为多个组件，这样设计底层架构有利于业务解耦，降低后期维护和升级开发的难度，它们之间的逻辑关系如下："
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "\n"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 2,
                "pic": {
                  "pics": [
                    {
                      "height": null,
                      "live_url": null,
                      "size": null,
                      "url": "https://i0.hdslb.com/bfs/new_dyn/808dd5fa58016f392b15a36a0df27a29293793435.png",
                      "width": null
                    }
                  ],
                  "style": 2
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "由下面这些组件构成，也全部使用 MIT 协议开源，均托管于 Github："
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "list": {
                  "items": [
                    {
                      "level": 1,
                      "nodes": [
                        {
                          "type": "TEXT_NODE_TYPE_WORD",
                          "word": {
                            "color": "#ff968d",
                            "font_size": 17,
                            "style": {},
                            "words": "glot-www"
                          }
                        },
                        {
                          "type": "TEXT_NODE_TYPE_WORD",
                          "word": {
                            "font_size": 17,
                            "style": {},
                            "words": "：提供 B/S 前端应用"
                          }
                        }
                      ],
                      "order": 1
                    },
                    {
                      "level": 1,
                      "nodes": [
                        {
                          "type": "TEXT_NODE_TYPE_WORD",
                          "word": {
                            "color": "#ff968d",
                            "font_size": 17,
                            "style": {},
                            "words": "docker-run"
                          }
                        },
                        {
                          "type": "TEXT_NODE_TYPE_WORD",
                          "word": {
                            "font_size": 17,
                            "style": {},
                            "words": "：提供执行 glot-images 镜像能力的微服务"
                          }
                        }
                      ],
                      "order": 2
                    },
                    {
                      "level": 1,
                      "nodes": [
                        {
                          "type": "TEXT_NODE_TYPE_WORD",
                          "word": {
                            "color": "#ff968d",
                            "font_size": 17,
                            "style": {},
                            "words": "glot-images"
                          }
                        },
                        {
                          "type": "TEXT_NODE_TYPE_WORD",
                          "word": {
                            "font_size": 17,
                            "style": {},
                            "words": "：按需构建的执行器镜像"
                          }
                        }
                      ],
                      "order": 3
                    },
                    {
                      "level": 1,
                      "nodes": [
                        {
                          "type": "TEXT_NODE_TYPE_WORD",
                          "word": {
                            "color": "#ff968d",
                            "font_size": 17,
                            "style": {},
                            "words": "code-runner"
                          }
                        },
                        {
                          "type": "TEXT_NODE_TYPE_WORD",
                          "word": {
                            "font_size": 17,
                            "style": {},
                            "words": "：容器内的执行调度器"
                          }
                        }
                      ],
                      "order": 4
                    }
                  ],
                  "style": 2
                },
                "para_type": 5
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "其中 glot-www 是一个 B/S 架构应用的服务器，用来提供一个面向用户的 WebUI（网站），它包含前后端的组件，后端使用 Haskell 语言编写。实现代码片段保存和共享、用户登录、以及共享剪切板所的功能，由 pgSQL 提供存储支持。与此同时，它与实际的代码执行业务互相解耦，使用 RestAPI 进行 RPC 调用，可做到前端服务器和后端代码执行服务器逻辑上隔离。"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "Glot 的代码执行沙箱基于 Docker，在容器中编译和运行，不但与宿主机隔离，且容器之间也相互隔离，还能对运行资源进行限制，防止宿主机被不信任的代码破坏。当然，各编程语言的执行容器构成不尽相同，这样才能在节约存储空间的同时最大保持运行效率，比如 C 和 C++ 共用了glot/clang这个镜像，C"
                      }
                    },
                    {
                      "rich": {
                        "jump_url": "//search.bilibili.com/all?keyword=%20%E5%92%8C%20F",
                        "orig_text": "# 和 F#",
                        "text": "# 和 F#",
                        "type": "RICH_TEXT_NODE_TYPE_TOPIC"
                      },
                      "type": "TEXT_NODE_TYPE_RICH"
                    },
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": " 的镜像都有 mono 这个依赖……这些 Docker 镜像由 glot-images 项目进行生成，它并非使用传统的 Dockerfile，而是使用了 nix 进行构建，支持多种主流编程语言。"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "\n"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 2,
                "pic": {
                  "pics": [
                    {
                      "height": null,
                      "live_url": null,
                      "size": null,
                      "url": "https://i0.hdslb.com/bfs/new_dyn/8627bd181a4c0ef3f5985f2d80ed49a5293793435.png",
                      "width": null
                    }
                  ],
                  "style": 2
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "宿主机与沙箱的通讯，实际上就构建并将代码传入容器。这个传递方式不使用文件，而使用 stdi（基本输入）的方式传递 json，例如这样的形式："
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "code": {
                  "content": "echo '{\n  &quot;language&quot;: &quot;python&quot;,\n  &quot;files&quot;: [\n    {\n      &quot;name&quot;: &quot;main.py&quot;,\n      &quot;content&quot;: &quot;print(42)&quot;\n    }\n  ]\n}' | docker run --rm -i --read-only --tmpfs /tmp:rw,noexec,nosuid,size=65536k --tmpfs /home/glot:rw,exec,nosuid,uid=1000,gid=1000,size=131072k -u glot -w /home/glot glot/javascript:latest",
                  "lang": "language-bash"
                },
                "para_type": 7
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "执行完成之后以 stdo（基本输出）的方式输出 json，stdout、stderr 流、以及错误信息在序列化后拆分成各个字段："
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "code": {
                  "content": "{\n  &quot;stdout&quot;: &quot;42\\n&quot;,\n  &quot;stderr&quot;: &quot;&quot;,\n  &quot;error&quot;: &quot;&quot;\n}",
                  "lang": "language-json"
                },
                "para_type": 7
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "一般编程语言分为编译型、解释型和虚拟机型，其中解释型直接执行文本文件中的内容，编译型则需将其编译为可执行文件再执行，而虚拟机型在编译完之后，还需用 vm 执行字节码。glot-images 将各类编程语言生成的工作流统一归做 json 格式的文本流，这样标准化更利于开发和扩展，这种能力归功于 code-runner 这个组件。"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "code-runner 作为 glot 的一个特殊组件，并不运行在宿主机中，它是一个 cli 工具，运行在执行容器中，使用 Rust 语言开发。在 glot-images 的每个镜像中，均以相同方式工作在底层。它支持多种编程语言从编译到运行的生命周期管理，同时接管运行时的 stdio（基本输入输出）"
                      }
                    },
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {
                          "bold": true
                        },
                        "words": "，"
                      }
                    },
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "例如 C 语言，首先会将输入的文本反序列化，写入到文件，接着调用 clang 编译这个文件，最后再运行编译器生成的可执行文件，执行过程中也会将预定义的 stdi 发送给程序，程序的 stdo/stderr 流被它记录下来随后序列化为 json 文本返回。实际上在使用docker run这类命令执行 glot-images 镜像时，就是调用了之中的 code-runner，而不是调用了clang这种编译器。"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "使用 stdi 传递 json 给它，就会调用相应的编译执行流程："
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "code": {
                  "content": "echo '{\n  &quot;language&quot;: &quot;python&quot;,\n  &quot;files&quot;: [\n    {\n      &quot;name&quot;: &quot;main.py&quot;,\n      &quot;content&quot;: &quot;print(42)&quot;\n    }\n  ]\n}' | code-runner",
                  "lang": "language-bash"
                },
                "para_type": 7
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "与 glot-images 的镜像相同，执行后也会使用 stdo 以 json 格式返回："
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "code": {
                  "content": "{\n  &quot;stdout&quot;: &quot;42\\n&quot;,\n  &quot;stderr&quot;: &quot;&quot;,\n  &quot;error&quot;: &quot;&quot;\n}",
                  "lang": "language-json"
                },
                "para_type": 7
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "要将这些跑在 Docker 上的执行器服务化、RPC（远程过程调用）化，必须有一个 daemon 在底层进行调度，一边开放 HTTP 服务，另一边通过 unix socket 操纵 DockerEngine，执行容器操作。提供这个能力的就是 docker-run 组件，它也使用 Rust 语言开发。"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "例如这样访问 docker-run，和上文中的例子相同："
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "code": {
                  "content": "curl 'http://localhost:8088/run' \\\n  -H 'X-Access-Token: some-secret-token' \\\n  -H 'Content-type: application/json' \\\n  -d '{\n  &quot;image&quot;: &quot;glot/python:latest&quot;,\n  &quot;payload&quot;: {\n    &quot;language&quot;: &quot;python&quot;,\n    &quot;files&quot;: [\n      {\n        &quot;name&quot;: &quot;main.py&quot;,\n        &quot;content&quot;: &quot;print(42)&quot;\n      }\n    ]\n  }\n}'",
                  "lang": "language-bash"
                },
                "para_type": 7
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "有了这些组件，就可以自行私有化搭建一个 glot 服务，因为各组件的标准化和解耦，可以随意进行裁剪和二次开发。"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "接下来将介绍 docker-run 和 glot-images 这两个基本组件的搭建（不搭建前端 WebUI 和共享服务）。"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 24,
                        "style": {
                          "bold": true
                        },
                        "words": "Glot服务搭建"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "首先应该准备一台性能不错的服务器，要求 CPU 核心数和 RAM 不能太低。以下步骤使用 Debian 12 系统进行操作，整个过程需要有稳定的网络环境，并且已更新包管理器的索引。"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 24,
                        "style": {
                          "bold": true
                        },
                        "words": "安装Docker和运行环境"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "首先需要安装前置依赖，其中 git 和 gcc 安装 Rust 时需要，runsc 是 gVisor 运行环境"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "code": {
                  "content": "sudo apt-get install ca-certificates curl git gcc runsc",
                  "lang": "language-bash"
                },
                "para_type": 7
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "安装 Docker，这里参考了官方文档的安装方式，先进行软件源的添加，再安装各组件"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "https://docs.docker.com/engine/install/debian/"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "code": {
                  "content": "sudo install -m 0755 -d /etc/apt/keyrings\nsudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc\nsudo chmod a+r /etc/apt/keyrings/docker.asc\necho \\\n  &quot;deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \\\n  $(. /etc/os-release &amp;&amp; echo &quot;$VERSION_CODENAME&quot;) stable&quot; | \\\n  sudo tee /etc/apt/sources.list.d/docker.list &gt; /dev/null\nsudo apt update\n\nsudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin",
                  "lang": "language-bash"
                },
                "para_type": 7
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "gVisor 作为谷歌开源的一款轻量容器运行时沙箱，可作为 Docker 的运行时中间件，隔离容器内的 syscall，提升容器安全性，具体可以参考官网 https://gvisor.dev"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "对于 Docker，需要配置 gVisor 为 DockerEngine 插件，创建配置文件后写入以下内容："
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "code": {
                  "content": "vi /etc/docker/daemon.json",
                  "lang": "language-bash"
                },
                "para_type": 7
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "\n"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "code": {
                  "content": "{\n    &quot;default-runtime&quot;: &quot;runsc&quot;,\n    &quot;runtimes&quot;: {\n        &quot;runsc&quot;: {\n            &quot;path&quot;: &quot;/usr/bin/runsc&quot;\n        }\n    }\n}",
                  "lang": "language-json"
                },
                "para_type": 7
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "在修改配置文件后，应重启 DockerEngine"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "code": {
                  "content": "systemctl restart docker",
                  "lang": "language-bash"
                },
                "para_type": 7
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "可以使用以下命令检查检查 Docker 和 gVisor 安装状态"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "code": {
                  "content": "docker system info\ndocker system info | grep 'runsc'",
                  "lang": "language-bash"
                },
                "para_type": 7
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "\n"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 2,
                "pic": {
                  "pics": [
                    {
                      "height": null,
                      "live_url": null,
                      "size": null,
                      "url": "https://i0.hdslb.com/bfs/new_dyn/f2a9046662ce5bdc93a5bbe7393dd2b4293793435.png",
                      "width": null
                    }
                  ],
                  "style": 2
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "\n"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 2,
                "pic": {
                  "pics": [
                    {
                      "height": null,
                      "live_url": null,
                      "size": null,
                      "url": "https://i0.hdslb.com/bfs/new_dyn/888de2ab19dede7ec6880f407269519c293793435.png",
                      "width": null
                    }
                  ],
                  "style": 2
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "接者我们创建名为glot的用户，作为 daemon 的运行角色"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "code": {
                  "content": "useradd -m glot\nusermod -aG docker glot",
                  "lang": "language-bash"
                },
                "para_type": 7
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "安装 Rust，这里参考官方文档，使用脚本进行安装"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "https://rustup.rs/"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "code": {
                  "content": "curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh",
                  "lang": "language-bash"
                },
                "para_type": 7
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "\n"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 2,
                "pic": {
                  "pics": [
                    {
                      "height": null,
                      "live_url": null,
                      "size": null,
                      "url": "https://i0.hdslb.com/bfs/new_dyn/2d7118b743cd2f10cd289e59969eeb01293793435.png",
                      "width": null
                    }
                  ],
                  "style": 2
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "安装完毕后，可以使用以下命令检查 Rust 的安装"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "code": {
                  "content": "cargo -V",
                  "lang": "language-bash"
                },
                "para_type": 7
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "\n"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 2,
                "pic": {
                  "pics": [
                    {
                      "height": null,
                      "live_url": null,
                      "size": null,
                      "url": "https://i0.hdslb.com/bfs/new_dyn/0e40ab6cc26aa95bcaf7458159316d7c293793435.png",
                      "width": null
                    }
                  ],
                  "style": 2
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "因官方的 crates 源速度很慢，如果国内使用可以换为镜像源，这里使用了 SJTU 镜像"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "code": {
                  "content": "vi ~/.cargo/config.toml",
                  "lang": "language-bash"
                },
                "para_type": 7
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "\n"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 2,
                "pic": {
                  "pics": [
                    {
                      "height": null,
                      "live_url": null,
                      "size": null,
                      "url": "https://i0.hdslb.com/bfs/new_dyn/4b8b4b8e7550009d6fd0c4439922564a293793435.png",
                      "width": null
                    }
                  ],
                  "style": 2
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 24,
                        "style": {
                          "bold": true
                        },
                        "words": "编译docker-run"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "克隆 docker-run 项目，准备使用源码进行编译安装"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "code": {
                  "content": "git clone https://github.com/glotcode/docker-run glot-docker-run",
                  "lang": "language-bash"
                },
                "para_type": 7
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "进入仓库目录，使用 cargo 编译 Rust 工程"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "code": {
                  "content": "cd glot-docker-run\ncargo b -r",
                  "lang": "language-bash"
                },
                "para_type": 7
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "\n"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 2,
                "pic": {
                  "pics": [
                    {
                      "height": null,
                      "live_url": null,
                      "size": null,
                      "url": "https://i0.hdslb.com/bfs/new_dyn/7c39ed2031e7932c1bc24926ea1c3025293793435.png",
                      "width": null
                    }
                  ],
                  "style": 2
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "检查编译结果，在工程目录的target/release中将会生成名为docker-run的可执行文件"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "\n"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 2,
                "pic": {
                  "pics": [
                    {
                      "height": null,
                      "live_url": null,
                      "size": null,
                      "url": "https://i0.hdslb.com/bfs/new_dyn/51d7ad2ddf5dd75c531e267965c6ddb6293793435.png",
                      "width": null
                    }
                  ],
                  "style": 2
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "复制可执行文件和 systemd 服务模板"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "code": {
                  "content": "cp target/release/docker-run /home/glot/bin/\ncp systemd/docker-run.service /etc/systemd/system/",
                  "lang": "language-bash"
                },
                "para_type": 7
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "docker-run 服务使用 systemd 进行托管，作为 daemon 运行，它对外提供一个 http 服务，其他应用使用 RestAPI 与之对接\n编辑 systemd 服务配置文件"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "code": {
                  "content": "vi /etc/systemd/system/docker-run.service",
                  "lang": "language-bash"
                },
                "para_type": 7
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "docker-run 的配置文件全部为环境变量，一些重要的参数已经给出了注释"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "其中SERVER_LISTEN_ADDR和SERVER_LISTEN_PORT决定了 daemon 监听的 ip 和端口号，可以根据需求修改"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "SERVER_WORKER_THREADS为 worker 线程数，根据实际业务并发量修改，即越多可同时执行的任务越多"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "API_ACCESS_TOKEN是 RestAPI 的访问 Token，设定一个较复杂的值，可防止未授权访问，在调用中以 HTTP 请求 Header 的X-Access-Token字段进行传递"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "RUN_MAX_EXECUTION_TIME参数用来限制任务执行的超时时间，其单位为秒，如果一个任务大于这个时间没有执行完毕，docker-run 就会销毁这个容器，并会返回一个 400 错误"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "RUN_MAX_OUTPUT_SIZE参数是用来限制最大输出量的，它的单位是 Byte，如果输出的内容过大，同样会被丢弃并报错\n这些参数的详细配置也可以参考 docker-run 项目的 README: https://github.com/glotcode/docker-run?tab=readme-ov-file#environment-variables"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "code": {
                  "content": "[Unit]\nDescription=docker-run\n\n[Service]\nUser=glot\nGroup=glot\nRestart=always\nRestartSec=10\nExecStart=/home/glot/bin/docker-run\n# 服务绑定 ip\nEnvironment=&quot;SERVER_LISTEN_ADDR=0.0.0.0&quot;\n# 服务监听端口\nEnvironment=&quot;SERVER_LISTEN_PORT=8088&quot;\n# worker 线程数\nEnvironment=&quot;SERVER_WORKER_THREADS=10&quot;\n# API Token\nEnvironment=&quot;API_ACCESS_TOKEN=some-secret-token&quot;\n# Docker socket 路径\nEnvironment=&quot;DOCKER_UNIX_SOCKET_PATH=/var/run/docker.sock&quot;\nEnvironment=&quot;DOCKER_UNIX_SOCKET_READ_TIMEOUT=3&quot;\nEnvironment=&quot;DOCKER_UNIX_SOCKET_WRITE_TIMEOUT=3&quot;\n# 容器主机名\nEnvironment=&quot;DOCKER_CONTAINER_HOSTNAME=glot&quot;\n# 容器用户\nEnvironment=&quot;DOCKER_CONTAINER_USER=glot&quot;\n# 容器最大内存限制\nEnvironment=&quot;DOCKER_CONTAINER_MEMORY=1000000000&quot;\n# 容器内是否禁用网络支持\nEnvironment=&quot;DOCKER_CONTAINER_NETWORK_DISABLED=true&quot;\nEnvironment=&quot;DOCKER_CONTAINER_ULIMIT_NOFILE_SOFT=90&quot;\nEnvironment=&quot;DOCKER_CONTAINER_ULIMIT_NOFILE_HARD=100&quot;\nEnvironment=&quot;DOCKER_CONTAINER_ULIMIT_NPROC_SOFT=90&quot;\nEnvironment=&quot;DOCKER_CONTAINER_ULIMIT_NPROC_HARD=100&quot;\nEnvironment=&quot;DOCKER_CONTAINER_CAP_DROP=MKNOD NET_RAW NET_BIND_SERVICE&quot;\nEnvironment=&quot;DOCKER_CONTAINER_READONLY_ROOTFS=true&quot;\nEnvironment=&quot;DOCKER_CONTAINER_TMP_DIR_PATH=/tmp&quot;\nEnvironment=&quot;DOCKER_CONTAINER_TMP_DIR_OPTIONS=rw,noexec,nosuid,size=65536k&quot;\n# 容器工作目录\nEnvironment=&quot;DOCKER_CONTAINER_WORK_DIR_PATH=/home/glot&quot;\nEnvironment=&quot;DOCKER_CONTAINER_WORK_DIR_OPTIONS=rw,exec,nosuid,size=131072k&quot;\n# 容器执行超时时间\nEnvironment=&quot;RUN_MAX_EXECUTION_TIME=15&quot;\n# 最大允许输出\nEnvironment=&quot;RUN_MAX_OUTPUT_SIZE=100000&quot;\n# 日志级别\nEnvironment=&quot;RUST_LOG=debug&quot;\n\n[Install]\nWantedBy=multi-user.target",
                  "lang": "language-yaml"
                },
                "para_type": 7
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "修改完配置文件就可启动服务了，并将它设为开机自启"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "code": {
                  "content": "systemctl daemon-reload\nsystemctl enable --now docker-run.service",
                  "lang": "language-bash"
                },
                "para_type": 7
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "GET 请求刚才配置的那个地址的根路径，测试服务运行状态正常，我这里是 http://localhost:8088/"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 2,
                "pic": {
                  "pics": [
                    {
                      "height": null,
                      "live_url": null,
                      "size": null,
                      "url": "https://i0.hdslb.com/bfs/new_dyn/7e0a6d73cdb1ba63bcfcbe94df9c7b39293793435.png",
                      "width": null
                    }
                  ],
                  "style": 2
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 24,
                        "style": {
                          "bold": true
                        },
                        "words": "拉取Docker镜像"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "glot-images 构建了各编程语言的执行镜像，这些镜像使用 nix 构建，但因为 nix 的配置比较复杂，且占用存储空间巨大，这里直接使用上传在 DockerHub 的镜像了（弊端就是语言版本比较旧）"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "https://hub.docker.com/u/glot"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 2,
                "pic": {
                  "pics": [
                    {
                      "height": null,
                      "live_url": null,
                      "size": null,
                      "url": "https://i0.hdslb.com/bfs/new_dyn/e63013e3c15cd556ec7ce82048d43889293793435.png",
                      "width": null
                    }
                  ],
                  "style": 2
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "通过 docker pull命令拉取各个镜像，可以按照自己的需求拉取，比如你只需要执行某几个编程语言"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "code": {
                  "content": "docker pull glot/assembly\ndocker pull glot/ats\ndocker pull glot/bash\ndocker pull glot/clang\ndocker pull glot/clisp\ndocker pull glot/clojure\ndocker pull glot/cobol\ndocker pull glot/coffeescript\ndocker pull glot/crystal\ndocker pull glot/csharp\ndocker pull glot/dart\ndocker pull glot/elixir\ndocker pull glot/elm\ndocker pull glot/erlang\ndocker pull glot/fsharp\ndocker pull glot/golang\ndocker pull glot/groovy\ndocker pull glot/guile\ndocker pull glot/hare\ndocker pull glot/haskell\ndocker pull glot/idris\ndocker pull glot/java\ndocker pull glot/javascript\ndocker pull glot/julia\ndocker pull glot/kotlin\ndocker pull glot/lua\ndocker pull glot/mercury\ndocker pull glot/nim\ndocker pull glot/nix\ndocker pull glot/ocaml\ndocker pull glot/pascal\ndocker pull glot/perl\ndocker pull glot/php\ndocker pull glot/python\ndocker pull glot/raku\ndocker pull glot/ruby\ndocker pull glot/rust\ndocker pull glot/sac\ndocker pull glot/scala\ndocker pull glot/swift\ndocker pull glot/typescript\ndocker pull glot/zig",
                  "lang": "language-bash"
                },
                "para_type": 7
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "这些全部拉取下来大概需要38GB，可以使用docker images命令检查拉取情况"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 2,
                "pic": {
                  "pics": [
                    {
                      "height": null,
                      "live_url": null,
                      "size": null,
                      "url": "https://i0.hdslb.com/bfs/new_dyn/82a01995548eb266d59f7fd22f75e542293793435.png",
                      "width": null
                    }
                  ],
                  "style": 2
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "如果已经拉取了所有的镜像，可以执行单元测试脚本，来验证各编程语言执行容器的正确性，在 docker-run 的目录下的scripts目录内"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "code": {
                  "content": "cd glot-docker-run/scripts/\n./test_glot.sh 'http://localhost:8088' 'some-secret-token'",
                  "lang": "language-bash"
                },
                "para_type": 7
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "\n"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 2,
                "pic": {
                  "pics": [
                    {
                      "height": null,
                      "live_url": null,
                      "size": null,
                      "url": "https://i0.hdslb.com/bfs/new_dyn/004e79df950a4bc93ff42fae8017d0aa293793435.png",
                      "width": null
                    }
                  ],
                  "style": 2
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 24,
                        "style": {
                          "bold": true
                        },
                        "words": "使用Glot服务"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "docker-run 这个组件对外提供 RestAPI 接口，其他进程或者其他主机可以直接调用，它共有三个功能对应其路径："
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 2,
                "pic": {
                  "pics": [
                    {
                      "height": null,
                      "live_url": null,
                      "size": null,
                      "url": "https://i0.hdslb.com/bfs/new_dyn/a28b283d2075bbd78c12e1d2859fd40d293793435.png",
                      "width": null
                    }
                  ],
                  "style": 2
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "查询服务状态"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "code": {
                  "content": "curl http://localhost:8088/",
                  "lang": "language-bash"
                },
                "para_type": 7
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "返回 daemon 的服务名、版本等"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "code": {
                  "content": "{\n  &quot;name&quot;: &quot;docker-run&quot;,\n  &quot;version&quot;: &quot;1.4.0&quot;,\n  &quot;description&quot;: &quot;Api for running code in transient docker containers&quot;\n}",
                  "lang": "language-json"
                },
                "para_type": 7
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "查询宿主机 DockerEngine 信息，访问这个接口需要在请求 Header 的X-Access-Token字段中携带 Token"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "code": {
                  "content": "curl http://localhost:8088/version \\\n  -H 'X-Access-Token: some-secret-token'",
                  "lang": "language-bash"
                },
                "para_type": 7
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "执行成功将会返回 DockerEngine 的版本信息"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "code": {
                  "content": "{\n  &quot;docker&quot;: {\n    &quot;version&quot;: &quot;26.1.2&quot;,\n    &quot;apiVersion&quot;: &quot;1.45&quot;,\n    &quot;gitCommit&quot;: &quot;ef1912d&quot;,\n    &quot;goVersion&quot;: &quot;go1.21.10&quot;,\n    &quot;os&quot;: &quot;linux&quot;,\n    &quot;arch&quot;: &quot;amd64&quot;,\n    &quot;kernelVersion&quot;: &quot;6.2.16-3-pve&quot;,\n    &quot;buildTime&quot;: &quot;2024-05-08T13:59:59.000000000+00:00&quot;,\n    &quot;platform&quot;: {\n      &quot;name&quot;: &quot;Docker Engine - Community&quot;\n    },\n    &quot;components&quot;: [\n      {\n        &quot;name&quot;: &quot;Engine&quot;,\n        &quot;version&quot;: &quot;26.1.2&quot;\n      },\n      {\n        &quot;name&quot;: &quot;containerd&quot;,\n        &quot;version&quot;: &quot;1.6.31&quot;\n      },\n      {\n        &quot;name&quot;: &quot;runsc&quot;,\n        &quot;version&quot;: &quot;0.0~20221219.0&quot;\n      },\n      {\n        &quot;name&quot;: &quot;docker-init&quot;,\n        &quot;version&quot;: &quot;0.19.0&quot;\n      }\n    ]\n  }\n}",
                  "lang": "language-json"
                },
                "para_type": 7
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "执行响应的代码前，需要构建一个 json 请求体，用来描述创建的执行任务的行为，下表是它的定义："
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 2,
                "pic": {
                  "pics": [
                    {
                      "height": null,
                      "live_url": null,
                      "size": null,
                      "url": "https://i0.hdslb.com/bfs/new_dyn/752ce6ef76a448158eb97222befa7c92293793435.png",
                      "width": null
                    }
                  ],
                  "style": 2
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "payload 结构："
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 2,
                "pic": {
                  "pics": [
                    {
                      "height": null,
                      "live_url": null,
                      "size": null,
                      "url": "https://i0.hdslb.com/bfs/new_dyn/752ce6ef76a448158eb97222befa7c92293793435.png",
                      "width": null
                    }
                  ],
                  "style": 2
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "文件对象的结构："
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 2,
                "pic": {
                  "pics": [
                    {
                      "height": null,
                      "live_url": null,
                      "size": null,
                      "url": "https://i0.hdslb.com/bfs/new_dyn/752ce6ef76a448158eb97222befa7c92293793435.png",
                      "width": null
                    }
                  ],
                  "style": 2
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "eg："
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "code": {
                  "content": "{\n  &quot;image&quot;: &quot;glot/python:latest&quot;,\n  &quot;payload&quot;: {\n    &quot;language&quot;: &quot;python&quot;,\n    &quot;files&quot;: [\n      {\n        &quot;name&quot;: &quot;main.py&quot;,\n        &quot;content&quot;: &quot;print(42)&quot;\n      }\n    ]\n  }\n}",
                  "lang": "language-json"
                },
                "para_type": 7
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "访问这个接口也需要在请求 Header 中携带 Token："
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "code": {
                  "content": "curl 'http://localhost:8088/run' \\\n  -H 'X-Access-Token: some-secret-token' \\\n  -H 'Content-type: application/json' \\\n  -d '{\n  &quot;image&quot;: &quot;glot/python:latest&quot;,\n  &quot;payload&quot;: {\n    &quot;language&quot;: &quot;python&quot;,\n    &quot;files&quot;: [\n      {\n        &quot;name&quot;: &quot;main.py&quot;,\n        &quot;content&quot;: &quot;print(42)&quot;\n      }\n    ]\n  }\n}'",
                  "lang": "language-bash"
                },
                "para_type": 7
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "我们可以直接将它与自己熟悉的编程语言对接，实现给应用或者平台提供运行任意代码的能力。"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "这里使用 Python 通过 RestAPI 调用 glot（docker-run），实现运行一段 rust 代码并取回输出为字符串："
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "code": {
                  "content": "import requests\n\ndef run_code(image, lang, file_name, code):\n    resp = requests.post(\n        url=&quot;http://localhost:8088/run&quot;,\n        headers={\n            &quot;X-Access-Token&quot;: &quot;some-secret-token&quot;,\n        },\n        json={\n            &quot;image&quot;: image,\n            &quot;payload&quot;: {\n                &quot;language&quot;: lang,\n                &quot;files&quot;: [\n                    {\n                        &quot;name&quot;: file_name,\n                        &quot;content&quot;: code,\n                    },\n                ],\n            },\n        },\n    )\n    json_content = resp.json()\n    return json_content\n\n\nimage = &quot;glot/rust:latest&quot;\nlang = &quot;rust&quot;\nfile_name = &quot;main.rs&quot;\ncode = &quot;&quot;&quot;\nfn main() {\n    for i in 1..=9 {\n        for j in 1..=i {\n            print!(&quot;{}x{}={:2} &quot;, j, i, j * i);\n        }\n        println!();\n    }\n}\n&quot;&quot;&quot;\n\nresult = run_code(image, lang, file_name, code)\nprint(result[&quot;stdout&quot;])",
                  "lang": "language-python"
                },
                "para_type": 7
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "测试可以正确输出执行内容"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "\n"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 2,
                "pic": {
                  "pics": [
                    {
                      "height": null,
                      "live_url": null,
                      "size": null,
                      "url": "https://i0.hdslb.com/bfs/new_dyn/21e396261fb607d4823f7ec4327908b1293793435.png",
                      "width": null
                    }
                  ],
                  "style": 2
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "有了通用接口的能力，我们就有了将其集成进自己平台的可能，只要发挥创造力，就可以围绕在线执行代码提供相关的业务，或者作为微服务连接上游的业务，比如搭建 OJ（在线判题）平台等。以及 glot 项目以 MIT 协议开源，这意味着我们可以随意修改底层代码，比如增加网络和共享路径支持、增加第三方库等。总之，这是一个完成度很高、十分推荐的开源项目。"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "由 "
                      }
                    },
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "color": "#ff968d",
                        "font_size": 17,
                        "style": {},
                        "words": "来笙云 Laysense.cn"
                      }
                    },
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": " 强力支持"
                      }
                    }
                  ]
                }
              },
              {
                "align": 0,
                "para_type": 1,
                "text": {
                  "nodes": [
                    {
                      "type": "TEXT_NODE_TYPE_WORD",
                      "word": {
                        "font_size": 17,
                        "style": {},
                        "words": "原文链接：https://shakaianee.top/archives/1002/"
                      }
                    }
                  ]
                }
              }
            ]
          },
          "module_type": "MODULE_TYPE_CONTENT"
        },
        {
          "module_extend": {
            "items": [
              {
                "icon": null,
                "jump_url": "//search.bilibili.com/all?keyword=%E8%BF%90%E7%BB%B4",
                "text": "运维"
              },
              {
                "icon": null,
                "jump_url": "//search.bilibili.com/all?keyword=%E6%9C%8D%E5%8A%A1%E6%90%AD%E5%BB%BA",
                "text": "服务搭建"
              },
              {
                "icon": null,
                "jump_url": "//search.bilibili.com/all?keyword=glot.io",
                "text": "glot.io"
              }
            ]
          },
          "module_type": "MODULE_TYPE_EXTEND"
        },
        {
          "module_bottom": {
            "share_info": {
              "pic": "https://static.hdslb.com/mobile/img/app_logo.png",
              "summary": "感谢 来笙云 Laysense.cn 提供算力 作为一个全栈工程师，开发、维护和测试一些软件系统时，必然会涉及到多种编程语言，有时还需要测试一些编程语言的安全特性，常常需要敏捷地了解它们并立即上手。在朋友的推荐和社区分享下，我了解到一个名叫 glot.io 的开源项目。 它支持40多种编程语言，无论是热门的 Python、Go、Rust、Kotlin，还是冷门的 COBOL、Erlang、Haskell 只需在网页上选择对应的语言，即可开始编写。为使用者提供了一个 Sandbox（沙箱）和 Playground（游乐场）环境，既不需要配置它们的 Runtime（运行环境）和 IDE（集成开发环境），也不需要担心误操作对系统产生破坏性，还不会占用任何用户端的系统资源，实现真正的零开销运行代码。 [图片] 在代码编写界面，可以创建多个源码文件，完成后点击Run就能执行它并得到输出，类似我们平时编程那样，将输出打在终端上。整个过程不会生成任何可执行文件，所以它的应用场景不是在线编译，而是在线运行代码片段。 [图片] glot.io 这个网站提供了公开的代码片段执行和分享功能，任何人在注册后都可以分享自",
              "title": "【服务搭建】零开销在线运行代码！glot.io服务私有化部署"
            }
          },
          "module_type": "MODULE_TYPE_BOTTOM"
        },
        {
          "module_stat": {
            "coin": {
              "count": 1,
              "forbidden": false,
              "status": false
            },
            "comment": {
              "count": 3,
              "forbidden": false
            },
            "favorite": {
              "count": 4,
              "forbidden": false,
              "status": false
            },
            "forward": {
              "count": 0,
              "forbidden": false
            },
            "like": {
              "count": 17,
              "forbidden": false,
              "status": false
            }
          },
          "module_type": "MODULE_TYPE_STAT"
        }
      ],
      "type": 1
    }
  },
  "message": "0",
  "ttl": 1
}
```
</details>

<!-- Generated by json-apidoc-gen @ 2025-07-16T03:36:40.328047838Z -->
