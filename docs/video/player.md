# 播放器

## web 播放器信息

web 播放器的信息接口，提供正常播放需要的元数据，包括：智能防挡弹幕、字幕、章节看点等。

> https://api.bilibili.com/x/player/wbi/v2

*请求方式：GET*

**url 参数：**

| 参数名 | 类型 | 内容      | 必要性      | 备注              |
| ------ | ---- | --------- | ----------- | ----------------- |
| aid    | num  | 稿件 avid | 必要 (可选) | aid 与 bvid 任选 |
| bvid   | str  | 稿件 bvid | 必要 (可选) | aid 与 bvid 任选 |
| cid    | num  | 稿件 cid | 必要 | |
| w_rid | str  | WBI 签名 | 不必要 |  |
| wts   | num  | 当前 unix 时间戳 | 不必要 |  |

**json 回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为 0                     |
| ttl     | num  | 1        |                             |
| data    | obj  | 数据本体 |                             |

`data` 对象：

| 字段      | 类型  | 内容     | 备注 |
| --------- | ----- | -------- | ---- |
|aid        | num  |  视频 aid   |      |
|bvid       | str  |  视频 bvid   |      |
|cid        | num  |  视频 cid   |      |
|dm_mask    | obj  |       |  webmask 信息（如果没有这一项，说明这个视频没有防挡功能） |
|subtitle   | obj  |       | 字幕信息（需要登录，不登录此项内容为 `[]` ）|
|view_points| array  |       | 章节看点信息 |
| 其他      | ...    |        | 主要是观看记录、使用者等级权限、背景音乐等信息   |

`dm_mask`对象（如果有）：

| 字段      | 类型  | 内容     | 备注 |
| --------- | ----- | -------- | ---- |
|cid        | num  |  视频 cid   |      |
|plat       | num  | 未知   |      |
|fps       | num  | webmask 取样 fps   |      |
|time       | num  | 未知   |      |
|mask_url   | str  |  webmask 资源 url |  |

解析 webmask 请看 [智能防挡弹幕](../danmaku/webmask.md)

`subtitle`对象：
| 字段      | 类型  | 内容     | 备注 |
| --------- | ----- | -------- | ---- |
|allow_submit|bool | true   |      |
|  lan      |  str | ""          |      |
|lan_doc | str | ""    | |
|subtitles| array |  | 不登录为 `[]` |

`subtitles` 数组内的元素：

| 字段      | 类型  | 内容     | 备注 |
| --------- | ----- | -------- | ---- |
| ai_status | num  |    |      |
| ai_type   | num  |    |   |
| id  | num | | |
|id_str | str| | 和 id 不一样 |
| is_lock | bool | | |
| lan | str | 语言类型英文字母缩写 ||
| lan_doc | str| 语言类型中文名称 | |
|subtitle_url|str| 资源 url 地址 | |
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
curl -G "https://api.bilibili.com/x/player/wbi/v2?aid=515345690&cid=825851971"
```

```jsonc
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

## 播放反馈

> https://app.bilibili.com/x/resource/laser2

*请求方式: POST*

注: 该接口不传 Cookie

**URL参数:**

|参数名|类型|内容|必要性|备注|
|-|-|-|-|-|
|mid|num|当前用户 mid|不必要|未登录为空|
|buvid|str|BUVID (APP) 或 buvid3 (Web)|必要|可为任意非空字符串|
|app_key|str|APP 密钥|必要|Web: web_player<br />可为任意非空字符串|
|url|str|日志 URL|非必要|从 [上传接口](../creativecenter/upload.md#上传接口) 得到的 upos 协议 URL|
|task_type|num|任务类型|非必要|300: 播放卡顿<br />301: 进度条君无法调戏<br />354: 校园网无法访问<br />303: 弹幕无法显示<br />553: 跳过首尾时间有误<br />304: 出现浮窗广告<br />305: 无限小电视<br />302: 音画不同步<br />306: 黑屏<br />307: 其他|

**JSON回复:**

|字段|类型|内容|备注|
|-|-|-|-|
|code|num|返回值|0: 成功<br />-400: 请求错误|
|message|str|错误信息|默认为 0|
|ttl|num|1||
|data|obj|数据本体| |

`data` 对象:

|字段|类型|内容|备注|
|-|-|-|-|
|task_id|num|任务 ID?||

**示例:**

播放反馈无限小电视, 不登录, 不传文件, buvid 为 `chenrui-in-icu`

```shell
curl -X POST "https://app.bilibili.com/x/resource/laser2" \
--data-urlencode "buvid=chenrui-in-icu" \
--data-urlencode "app_key=web_player" \
--data-urlencode "task_type=305"
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "task_id": 850448532
  }
}
```

</details>
