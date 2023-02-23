# 歌曲基本信息

## 查询歌曲基本信息

> https://www.bilibili.com/audio/music-service-c/web/song/info

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| sid    | num  | 音频auid | 必要   |      |

**json回复：**

根对象：

| 字段 | 类型                          | 内容     | 备注                                                         |
| ---- | ----------------------------- | -------- | ------------------------------------------------------------ |
| code | num                           | 返回值   | 0：成功<br />72000000：参数错误<br />7201006：该音频不存在或已被下架<br />72010027：版权音乐重定向 |
| msg  | str                           | 错误信息 | 默认为success                                                |
| data | 正确时：obj<br />错误时：null | 信息本体 |                                                              |

`data`对象：

| 字段       | 类型   | 内容               | 备注               |
| ---------- | ------ | ------------------ | ------------------ |
| id         | num    | 音频auid           |                    |
| uid        | num    | UP主mid            |                    |
| uname      | str    | UP主昵称           |                    |
| author     | str    | 作者名             |                    |
| title      | str    | 歌曲标题           |                    |
| cover      | str    | 封面图片url        |                    |
| intro      | str    | 歌曲简介           |                    |
| lyric      | str    | lrc歌词url         |                    |
| crtype     | num    | 1                  | **作用尚不明确**   |
| duration   | num    | 歌曲时间长度       | 单位为秒           |
| passtime   | num    | 歌曲发布时间       | 时间戳             |
| curtime    | num    | 当前请求时间       | 时间戳             |
| aid        | num    | 关联稿件avid       | 无为0              |
| bvid       | str    | 关联稿件bvid       | 无为空             |
| cid        | num    | 关联视频cid        | 无为0              |
| msid       | num    | 0                  | **作用尚不明确**   |
| attr       | num    | 0                  | **作用尚不明确**   |
| limit      | num    | 0                  | **作用尚不明确**   |
| activityId | num    | 0                  | **作用尚不明确**   |
| limitdesc  | str    | 空                 | **作用尚不明确**   |
| ctime      | null   | -                  | **作用尚不明确**   |
| statistic  | obj    | 状态数             |                    |
| vipInfo    | obj    | UP主会员状态       |                    |
| collectIds | array | 歌曲所在的收藏夹mlid | 需要登录(SESSDATA) |
| coin_num   | num    | 投币数             |                    |

`data`中的`statistic`对象：

| 字段    | 类型 | 内容     | 备注 |
| ------- | ---- | -------- | ---- |
| sid     | num  | 音频auid |      |
| play    | num  | 播放次数 |      |
| collect | num  | 收藏数   |      |
| comment | num  | 评论数   |      |
| share   | num  | 分享数   |      |

`data`中的`vipInfo`对象：

| 字段         | 类型 | 内容         | 备注                                |
| ------------ | ---- | ------------ | ----------------------------------- |
| type         | num  | 会员类型     | 0：无<br />1：月会员<br />2：年会员 |
| status       | num  | 会员状态     | 0：无<br />1：有                    |
| due_date     | num  | 会员到期时间 | 时间戳 毫秒                         |
| vip_pay_type | num  | 会员开通状态 | 0：无<br />1：有                    |

`data`中的`collectIds`数组：

| 项   | 类型 | 内容                      | 备注 |
| ---- | ---- | ------------------------- | ---- |
| 0    | num  | 第1个所在的收藏夹mlid       |      |
| n    | num  | 第（n+1）个所在的收藏夹mlid |      |
| ……   | num  | ……                        | ……   |

**示例：**

查询音频`au13598`的基本信息

```shell
curl -G 'https://www.bilibili.com/audio/music-service-c/web/song/info' \
--data-urlencode 'sid=13598' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "id": 13598,
        "uid": 486183,
        "uname": "排骨教主",
        "author": "排骨教主",
        "title": "牵丝戏",
        "cover": "http://i0.hdslb.com/bfs/music/cf50d93b4dc08bfc6d3112041d6de0e56045ac5b.jpg",
        "intro": "自制 这次要特别感谢山东省京剧院的各位年轻的老师们对我戏腔发声的悉心指导\n关注排骨的微博@排骨节操收割机\n排骨QQ群456237456\n感谢@妄北没睡够（新浪微博） 画的视频图，太美了！！！！！\n",
        "lyric": "http://i0.hdslb.com/bfs/music/150587810313598.lrc",
        "crtype": 1,
        "duration": 239,
        "passtime": 1501640683,
        "curtime": 1590154258,
        "aid": 2554020,
        "bvid": "BV1us411S7E6",
        "cid": 3990196,
        "msid": 0,
        "attr": 0,
        "limit": 0,
        "activityId": 0,
        "limitdesc": "",
        "ctime": null,
        "statistic": {
            "sid": 13598,
            "play": 1028516,
            "collect": 30914,
            "comment": 523,
            "share": 384
        },
        "vipInfo": {
            "type": 2,
            "status": 1,
            "due_date": 1620316800000,
            "vip_pay_type": 0
        },
        "collectIds": [
            15967839
        ],
        "coin_num": 1777
    }
}
```

</details>

## 查询歌曲TAG

> https://www.bilibili.com/audio/music-service-c/web/tag/song

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| sid    | num  | 音频auid | 必要   |      |

**json回复：**

根对象：

| 字段 | 类型   | 内容     | 备注          |
| ---- | ------ | -------- | ------------- |
| code | num    | 返回值   | 0：成功       |
| msg  | str    | 错误信息 | 默认为success |
| data | array | TAG列表  | 无为空        |

`data`数组：

| 项   | 类型 | 内容     | 备注 |
| ---- | ---- | -------- | ---- |
| 0    | str  | TAG1     |      |
| n    | str  | TAG(n+1) |      |
| ……   | str  | ……       | ……   |

`data`数组中的对象：

| 字段    | 类型 | 内容       | 备注             |
| ------- | ---- | ---------- | ---------------- |
| type    | str  | song       | **作用尚不明确** |
| subtype | num  | ？？？     | **作用尚不明确** |
| key     | num  | TAG id？？ | **作用尚不明确** |
| info    | str  | TAG名      |                  |

**示例：**

查询音频`au15664`的TAG

```shell
curl -G 'https://www.bilibili.com/audio/music-service-c/web/tag/song' \
--data-urlencode 'sid=15664'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "msg": "success",
    "data": [
        {
            "type": "song",
            "subtype": 0,
            "key": 1,
            "info": "音乐"
        },
        {
            "type": "song",
            "subtype": 1,
            "key": 3,
            "info": "人声"
        },
        {
            "type": "song",
            "subtype": 2,
            "key": 2,
            "info": "翻唱"
        },
        {
            "type": "song",
            "subtype": 3,
            "key": 33,
            "info": "日语"
        },
        {
            "type": "song",
            "subtype": 5,
            "key": 41,
            "info": "网络歌曲"
        },
        {
            "type": "song",
            "subtype": 4,
            "key": 7,
            "info": "流行"
        }
    ]
}
```

</details>

## 查询歌曲创作成员列表

> https://www.bilibili.com/audio/music-service-c/web/member/song

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| sid    | num  | 音频auid | 必要   |      |

**json回复：**

根对象：

| 字段 | 类型   | 内容         | 备注          |
| ---- | ------ | ------------ | ------------- |
| code | num    | 返回值       | 0：成功       |
| msg  | str    | 错误信息     | 默认为success |
| data | array | 成员类型列表 | 无为空        |

`data`数组：

| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| 0    | str  | 成员类型1     |      |
| n    | str  | 成员类型(n+1) |      |
| ……   | str  | ……            | ……   |

`data`数组中的对象：

| 字段 | 类型   | 内容         | 备注                                                         |
| ---- | ------ | ------------ | ------------------------------------------------------------ |
| list | array | 成员列表     |                                                              |
| type | num    | 成员类型代码 | 1：歌手<br />2：作词<br />3：作曲<br />4：编曲<br />5：后期/混音<br />7：封面制作<br />8：音源<br />9：调音<br />10：演奏<br />11：乐器<br />127：UP主 |

`data`数组中的对象中的`list`数组：

| 项   | 类型 | 内容      | 备注 |
| ---- | ---- | --------- | ---- |
| 0    | str  | 成员1     |      |
| n    | str  | 成员(n+1) |      |
| ……   | str  | ……        | ……   |

`list`数组中的对象：

| 字段      | 类型 | 内容       | 备注             |
| --------- | ---- | ---------- | ---------------- |
| mid       | num  | 0          | **作用尚不明确** |
| name      | str  | 成员名     |                  |
| member_id | num  | 成员id？？ | **作用尚不明确** |

**示例：**

查询音频`au815861`的创作成员信息

```shell
curl -G 'https://www.bilibili.com/audio/music-service-c/web/member/song' \
--data-urlencode 'sid=815861'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "msg": "success",
    "data": [
        {
            "list": [
                {
                    "mid": 0,
                    "name": "匀子Cyrena",
                    "member_id": 164341
                }
            ],
            "type": 1
        },
        {
            "list": [
                {
                    "mid": 0,
                    "name": "圣月樱泪 ",
                    "member_id": 12349
                }
            ],
            "type": 2
        },
        {
            "list": [
                {
                    "mid": 0,
                    "name": "Days的Wing翼",
                    "member_id": 13777
                }
            ],
            "type": 3
        },
        {
            "list": [
                {
                    "mid": 0,
                    "name": "Days的Wing翼",
                    "member_id": 13777
                }
            ],
            "type": 4
        },
        {
            "list": [
                {
                    "mid": 0,
                    "name": "嘟比Dubi",
                    "member_id": 40902
                }
            ],
            "type": 5
        },
        {
            "list": [
                {
                    "mid": 0,
                    "name": "匀子Cyrena",
                    "member_id": 164222
                }
            ],
            "type": 127
        }
    ]
}
```

</details>

## 获取歌曲歌词

> https://www.bilibili.com/audio/music-service-c/web/song/lyric

*请求方式：GET*

同[查询歌曲基本信息](#查询歌曲基本信息)中的lrc歌词

**url参数：**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| sid    | num  | 音频auid | 必要   |      |

**json回复：**

根对象：

| 字段 | 类型                          | 内容            | 备注          |
| ---- | ----------------------------- | --------------- | ------------- |
| code | num                           | 返回值          | 0：成功       |
| msg  | str                           | 错误信息        | 默认为success |
| data | 正确时：str<br />错误时：null | lrc格式歌词信息 | 无为空        |

**示例：**

获取音频`au15664`的歌词信息

```shell
curl -G 'https://www.bilibili.com/audio/music-service-c/web/song/lyric' \
--data-urlencode 'sid=15664' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "msg": "success",
    "data": "[ar:萧忆情]\n\n[ti:威风堂堂]\n\n[00:26.64]引诱谁去摘下禁果\n\n[00:28.11]甜美滋味偷咬一口\n\n[00:30.03]触及到了最深处果核\n\n[00:31.82]身体开始颤抖\n\n[00:33.85]舌尖已濡湿双腿内侧\n\n[00:35.55]神经末梢警报响彻\n\n[00:37.39]自内而外逐渐变得火热\n\n[00:39.14]现在无须再遵守规则\n\n[00:42.14]还故作矜持说违心的话\n\n[00:45.84]为何动作不停下\n\n[00:47.85]停下来\n\n[00:48.39]已经快停不下来\n\n[00:49.42]还想索取更多\n\n[00:50.46]踩碎那PRIDE\n\n[00:51.41]忘记毫无意义的理智存在\n\n[00:53.27]让暧昧因子在四处的徘徊\n\n[00:55.19]给我收起你那\n\n[00:56.21]太虚伪的STYLE\n\n[00:57.01]直白赤裸的爱\n\n[00:58.00]最原始的DIVE\n\n[00:58.86]喘息中断续的声音叫期待\n\n[01:00.65]别掩饰此刻\n\n[01:01.50]那让人意乱情迷的SMILE\n\n[01:10.90]缓慢吐息迷惑双眼的雾\n\n[01:12.49]强制禁锢身下轻舔锁骨\n\n[01:14.23]就让封锁的心渐渐领悟\n\n[01:15.97]别继续装无辜\n\n[01:17.54]开始脱下的衬衫\n\n[01:19.08]最后的纽扣解开它\n\n[01:20.98]快感get\n\n[01:21.85]从此不顾一切\n\n[01:23.32]还在犹豫什么\n\n[01:24.78]Darling\n\n[01:26.54]站在自由世界的正中央\n\n[01:30.09]窥探你幻想的是否太过浪荡\n\n[01:33.99]太难耐\n\n[01:34.41]分分秒秒太难耐\n\n[01:35.61]床笫间的狩猎\n\n[01:36.63]充满野心的TRY\n\n[01:37.66]不承认口头上无理的摊牌\n\n[01:39.58]只想要在身体里深埋\n\n[01:41.34]现在由我掌控\n\n[01:42.36]随心所欲的LIFE\n\n[01:43.40]给你要的未来\n\n[01:44.41]永远不腐坏\n\n[01:45.32]所有的阴暗面统统藏起来\n\n[01:46.70]仅为你一人展现那能骄傲夸耀的MIND\n\n[01:49.90]将不安的情绪碾至粉末\n\n[01:53.14]抹在你胸口印上最鲜艳的红\n\n[02:21.06]别打算缩起来置身之外\n\n[02:22.64]无论何时\n\n[02:23.27]NO TIME\n\n[02:23.58]ALL RIGHT\n\n[02:24.21]打破一切的羞耻值\n\n[02:25.43]哪里奇怪\n\n[02:26.06]哪里奇怪\n\n[02:26.68]哪里奇怪\n\n[02:27.30]BURN BURN BURN\n\n[02:28.22]想要的就是那\n\n[02:29.17]啊 没错\n\n[02:29.87]再给我更多的触摸\n\n[02:31.62]顺位交换贴近肌肤的DANCE\n\n[02:33.34]好吧 肆无忌惮\n\n[02:34.98]停下来\n\n[02:35.35]已经快停不下来\n\n[02:36.50]还想索取更多\n\n[02:37.68]踩碎那PRIDE\n\n[02:38.38]忘记毫无意义的理智存在\n\n[02:40.27]让暧昧因子在四处的徘徊\n\n[02:42.11]给我收起你那\n\n[02:43.16]太虚伪的STYLE\n\n[02:44.00]直白赤裸的爱\n\n[02:45.06]最原始的DIVE\n\n[02:45.90]喘息中断续的声音叫期待\n\n[02:47.76]别掩饰此刻那让人意乱情迷的SMILE\n\n[02:50.64]将不安的情绪碾至粉末\n\n[02:54.09]抹在你胸口印上最鲜艳的红\n\n[02:58.35]抛弃所有只想拥有此刻\n\n"
}
```

</details>
