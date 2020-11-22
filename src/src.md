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

**请注意，这部分并非原作者完成的，谨慎使用**

这是一个由Python(Kris)/Go(小宇)编写的实例文件，方便各位开发者使用

[我fork的项目地址](https://github.com/krishukr/bilibili-API-collect)

---

## 索引
- [API认证与鉴权（APP与Cookie方式）](other/API_auth.md)×
- [公共错误码](other/errcode.md)×
- [图片格式化](other/picture.md)×
- [bvID说明](other/bvID.md)×
- [登录](Python/login)
  - [登录操作（人机认证）](Python/login/login_action)×
    + [短信登录](Python/login/login_action/SMS.md)×
    + [密码登录](Python/login/login_action/password.md)×
    + [二维码登录](Python/login/login_action/QR.md)×
    + SNS登录（QQ&微博）
  - [登录基本信息](Python/login/login_info.md)×
  - [个人中心](Python/login/member_center.md)×
  - [注销登录](Python/login/exit.md)×
  - [登录记录](Python/login/login_notice.md)×
- [消息中心](Python/message)
  - [通知类消息](Python/message/msg.md)×
  - [私信](Python/message/private_msg.md)×
  - [设置](Python/message/config.md)×
- [用户](user)
  - [基本信息](user/info.md)×
  - [状态数](user/status_number.md)×
  - [关系](user/relation.md)×
  - [个人空间](user/space.md)x
  - [检查昵称是否可注册](user/check_nickname.md)×
- [视频](video)
  - [视频分区一览（分区代码）](video/video_zone.md)×
  - [基本信息](video/info.md)×
  - [状态数](video/status_number.md)×
  - [快照](video/snapshot.md)×
  - [点赞&投币&收藏](video/like_coin_fav.md)×
  - [TAG](video/tags.md)x
  - [视频推荐](video/recommend.md)×
  - [播放&下载地址（视频流）](video/videostream_url.md)×
  - [互动视频](video/interact_video.md)×
  - [高能进度条](video/pbp.md)×
  - [信息上报（心跳及记录历史）](video/report.md)×
- [剧集（番剧、影视）](bangumi)
  - [基本信息](bangumi/info.md)×
  - 状态数
  - 操作
- [视频弹幕](danmaku)
  - [protobuf实时弹幕](danmaku/danmaku_proto.md)×
  - [protobuf弹幕元数据（BAS弹幕/互动弹幕）](danmaku/danmaku_view_proto.md)×
  - [xml实时弹幕](danmaku/danmaku_xml.md)×
  - [xml历史弹幕](danmaku/history.md)×
  - [快照](danmaku/snapshot.md)×
  - [弹幕操作](danmaku/action.md)×
  - 高级弹幕
  - 屏蔽管理
  - 智能防挡弹幕
  - [弹幕个人配置修改](danmaku/config.md)×
- [专栏](article)
  - 分区
  - [基本信息](article/info.md)×
  - [点赞&投币&收藏&分享](article/like_coin_fav.md)×
  - [文集基本信息](article/articles.md)×
- [音频](audio)
  - [歌曲基本信息](audio/info.md)×
  - [歌单&音频收藏夹详细信息](audio/music_list.md)×
  - [状态数](audio/status_number.md)×
  - [投币&收藏](audio/coin&fav.md)×
  - [播放&下载地址（音频流）](audio/musicstream_url.md)×
  - 音频榜单
- [排行榜&最新视频](ranking&dynamic)
  - [排行榜](ranking&dynamic/ranking.md)×
  - [最新视频](ranking&dynamic/dynamic.md)×
- [搜索](search)
  - [搜索请求](search/search_request.md)×
  - [搜索结果](search/search_response.md)×
  - [默认搜索&热搜](search/hot.md)×
  - [搜索建议](search/suggest.md)×
- [小黑屋](blackroom)
  - 基本信息
  - [封禁公示](blackroom/banlist.md)×
  - [风纪委员及众裁案件相关](blackroom/jury)×
    - [风纪委员基本信息](blackroom/jury/base_info.md)×
    - [众裁案件基本信息](blackroom/jury/judgement_info.md)×
    - [裁决操作](blackroom/jury/action.md)×
- [评论区](comment)×
  - [评论区明细](comment/list.md)×
  - [操作](comment/action.md)×
- [表情](emoji)
  - [表情及表情包信息](emoji/list.md)×
  - [操作](emoji/action.md)×
- [创作中心](creativecenter)
  - [统计与数据](creativecenter/statistics&data.md)×
  - 列表查询相关
  - [电磁力数据](creativecenter/railgun.md)×
- [实时广播（通讯协议）](broadcast)×
  - [视频内广播](broadcast/video_room.md)×
- [充电](electric)
  - [B币方式](electric/Bcoin.md)×
  - [微信&支付宝方式](electric/WeChat&Alipay.md)×
  - [充电留言](electric/charge_msg.md)×
  - [充电列表](electric/charge_list.md)×
- [动态](dynamic)
  - [发送&转载动态](dynamic/publish.md)×
  - 动态列表
  - 动态内容
  - 小视频
  - 操作
- [历史记录&稍后再看](history&toview)
  - [历史记录](history&toview/history.md)×
  - [稍后再看](history&toview/toview.md)×
- 收藏夹
- [课程](cheese)
  - [课程基本信息](cheese/info.md)×
  - 已购课程
  - 分区推荐列表
  - 操作
  - [播放&下载地址（视频流）](cheese/videostream_url.md)×
- [直播](live)
  - [直播间基本信息](live/info.md)×
  - [直播分区](live/live_area.md)×
  - [直播间管理](live/manage.md)×
  - 直播间操作
  - [直播视频流](live/live_stream.md)×
  - [直播信息流](live/message_stream.md)×
- 答题
- B币钱包
  - 基本信息
  - B币充值
  - 贝壳相关
- 哔哩哔哩漫画
- 哔哩哔哩游戏
- 轻视频
- [其他](other)
  - [基于ip的地理位置查询](other/ip.md)×
  - [获取当前时间戳](other/time_stamp.md)×
- [web端组件](web_widget)
  - [分区当日投稿数](web_widget/zone_upload.md)×
- [APP端组件](APP_widget)
  - [开屏图片](APP_widget/splash.md)×
- [个性装扮](garb)
  - [APP主题](garb/skin.md)×
  - [主题色](garb/color.md)×