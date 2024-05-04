# 获取用户专栏信息

## 获取用户专栏文章列表

> https://api.bilibili.com/x/space/wbi/article

> ~~https://api.bilibili.com/x/space/article~~（旧链接）

*请求方式：GET*

认证方式：Cookie（SESSDATA）

鉴权方式：[Wbi 签名](../misc/sign/wbi.md)

**url参数：**

| 参数名  | 类型  | 内容    | 必要性                                                                      | 备注  |
|------|-----|-------|--------------------------------------------------------------------------|-----|
| mid  | num | 用户uid |                                                                          | √   |
| pn   | num |       | 默认：1                                                                     |     |
| ps   | num |       | 默认：30<br/>范围：[1,30]                                                      |     |
| sort | str |       | `publish_time`：最新发布<br/>`view`：最多阅读<br/>`fav`：最多收藏<br/>默认：`publish_time` |     |

**json回复：**

根对象

| 字段      | 类型  | 内容   | 备注                 |
|---------|-----|------|--------------------|
| code    | num | 返回值  | 0：成功<br/>-400：请求错误 |
| message | str | 错误信息 | 默认为0               |
| ttl     | num | 1    |                    |
| data    | obj | 信息本体 |                    |

`data`对象

| 字段名      | 类型    | 内容       | 备注  |
|----------|-------|----------|-----|
| articles | array | 专栏文章信息列表 |     |
| pn       | num   | 本次请求分页页数 |     |
| ps       | num   | 本次请求分页大小 |     |
| count    | num   | 专栏文章总数   |     |

`data`对象 -> `articles`数组中的对象

| 字段名               | 类型    | 内容       | 备注   |
|-------------------|-------|----------|------|
| id                | num   | 专栏文章id   |      |
| category          | obj   | 分类       |      |
| categories        | array | 分类       |      |
| title             | str   | 标题       |      |
| summary           | str   | 摘要       |      |
| banner_url        | str   | 封面图      |      |
| template_id       | num   |          |      |
| state             | num   |          |      |
| author            | obj   | UP主信息    |      |
| reprint           | num   |          |      |
| image_urls        | array |          |      |
| publish_time      | num   | 发布时间戳    | 单位：秒 |
| ctime             | num   | 提交时间戳    | 单位：秒 |
| stats             | obj   | 专栏文章数据统计 |      |
| tags              | array | 标签       |      |
| words             | num   |          |      |
| dynamic           | str   | 粉丝动态文案   |      |
| origin_image_urls | array |          |      |
| list              |       | `null`   |      |
| is_like           | bool  |          |      |
| media             | obj   |          |      |
| apply_time        | str   | `空串`     |      |
| check_time        | str   | `空串`     |      |
| original          | num   |          |      |
| act_id            | num   |          |      |
| dispute           |       | `null`   |      |
| authenMark        |       | `null`   |      |
| cover_avid        | num   |          |      |
| top_video_info    |       | `null`   |      |
| type              | num   |          |      |

`data`对象 -> `articles`数组中的对象 -> `category`对象

| 字段名       | 类型  | 内容     | 备注  |
|-----------|-----|--------|-----|
| id        | num | 分类id   |     |
| parent_id | num | 父级分类id |     |
| name      | str | 分类名称   |     |

`data`对象 -> `articles`数组中的对象 -> `categories`数组中的对象

| 字段名       | 类型  | 内容     | 备注  |
|-----------|-----|--------|-----|
| id        | num | 分类id   |     |
| parent_id | num | 父级分类id |     |
| name      | str | 分类名称   |     |

`data`对象 -> `articles`数组中的对象 -> `author`对象

| 字段名             | 类型  | 内容     | 备注  |
|-----------------|-----|--------|-----|
| mid             | num | 用户uid  |     |
| name            | str | 用户名    |     |
| face            | str | 头像     |     |
| pendant         | obj | 头像框信息  |     |
| official_verify | obj | 账号认证信息 |     |
| nameplate       | obj | 成就勋章信息 |     |
| vip             | obj | 大会员信息  |     |

`data`对象 -> `articles`数组中的对象 -> `author`对象 -> `pendant`对象

| 字段名    | 类型  | 内容       | 备注  |
|--------|-----|----------|-----|
| pid    | num | 头像框id    |     |
| name   | str | 头像框名称    |     |
| image  | str | 头像框图片url |     |
| expire | num | 过期时间     |     |

`data`对象 -> `articles`数组中的对象 -> `author`对象 -> `official_verify`对象

| 字段名  | 类型  | 内容   | 备注                           |
|------|-----|------|------------------------------|
| type | num | 是否认证 | -1：无<br />0：个人认证<br />1：机构认证 |
| desc | str | 认证备注 |                              |

`data`对象 -> `articles`数组中的对象 -> `author`对象 -> `nameplate`对象

| 字段名         | 类型  | 内容      | 备注  |
|-------------|-----|---------|-----|
| nid         | num | 勋章id    |     |
| name        | str | 勋章名称    |     |
| image       | str | 勋章图标    |     |
| image_small | str | 勋章图标（小） |     |
| level       | str | 勋章等级    |     |
| condition   | str | 获取条件    |     |

`data`对象 -> `articles`数组中的对象 -> `author`对象 -> `vip`对象

| 字段名              | 类型  | 内容         | 备注                              |
|------------------|-----|------------|---------------------------------|
| type             | num | 大会员类型      | 0：无<br />1：月大会员<br />2：年度及以上大会员 |
| status           | num | 大会员状态      | 0：无<br />1：有                    |
| due_date         | num | 大会员过期时间时间戳 | 单位：毫秒                           |
| vip_pay_type     | num | 支付类型       |                                 |
| theme_type       | num | `0`        |                                 |
| label            | obj | 大会员标签      |                                 |
| avatar_subscript | num | 是否显示大会员图标  | 0：不显示<br />1：显示                 |
| nickname_color   | str | 大会员昵称颜色    |                                 |

`data`对象 -> `articles`数组中的对象 -> `author`对象 -> `vip`对象 -> `label`对象

| 字段名         | 类型  | 内容     | 备注                                                                                                                           |
|-------------|-----|--------|------------------------------------------------------------------------------------------------------------------------------|
| path        | str | `空串`   |                                                                                                                              |
| text        | str | 会员类型文案 | `大会员` `年度大会员` `十年大会员` `百年大会员` `最强绿鲤鱼`                                                                                        |
| label_theme | str | 会员标签   | vip：大会员<br />annual_vip：年度大会员<br />ten_annual_vip：十年大会员<br />hundred_annual_vip：百年大会员<br/>fools_day_hundred_annual_vip：最强绿鲤鱼 |

`data`对象 -> `articles`数组中的对象 -> `stats`对象

| 字段名      | 类型  | 内容  | 备注    |
|----------|-----|-----|-------|
| view     | num | 浏览数 |       |
| favorite | num | 收藏数 |       |
| like     | num | 点赞数 |       |
| dislike  | num | 点踩数 | 恒为`0` |
| reply    | num | 回复数 |       |
| share    | num | 转发数 |       |
| coin     | num | 投币数 |       |
| dynamic  | num |     |       |

`data`对象 -> `articles`数组中的对象 -> `tags`数组中的对象

| 字段名  | 类型  | 内容   | 备注  |
|------|-----|------|-----|
| tid  | num | 标签id |     |
| name | str | 标签名称 |     |

`data`对象 -> `articles`数组中的对象 -> `media`对象

| 字段名       | 类型  | 内容   | 备注  |
|-----------|-----|------|-----|
| score     | num | `0`  |     |
| media_id  | num | `0`  |     |
| title     | str | `空串` |     |
| cover     | str | `空串` |     |
| area      | str | `空串` |     |
| type_id   | num | `0`  |     |
| type_name | str | `空串` |     |
| spoiler   | num | `0`  |     |

**示例：**

```shell
curl -L -X GET 'https://api.bilibili.com/x/space/article?mid=300021061&pn=1&ps=2&sort=publish_time'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "articles": [
      {
        "id": 18989884,
        "category": {
          "id": 15,
          "parent_id": 3,
          "name": "日常"
        },
        "categories": [
          {
            "id": 3,
            "parent_id": 0,
            "name": "生活"
          },
          {
            "id": 15,
            "parent_id": 3,
            "name": "日常"
          }
        ],
        "title": "B站UP主日报2022年10月08日23点（v1.1）",
        "summary": "冠：罗翔说刑法(2485.45万粉,+7204) 涨：肯德基(+18.37万粉) 掉：Overidea_China(-186850粉) 播：开心锤锤(+927.56万) 赞：荒草音乐(+31.02万) 赞：飞翔的丘丘人(+22.08万) 充：冰糖IO(+210)",
        "banner_url": "https://i0.hdslb.com/bfs/article/5e53260f58f77fff0b8ba6b20179db85b8741b76.jpg",
        "template_id": 4,
        "state": 0,
        "author": {
          "mid": 300021061,
          "name": "狸工智能",
          "face": "https://i1.hdslb.com/bfs/face/4cba9bc9d6cf6935a37ec156dedb8f8d26c1df95.jpg",
          "pendant": {
            "pid": 0,
            "name": "",
            "image": "",
            "expire": 0
          },
          "official_verify": {
            "type": -1,
            "desc": ""
          },
          "nameplate": {
            "nid": 3,
            "name": "白银殿堂",
            "image": "https://i2.hdslb.com/bfs/face/f6a31275029365ae5dc710006585ddcf1139bde1.png",
            "image_small": "https://i2.hdslb.com/bfs/face/b09cdb4c119c467cf2d15db5263b4f539fa6e30b.png",
            "level": "高级勋章",
            "condition": "单个自制视频总播放数>=10万"
          },
          "vip": {
            "type": 0,
            "status": 0,
            "due_date": 0,
            "vip_pay_type": 0,
            "theme_type": 0,
            "label": {
              "path": "",
              "text": "",
              "label_theme": ""
            },
            "avatar_subscript": 0,
            "nickname_color": ""
          }
        },
        "reprint": 0,
        "image_urls": [
          "https://i0.hdslb.com/bfs/article/8e5497f7854e7df3468fbc29b0dd10fcf17d1223.png"
        ],
        "publish_time": 1665278884,
        "ctime": 1665278884,
        "stats": {
          "view": 689,
          "favorite": 2,
          "like": 61,
          "dislike": 0,
          "reply": 18,
          "share": 0,
          "coin": 1,
          "dynamic": 0
        },
        "words": 0,
        "dynamic": "狸子的UP主日报📰v1.1,每天稳定更新～（如果咕咕咕了，请艾特狸子LePtC检查狐务器 [tv_微笑] #排行榜##大数据##狸工智能#",
        "origin_image_urls": [
          "https://i0.hdslb.com/bfs/article/5e53260f58f77fff0b8ba6b20179db85b8741b76.jpg"
        ],
        "list": null,
        "is_like": false,
        "media": {
          "score": 0,
          "media_id": 0,
          "title": "",
          "cover": "",
          "area": "",
          "type_id": 0,
          "type_name": "",
          "spoiler": 0
        },
        "apply_time": "",
        "check_time": "",
        "original": 1,
        "act_id": 0,
        "dispute": null,
        "authenMark": null,
        "cover_avid": 0,
        "top_video_info": null,
        "type": 0
      },
      {
        "id": 18972446,
        "category": {
          "id": 15,
          "parent_id": 3,
          "name": "日常"
        },
        "categories": [
          {
            "id": 3,
            "parent_id": 0,
            "name": "生活"
          },
          {
            "id": 15,
            "parent_id": 3,
            "name": "日常"
          }
        ],
        "title": "B站UP主日报2022年10月07日23点（v1.1）",
        "summary": "冠：罗翔说刑法(2484.73万粉,+8020) 涨：靖菌命(+3.61万粉) 掉：Overidea_China(-8593粉) 播：开心锤锤(+971.44万) 赞：荒草音乐(+53.14万) 赞：南方都市报(+18.05万) 充：内德维德(+190)",
        "banner_url": "https://i0.hdslb.com/bfs/article/5e53260f58f77fff0b8ba6b20179db85b8741b76.jpg",
        "template_id": 4,
        "state": 0,
        "author": {
          "mid": 300021061,
          "name": "狸工智能",
          "face": "https://i1.hdslb.com/bfs/face/4cba9bc9d6cf6935a37ec156dedb8f8d26c1df95.jpg",
          "pendant": {
            "pid": 0,
            "name": "",
            "image": "",
            "expire": 0
          },
          "official_verify": {
            "type": -1,
            "desc": ""
          },
          "nameplate": {
            "nid": 3,
            "name": "白银殿堂",
            "image": "https://i2.hdslb.com/bfs/face/f6a31275029365ae5dc710006585ddcf1139bde1.png",
            "image_small": "https://i2.hdslb.com/bfs/face/b09cdb4c119c467cf2d15db5263b4f539fa6e30b.png",
            "level": "高级勋章",
            "condition": "单个自制视频总播放数>=10万"
          },
          "vip": {
            "type": 0,
            "status": 0,
            "due_date": 0,
            "vip_pay_type": 0,
            "theme_type": 0,
            "label": {
              "path": "",
              "text": "",
              "label_theme": ""
            },
            "avatar_subscript": 0,
            "nickname_color": ""
          }
        },
        "reprint": 0,
        "image_urls": [
          "https://i0.hdslb.com/bfs/article/8e5497f7854e7df3468fbc29b0dd10fcf17d1223.png"
        ],
        "publish_time": 1665189149,
        "ctime": 1665189149,
        "stats": {
          "view": 1021,
          "favorite": 1,
          "like": 66,
          "dislike": 0,
          "reply": 21,
          "share": 2,
          "coin": 2,
          "dynamic": 0
        },
        "tags": [
          {
            "tid": 1598,
            "name": "粉丝"
          },
          {
            "tid": 422982,
            "name": "狸子"
          },
          {
            "tid": 526616,
            "name": "大数据"
          },
          {
            "tid": 14082112,
            "name": "狸工智能"
          },
          {
            "tid": 438,
            "name": "排行榜"
          }
        ],
        "words": 0,
        "dynamic": "狸子的UP主日报📰v1.1,每天稳定更新～（如果咕咕咕了，请艾特狸子LePtC检查狐务器 [tv_微笑] #排行榜##大数据##狸工智能#",
        "origin_image_urls": [
          "https://i0.hdslb.com/bfs/article/5e53260f58f77fff0b8ba6b20179db85b8741b76.jpg"
        ],
        "list": null,
        "is_like": false,
        "media": {
          "score": 0,
          "media_id": 0,
          "title": "",
          "cover": "",
          "area": "",
          "type_id": 0,
          "type_name": "",
          "spoiler": 0
        },
        "apply_time": "",
        "check_time": "",
        "original": 1,
        "act_id": 0,
        "dispute": null,
        "authenMark": null,
        "cover_avid": 0,
        "top_video_info": null,
        "type": 0
      }
    ],
    "pn": 1,
    "ps": 2,
    "count": 1563
  }
}
```

</details>

## 获取用户专栏文集列表

> https://api.bilibili.com/x/article/up/lists

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名      | 类型  | 内容    | 必要性 | 备注                |
|----------|-----|-------|-----|-------------------|
| mid      | num | 用户uid | √   |                   |
| sort     | num | 排序方式  |     | 0：最近更新<br/>1：最多阅读 |
| jsonp    | str |       |     |                   |
| callback | str |       |     |                   |

**json回复：**

根对象

| 字段名     | 类型  | 内容   | 备注                 |
|---------|-----|------|--------------------|
| code    | num | 响应码  | 0：成功<br/>-400：请求错误 |
| message | str | 0    |                    |
| ttl     | num | 1    |                    |
| data    | obj | 信息本体 |                    |

`data`对象

| 字段名   | 类型    | 内容     | 备注  |
|-------|-------|--------|-----|
| lists | array | 文集信息列表 |     |
| total | num   | 文集总数   |     |

`data`对象 -> `lists`数组中的对象

| 字段名            | 类型  | 内容      | 备注   |
|----------------|-----|---------|------|
| id             | num | 文集id    |      |
| mid            | num | 作者uid   |      |
| name           | str | 文集名称    |      |
| image_url      | str | 封面      |      |
| update_time    | num | 最后更新时间戳 | 单位：秒 |
| ctime          | num | 创建时间戳   | 单位：秒 |
| publish_time   | num |         | 单位：秒 |
| summary        | str | `空串`    |      |
| words          | num | 总字数     |      |
| read           | num | 阅读量     |      |
| articles_count | num | 包含文章数   |      |
| state          | num | `1`     |      |
| reason         | str | `空串`    |      |
| apply_time     | str | `空串`    |      |
| check_time     | str | `空串`    |      |

**示例：**

```shell
curl -X GET 'https://api.bilibili.com/x/article/up/lists' \
    --data-urlencode 'mid=2859372' \
    --data-urlencode 'sort=0'
```

<details>
<summary>点击查看</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "lists": [
      {
        "id": 77163,
        "mid": 2859372,
        "name": "碟报",
        "image_url": "https://i0.hdslb.com/bfs/article/96d2b3d2a72e6497a011c885ab9245c51507ce18.png",
        "update_time": 1664854854,
        "ctime": 1554785697,
        "publish_time": 1664863200,
        "summary": "",
        "words": 71532,
        "read": 478726,
        "articles_count": 113,
        "state": 1,
        "reason": "",
        "apply_time": "",
        "check_time": ""
      },
      {
        "id": 26407,
        "mid": 2859372,
        "name": "周榜",
        "image_url": "https://i0.hdslb.com/bfs/article/96d2b3d2a72e6497a011c885ab9245c51507ce18.png",
        "update_time": 1664721205,
        "ctime": 1537942450,
        "publish_time": 1664721307,
        "summary": "",
        "words": 102099,
        "read": 1366280,
        "articles_count": 206,
        "state": 1,
        "reason": "",
        "apply_time": "",
        "check_time": ""
      },
      {
        "id": 107952,
        "mid": 2859372,
        "name": "制作委员会",
        "image_url": "https://i0.hdslb.com/bfs/article/96d2b3d2a72e6497a011c885ab9245c51507ce18.png",
        "update_time": 1646663919,
        "ctime": 1563107348,
        "publish_time": 1646910000,
        "summary": "",
        "words": 47564,
        "read": 72911,
        "articles_count": 10,
        "state": 1,
        "reason": "",
        "apply_time": "",
        "check_time": ""
      },
      {
        "id": 26457,
        "mid": 2859372,
        "name": "实时榜",
        "image_url": "https://i0.hdslb.com/bfs/article/96d2b3d2a72e6497a011c885ab9245c51507ce18.png",
        "update_time": 1603115712,
        "ctime": 1537955117,
        "publish_time": 1603115719,
        "summary": "",
        "words": 206741,
        "read": 1136352,
        "articles_count": 76,
        "state": 1,
        "reason": "",
        "apply_time": "",
        "check_time": ""
      },
      {
        "id": 49769,
        "mid": 2859372,
        "name": "预测",
        "image_url": "https://i0.hdslb.com/bfs/article/96d2b3d2a72e6497a011c885ab9245c51507ce18.png",
        "update_time": 1593933314,
        "ctime": 1546153226,
        "publish_time": 1593933314,
        "summary": "",
        "words": 2518,
        "read": 55123,
        "articles_count": 6,
        "state": 1,
        "reason": "",
        "apply_time": "",
        "check_time": ""
      },
      {
        "id": 96916,
        "mid": 2859372,
        "name": "书籍周榜",
        "image_url": "https://i0.hdslb.com/bfs/article/96d2b3d2a72e6497a011c885ab9245c51507ce18.png",
        "update_time": 1559815260,
        "ctime": 1559815159,
        "publish_time": 1559815577,
        "summary": "",
        "words": 272,
        "read": 2955,
        "articles_count": 1,
        "state": 1,
        "reason": "",
        "apply_time": "",
        "check_time": ""
      },
      {
        "id": 96610,
        "mid": 2859372,
        "name": "原始周榜存档",
        "image_url": "https://i0.hdslb.com/bfs/article/96d2b3d2a72e6497a011c885ab9245c51507ce18.png",
        "update_time": 1559721231,
        "ctime": 1559720762,
        "publish_time": 1559721271,
        "summary": "",
        "words": 290,
        "read": 1498,
        "articles_count": 1,
        "state": 1,
        "reason": "",
        "apply_time": "",
        "check_time": ""
      },
      {
        "id": 26453,
        "mid": 2859372,
        "name": "杂谈",
        "image_url": "https://i0.hdslb.com/bfs/article/96d2b3d2a72e6497a011c885ab9245c51507ce18.png",
        "update_time": 1557303117,
        "ctime": 1537954625,
        "publish_time": 1557303168,
        "summary": "",
        "words": 10673,
        "read": 38363,
        "articles_count": 4,
        "state": 1,
        "reason": "",
        "apply_time": "",
        "check_time": ""
      },
      {
        "id": 59028,
        "mid": 2859372,
        "name": "新春访谈",
        "image_url": "https://i0.hdslb.com/bfs/article/96d2b3d2a72e6497a011c885ab9245c51507ce18.png",
        "update_time": 1549878596,
        "ctime": 1549343048,
        "publish_time": 1549884125,
        "summary": "",
        "words": 33472,
        "read": 34597,
        "articles_count": 13,
        "state": 1,
        "reason": "",
        "apply_time": "",
        "check_time": ""
      }
    ],
    "total": 9
  }
}
```

</details>
