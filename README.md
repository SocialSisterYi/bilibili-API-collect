<p align="center">
    <img src="imgs/logo.png" width="250" height="200">
</p>
<h1 align="center">哔哩哔哩-API收集整理</h1>
<p align="center">
    <a href="https://github.com/SocialSisterYi/bilibili-API-collect/issues" style="text-decoration:none">
        <img src="https://img.shields.io/github/issues/SocialSisterYi/bilibili-API-collect.svg" alt="GitHub issues"/>
    </a>
    <a href="https://github.com/SocialSisterYi/bilibili-API-collect/stargazers" style="text-decoration:none" >
        <img src="https://img.shields.io/github/stars/SocialSisterYi/bilibili-API-collect.svg" alt="GitHub stars"/>
    </a>
    <a href="https://github.com/SocialSisterYi/bilibili-API-collect/network" style="text-decoration:none" >
        <img src="https://img.shields.io/github/forks/SocialSisterYi/bilibili-API-collect.svg" alt="GitHub forks"/>
    </a>
    <a href="https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/LICENSE" style="text-decoration:none" >
        <img src="https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg" alt="GitHub license"/>
    </a>
</p>
<h3 align="center">野生API文档</h3>  
<h3 align="center">不断更新中....</h3>  

本项目旨在对 B 站 web 端、移动端以及 TV 端散落在世界各地的野生 api 进行收集整理，研究使用方法并对其进行说明，运用了黑箱法、控制变量法、js 逆向分析法、apk 拆包及反编译法、网络抓包法等研究办法

所有 rest api 均为标准 http 协议，请求数据大多为 url query 表单，返回数据大多为 json 或 protobuf

PS：所有 rest api 均可使用 https，文档中为了统一写作`http`（除过仅可https协议调用接口），为了数据安全建议调用接口时使用 https

小小的 Demo：~~av583785685~~ [视频失效原因](https://shakaianee.top/archives/56/)（[Youtube备链](https://www.youtube.com/watch?v=nfF91Z6fqGk)）

联动项目：[Hsury/Bilibili-Toolkit](https://github.com/Hsury/Bilibili-Toolkit)

---

**声明**：

1. 本项目遵守 CC-BY-NC 4.0 协议，禁止一切商业使用，如需转载请注明作者 ID
2. **请勿滥用，本项目仅用于学习和测试！请勿滥用，本项目仅用于学习和测试！请勿滥用，本项目仅用于学习和测试！**
3. 利用本项目提供的接口、文档等造成不良影响及后果与本人无关
4. 由于本项目的特殊性，可能随时停止开发或删档
5. 本项目为开源项目，不接受任何形式的催单和索取行为，更不容许存在付费内容

---

计划整理分类 & 目录：（文档已完结请选中 checkbox）二级目录正在建设中.....

- [x] [API 签名](other/API_sign.md)
- [ ] [公共错误码](other/errcode.md)
- [x] [图片格式化](other/picture.md)
- [x] [bvid 说明](other/bvid_desc.md)
- [ ] [gRPC API 接口定义](grpc_api)
- [ ] [登录](login)
  - [x] [登录操作（人机认证）](login/login_action)
    - [x] [短信登录](login/login_action/SMS.md)
    - [x] [密码登录](login/login_action/password.md)
    - [x] [二维码登录](login/login_action/QR.md)
    - [ ] SNS 登录（QQ & 微博）
  - [x] [登录基本信息](login/login_info.md)
  - [ ] [个人中心](login/member_center.md)
  - [ ] [注销登录](login/exit.md)
  - [x] [登录记录](login/login_notice.md)
- [ ] [消息中心](message)
  - [ ] [通知类消息](message/msg.md)
  - [ ] [私信](message/private_msg.md)
  - [ ] [设置](message/config.md)
- [ ] [用户](user)
  - [x] [基本信息](user/info.md)
  - [x] [状态数](user/status_number.md)
  - [x] [关系](user/relation.md)
  - [ ] [个人空间](user/space.md)
  - [x] [检查昵称是否可注册](user/check_nickname.md)
  - [x] [用户注册](user/register.md)
  - [x] [大会员福利兑换](user/vip.md)
- [ ] [视频](video)
  - [x] [视频分区一览（分区代码）](video/video_zone.md)
  - [x] [基本信息](video/info.md)
  - [x] [状态数](video/status_number.md)
  - [x] [快照](video/snapshot.md)
  - [x] [点赞 & 投币 & 收藏](video/like_coin_fav.md)
  - [ ] [TAG](video/tags.md)
  - [x] [视频推荐](video/recommend.md)
  - [x] [播放&下载地址（视频流）](video/videostream_url.md)
  - [ ] [互动视频](video/interact_video.md)
  - [x] [高能进度条](video/pbp.md)
  - [ ] [信息上报（心跳及记录历史）](video/report.md)
  - [x] [视频属性数据](video/attribute_data.md)
  - [x] [视频在线人数](video/online.md)
- [ ] [剧集（番剧、影视）](bangumi)
  - [ ] [基本信息](bangumi/info.md)
  - [ ] [播放&下载地址（视频流）](bangumi/videostream_url.md)
  - [ ] [时间轴](bangumi/timeline.md)
  - [ ] 状态数
  - [ ] 操作
- [ ] [视频弹幕](danmaku)
  - [x] [protobuf 实时弹幕](danmaku/danmaku_proto.md)
  - [x] [protobuf 弹幕元数据（BAS 弹幕 / 互动弹幕）](danmaku/danmaku_view_proto.md)
  - [x] [xml 实时弹幕](danmaku/danmaku_xml.md)
  - [x] [历史弹幕](danmaku/history.md)
  - [x] [快照](danmaku/snapshot.md)
  - [ ] [弹幕操作](danmaku/action.md)
  - [ ] 高级弹幕
  - [ ] 屏蔽管理
  - [ ] 智能防挡弹幕
  - [x] [弹幕个人配置修改](danmaku/config.md)
  - [x] [名词解释](danmaku/buzzword.md)
- [x] [视频笔记](note)
  - [x] [笔记列表](note/list.md)
  - [x] [笔记详细信息](note/info.md)
  - [x] [笔记操作](note/action.md)
- [ ] [专栏](article)
  - [ ] 分区
  - [X] [基本信息](article/info.md)
  - [X] [点赞 & 投币 & 收藏 & 分享](article/like_coin_fav.md)
  - [X] [文集基本信息](article/articles.md)
  - [X] [获取用户专栏文章列表](article/list.md)
- [ ] [音频](audio)
  - [x] [歌曲基本信息](audio/info.md)
  - [ ] [歌单 & 音频收藏夹详细信息](audio/music_list.md)
  - [ ] [状态数](audio/status_number.md)
  - [ ] [投币 & 收藏](audio/coin&fav.md)
  - [x] [播放 & 下载地址（音频流）](audio/musicstream_url.md)
  - [ ] 音频榜单
- [ ] [排行榜 & 最新视频](ranking&dynamic)
  - [ ] [排行榜](ranking&dynamic/ranking.md)
  - [ ] [热门视频](ranking&dynamic/popular.md)
  - [ ] [最新视频](ranking&dynamic/dynamic.md)
- [ ] [搜索](search)
  - [x] [搜索请求](search/search_request.md)
  - [x] [搜索结果](search/search_response.md)
  - [x] [默认搜索 & 热搜](search/hot.md)
  - [x] [搜索建议](search/suggest.md)
- [ ] [小黑屋](blackroom)
  - [ ] 基本信息
  - [x] [封禁公示](blackroom/banlist.md)
  - [x] [风纪委员及众裁案件相关](blackroom/jury)
    - [x] [风纪委员基本信息](blackroom/jury/base_info.md)
    - [x] [众裁案件基本信息](blackroom/jury/judgement_info.md)
    - [x] [裁决操作](blackroom/jury/action.md)
- [x] [评论区](comment)
  - [x] [评论区明细](comment/list.md)
  - [x] [操作](comment/action.md)
- [ ] [表情](emoji)
  - [x] [表情及表情包信息](emoji/list.md)
  - [x] [操作](emoji/action.md)
- [ ] [创作中心](creativecenter)
  - [ ] [统计与数据](creativecenter/statistics&data.md)
  - [ ] 列表查询相关
  - [x] [电磁力数据](creativecenter/railgun.md)
- [x] [实时广播（通讯协议）](broadcast)
  - [x] [视频内广播](broadcast/video_room.md)
- [ ] [充电](electric)
  - [x] [B币方式](electric/Bcoin.md)
  - [x] [微信 & 支付宝方式](electric/WeChat&Alipay.md)
  - [x] [充电留言](electric/charge_msg.md)
  - [x] [充电列表](electric/charge_list.md)
- [ ] [动态](dynamic)
  - [ ] [动态基本信息](dynamic/basicInfo.md)
  - [ ] [发送 & 转载动态](dynamic/publish.md)
  - [ ] [根据关键字搜索用户（at 别人时的填充列表）](dynamic/atlist.md)
  - [ ] [删除动态](dynamic/delete.md)
  - [ ] 动态列表
    - [x] [特定话题动态列表](/dynamic/tag_dynamics.md)
  - [ ] [动态内容](/dynamic/get_dynamic_detail.md)
  - [ ] 操作
- [ ] [相簿](album)
  - [x] [基本信息](album/info.md)
  - [x] [相簿列表](album/list.md)
  - [x] [推荐作者](album/recommend_author.md)
  - [x] [活动列表](album/activity_list.md)
  - [x] [操作](album/action.md)
  - [ ] 投稿
- [ ] [历史记录 & 稍后再看](history&toview)
  - [x] [历史记录](history&toview/history.md)
  - [x] [稍后再看](history&toview/toview.md)
- [ ] [收藏夹](fav)
  - [x] [基本信息](fav/info.md)
  - [x] [收藏夹内容](fav/list.md)
  - [ ] [收藏夹操作](fav/action.md)
- [ ] [课程](cheese)
  - [x] [课程基本信息](cheese/info.md)
  - [ ] 已购课程
  - [ ] 分区推荐列表
  - [ ] 操作
  - [x] [播放 & 下载地址（视频流）](cheese/videostream_url.md)
- [ ] [直播](live)
  - [ ] [直播间基本信息](live/info.md)
  - [ ] [直播分区](live/live_area.md)
  - [ ] [直播间管理](live/manage.md)
  - [ ] 直播间操作
  - [ ] [直播视频流](live/live_stream.md)
  - [ ] [直播信息流](live/message_stream.md)
- [ ] [转正答题](newbie_exam)
  - [x] [查询信息](newbie_exam/info.md)
  - [x] [拉取题目](newbie_exam/fetch.md)
  - [x] [操作](newbie_exam/action.md)
- [ ] B币钱包
  - [ ] 基本信息
  - [ ] B币充值
  - [ ] 贝壳相关
- [ ] [哔哩哔哩漫画](manga)
  - [x] [签到](manga/ClockIn.md)
  - [x] [积分商城](manga/point_shop.md)
  - [x] [漫画操作](manga/Comic.md)
  - [x] [漫读券/已购相关](manga/User.md)

- [ ] 哔哩哔哩游戏
- [ ] 轻视频
- [ ] [终端网络查询](clientinfo)
  - [x] [基于ip的地理位置查询](clientinfo/ip.md)
  - [x] [终端信息查询](clientinfo/client_info.md)
- [ ] [其他](other)
  - [x] [获取当前时间戳](other/time_stamp.md)
- [ ] [web端组件](web_widget)
  - [x] [分区当日投稿数](web_widget/zone_upload.md)
  - [x] [404 页漫画收集](web_widget/404_manga.md)
- [ ] [APP端组件](APP_widget)
  - [x] [开屏图片 + 恰饭珍贵录像](APP_widget/splash.md)
- [ ] [个性装扮](garb)
  - [x] [APP 主题](garb/skin.md)
  - [x] [主题色](garb/color.md)


B站专栏同步推出[《B站api研究记》](https://www.bilibili.com/read/readlist/rl207146)系列（更新状态：咕咕......），~~欢迎关注~~

**--Project_by [社会易姐QwQ](https://space.bilibili.com/293793435)**

# 鸣谢

你们的存在，让社区更美好

[![contributors](https://opencollective.com/bilibili-api-collect/contributors.svg?width=860&button=false)](https://github.com/SocialSisterYi/bilibili-API-collect/graphs/contributors)

# 相关协议基础

http 协议：[传送门](https://www.cnblogs.com/an-wen/p/11180076.html)

json 序列格式：[传送门](https://www.sojson.com/json/json_index.html)

xml 序列格式：[传送门](https://www.w3school.com.cn/xml/xml_intro.asp)

protobuf 序列格式：[传送门](https://www.jianshu.com/p/a24c88c0526a )

# 交流

<img src="imgs/up_face.jpg" width="100" height="100">

QQ 粉丝交流群：[1136462265](https://jq.qq.com/?_wv=1027&k=s1M0LCcu)

Telegram 讨论组：[@bilibili_API_collect_community](https://t.me/bilibili_API_collect_community)

B 站空间：<https://space.bilibili.com/293793435>

个人博客：<https://shakaianee.top>

# 发电

欢迎来~~交♂易~~，大家的支持就是我继续开发的动力！

~~请可爱的易姐喝杯奶茶~~

WeChat & Alipay：

<img src="imgs/sponsorQR.jpg" width="300" height="300">

OR Aifadian：https://afdian.net/@ShakaiAneE

# 相关项目

## 库及文档

- [jingyuexing/bilibiliAPI](https://github.com/jingyuexing/bilibiliAPI)
- [fython/BilibiliAPIDocs](https://github.com/fython/BilibiliAPIDocs)
- [czp3009/bilibili-api](https://github.com/czp3009/bilibili-api)
- [Vespa314/bilibili-api](https://github.com/Vespa314/bilibili-api)
- [whjstc/openbilibili-go-common-1](https://github.com/whjstc/openbilibili-go-common-1)
- [wnstar/bili-utils](https://github.com/wnstar/bili-utils)
- [lovelyyoshino/Bilibili-Live-API](https://github.com/lovelyyoshino/Bilibili-Live-API)
- [flaribbit/bilibili-manga-spider](https://github.com/flaribbit/bilibili-manga-spider)
- [simon300000/bili-api](https://github.com/simon300000/bili-api)
- [iyear/biligo](https://github.com/iyear/biligo) Bilibili API SDK in Golang
- [bilibili-openplatform/demo](https://github.com/bilibili-openplatform/demo): 哔哩哔哩开放平台示例代码库

## 成品

- [Infinity1309/NewpipeEnhanced](https://github.com/InfinityLoop1309/NewPipeEnhanced): 功能完善的Android流媒体综合客户端，支持Bilibili, Youtube, NicoNico
- [3Shain/BiliChat](https://github.com/3Shain/BiliChat) : 基于h5的B站直播弹幕姬
- [AncientLysine/BiliLocal](https://github.com/AncientLysine/BiliLocal):本地弹幕播放器
- [zyzsdy/biliroku](https://github.com/zyzsdy/biliroku):bilibili 生放送（直播）录制
- [otakustay/danmaku-to-ass](https://github.com/otakustay/danmaku-to-ass):A站B站弹幕转字幕文件
- [bilibili-helper/bilibili-helper-o](https://github.com/bilibili-helper/bilibili-helper-o):哔哩哔哩 (bilibili.com) 辅助工具，可以下载视频，查询弹幕发送人以及一些十分实用的直播区功能。
- [apachecn/BiliDriveEx](https://github.com/apachecn/BiliDriveEx):基于B站相簿上传的文件分块索引存储器
- [apachecn/CDNDrive](https://github.com/apachecn/CDNDrive):基于B站相簿上传的文件分块索引存储器
- [Hsury/BiliDrive](https://github.com/Hsury/BiliDrive):基于B站相簿上传的文件分块索引存储器
- [Tsuk1ko/bilibili-live-chat](https://github.com/Tsuk1ko/bilibili-live-chat):无后端的仿 YouTube Live Chat 风格的简易 Bilibili 弹幕姬
- [ironmanic/crawler_target_users_good](https://github.com/ironmanic/crawler_target_users_good):搜索bilibili特定视频，为评论 点赞，关注，私信，一体化服务
- [dd-center/DDatElectron](https://github.com/dd-center/DDatElectron):DD@Home 分布式项目, 桌面客户端
- [dd-center/vtbs.moe](https://github.com/dd-center/vtbs.moe):B站VTB数据中心
- [JunzhouLiu/BILIBILI-HELPER](https://github.com/JunzhouLiu/BILIBILI-HELPER):利用Linux Crontab定时任务,云函数，Docker等方式实现B站，哔哩哔哩（Bilibili）每日自动投币，签到，银瓜子兑换硬币，领取大会员福利，大会员月底给自己充电等。每天轻松获取65经验值。
- [the1812/Bilibili-Evolved](https://github.com/the1812/Bilibili-Evolved):强大的哔哩哔哩增强脚本: 下载视频, 音乐, 封面, 弹幕 / 简化直播间, 评论区, 首页 / 自定义顶栏, 删除广告, 夜间模式 / 触屏设备支持
- [xlzy520/bili-short-url](https://github.com/xlzy520/bili-short-url): 哔哩哔哩短链生成器
- [zjkwdy/bili_app_splash](https://github.com/zjkwdy/bili_app_splash): B站壁纸娘和开屏图自动下载，每天使用Actions自动同步
- [Jannchie/BiliOB](https://github.com/Jannchie/BiliOB): BiliOB观测者是一个观测B站UP主及视频数据变化，并予以分析的Web应用程序
- [biliob233/biliob233.github.io](https://github.com/biliob233/biliob233.github.io): ~~无可奉告~~
- [biliup/biliup](https://github.com/biliup/biliup): 全自动录播、投稿工具，也支持twitch、ytb频道搬运。提供分p上传b站接口，腾讯云内网免流+大幅提速

## 其他

- [kuresaru/geetest-validator](https://github.com/kuresaru/geetest-validator):geetest调试器

- [uw-labs/bloomrpc](https://github.com/uw-labs/bloomrpc): GUI Client for GRPC Services

- [grpc/grpc](https://github.com/grpc/grpc): The C based gRPC (C++, Python, Ruby, Objective-C, PHP, C#) 

 - [quicktype](https://github.com/quicktype/quicktype) quicktype generates strongly-typed models and serializers from JSON, JSON Schema, TypeScript, and GraphQL queries, making it a breeze to work with JSON type-safely in many programming languages.一键生成多种语言的json反序列化所需类,以便于快速反序列化, 有网页版
