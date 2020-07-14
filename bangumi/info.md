# 番剧基本信息

> http://api.bilibili.com/pgc/view/web/season

*请求方式：GET*

**参数：**

| 参数名    | 类型 | 内容     | 必要性 | 备注                     |
| --------- | ---- | -------- | ------ | ------------------------ |
| season_id | url  | 番剧ssID | 非必要 | season_id与ep_id任选其一 |
| ep_id     | url  | 剧集epID | 非必要 | season_id与ep_id任选其一 |

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
| bkg_cover       | str    | 背景图片url                | 无则为空                                   |
| cover           | str    | 封面图片url                |                                            |
| episodes        | array | 剧集列表                   |                                            |
| evaluate        | str    | 简介                       |                                            |
| jp_title        | str    | 空                         | 作用尚不明确                               |
| link            | str    | 简介网址url                |                                            |
| media_id        | num    | 番剧mdID                   |                                            |
| mode            | num    |                            |                                            |
| new_ep          | obj    | 更新信息                   |                                            |
| payment         | obj    | 会员&付费信息              | 若无相关内容则无此项                       |
| positive        | obj    |                            |                                            |
| publish         | obj    | 发布信息                   |                                            |
| rating          | obj    | 评分信息                   | 若无相关内容则无此项                       |
| record          | str    | 备案号                     | 无则为空                                   |
| rights          | obj    | 属性标志信息               |                                            |
| season_id       | num    | 番剧ssID                   |                                            |
| season_title    | str    | 标题                       |                                            |
| seasons         | array | 同系列其他季               | 无则为空                                   |
| section         | array | 花絮、PV、番外等非正片内容 | 若无相关内容则无此项                       |
| series          | obj    | 系列信息                   |                                            |
| share_copy      | str    | 《标题》+签名              |                                            |
| share_sub_title | str    | 签名                       | 无则为空                                   |
| share_url       | str    | 番剧播放页面url            |                                            |
| show            | obj    | 网页全屏标志               |                                            |
| square_cover    | str    | 方形封面图片url            | 若无相关内容则无此项                       |
| stat            | obj    | 状态数                     |                                            |
| status          | num    |                            |                                            |
| subtitle        | str    | 观看次数文字介绍           |                                            |
| title           | str    | 标题                       |                                            |
| total           | num    | 总计集数                   | 未完结：大多为-1<br />已完结：大多为正整数 |
| type            | num    |                            |                                            |
| up_info         | obj    | UP主信息                   | 若无相关内容则无此项                       |

`result`中的`activity`对象：

| 字段        | 类型 | 内容     | 备注         |
| ----------- | ---- | -------- | ------------ |
| head_bg_url | str  | 空       | 作用尚不明确 |
| id          | num  | 活动id   |              |
| title       | str  | 活动标题 |              |

`result`中的`episodes`数组：



`result`中的`new_ep`对象：

| 字段   | 类型 | 内容         | 备注             |
| ------ | ---- | ------------ | ---------------- |
| desc   | str  | 更新备注     |                  |
| id     | num  | 最新一话epID |                  |
| is_new | num  | 是否最新发布 | 0：否<br />1：是 |
| title  | str  | 最新一话标题 |                  |

`result`中的`payment`对象：



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



`result`中的`section`数组：



`result`中的`series`对象：



`result`中的`show`对象：

| 字段        | 类型 | 内容   | 备注                 |
| ----------- | ---- | ------ | -------------------- |
| wide_screen | num  | 投币数 | 0：正常<br />1：全屏 |

`result`中的`stat`对象：

| 字段      | 类型 | 内容   | 备注 |
| --------- | ---- | ------ | ---- |
| coins     | num  | 投币数 |      |
| danmakus  | num  | 弹幕数 |      |
| favorites | num  | 收藏数 |      |
| reply     | num  | 评论数 |      |
| share     | num  | 分享数 |      |
| views     | num  | 播放数 |      |

`result`中的`up_info`对象：

| 字段        | 类型 | 内容        | 备注 |
| ----------- | ---- | ----------- | ---- |
| avatar      | str  | 头像图片url |      |
| follower    | num  | 粉丝数      |      |
| is_follow   | num  |             |      |
| mid         | num  | UP主UID     |      |
| pendant     | obj  |             |      |
| theme_type  | num  |             |      |
| uname       | str  |             |      |
| verify_type | num  |             |      |
| vip_status  | num  |             |      |
| vip_type    | num  |             |      |