# 入站必刷视频

## 获取入站必刷视频

> https://api.bilibili.com/x/web-interface/popular/precious

*请求方式：GET*

**json回复：**

根对象：

| 字段    | 类型  | 内容     | 备注                        |
| ------- | ----- | -------- | --------------------------- |
| code    | num   | 返回值   | 0：成功<br />-400：请求错误 |
| message | str   | 错误信息 | 默认为0                     |
| ttl     | num   | 1        |                             |
| data    | array | 视频列表 |                             |

`data` 字段：

| 字段    | 类型  | 内容     | 备注                        |
| - | - | - | - |
| title | str | 标题 | 入站必刷 |
| media_id | num | media_id | |
| explain | str | 解释（概括）| 我不允许还有人没看过这??个宝藏视频！ |
| list | array | 列表 | |

`data`中的`list`数组中的对象:

基本同[获取视频详细信息（web端）](../video/info.md#获取视频详细信息web端)中的data对象

**示例：**

``` shell
curl -G 'https://api.bilibili.com/x/web-interface/popular/precious'
```

<details>
<summary>查看响应示例:</summary>

```jsonc
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "title": "入站必刷",
    "media_id": 496307088,
    "explain": "我不允许还有人没看过这98个宝藏视频！",
    "list": [
      // ...
      {
        "aid": 706,
        "videos": 1,
        "tid": 47,
        "tname": "同人·手书",
        "copyright": 2,
        "pic": "http://i1.hdslb.com/bfs/archive/753453a776fca838165a52c7511e8557857b61ea.jpg",
        "title": "【東方】Bad Apple!! ＰＶ【影絵】",
        "pubdate": 1256995125,
        "ctime": 1497344829,
        "desc": "sm8628149 2011/9/25追记：大家如果看到空耳字幕请果断举报，净化弹幕环境，你我有责，感谢。",
        "state": 0,
        "duration": 219,
        "rights": {
          "bp": 0,
          "elec": 0,
          "download": 0,
          "movie": 0,
          "pay": 0,
          "hd5": 0,
          "no_reprint": 0,
          "autoplay": 1,
          "ugc_pay": 0,
          "is_cooperation": 0,
          "ugc_pay_preview": 0,
          "no_background": 0,
          "arc_pay": 0,
          "pay_free_watch": 0
        },
        "owner": {
          "mid": 37,
          "name": "折射",
          "face": "http://i1.hdslb.com/bfs/face/49d19d3d9cc4b3938128cacd650859ac612156a1.gif"
        },
        "stat": {
          "aid": 706,
          "view": 11329388,
          "danmaku": 82247,
          "reply": 544932,
          "favorite": 502984,
          "coin": 195079,
          "share": 95877,
          "now_rank": 0,
          "his_rank": 88,
          "like": 480388,
          "dislike": 0,
          "vt": 0,
          "vv": 11329388
        },
        "dynamic": "",
        "cid": 3724723,
        "dimension": {
          "width": 480,
          "height": 360,
          "rotate": 0
        },
        "season_id": 879555,
        "short_link_v2": "https://b23.tv/BV1xx411c79H",
        "cover43": "",
        "bvid": "BV1xx411c79H",
        "season_type": 0,
        "is_ogv": false,
        "ogv_info": null,
        "rcmd_reason": "",
        "enable_vt": 0,
        "ai_rcmd": null,
        "achievement": "东方project标志性视频"
      },
      // ...
    ]
  }
}
```

</details>
