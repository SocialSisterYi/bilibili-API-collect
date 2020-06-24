# 评论区操作

**本页所有操作均需登录（SESSDATA）**

使用该登录token进行评论用户识别与操作鉴权

## 发表评论

> http://api.bilibili.com/x/v2/reply/add

*方式：POST*

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名  | 类型 | 内容                | 必要性 | 备注                                                         |
| ------- | ---- | ------------------- | ------ | ------------------------------------------------------------ |
| type    | num  | 评论区类型代码      | 必要   | **类型代码见「[评论区明细](comment_list.md)」**              |
| oid     | num  | 目标评论区ID        | 必要   |                                                              |
| root    | num  | 根评论rpID          | 非必要 | 二级评论以上使用                                             |
| parent  | num  | 父评论rpID          | 非必要 | 二级评论同根评论ID<br />大于二级评论为要回复的评论ID         |
| message | str  | 发送评论内容        | 必要   | 最大1000字符<br />表情使用表情转义符                         |
| plat    | num  | 发送平台标识        | 非必要 | 1：web端<br />2：安卓客户端<br />3：ios客户端<br />4：wp客户端<br />默认为1 |
| csrf    | str  | cookies中的bili_jct | 必要   |                                                              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-111：csrf校验失败<br />-400：请求错误<br />-404：无此项<br />-509：请求过于频繁<br />12002：评论区已关闭<br />12006：没有该评论<br />12009：评论主体的type不合法<br />12016：评论内容包含敏感信息<br />12025：评论字数过多<br />12051：重复评论，请勿刷屏<br />**（其他错误码有待补充）** |
| message | str  | 错误信息 | <br />                                                       |
| ttl     | num  | 1        | **作用尚不明确**                                             |
| data    | obj  | 数据本体 |                                                              |

`data`对象：

| 字段           | 类型                          | 内容           | 备注                                                         |
| -------------- | ----------------------------- | -------------- | ------------------------------------------------------------ |
| success_action | num                           | 0              | **作用尚不明确**                                             |
| success_toast  | str                           | 状态文字       |                                                              |
| need_captcha   | bool                          | false          | **作用尚不明确**                                             |
| url            | str                           | 空             | **作用尚不明确**                                             |
| rpid           | num                           | 评论rpID       |                                                              |
| rpid_str       | str                           | 评论rpID       | 字串格式                                                     |
| dialog         | num                           | 回复对方rpID   | 若为一级评论则为0<br />若为二级评论则为该评论ID<br />大于二级评论为上一级评论ID |
| dialog_str     | str                           | 回复对方rpID   | 字串格式                                                     |
| root           | num                           | 根评论rpID     | 若为一级评论则为0<br />大于一级评论则为根评论ID              |
| root_str       | str                           | 根评论rpID     | 字串格式                                                     |
| parent         | num                           | 回复父评论rpID | 若为一级评论则为0<br />若为二级评论则为根评论ID<br />大于二级评论为上一级评论ID |
| parent_str     | str                           | 回复父评论rpID | 字串格式                                                     |
| emote          | obj                           | 表情转义符信息 | 无表情时无此项<br />**见「[评论区明细](comment_list.md#附表-评论条目对象)」的附表** |
| reply          | 有效时：obj<br />无效时：null |                | **见「[评论区明细](comment_list.md#附表-评论条目对象)」的附表** |

**示例：**

给视频`av243322853`发送内容为`测试test[泠鸢yousa_awsl]`的评论（带有表情转义符），平台标识为1（web端）

curl -b "SESSDATA=xxx" -d "type=1&oid=243322853&message=%E6%B5%8B%E8%AF%95test%5B%E6%B3%A0%E9%B8%A2yousa_awsl%5D&plat=1&csrf=xxx" "http://api.bilibili.com/x/v2/reply/add"

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



## 点赞评论

> http://api.bilibili.com/x/v2/reply/action

*方式：POST*

点赞成功后会同时消去该评论的点踩

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                | 必要性 | 备注                                            |
| ------ | ---- | ------------------- | ------ | ----------------------------------------------- |
| type   | num  | 评论区类型代码      | 必要   | **类型代码见「[评论区明细](comment_list.md)」** |
| oid    | num  | 目标评论区ID        | 必要   |                                                 |
| rpid   | num  | 目标评论rpID        | 必要   |                                                 |
| action | num  | 操作代码            | 非必要 | 默认为0<br />0：取消赞<br />1：点赞             |
| csrf   | str  | cookies中的bili_jct | 必要   |                                                 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-111：csrf校验失败<br />-400：请求错误<br />-404：无此项<br />-509：请求过于频繁<br />12002：评论区已关闭<br />12006：没有该评论<br />12009：评论主体的type不合法<br />12011：不合法的赞或踩<br />**（其他错误码有待补充）** |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | **作用尚不明确**                                             |

**示例：**

点赞视频`av243322853`下评论`rpID=3039053308`

curl -b "SESSDATA=xxx" -d "type=1&oid=243322853&rpid=3039053308&action=1&csrf=xxx" "http://api.bilibili.com/x/v2/reply/action"

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```



## 点踩评论

> http://api.bilibili.com/x/v2/reply/hate

*方式：POST*

点踩成功后会同时消去该评论的点赞

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                | 必要性 | 备注                                            |
| ------ | ---- | ------------------- | ------ | ----------------------------------------------- |
| type   | num  | 评论区类型代码      | 必要   | **类型代码见「[评论区明细](comment_list.md)」** |
| oid    | num  | 目标评论区ID        | 必要   |                                                 |
| rpid   | num  | 目标评论rpID        | 必要   |                                                 |
| action | num  | 操作代码            | 非必要 | 默认为0<br />0：取消踩<br />1：点踩             |
| csrf   | str  | cookies中的bili_jct | 必要   |                                                 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-111：csrf校验失败<br />-400：请求错误<br />-404：无此项<br />-509：请求过于频繁<br />12002：评论区已关闭<br />12006：没有该评论<br />12009：评论主体的type不合法<br />12011：不合法的赞或踩<br />**（其他错误码有待补充）** |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | **作用尚不明确**                                             |

**示例：**

点踩视频`av243322853`下评论`rpID=3039053308`

curl -b "SESSDATA=xxx" -d "type=1&oid=243322853&rpid=3039053308&action=1&csrf=xxx" "http://api.bilibili.com/x/v2/reply/hate"

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```



## 删除评论

> http://api.bilibili.com/x/v2/reply/del

*方式：POST*

只能删除自己的评论，或自己管理的评论区下的评论

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                | 必要性 | 备注                                            |
| ------ | ---- | ------------------- | ------ | ----------------------------------------------- |
| type   | num  | 评论区类型代码      | 必要   | **类型代码见「[评论区明细](comment_list.md)」** |
| oid    | num  | 目标评论区ID        | 必要   |                                                 |
| rpid   | num  | 目标评论rpID        | 必要   |                                                 |
| csrf   | str  | cookies中的bili_jct | 必要   |                                                 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-111：csrf校验失败<br />-400：请求错误<br />-403：权限不足<br />-404：无此项<br />-509：请求过于频繁<br />12002：评论区已关闭<br />12009：评论主体的type不合法<br />12022：已经被删除了<br />**（其他错误码有待补充）** |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | **作用尚不明确**                                             |

**示例：**

删除`av243322853`下评论`rpID=3039053308`

curl -b "SESSDATA=xxx" -d "type=1&oid=243322853&rpid=3039053308&csrf=xxx" "http://api.bilibili.com/x/v2/reply/del"

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```



## 置顶评论

> http://api.bilibili.com/x/v2/reply/top

*方式：POST*

只能置顶自己管理的评论区中的一级评论

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                | 必要性 | 备注                                            |
| ------ | ---- | ------------------- | ------ | ----------------------------------------------- |
| type   | num  | 评论区类型代码      | 必要   | **类型代码见「[评论区明细](comment_list.md)」** |
| oid    | num  | 目标评论区ID        | 必要   |                                                 |
| rpid   | num  | 目标评论rpID        | 必要   |                                                 |
| action | num  | 操作代码            | 非必要 | 默认为0<br />0：取消置顶<br />1：设为置顶       |
| csrf   | str  | cookies中的bili_jct | 必要   |                                                 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-111：csrf校验失败<br />-400：请求错误<br />-403：权限不足<br />-404：无此项<br />-509：请求过于频繁<br />12002：评论区已关闭<br />12006：没有该评论<br />12009：评论主体的type不合法<br />12029：已经有置顶评论<br />12030：不能置顶非一级评论<br />**（其他错误码有待补充）** |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | **作用尚不明确**                                             |

**示例：**

置顶视频`av243322853`下评论`rpID=2940645593`

curl -b "SESSDATA=xxx" -d "type=1&oid=243322853&rpid=2940645593&action=1&csrf=xxx" "http://api.bilibili.com/x/v2/reply/top"

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```



## 举报评论

> http://api.bilibili.com/x/v2/reply/report

*方式：POST*

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名  | 类型 | 内容                | 必要性 | 备注                                                         |
| ------- | ---- | ------------------- | ------ | ------------------------------------------------------------ |
| type    | num  | 评论区类型代码      | 必要   | **类型代码见「[评论区明细](comment_list.md)」**              |
| oid     | num  | 目标评论区ID        | 必要   |                                                              |
| rpid    | num  | 目标评论rpID        | 必要   |                                                              |
| reason  | num  | 举报类型            | 必要   | 0：自定义备注<br />1：垃圾广告<br />2：色情<br />4：引战<br />5：剧透<br />7：人身攻击<br />8：内容不相关<br />9：违法违规<br />10：低俗<br />12：赌博诈骗<br />15：侵犯隐私<br />16：抢楼<br />17：青少年不良信息 |
| content | str  | 自定义举报备注      | 非必要 | `reason=0`时有效                                             |
| csrf    | str  | cookies中的bili_jct | 必要   |                                                              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-111：csrf校验失败<br />-400：请求错误<br />-403：权限不足<br />-404：无此项<br />-509：请求过于频繁<br />12002：评论区已关闭<br />12006：没有该评论<br />12008：已经举报过了<br />12009：评论主体的type不合法<br />12019：举报过于频繁<br />**（其他错误码有待补充）** |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | **作用尚不明确**                                             |

**示例：**

举报视频` av752881391 `下评论`rpID=3062537442`，理由是`引战`

curl -b "SESSDATA=xxx" -d "type=1&oid=752881391&rpid=3062537442&reason=4&csrf=xxx" "http://api.bilibili.com/x/v2/reply/report"

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

