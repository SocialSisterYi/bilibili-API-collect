# 课程视频流URL

<img src="../../assets/img/download.svg" width="100" height="100"/>

## 获取课程视频流URL（web端）

> https://api.bilibili.com/pugv/player/web/playurl

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**注：**

1. 本接口为课程视频专用，故与普通视频不互通
2. 大部分使用方法及视频的取流方法继承[视频流url文档](../video/videostream_url.md)

**url参数：**

| 参数名 | 类型 | 内容           | 必要性 | 备注                                                         |
| ------ | ---- | -------------- | ------ | ------------------------------------------------------------ |
| avid   | num  | 课程avid       | 必要   |                                                              |
| ep_id  | num  | 课程epid       | 必要   |                                                              |
| cid    | num  | 视频cid        | 必要   |                                                              |
| qn     | num  | 视频清晰度选择 | 非必要 | 参考[qn定义](../video/videostream_url.md#qn视频清晰度标识)   |
| fnver  | num  | 视频流版本     | 非必要 | 参考[fnver定义](../video/videostream_url.md#fnver视频流版本标识) |
| fnval  | num  | 视频流类型     | 非必要 | 参考[fnval定义](../video/videostream_url.md#fnval视频流格式标识) |
| fourk  | num  | 是否允许4K视频 | 非必要 | 默认为0<br />画质最高1080P：0<br />画质最高4K：1             |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功 <br />-400：请求错误<br />-404：无视频<br />-403：权限不足（未购买） |
| message | str  | 错误信息 | 默认为success                                                |
| data    | obj  | 数据本体 |                                                              |

`data`对象：

| 字段               | 类型   | 内容                   | 备注                                     |
| ------------------ | ------ | ---------------------- | ---------------------------------------- |
| accept_format      | str    | 视频支持的分辨率的格式 |                                          |
| code               | num    | 0                      |                                          |
| durl               | array | 视频分段               |                                          |
| seek_param         | str    | start                  |                                          |
| no_rexcode         | num    | 0                      |                                          |
| format             | str    | 视频格式               |                                          |
| fnval              | num    | 0                      |                                          |
| video_project      | bool   | true                   |                                          |
| fnver              | num    | 0                      |                                          |
| message            | str    | 空                     |                                          |
| type               | str    | 视频格式               |                                          |
| accept_quality     | array | 视频支持的分辨率列表   |                                          |
| quality            | num    | 视频分辨率代码         | **值含义见上表**                         |
| timelength         | num    | 视频长度               | 单位为毫秒<br />不同分辨率可能有略微差异 |
| result             | str    | suee                   | **作用尚不明确**                         |
| seek_type          | str    | offset                 | **作用尚不明确**                         |
| has_paid           | bool   | false                  | **作用尚不明确**                         |
| supportFormats     | array | 视频分辨率详细列表     |                                          |
| from               | str    | local                  | **作用尚不明确**                         |
| video_codecid      | num    | ？？？                 | **作用尚不明确**                         |
| accept_description | array | 视频支持的分辨率列表   |                                          |
| status             | num    | 0                      | **作用尚不明确**                         |

`data`中的`durl`数组：

| 项   | 类型 | 内容              | 备注 |
| ---- | ---- | ----------------- | ---- |
| 0    | obj  | 视频分段1信息     |      |
| n    | obj  | 视频分段(n+1)信息 |      |
| ……   | obj  | ……                |      |

`durl`数组中的对象：

| 字段       | 类型   | 内容         | 备注                               |
| ---------- | ------ | ------------ | ---------------------------------- |
| size       | num    | 视频大小     | 单位为Byte                         |
| ahead      | str    | 空           | 作用尚不明确                       |
| length     | num    | 视频长度     | 单位为毫秒                         |
| vhead      | str    | 空           | 作用尚不明确                       |
| backup_url | array | 备用视频流   |                                    |
| url        | str    | 视频流url    | 链接有效时间为120min |
| order      | num    | 视频分段序号 | 某些视频会分为多个片段             |

`durl`数组中的对象中的`backup_url`数组：

| 项   | 类型 | 内容          | 备注             |
| ---- | ---- | ------------- | ---------------- |
| 0    | str  | 备用视频流url | 有效时间为120min |

`data`中的`supportFormats`数组：

| 项   | 类型 | 内容                | 备注 |
| ---- | ---- | ------------------- | ---- |
| 0    | obj  | 分辨率详细信息1     |      |
| n    | obj  | 分辨率详细信息(n+1) |      |
| ……   | obj  | ……                  | ……   |

`supportFormats`数组中的对象：

| 字段        | 类型 | 内容       | 备注 |
| ----------- | ---- | ---------- | ---- |
| format      | str  | 分辨率名称 |      |
| description | atr  | 分辨率备注 |      |
| quality     | num  | 分辨率代码 |      |

`data`中的`accept_description`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | str  | 分辨率名称1     |      |
| n    | str  | 分辨率名称(n+1) |      |
| ……   | str  | ……              | ……   |

**示例：**

获取课程`ep790`（cid=`132105993`，avid=`76973173`）的视频流url，清晰度为1080P60

```shell
curl -G 'https://api.bilibili.com/pugv/player/web/playurl' \
--data-urlencode 'ep_id=790' \
--data-urlencode 'avid=76973173' \
--data-urlencode 'cid=132105993' \
--data-urlencode 'qn=116' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "data": {
        "accept_format": "flv_p60,flv720_p60,flv,flv720,flv480,flv360",
        "code": 0,
        "durl": [
            {
                "size": 1105854161,
                "ahead": "",
                "length": 2222204,
                "vhead": "",
                "backup_url": [
                    "https://upos-sz-mirrorks3c.bilivideo.com/upgcxcode/93/59/132105993/132105993_da2-1-116.flv?e=ig8euxZM2rNcNbNghzTBhwdlhbNz7bUVhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1591596728&gen=playurl&os=ks3cbv&oi=606633803&trid=76bea9a9e56f4cb89a9aff2f8213c9acu&platform=pc&upsig=b271bf493bff32ffe62969582c8d18b4&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=0&orderid=1,2&logo=40000000"
                ],
                "url": "https://upos-sz-mirrorks3.bilivideo.com/upgcxcode/93/59/132105993/132105993_da2-1-116.flv?e=ig8euxZM2rNcNbNghzTBhwdlhbNz7bUVhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1591596728&gen=playurl&os=ks3bv&oi=606633803&trid=76bea9a9e56f4cb89a9aff2f8213c9acu&platform=pc&upsig=6a8ae3711bd0bb2a484ec2427d659b14&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=0&orderid=0,2&logo=80000000",
                "order": 1,
                "md5": ""
            }
        ],
        "seek_param": "start",
        "no_rexcode": 0,
        "format": "flv_p60",
        "fnval": 0,
        "video_project": true,
        "fnver": 0,
        "message": "",
        "type": "FLV",
        "accept_quality": [
            116,
            74,
            80,
            64,
            32,
            16
        ],
        "quality": 116,
        "timelength": 2222204,
        "result": "suee",
        "seek_type": "offset",
        "has_paid": false,
        "supportFormats": [
            {
                "format": "flv_p60",
                "description": "高清 1080P60",
                "quality": 116
            },
            {
                "format": "flv720_p60",
                "description": "高清 720P60",
                "quality": 74
            },
            {
                "format": "flv",
                "description": "高清 1080P",
                "quality": 80
            },
            {
                "format": "flv720",
                "description": "高清 720P",
                "quality": 64
            },
            {
                "format": "flv480",
                "description": "清晰 480P",
                "quality": 32
            },
            {
                "format": "flv360",
                "description": "流畅 360P",
                "quality": 16
            }
        ],
        "from": "local",
        "video_codecid": 7,
        "accept_description": [
            "高清 1080P60",
            "高清 720P60",
            "高清 1080P",
            "高清 720P",
            "清晰 480P",
            "流畅 360P"
        ],
        "status": 0
    },
    "message": "success"
}
```

</details>