# 表情列表

## 获取我的表情列表

> http://api.bilibili.com/x/emote/user/panel/web

*方式：GET*

使用登录（SESSDATA）进行会员专属及已购买表情包的分发，否则为免费表情包

**url参数：**

| 参数名   | 类型 | 内容     | 必要性 | 备注                                                       |
| -------- | ---- | -------- | ------ | ---------------------------------------------------------- |
| business | str  | 使用场景 | 必要   | 用于选择不同的表情包<br />reply：评论区<br />dynamic：动态 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        | **作用尚不明确**            |
| data    | obj  | 信息本体 |                             |

`data`对象：

| 字段     | 类型  | 内容   | 备注 |
| -------- | ----- | ------ | ---- |
| packages | array | 表情包 |      |

`data`中的`packages`数组：

| 项   | 类型 | 内容        | 备注 |
| ---- | ---- | ----------- | ---- |
| 0    | obj  | 表情包1     |      |
| n    | obj  | 表情包(n+1) |      |
| ……   | obj  | ……          | ……   |

`packages`数组中的对象：

| 字段  | 类型  | 内容              | 备注                                                     |
| ----- | ----- | ----------------- | -------------------------------------------------------- |
| id    | num   | 表情包ID          |                                                          |
| text  | str   | 表情包名称        |                                                          |
| url   | str   | 表情包标志图片url |                                                          |
| mtime | num   | 创建时间          | 时间戳                                                   |
| type  | num   | 表情包类型        | 1：普通<br />2：会员专属<br />3：购买所得<br />4：颜文字 |
| attr  | num   | ？？？            | **作用尚不明确**                                         |
| meta  | obj   | 属性信息          |                                                          |
| emote | array | 表情列表          |                                                          |

`packages`数组中的对象中的`meta`对象：

| 字段     | 类型 | 内容            | 备注             |
| -------- | ---- | --------------- | ---------------- |
| size     | num  | 表情尺寸信息    | 1：小<br />2：大 |
| item_id  | num  | 购买物品ID      |                  |
| item_url | num  | 购买物品页面url | 无则无此项       |

`packages`数组中的对象中的`emote`数组：

| 项   | 类型 | 内容      | 备注 |
| ---- | ---- | --------- | ---- |
| 0    | obj  | 表情1     |      |
| n    | obj  | 表情(n+1) |      |
| ……   | obj  | ……        | ……   |

`emote`数组中的对象：

| 字段       | 类型 | 内容        | 备注                                                     |
| ---------- | ---- | ----------- | -------------------------------------------------------- |
| id         | num  | 表情ID      |                                                          |
| package_id | num  | 表情包ID    |                                                          |
| text       | str  | 表情转义符  | 颜文字时为该字串                                         |
| url        | str  | 表情图片url | 颜文字时为该字串                                         |
| mtime      | num  | 创建时间    | 时间戳                                                   |
| type       | num  | 表情类型    | 1：普通<br />2：会员专属<br />3：购买所得<br />4：颜文字 |
| attr       | num  | ？？？      | **作用尚不明确**                                         |
| meta       | obj  | 属性信息    |                                                          |
| flags      | obj  | 空          |                                                          |

`emote`数组中的对象中的`meta`对象：

| 字段  | 类型 | 内容         | 备注             |
| ----- | ---- | ------------ | ---------------- |
| size  | num  | 表情尺寸信息 | 1：小<br />2：大 |
| alias | str  | 简写名       | 无则无此项       |

**示例：**

 http://api.bilibili.com/x/emote/user/panel/web?business=reply

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "packages": [
            {
                "id": 1,
                "text": "小黄脸",
                "url": "http://i0.hdslb.com/bfs/emote/81edf17314cea3b48674312b4364df44d5c01f17.png",
                "mtime": 1591604235,
                "type": 1,
                "attr": 66,
                "meta": {
                    "size": 1,
                    "item_id": 958
                },
                "emote": [
                    {
                        "id": 2126,
                        "package_id": 1,
                        "text": "[视频卫星]",
                        "url": "http://i0.hdslb.com/bfs/emote/dce6fc7d6dfeafff01241924db60f8251cca5307.png",
                        "mtime": 1590986882,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1901,
                        "package_id": 1,
                        "text": "[加油武汉]",
                        "url": "http://i0.hdslb.com/bfs/emote/eb966aaa5b690d3f9308a9f936f5b5a72a7f956b.png",
                        "mtime": 1580024058,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1906,
                        "package_id": 1,
                        "text": "[口罩]",
                        "url": "http://i0.hdslb.com/bfs/emote/3ad2f66b151496d2a5fb0a8ea75f32265d778dd3.png",
                        "mtime": 1581309529,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1,
                        "package_id": 1,
                        "text": "[微笑]",
                        "url": "http://i0.hdslb.com/bfs/emote/685612eadc33f6bc233776c6241813385844f182.png",
                        "mtime": 1582182040,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1958,
                        "package_id": 1,
                        "text": "[笑]",
                        "url": "http://i0.hdslb.com/bfs/emote/81edf17314cea3b48674312b4364df44d5c01f17.png",
                        "mtime": 1582184940,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1902,
                        "package_id": 1,
                        "text": "[呲牙]",
                        "url": "http://i0.hdslb.com/bfs/emote/b5a5898491944a4268360f2e7a84623149672eb6.png",
                        "mtime": 1580736044,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1950,
                        "package_id": 1,
                        "text": "[OK]",
                        "url": "http://i0.hdslb.com/bfs/emote/4683fd9ffc925fa6423110979d7dcac5eda297f4.png",
                        "mtime": 1582182969,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1956,
                        "package_id": 1,
                        "text": "[星星眼]",
                        "url": "http://i0.hdslb.com/bfs/emote/63c9d1a31c0da745b61cdb35e0ecb28635675db2.png",
                        "mtime": 1582182969,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1940,
                        "package_id": 1,
                        "text": "[哦呼]",
                        "url": "http://i0.hdslb.com/bfs/emote/362bded07ea5434886271d23fa25f5d85d8af06c.png",
                        "mtime": 1582182969,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 2,
                        "package_id": 1,
                        "text": "[嫌弃]",
                        "url": "http://i0.hdslb.com/bfs/emote/de4c0783aaa60ec03de0a2b90858927bfad7154b.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 3,
                        "package_id": 1,
                        "text": "[喜欢]",
                        "url": "http://i0.hdslb.com/bfs/emote/8a10a4d73a89f665feff3d46ca56e83dc68f9eb8.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1273,
                        "package_id": 1,
                        "text": "[酸了]",
                        "url": "http://i0.hdslb.com/bfs/emote/92b1c8cbceea3ae0e8e32253ea414783e8ba7806.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 5,
                        "package_id": 1,
                        "text": "[大哭]",
                        "url": "http://i0.hdslb.com/bfs/emote/2caafee2e5db4db72104650d87810cc2c123fc86.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 6,
                        "package_id": 1,
                        "text": "[害羞]",
                        "url": "http://i0.hdslb.com/bfs/emote/9d2ec4e1fbd6cb1b4d12d2bbbdd124ccb83ddfda.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 7,
                        "package_id": 1,
                        "text": "[无语]",
                        "url": "http://i0.hdslb.com/bfs/emote/44667b7d9349957e903b1b62cb91fb9b13720f04.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1938,
                        "package_id": 1,
                        "text": "[疑惑]",
                        "url": "http://i0.hdslb.com/bfs/emote/b7840db4b1f9f4726b7cb23c0972720c1698d661.png",
                        "mtime": 1582182969,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1128,
                        "package_id": 1,
                        "text": "[调皮]",
                        "url": "http://i0.hdslb.com/bfs/emote/8290b7308325e3179d2154327c85640af1528617.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 791,
                        "package_id": 1,
                        "text": "[喜极而泣]",
                        "url": "http://i0.hdslb.com/bfs/emote/485a7e0c01c2d70707daae53bee4a9e2e31ef1ed.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 11,
                        "package_id": 1,
                        "text": "[奸笑]",
                        "url": "http://i0.hdslb.com/bfs/emote/bb84906573472f0a84cebad1e9000eb6164a6f5a.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 833,
                        "package_id": 1,
                        "text": "[偷笑]",
                        "url": "http://i0.hdslb.com/bfs/emote/6c49d226e76c42cd8002abc47b3112bc5a92f66a.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 12,
                        "package_id": 1,
                        "text": "[大笑]",
                        "url": "http://i0.hdslb.com/bfs/emote/ca94ad1c7e6dac895eb5b33b7836b634c614d1c0.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 23,
                        "package_id": 1,
                        "text": "[阴险]",
                        "url": "http://i0.hdslb.com/bfs/emote/ba8d5f8e7d136d59aab52c40fd3b8a43419eb03c.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 15,
                        "package_id": 1,
                        "text": "[捂脸]",
                        "url": "http://i0.hdslb.com/bfs/emote/6921bb43f0c634870b92f4a8ad41dada94a5296d.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 14,
                        "package_id": 1,
                        "text": "[囧]",
                        "url": "http://i0.hdslb.com/bfs/emote/12e41d357a9807cc80ef1e1ed258127fcc791424.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 4,
                        "package_id": 1,
                        "text": "[呆]",
                        "url": "http://i0.hdslb.com/bfs/emote/33ad6000d9f9f168a0976bc60937786f239e5d8c.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 18,
                        "package_id": 1,
                        "text": "[抠鼻]",
                        "url": "http://i0.hdslb.com/bfs/emote/cb89184c97e3f6d50acfd7961c313ce50360d70f.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 19,
                        "package_id": 1,
                        "text": "[惊喜]",
                        "url": "http://i0.hdslb.com/bfs/emote/0afecaf3a3499479af946f29749e1a6c285b6f65.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 13,
                        "package_id": 1,
                        "text": "[惊讶]",
                        "url": "http://i0.hdslb.com/bfs/emote/f8e9a59cad52ae1a19622805696a35f0a0d853f3.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 509,
                        "package_id": 1,
                        "text": "[笑哭]",
                        "url": "http://i0.hdslb.com/bfs/emote/c3043ba94babf824dea03ce500d0e73763bf4f40.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 435,
                        "package_id": 1,
                        "text": "[妙啊]",
                        "url": "http://i0.hdslb.com/bfs/emote/b4cb77159d58614a9b787b91b1cd22a81f383535.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 26,
                        "package_id": 1,
                        "text": "[doge]",
                        "url": "http://i0.hdslb.com/bfs/emote/bba7c12aa51fed0199c241465560dfc2714c593e.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 27,
                        "package_id": 1,
                        "text": "[滑稽]",
                        "url": "http://i0.hdslb.com/bfs/emote/d15121545a99ac46774f1f4465b895fe2d1411c3.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 415,
                        "package_id": 1,
                        "text": "[吃瓜]",
                        "url": "http://i0.hdslb.com/bfs/emote/4191ce3c44c2b3df8fd97c33f85d3ab15f4f3c84.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 510,
                        "package_id": 1,
                        "text": "[打call]",
                        "url": "http://i0.hdslb.com/bfs/emote/431432c43da3ee5aab5b0e4f8931953e649e9975.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 25,
                        "package_id": 1,
                        "text": "[点赞]",
                        "url": "http://i0.hdslb.com/bfs/emote/1a67265993913f4c35d15a6028a30724e83e7d35.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1964,
                        "package_id": 1,
                        "text": "[鼓掌]",
                        "url": "http://i0.hdslb.com/bfs/emote/895d1fc616b4b6c830cf96012880818c0e1de00d.png",
                        "mtime": 1582862057,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 9,
                        "package_id": 1,
                        "text": "[尴尬]",
                        "url": "http://i0.hdslb.com/bfs/emote/cb321684ed5ce6eacdc2699092ab8fe7679e4fda.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1450,
                        "package_id": 1,
                        "text": "[冷]",
                        "url": "http://i0.hdslb.com/bfs/emote/cb0ebbd0668640f07ebfc0e03f7a18a8cd00b4ed.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 16,
                        "package_id": 1,
                        "text": "[灵魂出窍]",
                        "url": "http://i0.hdslb.com/bfs/emote/43d3db7d97343c01b47e22cfabeca84b4251f35a.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 8,
                        "package_id": 1,
                        "text": "[委屈]",
                        "url": "http://i0.hdslb.com/bfs/emote/d2f26cbdd6c96960320af03f5514c5b524990840.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 20,
                        "package_id": 1,
                        "text": "[傲娇]",
                        "url": "http://i0.hdslb.com/bfs/emote/010540d0f61220a0db4922e4a679a1d8eca94f4e.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 21,
                        "package_id": 1,
                        "text": "[疼]",
                        "url": "http://i0.hdslb.com/bfs/emote/905fd9a99ec316e353b9bd4ecd49a5f0a301eabf.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 22,
                        "package_id": 1,
                        "text": "[吓]",
                        "url": "http://i0.hdslb.com/bfs/emote/9c10c5ebc7bef27ec641b8a1877674e0c65fea5d.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 29,
                        "package_id": 1,
                        "text": "[生病]",
                        "url": "http://i0.hdslb.com/bfs/emote/0f25ce04ae1d7baf98650986454c634f6612cb76.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 17,
                        "package_id": 1,
                        "text": "[吐]",
                        "url": "http://i0.hdslb.com/bfs/emote/06946bfe71ac48a6078a0b662181bb5cad09decc.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 31,
                        "package_id": 1,
                        "text": "[嘘声]",
                        "url": "http://i0.hdslb.com/bfs/emote/e64af664d20716e090f10411496998095f62f844.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1939,
                        "package_id": 1,
                        "text": "[捂眼]",
                        "url": "http://i0.hdslb.com/bfs/emote/c5c6d6982e1e53e478daae554b239f2b227b172b.png",
                        "mtime": 1582182969,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1941,
                        "package_id": 1,
                        "text": "[思考]",
                        "url": "http://i0.hdslb.com/bfs/emote/cfa9b7e89e4bfe04bbcd34ccb1b0df37f4fa905c.png",
                        "mtime": 1582182969,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1942,
                        "package_id": 1,
                        "text": "[再见]",
                        "url": "http://i0.hdslb.com/bfs/emote/fc510306bae26c9aec7e287cdf201ded27b065b9.png",
                        "mtime": 1582182969,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1943,
                        "package_id": 1,
                        "text": "[翻白眼]",
                        "url": "http://i0.hdslb.com/bfs/emote/eba54707c7168925b18f6f8b1f48d532fe08c2b1.png",
                        "mtime": 1582182969,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1951,
                        "package_id": 1,
                        "text": "[哈欠]",
                        "url": "http://i0.hdslb.com/bfs/emote/888d877729cbec444ddbd1cf4c9af155a7a06086.png",
                        "mtime": 1582182969,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1952,
                        "package_id": 1,
                        "text": "[奋斗]",
                        "url": "http://i0.hdslb.com/bfs/emote/bb2060c15dba7d3fd731c35079d1617f1afe3376.png",
                        "mtime": 1582182969,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1953,
                        "package_id": 1,
                        "text": "[墨镜]",
                        "url": "http://i0.hdslb.com/bfs/emote/3a03aebfc06339d86a68c2d893303b46f4b85771.png",
                        "mtime": 1582182969,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1955,
                        "package_id": 1,
                        "text": "[撇嘴]",
                        "url": "http://i0.hdslb.com/bfs/emote/531863568e5668c5ac181d395508a0eeb1f0cda4.png",
                        "mtime": 1582182969,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1954,
                        "package_id": 1,
                        "text": "[难过]",
                        "url": "http://i0.hdslb.com/bfs/emote/a651db36701610aa70a781fa98c07c9789b11543.png",
                        "mtime": 1582182969,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1957,
                        "package_id": 1,
                        "text": "[抓狂]",
                        "url": "http://i0.hdslb.com/bfs/emote/4c87afff88c22439c45b79e9d2035d21d5622eba.png",
                        "mtime": 1582182969,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 10,
                        "package_id": 1,
                        "text": "[生气]",
                        "url": "http://i0.hdslb.com/bfs/emote/3195714219c4b582a4fb02033dd1519913d0246d.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1905,
                        "package_id": 1,
                        "text": "[鸡腿]",
                        "url": "http://i0.hdslb.com/bfs/emote/c7860392815d345fa69c4f00ef18d67dccfbd574.png",
                        "mtime": 1581240206,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1949,
                        "package_id": 1,
                        "text": "[干杯]",
                        "url": "http://i0.hdslb.com/bfs/emote/8da12d5f55a2c7e9778dcc05b40571979fe208e6.png",
                        "mtime": 1582182969,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 550,
                        "package_id": 1,
                        "text": "[爱心]",
                        "url": "http://i0.hdslb.com/bfs/emote/ed04066ea7124106d17ffcaf75600700e5442f5c.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1866,
                        "package_id": 1,
                        "text": "[锦鲤]",
                        "url": "http://i0.hdslb.com/bfs/emote/643d6c19c8164ffd89e3e9cdf093cf5d773d979c.png",
                        "mtime": 1577957751,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 2010,
                        "package_id": 1,
                        "text": "[胜利]",
                        "url": "http://i0.hdslb.com/bfs/emote/b49fa9f4b1e7c3477918153b82c60b114d87347c.png",
                        "mtime": 1586254032,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1947,
                        "package_id": 1,
                        "text": "[加油]",
                        "url": "http://i0.hdslb.com/bfs/emote/c7aaeacb21e107292d3bb053e5abde4a4459ed30.png",
                        "mtime": 1582182969,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1903,
                        "package_id": 1,
                        "text": "[保佑]",
                        "url": "http://i0.hdslb.com/bfs/emote/fafe8d3de0dc139ebe995491d2dac458a865fb30.png",
                        "mtime": 1581168601,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1904,
                        "package_id": 1,
                        "text": "[抱拳]",
                        "url": "http://i0.hdslb.com/bfs/emote/89516218158dbea18ab78e8873060bf95d33bbbe.png",
                        "mtime": 1581168601,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 30,
                        "package_id": 1,
                        "text": "[响指]",
                        "url": "http://i0.hdslb.com/bfs/emote/1b5c53cf14336903e1d2ae3527ca380a1256a077.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 434,
                        "package_id": 1,
                        "text": "[支持]",
                        "url": "http://i0.hdslb.com/bfs/emote/3c210366a5585706c09d4c686a9d942b39feeb50.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1944,
                        "package_id": 1,
                        "text": "[拥抱]",
                        "url": "http://i0.hdslb.com/bfs/emote/41780a4254750cdaaccb20735730a36044e98ef3.png",
                        "mtime": 1582182969,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1946,
                        "package_id": 1,
                        "text": "[怪我咯]",
                        "url": "http://i0.hdslb.com/bfs/emote/07cc6077f7f7d75b8d2c722dd9d9828a9fb9e46d.png",
                        "mtime": 1582182969,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1945,
                        "package_id": 1,
                        "text": "[跪了]",
                        "url": "http://i0.hdslb.com/bfs/emote/f2b3aee7e521de7799d4e3aa379b01be032698ac.png",
                        "mtime": 1582182969,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 32,
                        "package_id": 1,
                        "text": "[黑洞]",
                        "url": "http://i0.hdslb.com/bfs/emote/e90ec4c799010f25391179118ccd9f66b3b279ba.png",
                        "mtime": 1577702898,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1900,
                        "package_id": 1,
                        "text": "[老鼠]",
                        "url": "http://i0.hdslb.com/bfs/emote/8e6fb491eb1bb0d5862e7ec8ccf9a3da12b6c155.png",
                        "mtime": 1579407821,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1855,
                        "package_id": 1,
                        "text": "[2020]",
                        "url": "http://i0.hdslb.com/bfs/emote/dc709fac0d361370bcf0d36d32adb97df7c95824.png",
                        "mtime": 1577702963,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 1886,
                        "package_id": 1,
                        "text": "[福到了]",
                        "url": "http://i0.hdslb.com/bfs/emote/5de5373d354c373cf1617b6b836f3a8d53c5a655.png",
                        "mtime": 1578983858,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    }
                ],
                "flags": {
                    "added": true
                }
            },
            {
                "id": 53,
                "text": "热词系列一",
                "url": "http://i0.hdslb.com/bfs/emote/bacd6e17997348873ef89e5f1bcbbda877a1606a.png",
                "mtime": 1592205524,
                "type": 1,
                "attr": 2,
                "meta": {
                    "size": 2,
                    "item_id": 1039
                },
                "emote": [
                    {
                        "id": 1937,
                        "package_id": 53,
                        "text": "[热词系列_知识增加]",
                        "url": "http://i0.hdslb.com/bfs/emote/142409b595982b8210b2958f3d340f3b47942645.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "知识增加"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2147,
                        "package_id": 53,
                        "text": "[热词系列_希望没事]",
                        "url": "http://i0.hdslb.com/bfs/emote/6c0d2e6c486d1ba5afd6204a96e102652464a01d.png",
                        "mtime": 1591689594,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "希望没事"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2083,
                        "package_id": 53,
                        "text": "[热词系列_泪目]",
                        "url": "http://i0.hdslb.com/bfs/emote/bba3703ab90b7d16fe9dbcb85ed949db687f8331.png",
                        "mtime": 1588910215,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "泪目"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2082,
                        "package_id": 53,
                        "text": "[热词系列_保护]",
                        "url": "http://i0.hdslb.com/bfs/emote/55f8f6445ca7c3170cdfc5b16036abf639ce9b57.png",
                        "mtime": 1588910215,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "保护"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2084,
                        "package_id": 53,
                        "text": "[热词系列_害怕]",
                        "url": "http://i0.hdslb.com/bfs/emote/d77e2de26da143249f0c0ad7a608c27152c985bf.png",
                        "mtime": 1588910215,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "害怕"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1967,
                        "package_id": 53,
                        "text": "[热词系列_爱了爱了]",
                        "url": "http://i0.hdslb.com/bfs/emote/2a165b555ba20391316366c664ed7891883dc5aa.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "爱了爱了"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2021,
                        "package_id": 53,
                        "text": "[热词系列_问号]",
                        "url": "http://i0.hdslb.com/bfs/emote/c1d1e76c12180adc8558f47006fe0e7ded4154bb.png",
                        "mtime": 1586512352,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "问号"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1482,
                        "package_id": 53,
                        "text": "[热词系列_吹爆]",
                        "url": "http://i0.hdslb.com/bfs/emote/b528220f9c37256ed6a37f05bf118e44b08b81e5.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "吹爆"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1483,
                        "package_id": 53,
                        "text": "[热词系列_三连]",
                        "url": "http://i0.hdslb.com/bfs/emote/21f15fe11b7a84d2f2121c16dec50a4e4556f865.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "三连"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1487,
                        "package_id": 53,
                        "text": "[热词系列_可以]",
                        "url": "http://i0.hdslb.com/bfs/emote/e08543c71202b36c590094417fcfbb80c3506cd8.png",
                        "mtime": 1585723759,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "可以"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1485,
                        "package_id": 53,
                        "text": "[热词系列_打卡]",
                        "url": "http://i0.hdslb.com/bfs/emote/a9cf77c78e1b9b40aa3ed4862402fba008ee2f51.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "打卡"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1493,
                        "package_id": 53,
                        "text": "[热词系列_妙啊]",
                        "url": "http://i0.hdslb.com/bfs/emote/0e98299d7decf5eaffad854977946075c3e91cb8.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "妙啊"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1963,
                        "package_id": 53,
                        "text": "[热词系列_这次一定]",
                        "url": "http://i0.hdslb.com/bfs/emote/a01ca28923daa7cc896c42f27deb4914e20dd572.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "这次一定"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1884,
                        "package_id": 53,
                        "text": "[热词系列_AWSL]",
                        "url": "http://i0.hdslb.com/bfs/emote/c37f88cf799f9badf9d84b7671dc3dd98c0fc0c2.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "AWSL"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2022,
                        "package_id": 53,
                        "text": "[热词系列_递话筒]",
                        "url": "http://i0.hdslb.com/bfs/emote/98e6950e39fbb4dd1c576042063ca632074070ba.png",
                        "mtime": 1586512352,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "递话筒"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2125,
                        "package_id": 53,
                        "text": "[热词系列_你可真星]",
                        "url": "http://i0.hdslb.com/bfs/emote/54c8ddff400abfe388060cabfbb579280fdea1be.png",
                        "mtime": 1590983534,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "你可真星"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1959,
                        "package_id": 53,
                        "text": "[热词系列_你细品]",
                        "url": "http://i0.hdslb.com/bfs/emote/535e00658e7e47966f154d3a167fa2365ebc4321.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "你细品"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2009,
                        "package_id": 53,
                        "text": "[热词系列_咕咕]",
                        "url": "http://i0.hdslb.com/bfs/emote/d8065c2e7ce48c929317a94553499a46fecc262a.png",
                        "mtime": 1585734849,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "咕咕"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1966,
                        "package_id": 53,
                        "text": "[热词系列_标准结局]",
                        "url": "http://i0.hdslb.com/bfs/emote/3de98174b510cf7dc5fd1bd08c5d881065e79137.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "标准结局"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1968,
                        "package_id": 53,
                        "text": "[热词系列_危]",
                        "url": "http://i0.hdslb.com/bfs/emote/5cc6c3357c4df544dd8de9d5c5c0cec97c7c9a56.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "危"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1998,
                        "package_id": 53,
                        "text": "[热词系列_张三]",
                        "url": "http://i0.hdslb.com/bfs/emote/255a938f39cea625032b6650036b31aa26c50a3c.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "张三"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1965,
                        "package_id": 53,
                        "text": "[热词系列_害]",
                        "url": "http://i0.hdslb.com/bfs/emote/cbe798a194612958537c5282fcca7c3bcd2aa15c.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "害"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1969,
                        "package_id": 53,
                        "text": "[热词系列_我裂开了]",
                        "url": "http://i0.hdslb.com/bfs/emote/29bd57ec4e8952880fea6c9e47aee924e91f10c4.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "我裂开了"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1960,
                        "package_id": 53,
                        "text": "[热词系列_有内味了]",
                        "url": "http://i0.hdslb.com/bfs/emote/7ca61680a905b5b6e2e335c630e725b648b03b4d.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "有内味了"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1961,
                        "package_id": 53,
                        "text": "[热词系列_猛男必看]",
                        "url": "http://i0.hdslb.com/bfs/emote/c97064450528a0e45c7e7c365a15fbb13fd61d8c.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "猛男必看"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1885,
                        "package_id": 53,
                        "text": "[热词系列_奥力给]",
                        "url": "http://i0.hdslb.com/bfs/emote/c9b8683827ec6c00fea5327c9bec14f581cef2aa.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "奥力给"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1962,
                        "package_id": 53,
                        "text": "[热词系列_我哭了]",
                        "url": "http://i0.hdslb.com/bfs/emote/9e0b3877d649aaf6538fbdd3f937e240a9d808e4.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "我哭了"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1484,
                        "package_id": 53,
                        "text": "[热词系列_高产]",
                        "url": "http://i0.hdslb.com/bfs/emote/9db817cba4a7f4a42398f3b2ec7c0a8e0c247c42.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "高产"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1486,
                        "package_id": 53,
                        "text": "[热词系列_我酸了]",
                        "url": "http://i0.hdslb.com/bfs/emote/a8cbf3f6b8cd9377eeb15b9172f3cd683b2e4650.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "我酸了"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1491,
                        "package_id": 53,
                        "text": "[热词系列_真香]",
                        "url": "http://i0.hdslb.com/bfs/emote/e68497c775feaac1c3b1a6cd63a50cfb11b767c4.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "真香"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1490,
                        "package_id": 53,
                        "text": "[热词系列_我全都要]",
                        "url": "http://i0.hdslb.com/bfs/emote/d424d1ad8d14c1c9b8367842bc68c658b9229bc1.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "我全都要"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1869,
                        "package_id": 53,
                        "text": "[热词系列_神仙UP]",
                        "url": "http://i0.hdslb.com/bfs/emote/a49e0d0db1e7d35a0f7411be13208951ab448f03.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "神仙UP"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1492,
                        "package_id": 53,
                        "text": "[热词系列_你币有了]",
                        "url": "http://i0.hdslb.com/bfs/emote/84820c2b147a8ca02f3c4006b63f76c6313cbfa0.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "你币有了"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1867,
                        "package_id": 53,
                        "text": "[热词系列_不愧是你]",
                        "url": "http://i0.hdslb.com/bfs/emote/9ff2e356797c57ee3b1675ade0883d2d2247be9b.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "不愧是你"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1488,
                        "package_id": 53,
                        "text": "[热词系列_锤]",
                        "url": "http://i0.hdslb.com/bfs/emote/35668cc12ae25b9545420e4a85bf21a0bfc03e5d.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "锤"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1494,
                        "package_id": 53,
                        "text": "[热词系列_秀]",
                        "url": "http://i0.hdslb.com/bfs/emote/50782fbf5d9b7f48f9467b5c53932981e321eedc.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "秀"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1495,
                        "package_id": 53,
                        "text": "[热词系列_爷关更]",
                        "url": "http://i0.hdslb.com/bfs/emote/faad40c56447f1f8abcb4045c17ce159d113d1fd.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "爷关更"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1496,
                        "package_id": 53,
                        "text": "[热词系列_有生之年]",
                        "url": "http://i0.hdslb.com/bfs/emote/f41fdafe2d0fbb8e8bc1598d2cf37e355560103a.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "有生之年"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1497,
                        "package_id": 53,
                        "text": "[热词系列_镇站之宝]",
                        "url": "http://i0.hdslb.com/bfs/emote/24e7a6a6e6383c987215fb905e3ee070aca259b5.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "镇站之宝"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1870,
                        "package_id": 53,
                        "text": "[热词系列_我太南了]",
                        "url": "http://i0.hdslb.com/bfs/emote/a523f3e4c63e4db1232365765d0ec452f83be97e.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "我太南了"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1489,
                        "package_id": 53,
                        "text": "[热词系列_完结撒花]",
                        "url": "http://i0.hdslb.com/bfs/emote/ea9db62ff5bca8e069cd70c4233353a802835422.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "完结撒花"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1868,
                        "package_id": 53,
                        "text": "[热词系列_大师球]",
                        "url": "http://i0.hdslb.com/bfs/emote/f30089248dd137c568edabcb07cf67e0f6e98cf3.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "大师球"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1871,
                        "package_id": 53,
                        "text": "[热词系列_知识盲区]",
                        "url": "http://i0.hdslb.com/bfs/emote/ccc94600b321a28116081e49ecedaa4ee8728312.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "知识盲区"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1873,
                        "package_id": 53,
                        "text": "[热词系列_“狼火”]",
                        "url": "http://i0.hdslb.com/bfs/emote/33ccd3617bfa89e9d1498b13b7542b63f163e5de.png",
                        "mtime": 1585202919,
                        "type": 1,
                        "attr": 2,
                        "meta": {
                            "size": 2,
                            "alias": "“狼火”"
                        },
                        "flags": {}
                    }
                ],
                "flags": {
                    "added": true
                }
            },
            {
                "id": 2,
                "text": "tv_小电视",
                "url": "http://i0.hdslb.com/bfs/emote/f3517fc58c71236da5f0355b688ba302ae90c074.png",
                "mtime": 1592205536,
                "type": 1,
                "attr": 2,
                "meta": {
                    "size": 1,
                    "item_id": 959
                },
                "emote": [
                    {
                        "id": 33,
                        "package_id": 2,
                        "text": "[tv_白眼]",
                        "url": "http://i0.hdslb.com/bfs/emote/c1d59f439e379ee50eef488bcb5e5378e5044ea4.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 34,
                        "package_id": 2,
                        "text": "[tv_doge]",
                        "url": "http://i0.hdslb.com/bfs/emote/6ea59c827c414b4a2955fe79e0f6fd3dcd515e24.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 35,
                        "package_id": 2,
                        "text": "[tv_坏笑]",
                        "url": "http://i0.hdslb.com/bfs/emote/1f0b87f731a671079842116e0991c91c2c88645a.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 36,
                        "package_id": 2,
                        "text": "[tv_难过]",
                        "url": "http://i0.hdslb.com/bfs/emote/87f46748d3f142ebc6586ff58860d0e2fc8263ba.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 37,
                        "package_id": 2,
                        "text": "[tv_生气]",
                        "url": "http://i0.hdslb.com/bfs/emote/26702dcafdab5e8225b43ffd23c94ac1ff932654.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 38,
                        "package_id": 2,
                        "text": "[tv_委屈]",
                        "url": "http://i0.hdslb.com/bfs/emote/d04dba7b5465779e9755d2ab6f0a897b9b33bb77.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 39,
                        "package_id": 2,
                        "text": "[tv_斜眼笑]",
                        "url": "http://i0.hdslb.com/bfs/emote/911f987aa8bc1bee12d52aafe62bc41ef4474e6c.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 40,
                        "package_id": 2,
                        "text": "[tv_呆]",
                        "url": "http://i0.hdslb.com/bfs/emote/fe1179ebaa191569b0d31cecafe7a2cd1c951c9d.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 41,
                        "package_id": 2,
                        "text": "[tv_发怒]",
                        "url": "http://i0.hdslb.com/bfs/emote/34ba3cd204d5b05fec70ce08fa9fa0dd612409ff.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 42,
                        "package_id": 2,
                        "text": "[tv_惊吓]",
                        "url": "http://i0.hdslb.com/bfs/emote/0d15c7e2ee58e935adc6a7193ee042388adc22af.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 43,
                        "package_id": 2,
                        "text": "[tv_呕吐]",
                        "url": "http://i0.hdslb.com/bfs/emote/9f996894a39e282ccf5e66856af49483f81870f3.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 44,
                        "package_id": 2,
                        "text": "[tv_思考]",
                        "url": "http://i0.hdslb.com/bfs/emote/90cf159733e558137ed20aa04d09964436f618a1.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 45,
                        "package_id": 2,
                        "text": "[tv_微笑]",
                        "url": "http://i0.hdslb.com/bfs/emote/70dc5c7b56f93eb61bddba11e28fb1d18fddcd4c.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 46,
                        "package_id": 2,
                        "text": "[tv_疑问]",
                        "url": "http://i0.hdslb.com/bfs/emote/0793d949b18d7be716078349c202c15ff166f314.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 47,
                        "package_id": 2,
                        "text": "[tv_大哭]",
                        "url": "http://i0.hdslb.com/bfs/emote/23269aeb35f99daee28dda129676f6e9ea87934f.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 48,
                        "package_id": 2,
                        "text": "[tv_鼓掌]",
                        "url": "http://i0.hdslb.com/bfs/emote/1d21793f96ef4e6f48b23e53e3b9e42da833a0f6.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 49,
                        "package_id": 2,
                        "text": "[tv_抠鼻]",
                        "url": "http://i0.hdslb.com/bfs/emote/c666f55e88d471e51bbd9fab9bb308110824a6eb.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 50,
                        "package_id": 2,
                        "text": "[tv_亲亲]",
                        "url": "http://i0.hdslb.com/bfs/emote/a8111ad55953ef5e3be3327ef94eb4a39d535d06.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 51,
                        "package_id": 2,
                        "text": "[tv_调皮]",
                        "url": "http://i0.hdslb.com/bfs/emote/b9c41de8e82dd7a8515ae5e3cb63e898bf245186.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 52,
                        "package_id": 2,
                        "text": "[tv_笑哭]",
                        "url": "http://i0.hdslb.com/bfs/emote/1abc628f6d4f4caf9d0e7800878f4697abbc8273.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 53,
                        "package_id": 2,
                        "text": "[tv_晕]",
                        "url": "http://i0.hdslb.com/bfs/emote/5443c22b4d07fb1907ccc610c8e6db254f2461b7.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 54,
                        "package_id": 2,
                        "text": "[tv_点赞]",
                        "url": "http://i0.hdslb.com/bfs/emote/f85c354995bd99e28fc76c869bfe42ba6438eff4.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 55,
                        "package_id": 2,
                        "text": "[tv_害羞]",
                        "url": "http://i0.hdslb.com/bfs/emote/a37683fb5642fa3ddfc7f4e5525fd13e42a2bdb1.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 56,
                        "package_id": 2,
                        "text": "[tv_睡着]",
                        "url": "http://i0.hdslb.com/bfs/emote/8b196675b53af58264f383c50ad0945048290b33.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 57,
                        "package_id": 2,
                        "text": "[tv_色]",
                        "url": "http://i0.hdslb.com/bfs/emote/61822c7e9aae5da76475e7892534545336b23a6f.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 58,
                        "package_id": 2,
                        "text": "[tv_吐血]",
                        "url": "http://i0.hdslb.com/bfs/emote/09dd16a7aa59b77baa1155d47484409624470c77.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 59,
                        "package_id": 2,
                        "text": "[tv_无奈]",
                        "url": "http://i0.hdslb.com/bfs/emote/ea8ed89ee9878f2fece2dda0ea8a5dbfe21b5751.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 60,
                        "package_id": 2,
                        "text": "[tv_再见]",
                        "url": "http://i0.hdslb.com/bfs/emote/180129b8ea851044ce71caf55cc8ce44bd4a4fc8.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 61,
                        "package_id": 2,
                        "text": "[tv_流汗]",
                        "url": "http://i0.hdslb.com/bfs/emote/cead1c351ab8d79e9f369605beb90148db0fbed3.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 62,
                        "package_id": 2,
                        "text": "[tv_偷笑]",
                        "url": "http://i0.hdslb.com/bfs/emote/bb690d4107620f1c15cff29509db529a73aee261.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 63,
                        "package_id": 2,
                        "text": "[tv_抓狂]",
                        "url": "http://i0.hdslb.com/bfs/emote/fe31c08edad661d63762b04e17b8d5ae3c71a757.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 64,
                        "package_id": 2,
                        "text": "[tv_黑人问号]",
                        "url": "http://i0.hdslb.com/bfs/emote/45821a01f51bc867da9edbaa2e070410819a95b2.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 65,
                        "package_id": 2,
                        "text": "[tv_困]",
                        "url": "http://i0.hdslb.com/bfs/emote/241ee304e44c0af029adceb294399391e4737ef2.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 66,
                        "package_id": 2,
                        "text": "[tv_打脸]",
                        "url": "http://i0.hdslb.com/bfs/emote/56ab10b624063e966bfcb76ea5dc4794d87dfd47.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 67,
                        "package_id": 2,
                        "text": "[tv_闭嘴]",
                        "url": "http://i0.hdslb.com/bfs/emote/c9e990da7f6e93975e25fd8b70e2e290aa4086ef.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 68,
                        "package_id": 2,
                        "text": "[tv_鄙视]",
                        "url": "http://i0.hdslb.com/bfs/emote/6e72339f346a692a495b123174b49e4e8e781303.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 69,
                        "package_id": 2,
                        "text": "[tv_腼腆]",
                        "url": "http://i0.hdslb.com/bfs/emote/89712c0d4af73e67f89e35cbc518420380a7f6f4.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 70,
                        "package_id": 2,
                        "text": "[tv_馋]",
                        "url": "http://i0.hdslb.com/bfs/emote/fc7e829b845c43c623c8b490ee3602b7f0e76a31.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 71,
                        "package_id": 2,
                        "text": "[tv_可爱]",
                        "url": "http://i0.hdslb.com/bfs/emote/9e55fd9b500ac4b96613539f1ce2f9499e314ed9.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 72,
                        "package_id": 2,
                        "text": "[tv_发财]",
                        "url": "http://i0.hdslb.com/bfs/emote/34db290afd2963723c6eb3c4560667db7253a21a.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 73,
                        "package_id": 2,
                        "text": "[tv_生病]",
                        "url": "http://i0.hdslb.com/bfs/emote/8b0ec90e6b86771092a498c54f09fc94621c1900.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 74,
                        "package_id": 2,
                        "text": "[tv_流鼻血]",
                        "url": "http://i0.hdslb.com/bfs/emote/c32d39db2737f89b904ca32700d140a9241b0767.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 75,
                        "package_id": 2,
                        "text": "[tv_尴尬]",
                        "url": "http://i0.hdslb.com/bfs/emote/7cfa62dafc59798a3d3fb262d421eeeff166cfa4.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 76,
                        "package_id": 2,
                        "text": "[tv_大佬]",
                        "url": "http://i0.hdslb.com/bfs/emote/093c1e2c490161aca397afc45573c877cdead616.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 77,
                        "package_id": 2,
                        "text": "[tv_流泪]",
                        "url": "http://i0.hdslb.com/bfs/emote/7e71cde7858f0cd50d74b0264aa26db612a8a167.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 78,
                        "package_id": 2,
                        "text": "[tv_冷漠]",
                        "url": "http://i0.hdslb.com/bfs/emote/b9cbc755c2b3ee43be07ca13de84e5b699a3f101.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 79,
                        "package_id": 2,
                        "text": "[tv_皱眉]",
                        "url": "http://i0.hdslb.com/bfs/emote/72ccad6679fea0d14cce648b4d818e09b8ffea2d.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 80,
                        "package_id": 2,
                        "text": "[tv_鬼脸]",
                        "url": "http://i0.hdslb.com/bfs/emote/0ffbbddf8a94d124ca2f54b360bbc04feb6bbfea.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 81,
                        "package_id": 2,
                        "text": "[tv_调侃]",
                        "url": "http://i0.hdslb.com/bfs/emote/4bc022533ef31544ca0d72c12c808cf4a1cce3e3.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 82,
                        "package_id": 2,
                        "text": "[tv_目瞪口呆]",
                        "url": "http://i0.hdslb.com/bfs/emote/0b8cb81a68de5d5365212c99375e7ace3e7891b7.png",
                        "mtime": 1577952473,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    }
                ],
                "flags": {
                    "added": true
                }
            },
            {
                "id": 4,
                "text": "颜文字",
                "url": "http://i0.hdslb.com/bfs/emote/07c5bb57e45270c139172f6a590349d1c5aa9eb9.png",
                "mtime": 1591604975,
                "type": 4,
                "attr": 2,
                "meta": {
                    "size": 1,
                    "item_id": 961
                },
                "emote": [
                    {
                        "id": 93,
                        "package_id": 4,
                        "text": "（⌒▽⌒）",
                        "url": "（⌒▽⌒）",
                        "mtime": 1578299965,
                        "type": 4,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 94,
                        "package_id": 4,
                        "text": "（￣▽￣）",
                        "url": "（￣▽￣）",
                        "mtime": 1578299965,
                        "type": 4,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 95,
                        "package_id": 4,
                        "text": "(=・ω・=)",
                        "url": "(=・ω・=)",
                        "mtime": 1578299965,
                        "type": 4,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 96,
                        "package_id": 4,
                        "text": "(｀・ω・´)",
                        "url": "(｀・ω・´)",
                        "mtime": 1578299965,
                        "type": 4,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 97,
                        "package_id": 4,
                        "text": "(〜￣△￣)〜",
                        "url": "(〜￣△￣)〜",
                        "mtime": 1578299965,
                        "type": 4,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 98,
                        "package_id": 4,
                        "text": "(･∀･)",
                        "url": "(･∀･)",
                        "mtime": 1578299965,
                        "type": 4,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 99,
                        "package_id": 4,
                        "text": "(°∀°)ﾉ",
                        "url": "(°∀°)ﾉ",
                        "mtime": 1578299965,
                        "type": 4,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 100,
                        "package_id": 4,
                        "text": "(￣3￣)",
                        "url": "(￣3￣)",
                        "mtime": 1578299965,
                        "type": 4,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 101,
                        "package_id": 4,
                        "text": "╮(￣▽￣)╭",
                        "url": "╮(￣▽￣)╭",
                        "mtime": 1578299965,
                        "type": 4,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 102,
                        "package_id": 4,
                        "text": "( ´_ゝ｀)",
                        "url": "( ´_ゝ｀)",
                        "mtime": 1578299965,
                        "type": 4,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 103,
                        "package_id": 4,
                        "text": "→_→",
                        "url": "→_→",
                        "mtime": 1578299965,
                        "type": 4,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 104,
                        "package_id": 4,
                        "text": "←_←",
                        "url": "←_←",
                        "mtime": 1578299965,
                        "type": 4,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 105,
                        "package_id": 4,
                        "text": "(;¬_¬)",
                        "url": "(;¬_¬)",
                        "mtime": 1578299965,
                        "type": 4,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 106,
                        "package_id": 4,
                        "text": "(ﾟДﾟ≡ﾟдﾟ)!?",
                        "url": "(ﾟДﾟ≡ﾟдﾟ)!?",
                        "mtime": 1578299965,
                        "type": 4,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 107,
                        "package_id": 4,
                        "text": "Σ(ﾟдﾟ;)",
                        "url": "Σ(ﾟдﾟ;)",
                        "mtime": 1578299965,
                        "type": 4,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 108,
                        "package_id": 4,
                        "text": "Σ( ￣□￣||)<",
                        "url": "Σ( ￣□￣||)<",
                        "mtime": 1578299965,
                        "type": 4,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 109,
                        "package_id": 4,
                        "text": "(´；ω；`)",
                        "url": "(´；ω；`)",
                        "mtime": 1578299965,
                        "type": 4,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 110,
                        "package_id": 4,
                        "text": "（/TДT)/",
                        "url": "（/TДT)/",
                        "mtime": 1578299965,
                        "type": 4,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 111,
                        "package_id": 4,
                        "text": "(^・ω・^ )",
                        "url": "(^・ω・^ )",
                        "mtime": 1578299965,
                        "type": 4,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 112,
                        "package_id": 4,
                        "text": "(｡･ω･｡)",
                        "url": "(｡･ω･｡)",
                        "mtime": 1578299965,
                        "type": 4,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 113,
                        "package_id": 4,
                        "text": "(●￣(ｴ)￣●)",
                        "url": "(●￣(ｴ)￣●)",
                        "mtime": 1578299965,
                        "type": 4,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 114,
                        "package_id": 4,
                        "text": "ε=ε=(ノ≧∇≦)ノ",
                        "url": "ε=ε=(ノ≧∇≦)ノ",
                        "mtime": 1578299965,
                        "type": 4,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 115,
                        "package_id": 4,
                        "text": "(´･_･`)",
                        "url": "(´･_･`)",
                        "mtime": 1578299965,
                        "type": 4,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 116,
                        "package_id": 4,
                        "text": "(-_-#)",
                        "url": "(-_-#)",
                        "mtime": 1578299965,
                        "type": 4,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 117,
                        "package_id": 4,
                        "text": "（￣へ￣）",
                        "url": "（￣へ￣）",
                        "mtime": 1578299965,
                        "type": 4,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 118,
                        "package_id": 4,
                        "text": "(￣ε(#￣) Σ",
                        "url": "(￣ε(#￣) Σ",
                        "mtime": 1578299965,
                        "type": 4,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 119,
                        "package_id": 4,
                        "text": "ヽ(`Д´)ﾉ",
                        "url": "ヽ(`Д´)ﾉ",
                        "mtime": 1578299965,
                        "type": 4,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 120,
                        "package_id": 4,
                        "text": "(╯°口°)╯(┴—┴",
                        "url": "(╯°口°)╯(┴—┴",
                        "mtime": 1578299965,
                        "type": 4,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 2085,
                        "package_id": 4,
                        "text": "(\"▔□▔)/",
                        "url": "(\"▔□▔)/",
                        "mtime": 1589275806,
                        "type": 4,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    }
                ],
                "flags": {
                    "added": true
                }
            },
            {
                "id": 5,
                "text": "小电视",
                "url": "http://i0.hdslb.com/bfs/emote/ce49073ff96606a1a2674b3b4ef8e15fb0a399ff.png",
                "mtime": 1592213556,
                "type": 2,
                "attr": 28,
                "meta": {
                    "size": 2,
                    "item_id": 962
                },
                "emote": [
                    {
                        "id": 121,
                        "package_id": 5,
                        "text": "[小电视_笑]",
                        "url": "http://i0.hdslb.com/bfs/emote/f80d384875183dfe2e24be13011c595c0210d273.png",
                        "mtime": 1591272851,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "笑"
                        },
                        "flags": {}
                    },
                    {
                        "id": 122,
                        "package_id": 5,
                        "text": "[小电视_发愁]",
                        "url": "http://i0.hdslb.com/bfs/emote/05e279abbf3f72d5cc45548504a4220c5514b8b9.png",
                        "mtime": 1591272851,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "发愁"
                        },
                        "flags": {}
                    },
                    {
                        "id": 123,
                        "package_id": 5,
                        "text": "[小电视_赞]",
                        "url": "http://i0.hdslb.com/bfs/emote/86ccf6d0b5480169bf80f3582fae09d7ed455c06.png",
                        "mtime": 1591272851,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "赞"
                        },
                        "flags": {}
                    },
                    {
                        "id": 124,
                        "package_id": 5,
                        "text": "[小电视_差评]",
                        "url": "http://i0.hdslb.com/bfs/emote/38456e3bde2839b00b536a8be13934fa57c8e298.png",
                        "mtime": 1591272851,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "差评"
                        },
                        "flags": {}
                    },
                    {
                        "id": 125,
                        "package_id": 5,
                        "text": "[小电视_嘟嘴]",
                        "url": "http://i0.hdslb.com/bfs/emote/6fd437f547ef1e4f231ff475d02f58bb94cef5a5.png",
                        "mtime": 1591272851,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "嘟嘴"
                        },
                        "flags": {}
                    },
                    {
                        "id": 126,
                        "package_id": 5,
                        "text": "[小电视_汗]",
                        "url": "http://i0.hdslb.com/bfs/emote/5c150cec77eae1b05d5ca46526450ff3beeb44d2.png",
                        "mtime": 1591272851,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "汗"
                        },
                        "flags": {}
                    },
                    {
                        "id": 127,
                        "package_id": 5,
                        "text": "[小电视_害羞]",
                        "url": "http://i0.hdslb.com/bfs/emote/de3aee88f7b6cc20ba9480c96c02f83a844381a9.png",
                        "mtime": 1591272851,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "害羞"
                        },
                        "flags": {}
                    },
                    {
                        "id": 128,
                        "package_id": 5,
                        "text": "[小电视_吃惊]",
                        "url": "http://i0.hdslb.com/bfs/emote/05188008ea84c70d94e0076e28de15bf56f4c441.png",
                        "mtime": 1591272851,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "吃惊"
                        },
                        "flags": {}
                    },
                    {
                        "id": 129,
                        "package_id": 5,
                        "text": "[小电视_哭泣]",
                        "url": "http://i0.hdslb.com/bfs/emote/938bdf98df945576ae88e2a22931db07ded9e663.png",
                        "mtime": 1591272851,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "哭泣"
                        },
                        "flags": {}
                    },
                    {
                        "id": 130,
                        "package_id": 5,
                        "text": "[小电视_太太喜欢]",
                        "url": "http://i0.hdslb.com/bfs/emote/eb41a8c04840e4f77e76a4bff7a29ac89c432f4e.png",
                        "mtime": 1591272851,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "太太喜欢"
                        },
                        "flags": {}
                    },
                    {
                        "id": 131,
                        "package_id": 5,
                        "text": "[小电视_好怒啊]",
                        "url": "http://i0.hdslb.com/bfs/emote/68d524b7e515396b6563d320fb710c64abfb1063.png",
                        "mtime": 1591272851,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "好怒啊"
                        },
                        "flags": {}
                    },
                    {
                        "id": 132,
                        "package_id": 5,
                        "text": "[小电视_困惑]",
                        "url": "http://i0.hdslb.com/bfs/emote/6853161f0eab3332b874ab7c6c0311035b7538f3.png",
                        "mtime": 1591272851,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "困惑"
                        },
                        "flags": {}
                    },
                    {
                        "id": 133,
                        "package_id": 5,
                        "text": "[小电视_我好兴奋]",
                        "url": "http://i0.hdslb.com/bfs/emote/a695fe1301aab2675ab6f6e34757c25a863a8617.png",
                        "mtime": 1591272851,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "我好兴奋"
                        },
                        "flags": {}
                    },
                    {
                        "id": 134,
                        "package_id": 5,
                        "text": "[小电视_思索]",
                        "url": "http://i0.hdslb.com/bfs/emote/f8219e484d5a55787c3f1722dc3112d0eba03a69.png",
                        "mtime": 1591272851,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "思索"
                        },
                        "flags": {}
                    },
                    {
                        "id": 135,
                        "package_id": 5,
                        "text": "[小电视_无语]",
                        "url": "http://i0.hdslb.com/bfs/emote/fbd12affebfdaadd3d721bffdb685a6b1ee71219.png",
                        "mtime": 1591272851,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "无语"
                        },
                        "flags": {}
                    }
                ],
                "flags": {
                    "added": true
                }
            },
            {
                "id": 6,
                "text": "2233娘",
                "url": "http://i0.hdslb.com/bfs/emote/f52830f0c01a4dc91457be5bb2ee49b1b5692cd5.png",
                "mtime": 1592213196,
                "type": 2,
                "attr": 60,
                "meta": {
                    "size": 2,
                    "item_id": 963
                },
                "emote": [
                    {
                        "id": 136,
                        "package_id": 6,
                        "text": "[2233娘_大笑]",
                        "url": "http://i0.hdslb.com/bfs/emote/16b8794be990cefa6caeba4d901b934a227ee3b8.png",
                        "mtime": 1586316683,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "大笑"
                        },
                        "flags": {}
                    },
                    {
                        "id": 137,
                        "package_id": 6,
                        "text": "[2233娘_吃惊]",
                        "url": "http://i0.hdslb.com/bfs/emote/d1628c43d35b1530c0504a643ff80b6189fa0a43.png",
                        "mtime": 1586316683,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "吃惊"
                        },
                        "flags": {}
                    },
                    {
                        "id": 138,
                        "package_id": 6,
                        "text": "[2233娘_大哭]",
                        "url": "http://i0.hdslb.com/bfs/emote/476a2a60f6e337b8c0697a592e0aa82781f6b33b.png",
                        "mtime": 1586316683,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "大哭"
                        },
                        "flags": {}
                    },
                    {
                        "id": 139,
                        "package_id": 6,
                        "text": "[2233娘_耶]",
                        "url": "http://i0.hdslb.com/bfs/emote/d7178e258a0efc969b65ccc2b1322fb235f5dff4.png",
                        "mtime": 1586316683,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "耶"
                        },
                        "flags": {}
                    },
                    {
                        "id": 140,
                        "package_id": 6,
                        "text": "[2233娘_卖萌]",
                        "url": "http://i0.hdslb.com/bfs/emote/ea893aa25355de95ab4f03c2dad3f0c58d0c159e.png",
                        "mtime": 1586316683,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "卖萌"
                        },
                        "flags": {}
                    },
                    {
                        "id": 141,
                        "package_id": 6,
                        "text": "[2233娘_疑问]",
                        "url": "http://i0.hdslb.com/bfs/emote/0b41f509351958dbb63d472fec0132d1bd03bd14.png",
                        "mtime": 1586316683,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "疑问"
                        },
                        "flags": {}
                    },
                    {
                        "id": 142,
                        "package_id": 6,
                        "text": "[2233娘_汗]",
                        "url": "http://i0.hdslb.com/bfs/emote/247cd9df8cdf84b18368c21e3b2dd374e84c0927.png",
                        "mtime": 1586316683,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "汗"
                        },
                        "flags": {}
                    },
                    {
                        "id": 143,
                        "package_id": 6,
                        "text": "[2233娘_困惑]",
                        "url": "http://i0.hdslb.com/bfs/emote/714eeb4eae0d0933b4ff08b7df788b1982f6b940.png",
                        "mtime": 1586316683,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "困惑"
                        },
                        "flags": {}
                    },
                    {
                        "id": 144,
                        "package_id": 6,
                        "text": "[2233娘_怒]",
                        "url": "http://i0.hdslb.com/bfs/emote/f31953119c51b9748016440ac0b632f779929b37.png",
                        "mtime": 1586316683,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "怒"
                        },
                        "flags": {}
                    },
                    {
                        "id": 145,
                        "package_id": 6,
                        "text": "[2233娘_委屈]",
                        "url": "http://i0.hdslb.com/bfs/emote/d9d0bf9d358af8d5761093ec66d4e3f60d963a63.png",
                        "mtime": 1586316683,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "委屈"
                        },
                        "flags": {}
                    },
                    {
                        "id": 146,
                        "package_id": 6,
                        "text": "[2233娘_郁闷]",
                        "url": "http://i0.hdslb.com/bfs/emote/485203fe7100f2c8fc40b2800a18fe20b35f2f1a.png",
                        "mtime": 1586316683,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "郁闷"
                        },
                        "flags": {}
                    },
                    {
                        "id": 147,
                        "package_id": 6,
                        "text": "[2233娘_第一]",
                        "url": "http://i0.hdslb.com/bfs/emote/3754ee6e5985bd0bd7dfb668981f2a8733398ebd.png",
                        "mtime": 1586316683,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "第一"
                        },
                        "flags": {}
                    },
                    {
                        "id": 148,
                        "package_id": 6,
                        "text": "[2233娘_喝水]",
                        "url": "http://i0.hdslb.com/bfs/emote/695bf5429472049b52c1e0de586f8a2511195a23.png",
                        "mtime": 1586316683,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "喝水"
                        },
                        "flags": {}
                    },
                    {
                        "id": 149,
                        "package_id": 6,
                        "text": "[2233娘_吐魂]",
                        "url": "http://i0.hdslb.com/bfs/emote/e999af499edf38a91ca68b1a9d2f97042c1d6734.png",
                        "mtime": 1586316683,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "吐魂"
                        },
                        "flags": {}
                    },
                    {
                        "id": 150,
                        "package_id": 6,
                        "text": "[2233娘_无言]",
                        "url": "http://i0.hdslb.com/bfs/emote/fdb5870f32cfaf7949e0f88a13f6feba4a48b719.png",
                        "mtime": 1586316683,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "无言"
                        },
                        "flags": {}
                    }
                ],
                "flags": {
                    "added": true
                }
            },
            {
                "id": 7,
                "text": "蛆音娘",
                "url": "http://i0.hdslb.com/bfs/emote/2afa12abaad687ee1be56447eb9aa26deba067db.png",
                "mtime": 1592213286,
                "type": 2,
                "attr": 28,
                "meta": {
                    "size": 2,
                    "item_id": 964
                },
                "emote": [
                    {
                        "id": 151,
                        "package_id": 7,
                        "text": "[蛆音娘_卖萌]",
                        "url": "http://i0.hdslb.com/bfs/emote/4cd1024d0c2ecee93224477946656d32c1705ccf.png",
                        "mtime": 1586316722,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "卖萌"
                        },
                        "flags": {}
                    },
                    {
                        "id": 152,
                        "package_id": 7,
                        "text": "[蛆音娘_吃瓜群众]",
                        "url": "http://i0.hdslb.com/bfs/emote/5d0d6cc54b508d30b4f50b6b5f7b7e1e259d84ea.png",
                        "mtime": 1586316722,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "吃瓜群众"
                        },
                        "flags": {}
                    },
                    {
                        "id": 153,
                        "package_id": 7,
                        "text": "[蛆音娘_吃惊]",
                        "url": "http://i0.hdslb.com/bfs/emote/7a4cb0b644214d476ce198ddf6a7a0aa31311199.png",
                        "mtime": 1586316722,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "吃惊"
                        },
                        "flags": {}
                    },
                    {
                        "id": 154,
                        "package_id": 7,
                        "text": "[蛆音娘_害怕]",
                        "url": "http://i0.hdslb.com/bfs/emote/7407634bf67bfe9d7806f15d57608a1b18c2b4c2.png",
                        "mtime": 1586316722,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "害怕"
                        },
                        "flags": {}
                    },
                    {
                        "id": 155,
                        "package_id": 7,
                        "text": "[蛆音娘_扶额]",
                        "url": "http://i0.hdslb.com/bfs/emote/a4d8f95baaa24821fd591a7dbeee1b869e760f59.png",
                        "mtime": 1586316722,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "扶额"
                        },
                        "flags": {}
                    },
                    {
                        "id": 156,
                        "package_id": 7,
                        "text": "[蛆音娘_滑稽]",
                        "url": "http://i0.hdslb.com/bfs/emote/d3717f10ffe9787336bc39a09214270988521a67.png",
                        "mtime": 1586316722,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "滑稽"
                        },
                        "flags": {}
                    },
                    {
                        "id": 157,
                        "package_id": 7,
                        "text": "[蛆音娘_哼]",
                        "url": "http://i0.hdslb.com/bfs/emote/8854f1b8a82126e3b87f3a1563da5feb55b23e71.png",
                        "mtime": 1586316722,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "哼"
                        },
                        "flags": {}
                    },
                    {
                        "id": 158,
                        "package_id": 7,
                        "text": "[蛆音娘_机智]",
                        "url": "http://i0.hdslb.com/bfs/emote/e543c0a823ca915df9362283f4ae950e9e9cc2e9.png",
                        "mtime": 1586316722,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "机智"
                        },
                        "flags": {}
                    },
                    {
                        "id": 159,
                        "package_id": 7,
                        "text": "[蛆音娘_哭泣]",
                        "url": "http://i0.hdslb.com/bfs/emote/a23055546c19eba663b16370b8e072394d87ff53.png",
                        "mtime": 1586316722,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "哭泣"
                        },
                        "flags": {}
                    },
                    {
                        "id": 160,
                        "package_id": 7,
                        "text": "[蛆音娘_睡觉觉]",
                        "url": "http://i0.hdslb.com/bfs/emote/40ef7e6d931acb37e5514b70d13663e86dc3698b.png",
                        "mtime": 1586316722,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "睡觉觉"
                        },
                        "flags": {}
                    },
                    {
                        "id": 161,
                        "package_id": 7,
                        "text": "[蛆音娘_生气]",
                        "url": "http://i0.hdslb.com/bfs/emote/bf398cbbcfaae107d1b59aaf03895f38422e3d87.png",
                        "mtime": 1586316722,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "生气"
                        },
                        "flags": {}
                    },
                    {
                        "id": 162,
                        "package_id": 7,
                        "text": "[蛆音娘_偷看]",
                        "url": "http://i0.hdslb.com/bfs/emote/52463ded4f23649db10ba3ced662ed946c5edf0b.png",
                        "mtime": 1586316722,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "偷看"
                        },
                        "flags": {}
                    },
                    {
                        "id": 163,
                        "package_id": 7,
                        "text": "[蛆音娘_吐血]",
                        "url": "http://i0.hdslb.com/bfs/emote/5772d22015e5b2b40a9fe302b5967ec7282ac848.png",
                        "mtime": 1586316722,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "吐血"
                        },
                        "flags": {}
                    },
                    {
                        "id": 164,
                        "package_id": 7,
                        "text": "[蛆音娘_无语]",
                        "url": "http://i0.hdslb.com/bfs/emote/b6c763c6484ce2e48299ceb21861e46318868871.png",
                        "mtime": 1586316722,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "无语"
                        },
                        "flags": {}
                    },
                    {
                        "id": 165,
                        "package_id": 7,
                        "text": "[蛆音娘_摇头]",
                        "url": "http://i0.hdslb.com/bfs/emote/b7278f750c6f2235f41f37056d727f25d3bf781f.png",
                        "mtime": 1586316722,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "摇头"
                        },
                        "flags": {}
                    },
                    {
                        "id": 166,
                        "package_id": 7,
                        "text": "[蛆音娘_疑问]",
                        "url": "http://i0.hdslb.com/bfs/emote/7750b698d15a1b8e83c0f59106e8e9cd5cb57897.png",
                        "mtime": 1586316722,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "疑问"
                        },
                        "flags": {}
                    },
                    {
                        "id": 167,
                        "package_id": 7,
                        "text": "[蛆音娘_die]",
                        "url": "http://i0.hdslb.com/bfs/emote/52543025a070fde5c01a10320c9636ec3173ac99.png",
                        "mtime": 1586316723,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "die"
                        },
                        "flags": {}
                    },
                    {
                        "id": 168,
                        "package_id": 7,
                        "text": "[蛆音娘_OK]",
                        "url": "http://i0.hdslb.com/bfs/emote/52a0dcee66c91bf123bf53bd48a269b1317d17f9.png",
                        "mtime": 1586316723,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "OK"
                        },
                        "flags": {}
                    },
                    {
                        "id": 169,
                        "package_id": 7,
                        "text": "[蛆音娘_肥皂]",
                        "url": "http://i0.hdslb.com/bfs/emote/7f1a857e9430dcf3050ce0ef5fa19aefebea6dc4.png",
                        "mtime": 1586316723,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "肥皂"
                        },
                        "flags": {}
                    },
                    {
                        "id": 170,
                        "package_id": 7,
                        "text": "[蛆音娘_大笑]",
                        "url": "http://i0.hdslb.com/bfs/emote/1d3355fb89c24ab3c50e5c152d8b990a290dc63e.png",
                        "mtime": 1586316723,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "大笑"
                        },
                        "flags": {}
                    }
                ],
                "flags": {
                    "added": true
                }
            },
            {
                "id": 9,
                "text": "洛天依",
                "url": "http://i0.hdslb.com/bfs/emote/0900f2656679d5ad818e3c1a1f5852f507b39776.png",
                "mtime": 1592213293,
                "type": 2,
                "attr": 28,
                "meta": {
                    "size": 2,
                    "item_id": 966
                },
                "emote": [
                    {
                        "id": 195,
                        "package_id": 9,
                        "text": "[洛天依_傲娇]",
                        "url": "http://i0.hdslb.com/bfs/emote/5d7c8307af10540909fce6121066249df3935a24.png",
                        "mtime": 1586316728,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "傲娇"
                        },
                        "flags": {}
                    },
                    {
                        "id": 196,
                        "package_id": 9,
                        "text": "[洛天依_吃包群众]",
                        "url": "http://i0.hdslb.com/bfs/emote/f8cdabfc1b81fd25b85b8457ee49a20a4fc5d91b.png",
                        "mtime": 1586316728,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "吃包群众"
                        },
                        "flags": {}
                    },
                    {
                        "id": 197,
                        "package_id": 9,
                        "text": "[洛天依_吃药]",
                        "url": "http://i0.hdslb.com/bfs/emote/883e6654176ebcecafd3e52efa8ee842357e18a0.png",
                        "mtime": 1586316728,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "吃药"
                        },
                        "flags": {}
                    },
                    {
                        "id": 198,
                        "package_id": 9,
                        "text": "[洛天依_滑稽]",
                        "url": "http://i0.hdslb.com/bfs/emote/692cef7ca51f935aaa499de7e4d6048c53f42324.png",
                        "mtime": 1586316728,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "滑稽"
                        },
                        "flags": {}
                    },
                    {
                        "id": 199,
                        "package_id": 9,
                        "text": "[洛天依_哈哈哈]",
                        "url": "http://i0.hdslb.com/bfs/emote/677c2f5555c1e79fc336a6283fdbbdc7ea88fec4.png",
                        "mtime": 1586316728,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "哈哈哈"
                        },
                        "flags": {}
                    },
                    {
                        "id": 200,
                        "package_id": 9,
                        "text": "[洛天依_看透一切]",
                        "url": "http://i0.hdslb.com/bfs/emote/4fac414b5002c3739b1ae24f2fc27b5f150ade24.png",
                        "mtime": 1586316728,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "看透一切"
                        },
                        "flags": {}
                    },
                    {
                        "id": 201,
                        "package_id": 9,
                        "text": "[洛天依_打尻]",
                        "url": "http://i0.hdslb.com/bfs/emote/2ab983b2519dc241666254de8e5352fbeedc96bb.png",
                        "mtime": 1586316728,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "打尻"
                        },
                        "flags": {}
                    },
                    {
                        "id": 202,
                        "package_id": 9,
                        "text": "[洛天依_前排]",
                        "url": "http://i0.hdslb.com/bfs/emote/fbbc45e7aee2f256f691df539db0cfcc35b3be7d.png",
                        "mtime": 1586316728,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "前排"
                        },
                        "flags": {}
                    },
                    {
                        "id": 203,
                        "package_id": 9,
                        "text": "[洛天依_去吧]",
                        "url": "http://i0.hdslb.com/bfs/emote/0edeeb0d10d44302854e636c47f5dc3aa96a9206.png",
                        "mtime": 1586316728,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "去吧"
                        },
                        "flags": {}
                    },
                    {
                        "id": 204,
                        "package_id": 9,
                        "text": "[洛天依_冷漠]",
                        "url": "http://i0.hdslb.com/bfs/emote/5f4385db3c9806b08ea15bd9ff444af9d9fe0c3a.png",
                        "mtime": 1586316728,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "冷漠"
                        },
                        "flags": {}
                    },
                    {
                        "id": 205,
                        "package_id": 9,
                        "text": "[洛天依_可以]",
                        "url": "http://i0.hdslb.com/bfs/emote/967377b83e37a0d5dd13bc0f4e4323abf10e4cbf.png",
                        "mtime": 1586316728,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "可以"
                        },
                        "flags": {}
                    },
                    {
                        "id": 206,
                        "package_id": 9,
                        "text": "[洛天依_掀桌]",
                        "url": "http://i0.hdslb.com/bfs/emote/803129b7a1143faabc63c2648335b7d506229e7a.png",
                        "mtime": 1586316728,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "掀桌"
                        },
                        "flags": {}
                    },
                    {
                        "id": 207,
                        "package_id": 9,
                        "text": "[洛天依_消灭你]",
                        "url": "http://i0.hdslb.com/bfs/emote/d96dccf8fa248ee34c7e4aba94e813bec28d2dd8.png",
                        "mtime": 1586316728,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "消灭你"
                        },
                        "flags": {}
                    },
                    {
                        "id": 208,
                        "package_id": 9,
                        "text": "[洛天依_阴阳先生]",
                        "url": "http://i0.hdslb.com/bfs/emote/65e195a8ac54bb678dd1c1e6ce6c5d4ba02761b3.png",
                        "mtime": 1586316728,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "阴阳先生"
                        },
                        "flags": {}
                    },
                    {
                        "id": 209,
                        "package_id": 9,
                        "text": "[洛天依_无言以对]",
                        "url": "http://i0.hdslb.com/bfs/emote/9cfd368b370acd40c1b8f933cec3fb24883356a5.png",
                        "mtime": 1586316728,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "无言以对"
                        },
                        "flags": {}
                    },
                    {
                        "id": 210,
                        "package_id": 9,
                        "text": "[洛天依_？？？]",
                        "url": "http://i0.hdslb.com/bfs/emote/f5f1ebe50c26d5f6d4e17cb983bd5ae59f103dda.png",
                        "mtime": 1586316728,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "？？？"
                        },
                        "flags": {}
                    },
                    {
                        "id": 211,
                        "package_id": 9,
                        "text": "[洛天依_爱你哦]",
                        "url": "http://i0.hdslb.com/bfs/emote/7102c9e25359af8348489ff8529b3bb2c5bd05d0.png",
                        "mtime": 1586316728,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "爱你哦"
                        },
                        "flags": {}
                    }
                ],
                "flags": {
                    "added": true
                }
            },
            {
                "id": 18,
                "text": "小绿和小蓝",
                "url": "http://i0.hdslb.com/bfs/emote/133bf9af4551a15a36b7d83769f30430f347ee6c.png",
                "mtime": 1592213384,
                "type": 2,
                "attr": 28,
                "meta": {
                    "size": 2,
                    "item_id": 975
                },
                "emote": [
                    {
                        "id": 342,
                        "package_id": 18,
                        "text": "[小绿和小蓝_不想说话]",
                        "url": "http://i0.hdslb.com/bfs/emote/eb0e4730ecb42c342e1507330ce495deef0128bd.png",
                        "mtime": 1586316801,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "不想说话"
                        },
                        "flags": {}
                    },
                    {
                        "id": 343,
                        "package_id": 18,
                        "text": "[小绿和小蓝_吵架]",
                        "url": "http://i0.hdslb.com/bfs/emote/420d20935484170ac24c67872f29458bc0c79f5a.png",
                        "mtime": 1586316801,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "吵架"
                        },
                        "flags": {}
                    },
                    {
                        "id": 344,
                        "package_id": 18,
                        "text": "[小绿和小蓝_得意脸]",
                        "url": "http://i0.hdslb.com/bfs/emote/ef7c7605c4975f89896f3ed37c4e097c4e1713d7.png",
                        "mtime": 1586316801,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "得意脸"
                        },
                        "flags": {}
                    },
                    {
                        "id": 345,
                        "package_id": 18,
                        "text": "[小绿和小蓝_高兴]",
                        "url": "http://i0.hdslb.com/bfs/emote/614798a8c875540d417b7200b9ea1ac3e1a934a3.png",
                        "mtime": 1586316801,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "高兴"
                        },
                        "flags": {}
                    },
                    {
                        "id": 346,
                        "package_id": 18,
                        "text": "[小绿和小蓝_哦]",
                        "url": "http://i0.hdslb.com/bfs/emote/dab5061b6f299a5f38b85a115da8eab8024426e8.png",
                        "mtime": 1586316801,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "哦"
                        },
                        "flags": {}
                    },
                    {
                        "id": 347,
                        "package_id": 18,
                        "text": "[小绿和小蓝_捂脸]",
                        "url": "http://i0.hdslb.com/bfs/emote/7108030a92e01945817e2e73cc9206cfed4069a3.png",
                        "mtime": 1586316801,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "捂脸"
                        },
                        "flags": {}
                    },
                    {
                        "id": 348,
                        "package_id": 18,
                        "text": "[小绿和小蓝_邪恶脸]",
                        "url": "http://i0.hdslb.com/bfs/emote/da35ac592ab48d23d299034315eb3b4efe15015b.png",
                        "mtime": 1586316801,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "邪恶脸"
                        },
                        "flags": {}
                    },
                    {
                        "id": 349,
                        "package_id": 18,
                        "text": "[小绿和小蓝_要哭了]",
                        "url": "http://i0.hdslb.com/bfs/emote/f1c4d2b6cfcf43b985af38da8dc5a4fcdfbcc600.png",
                        "mtime": 1586316801,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "要哭了"
                        },
                        "flags": {}
                    },
                    {
                        "id": 350,
                        "package_id": 18,
                        "text": "[小绿和小蓝_疑问]",
                        "url": "http://i0.hdslb.com/bfs/emote/80d7b4f10cd51dee05c0e307169aab9e9c2ea37e.png",
                        "mtime": 1586316801,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "疑问"
                        },
                        "flags": {}
                    },
                    {
                        "id": 351,
                        "package_id": 18,
                        "text": "[小绿和小蓝_打滚]",
                        "url": "http://i0.hdslb.com/bfs/emote/a0523e55635cf3e09dc286e2042fbbac6b50409c.png",
                        "mtime": 1586316801,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "打滚"
                        },
                        "flags": {}
                    },
                    {
                        "id": 352,
                        "package_id": 18,
                        "text": "[小绿和小蓝_诶]",
                        "url": "http://i0.hdslb.com/bfs/emote/302e36652f710d0e7a8260090eaf63eac3bd28bf.png",
                        "mtime": 1586316801,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "诶"
                        },
                        "flags": {}
                    },
                    {
                        "id": 353,
                        "package_id": 18,
                        "text": "[小绿和小蓝_机智一比]",
                        "url": "http://i0.hdslb.com/bfs/emote/54816a3dd363e620e5d999f1bdf75290645bd35e.png",
                        "mtime": 1586316801,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "机智一比"
                        },
                        "flags": {}
                    },
                    {
                        "id": 354,
                        "package_id": 18,
                        "text": "[小绿和小蓝_喵喵喵]",
                        "url": "http://i0.hdslb.com/bfs/emote/a2019a775d69b7888d663e82b3c29bd0c2281188.png",
                        "mtime": 1586316801,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "喵喵喵"
                        },
                        "flags": {}
                    },
                    {
                        "id": 355,
                        "package_id": 18,
                        "text": "[小绿和小蓝_跑]",
                        "url": "http://i0.hdslb.com/bfs/emote/a73a2d7b884e735ab26ee1f871dd38c499f7b84a.png",
                        "mtime": 1586316801,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "跑"
                        },
                        "flags": {}
                    },
                    {
                        "id": 356,
                        "package_id": 18,
                        "text": "[小绿和小蓝_喂]",
                        "url": "http://i0.hdslb.com/bfs/emote/707e9e784b745fad291ab15d9a31a24c7efa6c1f.png",
                        "mtime": 1586316801,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "喂"
                        },
                        "flags": {}
                    },
                    {
                        "id": 357,
                        "package_id": 18,
                        "text": "[小绿和小蓝_已关机]",
                        "url": "http://i0.hdslb.com/bfs/emote/ea0769dadca17598873306ab8500aab1dd8994bd.png",
                        "mtime": 1586316801,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "已关机"
                        },
                        "flags": {}
                    },
                    {
                        "id": 358,
                        "package_id": 18,
                        "text": "[小绿和小蓝_直接躺平]",
                        "url": "http://i0.hdslb.com/bfs/emote/92a77c53d7a66763d2bd9dab80ddd2afa6cf6387.png",
                        "mtime": 1586316801,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "直接躺平"
                        },
                        "flags": {}
                    },
                    {
                        "id": 359,
                        "package_id": 18,
                        "text": "[小绿和小蓝_呆住]",
                        "url": "http://i0.hdslb.com/bfs/emote/978ab4d7ea39f7428fc945ba68c96b2291d26751.png",
                        "mtime": 1586316801,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "呆住"
                        },
                        "flags": {}
                    },
                    {
                        "id": 360,
                        "package_id": 18,
                        "text": "[小绿和小蓝_哈哈]",
                        "url": "http://i0.hdslb.com/bfs/emote/22144e5e3ea83b587483ea473c2e191284d64b44.png",
                        "mtime": 1586316801,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "哈哈"
                        },
                        "flags": {}
                    },
                    {
                        "id": 361,
                        "package_id": 18,
                        "text": "[小绿和小蓝_喝水]",
                        "url": "http://i0.hdslb.com/bfs/emote/1e5592c8200419164f5730a0de6c30281a5c5a57.png",
                        "mtime": 1586316801,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "喝水"
                        },
                        "flags": {}
                    },
                    {
                        "id": 362,
                        "package_id": 18,
                        "text": "[小绿和小蓝_生气]",
                        "url": "http://i0.hdslb.com/bfs/emote/a9cc35254663a736cbd0e020634765b5f147fcdd.png",
                        "mtime": 1586316801,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "生气"
                        },
                        "flags": {}
                    },
                    {
                        "id": 363,
                        "package_id": 18,
                        "text": "[小绿和小蓝_哇啊啊啊]",
                        "url": "http://i0.hdslb.com/bfs/emote/d67db235a945fdbd0b537aebddb4abc5ffc01184.png",
                        "mtime": 1586316801,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "哇啊啊啊"
                        },
                        "flags": {}
                    },
                    {
                        "id": 364,
                        "package_id": 18,
                        "text": "[小绿和小蓝_一本正经]",
                        "url": "http://i0.hdslb.com/bfs/emote/822a803bf5b340090c9c7053a74aa43c1b527c27.png",
                        "mtime": 1586316801,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "一本正经"
                        },
                        "flags": {}
                    },
                    {
                        "id": 365,
                        "package_id": 18,
                        "text": "[小绿和小蓝_惊呆]",
                        "url": "http://i0.hdslb.com/bfs/emote/15091032588cf3ccf2a7969460fe7705ec00e9c7.png",
                        "mtime": 1586316801,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "惊呆"
                        },
                        "flags": {}
                    },
                    {
                        "id": 366,
                        "package_id": 18,
                        "text": "[小绿和小蓝_开心]",
                        "url": "http://i0.hdslb.com/bfs/emote/08dab1d9250043f97273b211253d0341f92fb0f8.png",
                        "mtime": 1586316801,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "开心"
                        },
                        "flags": {}
                    },
                    {
                        "id": 367,
                        "package_id": 18,
                        "text": "[小绿和小蓝_苦恼]",
                        "url": "http://i0.hdslb.com/bfs/emote/14a0716224369f5211d5c69c249354f11f5026cb.png",
                        "mtime": 1586316801,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "苦恼"
                        },
                        "flags": {}
                    },
                    {
                        "id": 368,
                        "package_id": 18,
                        "text": "[小绿和小蓝_灵光乍现]",
                        "url": "http://i0.hdslb.com/bfs/emote/dc3fae4b42056970f5aa407e8297e96cd2ede2b2.png",
                        "mtime": 1586316801,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "灵光乍现"
                        },
                        "flags": {}
                    },
                    {
                        "id": 369,
                        "package_id": 18,
                        "text": "[小绿和小蓝_思考]",
                        "url": "http://i0.hdslb.com/bfs/emote/aecd0b1b0a5848765f002c857b73092677dec31f.png",
                        "mtime": 1586316801,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "思考"
                        },
                        "flags": {}
                    }
                ],
                "flags": {
                    "added": true
                }
            },
            {
                "id": 93,
                "text": "泠鸢yousa",
                "url": "http://i0.hdslb.com/bfs/emote/5fa6082e098402d16d58c68e441ae76e40befd2c.png",
                "mtime": 1592213522,
                "type": 3,
                "attr": 28,
                "meta": {
                    "size": 2,
                    "item_id": 1907,
                    "item_url": "https://www.bilibili.com/h5/mall/suit/detail?navhide=1&stahide=0&id=1911"
                },
                "emote": [
                    {
                        "id": 2086,
                        "package_id": 93,
                        "text": "[泠鸢yousa_awsl]",
                        "url": "http://i0.hdslb.com/bfs/emote/7663b729161bd4556c2ec318c07791000743eb56.png",
                        "mtime": 1589776042,
                        "type": 3,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "awsl"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2087,
                        "package_id": 93,
                        "text": "[泠鸢yousa_打call]",
                        "url": "http://i0.hdslb.com/bfs/emote/718e9495846db4172eb87d2f7f02015a34d35ea2.png",
                        "mtime": 1589776042,
                        "type": 3,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "打call"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2088,
                        "package_id": 93,
                        "text": "[泠鸢yousa_沉默]",
                        "url": "http://i0.hdslb.com/bfs/emote/5e967cf1669743ed92e9a8ff3e5de6d90ca63d3d.png",
                        "mtime": 1589776042,
                        "type": 3,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "沉默"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2089,
                        "package_id": 93,
                        "text": "[泠鸢yousa_大哭]",
                        "url": "http://i0.hdslb.com/bfs/emote/3f757b147b9b1e201470eae7dac9cc0360172569.png",
                        "mtime": 1589776042,
                        "type": 3,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "大哭"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2090,
                        "package_id": 93,
                        "text": "[泠鸢yousa_干杯]",
                        "url": "http://i0.hdslb.com/bfs/emote/5cf5e14101be845233a222ab1bbdc21c63af04c3.png",
                        "mtime": 1590401422,
                        "type": 3,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "干杯"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2091,
                        "package_id": 93,
                        "text": "[泠鸢yousa_好人卡]",
                        "url": "http://i0.hdslb.com/bfs/emote/e3907b3bb20b18e7ecb11cd86829c9a4ce5b1b2f.png",
                        "mtime": 1589776042,
                        "type": 3,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "好人卡"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2092,
                        "package_id": 93,
                        "text": "[泠鸢yousa_加大力度]",
                        "url": "http://i0.hdslb.com/bfs/emote/a0393a2d4b522f07a319dfd2e91754a3cdff2c48.png",
                        "mtime": 1589776042,
                        "type": 3,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "加大力度"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2093,
                        "package_id": 93,
                        "text": "[泠鸢yousa_滑稽]",
                        "url": "http://i0.hdslb.com/bfs/emote/a8057c0e0579b93c16010a270e261fd0a64034af.png",
                        "mtime": 1589776042,
                        "type": 3,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "滑稽"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2094,
                        "package_id": 93,
                        "text": "[泠鸢yousa_请吃桃]",
                        "url": "http://i0.hdslb.com/bfs/emote/e92276d9d8c28f85f7dbcc0fbbb6ecb3345ce33e.png",
                        "mtime": 1589776042,
                        "type": 3,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "请吃桃"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2095,
                        "package_id": 93,
                        "text": "[泠鸢yousa_惊讶]",
                        "url": "http://i0.hdslb.com/bfs/emote/9fdc2c5b4b970aded56fe2f326bd4d00e849339d.png",
                        "mtime": 1589776042,
                        "type": 3,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "惊讶"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2096,
                        "package_id": 93,
                        "text": "[泠鸢yousa_生气]",
                        "url": "http://i0.hdslb.com/bfs/emote/9e6ba9ff34101e04d3e321cad486f845f892050e.png",
                        "mtime": 1589776042,
                        "type": 3,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "生气"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2097,
                        "package_id": 93,
                        "text": "[泠鸢yousa_贴贴]",
                        "url": "http://i0.hdslb.com/bfs/emote/dbc177d314231add509501ffc6bc7655fca2c10f.png",
                        "mtime": 1589776042,
                        "type": 3,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "贴贴"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2098,
                        "package_id": 93,
                        "text": "[泠鸢yousa_头晕]",
                        "url": "http://i0.hdslb.com/bfs/emote/49830c1c8a1652f7ee9cb854ac7dbf8e378cdcd6.png",
                        "mtime": 1589776042,
                        "type": 3,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "头晕"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2099,
                        "package_id": 93,
                        "text": "[泠鸢yousa_问号]",
                        "url": "http://i0.hdslb.com/bfs/emote/ab7a543233eff83138c3221c86a762ab36bab7bc.png",
                        "mtime": 1589776042,
                        "type": 3,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "问号"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2100,
                        "package_id": 93,
                        "text": "[泠鸢yousa_真棒]",
                        "url": "http://i0.hdslb.com/bfs/emote/02ea49543a3ac52feee185c156ab08fb2bfdd89e.png",
                        "mtime": 1589776042,
                        "type": 3,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "真棒"
                        },
                        "flags": {}
                    }
                ],
                "flags": {
                    "added": true
                }
            },
            {
                "id": 3,
                "text": "喵",
                "url": "http://i0.hdslb.com/bfs/emote/eb46e78c9d86ccbe9842f0235c7cb4f4e0e80a57.png",
                "mtime": 1592205544,
                "type": 1,
                "attr": 28,
                "meta": {
                    "size": 1,
                    "item_id": 960
                },
                "emote": [
                    {
                        "id": 83,
                        "package_id": 3,
                        "text": "[酷仔]",
                        "url": "http://i0.hdslb.com/bfs/emote/390100ada4659b4516984d386499fb22c0025084.png",
                        "mtime": 1586922026,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 84,
                        "package_id": 3,
                        "text": "[赞了]",
                        "url": "http://i0.hdslb.com/bfs/emote/40ded585bbd6328fc390076b5de224fd38b46793.png",
                        "mtime": 1586922026,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 85,
                        "package_id": 3,
                        "text": "[暗中观察]",
                        "url": "http://i0.hdslb.com/bfs/emote/80a752e0718db211e4135b4ba821813f4c151e2c.png",
                        "mtime": 1586922026,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 86,
                        "package_id": 3,
                        "text": "[么么哒]",
                        "url": "http://i0.hdslb.com/bfs/emote/2f418440776e88605ddc426eac898202c1f5fa4d.png",
                        "mtime": 1586922026,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 87,
                        "package_id": 3,
                        "text": "[哭哭]",
                        "url": "http://i0.hdslb.com/bfs/emote/cbf36e518f1d50618f6d054aa69993ecc339fe8f.png",
                        "mtime": 1586922026,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 88,
                        "package_id": 3,
                        "text": "[饿了]",
                        "url": "http://i0.hdslb.com/bfs/emote/ff91ea94adf7c5b04db305c18d17b444f7360059.png",
                        "mtime": 1586922026,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 89,
                        "package_id": 3,
                        "text": "[问号]",
                        "url": "http://i0.hdslb.com/bfs/emote/a905b58b32016a1f0ff7d9193b62749f0d491707.png",
                        "mtime": 1586922026,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 90,
                        "package_id": 3,
                        "text": "[嘿嘿]",
                        "url": "http://i0.hdslb.com/bfs/emote/8a15a45e228179f912ce11dbd5478f6ad54e9854.png",
                        "mtime": 1586922026,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 91,
                        "package_id": 3,
                        "text": "[卖萌]",
                        "url": "http://i0.hdslb.com/bfs/emote/a0d37b43d1e786ba811d9b0ae590c479dcce6c44.png",
                        "mtime": 1586922026,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    },
                    {
                        "id": 92,
                        "package_id": 3,
                        "text": "[喵]",
                        "url": "http://i0.hdslb.com/bfs/emote/eb46e78c9d86ccbe9842f0235c7cb4f4e0e80a57.png",
                        "mtime": 1586922026,
                        "type": 1,
                        "attr": 0,
                        "meta": {
                            "size": 1
                        },
                        "flags": {}
                    }
                ],
                "flags": {
                    "added": true
                }
            },
            {
                "id": 84,
                "text": "崩坏3",
                "url": "http://i0.hdslb.com/bfs/emote/6581762537c911217b7a877a959133addabb5b89.png",
                "mtime": 1592213457,
                "type": 2,
                "attr": 28,
                "meta": {
                    "size": 2,
                    "item_id": 1564
                },
                "emote": [
                    {
                        "id": 1907,
                        "package_id": 84,
                        "text": "[崩坏3_点赞]",
                        "url": "http://i0.hdslb.com/bfs/emote/055a130541fe95e20aa541db5a5a48d0cbc728b6.png",
                        "mtime": 1581653411,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "点赞"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1908,
                        "package_id": 84,
                        "text": "[崩坏3_入欧]",
                        "url": "http://i0.hdslb.com/bfs/emote/5d532eab104881e7dd63be1083a78ab36878c3b4.png",
                        "mtime": 1581653411,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "入欧"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1909,
                        "package_id": 84,
                        "text": "[崩坏3_脱非]",
                        "url": "http://i0.hdslb.com/bfs/emote/ac31b7219032b6e714c189d65a669ca3ca2d3e77.png",
                        "mtime": 1581653411,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "脱非"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1910,
                        "package_id": 84,
                        "text": "[崩坏3_快乐]",
                        "url": "http://i0.hdslb.com/bfs/emote/a3ec46f1255dbf96d413231862399b939dc2110e.png",
                        "mtime": 1581653411,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "快乐"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1911,
                        "package_id": 84,
                        "text": "[崩坏3_注入灵魂]",
                        "url": "http://i0.hdslb.com/bfs/emote/5bf261f6fb91463e1ff1c80dd0fefd6bcd31aedf.png",
                        "mtime": 1581653411,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "注入灵魂"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1912,
                        "package_id": 84,
                        "text": "[崩坏3_危险]",
                        "url": "http://i0.hdslb.com/bfs/emote/3a6af29282b6e09ce7881c9aebc187d03268b25f.png",
                        "mtime": 1581653411,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "危险"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1913,
                        "package_id": 84,
                        "text": "[崩坏3_吃瓜]",
                        "url": "http://i0.hdslb.com/bfs/emote/9ecead2805adf05a308e1093fb8d4941d0366189.png",
                        "mtime": 1581653411,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "吃瓜"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1914,
                        "package_id": 84,
                        "text": "[崩坏3_糖葫芦]",
                        "url": "http://i0.hdslb.com/bfs/emote/f54e160beaf3f7b55a87d0da9a6eccefc7bd70d6.png",
                        "mtime": 1581653411,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "糖葫芦"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1915,
                        "package_id": 84,
                        "text": "[崩坏3_路过]",
                        "url": "http://i0.hdslb.com/bfs/emote/13a7f9e81f4005c29466e8d65eabbf3167902f9d.png",
                        "mtime": 1581653411,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "路过"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1916,
                        "package_id": 84,
                        "text": "[崩坏3_魔法少女]",
                        "url": "http://i0.hdslb.com/bfs/emote/da063804b5b8d44c288dd2c45f472741c00c8625.png",
                        "mtime": 1581653411,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "魔法少女"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1917,
                        "package_id": 84,
                        "text": "[崩坏3_特效]",
                        "url": "http://i0.hdslb.com/bfs/emote/a1bb1caf129b5e28f2c331667f9e38808050e8a8.png",
                        "mtime": 1581653411,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "特效"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1918,
                        "package_id": 84,
                        "text": "[崩坏3_唢呐]",
                        "url": "http://i0.hdslb.com/bfs/emote/032301ad0e61395a266e7f9b4ebcf83bd2acca03.png",
                        "mtime": 1581653411,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "唢呐"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1919,
                        "package_id": 84,
                        "text": "[崩坏3_琵琶]",
                        "url": "http://i0.hdslb.com/bfs/emote/13c3e61eec3a61a3e0ae2883a488ce9b45cddecc.png",
                        "mtime": 1581653411,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "琵琶"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1920,
                        "package_id": 84,
                        "text": "[崩坏3_二胡]",
                        "url": "http://i0.hdslb.com/bfs/emote/b2e3acfba545c61c334eacf5a5b7694e071d834f.png",
                        "mtime": 1581653411,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "二胡"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1921,
                        "package_id": 84,
                        "text": "[崩坏3_笛子]",
                        "url": "http://i0.hdslb.com/bfs/emote/3dae79d5ce1d826d6d16404dff7bf22474c7015b.png",
                        "mtime": 1581653411,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "笛子"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1922,
                        "package_id": 84,
                        "text": "[崩坏3_镲]",
                        "url": "http://i0.hdslb.com/bfs/emote/dcce1ad4d53a25c52946821c0d3a4b7dd80e5a42.png",
                        "mtime": 1581653411,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "镲"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1923,
                        "package_id": 84,
                        "text": "[崩坏3_红包]",
                        "url": "http://i0.hdslb.com/bfs/emote/4bd80539d828ad6894ccb099b5b04769820d49d6.png",
                        "mtime": 1581653411,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "红包"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1924,
                        "package_id": 84,
                        "text": "[崩坏3_谈话]",
                        "url": "http://i0.hdslb.com/bfs/emote/4794f82d166b1f8bfae7783859913e03fe42ae81.png",
                        "mtime": 1581653411,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "谈话"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1925,
                        "package_id": 84,
                        "text": "[崩坏3_无辜]",
                        "url": "http://i0.hdslb.com/bfs/emote/4e1f4e9a375beaa4e93d057a4e285c924635235f.png",
                        "mtime": 1581653411,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "无辜"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1926,
                        "package_id": 84,
                        "text": "[崩坏3_星星眼]",
                        "url": "http://i0.hdslb.com/bfs/emote/b5fffeead2dc05c7f902f1c7136178c6a63e508a.png",
                        "mtime": 1581653411,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "星星眼"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1927,
                        "package_id": 84,
                        "text": "[崩坏3_微笑]",
                        "url": "http://i0.hdslb.com/bfs/emote/c2c6c0604af985b745322954814863e47f6fb6d5.png",
                        "mtime": 1581653411,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "微笑"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1928,
                        "package_id": 84,
                        "text": "[崩坏3_开心]",
                        "url": "http://i0.hdslb.com/bfs/emote/3657a825b87ec063d6e2a3c201da2056e45db938.png",
                        "mtime": 1581653411,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "开心"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1929,
                        "package_id": 84,
                        "text": "[崩坏3_幸福]",
                        "url": "http://i0.hdslb.com/bfs/emote/714cc90d3485a003f53eecec336bea8a0b2dc12d.png",
                        "mtime": 1581653411,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "幸福"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1930,
                        "package_id": 84,
                        "text": "[崩坏3_吃]",
                        "url": "http://i0.hdslb.com/bfs/emote/c26ae762270b756b68a7f5c63d43078e874fbead.png",
                        "mtime": 1581653411,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "吃"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1931,
                        "package_id": 84,
                        "text": "[崩坏3_口水]",
                        "url": "http://i0.hdslb.com/bfs/emote/7a66d7e1902b766a2b930009687be5171018f1ff.png",
                        "mtime": 1581653411,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "口水"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1932,
                        "package_id": 84,
                        "text": "[崩坏3_惊]",
                        "url": "http://i0.hdslb.com/bfs/emote/672ab0cac8e29270a0ea1788df5711ce716b6942.png",
                        "mtime": 1581653411,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "惊"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1933,
                        "package_id": 84,
                        "text": "[崩坏3_哭哭]",
                        "url": "http://i0.hdslb.com/bfs/emote/f432d349d44aad9873da18b27a6367c3ea7cfebc.png",
                        "mtime": 1581653411,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "哭哭"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1934,
                        "package_id": 84,
                        "text": "[崩坏3_纠结]",
                        "url": "http://i0.hdslb.com/bfs/emote/864ff2ef1546534f5b53b279332e3950a86cf008.png",
                        "mtime": 1581653411,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "纠结"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1935,
                        "package_id": 84,
                        "text": "[崩坏3_疑问]",
                        "url": "http://i0.hdslb.com/bfs/emote/bdda506f56f5a42e365b6f2f8d2128f799f8310e.png",
                        "mtime": 1581653411,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "疑问"
                        },
                        "flags": {}
                    },
                    {
                        "id": 1936,
                        "package_id": 84,
                        "text": "[崩坏3_有主意了]",
                        "url": "http://i0.hdslb.com/bfs/emote/38676ebb4c51fdda6302a5cb131ae94d35be4f8b.png",
                        "mtime": 1581653411,
                        "type": 2,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "有主意了"
                        },
                        "flags": {}
                    }
                ],
                "flags": {
                    "added": true
                }
            }
        ]
    }
}
```



## 获取指定的表情包明细

> http://api.bilibili.com/x/emote/package 

*方式：GET*

**url参数：**

| 参数名   | 类型 | 内容     | 必要性 | 备注                                                       |
| -------- | ---- | -------- | ------ | ---------------------------------------------------------- |
| business | str  | 使用场景 | 必要   | 用于选择不同的表情包<br />reply：评论区<br />dynamic：动态 |
| ids      | nums | 表情包ID | 必要   |                                                            |

**json回复：**

根对象：

| 字段    | 类型                          | 内容     | 备注                        |
| ------- | ----------------------------- | -------- | --------------------------- |
| code    | num                           | 返回值   | 0：成功<br />-400：请求错误 |
| message | str                           | 错误信息 | 默认为0                     |
| ttl     | num                           | 1        | **作用尚不明确**            |
| data    | 有效时：obj<br />无效时：null | 信息本体 |                             |

`data`对象：

| 字段     | 类型  | 内容   | 备注 |
| -------- | ----- | ------ | ---- |
| packages | array | 表情包 |      |

`data`中的`packages`数组：

| 项   | 类型 | 内容        | 备注 |
| ---- | ---- | ----------- | ---- |
| 0    | obj  | 表情包1     |      |
| n    | obj  | 表情包(n+1) |      |
| ……   | obj  | ……          | ……   |

`packages`数组中的对象：

| 字段  | 类型  | 内容              | 备注                                                     |
| ----- | ----- | ----------------- | -------------------------------------------------------- |
| id    | num   | 表情包ID          |                                                          |
| text  | str   | 表情包名称        |                                                          |
| url   | str   | 表情包标志图片url |                                                          |
| mtime | num   | 创建时间          | 时间戳                                                   |
| type  | num   | 表情包类型        | 1：普通<br />2：会员专属<br />3：购买所得<br />4：颜文字 |
| attr  | num   | ？？？            | **作用尚不明确**                                         |
| meta  | obj   | 属性信息          |                                                          |
| emote | array | 表情列表          |                                                          |
| flags | obj   | 是否添加标志      |                                                          |

`packages`数组中的对象中的`flags`对象：

| 字段  | 类型 | 内容       | 备注                                                         |
| ----- | ---- | ---------- | ------------------------------------------------------------ |
| added | bool | 是否已添加 | true：已添加<br />false：未添加<br />需要登录（SESSDATA）<br />否则恒为false |

`packages`数组中的对象中的`meta`对象：

| 字段     | 类型 | 内容            | 备注             |
| -------- | ---- | --------------- | ---------------- |
| size     | num  | 表情尺寸信息    | 1：小<br />2：大 |
| item_id  | num  | 购买物品ID      |                  |
| item_url | num  | 购买物品页面url | 无则无此项       |

`packages`数组中的对象中的`emote`数组：

| 项   | 类型 | 内容      | 备注 |
| ---- | ---- | --------- | ---- |
| 0    | obj  | 表情1     |      |
| n    | obj  | 表情(n+1) |      |
| ……   | obj  | ……        | ……   |

`emote`数组中的对象：

| 字段       | 类型 | 内容        | 备注                                                     |
| ---------- | ---- | ----------- | -------------------------------------------------------- |
| id         | num  | 表情ID      |                                                          |
| package_id | num  | 表情包ID    |                                                          |
| text       | str  | 表情转义符  | 颜文字时为该字串                                         |
| url        | str  | 表情图片url | 颜文字时为该字串                                         |
| mtime      | num  | 创建时间    | 时间戳                                                   |
| type       | num  | 表情类型    | 1：普通<br />2：会员专属<br />3：购买所得<br />4：颜文字 |
| attr       | num  | ？？？      | **作用尚不明确**                                         |
| meta       | obj  | 属性信息    |                                                          |
| flags      | obj  | 禁用标志    | 无则为空                                                 |

`emote`数组中的对象中的`flags`对象：

| 字段      | 类型 | 内容       | 备注                                                   |
| --------- | ---- | ---------- | ------------------------------------------------------ |
| no_access | bool | 是否为禁用 | true：禁用<br />需要登录（SESSDATA）<br />否则恒为true |

`emote`数组中的对象中的`meta`对象：

| 字段  | 类型 | 内容         | 备注             |
| ----- | ---- | ------------ | ---------------- |
| size  | num  | 表情尺寸信息 | 1：小<br />2：大 |
| alias | str  | 简写名       | 无则无此项       |

**示例：**

获取表情包ID为`93`的表情包明细

 http://api.bilibili.com/x/emote/package?business=reply&ids=93

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "packages": [
            {
                "id": 93,
                "text": "泠鸢yousa",
                "url": "http://i0.hdslb.com/bfs/emote/5fa6082e098402d16d58c68e441ae76e40befd2c.png",
                "mtime": 1592213522,
                "type": 3,
                "attr": 28,
                "meta": {
                    "size": 2,
                    "item_id": 1907,
                    "item_url": "https://www.bilibili.com/h5/mall/suit/detail?navhide=1&stahide=0&id=1911"
                },
                "emote": [
                    {
                        "id": 2086,
                        "package_id": 93,
                        "text": "[泠鸢yousa_awsl]",
                        "url": "http://i0.hdslb.com/bfs/emote/7663b729161bd4556c2ec318c07791000743eb56.png",
                        "mtime": 1589776042,
                        "type": 3,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "awsl"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2087,
                        "package_id": 93,
                        "text": "[泠鸢yousa_打call]",
                        "url": "http://i0.hdslb.com/bfs/emote/718e9495846db4172eb87d2f7f02015a34d35ea2.png",
                        "mtime": 1589776042,
                        "type": 3,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "打call"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2088,
                        "package_id": 93,
                        "text": "[泠鸢yousa_沉默]",
                        "url": "http://i0.hdslb.com/bfs/emote/5e967cf1669743ed92e9a8ff3e5de6d90ca63d3d.png",
                        "mtime": 1589776042,
                        "type": 3,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "沉默"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2089,
                        "package_id": 93,
                        "text": "[泠鸢yousa_大哭]",
                        "url": "http://i0.hdslb.com/bfs/emote/3f757b147b9b1e201470eae7dac9cc0360172569.png",
                        "mtime": 1589776042,
                        "type": 3,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "大哭"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2090,
                        "package_id": 93,
                        "text": "[泠鸢yousa_干杯]",
                        "url": "http://i0.hdslb.com/bfs/emote/5cf5e14101be845233a222ab1bbdc21c63af04c3.png",
                        "mtime": 1590401422,
                        "type": 3,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "干杯"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2091,
                        "package_id": 93,
                        "text": "[泠鸢yousa_好人卡]",
                        "url": "http://i0.hdslb.com/bfs/emote/e3907b3bb20b18e7ecb11cd86829c9a4ce5b1b2f.png",
                        "mtime": 1589776042,
                        "type": 3,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "好人卡"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2092,
                        "package_id": 93,
                        "text": "[泠鸢yousa_加大力度]",
                        "url": "http://i0.hdslb.com/bfs/emote/a0393a2d4b522f07a319dfd2e91754a3cdff2c48.png",
                        "mtime": 1589776042,
                        "type": 3,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "加大力度"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2093,
                        "package_id": 93,
                        "text": "[泠鸢yousa_滑稽]",
                        "url": "http://i0.hdslb.com/bfs/emote/a8057c0e0579b93c16010a270e261fd0a64034af.png",
                        "mtime": 1589776042,
                        "type": 3,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "滑稽"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2094,
                        "package_id": 93,
                        "text": "[泠鸢yousa_请吃桃]",
                        "url": "http://i0.hdslb.com/bfs/emote/e92276d9d8c28f85f7dbcc0fbbb6ecb3345ce33e.png",
                        "mtime": 1589776042,
                        "type": 3,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "请吃桃"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2095,
                        "package_id": 93,
                        "text": "[泠鸢yousa_惊讶]",
                        "url": "http://i0.hdslb.com/bfs/emote/9fdc2c5b4b970aded56fe2f326bd4d00e849339d.png",
                        "mtime": 1589776042,
                        "type": 3,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "惊讶"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2096,
                        "package_id": 93,
                        "text": "[泠鸢yousa_生气]",
                        "url": "http://i0.hdslb.com/bfs/emote/9e6ba9ff34101e04d3e321cad486f845f892050e.png",
                        "mtime": 1589776042,
                        "type": 3,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "生气"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2097,
                        "package_id": 93,
                        "text": "[泠鸢yousa_贴贴]",
                        "url": "http://i0.hdslb.com/bfs/emote/dbc177d314231add509501ffc6bc7655fca2c10f.png",
                        "mtime": 1589776042,
                        "type": 3,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "贴贴"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2098,
                        "package_id": 93,
                        "text": "[泠鸢yousa_头晕]",
                        "url": "http://i0.hdslb.com/bfs/emote/49830c1c8a1652f7ee9cb854ac7dbf8e378cdcd6.png",
                        "mtime": 1589776042,
                        "type": 3,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "头晕"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2099,
                        "package_id": 93,
                        "text": "[泠鸢yousa_问号]",
                        "url": "http://i0.hdslb.com/bfs/emote/ab7a543233eff83138c3221c86a762ab36bab7bc.png",
                        "mtime": 1589776042,
                        "type": 3,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "问号"
                        },
                        "flags": {}
                    },
                    {
                        "id": 2100,
                        "package_id": 93,
                        "text": "[泠鸢yousa_真棒]",
                        "url": "http://i0.hdslb.com/bfs/emote/02ea49543a3ac52feee185c156ab08fb2bfdd89e.png",
                        "mtime": 1589776042,
                        "type": 3,
                        "attr": 0,
                        "meta": {
                            "size": 2,
                            "alias": "真棒"
                        },
                        "flags": {}
                    }
                ],
                "flags": {
                    "added": true
                }
            }
        ]
    }
}
```

