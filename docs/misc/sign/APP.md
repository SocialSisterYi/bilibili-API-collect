# APP API 签名与鉴权

## APP API 签名特性

部分客户端专用的 REST API 存在基于参数签名的鉴权，需要使用规定的`appkey`及其对应的`appsec`与原始请求参数进行签名计算，部分`AppKey`及与之对应的`AppSec`已经被公开：见该文档 [APPKey](APPKey.md)

- 不同 `appkey` 对应不同的 app (如客户端、概念版、必剪、漫画、bililink等)

- 不同平台同 app 也会存在不同的 `appkey` (如安卓端、ios端、TV端等)

- 同平台同 app 下不同功能也会存在不同的 `appkey`（如登录专用、取流专用等）

- 不同版本的客户端的 `appkey` 也可能不同

- **appkey与appsec一一对应**

## APP API 签名算法

1. 首先为参数中添加`appkey`字段
2. 然后按照参数的 Key 重新排序
3. 再对这个 Key-Value 进行 url query 序列化，并拼接与之对应的`appsec` (盐) 进行 **md5 Hash 运算**（32-bit 字符小写），该 hash 便是 API 签名
4. 最后在参数尾部增添`sign`字段，它的 Value 为上一步计算所得的 hash，一并作为表单或 Query 提交

## Demo

该 Demo 提供 [Python](#python)、[Java](#java)、[TS/JS](#typescript-javascript)、[Swift](#swift)、[C++](#cplusplus) 语言例程

使用 appkey = `1d8b6e7d45233436`, appsec = `560c52ccd288fed045859ed18bffd973` 对如下 `params` 参数进行签名

上述示例`appkey`、`AppSec`均来自文档 [APPKey](APPKey.md)

### Python

```python
import hashlib
import urllib.parse

def appsign(params, appkey, appsec):
    '为请求参数进行 APP 签名'
    params.update({'appkey': appkey})
    params = dict(sorted(params.items())) # 按照 key 重排参数
    query = urllib.parse.urlencode(params) # 序列化参数
    sign = hashlib.md5((query+appsec).encode()).hexdigest() # 计算 api 签名
    params.update({'sign':sign})
    return params

appkey = '1d8b6e7d45233436'
appsec = '560c52ccd288fed045859ed18bffd973'
params = {
    'id':114514,
    'str':'1919810',
    'test':'いいよ，こいよ',
}
signed_params = appsign(params, appkey, appsec)
query = urllib.parse.urlencode(signed_params)
print(signed_params)
print(query)
```

输出内容分别是进行 APP 签名的后参数的 key-Value 以及 url query 形式

```
{'appkey': '1d8b6e7d45233436', 'id': 114514, 'str': '1919810', 'test': 'いいよ，こいよ', 'sign': '01479cf20504d865519ac50f33ba3a7d'}
appkey=1d8b6e7d45233436&id=114514&str=1919810&test=%E3%81%84%E3%81%84%E3%82%88%EF%BC%8C%E3%81%93%E3%81%84%E3%82%88&sign=01479cf20504d865519ac50f33ba3a7d
```

### Java


```java
package io.github.cctyl;

import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.net.URLEncoder;
import java.util.TreeMap;

/**
 * @author cctyl
 */
public class AppSigner {

    private static final String APP_KEY = "1d8b6e7d45233436";
    private static final String APP_SEC = "560c52ccd288fed045859ed18bffd973";

    public static String appSign(Map<String, String> params) {
        // 为请求参数进行 APP 签名
        params.put("appkey", APP_KEY);
        // 按照 key 重排参数
        Map<String, String> sortedParams = new TreeMap<>(params);
        // 序列化参数
        StringBuilder queryBuilder = new StringBuilder();
        for (Map.Entry<String, String> entry : sortedParams.entrySet()) {
            if (queryBuilder.length() > 0) {
                queryBuilder.append('&');
            }
            queryBuilder
                    .append(URLEncoder.encode(entry.getKey(), StandardCharsets.UTF_8))
                    .append('=')
                    .append(URLEncoder.encode(entry.getValue(), StandardCharsets.UTF_8));
        }
        return generateMD5(queryBuilder .append(APP_SEC).toString());
    }

    private static String generateMD5(String input) {
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            byte[] digest = md.digest(input.getBytes());
            StringBuilder sb = new StringBuilder();
            for (byte b : digest) {
                sb.append(String.format("%02x", b));
            }
            return sb.toString();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static void main(String[] args) {
        Map<String, String> params = new HashMap<>();
        params.put("id", "114514");
        params.put("str", "1919810");
        params.put("test", "いいよ，こいよ");
        System.out.println(appSign(params));
    }
}
```

输出结果为：01479cf20504d865519ac50f33ba3a7d

### TypeScript/JavaScript

```typescript
import { createHash } from 'node:crypto'

type Params = Record<string, any>

const md5 = (str: string) => createHash('md5').update(str).digest('hex')

/**
 * 为请求参数进行 APP 签名
 */
export function appSign(params: Params, appkey: string, appsec: string) {
  params.appkey = appkey
  const searchParams = new URLSearchParams(params)
  searchParams.sort()
  return md5(searchParams.toString() + appsec)
}

console.log(
  appSign(
    {
      id: 114514,
      str: '1919810',
      test: 'いいよ，こいよ',
    },
    '1d8b6e7d45233436',
    '560c52ccd288fed045859ed18bffd973',
  ),
  '01479cf20504d865519ac50f33ba3a7d',
)
```

输出结果为：01479cf20504d865519ac50f33ba3a7d

### Swift

```swift
import Foundation
import CommonCrypto

//Swift标准库没有MD5函数，所以我们要自己实现一个
func MD5(string: String) -> String {
    let length = Int(CC_MD5_DIGEST_LENGTH)
    var digest = [UInt8](repeating: 0, count: length)

    if let d = string.data(using: .utf8) {
        _ = d.withUnsafeBytes { body -> String in
            CC_MD5(body.baseAddress, CC_LONG(d.count), &digest)
            return ""
        }
    }

    return (0..<length).reduce("") {
        $0 + String(format: "%02x", digest[$1])
    }
}

func appSign(params: [String:String],appKey:String,appSec:String) -> String {
    var signedParams = params
    signedParams["appkey"] = appKey
    let sortedParams = signedParams.sorted { $0.key < $1.key }
    //在制作成query时，需要显式addingPercentEncoding转换
    let query = sortedParams.map { "\($0.key)=\($0.value.addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed)!)" }.joined(separator: "&")
    let sign = MD5(string: query+appSec)
    return sign
}


//testSign
let appKey = "1d8b6e7d45233436"
let appSec = "560c52ccd288fed045859ed18bffd973"
let signResult = appSign(params: [
    "id": "114514",
    "str": "1919810",
    "test": "いいよ，こいよ",
],appKey:appKey,appSec:appSec)
print(signResult)
```

输出结果为：01479cf20504d865519ac50f33ba3a7d



### CplusPlus

需要 c++ 23 标准库，[cpr](https://github.com/libcpr/cpr)、[cryptopp](https://github.com/weidai11/cryptopp)、[nlohmann/json](https://github.com/nlohmann/json) 等依赖

```c++
#include <print>    // std::println

/// thrid party libraries
#include <cpr/cpr.h>            // cpr::util::urlEncode()
#include <cryptopp/md5.h>
#include <cryptopp/hex.h>
#include <nlohmann/json.hpp>

/*
 * 注意，假定不会发生错误！
 */

/* 获取 md5 hex(lower) */
std::string Get_md5_hex(const std::string &Input_str) {
    CryptoPP::Weak1::MD5 hash;
    std::string          md5_hex;

    CryptoPP::StringSource ss(Input_str, true,
        new CryptoPP::HashFilter(hash,
            new CryptoPP::HexEncoder(
                new CryptoPP::StringSink(md5_hex)
            )
        )
    );

    std::ranges::for_each(md5_hex, [](char &x) { x = std::tolower(x); });
    return md5_hex;
}

/* 将 json 转换为 url 编码字符串 */
std::string Json_to_url_encode_str(const nlohmann::json &Json) {
    std::string encode_str;
    for (const auto &[key, value]: Json.items()) {
        encode_str.append(key).append("=").append(cpr::util::urlEncode(value.is_string() ? value.get<std::string>() : to_string(value))).append("&");
    }

    // remove the last '&'
    encode_str.resize(encode_str.size() - 1, '\0');
    return encode_str;
}

std::string App_sign(nlohmann::json &Params, const std::string &App_key, const std::string &App_sec) {
    Params["appkey"] = App_key;
    Params["sign"]   = Get_md5_hex(Json_to_url_encode_str(Params) + App_sec);
    return Json_to_url_encode_str(Params);
}

int main() {
    nlohmann::json Params;
    Params["id"]   = 114514;
    Params["str"]  = "1919810";
    Params["test"] = "いいよ，こいよ";

    constexpr auto App_key = "1d8b6e7d45233436";
    constexpr auto App_sec = "560c52ccd288fed045859ed18bffd973";
    std::string    sign    = App_sign(Params, App_key, App_sec);
    std::println("{}", to_string(Params));
    std::println("{}", sign);
}
```

```text
{"appkey":"1d8b6e7d45233436","id":114514,"sign":"01479cf20504d865519ac50f33ba3a7d","str":"1919810","test":"いいよ，こいよ"}
appkey=1d8b6e7d45233436&id=114514&sign=01479cf20504d865519ac50f33ba3a7d&str=1919810&test=%E3%81%84%E3%81%84%E3%82%88%EF%BC%8C%E3%81%93%E3%81%84%E3%82%88
```

