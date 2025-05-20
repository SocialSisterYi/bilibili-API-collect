# 笔记列表

## 查询稿件私有笔记

> https://api.bilibili.com/x/note/list/archive

*请求方式：GET*

认证方式：Cookie（SESSDATA）

该接口只能查询私有笔记，无法查询公开笔记

**url参数：**

| 参数名   | 类型 | 内容                     | 必要性 | 备注              |
| -------- | ---- | ------------------------ | ------ | ----------------- |
| oid      | num  | 目标id                   | 必要   |                   |
| oid_type | num  | 目标id类型               | 必要   | `0`视频(oid=avid) |
| csrf     | str  | CSRF Token（位于cookie） | 非必要 |                   |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        |                                                   |
| data    | obj  | 信息本体 |                                                   |

`data`对象：

| 字段    | 类型  | 内容     | 备注                                               |
| ------- | ----- | -------- | -------------------------------------------------- |
| noteIds | array | 笔记列表 | 无笔记则无此项<br />可能后续会允许视频添加多个笔记 |

`data`中的`noteIds`数组：

| 项   | 类型 | 内容   | 备注 |
| ---- | ---- | ------ | ---- |
| 0    | str  | 笔记id |      |

**示例：**

查询视频`av970322090`的笔记id

```shell
curl 'https://api.bilibili.com/x/note/list/archive' \
--data-urlencode 'oid=970322090' \
--data-urlencode 'oid_type=0' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code":0,
    "message":"0",
    "ttl":1,
    "data":{
        "noteIds":[
            "3809605586518023"
        ]
    }
}
```

</details>

## 查询用户私有笔记

> https://api.bilibili.com/x/note/list

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名  | 类型 | 内容         | 必要性      | 备注                                                    |
| ------- | ---- | ------------ | ----------- | ------------------------------------------------------- |
| ps      | num  | 每页项数     | 必要        |                                                 |
| pn      | num  | 页码         | 必要        |                                                  |
| csrf    | str  | CSRF Token（位于cookie） | 非必要   |                                                |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                |
| ------- | ---- | -------- | --------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-101：账号未登录   |
| message | str  | 错误信息 | 默认为0                                             |
| ttl     | num  | 1        |                                                     |
| data    | obj  | 信息本体 |                                                     |

`data`对象：

| 字段       | 类型  | 内容     | 备注         |
| ---------- | ----- | -------- | ------------ |
| list       | array | 明细列表 |              |
| page       | obj   | 页面信息 |              |

`data`中的`list`数组：

| 项   | 类型 | 内容        | 备注             |
| ---- | ---- | ----------- | ---------------- |
| 0    | obj  | 笔记1       |                  |
| n    | obj  | 笔记（n+1） | 按照创建顺序排列 |
| ……   | obj  | ……          | ……               |

`list`中的对象：

| 字段                 | 类型 | 内容         | 备注                      |
| -------------------- | ---- | ------------ | ------------------------- |
| title                | str  | 笔记标题     |                           |
| summary              | str  | 笔记预览文本 |                           |
| mtime                | str  | 提交时间     | YYYY-MM-DD hh:mm          |
| arc                  | obj  | 视频信息     |                           |
| note_id              | num  | 笔记id       |                           |
| audit_status         | num  | 0            | 作用尚不明确              |
| web_url              | str  | 笔记h5页url  |                           |
| note_id_str          | str  | 笔记id str   |                           |
| message              | str  | 更新信息     | "更新于 YYYY-MM-DD hh:mm" |
| forbid_note_entrance | bool | (?)          |                           |
| likes                | num  | 点赞数       |                           |
| has_like             | bool | 是否点赞     |                           |

`list`中的`arc`中的对象：

| 字段   | 类型 | 内容         | 备注                   |
| ------ | ---- | ------------ | ---------------------- |
| oid | num | 目标id | |
| bvid   | str  | 稿件bvid     |                        |
| pic    | str  | 稿件封面图片url |                     |
| desc   | str  | 视频简介     |                        |
| status | num  | 0            |                        |
| oid_type | num | 目标id类型 | `0`视频(oid=avid) |
| aid    | num  | 稿件avid     |                        |

`data`中的`page`对象：

| 字段   | 类型 | 内容         | 备注                 |
| ------ | ---- | ------------ | -------------------- |
| total  | num  | 笔记总数     |                      |
| size   | num  | 每页项数     |                      |
| num    | num  | 页码         |                      |

**示例：**

```shell
curl 'https://api.bilibili.com/x/note/list' \
--data-urlencode 'ps=10' \
--data-urlencode 'pn=1'
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
        "list": [
            {
                "title": "2022哔哩哔哩拜年纪",
                "summary": " ...",
                "mtime": "2022-02-16 16:46",
                "arc": {
                    "oid": 338677252,
                    "bvid": "BV1fR4y1T7aV",
                    "pic": "http://i2.hdslb.com/bfs/archive/1e683a5363f35aa0a65419dbf145177099e38f90.jpg",
                    "desc": "愿大家看的开心！新年快乐，虎年大吉，欧气十足，万事顺意！ヾ(≧▽≦*)o",
                    "status": 0,
                    "oid_type": 0,
                    "aid": 338677252
                },
                "note_id": 24508729145690110,
                "audit_status": 0,
                "web_url": "https://www.bilibili.com/h5/note-app?oid=338677252&oid_type=0&pagefrom=fullpage&navhide=1&-Bct.statusbar.mode=0",
                "note_id_str": "24508729145690112",
                "message": "更新于 2022-02-16 16:46",
                "forbid_note_entrance": false,
                "likes": 0,
                "has_like": false
            }
        ],
        "page": {
            "total": 1,
            "size": 10,
            "num": 1
        }
    }
}
```

</details>

## 查询稿件公开笔记

> https://api.bilibili.com/x/note/publish/list/archive

*请求方式：GET*

**url参数：**

| 参数名   | 类型 | 内容       | 必要性 | 备注              |
| -------- | ---- | ---------- | ------ | ----------------- |
| oid      | num  | 目标id     | 必要   |                   |
| oid_type | num  | 目标id类型 | 必要   | `0`视频(oid=avid) |
| ps       | num  | 每页项数   | 必要   |                   |
| pn       | num  | 页码       | 必要   |                   |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        |                                                   |
| data    | obj  | 信息本体 |                                                   |

`data`对象：

| 字段             | 类型  | 内容         | 备注 |
| ---------------- | ----- | ------------ | ---- |
| list             | array | 公开笔记列表 |      |
| page             | obj   | 页面信息     |      |
| show_public_note | bool  |              |      |
| message          | str   |              |      |

`data`中的`list`数组：

| 项   | 类型 | 内容        | 备注             |
| ---- | ---- | ----------- | ---------------- |
| 0    | obj  | 笔记1       |                  |
| n    | obj  | 笔记（n+1） | 按照创建顺序排列 |
| ……   | obj  | ……          | ……               |

`list`中的对象：

| 字段     | 类型 | 内容                   | 备注                      |
| -------- | ---- | ---------------------- | ------------------------- |
| cvid     | num  | 公开笔记对应的专栏cvid |                           |
| title    | str  | 笔记标题               |                           |
| summary  | str  | 笔记预览               |                           |
| pubtime  | str  | 发布时间               | YYYY-MM-DD hh:mm          |
| web_url  | str  | 笔记h5页url            |                           |
| message  | str  | 更新信息               | "更新于 YYYY-MM-DD hh:mm" |
| author   | obj  | 作者信息               |                           |
| likes    | num  | 点赞数                 |                           |
| has_like | bool | 是否点赞               | 需要登录(Cookie)          |

`list`中的对象中的`author`对象：

| 字段     | 类型 | 内容       | 备注 |
| -------- | ---- | ---------- | ---- |
| mid      | num  | 用户mid    |      |
| name     | str  | 昵称       |      |
| face     | str  | 头像url    |      |
| level    | num  | 用户等级   |      |
| vip_info | obj  | 会员信息   |      |
| pendant  | obj  | 头像框信息 |      |

**示例：**

查询视频`av338677252`的公开笔记列表

```shell
curl 'https://api.bilibili.com/x/note/publish/list/archive' \
--data-urlencode 'oid=338677252' \
--data-urlencode 'oid_type=0' \
--data-urlencode 'ps=10' \
--data-urlencode 'pn=1'
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
        "list": [
            {
                "cvid": 15160286,
                "title": "2022哔哩哔哩拜年纪",
                "summary": "我决定再重新做一个系列，叫做影评系列 那么我们这一次是影系列的第n期 我也不知道是多少期，到时候回去统计一下 今天的影评是写，2022年哔哩哔哩拜年纪 【...",
                "pubtime": "2022-02-07 23:44",
                "web_url": "https://www.bilibili.com/h5/note-app/view?cvid=15160286&pagefrom=ugcvideo",
                "message": "更新于 2022-02-07 23:44",
                "author": {
                    "mid": 523870870,
                    "name": "夜达星xxxxxxx",
                    "face": "http://i1.hdslb.com/bfs/face/2cdfd277e63b6bb1f400ed616b5caf0a04196f28.jpg",
                    "level": 3,
                    "vip_info": {
                        "type": 0,
                        "status": 0,
                        "due_date": 0,
                        "vip_pay_type": 0,
                        "theme_type": 0,
                        "label": {
                            "path": "",
                            "text": "",
                            "label_theme": "",
                            "text_color": "",
                            "bg_style": 0,
                            "bg_color": "",
                            "border_color": ""
                        },
                        "avatar_subscript": 0,
                        "nickname_color": "",
                        "role": 0,
                        "avatar_subscript_url": ""
                    },
                    "pendant": {
                        "pid": 0,
                        "name": "",
                        "image": "",
                        "expire": 0,
                        "image_enhance": "",
                        "image_enhance_frame": ""
                    }
                },
                "likes": 7,
                "has_like": false
            },
            {
                "cvid": 15086217,
                "title": "2022哔哩哔哩拜年纪",
                "summary": "节目表，多图预警，方便各位时间戳跳转……  01:20 New Day   [图片]   06:32  重返哔哩楼1  [图片]    11:06  嗨，...",
                "pubtime": "2022-02-01 20:07",
                "web_url": "https://www.bilibili.com/h5/note-app/view?cvid=15086217&pagefrom=ugcvideo",
                "message": "更新于 2022-02-01 20:07",
                "author": {
                    "mid": 3810985,
                    "name": "Remレム22",
                    "face": "http://i1.hdslb.com/bfs/face/4cce970eb1b9fb8b322d49133a11caa630178728.jpg",
                    "level": 6,
                    "vip_info": {
                        "type": 2,
                        "status": 1,
                        "due_date": 1694880000000,
                        "vip_pay_type": 1,
                        "theme_type": 0,
                        "label": {
                            "path": "",
                            "text": "年度大会员",
                            "label_theme": "annual_vip",
                            "text_color": "#FFFFFF",
                            "bg_style": 1,
                            "bg_color": "#FB7299",
                            "border_color": ""
                        },
                        "avatar_subscript": 1,
                        "nickname_color": "#FB7299",
                        "role": 3,
                        "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png"
                    },
                    "pendant": {
                        "pid": 0,
                        "name": "",
                        "image": "",
                        "expire": 0,
                        "image_enhance": "",
                        "image_enhance_frame": ""
                    }
                },
                "likes": 22,
                "has_like": false
            },
            {
                "cvid": 15080841,
                "title": "2022哔哩哔哩拜年纪",
                "summary": "2022哔哩哔哩拜年纪从厨师的角度开始了故事，而厨师象征着每个人，每一道菜都是每个厨师用汗水耕耘出来的，并且在主线故事中穿插这不同的小故事，代表了近几年生...",
                "pubtime": "2022-02-01 10:10",
                "web_url": "https://www.bilibili.com/h5/note-app/view?cvid=15080841&pagefrom=ugcvideo",
                "message": "更新于 2022-02-01 10:10",
                "author": {
                    "mid": 482114483,
                    "name": "沐曦mornal",
                    "face": "http://i2.hdslb.com/bfs/face/cf1ef9c2045e317dfe6dbe8659b6f7a69c7572d5.jpg",
                    "level": 4,
                    "vip_info": {
                        "type": 1,
                        "status": 1,
                        "due_date": 1646755200000,
                        "vip_pay_type": 1,
                        "theme_type": 0,
                        "label": {
                            "path": "",
                            "text": "大会员",
                            "label_theme": "vip",
                            "text_color": "#FFFFFF",
                            "bg_style": 1,
                            "bg_color": "#FB7299",
                            "border_color": ""
                        },
                        "avatar_subscript": 1,
                        "nickname_color": "",
                        "role": 1,
                        "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png"
                    },
                    "pendant": {
                        "pid": 0,
                        "name": "",
                        "image": "",
                        "expire": 0,
                        "image_enhance": "",
                        "image_enhance_frame": ""
                    }
                },
                "likes": 7,
                "has_like": false
            },
            {
                "cvid": 15080246,
                "title": "2022哔哩哔哩拜年纪",
                "summary": "niumniumnium~~~33是我的菜了！ 这次的跨年纪呢确实不同于以往。我发现现代技术确实给类似的活动提供了平台与支持，但是不可否认的是bilibi...",
                "pubtime": "2022-02-01 08:59",
                "web_url": "https://www.bilibili.com/h5/note-app/view?cvid=15080246&pagefrom=ugcvideo",
                "message": "更新于 2022-02-01 08:59",
                "author": {
                    "mid": 1049943541,
                    "name": "吃瓜的DINGBALL",
                    "face": "http://i1.hdslb.com/bfs/face/93e7a3826586338e15e5703f9d49bb3bbd0adfa5.jpg",
                    "level": 2,
                    "vip_info": {
                        "type": 1,
                        "status": 0,
                        "due_date": 1641744000000,
                        "vip_pay_type": 0,
                        "theme_type": 0,
                        "label": {
                            "path": "",
                            "text": "",
                            "label_theme": "",
                            "text_color": "",
                            "bg_style": 0,
                            "bg_color": "",
                            "border_color": ""
                        },
                        "avatar_subscript": 0,
                        "nickname_color": "",
                        "role": 0,
                        "avatar_subscript_url": ""
                    },
                    "pendant": {
                        "pid": 0,
                        "name": "",
                        "image": "",
                        "expire": 0,
                        "image_enhance": "",
                        "image_enhance_frame": ""
                    }
                },
                "likes": 10,
                "has_like": false
            },
            {
                "cvid": 15077197,
                "title": "2022哔哩哔哩拜年纪",
                "summary": "23333333333333333333333333333333333333333333333333333333333333333333333333333...",
                "pubtime": "2022-01-31 22:53",
                "web_url": "https://www.bilibili.com/h5/note-app/view?cvid=15077197&pagefrom=ugcvideo",
                "message": "更新于 2022-01-31 22:53",
                "author": {
                    "mid": 433136442,
                    "name": "KiBi_3",
                    "face": "http://i0.hdslb.com/bfs/face/4c11d1419316f14b8b0f5c146d0cd34627955244.jpg",
                    "level": 2,
                    "vip_info": {
                        "type": 0,
                        "status": 0,
                        "due_date": 0,
                        "vip_pay_type": 0,
                        "theme_type": 0,
                        "label": {
                            "path": "",
                            "text": "",
                            "label_theme": "",
                            "text_color": "",
                            "bg_style": 0,
                            "bg_color": "",
                            "border_color": ""
                        },
                        "avatar_subscript": 0,
                        "nickname_color": "",
                        "role": 0,
                        "avatar_subscript_url": ""
                    },
                    "pendant": {
                        "pid": 0,
                        "name": "",
                        "image": "",
                        "expire": 0,
                        "image_enhance": "",
                        "image_enhance_frame": ""
                    }
                },
                "likes": 2,
                "has_like": false
            },
            {
                "cvid": 15077019,
                "title": "2022哔哩哔哩拜年纪",
                "summary": "2022加油吖！~~~~~~~~~~~~~~~~~~~~~2022加油吖！2022加油吖！2022加油吖！2022加油吖！2022加油吖！2022加油吖！...",
                "pubtime": "2022-01-31 22:36",
                "web_url": "https://www.bilibili.com/h5/note-app/view?cvid=15077019&pagefrom=ugcvideo",
                "message": "更新于 2022-01-31 22:36",
                "author": {
                    "mid": 11283554,
                    "name": "zhen_____",
                    "face": "http://i0.hdslb.com/bfs/baselabs/381fcc3865daf85bd6a1ddc4b6dfbd11ba937dc9.jpg",
                    "level": 6,
                    "vip_info": {
                        "type": 2,
                        "status": 1,
                        "due_date": 1730736000000,
                        "vip_pay_type": 0,
                        "theme_type": 0,
                        "label": {
                            "path": "",
                            "text": "年度大会员",
                            "label_theme": "annual_vip",
                            "text_color": "#FFFFFF",
                            "bg_style": 1,
                            "bg_color": "#FB7299",
                            "border_color": ""
                        },
                        "avatar_subscript": 1,
                        "nickname_color": "#FB7299",
                        "role": 3,
                        "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png"
                    },
                    "pendant": {
                        "pid": 5459,
                        "name": "星座系列：巨蟹座",
                        "image": "http://i2.hdslb.com/bfs/garb/item/a6e5b6b36a4a6c00ca8881ecc837c2aa9ebcb53d.png",
                        "expire": 0,
                        "image_enhance": "http://i2.hdslb.com/bfs/garb/item/a6e5b6b36a4a6c00ca8881ecc837c2aa9ebcb53d.png",
                        "image_enhance_frame": ""
                    }
                },
                "likes": 5,
                "has_like": false
            }
        ],
        "page": {
            "total": 6,
            "size": 10,
            "num": 1
        },
        "show_public_note": true,
        "message": ""
    }
}
```

</details>

## 查询用户公开笔记

> https://api.bilibili.com/x/note/publish/list/user

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名 | 类型 | 内容                     | 必要性 | 备注 |
| ------ | ---- | ------------------------ | ------ | ---- |
| ps     | num  | 每页项数                 | 必要   |      |
| pn     | num  | 页码                     | 必要   |      |
| csrf   | str  | CSRF Token（位于cookie） | 非必要 |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        |                                                   |
| data    | obj  | 信息本体 |                                                   |

`data`对象：

| 字段 | 类型  | 内容     | 备注 |
| ---- | ----- | -------- | ---- |
| list | array | 明细列表 |      |
| page | obj   | 页面信息 |      |

`data`中的`list`数组：

| 项   | 类型 | 内容        | 备注             |
| ---- | ---- | ----------- | ---------------- |
| 0    | obj  | 笔记1       |                  |
| n    | obj  | 笔记（n+1） | 按照创建顺序排列 |
| ……   | obj  | ……          | ……               |

`data`中的`page`对象：

| 字段  | 类型 | 内容     | 备注 |
| ----- | ---- | -------- | ---- |
| total | num  | 笔记总数 |      |
| size  | num  | 每页项数 |      |
| num   | num  | 页码     |      |

**示例：**

```shell
curl 'https://api.bilibili.com/x/note/publish/list/user' \
--data-urlencode 'ps=10' \
--data-urlencode 'pn=1'
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
        "page": {
            "total": 0,
            "size": 10,
            "num": 1
        }
    }
}
```

</details>
