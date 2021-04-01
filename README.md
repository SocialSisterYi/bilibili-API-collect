<p align="center">
    <img src="imgs/Mylogo.png" width="250" height="200">
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
        <img src="https://img.shields.io/github/license/SocialSisterYi/bilibili-API-collect.svg" alt="GitHub license"/>
    </a>
</p>
<h3 align="center">野生API文档</h3>  
<h3 align="center">不断更新中....</h3>  
本项目旨在对B站web端、移动端以及TV端散落在世界各地的野生api进行收集整理，研究使用方法并对其进行说明，运用了黑箱法、控制变量法、js逆向分析法、apk拆包及反编译法、网络抓包法等研究办法

所有api均为标准http协议，返回数据大都为json或protobuf

PS：所有http协议地址均可使用https，文档中为了统一写作`http`，为了数据安全建议所有接口使用https

小小的Demo：~~av583785685~~[视频失效原因](https://shakaianee.top/archives/56/)（[Youtube备链](https://www.youtube.com/watch?v=nfF91Z6fqGk)）

联动项目：[Hsury/Bilibili-Toolkit](https://github.com/Hsury/Bilibili-Toolkit)

---

**声明**：

1. 本项目遵守CC-BY-4.0协议，如需转载请标明作者ID
2. **请勿滥用，本项目仅用于学习和测试！请勿滥用，本项目仅用于学习和测试！请勿滥用，本项目仅用于学习和测试！**
3. 由于使用本项目提供的接口、文档等造成的不良影响和后果与本人无关
4. 由于本项目的特殊性，可能随时停止开发或删档
5. 本项目为开源项目，不接受任何的催单和索取行为

---

计划整理分类&目录：（√代表已完成，x代表正在施工...）二级目录正在建设中.....

- [API认证与鉴权（APP与Cookie方式）](other/API_auth.md)×
- [公共错误码](other/errcode.md)√
- [图片格式化](other/picture.md)√
- [bvID说明](other/bvID.md)√
- [grpc接口](grpc_api)×
- [登录](login)
  - [登录操作（人机认证）](login/login_action)√
    - [短信登录](login/login_action/SMS.md)√
    - [密码登录](login/login_action/password.md)√
    - [二维码登录](login/login_action/QR.md)√
    - SNS登录（QQ&微博）
  - [登录基本信息](login/login_info.md)√
  - [个人中心](login/member_center.md)×
  - [注销登录](login/exit.md)×
  - [登录记录](login/login_notice.md)√
- [消息中心](message)
  - [通知类消息](message/msg.md)×
  - [私信](message/private_msg.md)×
  - [设置](message/config.md)×
- [用户](user)
  - [基本信息](user/info.md)√
  - [状态数](user/status_number.md)√
  - [关系](user/relation.md)√
  - [个人空间](user/space.md)x
  - [检查昵称是否可注册](user/check_nickname.md)√
- [视频](video)
  - [视频分区一览（分区代码）](video/video_zone.md)√
  - [基本信息](video/info.md)√
  - [状态数](video/status_number.md)√
  - [快照](video/snapshot.md)√
  - [点赞&投币&收藏](video/like_coin_fav.md)√
  - [TAG](video/tags.md)x
  - [视频推荐](video/recommend.md)√
  - [播放&下载地址（视频流）](video/videostream_url.md)√
  - [互动视频](video/interact_video.md)×
  - [高能进度条](video/pbp.md)√
  - [信息上报（心跳及记录历史）](video/report.md)×
- [剧集（番剧、影视）](bangumi)
  - [基本信息](bangumi/info.md)×
  - 状态数
  - 操作
- [视频弹幕](danmaku)
  - [protobuf实时弹幕](danmaku/danmaku_proto.md)√
  - [protobuf弹幕元数据（BAS弹幕/互动弹幕）](danmaku/danmaku_view_proto.md)√
  - [xml实时弹幕](danmaku/danmaku_xml.md)√
  - [历史弹幕](danmaku/history.md)√
  - [快照](danmaku/snapshot.md)√
  - [弹幕操作](danmaku/action.md)×
  - 高级弹幕
  - 屏蔽管理
  - 智能防挡弹幕
  - [弹幕个人配置修改](danmaku/config.md)√
- [视频笔记](note)√
  - [笔记列表](note/list.md)√
  - [笔记详细信息](note/info.md)√
  - [笔记操作](note/action.md)√
- [专栏](article)
  - 分区
  - [基本信息](article/info.md)×
  - [点赞&投币&收藏&分享](article/like_coin_fav.md)×
  - [文集基本信息](article/articles.md)×
- [音频](audio)
  - [歌曲基本信息](audio/info.md)√
  - [歌单&音频收藏夹详细信息](audio/music_list.md)×
  - [状态数](audio/status_number.md)×
  - [投币&收藏](audio/coin&fav.md)×
  - [播放&下载地址（音频流）](audio/musicstream_url.md)√
  - 音频榜单
- [排行榜&最新视频](ranking&dynamic)
  - [排行榜](ranking&dynamic/ranking.md)×
  - [最新视频](ranking&dynamic/dynamic.md)×
- [搜索](search)
  - [搜索请求](search/search_request.md)√
  - [搜索结果](search/search_response.md)√
  - [默认搜索&热搜](search/hot.md)√
  - [搜索建议](search/suggest.md)√
- [小黑屋](blackroom)
  - 基本信息
  - [封禁公示](blackroom/banlist.md)√
  - [风纪委员及众裁案件相关](blackroom/jury)√
    - [风纪委员基本信息](blackroom/jury/base_info.md)√
    - [众裁案件基本信息](blackroom/jury/judgement_info.md)√
    - [裁决操作](blackroom/jury/action.md)√
- [评论区](comment)√
  - [评论区明细](comment/list.md)√
  - [操作](comment/action.md)√
- [表情](emoji)
  - [表情及表情包信息](emoji/list.md)√
  - [操作](emoji/action.md)√
- [创作中心](creativecenter)
  - [统计与数据](creativecenter/statistics&data.md)×
  - 列表查询相关
  - [电磁力数据](creativecenter/railgun.md)√
- [实时广播（通讯协议）](broadcast)√
  - [视频内广播](broadcast/video_room.md)√
- [充电](electric)
  - [B币方式](electric/Bcoin.md)√
  - [微信&支付宝方式](electric/WeChat&Alipay.md)√
  - [充电留言](electric/charge_msg.md)√
  - [充电列表](electric/charge_list.md)√
- [动态](dynamic)
  - [发送&转载动态](dynamic/publish.md)×
  - 动态列表
  - 动态内容
  - 操作
- [相簿](album)
  - [基本信息](album/info.md)√
  - [相簿列表](album/list.md)√
  - [推荐作者](album/recommend_author.md)√
  - [活动列表](album/activity_list.md)√
  - [操作](album/action.md)√
  - 投稿
- [历史记录&稍后再看](history&toview)
  - [历史记录](history&toview/history.md)√
  - [稍后再看](history&toview/toview.md)√
- [收藏夹](favlist)
  - [基本信息](fav/info.md)√
  - [收藏夹内容](fav/list.md)√
  - [收藏夹操作](fav/action.md)×
- [课程](cheese)
  - [课程基本信息](cheese/info.md)√
  - 已购课程
  - 分区推荐列表
  - 操作
  - [播放&下载地址（视频流）](cheese/videostream_url.md)√
- [直播](live)
  - [直播间基本信息](live/info.md)×
  - [直播分区](live/live_area.md)×
  - [直播间管理](live/manage.md)×
  - 直播间操作
  - [直播视频流](live/live_stream.md)×
  - [直播信息流](live/message_stream.md)×
- [转正答题](newbie_exam)
  - [查询信息](newbie_exam/info.md)×
  - [拉取题目](newbie_exam/fetch.md)√
  - [操作](newbie_exam/action.md)×
- B币钱包
  - 基本信息
  - B币充值
  - 贝壳相关
- 哔哩哔哩漫画
- 哔哩哔哩游戏
- 轻视频
- [终端网络查询](clientinfo)
  - [基于ip的地理位置查询](clientinfo/ip.md)√
  - [终端信息查询](clientinfo/client_info.md)√
- [其他](other)
  - [获取当前时间戳](other/time_stamp.md)√
- [web端组件](web_widget)
  - [分区当日投稿数](web_widget/zone_upload.md)√
- [APP端组件](APP_widget)
  - [开屏图片](APP_widget/splash.md)√
- [个性装扮](garb)
  - [APP主题](garb/skin.md)√
  - [主题色](garb/color.md)√

B站专栏同步推出[《B站api研究记》](https://www.bilibili.com/read/readlist/rl207146)系列（更新状态：咕咕......），~~欢迎关注~~

**--Project_by [社会易姐QwQ](https://space.bilibili.com/293793435)**

# 相关协议基础

http协议：[传送门](https://www.cnblogs.com/an-wen/p/11180076.html)

json序列格式：[传送门](https://www.sojson.com/json/json_index.html)

xml序列格式：[传送门](https://www.w3school.com.cn/xml/xml_intro.asp)

protobuf序列格式：[传送门](https://www.jianshu.com/p/a24c88c0526a )

# 交流

<img src="imgs/up_face.jpg" width="100" height="100">

QQ粉丝交流群：[1136462265](https://jq.qq.com/?_wv=1027&k=s1M0LCcu)

B站空间：<https://space.bilibili.com/293793435>

个人博客：<https://shakaianee.top>

# 发电

欢迎来py，大家的支持就是我继续开发的动力！

~~请可爱的易姐喝杯奶茶~~

<img src="imgs/sponsorQR.jpg" width="300" height="300">

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

## 成品

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
- [JunzhouLiu/BILIBILI-HELPER](https://github.com/JunzhouLiu/BILIBILI-HELPER):利用GitHub Action定时任务实现B站，哔哩哔哩（Bilibili）每日自动投币，签到，银瓜子兑换硬币，领取大会员福利，大会员月底给自己充电等。每天轻松获取65经验值。
- [the1812/Bilibili-Evolved](https://github.com/the1812/Bilibili-Evolved):强大的哔哩哔哩增强脚本: 下载视频, 音乐, 封面, 弹幕 / 简化直播间, 评论区, 首页 / 自定义顶栏, 删除广告, 夜间模式 / 触屏设备支持

## 其他

- [kuresaru/geetest-validator](https://github.com/kuresaru/geetest-validator):geetest调试器
