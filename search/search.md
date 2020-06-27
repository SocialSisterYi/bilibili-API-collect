# 普通搜索

## 默认搜索(综合搜索)

> https://api.bilibili.com/x/web-interface/search/all/v2

*方式:GET*

返回和关键字相关的20条信息

**url参数：**

| 参数名          | 类型 | 内容      | 含义         | 备注     |
| --------------- | ---- | --------- | ------------ | -------- |
| keyword         | str  | 字符串    | 搜索的关键词 | 关键词   |
| order           | str  | totalrank | 综合排序     | 排序方式 |
| duration        | str  | 0         | 全部时长     | 时长     |
| tids            | str  | 0         | 全部分区     | 分区代码 |
| page            | str  | 1         | 分页值       | 分页     |
| \_\_refresh\_\_ | str  | true      |              | 未知     |
| highlight       | str  | 1         |              | 未知     |
| single_column   | str  | 0         |              | 未知     |
| context         | str  | 空        |              | 未知     |
| tids_2          | str  | 空        |              | 未知     |
| \_extra         | str  | 空        |              | 未知     |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注         |
| ------- | ---- | -------- | ------------ |
| code    | num  | 返回值   | 0：成功      |
| message | str  | 错误信息 | 默认为0      |
| ttl     | num  | 1        | 作用尚不明确 |
| data    | obj  | 信息本体 |              |

`data`对象：

| 字段             | 类型 | 内容               | 备注                 |
| ---------------- | ---- | ------------------ | -------------------- |
| seid             | num  | 搜索id             |                      |
| page             | num  | 页数               |                      |
| pagesize         | num  | 每页条数           | 固定20               |
| numResults       | num  | 总条数             | 最大值为1000         |
| numPages         | num  | 分页数             | 最大值为50           |
| suggest_keyword  |      | 空                 | 作用尚不明确         |
| rqt_type         | str  | search             | 作用尚不明确         |
| cost_time        | obj  | 详细搜索用时       | 大概                 |
| exp_list         | obj  |                    | 作用尚不明确         |
| egg_hit          | obj  | 详细分类搜索结果   | 数量页数等           |
| top_tlist        | obj  | 详细分类搜索结果数 | 视频、番剧等分别多少 |
| show_column      | num  | 0                  | 作用尚不明确         |
| show_module_list | list | 返回结果类型列表   |                      |
| result           | list | 结果列表           |                      |

`result`对象：

| 字段     | 类型 | 内容         | 备注                                 |
| -------- | ---- | ------------ | ------------------------------------ |
| 列表下标 | obj  | 搜索结果结果 | 包含多种类型结果，为bilibili综合搜索 |

**示例：**

https://api.bilibili.com/x/web-interface/search/all/v2?context=&page=1&order=totalrank&keyword=少年&duration=0&tids_2=&__refresh__=true&_extra=&tids=0&highlight=1&single_column=0

## 分类搜索

> https://api.bilibili.com/x/web-interface/search/type

*方式:GET*

返回和关键字相关的20条信息

**url参数：**

| 参数名          | 类型 | 内容                                                         | 含义                                                         | 备注                                                         |
| --------------- | ---- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| keyword         | str  | 字符串                                                       | 搜索的关键词                                                 | 关键词                                                       |
| order           | str  | **totalrank**<br/>click<br/>pubdate<br/>dm<br/>stow<br/>------<br/>0<br/>fans<br/>level<br/>------<br/>online<br/>live_time | **综合排序**<br/>最多点击<br/>最新发布<br/>最多弹幕<br/>最多收藏<br/>-------------<br/>默认排序<br/>粉丝数<br/>Lv等级<br/>-------------<br/>人气直播<br/>最新开播 | 排序方式<br/>------------<br/>用户<br/>------------<br/>直播间 |
| order_sort      | str  | 0<br/>1                                                      | 由高到低<br/>由低到高                                        | 粉丝数，Lv等级排序方式                                       |
| user_type       | str  | 0<br/>1<br/>2<br/>3                                          | 全部用户<br/>up主<br/>普通用户<br/>认证用户                  | 用户分类，用户专属                                           |
| duration        | str  | **0**<br/>1<br/>2<br/>3<br/>4                                | **全部时长**<br/>10分钟以下<br/>10-30分钟<br/>30-60分钟<br/>60分钟以上 | 时长                                                         |
| tids            | str  | **0**<br/>tid                                                | **全部分区**<br/>分区代码                                    | 分区代码                                                     |
| category_id     | str  | **0**<br/>2<br/>1<br/>28<br/>3<br/>29<br/>16<br/>17<br/>--------<br/>0<br/>1<br/>2 | **全部分区**<br/>动画<br/>游戏<br/>影视<br/>生活<br/>兴趣<br/>轻小说<br/>科技<br/>--------<br/>全部分区<br/>画友<br/>摄影 | 类型，专栏专属<br/>-----------------------<br/>类型，相簿专属 |
| search_type     | str  | **video**<br/>media_bangumi<br/>media_ft<br/>live<br/>live_user<br/>article<br/>topic<br/>bili_user<br/>photo | **视频**<br/>番剧<br/>影视<br/>直播<br/>主播<br/>专栏<br/>话题<br/>用户<br/>相簿 | 搜索类型                                                     |
| cover_type      | str  | user_cover<br/>cover                                         | 封面图<br/>关键帧                                            | 直播，封面类型                                               |
| page            | str  | 1                                                            | 分页值                                                       | 分页                                                         |
| \_\_refresh\_\_ | str  | true                                                         |                                                              | 未知                                                         |
| highlight       | str  | 1                                                            |                                                              | 未知                                                         |
| single_column   | str  | 0                                                            |                                                              | 未知                                                         |
| context         | str  | 空                                                           |                                                              | 未知                                                         |
| tids_2          | str  | 空                                                           |                                                              | 未知                                                         |
| \_extra         | str  | 空                                                           |                                                              | 未知                                                         |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                           |
| ------- | ---- | -------- | --------------------------------------------- |
| code    | num  | 返回值   | 0：成功                                        |
| message | str  | 错误信息 | 默认为0                                        |
| ttl     | num  | 1        | 作用尚不明确                                   |
| data    | obj  | 信息本体 |                                               |

`data`对象：

| 字段            | 类型 | 内容             | 备注         |
| --------------- | ---- | ---------------- | ------------ |
| seid            | num  | 搜索id           |              |
| page            | num  | 页数             |              |
| pagesize        | num  | 每页条数         | 固定20       |
| numResults      | num  | 总条数           | 最大值为1000 |
| numPages        | num  | 分页数           | 最大值为50   |
| suggest_keyword |      | 空               | 作用尚不明确 |
| rqt_type        | str  | search           | 作用尚不明确 |
| cost_time       | obj  | 详细搜索用时     | 大概         |
| exp_list        | obj  |                  | 作用尚不明确 |
| egg_hit         | obj  | 详细分类搜索结果 | 数量页数等   |
| result          | list | 结果列表         |              |
| show_column     | num  | 0                | 作用尚不明确 |

`result`对象：

| 字段     | 类型 | 内容         | 备注                 |
| -------- | ---- | ------------ | -------------------- |
| 列表下标 | obj  | 搜索结果结果 | 一般列表包含20条数据 |

**示例：**

https://api.bilibili.com/x/web-interface/search/type?context=&search_type=video&page=1&order=&keyword=少年&duration=&category_id=&tids_1=&tids_2=&__refresh__=true&_extra=&highlight=1&single_column=0