# 消息设置

## 获取用户偏好设置

> <https://api.vc.bilibili.com/link_setting/v1/link_setting/get>

*请求方式：GET 或 POST*

认证方式：Cookie（SESSDATA）

**url参数（GET）或 正文参数（application/x-www-form-urlencoded，POST）：**

| 参数名              | 类型 | 内容                             | 必要性       | 备注                      |
| ------------------- | ---- | -------------------------------- | ------------ | ------------------------- |
| msg_notify          | num  | 是否显示 “消息提醒” 设置         | 非必要       | 若此项为任意整数，则返回数据中有 `msg_notify` 项 |
| show_unfollowed_msg | num  | 是否显示 “收起未关注人消息” 设置 | 非必要       | 若此项为任意整数，则返回数据中有 `show_unfollowed_msg` 项 |
| build               | num  | 客户端内部版本号                 | 非必要       | 默认为 `0`                |
| mobi_app            | str  | 平台标识                         | 非必要       | 可为 `web` 等             |
| csrf_token          | str  | CSRF Token（位于cookie）         | POST方式必要 |                           |
| csrf                | str  | CSRF Token（位于cookie）         | POST方式必要 |                           |

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

| 字段                     | 类型 | 内容                 | 备注                                                                        |
| ------------------------ | ---- | -------------------- | --------------------------------------------------------------------------- |
| show_unfollowed_msg      | num  | 收起未关注人消息     | 请求参数 `show_unfollowed_msg` 为整数时显示此项<br />0：不收起<br />1：收起 |
| msg_notify               | num  | 消息提醒             | 请求参数 `msg_notify` 为整数时显示此项<br />1：接收<br />3：不接收          |
| set_like                 | num  | 收到的赞提醒（旧）   | 0：接收<br />5：不接收                                                      |
| set_comment              | num  | 回复我的提醒（旧）   | 0：所有人<br />1：关注的人<br />2：不接受任何消息提醒                       |
| set_at                   | num  | @ 我的提醒 （旧）    | 0：所有人<br />1：关注的人<br />2：不接受任何消息提醒                       |
| is_group_fold            | num  | 收起应援团消息       | 0：不收起<br />1：收起                                                      |
| should_receive_group     | num  | 接收应援团消息       | 0：不接收<br />1：接收                                                      |
| receive_unfollow_msg     | num  | 接收未关注人消息     | 前端隐藏此开关<br />0：不接收<br />1：接收                                  |
| followed_reply           | num  | 被关注回复           | 0：关闭<br />1：开启                                                        |
| keys_reply               | num  | 关键词回复           | 0：关闭<br />1：开启                                                        |
| recv_reply               | num  | 收到消息回复         | 0：关闭<br />1：开启                                                        |
| voyage_reply             | num  | 大航海上船回复       | 0：关闭<br />1：开启                                                        |
| recommend_followed_reply | num  | 被关注时自动推送作品 | 0：关闭<br />1：开启                                                        |
| ai_intercept             | num  | 私信智能拦截         | 0：关闭<br />1：开启                                                        |
| anti_harassment          | null | 防骚扰和互动人群设置 | 此接口恒返回 `null`                                                         |
| set_recv_reply           | num  | 回复与@提醒（新）    | 0：所有人<br />1：关注的人<br />2：不接受任何消息提醒                       |
| set_recv_like            | num  | 收到喜欢提醒（新）   | 0：接收<br />2：不接收                                                      |
| set_new_follow           | num  | 新增粉丝提醒（新）   | 0：接收<br />2：不接收                                                      |

**示例：**

```shell
curl -G 'https://api.vc.bilibili.com/link_setting/v1/link_setting/get' \
  --data-urlencode 'msg_notify=1' \
  --data-urlencode 'show_unfollowed_msg=1' \
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
    "show_unfollowed_msg": 0,
    "msg_notify": 1,
    "set_like": 0,
    "set_comment": 0,
    "set_at": 0,
    "is_group_fold": 0,
    "should_receive_group": 1,
    "receive_unfollow_msg": 1,
    "followed_reply": 1,
    "keys_reply": 0,
    "recv_reply": 1,
    "voyage_reply": 0,
    "recommend_followed_reply": 1,
    "ai_intercept": 1,
    "anti_harassment": null,
    "set_recv_reply": 0,
    "set_recv_like": 0,
    "set_new_follow": 0
  }
}
```

</details>

## 修改用户偏好设置

> <https://api.vc.bilibili.com/link_setting/v1/link_setting/set>

*请求方式：POST*

认证方式：Cookie（SESSDATA）

参数名称与值基本同「[获取用户偏好设置](#获取用户偏好设置)」中的 `data` 对象，修改设置时只需提供修改的设置对应的参数即可

开启自动回复功能需要 1000 粉丝及以上，否则会提示 700009 `权限不足`

**正文参数（application/x-www-form-urlencoded）：**

| 参数名                   | 类型 | 内容                     | 必要性 | 备注                                                  |
| ------------------------ | ---- | ------------------------ | ------ | ----------------------------------------------------- |
| show_unfollowed_msg      | num  | 收起未关注人消息         | 非必要 | 0：不收起<br />1：收起                                |
| msg_notify               | num  | 消息提醒                 | 非必要 | 1：接收<br />3：不接收                                |
| set_like                 | num  | 收到的赞提醒             | 非必要 | 0：接收<br />5：不接收                                |
| set_comment              | num  | 回复我的提醒             | 非必要 | 0：所有人<br />1：关注的人<br />2：不接受任何消息提醒 |
| set_at                   | num  | @ 我的提醒               | 非必要 | 0：所有人<br />1：关注的人<br />2：不接受任何消息提醒 |
| is_group_fold            | num  | 收起应援团消息           | 非必要 | 0：不收起<br />1：收起                                |
| should_receive_group     | num  | 接收应援团消息           | 非必要 | 0：不接收<br />1：接收                                |
| receive_unfollow_msg     | num  | 接收未关注人消息         | 非必要 | 0：不接收<br />1：接收                                |
| followed_reply           | num  | 被关注回复               | 非必要 | 需要有自动回复权限<br />0：关闭<br />1：开启          |
| keys_reply               | num  | 关键词回复               | 非必要 | 需要有自动回复权限<br />0：关闭<br />1：开启          |
| recv_reply               | num  | 收到消息回复             | 非必要 | 需要有自动回复权限<br />0：关闭<br />1：开启          |
| voyage_reply             | num  | 大航海上船回复           | 非必要 | 需要有自动回复权限<br />0：关闭<br />1：开启          |
| recommend_followed_reply | num  | 被关注时自动推送作品     | 非必要 | 需要有自动回复权限<br />0：关闭<br />1：开启          |
| ai_intercept             | num  | 私信智能拦截             | 非必要 | 0：关闭<br />1：开启                                  |
| build                    | num  | 客户端内部版本号         | 非必要 | 默认为 `0`                                            |
| mobi_app                 | str  | 平台标识                 | 非必要 | 可为 `web` 等                                         |
| csrf_token               | str  | CSRF Token（位于cookie） | 必要   |                                                       |
| csrf                     | str  | CSRF Token（位于cookie） | 必要   |                                                       |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                                 |
| ------- | ---- | -------- | -------------------------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />2：非法参数<br />700009：权限不足 |
| msg     | str  | 错误信息 | 默认为0                                                              |
| message | str  | 错误信息 | 默认为0                                                              |
| ttl     | num  | 1        |                                                                      |
| data    | obj  | 信息本体 | 空对象                                                               |

**示例：**

开启接收消息提醒

```shell
curl 'https://api.vc.bilibili.com/link_setting/v1/link_setting/set' \
  --data-urlencode 'msg_notify=1' \
  --data-urlencode 'build=0' \
  --data-urlencode 'mobi_app=web' \
  --data-urlencode 'csrf_token=xxx' \
  --data-urlencode 'csrf=xxx' \
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
  "data": {}
}
```

</details>

## 获取消息屏蔽词

> <https://api.vc.bilibili.com/x/im/link_setting/get_block_words>

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名   | 类型 | 内容             | 必要性 | 备注          |
| -------- | ---- | ---------------- | ------ | ------------- |
| build    | num  | 客户端内部版本号 | 非必要 | 默认为 `0`    |
| mobi_app | str  | 平台标识         | 非必要 | 可为 `web` 等 |

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

| 字段            | 类型                            | 内容               | 备注             |
| --------------- | ------------------------------- | ------------------ | ---------------- |
| words           | 有效时：array<br />无效时：null | 消息屏蔽词列表     |                  |
| message         | str                             | （？）             | **作用尚不明确** |
| max_word_length | num                             | 单个屏蔽词最大长度 | 目前为 `20`      |
| max_words_size  | num                             | 屏蔽词最大数量     | 目前为 `200`     |

`data` 中的 `words` 数组：

| 项   | 类型 | 内容        | 备注 |
| ---- | ---- | ----------- | ---- |
| 0    | obj  | 屏蔽词1     |      |
| n    | obj  | 屏蔽词(n+1) |      |
| ……   | obj  | ……          | ……   |

`words` 数组中的对象：

| 字段    | 类型 | 内容           | 备注       |
| ------- | ---- | -------------- | ---------- |
| content | str  | 屏蔽词内容     |            |
| ctime   | num  | 屏蔽词添加时间 | 秒级时间戳 |

**示例：**

```shell
curl -G 'https://api.vc.bilibili.com/x/im/link_setting/get_block_words' \
  --data-urlencode 'build=0' \
  --data-urlencode 'mobi_app=web' \
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
    "words": [
      {
        "content": "屏蔽词",
        "ctime": 1746422088
      }
    ],
    "message": "",
    "max_word_length": 20,
    "max_words_size": 200
  }
}
```

</details>

## 添加消息屏蔽词

> <https://api.vc.bilibili.com/x/im/link_setting/add_block_word>

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（application/x-www-form-urlencoded）：**

| 参数名     | 类型 | 内容                     | 必要性 | 备注           |
| ---------- | ---- | ------------------------ | ------ | -------------- |
| content    | str  | 屏蔽词内容               | 必要   | 最多 20 个字符 |
| build      | num  | 客户端内部版本号         | 非必要 | 默认为 `0`     |
| mobi_app   | str  | 平台标识                 | 非必要 | 可为 `web` 等  |
| csrf_token | str  | CSRF Token（位于cookie） | 必要   |                |
| csrf       | str  | CSRF Token（位于cookie） | 必要   |                |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                                                  |
| ------- | ---- | -------- | ------------------------------------------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误<br />1900004：添加失败，屏蔽词限制最多20个字<br />1900005：添加失败，最多可以添加200个屏蔽词<br />1900006：添加失败，屏蔽词重复<br />1900007：添加失败，屏蔽词不支持空格 |
| msg     | str  | 错误信息 | 默认为0                                                                               |
| message | str  | 错误信息 | 默认为0                                                                               |
| ttl     | num  | 1        |                                                                                       |
| data    | obj  | 信息本体 | 空对象                                                                                |

**示例：**

```shell
curl 'https://api.vc.bilibili.com/x/im/link_setting/add_block_word' \
  --data-urlencode 'content=屏蔽词' \
  --data-urlencode 'build=0' \
  --data-urlencode 'mobi_app=web' \
  --data-urlencode 'csrf_token=xxx' \
  --data-urlencode 'csrf=xxx' \
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
  "data": {}
}
```

</details>

## 删除消息屏蔽词

> <https://api.vc.bilibili.com/x/im/link_setting/del_block_word>

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（application/x-www-form-urlencoded）：**

| 参数名     | 类型 | 内容                     | 必要性 | 备注          |
| ---------- | ---- | ------------------------ | ------ | ------------- |
| content    | str  | 屏蔽词内容               | 必要   |               |
| build      | num  | 客户端内部版本号         | 非必要 | 默认为 `0`    |
| mobi_app   | str  | 平台标识                 | 非必要 | 可为 `web` 等 |
| csrf_token | str  | CSRF Token（位于cookie） | 必要   |               |
| csrf       | str  | CSRF Token（位于cookie） | 必要   |               |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| msg     | str  | 错误信息 | 默认为0                                           |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        |                                                   |
| data    | obj  | 信息本体 | 空对象                                            |

**示例：**

```shell
curl 'https://api.vc.bilibili.com/x/im/link_setting/del_block_word' \
  --data-urlencode 'content=屏蔽词' \
  --data-urlencode 'build=0' \
  --data-urlencode 'mobi_app=web' \
  --data-urlencode 'csrf_token=xxx' \
  --data-urlencode 'csrf=xxx' \
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
  "data": {}
}
```

</details>

## 获取自动回复文本/关键词回复规则

> <https://api.vc.bilibili.com/x/im/auto_reply/get_reply_text>

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名   | 类型 | 内容             | 必要性 | 备注                                                                         |
| -------- | ---- | ---------------- | ------ | ---------------------------------------------------------------------------- |
| type\[\] | num  | 自动回复类型     | 必要   | 1：被关注回复<br />2：关键词回复<br />3：收到消息回复<br />5：大航海上船回复 |
| uid      | num  | 自己的mid        | 非必要 |                                                                              |
| build    | num  | 客户端内部版本号 | 非必要 | 默认为 `0`                                                                   |
| mobi_app | str  | 平台标识         | 非必要 | 可为 `web` 等                                                                |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                           |
| ------- | ---- | -------- | ---------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />2：非法参数 |
| message | str  | 错误信息 | 默认为0                                        |
| ttl     | num  | 1        |                                                |
| data    | obj  | 信息本体 |                                                |

`data` 对象：

| 字段  | 类型  | 内容         | 备注                                   |
| ----- | ----- | ------------ | -------------------------------------- |
| texts | array | 自动回复文本 | 若未设置此类型自动回复文本，则没有此项 |

`data` 中的 `texts` 数组：

| 项   | 类型 | 内容      | 备注                             |
| ---- | ---- | --------- | -------------------------------- |
| 0    | obj  | 文本1     |                                  |
| n    | obj  | 文本(n+1) | 当类型为 “关键词回复” 时可有多项 |
| ……   | obj  | ……        | ……                               |

`texts` 数组中的对象：

| 字段  | 类型 | 内容           | 备注                                                                       |
| ----- | ---- | -------------- | -------------------------------------------------------------------------- |
| id    | num  | 自动回复规则id |                                                                            |
| uid   | num  | 自己的mid      |                                                                            |
| type  | num  | 自动回复类型   | 同请求参数 `type[]`                                                        |
| title | str  | 规则名称       | 当类型为 “关键词回复” 时有效，否则为空文本                                 |
| key1  | str  | 精确匹配关键词 | 当类型为 “关键词回复” 时有效，否则为空文本<br />以中文逗号分隔每一个关键词 |
| key2  | str  | 模糊匹配关键词 | 当类型为 “关键词回复” 时有效，否则为空文本<br />以中文逗号分隔每一个关键词 |
| reply | str  | 回复内容       |                                                                            |

**示例：**

获取关键词回复规则

```shell
curl -G 'https://api.vc.bilibili.com/x/im/auto_reply/get_reply_text' \
  --data-urlencode 'type[]=2' \
  --data-urlencode 'uid=425503913' \
  --data-urlencode 'build=0' \
  --data-urlencode 'mobi_app=web' \
  -b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "texts": [
      {
        "id": 201321,
        "uid": 425503913,
        "type": 2,
        "title": "谢谢",
        "key1": "谢谢，Thank you",
        "key2": "感谢",
        "reply": "我也感谢您对我的支持 (=・ω・=)"
      },
      {
        "id": 201320,
        "uid": 425503913,
        "type": 2,
        "title": "哭2",
        "key1": "哭",
        "key2": "",
        "reply": "我是不会哭的 (=・ω・=)"
      },
      {
        "id": 201318,
        "uid": 425503913,
        "type": 2,
        "title": "哭",
        "key1": "",
        "key2": "哭",
        "reply": "别哭了[tv_微笑]摸摸您 (^・ω・^)"
      }
    ]
  }
}
```

</details>

## 修改自动回复文本/关键词回复规则

> <https://api.vc.bilibili.com/x/im/auto_reply/set_reply_text>

*请求方式：POST*

认证方式：Cookie（SESSDATA）

仅调用本接口不会开启或关闭自动回复功能，请使用 “[修改用户偏好设置](#修改用户偏好设置)” 接口

**正文参数（application/x-www-form-urlencoded）：**

| 参数名     | 类型 | 内容                     | 必要性                 | 备注                                                                         |
| ---------- | ---- | ------------------------ | ---------------------- | ---------------------------------------------------------------------------- |
| type       | num  | 自动回复类型             | 必要                   | 1：被关注回复<br />2：关键词回复<br />3：收到消息回复<br />5：大航海上船回复 |
| reply      | str  | 回复内容                 | 必要                   | 最多 500 个字符                                                              |
| id         | str  | 规则id                   | 非必要                 | 当类型为 “关键词回复” 时有效<br />为 `0` 或为空时新增回复规则，否则修改 id 对应的回复规则 |
| title      | str  | 规则名称                 | 关键词回复必要         | 当类型为 “关键词回复” 时有效，最多 30 个字符                                 |
| key1       | str  | 精确匹配关键词           | 关键词回复必要（可选） | 当类型为 “关键词回复” 时有效，`key1` 与 `key2` 须至少填一个参数<br />以中文逗号分隔每一个关键词，最多 20 项 |
| key2       | str  | 模糊匹配关键词           | 关键词回复必要（可选） | 当类型为 “关键词回复” 时有效，`key1` 与 `key2` 须至少填一个参数<br />以中文逗号分隔每一个关键词，最多 20 项 |
| build      | num  | 客户端内部版本号         | 非必要                 | 默认为 `0`                                                                   |
| mobi_app   | str  | 平台标识                 | 非必要                 | 可为 `web` 等                                                                |
| csrf_token | str  | CSRF Token（位于cookie） | 必要                   |                                                                              |
| csrf       | str  | CSRF Token（位于cookie） | 必要                   |                                                                              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                                                  |
| ------- | ---- | -------- | ------------------------------------------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />27011：请求参数错误<br />1500001：自动回复内容太长<br />1500002：规则数量已达上限，请删除后新建<br />1500003：您保存的内容含敏感信息，请修改后重试 |
| message | str  | 错误信息 | 默认为0                                                                               |
| ttl     | num  | 1        |                                                                                       |
| data    | obj  | 信息本体 | 空对象                                                                                |

**示例：**

修改关键词回复规则 `id=201321`，规则名称为 `谢谢`，精确匹配关键词为 `谢谢，Thank you，感谢`，回复内容为 `嗯嗯，不用谢[tv_微笑]`

```shell
curl 'https://api.vc.bilibili.com/x/im/auto_reply/set_reply_text' \
  --data-urlencode 'type=2' \
  --data-urlencode 'reply=嗯嗯，不用谢[tv_微笑]' \
  --data-urlencode 'id=201321' \
  --data-urlencode 'title=谢谢' \
  --data-urlencode 'key1=谢谢，Thank you，感谢' \
  --data-urlencode 'key2=' \
  --data-urlencode 'build=0' \
  --data-urlencode 'mobi_app=web' \
  --data-urlencode 'csrf_token=xxx' \
  --data-urlencode 'csrf=xxx' \
  -b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {}
}
```

</details>

## 删除关键词回复规则

> <https://api.vc.bilibili.com/x/im/auto_reply/del_reply_text>

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（application/x-www-form-urlencoded）：**

| 参数名     | 类型 | 内容                     | 必要性 | 备注          |
| ---------- | ---- | ------------------------ | ------ | ------------- |
| id         | str  | 规则id                   | 必要   |               |
| build      | num  | 客户端内部版本号         | 非必要 | 默认为 `0`    |
| mobi_app   | str  | 平台标识                 | 非必要 | 可为 `web` 等 |
| csrf_token | str  | CSRF Token（位于cookie） | 必要   |               |
| csrf       | str  | CSRF Token（位于cookie） | 必要   |               |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                |
| ------- | ---- | -------- | --------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-500：服务器错误<br />1003：不能删除别人的规则 |
| message | str  | 错误信息 | 默认为0                                             |
| ttl     | num  | 1        |                                                     |
| data    | obj  | 信息本体 | 空对象                                              |

**示例：**

删除关键词回复规则 `id=201321`

```shell
curl 'https://api.vc.bilibili.com/x/im/auto_reply/del_reply_text' \
  --data-urlencode 'id=201321' \
  --data-urlencode 'build=0' \
  --data-urlencode 'mobi_app=web' \
  --data-urlencode 'csrf_token=xxx' \
  --data-urlencode 'csrf=xxx' \
  -b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {}
}
```

</details>

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
| is_voyage                         | num  | 是否在自动回复页面显示 “大航海自动回复” 选项                                             | 仅部分用户开启             |
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
| hidden_top_hint  | bool | （？）               | **作用尚不明确**    |
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

## 获取创建粉丝团按钮可见性

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
