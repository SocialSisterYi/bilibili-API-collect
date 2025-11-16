# 合集和视频列表信息

请注意区分 **合集(seasons_archives)** 和 **视频列表(seasons_series)**

合集是后加入的功能, 图标为立体叠放的正方形(.icon-heji), 可以在创作中心管理, 参见 [合集管理](../creativecenter/season.md)

列表即系列(series)或频道(channel), 图标为平面叠放的矩形且中央有播放按钮标识(.icon-ic_channel1), 在个人空间直接操作

此处保留原 Issue 的表述, 参见 [#945](https://github.com/SocialSisterYi/bilibili-API-collect/issues/945)

## 获取视频合集信息

> https://api.bilibili.com/x/polymer/web-space/seasons_archives_list (需验证referer)
>
> https://api.bilibili.com/x/polymer/space/seasons_archives_list (旧接口, 不推荐使用, 无鉴权验证)

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
|--------|-----|------|--------|-----|
| mid  | num | 用户 mid | 必要 | 创建者的 mid，但也可以是任意的非负整数 |
| season_id  | num | 视频合集 ID | 必要 |  |
| sort_reverse  | bool | 排序方式 | 可选 | true: 升序排序<br />false: 默认排序 |
| page_num  | num | 页码索引 | 可选 | 默认为 1 |
| page_size  | num | 单页内容数量 | 可选 | 默认为 30 |
| gaia_vtoken | str | 风控验证? | 可选 | 若被风控则必要(如User-Agent不正常) |
| web_location | str | 页面位置? | 可选 | 333.999 |
| w_rid | str | WBI 签名 | 可选 | 参见 [WBI 签名](../misc/sign/wbi.md) |
| wts | num | UNIX 秒级时间戳 | 可选 | 参见 [WBI 签名](../misc/sign/wbi.md) |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                                                                                 |
|---------|-----|------|------------------------------------------------------------------------------------|
| code    | num | 返回值  | 0：成功 |
| message | str | 错误信息 | 默认为0 |
| ttl     | num | 1    | |
| data    | obj | 信息本体 | |

`data`对象：

| 字段                    | 类型    | 内容                           | 备注                                                         |
| ----------------------- | ------- | ------------------------------ | ----------------------------------------------------------- |
| aids                    | array     | 稿件 avid 列表                       | 对应下方数组中内容 aid                                       |
| archives                | array     | 合集中的视频                    |                                                            |
| meta                    | obj       | 合集元数据                      |                                                            |
| page                    | obj       | 分页信息                        |                                                            |

`data`中的`archives`数组：

| 项   | 类型  | 内容       | 备注      |
|-----|-----|----------|---------|
| 0   | obj | 合集内容     |  |
| n   | obj | (n+1)P内容 |         |
| ……  | obj | ……       | ……      |

`archives`数组中的对象：

| 字段       | 类型  | 内容   | 备注  |
|----------|-----|------|-----|
| aid | num | 稿件 avid ||
| bvid | str | 稿件 bvid ||
| ctime | num | 创建时间 | Unix 时间戳 |
| duration | num | 视频时长 | 单位为秒 |
| enable_vt | bool | false | 旧接口无 |
| interactive_video | bool | 是否是互动视频 | |
| pic | str | 封面 URL ||
| playback_position | num || 会随着播放时间增长，播放完成后为 -1 。单位为 % |
| pubdate | num | 发布日期 | Unix 时间戳 |
| stat | obj | 稿件信息 ||
| state | num | 0 ||
| title | str | 稿件标题||
| ugc_pay | num | UGC 付费? | 0: 否 |
| vt_display | str | 空 | 旧接口无 |

`archives`中的`stat`对象：

| 字段       | 类型  | 内容   | 备注  |
|----------|-----|------|-----|
| view | num | 稿件播放量 ||
| vt | num | 0 ||

`data`中的`meta`对象：

| 字段              | 类型  | 内容           | 备注     |
|-----------------|-----|--------------|--------|
| category | num | 0 |  |
| cover | str | 合集封面 URL |  |
| description | str | 合集描述 |  |
| mid | num | UP 主 ID |  |
| name | str | 合集标题 |  |
| ptime | num | 发布时间 | Unix 时间戳 |
| season_id | num | 合集 ID |  |
| total | num | 合集内视频数量 |  |

`data`中的`page`对象：

| 字段              | 类型  | 内容           | 备注     |
|-----------------|-----|--------------|--------|
| page_num | num | 分页页码 |  |
| page_size | num | 单页个数 |  |
| total | num | 合集内视频数量 |  |

**示例:**

获取 `mid=37737161` 的 `season_id=1227671` 视频合集信息，默认排序，第 1 页，每页 30 个视频

```shell
curl -G "https://api.bilibili.com/x/polymer/space/seasons_archives_list" \
--data-urlencode "mid=37737161" \
--data-urlencode "sort_reverse=false" \
--data-urlencode "season_id=1227671" \
--data-urlencode "page_num=1" \
--data-urlencode "page_size=30"
```

<details>
<summary>查看响应示例:</summary>


```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "aids": [
      311606079,
      400546145
    ],
    "archives": [
      {
        "aid": 311606079,
        "bvid": "BV1XN411K7g9",
        "ctime": 1679651747,
        "duration": 261,
        "interactive_video": false,
        "pic": "http://i2.hdslb.com/bfs/archive/234e6bd061176dba9e148f4373c52fa7cd2d801f.jpg",
        "pubdate": 1679651747,
        "stat": {
          "view": 12145
        },
        "state": 0,
        "title": "某些IT社区平台乱象，文章千篇一律，毫不注重版权，文章互相抄袭成潮流，希望能够好好管管！",
        "ugc_pay": 0
      },
      {
        "aid": 400546145,
        "bvid": "BV1qo4y1L73P",
        "ctime": 1682777426,
        "duration": 335,
        "interactive_video": false,
        "pic": "http://i2.hdslb.com/bfs/archive/a6b6fb0330bbf6c500720a024e5a9ade24d888c3.jpg",
        "pubdate": 1682777425,
        "stat": {
          "view": 52743
        },
        "state": 0,
        "title": "某些搜索引擎得到的结果，官方网站反而排在一些诈骗广告后面，诱导用户下载大量捆绑垃圾软件",
        "ugc_pay": 0
      }
    ],
    "meta": {
      "category": 0,
      "cover": "https://archive.biliimg.com/bfs/archive/5e1c1f77c3065ec31eec43d7e35f7a061602e4d6.jpg",
      "description": "白马首席讲师吐槽系列视频",
      "mid": 37737161,
      "name": "水浅王八多，真假白马说",
      "ptime": 1682777425,
      "season_id": 1227671,
      "total": 2
    },
    "page": {
      "page_num": 1,
      "page_size": 30,
      "total": 2
    }
  }
}
```

</details>

## 只获取系列视频

> https://api.bilibili.com/x/polymer/web-space/home/seasons_series

*请求方式: GET*

**URL参数:**

| 参数名    | 类型 | 内容         | 必要性 | 备注 |
| --------- | ---- | ------------ | ------ | ---- |
| mid       | num  | 用户 mid     | 必要   |      |
| page_num  | num  | 页码索引     | 必要   |      |
| page_size | num  | 单页内容数量 | 必要   |      |
| gaia_vtoken | str | 风控验证? | 可选 | 若被风控则必要(如User-Agent不正常) |
| w_rid     | str  | WBI 签名     | 不必要 | 参见 [WBI 签名](../misc/sign/wbi.md) |
| wts       | num  | UNIX 秒级时间戳 | 不必要 | 参见 [WBI 签名](../misc/sign/wbi.md) |

**JSON回复:**

根对象:

| 字段    | 类型 | 内容     | 备注    |
| ------- | ---- | -------- | ------- |
| code    | num  | 返回值   | 0：成功<br />-352: 请求被风控<br />-400: 请求错误 |
| message | str  | 错误信息 | 默认为0 |
| ttl     | num  | 1        |         |
| data    | obj  | 信息本体 |         |

`data`对象:

| 字段        | 类型 | 内容     | 备注     |
| ----------- | ---- | -------- | -------- |
| items_lists | obj  | 内容列表 | 套了个娃 |

`data`中的`items_lists`对象:

| 字段         | 类型  | 内容     | 备注 |
| ------------ | ----- | -------- | ---- |
| page         | obj   | 分页信息 |      |
| seasons_list | array | 空       |      |
| series_list  | array | 系列列表 |      |

`items_lists`中的`page`对象:

| 字段      | 类型 | 内容     | 备注 |
| --------- | ---- | -------- | ---- |
| page_num  | num  | 分页页码 |      |
| page_size | num  | 单页个数 |      |
| total     | num  | 总页数   |      |

`items_lists`中的`series_list`数组:

| 项 | 类型 | 内容              | 备注 |
| -- | ---- | ----------------- | ---- |
| 0  | obj  | 第1个系列内容     |      |
| 1  | obj  | 第2个系列内容     |      |
| …… | obj  | ……                | ……   |
| n  | obj  | 第(n+1)个系列内容 |      |

`series_list`数组中的对象:

| 字段        | 类型  | 内容              | 备注          |
| ----------- | ----- | ----------------- | ------------- |
| archives    | array | 系列视频列表      |               |
| meta        | obj   | 系列元数据        |               |
| recent_aids | array | 系列视频 aid 列表 | 内容类型为num |

`series_list`中的`archives`数组:

同[获取视频合集信息](#获取视频合集信息)中的`archives`数组

`series_list`中的`meta`对象:

| 字段            | 类型  | 内容           | 备注          |
| --------------- | ----- | -------------- | ------------- |
| category        | num   | 1              |               |
| cover           | str   | 系列封面 URL   |               |
| creator         | str   | auto           |               |
| ctime           | num   | 创建时间       | Unix 时间戳   |
| description     | str   | 系列描述       |               |
| keywords        | array | 系列关键词列表 | 内容类型为str |
| last_update_ts  | num   | 最近更新时间   | Unix 时间戳   |
| mid             | num   | UP 主 ID       |               |
| mtime           | num   | 修改时间       | Unix 时间戳   |
| name            | str   | 系列标题       |               |
| raw_keywords    | str   | 原始系列关键词 |               |
| series_id       | num   | 系列 ID        |               |
| state           | num   | 2              |               |
| total           | num   | 系列视频数量   |               |

**示例:**

```shell
curl -G "https://api.bilibili.com/x/polymer/web-space/home/seasons_series" \
--data-urlencode "mid=37737161" \
--data-urlencode "page_num=1" \
--data-urlencode "page_size=10"
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "items_lists": {
      "page": {
        "page_num": 1,
        "page_size": 10,
        "total": 1
      },
      "seasons_list": [],
      "series_list": [
        {
          "archives": [
            {
              "aid": 284063097,
              "bvid": "BV1Fc411x7xF",
              "ctime": 1705925782,
              "duration": 8885,
              "enable_vt": false,
              "interactive_video": false,
              "pic": "http://i0.hdslb.com/bfs/archive/5aa1bb0a121d89969e9bd2634bc7ae23272bf850.jpg",
              "playback_position": 0,
              "pubdate": 1705925781,
              "stat": {
                "view": 14683,
                "vt": 0
              },
              "state": 0,
              "title": "Gradle 教程 已完结 (基于Kotlin DSL讲解) 4K蓝光画质 超强的脚本式项目依赖和构建工具",
              "ugc_pay": 0,
              "vt_display": ""
            },
            {
              "aid": 367948632,
              "bvid": "BV1P94y1c7tV",
              "ctime": 1703844221,
              "duration": 52036,
              "enable_vt": false,
              "interactive_video": false,
              "pic": "http://i2.hdslb.com/bfs/archive/499aeb41a0428e05523b766e367540b04f7c3ae2.jpg",
              "playback_position": 0,
              "pubdate": 1703844220,
              "stat": {
                "view": 82997,
                "vt": 0
              },
              "state": 0,
              "title": "Kotlin 教程 已完结 (IDEA 2024 最新版) 4K蓝光画质+杜比音效 零基础入门一套搞定 入门到入土经典版",
              "ugc_pay": 0,
              "vt_display": ""
            },
            {
              "aid": 836303388,
              "bvid": "BV1Hg4y1m7Ca",
              "ctime": 1705401362,
              "duration": 5873,
              "enable_vt": false,
              "interactive_video": false,
              "pic": "http://i1.hdslb.com/bfs/archive/a20b09d1cc1a81f6a9c5ed8ea322656e406be725.jpg",
              "playback_position": 0,
              "pubdate": 1705401362,
              "stat": {
                "view": 8417,
                "vt": 0
              },
              "state": 0,
              "title": "Kotlin 扩展篇 已完结 (IDEA 2024 最新版) 4K蓝光画质 与Java语言混合编程",
              "ugc_pay": 0,
              "vt_display": ""
            }
          ],
          "meta": {
            "category": 1,
            "cover": "http://i0.hdslb.com/bfs/archive/5aa1bb0a121d89969e9bd2634bc7ae23272bf850.jpg",
            "creator": "auto",
            "ctime": 1705401630,
            "description": "包含Kotlin语言学习的完整流程，正在不断完善中哦~",
            "keywords": [
              "Kotlin"
            ],
            "last_update_ts": 1705925782,
            "mid": 37737161,
            "mtime": 1705925782,
            "name": "Kotlin开心路线",
            "raw_keywords": "Kotlin",
            "series_id": 3908327,
            "state": 2,
            "total": 3
          },
          "recent_aids": [
            284063097,
            367948632,
            836303388
          ]
        },
        {
          "archives": [
            {
              "aid": 848832470,
              "bvid": "BV1CL4y1i7qR",
              "ctime": 1635258883,
              "duration": 106474,
              "enable_vt": false,
              "interactive_video": false,
              "pic": "http://i0.hdslb.com/bfs/archive/45dddea811257f78ddd6f1e70197d95d7d6b5187.jpg",
              "playback_position": 0,
              "pubdate": 1635258883,
              "stat": {
                "view": 438645,
                "vt": 0
              },
              "state": 0,
              "title": "JavaWeb 教程 已完结（IDEA 2021版本）4K蓝光画质 入土到起立",
              "ugc_pay": 0,
              "vt_display": ""
            },
            {
              "aid": 566880413,
              "bvid": "BV1Kv4y1x7is",
              "ctime": 1676544280,
              "duration": 25149,
              "enable_vt": false,
              "interactive_video": false,
              "pic": "http://i1.hdslb.com/bfs/archive/cc59de5afebc66447ba93ad9ea0ba73a9b09c117.jpg",
              "playback_position": 0,
              "pubdate": 1676544280,
              "stat": {
                "view": 87171,
                "vt": 0
              },
              "state": 0,
              "title": "Spring 核心教程 已完结（IDEA 2023最新版）4K蓝光画质 基于Spring6的全新重制版本 起立到起飞",
              "ugc_pay": 0,
              "vt_display": ""
            },
            {
              "aid": 615286308,
              "bvid": "BV1Lh4y1M7kx",
              "ctime": 1688117457,
              "duration": 10373,
              "enable_vt": false,
              "interactive_video": false,
              "pic": "http://i0.hdslb.com/bfs/archive/5f860de4bc0fab30651ae93396f9c572be8380b2.jpg",
              "playback_position": 0,
              "pubdate": 1688117457,
              "stat": {
                "view": 41428,
                "vt": 0
              },
              "state": 0,
              "title": "Spring MVC 教程 已完结（IDEA 2023最新版）4K蓝光画质 基于Spring6的全新重制版本 起立到起飞",
              "ugc_pay": 0,
              "vt_display": ""
            },
            {
              "aid": 403104913,
              "bvid": "BV1fV411M7aS",
              "ctime": 1688560394,
              "duration": 17611,
              "enable_vt": false,
              "interactive_video": false,
              "pic": "http://i1.hdslb.com/bfs/archive/c4557a16aa3519183d6ae0114e1c64107bb23703.jpg",
              "playback_position": 0,
              "pubdate": 1688560394,
              "stat": {
                "view": 59298,
                "vt": 0
              },
              "state": 0,
              "title": "Spring Security 教程 已完结（IDEA 2023最新版）4K蓝光画质 基于Spring6的全新重制版本 起立到起飞",
              "ugc_pay": 0,
              "vt_display": ""
            },
            {
              "aid": 828666773,
              "bvid": "BV1xu4y1m7UP",
              "ctime": 1689767299,
              "duration": 29696,
              "enable_vt": false,
              "interactive_video": false,
              "pic": "http://i1.hdslb.com/bfs/archive/06cf686d4d3f7ce6731975ef59938d759283318e.jpg",
              "playback_position": 0,
              "pubdate": 1689767299,
              "stat": {
                "view": 108078,
                "vt": 0
              },
              "state": 0,
              "title": "Spring Boot 教程 已完结（IDEA 2023最新版）4K蓝光画质 基于SpringBoot 3 的全新重制版本 起飞到删库跑路",
              "ugc_pay": 0,
              "vt_display": ""
            },
            {
              "aid": 852857221,
              "bvid": "BV1AL4y1j7RY",
              "ctime": 1648811079,
              "duration": 55544,
              "enable_vt": false,
              "interactive_video": false,
              "pic": "http://i2.hdslb.com/bfs/archive/629755f79c13c96c9b6d91da80257a352b29dd86.jpg",
              "playback_position": 0,
              "pubdate": 1648811079,
              "stat": {
                "view": 168251,
                "vt": 0
              },
              "state": 0,
              "title": "SpringCloud 教程 已完结（IDEA 2022.1最新版）4K蓝光画质 微服务开发",
              "ugc_pay": 0,
              "vt_display": ""
            }
          ],
          "meta": {
            "category": 1,
            "cover": "http://i0.hdslb.com/bfs/archive/45dddea811257f78ddd6f1e70197d95d7d6b5187.jpg",
            "creator": "auto",
            "ctime": 1669273103,
            "description": "已排序完成，共4个系列，请至少完成Java SE篇视频之后再开始JavaEE路线哦~ 整个路线大致为：JavaWeb基础篇、SSM成长篇、SpringBoot成熟篇、SpringCloud进阶篇",
            "keywords": [
              ""
            ],
            "last_update_ts": 1696249622,
            "mid": 37737161,
            "mtime": 1696249622,
            "name": "JavaEE通关路线",
            "raw_keywords": "",
            "series_id": 2800548,
            "state": 2,
            "total": 9
          },
          "recent_aids": [
            848832470,
            566880413,
            615286308,
            403104913,
            828666773,
            852857221
          ]
        },
        {
          "archives": [
            {
              "aid": 445283537,
              "bvid": "BV14j411S76G",
              "ctime": 1687946670,
              "duration": 7008,
              "enable_vt": false,
              "interactive_video": false,
              "pic": "http://i1.hdslb.com/bfs/archive/208bb09ecf97fbbd73e45b3839715276ffbbe8f4.jpg",
              "playback_position": 0,
              "pubdate": 1687946670,
              "stat": {
                "view": 9483,
                "vt": 0
              },
              "state": 0,
              "title": "Apache Maven 依赖管理 极速上手 已完结（2021 版本）4K蓝光画质+杜比音效 从导入到冲突",
              "ugc_pay": 0,
              "vt_display": ""
            },
            {
              "aid": 813084463,
              "bvid": "BV1r34y1p7j9",
              "ctime": 1656909478,
              "duration": 17457,
              "enable_vt": false,
              "interactive_video": false,
              "pic": "http://i2.hdslb.com/bfs/archive/798135f31dc9e03121458f32825dc81d8e403887.jpg",
              "playback_position": 0,
              "pubdate": 1656909478,
              "stat": {
                "view": 46179,
                "vt": 0
              },
              "state": 0,
              "title": "Docker 容器技术 已完结（2022 最新版）4K蓝光画质+杜比音效 从内卷到开摆",
              "ugc_pay": 0,
              "vt_display": ""
            },
            {
              "aid": 432905025,
              "bvid": "BV1a3411f7nh",
              "ctime": 1669296029,
              "duration": 10393,
              "enable_vt": false,
              "interactive_video": false,
              "pic": "http://i2.hdslb.com/bfs/archive/d14c0fad064a224de7afb7edd147f8b335324c53.jpg",
              "playback_position": 0,
              "pubdate": 1669296029,
              "stat": {
                "view": 37040,
                "vt": 0
              },
              "state": 0,
              "title": "Linux 操作系统 光速入门 已完结（2021 版本）4K蓝光画质+杜比音效 从讨厌到喜欢",
              "ugc_pay": 0,
              "vt_display": ""
            },
            {
              "aid": 390385576,
              "bvid": "BV19d4y147Df",
              "ctime": 1669272992,
              "duration": 23389,
              "enable_vt": false,
              "interactive_video": false,
              "pic": "http://i0.hdslb.com/bfs/archive/8ba763e1a1e14c47c1c178ecf21240896d3fbb5e.jpg",
              "playback_position": 0,
              "pubdate": 1669272992,
              "stat": {
                "view": 32189,
                "vt": 0
              },
              "state": 0,
              "title": "MySQL 数据库技术 已完结（2021版本）4K蓝光画质+杜比音效 从内卷到开摆",
              "ugc_pay": 0,
              "vt_display": ""
            },
            {
              "aid": 647924810,
              "bvid": "BV1ce4y1W7YB",
              "ctime": 1669275447,
              "duration": 8492,
              "enable_vt": false,
              "interactive_video": false,
              "pic": "http://i0.hdslb.com/bfs/archive/f5bcc92a4e181cb12a8b80499cea255f43f2d97b.jpg",
              "playback_position": 0,
              "pubdate": 1669275447,
              "stat": {
                "view": 20004,
                "vt": 0
              },
              "state": 0,
              "title": "Git 版本控制 快速上手 已完结（2021版本）4K蓝光画质+杜比音效 从开摆到放弃",
              "ugc_pay": 0,
              "vt_display": ""
            },
            {
              "aid": 347934006,
              "bvid": "BV1vR4y1o7Z2",
              "ctime": 1669295228,
              "duration": 10631,
              "enable_vt": false,
              "interactive_video": false,
              "pic": "http://i0.hdslb.com/bfs/archive/f95d39b0bc1a2bdad07461a8f4b1ea48c174902c.jpg",
              "playback_position": 0,
              "pubdate": 1669295228,
              "stat": {
                "view": 25860,
                "vt": 0
              },
              "state": 0,
              "title": "Redis 缓存技术 已完结（2021版本）4K蓝光画质+杜比音效 从内卷到开摆",
              "ugc_pay": 0,
              "vt_display": ""
            }
          ],
          "meta": {
            "category": 1,
            "cover": "http://i1.hdslb.com/bfs/archive/208bb09ecf97fbbd73e45b3839715276ffbbe8f4.jpg",
            "creator": "auto",
            "ctime": 1669273164,
            "description": "包含主线中讲解的中间件归档视频与当下必学的火热技术。",
            "keywords": [
              ""
            ],
            "last_update_ts": 1688123428,
            "mid": 37737161,
            "mtime": 1688123428,
            "name": "必学技术与中间件",
            "raw_keywords": "",
            "series_id": 2800550,
            "state": 2,
            "total": 7
          },
          "recent_aids": [
            445283537,
            813084463,
            432905025,
            390385576,
            647924810,
            347934006
          ]
        },
        {
          "archives": [
            {
              "aid": 900707014,
              "bvid": "BV1YP4y1o75f",
              "ctime": 1663494406,
              "duration": 103542,
              "enable_vt": false,
              "interactive_video": false,
              "pic": "http://i0.hdslb.com/bfs/archive/291dd3b60b67a8f74567a81999612bd50b4e8017.jpg",
              "playback_position": 0,
              "pubdate": 1663494406,
              "stat": {
                "view": 312144,
                "vt": 0
              },
              "state": 0,
              "title": "JavaSE 教程 已完结 (IDEA 2022 最新版) 4K蓝光画质+杜比音效 零基础入门一套搞定 入门到入土",
              "ugc_pay": 0,
              "vt_display": ""
            },
            {
              "aid": 604837097,
              "bvid": "BV1G84y1v7Vj",
              "ctime": 1667815711,
              "duration": 19395,
              "enable_vt": false,
              "interactive_video": false,
              "pic": "http://i0.hdslb.com/bfs/archive/4a4522194a1d0c8ae684976b26fb2fe43ce28f39.jpg",
              "playback_position": 0,
              "pubdate": 1667815711,
              "stat": {
                "view": 74496,
                "vt": 0
              },
              "state": 0,
              "title": "JavaSE AWT/Swing 图形化编程 (IDEA 2022 最新版) 4K蓝光画质+杜比音效 快速上手桌面程序 用IDEA写IDEA",
              "ugc_pay": 0,
              "vt_display": ""
            },
            {
              "aid": 766688029,
              "bvid": "BV1Er4y1r7as",
              "ctime": 1645157763,
              "duration": 21585,
              "enable_vt": false,
              "interactive_video": false,
              "pic": "http://i2.hdslb.com/bfs/archive/ced6a8c8548f0f921f306ea3589f9d470adc0446.jpg",
              "playback_position": 0,
              "pubdate": 1645157763,
              "stat": {
                "view": 133409,
                "vt": 0
              },
              "state": 0,
              "title": "Java JVM 虚拟机 已完结（IDEA 2021版本）4K蓝光画质 全程劝退",
              "ugc_pay": 0,
              "vt_display": ""
            },
            {
              "aid": 936955310,
              "bvid": "BV1JT4y1S7K8",
              "ctime": 1646391131,
              "duration": 31736,
              "enable_vt": false,
              "interactive_video": false,
              "pic": "http://i1.hdslb.com/bfs/archive/9347ef3cdb6cf0e5bca29ce32e211b488e90ab7b.jpg",
              "playback_position": 0,
              "pubdate": 1646391131,
              "stat": {
                "view": 74731,
                "vt": 0
              },
              "state": 0,
              "title": "Java JUC 并发编程 已完结（IDEA 2021版本）4K蓝光画质 玩转多线程",
              "ugc_pay": 0,
              "vt_display": ""
            },
            {
              "aid": 768437265,
              "bvid": "BV1ar4y1J7mC",
              "ctime": 1650881312,
              "duration": 26314,
              "enable_vt": false,
              "interactive_video": false,
              "pic": "http://i0.hdslb.com/bfs/archive/7f97549147c09a386d9402b121cc6206c36e4079.jpg",
              "playback_position": 0,
              "pubdate": 1650881312,
              "stat": {
                "view": 67900,
                "vt": 0
              },
              "state": 0,
              "title": "Java NIO Netty网络编程 已完结（IDEA 2022.1最新版）4K蓝光画质 网络I/O进阶编程",
              "ugc_pay": 0,
              "vt_display": ""
            },
            {
              "aid": 684547077,
              "bvid": "BV1tU4y1y7Fg",
              "ctime": 1653900327,
              "duration": 10243,
              "enable_vt": false,
              "interactive_video": false,
              "pic": "http://i2.hdslb.com/bfs/archive/dc0cc9464c6fc274c1f23f682a01dab5a358217b.jpg",
              "playback_position": 0,
              "pubdate": 1653900327,
              "stat": {
                "view": 47693,
                "vt": 0
              },
              "state": 0,
              "title": "JavaSE 9-17 新特性 已完结（IDEA 2022.1最新版）4K蓝光画质 Java9/10/11/12/13/14/15/16/17讲解",
              "ugc_pay": 0,
              "vt_display": ""
            }
          ],
          "meta": {
            "category": 1,
            "cover": "http://i0.hdslb.com/bfs/archive/291dd3b60b67a8f74567a81999612bd50b4e8017.jpg",
            "creator": "auto",
            "ctime": 1648810702,
            "description": "已排序完成，共3个系列，完成JavaSE篇之后，就可以开启JavaEE路线了",
            "keywords": [
              ""
            ],
            "last_update_ts": 1667816253,
            "mid": 37737161,
            "mtime": 1667816253,
            "name": "JavaSE基础路线",
            "raw_keywords": "",
            "series_id": 2158988,
            "state": 2,
            "total": 6
          },
          "recent_aids": [
            900707014,
            604837097,
            766688029,
            936955310,
            768437265,
            684547077
          ]
        },
        {
          "archives": [
            {
              "aid": 770027221,
              "bvid": "BV1Cr4y137os",
              "ctime": 1655371329,
              "duration": 48185,
              "enable_vt": false,
              "interactive_video": false,
              "pic": "http://i0.hdslb.com/bfs/archive/5d9bd135f068e623e50c7341244635f6cc96c3ea.jpg",
              "playback_position": 0,
              "pubdate": 1655371329,
              "stat": {
                "view": 275378,
                "vt": 0
              },
              "state": 0,
              "title": "C语言程序设计 已完结（CLion 2022 最新版）4K蓝光画质+杜比音效 梦开始的地方",
              "ugc_pay": 0,
              "vt_display": ""
            },
            {
              "aid": 941207928,
              "bvid": "BV13W4y127Ey",
              "ctime": 1658474799,
              "duration": 69081,
              "enable_vt": false,
              "interactive_video": false,
              "pic": "http://i2.hdslb.com/bfs/archive/0bf055a0961c0f9bbb7f869b47c3e3d7df21f55c.jpg",
              "playback_position": 0,
              "pubdate": 1658474798,
              "stat": {
                "view": 220072,
                "vt": 0
              },
              "state": 0,
              "title": "数据结构与算法 已完结（CLion 2022 最新版）4K蓝光画质+杜比音效 全程高能",
              "ugc_pay": 0,
              "vt_display": ""
            },
            {
              "aid": 426681358,
              "bvid": "BV1u3411P7Na",
              "ctime": 1653033628,
              "duration": 12346,
              "enable_vt": false,
              "interactive_video": false,
              "pic": "http://i0.hdslb.com/bfs/archive/4174e2976f750d5410d6cef374c3035190717cac.jpg",
              "playback_position": 0,
              "pubdate": 1653033628,
              "stat": {
                "view": 71911,
                "vt": 0
              },
              "state": 0,
              "title": "Java 设计模式 已完结（IDEA 2022.1最新版）4K蓝光画质+杜比音效",
              "ugc_pay": 0,
              "vt_display": ""
            }
          ],
          "meta": {
            "category": 1,
            "cover": "http://i0.hdslb.com/bfs/archive/5d9bd135f068e623e50c7341244635f6cc96c3ea.jpg",
            "creator": "auto",
            "ctime": 1653296733,
            "description": "Java设计模式系列视频，提升你的代码编写规范。",
            "keywords": [
              ""
            ],
            "last_update_ts": 1658735292,
            "mid": 37737161,
            "mtime": 1658735292,
            "name": "高等院校计算机必修课",
            "raw_keywords": "",
            "series_id": 2318088,
            "state": 2,
            "total": 3
          },
          "recent_aids": [
            770027221,
            941207928,
            426681358
          ]
        }
      ]
    }
  }
}
```

</details>

## 获取系列和合集视频

> https://api.bilibili.com/x/polymer/web-space/seasons_series_list

*请求方式: GET*

鉴权方式: 请求头 User-Agent 为正常浏览器, 若仍被风控则请求头再带上 Referer 为 `.bilibili.com` 下任意页

**URL参数:**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| mid    | num  | 用户 mid | 必要   |      |
| page_num | num | 页码 | 必要 | 默认为 1 |
| page_size | num | 每页数量 | 必要 | 默认为 20 |
| w_rid | str | WBI 签名 | 可选 | 参见 [WBI 签名](../misc/sign/wbi.md) |
| wts | num | UNIX 秒级时间戳 | 可选 | 参见 [WBI 签名](../misc/sign/wbi.md) |
| web_location | str | 页面位置? | 可选 | 333.999 |

**JSON回复:**

与 [只获取系列视频](#只获取系列视频) 基本一致, 但 `.data.items_lists.seasons_list` 数组不为空,
且该数组中的元素结构与 `.data.items_lists.series_list` 相同, 略

**示例:**

获取 `mid=37737161` 的系列视频列表，每页 5 条，页码为 1

```shell
curl -G "https://api.bilibili.com/x/polymer/web-space/seasons_series_list" \
--data-urlencode "mid=37737161" \
--data-urlencode "page_num=1" \
--data-urlencode "page_size=5" \
--data-urlencode "w_rid=xxx" \
--data-urlencode "wts=xxx"
```

<details>
<summary>查看响应示例:</summary>

```jsonc
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "items_lists": {
      "page": {
        "page_num": 1,
        "page_size": 5,
        "total": 9
      },
      "seasons_list": [
        {
          "archives": [
            {
              "aid": 343807541,
              "bvid": "BV1t94y1D79E",
              "ctime": 1658907465,
              "duration": 2164,
              "enable_vt": false,
              "interactive_video": false,
              "pic": "http://i1.hdslb.com/bfs/archive/0af0faa77a1921db4cf86c115db70aa2594983f0.jpg",
              "playback_position": 0,
              "pubdate": 1658907465,
              "stat": {
                "view": 43096,
                "vt": 0
              },
              "state": 0,
              "title": "Java学习路线两条龙版，让你不再迷茫！包含各个知识点梳理，常用技术栈介绍等。",
              "ugc_pay": 0,
              "vt_display": ""
            },
            {
              "aid": 429032764,
              "bvid": "BV11G411h7NB",
              "ctime": 1659499261,
              "duration": 197,
              "enable_vt": false,
              "interactive_video": false,
              "pic": "http://i2.hdslb.com/bfs/archive/5235a0ab2738e288b08654aa8e0cd3a509a7ef96.jpg",
              "playback_position": 0,
              "pubdate": 1659499200,
              "stat": {
                "view": 22700,
                "vt": 0
              },
              "state": 0,
              "title": "好书推荐《On Java》都什么年代了，还在看传统Java书籍？",
              "ugc_pay": 0,
              "vt_display": ""
            },
            // ...
          ],
          "meta": {
            "category": 0,
            "cover": "https://archive.biliimg.com/bfs/archive/27733cf13514d990c880154b937cd8633f583aa4.jpg",
            "description": "除教程视频外其他的视频，均在此。",
            "mid": 37737161,
            "name": "合集·拾枝杂谈",
            "ptime": 1694682652,
            "season_id": 587216,
            "total": 10
          },
          "recent_aids": [
            343807541,
            429032764,
            857089796,
            560181990,
            774119786,
            859397126
          ]
        },
        {
          "archives": [
            {
              "aid": 311606079,
              "bvid": "BV1XN411K7g9",
              "ctime": 1679651747,
              "duration": 261,
              "enable_vt": false,
              "interactive_video": false,
              "pic": "http://i2.hdslb.com/bfs/archive/234e6bd061176dba9e148f4373c52fa7cd2d801f.jpg",
              "playback_position": 0,
              "pubdate": 1679651747,
              "stat": {
                "view": 12150,
                "vt": 0
              },
              "state": 0,
              "title": "某些IT社区平台乱象，文章千篇一律，毫不注重版权，文章互相抄袭成潮流，希望能够好好管管！",
              "ugc_pay": 0,
              "vt_display": ""
            },
            {
              "aid": 400546145,
              "bvid": "BV1qo4y1L73P",
              "ctime": 1682777426,
              "duration": 335,
              "enable_vt": false,
              "interactive_video": false,
              "pic": "http://i2.hdslb.com/bfs/archive/a6b6fb0330bbf6c500720a024e5a9ade24d888c3.jpg",
              "playback_position": 0,
              "pubdate": 1682777425,
              "stat": {
                "view": 52744,
                "vt": 0
              },
              "state": 0,
              "title": "某些搜索引擎得到的结果，官方网站反而排在一些诈骗广告后面，诱导用户下载大量捆绑垃圾软件",
              "ugc_pay": 0,
              "vt_display": ""
            }
          ],
          "meta": {
            "category": 0,
            "cover": "https://archive.biliimg.com/bfs/archive/5e1c1f77c3065ec31eec43d7e35f7a061602e4d6.jpg",
            "description": "白马首席讲师吐槽系列视频",
            "mid": 37737161,
            "name": "合集·水浅王八多，真假白马说",
            "ptime": 1682777425,
            "season_id": 1227671,
            "total": 2
          },
          "recent_aids": [
            311606079,
            400546145
          ]
        },
        // ...
      ],
      "series_list": [
        // 与前接口基本相同
      ]
    }
  }
}
```

</details>

## 查询指定系列

> https://api.bilibili.com/x/series/series

*请求方式: GET*

**URL参数:**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| series_id | num | 系列ID | 必要   |      |

**JSON回复:**

根对象:

| 字段    | 类型 | 内容     | 备注    |
| ------- | ---- | -------- | ------- |
| code    | num  | 返回值   | 0：成功 |
| message | str  | 错误信息 | 默认为0 |
| ttl     | num  | 1        |         |
| data    | obj  | 信息本体 |         |

`data`对象:

| 字段         | 类型 | 内容         | 备注 |
| ------------ | ---- | ------------ | ---- |
| meta         | obj  | 系列信息     |      |
| recent_aids  | array  | 系列 aid 列表 | 内容类型为 num |

`data`中的`meta`对象:

同[只获取系列视频](#只获取系列视频)中的`meta`对象

**示例:**

```shell
curl -G 'https://api.bilibili.com/x/series/series' \
--data-urlencode 'series_id=2158988'
```

<details>
<summary>查看响应示例</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "meta": {
      "series_id": 2158988,
      "mid": 37737161,
      "name": "JavaSE基础路线",
      "description": "已排序完成，共3个系列，完成JavaSE篇之后，就可以开启JavaEE路线了",
      "keywords": [
        ""
      ],
      "creator": "auto",
      "state": 2,
      "last_update_ts": 1667816253,
      "total": 6,
      "ctime": 1648810702,
      "mtime": 1667816253,
      "raw_keywords": "",
      "category": 1
    },
    "recent_aids": [
      900707014,
      604837097,
      766688029,
      936955310,
      768437265,
      684547077
    ]
  }
}
```

</details>

## 获取指定系列视频

> https://api.bilibili.com/x/series/archives

*请求方式: GET*

**URL参数:**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| mid    | num  | 用户 mid | 必要   |      |
| series_id | num | 系列ID | 必要   |      |
| only_normal | bool | 作用尚不明确 | 可选 | 默认为 true |
| sort | str | 排序方式 | 可选 | desc: 默认排序<br />asc: 升序排序 |
| pn | num | 页码 | 可选 | 默认为 1 |
| ps | num | 每页数量 | 可选 | 默认为 20 |
| current_mid | num | 当前用户 mid | 可选 | 用于 `playback_position` 播放进度 |

**JSON回复:**

根对象:

| 字段    | 类型 | 内容     | 备注    |
| ------- | ---- | -------- | ------- |
| code    | num  | 返回值   | 0：成功 |
| message | str  | 错误信息 | 默认为0 |
| ttl     | num  | 1        |         |
| data    | obj  | 信息本体 |         |

`data`对象:

| 字段         | 类型 | 内容         | 备注 |
| ------------ | ---- | ------------ | ---- |
| aids         | array  | 视频 aid 列表 | 内容类型为 num |
| page         | obj  | 页码信息     |      |
| archives     | array  | 视频信息列表 |      |

`data`中的`page`对象:

| 字段 | 类型 | 内容     | 备注 |
| ---- | ---- | -------- | ---- |
| num  | num  | 当前页码 |      |
| size | num  | 每页数量 |      |
| total | num  | 视频总数 |      |

`data`中的`archives`数组:

基本同[获取视频合集信息](#获取视频合集信息)中的`archives`数组

**示例:**

获取 `mid=39665558` 的 `series_id=534501` 系列视频列表，每页 16 条，页码为 1，默认排序, 当前用户 mid 为 `1070915568`

```shell
curl -G "https://api.bilibili.com/x/series/archives" \
--data-urlencode "mid=39665558" \
--data-urlencode "series_id=534501" \
--data-urlencode "only_normal=true" \
--data-urlencode "sort=desc" \
--data-urlencode "pn=1" \
--data-urlencode "ps=16" \
--data-urlencode "current_mid=1070915568"
```

<details>
<summary>查看响应示例:</summary>

```jsonc
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "aids": [
      695029098,
      724599872,
      594794875,
      41565264,
      541053051,
      499696652,
      673071936,
      462891077,
      973903762,
      61692380,
      336713491,
      372661682,
      550840795,
      51839931,
      718592873,
      87838863
    ],
    "page": {
      "num": 1,
      "size": 16,
      "total": 25
    },
    "archives": [
      {
        "aid": 695029098,
        "title": "Python控制Minecraft教程（下）：自动建造",
        "pubdate": 1677321251,
        "ctime": 1677321251,
        "state": 0,
        "pic": "http://i1.hdslb.com/bfs/archive/187c0ba21b9ceba908a8760e83d49f466316824b.jpg",
        "duration": 275,
        "stat": {
          "view": 26555
        },
        "bvid": "BV1k24y1J78X",
        "ugc_pay": 0,
        "interactive_video": false,
        "enable_vt": 0,
        "vt_display": "",
        "playback_position": 0
      },
      {
        "aid": 724599872,
        "title": "『教程』一看就懂！Github基础教程",
        "pubdate": 1646740815,
        "ctime": 1646740824,
        "state": 0,
        "pic": "http://i0.hdslb.com/bfs/archive/1401ebe64e88deddf2b44ad6a740ff8872c2fda6.jpg",
        "duration": 296,
        "stat": {
          "view": 2412054
        },
        "bvid": "BV1hS4y1S7wL",
        "ugc_pay": 0,
        "interactive_video": false,
        "enable_vt": 0,
        "vt_display": "",
        "playback_position": 0
      },
      {
        "aid": 594794875,
        "title": "『教程』手把手教你流畅访问Github",
        "pubdate": 1647345613,
        "ctime": 1647336725,
        "state": 0,
        "pic": "http://i0.hdslb.com/bfs/archive/71cc640a84087cc99399449c00b93212fe78ee6f.jpg",
        "duration": 236,
        "stat": {
          "view": 910491
        },
        "bvid": "BV1Aq4y1q7hr",
        "ugc_pay": 0,
        "interactive_video": false,
        "enable_vt": 0,
        "vt_display": "",
        "playback_position": 0
      },
      {
        "aid": 41565264,
        "title": "《Python负基础到入门教程》专为\"非计算机专业和编程困难户\"制作（全13集 配音字幕重制版）",
        "pubdate": 1548316071,
        "ctime": 1548316072,
        "state": 0,
        "pic": "http://i0.hdslb.com/bfs/archive/5f4f6acfc00723c84f726d35add94b1d4b4ee482.jpg",
        "duration": 6395,
        "stat": {
          "view": 261286
        },
        "bvid": "BV1et411b76c",
        "ugc_pay": 0,
        "interactive_video": false,
        "enable_vt": 0,
        "vt_display": "",
        "playback_position": 0
      },
      {
        "aid": 541053051,
        "title": "『教程』文字频频乱码 这背后是显卡的扭曲还是规则的沦丧？",
        "pubdate": 1592996906,
        "ctime": 1592996907,
        "state": 0,
        "pic": "http://i0.hdslb.com/bfs/archive/8a3c3e3d01a91776763d34bba79add698869c82d.jpg",
        "duration": 381,
        "stat": {
          "view": 1184937
        },
        "bvid": "BV1ai4y1x7Uz",
        "ugc_pay": 0,
        "interactive_video": false,
        "enable_vt": 0,
        "vt_display": "",
        "playback_position": 0
      },
      {
        "aid": 499696652,
        "title": "『教程』VsCode五分钟上手教程 无一句废话",
        "pubdate": 1601207369,
        "ctime": 1601207369,
        "state": 0,
        "pic": "http://i1.hdslb.com/bfs/archive/cb78c07a090ed456bdcc217b0417670867772a29.jpg",
        "duration": 329,
        "stat": {
          "view": 417610
        },
        "bvid": "BV1bK411P767",
        "ugc_pay": 0,
        "interactive_video": false,
        "enable_vt": 0,
        "vt_display": "",
        "playback_position": 0
      },
      {
        "aid": 673071936,
        "title": "『教程』补码怎么来的？",
        "pubdate": 1620994814,
        "ctime": 1620986531,
        "state": 0,
        "pic": "http://i1.hdslb.com/bfs/archive/12c02599321a0b1386b29ddc4653ff7df9bd54b4.jpg",
        "duration": 445,
        "stat": {
          "view": 247578
        },
        "bvid": "BV16U4y1t7LD",
        "ugc_pay": 0,
        "interactive_video": false,
        "enable_vt": 0,
        "vt_display": "",
        "playback_position": 0
      },
      {
        "aid": 462891077,
        "title": "『教程』回调函数是个啥？",
        "pubdate": 1631274885,
        "ctime": 1631274885,
        "state": 0,
        "pic": "http://i0.hdslb.com/bfs/archive/df294350462558601f65b743ca25e2fdc01de628.jpg",
        "duration": 452,
        "stat": {
          "view": 213895
        },
        "bvid": "BV1vL411t78b",
        "ugc_pay": 0,
        "interactive_video": false,
        "enable_vt": 0,
        "vt_display": "",
        "playback_position": 98
      },
      {
        "aid": 973903762,
        "title": "『教程』堆栈是个啥？",
        "pubdate": 1625227205,
        "ctime": 1625227209,
        "state": 0,
        "pic": "http://i0.hdslb.com/bfs/archive/bf7956b6311ec0787fd52d1293bb4287d16b7e65.jpg",
        "duration": 370,
        "stat": {
          "view": 535174
        },
        "bvid": "BV1P44y1q7uL",
        "ugc_pay": 0,
        "interactive_video": false,
        "enable_vt": 0,
        "vt_display": "",
        "playback_position": 99
      },
      {
        "aid": 61692380,
        "title": "『教程』什么是递归？",
        "pubdate": 1564660818,
        "ctime": 1564637347,
        "state": 0,
        "pic": "http://i1.hdslb.com/bfs/archive/4af853671204b9bc631fada1934a3e86145a7d19.jpg",
        "duration": 658,
        "stat": {
          "view": 487397
        },
        "bvid": "BV194411f71o",
        "ugc_pay": 0,
        "interactive_video": false,
        "enable_vt": 0,
        "vt_display": "",
        "playback_position": 79
      },
      {
        "aid": 336713491,
        "title": "『教程』几分钟听懂迭代器",
        "pubdate": 1636713476,
        "ctime": 1636713476,
        "state": 0,
        "pic": "http://i0.hdslb.com/bfs/archive/6e255cce7c0303ab0211acd0f9d1ec5980ff03f7.jpg",
        "duration": 453,
        "stat": {
          "view": 110688
        },
        "bvid": "BV18R4y1t7Hg",
        "ugc_pay": 0,
        "interactive_video": false,
        "enable_vt": 0,
        "vt_display": "",
        "playback_position": 97
      },
      {
        "aid": 372661682,
        "title": "『教程』桌面精灵是怎样实现的？",
        "pubdate": 1604916264,
        "ctime": 1604916264,
        "state": 0,
        "pic": "http://i0.hdslb.com/bfs/archive/aaa8bb7b6fced63dd4792e28c1f78ba903fcc4cc.jpg",
        "duration": 326,
        "stat": {
          "view": 168775
        },
        "bvid": "BV1aZ4y1V7aa",
        "ugc_pay": 0,
        "interactive_video": false,
        "enable_vt": 0,
        "vt_display": "",
        "playback_position": 0
      },
      {
        "aid": 550840795,
        "title": "『教程』什么是钩子技术？",
        "pubdate": 1642744335,
        "ctime": 1642744335,
        "state": 0,
        "pic": "http://i0.hdslb.com/bfs/archive/380b1ff9726c673411cf916b03268c7fb16aff68.jpg",
        "duration": 240,
        "stat": {
          "view": 237568
        },
        "bvid": "BV1Cq4y1c7kK",
        "ugc_pay": 0,
        "interactive_video": false,
        "enable_vt": 0,
        "vt_display": "",
        "playback_position": 0
      },
      {
        "aid": 51839931,
        "title": "『教程』学编程前必知的8个电脑操作",
        "pubdate": 1557313623,
        "ctime": 1557313623,
        "state": 0,
        "pic": "http://i2.hdslb.com/bfs/archive/b54535ee3ff27006912d8013f2ea1667b2a50f80.jpg",
        "duration": 641,
        "stat": {
          "view": 139385
        },
        "bvid": "BV1t4411v78E",
        "ugc_pay": 0,
        "interactive_video": false,
        "enable_vt": 0,
        "vt_display": "",
        "playback_position": 0
      },
      {
        "aid": 718592873,
        "title": "『教程』这些常见编程单词到底该怎么读？看你能否读对？对✔❌✅☑",
        "pubdate": 1634300675,
        "ctime": 1634265090,
        "state": 0,
        "pic": "http://i1.hdslb.com/bfs/archive/de43275f44aea9f6d79c13ee68c6dcdfc9e5fc5e.jpg",
        "duration": 783,
        "stat": {
          "view": 81193
        },
        "bvid": "BV1JQ4y1D79p",
        "ugc_pay": 0,
        "interactive_video": true,
        "enable_vt": 0,
        "vt_display": "",
        "playback_position": 100
      },
      {
        "aid": 87838863,
        "title": "『教程』什么是环境变量",
        "pubdate": 1581258353,
        "ctime": 1581258353,
        "state": 0,
        "pic": "http://i0.hdslb.com/bfs/archive/331b2304d8262c4252f338599846761d6a5a8e0c.jpg",
        "duration": 353,
        "stat": {
          "view": 99797
        },
        "bvid": "BV1w741147G9",
        "ugc_pay": 0,
        "interactive_video": false,
        "enable_vt": 0,
        "vt_display": "",
        "playback_position": 0
      }
    ]
  }
}
```

</details>

## 根据关键词查找视频

> https://api.bilibili.com/x/series/recArchivesByKeywords

*请求方式：GET*

**URL参数:**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| mid    | num  | 用户 mid | 必要   |      |
| keywords | str | 关键词 | 必要   | 可为空, 即获取所有视频 |
| ps     | num  | 每页视频数 | 非必要 | 默认为 0, 留空为 20，最大值 100 |
| pn     | num  | 页码     | 非必要 | 留空为 1，为 0 则直接忽略 ps 参数获取所有 |
| orderby | str | 排序方式 | 非必要 | 最新发布: pubdate(默认)<br />最多播放: views<br />senddate: 最新发布 |
| series_id | num | 系列 ID | 非必要 | 用于过滤结果, 即若某一视频包含在系列内则不返回该视频 |

**JSON回复:**

根对象:

| 字段    | 类型 | 内容     | 备注       |
| ------- | ---- | -------- | ---------- |
| code    | num  | 返回值   | 0: 成功     |
| message | str  | 错误信息 | 默认为 0   |
| ttl     | num  | 1        |            |
| data    | obj  | 信息本体 |            |

`data` 对象:

| 字段      | 类型 | 内容         | 备注 |
| --------- | ---- | ------------ | ---- |
| archives  | arr  | 视频列表     |      |
| page      | obj  | 页码信息     |      |

`archives` 数组:

同[获取视频合集信息](#获取视频合集信息)中的`archives`数组

`page` 对象:

同[获取视频合集信息](#获取视频合集信息)中的`page`对象

**示例:**

查询用户 `mid=2` 关键词为 `幕` 的视频, 不限制每页视频数

```shell
curl -G "https://api.bilibili.com/x/series/recArchivesByKeywords" \
--data-urlencode "mid=2" \
--data-urlencode "keywords=幕" \
--data-urlencode "ps=0"
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "archives": [
      {
        "aid": 120040,
        "title": "高级语言弹幕测试",
        "pubdate": 1311616515,
        "ctime": 1497344798,
        "state": 0,
        "pic": "http://i1.hdslb.com/bfs/archive/55a553659799d8a6fcb645d8f1f9df418ad6fe4e.jpg",
        "duration": 911,
        "stat": {
          "view": 3584767
        },
        "bvid": "BV1Xx411c7cH",
        "ugc_pay": 0,
        "interactive_video": false,
        "enable_vt": 0,
        "vt_display": "",
        "playback_position": 0
      },
      {
        "aid": 2,
        "title": "字幕君交流场所",
        "pubdate": 1252458549,
        "ctime": 1497344798,
        "state": 0,
        "pic": "http://static.hdslb.com/images/transparent.gif",
        "duration": 2055,
        "stat": {
          "view": 4609291
        },
        "bvid": "BV1xx411c7mD",
        "ugc_pay": 0,
        "interactive_video": false,
        "enable_vt": 0,
        "vt_display": "",
        "playback_position": 0
      },
      {
        "aid": 271,
        "title": "弹幕测试专用",
        "pubdate": 1249886475,
        "ctime": 1497344798,
        "state": 0,
        "pic": "http://i1.hdslb.com/bfs/archive/a5980672f3d03e8292148748a63de99cd45679d3.jpg",
        "duration": 1213,
        "stat": {
          "view": 4857422
        },
        "bvid": "BV1xx411c7Xg",
        "ugc_pay": 0,
        "interactive_video": false,
        "enable_vt": 0,
        "vt_display": "",
        "playback_position": 0
      }
    ],
    "page": {
      "num": 1,
      "size": 0,
      "total": 3
    }
  }
}
```

</details>

## 创建视频列表

> https://api.bilibili.com/x/series/series/createAndAddArchives

*请求方式: POST*

认证方式: Cookie (SESSDATA)

**URL参数:**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ------ | ----| ---- | ------ | ---- |
| csrf | str | CSRF Token (即 Cookies 中 bili_jct ) | 必要 |     |

**正文参数 (multipart/form-data):**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| mid    | num  | 用户 mid | 必要   |      |
| name  | str  | 标题     | 必要   |      |
| keywords | str | 关键词 | 不必要   |      |
| description | str | 简介 | 不必要   |      |
| aids | str | 视频 aid 列表 | 不必要 | 以 `,` 分隔, 如 `2,112861,112861976201494,976201494` |

**JSON回复:**

根对象:

| 字段    | 类型 | 内容     | 备注       |
| ------- | ---- | -------- | ---------- |
| code    | num  | 返回值   | 0: 成功     |
| message | str  | 错误信息 | 默认为 0   |
| ttl     | num  | 1        |            |
| data    | obj  | 信息本体 |            |

`data` 对象:

| 字段      | 类型 | 内容         | 备注 |
| --------- | ---- | ------------ | ---- |
| series_id | num  | 视频列表 ID  |      |

**示例:**

为 `mid=616368979` 创建视频列表, 标题为 `NAME`, 视频为 `112861976201494`

```shell
curl -X POST --url "https://api.bilibili.com/x/series/series/createAndAddArchives" \
--url-query "csrf=xxxxxxxxxx" \
--data-urlencode "mid=616368979" \
--data-urlencode "name=NAME" \
--data-urlencode "aids=112861976201494" \
-b "SESSDATA=xxx" 
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "series_id": 4269765
  }
}
```

</details>

## 删除视频列表

> https://api.bilibili.com/x/series/series/delete

*请求方式: POST*

认证方式: Cookie (SESSDATA)

**URL参数:**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ------ | ----| ---- | ------ | ---- |
| csrf | str | CSRF Token (即 Cookies 中 bili_jct ) | 必要 |     |
| mid | num | 用户 mid | 必要 |      |
| series_id | num | 视频列表 ID | 必要 |      |
| aids | str | 空 | 不必要 |      |

**JSON回复:**

根对象:

| 字段    | 类型 | 内容     | 备注       |
| ------- | ---- | -------- | ---------- |
| code    | num  | 返回值   | 0: 成功     |
| message | str  | 错误信息 | 默认为 0   |
| ttl     | num  | 1        |            |
| data    | obj  | 空       |            |

**示例:**

为 `mid=616368979` 删除视频列表 `series_id=4269765`

```shell
curl -X POST --url "https://api.bilibili.com/x/series/series/delete" \
--url-query "csrf=xxxxxxxxxx" \
--url-query "series_id=4269765" \
--url-query "mid=616368979" \
-b "SESSDATA=xxx" 
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {}
}
```

</details>

## 删除视频列表中的稿件

> https://api.bilibili.com/x/series/series/delArchives

*请求方式: POST*

认证方式: Cookie (SESSDATA)

**URL参数:**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ------ | ----| ---- | ------ | ---- |
| csrf | str | CSRF Token (即 Cookies 中 bili_jct ) | 必要 |     |

**正文参数 (application/x-www-form-urlencoded):**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| mid    | num  | 用户 mid | 必要   |      |
| series_id | num | 视频列表 ID | 必要 |      |
| aids | str | 视频 aid 列表 | 必要 | 以 `,` 分隔, 如 `2,112861,112861976201494,976201494` |

**JSON回复:**

根对象:

| 字段    | 类型 | 内容     | 备注       |
| ------- | ---- | -------- | ---------- |
| code    | num  | 返回值   | 0: 成功     |
| message | str  | 错误信息 | 默认为 0   |
| ttl     | num  | 1        |            |
| data    | obj  | 空       |            |

**示例:**

为 `mid=616368979` 删除视频列表 `series_id=4269782` 中的 `112861976201494`

```shell
curl -X POST --url "https://api.bilibili.com/x/series/series/delArchives" \
--url-query "csrf=xxxxxxxxxx" \
--data-urlencode "mid=616368979" \
--data-urlencode "series_id=4269782" \
--data-urlencode "aids=112861976201494" \
-b "SESSDATA=xxx" 
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {}
}
```

</details>

## 添加稿件至视频列表

> https://api.bilibili.com/x/series/series/addArchives

*请求方式: POST*

认证方式: Cookie (SESSDATA)

**URL参数:**

同[删除视频列表中的稿件](#删除视频列表中的稿件)

**正文参数 (application/x-www-form-urlencoded):**

同[删除视频列表中的稿件](#删除视频列表中的稿件)

**JSON回复:**

同[删除视频列表中的稿件](#删除视频列表中的稿件)

**示例:**

为 `mid=616368979` 添加视频 `112861976201494` 至视频列表 `series_id=4269782`

```shell
curl -X POST --url "https://api.bilibili.com/x/series/series/addArchives" \
--url-query "csrf=xxxxxxxxxx" \
--data-urlencode "mid=616368979" \
--data-urlencode "series_id=4269782" \
--data-urlencode "aids=112861976201494" \
-b "SESSDATA=xxx" 
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {}
}
```

</details>

## 编辑视频列表信息

> https://api.bilibili.com/x/series/series/update

*请求方式: POST*

认证方式: Cookie (SESSDATA)

**URL参数:**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ------ | ----| ---- | ------ | ---- |
| csrf | str | CSRF Token (即 Cookies 中 bili_jct ) | 必要 |     |

**正文参数 (application/x-www-form-urlencoded):**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| mid    | num  | 用户 mid | 必要   |      |
| series_id | num | 视频列表 ID | 必要 |      |
| name  | str  | 标题     | 必要   |      |
| keywords | str | 关键词 | 不必要   |      |
| description | str | 简介 | 不必要   |      |
| add_aids | str | 视频 aid 列表 | 不必要 | 以 `,` 分隔 |
| del_aids | str | 视频 aid 列表 | 不必要 |     |
| aids | str | 空 | 不必要 |      |

**JSON回复:**

同[删除视频列表中的稿件](#删除视频列表中的稿件)

**示例:**

为 `mid=616368979` 编辑视频列表 `series_id=4269782`, 设置标题为 `NAME`, 设置简介为空, 设置关键词 `Telnet`, 添加视频 `112861976201494`

```shell
curl -X POST --url "https://api.bilibili.com/x/series/series/update" \
--url-query "csrf=xxxxxxxxxx" \
--data-urlencode "name=NAME" \
--data-urlencode "mid=616368979" \
--data-urlencode "series_id=4269782" \
--data-urlencode "keywords=Telnet" \
--data-urlencode "add_aids=112861976201494" \
-b "SESSDATA=xxx" 
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {}
}
```

</details>
