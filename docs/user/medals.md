# 所有粉丝勋章

## 指定用户的所有粉丝勋章信息

> https://api.live.bilibili.com/xlive/web-ucenter/user/MedalWall

*请求方法: GET*

认证方式: Cookie (SESSDATA)

<!--{
  "gh": [425]
}-->

**URL参数:**

| 参数名    | 类型 | 内容     | 必要性 | 备注 |
| --------- | ---- | -------- | ------ | ---- |
| target_id | num  | 目标 mid | 必要   |      |

**JSON回复:**

根对象:

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0: 成功<br />-101: 账号未登录 |
| message | str  | 错误信息 | 默认为 0                      |
| ttl     | num  | 1        |                               |
| data    | obj  | 数据本体 | 失败时不存在                  |

`data` 对象:

| 字段              | 类型  | 内容                  | 备注  |
| ----------------- | ----- | --------------------- | ----- |
| list              | array | 勋章列表              |       |
| count             | num   | 勋章数                |       |
| close_space_medal | num   | 关闭空间粉丝勋章显示? | 0: 否 |
| only_show_wearing | num   | 只显示当前佩戴的?     | 0: 否 |
| name              | str   | 目标用户名            |       |
| icon              | str   | 目标用户头像 URL      |       |
| uid               | num   | 目标用户 mid          |       |
| level             | num   | 目标用户等级          |       |

`data` 对象中 `list` 数组中的对象:

| 字段        | 类型 | 内容         | 备注 |
| ----------- | ---- | ------------ | ---- |
| medal_info  | obj  | 勋章信息     |      |
| target_name | str  | 主播名称     |      |
| target_icon | str  | 主播头像 URL |      |
| link        | str  | 主播主页 URL |      |
| live_status | num  | 直播状态     | 0: 未直播<br />1: 正在直播<br />2: 轮播中 |
| offical     | num  | 主播认证类型 | 参见 [用户认证类型一览](official_role.md) |
| uinfo_medal | str  | 用户勋章信息 |      |

`list` 数组中的对象中的 `medal_info` 对象:

| 字段              | 类型 | 内容     | 备注 |
| ----------------- | ---- | -------- | ---- |
| target_id         | num  | 主播 mid |      |
| level             | num  | 勋章等级 |      |
| medal_name        | str  | 勋章名称 |      |
| medal_color_start | num  | 勋章开始颜色 | 十进制(自行转换为16进制) |
| medal_color_end   | num  | 勋章结束颜色 | 同上 |
| medal_color_border | num  | 勋章边框颜色 | 同上 |
| guard_level       | num | 守护等级? | 1: 总督<br />2: 提督<br />3: 舰长 |
| wearing_status    | num  | 佩戴状态 | 0: 未佩戴<br />1: 佩戴中 |
| medal_id          | num  | 勋章 ID |      |
| intimacy          | num  | 当前亲密度 |      |
| next_intimacy     | num  | 下一等级所需亲密度 |      |
| today_feed         | num | 今日已获得亲密度 |      |
| day_limit         | num  | 亲密度每日上限? |      |
| guard_icon        | str  | 守护徽章图标 URL? |      |
| honor_icon        | str  | 荣誉徽章图标 URL? |      |

`list` 数组中的对象中的 `uinfo_medal` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| name | str  | 勋章名称 |      |
| level | num  | 勋章等级 |      |
| color_start | num | 勋章渐变开始颜色 | 十进制(自行转换为16进制) |
| color_end | num | 勋章渐变结束颜色 | 同上 |
| color_border | num | 勋章边框颜色 | 同上 |
| color | num | 勋章颜色 | 同上 |
| id | num | 勋章 ID |      |
| typ | num | 勋章类型? | |
| is_light | num | 是否点亮? | |
| ruid | num | 主播 mid |      |
| guard_level | num | 大航海等级 | 1: 总督<br />2: 提督<br />3: 舰长 |
| score | num | 勋章分数? | |
| guard_icon | str | 大航海图标 URL? | 粉丝牌左边的图标 |
| honor_icon | str | 荣誉徽章图标 URL? | |
| v2_medal_color_start | str | 勋章开始颜色 | 16进制 |
| v2_medal_color_end | str | 勋章结束颜色 | 同上 |
| v2_medal_color_border | str | 勋章边框颜色 | 同上 |
| v2_medal_color_text | str | 勋章文本色 | 同上 |
| v2_medal_color_level | str | 勋章等级颜色 | 同上 |
| user_receive_count | num | 勋章已获得数量? | |

**示例:**

```shell
curl -G 'https://api.live.bilibili.com/xlive/web-ucenter/user/MedalWall' \
--url-query 'target_id=293793435' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "list": [
      {
        "medal_info": {
          "target_id": 178429408,
          "level": 3,
          "medal_name": "滑稽果",
          "medal_color_start": 6067854,
          "medal_color_end": 6067854,
          "medal_color_border": 6067854,
          "guard_level": 0,
          "wearing_status": 1,
          "medal_id": 113190,
          "intimacy": 248,
          "next_intimacy": 500,
          "today_feed": 0,
          "day_limit": 2000,
          "guard_icon": "",
          "honor_icon": ""
        },
        "target_name": "老弟一号",
        "target_icon": "https://i1.hdslb.com/bfs/face/21426275f3d3149b96b88783275205ba574c09e3.jpg",
        "link": "https://space.bilibili.com/178429408",
        "live_status": 2,
        "official": 1,
        "uinfo_medal": {
          "name": "滑稽果",
          "level": 3,
          "color_start": 6067854,
          "color_end": 6067854,
          "color_border": 6067854,
          "color": 0,
          "id": 113190,
          "typ": 0,
          "is_light": 1,
          "ruid": 178429408,
          "guard_level": 0,
          "score": 0,
          "guard_icon": "",
          "honor_icon": "",
          "v2_medal_color_start": "#5762A799",
          "v2_medal_color_end": "#5762A799",
          "v2_medal_color_border": "#5762A799",
          "v2_medal_color_text": "#FFFFFFFF",
          "v2_medal_color_level": "#000B7099",
          "user_receive_count": 0
        }
      },
      {
        "medal_info": {
          "target_id": 15858903,
          "level": 9,
          "medal_name": "二技猿",
          "medal_color_start": 9272486,
          "medal_color_end": 9272486,
          "medal_color_border": 9272486,
          "guard_level": 0,
          "wearing_status": 0,
          "medal_id": 159670,
          "intimacy": 168,
          "next_intimacy": 1900,
          "today_feed": 0,
          "day_limit": 3000,
          "guard_icon": "",
          "honor_icon": ""
        },
        "target_name": "暮光小猿wzt",
        "target_icon": "https://i0.hdslb.com/bfs/face/4113913241f83b03301c316fec6e4c3923bef64e.jpg",
        "link": "https://space.bilibili.com/15858903",
        "live_status": 0,
        "official": 0,
        "uinfo_medal": {
          "name": "二技猿",
          "level": 9,
          "color_start": 9272486,
          "color_end": 9272486,
          "color_border": 9272486,
          "color": 0,
          "id": 159670,
          "typ": 0,
          "is_light": 1,
          "ruid": 15858903,
          "guard_level": 0,
          "score": 0,
          "guard_icon": "",
          "honor_icon": "",
          "v2_medal_color_start": "#596FE099",
          "v2_medal_color_end": "#596FE099",
          "v2_medal_color_border": "#596FE099",
          "v2_medal_color_text": "#FFFFFFFF",
          "v2_medal_color_level": "#000B7099",
          "user_receive_count": 0
        }
      },
      {
        "medal_info": {
          "target_id": 24022863,
          "level": 7,
          "medal_name": "粉丝团",
          "medal_color_start": 6126494,
          "medal_color_end": 6126494,
          "medal_color_border": 6126494,
          "guard_level": 0,
          "wearing_status": 0,
          "medal_id": 233401,
          "intimacy": 1499,
          "next_intimacy": 1600,
          "today_feed": 0,
          "day_limit": 2000,
          "guard_icon": "",
          "honor_icon": ""
        },
        "target_name": "黄禄轩电脑专用账号",
        "target_icon": "https://i0.hdslb.com/bfs/face/a70ec7d2a3822980a915ef4b30371af0cbc79132.jpg",
        "link": "https://space.bilibili.com/24022863",
        "live_status": 2,
        "official": 0,
        "uinfo_medal": {
          "name": "粉丝团",
          "level": 7,
          "color_start": 6126494,
          "color_end": 6126494,
          "color_border": 6126494,
          "color": 0,
          "id": 233401,
          "typ": 0,
          "is_light": 1,
          "ruid": 24022863,
          "guard_level": 0,
          "score": 0,
          "guard_icon": "",
          "honor_icon": "",
          "v2_medal_color_start": "#5866C799",
          "v2_medal_color_end": "#5866C799",
          "v2_medal_color_border": "#5866C799",
          "v2_medal_color_text": "#FFFFFFFF",
          "v2_medal_color_level": "#000B7099",
          "user_receive_count": 0
        }
      },
      {
        "medal_info": {
          "target_id": 1347373376,
          "level": 6,
          "medal_name": "Geek范",
          "medal_color_start": 6126494,
          "medal_color_end": 6126494,
          "medal_color_border": 6126494,
          "guard_level": 0,
          "wearing_status": 0,
          "medal_id": 658512,
          "intimacy": 999,
          "next_intimacy": 1500,
          "today_feed": 0,
          "day_limit": 2000,
          "guard_icon": "",
          "honor_icon": ""
        },
        "target_name": "GeekLogic",
        "target_icon": "https://i2.hdslb.com/bfs/face/fc4ba4087efa80dce11dfdd1c2bc07d84fb603b9.jpg",
        "link": "https://space.bilibili.com/1347373376",
        "live_status": 0,
        "official": 1,
        "uinfo_medal": {
          "name": "Geek范",
          "level": 6,
          "color_start": 6126494,
          "color_end": 6126494,
          "color_border": 6126494,
          "color": 0,
          "id": 658512,
          "typ": 0,
          "is_light": 1,
          "ruid": 1347373376,
          "guard_level": 0,
          "score": 0,
          "guard_icon": "",
          "honor_icon": "",
          "v2_medal_color_start": "#5866C799",
          "v2_medal_color_end": "#5866C799",
          "v2_medal_color_border": "#5866C799",
          "v2_medal_color_text": "#FFFFFFFF",
          "v2_medal_color_level": "#000B7099",
          "user_receive_count": 0
        }
      },
      {
        "medal_info": {
          "target_id": 451664,
          "level": 5,
          "medal_name": "粉丝团",
          "medal_color_start": 6126494,
          "medal_color_end": 6126494,
          "medal_color_border": 6126494,
          "guard_level": 0,
          "wearing_status": 0,
          "medal_id": 408689,
          "intimacy": 799,
          "next_intimacy": 1000,
          "today_feed": 0,
          "day_limit": 2000,
          "guard_icon": "",
          "honor_icon": ""
        },
        "target_name": "刘师兄_liujun",
        "target_icon": "https://i2.hdslb.com/bfs/face/90665d1613cc5501a3f7bbc79b5dc83bcc30667d.jpg",
        "link": "https://space.bilibili.com/451664",
        "live_status": 0,
        "official": 0,
        "uinfo_medal": {
          "name": "粉丝团",
          "level": 5,
          "color_start": 6126494,
          "color_end": 6126494,
          "color_border": 6126494,
          "color": 0,
          "id": 408689,
          "typ": 0,
          "is_light": 1,
          "ruid": 451664,
          "guard_level": 0,
          "score": 0,
          "guard_icon": "",
          "honor_icon": "",
          "v2_medal_color_start": "#5866C799",
          "v2_medal_color_end": "#5866C799",
          "v2_medal_color_border": "#5866C799",
          "v2_medal_color_text": "#FFFFFFFF",
          "v2_medal_color_level": "#000B7099",
          "user_receive_count": 0
        }
      },
      {
        "medal_info": {
          "target_id": 89240844,
          "level": 5,
          "medal_name": "六零",
          "medal_color_start": 6126494,
          "medal_color_end": 6126494,
          "medal_color_border": 6126494,
          "guard_level": 0,
          "wearing_status": 0,
          "medal_id": 306526,
          "intimacy": 799,
          "next_intimacy": 1000,
          "today_feed": 0,
          "day_limit": 2000,
          "guard_icon": "",
          "honor_icon": ""
        },
        "target_name": "A60_OnE",
        "target_icon": "https://i0.hdslb.com/bfs/face/483513f7b0533d666fdf7eff96a70b69992056fd.jpg",
        "link": "https://space.bilibili.com/89240844",
        "live_status": 0,
        "official": 0,
        "uinfo_medal": {
          "name": "六零",
          "level": 5,
          "color_start": 6126494,
          "color_end": 6126494,
          "color_border": 6126494,
          "color": 0,
          "id": 306526,
          "typ": 0,
          "is_light": 1,
          "ruid": 89240844,
          "guard_level": 0,
          "score": 0,
          "guard_icon": "",
          "honor_icon": "",
          "v2_medal_color_start": "#5866C799",
          "v2_medal_color_end": "#5866C799",
          "v2_medal_color_border": "#5866C799",
          "v2_medal_color_text": "#FFFFFFFF",
          "v2_medal_color_level": "#000B7099",
          "user_receive_count": 0
        }
      },
      {
        "medal_info": {
          "target_id": 1850091,
          "level": 5,
          "medal_name": "観測者",
          "medal_color_start": 6126494,
          "medal_color_end": 6126494,
          "medal_color_border": 6126494,
          "guard_level": 0,
          "wearing_status": 0,
          "medal_id": 118910,
          "intimacy": 98,
          "next_intimacy": 1000,
          "today_feed": 0,
          "day_limit": 2000,
          "guard_icon": "",
          "honor_icon": ""
        },
        "target_name": "Jannchie见齐",
        "target_icon": "https://i0.hdslb.com/bfs/face/983034448f81f45f05956d0455a86fe0639d6a36.jpg",
        "link": "https://space.bilibili.com/1850091",
        "live_status": 2,
        "official": 1,
        "uinfo_medal": {
          "name": "観測者",
          "level": 5,
          "color_start": 6126494,
          "color_end": 6126494,
          "color_border": 6126494,
          "color": 0,
          "id": 118910,
          "typ": 0,
          "is_light": 1,
          "ruid": 1850091,
          "guard_level": 0,
          "score": 0,
          "guard_icon": "",
          "honor_icon": "",
          "v2_medal_color_start": "#5866C799",
          "v2_medal_color_end": "#5866C799",
          "v2_medal_color_border": "#5866C799",
          "v2_medal_color_text": "#FFFFFFFF",
          "v2_medal_color_level": "#000B7099",
          "user_receive_count": 0
        }
      },
      {
        "medal_info": {
          "target_id": 4911405,
          "level": 4,
          "medal_name": "毛狐狸",
          "medal_color_start": 6067854,
          "medal_color_end": 6067854,
          "medal_color_border": 6067854,
          "guard_level": 0,
          "wearing_status": 0,
          "medal_id": 18887,
          "intimacy": 658,
          "next_intimacy": 700,
          "today_feed": 0,
          "day_limit": 2000,
          "guard_icon": "",
          "honor_icon": ""
        },
        "target_name": "粉毛变态老狐狸",
        "target_icon": "https://i0.hdslb.com/bfs/face/5924e9201ac87066e76534472303b636a9961647.jpg",
        "link": "https://space.bilibili.com/4911405",
        "live_status": 0,
        "official": 0,
        "uinfo_medal": {
          "name": "毛狐狸",
          "level": 4,
          "color_start": 6067854,
          "color_end": 6067854,
          "color_border": 6067854,
          "color": 0,
          "id": 18887,
          "typ": 0,
          "is_light": 1,
          "ruid": 4911405,
          "guard_level": 0,
          "score": 0,
          "guard_icon": "",
          "honor_icon": "",
          "v2_medal_color_start": "#5762A799",
          "v2_medal_color_end": "#5762A799",
          "v2_medal_color_border": "#5762A799",
          "v2_medal_color_text": "#FFFFFFFF",
          "v2_medal_color_level": "#000B7099",
          "user_receive_count": 0
        }
      },
      {
        "medal_info": {
          "target_id": 130914376,
          "level": 3,
          "medal_name": "江草",
          "medal_color_start": 6067854,
          "medal_color_end": 6067854,
          "medal_color_border": 6067854,
          "guard_level": 0,
          "wearing_status": 0,
          "medal_id": 166326,
          "intimacy": 463,
          "next_intimacy": 500,
          "today_feed": 0,
          "day_limit": 2000,
          "guard_icon": "",
          "honor_icon": ""
        },
        "target_name": "江灵夏草",
        "target_icon": "https://i1.hdslb.com/bfs/face/63eb615514fddbc6024a34ddcacfb0bc6103d019.jpg",
        "link": "https://space.bilibili.com/130914376",
        "live_status": 0,
        "official": 1,
        "uinfo_medal": {
          "name": "江草",
          "level": 3,
          "color_start": 6067854,
          "color_end": 6067854,
          "color_border": 6067854,
          "color": 0,
          "id": 166326,
          "typ": 0,
          "is_light": 1,
          "ruid": 130914376,
          "guard_level": 0,
          "score": 0,
          "guard_icon": "",
          "honor_icon": "",
          "v2_medal_color_start": "#5762A799",
          "v2_medal_color_end": "#5762A799",
          "v2_medal_color_border": "#5762A799",
          "v2_medal_color_text": "#FFFFFFFF",
          "v2_medal_color_level": "#000B7099",
          "user_receive_count": 0
        }
      },
      {
        "medal_info": {
          "target_id": 316568752,
          "level": 3,
          "medal_name": "SEAL",
          "medal_color_start": 6067854,
          "medal_color_end": 6067854,
          "medal_color_border": 6067854,
          "guard_level": 0,
          "wearing_status": 0,
          "medal_id": 312420,
          "intimacy": 428,
          "next_intimacy": 500,
          "today_feed": 0,
          "day_limit": 2000,
          "guard_icon": "",
          "honor_icon": ""
        },
        "target_name": "马督工",
        "target_icon": "https://i1.hdslb.com/bfs/face/1c56737dfc0deffffc31c78e0cefb0c3ecf7e000.jpg",
        "link": "https://space.bilibili.com/316568752",
        "live_status": 0,
        "official": 1,
        "uinfo_medal": {
          "name": "SEAL",
          "level": 3,
          "color_start": 6067854,
          "color_end": 6067854,
          "color_border": 6067854,
          "color": 0,
          "id": 312420,
          "typ": 0,
          "is_light": 1,
          "ruid": 316568752,
          "guard_level": 0,
          "score": 0,
          "guard_icon": "",
          "honor_icon": "",
          "v2_medal_color_start": "#5762A799",
          "v2_medal_color_end": "#5762A799",
          "v2_medal_color_border": "#5762A799",
          "v2_medal_color_text": "#FFFFFFFF",
          "v2_medal_color_level": "#000B7099",
          "user_receive_count": 0
        }
      },
      {
        "medal_info": {
          "target_id": 633003,
          "level": 3,
          "medal_name": "器材党",
          "medal_color_start": 6067854,
          "medal_color_end": 6067854,
          "medal_color_border": 6067854,
          "guard_level": 0,
          "wearing_status": 0,
          "medal_id": 57027,
          "intimacy": 198,
          "next_intimacy": 500,
          "today_feed": 0,
          "day_limit": 2000,
          "guard_icon": "",
          "honor_icon": ""
        },
        "target_name": "和光Channel",
        "target_icon": "https://i0.hdslb.com/bfs/face/c34413202f3f4ab6c7955a2c9ca5a9ac8e86d8c2.jpg",
        "link": "https://space.bilibili.com/633003",
        "live_status": 0,
        "official": 0,
        "uinfo_medal": {
          "name": "器材党",
          "level": 3,
          "color_start": 6067854,
          "color_end": 6067854,
          "color_border": 6067854,
          "color": 0,
          "id": 57027,
          "typ": 0,
          "is_light": 1,
          "ruid": 633003,
          "guard_level": 0,
          "score": 0,
          "guard_icon": "",
          "honor_icon": "",
          "v2_medal_color_start": "#5762A799",
          "v2_medal_color_end": "#5762A799",
          "v2_medal_color_border": "#5762A799",
          "v2_medal_color_text": "#FFFFFFFF",
          "v2_medal_color_level": "#000B7099",
          "user_receive_count": 0
        }
      },
      {
        "medal_info": {
          "target_id": 5760446,
          "level": 2,
          "medal_name": "花泪",
          "medal_color_start": 6067854,
          "medal_color_end": 6067854,
          "medal_color_border": 6067854,
          "guard_level": 0,
          "wearing_status": 0,
          "medal_id": 32283,
          "intimacy": 298,
          "next_intimacy": 300,
          "today_feed": 0,
          "day_limit": 2000,
          "guard_icon": "",
          "honor_icon": ""
        },
        "target_name": "花儿不哭",
        "target_icon": "https://i2.hdslb.com/bfs/face/4f220d57ca877167f3efdc60e40d0cb53ca58b72.jpg",
        "link": "https://space.bilibili.com/5760446",
        "live_status": 0,
        "official": 1,
        "uinfo_medal": {
          "name": "花泪",
          "level": 2,
          "color_start": 6067854,
          "color_end": 6067854,
          "color_border": 6067854,
          "color": 0,
          "id": 32283,
          "typ": 0,
          "is_light": 1,
          "ruid": 5760446,
          "guard_level": 0,
          "score": 0,
          "guard_icon": "",
          "honor_icon": "",
          "v2_medal_color_start": "#5762A799",
          "v2_medal_color_end": "#5762A799",
          "v2_medal_color_border": "#5762A799",
          "v2_medal_color_text": "#FFFFFFFF",
          "v2_medal_color_level": "#000B7099",
          "user_receive_count": 0
        }
      },
      {
        "medal_info": {
          "target_id": 3644545,
          "level": 2,
          "medal_name": "东方狗",
          "medal_color_start": 6067854,
          "medal_color_end": 6067854,
          "medal_color_border": 6067854,
          "guard_level": 0,
          "wearing_status": 0,
          "medal_id": 249059,
          "intimacy": 98,
          "next_intimacy": 300,
          "today_feed": 0,
          "day_limit": 2000,
          "guard_icon": "",
          "honor_icon": ""
        },
        "target_name": "白倉カナ",
        "target_icon": "https://i1.hdslb.com/bfs/face/ae839f221a5812683fe0a3967f4a612dd65a05d2.jpg",
        "link": "https://space.bilibili.com/3644545",
        "live_status": 0,
        "official": 0,
        "uinfo_medal": {
          "name": "东方狗",
          "level": 2,
          "color_start": 6067854,
          "color_end": 6067854,
          "color_border": 6067854,
          "color": 0,
          "id": 249059,
          "typ": 0,
          "is_light": 1,
          "ruid": 3644545,
          "guard_level": 0,
          "score": 0,
          "guard_icon": "",
          "honor_icon": "",
          "v2_medal_color_start": "#5762A799",
          "v2_medal_color_end": "#5762A799",
          "v2_medal_color_border": "#5762A799",
          "v2_medal_color_text": "#FFFFFFFF",
          "v2_medal_color_level": "#000B7099",
          "user_receive_count": 0
        }
      },
      {
        "medal_info": {
          "target_id": 614801,
          "level": 1,
          "medal_name": "神油",
          "medal_color_start": 6067854,
          "medal_color_end": 6067854,
          "medal_color_border": 6067854,
          "guard_level": 0,
          "wearing_status": 0,
          "medal_id": 627,
          "intimacy": 119,
          "next_intimacy": 201,
          "today_feed": 0,
          "day_limit": 2000,
          "guard_icon": "",
          "honor_icon": ""
        },
        "target_name": "神游八方",
        "target_icon": "https://i2.hdslb.com/bfs/face/98f8e0f609ff2403cc086f7254f388336b6f5366.jpg",
        "link": "https://space.bilibili.com/614801",
        "live_status": 0,
        "official": 1,
        "uinfo_medal": {
          "name": "神油",
          "level": 1,
          "color_start": 6067854,
          "color_end": 6067854,
          "color_border": 6067854,
          "color": 0,
          "id": 627,
          "typ": 0,
          "is_light": 1,
          "ruid": 614801,
          "guard_level": 0,
          "score": 0,
          "guard_icon": "",
          "honor_icon": "",
          "v2_medal_color_start": "#5762A799",
          "v2_medal_color_end": "#5762A799",
          "v2_medal_color_border": "#5762A799",
          "v2_medal_color_text": "#FFFFFFFF",
          "v2_medal_color_level": "#000B7099",
          "user_receive_count": 0
        }
      },
      {
        "medal_info": {
          "target_id": 12246,
          "level": 1,
          "medal_name": "纯色派",
          "medal_color_start": 6067854,
          "medal_color_end": 6067854,
          "medal_color_border": 6067854,
          "guard_level": 0,
          "wearing_status": 0,
          "medal_id": 5171,
          "intimacy": 99,
          "next_intimacy": 201,
          "today_feed": 0,
          "day_limit": 2000,
          "guard_icon": "",
          "honor_icon": ""
        },
        "target_name": "囧仙",
        "target_icon": "https://i0.hdslb.com/bfs/face/b7ee967282a33a59908218df5b240b45f51afda8.jpg",
        "link": "https://space.bilibili.com/12246",
        "live_status": 0,
        "official": 1,
        "uinfo_medal": {
          "name": "纯色派",
          "level": 1,
          "color_start": 6067854,
          "color_end": 6067854,
          "color_border": 6067854,
          "color": 0,
          "id": 5171,
          "typ": 0,
          "is_light": 1,
          "ruid": 12246,
          "guard_level": 0,
          "score": 0,
          "guard_icon": "",
          "honor_icon": "",
          "v2_medal_color_start": "#5762A799",
          "v2_medal_color_end": "#5762A799",
          "v2_medal_color_border": "#5762A799",
          "v2_medal_color_text": "#FFFFFFFF",
          "v2_medal_color_level": "#000B7099",
          "user_receive_count": 0
        }
      }
    ],
    "count": 15,
    "close_space_medal": 0,
    "only_show_wearing": 0,
    "name": "社会易姐QwQ",
    "icon": "https://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg",
    "uid": 645769214,
    "level": 6
  }
}
```

</details>
