# 番剧或影视时间线

- [获取番剧或影视时间线](#获取番剧或影视时间线)

---

## 获取番剧或影视时间线


> http://api.bilibili.com/pgc/web/timeline
*请求方式：GET*

鉴权方式：Cookie（SESSDATA）或APP

**url参数：**

| 参数名   | 类型 | 内容         | 必要性 | 备注                          |
| -------- | ---- | ------------ | ------ | ----------------------------- |
| types    | str  | 类别         | 必要   | 1：`番剧`<br />3：`电影`<br />4：`国创` |
| before   | num  | 开始于前几日 | 必要   | ∈N∩[0,7]                      |
| after    | num  | 结束于后几日 | 必要   | ∈N∩[0,7]                      |

**json回复：**

根对象：

| 字段    | 类型  | 内容     | 备注                                        |
| ------- | ----- | -------- | ------------------------------------------- |
| code    | num   | 返回值   | 0：成功<br />-400：请求错误<br />-404：错误 |
| message | str   | 错误信息 | 默认为success                               |
| result  | array | 信息本体 |                                             |

`result`数组：

| 项   | 类型 | 内容                        | 备注 |
| ---- | ---- | --------------------------- | ---- |
| 0    | obj  | `before`天前信息            |      |
| n    | obj  | 从`before`天前开始第n天信息 |      |
| ……   | obj  | ……                          |      |

`result`数组中的对象：

| 字段        | 类型  | 内容           | 备注              |
| ----------- | ----- | -------------- | ----------------- |
| date        | str   | 当日日期       |                   |
| date_ts     | num   | 当日日期时间戳 |                   |
| day_of_week | num   | 一周中第几天   | ∈N∩[1,7]          |
| episodes    | array | 剧集列表       |                   |
| is_today    | num   | 是否今日       |                   |

`result`数组中的对象中的`episodes`数组：

| 项   | 类型 | 内容        | 备注 |
| ---- | ---- | ----------- | ---- |
| 0    | obj  | 剧集1       |      |
| n    | obj  | 剧集（n+1） |      |
| ……   | obj  | ……          |      |

`episodes`数组中的对象：

| 字段        | 类型 | 内容           | 备注            |
| ----------- | ---- | -------------- | --------------- |
| cover       | str  | 封面图url      |                 |
| delay       | num  | 是否推迟       |                 |
| delay_id    | num  | 推迟一话epid   |                 |
| delay_index | str  | 推迟一话名称   |                 |
| delay_reason | str | 推迟原因       |                 |
| ep_cover    | str  | 最新一话图url  |                 |
| episode_id  | num  | 最新一话的epid |                 |
| pub_index   | str  | 最新一话名称   |                 |
| pub_time    | str  | 发布时间       |                 |
| pub_ts      | num  | 发布时间戳     |                 |
| published   | num  | 是否已发布     |                 |
| follows     | str  | -              |                 |
| plays       | str  | -              |                 |
| season_id   | num  | 剧集ssid       |                 |
| square_cover | str | 缩略图url      |                 |
| title       | str  | 剧集标题       |                 |

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
curl -G 'http://api.bilibili.com/pgc/web/timeline' \
--data-urlencode 'types=1' \
--data-urlencode 'before=1' \
--data-urlencode 'after=1' \
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