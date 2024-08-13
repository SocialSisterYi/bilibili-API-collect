# 获取最新 APP 版本

## 版本升级

> https://app.bilibili.com/x/v2/version/fawkes/upgrade

*请求方式: GET*

**URL参数:**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| - | - | - | - | - |
| appkey | str | APP 密钥 | 不必要 |  |
| build | int | 当前 APP 版本号 | 必要 | 将会影响是否有新版本 |
| mobi_app | str | 目标客户端类型 | 必要 | 如 `android` |
| nt | str | 任意非空串 | 必要 | 默认为 `1` |
| ov | str | 任意非空串 | 必要 | 默认为 `22` |
| platform | str | 设备平台 | 必要 | 任意非空串即可, 如 `android` |
| sn | int | 设备序列号? | 必要 | 任意数字即可, 如 `4462369` |
| vn | str | 当前版本号 | 必要 | 任意非空串即可, 如 `6.13.0` |

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
| version | str | 最新版本号 |  |
| version_code | int | 最新版本号 | build |
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

```curl
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
    "content": "-修复了一些bug，并优化了一些搜索和播放体验~\n-让我们举起双手，把力量借给备考的小伙伴们！",
    "version": "7.81.0",
    "version_code": 7810200,
    "url": "https://dl.hdslb.com/mobile/pack/android/15013586/iBiliPlayer-apinkRelease-7.81.0-b15013586.apk",
    "size": 138723520,
    "md5": "60f83fb828bc05aefdac67504ba72ea9",
    "silent": 0,
    "upgrade_type": 1,
    "cycle": 4,
    "policy": 0,
    "policy_url": "",
    "ptime": 1717554395
  }
}
```

</details>
