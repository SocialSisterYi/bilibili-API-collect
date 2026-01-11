# b23.tv 短链

## 简述

b23.tv 是由 Bilibili 提供的短链服务, 主要用于站内长链接缩短便于分享, 目前仅在手机客户端生成

### 格式

目前<!--我-->已知的 b23.tv 短链格式有以下 3 种

- 任意短链, 路径由7位数字或大小写英文字母组成, 为防止滥用似乎有时效限制, 如 https://b23.tv/pigt3PQ

- 视频短链(AV号), 路径由字符串 `av` 尾随 视频 aid 组成, 如 https://b23.tv/av80433022

- 视频短链(BV号), 路径由字符串 `BV` 尾随 视频 bvid 组成, 如 https://b23.tv/BV1GJ411x7h7

## 生成

### 视频短链

1. 直接手动拼接字符串即可

2. 参见[任意短链](#任意短链)

### 任意短链

> https://api.bilibili.com/x/share/click  
> https://api.biliapi.net/x/share/click

*请求方式: POST*

认证方式: 仅APP, 但实际上形同虚设

注: 该接口参数对照表基本失效, 基本无实用价值, 已被注释, 参见 [#979](https://github.com/SocialSisterYi/bilibili-API-collect/issues/979) [Nemo2011/bilibili-api#720](https://github.com/Nemo2011/bilibili-api/pull/720)

**正文参数(application/x-www-form-urlencoded):**

必要:

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ------ | ---- | ------- | ------ | ---- |
| buvid | str | 设备 BUVID | 必要   | 实际任意非空字符串即可 |
| build | num | 客户端版本号 | 必要   | 大于 `5520400` 的任意有效整数, 如 `7710300` |
| platform | str | 客户端平台 | 必要   | 实际任意非空字符串即可 |
| share_channel | str | 分享方式? | 必要   | COPY |
| share_mode | num | 分享模式? | 必要   | 任意有效正整数, 常见 `1`, `3`, `4` |
| share_id | str | 分享 ID | 必要   | 见下方对照表 |
| share_origin | str | 分享来源? | 部分必要 | 见下方对照表 |
| oid | num | 对象 ID | 必要   | 见下方对照表 |

不必要:

| 参数名 | 类型 | 内容                     | 必要性 | 备注 |
| ------ | ---- | ------ | ---- | ---- |
| object_extra_fields| obj | 额外字段? | 非必要 | 如 `{"jumpfrom_id":30104}` `{"epid":"409808","cid":"1398781253"}` `{"season_type":"1","season_id":"39481","epid":"425006","dubbing_support":false,"background_audio":false,"role_audio_list":false}` |
| panel_type | num | 面板类型? | 非必要 | 1 |
| share_title | str | 分享标题? | 非必要 | 分享标题 |
| share_content | str | 分享内容? | 非必要 | 分享内容, 当 oid 存在时无意义<s>(可是 oid 不可能不存在啊)</s> |
| share_pattern | num | 分享模式? | 非必要 | 0 |
| share_session_id | str | 分享会话 ID? | 非必要 | 各部分用 `-` 分隔的小写的一串 UUID |
| ts | num | UNIX 秒级时间戳 | 非必要 |    |

对照表:

| 类型 | 分享 ID (share_id) | 对象 ID (oid) | 分享来源? (share_origin) | 备注 |
| --- | ------------------ | ------------- | ----------------------- | ---- |
| 视频 | `main.ugc-video-detail.0.0.pv` | 视频 aid | 非必要 | |
| 动态/图文 | `dt.dt-detail.0.0.pv` | 动态/图文 id | `dynamic` | |
| 专栏 | `read.column-detail.roof.8.click` | 文章 cvid | 非必要 | |
| 文集 | `read.column-readlist.share.0.click` | 文集 rlid | 非必要 | |
| 用户 | `main.space-total.more.0.click` | 用户 mid | 非必要 | |
| 课程 | `pugv.pugv-video-detail.0.0.pv` | 课程 id? | `vinfo_player` 或 `vinfo_share` | |
| 链接 | `public.webview.0.0.pv` | 任意站內链接 | 非必要 | 需填写完整链接，且域名必需为 `*.bilibili.com` |
<!-- 此处被注释是因为以下值均失效 -->
<!-- | 直播 | live.live-room-detail.0.0.pv | 直播 room_id | `vertical-three-point-panel` | 失效 |
| 番剧 | `pgc.pgc-video-detail.interaction.share.click` | 番剧 ssid/epid | `new_ogv` | 失效，提示 `不允许分享` | -->


**JSON回复:**

根对象:

| 字段名 | 类型 | 内容     | 备注 |
| ------ | ---- | -------- | ---- |
| code   | num  | 0         | 恒为 0 |
| message | str  | 0        | 恒为 0 |
| ttl    | num  | 1        | 恒为 1 |
| data   | obj  | 信息本体 |      |

`data` 对象:

| 字段名 | 类型 | 内容     | 备注 |
| ------ | ---- | -------- | ---- |
| content | str  | 短链内容 | 若失败则不存在 |
| count   | num  | 0        | 恒为 0 |

**示例:**

为 `av80433022` 生成 b23.tv 短链

```shell
curl -X POST "http://api.biliapi.net/x/share/click" \
--data-urlencode "platform=unix" \
--data-urlencode "share_channel=COPY" \
--data-urlencode "share_id=main.ugc-video-detail.0.0.pv" \
--data-urlencode "share_mode=4" \
--data-urlencode "oid=80433022" \
--data-urlencode "buvid=qwq" \
--data-urlencode "build=6114514"
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "content": "【【官方 MV】Never Gonna Give You Up - Rick Astley-哔哩哔哩】 https://b23.tv/5x4wy5f",
    "count": 0
  }
}
```

</details>
