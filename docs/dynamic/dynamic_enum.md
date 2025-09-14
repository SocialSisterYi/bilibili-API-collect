# 动态类型对照

## 动态类型

| 类型 | 说明 | comment_id_str | comment_type |rid_str| 示例 |
| --- | --- | --- | --- | --- | --- |
| DYNAMIC_TYPE_NONE | 无效动态 |||| [716510857084796964](https://t.bilibili.com/716510857084796964) |
| DYNAMIC_TYPE_FORWARD | 动态转发 |动态本身id|17|||
| DYNAMIC_TYPE_AV | 投稿视频 |视频AV号| 1 |视频AV号||
| DYNAMIC_TYPE_PGC | 剧集（番剧、电影、纪录片） |剧集分集AV号| 1 |剧集分集EP号||
| DYNAMIC_TYPE_COURSES | ||| ||
| DYNAMIC_TYPE_WORD | 纯文字动态 |动态本身id|17|| [718377531474968613](https://t.bilibili.com/718377531474968613) |
| DYNAMIC_TYPE_DRAW | 带图动态 |相簿id|11|相簿id| [718384798557536290](https://t.bilibili.com/718384798557536290) |
| DYNAMIC_TYPE_ARTICLE | 投稿专栏 |专栏cv号|12|专栏cv号| [718372214316990512](https://t.bilibili.com/718372214316990512) |
| DYNAMIC_TYPE_MUSIC | 音乐 | 音频au号 | 14 | 音频au号 | [128788657410273954](https://t.bilibili.com/128788657410273954) |
| DYNAMIC_TYPE_COMMON_SQUARE | 装扮<br/>剧集点评<br/>普通分享 ||17|| [551309621391003098](https://t.bilibili.com/551309621391003098)<br/>[716503778995470375](https://t.bilibili.com/716503778995470375)<br/>[716481612656672789](https://t.bilibili.com/716481612656672789) |
| DYNAMIC_TYPE_COMMON_VERTICAL | ||| ||
| DYNAMIC_TYPE_LIVE | 直播间分享 |动态本身id||直播间id| [216042859353895488](https://t.bilibili.com/216042859353895488) |
| DYNAMIC_TYPE_MEDIALIST | 收藏夹 |收藏夹ml号|19|收藏夹ml号| [534428265320147158](https://t.bilibili.com/534428265320147158) |
| DYNAMIC_TYPE_COURSES_SEASON | 课程 |||| [717906712866062340](https://t.bilibili.com/717906712866062340) |
| DYNAMIC_TYPE_COURSES_BATCH | |||| |
| DYNAMIC_TYPE_AD | ||| ||
| DYNAMIC_TYPE_APPLET | ||| ||
| DYNAMIC_TYPE_SUBSCRIPTION | ||| ||
| DYNAMIC_TYPE_LIVE_RCMD | 直播开播 |动态本身id|17|live_id| [718371505648435205](https://t.bilibili.com/718371505648435205) |
| DYNAMIC_TYPE_BANNER | ||| ||
| DYNAMIC_TYPE_UGC_SEASON | 合集更新 |视频AV号|1|视频AV号| [718390979031203873](https://t.bilibili.com/718390979031203873) |
| DYNAMIC_TYPE_SUBSCRIPTION_NEW | ||| ||

## 富文本节点类型

参见 [图文富文本节点类型](../opus/rich_text_nodes.md#富文本节点类型)

## 作者类型

| 类型                     | 说明   | 示例  | 
|------------------------|------|-----|
| AUTHOR_TYPE_NONE       |      |     |
| AUTHOR_TYPE_NORMAL     | 普通更新 |     |
| AUTHOR_TYPE_PGC        | 剧集更新 |     |
| AUTHOR_TYPE_UGC_SEASON | 合集更新 |     |

## 

| 类型              | 说明  | 示例  | 
|-----------------|-----|-----|
| EMOJI_TYPE_NONE |     |     |
| EMOJI_TYPE_OLD  |     |     |
| EMOJI_TYPE_NEW  |     |     |
| EMOJI_TYPE_VIP  |     |     |

## 相关内容卡片类型

| 类型                      | 说明   | 示例                                                                       | 
|-------------------------|------|--------------------------------------------------------------------------|
| ADDITIONAL_TYPE_NONE    |      |                                                                          |
| ADDITIONAL_TYPE_PGC     |      |                                                                          |
| ADDITIONAL_TYPE_GOODS   | 商品信息 |                                                                          |
| ADDITIONAL_TYPE_VOTE    | 投票   | [716365292050055176](https://t.bilibili.com/716365292050055176)          |
| ADDITIONAL_TYPE_COMMON  | 一般类型 | 游戏<br/>[716357878942793745](https://t.bilibili.com/716357878942793745)   |
| ADDITIONAL_TYPE_MATCH   | 比赛信息? |                                                                          |
| ADDITIONAL_TYPE_UP_RCMD |      |                                                                          |
| ADDITIONAL_TYPE_UGC     | 视频跳转 | [716489253410832401](https://t.bilibili.com/716489253410832401)          |
| ADDITIONAL_TYPE_RESERVE |      | 直播预约<br/>[716524987542929443](https://t.bilibili.com/716524987542929443) |
| ADDITIONAL_TYPE_UPOWER_LOTTERY | 充电专属抽奖 | |

## 

| 类型                            | 说明  | 示例  | 
|-------------------------------|-----|-----|
| ADDITIONAL_BUTTON_TYPE_NONE   |     |     |
| ADDITIONAL_BUTTON_TYPE_JUMP   |     |     |
| ADDITIONAL_BUTTON_TYPE_BUTTON |     |     |

## 

| 类型                               | 说明  | 示例  | 
|----------------------------------|-----|-----|
| ADDITIONAL_BUTTON_STATUS_NONE    |     |     |
| ADDITIONAL_BUTTON_STATUS_UNCHECK |     |     |
| ADDITIONAL_BUTTON_STATUS_CHECK   |     |     |

## 

| 类型                            | 说明  | 示例  | 
|-------------------------------|-----|-----|
| ADD_BUTTON_CLICK_TYPE_NONE    |     |     |
| ADD_BUTTON_CLICK_TYPE_RESERVE |     |     |

## 

| 类型                      | 说明  | 示例  | 
|-------------------------|-----|-----|
| DISABLE_STATE_HIGHLIGHT |     |     |
| DISABLE_STATE_GRAY      |     |     |

## 

| 类型                         | 说明  | 示例  | 
|----------------------------|-----|-----|
| ADD_BUTTON_BG_STYLE_FILL   |     |     |
| ADD_BUTTON_BG_STYLE_STROKE |     |     |
| ADD_BUTTON_BG_STYLE_GRAY   |     |     |

## 

| 类型                               | 说明  | 示例  | 
|----------------------------------|-----|-----|
| HIGHLIGHT_TEXT_STYLE_TYPE_NONE   |     |     |
| HIGHLIGHT_TEXT_STYLE_TYPE_ACTIVE |     |     |

## 动态主体类型

| 类型                          | 说明    | 示例                                                              | 
|-----------------------------|-------|-----------------------------------------------------------------|
| MAJOR_TYPE_NONE             | 动态失效  | [716510857084796964](https://t.bilibili.com/716510857084796964) |
| MAJOR_TYPE_NONE             | 转发动态  | [866756840240709701](https://www.bilibili.com/opus/866756840240709701) |
| MAJOR_TYPE_OPUS             | 图文动态  | [870176712256651305](https://www.bilibili.com/opus/870176712256651305) |
| MAJOR_TYPE_ARCHIVE          | 视频    | [716526237365829703](https://t.bilibili.com/716526237365829703) |
| MAJOR_TYPE_PGC              | 剧集更新  | [645981661420322824](https://t.bilibili.com/645981661420322824) |
| MAJOR_TYPE_COURSES          |       |                                                                 |
| MAJOR_TYPE_DRAW             | 带图动态  | [716358050743582725](https://t.bilibili.com/716358050743582725) |
| MAJOR_TYPE_ARTICLE          |       |                                                                 |
| MAJOR_TYPE_MUSIC            | 音频更新  |                                                                 |
| MAJOR_TYPE_COMMON           | 一般类型  | [716481612656672789](https://t.bilibili.com/716481612656672789) |
| MAJOR_TYPE_LIVE             | 直播间分享 | [267505569812738175](https://t.bilibili.com/267505569812738175) |
| MAJOR_TYPE_MEDIALIST        |       |                                                                 |
| MAJOR_TYPE_APPLET           |       |                                                                 |
| MAJOR_TYPE_SUBSCRIPTION     |       |                                                                 |
| MAJOR_TYPE_LIVE_RCMD        | 直播状态  |                                                                 |
| MAJOR_TYPE_UGC_SEASON       | 合计更新  | [716509100448415814](https://t.bilibili.com/716509100448415814) |
| MAJOR_TYPE_SUBSCRIPTION_NEW |       |                                                                 |
| MAJOR_TYPE_UPOWER_COMMON    | 充电相关 | [1087983622038749191](https://t.bilibili.com/1087983622038749191) |

## 

| 类型              | 说明  | 示例  | 
|-----------------|-----|-----|
| MEDIA_TYPE_NONE |     |     |
| MEDIA_TYPE_UGC  |     |     |
| MEDIA_TYPE_PGC  |     |     |
| MEDIA_TYPE_LIVE |     |     |

## 

| 类型                       | 说明  | 示例  | 
|--------------------------|-----|-----|
| PGC_SUB_TYPE_NONE        |     |     |
| PGC_SUB_TYPE_BANGUMI     |     |     |
| PGC_SUB_TYPE_MOVIE       |     |     |
| PGC_SUB_TYPE_DOCUMENTARY |     |     |
| PGC_SUB_TYPE_DOMESTIC    |     |     |
| PGC_SUB_TYPE_TV          |     |     |

## 

| 类型                   | 说明  | 示例  | 
|----------------------|-----|-----|
| DRAW_TAG_TYPE_NONE   |     |     |
| DRAW_TAG_TYPE_COMMON |     |     |
| DRAW_TAG_TYPE_GOODS  |     |     |
| DRAW_TAG_TYPE_USER   |     |     |
| DRAW_TAG_TYPE_TOPIC  |     |     |
| DRAW_TAG_TYPE_LBS    |     |     |

## 

| 类型                               | 说明  | 示例  | 
|----------------------------------|-----|-----|
| MAJOR_COMMON_STYLE_TYPE_NONE     |     |     |
| MAJOR_COMMON_STYLE_TYPE_SQUARE   |     |     |
| MAJOR_COMMON_STYLE_TYPE_VERTICAL |     |     |

## 

| 类型                  | 说明  | 示例  | 
|---------------------|-----|-----|
| RESERVE_TYPE_NONE   |     |     |
| RESERVE_TYPE_RECALL |     |     |

## 

| 类型                       | 说明  | 示例  | 
|--------------------------|-----|-----|
| LIVE_STATE_TYPE_NONE     |     |     |
| LIVE_STATE_TYPE_LIVE     |     |     |
| LIVE_STATE_TYPE_ROTATION |     |     |

## 

| 类型                               | 说明  | 示例  | 
|----------------------------------|-----|-----|
| SUBSCRIPTION_NEW_STYLE_TYPE_NONE |     |     |
| SUBSCRIPTION_NEW_STYLE_TYPE_DRAW |     |     |
| SUBSCRIPTION_NEW_STYLE_TYPE_LIVE |     |     |

## 右上角三点菜单

| 类型                           | 说明      | 示例  | 
|------------------------------|---------|-----|
| THREE_POINT_DELETE           | 删除      |     |
| THREE_POINT_REPORT           | 举报      |     |
| THREE_POINT_FOLLOWING        | 关注/取消关注 |     |
| THREE_POINT_TOP              | 置顶/取消置顶 |     |
| THREE_POINT_UNFAV            |         |     |
| THREE_POINT_UNSUBS           |         |     |
| THREE_POINT_TOPIC_REPORT     |         |     |
| THREE_POINT_TOPIC_IRRELEVANT |         |     |
| THREE_POINT_RCMD_RESOURCE    |         |     |
| THREE_POINT_RCMD_FEEDBACK    |         |     |

## 

| 类型                 | 说明  | 示例  | 
|--------------------|-----|-----|
| FOLD_TYPE_NONE     |     |     |
| FOLD_TYPE_PUBLISH  |     |     |
| FOLD_TYPE_FREQUENT |     |     |
| FOLD_TYPE_UNITE    |     |     |
| FOLD_TYPE_LIMIT    |     |     |

## 

| 类型                           | 说明  | 示例  | 
|------------------------------|-----|-----|
| DYN_STATUS_TYPE_NONE         |     |     |
| DYN_STATUS_TYPE_NORMAL       |     |     |
| DYN_STATUS_TYPE_AUDITING     |     |     |
| DYN_STATUS_TYPE_SELF_VISIBLE |     |     |
| DYN_STATUS_TYPE_DELETED      |     |     |

## 

| 类型            | 说明  | 示例  | 
|---------------|-----|-----|
| SCENE_DETAIL  |     |     |
| SCENE_HOT     |     |     |
| SCENE_GENERAL |     |     |
| SCENE_SPACE   |     |     |
| SCENE_TOPIC   |     |     |
