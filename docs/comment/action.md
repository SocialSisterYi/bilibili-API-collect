# 评论区操作

## 发表评论

> https://api.bilibili.com/x/v2/reply/add

*请求方式：POST*

认证方式：Cookie（SESSDATA）或APP

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名     | 类型 | 内容                     | 必要性         | 备注                                                         |
| ---------- | ---- | ------------------------ | -------------- | ------------------------------------------------------------ |
| access_key | str  | APP登录Token             | APP方式必要    |                                                              |
| type       | num  | 评论区类型代码           | 必要           | **[类型代码见表](readme.md#评论区类型代码)**                 |
| oid        | num  | 目标评论区id             | 必要           |                                                              |
| root       | num  | 根评论rpid               | 非必要         | 二级评论以上使用                                             |
| parent     | num  | 父评论rpid               | 非必要         | 二级评论同根评论id<br />大于二级评论为要回复的评论id         |
| message    | str  | 发送评论内容             | 必要           | 最大1000字符<br />表情使用表情转义符                         |
| plat       | num  | 发送平台标识             | 非必要         | 1：web端<br />2：安卓客户端<br />3：ios客户端<br />4：wp客户端<br />默认为1 |
| csrf       | str  | CSRF Token（位于cookie） | Cookie方式必要 |                                                              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                                                                                                                                                                                                                                                                                                                          |
| ------- | ---- | -------- |-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-111：csrf校验失败<br />-400：请求错误<br />-404：无此项<br />-509：请求过于频繁<br />12001：已经存在评论主题<br />12002：评论区已关闭<br />12003：禁止回复<br />12006：没有该评论<br />12009：评论主体的type不合法<br />12015：需要评论验证码<br />12016：评论内容包含敏感信息<br />12025：评论字数过多<br />12035：该账号被UP主列入评论黑名单<br />12051：重复评论，请勿刷屏<br />12052：评论区已关闭<br />12045：购买后即可发表评论<br/>**（其他错误码有待补充）** |
| message | str  | 错误信息 | <br />                                                                                                                                                                                                                                                                                                                                                      |
| ttl     | num  | 1        |                                                                                                                                                                                                                                                                                                                                                             |
| data    | obj  | 数据本体 |                                                                                                                                                                                                                                                                                                                                                             |

`data`对象：

| 字段           | 类型                          | 内容           | 备注                                                         |
| -------------- | ----------------------------- | -------------- | ------------------------------------------------------------ |
| success_action | num                           | 0              | **作用尚不明确**                                             |
| success_toast  | str                           | 状态文字       |                                                              |
| need_captcha   | bool                          | false          | 评论需要验证码(未证实)                                       |
| url            | str                           | 空             | **作用尚不明确**                                             |
| rpid           | num                           | 评论rpid       |                                                              |
| rpid_str       | str                           | 评论rpid       | 字串格式                                                     |
| dialog         | num                           | 回复对方rpid   | 若为一级评论则为0<br />若为二级评论则为该评论id<br />大于二级评论为上一级评论id |
| dialog_str     | str                           | 回复对方rpid   | 字串格式                                                     |
| root           | num                           | 根评论rpid     | 若为一级评论则为0<br />大于一级评论则为根评论id              |
| root_str       | str                           | 根评论rpid     | 字串格式                                                     |
| parent         | num                           | 回复父评论rpid | 若为一级评论则为0<br />若为二级评论则为根评论id<br />大于二级评论为上一级评论id |
| parent_str     | str                           | 回复父评论rpid | 字串格式                                                     |
| emote          | obj                           | 表情转义符信息 | [对象定义见表](readme.md#评论条目对象)                       |
| reply          | 有效时：obj<br />无效时：null |                | [对象定义见表](readme.md#评论条目对象)                       |

**示例：**

给视频`av243322853`发送内容为`测试test[泠鸢yousa_awsl]`的评论（带有表情转义符），平台标识为1（web端）

```shell
curl 'https://api.bilibili.com/x/v2/reply/add' \
--data-urlencode 'type=1' \
--data-urlencode 'oid=243322853' \
--data-urlencode 'message=测试test[泠鸢yousa_awsl]' \
--data-urlencode 'plat=1' \
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
    "data": {
        "success_action": 0,
        "success_toast": "发送成功",
        "need_captcha": false,
        "url": "",
        "rpid": 3043212039,
        "rpid_str": "3043212039",
        "dialog": 0,
        "dialog_str": "0",
        "root": 0,
        "root_str": "0",
        "parent": 0,
        "parent_str": "0",
        "emote": {
            "[泠鸢yousa_awsl]": {
                "id": 2086,
                "package_id": 93,
                "state": 0,
                "type": 3,
                "attr": 0,
                "text": "[泠鸢yousa_awsl]",
                "url": "http://i0.hdslb.com/bfs/emote/7663b729161bd4556c2ec318c07791000743eb56.png",
                "meta": {
                    "size": 2
                },
                "mtime": 1589776042
            }
        },
        "reply": {
            "rpid": 3043212039,
            "oid": 243322853,
            "type": 1,
            "mid": 293793435,
            "root": 0,
            "parent": 0,
            "dialog": 0,
            "count": 0,
            "rcount": 0,
            "state": 0,
            "fansgrade": 0,
            "attr": 0,
            "ctime": 1592233764,
            "rpid_str": "3043212039",
            "root_str": "0",
            "parent_str": "0",
            "like": 0,
            "action": 0,
            "member": {
                "mid": "293793435",
                "uname": "社会易姐QwQ",
                "sex": "男",
                "sign": "高中技术宅一枚，爱好MC&电子&8-bit音乐&数码&编程，资深猿厨",
                "avatar": "http://i1.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg",
                "rank": "10000",
                "DisplayRank": "0",
                "level_info": {
                    "current_level": 5,
                    "current_min": 0,
                    "current_exp": 0,
                    "next_exp": 0
                },
                "pendant": {
                    "pid": 1888,
                    "name": "泠鸢yousa",
                    "image": "http://i0.hdslb.com/bfs/garb/item/3e66e712b8e70c6b02393c54ad5fd8d993eb39f9.png",
                    "expire": 0,
                    "image_enhance": "http://i0.hdslb.com/bfs/garb/item/3e66e712b8e70c6b02393c54ad5fd8d993eb39f9.png"
                },
                "nameplate": {
                    "nid": 0,
                    "name": "",
                    "image": "",
                    "image_small": "",
                    "level": "",
                    "condition": ""
                },
                "official_verify": {
                    "type": -1,
                    "desc": ""
                },
                "vip": {
                    "vipType": 2,
                    "vipDueDate": 1612454400000,
                    "dueRemark": "",
                    "accessStatus": 0,
                    "vipStatus": 1,
                    "vipStatusWarn": "",
                    "themeType": 0,
                    "label": {
                        "path": "",
                        "text": "年度大会员",
                        "label_theme": "annual_vip"
                    }
                },
                "fans_detail": null,
                "following": 0,
                "is_followed": 0,
                "user_sailing": {
                    "pendant": {
                        "id": 1888,
                        "name": "泠鸢yousa",
                        "image": "http://i0.hdslb.com/bfs/garb/item/3e66e712b8e70c6b02393c54ad5fd8d993eb39f9.png",
                        "jump_url": "",
                        "type": "suit"
                    },
                    "cardbg": null,
                    "cardbg_with_focus": null
                }
            },
            "content": {
                "message": "测试test[泠鸢yousa_awsl]",
                "plat": 1,
                "device": "",
                "members": [],
                "emote": {
                    "[泠鸢yousa_awsl]": {
                        "id": 2086,
                        "package_id": 93,
                        "state": 0,
                        "type": 3,
                        "attr": 0,
                        "text": "[泠鸢yousa_awsl]",
                        "url": "http://i0.hdslb.com/bfs/emote/7663b729161bd4556c2ec318c07791000743eb56.png",
                        "meta": {
                            "size": 2
                        },
                        "mtime": 1589776042
                    }
                },
                "jump_url": {},
                "max_line": 0
            },
            "replies": null,
            "assist": 0,
            "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": "https://www.bilibili.com/blackboard/foldingreply.html"
            },
            "up_action": {
                "like": false,
                "reply": false
            },
            "show_follow": false
        }
    }
}
```

</details>

## 点赞评论

> https://api.bilibili.com/x/v2/reply/action

*请求方式：POST*

认证方式：Cookie（SESSDATA）或APP

点赞成功后会同时消去该评论的点踩

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名     | 类型 | 内容                     | 必要性         | 备注                                         |
| ---------- | ---- | ------------------------ | -------------- | -------------------------------------------- |
| access_key | str  | APP登录Token             | APP方式必要    |                                              |
| type       | num  | 评论区类型代码           | 必要           | **[类型代码见表](readme.md#评论区类型代码)** |
| oid        | num  | 目标评论区id             | 必要           |                                              |
| rpid       | num  | 目标评论rpid             | 必要           |                                              |
| action     | num  | 操作代码                 | 非必要         | 默认为0<br />0：取消赞<br />1：点赞          |
| csrf       | str  | CSRF Token（位于cookie） | Cookie方式必要 |                                              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-111：csrf校验失败<br />-400：请求错误<br />-404：无此项<br />-509：请求过于频繁<br />12002：评论区已关闭<br />12004：禁止操作 赞或踩<br />12006：没有该评论<br />12009：评论主体的type不合法<br />12011：不合法的赞或踩<br />**（其他错误码有待补充）** |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

点赞视频`av243322853`下评论`rpid=3039053308`

```shell
curl 'https://api.bilibili.com/x/v2/reply/action' \
--data-urlencode 'type=1' \
--data-urlencode 'oid=243322853' \
--data-urlencode 'rpid=3039053308' \
--data-urlencode 'action=1' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

</details>

## 点踩评论

> https://api.bilibili.com/x/v2/reply/hate

*请求方式：POST*

认证方式：Cookie（SESSDATA）或APP

点踩成功后会同时消去该评论的点赞

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名     | 类型 | 内容                     | 必要性         | 备注                                         |
| ---------- | ---- | ------------------------ | -------------- | -------------------------------------------- |
| access_key | str  | APP登录Token             | APP方式必要    |                                              |
| type       | num  | 评论区类型代码           | 必要           | **[类型代码见表](readme.md#评论区类型代码)** |
| oid        | num  | 目标评论区id             | 必要           |                                              |
| rpid       | num  | 目标评论rpid             | 必要           |                                              |
| action     | num  | 操作代码                 | 非必要         | 默认为0<br />0：取消踩<br />1：点踩          |
| csrf       | str  | CSRF Token（位于cookie） | Cookie方式必要 |                                              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-111：csrf校验失败<br />-400：请求错误<br />-404：无此项<br />-509：请求过于频繁<br />12002：评论区已关闭<br />12004：禁止操作 赞或踩<br />12006：没有该评论<br />12009：评论主体的type不合法<br />12011：不合法的赞或踩<br />**（其他错误码有待补充）** |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

点踩视频`av243322853`下评论`rpid=3039053308`

```shell
curl 'https://api.bilibili.com/x/v2/reply/hate' \
--data-urlencode 'type=1' \
--data-urlencode 'oid=243322853' \
--data-urlencode 'rpid=3039053308' \
--data-urlencode 'action=1' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

</details>

## 删除评论

> https://api.bilibili.com/x/v2/reply/del

*请求方式：POST*

认证方式：Cookie（SESSDATA）或APP

只能删除自己的评论，或自己管理的评论区下的评论

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名     | 类型 | 内容                     | 必要性         | 备注                                         |
| ---------- | ---- | ------------------------ | -------------- | -------------------------------------------- |
| access_key | str  | APP登录Token             | APP方式必要    |                                              |
| type       | num  | 评论区类型代码           | 必要           | **[类型代码见表](readme.md#评论区类型代码)** |
| oid        | num  | 目标评论区id             | 必要           |                                              |
| rpid       | num  | 目标评论rpid             | 必要           |                                              |
| csrf       | str  | CSRF Token（位于cookie） | Cookie方式必要 |                                              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-111：csrf校验失败<br />-400：请求错误<br />-403：权限不足<br />-404：无此项<br />-509：请求过于频繁<br />12002：评论区已关闭<br />12009：评论主体的type不合法<br />12022：已经被删除了<br />**（其他错误码有待补充）** |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | **作用尚不明确**                                             |

**示例：**

删除`av243322853`下评论`rpid=3039053308`

```shell
curl 'https://api.bilibili.com/x/v2/reply/del' \
--data-urlencode 'type=1' \
--data-urlencode 'oid=243322853' \
--data-urlencode 'rpid=3039053308' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

</details>

## 置顶评论

> https://api.bilibili.com/x/v2/reply/top

*请求方式：POST*

认证方式：Cookie（SESSDATA）或APP

只能置顶自己管理的评论区中的一级评论

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名     | 类型 | 内容                     | 必要性         | 备注                                         |
| ---------- | ---- | ------------------------ | -------------- | -------------------------------------------- |
| access_key | str  | APP登录Token             | APP方式必要    |                                              |
| type       | num  | 评论区类型代码           | 必要           | **[类型代码见表](readme.md#评论区类型代码)** |
| oid        | num  | 目标评论区id             | 必要           |                                              |
| rpid       | num  | 目标评论rpid             | 必要           |                                              |
| action     | num  | 操作代码                 | 非必要         | 默认为0<br />0：取消置顶<br />1：设为置顶    |
| csrf       | str  | CSRF Token（位于cookie） | Cookie方式必要 |                                              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-111：csrf校验失败<br />-400：请求错误<br />-403：权限不足<br />-404：无此项<br />-509：请求过于频繁<br />12002：评论区已关闭<br />12006：没有该评论<br />12009：评论主体的type不合法<br />12029：已经有置顶评论<br />12030：不能置顶非一级评论<br />**（其他错误码有待补充）** |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

置顶视频`av243322853`下评论`rpid=2940645593`

```shell
curl 'https://api.bilibili.com/x/v2/reply/top' \
--data-urlencode 'type=1' \
--data-urlencode 'oid=243322853' \
--data-urlencode 'rpid=2940645593' \
--data-urlencode 'action=1' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

</details>

## 举报评论

> https://api.bilibili.com/x/v2/reply/report

*请求方式：POST*

认证方式：Cookie（SESSDATA）或APP

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名     | 类型 | 内容                     | 必要性         | 备注                                         |
| ---------- | ---- | ------------------------ | -------------- | -------------------------------------------- |
| access_key | str  | APP登录Token             | APP方式必要    |                                              |
| type       | num  | 评论区类型代码           | 必要           | **[类型代码见表](readme.md#评论区类型代码)** |
| oid        | num  | 目标评论区id             | 必要           |                                              |
| rpid       | num  | 目标评论rpid             | 必要           |                                              |
| reason     | num  | 举报类型                 | 必要           | **类型代码见下表**                           |
| content    | str  | 其他举报备注             | 非必要         | `reason=0`时有效                             |
| csrf       | str  | CSRF Token（位于cookie） | Cookie方式必要 |                                              |

举报类型`reason`：

| 代码 | 含义           |
| ---- | -------------- |
| 0    | 其他           |
| 1    | 垃圾广告       |
| 2    | 色情           |
| 3    | 刷屏           |
| 4    | 引战           |
| 5    | 剧透           |
| 6    | 政治           |
| 7    | 人身攻击       |
| 8    | 内容不相关     |
| 9    | 违法违规       |
| 10   | 低俗           |
| 11   | 非法网站       |
| 12   | 赌博诈骗       |
| 13   | 传播不实信息   |
| 14   | 怂恿教唆信息   |
| 15   | 侵犯隐私       |
| 16   | 抢楼           |
| 17   | 青少年不良信息 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-111：csrf校验失败<br />-400：请求错误<br />-403：权限不足<br />-404：无此项<br />-500：服务器错误<br />-509：请求过于频繁<br />12002：评论区已关闭<br />12006：没有该评论<br />12008：已经举报过了<br />12009：评论主体的type不合法<br />12019：举报过于频繁<br />12077：其他举报理由过长或过短<br />**（其他错误码有待补充）** |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

举报视频` av752881391 `下评论`rpid=3062537442`，理由是`引战`

```shell
curl 'https://api.bilibili.com/x/v2/reply/report' \
--data-urlencode 'type=1' \
--data-urlencode 'oid=752881391' \
--data-urlencode 'rpid=3062537442' \
--data-urlencode 'reason=4' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

</details>
