# grpc接口定义（protobuf结构体） 

- `comp_proto.bat`---win递归批量编译脚本
- `conp_proto.sh`---linux递归编译脚本

注：

1. proto结构体文件按照包名分类，同级放在同一目录中
2. 暂时无说明文档，稍后添加
3. 以下文件全部来自apk的逆向工程，如有疏漏请包涵

## grpc头部

- [bilibili.metadata](bilibili/metadata.proto)：环境参数
- [bilibili.rpc](bilibili/rpc.proto)：响应错误信息

## 接口请求定义

- [blibili.app.archive.v1](bilibili/app/archive/v1.proto)：稿件信息
- [bilibili.app.card.v1](bilibili/app/card/v1.proro)：卡片
- [blibili.app.playurl.v1](bilibili/app/playurl/v1.proto)：APP端视频播放业务
- [blibili.app.show.v1.Popular](bilibili/app/show/popular/v1.proto)：热门内容
- [blibili.app.show.v1.Rank](bilibili/app/show/rank/v1.proto)：榜单
- [blibili.app.view.v1](bilibili/app/view/v1.proto)：稿件详情页
- [bilibili.cheese.gateway.player.v1](bilibili/cheese/gateway/player/v1.proto)：APP端课程播放
- [bilibili.pgc.gateway.player.v2](bilibili/pgc/gateway/player/v2.proto)：APP端PGC播放
- [bilibili.community.service.dm.v1](bilibili/community/service/dm/v1.proto)：弹幕
- [bilibili.main.community.reply.v1](bilibili/main/community/reply/v1.proto)：评论区