# 话题搜索

## 搜索发布话题

> https://app.bilibili.com/x/topic/pub/search  
> https://api.bilibili.com/x/topic/pub/search

*请求方法: GET*

注: 该接口可能存在传入页面大小与返回数量不匹配的问题, 可能与访问权限有关

<!--{
  "from": {
    "url": "https://t.bilibili.com/"
    "selector": ".bili-topic-search__input__inner"
  }
}-->

**URL参数:**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| --- | --- | --- | --- | --- |
| keywords | str | 关键词 | 不必要 |  |
| content | str | 空 | 不必要 |  |
| upload_id | str | 上传 id? | 不必要 | 页面刷新第一次请求时为空, 后均非空<br />似乎为固定值, 格式: `${your_mid}_${login_or_last_refresh_or_cookie_ts}_${dig4}`, 如 `616368979_1722652786_2534` |
| page_size | int | 页大小 | 不必要 | 默认为 20 |
| page_num | int | 1 | 不必要 | 不用于翻页 |
| offset | int | 偏移 | 不必要 | 可从响应 `data.page_info.offset` 中获取 |
| web_location | str | 333.1365 | 不必要 |  |

**JSON回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 返回值 | 0: 成功<br />-400: 请求错误 |
| message | str | 错误信息 | 默认为 0 |
| ttl | num | 1 |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| new_topic | obj | 新建话题? |  |
| has_create_jurisdiction | bool | false | 是否有创建权限? |
| topic_items | array | 话题列表 |  |
| request_id | str | 请求 id |  |
| page_info | obj | 页信息 |  |

`data` 中的 `new_topic` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| name | str | 请求参数中的 `keywords` |  |

`data` 中的 `topic_items` 数组中的对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| id | num | 话题 id |  |
| name | str | 话题名 |  |
| view | num | 观看数 |  |
| discuss | num | 讨论数 |  |
| stat_desc | str | 状态描述 |  |
| description | str | 话题描述 |  |
| show_interact_data | bool | false | 是否显示互动数据? |

`data` 中的 `page_info` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| offset | num | 下次请求可用的偏移 | 请求参数中的 `offset` + `page_size` |
| has_more | bool | 是否有更多数据 | 当没有更多时可能不存在该字段 |

**示例:**

注: 该示例就是解释开头所注的问题的一个示例

```shell
curl -G 'https://app.bilibili.com/x/topic/pub/search' \
--url-query 'keywords=2233'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "new_topic": {
      "name": "2233"
    },
    "has_create_jurisdiction": false,
    "topic_items": [
      {
        "id": 1101122,
        "name": "2233异世集",
        "view": 2502,
        "discuss": 11,
        "stat_desc": "2502浏览·11讨论",
        "description": "分享数字周边",
        "show_interact_data": false
      },
      {
        "id": 1050671,
        "name": "2233生日倒计时",
        "view": 21149,
        "discuss": 130,
        "stat_desc": "2.1万浏览·130讨论",
        "description": "2233生日倒计时",
        "show_interact_data": false
      },
      {
        "id": 1057129,
        "name": "2233手办可可爱爱",
        "view": 836,
        "discuss": 14,
        "stat_desc": "836浏览·14讨论",
        "description": "喜欢2233，",
        "show_interact_data": false
      }
    ],
    "request_id": "1$0$1723796266$7f515d4e26b7bd5007fb8ca4b066bf0b",
    "page_info": {
      "offset": 4,
      "has_more": true
    }
  }
}
```

</details>

## 推荐搜索话题?

> https://app.bilibili.com/x/topic/pub/rcmd/search  
> https://api.bilibili.com/x/topic/pub/rcmd/search

*请求方法: GET*

注: 该接口啥也不返回, 但是网页端会请求该接口

<!--{
  "from": {
    "url": "https://t.bilibili.com/"
  },
  "gh": [1083]
}-->

**URL参数:**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| --- | --- | --- | --- | --- |
| keywords | str | 空 | 不必要 |  |
| upload_id | str | 上传 id? | 不必要 | 同上 |
| web_location | str | 333.1365 | 不必要 | 有时请求不带该参数 |

**JSON回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 返回值 | 0: 成功 |
| message | str | 错误信息 | 默认为 0 |
| ttl | num | 1 |  |
| data | str | 数据本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | -- | --- |
| topic_items | array | 空 |  |
| request_id | str | 请求 id | 当传入 `keywords` 时不为空|

**示例:**

```shell
curl -G 'https://app.bilibili.com/x/topic/pub/rcmd/search'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "topic_items": [],
    "request_id": ""
  }
}
```

</details>
