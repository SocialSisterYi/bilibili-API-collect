# 视频流URL

<img src="../../assets/img/download.svg" width="100" height="100"/>

B站的番剧视频为http流媒体，需要对应的api以视频id获取取流url，并进行取流

## qn视频清晰度标识

**注：该值在dash模式且非下载模式时无效**

| 值   | 含义          | 备注                                                                          |
|-----|-------------|-----------------------------------------------------------------------------|
| 6   | 240P 极速     | 仅mp4方式支持                                                                    |
| 16  | 360P 流畅     |                                                                             |
| 32  | 480P 清晰     |                                                                             |
| 64  | 720P 高清     | web端默认值<br />B站前端需要登录才能选择，但是直接发送请求可以不登录就拿到720P的取流地址<br />**无720P时则为720P60** |
| 74  | 720P60 高帧率  | 需要认证登录账号                                                                    |
| 80  | 1080P 高清    | TV端与APP端默认值<br />需要认证登录账号                                                   |
| 100 | 智能修复       | 仅支持dash方式<br />需要`fnval&12240=12240`<br />需要认证登录账号                                      |
| 112 | 1080P+ 高码率  | 大多情况需求认证大会员账号                                                               |
| 116 | 1080P60 高帧率 | 大多情况需求认证大会员账号                                                               |
| 120 | 4K 超清       | 需要`fnval&128=128`且`fourk=1`<br />大多情况需求认证大会员账号                              |
| 125 | HDR 真彩色     | 仅支持dash方式<br />需要`fnval&64=64`<br />大多情况需求认证大会员账号                           |
| 126 | 杜比视界        | 仅支持dash方式<br />需要`fnval&512=512`<br />大多情况需求认证大会员账号                         |
| 127 | 8K 超高清      | 仅支持dash方式<br />需要`fnval&1024=1024`<br />大多情况需求认证大会员账号                       |

例如：请求1080P+的视频，则`qn=112`

## fnver视频流版本标识

目前该值恒为0，即`fnver=0`

## fnval视频流格式标识

该代码为二进制属性位，如需组合功能需要使用`OR`运算结合一下数值

| 值    | 含义          | 备注                                                          |
|------|-------------|-------------------------------------------------------------|
| 0    | flv格式       | 仅H.264编码<br />部分老视频存在分段现象<br />与mp4格式及dash格式互斥              |
| 1    | mp4格式       | 仅H.264编码<br />不存在视频分段<br />与flv格式及dash格式互斥                  |
| 16   | dash格式      | H.264编码或H.265编码<br />部分老视频的清晰度上限低于flv格式<br />与mp4格式及flv格式互斥 |
| 64   | 是否需求 HDR 视频 | 必须为dash格式<br />需要`qn=125`<br />大多情况需求认证大会员账号                |
| 128  | 是否需求 4K 分辨率 | 该值与`fourk`字段协同作用<br />需要`qn=120`<br />大多情况需求认证大会员账号         |
| 256  | 是否需求杜比音频    | 必须为dash格式<br />大多情况需求认证大会员账号                                |
| 512  | 是否需求杜比视界    | 必须为dash格式<br />大多情况需求认证大会员账号                                |
| 1024 | 是否需求 8K 分辨率 | 必须为dash格式<br />需要`qn=127`<br />大多情况需求认证大会员账号                |
| 2048 | 是否需求 av1 编码 | 必须为dash格式                                                   |
| 12240 | 是否需求智能修复 | 必须为dash格式<br />需要认证大会员账号                     |

例如：请求dash格式且需要HDR的视频流，则`fnval=16|64=80`

## 视频编码代码

| 值   | 含义     | 备注       |
|-----|--------|----------|
| 7   | AVC编码  | 8K视频无此格式 |
| 12  | HEVC编码 |          |
| 13  | AV1编码  |          |

## 视频伴音音质代码

| 值     | 含义   |
|-------|------|
| 30216 | 64K  |
| 30232 | 132K |
| 30280 | 192K |

## 获取番剧视频流URL

>  https://api.bilibili.com/pgc/player/web/playurl

*请求方式：GET*

认证方式：Cookie（SESSDATA）

---

关于视频流会员鉴权：

- 获取480P及以上清晰度视频时需要登录（Cookie）

- 获取高帧率（1080P60）/高码率（1080P+）视频时需要有大会员的账号登录（Cookie）

- 获取会员专属番剧视频时需要登录（Cookie）

---

获取的url有效时间为120min，超时失效需要重新获取

**部分视频**会有**分段**，需要特别注意

若视频有分P，仅为单P的视频的url，换P则需更换cid重新获取

需要设置Referer为`https://www.bilibili.com`，否则无法获取1080清晰度以上的流信息。

**url参数：**

| 参数名           | 类型  | 内容       | 必要性    | 备注                                                                                               |
|---------------|-----|----------|--------|--------------------------------------------------------------------------------------------------|
| avid          | num | 稿件avid   | 非必要    |                                                                                                  |
| bvid          | str | 稿件bvid   | 非必要    |                                                                                                  |
| ep_id         | num | 稿件epid   | 必要（可选） | ep_id与cid任选一个                                                                                    |
| cid           | num | 视频cid    | 必要（可选） | ep_id与cid任选一个                                                                                    |
| qn            | num | 视频清晰度选择  | 非必要    | 未登录默认32（480P）<br />登录默认64（720P）<br />**值含义见上表**<br />注：dash方式无效                                  |
| fnval         | num | 视频获取方式选择 | 非必要    | 默认为0<br />0 2：flv方式（可能会有分段）<br />1：低清mp4方式（仅240P与360P，且限速65K/s）<br />16 80：dash方式（音视频分流，支持H.265） |
| fnver         | num | 0        | 非必要    | 固定为0                                                                                             |
| fourk         | num | 是否允许4K视频 | 非必要    | 默认为0<br />画质最高1080P：0<br />画质最高4K：1                                                              |
| session       | str |          | 非必要    | 从视频播放页的网页源码中获取                                                                                   |
| from_client   | str | BROWSER  | 非必要    |                                                                                                  |
| drm_tech_type | num | 2        | 非必要    |                                                                                                  |



**json回复：**

根对象：

| 字段      | 类型                    | 内容   | 备注                                 |
|---------|-----------------------|------|------------------------------------|
| code    | num                   | 返回值  | 0：成功 <br />-400：请求错误<br />-404：无视频 |
| message | str                   | 错误信息 | 成功为success                         |
| result  | 有效时：obj<br />无效时：null | 数据本体 |                                    |

`result`对象：

| 字段                 | 类型    | 内容                                | 备注                         |
|--------------------|-------|-----------------------------------|----------------------------|
| code               | num   | 0                                 | 作用尚不明确                     |
| is_preview         | num   | 0                                 | 作用尚不明确                     |
| fnver              | num   | 请求时提供的fnver                       |                            |
| fnval              | num   | 请求时提供的fnval                       |                            |
| video_project      | bool  | true                              |                            |
| type               | str   | 视频流类型（DASH、FLV、MP4）               | DASH                       |
| bp                 | num   | 是否可以承包                            | 0                          |
| vip_type           | num   | 当前用户大会员类型                         |                            |
| vip_status         | num   | 当前用户大会员状态                         |                            |
| is_drm             | bool  | false                             |                            |
| no_rexcode         | num   | 0                                 |                            |
| has_paid           | bool  | false                             |                            |
| status             | num   | 2                                 |                            |
| from               | str   | local                             | 作用尚不明确                     |
| result             | str   | suee                              | 作用尚不明确                     |
| message            | str   | 空                                 | 作用尚不明确                     |
| quality            | num   | 当前的视频分辨率代码                        | **值含义见上表**                 |
| format             | str   | 视频格式                              |                            |
| timelength         | num   | 视频长度                              | 单位为毫秒<br />不同分辨率/格式可能有略微差异 |
| accept_format      | str   | 视频支持的全部格式                         | 每项用`,`分隔                   |
| accept_description | array | 视频支持的分辨率列表                        |                            |
| accept_quality     | array | 视频支持的分辨率代码列表                      | **值含义见上表**                 |
| video_codecid      | num   | 默认选择视频流的编码id                      | 见**视频编码代码**                |
| seek_param         | str   | 固定值：start                         | 作用尚不明确                     |
| seek_type          | str   | offset（dash、flv）<br/> second（mp4） | 作用尚不明确                     |
| durl               | array | 视频分段                              | **注：仅flv/mp4存在此项**         |
| dash               | obj   | dash音视频流信息                        | **注：仅dash存在此项**            |
| support_formats    | array | 支持格式的详细信息                         |                            |
| clip_info_list     | array |                                   | 空，待补充                      |
| record_info        | obj   | 备案登记信息                            |                            |

`result`中的`accept_description`数组：

| 项   | 类型  | 内容         | 备注  |
|-----|-----|------------|-----|
| 0   | str | 分辨率名称1     |     |
| n   | str | 分辨率名称(n+1) |     |
| ……  | str | ……         |     |

`result`中的`accept_quality`数组：

| 项   | 类型  | 内容         | 备注  |
|-----|-----|------------|-----|
| 0   | str | 分辨率代码1     |     |
| n   | str | 分辨率代码(n+1) |     |
| ……  | str | ……         |     |

`result`中的`support_formats`数组：

| 项   | 类型  | 内容            | 备注  |
|-----|-----|---------------|-----|
| 0   | obj | 播放格式详细信息1     |     |
| n   | obj | 播放格式详细信息(n+1) |     |
| ……  | obj | ……            |     |

`support_formats`数组中的对象：

| 字段              | 类型    | 内容      | 备注  |
|-----------------|-------|---------|-----|
| quality         | num   | 视频清晰度代码 |     |
| format          | str   | 视频格式    |     |
| new_description | str   | 格式描述    |     |
| description     | str   | 格式描述    |     |
| display_desc    | str   | 格式描述    |     |
| superscript     | str   | (?)     |     |
| codecs          | array | 编码格式列表  |     |
| need_login      | bool  | 需要登录    |     |
| need_vip        | bool  | 需要大会员   |     |

`support_formats`中的`codecs`数组：

| 项   | 类型  | 内容   | 备注                          |
|-----|-----|------|-----------------------------|
| 0   | str | 编码格式 | 如：avc1.640032，意为AVC编码       |
| 1   | str | 编码格式 | 如：hev1.1.6.L153.90，意为HEVC编码 |

`result`中的`record_info`对象：

| 项           | 类型  | 内容   | 备注                    |
|-------------|-----|------|-----------------------|
| record_icon | str | 空串   |                       |
| record      | str | 显示文案 | 登记号：10417060172092207 |

---

**flv/mp4方式：**

`result`中的`durl`数组：

| 项   | 类型  | 内容          | 备注               |
|-----|-----|-------------|------------------|
| 0   | obj | 视频分段1信息     | **注：仅flv方式具有分段** |
| n   | obj | 视频分段(n+1)信息 |                  |
| ……  | obj | ……          |                  |

`durl`数组中的对象：

| 字段         | 类型    | 内容     | 备注                                |
|------------|-------|--------|-----------------------------------|
| order      | num   | 视频分段序号 | 某些视频会分为多个片段（从1顺序增长）               |
| length     | num   | 视频长度   | 单位为毫秒                             |
| size       | num   | 视频大小   | 单位为Byte                           |
| vhead      | str   | 空      | 作用尚不明确                            |
| url        | str   | 视频流url | **注：url内容存在转义符**<br />有效时间为120min |
| backup_url | array | 备用视频流  |                                   |

`durl`数组中的对象中的`backup_url`数组：

| 项   | 类型  | 内容             | 备注                                |
|-----|-----|----------------|-----------------------------------|
| 0   | str | 备用视频流url 1     | **注：url内容存在转义符**<br />有效时间为120min |
| n   | str | 备用视频流url (n+1) |                                   |
| ……  | str | ……             |                                   |

**示例：**

**视频无分段时：**

获取视频`ep85046`/`av2325306`中的1P（cid=`3629601`）的视频流url，清晰度为480p，使用flv方式获取

avid/epid方式：

```shell
curl -G 'https://api.bilibili.com/pgc/player/web/playurl' \
--data-urlencode 'avid=2325306' \
--data-urlencode 'cid=3629601' \
--data-urlencode 'ep_id=85046' \
-b 'SESSDATA=xxx'
```
https://api.bilibili.com/pgc/player/web/playurl?avid=2325306&cid=3629601&ep_id=85046

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0, 
    "message": "success", 
    "result": {
        "accept_format": "flv480,mp4", 
        "code": 0, 
        "seek_param": "start", 
        "is_preview": 0, 
        "fnval": 0, 
        "video_project": true, 
        "fnver": 0, 
        "type": "FLV", 
        "bp": 0, 
        "result": "suee", 
        "seek_type": "offset", 
        "from": "local", 
        "video_codecid": 7, 
        "record_info": {
            "record_icon": "", 
            "record": ""
        }, 
        "durl": [
            {
                "size": 111138876, 
                "ahead": "", 
                "length": 1394090, 
                "vhead": "", 
                "backup_url": [
                    "https://upos-sz-mirrorcoso1.bilivideo.com/upgcxcode/01/96/3629601/3629601_da8-1-32.flv?e=ig8euxZM2rNcNbRVhwdVhwdlhWdVhwdVhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1656098195&gen=playurlv2&os=coso1bv&oi=2946990771&trid=a1db84b216ea45dd89225f02a09093fdp&mid=0&platform=pc&upsig=878be08cc0e6bdea705952529e7e6785&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&agrr=1&bw=79726&logo=40000000", 
                    "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/01/96/3629601/3629601_da8-1-32.flv?e=ig8euxZM2rNcNbRVhwdVhwdlhWdVhwdVhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1656098195&gen=playurlv2&os=cosbv&oi=2946990771&trid=a1db84b216ea45dd89225f02a09093fdp&mid=0&platform=pc&upsig=8c31064c84d8e981704815992cfe315c&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=2,3&agrr=1&bw=79726&logo=40000000"
                ], 
                "url": "https://cn-lnsy-cu-v-02.bilivideo.com/upgcxcode/01/96/3629601/3629601_da8-1-32.flv?e=ig8euxZM2rNcNbRVhwdVhwdlhWdVhwdVhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1656098195&gen=playurlv2&os=bcache&oi=2946990771&trid=0000a1db84b216ea45dd89225f02a09093fdp&mid=0&platform=pc&upsig=7a5c4f25b9056359127191390a73bedc&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&cdnid=3281&bvc=vod&nettype=0&orderid=0,3&agrr=1&bw=79726&logo=80000000", 
                "order": 1, 
                "md5": ""
            }
        ], 
        "no_rexcode": 0, 
        "format": "flv480", 
        "support_formats": [
            {
                "display_desc": "480P", 
                "superscript": "", 
                "codecs": [ ], 
                "format": "flv480", 
                "description": "清晰 480P", 
                "quality": 32, 
                "new_description": "480P 清晰"
            }, 
            {
                "display_desc": "360P", 
                "superscript": "", 
                "codecs": [ ], 
                "format": "mp4", 
                "description": "流畅 360P", 
                "quality": 16, 
                "new_description": "360P 流畅"
            }
        ], 
        "message": "", 
        "accept_quality": [
            32, 
            16
        ], 
        "quality": 32, 
        "timelength": 1394090, 
        "has_paid": false, 
        "clip_info_list": [ ], 
        "accept_description": [
            "清晰 480P", 
            "流畅 360P"
        ], 
        "status": 2
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
wget 'https://upos-sz-mirrorhwo1.bilivideo.com/upgcxcode/01/96/3629601/3629601_da8-1-32.flv?e=ig8euxZM2rNcNbRVhwdVhwdlhWdVhwdVhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1656098026&gen=playurlv2&os=hwo1bv&oi=0&trid=f0a1d2d854264369803462f3dd524154p&mid=0&platform=pc&upsig=76c1438153942fda51fbf4eb07e6e5a1&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=0,2&agrr=1&bw=79726&logo=80000000' \
--referer 'https://www.bilibili.com' \
-O 'Download_video.flv'
```

响应正文将返回一个flv文件
