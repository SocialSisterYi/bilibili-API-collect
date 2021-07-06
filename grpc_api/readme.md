# grpc接口定义（protobuf结构体） 

注：

1. proto结构体文件按照包名分类，同级放在同一目录中

2. 暂时无说明文档，稍后添加

3. 以下文件全部来自apk的逆向工程，如有疏漏请包涵

## grpc主机

B站客户端的grpc接口主机为以下服务器

> grpc.biliapi.net
>
> app.bilibili.com

## grpc鉴权

需要在请求http头部中添加`access_key`，如下

```
authorization:identify_v1 {access_key}
```

## grpc头部

- [bilibili.metadata](bilibili/metadata)：客户端环境参数
- [bilibili.rpc](bilibili/rpc/status.proto)：响应错误信息

## 接口请求定义

*稍后补充*