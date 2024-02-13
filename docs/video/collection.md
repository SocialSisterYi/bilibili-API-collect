# 视频合集信息

## 获取视频合集信息

> https://api.bilibili.com/x/polymer/web-space/seasons_archives_list

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
|--------|-----|------|--------|-----|
| mid  | num | UP 主 ID | 必要 |  |
| season_id  | num | 视频合集 ID | 必要 |  |
| sort_reverse  | bool | 未知 | 可选 |  |
| page_num  | num | 页码索引 | 可选 |  |
| page_size  | num | 单页内容数量 | 可选 |  |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                                                                                 |
|---------|-----|------|------------------------------------------------------------------------------------|
| code    | num | 返回值  | 0：成功 |
| message | str | 错误信息 | 默认为0 |
| ttl     | num | 1    | |
| data    | obj | 信息本体 | |

`data`对象：

| 字段                    | 类型    | 内容                           | 备注                                                         |
| ----------------------- | ------- | ------------------------------ | ----------------------------------------------------------- |
| aids                    | array     | 稿件avid                       | 对应下方数组中内容 aid                                       |
| archives                | array     | 合集中的视频                    |                                                            |
| meta                    | obj       | 合集元数据                      |                                                            |
| page                    | obj       | 分页信息                        |                                                            |

`data`中的`archives`数组：

| 项   | 类型  | 内容       | 备注      |
|-----|-----|----------|---------|
| 0   | obj | 合集内容     |  |
| n   | obj | (n+1)P内容 |         |
| ……  | obj | ……       | ……      |

`archives`数组中的对象：

| 字段       | 类型  | 内容   | 备注  |
|----------|-----|------|-----|
| aid | num | 稿件avid ||
| bvid | str | 稿件bvid ||
| ctime | num | 创建时间 | Unix 时间戳 |
| duration | num | 视频时长 | 单位为秒 |
| enable_vt | bool | false ||
| interactive_video | bool | false ||
| pic | str | 封面 URL ||
| playback_position | num || 会随着播放时间增长，播放完成后为 -1 。单位未知 |
| pubdate | num | 发布日期 | Unix 时间戳 |
| stat | obj | 稿件信息 ||
| state | num | 0 ||
| title | str | 稿件标题||
| ugc_pay | num | 0 ||
| vt_display | str |||

`archives`中的`stat`对象：

| 字段       | 类型  | 内容   | 备注  |
|----------|-----|------|-----|
| view | num | 稿件播放量 ||
| vt | num | 0 ||

`data`中的`meta`对象：

| 字段              | 类型  | 内容           | 备注     |
|-----------------|-----|--------------|--------|
| category | num | 0 |  |
| covr | str | 合集封面 URL |  |
| description | str | 合集描述 |  |
| mid | num | UP 主 ID |  |
| name | num | 合集标题 |  |
| ptime | num | 发布时间 | Unix 时间戳 |
| season_id | num | 合集 ID |  |
| total | num | 合集内视频数量 |  |

`data`中的`page`对象：

| 字段              | 类型  | 内容           | 备注     |
|-----------------|-----|--------------|--------|
| page_num | num | 分页页码 |  |
| page_size | num | 单页个数 |  |
| total | num | 合集内视频数量 |  |
