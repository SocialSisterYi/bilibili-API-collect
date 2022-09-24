# 默认搜索&热搜

- [获取默认搜索内容（web端）](#获取默认搜索内容web端)
- [获取热搜列表（web端）](#获取热搜列表web端)

---

## 获取默认搜索内容（web端）

> http://api.bilibili.com/x/web-interface/search/default

*请求方式：GET*

默认搜索为搜索框中默认填充内容，用于官方推荐内容，若不输入点击搜索按钮跳转为`url`中的链接

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注    |
| ------- | ---- | -------- | ------- |
| code    | num  | 返回值   | 0：成功 |
| message | str  | 错误信息 | 默认为0 |
| ttl     | num  | 1        |         |
| data    | obj  | 信息本体 |         |

`data`对象：

| 字段       | 类型 | 内容            | 备注           |
| ---------- | ---- | --------------- | -------------- |
| seid       | str  | 搜索seid        |                |
| id         | num  | 默认搜索id      |                |
| type       | num  | 0               |                |
| show_name  | str  | 显示文字        |                |
| name       | str  | 空              |                |
| goto_type  | num  | 跳转类型        | 1：视频        |
| goto_value | str  | 搜索目标id      | 视频：稿件avid |
| url        | str  | 搜索目标跳转url |                |

**示例：**

```shell
curl 'http://api.bilibili.com/x/web-interface/search/default'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "seid": "17607543598496143098",
        "id": 3296036255232726331,
        "type": 0,
        "show_name": "歪果仁在中国做模特能赚多少钱？",
        "name": "",
        "goto_type": 1,
        "goto_value": "243920322",
        "url": "https://www.bilibili.com/video/BV1Tv411q7gx"
    }
}
```

</details>

## 获取热搜列表（web端）

> http://s.search.bilibili.com/main/hotword

*请求方式：GET*

榜单每隔固定时间统计一次，请求后返回搜索前20的关键词

带有转义

**json回复：**

根对象：

| 字段      | 类型  | 内容         | 备注          |
| --------- | ----- | ------------ | ------------- |
| exp_str   | str   | ？？？       |               |
| code      | num   | 返回值       | 0：成功       |
| cost      | obj   | 详细搜索用时 | 大概是吧？    |
| seid      | str   | 搜索seid     |               |
| timestamp | num   | 榜单统计时间 | 时间戳        |
| message   | str   | 错误信息     | 默认为success |
| list      | array | 热搜列表     |               |

`list`数组：

| 项   | 类型 | 内容            | 备注         |
| ---- | ---- | --------------- | ------------ |
| 0    | obj  | 榜单第1名       |              |
| n    | obj  | 榜单第（n+1）名 | 按照名次顺序 |
| 19   | obj  | 榜单第20名      | 最后一项     |

`list`数组中的对象：

| 字段       | 类型 | 内容     | 备注                          |
| ---------- | ---- | -------- | ----------------------------- |
| status     | str  | 空       |                               |
| keyword    | str  | 关键词   |                               |
| goto_type  | num  | 0        |                               |
| pos        | num  | 名次     | 1-20                          |
| word_type  | num  | 条目属性 | 1：正常<br />4：新<br />5：热 |
| id         | num  | 名次     | 1-20                          |
| goto_value | str  | 空       |                               |
| name_type  | str  | 空       |                               |
| icon       | str  | 图标url  |                               |

**示例：**

```shell
curl 'http://s.search.bilibili.com/main/hotword'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "exp_str": "8104#8200#8300#8401#8500#5502#6699",
    "code": 0,
    "cost": {
        "reas_request": "0.001895",
        "params_check": "0.000127",
        "reas_response_format": "0.000098",
        "deserialize_response": "0.000080",
        "reas_request_format": "0.000076",
        "total": "0.002479",
        "main_handler": "0.002252"
    },
    "seid": "9318821020548476185",
    "timestamp": 1596034742,
    "message": "success",
    "list": [
        {
            "status": "",
            "keyword": "特朗普",
            "goto_type": 0,
            "pos": 1,
            "word_type": 1,
            "id": 1,
            "goto_value": "",
            "name_type": "",
            "icon": ""
        },
        {
            "status": "",
            "keyword": "武汉协和医院",
            "goto_type": 0,
            "pos": 2,
            "word_type": 5,
            "id": 2,
            "goto_value": "",
            "name_type": "",
            "icon": "http://i0.hdslb.com/bfs/feed-admin/e9e7a2d8497d4063421b685e72680bf1cfb99a0d.png"
        },
        {
            "status": "",
            "keyword": "元龙",
            "goto_type": 0,
            "pos": 3,
            "word_type": 5,
            "id": 3,
            "goto_value": "",
            "name_type": "",
            "icon": "http://i0.hdslb.com/bfs/feed-admin/e9e7a2d8497d4063421b685e72680bf1cfb99a0d.png"
        },
        {
            "status": "",
            "keyword": "周深",
            "goto_type": 0,
            "pos": 4,
            "word_type": 4,
            "id": 4,
            "goto_value": "",
            "name_type": "",
            "icon": "http://i0.hdslb.com/bfs/feed-admin/4d579fb61f9655316582db193118bba3a721eec0.png"
        },
        {
            "status": "",
            "keyword": "徐大sao",
            "goto_type": 0,
            "pos": 5,
            "word_type": 4,
            "id": 5,
            "goto_value": "",
            "name_type": "",
            "icon": "http://i0.hdslb.com/bfs/feed-admin/4d579fb61f9655316582db193118bba3a721eec0.png"
        },
        {
            "status": "",
            "keyword": "FPX",
            "goto_type": 0,
            "pos": 6,
            "word_type": 4,
            "id": 6,
            "goto_value": "",
            "name_type": "",
            "icon": "http://i0.hdslb.com/bfs/feed-admin/4d579fb61f9655316582db193118bba3a721eec0.png"
        },
        {
            "status": "",
            "keyword": "BLACKPINK",
            "goto_type": 0,
            "pos": 7,
            "word_type": 1,
            "id": 7,
            "goto_value": "",
            "name_type": "",
            "icon": ""
        },
        {
            "status": "",
            "keyword": "沈力",
            "goto_type": 0,
            "pos": 8,
            "word_type": 1,
            "id": 8,
            "goto_value": "",
            "name_type": "",
            "icon": ""
        },
        {
            "status": "",
            "keyword": "老番茄",
            "goto_type": 0,
            "pos": 9,
            "word_type": 1,
            "id": 9,
            "goto_value": "",
            "name_type": "",
            "icon": ""
        },
        {
            "status": "",
            "keyword": "JDG",
            "goto_type": 0,
            "pos": 10,
            "word_type": 4,
            "id": 10,
            "goto_value": "",
            "name_type": "",
            "icon": "http://i0.hdslb.com/bfs/feed-admin/4d579fb61f9655316582db193118bba3a721eec0.png"
        },
        {
            "status": "",
            "keyword": "荒废工厂",
            "goto_type": 0,
            "pos": 11,
            "word_type": 1,
            "id": 11,
            "goto_value": "",
            "name_type": "",
            "icon": ""
        },
        {
            "status": "",
            "keyword": "活着",
            "goto_type": 0,
            "pos": 12,
            "word_type": 1,
            "id": 12,
            "goto_value": "",
            "name_type": "",
            "icon": ""
        },
        {
            "status": "",
            "keyword": "明日方舟",
            "goto_type": 0,
            "pos": 13,
            "word_type": 1,
            "id": 13,
            "goto_value": "",
            "name_type": "",
            "icon": ""
        },
        {
            "status": "",
            "keyword": "创造营2020",
            "goto_type": 0,
            "pos": 14,
            "word_type": 1,
            "id": 14,
            "goto_value": "",
            "name_type": "",
            "icon": ""
        },
        {
            "status": "",
            "keyword": "黑人抬棺",
            "goto_type": 0,
            "pos": 15,
            "word_type": 1,
            "id": 15,
            "goto_value": "",
            "name_type": "",
            "icon": ""
        },
        {
            "status": "",
            "keyword": "名侦探柯南",
            "goto_type": 0,
            "pos": 16,
            "word_type": 1,
            "id": 16,
            "goto_value": "",
            "name_type": "",
            "icon": ""
        },
        {
            "status": "",
            "keyword": "fpx",
            "goto_type": 0,
            "pos": 17,
            "word_type": 1,
            "id": 17,
            "goto_value": "",
            "name_type": "",
            "icon": ""
        },
        {
            "status": "",
            "keyword": "csgo",
            "goto_type": 0,
            "pos": 18,
            "word_type": 1,
            "id": 18,
            "goto_value": "",
            "name_type": "",
            "icon": ""
        },
        {
            "status": "",
            "keyword": "正道的光",
            "goto_type": 0,
            "pos": 19,
            "word_type": 1,
            "id": 19,
            "goto_value": "",
            "name_type": "",
            "icon": ""
        },
        {
            "status": "",
            "keyword": "bts",
            "goto_type": 0,
            "pos": 20,
            "word_type": 1,
            "id": 20,
            "goto_value": "",
            "name_type": "",
            "icon": ""
        }
    ]
}
```

</details>