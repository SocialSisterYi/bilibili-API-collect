# gRPC 接口定义（protobuf 结构体）

注：

1. proto 结构体文件按照包名分类, 同级放在同一目录中

2. gRPC 接口定义全部来自对官方粉版(即大陆版本) APP 的逆向工程, 一般不会有错误, 但是可能有更新, 有实际应用需求的建议自行反编译 APP, 定位到 `com.bapis.*` 自行补足.

## gRPC 主机

B 站客户端的 gRPC 接口主机包括:

+ `grpc.biliapi.net` 原生 gRPC 接口
+ `app.bilibili.com` Failover gRPC 接口

实际应用中, 后者速度相对更快. 但是需要设置如 gRPC 超时时间等参数时只能使用前者.

## gRPC 鉴权

需要在 Metadata 中添加 `authorization`: `identify_v1 {access_key}`.

## gRPC Metadata

参考 [gRPC Go 官方文档](https://github.com/grpc/grpc-go/blob/master/Documentation/grpc-metadata.md) 对 `Metadata` 的说明.

gRPC 的 `Metadata` 简单理解，就是 HTTP 的 Header 中的 key-value 对, 本质上是一个 Map. 在 gRPC `Metadata` 中，key 永远是 String，但是 value 可以是 String 也可以是二进制数据. **需要存储二进制数据时, key 应当加上一个 `-bin` 后缀, 同时二进制 value 应当编码为 Base64**.

一般而言, 设定 Binary 类型的 `Metadata` 时, 需要调用各个语言的 gRPC 库的相应方法, 库会帮我们编码二进制数据, 无需我们自行编码.

需要的 `Metadata` 包括(但不限于):

+ Ascii 类
  + `user-agent` 客户端 UA, 如 `Dalvik/2.1.0 (Linux; U; Android 12; {device_model} Build/{device_build}) {app_ver} os/android model/{device_model} mobi_app/{mobi_app} build/{app_build} channel/master innerVer/{app_build_inner} osVer/12 network/2 grpc-java-cronet/1.36.1`(其中 `grpc-java-cronet/1.36.1` 为原生 gRPC 接口才需要的). **必需**.
    + `device_model` 设备 Model, 如 `NOH-AN01`.
    + `device_build` 设备 Build, 如 `HUAWEINOH-AN01`.
    + `app_ver` APP 版本号, 如 `7.38.0`.
    + `mobi_app` APP 包类型, 参考 [APPKey.md](/docs/misc/sign/APPKey.md).
    + `app_build` APP 版本号, 如 `7380300`.
    + `app_build_inner` APP 版本号(内部), 如 `7380310`. 实际应用中设置为 `app_build` 即可.
  + `x-bili-gaia-vtoken` 暂时留空.
  + `x-bili-aurora-eid` 如 `UFUFQ1AA`. 算法见附录. 未登录留空. **必需**.
  + `x-bili-mid` 用户 UID, 未登录默认为 0. **必需**.
  + `x-bili-aurora-zone` 留空. **必需**.
  + `x-bili-trace-id` 如 `06e903399574695df75be114ff63ac64:f75be114ff63ac64:0:0`. 算法见附录. **必需**.
  + `authorization` 鉴权, 登录时设定为 `identify_v1 {access_key}`, 未登录时无需此项.
  + `buvid` 设备唯一标识, 算法见 [device_identity.md](/docs/misc/device_identity.md). **必需(?)**.
  + `bili-http-engine` 恒定为 `cronet`, 使用 `grpc.biliapi.net` 作为 gRPC 主机时无需此项.
  + `te` 恒定为 `trailers`, Java gRPC 库固定添加, 使用 `app.bilibili.com` 作为 gRPC 主机时无需此项.
+ Binary 类
  + `x-bili-fawkes-req-bin` 设备 Fawkes 信息, 使用 [FawkesReq](bilibili/metadata/fawkes/fawkes.proto) 生成. **必需**.
  + `x-bili-metadata-bin` 使用 [Metadata](bilibili/metadata/metadata.proto) 生成. **必需**.
  + `x-bili-device-bin` 设备信息, 使用 [Device](bilibili/metadata/device/device.proto) 生成. **必需**.
  + `x-bili-network-bin` 设备网络信息, 使用 [Network](bilibili/metadata/network/network.proto) 生成. **必需**.
  + `x-bili-restriction-bin` 限制信息, 使用 [Restriction](bilibili/metadata/restriction/restriction.proto) 生成. 本项一般直接传空值即可. **必需**.
  + `x-bili-locale-bin` 设备区域信息, 使用 [Locale](bilibili/metadata/locale/locale.proto) 生成. **必需**.
  + `x-bili-exps-bin` 使用 [Exps](bilibili/metadata/pararbox/pararbox.proto) 生成. 本项一般直接传空值即可. **必需**.


## 接口请求定义

等待补充, 参见 proto 文件注释. 以下仅介绍常用接口:

+ [bilibili.app.playeronline.v1 -> PlayerOnline](bilibili/app/playeronline/v1/playeronline.proto) 视频在线人数接口.
+ [bilibili.app.playerunite.v1 -> PlayViewUnite](bilibili/app/playerunite/v1/playerunite.proto) United 视频播放链接接口(同时适用于 PGC, UGC 视频).
+ [bilibili.app.playurl.v1 -> PlayURL](bilibili/app/playurl/v1/playurl.proto) UGC 视频播放链接接口(V1 版本).
+ [bilibili.pgc.gateway.player.v1 -> PlayView](bilibili/pgc/gateway/player/v1/playurl.proto) PGC 视频播放链接接口(V1 版本).
+ [bilibili.pgc.gateway.player.v2 -> PlayView](bilibili/pgc/gateway/player/v2/playurl.proto) PGC 视频播放链接接口(V2 版本).
+ [bilibili.polymer.app.search.v1 -> SearchAll, etc](bilibili/polymer/app/search/v1/search.proto) 搜索接口(V1 版本).
+ [bilibili.app.dynamic.v2 -> DynAll, etc](bilibili/app/dynamic/v2/dynamic.proto) 动态接口(V2 版本).
+ ...

## 应用示例

### Golang

B 站 gRPC API Golang 封装：[XiaoMiku01/bilibili-grpc-api-go](https://github.com/XiaoMiku01/bilibili-grpc-api-go)

## 附录

<details>
<summary>点此展开</summary>

### `x-bili-aurora-eid` 生成算法

```rust
pub fn gen_aurora_eid(uid: u64) -> Option<String> {
    if uid == 0 {
        return None;
    }
    let mut result_byte = Vec::with_capacity(64);
    // 1. 将 UID 字符串转为字节数组.
    let mid_byte = uid.to_string().into_bytes();
    // 2. 将字节数组逐位(记为第 i 位)与 b"ad1va46a7lza" 中第 (i % 12) 位进行异或操作, 作为结果数组第 i 位.
    mid_byte.iter().enumerate().for_each(|(i, v)| {
        result_byte.push(v ^ (b"ad1va46a7lza"[i % 12]))
    });
    // 3. 对字节数组执行 Base64 编码, 注意 no padding, 即得到 x-bili-aurora-eid.
    Some(base64::Engine::encode(
        &base64::engine::general_purpose::STANDARD_NO_PAD,
        result_byte,
    ))
}
```

### `x-bili-trace-id` 生成算法

```rust
pub fn gen_trace_id() -> String {
    // 1. 生成 32 位随机字符串 random_id , Charset 为 0~9, a~z. 
    let random_id = gen_random_string!(32);
    let mut random_trace_id = String::with_capacity(40);
    // 2. 取 random_id 前 24 位, 作为 random_trace_id.
    random_trace_id.push_str(&random_id[0..24]);
    // 3. 初始化一个长度为 3 的数组 b_arr, 初始值都为 0.
    let mut b_arr: [i8; 3] = [0i8; 3];
    // 并获取当前时间戳
    let mut ts = chrono::Local::now().timestamp();
    // 使用循环从高位到低位遍历 b_arr 数组, 循环体内执行以下逻辑:
    //  - 首先将 ts 右移 8 位
    //  - 然后根据条件向 b_arr 的第 i 位赋值: 
    //    - 如果 (ts / 128) % 2的结果为0, 则 b_arr[i] = ts % 256
    //    - 否则 b_arr[i] = ts % 256 - 256
    for i in (0..3).rev() {
        ts >>= 8;
        b_arr[i] = {
            if ((ts / 128) % 2) == 0 {
                (ts % 256) as i8
            } else {
                (ts % 256 - 256) as i8
            }
        }
    }
    // 4. 将数组 b_arr 中的每个元素逐个转换为两位的十六进制字符串并追加到 random_trace_id 中.
    for i in 0..3 {
        random_trace_id.push_str(&format!("{:0>2x}", b_arr[i]))
    }
    // 5. 将 random_id 的第 31, 32 个字符追加到 random_trace_id 中, 此时 random_trace_id 生成完毕, 应当为 32 位长度.
    random_trace_id.push_str(&random_id[30..32]);
    // 6. 最后, 按 `{random_trace_id}:{random_trace_id[16..32]}:0:0` 的顺序拼接起来, 即为 x-bili-trace-id
    let mut random_trace_id_final = String::with_capacity(64);
    random_trace_id_final.push_str(&random_trace_id);
    random_trace_id_final.push_str(":");
    random_trace_id_final.push_str(&random_trace_id[16..32]);
    random_trace_id_final.push_str(":0:0");
    random_trace_id_final
}
```

</details>
