<p align="center">
    <img src="http://i0.hdslb.com/bfs/album/1ba8228cc208a12ac17f73a160081a0918ab7d14.png" width="250" height="200"/>
<p/>
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
本项目旨在对B站web端、移动端以及TV端散落在世界各地的野生api进行收集整理，研究使用方法并对其进行说明，运用了黑箱法、控制变量法、js逆向分析法、网络抓包法等研究办法

所有api均为标准http协议，返回值大都为json

---

计划整理分类&目录：（√代表已完成，x代表正在施工...）

- cookie
- [图片格式化](other/picture.md)√
- [登录](login)
  - [二维码登录](login/QR.md)√
  - 密码&短信登录
  - qq&微博登录
  - [登录基本信息](login/login_info.md)√
  - [个人中心](login/member_center.md)×
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
  - 互动视频
  - [高能进度条](video/pbp.md)√
  - [信息上报（心跳及记录历史）](video/report.md)×
- 番剧（影视）
  - 基本信息
  - 状态数
  - 操作
- [视频弹幕](danmaku)
  - protobuf实时弹幕
  - [xml实时弹幕](danmaku/danmaku_xml.md)√
  - [xml历史弹幕](danmaku/history.md)√
  - [快照](danmaku/snapshot.md)√
  - [弹幕操作](danmaku/action.md)×
- [专栏](article)
  - [基本信息](article/info.md)×
  - [点赞&投币&收藏](article/like_coin_fav.md)×
  - 文集基本信息
- [音频](music)
  - [歌曲基本信息](music/info.md)√
  - [歌单&音频收藏夹详细信息](music/music_list.md)×
  - [状态数](music/status_number.md)×
  - [投币&收藏](music/coin&fav.md)×
  - 播放&下载地址（音频流）
  - 音频榜单
- [排行榜&最新动态](ranking&dynamic)
  - [排行榜](ranking&dynamic/ranking.md)x
  - [最新动态](ranking&dynamic/dynamic.md)x
- 搜索
  - 普通搜索
  - 热搜
- [小黑屋](blackroom)
  - [封禁公示](blackroom/banlist.md)√
  - 仲裁信息
- [评论区](comment)
  - [评论区明细](comment/comment_list.md)√
  - [操作](comment/action.md)√
- [表情](emoji)
  - [表情及表情包信息](emoji/emoji_list.md)×
  - 操作
- [创作中心](creativecenter)
  - [统计与数据](creativecenter/statistics&data.md)x
  - 列表查询相关
  - 电磁力相关
- [实时广播](broadcast)
  - [总则](broadcast/general.md)√
  - [视频内广播](broadcast/video_room.md)√
  - 分区实时在线
- [充电](electric)
  - [B币方式](electric/Bcoin.md)√
  - [微信&支付宝方式](electric/WeChat&Alipay.md)√
  - [充电留言](electric/charge_msg.md)√
  - [充电列表](electric/charge_list.md)√
- [动态](dynamic)
  - [发送&转载动态](dynamic/publish.md)x
  - 动态列表
  - 动态内容
  - 小视频
  - 操作
- [历史记录&稍后再看](history&toview)
  - [历史记录](history&toview/history.md)√
  - [稍后再看](history&toview/toview.md)√
- 收藏夹
- [课程](cheese)
  - [课程基本信息](cheese/info.md)√
  - 已购课程
  - 分区推荐列表
  - 操作
  - [播放&下载地址（视频流）](cheese/videostream_url.md)√
- [直播](live)
  - [直播间基本信息](live/info.md)x
  - [直播分区](live/live_area.md)×
  - [直播间管理](live/manage.md)×
  - 直播间操作
  - 直播视频流
  - 直播信息流
- 答题
- B币钱包
  - 基本信息
  - B币充值
  - 贝壳相关
- 哔哩哔哩漫画
- 哔哩哔哩游戏
- [其他](other)
  - [基于ip的地理位置查询](other/ip.md)√
  - [获取当前时间戳](other/time_stamp.md)√

B站专栏同步推出[《B站api研究记》](https://www.bilibili.com/read/readlist/rl207146)系列（更新状态：咕咕......），~~欢迎关注~~

**注意：请勿滥用，仅用于学习和测试！**

**注意：请勿滥用，仅用于学习和测试！**

**注意：请勿滥用，仅用于学习和测试！**

（重要的话说三遍，本人不承担任何责任）

<img src="https://i2.hdslb.com/bfs/face/480e2e98513aaeb65d2f2c76dbae750c4de722e9.jpg@100w_100h" />

**--by [社会易姐QwQ](https://space.bilibili.com/293793435)**

备注：

不了解http的请移步，[传送门](https://www.cnblogs.com/an-wen/p/11180076.html)

不了解json的请移步，[传送门](https://www.sojson.com/json/json_index.html)



**相关项目**：

库及文档：

https://github.com/jingyuexing/bilibiliAPI

https://github.com/fython/BilibiliAPIDocs

https://github.com/czp3009/bilibili-api

https://github.com/Vespa314/bilibili-api

https://github.com/Hsury/Bilibili-Toolkit

 https://github.com/adachi-sakura/openbilibili-go-common-1 

成品：

https://github.com/zyzsdy/biliroku

https://github.com/bilibili-helper/bilibili-helper-o

https://github.com/apachecn/BiliDriveEx

https://github.com/apachecn/CDNDrive

https://github.com/Hsury/BiliDrive

https://github.com/Tsuk1ko/bilibili-live-chat

其他：

https://github.com/Hsury/Geetest3-Crack

https://github.com/SocialSisterYi/bv2av_convert

