# 获取动态列表

## 获取全部动态列表

> https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/all

*请求方式: GET*

认证方式: Cookie (SESSDATA)

**URL参数:**

| 参数名 | 类型 | 必要性 | 内容 | 备注 |
| --- | --- | --- | --- | --- |
| timezone_offset | str | 非必要 | `-480` | 新版无 |
| type | str | 非必要 | 分类 | 新版无, `all`：全部(默认)<br/>`video`：视频投稿<br/>`pgc`：追番追剧<br/>`article`：专栏 |
| host_mid | num | 非必要 | UP主UID | 仅新版, 如 `293793435` |
| offset | num | 非必要 | 分页偏移量 | 默认为空, 翻页时使用 |
| update_baseline | str | 非必要 | 更新基线 | 获取新动态时使用 |
| page | num | 非必要 | 页数 | 无效参数 |
| platform | str | 非必要 | 平台 | 仅新版, 如 `web` |
| features | str | 非必要 | 功能开关? | 旧版 `itemOpusStyle,listOnlyfans`<br />新版 `itemOpusStyle,listOnlyfans,opusBigCover,onlyfansVote,decorationCard,onlyfansAssetsV2,forwardListHidden,ugcDelete` |
| web_location | str | 非必要 | 333.1365 | 仅新版存在 |

**JSON回复:**

根:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 响应码 | 0：成功<br/>-101：账号未登录 |
| message | str | | |
| ttl | num | 1 | |
| data | obj | 信息本体 | |

`data`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| has_more | bool | 是否有更多数据 | |
| items | array | 数据数组 | |
| offset | str | 偏移量 | 等于`items`中最后一条记录的id<br/>获取下一页时使用 |
| update_baseline | str | 更新基线 | 等于`items`中第一条记录的id |
| update_num | num | 本次获取获取到了多少条新动态 | 在更新基线以上的动态条数 |

`data.items[n]`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| basic | obj | | |
| id_str | str | 动态id | |
| modules | obj | 动态信息 | |
| type | str | 动态类型 | [动态类型](./dynamic_enum.md#动态类型) |
| visible | bool | 是否显示 | `true`：正常显示<br/>`false`：折叠动态 |
| orig | obj | 原动态信息 | 仅动态类型为`DYNAMIC_TYPE_FORWARD`的情况下存在 |

`data.items[n].basic`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| comment_id_str | str | 见 [动态类型](./dynamic_enum.md#动态类型) |
| comment_type | num | | 见 [动态类型](./dynamic_enum.md#动态类型) |
| like_icon | obj | | 见下 |
| rid_str | str | | 见 [动态类型](./dynamic_enum.md#动态类型) |

`data.items[n].basic.like_icon`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| action_url | str | `空串` | |
| end_url | str | `空串` | |
| id | num | `0` | |
| start_url | str | `空串` | |

`data.items[n].modules`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| module_author | obj | UP主信息 | 参见 [MODULE_TYPE_AUTHOR](../opus/features.md#module-type-author) 中的 `module_author` 对象 |
| module_dynamic | obj | 动态内容信息 | |
| module_more | obj | 动态右上角三点菜单 | 参见 [module_more](../opus/features.md#module-more) 中的 `module_more` 对象 |
| module_stat | obj | 动态统计数据 | 参见 [MODULE_TYPE_STAT](../opus/features.md#module-type-stat) 中的 `module_stat` 对象 |
| module_interaction | obj | 热度评论 | |
| module_fold | obj | 动态折叠信息 | |
| module_dispute | obj | 争议小黄条 | |
| module_tag | obj | 置顶信息 | |

`data.items[n].modules.module_dynamic`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| additional | obj | 相关内容卡片信息 | |
| desc | obj | 动态文字内容 |其他动态时为null |
| major | obj | 动态主体对象 |转发动态时为null |
| topic | obj | 话题信息 | 无时为 null, 参见 [MODULE_TYPE_TOPIC](../opus/features.md#module-type-topic) |

`data.items[n].modules.module_dynamic.additional`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| common | obj | 一般类型 | `ADDITIONAL_TYPE_COMMON`类型独有 |
| type | str | 卡片类型 | [相关内容卡片类型](./dynamic_enum.md#相关内容卡片类型) |
| reserve | obj | 预约信息 | `ADDITIONAL_TYPE_RESERVE`类型独有 |
| goods | obj | 商品内容 | `ADDITIONAL_TYPE_GOODS`类型独有 |
| vote | obj | 投票信息 | `ADDITIONAL_TYPE_VOTE`类型独有 |
| ugc | obj | 视频信息 | `ADDITIONAL_TYPE_UGC`类型独有 |
| match | object | 比赛信息? | `ADDITIONAL_TYPE_MATCH`类型独有, 参见 [MODULE_TYPE_CONTENT](../opus/features.md#module-type-content) 的 `module_content.paragraphs[].link_card.match` |
| upower_lottery | object | 充电专属抽奖信息 | `ADDITIONAL_TYPE_UPOWER_LOTTERY`类型独有, 参见 [MODULE_TYPE_CONTENT](../opus/features.md#module-type-content) 的 `module_content.paragraphs[].link_card.upower_lottery` |

`data.items[n].modules.module_dynamic.additional.common`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| button | obj | 按钮内容 | |
| cover | str | 左侧封面图 | |
| desc1 | str | 描述1 | |
| desc2 | str | 描述2 | |
| head_text | str | 卡片头文本 | |
| id_str | str | 相关id | |
| jump_url | str | 跳转URL | |
| style | num | `1` | |
| sub_type | str | 子类型 | `game`<br/>`decoration`<br/>`ogv` |
| title | str | 卡片标题 | |

`data.items[n].modules.module_dynamic.additional.common.button`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| jump_style | obj | 跳转类型 | `game`和`decoration`类型特有 |
| jump_url | str | 跳转URL | |
| type | num | | 1：`game`和`decoration`类型<br/>2：`ogv`类型 |
| check | obj | | `ogv`类型特有 |
| status | num | `1` | |
| uncheck | obj | | `ogv`类型特有 |

`data.items[n].modules.module_dynamic.additional.common.button.jump_style`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| icon_url | str | `空串` | |
| text | str | 按钮显示文案 | game：`进入`<br/>decoration：`去看看` |

`data.items[n].modules.module_dynamic.additional.common.button.check`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| icon_url | str | 按钮图片URL | |
| text | str | 按钮显示文案 | `ogv`：已追剧 |

`data.items[n].modules.module_dynamic.additional.common.button.uncheck`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| icon_url | str | 按钮图片URL | |
| text | str | 按钮显示文案 | `ogv`：追剧 |

`data.items[n].modules.module_dynamic.additional.reserve`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| button | obj | 按钮信息 | |
| desc1 | obj | 预约时间 | |
| desc2 | obj | 预约观看量 | |
| jump_url | str | 跳转URL | |
| reserve_total | num | 预约人数 | |
| rid | num | | |
| state | num | `0` | |
| stype | num | `1` `2` | |
| title | str | 预约标题 | |
| up_mid | num | 预约发起人UID | |
| desc3 | obj | 预约有奖信息 | |

`data.items[n].modules.module_dynamic.additional.reserve.button`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| check | obj | 已预约状态显示内容 | |
| status | num | 预约状态 | 1：未预约，使用`uncheck`<br/>2：已预约，使用`check` |
| type | num | 类型 | 1：视频预约，使用`jump_style`<br/>2：直播预约，使用`check`和`uncheck` |
| uncheck | obj | 未预约状态显示内容 | |
| jump_style | obj | 跳转按钮 | |
| jump_url | str | 跳转URL | |

`data.items[n].modules.module_dynamic.additional.reserve.button.check`对象"

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| icon_url | str | `空串` | |
| text | str | 按钮显示文案 | `已预约` |

`data.items[n].modules.module_dynamic.additional.reserve.button.uncheck`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| icon_url | str | 显示图标URL | |
| text | str | 按钮显示文案 | |
| toast | str | 预约成功显示提示文案 | |
| disable | num | 是否不可预约 | 1：是 |

`data.items[n].modules.module_dynamic.additional.reserve.button.jump_style`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| icon_url | str | `空串` | |
| text | str | 按钮显示文案 | `去观看` |

`data.items[n].modules.module_dynamic.additional.reserve.desc1`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| style | num | 类型 | 0：`视频预约` `11-05 20:00 直播` `预计今天 17:05发布`<br/>1：`直播中` |
| text | str | 显示文案 | |

`data.items[n].modules.module_dynamic.additional.reserve.desc2`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| style | num | `0` | |
| text | str | 显示文案 | `2人预约`<br/>`743观看`<br/>`1.0万人看过`<br/>`2151人气` |
| visible | bool | 是否显示 | true：显示文案<br/>false：显示已结束 |

`data.items[n].modules.module_dynamic.additional.reserve.desc3`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| jump_url | str | 开奖信息跳转URL | |
| style | num | `1` | |
| text | str | 奖品信息显示文案 | |

`data.items[n].modules.module_dynamic.additional.goods`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| head_icon | str | `空串` | |
| head_text | str | 卡片头显示文案 | |
| items | array | 商品信息列表 | |
| jump_url | str | `空串` | |

`data.items[n].modules.module_dynamic.additional.goods.items`数组中的:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| brief | str | 商品副标题 | |
| cover | str | 商品封面 | |
| id | str | 商品ID | |
| jump_desc | str | 跳转按钮显示文案 | |
| jump_url | str | 跳转URL | |
| name | str | 商品名称 | |
| price | str | 商品价格 | |

`data.items[n].modules.module_dynamic.additional.vote`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| choice_cnt | num | `1` | |
| default_share | num | 是否默认勾选`同时分享至动态` | 1：勾选 |
| desc | str | 投票标题 | |
| end_time | num | 剩余时间 | 单位：秒 |
| join_num | num | 已参与人数 | |
| status | num | `1` | |
| type | null | `null` | |
| uid | num | 发起人UID | |
| vote_id | num | 投票ID | |

`data.items[n].modules.module_dynamic.additional.ugc`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cover | str | 封面 | |
| desc_second | str | 播放量与弹幕数 | |
| duration | str | 视频长度 | |
| head_text | str | `空串` | |
| id_str | str | 视频AV号 | |
| jump_url | str | 视频跳转URL | |
| multi_line | bool | `true` | |
| title | str | 视频标题 | |

`data.items[n].modules.module_dynamic.desc`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| rich_text_nodes | array | 富文本节点列表 | [富文本节点类型](../opus/rich_text_nodes.md#富文本节点类型) |
| text | str | 动态的文字内容 | |

`data.items[n].modules.module_dynamic.major`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| type | str | 动态主体类型 | [动态主体类型](./dynamic_enum.md#动态主体类型) |
| ugc_season | obj | 合集信息 | `MAJOR_TYPE_UGC_SEASON` |
| article | obj | 专栏类型 | `MAJOR_TYPE_ARTICLE` |
| draw | obj | 带图动态 | `MAJOR_TYPE_DRAW` |
| archive | obj | 视频信息 | `MAJOR_TYPE_ARCHIVE` |
| live_rcmd | obj | 直播状态 | `MAJOR_TYPE_LIVE_RCMD` |
| common | obj | 一般类型 | `MAJOR_TYPE_COMMON` |
| pgc | obj | 剧集信息 | `MAJOR_TYPE_PGC` |
| courses | obj | 课程信息 | `MAJOR_TYPE_COURSES` |
| music | obj | 音频信息 | `MAJOR_TYPE_MUSIC` |
| opus | obj | 图文动态 | `MAJOR_TYPE_OPUS` |
| live | obj | | |
| none | obj | 动态失效 | `MAJOR_TYPE_NONE` |
| upower_common | obj | 充电相关 | `MAJOR_TYPE_UPOWER_COMMON` |

`data.items[].modules.module_dynamic.major.upower_common` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| background | object | 背景 |  |
| button | object | 按钮 |  |
| icon | object | 图标 |  |
| jump_url | string | 跳转 URL |  |
| rid | string | 关联 id |  |
| title | string | 标题 |  |
| title_prefix | string | 标题前缀 |  |
| type | number | 类型 |  |
| up_mid | number | UP 主 mid (UID) |  |
| upower_action_state | number | 充电操作状态? |  |
| upower_level | number | 充电级别? |  |

`data.items[].modules.module_dynamic.major.upower_common.background` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| dark_src | string | 深色背景 |  |
| light_src | string | 浅色背景 |  |

`data.items[].modules.module_dynamic.major.upower_common.button` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| jump_style | object | 跳转样式 |  |
| jump_url | string | 跳转 URL |  |
| type | number | 类型 |  |

`data.items[].modules.module_dynamic.major.upower_common.button.jump_style` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| text | string | 文本 |  |

`data.items[].modules.module_dynamic.major.upower_common.icon` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| dark_src | string | 深色图标 URL |  |
| light_src | string | 浅色图标 URL |  |

<!-- Generated by json-apidoc-gen @ 2025-07-20T07:08:06.175919645Z -->

`data.items[n].modules.module_dynamic.major.ugc_season`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| aid | num | 视频AV号 | |
| badge | obj | 角标信息 | |
| cover | str | 视频封面 | |
| desc | str | 视频简介 | |
| disable_preview | num | `0` | |
| duration_text | str | 时长 | |
| jump_url | str | 跳转URL | |
| stat | obj | 统计信息 | |
| title | str | 视频标题 | |

`data.items[n].modules.module_dynamic.major.ugc_season.badge`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| bg_color | str | 背景颜色 | |
| color | str | 字体颜色 | |
| text | str | 角标文案 | |

`data.items[n].modules.module_dynamic.major.ugc_season.stat`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| danmaku | str | 弹幕数 | |
| play | str | 播放数 | |

`data.items[n].modules.module_dynamic.major.article`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| covers | array | 封面图数组 | 最多三张 |
| desc | str | 文章摘要 | |
| id | num | 文章CV号 | |
| jump_url | str | 文章跳转地址 | |
| label | str | 文章阅读量 | |
| title | str | 文章标题 | |

`data.items[n].modules.module_dynamic.major.draw`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| id | num | 对应相簿id | |
| items | array | 图片信息列表 | |

`data.items[n].modules.module_dynamic.major.draw.items[o]`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| height | num | 图片高度 | |
| size | num | 图片大小 | 单位KB |
| src | str | 图片URL | |
| tags | array | | |
| width | num | 图片宽度 | |

`data.items[n].modules.module_dynamic.major.archive`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| aid | str | 视频AV号 | |
| badge | obj | 角标信息 | |
| bvid | str | 视频BVID | |
| cover | str | 视频封面 | |
| desc | str | 视频简介 | |
| disable_preview | num | `0` | |
| duration_text | str | 视频长度 | |
| jump_url | str | 跳转URL | |
| stat | obj | 统计信息 | |
| title | str | 视频标题 | |
| type | num | `1` | |

`data.items[n].modules.module_dynamic.major.archive.badge`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| bg_color | str | 背景颜色 | |
| color | str | 字体颜色 | |
| text | str | 角标文案 | |

`data.items[n].modules.module_dynamic.major.archive.stat`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| danmaku | str | 弹幕数 | |
| play | str | 播放数 | |

`data.items[n].modules.module_dynamic.major.live_rcmd`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| content | str | 直播间内容JSON | |
| reserve_type | num | `0` | |

`data.items[n].modules.module_dynamic.major.common`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| badge | obj | 角标信息 | |
| biz_type | num | `0` | |
| cover | str | 左侧图片封面 | |
| desc | str | 右侧描述信息 | |
| id | str | | |
| jump_url | str | 跳转地址 | |
| label | str | `空串` | |
| sketch_id | str | | |
| style | num | `1` | |
| title | str | 右侧标题 | |

`data.items[n].modules.module_dynamic.major.common.badge`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| bg_color | str | 背景色 | |
| color | str | 前景色 | |
| text | str | 文本 | |

`data.items[n].modules.module_dynamic.major.pgc`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| badge | obj | 角标信息 | |
| cover | str | 视频封面 | |
| epid | num | 分集EpId | |
| jump_url | str | 跳转URL | |
| season_id | num | 剧集SeasonId | |
| stat | obj | 统计信息 | |
| sub_type | num | 剧集类型 | 1：番剧<br/>2：电影<br/>3：纪录片<br/>4：国创<br/>5：电视剧<br/>6：漫画<br/>7：综艺 |
| title | str | 视频标题 | |
| type | num | `2` | |

`data.items[n].modules.module_dynamic.major.pgc.badge`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| bg_color | str | 背景颜色 | |
| color | str | 字体颜色 | |
| text | str | 角标文案 | |

`data.items[n].modules.module_dynamic.major.pgc.stat`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| danmaku | str | 弹幕数 | |
| play | str | 播放数 | |

`data.items[n].modules.module_dynamic.major.courses`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| badge | obj | 角标信息 | |
| cover | str | 封面图URL | |
| desc | str | 更新状态描述 | |
| id | num | 课程id | |
| jump_url | str | 跳转URL | |
| sub_title | str | 课程副标题 | |
| title | str | 课程标题 | |

`data.items[n].modules.module_dynamic.major.courses.badge`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| bg_color | str | 背景颜色 | |
| color | str | 字体颜色 | |
| text | str | 角标文案 | |

`data.items[n].modules.module_dynamic.major.music`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cover | str | 音频封面 | |
| id | num | 音频AUID | |
| jump_url | str | 跳转URL | |
| label | str | 音频分类 | |
| title | str | 音频标题 | |

`data.items[n].modules.module_dynamic.major.opus`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| fold_action | array | 展开收起 | |
| jump_url | str | 跳转URL | |
| pics | array | 图片信息 | |
| summary | obj | 动态内容 | |
| title | str | 动态标题 | 没有标题时为null |

`data.items[n].modules.module_dynamic.major.opus.summary`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| rich_text_nodes | array | 富文本节点列表 | 和`desc`对象中的`rich_text_nodes`数组结构一样 |
| text | str | 评论内容 | |

`data.items[n].modules.module_dynamic.major.live`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| badge | obj | 角标信息 | |
| cover | str | 直播封面 | |
| desc_first | str | 直播主分区名称 | |
| desc_second | str | 观看人数 | |
| id | num | 直播间id | |
| jump_url | str | 直播间跳转URL | |
| live_state | num | 直播状态 | 0：直播结束<br/>1：正在直播 |
| reserve_type | num | `0` | |
| title | str | 直播间标题 | |

`data.items[n].modules.module_dynamic.major.live.badge`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| bg_color | str | 背景颜色 | |
| color | str | 字体颜色 | |
| text | str | 角标文案 | |

`data.items[n].modules.module_dynamic.major.none`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| tips | str | 动态失效显示文案 | deprecated? |

`data.items[n].modules.module_interaction`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| items | array | 信息列表 | |

`data.items[n].modules.module_interaction.items`数组中的:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| desc | obj | 点赞/评论信息 | |
| type | num | 类型 | 0：点赞信息<br/>1：评论信息 |

`data.items[n].modules.module_interaction.items[o].desc`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| rich_text_nodes | array | 富文本节点列表 | [富文本节点类型](../opus/rich_text_nodes.md#富文本节点类型) |
| text | str | 评论内容 | |

`data.items[n].modules.module_fold`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| ids | array | 被折叠的动态id列表 | |
| statement | str | 显示文案 | 例：展开x条相关动态 |
| type | num | `1` | |
| users | array | `空数组` | |

`data.items[n].modules.module_dispute`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| desc | str | | |
| jump_url | str | | |
| title | str | 提醒文案 | 例：视频内含有危险行为，请勿模仿 |

`data.items[n].modules.module_tag`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| text | str | '置顶' | 置顶动态出现这个对象，否则没有 |

**示例:**

```shell
curl -L -X GET 'https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/all?type=all' \
-H 'Cookie: SESSDATA=xxx'
```

<details>
<summary>查看响应示例:</summary>

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
          "comment_id_str": "112981396619958",
          "comment_type": 1,
          "like_icon": {
            "action_url": "",
            "end_url": "",
            "id": 0,
            "start_url": ""
          },
          "rid_str": "112981396619958"
        },
        "id_str": "966887968322093078",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.35,
                "width": 1.35
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.675,
                        "axis_y": 0.675,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1,
                        "width": 1
                      }
                    },
                    "layer_config": {
                      "is_critical": true,
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "placeholder": 6,
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i2.hdslb.com/bfs/face/b1c15dd8814d79e648008815517aa5ef50a2fb9c.jpg"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  }
                ]
              },
              "mid": "3546730050096047"
            },
            "face": "https://i2.hdslb.com/bfs/face/b1c15dd8814d79e648008815517aa5ef50a2fb9c.jpg",
            "face_nft": false,
            "following": true,
            "jump_url": "//space.bilibili.com/3546730050096047/dynamic",
            "label": "",
            "mid": 3546730050096047,
            "name": "青岛LUCIFER",
            "official_verify": {
              "desc": "",
              "type": -1
            },
            "pendant": {
              "expire": 0,
              "image": "",
              "image_enhance": "",
              "image_enhance_frame": "",
              "n_pid": 0,
              "name": "",
              "pid": 0
            },
            "pub_action": "投稿了视频",
            "pub_location_text": "",
            "pub_time": "刚刚",
            "pub_ts": 1723959548,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 0,
              "avatar_subscript_url": "",
              "due_date": 0,
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
              "type": 0
            }
          },
          "module_dynamic": {
            "additional": null,
            "desc": null,
            "major": {
              "archive": {
                "aid": "112981396619958",
                "badge": {
                  "bg_color": "#FB7299",
                  "color": "#FFFFFF",
                  "icon_url": null,
                  "text": "投稿视频"
                },
                "bvid": "BV1oeWNebEv2",
                "cover": "http://i2.hdslb.com/bfs/archive/0e3d26d90eb0642d90c7552e63ce690e2fe7f8ce.jpg",
                "desc": "给老板娘贴睫毛贴了半天，老登眼皮总动，夹睫毛疼了还骂我，不开心哈哈哈。",
                "disable_preview": 0,
                "duration_text": "00:16",
                "jump_url": "//www.bilibili.com/video/BV1oeWNebEv2/",
                "stat": {
                  "danmaku": "0",
                  "play": "0"
                },
                "title": "老板娘今天是可爱鬼呀！",
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
          "comment_id_str": "1756441068",
          "comment_type": 1,
          "like_icon": {
            "action_url": "",
            "end_url": "",
            "id": 0,
            "start_url": ""
          },
          "rid_str": "1756441068"
        },
        "id_str": "966873782060843027",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.35,
                "width": 1.35
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.675,
                        "axis_y": 0.675,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1,
                        "width": 1
                      }
                    },
                    "layer_config": {
                      "is_critical": true,
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "placeholder": 6,
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i0.hdslb.com/bfs/face/726060100f7b80f3ab17889aa9fb8f380a53b9da.jpg"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.8000000000000002,
                        "axis_y": 0.8000000000000002,
                        "coordinate_pos": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.41666666666666663,
                        "width": 0.41666666666666663
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "background-color": "rgb(255,255,255)",
                              "border": "2px solid rgba(255,255,255,1)",
                              "borderRadius": "50%",
                              "boxSizing": "border-box"
                            }
                          }
                        },
                        "ICON_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "local": 3,
                          "src_type": 2
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  }
                ]
              },
              "mid": "266765166"
            },
            "face": "https://i0.hdslb.com/bfs/face/726060100f7b80f3ab17889aa9fb8f380a53b9da.jpg",
            "face_nft": false,
            "following": true,
            "jump_url": "//space.bilibili.com/266765166/dynamic",
            "label": "",
            "mid": 266765166,
            "name": "漫士沉思录",
            "official_verify": {
              "desc": "",
              "type": 0
            },
            "pendant": {
              "expire": 0,
              "image": "",
              "image_enhance": "",
              "image_enhance_frame": "",
              "n_pid": 0,
              "name": "",
              "pid": 0
            },
            "pub_action": "投稿了视频",
            "pub_location_text": "",
            "pub_time": "55分钟前",
            "pub_ts": 1723956245,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 0,
              "avatar_subscript_url": "",
              "due_date": 0,
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
              "type": 0
            }
          },
          "module_dynamic": {
            "additional": null,
            "desc": null,
            "major": {
              "archive": {
                "aid": "1756441068",
                "badge": {
                  "bg_color": "#FB7299",
                  "color": "#FFFFFF",
                  "icon_url": null,
                  "text": "投稿视频"
                },
                "bvid": "BV1d4421Z7nW",
                "cover": "http://i1.hdslb.com/bfs/archive/df067c178714da9b511f10bde11e1bc75ea676d9.jpg",
                "desc": "使用3b1b开发的manim引擎制作",
                "disable_preview": 0,
                "duration_text": "14:25",
                "jump_url": "//www.bilibili.com/video/BV1d4421Z7nW/",
                "stat": {
                  "danmaku": "217",
                  "play": "1.4万"
                },
                "title": "【漫士科普】如何最简单且本质地理解欧拉公式？",
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
              "count": 142,
              "forbidden": false
            },
            "forward": {
              "count": 6,
              "forbidden": false
            },
            "like": {
              "count": 1959,
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
          "comment_id_str": "325833790",
          "comment_type": 11,
          "like_icon": {
            "action_url": "",
            "end_url": "",
            "id": 0,
            "start_url": ""
          },
          "rid_str": "325833790"
        },
        "id_str": "966831498138222598",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.375,
                "width": 1.375
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.787,
                        "width": 0.787
                      }
                    },
                    "layer_config": {
                      "is_critical": true,
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "placeholder": 6,
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i1.hdslb.com/bfs/face/1fd5b43d5f619e6df8c8adcf13c962a3e80ee971.jpg"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1.375,
                        "width": 1.375
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "PENDENT_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.7560000000000001,
                        "axis_y": 0.7726666666666667,
                        "coordinate_pos": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.41666666666666663,
                        "width": 0.41666666666666663
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "background-color": "rgb(255,255,255)",
                              "border": "2px solid rgba(255,255,255,1)",
                              "borderRadius": "50%",
                              "boxSizing": "border-box"
                            }
                          }
                        },
                        "ICON_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "local": 4,
                          "src_type": 2
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  }
                ]
              },
              "layers": [
                {
                  "is_critical_group": true,
                  "layers": [
                    {
                      "general_spec": {
                        "pos_spec": {
                          "axis_x": 0.6875,
                          "axis_y": 0.6875,
                          "coordinate_pos": 2
                        },
                        "render_spec": {
                          "opacity": 1
                        },
                        "size_spec": {
                          "height": 0.787,
                          "width": 0.787
                        }
                      },
                      "layer_config": {
                        "is_critical": true,
                        "tags": {
                          "AVATAR_LAYER": {},
                          "GENERAL_CFG": {
                            "config_type": 1,
                            "general_config": {
                              "web_css_style": {
                                "borderRadius": "50%"
                              }
                            }
                          }
                        }
                      },
                      "resource": {
                        "res_image": {
                          "image_src": {
                            "placeholder": 6,
                            "remote": {
                              "bfs_style": "widget-layer-avatar",
                              "url": "https://i1.hdslb.com/bfs/face/1fd5b43d5f619e6df8c8adcf13c962a3e80ee971.jpg"
                            },
                            "src_type": 1
                          }
                        },
                        "res_type": 3
                      },
                      "visible": true
                    }
                  ]
                },
                {
                  "layers": [
                    {
                      "general_spec": {
                        "pos_spec": {
                          "axis_x": 0.6875,
                          "axis_y": 0.6875,
                          "coordinate_pos": 2
                        },
                        "render_spec": {
                          "opacity": 1
                        },
                        "size_spec": {
                          "height": 1.375,
                          "width": 1.375
                        }
                      },
                      "layer_config": {
                        "tags": {
                          "PENDENT_LAYER": {}
                        }
                      },
                      "resource": {
                        "res_animation": {
                          "webp_src": {
                            "remote": {
                              "bfs_style": "widget-layer-avatar",
                              "url": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
                            },
                            "src_type": 1
                          }
                        },
                        "res_type": 4
                      },
                      "visible": true
                    }
                  ]
                },
                {
                  "layers": [
                    {
                      "general_spec": {
                        "pos_spec": {
                          "axis_x": 0.7560000000000001,
                          "axis_y": 0.7726666666666667,
                          "coordinate_pos": 1
                        },
                        "render_spec": {
                          "opacity": 1
                        },
                        "size_spec": {
                          "height": 0.41666666666666663,
                          "width": 0.41666666666666663
                        }
                      },
                      "layer_config": {
                        "tags": {
                          "GENERAL_CFG": {
                            "config_type": 1,
                            "general_config": {
                              "web_css_style": {
                                "background-color": "rgb(255,255,255)",
                                "border": "2px solid rgba(255,255,255,1)",
                                "borderRadius": "50%",
                                "boxSizing": "border-box"
                              }
                            }
                          },
                          "ICON_LAYER": {}
                        }
                      },
                      "resource": {
                        "res_image": {
                          "image_src": {
                            "local": 4,
                            "src_type": 2
                          }
                        },
                        "res_type": 3
                      },
                      "visible": true
                    }
                  ]
                }
              ],
              "mid": "233114659"
            },
            "decorate": {
              "card_url": "https://i0.hdslb.com/bfs/garb/bb140043341137b879e957d09b649ce7c3257820.png",
              "fan": {
                "color": "#903AC2",
                "color_format": {
                  "colors": [
                    "#903AC2FF",
                    "#903AC2FF"
                  ],
                  "end_point": "0,100",
                  "gradients": [
                    0,
                    100
                  ],
                  "start_point": "0,0"
                },
                "is_fan": true,
                "num_prefix": "NO.",
                "num_str": "000001",
                "number": 1
              },
              "id": 1706163888001,
              "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=1706163888001\u0026isdiy=0\u0026part=card\u0026from=post\u0026f_source=garb\u0026vmid=233114659\u0026native.theme=1\u0026navhide=1",
              "name": "龙腾啾跃-动态卡片粉丝",
              "type": 3
            },
            "face": "https://i1.hdslb.com/bfs/face/1fd5b43d5f619e6df8c8adcf13c962a3e80ee971.jpg",
            "face_nft": false,
            "following": true,
            "jump_url": "//space.bilibili.com/233114659/dynamic",
            "label": "",
            "mid": 233114659,
            "name": "碧蓝航线",
            "official_verify": {
              "desc": "",
              "type": 1
            },
            "pendant": {
              "expire": 0,
              "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
              "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp",
              "image_enhance_frame": "https://i1.hdslb.com/bfs/garb/item/3052b412defbbc7704e887fefde8de539e8027c5.png",
              "n_pid": 1987,
              "name": "碧蓝航线2020",
              "pid": 1987
            },
            "pub_action": "",
            "pub_location_text": "",
            "pub_time": "3小时前",
            "pub_ts": 1723946400,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 1,
              "avatar_subscript_url": "",
              "due_date": 1729526400000,
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
                  "jump_url": "https://www.biligame.com/detail?id=97\u0026sourceFrom=1005",
                  "type": 1
                },
                "cover": "https://i0.hdslb.com/bfs/game/b141a7690c226a0eae66518c713d3af62613b21d.png",
                "desc1": "养成",
                "desc2": "指挥官，欢迎回港",
                "head_text": "相关游戏",
                "id_str": "97",
                "jump_url": "https://www.biligame.com/detail?id=97\u0026sourceFrom=1005",
                "style": 1,
                "sub_type": "game",
                "title": "碧蓝航线"
              },
              "type": "ADDITIONAL_TYPE_COMMON"
            },
            "desc": {
              "rich_text_nodes": [
                {
                  "jump_url": "//search.bilibili.com/all?keyword=%E7%A2%A7%E8%93%9D%E8%88%AA%E7%BA%BF",
                  "orig_text": "#碧蓝航线#",
                  "text": "#碧蓝航线#",
                  "type": "RICH_TEXT_NODE_TYPE_TOPIC"
                },
                {
                  "orig_text": " ",
                  "text": " ",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                },
                {
                  "jump_url": "//search.bilibili.com/all?keyword=%E7%A2%A7%E8%93%9D%E8%88%AA%E7%BA%BF%E6%BC%AB%E5%B1%95",
                  "orig_text": "#碧蓝航线漫展#",
                  "text": "#碧蓝航线漫展#",
                  "type": "RICH_TEXT_NODE_TYPE_TOPIC"
                },
                {
                  "orig_text": " ",
                  "text": " ",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                },
                {
                  "jump_url": "//search.bilibili.com/all?keyword=2024%E6%B8%AF%E5%8C%BA%E7%9B%9B%E5%A4%8F%E6%B8%85%E5%87%89%E8%8A%82",
                  "orig_text": "#2024港区盛夏清凉节#",
                  "text": "#2024港区盛夏清凉节#",
                  "type": "RICH_TEXT_NODE_TYPE_TOPIC"
                },
                {
                  "orig_text": "\n◆ 「港区盛夏清凉节」长沙站·街区快闪 DAY1 现场直击！◆ \n\n城市街巷，专属惊喜，\n绘就绚丽夏日！\n和少女们一同记录这场特别邂逅吧！\n\n◆ 互动游戏开放时间：2024年8月17日~8月18日，每日10:00~12:00及14:00~19:00\n◆ 街区快闪体验地址：湖南省长沙市开福区潮宗街历史文化街区\n◆ 参与方式：无需预约，前往现场即可参与体验~\n◆ 体验须知：\n※8月17日~8月18日期间，指挥官可前往潮宗街历史文化街区现场参与体验。\n※指挥官关注《碧蓝航线》官方B站账号后，可参与互动游戏，集章兑换周边礼品哟！\n※兑换周边每日数量有限，兑完即止。\n※天气炎热，请指挥官做好防暑准备，出行注意安全哟。",
                  "text": "\n◆ 「港区盛夏清凉节」长沙站·街区快闪 DAY1 现场直击！◆ \n\n城市街巷，专属惊喜，\n绘就绚丽夏日！\n和少女们一同记录这场特别邂逅吧！\n\n◆ 互动游戏开放时间：2024年8月17日~8月18日，每日10:00~12:00及14:00~19:00\n◆ 街区快闪体验地址：湖南省长沙市开福区潮宗街历史文化街区\n◆ 参与方式：无需预约，前往现场即可参与体验~\n◆ 体验须知：\n※8月17日~8月18日期间，指挥官可前往潮宗街历史文化街区现场参与体验。\n※指挥官关注《碧蓝航线》官方B站账号后，可参与互动游戏，集章兑换周边礼品哟！\n※兑换周边每日数量有限，兑完即止。\n※天气炎热，请指挥官做好防暑准备，出行注意安全哟。",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                }
              ],
              "text": "#碧蓝航线# #碧蓝航线漫展# #2024港区盛夏清凉节#\n◆ 「港区盛夏清凉节」长沙站·街区快闪 DAY1 现场直击！◆ \n\n城市街巷，专属惊喜，\n绘就绚丽夏日！\n和少女们一同记录这场特别邂逅吧！\n\n◆ 互动游戏开放时间：2024年8月17日~8月18日，每日10:00~12:00及14:00~19:00\n◆ 街区快闪体验地址：湖南省长沙市开福区潮宗街历史文化街区\n◆ 参与方式：无需预约，前往现场即可参与体验~\n◆ 体验须知：\n※8月17日~8月18日期间，指挥官可前往潮宗街历史文化街区现场参与体验。\n※指挥官关注《碧蓝航线》官方B站账号后，可参与互动游戏，集章兑换周边礼品哟！\n※兑换周边每日数量有限，兑完即止。\n※天气炎热，请指挥官做好防暑准备，出行注意安全哟。"
            },
            "major": {
              "draw": {
                "id": 325833790,
                "items": [
                  {
                    "height": 4000,
                    "size": 16103.947,
                    "src": "http://i0.hdslb.com/bfs/new_dyn/31b32e6dcf2f1a6328552f0fa666302d233114659.jpg",
                    "tags": [],
                    "width": 6000
                  },
                  {
                    "height": 3905,
                    "size": 16620.71,
                    "src": "http://i0.hdslb.com/bfs/new_dyn/e507c60207f486824708a5850d07d1bb233114659.jpg",
                    "tags": [],
                    "width": 5858
                  },
                  {
                    "height": 4000,
                    "size": 16195.393,
                    "src": "http://i0.hdslb.com/bfs/new_dyn/7a7ef9513bb32edc3de887d787a4df43233114659.jpg",
                    "tags": [],
                    "width": 6000
                  },
                  {
                    "height": 4672,
                    "size": 11758.82,
                    "src": "http://i0.hdslb.com/bfs/new_dyn/a21461b944e10306e68672df3e92c1b9233114659.jpg",
                    "tags": [],
                    "width": 7008
                  },
                  {
                    "height": 4672,
                    "size": 3962.4902,
                    "src": "http://i0.hdslb.com/bfs/new_dyn/b2c4baa47b4999cabb9c8c338c2da36c233114659.jpg",
                    "tags": [],
                    "width": 7008
                  },
                  {
                    "height": 4672,
                    "size": 11276.51,
                    "src": "http://i0.hdslb.com/bfs/new_dyn/8cf06e142fce875d2c3b83961abbc668233114659.jpg",
                    "tags": [],
                    "width": 7008
                  },
                  {
                    "height": 3735,
                    "size": 13969.533,
                    "src": "http://i0.hdslb.com/bfs/new_dyn/c56cd277f281ba8cc4a395dbe5d9fa54233114659.jpg",
                    "tags": [],
                    "width": 5603
                  },
                  {
                    "height": 3106,
                    "size": 12942.339,
                    "src": "http://i0.hdslb.com/bfs/new_dyn/9049a5c39ebafdd1cb488b26da4f99da233114659.jpg",
                    "tags": [],
                    "width": 4659
                  },
                  {
                    "height": 3802,
                    "size": 18643.953,
                    "src": "http://i0.hdslb.com/bfs/new_dyn/564e469ba092d2381b23547da37ca3c0233114659.jpg",
                    "tags": [],
                    "width": 5703
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
              "count": 151,
              "forbidden": false
            },
            "forward": {
              "count": 31,
              "forbidden": false
            },
            "like": {
              "count": 2827,
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
          "comment_id_str": "37231101",
          "comment_type": 12,
          "like_icon": {
            "action_url": "",
            "end_url": "",
            "id": 0,
            "start_url": ""
          },
          "rid_str": "37231101"
        },
        "id_str": "966827503780888593",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.35,
                "width": 1.35
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.675,
                        "axis_y": 0.675,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1,
                        "width": 1
                      }
                    },
                    "layer_config": {
                      "is_critical": true,
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "placeholder": 6,
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i0.hdslb.com/bfs/face/978ea07f22e54c2e62f01def8e815b59adacc5d0.jpg"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.8000000000000002,
                        "axis_y": 0.8000000000000002,
                        "coordinate_pos": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.41666666666666663,
                        "width": 0.41666666666666663
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "background-color": "rgb(255,255,255)",
                              "border": "2px solid rgba(255,255,255,1)",
                              "borderRadius": "50%",
                              "boxSizing": "border-box"
                            }
                          }
                        },
                        "ICON_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "local": 4,
                          "src_type": 2
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  }
                ]
              },
              "mid": "407045223"
            },
            "decorate": {
              "card_url": "https://i0.hdslb.com/bfs/vip/a9e3d993c7a15e88ce0bf714a142f7d2b44121e2.png",
              "fan": {
                "color": "",
                "color_format": null,
                "is_fan": false,
                "num_prefix": "",
                "num_str": "",
                "number": 0
              },
              "id": 28,
              "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=28\u0026isdiy=0\u0026part=card\u0026from=post\u0026f_source=garb\u0026vmid=407045223\u0026native.theme=1\u0026navhide=1",
              "name": "2233娘",
              "type": 1
            },
            "face": "https://i0.hdslb.com/bfs/face/978ea07f22e54c2e62f01def8e815b59adacc5d0.jpg",
            "face_nft": false,
            "following": true,
            "jump_url": "//space.bilibili.com/407045223/dynamic",
            "label": "",
            "mid": 407045223,
            "name": "二次元的中科院物理所",
            "official_verify": {
              "desc": "",
              "type": 1
            },
            "pendant": {
              "expire": 0,
              "image": "",
              "image_enhance": "",
              "image_enhance_frame": "",
              "n_pid": 0,
              "name": "",
              "pid": 0
            },
            "pub_action": "投稿了文章",
            "pub_location_text": "",
            "pub_time": "3小时前",
            "pub_ts": 1723945470,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 1,
              "avatar_subscript_url": "",
              "due_date": 1745769600000,
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
              "article": {
                "covers": [
                  "https://i0.hdslb.com/bfs/article/f59f635a3784c49eb174da7d589c4e75407045223.jpg"
                ],
                "desc": "西游记中，孙悟空为了保护师傅，在地上画了一个圈，由此便可限制住妖怪。今天小编带大家布置法术场地，只需在上面画出图案，便可控制水滴的行动！实验器材火柴、蜡烛、空易拉罐、所标杯、细竹签实验步骤安全提示：本实验有明火，请小朋友在家长的陪同下完成，或在空旷的地方进行，避免着火，注意安全。第一步：首先布置施法场地，通过蜡烛将易拉罐底部附着满炭黑。注意此步骤中应保持易拉罐内含一定水分，否则会产生烫伤等风险！第二步：向施法场地滴入水滴，观察场地效果。可以看到水滴在场地内不收约束，自由滑行第三步：当用细竹签等在场地中画出",
                "id": 37231101,
                "jump_url": "//www.bilibili.com/read/cv37231101/",
                "label": "12万阅读",
                "title": "带你在家里学会孙悟空的“画地为牢” 丨正经玩"
              },
              "type": "MAJOR_TYPE_ARTICLE"
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
              "count": 9,
              "forbidden": false
            },
            "forward": {
              "count": 2,
              "forbidden": false
            },
            "like": {
              "count": 583,
              "forbidden": false,
              "status": false
            }
          }
        },
        "type": "DYNAMIC_TYPE_ARTICLE",
        "visible": true
      },
      {
        "basic": {
          "comment_id_str": "1306462278",
          "comment_type": 1,
          "like_icon": {
            "action_url": "",
            "end_url": "",
            "id": 0,
            "start_url": ""
          },
          "rid_str": "1306462278"
        },
        "id_str": "966792134707380227",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.375,
                "width": 1.375
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.787,
                        "width": 0.787
                      }
                    },
                    "layer_config": {
                      "is_critical": true,
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      }
                    },
                    "resource": {
                      "res_animation": {
                        "webp_src": {
                          "placeholder": 6,
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 4
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1.375,
                        "width": 1.375
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "PENDENT_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i0.hdslb.com/bfs/garb/item/0dcf03aa499a64524fe25871d26d95f49f880928.png"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.7560000000000001,
                        "axis_y": 0.7726666666666667,
                        "coordinate_pos": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.41666666666666663,
                        "width": 0.41666666666666663
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "background-color": "rgb(255,255,255)",
                              "border": "2px solid rgba(255,255,255,1)",
                              "borderRadius": "50%",
                              "boxSizing": "border-box"
                            }
                          }
                        },
                        "ICON_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "local": 3,
                          "src_type": 2
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  }
                ]
              },
              "mid": "686127"
            },
            "face": "https://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp",
            "face_nft": false,
            "following": true,
            "jump_url": "//space.bilibili.com/686127/dynamic",
            "label": "",
            "mid": 686127,
            "name": "籽岷",
            "official_verify": {
              "desc": "",
              "type": 0
            },
            "pendant": {
              "expire": 0,
              "image": "https://i0.hdslb.com/bfs/garb/item/0dcf03aa499a64524fe25871d26d95f49f880928.png",
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/0dcf03aa499a64524fe25871d26d95f49f880928.png",
              "image_enhance_frame": "",
              "n_pid": 2066,
              "name": "百年大会员",
              "pid": 2066
            },
            "pub_action": "投稿了视频",
            "pub_location_text": "",
            "pub_time": "6小时前",
            "pub_ts": 1723937235,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 1,
              "avatar_subscript_url": "",
              "due_date": 4845196800000,
              "label": {
                "bg_color": "#FB7299",
                "bg_style": 1,
                "border_color": "",
                "img_label_uri_hans": "",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/c16005a5b39164b3536cbd45618a5edd597a1c51.png",
                "img_label_uri_hant": "",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/Pzrd8zmpQD.png",
                "label_theme": "hundred_annual_vip",
                "path": "",
                "text": "百年大会员",
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
                "aid": "1306462278",
                "badge": {
                  "bg_color": "#FB7299",
                  "color": "#FFFFFF",
                  "icon_url": null,
                  "text": "投稿视频"
                },
                "bvid": "BV14M4m1175k",
                "cover": "http://i1.hdslb.com/bfs/archive/7f8060fe1669b1a0a980844bb90e8150a859499c.jpg",
                "desc": "https://www.curseforge.com/minecraft/mc-mods/desert-behemoths-sandworms/",
                "disable_preview": 0,
                "duration_text": "04:24",
                "jump_url": "//www.bilibili.com/video/BV14M4m1175k/",
                "stat": {
                  "danmaku": "297",
                  "play": "10.1万"
                },
                "title": "我的世界 巨大沙虫",
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
                      "orig_text": "bili_49990770610：",
                      "rid": "3546583341730698",
                      "text": "bili_49990770610：",
                      "type": "RICH_TEXT_NODE_TYPE_AT"
                    },
                    {
                      "emoji": {
                        "icon_url": "https://i0.hdslb.com/bfs/emote/1597302b98827463f5b75c7cac1f29ea6ce572c4.png",
                        "size": 1,
                        "text": "[给心心]",
                        "type": 1
                      },
                      "orig_text": "[给心心]",
                      "text": "[给心心]",
                      "type": "RICH_TEXT_NODE_TYPE_EMOJI"
                    }
                  ],
                  "text": "[给心心]"
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
              "count": 248,
              "forbidden": false
            },
            "forward": {
              "count": 10,
              "forbidden": false
            },
            "like": {
              "count": 10276,
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
          "comment_id_str": "325813964",
          "comment_type": 11,
          "like_icon": {
            "action_url": "",
            "end_url": "",
            "id": 0,
            "start_url": ""
          },
          "rid_str": "325813964"
        },
        "id_str": "966695334756483089",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.375,
                "width": 1.375
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.787,
                        "width": 0.787
                      }
                    },
                    "layer_config": {
                      "is_critical": true,
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "placeholder": 6,
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1.375,
                        "width": 1.375
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "PENDENT_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i0.hdslb.com/bfs/garb/item/4f8f3f1f2d47f0dad84f66aa57acd4409ea46361.png"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.7560000000000001,
                        "axis_y": 0.7726666666666667,
                        "coordinate_pos": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.41666666666666663,
                        "width": 0.41666666666666663
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "background-color": "rgb(255,255,255)",
                              "border": "2px solid rgba(255,255,255,1)",
                              "borderRadius": "50%",
                              "boxSizing": "border-box"
                            }
                          }
                        },
                        "ICON_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "local": 1,
                          "src_type": 2
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  }
                ]
              },
              "layers": [
                {
                  "is_critical_group": true,
                  "layers": [
                    {
                      "general_spec": {
                        "pos_spec": {
                          "axis_x": 0.6875,
                          "axis_y": 0.6875,
                          "coordinate_pos": 2
                        },
                        "render_spec": {
                          "opacity": 1
                        },
                        "size_spec": {
                          "height": 0.787,
                          "width": 0.787
                        }
                      },
                      "layer_config": {
                        "is_critical": true,
                        "tags": {
                          "AVATAR_LAYER": {},
                          "GENERAL_CFG": {
                            "config_type": 1,
                            "general_config": {
                              "web_css_style": {
                                "borderRadius": "50%"
                              }
                            }
                          }
                        }
                      },
                      "resource": {
                        "res_image": {
                          "image_src": {
                            "placeholder": 6,
                            "remote": {
                              "bfs_style": "widget-layer-avatar",
                              "url": "https://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg"
                            },
                            "src_type": 1
                          }
                        },
                        "res_type": 3
                      },
                      "visible": true
                    }
                  ]
                },
                {
                  "layers": [
                    {
                      "general_spec": {
                        "pos_spec": {
                          "axis_x": 0.6875,
                          "axis_y": 0.6875,
                          "coordinate_pos": 2
                        },
                        "render_spec": {
                          "opacity": 1
                        },
                        "size_spec": {
                          "height": 1.375,
                          "width": 1.375
                        }
                      },
                      "layer_config": {
                        "tags": {
                          "PENDENT_LAYER": {}
                        }
                      },
                      "resource": {
                        "res_animation": {
                          "webp_src": {
                            "remote": {
                              "bfs_style": "widget-layer-avatar",
                              "url": "https://i0.hdslb.com/bfs/garb/item/fe0b83b53e2342b16646f6e7a9370d8a867decdb.webp"
                            },
                            "src_type": 1
                          }
                        },
                        "res_type": 4
                      },
                      "visible": true
                    }
                  ]
                },
                {
                  "layers": [
                    {
                      "general_spec": {
                        "pos_spec": {
                          "axis_x": 0.7560000000000001,
                          "axis_y": 0.7726666666666667,
                          "coordinate_pos": 1
                        },
                        "render_spec": {
                          "opacity": 1
                        },
                        "size_spec": {
                          "height": 0.41666666666666663,
                          "width": 0.41666666666666663
                        }
                      },
                      "layer_config": {
                        "tags": {
                          "GENERAL_CFG": {
                            "config_type": 1,
                            "general_config": {
                              "web_css_style": {
                                "background-color": "rgb(255,255,255)",
                                "border": "2px solid rgba(255,255,255,1)",
                                "borderRadius": "50%",
                                "boxSizing": "border-box"
                              }
                            }
                          },
                          "ICON_LAYER": {}
                        }
                      },
                      "resource": {
                        "res_image": {
                          "image_src": {
                            "local": 1,
                            "src_type": 2
                          }
                        },
                        "res_type": 3
                      },
                      "visible": true
                    }
                  ]
                }
              ],
              "mid": "293793435"
            },
            "decorate": {
              "card_url": "https://i0.hdslb.com/bfs/garb/item/c0cf2235089ed314d92f30efa855c9b5611fa2cd.png",
              "fan": {
                "color": "#07b6d5",
                "color_format": {
                  "colors": [
                    "#07b6d5FF",
                    "#07b6d5FF"
                  ],
                  "end_point": "0,100",
                  "gradients": [
                    0,
                    100
                  ],
                  "start_point": "0,0"
                },
                "is_fan": true,
                "num_prefix": "NO.",
                "num_str": "005638",
                "number": 5638
              },
              "id": 2513,
              "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=2513\u0026isdiy=0\u0026part=card\u0026from=post\u0026f_source=garb\u0026vmid=293793435\u0026native.theme=1\u0026navhide=1",
              "name": "初音未来粉丝专属",
              "type": 3
            },
            "face": "https://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg",
            "face_nft": false,
            "following": true,
            "jump_url": "//space.bilibili.com/293793435/dynamic",
            "label": "",
            "mid": 293793435,
            "name": "社会易姐QwQ",
            "official_verify": {
              "desc": "",
              "type": -1
            },
            "pendant": {
              "expire": 0,
              "image": "https://i0.hdslb.com/bfs/garb/item/4f8f3f1f2d47f0dad84f66aa57acd4409ea46361.png",
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/fe0b83b53e2342b16646f6e7a9370d8a867decdb.webp",
              "image_enhance_frame": "https://i0.hdslb.com/bfs/garb/item/127c507ec8448be30cf5f79500ecc6ef2fd32f2c.png",
              "n_pid": 2511,
              "name": "初音未来13周年",
              "pid": 2511
            },
            "pub_action": "",
            "pub_location_text": "",
            "pub_time": "12小时前",
            "pub_ts": 1723914697,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 1,
              "avatar_subscript_url": "",
              "due_date": 1739116800000,
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
                  "orig_text": "非常好冰箱贴，爱来自硬先生😋😋",
                  "text": "非常好冰箱贴，爱来自硬先生😋😋",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                },
                {
                  "orig_text": "@硬核拆解 ",
                  "rid": "427494870",
                  "text": "@硬核拆解 ",
                  "type": "RICH_TEXT_NODE_TYPE_AT"
                }
              ],
              "text": "非常好冰箱贴，爱来自硬先生😋😋@硬核拆解 "
            },
            "major": {
              "draw": {
                "id": 325813964,
                "items": [
                  {
                    "height": 1277,
                    "size": 98.36,
                    "src": "http://i0.hdslb.com/bfs/new_dyn/60d92e9e0d89a5394a2da69aba6f9710293793435.jpg",
                    "tags": [],
                    "width": 958
                  },
                  {
                    "height": 1080,
                    "size": 905.82,
                    "src": "http://i0.hdslb.com/bfs/new_dyn/0f9bff1938d824ce206a569d539455df293793435.jpg",
                    "tags": [],
                    "width": 1440
                  },
                  {
                    "height": 1080,
                    "size": 693.59,
                    "src": "http://i0.hdslb.com/bfs/new_dyn/ab3332061b793361ec08901ace1782db293793435.jpg",
                    "tags": [],
                    "width": 1440
                  },
                  {
                    "height": 1080,
                    "size": 988.15,
                    "src": "http://i0.hdslb.com/bfs/new_dyn/8e62512db6d04b381dae3814adb95d5e293793435.jpg",
                    "tags": [],
                    "width": 1440
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
              "count": 0,
              "forbidden": false
            },
            "forward": {
              "count": 0,
              "forbidden": false
            },
            "like": {
              "count": 11,
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
          "comment_id_str": "966692349750018048",
          "comment_type": 17,
          "like_icon": {
            "action_url": "",
            "end_url": "",
            "id": 0,
            "start_url": ""
          },
          "rid_str": "966692349750018048"
        },
        "id_str": "966692349750018048",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.375,
                "width": 1.375
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.787,
                        "width": 0.787
                      }
                    },
                    "layer_config": {
                      "is_critical": true,
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "placeholder": 6,
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i1.hdslb.com/bfs/face/78cdc5ba930ab171ebfe1ecc848cabcd4b0e0974.jpg"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1.375,
                        "width": 1.375
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "PENDENT_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i1.hdslb.com/bfs/garb/open/aafcb0ea3a0bc237634240f98bf93b3b6ac2d337.png"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.7560000000000001,
                        "axis_y": 0.7726666666666667,
                        "coordinate_pos": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.41666666666666663,
                        "width": 0.41666666666666663
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "background-color": "rgb(255,255,255)",
                              "border": "2px solid rgba(255,255,255,1)",
                              "borderRadius": "50%",
                              "boxSizing": "border-box"
                            }
                          }
                        },
                        "ICON_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "local": 3,
                          "src_type": 2
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  }
                ]
              },
              "mid": "36081646"
            },
            "decorate": {
              "card_url": "https://i0.hdslb.com/bfs/garb/item/684f6dc32decd32fe9db901b81b83b9a1fe39574.png",
              "fan": {
                "color": "",
                "color_format": null,
                "is_fan": false,
                "num_prefix": "",
                "num_str": "",
                "number": 0
              },
              "id": 49922,
              "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=49922\u0026isdiy=0\u0026part=card\u0026from=post\u0026f_source=garb\u0026vmid=36081646\u0026native.theme=1\u0026navhide=1",
              "name": "古色花香洛天依",
              "type": 1
            },
            "face": "https://i1.hdslb.com/bfs/face/78cdc5ba930ab171ebfe1ecc848cabcd4b0e0974.jpg",
            "face_nft": false,
            "following": true,
            "jump_url": "//space.bilibili.com/36081646/dynamic",
            "label": "",
            "mid": 36081646,
            "name": "洛天依",
            "official_verify": {
              "desc": "",
              "type": 0
            },
            "pendant": {
              "expire": 0,
              "image": "https://i1.hdslb.com/bfs/garb/open/aafcb0ea3a0bc237634240f98bf93b3b6ac2d337.png",
              "image_enhance": "https://i1.hdslb.com/bfs/garb/open/aafcb0ea3a0bc237634240f98bf93b3b6ac2d337.png",
              "image_enhance_frame": "",
              "n_pid": 1720437918001,
              "name": "洛天依心律共鸣头像框",
              "pid": -1843967695
            },
            "pub_action": "",
            "pub_location_text": "",
            "pub_time": "12小时前",
            "pub_ts": 1723914002,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 1,
              "avatar_subscript_url": "",
              "due_date": 1764777600000,
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
                  "orig_text": "恭喜",
                  "text": "恭喜",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                },
                {
                  "orig_text": "@从一到无穷大Infinity",
                  "rid": "697565874",
                  "text": "@从一到无穷大Infinity",
                  "type": "RICH_TEXT_NODE_TYPE_AT"
                },
                {
                  "orig_text": "@qwq啊啊啊啊啊噜",
                  "rid": "189799722",
                  "text": "@qwq啊啊啊啊啊噜",
                  "type": "RICH_TEXT_NODE_TYPE_AT"
                },
                {
                  "orig_text": "@有时名字不能取太长",
                  "rid": "3546388151405126",
                  "text": "@有时名字不能取太长",
                  "type": "RICH_TEXT_NODE_TYPE_AT"
                },
                {
                  "orig_text": "等5位同学中奖，已私信通知，详情请点击抽奖查看。",
                  "text": "等5位同学中奖，已私信通知，详情请点击抽奖查看。",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                }
              ],
              "text": "恭喜@从一到无穷大Infinity@qwq啊啊啊啊啊噜@有时名字不能取太长等5位同学中奖，已私信通知，详情请点击抽奖查看。"
            },
            "major": null,
            "topic": null
          },
          "module_interaction": {
            "items": [
              {
                "desc": {
                  "rich_text_nodes": [
                    {
                      "orig_text": "明ちゃん王：",
                      "rid": "1280664625",
                      "text": "明ちゃん王：",
                      "type": "RICH_TEXT_NODE_TYPE_AT"
                    },
                    {
                      "orig_text": "哇，非常不错呢，跟天依挺搭配的",
                      "text": "哇，非常不错呢，跟天依挺搭配的",
                      "type": "RICH_TEXT_NODE_TYPE_TEXT"
                    },
                    {
                      "emoji": {
                        "icon_url": "https://i0.hdslb.com/bfs/emote/63c9d1a31c0da745b61cdb35e0ecb28635675db2.png",
                        "size": 1,
                        "text": "[星星眼]",
                        "type": 1
                      },
                      "orig_text": "[星星眼]",
                      "text": "[星星眼]",
                      "type": "RICH_TEXT_NODE_TYPE_EMOJI"
                    }
                  ],
                  "text": "哇，非常不错呢，跟天依挺搭配的[星星眼]"
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
              "count": 88,
              "forbidden": false
            },
            "forward": {
              "count": 12,
              "forbidden": false
            },
            "like": {
              "count": 3088,
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
          "id_str": "939874290505875465",
          "modules": {
            "module_author": {
              "avatar": {
                "container_size": {
                  "height": 1.375,
                  "width": 1.375
                },
                "fallback_layers": {
                  "is_critical_group": true,
                  "layers": [
                    {
                      "general_spec": {
                        "pos_spec": {
                          "axis_x": 0.6875,
                          "axis_y": 0.6875,
                          "coordinate_pos": 2
                        },
                        "render_spec": {
                          "opacity": 1
                        },
                        "size_spec": {
                          "height": 0.787,
                          "width": 0.787
                        }
                      },
                      "layer_config": {
                        "is_critical": true,
                        "tags": {
                          "AVATAR_LAYER": {},
                          "GENERAL_CFG": {
                            "config_type": 1,
                            "general_config": {
                              "web_css_style": {
                                "borderRadius": "50%"
                              }
                            }
                          }
                        }
                      },
                      "resource": {
                        "res_image": {
                          "image_src": {
                            "placeholder": 6,
                            "remote": {
                              "bfs_style": "widget-layer-avatar",
                              "url": "https://i1.hdslb.com/bfs/face/78cdc5ba930ab171ebfe1ecc848cabcd4b0e0974.jpg"
                            },
                            "src_type": 1
                          }
                        },
                        "res_type": 3
                      },
                      "visible": true
                    },
                    {
                      "general_spec": {
                        "pos_spec": {
                          "axis_x": 0.6875,
                          "axis_y": 0.6875,
                          "coordinate_pos": 2
                        },
                        "render_spec": {
                          "opacity": 1
                        },
                        "size_spec": {
                          "height": 1.375,
                          "width": 1.375
                        }
                      },
                      "layer_config": {
                        "tags": {
                          "PENDENT_LAYER": {}
                        }
                      },
                      "resource": {
                        "res_image": {
                          "image_src": {
                            "remote": {
                              "bfs_style": "widget-layer-avatar",
                              "url": "https://i1.hdslb.com/bfs/garb/open/aafcb0ea3a0bc237634240f98bf93b3b6ac2d337.png"
                            },
                            "src_type": 1
                          }
                        },
                        "res_type": 3
                      },
                      "visible": true
                    },
                    {
                      "general_spec": {
                        "pos_spec": {
                          "axis_x": 0.7560000000000001,
                          "axis_y": 0.7726666666666667,
                          "coordinate_pos": 1
                        },
                        "render_spec": {
                          "opacity": 1
                        },
                        "size_spec": {
                          "height": 0.41666666666666663,
                          "width": 0.41666666666666663
                        }
                      },
                      "layer_config": {
                        "tags": {
                          "GENERAL_CFG": {
                            "config_type": 1,
                            "general_config": {
                              "web_css_style": {
                                "background-color": "rgb(255,255,255)",
                                "border": "2px solid rgba(255,255,255,1)",
                                "borderRadius": "50%",
                                "boxSizing": "border-box"
                              }
                            }
                          },
                          "ICON_LAYER": {}
                        }
                      },
                      "resource": {
                        "res_image": {
                          "image_src": {
                            "local": 3,
                            "src_type": 2
                          }
                        },
                        "res_type": 3
                      },
                      "visible": true
                    }
                  ]
                },
                "mid": "36081646"
              },
              "decorate": {
                "card_url": "https://i0.hdslb.com/bfs/garb/item/684f6dc32decd32fe9db901b81b83b9a1fe39574.png",
                "fan": {
                  "color": "",
                  "color_format": null,
                  "is_fan": false,
                  "num_prefix": "",
                  "num_str": "",
                  "number": 0
                },
                "id": 49922,
                "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=49922\u0026isdiy=0\u0026part=card\u0026from=post\u0026f_source=garb\u0026vmid=36081646\u0026native.theme=1\u0026navhide=1",
                "name": "古色花香洛天依",
                "type": 1
              },
              "face": "https://i1.hdslb.com/bfs/face/78cdc5ba930ab171ebfe1ecc848cabcd4b0e0974.jpg",
              "face_nft": false,
              "following": true,
              "jump_url": "//space.bilibili.com/36081646/dynamic",
              "label": "",
              "mid": 36081646,
              "name": "洛天依",
              "official_verify": {
                "desc": "",
                "type": 0
              },
              "pendant": {
                "expire": 0,
                "image": "https://i1.hdslb.com/bfs/garb/open/aafcb0ea3a0bc237634240f98bf93b3b6ac2d337.png",
                "image_enhance": "https://i1.hdslb.com/bfs/garb/open/aafcb0ea3a0bc237634240f98bf93b3b6ac2d337.png",
                "image_enhance_frame": "",
                "n_pid": 1720437918001,
                "name": "洛天依心律共鸣头像框",
                "pid": -1843967695
              },
              "pub_action": "",
              "pub_time": "",
              "pub_ts": 1717669936,
              "type": "AUTHOR_TYPE_NORMAL",
              "vip": {
                "avatar_subscript": 1,
                "avatar_subscript_url": "",
                "due_date": 1764777600000,
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
                "goods": {
                  "head_icon": "",
                  "head_text": "UP主的推荐",
                  "items": [
                    {
                      "brief": "",
                      "cover": "https://i0.hdslb.com/bfs/mall/mall/ef/9d/2cb00b3649bcb232f62b3169be95407d.png",
                      "id": "901140704120020992",
                      "jump_desc": "去看看",
                      "jump_url": "https://mall.bilibili.com/neul-next/detailuniversal/detail.html?isMerchant=1\u0026page=detailuniversal_detail\u0026saleType=0\u0026itemsId=10406556\u0026loadingShow=1\u0026noTitleBar=1\u0026msource=cps_Mdynamic_36081646\u0026from=\u0026contentId=\u0026track_id=__BGMT__",
                      "name": "天羽川 洛天依 短袖水手服纯色裙长短袜套装",
                      "price": "¥49"
                    }
                  ],
                  "jump_url": ""
                },
                "type": "ADDITIONAL_TYPE_GOODS"
              },
              "desc": {
                "rich_text_nodes": [
                  {
                    "orig_text": "​互动抽奖",
                    "rid": "301330",
                    "text": "​互动抽奖",
                    "type": "RICH_TEXT_NODE_TYPE_LOTTERY"
                  },
                  {
                    "orig_text": "洛天依X",
                    "text": "洛天依X",
                    "type": "RICH_TEXT_NODE_TYPE_TEXT"
                  },
                  {
                    "orig_text": "@天羽川JK ",
                    "rid": "394187581",
                    "text": "@天羽川JK ",
                    "type": "RICH_TEXT_NODE_TYPE_AT"
                  },
                  {
                    "orig_text": "联名水手服\u0026长短袜套装 新品预售即将开启啦！\n转发关注天依，揪5位小伙伴送出联名款长短袜1双～",
                    "text": "联名水手服\u0026长短袜套装 新品预售即将开启啦！\n转发关注天依，揪5位小伙伴送出联名款长短袜1双～",
                    "type": "RICH_TEXT_NODE_TYPE_TEXT"
                  },
                  {
                    "emoji": {
                      "icon_url": "http://i0.hdslb.com/bfs/emote/9826fb4f77944387767a37552143fbec40159fa5.png",
                      "size": 2,
                      "text": "[洛天依_礼物]",
                      "type": 3
                    },
                    "orig_text": "[洛天依_礼物]",
                    "text": "[洛天依_礼物]",
                    "type": "RICH_TEXT_NODE_TYPE_EMOJI"
                  },
                  {
                    "orig_text": "\n\n❀联名服饰\n-洛天依联名款水手服\n-洛天依还原款长短袜\n\n❀预售时间\n6月8日20:00 起\n\n日常\u0026cos皆宜，大家有没有发现结合了天依的哪些元素呀？",
                    "text": "\n\n❀联名服饰\n-洛天依联名款水手服\n-洛天依还原款长短袜\n\n❀预售时间\n6月8日20:00 起\n\n日常\u0026cos皆宜，大家有没有发现结合了天依的哪些元素呀？",
                    "type": "RICH_TEXT_NODE_TYPE_TEXT"
                  },
                  {
                    "emoji": {
                      "icon_url": "https://i0.hdslb.com/bfs/emote/8034b3cb55370d19b1683eb38e7747c5c6c5dba6.png",
                      "size": 2,
                      "text": "[洛天依蝶变_星星眼]",
                      "type": 3
                    },
                    "orig_text": "[洛天依蝶变_星星眼]",
                    "text": "[洛天依蝶变_星星眼]",
                    "type": "RICH_TEXT_NODE_TYPE_EMOJI"
                  },
                  {
                    "orig_text": "\n",
                    "text": "\n",
                    "type": "RICH_TEXT_NODE_TYPE_TEXT"
                  }
                ],
                "text": "​互动抽奖洛天依X@天羽川JK 联名水手服\u0026长短袜套装 新品预售即将开启啦！\n转发关注天依，揪5位小伙伴送出联名款长短袜1双～[洛天依_礼物]\n\n❀联名服饰\n-洛天依联名款水手服\n-洛天依还原款长短袜\n\n❀预售时间\n6月8日20:00 起\n\n日常\u0026cos皆宜，大家有没有发现结合了天依的哪些元素呀？[洛天依蝶变_星星眼]\n"
              },
              "major": {
                "draw": {
                  "id": 318324614,
                  "items": [
                    {
                      "height": 1280,
                      "size": 662.59,
                      "src": "http://i0.hdslb.com/bfs/new_dyn/1f23b61786eadb8c3e3f4c137730715036081646.jpg",
                      "tags": [],
                      "width": 904
                    },
                    {
                      "height": 1280,
                      "size": 614.83,
                      "src": "http://i0.hdslb.com/bfs/new_dyn/7d679216308bb7c65aeba38b4eafdd8936081646.jpg",
                      "tags": [],
                      "width": 904
                    }
                  ]
                },
                "type": "MAJOR_TYPE_DRAW"
              },
              "topic": {
                "id": 1156147,
                "jump_url": "https://m.bilibili.com/topic-detail?topic_id=1156147\u0026topic_name=%E5%A4%A9%E4%BE%9D%E7%9A%84%E5%91%A8%E8%BE%B9",
                "name": "天依的周边"
              }
            }
          },
          "type": "DYNAMIC_TYPE_DRAW",
          "visible": true
        },
        "type": "DYNAMIC_TYPE_FORWARD",
        "visible": true
      },
      {
        "basic": {
          "comment_id_str": "325807840",
          "comment_type": 11,
          "like_icon": {
            "action_url": "",
            "end_url": "",
            "id": 0,
            "start_url": ""
          },
          "rid_str": "325807840"
        },
        "id_str": "966677390370537527",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.35,
                "width": 1.35
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.675,
                        "axis_y": 0.675,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1,
                        "width": 1
                      }
                    },
                    "layer_config": {
                      "is_critical": true,
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "placeholder": 6,
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i1.hdslb.com/bfs/face/2b9ee4a9c99f1006f3c800c1317f7850ad6f3d0d.jpg"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.8000000000000002,
                        "axis_y": 0.8000000000000002,
                        "coordinate_pos": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.41666666666666663,
                        "width": 0.41666666666666663
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "background-color": "rgb(255,255,255)",
                              "border": "2px solid rgba(255,255,255,1)",
                              "borderRadius": "50%",
                              "boxSizing": "border-box"
                            }
                          }
                        },
                        "ICON_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "local": 4,
                          "src_type": 2
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  }
                ]
              },
              "mid": "485703766"
            },
            "face": "https://i1.hdslb.com/bfs/face/2b9ee4a9c99f1006f3c800c1317f7850ad6f3d0d.jpg",
            "face_nft": false,
            "following": true,
            "jump_url": "//space.bilibili.com/485703766/dynamic",
            "label": "",
            "mid": 485703766,
            "name": "英伟达GeForce",
            "official_verify": {
              "desc": "",
              "type": 1
            },
            "pendant": {
              "expire": 0,
              "image": "",
              "image_enhance": "",
              "image_enhance_frame": "",
              "n_pid": 0,
              "name": "",
              "pid": 0
            },
            "pub_action": "",
            "pub_location_text": "",
            "pub_time": "13小时前",
            "pub_ts": 1723910520,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 1,
              "avatar_subscript_url": "",
              "due_date": 2000563200000,
              "label": {
                "bg_color": "#FB7299",
                "bg_style": 1,
                "border_color": "",
                "img_label_uri_hans": "",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/adb599797dd171e2d3d6d012f448b49679258344.png",
                "img_label_uri_hant": "",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/sGu57N6pgK.png",
                "label_theme": "ten_annual_vip",
                "path": "",
                "text": "十年大会员",
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
                  "orig_text": "直面天命，还有 2 天！\nRTX. ON！\n\n投稿来自于：Bilibili",
                  "text": "直面天命，还有 2 天！\nRTX. ON！\n\n投稿来自于：Bilibili",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                },
                {
                  "orig_text": "@祗殁",
                  "rid": "12299496",
                  "text": "@祗殁",
                  "type": "RICH_TEXT_NODE_TYPE_AT"
                }
              ],
              "text": "直面天命，还有 2 天！\nRTX. ON！\n\n投稿来自于：Bilibili@祗殁"
            },
            "major": {
              "draw": {
                "id": 325807840,
                "items": [
                  {
                    "height": 1073,
                    "size": 66.29785,
                    "src": "https://i0.hdslb.com/bfs/new_dyn/b47b271135c7c496923d76c6b794e596485703766.png",
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
              "count": 105,
              "forbidden": false
            },
            "forward": {
              "count": 7,
              "forbidden": false
            },
            "like": {
              "count": 872,
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
          "comment_id_str": "1606450518",
          "comment_type": 1,
          "like_icon": {
            "action_url": "",
            "end_url": "",
            "id": 0,
            "start_url": ""
          },
          "rid_str": "1606450518"
        },
        "id_str": "966647978674618373",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.35,
                "width": 1.35
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.675,
                        "axis_y": 0.675,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1,
                        "width": 1
                      }
                    },
                    "layer_config": {
                      "is_critical": true,
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "placeholder": 6,
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i1.hdslb.com/bfs/face/bb23fb77a033759a145f8eda7b5e3a15386f637c.jpg"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.8000000000000002,
                        "axis_y": 0.8000000000000002,
                        "coordinate_pos": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.41666666666666663,
                        "width": 0.41666666666666663
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "background-color": "rgb(255,255,255)",
                              "border": "2px solid rgba(255,255,255,1)",
                              "borderRadius": "50%",
                              "boxSizing": "border-box"
                            }
                          }
                        },
                        "ICON_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "local": 3,
                          "src_type": 2
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  }
                ]
              },
              "mid": "1503187"
            },
            "decorate": {
              "card_url": "https://i0.hdslb.com/bfs/archive/e495de36cab75f9a610fb6f2d0ba29a87b794cc6.png",
              "fan": {
                "color": "#BFC8D2",
                "color_format": {
                  "colors": [
                    "#B8C7D0FF",
                    "#A2A7B0FF"
                  ],
                  "end_point": "100,100",
                  "gradients": [
                    0,
                    100
                  ],
                  "start_point": "0,0"
                },
                "is_fan": true,
                "num_prefix": "NO.",
                "num_str": "002484",
                "number": 2484
              },
              "id": 66898,
              "jump_url": "https://www.bilibili.com/h5/mall/digital-card/home?act_id=108\u0026from=post\u0026f_source=garb\u0026-Abrowser=live\u0026hybrid_set_header=2\u0026navhide=1\u0026anchor_task=1",
              "name": "BLG 信念干杯勋章",
              "type": 3
            },
            "face": "https://i1.hdslb.com/bfs/face/bb23fb77a033759a145f8eda7b5e3a15386f637c.jpg",
            "face_nft": false,
            "following": true,
            "jump_url": "//space.bilibili.com/1503187/dynamic",
            "label": "",
            "mid": 1503187,
            "name": "和谐号舰长",
            "official_verify": {
              "desc": "",
              "type": 0
            },
            "pendant": {
              "expire": 0,
              "image": "",
              "image_enhance": "",
              "image_enhance_frame": "",
              "n_pid": 0,
              "name": "",
              "pid": 0
            },
            "pub_action": "投稿了视频",
            "pub_location_text": "",
            "pub_time": "昨天 22:07",
            "pub_ts": 1723903670,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 1,
              "avatar_subscript_url": "",
              "due_date": 1732204800000,
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
                "aid": "1606450518",
                "badge": {
                  "bg_color": "#FB7299",
                  "color": "#FFFFFF",
                  "icon_url": null,
                  "text": "投稿视频"
                },
                "bvid": "BV152421Z7bV",
                "cover": "http://i1.hdslb.com/bfs/archive/e87786447779ff1a4fb2d941a3321f9750a65300.jpg",
                "desc": "多来点这样的更新，太快乐了",
                "disable_preview": 0,
                "duration_text": "03:39",
                "jump_url": "//www.bilibili.com/video/BV152421Z7bV/",
                "stat": {
                  "danmaku": "406",
                  "play": "6.6万"
                },
                "title": "官方：矿车怎么就不能是飞船？",
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
                      "orig_text": "吉吉国民开水儿：",
                      "rid": "43514654",
                      "text": "吉吉国民开水儿：",
                      "type": "RICH_TEXT_NODE_TYPE_AT"
                    },
                    {
                      "orig_text": "致敬传奇宰人航空大师张泰玩",
                      "text": "致敬传奇宰人航空大师张泰玩",
                      "type": "RICH_TEXT_NODE_TYPE_TEXT"
                    }
                  ],
                  "text": "致敬传奇宰人航空大师张泰玩"
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
              "count": 218,
              "forbidden": false
            },
            "forward": {
              "count": 15,
              "forbidden": false
            },
            "like": {
              "count": 5694,
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
          "comment_id_str": "1506427569",
          "comment_type": 1,
          "like_icon": {
            "action_url": "",
            "end_url": "",
            "id": 0,
            "start_url": ""
          },
          "rid_str": "1506427569"
        },
        "id_str": "966629209415876628",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.35,
                "width": 1.35
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.675,
                        "axis_y": 0.675,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1,
                        "width": 1
                      }
                    },
                    "layer_config": {
                      "is_critical": true,
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "placeholder": 6,
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i0.hdslb.com/bfs/face/978ea07f22e54c2e62f01def8e815b59adacc5d0.jpg"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.8000000000000002,
                        "axis_y": 0.8000000000000002,
                        "coordinate_pos": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.41666666666666663,
                        "width": 0.41666666666666663
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "background-color": "rgb(255,255,255)",
                              "border": "2px solid rgba(255,255,255,1)",
                              "borderRadius": "50%",
                              "boxSizing": "border-box"
                            }
                          }
                        },
                        "ICON_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "local": 4,
                          "src_type": 2
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  }
                ]
              },
              "mid": "407045223"
            },
            "decorate": {
              "card_url": "https://i0.hdslb.com/bfs/vip/a9e3d993c7a15e88ce0bf714a142f7d2b44121e2.png",
              "fan": {
                "color": "",
                "color_format": null,
                "is_fan": false,
                "num_prefix": "",
                "num_str": "",
                "number": 0
              },
              "id": 28,
              "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=28\u0026isdiy=0\u0026part=card\u0026from=post\u0026f_source=garb\u0026vmid=407045223\u0026native.theme=1\u0026navhide=1",
              "name": "2233娘",
              "type": 1
            },
            "face": "https://i0.hdslb.com/bfs/face/978ea07f22e54c2e62f01def8e815b59adacc5d0.jpg",
            "face_nft": false,
            "following": true,
            "jump_url": "//space.bilibili.com/407045223/dynamic",
            "label": "",
            "mid": 407045223,
            "name": "二次元的中科院物理所",
            "official_verify": {
              "desc": "",
              "type": 1
            },
            "pendant": {
              "expire": 0,
              "image": "",
              "image_enhance": "",
              "image_enhance_frame": "",
              "n_pid": 0,
              "name": "",
              "pid": 0
            },
            "pub_action": "投稿了视频",
            "pub_location_text": "",
            "pub_time": "昨天 20:55",
            "pub_ts": 1723899301,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 1,
              "avatar_subscript_url": "",
              "due_date": 1745769600000,
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
                  "orig_text": "光是什么？光是我们看到的五彩斑斓的世界，光是自然界能量的来源，光是一种电磁波。我们利用光可以做些什么？如何收集太阳的能量？如何产生光？让我们在本集课程中寻找这些问题的答案~ 错过直播的小伙伴可以来这里补课~",
                  "text": "光是什么？光是我们看到的五彩斑斓的世界，光是自然界能量的来源，光是一种电磁波。我们利用光可以做些什么？如何收集太阳的能量？如何产生光？让我们在本集课程中寻找这些问题的答案~ 错过直播的小伙伴可以来这里补课~",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                }
              ],
              "text": "光是什么？光是我们看到的五彩斑斓的世界，光是自然界能量的来源，光是一种电磁波。我们利用光可以做些什么？如何收集太阳的能量？如何产生光？让我们在本集课程中寻找这些问题的答案~ 错过直播的小伙伴可以来这里补课~"
            },
            "major": {
              "archive": {
                "aid": "1506427569",
                "badge": {
                  "bg_color": "#FB7299",
                  "color": "#FFFFFF",
                  "icon_url": null,
                  "text": "投稿视频"
                },
                "bvid": "BV1uS42197b5",
                "cover": "http://i1.hdslb.com/bfs/archive/e13db3349cdc91a00041be9730bbbe42c3e8df55.jpg",
                "desc": "光是什么？光是我们看到的五彩斑斓的世界，光是自然界能量的来源，光是一种电磁波。我们利用光可以做些什么？如何收集太阳的能量？如何产生光？让我们在本集课程中寻找这些问题的答案~",
                "disable_preview": 0,
                "duration_text": "44:45",
                "jump_url": "//www.bilibili.com/video/BV1uS42197b5/",
                "stat": {
                  "danmaku": "1",
                  "play": "3364"
                },
                "title": "光照下多姿多彩的世界——光化学和我们的生活【中国科学院科学公开课S06E15】",
                "type": 1
              },
              "type": "MAJOR_TYPE_ARCHIVE"
            },
            "topic": {
              "id": 1073121,
              "jump_url": "https://m.bilibili.com/topic-detail?topic_id=1073121\u0026topic_name=%E4%B8%AD%E5%9B%BD%E7%A7%91%E5%AD%A6%E9%99%A2%E7%A7%91%E5%AD%A6%E5%85%AC%E5%BC%80%E8%AF%BE",
              "name": "中国科学院科学公开课"
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
              "count": 3,
              "forbidden": false
            },
            "forward": {
              "count": 2,
              "forbidden": false
            },
            "like": {
              "count": 741,
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
          "comment_id_str": "325765582",
          "comment_type": 11,
          "like_icon": {
            "action_url": "",
            "end_url": "",
            "id": 0,
            "start_url": ""
          },
          "rid_str": "325765582"
        },
        "id_str": "966583356402696224",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.35,
                "width": 1.35
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.675,
                        "axis_y": 0.675,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1,
                        "width": 1
                      }
                    },
                    "layer_config": {
                      "is_critical": true,
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "placeholder": 6,
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i0.hdslb.com/bfs/face/c1733474892caa45952b2c09a89323157df7129a.jpg"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.8000000000000002,
                        "axis_y": 0.8000000000000002,
                        "coordinate_pos": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.41666666666666663,
                        "width": 0.41666666666666663
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "background-color": "rgb(255,255,255)",
                              "border": "2px solid rgba(255,255,255,1)",
                              "borderRadius": "50%",
                              "boxSizing": "border-box"
                            }
                          }
                        },
                        "ICON_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "local": 3,
                          "src_type": 2
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  }
                ]
              },
              "mid": "946974"
            },
            "face": "https://i0.hdslb.com/bfs/face/c1733474892caa45952b2c09a89323157df7129a.jpg",
            "face_nft": false,
            "following": true,
            "jump_url": "//space.bilibili.com/946974/dynamic",
            "label": "",
            "mid": 946974,
            "name": "影视飓风",
            "official_verify": {
              "desc": "",
              "type": 0
            },
            "pendant": {
              "expire": 0,
              "image": "",
              "image_enhance": "",
              "image_enhance_frame": "",
              "n_pid": 0,
              "name": "",
              "pid": 0
            },
            "pub_action": "",
            "pub_location_text": "",
            "pub_time": "昨天 17:57",
            "pub_ts": 1723888625,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 1,
              "avatar_subscript_url": "",
              "due_date": 1975248000000,
              "label": {
                "bg_color": "#FB7299",
                "bg_style": 1,
                "border_color": "",
                "img_label_uri_hans": "https://i0.hdslb.com/bfs/activity-plat/static/20220608/e369244d0b14644f5e1a06431e22a4d5/wltavwHAkL.gif",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/802418ff03911645648b63aa193ba67997b5a0bc.png",
                "img_label_uri_hant": "",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/8u7iRTPE7N.png",
                "label_theme": "ten_annual_vip",
                "path": "",
                "text": "十年大会员",
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
              "reserve": {
                "button": {
                  "check": {
                    "icon_url": "",
                    "text": "已预约"
                  },
                  "status": 1,
                  "type": 2,
                  "uncheck": {
                    "icon_url": "https://i0.hdslb.com/bfs/album/1d6af68e116985828780dd843ef435ccd6307e63.png",
                    "text": "预约"
                  }
                },
                "desc1": {
                  "style": 0,
                  "text": "今天 20:00 直播"
                },
                "desc2": {
                  "style": 0,
                  "text": "4153人预约",
                  "visible": true
                },
                "jump_url": "",
                "reserve_total": 4153,
                "rid": 4003487,
                "state": 0,
                "stype": 2,
                "title": "直播预约：飓风商店夏促来了！",
                "up_mid": 946974
              },
              "type": "ADDITIONAL_TYPE_RESERVE"
            },
            "desc": {
              "rich_text_nodes": [
                {
                  "orig_text": "飓风商店夏季活动来啦！\n8月18日周日晚20:00，直播间每15分钟天选抽送【热升华键帽】！\n\n👇新品看这边\n呼声超高的mini托特挂件、防泼水拎包、新版车贴，首发好价！\n👇福利看这边\n经典热销款全场9折，夏秋两季可穿，硬件同享折扣！\n\n总之，记得预约！",
                  "text": "飓风商店夏季活动来啦！\n8月18日周日晚20:00，直播间每15分钟天选抽送【热升华键帽】！\n\n👇新品看这边\n呼声超高的mini托特挂件、防泼水拎包、新版车贴，首发好价！\n👇福利看这边\n经典热销款全场9折，夏秋两季可穿，硬件同享折扣！\n\n总之，记得预约！",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                }
              ],
              "text": "飓风商店夏季活动来啦！\n8月18日周日晚20:00，直播间每15分钟天选抽送【热升华键帽】！\n\n👇新品看这边\n呼声超高的mini托特挂件、防泼水拎包、新版车贴，首发好价！\n👇福利看这边\n经典热销款全场9折，夏秋两季可穿，硬件同享折扣！\n\n总之，记得预约！"
            },
            "major": {
              "draw": {
                "id": 325765582,
                "items": [
                  {
                    "height": 9829,
                    "size": 5198.785,
                    "src": "http://i0.hdslb.com/bfs/new_dyn/9d690134c84c03f6bacf83cf4d21bd73946974.jpg",
                    "tags": [],
                    "width": 2251
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
              "count": 3104,
              "forbidden": false
            },
            "forward": {
              "count": 154,
              "forbidden": false
            },
            "like": {
              "count": 4703,
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
          "comment_id_str": "325753910",
          "comment_type": 11,
          "like_icon": {
            "action_url": "",
            "end_url": "",
            "id": 0,
            "start_url": ""
          },
          "rid_str": "325753910"
        },
        "id_str": "966552037496979456",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.375,
                "width": 1.375
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.787,
                        "width": 0.787
                      }
                    },
                    "layer_config": {
                      "is_critical": true,
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      }
                    },
                    "resource": {
                      "res_animation": {
                        "webp_src": {
                          "placeholder": 6,
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 4
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1.375,
                        "width": 1.375
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "PENDENT_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i0.hdslb.com/bfs/garb/item/0dcf03aa499a64524fe25871d26d95f49f880928.png"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.7560000000000001,
                        "axis_y": 0.7726666666666667,
                        "coordinate_pos": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.41666666666666663,
                        "width": 0.41666666666666663
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "background-color": "rgb(255,255,255)",
                              "border": "2px solid rgba(255,255,255,1)",
                              "borderRadius": "50%",
                              "boxSizing": "border-box"
                            }
                          }
                        },
                        "ICON_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "local": 3,
                          "src_type": 2
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  }
                ]
              },
              "mid": "686127"
            },
            "face": "https://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp",
            "face_nft": false,
            "following": true,
            "jump_url": "//space.bilibili.com/686127/dynamic",
            "label": "",
            "mid": 686127,
            "name": "籽岷",
            "official_verify": {
              "desc": "",
              "type": 0
            },
            "pendant": {
              "expire": 0,
              "image": "https://i0.hdslb.com/bfs/garb/item/0dcf03aa499a64524fe25871d26d95f49f880928.png",
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/0dcf03aa499a64524fe25871d26d95f49f880928.png",
              "image_enhance_frame": "",
              "n_pid": 2066,
              "name": "百年大会员",
              "pid": 2066
            },
            "pub_action": "",
            "pub_location_text": "",
            "pub_time": "昨天 15:55",
            "pub_ts": 1723881333,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 1,
              "avatar_subscript_url": "",
              "due_date": 4845196800000,
              "label": {
                "bg_color": "#FB7299",
                "bg_style": 1,
                "border_color": "",
                "img_label_uri_hans": "",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/c16005a5b39164b3536cbd45618a5edd597a1c51.png",
                "img_label_uri_hant": "",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/Pzrd8zmpQD.png",
                "label_theme": "hundred_annual_vip",
                "path": "",
                "text": "百年大会员",
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
              "type": "ADDITIONAL_TYPE_UPOWER_LOTTERY",
              "upower_lottery": {
                "button": {
                  "jump_style": {
                    "icon_url": "",
                    "text": "6元充电"
                  },
                  "jump_url": "https://www.bilibili.com/h5/upower/index?mid=686127\u0026default_level=10\u0026levels=10\u0026navhide=1\u0026lotteryId=313280\u0026businessId=966552037496979456\u0026prePage=lotteryCard",
                  "type": 1
                },
                "desc": {
                  "jump_url": "https://www.bilibili.com/h5/lottery/result?business_id=966552037496979456\u0026business_type=12",
                  "style": 1,
                  "text": "【籽岷定制手偶】*10份"
                },
                "hint": {
                  "style": 0,
                  "text": "加入当前UP主的「6元档包月充电」即可参与"
                },
                "jump_url": "https://www.bilibili.com/h5/lottery/result?business_id=966552037496979456\u0026business_type=12",
                "rid": 313280,
                "state": 0,
                "title": "石粒专属抽奖",
                "up_mid": 686127,
                "upower_action_state": 2,
                "upower_level": 10
              }
            },
            "desc": {
              "rich_text_nodes": [
                {
                  "emoji": {
                    "icon_url": "https://i0.hdslb.com/bfs/garb/ebeae1235fa9397e6e5598ce1e5e2955bb345a8b.png",
                    "size": 2,
                    "text": "[UPOWER_686127_闪亮登场]",
                    "type": 11
                  },
                  "orig_text": "[UPOWER_686127_闪亮登场]",
                  "text": "[UPOWER_686127_闪亮登场]",
                  "type": "RICH_TEXT_NODE_TYPE_EMOJI"
                },
                {
                  "orig_text": "今天给大家奉上一波新福利，抽10人（籽岷定制手偶）~\n感谢一直为我包月充电的观众们~\n活动开奖时间为8月21日23点59分，大家快来抽奖吧~",
                  "text": "今天给大家奉上一波新福利，抽10人（籽岷定制手偶）~\n感谢一直为我包月充电的观众们~\n活动开奖时间为8月21日23点59分，大家快来抽奖吧~",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                }
              ],
              "text": "[UPOWER_686127_闪亮登场]今天给大家奉上一波新福利，抽10人（籽岷定制手偶）~\n感谢一直为我包月充电的观众们~\n活动开奖时间为8月21日23点59分，大家快来抽奖吧~"
            },
            "major": {
              "draw": {
                "id": 325753910,
                "items": [
                  {
                    "height": 800,
                    "size": 596.8096,
                    "src": "http://i0.hdslb.com/bfs/new_dyn/1b03b7888b105765d985f3093e5d6e4a686127.png",
                    "tags": [],
                    "width": 800
                  },
                  {
                    "height": 800,
                    "size": 393.75098,
                    "src": "http://i0.hdslb.com/bfs/new_dyn/b69ee39531bf8864471ec9fbc7de4402686127.png",
                    "tags": [],
                    "width": 800
                  },
                  {
                    "height": 800,
                    "size": 364.8711,
                    "src": "http://i0.hdslb.com/bfs/new_dyn/0c3fb5268abe60023b0053902bccde66686127.png",
                    "tags": [],
                    "width": 800
                  },
                  {
                    "height": 800,
                    "size": 198.65234,
                    "src": "http://i0.hdslb.com/bfs/new_dyn/693a40f83d2ac6a4952c9541365e1265686127.png",
                    "tags": [],
                    "width": 800
                  }
                ]
              },
              "type": "MAJOR_TYPE_DRAW"
            },
            "topic": {
              "id": 1006239,
              "jump_url": "https://m.bilibili.com/topic-detail?topic_id=1006239\u0026topic_name=%E7%B1%BD%E5%B2%B7%E5%93%81%E9%89%B4%E5%9B%A2",
              "name": "籽岷品鉴团"
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
              "count": 28,
              "forbidden": false
            },
            "forward": {
              "count": 2,
              "forbidden": false
            },
            "like": {
              "count": 2686,
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
          "comment_id_str": "1456450441",
          "comment_type": 1,
          "like_icon": {
            "action_url": "",
            "end_url": "",
            "id": 0,
            "start_url": ""
          },
          "rid_str": "1456450441"
        },
        "id_str": "966513421411418114",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.35,
                "width": 1.35
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.675,
                        "axis_y": 0.675,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1,
                        "width": 1
                      }
                    },
                    "layer_config": {
                      "is_critical": true,
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "placeholder": 6,
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i1.hdslb.com/bfs/face/94183796acd85f2e80f3dca740bc1c3d5cae6410.jpg"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.8000000000000002,
                        "axis_y": 0.8000000000000002,
                        "coordinate_pos": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.41666666666666663,
                        "width": 0.41666666666666663
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "background-color": "rgb(255,255,255)",
                              "border": "2px solid rgba(255,255,255,1)",
                              "borderRadius": "50%",
                              "boxSizing": "border-box"
                            }
                          }
                        },
                        "ICON_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "local": 1,
                          "src_type": 2
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  }
                ]
              },
              "mid": "3493131246897478"
            },
            "face": "https://i1.hdslb.com/bfs/face/94183796acd85f2e80f3dca740bc1c3d5cae6410.jpg",
            "face_nft": false,
            "following": true,
            "jump_url": "//space.bilibili.com/3493131246897478/dynamic",
            "label": "",
            "mid": 3493131246897478,
            "name": "电解碳酸钠",
            "official_verify": {
              "desc": "",
              "type": -1
            },
            "pendant": {
              "expire": 0,
              "image": "",
              "image_enhance": "",
              "image_enhance_frame": "",
              "n_pid": 0,
              "name": "",
              "pid": 0
            },
            "pub_action": "投稿了视频",
            "pub_location_text": "",
            "pub_time": "昨天 13:25",
            "pub_ts": 1723872342,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 1,
              "avatar_subscript_url": "",
              "due_date": 1744732800000,
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
                  "orig_text": "给脚专用的“按键” 我觉得他不应该这么贵",
                  "text": "给脚专用的“按键” 我觉得他不应该这么贵",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                }
              ],
              "text": "给脚专用的“按键” 我觉得他不应该这么贵"
            },
            "major": {
              "archive": {
                "aid": "1456450441",
                "badge": {
                  "bg_color": "#FB7299",
                  "color": "#FFFFFF",
                  "icon_url": null,
                  "text": "投稿视频"
                },
                "bvid": "BV1Yi421a7FC",
                "cover": "http://i1.hdslb.com/bfs/archive/b56700e0a1d28ecff2ff135a7cc51e9b09cace79.jpg",
                "desc": "用到的配件：\n·带有热插拔轴体功能的任何全新\u0026二手键盘 只要功能正常即可\n·追求极致性价比的 可以直接买剪线键盘进行改造\n·TFS-1脚踏脚踩开关（我买的3.2一个）\n要注意这些脚踏开关有可能是3线 分为常闭和常开\n对于这个型号的开关 我接的是红线+白线 为踩下触发\n·焊油（推荐针管式单手操作）",
                "disable_preview": 0,
                "duration_text": "06:01",
                "jump_url": "//www.bilibili.com/video/BV1Yi421a7FC/",
                "stat": {
                  "danmaku": "149",
                  "play": "2.7万"
                },
                "title": "商家别看！脚踩键盘DIY超值方案？市场售价凭啥那么贵！",
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
              "count": 161,
              "forbidden": false
            },
            "forward": {
              "count": 17,
              "forbidden": false
            },
            "like": {
              "count": 2699,
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
          "comment_id_str": "966495069003579398",
          "comment_type": 17,
          "like_icon": {
            "action_url": "",
            "end_url": "",
            "id": 0,
            "start_url": ""
          },
          "rid_str": "966495069003579398"
        },
        "id_str": "966495069003579398",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.35,
                "width": 1.35
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.675,
                        "axis_y": 0.675,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1,
                        "width": 1
                      }
                    },
                    "layer_config": {
                      "is_critical": true,
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "placeholder": 6,
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i0.hdslb.com/bfs/face/c1733474892caa45952b2c09a89323157df7129a.jpg"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.8000000000000002,
                        "axis_y": 0.8000000000000002,
                        "coordinate_pos": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.41666666666666663,
                        "width": 0.41666666666666663
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "background-color": "rgb(255,255,255)",
                              "border": "2px solid rgba(255,255,255,1)",
                              "borderRadius": "50%",
                              "boxSizing": "border-box"
                            }
                          }
                        },
                        "ICON_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "local": 3,
                          "src_type": 2
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  }
                ]
              },
              "mid": "946974"
            },
            "face": "https://i0.hdslb.com/bfs/face/c1733474892caa45952b2c09a89323157df7129a.jpg",
            "face_nft": false,
            "following": true,
            "jump_url": "//space.bilibili.com/946974/dynamic",
            "label": "",
            "mid": 946974,
            "name": "影视飓风",
            "official_verify": {
              "desc": "",
              "type": 0
            },
            "pendant": {
              "expire": 0,
              "image": "",
              "image_enhance": "",
              "image_enhance_frame": "",
              "n_pid": 0,
              "name": "",
              "pid": 0
            },
            "pub_action": "",
            "pub_location_text": "",
            "pub_time": "昨天 12:14",
            "pub_ts": 1723868069,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 1,
              "avatar_subscript_url": "",
              "due_date": 1975248000000,
              "label": {
                "bg_color": "#FB7299",
                "bg_style": 1,
                "border_color": "",
                "img_label_uri_hans": "https://i0.hdslb.com/bfs/activity-plat/static/20220608/e369244d0b14644f5e1a06431e22a4d5/wltavwHAkL.gif",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/802418ff03911645648b63aa193ba67997b5a0bc.png",
                "img_label_uri_hant": "",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/8u7iRTPE7N.png",
                "label_theme": "ten_annual_vip",
                "path": "",
                "text": "十年大会员",
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
                  "orig_text": "周末啦，希望大家喜欢这期科普分享！我们的官网也加上了电影节的科普和信息汇总，欢迎大家取用～",
                  "text": "周末啦，希望大家喜欢这期科普分享！我们的官网也加上了电影节的科普和信息汇总，欢迎大家取用～",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                }
              ],
              "text": "周末啦，希望大家喜欢这期科普分享！我们的官网也加上了电影节的科普和信息汇总，欢迎大家取用～"
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
              "count": 101,
              "forbidden": false
            },
            "forward": {
              "count": 7,
              "forbidden": false
            },
            "like": {
              "count": 5247,
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
          "id_str": "966197633939931139",
          "modules": {
            "module_author": {
              "avatar": {
                "container_size": {
                  "height": 1.35,
                  "width": 1.35
                },
                "fallback_layers": {
                  "is_critical_group": true,
                  "layers": [
                    {
                      "general_spec": {
                        "pos_spec": {
                          "axis_x": 0.675,
                          "axis_y": 0.675,
                          "coordinate_pos": 2
                        },
                        "render_spec": {
                          "opacity": 1
                        },
                        "size_spec": {
                          "height": 1,
                          "width": 1
                        }
                      },
                      "layer_config": {
                        "is_critical": true,
                        "tags": {
                          "AVATAR_LAYER": {},
                          "GENERAL_CFG": {
                            "config_type": 1,
                            "general_config": {
                              "web_css_style": {
                                "borderRadius": "50%"
                              }
                            }
                          }
                        }
                      },
                      "resource": {
                        "res_image": {
                          "image_src": {
                            "placeholder": 6,
                            "remote": {
                              "bfs_style": "widget-layer-avatar",
                              "url": "https://i0.hdslb.com/bfs/face/c1733474892caa45952b2c09a89323157df7129a.jpg"
                            },
                            "src_type": 1
                          }
                        },
                        "res_type": 3
                      },
                      "visible": true
                    },
                    {
                      "general_spec": {
                        "pos_spec": {
                          "axis_x": 0.8000000000000002,
                          "axis_y": 0.8000000000000002,
                          "coordinate_pos": 1
                        },
                        "render_spec": {
                          "opacity": 1
                        },
                        "size_spec": {
                          "height": 0.41666666666666663,
                          "width": 0.41666666666666663
                        }
                      },
                      "layer_config": {
                        "tags": {
                          "GENERAL_CFG": {
                            "config_type": 1,
                            "general_config": {
                              "web_css_style": {
                                "background-color": "rgb(255,255,255)",
                                "border": "2px solid rgba(255,255,255,1)",
                                "borderRadius": "50%",
                                "boxSizing": "border-box"
                              }
                            }
                          },
                          "ICON_LAYER": {}
                        }
                      },
                      "resource": {
                        "res_image": {
                          "image_src": {
                            "local": 3,
                            "src_type": 2
                          }
                        },
                        "res_type": 3
                      },
                      "visible": true
                    }
                  ]
                },
                "mid": "946974"
              },
              "face": "https://i0.hdslb.com/bfs/face/c1733474892caa45952b2c09a89323157df7129a.jpg",
              "face_nft": false,
              "following": true,
              "jump_url": "//space.bilibili.com/946974/dynamic",
              "label": "",
              "mid": 946974,
              "name": "影视飓风",
              "official_verify": {
                "desc": "",
                "type": 0
              },
              "pendant": {
                "expire": 0,
                "image": "",
                "image_enhance": "",
                "image_enhance_frame": "",
                "n_pid": 0,
                "name": "",
                "pid": 0
              },
              "pub_action": "投稿了视频",
              "pub_time": "",
              "pub_ts": 1723798817,
              "type": "AUTHOR_TYPE_NORMAL",
              "vip": {
                "avatar_subscript": 1,
                "avatar_subscript_url": "",
                "due_date": 1975248000000,
                "label": {
                  "bg_color": "#FB7299",
                  "bg_style": 1,
                  "border_color": "",
                  "img_label_uri_hans": "https://i0.hdslb.com/bfs/activity-plat/static/20220608/e369244d0b14644f5e1a06431e22a4d5/wltavwHAkL.gif",
                  "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/802418ff03911645648b63aa193ba67997b5a0bc.png",
                  "img_label_uri_hant": "",
                  "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/8u7iRTPE7N.png",
                  "label_theme": "ten_annual_vip",
                  "path": "",
                  "text": "十年大会员",
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
                    "orig_text": "挺久没有更新的看懂电影系列！",
                    "text": "挺久没有更新的看懂电影系列！",
                    "type": "RICH_TEXT_NODE_TYPE_TEXT"
                  }
                ],
                "text": "挺久没有更新的看懂电影系列！"
              },
              "major": {
                "archive": {
                  "aid": "1506437840",
                  "badge": {
                    "bg_color": "#FB7299",
                    "color": "#FFFFFF",
                    "icon_url": null,
                    "text": "投稿视频"
                  },
                  "bvid": "BV13S42197ja",
                  "cover": "http://i1.hdslb.com/bfs/archive/50d4705b2d804a76f3c19af269dd7804479aa94e.jpg",
                  "desc": "国内外总共有3000多个大大小小的电影节。那么，短片可以参加电影节吗？什么时候投递获奖概率才大一些？这次我们想和你分享一些投递和参加电影节的门道。我们还整理了一份有关电影节的科普文档，可以来我们的官网看看：https://filmfestival.ysjf.com/。\n如果你喜欢这期视频，请多多支持我们，并将视频分享给其他朋友一起看看！",
                  "disable_preview": 0,
                  "duration_text": "10:55",
                  "jump_url": "//www.bilibili.com/video/BV13S42197ja/",
                  "stat": {
                    "danmaku": "2067",
                    "play": "64.1万"
                  },
                  "title": "全世界3000多个电影节，都在办些啥？",
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
          "comment_id_str": "37185041",
          "comment_type": 12,
          "like_icon": {
            "action_url": "",
            "end_url": "",
            "id": 0,
            "start_url": ""
          },
          "rid_str": "37185041"
        },
        "id_str": "966484129969340422",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.35,
                "width": 1.35
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.675,
                        "axis_y": 0.675,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1,
                        "width": 1
                      }
                    },
                    "layer_config": {
                      "is_critical": true,
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "placeholder": 6,
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i0.hdslb.com/bfs/face/978ea07f22e54c2e62f01def8e815b59adacc5d0.jpg"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.8000000000000002,
                        "axis_y": 0.8000000000000002,
                        "coordinate_pos": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.41666666666666663,
                        "width": 0.41666666666666663
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "background-color": "rgb(255,255,255)",
                              "border": "2px solid rgba(255,255,255,1)",
                              "borderRadius": "50%",
                              "boxSizing": "border-box"
                            }
                          }
                        },
                        "ICON_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "local": 4,
                          "src_type": 2
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  }
                ]
              },
              "mid": "407045223"
            },
            "decorate": {
              "card_url": "https://i0.hdslb.com/bfs/vip/a9e3d993c7a15e88ce0bf714a142f7d2b44121e2.png",
              "fan": {
                "color": "",
                "color_format": null,
                "is_fan": false,
                "num_prefix": "",
                "num_str": "",
                "number": 0
              },
              "id": 28,
              "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=28\u0026isdiy=0\u0026part=card\u0026from=post\u0026f_source=garb\u0026vmid=407045223\u0026native.theme=1\u0026navhide=1",
              "name": "2233娘",
              "type": 1
            },
            "face": "https://i0.hdslb.com/bfs/face/978ea07f22e54c2e62f01def8e815b59adacc5d0.jpg",
            "face_nft": false,
            "following": true,
            "jump_url": "//space.bilibili.com/407045223/dynamic",
            "label": "",
            "mid": 407045223,
            "name": "二次元的中科院物理所",
            "official_verify": {
              "desc": "",
              "type": 1
            },
            "pendant": {
              "expire": 0,
              "image": "",
              "image_enhance": "",
              "image_enhance_frame": "",
              "n_pid": 0,
              "name": "",
              "pid": 0
            },
            "pub_action": "投稿了文章",
            "pub_location_text": "",
            "pub_time": "昨天 11:32",
            "pub_ts": 1723865522,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 1,
              "avatar_subscript_url": "",
              "due_date": 1745769600000,
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
              "article": {
                "covers": [
                  "https://i0.hdslb.com/bfs/article/708ab38ac38df8fe7851a63c0258fa64407045223.jpg"
                ],
                "desc": "经历过密码解锁和手势解锁后 真感慨指纹解锁是天才的创造 可惜遇到湿手油手经常失效 甚至擦干了还是这样 这是为什么呢问答导航Q1 鸡蛋在母鸡体内有气室吗？Q2 为什么弹簧是螺旋型的？Q3 闪电为什么总是自上而下，有没有自下而上的闪电呢？Q4 当一束光使电子发生了能级跃迁，原先的光子去哪儿了，消失了吗？Q5 为什么有茶叶的水在转时茶叶会趋向中间而不是两边呢？Q6 为什么塑料相比于其它物质，更容易起静电？Q7 为什么会有空集？空集的存在有什么物理意义？ Q8 为什么有纹理的木擦了木蜡油之后会纹理变深，更容易被看",
                "id": 37185041,
                "jump_url": "//www.bilibili.com/read/cv37185041/",
                "label": "16.3万阅读",
                "title": "手指沾水擦干但是指纹识别还是失败，这是什么原因？| No.422"
              },
              "type": "MAJOR_TYPE_ARTICLE"
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
              "count": 23,
              "forbidden": false
            },
            "forward": {
              "count": 7,
              "forbidden": false
            },
            "like": {
              "count": 727,
              "forbidden": false,
              "status": false
            }
          }
        },
        "type": "DYNAMIC_TYPE_ARTICLE",
        "visible": true
      },
      {
        "basic": {
          "comment_id_str": "966475883631083553",
          "comment_type": 17,
          "like_icon": {
            "action_url": "",
            "end_url": "",
            "id": 0,
            "start_url": ""
          },
          "rid_str": "966475883631083553"
        },
        "id_str": "966475883631083553",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.375,
                "width": 1.375
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.787,
                        "width": 0.787
                      }
                    },
                    "layer_config": {
                      "is_critical": true,
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "placeholder": 6,
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i1.hdslb.com/bfs/face/1fd5b43d5f619e6df8c8adcf13c962a3e80ee971.jpg"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1.375,
                        "width": 1.375
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "PENDENT_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.7560000000000001,
                        "axis_y": 0.7726666666666667,
                        "coordinate_pos": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.41666666666666663,
                        "width": 0.41666666666666663
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "background-color": "rgb(255,255,255)",
                              "border": "2px solid rgba(255,255,255,1)",
                              "borderRadius": "50%",
                              "boxSizing": "border-box"
                            }
                          }
                        },
                        "ICON_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "local": 4,
                          "src_type": 2
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  }
                ]
              },
              "layers": [
                {
                  "is_critical_group": true,
                  "layers": [
                    {
                      "general_spec": {
                        "pos_spec": {
                          "axis_x": 0.6875,
                          "axis_y": 0.6875,
                          "coordinate_pos": 2
                        },
                        "render_spec": {
                          "opacity": 1
                        },
                        "size_spec": {
                          "height": 0.787,
                          "width": 0.787
                        }
                      },
                      "layer_config": {
                        "is_critical": true,
                        "tags": {
                          "AVATAR_LAYER": {},
                          "GENERAL_CFG": {
                            "config_type": 1,
                            "general_config": {
                              "web_css_style": {
                                "borderRadius": "50%"
                              }
                            }
                          }
                        }
                      },
                      "resource": {
                        "res_image": {
                          "image_src": {
                            "placeholder": 6,
                            "remote": {
                              "bfs_style": "widget-layer-avatar",
                              "url": "https://i1.hdslb.com/bfs/face/1fd5b43d5f619e6df8c8adcf13c962a3e80ee971.jpg"
                            },
                            "src_type": 1
                          }
                        },
                        "res_type": 3
                      },
                      "visible": true
                    }
                  ]
                },
                {
                  "layers": [
                    {
                      "general_spec": {
                        "pos_spec": {
                          "axis_x": 0.6875,
                          "axis_y": 0.6875,
                          "coordinate_pos": 2
                        },
                        "render_spec": {
                          "opacity": 1
                        },
                        "size_spec": {
                          "height": 1.375,
                          "width": 1.375
                        }
                      },
                      "layer_config": {
                        "tags": {
                          "PENDENT_LAYER": {}
                        }
                      },
                      "resource": {
                        "res_animation": {
                          "webp_src": {
                            "remote": {
                              "bfs_style": "widget-layer-avatar",
                              "url": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
                            },
                            "src_type": 1
                          }
                        },
                        "res_type": 4
                      },
                      "visible": true
                    }
                  ]
                },
                {
                  "layers": [
                    {
                      "general_spec": {
                        "pos_spec": {
                          "axis_x": 0.7560000000000001,
                          "axis_y": 0.7726666666666667,
                          "coordinate_pos": 1
                        },
                        "render_spec": {
                          "opacity": 1
                        },
                        "size_spec": {
                          "height": 0.41666666666666663,
                          "width": 0.41666666666666663
                        }
                      },
                      "layer_config": {
                        "tags": {
                          "GENERAL_CFG": {
                            "config_type": 1,
                            "general_config": {
                              "web_css_style": {
                                "background-color": "rgb(255,255,255)",
                                "border": "2px solid rgba(255,255,255,1)",
                                "borderRadius": "50%",
                                "boxSizing": "border-box"
                              }
                            }
                          },
                          "ICON_LAYER": {}
                        }
                      },
                      "resource": {
                        "res_image": {
                          "image_src": {
                            "local": 4,
                            "src_type": 2
                          }
                        },
                        "res_type": 3
                      },
                      "visible": true
                    }
                  ]
                }
              ],
              "mid": "233114659"
            },
            "decorate": {
              "card_url": "https://i0.hdslb.com/bfs/garb/bb140043341137b879e957d09b649ce7c3257820.png",
              "fan": {
                "color": "#903AC2",
                "color_format": {
                  "colors": [
                    "#903AC2FF",
                    "#903AC2FF"
                  ],
                  "end_point": "0,100",
                  "gradients": [
                    0,
                    100
                  ],
                  "start_point": "0,0"
                },
                "is_fan": true,
                "num_prefix": "NO.",
                "num_str": "000001",
                "number": 1
              },
              "id": 1706163888001,
              "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=1706163888001\u0026isdiy=0\u0026part=card\u0026from=post\u0026f_source=garb\u0026vmid=233114659\u0026native.theme=1\u0026navhide=1",
              "name": "龙腾啾跃-动态卡片粉丝",
              "type": 3
            },
            "face": "https://i1.hdslb.com/bfs/face/1fd5b43d5f619e6df8c8adcf13c962a3e80ee971.jpg",
            "face_nft": false,
            "following": true,
            "jump_url": "//space.bilibili.com/233114659/dynamic",
            "label": "",
            "mid": 233114659,
            "name": "碧蓝航线",
            "official_verify": {
              "desc": "",
              "type": 1
            },
            "pendant": {
              "expire": 0,
              "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
              "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp",
              "image_enhance_frame": "https://i1.hdslb.com/bfs/garb/item/3052b412defbbc7704e887fefde8de539e8027c5.png",
              "n_pid": 1987,
              "name": "碧蓝航线2020",
              "pid": 1987
            },
            "pub_action": "",
            "pub_location_text": "",
            "pub_time": "昨天 11:00",
            "pub_ts": 1723863602,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 1,
              "avatar_subscript_url": "",
              "due_date": 1729526400000,
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
                  "orig_text": "恭喜",
                  "text": "恭喜",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                },
                {
                  "orig_text": "@两百斤的橘猫猫0w0",
                  "rid": "8391364",
                  "text": "@两百斤的橘猫猫0w0",
                  "type": "RICH_TEXT_NODE_TYPE_AT"
                },
                {
                  "orig_text": "@一位隐身的Z23厨",
                  "rid": "382382091",
                  "text": "@一位隐身的Z23厨",
                  "type": "RICH_TEXT_NODE_TYPE_AT"
                },
                {
                  "orig_text": "@默涛默随波",
                  "rid": "230373473",
                  "text": "@默涛默随波",
                  "type": "RICH_TEXT_NODE_TYPE_AT"
                },
                {
                  "orig_text": "等8位同学中奖，已私信通知，详情请点击抽奖查看。",
                  "text": "等8位同学中奖，已私信通知，详情请点击抽奖查看。",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                }
              ],
              "text": "恭喜@两百斤的橘猫猫0w0@一位隐身的Z23厨@默涛默随波等8位同学中奖，已私信通知，详情请点击抽奖查看。"
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
              "count": 227,
              "forbidden": false
            },
            "forward": {
              "count": 20,
              "forbidden": false
            },
            "like": {
              "count": 3126,
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
          "id_str": "963893770559946786",
          "modules": {
            "module_author": {
              "avatar": {
                "container_size": {
                  "height": 1.375,
                  "width": 1.375
                },
                "fallback_layers": {
                  "is_critical_group": true,
                  "layers": [
                    {
                      "general_spec": {
                        "pos_spec": {
                          "axis_x": 0.6875,
                          "axis_y": 0.6875,
                          "coordinate_pos": 2
                        },
                        "render_spec": {
                          "opacity": 1
                        },
                        "size_spec": {
                          "height": 0.787,
                          "width": 0.787
                        }
                      },
                      "layer_config": {
                        "is_critical": true,
                        "tags": {
                          "AVATAR_LAYER": {},
                          "GENERAL_CFG": {
                            "config_type": 1,
                            "general_config": {
                              "web_css_style": {
                                "borderRadius": "50%"
                              }
                            }
                          }
                        }
                      },
                      "resource": {
                        "res_image": {
                          "image_src": {
                            "placeholder": 6,
                            "remote": {
                              "bfs_style": "widget-layer-avatar",
                              "url": "https://i1.hdslb.com/bfs/face/1fd5b43d5f619e6df8c8adcf13c962a3e80ee971.jpg"
                            },
                            "src_type": 1
                          }
                        },
                        "res_type": 3
                      },
                      "visible": true
                    },
                    {
                      "general_spec": {
                        "pos_spec": {
                          "axis_x": 0.6875,
                          "axis_y": 0.6875,
                          "coordinate_pos": 2
                        },
                        "render_spec": {
                          "opacity": 1
                        },
                        "size_spec": {
                          "height": 1.375,
                          "width": 1.375
                        }
                      },
                      "layer_config": {
                        "tags": {
                          "PENDENT_LAYER": {}
                        }
                      },
                      "resource": {
                        "res_image": {
                          "image_src": {
                            "remote": {
                              "bfs_style": "widget-layer-avatar",
                              "url": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png"
                            },
                            "src_type": 1
                          }
                        },
                        "res_type": 3
                      },
                      "visible": true
                    },
                    {
                      "general_spec": {
                        "pos_spec": {
                          "axis_x": 0.7560000000000001,
                          "axis_y": 0.7726666666666667,
                          "coordinate_pos": 1
                        },
                        "render_spec": {
                          "opacity": 1
                        },
                        "size_spec": {
                          "height": 0.41666666666666663,
                          "width": 0.41666666666666663
                        }
                      },
                      "layer_config": {
                        "tags": {
                          "GENERAL_CFG": {
                            "config_type": 1,
                            "general_config": {
                              "web_css_style": {
                                "background-color": "rgb(255,255,255)",
                                "border": "2px solid rgba(255,255,255,1)",
                                "borderRadius": "50%",
                                "boxSizing": "border-box"
                              }
                            }
                          },
                          "ICON_LAYER": {}
                        }
                      },
                      "resource": {
                        "res_image": {
                          "image_src": {
                            "local": 4,
                            "src_type": 2
                          }
                        },
                        "res_type": 3
                      },
                      "visible": true
                    }
                  ]
                },
                "layers": [
                  {
                    "is_critical_group": true,
                    "layers": [
                      {
                        "general_spec": {
                          "pos_spec": {
                            "axis_x": 0.6875,
                            "axis_y": 0.6875,
                            "coordinate_pos": 2
                          },
                          "render_spec": {
                            "opacity": 1
                          },
                          "size_spec": {
                            "height": 0.787,
                            "width": 0.787
                          }
                        },
                        "layer_config": {
                          "is_critical": true,
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          }
                        },
                        "resource": {
                          "res_image": {
                            "image_src": {
                              "placeholder": 6,
                              "remote": {
                                "bfs_style": "widget-layer-avatar",
                                "url": "https://i1.hdslb.com/bfs/face/1fd5b43d5f619e6df8c8adcf13c962a3e80ee971.jpg"
                              },
                              "src_type": 1
                            }
                          },
                          "res_type": 3
                        },
                        "visible": true
                      }
                    ]
                  },
                  {
                    "layers": [
                      {
                        "general_spec": {
                          "pos_spec": {
                            "axis_x": 0.6875,
                            "axis_y": 0.6875,
                            "coordinate_pos": 2
                          },
                          "render_spec": {
                            "opacity": 1
                          },
                          "size_spec": {
                            "height": 1.375,
                            "width": 1.375
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "PENDENT_LAYER": {}
                          }
                        },
                        "resource": {
                          "res_animation": {
                            "webp_src": {
                              "remote": {
                                "bfs_style": "widget-layer-avatar",
                                "url": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
                              },
                              "src_type": 1
                            }
                          },
                          "res_type": 4
                        },
                        "visible": true
                      }
                    ]
                  },
                  {
                    "layers": [
                      {
                        "general_spec": {
                          "pos_spec": {
                            "axis_x": 0.7560000000000001,
                            "axis_y": 0.7726666666666667,
                            "coordinate_pos": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          },
                          "size_spec": {
                            "height": 0.41666666666666663,
                            "width": 0.41666666666666663
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "background-color": "rgb(255,255,255)",
                                  "border": "2px solid rgba(255,255,255,1)",
                                  "borderRadius": "50%",
                                  "boxSizing": "border-box"
                                }
                              }
                            },
                            "ICON_LAYER": {}
                          }
                        },
                        "resource": {
                          "res_image": {
                            "image_src": {
                              "local": 4,
                              "src_type": 2
                            }
                          },
                          "res_type": 3
                        },
                        "visible": true
                      }
                    ]
                  }
                ],
                "mid": "233114659"
              },
              "decorate": {
                "card_url": "https://i0.hdslb.com/bfs/garb/bb140043341137b879e957d09b649ce7c3257820.png",
                "fan": {
                  "color": "#903AC2",
                  "color_format": {
                    "colors": [
                      "#903AC2FF",
                      "#903AC2FF"
                    ],
                    "end_point": "0,100",
                    "gradients": [
                      0,
                      100
                    ],
                    "start_point": "0,0"
                  },
                  "is_fan": true,
                  "num_prefix": "NO.",
                  "num_str": "000001",
                  "number": 1
                },
                "id": 1706163888001,
                "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=1706163888001\u0026isdiy=0\u0026part=card\u0026from=post\u0026f_source=garb\u0026vmid=233114659\u0026native.theme=1\u0026navhide=1",
                "name": "龙腾啾跃-动态卡片粉丝",
                "type": 3
              },
              "face": "https://i1.hdslb.com/bfs/face/1fd5b43d5f619e6df8c8adcf13c962a3e80ee971.jpg",
              "face_nft": false,
              "following": true,
              "jump_url": "//space.bilibili.com/233114659/dynamic",
              "label": "",
              "mid": 233114659,
              "name": "碧蓝航线",
              "official_verify": {
                "desc": "",
                "type": 1
              },
              "pendant": {
                "expire": 0,
                "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
                "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp",
                "image_enhance_frame": "https://i1.hdslb.com/bfs/garb/item/3052b412defbbc7704e887fefde8de539e8027c5.png",
                "n_pid": 1987,
                "name": "碧蓝航线2020",
                "pid": 1987
              },
              "pub_action": "",
              "pub_time": "",
              "pub_ts": 1723262407,
              "type": "AUTHOR_TYPE_NORMAL",
              "vip": {
                "avatar_subscript": 1,
                "avatar_subscript_url": "",
                "due_date": 1729526400000,
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
                    "jump_url": "https://www.biligame.com/detail?id=97\u0026sourceFrom=1005",
                    "type": 1
                  },
                  "cover": "https://i0.hdslb.com/bfs/game/b141a7690c226a0eae66518c713d3af62613b21d.png",
                  "desc1": "养成",
                  "desc2": "指挥官，欢迎回港",
                  "head_text": "相关游戏",
                  "id_str": "97",
                  "jump_url": "https://www.biligame.com/detail?id=97\u0026sourceFrom=1005",
                  "style": 1,
                  "sub_type": "game",
                  "title": "碧蓝航线"
                },
                "type": "ADDITIONAL_TYPE_COMMON"
              },
              "desc": {
                "rich_text_nodes": [
                  {
                    "jump_url": "//search.bilibili.com/all?keyword=%E7%A2%A7%E8%93%9D%E8%88%AA%E7%BA%BF",
                    "orig_text": "#碧蓝航线#",
                    "text": "#碧蓝航线#",
                    "type": "RICH_TEXT_NODE_TYPE_TOPIC"
                  },
                  {
                    "orig_text": " ",
                    "text": " ",
                    "type": "RICH_TEXT_NODE_TYPE_TEXT"
                  },
                  {
                    "orig_text": "互动抽奖",
                    "rid": "312103",
                    "text": "互动抽奖",
                    "type": "RICH_TEXT_NODE_TYPE_LOTTERY"
                  },
                  {
                    "orig_text": " \n兰夜放灯祈相守，\n纤手弄糕思今宵。\n\n关注",
                    "text": " \n兰夜放灯祈相守，\n纤手弄糕思今宵。\n\n关注",
                    "type": "RICH_TEXT_NODE_TYPE_TEXT"
                  },
                  {
                    "orig_text": "@碧蓝航线",
                    "rid": "233114659",
                    "text": "@碧蓝航线",
                    "type": "RICH_TEXT_NODE_TYPE_AT"
                  },
                  {
                    "orig_text": " 并转发该内容，我们将于8月17日抽取3位指挥官送出【JUUs时间 花园Q版手办】，抽取5位指挥官送出【心智魔方-系列浴球（随机一款）】。\n\n金风玉露，值此良宵，愿与君共度~",
                    "text": " 并转发该内容，我们将于8月17日抽取3位指挥官送出【JUUs时间 花园Q版手办】，抽取5位指挥官送出【心智魔方-系列浴球（随机一款）】。\n\n金风玉露，值此良宵，愿与君共度~",
                    "type": "RICH_TEXT_NODE_TYPE_TEXT"
                  }
                ],
                "text": "#碧蓝航线# 互动抽奖 \n兰夜放灯祈相守，\n纤手弄糕思今宵。\n\n关注@碧蓝航线 并转发该内容，我们将于8月17日抽取3位指挥官送出【JUUs时间 花园Q版手办】，抽取5位指挥官送出【心智魔方-系列浴球（随机一款）】。\n\n金风玉露，值此良宵，愿与君共度~"
              },
              "major": {
                "draw": {
                  "id": 324938558,
                  "items": [
                    {
                      "height": 3038,
                      "size": 2025.2646,
                      "src": "http://i0.hdslb.com/bfs/new_dyn/b0068d1603aee2849ca46a58642fa99e233114659.jpg",
                      "tags": [],
                      "width": 5400
                    },
                    {
                      "height": 5063,
                      "size": 7377.1143,
                      "src": "http://i0.hdslb.com/bfs/new_dyn/c047aafcf90a48b578a63c3e1b86c1de233114659.jpg",
                      "tags": [],
                      "width": 9000
                    }
                  ]
                },
                "type": "MAJOR_TYPE_DRAW"
              },
              "topic": null
            }
          },
          "type": "DYNAMIC_TYPE_DRAW",
          "visible": true
        },
        "type": "DYNAMIC_TYPE_FORWARD",
        "visible": true
      },
      {
        "basic": {
          "comment_id_str": "1456253104",
          "comment_type": 1,
          "like_icon": {
            "action_url": "",
            "end_url": "",
            "id": 0,
            "start_url": ""
          },
          "rid_str": "1456253104"
        },
        "id_str": "966374603744083976",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.375,
                "width": 1.375
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.787,
                        "width": 0.787
                      }
                    },
                    "layer_config": {
                      "is_critical": true,
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      }
                    },
                    "resource": {
                      "res_animation": {
                        "webp_src": {
                          "placeholder": 6,
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 4
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1.375,
                        "width": 1.375
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "PENDENT_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i0.hdslb.com/bfs/garb/item/0dcf03aa499a64524fe25871d26d95f49f880928.png"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.7560000000000001,
                        "axis_y": 0.7726666666666667,
                        "coordinate_pos": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.41666666666666663,
                        "width": 0.41666666666666663
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "background-color": "rgb(255,255,255)",
                              "border": "2px solid rgba(255,255,255,1)",
                              "borderRadius": "50%",
                              "boxSizing": "border-box"
                            }
                          }
                        },
                        "ICON_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "local": 3,
                          "src_type": 2
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  }
                ]
              },
              "mid": "686127"
            },
            "face": "https://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp",
            "face_nft": false,
            "following": true,
            "jump_url": "//space.bilibili.com/686127/dynamic",
            "label": "",
            "mid": 686127,
            "name": "籽岷",
            "official_verify": {
              "desc": "",
              "type": 0
            },
            "pendant": {
              "expire": 0,
              "image": "https://i0.hdslb.com/bfs/garb/item/0dcf03aa499a64524fe25871d26d95f49f880928.png",
              "image_enhance": "https://i0.hdslb.com/bfs/garb/item/0dcf03aa499a64524fe25871d26d95f49f880928.png",
              "image_enhance_frame": "",
              "n_pid": 2066,
              "name": "百年大会员",
              "pid": 2066
            },
            "pub_action": "投稿了视频",
            "pub_location_text": "",
            "pub_time": "昨天 04:27",
            "pub_ts": 1723840021,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 1,
              "avatar_subscript_url": "",
              "due_date": 4845196800000,
              "label": {
                "bg_color": "#FB7299",
                "bg_style": 1,
                "border_color": "",
                "img_label_uri_hans": "",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/c16005a5b39164b3536cbd45618a5edd597a1c51.png",
                "img_label_uri_hant": "",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/Pzrd8zmpQD.png",
                "label_theme": "hundred_annual_vip",
                "path": "",
                "text": "百年大会员",
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
                "aid": "1456253104",
                "badge": {
                  "bg_color": "#FB7299",
                  "color": "#FFFFFF",
                  "icon_url": null,
                  "text": "投稿视频"
                },
                "bvid": "BV1ai421h7nT",
                "cover": "http://i1.hdslb.com/bfs/archive/0245f30593e2963b883cd5953881034ad033fbd5.jpg",
                "desc": "https://www.minecraft.net/en-us/article/minecraft-snapshot-24w33a",
                "disable_preview": 0,
                "duration_text": "16:22",
                "jump_url": "//www.bilibili.com/video/BV1ai421h7nT/",
                "stat": {
                  "danmaku": "2149",
                  "play": "24.5万"
                },
                "title": "收纳袋、红石、矿车大改 我的世界新版本介绍 1.21.2 24w33a",
                "type": 1
              },
              "type": "MAJOR_TYPE_ARCHIVE"
            },
            "topic": {
              "id": 1028161,
              "jump_url": "https://m.bilibili.com/topic-detail?topic_id=1028161\u0026topic_name=%E6%95%B4%E7%82%B9%E7%94%B5%E5%AD%90%E6%A6%A8%E8%8F%9C",
              "name": "整点电子榨菜"
            }
          },
          "module_interaction": {
            "items": [
              {
                "desc": {
                  "rich_text_nodes": [
                    {
                      "orig_text": "名字永远是个谜：",
                      "rid": "2022349482",
                      "text": "名字永远是个谜：",
                      "type": "RICH_TEXT_NODE_TYPE_AT"
                    },
                    {
                      "orig_text": "我们轨道交通圈有福了啊啊啊啊啊啊啊！",
                      "text": "我们轨道交通圈有福了啊啊啊啊啊啊啊！",
                      "type": "RICH_TEXT_NODE_TYPE_TEXT"
                    }
                  ],
                  "text": "我们轨道交通圈有福了啊啊啊啊啊啊啊！"
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
              "count": 921,
              "forbidden": false
            },
            "forward": {
              "count": 51,
              "forbidden": false
            },
            "like": {
              "count": 23138,
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
          "comment_id_str": "325694432",
          "comment_type": 11,
          "like_icon": {
            "action_url": "",
            "end_url": "",
            "id": 0,
            "start_url": ""
          },
          "rid_str": "325694432"
        },
        "id_str": "966306597269667840",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.35,
                "width": 1.35
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.675,
                        "axis_y": 0.675,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1,
                        "width": 1
                      }
                    },
                    "layer_config": {
                      "is_critical": true,
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "placeholder": 6,
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i1.hdslb.com/bfs/face/2b9ee4a9c99f1006f3c800c1317f7850ad6f3d0d.jpg"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.8000000000000002,
                        "axis_y": 0.8000000000000002,
                        "coordinate_pos": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.41666666666666663,
                        "width": 0.41666666666666663
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "background-color": "rgb(255,255,255)",
                              "border": "2px solid rgba(255,255,255,1)",
                              "borderRadius": "50%",
                              "boxSizing": "border-box"
                            }
                          }
                        },
                        "ICON_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "local": 4,
                          "src_type": 2
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  }
                ]
              },
              "mid": "485703766"
            },
            "face": "https://i1.hdslb.com/bfs/face/2b9ee4a9c99f1006f3c800c1317f7850ad6f3d0d.jpg",
            "face_nft": false,
            "following": true,
            "jump_url": "//space.bilibili.com/485703766/dynamic",
            "label": "",
            "mid": 485703766,
            "name": "英伟达GeForce",
            "official_verify": {
              "desc": "",
              "type": 1
            },
            "pendant": {
              "expire": 0,
              "image": "",
              "image_enhance": "",
              "image_enhance_frame": "",
              "n_pid": 0,
              "name": "",
              "pid": 0
            },
            "pub_action": "",
            "pub_location_text": "",
            "pub_time": "昨天 00:03",
            "pub_ts": 1723824187,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 1,
              "avatar_subscript_url": "",
              "due_date": 2000563200000,
              "label": {
                "bg_color": "#FB7299",
                "bg_style": 1,
                "border_color": "",
                "img_label_uri_hans": "",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/adb599797dd171e2d3d6d012f448b49679258344.png",
                "img_label_uri_hant": "",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/sGu57N6pgK.png",
                "label_theme": "ten_annual_vip",
                "path": "",
                "text": "十年大会员",
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
                  "orig_text": "直面天命，还有 3 天！\nRTX. ON！\n\n投稿来自于：Bilibili",
                  "text": "直面天命，还有 3 天！\nRTX. ON！\n\n投稿来自于：Bilibili",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                },
                {
                  "orig_text": "@祗殁 ",
                  "rid": "12299496",
                  "text": "@祗殁 ",
                  "type": "RICH_TEXT_NODE_TYPE_AT"
                }
              ],
              "text": "直面天命，还有 3 天！\nRTX. ON！\n\n投稿来自于：Bilibili@祗殁 "
            },
            "major": {
              "draw": {
                "id": 325694432,
                "items": [
                  {
                    "height": 1280,
                    "size": 59.246094,
                    "src": "http://i0.hdslb.com/bfs/new_dyn/2e42c52d5e1383fe443f0984a41a9624485703766.jpg",
                    "tags": [],
                    "width": 1282
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
              "count": 115,
              "forbidden": false
            },
            "forward": {
              "count": 3,
              "forbidden": false
            },
            "like": {
              "count": 876,
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
          "comment_id_str": "325690655",
          "comment_type": 11,
          "like_icon": {
            "action_url": "",
            "end_url": "",
            "id": 0,
            "start_url": ""
          },
          "rid_str": "325690655"
        },
        "id_str": "966298866306515029",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.375,
                "width": 1.375
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.787,
                        "width": 0.787
                      }
                    },
                    "layer_config": {
                      "is_critical": true,
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "placeholder": 6,
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i1.hdslb.com/bfs/face/1fd5b43d5f619e6df8c8adcf13c962a3e80ee971.jpg"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.6875,
                        "axis_y": 0.6875,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1.375,
                        "width": 1.375
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "PENDENT_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.7560000000000001,
                        "axis_y": 0.7726666666666667,
                        "coordinate_pos": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.41666666666666663,
                        "width": 0.41666666666666663
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "background-color": "rgb(255,255,255)",
                              "border": "2px solid rgba(255,255,255,1)",
                              "borderRadius": "50%",
                              "boxSizing": "border-box"
                            }
                          }
                        },
                        "ICON_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "local": 4,
                          "src_type": 2
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  }
                ]
              },
              "layers": [
                {
                  "is_critical_group": true,
                  "layers": [
                    {
                      "general_spec": {
                        "pos_spec": {
                          "axis_x": 0.6875,
                          "axis_y": 0.6875,
                          "coordinate_pos": 2
                        },
                        "render_spec": {
                          "opacity": 1
                        },
                        "size_spec": {
                          "height": 0.787,
                          "width": 0.787
                        }
                      },
                      "layer_config": {
                        "is_critical": true,
                        "tags": {
                          "AVATAR_LAYER": {},
                          "GENERAL_CFG": {
                            "config_type": 1,
                            "general_config": {
                              "web_css_style": {
                                "borderRadius": "50%"
                              }
                            }
                          }
                        }
                      },
                      "resource": {
                        "res_image": {
                          "image_src": {
                            "placeholder": 6,
                            "remote": {
                              "bfs_style": "widget-layer-avatar",
                              "url": "https://i1.hdslb.com/bfs/face/1fd5b43d5f619e6df8c8adcf13c962a3e80ee971.jpg"
                            },
                            "src_type": 1
                          }
                        },
                        "res_type": 3
                      },
                      "visible": true
                    }
                  ]
                },
                {
                  "layers": [
                    {
                      "general_spec": {
                        "pos_spec": {
                          "axis_x": 0.6875,
                          "axis_y": 0.6875,
                          "coordinate_pos": 2
                        },
                        "render_spec": {
                          "opacity": 1
                        },
                        "size_spec": {
                          "height": 1.375,
                          "width": 1.375
                        }
                      },
                      "layer_config": {
                        "tags": {
                          "PENDENT_LAYER": {}
                        }
                      },
                      "resource": {
                        "res_animation": {
                          "webp_src": {
                            "remote": {
                              "bfs_style": "widget-layer-avatar",
                              "url": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp"
                            },
                            "src_type": 1
                          }
                        },
                        "res_type": 4
                      },
                      "visible": true
                    }
                  ]
                },
                {
                  "layers": [
                    {
                      "general_spec": {
                        "pos_spec": {
                          "axis_x": 0.7560000000000001,
                          "axis_y": 0.7726666666666667,
                          "coordinate_pos": 1
                        },
                        "render_spec": {
                          "opacity": 1
                        },
                        "size_spec": {
                          "height": 0.41666666666666663,
                          "width": 0.41666666666666663
                        }
                      },
                      "layer_config": {
                        "tags": {
                          "GENERAL_CFG": {
                            "config_type": 1,
                            "general_config": {
                              "web_css_style": {
                                "background-color": "rgb(255,255,255)",
                                "border": "2px solid rgba(255,255,255,1)",
                                "borderRadius": "50%",
                                "boxSizing": "border-box"
                              }
                            }
                          },
                          "ICON_LAYER": {}
                        }
                      },
                      "resource": {
                        "res_image": {
                          "image_src": {
                            "local": 4,
                            "src_type": 2
                          }
                        },
                        "res_type": 3
                      },
                      "visible": true
                    }
                  ]
                }
              ],
              "mid": "233114659"
            },
            "decorate": {
              "card_url": "https://i0.hdslb.com/bfs/garb/bb140043341137b879e957d09b649ce7c3257820.png",
              "fan": {
                "color": "#903AC2",
                "color_format": {
                  "colors": [
                    "#903AC2FF",
                    "#903AC2FF"
                  ],
                  "end_point": "0,100",
                  "gradients": [
                    0,
                    100
                  ],
                  "start_point": "0,0"
                },
                "is_fan": true,
                "num_prefix": "NO.",
                "num_str": "000001",
                "number": 1
              },
              "id": 1706163888001,
              "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=1706163888001\u0026isdiy=0\u0026part=card\u0026from=post\u0026f_source=garb\u0026vmid=233114659\u0026native.theme=1\u0026navhide=1",
              "name": "龙腾啾跃-动态卡片粉丝",
              "type": 3
            },
            "face": "https://i1.hdslb.com/bfs/face/1fd5b43d5f619e6df8c8adcf13c962a3e80ee971.jpg",
            "face_nft": false,
            "following": true,
            "jump_url": "//space.bilibili.com/233114659/dynamic",
            "label": "",
            "mid": 233114659,
            "name": "碧蓝航线",
            "official_verify": {
              "desc": "",
              "type": 1
            },
            "pendant": {
              "expire": 0,
              "image": "https://i1.hdslb.com/bfs/garb/item/fe1267f786bf69f1471aff715f8d38ec0e486df5.png",
              "image_enhance": "https://i1.hdslb.com/bfs/garb/item/0aa9fd33133ed3fd9f11c857cc6ca848d6804113.webp",
              "image_enhance_frame": "https://i1.hdslb.com/bfs/garb/item/3052b412defbbc7704e887fefde8de539e8027c5.png",
              "n_pid": 1987,
              "name": "碧蓝航线2020",
              "pid": 1987
            },
            "pub_action": "",
            "pub_location_text": "",
            "pub_time": "2天前",
            "pub_ts": 1723822387,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 1,
              "avatar_subscript_url": "",
              "due_date": 1729526400000,
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
                  "jump_url": "https://www.biligame.com/detail?id=97\u0026sourceFrom=1005",
                  "type": 1
                },
                "cover": "https://i0.hdslb.com/bfs/game/b141a7690c226a0eae66518c713d3af62613b21d.png",
                "desc1": "养成",
                "desc2": "指挥官，欢迎回港",
                "head_text": "相关游戏",
                "id_str": "97",
                "jump_url": "https://www.biligame.com/detail?id=97\u0026sourceFrom=1005",
                "style": 1,
                "sub_type": "game",
                "title": "碧蓝航线"
              },
              "type": "ADDITIONAL_TYPE_COMMON"
            },
            "desc": {
              "rich_text_nodes": [
                {
                  "jump_url": "//search.bilibili.com/all?keyword=%E7%A2%A7%E8%93%9D%E8%88%AA%E7%BA%BF",
                  "orig_text": "#碧蓝航线#",
                  "text": "#碧蓝航线#",
                  "type": "RICH_TEXT_NODE_TYPE_TOPIC"
                },
                {
                  "orig_text": " ",
                  "text": " ",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                },
                {
                  "jump_url": "//search.bilibili.com/all?keyword=%E7%A2%A7%E8%93%9D%E8%88%AA%E7%BA%BF%E6%BC%AB%E5%B1%95",
                  "orig_text": "#碧蓝航线漫展#",
                  "text": "#碧蓝航线漫展#",
                  "type": "RICH_TEXT_NODE_TYPE_TOPIC"
                },
                {
                  "orig_text": " ",
                  "text": " ",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                },
                {
                  "jump_url": "//search.bilibili.com/all?keyword=2024%E6%B8%AF%E5%8C%BA%E7%9B%9B%E5%A4%8F%E6%B8%85%E5%87%89%E8%8A%82",
                  "orig_text": "#2024港区盛夏清凉节#",
                  "text": "#2024港区盛夏清凉节#",
                  "type": "RICH_TEXT_NODE_TYPE_TOPIC"
                },
                {
                  "orig_text": "\n◆ 「港区盛夏清凉节」长沙站·街区快闪 到达！◆ \n\n碧蓝夏日，映照专属的街景~\n街区快闪即将开启，\n与少女们一同踏上这场特别的城市漫步之旅吧！\n\n◆ 互动游戏开放时间：2024年8月17日~8月18日，每日10:00~12:00及14:00~19:00\n◆ 街区快闪体验地址：湖南省长沙市开福区潮宗街历史文化街区\n◆ 参与方式：无需预约，前往现场即可参与体验~\n◆ 体验须知：\n※8月17日~8月18日期间，指挥官可前往潮宗街历史文化街区现场参与体验。\n※指挥官关注《碧蓝航线》官方B站账号后，可参与互动游戏，集章兑换周边礼品哟！\n※兑换周边每日数量有限，兑完即止。\n※天气炎热，请指挥官做好防暑准备，出行注意安全哟。",
                  "text": "\n◆ 「港区盛夏清凉节」长沙站·街区快闪 到达！◆ \n\n碧蓝夏日，映照专属的街景~\n街区快闪即将开启，\n与少女们一同踏上这场特别的城市漫步之旅吧！\n\n◆ 互动游戏开放时间：2024年8月17日~8月18日，每日10:00~12:00及14:00~19:00\n◆ 街区快闪体验地址：湖南省长沙市开福区潮宗街历史文化街区\n◆ 参与方式：无需预约，前往现场即可参与体验~\n◆ 体验须知：\n※8月17日~8月18日期间，指挥官可前往潮宗街历史文化街区现场参与体验。\n※指挥官关注《碧蓝航线》官方B站账号后，可参与互动游戏，集章兑换周边礼品哟！\n※兑换周边每日数量有限，兑完即止。\n※天气炎热，请指挥官做好防暑准备，出行注意安全哟。",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                }
              ],
              "text": "#碧蓝航线# #碧蓝航线漫展# #2024港区盛夏清凉节#\n◆ 「港区盛夏清凉节」长沙站·街区快闪 到达！◆ \n\n碧蓝夏日，映照专属的街景~\n街区快闪即将开启，\n与少女们一同踏上这场特别的城市漫步之旅吧！\n\n◆ 互动游戏开放时间：2024年8月17日~8月18日，每日10:00~12:00及14:00~19:00\n◆ 街区快闪体验地址：湖南省长沙市开福区潮宗街历史文化街区\n◆ 参与方式：无需预约，前往现场即可参与体验~\n◆ 体验须知：\n※8月17日~8月18日期间，指挥官可前往潮宗街历史文化街区现场参与体验。\n※指挥官关注《碧蓝航线》官方B站账号后，可参与互动游戏，集章兑换周边礼品哟！\n※兑换周边每日数量有限，兑完即止。\n※天气炎热，请指挥官做好防暑准备，出行注意安全哟。"
            },
            "major": {
              "draw": {
                "id": 325690655,
                "items": [
                  {
                    "height": 6000,
                    "size": 2737.6729,
                    "src": "http://i0.hdslb.com/bfs/new_dyn/722dc5e7eba3c3f6861b294f6bf3020c233114659.jpg",
                    "tags": [],
                    "width": 4000
                  },
                  {
                    "height": 4000,
                    "size": 4852.4023,
                    "src": "http://i0.hdslb.com/bfs/new_dyn/b04110f894184880666ee8b204000846233114659.jpg",
                    "tags": [],
                    "width": 6000
                  },
                  {
                    "height": 4000,
                    "size": 3941.9678,
                    "src": "http://i0.hdslb.com/bfs/new_dyn/8ce3c1e6f2d33a47d42f35193b9e5f55233114659.jpg",
                    "tags": [],
                    "width": 6000
                  },
                  {
                    "height": 4000,
                    "size": 4461.9707,
                    "src": "http://i0.hdslb.com/bfs/new_dyn/ab9a5bf2215f88fed6026d67d98ec901233114659.jpg",
                    "tags": [],
                    "width": 6000
                  },
                  {
                    "height": 4000,
                    "size": 3137.0205,
                    "src": "http://i0.hdslb.com/bfs/new_dyn/18e62cf8ebc7c07b99e042ac4cdeeaaa233114659.jpg",
                    "tags": [],
                    "width": 6000
                  },
                  {
                    "height": 4000,
                    "size": 9561.615,
                    "src": "http://i0.hdslb.com/bfs/new_dyn/1036f447fcbec195e717e2a5b3091a73233114659.jpg",
                    "tags": [],
                    "width": 6000
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
                      "orig_text": "豌豆羹：",
                      "rid": "3493280973064560",
                      "text": "豌豆羹：",
                      "type": "RICH_TEXT_NODE_TYPE_AT"
                    },
                    {
                      "orig_text": "大帝皮肤加彩蛋！",
                      "text": "大帝皮肤加彩蛋！",
                      "type": "RICH_TEXT_NODE_TYPE_TEXT"
                    }
                  ],
                  "text": "大帝皮肤加彩蛋！"
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
              "count": 446,
              "forbidden": false
            },
            "forward": {
              "count": 47,
              "forbidden": false
            },
            "like": {
              "count": 4352,
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
          "comment_id_str": "966281785469042740",
          "comment_type": 17,
          "like_icon": {
            "action_url": "",
            "end_url": "",
            "id": 0,
            "start_url": ""
          },
          "rid_str": "966281785469042740"
        },
        "id_str": "966281785469042740",
        "modules": {
          "module_author": {
            "avatar": {
              "container_size": {
                "height": 1.35,
                "width": 1.35
              },
              "fallback_layers": {
                "is_critical_group": true,
                "layers": [
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.675,
                        "axis_y": 0.675,
                        "coordinate_pos": 2
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 1,
                        "width": 1
                      }
                    },
                    "layer_config": {
                      "is_critical": true,
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "placeholder": 6,
                          "remote": {
                            "bfs_style": "widget-layer-avatar",
                            "url": "https://i1.hdslb.com/bfs/face/21426275f3d3149b96b88783275205ba574c09e3.jpg"
                          },
                          "src_type": 1
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  },
                  {
                    "general_spec": {
                      "pos_spec": {
                        "axis_x": 0.8000000000000002,
                        "axis_y": 0.8000000000000002,
                        "coordinate_pos": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      },
                      "size_spec": {
                        "height": 0.41666666666666663,
                        "width": 0.41666666666666663
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "background-color": "rgb(255,255,255)",
                              "border": "2px solid rgba(255,255,255,1)",
                              "borderRadius": "50%",
                              "boxSizing": "border-box"
                            }
                          }
                        },
                        "ICON_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_image": {
                        "image_src": {
                          "local": 3,
                          "src_type": 2
                        }
                      },
                      "res_type": 3
                    },
                    "visible": true
                  }
                ]
              },
              "mid": "178429408"
            },
            "face": "https://i1.hdslb.com/bfs/face/21426275f3d3149b96b88783275205ba574c09e3.jpg",
            "face_nft": false,
            "following": true,
            "jump_url": "//space.bilibili.com/178429408/dynamic",
            "label": "",
            "mid": 178429408,
            "name": "老弟一号",
            "official_verify": {
              "desc": "",
              "type": 0
            },
            "pendant": {
              "expire": 0,
              "image": "",
              "image_enhance": "",
              "image_enhance_frame": "",
              "n_pid": 0,
              "name": "",
              "pid": 0
            },
            "pub_action": "",
            "pub_location_text": "",
            "pub_time": "2天前",
            "pub_ts": 1723818410,
            "type": "AUTHOR_TYPE_NORMAL",
            "vip": {
              "avatar_subscript": 1,
              "avatar_subscript_url": "",
              "due_date": 1728576000000,
              "label": {
                "bg_color": "#FB7299",
                "bg_style": 1,
                "border_color": "",
                "img_label_uri_hans": "https://i0.hdslb.com/bfs/activity-plat/static/20220608/e369244d0b14644f5e1a06431e22a4d5/0DFy9BHgwE.gif",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d7e624d13d3e134251e4174a7318c19a8edbd71.png",
                "img_label_uri_hant": "",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/uckjAv3Npy.png",
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
                  "orig_text": "不管怎么样，我先把香槟开了",
                  "text": "不管怎么样，我先把香槟开了",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                },
                {
                  "emoji": {
                    "icon_url": "https://i0.hdslb.com/bfs/emote/bf7e00ecab02171f8461ee8cf439c73db9797748.png",
                    "size": 1,
                    "text": "[脱单doge]",
                    "type": 1
                  },
                  "orig_text": "[脱单doge]",
                  "text": "[脱单doge]",
                  "type": "RICH_TEXT_NODE_TYPE_EMOJI"
                },
                {
                  "orig_text": "要是褒姒，直播抽一百个爵柏电源",
                  "text": "要是褒姒，直播抽一百个爵柏电源",
                  "type": "RICH_TEXT_NODE_TYPE_TEXT"
                }
              ],
              "text": "不管怎么样，我先把香槟开了[脱单doge]要是褒姒，直播抽一百个爵柏电源"
            },
            "major": null,
            "topic": null
          },
          "module_interaction": {
            "items": [
              {
                "desc": {
                  "rich_text_nodes": [
                    {
                      "orig_text": "芊芊老猫的日常：",
                      "rid": "1284100140",
                      "text": "芊芊老猫的日常：",
                      "type": "RICH_TEXT_NODE_TYPE_AT"
                    },
                    {
                      "orig_text": "还是好人多啊",
                      "text": "还是好人多啊",
                      "type": "RICH_TEXT_NODE_TYPE_TEXT"
                    },
                    {
                      "emoji": {
                        "icon_url": "https://i0.hdslb.com/bfs/emote/4683fd9ffc925fa6423110979d7dcac5eda297f4.png",
                        "size": 1,
                        "text": "[OK]",
                        "type": 1
                      },
                      "orig_text": "[OK]",
                      "text": "[OK]",
                      "type": "RICH_TEXT_NODE_TYPE_EMOJI"
                    }
                  ],
                  "text": "还是好人多啊[OK]"
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
              "count": 156,
              "forbidden": false
            },
            "forward": {
              "count": 1,
              "forbidden": false
            },
            "like": {
              "count": 1367,
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
          "id_str": "966274874613956608",
          "modules": {
            "module_author": {
              "avatar": {
                "container_size": {
                  "height": 1.35,
                  "width": 1.35
                },
                "fallback_layers": {
                  "is_critical_group": true,
                  "layers": [
                    {
                      "general_spec": {
                        "pos_spec": {
                          "axis_x": 0.675,
                          "axis_y": 0.675,
                          "coordinate_pos": 2
                        },
                        "render_spec": {
                          "opacity": 1
                        },
                        "size_spec": {
                          "height": 1,
                          "width": 1
                        }
                      },
                      "layer_config": {
                        "is_critical": true,
                        "tags": {
                          "AVATAR_LAYER": {},
                          "GENERAL_CFG": {
                            "config_type": 1,
                            "general_config": {
                              "web_css_style": {
                                "borderRadius": "50%"
                              }
                            }
                          }
                        }
                      },
                      "resource": {
                        "res_image": {
                          "image_src": {
                            "placeholder": 6,
                            "remote": {
                              "bfs_style": "widget-layer-avatar",
                              "url": "https://i2.hdslb.com/bfs/face/4c9095a6fc7d6ef7bf97ee1c65767f537763c60c.jpg"
                            },
                            "src_type": 1
                          }
                        },
                        "res_type": 3
                      },
                      "visible": true
                    },
                    {
                      "general_spec": {
                        "pos_spec": {
                          "axis_x": 0.8000000000000002,
                          "axis_y": 0.8000000000000002,
                          "coordinate_pos": 1
                        },
                        "render_spec": {
                          "opacity": 1
                        },
                        "size_spec": {
                          "height": 0.41666666666666663,
                          "width": 0.41666666666666663
                        }
                      },
                      "layer_config": {
                        "tags": {
                          "GENERAL_CFG": {
                            "config_type": 1,
                            "general_config": {
                              "web_css_style": {
                                "background-color": "rgb(255,255,255)",
                                "border": "2px solid rgba(255,255,255,1)",
                                "borderRadius": "50%",
                                "boxSizing": "border-box"
                              }
                            }
                          },
                          "ICON_LAYER": {}
                        }
                      },
                      "resource": {
                        "res_image": {
                          "image_src": {
                            "local": 4,
                            "src_type": 2
                          }
                        },
                        "res_type": 3
                      },
                      "visible": true
                    }
                  ]
                },
                "mid": "652239032"
              },
              "face": "https://i2.hdslb.com/bfs/face/4c9095a6fc7d6ef7bf97ee1c65767f537763c60c.jpg",
              "face_nft": false,
              "following": null,
              "jump_url": "//space.bilibili.com/652239032/dynamic",
              "label": "",
              "mid": 652239032,
              "name": "IGN中国",
              "official_verify": {
                "desc": "",
                "type": 1
              },
              "pendant": {
                "expire": 0,
                "image": "",
                "image_enhance": "",
                "image_enhance_frame": "",
                "n_pid": 0,
                "name": "",
                "pid": 0
              },
              "pub_action": "投稿了视频",
              "pub_time": "",
              "pub_ts": 1723816801,
              "type": "AUTHOR_TYPE_NORMAL",
              "vip": {
                "avatar_subscript": 0,
                "avatar_subscript_url": "",
                "due_date": 0,
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
                "type": 0
              }
            },
            "module_dynamic": {
              "additional": null,
              "desc": {
                "rich_text_nodes": [
                  {
                    "orig_text": "《黑神话：悟空》绝对可以说是一座中国游戏行业的里程碑，它所呈现的优秀品质对得起这四年来它背负的所有期待，这是真正意义上放在全球市场也是极具竞争力的国产游戏，而游戏科学也将在此役之后毫无疑问成为全球顶尖ARPG游戏开发商之一。",
                    "text": "《黑神话：悟空》绝对可以说是一座中国游戏行业的里程碑，它所呈现的优秀品质对得起这四年来它背负的所有期待，这是真正意义上放在全球市场也是极具竞争力的国产游戏，而游戏科学也将在此役之后毫无疑问成为全球顶尖ARPG游戏开发商之一。",
                    "type": "RICH_TEXT_NODE_TYPE_TEXT"
                  }
                ],
                "text": "《黑神话：悟空》绝对可以说是一座中国游戏行业的里程碑，它所呈现的优秀品质对得起这四年来它背负的所有期待，这是真正意义上放在全球市场也是极具竞争力的国产游戏，而游戏科学也将在此役之后毫无疑问成为全球顶尖ARPG游戏开发商之一。"
              },
              "major": {
                "archive": {
                  "aid": "1456400345",
                  "badge": {
                    "bg_color": "#FB7299",
                    "color": "#FFFFFF",
                    "icon_url": null,
                    "text": "投稿视频"
                  },
                  "bvid": "BV1Ti421a7dv",
                  "cover": "http://i2.hdslb.com/bfs/archive/fd87a4e75738b0de1388df60f5e4ce5011b1367a.jpg",
                  "desc": "《黑神话：悟空》绝对可以说是一座中国游戏行业的里程碑，它所呈现的优秀品质对得起这四年来它背负的所有期待，这是真正意义上放在全球市场也是极具竞争力的国产游戏，我相信它会成为今年年度游戏的有力竞争者，而游戏科学也将在此役之后毫无疑问成为全球顶尖ARPG游戏开发商之一。",
                  "disable_preview": 0,
                  "duration_text": "10:00",
                  "jump_url": "//www.bilibili.com/video/BV1Ti421a7dv/",
                  "stat": {
                    "danmaku": "4.6万",
                    "play": "595.1万"
                  },
                  "title": "【IGN】10分，《黑神话：悟空》评测：踏平坎坷成大道",
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
      }
    ],
    "offset": "966281785469042740",
    "update_baseline": "966888011247648768",
    "update_num": 5
  }
}
```

</details>

## 检测是否有新动态

> https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/all/update

*请求方式：GET*

认证方式: Cookie (SESSDATA)

**URL参数:**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| - | - | - | - | - |
| type | str | 动态类型 | 不必要 | 默认为 `all` |
| update_baseline | id | 更新基线 | 必要 | 用于检测是否有新动态, 默认为上次请求 [获取全部动态列表](#获取全部动态列表) 返回的 `update_baseline`, 实测填 `0` 也可正常获取 |
| web_location | str | 333.1365 | 不必要 | |

**JSON回复:**

根:

| 字段 | 类型 | 内容 | 备注 |
| - | - | - | - |
| code | num | 返回值 | 0: 成功<br />-101: 账号未登录<br />-400: 请求错误 |
| message | str | 错误信息 | 默认为 0 |
| ttl | num | 1 | |
| data | obj | 信息本体 | |

`data` :

| 字段 | 类型 | 内容 | 备注 |
| - | - | - | - |
| update_num | num | 有新动态的数量 | |

**示例:**

```shell
curl -G 'https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/all/update' \
--data-urlencode 'update_baseline=114514' \
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
    "update_num": 9
  }
}
```

</details>
