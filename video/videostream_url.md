# 视频流URL

## 获取视频流URL

> http://api.bilibili.com/x/player/playurl 

*方式:GET*

获取会员专属视频及720P以上清晰度视频时需要登录(SESSDATA)

会员专属及高帧率（码率）视频需要带有大会员的账号token(SESSDATA)

获取的url有效时间为120min，超时失效需要重新获取

**参数：**

| 参数名 | 类型 | 内容           | 必要性 | 备注                                               |
| ------ | ---- | -------------- | ------ | -------------------------------------------------- |
| aid    | url  | 视频avID       | 非必要 | avID与bvID任选一个                                 |
| bvid   | url  | 视频bvID       | 非必要 | avID与bvID任选一个                                 |
| cid    | url  | 视频CID        | 必要   |                                                    |
| qn     | url  | 视频清晰度选择 | 非必要 | 未登录默认32<br />登录默认64<br />**值含义见下表** |

分辨率代码：

| 值   | 含义                   |
| ---- | ---------------------- |
| 16   | 360P 流畅              |
| 32   | 480P 清晰              |
| 64   | 720P 高清（登录）      |
| 74   | 720P60 高清（大会员）  |
| 80   | 1080P 高清（登录）     |
| 112  | 1080P+ 高清（大会员）  |
| 116  | 1080P60 高清（大会员） |
| 120  | 4K 超清（大会员）      |

**json回复：**

根对象：

| 字段    | 类型                          | 内容     | 备注                                           |
| ------- | ----------------------------- | -------- | ---------------------------------------------- |
| code    | num                           | 返回值   | 0：成功 <br />-400：请求错误<br />-404：无视频 |
| message | str                           | 错误信息 | 默认为0                                        |
| ttl     | num                           | 1        | 作用尚不明确                                   |
| data    | 有效时：obj<br />无效时：null | 数据本体 |                                                |

`data`对象：

| 字段               | 类型   | 内容                     | 备注                                     |
| ------------------ | ------ | ------------------------ | ---------------------------------------- |
| from               | str    | local                    | 作用尚不明确                             |
| result             | str    | suee                     | 作用尚不明确                             |
| message            | str    | 空                       | 作用尚不明确                             |
| quality            | num    | 视频分辨率代码           | **值含义见上表**                         |
| format             | str    | 视频格式                 |                                          |
| timelength         | num    | 视频长度                 | 单位为毫秒<br />不同分辨率可能有略微差异 |
| accept_format      | str    | 视频支持的分辨率的格式   |                                          |
| accept_description | arrary | 视频支持的分辨率列表     |                                          |
| accept_quality     | arrary | 视频支持的分辨率代码列表 | **值含义见上表**                         |
| video_codecid      | num    | ？？？                   | 作用尚不明确                             |
| seek_param         | str    | start                    | 作用尚不明确                             |
| seek_type          | str    | offset                   | 作用尚不明确                             |
| durl               | arrary | 视频流地址信息           |                                          |

`data`中的`accept_description`数组：

| 项   | 类型 | 内容        | 备注 |
| ---- | ---- | ----------- | ---- |
| 0    | str  | 分辨率1     |      |
| n    | str  | 分辨率(n+1) |      |
| ……   | str  | ……          | ……   |

`data`中的`accept_quality`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | str  | 分辨率代码1     |      |
| n    | str  | 分辨率代码(n+1) |      |
| ……   | str  | ……              | ……   |

`data`中的`durl`数组：

| 项   | 类型 | 内容           | 备注 |
| ---- | ---- | -------------- | ---- |
| 0    | obj  | 视频流地址信息 |      |

`data`中的`durl`数组中的对象：

| 字段       | 类型   | 内容       | 备注                           |
| ---------- | ------ | ---------- | ------------------------------ |
| order      | num    | 1          | 作用尚不明确                   |
| length     | num    | 视频长度   | 单位为毫秒                     |
| size       | num    | 视频大小   | 单位为Byte                     |
| ahead      | str    | ？？？     | 作用尚不明确                   |
| vhead      | str    | ？？？     | 作用尚不明确                   |
| url        | str    | 视频流url  | **重要**<br />有效时间为120min |
| backup_url | arrary | 备用视频流 |                                |

`data`中的`durl`数组中的对象中的`backup_url`数组：

| 项   | 类型 | 内容          | 备注             |
| ---- | ---- | ------------- | ---------------- |
| 0    | str  | 备用视频流url | 有效时间为120min |

**示例：**

获取视频`av99999999`/`BV1y7411Q7Eq`中的1P（CID=`171776208`）的视频流url，清晰度为1080P+

 http://api.bilibili.com/x/player/playurl?avid=99999999&cid=171776208&qn=112

 同http://api.bilibili.com/x/player/playurl?bvid=BV1y7411Q7Eq&cid=171776208&qn=112

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "from": "local",
        "result": "suee",
        "message": "",
        "quality": 112,
        "format": "hdflv2",
        "timelength": 283701,
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
                "length": 283701,
                "size": 219827828,
                "ahead": "",
                "vhead": "",
                "url": "http://upos-sz-mirrorhw.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-112.flv?e=ig8euxZM2rNcNbhMnwhVhwdlhzK3hzdVhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1589565412&gen=playurl&os=hwbv&oi=606631998&trid=e0fa5f9a7610440a871279a28fae85aau&platform=pc&upsig=5f469cb4c190ed54b89bd40cc37eddff&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&logo=80000000",
                "backup_url": [
                    "http://upos-sz-mirrorks3c.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-112.flv?e=ig8euxZM2rNcNbhMnwhVhwdlhzK3hzdVhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1589565412&gen=playurl&os=ks3cbv&oi=606631998&trid=e0fa5f9a7610440a871279a28fae85aau&platform=pc&upsig=914ef921c5258e067c382601a4b1f81c&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&logo=40000000"
                ]
            }
        ]
    }
}
```



## 视频的获取

将`data`.`durl`.`[0]`.`url`或`data`.`durl`.`[0]`.`backup_url`.`[0]`中的内容作为url进行GET操作

Header中的`referer`为 `http://www.bilibili.com`或`https://www.bilibili.com`域名下

以上述示例为例：

**无referer或错误的情况会返回403 Forbidden**

**发送：**

```http
GET http://upos-sz-mirrorhw.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-112.flv?e=ig8euxZM2rNcNbhMnwhVhwdlhzK3hzdVhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1589565412&gen=playurl&os=hwbv&oi=606631998&trid=e0fa5f9a7610440a871279a28fae85aau&platform=pc&upsig=5f469cb4c190ed54b89bd40cc37eddff&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&logo=80000000 HTTP/1.1
User-Agent: PostmanRuntime/7.24.1
Accept: */*
Cache-Control: no-cache
Postman-Token: 7f6ab887-69da-400c-ba7d-f5c40f27e1c3
Host: upos-sz-mirrorhw.bilivideo.com
Accept-Encoding: gzip, deflate, br
Connection: keep-alive


```

**回复：**

```http
HTTP/1.1 403 Forbidden
Server: openresty
Date: Fri, 15 May 2020 16:09:34 GMT
Content-Type: video/x-flv
Content-Length: 166
Connection: keep-alive
X-Upsig-Version: 190420
via: CHN-SCchengdu-AREACT1-CACHE57[1]
Access-Control-Expose-Headers: Content-Length,Content-Range

<html>
<head><title>403 Forbidden</title></head>
<body bgcolor="white">
<center><h1>403 Forbidden</h1></center>
<hr><center>

```

**有referer时则验证通过**

**发送：**

```http
GET http://upos-sz-mirrorhw.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-112.flv?e=ig8euxZM2rNcNbhMnwhVhwdlhzK3hzdVhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1589565412&gen=playurl&os=hwbv&oi=606631998&trid=e0fa5f9a7610440a871279a28fae85aau&platform=pc&upsig=5f469cb4c190ed54b89bd40cc37eddff&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&logo=80000000 HTTP/1.1
referer: http://www.bilibili.com/
User-Agent: PostmanRuntime/7.24.1
Accept: */*
Cache-Control: no-cache
Postman-Token: 9e409e47-dc77-4c40-8fe2-1ea7c0905961
Host: upos-sz-mirrorhw.bilivideo.com
Accept-Encoding: gzip, deflate, br
Connection: keep-alive


```

**回复：**

正文为视频内容

```http
HTTP/1.1 200 OK
Date: Fri, 15 May 2020 16:13:01 GMT
Content-Type: video/x-flv
Content-Length: 219827828
Connection: keep-alive
X-Upsig-Version: 190420
Server: openresty
x-reserved: amazon, aws and amazon web services are trademarks or registered trademarks of Amazon Technologies, Inc
x-amz-request-id: 00000171ED11F963915698CFDF24DE1C
ETag: "b5b14ac8295bf38b56650cc7660aa16b-5"
Last-Modified: Mon, 30 Mar 2020 16:50:07 GMT
x-amz-expiration: expiry-date="Sat, 30 May 2020 00:00:00 GMT", rule-id="rule-5d42"
x-amz-id-2: 32AAAQAAEAABAAAQAAEAABAAAQAAEAABCScDbHkW6YJFJqXuVozY87putiDpckA7
X-CCDN-Expires: 2304606
via: CHN-SCchengdu-AREACT1-CACHE66[6],CHN-SCchengdu-AREACT1-CACHE22[0,TCP_HIT,3],CHN-ZJwenzhou-AREACT1-CACHE29[20],CHN-ZJwenzhou-AREACT1-CACHE22[0,TCP_HIT,17],CHN-SH-GLOBAL1-CACHE28[24],CHN-SH-GLOBAL1-CACHE21[0,TCP_HIT,22]
x-hcs-proxy-type: 1
X-CCDN-CacheTTL: 2592000
nginx-hit: 1
Age: 287667
Accept-Ranges: bytes
Access-Control-Expose-Headers: Content-Length,Content-Range

…………
```

