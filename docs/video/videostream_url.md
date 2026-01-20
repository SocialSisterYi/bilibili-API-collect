# 视频流URL

<img src="../../assets/img/download.svg" width="100" height="100"/>

视频为 DASH 或 MP4 流媒体，需调用取流 API 传参视频 id 获取

## qn视频清晰度标识

注：该值在 DASH 格式下无效，因为 DASH 格式会取到所有分辨率的流地址

又注: B站对于新的视频更新了播放设置, 较高分辨率均采用 DASH, 较低分辨率与老视频还保留了 MP4, 这导致较新视频无法获取 MP4 格式的高分辨率视频, 参见 [#606](https://github.com/SocialSisterYi/bilibili-API-collect/issues/606) 或 [cv949156](https://www.bilibili.com/read/cv949156/)

| 值   | 含义           | 备注                                                         |
| ---- | -------------- | ------------------------------------------------------------ |
| 6    | 240P 极速      | 仅 MP4 格式支持<br />仅`platform=html5`时有效                |
| 16   | 360P 流畅      |                                                              |
| 32   | 480P 清晰      |                                                              |
| 64   | 720P 高清      | WEB 端默认值<br />~~B站前端需要登录才能选择，但是直接发送请求可以不登录就拿到 720P 的取流地址~~<br />**无 720P 时则为 720P60** |
| 74   | 720P60 高帧率  | 登录认证                                                     |
| 80   | 1080P 高清     | TV 端与 APP 端默认值<br />登录认证                           |
| 100  | 智能修复       | 人工智能增强画质<br />大会员认证
| 112  | 1080P+ 高码率  | 大会员认证                                                   |
| 116  | 1080P60 高帧率 | 大会员认证                                                   |
| 120  | 4K 超清        | 需要`fnval&128=128`且`fourk=1`<br />大会员认证               |
| 125  | HDR 真彩色     | 仅支持 DASH 格式<br />需要`fnval&64=64`<br />大会员认证      |
| 126  | 杜比视界       | 仅支持 DASH 格式<br />需要`fnval&512=512`<br />大会员认证    |
| 127  | 8K 超高清      | 仅支持 DASH 格式<br />需要`fnval&1024=1024`<br />大会员认证  |
| 129 | HDR Vivid | 大会员认证 |

例如：请求 1080P+ 的视频，则`qn=112`

## fnver视频流版本标识

目前该值恒为 0，即`fnver=0`

## fnval视频流格式标识

该代码为二进制属性位，如需组合功能需要使用`OR`运算结合一下数值

目前 FLV 格式已下线，应避免使用`fnval=0`

| 值   | 含义               | 备注                                                         |
| ---- | ------------------ | ------------------------------------------------------------ |
| ~~0~~ | ~~FLV 格式~~  | FLV 格式已下线<br />~~仅 H.264 编码<br />部分老视频存在分段现象<br />与 MP4、DASH 格式互斥~~ |
| 1    | MP4 格式        | 仅 H.264 编码<br />与 ~~FLV~~、DASH 格式互斥 |
| 16   | DASH 格式      | 与 MP4、~~FLV~~ 格式互斥 |
| 64   | 是否需求 HDR 视频 | 需求 DASH 格式<br />仅 H.265 编码<br />需要`qn=125`<br />大会员认证 |
| 128  | 是否需求 4K 分辨率 | 该值与`fourk`字段协同作用<br />需要`qn=120`<br />大会员认证 |
| 256  | 是否需求杜比音频   | 需求 DASH 格式<br />大会员认证 |
| 512  | 是否需求杜比视界   | 需求 DASH 格式<br />大会员认证 |
| 1024 | 是否需求 8K 分辨率 | 需求 DASH 格式<br />需要`qn=127`<br />大会员认证 |
| 2048 | 是否需求 AV1 编码 | 需求 DASH 格式                                       |
| 4048 | 所有可用 DASH 视频流 | 即一次性返回所有可用 DASH 格式视频流 |
| 16384 | 是否需要 HDR Vivid | 需要`qn=129`<br />大会员认证<br />仅 APP 接口可用 |

例如：请求 DASH 格式，且需要 HDR 的视频流，则`fnval=16|64=80`

## 视频编码代码

| 值 | 含义     | 备注           |
| ---- | ---------- | ---------------- |
| 7  | AVC 编码 | 8K 视频不支持该格式 |
| 12 | HEVC 编码 |                |
| 13 | AV1 编码 |                |

## 视频伴音音质代码

| 值    | 含义 |
| ----- | ---- |
| 30216 | 64K  |
| 30232 | 132K |
| 30280 | 192K |
| 30250 | 杜比全景声 |
| 30251 | Hi-Res无损 |

## 获取视频流地址_web端

> https://api.bilibili.com/x/player/wbi/playurl

> ~~https://api.bilibili.com/x/player/playurl~~ （旧链接）

*请求方式：GET*

认证方式：Cookie（SESSDATA）

鉴权方式：[Wbi 签名](../misc/sign/wbi.md)

---

关于视频流会员鉴权：

- 获取 720P 及以上清晰度视频时需要登录（Cookie）

- 获取高帧率（1080P60）/ 高码率（1080P+）/ HDR / 杜比视界 视频时需要有大会员的账号登录（Cookie）

- 获取会员专属视频时需要登录（Cookie）

- 部分特殊视频（如平台宣传片、活动视频等）不需要大会员账号认证

---

获取 url 有效时间为 120min，超时失效需要重新获取

~~部分视频会有分段，需要特别注意~~（FLV 格式已下线，不可能出现分段

若视频有分P，仅为单P视频的 url，换P则需传参对应 CID 重新获取

**url参数：**

| 参数名 | 类型 | 内容             | 必要性       | 备注                                                         |
| ------ | ---- | ---------------- | ------------ | ------------------------------------------------------------ |
| avid   | num  | 稿件 avid        | 必要（可选） | avid 与 bvid 任选一个                                        |
| bvid   | str  | 稿件 bvid        | 必要（可选） | avid 与 bvid 任选一个                                        |
| cid    | num  | 视频 cid         | 必要         |                                                              |
| gaia_source   | str  | view-card<br />pre-load  | 必要(非必要)         | 有Cookie(SESSDATA)时无需此参数<br />暂未找到两个内容值区别                                      |
| isGaiaAvoided| bool| true/false| 非必要|未知作用                                                            |
| qn     | num  | 视频清晰度选择   | 非必要       | 未登录默认 32（480P），登录后默认 64（720P）<br />含义见 [上表](#qn视频清晰度标识)<br />**DASH 格式时无效** |
| fnval  | num  | 视频流格式标识 | 非必要       | 默认值为`1`（MP4 格式）<br />含义见 [上表](#fnval视频流格式标识) |
| fnver  | num  | 0                | 非必要       |                                                       |
| fourk  | num  | 是否允许 4K 视频 | 非必要       | 画质最高 1080P：0（默认）<br />画质最高 4K：1       |
| session  | str  |    | 非必要       | 从视频播放页的 HTML 中设置 window.\_\_playinfo\_\_ 处获取，或者通过 buvid3 +  当前UNIX毫秒级时间戳 经过md5获取     |
| otype  | str  |    | 非必要       | 固定为`json`           |
| type  | str  |    | 非必要       | 目前为空             |
| platform | str |    | 非必要 | pc：web播放（默认值，视频流存在 referer鉴权）<br />html5：移动端 HTML5 播放（仅支持 MP4 格式，无 referer 鉴权可以直接使用`video`标签播放） |
| high_quality | num | 是否高画质 | 非必要 | platform=html5时，此值为1可使画质为1080p |
| try_look | num | 未登录高画质 | 非必要 | 为 `1` 时可以不登录拉到 `64` 和 `80` 清晰度 |
| cur_language | str | 使用AI原声翻译 | 非必要 | 可以填写`en`、`ja`等参数。<br/>不填写时，默认拉取原音频。填写后，音频链接替换为指定的AI语音 |

**json回复：**

根对象：

| 字段    | 类型                          | 内容     | 备注                                           |
| ------- | ----------------------------- | -------- | ---------------------------------------------- |
| code    | num                           | 返回值   | 0：成功 <br />-400：请求错误<br />-404：无视频 |
| message | str                           | 错误信息 | 默认为0                                        |
| ttl     | num                           | 1        |                                                |
| data    | 有效时：obj<br />无效时：null | 数据本体 |                                                |

`data`对象：

| 字段               | 类型  | 内容                                            | 备注                                            |
| ------------------ | ----- | ----------------------------------------------- | ----------------------------------------------- |
| v_voucher          | str   | (?)                                            | 需要参数`gaia_source`                     |
| from               | str   | `local`？                                       |                                                 |
| result             | str   | `suee`？                                        |                                                 |
| message            | str   | 空？                                            |                                                 |
| quality            | num   | 清晰度标识                                      | 含义见 [上表](#qn视频清晰度标识)                |
| format             | str   | 视频格式                                        | `mp4`/`flv`                                     |
| timelength         | num   | 视频长度                                        | 单位为毫秒<br />不同分辨率 / 格式可能有略微差异 |
| accept_format      | str   | 支持的全部格式                                  | 每项用`,`分隔                                   |
| accept_description | array | 支持的清晰度列表（文字说明）                    |                                                 |
| accept_quality     | array | 支持的清晰度列表（代码）                        | 含义见 [上表](#qn视频清晰度标识)                |
| video_codecid      | num   | 默认选择视频流的编码id                          | 含义见 [上表](#视频编码代码)                    |
| seek_param         | str   | `start`？                                       |                                                 |
| seek_type          | str   | `offset`（DASH / FLV）？<br/> `second`（MP4）？ |                                                 |
| durl               | array | 视频分段流信息                                  | **注：仅 FLV / MP4 格式存在此字段**             |
| dash               | obj   | DASH 流信息                                     | **注：仅 DASH 格式存在此字段**                  |
| support_formats    | array | 支持格式的详细信息                              |                                                 |
| high_format        | null  | （？）                                          |                                                 |
| last_play_time     | num   | 上次播放进度                                    | 毫秒值                                          |
| last_play_cid      | num   | 上次播放分P的 cid                               |                                                 |
| cur_language       | str   | 当前的AI原声翻译语言                           | `en`、`ja`等，未使用AI原声翻译时，此项为空字符串 |
| language           | obj   | 视频的AI原声翻译信息                           | 视频不支持时，不存在此字段                     |

`data`中的`accept_description`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | str  | 分辨率名称1     |      |
| n    | str  | 分辨率名称(n+1) |      |
| ……   | str  | ……              |      |

`data`中的`accept_quality`数组：

| 项   | 类型 | 内容            | 备注                             |
| ---- | ---- | --------------- | -------------------------------- |
| 0    | num  | 分辨率代码1     | 含义见 [上表](#qn视频清晰度标识) |
| n    | num  | 分辨率代码(n+1) |                                  |
| ……   | num  | ……              |                                  |

`data`中的`support_formats`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | obj  | 播放格式详细信息1     |      |
| n    | obj  | 播放格式详细信息(n+1) |      |
| ……   | obj  | ……              |      |

`support_formats`数组中的对象：

| 字段       | 类型   | 内容         | 备注                               |
| ---------- | ------ | ------------ | ---------------------------------- |
| quality      | num    | 视频清晰度代码 | 含义见 [上表](#qn视频清晰度标识) |
| format     | str    | 视频格式     |                          |
| new_description       | str    | 格式描述     |                          |
| display_desc      | str    | 格式描述           |                        |
| superscript      | str    | (?)           |                        |
| codecs        | array    | 可用编码格式列表    |  |

`support_formats`中的`codecs`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | str  |  例：av01.0.13M.08.0.110.01.01.01.0    |  使用AV1编码    |
| 1    | str  | 例子：avc1.640034  |   使用AVC编码   |
| 2    | str  | 例子：hev1.1.6.L153.90 |   使用HEVC编码   |

`data`中的`language`对象：

| 字段          | 类型    | 内容                      | 备注 |
| ------------- | ------- | -------------------------- | ---- |
| support       | boolean | 视频是否支持AI原声？     |      |
| items         | array   | 支持的原声翻译列表       |      |
| open_toast    | str     | 启用AI原声翻译时的提示？ |      |
| close_toast   | str     | 关闭AI原声翻译时的提示？ |      |
| default_title | str     | （？）                    |      |
| bubble        | obj     | （？）                    |      |

`language`中的`items`数组：

| 项  | 类型 | 内容            | 备注 |
| --- | ---- | ---------------- | ---- |
| 0   | obj  | AI原声信息1     |      |
| n   | obj  | AI原声信息(n+1) |      |
| ... | obj  | ...              |      |

`items`数组中的对象：

| 字段                     | 类型    | 内容               | 备注                    |
| ------------------------ | ------- | ------------------- | ----------------------- |
| lang                     | str     | AI原声翻译的语言值 | 可用于cur_language参数 |
| title                    | str     | 语言显示文本       | 如：`English`           |
| subtitle_lang            | str     | （？）              |                         |
| video_detext             | boolean | （？）              |                         |
| video_mouth_shape_change | boolean | （？）              |                         |
| production_type          | num     | 产品类型？         |                         |

由于 MP4 / ~~FLV~~ 与 DASH 格式的返回结构不同，以下内容需要分类讨论`durl`与`dash`字段的内容


---

### FLV/MP4格式

`data`中的`durl`数组：

| 项   | 类型 | 内容              | 备注                      |
| ---- | ---- | ----------------- | ------------------------- |
| 0    | obj  | 视频分段 1 信息   | **目前由于 FLV 格式已经下线，不会存在分段现象，故无需关心** |
| n    | obj  | 视频分段 (n+1) 信息 |                           |
| ……   | obj  | ……                |                           |

`durl`数组中的对象：

| 字段       | 类型   | 内容         | 备注                               |
| ---------- | ------ | ------------ | ---------------------------------- |
| order      | num    | 视频分段序号 | 某些视频会分为多个片段（从1顺序增长）     |
| length     | num    | 视频长度     | 单位为毫秒                         |
| size       | num    | 视频大小     | 单位为 Byte                        |
| ahead      | str    | （？）        |                        |
| vhead      | str    | （？）        |                        |
| url        | str    | 默认流 URL | **注意 unicode 转义符**<br />有效时间为120min |
| backup_url | array | 备用视频流   |                                    |

`durl`数组中的对象中的`backup_url`数组：

| 项   | 类型 | 内容             | 备注                                          |
| ---- | ---- | ---------------- | --------------------------------------------- |
| 0    | str  | 备用流 URL 1     | **注意 unicode 转义符**<br />有效时间为120min |
| n    | str  | 备用流 URL (n+1) |                                               |
| ……   | str  | ……               |                                               |

**示例：**

**视频无分段时：**

获取视频`av99999999`/`BV1y7411Q7Eq`中的 1P（cid=`171776208`）的视频流 URL，清晰度为 1080P+，使用 FLV 方式获取

avid方式：

```shell
curl -G 'https://api.bilibili.com/x/player/playurl' \
    --data-urlencode 'avid=99999999' \
    --data-urlencode 'cid=171776208' \
    --data-urlencode 'qn=112' \
    --data-urlencode 'fnval=0' \
    --data-urlencode 'fnver=0' \
    --data-urlencode 'fourk=1' \
    -b 'SESSDATA=xxx'
```

 bvid方式：

```shell
curl -G 'https://api.bilibili.com/x/player/playurl' \
    --data-urlencode 'bvid=BV1y7411Q7Eq' \
    --data-urlencode 'cid=171776208' \
    --data-urlencode 'qn=112' \
    --data-urlencode 'fnval=0' \
    --data-urlencode 'fnver=0' \
    --data-urlencode 'fourk=1' \
    -b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "from": "local",
    "result": "suee",
    "message": "",
    "quality": 64,
    "format": "flv720",
    "timelength": 283801,
    "accept_format": "hdflv2,flv,flv720,flv480,mp4",
    "accept_description": [
      "高清 1080P+",
      "高清 1080P",
      "高清 720P",
      "清晰 480P",
      "流畅 360P"
    ],
    "accept_quality": [
      112,
      80,
      64,
      32,
      16
    ],
    "video_codecid": 7,
    "seek_param": "start",
    "seek_type": "offset",
    "durl": [
      {
        "order": 1,
        "length": 283801,
        "size": 70486426,
        "ahead": "",
        "vhead": "",
        "url": "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-64.flv?e=ig8euxZM2rNcNbNMnwdVhwdlhbK3hwdVhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1662808778&gen=playurlv2&os=cosbv&oi=3719461929&trid=31dc1934e77141bfbdf5ae88aca0b29fu&mid=0&platform=pc&upsig=a4d5f1713e1ba313041d034a958c2414&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=0,3&agrr=1&bw=249068&logo=80000000",
        "backup_url": [
          "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-64.flv?e=ig8euxZM2rNcNbNMnwdVhwdlhbK3hwdVhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1662808778&gen=playurlv2&os=cosbv&oi=3719461929&trid=31dc1934e77141bfbdf5ae88aca0b29fu&mid=0&platform=pc&upsig=a4d5f1713e1ba313041d034a958c2414&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&agrr=1&bw=249068&logo=40000000",
          "https://upos-sz-mirrorcosb.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-64.flv?e=ig8euxZM2rNcNbNMnwdVhwdlhbK3hwdVhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1662808778&gen=playurlv2&os=cosbbv&oi=3719461929&trid=31dc1934e77141bfbdf5ae88aca0b29fu&mid=0&platform=pc&upsig=7b8a6924948864944815ec0748cc108f&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&agrr=1&bw=249068&logo=40000000"
        ]
      }
    ],
    "support_formats": [
      {
        "quality": 112,
        "format": "hdflv2",
        "new_description": "1080P 高码率",
        "display_desc": "1080P",
        "superscript": "高码率",
        "codecs": null
      },
      {
        "quality": 80,
        "format": "flv",
        "new_description": "1080P 高清",
        "display_desc": "1080P",
        "superscript": "",
        "codecs": null
      },
      {
        "quality": 64,
        "format": "flv720",
        "new_description": "720P 高清",
        "display_desc": "720P",
        "superscript": "",
        "codecs": null
      },
      {
        "quality": 32,
        "format": "flv480",
        "new_description": "480P 清晰",
        "display_desc": "480P",
        "superscript": "",
        "codecs": null
      },
      {
        "quality": 16,
        "format": "mp4",
        "new_description": "360P 流畅",
        "display_desc": "360P",
        "superscript": "",
        "codecs": null
      }
    ],
    "high_format": null,
    "last_play_time": 0,
    "last_play_cid": 0
  }
}
```

</details>

**视频有分段时：**

以下内容无参考价值，仅做历史保存

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "from": "local",
        "result": "suee",
        "message": "",
        "quality": 16,
        "format": "flv360",
        "timelength": 1437918,
        "accept_format": "flv,flv720,flv480,flv360",
        "accept_description": [
            "高清 1080P",
            "高清 720P",
            "清晰 480P",
            "流畅 360P"
        ],
        "accept_quality": [
            80,
            64,
            32,
            16
        ],
        "video_codecid": 7,
        "seek_param": "start",
        "seek_type": "offset",
        "durl": [
            {
                "order": 1,
                "length": 364417,
                "size": 23018310,
                "ahead": "",
                "vhead": "",
                "url": "http://upos-sz-mirrorhw.bilivideo.com/upgcxcode/98/24/872498/872498-1-15.flv?e=ig8euxZM2rNcNbRB7zUVhoM17WuBhwdEto8g5X10ugNcXBlqNxHxNEVE5XREto8KqJZHUa6m5J0SqE85tZvEuENvNo8g2ENvNo8i8o859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859r1qXg8gNEVE5XREto8z5JZC2X2gkX5L5F1eTX1jkXlsTXHeux_f2o859IB_&uipk=5&nbs=1&deadline=1589874109&gen=playurl&os=hwbv&oi=1965551630&trid=ceac015d41e04a7b90ec972db710524fu&platform=pc&upsig=f99db2dc9b8c65c245515b29b9ca8b16&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&logo=80000000",
                "backup_url": [
                    "http://upos-sz-mirrorks3c.bilivideo.com/upgcxcode/98/24/872498/872498-1-15.flv?e=ig8euxZM2rNcNbRB7zUVhoM17WuBhwdEto8g5X10ugNcXBlqNxHxNEVE5XREto8KqJZHUa6m5J0SqE85tZvEuENvNo8g2ENvNo8i8o859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859r1qXg8gNEVE5XREto8z5JZC2X2gkX5L5F1eTX1jkXlsTXHeux_f2o859IB_&uipk=5&nbs=1&deadline=1589874109&gen=playurl&os=ks3cbv&oi=1965551630&trid=ceac015d41e04a7b90ec972db710524fu&platform=pc&upsig=74d0d62697364346f88d9c39430ce23c&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&logo=40000000"
                ]
            },
            {
                "order": 2,
                "length": 364395,
                "size": 23694756,
                "ahead": "",
                "vhead": "",
                "url": "http://upos-sz-mirrorcos.bilivideo.com/upgcxcode/98/24/872498/872498-2-15.flv?e=ig8euxZM2rNcNbRjhbUVhoM17bNBhwdEto8g5X10ugNcXBlqNxHxNEVE5XREto8KqJZHUa6m5J0SqE85tZvEuENvNo8g2ENvNo8i8o859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859r1qXg8gNEVE5XREto8z5JZC2X2gkX5L5F1eTX1jkXlsTXHeux_f2o859IB_&uipk=5&nbs=1&deadline=1589874109&gen=playurl&os=cosbv&oi=1965551630&trid=ceac015d41e04a7b90ec972db710524fu&platform=pc&upsig=308c87c55f3325bdaac2a3e8632948ee&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&logo=80000000",
                "backup_url": [
                    "http://upos-sz-mirrorks3c.bilivideo.com/upgcxcode/98/24/872498/872498-2-15.flv?e=ig8euxZM2rNcNbRjhbUVhoM17bNBhwdEto8g5X10ugNcXBlqNxHxNEVE5XREto8KqJZHUa6m5J0SqE85tZvEuENvNo8g2ENvNo8i8o859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859r1qXg8gNEVE5XREto8z5JZC2X2gkX5L5F1eTX1jkXlsTXHeux_f2o859IB_&uipk=5&nbs=1&deadline=1589874109&gen=playurl&os=ks3cbv&oi=1965551630&trid=ceac015d41e04a7b90ec972db710524fu&platform=pc&upsig=eb8f043e0f36f82ab9c62fd002143438&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&logo=40000000"
                ]
            },
            {
                "order": 3,
                "length": 352333,
                "size": 22835734,
                "ahead": "",
                "vhead": "",
                "url": "http://upos-sz-mirrorhw.bilivideo.com/upgcxcode/98/24/872498/872498-3-15.flv?e=ig8euxZM2rNcNbRjhwdVhoM17bdVhwdEto8g5X10ugNcXBlqNxHxNEVE5XREto8KqJZHUa6m5J0SqE85tZvEuENvNo8g2ENvNo8i8o859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859r1qXg8gNEVE5XREto8z5JZC2X2gkX5L5F1eTX1jkXlsTXHeux_f2o859IB_&uipk=5&nbs=1&deadline=1589874109&gen=playurl&os=hwbv&oi=1965551630&trid=ceac015d41e04a7b90ec972db710524fu&platform=pc&upsig=2685b7649f4bb6eb90f986f125432d78&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&logo=80000000",
                "backup_url": [
                    "http://upos-sz-mirrorks3c.bilivideo.com/upgcxcode/98/24/872498/872498-3-15.flv?e=ig8euxZM2rNcNbRjhwdVhoM17bdVhwdEto8g5X10ugNcXBlqNxHxNEVE5XREto8KqJZHUa6m5J0SqE85tZvEuENvNo8g2ENvNo8i8o859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859r1qXg8gNEVE5XREto8z5JZC2X2gkX5L5F1eTX1jkXlsTXHeux_f2o859IB_&uipk=5&nbs=1&deadline=1589874109&gen=playurl&os=ks3cbv&oi=1965551630&trid=ceac015d41e04a7b90ec972db710524fu&platform=pc&upsig=922543bfb26184f901187bf9c39c69b2&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&logo=40000000"
                ]
            },
            {
                "order": 4,
                "length": 356773,
                "size": 23466279,
                "ahead": "",
                "vhead": "",
                "url": "http://upos-sz-mirrorkodo.bilivideo.com/upgcxcode/98/24/872498/872498-4-15.flv?e=ig8euxZM2rNcNbRjhbUVhoM17bNBhwdEto8g5X10ugNcXBlqNxHxNEVE5XREto8KqJZHUa6m5J0SqE85tZvEuENvNo8g2ENvNo8i8o859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859r1qXg8gNEVE5XREto8z5JZC2X2gkX5L5F1eTX1jkXlsTXHeux_f2o859IB_&uipk=5&nbs=1&deadline=1589874109&gen=playurl&os=kodobv&oi=1965551630&trid=ceac015d41e04a7b90ec972db710524fu&platform=pc&upsig=9d29707faf012797ef2b6de21523fcf2&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&logo=80000000",
                "backup_url": [
                    "http://upos-sz-mirrorks3c.bilivideo.com/upgcxcode/98/24/872498/872498-4-15.flv?e=ig8euxZM2rNcNbRjhbUVhoM17bNBhwdEto8g5X10ugNcXBlqNxHxNEVE5XREto8KqJZHUa6m5J0SqE85tZvEuENvNo8g2ENvNo8i8o859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859r1qXg8gNEVE5XREto8z5JZC2X2gkX5L5F1eTX1jkXlsTXHeux_f2o859IB_&uipk=5&nbs=1&deadline=1589874109&gen=playurl&os=ks3cbv&oi=1965551630&trid=ceac015d41e04a7b90ec972db710524fu&platform=pc&upsig=9ad4524d31c8d9695ae07b400b73ed29&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&logo=40000000"
                ]
            }
        ]
    }
}
```

</details>

---

### DASH格式

`data`中的`dash`对象：

| 字段            | 类型  | 内容       | 备注         |
| --------------- | ----- | ---------- | ------------ |
| duration        | num   | 视频长度        | 秒值 |
| minBufferTime   | num   | 1.5？       |  |
| min_buffer_time | num   | 1.5？       |  |
| video           | array | 视频流信息 |              |
| audio           | array | 伴音流信息 | 当视频没有音轨时，此项为 null |
| dolby           | obj | 杜比全景声伴音信息 |              |
| flac           | obj | 无损音轨伴音信息 | 当视频没有无损音轨时，此项为 null |

`dash`中的`video`数组：

| 项   | 类型 | 内容                   | 备注 |
| ---- | ---- | ---------------------- | ---- |
| 0    | obj  | 视频码流 1 | 同一清晰度可拥有 H.264 / H.265 / AV1 多种码流<br />**HDR 仅支持 H.265** |
| n   | obj  | 视频码流（n+1） |   |
| ……   | obj  | ……    |      |

`dash`中的`audio`数组：

| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| 0    | obj  | 清晰度1       |      |
| n    | obj  | 清晰度（n+1） |      |
| ……   | obj  | ……            |      |

`video`及`audio`数组中的对象：

| 字段           | 类型  | 内容                  | 备注                                            |
| -------------- | ----- | --------------------- | ----------------------------------------------- |
| id             | num   | 音视频清晰度代码      | 参考上表<br />[qn视频清晰度标识](#qn视频清晰度标识)<br />[视频伴音音质代码](#视频伴音音质代码) |
| baseUrl        | str   | 默认流 URL | **注意 unicode 转义符**<br />有效时间为 120min |
| base_url       | str   | **同上**          |                                                 |
| backupUrl      | array | 备用流 URL |                                                 |
| backup_url     | array | **同上**              |                                                 |
| bandwidth      | num   | 所需最低带宽 | 单位为 Byte |
| mimeType       | str   | 格式 mimetype 类型 |                                                 |
| mime_type      | str   | **同上**              |                                                 |
| codecs         | str   | 编码/音频类型         | eg：`avc1.640032` |
| width          | num   | 视频宽度              | 单位为像素<br />**仅视频流存在该字段**        |
| height         | num   | 视频高度              | 单位为像素<br />**仅视频流存在该字段**         |
| frameRate      | str   | 视频帧率              | **仅视频流存在该字段**                         |
| frame_rate     | str   | **同上**              |                                                 |
| sar            | str   | Sample Aspect Ratio（单个像素的宽高比） | 音频流该值恒为空 |
| startWithSap   | num   | Stream Access Point（流媒体访问位点） | 音频流该值恒为空                     |
| start_with_sap | num   | **同上**              |  |
| SegmentBase    | obj   | 见下表                | url 对应 m4s 文件中，头部的位置<br />音频流该值恒为空     |
| segment_base   | obj   | **同上**              |  |
| codecid        | num   | 码流编码标识代码 | 含义见 [上表](#视频编码代码)<br />音频流该值恒为`0` |

`video`数组中的对象中的`backup_url`数组：

| 项   | 类型 | 内容             | 备注                                          |
| ---- | ---- | ---------------- | --------------------------------------------- |
| 0    | str  | 备用流 URL 1     | **注意 unicode 转义符**<br />有效时间为120min |
| n    | str  | 备用流 URL (n+1) |                                               |
| ……   | str  | ……               |                                               |

`video`数组中的对象中的`SegmentBase`对象：

| 字段           | 类型 | 内容                         | 备注                                                         |
| -------------- | ---- | ---------------------------- | ------------------------------------------------------------ |
| initialization | str  | `${init_first}-${init_last}` | eg：`0-821`<br />ftyp (file type) box 加上 moov box 在 m4s 文件中的范围（单位为 bytes）<br />如 0-821 表示开头 820 个字节 |
| index_range    | str  | `${sidx_first}-${sidx_last}` | eg：`822-1309`<br />sidx (segment index) box 在 m4s 文件中的范围（单位为 bytes）<br />sidx 的核心是一个数组，记录了各关键帧的时间戳及其在文件中的位置，<br />其作用是索引 (拖进度条) |

> 常规 MP4 文件的索引信息放在 moov box 中，其中包含每一帧 (不止是关键帧) 的一些信息。在 DASH 方式下，关键帧信息移到了 sidx box 里，其他的则分散到了各个 moof (movie fragment) box 中。

对这里的文件结构感兴趣的，可以参考标准文档 [ISO/IEC 14496-12](https://www.iso.org/standard/83102.html)，如果不想那么深入的话可以百度「[MP4 文件结构](https://baike.baidu.com/item/mp4/9218018)」

`dash`中的`dolby`对象：

此项为”杜比视界“视频独有

| 字段           | 类型 | 内容                                          | 备注                                                         |
| -------------- | ---- | --------------------------------------------- | ------------------------------------------------------------ |
| type | num  | 杜比音效类型 | 1：普通杜比音效<br />2：全景杜比音效 |
| audio    | array  | 杜比伴音流列表 |  |

`dolby`对象中的`audio`数组：

| 项   | 类型 | 内容                     | 备注                                            |
| ---- | ---- | ------------------------ | ----------------------------------------------- |
| 0    | obj  | 杜比伴音流信息 | 同上文 DASH 流中`video`及`audio`数组中的对象 |

`dash`中的`flac`对象：

| 项   | 类型 | 内容                     | 备注                                            |
| ---- | ---- | ------------------------ | ----------------------------------------------- |
| display    | bool  | 是否在播放器显示切换Hi-Res无损音轨按钮     |  |
| audio    | obj  | 音频流信息     | 同上文 DASH 流中`video`及`audio`数组中的对象 |

**示例：**

获取视频`av969628065`/`BV1rp4y1e745`中的 1P（cid=`244954665`）的视频流 URL，使用 DASH 方式获取

avid 方式：

```shell
curl -G 'https://api.bilibili.com/x/player/playurl' \
    --data-urlencode 'avid=969628065' \
    --data-urlencode 'cid=244954665' \
    --data-urlencode 'fnval=4048' \ # 4048 为所有 dash 选项或运算的结果
    --data-urlencode 'fnver=0' \
    --data-urlencode 'fourk=1' \
    -b 'SESSDATA=xxx'
```

 bvid 方式：

```shell
curl -G 'https://api.bilibili.com/x/player/playurl' \
    --data-urlencode 'bvid=BV1rp4y1e745' \
    --data-urlencode 'cid=244954665' \
    --data-urlencode 'fnval=4048' \
    --data-urlencode 'fnver=0' \
    --data-urlencode 'fourk=1' \
    -b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "from": "local",
        "result": "suee",
        "message": "",
        "quality": 64,
        "format": "flv720",
        "timelength": 346495,
        "accept_format": "hdflv2,hdflv2,flv_p60,flv,flv720,flv480,mp4",
        "accept_description": [
            "真彩 HDR",
            "超清 4K",
            "高清 1080P60",
            "高清 1080P",
            "高清 720P",
            "清晰 480P",
            "流畅 360P"
        ],
        "accept_quality": [
            125,
            120,
            116,
            80,
            64,
            32,
            16
        ],
        "video_codecid": 7,
        "seek_param": "start",
        "seek_type": "offset",
        "dash": {
            "duration": 347,
            "minBufferTime": 1.5,
            "min_buffer_time": 1.5,
            "video": [
                {
                    "id": 80,
                    "baseUrl": "https://xy113x200x108x47xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-100113.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026og=hw\u0026oi=3028829496\u0026tag=\u0026nbs=1\u0026gen=playurlv3\u0026uipk=5\u0026os=mcdn\u0026platform=pc\u0026trid=0000cc6424a6fb564074a7704d5b300496eu\u0026mid=59442895\u0026deadline=1745411269\u0026upsig=71821c3a1f0d596b8a0f79861695de67\u0026uparams=e,og,oi,tag,nbs,gen,uipk,os,platform,trid,mid,deadline\u0026mcdnid=50017754\u0026bvc=vod\u0026nettype=0\u0026bw=773719\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026orderid=0,3",
                    "base_url": "https://xy113x200x108x47xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-100113.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026og=hw\u0026oi=3028829496\u0026tag=\u0026nbs=1\u0026gen=playurlv3\u0026uipk=5\u0026os=mcdn\u0026platform=pc\u0026trid=0000cc6424a6fb564074a7704d5b300496eu\u0026mid=59442895\u0026deadline=1745411269\u0026upsig=71821c3a1f0d596b8a0f79861695de67\u0026uparams=e,og,oi,tag,nbs,gen,uipk,os,platform,trid,mid,deadline\u0026mcdnid=50017754\u0026bvc=vod\u0026nettype=0\u0026bw=773719\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026orderid=0,3",
                    "backupUrl": [
                        "https://upos-sz-mirror08c.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-100113.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026platform=pc\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026oi=3028829496\u0026mid=59442895\u0026uipk=5\u0026gen=playurlv3\u0026os=08cbv\u0026og=hw\u0026deadline=1745411269\u0026tag=\u0026nbs=1\u0026upsig=585675af7dc762a4d21572f939196248\u0026uparams=e,platform,trid,oi,mid,uipk,gen,os,og,deadline,tag,nbs\u0026bvc=vod\u0026nettype=0\u0026bw=773719\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026orderid=1,3",
                        "https://upos-sz-mirror08c.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-100113.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026oi=3028829496\u0026nbs=1\u0026uipk=5\u0026gen=playurlv3\u0026platform=pc\u0026mid=59442895\u0026deadline=1745411269\u0026tag=\u0026os=08cbv\u0026og=hw\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026upsig=9fc6a3e3e0eaf3847c5c0f1c32047c09\u0026uparams=e,oi,nbs,uipk,gen,platform,mid,deadline,tag,os,og,trid\u0026bvc=vod\u0026nettype=0\u0026bw=773719\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=2,3"
                    ],
                    "backup_url": [
                        "https://upos-sz-mirror08c.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-100113.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026platform=pc\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026oi=3028829496\u0026mid=59442895\u0026uipk=5\u0026gen=playurlv3\u0026os=08cbv\u0026og=hw\u0026deadline=1745411269\u0026tag=\u0026nbs=1\u0026upsig=585675af7dc762a4d21572f939196248\u0026uparams=e,platform,trid,oi,mid,uipk,gen,os,og,deadline,tag,nbs\u0026bvc=vod\u0026nettype=0\u0026bw=773719\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026orderid=1,3",
                        "https://upos-sz-mirror08c.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-100113.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026oi=3028829496\u0026nbs=1\u0026uipk=5\u0026gen=playurlv3\u0026platform=pc\u0026mid=59442895\u0026deadline=1745411269\u0026tag=\u0026os=08cbv\u0026og=hw\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026upsig=9fc6a3e3e0eaf3847c5c0f1c32047c09\u0026uparams=e,oi,nbs,uipk,gen,platform,mid,deadline,tag,os,og,trid\u0026bvc=vod\u0026nettype=0\u0026bw=773719\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=2,3"
                    ],
                    "bandwidth": 772828,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "hev1.1.6.L150.90",
                    "width": 1920,
                    "height": 960,
                    "frameRate": "30.303",
                    "frame_rate": "30.303",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-1159",
                        "indexRange": "1160-2019"
                    },
                    "segment_base": {
                        "initialization": "0-1159",
                        "index_range": "1160-2019"
                    },
                    "codecid": 12
                },
                {
                    "id": 80,
                    "baseUrl": "https://xy113x200x108x47xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_nb3-1-30080.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026platform=pc\u0026deadline=1745411269\u0026uipk=5\u0026og=cos\u0026gen=playurlv3\u0026os=mcdn\u0026trid=0000cc6424a6fb564074a7704d5b300496eu\u0026oi=3028829496\u0026mid=59442895\u0026tag=\u0026nbs=1\u0026upsig=134e6b8516a05db7ef97a18b68b94cb5\u0026uparams=e,platform,deadline,uipk,og,gen,os,trid,oi,mid,tag,nbs\u0026mcdnid=50017754\u0026bvc=vod\u0026nettype=0\u0026bw=1918964\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026agrr=1\u0026orderid=0,3",
                    "base_url": "https://xy113x200x108x47xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_nb3-1-30080.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026platform=pc\u0026deadline=1745411269\u0026uipk=5\u0026og=cos\u0026gen=playurlv3\u0026os=mcdn\u0026trid=0000cc6424a6fb564074a7704d5b300496eu\u0026oi=3028829496\u0026mid=59442895\u0026tag=\u0026nbs=1\u0026upsig=134e6b8516a05db7ef97a18b68b94cb5\u0026uparams=e,platform,deadline,uipk,og,gen,os,trid,oi,mid,tag,nbs\u0026mcdnid=50017754\u0026bvc=vod\u0026nettype=0\u0026bw=1918964\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026agrr=1\u0026orderid=0,3",
                    "backupUrl": [
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/65/46/244954665/244954665_nb3-1-30080.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026platform=pc\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026oi=3028829496\u0026gen=playurlv3\u0026os=cosbv\u0026og=cos\u0026deadline=1745411269\u0026uipk=5\u0026nbs=1\u0026mid=59442895\u0026tag=\u0026upsig=d3f4bbcd7c490effdfdf0b9f8375f9a2\u0026uparams=e,platform,trid,oi,gen,os,og,deadline,uipk,nbs,mid,tag\u0026bvc=vod\u0026nettype=0\u0026bw=1918964\u0026dl=0\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026orderid=1,3",
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/65/46/244954665/244954665_nb3-1-30080.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026platform=pc\u0026gen=playurlv3\u0026os=cosbv\u0026mid=59442895\u0026tag=\u0026nbs=1\u0026uipk=5\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026og=cos\u0026oi=3028829496\u0026deadline=1745411269\u0026upsig=584b3a331daefde16b118f612d43c1c6\u0026uparams=e,platform,gen,os,mid,tag,nbs,uipk,trid,og,oi,deadline\u0026bvc=vod\u0026nettype=0\u0026bw=1918964\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=2,3"
                    ],
                    "backup_url": [
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/65/46/244954665/244954665_nb3-1-30080.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026platform=pc\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026oi=3028829496\u0026gen=playurlv3\u0026os=cosbv\u0026og=cos\u0026deadline=1745411269\u0026uipk=5\u0026nbs=1\u0026mid=59442895\u0026tag=\u0026upsig=d3f4bbcd7c490effdfdf0b9f8375f9a2\u0026uparams=e,platform,trid,oi,gen,os,og,deadline,uipk,nbs,mid,tag\u0026bvc=vod\u0026nettype=0\u0026bw=1918964\u0026dl=0\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026orderid=1,3",
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/65/46/244954665/244954665_nb3-1-30080.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026platform=pc\u0026gen=playurlv3\u0026os=cosbv\u0026mid=59442895\u0026tag=\u0026nbs=1\u0026uipk=5\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026og=cos\u0026oi=3028829496\u0026deadline=1745411269\u0026upsig=584b3a331daefde16b118f612d43c1c6\u0026uparams=e,platform,gen,os,mid,tag,nbs,uipk,trid,og,oi,deadline\u0026bvc=vod\u0026nettype=0\u0026bw=1918964\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=2,3"
                    ],
                    "bandwidth": 1916748,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "avc1.640032",
                    "width": 1920,
                    "height": 960,
                    "frameRate": "29.412",
                    "frame_rate": "29.412",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-994",
                        "indexRange": "995-1854"
                    },
                    "segment_base": {
                        "initialization": "0-994",
                        "index_range": "995-1854"
                    },
                    "codecid": 7
                },
                {
                    "id": 64,
                    "baseUrl": "https://xy113x200x108x47xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-100112.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026deadline=1745411269\u0026gen=playurlv3\u0026os=mcdn\u0026og=cos\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026trid=0000cc6424a6fb564074a7704d5b300496eu\u0026oi=3028829496\u0026mid=59442895\u0026tag=\u0026upsig=fcba1f000ead402f2ab2748df6e8d127\u0026uparams=e,deadline,gen,os,og,nbs,uipk,platform,trid,oi,mid,tag\u0026mcdnid=50017754\u0026bvc=vod\u0026nettype=0\u0026bw=1238263\u0026dl=0\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026orderid=0,3",
                    "base_url": "https://xy113x200x108x47xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-100112.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026deadline=1745411269\u0026gen=playurlv3\u0026os=mcdn\u0026og=cos\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026trid=0000cc6424a6fb564074a7704d5b300496eu\u0026oi=3028829496\u0026mid=59442895\u0026tag=\u0026upsig=fcba1f000ead402f2ab2748df6e8d127\u0026uparams=e,deadline,gen,os,og,nbs,uipk,platform,trid,oi,mid,tag\u0026mcdnid=50017754\u0026bvc=vod\u0026nettype=0\u0026bw=1238263\u0026dl=0\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026orderid=0,3",
                    "backupUrl": [
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-100112.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026mid=59442895\u0026gen=playurlv3\u0026deadline=1745411269\u0026tag=\u0026og=cos\u0026oi=3028829496\u0026os=cosbv\u0026upsig=9ab39b34d214780c30147af36a862d89\u0026uparams=e,nbs,uipk,platform,trid,mid,gen,deadline,tag,og,oi,os\u0026bvc=vod\u0026nettype=0\u0026bw=1238263\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026orderid=1,3",
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-100112.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026oi=3028829496\u0026nbs=1\u0026uipk=5\u0026tag=\u0026gen=playurlv3\u0026os=cosbv\u0026og=cos\u0026platform=pc\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026mid=59442895\u0026deadline=1745411269\u0026upsig=bea70709fec064c8f384ee24eb5ccd1a\u0026uparams=e,oi,nbs,uipk,tag,gen,os,og,platform,trid,mid,deadline\u0026bvc=vod\u0026nettype=0\u0026bw=1238263\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=2,3"
                    ],
                    "backup_url": [
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-100112.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026mid=59442895\u0026gen=playurlv3\u0026deadline=1745411269\u0026tag=\u0026og=cos\u0026oi=3028829496\u0026os=cosbv\u0026upsig=9ab39b34d214780c30147af36a862d89\u0026uparams=e,nbs,uipk,platform,trid,mid,gen,deadline,tag,og,oi,os\u0026bvc=vod\u0026nettype=0\u0026bw=1238263\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026orderid=1,3",
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-100112.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026oi=3028829496\u0026nbs=1\u0026uipk=5\u0026tag=\u0026gen=playurlv3\u0026os=cosbv\u0026og=cos\u0026platform=pc\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026mid=59442895\u0026deadline=1745411269\u0026upsig=bea70709fec064c8f384ee24eb5ccd1a\u0026uparams=e,oi,nbs,uipk,tag,gen,os,og,platform,trid,mid,deadline\u0026bvc=vod\u0026nettype=0\u0026bw=1238263\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=2,3"
                    ],
                    "bandwidth": 1236894,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "hev1.1.6.L120.90",
                    "width": 1280,
                    "height": 640,
                    "frameRate": "58.824",
                    "frame_rate": "58.824",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-1060",
                        "indexRange": "1061-1920"
                    },
                    "segment_base": {
                        "initialization": "0-1060",
                        "index_range": "1061-1920"
                    },
                    "codecid": 12
                },
                {
                    "id": 64,
                    "baseUrl": "https://xy113x200x108x47xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_nb3-1-30074.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026oi=3028829496\u0026mid=59442895\u0026deadline=1745411269\u0026tag=\u0026gen=playurlv3\u0026platform=pc\u0026trid=0000cc6424a6fb564074a7704d5b300496eu\u0026nbs=1\u0026uipk=5\u0026os=mcdn\u0026og=hw\u0026upsig=0b3aae3388cb52b436e591615c048007\u0026uparams=e,oi,mid,deadline,tag,gen,platform,trid,nbs,uipk,os,og\u0026mcdnid=50017754\u0026bvc=vod\u0026nettype=0\u0026bw=1224265\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=0,3",
                    "base_url": "https://xy113x200x108x47xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_nb3-1-30074.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026oi=3028829496\u0026mid=59442895\u0026deadline=1745411269\u0026tag=\u0026gen=playurlv3\u0026platform=pc\u0026trid=0000cc6424a6fb564074a7704d5b300496eu\u0026nbs=1\u0026uipk=5\u0026os=mcdn\u0026og=hw\u0026upsig=0b3aae3388cb52b436e591615c048007\u0026uparams=e,oi,mid,deadline,tag,gen,platform,trid,nbs,uipk,os,og\u0026mcdnid=50017754\u0026bvc=vod\u0026nettype=0\u0026bw=1224265\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=0,3",
                    "backupUrl": [
                        "https://upos-sz-mirror08c.bilivideo.com/upgcxcode/65/46/244954665/244954665_nb3-1-30074.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026mid=59442895\u0026deadline=1745411269\u0026tag=\u0026nbs=1\u0026gen=playurlv3\u0026uipk=5\u0026platform=pc\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026oi=3028829496\u0026os=08cbv\u0026og=hw\u0026upsig=9dc7c021d5094eab92053fc58e84a48d\u0026uparams=e,mid,deadline,tag,nbs,gen,uipk,platform,trid,oi,os,og\u0026bvc=vod\u0026nettype=0\u0026bw=1224265\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=1,3",
                        "https://upos-sz-mirror08c.bilivideo.com/upgcxcode/65/46/244954665/244954665_nb3-1-30074.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026mid=59442895\u0026deadline=1745411269\u0026tag=\u0026og=hw\u0026oi=3028829496\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026gen=playurlv3\u0026os=08cbv\u0026upsig=d2a75ae893a23a5d90630725d57efe72\u0026uparams=e,trid,mid,deadline,tag,og,oi,nbs,uipk,platform,gen,os\u0026bvc=vod\u0026nettype=0\u0026bw=1224265\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026agrr=1\u0026orderid=2,3"
                    ],
                    "backup_url": [
                        "https://upos-sz-mirror08c.bilivideo.com/upgcxcode/65/46/244954665/244954665_nb3-1-30074.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026mid=59442895\u0026deadline=1745411269\u0026tag=\u0026nbs=1\u0026gen=playurlv3\u0026uipk=5\u0026platform=pc\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026oi=3028829496\u0026os=08cbv\u0026og=hw\u0026upsig=9dc7c021d5094eab92053fc58e84a48d\u0026uparams=e,mid,deadline,tag,nbs,gen,uipk,platform,trid,oi,os,og\u0026bvc=vod\u0026nettype=0\u0026bw=1224265\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=1,3",
                        "https://upos-sz-mirror08c.bilivideo.com/upgcxcode/65/46/244954665/244954665_nb3-1-30074.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026mid=59442895\u0026deadline=1745411269\u0026tag=\u0026og=hw\u0026oi=3028829496\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026gen=playurlv3\u0026os=08cbv\u0026upsig=d2a75ae893a23a5d90630725d57efe72\u0026uparams=e,trid,mid,deadline,tag,og,oi,nbs,uipk,platform,gen,os\u0026bvc=vod\u0026nettype=0\u0026bw=1224265\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026agrr=1\u0026orderid=2,3"
                    ],
                    "bandwidth": 1222911,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "avc1.640020",
                    "width": 1280,
                    "height": 640,
                    "frameRate": "62.500",
                    "frame_rate": "62.500",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-994",
                        "indexRange": "995-1854"
                    },
                    "segment_base": {
                        "initialization": "0-994",
                        "index_range": "995-1854"
                    },
                    "codecid": 7
                },
                {
                    "id": 32,
                    "baseUrl": "https://xy113x200x108x47xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-100110.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026oi=3028829496\u0026uipk=5\u0026og=cos\u0026gen=playurlv3\u0026os=mcdn\u0026platform=pc\u0026trid=0000cc6424a6fb564074a7704d5b300496eu\u0026mid=59442895\u0026deadline=1745411269\u0026tag=\u0026nbs=1\u0026upsig=68bd74999864b4a96ac0dbb730b53612\u0026uparams=e,oi,uipk,og,gen,os,platform,trid,mid,deadline,tag,nbs\u0026mcdnid=50017754\u0026bvc=vod\u0026nettype=0\u0026bw=246761\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026orderid=0,3",
                    "base_url": "https://xy113x200x108x47xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-100110.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026oi=3028829496\u0026uipk=5\u0026og=cos\u0026gen=playurlv3\u0026os=mcdn\u0026platform=pc\u0026trid=0000cc6424a6fb564074a7704d5b300496eu\u0026mid=59442895\u0026deadline=1745411269\u0026tag=\u0026nbs=1\u0026upsig=68bd74999864b4a96ac0dbb730b53612\u0026uparams=e,oi,uipk,og,gen,os,platform,trid,mid,deadline,tag,nbs\u0026mcdnid=50017754\u0026bvc=vod\u0026nettype=0\u0026bw=246761\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026orderid=0,3",
                    "backupUrl": [
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-100110.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026deadline=1745411269\u0026tag=\u0026gen=playurlv3\u0026uipk=5\u0026platform=pc\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026os=cosbv\u0026og=cos\u0026oi=3028829496\u0026mid=59442895\u0026nbs=1\u0026upsig=25c03095d15e721ca7a7e80f9e831319\u0026uparams=e,deadline,tag,gen,uipk,platform,trid,os,og,oi,mid,nbs\u0026bvc=vod\u0026nettype=0\u0026bw=246761\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=1,3",
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-100110.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026uipk=5\u0026os=cosbv\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026oi=3028829496\u0026nbs=1\u0026platform=pc\u0026gen=playurlv3\u0026og=cos\u0026mid=59442895\u0026deadline=1745411269\u0026tag=\u0026upsig=c879e409a7bf7995c12ae5e22cb82b97\u0026uparams=e,uipk,os,trid,oi,nbs,platform,gen,og,mid,deadline,tag\u0026bvc=vod\u0026nettype=0\u0026bw=246761\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026agrr=1\u0026orderid=2,3"
                    ],
                    "backup_url": [
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-100110.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026deadline=1745411269\u0026tag=\u0026gen=playurlv3\u0026uipk=5\u0026platform=pc\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026os=cosbv\u0026og=cos\u0026oi=3028829496\u0026mid=59442895\u0026nbs=1\u0026upsig=25c03095d15e721ca7a7e80f9e831319\u0026uparams=e,deadline,tag,gen,uipk,platform,trid,os,og,oi,mid,nbs\u0026bvc=vod\u0026nettype=0\u0026bw=246761\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=1,3",
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-100110.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026uipk=5\u0026os=cosbv\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026oi=3028829496\u0026nbs=1\u0026platform=pc\u0026gen=playurlv3\u0026og=cos\u0026mid=59442895\u0026deadline=1745411269\u0026tag=\u0026upsig=c879e409a7bf7995c12ae5e22cb82b97\u0026uparams=e,uipk,os,trid,oi,nbs,platform,gen,og,mid,deadline,tag\u0026bvc=vod\u0026nettype=0\u0026bw=246761\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026agrr=1\u0026orderid=2,3"
                    ],
                    "bandwidth": 246476,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "hev1.1.6.L120.90",
                    "width": 854,
                    "height": 426,
                    "frameRate": "30.303",
                    "frame_rate": "30.303",
                    "sar": "426:427",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-1163",
                        "indexRange": "1164-2023"
                    },
                    "segment_base": {
                        "initialization": "0-1163",
                        "index_range": "1164-2023"
                    },
                    "codecid": 12
                },
                {
                    "id": 32,
                    "baseUrl": "https://xy113x200x108x47xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_nb3-1-30032.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026deadline=1745411269\u0026nbs=1\u0026uipk=5\u0026trid=0000cc6424a6fb564074a7704d5b300496eu\u0026mid=59442895\u0026os=mcdn\u0026og=cos\u0026tag=\u0026platform=pc\u0026oi=3028829496\u0026gen=playurlv3\u0026upsig=99b3ff6929d865dafbbdf21301c3889b\u0026uparams=e,deadline,nbs,uipk,trid,mid,os,og,tag,platform,oi,gen\u0026mcdnid=50017754\u0026bvc=vod\u0026nettype=0\u0026bw=629530\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=0,3",
                    "base_url": "https://xy113x200x108x47xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_nb3-1-30032.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026deadline=1745411269\u0026nbs=1\u0026uipk=5\u0026trid=0000cc6424a6fb564074a7704d5b300496eu\u0026mid=59442895\u0026os=mcdn\u0026og=cos\u0026tag=\u0026platform=pc\u0026oi=3028829496\u0026gen=playurlv3\u0026upsig=99b3ff6929d865dafbbdf21301c3889b\u0026uparams=e,deadline,nbs,uipk,trid,mid,os,og,tag,platform,oi,gen\u0026mcdnid=50017754\u0026bvc=vod\u0026nettype=0\u0026bw=629530\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=0,3",
                    "backupUrl": [
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/65/46/244954665/244954665_nb3-1-30032.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026uipk=5\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026deadline=1745411269\u0026gen=playurlv3\u0026nbs=1\u0026platform=pc\u0026oi=3028829496\u0026mid=59442895\u0026tag=\u0026os=cosbv\u0026og=cos\u0026upsig=2e6bf8c0c1fc96618294d917f21192e7\u0026uparams=e,uipk,trid,deadline,gen,nbs,platform,oi,mid,tag,os,og\u0026bvc=vod\u0026nettype=0\u0026bw=629530\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026orderid=1,3",
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/65/46/244954665/244954665_nb3-1-30032.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026platform=pc\u0026mid=59442895\u0026gen=playurlv3\u0026tag=\u0026nbs=1\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026oi=3028829496\u0026os=cosbv\u0026og=cos\u0026deadline=1745411269\u0026uipk=5\u0026upsig=cc07c04afd6ac07b10f46241ef4c5fbc\u0026uparams=e,platform,mid,gen,tag,nbs,trid,oi,os,og,deadline,uipk\u0026bvc=vod\u0026nettype=0\u0026bw=629530\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026agrr=1\u0026orderid=2,3"
                    ],
                    "backup_url": [
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/65/46/244954665/244954665_nb3-1-30032.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026uipk=5\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026deadline=1745411269\u0026gen=playurlv3\u0026nbs=1\u0026platform=pc\u0026oi=3028829496\u0026mid=59442895\u0026tag=\u0026os=cosbv\u0026og=cos\u0026upsig=2e6bf8c0c1fc96618294d917f21192e7\u0026uparams=e,uipk,trid,deadline,gen,nbs,platform,oi,mid,tag,os,og\u0026bvc=vod\u0026nettype=0\u0026bw=629530\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026orderid=1,3",
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/65/46/244954665/244954665_nb3-1-30032.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026platform=pc\u0026mid=59442895\u0026gen=playurlv3\u0026tag=\u0026nbs=1\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026oi=3028829496\u0026os=cosbv\u0026og=cos\u0026deadline=1745411269\u0026uipk=5\u0026upsig=cc07c04afd6ac07b10f46241ef4c5fbc\u0026uparams=e,platform,mid,gen,tag,nbs,trid,oi,os,og,deadline,uipk\u0026bvc=vod\u0026nettype=0\u0026bw=629530\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026agrr=1\u0026orderid=2,3"
                    ],
                    "bandwidth": 628803,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "avc1.64001F",
                    "width": 854,
                    "height": 426,
                    "frameRate": "29.412",
                    "frame_rate": "29.412",
                    "sar": "426:427",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-999",
                        "indexRange": "1000-1859"
                    },
                    "segment_base": {
                        "initialization": "0-999",
                        "index_range": "1000-1859"
                    },
                    "codecid": 7
                },
                {
                    "id": 16,
                    "baseUrl": "https://xy113x200x108x47xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-100109.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026og=hw\u0026oi=3028829496\u0026deadline=1745411269\u0026uipk=5\u0026platform=pc\u0026trid=0000cc6424a6fb564074a7704d5b300496eu\u0026mid=59442895\u0026gen=playurlv3\u0026os=mcdn\u0026tag=\u0026nbs=1\u0026upsig=cdb471486fa3908a2790ba9ef0fd0a44\u0026uparams=e,og,oi,deadline,uipk,platform,trid,mid,gen,os,tag,nbs\u0026mcdnid=50017754\u0026bvc=vod\u0026nettype=0\u0026bw=168083\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026agrr=1\u0026orderid=0,3",
                    "base_url": "https://xy113x200x108x47xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-100109.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026og=hw\u0026oi=3028829496\u0026deadline=1745411269\u0026uipk=5\u0026platform=pc\u0026trid=0000cc6424a6fb564074a7704d5b300496eu\u0026mid=59442895\u0026gen=playurlv3\u0026os=mcdn\u0026tag=\u0026nbs=1\u0026upsig=cdb471486fa3908a2790ba9ef0fd0a44\u0026uparams=e,og,oi,deadline,uipk,platform,trid,mid,gen,os,tag,nbs\u0026mcdnid=50017754\u0026bvc=vod\u0026nettype=0\u0026bw=168083\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026agrr=1\u0026orderid=0,3",
                    "backupUrl": [
                        "https://upos-sz-mirror08c.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-100109.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026tag=\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026mid=59442895\u0026deadline=1745411269\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026gen=playurlv3\u0026os=08cbv\u0026og=hw\u0026oi=3028829496\u0026upsig=340b5f721a89f6dd90ae6153225cf808\u0026uparams=e,tag,trid,mid,deadline,nbs,uipk,platform,gen,os,og,oi\u0026bvc=vod\u0026nettype=0\u0026bw=168083\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=1,3",
                        "https://upos-sz-mirror08c.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-100109.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026oi=3028829496\u0026mid=59442895\u0026tag=\u0026nbs=1\u0026uipk=5\u0026os=08cbv\u0026platform=pc\u0026deadline=1745411269\u0026gen=playurlv3\u0026og=hw\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026upsig=e6c5646fd0e0d9cbb16296d2c8d8649f\u0026uparams=e,oi,mid,tag,nbs,uipk,os,platform,deadline,gen,og,trid\u0026bvc=vod\u0026nettype=0\u0026bw=168083\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=2,3"
                    ],
                    "backup_url": [
                        "https://upos-sz-mirror08c.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-100109.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026tag=\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026mid=59442895\u0026deadline=1745411269\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026gen=playurlv3\u0026os=08cbv\u0026og=hw\u0026oi=3028829496\u0026upsig=340b5f721a89f6dd90ae6153225cf808\u0026uparams=e,tag,trid,mid,deadline,nbs,uipk,platform,gen,os,og,oi\u0026bvc=vod\u0026nettype=0\u0026bw=168083\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=1,3",
                        "https://upos-sz-mirror08c.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-100109.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026oi=3028829496\u0026mid=59442895\u0026tag=\u0026nbs=1\u0026uipk=5\u0026os=08cbv\u0026platform=pc\u0026deadline=1745411269\u0026gen=playurlv3\u0026og=hw\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026upsig=e6c5646fd0e0d9cbb16296d2c8d8649f\u0026uparams=e,oi,mid,tag,nbs,uipk,os,platform,deadline,gen,og,trid\u0026bvc=vod\u0026nettype=0\u0026bw=168083\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=2,3"
                    ],
                    "bandwidth": 167889,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "hev1.1.6.L120.90",
                    "width": 640,
                    "height": 320,
                    "frameRate": "30.303",
                    "frame_rate": "30.303",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-1157",
                        "indexRange": "1158-2017"
                    },
                    "segment_base": {
                        "initialization": "0-1157",
                        "index_range": "1158-2017"
                    },
                    "codecid": 12
                },
                {
                    "id": 16,
                    "baseUrl": "https://xy113x200x108x47xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_nb3-1-30016.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026oi=3028829496\u0026mid=59442895\u0026deadline=1745411269\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026gen=playurlv3\u0026trid=0000cc6424a6fb564074a7704d5b300496eu\u0026os=mcdn\u0026og=hw\u0026tag=\u0026upsig=93d8e429ac6dcf654df688457f138820\u0026uparams=e,oi,mid,deadline,nbs,uipk,platform,gen,trid,os,og,tag\u0026mcdnid=50017754\u0026bvc=vod\u0026nettype=0\u0026bw=353034\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026orderid=0,3",
                    "base_url": "https://xy113x200x108x47xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_nb3-1-30016.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026oi=3028829496\u0026mid=59442895\u0026deadline=1745411269\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026gen=playurlv3\u0026trid=0000cc6424a6fb564074a7704d5b300496eu\u0026os=mcdn\u0026og=hw\u0026tag=\u0026upsig=93d8e429ac6dcf654df688457f138820\u0026uparams=e,oi,mid,deadline,nbs,uipk,platform,gen,trid,os,og,tag\u0026mcdnid=50017754\u0026bvc=vod\u0026nettype=0\u0026bw=353034\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026orderid=0,3",
                    "backupUrl": [
                        "https://upos-sz-mirror08c.bilivideo.com/upgcxcode/65/46/244954665/244954665_nb3-1-30016.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026mid=59442895\u0026deadline=1745411269\u0026nbs=1\u0026gen=playurlv3\u0026os=08cbv\u0026og=hw\u0026uipk=5\u0026platform=pc\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026oi=3028829496\u0026tag=\u0026upsig=87f32943e6cfcb2957f0b90e9be210f3\u0026uparams=e,mid,deadline,nbs,gen,os,og,uipk,platform,trid,oi,tag\u0026bvc=vod\u0026nettype=0\u0026bw=353034\u0026dl=0\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026orderid=1,3",
                        "https://upos-sz-mirror08c.bilivideo.com/upgcxcode/65/46/244954665/244954665_nb3-1-30016.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026uipk=5\u0026platform=pc\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026oi=3028829496\u0026mid=59442895\u0026og=hw\u0026tag=\u0026nbs=1\u0026deadline=1745411269\u0026gen=playurlv3\u0026os=08cbv\u0026upsig=0de6ac37eecd7261cc83e9e55f438747\u0026uparams=e,uipk,platform,trid,oi,mid,og,tag,nbs,deadline,gen,os\u0026bvc=vod\u0026nettype=0\u0026bw=353034\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=2,3"
                    ],
                    "backup_url": [
                        "https://upos-sz-mirror08c.bilivideo.com/upgcxcode/65/46/244954665/244954665_nb3-1-30016.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026mid=59442895\u0026deadline=1745411269\u0026nbs=1\u0026gen=playurlv3\u0026os=08cbv\u0026og=hw\u0026uipk=5\u0026platform=pc\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026oi=3028829496\u0026tag=\u0026upsig=87f32943e6cfcb2957f0b90e9be210f3\u0026uparams=e,mid,deadline,nbs,gen,os,og,uipk,platform,trid,oi,tag\u0026bvc=vod\u0026nettype=0\u0026bw=353034\u0026dl=0\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026orderid=1,3",
                        "https://upos-sz-mirror08c.bilivideo.com/upgcxcode/65/46/244954665/244954665_nb3-1-30016.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026uipk=5\u0026platform=pc\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026oi=3028829496\u0026mid=59442895\u0026og=hw\u0026tag=\u0026nbs=1\u0026deadline=1745411269\u0026gen=playurlv3\u0026os=08cbv\u0026upsig=0de6ac37eecd7261cc83e9e55f438747\u0026uparams=e,uipk,platform,trid,oi,mid,og,tag,nbs,deadline,gen,os\u0026bvc=vod\u0026nettype=0\u0026bw=353034\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=2,3"
                    ],
                    "bandwidth": 352627,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "avc1.64001E",
                    "width": 640,
                    "height": 320,
                    "frameRate": "29.412",
                    "frame_rate": "29.412",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-1002",
                        "indexRange": "1003-1862"
                    },
                    "segment_base": {
                        "initialization": "0-1002",
                        "index_range": "1003-1862"
                    },
                    "codecid": 7
                }
            ],
            "audio": [
                {
                    "id": 30232,
                    "baseUrl": "https://xy113x200x108x47xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_nb3-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026deadline=1745411269\u0026tag=\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026mid=59442895\u0026trid=0000cc6424a6fb564074a7704d5b300496eu\u0026oi=3028829496\u0026gen=playurlv3\u0026os=mcdn\u0026og=cos\u0026upsig=c9f074f7fc113d3d06b928f74a1427d4\u0026uparams=e,deadline,tag,nbs,uipk,platform,mid,trid,oi,gen,os,og\u0026mcdnid=50017754\u0026bvc=vod\u0026nettype=0\u0026bw=76527\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=0,3",
                    "base_url": "https://xy113x200x108x47xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_nb3-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026deadline=1745411269\u0026tag=\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026mid=59442895\u0026trid=0000cc6424a6fb564074a7704d5b300496eu\u0026oi=3028829496\u0026gen=playurlv3\u0026os=mcdn\u0026og=cos\u0026upsig=c9f074f7fc113d3d06b928f74a1427d4\u0026uparams=e,deadline,tag,nbs,uipk,platform,mid,trid,oi,gen,os,og\u0026mcdnid=50017754\u0026bvc=vod\u0026nettype=0\u0026bw=76527\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=0,3",
                    "backupUrl": [
                        "https://upos-sz-estgoss.bilivideo.com/upgcxcode/65/46/244954665/244954665_nb3-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026deadline=1745411269\u0026uipk=5\u0026platform=pc\u0026gen=playurlv3\u0026og=cos\u0026oi=3028829496\u0026mid=59442895\u0026nbs=1\u0026os=upos\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026tag=\u0026upsig=d563b613434d1b8d4c2acc1717a82dfa\u0026uparams=e,deadline,uipk,platform,gen,og,oi,mid,nbs,os,trid,tag\u0026bvc=vod\u0026nettype=0\u0026bw=76527\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=1,3",
                        "https://upos-sz-estgoss.bilivideo.com/upgcxcode/65/46/244954665/244954665_nb3-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026nbs=1\u0026uipk=5\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026oi=3028829496\u0026mid=59442895\u0026deadline=1745411269\u0026gen=playurlv3\u0026tag=\u0026platform=pc\u0026os=upos\u0026og=cos\u0026upsig=0d401aeaea4a51b01605e5155ccf2e34\u0026uparams=e,nbs,uipk,trid,oi,mid,deadline,gen,tag,platform,os,og\u0026bvc=vod\u0026nettype=0\u0026bw=76527\u0026dl=0\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026orderid=2,3"
                    ],
                    "backup_url": [
                        "https://upos-sz-estgoss.bilivideo.com/upgcxcode/65/46/244954665/244954665_nb3-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026deadline=1745411269\u0026uipk=5\u0026platform=pc\u0026gen=playurlv3\u0026og=cos\u0026oi=3028829496\u0026mid=59442895\u0026nbs=1\u0026os=upos\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026tag=\u0026upsig=d563b613434d1b8d4c2acc1717a82dfa\u0026uparams=e,deadline,uipk,platform,gen,og,oi,mid,nbs,os,trid,tag\u0026bvc=vod\u0026nettype=0\u0026bw=76527\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=1,3",
                        "https://upos-sz-estgoss.bilivideo.com/upgcxcode/65/46/244954665/244954665_nb3-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026nbs=1\u0026uipk=5\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026oi=3028829496\u0026mid=59442895\u0026deadline=1745411269\u0026gen=playurlv3\u0026tag=\u0026platform=pc\u0026os=upos\u0026og=cos\u0026upsig=0d401aeaea4a51b01605e5155ccf2e34\u0026uparams=e,nbs,uipk,trid,oi,mid,deadline,gen,tag,platform,os,og\u0026bvc=vod\u0026nettype=0\u0026bw=76527\u0026dl=0\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026orderid=2,3"
                    ],
                    "bandwidth": 76436,
                    "mimeType": "audio/mp4",
                    "mime_type": "audio/mp4",
                    "codecs": "mp4a.40.2",
                    "width": 0,
                    "height": 0,
                    "frameRate": "",
                    "frame_rate": "",
                    "sar": "",
                    "startWithSap": 0,
                    "start_with_sap": 0,
                    "SegmentBase": {
                        "Initialization": "0-933",
                        "indexRange": "934-1805"
                    },
                    "segment_base": {
                        "initialization": "0-933",
                        "index_range": "934-1805"
                    },
                    "codecid": 0
                },
                {
                    "id": 30280,
                    "baseUrl": "https://xy113x200x108x47xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_nb3-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026trid=0000cc6424a6fb564074a7704d5b300496eu\u0026oi=3028829496\u0026mid=59442895\u0026gen=playurlv3\u0026tag=\u0026os=mcdn\u0026og=cos\u0026deadline=1745411269\u0026upsig=3d3484b4a91783d0d7277e073d947fad\u0026uparams=e,nbs,uipk,platform,trid,oi,mid,gen,tag,os,og,deadline\u0026mcdnid=50017754\u0026bvc=vod\u0026nettype=0\u0026bw=155073\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=0,3",
                    "base_url": "https://xy113x200x108x47xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_nb3-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026trid=0000cc6424a6fb564074a7704d5b300496eu\u0026oi=3028829496\u0026mid=59442895\u0026gen=playurlv3\u0026tag=\u0026os=mcdn\u0026og=cos\u0026deadline=1745411269\u0026upsig=3d3484b4a91783d0d7277e073d947fad\u0026uparams=e,nbs,uipk,platform,trid,oi,mid,gen,tag,os,og,deadline\u0026mcdnid=50017754\u0026bvc=vod\u0026nettype=0\u0026bw=155073\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=0,3",
                    "backupUrl": [
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/65/46/244954665/244954665_nb3-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026og=cos\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026oi=3028829496\u0026deadline=1745411269\u0026tag=\u0026gen=playurlv3\u0026os=cosbv\u0026platform=pc\u0026mid=59442895\u0026nbs=1\u0026uipk=5\u0026upsig=f7cc870e2a4925c24e46ad9425cf39a8\u0026uparams=e,og,trid,oi,deadline,tag,gen,os,platform,mid,nbs,uipk\u0026bvc=vod\u0026nettype=0\u0026bw=155073\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=1,3",
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/65/46/244954665/244954665_nb3-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026og=cos\u0026mid=59442895\u0026tag=\u0026nbs=1\u0026platform=pc\u0026gen=playurlv3\u0026os=cosbv\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026oi=3028829496\u0026deadline=1745411269\u0026uipk=5\u0026upsig=d380844ae7ac21f8484650ba59a15d97\u0026uparams=e,og,mid,tag,nbs,platform,gen,os,trid,oi,deadline,uipk\u0026bvc=vod\u0026nettype=0\u0026bw=155073\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026orderid=2,3"
                    ],
                    "backup_url": [
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/65/46/244954665/244954665_nb3-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026og=cos\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026oi=3028829496\u0026deadline=1745411269\u0026tag=\u0026gen=playurlv3\u0026os=cosbv\u0026platform=pc\u0026mid=59442895\u0026nbs=1\u0026uipk=5\u0026upsig=f7cc870e2a4925c24e46ad9425cf39a8\u0026uparams=e,og,trid,oi,deadline,tag,gen,os,platform,mid,nbs,uipk\u0026bvc=vod\u0026nettype=0\u0026bw=155073\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=1,3",
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/65/46/244954665/244954665_nb3-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026og=cos\u0026mid=59442895\u0026tag=\u0026nbs=1\u0026platform=pc\u0026gen=playurlv3\u0026os=cosbv\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026oi=3028829496\u0026deadline=1745411269\u0026uipk=5\u0026upsig=d380844ae7ac21f8484650ba59a15d97\u0026uparams=e,og,mid,tag,nbs,platform,gen,os,trid,oi,deadline,uipk\u0026bvc=vod\u0026nettype=0\u0026bw=155073\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026orderid=2,3"
                    ],
                    "bandwidth": 154889,
                    "mimeType": "audio/mp4",
                    "mime_type": "audio/mp4",
                    "codecs": "mp4a.40.2",
                    "width": 0,
                    "height": 0,
                    "frameRate": "",
                    "frame_rate": "",
                    "sar": "",
                    "startWithSap": 0,
                    "start_with_sap": 0,
                    "SegmentBase": {
                        "Initialization": "0-933",
                        "indexRange": "934-1805"
                    },
                    "segment_base": {
                        "initialization": "0-933",
                        "index_range": "934-1805"
                    },
                    "codecid": 0
                },
                {
                    "id": 30216,
                    "baseUrl": "https://xy113x200x108x47xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_nb3-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026platform=pc\u0026trid=0000cc6424a6fb564074a7704d5b300496eu\u0026oi=3028829496\u0026os=mcdn\u0026deadline=1745411269\u0026tag=\u0026nbs=1\u0026uipk=5\u0026mid=59442895\u0026gen=playurlv3\u0026og=cos\u0026upsig=77babed89168a38118c16f99396e3fb6\u0026uparams=e,platform,trid,oi,os,deadline,tag,nbs,uipk,mid,gen,og\u0026mcdnid=50017754\u0026bvc=vod\u0026nettype=0\u0026bw=31750\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=0,3",
                    "base_url": "https://xy113x200x108x47xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_nb3-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026platform=pc\u0026trid=0000cc6424a6fb564074a7704d5b300496eu\u0026oi=3028829496\u0026os=mcdn\u0026deadline=1745411269\u0026tag=\u0026nbs=1\u0026uipk=5\u0026mid=59442895\u0026gen=playurlv3\u0026og=cos\u0026upsig=77babed89168a38118c16f99396e3fb6\u0026uparams=e,platform,trid,oi,os,deadline,tag,nbs,uipk,mid,gen,og\u0026mcdnid=50017754\u0026bvc=vod\u0026nettype=0\u0026bw=31750\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=0,3",
                    "backupUrl": [
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/65/46/244954665/244954665_nb3-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026gen=playurlv3\u0026os=cosbv\u0026og=cos\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026mid=59442895\u0026tag=\u0026nbs=1\u0026oi=3028829496\u0026deadline=1745411269\u0026uipk=5\u0026platform=pc\u0026upsig=d76799fe0f76dea02c775c8667fc3f82\u0026uparams=e,gen,os,og,trid,mid,tag,nbs,oi,deadline,uipk,platform\u0026bvc=vod\u0026nettype=0\u0026bw=31750\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=1,3",
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/65/46/244954665/244954665_nb3-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026os=cosbv\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026oi=3028829496\u0026mid=59442895\u0026tag=\u0026gen=playurlv3\u0026og=cos\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026deadline=1745411269\u0026upsig=5cb2a5242aa474a5a0ba70e16b3d04f6\u0026uparams=e,os,nbs,uipk,platform,oi,mid,tag,gen,og,trid,deadline\u0026bvc=vod\u0026nettype=0\u0026bw=31750\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=2,3"
                    ],
                    "backup_url": [
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/65/46/244954665/244954665_nb3-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026gen=playurlv3\u0026os=cosbv\u0026og=cos\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026mid=59442895\u0026tag=\u0026nbs=1\u0026oi=3028829496\u0026deadline=1745411269\u0026uipk=5\u0026platform=pc\u0026upsig=d76799fe0f76dea02c775c8667fc3f82\u0026uparams=e,gen,os,og,trid,mid,tag,nbs,oi,deadline,uipk,platform\u0026bvc=vod\u0026nettype=0\u0026bw=31750\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=1,3",
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/65/46/244954665/244954665_nb3-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026os=cosbv\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026oi=3028829496\u0026mid=59442895\u0026tag=\u0026gen=playurlv3\u0026og=cos\u0026trid=cc6424a6fb564074a7704d5b300496eu\u0026deadline=1745411269\u0026upsig=5cb2a5242aa474a5a0ba70e16b3d04f6\u0026uparams=e,os,nbs,uipk,platform,oi,mid,tag,gen,og,trid,deadline\u0026bvc=vod\u0026nettype=0\u0026bw=31750\u0026f=u_0_0\u0026agrr=1\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=2,3"
                    ],
                    "bandwidth": 31705,
                    "mimeType": "audio/mp4",
                    "mime_type": "audio/mp4",
                    "codecs": "mp4a.40.5",
                    "width": 0,
                    "height": 0,
                    "frameRate": "",
                    "frame_rate": "",
                    "sar": "",
                    "startWithSap": 0,
                    "start_with_sap": 0,
                    "SegmentBase": {
                        "Initialization": "0-943",
                        "indexRange": "944-1815"
                    },
                    "segment_base": {
                        "initialization": "0-943",
                        "index_range": "944-1815"
                    },
                    "codecid": 0
                }
            ],
            "dolby": {
                "type": 0,
                "audio": null
            },
            "flac": null
        },
        "support_formats": [
            {
                "quality": 125,
                "format": "hdflv2",
                "new_description": "HDR 真彩",
                "display_desc": "HDR",
                "superscript": "",
                "codecs": [
                    "hev1.2.4.L156.90"
                ]
            },
            {
                "quality": 120,
                "format": "hdflv2",
                "new_description": "4K 超清",
                "display_desc": "4K",
                "superscript": "",
                "codecs": [
                    "avc1.640034",
                    "hev1.1.6.L156.90"
                ]
            },
            {
                "quality": 116,
                "format": "flv_p60",
                "new_description": "1080P 60帧",
                "display_desc": "1080P",
                "superscript": "60帧",
                "codecs": [
                    "avc1.640032",
                    "hev1.1.6.L150.90"
                ]
            },
            {
                "quality": 80,
                "format": "flv",
                "new_description": "1080P 高清",
                "display_desc": "1080P",
                "superscript": "",
                "codecs": [
                    "avc1.640032",
                    "hev1.1.6.L150.90"
                ]
            },
            {
                "quality": 64,
                "format": "flv720",
                "new_description": "720P 高清",
                "display_desc": "720P",
                "superscript": "",
                "codecs": [
                    "avc1.640020",
                    "hev1.1.6.L120.90"
                ]
            },
            {
                "quality": 32,
                "format": "flv480",
                "new_description": "480P 清晰",
                "display_desc": "480P",
                "superscript": "",
                "codecs": [
                    "avc1.64001F",
                    "hev1.1.6.L120.90"
                ]
            },
            {
                "quality": 16,
                "format": "mp4",
                "new_description": "360P 流畅",
                "display_desc": "360P",
                "superscript": "",
                "codecs": [
                    "avc1.64001E",
                    "hev1.1.6.L120.90"
                ]
            }
        ],
        "high_format": null,
        "last_play_time": 0,
        "last_play_cid": 0,
        "view_info": null,
        "play_conf": {
            "is_new_description": false
        },
        "cur_language": ""
    }
}
```

</details>

获取视频`av115871406101538`/`BV1pR6UB3ENW`中的 1P（cid=`35306865840`）使用英文AI原声配音的视频流 URL，使用 DASH 方式获取

请求示例：

```shell
curl -G 'https://api.bilibili.com/x/player/playurl' \
    --data-urlencode 'avid=115871406101538' \
    --data-urlencode 'bvid=BV1pR6UB3ENW' \
    --data-urlencode 'cid=35306865840' \
    --data-urlencode 'fnval=4048' \
    --data-urlencode 'fnver=0' \
    --data-urlencode 'fourk=1' \
    --data-urlencode 'cur_language=en' \
    -b 'SESSDATA=xxx'
```

<details>
<summary>查看相应示例：</summary>

```json
{
    "code": 0,
    "message": "OK",
    "ttl": 1,
    "data": {
        "from": "local",
        "result": "suee",
        "message": "",
        "quality": 64,
        "format": "flv720",
        "timelength": 173100,
        "accept_format": "hdflv2,flv,flv720,flv480,mp4",
        "accept_description": [
            "高清 1080P+",
            "高清 1080P",
            "高清 720P",
            "清晰 480P",
            "流畅 360P"
        ],
        "accept_quality": [
            112,
            80,
            64,
            32,
            16
        ],
        "video_codecid": 7,
        "seek_param": "start",
        "seek_type": "offset",
        "dash": {
            "duration": 174,
            "minBufferTime": 1.5,
            "min_buffer_time": 1.5,
            "video": [
                {
                    "id": 112,
                    "baseUrl": "https://cn-hbyc-ct-01-01.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30112.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026platform=pc\u0026deadline=1768921888\u0026oi=605423425\u0026trid=0000e20dd754d5964994878fd44815ac690u\u0026gen=playurlv3\u0026og=hw\u0026nbs=1\u0026uipk=5\u0026mid=38331014\u0026os=bcache\u0026upsig=10c7088d7924086772708970dd475753\u0026uparams=e,platform,deadline,oi,trid,gen,og,nbs,uipk,mid,os\u0026cdnid=88801\u0026bvc=vod\u0026nettype=0\u0026bw=1974380\u0026lrs=42\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=0,3",
                    "base_url": "https://cn-hbyc-ct-01-01.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30112.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026platform=pc\u0026deadline=1768921888\u0026oi=605423425\u0026trid=0000e20dd754d5964994878fd44815ac690u\u0026gen=playurlv3\u0026og=hw\u0026nbs=1\u0026uipk=5\u0026mid=38331014\u0026os=bcache\u0026upsig=10c7088d7924086772708970dd475753\u0026uparams=e,platform,deadline,oi,trid,gen,og,nbs,uipk,mid,os\u0026cdnid=88801\u0026bvc=vod\u0026nettype=0\u0026bw=1974380\u0026lrs=42\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=0,3",
                    "backupUrl": [
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30112.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026uipk=5\u0026platform=pc\u0026deadline=1768921888\u0026trid=e20dd754d5964994878fd44815ac690u\u0026nbs=1\u0026mid=38331014\u0026oi=605423425\u0026gen=playurlv3\u0026os=cosbv\u0026og=hw\u0026upsig=e25487dea1f18e2176ffd47f78e21dcc\u0026uparams=e,uipk,platform,deadline,trid,nbs,mid,oi,gen,os,og\u0026bvc=vod\u0026nettype=0\u0026bw=1974380\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026orderid=1,3",
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30112.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026og=hw\u0026nbs=1\u0026platform=pc\u0026os=cosbv\u0026oi=605423425\u0026trid=e20dd754d5964994878fd44815ac690u\u0026uipk=5\u0026mid=38331014\u0026deadline=1768921888\u0026gen=playurlv3\u0026upsig=35315a9f898f3fbdc8820e1b36c2d670\u0026uparams=e,og,nbs,platform,os,oi,trid,uipk,mid,deadline,gen\u0026bvc=vod\u0026nettype=0\u0026bw=1974380\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026orderid=2,3"
                    ],
                    "backup_url": [
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30112.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026uipk=5\u0026platform=pc\u0026deadline=1768921888\u0026trid=e20dd754d5964994878fd44815ac690u\u0026nbs=1\u0026mid=38331014\u0026oi=605423425\u0026gen=playurlv3\u0026os=cosbv\u0026og=hw\u0026upsig=e25487dea1f18e2176ffd47f78e21dcc\u0026uparams=e,uipk,platform,deadline,trid,nbs,mid,oi,gen,os,og\u0026bvc=vod\u0026nettype=0\u0026bw=1974380\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026orderid=1,3",
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30112.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026og=hw\u0026nbs=1\u0026platform=pc\u0026os=cosbv\u0026oi=605423425\u0026trid=e20dd754d5964994878fd44815ac690u\u0026uipk=5\u0026mid=38331014\u0026deadline=1768921888\u0026gen=playurlv3\u0026upsig=35315a9f898f3fbdc8820e1b36c2d670\u0026uparams=e,og,nbs,platform,os,oi,trid,uipk,mid,deadline,gen\u0026bvc=vod\u0026nettype=0\u0026bw=1974380\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026orderid=2,3"
                    ],
                    "bandwidth": 1973175,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "avc1.640033",
                    "width": 1920,
                    "height": 1080,
                    "frameRate": "30.000",
                    "frame_rate": "30.000",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-947",
                        "indexRange": "948-1399"
                    },
                    "segment_base": {
                        "initialization": "0-947",
                        "index_range": "948-1399"
                    },
                    "codecid": 7
                },
                {
                    "id": 112,
                    "baseUrl": "https://xy60x163x166x213xy.mcdn.bilivideo.cn:8082/v1/resource/35306865840-1-30102.m4s?agrr=0\u0026build=0\u0026buvid=\u0026bvc=vod\u0026bw=1249475\u0026cdnid=88802\u0026deadline=1768921888\u0026dl=0\u0026e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D\u0026f=u_0_0\u0026gen=playurlv3\u0026lrs=42\u0026mid=38331014\u0026nbs=1\u0026nettype=0\u0026og=cos\u0026oi=605423425\u0026orderid=0%2C3\u0026os=bcache\u0026platform=pc\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026sign=b18765\u0026traceid=trdtUXpzcYtlvQ_0_e_N\u0026uipk=5\u0026uparams=e%2Coi%2Ctrid%2Cuipk%2Cplatform%2Cmid%2Cos%2Cog%2Cnbs%2Cdeadline%2Cgen\u0026upsig=a936808f3c612338e01ea479490f27ef",
                    "base_url": "https://xy60x163x166x213xy.mcdn.bilivideo.cn:8082/v1/resource/35306865840-1-30102.m4s?agrr=0\u0026build=0\u0026buvid=\u0026bvc=vod\u0026bw=1249475\u0026cdnid=88802\u0026deadline=1768921888\u0026dl=0\u0026e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D\u0026f=u_0_0\u0026gen=playurlv3\u0026lrs=42\u0026mid=38331014\u0026nbs=1\u0026nettype=0\u0026og=cos\u0026oi=605423425\u0026orderid=0%2C3\u0026os=bcache\u0026platform=pc\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026sign=b18765\u0026traceid=trdtUXpzcYtlvQ_0_e_N\u0026uipk=5\u0026uparams=e%2Coi%2Ctrid%2Cuipk%2Cplatform%2Cmid%2Cos%2Cog%2Cnbs%2Cdeadline%2Cgen\u0026upsig=a936808f3c612338e01ea479490f27ef",
                    "backupUrl": [
                        "https://cn-hbyc-ct-01-02.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30102.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026oi=605423425\u0026trid=0000e20dd754d5964994878fd44815ac690u\u0026uipk=5\u0026platform=pc\u0026mid=38331014\u0026os=bcache\u0026og=cos\u0026nbs=1\u0026deadline=1768921888\u0026gen=playurlv3\u0026upsig=a936808f3c612338e01ea479490f27ef\u0026uparams=e,oi,trid,uipk,platform,mid,os,og,nbs,deadline,gen\u0026cdnid=88802\u0026bvc=vod\u0026nettype=0\u0026bw=1249475\u0026lrs=42\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026orderid=0,3",
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30102.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026og=cos\u0026oi=605423425\u0026nbs=1\u0026gen=playurlv3\u0026trid=e20dd754d5964994878fd44815ac690u\u0026uipk=5\u0026platform=pc\u0026mid=38331014\u0026deadline=1768921888\u0026os=cosbv\u0026upsig=4340534fb442c116e39cdd86f92e52b9\u0026uparams=e,og,oi,nbs,gen,trid,uipk,platform,mid,deadline,os\u0026bvc=vod\u0026nettype=0\u0026bw=1249475\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026orderid=1,3"
                    ],
                    "backup_url": [
                        "https://cn-hbyc-ct-01-02.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30102.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026oi=605423425\u0026trid=0000e20dd754d5964994878fd44815ac690u\u0026uipk=5\u0026platform=pc\u0026mid=38331014\u0026os=bcache\u0026og=cos\u0026nbs=1\u0026deadline=1768921888\u0026gen=playurlv3\u0026upsig=a936808f3c612338e01ea479490f27ef\u0026uparams=e,oi,trid,uipk,platform,mid,os,og,nbs,deadline,gen\u0026cdnid=88802\u0026bvc=vod\u0026nettype=0\u0026bw=1249475\u0026lrs=42\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026orderid=0,3",
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30102.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026og=cos\u0026oi=605423425\u0026nbs=1\u0026gen=playurlv3\u0026trid=e20dd754d5964994878fd44815ac690u\u0026uipk=5\u0026platform=pc\u0026mid=38331014\u0026deadline=1768921888\u0026os=cosbv\u0026upsig=4340534fb442c116e39cdd86f92e52b9\u0026uparams=e,og,oi,nbs,gen,trid,uipk,platform,mid,deadline,os\u0026bvc=vod\u0026nettype=0\u0026bw=1249475\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026orderid=1,3"
                    ],
                    "bandwidth": 1248689,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "hev1.1.6.L150.90",
                    "width": 1920,
                    "height": 1080,
                    "frameRate": "30.000",
                    "frame_rate": "30.000",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-1108",
                        "indexRange": "1109-1560"
                    },
                    "segment_base": {
                        "initialization": "0-1108",
                        "index_range": "1109-1560"
                    },
                    "codecid": 12
                },
                {
                    "id": 112,
                    "baseUrl": "https://xy60x163x162x27xy.mcdn.bilivideo.cn:8082/v1/resource/35306865840-1-100027.m4s?agrr=0\u0026build=0\u0026buvid=\u0026bvc=vod\u0026bw=1018351\u0026cdnid=88801\u0026deadline=1768921888\u0026dl=0\u0026e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D\u0026f=u_0_0\u0026gen=playurlv3\u0026lrs=42\u0026mid=38331014\u0026nbs=1\u0026nettype=0\u0026og=ali\u0026oi=605423425\u0026orderid=0%2C3\u0026os=bcache\u0026platform=pc\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026sign=fcd44e\u0026traceid=trWWkCQiOPSqwK_0_e_N\u0026uipk=5\u0026uparams=e%2Cnbs%2Cuipk%2Ctrid%2Cos%2Cplatform%2Cmid%2Cdeadline%2Coi%2Cgen%2Cog\u0026upsig=b957000962f2d3f2e47fb8028ba32243",
                    "base_url": "https://xy60x163x162x27xy.mcdn.bilivideo.cn:8082/v1/resource/35306865840-1-100027.m4s?agrr=0\u0026build=0\u0026buvid=\u0026bvc=vod\u0026bw=1018351\u0026cdnid=88801\u0026deadline=1768921888\u0026dl=0\u0026e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D\u0026f=u_0_0\u0026gen=playurlv3\u0026lrs=42\u0026mid=38331014\u0026nbs=1\u0026nettype=0\u0026og=ali\u0026oi=605423425\u0026orderid=0%2C3\u0026os=bcache\u0026platform=pc\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026sign=fcd44e\u0026traceid=trWWkCQiOPSqwK_0_e_N\u0026uipk=5\u0026uparams=e%2Cnbs%2Cuipk%2Ctrid%2Cos%2Cplatform%2Cmid%2Cdeadline%2Coi%2Cgen%2Cog\u0026upsig=b957000962f2d3f2e47fb8028ba32243",
                    "backupUrl": [
                        "https://cn-hbyc-ct-01-01.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-100027.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026nbs=1\u0026uipk=5\u0026trid=0000e20dd754d5964994878fd44815ac690u\u0026os=bcache\u0026platform=pc\u0026mid=38331014\u0026deadline=1768921888\u0026oi=605423425\u0026gen=playurlv3\u0026og=ali\u0026upsig=b957000962f2d3f2e47fb8028ba32243\u0026uparams=e,nbs,uipk,trid,os,platform,mid,deadline,oi,gen,og\u0026cdnid=88801\u0026bvc=vod\u0026nettype=0\u0026bw=1018351\u0026lrs=42\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026orderid=0,3",
                        "https://upos-sz-estgoss.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-100027.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026os=estgoss\u0026og=ali\u0026deadline=1768921888\u0026trid=e20dd754d5964994878fd44815ac690u\u0026nbs=1\u0026mid=38331014\u0026gen=playurlv3\u0026oi=605423425\u0026uipk=5\u0026platform=pc\u0026upsig=b57ff8f1fa6786700e0b1dfbeea110f5\u0026uparams=e,os,og,deadline,trid,nbs,mid,gen,oi,uipk,platform\u0026bvc=vod\u0026nettype=0\u0026bw=1018351\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026orderid=1,3"
                    ],
                    "backup_url": [
                        "https://cn-hbyc-ct-01-01.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-100027.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026nbs=1\u0026uipk=5\u0026trid=0000e20dd754d5964994878fd44815ac690u\u0026os=bcache\u0026platform=pc\u0026mid=38331014\u0026deadline=1768921888\u0026oi=605423425\u0026gen=playurlv3\u0026og=ali\u0026upsig=b957000962f2d3f2e47fb8028ba32243\u0026uparams=e,nbs,uipk,trid,os,platform,mid,deadline,oi,gen,og\u0026cdnid=88801\u0026bvc=vod\u0026nettype=0\u0026bw=1018351\u0026lrs=42\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026orderid=0,3",
                        "https://upos-sz-estgoss.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-100027.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026os=estgoss\u0026og=ali\u0026deadline=1768921888\u0026trid=e20dd754d5964994878fd44815ac690u\u0026nbs=1\u0026mid=38331014\u0026gen=playurlv3\u0026oi=605423425\u0026uipk=5\u0026platform=pc\u0026upsig=b57ff8f1fa6786700e0b1dfbeea110f5\u0026uparams=e,os,og,deadline,trid,nbs,mid,gen,oi,uipk,platform\u0026bvc=vod\u0026nettype=0\u0026bw=1018351\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026orderid=1,3"
                    ],
                    "bandwidth": 1017695,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "av01.0.00M.10.0.110.01.01.01.0",
                    "width": 1920,
                    "height": 1080,
                    "frameRate": "30.000",
                    "frame_rate": "30.000",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-1010",
                        "indexRange": "1011-1462"
                    },
                    "segment_base": {
                        "initialization": "0-1010",
                        "index_range": "1011-1462"
                    },
                    "codecid": 13
                },
                {
                    "id": 80,
                    "baseUrl": "https://cn-hbyc-ct-01-02.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30080.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026platform=pc\u0026deadline=1768921888\u0026oi=605423425\u0026trid=0000e20dd754d5964994878fd44815ac690u\u0026gen=playurlv3\u0026nbs=1\u0026mid=38331014\u0026os=bcache\u0026og=hw\u0026uipk=5\u0026upsig=374297c208206f6a1fce3e540d87a385\u0026uparams=e,platform,deadline,oi,trid,gen,nbs,mid,os,og,uipk\u0026cdnid=88802\u0026bvc=vod\u0026nettype=0\u0026bw=1282889\u0026lrs=42\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026orderid=0,3",
                    "base_url": "https://cn-hbyc-ct-01-02.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30080.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026platform=pc\u0026deadline=1768921888\u0026oi=605423425\u0026trid=0000e20dd754d5964994878fd44815ac690u\u0026gen=playurlv3\u0026nbs=1\u0026mid=38331014\u0026os=bcache\u0026og=hw\u0026uipk=5\u0026upsig=374297c208206f6a1fce3e540d87a385\u0026uparams=e,platform,deadline,oi,trid,gen,nbs,mid,os,og,uipk\u0026cdnid=88802\u0026bvc=vod\u0026nettype=0\u0026bw=1282889\u0026lrs=42\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026orderid=0,3",
                    "backupUrl": [
                        "https://upos-sz-mirrorzos.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30080.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026deadline=1768921888\u0026trid=e20dd754d5964994878fd44815ac690u\u0026gen=playurlv3\u0026os=zosbv\u0026og=hw\u0026platform=pc\u0026mid=38331014\u0026oi=605423425\u0026nbs=1\u0026uipk=5\u0026upsig=c9ba6df1df78621fffba26716c5e87ff\u0026uparams=e,deadline,trid,gen,os,og,platform,mid,oi,nbs,uipk\u0026bvc=vod\u0026nettype=0\u0026bw=1282889\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026build=0\u0026orderid=1,3",
                        "https://upos-sz-mirrorzos.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30080.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026platform=pc\u0026oi=605423425\u0026trid=e20dd754d5964994878fd44815ac690u\u0026uipk=5\u0026gen=playurlv3\u0026os=zosbv\u0026mid=38331014\u0026deadline=1768921888\u0026nbs=1\u0026og=hw\u0026upsig=5390019aa2418cfc08085bc992b04b18\u0026uparams=e,platform,oi,trid,uipk,gen,os,mid,deadline,nbs,og\u0026bvc=vod\u0026nettype=0\u0026bw=1282889\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026orderid=2,3"
                    ],
                    "backup_url": [
                        "https://upos-sz-mirrorzos.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30080.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026deadline=1768921888\u0026trid=e20dd754d5964994878fd44815ac690u\u0026gen=playurlv3\u0026os=zosbv\u0026og=hw\u0026platform=pc\u0026mid=38331014\u0026oi=605423425\u0026nbs=1\u0026uipk=5\u0026upsig=c9ba6df1df78621fffba26716c5e87ff\u0026uparams=e,deadline,trid,gen,os,og,platform,mid,oi,nbs,uipk\u0026bvc=vod\u0026nettype=0\u0026bw=1282889\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026build=0\u0026orderid=1,3",
                        "https://upos-sz-mirrorzos.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30080.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026platform=pc\u0026oi=605423425\u0026trid=e20dd754d5964994878fd44815ac690u\u0026uipk=5\u0026gen=playurlv3\u0026os=zosbv\u0026mid=38331014\u0026deadline=1768921888\u0026nbs=1\u0026og=hw\u0026upsig=5390019aa2418cfc08085bc992b04b18\u0026uparams=e,platform,oi,trid,uipk,gen,os,mid,deadline,nbs,og\u0026bvc=vod\u0026nettype=0\u0026bw=1282889\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026orderid=2,3"
                    ],
                    "bandwidth": 1282083,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "avc1.640033",
                    "width": 1920,
                    "height": 1080,
                    "frameRate": "30.000",
                    "frame_rate": "30.000",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-947",
                        "indexRange": "948-1399"
                    },
                    "segment_base": {
                        "initialization": "0-947",
                        "index_range": "948-1399"
                    },
                    "codecid": 7
                },
                {
                    "id": 80,
                    "baseUrl": "https://xy115x231x44x139xy.mcdn.bilivideo.cn:8082/v1/resource/35306865840-1-30077.m4s?agrr=0\u0026build=0\u0026buvid=\u0026bvc=vod\u0026bw=647865\u0026cdnid=88801\u0026deadline=1768921888\u0026dl=0\u0026e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D\u0026f=u_0_0\u0026gen=playurlv3\u0026lrs=42\u0026mid=38331014\u0026nbs=1\u0026nettype=0\u0026og=hw\u0026oi=605423425\u0026orderid=0%2C3\u0026os=bcache\u0026platform=pc\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026sign=598634\u0026traceid=trVvyEMqEnCxMO_0_e_N\u0026uipk=5\u0026uparams=e%2Cnbs%2Coi%2Ctrid%2Cos%2Cuipk%2Cplatform%2Cmid%2Cdeadline%2Cgen%2Cog\u0026upsig=5edd114e5a0ae886fec8fa2e82a47e2e",
                    "base_url": "https://xy115x231x44x139xy.mcdn.bilivideo.cn:8082/v1/resource/35306865840-1-30077.m4s?agrr=0\u0026build=0\u0026buvid=\u0026bvc=vod\u0026bw=647865\u0026cdnid=88801\u0026deadline=1768921888\u0026dl=0\u0026e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D\u0026f=u_0_0\u0026gen=playurlv3\u0026lrs=42\u0026mid=38331014\u0026nbs=1\u0026nettype=0\u0026og=hw\u0026oi=605423425\u0026orderid=0%2C3\u0026os=bcache\u0026platform=pc\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026sign=598634\u0026traceid=trVvyEMqEnCxMO_0_e_N\u0026uipk=5\u0026uparams=e%2Cnbs%2Coi%2Ctrid%2Cos%2Cuipk%2Cplatform%2Cmid%2Cdeadline%2Cgen%2Cog\u0026upsig=5edd114e5a0ae886fec8fa2e82a47e2e",
                    "backupUrl": [
                        "https://cn-hbyc-ct-01-01.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30077.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026nbs=1\u0026oi=605423425\u0026trid=0000e20dd754d5964994878fd44815ac690u\u0026os=bcache\u0026uipk=5\u0026platform=pc\u0026mid=38331014\u0026deadline=1768921888\u0026gen=playurlv3\u0026og=hw\u0026upsig=5edd114e5a0ae886fec8fa2e82a47e2e\u0026uparams=e,nbs,oi,trid,os,uipk,platform,mid,deadline,gen,og\u0026cdnid=88801\u0026bvc=vod\u0026nettype=0\u0026bw=647865\u0026lrs=42\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026orderid=0,3",
                        "https://upos-sz-mirror08c.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30077.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026os=08cbv\u0026og=hw\u0026nbs=1\u0026uipk=5\u0026oi=605423425\u0026gen=playurlv3\u0026platform=pc\u0026mid=38331014\u0026deadline=1768921888\u0026trid=e20dd754d5964994878fd44815ac690u\u0026upsig=5b3e14c8e8c9775d77a9c4ed906af794\u0026uparams=e,os,og,nbs,uipk,oi,gen,platform,mid,deadline,trid\u0026bvc=vod\u0026nettype=0\u0026bw=647865\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026orderid=1,3"
                    ],
                    "backup_url": [
                        "https://cn-hbyc-ct-01-01.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30077.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026nbs=1\u0026oi=605423425\u0026trid=0000e20dd754d5964994878fd44815ac690u\u0026os=bcache\u0026uipk=5\u0026platform=pc\u0026mid=38331014\u0026deadline=1768921888\u0026gen=playurlv3\u0026og=hw\u0026upsig=5edd114e5a0ae886fec8fa2e82a47e2e\u0026uparams=e,nbs,oi,trid,os,uipk,platform,mid,deadline,gen,og\u0026cdnid=88801\u0026bvc=vod\u0026nettype=0\u0026bw=647865\u0026lrs=42\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026orderid=0,3",
                        "https://upos-sz-mirror08c.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30077.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026os=08cbv\u0026og=hw\u0026nbs=1\u0026uipk=5\u0026oi=605423425\u0026gen=playurlv3\u0026platform=pc\u0026mid=38331014\u0026deadline=1768921888\u0026trid=e20dd754d5964994878fd44815ac690u\u0026upsig=5b3e14c8e8c9775d77a9c4ed906af794\u0026uparams=e,os,og,nbs,uipk,oi,gen,platform,mid,deadline,trid\u0026bvc=vod\u0026nettype=0\u0026bw=647865\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026orderid=1,3"
                    ],
                    "bandwidth": 647422,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "hev1.1.6.L150.90",
                    "width": 1920,
                    "height": 1080,
                    "frameRate": "30.000",
                    "frame_rate": "30.000",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-1108",
                        "indexRange": "1109-1560"
                    },
                    "segment_base": {
                        "initialization": "0-1108",
                        "index_range": "1109-1560"
                    },
                    "codecid": 12
                },
                {
                    "id": 80,
                    "baseUrl": "https://xy60x163x166x209xy.mcdn.bilivideo.cn:8082/v1/resource/35306865840-1-100026.m4s?agrr=0\u0026build=0\u0026buvid=\u0026bvc=vod\u0026bw=517936\u0026cdnid=88802\u0026deadline=1768921888\u0026dl=0\u0026e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D\u0026f=u_0_0\u0026gen=playurlv3\u0026lrs=42\u0026mid=38331014\u0026nbs=1\u0026nettype=0\u0026og=cos\u0026oi=605423425\u0026orderid=0%2C3\u0026os=bcache\u0026platform=pc\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026sign=f7d612\u0026traceid=trwIKbxttngxnj_0_e_N\u0026uipk=5\u0026uparams=e%2Cuipk%2Cmid%2Coi%2Cgen%2Cnbs%2Cplatform%2Cdeadline%2Ctrid%2Cos%2Cog\u0026upsig=803da73a35b39b2513c4ef8ed01fe686",
                    "base_url": "https://xy60x163x166x209xy.mcdn.bilivideo.cn:8082/v1/resource/35306865840-1-100026.m4s?agrr=0\u0026build=0\u0026buvid=\u0026bvc=vod\u0026bw=517936\u0026cdnid=88802\u0026deadline=1768921888\u0026dl=0\u0026e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D\u0026f=u_0_0\u0026gen=playurlv3\u0026lrs=42\u0026mid=38331014\u0026nbs=1\u0026nettype=0\u0026og=cos\u0026oi=605423425\u0026orderid=0%2C3\u0026os=bcache\u0026platform=pc\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026sign=f7d612\u0026traceid=trwIKbxttngxnj_0_e_N\u0026uipk=5\u0026uparams=e%2Cuipk%2Cmid%2Coi%2Cgen%2Cnbs%2Cplatform%2Cdeadline%2Ctrid%2Cos%2Cog\u0026upsig=803da73a35b39b2513c4ef8ed01fe686",
                    "backupUrl": [
                        "https://cn-hbyc-ct-01-02.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-100026.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026uipk=5\u0026mid=38331014\u0026oi=605423425\u0026gen=playurlv3\u0026nbs=1\u0026platform=pc\u0026deadline=1768921888\u0026trid=0000e20dd754d5964994878fd44815ac690u\u0026os=bcache\u0026og=cos\u0026upsig=803da73a35b39b2513c4ef8ed01fe686\u0026uparams=e,uipk,mid,oi,gen,nbs,platform,deadline,trid,os,og\u0026cdnid=88802\u0026bvc=vod\u0026nettype=0\u0026bw=517936\u0026lrs=42\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026orderid=0,3",
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-100026.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026gen=playurlv3\u0026mid=38331014\u0026oi=605423425\u0026os=cosbv\u0026og=cos\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026deadline=1768921888\u0026trid=e20dd754d5964994878fd44815ac690u\u0026upsig=2ce2b39750969fc9e8f03691cd572c2e\u0026uparams=e,gen,mid,oi,os,og,nbs,uipk,platform,deadline,trid\u0026bvc=vod\u0026nettype=0\u0026bw=517936\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026orderid=1,3"
                    ],
                    "backup_url": [
                        "https://cn-hbyc-ct-01-02.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-100026.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026uipk=5\u0026mid=38331014\u0026oi=605423425\u0026gen=playurlv3\u0026nbs=1\u0026platform=pc\u0026deadline=1768921888\u0026trid=0000e20dd754d5964994878fd44815ac690u\u0026os=bcache\u0026og=cos\u0026upsig=803da73a35b39b2513c4ef8ed01fe686\u0026uparams=e,uipk,mid,oi,gen,nbs,platform,deadline,trid,os,og\u0026cdnid=88802\u0026bvc=vod\u0026nettype=0\u0026bw=517936\u0026lrs=42\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026orderid=0,3",
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-100026.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026gen=playurlv3\u0026mid=38331014\u0026oi=605423425\u0026os=cosbv\u0026og=cos\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026deadline=1768921888\u0026trid=e20dd754d5964994878fd44815ac690u\u0026upsig=2ce2b39750969fc9e8f03691cd572c2e\u0026uparams=e,gen,mid,oi,os,og,nbs,uipk,platform,deadline,trid\u0026bvc=vod\u0026nettype=0\u0026bw=517936\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026orderid=1,3"
                    ],
                    "bandwidth": 517569,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "av01.0.00M.10.0.110.01.01.01.0",
                    "width": 1920,
                    "height": 1080,
                    "frameRate": "30.000",
                    "frame_rate": "30.000",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-1010",
                        "indexRange": "1011-1462"
                    },
                    "segment_base": {
                        "initialization": "0-1010",
                        "index_range": "1011-1462"
                    },
                    "codecid": 13
                },
                {
                    "id": 64,
                    "baseUrl": "https://cn-hbyc-ct-01-05.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30064.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026gen=playurlv3\u0026og=cos\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026mid=38331014\u0026oi=605423425\u0026trid=0000e20dd754d5964994878fd44815ac690u\u0026os=bcache\u0026deadline=1768921888\u0026upsig=43e5c50e0e538112a14dd05323ac50ee\u0026uparams=e,gen,og,nbs,uipk,platform,mid,oi,trid,os,deadline\u0026cdnid=88805\u0026bvc=vod\u0026nettype=0\u0026bw=518391\u0026lrs=42\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026orderid=0,3",
                    "base_url": "https://cn-hbyc-ct-01-05.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30064.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026gen=playurlv3\u0026og=cos\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026mid=38331014\u0026oi=605423425\u0026trid=0000e20dd754d5964994878fd44815ac690u\u0026os=bcache\u0026deadline=1768921888\u0026upsig=43e5c50e0e538112a14dd05323ac50ee\u0026uparams=e,gen,og,nbs,uipk,platform,mid,oi,trid,os,deadline\u0026cdnid=88805\u0026bvc=vod\u0026nettype=0\u0026bw=518391\u0026lrs=42\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026orderid=0,3",
                    "backupUrl": [
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30064.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026uipk=5\u0026deadline=1768921888\u0026os=cosbv\u0026nbs=1\u0026platform=pc\u0026mid=38331014\u0026gen=playurlv3\u0026og=cos\u0026oi=605423425\u0026trid=e20dd754d5964994878fd44815ac690u\u0026upsig=3ca661cdda109d65c246178f8e20896e\u0026uparams=e,uipk,deadline,os,nbs,platform,mid,gen,og,oi,trid\u0026bvc=vod\u0026nettype=0\u0026bw=518391\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=1,3",
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30064.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026os=cosbv\u0026oi=605423425\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026mid=38331014\u0026deadline=1768921888\u0026gen=playurlv3\u0026og=cos\u0026trid=e20dd754d5964994878fd44815ac690u\u0026upsig=2ba66dedf2e1dfcc33a1bdb97e0aa49b\u0026uparams=e,os,oi,nbs,uipk,platform,mid,deadline,gen,og,trid\u0026bvc=vod\u0026nettype=0\u0026bw=518391\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026orderid=2,3"
                    ],
                    "backup_url": [
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30064.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026uipk=5\u0026deadline=1768921888\u0026os=cosbv\u0026nbs=1\u0026platform=pc\u0026mid=38331014\u0026gen=playurlv3\u0026og=cos\u0026oi=605423425\u0026trid=e20dd754d5964994878fd44815ac690u\u0026upsig=3ca661cdda109d65c246178f8e20896e\u0026uparams=e,uipk,deadline,os,nbs,platform,mid,gen,og,oi,trid\u0026bvc=vod\u0026nettype=0\u0026bw=518391\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=1,3",
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30064.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026os=cosbv\u0026oi=605423425\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026mid=38331014\u0026deadline=1768921888\u0026gen=playurlv3\u0026og=cos\u0026trid=e20dd754d5964994878fd44815ac690u\u0026upsig=2ba66dedf2e1dfcc33a1bdb97e0aa49b\u0026uparams=e,os,oi,nbs,uipk,platform,mid,deadline,gen,og,trid\u0026bvc=vod\u0026nettype=0\u0026bw=518391\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026orderid=2,3"
                    ],
                    "bandwidth": 518027,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "avc1.640033",
                    "width": 1280,
                    "height": 720,
                    "frameRate": "30.000",
                    "frame_rate": "30.000",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-945",
                        "indexRange": "946-1397"
                    },
                    "segment_base": {
                        "initialization": "0-945",
                        "index_range": "946-1397"
                    },
                    "codecid": 7
                },
                {
                    "id": 64,
                    "baseUrl": "https://xy60x163x166x210xy.mcdn.bilivideo.cn:8082/v1/resource/35306865840-1-30066.m4s?agrr=0\u0026build=0\u0026buvid=\u0026bvc=vod\u0026bw=298292\u0026cdnid=88802\u0026deadline=1768921888\u0026dl=0\u0026e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D\u0026f=u_0_0\u0026gen=playurlv3\u0026lrs=42\u0026mid=38331014\u0026nbs=1\u0026nettype=0\u0026og=hw\u0026oi=605423425\u0026orderid=0%2C3\u0026os=bcache\u0026platform=pc\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026sign=5f63a8\u0026traceid=trxmPMoVQLDXJM_0_e_N\u0026uipk=5\u0026uparams=e%2Cos%2Cnbs%2Cog%2Ctrid%2Cuipk%2Cplatform%2Cmid%2Cdeadline%2Coi%2Cgen\u0026upsig=4557aa74f373b297e0a6a04b5038ed0a",
                    "base_url": "https://xy60x163x166x210xy.mcdn.bilivideo.cn:8082/v1/resource/35306865840-1-30066.m4s?agrr=0\u0026build=0\u0026buvid=\u0026bvc=vod\u0026bw=298292\u0026cdnid=88802\u0026deadline=1768921888\u0026dl=0\u0026e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D\u0026f=u_0_0\u0026gen=playurlv3\u0026lrs=42\u0026mid=38331014\u0026nbs=1\u0026nettype=0\u0026og=hw\u0026oi=605423425\u0026orderid=0%2C3\u0026os=bcache\u0026platform=pc\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026sign=5f63a8\u0026traceid=trxmPMoVQLDXJM_0_e_N\u0026uipk=5\u0026uparams=e%2Cos%2Cnbs%2Cog%2Ctrid%2Cuipk%2Cplatform%2Cmid%2Cdeadline%2Coi%2Cgen\u0026upsig=4557aa74f373b297e0a6a04b5038ed0a",
                    "backupUrl": [
                        "https://cn-hbyc-ct-01-02.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30066.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026os=bcache\u0026nbs=1\u0026og=hw\u0026trid=0000e20dd754d5964994878fd44815ac690u\u0026uipk=5\u0026platform=pc\u0026mid=38331014\u0026deadline=1768921888\u0026oi=605423425\u0026gen=playurlv3\u0026upsig=4557aa74f373b297e0a6a04b5038ed0a\u0026uparams=e,os,nbs,og,trid,uipk,platform,mid,deadline,oi,gen\u0026cdnid=88802\u0026bvc=vod\u0026nettype=0\u0026bw=298292\u0026lrs=42\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026orderid=0,3",
                        "https://upos-sz-mirror08c.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30066.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026trid=e20dd754d5964994878fd44815ac690u\u0026uipk=5\u0026deadline=1768921888\u0026gen=playurlv3\u0026og=hw\u0026nbs=1\u0026platform=pc\u0026mid=38331014\u0026os=08cbv\u0026oi=605423425\u0026upsig=eda15c18ff3427591234a8cfcf0a4a88\u0026uparams=e,trid,uipk,deadline,gen,og,nbs,platform,mid,os,oi\u0026bvc=vod\u0026nettype=0\u0026bw=298292\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026orderid=1,3"
                    ],
                    "backup_url": [
                        "https://cn-hbyc-ct-01-02.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30066.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026os=bcache\u0026nbs=1\u0026og=hw\u0026trid=0000e20dd754d5964994878fd44815ac690u\u0026uipk=5\u0026platform=pc\u0026mid=38331014\u0026deadline=1768921888\u0026oi=605423425\u0026gen=playurlv3\u0026upsig=4557aa74f373b297e0a6a04b5038ed0a\u0026uparams=e,os,nbs,og,trid,uipk,platform,mid,deadline,oi,gen\u0026cdnid=88802\u0026bvc=vod\u0026nettype=0\u0026bw=298292\u0026lrs=42\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026orderid=0,3",
                        "https://upos-sz-mirror08c.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30066.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026trid=e20dd754d5964994878fd44815ac690u\u0026uipk=5\u0026deadline=1768921888\u0026gen=playurlv3\u0026og=hw\u0026nbs=1\u0026platform=pc\u0026mid=38331014\u0026os=08cbv\u0026oi=605423425\u0026upsig=eda15c18ff3427591234a8cfcf0a4a88\u0026uparams=e,trid,uipk,deadline,gen,og,nbs,platform,mid,os,oi\u0026bvc=vod\u0026nettype=0\u0026bw=298292\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026orderid=1,3"
                    ],
                    "bandwidth": 298050,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "hev1.1.6.L120.90",
                    "width": 1280,
                    "height": 720,
                    "frameRate": "30.000",
                    "frame_rate": "30.000",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-1107",
                        "indexRange": "1108-1559"
                    },
                    "segment_base": {
                        "initialization": "0-1107",
                        "index_range": "1108-1559"
                    },
                    "codecid": 12
                },
                {
                    "id": 64,
                    "baseUrl": "https://xy60x188x71x66xy.mcdn.bilivideo.cn:8082/v1/resource/35306865840-1-100024.m4s?agrr=0\u0026build=0\u0026buvid=\u0026bvc=vod\u0026bw=251176\u0026cdnid=88805\u0026deadline=1768921888\u0026dl=0\u0026e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D\u0026f=u_0_0\u0026gen=playurlv3\u0026lrs=42\u0026mid=38331014\u0026nbs=1\u0026nettype=0\u0026og=ali\u0026oi=605423425\u0026orderid=0%2C3\u0026os=bcache\u0026platform=pc\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026sign=df86d8\u0026traceid=trJKelwVBuuosq_0_e_N\u0026uipk=5\u0026uparams=e%2Cplatform%2Cdeadline%2Ctrid%2Cgen%2Cnbs%2Cuipk%2Cmid%2Coi%2Cos%2Cog\u0026upsig=c62f2453cb175f09c7087b48492a0890",
                    "base_url": "https://xy60x188x71x66xy.mcdn.bilivideo.cn:8082/v1/resource/35306865840-1-100024.m4s?agrr=0\u0026build=0\u0026buvid=\u0026bvc=vod\u0026bw=251176\u0026cdnid=88805\u0026deadline=1768921888\u0026dl=0\u0026e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D\u0026f=u_0_0\u0026gen=playurlv3\u0026lrs=42\u0026mid=38331014\u0026nbs=1\u0026nettype=0\u0026og=ali\u0026oi=605423425\u0026orderid=0%2C3\u0026os=bcache\u0026platform=pc\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026sign=df86d8\u0026traceid=trJKelwVBuuosq_0_e_N\u0026uipk=5\u0026uparams=e%2Cplatform%2Cdeadline%2Ctrid%2Cgen%2Cnbs%2Cuipk%2Cmid%2Coi%2Cos%2Cog\u0026upsig=c62f2453cb175f09c7087b48492a0890",
                    "backupUrl": [
                        "https://cn-hbyc-ct-01-05.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-100024.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026platform=pc\u0026deadline=1768921888\u0026trid=0000e20dd754d5964994878fd44815ac690u\u0026gen=playurlv3\u0026nbs=1\u0026uipk=5\u0026mid=38331014\u0026oi=605423425\u0026os=bcache\u0026og=ali\u0026upsig=c62f2453cb175f09c7087b48492a0890\u0026uparams=e,platform,deadline,trid,gen,nbs,uipk,mid,oi,os,og\u0026cdnid=88805\u0026bvc=vod\u0026nettype=0\u0026bw=251176\u0026lrs=42\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=0,3",
                        "https://upos-sz-estgoss.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-100024.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026deadline=1768921888\u0026og=ali\u0026mid=38331014\u0026oi=605423425\u0026trid=e20dd754d5964994878fd44815ac690u\u0026gen=playurlv3\u0026os=estgoss\u0026upsig=fcb46de4b4593935875c7abd5ccc37ac\u0026uparams=e,nbs,uipk,platform,deadline,og,mid,oi,trid,gen,os\u0026bvc=vod\u0026nettype=0\u0026bw=251176\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026orderid=1,3"
                    ],
                    "backup_url": [
                        "https://cn-hbyc-ct-01-05.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-100024.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026platform=pc\u0026deadline=1768921888\u0026trid=0000e20dd754d5964994878fd44815ac690u\u0026gen=playurlv3\u0026nbs=1\u0026uipk=5\u0026mid=38331014\u0026oi=605423425\u0026os=bcache\u0026og=ali\u0026upsig=c62f2453cb175f09c7087b48492a0890\u0026uparams=e,platform,deadline,trid,gen,nbs,uipk,mid,oi,os,og\u0026cdnid=88805\u0026bvc=vod\u0026nettype=0\u0026bw=251176\u0026lrs=42\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=0,3",
                        "https://upos-sz-estgoss.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-100024.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026deadline=1768921888\u0026og=ali\u0026mid=38331014\u0026oi=605423425\u0026trid=e20dd754d5964994878fd44815ac690u\u0026gen=playurlv3\u0026os=estgoss\u0026upsig=fcb46de4b4593935875c7abd5ccc37ac\u0026uparams=e,nbs,uipk,platform,deadline,og,mid,oi,trid,gen,os\u0026bvc=vod\u0026nettype=0\u0026bw=251176\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026orderid=1,3"
                    ],
                    "bandwidth": 250963,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "av01.0.00M.10.0.110.01.01.01.0",
                    "width": 1280,
                    "height": 720,
                    "frameRate": "30.000",
                    "frame_rate": "30.000",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-1010",
                        "indexRange": "1011-1462"
                    },
                    "segment_base": {
                        "initialization": "0-1010",
                        "index_range": "1011-1462"
                    },
                    "codecid": 13
                },
                {
                    "id": 32,
                    "baseUrl": "https://xy115x231x44x139xy.mcdn.bilivideo.cn:8082/v1/resource/35306865840-1-30032.m4s?agrr=0\u0026build=0\u0026buvid=\u0026bvc=vod\u0026bw=262520\u0026cdnid=88805\u0026deadline=1768921888\u0026dl=0\u0026e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D\u0026f=u_0_0\u0026gen=playurlv3\u0026lrs=42\u0026mid=38331014\u0026nbs=1\u0026nettype=0\u0026og=cos\u0026oi=605423425\u0026orderid=0%2C3\u0026os=bcache\u0026platform=pc\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026sign=fd840d\u0026traceid=trxsurzRqeJgoi_0_e_N\u0026uipk=5\u0026uparams=e%2Ctrid%2Cgen%2Cog%2Cuipk%2Cmid%2Cdeadline%2Cos%2Cnbs%2Cplatform%2Coi\u0026upsig=de3812cc9f42e8cb4f652ae93ad03c7d",
                    "base_url": "https://xy115x231x44x139xy.mcdn.bilivideo.cn:8082/v1/resource/35306865840-1-30032.m4s?agrr=0\u0026build=0\u0026buvid=\u0026bvc=vod\u0026bw=262520\u0026cdnid=88805\u0026deadline=1768921888\u0026dl=0\u0026e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D\u0026f=u_0_0\u0026gen=playurlv3\u0026lrs=42\u0026mid=38331014\u0026nbs=1\u0026nettype=0\u0026og=cos\u0026oi=605423425\u0026orderid=0%2C3\u0026os=bcache\u0026platform=pc\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026sign=fd840d\u0026traceid=trxsurzRqeJgoi_0_e_N\u0026uipk=5\u0026uparams=e%2Ctrid%2Cgen%2Cog%2Cuipk%2Cmid%2Cdeadline%2Cos%2Cnbs%2Cplatform%2Coi\u0026upsig=de3812cc9f42e8cb4f652ae93ad03c7d",
                    "backupUrl": [
                        "https://cn-hbyc-ct-01-05.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30032.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026trid=0000e20dd754d5964994878fd44815ac690u\u0026gen=playurlv3\u0026og=cos\u0026uipk=5\u0026mid=38331014\u0026deadline=1768921888\u0026os=bcache\u0026nbs=1\u0026platform=pc\u0026oi=605423425\u0026upsig=de3812cc9f42e8cb4f652ae93ad03c7d\u0026uparams=e,trid,gen,og,uipk,mid,deadline,os,nbs,platform,oi\u0026cdnid=88805\u0026bvc=vod\u0026nettype=0\u0026bw=262520\u0026lrs=42\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=0,3",
                        "https://upos-sz-estgoss.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30032.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026oi=605423425\u0026trid=e20dd754d5964994878fd44815ac690u\u0026nbs=1\u0026mid=38331014\u0026deadline=1768921888\u0026gen=playurlv3\u0026os=estgoss\u0026uipk=5\u0026platform=pc\u0026og=cos\u0026upsig=38ca77338127572828ddb3aaf81c967c\u0026uparams=e,oi,trid,nbs,mid,deadline,gen,os,uipk,platform,og\u0026bvc=vod\u0026nettype=0\u0026bw=262520\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026build=0\u0026orderid=1,3"
                    ],
                    "backup_url": [
                        "https://cn-hbyc-ct-01-05.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30032.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026trid=0000e20dd754d5964994878fd44815ac690u\u0026gen=playurlv3\u0026og=cos\u0026uipk=5\u0026mid=38331014\u0026deadline=1768921888\u0026os=bcache\u0026nbs=1\u0026platform=pc\u0026oi=605423425\u0026upsig=de3812cc9f42e8cb4f652ae93ad03c7d\u0026uparams=e,trid,gen,og,uipk,mid,deadline,os,nbs,platform,oi\u0026cdnid=88805\u0026bvc=vod\u0026nettype=0\u0026bw=262520\u0026lrs=42\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=0,3",
                        "https://upos-sz-estgoss.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30032.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026oi=605423425\u0026trid=e20dd754d5964994878fd44815ac690u\u0026nbs=1\u0026mid=38331014\u0026deadline=1768921888\u0026gen=playurlv3\u0026os=estgoss\u0026uipk=5\u0026platform=pc\u0026og=cos\u0026upsig=38ca77338127572828ddb3aaf81c967c\u0026uparams=e,oi,trid,nbs,mid,deadline,gen,os,uipk,platform,og\u0026bvc=vod\u0026nettype=0\u0026bw=262520\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026build=0\u0026orderid=1,3"
                    ],
                    "bandwidth": 262304,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "avc1.640033",
                    "width": 852,
                    "height": 480,
                    "frameRate": "30.000",
                    "frame_rate": "30.000",
                    "sar": "640:639",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-950",
                        "indexRange": "951-1402"
                    },
                    "segment_base": {
                        "initialization": "0-950",
                        "index_range": "951-1402"
                    },
                    "codecid": 7
                },
                {
                    "id": 32,
                    "baseUrl": "https://cn-hbyc-ct-01-05.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30033.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026trid=0000e20dd754d5964994878fd44815ac690u\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026deadline=1768921888\u0026gen=playurlv3\u0026os=bcache\u0026oi=605423425\u0026mid=38331014\u0026og=ali\u0026upsig=13a4c3d43c0c34bf5105bab7d8f1e66c\u0026uparams=e,trid,nbs,uipk,platform,deadline,gen,os,oi,mid,og\u0026cdnid=88805\u0026bvc=vod\u0026nettype=0\u0026bw=177469\u0026lrs=42\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026orderid=0,3",
                    "base_url": "https://cn-hbyc-ct-01-05.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30033.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026trid=0000e20dd754d5964994878fd44815ac690u\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026deadline=1768921888\u0026gen=playurlv3\u0026os=bcache\u0026oi=605423425\u0026mid=38331014\u0026og=ali\u0026upsig=13a4c3d43c0c34bf5105bab7d8f1e66c\u0026uparams=e,trid,nbs,uipk,platform,deadline,gen,os,oi,mid,og\u0026cdnid=88805\u0026bvc=vod\u0026nettype=0\u0026bw=177469\u0026lrs=42\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026orderid=0,3",
                    "backupUrl": [
                        "https://upos-sz-estgoss.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30033.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026oi=605423425\u0026trid=e20dd754d5964994878fd44815ac690u\u0026mid=38331014\u0026deadline=1768921888\u0026gen=playurlv3\u0026os=estgoss\u0026og=ali\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026upsig=7ab9c18be58382ad92b015e60b1d81d1\u0026uparams=e,oi,trid,mid,deadline,gen,os,og,nbs,uipk,platform\u0026bvc=vod\u0026nettype=0\u0026bw=177469\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026orderid=1,3",
                        "https://upos-sz-estgoss.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30033.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026trid=e20dd754d5964994878fd44815ac690u\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026deadline=1768921888\u0026gen=playurlv3\u0026oi=605423425\u0026mid=38331014\u0026os=estgoss\u0026og=ali\u0026upsig=a3db99b9a34d473e111d9462d705b848\u0026uparams=e,trid,nbs,uipk,platform,deadline,gen,oi,mid,os,og\u0026bvc=vod\u0026nettype=0\u0026bw=177469\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026orderid=2,3"
                    ],
                    "backup_url": [
                        "https://upos-sz-estgoss.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30033.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026oi=605423425\u0026trid=e20dd754d5964994878fd44815ac690u\u0026mid=38331014\u0026deadline=1768921888\u0026gen=playurlv3\u0026os=estgoss\u0026og=ali\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026upsig=7ab9c18be58382ad92b015e60b1d81d1\u0026uparams=e,oi,trid,mid,deadline,gen,os,og,nbs,uipk,platform\u0026bvc=vod\u0026nettype=0\u0026bw=177469\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026orderid=1,3",
                        "https://upos-sz-estgoss.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30033.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026trid=e20dd754d5964994878fd44815ac690u\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026deadline=1768921888\u0026gen=playurlv3\u0026oi=605423425\u0026mid=38331014\u0026os=estgoss\u0026og=ali\u0026upsig=a3db99b9a34d473e111d9462d705b848\u0026uparams=e,trid,nbs,uipk,platform,deadline,gen,oi,mid,os,og\u0026bvc=vod\u0026nettype=0\u0026bw=177469\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026orderid=2,3"
                    ],
                    "bandwidth": 177295,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "hev1.1.6.L120.90",
                    "width": 852,
                    "height": 480,
                    "frameRate": "30.000",
                    "frame_rate": "30.000",
                    "sar": "640:639",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-1112",
                        "indexRange": "1113-1564"
                    },
                    "segment_base": {
                        "initialization": "0-1112",
                        "index_range": "1113-1564"
                    },
                    "codecid": 12
                },
                {
                    "id": 32,
                    "baseUrl": "https://xy218x60x39x73xy.mcdn.bilivideo.cn:8082/v1/resource/35306865840-1-100023.m4s?agrr=0\u0026build=0\u0026buvid=\u0026bvc=vod\u0026bw=150725\u0026cdnid=88801\u0026deadline=1768921888\u0026dl=0\u0026e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D\u0026f=u_0_0\u0026gen=playurlv3\u0026lrs=42\u0026mid=38331014\u0026nbs=1\u0026nettype=0\u0026og=ali\u0026oi=605423425\u0026orderid=0%2C3\u0026os=bcache\u0026platform=pc\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026sign=7bb757\u0026traceid=trnydvRtRCjubG_0_e_N\u0026uipk=5\u0026uparams=e%2Cos%2Cog%2Cnbs%2Cplatform%2Cmid%2Cdeadline%2Coi%2Cgen%2Cuipk%2Ctrid\u0026upsig=dd02a985b8ddc3b4a71cbb2587940f33",
                    "base_url": "https://xy218x60x39x73xy.mcdn.bilivideo.cn:8082/v1/resource/35306865840-1-100023.m4s?agrr=0\u0026build=0\u0026buvid=\u0026bvc=vod\u0026bw=150725\u0026cdnid=88801\u0026deadline=1768921888\u0026dl=0\u0026e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D\u0026f=u_0_0\u0026gen=playurlv3\u0026lrs=42\u0026mid=38331014\u0026nbs=1\u0026nettype=0\u0026og=ali\u0026oi=605423425\u0026orderid=0%2C3\u0026os=bcache\u0026platform=pc\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026sign=7bb757\u0026traceid=trnydvRtRCjubG_0_e_N\u0026uipk=5\u0026uparams=e%2Cos%2Cog%2Cnbs%2Cplatform%2Cmid%2Cdeadline%2Coi%2Cgen%2Cuipk%2Ctrid\u0026upsig=dd02a985b8ddc3b4a71cbb2587940f33",
                    "backupUrl": [
                        "https://cn-hbyc-ct-01-01.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-100023.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026os=bcache\u0026og=ali\u0026nbs=1\u0026platform=pc\u0026mid=38331014\u0026deadline=1768921888\u0026oi=605423425\u0026gen=playurlv3\u0026uipk=5\u0026trid=0000e20dd754d5964994878fd44815ac690u\u0026upsig=dd02a985b8ddc3b4a71cbb2587940f33\u0026uparams=e,os,og,nbs,platform,mid,deadline,oi,gen,uipk,trid\u0026cdnid=88801\u0026bvc=vod\u0026nettype=0\u0026bw=150725\u0026lrs=42\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=0,3",
                        "https://upos-sz-estgoss.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-100023.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026gen=playurlv3\u0026os=estgoss\u0026og=ali\u0026oi=605423425\u0026trid=e20dd754d5964994878fd44815ac690u\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026mid=38331014\u0026deadline=1768921888\u0026upsig=b9bb2f0770330407ae725c1c340f1afc\u0026uparams=e,gen,os,og,oi,trid,nbs,uipk,platform,mid,deadline\u0026bvc=vod\u0026nettype=0\u0026bw=150725\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026orderid=1,3"
                    ],
                    "backup_url": [
                        "https://cn-hbyc-ct-01-01.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-100023.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026os=bcache\u0026og=ali\u0026nbs=1\u0026platform=pc\u0026mid=38331014\u0026deadline=1768921888\u0026oi=605423425\u0026gen=playurlv3\u0026uipk=5\u0026trid=0000e20dd754d5964994878fd44815ac690u\u0026upsig=dd02a985b8ddc3b4a71cbb2587940f33\u0026uparams=e,os,og,nbs,platform,mid,deadline,oi,gen,uipk,trid\u0026cdnid=88801\u0026bvc=vod\u0026nettype=0\u0026bw=150725\u0026lrs=42\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=0,3",
                        "https://upos-sz-estgoss.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-100023.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026gen=playurlv3\u0026os=estgoss\u0026og=ali\u0026oi=605423425\u0026trid=e20dd754d5964994878fd44815ac690u\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026mid=38331014\u0026deadline=1768921888\u0026upsig=b9bb2f0770330407ae725c1c340f1afc\u0026uparams=e,gen,os,og,oi,trid,nbs,uipk,platform,mid,deadline\u0026bvc=vod\u0026nettype=0\u0026bw=150725\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026orderid=1,3"
                    ],
                    "bandwidth": 150571,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "av01.0.00M.10.0.110.01.01.01.0",
                    "width": 852,
                    "height": 480,
                    "frameRate": "30.000",
                    "frame_rate": "30.000",
                    "sar": "640:639",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-1010",
                        "indexRange": "1011-1462"
                    },
                    "segment_base": {
                        "initialization": "0-1010",
                        "index_range": "1011-1462"
                    },
                    "codecid": 13
                },
                {
                    "id": 16,
                    "baseUrl": "https://cn-hbyc-ct-01-02.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30011.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026uipk=5\u0026platform=pc\u0026deadline=1768921888\u0026trid=0000e20dd754d5964994878fd44815ac690u\u0026gen=playurlv3\u0026og=hw\u0026nbs=1\u0026mid=38331014\u0026oi=605423425\u0026os=bcache\u0026upsig=fa94c40e060692230803ac1c6663332a\u0026uparams=e,uipk,platform,deadline,trid,gen,og,nbs,mid,oi,os\u0026cdnid=88802\u0026bvc=vod\u0026nettype=0\u0026bw=123644\u0026lrs=42\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026orderid=0,3",
                    "base_url": "https://cn-hbyc-ct-01-02.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30011.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026uipk=5\u0026platform=pc\u0026deadline=1768921888\u0026trid=0000e20dd754d5964994878fd44815ac690u\u0026gen=playurlv3\u0026og=hw\u0026nbs=1\u0026mid=38331014\u0026oi=605423425\u0026os=bcache\u0026upsig=fa94c40e060692230803ac1c6663332a\u0026uparams=e,uipk,platform,deadline,trid,gen,og,nbs,mid,oi,os\u0026cdnid=88802\u0026bvc=vod\u0026nettype=0\u0026bw=123644\u0026lrs=42\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026orderid=0,3",
                    "backupUrl": [
                        "https://upos-sz-mirror08c.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30011.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026os=08cbv\u0026og=hw\u0026platform=pc\u0026deadline=1768921888\u0026oi=605423425\u0026nbs=1\u0026uipk=5\u0026mid=38331014\u0026trid=e20dd754d5964994878fd44815ac690u\u0026gen=playurlv3\u0026upsig=907903b6cf872d695824c7c90d5a8215\u0026uparams=e,os,og,platform,deadline,oi,nbs,uipk,mid,trid,gen\u0026bvc=vod\u0026nettype=0\u0026bw=123644\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026build=0\u0026orderid=1,3",
                        "https://upos-sz-mirror08c.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30011.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026uipk=5\u0026oi=605423425\u0026nbs=1\u0026platform=pc\u0026mid=38331014\u0026deadline=1768921888\u0026gen=playurlv3\u0026os=08cbv\u0026og=hw\u0026trid=e20dd754d5964994878fd44815ac690u\u0026upsig=50d4bf9786979cdbed40d0f0a55bbe60\u0026uparams=e,uipk,oi,nbs,platform,mid,deadline,gen,os,og,trid\u0026bvc=vod\u0026nettype=0\u0026bw=123644\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026orderid=2,3"
                    ],
                    "backup_url": [
                        "https://upos-sz-mirror08c.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30011.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026os=08cbv\u0026og=hw\u0026platform=pc\u0026deadline=1768921888\u0026oi=605423425\u0026nbs=1\u0026uipk=5\u0026mid=38331014\u0026trid=e20dd754d5964994878fd44815ac690u\u0026gen=playurlv3\u0026upsig=907903b6cf872d695824c7c90d5a8215\u0026uparams=e,os,og,platform,deadline,oi,nbs,uipk,mid,trid,gen\u0026bvc=vod\u0026nettype=0\u0026bw=123644\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026build=0\u0026orderid=1,3",
                        "https://upos-sz-mirror08c.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30011.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026uipk=5\u0026oi=605423425\u0026nbs=1\u0026platform=pc\u0026mid=38331014\u0026deadline=1768921888\u0026gen=playurlv3\u0026os=08cbv\u0026og=hw\u0026trid=e20dd754d5964994878fd44815ac690u\u0026upsig=50d4bf9786979cdbed40d0f0a55bbe60\u0026uparams=e,uipk,oi,nbs,platform,mid,deadline,gen,os,og,trid\u0026bvc=vod\u0026nettype=0\u0026bw=123644\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026orderid=2,3"
                    ],
                    "bandwidth": 123502,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "hev1.1.6.L120.90",
                    "width": 640,
                    "height": 360,
                    "frameRate": "30.000",
                    "frame_rate": "30.000",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-1108",
                        "indexRange": "1109-1560"
                    },
                    "segment_base": {
                        "initialization": "0-1108",
                        "index_range": "1109-1560"
                    },
                    "codecid": 12
                },
                {
                    "id": 16,
                    "baseUrl": "https://cn-hbyc-ct-01-05.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30016.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026nbs=1\u0026uipk=5\u0026deadline=1768921888\u0026trid=0000e20dd754d5964994878fd44815ac690u\u0026platform=pc\u0026mid=38331014\u0026oi=605423425\u0026gen=playurlv3\u0026os=bcache\u0026og=cos\u0026upsig=97252202334105cf4efc0af956642565\u0026uparams=e,nbs,uipk,deadline,trid,platform,mid,oi,gen,os,og\u0026cdnid=88805\u0026bvc=vod\u0026nettype=0\u0026bw=170409\u0026lrs=42\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026orderid=0,3",
                    "base_url": "https://cn-hbyc-ct-01-05.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30016.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026nbs=1\u0026uipk=5\u0026deadline=1768921888\u0026trid=0000e20dd754d5964994878fd44815ac690u\u0026platform=pc\u0026mid=38331014\u0026oi=605423425\u0026gen=playurlv3\u0026os=bcache\u0026og=cos\u0026upsig=97252202334105cf4efc0af956642565\u0026uparams=e,nbs,uipk,deadline,trid,platform,mid,oi,gen,os,og\u0026cdnid=88805\u0026bvc=vod\u0026nettype=0\u0026bw=170409\u0026lrs=42\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026orderid=0,3",
                    "backupUrl": [
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30016.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026mid=38331014\u0026os=cosbv\u0026nbs=1\u0026uipk=5\u0026deadline=1768921888\u0026oi=605423425\u0026trid=e20dd754d5964994878fd44815ac690u\u0026gen=playurlv3\u0026og=cos\u0026platform=pc\u0026upsig=6e6496389af268a0e3ef31c904316024\u0026uparams=e,mid,os,nbs,uipk,deadline,oi,trid,gen,og,platform\u0026bvc=vod\u0026nettype=0\u0026bw=170409\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026orderid=1,3",
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30016.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026mid=38331014\u0026deadline=1768921888\u0026gen=playurlv3\u0026os=cosbv\u0026nbs=1\u0026oi=605423425\u0026trid=e20dd754d5964994878fd44815ac690u\u0026og=cos\u0026uipk=5\u0026platform=pc\u0026upsig=e7c6a3eb7904090ee54f538e8a5be530\u0026uparams=e,mid,deadline,gen,os,nbs,oi,trid,og,uipk,platform\u0026bvc=vod\u0026nettype=0\u0026bw=170409\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026orderid=2,3"
                    ],
                    "backup_url": [
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30016.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026mid=38331014\u0026os=cosbv\u0026nbs=1\u0026uipk=5\u0026deadline=1768921888\u0026oi=605423425\u0026trid=e20dd754d5964994878fd44815ac690u\u0026gen=playurlv3\u0026og=cos\u0026platform=pc\u0026upsig=6e6496389af268a0e3ef31c904316024\u0026uparams=e,mid,os,nbs,uipk,deadline,oi,trid,gen,og,platform\u0026bvc=vod\u0026nettype=0\u0026bw=170409\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026orderid=1,3",
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-30016.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026mid=38331014\u0026deadline=1768921888\u0026gen=playurlv3\u0026os=cosbv\u0026nbs=1\u0026oi=605423425\u0026trid=e20dd754d5964994878fd44815ac690u\u0026og=cos\u0026uipk=5\u0026platform=pc\u0026upsig=e7c6a3eb7904090ee54f538e8a5be530\u0026uparams=e,mid,deadline,gen,os,nbs,oi,trid,og,uipk,platform\u0026bvc=vod\u0026nettype=0\u0026bw=170409\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026orderid=2,3"
                    ],
                    "bandwidth": 170245,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "avc1.640033",
                    "width": 640,
                    "height": 360,
                    "frameRate": "30.000",
                    "frame_rate": "30.000",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-954",
                        "indexRange": "955-1406"
                    },
                    "segment_base": {
                        "initialization": "0-954",
                        "index_range": "955-1406"
                    },
                    "codecid": 7
                },
                {
                    "id": 16,
                    "baseUrl": "https://cn-hbyc-ct-01-05.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-100022.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026mid=38331014\u0026trid=0000e20dd754d5964994878fd44815ac690u\u0026gen=playurlv3\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026deadline=1768921888\u0026oi=605423425\u0026os=bcache\u0026og=cos\u0026upsig=0b2259ac082418fa252561d2212a7a1f\u0026uparams=e,mid,trid,gen,nbs,uipk,platform,deadline,oi,os,og\u0026cdnid=88805\u0026bvc=vod\u0026nettype=0\u0026bw=105933\u0026lrs=42\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=0,3",
                    "base_url": "https://cn-hbyc-ct-01-05.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-100022.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026mid=38331014\u0026trid=0000e20dd754d5964994878fd44815ac690u\u0026gen=playurlv3\u0026nbs=1\u0026uipk=5\u0026platform=pc\u0026deadline=1768921888\u0026oi=605423425\u0026os=bcache\u0026og=cos\u0026upsig=0b2259ac082418fa252561d2212a7a1f\u0026uparams=e,mid,trid,gen,nbs,uipk,platform,deadline,oi,os,og\u0026cdnid=88805\u0026bvc=vod\u0026nettype=0\u0026bw=105933\u0026lrs=42\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026buvid=\u0026build=0\u0026dl=0\u0026orderid=0,3",
                    "backupUrl": [
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-100022.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026os=cosbv\u0026og=cos\u0026trid=e20dd754d5964994878fd44815ac690u\u0026nbs=1\u0026mid=38331014\u0026oi=605423425\u0026uipk=5\u0026platform=pc\u0026deadline=1768921888\u0026gen=playurlv3\u0026upsig=b520fb3213cc68b776d6c80ad6c725ae\u0026uparams=e,os,og,trid,nbs,mid,oi,uipk,platform,deadline,gen\u0026bvc=vod\u0026nettype=0\u0026bw=105933\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026orderid=1,3",
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-100022.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026trid=e20dd754d5964994878fd44815ac690u\u0026platform=pc\u0026deadline=1768921888\u0026oi=605423425\u0026gen=playurlv3\u0026os=cosbv\u0026og=cos\u0026nbs=1\u0026uipk=5\u0026mid=38331014\u0026upsig=45869a9e7b2887d4a2db7891498543ed\u0026uparams=e,trid,platform,deadline,oi,gen,os,og,nbs,uipk,mid\u0026bvc=vod\u0026nettype=0\u0026bw=105933\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026orderid=2,3"
                    ],
                    "backup_url": [
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-100022.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026os=cosbv\u0026og=cos\u0026trid=e20dd754d5964994878fd44815ac690u\u0026nbs=1\u0026mid=38331014\u0026oi=605423425\u0026uipk=5\u0026platform=pc\u0026deadline=1768921888\u0026gen=playurlv3\u0026upsig=b520fb3213cc68b776d6c80ad6c725ae\u0026uparams=e,os,og,trid,nbs,mid,oi,uipk,platform,deadline,gen\u0026bvc=vod\u0026nettype=0\u0026bw=105933\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026orderid=1,3",
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/40/58/35306865840/35306865840-1-100022.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026trid=e20dd754d5964994878fd44815ac690u\u0026platform=pc\u0026deadline=1768921888\u0026oi=605423425\u0026gen=playurlv3\u0026os=cosbv\u0026og=cos\u0026nbs=1\u0026uipk=5\u0026mid=38331014\u0026upsig=45869a9e7b2887d4a2db7891498543ed\u0026uparams=e,trid,platform,deadline,oi,gen,os,og,nbs,uipk,mid\u0026bvc=vod\u0026nettype=0\u0026bw=105933\u0026buvid=\u0026build=0\u0026dl=0\u0026f=u_0_0\u0026qn_dyeid=bd71451926ffa1a0002987df696f7f00\u0026agrr=0\u0026orderid=2,3"
                    ],
                    "bandwidth": 105804,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "av01.0.00M.10.0.110.01.01.01.0",
                    "width": 640,
                    "height": 360,
                    "frameRate": "30.000",
                    "frame_rate": "30.000",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-1010",
                        "indexRange": "1011-1462"
                    },
                    "segment_base": {
                        "initialization": "0-1010",
                        "index_range": "1011-1462"
                    },
                    "codecid": 13
                }
            ],
            "audio": [
                {
                    "id": 30216,
                    "baseUrl": "https://upos-sz-mirrorzos.bilivideo.com/neoxcode/bb/9w/_000031h2ibmcia0ym2o1hkbfu8e9wbb-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026platform=pc\u0026mid=38331014\u0026nbs=1\u0026deadline=1768921888\u0026os=zosbv\u0026og=hw\u0026trid=9543b281ee9c4f23b7eb20e6520c75bN\u0026uipk=5\u0026oi=605423425\u0026gen=playurlv3\u0026upsig=61c3da9028e753debb845ff14bfdfc5a\u0026uparams=e,platform,mid,nbs,deadline,os,og,trid,uipk,oi,gen\u0026bvc=vod\u0026nettype=0\u0026bw=65723\u0026f=N_0_0\u0026dl=0\u0026iptv=\u0026agrr=0\u0026orderid=0,3",
                    "base_url": "https://upos-sz-mirrorzos.bilivideo.com/neoxcode/bb/9w/_000031h2ibmcia0ym2o1hkbfu8e9wbb-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026platform=pc\u0026mid=38331014\u0026nbs=1\u0026deadline=1768921888\u0026os=zosbv\u0026og=hw\u0026trid=9543b281ee9c4f23b7eb20e6520c75bN\u0026uipk=5\u0026oi=605423425\u0026gen=playurlv3\u0026upsig=61c3da9028e753debb845ff14bfdfc5a\u0026uparams=e,platform,mid,nbs,deadline,os,og,trid,uipk,oi,gen\u0026bvc=vod\u0026nettype=0\u0026bw=65723\u0026f=N_0_0\u0026dl=0\u0026iptv=\u0026agrr=0\u0026orderid=0,3",
                    "backupUrl": [
                        "https://upos-sz-mirrorzos.bilivideo.com/neoxcode/bb/9w/_000031h2ibmcia0ym2o1hkbfu8e9wbb-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026gen=playurlv3\u0026oi=605423425\u0026platform=pc\u0026nbs=1\u0026os=zosbv\u0026og=hw\u0026trid=9543b281ee9c4f23b7eb20e6520c75bN\u0026mid=38331014\u0026uipk=5\u0026deadline=1768921888\u0026upsig=8ec954270bab827008a6567cfd4aa73a\u0026uparams=e,gen,oi,platform,nbs,os,og,trid,mid,uipk,deadline\u0026bvc=vod\u0026nettype=0\u0026bw=65723\u0026dl=0\u0026iptv=\u0026agrr=0\u0026f=N_0_0\u0026orderid=1,3",
                        "https://upos-sz-mirror14b.bilivideo.com/neoxcode/bb/9w/_000031h2ibmcia0ym2o1hkbfu8e9wbb-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026os=14bbv\u0026oi=605423425\u0026platform=pc\u0026trid=9543b281ee9c4f23b7eb20e6520c75bN\u0026uipk=5\u0026deadline=1768921888\u0026gen=playurlv3\u0026og=hw\u0026mid=38331014\u0026nbs=1\u0026upsig=c79070c6fa0d721fc75836ec64a18995\u0026uparams=e,os,oi,platform,trid,uipk,deadline,gen,og,mid,nbs\u0026bvc=vod\u0026nettype=0\u0026bw=65723\u0026agrr=0\u0026f=N_0_0\u0026dl=0\u0026iptv=\u0026orderid=2,3"
                    ],
                    "backup_url": [
                        "https://upos-sz-mirrorzos.bilivideo.com/neoxcode/bb/9w/_000031h2ibmcia0ym2o1hkbfu8e9wbb-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026gen=playurlv3\u0026oi=605423425\u0026platform=pc\u0026nbs=1\u0026os=zosbv\u0026og=hw\u0026trid=9543b281ee9c4f23b7eb20e6520c75bN\u0026mid=38331014\u0026uipk=5\u0026deadline=1768921888\u0026upsig=8ec954270bab827008a6567cfd4aa73a\u0026uparams=e,gen,oi,platform,nbs,os,og,trid,mid,uipk,deadline\u0026bvc=vod\u0026nettype=0\u0026bw=65723\u0026dl=0\u0026iptv=\u0026agrr=0\u0026f=N_0_0\u0026orderid=1,3",
                        "https://upos-sz-mirror14b.bilivideo.com/neoxcode/bb/9w/_000031h2ibmcia0ym2o1hkbfu8e9wbb-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026os=14bbv\u0026oi=605423425\u0026platform=pc\u0026trid=9543b281ee9c4f23b7eb20e6520c75bN\u0026uipk=5\u0026deadline=1768921888\u0026gen=playurlv3\u0026og=hw\u0026mid=38331014\u0026nbs=1\u0026upsig=c79070c6fa0d721fc75836ec64a18995\u0026uparams=e,os,oi,platform,trid,uipk,deadline,gen,og,mid,nbs\u0026bvc=vod\u0026nettype=0\u0026bw=65723\u0026agrr=0\u0026f=N_0_0\u0026dl=0\u0026iptv=\u0026orderid=2,3"
                    ],
                    "bandwidth": 65625,
                    "mimeType": "audio/mp4",
                    "mime_type": "audio/mp4",
                    "codecs": "mp4a.40.2",
                    "width": 0,
                    "height": 0,
                    "frameRate": "",
                    "frame_rate": "",
                    "sar": "",
                    "startWithSap": 0,
                    "start_with_sap": 0,
                    "SegmentBase": {
                        "Initialization": "0-821",
                        "indexRange": "822-1273"
                    },
                    "segment_base": {
                        "initialization": "0-821",
                        "index_range": "822-1273"
                    },
                    "codecid": 0
                },
                {
                    "id": 30232,
                    "baseUrl": "https://upos-sz-estghw.bilivideo.com/neoxcode/bb/9w/_000031h2ibmcia0ym2o1hkbfu8e9wbb-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026nbs=1\u0026deadline=1768921888\u0026oi=605423425\u0026platform=pc\u0026trid=9543b281ee9c4f23b7eb20e6520c75bN\u0026mid=38331014\u0026gen=playurlv3\u0026os=estghw\u0026uipk=5\u0026og=hw\u0026upsig=211824fb8890123667f7aa37e286efea\u0026uparams=e,nbs,deadline,oi,platform,trid,mid,gen,os,uipk,og\u0026bvc=vod\u0026nettype=0\u0026bw=84945\u0026iptv=\u0026agrr=0\u0026f=N_0_0\u0026dl=0\u0026orderid=0,3",
                    "base_url": "https://upos-sz-estghw.bilivideo.com/neoxcode/bb/9w/_000031h2ibmcia0ym2o1hkbfu8e9wbb-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026nbs=1\u0026deadline=1768921888\u0026oi=605423425\u0026platform=pc\u0026trid=9543b281ee9c4f23b7eb20e6520c75bN\u0026mid=38331014\u0026gen=playurlv3\u0026os=estghw\u0026uipk=5\u0026og=hw\u0026upsig=211824fb8890123667f7aa37e286efea\u0026uparams=e,nbs,deadline,oi,platform,trid,mid,gen,os,uipk,og\u0026bvc=vod\u0026nettype=0\u0026bw=84945\u0026iptv=\u0026agrr=0\u0026f=N_0_0\u0026dl=0\u0026orderid=0,3",
                    "backupUrl": [
                        "https://upos-sz-mirror08c.bilivideo.com/neoxcode/bb/9w/_000031h2ibmcia0ym2o1hkbfu8e9wbb-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026os=08cbv\u0026nbs=1\u0026gen=playurlv3\u0026og=hw\u0026oi=605423425\u0026platform=pc\u0026trid=9543b281ee9c4f23b7eb20e6520c75bN\u0026mid=38331014\u0026uipk=5\u0026deadline=1768921888\u0026upsig=647abf350d884239d06e172a7125667d\u0026uparams=e,os,nbs,gen,og,oi,platform,trid,mid,uipk,deadline\u0026bvc=vod\u0026nettype=0\u0026bw=84945\u0026f=N_0_0\u0026dl=0\u0026iptv=\u0026agrr=0\u0026orderid=1,3",
                        "https://upos-sz-mirrorhwb.bilivideo.com/neoxcode/bb/9w/_000031h2ibmcia0ym2o1hkbfu8e9wbb-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026platform=pc\u0026trid=9543b281ee9c4f23b7eb20e6520c75bN\u0026mid=38331014\u0026nbs=1\u0026uipk=5\u0026og=hw\u0026oi=605423425\u0026deadline=1768921888\u0026gen=playurlv3\u0026os=hwbbv\u0026upsig=b34a257648941adb939b72f9e4d62eaf\u0026uparams=e,platform,trid,mid,nbs,uipk,og,oi,deadline,gen,os\u0026bvc=vod\u0026nettype=0\u0026bw=84945\u0026iptv=\u0026agrr=0\u0026f=N_0_0\u0026dl=0\u0026orderid=2,3"
                    ],
                    "backup_url": [
                        "https://upos-sz-mirror08c.bilivideo.com/neoxcode/bb/9w/_000031h2ibmcia0ym2o1hkbfu8e9wbb-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026os=08cbv\u0026nbs=1\u0026gen=playurlv3\u0026og=hw\u0026oi=605423425\u0026platform=pc\u0026trid=9543b281ee9c4f23b7eb20e6520c75bN\u0026mid=38331014\u0026uipk=5\u0026deadline=1768921888\u0026upsig=647abf350d884239d06e172a7125667d\u0026uparams=e,os,nbs,gen,og,oi,platform,trid,mid,uipk,deadline\u0026bvc=vod\u0026nettype=0\u0026bw=84945\u0026f=N_0_0\u0026dl=0\u0026iptv=\u0026agrr=0\u0026orderid=1,3",
                        "https://upos-sz-mirrorhwb.bilivideo.com/neoxcode/bb/9w/_000031h2ibmcia0ym2o1hkbfu8e9wbb-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026platform=pc\u0026trid=9543b281ee9c4f23b7eb20e6520c75bN\u0026mid=38331014\u0026nbs=1\u0026uipk=5\u0026og=hw\u0026oi=605423425\u0026deadline=1768921888\u0026gen=playurlv3\u0026os=hwbbv\u0026upsig=b34a257648941adb939b72f9e4d62eaf\u0026uparams=e,platform,trid,mid,nbs,uipk,og,oi,deadline,gen,os\u0026bvc=vod\u0026nettype=0\u0026bw=84945\u0026iptv=\u0026agrr=0\u0026f=N_0_0\u0026dl=0\u0026orderid=2,3"
                    ],
                    "bandwidth": 84835,
                    "mimeType": "audio/mp4",
                    "mime_type": "audio/mp4",
                    "codecs": "mp4a.40.2",
                    "width": 0,
                    "height": 0,
                    "frameRate": "",
                    "frame_rate": "",
                    "sar": "",
                    "startWithSap": 0,
                    "start_with_sap": 0,
                    "SegmentBase": {
                        "Initialization": "0-821",
                        "indexRange": "822-1273"
                    },
                    "segment_base": {
                        "initialization": "0-821",
                        "index_range": "822-1273"
                    },
                    "codecid": 0
                },
                {
                    "id": 30280,
                    "baseUrl": "https://upos-sz-estgcos.bilivideo.com/neoxcode/bb/9w/_000031h2ibmcia0ym2o1hkbfu8e9wbb-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026trid=9543b281ee9c4f23b7eb20e6520c75bN\u0026uipk=5\u0026os=estgcos\u0026platform=pc\u0026mid=38331014\u0026nbs=1\u0026deadline=1768921888\u0026gen=playurlv3\u0026og=cos\u0026oi=605423425\u0026upsig=cc453cbbfbd3ac754f34bca5ee177365\u0026uparams=e,trid,uipk,os,platform,mid,nbs,deadline,gen,og,oi\u0026bvc=vod\u0026nettype=0\u0026bw=137816\u0026dl=0\u0026iptv=\u0026agrr=0\u0026f=N_0_0\u0026orderid=0,3",
                    "base_url": "https://upos-sz-estgcos.bilivideo.com/neoxcode/bb/9w/_000031h2ibmcia0ym2o1hkbfu8e9wbb-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026trid=9543b281ee9c4f23b7eb20e6520c75bN\u0026uipk=5\u0026os=estgcos\u0026platform=pc\u0026mid=38331014\u0026nbs=1\u0026deadline=1768921888\u0026gen=playurlv3\u0026og=cos\u0026oi=605423425\u0026upsig=cc453cbbfbd3ac754f34bca5ee177365\u0026uparams=e,trid,uipk,os,platform,mid,nbs,deadline,gen,og,oi\u0026bvc=vod\u0026nettype=0\u0026bw=137816\u0026dl=0\u0026iptv=\u0026agrr=0\u0026f=N_0_0\u0026orderid=0,3",
                    "backupUrl": [
                        "https://upos-sz-mirrorcos.bilivideo.com/neoxcode/bb/9w/_000031h2ibmcia0ym2o1hkbfu8e9wbb-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026nbs=1\u0026uipk=5\u0026deadline=1768921888\u0026gen=playurlv3\u0026og=cos\u0026trid=9543b281ee9c4f23b7eb20e6520c75bN\u0026mid=38331014\u0026os=cosbv\u0026oi=605423425\u0026platform=pc\u0026upsig=29dedc9eeb4ce9ac312e522b938191db\u0026uparams=e,nbs,uipk,deadline,gen,og,trid,mid,os,oi,platform\u0026bvc=vod\u0026nettype=0\u0026bw=137816\u0026iptv=\u0026agrr=0\u0026f=N_0_0\u0026dl=0\u0026orderid=1,3",
                        "https://upos-sz-mirrorcosb.bilivideo.com/neoxcode/bb/9w/_000031h2ibmcia0ym2o1hkbfu8e9wbb-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026mid=38331014\u0026gen=playurlv3\u0026os=cosbbv\u0026nbs=1\u0026uipk=5\u0026deadline=1768921888\u0026oi=605423425\u0026platform=pc\u0026og=cos\u0026trid=9543b281ee9c4f23b7eb20e6520c75bN\u0026upsig=18818c6927fdab510b78de98435c4718\u0026uparams=e,mid,gen,os,nbs,uipk,deadline,oi,platform,og,trid\u0026bvc=vod\u0026nettype=0\u0026bw=137816\u0026iptv=\u0026agrr=0\u0026f=N_0_0\u0026dl=0\u0026orderid=2,3"
                    ],
                    "backup_url": [
                        "https://upos-sz-mirrorcos.bilivideo.com/neoxcode/bb/9w/_000031h2ibmcia0ym2o1hkbfu8e9wbb-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026nbs=1\u0026uipk=5\u0026deadline=1768921888\u0026gen=playurlv3\u0026og=cos\u0026trid=9543b281ee9c4f23b7eb20e6520c75bN\u0026mid=38331014\u0026os=cosbv\u0026oi=605423425\u0026platform=pc\u0026upsig=29dedc9eeb4ce9ac312e522b938191db\u0026uparams=e,nbs,uipk,deadline,gen,og,trid,mid,os,oi,platform\u0026bvc=vod\u0026nettype=0\u0026bw=137816\u0026iptv=\u0026agrr=0\u0026f=N_0_0\u0026dl=0\u0026orderid=1,3",
                        "https://upos-sz-mirrorcosb.bilivideo.com/neoxcode/bb/9w/_000031h2ibmcia0ym2o1hkbfu8e9wbb-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=\u0026mid=38331014\u0026gen=playurlv3\u0026os=cosbbv\u0026nbs=1\u0026uipk=5\u0026deadline=1768921888\u0026oi=605423425\u0026platform=pc\u0026og=cos\u0026trid=9543b281ee9c4f23b7eb20e6520c75bN\u0026upsig=18818c6927fdab510b78de98435c4718\u0026uparams=e,mid,gen,os,nbs,uipk,deadline,oi,platform,og,trid\u0026bvc=vod\u0026nettype=0\u0026bw=137816\u0026iptv=\u0026agrr=0\u0026f=N_0_0\u0026dl=0\u0026orderid=2,3"
                    ],
                    "bandwidth": 137674,
                    "mimeType": "audio/mp4",
                    "mime_type": "audio/mp4",
                    "codecs": "mp4a.40.2",
                    "width": 0,
                    "height": 0,
                    "frameRate": "",
                    "frame_rate": "",
                    "sar": "",
                    "startWithSap": 0,
                    "start_with_sap": 0,
                    "SegmentBase": {
                        "Initialization": "0-821",
                        "indexRange": "822-1273"
                    },
                    "segment_base": {
                        "initialization": "0-821",
                        "index_range": "822-1273"
                    },
                    "codecid": 0
                }
            ],
            "dolby": {
                "type": 0,
                "audio": null
            },
            "flac": null
        },
        "support_formats": [
            {
                "quality": 112,
                "format": "hdflv2",
                "new_description": "1080P 高码率",
                "display_desc": "1080P",
                "superscript": "高码率",
                "codecs": [
                    "av01.0.00M.10.0.110.01.01.01.0",
                    "avc1.640033",
                    "hev1.1.6.L150.90"
                ],
                "can_watch_qn_reason": 3,
                "limit_watch_reason": 0,
                "report": {
                    "EXT_VIP_REPORT_PARAMS": ""
                }
            },
            {
                "quality": 80,
                "format": "flv",
                "new_description": "1080P 高清",
                "display_desc": "1080P",
                "superscript": "",
                "codecs": [
                    "av01.0.00M.10.0.110.01.01.01.0",
                    "avc1.640033",
                    "hev1.1.6.L150.90"
                ],
                "can_watch_qn_reason": 0,
                "limit_watch_reason": 0,
                "report": {}
            },
            {
                "quality": 64,
                "format": "flv720",
                "new_description": "720P 准高清",
                "display_desc": "720P",
                "superscript": "",
                "codecs": [
                    "av01.0.00M.10.0.110.01.01.01.0",
                    "avc1.640033",
                    "hev1.1.6.L120.90"
                ],
                "can_watch_qn_reason": 0,
                "limit_watch_reason": 0,
                "report": {}
            },
            {
                "quality": 32,
                "format": "flv480",
                "new_description": "480P 标清",
                "display_desc": "480P",
                "superscript": "",
                "codecs": [
                    "av01.0.00M.10.0.110.01.01.01.0",
                    "avc1.640033",
                    "hev1.1.6.L120.90"
                ],
                "can_watch_qn_reason": 0,
                "limit_watch_reason": 0,
                "report": {}
            },
            {
                "quality": 16,
                "format": "mp4",
                "new_description": "360P 流畅",
                "display_desc": "360P",
                "superscript": "",
                "codecs": [
                    "av01.0.00M.10.0.110.01.01.01.0",
                    "avc1.640033",
                    "hev1.1.6.L120.90"
                ],
                "can_watch_qn_reason": 0,
                "limit_watch_reason": 0,
                "report": {}
            }
        ],
        "high_format": null,
        "last_play_time": 5000,
        "last_play_cid": 35306865840,
        "view_info": null,
        "play_conf": {
            "is_new_description": false
        },
        "cur_language": "en",
        "language": {
            "support": true,
            "items": [
                {
                    "lang": "en",
                    "title": "English",
                    "subtitle_lang": "",
                    "video_detext": false,
                    "video_mouth_shape_change": false,
                    "production_type": 2
                },
                {
                    "lang": "ja",
                    "title": "日本語",
                    "subtitle_lang": "",
                    "video_detext": false,
                    "video_mouth_shape_change": false,
                    "production_type": 2
                }
            ],
            "open_toast": "原声翻译开启中，请稍候",
            "close_toast": "原声翻译关闭中，请稍候",
            "default_title": "翻译",
            "list_title": "AI原声翻译（Beta）",
            "bubble": {
                "title": "试试AI原声翻译",
                "type": 2
            }
        },
        "cur_production_type": 2,
        "auto_qn_resp": {
            "dyeid": "bd71451926ffa1a0002987df696f7f00"
        }
    }
}
```

</details>

## 视频取流说明

关于拉流：

1. MP4 / ~~FLV~~ 格式仅需拉视频流，DASH 格式需同时拉视频与伴音流
2. 如 DASH 格式需要杜比或无损的伴音，需要取对应`dolby`或`flac`字段中的流
3. **注意 Unicode 转义符**

~~关于分段：~~

~~FLV 格式可能产生分段情况，将`$.data.durl[1-n].url`或`$.data.durl[1-n].backup_url[0]`中的内容作为 URL 进行 GET 请求进行分段播放，如需下载需要合并~~（FLV 格式已下线，不会存在分段现象）

关于鉴权：

1. WEB 端取流需要验证防盗链，即`referer`为 `.bilibili.com`域名下且 UA 不能为空
2. APP 端也需要验证防盗链，即 UA 需要含有`Mozilla/5.0 BiliDroid/*.*.* (bbcallen@gmail.com)`（*为版本）
3. 如`referer`或 UA 错误的情况会被判定为盗链，返回`403 Forbidden`故无法取流
4. 若传`platform=html5`参数取流，则不会进行防盗链验证，即可通过 HTML 标签`<video>`播放

**实例：**

下载 ~~FLV~~ / MP4 格式视频：

```shell
wget 'http://upos-sz-mirrorhw.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-112.flv?e=ig8euxZM2rNcNbhMnwhVhwdlhzK3hzdVhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1589565412&gen=playurl&os=hwbv&oi=606631998&trid=e0fa5f9a7610440a871279a28fae85aau&platform=pc&upsig=5f469cb4c190ed54b89bd40cc37eddff&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&logo=80000000' \
    -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
    --referer 'https://www.bilibili.com' \
    -O 'Download_video.flv'
```

下载 DASH 格式视频：

```bash
# 下载视频流
wget 'https://cn-jxjj-ct-01-01.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30125.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674137769&gen=playurlv2&os=bcache&oi=606633952&trid=0000524e9cc80dea41dca72b59782270b5d3u&mid=293793435&platform=pc&upsig=c4206c80b1d0dc18c0545a7758d56eee&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&cdnid=4261&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=1726751&logo=80000000' \
    -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
    --referer 'https://www.bilibili.com' \
    -O 'video.m4s'
# 下载伴音流
wget 'https://xy125x75x230x185xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674137769&gen=playurlv2&os=mcdn&oi=606633952&trid=0000524e9cc80dea41dca72b59782270b5d3u&mid=293793435&platform=pc&upsig=e5feff4626de4c6fd2ed9c6061c324a0&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1002708&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=41220&logo=A0000001' \
    -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
    --referer 'https://www.bilibili.com' \
    -O 'audio.m4s'
# 进行混流
ffmpeg -i video.m4s -i audio.m4s -c:v copy -c:a copy -f mp4 Download_video.mp4
```

