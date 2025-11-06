# 评论区

<img src="../../assets/img/comment.svg" width="100" height="100"/>

评论系统为全站通用，且APP与web端接口共用，以type标明对象类型，以oid指向响应的对象id

---

**继续查看：**

- [查询类](list.md)
- [操作类](action.md)

## 评论区类型代码

（PS：以下部分内容来源不明，有待验证）

| 代码 | 评论区类型              | oid 的意义  |
| ---- | ----------------------- | ----------- |
| 1    | 视频稿件                | 稿件 avid   |
| 2    | 话题                    | 话题 id     |
| 4    | 活动                    | 活动 id     |
| 5    | 小视频                  | 小视频 id   |
| 6    | 小黑屋封禁信息          | 封禁公示 id |
| 7    | 公告信息                | 公告 id     |
| 8    | 直播活动                | 直播间 id   |
| 9    | 活动稿件                | (?)         |
| 10   | 直播公告                | (?)         |
| 11   | 相簿（图片动态）        | 相簿 id     |
| 12   | 专栏                    | 专栏 cvid   |
| 13   | 票务                    | (?)         |
| 14   | 音频                    | 音频 auid   |
| 15   | 风纪委员会              | 众裁项目 id |
| 16   | 点评                    | (?)         |
| 17   | 动态（纯文字动态&分享） | 动态 id     |
| 18   | 播单                    | (?)         |
| 19   | 音乐播单                | (?)         |
| 20   | 漫画                    | (?)         |
| 21   | 漫画                    | (?)         |
| 22   | 漫画                    | 漫画 mcid   |
| 33   | 课程                    | 课程 epid   |

## 评论条目对象

| 字段          | 类型                            | 内容               | 备注                                                         |
| ------------- | ------------------------------- | ------------------ | ------------------------------------------------------------ |
| rpid          | num                             | 评论 rpid          |                                                              |
| oid           | num                             | 评论区对象 id      |                                                              |
| type          | num                             | 评论区类型代码     | **类型代码见上表**                                           |
| mid           | num                             | 发送者 mid         |                                                              |
| root          | num                             | 根评论 rpid        | 若为一级评论则为 0<br />大于一级评论则为根评论 id            |
| parent        | num                             | 回复父评论 rpid    | 若为一级评论则为 0<br />若为二级评论则为根评论 rpid<br />大于二级评论为上一级评 论 rpid |
| dialog        | num                             | 回复对方 rpid      | 若为一级评论则为 0<br />若为二级评论则为该评论 rpid<br />大于二级评论为上一级评论 rpid |
| count         | num                             | 二级评论条数       |                                                              |
| rcount        | num                             | 回复评论条数       |                                                              |
| floor         | num                             | 评论楼层号         | **注：若不支持楼层则无此项**                                 |
| state         | num                             | 评论状态 | 0: 正常<br />17: 被阿瓦隆系统隐藏 (无法被别人看到, 只能自己看到) |
| fansgrade     | num                             | 是否具有粉丝标签   | 0：无<br />1：有                                             |
| attr          | num                             | 某属性位？         |                                                              |
| ctime         | num                             | 评论发送时间       | 时间戳                                                       |
| rpid_str      | str                             | 评论rpid           | 字串格式                                                     |
| root_str      | str                             | 根评论rpid         | 字串格式                                                     |
| parent_str    | str                             | 回复父评论rpid     | 字串格式                                                     |
| like          | num                             | 评论获赞数         |                                                              |
| action        | num                             | 当前用户操作状态   | 需要登录(Cookie 或 APP) <br />否则恒为 0<br />0：无<br />1：已点赞<br />2：已点踩 |
| member        | obj                             | 评论发送者信息     |                                                              |
| content       | obj                             | 评论信息           |                                                              |
| replies       | 无效时：null<br />有效时：array | 评论回复条目预览   | **仅嵌套一层**<br />否则为 null                              |
| assist        | num                             | (?)                |                                                              |
| folder        | obj                             | 折叠信息           |                                                              |
| up_action     | obj                             | 评论 UP 主操作信息 |                                                              |
| show_follow   | bool                            | (?)                |                                                              |
| invisible     | bool                            | 评论是否被隐藏      |                                                              |
| card_label    | obj                             | 右上角卡片标签信息   |                                                              |
| reply_control | obj                             | 评论提示文案信息   |                                                              |

`评论条目`中的`member`对象：

| 字段            | 类型                          | 内容                   | 备注                                                         |
| --------------- | ----------------------------- | ---------------------- | ------------------------------------------------------------ |
| mid             | str                           | 发送者 mid             |                                                              |
| uname           | str                           | 发送者昵称             |                                                              |
| sex             | str                           | 发送者性别             | 男 女 保密                                                   |
| sign            | str                           | 发送者签名             |                                                              |
| avatar          | str                           | 发送者头像 url         |                                                              |
| rank            | str                           | (?)                    |                                                              |
| DisplayRank     | str                           | (?)                    |                                                              |
| level_info      | obj                           | 发送者等级             |                                                              |
| pendant         | obj                           | 发送者头像框信息       |                                                              |
| nameplate       | obj                           | 发送者勋章信息         |                                                              |
| official_verify | obj                           | 发送者认证信息         |                                                              |
| vip             | obj                           | 发送者会员信息         |                                                              |
| fans_detail     | 无效时：null<br />有效时：obj | 发送者粉丝标签         |                                                              |
| following       | num                           | 是否关注该用户         | 需要登录(Cookie或APP) <br />否则恒为0<br />0：未关注<br />1：已关注 |
| is_followed     | num                           | 是否被该用户关注       | 需要登录(Cookie或APP) <br />否则恒为0<br />0：未关注<br />1：已关注 |
| user_sailing    | obj                           | 发送者评论条目装扮信息 |                                                              |
| is_contractor   | bool                          | 是否为合作用户？       |                                                              |
| contract_desc   | str                           | 合作用户说明？         |                                                              |

`member`中的`level_info`对象：

| 字段          | 类型 | 内容     | 备注 |
| ------------- | ---- | -------- | ---- |
| current_level | num  | 用户等级 |      |
| current_min   | num  | 0        |      |
| current_exp   | num  | 0        |      |
| next_exp      | num  | 0        |      |

`member`中的`pendant`对象：

| 字段                | 类型 | 内容           | 备注 |
| ------------------- | ---- | -------------- | ---- |
| pid                 | num  | 头像框 id      |      |
| name                | str  | 头像框名称     |      |
| image               | str  | 头像框图片 url |      |
| expire              | num  | 0              |      |
| image_enhance       | str  | 头像框图片 url |      |
| image_enhance_frame | str  | (?)            |      |

`member`中的`nameplate`对象：

| 字段        | 类型 | 内容              | 备注 |
| ----------- | ---- | ----------------- | ---- |
| nid         | num  | 勋章 id           |      |
| name        | str  | 勋章名称          |      |
| image       | str  | 挂件图片 url 正常 |      |
| image_small | str  | 勋章图片 url 小   |      |
| level       | str  | 勋章等级          |      |
| condition   | str  | 勋章条件          |      |

`member`中的`official_verify`对象：

| 字段 | 类型 | 内容     | 备注                                     |
| ---- | ---- | -------- | ---------------------------------------- |
| type | num  | 认证类型 | -1：无<br />0：个人认证<br />1：机构认证 |
| desc | str  | 认证信息 | 无为空                                   |

`member`中的`vip`对象：

| 字段                 | 类型 | 内容           | 备注                                    |
| -------------------- | ---- | -------------- | --------------------------------------- |
| vipType              | num  | 大会员类型     | 0：无<br />1：月会员<br />2：年以上会员 |
| vipDueDate           | num  | 大会员到期时间 | 毫秒 时间戳                             |
| dueRemark            | str  | (?)            |                                         |
| accessStatus         | num  | (?)            |                                         |
| vipStatus            | num  | 大会员状态     | 0：无<br />1：有                        |
| vipStatusWarn        | str  | (?)            |                                         |
| theme_type           | num  | 会员样式 id    |                                         |
| label                | obj  | 会员铭牌样式   |                                         |
| avatar_subscript     | num  | (?)            |                                         |
| avatar_subscript_url | str  | (?)            |                                         |
| nickname_color       | str  | 昵称颜色       |                                         |

`vip`中的`label`对象:

| 字段         | 类型 | 内容         | 备注                                                         |
| ------------ | ---- | ------------ | ------------------------------------------------------------ |
| path         | str  | (?)          |                                                              |
| text         | str  | 会员类型文案 |                                                              |
| label_theme  | str  | 会员类型     | vip：大会员<br />annual_vip：年度大会员<br />ten_annual_vip：十年大会员<br />hundred_annual_vip：百年大会员 |
| text_color   | str  | 文字颜色?    |                                                              |
| bg_style     | num  | (?)          |                                                              |
| bg_color     | str  | 背景颜色?    |                                                              |
| border_color | str  | 描边颜色?    |                                                              |

`member`中的`fans_detail`对象:

| 字段          | 类型 | 内容         | 备注 |
| ------------- | ---- | ------------ | ---- |
| uid           | num  | 用户 mid     |      |
| medal_id      | num  | 粉丝标签 id  |      |
| medal_name    | str  | 粉丝标签名   |      |
| score         | num  | (?)          |      |
| level         | num  | 当前标签等级 |      |
| intimacy      | num  | (?)          |      |
| master_status | num  | (?)          |      |
| is_receive    | num  | (?)          |      |

`member`中的`user_sailing`对象：

| 字段              | 类型                          | 内容         | 备注 |
| ----------------- | ----------------------------- | ------------ | ---- |
| pendant           | 无效时：null<br />有效时：obj | 头像框信息   |      |
| cardbg            | 无效时：null<br />有效时：obj | 评论卡片装扮 |      |
| cardbg_with_focus | null                          | (?)          |      |

`user_sailing`中的`pendant`对象：

| 字段                | 类型 | 内容           | 备注                                   |
| ------------------- | ---- | -------------- | -------------------------------------- |
| id                  | num  | 头像框 id      |                                        |
| name                | str  | 头像框名称     |                                        |
| image               | str  | 头像框图片 url |                                        |
| jump_url            | str  | 空             |                                        |
| type                | str  | 装扮类型       | suit：一般装扮<br />vip_suit：vip 装扮 |
| image_enhance       | str  | (?)            |                                        |
| image_enhance_frame | str  | (?)            |                                        |

`user_sailing`中的`cardbg`对象：

| 字段     | 类型 | 内容                     | 备注                                   |
| -------- | ---- | ------------------------ | -------------------------------------- |
| id       | num  | 评论条目装扮 id          |                                        |
| name     | str  | 评论条目装扮名称         |                                        |
| image    | str  | 评论条目装扮图片 url     |                                        |
| jump_url | str  | 评论条目装扮商城页面 url |                                        |
| fan      | obj  | 粉丝专属信息             |                                        |
| type     | str  | 装扮类型                 | suit：一般装扮<br />vip_suit：vip 装扮 |

`cardbg`中的`fan`对象：

| 字段     | 类型 | 内容               | 备注             |
| -------- | ---- | ------------------ | ---------------- |
| is_fan   | num  | 是否为粉丝专属装扮 | 0：否<br />1：是 |
| number   | num  | 粉丝专属编号       |                  |
| color    | str  | 数字颜色           | 颜色码           |
| name     | str  | 装扮名称           |                  |
| num_desc | str  | 粉丝专属编号       | 字串格式         |

`评论条目`中的`content`对象：

| 字段     | 类型  | 内容               | 备注                                                         |
| -------- | ----- | ------------------ | ------------------------------------------------------------ |
| message  | str   | 评论内容           | **重要**                                                     |
| plat     | num   | 评论发送端         | 1：web端<br />2：安卓客户端<br />3：ios 客户端<br />4：wp 客户端 |
| device   | str   | 评论发送平台设备   |                                                              |
| members  | array | at 到的用户信息    |                                                              |
| emote    | obj   | 需要渲染的表情转义 | 评论内容无表情则无此项                                       |
| jump_url | obj   | 需要高亮的超链转义 |                                                              |
| max_line | num   | 6                  | 收起最大行数                                                 |
| pictures | array   | 评论图片数组      |                                                           |

`content`中的`members`数组：

| 项   | 类型 | 内容             | 备注                             |
| ---- | ---- | ---------------- | -------------------------------- |
| 0    | obj  | at到的用户 1     | 基本同`评论条目`中的`member`对象 |
| n    | obj  | at到的用户 (n+1) | 项数为at到的不同的用户数         |
| ……   | obj  | ……               | ……                               |

`content`中的`emote`对象：

| 字段         | 类型 | 内容             | 备注     |
| ------------ | ---- | ---------------- | -------- |
| {表情转义符} | obj  | 表情转义符信息 1 |          |
| ……           | obj  | 表情转义符信息 n | 向下扩展 |

`emote`中的`{表情转义符}`对象：

| 字段       | 类型 | 内容         | 备注                                                     |
| ---------- | ---- | ------------ | -------------------------------------------------------- |
| id         | num  | 表情 id      |                                                          |
| package_id | num  | 表情包 id    |                                                          |
| state      | num  | 0            |                                                          |
| type       | num  | 表情类型     | 1：免费<br />2：会员专属<br />3：购买所得<br />4：颜文字 |
| attr       | num  | (?)          |                                                          |
| text       | str  | 表情转义符   |                                                          |
| url        | str  | 表情图片 url |                                                          |
| meta       | obj  | 属性信息     |                                                          |
| mtime      | num  | 表情创建时间 | 时间戳                                                   |
| jump_title | str  | 表情名称     |                                                          |

`{表情转义符}`中的`meta`对象：

| 字段  | 类型 | 内容         | 备注             |
| ----- | ---- | ------------ | ---------------- |
| size  | num  | 表情尺寸信息 | 1：小<br />2：大 |
| alias | str  | 简写名       | 无则无此项       |

`content`中的`jump_url`对象：

| 字段       | 类型 | 内容           | 备注     |
| ---------- | ---- | -------------- | -------- |
| {超链转义} | obj  | 超链转义信息 1 |          |
| ……         | obj  | 超链转义信息 n | 向下扩展 |

`jump_url`中的`{超链转义}`对象：

| 字段           | 类型 | 内容     | 备注 |
| -------------- | ---- | -------- | ---- |
| title          | str  | 标题     |      |
| state          | num  | 图标 url |      |
| prefixIcon     | str  | (?)      |      |
| appUrlSchema   | str  | (?)      |      |
| appName        | str  | (?)      |      |
| appPackageName | str  | (?)      |      |
| clickReport    | str  | 上报 id  |      |

`content`中的`pictures`数组中的对象：

| 字段       | 类型 | 内容      | 备注     |
| ---------- | ---- | -------- | -------- |
| img_src    | str  | 图片地址 |          |
| img_width  | num  | 图片宽度 |          |
| img_height | num  | 图片高度 |          |
| img_size   | num  | 图片大小 | 单位KB   |

`评论条目`中的`replies`数组：

| 项   | 类型 | 内容      | 备注                                                         |
| ---- | ---- | --------- | ------------------------------------------------------------ |
| 0    | obj  | 回复条目1 | **为本对象的递归嵌套**<br />**仅可嵌套一层**<br />按照热度顺序排列 |
| 1    | obj  | 回复条目2 |                                                              |
| 2    | obj  | 回复条目3 | 最后一项                                                     |

`评论条目`中的`folder`对象：

| 字段       | 类型 | 内容                   | 备注 |
| ---------- | ---- | ---------------------- | ---- |
| has_folded | bool | 是否有被折叠的二级评论 |      |
| is_folded  | bool | 评论是否被折叠         |      |
| rule       | str  | 相关规则页面 url       |      |

`评论条目`中的`up_action`对象：

| 字段  | 类型 | 内容             | 备注                    |
| ----- | ---- | ---------------- | ----------------------- |
| like  | bool | 是否UP主觉得很赞 | false：否<br />true：是 |
| reply | bool | 是否被UP主回复   | false：否<br />true：是 |

`评论条目`中的`card_label`对象：

| 字段                 | 类型  | 内容         | 备注                          |
| -------------------- | ---- | ------------ | ----------------------------- |
| rpid                 | num  | 评论 rpid    |                               |
| text_content         | str  | 标签文本     | 已知有`妙评`                   |
| text_color_day       | str  | 日间文本颜色  | 十六进制颜色值，下同            |
| text_color_night     | str  | 夜间文本颜色  |                               |
| label_color_day      | str  | 日间标签颜色  |                               |
| label_color_night    | str  | 夜间标签颜色  |                               |
| image                | str  |              | 作用不明                       |
| type                 | str  | 1            | 作用不明                       |
| background           | str  | 背景图片 url  |                               |
| background_width     | num  | 背景图片宽度  |                               |
| background_height    | num  | 背景图片高度  |                               |
| jump_url             | str  | 跳转链接      |                               |
| effect               | num  | 0            | 作用不明，可能用于控制动画，下同 |
| effect_start_time    | num  | 0            |                               |

`评论条目`中的`reply_control`对象：

| 字段                 | 类型 | 内容     | 备注                 |
| -------------------- | ---- | -------- | -------------------- |
| max_line             | num  | 6       | 用于控制折叠状态下的最大显示行数 |
| sub_reply_entry_text | str  | 回复提示 | `共 xx 条回复`       |
| sub_reply_title_text | str  | 回复提示 | `相关回复共有 xx 条` |
| time_desc            | str  | 时间提示 | `xx 天/小时 前发布`  |
| location             | str  | IP属地  | `IP属地：xx`<br />评论者发送评论时的IP地址属地<br />仅对2022-07-25 11:00及以后发布的评论有效<br />需要登录|
| support_share        | bool  | 是否可分享 | false：否<br />true：是 |
