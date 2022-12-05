# 视频流URL

<img src="/imgs/download.svg" width="100" height="100"/>

B站的视频为http流媒体，需要对应的api以视频id获取取流url，并进行取流

- [qn视频清晰度标识](#qn视频清晰度标识)
- [fnver视频流版本标识](#fnver视频流版本标识)
- [fnval视频流格式标识](#fnval视频流格式标识)
- [视频伴音音质代码](#视频伴音音质代码)
- [获取视频流URL（web端）](#获取视频流URLweb端)
- [视频的取流（web端及APP端）](#视频的取流web端及APP端)

---

## qn视频清晰度标识

**注：该值在dash模式且非下载模式时无效**

| 值   | 含义           | 备注                                                         |
| ---- | -------------- | ------------------------------------------------------------ |
| 6    | 240P 极速      | 仅mp4方式支持                                                |
| 16   | 360P 流畅      |                                                              |
| 32   | 480P 清晰      |                                                              |
| 64   | 720P 高清      | web端默认值<br />B站前端需要登录才能选择，但是直接发送请求可以不登录就拿到720P的取流地址<br />**无720P时则为720P60** |
| 74   | 720P60 高帧率  | 需要认证登录账号                                             |
| 80   | 1080P 高清     | TV端与APP端默认值<br />需要认证登录账号                      |
| 112  | 1080P+ 高码率  | 大多情况需求认证大会员账号                                   |
| 116  | 1080P60 高帧率 | 大多情况需求认证大会员账号                                   |
| 120  | 4K 超清        | 需要`fnval&128=128`且`fourk=1`<br />大多情况需求认证大会员账号 |
| 125  | HDR 真彩色     | 仅支持dash方式<br />需要`fnval&64=64`<br />大多情况需求认证大会员账号 |
| 126  | 杜比视界       | 仅支持dash方式<br />需要`fnval&512=512`<br />大多情况需求认证大会员账号 |
| 127  | 8K 超高清      | 仅支持dash方式<br />需要`fnval&1024=1024`<br />大多情况需求认证大会员账号 |

例如：请求1080P+的视频，则`qn=112`

## fnver视频流版本标识

目前该值恒为0，即`fnver=0`

## fnval视频流格式标识

该代码为二进制属性位，如需组合功能需要使用`OR`运算结合一下数值

| 值   | 含义               | 备注                                                         |
| ---- | ------------------ | ------------------------------------------------------------ |
| 0    | flv格式            | 仅H.264编码<br />部分老视频存在分段现象<br />与mp4格式及dash格式互斥 |
| 1    | mp4格式            | 仅H.264编码<br />不存在视频分段<br />与flv格式及dash格式互斥 |
| 16   | dash格式           | H.264编码或H.265编码<br />部分老视频的清晰度上限低于flv格式<br />与mp4格式及flv格式互斥 |
| 64   | 是否需求 杜比世界（HDR） 视频  | 必须为dash格式<br />需要`qn=125`<br />大多情况需求认证大会员账号 |
| 128  | 是否需求 4K 分辨率 | 该值与`fourk`字段协同作用<br />需要`qn=120`<br />大多情况需求认证大会员账号 |
| 256  | 是否需求杜比音频   | 必须为dash格式<br />大多情况需求认证大会员账号               |
| 512  | 是否需求杜比视界   | 必须为dash格式<br />大多情况需求认证大会员账号               |
| 1024 | 是否需求 8K 分辨率 | 必须为dash格式<br />需要`qn=127`<br />大多情况需求认证大会员账号 |
| 2048 | 是否需求 av1 编码  | 必须为dash格式                                               |

例如：请求dash格式且需要HDR的视频流，则`fnval=16|64=80`

## 视频编码代码

| 值 | 含义     | 备注           |
| ---- | ---------- | ---------------- |
| 7  | AVC编码  | 8K视频无此格式 |
| 12 | HEVC编码 |                |
| 13 | AV1编码  |                |

## 视频伴音音质代码

| 值    | 含义 |
| ----- | ---- |
| 30216 | 64K  |
| 30232 | 132K |
| 30280 | 192K |
| 30250 | 杜比全景声 |
| 30251 | Hi-Res无损 |

## 获取视频流URL（web端）

> http://api.bilibili.com/x/player/playurl

*请求方式：GET*

认证方式：Cookie（SESSDATA）

---

关于视频流会员鉴权：

- 获取720P及以上清晰度视频时需要登录（Cookie）

- 获取高帧率（1080P60）/高码率（1080P+）视频时需要有大会员的账号登录（Cookie）

- 获取会员专属视频时需要登录（Cookie）

---

获取的url有效时间为120min，超时失效需要重新获取

**部分视频**会有**分段**，需要特别注意

若视频有分P，仅为单P的视频的url，换P则需更换cid重新获取

**url参数：**

| 参数名 | 类型 | 内容             | 必要性       | 备注                                                         |
| ------ | ---- | ---------------- | ------------ | ------------------------------------------------------------ |
| avid   | num  | 稿件avid         | 必要（可选） | avid与bvid任选一个                                           |
| bvid   | str  | 稿件bvid         | 必要（可选） | avid与bvid任选一个                                           |
| cid    | num  | 视频cid          | 必要         |                                                              |
| qn     | num  | 视频清晰度选择   | 非必要       | 未登录默认32（480P）<br />登录默认64（720P）<br />**值含义见上表**<br />注：dash方式无效 |
| fnval  | num  | 视频获取方式选择 | 非必要       | 默认为0<br />0 2：flv方式（可能会有分段）<br />1：低清mp4方式（仅240P与360P，且限速65K/s）<br />16 80：dash方式（音视频分流，支持H.265） |
| fnver  | num  | 0                | 非必要       | 固定为0                                                      |
| fourk  | num  | 是否允许4K视频   | 非必要       | 默认为0<br />画质最高1080P：0<br />画质最高4K：1             |
| session  | str  |    | 非必要       | 从视频播放页的网页源码中获取             |
| otype  | str  |    | 非必要       | 固定为json             |
| type  | str  |    | 非必要       | 目前为空             |
| platform | str |    | 非必要 | 默认为pc，当指定为html5时，获取的视频流url可以直接使用html的video标签播放 |

**json回复：**

根对象：

| 字段    | 类型                          | 内容     | 备注                                           |
| ------- | ----------------------------- | -------- | ---------------------------------------------- |
| code    | num                           | 返回值   | 0：成功 <br />-400：请求错误<br />-404：无视频 |
| message | str                           | 错误信息 | 默认为0                                        |
| ttl     | num                           | 1        |                                                |
| data    | 有效时：obj<br />无效时：null | 数据本体 |                                                |

`data`对象：

| 字段                 | 类型    | 内容                                | 备注                         |
|--------------------|-------|-----------------------------------|----------------------------|
| from               | str   | local                             | 作用尚不明确                     |
| result             | str   | suee                              | 作用尚不明确                     |
| message            | str   | 空                                 | 作用尚不明确                     |
| quality            | num   | 当前的视频分辨率代码                        | **值含义见上表**                 |
| format             | str   | 视频格式                              |                            |
| timelength         | num   | 视频长度（毫秒值）                         | 单位为毫秒<br />不同分辨率/格式可能有略微差异 |
| accept_format      | str   | 视频支持的全部格式                         | 每项用`,`分隔                   |
| accept_description | array | 视频支持的分辨率列表                        |                            |
| accept_quality     | array | 视频支持的分辨率代码列表                      | **值含义见上表**                 |
| video_codecid      | num   | 默认选择视频流的编码id                      | 见**视频编码代码**                |
| seek_param         | str   | 固定值：start                         | 作用尚不明确                     |
| seek_type          | str   | offset（dash、flv）<br/> second（mp4） | 作用尚不明确                     |
| durl               | array | 视频分段                              | **注：仅flv/mp4存在此项**         |
| dash               | obj   | dash音视频流信息                        | **注：仅dash存在此项**            |
| support_formats    | array | 支持格式的详细信息                         |                            |
| high_format        |       | null                              |                            |
| last_play_time     | num   | 上次播放进度                            | 毫秒值                        |
| last_play_cid      | num   | 上次播放分p的cid                        |                            |

`data`中的`accept_description`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | str  | 分辨率名称1     |      |
| n    | str  | 分辨率名称(n+1) |      |
| ……   | str  | ……              |      |

`data`中的`accept_quality`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | str  | 分辨率代码1     |      |
| n    | str  | 分辨率代码(n+1) |      |
| ……   | str  | ……              |      |

`data`中的`support_formats`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | obj  | 播放格式详细信息1     |      |
| n    | obj  | 播放格式详细信息(n+1) |      |
| ……   | obj  | ……              |      |

`support_formats`数组中的对象：

| 字段       | 类型   | 内容         | 备注                               |
| ---------- | ------ | ------------ | ---------------------------------- |
| quality      | num    | 视频清晰度代码 |      |
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


---

**flv/mp4方式：**

`data`中的`durl`数组：

| 项   | 类型 | 内容              | 备注                      |
| ---- | ---- | ----------------- | ------------------------- |
| 0    | obj  | 视频分段1信息     | **注：仅flv、mp4方式具有分段** |
| n    | obj  | 视频分段(n+1)信息 |                           |
| ……   | obj  | ……                |                           |

`durl`数组中的对象：

| 字段       | 类型   | 内容         | 备注                               |
| ---------- | ------ | ------------ | ---------------------------------- |
| order      | num    | 视频分段序号 | 某些视频会分为多个片段（从1顺序增长）     |
| length     | num    | 视频长度     | 单位为毫秒                         |
| size       | num    | 视频大小     | 单位为Byte                         |
| ahead      | str    | 空           | 作用尚不明确                       |
| vhead      | str    | 空           | 作用尚不明确                       |
| url        | str    | 视频流url    | **注：url内容存在转义符**<br />有效时间为120min |
| backup_url | array | 备用视频流   |                                    |

`durl`数组中的对象中的`backup_url`数组：

| 项   | 类型 | 内容                | 备注                                            |
| ---- | ---- | ------------------- | ----------------------------------------------- |
| 0    | str  | 备用视频流url 1     | **注：url内容存在转义符**<br />有效时间为120min |
| n    | str  | 备用视频流url (n+1) |                                                 |
| ……   | str  | ……                  |                                                 |

**示例：**

**视频无分段时：**

获取视频`av99999999`/`BV1y7411Q7Eq`中的1P（cid=`171776208`）的视频流url，清晰度为1080P+，使用flv方式获取

avid方式：

```shell
curl -G 'http://api.bilibili.com/x/player/playurl' \
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
curl -G 'http://api.bilibili.com/x/player/playurl' \
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

**dash方式：**

`data`中的`dash`对象：

| 字段            | 类型  | 内容       | 备注         |
| --------------- | ----- | ---------- | ------------ |
| duration        | num   | 视频长度        | 秒值 |
| minBufferTime   | num   | 1.5        | 作用尚不明确 |
| min_buffer_time | num   | 1.5        | 作用尚不明确 |
| video           | array | 视频流信息 |              |
| audio           | array | 音频流信息 |              |
| dolby           | obj | 杜比全景声音轨信息 |              |
| flac           | obj | 无损音轨信息 |              |

`dash`中的`video`数组：

| 项   | 类型 | 内容                   | 备注 |
| ---- | ---- | ---------------------- | ---- |
| 0    | obj  | 清晰度1 H.264编码      |      |
| 1    | obj  | 清晰度1 H.265编码      | **注：HDR仅支持H.265。**  |
| n    | obj  | 清晰度n H.264编码      |      |
| n+1  | obj  | 清晰度 (n-1) H.265编码 |      |
| ……   | obj  | ……                     |      |

`dash`中的`audio`数组：

| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| 0    | obj  | 清晰度1       |      |
| n    | obj  | 清晰度（n+1） |      |
| ……   | obj  | ……            |      |

`video`及`audio`数组中的对象：

| 字段           | 类型  | 内容                  | 备注                                            |
| -------------- | ----- | --------------------- | ----------------------------------------------- |
| id             | num   | 音视频清晰度代码      | **见上表**                                      |
| baseUrl        | str   | 默认视频/音频流url    | **注：url内容存在转义符**<br />有效时间为120min |
| base_url       | str   | **同上**              |                                                 |
| backupUrl      | array | 备用视频/音频流url    |                                                 |
| backup_url     | array | **同上**              |                                                 |
| bandwidth      | num   | 视频/音频所需最低带宽 |                                                 |
| mimeType       | str   | 视频/音频格式类型     |                                                 |
| mime_type      | str   | **同上**              |                                                 |
| codecs         | str   | 编码/音频类型         |                                                 |
| width          | num   | 视频宽度              | 单位为像素<br />仅视频有效                      |
| height         | num   | 视频高度              | 单位为像素<br />仅视频有效                      |
| frameRate      | str   | 视频帧率              | 仅视频有效                                      |
| frame_rate     | str   | **同上**              |                                                 |
| sar            | str   | 1:1                   | Sample Aspect Ratio，单个像素的宽高比           |
| startWithSap   | num   | 1                     | Stream Access Point                             |
| start_with_sap | num   | **同上**              |                                                 |
| SegmentBase    | obj   | 见下表                | url 对应 m4s 文件中，头部的位置                   |
| segment_base   | obj   | **同上**              |                                                 |
| codecid        | num   |  |  |

`video`数组中的对象中的`backup_url`数组：

| 项   | 类型 | 内容                     | 备注                                            |
| ---- | ---- | ------------------------ | ----------------------------------------------- |
| 0    | str  | 备用视频/音频流url 1     | **注：url内容存在转义符**<br />有效时间为120min |
| n    | str  | 备用视频/音频流url (n+1) |                                                 |
| ……   | str  | ……                       |                                                 |

`video`数组中的对象中的`SegmentBase`对象：

| 字段           | 类型 | 内容                                          | 备注                                                         |
| -------------- | ---- | --------------------------------------------- | ------------------------------------------------------------ |
| initialization | str  | \<init-first\>-\<init-last\><br />如：0-821    | ftyp (file type) box 加上 moov box 在 m4s 文件中的范围（单位为 bytes）<br />如 0-821 表示开头 820 个字节 |
| index_range    | str  | \<sidx-first\>-\<sidx-last\><br />如：822-1309 | sidx (segment index) box 在 m4s 文件中的范围（单位为 bytes）<br />sidx 的核心是一个数组，记录了各关键帧的时间戳及其在文件中的位置，<br />其作用是索引 (拖进度条) |

> 常规 MP4 文件的索引信息放在 moov box 中，其中包含每一帧 (不止是关键帧) 的一些信息。在 DASH 方式下，关键帧信息移到了 sidx box 里，其他的则分散到了各个 moof (movie fragment) box 中。<br>对这里的文件结构感兴趣的，可以参考标准文档 ISO/IEC 14496-12，如果不想那么深入的话可以百度「MP4 文件结构」。

`dash`中的`dolby`对象：

此项为”杜比视界“视频独有

| 字段           | 类型 | 内容                                          | 备注                                                         |
| -------------- | ---- | --------------------------------------------- | ------------------------------------------------------------ |
| type | num  |  2   |  |
| audio    | array  | 杜比音轨列表 |  |

`dolby`对象中的`audio`数组：

| 项   | 类型 | 内容                     | 备注                                            |
| ---- | ---- | ------------------------ | ----------------------------------------------- |
| 0    | obj  | 杜比音轨信息     |  |

`audio`数组中的对象：

| 项   | 类型 | 内容                     | 备注                                            |
| ---- | ---- | ------------------------ | ----------------------------------------------- |
| id    | num  | 音轨代码，固定为：30250     |  |
| base_url    | str  | 音频流url     |  |
| backup_url    | array  | 音频流备用url列表    |  |
| bandwidth    | num  | 音频所需最低带宽    |  |
| mime_type    | num  | 音频格式类型    |  |
| codecs    | num  | 音频编码信息（ec-3）    |  |
| segment_base   | obj   | **同上**              |                                                 |
| size   | num   | 音轨文件大小            |单位为Byte                                                 |

`dash`中的`flac`对象：

| 项   | 类型 | 内容                     | 备注                                            |
| ---- | ---- | ------------------------ | ----------------------------------------------- |
| display    | bool  | 是否在播放器显示切换Hi-Res无损音轨按钮     |  |
| audio    | obj  | 音频流信息     |  |

`flac`中的`audio`对象：

同：`video`及`audio`数组中的对象

**示例：**

获取视频`av969628065`/`BV1rp4y1e745`中的1P（cid=`244954665`）的视频流url，使用dash方式获取

avid方式：

```shell
curl -G 'http://api.bilibili.com/x/player/playurl' \
--data-urlencode 'avid=969628065' \
--data-urlencode 'cid=244954665' \
--data-urlencode 'qn=0' \
--data-urlencode 'fnval=80' \
--data-urlencode 'fnver=0' \
--data-urlencode 'fourk=1' \
-b 'SESSDATA=xxx'
```

 bvid方式：

```shell
curl -G 'http://api.bilibili.com/x/player/playurl' \
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
					"baseUrl": "http://cn-hbyc3-dx-v-03.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30125.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=688e42ac8ee0d5fcc0bfccee56070185&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3603&mid=5087321&orderid=0,3&agrr=0&logo=80000000",
					"base_url": "http://cn-hbyc3-dx-v-03.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30125.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=688e42ac8ee0d5fcc0bfccee56070185&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3603&mid=5087321&orderid=0,3&agrr=0&logo=80000000",
					"backupUrl": [
						"http://cn-hbxy-dx-v-04.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30125.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=688e42ac8ee0d5fcc0bfccee56070185&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3263&mid=5087321&orderid=1,3&agrr=0&logo=40000000",
						"http://cn-jxjj-dx-v-03.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30125.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=688e42ac8ee0d5fcc0bfccee56070185&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=4263&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
					],
					"backup_url": [
						"http://cn-hbxy-dx-v-04.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30125.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=688e42ac8ee0d5fcc0bfccee56070185&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3263&mid=5087321&orderid=1,3&agrr=0&logo=40000000",
						"http://cn-jxjj-dx-v-03.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30125.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=688e42ac8ee0d5fcc0bfccee56070185&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=4263&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
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
					"baseUrl": "http://cn-hbyc3-dx-v-10.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30120.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=85c32836fb30bfc64e6157c8d490889f&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3612&mid=5087321&orderid=0,3&agrr=0&logo=80000000",
					"base_url": "http://cn-hbyc3-dx-v-10.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30120.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=85c32836fb30bfc64e6157c8d490889f&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3612&mid=5087321&orderid=0,3&agrr=0&logo=80000000",
					"backupUrl": [
						"http://cn-hbxy-dx-v-02.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30120.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=85c32836fb30bfc64e6157c8d490889f&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3261&mid=5087321&orderid=1,3&agrr=0&logo=40000000",
						"http://cn-jxjj-dx-v-09.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30120.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=85c32836fb30bfc64e6157c8d490889f&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=9620&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
					],
					"backup_url": [
						"http://cn-hbxy-dx-v-02.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30120.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=85c32836fb30bfc64e6157c8d490889f&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3261&mid=5087321&orderid=1,3&agrr=0&logo=40000000",
						"http://cn-jxjj-dx-v-09.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30120.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=85c32836fb30bfc64e6157c8d490889f&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=9620&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
					],
					"bandwidth": 16974415,
					"mimeType": "video/mp4",
					"mime_type": "video/mp4",
					"codecs": "avc1.640034",
					"width": 3840,
					"height": 1920,
					"frameRate": "16000/144",
					"frame_rate": "16000/144",
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
					"baseUrl": "http://cn-hbxy-dx-v-05.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30121.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=b3b30e93881df90737b9a441ea1aeeb2&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3264&mid=5087321&orderid=0,3&agrr=0&logo=80000000",
					"base_url": "http://cn-hbxy-dx-v-05.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30121.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=b3b30e93881df90737b9a441ea1aeeb2&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3264&mid=5087321&orderid=0,3&agrr=0&logo=80000000",
					"backupUrl": [
						"http://cn-jxjj-dx-v-02.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30121.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=b3b30e93881df90737b9a441ea1aeeb2&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=4262&mid=5087321&orderid=1,3&agrr=0&logo=40000000",
						"http://upos-sz-mirrorkodo.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30121.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=kodobv&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=64ad9849e06e98714b86dbb20e3e5fee&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
					],
					"backup_url": [
						"http://cn-jxjj-dx-v-02.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30121.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=b3b30e93881df90737b9a441ea1aeeb2&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=4262&mid=5087321&orderid=1,3&agrr=0&logo=40000000",
						"http://upos-sz-mirrorkodo.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30121.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=kodobv&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=64ad9849e06e98714b86dbb20e3e5fee&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
					],
					"bandwidth": 10247697,
					"mimeType": "video/mp4",
					"mime_type": "video/mp4",
					"codecs": "hev1.1.6.L156.90",
					"width": 3840,
					"height": 1920,
					"frameRate": "16000/144",
					"frame_rate": "16000/144",
					"sar": "1:1",
					"startWithSap": 1,
					"start_with_sap": 1,
					"SegmentBase": {
						"Initialization": "0-1057",
						"indexRange": "1058-1917"
					},
					"segment_base": {
						"initialization": "0-1057",
						"index_range": "1058-1917"
					},
					"codecid": 12
				},
				{
					"id": 116,
					"baseUrl": "http://xy182x87x189x128xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30116.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=d5bec6f8aa00449a0b83fd301c0c37e9&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=2000120&mid=5087321&orderid=0,3&agrr=0&logo=A0000002",
					"base_url": "http://xy182x87x189x128xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30116.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=d5bec6f8aa00449a0b83fd301c0c37e9&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=2000120&mid=5087321&orderid=0,3&agrr=0&logo=A0000002",
					"backupUrl": [
						"http://xy110x85x55x73xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30116.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=d5bec6f8aa00449a0b83fd301c0c37e9&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=11000009&mid=5087321&orderid=1,3&agrr=0&logo=60000400",
						"http://cn-hbyc3-dx-v-10.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30116.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=8d788fd06d046a87c34adcc316d5e821&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3612&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
					],
					"backup_url": [
						"http://xy110x85x55x73xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30116.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=d5bec6f8aa00449a0b83fd301c0c37e9&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=11000009&mid=5087321&orderid=1,3&agrr=0&logo=60000400",
						"http://cn-hbyc3-dx-v-10.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30116.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=8d788fd06d046a87c34adcc316d5e821&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3612&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
					],
					"bandwidth": 5204909,
					"mimeType": "video/mp4",
					"mime_type": "video/mp4",
					"codecs": "avc1.640032",
					"width": 2160,
					"height": 1080,
					"frameRate": "16000/256",
					"frame_rate": "16000/256",
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
					"baseUrl": "http://xy111x76x65x192xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30106.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=f3c22e57a98d73c2d3dfe876fcdd85c7&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=1001507&mid=5087321&orderid=0,3&agrr=0&logo=A0000001",
					"base_url": "http://xy111x76x65x192xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30106.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=f3c22e57a98d73c2d3dfe876fcdd85c7&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=1001507&mid=5087321&orderid=0,3&agrr=0&logo=A0000001",
					"backupUrl": [
						"http://xy60x176x136x6xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30106.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=f3c22e57a98d73c2d3dfe876fcdd85c7&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=6000006&mid=5087321&orderid=1,3&agrr=0&logo=60000020",
						"http://cn-hbyc3-dx-v-07.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30106.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=fe9939a90aa73533c01331aab33e05a9&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3608&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
					],
					"backup_url": [
						"http://xy60x176x136x6xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30106.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=f3c22e57a98d73c2d3dfe876fcdd85c7&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=6000006&mid=5087321&orderid=1,3&agrr=0&logo=60000020",
						"http://cn-hbyc3-dx-v-07.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30106.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=fe9939a90aa73533c01331aab33e05a9&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3608&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
					],
					"bandwidth": 3136294,
					"mimeType": "video/mp4",
					"mime_type": "video/mp4",
					"codecs": "hev1.1.6.L150.90",
					"width": 2160,
					"height": 1080,
					"frameRate": "16000/256",
					"frame_rate": "16000/256",
					"sar": "1:1",
					"startWithSap": 1,
					"start_with_sap": 1,
					"SegmentBase": {
						"Initialization": "0-1057",
						"indexRange": "1058-1917"
					},
					"segment_base": {
						"initialization": "0-1057",
						"index_range": "1058-1917"
					},
					"codecid": 12
				},
				{
					"id": 80,
					"baseUrl": "http://xy111x77x103x124xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30080.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=a481360fc47bad80ff47322ba098f595&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=2000121&mid=5087321&orderid=0,3&agrr=0&logo=A0000002",
					"base_url": "http://xy111x77x103x124xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30080.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=a481360fc47bad80ff47322ba098f595&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=2000121&mid=5087321&orderid=0,3&agrr=0&logo=A0000002",
					"backupUrl": [
						"http://xy115x151x244x68xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30080.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=a481360fc47bad80ff47322ba098f595&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=2000125&mid=5087321&orderid=1,3&agrr=0&logo=60000002",
						"http://cn-hbyc3-dx-v-06.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30080.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=1d5ef268f749f2ebf0ea5ecac733720e&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3606&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
					],
					"backup_url": [
						"http://xy115x151x244x68xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30080.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=a481360fc47bad80ff47322ba098f595&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=2000125&mid=5087321&orderid=1,3&agrr=0&logo=60000002",
						"http://cn-hbyc3-dx-v-06.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30080.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=1d5ef268f749f2ebf0ea5ecac733720e&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3606&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
					],
					"bandwidth": 2630160,
					"mimeType": "video/mp4",
					"mime_type": "video/mp4",
					"codecs": "avc1.640032",
					"width": 2160,
					"height": 1080,
					"frameRate": "16000/544",
					"frame_rate": "16000/544",
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
					"baseUrl": "http://xy222x218x211x39xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30077.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=213a86927fc14dd9a2e870a115f194e4&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=1001441&mid=5087321&orderid=0,3&agrr=0&logo=A0000001",
					"base_url": "http://xy222x218x211x39xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30077.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=213a86927fc14dd9a2e870a115f194e4&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=1001441&mid=5087321&orderid=0,3&agrr=0&logo=A0000001",
					"backupUrl": [
						"http://xy218x67x10x126xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30077.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=213a86927fc14dd9a2e870a115f194e4&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=1001675&mid=5087321&orderid=1,3&agrr=0&logo=60000001",
						"http://cn-hbyc3-dx-v-02.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30077.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=794a98625664ffce0dd4181bc245a7b6&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3601&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
					],
					"backup_url": [
						"http://xy218x67x10x126xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30077.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=213a86927fc14dd9a2e870a115f194e4&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=1001675&mid=5087321&orderid=1,3&agrr=0&logo=60000001",
						"http://cn-hbyc3-dx-v-02.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30077.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=794a98625664ffce0dd4181bc245a7b6&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3601&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
					],
					"bandwidth": 1583424,
					"mimeType": "video/mp4",
					"mime_type": "video/mp4",
					"codecs": "hev1.1.6.L150.90",
					"width": 2160,
					"height": 1080,
					"frameRate": "16000/544",
					"frame_rate": "16000/544",
					"sar": "1:1",
					"startWithSap": 1,
					"start_with_sap": 1,
					"SegmentBase": {
						"Initialization": "0-1057",
						"indexRange": "1058-1917"
					},
					"segment_base": {
						"initialization": "0-1057",
						"index_range": "1058-1917"
					},
					"codecid": 12
				},
				{
					"id": 64,
					"baseUrl": "http://xy59x54x224x76xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30074.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=128309bc946d295a58d710e07a4f67a8&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=8000027&mid=5087321&orderid=0,3&agrr=0&logo=A0000080",
					"base_url": "http://xy59x54x224x76xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30074.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=128309bc946d295a58d710e07a4f67a8&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=8000027&mid=5087321&orderid=0,3&agrr=0&logo=A0000080",
					"backupUrl": [
						"http://xy117x26x192x2xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30074.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=128309bc946d295a58d710e07a4f67a8&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=1000883&mid=5087321&orderid=1,3&agrr=0&logo=60000001",
						"http://cn-hbyc3-dx-v-01.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30074.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=ec1785c5077599bb1a3addd295e3be2a&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3600&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
					],
					"backup_url": [
						"http://xy117x26x192x2xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30074.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=128309bc946d295a58d710e07a4f67a8&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=1000883&mid=5087321&orderid=1,3&agrr=0&logo=60000001",
						"http://cn-hbyc3-dx-v-01.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30074.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=ec1785c5077599bb1a3addd295e3be2a&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3600&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
					],
					"bandwidth": 1756920,
					"mimeType": "video/mp4",
					"mime_type": "video/mp4",
					"codecs": "avc1.640028",
					"width": 1440,
					"height": 720,
					"frameRate": "16000/256",
					"frame_rate": "16000/256",
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
					"baseUrl": "http://xy111x76x65x193xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30076.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=fb9744dbe6d55ec10e6d3195886b98bf&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=1001507&mid=5087321&orderid=0,3&agrr=0&logo=A0000001",
					"base_url": "http://xy111x76x65x193xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30076.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=fb9744dbe6d55ec10e6d3195886b98bf&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=1001507&mid=5087321&orderid=0,3&agrr=0&logo=A0000001",
					"backupUrl": [
						"http://xy59x54x226x245xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30076.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=fb9744dbe6d55ec10e6d3195886b98bf&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=8000027&mid=5087321&orderid=1,3&agrr=0&logo=60000080",
						"http://cn-hbyc3-dx-v-03.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30076.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=b8a7a7cb99ebee9f755f602364d6f875&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3603&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
					],
					"backup_url": [
						"http://xy59x54x226x245xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30076.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=fb9744dbe6d55ec10e6d3195886b98bf&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=8000027&mid=5087321&orderid=1,3&agrr=0&logo=60000080",
						"http://cn-hbyc3-dx-v-03.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30076.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=b8a7a7cb99ebee9f755f602364d6f875&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3603&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
					],
					"bandwidth": 1065983,
					"mimeType": "video/mp4",
					"mime_type": "video/mp4",
					"codecs": "hev1.1.6.L120.90",
					"width": 1440,
					"height": 720,
					"frameRate": "16000/256",
					"frame_rate": "16000/256",
					"sar": "1:1",
					"startWithSap": 1,
					"start_with_sap": 1,
					"SegmentBase": {
						"Initialization": "0-1058",
						"indexRange": "1059-1918"
					},
					"segment_base": {
						"initialization": "0-1058",
						"index_range": "1059-1918"
					},
					"codecid": 12
				},
				{
					"id": 32,
					"baseUrl": "http://xy110x85x55x67xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30032.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=f7515a5788e25691358407e910556a5e&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=11000003&mid=5087321&orderid=0,3&agrr=0&logo=A0000400",
					"base_url": "http://xy110x85x55x67xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30032.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=f7515a5788e25691358407e910556a5e&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=11000003&mid=5087321&orderid=0,3&agrr=0&logo=A0000400",
					"backupUrl": [
						"http://xy61x154x54x191xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30032.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=f7515a5788e25691358407e910556a5e&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=9000302&mid=5087321&orderid=1,3&agrr=0&logo=60000100",
						"http://cn-hbxy-dx-v-04.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30032.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=a3ba7028bd52fff9ef286a3c24266666&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3263&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
					],
					"backup_url": [
						"http://xy61x154x54x191xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30032.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=f7515a5788e25691358407e910556a5e&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=9000302&mid=5087321&orderid=1,3&agrr=0&logo=60000100",
						"http://cn-hbxy-dx-v-04.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30032.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=a3ba7028bd52fff9ef286a3c24266666&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3263&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
					],
					"bandwidth": 790280,
					"mimeType": "video/mp4",
					"mime_type": "video/mp4",
					"codecs": "avc1.64001F",
					"width": 960,
					"height": 480,
					"frameRate": "16000/544",
					"frame_rate": "16000/544",
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
					"baseUrl": "http://xy218x67x10x126xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30033.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=47fc5c899b464f8f8b9b584aefdbd6fb&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=1001675&mid=5087321&orderid=0,3&agrr=0&logo=A0000001",
					"base_url": "http://xy218x67x10x126xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30033.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=47fc5c899b464f8f8b9b584aefdbd6fb&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=1001675&mid=5087321&orderid=0,3&agrr=0&logo=A0000001",
					"backupUrl": [
						"http://xy110x87x251x147xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30033.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=47fc5c899b464f8f8b9b584aefdbd6fb&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=1001002&mid=5087321&orderid=1,3&agrr=0&logo=60000001",
						"http://cn-hbyc3-dx-v-04.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30033.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=22bedec619ade8602e6dcd3ad1e9fca3&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3604&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
					],
					"backup_url": [
						"http://xy110x87x251x147xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30033.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=47fc5c899b464f8f8b9b584aefdbd6fb&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=1001002&mid=5087321&orderid=1,3&agrr=0&logo=60000001",
						"http://cn-hbyc3-dx-v-04.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30033.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=22bedec619ade8602e6dcd3ad1e9fca3&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3604&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
					],
					"bandwidth": 479386,
					"mimeType": "video/mp4",
					"mime_type": "video/mp4",
					"codecs": "hev1.1.6.L120.90",
					"width": 960,
					"height": 480,
					"frameRate": "16000/544",
					"frame_rate": "16000/544",
					"sar": "1:1",
					"startWithSap": 1,
					"start_with_sap": 1,
					"SegmentBase": {
						"Initialization": "0-1056",
						"indexRange": "1057-1916"
					},
					"segment_base": {
						"initialization": "0-1056",
						"index_range": "1057-1916"
					},
					"codecid": 12
				},
				{
					"id": 16,
					"baseUrl": "http://xy111x78x162x6xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30011.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=c0b9b928876f29ad2a237c011cbb4d79&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=2000559&mid=5087321&orderid=0,3&agrr=0&logo=A0000002",
					"base_url": "http://xy111x78x162x6xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30011.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=c0b9b928876f29ad2a237c011cbb4d79&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=2000559&mid=5087321&orderid=0,3&agrr=0&logo=A0000002",
					"backupUrl": [
						"http://xy220x161x19x177xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30011.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=c0b9b928876f29ad2a237c011cbb4d79&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=1001675&mid=5087321&orderid=1,3&agrr=0&logo=60000001",
						"http://cn-hbyc3-dx-v-04.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30011.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=71df51e492a25c30b1d4dbb528b71c3a&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3604&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
					],
					"backup_url": [
						"http://xy220x161x19x177xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30011.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=c0b9b928876f29ad2a237c011cbb4d79&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=1001675&mid=5087321&orderid=1,3&agrr=0&logo=60000001",
						"http://cn-hbyc3-dx-v-04.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30011.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=71df51e492a25c30b1d4dbb528b71c3a&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3604&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
					],
					"bandwidth": 218119,
					"mimeType": "video/mp4",
					"mime_type": "video/mp4",
					"codecs": "hev1.1.6.L120.90",
					"width": 720,
					"height": 360,
					"frameRate": "16000/544",
					"frame_rate": "16000/544",
					"sar": "1:1",
					"startWithSap": 1,
					"start_with_sap": 1,
					"SegmentBase": {
						"Initialization": "0-1056",
						"indexRange": "1057-1916"
					},
					"segment_base": {
						"initialization": "0-1056",
						"index_range": "1057-1916"
					},
					"codecid": 12
				},
				{
					"id": 16,
					"baseUrl": "http://xy124x227x203x184xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30016.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=705c2a6b1c5bc4ced54112602f6668c4&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=9000430&mid=5087321&orderid=0,3&agrr=0&logo=A0000100",
					"base_url": "http://xy124x227x203x184xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30016.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=705c2a6b1c5bc4ced54112602f6668c4&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=9000430&mid=5087321&orderid=0,3&agrr=0&logo=A0000100",
					"backupUrl": [
						"http://xy125x115x20x243xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30016.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=705c2a6b1c5bc4ced54112602f6668c4&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=8000090&mid=5087321&orderid=1,3&agrr=0&logo=60000080",
						"http://cn-hbyc3-dx-v-04.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30016.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=5292a28e404739d7f78bdb88b40e67a4&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3604&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
					],
					"backup_url": [
						"http://xy125x115x20x243xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30016.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=705c2a6b1c5bc4ced54112602f6668c4&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=8000090&mid=5087321&orderid=1,3&agrr=0&logo=60000080",
						"http://cn-hbyc3-dx-v-04.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30016.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=5292a28e404739d7f78bdb88b40e67a4&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3604&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
					],
					"bandwidth": 353623,
					"mimeType": "video/mp4",
					"mime_type": "video/mp4",
					"codecs": "avc1.64001E",
					"width": 720,
					"height": 360,
					"frameRate": "16000/544",
					"frame_rate": "16000/544",
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
					"baseUrl": "http://xy115x151x244x90xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=7a2cb6f2e18c4ddc953822a47956a487&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=2000119&mid=5087321&orderid=0,3&agrr=0&logo=A0000002",
					"base_url": "http://xy115x151x244x90xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=7a2cb6f2e18c4ddc953822a47956a487&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=2000119&mid=5087321&orderid=0,3&agrr=0&logo=A0000002",
					"backupUrl": [
						"http://xy115x229x13x65xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=7a2cb6f2e18c4ddc953822a47956a487&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=1001384&mid=5087321&orderid=1,3&agrr=0&logo=60000001",
						"http://cn-hbyc3-dx-v-09.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=392584aebbe78927007600f3e6554e5a&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3611&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
					],
					"backup_url": [
						"http://xy115x229x13x65xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=7a2cb6f2e18c4ddc953822a47956a487&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=1001384&mid=5087321&orderid=1,3&agrr=0&logo=60000001",
						"http://cn-hbyc3-dx-v-09.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=392584aebbe78927007600f3e6554e5a&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3611&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
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
					"baseUrl": "http://xy59x54x225x162xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=8e6caaf2d9eb00b53fc185974d8b10ec&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=8000027&mid=5087321&orderid=0,3&agrr=0&logo=A0000080",
					"base_url": "http://xy59x54x225x162xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=8e6caaf2d9eb00b53fc185974d8b10ec&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=8000027&mid=5087321&orderid=0,3&agrr=0&logo=A0000080",
					"backupUrl": [
						"http://xy171x109x208x152xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=8e6caaf2d9eb00b53fc185974d8b10ec&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=2000070&mid=5087321&orderid=1,3&agrr=0&logo=60000002",
						"http://cn-hbyc3-dx-v-04.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=53bd263d269b12aeb1921b35310e6135&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3604&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
					],
					"backup_url": [
						"http://xy171x109x208x152xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=8e6caaf2d9eb00b53fc185974d8b10ec&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=2000070&mid=5087321&orderid=1,3&agrr=0&logo=60000002",
						"http://cn-hbyc3-dx-v-04.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=53bd263d269b12aeb1921b35310e6135&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3604&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
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
					"baseUrl": "http://xy61x131x241x176xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=af4d99e5549d76fa99b589da1bbd8bd5&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=2000118&mid=5087321&orderid=0,3&agrr=0&logo=A0000002",
					"base_url": "http://xy61x131x241x176xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=af4d99e5549d76fa99b589da1bbd8bd5&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=2000118&mid=5087321&orderid=0,3&agrr=0&logo=A0000002",
					"backupUrl": [
						"http://xy140x237x232x110xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=af4d99e5549d76fa99b589da1bbd8bd5&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=9000304&mid=5087321&orderid=1,3&agrr=0&logo=60000100",
						"http://cn-hbyc3-dx-v-02.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=a7591f91acd5e1e046c4db816f1fde09&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3601&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
					],
					"backup_url": [
						"http://xy140x237x232x110xy.mcdn.bilivideo.cn:4483/upgcxcode/65/46/244954665/244954665_f9-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=mcdn&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=af4d99e5549d76fa99b589da1bbd8bd5&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=9000304&mid=5087321&orderid=1,3&agrr=0&logo=60000100",
						"http://cn-hbyc3-dx-v-02.bilivideo.com/upgcxcode/65/46/244954665/244954665_f9-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615860500&gen=playurlv2&os=vcache&oi=3702125999&trid=e4aa2dea3e2142f996ab744b2cff702du&platform=pc&upsig=a7591f91acd5e1e046c4db816f1fde09&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3601&mid=5087321&orderid=2,3&agrr=0&logo=40000000"
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
			]
		},
		"support_formats": [
			{
				"quality": 125,
				"format": "hdflv2",
				"new_description": "HDR 真彩",
				"display_desc": "HDR",
				"superscript": ""
			},
			{
				"quality": 120,
				"format": "hdflv2",
				"new_description": "4K 超清",
				"display_desc": "4K",
				"superscript": ""
			},
			{
				"quality": 116,
				"format": "flv_p60",
				"new_description": "1080P 60帧",
				"display_desc": "1080P",
				"superscript": "60帧"
			},
			{
				"quality": 80,
				"format": "flv",
				"new_description": "1080P 高清",
				"display_desc": "1080P",
				"superscript": ""
			},
			{
				"quality": 64,
				"format": "flv720_p60",
				"new_description": "720P 60帧",
				"display_desc": "720P",
				"superscript": "60帧"
			},
			{
				"quality": 32,
				"format": "flv480",
				"new_description": "480P 清晰",
				"display_desc": "480P",
				"superscript": ""
			},
			{
				"quality": 16,
				"format": "mp4",
				"new_description": "360P 流畅",
				"display_desc": "360P",
				"superscript": ""
			}
		],
		"high_format": null
	}
}
```

</details>

## 视频的取流（web端及APP端）

**注意：**

1. 如flv模式则可能产生分段情况，将`$.data.durl[1-n].url`或`$.data.durl[1-n].backup_url[0]`中的内容作为url进行GET操作, 如果有多个视频, 需要手动合并处理
2. 如mp4模式则需要获取对应的视频流（方法同上）
3. 如dash模式则需要同时获取对应的视频流和伴音流（方法同上）
4. web端取流需要验证防盗链，即`referer`为 `.bilibili.com`域名下且UA不能为空；app端也需要验证防盗链，即UA需要含有`Mozilla/5.0 BiliDroid/*.*.* (bbcallen@gmail.com)`（*为版本）；如`referer`或UA错误的情况会被判定为盗链，返回403 Forbidden故无法取流
5. **注意unicode转义符**

以上述视频流url为例：

```shell
wget 'http://upos-sz-mirrorhw.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-112.flv?e=ig8euxZM2rNcNbhMnwhVhwdlhzK3hzdVhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1589565412&gen=playurl&os=hwbv&oi=606631998&trid=e0fa5f9a7610440a871279a28fae85aau&platform=pc&upsig=5f469cb4c190ed54b89bd40cc37eddff&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&logo=80000000' \
--referer 'https://www.bilibili.com' \
-O 'Download_video.flv'
```

响应正文将返回一个flv文件
