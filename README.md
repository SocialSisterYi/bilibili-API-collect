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
- [bvid说明](other/bvid_desc.md)√
- [grpc接口](grpc_api)×
- [登录](login)
  - [登录操作（人机认证）](login/login_action)√
    - [短信登录](login/login_action/SMS.md)√
    - [密码登录](login/login_action/password.md)√
    - [二维码登录](login/login_action/QR.md)√
    - SNS登录（QQ&微博）
  - <details><summary><a href="login/login_info.md">登录基本信息</a>√</summary><ul><li><a href="login/login_info.md#导航栏用户信息">导航栏用户信息</a></li><li><a href="login/login_info.md#登录用户信息（APP端）">登录用户信息（APP端）</a></li><li><a href="login/login_info.md#登录用户状态数（双端）">登录用户状态数（双端）</a></li><li><a href="login/login_info.md#获取硬币数">获取硬币数</a></li></ul></details>
  - <details><summary><a href="login/member_center.md">个人中心</a>×</summary><ul><li><a href="login/member_center.md#获取我的信息">获取我的信息</a></li><li><a href="login/member_center.md#查询每日奖励状态">查询每日奖励状态</a></li><li><a href="login/member_center.md#查询每日投币获得经验数">查询每日投币获得经验数</a></li><li><a href="login/member_center.md#查询大会员状态">查询大会员状态</a></li><li><a href="login/member_center.md#查询账号安全情况">查询账号安全情况</a></li><li><a href="login/member_center.md#查询账号实名认证状态">查询账号实名认证状态</a></li><li><a href="login/member_center.md#查询实名认证详细信息">查询实名认证详细信息</a></li><li><a href="login/member_center.md#查询硬币变化情况">查询硬币变化情况</a></li><li><a href="login/member_center.md#修改个人签名">修改个人签名</a></li></ul></details>
  - [注销登录](login/exit.md)×
  - [登录记录](login/login_notice.md)√
- [消息中心](message)
  - [通知类消息](message/msg.md)×
  - <details><summary><a href="message/private_msg.md">私信</a>×</summary><ul><li><a href="message/private_msg.md#未读私信数">未读私信数</a></li><li><a href="message/private_msg.md#发送私信（web端）">发送私信（web端）</a></li></ul></details>
  - [设置](message/config.md)×
- [用户](user)
  - <details><summary><a href="user/info.md">基本信息</a>√</summary><ul><li><a href="user/info.md#用户空间详细信息">用户空间详细信息</a></li><li><a href="user/info.md#用户名片信息">用户名片信息</a></li><li><a href="user/info.md#登录用户空间详细信息">登录用户空间详细信息</a></li></ul></details>
  - <details><summary><a href="user/status_number.md">状态数</a>√</summary><ul><li><a href="user/status_number.md#关系状态数">关系状态数</a></li><li><a href="user/status_number.md#UP主状态数">UP主状态数</a></li><li><a href="user/status_number.md#相簿投稿数">相簿投稿数</a></li></ul></details>
  - <details><summary><a href="user/relation.md">关系</a>√</summary><ul><li><a href="user/relation.md#查询用户粉丝明细">查询用户粉丝明细</a></li><li><a href="user/relation.md#查询用户关注明细">查询用户关注明细</a></li><li><a href="user/relation.md#搜索关注明细">搜索关注明细</a></li><li><a href="user/relation.md#查询共同关注明细">查询共同关注明细</a></li><li><a href="user/relation.md#查询悄悄关注明细">查询悄悄关注明细</a></li><li><a href="user/relation.md#查询黑名单明细">查询黑名单明细</a></li><li><a href="user/relation.md#操作用户关系">操作用户关系</a></li><li><a href="user/relation.md#批量操作用户关系">批量操作用户关系</a></li><li><a href="user/relation.md#查询用户与自己关系_仅查关注">查询用户与自己关系_仅查关注</a></li><li><a href="user/relation.md#查询用户与自己关系_互相">查询用户与自己关系_互相</a></li><li><a href="user/relation.md#批量查询用户与自己关系">批量查询用户与自己关系</a></li><li><a href="user/relation.md#关注分组相关">关注分组相关</a></li><ul><li><a href="user/relation.md#查询关注分组列表">查询关注分组列表</a></li><li><a href="user/relation.md#查询关注分组明细">查询关注分组明细</a></li><li><a href="user/relation.md#查询目标用户所在的分组">查询目标用户所在的分组</a></li><li><a href="user/relation.md#查询所有特别关注的mid">查询所有特别关注的mid</a></li><li><a href="user/relation.md#创建分组">创建分组</a></li><li><a href="user/relation.md#重命名分组">重命名分组</a></li><li><a href="user/relation.md#删除分组">删除分组</a></li><li><a href="user/relation.md#修改分组成员">修改分组成员</a></li><li><a href="user/relation.md#复制关注到分组">复制关注到分组</a></li><li><a href="user/relation.md#移动关注到分组">移动关注到分组</a></li></ul></ul></details>
  - <details><summary><a href="user/space.md">个人空间</a>×</summary><ul><li><a href="user/space.md#主页">主页</a></li><ul><li><a href="user/space.md#置顶视频">置顶视频</a></li><ul><li><a href="user/space.md#查询用户置顶视频">查询用户置顶视频</a></li><li><a href="user/space.md#设置置顶视频">设置置顶视频</a></li><li><a href="user/space.md#取消置顶视频">取消置顶视频</a></li></ul><li><a href="user/space.md#代表作视频">代表作视频</a></li><ul><li><a href="user/space.md#查询用户代表作视频列表">查询用户代表作视频列表</a></li><li><a href="user/space.md#添加代表作视频">添加代表作视频</a></li><li><a href="user/space.md#删除代表作视频">删除代表作视频</a></li></ul><li><a href="user/space.md#个人TAG">个人TAG</a></li><ul><li><a href="user/space.md#查看用户个人TAG">查看用户个人TAG</a></li><li><a href="user/space.md#修改个人TAG">修改个人TAG</a></li></ul><li><a href="user/space.md#空间公告">空间公告</a></li><ul><li><a href="user/space.md#查看用户空间公告">查看用户空间公告</a></li><li><a href="user/space.md#修改空间公告">修改空间公告</a></li></ul><li><a href="user/space.md#主页板块布局与权限">主页板块布局与权限</a></li><ul><li><a href="user/space.md#查询空间设置">查询空间设置</a></li><li><a href="user/space.md#调整空间板块布局">调整空间板块布局</a></li><li><a href="user/space.md#修改空间隐私权限">修改空间隐私权限</a></li></ul><li><a href="user/space.md#查询用户最近玩过的游戏">查询用户最近玩过的游戏</a></li><li><a href="user/space.md#获取用户最近投币的视频明细">获取用户最近投币的视频明细</a></li></ul><li><a href="user/space.md#投稿">投稿</a></li><ul><li><a href="user/space.md#查询用户投稿视频明细">查询用户投稿视频明细</a></li><li><a href="user/space.md#查询用户投稿相簿预览">查询用户投稿相簿预览</a></li><li><a href="user/space.md#查询用户投稿相簿明细">查询用户投稿相簿明细</a></li></ul><li><a href="user/space.md#频道">频道</a></li><ul><li><a href="user/space.md#查询用户频道列表">查询用户频道列表</a></li><li><a href="user/space.md#查询用户频道中的视频">查询用户频道中的视频</a></li><li><a href="user/space.md#创建频道">创建频道</a></li><li><a href="user/space.md#修改频道">修改频道</a></li><li><a href="user/space.md#删除频道">删除频道</a></li><li><a href="user/space.md#频道添加视频">频道添加视频</a></li><li><a href="user/space.md#频道删除视频">频道删除视频</a></li><li><a href="user/space.md#调整频道视频排序">调整频道视频排序</a></li><li><a href="user/space.md#检查频道中有无失效视频">检查频道中有无失效视频</a></li></ul><li><a href="user/space.md#收藏">收藏</a></li><ul><li><a href="user/space.md#查询用户创建的视频收藏夹">查询用户创建的视频收藏夹</a></li><li><a href="user/space.md#查询用户收藏的视频收藏夹">查询用户收藏的视频收藏夹</a></li></ul><li><a href="user/space.md#课程">课程</a></li><ul><li><a href="user/space.md#查询用户发布的课程列表">查询用户发布的课程列表</a></li></ul><li><a href="user/space.md#订阅">订阅</a></li><ul><li><a href="user/space.md#查询用户追番预览列表">查询用户追番预览列表</a></li><li><a href="user/space.md#查询用户追番（追剧）明细">查询用户追番（追剧）明细</a></li><li><a href="user/space.md#查询用户关注的TAG（话题）">查询用户关注的TAG（话题）</a></li></ul></ul></details>
  - [检查昵称是否可注册](user/check_nickname.md)√
- [视频](video)
  - [视频分区一览（分区代码）](video/video_zone.md)√
  - <details><summary><a href="video/info.md">基本信息</a>√</summary><ul><li><a href="video/info.md#获取视频详细信息(web端)">获取视频详细信息(web端)</a></li><li><a href="video/info.md#获取视频简介">获取视频简介</a></li><li><a href="video/info.md#查询视频分P列表 (avid/bvid转cid)">查询视频分P列表 (avid/bvid转cid)</a></li></ul></details>
  - <details><summary><a href="video/status_number.md">状态数</a>√</summary><ul><li><a href="video/status_number.md#视频状态数（仅avid）">视频状态数（仅avid）</a></li><li><a href="video/status_number.md#视频状态数（bvid/avid）">视频状态数（bvid/avid）</a></li></ul></details>
  - <details><summary><a href="video/snapshot.md">快照</a>√</summary><ul><li><a href="video/snapshot.md#获取视频快照（web端）">获取视频快照（web端）</a></li><li><a href="video/snapshot.md#获取视频快照（APP端）">获取视频快照（APP端）</a></li><li><a href="video/snapshot.md#获取视频快照（web端）（用于封面预览）">获取视频快照（web端）（用于封面预览）</a></li><li><a href="video/snapshot.md#图片拼版">图片拼版</a></li><li><a href="video/snapshot.md#bin格式截取时间表">bin格式截取时间表</a></li></ul></details>
  - <details><summary><a href="video/info.md">点赞&投币&收藏</a>√</summary><ul><li><a href="video/like_coin_fav.md#点赞">点赞</a></li><ul><li><a href="video/like_coin_fav.md#点赞视频（web端）">点赞视频（web端）</a></li><li><a href="video/like_coin_fav.md#点赞视频（APP端）">点赞视频（APP端）</a></li><li><a href="video/like_coin_fav.md#判断视频是否被点赞（双端）">判断视频是否被点赞（双端）</a></li></ul><li><a href="video/like_coin_fav.md#投币">投币</a></li><ul><li><a href="video/like_coin_fav.md#投币视频（web端）">投币视频（web端）</a></li><li><a href="video/like_coin_fav.md#投币视频（APP端）">投币视频（APP端）</a></li><li><a href="video/like_coin_fav.md#判断视频是否被投币（双端）">判断视频是否被投币（双端）</a></li></ul><li><a href="video/like_coin_fav.md#收藏">收藏</a></li><ul><li><a href="video/like_coin_fav.md#收藏视频（双端）">收藏视频（双端）</a></li><li><a href="video/like_coin_fav.md#判断视频是否被收藏（双端）">判断视频是否被收藏（双端）</a></li></ul><li><a href="video/like_coin_fav.md#一键三连">一键三连</a></li><ul><li><a href="video/like_coin_fav.md#一键三连视频（web端）">一键三连视频（web端）</a></li><li><a href="video/like_coin_fav.md#一键三连视频（APP端）">一键三连视频（APP端）</a></li></ul><li><a href="video/like_coin_fav.md#分享">分享</a></li><ul><li><a href="video/like_coin_fav.md#分享视频 （Web端）">分享视频 （Web端）</a></li></ul></ul></details>
  - <details><summary><a href="video/tags.md">TAG</a>x</summary><ul><li><a href="video/tags.md#获取视频TAG信息">获取视频TAG信息</a></li><li><a href="video/tags.md#点赞&取消点赞视频TAG">点赞&取消点赞视频TAG</a></li><li><a href="video/tags.md#点踩&取消点踩视频TAG">点踩&取消点踩视频TAG</a></li></ul></details>
  - [视频推荐](video/recommend.md)√
  - <details><summary><a href="video/videostream_url.md">播放&下载地址（视频流）</a>√</summary><ul><li><a href="video/videostream_url.md#qn视频清晰度标识">qn视频清晰度标识</a></li><li><a href="video/videostream_url.md#fnver视频流版本标识">fnver视频流版本标识</a></li><li><a href="video/videostream_url.md#fnval视频流格式标识">fnval视频流格式标识</a></li><li><a href="video/videostream_url.md#视频伴音音质代码">视频伴音音质代码</a></li><li><a href="video/videostream_url.md#获取视频流URL（web端）">获取视频流URL（web端）</a></li><li><a href="video/videostream_url.md#视频的取流（web端及APP端）">视频的取流（web端及APP端）</a></li></ul></details>
  - [互动视频](video/interact_video.md)×
  - [高能进度条](video/pbp.md)√
  - <details><summary><a href="video/report.md">信息上报（心跳及记录历史）</a>×</summary><ul><li><a href="video/report.md#上报观看进度（双端）">上报观看进度（双端）</a></li><li><a href="video/report.md#上报视频播放心跳（web端）">上报视频播放心跳（web端）</a></li></ul></details>
  - <details><summary><a href="video/attribute_data.md">视频属性数据</a>√</summary><ul><li><a href="video/attribute_data.md#attribute字段值(视频属性位)">attribute字段值(视频属性位)</a></li><li><a href="video/attribute_data.md#state字段值(稿件状态)">state字段值(稿件状态)</a></li></ul></details>
  - <details><summary><a href="video/online.md">视频在线人数</a>√</summary><ul><li><a href="video/online.md#获取视频在线人数_web端">获取视频在线人数_web端</a></li><li><a href="video/online.md#获取视频在线人数_APP端">获取视频在线人数_APP端</a></li></ul></details>
- [剧集（番剧、影视）](bangumi)
  - <details><summary><a href="bangumi/info.md">基本信息</a>×</summary><ul><li><a href="bangumi/info.md#剧集基本信息（mdid方式）">剧集基本信息（mdid方式）</a></li><li><a href="bangumi/info.md#获取剧集明细（web端）（ssid/epid方式）">获取剧集明细（web端）（ssid/epid方式）</a></li></ul></details>
  - 状态数
  - 操作
- [视频弹幕](danmaku)
  - [protobuf实时弹幕](danmaku/danmaku_proto.md)√
  - <details><summary><a href="danmaku/danmaku_view_proto.md">protobuf弹幕元数据（BAS弹幕/互动弹幕）</a>√</summary><ul><li><a href="danmaku/danmaku_view_proto.md#获取弹幕个人配置与互动弹幕及BAS（代码）弹幕专包（web端）">获取弹幕个人配置与互动弹幕及BAS（代码）弹幕专包（web端）</a></li><li><a href="danmaku/danmaku_view_proto.md#实例">实例</a></li><ul><li><a href="danmaku/danmaku_view_proto.md#获取互动弹幕">获取互动弹幕</a></li><li><a href="danmaku/danmaku_view_proto.md#获取BAS（代码）弹幕专包">获取BAS（代码）弹幕专包</a></li></ul></ul></details>
  - <details><summary><a href="danmaku/danmaku_xml.md">xml实时弹幕</a>√</summary><ul><li><a href="danmaku/danmaku_xml.md#获取实时弹幕1">获取实时弹幕1</a></li><li><a href="danmaku/danmaku_xml.md#获取实时弹幕2">获取实时弹幕2</a></li><li><a href="danmaku/danmaku_xml.md#弹幕格式">弹幕格式</a></li></ul></details>
  - <details><summary><a href="danmaku/history.md">历史弹幕</a>√</summary><ul><li><a href="danmaku/history.md#查询历史弹幕日期">查询历史弹幕日期</a></li><li><a href="danmaku/history.md#获取历史弹幕protobuf接口">获取历史弹幕protobuf接口</a></li></ul></details>
  - [快照](danmaku/snapshot.md)√
  - <details><summary><a href="danmaku/action.md">弹幕操作</a>×</summary><ul><li><a href="danmaku/action.md#发送视频弹幕">发送视频弹幕</a></li><li><a href="danmaku/action.md#发送互动弹幕">发送互动弹幕</a></li><li><a href="danmaku/action.md#撤回弹幕">撤回弹幕</a></li><li><a href="danmaku/action.md#购买高级弹幕发送权限">购买高级弹幕发送权限</a></li><li><a href="danmaku/action.md#检测高级弹幕发送权限">检测高级弹幕发送权限</a></li><li><a href="danmaku/action.md#查询弹幕点赞数">查询弹幕点赞数</a></li><li><a href="danmaku/action.md#点赞弹幕">点赞弹幕</a></li><li><a href="danmaku/action.md#举报弹幕">举报弹幕</a></li><li><a href="danmaku/action.md#保护&删除弹幕">保护&删除弹幕</a></li><li><a href="danmaku/action.md#修改字幕池">修改字幕池</a></li></ul></details>
  - 高级弹幕
  - 屏蔽管理
  - 智能防挡弹幕
  - [弹幕个人配置修改](danmaku/config.md)√
- [视频笔记](note)√
  - [笔记列表](note/list.md)√
  - <details><summary><a href="note/info.md">笔记详细信息</a>√</summary><ul><li><a href="note/info.md#查询视频笔记">查询视频笔记</a></li><li><a href="note/info.md#查询笔记内容">查询笔记内容</a></li></ul></details>
  - <details><summary><a href="note/action.md">笔记操作</a>√</summary><ul><li><a href="note/action.md#保存视频笔记">保存视频笔记</a></li><li><a href="note/action.md#删除视频笔记">删除视频笔记</a></li></ul></details>
- [专栏](article)
  - 分区
  - [基本信息](article/info.md)×
  - <details><summary><a href="article/like_coin_fav.md">专栏投币&点赞&收藏</a>×</summary><ul><li><a href="article/like_coin_fav.md#点赞文章">点赞文章</a></li><li><a href="article/like_coin_fav.md#投币文章">投币文章</a></li><li><a href="article/like_coin_fav.md#收藏文章">收藏文章</a></li></ul></details>
  - [文集基本信息](article/articles.md)×
- [音频](audio)
  - <details><summary><a href="audio/info.md">歌曲基本信息</a>√</summary><ul><li><a href="audio/info.md#查询歌曲基本信息">查询歌曲基本信息</a></li><li><a href="audio/info.md#查询歌曲TAG">查询歌曲TAG</a></li><li><a href="audio/info.md#查询歌曲创作成员列表">查询歌曲创作成员列表</a></li><li><a href="audio/info.md#获取歌曲歌词">获取歌曲歌词</a></li></ul></details>
  - <details><summary><a href="audio/music_list.md">歌单&音频收藏夹详细信息</a>×</summary><ul><li><a href="audio/music_list.md#查询自己创建的歌单">查询自己创建的歌单</a></li><li><a href="audio/music_list.md#查询音频收藏夹（默认歌单）信息">查询音频收藏夹（默认歌单）信息</a></li></ul></details>
  - [状态数](audio/status_number.md)×
  - <details><summary><a href="audio/coin&fav.md">投币&收藏</a>×</summary><ul><li><a href="audio/coin&fav.md#查询音频收藏状态">查询音频收藏状态</a></li><li><a href="audio/coin&fav.md#查询音频投币数">查询音频投币数</a></li></ul></details>
  - <details><summary><a href="audio/musicstream_url.md">播放&下载地址（音频流）</a>√</summary><ul><li><a href="audio/musicstream_url.md#获取音频流URL（无法获取付费音频）（web端）">获取音频流URL（无法获取付费音频）（web端）</a></li><li><a href="audio/musicstream_url.md#获取音频流URL（可获取付费音频）（双端）">获取音频流URL（可获取付费音频）（双端）</a></li><li><a href="audio/musicstream_url.md#音频流的获取">音频流的获取</a></li></ul></details>
  - 音频榜单
- [排行榜&最新视频](ranking&dynamic)
  - [排行榜](ranking&dynamic/ranking.md)×
  - [最新视频](ranking&dynamic/dynamic.md)×
- [搜索](search)
  - [搜索请求](search/search_request.md)√
  - <details><summary><a href="search/search_request.md">搜索请求</a>√</summary><ul><li><a href="search/search_request.md#综合搜索（web端）">综合搜索（web端）</a></li><li><a href="search/search_request.md#分类搜索（web端）">分类搜索（web端）</a></li></ul></details>
  - <details><summary><a href="search/search_response.md">搜索结果</a>√</summary><ul><li><a href="search/search_response.md#对象类型1-结果为视频">对象类型1-结果为视频</a></li><li><a href="search/search_response.md#对象类型2-结果为番剧&影视">对象类型2-结果为番剧&影视</a></li><li><a href="search/search_response.md#对象类型3-结果为直播间">对象类型3-结果为直播间</a></li><li><a href="search/search_response.md#对象类型4-结果为主播">对象类型4-结果为主播</a></li><li><a href="search/search_response.md#对象类型5-结果为专栏">对象类型5-结果为专栏</a></li><li><a href="search/search_response.md#对象类型6-结果为话题">对象类型6-结果为话题</a></li><li><a href="search/search_response.md#对象类型7-结果为用户">对象类型7-结果为用户</a></li><li><a href="search/search_response.md#对象类型8-结果为相簿">对象类型8-结果为相簿</a></li></ul></details>
  - <details><summary><a href="search/hot.md">默认搜索&热搜</a>√</summary><ul><li><a href="search/hot.md#获取默认搜索内容（web端）">获取默认搜索内容（web端）</a></li><li><a href="search/hot.md#获取热搜列表（web端）">获取热搜列表（web端）</a></li></ul></details>
  - [搜索建议](search/suggest.md)√
- [小黑屋](blackroom)
  - 基本信息
  - <details><summary><a href="blackroom/banlist.md">封禁公示</a>√</summary><ul><li><a href="blackroom/banlist.md#获取封禁用户公示列表">获取封禁用户公示列表</a></li><li><a href="blackroom/banlist.md#封禁处理公示详情">封禁处理公示详情</a></li></ul></details>
  - [风纪委员及众裁案件相关](blackroom/jury)√
    - <details><summary><a href="blackroom/jury/base_info.md">风纪委员基本信息</a>√</summary><ul><li><a href="blackroom/jury/base_info.md#基本数据">基本数据</a></li><li><a href="blackroom/jury/base_info.md#统计信息">统计信息</a></li><li><a href="blackroom/jury/base_info.md#检查申请风纪委员会资格">检查申请风纪委员会资格</a></li></ul></details>
    - <details><summary><a href="blackroom/jury/judgement_info.md">众裁案件基本信息</a>√</summary><ul><li><a href="blackroom/jury/judgement_info.md#查询投票过的单个案件">查询投票过的单个案件</a></li><li><a href="blackroom/jury/judgement_info.md#查询案件众裁信息">查询案件众裁信息</a></li><li><a href="blackroom/jury/judgement_info.md#查询我的众裁记录">查询我的众裁记录</a></li><li><a href="blackroom/jury/judgement_info.md#获取众议观点">获取众议观点</a></li></ul></details>
    - <details><summary><a href="blackroom/jury/action.md">裁决操作</a>√</summary><ul><li><a href="blackroom/jury/action.md#申请加入风纪委员会">申请加入风纪委员会</a></li><li><a href="blackroom/jury/action.md#拉取新案件">拉取新案件</a></li><li><a href="blackroom/jury/action.md#进行仲裁投票">进行仲裁投票</a></li></ul></details>
- [评论区](comment)√
  - <details><summary><a href="comment/list.md">评论区明细</a>√</summary><ul><li><a href="comment/list.md#获取评论区明细（无楼层号）">获取评论区明细（无楼层号）</a></li><li><a href="comment/list.md#获取评论区明细（带有楼层号 ）">获取评论区明细（带有楼层号 ）</a></li><li><a href="comment/list.md#获取指定评论条目及二级回复明细（分离结构 无楼层号）">获取指定评论条目及二级回复明细（分离结构 无楼层号）</a></li><li><a href="comment/list.md#获取指定评论条目及二级回复明细（嵌套结构 带有楼层号）">获取指定评论条目及二级回复明细（嵌套结构 带有楼层号）</a></li><li><a href="comment/list.md#获取指定评论对话树（带有楼层）">获取指定评论对话树（带有楼层）</a></li><li><a href="comment/list.md#获取评论区评论总数">获取评论区评论总数</a></li></ul></details>
  - <details><summary><a href="comment/action.md">操作</a>√</summary><ul><li><a href="comment/action.md#发表评论">发表评论</a></li><li><a href="comment/action.md#点赞评论">点赞评论</a></li><li><a href="comment/action.md#点踩评论">点踩评论</a></li><li><a href="comment/action.md#删除评论">删除评论</a></li><li><a href="comment/action.md#置顶评论">置顶评论</a></li><li><a href="comment/action.md#举报评论">举报评论</a></li></ul></details>
- [表情](emoji)
  - <details><summary><a href="emoji/list.md">表情及表情包信息</a>√</summary><ul><li><a href="emoji/list.md#获取我的表情列表">获取我的表情列表</a></li><li><a href="emoji/list.md#取指定的表情包明细">取指定的表情包明细</a></li><li><a href="emoji/list.md#获取所有表情包列表">获取所有表情包列表</a></li><li><a href="emoji/list.md#附表-表情包对象">附表-表情包对象</a></li></ul></details>
  - <details><summary><a href="emoji/action.md">操作</a>√</summary><ul><li><a href="emoji/action.md#添加表情包">添加表情包</a></li><li><a href="emoji/action.md#移除表情包">移除表情包</a></li></ul></details>
- [创作中心](creativecenter)
  - <details><summary><a href="creativecenter/statistics&data.md">统计与数据</a>×</summary><ul><li><a href="creativecenter/statistics&data.md#UP主视频状态数据">UP主视频状态数据</a></li><li><a href="creativecenter/statistics&data.md#UP主专栏状态数据">UP主专栏状态数据</a></li><li><a href="creativecenter/statistics&data.md#视频数据增量趋势">视频数据增量趋势</a></li><li><a href="creativecenter/statistics&data.md#专栏数据增量趋势">专栏数据增量趋势</a></li><li><a href="creativecenter/statistics&data.md#稿件操作来源占比情况">稿件操作来源占比情况</a></li><li><a href="creativecenter/statistics&data.md#播放来源占比情况（平台及方式）">播放来源占比情况（平台及方式）</a></li><li><a href="creativecenter/statistics&data.md#播放分布情况（粉丝与路人）">播放分布情况（粉丝与路人）</a></li></ul></details>
  - 列表查询相关
  - <details><summary><a href="creativecenter/railgun.md">电磁力数据</a>√</summary><ul><li><a href="creativecenter/railgun.md#获取电磁力等级（web端）">获取电磁力等级（web端）</a></li><li><a href="creativecenter/railgun.md#获取电磁力详细数值（双端）">获取电磁力详细数值（双端）</a></li><li><a href="creativecenter/railgun.md#获取电磁力数值历史变化（双端）">获取电磁力数值历史变化（双端）</a></li></ul></details>
- [实时广播（通讯协议）](broadcast)√
  - <details><summary><a href="broadcast/video_room.md">视频内广播</a>√</summary><ul><li><a href="broadcast/video_room.md#认证包（上行）">认证包（上行）</a></li><li><a href="broadcast/video_room.md#认证包回复（下行）">认证包回复（下行）</a></li><li><a href="broadcast/video_room.md#心跳包（上行）">心跳包（上行）</a></li><li><a href="broadcast/video_room.md#心跳包回复（实时观看数）（下行）">心跳包回复（实时观看数）（下行）</a></li><li><a href="broadcast/video_room.md#普通包（实时弹幕）（下行）">普通包（实时弹幕）（下行）</a></li></ul></details>
- [充电](electric)
  - <details><summary><a href="electric/Bcoin.md">B币方式</a>√</summary><ul><li><a href="electric/Bcoin.md#新版本接口">新版本接口</a></li><li><a href="electric/Bcoin.md#老版本接口">老版本接口</a></li></ul></details>
  - <details><summary><a href="electric/WeChat&Alipay.md">微信&支付宝方式</a>√</summary><ul><li><a href="electric/WeChat&Alipay.md#申请充电二维码及扫码秘钥">申请充电二维码及扫码秘钥</a></li><li><a href="electric/WeChat&Alipay.md#检查扫码支付结果">检查扫码支付结果</a></li></ul></details>
  - [充电留言](electric/charge_msg.md)√
  - <details><summary><a href="electric/charge_list.md">充电列表</a>√</summary><ul><li><a href="electric/charge_list.md#获取空间充电公示列表">获取空间充电公示列表</a></li><li><a href="electric/charge_list.md#获取视频充电鸣谢名单">获取视频充电鸣谢名单</a></li></ul></details>
- [动态](dynamic)
  - [发送&转载动态](dynamic/publish.md)×
  - 动态列表
    - <details><summary><a href="/dynamic/tag_dynamics.md">特定话题动态列表</a>√</summary><ul><li><a href="/dynamic/tag_dynamics.md#获取包含置顶及热门的动态列表">获取包含置顶及热门的动态列表</a></li><li><a href="/dynamic/tag_dynamics.md#获取历史动态列表">获取历史动态列表</a></li></ul></details>
  - [动态内容](/dynamic/get_dynamic_detail.md)×
  - 操作
- [相簿](album)
  - [基本信息](album/info.md)√
  - <details><summary><a href="album/list.md">相簿列表</a>√</summary><ul><li><a href="album/list.md#获取画友首页列表">获取画友首页列表</a></li><li><a href="album/list.md#获取摄影首页列表">获取摄影首页列表</a></li><li><a href="album/list.md#获取画友列表">获取画友列表</a></li><li><a href="album/list.md#获取摄影列表">获取摄影列表</a></li><li><a href="album/list.md#获取指定用户的相簿列表">获取指定用户的相簿列表</a></li></ul></details>
  - <details><summary><a href="album/recommend_author.md">推荐作者</a>√</summary><ul><li><a href="album/recommend_author.md#获取摄影推荐作者">获取摄影推荐作者</a></li><li><a href="album/recommend_author.md#获取画友推荐作者">获取画友推荐作者</a></li></ul></details>
  - [活动列表](album/activity_list.md)√
  - <details><summary><a href="album/action.md">操作</a>√</summary><ul><li><a href="album/action.md#点赞相簿">点赞相簿</a></li><li><a href="album/action.md#收藏相簿">收藏相簿</a></li><li><a href="album/action.md#取消收藏相簿">取消收藏相簿</a></li></ul></details>
  - 投稿
- [历史记录&稍后再看](history&toview)
  - <details><summary><a href="history&toview/history.md">历史记录</a>√</summary><ul><li><a href="history&toview/history.md#获取历史记录列表（视频、直播、专栏）">获取历史记录列表（视频、直播、专栏）</a></li><li><a href="history&toview/history.md#获取全部视频历史记录（旧）">获取全部视频历史记录（旧）</a></li><li><a href="history&toview/history.md#删除历史记录">删除历史记录</a></li><li><a href="history&toview/history.md#清空历史记录">清空历史记录</a></li><li><a href="history&toview/history.md#停用历史记录">停用历史记录</a></li><li><a href="history&toview/history.md#查询历史记录停用状态">查询历史记录停用状态</a></li></ul></details>
  - <details><summary><a href="history&toview/toview.md">稍后再看</a>√</summary><ul><li><a href="history&toview/toview.md#视频添加稍后再看">视频添加稍后再看</a></li><li><a href="history&toview/toview.md#添加频道中所有视频到稍后再看">添加频道中所有视频到稍后再看</a></li><li><a href="history&toview/toview.md#获取稍后再看视频列表">获取稍后再看视频列表</a></li><li><a href="history&toview/toview.md#删除稍后再看视频">删除稍后再看视频</a></li><li><a href="history&toview/toview.md#清空稍后再看视频列表">清空稍后再看视频列表</a></li></ul></details>
- [收藏夹](fav)
  - <details><summary><a href="fav/info.md">基本信息</a>√</summary><ul><li><a href="fav/info.md#获取收藏夹元数据">获取收藏夹元数据</a></li><li><a href="fav/info.md#获取指定用户创建的所有收藏夹信息">获取指定用户创建的所有收藏夹信息</a></li><li><a href="fav/info.md#批量获取指定收藏id的内容">批量获取指定收藏id的内容</a></li></ul></details>
  - <details><summary><a href="fav/list.md">收藏夹内容</a>√</summary><ul><li><a href="fav/list.md#获取收藏夹内容明细列表">获取收藏夹内容明细列表</a></li><li><a href="fav/list.md#获取收藏夹全部内容id">获取收藏夹全部内容id</a></li></ul></details>
  - <details><summary><a href="fav/action.md">收藏夹操作</a>×</summary><ul><li><a href="fav/action.md#管理收藏夹">管理收藏夹</a></li><ul><li><a href="fav/action.md#新建收藏夹">新建收藏夹</a></li><li><a href="fav/action.md#修改收藏夹">修改收藏夹</a></li><li><a href="fav/action.md#删除收藏夹">删除收藏夹</a></li></ul><li><a href="fav/action.md#管理收藏内容">管理收藏内容</a></li><ul><li><a href="fav/action.md#批量复制内容">批量复制内容</a></li><li><a href="fav/action.md#清空所有失效内容">清空所有失效内容</a></li></ul></ul></details>
- [课程](cheese)
  - <details><summary><a href="cheese/info.md">课程基本信息</a>√</summary><ul><li><a href="cheese/info.md#获取课程基本信息">获取课程基本信息</a></li><li><a href="cheese/info.md#获取课程分集列表">获取课程分集列表</a></li></ul></details>
  - 已购课程
  - 分区推荐列表
  - 操作
  - [播放&下载地址（视频流）](cheese/videostream_url.md)√
- [直播](live)
  - <details><summary><a href="live/info.md">直播间基本信息</a>×</summary><ul><li><a href="live/info.md#获取用户对应的直播间状态">获取用户对应的直播间状态</a></li><li><a href="live/info.md#获取房间页初始化信息">获取房间页初始化信息</a></li><li><a href="live/info.md#获取主播信息">获取主播信息</a></li><li><a href="live/info.md#批量查询直播间状态">批量查询直播间状态</a></li></ul></details>
  - [直播分区](live/live_area.md)×
  - <details><summary><a href="live/manage.md">直播间管理</a>×</summary><ul><li><a href="live/manage.md#更新直播间标题">更新直播间标题</a></li><li><a href="live/manage.md#开始直播">开始直播</a></li><li><a href="live/manage.md#关闭直播">关闭直播</a></li></ul></details>
  - 直播间操作
  - [直播视频流](live/live_stream.md)×
  - [直播信息流](live/message_stream.md)×
  - <details><summary><a href="live/user.md">直播间用户相关</a>×</summary><ul><li><a href="live/user.md#获取用户持有的粉丝勋章信息">获取用户持有的粉丝勋章信息</a></li><li><a href="live/user.md#佩戴勋章">佩戴勋章</a></li><li><a href="live/user.md#直播签到">直播签到</a></li></ul></details>
- [转正答题](newbie_exam)
  - <details><summary><a href="newbie_exam/info.md">查询信息</a>×</summary><ul><li><a href="newbie_exam/info.md#查询答题状态">查询答题状态</a></li><li><a href="newbie_exam/info.md#查询自选题分类">查询自选题分类</a></li><li><a href="newbie_exam/info.md#查询答题结果">查询答题结果</a></li></ul></details>
  - <details><summary><a href="newbie_exam/fetch.md">拉取题目</a>√</summary><ul><li><a href="newbie_exam/fetch.md#拉取基础题">拉取基础题</a></li><li><a href="newbie_exam/fetch.md#拉取附加题">拉取附加题</a></li><li><a href="newbie_exam/fetch.md#拉取自选题">拉取自选题</a></li></ul></details>
  - <details><summary><a href="newbie_exam/action.md">操作</a>×</summary><ul><li><a href="newbie_exam/action.md#提交答题">提交答题</a></li><ul><li><a href="newbie_exam/action.md#提交基础题">提交基础题</a></li><li>提交附加题</li><li>提交自选题</li></ul><li>获取极验验证码</li><li>提交自选题分类</li><li>提前交卷</li></ul></details>
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
  - <details><summary><a href="other/time_stamp.md">获取当前时间戳</a>√</summary><ul><li><a href="other/time_stamp.md#获取当前时间戳">获取当前时间戳</a></li><li><a href="other/time_stamp.md#获取服务器端UTC时间">获取服务器端UTC时间</a></li></ul></details>
- [web端组件](web_widget)
  - [分区当日投稿数](web_widget/zone_upload.md)√
  - <details><summary><a href="web_widget/404_manga.md">404页漫画收集</a>√</summary><ul><li><a href="web_widget/404_manga.md#视频稿件错误提示图">视频稿件错误提示图</a></li><li><a href="web_widget/404_manga.md#static类型">static类型</a></li><li><a href="web_widget/404_manga.md#dynamic类型">dynamic类型</a></li></ul></details>
- [APP端组件](APP_widget)
  - [开屏图片](APP_widget/splash.md)√
- [个性装扮](garb)
  - <details><summary><a href="garb/skin.md">APP主题</a>√</summary><ul><li><a href="garb/skin.md#获取主题及加载动画">获取主题及加载动画</a></li><li><a href="garb/skin.md#主题包结构">主题包结构</a></li></ul></details>
  - <details><summary><a href="garb/color.md">主题色</a>√</summary><ul><li><a href="garb/color.md#获取主题色基本信息1">获取主题色基本信息1</a></li><li><a href="garb/color.md#获取主题色基本信息2">获取主题色基本信息2</a></li></ul></details>

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
- [JunzhouLiu/BILIBILI-HELPER](https://github.com/JunzhouLiu/BILIBILI-HELPER):利用Linux Crontab定时任务,云函数，Docker等方式实现B站，哔哩哔哩（Bilibili）每日自动投币，签到，银瓜子兑换硬币，领取大会员福利，大会员月底给自己充电等。每天轻松获取65经验值。
- [the1812/Bilibili-Evolved](https://github.com/the1812/Bilibili-Evolved):强大的哔哩哔哩增强脚本: 下载视频, 音乐, 封面, 弹幕 / 简化直播间, 评论区, 首页 / 自定义顶栏, 删除广告, 夜间模式 / 触屏设备支持
- [xlzy520/bili-short-url](https://github.com/xlzy520/bili-short-url): 哔哩哔哩短链生成器
- [zjkwdy/bili_app_splash](https://github.com/zjkwdy/bili_app_splash): B站壁纸娘和开屏图自动下载，每天使用Actions自动同步
- [Jannchie/BiliOB](https://github.com/Jannchie/BiliOB): BiliOB观测者是一个观测B站UP主及视频数据变化，并予以分析的Web应用程序
- [biliob233/biliob233.github.io](https://github.com/biliob233/biliob233.github.io):~~无可奉告~~

## 其他

- [kuresaru/geetest-validator](https://github.com/kuresaru/geetest-validator):geetest调试器

- [uw-labs/bloomrpc](https://github.com/uw-labs/bloomrpc): GUI Client for GRPC Services

- [grpc/grpc](https://github.com/grpc/grpc): The C based gRPC (C++, Python, Ruby, Objective-C, PHP, C#) 
