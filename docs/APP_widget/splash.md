# APP端开屏图片

## 获取APP端开屏图片列表

> https://app.bilibili.com/x/v2/splash/brand/list

*请求方式：GET*

鉴权方式：APP

**url参数：**

| 参数名    | 类型  | 内容    | 必要性     | 备注  |
|--------|-----|-------|---------|-----|
| appkey | str | APP密钥 | APP方式必要 |     |
| ts     | num | 当前时间戳 | APP方式必要 |     |
| sign   | str | APP签名 | APP方式必要 |     |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                                    |
|---------|-----|------|---------------------------------------|
| code    | num | 返回值  | 0：成功<br />-3：API校验密匙错误<br />-400：请求错误 |
| message | str | 错误信息 | 默认为0                                  |
| ttl     | num | 1    |                                       |
| data    | obj | 信息本体 |                                       |

`data`对象：

| 字段            | 类型    | 内容     | 备注     |
|---------------|-------|--------|--------|
| pull_interval | num   | 1800   | 作用尚不明确 |
| forcibly      | bool  | false  | 作用尚不明确 |
| rule          | str   | order  | 作用尚不明确 |
| list          | array | 开屏图片列表 |        |
| show          | array | 默认显示项  |        |

`data`中的`list`数组：

| 项   | 类型  | 内容        | 备注  |
|-----|-----|-----------|-----|
| 0   | obj | 开屏图片1     |     |
| n   | obj | 开屏图片(n+1) |     |
| ……  | obj | ……        | ……  |

`list`数组中的对象：

| 字段       | 类型  | 内容                  | 备注  |
|----------|-----|---------------------|-----|
| id       | num | 开屏图片id              |     |
| thumb    | str | 开屏图片url             |     |
| logo_url | str | “bilibili”logo图片url |     |

`data`中的`show`数组：

| 项   | 类型  | 内容    | 备注  |
|-----|-----|-------|-----|
| 0   | obj | 套了个娃？ |     |

`show`数组中的对象：

| 字段          | 类型  | 内容     | 备注     |
|-------------|-----|--------|--------|
| id          | num | 开屏图片id |        |
| begin_time  | num | 起始时间？  | 时间戳    |
| end_time    | num | 结束时间？  | 时间戳    |
| probability | num | 0      | 作用尚不明确 |
| duration    | num | 显示时间？  | 单位为毫秒  |

**示例：**

```shell
curl -G 'https://app.bilibili.com/x/v2/splash/brand/list' \
--data-urlencode 'appkey=1d8b6e7d45233436' \
--data-urlencode 'ts=0' \
--data-urlencode 'sign=78a89e153cd6231a4a4d55013aa063ce'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "pull_interval": 1800,
        "forcibly": false,
        "rule": "order",
        "list": [
            {
                "id": 10,
                "thumb": "http://i0.hdslb.com/bfs/archive/e2d2f57e08b511d1a47203859f7bddb4ef9d4e16.png",
                "logo_url": "http://i0.hdslb.com/bfs/archive/ecc9b29bb4b803daf2a46fe5ef71bf530300162c.png"
            },
            {
                "id": 11,
                "thumb": "http://i0.hdslb.com/bfs/archive/fe737da5cdedf9dad038e5fd30e957be8a063bc2.png",
                "logo_url": "http://i0.hdslb.com/bfs/archive/ecc9b29bb4b803daf2a46fe5ef71bf530300162c.png"
            },
            {
                "id": 12,
                "thumb": "http://i0.hdslb.com/bfs/archive/574469a4a20f41ba4dc9ecd41d15f94eea875ed9.png",
                "logo_url": "http://i0.hdslb.com/bfs/archive/ecc9b29bb4b803daf2a46fe5ef71bf530300162c.png"
            },
            {
                "id": 13,
                "thumb": "http://i0.hdslb.com/bfs/archive/af0f4f611faa34340bd4f91def1973ccbfb8fbb3.png",
                "logo_url": "http://i0.hdslb.com/bfs/archive/ecc9b29bb4b803daf2a46fe5ef71bf530300162c.png"
            },
            {
                "id": 14,
                "thumb": "http://i0.hdslb.com/bfs/archive/1d40e975b09d5c87b11b3ae0c9ce6c6b82f63d9e.png",
                "logo_url": "http://i0.hdslb.com/bfs/archive/ecc9b29bb4b803daf2a46fe5ef71bf530300162c.png"
            }
        ],
        "show": [
            {
                "id": 12,
                "begin_time": 1597564800,
                "end_time": 1630753108,
                "probability": 0,
                "duration": 700
            }
        ]
    }
}
```

</details>

如id=11的图片为：

<img src="https://i0.hdslb.com/bfs/archive/fe737da5cdedf9dad038e5fd30e957be8a063bc2.png" referrerpolicy="no-referrer" />


## 获取APP端开屏幕广告信息

> https://app.bilibili.com/x/v2/splash/list

*请求方式: GET*

| 参数名      | 类型  | 内容                    | 必要性 | 备注  |
|----------|-----|-----------------------|-----|-----|
| build    | int | 客户端内部版本号              | 必要  |     |
| mobi_app | str | android, iphone, ipad | 必要  |     |
| platform | str | android, ios          | 必要  |     |
| height   | int | 屏幕高度                  | 必要  |     |
| width    | int | 屏幕宽度                  | 必要  |     |
| birth    | str | 生日日期(四位数，例 0101)      | 必要  |     |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                                    |
|---------|-----|------|---------------------------------------|
| code    | num | 返回值  | 0：成功<br />-3：API校验密匙错误<br />-400：请求错误 |
| message | str | 错误信息 | 默认为0                                  |
| ttl     | num | 1    |                                       |
| data    | obj | 信息本体 |                                       |

`data`对象：

| 字段                | 类型     | 内容                  | 备注      |
|-------------------|--------|---------------------|---------|
| splash_request_id | 当前请求id | 长度为33, 前13位是当前秒级时间戳 |         |
| max_time          | int    | 最长显示时间？             |         |
| min_interval      | int    | 最少显示时间？             | 千分之一秒单位 |
| pull_interval     | int    | 显示时间？               |         |
| keep_ids          | int    | 显示时间？               |         |
| list              | list   | 广告 list             |         |

`list`数组中的对象：

| 字段                         | 类型    | 内容            | 备注     |
|----------------------------|-------|---------------|--------|
| id                         | int   | 广告id          |        |
| type                       | int   | 1             |        |
| card_type                  | int   | 39            |        |
| duration                   | int   | 持续时间？         |        |
| begin_time                 | int   | 开始展示时间        | 秒级时间戳  |
| end_time                   | int   | 停止展示时间        | 毫秒级时间戳 | 
| thumb                      | url   | 广告图片          |        |
| hash                       | str   | 作用尚不明确        |        |
| logo_url                   | str   | 空值            |        |
| logo_hash                  | str   | 空值            |        |
| skip                       | int   | 是否跳转？         |        |
| uri                        | str   | 跳转的url        |        |
| video_url                  | str   | 视频url         |        |
| video_hash                 | str   | 视频hash        |        |
| video_width                | num   | 视频宽度          |        |
| video_height               | num   | 视频高度          |        |
| uri_title                  | str   | 空值            |        |
| source                     | int   | 929           |        |
| cm_mark                    | int   | 1             |        |
| ad_cb                      | str   | 作用尚不明确        |        |
| resource_id                | int   | 926           |        |
| request_id                 | str   | 作用尚不明确        |        |
| client_ip                  | str   | 客户端IP         |        |
| is_ad                      | bool  | 作用尚不明确        |        |
| is_ad_loc                  | bool  | 作用尚不明确        |        |
| schema_title               | str   | 滑动进入第三方应用     |        |
| schema_callup_white_list   | array | 跳转的 APP 的白名单  |        |
| extra                      | obj   | 显示信息？         |        |
| enable_pre_download        | bool  | 是否可以当场下载 APP? |        |
| enable_background_download | bool  | 是否可以静默下载 APP? |        |
| interact_type              | int   | 是否可以跳转(互动)？   |        |
| interact_url               | str   | 跳转(互动) url    |        |
| interact_distance          | int   | 作用尚不明确        |        |
| guide_button_list          | array | 所有的按钮         |        |
| mark_with_skip_style       | num   | 作用尚不明确        |        |
| skip_button_height         | num   | 作用尚不明确        |        |

`extra`对象：

| 字段                         | 类型    | 内容  | 备注  |
|----------------------------|-------|-----|-----|
| use_ad_web_v2              | bool  |     |     |
| show_urls                  | array |     |     |
| click_urls                 | array |     |     |
| show_1s_urls               | array |     |     |
| download_whitelist         | array |     |     |
| open_whitelist             | array |     |     |
| card                       | obj   |     |     |
| report_time                | num   |     |     |
| sales_type                 | num   |     |     |
| special_industry           | bool  |     |     |
| preload_landingpage        | num   |     |     |
| share_info                 | obj   |     |     |
| upzone_entrance_type       | num   |     |     |
| upzone_entrance_report_id  | num   |     |     |
| topview_pic_url            | str   |     |     |
| topview_video_url          | str   |     |     |
| click_area                 | num   |     |     |
| shop_id                    | num   |     |     |
| up_mid                     | num   |     |     |
| track_id                   | str   |     |     |
| enable_store_direct_launch | int   |     |     |
| enable_double_jump         | bool  |     |     |
| store_callup_card          | bool  |     |     |
| enable_h5_alert            | bool  |     |     |
| special_industry_style     | num   |     |     |
| macro_replace_priority     | num   |     |     |
| feedback_panel_style       | num   |     |     |
| ad_content_type            | num   |     |     |
| enable_h5_pre_load         | num   |     |     |
| hot_activity_id            | num   |     |     |
| product_id                 | num   |     |     |
| landingpage_download_style | num   |     |     |

`guide_button_list` 中的对象：

| 字段                           | 类型    | 内容  | 备注    |
|------------------------------|-------|-----|-------|
| id                           | int   |     |       |
| x                            | int   |     |       |
| y                            | int   |     |       |
| bg_color                     | str   |     |       |
| bg_color_night               | str   |     |       |
| text_color                   | str   |     |       |
| text_color_night             | str   |     |       |
| guide_instructions           | str   |     |       |
| guide_instructions_new       | str   | 空值  |       |
| width                        | str   |     |       |
| jump_url                     | str   |     |       |
| schema_package_name          | str   |     |       |
| schema_title                 | str   |     |       |
| schema_title_new             | str   | 空值  |       |
| height                       | str   |     |       |
| slide_threshold_value        | str   |     |       |
| slide_border_color           | str   |     |       |
| guide_image_url              | str   |     |       |
| guide_image_md5              | str   |     |       |
| interact_style               | str   |     |       |
| jump_image_url               | str   |     |       |
| jump_image_md5               | str   |     |       |
| schema_image_url             | str   |     |       |
| schema_image_md5             | str   |     |       |
| click_expand_ratio           | str   |     |       |
| logo_image_url               | str   |     |       |
| logo_image_md5               | str   |     |       |
| related_ids                  | array | 空   |       |
| schema_list                  | array | 空   |       |
| font_ratio                   | num   |     |       |
| seq                          | num   |     |       |
| degrade_type                 | num   |     |       |
| twist_angle                  | num   |     |       |
| twist_speed                  | num   |     |       |
| secondary_guide_instructions | str   |     |       |
| secondary_font_ratio         | num   |     |       |
| secondary_text_color         | str   |     |       |
| secondary_text_color_night   | str   |     |       |
| activity_time                | num   |     | 秒级时间戳 |
| time_show_type               | num   |     |       |

**示例：**

```shell
curl -X GET 'https://app.bilibili.com/x/v2/splash/list' \
    --data-urlencode 'build=999999999' \
    --data-urlencode 'mobi_app=android' \
    --data-urlencode 'platform=android' \
    --data-urlencode 'height=1920' \
    --data-urlencode 'width=1080' \
    --data-urlencode 'birth=0101'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "max_time": 4,
        "min_interval": 14400,
        "pull_interval": 900,
        "keep_ids": null,
        "list": [
            {
                "id": 9460,
                "type": 1,
                "card_type": 39,
                "duration": 5,
                "begin_time": 1663689600,
                "end_time": 1663775999,
                "thumb": "https://i0.hdslb.com/bfs/sycp/creative_img/202208/cb001c291c6011940e29531dcce6b1e8.webp",
                "hash": "712d3df973f99fdcd30c2419d19630dc",
                "logo_url": "",
                "logo_hash": "",
                "skip": 1,
                "uri": "https://market.m.taobao.com/app/mwdk-industry/mwdk-shopping-base/pages/peppa.html?disableNav=YES&merchantCode=HM&pageId=105240&path=%2Fact%2Frax%2Fmanual1455861656935693595&renderChannelCode=HM&siteCode=HM_8_7dd8299642994fa196f9a9aae4fd4391_3&spma=a225z&usePayment=alipayMiniApp&utm_campaign=dwlx&utm_source=1234&targetShopId=199273419",
                "video_url": "http://upos-sz-static.bilivideo.com/ssaxcode/89/jl/n220831a21uql976d44zun4y0ykmjl89-1-SPLASH.mp4",
                "video_hash": "ae10333c160452cc2755d079db10b597",
                "video_width": 1080,
                "video_height": 1920,
                "uri_title": "",
                "source": 929,
                "cm_mark": 1,
                "ad_cb": "COfrARC7jxUY9EkgADDWwCE4oQdCIDE2NjM2NDY2MzY1ODhxMTcyYTI2YTE5MmE5NnE1NDE0SKy0xMi1MFIG5aSp5rSlaP///////////wFw////////////AYABS4gB5+sBsgEg8mQFw0bBxGOGYE8OBhMOd3DE8OGFZXhookrFX4s3UrrwAruPFdgD9Ek=",
                "resource_id": 926,
                "request_id": "1663646636588q172a26a192a96q5414",
                "client_ip": "117.14.146.37",
                "is_ad": true,
                "is_ad_loc": true,
                "schema_title": "滑动进入第三方应用",
                "schema_callup_white_list": [
                    "tmall",
                    "taobao",
                    "openapp.jdmobile",
                    "weixin",
                    "alipays",
                    "tbopen",
                    "eleme",
                    "qqmusic",
                    "pddopen",
                    "upwallet",
                    "yocial://plaza/?tab=0",
                    "hiapplink",
                    "meiju",
                    "midea-meiju",
                    "uclink",
                    "qklink",
                    "taobaolite",
                    "lazyaudio",
                    "meituanwaimai",
                    "baiduboxapp://",
                    "baiduboxapp",
                    "fleamarket",
                    "dewuapp",
                    "duappmoblink",
                    "cmblife",
                    "imeituan",
                    "vmall",
                    "music",
                    "pinduoduo"
                ],
                "extra": {
                    "use_ad_web_v2": true,
                    "show_urls": [
                        "https://g.cn.miaozhen.com/x/k=2315612&p=8EUuC&dx=__IPDX__&rt=2&pro=s&ns=__IP__&ni=__IESID__&v=__LOC__&xa=__ADPLATFORM__&tr=__REQUESTID__&vg=__AUTOPLAY__&nh=__AUTOREFRESH__&mo=__OS__&m0=__OPENUDID__&m0a=__DUID__&m1=__ANDROIDID1__&m1a=__ANDROIDID__&m2=__IMEI__&m4=__AAID__&m5=__IDFA__&m6=__MAC1__&m6a=__MAC__&m11=__OAID__&m14=__CAID__&m5a=__IDFV__&mn=__ANAME__&m5b=__IDFA1__&m11a=__OAID1__&m14a=__CAID1__&o="
                    ],
                    "click_urls": [
                        "https://e.cn.miaozhen.com/r/k=2315612&p=8EUuC&dx=__IPDX__&rt=2&pro=s&ns=__IP__&ni=__IESID__&v=__LOC__&xa=__ADPLATFORM__&tr=__REQUESTID__&mo=__OS__&m0=__OPENUDID__&m0a=__DUID__&m1=__ANDROIDID1__&m1a=__ANDROIDID__&m2=__IMEI__&m4=__AAID__&m5=__IDFA__&m6=__MAC1__&m6a=__MAC__&m11=__OAID__&m14=__CAID__&m5a=__IDFV__&mn=__ANAME__&m5b=__IDFA1__&m11a=__OAID1__&m14a=__CAID1__&o="
                    ],
                    "show_1s_urls": [],
                    "download_whitelist": [],
                    "open_whitelist": [
                        "tmall",
                        "taobao",
                        "openapp.jdmobile",
                        "weixin",
                        "alipays",
                        "tbopen",
                        "eleme",
                        "qqmusic",
                        "pddopen",
                        "upwallet",
                        "yocial://plaza/?tab=0",
                        "hiapplink",
                        "meiju",
                        "midea-meiju",
                        "uclink",
                        "qklink",
                        "taobaolite",
                        "lazyaudio",
                        "meituanwaimai",
                        "baiduboxapp://",
                        "baiduboxapp",
                        "fleamarket",
                        "dewuapp",
                        "duappmoblink",
                        "cmblife",
                        "imeituan",
                        "vmall",
                        "music",
                        "pinduoduo"
                    ],
                    "card": {
                        "card_type": 0,
                        "extreme_team_status": false,
                        "support_transition": false,
                        "under_player_interaction_style": 0,
                        "grade_denominator": 0,
                        "star_level": 0,
                        "live_booking_population_threshold": 0,
                        "ori_mark_hidden": 0,
                        "use_multi_cover": false,
                        "fold_time": 0,
                        "live_room_popularity": 0,
                        "live_tag_show": false,
                        "grade_level": 0
                    },
                    "report_time": 0,
                    "sales_type": 75,
                    "special_industry": false,
                    "preload_landingpage": 0,
                    "share_info": {},
                    "upzone_entrance_type": 0,
                    "upzone_entrance_report_id": 0,
                    "topview_pic_url": "",
                    "topview_video_url": "",
                    "click_area": 0,
                    "shop_id": 0,
                    "up_mid": 0,
                    "track_id": "pbaes.Y5ATuPVlG6ysPF6cvl6W8B-BYexhSJzrKH3NYfC3KIHDb9W5cxPA4_FTEPWYDED5DjfRwb3tcrLppYAqQ87SSg==",
                    "enable_store_direct_launch": 0,
                    "enable_double_jump": false,
                    "store_callup_card": false,
                    "enable_h5_alert": false,
                    "special_industry_style": 0,
                    "macro_replace_priority": 1,
                    "feedback_panel_style": 0,
                    "ad_content_type": 0,
                    "enable_h5_pre_load": 0,
                    "hot_activity_id": 0,
                    "product_id": 0,
                    "landingpage_download_style": 2
                },
                "enable_pre_download": true,
                "enable_background_download": true,
                "interact_type": 1,
                "interact_url": "https://market.m.taobao.com/app/mwdk-industry/mwdk-shopping-base/pages/peppa.html?disableNav=YES&merchantCode=HM&pageId=105240&path=%2Fact%2Frax%2Fmanual1455861656935693595&renderChannelCode=HM&siteCode=HM_8_7dd8299642994fa196f9a9aae4fd4391_3&spma=a225z&usePayment=alipayMiniApp&utm_campaign=dwlx&utm_source=1234&targetShopId=199273419",
                "interact_distance": 60,
                "guide_button_list": [
                    {
                        "id": 49037,
                        "x": 50,
                        "y": 78,
                        "bg_color": "#80000000",
                        "bg_color_night": "#80000000",
                        "text_color": "#FFFFFFFF",
                        "text_color_night": "#FFFFFFFF",
                        "guide_instructions": "点击进入活动页",
                        "guide_instructions_new": "",
                        "width": 70,
                        "jump_url": "https://market.m.taobao.com/app/mwdk-industry/mwdk-shopping-base/pages/peppa.html?disableNav=YES&merchantCode=HM&pageId=105240&path=%2Fact%2Frax%2Fmanual1455861656935693595&renderChannelCode=HM&siteCode=HM_8_7dd8299642994fa196f9a9aae4fd4391_3&spma=a225z&usePayment=alipayMiniApp&utm_campaign=dwlx&utm_source=1234&targetShopId=199273419",
                        "schema_package_name": "",
                        "schema_title": "",
                        "schema_title_new": "",
                        "height": 7,
                        "slide_threshold_value": 5,
                        "slide_border_color": "#40FFFFFF",
                        "guide_image_url": "",
                        "guide_image_md5": "",
                        "interact_style": 6,
                        "jump_image_url": "https://i0.hdslb.com/bfs/sycp/creative_img/202208/f61a66cf54bc71d9bd1b81bde79c0140.json",
                        "jump_image_md5": "26d8b4b516f83a3f9b15fef643464cc6",
                        "schema_image_url": "https://i0.hdslb.com/bfs/sycp/creative_img/202208/f61a66cf54bc71d9bd1b81bde79c0140.json",
                        "schema_image_md5": "26d8b4b516f83a3f9b15fef643464cc6",
                        "click_expand_ratio": 100,
                        "logo_image_url": "https://i0.hdslb.com/bfs/sycp/mgk/img/202106/17006d50ec506813727b1cb5c6fc58b1.png",
                        "logo_image_md5": "86bc1b68ce4708d918cd4e01a975ca17",
                        "related_ids": [],
                        "schema_list": [],
                        "font_ratio": 0.23,
                        "seq": 0,
                        "degrade_type": 1,
                        "twist_angle": 0,
                        "twist_speed": -1,
                        "secondary_guide_instructions": "",
                        "secondary_font_ratio": 0,
                        "secondary_text_color": "",
                        "secondary_text_color_night": "",
                        "activity_time": 1662532059,
                        "time_show_type": 0
                    },
                    {
                        "id": 49040,
                        "x": 50,
                        "y": 83,
                        "bg_color": "#80000000",
                        "bg_color_night": "#80000000",
                        "text_color": "#FFFFFFFF",
                        "text_color_night": "#FFFFFFFF",
                        "guide_instructions": "即可前往 开吃新品",
                        "guide_instructions_new": "",
                        "width": 64,
                        "jump_url": "https://market.m.taobao.com/app/mwdk-industry/mwdk-shopping-base/pages/peppa.html?disableNav=YES&merchantCode=HM&pageId=105240&path=%2Fact%2Frax%2Fmanual1455861656935693595&renderChannelCode=HM&siteCode=HM_8_7dd8299642994fa196f9a9aae4fd4391_3&spma=a225z&usePayment=alipayMiniApp&utm_campaign=dwlx&utm_source=1234&targetShopId=199273419",
                        "schema_package_name": "",
                        "schema_title": "滑动进入第三方应用",
                        "schema_title_new": "",
                        "height": 3,
                        "slide_threshold_value": 5,
                        "slide_border_color": "#40FFFFFF",
                        "guide_image_url": "",
                        "guide_image_md5": "",
                        "interact_style": 3,
                        "jump_image_url": "https://i0.hdslb.com/bfs/sycp/creative_img/202208/f61a66cf54bc71d9bd1b81bde79c0140.json",
                        "jump_image_md5": "26d8b4b516f83a3f9b15fef643464cc6",
                        "schema_image_url": "https://i0.hdslb.com/bfs/sycp/creative_img/202208/f61a66cf54bc71d9bd1b81bde79c0140.json",
                        "schema_image_md5": "26d8b4b516f83a3f9b15fef643464cc6",
                        "click_expand_ratio": 100,
                        "logo_image_url": "https://i0.hdslb.com/bfs/sycp/mgk/img/202106/17006d50ec506813727b1cb5c6fc58b1.png",
                        "logo_image_md5": "86bc1b68ce4708d918cd4e01a975ca17",
                        "related_ids": [
                            49037
                        ],
                        "schema_list": [],
                        "font_ratio": 0.23,
                        "seq": 99,
                        "degrade_type": 0,
                        "twist_angle": 0,
                        "twist_speed": -1,
                        "secondary_guide_instructions": "",
                        "secondary_font_ratio": 0,
                        "secondary_text_color": "",
                        "secondary_text_color_night": "",
                        "activity_time": 1662532059,
                        "time_show_type": 0
                    }
                ],
                "mark_with_skip_style": 0,
                "skip_button_height": 0.0557
            }
        ],
        "splash_request_id": "1663646636605q172a24a57a232q5796"
    }
}
```
</details>
