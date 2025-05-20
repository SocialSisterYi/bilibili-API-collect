# 音频流URL

<img src="../../assets/img/download.svg" width="100" height="100"/>

## 音质qn参数定义

音质`qn`参数：

| 代码 | 含义                 |
| ---- | -------------------- |
| 0    | 流畅 128K            |
| 1    | 标准 192K            |
| 2    | 高品质 320K          |
| 3    | 无损 FLAC （大会员） |

## 获取音频流URL(web端)

> https://www.bilibili.com/audio/music-service-c/web/url

*请求方式：GET*

**注：web端无法播放完整付费歌曲，付费歌曲为30s试听片段**

本接口仅能获取192K音质的音频

**url参数：**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| sid    | num  | 音频auid | 必要   |      |
| quality | num | 2 | 不必要 |  |
| privilege | num | 2 | 不必要 |  |

**json回复：**

根对象：

| 字段 | 类型 | 内容     | 备注                                                        |
| ---- | ---- | -------- | ----------------------------------------------------------- |
| code | num  | 返回值   | 0: 成功<br />4511006: 已跳过无法播放的歌曲<br />7201006：未找到或已下架<br />72000000：请求错误 |
| message | str | 返回值 | 字符串形式的 code |
| msg  | str  | 返回信息 | 成功为 success |
| data | obj  | 数据本体 |                                                             |

`data`对象：

| 字段      | 类型  | 内容      | 备注                                    |
| --------- | ----- | --------- | --------------------------------------- |
| sid       | num   | 音频auid  |                                         |
| type      | num   | 音质标识  | -1：试听片段（192K）<br />1：192K       |
| info      | str   | 空        |                                       |
| timeout   | num   | 有效时长  | 单位为秒<br />一般为3h                  |
| size      | num   | 文件大小  | 单位为字节<br />当`type`为-1时`size`为0 |
| cdns      | array | 音频流url |                                         |
| qualities | null  |           |                                         |
| title     | str  | 空        |                                         |
| cover     | str  | 空        |                                         |

`data`对象的`cdns`数组：

| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| 0    | str  | 音频流url     |      |
| 1    | str  | 备用音频流url | 可能不存在 |

**示例：**

```shell
curl -G 'https://www.bilibili.com/audio/music-service-c/web/url' \
--data-urlencode 'sid=777180'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "data": {
    "sid": 777180,
    "title": "",
    "cover": "",
    "type": 1,
    "info": "",
    "timeout": 10800,
    "size": 5579903,
    "cdns": [
      "https://upos-sz-mirrorcos.bilivideo.com/ugaxcode/m190314ws1dikiap1oivtapctuj1agjc-192k.m4a?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1725013547&gen=playurlv2&os=cosbv&oi=1746706124&trid=493923009cef4225ab8e1b9bda42c635B&mid=0&platform=pc&og=cos&upsig=043779511e2770cf6c3da04ed8a89f25&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=0,1&logo=00000000"
    ],
    "qualities": null
  },
  "message": "0",
  "msg": "success"
}
```

</details>

## 获取音频流URL（可获取付费音频）

> https://api.bilibili.com/audio/music-service-c/url

*请求方式：GET*

认证方式：APP或Cookie（SESSDATA）

**注：付费音乐需要有带大会员或音乐包的账号登录（Cookie或APP），否则为试听片段**

无损音质需要登录的用户为会员

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注           |
| ---------- | ---- | ------------ | ----------- | -------------- |
| access_key | str  | APP登录Token | APP方式必要 |                |
| songid     | num  | 音频auid     | 必要        |                |
| quality    | num  | 音质代码     | 必要        | **详情见上表** |
| privilege  | num  | 必须为`2`    | 必要        |                |
| mid        | num  | 当前用户mid  | 必要        | 可为任意值     |
| platform   | str  | 平台标识     | 必要        | 可为任意值     |

**json回复：**

根对象：

| 字段 | 类型 | 内容     | 备注                                                        |
| ---- | ---- | -------- | ----------------------------------------------------------- |
| code | num  | 返回值   | 0:成功<br />7201006：未找到或已下架<br />72000000：请求错误 |
| msg  | str  | 错误信息 | 默认为success                                               |
| data | obj  | 数据本体 |                                                             |

`data`对象：

| 字段      | 类型  | 内容        | 备注                                                         |
| --------- | ----- | ----------- | ------------------------------------------------------------ |
| sid       | num   | 音频auid    |                                                              |
| type      | num   | 音质标识    | -1：试听片段（192K）<br />0：128K<br />1：192K<br />2：320K<br />3：FLAC |
| info      | str   | 空          | **作用尚不明确**                                             |
| timeout   | num   | 有效时长    | 单位为秒<br />一般为3h                                       |
| size      | num   | 文件大小    | 单位为字节<br />当`type`为-1时`size`为0                      |
| cdns      | array | 音频流url   |                                                              |
| qualities | array | 音质列表    |                                                              |
| title     | str   | 音频标题    |                                                              |
| cover     | str   | 音频封面url |                                                              |

`data`对象的`cdns`数组：


| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| 0    | str  | 音频流url     |      |
| 1    | str  | 备用音频流url |      |

`data`对象的`qualities`数组：


| 项   | 类型 | 内容        | 备注             |
| ---- | ---- | ----------- | ---------------- |
| 0    | obj  | 音质1       | 音质由高向低顺序 |
| n    | obj  | 音质（n+1） |                  |

`qualities`数组中的对象：

| 字段        | 类型 | 内容             | 备注                   |
| ----------- | ---- | ---------------- | ---------------------- |
| type        | num  | 音质代码         | **详情见上表**         |
| desc        | str  | 音质名称         |                        |
| size        | num  | 该音质的文件大小 | 单位为字节             |
| bps         | str  | 比特率标签       |                        |
| tag         | str  | 音质标签         |                        |
| require     | num  | 是否需要会员权限 | 0：不需要<br />1：需要 |
| requiredesc | str  | 会员权限标签     |                        |

**示例：**

获取音频`au682118`的音频流url，音质为`3（无损）`

Cookie方式：

```shell
curl -G 'https://api.bilibili.com/audio/music-service-c/url' \
--data-urlencode 'songid=682118' \
--data-urlencode 'quality=3' \
--data-urlencode 'privilege=2' \
--data-urlencode 'platform=android' \
--data-urlencode 'mid=293793435' \
-b 'SESSDATA=xxx'
```

APP方式：

```shell
curl -G 'https://api.bilibili.com/audio/music-service-c/url' \
--data-urlencode 'access_key=xxx' \
--data-urlencode 'songid=682118' \
--data-urlencode 'quality=3' \
--data-urlencode 'privilege=2' \
--data-urlencode 'platform=android' \
--data-urlencode 'mid=293793435'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "sid": 682118,
        "type": 3,
        "info": "",
        "timeout": 10800,
        "size": 34456494,
        "cdns": [
            "https://upos-sz-mirrorkodo.bilivideo.com/ugaxcode/m190102ws2pzf6jitbem841vq2x0du5x-flac.flac?deadline=1595332269&gen=uga&os=kodobv&uparams=deadline,gen,os&upsig=ac2284d97a61ef8758681eccf621c56d",
            "https://upos-sz-mirrorks3.bilivideo.com/ugaxcode/m190102ws2pzf6jitbem841vq2x0du5x-flac.flac?deadline=1595332269&gen=uga&os=ks3bv&uparams=deadline,gen,os&upsig=3ac7d94dda5664f6f95dbfffeb289744"
        ],
        "qualities": [
            {
                "type": 3,
                "desc": "无损音质",
                "size": 34456494,
                "bps": "",
                "tag": "SQ",
                "require": 1,
                "requiredesc": "付费享受"
            },
            {
                "type": 2,
                "desc": "高品质",
                "size": 10788682,
                "bps": "320kbit/s",
                "tag": "HQ",
                "require": 0,
                "requiredesc": ""
            },
            {
                "type": 1,
                "desc": "标准",
                "size": 6491973,
                "bps": "192kbit/s",
                "tag": "",
                "require": 0,
                "requiredesc": ""
            },
            {
                "type": 0,
                "desc": "流畅",
                "size": 4343667,
                "bps": "128kbit/s",
                "tag": "",
                "require": 0,
                "requiredesc": ""
            }
        ],
        "title": "aLIEz",
        "cover": "http://i0.hdslb.com/bfs/music/61d3f8cfdce14d2d1b006af59559c9bd22a2d21b.jpg"
    }
}
```

</details>

## 音频流的获取

将 `data.cdns[n]` 作为 URL 进行 GET 操作

需要验证请求头 `User-Agent` 不为空且不含敏感字串, 且 `Referer` 必须在 `.bilibili.com` 下

**示例:**

使用 cURL + FFPlay 直接从音频流播放

```shell
curl -G "https://upos-sz-mirrorcos.bilivideo.com/ugaxcode/7bf6a3a3e94421ccc653f005457b1e8c-192k.m4a?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1725013121&gen=playurlv2&os=cosbv&oi=1823807031&trid=1a4703f1e7344bb891691c5857e8cfb9B&mid=0&platform=pc&og=cos&upsig=e3a9fba59b46ab2720c8b1807844e9f3&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=0,1&logo=00000000" \
--referer 'https://www.bilibili.com/' -A 'Mozilla/5.0' \
--output - | ffplay -
```
