# 番剧或影视时间线

## 获取番剧或影视时间线

> https://api.bilibili.com/pgc/web/timeline
*请求方式：GET*

鉴权方式：Cookie（SESSDATA）或APP

**url参数：**

| 参数名   | 类型 | 内容         | 必要性 | 备注                          |
| -------- | ---- | ------------ | ------ | ----------------------------- |
| types    | str  | 类别         | 必要   | 1：`番剧`<br />3：`电影`<br />4：`国创` |
| before   | num  | 开始于前几日 | 必要   | ∈N∩[0,7]                      |
| after    | num  | 结束于后几日 | 必要   | ∈N∩[0,7]                      |

**json回复：**

根对象：

| 字段    | 类型  | 内容     | 备注                                        |
| ------- | ----- | -------- | ------------------------------------------- |
| code    | num   | 返回值   | 0：成功<br />-400：请求错误<br />-404：错误 |
| message | str   | 错误信息 | 默认为success                               |
| result  | array | 信息本体 |                                             |

`result`数组：

| 项   | 类型 | 内容                        | 备注 |
| ---- | ---- | --------------------------- | ---- |
| 0    | obj  | `before`天前信息            |      |
| n    | obj  | 从`before`天前开始第n天信息 |      |
| ……   | obj  | ……                          |      |

`result`数组中的对象：

| 字段        | 类型  | 内容           | 备注              |
| ----------- | ----- | -------------- | ----------------- |
| date        | str   | 当日日期       |                   |
| date_ts     | num   | 当日日期时间戳 |                   |
| day_of_week | num   | 一周中第几天   | ∈N∩[1,7]          |
| episodes    | array | 剧集列表       |                   |
| is_today    | num   | 是否今日       |                   |

`result`数组中的对象中的`episodes`数组：

| 项   | 类型 | 内容        | 备注 |
| ---- | ---- | ----------- | ---- |
| 0    | obj  | 剧集1       |      |
| n    | obj  | 剧集（n+1） |      |
| ……   | obj  | ……          |      |

`episodes`数组中的对象：

| 字段        | 类型 | 内容           | 备注            |
| ----------- | ---- | -------------- | --------------- |
| cover       | str  | 封面图url      |                 |
| delay       | num  | 是否推迟       |                 |
| delay_id    | num  | 推迟一话epid   |                 |
| delay_index | str  | 推迟一话名称   |                 |
| delay_reason | str | 推迟原因       |                 |
| ep_cover    | str  | 最新一话图url  |                 |
| episode_id  | num  | 最新一话的epid |                 |
| pub_index   | str  | 最新一话名称   |                 |
| pub_time    | str  | 发布时间       |                 |
| pub_ts      | num  | 发布时间戳     |                 |
| published   | num  | 是否已发布     |                 |
| follows     | str  | -              |                 |
| plays       | str  | -              |                 |
| season_id   | num  | 剧集ssid       |                 |
| square_cover | str | 缩略图url      |                 |
| title       | str  | 剧集标题       |                 |

**示例：**

查询从`3`天前到`7`天后的`番剧`时间轴

```shell
curl -G 'https://api.bilibili.com/pgc/web/timeline' \
--data-urlencode 'types=1' \
--data-urlencode 'before=3' \
--data-urlencode 'after=7' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "success",
    "result": [
        {
            "date": "5-15",
            "date_ts": 1652544000,
            "day_of_week": 7,
            "episodes": [
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/9918f6e67c26d6bd1ddad8dab70bcc7af3bfae9b.png",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/archive/0067a09911e2fa252a3ef5126d8dc5392189dd8a.jpg",
                    "episode_id": 508403,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第3话",
                    "pub_time": "01:30",
                    "pub_ts": 1652549400,
                    "published": 1,
                    "season_id": 41416,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/926fd09277605204c2f7c94b322de3156ef9da52.png",
                    "title": "式守同学不只可爱而已"
                },
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/3a9815ca239735c51fc7daf2399c3721bbe00160.png",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/archive/56e8d4b13dac855c51060dcda286be049fde4a46.png",
                    "episode_id": 466766,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第6话",
                    "pub_time": "11:00",
                    "pub_ts": 1652583600,
                    "published": 1,
                    "season_id": 41005,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/b3dd92da1ca35758f329fa5aa649991b118a98ca.png",
                    "title": "鬼灭之刃 无限列车篇 中配版"
                },
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/71d54cae830d32a5af776dcc46632146fbdba868.jpg",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/archive/00c1dff8457183671f0402e0a2826313a1994a9b.jpg",
                    "episode_id": 480434,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第240话",
                    "pub_time": "17:30",
                    "pub_ts": 1652607000,
                    "published": 1,
                    "season_id": 5978,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/3121473d5dd03a9bcccb8490034207e724e731b3.jpg",
                    "title": "博人传 火影忍者新时代"
                },
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/91e75030be41d67b9f19b96bb512b0c98ae781bd.png",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/archive/e701f39cef52e6b0737e3463faf7cb0cee61e935.jpg",
                    "episode_id": 510647,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第4话",
                    "pub_time": "20:00",
                    "pub_ts": 1652616000,
                    "published": 1,
                    "season_id": 41557,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/4329384cba4ab0390eae1a84a719e4649bf61cfb.png",
                    "title": "这个治疗有点烦"
                },
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/c9723d8c77d881a8debba2852d580e97826b43d0.png",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/archive/2a01ab590fd8b1331096b94cc6fc09dbdad1bbec.png",
                    "episode_id": 478918,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第7话",
                    "pub_time": "21:00",
                    "pub_ts": 1652619600,
                    "published": 1,
                    "season_id": 41591,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/1ffa24e100583c3aa96812dea680943291c5c384.jpg",
                    "title": "恋爱游戏世界对路人角色很不友好"
                }
            ],
            "is_today": 0
        },
        {
            "date": "5-16",
            "date_ts": 1652630400,
            "day_of_week": 1,
            "episodes": [
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/e468c854628b97b5373baaf4c43e1346a9806baa.png",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/archive/219161297558531d2475da73e863dc237e83baa1.png",
                    "episode_id": 511342,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第1话",
                    "pub_time": "20:00",
                    "pub_ts": 1652702400,
                    "published": 1,
                    "season_id": 41419,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/75a291010c128ce2de17267fd2a4842d19898236.png",
                    "title": "魔法使黎明期"
                }
            ],
            "is_today": 0
        },
        {
            "date": "5-17",
            "date_ts": 1652716800,
            "day_of_week": 2,
            "episodes": [
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/4e6c505b1b1631c542ea76c3da1ce08bb43faad6.jpg",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/archive/bf37e15c52889a7a9dca16346354bb7c6663c899.png",
                    "episode_id": 510132,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第146话",
                    "pub_time": "18:00",
                    "pub_ts": 1652781600,
                    "published": 1,
                    "season_id": 23841,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/5c2f289eac0ec49bc5e6b9483f4191c42ffa2254.jpg",
                    "title": "美妙☆频道"
                },
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/9eef1df9ab157be52d2c4d70d3500442f00cafc3.png",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/archive/d9831c3170bcbba38edc2204ee5059f583823913.png",
                    "episode_id": 509043,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第11话",
                    "pub_time": "18:00",
                    "pub_ts": 1652781600,
                    "published": 1,
                    "season_id": 38950,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/13fd7c96659a20c61409e155a2a913a59348d122.png",
                    "title": "魔法纪录 魔法少女小圆外传 第二季"
                }
            ],
            "is_today": 0
        },
        {
            "date": "5-18",
            "date_ts": 1652803200,
            "day_of_week": 3,
            "episodes": [
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/fba0229f1a6eec6ed692b7ae91c634d5cbde0727.png",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/bangumi/image/0ebefe529449ff98d544395d1576402bb0d0ae5b.png",
                    "episode_id": 510498,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第7话",
                    "pub_time": "21:00",
                    "pub_ts": 1652878800,
                    "published": 0,
                    "season_id": 41413,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/247f8326019e035338529306e94baea3336c43b4.png",
                    "title": "盾之勇者成名录 第二季"
                }
            ],
            "is_today": 1
        },
        {
            "date": "5-19",
            "date_ts": 1652889600,
            "day_of_week": 4,
            "episodes": [
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/99277ce3f41d1cb4dcda9f6010ebe9c9e6d345e5.jpg",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/bangumi/image/c989d496e3a075e8bc134b0d4d53d6ca5c2ae634.jpg",
                    "episode_id": 510760,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第2话",
                    "pub_time": "12:00",
                    "pub_ts": 1652932800,
                    "published": 0,
                    "season_id": 41417,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/ef45828cb99309169e95d1bf54ec833d7968bf22.png",
                    "title": "夏日重现"
                },
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/1cd26af47cf9d9ca045ec36f56ce14a66867438d.png",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/bangumi/image/3dc8d348937528779b7ad9a3070d37276518080f.png",
                    "episode_id": 399655,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第50话",
                    "pub_time": "18:00",
                    "pub_ts": 1652954400,
                    "published": 0,
                    "season_id": 38353,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/4bd7b0a4c270ce62ca2adf3e18487a96e4fde92e.png",
                    "title": "通灵王"
                },
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/5f5b16bc8edd1310fbf0ac8bce04a11144dc858e.png",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/bangumi/image/aed167a32445ed294ea75ed674442c766d56cb2a.png",
                    "episode_id": 511494,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第4话",
                    "pub_time": "23:00",
                    "pub_ts": 1652972400,
                    "published": 0,
                    "season_id": 41422,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/924c550415ccdd142145dbf102bd81fcbb018ffd.png",
                    "title": "骸骨骑士大人奇幻世界冒险中"
                }
            ],
            "is_today": 0
        },
        {
            "date": "5-20",
            "date_ts": 1652976000,
            "day_of_week": 5,
            "episodes": [
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/a29f3b00a94d1b4a029054f72963cc10d98bae99.jpg",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/bangumi/image/4b9b98677b039b9126614f5a5259aa1484cea227.jpg",
                    "episode_id": 510757,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第2话",
                    "pub_time": "01:28",
                    "pub_ts": 1652981280,
                    "published": 0,
                    "season_id": 41520,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/2a0ca7be587039eef380f802f8ae71bd21d2ea2c.png",
                    "title": "街角魔族 第二季"
                },
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/ecb52c79def9f5a6099c5a0770f56e20479fb008.jpg",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/bangumi/image/36d3079e1b24395b07f9f95128adc9568459c3e5.png",
                    "episode_id": 478238,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第17话",
                    "pub_time": "02:25",
                    "pub_ts": 1652984700,
                    "published": 0,
                    "season_id": 40873,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/13f437706d3f27dee7566a5e489928605663e40f.png",
                    "title": "川尻小玉的懒散生活"
                },
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/a7517ca25c5c7a132a16f589e3a3c4d9f49af196.png",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/bangumi/image/17f34f6c51b8b9371af1998f0612d51f0ba03df2.png",
                    "episode_id": 508842,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第6话",
                    "pub_time": "07:00",
                    "pub_ts": 1653001200,
                    "published": 0,
                    "season_id": 41534,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/3267da68f7f832ccfc7eaa77c6ab3fb806d2de98.png",
                    "title": "银河英雄传说：全新命题 激战"
                },
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/fecb68763f24d371167389abedf05742b0bf024f.png",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/bangumi/image/f4116e5dcc44d6104cd72d9e0e833cde3959a835.png",
                    "episode_id": 476164,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第32话",
                    "pub_time": "18:25",
                    "pub_ts": 1653042300,
                    "published": 0,
                    "season_id": 38366,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/56b8e4369871fc0c55bfa9df3f3f8002d40f0691.png",
                    "title": "妖怪手表"
                },
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/81c9dc929e6071a2d42f1b5a207bbcef4a1aead7.png",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/bangumi/image/7c62ad9f559ee6b0fafc1c08d990636c21c4fa8d.png",
                    "episode_id": 510653,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第7话",
                    "pub_time": "21:30",
                    "pub_ts": 1653053400,
                    "published": 0,
                    "season_id": 41432,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/930ae7ff644dc31ada9abcb3ea30fee5fbc6f397.png",
                    "title": "约会大作战 第四季"
                },
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/d464543dd6720efd43e5487acee74b646423b4d1.jpg",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/bangumi/image/ca7a19d51feb54162d8f286af416aa5a804e72c4.png",
                    "episode_id": 511497,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第7话",
                    "pub_time": "22:00",
                    "pub_ts": 1653055200,
                    "published": 0,
                    "season_id": 41418,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/ab50117450baffba62c71c80052ecbad1842a1f3.png",
                    "title": "恋爱要在世界征服后"
                }
            ],
            "is_today": 0
        },
        {
            "date": "5-21",
            "date_ts": 1653062400,
            "day_of_week": 6,
            "episodes": [
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/68aee547fc85b1eab8be3d5c7e946276e4252b79.png",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/bangumi/image/75583ce830522c6fd391cd6ffac31e3ab96db50e.png",
                    "episode_id": 510568,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第8话",
                    "pub_time": "00:30",
                    "pub_ts": 1653064200,
                    "published": 0,
                    "season_id": 39725,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/a4fa3f4ecaa4efc883aa1ef2ca7ed736edb38b8c.png",
                    "title": "理科生坠入情网，故尝试证明。 第二季"
                },
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/f711a34e0f18293ba5068fd85d8de891bb01c2be.jpg",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/bangumi/image/aa3e0fc7ecb422c7c8ed107267befaa18f6dcf89.png",
                    "episode_id": 510935,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第8话",
                    "pub_time": "00:30",
                    "pub_ts": 1653064200,
                    "published": 0,
                    "season_id": 41506,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/d2dea82606b8dd0ee7934c62dbc7016b0a17255f.png",
                    "title": "处刑少女的生存之道"
                },
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/91ec1f4bc4af307dbfbd68c9ba6d838b27adee0f.png",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/bangumi/image/6d9499e4e5453e5e353939980524102c3b707edb.png",
                    "episode_id": 477129,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第8话",
                    "pub_time": "01:25",
                    "pub_ts": 1653067500,
                    "published": 0,
                    "season_id": 39180,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/f23cf19d1d6068e83edfd6b3d207ce692ef58ef3.png",
                    "title": "测不准的阿波连同学"
                },
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/bad807ac5a8d4094ead26c08ec2d9b97dbb8c4a1.png",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/bangumi/image/8e563a29a9fb6b91df791a12eb5f869d038fc1e9.png",
                    "episode_id": 510677,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第2话",
                    "pub_time": "02:00",
                    "pub_ts": 1653069600,
                    "published": 0,
                    "season_id": 41533,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/4ef341fa95646a7c2549e08ba00358b411fba0ee.png",
                    "title": "舞动不止"
                },
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/4ab5cf1efbd1c5883b8f0580cb0304f5452c4665.png",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/bangumi/image/8ea1f90444d04a0b989584df9f18e59a824b0e90.png",
                    "episode_id": 341403,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第71话",
                    "pub_time": "09:30",
                    "pub_ts": 1653096600,
                    "published": 0,
                    "season_id": 34425,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/ae36d43ebe7ea7176d18bab794de3d8930284feb.png",
                    "title": "勇者斗恶龙 达伊的大冒险"
                },
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/23f393513ab8fdfbb351aa80e8b7423e7361ad98.png",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/bangumi/image/d470a1bf53c96210f2238024dc1947f52cb58f3a.png",
                    "episode_id": 510681,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第2话",
                    "pub_time": "18:00",
                    "pub_ts": 1653127200,
                    "published": 0,
                    "season_id": 41535,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/f3f69f8747e8464ba46b9bbe24678966809c8021.png",
                    "title": "Love All Play热血羽毛球"
                },
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/38e2a273f528fd01c34f1fc4df0f69c64487efad.png",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/bangumi/image/6c108526eade13d04882b803f1d1e0dfe2a1886e.png",
                    "episode_id": 459329,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第1101话",
                    "pub_time": "19:30",
                    "pub_ts": 1653132600,
                    "published": 0,
                    "season_id": 33378,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/ecc9a64f3f43eb00ee2bf1549b6ab76182cf5f8b.png",
                    "title": "名侦探柯南"
                },
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/f641f81aa1933d73c91d5ef76b525acbcdbcf3e7.png",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/bangumi/image/c7ccf71fcf65b4e5655403b01a7af3529d2891e8.png",
                    "episode_id": 510754,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第10话",
                    "pub_time": "20:00",
                    "pub_ts": 1653134400,
                    "published": 0,
                    "season_id": 39433,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/1b4cc42a3909ad2d03563d3163b105c6cad80d20.png",
                    "title": "鬼灭之刃 游郭篇"
                }
            ],
            "is_today": 0
        },
        {
            "date": "5-22",
            "date_ts": 1653148800,
            "day_of_week": 7,
            "episodes": [
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/3a9815ca239735c51fc7daf2399c3721bbe00160.png",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/bangumi/image/30908825b7c8076b9d7b58d8cd949a87f48866e6.png",
                    "episode_id": 466767,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第7话",
                    "pub_time": "11:00",
                    "pub_ts": 1653188400,
                    "published": 0,
                    "season_id": 41005,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/b3dd92da1ca35758f329fa5aa649991b118a98ca.png",
                    "title": "鬼灭之刃 无限列车篇 中配版"
                },
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/71d54cae830d32a5af776dcc46632146fbdba868.jpg",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/bangumi/image/3baf5335e3f1df882b54d69c0c6c9ffa76069eef.png",
                    "episode_id": 480435,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第241话",
                    "pub_time": "17:30",
                    "pub_ts": 1653211800,
                    "published": 0,
                    "season_id": 5978,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/3121473d5dd03a9bcccb8490034207e724e731b3.jpg",
                    "title": "博人传 火影忍者新时代"
                },
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/91e75030be41d67b9f19b96bb512b0c98ae781bd.png",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/bangumi/image/cff6617c1c7e28f8cd9db3d33d5366a5029e3aa9.png",
                    "episode_id": 510648,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第5话",
                    "pub_time": "20:00",
                    "pub_ts": 1653220800,
                    "published": 0,
                    "season_id": 41557,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/4329384cba4ab0390eae1a84a719e4649bf61cfb.png",
                    "title": "这个治疗有点烦"
                },
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/c9723d8c77d881a8debba2852d580e97826b43d0.png",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/bangumi/image/c91b2b96c272eb28aa3dd74aa58fc272fc62d577.png",
                    "episode_id": 478919,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第8话",
                    "pub_time": "21:00",
                    "pub_ts": 1653224400,
                    "published": 0,
                    "season_id": 41591,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/1ffa24e100583c3aa96812dea680943291c5c384.jpg",
                    "title": "恋爱游戏世界对路人角色很不友好"
                }
            ],
            "is_today": 0
        },
        {
            "date": "5-23",
            "date_ts": 1653235200,
            "day_of_week": 1,
            "episodes": [
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/e468c854628b97b5373baaf4c43e1346a9806baa.png",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/bangumi/image/26f87214a2481680a93bfda294ac080c0b336a40.png",
                    "episode_id": 511343,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第2话",
                    "pub_time": "20:00",
                    "pub_ts": 1653307200,
                    "published": 0,
                    "season_id": 41419,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/75a291010c128ce2de17267fd2a4842d19898236.png",
                    "title": "魔法使黎明期"
                }
            ],
            "is_today": 0
        },
        {
            "date": "5-24",
            "date_ts": 1653321600,
            "day_of_week": 2,
            "episodes": [
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/4e6c505b1b1631c542ea76c3da1ce08bb43faad6.jpg",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/bangumi/image/4e6c505b1b1631c542ea76c3da1ce08bb43faad6.jpg",
                    "episode_id": 510133,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第147话",
                    "pub_time": "18:00",
                    "pub_ts": 1653386400,
                    "published": 0,
                    "season_id": 23841,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/5c2f289eac0ec49bc5e6b9483f4191c42ffa2254.jpg",
                    "title": "美妙☆频道"
                },
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/9eef1df9ab157be52d2c4d70d3500442f00cafc3.png",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/bangumi/image/a651c55bb430cdea19d5f4253969d1f7b83567c7.png",
                    "episode_id": 509044,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第12话",
                    "pub_time": "18:00",
                    "pub_ts": 1653386400,
                    "published": 0,
                    "season_id": 38950,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/13fd7c96659a20c61409e155a2a913a59348d122.png",
                    "title": "魔法纪录 魔法少女小圆外传 第二季"
                }
            ],
            "is_today": 0
        },
        {
            "date": "5-25",
            "date_ts": 1653408000,
            "day_of_week": 3,
            "episodes": [
                {
                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/fba0229f1a6eec6ed692b7ae91c634d5cbde0727.png",
                    "delay": 0,
                    "delay_id": 0,
                    "delay_index": "",
                    "delay_reason": "",
                    "ep_cover": "http://i0.hdslb.com/bfs/bangumi/image/0ebefe529449ff98d544395d1576402bb0d0ae5b.png",
                    "episode_id": 510499,
                    "follows": "-",
                    "plays": "-",
                    "pub_index": "第8话",
                    "pub_time": "21:00",
                    "pub_ts": 1653483600,
                    "published": 0,
                    "season_id": 41413,
                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/247f8326019e035338529306e94baea3336c43b4.png",
                    "title": "盾之勇者成名录 第二季"
                }
            ],
            "is_today": 0
        }
    ]
}
```

</details>