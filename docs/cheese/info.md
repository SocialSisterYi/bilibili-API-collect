# 课程基本信息

课程ssid与epid和番剧不互通

课程avid与普通视频绝大部分api接口不能互通，少部分互通接口如下：

1. 获取视频简介
2. 查询视频状态数
3. 查询分P列表
4. 视频快照
5. 获取弹幕（使用cid）
6. 发送弹幕
7. 高能进度条（使用cid）

## 获取课程基本信息

> https://api.bilibili.com/pugv/view/web/season

*请求方式：GET*

认证方式：Cookie（SESSDATA）

鉴权方式：referer为 `.bilibili.com`域名下

**url参数：**

| 参数名    | 类型 | 内容     | 必要性       | 备注                                               |
| --------- | ---- | -------- | ------------ | -------------------------------------------------- |
| season_id | num  | 课程ssid | 必要（可选） | season_id与ep_id任选其一<br />**与番剧ssid不互通** |
| ep_id     | num  | 课程epid | 必要（可选） | season_id与ep_id任选其一<br />**与番剧epid不互通** |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                    |
| ------- | ---- | -------- | ----------------------- |
| code    | num  | 返回值   | 0：成功<br />-404：错误 |
| message | str  | 错误信息 | 默认为success           |
| data    | obj  | 信息本体 |                         |

`data`对象：

| 字段                | 类型   | 内容                          | 备注                                                         |
| ------------------- | ------ | ----------------------------- | ------------------------------------------------------------ |
| brief               | obj    | 课程概述信息                  |                                                              |
| coupon              | obj    | 优惠信息                      | 若无优惠则无此项                                             |
| cover               | str    | 课程封面url                   |                                                              |
| episode_page        | obj    | 课程分集信息                  |                                                              |
| episode_sort        | num    | 1                             | **作用尚不明确**                                             |
| episodes            | array | 课程分集列表                  |                                                              |
| faq                 | obj    | 常见问题信息1                 | 合并格式                                                     |
| faq1                | obj    | 常见问题信息2                 | 分离格式                                                     |
| payment             | obj    | 付费信息                      |                                                              |
| purchase_note       | obj    | 购买须知信息                  |                                                              |
| purchase_protocol   | obj    | 付费内容协议信息              |                                                              |
| release_bottom_info | str    | 底部更新状态文字              |                                                              |
| release_info        | str    | 更新状态文字+更新连载状态文字 |                                                              |
| release_info2       | str    | 更新连载状态文字              |                                                              |
| release_status      | str    | 更新状态文字                  |                                                              |
| season_id           | num    | 课程ssid                      | **与番剧ssid不互通**                                         |
| share_url           | str    | 页面url                       |                                                              |
| short_link          | str    | bilibili uri链接              |                                                              |
| stat                | obj    | 播放数信息                    |                                                              |
| status              | num    | 10                            | **作用尚不明确**                                             |
| subtitle            | str    | 课程简介信息                  |                                                              |
| title               | str    | 课程标题                      |                                                              |
| up_info             | obj    | UP主信息                      |                                                              |
| user_status         | obj    | 用户状态信息                  | **需要登录（SESSDATA）且referer为`https://www.bilibili.com`** |

`data`中的`brief`对象：

| 字段    | 类型   | 内容     | 备注 |
| ------- | ------ | -------- | ---- |
| content | str    | 空       |      |
| img     | array | 简介图片 |      |
| title   | str    | 课程概述 |      |
| type    | num    | 2        |      |

`brief`中的`img`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | obj  | 简介图片1       |      |
| n    | obj  | 简介图片（n+1） |      |
| ……   | obj  | ……              | ……   |

`img`数组中的对象：

| 字段         | 类型 | 内容        | 备注             |
| ------------ | ---- | ----------- | ---------------- |
| aspect_ratio | num  | ？？？      | **作用尚不明确** |
| url          | str  | 简介图片url |                  |

`data`中的`coupon`对象：

| 字段        | 类型 | 内容      | 备注                |
| ----------- | ---- | --------- | ------------------- |
| amount      | num  | 折扣乘数  |                     |
| expire_time | str  | 结束时间  | YYYY-MM-DD HH:MM:SS |
| start_time  | str  | 起始时间  | YYYY-MM-DD HH:MM:SS |
| status      | num  | ？？？    | **作用尚不明确**    |
| title       | str  | 优惠标题  |                     |
| token       | str  | 领取token |                     |

`data`中的`episode_page`对象：

| 字段  | 类型 | 内容     | 备注 |
| ----- | ---- | -------- | ---- |
| next  | bool | false    |      |
| num   | num  | 1        |      |
| size  | num  | 总计集数 |      |
| total | num  | 总计集数 |      |

`data`中的`episodes`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | obj  | 课程分集1       |      |
| n    | obj  | 课程分集（n+1） |      |
| ……   | obj  | ……              | ……   |

`episodes`数组中的对象：

| 字段           | 类型 | 内容             | 备注                                                         |
| -------------- | ---- | ---------------- | ------------------------------------------------------------ |
| aid            | num  | 课程分集avid     | **与普通稿件avid部分不互通**                                 |
| cid            | num  | 课程分集cid      | **与普通视频cid部分不互通**                                  |
| duration       | num  | 课程分集时间长度 | 单位为秒                                                     |
| from           | str  | pugv             |                                                              |
| id             | num  | 课程分集epid     | **与番剧epid不互通**                                         |
| index          | num  | 课程分集数       |                                                              |
| page           | num  | 1                |                                                              |
| play           | num  | 课程分集播放量   |                                                              |
| release_date   | num  | 课程分集发布时间 | 时间戳                                                       |
| status         | num  | 分集权限属性     | 1：可观看<br />2：不可观看                                   |
| title          | str  | 课程分集标题     |                                                              |
| watched        | bool | 是否观看该集     | **需要登录（SESSDATA）且referer为`https://www.bilibili.com`**<br />false：未观看<br />true：已观看 |
| watchedHistory | num  | 该集观看历史     | **需要登录（SESSDATA）且referer为`https://www.bilibili.com`** |

`data`中的`faq`对象：

| 字段    | 类型 | 内容            | 备注 |
| ------- | ---- | --------------- | ---- |
| content | str  | 常见问题信息    |      |
| link    | str  | 常见问题页面url |      |
| title   | str  | 常见问题        |      |

`data`中的`faq1`对象：

| 字段  | 类型   | 内容         | 备注 |
| ----- | ------ | ------------ | ---- |
| items | array | 常见问题列表 |      |
| title | str    | 常见问题     |      |

`faq1`中的`items`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | obj  | 常见问题1       |      |
| n    | obj  | 常见问题（n+1） |      |
| ……   | obj  | ……              | ……   |

`items`数组中的对象：

| 字段     | 类型 | 内容     | 备注 |
| -------- | ---- | -------- | ---- |
| answer   | str  | 回答信息 |      |
| question | str  | 问题信息 |      |

`data`中的`payment`对象：

| 字段            | 类型 | 内容                 | 备注                    |
| --------------- | ---- | -------------------- | ----------------------- |
| desc            | str  | 付费价格说明         |                         |
| discount_desc   | str  | 折扣说明信息         | 若无优惠则无此项        |
| discount_prefix | str  | 折扣类型前缀         | 若无优惠则无此项        |
| pay_shade       | str  | 观看所有视频付费说明 |                         |
| price           | num  | 课程价格             | 单位为B币（折扣后价格） |
| price_format    | str  | 课程价格             | 单位为B币折扣后价格）   |

`data`中的`purchase_note`对象：

| 字段    | 类型 | 内容                 | 备注 |
| ------- | ---- | -------------------- | ---- |
| content | str  | 购买须知信息文字内容 |      |
| link    | str  | 购买须知页面url      |      |
| title   | str  | 购买须知             |      |

`data`中的`purchase_protocol`对象：

| 字段  | 类型 | 内容                | 备注 |
| ----- | ---- | ------------------- | ---- |
| link  | str  | 付费内容协议页面url |      |
| title | str  | 付费内容协议        |      |

`data`中的`stat`对象：

| 字段      | 类型 | 内容           | 备注 |
| --------- | ---- | -------------- | ---- |
| play      | num  | 播放量         |      |
| play_desc | str  | 播放量文字信息 |      |

`data`中的`up_info`对象：

| 字段      | 类型 | 内容         | 备注                                                         |
| --------- | ---- | ------------ | ------------------------------------------------------------ |
| avatar    | str  | UP主头像url  |                                                              |
| brief     | str  | UP主备注     | 非个人签名                                                   |
| follower  | num  | UP主粉丝数   |                                                              |
| is_follow | num  | 是否关注UP主 | **需要登录（SESSDATA）且referer为`https://www.bilibili.com`**<br />0：未关注<br />1：已关注 |
| link      | str  | UP主空间url  |                                                              |
| mid       | num  | UP主uid      |                                                              |
| pendant   | obj  | ???          | **作用尚不明确**                                             |
| uname     | str  | UP主昵称     |                                                              |

`up_info`中的`pendant`对象：

| 字段     | 类型 | 内容 | 备注             |
| -------- | ---- | ---- | ---------------- |
| image    | str  | 空   | **作用尚不明确** |
| name     | str  | 空   | **作用尚不明确** |
| follower | num  | 0    | **作用尚不明确** |

`data`中的`user_status`对象：

| 字段          | 类型 | 内容     | 备注                     |
| ------------- | ---- | -------- | ------------------------ |
| favored       | num  | 是否收藏 | 0：未收藏<br />1：已收藏 |
| favored_count | num  | 1        | **作用尚不明确**         |
| payed         | num  | 是否购买 | 0：未购买<br />1：已购买 |
| progress      | obj  | 课程进度 | 未登录无此项             |

`user_status`中的`progress`对象：

| 字段          | 类型 | 内容               | 备注     |
| ------------- | ---- | ------------------ | -------- |
| last_ep_id    | num  | 最后观看的epid     |          |
| last_ep_index | str  | 最后观看的标题     |          |
| last_time     | num  | 最后观看的时间进度 | 单位为秒 |

**示例：**

查询课程`ss61`或分集`ep790`的信息

ssid方式：

```shell
curl -G 'https://api.bilibili.com/pugv/view/web/season' \
--data-urlencode 'season_id=61' \
-b 'SESSDATA=xxx' \
-e 'https://www.bilibili.com'
```

epid方式：

```shell
curl -G 'https://api.bilibili.com/pugv/view/web/season' \
--data-urlencode 'ep_id=790' \
-b 'SESSDATA=xxx' \
-e 'https://www.bilibili.com'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "data": {
        "brief": {
            "content": "",
            "img": [
                {
                    "aspect_ratio": 0.9375,
                    "url": "http://i0.hdslb.com/bfs/archive/29942f338ee570632838403a09871bad130cfe9a.jpg"
                },
                {
                    "aspect_ratio": 0.9375,
                    "url": "http://i0.hdslb.com/bfs/archive/913e5c37d836d7954ae9ca19da62a43ba5b34219.jpg"
                },
                {
                    "aspect_ratio": 1.3359375,
                    "url": "http://i0.hdslb.com/bfs/archive/a974555bd4a52f0aa865bd192c1e3401ed4cb0ad.jpg"
                },
                {
                    "aspect_ratio": 1.3359375,
                    "url": "http://i0.hdslb.com/bfs/archive/73cd7669b251db9d2b62b921bee49a137c3d65dc.jpg"
                },
                {
                    "aspect_ratio": 1.0625,
                    "url": "http://i0.hdslb.com/bfs/archive/b084ac8f6710c8eddbc58770a4254508de75eb02.jpg"
                },
                {
                    "aspect_ratio": 1.2890625,
                    "url": "http://i0.hdslb.com/bfs/archive/44e32c2cf64b894563829ce65bbef199220f4121.jpg"
                },
                {
                    "aspect_ratio": 1.3203125,
                    "url": "http://i0.hdslb.com/bfs/archive/90764fd095810565713b92606dc9cd0cfb25adae.jpg"
                },
                {
                    "aspect_ratio": 1.15234375,
                    "url": "http://i0.hdslb.com/bfs/archive/c35ca0ced0ad075a2c13b8fdc1e47b88573bce45.jpg"
                }
            ],
            "title": "课程概述",
            "type": 2
        },
        "coupon": {
            "amount": 0.66,
            "expire_time": "2020-06-30 00:00:00",
            "start_time": "2020-05-21 00:00:00",
            "status": 1,
            "title": "【上新限时6.6折】《唐盾：0-N4日语精讲》",
            "token": "B20200521135929161905873"
        },
        "cover": "http://i0.hdslb.com/bfs/archive/95d4de9e6691ccc2b18f087f5f654652dee3c01b.jpg",
        "episode_page": {
            "next": false,
            "num": 1,
            "size": 66,
            "total": 66
        },
        "episode_sort": 1,
        "episodes": [
            {
                "aid": 76973173,
                "cid": 132105993,
                "duration": 2223,
                "from": "pugv",
                "id": 790,
                "index": 1,
                "page": 1,
                "play": 2406406,
                "release_date": 1574762407,
                "status": 1,
                "title": "唐盾：一起从0基础学日语吧（含50音 词汇试听）",
                "watched": false,
                "watchedHistory": 0
            },
            {
                "aid": 77114885,
                "cid": 132110244,
                "duration": 3003,
                "from": "pugv",
                "id": 795,
                "index": 2,
                "page": 1,
                "play": 49100,
                "release_date": 1574766759,
                "status": 2,
                "title": "50音あ行假名/音调/送气与不送气音",
                "watched": false,
                "watchedHistory": 0
            },
            {
                "aid": 77120689,
                "cid": 131913553,
                "duration": 3253,
                "from": "pugv",
                "id": 797,
                "index": 3,
                "page": 1,
                "play": 49518,
                "release_date": 1574770029,
                "status": 2,
                "title": "50音图的か行、さ行、た行假名",
                "watched": false,
                "watchedHistory": 0
            },
            …………
        ],
        "faq": {
            "content": "Q：课程在什么时间更新？\nA：课程更新频次以页面前端展示为准。购买成功后，课程更新将通过账号动态提示，方便及时观看。\n\nQ：课程购买后有收看时间限制吗？\nA：购买后除不可抗力因素外，课程均可永久收看，请您放心购买。\n\nQ：原价购买课程后，如遇到优惠折扣，是否可以退还差价或重新购买？\nA：虚拟商品付款后无法返还，请您随时留意各类课程折扣信息，按需购买。\n\nQ：购买课程后是否可以加入老师的粉丝群或者用户群？\nA：如老师设置用户群，我们将邀您加入，但我们无法承诺所有老师均提供用户群服务，感谢理解。",
            "link": "http://m.bilibili.com",
            "title": "常见问题"
        },
        "faq1": {
            "items": [
                {
                    "answer": "课程更新频次以页面前端展示为准。购买成功后，课程更新将通过账号动态提示，方便及时观看。",
                    "question": "课程在什么时间更新？"
                },
                {
                    "answer": "购买后除不可抗力因素外，课程均可永久收看，请您放心购买。",
                    "question": "课程购买后有收看时间限制吗？"
                },
                {
                    "answer": "虚拟商品付款后无法返还，请您随时留意各类课程折扣信息，按需购买。",
                    "question": "原价购买课程后，如遇到优惠折扣，是否可以退还差价或重新购买？"
                },
                {
                    "answer": "如老师设置用户群，我们将邀您加入，但我们无法承诺所有老师均提供用户群服务，感谢理解。",
                    "question": "购买课程后是否可以加入老师的粉丝群或者用户群？"
                }
            ],
            "title": "常见问题"
        },
        "payment": {
            "desc": "券后 262.68 B币起/53期",
            "discount_desc": "262.68 B币",
            "discount_prefix": "券后",
            "pay_shade": "券后支付 262.68 B币即可观看所有视频",
            "price": 398.0,
            "price_format": "398"
        },
        "purchase_note": {
            "content": "1. 本内容为付费内容，购买成功后方可观看。<br/>2. 本内容为虚拟服务，已购买内容不支持退款，敬请谅解。<br/>3. 实际购买价格以页面展示的价格及订单结算页显示价格为准。<br/>4. 如您在购买付费内容时有任何疑问，可随时咨询在线客服。<br/>完整的购买协议，请点击阅读<a href=\"https://www.bilibili.com/blackboard/activity-y-SJTTYBp.html\" color=\"#0ba395\" target=\"_blank\">《bilibili付费内容购买协议》</a>",
            "link": "https://www.bilibili.com/blackboard/activity-y-SJTTYBp.html",
            "title": "购买须知"
        },
        "purchase_protocol": {
            "link": "https://www.bilibili.com/blackboard/activity-y-SJTTYBp.html",
            "title": "bilibili付费内容购买协议"
        },
        "release_bottom_info": "没有更多啦~",
        "release_info": "已完结，共53期",
        "release_info2": "共53期",
        "release_status": "已完结",
        "season_id": 61,
        "share_url": "https://m.bilibili.com/cheese/play/ss61",
        "short_link": "bilibili://cheese/season/61",
        "stat": {
            "play": 2878146,
            "play_desc": "287.8万播放"
        },
        "status": 10,
        "subtitle": "新东方名师唐盾的精品日语课，包含50音/N5/N4的词汇/语法/课文/练习精讲，让我们一起轻松学日语~",
        "title": "唐盾：0-N4日语精讲",
        "up_info": {
            "avatar": "http://i1.hdslb.com/bfs/face/564421428d1f74314ed50e16a8f570ad968828b0.jpg",
            "brief": "唐盾：前新东方日语名师，倾注日语教学、翻译14年。曾任新东方欧亚教育长沙中心总监。",
            "follower": 21333,
            "is_follow": 0,
            "link": "https://space.bilibili.com/19452605",
            "mid": 19452605,
            "pendant": {
                "image": "",
                "name": "",
                "pid": 0
            },
            "uname": "盾盾桑教你学日语"
        },
        "user_status": {
            "favored": 1,
            "favored_count": 1,
            "payed": 0,
            "progress": {
                "last_ep_id": 790,
                "last_ep_index": "唐盾：一起从0基础学日语吧（含50音 词汇试听）",
                "last_time": 1
            }
        }
    },
    "message": "success"
}
```

</details>

## 获取课程分集列表

> https://api.bilibili.com/pugv/view/web/ep/list 

*请求方式：GET*

认证方式：Cookie（SESSDATA）

鉴权方式：referer为 `.bilibili.com`域名下

**url参数：**

| 参数名    | 类型 | 内容     | 必要性 | 备注                 |
| --------- | ---- | -------- | ------ | -------------------- |
| season_id | num  | 课程ssid | 必要   | **与番剧ssid不互通** |
| ps        | num  | 每页项数 | 非必要 | 默认为50             |
| pn        | num  | 页码     | 非必要 | 默认为1              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                    |
| ------- | ---- | -------- | ----------------------- |
| code    | num  | 返回值   | 0：成功<br />-404：错误 |
| message | str  | 错误信息 | 默认为success           |
| data    | obj  | 信息本体 |                         |

`data`对象：

| 字段  | 类型   | 内容         | 备注 |
| ----- | ------ | ------------ | ---- |
| items | array | 课程分集列表 |      |
| page  | obj    | 列表分页信息 |      |

`data`中的`items`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | obj  | 课程分集1       |      |
| n    | obj  | 课程分集（n+1） |      |
| ……   | obj  | ……              | ……   |

`items`数组中的对象：

| 字段           | 类型 | 内容             | 备注                                                         |
| -------------- | ---- | ---------------- | ------------------------------------------------------------ |
| aid            | num  | 课程分集avid     | **与普通稿件avid部分不互通**                                 |
| cid            | num  | 课程分集cid      | **与普通视频cid部分不互通**                                  |
| duration       | num  | 课程分集时间长度 | 单位为秒                                                     |
| from           | str  | pugv             |                                                              |
| id             | num  | 课程分集epid     | **与番剧epid不互通**                                         |
| index          | num  | 课程分集数       |                                                              |
| page           | num  | 1                |                                                              |
| play           | num  | 课程分集播放量   |                                                              |
| release_date   | num  | 课程分集发布时间 | 时间戳                                                       |
| status         | num  | 分集权限属性     | 1：可观看<br />2：不可观看                                   |
| title          | str  | 课程分集标题     |                                                              |
| watched        | bool | 是否观看该集     | **需要登录（SESSDATA）且referer为`https://www.bilibili.com`**<br />false：未观看<br />true：已观看 |
| watchedHistory | num  | 该集观看历史     | **需要登录（SESSDATA）且referer为`https://www.bilibili.com`** |

`data`中的`page`对象：

| 字段  | 类型 | 内容           | 备注                                      |
| ----- | ---- | -------------- | ----------------------------------------- |
| next  | bool | 是否存在下一页 | false：不存在下一页<br />true：存在下一页 |
| num   | num  | 当前页码       |                                           |
| size  | num  | 每页项数       |                                           |
| total | num  | 总价项数       |                                           |

**示例：**

按照每页5项查询课程`ss61`的分集列表第1页

```shell
curl -G 'https://api.bilibili.com/pugv/view/web/ep/list' \
--data-urlencode 'season_id=61' \
--data-urlencode 'ps=5 ' \
--data-urlencode 'pn=1' \
-b 'SESSDATA=xxx' \
-e 'https://www.bilibili.com'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "data": {
        "items": [
            {
                "aid": 76973173,
                "cid": 132105993,
                "duration": 2223,
                "from": "pugv",
                "id": 790,
                "index": 1,
                "page": 1,
                "play": 2406951,
                "release_date": 1574762407,
                "status": 1,
                "title": "唐盾：一起从0基础学日语吧（含50音 词汇试听）",
                "watched": false,
                "watchedHistory": 0
            },
            {
                "aid": 77114885,
                "cid": 132110244,
                "duration": 3003,
                "from": "pugv",
                "id": 795,
                "index": 2,
                "page": 1,
                "play": 49106,
                "release_date": 1574766759,
                "status": 2,
                "title": "50音あ行假名/音调/送气与不送气音",
                "watched": false,
                "watchedHistory": 0
            },
            {
                "aid": 77120689,
                "cid": 131913553,
                "duration": 3253,
                "from": "pugv",
                "id": 797,
                "index": 3,
                "page": 1,
                "play": 49522,
                "release_date": 1574770029,
                "status": 2,
                "title": "50音图的か行、さ行、た行假名",
                "watched": false,
                "watchedHistory": 0
            },
            {
                "aid": 77606110,
                "cid": 132897199,
                "duration": 2823,
                "from": "pugv",
                "id": 806,
                "index": 4,
                "page": 1,
                "play": 35800,
                "release_date": 1575128696,
                "status": 2,
                "title": "50音图的な行、は行、ま行假名",
                "watched": false,
                "watchedHistory": 0
            },
            {
                "aid": 78015255,
                "cid": 133651764,
                "duration": 2165,
                "from": "pugv",
                "id": 812,
                "index": 5,
                "page": 1,
                "play": 25842,
                "release_date": 1575446218,
                "status": 2,
                "title": "や行、ら行、わ行假名、拨音",
                "watched": false,
                "watchedHistory": 0
            }
        ],
        "page": {
            "next": true,
            "num": 1,
            "size": 5,
            "total": 66
        }
    },
    "message": "success"
}
```

</details>
