# 私信消息类型、内容说明

## 文字消息（`msg_type=1`）

在发送私信时，请确保下面的对象合法且 `content` 项的值为非空文本，否则会提示 `请求错误`

根对象：

| 字段    | 类型 | 内容     | 备注 |
| ------- | ---- | -------- | ---- |
| content | str  | 私信内容 |      |

**示例：**

内容为 `Hello` 的文字消息

```json
{
    "content": "Hello"
}
```

## 图片消息（`msg_type=2`）

在发送私信时，请确保下面的对象合法且 `url` 项的值为 B 站的图床 url，否则会报 21037 `图片格式不合法，不要调戏接口啦` 错误

根对象：

| 字段     | 类型 | 内容       | 备注                      |
| -------- | ---- | ---------- | ------------------------- |
| url      | str  | 图片url    | 一般为B站图床url          |
| height   | num  | 图片高度   | 单位：像素（非必要）      |
| width    | num  | 图片宽度   | 单位：像素（非必要）      |
| type     | str  | 图片格式   | （非必要）                |
| original | num  | 是否为原图 | 当本参数值为`1`时，APP上会出现“下载原图”按钮（非必要） |
| size     | num  | 文件大小   | 单位：千字节（非必要）    |

**示例：**

图片 `https://message.biliimg.com/bfs/im_new/c161fdf51d901c1607a15e30f10116dd425503913.jpg`

```json
{
    "url": "https://message.biliimg.com/bfs/im_new/c161fdf51d901c1607a15e30f10116dd425503913.jpg",
    "height": 300,
    "width": 300,
    "imageType": "jpeg",
    "original": 1,
    "size": 55.443
}
```

## 撤回消息（`msg_type=5`）

内容为目标私信的 `msg_key`

请确保目标私信存在、在撤回有效期里，且与发送的私信在同一会话内；成功发送此私信后，目标私信的 `msg_status` 会变成 `1`

**示例：**

假如存在 `msg_key` 为 `7345551441311046575` 的私信 A，用户发送了 `msg_type` 为 `5` 且 `content` 为以下内容的私信 B：

```json
7345551441311046575
```

若发送成功，则私信 A 会被撤回，并且其 `msg_status` 也会变成 `1`

## 自定义表情消息（`msg_type=6`）

对象结构基本同 [图片消息](#图片消息msg_type2)

## 分享消息（`msg_type=7`）

## 小程序消息（`msg_type=9`）

待补充

## 通知消息（`msg_type=10`）

此类型消息仅可接收，不可直接发送

根对象：

| 字段              | 类型  | 内容          | 备注                      |
| ----------------- | ----- | ------------- | ------------------------- |
| title             | str   | 通知标题      |                           |
| text              | str   | 通知内容      |                           |
| jump_text         | str   | 按钮1提示文字 |                           |
| jump_uri          | str   | 按钮1跳转链接 |                           |
| modules           | array | 详细信息      |                           |
| jump_text_2       | str   | 按钮2提示文字 |                           |
| jump_uri_2        | str   | 按钮2跳转链接 |                           |
| jump_text_3       | str   | 按钮3提示文字 |                           |
| jump_uri_3        | str   | 按钮3跳转链接 |                           |
| notifier          | obj   | 发送者信息    |                           |
| jump_uri_config   | obj   | 按钮1配置     |                           |
| jump_uri_2_config | obj   | 按钮2配置     |                           |
| jump_uri_3_config | obj   | 按钮3配置     |                           |
| biz_content       | obj   | 扩展信息      |                           |

**示例：**

```json
{
    "title": "直播开始提醒",
    "text": "你预约的直播已开始，快来围观吧~",
    "jump_text": "进入直播间",
    "jump_uri": "https://live.bilibili.com/22747055?broadcast_type=0&is_room_feed=1&live_from=27040",
    "modules": [
        {
            "title": "预约主题",
            "detail": "2024哔哩哔哩拜年纪"
        },
        {
            "title": "开播时间",
            "detail": "2024-02-09 19:32"
        },
        {
            "title": "UP主",
            "detail": "哔哩哔哩拜年纪"
        }
    ],
    "jump_text_2": "",
    "jump_uri_2": "",
    "jump_text_3": "",
    "jump_uri_3": "",
    "notifier": null,
    "jump_uri_config": {
        "all_uri": "https://live.bilibili.com/22747055?broadcast_type=0&is_room_feed=1&live_from=27040",
        "text": "进入直播间"
    },
    "jump_uri_2_config": {
        "text": ""
    },
    "jump_uri_3_config": {
        "text": ""
    },
    "biz_content": {
        "cover": "",
        "backup_cover": "http://i0.hdslb.com/bfs/live/new_room_cover/bdae2665883ec8aa4e79aca16f3c5ee2df1da64f.jpg",
        "refresh_type": 1,
        "biz_type": 2,
        "biz_id1": "1868902080",
        "biz_id2": "473923647994271663",
        "biz_status": 0
    }
}
```

## 视频推送消息（`msg_type=11`）

此类型消息仅可接收，不可直接发送

根对象：

| 字段       | 类型 | 内容         | 备注                                                   |
| ---------- | ---- | ------------ | ------------------------------------------------------ |
| title      | str  | 视频标题     | 接收私信时实时更新此项，若视频失效则为空文本           |
| times      | num  | 视频时长     | 以秒为单位，接收私信时实时更新此项，若视频失效则为 `0` |
| cover      | str  | 视频封面     | 接收私信时实时更新此项，若视频失效则为空文本           |
| rid        | num  | 视频AV号     |                                                        |
| type_      | num  | （？）       | **作用尚不明确**                                       |
| desc       | str  | 视频简介     | 接收私信时实时更新此项，若视频失效则为空文本           |
| bvid       | str  | 视频BV号     |                                                        |
| view       | num  | 视频播放量   | 接收私信时实时更新此项，若视频失效则为 `0`             |
| danmaku    | num  | 视频弹幕数   | 接收私信时实时更新此项，若视频失效则为 `0`             |
| pub_date   | num  | 视频发布时间 | 秒级时间戳，若视频失效则为 `0`                         |
| attach_msg | 有效时：obj<br />无效时：null | UP主赠言     |                                                        |

**示例：**

```json
{
    "title": "【2023嵌入式大赛】浅浅测试一下龙芯开发板",
    "times": 308,
    "cover": "http://i2.hdslb.com/bfs/archive/880c937de9af758451aa94ee29771e0264c1903a.jpg",
    "rid": 740817783,
    "type_": 8,
    "desc": "最近把龙芯开发板部分（任务一）程序完成了，时间非常紧迫，就不知道为啥突然给省赛加个（本来国赛的题\n从硬件焊接开始，到软件整完不过5天啊喂，肝疼，过几天比赛完发硬件制作过程\n硬件使用龙芯一号（LS1B010）SOC，软件使用 C 语言+FreeRTOS+VSCode 开发",
    "bvid": "BV1Dk4y1E7MZ",
    "view": 13492,
    "danmaku": 5,
    "pub_date": 1683381582,
    "attach_msg": null
}
```

## 专栏推送消息（`msg_type=12`）

此类型消息仅可接收，不可直接发送

根对象：

| 字段        | 类型 | 内容         | 备注                                                   |
| ----------- | ---- | ------------ | ------------------------------------------------------ |
| rid         | num  | 专栏CV号     |                                                        |
| title       | str  | 专栏标题     | 接收私信时实时更新此项，若专栏失效则为 `内容已失效`    |
| summary     | str  | 专栏内容概要 | 接收私信时实时更新此项，若专栏失效则为空文本           |
| author      | str  | 专栏UP主昵称 | 接收私信时实时更新此项，若专栏失效则为空文本           |
| view        | num  | 专栏观看数   | 接收私信时实时更新此项，若专栏失效则为 `0`             |
| like        | num  | 专栏点赞数   | 接收私信时实时更新此项，若专栏失效则为 `0`             |
| reply       | num  | 专栏评论数   | 接收私信时实时更新此项，若专栏失效则为 `0`             |
| template_id | num  | （？）       | **作用尚不明确**                                       |
| image_urls  | 有效时：array<br />无效时：null | 专栏封面列表 | 接收私信时实时更新此项，若专栏失效则为 `null`        |
| attach_msg  | 有效时：obj<br />无效时：null | UP主赠言     |                                                        |
| pub_date    | num  | 专栏发布时间 | 秒级时间戳，若专栏失效则为 `0`                         |

**示例：**

```json
{
    "rid": 18275013,
    "title": "【单片机】遛弯捕捉到野生U盾，点亮它！",
    "summary": "前一阵在学校那会，偶然的机会晚上饭后出去遛弯，在路边看到个被抛弃的 U盾，这么一想应该是附近拆迁搬东西时丢出去的，随即捕捉它。作为一个啥都折腾的捡垃圾技术宅肯定要去研究一波（笑是个建行的 U盾，按键部分还有点老灰，屏幕的尺寸盲猜 128x64，不可能再大了背面除了序列号没有别的东西，顶部有个盖子，像极了上古时期的 U盘插上充电宝可以正常点亮，至少屏没坏拆解&分析电路直接开拆，用刀片沿着四周缝隙插入并挑开卡扣内部结构挺简单，只有两颗较大的芯片，屏幕的 FPC 排线直接焊接在 PCB 上中间的这颗是",
    "author": "社会易姐QwQ",
    "view": 872,
    "like": 38,
    "reply": 7,
    "template_id": 4,
    "image_urls": [
        "https://i0.hdslb.com/bfs/article/c7c60e018c43c5c3a6e1520239021ea2753b2880.jpg"
    ],
    "attach_msg": null,
    "pub_date": 1661358081
}
```


## 图片卡片消息（`msg_type=13`）

此类型消息仅可接收，不可直接发送


## 被关注时的自动推送消息（`msg_type=16`）

## 系统提示消息（`msg_type=18`）

此类型消息仅可接收，不可直接发送

根对象：

| 字段    | 类型  | 内容     | 备注 |
| ------- | ----- | -------- | ---- |
| content | array | 提示列表 |      |

`content`数组：

| 项   | 类型 | 内容      | 备注                   |
| ---- | ---- | --------- | ---------------------- |
| 0    | str  | 提示1     | 经过序列化后的JSON对象 |
| n    | str  | 提示(n+1) |                        |
| ……   | str  | ……        | ……                     |

`content`数组中的JSON文本解析后的对象：

| 字段      | 类型 | 内容                     | 备注        |
| --------- | ---- | ------------------------ | ----------- |
| text      | str  | 提示文字                 |             |
| color_day | str  | 浅色模式下的提示文字颜色 | HEX颜色代码 |
| color_nig | str  | 深色模式下的提示文字颜色 | HEX颜色代码 |

**示例：**

```json
{
    "content": "[{\"text\":\"对方主动回复或关注你前，最多发送1条消息\",\"color_day\":\"#9499A0\",\"color_nig\":\"#9499A0\"}]"
}
```
