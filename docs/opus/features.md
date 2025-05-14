# 功能模块

部分动态相关接口请求存在 `features` 参数, 意为功能<br />
主要用于控制返回结果中的 `modules`, 意为模块<br />
此两者在一定程度上为对应关系, 但也存在大量例外<br />
本页文档整理了大部分常见的已知功能与模块以供参考

## features

请求 URL 参数, 用 `,` 分隔

| 名称 | 含义 | 备注 | 示例 |
| ---- | ---- | ---- | ---- |
| htmlNewStyle  | 是否显示专栏正文 | 对于纯动态类型接口无效 | 1056353752004427792 |
| itemOpusStyle | 是否以图文风格显示动态 | 部分动态强制需要, 对于图文类型接口无效 | 1060771233257226247, 1065507757569867779 |
| listOnlyfans  |  |  |  |
| opusBigCover  | 是否在返回结果中区分大封面与九宫格 | 对于图文接口似乎无效, 前置条件 `itemOpusStyle` | 1052711525276450824 |
| onlyfansVote  | 是否在投票信息中增加参与按钮等 |  | 1060771233257226247 |
| onlyfansAssetsV2  |  |  |  |
| forwardListHidden |  |  |  |
| ugcDelete         |  |  |  |
| onlyfansQaCard    |  |  |  |
| commentsNewVersion |  |  |  |
| decorationCard | 是否以卡片形式显示装扮 | 对于图文类型接口无效 | 566950981753221664 |

## modules

内容以 [获取图文详细信息](detail.md) 为基础

### MODULE_TYPE_AUTHOR

根对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| module_author | object |  |  |
| module_type | string |  |  |

`module_author` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| avater | object | 头像信息 | 主要用于网页渲染, 若感兴趣可参考 [图片格式化](../misc/picture.md) |
| decorate | object | 装扮 | 仅当动态接口且无 `decorationCard` 时存在 |
| decorate_card | object | 装扮 | 仅当图文接口时存在 |
| decoration_card | object | 装扮 | 仅当动态接口且有 `decorationCard` 时存在, 同 `decorate_card` |
| face | string | 头像 URL | |
| face_nft | boolean | 是否为 NFT 头像 | |
| following | boolean | 是否关注此 UP 主 | 自己的动态为 `null` |
| jump_url | string | 跳转链接 |  |
| label | string | 名称前标签 | `合集`<br/>`电视剧`<br/>`番剧` |
| mid | number | UP 主 UID<br/>剧集 SeasonId | |
| more | object | 三点按钮中的项目 |  |
| name | string | UP 主名称<br/>剧集名称<br/>合集名称 | |
| official | object | UP 主认证信息 | 仅图文接口 |
| official_verify | object | UP主认证信息 | 仅动态接口 |
| pendant | object | UP 主头像框 | |
| pub_action | string | 更新动作描述 | 仅动态接口<br />`投稿了视频`<br/>`直播了`<br/>`投稿了文章`<br/>`更新了合集`<br/>`与他人联合创作`<br/>`发布了动态视频`<br/>`投稿了直播回放` |
| pub_location_text | string | 空    |  |
| pub_time | string | 更新时间 | `x分钟前`<br/>`x小时前`<br/>`昨天`<br />等 |
| pub_ts | number | 更新时间戳 | UNIX 秒级时间戳 |
| views_text | string |  |  |
| vip | object | UP 主大会员信息 | |
| type | string | 作者类型 | 仅动态接口, [作者类型](../dynamic/dynamic_enum.md#作者类型) |
| nft_info | object | NFT 头像信息 | 可能不存在 |

`module_author.avatar` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| container_size | object |  |  |
| fallback_layers | object |  |  |
| mid | string |  |  |

`module_author.avatar.container_size` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| height | number |  |  |
| width | number |  |  |

`module_author.avatar.fallback_layers` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| is_critical_group | boolean |  |  |
| layers | object[] |  |  |

`module_author.avatar.fallback_layers.layers[]` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| general_spec | object |  |  |
| layer_config | object |  |  |
| resource | object |  |  |
| visible | boolean |  |  |

`module_author.avatar.fallback_layers.layers[].general_spec` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| pos_spec | object |  |  |
| render_spec | object |  |  |
| size_spec | object |  |  |

`module_author.avatar.fallback_layers.layers[].general_spec.pos_spec` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| axis_x | number |  |  |
| axis_y | number |  |  |
| coordinate_pos | number |  |  |

`module_author.avatar.fallback_layers.layers[].general_spec.render_spec` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| opacity | number |  |  |

`module_author.avatar.fallback_layers.layers[].general_spec.size_spec` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| height | number |  |  |
| width | number |  |  |

`module_author.avatar.fallback_layers.layers[].layer_config` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| is_critical | boolean |  |  |
| tags | object |  |  |

`module_author.avatar.fallback_layers.layers[].layer_config.tags` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| AVATAR_LAYER | object |  |  |
| GENERAL_CFG | object |  |  |

`module_author.avatar.fallback_layers.layers[].layer_config.tags.AVATAR_LAYER` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |

`module_author.avatar.fallback_layers.layers[].layer_config.tags.GENERAL_CFG` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| config_type | number |  |  |
| general_config | object |  |  |

`module_author.avatar.fallback_layers.layers[].layer_config.tags.GENERAL_CFG.general_config` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| web_css_style | object |  |  |

`module_author.avatar.fallback_layers.layers[].layer_config.tags.GENERAL_CFG.general_config.web_css_style` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| borderRadius | string |  |  |

`module_author.avatar.fallback_layers.layers[].resource` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| res_image | object |  |  |
| res_type | number |  |  |

`module_author.avatar.fallback_layers.layers[].resource.res_image` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| image_src | object |  |  |

`module_author.avatar.fallback_layers.layers[].resource.res_image.image_src` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| placeholder | number |  |  |
| remote | object |  |  |
| src_type | number |  |  |

`module_author.avatar.fallback_layers.layers[].resource.res_image.image_src.remote` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| bfs_style | string |  |  |
| url | string |  |  |

`module_author.decorate` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| card_url | string | 动态卡片小图标图片URL | |
| fan | object | 粉丝装扮信息 | |
| id | number | 装扮 ID | |
| jump_url | string | 跳转 URL | |
| name | string | 装扮名称 | |
| type | number | `1` `2` `3` | |

`module_author.decorate.fan` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| color | string | 编号颜色 | |
| color_format | object | 颜色格式 | |
| is_fan | boolean | 是否是粉丝装扮 | |
| num_str | string | 装扮编号前缀 | 如 `NO.` |
| number | number | 装扮编号 | |

<!-- Generated by json-apidoc-gen @ 2025-05-10T04:02:29.755564325Z -->
`module_author.decorate.fan.color_format` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| colors | string[] | 颜色 | 带 `#` 前缀的 16 进制颜色代码 |
| end_point | string| 端点 | `0,100` |
| gradients | number[] | 渐变 | 内容 [0, 100] |
| start_point | string | 起点 | `0,0` |

`module_author.decorate_card` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| big_card_url | string | 大装扮卡片 URL |  |
| card_type | number | 装扮卡片类型 |  |
| card_type_name | string | 装扮卡片类型名称 |  |
| card_url | string | 装扮卡片 URL |  |
| fan | object | 粉丝装扮信息 | 同 `module_author.decorate.fan` |
| id | number | 装扮 ID |  |
| image_enhance | string | 同 `card_url`? |  |
| item_id | number | 项目 ID? |  |
| item_type | number | 项目类型? |  |
| jump_url | string | 跳转 URL |  |
| name | string | 装扮名称 |  |

<!-- Generated by json-apidoc-gen @ 2025-05-10T04:28:40.067509455Z -->

`module_author.more` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| three_point_items | object[] |  |  |

`module_author.more.three_point_items[]` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| label | string |  |  |
| type | string |  |  |

`module_author.official` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| desc | string | 认证说明  |  |
| role | number |  |  |
| title | string |  |  |
| type | number | 认证类型  |  |

`module_author.pendant` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| expire | number | 过期时间 | 此接口返回恒为`0` |
| image | string | 头像框图片 URL | |
| image_enhance | string | 头像框图片 URL | |
| image_enhance_frame | string | 头像框图片逐帧序列 URL | |
| n_pid | number | 同 `pid` | |
| name | string | 头像框名称 | |
| pid | number |  头像框id | |

`module_author.vip` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| avatar_icon | object | | 仅图文接口 |
| avatar_subscript | number | 是否显示角标 | 0：不显示<br/>1：显示 |
| avatar_subscript_url | string | 空 | |
| due_date | number | 大会员过期时间戳 | UNIX 毫秒时间戳 |
| label | object | 大会员标签 | |
| nickname_color | string | 名字显示颜色 | 大会员：`#FB7299` |
| role | number | | 仅图文接口 |
| status | number | 大会员状态 | 0：无<br />1：有<br/>2：封禁? |
| theme_type | number | 主题类型? | 仅图文接口 |
| tv_due_date | number | TV 端过期时间? | 仅图文接口 |
| tv_vip_pay_type | number | TV 端付费状态? | 仅图文接口|
| tv_vip_status | number | TV 端会员状态? | |
| type | number | 大会员类型? |  |
| vip_pay_type | number | 大会员付费类型? |

`module_author.vip.avatar_icon` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| icon_resource | object |  |  |

`module_author.vip.avatar_icon.icon_resource` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |

`module_author.vip.label` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| bg_color | string | 会员标签背景颜色 | `#FB7299` |
| bg_style | number | `0` `1` | |
| border_color | string | 空 | |
| img_label_uri_hans | string | 大会员牌子图片 | 动态版 简体版 |
| img_label_uri_hans_static | string | 大会员牌子图片 | 静态版 简体版 |
| img_label_uri_hant | string | 大会员牌子图片 | 动态版 繁体版 |
| img_label_uri_hant_static | string | 大会员牌子图片 | 静态版 繁体版 |
| label_theme | string | 会员标签 | vip：大会员<br />annual_vip：年度大会员<br />ten_annual_vip：十年大会员<br />hundred_annual_vip：百年大会员<br/>fools_day_hundred_annual_vip：最强绿鲤鱼 |
| path | string | 空 | |
| text | string | 会员类型文案 | `大会员` `年度大会员` `十年大会员` `百年大会员` `最强绿鲤鱼` |
| text_color | string | 用户名文字颜色 | |
| use_img_label | boolean | `true` | |

`module_author.nft_info`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| region_icon | string | NFT头像角标URL | 类型1：https://i0.hdslb.com/bfs/activity-plat/static/20220506/334553dd7c506a92b88eaf4d59ac8b4d/j8AeXAkEul.gif <br/>类型2：https://i0.hdslb.com/bfs/activity-plat/static/20220506/334553dd7c506a92b88eaf4d59ac8b4d/IOHoVs1ebP.gif |
| region_type | number | NFT头像角标类型 | 1,2 |
| show_status | number | `1` | |

<details>
<summary>查看示例:</summary>

```json
{
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
    "decorate_card": {
      "big_card_url": "https://i0.hdslb.com/bfs/vip/e2ffa1d1d491fe0464338ed3921327ef5e4b42c5.png",
      "card_type": 2,
      "card_type_name": "免费",
      "card_url": "https://i0.hdslb.com/bfs/vip/a9e3d993c7a15e88ce0bf714a142f7d2b44121e2.png",
      "fan": {},
      "id": 28,
      "image_enhance": "https://i0.hdslb.com/bfs/vip/a9e3d993c7a15e88ce0bf714a142f7d2b44121e2.png",
      "item_id": 28,
      "item_type": 1,
      "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=28&isdiy=0&part=card&from=post&f_source=garb&vmid=645769214&native.theme=1&navhide=1",
      "name": "2233娘"
    },
    "face": "https://i2.hdslb.com/bfs/face/77906db03b1eefac02613de184afad03f7bc58d7.jpg",
    "face_nft": false,
    "following": true,
    "jump_url": "//space.bilibili.com/645769214",
    "label": "",
    "mid": 645769214,
    "more": {
      "three_point_items": [
        {
          "label": "举报",
          "type": "THREE_POINT_REPORT"
        }
      ]
    },
    "name": "Session小胡",
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
    "pub_location_text": "",
    "pub_time": "2025年04月06日 20:18",
    "pub_ts": 1743941902,
    "views_text": "",
    "vip": {
      "avatar_icon": {
        "icon_resource": {}
      },
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
      "role": 0,
      "status": 0,
      "theme_type": 0,
      "tv_due_date": 0,
      "tv_vip_pay_type": 0,
      "tv_vip_status": 0,
      "type": 1,
      "vip_pay_type": 0
    }
  },
  "module_type": "MODULE_TYPE_AUTHOR"
}
```
</details>

<!-- Generated by json-apidoc-gen @ 2025-05-10T03:57:58.052575522Z -->
