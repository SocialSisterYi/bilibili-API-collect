# 获取最新 APP 版本

## 版本升级

> https://app.bilibili.com/x/v2/version/fawkes/upgrade

*请求方式: GET*

鉴权方式（非必须）：[APP API 签名与鉴权](../misc/sign/APP.md)

**URL参数:**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| - | - | - | - | - |
| abi | str | 设备 CPU ABI | 不必要 | 如 `arm64-v8a` |
| appid | str | 客户端类型 | 不必要 | 如 `tv.danmaku.bili` |
| brand | str | 设备品牌 | 不必要 | 如 `google` |
| build | int | 当前 APP 版本号 | 必要 | 如 `8000200` |
| channel | str | APP 分发渠道 | 必要 | 如 `master` |
| deviceid | str | 设备唯一 ID | 不必要 | 即 XU-Prefixed BUVID，见 [device_identity](../misc/device_identity.md) |
| env | str | APP 分发环境 | 不必要 | 默认 `prod` |
| iv | int | 当前 APP innerVer | 不必要 | 如 `8000210` |
| mobi_app | str | APP mobi_app | 必要 | 如 `android` |
| model | str | 设备型号 | 不必要 | 如 `Pixel 2 XL` |
| nt | str | - | 必要 | 默认 `1` |
| ov | str | 设备 OS 版本 | 必要 | 安卓即 API Level，如 Android 11 为 `30` |
| platform | str | 设备平台 | 不必要 | 如 `android` |
| screen | str | 设备屏幕参数 | 不必要 | 如 `2712_1440@537.882_537.882`
| sn | int | 当前 APP SN | 必要 | 如 `15088473` |
| vn | str | 当前 APP 版本名称 | 必要 | 如 `8.0.0` |

**标头参数（Headers）：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| - | - | - | - | - |
| app-key | str | APPKey 名称 | 必要 | 大体等同于 [`mobi_app`](../misc/sign/APPKey.md)。特别地：64 位版本粉版客户端应为 `android64` |
| buvid | str | BUVID | 必要 | XU-Prefixed BUVID，见 [device_identity](../misc/device_identity.md) |

**JSON回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| - | - | - | - |
| code | int | 返回值 | 0: 成功<br />-304: 木有改动<br />-400: 请求异常 |
| message | str | 错误信息 | 默认为 `0` |
| ttl | int | 1 |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| - | - | - | - |
| title | str | 标题 |  |
| content | str | 内容 |  |
| version | str | 最新版本名称 |  |
| version_code | int | 最新版本号 | 即 `build` |
| url | str | 下载地址 |  |
| size | int | 大小 | 单位字节 |
| md5 | str | MD5 值 |  |
| silent | int | 是否静默安装? |  |
| upgrade_type | int | 升级类型? |  |
| cycle | int | 升级周期? |  |
| policy | int | 升级策略? |  |
| policy_url | str | 升级策略链接? |  |
| ptime | int | 发布时间 |  |

**示例:**

```sh
curl 'https://app.bilibili.com/x/v2/version/fawkes/upgrade' \
  --url-query 'build=8000200' \
  --url-query 'channel=master' \
  --url-query 'mobi_app=android' \
  --url-query 'ov=30' \
  --url-query 'nt=1' \
  --url-query 'sn=15088473' \
  --url-query 'vn=8.0.0' \
  --header 'app-key: android64' \
  --header 'buvid: XU607DF6A8098F57B0BAF7FC107714C3035F0' \
  --header 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36'
```

<details>
<summary>查看响应示例:</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "title": "升级提醒",
        "content": "-修复了一些bug，并吃了一桶冰淇凌~\n-记得检查暑假作业哦！",
        "version": "8.10.0",
        "version_code": 8100300,
        "url": "https://dl.hdslb.com/mobile/pack/android64/15793300/iBiliPlayer-apinkRelease-8.10.0-b15793300.apk",
        "size": 132432843,
        "md5": "f196c0ea68ff894dab0cf380cafad802",
        "silent": 0,
        "upgrade_type": 1,
        "cycle": 4,
        "policy": 0,
        "policy_url": "",
        "is_gray": 0,
        "ptime": 1724207041
    }
}
```

</details>
