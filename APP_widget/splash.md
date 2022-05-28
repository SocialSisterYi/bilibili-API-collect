# APP端开屏图片

- [获取APP端开屏图片列表](#获取APP端开屏图片列表)
- [获取其他的 ~~广告~~ 图片](#app-端的-广告-一些图片)

---

## 获取APP端开屏图片列表

> http://app.bilibili.com/x/v2/splash/brand/list

*请求方式：GET*

鉴权方式：APP

**url参数：**

| 参数名 | 类型 | 内容       | 必要性      | 备注 |
| ------ | ---- | ---------- | ----------- | ---- |
| appkey | str  | APP密钥    | APP方式必要 |      |
| ts     | num  | 当前时间戳 | APP方式必要 |      |
| sign   | str  | APP签名    | APP方式必要 |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                 |
| ------- | ---- | -------- | ---------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-3：API校验密匙错误<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                              |
| ttl     | num  | 1        |                                                      |
| data    | obj  | 信息本体 |                                                      |

`data`对象：

| 字段          | 类型  | 内容         | 备注         |
| ------------- | ----- | ------------ | ------------ |
| pull_interval | num   | 1800         | 作用尚不明确 |
| forcibly      | bool  | false        | 作用尚不明确 |
| rule          | str   | order        | 作用尚不明确 |
| list          | array | 开屏图片列表 |              |
| show          | array | 默认显示项   |              |

`data`中的`list`数组：

| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| 0    | obj  | 开屏图片1     |      |
| n    | obj  | 开屏图片(n+1) |      |
| ……   | obj  | ……            | ……   |

`list`数组中的对象：

| 字段     | 类型 | 内容                  | 备注 |
| -------- | ---- | --------------------- | ---- |
| id       | num  | 开屏图片id            |      |
| thumb    | str  | 开屏图片url           |      |
| logo_url | str  | “bilibili”logo图片url |      |

`data`中的`show`数组：

| 项   | 类型 | 内容       | 备注 |
| ---- | ---- | ---------- | ---- |
| 0    | obj  | 套了个娃？ |      |

`show`数组中的对象：

| 字段        | 类型 | 内容       | 备注         |
| ----------- | ---- | ---------- | ------------ |
| id          | num  | 开屏图片id |              |
| begin_time  | num  | 起始时间？ | 时间戳       |
| end_time    | num  | 结束时间？ | 时间戳       |
| probability | num  | 0          | 作用尚不明确 |
| duration    | num  | 显示时间？ | 单位为毫秒   |

**示例：**

```shell
curl -G 'http://app.bilibili.com/x/v2/splash/brand/list' \
--data-urlencode 'appkey=1d8b6e7d45233436' \
--data-urlencode 'ts=0' \
--data-urlencode 'sign=78a89e153cd6231a4a4d55013aa063ce'
```

<details>
<summary>查看响应示例：</summary>
<!--
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

![]( http://i0.hdslb.com/bfs/archive/fe737da5cdedf9dad038e5fd30e957be8a063bc2.png )


## APP 端的 ~~广告~~ 一些图片

> <https://app.bilibili.com/x/v2/splash/list>

*请求方式: GET*

| 参数名 | 类型 | 内容       | 必要性      | 备注 |
| build | int | 客户端内部版本号 | 必要 | |
| mobi_app | str | android, iphone, ipad | 必要 | |
| platform | str | android, ios | 必要 | |
| height | int | 屏幕高度 | 必要 | |
| width | int | 屏幕宽度 | 必要 | |
| birth | str | 生日日期(四位数，例 0101) | 必要 | |

**json 回复**

| 字段    | 类型 | 内容     | 备注                                                 |
| ------- | ---- | -------- | ---------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-3：API校验密匙错误<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                              |
| ttl     | num  | 1        |                                                      |
| data    | obj  | 信息本体 |                                                      |

`data` 字段：

| 字段    | 类型 | 内容     | 备注                                                 |
| splash_request_id | str | 不知道 | |
| max_time | int | 最长显示时间？ | |
| min_interval | int | 最少显示时间？ | 千分之一秒单位 |
| pull_interval | int | 显示时间？ | |
| list | list | 广告 list | |

`list` 中的对象 ~~(不得不说 bilibili 的广告准备真精良)~~：

| 字段    | 类型 | 内容     | 备注                                                 |
| id | int | 不知道 | |
| type | int | 不知道 | |
| card_type | int | 不知道 | |
| duration | int | 持续时间？ | |
| begin_time | int | 开始时间? | 时间戳 |
| end_time | int | 停止时间？ | 时间戳 | 
| thumb | url | ![](https: //i0.hdslb.com/bfs/sycp/creative_img/202205/7743233596d9c4addf44289df7f32e3a.jpg) | 内容不用说了吧 |
| hash | str | 不知道 | |
| logo_url | str | 不知道 | 空的 |
| logo_hash | str | 不知道 | 也是空的 |
| skip | int | 是否跳转？ | |
| uri | url | 跳转的 url | |
| url_title | str | 标题？ | |
| source | int | 不知道 | |
| cm_mark | int | 不知道 | |
| ad_cb | str | 不知道 | |
| resource_id | int | 不知道 | |
| request_id | str | 不知道 | |
| client_ip | ip_v4 | 客户端的 IP？| |
| is_ad | bool | 不知道 | |
| is_ad_loc | bool | 不知道 | |
| schema_callup_white_list | list | 跳转的 APP 的白名单 | |
| extra | dict | 显示信息？ | |
| enable_pre_download | bool | 是否可以当场下载 APP? | |
| enable_background_download | bool | 是否可以静默下载 APP? | |
| interact_type| int | 是否可以跳转(互动)？ | |
| interact_url | url | 跳转(互动) url | |
| interact_distance | int | 暂不明确 | |
| guide_button_list | list | 所有的按钮 | |

~~ 真不知道这种 API 有什么解析的作用。。。~~

**示例：**

```shell
curl -G 'http://app.bilibili.com/x/v2/splash/list' \
--data-urlencode="build=999999999" \
--data-urlencode="mobi_app=android" \
--data-urlencode="platform=android" \
--data-urlencode="height=1920" \
--data-urlencode="width=1080" \
--data-urlencode="birth=0101"
```
<details>
<summary>查看响应示例(慎点，广告多的要命，我的 IDE 加载时都卡了，即使缩减了) ~~救命，卡死了~~ ：</summary>

``` python
# Python 格式的 dict, 将就看一下，提取了 data
# 已缩减，一共有二十万行，全是广告，醉了
dct = {
    "max_time": 4,
    "min_interval": 14400,
    "pull_interval": 900,
    "list": [
        {
            "id": 7473,
            "type": 1,
            "card_type": 15,
            "duration": 3,
            "begin_time": 1653580800,
            "end_time": 1653667199,
            "thumb": "https: //i0.hdslb.com/bfs/sycp/creative_img/202205/7743233596d9c4addf44289df7f32e3a.jpg",
            "hash": "58d1ffad328fc0dff3653ca4a8d81b9e",
            "logo_url": "",
            "logo_hash": "",
            "skip": 1,
            "uri": "https://gxb.mmstat.com/gxb.gif?t=https%3A%2F%2Fequity.tmall.com%2Ftm%3FagentId%3D1598070%26bc_fl_src%3Dtmall_market_llb_1_1762697%26llbPlatform%3D_pube%26llbOsd%3D1%26mm_unid%3D1_11094511_560501015e6d5757020607530b6f5353086656040b075e&v=644035c3dbd3&di=__IDFA__&dim=__IMEI__&oaid=__OAID__&bc_fl_src=tmall_market_llb_1_1762697&llbPlatform=_pubu&llbOsd=1&agentId=1598070",
            "uri_title": "",
            "source": 929,
            "cm_mark": 1,
            "ad_cb": "CM7OARCXzxIYsTogADCo1R04oQdCHzE2NTM2NjE0NjA1NjlxMTcyYTI3YTBhMTcycTE1MzdI2dCdr5AwUgnoi4/lt57luIJo////////////AXD///////////8BgAFLiAHOzgGyASCNv/lsldJA9UcshRdPX0KJuJjnmZZA0Hypp8HytKuiT/ACl88S2AOxOg==",
            "resource_id": 926,
            "request_id": "1653661460569q172a27a0a172q1537",
            "client_ip": "153.34.54.14",
            "is_ad": True,
            "is_ad_loc": True,
            "schema_callup_white_list": [
                "tmall",
                "taobao",
                "openapp.jdmobile",
                "weixin",
                "alipays",
                "tbopen",
                "eleme",
                "qqmusic",
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
            ],
            "extra": {
                "use_ad_web_v2": True,
                "show_urls": [
                    "https://g.cn.miaozhen.com/x/k=2295590&p=89WTd&dx=__IPDX__&rt=2&pro=s&ns=__IP__&ni=__IESID__&v=__LOC__&xa=__ADPLATFORM__&tr=__REQUESTID__&vg=__AUTOPLAY__&nh=__AUTOREFRESH__&mo=__OS__&m0=__OPENUDID__&m0a=__DUID__&m1=__ANDROIDID1__&m1a=__ANDROIDID__&m2=__IMEI__&m4=__AAID__&m5=__IDFA__&m6=__MAC1__&m6a=__MAC__&m11=__OAID__&m14=__CAID__&m5a=__IDFV__&mn=__ANAME__&m5b=__IDFA1__&m11a=__OAID1__&m14a=__CAID1__&o="
                ],
                "click_urls": [
                    "https://e.cn.miaozhen.com/r/k=2295590&p=89WTd&dx=__IPDX__&rt=2&pro=s&ns=__IP__&ni=__IESID__&v=__LOC__&xa=__ADPLATFORM__&tr=__REQUESTID__&mo=__OS__&m0=__OPENUDID__&m0a=__DUID__&m1=__ANDROIDID1__&m1a=__ANDROIDID__&m2=__IMEI__&m4=__AAID__&m5=__IDFA__&m6=__MAC1__&m6a=__MAC__&m11=__OAID__&m14=__CAID__&m5a=__IDFV__&mn=__ANAME__&m5b=__IDFA1__&m11a=__OAID1__&m14a=__CAID1__&o="
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
                ],
                "card": {
                    "card_type": 0,
                    "extreme_team_status": False,
                    "support_transition": False,
                    "under_player_interaction_style": 0,
                    "grade_denominator": 0,
                    "star_level": 0,
                    "live_booking_population_threshold": 0,
                    "ori_mark_hidden": 0,
                    "use_multi_cover": False,
                    "fold_time": 0,
                    "live_room_popularity": 0,
                    "live_tag_show": False,
                    "grade_level": 0,
                },
                "report_time": 0,
                "sales_type": 75,
                "special_industry": False,
                "preload_landingpage": 0,
                "share_info": {},
                "upzone_entrance_type": 0,
                "upzone_entrance_report_id": 0,
                "topview_pic_url": "",
                "topview_video_url": "",
                "click_area": 0,
                "shop_id": 0,
                "up_mid": 0,
                "track_id": "pbaes.usQXCK8mtPyInZ6TlgUE3WT5gMWLU89o3guKCQbmTkJSyJh5c3PfqzA9mo2h6vrYahFNbyuORlKEijmroC2-pw==",
                "enable_store_direct_launch": 0,
                "enable_double_jump": False,
                "store_callup_card": False,
                "enable_h5_alert": False,
                "special_industry_style": 0,
                "macro_replace_priority": 1,
                "feedback_panel_style": 0,
                "ad_content_type": 0,
                "enable_h5_pre_load": 0,
                "product_id": 0,
                "landingpage_download_style": 2,
            },
            "enable_pre_download": True,
            "enable_background_download": True,
            "interact_type": 1,
            "interact_url": "https://gxb.mmstat.com/gxb.gif?t=https%3A%2F%2Fequity.tmall.com%2Ftm%3FagentId%3D1598070%26bc_fl_src%3Dtmall_market_llb_1_1762697%26llbPlatform%3D_pube%26llbOsd%3D1%26mm_unid%3D1_11094511_560501015e6d5757020607530b6f5353086656040b075e&v=644035c3dbd3&di=__IDFA__&dim=__IMEI__&oaid=__OAID__&bc_fl_src=tmall_market_llb_1_1762697&llbPlatform=_pubu&llbOsd=1&agentId=1598070",
            "interact_distance": 60,
            "guide_button_list": [
                {
                    "id": 24800,
                    "x": 50,
                    "y": 75,
                    "bg_color": "#80000000",
                    "bg_color_night": "#80000000",
                    "text_color": "#FFFFFFFF",
                    "text_color_night": "#FFFFFFFF",
                    "guide_instructions": "滑动畅享索尼醇音",
                    "guide_instructions_new": "",
                    "width": 70,
                    "jump_url": "https://gxb.mmstat.com/gxb.gif?t=https%3A%2F%2Fequity.tmall.com%2Ftm%3FagentId%3D1598070%26bc_fl_src%3Dtmall_market_llb_1_1762697%26llbPlatform%3D_pube%26llbOsd%3D1%26mm_unid%3D1_11094511_560501015e6d5757020607530b6f5353086656040b075e&v=644035c3dbd3&di=__IDFA__&dim=__IMEI__&oaid=__OAID__&bc_fl_src=tmall_market_llb_1_1762697&llbPlatform=_pubu&llbOsd=1&agentId=1598070",
                    "schema": "",
                    "schema_package_name": "",
                    "schema_title": "",
                    "schema_title_new": "",
                    "universal_app": "",
                    "height": 7,
                    "slide_threshold_value": 5,
                    "slide_border_color": "#40FFFFFF",
                    "guide_image_url": "",
                    "guide_image_md5": "",
                    "interact_style": 6,
                    "jump_image_url": "https://i0.hdslb.com/bfs/sycp/creative_img/202110/d721c5b34b582d0a88ac602eda0aa6e0.json",
                    "jump_image_md5": "",
                    "schema_image_url": "https://i0.hdslb.com/bfs/sycp/creative_img/202110/d721c5b34b582d0a88ac602eda0aa6e0.json",
                    "schema_image_md5": "",
                    "click_expand_ratio": 100,
                    "logo_image_url": "https://i0.hdslb.com/bfs/sycp/mgk/img/202106/17006d50ec506813727b1cb5c6fc58b1.png",
                    "logo_image_md5": "86bc1b68ce4708d918cd4e01a975ca17",
                    "related_ids": [],
                    "schema_list": [],
                    "font_ratio": 0.23,
                    "seq": 0,
                    "degrade_type": 1,
                    "twist_angle": 0.0,
                    "twist_speed": 0.0,
                    "secondary_guide_instructions": "",
                    "secondary_font_ratio": 0,
                    "secondary_text_color": "",
                    "secondary_text_color_night": "",
                },
                {
                    "id": 24803,
                    "x": 50,
                    "y": 80,
                    "bg_color": "#80000000",
                    "bg_color_night": "#80000000",
                    "text_color": "#FFFFFFFF",
                    "text_color_night": "#FFFFFFFF",
                    "guide_instructions": "滑动畅享索尼醇音",
                    "guide_instructions_new": "",
                    "width": 64,
                    "jump_url": "https://gxb.mmstat.com/gxb.gif?t=https%3A%2F%2Fequity.tmall.com%2Ftm%3FagentId%3D1598070%26bc_fl_src%3Dtmall_market_llb_1_1762697%26llbPlatform%3D_pube%26llbOsd%3D1%26mm_unid%3D1_11094511_560501015e6d5757020607530b6f5353086656040b075e&v=644035c3dbd3&di=__IDFA__&dim=__IMEI__&oaid=__OAID__&bc_fl_src=tmall_market_llb_1_1762697&llbPlatform=_pubu&llbOsd=1&agentId=1598070",
                    "schema": "",
                    "schema_package_name": "",
                    "schema_title": "点击进入第三方应用",
                    "schema_title_new": "",
                    "universal_app": "",
                    "height": 3,
                    "slide_threshold_value": 5,
                    "slide_border_color": "#40FFFFFF",
                    "guide_image_url": "",
                    "guide_image_md5": "",
                    "interact_style": 3,
                    "jump_image_url": "https://i0.hdslb.com/bfs/sycp/creative_img/202110/d721c5b34b582d0a88ac602eda0aa6e0.json",
                    "jump_image_md5": "",
                    "schema_image_url": "https://i0.hdslb.com/bfs/sycp/creative_img/202110/d721c5b34b582d0a88ac602eda0aa6e0.json",
                    "schema_image_md5": "",
                    "click_expand_ratio": 100,
                    "logo_image_url": "https://i0.hdslb.com/bfs/sycp/mgk/img/202106/17006d50ec506813727b1cb5c6fc58b1.png",
                    "logo_image_md5": "86bc1b68ce4708d918cd4e01a975ca17",
                    "related_ids": [24800],
                    "schema_list": [],
                    "font_ratio": 0.23,
                    "seq": 99,
                    "degrade_type": 1,
                    "twist_angle": 0.0,
                    "twist_speed": 0.0,
                    "secondary_guide_instructions": "",
                    "secondary_font_ratio": 0,
                    "secondary_text_color": "",
                    "secondary_text_color_night": "",
                },
            ],
        }
        # ... a lot of
    ], 
    "splash_request_id": "1653661460572q172a27a3a3q2165",
}
``` 
