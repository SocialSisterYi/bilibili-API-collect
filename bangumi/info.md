# 剧集基本信息

- [剧集基本信息（mdid方式）](#剧集基本信息（mdid方式）)
- [获取剧集明细（web端）（ssid/epid方式）](#获取剧集明细（web端）（ssid/epid方式）)

---

## 剧集基本信息（mdid方式）


> http://api.bilibili.com/pgc/review/user

*请求方式：GET*

鉴权方式：Cookie（SESSDATA）或APP

**url参数：**

| 参数名   | 类型 | 内容     | 必要性 | 备注 |
| -------- | ---- | -------- | ------ | ---- |
| media_id | str  | 剧集mdid | 必要   |      |

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

## 获取剧集明细（web端）（ssid/epid方式）

> http://api.bilibili.com/pgc/view/web/season

*请求方式：GET*

**url参数：**

| 参数名    | 类型 | 内容     | 必要性       | 备注                     |
| --------- | ---- | -------- | ------------ | ------------------------ |
| season_id | num  | 番剧ssid | 必要（可选） | season_id与ep_id任选其一 |
| ep_id     | num  | 剧集epid | 必要（可选） | season_id与ep_id任选其一 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                    |
| ------- | ---- | -------- | ----------------------- |
| code    | num  | 返回值   | 0：成功<br />-404：错误 |
| message | str  | 错误信息 | 默认为success           |
| ttl     | num  | 1        | 作用尚不明确            |
| result  | obj  | 信息本体 |                         |

`result`对象：

| 字段            | 类型   | 内容                       | 备注                                       |
| --------------- | ------ | -------------------------- | ------------------------------------------ |
| activity        | obj    | 参与的活动                 |                                            |
| alias           | str    | 空                         | 作用尚不明确                               |
| bkg_cover       | str    | 网页背景图片url              | 无则为空                                   |
| cover           | str    | 剧集封面图片url              |                                            |
| episodes        | array | 正片剧集列表                 |                                            |
| evaluate        | str    | 简介                       |                                            |
| jp_title        | str    | 空                         | 作用尚不明确                               |
| link            | str    | 简介页面url              |                                            |
| media_id        | num    | 剧集mdid                 |                                            |
| mode            | num    | 2 | 作用尚不明确 |
| new_ep          | obj    | 更新信息                   |                                            |
| payment         | obj    | 会员&付费信息              | 若无相关内容则无此项                       |
| positive        | obj    |                            |                                            |
| publish         | obj    | 发布信息                   |                                            |
| rating          | obj    | 评分信息                   | 若无相关内容则无此项                       |
| record          | str    | 备案号                     | 无则为空                                   |
| rights          | obj    | 属性标志信息               |                                            |
| season_id       | num    | 番剧ssid                   |                                            |
| season_title    | str    | 剧集标题                   |                                            |
| seasons         | array | 同系列所有季信息         |                                    |
| section         | array | 花絮、PV、番外等非正片内容 | 若无相关内容则无此项                       |
| series          | obj    | 系列信息                   |                                            |
| share_copy      | str    | 《{标题}》+{备注}        |                                            |
| share_sub_title | str    | 备注                     |                                    |
| share_url       | str    | 番剧播放页面url            |                                            |
| show            | obj    | 网页全屏标志               |                                            |
| square_cover    | str    | 方形封面图片url            |                        |
| stat            | obj    | 状态数                     |                                            |
| status          | num    |                            |                                            |
| subtitle        | str    | 剧集副标题      |                                            |
| title           | str    | 剧集标题                     |                                            |
| total           | num    | 总计正片集数                 | 未完结：大多为-1<br />已完结：正整数 |
| type            | num    | 剧集类型 | 1：番剧<br />2：电影<br />3：纪录片<br />4：国创<br />5：电视剧<br />7：综艺 |
| up_info         | obj    | UP主信息                   | 若无相关内容则无此项                       |

`result`中的`activity`对象：

| 字段        | 类型 | 内容     | 备注         |
| ----------- | ---- | -------- | ------------ |
| head_bg_url | str  | 空       | 作用尚不明确 |
| id          | num  | 活动id   |              |
| title       | str  | 活动标题 |              |

`result`中的`episodes`数组：

| 项   | 类型 | 内容            | 备注         |
| ---- | ---- | --------------- | ------------ |
| 0    | obj  | 正片第1集       |              |
| n    | obj  | 正片第（n+1）集 | 按照顺序排列 |
| ……   | obj  |                 |              |

`episodes`数组中的对象：

| 字段         | 类型 | 内容                              | 备注                 |
| ------------ | ---- | --------------------------------- | -------------------- |
| aid          | num  | 单集稿件avid                      |                      |
| badge        | str  | 标签文字                          | 例如`会员`、`限免`等 |
| badge_info   | obj  |                                   |                      |
| badge_type   | num  |                                   |                      |
| bvid         | str  | 单集稿件bvid                      |                      |
| cid          | num  | 视频cid                           |                      |
| cover        | str  | 单集封面url                       |                      |
| dimension    | obj  | 分辨率信息                        |                      |
| from         | str  |                                   |                      |
| id           | num  | 单集epid                          |                      |
| link         | str  | 单集网页url                       |                      |
| long_title   | str  | 单集完整标题                      |                      |
| pub_time     | num  | 发布时间                          | 时间戳               |
| pv           | num  | 0                                 | 作用尚不明确         |
| release_date | str  | 空                                | 作用尚不明确         |
| rights       | obj  |                                   |                      |
| share_copy   | str  | 《{标题}》+第n话+｛单集完整标题｝ |                      |
| share_url    | str  | 单集网页url                       |                      |
| short_link   | str  | 单集网页url短链接                 |                      |
| status       | num  |                                   |                      |
| subtitle     | str  | 单集副标题                        | 观看次数文字         |
| title        | str  | 单集标题                          |                      |
| vid          | str  | 单集vid                           | vupload_+{cid}       |







`result`中的`new_ep`对象：

| 字段   | 类型 | 内容         | 备注             |
| ------ | ---- | ------------ | ---------------- |
| desc   | str  | 更新备注     |                  |
| id     | num  | 最新一话epid |                  |
| is_new | num  | 是否最新发布 | 0：否<br />1：是 |
| title  | str  | 最新一话标题 |                  |

`result`中的`payment`对象：

| 字段                | 类型 | 内容 | 备注 |
| ------------------- | ---- | ---- | ---- |
| discount            | num  |      |      |
| pay_type            | obj  |      |      |
| price               | str  |      |      |
| promotion           | str  |      |      |
| tip                 | str  |      |      |
| vip_discount        | num  |      |      |
| vip_first_promotion | str  |      |      |
| vip_promotion       | str  |      |      |



`result`中的`positive`对象：

| 字段  | 类型 | 内容 | 备注 |
| ----- | ---- | ---- | ---- |
| id    | num  |      |      |
| title | str  |      |      |

`result`中的`publish`对象：

| 字段            | 类型 | 内容             | 备注                     |
| --------------- | ---- | ---------------- | ------------------------ |
| is_finish       | num  | 完结状态         | 0：未完结<br />1：已完结 |
| is_started      | num  | 是否发布         | 0：未发布<br />1：已发布 |
| pub_time        | str  | 发布时间         | YYYY-MM-DDD hh:mm:ss     |
| pub_time_show   | str  | 发布时间文字介绍 |                          |
| unknow_pub_date | num  | 0                | 作用尚不明确             |
| weekday         | num  | 0                | 作用尚不明确             |

`result`中的`rating`对象：

| 字段  | 类型 | 内容         | 备注 |
| ----- | ---- | ------------ | ---- |
| count | num  | 总计评分人数 |      |
| score | num  | 评分         |      |

`result`中的`rights`对象：

| 字段              | 类型 | 内容     | 备注                            |
| ----------------- | ---- | -------- | ------------------------------- |
| allow_bp          | num  |          |                                 |
| allow_bp_rank     | num  |          |                                 |
| allow_download    | num  |          |                                 |
| allow_review      | num  |          |                                 |
| area_limit        | num  |          |                                 |
| ban_area_show     | num  |          |                                 |
| can_watch         | num  |          |                                 |
| copyright         | str  | 版权标志 | bilibili：授权<br />dujia：独家 |
| forbid_pre        | num  |          |                                 |
| is_cover_show     | num  |          |                                 |
| is_preview        | num  |          |                                 |
| only_vip_download | num  |          |                                 |
| resource          | str  |          |                                 |
| watch_platform    | num  |          |                                 |

`result`中的`seasons`数组：

| 项   | 类型 | 内容              | 备注         |
| ---- | ---- | ----------------- | ------------ |
| 0    | obj  | 同系列剧集1       |              |
| n    | obj  | 同系列剧集（n+1） | 按照顺序排列 |
| ……   | obj  |                   |              |

`seasons`数组中的对象：

| 字段         | 类型 | 内容 | 备注 |
| ------------ | ---- | ---- | ---- |
| badge        | str  |      |      |
| badge_info   | obj  |      |      |
| badge_type   | num  |      |      |
| cover        | str  |      |      |
| media_id     | str  |      |      |
| new_ep       | num  |      |      |
| season_id    | obj  |      |      |
| season_title | num  |      |      |
| season_type  | str  |      |      |
| stat         | obj  |      |      |









`result`中的`section`数组：

| 项   | 类型 | 内容              | 备注         |
| ---- | ---- | ----------------- | ------------ |
| 0    | obj  | 其他内容块1       |              |
| n    | obj  | 其他内容块（n+1） | 按照顺序排列 |
| ……   | obj  |                   |              |

`section`数组中的对象：

| 字段       | 类型  | 内容     | 备注 |
| ---------- | ----- | -------- | ---- |
| episode_id | num   | 0        |      |
| episodes   | array | 板块内容 |      |
| id         | num   | 板块id？ |      |
| title      | str   | 板块标题 |      |
| type       | num   | ？       |      |











`result`中的`series`对象：

| 字段         | 类型 | 内容   | 备注 |
| ------------ | ---- | ------ | ---- |
| series_id    | num  | 系列id |      |
| series_title | str  | 系列名 |      |

`result`中的`show`对象：

| 字段        | 类型 | 内容     | 备注                 |
| ----------- | ---- | -------- | -------------------- |
| wide_screen | num  | 是否全屏 | 0：正常<br />1：全屏 |

`result`中的`stat`对象：

| 字段      | 类型 | 内容   | 备注 |
| --------- | ---- | ------ | ---- |
| coins     | num  | 投币数 |      |
| danmakus  | num  | 弹幕数 |      |
| favorites | num  | 收藏数 |      |
| likes     | num  | 点赞数 |      |
| reply     | num  | 评论数 |      |
| share     | num  | 分享数 |      |
| views     | num  | 播放数 |      |

`result`中的`up_info`对象：

| 字段        | 类型 | 内容        | 备注 |
| ----------- | ---- | ----------- | ---- |
| avatar      | str  | 头像图片url |      |
| follower    | num  | 粉丝数      |      |
| is_follow   | num  | 0           |      |
| mid         | num  | UP主mid     |      |
| pendant     | obj  |             |      |
| theme_type  | num  | 0           |      |
| uname       | str  | UP主昵称    |      |
| verify_type | num  |             |      |
| vip_status  | num  |             |      |
| vip_type    | num  |             |      |

## 
