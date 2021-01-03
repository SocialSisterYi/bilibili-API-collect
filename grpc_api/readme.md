# grpc接口定义（protobuf结构体） 

- `comp_proto.bat`---win递归批量编译脚本

注：

1. proto结构体文件按照包名分类，同级放在同一目录中
2. 暂时无说明文档，稍后添加
3. 以下文件全部来自apk的逆向工程，如有疏漏请包涵

## grpc头部

- [bilibili.metadata.locale](bilibili/metadata/locale.proto)：区域信息
- [bilibili.metadata.network](bilibili/metadata/network.proto)：网络信息
- [bilibili.metadata](bilibili/metadata/metadata.proto)：环境参数
- [bilibili.metadata.restriction](bilibili/metadata/restriction.proto)：限制值
- [bilibili.metadata.device](bilibili/metadata/device.proto)：设备信息
- [bilibili.rpc](bilibili/rpc.proto)：响应错误信息

## 接口请求定义

- [blibili.app.archive.v1](bilibili/app/archive_v1.proto)：稿件信息v1模块
- [blibili.app.playurl.v1](bilibili/app/playurl_v1.proto)：APP端视频播放v1接口
- [blibili.app.view.v1](bilibili/app/view_v1.proto)：视频页v1接口
- [bilibili.pgc.gateway.player.v2](bilibili/pgc/gateway_player_v2.proto)：APP端PGC播放v2接口
- [bilibili.cheese.gateway.player.v1](bilibili/cheese_gateway_player_v1.proto)：APP端课程播放v1接口
- [bilibili.main.community.reply.v1](bilibili/main_community_reply_v1.proto)：评论区v1接口