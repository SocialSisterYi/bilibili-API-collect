# 剧集基本信息

## 剧集基本信息（mdid方式）

> https://api.bilibili.com/pgc/review/user

*请求方式：GET*

鉴权方式：Cookie（SESSDATA）或APP

**url参数：**

| 参数名      | 类型  | 内容     | 必要性 | 备注  |
|----------|-----|--------|-----|-----|
| media_id | str | 剧集mdid | 必要  |     |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                               |
|---------|-----|------|----------------------------------|
| code    | num | 返回值  | 0：成功<br />-400：请求错误<br />-404：错误 |
| message | str | 错误信息 | 默认为success                       |
| result  | obj | 信息本体 |                                  |

`result`对象：

| 字段     | 类型  | 内容     | 备注       |
|--------|-----|--------|----------|
| media  | obj | 剧集信息   |          |
| review | obj | 用户操作信息 | 仅登录时存在此项 |

`result`中的`media`对象：

| 字段                 | 类型    | 内容        | 备注                                                           |
|--------------------|-------|-----------|--------------------------------------------------------------|
| areas              | array | 地区        |                                                              |
| cover              | str   | 封面图片url   |                                                              |
| horizontal_picture | str   | 横板封面图片url |                                                              |
| media_id           | num   | 剧集mdid    |                                                              |
| new_ep             | obj   | 最新一话信息    |                                                              |
| rating             | obj   | 评分信息      |                                                              |
| season_id          | num   | 剧集ssid    |                                                              |
| share_url          | url   | 剧集详情页连接   |                                                              |
| title              | str   | 标题        |                                                              |
| type               | num   | 剧集类型id    | 1：番剧<br/>2：电影<br/>3：纪录片<br/>4：国创<br/>5：电视剧<br/>6：漫画<br/>7：综艺 |
| type_name          | str   | 剧集类型      |                                                              |

`media`中的`areas`数组：

| 项   | 类型  | 内容        | 备注  |
|-----|-----|-----------|-----|
| 0   | obj | 地区信息1     |     |
| n   | obj | 地区信息（n+1） |     |
| ……  | obj | ……        |     |

`areas`数组中的对象：

| 字段   | 类型  | 内容     | 备注                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|------|-----|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id   | num | 所属地区编号 | 1：中国大陆<br />2：日本<br />3：美国<br />4：英国<br />5：加拿大<br/>6：中国香港<br />7：中国台湾<br/>8：韩国<br />9：法国<br />10：泰国<br />12：新加坡<br/>13：西班牙<br/>14：俄罗斯<br />15：德国<br />16：其他<br/>17：丹麦<br/>18：乌克兰<br/>19：以色列<br/>20：伊朗<br/>24：匈牙利<br/>22：克罗地亚<br/>23：冰岛<br/>24：匈牙利<br/>25：南非<br/>26：印尼<br/>27：印度<br/>30：土耳其<br/>31：墨西哥<br/>32：委内瑞拉<br/>33：巴西<br/>34：希腊<br/>35：意大利<br />36：挪威<br/>37：捷克<br/>39：新西兰<br />40：智利<br/>41：比利时<br/>42：波兰<br/>43：澳大利亚<br/>44：爱尔兰<br/>45：瑞典<br/>46：瑞士<br/>47：芬兰<br/>48：苏联<br/>49：荷兰<br/>51：阿根廷<br/>53：古巴<br/>54：菲律宾<br/>55：哈萨克斯坦 |
| name | str | 所属地区名称 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

`media`中的`new_ep`对象：

| 字段         | 类型  | 内容        | 备注                 |
|------------|-----|-----------|--------------------|
| id         | num | 最新一话的epid |                    |
| index      | str | 最新一话名称    |                    |
| index_show | str | 最新一话显示名称  | eg. `第1话`、`更新至第4话` |

`media`中的`rating`对象：

| 字段    | 类型  | 内容     | 备注  |
|-------|-----|--------|-----|
| count | num | 总计评分人数 |     |
| score | num | 评分     |     |

`result`中的`review`对象：

| 字段      | 类型  | 内容  | 备注     |
|---------|-----|-----|--------|
| is_coin | num | 0   | 作用尚不明确 |
| is_open | num | 1   | 作用尚不明确 |

**示例：**

查询剧集`md28220978`的基本信息

```shell
curl -G 'https://api.bilibili.com/pgc/review/user' \
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
      "horizontal_picture": "http://i0.hdslb.com/bfs/bangumi/8aa0bfce050c72c6626b63d3093a88527c251026.jpg",
      "media_id": 28220978,
      "new_ep": {
        "id": 21278,
        "index": "14",
        "index_show": "全14话"
      },
      "rating": {
        "count": 80693,
        "score": 9.9
      },
      "season_id": 1172,
      "share_url": "https://www.bilibili.com/bangumi/media/md28220978",
      "title": "轻音少女 第一季",
      "type": 1,
      "type_name": "番剧"
    }
  }
}
```

</details>

## 获取剧集明细（web端）（ssid/epid方式）

> https://api.bilibili.com/pgc/view/web/season

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

| 字段                | 类型 | 内容          | 备注     |
| ------------------- | ---- | ------------ | -------- |
| discount            | num  | 折扣         | 100为原价 |
| pay_type            | obj  | 支付相关      |          |
| price               | str  | 售价         |          |
| promotion           | str  | 推广信息      |          |
| vip_discount        | num  | 大会员折扣    |          |
| vip_first_promotion | str  |              |          |
| vip_price           | str  | 大会员售价    |          |
| vip_promotion       | str  | 大会员推广信息 |          |

`payment`中的`pay_type`对象：

| 字段                | 类型 | 内容           | 备注                      |
| ------------------- | ---- | ------------- | ------------------------- |
| allow_discount      | num  | 启用折扣       | 0：否<br />1：是<br />下同 |
| allow_pack          | num  |               |                           |
| allow_ticket        | num  | 启用票券       |                           |
| allow_time_limit    | num  | 启用时间限制   |                           |
| allow_vip_discount  | num  | 启用大会员折扣 |                           |
| forbid_bb           | num  | 禁止使用B币券  |                           |

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

# 获取剧集分集信息

> https://api.bilibili.com/pgc/web/season/section

*请求方式：GET*

鉴权方式：Cookie（SESSDATA）或APP

**url参数：**

| 参数名       | 类型  | 内容     | 必要性 | 备注  |
|-----------|-----|--------|-----|-----|
| season_id | str | 剧集ssid | 必要  |     |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                |
|---------|-----|------|-------------------|
| code    | num | 返回值  | 0：成功<br />-404：错误 |
| message | str | 错误信息 | 默认为success        |
| result  | obj | 信息本体 |                   |

`result`对象：

| 字段           | 类型    | 内容     | 备注  |
|--------------|-------|--------|-----|
| main_section | obj   | 正片信息   |     |
| section      | array | 花絮、PV等 |     |

`result`中的`main_section`对象：

| 字段       | 类型    | 内容                           | 备注  |
|----------|-------|------------------------------|-----|
| episodes | array | 分集信息                         |     |
| id       | num   | 分组id                         |     |
| type     | num   | 0：正片<br/>1：PV&其他<br/>2：OP&ED |     |
| title    | str   |                              |     |

`episodes`数组中的对象：

| 字段          | 类型  | 内容       | 备注  |
|-------------|-----|----------|-----|
| aid         | num | 视频av号    |     |
| badge       | str |          |     |
| badge_info  | obj |          |     |
| badge_type  | num | 0        |     |
| cid         | num | 分集cid    |     |
| cover       | str | 分集封面     |     |
| from        | str | bangumi  |     |
| id          | num | 分集epId   |     |
| is_premiere | num | 0        |     |
| long_title  | str | 长标题      |     |
| share_url   | str | 分集播放页url |     |
| status      | num | 2        |     |
| title       | str | 短标题      |     |
| vid         | str |          |     |

`badge_info`对象：

| 字段             | 类型  | 内容  | 备注  |
|----------------|-----|-----|-----|
| bg_color       | str |     |     |
| bg_color_night | str |     |     |
| text           | str |     |     |

`section`数组中的对象：

**同`main_section`对象**

**示例：**

```shell
curl -L -X GET 'https://api.bilibili.com/pgc/web/season/section?season_id=42290'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "success",
    "result": {
        "main_section": {
            "episodes": [
                {
                    "aid": 300876247,
                    "badge": "",
                    "badge_info": {
                        "bg_color": "#FB7299",
                        "bg_color_night": "#BB5B76",
                        "text": ""
                    },
                    "badge_type": 0,
                    "cid": 772096113,
                    "cover": "http://i0.hdslb.com/bfs/archive/c09aec64c1787e287b0187498a4443177cc2112c.jpg",
                    "from": "bangumi",
                    "id": 606591,
                    "is_premiere": 0,
                    "long_title": "瞒天过海！罪犯新选组",
                    "share_url": "https://www.bilibili.com/bangumi/play/ep606591",
                    "status": 2,
                    "title": "1",
                    "vid": ""
                },
                {
                    "aid": 555940678,
                    "badge": "",
                    "badge_info": {
                        "bg_color": "#FB7299",
                        "bg_color_night": "#BB5B76",
                        "text": ""
                    },
                    "badge_type": 0,
                    "cid": 779868818,
                    "cover": "http://i0.hdslb.com/bfs/archive/52ccef75fc179c7f8a4f2ff989a1249c78f564e0.jpg",
                    "from": "bangumi",
                    "id": 606592,
                    "is_premiere": 0,
                    "long_title": "光芒四射！遗物日本刀",
                    "share_url": "https://www.bilibili.com/bangumi/play/ep606592",
                    "status": 2,
                    "title": "2",
                    "vid": ""
                },
                {
                    "aid": 216208730,
                    "badge": "",
                    "badge_info": {
                        "bg_color": "#FB7299",
                        "bg_color_night": "#BB5B76",
                        "text": ""
                    },
                    "badge_type": 0,
                    "cid": 779450100,
                    "cover": "http://i0.hdslb.com/bfs/archive/7eee64ff758fb426b6cd16bc7d525f4de98fd4dc.jpg",
                    "from": "bangumi",
                    "id": 606596,
                    "is_premiere": 0,
                    "long_title": "乔装打扮！潜入花街",
                    "share_url": "https://www.bilibili.com/bangumi/play/ep606596",
                    "status": 2,
                    "title": "3",
                    "vid": ""
                },
                {
                    "aid": 386385026,
                    "badge": "",
                    "badge_info": {
                        "bg_color": "#FB7299",
                        "bg_color_night": "#BB5B76",
                        "text": ""
                    },
                    "badge_type": 0,
                    "cid": 786667756,
                    "cover": "http://i0.hdslb.com/bfs/archive/6851be597e1fa496a8b1486000e83654c2fac45c.jpg",
                    "from": "bangumi",
                    "id": 606597,
                    "is_premiere": 0,
                    "long_title": "一探究竟！神秘妖刀",
                    "share_url": "https://www.bilibili.com/bangumi/play/ep606597",
                    "status": 2,
                    "title": "4",
                    "vid": ""
                },
                {
                    "aid": 729094525,
                    "badge": "",
                    "badge_info": {
                        "bg_color": "#FB7299",
                        "bg_color_night": "#BB5B76",
                        "text": ""
                    },
                    "badge_type": 0,
                    "cid": 793386614,
                    "cover": "http://i0.hdslb.com/bfs/archive/5dfa30d48188b26c616a05745132a59f6823dade.jpg",
                    "from": "bangumi",
                    "id": 606598,
                    "is_premiere": 0,
                    "long_title": "展现无遗！和尚与医生的决心",
                    "share_url": "https://www.bilibili.com/bangumi/play/ep606598",
                    "status": 2,
                    "title": "5",
                    "vid": ""
                },
                {
                    "aid": 599314561,
                    "badge": "",
                    "badge_info": {
                        "bg_color": "#FB7299",
                        "bg_color_night": "#BB5B76",
                        "text": ""
                    },
                    "badge_type": 0,
                    "cid": 798315932,
                    "cover": "http://i0.hdslb.com/bfs/archive/3daae9ee434d335ff9e5a9d8244bc1e6b7ffa8d0.jpg",
                    "from": "bangumi",
                    "id": 606599,
                    "is_premiere": 0,
                    "long_title": "直捣敌巢！败德白川屋",
                    "share_url": "https://www.bilibili.com/bangumi/play/ep606599",
                    "status": 2,
                    "title": "6",
                    "vid": ""
                },
                {
                    "aid": 259686552,
                    "badge": "",
                    "badge_info": {
                        "bg_color": "#FB7299",
                        "bg_color_night": "#BB5B76",
                        "text": ""
                    },
                    "badge_type": 0,
                    "cid": 807199844,
                    "cover": "http://i0.hdslb.com/bfs/archive/9ff73932c210abe64373be6f3959c2eee6c7470b.jpg",
                    "from": "bangumi",
                    "id": 606600,
                    "is_premiere": 0,
                    "long_title": "全力阻止！新选组解散",
                    "share_url": "https://www.bilibili.com/bangumi/play/ep606600",
                    "status": 2,
                    "title": "7",
                    "vid": ""
                },
                {
                    "aid": 514942530,
                    "badge": "",
                    "badge_info": {
                        "bg_color": "#FB7299",
                        "bg_color_night": "#BB5B76",
                        "text": ""
                    },
                    "badge_type": 0,
                    "cid": 814175863,
                    "cover": "http://i0.hdslb.com/bfs/archive/31a19bf3af61e58f1e8c4a387779fc3272cb47a7.jpg",
                    "from": "bangumi",
                    "id": 606601,
                    "is_premiere": 0,
                    "long_title": "激烈战斗！池田屋事件",
                    "share_url": "https://www.bilibili.com/bangumi/play/ep606601",
                    "status": 2,
                    "title": "8",
                    "vid": ""
                },
                {
                    "aid": 515024193,
                    "badge": "",
                    "badge_info": {
                        "bg_color": "#FB7299",
                        "bg_color_night": "#BB5B76",
                        "text": ""
                    },
                    "badge_type": 0,
                    "cid": 819960797,
                    "cover": "http://i0.hdslb.com/bfs/archive/68a0a12a74e99b6cd85cfa0fb7be70d82d8b6558.jpg",
                    "from": "bangumi",
                    "id": 606602,
                    "is_premiere": 0,
                    "long_title": "真心炸裂！人之思绪 鬼之念想",
                    "share_url": "https://www.bilibili.com/bangumi/play/ep606602",
                    "status": 2,
                    "title": "9",
                    "vid": ""
                },
                {
                    "aid": 430293537,
                    "badge": "",
                    "badge_info": {
                        "bg_color": "#FB7299",
                        "bg_color_night": "#BB5B76",
                        "text": ""
                    },
                    "badge_type": 0,
                    "cid": 827739564,
                    "cover": "http://i0.hdslb.com/bfs/archive/6411f71c947ba9b011ca0fe2891334147ef1e14d.jpg",
                    "from": "bangumi",
                    "id": 606603,
                    "is_premiere": 0,
                    "long_title": "全力守护！美利坚黑船",
                    "share_url": "https://www.bilibili.com/bangumi/play/ep606603",
                    "status": 2,
                    "title": "10",
                    "vid": ""
                },
                {
                    "aid": 858116183,
                    "badge": "",
                    "badge_info": {
                        "bg_color": "#FB7299",
                        "bg_color_night": "#BB5B76",
                        "text": ""
                    },
                    "badge_type": 0,
                    "cid": 833436271,
                    "cover": "http://i0.hdslb.com/bfs/archive/48736284b5cf0f3515cddb95f1c1b8658ec6c5ff.jpg",
                    "from": "bangumi",
                    "id": 606604,
                    "is_premiere": 0,
                    "long_title": "勇往直前！京都大决战",
                    "share_url": "https://www.bilibili.com/bangumi/play/ep606604",
                    "status": 2,
                    "title": "11",
                    "vid": ""
                },
                {
                    "aid": 773279679,
                    "badge": "会员",
                    "badge_info": {
                        "bg_color": "#FB7299",
                        "bg_color_night": "#BB5B76",
                        "text": "会员"
                    },
                    "badge_type": 0,
                    "cid": 840839493,
                    "cover": "http://i0.hdslb.com/bfs/archive/316f7c8a750699bf53ee44d43669fabb0271be86.jpg",
                    "from": "bangumi",
                    "id": 606605,
                    "is_premiere": 0,
                    "long_title": "替身传说！罪犯新选组",
                    "share_url": "https://www.bilibili.com/bangumi/play/ep606605",
                    "status": 13,
                    "title": "12",
                    "vid": ""
                }
            ],
            "id": 81861,
            "title": "正片",
            "type": 0
        },
        "section": [
            {
                "episodes": [
                    {
                        "aid": 898153042,
                        "badge": "",
                        "badge_info": {
                            "bg_color": "#FB7299",
                            "bg_color_night": "#BB5B76",
                            "text": ""
                        },
                        "badge_type": 0,
                        "cid": 766274696,
                        "cover": "http://i0.hdslb.com/bfs/archive/ac27ed20081e99fc36720ef0714f81d8df2c279a.png",
                        "from": "bangumi",
                        "id": 576387,
                        "is_premiere": 0,
                        "long_title": "",
                        "share_url": "https://www.bilibili.com/bangumi/play/ep576387",
                        "status": 2,
                        "title": "PV",
                        "vid": ""
                    },
                    {
                        "aid": 215937670,
                        "badge": "",
                        "badge_info": {
                            "bg_color": "#FB7299",
                            "bg_color_night": "#BB5B76",
                            "text": ""
                        },
                        "badge_type": 0,
                        "cid": 773008915,
                        "cover": "http://i0.hdslb.com/bfs/archive/0a6b589e9175dfee1d9699fb55c5c0677941994a.png",
                        "from": "bangumi",
                        "id": 606995,
                        "is_premiere": 0,
                        "long_title": "",
                        "share_url": "https://www.bilibili.com/bangumi/play/ep606995",
                        "status": 2,
                        "title": "西川贵教",
                        "vid": ""
                    },
                    {
                        "aid": 813460609,
                        "badge": "",
                        "badge_info": {
                            "bg_color": "#FB7299",
                            "bg_color_night": "#BB5B76",
                            "text": ""
                        },
                        "badge_type": 0,
                        "cid": 773007362,
                        "cover": "http://i0.hdslb.com/bfs/archive/6c8f4136731c1c2f8171f5c006f79f0603d11bdf.png",
                        "from": "bangumi",
                        "id": 606998,
                        "is_premiere": 0,
                        "long_title": "",
                        "share_url": "https://www.bilibili.com/bangumi/play/ep606998",
                        "status": 2,
                        "title": "幕末替身声优采访",
                        "vid": ""
                    },
                    {
                        "aid": 556287340,
                        "badge": "",
                        "badge_info": {
                            "bg_color": "#FB7299",
                            "bg_color_night": "#BB5B76",
                            "text": ""
                        },
                        "badge_type": 0,
                        "cid": 785468206,
                        "cover": "http://i0.hdslb.com/bfs/archive/77564ca30f1a4d3a64cfc292a7fd989c09a30027.png",
                        "from": "bangumi",
                        "id": 660464,
                        "is_premiere": 0,
                        "long_title": "",
                        "share_url": "https://www.bilibili.com/bangumi/play/ep660464",
                        "status": 2,
                        "title": "声优对谈 01",
                        "vid": ""
                    },
                    {
                        "aid": 984099086,
                        "badge": "",
                        "badge_info": {
                            "bg_color": "#FB7299",
                            "bg_color_night": "#BB5B76",
                            "text": ""
                        },
                        "badge_type": 0,
                        "cid": 792637456,
                        "cover": "http://i0.hdslb.com/bfs/archive/77564ca30f1a4d3a64cfc292a7fd989c09a30027.png",
                        "from": "bangumi",
                        "id": 669591,
                        "is_premiere": 0,
                        "long_title": "",
                        "share_url": "https://www.bilibili.com/bangumi/play/ep669591",
                        "status": 2,
                        "title": "声优对谈 02",
                        "vid": ""
                    },
                    {
                        "aid": 259364452,
                        "badge": "",
                        "badge_info": {
                            "bg_color": "#FB7299",
                            "bg_color_night": "#BB5B76",
                            "text": ""
                        },
                        "badge_type": 0,
                        "cid": 798995285,
                        "cover": "http://i0.hdslb.com/bfs/archive/77564ca30f1a4d3a64cfc292a7fd989c09a30027.png",
                        "from": "bangumi",
                        "id": 670446,
                        "is_premiere": 0,
                        "long_title": "",
                        "share_url": "https://www.bilibili.com/bangumi/play/ep670446",
                        "status": 2,
                        "title": "声优对谈 03",
                        "vid": ""
                    },
                    {
                        "aid": 772146427,
                        "badge": "",
                        "badge_info": {
                            "bg_color": "#FB7299",
                            "bg_color_night": "#BB5B76",
                            "text": ""
                        },
                        "badge_type": 0,
                        "cid": 808201440,
                        "cover": "http://i0.hdslb.com/bfs/archive/77564ca30f1a4d3a64cfc292a7fd989c09a30027.png",
                        "from": "bangumi",
                        "id": 672539,
                        "is_premiere": 0,
                        "long_title": "",
                        "share_url": "https://www.bilibili.com/bangumi/play/ep672539",
                        "status": 2,
                        "title": "声优对谈 04",
                        "vid": ""
                    },
                    {
                        "aid": 687381109,
                        "badge": "",
                        "badge_info": {
                            "bg_color": "#FB7299",
                            "bg_color_night": "#BB5B76",
                            "text": ""
                        },
                        "badge_type": 0,
                        "cid": 814826609,
                        "cover": "http://i0.hdslb.com/bfs/archive/77564ca30f1a4d3a64cfc292a7fd989c09a30027.png",
                        "from": "bangumi",
                        "id": 676133,
                        "is_premiere": 0,
                        "long_title": "",
                        "share_url": "https://www.bilibili.com/bangumi/play/ep676133",
                        "status": 2,
                        "title": "声优对谈 05",
                        "vid": ""
                    },
                    {
                        "aid": 730289528,
                        "badge": "",
                        "badge_info": {
                            "bg_color": "#FB7299",
                            "bg_color_night": "#BB5B76",
                            "text": ""
                        },
                        "badge_type": 0,
                        "cid": 826951152,
                        "cover": "http://i0.hdslb.com/bfs/archive/77564ca30f1a4d3a64cfc292a7fd989c09a30027.png",
                        "from": "bangumi",
                        "id": 676134,
                        "is_premiere": 0,
                        "long_title": "",
                        "share_url": "https://www.bilibili.com/bangumi/play/ep676134",
                        "status": 2,
                        "title": "声优对谈 07",
                        "vid": ""
                    },
                    {
                        "aid": 602813211,
                        "badge": "",
                        "badge_info": {
                            "bg_color": "#FB7299",
                            "bg_color_night": "#BB5B76",
                            "text": ""
                        },
                        "badge_type": 0,
                        "cid": 826951370,
                        "cover": "http://i0.hdslb.com/bfs/archive/77564ca30f1a4d3a64cfc292a7fd989c09a30027.png",
                        "from": "bangumi",
                        "id": 676135,
                        "is_premiere": 0,
                        "long_title": "",
                        "share_url": "https://www.bilibili.com/bangumi/play/ep676135",
                        "status": 2,
                        "title": "声优对谈 08",
                        "vid": ""
                    },
                    {
                        "aid": 515295782,
                        "badge": "",
                        "badge_info": {
                            "bg_color": "#FB7299",
                            "bg_color_night": "#BB5B76",
                            "text": ""
                        },
                        "badge_type": 0,
                        "cid": 826951255,
                        "cover": "http://i0.hdslb.com/bfs/archive/77564ca30f1a4d3a64cfc292a7fd989c09a30027.png",
                        "from": "bangumi",
                        "id": 676137,
                        "is_premiere": 0,
                        "long_title": "",
                        "share_url": "https://www.bilibili.com/bangumi/play/ep676137",
                        "status": 2,
                        "title": "声优对谈 09",
                        "vid": ""
                    },
                    {
                        "aid": 815269384,
                        "badge": "",
                        "badge_info": {
                            "bg_color": "#FB7299",
                            "bg_color_night": "#BB5B76",
                            "text": ""
                        },
                        "badge_type": 0,
                        "cid": 826951558,
                        "cover": "http://i0.hdslb.com/bfs/archive/77564ca30f1a4d3a64cfc292a7fd989c09a30027.png",
                        "from": "bangumi",
                        "id": 676138,
                        "is_premiere": 0,
                        "long_title": "",
                        "share_url": "https://www.bilibili.com/bangumi/play/ep676138",
                        "status": 2,
                        "title": "声优对谈 10",
                        "vid": ""
                    }
                ],
                "id": 82126,
                "title": "PV&其他",
                "type": 1
            },
            {
                "episodes": [
                    {
                        "aid": 556712105,
                        "badge": "",
                        "badge_info": {
                            "bg_color": "#FB7299",
                            "bg_color_night": "#BB5B76",
                            "text": ""
                        },
                        "badge_type": 0,
                        "cid": 794382832,
                        "cover": "http://i0.hdslb.com/bfs/archive/1f4ab8b9af0689900e7c486c4e676e27988091be.png",
                        "from": "bangumi",
                        "id": 670062,
                        "is_premiere": 0,
                        "long_title": "",
                        "share_url": "https://www.bilibili.com/bangumi/play/ep670062",
                        "status": 2,
                        "title": "NCOP",
                        "vid": ""
                    },
                    {
                        "aid": 259129266,
                        "badge": "",
                        "badge_info": {
                            "bg_color": "#FB7299",
                            "bg_color_night": "#BB5B76",
                            "text": ""
                        },
                        "badge_type": 0,
                        "cid": 794382772,
                        "cover": "http://i0.hdslb.com/bfs/archive/d08738a452187a0229c3b99beaf1cb4ff868a030.png",
                        "from": "bangumi",
                        "id": 670063,
                        "is_premiere": 0,
                        "long_title": "",
                        "share_url": "https://www.bilibili.com/bangumi/play/ep670063",
                        "status": 2,
                        "title": "NCED",
                        "vid": ""
                    }
                ],
                "id": 85065,
                "title": "OP&ED",
                "type": 2
            }
        ]
    }
}
```

</details>
