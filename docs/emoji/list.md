# 表情列表

## 获取我的表情列表

> https://api.bilibili.com/x/emote/user/panel/web

*请求方式：GET*

认证方式：Cookie（SESSDATA）

使用登录（Cookie）进行会员专属及已购买表情包的分发，否则全为免费表情包

**url参数：**

| 参数名   | 类型 | 内容     | 必要性 | 备注                             |
| -------- | ---- | -------- | ------ | -------------------------------- |
| business | str  | 使用场景 | 必要   | reply：评论区<br />dynamic：动态 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        |                             |
| data    | obj  | 信息本体 |                             |

`data`对象：

| 字段     | 类型  | 内容   | 备注 |
| -------- | ----- | ------ | ---- |
| packages | array | 表情包 |      |

`data`中的`packages`数组：

| 项   | 类型 | 内容        | 备注           |
| ---- | ---- | ----------- | -------------- |
| 0    | obj  | 表情包1     | **详情见附表** |
| n    | obj  | 表情包(n+1) | **详情见附表** |
| ……   | obj  | ……          | ……             |

**示例：**

```shell
curl -G 'https://api.bilibili.com/x/emote/user/panel/web' \
--data-urlencode 'business=reply' \
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
                    …………
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
                    …………
            },
            …………
        ]
    }
}
```

</details>

## 获取指定的表情包明细

> https://api.bilibili.com/x/emote/package 

*请求方式：GET*

**url参数：**

| 参数名   | 类型 | 内容     | 必要性 | 备注                             |
| -------- | ---- | -------- | ------ | -------------------------------- |
| business | str  | 使用场景 | 必要   | reply：评论区<br />dynamic：动态 |
| ids      | nums | 表情包id | 必要   | id之间以`,`隔开                 |

**json回复：**

根对象：

| 字段    | 类型                          | 内容     | 备注                        |
| ------- | ----------------------------- | -------- | --------------------------- |
| code    | num                           | 返回值   | 0：成功<br />-400：请求错误 |
| message | str                           | 错误信息 | 默认为0                     |
| ttl     | num                           | 1        |                             |
| data    | 有效时：obj<br />无效时：null | 信息本体 |                             |

`data`对象：

| 字段     | 类型  | 内容   | 备注 |
| -------- | ----- | ------ | ---- |
| packages | array | 表情包 |      |

`data`中的`packages`数组：

| 项   | 类型 | 内容        | 备注           |
| ---- | ---- | ----------- | -------------- |
| 0    | obj  | 表情包1     | **详情见附表** |
| n    | obj  | 表情包(n+1) | **详情见附表** |
| ……   | obj  | ……          | ……             |

**示例：**

获取表情包id为`93`的表情包明细

```shell
curl -G 'https://api.bilibili.com/x/emote/package' \
--data-urlencode 'ids=93' \
--data-urlencode 'business=reply'
```

<details>
<summary>查看响应示例：</summary>

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

</details>

## 获取所有表情包列表

> https://api.bilibili.com/x/emote/setting/panel 

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名   | 类型 | 内容     | 必要性 | 备注                             |
| -------- | ---- | -------- | ------ | -------------------------------- |
| business | str  | 使用场景 | 必要   | reply：评论区<br />dynamic：动态 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        |                                                   |
| data    | obj  | 信息本体 |                                                   |

`data`对象：

| 字段                | 类型  | 内容             | 备注 |
| ------------------- | ----- | ---------------- | ---- |
| user_panel_packages | array | 用户拥有的表情包 |      |
| all_packages        | array | 所有表情包       |      |
| mall                | obj   | 商城页面         |      |

`data`对象中的`user_panel_packages`数组：

| 项   | 类型 | 内容                  | 备注           |
| ---- | ---- | --------------------- | -------------- |
| 0    | obj  | 用户拥有的表情包1     | **详情见附表** |
| n    | obj  | 用户拥有的表情包(n+1) | **详情见附表** |
| ……   | obj  | ……                    | ……             |

`data`对象中的`all_packages`数组：

| 项   | 类型 | 内容            | 备注           |
| ---- | ---- | --------------- | -------------- |
| 0    | obj  | 所有表情包1     | **详情见附表** |
| n    | obj  | 所有表情包(n+1) | **详情见附表** |
| ……   | obj  | ……              | ……             |

`data`对象中的`mall`对象：

| 字段  | 类型 | 内容        | 备注 |
| ----- | ---- | ----------- | ---- |
| title | str  | 商城名称    |      |
| url   | str  | 商城页面url |      |

**示例：**

```shell
curl -G 'https://api.bilibili.com/x/emote/setting/panel' \
--data-urlencode 'business=reply' \
-b 'SESSDATA=xxx'
```

**限于篇幅，代码块示例略**

## 附表-表情包对象

| 字段  | 类型  | 内容              | 备注                                                     |
| ----- | ----- | ----------------- | -------------------------------------------------------- |
| id    | num   | 表情包id          |                                                          |
| text  | str   | 表情包名称        |                                                          |
| url   | str   | 表情包标志图片url |                                                          |
| mtime | num   | 创建时间          | 时间戳                                                   |
| type  | num   | 表情包类型        | 1：普通<br />2：会员专属<br />3：购买所得<br />4：颜文字 |
| attr  | num   | ？？？            | **作用尚不明确**                                         |
| meta  | obj   | 属性信息          |                                                          |
| emote | array | 表情列表          |                                                          |
| flags | obj   | 是否添加标志      |                                                          |

`表情包对象`中的`flags`对象：

| 字段  | 类型 | 内容       | 备注                                                         |
| ----- | ---- | ---------- | ------------------------------------------------------------ |
| added | bool | 是否已添加 | true：已添加<br />false：未添加<br />需要登录（SESSDATA）<br />否则恒为false |

`表情包对象`中的`meta`对象：

| 字段     | 类型 | 内容            | 备注             |
| -------- | ---- | --------------- | ---------------- |
| size     | num  | 表情尺寸信息    | 1：小<br />2：大 |
| item_id  | num  | 购买物品id      |                  |
| item_url | num  | 购买物品页面url | 无则无此项       |

`表情包对象`中的`emote`数组：

| 项   | 类型 | 内容      | 备注 |
| ---- | ---- | --------- | ---- |
| 0    | obj  | 表情1     |      |
| n    | obj  | 表情(n+1) |      |
| ……   | obj  | ……        | ……   |

`emote`数组中的对象：

| 字段       | 类型 | 内容        | 备注                                                     |
| ---------- | ---- | ----------- | -------------------------------------------------------- |
| id         | num  | 表情id      |                                                          |
| package_id | num  | 表情包id    |                                                          |
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
