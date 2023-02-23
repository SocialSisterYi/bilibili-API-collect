# 大会员中心

## 大会员中心信息

> https://api.bilibili.com/x/vip/web/vip_center/combine

*请求方式：GET*

认证方式：Cookie (SESSDATA) / access_key

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注                                 |
| ---------- | ---- | ------------ | ----------- | ------------------------------------ |
| access_key | str  | APP登录Token | APP方式必要 |                                      |
| platform   | str  | 平台表示     | 非必要      | web端：`web`<br />安卓APP：`android` |
| mobi_app   | str  | APP 名称     | 非必要      | 安卓APP：`android`                   |
| build      | num  | 构建 id      | 非必要      |                                      |

**json回复：**

根对象：

| 字段名  | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 响应码   | 0：成功<br />-101：账号未登录 |
| message | str  | 0        |                               |
| ttl     | num  | 1        |                               |
| data    | obj  | 信息本体 |                               |

`data`对象：

| 字段名             | 类型                            | 内容                 | 备注                                           |
| ------------------ | ------------------------------- | -------------------- | ---------------------------------------------- |
| user               | obj                             | 用户信息             |                                                |
| wallet             | obj                             | 钱包信息             |                                                |
| union_vip          | web 端：null<br />APP 端：array | 联合会员信息列表     |                                                |
| other_open_info    | web 端：null<br />APP 端：array | 其他开通方式信息列表 |                                                |
| privileges         | array                           | 会员特权信息列表     |                                                |
| banners            | array                           | banner 卡片列表      | web 端为空                                     |
| welfare            | obj                             | 福利信息             |                                                |
| recommend_pendants | obj                             | 推荐头像框信息       |                                                |
| recommend_cards    | obj                             | 推荐装扮信息         |                                                |
| sort               | array                           |                      |                                                |
| in_review          | bool                            |                      |                                                |
| big_point          | obj                             | 大积分信息           | 详细 API 参考[大积分中心信息](#大积分中心信息) |
| hot_list           | obj                             | 热门榜单类型信息     |                                                |

`data`中的`user`对象：

| 字段名                 | 类型 | 内容                   | 备注                    |
| ---------------------- | ---- | ---------------------- | ----------------------- |
| account                | obj  | 账号基本信息           |                         |
| vip                    | obj  | 账号会员信息           |                         |
| tv                     | obj  | 电视会员信息           |                         |
| background_image_small | str  | 空                     |                         |
| background_image_big   | str  | 空                     |                         |
| panel_title            | str  | 用户昵称               |                         |
| avatar_pendant         | obj  | 用户头像框信息         |                         |
| vip_overdue_explain    | str  | 大会员提示文案         | 有效期 / 到期           |
| tv_overdue_explain     | str  | 电视大会员提示文案     | 有效期 / 到期           |
| account_exception_text | str  | 空                     |                         |
| is_auto_renew          | bool | 是否自动续费           | true：是<br />false：否 |
| is_tv_auto_renew       | bool | 是否自动续费电视大会员 | true：是<br />false：否 |
| surplus_seconds        | num  | 大会员到期剩余时间     | 单位为秒                |
| vip_keep_time          | num  | 持续开通大会员时间     | 单位为秒                |
| renew                  | obj  | (?)                    |                         |
| notice                 | obj  | (?)                    |                         |

`user`中的`account`对象：

| 字段名           | 类型 | 内容         | 备注                       |
| ---------------- | ---- | ------------ | -------------------------- |
| mid              | num  | 用户 mid     |                            |
| name             | str  | 昵称         |                            |
| sex              | str  | 性别         | 男 / 女 / 保密             |
| face             | str  | 头像 url     |                            |
| sign             | str  | 签名         |                            |
| rank             | num  | 等级         |                            |
| birthday         | num  | 生日         | 秒时间戳                   |
| is_fake_account  | num  | (?)          |                            |
| is_deleted       | num  | 是否注销     | 0：正常<br />1：注销       |
| in_reg_audit     | num  | 是否注册审核 | 0：正常<br />1：审核       |
| is_senior_member | num  | 是否转正     | 0：未转正<br />1：正式会员 |

`user`中的`vip`对象：

| 字段             | 类型 | 内容             | 备注                                                         |
| ---------------- | ---- | ---------------- | ------------------------------------------------------------ |
| mid              | num  | 用户 mid         |                                                              |
| vip_type         | num  | 会员类型         | 0：无<br />1：月大会员<br />2：年度及以上大会员              |
| vip_status       | num  | 会员状态         | 0：无<br />1：有                                             |
| vip_due_date     | num  | 会员过期时间     | 毫秒时间戳                                                   |
| vip_pay_type     | num  | 支付类型         | 0：未支付（常见于官方账号）<br />1：已支付（以正常渠道获取的大会员均为此值） |
| theme_type       | num  | (?)              |                                                              |
| label            | obj  | 会员标签         |                                                              |
| avatar_subscript | num  | 是否显示会员图标 | 0：不显示<br />1：显示                                       |
| nickname_color   | str  | 会员昵称颜色     | 颜色码，一般为`#FB7299`，曾用于愚人节改变大会员配色          |
| is_new_user      | bool | (?)              |                                                              |
| tip_material     | null | (?)              |                                                              |

`vip`中的`label`对象：

| 字段                      | 类型 | 内容             | 备注                                                         |
| ------------------------- | ---- | ---------------- | ------------------------------------------------------------ |
| text                      | str  | 会员类型文案     | `大会员` `年度大会员` `十年大会员` `百年大会员` `最强绿鲤鱼` |
| label_theme               | str  | 会员标签         | vip：大会员<br />annual_vip：年度大会员<br />ten_annual_vip：十年大会员<br />hundred_annual_vip：百年大会员<br/>fools_day_hundred_annual_vip：最强绿鲤鱼 |
| text_color                | str  | 会员标签文本颜色 |                                                              |
| bg_style                  | num  | 1                |                                                              |
| bg_color                  | str  | 会员标签背景颜色 | 颜色码，一般为`#FB7299`，曾用于愚人节改变大会员配色          |
| border_color              | str  | 会员标签边框颜色 | 未使用                                                       |
| use_img_label             | bool | `true`           |                                                              |
| img_label_uri_hans        | str  | 空               |                                                              |
| img_label_uri_hant        | str  | 空               |                                                              |
| img_label_uri_hans_static | str  | 大会员牌子图片   | 简体版                                                       |
| img_label_uri_hant_static | str  | 大会员牌子图片   | 繁体版                                                       |

`user`中的`tv`对象：

| 字段         | 类型 | 内容               | 备注                                                         |
| ------------ | ---- | ------------------ | ------------------------------------------------------------ |
| type         | num  | 电视大会员类型     | 0：无<br />1：月大会员<br />2：年度及以上大会员              |
| vip_pay_type | num  | 电视大支付类型     | 0：未支付（常见于官方账号）<br />1：已支付（以正常渠道获取的大会员均为此值） |
| status       | num  | 电视大会员状态     | 0：无<br />1：有                                             |
| due_date     | num  | 电视大会员过期时间 | 毫秒时间戳                                                   |

`user`中的`avatar_pendant`对象：

| 字段                | 类型 | 内容                   | 备注   |
| ------------------- | ---- | ---------------------- | ------ |
| image               | str  | 头像框 url             |        |
| image_enhance       | str  | 头像框 url             | 动态图 |
| image_enhance_frame | str  | 动态头像框帧波普版 url |        |

`user`中的`renew`对象：

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| text | str  | (?)  |      |
| link | str  | (?)  |      |

`user`中的`notice`对象：

| 字段               | 类型 | 内容 | 备注 |
| ------------------ | ---- | ---- | ---- |
| text               | str  | (?)  |      |
| tv_text            | str  | (?)  |      |
| type               | num  | (?)  |      |
| can_close          | bool | (?)  |      |
| surplus_seconds    | num  | (?)  |      |
| tv_surplus_seconds | num  | (?)  |      |

`data`中的`wallet`对象：

| 字段               | 类型 | 内容        | 备注 |
| ------------------ | ---- | ----------- | ---- |
| coupon             | num  | 当前 B 币券 |      |
| point              | num  | (?)         |      |
| privilege_received | bool | (?)         |      |

`data`中的`union_vip`数组：

| 项   | 类型 | 内容             | 备注                |
| ---- | ---- | ---------------- | ------------------- |
| 0    | obj  | 联合会员项 1     | 仅 APP 端存在该信息 |
| n    | obj  | 联合会员项 (n+1) |                     |
| ……   | obj  | ……               | ……                  |

`union_vip`数组中的对象：

| 字段     | 类型 | 内容               | 备注 |
| -------- | ---- | ------------------ | ---- |
| image_2x | str  | 联合会员图片小 url |      |
| image_3x | str  | 联合会员图片大 url |      |
| title    | str  | 联合会员名称       |      |
| link     | str  | 联合会员开通页 url |      |
| sort     | num  | 排列顺序           |      |

`data`中的`other_open_info`数组：

| 项   | 类型 | 内容                 | 备注                |
| ---- | ---- | -------------------- | ------------------- |
| 0    | obj  | 其他开通方式项 1     | 仅 APP 端存在该信息 |
| n    | obj  | 其他开通方式项 (n+1) |                     |
| ……   | obj  | ……                   | ……                  |

`other_open_info`数组中的对象：

| 字段     | 类型 | 内容                   | 备注 |
| -------- | ---- | ---------------------- | ---- |
| title    | str  | 其他开通方式名称       |      |
| url      | str  | 其他开通方式开通页 url |      |
| icon_url | str  | 其他开通方式图标 url   |      |
| desc     | str  | 提示文案               |      |
| sort     | num  | 排列顺序               |      |

`data`中的`privileges`数组：

| 项   | 类型 | 内容           | 备注 |
| ---- | ---- | -------------- | ---- |
| 0    | obj  | 特权父类 1     |      |
| n    | obj  | 特权父类 (n+1) |      |
| ……   | obj  | ……             | ……   |

`other_open_info`数组中的对象：

| 字段             | 类型  | 内容         | 备注 |
| ---------------- | ----- | ------------ | ---- |
| id               | num   | 特权父类 id  |      |
| name             | str   | 类型名称     |      |
| child_privileges | array | 特权子类列表 |      |

`other_open_info`数组中的对象中的`child_privileges`数组：

| 项   | 类型 | 内容           | 备注 |
| ---- | ---- | -------------- | ---- |
| 0    | obj  | 特权子类 1     |      |
| n    | obj  | 特权子类 (n+1) |      |
| ……   | obj  | ……             | ……   |

`child_privileges`数组中的对象：

| 字段                 | 类型 | 内容                 | 备注                         |
| -------------------- | ---- | -------------------- | ---------------------------- |
| first_id             | num  | 特权父类 id          |                              |
| report_id            | str  | 上报 id              | 该特权的代号？               |
| name                 | str  | 特权名称             |                              |
| desc                 | str  | 特权简介文案         |                              |
| explain              | str  | 特权介绍正文         |                              |
| icon_url             | str  | 特权图标 url         |                              |
| icon_gray_url        | str  | 特权图标灰色主题 url | 某些项目无此字段             |
| background_image_url | str  | 背景图片 url         |                              |
| link                 | str  | 特权介绍页 url       |                              |
| image_url            | str  | 特权示例图 url       |                              |
| type                 | num  | 类型？               | 目前为`0`                    |
| hot_type             | num  | 是否热门特权         | 0：普通特权<br />1：热门特权 |
| new_type             | num  | 是否新特权           | 0：普通特权<br />1：新特权   |
| id                   | num  | 特权子类 id          |                              |

`data`中的`banners`数组：

| 项   | 类型 | 内容              | 备注                |
| ---- | ---- | ----------------- | ------------------- |
| 0    | obj  | banner 项目 1     | 仅 APP 端存在该信息 |
| n    | obj  | banner 项目 (n+1) |                     |
| ……   | obj  | ……                | ……                  |

`banners`数组中的对象：

| 字段         | 类型 | 内容                  | 备注 |
| ------------ | ---- | --------------------- | ---- |
| id           | num  | banner 卡片 id        |      |
| index        | num  | banner 卡片排序       |      |
| image        | str  | banner 卡片图片 url   |      |
| title        | str  | banner 卡片标题       |      |
| uri          | str  | banner 卡片跳转页 url |      |
| track_params | obj  | 上报参数              |      |

`data`中的`welfare`对象：

| 字段  | 类型  | 内容         | 备注 |
| ----- | ----- | ------------ | ---- |
| count | num   | 福利数       |      |
| list  | array | 福利项目列表 |      |

`welfare`中的`list`数组：

| 项   | 类型 | 内容           | 备注 |
| ---- | ---- | -------------- | ---- |
| 0    | obj  | 福利项目 1     |      |
| n    | obj  | 福利项目 (n+1) |      |
| ……   | obj  | ……             | ……   |

`list`数组中的对象：

| 字段         | 类型 | 内容                | 备注      |
| ------------ | ---- | ------------------- | --------- |
| id           | num  | 福利 id             |           |
| name         | str  | 福利名称            |           |
| homepage_uri | str  | 福利图片 url        |           |
| backdrop_uri | str  | 福利图片 banner url |           |
| tid          | num  | (?)                 | 目前为`0` |
| rank         | num  | 排列顺序            |           |
| receive_uri  | str  | 福利跳转页 url      |           |

`data`中的`recommend_pendants`对象：

| 字段     | 类型  | 内容                   | 备注 |
| -------- | ----- | ---------------------- | ---- |
| jump_url | str   | 头像框商城页面跳转 url |      |
| list     | array | 推荐头像框列表         |      |

`recommend_pendants`中的`list`数组：

| 项   | 类型 | 内容             | 备注 |
| ---- | ---- | ---------------- | ---- |
| 0    | obj  | 推荐头像框 1     |      |
| n    | obj  | 推荐头像框 (n+1) |      |
| ……   | obj  | ……               | ……   |

`list`数组中的对象：

| 字段     | 类型 | 内容           | 备注 |
| -------- | ---- | -------------- | ---- |
| id       | num  | 头像框 id      |      |
| name     | str  | 头像框名称     |      |
| image    | str  | 头像框图片 url |      |
| jump_url | str  | 头像框页面 url |      |

`data`中的`recommend_cards`对象：

| 字段     | 类型  | 内容                         | 备注 |
| -------- | ----- | ---------------------------- | ---- |
| jump_url | str   | 推荐个性装扮商城页面跳转 url |      |
| list     | array | 推荐个性装扮列表             |      |

`recommend_cards`中的`list`数组：

| 项   | 类型 | 内容               | 备注 |
| ---- | ---- | ------------------ | ---- |
| 0    | obj  | 推荐个性装扮 1     |      |
| n    | obj  | 推荐个性装扮 (n+1) |      |
| ……   | obj  | ……                 | ……   |

`list`数组中的对象：

| 字段     | 类型 | 内容             | 备注 |
| -------- | ---- | ---------------- | ---- |
| id       | num  | 个性装扮 id      |      |
| name     | str  | 个性装扮名称     |      |
| image    | str  | 个性装扮图标 url |      |
| jump_url | str  | 个性装扮页面 url |      |

`data`中的`sort`数组：

| 项   | 类型 | 内容                | 备注 |
| ---- | ---- | ------------------- | ---- |
| 0    | obj  | 扩展 row 排序 1     |      |
| n    | obj  | 扩展 row 排序 (n+1) |      |
| ……   | obj  | ……                  | ……   |

`sort`数组中的对象：

| 字段 | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| key  | str  | 扩展 row 字段名 |      |
| sort | num  | 排列顺序        |      |

`data`中的`big_point`对象：

| 字段             | 类型 | 内容           | 备注 |
| ---------------- | ---- | -------------- | ---- |
| point_info       | obj  | 点数信息       |      |
| sign_info        | obj  | 签到信息       |      |
| sku_info         | obj  | 大积分商品预览 |      |
| tips             | bool |                |      |
| point_switch_off | obj  |                |      |

`big_point`中的`point_info`对象：

| 字段         | 类型 | 内容               | 备注      |
| ------------ | ---- | ------------------ | --------- |
| point        | num  | 当前拥有大积分数量 |           |
| expire_point | num  | 失效积分？         | 目前为`0` |
| expire_time  | num  | 失效时间？         | 目前为`0` |
| expire_days  | num  | 失效天数？         | 目前为`0` |

`big_point`中的`sign_info`对象：

| 字段          | 类型 | 内容     | 备注       |
| ------------- | ---- | -------- | ---------- |
| sign_remind   | bool | (?)      |            |
| benefit       | num  | 签到收益 | 单位为积分 |
| bonus_benefit | num  | (?)      |            |
| normal_remind | bool | (?)      |            |
| muggle_task   | bool | (?)      |            |

`big_point`中的`sku_info`对象：

| 字段 | 类型  | 内容     | 备注 |
| ---- | ----- | -------- | ---- |
| skus | array | 套了个娃 |      |

`sku_info`中的`skus`数组：

| 项   | 类型 | 内容             | 备注                                                         |
| ---- | ---- | ---------------- | ------------------------------------------------------------ |
| 0    | obj  | 大积分商品 1     | 对象定义同[大积分中心信息](#大积分中心信息)，故略            |
| n    | obj  | 大积分商品 (n+1) | 目前仅有 3 项<br />完成商品列表请求[大积分中心信息](#大积分中心信息)接口获得 |
| ……   | obj  | ……               | ……                                                           |

`big_point`中的`hot_list`对象：

| 字段 | 类型  | 内容     | 备注 |
| ---- | ----- | -------- | ---- |
| taps | array | 套了个娃 |      |

`hot_list`中的`taps`数组：

| 项   | 类型 | 内容           | 备注 |
| ---- | ---- | -------------- | ---- |
| 0    | obj  | 热门类型 1     |      |
| n    | obj  | 热门类型 (n+1) |      |
| ……   | obj  | ……             | ……   |

`taps`数组中的对象：

| 字段       | 类型 | 内容     | 备注      |
| ---------- | ---- | -------- | --------- |
| oid        | str  | 分类数据 | 类似 JSON |
| rank_id    | num  | 分类 id  |           |
| rank_title | str  | 分类名称 |           |

**示例：**

```shell
curl -G 'https://api.bilibili.com/x/vip/web/vip_center/combine' \
	-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "user": {
            "account": {
                "mid": 293793435,
                "name": "社会易姐QwQ",
                "sex": "男",
                "face": "https://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg",
                "sign": "BAC项目负责人 | 带砖技术宅 | MC 编程 电子 | 车万人\u0026术术人 | 粉丝群1136462265 博客shakaianee.top",
                "rank": 10000,
                "birthday": 1015257600,
                "is_fake_account": 0,
                "is_deleted": 0,
                "in_reg_audit": 0,
                "is_senior_member": 1
            },
            "vip": {
                "mid": 293793435,
                "vip_type": 2,
                "vip_status": 1,
                "vip_due_date": 1675785600000,
                "vip_pay_type": 0,
                "theme_type": 0,
                "label": {
                    "text": "年度大会员",
                    "label_theme": "annual_vip",
                    "text_color": "#FFFFFF",
                    "bg_style": 1,
                    "bg_color": "#FB7299",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png"
                },
                "avatar_subscript": 1,
                "avatar_subscript_url": "https://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png",
                "nickname_color": "#FB7299",
                "is_new_user": false,
                "tip_material": null
            },
            "tv": {
                "type": 1,
                "vip_pay_type": 0,
                "status": 0,
                "due_date": 1640793600000
            },
            "background_image_small": "",
            "background_image_big": "",
            "panel_title": "社会易姐QwQ",
            "panel_sub_title": "",
            "avatar_pendant": {
                "image": "http://i0.hdslb.com/bfs/garb/item/4f8f3f1f2d47f0dad84f66aa57acd4409ea46361.png",
                "image_enhance": "http://i0.hdslb.com/bfs/garb/item/fe0b83b53e2342b16646f6e7a9370d8a867decdb.webp",
                "image_enhance_frame": "http://i0.hdslb.com/bfs/garb/item/127c507ec8448be30cf5f79500ecc6ef2fd32f2c.png"
            },
            "vip_overdue_explain": "年度大会员有效期 2023/02/08",
            "tv_overdue_explain": "超级大会员已于 2021-12-30 过期",
            "account_exception_text": "",
            "is_auto_renew": false,
            "is_tv_auto_renew": false,
            "surplus_seconds": 8287677,
            "vip_keep_time": 1562046702,
            "renew": {
                "text": "",
                "link": ""
            },
            "notice": {
                "text": "",
                "tv_text": "",
                "type": 0,
                "can_close": false,
                "surplus_seconds": 0,
                "tv_surplus_seconds": 0
            }
        },
        "wallet": {
            "coupon": 5,
            "point": 0,
            "privilege_received": false
        },
        "union_vip": null,
        "other_open_info": null,
        "privileges": [
            {
                "id": 1,
                "name": "内容特权",
                "child_privileges": [
                    {
                        "first_id": 1,
                        "report_id": "freewatch",
                        "name": "免费看",
                        "desc": "会员用户免费看",
                        "explain": "需要付费才能观看的影视内容，大会员可以免费观看（播放页面提示“大会员半价”的除外，部分视频仅限在中国大陆观看）。",
                        "icon_url": "http://i0.hdslb.com/bfs/vip/cca929463895f8d2a5d65d41e0f69a608b711539.png",
                        "icon_gray_url": "",
                        "background_image_url": "http://i0.hdslb.com/bfs/vip/b8ea804c872fb2b096715f52b87deb0e6cdfd476.png",
                        "link": "https://big.bilibili.com/mobile/rights?type=free",
                        "image_url": "http://i0.hdslb.com/bfs/vip/22c3735f9db313b7be35d87c1b5dd6da81cea48e.jpg",
                        "type": 0,
                        "hot_type": 1,
                        "new_type": 0,
                        "id": 1
                    },
                    {
                        "first_id": 1,
                        "report_id": "firstwatch",
                        "name": "抢先看",
                        "desc": "会员用户可以快人一步抢先观看",
                        "explain": "连载内容中需要付费抢先看的内容，大会员可以直接观看，不限次数。（部分视频仅限在中国大陆观看）",
                        "icon_url": "http://i0.hdslb.com/bfs/vip/2dac1a2c649407dc8ce5f899f244d3aed557c458.png",
                        "icon_gray_url": "",
                        "background_image_url": "http://i0.hdslb.com/bfs/vip/20b40771e4bf180a606ddc021dfdfe6a7e56b713.png",
                        "link": "https://big.bilibili.com/mobile/rights?type=early",
                        "image_url": "http://i0.hdslb.com/bfs/vip/21c0f30302944b694a12f12cbf4ee02733e1e580.png",
                        "type": 0,
                        "hot_type": 0,
                        "new_type": 0,
                        "id": 2
                    },
                    {
                        "first_id": 1,
                        "report_id": "halfprice",
                        "name": "半价点播",
                        "desc": "付费内容半价即享",
                        "explain": "部分付费点播内容，大会员可享受半价购买。购买成功后，48小时内不限次数观看该影片（部分内容仅限在中国大陆观看）。",
                        "icon_url": "http://i0.hdslb.com/bfs/vip/f42c20d25e10700a2bc5e7257abb7fec91634822.png",
                        "icon_gray_url": "",
                        "background_image_url": "http://i0.hdslb.com/bfs/vip/3a613880463e01c8f9496f3b571e198a111191e5.png",
                        "link": "",
                        "image_url": "http://i0.hdslb.com/bfs/vip/07f8b89c6d044723ece8a42f558d1e84041ff991.png",
                        "type": 0,
                        "hot_type": 1,
                        "new_type": 0,
                        "id": 55
                    }
                ]
            },
            {
                "id": 4,
                "name": "装扮特权",
                "child_privileges": [
                    {
                        "first_id": 4,
                        "report_id": "card",
                        "name": "动态卡片装扮",
                        "desc": "动态卡片装扮",
                        "explain": "大会员可以免费使用大会员专属动态卡片装扮，用于装扮自己的动态卡片，彰显不一样的自己！\r\n有效期内随意装扮，有效期结束后动态卡片装扮自动卸下~（当前仅限客户端）",
                        "icon_url": "http://i0.hdslb.com/bfs/vip/fb9169586bb73dda319d6379440284361f46ff18.png",
                        "icon_gray_url": "",
                        "background_image_url": "http://i0.hdslb.com/bfs/vip/8775308a302014e3bfbfa0dfc69faa2e8faeaa3a.png",
                        "link": "",
                        "image_url": "http://i0.hdslb.com/bfs/vip/21880645864fbdace3d4d0b52eb895551ecd536d.png",
                        "type": 0,
                        "hot_type": 0,
                        "new_type": 0,
                        "id": 46
                    },
                    {
                        "first_id": 4,
                        "report_id": "pendant",
                        "name": "专属挂件",
                        "desc": "专属挂件免费换",
                        "explain": "大会员可免费领取专属挂件，用于装扮自己的头像，展示在评论区、个人空间等等位置。有钱也买不到哦！\r\n有效期内可以随便领，有效期结束后挂件自动卸下~",
                        "icon_url": "http://i0.hdslb.com/bfs/vip/4198eee83d94539be16f60daac277bce5f8f01dc.png",
                        "icon_gray_url": "",
                        "background_image_url": "http://i0.hdslb.com/bfs/vip/ae16ed0dcf8246a28e45403243bc65eea0e7b4c7.png",
                        "link": "https://big.bilibili.com/mobile/rights?type=pendant",
                        "image_url": "http://i0.hdslb.com/bfs/vip/1e6799197b0749c263dd8a28067c0e2b6327cab5.png",
                        "type": 0,
                        "hot_type": 0,
                        "new_type": 0,
                        "id": 23
                    },
                    {
                        "first_id": 4,
                        "report_id": "emoticon",
                        "name": "评论表情",
                        "desc": "评论有表情",
                        "explain": "会员可在评论中发送图片表情，表情多多，表情包常常更新哦。",
                        "icon_url": "http://i0.hdslb.com/bfs/vip/2080c73b6fa52351111b2830bc50a2a417b55216.png",
                        "icon_gray_url": "",
                        "background_image_url": "http://i0.hdslb.com/bfs/vip/f882182fcbca520194d9047ca4903dc2c1e42372.png",
                        "link": "https://big.bilibili.com/mobile/rights?type=emoji",
                        "image_url": "http://i0.hdslb.com/bfs/vip/bbb74fa3264ef9cc0ae1de15e4989b9473a0d6d3.png",
                        "type": 0,
                        "hot_type": 1,
                        "new_type": 0,
                        "id": 22
                    },
                    {
                        "first_id": 4,
                        "report_id": "spacepicture",
                        "name": "空间自主头图",
                        "desc": "空间自主头图",
                        "explain": "大会员可上传个性化图片来装扮个人空间头图，让自己的空间独具魅力。\r\nweb端进入个人空间后，点击头图右上角更换头图时，可以上传自定义头图。\r\n手机客户端进入个人空间后，即可通过点击头图上的“小衣服”按钮更换头图。",
                        "icon_url": "http://i0.hdslb.com/bfs/vip/a8144d3bbfeeaf43f3eff6741f4a7f5fcecec31c.png",
                        "icon_gray_url": "http://i0.hdslb.com/bfs/vip/0ebb039d9fefd37e094f0f181d7cfac9efd019be.png",
                        "background_image_url": "http://i0.hdslb.com/bfs/vip/6c32fe89bb56096fc963ed35118092744cb463b6.png",
                        "link": "https://big.bilibili.com/mobile/rights?type=cover",
                        "image_url": "http://i0.hdslb.com/bfs/vip/f0b521b39a941f0f7198fbe7884aa41af0817ffe.png",
                        "type": 0,
                        "hot_type": 1,
                        "new_type": 0,
                        "id": 24
                    }
                ]
            },
            {
                "id": 2,
                "name": "身份特权",
                "child_privileges": [
                    {
                        "first_id": 2,
                        "report_id": "nickname",
                        "name": "粉色昵称",
                        "desc": "尊享闪亮粉色昵称",
                        "explain": "年度大会员的昵称将以粉色高亮显示。",
                        "icon_url": "http://i0.hdslb.com/bfs/vip/f50ed845a94ac63adaa28f47716965269f9a9bdc.png",
                        "icon_gray_url": "http://i0.hdslb.com/bfs/vip/b67288e008a9fdfec0b13a27a527bb8db701c0d4.png",
                        "background_image_url": "http://i0.hdslb.com/bfs/vip/fa946f3c4011c28fe780d0cdd4da279fb996903f.png",
                        "link": "https://big.bilibili.com/mobile/rights?type=pink",
                        "image_url": "http://i0.hdslb.com/bfs/vip/b609d85d3e30450586653b245ac9772740ec184c.png",
                        "type": 1,
                        "hot_type": 0,
                        "new_type": 0,
                        "id": 18
                    },
                    {
                        "first_id": 2,
                        "report_id": "comic",
                        "name": "漫读券",
                        "desc": "每月赠送漫画阅读券",
                        "explain": "开通时长大于等于31天的大会员，会员有效期内，在哔哩哔哩APP“我的”-“卡券包”，及哔哩哔哩漫画APP“我的”-“卡券包”-“大会员特权”，每31天可领取5张漫读券；开通时长大于等于31天的年度大会员，会员有效期内，每31天可领取10张漫读券（可在“哔哩哔哩漫画app”中用于观看付费漫画）；\r\n该特权自开通起每31天可领取一次，当期内未领取则视为作废；\r\n漫读券使用有效期至领取后30天，具体有效期及适用范围详见券面说明；\r\n领取的漫读券可在哔哩哔哩APP“我的”-“卡券包”，及哔哩哔哩漫画APP“我的”-“卡券包”中查看；该大会员特权需将漫画APP升级至3.9版本及以上领取和使用；\r\n该特权有效期至2022年12月31日。",
                        "icon_url": "http://i0.hdslb.com/bfs/vip/eeabde9fc3b0891558af31c65e23913894324c6f.png",
                        "icon_gray_url": "",
                        "background_image_url": "http://i0.hdslb.com/bfs/vip/ba0c9df7c41d6c23c3c2470b5dbbbd5cf4d3d9c2.png",
                        "link": "",
                        "image_url": "http://i0.hdslb.com/bfs/vip/8a0d392d0d509c4bdff76aa98ccc007cd22b65a9.png",
                        "type": 0,
                        "hot_type": 0,
                        "new_type": 0,
                        "id": 47
                    },
                    {
                        "first_id": 2,
                        "report_id": "giftbag",
                        "name": "游戏礼包",
                        "desc": "游戏福利礼包",
                        "explain": "年度大会员可以在游戏礼包中心领取不同游戏的多款超值礼包，礼包数量和内容常常更新。\r\n\r\n具体使用方法请参照各个礼包的使用详情。",
                        "icon_url": "http://i0.hdslb.com/bfs/vip/77cbead3c0361dc9bb5638a901b89edec5820d0c.png",
                        "icon_gray_url": "http://i0.hdslb.com/bfs/vip/c1c810d0ad13b325da6f3dbde1adb5f351adc55c.png",
                        "background_image_url": "http://i0.hdslb.com/bfs/vip/013b5c7b3ba45c7a0f4b7a4967cf55aca3c92e40.png",
                        "link": "https://big.bilibili.com/mobile/rights?type=game",
                        "image_url": "http://i0.hdslb.com/bfs/vip/80a5e1a19192ae65f2c267f1a672c3aaeb582447.png",
                        "type": 1,
                        "hot_type": 0,
                        "new_type": 0,
                        "id": 21
                    },
                    {
                        "first_id": 2,
                        "report_id": "vipmall",
                        "name": "会员购",
                        "desc": "会员购优惠券",
                        "explain": "开通时长大于等于31天的大会员，在会员有效期内，每31天可领取1张会员购10元包邮券；开通时长大于等于31天的年度大会员，在会员有效期内，每31天可领取1张会员购10元包邮券、1张会员购满50-10元优惠券。当月开通或升级的年度大会员，也可以立即领取；\r\n优惠券及包邮券有效期至领取后15天，具体有效期及使用范围详见优惠券说明;\r\n年度大会员可前往App“分区--会员购--右上角“优惠券”查看优惠券及包邮券，并前往App“分区--会员购”，在提交订单时选择优惠券及包邮券进行使用；该大会员特权需将哔哩哔哩APP升级至6.65版本及以上领取和使用。",
                        "icon_url": "http://i0.hdslb.com/bfs/vip/37108d523b939e3c4071d4fdd104b50003a1f627.png",
                        "icon_gray_url": "http://i0.hdslb.com/bfs/vip/972283284cfb7f3b3063b1b391aeeb4cbed3249d.png",
                        "background_image_url": "http://i0.hdslb.com/bfs/vip/21d79540e10618ee9bbaf8874ae711442d10edf0.png",
                        "link": "https://big.bilibili.com/mobile/rights?type=hobby",
                        "image_url": "http://i0.hdslb.com/bfs/vip/9af168f768312da3c31df23c056f33b3dcaefe8a.jpg",
                        "type": 1,
                        "hot_type": 0,
                        "new_type": 1,
                        "id": 20
                    },
                    {
                        "first_id": 2,
                        "report_id": "bcoupon",
                        "name": "B币券",
                        "desc": "每月赠送B币",
                        "explain": "开通大会员时长大于等于31天的年度大会员，在会员有效期内，每31天可领取1张5B币券。当月开通或升级的年度大会员，也可以立即领取；\r\n有效期至领取后30天，到期未使用的B币券将自动过期。\r\nB币券可用于承包番剧、给up主充电、兑换电池，兑换漫画赛季积分等。\r\n赠送的B币券在使用时不再赠送会员积分。",
                        "icon_url": "http://i0.hdslb.com/bfs/vip/90e1cad7ccaa4c7d29728bdb68bb1af833b2b46b.png",
                        "icon_gray_url": "http://i0.hdslb.com/bfs/vip/c3dcef2bfea737a1342dacea1027a3b299d3cf71.png",
                        "background_image_url": "http://i0.hdslb.com/bfs/vip/20de7f4e81775c4cec1a9653131e5b10c8c8f41d.png",
                        "link": "https://big.bilibili.com/mobile/rights?type=bcoin",
                        "image_url": "http://i0.hdslb.com/bfs/vip/11b77dd4ac7aabe42616031a7fe4b2a17f9e632d.png",
                        "type": 1,
                        "hot_type": 0,
                        "new_type": 0,
                        "id": 19
                    },
                    {
                        "first_id": 2,
                        "report_id": "update",
                        "name": "身份升级",
                        "desc": "连续购买享受更高级权益",
                        "explain": "购买大会员连续累计时长超过366天，即可免费升级为年度大会员身份，升级后可立即享受粉色昵称、游戏礼包、B币券等年度大会员专享权益。\r\n注意：中断续费的话，年度大会员身份会收回哦~",
                        "icon_url": "http://i0.hdslb.com/bfs/vip/ea7ea61dab30edcd7bc53d2ebf159c167dda6286.png",
                        "icon_gray_url": "",
                        "background_image_url": "",
                        "link": "",
                        "image_url": "http://i0.hdslb.com/bfs/vip/75e8a25686e7556877be4074f002c426afe8d4a6.jpg",
                        "type": 0,
                        "hot_type": 0,
                        "new_type": 1,
                        "id": 56
                    }
                ]
            },
            {
                "id": 3,
                "name": "视听特权",
                "child_privileges": [
                    {
                        "first_id": 3,
                        "report_id": "clearwatch",
                        "name": "超清看",
                        "desc": "会员用户超清晰观看",
                        "explain": "大会员可专享高帧率、高码率画质（最高可达超清4k），觉醒超凡视觉体验。",
                        "icon_url": "http://i0.hdslb.com/bfs/vip/1870c718e3cd2a5625934d401838e67d738d4fcc.png",
                        "icon_gray_url": "",
                        "background_image_url": "http://i0.hdslb.com/bfs/vip/21d79540e10618ee9bbaf8874ae711442d10edf0.png",
                        "link": "https://big.bilibili.com/mobile/rights?type=clear",
                        "image_url": "http://i0.hdslb.com/bfs/vip/fbe4cf2288571d7b0a509c7014d5182789ffdd74.png",
                        "type": 0,
                        "hot_type": 0,
                        "new_type": 1,
                        "id": 3
                    },
                    {
                        "first_id": 3,
                        "report_id": "",
                        "name": "边下边播",
                        "desc": "追番看剧拒绝卡顿",
                        "explain": "大会员下载剧集时，已下载部分可以播放，不用等下载完成即可观看（仅限手机端使用）。",
                        "icon_url": "http://i0.hdslb.com/bfs/vip/5248289d4c313678edeb68436c5411d1b6f9df7f.png",
                        "icon_gray_url": "",
                        "background_image_url": "",
                        "link": "",
                        "image_url": "http://i0.hdslb.com/bfs/vip/e3ae66f7c72056e95d252a33ebceac70d32a27cc.png",
                        "type": 0,
                        "hot_type": 1,
                        "new_type": 0,
                        "id": 53
                    },
                    {
                        "first_id": 3,
                        "report_id": "",
                        "name": "并行下载",
                        "desc": "3集一起下才够快",
                        "explain": "大会员下载视频时，至多可支持2-3个视频同时缓存（仅限手机端使用）。",
                        "icon_url": "http://i0.hdslb.com/bfs/vip/8198d4638f3322b485787f9af909955e54696de9.png",
                        "icon_gray_url": "",
                        "background_image_url": "",
                        "link": "",
                        "image_url": "http://i0.hdslb.com/bfs/vip/188e6a0905a3729905a3a053ffa7dad324705ca6.png",
                        "type": 0,
                        "hot_type": 1,
                        "new_type": 0,
                        "id": 54
                    },
                    {
                        "first_id": 3,
                        "report_id": "",
                        "name": "专属缓存",
                        "desc": "随时随地想看就看",
                        "explain": "海量番剧、国创、电影大片，大会员独享专属缓存特权。（仅限手机端使用，部分内容受版权或地区限制无法缓存）。",
                        "icon_url": "http://i0.hdslb.com/bfs/vip/35cf4f902ecd836db0e841cc642d1c099adb2046.png",
                        "icon_gray_url": "",
                        "background_image_url": "",
                        "link": "",
                        "image_url": "http://i0.hdslb.com/bfs/vip/6cf08314a94aeb5579e956aa40a2f37ab68baa2d.png",
                        "type": 0,
                        "hot_type": 0,
                        "new_type": 0,
                        "id": 51
                    },
                    {
                        "first_id": 3,
                        "report_id": "hdr",
                        "name": "真彩HDR",
                        "desc": "更真实的视觉体验",
                        "explain": "哔哩哔哩提供基于HDR10技术的“真彩HDR”观影模式。HDR能够呈现更多的动态范围，细致优化画面中的明暗对比及色彩显示，更好的反映出真实环境中的视觉效果。使您可以享受到色彩细腻鲜艳，明暗层次丰富的高品质观影体验。\r\n注意事项： \r\n移动端请更新APP至6.9及以上版本；安卓机型需7及以上系统，iOS机型需13及以上系统，PC端仅部分浏览器支持。",
                        "icon_url": "http://i0.hdslb.com/bfs/vip/dd6acf7bb89686e6a15fe7d7762aa6215fb856f1.png",
                        "icon_gray_url": "",
                        "background_image_url": "",
                        "link": "",
                        "image_url": "http://i0.hdslb.com/bfs/vip/240c332b35355cfbfd982aa7b3bc8e48b31672f0.png",
                        "type": 0,
                        "hot_type": 0,
                        "new_type": 1,
                        "id": 57
                    },
                    {
                        "first_id": 3,
                        "report_id": "dolby",
                        "name": "杜比全景声",
                        "desc": "更优质的听觉盛宴",
                        "explain": "大会员专享杜比音效（立体声、环绕声）以及杜比全景声，采用全新的音效技术，为你带来身临其中的听觉盛宴。(该权益仅可在移动端上部分内容支持使用)",
                        "icon_url": "http://i0.hdslb.com/bfs/vip/d6915ef153c812f57b50fe4583f8eb6879f3c265.png",
                        "icon_gray_url": "",
                        "background_image_url": "",
                        "link": "",
                        "image_url": "http://i0.hdslb.com/bfs/vip/08377c70a185359242cf5c83f1cd5ed5c8b3c057.png",
                        "type": 0,
                        "hot_type": 0,
                        "new_type": 0,
                        "id": 59
                    },
                    {
                        "first_id": 3,
                        "report_id": "",
                        "name": "预约缓存",
                        "desc": "后台运行即更即存",
                        "explain": "连载内容尚未播出的剧集可提前预约缓存，新剧集上线后，第一时间在wifi环境下自动缓存下载到本地，省时省力追番更轻松（仅限手机端使用）。\r\n使用说明：\r\n1.此权益需要将哔哩哔哩APP设置后台自动运行状态；\r\n2.具体以可预约下载剧集的播出安排为准。",
                        "icon_url": "http://i0.hdslb.com/bfs/vip/6d36c5603faf4a1ac4cea6c6ff719e70c05f8c3c.png",
                        "icon_gray_url": "",
                        "background_image_url": "",
                        "link": "",
                        "image_url": "http://i0.hdslb.com/bfs/vip/8e01e169551909bcaae6ed8b40759c4e1bae95cf.png",
                        "type": 0,
                        "hot_type": 0,
                        "new_type": 0,
                        "id": 52
                    }
                ]
            }
        ],
        "banners": [],
        "welfare": {
            "count": 3,
            "list": [
                {
                    "id": 80,
                    "name": "联通首月1分钱2022.11",
                    "homepage_uri": "https://i2.hdslb.com/bfs/vip/eacd5f4242034908e46575ee256f013dce6c3d69.png",
                    "backdrop_uri": "https://i2.hdslb.com/bfs/vip/522325bcf86b20fe13d92e0e1cc2872af27abff7.png",
                    "tid": 0,
                    "rank": 2,
                    "receive_uri": "https://operation.mige.tv/a/#/23791f7f84db"
                },
                {
                    "id": 77,
                    "name": "移动随心看2022.11",
                    "homepage_uri": "https://i0.hdslb.com/bfs/vip/4dcc85686972f6b9b61468992c2bc03a7e648dbc.png",
                    "backdrop_uri": "https://i0.hdslb.com/bfs/vip/00a0db85f8f43023893e8e9d0dd90f38493624ea.png",
                    "tid": 0,
                    "rank": 3,
                    "receive_uri": "https://dev.coc.10086.cn/coc/web/coc2020/package2/?pageId=1541343250813415424\u0026channelId=P00000000451"
                },
                {
                    "id": 79,
                    "name": "联通2233卡2022.11",
                    "homepage_uri": "https://i2.hdslb.com/bfs/vip/ff8e69b13ac5a560d7ceab7ef07aa9c807880ac4.jpg",
                    "backdrop_uri": "https://i2.hdslb.com/bfs/vip/a45bfa461444e231df14bea94ce6d2b738426387.jpg",
                    "tid": 0,
                    "rank": 8,
                    "receive_uri": "https://b23.tv/ifiFs6e"
                }
            ]
        },
        "recommend_pendants": {
            "list": [
                {
                    "id": 1758,
                    "name": "至尊戒",
                    "image": "http://i0.hdslb.com/bfs/garb/item/025d07fa04d38236bc2258be2faf2867e2c48fe1.png",
                    "jump_url": "https://www.bilibili.com/h5/mall/preview/pendant/1758?navhide=1"
                },
                {
                    "id": 1759,
                    "name": "精灵王",
                    "image": "http://i0.hdslb.com/bfs/garb/item/2db4ebcb23656f3a6f68bd3306805cc24a9e1144.png",
                    "jump_url": "https://www.bilibili.com/h5/mall/preview/pendant/1759?navhide=1"
                },
                {
                    "id": 1293,
                    "name": "碧蓝航线",
                    "image": "http://i0.hdslb.com/bfs/face/2508daec59b2aaada2784f26f9c1c28069f28e43.png",
                    "jump_url": "https://www.bilibili.com/h5/mall/preview/pendant/1293?navhide=1"
                }
            ],
            "jump_url": "https://www.bilibili.com/h5/mall/pendant/home?navhide=1\u0026tab_id=22"
        },
        "recommend_cards": {
            "list": [
                {
                    "id": 18,
                    "name": "阿维",
                    "image": "http://i0.hdslb.com/bfs/vip/ffa3e8c1cf92eb0c01db61abe5741419e9302a70.png",
                    "jump_url": "https://www.bilibili.com/h5/mall/preview/feed/18?navhide=1"
                },
                {
                    "id": 27,
                    "name": "尤里乌斯",
                    "image": "http://i0.hdslb.com/bfs/vip/0f733cdfd9cbe4746fb6bc76bcb1a720efdecfc6.png",
                    "jump_url": "https://www.bilibili.com/h5/mall/preview/feed/27?navhide=1"
                }
            ],
            "jump_url": "https://www.bilibili.com/h5/mall/card/detail?navhide=1\u0026tab_id=5"
        },
        "sort": [
            {
                "key": "union_vip",
                "sort": 1
            },
            {
                "key": "other_open_info",
                "sort": 2
            }
        ],
        "in_review": false,
        "big_point": {
            "point_info": {
                "point": 210,
                "expire_point": 0,
                "expire_time": 0,
                "expire_days": 0
            },
            "sign_info": {
                "sign_remind": false,
                "benefit": 5,
                "bonus_benefit": 0,
                "normal_remind": true,
                "muggle_task": true
            },
            "sku_info": {
                "skus": [
                    {
                        "base": {
                            "token": "610208400319545734",
                            "title": "大会员1天卡",
                            "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/UMsNkcRz1z.png",
                            "rotation_pictures": [
                                "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/UMsNkcRz1z.png"
                            ],
                            "price": {
                                "origin": 240,
                                "promotion": {
                                    "price": 120,
                                    "type": 1,
                                    "discount": 5,
                                    "label": "5折"
                                }
                            },
                            "inventory": {
                                "available_num": 1000000,
                                "used_num": 707448,
                                "surplus_num": 292552
                            },
                            "user_type": 2,
                            "exchange_limit_type": 3,
                            "exchange_limit_num": 3,
                            "start_time": 1658224800,
                            "end_time": 1672502399,
                            "state": 2
                        }
                    },
                    {
                        "base": {
                            "token": "650284831896337625",
                            "title": "克鲁苏手办-会员购7.2折券",
                            "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20221009/b88c479976ac33162f658d12959a2111/wRI6e4GWZ4.jpg",
                            "rotation_pictures": [
                                "https://i0.hdslb.com/bfs/activity-plat/static/20221009/b88c479976ac33162f658d12959a2111/wRI6e4GWZ4.jpg"
                            ],
                            "price": {
                                "origin": 500,
                                "promotion": {
                                    "price": 10,
                                    "type": 2,
                                    "discount": 0,
                                    "label": "秒杀"
                                }
                            },
                            "inventory": {
                                "available_num": 9734,
                                "used_num": 4795,
                                "surplus_num": 4939
                            },
                            "user_type": 2,
                            "exchange_limit_type": 4,
                            "exchange_limit_num": 1,
                            "start_time": 1664193600,
                            "end_time": 1672502399,
                            "state": 2
                        }
                    },
                    {
                        "base": {
                            "token": "652569526596107481",
                            "title": "个性装扮8折券",
                            "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220930/b88c479976ac33162f658d12959a2111/d5McccHzaX.jpg",
                            "rotation_pictures": [
                                "https://i0.hdslb.com/bfs/activity-plat/static/20220930/b88c479976ac33162f658d12959a2111/d5McccHzaX.jpg"
                            ],
                            "price": {
                                "origin": 500,
                                "promotion": {
                                    "price": 10,
                                    "type": 2,
                                    "discount": 0,
                                    "label": "秒杀"
                                }
                            },
                            "inventory": {
                                "available_num": 50000,
                                "used_num": 14065,
                                "surplus_num": 35935
                            },
                            "user_type": 2,
                            "exchange_limit_type": 2,
                            "exchange_limit_num": 10,
                            "start_time": 1664522420,
                            "end_time": 1672502399,
                            "state": 2
                        }
                    }
                ]
            },
            "point_switch_off": false,
            "tips": [
                {
                    "content": "今天的任务还没有做完哦"
                }
            ]
        },
        "hot_list": {
            "taps": [
                {
                    "oid": "{season_type:1}",
                    "rank_id": 118,
                    "rank_title": "番剧"
                },
                {
                    "oid": "{season_type:2,style_id:0,day:3,rank_type:0}",
                    "rank_id": 174,
                    "rank_title": "电影"
                },
                {
                    "oid": "{season_type:4}",
                    "rank_id": 119,
                    "rank_title": "国创"
                },
                {
                    "oid": "{season_type:5,style_id:0,day:3,rank_type:0}",
                    "rank_id": 176,
                    "rank_title": "电视剧"
                },
                {
                    "oid": "{season_type:3,style_id:0,day:3,rank_type:0}",
                    "rank_id": 175,
                    "rank_title": "纪录片"
                },
                {
                    "oid": "{season_type:7,style_id:0,day:3,rank_type:0}",
                    "rank_id": 177,
                    "rank_title": "综艺"
                }
            ]
        }
    }
}
```

</details>

## 大积分

### 大积分商品类型

| id   | 类型     |
| ---- | -------- |
| 1    | 大会员   |
| 2    | 会员购   |
| 3    | 生活服务 |
| 4    | 漫画     |
| 5    | 装扮     |

### 大积分任务列表

| id          | 类型               |
| ----------- | ------------------ |
| bonus       | 大会员福利大积分   |
| privilege   | 浏览大会员权益页面 |
| animatetab  | 浏览追番频道页10秒 |
| filmtab     | 浏览影视频道页10秒 |
| vipmallview | 浏览会员购页面10秒 |
| ogvwatch    | 观看任意正片内容   |
| tvodbuy     | 购买单点付费影片   |
| vipmallbuy  | 购买指定会员购商品 |

### 大积分中心信息

> https://api.biliapi.com/x/vip_point/homepage/combine

*请求方式：GET*

认证方式：Cookie (SESSDATA) / access_key

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注 |
| ---------- | ---- | ------------ | ----------- | ---- |
| access_key | str  | APP登录Token | APP方式必要 |      |

**json回复：**

根对象：

| 字段名  | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 响应码   | 0：成功<br />-101：账号未登录 |
| message | str  | 0        |                               |
| ttl     | num  | 1        |                               |
| data    | obj  | 信息本体 |                               |

`data`对象：

| 字段名         | 类型  | 内容            | 备注                  |
| -------------- | ----- | --------------- | --------------------- |
| vip_info       | obj   | 大会员信息      |                       |
| content        | str   | 空              |                       |
| point_info     | obj   | 点数信息        |                       |
| task           | obj   | 任务信息        | [任务列表](#任务列表) |
| banner         | array | banner 卡片列表 |                       |
| goods_category | array | 商品类型列表    |                       |
| goods_skus     | array | 商品明细列表    | 包含所有类型的商品    |
| current_ts     | num   | 本次请求时间    | 秒时间戳              |

`data`中的`vip_info`对象：

| 字段名          | 类型 | 内容               | 备注                                                         |
| --------------- | ---- | ------------------ | ------------------------------------------------------------ |
| type            | num  | 大会员类型         | 0：无<br />1：月大会员<br />2：年度及以上大会员              |
| status          | num  | 大会员状态         | 0：无<br />1：有                                             |
| due_date        | num  | 大会员过期时间     | 毫秒时间戳                                                   |
| vip_pay_type    | num  | 支付类型           | 0：未支付（常见于官方账号）<br />1：已支付（以正常渠道获取的大会员均为此值） |
| start_time      | num  | 首次大会员开通时间 | 秒时间戳                                                     |
| paid_type       | num  | `0`                |                                                              |
| mid             | num  | 当前用户 mid       |                                                              |
| role            | num  | 大会员类型         | 1：月度大会员<br/>3：年度大会员<br/>7：十年大会员<br/>15：百年大会员 |
| tv_vip_status   | num  | 电视大会员状态     | 0：无<br />1：有                                             |
| tv_vip_pay_type | num  | 电视大会员支付类型 | 0：未支付（常见于官方账号）<br />1：已支付（以正常渠道获取的大会员均为此值） |
| tv_due_date     | num  | 电视大会员过期时间 | 秒时间戳                                                     |

`data`中的`point_info`对象：

| 字段名       | 类型 | 内容               | 备注      |
| ------------ | ---- | ------------------ | --------- |
| point        | num  | 当前拥有大积分数量 |           |
| expire_point | num  | 失效积分？         | 目前为`0` |
| expire_time  | num  | 失效时间？         | 目前为`0` |
| expire_days  | num  | 失效天数？         | 目前为`0` |

`data`中的`task`对象：

| 字段名     | 类型  | 内容               | 备注 |
| ---------- | ----- | ------------------ | ---- |
| task_item  | array | 当前页面显示的任务 |      |
| task_count | num   | 任务总数           |      |
| signed     | bool  | `false`            |      |
| score      | num   | `5`                |      |

`task`中的 `task_item`数组：

| 项   | 类型 | 内容       | 备注 |
| ---- | ---- | ---------- | ---- |
| 0    | obj  | 任务 1     |      |
| n    | obj  | 任务 (n+1) |      |
| ……   | obj  | ……         | ……   |

 `task_item`数组中的对象：

| 字段名         | 类型 | 内容                 | 备注                                          |
| -------------- | ---- | -------------------- | --------------------------------------------- |
| task_code      | str  | 任务 id              | 详见[大积分任务列表](#大积分任务列表)         |
| state          | num  | 任务状态             | 0：未领取<br/>1：未完成<br/> 3：已完成/已领取 |
| title          | str  | 任务名称             |                                               |
| icon           | str  | 任务图标 url         |                                               |
| subtitle       | str  | 任务副标题           |                                               |
| explain        | str  | 任务详情说明         |                                               |
| link           | str  | 任务跳转 url         | web方式：目标页面url<br />APP方式：APP内uri   |
| vip_limit      | num  | 是否为大会员专享任务 | 0：否<br/>1：是                               |
| complete_times | num  | 已完成次数           |                                               |
| max_times      | num  | 最大完成次数         |                                               |
| recall_num     | num  | 重试次数？           | 目前为`0`                                     |

`data`中的 `banner`数组：

| 项   | 类型 | 内容              | 备注 |
| ---- | ---- | ----------------- | ---- |
| 0    | obj  | banner 项目 1     |      |
| n    | obj  | banner 项目 (n+1) |      |
| ……   | obj  | ……                | ……   |

`banner`数组中的对象：

| 字段名    | 类型 | 内容            | 备注 |
| --------- | ---- | --------------- | ---- |
| link      | str  | 跳转 url        |      |
| image_url | str  | banner 卡片 url |      |

`data`中的 `goods_category`数组：

| 项   | 类型 | 内容           | 备注 |
| ---- | ---- | -------------- | ---- |
| 0    | obj  | 商品类型 1     |      |
| n    | obj  | 商品类型 (n+1) |      |
| ……   | obj  | ……             | ……   |

`goods_category`数组中的对象：

| 字段名 | 类型 | 内容         | 备注                                        |
| ------ | ---- | ------------ | ------------------------------------------- |
| id     | num  | 商品类型 id  | 具体类型见[大积分商品类型](#大积分商品类型) |
| name   | str  | 商品类型名称 |                                             |
| state  | num  | 状态         | 目前为`2`                                   |

`data`中的 `goods_skus`数组：

| 项   | 类型 | 内容             | 备注 |
| ---- | ---- | ---------------- | ---- |
| 0    | obj  | 大积分商品 1     |      |
| n    | obj  | 大积分商品 (n+1) |      |
| ……   | obj  | ……               | ……   |

 `goods_skus`数组中的对象：

| 字段名 | 类型 | 内容     | 备注 |
| ------ | ---- | -------- | ---- |
| base   | obj  | 套了个娃 |      |

 `goods_skus`数组中的对象中的`base`对象：

| 字段名              | 类型  | 内容         | 备注                |
| ------------------- | ----- | ------------ | ------------------- |
| token               | str   | 商品 token   | 用于购买 & 明细页面 |
| title               | str   | 商品名称     |                     |
| picture             | str   | 商品图片 url |                     |
| rotation_pictures   | array | 商品图片组   |                     |
| price               | obj   | 价格信息     |                     |
| inventory           | obj   | 库存信息     |                     |
| user_type           | num   | `2`          |                     |
| exchange_limit_type | num   | `2` `3` `4`  |                     |
| exchange_limit_num  | num   | 限购数量     |                     |
| start_time          | num   | 起售时间     | 秒时间戳            |
| end_time            | num   | 止售时间     | 秒时间戳            |
| state               | num   | 状态？       | `2`                 |

`base`中的`rotation_pictures`数组：

| 项   | 类型 | 内容         | 备注                                            |
| ---- | ---- | ------------ | ----------------------------------------------- |
| 0    | str  | 商品图片 url | 目前只有1项<br />同上层对象的`商品图片 url`字段 |

`base`中的`price`对象：

| 字段名    | 类型                          | 内容     | 备注       |
| --------- | ----------------------------- | -------- | ---------- |
| origin    | num                           | 商品原价 | 单位为积分 |
| promotion | 有折扣：obj<br />无折扣：null | 折扣信息 |            |

`price`中的`promotion`对象：

| 字段名   | 类型 | 内容     | 备注                                                   |
| -------- | ---- | -------- | ------------------------------------------------------ |
| price    | num  | 折后价格 | 单位为积分                                             |
| type     | num  | 折扣类型 | 1：普通折扣<br/>2：秒杀                                |
| discount | num  | 折扣力度 |                                                        |
| label    | str  | 标签文案 | 普通折扣：显示为 eg：`5折`<br/>秒杀：显示为 eg：`秒杀` |

`base`中的`inventory`对象：

| 字段名        | 类型 | 内容     | 备注 |
| ------------- | ---- | -------- | ---- |
| available_num | num  | 库存总量 |      |
| used_num      | num  | 已售数量 |      |
| surplus_num   | num  | 剩余数量 |      |

**示例：**

web 方式：

```shell
curl 'https://api.bilibili.com/x/vip_point/homepage/combine' \
	-b 'SESSDATA=xxx'
```

APP 方式：

```shell
curl -G 'https://api.bilibili.com/x/vip_point/homepage/combine' \
	---data-urlencode 'access_key=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "vip_info": {
      "type": 2,
      "status": 1,
      "due_date": 1678723200000,
      "vip_pay_type": 0,
      "start_time": 1475986259,
      "paid_type": 0,
      "mid": 10086,
      "role": 3,
      "tv_vip_status": 0,
      "tv_vip_pay_type": 0,
      "tv_due_date": 0
    },
    "content": "",
    "point_info": {
      "point": 355,
      "expire_point": 0,
      "expire_time": 0,
      "expire_days": 0
    },
    "task": {
      "task_item": [
        {
          "task_code": "animatetab",
          "state": 1,
          "title": "浏览追番频道页10秒",
          "icon": "https://i0.hdslb.com/bfs/activity-plat/static/20220607/b66bfe4ccfd6bed05bdb54008ff5c7aa/uOwc1tuJwm.png",
          "subtitle": "<span class=\"active\">+10大积分</span>",
          "explain": "从本任务入口跳转至追番频道页，并连续浏览页面达10秒可得10大积分，每天可完成1次。如浏览过程中离开追番频道页则中断计时，任务判定失败，需重新从本任务入口再次跳转。",
          "link": "bilibili://home?bottom_tab_name=首页&tab_name=追番&tab_id=bangumi&vip_task_countdown=10000",
          "vip_limit": 1,
          "complete_times": 0,
          "max_times": 1,
          "recall_num": 0
        },
        {
          "task_code": "filmtab",
          "state": 1,
          "title": "浏览影视频道页10秒",
          "icon": "https://i0.hdslb.com/bfs/activity-plat/static/20220607/b66bfe4ccfd6bed05bdb54008ff5c7aa/bWPJRBuMh3.png",
          "subtitle": "<span class=\"active\">+10大积分</span>",
          "explain": "从本任务入口跳转至影视频道页，并连续浏览页面达10秒可得10大积分，每天可完成1次。如浏览过程中离开影视频道页则中断计时，任务判定失败，需重新从本任务入口再次跳转。",
          "link": "bilibili://home?bottom_tab_name=首页&tab_name=影视&tab_id=film&vip_task_countdown=10000",
          "vip_limit": 1,
          "complete_times": 0,
          "max_times": 1,
          "recall_num": 0
        }
      ],
      "task_count": 8,
      "signed": false,
      "score": 5
    },
    "banner": [
      {
        "link": "https://www.bilibili.com/blackboard/activity-0sjbGf3IJt.html?msource=jifen_banner",
        "image_url": "https://i0.hdslb.com/bfs/activity-plat/static/20220819/b88c479976ac33162f658d12959a2111/KS1XfLBuk7.png"
      }
    ],
    "goods_category": [
      {
        "id": 1,
        "name": "大会员",
        "state": 2
      },
      {
        "id": 2,
        "name": "会员购",
        "state": 2
      },
      {
        "id": 5,
        "name": "装扮",
        "state": 2
      },
      {
        "id": 4,
        "name": "漫画",
        "state": 2
      },
      {
        "id": 3,
        "name": "生活服务",
        "state": 2
      }
    ],
    "goods_skus": [
      {
        "base": {
          "token": "610208400319545734",
          "title": "大会员1天卡",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/UMsNkcRz1z.png",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/UMsNkcRz1z.png"
          ],
          "price": {
            "origin": 240,
            "promotion": {
              "price": 120,
              "type": 1,
              "discount": 5,
              "label": "5折"
            }
          },
          "inventory": {
            "available_num": 1000000,
            "used_num": 552427,
            "surplus_num": 447573
          },
          "user_type": 2,
          "exchange_limit_type": 3,
          "exchange_limit_num": 3,
          "start_time": 1658224800,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "650284831896337625",
          "title": "克鲁苏手办-会员购7.2折券",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220923/b88c479976ac33162f658d12959a2111/W8QR1HfVP2.jpg",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220923/b88c479976ac33162f658d12959a2111/W8QR1HfVP2.jpg"
          ],
          "price": {
            "origin": 500,
            "promotion": {
              "price": 10,
              "type": 2,
              "discount": 0,
              "label": "秒杀"
            }
          },
          "inventory": {
            "available_num": 6459,
            "used_num": 1662,
            "surplus_num": 4797
          },
          "user_type": 2,
          "exchange_limit_type": 4,
          "exchange_limit_num": 1,
          "start_time": 1664193600,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "652569526596107481",
          "title": "个性装扮8折券",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220930/b88c479976ac33162f658d12959a2111/d5McccHzaX.jpg",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220930/b88c479976ac33162f658d12959a2111/d5McccHzaX.jpg"
          ],
          "price": {
            "origin": 500,
            "promotion": {
              "price": 10,
              "type": 2,
              "discount": 0,
              "label": "秒杀"
            }
          },
          "inventory": {
            "available_num": 50000,
            "used_num": 4486,
            "surplus_num": 45514
          },
          "user_type": 2,
          "exchange_limit_type": 2,
          "exchange_limit_num": 10,
          "start_time": 1664522420,
          "end_time": 1667145599,
          "state": 2
        }
      },
      {
        "base": {
          "token": "652569526663216345",
          "title": "大会员6周年3天试用装扮",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220930/b88c479976ac33162f658d12959a2111/0AgpMilH81.jpeg",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220930/b88c479976ac33162f658d12959a2111/0AgpMilH81.jpeg",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220930/b88c479976ac33162f658d12959a2111/umgPkNfHVr.jpeg",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220930/b88c479976ac33162f658d12959a2111/2q5F0uSp7j.jpeg",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220930/b88c479976ac33162f658d12959a2111/CHAvcqXip3.jpeg"
          ],
          "price": {
            "origin": 200,
            "promotion": {
              "price": 140,
              "type": 1,
              "discount": 7,
              "label": "7折"
            }
          },
          "inventory": {
            "available_num": 5000,
            "used_num": 1553,
            "surplus_num": 3447
          },
          "user_type": 2,
          "exchange_limit_type": 2,
          "exchange_limit_num": 3,
          "start_time": 1664522420,
          "end_time": 1667145599,
          "state": 2
        }
      },
      {
        "base": {
          "token": "617703254146515334",
          "title": "元龙-哔哩哔哩漫画专属限免卡",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220801/b88c479976ac33162f658d12959a2111/ZvgHCqUX8z.png",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/IYmEC7WhRg.png"
          ],
          "price": {
            "origin": 120,
            "promotion": null
          },
          "inventory": {
            "available_num": 2500,
            "used_num": 676,
            "surplus_num": 1824
          },
          "user_type": 2,
          "exchange_limit_type": 3,
          "exchange_limit_num": 5,
          "start_time": 1659337200,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "593959019090116167",
          "title": "网易严选Pro纯享会员季卡",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/MmiTOh3B0r.jpg",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/MmiTOh3B0r.jpg"
          ],
          "price": {
            "origin": 500,
            "promotion": {
              "price": 10,
              "type": 2,
              "discount": 0,
              "label": "秒杀"
            }
          },
          "inventory": {
            "available_num": 110000,
            "used_num": 36254,
            "surplus_num": 73746
          },
          "user_type": 2,
          "exchange_limit_type": 2,
          "exchange_limit_num": 1,
          "start_time": 1655802000,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "610739183048294790",
          "title": "大会员3天卡",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/sxDsdSnSPc.png",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/sxDsdSnSPc.png"
          ],
          "price": {
            "origin": 720,
            "promotion": {
              "price": 360,
              "type": 1,
              "discount": 5,
              "label": "5折"
            }
          },
          "inventory": {
            "available_num": 250000,
            "used_num": 75968,
            "surplus_num": 174032
          },
          "user_type": 2,
          "exchange_limit_type": 3,
          "exchange_limit_num": 1,
          "start_time": 1658246400,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "639706098068193670",
          "title": "会员购8魔晶券",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/yPGHN7xESw.png",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/yPGHN7xESw.png"
          ],
          "price": {
            "origin": 500,
            "promotion": {
              "price": 300,
              "type": 1,
              "discount": 6,
              "label": "6折"
            }
          },
          "inventory": {
            "available_num": 28224,
            "used_num": 8274,
            "surplus_num": 19950
          },
          "user_type": 2,
          "exchange_limit_type": 4,
          "exchange_limit_num": 1,
          "start_time": 1662616800,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "617703254280733062",
          "title": "入间同学入魔了！-哔哩哔哩漫画专属限免卡",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220801/b88c479976ac33162f658d12959a2111/OT3LOXSnJN.png",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/c6RPOSe9Mn.png"
          ],
          "price": {
            "origin": 120,
            "promotion": null
          },
          "inventory": {
            "available_num": 2500,
            "used_num": 820,
            "surplus_num": 1680
          },
          "user_type": 2,
          "exchange_limit_type": 3,
          "exchange_limit_num": 5,
          "start_time": 1659337200,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "643171124875723142",
          "title": "会员购 5 元无门槛优惠券",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/aFmXluGivH.png",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/aFmXluGivH.png"
          ],
          "price": {
            "origin": 1200,
            "promotion": null
          },
          "inventory": {
            "available_num": 5097,
            "used_num": 102,
            "surplus_num": 4995
          },
          "user_type": 2,
          "exchange_limit_type": 3,
          "exchange_limit_num": 1,
          "start_time": 1663135200,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "643171125009940870",
          "title": "会员购10元运费券",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/Tgki97iGuT.png",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/Tgki97iGuT.png"
          ],
          "price": {
            "origin": 2400,
            "promotion": null
          },
          "inventory": {
            "available_num": 1347,
            "used_num": 104,
            "surplus_num": 1243
          },
          "user_type": 2,
          "exchange_limit_type": 3,
          "exchange_limit_num": 1,
          "start_time": 1663135200,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "589270953100440487",
          "title": "大会员周卡",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/0veyfxh8pw.png",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/0veyfxh8pw.png"
          ],
          "price": {
            "origin": 2880,
            "promotion": {
              "price": 1440,
              "type": 1,
              "discount": 5,
              "label": "5折"
            }
          },
          "inventory": {
            "available_num": 25000,
            "used_num": 23303,
            "surplus_num": 1697
          },
          "user_type": 2,
          "exchange_limit_type": 3,
          "exchange_limit_num": 1,
          "start_time": 1655049600,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "617703254012297606",
          "title": "凡人修仙传-哔哩哔哩漫画专属限免卡",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220801/b88c479976ac33162f658d12959a2111/6ggYDOHmaI.png",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/Dgw0KcexF4.png"
          ],
          "price": {
            "origin": 120,
            "promotion": null
          },
          "inventory": {
            "available_num": 2500,
            "used_num": 525,
            "surplus_num": 1975
          },
          "user_type": 2,
          "exchange_limit_type": 3,
          "exchange_limit_num": 5,
          "start_time": 1659337200,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "615454955335156102",
          "title": "0元辣翅-麦当劳券",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/nRJUBwY08K.jpg",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/nRJUBwY08K.jpg"
          ],
          "price": {
            "origin": 2880,
            "promotion": null
          },
          "inventory": {
            "available_num": 1000,
            "used_num": 13,
            "surplus_num": 987
          },
          "user_type": 2,
          "exchange_limit_type": 2,
          "exchange_limit_num": 1,
          "start_time": 1659006000,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "634599326722654598",
          "title": "会员购6.7折优惠券",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220830/b88c479976ac33162f658d12959a2111/UsBxJtHwuE.png",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220830/b88c479976ac33162f658d12959a2111/UsBxJtHwuE.png"
          ],
          "price": {
            "origin": 500,
            "promotion": null
          },
          "inventory": {
            "available_num": 200000,
            "used_num": 30051,
            "surplus_num": 169949
          },
          "user_type": 2,
          "exchange_limit_type": 2,
          "exchange_limit_num": 10,
          "start_time": 1661857200,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "589270952362242983",
          "title": "QQ音乐豪华绿钻7天卡",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/5ffuc5gpsE.jpg",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/5ffuc5gpsE.jpg"
          ],
          "price": {
            "origin": 2880,
            "promotion": null
          },
          "inventory": {
            "available_num": 1267,
            "used_num": 17,
            "surplus_num": 1250
          },
          "user_type": 2,
          "exchange_limit_type": 3,
          "exchange_limit_num": 1,
          "start_time": 1655049600,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "640378711354474886",
          "title": "BEMOE 咒术回战 角色立绘徽章 官方首发版",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220529/b88c479976ac33162f658d12959a2111/hgziHzH19f.png",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220529/b88c479976ac33162f658d12959a2111/hgziHzH19f.png",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220529/b88c479976ac33162f658d12959a2111/NHOJmvbEAI.jpg",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220529/b88c479976ac33162f658d12959a2111/mcBJhmyd1q.jpg",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220529/b88c479976ac33162f658d12959a2111/9BpHMBjUnV.jpg",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220529/b88c479976ac33162f658d12959a2111/ZoJSeBHQ49.png",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220529/b88c479976ac33162f658d12959a2111/NtVKcx2rlk.png",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220529/b88c479976ac33162f658d12959a2111/DIElnpB6oa.png",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220529/b88c479976ac33162f658d12959a2111/UCjfV1tJZy.png",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220529/b88c479976ac33162f658d12959a2111/RoXnjbx7pv.png",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220529/b88c479976ac33162f658d12959a2111/ENZ9CWhZPs.png",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220529/b88c479976ac33162f658d12959a2111/Q5XFivyjX7.png"
          ],
          "price": {
            "origin": 6000,
            "promotion": null
          },
          "inventory": {
            "available_num": 8,
            "used_num": 2,
            "surplus_num": 6
          },
          "user_type": 2,
          "exchange_limit_type": 2,
          "exchange_limit_num": 1,
          "start_time": 1662703200,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "640378708804338054",
          "title": "世嘉 VOCALOID 初音未来 ∞礼服Ver. 景品手办 再版 独家首发",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220530/b88c479976ac33162f658d12959a2111/MKe5xDCKOy.jpg",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220530/b88c479976ac33162f658d12959a2111/WIzEBSkANE.png",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220530/b88c479976ac33162f658d12959a2111/R0PT8fvVsu.jpg",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220530/b88c479976ac33162f658d12959a2111/bfaauwzc0F.jpg",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220530/b88c479976ac33162f658d12959a2111/9UDyJkhjaA.jpg",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220530/b88c479976ac33162f658d12959a2111/ZFkov947WL.jpg",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220530/b88c479976ac33162f658d12959a2111/MKe5xDCKOy.jpg"
          ],
          "price": {
            "origin": 26160,
            "promotion": null
          },
          "inventory": {
            "available_num": 1,
            "used_num": 0,
            "surplus_num": 1
          },
          "user_type": 2,
          "exchange_limit_type": 2,
          "exchange_limit_num": 1,
          "start_time": 1662703200,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "650284831695011033",
          "title": "初音手办-会员购7.2折券",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220923/b88c479976ac33162f658d12959a2111/KAeQDqSGMy.jpg",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220923/b88c479976ac33162f658d12959a2111/KAeQDqSGMy.jpg"
          ],
          "price": {
            "origin": 500,
            "promotion": {
              "price": 10,
              "type": 2,
              "discount": 0,
              "label": "秒杀"
            }
          },
          "inventory": {
            "available_num": 7387,
            "used_num": 2431,
            "surplus_num": 4956
          },
          "user_type": 2,
          "exchange_limit_type": 4,
          "exchange_limit_num": 1,
          "start_time": 1664193600,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "589270952563569575",
          "title": "QQ超级会员7天卡",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/nTB809PW5i.png",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/nTB809PW5i.png"
          ],
          "price": {
            "origin": 2880,
            "promotion": null
          },
          "inventory": {
            "available_num": 1279,
            "used_num": 29,
            "surplus_num": 1250
          },
          "user_type": 2,
          "exchange_limit_type": 3,
          "exchange_limit_num": 1,
          "start_time": 1655049600,
          "end_time": 1672502399,
          "state": 2
        }
      }
    ],
    "current_ts": 1665149272
  }
}
```

</details>

### 大积分改变记录

> https://api.bilibili.com/x/vip_point/list

_请求方式：GET_

认证方式：Cookie (SESSDATA) / access_key

**url 参数：**

| 参数名      | 类型 | 内容           | 必要性       | 备注                                                          |
| ----------- | ---- | -------------- | ------------ | ------------------------------------------------------------- |
| access_key  | str  | APP 登录 Token | APP 方式必要 |                                                               |
| change_type | num  | 改变类型       | 非必要       | 默认 `0` <br /> 0：所有类型<br />1：获取记录<br />2：消耗记录 |
| pn          | num  | 分页页数       | 非必要       | 默认 `1`                                                      |
| ps          | num  | 分页大小       | 非必要       | 默认 `20`                                                     |

**json 回复：**

根对象：

| 字段名  | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 响应码   | 0：成功<br />-101：账号未登录 |
| message | str  | 0        |                               |
| ttl     | num  | 1        |                               |
| data    | obj  | 信息本体 |                               |

`data`对象：

| 字段名         | 类型  | 内容         | 备注                          |
| -------------- | ----- | ------------ | ----------------------------- |
| total          | num   | 总记录数     |                               |
| big_point_list | array | 积分记录数组 | 不存在时为 null，而不是空数组 |

`data.big_point_list` 数组中的对象：

| 字段名      | 类型 | 内容                 | 备注                   |
| ----------- | ---- | -------------------- | ---------------------- |
| point       | num  | 改变的积分数         | 消耗为负数             |
| change_time | num  | 改变时间戳           | 秒                     |
| remark      | str  | 批注，积分改变的原因 |                        |
| order_no    | str  | 编号                 |                        |
| image_url   | str  | 商品图片             | 消耗时存在，获取时为空 |

**示例：**

web 方式：

```shell
curl 'https://api.bilibili.com/x/vip_point/list?ps=1&pn=1' \
	-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "total": 1,
    "big_point_list": [
      {
        "point": 40,
        "change_time": 1669782576,
        "remark": "观看任意正片内容",
        "order_no": "t-s-c-5228025310",
        "image_url": ""
      }
    ]
  }
}
```

</details>
