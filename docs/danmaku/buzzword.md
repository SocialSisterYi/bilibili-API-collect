# 名词解释

该功能用于解释和科普 B 站弹幕、评论等的专有名词及梗，展示其出处，并推荐相关站内内容

可使用页面 https://www.bilibili.com/blackboard/activity-joFQ0txEQd.html?type_id=4 查看名词列表

可使用页面 https://www.bilibili.com/blackboard/activity-WroMZNunfa.html?id=1 查看名词解释详情

## 拉取名词解释列表

> https://api.bilibili.com/x/v2/dm/buzzword/list

*请求方式：GET*

**url参数：**

| 参数名  | 类型 | 内容     | 必要性 | 备注                                           |
| ------- | ---- | -------- | ------ | ---------------------------------------------- |
| type_id | num  | 名词类型 | 必要   | 如：4代表“哔哩哔哩热词图鉴”<br />5代表“语言类” |
| pn      | num  | 页码     | 非必要 | 默认为1                                        |
| ps      | num  | 每页项数 | 非必要 | 默认为20                                       |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        |                             |
| data    | obj  | 数据本体 |                             |

`data`对象：

| 字段      | 类型  | 内容     | 备注 |
| --------- | ----- | -------- | ---- |
| type      | obj   | 类型信息 |      |
| buzzwords | array | 词语列表 |      |
| page      | obj   | 页面信息 |      |

`data`中的`type`对象：

| 字段        | 类型 | 内容     | 备注   |
| ----------- | ---- | -------- | ------ |
| id          | num  | 类型 id  |        |
| name        | str  | 类型名称 |        |
| name_pinyin | obj  | 拼音信息 | 见副表 |

`data`中的`buzzwords`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | obj  | 名词条目 1      |      |
| n    | obj  | 名词条目（n+1） |      |
| ……   | obj  | ……              | ……   |

`buzzwords`数组中的对象：

| 字段        | 类型 | 内容         | 备注                                      |
| ----------- | ---- | ------------ | ----------------------------------------- |
| id          | num  | 名词 id      | 用于[查询名词解释详情](#查询名词解释详情) |
| name        | str  | 名词         |                                           |
| name_pinyin | obj  | 拼音信息     | 见副表                                    |
| picture     | str  | 名词图片 url |                                           |

`data`中的`page`对象：

| 字段  | 类型 | 内容     | 备注 |
| ----- | ---- | -------- | ---- |
| num   | num  | 当前页码 |      |
| size  | num  | 每页项数 |      |
| total | num  | 总计项数 |      |
| cnt   | num  | (?)      |      |

副表：拼音`name_pinyin`对象：

| 字段           | 类型 | 内容     | 备注 |
| -------------- | ---- | -------- | ---- |
| 对应单个汉字 1 | str  | 拼音字串 |      |
| 对应单个汉字 n | str  | 拼音字串 |      |
| ……             | str  | ……       | ……   |

**示例：**

拉取对应`哔哩哔哩热词图鉴`的名词列表，以20项为一页拉取第1页

```bash
curl -G 'https://api.bilibili.com/x/v2/dm/buzzword/list' \
--data-urlencode 'type_id=4' \
--data-urlencode 'ps=10' \
--data-urlencode 'pn=1'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "type": {
            "id": 4,
            "name": "哔哩哔哩热词图鉴",
            "name_pinyin": {
                "哔": "bì",
                "哩": "lī",
                "图": "tú",
                "热": "rè",
                "词": "cí",
                "鉴": "jiàn"
            },
            "level": 0
        },
        "buzzwords": [
            {
                "id": 145,
                "name": "麦乐鸡侠",
                "name_pinyin": {
                    "乐": "lè",
                    "侠": "xiá",
                    "鸡": "jī",
                    "麦": "mài"
                },
                "picture": "https://i0.hdslb.com/bfs/archive/1cdec1ff86733a38c1a9ff824dde6d4121955aee.png"
            },
            {
                "id": 146,
                "name": "金钱豹",
                "name_pinyin": {
                    "豹": "bào",
                    "金": "jīn",
                    "钱": "qián"
                },
                "picture": "https://i0.hdslb.com/bfs/archive/3d492f4c01da7d15073d3175871e14ed56f0f78a.png"
            },
            {
                "id": 11,
                "name": "通辽可汗",
                "name_pinyin": {
                    "可": "kě",
                    "汗": "hàn",
                    "辽": "liáo",
                    "通": "tōng"
                },
                "picture": "https://i0.hdslb.com/bfs/archive/ca332fb5f9da48497298cf26fe07b1f061e53a0b.jpg"
            },
            {
                "id": 123,
                "name": "资本马桶搋",
                "name_pinyin": {
                    "搋": "chuāi",
                    "本": "běn",
                    "桶": "tǒng",
                    "资": "zī",
                    "马": "mǎ"
                },
                "picture": "https://i0.hdslb.com/bfs/archive/aaf33dced1941af0946f37c62f4b48fcaba9c9a2.jpg"
            },
            {
                "id": 133,
                "name": "马了顶大",
                "name_pinyin": {
                    "了": "le",
                    "大": "dà",
                    "顶": "dǐng",
                    "马": "mǎ"
                },
                "picture": "https://i0.hdslb.com/bfs/archive/9653bd7f8d2c804aceb8043ebd5c8360a93e26c0.png"
            },
            {
                "id": 9,
                "name": "退钱",
                "name_pinyin": {
                    "退": "tuì",
                    "钱": "qián"
                },
                "picture": "https://i0.hdslb.com/bfs/archive/2540db0bc94792b1f5be75e19aa05d33666e3036.jpg"
            },
            {
                "id": 141,
                "name": "森林冰火人",
                "name_pinyin": {
                    "人": "rén",
                    "冰": "bīng",
                    "林": "lín",
                    "森": "sēn",
                    "火": "huǒ"
                },
                "picture": "https://i0.hdslb.com/bfs/archive/bc5ca101313d4db223c395d64779e76eb3482d60.jpg"
            },
            {
                "id": 22,
                "name": "学霸题",
                "name_pinyin": {
                    "学": "xué",
                    "霸": "bà",
                    "题": "tí"
                },
                "picture": "https://i0.hdslb.com/bfs/archive/a67a0a57ec48beb8c8dcc9f26c7bb66cd0ed5da7.jpg"
            },
            {
                "id": 10,
                "name": "张三",
                "name_pinyin": {
                    "三": "sān",
                    "张": "zhāng"
                },
                "picture": "https://i0.hdslb.com/bfs/archive/f4dac6fdc5c58639b79ae87385e9b9f7eae3b263.png"
            },
            {
                "id": 5,
                "name": "饮茶先啦",
                "name_pinyin": {
                    "先": "xiān",
                    "啦": "la",
                    "茶": "chá",
                    "饮": "yǐn"
                },
                "picture": "https://i0.hdslb.com/bfs/archive/4c90ad207f0041e2dccd586827028aea50c2dc7d.jpg"
            }
        ],
        "page": {
            "num": 1,
            "size": 10,
            "total": 143,
            "cnt": 0
        }
    }
}
```

</details>

## 查询名词解释详情

> https://api.bilibili.com/x/v2/dm/buzzword/detail

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容   | 必要性 | 备注                             |
| ------ | ---- | ------ | ------ | -------------------------------- |
| id     | num  | 名词id | 必要   | 如：1代表“kksk”<br />2代表“打脸” |

**json回复：**

根对象：

| 字段    | 类型                              | 内容     | 备注                                                |
| ------- | --------------------------------- | -------- | --------------------------------------------------- |
| code    | num                               | 返回值   | 0：成功<br />-400：请求错误<br />-404：不存在该名词 |
| message | str                               | 错误信息 | 默认为0                                             |
| ttl     | num                               | 1        |                                                     |
| data    | 有数据时：obj<br />无数据时：null | 数据本体 |                                                     |

`data`对象：

| 字段              | 类型                            | 内容                 | 备注                          |
| ----------------- | ------------------------------- | -------------------- | ----------------------------- |
| id                | num                             | 名词id               |                               |
| name              | str                             | 名词                 |                               |
| description       | str                             | 名词解释             |                               |
| picture           | str                             | 名词图片 url         |                               |
| types             | array                           | 父分类列表           | 该名词可能隶属多个父分类      |
| related_words     | array                           | 近义词/相关词        |                               |
| uppers            | 有数据：array<br />无数据：null | 相关 UP 列表         | 该名词(梗)出处                |
| related_ugc       | 有数据：array<br />无数据：null | 相关 ucg 视频列表    | 该名词(梗)出处                |
| related_ogv       | 有数据：array<br />无数据：null | 相关 pgc 视频列表    | 该名词(梗)出处                |
| guides            | obj                             | 推荐创作信息         |                               |
| related_buzzwords | array                           | 推荐名词列表         |                               |
| topic             | obj                             | 关联话题信息         |                               |
| show_dynamic      | bool                            | 是否展示话题动态聚合 | `true`展示<br />`false`不展示 |

`data`中的`types`数组：

| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| 0    | obj  | 父分类 1      |      |
| n    | obj  | 父分类（n+1） |      |
| ……   | obj  | ……            | ……   |

`types`数组中的对象：

| 字段        | 类型 | 内容     | 备注 |
| ----------- | ---- | -------- | ---- |
| id          | num  | 类型 id  |      |
| name        | str  | 类型名称 |      |
| name_pinyin | null |          |      |
| level       | num  | 权重？   |      |

`data`中的`related_words`数组：

| 项   | 类型 | 内容                 | 备注 |
| ---- | ---- | -------------------- | ---- |
| 0    | str  | 近义词/相关词1       |      |
| n    | str  | 近义词/相关词（n+1） |      |
| ……   | str  | ……                   | ……   |

`data`中的`uppers`数组：

| 项   | 类型 | 内容           | 备注 |
| ---- | ---- | -------------- | ---- |
| 0    | obj  | 相关 UP 1      |      |
| n    | obj  | 相关 UP（n+1） |      |
| ……   | obj  | ……             | ……   |

`uppers`数组中的对象：

| 字段       | 类型 | 内容          | 备注                                                         |
| ---------- | ---- | ------------- | ------------------------------------------------------------ |
| id         | num  | UP 主 mid     |                                                              |
| recommend  | str  |               |                                                              |
| name       | str  | UP 主昵称     |                                                              |
| face       | str  | UP 主头像 url |                                                              |
| official   | obj  | UP 主认证信息 |                                                              |
| followed   | bool | 是否关注      | 需要登录(Cookie 或 APP)<br />`true`已关注<br />`false`未关注 |
| fans_count | num  | 粉丝数        |                                                              |

`data`中的`related_ugc`数组：

| 项   | 类型 | 内容                 | 备注 |
| ---- | ---- | -------------------- | ---- |
| 0    | obj  | 相关 ucg 视频 1      |      |
| n    | obj  | 相关 ucg 视频（n+1） |      |
| ……   | obj  | ……                   | ……   |

`related_ugc`数组中的对象：

| 字段     | 类型 | 内容         | 备注     |
| -------- | ---- | ------------ | -------- |
| aid      | num  | 稿件 avid    |          |
| cid      | num  | 视频 cid     |          |
| name     | str  | 视频标题     |          |
| link     | str  | 空           |          |
| play     | num  | 播放数       |          |
| danmaku  | num  | 弹幕数       |          |
| duration | num  | 视频时长     | 单位为秒 |
| cover    | str  | 视频封面 url |          |

`data`中的`related_ogv`数组：

| 项   | 类型 | 内容                 | 备注 |
| ---- | ---- | -------------------- | ---- |
| 0    | obj  | 相关 pgc 视频 1      |      |
| n    | obj  | 相关 pgc 视频（n+1） |      |
| ……   | obj  | ……                   | ……   |

`related_ogv`数组中的对象：

| 字段        | 类型 | 内容         | 备注                                  |
| ----------- | ---- | ------------ | ------------------------------------- |
| season_id   | num  | 剧集 ssid    |                                       |
| name        | str  | 剧集标题     |                                       |
| play        | num  | 播放数       |                                       |
| followed    | num  | 追剧/番数    |                                       |
| is_followed | bool | 是否追剧/番  | `true`已追剧/番<br />`false`未追剧/番 |
| new_ep      | str  | 最新一集信息 |                                       |
| cover       | str  | 剧集封面 url |                                       |
| episodes    | null |              |                                       |
| follow_info | obj  |              |                                       |

`data`中的`guides`对象：

| 字段            | 类型  | 内容             | 备注 |
| --------------- | ----- | ---------------- | ---- |
| description     | str   | 创作推介文案     |      |
| contribute_tags | array | 创作跳转按钮信息 |      |

`guides`中的`contribute_tags`数组：

| 项   | 类型 | 内容                | 备注 |
| ---- | ---- | ------------------- | ---- |
| 0    | obj  | 创作跳转按钮 1      |      |
| n    | obj  | 创作跳转按钮（n+1） |      |
| ……   | obj  | ……                  | ……   |

`contribute_tags`数组中的对象：

| 字段  | 类型 | 内容     | 备注                       |
| ----- | ---- | -------- | -------------------------- |
| title | str  | 按钮文案 |                            |
| link  | str  | 跳转 uri | 跳转至必剪或客户端创作入口 |

`data`中的`related_buzzwords`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | obj  | 推荐名词 1      |      |
| n    | obj  | 推荐名词（n+1） |      |
| ……   | obj  | ……              | ……   |

`related_buzzwords`数组中的对象：

| 字段        | 类型 | 内容    | 备注                                      |
| ----------- | ---- | ------- | ----------------------------------------- |
| id          | num  | 名词 id | 用于[查询名词解释详情](#查询名词解释详情) |
| name        | str  | 名词    |                                           |
| name_pinyin | null |         |                                           |
| picture     | str  | 空      |                                           |

`data`中的`topic`对象：

| 字段       | 类型 | 内容         | 备注 |
| ---------- | ---- | ------------ | ---- |
| topic_id   | num  | 关联话题id   |      |
| topic_name | str  | 关联话题名称 |      |

**示例：**

查询名词`kksk`的详情

```bash
curl -G 'https://api.bilibili.com/x/v2/dm/buzzword/detail' \
--data-urlencode 'id=1'
```

<details>
<summary>查看响应示例：</summary>


```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "id": 1,
        "name": "kksk",
        "description": "该梗是日语“ここすき”罗马音的字母缩写，翻译为喜欢这里。一般作为赞扬认可的弹幕出现在视频画面中。由于在2017年随着以《恶魔人》为BGM和语音剪辑素材的《美洲豹人》系列作品的传播，让这个梗快速的通过弹幕流行开，并频繁出现在各类稿件经典画面中。",
        "picture": "https://i0.hdslb.com/bfs/archive/c269c9ca1b5eb730ee1d77aadd28e3165eaa4d6d.png",
        "types": [
            {
                "id": 4,
                "name": "哔哩哔哩热词图鉴",
                "name_pinyin": null,
                "level": 0
            },
            {
                "id": 5,
                "name": "语言类",
                "name_pinyin": null,
                "level": 0
            },
            {
                "id": 9,
                "name": "空耳",
                "name_pinyin": null,
                "level": 0
            }
        ],
        "related_words": [
            "恶魔人",
            "美洲豹人",
            "喜欢这里"
        ],
        "uppers": [
            {
                "id": 488450,
                "recommend": "",
                "name": "PXN1",
                "face": "http://i2.hdslb.com/bfs/face/96dd8cc4f2922bd81e5a938f6ad02b3e3041debe.jpg",
                "official": {
                    "role": 0,
                    "title": "",
                    "desc": "",
                    "type": -1
                },
                "followed": false,
                "fans_count": 1416
            }
        ],
        "related_ugc": [
            {
                "aid": 30056798,
                "cid": 52388183,
                "name": "恶 魔 人",
                "link": "",
                "play": 3434500,
                "danmaku": 8292,
                "duration": 188,
                "cover": "http://i0.hdslb.com/bfs/archive/f0433d2dacf4b3397a9390ab982cefd138dbf8c8.jpg"
            }
        ],
        "related_ogv": null,
        "guides": {
            "description": "使用同款热梗素材创作你的专属作品吧！添加热梗主题#kksk是什么梗#参与投稿，优质稿件会优先展示在哔哩哔哩热词图鉴相关推荐中哦！",
            "contribute_tags": [
                {
                    "title": "拍同款",
                    "link": "bilibili://uper/appTraffic?appScheme=bcut%3A%2F%2Fstudio%2Fmaterial_editor%2F%3Ftab_id%3D1%26sub_id%3D90160%26third_id%3D150281&appName=com.bilibili.studio&appID=1299589486"
                }
            ]
        },
        "related_buzzwords": null,
        "topic": {
            "topic_id": 7642,
            "topic_name": "kksk是什么梗"
        },
        "show_dynamic": false
    }
}
```

</details>
