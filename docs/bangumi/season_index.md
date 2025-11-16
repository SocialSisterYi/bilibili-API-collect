# 剧集索引

## 获取剧集索引

> https://api.bilibili.com/pgc/season/index/result
> 
*请求方式：GET*

鉴权方式：Cookie（SESSDATA）

**url参数：**

| 参数名               | 类型 | 内容         | 必要性 | 备注                                                                                                 |
| -------------------- | ---- | --------------- | -------------- | --------------------------------------------------------------------------------------- |
| season_type          | num  | 类别         | 必要   | 番剧：`1` &nbsp; 电影：`2` &nbsp; 纪录片：`3`<br>国创：`4` &nbsp; 电视剧：`5` &nbsp; 综艺：`7`          |
| type                 | num  | 未知作用     | 必要   | 固定为 `1`                                                                                          |
| page                 | num  | 页码         | 非必要 | 默认为 `1`                                                                                          |
| pagesize             | num  | 每页项数     | 非必要 | 定义域：[1,∞)，<br>超出最大项数则返回最大项数                                                          |
| season_version       | num  | 类型         | 非必要 | 全部：`-1` &nbsp; 正片：`1` &nbsp; 电影：`2` &nbsp; 其他：`3`                                        |
| spoken_language_type | num  | 配音         | 非必要 | 全部：`-1` &nbsp; 原声：`1` &nbsp; 中文配音：`2`                                                    |
| area                 | str  | 地区         | 非必要 | 地区代码列表 ∈N∩[1,70] 例如日本：`2` 中国：`1,6,7` [完整地区代码见表](info.md#剧集地区一览)<br>`-1`代表全部，前端页面有具体国家则可以单独请求具体国家如日本`2`，<br>将[1,70]中前端页面有的国家排除后一一列出则代表其他如`1,4,5,6,7,8...69,70`  |
| is_finish            | num  | 状态         | 非必要 | 全部：`-1` &nbsp; 完结：`1` &nbsp; 连载：`0`                                                        |
| copyright            | str  | 版权         | 非必要 | 全部：`-1` &nbsp; 独家：`3` &nbsp; 其他：`1,2,4`                                                    |
| season_status        | str  | 付费类型     | 非必要 | 全部：`-1` &nbsp; 免费：`1` &nbsp; 付费：`2,6` &nbsp; 大会员：`4,6`                                 |
| season_month         | num  | 季度         | 非必要 | 全部：`-1` &nbsp; 一月：`1` &nbsp; 四月：`4` &nbsp; 七月：`7` &nbsp; 十月：`10`                     |
| year                 | str  | 年份         | 非必要 | 适用于`国创`和`番剧`类别<br>除了`-1`代表全部外，其他情况以左闭右开区间形式表示，<br>如`[2025,2026)`代表2025年，`[2010,2015)`代表2010-2014年，`[1990,2000)`代表90年代，`[,1980)`代表更早  |
| release_date         | str  | 年份         | 非必要 | 适用于`电影`，`电视剧`和`纪录片`类别<br>和year参数类似只是精确到秒级，<br>如`[2025-01-01 00:00:00,2026-01-01 00:00:00)`代表2025年，<br>`[1990-01-01 00:00:00,2000-01-01 00:00:00)`代表90年代  |
| style_id             | num  | 风格         | 非必要 | 全部：`-1` &nbsp; 特定风格则值为该风格id，如原创：`10010`                                           |
| producer_id          | num  | 出品方       | 非必要 | 全部：`-1` &nbsp; 特定出品方则值为该出品方id，如央视：`4`                                           |
| order                | num  | 排序指标     | 非必要 | 更新时间：`0` &nbsp; 弹幕数量：`1` &nbsp; 播放数量：`2` &nbsp;<br>追剧人数：`3` &nbsp; 最高评分：`4` &nbsp; 开播时间：`5` &nbsp; 上映时间：`6`  |
| sort                 | num  | 排序方向     | 非必要 | 增序：`1` &nbsp; 降序：`0` 默认为降序                                                               |
| st                   | num  | 未知作用     | 非必要 | 值与 `season_type` 相同，合理怀疑是其缩写                                                           |

**json回复：**

根对象：

| 字段      | 类型 | 内容     | 备注                                       |
|-----------|------|----------|--------------------------------------------|
| code      | num  | 返回值   | 0：成功<br>-400：请求错误<br>-404：错误     |
| message   | str  | 错误信息 | 默认为 success                             |
| data      | obj  | 数据本体 |                                            |

`data` 对象：

| 字段      | 类型   | 内容       | 备注               |
|-----------|--------|------------|--------------------|
| has_next  | num    | 是否有下一页 | 1：有<br>0：无     |
| list      | array  | 剧集列表   |                    |
| num    | num    | 当前页码   |                    |
| size     | num    | 每页数量   |                    |
| total     | num    | 总剧集数   |                    |

`data` 中的 `list` 数组：

| 项   | 类型 | 内容            | 备注 |
|------|------|-----------------|------|
| 0    | obj  | 剧集信息 1      |      |
| n    | obj  | 剧集信息 (n+1)  |      |
| ……   | obj  | ……              |      |

`list` 数组中的对象：

| 字段          | 类型   | 内容           | 备注                                                                 |
|---------------|--------|----------------|----------------------------------------------------------------------|
| badge         | str    | 角标文本       | 例如 `大会员`、`独家` 等                                             |
| badge_info    | obj    | 角标信息       |                                                                      |
| badge_type    | num    | 角标类型       |                                                                      |
| cover         | str    | 封面图片 URL   |                                                                      |
| first_ep      | obj    | 第一话信息     |                                                                      |
| index_show    | str    | 剧集进度显示   | 例如 `全48话`                                                        |
| is_finish     | num    | 是否完结       | `1`：完结<br>`0`：未完结                                             |
| link          | str    | 剧集播放页链接 |                                                                      |
| media_id      | num    | 剧集 md id     |                                                                      |
| order         | str    | 排序显示文本   | 例如 `9.9分`                                                         |
| order_type    | str    | 排序类型       |                                                                      |
| score         | str    | 评分           |                                                                      |
| season_id     | num    | 剧集 ss id     |                                                                      |
| season_status | num    | 剧集状态       | 普通剧集为 `2`，大会员或独家等有角标的剧集为 `13`                    |
| season_type   | num    | 剧集类别       | 值同参数中的 `season_type`                                           |
| subTitle      | str    | 副标题         |                                                                      |
| title         | str    | 标题           |                                                                      |
| title_icon    | str    | 标题图标 URL   |                                                                      |

`list` 项中的 `badge_info` 对象：

| 字段            | 类型 | 内容        | 备注     |
|-----------------|------|-------------|----------|
| bg_color        | str  | 角标背景色  | 日间模式 |
| bg_color_night  | str  | 角标背景色  | 夜间模式 |
| text            | str  | 角标文本    |          |

`list` 项中的 `first_ep` 对象：

| 字段  | 类型 | 内容           | 备注 |
|-------|------|----------------|------|
| cover | str  | 第一话封面 URL |      |
| ep_id | num  | 第一话 ep id   |      |

**示例：**

查询番剧类别索引按最高评分降序排序

```shell
curl -G 'https://api.bilibili.com/pgc/season/index/result' \
--data-urlencode 'type=1' \
--data-urlencode 'season_type=1' \
--data-urlencode 'order=4' \
--data-urlencode 'sort=0' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "data": {
    "has_next": 1,
    "list": [
      {
        "badge": "大会员",
        "badge_info": {
          "bg_color": "#FB7299",
          "bg_color_night": "#D44E7D",
          "text": "大会员"
        },
        "badge_type": 0,
        "cover": "https://i0.hdslb.com/bfs/bangumi/image/dc1d94ded94ae470db35d76edeb106f606e27e96.png",
        "first_ep": {
          "cover": "http://i0.hdslb.com/bfs/archive/0a8ca0a60401b16838c8fae3d09223ead44f445a.png",
          "ep_id": 2197678
        },
        "index_show": "全48话",
        "is_finish": 1,
        "link": "https://www.bilibili.com/bangumi/play/ss113090",
        "media_id": 27736357,
        "order": "9.9分",
        "order_type": "4",
        "score": "9.9",
        "season_id": 113090,
        "season_status": 13,
        "season_type": 1,
        "subTitle": "平成刑侦风假面骑士",
        "title": "假面骑士驰骑",
        "title_icon": ""
      },
      {
        "badge": "大会员",
        "badge_info": {
          "bg_color": "#FB7299",
          "bg_color_night": "#D44E7D",
          "text": "大会员"
        },
        "badge_type": 0,
        "cover": "https://i0.hdslb.com/bfs/bangumi/image/834bdb5d36c401179b9e91fdc1de520a6664c2a7.png",
        "first_ep": {
          "cover": "http://i0.hdslb.com/bfs/archive/ba36c397ede8ba668cc726c34e0aaf5c0195958c.jpg",
          "ep_id": 1404783
        },
        "index_show": "全24话",
        "is_finish": 1,
        "link": "https://www.bilibili.com/bangumi/play/ss80512",
        "media_id": 24449643,
        "order": "9.9分",
        "order_type": "4",
        "score": "9.9",
        "season_id": 80512,
        "season_status": 13,
        "season_type": 1,
        "subTitle": "穿越百夜，仰望千空",
        "title": "Ｄｒ．ＳＴＯＮＥ 石纪元 (第四季)",
        "title_icon": ""
      },
      {
        "badge": "独家",
        "badge_info": {
          "bg_color": "#00C0FF",
          "bg_color_night": "#0B91BE",
          "text": "独家"
        },
        "badge_type": 1,
        "cover": "https://i0.hdslb.com/bfs/bangumi/image/dcd6e746842fdb988775c8b5f8217ad19b6d4de2.png",
        "first_ep": {
          "cover": "http://i0.hdslb.com/bfs/archive/400927077a6718848bd44de634bf09a3ad029d22.jpg",
          "ep_id": 1938328
        },
        "index_show": "全12话",
        "is_finish": 1,
        "link": "https://www.bilibili.com/bangumi/play/ss102891",
        "media_id": 26714035,
        "order": "9.9分",
        "order_type": "4",
        "score": "9.9",
        "season_id": 102891,
        "season_status": 13,
        "season_type": 1,
        "subTitle": "可燃乌龙茶又回来了",
        "title": "碧蓝之海 第二季",
        "title_icon": ""
      },
      {
        "badge": "独家",
        "badge_info": {
          "bg_color": "#00C0FF",
          "bg_color_night": "#0B91BE",
          "text": "独家"
        },
        "badge_type": 1,
        "cover": "https://i0.hdslb.com/bfs/bangumi/image/c72d6ee8b3cba39355af14bebd4857935b4fb083.png",
        "first_ep": {
          "cover": "https://i0.hdslb.com/bfs/bangumi/image/f9c6876d58c7dc77f04f9780d51fcac08863f9fb.png",
          "ep_id": 1655818
        },
        "index_show": "更新至第13话",
        "is_finish": 0,
        "link": "https://www.bilibili.com/bangumi/play/ss91812",
        "media_id": 25581526,
        "order": "9.9分",
        "order_type": "4",
        "score": "9.9",
        "season_id": 91812,
        "season_status": 13,
        "season_type": 1,
        "subTitle": "一马当先，万马无光",
        "title": "赛马娘 芦毛灰姑娘",
        "title_icon": ""
      },
      {
        "badge": "大会员",
        "badge_info": {
          "bg_color": "#FB7299",
          "bg_color_night": "#D44E7D",
          "text": "大会员"
        },
        "badge_type": 0,
        "cover": "http://i0.hdslb.com/bfs/bangumi/image/087b862b772ee4e644478a36c757a26db476193d.png",
        "first_ep": {
          "cover": "http://i0.hdslb.com/bfs/bangumi/1e47fe925cb543c09250a142c31c8e42ab4bcbbd.jpg",
          "ep_id": 393434
        },
        "index_show": "全200话",
        "is_finish": 1,
        "link": "https://www.bilibili.com/bangumi/play/ss38157",
        "media_id": 28233839,
        "order": "9.9分",
        "order_type": "4",
        "score": "9.9",
        "season_id": 38157,
        "season_status": 13,
        "season_type": 1,
        "subTitle": "最无厘头的热血动画",
        "title": "银魂",
        "title_icon": ""
      },
      {
        "badge": "大会员",
        "badge_info": {
          "bg_color": "#FB7299",
          "bg_color_night": "#D44E7D",
          "text": "大会员"
        },
        "badge_type": 0,
        "cover": "https://i0.hdslb.com/bfs/bangumi/image/f3ebb500b701a387f5abde67516c5c96bbd2faff.png",
        "first_ep": {
          "cover": "http://i0.hdslb.com/bfs/archive/6f20908042a02bcbb4ab1e0e5f36c06cfb4eb781.png",
          "ep_id": 779775
        },
        "index_show": "全28话",
        "is_finish": 1,
        "link": "https://www.bilibili.com/bangumi/play/ss46089",
        "media_id": 21087073,
        "order": "9.9分",
        "order_type": "4",
        "score": "9.9",
        "season_id": 46089,
        "season_status": 13,
        "season_type": 1,
        "subTitle": "花海盛开，故人归来",
        "title": "葬送的芙莉莲",
        "title_icon": ""
      },
      {
        "badge": "独家",
        "badge_info": {
          "bg_color": "#00C0FF",
          "bg_color_night": "#0B91BE",
          "text": "独家"
        },
        "badge_type": 1,
        "cover": "http://i0.hdslb.com/bfs/bangumi/image/f6709b76e88f50aa132d1e09e2d8de9663a09b3e.png",
        "first_ep": {
          "cover": "http://i0.hdslb.com/bfs/bangumi/69c9e8b5548356e04f8a52a5a7e270fc1786123d.jpg",
          "ep_id": 293001
        },
        "index_show": "全24话",
        "is_finish": 1,
        "link": "https://www.bilibili.com/bangumi/play/ss4213",
        "media_id": 28223483,
        "order": "9.9分",
        "order_type": "4",
        "score": "9.9",
        "season_id": 4213,
        "season_status": 13,
        "season_type": 1,
        "subTitle": "真是high到不行",
        "title": "JOJO的奇妙冒险 星尘远征军 埃及篇",
        "title_icon": ""
      },
      {
        "badge": "",
        "badge_info": {
          "bg_color": "#FB7299",
          "bg_color_night": "#D44E7D",
          "text": ""
        },
        "badge_type": 0,
        "cover": "http://i0.hdslb.com/bfs/bangumi/065926cbda8f464a31293758054620cca15e5589.jpg",
        "first_ep": {
          "cover": "http://i0.hdslb.com/bfs/archive/315d88aa2b1e723089b29ddc2febb5b937ef68c9.jpg",
          "ep_id": 249469
        },
        "index_show": "全55话",
        "is_finish": 1,
        "link": "https://www.bilibili.com/bangumi/play/ss357",
        "media_id": 132112,
        "order": "9.9分",
        "order_type": "4",
        "score": "9.9",
        "season_id": 357,
        "season_status": 2,
        "season_type": 1,
        "subTitle": "童年经典，百看不厌",
        "title": "猫和老鼠 旧版",
        "title_icon": ""
      },
      {
        "badge": "",
        "badge_info": {
          "bg_color": "#FB7299",
          "bg_color_night": "#D44E7D",
          "text": ""
        },
        "badge_type": 0,
        "cover": "http://i0.hdslb.com/bfs/bangumi/e46cc26d95a6b09541a8bda484f041eebb474c1a.png",
        "first_ep": {
          "cover": "http://i0.hdslb.com/bfs/bangumi/e15c1305e4d54ca1a92f44e0953eee5d6006397e.jpg",
          "ep_id": 247270
        },
        "index_show": "全203话",
        "is_finish": 1,
        "link": "https://www.bilibili.com/bangumi/play/ss1376",
        "media_id": 1376,
        "order": "9.9分",
        "order_type": "4",
        "score": "9.9",
        "season_id": 1376,
        "season_status": 2,
        "season_type": 1,
        "subTitle": "我的老师是婴儿",
        "title": "家庭教师HITMAN REBORN!",
        "title_icon": ""
      },
      {
        "badge": "大会员",
        "badge_info": {
          "bg_color": "#FB7299",
          "bg_color_night": "#D44E7D",
          "text": "大会员"
        },
        "badge_type": 0,
        "cover": "http://i0.hdslb.com/bfs/bangumi/image/d432ca132f5b8e8d72257704817f270595f92148.png",
        "first_ep": {
          "cover": "http://i0.hdslb.com/bfs/archive/c0fa966ef05e15a52625a764b8c829b9a204c984.jpg",
          "ep_id": 396924
        },
        "index_show": "全52话",
        "is_finish": 1,
        "link": "https://www.bilibili.com/bangumi/play/ss38385",
        "media_id": 28234069,
        "order": "9.9分",
        "order_type": "4",
        "score": "9.9",
        "season_id": 38385,
        "season_status": 13,
        "season_type": 1,
        "subTitle": "那一年，我变为了光",
        "title": "迪迦奥特曼（中配）",
        "title_icon": ""
      },
      {
        "badge": "大会员",
        "badge_info": {
          "bg_color": "#FB7299",
          "bg_color_night": "#D44E7D",
          "text": "大会员"
        },
        "badge_type": 0,
        "cover": "http://i0.hdslb.com/bfs/bangumi/image/00e9bc51f9f3677f88dc9cea41fbf430ee4eff7a.png",
        "first_ep": {
          "cover": "http://i0.hdslb.com/bfs/archive/adc9c65cd4b224da7d3c8a70593cf3b4ee0f4906.png",
          "ep_id": 397306
        },
        "index_show": "全64话",
        "is_finish": 1,
        "link": "https://www.bilibili.com/bangumi/play/ss38158",
        "media_id": 28233840,
        "order": "9.9分",
        "order_type": "4",
        "score": "9.9",
        "season_id": 38158,
        "season_status": 13,
        "season_type": 1,
        "subTitle": "最无厘头的热血动画",
        "title": "银魂 第二季",
        "title_icon": ""
      },
      {
        "badge": "大会员",
        "badge_info": {
          "bg_color": "#FB7299",
          "bg_color_night": "#D44E7D",
          "text": "大会员"
        },
        "badge_type": 0,
        "cover": "https://i0.hdslb.com/bfs/bangumi/image/60a1806c76d5816ddabf80ab5641c1a2bb112117.png",
        "first_ep": {
          "cover": "http://i0.hdslb.com/bfs/archive/18ead60d3895843e4476bc8459a8cada1e55fba1.png",
          "ep_id": 2081361
        },
        "index_show": "全13话",
        "is_finish": 1,
        "link": "https://www.bilibili.com/bangumi/play/ss109360",
        "media_id": 27366597,
        "order": "9.9分",
        "order_type": "4",
        "score": "9.9",
        "season_id": 109360,
        "season_status": 13,
        "season_type": 1,
        "subTitle": "用怪兽打败怪兽",
        "title": "奥特银河 大怪兽之战 无尽的圣战",
        "title_icon": ""
      },
      {
        "badge": "大会员",
        "badge_info": {
          "bg_color": "#FB7299",
          "bg_color_night": "#D44E7D",
          "text": "大会员"
        },
        "badge_type": 0,
        "cover": "https://i0.hdslb.com/bfs/bangumi/image/8eb3d284a1109218ab6c61768d18942011b4a101.png",
        "first_ep": {
          "cover": "http://i0.hdslb.com/bfs/archive/6912de2f07dd6223b1d321b3fabfc7ce031f8ba1.png",
          "ep_id": 2081328
        },
        "index_show": "全13话",
        "is_finish": 1,
        "link": "https://www.bilibili.com/bangumi/play/ss109321",
        "media_id": 27362342,
        "order": "9.9分",
        "order_type": "4",
        "score": "9.9",
        "season_id": 109321,
        "season_status": 13,
        "season_type": 1,
        "subTitle": "用怪兽打败怪兽",
        "title": "奥特银河 大怪兽之战",
        "title_icon": ""
      },
      {
        "badge": "大会员",
        "badge_info": {
          "bg_color": "#FB7299",
          "bg_color_night": "#D44E7D",
          "text": "大会员"
        },
        "badge_type": 0,
        "cover": "https://i0.hdslb.com/bfs/bangumi/image/c4bc29a81716afdcaa4e859176e889366a554021.png",
        "first_ep": {
          "cover": "https://i0.hdslb.com/bfs/bangumi/image/a5c64d1762845307cf8bb5de00327eaf7969d773.png",
          "ep_id": 1718028
        },
        "index_show": "全1话",
        "is_finish": 1,
        "link": "https://www.bilibili.com/bangumi/play/ss99364?theme=movie",
        "media_id": 26339285,
        "order": "9.9分",
        "order_type": "4",
        "score": "9.9",
        "season_id": 99364,
        "season_status": 13,
        "season_type": 1,
        "subTitle": "日剧感强的假面骑士",
        "title": "假面骑士圣刃 深罪三重奏",
        "title_icon": ""
      },
      {
        "badge": "大会员",
        "badge_info": {
          "bg_color": "#FB7299",
          "bg_color_night": "#D44E7D",
          "text": "大会员"
        },
        "badge_type": 0,
        "cover": "https://i0.hdslb.com/bfs/bangumi/image/f72fac0118e212e577ee4a3a0b0b0e3021c90e58.png",
        "first_ep": {
          "cover": "http://i0.hdslb.com/bfs/archive/7b9294cbed2bd10e880a449923968d60762ae4e0.png",
          "ep_id": 1692216
        },
        "index_show": "全13话",
        "is_finish": 1,
        "link": "https://www.bilibili.com/bangumi/play/ss98694",
        "media_id": 26271690,
        "order": "9.9分",
        "order_type": "4",
        "score": "9.9",
        "season_id": 98694,
        "season_status": 13,
        "season_type": 1,
        "subTitle": "少年获得神奇手表",
        "title": "少年骇客 第一季 中文配音",
        "title_icon": ""
      },
      {
        "badge": "大会员",
        "badge_info": {
          "bg_color": "#FB7299",
          "bg_color_night": "#D44E7D",
          "text": "大会员"
        },
        "badge_type": 0,
        "cover": "https://i0.hdslb.com/bfs/bangumi/image/00983f73ba7043f14f8a473051e8ccdf502b4466.png",
        "first_ep": {
          "cover": "http://i0.hdslb.com/bfs/archive/d49a210847788bb9b56ccdf7d117f67377470139.jpg",
          "ep_id": 1670641
        },
        "index_show": "全26话",
        "is_finish": 1,
        "link": "https://www.bilibili.com/bangumi/play/ss97528",
        "media_id": 26154494,
        "order": "9.9分",
        "order_type": "4",
        "score": "9.9",
        "season_id": 97528,
        "season_status": 13,
        "season_type": 1,
        "subTitle": "快看！是彩虹小马！",
        "title": "小马宝莉 友谊的魔法 第一季 中文配音",
        "title_icon": ""
      },
      {
        "badge": "大会员",
        "badge_info": {
          "bg_color": "#FB7299",
          "bg_color_night": "#D44E7D",
          "text": "大会员"
        },
        "badge_type": 0,
        "cover": "https://i0.hdslb.com/bfs/bangumi/image/f0aa6018ab3d68b981a874a2ffc2881a8eb1d3a9.png",
        "first_ep": {
          "cover": "http://i0.hdslb.com/bfs/archive/8037892942512985339b60cb022a268596561eeb.png",
          "ep_id": 1568817
        },
        "index_show": "全12话",
        "is_finish": 1,
        "link": "https://www.bilibili.com/bangumi/play/ss91765",
        "media_id": 25576803,
        "order": "9.9分",
        "order_type": "4",
        "score": "9.9",
        "season_id": 91765,
        "season_status": 13,
        "season_type": 1,
        "subTitle": "天才变谐星？！",
        "title": "失忆投捕",
        "title_icon": ""
      },
      {
        "badge": "独家",
        "badge_info": {
          "bg_color": "#00C0FF",
          "bg_color_night": "#0B91BE",
          "text": "独家"
        },
        "badge_type": 1,
        "cover": "https://i0.hdslb.com/bfs/bangumi/image/56af151182c0b499b37e59b582d756d7bae6bc9d.png",
        "first_ep": {
          "cover": "http://i0.hdslb.com/bfs/archive/ea0fd1b78b85f5fd4242643eeec77e965c651aed.png",
          "ep_id": 1518097
        },
        "index_show": "全1话",
        "is_finish": 1,
        "link": "https://www.bilibili.com/bangumi/play/ss91516",
        "media_id": 25551928,
        "order": "9.9分",
        "order_type": "4",
        "score": "9.9",
        "season_id": 91516,
        "season_status": 13,
        "season_type": 1,
        "subTitle": "主打一个不滑滑板",
        "title": "无限滑板 特别篇",
        "title_icon": ""
      },
      {
        "badge": "独家",
        "badge_info": {
          "bg_color": "#00C0FF",
          "bg_color_night": "#0B91BE",
          "text": "独家"
        },
        "badge_type": 1,
        "cover": "https://i0.hdslb.com/bfs/bangumi/image/2f5946880c07914d1cccd112702884f232b647e0.png",
        "first_ep": {
          "cover": "https://i0.hdslb.com/bfs/bangumi/image/e38897af6ec62b387918c5966d1fa60f27affff5.png",
          "ep_id": 1524613
        },
        "index_show": "全12话",
        "is_finish": 1,
        "link": "https://www.bilibili.com/bangumi/play/ss90684",
        "media_id": 25467691,
        "order": "9.9分",
        "order_type": "4",
        "score": "9.9",
        "season_id": 90684,
        "season_status": 13,
        "season_type": 1,
        "subTitle": "让AI顺应你的心",
        "title": "末日后酒店",
        "title_icon": ""
      },
      {
        "badge": "大会员",
        "badge_info": {
          "bg_color": "#FB7299",
          "bg_color_night": "#D44E7D",
          "text": "大会员"
        },
        "badge_type": 0,
        "cover": "https://i0.hdslb.com/bfs/bangumi/image/d2c1d3d379d385b2c6abcffd48a55a93deb6889d.png",
        "first_ep": {
          "cover": "http://i0.hdslb.com/bfs/archive/cf4aca7382f42d01c3d2b10f3c8a0dcc9fd011a1.jpg",
          "ep_id": 1404755
        },
        "index_show": "全13话",
        "is_finish": 1,
        "link": "https://www.bilibili.com/bangumi/play/ss76133",
        "media_id": 24006597,
        "order": "9.9分",
        "order_type": "4",
        "score": "9.9",
        "season_id": 76133,
        "season_status": 13,
        "season_type": 1,
        "subTitle": "教练，我想学滑冰！",
        "title": "金牌得主",
        "title_icon": ""
      },
      {
        "badge": "大会员",
        "badge_info": {
          "bg_color": "#FB7299",
          "bg_color_night": "#D44E7D",
          "text": "大会员"
        },
        "badge_type": 0,
        "cover": "https://i0.hdslb.com/bfs/bangumi/image/6b431f3e7aef2fd476a11a59449096f20e5c34a4.jpg",
        "first_ep": {
          "cover": "http://i0.hdslb.com/bfs/archive/57d3f50996c97c804ec03dbd769b2feee9ae6f3f.png",
          "ep_id": 1113923
        },
        "index_show": "全12话",
        "is_finish": 1,
        "link": "https://www.bilibili.com/bangumi/play/ss48811",
        "media_id": 23053814,
        "order": "9.9分",
        "order_type": "4",
        "score": "9.9",
        "season_id": 48811,
        "season_status": 13,
        "season_type": 1,
        "subTitle": "治愈之旅的延续",
        "title": "夏目友人帐 第七季",
        "title_icon": ""
      },
      {
        "badge": "大会员",
        "badge_info": {
          "bg_color": "#FB7299",
          "bg_color_night": "#D44E7D",
          "text": "大会员"
        },
        "badge_type": 0,
        "cover": "https://i0.hdslb.com/bfs/bangumi/image/6e9309a647368c4afabbfb23537f37e7b311a014.png",
        "first_ep": {
          "cover": "http://i0.hdslb.com/bfs/archive/847348eeaec3e4617eaffd102a402409b1905106.png",
          "ep_id": 835243
        },
        "index_show": "全40话",
        "is_finish": 1,
        "link": "https://www.bilibili.com/bangumi/play/ss48643",
        "media_id": 22923892,
        "order": "9.9分",
        "order_type": "4",
        "score": "9.9",
        "season_id": 48643,
        "season_status": 13,
        "season_type": 1,
        "subTitle": "小羊肖恩拯救不开心",
        "title": "小羊肖恩 第一季",
        "title_icon": ""
      },
      {
        "badge": "大会员",
        "badge_info": {
          "bg_color": "#FB7299",
          "bg_color_night": "#D44E7D",
          "text": "大会员"
        },
        "badge_type": 0,
        "cover": "https://i0.hdslb.com/bfs/bangumi/image/93c420e293be6135c7b3474394239fce339bfc99.jpg",
        "first_ep": {
          "cover": "http://i0.hdslb.com/bfs/archive/33d907c4af25805ea283aa3bdd1223f95653acad.png",
          "ep_id": 812175
        },
        "index_show": "全50话",
        "is_finish": 1,
        "link": "https://www.bilibili.com/bangumi/play/ss47245",
        "media_id": 21195727,
        "order": "9.9分",
        "order_type": "4",
        "score": "9.9",
        "season_id": 47245,
        "season_status": 13,
        "season_type": 1,
        "subTitle": "本大爷要支配世界！",
        "title": "虫王战队超王者",
        "title_icon": ""
      },
      {
        "badge": "大会员",
        "badge_info": {
          "bg_color": "#FB7299",
          "bg_color_night": "#D44E7D",
          "text": "大会员"
        },
        "badge_type": 0,
        "cover": "https://i0.hdslb.com/bfs/bangumi/image/67f7082099cf201a50a979a5788490c9b6989931.jpg",
        "first_ep": {
          "cover": "http://i0.hdslb.com/bfs/archive/df4429a10a9a113a9eac97aec1fd63d05ba475ad.png",
          "ep_id": 771376
        },
        "index_show": "全272话",
        "is_finish": 1,
        "link": "https://www.bilibili.com/bangumi/play/ss45840",
        "media_id": 20342554,
        "order": "9.9分",
        "order_type": "4",
        "score": "9.9",
        "season_id": 45840,
        "season_status": 13,
        "season_type": 1,
        "subTitle": "活泼又聪明的蓝精灵",
        "title": "蓝精灵 中文配音",
        "title_icon": ""
      },
      {
        "badge": "大会员",
        "badge_info": {
          "bg_color": "#FB7299",
          "bg_color_night": "#D44E7D",
          "text": "大会员"
        },
        "badge_type": 0,
        "cover": "https://i0.hdslb.com/bfs/bangumi/image/05b90f3e078e2f67a92df5cbf150bdd85d9f824b.jpg",
        "first_ep": {
          "cover": "https://i0.hdslb.com/bfs/bangumi/image/9e267f05ae866de3c368317983e5702cf46cbd72.jpg",
          "ep_id": 744262
        },
        "index_show": "全52话",
        "is_finish": 1,
        "link": "https://www.bilibili.com/bangumi/play/ss45014",
        "media_id": 20222550,
        "order": "9.9分",
        "order_type": "4",
        "score": "9.9",
        "season_id": 45014,
        "season_status": 13,
        "season_type": 1,
        "subTitle": "如何在游戏中学习",
        "title": "布鲁伊 第三季",
        "title_icon": ""
      }
    ],
    "num": 1,
    "size": 25,
    "total": 4147
  },
  "message": "success"
}
```

</details>
