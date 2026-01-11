# 稍后再看

<img src="../../assets/img/toview.png" width="25" height="20"/>

## 视频添加稍后再看

> https://api.bilibili.com/x/v2/history/toview/add

*请求方式：POST*

认证方式：Cookie（SESSDATA）

最多添加100个视频

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                     | 必要性       | 备注               |
| ------ | ---- | ------------------------ | ------------ | ------------------ |
| aid    | num  | 稿件avid                 | 必要（可选） | avid与bvid任选一个 |
| bvid   | str  | 稿件bvid                 | 必要（可选） | avid与bvid任选一个 |
| csrf   | str  | CSRF Token（位于cookie） | 必要         |                    |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />90001：列表已满<br />90003：稿件已经被删除 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

添加视频`av41687433`/`BV1ht41147kj`到稍后再看列表

avid方式：

```shell
curl 'https://api.bilibili.com/x/v2/history/toview/add' \
--data-urlencode 'aid=41687433' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

bvid方式：

```shell
curl 'https://api.bilibili.com/x/v2/history/toview/add' \
--data-urlencode 'bvid=BV1ht41147kj' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

</details>

## 添加频道中所有视频到稍后再看

> https://space.bilibili.com/ajax/channel/addAllToView

*请求方式：POST*

认证方式：Cookie（SESSDATA）

鉴权方式：Cookie中`DedeUserID`及`DedeUserID__ckMd5`存在且不为0，referer为 `.bilibili.com`域名下

带有转义

超过容量后会截取容量之内的添加

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                     | 必要性 | 备注 |
| ------ | ---- | ------------------------ | ------ | ---- |
| cid    | num  | 目标频道id               | 必要   |      |
| mid    | num  | 目标频道所属的用户mid    | 必要   |      |
| csrf   | str  | CSRF Token（位于cookie） | 必要   |      |

**json回复：**

根对象：

| 字段   | 类型 | 内容     | 备注                        |
| ------ | ---- | -------- | --------------------------- |
| status | bool | 是否成功 | false：失败<br />true：成功 |
| data   | str  | 错误信息 |                             |

**示例：**

添加用户`mid=282994`下的频道`4693`中所有视频到稍后再看

```shell
curl 'https://space.bilibili.com/ajax/channel/addAllToView' \
--data-urlencode 'cid=4693' \
--data-urlencode 'mid=282994' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx;DedeUserID=1;DedeUserID__ckMd5=1;'
-e 'https://www.bilibili.com'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "status": true,
    "data": "操作成功"
}
```

</details>

## 获取稍后再看视频列表

> https://api.bilibili.com/x/v2/history/toview

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        |                                                   |
| data    | data | 数据本体 |                                                   |

`data`对象：

| 字段  | 类型   | 内容             | 备注 |
| ----- | ------ | ---------------- | ---- |
| count | num    | 稍后再看视频数   |      |
| list  | array | 稍后再看视频列表 |      |

`data`中的`list`数组：

| 项   | 类型 | 内容          | 备注                                           |
| ---- | ---- | ------------- | ---------------------------------------------- |
| 0    | obj  | 稍后再看1     |                                                |
| n    | obj  | 稍后再看(n+1) | 按照添加顺序排列<br />项数为总计稍后再看视频数 |
| ……   | obj  | ……            | ……                                             |
| 99   | obj  | 最后一项      |                                                |

`data`中的`list`数组中的对象：

| 字段                            | 类型    | 内容                           | 备注                                                         |
| ------------------------------- | ------- | ------------------------------ | ------------------------------------------------------------ |
| aid                             | num     | 稿件avid                       |                                                              |
| videos                          | num     | 稿件分P总数                    | 默认为1                                                      |
| tid                             | num     | 分区tid                        |                                                              |
| tname                           | str     | 子分区名称                     |                                                              |
| copyright                       | num     | 是否转载                       | 1：原创<br />2：转载<br />3：未填写                            |
| pic                             | str     | 稿件封面图片url                |                                                              |
| title                           | str     | 稿件标题                       |                                                              |
| pubdate                         | num     | 稿件发布时间                   | 时间戳                                                       |
| ctime                           | num     | 用户提交稿件的时间             | 时间戳                                                       |
| desc                            | str     | 视频简介                       |                                                              |
| state                           | num     | 视频状态                       | 略，见[获取视频详细信息（web端）](../video/info.md#获取视频详细信息（web端）)中的`state`备注 |
| ~~attribute~~（仅做历史性保留） | ~~num~~ | ~~稿件属性位配置~~             | 本字段已被删除~~略，见[获取视频详细信息（web端）](../video/info.md#获取视频详细信息（web端）)中的`attribute`备注~~ |
| duration                        | num     | 稿件总时长（所有分P）          | 单位为秒                                                     |
| rights                          | obj     | 稿件属性标志                   | 略，见[获取视频详细信息（web端）](../video/info.md#获取视频详细信息（web端）)中的`rights`对象 |
| owner                           | obj     | 稿件UP主信息                   | 略，见[获取视频详细信息（web端）](../video/info.md#获取视频详细信息（web端）)中的`owner`对象 |
| stat                            | obj     | 稿件状态数                     | 略，见[获取视频详细信息（web端）](../video/info.md#获取视频详细信息（web端）)中的`stat`对象 |
| dynamic                         | str     | 视频同步发布的的动态的文字内容 | 无为空                                                       |
| dimension                       | obj     | 稿件1P分辨率                   | 略，见[获取视频详细信息（web端）](../video/info.md#获取视频详细信息（web端）)中的`dimension`对象 |
| count                           | num     | 稿件分P数                      | 非投稿视频无此项                                             |
| cid                             | num     | 视频cid                        |                                                              |
| progress                        | num     | 观看进度时间                   | 单位为秒                                                     |
| add_at                          | num     | 添加时间                       | 时间戳                                                       |
| bvid                            | str     | 稿件bvid                       |                                                              |

**示例：**

获取稍后再看视频列表

```shell
curl 'https://api.bilibili.com/x/v2/history/toview' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
 "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "count": 25,
        "list": [
            {
                "aid": 200333024,
                "videos": 1,
                "tid": 95,
                "tname": "手机平板",
                "copyright": 1,
                "pic": "http://i1.hdslb.com/bfs/archive/a5e3072e670daec4c01a182aae91c1f85a48001e.jpg",
                "title": "【山新】疫情下，配音演员怎么开工录音？",
                "pubdate": 1586959137,
                "ctime": 1586959137,
                "desc": "疫情这段时间，配音演员们是怎么录音的呢=W=",
                "state": 0,
                "attribute": 16768,
                "duration": 218,
                "rights": {
                    "bp": 0,
                    "elec": 0,
                    "download": 0,
                    "movie": 0,
                    "pay": 0,
                    "hd5": 1,
                    "no_reprint": 1,
                    "autoplay": 1,
                    "ugc_pay": 0,
                    "is_cooperation": 0,
                    "ugc_pay_preview": 0,
                    "no_background": 0
                },
                "owner": {
                    "mid": 14082,
                    "name": "山新",
                    "face": "http://i0.hdslb.com/bfs/face/74c82caee6d9eb623e56161ea8ed6d68afabfeae.jpg"
                },
                "stat": {
                    "aid": 200333024,
                    "view": 361123,
                    "danmaku": 1792,
                    "reply": 1376,
                    "favorite": 7571,
                    "coin": 12129,
                    "share": 895,
                    "now_rank": 0,
                    "his_rank": 0,
                    "like": 54705,
                    "dislike": 0
                },
                "dynamic": "疫情这段时间，配音演员们是怎么录音的呢=W=",
                "dimension": {
                    "width": 3840,
                    "height": 2160,
                    "rotate": 0
                },
                "page": {
                    "cid": 178808041,
                    "page": 1,
                    "from": "vupload",
                    "part": "无标题",
                    "duration": 218,
                    "vid": "",
                    "weblink": "",
                    "dimension": {
                        "width": 3840,
                        "height": 2160,
                        "rotate": 0
                    }
                },
                "count": 1,
                "cid": 178808041,
                "progress": 32,
                "add_at": 1587041785,
                "bvid": "BV1Yz411B7n3"
            },
            {
                "aid": 710350011,
                "videos": 1,
                "tid": 124,
                "tname": "趣味科普人文",
                "copyright": 1,
                "pic": "http://i0.hdslb.com/bfs/archive/c5b7e7c07a4abf27029c5afb3ab65fee4475b9a9.jpg",
                "title": "不花一分钱建立自己的网站！给硬盘里的小姐姐换个新家！",
                "pubdate": 1586919626,
                "ctime": 1586898238,
                "desc": "制作视频不易，你的点赞是对我最大的支持！\nUP主的个人网站：https://amdradeonrin.github.io/MIKU/\n视频提到的文件在网站有下载\nGitHub上的网站源码：https://github.com/AMDRadeonRin/MIKU",
                "state": 0,
                "attribute": 16768,
                "duration": 169,
                "mission_id": 13106,
                "rights": {
                    "bp": 0,
                    "elec": 0,
                    "download": 0,
                    "movie": 0,
                    "pay": 0,
                    "hd5": 1,
                    "no_reprint": 1,
                    "autoplay": 1,
                    "ugc_pay": 0,
                    "is_cooperation": 0,
                    "ugc_pay_preview": 0,
                    "no_background": 0
                },
                "owner": {
                    "mid": 179757857,
                    "name": "GTX690战术核显卡导弹",
                    "face": "http://i2.hdslb.com/bfs/face/2504de8c1eeef22d91bbc45803f6b29afcbb0adf.jpg"
                },
                "stat": {
                    "aid": 710350011,
                    "view": 3293,
                    "danmaku": 37,
                    "reply": 117,
                    "favorite": 355,
                    "coin": 76,
                    "share": 11,
                    "now_rank": 0,
                    "his_rank": 0,
                    "like": 325,
                    "dislike": 0
                },
                "dynamic": "#网页制作##HTML##网页#给你们科普一下怎么弄网站吧，你们也可以考虑整一个XD",
                "dimension": {
                    "width": 1920,
                    "height": 1080,
                    "rotate": 0
                },
                "count": 1,
                "cid": 0,
                "progress": 0,
                "add_at": 1587012410,
                "bvid": "BV1LQ4y1T7Xh"
            },
            …………
        ]
    }
}
```

</details>

## 删除稍后再看视频

> https://api.bilibili.com/x/v2/history/toview/del

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                     | 必要性 | 备注                                                         |
| ------ | ---- | ------------------------ | ------ | ------------------------------------------------------------ |
| viewed | bool | 是否删除所有已观看的视频 | 非必要 | true：删除已观看视频<br />false：不删除已观看视频<br />默认为false |
| aid    | num  | 删除的目标记录的avid     | 非必要 |                                                              |
| csrf   | str  | CSRF Token（位于cookie） | 必要   |                                                              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

删除视频`av540580868`的稍后再看记录

```shell
curl 'https://api.bilibili.com/x/v2/history/toview/del' \
--data-urlencode 'aid=540580868' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

</details>

删除所有已观看的视频

```shell
curl 'https://api.bilibili.com/x/v2/history/toview/del' \
--data-urlencode 'viewed=true' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

</details>

## 清空稍后再看视频列表

> https://api.bilibili.com/x/v2/history/toview/clear

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                     | 必要性 | 备注 |
| ------ | ---- | ------------------------ | ------ | ---- |
| csrf   | num  | CSRF Token（位于cookie） | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                  |
| ------- | ---- | -------- | ----------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败 |
| message | str  | 错误信息 | 默认为0                                               |
| ttl     | num  | 1        |                                                       |

**示例：**

清空稍后再看视频列表

```shell
curl 'https://api.bilibili.com/x/v2/history/toview/clear' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

</details>
