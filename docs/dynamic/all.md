# 获取动态列表

> https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/all

请求方式：`GET`

是否需要登录：`是`

## URL参数

| 参数名             | 类型  | 必填  | 内容     | 备注                                                        |
|-----------------|-----|-----|--------|-----------------------------------------------------------|
| timezone_offset | str |     | `-480` |                                                           |
| type            | str |     | 分类     | `all`：全部<br/>`video`：视频投稿<br/>`pgc`：追番追剧<br/>`article`：专栏 |
| offset          | num |     | 分页偏移量  | 翻页时使用                                                     |
| update_baseline | str |     | 更新基线   | 获取新动态时使用                                                  |
| page            | num |     | 页数     | 无效参数                                                      |

## Json回复

### 根对象

| 字段名     | 类型  | 内容   | 备注                  |
|---------|-----|------|---------------------|
| code    | num | 响应码  | 0：成功<br/>-101：账号未登录 |
| message | str |      |                     |
| ttl     | num | 1    |                     |
| data    | obj | 信息本体 |                     |

### `data`对象

| 字段名             | 类型    | 内容             | 备注                               |
|-----------------|-------|----------------|----------------------------------|
| has_more        | bool  | 是否有更多数据        |                                  |
| items           | array | 数据数组           |                                  |
| offset          | str   | 偏移量            | 等于`items`中最后一条记录的id<br/>获取下一页时使用 |
| update_baseline | str   | 更新基线           | 等于`items`中第一条记录的id               |
| update_num      | num   | 本次获取获取到了多少条新动态 | 在更新基线以上的动态条数                     |

### `data`对象 -> `items`数组中的对象

| 字段名     | 类型   | 内容    | 备注                                 |
|---------|------|-------|------------------------------------|
| basic   | obj  |       |                                    |
| id_str  | str  | 动态id  |                                    |
| modules | obj  | 动态信息  |                                    |
| type    | str  | 动态类型  | [动态类型](./dynamic_enum.md#动态类型)     |
| visible | bool | 是否显示  | `true`：正常显示<br/>`false`：折叠动态       |
| orig    | obj  | 原动态信息 | 仅动态类型为`DYNAMIC_TYPE_FORWARD`的情况下存在 |

### `data`对象 -> `items`数组中的对象 -> `basic`对象

| 字段名            | 类型  | 内容  | 备注                                                                                                                                                                                                                                                                                                                                                       |
|----------------|-----|-----|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| comment_id_str | str |     | `DYNAMIC_TYPE_AV`：视频AV号<br/>`DYNAMIC_TYPE_UGC_SEASON`：视频AV号<br/>`DYNAMIC_TYPE_PGC`：剧集分集AV号<br/>`DYNAMIC_TYPE_LIVE_RCMD`：动态本身id<br/>`DYNAMIC_TYPE_DRAW`：相簿id<br/>`DYNAMIC_TYPE_ARTICLE`：专栏cv号<br/>`DYNAMIC_TYPE_FORWARD`：动态本身id<br/>`DYNAMIC_TYPE_WORD`：动态本身id<br/>`DYNAMIC_TYPE_LIVE`:动态本身id<br/>`DYNAMIC_TYPE_MEDIALIST`:收藏夹ml号                         |
| comment_type   | num |     | 1：`DYNAMIC_TYPE_AV` `DYNAMIC_TYPE_PGC` `DYNAMIC_TYPE_UGC_SEASON`<br/>11：`DYNAMIC_TYPE_DRAW`<br/>12：`DYNAMIC_TYPE_ARTICLE`<br/>17：`DYNAMIC_TYPE_LIVE_RCMD` `DYNAMIC_TYPE_FORWARD` `DYNAMIC_TYPE_WORD` `DYNAMIC_TYPE_COMMON_SQUARE`<br/>19：`DYNAMIC_TYPE_MEDIALIST`                                                                                        |
| like_icon      | obj |     | `空串`                                                                                                                                                                                                                                                                                                                                                     |
| rid_str        | str |     | `DYNAMIC_TYPE_AV`：视频AV号<br/>`DYNAMIC_TYPE_UGC_SEASON`：视频AV号 `DYNAMIC_TYPE_PGC`：剧集分集EP号<br/>`DYNAMIC_TYPE_DRAW`：相簿id<br/>`DYNAMIC_TYPE_ARTICLE`：专栏cv号<br/>`DYNAMIC_TYPE_LIVE_RCMD`：live_id<br/>`DYNAMIC_TYPE_FORWARD`：未知<br/>`DYNAMIC_TYPE_WORD`：未知<br/>`DYNAMIC_TYPE_COMMON_SQUARE`：未知<br/>`DYNAMIC_TYPE_LIVE`：直播间id<br/>`DYNAMIC_TYPE_MEDIALIST`：收藏夹ml号 |

### `data`对象 -> `items`数组中的对象 -> `basic`对象 -> `like_icon`对象

| 字段名        | 类型  | 内容   | 备注  |
|------------|-----|------|-----|
| action_url | str | `空串` |     |
| end_url    | str | `空串` |     |
| id         | num | `0`  |     |
| start_url  | str | `空串` |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象

| 字段名                | 类型  | 内容        | 备注  |
|--------------------|-----|-----------|-----|
| module_author      | obj | UP主信息     |     |
| module_dynamic     | obj | 动态内容信息    |     |
| module_more        | obj | 动态右上角三点菜单 |     |
| module_stat        | obj | 动态统计数据    |     |
| module_interaction | obj | 热度评论      |     |
| module_fold        | obj | 动态折叠信息    |     |
| module_dispute     | obj | 争议小黄条     |     |
| module_tag     | obj | 置顶信息     |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_author`对象

| 字段名               | 类型   | 内容                      | 备注                                                                                  |
|-------------------|------|-------------------------|-------------------------------------------------------------------------------------|
| face              | str  | 头像                      |                                                                                     |
| face_nft          | bool | 是否为NFT头像                |                                                                                     |
| following         | bool | 是否关注此UP主                | 自己的动态为`null`                                                                        |
| jump_url          | str  | 跳转链接                    |                                                                                     |
| label             | str  | 名称前标签                   | `合集`<br/>`电视剧`<br/>`番剧`                                                             |
| mid               | num  | UP主UID<br/>剧集SeasonId   |                                                                                     |
| name              | str  | UP主名称<br/>剧集名称<br/>合集名称 |                                                                                     |
| official_verify   | obj  | UP主认证信息                 |                                                                                     |
| pendant           | obj  | UP主头像框                  |                                                                                     |
| pub_action        | str  | 更新动作描述                  | `投稿了视频`<br/>`直播了`<br/>`投稿了文章`<br/>`更新了合集`<br/>`与他人联合创作`<br/>`发布了动态视频`<br/>`投稿了直播回放` |
| pub_location_text | str  | `空串`                    |                                                                                     |
| pub_time          | str  | 更新时间                    | `x分钟前`<br/>`x小时前`<br/>`昨天`                                                          |
| pub_ts            | num  | 更新时间戳                   | 单位：秒                                                                                |
| type              | str  | 作者类型                    | [作者类型](./dynamic_enum.md#作者类型)                                                                       |
| vip               | obj  | UP主大会员信息                |                                                                                     |
| decorate          | obj  | 装扮信息                    |                                                                                     |
| nft_info          | obj  | NFT头像信息                 |                                                                                     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_author`对象 -> `official_verify`对象

| 字段名  | 类型  | 内容   | 备注  |
|------|-----|------|-----|
| desc | str | 认证说明 |     |
| type | num | 认证类型 |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_author`对象 -> `pendant`对象

| 字段名                 | 类型  | 内容           | 备注         |
|---------------------|-----|--------------|------------|
| expire              | num | 过期时间         | 此接口返回恒为`0` |
| image               | str | 头像框图片url     |            |
| image_enhance       | str | 头像框图片url     |            |
| image_enhance_frame | str | 头像框图片逐帧序列url |            |
| name                | str | 头像框名称        |            |
| pid                 | num | 头像框id        |            |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_author`对象 -> `vip`对象

| 字段名                  | 类型  | 内容       | 备注                              |
|----------------------|-----|----------|---------------------------------|
| avatar_subscript     | num | 是否显示角标   | 0：不显示<br/>1：显示                  |
| avatar_subscript_url | str | `空串`     |                                 |
| due_date             | num | 大会员过期时间戳 | 单位：秒                            |
| label                | obj | 大会员标签    |                                 |
| nickname_color       | str | 名字显示颜色   | 大会员：`#FB7299`                   |
| status               | num | 大会员状态    | 0：无<br />1：有<br/>2：？            |
| theme_type           | num | `0`      |                                 |
| type                 | num | 大会员类型    | 0：无<br />1：月大会员<br />2：年度及以上大会员 |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_author`对象 -> `vip`对象 -> `label`对象

| 字段名                       | 类型   | 内容       | 备注                                                                                                                           |
|---------------------------|------|----------|------------------------------------------------------------------------------------------------------------------------------|
| bg_color                  | str  | 会员标签背景颜色 | `#FB7299`                                                                                                                    |
| bg_style                  | num  | `0` `1`  |                                                                                                                              |
| border_color              | str  | `空串`     |                                                                                                                              |
| img_label_uri_hans        | str  | 大会员牌子图片  | 动态版 简体版                                                                                                                      |
| img_label_uri_hans_static | str  | 大会员牌子图片  | 静态版 简体版                                                                                                                      |
| img_label_uri_hant        | str  | 大会员牌子图片  | 动态版 繁体版                                                                                                                      |
| img_label_uri_hant_static | str  | 大会员牌子图片  | 静态版 繁体版                                                                                                                      |
| label_theme               | str  | 会员标签     | vip：大会员<br />annual_vip：年度大会员<br />ten_annual_vip：十年大会员<br />hundred_annual_vip：百年大会员<br/>fools_day_hundred_annual_vip：最强绿鲤鱼 |
| path                      | str  | `空串`     |                                                                                                                              |
| text                      | str  | 会员类型文案   | `大会员` `年度大会员` `十年大会员` `百年大会员` `最强绿鲤鱼`                                                                                        |
| text_color                | str  | 用户名文字颜色  |                                                                                                                              |
| use_img_label             | bool | `true`   |                                                                                                                              |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_author`对象 -> `decorate`对象

| 字段名      | 类型  | 内容           | 备注  |
|----------|-----|--------------|-----|
| card_url | str | 动态卡片小图标图片URL |     |
| fan      | obj | 粉丝装扮信息       |     |
| id       | num | 装扮ID         |     |
| jump_url | str | 跳转URL        |     |
| name     | str | 装扮名称         |     |
| type     | num | `1` `2` `3`  |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_author`对象 -> `decorate`对象 -> `fan`对象

| 字段名     | 类型   | 内容      | 备注  |
|---------|------|---------|-----|
| color   | str  | 编号颜色    |     |
| is_fan  | bool | 是否是粉丝装扮 |     |
| num_str | str  | 装扮编号    |     |
| number  | num  | 装扮编号    |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_author`对象 -> `nft_info`对象

| 字段名         | 类型  | 内容         | 备注                                                                                                                                                                                                                         |
|-------------|-----|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| region_icon | str | NFT头像角标URL | 类型1：https://i0.hdslb.com/bfs/activity-plat/static/20220506/334553dd7c506a92b88eaf4d59ac8b4d/j8AeXAkEul.gif <br/>类型2：https://i0.hdslb.com/bfs/activity-plat/static/20220506/334553dd7c506a92b88eaf4d59ac8b4d/IOHoVs1ebP.gif |
| region_type | num | NFT头像角标类型  | 1,2                                                                                                                                                                                                                        |
| show_status | num | `1`        |                                                                                                                                                                                                                            |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象

| 字段名        | 类型  | 内容       | 备注  |
|------------|-----|----------|-----|
| additional | obj | 相关内容卡片信息 |     |
| desc       | obj | 动态文字内容   |其他动态时为null     |
| major      | obj | 动态主体对象   |转发动态时为null     |
| topic      | obj | 话题信息     |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `additional`对象

| 字段名     | 类型  | 内容   | 备注                                     |
|---------|-----|------|----------------------------------------|
| common  | obj | 一般类型 | `ADDITIONAL_TYPE_COMMON`类型独有           |
| type    | str | 卡片类型 | [相关内容卡片类型](./dynamic_enum.md#相关内容卡片类型) |
| reserve | obj | 预约信息 | `ADDITIONAL_TYPE_RESERVE`类型独有          |
| goods   | obj | 商品内容 | `ADDITIONAL_TYPE_GOODS`类型独有            |
| vote    | obj | 投票信息 | `ADDITIONAL_TYPE_VOTE`类型独有             |
| ugc     | obj | 视频信息 | `ADDITIONAL_TYPE_UGC`类型独有              |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `additional`对象 -> `common`对象

| 字段名       | 类型  | 内容    | 备注                                |
|-----------|-----|-------|-----------------------------------|
| button    | obj | 按钮内容  |                                   |
| cover     | str | 左侧封面图 |                                   |
| desc1     | str | 描述1   |                                   |
| desc2     | str | 描述2   |                                   |
| head_text | str | 卡片头文本 |                                   |
| id_str    | str | 相关id  |                                   |
| jump_url  | str | 跳转URL |                                   |
| style     | num | `1`   |                                   |
| sub_type  | str | 子类型   | `game`<br/>`decoration`<br/>`ogv` |
| title     | str | 卡片标题  |                                   |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `additional`对象 -> `common`对象 -> `button`对象

| 字段名        | 类型  | 内容    | 备注                                    |
|------------|-----|-------|---------------------------------------|
| jump_style | obj | 跳转类型  | `game`和`decoration`类型特有               |
| jump_url   | str | 跳转URL |                                       |
| type       | num |       | 1：`game`和`decoration`类型<br/>2：`ogv`类型 |
| check      | obj |       | `ogv`类型特有                             |
| status     | num | `1`   |                                       |
| uncheck    | obj |       | `ogv`类型特有                             |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `additional`对象 -> `common`对象 -> `button`对象 -> `jump_style`对象

| 字段名      | 类型  | 内容     | 备注                             |
|----------|-----|--------|--------------------------------|
| icon_url | str | `空串`   |                                |
| text     | str | 按钮显示文案 | game：`进入`<br/>decoration：`去看看` |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `additional`对象 -> `common`对象 -> `button`对象 -> `check`对象

| 字段名      | 类型  | 内容      | 备注        |
|----------|-----|---------|-----------|
| icon_url | str | 按钮图片URL |           |
| text     | str | 按钮显示文案  | `ogv`：已追剧 |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `additional`对象 -> `common`对象 -> `button`对象 -> `uncheck`对象

| 字段名      | 类型  | 内容      | 备注       |
|----------|-----|---------|----------|
| icon_url | str | 按钮图片URL |          |
| text     | str | 按钮显示文案  | `ogv`：追剧 |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `additional`对象 -> `reserve`对象

| 字段名           | 类型  | 内容       | 备注  |
|---------------|-----|----------|-----|
| button        | obj | 按钮信息     |     |
| desc1         | obj | 预约时间     |     |
| desc2         | obj | 预约观看量    |     |
| jump_url      | str | 跳转URL    |     |
| reserve_total | num | 预约人数     |     |
| rid           | num |          |     |
| state         | num | `0`      |     |
| stype         | num | `1` `2`  |     |
| title         | str | 预约标题     |     |
| up_mid        | num | 预约发起人UID |     |
| desc3         | obj | 预约有奖信息   |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `additional`对象 -> `reserve`对象 -> `button`对象

| 字段名        | 类型  | 内容        | 备注                                                   |
|------------|-----|-----------|------------------------------------------------------|
| check      | obj | 已预约状态显示内容 |                                                      |
| status     | num | 预约状态      | 1：未预约，使用`uncheck`<br/>2：已预约，使用`check`                |
| type       | num | 类型        | 1：视频预约，使用`jump_style`<br/>2：直播预约，使用`check`和`uncheck` |
| uncheck    | obj | 未预约状态显示内容 |                                                      |
| jump_style | obj | 跳转按钮      |                                                      |
| jump_url   | str | 跳转URL     |                                                      |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `additional`对象 -> `reserve`对象 -> `button`对象 -> `check`对象

| 字段名      | 类型  | 内容     | 备注    |
|----------|-----|--------|-------|
| icon_url | str | `空串`   |       |
| text     | str | 按钮显示文案 | `已预约` |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `additional`对象 -> `reserve`对象 -> `button`对象 -> `uncheck`对象

| 字段名      | 类型  | 内容         | 备注  |
|----------|-----|------------|-----|
| icon_url | str | 显示图标URL    |     |
| text     | str | 按钮显示文案     |     |
| toast    | str | 预约成功显示提示文案 |     |
| disable  | num | 是否不可预约     | 1：是 |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `additional`对象 -> `reserve`对象 -> `button`对象 -> `jump_style`对象

| 字段名      | 类型  | 内容     | 备注    |
|----------|-----|--------|-------|
| icon_url | str | `空串`   |       |
| text     | str | 按钮显示文案 | `去观看` |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `additional`对象 -> `reserve`对象 -> `desc1`对象

| 字段名   | 类型  | 内容   | 备注                                                   |
|-------|-----|------|------------------------------------------------------|
| style | num | 类型   | 0：`视频预约` `11-05 20:00 直播` `预计今天 17:05发布`<br/>1：`直播中` |
| text  | str | 显示文案 |                                                      |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `additional`对象 -> `reserve`对象 -> `desc2`对象

| 字段名     | 类型   | 内容   | 备注                                            |
|---------|------|------|-----------------------------------------------|
| style   | num  | `0`  |                                               |
| text    | str  | 显示文案 | `2人预约`<br/>`743观看`<br/>`1.0万人看过`<br/>`2151人气` |
| visible | bool | 是否显示 | true：显示文案<br/>false：显示已结束                     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `additional`对象 -> `reserve`对象 -> `desc3`对象

| 字段名      | 类型  | 内容        | 备注  |
|----------|-----|-----------|-----|
| jump_url | str | 开奖信息跳转URL |     |
| style    | num | `1`       |     |
| text     | str | 奖品信息显示文案  |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `additional`对象 -> `goods`对象

| 字段名       | 类型    | 内容      | 备注  |
|-----------|-------|---------|-----|
| head_icon | str   | `空串`    |     |
| head_text | str   | 卡片头显示文案 |     |
| items     | array | 商品信息列表  |     |
| jump_url  | str   | `空串`    |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `additional`对象 -> `goods`对象 -> `items`数组中的对象

| 字段名       | 类型  | 内容       | 备注  |
|-----------|-----|----------|-----|
| brief     | str | 商品副标题    |     |
| cover     | str | 商品封面     |     |
| id        | str | 商品ID     |     |
| jump_desc | str | 跳转按钮显示文案 |     |
| jump_url  | str | 跳转URL    |     |
| name      | str | 商品名称     |     |
| price     | str | 商品价格     |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `additional`对象 -> `vote`对象

| 字段名           | 类型   | 内容              | 备注   |
|---------------|------|-----------------|------|
| choice_cnt    | num  | `1`             |      |
| default_share | num  | 是否默认勾选`同时分享至动态` | 1：勾选 |
| desc          | str  | 投票标题            |      |
| end_time      | num  | 剩余时间            | 单位：秒 |
| join_num      | num  | 已参与人数           |      |
| status        | num  | `1`             |      |
| type          | null | `null`          |      |
| uid           | num  | 发起人UID          |      |
| vote_id       | num  | 投票ID            |      |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `additional`对象 -> `ugc`对象

| 字段名         | 类型   | 内容      | 备注  |
|-------------|------|---------|-----|
| cover       | str  | 封面      |     |
| desc_second | str  | 播放量与弹幕数 |     |
| duration    | str  | 视频长度    |     |
| head_text   | str  | `空串`    |     |
| id_str      | str  | 视频AV号   |     |
| jump_url    | str  | 视频跳转URL |     |
| multi_line  | bool | `true`  |     |
| title       | str  | 视频标题    |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `desc`对象

| 字段名             | 类型    | 内容      | 备注                                   |
|-----------------|-------|---------|--------------------------------------|
| rich_text_nodes | array | 富文本节点列表 | [富文本节点类型](./dynamic_enum.md#富文本节点类型) |
| text            | str   | 动态的文字内容 |                                      |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `desc`对象 -> `rich_text_nodes`数组中的对象

| 字段名       | 类型  | 内容     | 备注                                   |
|-----------|-----|--------|--------------------------------------|
| orig_text | str | 原始文本   |                                      |
| text      | str | 替换后的文本 |                                      |
| type      | str | 节点类型   | [富文本节点类型](./dynamic_enum.md#富文本节点类型) |
| emoji     | obj | 表情信息   |                                      |
| jump_url  | str | 跳转URL  |                                      |
| rid       | str | 关联id   |                                      |
| goods     | obj | 商品信息   |                                      |
| icon_name | str | 图标名称   | `taobao`                             |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `desc`对象 -> `rich_text_nodes`数组中的对象 -> `emoji`对象

| 字段名      | 类型  | 内容      | 备注          |
|----------|-----|---------|-------------|
| icon_url | str | 表情图片URL |             |
| size     | num | 表情尺寸    | `1` `2`     |
| text     | str | 表情的文字代码 |             |
| type     | num | 表情类型    | `1` `2` `3` |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `desc`对象 -> `rich_text_nodes`数组中的对象 -> `goods`对象

| 字段名      | 类型  | 内容    | 备注  |
|----------|-----|-------|-----|
| jump_url | str | 跳转URL |     |
| type     | num | `1`   |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `major`对象

| 字段名        | 类型  | 内容     | 备注                      |
|------------|-----|--------|-------------------------|
| type       | str | 动态主体类型 | [动态主体类型](./dynamic_enum.md#动态主体类型)       |
| ugc_season | obj | 合集信息   | `MAJOR_TYPE_UGC_SEASON` |
| article    | obj | 专栏类型   | `MAJOR_TYPE_ARTICLE`    |
| draw       | obj | 带图动态   | `MAJOR_TYPE_DRAW`       |
| archive    | obj | 视频信息   | `MAJOR_TYPE_ARCHIVE`    |
| live_rcmd  | obj | 直播状态   | `MAJOR_TYPE_LIVE_RCMD`  |
| common     | obj | 一般类型   | `MAJOR_TYPE_COMMON`     |
| pgc        | obj | 剧集信息   | `MAJOR_TYPE_PGC`        |
| courses    | obj | 课程信息   | `MAJOR_TYPE_COURSES`    |
| music      | obj | 音频信息   | `MAJOR_TYPE_MUSIC`      |
| opus       | obj | 图文动态   | `MAJOR_TYPE_OPUS`       |
| live       | obj |        |                         |
| none       | obj | 动态失效   | `MAJOR_TYPE_NONE`       |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `major`对象 -> `ugc_season`对象

| 字段名             | 类型  | 内容    | 备注  |
|-----------------|-----|-------|-----|
| aid             | num | 视频AV号 |     |
| badge           | obj | 角标信息  |     |
| cover           | str | 视频封面  |     |
| desc            | str | 视频简介  |     |
| disable_preview | num | `0`   |     |
| duration_text   | str | 时长    |     |
| jump_url        | str | 跳转URL |     |
| stat            | obj | 统计信息  |     |
| title           | str | 视频标题  |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `major`对象 -> `ugc_season`对象 -> `badge`对象

| 字段名      | 类型  | 内容   | 备注  |
|----------|-----|------|-----|
| bg_color | str | 背景颜色 |     |
| color    | str | 字体颜色 |     |
| text     | str | 角标文案 |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `major`对象 -> `ugc_season`对象 -> `stat`对象

| 字段名     | 类型  | 内容  | 备注  |
|---------|-----|-----|-----|
| danmaku | str | 弹幕数 |     |
| play    | str | 播放数 |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `major`对象 -> `article`对象

| 字段名      | 类型    | 内容     | 备注   |
|----------|-------|--------|------|
| covers   | array | 封面图数组  | 最多三张 |
| desc     | str   | 文章摘要   |      |
| id       | num   | 文章CV号  |      |
| jump_url | str   | 文章跳转地址 |      |
| label    | str   | 文章阅读量  |      |
| title    | str   | 文章标题   |      |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `major`对象 -> `draw`对象

| 字段名   | 类型    | 内容     | 备注  |
|-------|-------|--------|-----|
| id    | num   | 对应相簿id |     |
| items | array | 图片信息列表 |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `major`对象 -> `draw`对象 -> `items`数组中的对象

| 字段名    | 类型    | 内容    | 备注   |
|--------|-------|-------|------|
| height | num   | 图片高度  |      |
| size   | num   | 图片大小  | 单位KB |
| src    | str   | 图片URL |      |
| tags   | array |       |      |
| width  | num   | 图片宽度  |      |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `major`对象 -> `archive`对象

| 字段名             | 类型  | 内容     | 备注  |
|-----------------|-----|--------|-----|
| aid             | str | 视频AV号  |     |
| badge           | obj | 角标信息   |     |
| bvid            | str | 视频BVID |     |
| cover           | str | 视频封面   |     |
| desc            | str | 视频简介   |     |
| disable_preview | num | `0`    |     |
| duration_text   | str | 视频长度   |     |
| jump_url        | str | 跳转URL  |     |
| stat            | obj | 统计信息   |     |
| title           | str | 视频标题   |     |
| type            | num | `1`    |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `major`对象 -> `archive`对象 -> `badge`对象

| 字段名      | 类型  | 内容   | 备注  |
|----------|-----|------|-----|
| bg_color | str | 背景颜色 |     |
| color    | str | 字体颜色 |     |
| text     | str | 角标文案 |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `major`对象 -> `archive`对象 -> `stat`对象

| 字段名     | 类型  | 内容  | 备注  |
|---------|-----|-----|-----|
| danmaku | str | 弹幕数 |     |
| play    | str | 播放数 |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `major`对象 -> `live_rcmd`对象

| 字段名          | 类型  | 内容        | 备注  |
|--------------|-----|-----------|-----|
| content      | str | 直播间内容JSON |     |
| reserve_type | num | `0`       |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `major`对象 -> `common`对象

| 字段名       | 类型  | 内容     | 备注  |
|-----------|-----|--------|-----|
| badge     | obj | 角标信息   |     |
| biz_type  | num | `0`    |     |
| cover     | str | 左侧图片封面 |     |
| desc      | str | 右侧描述信息 |     |
| id        | str |        |     |
| jump_url  | str | 跳转地址   |     |
| label     | str | `空串`   |     |
| sketch_id | str |        |     |
| style     | num | `1`    |     |
| title     | str | 右侧标题   |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `major`对象 -> `common`对象 -> `badge`对象

| 字段名      | 类型  | 内容   | 备注  |
|----------|-----|------|-----|
| bg_color | str | `空串` |     |
| color    | str | `空串` |     |
| text     | str | `空串` |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `major`对象 -> `pgc`对象

| 字段名       | 类型  | 内容         | 备注                                                           |
|-----------|-----|------------|--------------------------------------------------------------|
| badge     | obj | 角标信息       |                                                              |
| cover     | str | 视频封面       |                                                              |
| epid      | num | 分集EpId     |                                                              |
| jump_url  | str | 跳转URL      |                                                              |
| season_id | num | 剧集SeasonId |                                                              |
| stat      | obj | 统计信息       |                                                              |
| sub_type  | num | 剧集类型       | 1：番剧<br/>2：电影<br/>3：纪录片<br/>4：国创<br/>5：电视剧<br/>6：漫画<br/>7：综艺 |
| title     | str | 视频标题       |                                                              |
| type      | num | `2`        |                                                              |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `major`对象 -> `pgc`对象 -> `badge`对象

| 字段名      | 类型  | 内容   | 备注  |
|----------|-----|------|-----|
| bg_color | str | 背景颜色 |     |
| color    | str | 字体颜色 |     |
| text     | str | 角标文案 |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `major`对象 -> `pgc`对象 -> `stat`对象

| 字段名     | 类型  | 内容  | 备注  |
|---------|-----|-----|-----|
| danmaku | str | 弹幕数 |     |
| play    | str | 播放数 |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `major`对象 -> `courses`对象

| 字段名       | 类型  | 内容     | 备注  |
|-----------|-----|--------|-----|
| badge     | obj | 角标信息   |     |
| cover     | str | 封面图URL |     |
| desc      | str | 更新状态描述 |     |
| id        | num | 课程id   |     |
| jump_url  | str | 跳转URL  |     |
| sub_title | str | 课程副标题  |     |
| title     | str | 课程标题   |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `major`对象 -> `courses`对象 -> `badge`对象

| 字段名      | 类型  | 内容   | 备注  |
|----------|-----|------|-----|
| bg_color | str | 背景颜色 |     |
| color    | str | 字体颜色 |     |
| text     | str | 角标文案 |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `major`对象 -> `music`对象

| 字段名      | 类型  | 内容     | 备注  |
|----------|-----|--------|-----|
| cover    | str | 音频封面   |     |
| id       | num | 音频AUID |     |
| jump_url | str | 跳转URL  |     |
| label    | str | 音频分类   |     |
| title    | str | 音频标题   |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `major`对象 -> `opus`对象

| 字段名      | 类型  | 内容     | 备注  |
|---------------|------|--------|-----|
| fold_action   | array | 展开收起   |     |
| jump_url      | str  | 跳转URL  |     |
| pics          | array | 图片信息   |     |
| summary       | obj  | 动态内容   |     |
| title         | str  | 动态标题   | 没有标题时为null    |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `major`对象 -> `opus`对象 -> `summary`对象

| 字段名             | 类型    | 内容      | 备注                                   |
|-----------------|-------|---------|--------------------------------------|
| rich_text_nodes | array | 富文本节点列表 | 和`desc`对象中的`rich_text_nodes`数组结构一样 |
| text            | str   | 评论内容    |                                      |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `major`对象 -> `live`对象

| 字段名          | 类型  | 内容       | 备注                |
|--------------|-----|----------|-------------------|
| badge        | obj | 角标信息     |                   |
| cover        | str | 直播封面     |                   |
| desc_first   | str | 直播主分区名称  |                   |
| desc_second  | str | 观看人数     |                   |
| id           | num | 直播间id    |                   |
| jump_url     | str | 直播间跳转URL |                   |
| live_state   | num | 直播状态     | 0：直播结束<br/>1：正在直播 |
| reserve_type | num | `0`      |                   |
| title        | str | 直播间标题    |                   |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `major`对象 -> `live`对象 -> `badge`对象

| 字段名      | 类型  | 内容   | 备注  |
|----------|-----|------|-----|
| bg_color | str | 背景颜色 |     |
| color    | str | 字体颜色 |     |
| text     | str | 角标文案 |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `major`对象 -> `none`对象

| 字段名  | 类型  | 内容       | 备注  |
|------|-----|----------|-----|
| tips | str | 动态失效显示文案 | deprecated?    |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dynamic`对象 -> `topic`对象

| 字段名      | 类型  | 内容    | 备注  |
|----------|-----|-------|-----|
| id       | num | 话题id  |     |
| jump_url | str | 跳转URL |     |
| name     | str | 话题名称  |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_more`对象

| 字段名               | 类型    | 内容      | 备注  |
|-------------------|-------|---------|-----|
| three_point_items | array | 右上角三点菜单 |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_more`对象 -> `three_point_items`数组中的对象

| 字段名    | 类型  | 内容    | 备注         |
|--------|-----|-------|------------|
| label  | str | 显示文本  |            |
| type   | str | 类型    |            |
| modal  | obj | 弹出框信息 | 删除动态时弹出    |
| params | obj | 参数    | 置顶/取消置顶时使用 |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_more`对象 -> `three_point_items`数组中的对象 -> `modal`对象

| 字段名     | 类型  | 内容   | 备注            |
|---------|-----|------|---------------|
| cancel  | str | 取消按钮 | `我点错了`        |
| confirm | str | 确认按钮 | `删除`          |
| content | str | 提示内容 | `确定要删除此条动态吗？` |
| title   | str | 标题   | `删除动态`        |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_more`对象 -> `three_point_items`数组中的对象 -> `params`对象

| 字段名        | 类型   | 内容           | 备注  |
|------------|------|--------------|-----|
| dynamic_id | str  | 当前动态ID       |  deprecated?   |
| status     | bool | 当前动态是否处于置顶状态 | deprecated?    |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_stat`对象

| 字段名     | 类型  | 内容   | 备注  |
|---------|-----|------|-----|
| comment | obj | 评论数据 |     |
| forward | obj | 转发数据 |     |
| like    | obj | 点赞数据 |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_stat`对象 -> `comment`对象

| 字段名       | 类型   | 内容      | 备注            |
|-----------|------|---------|---------------|
| count     | num  | 评论数     |               |
| forbidden | bool | `false` |               |
| hidden    | bool | 是否隐藏    | 直播类型动态会隐藏回复功能 |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_stat`对象 -> `forward`对象

| 字段名       | 类型   | 内容      | 备注  |
|-----------|------|---------|-----|
| count     | num  | 转发数     |     |
| forbidden | bool | `false` |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_stat`对象 -> `like`对象

| 字段名       | 类型   | 内容       | 备注  |
|-----------|------|----------|-----|
| count     | num  | 点赞数      |     |
| forbidden | bool | `false`  |     |
| status    | bool | 当前用户是否点赞 |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_interaction`对象

| 字段名   | 类型    | 内容   | 备注  |
|-------|-------|------|-----|
| items | array | 信息列表 |     |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_interaction`对象 -> `items`数组中的对象

| 字段名  | 类型  | 内容      | 备注                |
|------|-----|---------|-------------------|
| desc | obj | 点赞/评论信息 |                   |
| type | num | 类型      | 0：点赞信息<br/>1：评论信息 |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_interaction`对象 -> `items`数组中的对象 -> `desc`对象

| 字段名             | 类型    | 内容      | 备注                                   |
|-----------------|-------|---------|--------------------------------------|
| rich_text_nodes | array | 富文本节点列表 | [富文本节点类型](./dynamic_enum.md#富文本节点类型) |
| text            | str   | 评论内容    |                                      |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_interaction`对象 -> `items`数组中的对象 -> `desc`对象 -> `rich_text_nodes`数组中的对象

| 字段名       | 类型  | 内容      | 备注                                   |
|-----------|-----|---------|--------------------------------------|
| orig_text | str | 原始文本    |                                      |
| rid       | str | 关联ID    | 用户UID                                |
| text      | str | 替换后文本   |                                      |
| type      | str | 富文本节点类型 | [富文本节点类型](./dynamic_enum.md#富文本节点类型) |
| emoji     | obj | 表情信息    |                                      |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_interaction`对象 -> `items`数组中的对象 -> `desc`对象 -> `rich_text_nodes`数组中的对象 -> `emoji`对象

| 字段名      | 类型  | 内容      | 备注          |
|----------|-----|---------|-------------|
| icon_url | str | 表情图片URL |             |
| size     | num | 表情尺寸    | `1` `2`     |
| text     | str | 表情的文字代码 |             |
| type     | num | 表情类型    | `1` `2` `3` |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_fold`对象

| 字段名       | 类型    | 内容         | 备注         |
|-----------|-------|------------|------------|
| ids       | array | 被折叠的动态id列表 |            |
| statement | str   | 显示文案       | 例：展开x条相关动态 |
| type      | num   | `1`        |            |
| users     | array | `空数组`      |            |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_dispute`对象

| 字段名      | 类型  | 内容   | 备注               |
|----------|-----|------|------------------|
| desc     | str |      |                  |
| jump_url | str |      |                  |
| title    | str | 提醒文案 | 例：视频内含有危险行为，请勿模仿 |

### `data`对象 -> `items`数组中的对象 -> `modules`对象 -> `module_tag`对象

| 字段名      | 类型  | 内容   | 备注               |
|----------|-----|------|------------------|
| text     | str | '置顶'     |  置顶动态出现这个对象，否则没有                |

## 请求示例

```shell
curl -L -X GET 'https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/all?type=all' \
-H 'Cookie: SESSDATA=xxx'
```

## 响应示例

<details>
<summary>点击查看</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "has_more": true,
        "items": [
            {
                "basic": {
                    "comment_id_str": "474518278",
                    "comment_type": 1,
                    "like_icon": {
                        "action_url": "",
                        "end_url": "",
                        "id": 0,
                        "start_url": ""
                    },
                    "rid_str": "474518278"
                },
                "id_str": "722806776626413588",
                "modules": {
                    "module_author": {
                        "face": "https://i2.hdslb.com/bfs/face/28a0eede5cfd709d3dbed5d66f951a5d35854ec8.jpg",
                        "face_nft": false,
                        "following": null,
                        "jump_url": "//space.bilibili.com/2062760/dynamic",
                        "label": "",
                        "mid": 2062760,
                        "name": "一把近战都不给六花",
                        "official_verify": {
                            "desc": "",
                            "type": -1
                        },
                        "pendant": {
                            "expire": 0,
                            "image": "",
                            "image_enhance": "",
                            "image_enhance_frame": "",
                            "name": "",
                            "pid": 0
                        },
                        "pub_action": "投稿了视频",
                        "pub_location_text": "",
                        "pub_time": "刚刚",
                        "pub_ts": 1667129967,
                        "type": "AUTHOR_TYPE_NORMAL",
                        "vip": {
                            "avatar_subscript": 1,
                            "avatar_subscript_url": "",
                            "due_date": 1678723200000,
                            "label": {
                                "bg_color": "#FB7299",
                                "bg_style": 1,
                                "border_color": "",
                                "img_label_uri_hans": "",
                                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                                "img_label_uri_hant": "",
                                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                                "label_theme": "annual_vip",
                                "path": "",
                                "text": "年度大会员",
                                "text_color": "#FFFFFF",
                                "use_img_label": true
                            },
                            "nickname_color": "#FB7299",
                            "status": 1,
                            "theme_type": 0,
                            "type": 2
                        }
                    },
                    "module_dynamic": {
                        "additional": null,
                        "desc": null,
                        "major": {
                            "archive": {
                                "aid": "474518278",
                                "badge": {
                                    "bg_color": "#FB7299",
                                    "color": "#FFFFFF",
                                    "text": "投稿视频"
                                },
                                "bvid": "BV1vK411U7de",
                                "cover": "http://i1.hdslb.com/bfs/archive/ea560a574ff303952e2f4ed23f03c835e67f78b0.jpg",
                                "desc": "直播间地址：https://www.twitch.tv/lvndmark\n直播信息（北京时间）\n开播时间：2022-10-30 05:15:31\n下播时间：2022-10-30 15:09:43\n本次直播流程：\n(录像：1638109399)\n1.Call of Duty: Modern Warfare II    9小时54分12秒",
                                "disable_preview": 0,
                                "duration_text": "9:54:23",
                                "jump_url": "//www.bilibili.com/video/BV1vK411U7de",
                                "stat": {
                                    "danmaku": "0",
                                    "play": "1"
                                },
                                "title": "LVNDMARK 2022.10.30直播录像",
                                "type": 1
                            },
                            "type": "MAJOR_TYPE_ARCHIVE"
                        },
                        "topic": null
                    },
                    "module_fold": {
                        "ids": [
                            "722805011403243538",
                            "722803306312761400"
                        ],
                        "statement": "展开2条相关动态",
                        "type": 1,
                        "users": []
                    },
                    "module_more": {
                        "three_point_items": []
                    },
                    "module_stat": {
                        "comment": {
                            "count": 0,
                            "forbidden": false
                        },
                        "forward": {
                            "count": 0,
                            "forbidden": false
                        },
                        "like": {
                            "count": 0,
                            "forbidden": false,
                            "status": false
                        }
                    }
                },
                "type": "DYNAMIC_TYPE_AV",
                "visible": true
            },
            {
                "basic": {
                    "comment_id_str": "474572551",
                    "comment_type": 1,
                    "like_icon": {
                        "action_url": "",
                        "end_url": "",
                        "id": 0,
                        "start_url": ""
                    },
                    "rid_str": "474572551"
                },
                "id_str": "722805011403243538",
                "modules": {
                    "module_author": {
                        "face": "https://i2.hdslb.com/bfs/face/28a0eede5cfd709d3dbed5d66f951a5d35854ec8.jpg",
                        "face_nft": false,
                        "following": null,
                        "jump_url": "//space.bilibili.com/2062760/dynamic",
                        "label": "",
                        "mid": 2062760,
                        "name": "一把近战都不给六花",
                        "official_verify": {
                            "desc": "",
                            "type": -1
                        },
                        "pendant": {
                            "expire": 0,
                            "image": "",
                            "image_enhance": "",
                            "image_enhance_frame": "",
                            "name": "",
                            "pid": 0
                        },
                        "pub_action": "投稿了视频",
                        "pub_location_text": "",
                        "pub_time": "7分钟前",
                        "pub_ts": 1667129556,
                        "type": "AUTHOR_TYPE_NORMAL",
                        "vip": {
                            "avatar_subscript": 1,
                            "avatar_subscript_url": "",
                            "due_date": 1678723200000,
                            "label": {
                                "bg_color": "#FB7299",
                                "bg_style": 1,
                                "border_color": "",
                                "img_label_uri_hans": "",
                                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                                "img_label_uri_hant": "",
                                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                                "label_theme": "annual_vip",
                                "path": "",
                                "text": "年度大会员",
                                "text_color": "#FFFFFF",
                                "use_img_label": true
                            },
                            "nickname_color": "#FB7299",
                            "status": 1,
                            "theme_type": 0,
                            "type": 2
                        }
                    },
                    "module_dynamic": {
                        "additional": null,
                        "desc": null,
                        "major": {
                            "archive": {
                                "aid": "474572551",
                                "badge": {
                                    "bg_color": "#FB7299",
                                    "color": "#FFFFFF",
                                    "text": "投稿视频"
                                },
                                "bvid": "BV1rK411U7CF",
                                "cover": "http://i0.hdslb.com/bfs/archive/68bb3cd4a84666ec3cdcd165d84b90e28bdc1cb8.jpg",
                                "desc": "直播间地址：https://www.twitch.tv/kinggeorge\n直播信息（北京时间）\n开播时间：2022-10-30 11:19:29\n下播时间：2022-10-30 17:41:46\n本次直播流程：\n(录像：1638390037)\n1.彩虹六号    5小时3分18秒\n2.Call of Duty: Modern Warfare II    1小时17分26秒\n3.彩虹六号    1分33秒",
                                "disable_preview": 0,
                                "duration_text": "6:22:24",
                                "jump_url": "//www.bilibili.com/video/BV1rK411U7CF",
                                "stat": {
                                    "danmaku": "0",
                                    "play": "10"
                                },
                                "title": "KingGeorge 2022.10.30直播录像",
                                "type": 1
                            },
                            "type": "MAJOR_TYPE_ARCHIVE"
                        },
                        "topic": null
                    },
                    "module_more": {
                        "three_point_items": []
                    },
                    "module_stat": {
                        "comment": {
                            "count": 0,
                            "forbidden": false
                        },
                        "forward": {
                            "count": 0,
                            "forbidden": false
                        },
                        "like": {
                            "count": 0,
                            "forbidden": false,
                            "status": false
                        }
                    }
                },
                "type": "DYNAMIC_TYPE_AV",
                "visible": false
            },
            {
                "basic": {
                    "comment_id_str": "559593848",
                    "comment_type": 1,
                    "like_icon": {
                        "action_url": "",
                        "end_url": "",
                        "id": 0,
                        "start_url": ""
                    },
                    "rid_str": "559593848"
                },
                "id_str": "722803306312761400",
                "modules": {
                    "module_author": {
                        "face": "https://i2.hdslb.com/bfs/face/28a0eede5cfd709d3dbed5d66f951a5d35854ec8.jpg",
                        "face_nft": false,
                        "following": null,
                        "jump_url": "//space.bilibili.com/2062760/dynamic",
                        "label": "",
                        "mid": 2062760,
                        "name": "一把近战都不给六花",
                        "official_verify": {
                            "desc": "",
                            "type": -1
                        },
                        "pendant": {
                            "expire": 0,
                            "image": "",
                            "image_enhance": "",
                            "image_enhance_frame": "",
                            "name": "",
                            "pid": 0
                        },
                        "pub_action": "投稿了视频",
                        "pub_location_text": "",
                        "pub_time": "13分钟前",
                        "pub_ts": 1667129159,
                        "type": "AUTHOR_TYPE_NORMAL",
                        "vip": {
                            "avatar_subscript": 1,
                            "avatar_subscript_url": "",
                            "due_date": 1678723200000,
                            "label": {
                                "bg_color": "#FB7299",
                                "bg_style": 1,
                                "border_color": "",
                                "img_label_uri_hans": "",
                                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                                "img_label_uri_hant": "",
                                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                                "label_theme": "annual_vip",
                                "path": "",
                                "text": "年度大会员",
                                "text_color": "#FFFFFF",
                                "use_img_label": true
                            },
                            "nickname_color": "#FB7299",
                            "status": 1,
                            "theme_type": 0,
                            "type": 2
                        }
                    },
                    "module_dynamic": {
                        "additional": null,
                        "desc": null,
                        "major": {
                            "archive": {
                                "aid": "559593848",
                                "badge": {
                                    "bg_color": "#FB7299",
                                    "color": "#FFFFFF",
                                    "text": "投稿视频"
                                },
                                "bvid": "BV1de4y127n3",
                                "cover": "http://i2.hdslb.com/bfs/archive/f55f3970acdcd0c6d86459f3af40031d71484c32.jpg",
                                "desc": "直播间地址：https://www.twitch.tv/mohr\n直播信息（北京时间）\n开播时间：2022-10-30 08:51:26\n下播时间：2022-10-30 15:14:06\n本次直播流程：\n(录像：1638276178)\n1.Overwatch 2    6小时22分40秒",
                                "disable_preview": 0,
                                "duration_text": "6:22:47",
                                "jump_url": "//www.bilibili.com/video/BV1de4y127n3",
                                "stat": {
                                    "danmaku": "0",
                                    "play": "9"
                                },
                                "title": "Mohr 2022.10.30直播录像",
                                "type": 1
                            },
                            "type": "MAJOR_TYPE_ARCHIVE"
                        },
                        "topic": null
                    },
                    "module_more": {
                        "three_point_items": []
                    },
                    "module_stat": {
                        "comment": {
                            "count": 0,
                            "forbidden": false
                        },
                        "forward": {
                            "count": 0,
                            "forbidden": false
                        },
                        "like": {
                            "count": 2,
                            "forbidden": false,
                            "status": false
                        }
                    }
                },
                "type": "DYNAMIC_TYPE_AV",
                "visible": false
            },
            {
                "basic": {
                    "comment_id_str": "517005457",
                    "comment_type": 1,
                    "like_icon": {
                        "action_url": "",
                        "end_url": "",
                        "id": 0,
                        "start_url": ""
                    },
                    "rid_str": "517005457"
                },
                "id_str": "722806471697367073",
                "modules": {
                    "module_author": {
                        "face": "https://i2.hdslb.com/bfs/face/008605a75853dac76c15b2c15bd756f4de77fa77.jpg",
                        "face_nft": false,
                        "following": true,
                        "jump_url": "//space.bilibili.com/625662374/dynamic",
                        "label": "",
                        "mid": 625662374,
                        "name": "萌小希的喵和汪",
                        "official_verify": {
                            "desc": "",
                            "type": 0
                        },
                        "pendant": {
                            "expire": 0,
                            "image": "",
                            "image_enhance": "",
                            "image_enhance_frame": "",
                            "name": "",
                            "pid": 0
                        },
                        "pub_action": "投稿了视频",
                        "pub_location_text": "",
                        "pub_time": "1分钟前",
                        "pub_ts": 1667129896,
                        "type": "AUTHOR_TYPE_NORMAL",
                        "vip": {
                            "avatar_subscript": 1,
                            "avatar_subscript_url": "",
                            "due_date": 1710432000000,
                            "label": {
                                "bg_color": "#FB7299",
                                "bg_style": 1,
                                "border_color": "",
                                "img_label_uri_hans": "",
                                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                                "img_label_uri_hant": "",
                                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                                "label_theme": "annual_vip",
                                "path": "",
                                "text": "年度大会员",
                                "text_color": "#FFFFFF",
                                "use_img_label": true
                            },
                            "nickname_color": "#FB7299",
                            "status": 1,
                            "theme_type": 0,
                            "type": 2
                        }
                    },
                    "module_dynamic": {
                        "additional": null,
                        "desc": {
                            "rich_text_nodes": [
                                {
                                    "orig_text": "有这么一群小可爱陪着，居家也快乐",
                                    "text": "有这么一群小可爱陪着，居家也快乐",
                                    "type": "RICH_TEXT_NODE_TYPE_TEXT"
                                }
                            ],
                            "text": "有这么一群小可爱陪着，居家也快乐"
                        },
                        "major": {
                            "archive": {
                                "aid": "517005457",
                                "badge": {
                                    "bg_color": "#FB7299",
                                    "color": "#FFFFFF",
                                    "text": "投稿视频"
                                },
                                "bvid": "BV1Yg411z72M",
                                "cover": "http://i0.hdslb.com/bfs/archive/c4a09aaf15d225bb14a884f57c68ebb7fda9bbab.jpg",
                                "desc": "-",
                                "disable_preview": 0,
                                "duration_text": "01:40",
                                "jump_url": "//www.bilibili.com/video/BV1Yg411z72M",
                                "stat": {
                                    "danmaku": "2",
                                    "play": "242"
                                },
                                "title": "有这么一群小可爱陪着，居家也快乐",
                                "type": 1
                            },
                            "type": "MAJOR_TYPE_ARCHIVE"
                        },
                        "topic": null
                    },
                    "module_more": {
                        "three_point_items": [
                            {
                                "label": "取消关注",
                                "type": "THREE_POINT_FOLLOWING"
                            },
                            {
                                "label": "举报",
                                "type": "THREE_POINT_REPORT"
                            }
                        ]
                    },
                    "module_stat": {
                        "comment": {
                            "count": 4,
                            "forbidden": false
                        },
                        "forward": {
                            "count": 1,
                            "forbidden": false
                        },
                        "like": {
                            "count": 54,
                            "forbidden": false,
                            "status": false
                        }
                    }
                },
                "type": "DYNAMIC_TYPE_AV",
                "visible": true
            },
            {
                "basic": {
                    "comment_id_str": "722706029592182807",
                    "comment_type": 17,
                    "like_icon": {
                        "action_url": "",
                        "end_url": "",
                        "id": 0,
                        "start_url": ""
                    },
                    "rid_str": "288329916321046804"
                },
                "id_str": "722706029592182807",
                "modules": {
                    "module_author": {
                        "face": "https://i0.hdslb.com/bfs/face/980cbd15c6b649eedc3942391d1d92e82f1c79ea.jpg",
                        "face_nft": false,
                        "following": true,
                        "jump_url": "//space.bilibili.com/19087539/dynamic",
                        "label": "",
                        "mid": 19087539,
                        "name": "永劫鉴挂达人张大狗",
                        "official_verify": {
                            "desc": "",
                            "type": -1
                        },
                        "pendant": {
                            "expire": 0,
                            "image": "",
                            "image_enhance": "",
                            "image_enhance_frame": "",
                            "name": "",
                            "pid": 0
                        },
                        "pub_action": "直播了",
                        "pub_location_text": "",
                        "pub_time": "",
                        "pub_ts": 1667106510,
                        "type": "AUTHOR_TYPE_NORMAL",
                        "vip": {
                            "avatar_subscript": 1,
                            "avatar_subscript_url": "",
                            "due_date": 1699545600000,
                            "label": {
                                "bg_color": "#FB7299",
                                "bg_style": 1,
                                "border_color": "",
                                "img_label_uri_hans": "",
                                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                                "img_label_uri_hant": "",
                                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                                "label_theme": "annual_vip",
                                "path": "",
                                "text": "年度大会员",
                                "text_color": "#FFFFFF",
                                "use_img_label": true
                            },
                            "nickname_color": "#FB7299",
                            "status": 1,
                            "theme_type": 0,
                            "type": 2
                        }
                    },
                    "module_dynamic": {
                        "additional": null,
                        "desc": null,
                        "major": {
                            "live_rcmd": {
                                "content": "{\"live_play_info\":{\"play_type\":0,\"parent_area_id\":2,\"parent_area_name\":\"网游\",\"live_screen_type\":0,\"live_start_time\":1667105908,\"uid\":19087539,\"area_id\":666,\"area_name\":\"永劫无间\",\"watched_show\":{\"switch\":true,\"num\":898,\"text_small\":\"898\",\"text_large\":\"898人看过\",\"icon\":\"https://i0.hdslb.com/bfs/live/a725a9e61242ef44d764ac911691a7ce07f36c1d.png\",\"icon_location\":\"\",\"icon_web\":\"https://i0.hdslb.com/bfs/live/8d9d0f33ef8bf6f308742752d13dd0df731df19c.png\"},\"room_paid_type\":0,\"title\":\"进来学最快升级法 测试pve振刀榜第一\",\"live_status\":1,\"room_type\":0,\"cover\":\"http://i0.hdslb.com/bfs/live/new_room_cover/0e9bb02aa454a181f730f7d2657e7da5ef041193.jpg\",\"live_id\":\"288329916321046804\",\"pendants\":{\"list\":null},\"room_id\":7282964,\"link\":\"https://live.bilibili.com/7282964\",\"online\":7288},\"live_record_info\":null,\"type\":1}",
                                "reserve_type": 0
                            },
                            "type": "MAJOR_TYPE_LIVE_RCMD"
                        },
                        "topic": null
                    },
                    "module_more": {
                        "three_point_items": [
                            {
                                "label": "取消关注",
                                "type": "THREE_POINT_FOLLOWING"
                            },
                            {
                                "label": "举报",
                                "type": "THREE_POINT_REPORT"
                            }
                        ]
                    },
                    "module_stat": {
                        "comment": {
                            "count": 0,
                            "forbidden": false,
                            "hidden": true
                        },
                        "forward": {
                            "count": 0,
                            "forbidden": false
                        },
                        "like": {
                            "count": 4,
                            "forbidden": false,
                            "status": false
                        }
                    }
                },
                "type": "DYNAMIC_TYPE_LIVE_RCMD",
                "visible": true
            },
            {
                "basic": {
                    "comment_id_str": "219546675",
                    "comment_type": 1,
                    "like_icon": {
                        "action_url": "",
                        "end_url": "",
                        "id": 0,
                        "start_url": ""
                    },
                    "rid_str": "219546675"
                },
                "id_str": "722806291310837767",
                "modules": {
                    "module_author": {
                        "face": "https://i2.hdslb.com/bfs/face/6109447a6a1505cdde51e354e7df7e738584d104.jpg",
                        "face_nft": false,
                        "following": true,
                        "jump_url": "//space.bilibili.com/9583937/dynamic",
                        "label": "",
                        "mid": 9583937,
                        "name": "小米的狗",
                        "official_verify": {
                            "desc": "",
                            "type": -1
                        },
                        "pendant": {
                            "expire": 0,
                            "image": "",
                            "image_enhance": "",
                            "image_enhance_frame": "",
                            "name": "",
                            "pid": 0
                        },
                        "pub_action": "投稿了视频",
                        "pub_location_text": "",
                        "pub_time": "2分钟前",
                        "pub_ts": 1667129854,
                        "type": "AUTHOR_TYPE_NORMAL",
                        "vip": {
                            "avatar_subscript": 1,
                            "avatar_subscript_url": "",
                            "due_date": 1731859200000,
                            "label": {
                                "bg_color": "#FB7299",
                                "bg_style": 1,
                                "border_color": "",
                                "img_label_uri_hans": "",
                                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                                "img_label_uri_hant": "",
                                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                                "label_theme": "annual_vip",
                                "path": "",
                                "text": "年度大会员",
                                "text_color": "#FFFFFF",
                                "use_img_label": true
                            },
                            "nickname_color": "#FB7299",
                            "status": 1,
                            "theme_type": 0,
                            "type": 2
                        }
                    },
                    "module_dynamic": {
                        "additional": null,
                        "desc": null,
                        "major": {
                            "archive": {
                                "aid": "219546675",
                                "badge": {
                                    "bg_color": "#FB7299",
                                    "color": "#FFFFFF",
                                    "text": "投稿视频"
                                },
                                "bvid": "BV1K8411Y7Nh",
                                "cover": "http://i1.hdslb.com/bfs/archive/ae71e071758b19ef5d920f3fe60c65fef6cdd0f7.jpg",
                                "desc": "-",
                                "disable_preview": 0,
                                "duration_text": "00:45",
                                "jump_url": "//www.bilibili.com/video/BV1K8411Y7Nh",
                                "stat": {
                                    "danmaku": "0",
                                    "play": "164"
                                },
                                "title": "其实我们学校也没什么好羡慕的",
                                "type": 1
                            },
                            "type": "MAJOR_TYPE_ARCHIVE"
                        },
                        "topic": null
                    },
                    "module_more": {
                        "three_point_items": [
                            {
                                "label": "取消关注",
                                "type": "THREE_POINT_FOLLOWING"
                            },
                            {
                                "label": "举报",
                                "type": "THREE_POINT_REPORT"
                            }
                        ]
                    },
                    "module_stat": {
                        "comment": {
                            "count": 3,
                            "forbidden": false
                        },
                        "forward": {
                            "count": 0,
                            "forbidden": false
                        },
                        "like": {
                            "count": 51,
                            "forbidden": false,
                            "status": false
                        }
                    }
                },
                "type": "DYNAMIC_TYPE_AV",
                "visible": true
            },
            {
                "basic": {
                    "comment_id_str": "774623127",
                    "comment_type": 1,
                    "like_icon": {
                        "action_url": "",
                        "end_url": "",
                        "id": 0,
                        "start_url": ""
                    },
                    "rid_str": "774623127"
                },
                "id_str": "722805290583457809",
                "modules": {
                    "module_author": {
                        "face": "https://archive.biliimg.com/bfs/archive/2bc7c0b415e3af4158d71bad8a7fd343243d968a.jpg",
                        "face_nft": false,
                        "following": false,
                        "jump_url": "//www.bilibili.com/video/av774623127",
                        "label": "合集",
                        "mid": 774623127,
                        "name": "绅士君F1的小游戏推荐",
                        "pub_action": "绅士君F1更新了合集",
                        "pub_time": "6分钟前",
                        "pub_ts": 1667129621,
                        "type": "AUTHOR_TYPE_UGC_SEASON"
                    },
                    "module_dynamic": {
                        "additional": null,
                        "desc": null,
                        "major": {
                            "type": "MAJOR_TYPE_UGC_SEASON",
                            "ugc_season": {
                                "aid": 774623127,
                                "badge": {
                                    "bg_color": "#FB7299",
                                    "color": "#FFFFFF",
                                    "text": "合集"
                                },
                                "cover": "http://i1.hdslb.com/bfs/archive/5e4e1b6c460bd3671e7422cad5ec16642a6c1eb1.png",
                                "desc": "游戏名：魔女は復讐の夜に\n一款等了6年才等到完整版的游戏，它终于发售了！\n喜欢的话就关注我吧！你们的一键三连就是对我最大的支持！",
                                "disable_preview": 0,
                                "duration_text": "02:06",
                                "jump_url": "//www.bilibili.com/video/BV1W14y1L7m1",
                                "stat": {
                                    "danmaku": "0",
                                    "play": "36"
                                },
                                "title": "魔女复仇之夜完整版"
                            }
                        },
                        "topic": null
                    },
                    "module_more": {
                        "three_point_items": [
                            {
                                "label": "举报",
                                "type": "THREE_POINT_REPORT"
                            }
                        ]
                    },
                    "module_stat": {
                        "comment": {
                            "count": 10,
                            "forbidden": false
                        },
                        "forward": {
                            "count": 0,
                            "forbidden": false
                        },
                        "like": {
                            "count": 22,
                            "forbidden": false,
                            "status": false
                        }
                    }
                },
                "type": "DYNAMIC_TYPE_UGC_SEASON",
                "visible": true
            },
            {
                "basic": {
                    "comment_id_str": "689567837",
                    "comment_type": 1,
                    "like_icon": {
                        "action_url": "",
                        "end_url": "",
                        "id": 0,
                        "start_url": ""
                    },
                    "rid_str": "689567837"
                },
                "id_str": "722804775173750848",
                "modules": {
                    "module_author": {
                        "face": "https://i2.hdslb.com/bfs/face/81cfe1102ae0e32ea56733f47e949fe1ed10d3c7.jpg",
                        "face_nft": false,
                        "following": true,
                        "jump_url": "//space.bilibili.com/431631557/dynamic",
                        "label": "",
                        "mid": 431631557,
                        "name": "仙盟丶大罗金仙",
                        "official_verify": {
                            "desc": "",
                            "type": 0
                        },
                        "pendant": {
                            "expire": 0,
                            "image": "",
                            "image_enhance": "",
                            "image_enhance_frame": "",
                            "name": "",
                            "pid": 0
                        },
                        "pub_action": "投稿了视频",
                        "pub_location_text": "",
                        "pub_time": "8分钟前",
                        "pub_ts": 1667129501,
                        "type": "AUTHOR_TYPE_NORMAL",
                        "vip": {
                            "avatar_subscript": 1,
                            "avatar_subscript_url": "",
                            "due_date": 1667491200000,
                            "label": {
                                "bg_color": "#FB7299",
                                "bg_style": 1,
                                "border_color": "",
                                "img_label_uri_hans": "",
                                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                                "img_label_uri_hant": "",
                                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                                "label_theme": "annual_vip",
                                "path": "",
                                "text": "年度大会员",
                                "text_color": "#FFFFFF",
                                "use_img_label": true
                            },
                            "nickname_color": "#FB7299",
                            "status": 1,
                            "theme_type": 0,
                            "type": 2
                        }
                    },
                    "module_dynamic": {
                        "additional": null,
                        "desc": null,
                        "major": {
                            "archive": {
                                "aid": "689567837",
                                "badge": {
                                    "bg_color": "#FB7299",
                                    "color": "#FFFFFF",
                                    "text": "投稿视频"
                                },
                                "bvid": "BV19m4y1F7fG",
                                "cover": "http://i1.hdslb.com/bfs/archive/ef2da4e2bdf21d38d53350fdbe21577e0f882b6d.jpg",
                                "desc": "游戏名：永劫无间",
                                "disable_preview": 0,
                                "duration_text": "13:13",
                                "jump_url": "//www.bilibili.com/video/BV19m4y1F7fG",
                                "stat": {
                                    "danmaku": "10",
                                    "play": "1385"
                                },
                                "title": "【永劫·日常】当队伍里人手一个「七星夺窍」",
                                "type": 1
                            },
                            "type": "MAJOR_TYPE_ARCHIVE"
                        },
                        "topic": {
                            "id": 47783,
                            "jump_url": "https://m.bilibili.com/topic-detail?topic_id=47783&topic_name=%E4%BB%A4%E4%BA%BA%E7%BB%86%E6%80%9D%E6%9E%81%E6%81%90%E7%9A%84%E6%B8%B8%E6%88%8F",
                            "name": "令人细思极恐的游戏"
                        }
                    },
                    "module_more": {
                        "three_point_items": [
                            {
                                "label": "取消关注",
                                "type": "THREE_POINT_FOLLOWING"
                            },
                            {
                                "label": "举报",
                                "type": "THREE_POINT_REPORT"
                            }
                        ]
                    },
                    "module_stat": {
                        "comment": {
                            "count": 18,
                            "forbidden": false
                        },
                        "forward": {
                            "count": 0,
                            "forbidden": false
                        },
                        "like": {
                            "count": 112,
                            "forbidden": false,
                            "status": false
                        }
                    }
                },
                "type": "DYNAMIC_TYPE_AV",
                "visible": true
            },
            {
                "basic": {
                    "comment_id_str": "722804650633330705",
                    "comment_type": 17,
                    "like_icon": {
                        "action_url": "",
                        "end_url": "",
                        "id": 0,
                        "start_url": ""
                    },
                    "rid_str": "722804650682613780"
                },
                "id_str": "722804650633330705",
                "modules": {
                    "module_author": {
                        "decorate": {
                            "card_url": "http://i0.hdslb.com/bfs/garb/item/e9dff0468b7394c3072bade71aae4130602cb914.png",
                            "fan": {
                                "color": "#e495dc",
                                "is_fan": true,
                                "num_str": "002670",
                                "number": 2670
                            },
                            "id": 5335,
                            "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/5333?navhide=1&mid=653&from=dynamic&isdiy=0",
                            "name": "乙女音粉丝专属",
                            "type": 3
                        },
                        "face": "https://i2.hdslb.com/bfs/face/e8433484e1b6fc32e9754addbfd69fdf78dca514.jpg",
                        "face_nft": false,
                        "following": null,
                        "jump_url": "//space.bilibili.com/653/dynamic",
                        "label": "",
                        "mid": 653,
                        "name": "Pravis_channel",
                        "official_verify": {
                            "desc": "",
                            "type": -1
                        },
                        "pendant": {
                            "expire": 0,
                            "image": "https://i2.hdslb.com/bfs/face/50525f841aaebf32da475b2f7d407b5f4134436e.png",
                            "image_enhance": "https://i2.hdslb.com/bfs/face/50525f841aaebf32da475b2f7d407b5f4134436e.png",
                            "image_enhance_frame": "",
                            "name": "首批购买年度大会员",
                            "pid": 117
                        },
                        "pub_action": "",
                        "pub_location_text": "",
                        "pub_time": "8分钟前",
                        "pub_ts": 1667129472,
                        "type": "AUTHOR_TYPE_NORMAL",
                        "vip": {
                            "avatar_subscript": 1,
                            "avatar_subscript_url": "",
                            "due_date": 1714579200000,
                            "label": {
                                "bg_color": "#FB7299",
                                "bg_style": 1,
                                "border_color": "",
                                "img_label_uri_hans": "",
                                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                                "img_label_uri_hant": "",
                                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                                "label_theme": "annual_vip",
                                "path": "",
                                "text": "年度大会员",
                                "text_color": "#FFFFFF",
                                "use_img_label": true
                            },
                            "nickname_color": "#FB7299",
                            "status": 1,
                            "theme_type": 0,
                            "type": 2
                        }
                    },
                    "module_dynamic": {
                        "additional": null,
                        "desc": {
                            "rich_text_nodes": [
                                {
                                    "orig_text": "【石头人2：0秘密】\n职业舞台上最好的死灵龙打刚背的教学\n",
                                    "text": "【石头人2：0秘密】\n职业舞台上最好的死灵龙打刚背的教学\n",
                                    "type": "RICH_TEXT_NODE_TYPE_TEXT"
                                },
                                {
                                    "emoji": {
                                        "icon_url": "http://i0.hdslb.com/bfs/emote/431432c43da3ee5aab5b0e4f8931953e649e9975.png",
                                        "size": 1,
                                        "text": "[打call]",
                                        "type": 1
                                    },
                                    "orig_text": "[打call]",
                                    "text": "[打call]",
                                    "type": "RICH_TEXT_NODE_TYPE_EMOJI"
                                },
                                {
                                    "emoji": {
                                        "icon_url": "http://i0.hdslb.com/bfs/emote/431432c43da3ee5aab5b0e4f8931953e649e9975.png",
                                        "size": 1,
                                        "text": "[打call]",
                                        "type": 1
                                    },
                                    "orig_text": "[打call]",
                                    "text": "[打call]",
                                    "type": "RICH_TEXT_NODE_TYPE_EMOJI"
                                },
                                {
                                    "emoji": {
                                        "icon_url": "http://i0.hdslb.com/bfs/emote/431432c43da3ee5aab5b0e4f8931953e649e9975.png",
                                        "size": 1,
                                        "text": "[打call]",
                                        "type": 1
                                    },
                                    "orig_text": "[打call]",
                                    "text": "[打call]",
                                    "type": "RICH_TEXT_NODE_TYPE_EMOJI"
                                },
                                {
                                    "emoji": {
                                        "icon_url": "http://i0.hdslb.com/bfs/emote/431432c43da3ee5aab5b0e4f8931953e649e9975.png",
                                        "size": 1,
                                        "text": "[打call]",
                                        "type": 1
                                    },
                                    "orig_text": "[打call]",
                                    "text": "[打call]",
                                    "type": "RICH_TEXT_NODE_TYPE_EMOJI"
                                },
                                {
                                    "emoji": {
                                        "icon_url": "http://i0.hdslb.com/bfs/emote/431432c43da3ee5aab5b0e4f8931953e649e9975.png",
                                        "size": 1,
                                        "text": "[打call]",
                                        "type": 1
                                    },
                                    "orig_text": "[打call]",
                                    "text": "[打call]",
                                    "type": "RICH_TEXT_NODE_TYPE_EMOJI"
                                },
                                {
                                    "orig_text": "\n",
                                    "text": "\n",
                                    "type": "RICH_TEXT_NODE_TYPE_TEXT"
                                },
                                {
                                    "emoji": {
                                        "icon_url": "http://i0.hdslb.com/bfs/emote/2caafee2e5db4db72104650d87810cc2c123fc86.png",
                                        "size": 1,
                                        "text": "[大哭]",
                                        "type": 1
                                    },
                                    "orig_text": "[大哭]",
                                    "text": "[大哭]",
                                    "type": "RICH_TEXT_NODE_TYPE_EMOJI"
                                },
                                {
                                    "emoji": {
                                        "icon_url": "http://i0.hdslb.com/bfs/emote/2caafee2e5db4db72104650d87810cc2c123fc86.png",
                                        "size": 1,
                                        "text": "[大哭]",
                                        "type": 1
                                    },
                                    "orig_text": "[大哭]",
                                    "text": "[大哭]",
                                    "type": "RICH_TEXT_NODE_TYPE_EMOJI"
                                },
                                {
                                    "emoji": {
                                        "icon_url": "http://i0.hdslb.com/bfs/emote/2caafee2e5db4db72104650d87810cc2c123fc86.png",
                                        "size": 1,
                                        "text": "[大哭]",
                                        "type": 1
                                    },
                                    "orig_text": "[大哭]",
                                    "text": "[大哭]",
                                    "type": "RICH_TEXT_NODE_TYPE_EMOJI"
                                },
                                {
                                    "emoji": {
                                        "icon_url": "http://i0.hdslb.com/bfs/emote/2caafee2e5db4db72104650d87810cc2c123fc86.png",
                                        "size": 1,
                                        "text": "[大哭]",
                                        "type": 1
                                    },
                                    "orig_text": "[大哭]",
                                    "text": "[大哭]",
                                    "type": "RICH_TEXT_NODE_TYPE_EMOJI"
                                },
                                {
                                    "emoji": {
                                        "icon_url": "http://i0.hdslb.com/bfs/emote/2caafee2e5db4db72104650d87810cc2c123fc86.png",
                                        "size": 1,
                                        "text": "[大哭]",
                                        "type": 1
                                    },
                                    "orig_text": "[大哭]",
                                    "text": "[大哭]",
                                    "type": "RICH_TEXT_NODE_TYPE_EMOJI"
                                }
                            ],
                            "text": "【石头人2：0秘密】\n职业舞台上最好的死灵龙打刚背的教学\n[打call][打call][打call][打call][打call]\n[大哭][大哭][大哭][大哭][大哭]"
                        },
                        "major": null,
                        "topic": null
                    },
                    "module_more": {
                        "three_point_items": [
                            {
                                "label": "关注",
                                "type": "THREE_POINT_FOLLOWING"
                            },
                            {
                                "label": "举报",
                                "type": "THREE_POINT_REPORT"
                            }
                        ]
                    },
                    "module_stat": {
                        "comment": {
                            "count": 0,
                            "forbidden": false
                        },
                        "forward": {
                            "count": 0,
                            "forbidden": false
                        },
                        "like": {
                            "count": 3,
                            "forbidden": false,
                            "status": false
                        }
                    }
                },
                "type": "DYNAMIC_TYPE_WORD",
                "visible": true
            },
            {
                "basic": {
                    "comment_id_str": "304504318",
                    "comment_type": 1,
                    "like_icon": {
                        "action_url": "",
                        "end_url": "",
                        "id": 0,
                        "start_url": ""
                    },
                    "rid_str": "304504318"
                },
                "id_str": "722804470237364257",
                "modules": {
                    "module_author": {
                        "face": "https://i2.hdslb.com/bfs/face/03d0e2d9e066223daeb63d00a7cbc7375cde0bbc.jpg",
                        "face_nft": false,
                        "following": true,
                        "jump_url": "//space.bilibili.com/81554471/dynamic",
                        "label": "",
                        "mid": 81554471,
                        "name": "潇潇学姐lady",
                        "official_verify": {
                            "desc": "",
                            "type": 0
                        },
                        "pendant": {
                            "expire": 0,
                            "image": "",
                            "image_enhance": "",
                            "image_enhance_frame": "",
                            "name": "",
                            "pid": 0
                        },
                        "pub_action": "投稿了视频",
                        "pub_location_text": "",
                        "pub_time": "9分钟前",
                        "pub_ts": 1667129430,
                        "type": "AUTHOR_TYPE_NORMAL",
                        "vip": {
                            "avatar_subscript": 0,
                            "avatar_subscript_url": "",
                            "due_date": 1650643200000,
                            "label": {
                                "bg_color": "",
                                "bg_style": 0,
                                "border_color": "",
                                "img_label_uri_hans": "",
                                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                                "img_label_uri_hant": "",
                                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                                "label_theme": "",
                                "path": "",
                                "text": "",
                                "text_color": "",
                                "use_img_label": true
                            },
                            "nickname_color": "",
                            "status": 0,
                            "theme_type": 0,
                            "type": 1
                        }
                    },
                    "module_dynamic": {
                        "additional": null,
                        "desc": null,
                        "major": {
                            "archive": {
                                "aid": "304504318",
                                "badge": {
                                    "bg_color": "#FB7299",
                                    "color": "#FFFFFF",
                                    "text": "投稿视频"
                                },
                                "bvid": "BV1KP411P7dD",
                                "cover": "http://i1.hdslb.com/bfs/archive/febc5ccc7e8cb91b44b0e062da8551081f19c6a6.jpg",
                                "desc": "咱们学校这男生真精神！",
                                "disable_preview": 0,
                                "duration_text": "00:44",
                                "jump_url": "//www.bilibili.com/video/BV1KP411P7dD",
                                "stat": {
                                    "danmaku": "21",
                                    "play": "1.1万"
                                },
                                "title": "企业级理解",
                                "type": 1
                            },
                            "type": "MAJOR_TYPE_ARCHIVE"
                        },
                        "topic": null
                    },
                    "module_interaction": {
                        "items": [
                            {
                                "desc": {
                                    "rich_text_nodes": [
                                        {
                                            "orig_text": "Wounded_M：",
                                            "rid": "112008080",
                                            "text": "Wounded_M：",
                                            "type": "RICH_TEXT_NODE_TYPE_AT"
                                        },
                                        {
                                            "orig_text": "那个，，确定是洗发水而不是洁厕灵么",
                                            "text": "那个，，确定是洗发水而不是洁厕灵么",
                                            "type": "RICH_TEXT_NODE_TYPE_TEXT"
                                        },
                                        {
                                            "orig_text": "[doge]",
                                            "text": "[doge]",
                                            "type": "RICH_TEXT_NODE_TYPE_TEXT"
                                        }
                                    ],
                                    "text": "那个，，确定是洗发水而不是洁厕灵么[doge]"
                                },
                                "type": 1
                            }
                        ]
                    },
                    "module_more": {
                        "three_point_items": [
                            {
                                "label": "取消关注",
                                "type": "THREE_POINT_FOLLOWING"
                            },
                            {
                                "label": "举报",
                                "type": "THREE_POINT_REPORT"
                            }
                        ]
                    },
                    "module_stat": {
                        "comment": {
                            "count": 92,
                            "forbidden": false
                        },
                        "forward": {
                            "count": 1,
                            "forbidden": false
                        },
                        "like": {
                            "count": 1778,
                            "forbidden": false,
                            "status": false
                        }
                    }
                },
                "type": "DYNAMIC_TYPE_AV",
                "visible": true
            },
            {
                "basic": {
                    "comment_id_str": "210802703",
                    "comment_type": 11,
                    "like_icon": {
                        "action_url": "",
                        "end_url": "",
                        "id": 0,
                        "start_url": ""
                    },
                    "rid_str": "210802703"
                },
                "id_str": "722804358575554660",
                "modules": {
                    "module_author": {
                        "decorate": {
                            "card_url": "https://i0.hdslb.com/bfs/garb/item/c49b72f2b40e0e6bf9d3325e9ff8a7eb7cb22030.png",
                            "fan": {
                                "color": "",
                                "is_fan": false,
                                "num_str": "",
                                "number": 0
                            },
                            "id": 39198,
                            "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/39220?navhide=1&mid=161775300&from=dynamic&isdiy=0",
                            "name": "明日方舟-灯下定影",
                            "type": 1
                        },
                        "face": "https://i0.hdslb.com/bfs/face/89154378c06a5ed332c40c2ca56f50cd641c0c90.jpg",
                        "face_nft": false,
                        "following": true,
                        "jump_url": "//space.bilibili.com/161775300/dynamic",
                        "label": "",
                        "mid": 161775300,
                        "name": "明日方舟",
                        "official_verify": {
                            "desc": "",
                            "type": 1
                        },
                        "pendant": {
                            "expire": 0,
                            "image": "https://i0.hdslb.com/bfs/garb/item/0c8e7d627a35c378b757f39419889ef1fcc0ed9b.png",
                            "image_enhance": "https://i0.hdslb.com/bfs/garb/item/1815c81da71069ea3db4553cad7d233f782da2f2.webp",
                            "image_enhance_frame": "https://i0.hdslb.com/bfs/garb/item/ed2b4ef1da228c0b937753542b33af8f04d1d70c.png",
                            "name": "明日方舟",
                            "pid": 1990
                        },
                        "pub_action": "",
                        "pub_location_text": "",
                        "pub_time": "9分钟前",
                        "pub_ts": 1667129404,
                        "type": "AUTHOR_TYPE_NORMAL",
                        "vip": {
                            "avatar_subscript": 1,
                            "avatar_subscript_url": "",
                            "due_date": 1680537600000,
                            "label": {
                                "bg_color": "#FB7299",
                                "bg_style": 1,
                                "border_color": "",
                                "img_label_uri_hans": "",
                                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                                "img_label_uri_hant": "",
                                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                                "label_theme": "annual_vip",
                                "path": "",
                                "text": "年度大会员",
                                "text_color": "#FFFFFF",
                                "use_img_label": true
                            },
                            "nickname_color": "#FB7299",
                            "status": 1,
                            "theme_type": 0,
                            "type": 2
                        }
                    },
                    "module_dynamic": {
                        "additional": {
                            "common": {
                                "button": {
                                    "jump_style": {
                                        "icon_url": "",
                                        "text": "进入"
                                    },
                                    "jump_url": "https://www.biligame.com/detail?id=101772&sourceFrom=1005",
                                    "type": 1
                                },
                                "cover": "https://i0.hdslb.com/bfs/game/faa556b00d29fffc88281c1ee038b1b7f23aa5c2.jpg",
                                "desc1": "策略/二次元/美少女",
                                "desc2": "2022「感谢庆典」即将开启！",
                                "head_text": "相关游戏",
                                "id_str": "101772",
                                "jump_url": "https://www.biligame.com/detail?id=101772&sourceFrom=1005",
                                "style": 1,
                                "sub_type": "game",
                                "title": "明日方舟"
                            },
                            "type": "ADDITIONAL_TYPE_COMMON"
                        },
                        "desc": {
                            "rich_text_nodes": [
                                {
                                    "jump_url": "//search.bilibili.com/all?keyword=%23%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%23",
                                    "orig_text": "#明日方舟#",
                                    "text": "#明日方舟#",
                                    "type": "RICH_TEXT_NODE_TYPE_TOPIC"
                                },
                                {
                                    "jump_url": "//search.bilibili.com/all?keyword=%23%E9%9F%B3%E5%BE%8B%E8%81%94%E8%A7%89%23",
                                    "orig_text": "#音律联觉#",
                                    "text": "#音律联觉#",
                                    "type": "RICH_TEXT_NODE_TYPE_TOPIC"
                                },
                                {
                                    "orig_text": "\r\n特别提醒：距离电影首映还有60分钟。\r\n趁此闲暇，我们准备了参演人员名单，诸位也可一览为快。\r\n如果您此前并无观影打算，却又在此时有空闲时间，我们同样诚邀您前来参与这千载难逢的艺术盛宴。\r\n我们保证，您绝对不会失望。 ",
                                    "text": "\r\n特别提醒：距离电影首映还有60分钟。\r\n趁此闲暇，我们准备了参演人员名单，诸位也可一览为快。\r\n如果您此前并无观影打算，却又在此时有空闲时间，我们同样诚邀您前来参与这千载难逢的艺术盛宴。\r\n我们保证，您绝对不会失望。 ",
                                    "type": "RICH_TEXT_NODE_TYPE_TEXT"
                                }
                            ],
                            "text": "#明日方舟##音律联觉#\r\n特别提醒：距离电影首映还有60分钟。\r\n趁此闲暇，我们准备了参演人员名单，诸位也可一览为快。\r\n如果您此前并无观影打算，却又在此时有空闲时间，我们同样诚邀您前来参与这千载难逢的艺术盛宴。\r\n我们保证，您绝对不会失望。 "
                        },
                        "major": {
                            "draw": {
                                "id": 210802703,
                                "items": [
                                    {
                                        "height": 4961,
                                        "size": 9876.915,
                                        "src": "https://i0.hdslb.com/bfs/new_dyn/c9610327ab7d1298f8916d53b5fd324d161775300.jpg",
                                        "tags": [],
                                        "width": 3508
                                    },
                                    {
                                        "height": 4961,
                                        "size": 5995.214,
                                        "src": "https://i0.hdslb.com/bfs/new_dyn/302d129716ba5c5009a4df259da3409b161775300.jpg",
                                        "tags": [],
                                        "width": 3508
                                    },
                                    {
                                        "height": 4961,
                                        "size": 12802.127,
                                        "src": "https://i0.hdslb.com/bfs/new_dyn/7bb6868d638616ae1d957f52adf4c7ee161775300.jpg",
                                        "tags": [],
                                        "width": 3508
                                    },
                                    {
                                        "height": 4961,
                                        "size": 4542.088,
                                        "src": "https://i0.hdslb.com/bfs/new_dyn/2d1ecdf709619cc0bca633095fd26a36161775300.jpg",
                                        "tags": [],
                                        "width": 3508
                                    },
                                    {
                                        "height": 1345,
                                        "size": 283.4463,
                                        "src": "https://i0.hdslb.com/bfs/new_dyn/f72a0231bf2e8bbcf6a09c16de592579161775300.jpg",
                                        "tags": [],
                                        "width": 1000
                                    },
                                    {
                                        "height": 3235,
                                        "size": 814.31836,
                                        "src": "https://i0.hdslb.com/bfs/new_dyn/07a94b22517e78eac9d8bac38789f17c161775300.jpg",
                                        "tags": [],
                                        "width": 1000
                                    },
                                    {
                                        "height": 2908,
                                        "size": 670.54004,
                                        "src": "https://i0.hdslb.com/bfs/new_dyn/425d8c556b9e5bd5a49e0770662c7fdc161775300.jpg",
                                        "tags": [],
                                        "width": 1000
                                    },
                                    {
                                        "height": 2908,
                                        "size": 664.3535,
                                        "src": "https://i0.hdslb.com/bfs/new_dyn/ddb2f31f3d80cf87e39cdcb1b2cd9034161775300.jpg",
                                        "tags": [],
                                        "width": 1000
                                    },
                                    {
                                        "height": 3235,
                                        "size": 853.39746,
                                        "src": "https://i0.hdslb.com/bfs/new_dyn/f56c66eb94e401a7c9b895ba0905bb7c161775300.jpg",
                                        "tags": [],
                                        "width": 1000
                                    }
                                ]
                            },
                            "type": "MAJOR_TYPE_DRAW"
                        },
                        "topic": null
                    },
                    "module_interaction": {
                        "items": [
                            {
                                "desc": {
                                    "rich_text_nodes": [
                                        {
                                            "orig_text": "Coner4053：",
                                            "rid": "1375262127",
                                            "text": "Coner4053：",
                                            "type": "RICH_TEXT_NODE_TYPE_AT"
                                        },
                                        {
                                            "orig_text": "年导的电影天下第一！！！",
                                            "text": "年导的电影天下第一！！！",
                                            "type": "RICH_TEXT_NODE_TYPE_TEXT"
                                        },
                                        {
                                            "emoji": {
                                                "icon_url": "http://i0.hdslb.com/bfs/emote/431432c43da3ee5aab5b0e4f8931953e649e9975.png",
                                                "size": 1,
                                                "text": "[打call]",
                                                "type": 1
                                            },
                                            "orig_text": "[打call]",
                                            "text": "[打call]",
                                            "type": "RICH_TEXT_NODE_TYPE_EMOJI"
                                        },
                                        {
                                            "emoji": {
                                                "icon_url": "http://i0.hdslb.com/bfs/emote/431432c43da3ee5aab5b0e4f8931953e649e9975.png",
                                                "size": 1,
                                                "text": "[打call]",
                                                "type": 1
                                            },
                                            "orig_text": "[打call]",
                                            "text": "[打call]",
                                            "type": "RICH_TEXT_NODE_TYPE_EMOJI"
                                        },
                                        {
                                            "emoji": {
                                                "icon_url": "http://i0.hdslb.com/bfs/emote/431432c43da3ee5aab5b0e4f8931953e649e9975.png",
                                                "size": 1,
                                                "text": "[打call]",
                                                "type": 1
                                            },
                                            "orig_text": "[打call]",
                                            "text": "[打call]",
                                            "type": "RICH_TEXT_NODE_TYPE_EMOJI"
                                        },
                                        {
                                            "orig_text": " 5龙门币一条，括号记得删",
                                            "text": " 5龙门币一条，括号记得删",
                                            "type": "RICH_TEXT_NODE_TYPE_TEXT"
                                        }
                                    ],
                                    "text": "年导的电影天下第一！！！[打call][打call][打call] 5龙门币一条，括号记得删"
                                },
                                "type": 1
                            }
                        ]
                    },
                    "module_more": {
                        "three_point_items": [
                            {
                                "label": "取消关注",
                                "type": "THREE_POINT_FOLLOWING"
                            },
                            {
                                "label": "举报",
                                "type": "THREE_POINT_REPORT"
                            }
                        ]
                    },
                    "module_stat": {
                        "comment": {
                            "count": 565,
                            "forbidden": false
                        },
                        "forward": {
                            "count": 74,
                            "forbidden": false
                        },
                        "like": {
                            "count": 4800,
                            "forbidden": false,
                            "status": false
                        }
                    }
                },
                "type": "DYNAMIC_TYPE_DRAW",
                "visible": true
            },
            {
                "basic": {
                    "comment_id_str": "722803941956386838",
                    "comment_type": 17,
                    "like_icon": {
                        "action_url": "",
                        "end_url": "",
                        "id": 0,
                        "start_url": ""
                    },
                    "rid_str": "722803942006718519"
                },
                "id_str": "722803941956386838",
                "modules": {
                    "module_author": {
                        "face": "https://i2.hdslb.com/bfs/face/e4f1466daf6e3173e8cab68eb4551589a09d4967.jpg",
                        "face_nft": false,
                        "following": true,
                        "jump_url": "//space.bilibili.com/32172110/dynamic",
                        "label": "",
                        "mid": 32172110,
                        "name": "京阿尼语料",
                        "official_verify": {
                            "desc": "",
                            "type": 0
                        },
                        "pendant": {
                            "expire": 0,
                            "image": "",
                            "image_enhance": "",
                            "image_enhance_frame": "",
                            "name": "",
                            "pid": 0
                        },
                        "pub_action": "",
                        "pub_location_text": "",
                        "pub_time": "11分钟前",
                        "pub_ts": 1667129307,
                        "type": "AUTHOR_TYPE_NORMAL",
                        "vip": {
                            "avatar_subscript": 1,
                            "avatar_subscript_url": "",
                            "due_date": 1733500800000,
                            "label": {
                                "bg_color": "#FB7299",
                                "bg_style": 1,
                                "border_color": "",
                                "img_label_uri_hans": "",
                                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                                "img_label_uri_hant": "",
                                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                                "label_theme": "annual_vip",
                                "path": "",
                                "text": "年度大会员",
                                "text_color": "#FFFFFF",
                                "use_img_label": true
                            },
                            "nickname_color": "#FB7299",
                            "status": 1,
                            "theme_type": 0,
                            "type": 2
                        }
                    },
                    "module_dynamic": {
                        "additional": null,
                        "desc": {
                            "rich_text_nodes": [
                                {
                                    "emoji": {
                                        "icon_url": "http://i0.hdslb.com/bfs/emote/bf7e00ecab02171f8461ee8cf439c73db9797748.png",
                                        "size": 1,
                                        "text": "[脱单doge]",
                                        "type": 1
                                    },
                                    "orig_text": "[脱单doge]",
                                    "text": "[脱单doge]",
                                    "type": "RICH_TEXT_NODE_TYPE_EMOJI"
                                },
                                {
                                    "orig_text": "来看稿",
                                    "text": "来看稿",
                                    "type": "RICH_TEXT_NODE_TYPE_TEXT"
                                }
                            ],
                            "text": "[脱单doge]来看稿"
                        },
                        "major": null,
                        "topic": {
                            "id": 57386,
                            "jump_url": "https://m.bilibili.com/topic-detail?topic_id=57386&topic_name=%E2%80%9C%E4%BA%AC%E5%90%8E%E6%9C%89%E4%BD%A0%E2%80%9D%E5%88%9B%E4%BD%9C%E7%9B%9B%E5%85%B8",
                            "name": "“京后有你”创作盛典"
                        }
                    },
                    "module_more": {
                        "three_point_items": [
                            {
                                "label": "取消关注",
                                "type": "THREE_POINT_FOLLOWING"
                            },
                            {
                                "label": "举报",
                                "type": "THREE_POINT_REPORT"
                            }
                        ]
                    },
                    "module_stat": {
                        "comment": {
                            "count": 0,
                            "forbidden": false
                        },
                        "forward": {
                            "count": 0,
                            "forbidden": false
                        },
                        "like": {
                            "count": 40,
                            "forbidden": false,
                            "status": false
                        }
                    }
                },
                "orig": {
                    "basic": {
                        "comment_id_str": "",
                        "comment_type": 0,
                        "like_icon": {
                            "action_url": "",
                            "end_url": "",
                            "id": 0,
                            "start_url": ""
                        },
                        "rid_str": ""
                    },
                    "id_str": "397711411815032345",
                    "modules": {
                        "module_author": {
                            "face": "https://i2.hdslb.com/bfs/face/e4f1466daf6e3173e8cab68eb4551589a09d4967.jpg",
                            "face_nft": false,
                            "following": true,
                            "jump_url": "//space.bilibili.com/32172110/dynamic",
                            "label": "",
                            "mid": 32172110,
                            "name": "京阿尼语料",
                            "official_verify": {
                                "desc": "",
                                "type": 0
                            },
                            "pendant": {
                                "expire": 0,
                                "image": "",
                                "image_enhance": "",
                                "image_enhance_frame": "",
                                "name": "",
                                "pid": 0
                            },
                            "pub_action": "",
                            "pub_time": "",
                            "pub_ts": 1591437804,
                            "type": "AUTHOR_TYPE_NORMAL",
                            "vip": {
                                "avatar_subscript": 1,
                                "avatar_subscript_url": "",
                                "due_date": 1733500800000,
                                "label": {
                                    "bg_color": "#FB7299",
                                    "bg_style": 1,
                                    "border_color": "",
                                    "img_label_uri_hans": "",
                                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                                    "img_label_uri_hant": "",
                                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                                    "label_theme": "annual_vip",
                                    "path": "",
                                    "text": "年度大会员",
                                    "text_color": "#FFFFFF",
                                    "use_img_label": true
                                },
                                "nickname_color": "#FB7299",
                                "status": 1,
                                "theme_type": 0,
                                "type": 2
                            }
                        },
                        "module_dynamic": {
                            "additional": null,
                            "desc": null,
                            "major": {
                                "live": {
                                    "badge": {
                                        "bg_color": "#FB7299",
                                        "color": "#ffffff",
                                        "text": "直播中"
                                    },
                                    "cover": "http://i0.hdslb.com/bfs/live/new_room_cover/d8ef7daa61f5f0fd6735d9f743ea9b1b6f941799.jpg",
                                    "desc_first": "影音馆",
                                    "desc_second": "344人看过",
                                    "id": 22282848,
                                    "jump_url": "https://live.bilibili.com/22282848?broadcast_type=0&is_room_feed=1&live_from=30112",
                                    "live_state": 1,
                                    "reserve_type": 0,
                                    "title": "MAD赛道直播看稿【京后有你创作盛典】"
                                },
                                "type": "MAJOR_TYPE_LIVE"
                            },
                            "topic": null
                        }
                    },
                    "type": "DYNAMIC_TYPE_LIVE",
                    "visible": true
                },
                "type": "DYNAMIC_TYPE_FORWARD",
                "visible": true
            },
            {
                "basic": {
                    "comment_id_str": "304574578",
                    "comment_type": 1,
                    "like_icon": {
                        "action_url": "",
                        "end_url": "",
                        "id": 0,
                        "start_url": ""
                    },
                    "rid_str": "304574578"
                },
                "id_str": "722803259048198146",
                "modules": {
                    "module_author": {
                        "face": "https://archive.biliimg.com/bfs/archive/146462f875eb4e5f7d577c896f6150972a147275.jpg",
                        "face_nft": false,
                        "following": false,
                        "jump_url": "//www.bilibili.com/video/av304574578",
                        "label": "合集",
                        "mid": 304574578,
                        "name": "辐射系列",
                        "pub_action": "柯尔不短更新了合集",
                        "pub_time": "14分钟前",
                        "pub_ts": 1667129148,
                        "type": "AUTHOR_TYPE_UGC_SEASON"
                    },
                    "module_dynamic": {
                        "additional": null,
                        "desc": null,
                        "major": {
                            "type": "MAJOR_TYPE_UGC_SEASON",
                            "ugc_season": {
                                "aid": 304574578,
                                "badge": {
                                    "bg_color": "#FB7299",
                                    "color": "#FFFFFF",
                                    "text": "合集"
                                },
                                "cover": "http://i2.hdslb.com/bfs/archive/ccd56a834f2ce77655ddde96f587db0e9cc313af.jpg",
                                "desc": "本期新增内容为：\n全新设计的比分显示牌，增加代入感的虚拟灯箱。\n陷阱机关可独立控制，优化陷阱的初始位置。\n\n历史战绩：\n变异狼 0胜0负0平\n灶马蟋蟀 0胜0负0平\n\n背景音乐：\nDeadwood - Zoso\nThunderbird - Ryan Taubert\n小林啓樹 - Daredevil\nCombat Ready\nWar in the Wastes\nRise and Prevail",
                                "disable_preview": 0,
                                "duration_text": "05:38",
                                "jump_url": "//www.bilibili.com/video/BV18P411P7CD",
                                "stat": {
                                    "danmaku": "113",
                                    "play": "1267"
                                },
                                "title": "【辐射斗兽场】变异狼 VS 灶马蟋蟀"
                            }
                        },
                        "topic": null
                    },
                    "module_more": {
                        "three_point_items": [
                            {
                                "label": "举报",
                                "type": "THREE_POINT_REPORT"
                            }
                        ]
                    },
                    "module_stat": {
                        "comment": {
                            "count": 28,
                            "forbidden": false
                        },
                        "forward": {
                            "count": 0,
                            "forbidden": false
                        },
                        "like": {
                            "count": 270,
                            "forbidden": false,
                            "status": false
                        }
                    }
                },
                "type": "DYNAMIC_TYPE_UGC_SEASON",
                "visible": true
            },
            {
                "basic": {
                    "comment_id_str": "902123597",
                    "comment_type": 1,
                    "like_icon": {
                        "action_url": "",
                        "end_url": "",
                        "id": 0,
                        "start_url": ""
                    },
                    "rid_str": "902123597"
                },
                "id_str": "722803241881960456",
                "modules": {
                    "module_author": {
                        "face": "https://i1.hdslb.com/bfs/face/1a6152f261f4141e3be72c7b3056739c9f794774.jpg",
                        "face_nft": false,
                        "following": true,
                        "jump_url": "//space.bilibili.com/485118280/dynamic",
                        "label": "",
                        "mid": 485118280,
                        "name": "中华田园犬逆袭",
                        "official_verify": {
                            "desc": "",
                            "type": -1
                        },
                        "pendant": {
                            "expire": 0,
                            "image": "",
                            "image_enhance": "",
                            "image_enhance_frame": "",
                            "name": "",
                            "pid": 0
                        },
                        "pub_action": "投稿了视频",
                        "pub_location_text": "",
                        "pub_time": "14分钟前",
                        "pub_ts": 1667129144,
                        "type": "AUTHOR_TYPE_NORMAL",
                        "vip": {
                            "avatar_subscript": 0,
                            "avatar_subscript_url": "",
                            "due_date": 1605369600000,
                            "label": {
                                "bg_color": "",
                                "bg_style": 0,
                                "border_color": "",
                                "img_label_uri_hans": "",
                                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                                "img_label_uri_hant": "",
                                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                                "label_theme": "",
                                "path": "",
                                "text": "",
                                "text_color": "",
                                "use_img_label": true
                            },
                            "nickname_color": "",
                            "status": 0,
                            "theme_type": 0,
                            "type": 1
                        }
                    },
                    "module_dynamic": {
                        "additional": null,
                        "desc": null,
                        "major": {
                            "archive": {
                                "aid": "902123597",
                                "badge": {
                                    "bg_color": "#FB7299",
                                    "color": "#FFFFFF",
                                    "text": "投稿视频"
                                },
                                "bvid": "BV1hP4y1m7en",
                                "cover": "http://i0.hdslb.com/bfs/archive/d324a9c21a019ce6880b3944fa577a0993504616.jpg",
                                "desc": "-",
                                "disable_preview": 0,
                                "duration_text": "00:30",
                                "jump_url": "//www.bilibili.com/video/BV1hP4y1m7en",
                                "stat": {
                                    "danmaku": "0",
                                    "play": "1"
                                },
                                "title": "双金钱尾白色土松狮，公的，8斤左右",
                                "type": 1
                            },
                            "type": "MAJOR_TYPE_ARCHIVE"
                        },
                        "topic": null
                    },
                    "module_more": {
                        "three_point_items": [
                            {
                                "label": "取消关注",
                                "type": "THREE_POINT_FOLLOWING"
                            },
                            {
                                "label": "举报",
                                "type": "THREE_POINT_REPORT"
                            }
                        ]
                    },
                    "module_stat": {
                        "comment": {
                            "count": 0,
                            "forbidden": false
                        },
                        "forward": {
                            "count": 0,
                            "forbidden": false
                        },
                        "like": {
                            "count": 2,
                            "forbidden": false,
                            "status": false
                        }
                    }
                },
                "type": "DYNAMIC_TYPE_AV",
                "visible": true
            },
            {
                "basic": {
                    "comment_id_str": "859536670",
                    "comment_type": 1,
                    "like_icon": {
                        "action_url": "",
                        "end_url": "",
                        "id": 0,
                        "start_url": ""
                    },
                    "rid_str": "859536670"
                },
                "id_str": "722802855343292440",
                "modules": {
                    "module_author": {
                        "face": "https://i1.hdslb.com/bfs/face/1a6152f261f4141e3be72c7b3056739c9f794774.jpg",
                        "face_nft": false,
                        "following": true,
                        "jump_url": "//space.bilibili.com/485118280/dynamic",
                        "label": "",
                        "mid": 485118280,
                        "name": "中华田园犬逆袭",
                        "official_verify": {
                            "desc": "",
                            "type": -1
                        },
                        "pendant": {
                            "expire": 0,
                            "image": "",
                            "image_enhance": "",
                            "image_enhance_frame": "",
                            "name": "",
                            "pid": 0
                        },
                        "pub_action": "投稿了视频",
                        "pub_location_text": "",
                        "pub_time": "15分钟前",
                        "pub_ts": 1667129054,
                        "type": "AUTHOR_TYPE_NORMAL",
                        "vip": {
                            "avatar_subscript": 0,
                            "avatar_subscript_url": "",
                            "due_date": 1605369600000,
                            "label": {
                                "bg_color": "",
                                "bg_style": 0,
                                "border_color": "",
                                "img_label_uri_hans": "",
                                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                                "img_label_uri_hant": "",
                                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                                "label_theme": "",
                                "path": "",
                                "text": "",
                                "text_color": "",
                                "use_img_label": true
                            },
                            "nickname_color": "",
                            "status": 0,
                            "theme_type": 0,
                            "type": 1
                        }
                    },
                    "module_dynamic": {
                        "additional": null,
                        "desc": null,
                        "major": {
                            "archive": {
                                "aid": "859536670",
                                "badge": {
                                    "bg_color": "#FB7299",
                                    "color": "#FFFFFF",
                                    "text": "投稿视频"
                                },
                                "bvid": "BV1dV4y1G7pe",
                                "cover": "http://i2.hdslb.com/bfs/archive/686bbbc47ccd2dad320905fc6bfcc716dead26a5.jpg",
                                "desc": "-",
                                "disable_preview": 0,
                                "duration_text": "00:30",
                                "jump_url": "//www.bilibili.com/video/BV1dV4y1G7pe",
                                "stat": {
                                    "danmaku": "0",
                                    "play": "5"
                                },
                                "title": "土松狮小美女，50天6斤左右",
                                "type": 1
                            },
                            "type": "MAJOR_TYPE_ARCHIVE"
                        },
                        "topic": null
                    },
                    "module_more": {
                        "three_point_items": [
                            {
                                "label": "取消关注",
                                "type": "THREE_POINT_FOLLOWING"
                            },
                            {
                                "label": "举报",
                                "type": "THREE_POINT_REPORT"
                            }
                        ]
                    },
                    "module_stat": {
                        "comment": {
                            "count": 0,
                            "forbidden": false
                        },
                        "forward": {
                            "count": 0,
                            "forbidden": false
                        },
                        "like": {
                            "count": 4,
                            "forbidden": false,
                            "status": false
                        }
                    }
                },
                "type": "DYNAMIC_TYPE_AV",
                "visible": true
            },
            {
                "basic": {
                    "comment_id_str": "210801533",
                    "comment_type": 11,
                    "like_icon": {
                        "action_url": "",
                        "end_url": "",
                        "id": 0,
                        "start_url": ""
                    },
                    "rid_str": "210801533"
                },
                "id_str": "722802047870566501",
                "modules": {
                    "module_author": {
                        "decorate": {
                            "card_url": "http://i0.hdslb.com/bfs/garb/item/8b043b53c394265e6ce1dfb9a04ebd0b99ef4f79.png",
                            "fan": {
                                "color": "#ff669c",
                                "is_fan": true,
                                "num_str": "020617",
                                "number": 20617
                            },
                            "id": 3772,
                            "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/3796?navhide=1&mid=18940485&from=dynamic&isdiy=0",
                            "name": "神乐七奈粉丝专属",
                            "type": 3
                        },
                        "face": "https://i0.hdslb.com/bfs/face/0f6f0f4048e58dbd1a26e4ac6b087997ef2f7653.jpg",
                        "face_nft": false,
                        "following": true,
                        "jump_url": "//space.bilibili.com/18940485/dynamic",
                        "label": "",
                        "mid": 18940485,
                        "name": "RakusandoYuna",
                        "official_verify": {
                            "desc": "",
                            "type": -1
                        },
                        "pendant": {
                            "expire": 0,
                            "image": "https://i0.hdslb.com/bfs/garb/item/2262a0864cb0f3e39bb77e00298f8312318311c4.png",
                            "image_enhance": "https://i0.hdslb.com/bfs/garb/item/2262a0864cb0f3e39bb77e00298f8312318311c4.png",
                            "image_enhance_frame": "",
                            "name": "神乐七奈",
                            "pid": 3771
                        },
                        "pub_action": "",
                        "pub_location_text": "",
                        "pub_time": "18分钟前",
                        "pub_ts": 1667128866,
                        "type": "AUTHOR_TYPE_NORMAL",
                        "vip": {
                            "avatar_subscript": 1,
                            "avatar_subscript_url": "",
                            "due_date": 1718467200000,
                            "label": {
                                "bg_color": "#FB7299",
                                "bg_style": 1,
                                "border_color": "",
                                "img_label_uri_hans": "",
                                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                                "img_label_uri_hant": "",
                                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                                "label_theme": "annual_vip",
                                "path": "",
                                "text": "年度大会员",
                                "text_color": "#FFFFFF",
                                "use_img_label": true
                            },
                            "nickname_color": "#FB7299",
                            "status": 1,
                            "theme_type": 0,
                            "type": 2
                        }
                    },
                    "module_dynamic": {
                        "additional": null,
                        "desc": {
                            "rich_text_nodes": [
                                {
                                    "orig_text": "尝试一天肝完了沙漠，挺累的。。。唉:-(",
                                    "text": "尝试一天肝完了沙漠，挺累的。。。唉:-(",
                                    "type": "RICH_TEXT_NODE_TYPE_TEXT"
                                }
                            ],
                            "text": "尝试一天肝完了沙漠，挺累的。。。唉:-("
                        },
                        "major": {
                            "draw": {
                                "id": 210801533,
                                "items": [
                                    {
                                        "height": 949,
                                        "size": 84.36,
                                        "src": "https://i0.hdslb.com/bfs/new_dyn/b403ce65cd0618b7efedbb5c421da7c318940485.jpg",
                                        "tags": [],
                                        "width": 1213
                                    }
                                ]
                            },
                            "type": "MAJOR_TYPE_DRAW"
                        },
                        "topic": null
                    },
                    "module_more": {
                        "three_point_items": [
                            {
                                "label": "取消关注",
                                "type": "THREE_POINT_FOLLOWING"
                            },
                            {
                                "label": "举报",
                                "type": "THREE_POINT_REPORT"
                            }
                        ]
                    },
                    "module_stat": {
                        "comment": {
                            "count": 1,
                            "forbidden": false
                        },
                        "forward": {
                            "count": 0,
                            "forbidden": false
                        },
                        "like": {
                            "count": 6,
                            "forbidden": false,
                            "status": false
                        }
                    }
                },
                "type": "DYNAMIC_TYPE_DRAW",
                "visible": true
            },
            {
                "basic": {
                    "comment_id_str": "722801957680447506",
                    "comment_type": 17,
                    "like_icon": {
                        "action_url": "",
                        "end_url": "",
                        "id": 0,
                        "start_url": ""
                    },
                    "rid_str": "722801957734973460"
                },
                "id_str": "722801957680447506",
                "modules": {
                    "module_author": {
                        "face": "https://i0.hdslb.com/bfs/face/d7c4e2618aba8cc8d26d975274ca82de46c0e6c7.jpg",
                        "face_nft": false,
                        "following": true,
                        "jump_url": "//space.bilibili.com/700634784/dynamic",
                        "label": "",
                        "mid": 700634784,
                        "name": "飓风商店MediaStore",
                        "official_verify": {
                            "desc": "",
                            "type": -1
                        },
                        "pendant": {
                            "expire": 0,
                            "image": "",
                            "image_enhance": "",
                            "image_enhance_frame": "",
                            "name": "",
                            "pid": 0
                        },
                        "pub_action": "",
                        "pub_location_text": "",
                        "pub_time": "19分钟前",
                        "pub_ts": 1667128845,
                        "type": "AUTHOR_TYPE_NORMAL",
                        "vip": {
                            "avatar_subscript": 1,
                            "avatar_subscript_url": "",
                            "due_date": 1678896000000,
                            "label": {
                                "bg_color": "#FB7299",
                                "bg_style": 1,
                                "border_color": "",
                                "img_label_uri_hans": "",
                                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                                "img_label_uri_hant": "",
                                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                                "label_theme": "annual_vip",
                                "path": "",
                                "text": "年度大会员",
                                "text_color": "#FFFFFF",
                                "use_img_label": true
                            },
                            "nickname_color": "#FB7299",
                            "status": 1,
                            "theme_type": 0,
                            "type": 2
                        }
                    },
                    "module_dynamic": {
                        "additional": null,
                        "desc": {
                            "rich_text_nodes": [
                                {
                                    "orig_text": "大家太热情了",
                                    "text": "大家太热情了",
                                    "type": "RICH_TEXT_NODE_TYPE_TEXT"
                                },
                                {
                                    "emoji": {
                                        "icon_url": "http://i0.hdslb.com/bfs/emote/485a7e0c01c2d70707daae53bee4a9e2e31ef1ed.png",
                                        "size": 1,
                                        "text": "[喜极而泣]",
                                        "type": 1
                                    },
                                    "orig_text": "[喜极而泣]",
                                    "text": "[喜极而泣]",
                                    "type": "RICH_TEXT_NODE_TYPE_EMOJI"
                                },
                                {
                                    "orig_text": "直接把第一批的备货干空了，现在上了第二批预售，15号开始付尾款，感兴趣的小伙伴可以去店里购买噢～",
                                    "text": "直接把第一批的备货干空了，现在上了第二批预售，15号开始付尾款，感兴趣的小伙伴可以去店里购买噢～",
                                    "type": "RICH_TEXT_NODE_TYPE_TEXT"
                                }
                            ],
                            "text": "大家太热情了[喜极而泣]直接把第一批的备货干空了，现在上了第二批预售，15号开始付尾款，感兴趣的小伙伴可以去店里购买噢～"
                        },
                        "major": null,
                        "topic": null
                    },
                    "module_more": {
                        "three_point_items": [
                            {
                                "label": "取消关注",
                                "type": "THREE_POINT_FOLLOWING"
                            },
                            {
                                "label": "举报",
                                "type": "THREE_POINT_REPORT"
                            }
                        ]
                    },
                    "module_stat": {
                        "comment": {
                            "count": 7,
                            "forbidden": false
                        },
                        "forward": {
                            "count": 0,
                            "forbidden": false
                        },
                        "like": {
                            "count": 46,
                            "forbidden": false,
                            "status": false
                        }
                    }
                },
                "orig": {
                    "basic": {
                        "comment_id_str": "",
                        "comment_type": 0,
                        "like_icon": {
                            "action_url": "",
                            "end_url": "",
                            "id": 0,
                            "start_url": ""
                        },
                        "rid_str": ""
                    },
                    "id_str": "721652435448234212",
                    "modules": {
                        "module_author": {
                            "face": "https://i0.hdslb.com/bfs/face/d7c4e2618aba8cc8d26d975274ca82de46c0e6c7.jpg",
                            "face_nft": false,
                            "following": true,
                            "jump_url": "//space.bilibili.com/700634784/dynamic",
                            "label": "",
                            "mid": 700634784,
                            "name": "飓风商店MediaStore",
                            "official_verify": {
                                "desc": "",
                                "type": -1
                            },
                            "pendant": {
                                "expire": 0,
                                "image": "",
                                "image_enhance": "",
                                "image_enhance_frame": "",
                                "name": "",
                                "pid": 0
                            },
                            "pub_action": "投稿了视频",
                            "pub_time": "",
                            "pub_ts": 1666861201,
                            "type": "AUTHOR_TYPE_NORMAL",
                            "vip": {
                                "avatar_subscript": 1,
                                "avatar_subscript_url": "",
                                "due_date": 1678896000000,
                                "label": {
                                    "bg_color": "#FB7299",
                                    "bg_style": 1,
                                    "border_color": "",
                                    "img_label_uri_hans": "",
                                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                                    "img_label_uri_hant": "",
                                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                                    "label_theme": "annual_vip",
                                    "path": "",
                                    "text": "年度大会员",
                                    "text_color": "#FFFFFF",
                                    "use_img_label": true
                                },
                                "nickname_color": "#FB7299",
                                "status": 1,
                                "theme_type": 0,
                                "type": 2
                            }
                        },
                        "module_dynamic": {
                            "additional": null,
                            "desc": {
                                "rich_text_nodes": [
                                    {
                                        "orig_text": "它终于来了！",
                                        "text": "它终于来了！",
                                        "type": "RICH_TEXT_NODE_TYPE_TEXT"
                                    }
                                ],
                                "text": "它终于来了！"
                            },
                            "major": {
                                "archive": {
                                    "aid": "689382529",
                                    "badge": {
                                        "bg_color": "#FB7299",
                                        "color": "#FFFFFF",
                                        "text": "投稿视频"
                                    },
                                    "bvid": "BV1Sm4y1w7Pv",
                                    "cover": "http://i0.hdslb.com/bfs/archive/aeda1caf342fe4d9200831f05bc6289d04d9c93d.jpg",
                                    "desc": "iPad保护壳还有什么可能？又又又花一年磨一个产品，让你的iPad mini不只是泡面盖～\n预售已开启，感兴趣的同学可以手淘搜索【影视飓风】查看更多信息！",
                                    "disable_preview": 0,
                                    "duration_text": "01:05",
                                    "jump_url": "//www.bilibili.com/video/BV1Sm4y1w7Pv",
                                    "stat": {
                                        "danmaku": "83",
                                        "play": "13.2万"
                                    },
                                    "title": "可能是iPad mini最佳拍档？平移拓展保护壳发布！",
                                    "type": 1
                                },
                                "type": "MAJOR_TYPE_ARCHIVE"
                            },
                            "topic": null
                        }
                    },
                    "type": "DYNAMIC_TYPE_AV",
                    "visible": true
                },
                "type": "DYNAMIC_TYPE_FORWARD",
                "visible": true
            },
            {
                "basic": {
                    "comment_id_str": "517103418",
                    "comment_type": 1,
                    "like_icon": {
                        "action_url": "",
                        "end_url": "",
                        "id": 0,
                        "start_url": ""
                    },
                    "rid_str": "517103418"
                },
                "id_str": "722800763675344953",
                "modules": {
                    "module_author": {
                        "face": "https://i0.hdslb.com/bfs/face/f4d39ce4c3a5a306de2e5bb51fcae9a6c4f95215.jpg",
                        "face_nft": false,
                        "following": true,
                        "jump_url": "//space.bilibili.com/29440965/dynamic",
                        "label": "",
                        "mid": 29440965,
                        "name": "超级小桀的日常",
                        "official_verify": {
                            "desc": "",
                            "type": 0
                        },
                        "pendant": {
                            "expire": 0,
                            "image": "",
                            "image_enhance": "",
                            "image_enhance_frame": "",
                            "name": "",
                            "pid": 0
                        },
                        "pub_action": "投稿了视频",
                        "pub_location_text": "",
                        "pub_time": "23分钟前",
                        "pub_ts": 1667128567,
                        "type": "AUTHOR_TYPE_NORMAL",
                        "vip": {
                            "avatar_subscript": 1,
                            "avatar_subscript_url": "",
                            "due_date": 1718208000000,
                            "label": {
                                "bg_color": "#FB7299",
                                "bg_style": 1,
                                "border_color": "",
                                "img_label_uri_hans": "",
                                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                                "img_label_uri_hant": "",
                                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                                "label_theme": "annual_vip",
                                "path": "",
                                "text": "年度大会员",
                                "text_color": "#FFFFFF",
                                "use_img_label": true
                            },
                            "nickname_color": "#FB7299",
                            "status": 1,
                            "theme_type": 0,
                            "type": 2
                        }
                    },
                    "module_dynamic": {
                        "additional": null,
                        "desc": {
                            "rich_text_nodes": [
                                {
                                    "jump_url": "//search.bilibili.com/all?keyword=%2374751%23",
                                    "orig_text": "#74751#",
                                    "text": "#74751#",
                                    "type": "RICH_TEXT_NODE_TYPE_TOPIC"
                                },
                                {
                                    "jump_url": "//search.bilibili.com/all?keyword=%23%E8%B6%85%E7%BA%A7%E5%B0%8F%E6%A1%80%23",
                                    "orig_text": "#超级小桀#",
                                    "text": "#超级小桀#",
                                    "type": "RICH_TEXT_NODE_TYPE_TOPIC"
                                },
                                {
                                    "jump_url": "//search.bilibili.com/all?keyword=%23%E5%8D%95%E6%9C%BA%E6%B8%B8%E6%88%8F%23",
                                    "orig_text": "#单机游戏#",
                                    "text": "#单机游戏#",
                                    "type": "RICH_TEXT_NODE_TYPE_TOPIC"
                                },
                                {
                                    "jump_url": "//search.bilibili.com/all?keyword=%23%E8%B6%85%E7%BA%A7%E9%A9%AC%E9%87%8C%E5%A5%A5%E5%88%B6%E9%80%A02%23",
                                    "orig_text": "#超级马里奥制造2#",
                                    "text": "#超级马里奥制造2#",
                                    "type": "RICH_TEXT_NODE_TYPE_TOPIC"
                                }
                            ],
                            "text": "#74751##超级小桀##单机游戏##超级马里奥制造2#"
                        },
                        "major": {
                            "archive": {
                                "aid": "517103418",
                                "badge": {
                                    "bg_color": "#FB7299",
                                    "color": "#FFFFFF",
                                    "text": "投稿视频"
                                },
                                "bvid": "BV1wg41167M7",
                                "cover": "http://i2.hdslb.com/bfs/archive/1345ac18a6d41b26f5713669ac67ec1ad999acd4.png",
                                "desc": "相关游戏: 马里奥制造2\n简介补充: 超级小桀2022年10月30日直播录像",
                                "disable_preview": 0,
                                "duration_text": "4:31:43",
                                "jump_url": "//www.bilibili.com/video/BV1wg41167M7",
                                "stat": {
                                    "danmaku": "6",
                                    "play": "2384"
                                },
                                "title": "【超级小桀】2022年10月30日直播录像",
                                "type": 1
                            },
                            "type": "MAJOR_TYPE_ARCHIVE"
                        },
                        "topic": null
                    },
                    "module_more": {
                        "three_point_items": [
                            {
                                "label": "取消关注",
                                "type": "THREE_POINT_FOLLOWING"
                            },
                            {
                                "label": "举报",
                                "type": "THREE_POINT_REPORT"
                            }
                        ]
                    },
                    "module_stat": {
                        "comment": {
                            "count": 10,
                            "forbidden": false
                        },
                        "forward": {
                            "count": 1,
                            "forbidden": false
                        },
                        "like": {
                            "count": 440,
                            "forbidden": false,
                            "status": false
                        }
                    }
                },
                "type": "DYNAMIC_TYPE_AV",
                "visible": true
            },
            {
                "basic": {
                    "comment_id_str": "559611166",
                    "comment_type": 1,
                    "like_icon": {
                        "action_url": "",
                        "end_url": "",
                        "id": 0,
                        "start_url": ""
                    },
                    "rid_str": "559611166"
                },
                "id_str": "722800493104988181",
                "modules": {
                    "module_author": {
                        "face": "https://i2.hdslb.com/bfs/face/86fbb87fdf4d5ec1ba3bb7b56131d8265d36ffcd.jpg",
                        "face_nft": false,
                        "following": true,
                        "jump_url": "//space.bilibili.com/8263502/dynamic",
                        "label": "",
                        "mid": 8263502,
                        "name": "橙飞一下",
                        "official_verify": {
                            "desc": "",
                            "type": 0
                        },
                        "pendant": {
                            "expire": 0,
                            "image": "",
                            "image_enhance": "",
                            "image_enhance_frame": "",
                            "name": "",
                            "pid": 0
                        },
                        "pub_action": "投稿了视频",
                        "pub_location_text": "",
                        "pub_time": "24分钟前",
                        "pub_ts": 1667128504,
                        "type": "AUTHOR_TYPE_NORMAL",
                        "vip": {
                            "avatar_subscript": 1,
                            "avatar_subscript_url": "",
                            "due_date": 1696003200000,
                            "label": {
                                "bg_color": "#FB7299",
                                "bg_style": 1,
                                "border_color": "",
                                "img_label_uri_hans": "",
                                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                                "img_label_uri_hant": "",
                                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                                "label_theme": "annual_vip",
                                "path": "",
                                "text": "年度大会员",
                                "text_color": "#FFFFFF",
                                "use_img_label": true
                            },
                            "nickname_color": "#FB7299",
                            "status": 1,
                            "theme_type": 0,
                            "type": 2
                        }
                    },
                    "module_dynamic": {
                        "additional": null,
                        "desc": {
                            "rich_text_nodes": [
                                {
                                    "orig_text": "小火锅自助【官客旋转小火锅，天津，南开区，西南角，火锅，自助餐】",
                                    "text": "小火锅自助【官客旋转小火锅，天津，南开区，西南角，火锅，自助餐】",
                                    "type": "RICH_TEXT_NODE_TYPE_TEXT"
                                }
                            ],
                            "text": "小火锅自助【官客旋转小火锅，天津，南开区，西南角，火锅，自助餐】"
                        },
                        "major": {
                            "archive": {
                                "aid": "559611166",
                                "badge": {
                                    "bg_color": "#FB7299",
                                    "color": "#FFFFFF",
                                    "text": "投稿视频"
                                },
                                "bvid": "BV1De4y127gB",
                                "cover": "http://i1.hdslb.com/bfs/archive/d4369b1167ce3cf8020d96b747e5b3abf378f08e.jpg",
                                "desc": "店名：官客·自助旋转小火锅；\n地址：天津南开区南开五马路与广开中街交口\n（近西南角地铁站）；\n价格：29元；\n\n标准的旋转小火锅自助，没有肉类，菜品干净，麻酱味道可以。菜品穿了签子，不是用夹子的。\n下午也营业，适合近的人来尝尝。",
                                "disable_preview": 0,
                                "duration_text": "08:20",
                                "jump_url": "//www.bilibili.com/video/BV1De4y127gB",
                                "stat": {
                                    "danmaku": "84",
                                    "play": "1.3万"
                                },
                                "title": "简简单单吃个小火锅，银耳好好吃！天津西南角旋转小火锅29元一位",
                                "type": 1
                            },
                            "type": "MAJOR_TYPE_ARCHIVE"
                        },
                        "topic": null
                    },
                    "module_interaction": {
                        "items": [
                            {
                                "desc": {
                                    "rich_text_nodes": [
                                        {
                                            "orig_text": "daitouemabi：",
                                            "rid": "346339495",
                                            "text": "daitouemabi：",
                                            "type": "RICH_TEXT_NODE_TYPE_AT"
                                        },
                                        {
                                            "orig_text": "对于我这种一顿张亮四十多的人来说任何自助小火锅都是划算的",
                                            "text": "对于我这种一顿张亮四十多的人来说任何自助小火锅都是划算的",
                                            "type": "RICH_TEXT_NODE_TYPE_TEXT"
                                        }
                                    ],
                                    "text": "对于我这种一顿张亮四十多的人来说任何自助小火锅都是划算的"
                                },
                                "type": 1
                            }
                        ]
                    },
                    "module_more": {
                        "three_point_items": [
                            {
                                "label": "取消关注",
                                "type": "THREE_POINT_FOLLOWING"
                            },
                            {
                                "label": "举报",
                                "type": "THREE_POINT_REPORT"
                            }
                        ]
                    },
                    "module_stat": {
                        "comment": {
                            "count": 125,
                            "forbidden": false
                        },
                        "forward": {
                            "count": 10,
                            "forbidden": false
                        },
                        "like": {
                            "count": 1274,
                            "forbidden": false,
                            "status": false
                        }
                    }
                },
                "type": "DYNAMIC_TYPE_AV",
                "visible": true
            },
            {
                "basic": {
                    "comment_id_str": "304540547",
                    "comment_type": 1,
                    "like_icon": {
                        "action_url": "",
                        "end_url": "",
                        "id": 0,
                        "start_url": ""
                    },
                    "rid_str": "304540547"
                },
                "id_str": "722800475917779008",
                "modules": {
                    "module_author": {
                        "decorate": {
                            "card_url": "http://i0.hdslb.com/bfs/vip/f11e84bd3da5902ea912145cd7cb3d54c04c3c27.png",
                            "fan": {
                                "color": "",
                                "is_fan": false,
                                "num_str": "",
                                "number": 0
                            },
                            "id": 6,
                            "jump_url": "https://www.bilibili.com/h5/mall/preview/feed/6?navhide=1&isdiy=0",
                            "name": "喂看见耳朵啦",
                            "type": 2
                        },
                        "face": "https://i2.hdslb.com/bfs/face/d20e0d85266199514a582a692e5c6b37633a7eeb.jpg",
                        "face_nft": false,
                        "following": true,
                        "jump_url": "//space.bilibili.com/8931689/dynamic",
                        "label": "",
                        "mid": 8931689,
                        "name": "桔子味的天",
                        "official_verify": {
                            "desc": "",
                            "type": 0
                        },
                        "pendant": {
                            "expire": 0,
                            "image": "",
                            "image_enhance": "",
                            "image_enhance_frame": "",
                            "name": "",
                            "pid": 0
                        },
                        "pub_action": "与他人联合创作",
                        "pub_location_text": "",
                        "pub_time": "24分钟前",
                        "pub_ts": 1667128500,
                        "type": "AUTHOR_TYPE_NORMAL",
                        "vip": {
                            "avatar_subscript": 1,
                            "avatar_subscript_url": "",
                            "due_date": 1674576000000,
                            "label": {
                                "bg_color": "#FB7299",
                                "bg_style": 1,
                                "border_color": "",
                                "img_label_uri_hans": "",
                                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                                "img_label_uri_hant": "",
                                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                                "label_theme": "annual_vip",
                                "path": "",
                                "text": "年度大会员",
                                "text_color": "#FFFFFF",
                                "use_img_label": true
                            },
                            "nickname_color": "#FB7299",
                            "status": 1,
                            "theme_type": 0,
                            "type": 2
                        }
                    },
                    "module_dynamic": {
                        "additional": null,
                        "desc": null,
                        "major": {
                            "archive": {
                                "aid": "304540547",
                                "badge": {
                                    "bg_color": "#FB7299",
                                    "color": "#FFFFFF",
                                    "text": "合作视频"
                                },
                                "bvid": "BV1EP411P7Hm",
                                "cover": "http://i2.hdslb.com/bfs/archive/d6589e112d3d0c26282dfd83be38df1e59a1f67c.jpg",
                                "desc": "啊是宁波女仆",
                                "disable_preview": 0,
                                "duration_text": "00:24",
                                "jump_url": "//www.bilibili.com/video/BV1EP411P7Hm",
                                "stat": {
                                    "danmaku": "0",
                                    "play": "338"
                                },
                                "title": "凯申口音の女仆装",
                                "type": 1
                            },
                            "type": "MAJOR_TYPE_ARCHIVE"
                        },
                        "topic": null
                    },
                    "module_more": {
                        "three_point_items": [
                            {
                                "label": "取消关注",
                                "type": "THREE_POINT_FOLLOWING"
                            },
                            {
                                "label": "举报",
                                "type": "THREE_POINT_REPORT"
                            }
                        ]
                    },
                    "module_stat": {
                        "comment": {
                            "count": 4,
                            "forbidden": false
                        },
                        "forward": {
                            "count": 0,
                            "forbidden": false
                        },
                        "like": {
                            "count": 101,
                            "forbidden": false,
                            "status": false
                        }
                    }
                },
                "type": "DYNAMIC_TYPE_AV",
                "visible": true
            },
            {
                "basic": {
                    "comment_id_str": "219580392",
                    "comment_type": 1,
                    "like_icon": {
                        "action_url": "",
                        "end_url": "",
                        "id": 0,
                        "start_url": ""
                    },
                    "rid_str": "219580392"
                },
                "id_str": "722799788730351736",
                "modules": {
                    "module_author": {
                        "face": "https://archive.biliimg.com/bfs/archive/1d720064ed34ba4c19326a77b17a9404351c3a8d.jpg",
                        "face_nft": false,
                        "following": false,
                        "jump_url": "//www.bilibili.com/video/av219580392",
                        "label": "合集",
                        "mid": 219580392,
                        "name": "纪录片《流言终结者》",
                        "pub_action": "探索哥t更新了合集",
                        "pub_time": "27分钟前",
                        "pub_ts": 1667128340,
                        "type": "AUTHOR_TYPE_UGC_SEASON"
                    },
                    "module_dynamic": {
                        "additional": null,
                        "desc": null,
                        "major": {
                            "type": "MAJOR_TYPE_UGC_SEASON",
                            "ugc_season": {
                                "aid": 219580392,
                                "badge": {
                                    "bg_color": "#FB7299",
                                    "color": "#FFFFFF",
                                    "text": "合集"
                                },
                                "cover": "http://i0.hdslb.com/bfs/archive/b94c2e41853f2f2e3a57023a39b8837c8810456b.jpg",
                                "desc": "安全气囊爆炸可能使人爆头?",
                                "disable_preview": 0,
                                "duration_text": "02:32",
                                "jump_url": "//www.bilibili.com/video/BV1j8411Y7Fi",
                                "stat": {
                                    "danmaku": "0",
                                    "play": "85"
                                },
                                "title": "流言终结者:安全气囊爆炸可能使人爆头?"
                            }
                        },
                        "topic": null
                    },
                    "module_more": {
                        "three_point_items": [
                            {
                                "label": "举报",
                                "type": "THREE_POINT_REPORT"
                            }
                        ]
                    },
                    "module_stat": {
                        "comment": {
                            "count": 0,
                            "forbidden": false
                        },
                        "forward": {
                            "count": 0,
                            "forbidden": false
                        },
                        "like": {
                            "count": 12,
                            "forbidden": false,
                            "status": false
                        }
                    }
                },
                "type": "DYNAMIC_TYPE_UGC_SEASON",
                "visible": true
            }
        ],
        "offset": "722799788730351736",
        "update_baseline": "722806776626413588",
        "update_num": 1
    }
}
```

</details>