# 装扮/收藏集

由 [#1080](https://github.com/SocialSisterYi/bilibili-API-collect/issues/1080) 提供

## 装扮/收藏集搜索API

> https://api.bilibili.com/x/garb/v2/mall/home/search

*请求方式: GET*

**URL参数:**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
|----- |--- |------- |----- |--- |
| keyword | str | 关键词 | 不必要 |  |
| ps | int | 每页返回数据的最大值 | 不必要 | |
| pn | int | 当前页数 | 不必要 | |

**JSON回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
|-- |-- |-- |-- |
| code | num | 返回值 | 0：成功 |
| message | str | 错误信息 | 默认为0 |
| ttl | num | 1 |  |
| data | obj | 返回数据 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
|-|---|--|--|
| list | array | 返回数据 | 若无则为 null |
| ps | int | 每页返回数据的最大值 | 默认为20 |
| pn | int | 当前页数 | 默认为1 |
| total | int | 查询到数据的总个数 |  |

`data` 中的 `list` 数组中的对象:

| 字段 | 类型 | 内容 | 备注 |
|-|---|--|--|
| item_id | int | 装扮对应的id | 收藏集均为0,需要在properties获取 |
| name | str | 装扮/收藏集名称 | |
| group_id | int | ?分类的id | |
| group_name | str | ?分类的名称 | |
| part_id | int | 类型id | 装扮为6 收藏集为0 |
| state | str | 当前状态 | 默认为“active” |
| properties | obj | 见下方 | |
| current_activity | obj | 见下方 | |
| next_activity | int | ?下次活动的时间 | |
| current_sources | int | ?活动开始时间 | |
| finish_sources | int | ?活动结束时间 | |
| sale_left_time | int | ?销售剩余时间 | |
| sale_time_end | int | ?销售结束时间 | |
| sale_surplus | int | 未知 | |
| sale_count_desc | str | 销售量显示文本 | |
| total_count_desc | str | 总量显示文本 | |
| tag | str | 当前状态标签 | |
| jump_link | str | 跳转链接 | |
| sales_mode | int | ?销售状态 | |

`list` 数组中的对象中的 `properties` 对象:

共有字段:

| 字段 | 类型 | 内容 | 备注|
|-|---|--|--|
| image_cover | str | 图片封面 | |
| sale_bp_forever_raw | str | 价格 | 以0.01B币为单位|
| type | str | 类型 | 收藏集为dlc_act, 装扮为ip|

装扮特有：

| 字段 | 类型 | 内容 | 备注|
| - | - | ---- | ----- |
| desc | str | 介绍文本 | 仅装扮|
| fan_desc | str | 装扮名称 | 仅装扮|
| fan_item_ids | str | 未知 | 仅装扮|
| fan_mid | str | 该up的uid | 仅装扮|
| fan_no_color | str | 十六进制颜色 | 仅装扮|
| fan_recommend_desc | str | 装备说明 | 仅装扮|
| fan_recommend_jump_type | str | 跳转类型 | 仅装扮|
| fan_recommend_jump_value | str | 跳转值 | 仅装扮|
| fan_share_image | str | 分享时的背景图 | 仅装扮|
| gray_rule | str | 未知 | 仅装扮|
| gray_rule_type | str | 未知 | 仅装扮|
| image_cover_color | str | ?图片封面纯色背景 | 仅装扮|
| is_hide | str | 是否隐藏 | 仅装扮|
| item_id_card | str | 装扮背景卡片id | 仅装扮|
| item_id_emoji | str | 装扮表情包id | 仅装扮|
| item_id_thumbup | str | 装扮点赞动画id | 仅装扮|
| open_platform_vip_discount | str | 是否有大会员减免 | 仅装扮|
| owner_uid | str | UID | 默认为虚拟主播衍生品小货架, 仅装扮|
| rank_investor_show | str | 未知 | 仅装扮|
| realname_auth | str | ?是否需要实名认证 | 仅装扮|
| sale_bp_pm_raw | str | 该装扮基础套餐价格 | 以0.01B币为单位, 仅装扮|
| sale_buy_num_limit | str | 购买限额 | 仅装扮|
| sale_quantity | str | 该装扮粉丝专属套餐限额 | 仅装扮|
| sale_quantity_limit | str | 该装扮粉丝专属套餐是否限额 | 仅装扮|
| sale_region_ip_limit | str | 该装扮限制购买地区 | 仅装扮|
| sale_reserve_switch | str | 未知 | 仅装扮|
| sale_time_begin | str | 开始售卖时的时间戳 | 仅装扮|
| sale_type | str | 售卖类型 | 默认为pay, 仅装扮|
| suit_card_type | str | 仅装扮 | |

收藏集特有:

| 字段 | 类型 | 内容 | 备注 |
| - | ---- | - | --------- |
| book_amount | str | 购买总数 | 仅收藏集 |
| dlc_act_id | str | 收藏集活动id | 仅收藏集 |
| dlc_act_status | str | 收藏集活动状态 | 仅收藏集 |
| dlc_is_free | str | 收藏集抽奖是否免费 | 仅收藏集 |
| dlc_lottery_id | str | 收藏集抽奖id | 仅收藏集 |
| dlc_lottery_sale_quantity | str | 购买总数 | 仅收藏集 |
| dlc_lottery_type | str | ?抽奖类型 | 仅收藏集 |
| dlc_sale_end_time | str | 收藏集抽奖结束时间 | 仅收藏集 |
| dlc_sale_mode | str | 未知 | 仅收藏集 |
| dlc_sale_start_time | str | 收藏集抽奖开始时间 | 仅收藏集 |
| dlc_surplus_stock | str | 未知 | 仅收藏集 |

`list` 数组中的对象中的 `current_activity` 对象:

| 字段 | 类型 | 内容 | 备注 |
| - | --- | --- | - |
| type | str | 当前永久价格活动类型 | 装扮一般是open_platform_vip_discount, 收藏集一般是first_draw_discount |
| time_limit | bool | 是否存在时间限制 |  |
| time_left | int | 剩余时间 |  |
| tag | str | 显示标签 |  |
| price_bp_forever | int | 永久价格 | 以0.01B币为单位 |
| price_bp_month | int | 一个月的价格 | 以0.01B币为单位 |
| type_month | str | 当前一个月的价格活动类型 | 仅装扮 |
| tag_month | str | 显示标签 | 仅装扮 |
| time_limit_month | bool | 是否存在时间限制 | 仅装扮 |
| time_left_month | int | 剩余时间 | 仅装扮 |

**示例:**

搜索关键词为 `2233`, 然而没有结果:

```shell
curl -G 'https://api.bilibili.com/x/garb/v2/mall/home/search' \
--data-urlencode 'keyword=2233' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "list": null,
    "pn": 1,
    "ps": 20,
    "total": 0
  }
}
```

</details>

## 收藏集信息API

> https://api.bilibili.com/x/vas/dlc_act/lottery_home_detail

*请求方式: GET*

**URL参数:**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ----- | ---- | ---- | ---- | ---- |
| act_id | int | 收藏集活动id | 必要 |  |
| lottery_id | int | 收藏集抽奖id|不必要| 但缺了不返回数据 |

**JSON回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| code | num | 返回值 | 0：成功 |
| message | str | 错误信息 | 默认为 0 |
| ttl | num | 1 |  |
| data | obj | 返回数据 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
|-|-|-|-|
| lottery_id | int | 收藏集抽奖id |  |
| name | str | 收藏集抽奖名称 |  |
| item_list | array | 可抽出的物品列表 |  |
| collect_list | obj | 见下方 |  |
| button_bubble | null | 未知 |  |
| guide_info | null | 未知 |  |
| is_booked | int | 未知 |  |
| total_book_cnt | int | 未知 |  |
| is_fission | int | 未知 |  |
| physical_exchange | int | 未知 |  |

`data` 中的 `item_list` 数组中的对象:

|字段 | 类型 | 内容 | 备注|
|-|-|-|-|
|item_type | int | 物品类型 | 目前只拿到个1, 其他值未知|
|card_info | obj | 见下方 |  |

`item_list` 数组中的对象中的 `card_info` 对象:

|字段 | 类型 | 内容 | 备注 |
|-|-|-|-|
|card_type_id | int | 该卡片id |  |
|card_name | str | 该卡片名称 |  |
|card_img | str | 该卡片图片 | 无水印|
|card_type | int | int | 未知|
|video_list | array | 该卡片动态视频 | 无水印|
|is_physical_orientation | int | 该卡片旋转方向 |  |
|card_scarcity | int | 该卡片稀有度 |  |
|is_mute | int | 该卡片是否静音 |  |
|width | int | 该卡片像素宽度 |  |
|height | int | 该卡片像素高度 |  |
|card_ext_text | str | ?该卡片文件名字符串 |  |
|card_img_download | str | 该卡片图片 | 有水印|
|video_list_download | array | 该卡片动态视频 | 有水印|
|subtitles_url | 未知 |  | |
|play | null | 未知 |  |
|tag | null | 未知 |  |
|card_sub_type | int | 未知 |  |
|is_new_tag | int | 未知 |  |
|is_up_tag | int | 未知 |  |
|is_limited_card | int | 未知 |  |
|stock_info | null | 未知 |  |

`data` 中的 `collect_list` 对象:

| 字段 | 类型 | 内容 | 备注|
|-|-|-|-|
| collect_infos | array | 见下方 |  |
| collect_chain | null | 未知 |  |

`collect_list` 中的 `collect_infos` 数组中的对象：

| 字段 | 类型 | 内容 | 备注 |
|-|-|-|-|
| collect_id | int | 收集品id |  |
| start_time | int | 开始时间 |  |
| end_time | int | 结束时间 |  |
| redeem_text | str | 兑换条件 |  |
| redeem_item_type | int | 兑换物类型 |  |
| redeem_item_id | str | 兑换物id |  |
| redeem_item_name | str | 兑换物名称 |  |
| redeem_item_image | str | 兑换物预览图片 |  |
| owned_item_amount | int | 拥有的数量 |  |
| require_item_amount | int | 需要的数量 |  |
| has_redeemed_cnt | int | 兑换次数 |  |
| effective_forever | int | 是否永久有效 |  |
| redeem_item_image_download | str | 未知 | |
| card_item | obj | 见下方 | 有时为 null  |
| jump_url | str | ?跳转链接 |  |
| redeem_cond_type | str | 当前兑换状态 |  |
| remain_stock | int | 当前库存 |  |
| total_stock | int | 总库存 |  |
| lottery_id | int | 抽奖id |  |
| reward_tag | str | 奖励显示标签 |  |
| redeem_detail_image | str | 兑换详情图片 |  |
| redeem_detail_videos | null | 未知 |  |
| sort | int | 排序 |  |
| redeem_items_optional | null | 未知 |  |
| unlock_condition | obj | 见下方 |  |

`collect_infos` 数组中的对象中的 `card_item` 对象:

| 字段 | 类型 | 内容 | 备注|
|-|-|-|-|
| card_type_info | null |  |  |
| card_asset_info | null |  |  |
| play | null |  |  |
| tag | null |  |  |

`collect_infos` 数组中的对象中的 `unlock_condition` 对象:

|字段 | 类型 | 内容 | 备注|
|-|-|-|-|
|unlocked | bool | 是否解锁 |  |
|lock_type | int | 解锁类型 |  |
|expire_at | int | 过期与 |  |
|unlocked_at | int | 解锁于 |  |
|unlock_threshold | int | ?解锁起点 |  |
|current_threshold | int | ?当前起点 |  |

**示例:**

```shell
curl -G --url 'https://api.bilibili.com/x/vas/dlc_act/lottery_home_detail' \
--url-query 'act_id=111' \
--url-query 'lottery_id=15'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "lottery_id": 15,
    "name": "夏日萌菜",
    "item_list": [
      {
        "item_type": 1,
        "card_info": {
          "card_type_id": 700903,
          "card_name": "水中嬉戏·隐藏",
          "card_img": "https://i0.hdslb.com/bfs/baselabs/d41acfc3bfcc9032a9759fbd9e64147a6d9a24b0.png",
          "card_type": 2,
          "video_list": [
            "https://upos-hz-mirrorakam.akamaized.net/panguxcodeboss/2b/y2/_000008vnv2ddoooah248hqoyz2gy22b-1-152111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1723459855&gen=playurlv2&os=akam&oi=1823807565&trid=400d9529a562468c8312c1f4c4beb2e3B&mid=0&platform=html5&og=cos&upsig=d22ca6102adb9ffe257f702047be6ef2&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&hdnts=exp=1723459855~hmac=753ff946c9e4b3813eb72c744ed3a399ba9a225fe4767a7a03835890fcbe4b8a&bvc=vod&nettype=0&orderid=0,1&logo=00000000&f=B_0_0"
          ],
          "is_physical_orientation": 0,
          "card_scarcity": 40,
          "is_mute": 0,
          "width": 1242,
          "height": 1862,
          "card_ext_text": "",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/d38c42b6f1151298888da5902bca5a41e14f67e1.png",
          "video_list_download": [
            "https://upos-hz-mirrorakam.akamaized.net/panguxcodeboss/digital_watermark/ib/30/_00003d7cuie74gr9z2322d7js5b30ib-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1723459855&gen=playurlv2&os=akam&oi=1823807565&trid=400d9529a562468c8312c1f4c4beb2e3B&mid=0&platform=html5&og=hw&upsig=24512302cfa3b1f762f3ad08a0a2f5fe&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&hdnts=exp=1723459855~hmac=5dc3cdfca31fca94c29a2ec945589ff319e97c3291dec2685184ec4083616cc2&bvc=vod&nettype=0&orderid=0,1&logo=00000000&f=B_0_0"
          ],
          "subtitles_url": "",
          "play": null,
          "tag": null,
          "card_sub_type": 0,
          "is_new_tag": 0,
          "is_up_tag": 0,
          "is_limited_card": 0,
          "stock_info": null
        }
      },
      {
        "item_type": 1,
        "card_info": {
          "card_type_id": 700902,
          "card_name": "轻纱花语·隐藏",
          "card_img": "https://i0.hdslb.com/bfs/baselabs/e4721d06a5c435be216b5011f0604c9e07d5e4af.png",
          "card_type": 2,
          "video_list": [
            "https://upos-hz-mirrorakam.akamaized.net/panguxcodeboss/jb/4u/_00001f04wekkvpmr92osvwpej1e4ujb-1-152111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1723459855&gen=playurlv2&os=akam&oi=1823807565&trid=400d9529a562468c8312c1f4c4beb2e3B&mid=0&platform=html5&og=cos&upsig=ad574839c71e5327783acf248b552b3d&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&hdnts=exp=1723459855~hmac=49276ec1afce1a8f571e257fb6d2ab7488f623aa50c2c3b7252258be72315c5e&bvc=vod&nettype=0&orderid=0,1&logo=00000000&f=B_0_0"
          ],
          "is_physical_orientation": 0,
          "card_scarcity": 30,
          "is_mute": 0,
          "width": 1242,
          "height": 1862,
          "card_ext_text": "",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/0e49e7c8108a98944a96bfa594cf7f74c72398cf.png",
          "video_list_download": [
            "https://upos-hz-mirrorakam.akamaized.net/panguxcodeboss/digital_watermark/nb/58/_000007ovzgblf574s1ywvm7inwx58nb-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1723459855&gen=playurlv2&os=akam&oi=1823807565&trid=400d9529a562468c8312c1f4c4beb2e3B&mid=0&platform=html5&og=cos&upsig=ec9de21147240e94494d736f277dfb64&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&hdnts=exp=1723459855~hmac=2370473349a25fae0ea023f65f1e09c70b45d086831eef5f4727b8443acdf9f5&bvc=vod&nettype=0&orderid=0,1&logo=00000000&f=B_0_0"
          ],
          "subtitles_url": "",
          "play": null,
          "tag": null,
          "card_sub_type": 0,
          "is_new_tag": 0,
          "is_up_tag": 0,
          "is_limited_card": 0,
          "stock_info": null
        }
      },
      {
        "item_type": 1,
        "card_info": {
          "card_type_id": 700904,
          "card_name": "甜心女仆",
          "card_img": "https://i0.hdslb.com/bfs/baselabs/e1f9c56a8f49910d07852f2bd648fee910f36ff6.png",
          "card_type": 2,
          "video_list": [
            "https://upos-hz-mirrorakam.akamaized.net/panguxcodeboss/gb/j6/_000015vmteklku8oj1ypmp1yjijj6gb-1-152111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1723459855&gen=playurlv2&os=akam&oi=1823807565&trid=400d9529a562468c8312c1f4c4beb2e3B&mid=0&platform=html5&og=cos&upsig=c7412fe7b155deecbfea939f7c3d1b21&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&hdnts=exp=1723459855~hmac=8989673c367aa0ffbe747cdc66129a6d1698f1c2b60ace24861ad62127cdd6da&bvc=vod&nettype=0&orderid=0,1&logo=00000000&f=B_0_0"
          ],
          "is_physical_orientation": 0,
          "card_scarcity": 20,
          "is_mute": 0,
          "width": 1242,
          "height": 1862,
          "card_ext_text": "",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/e6c69329d843603166fac8d41682c3489fd137d4.png",
          "video_list_download": [
            "https://upos-hz-mirrorakam.akamaized.net/panguxcodeboss/digital_watermark/zb/eq/_000018oi0e68wv4id2vkrk9ovpteqzb-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1723459855&gen=playurlv2&os=akam&oi=1823807565&trid=400d9529a562468c8312c1f4c4beb2e3B&mid=0&platform=html5&og=hw&upsig=f972e8cd996d058deb4e0ffb1d57671e&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&hdnts=exp=1723459855~hmac=99054c626717b4ba61c01bbb0fe59f67feac394b89e19e4bbf95290d3a425f94&bvc=vod&nettype=0&orderid=0,1&logo=00000000&f=B_0_0"
          ],
          "subtitles_url": "",
          "play": null,
          "tag": null,
          "card_sub_type": 0,
          "is_new_tag": 0,
          "is_up_tag": 0,
          "is_limited_card": 0,
          "stock_info": null
        }
      },
      {
        "item_type": 1,
        "card_info": {
          "card_type_id": 700901,
          "card_name": "约会憧憬",
          "card_img": "https://i0.hdslb.com/bfs/baselabs/924ef9a71bf39010935b4a43845bec13c8a2022c.png",
          "card_type": 1,
          "video_list": null,
          "is_physical_orientation": 0,
          "card_scarcity": 10,
          "is_mute": 0,
          "width": 1242,
          "height": 1863,
          "card_ext_text": "",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/40a9ff949ca7a50dbce146ad28fbb567c2583261.png",
          "video_list_download": null,
          "subtitles_url": "",
          "play": null,
          "tag": null,
          "card_sub_type": 0,
          "is_new_tag": 0,
          "is_up_tag": 0,
          "is_limited_card": 0,
          "stock_info": null
        }
      },
      {
        "item_type": 1,
        "card_info": {
          "card_type_id": 700900,
          "card_name": "夏日小憩",
          "card_img": "https://i0.hdslb.com/bfs/baselabs/0eddbfc70200f16bef06acc88ef132eb25ede52d.png",
          "card_type": 1,
          "video_list": null,
          "is_physical_orientation": 0,
          "card_scarcity": 10,
          "is_mute": 0,
          "width": 1242,
          "height": 1863,
          "card_ext_text": "",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/61e26e17705e06ecdfdb9ff97befb19c702cf81e.png",
          "video_list_download": null,
          "subtitles_url": "",
          "play": null,
          "tag": null,
          "card_sub_type": 0,
          "is_new_tag": 0,
          "is_up_tag": 0,
          "is_limited_card": 0,
          "stock_info": null
        }
      },
      {
        "item_type": 1,
        "card_info": {
          "card_type_id": 700899,
          "card_name": "微风校园",
          "card_img": "https://i0.hdslb.com/bfs/baselabs/bbeaf7993566684e328e74d8ef7c47e6242869a2.png",
          "card_type": 1,
          "video_list": null,
          "is_physical_orientation": 0,
          "card_scarcity": 10,
          "is_mute": 0,
          "width": 1242,
          "height": 1863,
          "card_ext_text": "",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/8ac61045334699d621363ccac87153a7128ef0c3.png",
          "video_list_download": null,
          "subtitles_url": "",
          "play": null,
          "tag": null,
          "card_sub_type": 0,
          "is_new_tag": 0,
          "is_up_tag": 0,
          "is_limited_card": 0,
          "stock_info": null
        }
      },
      {
        "item_type": 1,
        "card_info": {
          "card_type_id": 700898,
          "card_name": "萌宠幻想",
          "card_img": "https://i0.hdslb.com/bfs/baselabs/f93f200ec862b4520b30e8f03219fbaca91a2089.png",
          "card_type": 1,
          "video_list": null,
          "is_physical_orientation": 0,
          "card_scarcity": 10,
          "is_mute": 0,
          "width": 1242,
          "height": 1863,
          "card_ext_text": "",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/93e59f3080f6b8070b0d0621496e4ed6cb20cf8f.png",
          "video_list_download": null,
          "subtitles_url": "",
          "play": null,
          "tag": null,
          "card_sub_type": 0,
          "is_new_tag": 0,
          "is_up_tag": 0,
          "is_limited_card": 0,
          "stock_info": null
        }
      },
      {
        "item_type": 1,
        "card_info": {
          "card_type_id": 700897,
          "card_name": "空中环游",
          "card_img": "https://i0.hdslb.com/bfs/baselabs/fc0c020091c0a9fb1778c420bc4f9773a72ea7ba.png",
          "card_type": 1,
          "video_list": null,
          "is_physical_orientation": 0,
          "card_scarcity": 10,
          "is_mute": 0,
          "width": 1242,
          "height": 1863,
          "card_ext_text": "",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/c1c6c9ca84b584bf5f2b0e1ec7d239eb935e4d44.png",
          "video_list_download": null,
          "subtitles_url": "",
          "play": null,
          "tag": null,
          "card_sub_type": 0,
          "is_new_tag": 0,
          "is_up_tag": 0,
          "is_limited_card": 0,
          "stock_info": null
        }
      }
    ],
    "collect_list": {
      "collect_infos": [
        {
          "collect_id": 0,
          "start_time": 1685372400,
          "end_time": 2114406245,
          "redeem_text": "1抽必得勋章，可应用为评论背景&动态卡片",
          "redeem_item_type": 1001,
          "redeem_item_id": "",
          "redeem_item_name": "夏日萌菜勋章",
          "redeem_item_image": "http://i0.hdslb.com/bfs/archive/b3d915c6ad88609fb658393585f018459a7e620d.png",
          "owned_item_amount": 0,
          "require_item_amount": 1,
          "has_redeemed_cnt": 0,
          "effective_forever": 1,
          "redeem_item_image_download": "",
          "card_item": null,
          "jump_url": "",
          "redeem_cond_type": "",
          "remain_stock": 0,
          "total_stock": -1,
          "lottery_id": 0,
          "reward_tag": "",
          "redeem_detail_image": "",
          "redeem_detail_videos": null,
          "sort": 0,
          "redeem_items_optional": null,
          "unlock_condition": {
            "unlocked": true,
            "lock_type": 0,
            "expire_at": 0,
            "unlocked_at": 0,
            "unlock_threshold": 0,
            "current_threshold": 0
          }
        },
        {
          "collect_id": 172,
          "start_time": 1691640000,
          "end_time": 2114406245,
          "redeem_text": "抽出任意5张不同卡牌，即可领取，单UID仅可领取一次",
          "redeem_item_type": 5,
          "redeem_item_id": "56658",
          "redeem_item_name": "夏日萌菜个性主题",
          "redeem_item_image": "https://i0.hdslb.com/bfs/garb/48f755d6d08d96bfebcadee0be4bc34ce42421de.jpg",
          "owned_item_amount": 0,
          "require_item_amount": 5,
          "has_redeemed_cnt": 0,
          "effective_forever": 1,
          "redeem_item_image_download": "",
          "card_item": {
            "card_type_info": null,
            "play": null,
            "tag": null,
            "card_asset_info": null
          },
          "jump_url": "",
          "redeem_cond_type": "scarcity",
          "remain_stock": -1,
          "total_stock": -1,
          "lottery_id": 0,
          "reward_tag": "任务奖励限定",
          "redeem_detail_image": "https://i0.hdslb.com/bfs/garb/48f755d6d08d96bfebcadee0be4bc34ce42421de.jpg",
          "redeem_detail_videos": null,
          "sort": 0,
          "redeem_items_optional": null,
          "unlock_condition": {
            "unlocked": true,
            "lock_type": 0,
            "expire_at": 0,
            "unlocked_at": 0,
            "unlock_threshold": 0,
            "current_threshold": 0
          }
        },
        {
          "collect_id": 51,
          "start_time": 1685372400,
          "end_time": 2114406245,
          "redeem_text": "抽出任意1张隐藏卡牌，即可领取，单UID仅可领取一次",
          "redeem_item_type": 3,
          "redeem_item_id": "53199",
          "redeem_item_name": "夏日萌菜头像框",
          "redeem_item_image": "https://i0.hdslb.com/bfs/garb/item/9fcb99ccfd057c5eac165832d71fb63f07f26097.png",
          "owned_item_amount": 0,
          "require_item_amount": 1,
          "has_redeemed_cnt": 0,
          "effective_forever": 1,
          "redeem_item_image_download": "",
          "card_item": {
            "card_type_info": null,
            "play": null,
            "tag": null,
            "card_asset_info": null
          },
          "jump_url": "",
          "redeem_cond_type": "scarcity",
          "remain_stock": -1,
          "total_stock": -1,
          "lottery_id": 0,
          "reward_tag": "任务奖励限定",
          "redeem_detail_image": "https://i0.hdslb.com/bfs/garb/item/9fcb99ccfd057c5eac165832d71fb63f07f26097.png",
          "redeem_detail_videos": null,
          "sort": 0,
          "redeem_items_optional": null,
          "unlock_condition": {
            "unlocked": true,
            "lock_type": 0,
            "expire_at": 0,
            "unlocked_at": 0,
            "unlock_threshold": 0,
            "current_threshold": 0
          }
        },
        {
          "collect_id": 50,
          "start_time": 1685372400,
          "end_time": 2114406245,
          "redeem_text": "抽出任意3张不同卡牌，即可领取，单UID仅可领取一次",
          "redeem_item_type": 2,
          "redeem_item_id": "53178",
          "redeem_item_name": "夏日萌菜表情包",
          "redeem_item_image": "https://i0.hdslb.com/bfs/garb/462ae9b5735fef4bb9ed87a6d6467a4768b06006.png",
          "owned_item_amount": 0,
          "require_item_amount": 3,
          "has_redeemed_cnt": 0,
          "effective_forever": 1,
          "redeem_item_image_download": "",
          "card_item": {
            "card_type_info": null,
            "play": null,
            "tag": null,
            "card_asset_info": null
          },
          "jump_url": "",
          "redeem_cond_type": "scarcity",
          "remain_stock": -1,
          "total_stock": -1,
          "lottery_id": 0,
          "reward_tag": "任务奖励限定",
          "redeem_detail_image": "https://i0.hdslb.com/bfs/garb/462ae9b5735fef4bb9ed87a6d6467a4768b06006.png",
          "redeem_detail_videos": null,
          "sort": 0,
          "redeem_items_optional": null,
          "unlock_condition": {
            "unlocked": true,
            "lock_type": 0,
            "expire_at": 0,
            "unlocked_at": 0,
            "unlock_threshold": 0,
            "current_threshold": 0
          }
        },
        {
          "collect_id": 366,
          "start_time": 1694768400,
          "end_time": 1696953600,
          "redeem_text": "抽齐全部8张卡牌领取，直接获得全图鉴进度条标记，10月28日前人工发放头像",
          "redeem_item_type": 5,
          "redeem_item_id": "59374",
          "redeem_item_name": "水中嬉戏·隐藏出框头像",
          "redeem_item_image": "https://i0.hdslb.com/bfs/garb/ff981dbdca5c6b539e22596674265ef1cb110c9c.png",
          "owned_item_amount": 0,
          "require_item_amount": 8,
          "has_redeemed_cnt": 0,
          "effective_forever": 0,
          "redeem_item_image_download": "",
          "card_item": {
            "card_type_info": null,
            "play": null,
            "tag": null,
            "card_asset_info": null
          },
          "jump_url": "",
          "redeem_cond_type": "scarcity",
          "remain_stock": -1,
          "total_stock": -1,
          "lottery_id": 0,
          "reward_tag": "任务奖励限定",
          "redeem_detail_image": "https://i0.hdslb.com/bfs/garb/ff981dbdca5c6b539e22596674265ef1cb110c9c.png",
          "redeem_detail_videos": null,
          "sort": 0,
          "redeem_items_optional": null,
          "unlock_condition": {
            "unlocked": true,
            "lock_type": 0,
            "expire_at": 0,
            "unlocked_at": 0,
            "unlock_threshold": 0,
            "current_threshold": 0
          }
        }
      ],
      "collect_chain": null
    },
    "button_bubble": null,
    "guide_info": null,
    "is_booked": 0,
    "total_book_cnt": 0,
    "is_fission": 0,
    "physical_exchange": 0
  }
}
```

</details>
