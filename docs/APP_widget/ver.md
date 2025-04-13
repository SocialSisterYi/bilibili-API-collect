# 获取最新 APP 版本

## 获取版本信息

> https://app.bilibili.com/x/v2/version

*请求方法: GET*

<!--{
  "from": {
    "url": "https://app.bilibili.com/"
  }
}-->

**URL参数:**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| --- | --- | --- | --- | --- |
| mobi_app | str | 目标客户端类型 | 不必要 | 留空为最新有更新的平台<br />android: Android 版<br />iphone: iPhone 版<br />ipad: iPad HD 版<br />win: UWP 版<br />android_tv_yst: TV 版<br />android_car: 车机版<br />pc_client: PC 客户端 |

**JSON回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | int | 返回值 | 0: 成功 |
| message | str | 错误信息 | 默认为 `0` |
| ttl | int | 1 |  |
| data | array | 版本信息列表 |  |

`data` 数组中的对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| plat | int | 平台 | 0: Android<br />1: iPhone<br />2: iPad HD<br />3: UWP<br />12: TV 版<br />35: 车机版<br />40: PC 客户端 |
| desc | str | 版本描述 |  |
| version | str | 版本号 |  |
| build | int | 内部版本号 |  |

**示例:**

```shell
curl -G 'https://app.bilibili.com/x/v2/version' \
--url-query'mobi_app=android'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": [
    {
      "plat": 0,
      "desc": "-修复了一些bug，切了个大西瓜~",
      "version": "8.9.0",
      "build": 8090300,
      "ptime": 1723612377
    },
    // ...
    {
      "plat": 0,
      "desc": "[修正]横屏状态下,视频列表加载失败的问题\n[修正]超过48kHz采样率的音频无法播放的问题\n[修正]部分系统黑屏的问题\nPS:帮下面的同学祈祷早日上架",
      "version": "2.0.4",
      "build": 0,
      "ptime": 1382630400
    }
  ]
}
```

</details>

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

```shell
curl -G 'https://app.bilibili.com/x/v2/version/fawkes/upgrade' \
--url-query 'build=1145141' \
--url-query 'channel=apt' \
--url-query 'mobi_app=android' \
--url-query 'nt=awa' \
--url-query 'ov=qwq' \
--url-query 'platform=archlinux' \
--url-query 'sn=919810' \
--url-query 'vn=!!!'
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

## 拼接最新版本下载地址

> https://api.bilibili.com/x/web-frontend/getappversion

*请求方法: GET*

**URL参数:**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ---- | ---- | ---- | ---- | ---- |
| target | string | 目标平台 | 目测仅 `pc_electron`, 错误的值会导致返回 `HTTP 404` |
| cdn_url | string | CDN URL | 任意字符串, 默认 `https://dl.hdslb.com/mobile/fixed/bili_win/bili_win-install.exe` |

**JSON回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| code | number | 返回值 | 0: 成功<br />-1: need target |
| message | string | 错误消息 | 成功时无此项 |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| cdn_url | string | CDN URL | 内容同请求参数 `cdn_url` |
| sole_cdn_url | string | 带版本的 CDN URL | `cdn_url + "?v=" + 最新版本` |

**示例:**

```shell
curl -G 'https://api.bilibili.com/x/web-frontend/getappversion' \
--url-query 'target=pc_electron' \
--url-query 'cdn_url=https://dl.hdslb.com/mobile/fixed/bili_win/bili_win-install.exe'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "data": {
    "cdn_url": "https://dl.hdslb.com/mobile/fixed/bili_win/bili_win-install.exe",
    "sole_cdn_url": "https://dl.hdslb.com/mobile/fixed/bili_win/bili_win-install.exe?v=1.16.1-2"
  }
}
```

</details>
