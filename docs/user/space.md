# 用户空间相关

## 主页

<img src="../../assets/img/home.svg" width="100" height="100" />

### 置顶视频

#### 查询用户置顶视频

>https://api.bilibili.com/x/space/top/arc

*请求方式：GET*

粉丝在其主页上可见

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| vmid   | num  | 目标用户mid | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                 |
| ------- | ---- | -------- | ---------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />53016：没有置顶视频 |
| message | str  | 错误信息 | 默认为0                                              |
| ttl     | num  | 1        |                                                      |
| data    | obj  | 信息本体 |                                                      |

`data`对象：

| 字段        | 类型 | 内容                           | 备注                                                         |
| ----------- | ---- | ------------------------------ | ------------------------------------------------------------ |
| aid         | num  | 稿件avid                       |                                                              |
| videos      | num  | 视频分P总数                    | 默认为1                                                      |
| tid         | num  | 分区tid                        |                                                              |
| tname       | str  | 子分区名称                     |                                                              |
| copyright   | num  | 是否转载                       | 1：原创<br />2：转载<br />3：未填写                            |
| pic         | str  | 视频封面图片url                |                                                              |
| title       | str  | 稿件标题                       |                                                              |
| pubdate     | num  | 稿件发布时间                   | 时间戳                                                       |
| ctime       | num  | 用户提交稿件的时间             | 时间戳                                                       |
| desc        | str  | 视频简介                       |                                                              |
| state       | num  | 视频状态                       | 略，见[获取视频详细信息（web端）](../video/info.md#获取视频详细信息web端)中的`state`备注 |
| attribute   | num  | 稿件属性位配置                 | 略，见[获取视频详细信息（web端）](../video/info.md#获取视频详细信息web端)中的`attribute`备注 |
| duration    | num  | 视频总计持续时长（所有分P）    | 单位为秒                                                     |
| rights      | obj  | 视频属性标志                   | 略，见[获取视频详细信息（web端）](../video/info.md#获取视频详细信息web端)中的`rights`对象 |
| owner       | obj  | 视频UP主信息                   | 略，见[获取视频详细信息（web端）](../video/info.md#获取视频详细信息web端)中的`owner`对象 |
| stat        | obj  | 视频状态数                     | 略，见[获取视频详细信息（web端）](../video/info.md#获取视频详细信息web端)中的`stat`对象 |
| dynamic     | str  | 视频同步发布的的动态的文字内容 | 无为空                                                       |
| cid         | num  | 视频1P cid                     |                                                              |
| dimension   | obj  | 视频1P分辨率                   | 略，见[获取视频详细信息（web端）](../video/info.md#获取视频详细信息web端)中的`dimension`对象 |
| bvid        | str  | 稿件bvid                       |                                                              |
| reason      | str  | 置顶视频备注                   |                                                              |
| inter_video | bool | 是否为合作视频                 | false：否<br />true：是                                      |

**示例：**

查询用户`mid=23215368`的置顶视频

```shell
curl -G 'https://api.bilibili.com/x/space/top/arc' \
--data-urlencode 'vmid=23215368'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "aid": 37896701,
    "videos": 1,
    "tid": 28,
    "tname": "原创音乐",
    "copyright": 1,
    "pic": "http://i2.hdslb.com/bfs/archive/cc9e72822d68fffdd0406144f1b5348a13c89652.jpg",
    "title": "燃烧吧！铃声！把主流手机铃声编成一首曲子",
    "pubdate": 1544469671,
    "ctime": 1544469671,
    "desc": "各品牌的手机铃声大合奏，毫无违和感~",
    "state": 0,
    "attribute": 16768,
    "duration": 208,
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
      "mid": 23215368,
      "name": "Wayjon冰冰酱",
      "face": "http://i2.hdslb.com/bfs/face/7c9715f1768191137eb7ebf91918ca0f99532012.jpg"
    },
    "stat": {
      "aid": 37896701,
      "view": 1058237,
      "danmaku": 16821,
      "reply": 3725,
      "favorite": 76888,
      "coin": 100694,
      "share": 17091,
      "now_rank": 0,
      "his_rank": 0,
      "like": 90521,
      "dislike": 0
    },
    "dynamic": "#编曲##FL##纯音乐#",
    "cid": 66621209,
    "dimension": {
      "width": 1920,
      "height": 1080,
      "rotate": 0
    },
    "bvid": "BV18t411q7zz",
    "reason": "",
    "inter_video": false
  }
}
```

</details>

#### 设置置顶视频

> https://api.bilibili.com/x/space/top/arc/set

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                     | 必要性       | 备注                             |
| ------ | ---- | ------------------------ | ------------ | -------------------------------- |
| aid    | num  | 置顶目标稿件avid         | 必要（可选） | avid与bvid任选一个               |
| bvid   | str  | 置顶目标稿件bvid         | 必要（可选） | avid与bvid任选一个               |
| reason | str  | 置顶视频备注             | 非必要       | 置顶备注最大40字符<br />默认为空 |
| csrf   | str  | CSRF Token（位于cookie） | 必要         |                                  |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-304：未修改<br />-400：请求错误<br />53014：稿件已失效<br />53015：备注过长<br />53017：置顶非自己的稿件 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

置顶视频`av98948772`/`BV1n741127LD`

avid方式：

```shell
curl 'https://api.bilibili.com/x/space/top/arc/set' \
--data-urlencode 'aid=98948772' \
-b 'SESSDATA=xxx'
```

bvid方式：

```shell
curl 'https://api.bilibili.com/x/space/top/arc/set' \
--data-urlencode 'bvid=BV1n741127LD' \
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

#### 取消置顶视频

> https://api.bilibili.com/x/space/top/arc/cancel

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                     | 必要性 | 备注 |
| ------ | ---- | ------------------------ | ------ | ---- |
| csrf   | str  | CSRF Token（位于cookie） | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误（重复取消） |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

```shell
curl 'https://api.bilibili.com/x/space/top/arc/cancel' \
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

### 代表作视频

#### 查询用户代表作视频列表

> https://api.bilibili.com/x/space/masterpiece

*请求方式：GET*

新访客在其主页上可见

最多可以设置3个

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| vmid   | num  | 目标用户mid | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型   | 内容       | 备注                        |
| ------- | ------ | ---------- | --------------------------- |
| code    | num    | 返回值     | 0：成功<br />-400：请求错误 |
| message | str    | 错误信息   | 默认为0                     |
| ttl     | num    | 1          |                 |
| data    | array | 代表作列表 |                             |

`data`数组：

| 项   | 类型 | 内容    | 备注                      |
| ---- | ---- | ------- | ------------------------- |
| 0    | obj  | 代表作1 | 无则为空                  |
| 1    | obj  | 代表作2 | 无则为空                  |
| 2    | obj  | 代表作3 | 无则为空<br />最多设置3个 |

`data`数组中的对象：

同[查询用户置顶视频](#查询用户置顶视频)中的`data`对象

**示例：**

查询用户`mid=23215368`的代表作视频列表

```shell
curl -G 'https://api.bilibili.com/x/space/masterpiece' \
--data-urlencode 'vmid=23215368'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": [{
    "aid": 37896701,
    "videos": 1,
    "tid": 28,
    "tname": "原创音乐",
    "copyright": 1,
    "pic": "http://i2.hdslb.com/bfs/archive/cc9e72822d68fffdd0406144f1b5348a13c89652.jpg",
    "title": "燃烧吧！铃声！把主流手机铃声编成一首曲子",
    "pubdate": 1544469671,
    "ctime": 1544469671,
    "desc": "各品牌的手机铃声大合奏，毫无违和感~",
    "state": 0,
    "attribute": 16768,
    "duration": 208,
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
      "mid": 23215368,
      "name": "Wayjon冰冰酱",
      "face": "http://i2.hdslb.com/bfs/face/7c9715f1768191137eb7ebf91918ca0f99532012.jpg"
    },
    "stat": {
      "aid": 37896701,
      "view": 1058241,
      "danmaku": 16821,
      "reply": 3725,
      "favorite": 76888,
      "coin": 100694,
      "share": 17091,
      "now_rank": 0,
      "his_rank": 0,
      "like": 90521,
      "dislike": 0
    },
    "dynamic": "#编曲##FL##纯音乐#",
    "cid": 66621209,
    "dimension": {
      "width": 1920,
      "height": 1080,
      "rotate": 0
    },
    "bvid": "BV18t411q7zz",
    "reason": "",
    "inter_video": false
  }, {
    "aid": 39596658,
    "videos": 1,
    "tid": 21,
    "tname": "日常",
    "copyright": 1,
    "pic": "http://i2.hdslb.com/bfs/archive/431e51d0e40e3461e1c1b0f59c755ae8843b1adb.jpg",
    "title": "MY2018 - 纪念我的2018年",
    "pubdate": 1546328392,
    "ctime": 1546328392,
    "desc": "",
    "state": 0,
    "attribute": 16768,
    "duration": 239,
    "mission_id": 10996,
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
      "mid": 23215368,
      "name": "Wayjon冰冰酱",
      "face": "http://i2.hdslb.com/bfs/face/7c9715f1768191137eb7ebf91918ca0f99532012.jpg"
    },
    "stat": {
      "aid": 39596658,
      "view": 1518,
      "danmaku": 16,
      "reply": 40,
      "favorite": 22,
      "coin": 60,
      "share": 9,
      "now_rank": 0,
      "his_rank": 0,
      "like": 112,
      "dislike": 0
    },
    "dynamic": "#vlog##记录##生活记录#",
    "cid": 69561078,
    "dimension": {
      "width": 1920,
      "height": 1080,
      "rotate": 0
    },
    "bvid": "BV1Jt411B7La",
    "reason": "",
    "inter_video": false
  }, {
    "aid": 44721369,
    "videos": 1,
    "tid": 28,
    "tname": "原创音乐",
    "copyright": 1,
    "pic": "http://i0.hdslb.com/bfs/archive/9887797402599c42f74a7624f3db4a92a0ebf465.jpg",
    "title": "【铃声串烧系列】华米两开花；中华有为，国之荣耀！把主流手机铃声编成一首曲子",
    "pubdate": 1551128445,
    "ctime": 1551128445,
    "desc": "把主流手机铃声编成一首曲子，这一版用华为的铃声作为主旋律，毫无违和感~伴随着2019mwc的开幕，希望国产厂商能获得全世界的目光，并且将属于中国人的科技自信传递到全世界！",
    "state": 0,
    "attribute": 16768,
    "duration": 174,
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
      "mid": 23215368,
      "name": "Wayjon冰冰酱",
      "face": "http://i2.hdslb.com/bfs/face/7c9715f1768191137eb7ebf91918ca0f99532012.jpg"
    },
    "stat": {
      "aid": 44721369,
      "view": 306757,
      "danmaku": 7713,
      "reply": 1520,
      "favorite": 17216,
      "coin": 16489,
      "share": 2917,
      "now_rank": 0,
      "his_rank": 0,
      "like": 21439,
      "dislike": 0
    },
    "dynamic": "#铃声##纯音乐##音乐#【铃声串烧】Mix Ringtones！船新的版本来啦！这一版用华为的铃声作为主旋律，毫无违和感~伴随着2019mwc的开幕，希望国产厂商能获得全世界的目光，并且将属于中国人的科技自信传递到全世界！",
    "cid": 78290138,
    "dimension": {
      "width": 1920,
      "height": 1080,
      "rotate": 0
    },
    "bvid": "BV1vb411879C",
    "reason": "",
    "inter_video": false
  }]
}
```

</details>

#### 添加代表作视频

> https://api.bilibili.com/x/space/masterpiece/add

*请求方式：POST*

认证方式：Cookie（SESSDATA）

代表作上限为3个稿件

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                     | 必要性       | 备注                             |
| ------ | ---- | ------------------------ | ------------ | -------------------------------- |
| aid    | num  | 置顶目标稿件avid         | 必要（可选） | avid与bvid任选一个               |
| bvid   | str  | 置顶目标稿件bvid         | 必要（可选） | avid与bvid任选一个               |
| reason | str  | 代表作备注               | 非必要       | 置顶备注最大40字符<br />默认为空 |
| csrf   | str  | CSRF Token（位于cookie） | 必要         |                                  |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />53014：稿件已失效<br />53015：备注过长<br />53017：置顶非自己的稿件<br />53019：达到上限<br />53020：已经存在该稿件 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

添加视频`av94916552`/`BV1ZE411K7ux`到代表作列表

avid方式：

```shell
curl 'https://api.bilibili.com/x/space/masterpiece/add' \
--data-urlencode 'aid=94916552' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

bvid方式：

```shell
curl 'https://api.bilibili.com/x/space/masterpiece/add' \
--data-urlencode 'bvid=BV1ZE411K7ux' \
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

#### 删除代表作视频

> https://api.bilibili.com/x/space/masterpiece/cancel

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                     | 必要性       | 备注               |
| ------ | ---- | ------------------------ | ------------ | ------------------ |
| aid    | num  | 要删除的目标稿件avid     | 必要（可选） | avid与bvid任选一个 |
| bvid   | str  | 要删除的目标稿件bvid     | 必要（可选） | avid与bvid任选一个 |
| csrf   | str  | CSRF Token（位于cookie） | 必要         |                    |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />53021：置顶列表中没有该视频 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |

**示例：**

删除置顶视频`av59765630`/`BV1Yt41137T6`

avid方式：

```shell
curl 'https://api.bilibili.com/x/space/masterpiece/cancel' \
--data-urlencode 'aid=59765630' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

bvid方式：

```shell
curl 'https://api.bilibili.com/x/space/masterpiece/cancel' \
--data-urlencode 'bvid=BV1Yt41137T6' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

### 个人TAG

#### 查看用户个人TAG

> https://api.bilibili.com/x/space/acc/tags

*请求方式：GET*

上限5条，且内容由用户自定义

带有转义

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | num  | 目标用户mid | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型  | 内容     | 备注                        |
| ------- | ----- | -------- | --------------------------- |
| code    | num   | 返回值   | 0：成功<br />-400：请求错误 |
| message | str   | 错误信息 | 默认为0                     |
| ttl     | num   | 1        |                             |
| data    | array | 信息本体 |                             |

`data`数组：

| 项   | 类型 | 内容     | 备注          |
| ---- | ---- | -------- | ------------- |
| 0    | obj  | 套了个娃 | 只有1项？？？ |

`data`数组中的对象：

| 字段 | 类型  | 内容        | 备注 |
| ---- | ----- | ----------- | ---- |
| mid  | num   | 目标用户mid |      |
| tags | array | TAG名称     |      |

`data`数组中的对象中的`tags`数组：

| 项   | 类型 | 内容     | 备注    |
| ---- | ---- | -------- | ------- |
| 0    | str  | TAG1     |         |
| n    | str  | TAG(n+1) |         |
| ……   | str  | ……       |         |
| 4    | str  | TAG5     | 上限5条 |

**示例：**

查看用户`mid=53456`的个人TAG

```shell
curl -G 'https://api.bilibili.com/x/space/acc/tags' \
--data-urlencode 'mid=53456'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": [
        {
            "mid": 53456,
            "tags": [
                "游戏",
                "音乐",
                "warma",
                "搞笑",
                "动画"
            ]
        }
    ]
}
```

</details>

#### 修改个人TAG

> https://api.bilibili.com/x/space/acc/tags/set

*请求方式：POST*

认证方式：Cookie（SESSDATA）

鉴权方式：Cookie中`DedeUserID`存在且不为0

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                     | 必要性 | 备注                                                         |
| ------ | ---- | ------------------------ | ------ | ------------------------------------------------------------ |
| tags   | strs | 要设置的TAG内容          | 非必要 | 删除公告留空或省去即可<br />各TAG长度小于10字符<br />最多5个TAG<br />各TAG之间用","(%2C)分隔<br />重复TAG无效 |
| csrf   | str  | CSRF Token（位于cookie） | 必要   |                                                              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误（超出长度限制） |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

修改个人TAG为`minecraft,技术宅,大佬,小哥哥,可爱`

```shell
curl 'https://api.bilibili.com/x/space/acc/tags/set' \
--data-urlencode 'tags=minecraft,技术宅,大佬,小哥哥,可爱' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx;DedeUserID=1'
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

### 空间公告

#### 查看用户空间公告

> https://api.bilibili.com/x/space/notice

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | num  | 目标用户mid | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        |                             |
| data    | str  | 公告信息 | 无则为空                    |

**示例：**

查看用户`mid=53456`的空间公告

```shell
curl -G 'https://api.bilibili.com/x/space/notice' \
--data-urlencode 'mid=53456'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code":0,
    "message":"0",
    "ttl":1,
    "data":"我的微博 @_warma_\n直播录像上传到：warma养鸽场\n头像画师是：微博@Dr-H_喵_\n横幅画师：@薬屋"
}
```

</details>

#### 修改空间公告

> https://api.bilibili.com/x/space/notice/set

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                     | 必要性 | 备注                                    |
| ------ | ---- | ------------------------ | ------ | --------------------------------------- |
| notice | str  | 要设置的公告内容         | 非必要 | 删除公告留空或省去即可<br />少于150字符 |
| csrf   | str  | CSRF Token（位于cookie） | 必要   |                                         |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-304：未修改<br />-400：请求错误（超出长度限制） |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |

**示例：**

修改个人空间公告为`鸽子`

```shell
curl 'https://api.bilibili.com/x/space/notice/set' \
--data-urlencode 'notice=鸽子' \
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

### 主页板块布局与权限

#### 查询空间设置

> http://space.bilibili.com/ajax/settings/getSettings

*请求方式：GET*

注：带有转义

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | num  | 目标用户mid | 必要   |      |

**json回复：**

根对象：

| 字段   | 类型                | 内容     | 备注 |
| ------ | ------------------- | -------- | ---- |
| status | bool             | 用户是否存在                                   | true：存在<br />false：不存在 |
| data   | 用户存在时：obj<br />用户不存在时：str| 用户存在时：信息本体<br />用户不存在时：错误信息 |      |

`data`对象：

| 字段                   | 类型  | 内容             | 备注         |
| ---------------------- | ----- | ---------------- | ------------ |
| privacy                | obj   | 空间隐私权限     |              |
| index_order            | array | 空间板块布局     |              |
| theme                  | str   | default主题？    | 作用尚不明确 |
| theme_preview_img_path | str   | 主题预览图路径？ | 作用尚不明确 |
| toutu                  | obj   | 空间头图         |              |

`privacy`对象：

| 字段        | 类型 | 内容           | 备注                           |
| ----------- | ---- | -------------- | ------------------------------ |
| bangumi     | num  | 追番及追剧     | 0：隐藏<br />1：公开<br />**下同** |
| bbq         | num  | 轻视频         |                                |
| channel     | num  | 频道           |                                |
| coins_video | num  | 最近投币的视频 |                                |
| comic       | num  | 追漫           |                                |
| dress_up    | num  | 装扮           |                                |
| fav_video   | num  | 收藏夹         |                                |
| groups      | num  | 圈子？         | 作用尚不明确                   |
| likes_video | num  | 最近点赞的视频 |                                |
| played_game | num  | 最近玩过的游戏 |                                |
| tags        | num  | 订阅标签       |                                |
| user_info   | num  | 个人资料       |                                |

`index_order`数组：

| 项   | 类型 | 内容      | 备注                                         |
| ---- | ---- | --------- | -------------------------------------------- |
| 0    | obj  | 板块1     | 根据板块布局顺序排序<br />先左侧布局后右侧布局 |
| n    | obj  | 板块(n+1) |                                              |
| ……   | obj  | ……        | ……                                           |

`index_order`数组内对象：

| 字段 | 类型 | 内容     | 备注 |
| ---- | ---- | -------- | ---- |
| id   | num  | 板块编号 |      |
| name | str  | 板块名称 |      |

`toutu`对象：

| 字段          | 类型 | 内容                 | 备注                                               |
| ------------- | ---- | -------------------- | -------------------------------------------------- |
| sid           | num  | 空间头图ID           |                                                    |
| expire        | num  | 到期时间？           | 时间戳？<br />作用尚不明确                         |
| s_img         | str  | 空间头图小图相对路径 | 完整url为`http://i0.hdslb.com/`+相对路径           |
| l_img         | str  | 空间头图相对路径     | **同上**                                           |
| android_img   | str  | 空                   | 注：**手机端头图与web端不同，需要用另一个api获取** |
| iphone_img    | str  | 空                   |                                                    |
| ipad_img      | str  | 空                   |                                                    |
| thumbnail_img | str  | 缩略图               |                                                    |
| platform      | num  | 0                    | 作用尚不明确                                       |

**示例：**

查看`mid=2`的空间设置

```shell
curl -G 'http://space.bilibili.com/ajax/settings/getSettings' \
--data-urlencode 'mid=2'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "status":true,
    "data":{
        "privacy":{
            "bangumi":1,
            "bbq":1,
            "channel":1,
            "coins_video":0,
            "comic":1,
            "dress_up":1,
            "fav_video":0,
            "groups":0,
            "likes_video":0,
            "played_game":1,
            "tags":1,
            "user_info":1
        },
        "index_order":[
            {
                "id":1,
                "name":"我的稿件"
            },
            {
                "id":8,
                "name":"我的专栏"
            },
            {
                "id":7,
                "name":"我的频道"
            },
            {
                "id":2,
                "name":"我的收藏夹"
            },
            {
                "id":3,
                "name":"订阅番剧"
            },
            {
                "id":4,
                "name":"订阅标签"
            },
            {
                "id":5,
                "name":"最近投币的视频"
            },
            {
                "id":6,
                "name":"我的圈子"
            },
            {
                "id":9,
                "name":"我的相簿"
            },
            {
                "id":21,
                "name":"公告"
            },
            {
                "id":22,
                "name":"直播间"
            },
            {
                "id":23,
                "name":"个人资料"
            },
            {
                "id":24,
                "name":"官方活动"
            },
            {
                "id":25,
                "name":"最近玩过的游戏"
            }
        ],
        "theme":"default",
        "theme_preview_img_path":"",
        "toutu":{
            "sid":1,
            "expire":2861874560,
            "s_img":"bfs/space/768cc4fd97618cf589d23c2711a1d1a729f42235.png",
            "l_img":"bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png",
            "android_img":"",
            "iphone_img":"",
            "ipad_img":"",
            "thumbnail_img":"",
            "platform":0
        }
    }
}
```

</details>

#### 查询可用头图列表 (Web端)

> https://space.bilibili.com/ajax/topphoto/getlist

*请求方式: GET*

注: 带有转义

**URL参数:**

| 参数名 | 类型 | 内容        | 必要性 | 备注                       |
| ------ | ---- | ----------- | ------ | -------------------------- |
| mid    | num  | 目标用户mid | 必要   | 非负数, 即使该用户并不存在 |

**JSON回复:**

根对象:

| 字段   | 类型                      | 内容                                   | 备注 |
| ------ | ------------------------- | -------------------------------------- | ---- |
| status | bool                      | 成功: true<br />失败: false            |      |
| data   | 成功: array<br/>失败: str | 成功: 信息本体<br />失败: "用户id错误" |      |

`data`数组中的对象:

| 字段          | 类型 | 内容        | 备注                                 |
| ------------- | ---- | ----------- | ------------------------------------ |
| id            | num  | 空间头图 ID |                                      |
| product_name  | str  | 显示名称    |                                      |
| price         | num  | 价格        |                                      |
| coin_type     | num  | 支付类型?   |                                      |
| vip_free      | num  | 大会员免费  |                                      |
| s_img         | str  | 小图 URI    | 需要自行与 `i0.hdslb.com` 拼接成 URL |
| l_img         | str  | 大图 URI    | 同 s_img                             |
| thumbnail_img | str  | 空          | 并不存在的缩略图?                    |
| sort_num      | num  | 排序编号    |                                      |
| is_disable    | num  | 已禁用      | 0: 未禁用                            |
| expire        | num  | 过期时间?   | UNIX 时间戳, 或 0 为永不过期         |
| had           | num  | 是否拥有?   | 当 expire 不为 0 时 为 1, 否则为 0   |

**示例:**

查询`mid=1145141919810000000`的可用空间头图

```shell
curl -G "https://space.bilibili.com/ajax/topphoto/getlist" \
--data-urlencode "mid=1145141919810000000"
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "status": true,
  "data": [
    {
      "id": 1,
      "product_name": "bilibili春",
      "price": 0,
      "coin_type": 0,
      "vip_free": 0,
      "s_img": "bfs/space/768cc4fd97618cf589d23c2711a1d1a729f42235.png",
      "l_img": "bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png",
      "thumbnail_img": "",
      "sort_num": 19,
      "is_disable": 0,
      "expire": 0,
      "had": 0
    },
    {
      "id": 2,
      "product_name": "两人单车",
      "price": 0,
      "coin_type": 0,
      "vip_free": 0,
      "s_img": "bfs/space/d60a4be11f1bca6168a60a53c64bca18eddd6443.jpg",
      "l_img": "bfs/space/44873d3568bdcb3d850d234e02a19602972450f1.png",
      "thumbnail_img": "",
      "sort_num": 16,
      "is_disable": 0,
      "expire": 0,
      "had": 0
    },
    {
      "id": 5,
      "product_name": "成为偶像",
      "price": 0,
      "coin_type": 0,
      "vip_free": 0,
      "s_img": "bfs/space/5fe2632486a5a91a234f0e7cb368ab6397477da4.jpg",
      "l_img": "bfs/space/87277d30cd19edcec9db466a9a3e556aeb0bc0ed.png",
      "thumbnail_img": "",
      "sort_num": 15,
      "is_disable": 0,
      "expire": 0,
      "had": 0
    },
    {
      "id": 11,
      "product_name": "星际勘探",
      "price": 0,
      "coin_type": 0,
      "vip_free": 0,
      "s_img": "bfs/space/6849abc6e67000ad807b35a970aba31dd1e400dd.jpg",
      "l_img": "bfs/space/c919a9818172a8297f8b0597722f96504a1e1d88.png",
      "thumbnail_img": "",
      "sort_num": 14,
      "is_disable": 0,
      "expire": 0,
      "had": 0
    },
    {
      "id": 10,
      "product_name": "星O大战",
      "price": 0,
      "coin_type": 0,
      "vip_free": 0,
      "s_img": "bfs/space/ff3b0882e55c1099738e59616e5956ad357d9948.jpg",
      "l_img": "bfs/space/e22f5b8e06ea3ee4de9e4da702ce8ef9a2958f5a.png",
      "thumbnail_img": "",
      "sort_num": 13,
      "is_disable": 0,
      "expire": 0,
      "had": 0
    },
    {
      "id": 12,
      "product_name": "王牌特工",
      "price": 0,
      "coin_type": 0,
      "vip_free": 0,
      "s_img": "bfs/space/f5d38e2af44fd12fa65423aff55933fcf9071419.jpg",
      "l_img": "bfs/space/8cd85a382756ab938df23a856017abccd187188e.png",
      "thumbnail_img": "",
      "sort_num": 12,
      "is_disable": 0,
      "expire": 0,
      "had": 0
    },
    {
      "id": 3,
      "product_name": "仰望星空",
      "price": 0,
      "coin_type": 0,
      "vip_free": 0,
      "s_img": "bfs/space/c9dae917e24b4fc17c4d544caf6b6c0b17f8692b.jpg",
      "l_img": "bfs/space/9ccc0447aebf0656809b339b41aa5b3705f27c47.png",
      "thumbnail_img": "",
      "sort_num": 11,
      "is_disable": 0,
      "expire": 0,
      "had": 0
    },
    {
      "id": 14,
      "product_name": "雨过天晴",
      "price": 0,
      "coin_type": 0,
      "vip_free": 0,
      "s_img": "bfs/space/1115b2fdabd128337f892feada4ce32e51f3a5ad.jpg",
      "l_img": "bfs/space/6a1198e25f8764bd30d53411dac9fdf840bc3265.png",
      "thumbnail_img": "",
      "sort_num": 10,
      "is_disable": 0,
      "expire": 0,
      "had": 0
    },
    {
      "id": 6,
      "product_name": "绿荫秘境",
      "price": 0,
      "coin_type": 0,
      "vip_free": 0,
      "s_img": "bfs/space/dc02d22a718c1c436f1a355b3cd726b04098ef7d.jpg",
      "l_img": "bfs/space/265ecddc52d74e624dc38cf0cff13317085aedf7.png",
      "thumbnail_img": "",
      "sort_num": 9,
      "is_disable": 0,
      "expire": 0,
      "had": 0
    },
    {
      "id": 13,
      "product_name": "漫游仙境",
      "price": 0,
      "coin_type": 0,
      "vip_free": 0,
      "s_img": "bfs/space/184abe52a5ea9390b506c064cfba4f8f20ae9cca.jpg",
      "l_img": "bfs/space/24d0815514951bb108fbb360b04a969441079315.png",
      "thumbnail_img": "",
      "sort_num": 7,
      "is_disable": 0,
      "expire": 0,
      "had": 0
    },
    {
      "id": 15,
      "product_name": "放课后time",
      "price": 0,
      "coin_type": 0,
      "vip_free": 0,
      "s_img": "bfs/space/aea2dd7b8894ce31d578d4fad6a7188c7b49cb2f.jpg",
      "l_img": "bfs/space/6e799ff2de2de55d27796707a283068d66cdf3f4.png",
      "thumbnail_img": "",
      "sort_num": 6,
      "is_disable": 0,
      "expire": 0,
      "had": 0
    },
    {
      "id": 4,
      "product_name": "昴宿星团",
      "price": 0,
      "coin_type": 0,
      "vip_free": 0,
      "s_img": "bfs/space/1f4eaf70d1bb981f6057b3e440249d7a1f65774f.jpg",
      "l_img": "bfs/space/3ab888c1d149e864ab44802dea8c1443e940fa0d.png",
      "thumbnail_img": "",
      "sort_num": 5,
      "is_disable": 0,
      "expire": 0,
      "had": 0
    },
    {
      "id": 7,
      "product_name": "蔷薇洛丽塔",
      "price": 0,
      "coin_type": 0,
      "vip_free": 0,
      "s_img": "bfs/space/718eac8c71e29b8a80431c46110805c3a40e30a6.jpg",
      "l_img": "bfs/space/70ce28bcbcb4b7d0b4f644b6f082d63a702653c1.png",
      "thumbnail_img": "",
      "sort_num": 4,
      "is_disable": 0,
      "expire": 0,
      "had": 0
    },
    {
      "id": 9,
      "product_name": "黑暗之门",
      "price": 0,
      "coin_type": 0,
      "vip_free": 0,
      "s_img": "bfs/space/ef1b08e62fdc35b06e39795bc6de8e510935bf97.jpg",
      "l_img": "bfs/space/cd52d4ac1d336c940cc4958120170f7928d9e606.png",
      "thumbnail_img": "",
      "sort_num": 3,
      "is_disable": 0,
      "expire": 0,
      "had": 0
    },
    {
      "id": 19,
      "product_name": "你的名字",
      "price": 0,
      "coin_type": 0,
      "vip_free": 0,
      "s_img": "bfs/space/373e127e8784d3e4c1b5e6db0c27702ba077643f.jpg",
      "l_img": "bfs/space/f49642b3683a08e3190f29d5a095386451f8952c.jpg",
      "thumbnail_img": "",
      "sort_num": 2,
      "is_disable": 0,
      "expire": 0,
      "had": 0
    }
  ]
}
```

</details>

### 设置空间头图 (Web端)

> https://space.bilibili.com/ajax/settings/setToutu

*请求方式: POST*

认证方式: Cookie (SESSDATA)

鉴权方式: referer为 `.bilibili.com` 域名下

**正文参数(application/x-www-form-urlencoded):**

| 参数名 | 类型 | 内容                               | 必要性 | 备注 |
| ------ | ---- | ---------------------------------- | ------ | ---- |
| id     | num  | 头图 ID                            | 必要   |      |
| csrf   | str  | CSRF Token (即 Cookie bili_jct 值) | 不必要 |      |

**JSON回复:**

| 字段   | 类型 | 内容     | 备注                        |
| ------ | ---- | -------- | --------------------------- |
| status | bool | 状态     | true: 成功<br />false: 失败 |
| data   | str  | 错误信息 | 正确时无此项 (带有转义)     |

**示例:**

设置空间头图为为`王牌特工(id=12)`

```shell
curl -X POST "https://space.bilibili.com/ajax/settings/setToutu" \
--referer "https://space.bilibili.com/" \
--data-urlencode "id=12" \
--data-urlencode "csrf=xxx" \
-b "SESSDATA=xxx; bili_jct=xxx"
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "status": true
}
```

</details>

#### 调整空间板块布局

> http://space.bilibili.com/ajax/settings/setIndexOrder

*请求方式：POST*

认证方式：Cookie（SESSDATA）

鉴权方式：Cookie中`DedeUserID`及`DedeUserID__ckMd5`存在且不为0，referer为 `.bilibili.com`域名下

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名      | 类型 | 内容                     | 必要性 | 备注                                                         |
| ----------- | ---- | ------------------------ | ------ | ------------------------------------------------------------ |
| index_order | nums | 布局列表                 | 必要   | 每个值之间用","（%2C）分隔<br />先左侧布局再右侧布局<br />值的意义见下表 |
| csrf        | str  | CSRF Token（位于cookie） | 必要   |                                                              |

布局参数`index_order`：

| 值   | 含义                                 |
| ---- | ------------------------------------ |
| 1    | （左侧）我的稿件                     |
| 2    | （左侧）我的收藏夹                   |
| 3    | （左侧）订阅番剧                     |
| 4    | （左侧）订阅标签                     |
| 5    | （左侧）最近投币的视频               |
| 6    | （左侧）我的圈子 **（此板块被隐藏）** |
| 7    | （左侧）我的频道                     |
| 8    | （左侧）我的专栏                     |
| 9    | （左侧）我的相簿                     |
| 21   | （右侧）公告                         |
| 22   | （右侧）直播间                       |
| 23   | （右侧）个人资料                     |
| 24   | （右侧）官方活动                     |
| 25   | （右侧）最近玩的游戏                 |

**json回复：**

根对象：

| 字段   | 类型 | 内容     | 备注                                |
| ------ | ---- | -------- | ----------------------------------- |
| status | bool | 操作结果 | true：操作成功<br />false：操作失败 |
| data   | str  | 错误信息 | 正确时无此项                        |

**示例：**

调整空间布局为：

```text
我的稿件            直播间
我的专栏            个人资料
订阅番剧            公告
我的收藏夹          官方活动
我的相簿            最近玩的游戏
最近投币的视频
订阅标签
我的频道
```

```shell
curl 'https://space.bilibili.com/ajax/settings/setIndexOrder' \
--data-urlencode 'index_order=1,8,3,2,9,5,4,7,22,23,21,24,25,6' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx;DedeUserID=1;DedeUserID__ckMd5=1;' \
-e 'https://www.bilibili.com'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "status": true
}
```

</details>

#### 修改空间隐私权限

> http://space.bilibili.com/ajax/settings/setPrivacy

*请求方式：POST*

认证方式：Cookie（SESSDATA）

鉴权方式：Cookie中`DedeUserID`及`DedeUserID__ckMd5`存在且不为0，referer为 `.bilibili.com`域名下

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名      | 类型 | 内容                     | 必要性 | 备注                               |
| ----------- | ---- | ------------------------ | ------ | ---------------------------------- |
| fav_video   | num  | 收藏视频                 | 非必要 | 0：隐藏<br />1：公开<br />**下同** |
| bangumi     | num  | 追番及追剧               | 非必要 |                                    |
| tags        | num  | 关注的TAG                | 非必要 |                                    |
| coins_video | num  | 投币的视频               | 非必要 |                                    |
| user_info   | num  | 个人信息                 | 非必要 |                                    |
| played_game | num  | 玩过的游戏               | 非必要 |                                    |
| csrf        | nstr | CSRF Token（位于cookie） | 必要   |                                    |

**json回复：**

根对象：

| 字段   | 类型 | 内容     | 备注                                |
| ------ | ---- | -------- | ----------------------------------- |
| status | bool | 操作结果 | true：操作成功<br />false：操作失败 |
| data   | str  | 错误信息 | 正确时无此项                        |

**示例：**

设置`关注的TAG`为隐藏

```shell
curl 'https://space.bilibili.com/ajax/settings/setPrivacy' \
--data-urlencode 'tags=0' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx;DedeUserID=1;DedeUserID__ckMd5=1;' \
-e 'https://www.bilibili.com'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "status": true
}
```

</details>

### 查询用户最近访问内容

#### 查询用户最近玩过的游戏

> https://api.bilibili.com/x/space/lastplaygame

*请求方式：GET*

认证方式：Cookie（SESSDATA）

如设置隐私查看自己的需要认证

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | num  | 目标用户mid | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型                            | 内容     | 备注                                                       |
| ------- | ------------------------------- | -------- | ---------------------------------------------------------- |
| code    | num                             | 返回值   | 0：成功<br />-400：请求错误<br />53013：用户隐私设置未公开 |
| message | str                             | 错误信息 | 默认为0                                                    |
| ttl     | num                             | 1        |                                                            |
| data    | 隐藏时：null<br />公开时：array | 信息本体 |                                                            |

`data`数组：

| 项   | 类型 | 内容      | 备注             |
| ---- | ---- | --------- | ---------------- |
| 0    | obj  | 游戏1     |                  |
| n    | obj  | 游戏(n+1) | 项数为总计游戏数 |
| ……   | obj  | ……        | ……               |

`data`数组中的对象：

| 字段    | 类型 | 内容         | 备注 |
| ------- | ---- | ---------- | ---- |
| website | str  | 游戏主页 url |      |
| image   | str  | 游戏图标 url |      |
| name    | str  | 游戏名       |      |

**示例：**

查询`mid=2`的最近玩过的游戏

```shell
curl -G 'https://api.bilibili.com/x/space/lastplaygame' \
  --data-urlencode 'mid=2'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": [
        {
            "website": "https://game.bilibili.com/fgo/event_meihosou",
            "image": "http://i0.hdslb.com/bfs/game/f7d4ee0877089e4079b8f0b4f5c95dd4ceba512a.png",
            "name": "命运-冠位指定（Fate/GO）"
        },
        {
            "website": "https://game.bilibili.com/pcr/xxtix",
            "image": "http://i0.hdslb.com/bfs/game/7922ecea5cc76fe3c8c177e1d4a6c8cf1c36a700.jpg",
            "name": "公主连结Re:Dive"
        },
        {
            "website": "https://game.bilibili.com/dwbgx/",
            "image": "http://i0.hdslb.com/bfs/game/6d5b2df70dfa987408d8d09110cdc327949885e3.png",
            "name": "大王不高兴"
        },
        {
            "website": "https://game.bilibili.com/bangdream/1stanniversary-yxzx/",
            "image": "http://i0.hdslb.com/bfs/game/4a7d0b7272dffe5a489ee935b6bd2d4f7d5f1257.png",
            "name": "BanG Dream！"
        },
        {
            "website": "http://www.biligame.com/detail/?id=101772",
            "image": "http://i0.hdslb.com/bfs/game/8e8b04e7bd2170c2ba2c9f563a62c72bac2eba2c.jpg",
            "name": "明日方舟"
        }
    ]
}
```

</details>

#### 查询用户最近玩过的游戏V2

> https://api.bilibili.com/x/space/lastplaygame/v2

*请求方式：GET*

认证方式：Cookie（SESSDATA）

如设置隐私查看自己的需要认证

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid   | num  | 目标用户mid | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型                            | 内容     | 备注                                                       |
| ------- | ------------------------------- | -------- | ---------------------------------------------------------- |
| code    | num                             | 返回值   | 0：成功<br />-400：请求错误<br />53013：用户隐私设置未公开 |
| message | str                             | 错误信息 | 默认为0                                                    |
| ttl     | num                             | 1        |                                                            |
| data    | 隐藏时：null<br />公开时：obj | 信息本体 |                                                            |

`data`对象：

| 字段         | 类型  | 内容    | 备注 |
| ----------- | ----- | ------ | --- |
| page_num    | num   | 当前页码 |    |
| page_size   | num   | 每页项数 |    |
| total_count | num   | 游戏总数 |    |
| list        | array | 游戏列表 |    |

`list`数组：

| 项   | 类型 | 内容      | 备注             |
| ---- | ---- | --------- | ---------------- |
| 0    | obj  | 游戏1     |                  |
| n    | obj  | 游戏(n+1) | 项数为总计游戏数 |
| ……   | obj  | ……        | ……               |

`list`数组中的对象：

| 字段            | 类型  | 内容         | 备注               |
| -------------- | ----- | ----------- | ----------------- |
| game_base_id   | num   | 游戏 id      | biligame 的游戏 id |
| game_name      | str   | 游戏名       |                    |
| game_icon      | str   | 游戏图标 url |                    |
| grade          | num   | 游戏评分     | 如`8.2`、`6.8`     |
| detail_url     | str   | 游戏主页 url |                    |
| game_tags      | array | 游戏标签     |                    |
| notice         | str   | 游戏简介文案  |                    |
| gift_title     | str   | 游戏礼物文案  |                    |
| game_status_v2 | num   | （？）       |                    |

`game_tags`数组：

| 项   | 类型  | 内容          | 备注                        |
| ---- | ---- | ------------ | --------------------------- |
| 0    | obj  | 游戏标签1     | 如`角色扮演`、`音乐节奏`、`休闲` |
| n    | obj  | 游戏标签(n+1) |                              |
| ……   | obj  | ……           | ……                           |

**示例：**

查询`mid=2`的最近玩过的游戏

```shell
curl -G 'https://api.bilibili.com/x/space/lastplaygame/v2' \
  --data-urlencode 'mid=2'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "page_num": 0,
    "page_size": 15,
    "total_count": 8,
    "list": [
      {
        "game_base_id": 102567,
        "game_name": "坎特伯雷公主与骑士唤醒冠军之剑的奇幻冒险",
        "game_icon": "https://i0.hdslb.com/bfs/game/fc2f4fd3a347eeb9b8b6ab59d961269bdd05d4e0.png",
        "grade": 8.2,
        "detail_url": "https://www.biligame.com/detail/?id=102567",
        "game_tags": [
          "角色扮演",
          "像素风"
        ],
        "notice": "像素风欢脱冒险RPG",
        "gift_title": "",
        "game_status_v2": 0
      },
      {
        "game_base_id": 101661,
        "game_name": "光·遇",
        "game_icon": "https://i0.hdslb.com/bfs/game/9a1be39915f057597f9328afe503a2bbd0de7754.png",
        "grade": 6.8,
        "detail_url": "https://www.biligame.com/detail/?id=101661",
        "game_tags": [
          "休闲",
          "治愈",
          "唯美"
        ],
        "notice": "九色鹿季开启，探索本真之旅",
        "gift_title": "光·遇九色鹿季回归礼包",
        "game_status_v2": 0
      },
      {
        "game_base_id": 103496,
        "game_name": "原神",
        "game_icon": "https://i0.hdslb.com/bfs/game/2b29383536b3d1a2517bfcb73767f78c242f0458.png",
        "grade": 6.5,
        "detail_url": "https://www.biligame.com/detail/?id=103496",
        "game_tags": [
          "角色扮演",
          "二次元",
          "冒险"
        ],
        "notice": "跨越尘世的探索之旅",
        "gift_title": "bilibili-原神4.4版本独家礼包",
        "game_status_v2": 0
      },
      {
        "game_base_id": 49,
        "game_name": "命运-冠位指定（Fate/GO）",
        "game_icon": "https://i0.hdslb.com/bfs/game/ca5d8d4b3a042beddf7cabca20ae0c946527d1bf.png",
        "grade": 6,
        "detail_url": "https://www.biligame.com/detail/?id=49",
        "game_tags": [
          "卡牌",
          "fate",
          "厨向"
        ],
        "notice": "第2部现已开启！",
        "gift_title": "",
        "game_status_v2": 0
      },
      {
        "game_base_id": 102216,
        "game_name": "公主连结Re:Dive",
        "game_icon": "https://i0.hdslb.com/bfs/game/3bb819e010fe6d594d8f4d417ee380f40e8b5b06.png",
        "grade": 8.4,
        "detail_url": "https://www.biligame.com/detail/?id=102216",
        "game_tags": [
          "角色扮演"
        ],
        "notice": "新角色「璃乃（圣诞节）」登场！",
        "gift_title": "",
        "game_status_v2": 0
      },
      {
        "game_base_id": 168,
        "game_name": "BanG Dream！",
        "game_icon": "https://i0.hdslb.com/bfs/game/d196365d9f112a5adede7eedea1e4154e98c5e53.png",
        "grade": 9.2,
        "detail_url": "https://www.biligame.com/detail/?id=168",
        "game_tags": [
          "音乐节奏",
          "BanG Dream"
        ],
        "notice": "「迎风展翅的我们」活动开启！",
        "gift_title": "",
        "game_status_v2": 0
      },
      {
        "game_base_id": 101772,
        "game_name": "明日方舟",
        "game_icon": "https://i0.hdslb.com/bfs/game/faa556b00d29fffc88281c1ee038b1b7f23aa5c2.jpg",
        "grade": 7.4,
        "detail_url": "https://www.biligame.com/detail/?id=101772",
        "game_tags": [
          "策略",
          "架空文明",
          "末世"
        ],
        "notice": "2023感谢庆典正式开启",
        "gift_title": "",
        "game_status_v2": 0
      },
      {
        "game_base_id": 97,
        "game_name": "碧蓝航线",
        "game_icon": "https://i0.hdslb.com/bfs/game/b141a7690c226a0eae66518c713d3af62613b21d.png",
        "grade": 8.7,
        "detail_url": "https://www.biligame.com/detail/?id=97",
        "game_tags": [
          "养成"
        ],
        "notice": "指挥官，欢迎回港",
        "gift_title": "",
        "game_status_v2": 0
      }
    ]
  }
}
```

</details>

#### 查询用户最近投币视频（Web）

> https://api.bilibili.com/x/space/coin/video

*请求方式：GET*

认证方式：Cookie（SESSDATA）

如设置隐私查看自己的需要认证

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | --------- | ------ | ---- |
| vmid   | num  | 目标用户mid | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型                            | 内容     | 备注                                                       |
| ------- | ------------------------------- | -------- | ---------------------------------------------------------- |
| code    | num                             | 返回值   | 0：成功<br />-400：请求错误<br />53013：用户隐私设置未公开 |
| message | str                             | 错误信息 | 默认为0                                                    |
| ttl     | num                             | 1        |                                                            |
| data    | 隐藏时：null<br />公开时：array | 信息本体 |                                                            |

`data`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | obj  | 投币视频1       |      |
| n    | obj  | 投币视频（n+1） |      |
| ……   | obj  | ……              |      |

`data`数组中的对象：

基本与[获取视频详细信息（web端）](../video/info.md#获取视频详细信息web端)中`data`对象字段一致

**示例：**

查看用户`mid=15858903`的最近投币视频

```shell
curl -G 'http://space.bilibili.com/x/space/coin/video' \
  --data-urlencode 'vmid=15858903' \
  -b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": [
        {
            "aid": 669644066,
            "videos": 1,
            "tid": 75,
            "tname": "动物圈",
            "copyright": 2,
            "pic": "http://i1.hdslb.com/bfs/archive/0f73a68b8f449cc72e9ef109685bd295dc0c0c9d.jpg",
            "title": "在人类幼崽身上用尽了温柔",
            "pubdate": 1600608261,
            "ctime": 1600608261,
            "desc": "https://weibo.com/tv/show/1034:4551253766897703?from=old_pc_videoshow",
            "state": 0,
            "attribute": 16384,
            "duration": 29,
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
                "no_background": 0
            },
            "owner": {
                "mid": 258457966,
                "name": "卧龙寺",
                "face": "http://i2.hdslb.com/bfs/face/f868d1f522733fdcf72a6267e0237157dd0e9948.jpg"
            },
            "stat": {
                "aid": 669644066,
                "view": 3412898,
                "danmaku": 719,
                "reply": 1481,
                "favorite": 21909,
                "coin": 2864,
                "share": 13702,
                "now_rank": 0,
                "his_rank": 0,
                "like": 86970,
                "dislike": 0
            },
            "dynamic": "",
            "cid": 237319289,
            "dimension": {
                "width": 576,
                "height": 1024,
                "rotate": 0
            },
            "bvid": "BV1sa4y1j7jk",
            "coins": 1,
            "time": 1601802763,
            "ip": "",
            "inter_video": false
        },
        {
            "aid": 202267998,
            "videos": 1,
            "tid": 138,
            "tname": "搞笑",
            "copyright": 1,
            "pic": "http://i0.hdslb.com/bfs/archive/ca7746f2207114513f1a421d7f744523275ee679.jpg",
            "title": "充  电  器  の  痛",
            "pubdate": 1601750952,
            "ctime": 1601750952,
            "desc": "这个简介吓到我了!",
            "state": 0,
            "attribute": 16512,
            "duration": 50,
            "mission_id": 14725,
            "rights": {
                "bp": 0,
                "elec": 0,
                "download": 0,
                "movie": 0,
                "pay": 0,
                "hd5": 0,
                "no_reprint": 1,
                "autoplay": 1,
                "ugc_pay": 0,
                "is_cooperation": 0,
                "ugc_pay_preview": 0,
                "no_background": 0
            },
            "owner": {
                "mid": 129922746,
                "name": "-白糖洒一地-",
                "face": "http://i0.hdslb.com/bfs/face/1f581f3b20a380c2fd13ecb8bbe409f8b49c6418.jpg"
            },
            "stat": {
                "aid": 202267998,
                "view": 109,
                "danmaku": 2,
                "reply": 11,
                "favorite": 5,
                "coin": 9,
                "share": 0,
                "now_rank": 0,
                "his_rank": 0,
                "like": 20,
                "dislike": 0
            },
            "dynamic": "",
            "cid": 241861687,
            "dimension": {
                "width": 1920,
                "height": 1080,
                "rotate": 0
            },
            "bvid": "BV1oh411X7iA",
            "coins": 2,
            "time": 1601773750,
            "ip": "",
            "inter_video": false
        },
        {
            "aid": 839722373,
            "videos": 1,
            "tid": 208,
            "tname": "校园学习",
            "copyright": 1,
            "pic": "http://i2.hdslb.com/bfs/archive/11ed53241ceab314c919adba9f85582d24d9313c.jpg",
            "title": "“白piáo”用日语到底怎么说？油管人气日语老师来教你！",
            "pubdate": 1601026026,
            "ctime": 1601026026,
            "desc": "志方老师的B站用语日语课又来了~\n欢迎大家来看哦，\n如果喜欢我们的作品的话，欢迎大家用2~3连+转发来支持我们~\n如果拒绝的话，也可以用日语在评论和弹幕里刷上一波~即可以锻炼日语又可以拒绝我们，岂不美哉~~",
            "state": 0,
            "attribute": 16768,
            "duration": 310,
            "mission_id": 14655,
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
                "mid": 677926489,
                "name": "日语志方老师",
                "face": "http://i2.hdslb.com/bfs/face/d465e5cd42e3523a52b3bef38dce7b23627b7723.jpg"
            },
            "stat": {
                "aid": 839722373,
                "view": 130688,
                "danmaku": 1320,
                "reply": 799,
                "favorite": 3722,
                "coin": 5883,
                "share": 339,
                "now_rank": 0,
                "his_rank": 0,
                "like": 17585,
                "dislike": 0
            },
            "dynamic": "志方老师的B站用语日语课又来了~\n欢迎大家来看哦，\n如果喜欢我们的作品的话，欢迎大家用2~3连+转发来支持我们~\n如果拒绝的话，也可以用日语在评论和弹幕里刷上一波~即可以锻炼日语又可以拒绝我们，岂不美哉~~",
            "cid": 238876133,
            "dimension": {
                "width": 1920,
                "height": 1080,
                "rotate": 0
            },
            "bvid": "BV1n54y117kq",
            "coins": 2,
            "time": 1601036198,
            "ip": "",
            "inter_video": false
        }
    ]
}
```

</details>

#### 查询用户最近投币视频（APP）

> https://app.bilibili.com/x/v2/space/coinarc

*请求方式：GET*

认证方式：APP

如设置隐私查看自己的需要认证

**url参数：**

| 参数名      | 类型 | 内容        | 必要性 | 备注     |
| ---------- | ---- | ----------- | ------ | -------- |
| access_key | str  | APP登录Token | APP方式必要    |      |
| appkey     | str  | APP密钥    | APP方式必要 |      |
| vmid       | num  | 目标用户mid | 必要   |           |
| pn         | num  | 页码        | 非必要 | 默认为1   |
| ps         | num  | 每页项数    | 非必要 | 默认为20  |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注        |
| ------- | ---- | -------- | ------------ |
| code    | num  | 返回值   | 0：成功       |
| message | str  | 错误信息 | 默认为0       |
| ttl     | num  | 1        |              |
| data    | obj  | 信息本体 |               |

`data`对象：

| 字段   | 类型  | 内容         | 备注 |
| ------ | ----- | ---------- | ---- |
| count  | num   | 投币的视频数 |      |
| item   | array | 投币视频列表 |      |

`item`数组：

| 项   | 类型  | 内容               | 备注 |
| ---- | ---- | ------------------ | ---- |
| 0    | obj  | 投币的视频信息1      |      |
| n    | obj  | 投币的视频信息（n+1） |      |
| ……   | obj  | ……                 |      |

`item`数组中的对象：

| 字段               | 类型 | 内容          | 备注                    |
| ----------------- | ---- | ------------ | ---------------------- |
| title             | str  | 稿件标题       |                        |
| subtitle          | str  | 空            |                        |
| tname             | str  | 空            |                        |
| cover             | str  | 封面图片 url   |                        |
| cover_icon        | str  | 空            |                        |
| uri               | str  | APP 跳转 uri  | 如`bilibili://video/2` |
| param             | str  | 稿件 avid     |                        |
| goto              | str  | av           |                        |
| length            | num  | 空           |                        |
| duration          | num  | 稿件视频长度   | 单位为秒                |
| is_popular        | bool | （？）        |                        |
| is_steins         | bool | （？）        |                        |
| is_ugcpay         | bool | （？）        |                        |
| is_cooperation    | str  | （？）        |                        |
| is_pgc            | str  | （？）        |                        |
| is_live_playback  | str  | （？）        |                        |
| is_pugv           | str  | （？）        |                        |
| is_fold           | num  | （？）        |                        |
| play              | num  | 播放量        |                        |
| danmaku           | num  | 弹幕量        |                        |
| ctime             | num  | 发布时间      | 时间戳                  |
| ugc_pay           | num  | 0            |                        |
| author            | str  | UP主昵称      |                        |
| state             | bool | true         |                        |
| videos            | num  | 0            |                        |
| view_content      | str  | 稿件播放量文案 |                        |
| icon_type         | num  | 0            |                        |
| publish_time_text | str  | 空           |                        |

**示例：**

用户`mid=2`的投币列表

```shell
curl -G 'https://app.bilibili.com/x/v2/space/coinarc' \
  --data-urlencode 'appkey=1d8b6e7d45233436' \
  --data-urlencode 'access_key=xxx' \
  --data-urlencode 'vmid=2' \
  --data-urlencode 'ps=2' \
  --data-urlencode 'pn=1' \
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "count": 2,
        "item": [
            {
                "title": "请打开麦克风交流",
                "subtitle": "",
                "tname": "",
                "cover": "http://i1.hdslb.com/bfs/archive/cf9aea43b72354ee8c9486e4bf8e07cb38920a65.jpg",
                "cover_icon": "",
                "uri": "bilibili://video/496832459?player_width=1080\u0026player_height=1920\u0026player_rotate=0",
                "param": "496832459",
                "goto": "av",
                "length": "",
                "duration": 134,
                "is_popular": false,
                "is_steins": false,
                "is_ugcpay": false,
                "is_cooperation": false,
                "is_pgc": false,
                "is_live_playback": false,
                "is_pugv": false,
                "is_fold": false,
                "play": 706480,
                "danmaku": 167,
                "ctime": 1706431476,
                "ugc_pay": 0,
                "author": "三个猪鼓励",
                "state": true,
                "videos": 0,
                "view_content": "70.6万",
                "icon_type": 0,
                "publish_time_text": ""
            },
            {
                "title": "【裏命】地球的内部【いよわ】【中文CC字幕】",
                "subtitle": "",
                "tname": "",
                "cover": "http://i0.hdslb.com/bfs/archive/e087224ae4a5ff9ef3f2f6b7644d635276b8f5c6.jpg",
                "cover_icon": "",
                "uri": "bilibili://video/860645391?player_width=1920\u0026player_height=1080\u0026player_rotate=0",
                "param": "860645391",
                "goto": "av",
                "length": "",
                "duration": 264,
                "is_popular": false,
                "is_steins": false,
                "is_ugcpay": false,
                "is_cooperation": false,
                "is_pgc": false,
                "is_live_playback": false,
                "is_pugv": false,
                "is_fold": false,
                "play": 194375,
                "danmaku": 173,
                "ctime": 1669713070,
                "ugc_pay": 0,
                "author": "精神安定剤",
                "state": true,
                "videos": 0,
                "view_content": "19.4万",
                "icon_type": 0,
                "publish_time_text": ""
            }
        ]
    }
}
```

</details>

#### 查询用户最近点赞视频（Web）

> https://api.bilibili.com/x/space/like/video

*请求方式：GET*

认证方式：Cookie（SESSDATA）

如设置隐私查看自己的需要认证

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | --------- | ------ | ---- |
| vmid   | num  | 目标用户mid | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型                            | 内容     | 备注                                                       |
| ------- | ------------------------------- | -------- | ---------------------------------------------------------- |
| code    | num                             | 返回值   | 0：成功<br />-400：请求错误<br />53013：用户隐私设置未公开 |
| message | str                             | 错误信息 | 默认为0                                                    |
| ttl     | num                             | 1        |                                                            |
| data    | 隐藏时：null<br />公开时：array | 信息本体 |                                                            |

`data`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | obj  | 点赞视频1       |      |
| n    | obj  | 点赞视频（n+1） |      |
| ……   | obj  | ……              |      |

`data`数组中的对象：

基本与[获取视频详细信息（web端）](../video/info.md#获取视频详细信息web端)中`data`对象字段一致

**示例：**

查看用户`mid=15858903`的最近点赞视频

```shell
curl -G 'http://space.bilibili.com/x/space/like/video' \
  --data-urlencode 'vmid=15858903' \
  -b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "list": [
            {
                "aid": 1700085880,
                "videos": 1,
                "tid": 21,
                "tname": "日常",
                "copyright": 1,
                "pic": "http://i0.hdslb.com/bfs/archive/7fad4ca408c66eb7ea72188f56bcf952306d5807.jpg",
                "title": "你是从什么时候，意识到自己缺爱的呢？",
                "pubdate": 1706706000,
                "ctime": 1706602115,
                "desc": "关于个人情感问题，私信发“2024”我来帮你~",
                "state": 0,
                "duration": 91,
                "mission_id": 4009559,
                "rights": {
                    "bp": 0,
                    "elec": 0,
                    "download": 0,
                    "movie": 0,
                    "pay": 0,
                    "hd5": 0,
                    "no_reprint": 1,
                    "autoplay": 1,
                    "ugc_pay": 0,
                    "is_cooperation": 0,
                    "ugc_pay_preview": 0,
                    "no_background": 0,
                    "arc_pay": 0,
                    "pay_free_watch": 0
                },
                "owner": {
                    "mid": 2104592226,
                    "name": "鲸落艳红尘",
                    "face": "https://i0.hdslb.com/bfs/face/80160fbcf71958e6f5ad3a4fdfa39a55cc0699a5.jpg"
                },
                "stat": {
                    "aid": 1700085880,
                    "view": 930,
                    "danmaku": 1,
                    "reply": 5,
                    "favorite": 18,
                    "coin": 0,
                    "share": 4,
                    "now_rank": 0,
                    "his_rank": 0,
                    "like": 27,
                    "dislike": 0,
                    "vt": 0,
                    "vv": 930
                },
                "dynamic": "",
                "cid": 1424231007,
                "dimension": {
                    "width": 1920,
                    "height": 1080,
                    "rotate": 0
                },
                "short_link_v2": "https://b23.tv/BV1XK421y7ZL",
                "first_frame": "http://i2.hdslb.com/bfs/storyff/n240130sa1k9birz4lwlsm21ya1w3p2c_firsti.jpg",
                "pub_location": "湖北",
                "bvid": "BV1XK421y7ZL",
                "inter_video": false,
                "resource_type": "ugc",
                "subtitle": "",
                "enable_vt": 0
            },
            {
                "aid": 836926413,
                "videos": 1,
                "tid": 21,
                "tname": "日常",
                "copyright": 1,
                "pic": "http://i2.hdslb.com/bfs/archive/dceaf79d1cc4f74ab8cd862f454a8ec4b4a44343.jpg",
                "title": "内心的创伤，是建立深度亲密关系的桥梁！",
                "pubdate": 1706594400,
                "ctime": 1706515438,
                "desc": "关于个人情感问题，私信发“2024”我来帮你~",
                "state": 0,
                "duration": 297,
                "mission_id": 4009559,
                "rights": {
                    "bp": 0,
                    "elec": 0,
                    "download": 0,
                    "movie": 0,
                    "pay": 0,
                    "hd5": 0,
                    "no_reprint": 1,
                    "autoplay": 1,
                    "ugc_pay": 0,
                    "is_cooperation": 0,
                    "ugc_pay_preview": 0,
                    "no_background": 0,
                    "arc_pay": 0,
                    "pay_free_watch": 0
                },
                "owner": {
                    "mid": 2104592226,
                    "name": "鲸落艳红尘",
                    "face": "https://i0.hdslb.com/bfs/face/80160fbcf71958e6f5ad3a4fdfa39a55cc0699a5.jpg"
                },
                "stat": {
                    "aid": 836926413,
                    "view": 1903,
                    "danmaku": 0,
                    "reply": 7,
                    "favorite": 142,
                    "coin": 34,
                    "share": 30,
                    "now_rank": 0,
                    "his_rank": 0,
                    "like": 118,
                    "dislike": 0,
                    "vt": 0,
                    "vv": 1903
                },
                "dynamic": "",
                "cid": 1423127570,
                "dimension": {
                    "width": 1920,
                    "height": 1080,
                    "rotate": 0
                },
                "short_link_v2": "https://b23.tv/BV1xg4y1e7kY",
                "first_frame": "http://i0.hdslb.com/bfs/storyff/n240129qn55at7dr1775k12hp34tw284_firsti.jpg",
                "pub_location": "湖北",
                "bvid": "BV1xg4y1e7kY",
                "inter_video": false,
                "resource_type": "ugc",
                "subtitle": "",
                "enable_vt": 0
            },
            ……
        ]
    }
}
```

</details>

#### 查询用户最近点赞视频（APP）

> https://app.bilibili.com/x/v2/space/likearc

*请求方式：GET*

认证方式：APP

如设置隐私查看自己的需要认证

**url参数：**

| 参数名      | 类型 | 内容        | 必要性 | 备注     |
| ---------- | ---- | ----------- | ------ | -------- |
| access_key | str  | APP登录Token | APP方式必要    |      |
| appkey     | str  | APP密钥    | APP方式必要 |      |
| vmid       | num  | 目标用户mid | 必要   |           |
| pn         | num  | 页码        | 非必要 | 默认为1   |
| ps         | num  | 每页项数    | 非必要 | 默认为20  |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注       |
| ------- | ---- | -------- | ---------- |
| code    | num  | 返回值   | 0：成功     |
| message | str  | 错误信息 | 默认为0     |
| ttl     | num  | 1        |            |
| data    | obj  | 信息本体 |            |

`data`对象：

| 字段   | 类型  | 内容         | 备注 |
| ------ | ----- | ---------- | ---- |
| count  | num   | 点赞的视频数 |      |
| item   | array | 点赞视频列表 |      |

`item`数组：

| 项   | 类型  | 内容               | 备注 |
| ---- | ---- | ------------------ | ---- |
| 0    | obj  | 点赞的视频信息1      |      |
| n    | obj  | 点赞的视频信息（n+1） |      |
| ……   | obj  | ……                 |      |

`item`数组中的对象：

| 字段               | 类型 | 内容          | 备注                    |
| ----------------- | ---- | ------------ | ---------------------- |
| title             | str  | 稿件标题       |                        |
| subtitle          | str  | 空            |                        |
| tname             | str  | 空            |                        |
| cover             | str  | 封面图片 url   |                        |
| cover_icon        | str  | 空            |                        |
| uri               | str  | APP 跳转 uri  | 如`bilibili://video/2` |
| param             | str  | 稿件 avid     |                        |
| goto              | str  | av           |                        |
| length            | num  | 空           |                        |
| duration          | num  | 稿件视频长度   | 单位为秒                |
| is_popular        | bool | （？）        |                        |
| is_steins         | bool | （？）        |                        |
| is_ugcpay         | bool | （？）        |                        |
| is_cooperation    | str  | （？）        |                        |
| is_pgc            | str  | （？）        |                        |
| is_live_playback  | str  | （？）        |                        |
| is_pugv           | str  | （？）        |                        |
| is_fold           | num  | （？）        |                        |
| play              | num  | 播放量        |                        |
| danmaku           | num  | 弹幕量        |                        |
| ctime             | num  | 发布时间      | 时间戳                  |
| ugc_pay           | num  | 0            |                        |
| author            | str  | UP主昵称      |                        |
| state             | bool | true         |                        |
| videos            | num  | 0            |                        |
| view_content      | str  | 稿件播放量文案 |                        |
| icon_type         | num  | 0            |                        |
| publish_time_text | str  | 空           |                        |

**示例：**

用户`mid=2`的点赞列表

```shell
curl -G 'https://app.bilibili.com/x/v2/space/likearc' \
  --data-urlencode 'appkey=1d8b6e7d45233436' \
  --data-urlencode 'access_key=xxx' \
  --data-urlencode 'vmid=2' \
  --data-urlencode 'ps=2' \
  --data-urlencode 'pn=1' \
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "count": 2,
        "item": [
            {
                "title": "兄弟难舍也难分",
                "subtitle": "",
                "tname": "",
                "cover": "http://i1.hdslb.com/bfs/archive/58f031a52eab6d5faec5a39dfaab5728f65672d5.jpg",
                "cover_icon": "",
                "uri": "bilibili://video/624351941?player_width=1080\u0026player_height=1920\u0026player_rotate=0",
                "param": "624351941",
                "goto": "av",
                "length": "",
                "duration": 216,
                "is_popular": false,
                "is_steins": false,
                "is_ugcpay": false,
                "is_cooperation": false,
                "is_pgc": false,
                "is_live_playback": false,
                "is_pugv": false,
                "is_fold": false,
                "play": 423652,
                "danmaku": 362,
                "ctime": 1706320200,
                "ugc_pay": 0,
                "author": "甜蜜老张",
                "state": true,
                "videos": 0,
                "view_content": "42.4万",
                "icon_type": 0,
                "publish_time_text": ""
            },
            {
                "title": "技能搭配不累，共赴热血团战！",
                "subtitle": "",
                "tname": "",
                "cover": "http://i2.hdslb.com/bfs/archive/2094b8e0be819222d320e2841ee1c39f5f2e4357.jpg",
                "cover_icon": "",
                "uri": "bilibili://video/793597196?player_width=1280\u0026player_height=720\u0026player_rotate=0",
                "param": "793597196",
                "goto": "av",
                "length": "",
                "duration": 41,
                "is_popular": false,
                "is_steins": false,
                "is_ugcpay": false,
                "is_cooperation": false,
                "is_pgc": false,
                "is_live_playback": false,
                "is_pugv": false,
                "is_fold": false,
                "play": 1237,
                "danmaku": 2,
                "ctime": 1704855559,
                "ugc_pay": 0,
                "author": "38047aa1-cb8a-4",
                "state": true,
                "videos": 0,
                "view_content": "1237",
                "icon_type": 0,
                "publish_time_text": ""
            }
        ]
    }
}
```

</details>

## 投稿

<img src="../../assets/img/video_up.svg" width="100" height="100" />

### 查询用户投稿视频明细

> https://api.bilibili.com/x/space/wbi/arc/search

> ~~https://api.bilibili.com/x/space/arc/search~~ （已废弃，保留是方便遇到问题的人搜索到此处）

*请求方式：GET*

鉴权方式：[Wbi 签名](../misc/sign/wbi.md)

另见 [根据关键词查找视频](../video/collection.md#根据关键词查找视频), 功能基本相同, 暂未发现风控校验

**url参数：**

| 参数名  | 类型 | 内容         | 必要性 | 备注                                                                          |
| ------- | ---- | ------------ | ------ | ----------------------------------------------------------------------------- |
| mid     | num  | 目标用户mid  | 必要   |                                                                               |
| order   | str  | 排序方式     | 非必要 | 默认为pubdate<br />最新发布：pubdate<br />最多播放：click<br />最多收藏：stow |
| tid     | num  | 筛选目标分区 | 非必要 | 默认为0<br />0：不进行分区筛选<br />分区tid为所筛选的分区                     |
| keyword | str  | 关键词筛选   | 非必要 | 用于使用关键词搜索该UP主视频稿件                                              |
| pn      | num  | 页码         | 非必要 | 默认为 `1`                                                                    |
| ps      | num  | 每页项数     | 非必要 | 默认为 `30`                                                                   |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-412：请求被拦截 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        |                 |
| data    | obj  | 信息本体 |                             |

`data`对象：

| 字段            | 类型 | 内容           | 备注 |
| --------------- | ---- | -------------- | ---- |
| list            | obj  | 列表信息       |      |
| page            | obj  | 页面信息       |      |
| episodic_button | obj  | “播放全部“按钮 |      |
| is_risk         | bool |                |      |
| gaia_res_type   | num  |                |      |
| gaia_data       | obj  |                |      |

`data`中的`list`对象：

| 字段  | 类型   | 内容             | 备注 |
| ----- | ------ | ---------------- | ---- |
| slist | array  | 空数组           |      |
| tlist | obj    | 投稿视频分区索引 |      |
| vlist | array | 投稿视频列表     |      |

`list`中的`tlist`对象：

| 字段  | 类型 | 内容         | 备注                  |
| ----- | ---- | ------------ | --------------------- |
| {tid} | obj  | 该分区的详情 | 字段名为存在的分区tid |
| ……    | obj  | ……           | 向下扩展              |

`tlist`中的`{tid}`对象：

| 字段  | 类型 | 内容                 | 备注 |
| ----- | ---- | -------------------- | ---- |
| count | num  | 投稿至该分区的视频数 |      |
| name  | str  | 该分区名称           |      |
| tid   | num  | 该分区tid            |      |

`list`中的`vlist`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | obj  | 投稿视频1       |      |
| n    | obj  | 投稿视频（n+1） |      |
| ……   | obj  | ……              | ……   |

`list`中的`vlist`数组中的对象：

| 字段               | 类型 | 内容           | 备注                         |
| ------------------ | ---- | -------------- | ---------------------------- |
| aid                | num  | 稿件avid       |                              |
| attribute          | num  |                |                              |
| author             | str  | 视频UP主       | 不一定为目标用户（合作视频） |
| bvid               | str  | 稿件bvid       |                              |
| comment            | num  | 视频评论数     |                              |
| copyright          | str  | 视频版权类型   |                              |
| created            | num  | 投稿时间       | 时间戳                       |
| description        | str  | 视频简介       |                              |
| elec_arc_type      | num  | 充电为1，否则0 | 可能还有其他情况             |
| enable_vt          | num  | 0              | 作用尚不明确                 |
| hide_click         | bool | false          | 作用尚不明确                 |
| is_avoided         | num  | 0              | 作用尚不明确                 |
| is_charging_arc    | bool | 是否为充电视频 |                              |
| is_lesson_video    | num  | 是否为课堂视频 | 0：否<br />1：是             |
| is_lesson_finished | num  | 课堂是否已完结 | 0：否<br />1：是             |
| is_live_playback   | num  | 是否为直播回放 | 0：否<br />1：是             |
| is_pay             | num  | 0              | 作用尚不明确                 |
| is_self_view       | bool | 是否仅自己可见 |                           |
| is_steins_gate     | num  | 是否为互动视频 | 0：否<br />1：是             |
| is_union_video     | num  | 是否为合作视频 | 0：否<br />1：是             |
| jump_url           | str  | 跳转链接       | 跳转到课堂的链接，否则为""   |
| length             | str  | 视频长度       | MM:SS                        |
| mid                | num  | 视频UP主mid    | 不一定为目标用户（合作视频） |
| meta               | obj  | 所属合集或课堂 | 无数据时为 null              |
| pic                | str  | 视频封面       |                              |
| play               | num  | 视频播放次数   |                              |
| playback_position  | num  | 百分比播放进度 | 封面下方显示的粉色条         |
| review             | num  | 0              | 作用尚不明确                 |
| season_id          | num  | 合集或课堂编号 | 都不属于时为0                |
| subtitle           | str  | 空             | 作用尚不明确                 |
| title              | str  | 视频标题       |                              |
| typeid             | num  | 视频分区tid    |                              |
| video_review       | num  | 视频弹幕数     |                              |
| vt                 | num  | 0              | 作用尚不明确                 |
| vt_display         | str  | 空             | 作用尚不明确                 |

`list`中的`vlist`数组中的对象中的`meta`对象：

| 字段       | 类型 | 内容         | 备注             |
| ---------- | ---- | ------------ | ---------------- |
| attribute  | num  | 0            | 作用尚不明确     |
| cover      | str  | 合集封面URL  |                  |
| ep_count   | num  | 合集视频数量 |                  |
| ep_num     | num  | 合集视频数量 |                  |
| first_aid  | num  | 首个视频av号 |                  |
| id         | num  | 合集id       |                  |
| intro      | str  | 合集介绍     |                  |
| mid        | num  | UP主uid      | 若为课堂，则为0  |
| ptime      | num  | unix时间(s)  | 最后更新时间     |
| sign_state | num  | 0            | 作用尚不明确     |
| stat       | obj  | 合集统计数据 |                  |
| title      | str  | 合集名称     |                  |

`list`中的`vlist`数组中的对象中的`meta`对象中的`stat`对象：

| 字段       | 类型 | 内容         | 备注                 |
| ---------- | ---- | ------------ | -------------------- |
| coin       | num  | 合集总投币数 |                      |
| danmaku    | num  | 合集总弹幕数 |                      |
| favorite   | num  | 合集总收藏数 |                      |
| like       | num  | 合集总点赞数 |                      |
| mtime      | num  | unix时间(s)  | 其他统计数据更新时间 |
| reply      | num  | 合集总评论数 |                      |
| season_id  | num  | 合集id       |                      |
| share      | num  | 合集总分享数 |                      |
| view       | num  | 合集总播放量 |                      |
| vt         | num  | 0            | 作用尚不明确         |
| vv         | num  | 0            | 作用尚不明确         |

`data`中的`page`对象：

| 字段  | 类型 | 内容       | 备注 |
| ----- | ---- | ---------- | ---- |
| count | num  | 总计稿件数 |      |
| pn    | num  | 当前页码   |      |
| ps    | num  | 每页项数   |      |

`data`中的`episodic_button`对象：

| 字段 | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| text | str  | 按钮文字      |      |
| uri  | str  | 全部播放页url |      |

**示例：**

`pn`（页码）和`ps`（每页项数）只改变`vlist`中成员的多少与内容

以每页2项查询用户`mid=53456`的第1页投稿视频明细

```shell
curl -G 'https://api.bilibili.com/x/space/arc/search' \
--data-urlencode 'mid=53456' \
--data-urlencode 'ps=2' \
--data-urlencode 'pn=1'
```

<details>
<summary>查看响应示例：</summary>

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"list": {
			"slist": [],
			"tlist": {
				"1": {
					"tid": 1,
					"count": 3,
					"name": "动画"
				},
				"129": {
					"tid": 129,
					"count": 1,
					"name": "舞蹈"
				},
				"160": {
					"tid": 160,
					"count": 96,
					"name": "生活"
				},
				"177": {
					"tid": 177,
					"count": 4,
					"name": "纪录片"
				},
				"181": {
					"tid": 181,
					"count": 50,
					"name": "影视"
				},
				"188": {
					"tid": 188,
					"count": 444,
					"name": "科技"
				},
				"196": {
					"tid": 196,
					"count": 2,
					"name": "课堂"
				}
			},
			"vlist": [{
				"comment": 985,
				"typeid": 250,
				"play": 224185,
				"pic": "http://i0.hdslb.com/bfs/archive/5e56c10a9bd67f2fcac46fdd0fc2caa8769700c8.jpg",
				"subtitle": "",
				"description": "这一次，我们的样片日记首次来到了西藏，在桃花季开启了藏东样片之旅！这趟“开荒”之旅我们跋山涉水，一路硬刚，多亏有路虎卫士这样的神队友撑全场！这次的素材我们也上传到了官网（ysjf.com/material），欢迎大家去看看~如果你喜欢这期视频，请多多支持我们，并把视频分享给你的朋友们一起看看！",
				"copyright": "1",
				"title": "和朋友去西藏拍样片日记……",
				"review": 0,
				"author": "影视飓风",
				"mid": 946974,
				"created": 1745290800,
				"length": "22:11",
				"video_review": 2365,
				"aid": 114375683741573,
				"bvid": "BV1ac5yzhE94",
				"hide_click": false,
				"is_pay": 0,
				"is_union_video": 1,
				"is_steins_gate": 0,
				"is_live_playback": 0,
				"is_lesson_video": 0,
				"is_lesson_finished": 0,
				"lesson_update_info": "",
				"jump_url": "",
				"meta": {
					"id": 2046621,
					"title": "样片日记",
					"cover": "https://archive.biliimg.com/bfs/archive/e2ca3e5a6672cf35c9e61ac02e8d739cc0aafa8b.jpg",
					"mid": 946974,
					"intro": "",
					"sign_state": 0,
					"attribute": 140,
					"stat": {
						"season_id": 2046621,
						"view": 31755096,
						"danmaku": 171253,
						"reply": 33685,
						"favorite": 409505,
						"coin": 935105,
						"share": 199467,
						"like": 1791607,
						"mtime": 1745309513,
						"vt": 0,
						"vv": 0
					},
					"ep_count": 13,
					"first_aid": 238588630,
					"ptime": 1745290800,
					"ep_num": 13
				},
				"is_avoided": 0,
				"season_id": 2046621,
				"attribute": 16793984,
				"is_charging_arc": false,
				"elec_arc_type": 0,
				"vt": 0,
				"enable_vt": 0,
				"vt_display": "",
				"playback_position": 0,
				"is_self_view": false
			}, {
				"comment": 0,
				"typeid": 197,
				"play": 8506,
				"pic": "https://archive.biliimg.com/bfs/archive/489f3df26a190a152ad479bfe50a73f1cd4c43c5.jpg",
				"subtitle": "",
				"description": "8节课，Tim和青青带你用iPhone拍出电影感",
				"copyright": "1",
				"title": "【影视飓风】只看8节课，用iPhone拍出电影感",
				"review": 0,
				"author": "影视飓风",
				"mid": 946974,
				"created": 1744865737,
				"length": "00:00",
				"video_review": 9,
				"aid": 114351440726681,
				"bvid": "BV1WB5ezxEnz",
				"hide_click": false,
				"is_pay": 0,
				"is_union_video": 0,
				"is_steins_gate": 0,
				"is_live_playback": 0,
				"is_lesson_video": 1,
				"is_lesson_finished": 1,
				"lesson_update_info": "8",
				"jump_url": "https://www.bilibili.com/cheese/play/ss190402215",
				"meta": {
					"id": 190402215,
					"title": "【影视飓风】只看8节课，用iPhone拍出电影感",
					"cover": "https://archive.biliimg.com/bfs/archive/489f3df26a190a152ad479bfe50a73f1cd4c43c5.jpg",
					"mid": 0,
					"intro": "",
					"sign_state": 0,
					"attribute": 0,
					"stat": {
						"season_id": 190402215,
						"view": 1111222,
						"danmaku": 1853,
						"reply": 0,
						"favorite": 0,
						"coin": 0,
						"share": 0,
						"like": 0,
						"mtime": 0,
						"vt": 0,
						"vv": 0
					},
					"ep_count": 0,
					"ptime": 1744865737,
					"ep_num": 0
				},
				"is_avoided": 0,
				"season_id": 190402215,
				"attribute": 1073758592,
				"is_charging_arc": false,
				"elec_arc_type": 0,
				"vt": 0,
				"enable_vt": 0,
				"vt_display": "",
				"playback_position": 0,
				"is_self_view": false
			}]
		},
		"page": {
			"pn": 1,
			"ps": 42,
			"count": 786
		},
		"episodic_button": {
			"text": "播放全部",
			"uri": "//www.bilibili.com/medialist/play/946974?from=space"
		},
		"is_risk": false,
		"gaia_res_type": 0,
		"gaia_data": null
	}
}
```

</details>


### 查询用户投稿明细（APP、无需wbi鉴权）

> https://app.biliapi.com/x/v2/space/archive/cursor

*请求方式：GET*

可以获取APP端可获得的用户空间投稿所有信息

APP端请求对web端包容度最高，无需Cookie以外的任何认证，只需填写vmid即可查询

**url参数：**

| 参数名        | 类型 | 内容                     | 必要性          | 备注          |
| ------------- | ---- | ----------------------- | -------------- | ------------- |
| vmid          | num  | 目标用户mid             | 必要            |               |
| aid           | num  | 请求返回起始视频         | 首次请求不需要   | 填写上次请求返回最后视频的aid  |
| order         | str  | 排序方式                | 非必要          | `click`代表最多播放，`pubdate`代表最新发布 |
| sort          | str  | 确有影响，但这是什么呢？  | 非必要          | 创建时间: asc<br />修改时间: desc |
| access_key    | str  | APP登录Token            | APP方式必要     |               |
| appkey        | str  | APP密钥                 | APP方式必要     |               |
| build         | num  | 版本                    | APP方式必要     | 可为`8130300` |
| c_locale      | str  | 语言                    | 非必要          | zh_CN         |
| channel       | num  | 频道                    | 非必要          |               |
| fnval         | num  | 视频流类型               | 非必要          |               |
| fnver         | num  | 请求时提供的fnver        | 非必要          | 可为 0         |
| force_host    | num  | 源url类型               | 非必要           |  0:无限制 1:使用http 2:使用https    |
| fourk         | num  | 是否允许 4K 视频         | 非必要          | 画质最高 1080P：0（默认）<br />画质最高 4K：1    |
| include_cursor| bool | 未知                    | 非必要          | 可为false      |
| mobi_app      | str  | 平台标识                | 非必要          | 可为 `web`、`android` 等 |
| platform      | str  | 平台                    | 非必要          | 可为`web`     |
| ps            | int  | 每页条数                | 非必要          | 默认为 `20`    |
| pn            | int  | 似乎不是页码             | 非必要          | 默认为 `32`    |
| pn_policy     | int  | 未知                    | 非必要          | 可为 `1`       |
| s_locale      | str  | 语言                    | 非必要          | zh_CN          |
| statistics    | str  | 位置                    | 非必要           | 可为{"appId":1,"platform":3,"version":"8.13.0","abtest":""} |
| ts            | num  | 秒级时间戳               | 非必要          |               |
| voice_balance | num  | 未知                     | 非必要          |  默认为 `1`   |
| sign          | str  | APP签名                  | APP方式必要     |               |

**json回复：**

| 字段    | 类型  | 内容     | 备注                          |
| ------- | ---- | -------- | ---------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误    |
| message | str  | 错误信息 | 默认为0                       |
| ttl     | num  | 1       |                               |
| data    | obj  | 视频信息 |                               |

`data`对象：

| 字段                  | 类型    | 内容          | 备注                          |
| --------------------- | ------ | ------------- | ----------------------------- |
| count                 | num    | 总数           | 0：成功<br />-400：请求错误    |
| episodic_button       | obj    | 播放按钮       | 播放按钮的显示文字与跳转链接    |
| has_next              | bool   | 有无后续       | true：有；false：没有          |
| has_prev              | bool   | 有无前置       | true：有；false：没有          |
| item                  | array  | 视频列表       | 注意是item没有复数             |
| last_watched_locator  | obj    | 上次播放定位   | 上次播放定位的一些信息          |
| order                 | array  | 排列方式       | 排列方式的显示与值             |

`episodic_button`对象

| 字段  | 类型    | 内容              | 备注    |
| ----- | ------ | ----------------- | ------ |
| text  | str    | 四个大字“播放全部” |         |
| uri   | str    | 跳转链接           |        |

`item`数组：

| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------ | ---- |
| 0    | obj  | 视频信息1     |      |
| n    | obj  | 视频信息(n+1) |      |
| ……   | obj  | ……           | ……   |

`item`数组元素：

| 字段              | 类型   | 内容                     | 备注                      |
| ----------------- | ----- | ----------------------- | ------------------------ |
| author            | str   | 作者昵称                |                           |
| bvid              | str   | 视频bv号                |                           |
| cover             | str   | 封面url                 |                           |
| cover_icon        | str   | 封面icon？未知           |                           |
| ctime             | num   | 应该是发布时间秒级时间戳  |                           |
| cursor_attr       | obj   | 上次观看标记             |                           |
| danmaku           | num   | 弹幕数                  |                            |
| duration          | num   | 视频时长                |                            |
| first_cid         | num   | 首个频道cid             |                            |
| goto              | str   | 应该是跳转去向类型       | 已知av为视频                |
| icon_type         | num   | icon类型？未知          |                            |
| is_cooperation    | bool  | 是否为合作视频           | 如果true会有粉色合作视频标签 |
| is_fold           | bool  | 是否折叠？未知           |                            |
| is_live_playback  | bool  | 是否为直播回放           | 如果true会有粉色直播回放标签 |
| is_onself         | bool  | 是否自己？未知           |                            |
| is_pgc            | bool  | 是否开pgc               |                            |
| is_popular        | bool  | 是否上热门              | 如果true会有热门标签         |
| is_pugv           | bool  | 未知                    |                            |
| is_steins         | bool  | 未知                    |                            |
| is_ugcpay         | bool  | 未知                    |                            |
| length            | num   | 长度？未知              |                            |
| param             | str   | 参数，实际为视频aid      |                            |
| play              | num   | 播放量                  |                            |
| publish_time_text | str   | 发布时间汉字字符串版     |                            |
| state             | bool  | 状态？未知               |                            |
| subtitle          | str   | 子标题                  |                            |
| three_points      | array | 三点按钮内容             | 关于稍后再看和分享的显示内容 |
| title             | str   | 标题                    |                            |
| tname             | str   | tag的name               |                            |
| ugc_pay           | num   | ugc支付？未知            |                            |
| uri               | str   | APP 跳转 uri            |                            |
| video             | num   | 未知                    |                            |
| view_content      | str   | 播放量字符串版           |                            |

`item`元素中的`cursor_attr`对象：

| 字段                | 类型 | 内容                     | 备注                                    |
| ------------------- | ---- | ----------------------- | -------------------------------------- |
| is_last_watched_arc | bool | 是否为上次播放           | 如果ture则封面笼罩一层写有“上次播放”的灰幕 |
| rank                | num  | 视频所处该列表排名       |                                         |

`last_watched_locator`对象：

| 字段               | 类型   | 内容              | 备注    |
| ------------------ | ----- | ----------------- | ------ |
| display_threshold  | num   | 显示阈值          |         |
| insert_ranking     | num   | 嵌入排名          |         |
| text               | str   | 定位上次观看字样   |         |

`order`数组：

| 项   | 类型 | 内容          | 备注              |
| ---- | ---- | ------------ | ----------------- |
| 0    | obj  | 最新发布的内容 | 内包括文字和值    |
| 1    | obj  | 最多播放的内容 | 内包括文字和值    |

**示例：**

查询用户mid=1240283469的稿件
以播放量排序，显示3个稿件，但假设aid=1301087872及以前稿件已经加载过

> https://app.biliapi.com/x/v2/space/archive/cursor?vmid=1240283469&order=click&ps=3&aid=1301087872

输入浏览器

<details>
<summary>查看响应示例：</summary>

```json

{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "episodic_button": {
            "text": "播放全部",
            "uri": "bilibili://music/playlist/spacepage/1240283469?desc=1\u0026offset=0\u0026oid=0\u0026order=time\u0026page_type=1\u0026playlist_intro=UP%E4%B8%BB%E7%9A%84%E5%85%A8%E9%83%A8%E8%A7%86%E9%A2%91\u0026ps=20\u0026sort_field=2\u0026sort_hidden=1\u0026total_count=33\u0026user_name=%E7%A5%9E%E5%9D%A1%E5%86%9C%E8%8E%AB"
        },
        "order": [
            {
                "title": "最新发布",
                "value": "pubdate"
            },
            {
                "title": "最多播放",
                "value": "click"
            }
        ],
        "count": 33,
        "item": [
            {
                "title": "【神坡农二】后半段更是天籁！汉堡仙人神坡农二吃完快餐深情演唱《樱花树下的约定》",
                "subtitle": "",
                "tname": "搞笑",
                "cover": "http://i2.hdslb.com/bfs/archive/3e5d02f50b2e0a756cc5e3dd7f705abc58c3a439.jpg",
                "cover_icon": "",
                "uri": "bilibili://video/1351875564?history_progress=0\u0026player_height=1920\u0026player_rotate=0\u0026player_width=1080",
                "param": "1351875564",
                "goto": "av",
                "length": "",
                "duration": 45,
                "is_popular": false,
                "is_steins": false,
                "is_ugcpay": false,
                "is_cooperation": false,
                "is_pgc": false,
                "is_live_playback": false,
                "is_pugv": false,
                "is_fold": false,
                "is_oneself": false,
                "play": 1248,
                "danmaku": 1,
                "ctime": 1710518403,
                "ugc_pay": 0,
                "author": "神坡农莫",
                "state": false,
                "bvid": "BV1H6421w7Gy",
                "videos": 1,
                "three_point": [
                    {
                        "type": "addtoview",
                        "icon": "https://i0.hdslb.com/bfs/app/25cc01346574a601dafd45c94226d92a67eed79a.png",
                        "text": "添加至稍后再看"
                    },
                    {
                        "type": "share",
                        "icon": "https://i0.hdslb.com/bfs/app/a5787f586c72f2d6f6ade4b33c64908938c4a01f.png",
                        "text": "分享",
                        "share_succ_toast": "分享成功",
                        "share_fail_toast": "分享失败",
                        "share_path": "pages/video/video?avid=1351875564",
                        "short_link": "https://b23.tv/BV1H6421w7Gy"
                    }
                ],
                "first_cid": 1471110689,
                "cursor_attr": {
                    "is_last_watched_arc": false,
                    "rank": 1
                },
                "view_content": "1248",
                "icon_type": 0,
                "publish_time_text": "3月16日"
            },
            {
                "title": "【迪迦奥特曼】亲自配音？迪迦超战神联合网络新星神坡农二！共同打造奥特曼大电影！",
                "subtitle": "",
                "tname": "搞笑",
                "cover": "http://i0.hdslb.com/bfs/archive/c6c94d16aeeefca148c1694e45fd352b22cac3fb.jpg",
                "cover_icon": "",
                "uri": "bilibili://video/1950389780?history_progress=0\u0026player_height=1080\u0026player_rotate=0\u0026player_width=1920",
                "param": "1950389780",
                "goto": "av",
                "length": "",
                "duration": 101,
                "is_popular": false,
                "is_steins": false,
                "is_ugcpay": false,
                "is_cooperation": false,
                "is_pgc": false,
                "is_live_playback": false,
                "is_pugv": false,
                "is_fold": false,
                "is_oneself": false,
                "play": 1184,
                "danmaku": 0,
                "ctime": 1707431804,
                "ugc_pay": 0,
                "author": "神坡农莫",
                "state": false,
                "bvid": "BV1fC411x7uf",
                "videos": 1,
                "three_point": [
                    {
                        "type": "addtoview",
                        "icon": "https://i0.hdslb.com/bfs/app/25cc01346574a601dafd45c94226d92a67eed79a.png",
                        "text": "添加至稍后再看"
                    },
                    {
                        "type": "share",
                        "icon": "https://i0.hdslb.com/bfs/app/a5787f586c72f2d6f6ade4b33c64908938c4a01f.png",
                        "text": "分享",
                        "share_succ_toast": "分享成功",
                        "share_fail_toast": "分享失败",
                        "share_path": "pages/video/video?avid=1950389780",
                        "short_link": "https://b23.tv/BV1fC411x7uf"
                    }
                ],
                "first_cid": 1434820367,
                "cursor_attr": {
                    "is_last_watched_arc": false,
                    "rank": 2
                },
                "view_content": "1184",
                "icon_type": 0,
                "publish_time_text": "2月9日"
            }
        ],
        "last_watched_locator": {
            "display_threshold": 10,
            "insert_ranking": 6,
            "text": "定位至上次观看"
        },
        "has_next": true,
        "has_prev": true
    }
}

```

</details>


### 查询用户投稿相簿预览

<details>
<summary>相簿功能已下线, 以下接口失效, 参见
<a href="https://github.com/SocialSisterYi/bilibili-API-collect/issues/801">#801</a>
</summary>

> https://api.bilibili.com/x/space/album/index

*请求方式：GET*

所有类型的相簿

**url参数：**

| 参数名 | 类型 | 内容         | 必要性 | 备注    |
| ------ | ---- | ------------ | ------ | ------- |
| mid    | num  | 目标用户mid  | 必要   |         |
| ps     | num  | 获取的相簿量 | 非必要 | 默认为8 定义域 1-大于1700 (注意滥用风险) |

**json回复：**

根对象：

| 字段    | 类型   | 内容     | 备注                        |
| ------- | ------ | -------- | --------------------------- |
| code    | num    | 返回值   | 0：成功<br />-400：请求错误 |
| message | str    | 错误信息 | 默认为0                     |
| ttl     | num    | 1        |                 |
| data    | array | 相簿列表 |                             |

`data`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | obj  | 相簿内容1       |      |
| n    | obj  | 相簿内容（n+1） |      |
| ……   | obj  | ……              | ……   |

`data`数组中的对象：

| 字段        | 类型   | 内容        | 备注           |
| ----------- | ------ | ----------- | -------------- |
| count       | num    | 总计图片数  |                |
| ctime       | num    | 发布时间    | 时间戳         |
| description | str    | 简介        |                |
| doc_id      | num    | 相簿id     | 非动态！！！ |
| like        | num    | 点赞数      |                |
| pictures    | array | 图片内容    |                |
| poster_uid  | num    | 上传用户mid |                |
| title       | str    | 标题        | 动态内容无     |
| view        | num    | 浏览数      |                |

`data`数组中的对象中的`pictures`数组：

| 项   | 类型 | 内容            | 备注                  |
| ---- | ---- | --------------- | --------------------- |
| 0    | obj  | 内容图片1       |                       |
| n    | obj  | 内容图片（n+1） | 项数取决于`count`的值 |
| ……   | obj  | ……              | ……                    |

`pictures`数组中的对象：

| 字段       | 类型 | 内容     | 备注        |
| ---------- | ---- | -------- | ----------- |
| img_height | num  | 图片高度 |             |
| img_size   | num  | 图片大小 | 单位为KByte |
| img_src    | str  | 图片url  |             |
| img_width  | num  | 图片宽度 |             |

**示例：**

查询用户`mid=53456`的投稿相簿预览

```shell
curl -G 'https://api.bilibili.com/x/space/album/index' \
--data-urlencode 'mid=53456' \
--data-urlencode 'ps=2'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": [{
    "doc_id": 60470424,
    "poster_uid": 53456,
    "title": "",
    "description": "你醒啦！[tv_大佬]\n之前说到过的百万粉纪念的视频已经定时在了今天下午七点，欢迎来看呀！",
    "pictures": [{
      "img_src": "https://i0.hdslb.com/bfs/album/2840366e30bf7c0aba9da5adde1a771255a57bc7.jpg",
      "img_width": 625,
      "img_height": 134,
      "img_size": 14
    }],
    "count": 1,
    "ctime": 1583444859,
    "view": 1677521,
    "like": 29974
  }, {
    "doc_id": 58962388,
    "poster_uid": 53456,
    "title": "",
    "description": "上次的那些写实儿童画发出来啦！可以打印下来辟邪[tv_大佬]",
    "pictures": [{
      "img_src": "https://i0.hdslb.com/bfs/album/8acaf7c7897cb858cccab36c33a5e875adfef177.jpg",
      "img_width": 2172,
      "img_height": 3258,
      "img_size": 2831
    }, {
      "img_src": "https://i0.hdslb.com/bfs/album/1611b6b56d3d4328889a62b9f9bdc92e9d065532.jpg",
      "img_width": 3456,
      "img_height": 5184,
      "img_size": 3024
    }, {
      "img_src": "https://i0.hdslb.com/bfs/album/f3a30a2ef5b39711af8b945d54d85ffd1e932b8a.jpg",
      "img_width": 1200,
      "img_height": 757,
      "img_size": 313
    }],
    "count": 3,
    "ctime": 1582881332,
    "view": 1176646,
    "like": 25734
  }]
}
```

</details>

</details>

### 查询用户投稿相簿明细

<details>
<summary>
相簿功能已下线, 以下接口失效
</summary>

> https://api.vc.bilibili.com/link_draw/v1/doc/doc_list
> https://api.bilibili.com/x/dynamic/feed/draw/doc_list

*请求方式：GET*

**url参数：**

| 参数名    | 类型 | 内容        | 必要性 | 备注                                                         |
| --------- | ---- | ----------- | ------ | ------------------------------------------------------------ |
| uid       | num  | 目标用户mid | 必要   |                                                              |
| page_num  | num  | 页码        | 必要 | 默认为0                                                        |
| page_size | num  | 每页项数    | 必要 | 默认为30                                                       |
| biz       | str  | 查询类型    | 非必要 | 全部：all<br />绘画：draw<br />摄影：photo<br />日常：daily<br />默认为all |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注          |
| ------- | ---- | -------- | ------------- |
| code    | num  | 返回值   | 0：成功       |
| msg     | str  | 错误信息 | 默认为success |
| message | str  | 错误信息 | 默认为success |
| data    | obj  | 信息本体 |               |

`data`对象：

| 字段  | 类型   | 内容     | 备注 |
| ----- | ------ | -------- | ---- |
| items | array | 相簿列表 |      |

`items`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | obj  | 相簿内容1       |      |
| n    | obj  | 相簿内容（n+1） |      |
| ……   | obj  | ……              | ……   |

`items`数组中的对象：

| 字段        | 类型   | 内容        | 备注           |
| ----------- | ------ | ----------- | -------------- |
| count       | num    | 总计图片数  |                |
| ctime       | num    | 发布时间    | 时间戳         |
| description | str    | 简介        |                |
| doc_id      | num    | 相簿id     | 非动态！！！ |
| like        | num    | 点赞数      |                |
| pictures    | array | 图片内容    |                |
| poster_uid  | num    | 上传用户mid |                |
| title       | str    | 标题        | 动态内容无     |
| view        | num    | 浏览数      |                |

`items`数组中的对象中的`pictures`数组：

| 项   | 类型 | 内容            | 备注                  |
| ---- | ---- | --------------- | --------------------- |
| 0    | obj  | 内容图片1       |                       |
| n    | obj  | 内容图片（n+1） | 项数取决于`count`的值 |
| ……   | obj  | ……              | ……                    |

`pictures`数组中的对象：

| 字段       | 类型 | 内容     | 备注        |
| ---------- | ---- | -------- | ----------- |
| img_height | num  | 图片高度 |             |
| img_size   | num  | 图片大小 | 单位为KByte |
| img_src    | str  | 图片url  |             |
| img_width  | num  | 图片宽度 |             |

**示例：**

查询用户`mid=53456`的投稿明细中的全部类型

```shell
curl -G 'https://api.vc.bilibili.com/link_draw/v1/doc/doc_list' \
--data-urlencode 'uid=2' \
--data-urlencode 'page_num=1' \
--data-urlencode 'page_size=2' \
--data-urlencode 'biz=all'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "msg": "success",
  "message": "success",
  "data": {
    "items": [{
      "doc_id": 59015720,
      "poster_uid": 2,
      "title": "",
      "description": "6影是真的无脑，2个宝石都护不住（设计师：这真是太酷了）",
      "pictures": [{
        "img_src": "http://i0.hdslb.com/bfs/album/8456f050ec8639c6e0cef36aba27bfdedc550590.jpg",
        "img_width": 1824,
        "img_height": 840,
        "img_size": 1024
      }],
      "count": 1,
      "ctime": 1582894607,
      "view": 707073,
      "like": 7055
    }, {
      "doc_id": 46853140,
      "poster_uid": 2,
      "title": "",
      "description": "#年度报告# #新年Flag# https://www.bilibili.com/blackboard/timemachine2019.html\n决定了，这就是我的新年Flag！今年我一定要…",
      "pictures": [{
        "img_src": "http://i0.hdslb.com/bfs/album/5b3ae76f79d7cf2501afc3ca7c7da509dcf0e38a.jpg",
        "img_width": 1125,
        "img_height": 2184,
        "img_size": 465
      }, {
        "img_src": "http://i0.hdslb.com/bfs/album/87789fe9644337a1f7e6a0655a32584705af8bda.jpg",
        "img_width": 1125,
        "img_height": 2184,
        "img_size": 421
      }, {
        "img_src": "http://i0.hdslb.com/bfs/album/f752d7f3bb7952f6c0013b3f48ddcb07060b4721.jpg",
        "img_width": 1125,
        "img_height": 2184,
        "img_size": 524
      }, {
        "img_src": "http://i0.hdslb.com/bfs/active/7a52a411bccb716c8e67fe70e6c330d5209346de.jpg",
        "img_width": 1125,
        "img_height": 2184,
        "img_size": 534
      }],
      "count": 4,
      "ctime": 1577966163,
      "view": 833193,
      "like": 5667
    }]
  }
}
```

</details>

</details>

### 查询用户投稿专栏明细

> https://api.bilibili.com/x/space/wbi/article

> ~~https://api.bilibili.com/x/space/article~~（旧链接）

*请求方式：GET*

认证方式：Cookie（SESSDATA）

鉴权方式：[Wbi 签名](../misc/sign/wbi.md)

**url参数：**

| 参数名  | 类型  | 内容    | 必要性                                                                      | 备注  |
|------|-----|-------|--------------------------------------------------------------------------|-----|
| mid  | num | 用户uid |                                                                          | √   |
| pn   | num |       | 默认：1                                                                     |     |
| ps   | num |       | 默认：30<br/>范围：\[1,30\]                                                      |     |
| sort | str |       | `publish_time`：最新发布<br/>`view`：最多阅读<br/>`fav`：最多收藏<br/>默认：`publish_time` |     |

**json回复：**

根对象

| 字段      | 类型  | 内容   | 备注                 |
|---------|-----|------|--------------------|
| code    | num | 返回值  | 0：成功<br/>-400：请求错误 |
| message | str | 错误信息 | 默认为0               |
| ttl     | num | 1    |                    |
| data    | obj | 信息本体 |                    |

`data`对象

| 字段名      | 类型    | 内容       | 备注  |
|----------|-------|----------|-----|
| articles | array | 专栏文章信息列表 |     |
| pn       | num   | 本次请求分页页数 |     |
| ps       | num   | 本次请求分页大小 |     |
| count    | num   | 专栏文章总数   |     |

`data`对象 -> `articles`数组中的对象

| 字段名               | 类型    | 内容       | 备注   |
|-------------------|-------|----------|------|
| id                | num   | 专栏文章id   |      |
| category          | obj   | 分类       |      |
| categories        | array | 分类       |      |
| title             | str   | 标题       |      |
| summary           | str   | 摘要       |      |
| banner_url        | str   | 封面图      |      |
| template_id       | num   |          |      |
| state             | num   |          |      |
| author            | obj   | UP主信息    |      |
| reprint           | num   |          |      |
| image_urls        | array |          |      |
| publish_time      | num   | 发布时间戳    | 单位：秒 |
| ctime             | num   | 提交时间戳    | 单位：秒 |
| stats             | obj   | 专栏文章数据统计 |      |
| tags              | array | 标签       |      |
| words             | num   |          |      |
| dynamic           | str   | 粉丝动态文案   |      |
| origin_image_urls | array |          |      |
| list              |       | `null`   |      |
| is_like           | bool  |          |      |
| media             | obj   |          |      |
| apply_time        | str   | `空串`     |      |
| check_time        | str   | `空串`     |      |
| original          | num   |          |      |
| act_id            | num   |          |      |
| dispute           |       | `null`   |      |
| authenMark        |       | `null`   |      |
| cover_avid        | num   |          |      |
| top_video_info    |       | `null`   |      |
| type              | num   |          |      |

`data`对象 -> `articles`数组中的对象 -> `category`对象

| 字段名       | 类型  | 内容     | 备注  |
|-----------|-----|--------|-----|
| id        | num | 分类id   |     |
| parent_id | num | 父级分类id |     |
| name      | str | 分类名称   |     |

`data`对象 -> `articles`数组中的对象 -> `categories`数组中的对象

| 字段名       | 类型  | 内容     | 备注  |
|-----------|-----|--------|-----|
| id        | num | 分类id   |     |
| parent_id | num | 父级分类id |     |
| name      | str | 分类名称   |     |

`data`对象 -> `articles`数组中的对象 -> `author`对象

| 字段名             | 类型  | 内容     | 备注  |
|-----------------|-----|--------|-----|
| mid             | num | 用户uid  |     |
| name            | str | 用户名    |     |
| face            | str | 头像     |     |
| pendant         | obj | 头像框信息  |     |
| official_verify | obj | 账号认证信息 |     |
| nameplate       | obj | 成就勋章信息 |     |
| vip             | obj | 大会员信息  |     |

`data`对象 -> `articles`数组中的对象 -> `author`对象 -> `pendant`对象

| 字段名    | 类型  | 内容       | 备注  |
|--------|-----|----------|-----|
| pid    | num | 头像框id    |     |
| name   | str | 头像框名称    |     |
| image  | str | 头像框图片url |     |
| expire | num | 过期时间     |     |

`data`对象 -> `articles`数组中的对象 -> `author`对象 -> `official_verify`对象

| 字段名  | 类型  | 内容   | 备注                           |
|------|-----|------|------------------------------|
| type | num | 是否认证 | -1：无<br />0：个人认证<br />1：机构认证 |
| desc | str | 认证备注 |                              |

`data`对象 -> `articles`数组中的对象 -> `author`对象 -> `nameplate`对象

| 字段名         | 类型  | 内容      | 备注  |
|-------------|-----|---------|-----|
| nid         | num | 勋章id    |     |
| name        | str | 勋章名称    |     |
| image       | str | 勋章图标    |     |
| image_small | str | 勋章图标（小） |     |
| level       | str | 勋章等级    |     |
| condition   | str | 获取条件    |     |

`data`对象 -> `articles`数组中的对象 -> `author`对象 -> `vip`对象

| 字段名              | 类型  | 内容         | 备注                              |
|------------------|-----|------------|---------------------------------|
| type             | num | 大会员类型      | 0：无<br />1：月大会员<br />2：年度及以上大会员 |
| status           | num | 大会员状态      | 0：无<br />1：有                    |
| due_date         | num | 大会员过期时间时间戳 | 单位：毫秒                           |
| vip_pay_type     | num | 支付类型       |                                 |
| theme_type       | num | `0`        |                                 |
| label            | obj | 大会员标签      |                                 |
| avatar_subscript | num | 是否显示大会员图标  | 0：不显示<br />1：显示                 |
| nickname_color   | str | 大会员昵称颜色    |                                 |

`data`对象 -> `articles`数组中的对象 -> `author`对象 -> `vip`对象 -> `label`对象

| 字段名         | 类型  | 内容     | 备注                                                                                                                           |
|-------------|-----|--------|------------------------------------------------------------------------------------------------------------------------------|
| path        | str | `空串`   |                                                                                                                              |
| text        | str | 会员类型文案 | `大会员` `年度大会员` `十年大会员` `百年大会员` `最强绿鲤鱼`                                                                                        |
| label_theme | str | 会员标签   | vip：大会员<br />annual_vip：年度大会员<br />ten_annual_vip：十年大会员<br />hundred_annual_vip：百年大会员<br/>fools_day_hundred_annual_vip：最强绿鲤鱼 |

`data`对象 -> `articles`数组中的对象 -> `stats`对象

| 字段名      | 类型  | 内容  | 备注    |
|----------|-----|-----|-------|
| view     | num | 浏览数 |       |
| favorite | num | 收藏数 |       |
| like     | num | 点赞数 |       |
| dislike  | num | 点踩数 | 恒为`0` |
| reply    | num | 回复数 |       |
| share    | num | 转发数 |       |
| coin     | num | 投币数 |       |
| dynamic  | num |     |       |

`data`对象 -> `articles`数组中的对象 -> `tags`数组中的对象

| 字段名  | 类型  | 内容   | 备注  |
|------|-----|------|-----|
| tid  | num | 标签id |     |
| name | str | 标签名称 |     |

`data`对象 -> `articles`数组中的对象 -> `media`对象

| 字段名       | 类型  | 内容   | 备注  |
|-----------|-----|------|-----|
| score     | num | `0`  |     |
| media_id  | num | `0`  |     |
| title     | str | `空串` |     |
| cover     | str | `空串` |     |
| area      | str | `空串` |     |
| type_id   | num | `0`  |     |
| type_name | str | `空串` |     |
| spoiler   | num | `0`  |     |

**示例：**

```shell
curl -L -X GET 'https://api.bilibili.com/x/space/article?mid=300021061&pn=1&ps=2&sort=publish_time'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "articles": [
      {
        "id": 18989884,
        "category": {
          "id": 15,
          "parent_id": 3,
          "name": "日常"
        },
        "categories": [
          {
            "id": 3,
            "parent_id": 0,
            "name": "生活"
          },
          {
            "id": 15,
            "parent_id": 3,
            "name": "日常"
          }
        ],
        "title": "B站UP主日报2022年10月08日23点（v1.1）",
        "summary": "冠：罗翔说刑法(2485.45万粉,+7204) 涨：肯德基(+18.37万粉) 掉：Overidea_China(-186850粉) 播：开心锤锤(+927.56万) 赞：荒草音乐(+31.02万) 赞：飞翔的丘丘人(+22.08万) 充：冰糖IO(+210)",
        "banner_url": "https://i0.hdslb.com/bfs/article/5e53260f58f77fff0b8ba6b20179db85b8741b76.jpg",
        "template_id": 4,
        "state": 0,
        "author": {
          "mid": 300021061,
          "name": "狸工智能",
          "face": "https://i1.hdslb.com/bfs/face/4cba9bc9d6cf6935a37ec156dedb8f8d26c1df95.jpg",
          "pendant": {
            "pid": 0,
            "name": "",
            "image": "",
            "expire": 0
          },
          "official_verify": {
            "type": -1,
            "desc": ""
          },
          "nameplate": {
            "nid": 3,
            "name": "白银殿堂",
            "image": "https://i2.hdslb.com/bfs/face/f6a31275029365ae5dc710006585ddcf1139bde1.png",
            "image_small": "https://i2.hdslb.com/bfs/face/b09cdb4c119c467cf2d15db5263b4f539fa6e30b.png",
            "level": "高级勋章",
            "condition": "单个自制视频总播放数>=10万"
          },
          "vip": {
            "type": 0,
            "status": 0,
            "due_date": 0,
            "vip_pay_type": 0,
            "theme_type": 0,
            "label": {
              "path": "",
              "text": "",
              "label_theme": ""
            },
            "avatar_subscript": 0,
            "nickname_color": ""
          }
        },
        "reprint": 0,
        "image_urls": [
          "https://i0.hdslb.com/bfs/article/8e5497f7854e7df3468fbc29b0dd10fcf17d1223.png"
        ],
        "publish_time": 1665278884,
        "ctime": 1665278884,
        "stats": {
          "view": 689,
          "favorite": 2,
          "like": 61,
          "dislike": 0,
          "reply": 18,
          "share": 0,
          "coin": 1,
          "dynamic": 0
        },
        "words": 0,
        "dynamic": "狸子的UP主日报📰v1.1,每天稳定更新～（如果咕咕咕了，请艾特狸子LePtC检查狐务器 [tv_微笑] #排行榜##大数据##狸工智能#",
        "origin_image_urls": [
          "https://i0.hdslb.com/bfs/article/5e53260f58f77fff0b8ba6b20179db85b8741b76.jpg"
        ],
        "list": null,
        "is_like": false,
        "media": {
          "score": 0,
          "media_id": 0,
          "title": "",
          "cover": "",
          "area": "",
          "type_id": 0,
          "type_name": "",
          "spoiler": 0
        },
        "apply_time": "",
        "check_time": "",
        "original": 1,
        "act_id": 0,
        "dispute": null,
        "authenMark": null,
        "cover_avid": 0,
        "top_video_info": null,
        "type": 0
      },
      {
        "id": 18972446,
        "category": {
          "id": 15,
          "parent_id": 3,
          "name": "日常"
        },
        "categories": [
          {
            "id": 3,
            "parent_id": 0,
            "name": "生活"
          },
          {
            "id": 15,
            "parent_id": 3,
            "name": "日常"
          }
        ],
        "title": "B站UP主日报2022年10月07日23点（v1.1）",
        "summary": "冠：罗翔说刑法(2484.73万粉,+8020) 涨：靖菌命(+3.61万粉) 掉：Overidea_China(-8593粉) 播：开心锤锤(+971.44万) 赞：荒草音乐(+53.14万) 赞：南方都市报(+18.05万) 充：内德维德(+190)",
        "banner_url": "https://i0.hdslb.com/bfs/article/5e53260f58f77fff0b8ba6b20179db85b8741b76.jpg",
        "template_id": 4,
        "state": 0,
        "author": {
          "mid": 300021061,
          "name": "狸工智能",
          "face": "https://i1.hdslb.com/bfs/face/4cba9bc9d6cf6935a37ec156dedb8f8d26c1df95.jpg",
          "pendant": {
            "pid": 0,
            "name": "",
            "image": "",
            "expire": 0
          },
          "official_verify": {
            "type": -1,
            "desc": ""
          },
          "nameplate": {
            "nid": 3,
            "name": "白银殿堂",
            "image": "https://i2.hdslb.com/bfs/face/f6a31275029365ae5dc710006585ddcf1139bde1.png",
            "image_small": "https://i2.hdslb.com/bfs/face/b09cdb4c119c467cf2d15db5263b4f539fa6e30b.png",
            "level": "高级勋章",
            "condition": "单个自制视频总播放数>=10万"
          },
          "vip": {
            "type": 0,
            "status": 0,
            "due_date": 0,
            "vip_pay_type": 0,
            "theme_type": 0,
            "label": {
              "path": "",
              "text": "",
              "label_theme": ""
            },
            "avatar_subscript": 0,
            "nickname_color": ""
          }
        },
        "reprint": 0,
        "image_urls": [
          "https://i0.hdslb.com/bfs/article/8e5497f7854e7df3468fbc29b0dd10fcf17d1223.png"
        ],
        "publish_time": 1665189149,
        "ctime": 1665189149,
        "stats": {
          "view": 1021,
          "favorite": 1,
          "like": 66,
          "dislike": 0,
          "reply": 21,
          "share": 2,
          "coin": 2,
          "dynamic": 0
        },
        "tags": [
          {
            "tid": 1598,
            "name": "粉丝"
          },
          {
            "tid": 422982,
            "name": "狸子"
          },
          {
            "tid": 526616,
            "name": "大数据"
          },
          {
            "tid": 14082112,
            "name": "狸工智能"
          },
          {
            "tid": 438,
            "name": "排行榜"
          }
        ],
        "words": 0,
        "dynamic": "狸子的UP主日报📰v1.1,每天稳定更新～（如果咕咕咕了，请艾特狸子LePtC检查狐务器 [tv_微笑] #排行榜##大数据##狸工智能#",
        "origin_image_urls": [
          "https://i0.hdslb.com/bfs/article/5e53260f58f77fff0b8ba6b20179db85b8741b76.jpg"
        ],
        "list": null,
        "is_like": false,
        "media": {
          "score": 0,
          "media_id": 0,
          "title": "",
          "cover": "",
          "area": "",
          "type_id": 0,
          "type_name": "",
          "spoiler": 0
        },
        "apply_time": "",
        "check_time": "",
        "original": 1,
        "act_id": 0,
        "dispute": null,
        "authenMark": null,
        "cover_avid": 0,
        "top_video_info": null,
        "type": 0
      }
    ],
    "pn": 1,
    "ps": 2,
    "count": 1563
  }
}
```

</details>

### 查询用户专栏文集明细

> https://api.bilibili.com/x/article/up/lists

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名      | 类型  | 内容    | 必要性 | 备注                |
|----------|-----|-------|-----|-------------------|
| mid      | num | 用户uid | √   |                   |
| sort     | num | 排序方式  |     | 0：最近更新<br/>1：最多阅读 |
| jsonp    | str |       |     |                   |
| callback | str |       |     |                   |

**json回复：**

根对象

| 字段名     | 类型  | 内容   | 备注                 |
|---------|-----|------|--------------------|
| code    | num | 响应码  | 0：成功<br/>-400：请求错误 |
| message | str | 0    |                    |
| ttl     | num | 1    |                    |
| data    | obj | 信息本体 |                    |

`data`对象

| 字段名   | 类型    | 内容     | 备注  |
|-------|-------|--------|-----|
| lists | array | 文集信息列表 |     |
| total | num   | 文集总数   |     |

`data`对象 -> `lists`数组中的对象

| 字段名            | 类型  | 内容      | 备注   |
|----------------|-----|---------|------|
| id             | num | 文集id    |      |
| mid            | num | 作者uid   |      |
| name           | str | 文集名称    |      |
| image_url      | str | 封面      |      |
| update_time    | num | 最后更新时间戳 | 单位：秒 |
| ctime          | num | 创建时间戳   | 单位：秒 |
| publish_time   | num |         | 单位：秒 |
| summary        | str | `空串`    |      |
| words          | num | 总字数     |      |
| read           | num | 阅读量     |      |
| articles_count | num | 包含文章数   |      |
| state          | num | `1`     |      |
| reason         | str | `空串`    |      |
| apply_time     | str | `空串`    |      |
| check_time     | str | `空串`    |      |

**示例：**

```shell
curl -X GET 'https://api.bilibili.com/x/article/up/lists' \
    --data-urlencode 'mid=2859372' \
    --data-urlencode 'sort=0'
```

<details>
<summary>点击查看</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "lists": [
      {
        "id": 77163,
        "mid": 2859372,
        "name": "碟报",
        "image_url": "https://i0.hdslb.com/bfs/article/96d2b3d2a72e6497a011c885ab9245c51507ce18.png",
        "update_time": 1664854854,
        "ctime": 1554785697,
        "publish_time": 1664863200,
        "summary": "",
        "words": 71532,
        "read": 478726,
        "articles_count": 113,
        "state": 1,
        "reason": "",
        "apply_time": "",
        "check_time": ""
      },
      {
        "id": 26407,
        "mid": 2859372,
        "name": "周榜",
        "image_url": "https://i0.hdslb.com/bfs/article/96d2b3d2a72e6497a011c885ab9245c51507ce18.png",
        "update_time": 1664721205,
        "ctime": 1537942450,
        "publish_time": 1664721307,
        "summary": "",
        "words": 102099,
        "read": 1366280,
        "articles_count": 206,
        "state": 1,
        "reason": "",
        "apply_time": "",
        "check_time": ""
      },
      {
        "id": 107952,
        "mid": 2859372,
        "name": "制作委员会",
        "image_url": "https://i0.hdslb.com/bfs/article/96d2b3d2a72e6497a011c885ab9245c51507ce18.png",
        "update_time": 1646663919,
        "ctime": 1563107348,
        "publish_time": 1646910000,
        "summary": "",
        "words": 47564,
        "read": 72911,
        "articles_count": 10,
        "state": 1,
        "reason": "",
        "apply_time": "",
        "check_time": ""
      },
      {
        "id": 26457,
        "mid": 2859372,
        "name": "实时榜",
        "image_url": "https://i0.hdslb.com/bfs/article/96d2b3d2a72e6497a011c885ab9245c51507ce18.png",
        "update_time": 1603115712,
        "ctime": 1537955117,
        "publish_time": 1603115719,
        "summary": "",
        "words": 206741,
        "read": 1136352,
        "articles_count": 76,
        "state": 1,
        "reason": "",
        "apply_time": "",
        "check_time": ""
      },
      {
        "id": 49769,
        "mid": 2859372,
        "name": "预测",
        "image_url": "https://i0.hdslb.com/bfs/article/96d2b3d2a72e6497a011c885ab9245c51507ce18.png",
        "update_time": 1593933314,
        "ctime": 1546153226,
        "publish_time": 1593933314,
        "summary": "",
        "words": 2518,
        "read": 55123,
        "articles_count": 6,
        "state": 1,
        "reason": "",
        "apply_time": "",
        "check_time": ""
      },
      {
        "id": 96916,
        "mid": 2859372,
        "name": "书籍周榜",
        "image_url": "https://i0.hdslb.com/bfs/article/96d2b3d2a72e6497a011c885ab9245c51507ce18.png",
        "update_time": 1559815260,
        "ctime": 1559815159,
        "publish_time": 1559815577,
        "summary": "",
        "words": 272,
        "read": 2955,
        "articles_count": 1,
        "state": 1,
        "reason": "",
        "apply_time": "",
        "check_time": ""
      },
      {
        "id": 96610,
        "mid": 2859372,
        "name": "原始周榜存档",
        "image_url": "https://i0.hdslb.com/bfs/article/96d2b3d2a72e6497a011c885ab9245c51507ce18.png",
        "update_time": 1559721231,
        "ctime": 1559720762,
        "publish_time": 1559721271,
        "summary": "",
        "words": 290,
        "read": 1498,
        "articles_count": 1,
        "state": 1,
        "reason": "",
        "apply_time": "",
        "check_time": ""
      },
      {
        "id": 26453,
        "mid": 2859372,
        "name": "杂谈",
        "image_url": "https://i0.hdslb.com/bfs/article/96d2b3d2a72e6497a011c885ab9245c51507ce18.png",
        "update_time": 1557303117,
        "ctime": 1537954625,
        "publish_time": 1557303168,
        "summary": "",
        "words": 10673,
        "read": 38363,
        "articles_count": 4,
        "state": 1,
        "reason": "",
        "apply_time": "",
        "check_time": ""
      },
      {
        "id": 59028,
        "mid": 2859372,
        "name": "新春访谈",
        "image_url": "https://i0.hdslb.com/bfs/article/96d2b3d2a72e6497a011c885ab9245c51507ce18.png",
        "update_time": 1549878596,
        "ctime": 1549343048,
        "publish_time": 1549884125,
        "summary": "",
        "words": 33472,
        "read": 34597,
        "articles_count": 13,
        "state": 1,
        "reason": "",
        "apply_time": "",
        "check_time": ""
      }
    ],
    "total": 9
  }
}
```

</details>

### 查询用户投稿音频明细

> https://api.bilibili.com/audio/music-service/web/song/upper

*请求方法: GET*

<!--{
  "from": {
    "url": "https://space.bilibili.com/8047632/audio",
    "selector": ".be-tab-inner"
  }
  "gh": [442]
}-->

**URL参数:**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| --- | --- | --- | --- | --- |
| mid | num | 用户 mid | 必要 |  |
| pn | num | 页码 | 必要 | 默认为 1 |
| ps | num | 每页项数 | 必要 | 默认为 30 |
| order | str | 排序方式 | 必要 | 1: 最新发布<br />2: 最多播放<br />3: 最多收藏 |

**JSON回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 返回值 | 0: 成功<br />72000000: 缺少参数 |
| msg | str | 返回信息 | 成功为 `success` |
| data | str | 数据本体 | 失败时不存在 |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| curPage | num | 当前页码 |  |
| pageCount | num | 总页数 |  |
| totalSize | num | 总计数 |  |
| pageSize | num | 每页项数 |  |
| data | array | 音频列表 |  |

`data` 对象中的 `data` 数组中的对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| id | num | 音频 AU 号 |  |
| uid | num | 用户 mid |  |
| uname | str | 用户名 |  |
| author | null |  |  |
| title | str | 音频标题 |  |
| cover | str | 音频封面图片 URL |  |
| intro | null |  |  |
| lyric | str | 音频歌词 URL |  |
| crtype | num | 1 |  |
| duration | num | 音频时长 | 单位为 秒 |
| passtime | num | 发布时间 | UNIX 秒级时间戳 |
| curtime | num | 0 |  |
| aid | null |  |  |
| cid | null |  |  |
| msid | null |  |  |
| attr | null |  |  |
| limit | null |  |  |
| activityId | null |  |  |
| limitdesc | null |  |  |
| ctime | num | 发布时间 | UNIX 毫秒时间戳 |
| statistic | obj | 统计数 |  |
| coin_num | num | 硬币数量 |  |
| is_cooper | null |  |  |

`data` 数组中的对象中的 `statistic` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| sid | num | 音频 AU 号 |  |
| play | num | 播放数 |  |
| collect | num | 收藏数 |  |
| comment | num | 评论数 |  |
| share | num | 分享数 |  |

**示例:**

```shell
curl -G 'https://api.bilibili.com/audio/music-service/web/song/upper' \
--url-query 'uid=8047632' \
--url-query 'pn=1' \
--url-query 'ps=30' \
--url-query 'order=2'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "msg": "success",
  "data": {
    "curPage": 1,
    "pageCount": 1,
    "totalSize": 2,
    "pageSize": 30,
    "data": [
      {
        "id": 257709,
        "uid": 8047632,
        "uname": "哔哩哔哩弹幕网",
        "author": null,
        "title": "【2018拜年祭单品】与你同行~B With U~",
        "cover": "http://i0.hdslb.com/bfs/music/0f890889c8e1101f37317def0c4c555068054c88.jpg",
        "intro": null,
        "lyric": "http://i0.hdslb.com/bfs/music/1519959250257709.lrc",
        "crtype": 1,
        "duration": 301,
        "passtime": 1519878405,
        "curtime": 0,
        "aid": null,
        "cid": null,
        "msid": null,
        "attr": null,
        "limit": null,
        "activityId": null,
        "limitdesc": null,
        "ctime": 1519875632000,
        "statistic": {
          "sid": 257709,
          "play": 845264,
          "collect": 21978,
          "comment": 1983,
          "share": 1685
        },
        "coin_num": 13368,
        "is_cooper": null
      },
      {
        "id": 378521,
        "uid": 8047632,
        "uname": "哔哩哔哩弹幕网",
        "author": null,
        "title": "《B TOGETHER》-bilibili九周年主题曲",
        "cover": "http://i0.hdslb.com/bfs/music/109136c63e16d83fbad5ec9282a6fb96498d8144.jpg",
        "intro": null,
        "lyric": "http://i0.hdslb.com/bfs/music/1529979007378521.lrc",
        "crtype": 1,
        "duration": 261,
        "passtime": 1529928347,
        "curtime": 0,
        "aid": null,
        "cid": null,
        "msid": null,
        "attr": null,
        "limit": null,
        "activityId": null,
        "limitdesc": null,
        "ctime": 1529928235000,
        "statistic": {
          "sid": 378521,
          "play": 123264,
          "collect": 5501,
          "comment": 1591,
          "share": 535
        },
        "coin_num": 3640,
        "is_cooper": null
      }
    ]
  }
}
```

</details>

## 频道

<img src="../../assets/img/channel.svg" width="100" height="100" />

[所有旧接口](https://github.com/SocialSisterYi/bilibili-API-collect/blob/7d89ece2ac46425810647c4ac92acf5f3721cb68/docs/user/space.md#%E9%A2%91%E9%81%93) 已弃用, 现可用接口参见 [合集和视频列表信息](../video/collection.md)

## 课程

<img src="../../assets/img/class.svg" width="100" height="100" />

### 查询用户发布的课程列表

> https://api.bilibili.com/pugv/app/web/season/page

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注     |
| ------ | ---- | ----------- | ------ | -------- |
| mid    | num  | 目标用户mid | 必要   |          |
| pn     | num  | 页码        | 非必要 | 默认为1  |
| ps     | num  | 每页项数    | 非必要 | 默认为20 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                       |
| ------- | ---- | -------- | ---------------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />53013：用户隐私设置未公开 |
| message | str  | 错误信息 | 默认为0                                                    |
| ttl     | num  | 1        |                                                            |
| data    | obj  | 信息本体 |                                                            |

`data`对象：

| 字段 | 类型  | 内容     | 备注 |
| ---- | ----- | -------- | ---- |
| list | array | 课程列表 |      |
| page | obj   | 页面信息 |      |

`data`中的`page`对象：

| 字段  | 类型 | 内容           | 备注                                  |
| ----- | ---- | -------------- | ------------------------------------- |
| next  | bool | 是否存在下一页 | false：最后一页<br />true：存在下一页 |
| num   | num  | 当前页码       |                                       |
| size  | num  | 每页项数       |                                       |
| total | num  | 总计项数       |                                       |

`data`中的`list`数组：

| 项   | 类型 | 内容        | 备注                       |
| ---- | ---- | ----------- | -------------------------- |
| 0    | obj  | 课程1       |                            |
| n    | obj  | 课程（n+1） | 按照目标用户的发布顺序排列 |
| ……   | obj  | ……          |                            |

`data`中的`list`数组中的对象：

| 字段      | 类型 | 内容         | 备注          |
| --------- | ---- | ------------ | ------------- |
| cover     | str  | 课程封面url  |               |
| ep_count  | num  | 课程集数     |               |
| link      | str  | 课程页面url  | 手机版页面url |
| page      | num  | 1            | 作用尚不明确  |
| play      | num  | 课程播放数   |               |
| season_id | num  | 课程ssid     |               |
| status    | str  | 更新状态说明 |               |
| subtitle  | str  | 课程副标题   |               |
| title     | str  | 课程标题     |               |

**示例：**

查询用户`mid=33683045`的课程发布列表

```shell
curl -G 'https://api.bilibili.com/pugv/app/web/season/page' \
--data-urlencode 'mid=33683045' \
--data-urlencode 'ps=5' \
--data-urlencode 'pn=1'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "data": {
        "items": [
            {
                "cover": "http://i0.hdslb.com/bfs/archive/596575057885fff7f0ceff047437186cba459358.jpg",
                "ep_count": 10,
                "link": "https://m.bilibili.com/cheese/play/ss80",
                "page": 1,
                "play": 174467,
                "season_id": 80,
                "status": "共10期",
                "subtitle": "百科全书式军事科普短视频系列",
                "title": "《战忽知道》第一季"
            },
            {
                "cover": "http://i0.hdslb.com/bfs/archive/322aa94d27cece62d2a859caf71ac2426f29eee2.jpg",
                "ep_count": 1,
                "link": "https://m.bilibili.com/cheese/play/ss145",
                "page": 1,
                "play": 22155,
                "season_id": 145,
                "status": "更新至第1期",
                "subtitle": "此课程为《局座：第四次工业革命来了》部分集数，请谨慎购买",
                "title": "【体验课】局座讲5G：5G如何改变我们的生活？"
            },
            {
                "cover": "http://i0.hdslb.com/bfs/archive/b9794ac4507f8764e219df413b661b5faf499a19.jpg",
                "ep_count": 10,
                "link": "https://m.bilibili.com/cheese/play/ss113",
                "page": 1,
                "play": 49833,
                "season_id": 113,
                "status": "更新至第10期",
                "subtitle": "百科全书式军事科普短视频系列",
                "title": "《战忽知道》第二季"
            },
            {
                "cover": "http://i0.hdslb.com/bfs/archive/7351fcb33592a4bc7aac9f71d421b4b5ce0177d3.jpg",
                "ep_count": 10,
                "link": "https://m.bilibili.com/cheese/play/ss51",
                "page": 1,
                "play": 4981037,
                "season_id": 51,
                "status": "共10期",
                "subtitle": "洞悉国际局势，学习战略思维",
                "title": "局座的国际战略课"
            },
            {
                "cover": "http://i0.hdslb.com/bfs/archive/31e2a170b5a815e34f0537a2727b28f1b87dca18.jpg",
                "ep_count": 10,
                "link": "https://m.bilibili.com/cheese/play/ss121",
                "page": 1,
                "play": 30754,
                "season_id": 121,
                "status": "更新至第10期",
                "subtitle": "百科全书式军事科普短视频系列",
                "title": "《战忽知道》第三季"
            }
        ],
        "page": {
            "next": true,
            "num": 1,
            "size": 5,
            "total": 8
        }
    },
    "message": "success"
}
```

</details>

## 订阅

<img src="../../assets/img/sub.svg" width="100" height="100" />

### 查询用户追番预览列表

> http://space.bilibili.com/ajax/Bangumi/getList

*请求方式：GET*

认证方式：Cookie（SESSDATA）

如设置隐私查看自己的需要认证

带有转义，且只能获取最多15条

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | num  | 目标用户mid | 必要   |      |

**json回复：**

根对象：

| 字段   | 类型                     | 内容                               | 备注                        |
| ------ | ------------------------ | ---------------------------------- | --------------------------- |
| status | bool                     | 状态                               | false：失败<br />true：成功 |
| data   | 失败：str<br />成功：obj | 失败：错误信息<br />成功：信息本体 |                             |

`data`对象：

| 字段   | 类型  | 内容         | 备注         |
| ------ | ----- | ------------ | ------------ |
| count  | num   | 总计追番数   |              |
| pages  | num   | 0            | 作用尚不明确 |
| result | array | 追番预览列表 |              |

`data`中的`result`数组：

| 项   | 类型 | 内容        | 备注                       |
| ---- | ---- | ----------- | -------------------------- |
| 0    | obj  | 追番1       |                            |
| n    | obj  | 追番（n+1） | 按照目标用户的关注顺序排列 |
| ……   | obj  | ……          |                            |
| 14   | obj  | 追番15      | 最后一项                   |

`data`中的`result`数组中的对象：

| 字段            | 类型 | 内容            | 备注                              |
| --------------- | ---- | --------------- | --------------------------------- |
| brief           | str  | 简介            |                                   |
| cover           | str  | 封面图片url     |                                   |
| evaluate        | str  | 空              |                                   |
| favorites       | num  | 追番数          |                                   |
| is_finish       | num  | 是否已完结      | 0：未完结<br />1：已完结          |
| last_ep_index   | num  | 0               | 作用尚不明确                      |
| newest_ep_index | num  | 最新一话        | 可能为0                           |
| season_id       | str  | 番剧ssid        |                                   |
| share_url       | str  | 播放页面链接url |                                   |
| title           | str  | 标题            |                                   |
| total_count     | num  | 总计集数        | 未完结：-1<br />已完结：非0正整数 |

**示例：**

查看用户`mid=14082`的追番预览列表

```shell
curl -G 'http://space.bilibili.com/ajax/Bangumi/getList' \
--data-urlencode 'mid=14082' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "status": true,
  "data": {
    "count": 25,
    "pages": 0,
    "result": [{
      "season_id": "29310",
      "share_url": "http:\/\/bangumi.bilibili.com\/anime\/29310\/",
      "title": "异度侵入 ID:INVADED",
      "is_finish": 1,
      "favorites": 3479220,
      "newest_ep_index": 13,
      "last_ep_index": 0,
      "total_count": 13,
      "cover": "http:\/\/i0.hdslb.com\/bfs\/bangumi\/image\/9bf9e66968f85b33ec3769a16c86b36dc984abbc.png",
      "evaluate": "",
      "brief": "本片讲述利用能检测出人们杀意的装置以及利用思想粒子做出的“井”，来探知事件真相的科幻故事。"
    }, {
      "season_id": "25739",
      "share_url": "http:\/\/bangumi.bilibili.com\/anime\/25739\/",
      "title": "关于我转生变成史莱姆这档事",
      "is_finish": 1,
      "favorites": 5518829,
      "newest_ep_index": 0,
      "last_ep_index": 0,
      "total_count": 27,
      "cover": "http:\/\/i0.hdslb.com\/bfs\/bangumi\/a4c0e0ccc44fe3949a734f546cf5bb07da925bad.png",
      "evaluate": "",
      "brief": "史莱姆生活，开始了。\n上班族的三上悟在道路上被歹徒给刺杀身亡后，回过神来发现自己转生到了异世界。\n不..."
    },
    …………
    ]
  }
}
```

</details>

### 查询用户追番（追剧）明细

> https://api.bilibili.com/x/space/bangumi/follow/list

*请求方式：GET*

认证方式：Cookie（SESSDATA）

如设置隐私查看自己的需要认证

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注                 |
| ------ | ---- | ----------- | ------ | -------------------- |
| vmid   | num  | 目标用户mid | 必要   |                      |
| pn     | num  | 页码        | 非必要 | 默认为1              |
| ps     | num  | 每页项数    | 非必要 | 默认为15 定义域1-30            |
| type   | num  | 查询类型    | 必要   | 1：追番<br />2：追剧 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                       |
| ------- | ---- | -------- | ---------------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />53013：用户隐私设置未公开 |
| message | str  | 错误信息 | 默认为0                                                    |
| ttl     | num  | 1        |                                                            |
| data    | obj  | 信息本体 |                                                            |

`data`对象：

| 字段  | 类型  | 内容       | 备注 |
| ----- | ----- | ---------- | ---- |
| list  | array | 追番列表   |      |
| pn    | num   | 当前页码   |      |
| ps    | num   | 每页项数   |      |
| total | num   | 总计追番数 |      |

`data`中的`list`数组：

| 项   | 类型 | 内容        | 备注                       |
| ---- | ---- | ----------- | -------------------------- |
| 0    | obj  | 追番1       |                            |
| n    | obj  | 追番（n+1） | 按照目标用户的关注顺序排列 |
| ……   | obj  | ……          |                            |

`data`中的`list`数组中的对象：

基本同「番剧详细信息」中的result对象（未完工）

**示例：**

查看用户`mid=14082`的追番明细

```shell
curl -G 'https://api.bilibili.com/x/space/bangumi/follow/list' \
--data-urlencode 'vmid=14082' \
--data-urlencode 'type=1' \
--data-urlencode 'ps=2' \
--data-urlencode 'pn=1' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "list": [{
      "season_id": 29310,
      "media_id": 28224080,
      "season_type": 1,
      "season_type_name": "番剧",
      "title": "异度侵入 ID:INVADED",
      "cover": "http://i0.hdslb.com/bfs/bangumi/image/9bf9e66968f85b33ec3769a16c86b36dc984abbc.png",
      "total_count": 13,
      "is_finish": 1,
      "is_started": 1,
      "is_play": 1,
      "badge": "会员专享",
      "badge_type": 0,
      "rights": {
        "allow_review": 1,
        "is_selection": 1,
        "selection_style": 1
      },
      "stat": {
        "follow": 3475768,
        "view": 87500861,
        "danmaku": 1334654,
        "reply": 316632,
        "coin": 835150,
        "series_follow": 3475242,
        "series_view": 87500861
      },
      "new_ep": {
        "id": 307774,
        "index_show": "全13话",
        "cover": "http://i0.hdslb.com/bfs/archive/3dce2b856a7b0ea667aa288b51b7c0478fa56c4d.jpg",
        "title": "13",
        "long_title": "CHANNELEDⅡ",
        "pub_time": "2020-03-23 00:30:00",
        "duration": 1481000
      },
      "rating": {
        "score": 9.8,
        "count": 262589
      },
      "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/664dbf039ec2da8dd982b697a108e28e87b9897e.jpg",
      "season_status": 13,
      "season_title": "TV",
      "badge_ep": "会员",
      "media_attr": 196608,
      "season_attr": 0,
      "evaluate": "本片讲述利用能检测出人们杀意的装置以及利用思想粒子做出的“井”，来探知事件真相的科幻故事。...",
      "areas": [{
        "id": 2,
        "name": "日本"
      }],
      "subtitle": "",
      "first_ep": 307446,
      "can_watch": 1,
      "series": {
        "series_id": 4760,
        "title": "ID:INVADED",
        "season_count": 1,
        "new_season_id": 29310
      },
      "publish": {
        "pub_time": "2020-01-06 00:30:00",
        "pub_time_show": "敬请期待",
        "release_date": "2020-01-06",
        "release_date_show": "2020年1月6日"
      },
      "mode": 2,
      "section": [{
        "section_id": 39327,
        "season_id": 29310,
        "limit_group": 328,
        "watch_platform": 15,
        "copyright": "dujia",
        "ban_area_show": 1
      }, {
        "section_id": 39633,
        "season_id": 29310,
        "limit_group": 328,
        "watch_platform": 15,
        "type": 1,
        "copyright": "dujia",
        "title": "其他",
        "ban_area_show": 1
      }, {
        "section_id": 44101,
        "season_id": 29310,
        "limit_group": 316,
        "watch_platform": 15,
        "type": 4,
        "copyright": "ugc",
        "ban_area_show": 1
      }],
      "url": "https://www.bilibili.com/bangumi/play/ss29310",
      "follow_status": 2,
      "is_new": 0,
      "progress": "",
      "both_follow": true
    }, {
      "season_id": 25739,
      "media_id": 139252,
      "season_type": 1,
      "season_type_name": "番剧",
      "title": "关于我转生变成史莱姆这档事",
      "cover": "http://i0.hdslb.com/bfs/bangumi/a4c0e0ccc44fe3949a734f546cf5bb07da925bad.png",
      "total_count": 27,
      "is_finish": 1,
      "is_started": 1,
      "is_play": 1,
      "badge": "会员专享",
      "badge_type": 0,
      "rights": {
        "allow_review": 1,
        "is_selection": 1,
        "selection_style": 1
      },
      "stat": {
        "follow": 5516519,
        "view": 246739631,
        "danmaku": 3802465,
        "reply": 460225,
        "coin": 1338958,
        "series_follow": 5516535,
        "series_view": 246739631
      },
      "new_ep": {
        "id": 316957,
        "index_show": "全27话",
        "cover": "http://i0.hdslb.com/bfs/archive/81d07d1a478ce3a6209b557e14df9b9c78c42abb.jpg",
        "title": "OAD03",
        "long_title": "外传：利姆鲁的华丽教师生活 其一",
        "pub_time": "2020-03-27 00:00:03",
        "duration": 1493000
      },
      "rating": {
        "score": 9.4,
        "count": 83354
      },
      "square_cover": "http://i0.hdslb.com/bfs/bangumi/8d9f5b4a566d0547bc2e3f6f733b732a09c0d3d4.jpg",
      "season_status": 13,
      "season_title": "TV",
      "badge_ep": "会员",
      "media_attr": 0,
      "season_attr": 0,
      "evaluate": "史莱姆生活，开始了。\n上班族的三上悟在道路上被歹徒给刺杀身亡后，回过神来发现自己转生到了异世界。\n不过，自己居然是“史莱姆”！\n他在得到利姆鲁这个名字后开始了自己的史莱姆人生，随着与各个种族相处交流的...",
      "areas": [{
        "id": 2,
        "name": "日本"
      }],
      "subtitle": "",
      "first_ep": 250460,
      "can_watch": 1,
      "series": {
        "series_id": 4188,
        "title": "关于我转生变成史莱姆这档事",
        "season_count": 1,
        "new_season_id": 25739
      },
      "publish": {
        "pub_time": "2018-10-02 00:30:00",
        "pub_time_show": "2018年10月02日00:30",
        "release_date": "2018-10-02",
        "release_date_show": "2018年10月2日"
      },
      "mode": 2,
      "section": [{
        "section_id": 34988,
        "season_id": 25739,
        "limit_group": 328,
        "watch_platform": 15,
        "copyright": "bilibili",
        "ban_area_show": 1
      }],
      "url": "https://www.bilibili.com/bangumi/play/ss25739",
      "follow_status": 2,
      "is_new": 0,
      "progress": "",
      "both_follow": true
    }],
    "pn": 1,
    "ps": 2,
    "total": 25
  }
}
```

</details>

### 查询用户关注的TAG（话题）

> http://space.bilibili.com/ajax/tags/getSubList

*请求方式：GET*

认证方式：Cookie（SESSDATA）

如设置隐私查看自己的需要认证

带有转义

只显示前100个

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | num  | 目标用户mid | 必要   |      |

**json回复：**

根对象：

| 字段   | 类型                         | 内容                                   | 备注                        |
| ------ | ---------------------------- | -------------------------------------- | --------------------------- |
| status | bool                         | 返回值                                 | false：错误<br />true：正确 |
| data   | 错误时：str<br />正确时：obj | 错误时：错误信息<br />正确时：数据本体 | 正确时不返回错误信息        |

`data`对象：

| 字段  | 类型  | 内容        | 备注 |
| ----- | ----- | ----------- | ---- |
| tags  | array | 关注TAG列表 |      |
| count | num   | 关注TAG的数 |      |

`data`中的`tags`数组：

| 项   | 类型 | 内容           | 备注     |
| ---- | ---- | -------------- | -------- |
| 0    | obj  | 关注TAG1       |          |
| n    | obj  | 关注TAG（n+1） |          |
| ……   | obj  | ……             | ……       |
| 99   | obj  | 关注TAG100     | 最后一项 |

`data`中的`tags`数组中的对象：

| 字段          | 类型 | 内容                | 备注         |
| ------------- | ---- | ------------------- | ------------ |
| archive_count | num  | 0                   | 作用尚不明确 |
| cover         | str  | TAG图片url          | 无则为空     |
| name          | str  | TAG名               |              |
| notify        | num  | 1                   | 作用尚不明确 |
| tag_id        | num  | tag_id               |              |
| updated_ts    | str  | 1970-01-01 08:00:00 | 作用尚不明确 |

**示例：**

查询用户`mid=2`的关注TAG

```shell
curl -G 'http://space.bilibili.com/ajax/tags/getSubList' \
--data-urlencode 'mid=2' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "status": true,
  "data": {
    "tags": [{
      "name": "豪宅",
      "cover": "",
      "tag_id": 47637,
      "notify": 1,
      "archive_count": 0,
      "updated_ts": "1970-01-01 08:00:00"
    }, {
      "name": "死亡搁浅",
      "cover": "",
      "tag_id": 1737239,
      "notify": 1,
      "archive_count": 0,
      "updated_ts": "1970-01-01 08:00:00"
    },
    …………
    ],
    "count": 58
  }
}
```

</details>
