# 番剧或影视时间线

- [获取番剧或影视时间线](#获取番剧或影视时间线)

---

## 获取番剧或影视时间线


> http://api.bilibili.com/pgc/web/timeline
*请求方式：GET*

鉴权方式：Cookie（SESSDATA）或APP

**url参数：**

| 参数名   | 类型 | 内容         | 必要性 | 备注                                |
| -------- | ---- | ------------ | ------ | ----------------------------------- |
| types    | str  | 类别         | 必要   | 1：日漫<br />3：纪录片<br />4：国漫 |
| before   | num  | 开始于前几日 | 必要   | ∈N∩[0,7]                            |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                        |
| ------- | ---- | -------- | ------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-404：错误 |
| message | str  | 错误信息 | 默认为success                               |
| result  | obj  | 信息本体 |                                             |

`result`对象：

| 字段   | 类型 | 内容         | 备注             |
| ------ | ---- | ------------ | ---------------- |
| media  | obj  | 剧集信息     |                  |
| review | obj  | 用户操作信息 | 仅登录时存在此项 |

`result`中的`media`对象：

| 字段      | 类型  | 内容           | 备注                       |
| --------- | ----- | -------------- | -------------------------- |
| areas     | array | 地区           |                            |
| cover     | str   | 封面图片url    |                            |
| media_id  | num   | 剧集mdid       |                            |
| new_ep    | obj   | 最新一话信息   |                            |
| rating    | obj   | 评分信息       |                            |
| season_id | int   | 剧集ssid       |                            |
| share_url | url   | 剧集详情页连接 |                            |
| title     | str   | 标题           |                            |
| type_name | str   | 剧集类型       | `番剧`、`国创`、`电影`等等 |

`media`中的`areas`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | obj  | 地区信息1       |      |
| n    | obj  | 地区信息（n+1） |      |
| ……   | obj  | ……              |      |

`areas`数组中的对象：

| 字段 | 类型 | 内容         | 备注                                                         |
| ---- | ---- | ------------ | ------------------------------------------------------------ |
| id   | num  | 所属地区编号 | 1：中国大陆<br />2：日本<br />3：美国<br />4：英国<br />6：中国香港<br />8：韩国<br />9：法国<br />10：泰国<br />13：西班牙<br />15：德国<br />35：意大利<br />39：新西兰<br />43：澳大利亚 |
| name | str  | 所属地区名称 |                                                              |

`media`中的`new_ep`对象：

| 字段       | 类型 | 内容             | 备注                       |
| ---------- | ---- | ---------------- | -------------------------- |
| id         | int  | 最新一话的epid   |                            |
| index      | str  | 最新一话名称     |                            |
| index_show | str  | 最新一话显示名称 | eg. `第1话`、`更新至第4话` |

`media`中的`rating`对象：

| 字段  | 类型 | 内容         | 备注 |
| ----- | ---- | ------------ | ---- |
| count | num  | 总计评分人数 |      |
| score | num  | 评分         |      |

`result`中的`review`对象：

| 字段    | 类型 | 内容 | 备注         |
| ------- | ---- | ---- | ------------ |
| is_coin | num  | 0    | 作用尚不明确 |
| is_open | num  | 1    | 作用尚不明确 |

**示例：**

查询剧集`md28220978`的基本信息

```shell
curl -G 'http://api.bilibili.com/pgc/review/user' \
--data-urlencode 'media_id=28220978' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "success",
    "result": {
        "media": {
            "areas": [
                {
                    "id": 2,
                    "name": "日本"
                }
            ],
            "cover": "http://i0.hdslb.com/bfs/bangumi/8aa0bfce050c72c6626b63d3093a88527c251026.jpg",
            "media_id": 28220978,
            "new_ep": {
                "id": 21278,
                "index": "14",
                "index_show": "全14话"
            },
            "rating": {
                "count": 53376,
                "score": 9.9
            },
            "season_id": 1172,
            "share_url": "https://www.bilibili.com/bangumi/media/md28220978",
            "title": "轻音少女 第一季",
            "type_name": "番剧"
        },
        "review": {
            "is_coin": 0,
            "is_open": 1
        }
    }
}
```

</details>