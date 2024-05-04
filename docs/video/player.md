# web播放器信息

web播放器的信息接口，提供正常播放需要的元数据，包括：智能防挡弹幕、字幕、章节看点等。

> https://api.bilibili.com/x/player/wbi/v2

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容      | 必要性      | 备注              |
| ------ | ---- | --------- | ----------- | ----------------- |
| aid    | num  | 稿件 avid | 必要 (可选) | aid 与 bvid 任选 |
| bvid   | str  | 稿件 bvid | 必要 (可选) | aid 与 bvid 任选 |
| cid    | num  | 稿件 cid | 必要 | |
| w_rid   | str  | 未知 | 不必要 |  |
| wts   | num  | 当前unix时间戳 | 不必要 |  |


**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        |                             |
| data    | obj  | 数据本体 |                             |

`data`对象：

| 字段      | 类型  | 内容     | 备注 |
| --------- | ----- | -------- | ---- |
|aid        | num  |  视频 aid   |      |
|bvid       | str  |  视频 bvid   |      |
|cid        | num  |  视频 cid   |      |
|dm_mask    | obj  |       |  webmask信息（如果没有这一项，说明这个视频没有防挡功能） |
|subtitle   | obj  |       | 字幕信息（需要登录，不登录此项内容为 `[]` ）|
|view_points| array  |       | 章节看点信息 |
| 其他      | ...    |        | 主要是观看记录、使用者等级权限等个人信息   |


`dm_mask`对象（如果有）：

| 字段      | 类型  | 内容     | 备注 |
| --------- | ----- | -------- | ---- |
|cid        | num  |  视频 cid   |      |
|plat       | num  | 未知   |      |
|fps       | num  | webmask取样fps   |      |
|time       | num  | 未知   |      |
|mask_url   | str  |  webmask资源uri |  |

解析 webmask 请看 [智能防挡弹幕](danmaku/webmask.md)

`subtitle`对象：
| 字段      | 类型  | 内容     | 备注 |
| --------- | ----- | -------- | ---- |
|allow_submit|bool | true   |      |
|  lan      |  str | ""          |      |
|lan_doc | str | ""    | | |
|subtitles| array |  | 不登录为[] |

`subtitles` 数组内的元素：

| 字段      | 类型  | 内容     | 备注 |
| --------- | ----- | -------- | ---- |
| ai_status | num  |    |      |
| ai_type   | num  |    |   |
| id  | num | | |
|id_str | str| | 和id不一样 |
| is_lock | bool | |
| lan | str | 语言类型英文字母缩写 ||
| lan_doc | str| 语言类型中文名称 | |
|subtitle_url|str| 资源url地址 | |
|type| num | 0 | |


`view_point` 数组内的元素：
| 字段      | 类型  | 内容     | 备注 |
| --------- | ----- | -------- | ---- |
| content | num  |  章节名  |      |
| from | num  |    |      |
| to | num  |    |      |
| type | num  |    |      |
| imgUrl | str  |  图片资源地址  |      |
| logoUrl | str  |  ""  |      |

示例:

```shell
curl -G https://api.bilibili.com/x/player/wbi/v2?aid=515345690&cid=825851971
```

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "aid": 515345690,
        "bvid": "BV1Fg411D7Jy",
        ... // 省略
        "dm_mask": {
            "cid": 825851971,
            "plat": 0,
            "fps": 30,
            "time": 0,
            "mask_url": "//upos-sz-staticcos-cmask.bilivideo.com/cmaskboss/825851971_30_0.webmask?trid=219266863a1442baa05086b4285ba923B&orderid=0,1&logo=00000000"
        },
        "view_points": [
            {
                "type": 2,
                "from": 0,
                "to": 27,
                "content": "狗啃的",
                "imgUrl": "http://i0.hdslb.com/bfs/vchapter/825851971_0.jpg",
                "logoUrl": ""
            },
            {
                "type": 2,
                "from": 27,
                "to": 63,
                "content": "椒牌泡菜",
                "imgUrl": "http://i0.hdslb.com/bfs/vchapter/825851971_27.jpg",
                "logoUrl": ""
            }, ... // 省略
        ],
        "subtitle": {
            "allow_submit": true,
            "lan": "",
            "lan_doc": "",
            "subtitles": [], // 未登录，下面是登录的版本
            "subtitles":[
                {
                    "id": 1042985852759993300,
                    "lan": "ai-zh",
                    "lan_doc": "中文（自动生成）",
                    "is_lock": false,
                    "subtitle_url": "//aisubtitle.hdslb.com/bfs/ai_subtitle/prod/5153456908258519712094280c7c2884b77929bab82f64530f?auth_key=1714795727-a8eb254b60bc4a73bc8662da51005340-0-1c305894e48e959979b163636461fb8f",
                    "type": 1,
                    "id_str": "1042985852759993344",
                    "ai_type": 0,
                    "ai_status": 2
                }
            ]
        }
    }
}
```



