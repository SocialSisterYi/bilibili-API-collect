# grpc 接口定义（protobuf 结构体）

注：

1. proto 结构体文件按照包名分类，同级放在同一目录中

2. 暂时无说明文档，稍后添加

3. 以下文件全部来自 apk 的逆向工程，如有疏漏请包涵

## grpc 主机

B 站客户端的 grpc 接口主机为以下服务器

> grpc.biliapi.net
>
> app.bilibili.com

## grpc 鉴权

需要在请求 http 头部中添加`access_key`，如下

```
authorization:identify_v1 {access_key}
```

## grpc 头部

-   [bilibili.metadata](bilibili/metadata)：客户端环境参数
-   [bilibili.rpc](bilibili/rpc/status.proto)：响应错误信息

## 接口请求定义

_稍后补充_

## 示例

B 站 gRPC API Golang 封装：[XiaoMiku01/bilibili-grpc-api-go](https://github.com/XiaoMiku01/bilibili-grpc-api-go)
