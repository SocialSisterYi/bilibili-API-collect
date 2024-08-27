# 弹幕操作

## 发送视频弹幕

> https://api.bilibili.com/x/v2/dm/post

*请求方式：POST*

认证方式：Cookie（SESSDATA）或APP

此接口与漫画弹幕相同

`mode=6`的逆向弹幕与`mode=8`的代码弹幕不可发送

**URL参数:**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| --- | --- | --- | --- | --- |
| web_location | str | 普通视频: 1315873 | 不必要 | |
| csrf | str | CSRF Token (即 Cookie 中 bili_jct) | Cookie 方式必要 | |
| w_rid | str | Wbi 签名 | 必要 | 参见 [Wbi 签名](../misc/sign/wbi.md) |
| wts | str | UNIX 秒级时间戳 | 必要 | 参见 [Wbi 签名](../misc/sign/wbi.md) |

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名        | 类型 | 内容                      | 必要性          | 备注                                                         |
| ------------- | ---- | ------------------------- | --------------- | ------------------------------------------------------------ |
| access_key    | str  | APP 登录 Token            | APP 方式必要    |                                                              |
| type          | num  | 弹幕类选择                | 必要            | 1：视频弹幕<br />2：漫画弹幕                                 |
| oid           | num  | 视频 cid                  | 必要            |                                                              |
| msg           | str  | 弹幕内容                  | 必要            | 长度小于 100 字符                                            |
| bvid          | str  | 稿件 bvid                 | 必要（可选）    | avid 与 bvid 任选一个                                        |
| aid           | num  | 稿件 avid                 | 必要（可选）    | avid 与 bvid 任选一个                                        |
| progress      | num  | 弹幕出现在视频内的时间    | 非必要          | 单位为毫秒<br />默认为0                                      |
| color         | num  | 弹幕颜色设置              | 非必要          | 十进制 RGB888 值<br />如`16777215`为 #FFFFFF 即白色          |
| fontsize      | num  | 弹幕字号设置              | 非必要          | 默认为 25<br />极小：12<br />超小：16<br />小：18<br />标准：25<br />大：36<br />超大：45<br />极大：64 |
| pool          | num  | 弹幕池选择                | 非必要          | 0：普通池<br />1：字幕池<br />2：特殊池（代码/BAS弹幕）<br />默认为0 |
| mode          | num  | 弹幕类型选择              | 必要            | 1：普通弹幕<br />4：底部弹幕<br />5：顶部弹幕<br />7：高级弹幕<br />9：BAS弹幕（`pool`必须为2） |
| rnd           | num  | 当前时间戳*1000000        | 非必要          | **若无此项，则发送弹幕冷却时间限制为90s**<br />若有此项，则发送弹幕冷却时间限制为5s |
| colorful      | num  | 彩色弹幕                  | 非必要          | 60001：专属渐变彩色（需要会员）                              |
| checkbox_type | num  | 是否带 UP 身份标识        | 非必要          | 0：普通<br />4：带有标识                                     |
| csrf          | str  | CSRF Token（位于 Cookie） | Cookie 方式必要 |                                                              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-111：csrf校验失败<br />-400：请求错误<br />-404：无此项<br />36700：系统升级中<br />36701：弹幕包含被禁止的内容<br />36702：弹幕长度大于100<br />36703：发送频率过快<br />36704：禁止向未审核的视频发送弹幕<br />36705：您的等级不足，不能发送弹幕<br />36706：您的等级不足，不能发送顶端弹幕<br />36707：您的等级不足，不能发送底端弹幕<br />36708：您的等级不足，不能发送彩色弹幕<br />36709：您的等级不足，不能发送高级弹幕<br />36710：您的权限不足，不能发送这种样式的弹幕<br />36711：该视频禁止发送弹幕<br />36712：level 1用户发送弹幕的最大长度为20<br />36713：稿件未付费<br />36714：弹幕发送时间不合法<br />36715：当日操作数量超过上限<br />36718：目前您不是大会员，无法使用会员权益 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段         | 类型       | 内容               | 备注                             |
| ------------ | ---------- | ------------------ | -------------------------------- |
| action       | str        | （？）             |                                  |
| animation    | str        | 弹幕样式 Json？    |                                  |
| colorful_src | str 或 obj | 渐变彩色样式信息？ | 当请求参数`colorful=60001`时有效 |
| dm_content   | str        | （？）             |                                  |
| dmid         | num        | 弹幕 dmid          |                                  |
| dmid_str     | str        | 弹幕 dmid          | 字串形式                         |
| visible      | bool       | （？）             |                                  |

`data`中的`colorful_src`对象：

| 字段 | 类型 | 内容              | 备注 |
| ---- | ---- | ----------------- | ---- |
| type | num  | 60001             |      |
| src  | str  | 渐变色样式 Json？ |      |

**示例：**

为视频`av2`/`BV1xx411c7mD`（cid为`62131`）的 5000ms 位置发送一条弹幕`前来考古`（颜色为 #FFFFFF，字号 25，普通弹幕，游动弹幕）

```shell
curl 'https://api.bilibili.com/x/v2/dm/post' \
    --data-urlencode 'type=1' \
    --data-urlencode 'oid=62131' \
    --data-urlencode 'msg=前来考古' \
    --data-urlencode 'aid=2' \
    --data-urlencode 'progress=5000' \
    --data-urlencode 'color=16777215' \
    --data-urlencode 'fontsize=25' \
    --data-urlencode 'pool=0' \
    --data-urlencode 'mode=1' \
    --data-urlencode 'rnd=3456789987654321' \
    --data-urlencode 'csrf=xxx' \
    -b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code":0,
    "message":"0",
    "ttl":1,
    "data":{
        "action":"",
        "dmid":32161968826613767,
        "dmid_str":"32161968826613767",
        "visible":true
    }
}
```

</details>

## 发送互动弹幕

> https://api.bilibili.com/x/v2/dm/command/post

*请求方式：POST*

认证方式：Cookie（SESSDATA）或APP

2020-09-25 B站更新了互动弹幕功能，包括UP主头像弹幕、关联视频弹幕、视频内嵌引导关注按钮三大功能

详情见：

[【客户端更新】6.10版本更新！UP主支持发布关联视频弹幕]( https://www.bilibili.com/read/cv7728299 )

 [引导关注卡片]( https://www.bilibili.com/blackboard/activity-c8a0iDRQy.html )

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名     | 类型 | 内容                     | 必要性         | 备注                                                         |
| ---------- | ---- | ------------------------ | -------------- | ------------------------------------------------------------ |
| access_key | str  | APP登录Token             | APP方式必要    |                                                              |
| type       | num  | 互动弹幕类型             | 必要           | 1：UP主头像弹幕<br />2：关联视频弹幕<br />5：视频内嵌引导关注按钮 |
| aid        | num  | 稿件avid                 | 必要           |                                                              |
| cid        | num  | 视频cid                  | 必要           |                                                              |
| progress   | num  | 弹幕出现在视频内的时间   | 非必要         | 单位为毫秒<br />默认为0                                      |
| plat       | num  | 平台标识                 | 必要           | 1：web端<br />2：安卓端<br />8：视频管理页面                 |
| data       | str  | json序列                 | 必要           |                                                              |
| dmid       | num  | 修改互动弹幕的弹幕id     | 非必要         | 注：修改弹幕`plat`必须为8                                    |
| csrf       | str  | CSRF Token（位于cookie） | Cookie方式必要 |                                                              |

`data`参数json序列：

类型为【UP主头像弹幕】时：

| 字段 | 类型 | 内容     | 备注 |
| ---- | ---- | -------- | ---- |
| msg  | str  | 弹幕内容 |      |

类型为【关联视频弹幕】时：

| 字段 | 类型 | 内容           | 备注 |
| ---- | ---- | -------------- | ---- |
| msg  | str  | 弹幕内容       |      |
| bvid | str  | 关联视频的bvid |      |

类型为【视频内嵌引导关注按钮】时：

| 字段     | 类型 | 内容     | 备注            |
| -------- | ---- | -------- | --------------- |
| duration | num  | 持续时间 | 单位为毫秒      |
| posX     | num  | X坐标    | 区间：[118-549] |
| posY     | num  | Y坐标    | 区间：[82-293]  |

**json回复：**

根对象：

| 字段    | 类型                          | 内容     | 备注                                                         |
| ------- | ----------------------------- | -------- | ------------------------------------------------------------ |
| code    | num                           | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-111：csrf校验失败<br />-400：请求错误<br />-404：无此项<br />-500：服务器错误<br />36711：该视频禁止发送弹幕<br />79026：发送失败，请勿填写当前稿件bvid<br />79024：发送失败，请输入正确的bvid<br />79036：该指令弹幕超出限制<br />79037：关注弹幕坐标溢出 |
| message | str                           | 错误信息 | 默认为0                                                      |
| ttl     | num                           | 1        |                                                              |
| data    | 正确时：obj<br />错误时：null | 信息本体 |                                                              |

`data`对象：

| 字段     | 类型 | 内容                   | 备注                                                         |
| -------- | ---- | ---------------------- | ------------------------------------------------------------ |
| command  | str  | 指令？                 | UP主头像弹幕：#UP#<br />关联视频弹幕：#LINK#<br />视频内嵌引导关注按钮：#ATTENTION# |
| content  | str  | 弹幕内容               |                                                              |
| extra    | str  | 弹幕数据               | json序列                                                     |
| id       | num  | 弹幕dmid               |                                                              |
| idStr    | str  | 弹幕dmid               | 字串形式                                                     |
| mid      | num  | 用户mid                |                                                              |
| oid      | num  | 视频cid                |                                                              |
| progress | num  | 弹幕出现在视频内的时间 |                                                              |
| type     | num  | 互动弹幕类型           | 1：UP主头像弹幕<br />2：关联视频弹幕<br />5：视频内嵌引导关注按钮 |

`extra`序列数据：

类型为【UP主头像弹幕】时：

| 字段 | 类型 | 内容        | 备注 |
| ---- | ---- | ----------- | ---- |
| icon | str  | UP主头像url |      |

类型为【关联视频弹幕】时：

| 字段  | 类型 | 内容           | 备注 |
| ----- | ---- | -------------- | ---- |
| aid   | num  | 关联视频的avid |      |
| title | str  | 关联视频的标题 |      |
| bvid  | str  | 关联视频的bvid |      |

类型为【视频内嵌引导关注按钮】时：

| 字段     | 类型 | 内容         | 备注                                       |
| -------- | ---- | ------------ | ------------------------------------------ |
| duration | num  | 持续时间     | 单位为毫秒                                 |
| posX     | num  | X坐标        | 区间：[118-549]                            |
| posY     | num  | Y坐标        | 区间：[82-293]                             |
| icon     | str  | 按钮图片url  | 不应该是关注按钮吗，但这个是圆形的         |
| type     | num  | 关注按钮类型 | 0：仅关注<br />1：仅三联<br />2：关注+三联 |

**示例：**

为视频`av201947622`（cid为`230709860`）的5000ms位置发送一条UP主头像弹幕`test`

```shell
curl 'https://api.bilibili.com/x/v2/dm/command/post' \
--data-urlencode 'type=1' \
--data-urlencode 'aid=201947622' \
--data-urlencode 'cid=230709860' \
--data-urlencode 'progress=5000' \
--data-urlencode 'plat=1' \
--data-urlencode 'data={"msg":"test"}' \
--data-urlencode 'csrf=xxx' \
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
        "id": 39053842117558279,
        "oid": 230709860,
        "mid": 293793435,
        "type": 1,
        "command": "#UP#",
        "content": "test",
        "extra": "{\"icon\":\"http://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg\"}",
        "idStr": "39053842117558279"
    }
}
```

</details>

为视频`av201947622`（cid为`230709860`）的5000ms位置发送一条发送关联视频弹幕`测试1234`关联视频为`BV1kz4y1X7XP`

```shell
curl 'https://api.bilibili.com/x/v2/dm/command/post' \
--data-urlencode 'type=2' \
--data-urlencode 'aid=201947622' \
--data-urlencode 'cid=230709860' \
--data-urlencode 'progress=5000' \
--data-urlencode 'plat=1' \
--data-urlencode 'data={"bvid":"BV1kz4y1X7XP","msg":"测试1234"}' \
--data-urlencode 'csrf=xxx' \
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
        "id": 39054383689236483,
        "oid": 230709860,
        "mid": 293793435,
        "type": 2,
        "command": "#LINK#",
        "content": "测试1234",
        "progress": 11925,
        "extra": "{\"aid\":583785685,\"title\":\"【cmd】访问api 命令行也能上B站\",\"bvid\":\"BV1kz4y1X7XP\"}",
        "idStr": "39054383689236483"
    }
}
```

</details>


为视频`av201947622`（cid为`230709860`）的5000ms位置发送视频内嵌引导关注按钮，X坐标为118，Y坐标为82，持续时间为5000ms

```shell
curl 'https://api.bilibili.com/x/v2/dm/command/post' \
--data-urlencode 'type=5' \
--data-urlencode 'aid=201947622' \
--data-urlencode 'cid=230709860' \
--data-urlencode 'progress=5000' \
--data-urlencode 'plat=1' \
--data-urlencode 'data={"duration":5000,"posX":118,"posY":82}' \
--data-urlencode 'csrf=xxx' \
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
        "id": 39055158405496839,
        "oid": 230709860,
        "mid": 293793435,
        "type": 5,
        "command": "#ATTENTION#",
        "progress": 5000,
        "extra": "{\"duration\":5000,\"posX\":118,\"posY\":82}",
        "idStr": "39055158405496839"
    }
}
```

</details>

## 发送打分弹幕

> https://api.bilibili.com/x/v2/dm/command/grade/post

*请求方式: POST*

认证方式: Cookie (SESSDATA)

<!--{
  "gh": [220]
}-->

**正文参数 (application/x-www-form-urlencoded):**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ------ | ---- | ---- | ------ | ---- |
| aid | num | 稿件 aid | 必要 | |
| cid | num | 分 P cid | 必要 | |
| progress | num | 播放进度 | 必要 | 单位为毫秒 |
| grade_id | num | 打分 id | 必要 | |
| grade_score | num | 分数 | 偶数, 最大 10 |
| polaris_app_id | num | 100 | 不必要 |
| polaris_platfrom | num | 5 | 不必要 | |
| spmid | str | 333.788.0.0 | 不必要 | |
| from_spmid | str | 来源 spmid | 不必要 | |
| csrf | str | CSRF Token (即 Cookie 中的 bili_jct) | 必要 | |

**JSON回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| code | num | 返回值 | 0: 成功 |
| message | str | 错误信息 | 默认为 0 |
| ttl | num | 1 | |
| data | obj | 信息本体 | |

`data`对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| dmid | num | 弹幕dmid | |
| dmid_str | str | 弹幕dmid | 字串形式 |
| visible | bool | 是否可见 | |
| action | str | 动作 | `"grade:"` + (请求的分数 / 2) |

**示例:**

```shell
curl -X POST 'https://api.bilibili.com/x/v2/dm/command/grade/post' \
--data-urlencode 'aid=112861976201494' \
--data-urlencode 'cid=500001629877726' \
--data-urlencode 'progress=32000' \
--data-urlencode 'grade_id=3651137' \
--data-urlencode 'grade_score=10' \
--data-urlencode 'csrf=xxx' \
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
    "dmid": 1651556419721443584,
    "dmidStr": "1651556419721443584",
    "visible": true,
    "action": "grade:5"
  }
}
```

</details>

## 撤回弹幕

> https://api.bilibili.com/x/dm/recall

*请求方式：POST*

认证方式：Cookie（SESSDATA）或APP

仅能撤回自己两分钟内的弹幕，且每天只有3次机会

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名     | 类型 | 内容                     | 必要性         | 备注 |
| ---------- | ---- | ------------------------ | -------------- | ---- |
| access_key | str  | APP登录Token             | APP方式必要    |      |
| dmid       | num  | 弹幕dmid                 | 必要           |      |
| cid        | num  | 视频cid                  | 必要           |      |
| csrf       | str  | CSRF Token（位于cookie） | Cookie方式必要 |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-111：csrf校验失败<br />-400：请求错误<br />-404：无此项<br />36301：撤回失败，弹幕发送已过2分钟<br />36302：撤回失败，弹幕已经被删除或撤回<br />36303：撤回失败，今天撤回的机会已经用完<br />36304：撤回失败，服务器出错 |
| message | str  | 错误信息 | 成功后显示剩余次数                                           |
| ttl     | num  | 1        |                                                              |

**示例：**

撤回`cid=168901231`下的弹幕`32310301474947077`的弹幕

```shell
curl 'https://api.bilibili.com/x/dm/recall' \
--data-urlencode 'cid=168901231' \
--data-urlencode 'dmid=32310301474947077' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "撤回成功，你还有3次撤回机会"
}
```

</details>

## 购买高级弹幕发送权限

> https://api.bilibili.com/x/dm/adv/buy

*请求方式：POST*

认证方式：Cookie（SESSDATA）或APP

购买一次需要2硬币，同时向up主发送请求

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名     | 类型 | 内容                     | 必要性         | 备注 |
| ---------- | ---- | ------------------------ | -------------- | ---- |
| access_key | str  | APP登录Token             | APP方式必要    |      |
| mode       | str  | sp                       | 必要           |      |
| cid        | num  | 视频cid                  | 必要           |      |
| csrf       | str  | CSRF Token（位于cookie） | Cookie方式必要 |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-111：csrf校验失败<br />-107：硬币不足<br />-400：请求错误<br />36007：不允许购买<br />36009：正在确认中<br />36010：已购买 |
| message | str  | 返回信息 |                                                              |
| ttl     | num  | 1        |                                                              |

示例：

购买视频cid为`168901231`的高级弹幕发送权限

```shell
curl 'https://api.bilibili.com/x/dm/adv/buy' \
--data-urlencode 'cid=168901231' \
--data-urlencode 'mode=sp' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code":0,
    "message":"已成功购买"
}
```

</details>

## 检测高级弹幕发送权限

> https://api.bilibili.com/x/dm/adv/state

*请求方式：GET*

认证方式：Cookie（SESSDATA）或APP

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注 |
| ---------- | ---- | ------------ | ----------- | ---- |
| access_key | str  | APP登录Token | APP方式必要 |      |
| mode       | str  | sp           | 必要        |      |
| cid        | num  | 视频cid      | 必要        |      |

**json回复：**

根对象：

| 字段    | 类型                          | 内容             | 备注                                               |
| ------- | ----------------------------- | ---------------- | -------------------------------------------------- |
| code    | num                           | 返回值           | 0：成功<br />-101：账号未登录<br />--400：请求错误 |
| message | str                           | 错误信息         | 默认为0                                            |
| ttl     | num                           | 1                |                                                    |
| data    | 有效时：obj<br />无效时：null | 有效时：信息本体 |                                                    |

`data`对象：

| 字段    | 类型 | 内容             | 备注                                       |
| ------- | ---- | ---------------- | ------------------------------------------ |
| coins   | num  | 需要支付的硬币数 |                                            |
| confirm | num  | 是否同意         | 1：同意<br />2：未同意<br />未购买时无此项 |
| accept  | bool | 是否允许申请     | true：允许<br />false：不允许              |
| hasBuy  | bool | 是否已购买       | true：已购买<br />未购买时无此项           |

**示例：**

查询视频cid为`168901231`的视频高级弹幕权限购买状态

当前状态为已购买且同意

```shell
curl -G 'https://api.bilibili.com/x/dm/adv/state' \
--data-urlencode 'cid=168901231' \
--data-urlencode 'mode=sp' \
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
        "coins": 2,
        "confirm": 1,
        "accept": true,
        "hasBuy": true
    }
}
```

</details>

## 点赞弹幕

> https://api.bilibili.com/x/v2/dm/thumbup/add

*请求方式：POST*

认证方式：Cookie（SESSDATA）或APP

查询指定弹幕点赞状态参阅文档 [弹幕点赞查询](thumbup.md)

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名     | 类型 | 内容                      | 必要性          | 备注                                        |
| ---------- | ---- | ------------------------- | --------------- | ------------------------------------------- |
| access_key | str  | APP 登录 Token            | APP 方式必要    |                                             |
| dmid       | num  | 目标弹幕 dmid             | 必要            |                                             |
| oid        | num  | 目标弹幕所在视频 cid      | 必要            |                                             |
| op         | num  | 操作                      | 必要            | 1：点赞<br />2：取消点赞                    |
| platform   | str  | 平台标识                  | 非必要          | web_player：web 播放器<br />android：安卓端 |
| csrf       | str  | CSRF Token（位于 Cookie） | Cookie 方式必要 |                                             |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                                                                                                                                 |
|---------|-----|------|------------------------------------------------------------------------------------------------------------------------------------|
| code    | num | 返回值  | 0：成功<br />-101：账号未登录<br />-111：csrf 校验失败<br />-400：请求错误<br />36106：该弹幕已被删除<br/>36805：该视频禁止点赞弹幕<br/>65004：取消赞失败 未点赞过<br />65006：已赞过 |
| message | str | 错误信息 | 默认为0                                                                                                                               |
| tll     | num | 1    |                                                                                                                                    |

**示例**

为`cid=145928946`下的弹幕`35600074482384899`点赞

```shell
curl 'https://api.bilibili.com/x/v2/dm/thumbup/add' \
    --data-urlencode 'dmid=35600074482384899' \
    --data-urlencode 'oid=145928946' \
    --data-urlencode 'op=1' \
    --data-urlencode 'platform=web_player' \
    --data-urlencode 'csrf=xxx' \
    -b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code":0,
    "message":"0",
    "ttl":1
}
```

</details>

## 举报弹幕

> https://api.bilibili.com/x/dm/report/add

*请求方式：POST*

认证方式：Cookie（SESSDATA）或APP

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名     | 类型 | 内容                     | 必要性         | 备注               |
| ---------- | ---- | ------------------------ | -------------- | ------------------ |
| access_key | str  | APP登录Token             | APP方式必要    |                    |
| cid        | num  | 视频cid                  | 必要           |                    |
| dmid       | num  | 弹幕dmid                 | 必要           |                    |
| reason     | num  | 举报类型                 | 必要           | **类型代码见下表** |
| content    | str  | 其他举报备注             | 非必要         | `reason=11`时有效  |
| csrf       | str  | CSRF Token（位于cookie） | Cookie方式必要 |                    |

举报类型`reason`：

| 代码 | 含义       |
| ---- | ---------- |
| 1    | 违法违禁   |
| 2    | 色情低俗   |
| 3    | 赌博诈骗   |
| 4    | 人身攻击   |
| 5    | 侵犯隐私   |
| 6    | 垃圾广告   |
| 7    | 引战       |
| 8    | 剧透       |
| 9    | 恶意刷屏   |
| 10   | 视频无关   |
| 11   | 其他       |
| 12   | 青少年不良 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf 校验失败<br />-400：请求错误<br />36201：举报弹幕不存在<br />36203：举报原因类型错误<br />36204：已举报 |
| message | str  | 错误信息 | 默认为空                                                     |
| tll     | num  | 1        | 举报失败时                                                   |

**示例**

举报`cid=145928946`下的弹幕`35600074482384899`，理由是`引战`

```shell
curl 'https://api.bilibili.com/x/dm/report/add' \
--data-urlencode 'cid=145928946' \
--data-urlencode 'dmid=35600074482384899' \
--data-urlencode 'reason=7' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code":0,
    "message":""
}
```

</details>

## 保护&删除弹幕

> https://api.bilibili.com/x/v2/dm/edit/state

*请求方式：POST*

认证方式：Cookie（SESSDATA） 或APP 

注：只能操作自己的稿件或有骑士权限的稿件

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名     | 类型 | 内容                     | 必要性         | 备注                                          |
| ---------- | ---- | ------------------------ | -------------- | --------------------------------------------- |
| access_key | str  | APP登录Token             | APP方式必要    |                                               |
| type       | num  | 弹幕类选择               | 必要           | 1：视频弹幕                                   |
| oid        | num  | 视频cid                  | 必要           |                                               |
| dmids      | nums | 弹幕dmid                 | 必要           | 多个id之间用`,`分隔                           |
| state      | num  | 操作代码                 | 必要           | 1：删除弹幕<br />2：弹幕保护<br />3：取消保护 |
| csrf       | str  | CSRF Token（位于cookie） | Cookie方式必要 |                                               |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf 校验失败<br />-400：请求错误<br />-403：访问权限不足 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例**

删除`cid=145928946`下的弹幕`35600074482384899`、`39067304918515717`、`39082777041174531`

```shell
curl 'https://api.bilibili.com/x/v2/dm/edit/state' \
--data-urlencode 'type=1' \
--data-urlencode 'oid=145928946' \
--data-urlencode 'dmids=35600074482384899,39067304918515717,39082777041174531' \
--data-urlencode 'state=1' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code":0,
    "message":"0",
    "ttl":1
}
```

</details>

## 修改字幕池

> https://api.bilibili.com/x/v2/dm/edit/pool

*请求方式：POST*

认证方式：Cookie（SESSDATA） 或APP 

注：只能操作自己的稿件或有骑士权限的稿件

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名     | 类型 | 内容                     | 必要性         | 备注                             |
| ---------- | ---- | ------------------------ | -------------- | -------------------------------- |
| access_key | str  | APP登录Token             | APP方式必要    |                                  |
| type       | num  | 弹幕类选择               | 必要           | 1：视频弹幕                      |
| oid        | num  | 视频cid                  | 必要           |                                  |
| dmids      | nums | 弹幕dmid                 | 必要           | 多个id之间用`,`分隔              |
| pool       | num  | 操作代码                 | 必要           | 0：移出字幕池<br />1：移入字幕池 |
| csrf       | str  | CSRF Token（位于cookie） | Cookie方式必要 |                                  |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf 校验失败<br />-400：请求错误<br />-403：访问权限不足 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例**

将`cid=145928946`下的弹幕`35600074482384899`、`39067304918515717`、`39082777041174531`移入字幕池

```shell
curl 'https://api.bilibili.com/x/v2/dm/edit/state' \
--data-urlencode 'type=1' \
--data-urlencode 'oid=145928946' \
--data-urlencode 'pool=1' \
--data-urlencode 'dmids=35600074482384899,39067304918515717,39082777041174531' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code":0,
    "message":"0",
    "ttl":1
}
```

</details>
