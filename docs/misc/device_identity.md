# 设备各类标识算法(APP 端)

## 设备唯一标识 BUVID

注意区分于 Web 端的 [buvid3, buvid4](buvid3_4.md).

BUVID 在 APP 首次安装于某设备, 且首次启动时生成.

APP 首次(即每次安装后)启动, 会向云端发送本机各类设备特征, 含 `AndroidId`, `DrmId` 等, 请求是否有匹配的 BUVID, 有就使用云端的, 否则使用本地生成的.

APP 请求是否有匹配的 BUVID 发送的本机各类设备特征包括(但不限于):

+ `AndroidID`
+ `DrmId`
+ `IMEI`
+ `OAID`
+ 手机网卡 `MAC`
+ 设备品牌
+ 设备 Model
+ 本地生成的 BUVID

### 生成方法

1. 选定设备特征码, 可以是 `AndroidID`, `DrmId`, 手机网卡 `MAC` 等. 记为 `ID`. 特别地, `MAC` 应当去掉 `:`, `GUID`(即 UUID) 应当去掉 `-`.

2. 计算 `ID` 的 MD5. 记为 `ID_MD5`.

3. 从 `ID_MD5` 抽取第 3, 13, 23 位, 失败就默认为 000, 记为 `ID_E`.

4. 根据选定的设备特征码类型确定 BUVID Prefix, 见附录. 记为 `BUVID_Prefix`.

5. 按 `{BUVID_Prefix}{ID_E}{ID_MD5}` 的顺序连接起来, 共37位(2+3+32). 结果应当为大写.

### Demo

#### Rust

代码及测试样例见 [Rust Playground](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=40b5906cf3838a60efa83fa368b15147).

## 设备指纹 fp (fp_local, fp_remote)

用于请求账户相关 REST API, 及 gRPC Metadata 生成.

在请求头中, `fp_local` 和 `fp_remote` 设置为同一值即可, 暂不清楚区别.

### 生成方法

1. 获取 BUVID. 此处一般使用 XU Prefix 的 BUVID.

2. 获取设备 Model(`Build.MODEL`), 如 `NOH-AN01`.

3. 获取手机无线电固件版本号(`Build.getRadioVersion()`), 失败则留空. 如 `21C20B686S000C000,21C20B686S000C000`.

4. 按前述顺序拼接字符串, 计算得 MD5.

5. 获取年月日, 格式 `yyyyMMddhhmmss`, 拼接到 4 得到的字符串后.

6. 生成 16 位随机字符串, CharSet 为 `0123456789abcdef`, 拼接到 5 得到的字符串后, 记为 `fp_raw`.

7. 计算得到一个特殊字符串, 拼接到 `fp_raw` 后, 即得到最终的 `fp`, 特殊字符串算法见下:

```rust
let mut veri_code = 0;
// 有点像 HEX 的操作
let fp_raw_sub_str = fp_raw
    .as_bytes() // 将字符串 fp_raw 转换为字节数组
    .chunks(2)  // 按每两个字节一组进行切分
    .map(|s| unsafe { ::std::str::from_utf8_unchecked(s) }) // 对每一组解析作为 UTF-8 字符串
    .collect::<Vec<_>>(); // 将结果收集到 Vec 中
// 如果 fp_raw 的长度小于 62, 则向下取偶数减半作为循环终止条件, 否则终止条件为31
for i in 0..({
    if fp_raw.len() < 62 {
        fp_raw.len() - fp_raw.len() % 2 // 取偶数
    } else {
        62
    }
} / 2)
{
    // 将每组字符串转换为对应的 16 进制整数, 将转换得到的整数加到 veri_code 上. 
    veri_code += i32::from_str_radix(fp_raw_sub_str[i], 16).unwrap_or(0);
}
// 最后将 veri_code 对 256 取余, 格式化为两位的 16 进制字符串
let veri_code = format!("{:0>2x}", veri_code % 256);
```

### Demo

#### Rust

代码及测试样例见 [Rust Playground](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=40b5906cf3838a60efa83fa368b15147).

## 附录

### BUVID Prefix

|设备特征码|BUVID Prefix|备注|
|:-:|:-:|:-:|
|`AndroidID`|`XX`||
|`DrmId`|`XU`||
|`IMEI`|`XZ`|已弃用|
|`GUID`|`XW`|已弃用|
|`MAC`|`XY`||
|`GoogleId`|`XG`|东南亚版本|
|`FacebookId`|`XF`|东南亚版本|
