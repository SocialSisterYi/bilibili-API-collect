# 入站必刷视频

## 获取入站必刷视频

> https://api.bilibili.com/x/web-interface/popular/precious

**url参数：**

| 字段      | 类型  | 内容     | 必要性 | 备注 |
| --------- | ---- | -------- | ----- | ----- |
| page      | num  | 页码     | 非必要 | 默认为`1` |
| page_size | num  | 每页数量 | 非必要 | 默认为`85` |

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
| title | string | 标题 | 入站必刷 |
| media_id | int | media_id | |
| explain | string | 解释（概括）| 我不允许还有人没看过这85个宝藏视频！ |
| list | list | 列表 | |

`data` 中的 `list` 字段：

| 字段    | 类型  | 内容     | 备注                        |
| - | - | - | - |
| aid | int | aid | |
| videos | int | 视频数? | |
| tid | int | 分区 id | |
| tname | string | 分区名称 | |
| copyright | int | 版权 | |
| pic | url | 封面 url | |
| title | string | 标题 | |
| pubdate | int | 发布时间 | 时间戳 |
| ctime | int | 暂不清楚 | 时间戳 |
| desc | string | 简介 | |
| state | int | 暂不清楚 | |
| duration | int | 视频时长 | 单位为秒 |
| mission_id | int | 暂不清楚 | |
| rights | dict | 暂不清楚 | 好像没啥么用 |
| owner | dict | 作者 | |
| stat | dict | 状态 | |
| dynamic | string | 动态发布时写的文字 | |
| cid | int | cid | |
| dimension | dict | 视频的一些属性 | |
| season_id | int | 暂不清楚 | |
| short_link | string | 短链 | |
| short_link_v2 | string | 短链 | 第二版 |
| bvid | string | bvid | |
| season_type | int | 分区 tid? | |
| is_ogv | bool | 暂不清楚 | |
| ogv_info | dict/null? | 暂不清楚 | |
| rcmd_reason | string? | 暂不清楚 | |
| achievement | string | 荣誉概述 | |

**示例：**

``` shell
curl -G 'https://api.bilibili.com/x/web-interface/popular/precious'
```
<details>
<summary>查看响应事例:</summary>

``` json
{
    "code":0,
    "message":"0",
    "ttl":1,
    "data":{
        "title":"入站必刷",
        "media_id":496307088,
        "explain":"我不允许还有人没看过这85个宝藏视频！",
        "list":[
            {
                "aid":715024588,
                "videos":1,
                "tid":233,
                "tname":"极客DIY",
                "copyright":1,
                "pic":"http://i1.hdslb.com/bfs/archive/55ce9a4d1797ec56a0d4ed727f1a279b89ec3664.jpg",
                "title":"【才浅】15天花20万元用500克黄金敲数万锤纯手工打造三星堆黄金面具",
                "pubdate":1618207101,
                "ctime":1618207101,
                "desc":"倾家荡产求三连支持！！！请大家帮忙给新系列想个名字，点赞一百万的话制作三星堆黄金权杖，不会真的可以点到一百万吧\nbgm:\n-Old-B - 【Free Beat】侠之道 、于剑飞 - 01 片头曲 帝陵、AniFace - 夜辞秋江",
                "state":0,
                "duration":717,
                "mission_id":16881,
                "rights":{
                    "bp":0,
                    "elec":0,
                    "download":0,
                    "movie":0,
                    "pay":0,
                    "hd5":0,
                    "no_reprint":1,
                    "autoplay":1,
                    "ugc_pay":0,
                    "is_cooperation":0,
                    "ugc_pay_preview":0,
                    "no_background":0,
                    "arc_pay":0,
                    "pay_free_watch":0
                },
                "owner":{
                    "mid":2200736,
                    "name":"才疏学浅的才浅",
                    "face":"http://i2.hdslb.com/bfs/face/1f4819b224cd882025a9a6a5f2c6680c332f37bc.jpg"
                },
                "stat":{
                    "aid":715024588,
                    "view":13833908,
                    "danmaku":215105,
                    "reply":39792,
                    "favorite":619513,
                    "coin":2484204,
                    "share":122302,
                    "now_rank":0,
                    "his_rank":1,
                    "like":2338710,
                    "dislike":0
                },
                "dynamic":"倾家荡产求三连！！",
                "cid":323723441,
                "dimension":{
                    "width":1920,
                    "height":1080,
                    "rotate":0
                },
                "season_id":19992,
                "short_link":"https://b23.tv/BV16X4y1g7wT",
                "short_link_v2":"https://b23.tv/BV16X4y1g7wT",
                "bvid":"BV16X4y1g7wT",
                "season_type":0,
                "is_ogv":false,
                "ogv_info":null,
                "rcmd_reason":"",
                "achievement":"央视新华社点赞，博物馆喊话来上班！"
            }, 
            ...
        ]
    }
}
```
</details>
