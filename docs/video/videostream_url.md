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
| 64   | 720P 高清      | WEB 端默认值<br />B站前端需要登录才能选择，但是直接发送请求可以不登录就拿到 720P 的取流地址<br />**无 720P 时则为 720P60** |
| 74   | 720P60 高帧率  | 登录认证                                                     |
| 80   | 1080P 高清     | TV 端与 APP 端默认值<br />登录认证                           |
| 112  | 1080P+ 高码率  | 大会员认证                                                   |
| 116  | 1080P60 高帧率 | 大会员认证                                                   |
| 120  | 4K 超清        | 需要`fnval&128=128`且`fourk=1`<br />大会员认证               |
| 125  | HDR 真彩色     | 仅支持 DASH 格式<br />需要`fnval&64=64`<br />大会员认证      |
| 126  | 杜比视界       | 仅支持 DASH 格式<br />需要`fnval&512=512`<br />大会员认证    |
| 127  | 8K 超高清      | 仅支持 DASH 格式<br />需要`fnval&1024=1024`<br />大会员认证  |

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
| qn     | num  | 视频清晰度选择   | 非必要       | 未登录默认 32（480P），登录后默认 64（720P）<br />含义见 [上表](#qn视频清晰度标识)<br />**DASH 格式时无效** |
| fnval  | num  | 视频流格式标识 | 非必要       | 默认值为`1`（MP4 格式）<br />含义见 [上表](#fnval视频流格式标识) |
| fnver  | num  | 0                | 非必要       |                                                       |
| fourk  | num  | 是否允许 4K 视频 | 非必要       | 画质最高 1080P：0（默认）<br />画质最高 4K：1       |
| session  | str  |    | 非必要       | 从视频播放页的 HTML 中设置 window.\_\_playinfo\_\_ 处获取，或者通过 buvid3 +  当前UNIX毫秒级时间戳 经过md5获取     |
| otype  | str  |    | 非必要       | 固定为`json`           |
| type  | str  |    | 非必要       | 目前为空             |
| platform | str |    | 非必要 | pc：web播放（默认值，视频流存在 referer鉴权）<br />html5：移动端 HTML5 播放（仅支持 MP4 格式，无 referer 鉴权可以直接使用`video`标签播放） |
| high_quality | num | 是否高画质 | 非必要 | platform=html5时，此值为1可使画质为1080p |

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
    --data-urlencode 'qn=0' \
    --data-urlencode 'fnval=80' \
    --data-urlencode 'fnver=0' \
    --data-urlencode 'fourk=1' \
    -b 'SESSDATA=xxx'
```

 bvid 方式：

```shell
curl -G 'https://api.bilibili.com/x/player/playurl' \
    --data-urlencode 'bvid=BV1rp4y1e745' \
    --data-urlencode 'cid=244954665' \
    --data-urlencode 'qn=0' \
    --data-urlencode 'fnval=80' \
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
        "format": "flv720_p60",
        "timelength": 346410,
        "accept_format": "hdflv2,hdflv2,flv_p60,flv,flv720_p60,flv480,mp4",
        "accept_description": [
            "真彩 HDR",
            "超清 4K",
            "高清 1080P60",
            "高清 1080P",
            "高清 720P60",
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
                    "id": 125,
                    "baseUrl": "https://cn-jxjj-ct-01-01.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30125.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=bcache&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=f144133cabdfca56ae3cb14e208aebe1&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&cdnid=4261&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=1726751&logo=80000000",
                    "base_url": "https://cn-jxjj-ct-01-01.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30125.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=bcache&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=f144133cabdfca56ae3cb14e208aebe1&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&cdnid=4261&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=1726751&logo=80000000",
                    "backupUrl": [
                        "https://upos-sz-estgoss.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30125.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=upos&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=adf8ac03ae8aaf0e18c0f4c3f0ff267c&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=1726751&logo=40000000",
                        "https://upos-sz-mirrorali.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30125.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=alibv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=cffdcf6daf7f55c58bdb97737694363f&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=1726751&logo=40000000"
                    ],
                    "backup_url": [
                        "https://upos-sz-estgoss.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30125.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=upos&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=adf8ac03ae8aaf0e18c0f4c3f0ff267c&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=1726751&logo=40000000",
                        "https://upos-sz-mirrorali.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30125.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=alibv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=cffdcf6daf7f55c58bdb97737694363f&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=1726751&logo=40000000"
                    ],
                    "bandwidth": 13799375,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "hev1.2.4.L156.90",
                    "width": 3840,
                    "height": 1920,
                    "frameRate": "125",
                    "frame_rate": "125",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-1066",
                        "indexRange": "1067-1926"
                    },
                    "segment_base": {
                        "initialization": "0-1066",
                        "index_range": "1067-1926"
                    },
                    "codecid": 12
                },
                {
                    "id": 120,
                    "baseUrl": "https://cn-jxjj-ct-01-01.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30120.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=bcache&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=704c0a56e544a9e5ba42813960780304&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&cdnid=4261&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=2124046&logo=80000000",
                    "base_url": "https://cn-jxjj-ct-01-01.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30120.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=bcache&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=704c0a56e544a9e5ba42813960780304&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&cdnid=4261&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=2124046&logo=80000000",
                    "backupUrl": [
                        "https://upos-sz-mirrorcoso1.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30120.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=coso1bv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=56ddf7293e93985ff0abdc8de74ddbea&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=2124046&logo=40000000",
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30120.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=cosbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=e35a421cf5209011191984cab0336ade&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=2124046&logo=40000000"
                    ],
                    "backup_url": [
                        "https://upos-sz-mirrorcoso1.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30120.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=coso1bv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=56ddf7293e93985ff0abdc8de74ddbea&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=2124046&logo=40000000",
                        "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30120.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=cosbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=e35a421cf5209011191984cab0336ade&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=2124046&logo=40000000"
                    ],
                    "bandwidth": 16974415,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "avc1.640034",
                    "width": 3840,
                    "height": 1920,
                    "frameRate": "111.111",
                    "frame_rate": "111.111",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-995",
                        "indexRange": "996-1855"
                    },
                    "segment_base": {
                        "initialization": "0-995",
                        "index_range": "996-1855"
                    },
                    "codecid": 7
                },
                {
                    "id": 120,
                    "baseUrl": "https://xy125x75x230x185xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9x2-1-30121.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=mcdn&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=3d82b0f3589f2bde1d020c19a050aca8&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1002708&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=594581&logo=A0000001",
                    "base_url": "https://xy125x75x230x185xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9x2-1-30121.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=mcdn&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=3d82b0f3589f2bde1d020c19a050aca8&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1002708&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=594581&logo=A0000001",
                    "backupUrl": [
                        "https://upos-sz-estgoss.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9x2-1-30121.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=upos&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=05403d92efb1f978bf95b03375760ee2&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=594581&logo=40000000",
                        "https://upos-sz-mirrorali.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9x2-1-30121.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=alibv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=21828db787701f87944fd56a27b0ed06&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=594581&logo=40000000"
                    ],
                    "backup_url": [
                        "https://upos-sz-estgoss.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9x2-1-30121.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=upos&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=05403d92efb1f978bf95b03375760ee2&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=594581&logo=40000000",
                        "https://upos-sz-mirrorali.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9x2-1-30121.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=alibv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=21828db787701f87944fd56a27b0ed06&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=594581&logo=40000000"
                    ],
                    "bandwidth": 4751624,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "hev1.1.6.L156.90",
                    "width": 3840,
                    "height": 1920,
                    "frameRate": "111.111",
                    "frame_rate": "111.111",
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
                    "id": 116,
                    "baseUrl": "https://xy125x75x230x185xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30116.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=mcdn&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=4437f5c280e855acb05fbbc32f895574&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1002708&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=651301&logo=A0000001",
                    "base_url": "https://xy125x75x230x185xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30116.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=mcdn&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=4437f5c280e855acb05fbbc32f895574&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1002708&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=651301&logo=A0000001",
                    "backupUrl": [
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30116.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=874e438aebbead2b5a379f6c57d5501d&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=651301&logo=40000000",
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30116.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=874e438aebbead2b5a379f6c57d5501d&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=651301&logo=40000000"
                    ],
                    "backup_url": [
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30116.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=874e438aebbead2b5a379f6c57d5501d&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=651301&logo=40000000",
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30116.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=874e438aebbead2b5a379f6c57d5501d&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=651301&logo=40000000"
                    ],
                    "bandwidth": 5204909,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "avc1.640032",
                    "width": 2160,
                    "height": 1080,
                    "frameRate": "62.500",
                    "frame_rate": "62.500",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-996",
                        "indexRange": "997-1856"
                    },
                    "segment_base": {
                        "initialization": "0-996",
                        "index_range": "997-1856"
                    },
                    "codecid": 7
                },
                {
                    "id": 116,
                    "baseUrl": "https://xy125x75x230x185xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9x2-1-30106.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=mcdn&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=12dc56f1d7f019826fb120c6e0be1670&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1002708&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=129647&logo=A0000001",
                    "base_url": "https://xy125x75x230x185xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9x2-1-30106.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=mcdn&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=12dc56f1d7f019826fb120c6e0be1670&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1002708&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=129647&logo=A0000001",
                    "backupUrl": [
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9x2-1-30106.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=bc2f8140b3ef558b5982b71f2cef2c47&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=129647&logo=40000000",
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9x2-1-30106.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=bc2f8140b3ef558b5982b71f2cef2c47&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=129647&logo=40000000"
                    ],
                    "backup_url": [
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9x2-1-30106.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=bc2f8140b3ef558b5982b71f2cef2c47&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=129647&logo=40000000",
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9x2-1-30106.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=bc2f8140b3ef558b5982b71f2cef2c47&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=129647&logo=40000000"
                    ],
                    "bandwidth": 1036030,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "hev1.1.6.L150.90",
                    "width": 2160,
                    "height": 1080,
                    "frameRate": "58.824",
                    "frame_rate": "58.824",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-1158",
                        "indexRange": "1159-2018"
                    },
                    "segment_base": {
                        "initialization": "0-1158",
                        "index_range": "1159-2018"
                    },
                    "codecid": 12
                },
                {
                    "id": 80,
                    "baseUrl": "https://xy125x75x230x185xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30080.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=mcdn&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=377af91003514e9563155a4c87d21fca&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1002708&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=329117&logo=A0000001",
                    "base_url": "https://xy125x75x230x185xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30080.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=mcdn&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=377af91003514e9563155a4c87d21fca&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1002708&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=329117&logo=A0000001",
                    "backupUrl": [
                        "https://upos-sz-estgoss.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30080.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=upos&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=aa662c302ff974b8a7ff24f48688465a&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=329117&logo=40000000",
                        "https://upos-sz-mirrorali.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30080.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=alibv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=c652d684ccbccee35432aa2c77f551d3&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=329117&logo=40000000"
                    ],
                    "backup_url": [
                        "https://upos-sz-estgoss.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30080.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=upos&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=aa662c302ff974b8a7ff24f48688465a&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=329117&logo=40000000",
                        "https://upos-sz-mirrorali.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30080.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=alibv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=c652d684ccbccee35432aa2c77f551d3&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=329117&logo=40000000"
                    ],
                    "bandwidth": 2630160,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "avc1.640032",
                    "width": 2160,
                    "height": 1080,
                    "frameRate": "29.412",
                    "frame_rate": "29.412",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-996",
                        "indexRange": "997-1856"
                    },
                    "segment_base": {
                        "initialization": "0-996",
                        "index_range": "997-1856"
                    },
                    "codecid": 7
                },
                {
                    "id": 80,
                    "baseUrl": "https://xy125x75x230x185xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9x2-1-30077.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=mcdn&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=64cffd4fb74b13f6bc0a2467a151e998&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1002708&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=120853&logo=A0000001",
                    "base_url": "https://xy125x75x230x185xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9x2-1-30077.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=mcdn&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=64cffd4fb74b13f6bc0a2467a151e998&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1002708&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=120853&logo=A0000001",
                    "backupUrl": [
                        "https://upos-sz-estgoss.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9x2-1-30077.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=upos&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=d02def5348a0cc0c76eadf6c323c0cb2&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=120853&logo=40000000",
                        "https://upos-sz-mirrorali.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9x2-1-30077.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=alibv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=da259f0651e828005700c6cc57d9b4b7&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=120853&logo=40000000"
                    ],
                    "backup_url": [
                        "https://upos-sz-estgoss.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9x2-1-30077.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=upos&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=d02def5348a0cc0c76eadf6c323c0cb2&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=120853&logo=40000000",
                        "https://upos-sz-mirrorali.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9x2-1-30077.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=alibv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=da259f0651e828005700c6cc57d9b4b7&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=120853&logo=40000000"
                    ],
                    "bandwidth": 965710,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "hev1.1.6.L150.90",
                    "width": 2160,
                    "height": 1080,
                    "frameRate": "30.303",
                    "frame_rate": "30.303",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-1158",
                        "indexRange": "1159-2018"
                    },
                    "segment_base": {
                        "initialization": "0-1158",
                        "index_range": "1159-2018"
                    },
                    "codecid": 12
                },
                {
                    "id": 64,
                    "baseUrl": "https://xy125x75x230x185xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30074.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=mcdn&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=046aefbf748f9a2cfb1f6319e35952ae&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1002708&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=219847&logo=A0000001",
                    "base_url": "https://xy125x75x230x185xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30074.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=mcdn&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=046aefbf748f9a2cfb1f6319e35952ae&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1002708&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=219847&logo=A0000001",
                    "backupUrl": [
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30074.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=028507c6f34713e9300e367ce0ef574f&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=219847&logo=40000000",
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30074.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=028507c6f34713e9300e367ce0ef574f&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=219847&logo=40000000"
                    ],
                    "backup_url": [
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30074.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=028507c6f34713e9300e367ce0ef574f&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=219847&logo=40000000",
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30074.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=028507c6f34713e9300e367ce0ef574f&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=219847&logo=40000000"
                    ],
                    "bandwidth": 1756920,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "avc1.640028",
                    "width": 1440,
                    "height": 720,
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
                    "id": 64,
                    "baseUrl": "https://xy125x75x230x185xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9x2-1-30076.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=mcdn&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=764e4d4e7bc28c908a7da3ad741b2b53&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1002708&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=126306&logo=A0000001",
                    "base_url": "https://xy125x75x230x185xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9x2-1-30076.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=mcdn&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=764e4d4e7bc28c908a7da3ad741b2b53&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1002708&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=126306&logo=A0000001",
                    "backupUrl": [
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9x2-1-30076.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=1702a3c8c1e1a4d309e39b196465e903&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=126306&logo=40000000",
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9x2-1-30076.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=1702a3c8c1e1a4d309e39b196465e903&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=126306&logo=40000000"
                    ],
                    "backup_url": [
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9x2-1-30076.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=1702a3c8c1e1a4d309e39b196465e903&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=126306&logo=40000000",
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9x2-1-30076.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=1702a3c8c1e1a4d309e39b196465e903&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=126306&logo=40000000"
                    ],
                    "bandwidth": 1009331,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "hev1.1.6.L120.90",
                    "width": 1440,
                    "height": 720,
                    "frameRate": "58.824",
                    "frame_rate": "58.824",
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
                    "id": 32,
                    "baseUrl": "https://xy125x75x230x185xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30032.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=mcdn&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=e251d9fa3d4369ace719b082eba78280&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1002708&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=98889&logo=A0000001",
                    "base_url": "https://xy125x75x230x185xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30032.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=mcdn&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=e251d9fa3d4369ace719b082eba78280&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1002708&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=98889&logo=A0000001",
                    "backupUrl": [
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30032.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=5d48dd328f14b134c11d278c7d901794&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=98889&logo=40000000",
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30032.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=5d48dd328f14b134c11d278c7d901794&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=98889&logo=40000000"
                    ],
                    "backup_url": [
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30032.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=5d48dd328f14b134c11d278c7d901794&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=98889&logo=40000000",
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30032.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=5d48dd328f14b134c11d278c7d901794&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=98889&logo=40000000"
                    ],
                    "bandwidth": 790280,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "avc1.64001F",
                    "width": 960,
                    "height": 480,
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
                    "id": 32,
                    "baseUrl": "https://xy125x75x230x185xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9x2-1-30033.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=mcdn&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=6b4c4b1192085276a29f276a1acd1bc9&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1002708&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=36592&logo=A0000001",
                    "base_url": "https://xy125x75x230x185xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9x2-1-30033.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=mcdn&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=6b4c4b1192085276a29f276a1acd1bc9&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1002708&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=36592&logo=A0000001",
                    "backupUrl": [
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9x2-1-30033.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=ade18a577cc6f16f39396e9275939846&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=36592&logo=40000000",
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9x2-1-30033.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=ade18a577cc6f16f39396e9275939846&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=36592&logo=40000000"
                    ],
                    "backup_url": [
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9x2-1-30033.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=ade18a577cc6f16f39396e9275939846&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=36592&logo=40000000",
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9x2-1-30033.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=ade18a577cc6f16f39396e9275939846&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=36592&logo=40000000"
                    ],
                    "bandwidth": 292405,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "hev1.1.6.L120.90",
                    "width": 960,
                    "height": 480,
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
                    "baseUrl": "https://xy125x75x230x185xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9x2-1-30011.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=mcdn&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=c6bf79e46e41fbf9e0792028448796b2&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1002708&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=25561&logo=A0000001",
                    "base_url": "https://xy125x75x230x185xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9x2-1-30011.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=mcdn&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=c6bf79e46e41fbf9e0792028448796b2&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1002708&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=25561&logo=A0000001",
                    "backupUrl": [
                        "https://upos-sz-estgoss.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9x2-1-30011.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=upos&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=c2ac7e3dfb9ea6506b0f7b6abee76b21&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=25561&logo=40000000",
                        "https://upos-sz-mirrorali.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9x2-1-30011.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=alibv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=25d5ffbb285c281922818dfce1c46351&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=25561&logo=40000000"
                    ],
                    "backup_url": [
                        "https://upos-sz-estgoss.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9x2-1-30011.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=upos&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=c2ac7e3dfb9ea6506b0f7b6abee76b21&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=25561&logo=40000000",
                        "https://upos-sz-mirrorali.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9x2-1-30011.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=alibv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=25d5ffbb285c281922818dfce1c46351&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=25561&logo=40000000"
                    ],
                    "bandwidth": 204255,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "hev1.1.6.L120.90",
                    "width": 720,
                    "height": 360,
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
                    "baseUrl": "https://xy125x75x230x185xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30016.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=mcdn&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=84e198e866f75a6eda22a54e869c9c19&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1002708&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=44249&logo=A0000001",
                    "base_url": "https://xy125x75x230x185xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30016.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=mcdn&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=84e198e866f75a6eda22a54e869c9c19&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1002708&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=44249&logo=A0000001",
                    "backupUrl": [
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30016.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=3fc57769d6f587c3c62db6406b2dea71&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=44249&logo=40000000",
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30016.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=3fc57769d6f587c3c62db6406b2dea71&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=44249&logo=40000000"
                    ],
                    "backup_url": [
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30016.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=3fc57769d6f587c3c62db6406b2dea71&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=44249&logo=40000000",
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30016.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=3fc57769d6f587c3c62db6406b2dea71&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=44249&logo=40000000"
                    ],
                    "bandwidth": 353623,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "avc1.64001E",
                    "width": 720,
                    "height": 360,
                    "frameRate": "29.412",
                    "frame_rate": "29.412",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-1003",
                        "indexRange": "1004-1863"
                    },
                    "segment_base": {
                        "initialization": "0-1003",
                        "index_range": "1004-1863"
                    },
                    "codecid": 7
                }
            ],
            "audio": [
                {
                    "id": 30280,
                    "baseUrl": "https://xy125x75x230x185xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=mcdn&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=e983f8b4dc35aa8469dc0742d0371e19&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1002708&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=41220&logo=A0000001",
                    "base_url": "https://xy125x75x230x185xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=mcdn&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=e983f8b4dc35aa8469dc0742d0371e19&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1002708&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=41220&logo=A0000001",
                    "backupUrl": [
                        "https://upos-sz-estgoss.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=upos&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=71b057cb7399c7f7e94932446696c479&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=41220&logo=40000000",
                        "https://upos-sz-mirrorali.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=alibv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=e876c0a1b414c68f1e8a8c986e9de72e&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=41220&logo=40000000"
                    ],
                    "backup_url": [
                        "https://upos-sz-estgoss.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=upos&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=71b057cb7399c7f7e94932446696c479&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=41220&logo=40000000",
                        "https://upos-sz-mirrorali.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=alibv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=e876c0a1b414c68f1e8a8c986e9de72e&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=41220&logo=40000000"
                    ],
                    "bandwidth": 329376,
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
                        "Initialization": "0-907",
                        "indexRange": "908-1779"
                    },
                    "segment_base": {
                        "initialization": "0-907",
                        "index_range": "908-1779"
                    },
                    "codecid": 0
                },
                {
                    "id": 30216,
                    "baseUrl": "https://xy125x75x230x185xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=mcdn&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=c61129748923407b50d98357e2925ec5&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1002708&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=8419&logo=A0000001",
                    "base_url": "https://xy125x75x230x185xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=mcdn&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=c61129748923407b50d98357e2925ec5&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1002708&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=8419&logo=A0000001",
                    "backupUrl": [
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=733c928a078ae018899ebf9de87eecf4&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=8419&logo=40000000",
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=733c928a078ae018899ebf9de87eecf4&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=8419&logo=40000000"
                    ],
                    "backup_url": [
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=733c928a078ae018899ebf9de87eecf4&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=8419&logo=40000000",
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=733c928a078ae018899ebf9de87eecf4&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=8419&logo=40000000"
                    ],
                    "bandwidth": 67279,
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
                        "Initialization": "0-941",
                        "indexRange": "942-1813"
                    },
                    "segment_base": {
                        "initialization": "0-941",
                        "index_range": "942-1813"
                    },
                    "codecid": 0
                },
                {
                    "id": 30232,
                    "baseUrl": "https://xy125x75x230x185xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=mcdn&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=6682acc0dc48f4ac7d397861c537feab&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1002708&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=16615&logo=A0000001",
                    "base_url": "https://xy125x75x230x185xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=mcdn&oi=606633952&trid=000077eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=6682acc0dc48f4ac7d397861c537feab&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1002708&bvc=vod&nettype=0&orderid=0,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=16615&logo=A0000001",
                    "backupUrl": [
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=80a5d0e507dddbe424c2394593bd9324&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=16615&logo=40000000",
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=80a5d0e507dddbe424c2394593bd9324&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=16615&logo=40000000"
                    ],
                    "backup_url": [
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=80a5d0e507dddbe424c2394593bd9324&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=16615&logo=40000000",
                        "https://upos-sz-mirror08ct.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1674133321&gen=playurlv2&os=08ctbv&oi=606633952&trid=77eca41ddc4a4dc6926e971dfacc597cu&mid=293793435&platform=pc&upsig=80a5d0e507dddbe424c2394593bd9324&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&buvid=EC1BD8EA-88F6-4951-BF27-2CFE3450C78F167646infoc&build=0&agrr=0&bw=16615&logo=40000000"
                    ],
                    "bandwidth": 132768,
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
                        "Initialization": "0-907",
                        "indexRange": "908-1779"
                    },
                    "segment_base": {
                        "initialization": "0-907",
                        "index_range": "908-1779"
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
                "format": "flv720_p60",
                "new_description": "720P 60帧",
                "display_desc": "720P",
                "superscript": "60帧",
                "codecs": [
                    "avc1.640028",
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
        "last_play_cid": 0
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

