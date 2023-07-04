# 搜索建议

## 获取搜索建议关键词（web端）

> https://s.search.bilibili.com/main/suggest

*请求方式：GET*

搜索建议最多提供10个候选关键词

搜索建议内容可为任意语言（中 英 日等....），中文拼音支持全拼联想词

**url参数：**

| 参数名    | 类型 | 内容                   | 必要性 | 备注                     |
| --------- | ---- | ---------------------- | ------ | ------------------------ |
| term      | str  | 需要获得建议的输入内容 | 必要   |                          |
| main_ver  | str  | v1                     | 非必要 | 固定为`v1`               |
| highlight | str  | 任意                   | 非必要 | 有此项开启关键词高亮标签 |

**json回复：**

根对象：

| 字段        | 类型 | 内容         | 备注         |
| ----------- | ---- | ------------ | ------------ |
| code        | num  | 返回值       | 0：成功      |
| cost        | obj  | 详细搜索用时 | 大概是吧？   |
| result      | obj  | 搜索建议结果 |              |
| page caches | obj  | ？？？       | 作用尚不明确 |
| sengine     | obj  | ？？？       | 作用尚不明确 |
| stoken      | str  | ？？？       | 作用尚不明确 |

`cost`对象：

| 字段  | 类型 | 内容     | 备注 |
| ----- | ---- | -------- | ---- |
| about | obj  | 套了个娃 |      |

`cost`中的`about`对象：

| 字段         | 类型 | 内容 | 备注 |
| ------------ | ---- | ---- | ---- |
| params_check | str  |      |      |
| total        | str  |      |      |
| main_handler | str  |      |      |

`result`对象：

| 字段 | 类型  | 内容     | 备注 |
| ---- | ----- | -------- | ---- |
| tag  | array | 套了个娃 |      |

`result`中的`tag`数组：

| 项   | 类型 | 内容                | 备注                   |
| ---- | ---- | ------------------- | ---------------------- |
| 0    | obj  | 第1建议关键词       |                        |
| n    | obj  | 第（n+1）建议关键词 | 按照相关程度与热度顺序 |
| 9    | obj  | 第10建议关键词      | 最后一项               |

`tag`数组中的对象：

| 字段  | 类型 | 内容       | 备注                                                         |
| ----- | ---- | ---------- | ------------------------------------------------------------ |
| value | str  | 关键词内容 |                                                              |
| ref   | num  | 0          | 作用尚不明确                                                 |
| name  | str  | 显示内容   | 在无高亮显示时与`value`相同<br />有高亮显示时带有`<em class="suggest_high_light">`的xml标签 |
| spid  | num  | ？？？     | 作用尚不明确                                                 |

`page caches`对象：

| 字段       | 类型 | 内容 | 备注         |
| ---------- | ---- | ---- | ------------ |
| save cache | str  | no   | 作用尚不明确 |

`sengine`对象：

| 字段  | 类型 | 内容 | 备注         |
| ----- | ---- | ---- | ------------ |
| usage | num  | 0    | 作用尚不明确 |

**示例：**

获取关于`lei`的搜索建议，关键词带有高亮

```shell
curl -G 'https://s.search.bilibili.com/main/suggest' \
--data-urlencode 'term=lei' \
--data-urlencode 'main_ver=v1' \
--data-urlencode 'highlight='
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "cost": {
        "about": {
            "params_check": "0.000103",
            "total": "0.011644",
            "main_handler": "0.011472"
        }
    },
    "result": {
        "tag": [
            {
                "value": "雷军",
                "ref": 0,
                "name": "雷军",
                "spid": 1
            },
            {
                "value": "雷之律者",
                "ref": 0,
                "name": "雷之律者",
                "spid": 5
            },
            {
                "value": "LEI神",
                "ref": 0,
                "name": "<em class=\"suggest_high_light\">LEI</em>神",
                "spid": 5
            },
            {
                "value": "LEIGH ELLEXSON",
                "ref": 0,
                "name": "<em class=\"suggest_high_light\">LEI</em>GH ELLEXSON",
                "spid": 5
            },
            {
                "value": "LEICA Q2",
                "ref": 0,
                "name": "<em class=\"suggest_high_light\">LEI</em>CA Q2",
                "spid": 5
            },
            {
                "value": "LEIGHANNE",
                "ref": 0,
                "name": "<em class=\"suggest_high_light\">LEI</em>GHANNE",
                "spid": 0
            },
            {
                "value": "雷达探测姬",
                "ref": 0,
                "name": "雷达探测姬",
                "spid": 5
            },
            {
                "value": "雷律",
                "ref": 0,
                "name": "雷律",
                "spid": 5
            },
            {
                "value": "雷霆嘎巴",
                "ref": 0,
                "name": "雷霆嘎巴",
                "spid": 5
            },
            {
                "value": "雷霆沙赞",
                "ref": 0,
                "name": "雷霆沙赞",
                "spid": 5
            }
        ]
    },
    "page caches": {
        "save cache": "no"
    },
    "sengine": {
        "usage": 0
    },
    "stoken": "12344377692164099019"
}
```

</details>
