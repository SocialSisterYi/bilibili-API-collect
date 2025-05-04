# 消息设置

## 获取系统设置

> <https://api.vc.bilibili.com/link_setting/v1/link_setting/get_sys_setting>

*请求方式：GET*

认证方式：Cookie（SESSDATA）

此接口中的设置一般不能由用户随意更改

**url参数：**

| 参数名   | 类型 | 内容             | 必要性 | 备注                      |
| -------- | ---- | ---------------- | ------ | ------------------------- |
| build    | num  | 客户端内部版本号 | 非必要 | 默认为 `0`                |
| mobi_app | str  | 平台标识         | 非必要 | 可为 `web` 等             |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| msg     | str  | 错误信息 | 默认为0                       |
| message | str  | 错误信息 | 默认为0                       |
| ttl     | num  | 1        |                               |
| data    | obj  | 信息本体 |                               |

`data` 对象：

| 字段                              | 类型 | 内容                                                                                     | 备注                       |
| --------------------------------- | ---- | ---------------------------------------------------------------------------------------- | -------------------------- |
| is_create_group_available         | num  | 是否可创建粉丝团                                                                         | 粉丝数达到 1000 后开启     |
| is_auto_reply_available           | num  | 是否可使用自动回复功能                                                                   | 粉丝数达到 1000 后开启     |
| vc_hint_title                     | str  | 稿件自动推送小灰条内容                                                                   | `我为什么会收到此类消息`   |
| vc_hint_title_button              | str  | 稿件自动推送小灰条旁的按钮内容                                                           | `了解更多`                 |
| vc_hint_detail                    | str  | 稿件自动推送详细信息小灰条内容                                                           | `您【特别关注】的UP主更新视频或专栏后，会第一时间在私信推送给您。如有需要可点击右上角设置关闭推送。` |
| vc_hint_detail_button             | str  | 关闭稿件自动推送按钮内容                                                                 | `关闭推送`                 |
| auto_reply_html                   | str  | 自动回复H5页面url                                                                        | `https://message.bilibili.com/h5/app/auto-reply` |
| is_receive_unfollow_wl            | num  | 是否显示限制接收未关注人消息功能                                                         |                            |
| is_voyage                         | num  | 是否在自动回复页面显示 “大航海自动回复” 按钮                                             | 仅部分用户开启             |
| is_auto_reply_recommend_available | num  | 是否在自动回复中的 “被关注回复” 页面显示 “被关注后，向关注我的人推送我的往期作品” 复选框 | 仅部分用户开启             |
| is_discuss_style_im_page          | num  | （？）                                                                                   | **作用尚不明确**           |
| discuss_unread_style_im_page      | num  | （？）                                                                                   | **作用尚不明确**           |
| old_up_assistant_door             | obj  | 原 “UP主小助手” 入口相关信息                                                             |                            |
| is_new_up_assistant_effective     | num  | 新 “UP主小助手” 是否启用                                                                 |                            |
| is_archive_gray                   | bool | 是否不显示 “私信存档” 按钮                                                               |                            |
| session_cfg                       | obj  | 特定私信会话配置信息                                                                     |                            |
| migrate_session_api               | bool | （？）                                                                                   | **作用尚不明确**           |
| game_msg                          | obj  | （？）                                                                                   | **作用尚不明确**；仅当请求参数 `mobi_app` 不为 `web` 时有其中的项目 |
| auto_reply_msg_desc               | str  | 指示消息为自动回复消息的提示内容                                                         | `此条消息为自动回复`       |
| huahuo_group_icon_new             | str  | 浅色模式下的花火图标url                                                                  |                            |
| huahuo_group_icon_dark_new        | str  | 深色模式下的花火图标url                                                                  |                            |
| im_disabled_input_hint            | str  | 某UP主禁用私信功能时的提示内容                                                           | `请到UP主空间发起咨询`     |

`data` 中的 `old_up_assistant_door` 对象：

| 字段             | 类型 | 内容                         | 备注         |
| ---------------- | ---- | ---------------------------- | ------------ |
| show_old_up_door | num  | 是否显示原 “UP主小助手” 入口 | 目前恒为 `0` |
| title            | str  | 原 “UP主小助手” 入口标题     | 目前为空文本 |
| sub_title        | str  | 原 “UP主小助手” 入口子标题   | 目前为空文本 |

`data` 中的 `session_cfg` 对象：

| 字段      | 类型 | 内容             | 备注 |
| --------- | ---- | ---------------- | ---- |
| {用户mid} | obj  | 该会话的配置信息 |      |

`session_cfg` 中的 `{用户mid}` 对象：

| 字段             | 类型 | 内容                 | 备注                |
| ---------------- | ---- | -------------------- | ------------------- |
| hidden_emote_btn | bool | 是否隐藏表情按钮     |                     |
| hidden_pic_btn   | bool | 是否隐藏发送图片按钮 |                     |
| max_height       | num  | 最大高度（？）       | **作用尚不明确**    |
| hint_text        | str  | 私信输入框的提示内容 | `你想问什么问题呢?` |
| hidden_top_hint  | str  | （？）               | **作用尚不明确**    |
| is_gpt_account   | bool | 是否为AI会话         |                     |

`data` 中的 `game_msg` 对象：

| 字段         | 类型 | 内容 | 备注                                                          |
| ------------ | ---- | ---- | ------------------------------------------------------------- |
| show_install | bool | true | **作用尚不明确**；仅当请求参数 `mobi_app` 不为 `web` 时有此项 |

**示例：**

```shell
curl 'https://api.vc.bilibili.com/link_setting/v1/link_setting/get_sys_setting' \
  -b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "msg": "0",
  "message": "0",
  "ttl": 1,
  "data": {
    "is_create_group_available": 1,
    "is_auto_reply_available": 1,
    "vc_hint_title": "我为什么会收到此类消息",
    "vc_hint_title_button": "了解更多",
    "vc_hint_detail": "您【特别关注】的UP主更新视频或专栏后，会第一时间在私信推送给您。如有需要可点击右上角设置关闭推送。",
    "vc_hint_detail_button": "关闭推送",
    "auto_reply_html": "https://message.bilibili.com/h5/app/auto-reply",
    "is_receive_unfollow_wl": 0,
    "is_voyage": 1,
    "is_auto_reply_recommend_available": 0,
    "is_discuss_style_im_page": 0,
    "discuss_unread_style_im_page": 0,
    "old_up_assistant_door": {
      "show_old_up_door": 0,
      "title": "",
      "sub_title": ""
    },
    "is_new_up_assistant_effective": 1,
    "is_archive_gray": true,
    "session_cfg": {
      "100000000000001": {
        "hidden_emote_btn": true,
        "hidden_pic_btn": true,
        "max_height": 62,
        "hint_text": "你想问什么问题呢?",
        "hidden_top_hint": true,
        "is_gpt_account": true
      },
      "100000000000002": {
        "hidden_emote_btn": true,
        "hidden_pic_btn": true,
        "max_height": 62,
        "hint_text": "你想问什么问题呢?",
        "hidden_top_hint": true,
        "is_gpt_account": true
      },
      "1400565964": {
        "hidden_emote_btn": true,
        "hidden_pic_btn": true,
        "max_height": 62,
        "hint_text": "你想问什么问题呢?",
        "hidden_top_hint": true,
        "is_gpt_account": true
      }
    },
    "migrate_session_api": false,
    "game_msg": {
      "show_install": true
    },
    "auto_reply_msg_desc": "此条消息为自动回复",
    "huahuo_group_icon_new": "http://i0.hdslb.com/bfs/kfptfe/floor/e2e3829e514ebccab1705636b0354ec89446a4b5.png",
    "huahuo_group_icon_dark_new": "http://i0.hdslb.com/bfs/kfptfe/floor/d09bc8c0716a15938ec427db5fa962733703f3ce.png",
    "im_disabled_input_hint": "请到UP主空间发起咨询"
  }
}
```

</details>

## 是否显示创建粉丝团按钮

> <https://api.vc.bilibili.com/link_group/v1/member/show_create_group_icon>

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名   | 类型 | 内容             | 必要性 | 备注                      |
| -------- | ---- | ---------------- | ------ | ------------------------- |
| build    | num  | 客户端内部版本号 | 非必要 | 默认为 `0`                |
| mobi_app | str  | 平台标识         | 非必要 | 可为 `web` 等             |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| msg     | str  | 错误信息 | 默认为0                       |
| message | str  | 错误信息 | 默认为0                       |
| ttl     | num  | 1        |                               |
| data    | obj  | 信息本体 |                               |

`data` 对象：

| 字段 | 类型 | 内容                   | 备注                   |
| ---- | ---- | ---------------------- | ---------------------- |
| show | num  | 是否显示创建粉丝团按钮 | 粉丝数达到 1000 后显示 |

**示例：**

```shell
curl 'https://api.vc.bilibili.com/link_group/v1/member/show_create_group_icon' \
  -b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "msg": "0",
  "message": "0",
  "ttl": 1,
  "data": {
    "show": 1
  }
}
```

</details>
