# 弹幕操作

## 发送视频弹幕

> http://api.bilibili.com/x/v2/dm/post 

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名   | 类型 | 内容                     | 必要性         | 备注                                                         |
| -------- | ---- | ------------------------ | -------------- | ------------------------------------------------------------ |
| type     | num  | 1                        | 必要           |                                                              |
| oid      | num  | 视频CID                  | 必要           |                                                              |
| msg      | str  | 弹幕内容                 | 必要           | 长度小于100字符                                              |
| bvid     | str  | 视频bvID                 | 必要（可选）   | avID与bvID任选一个                                           |
| aid      | num  | 视频avID                 | 必要（可选）   | avID与bvID任选一个                                           |
| progress | num  | 弹幕出现在视频内的时间   | 非必要         | 单位为毫秒<br />默认为0                                      |
| color    | num  | 弹幕颜色设置             | 非必要         | 十进制RGB888值<br />默认为16777215（#FFFFFF）白色            |
| fontsize | num  | 弹幕字号设置             | 非必要         | 默认为25<br />极小：12<br />超小：16<br />小：18<br />标准：25<br />大：36<br />超大：45<br />极大：64 |
| pool     | num  | 弹幕池选择               | 非必要         | 0：普通池<br />1：字幕池<br />2：特殊池（代码/BAS弹幕）<br />默认为0 |
| mode     | num  | 弹幕类型选择             | 必要           | 1：普通弹幕<br />4：底部弹幕<br />5：顶部弹幕<br />7：高级弹幕<br />9：BAS弹幕（`pool`必须为2） |
| rnd      | num  | 当前时间戳*1000000       | 非必要         | **若无此项，则发送弹幕冷却时间限制为90s**<br />若有此项，则发送弹幕冷却时间限制为5s |
| csrf     | str  | CSRF Token（位于cookie） | Cookie方式必要 |                                                              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-111：csrf校验失败<br />-400：请求错误<br />-404：无此项<br />36700：系统升级中<br />36701：弹幕包含被禁止的内容<br />36702：弹幕长度大于100<br />36703：发送频率过快<br />36704：禁止向未审核的视频发送弹幕<br />36705：您的等级不足，不能发送弹幕<br />36706：您的等级不足，不能发送顶端弹幕<br />36707：您的等级不足，不能发送底端弹幕<br />36708：您的等级不足，不能发送彩色弹幕<br />36709：您的等级不足，不能发送高级弹幕<br />36710：您的权限不足，不能发送这种样式的弹幕<br />36711：该视频禁止发送弹幕<br />36712：level 1用户发送弹幕的最大长度为20<br />36713：稿件未付费<br />36714：弹幕发送时间不合法<br />36715：当日操作数量超过上限 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段     | 类型 | 内容     | 备注         |
| -------- | ---- | -------- | ------------ |
| action   | str  | 空       | 作用尚不明确 |
| dmid     | num  | 弹幕dmID |              |
| dmid_str | str  | 弹幕dmID | 字串形式     |
| visible  | bool | true     | 作用尚不明确 |

**示例：**

为视频`av2`/`BV1xx411c7mD`（CID为`62131`）的5000ms位置发送一条弹幕`前来考古`（颜色为#FFFFFF，字号25，普通弹幕，游动弹幕）

```shell
curl 'http://api.bilibili.com/x/v2/dm/post'\
--data-urlencode 'type=1'\
--data-urlencode 'oid=62131'\
--data-urlencode 'msg=前来考古'\
--data-urlencode 'aid=2'\
--data-urlencode 'progress=5000'\
--data-urlencode 'color=16777215'\
--data-urlencode 'fontsize=25'\
--data-urlencode 'pool=0'\
--data-urlencode 'mode=1'\
--data-urlencode 'rnd=3456789987654321'\
--data-urlencode 'csrf=xxx'\
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

> http://api.bilibili.com/x/v2/dm/command/post

*请求方式：POST*

认证方式：Cookie（SESSDATA）或APP

2020-09-25 B站更新了互动弹幕功能，包括UP主头像弹幕、关联视频弹幕、视频内嵌引导关注按钮三大功能

详情见：

[【客户端更新】6.10版本更新！UP主支持发布关联视频弹幕]( https://www.bilibili.com/read/cv7728299 )

 [引导关注卡片]( https://www.bilibili.com/blackboard/activity-c8a0iDRQy.html )

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名   | 类型 | 内容                     | 必要性         | 备注                                                         |
| -------- | ---- | ------------------------ | -------------- | ------------------------------------------------------------ |
| type     | num  | 互动弹幕类型             | 必要           | 1：UP主头像弹幕<br />2：关联视频弹幕<br />5：视频内嵌引导关注按钮 |
| aid      | num  | 视频avID                 | 必要           |                                                              |
| cid      | num  | 视频CID                  | 必要           |                                                              |
| progress | num  | 弹幕出现在视频内的时间   | 非必要         | 单位为毫秒<br />默认为0                                      |
| plat     | num  | 平台标识                 | 必要           | 1：web端<br />2：安卓端<br />8：视频管理页面                 |
| data     | str  | json序列                 | 必要           |                                                              |
| dmid     | num  | 修改互动弹幕的弹幕ID     | 非必要         | 注：修改弹幕`plat`必须为8                                    |
| csrf     | str  | CSRF Token（位于cookie） | Cookie方式必要 |                                                              |

`data`参数：

类型为【UP主头像弹幕】时：

| 字段 | 类型 | 内容     | 备注 |
| ---- | ---- | -------- | ---- |
| msg  | str  | 弹幕内容 |      |

类型为【关联视频弹幕】时：

| 字段 | 类型 | 内容           | 备注 |
| ---- | ---- | -------------- | ---- |
| msg  | str  | 弹幕内容       |      |
| bvid | str  | 关联视频的bvID |      |

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
| code    | num                           | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-111：csrf校验失败<br />-400：请求错误<br />-404：无此项<br />-500：服务器错误<br />36711：该视频禁止发送弹幕<br />79026：发送失败，请勿填写当前稿件BVID<br />79024：发送失败，请输入正确的BVID<br />79036：该指令弹幕超出限制<br />79037：关注弹幕坐标溢出 |
| message | str                           | 错误信息 | 默认为0                                                      |
| ttl     | num                           | 1        |                                                              |
| data    | 正确时：obj<br />错误时：null | 信息本体 |                                                              |

`data`对象：

| 字段     | 类型 | 内容                   | 备注                                                         |
| -------- | ---- | ---------------------- | ------------------------------------------------------------ |
| command  | str  | 指令？                 | UP主头像弹幕：#UP#<br />关联视频弹幕：#LINK#<br />视频内嵌引导关注按钮：#ATTENTION# |
| content  | str  | 弹幕内容               |                                                              |
| extra    | str  | 弹幕数据               | json序列                                                     |
| id       | num  | 弹幕dmID               |                                                              |
| idStr    | str  | 弹幕dmID               | 字串形式                                                     |
| mid      | num  | 用户UID                |                                                              |
| oid      | num  | 视频CID                |                                                              |
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
| aid   | num  | 关联视频的avID |      |
| title | str  | 关联视频的标题 |      |
| bvid  | str  | 关联视频的bvID |      |

**示例：**

为视频`av201947622`（CID为`230709860`）的5000ms位置发送一条UP主头像弹幕`test`

```shell
curl 'http://api.bilibili.com/x/v2/dm/command/post'\
--data-urlencode 'type=1'\
--data-urlencode 'aid=201947622'\
--data-urlencode 'cid=230709860'\
--data-urlencode 'progress=5000'\
--data-urlencode 'plat=1'\
--data-urlencode 'data={"msg":"test"}'\
--data-urlencode 'csrf=xxx'\
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

为视频`av201947622`（CID为`230709860`）的5000ms位置发送一条发送关联视频弹幕`测试1234`关联视频为`BV1kz4y1X7XP`

```shell
curl 'http://api.bilibili.com/x/v2/dm/command/post'\
--data-urlencode 'type=2'\
--data-urlencode 'aid=201947622'\
--data-urlencode 'cid=230709860'\
--data-urlencode 'progress=5000'\
--data-urlencode 'plat=1'\
--data-urlencode 'data={"bvid":"BV1kz4y1X7XP","msg":"测试1234"}'\
--data-urlencode 'csrf=xxx'\
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


为视频`av201947622`（CID为`230709860`）的5000ms位置发送视频内嵌引导关注按钮，X坐标为118，Y坐标为82，持续时间为5000ms

```shell
curl 'http://api.bilibili.com/x/v2/dm/command/post'\
--data-urlencode 'type=5'\
--data-urlencode 'aid=201947622'\
--data-urlencode 'cid=230709860'\
--data-urlencode 'progress=5000'\
--data-urlencode 'plat=1'\
--data-urlencode 'data={"duration":5000,"posX":118,"posY":82}'\
--data-urlencode 'csrf=xxx'\
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


## 撤回弹幕

> http://api.bilibili.com/x/dm/recall

*请求方式：POST*

认证方式：Cookie（SESSDATA）

仅能撤回自己两分钟内的弹幕，且每天只有3次机会

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                     | 必要性 | 备注 |
| ------ | ---- | ------------------------ | ------ | ---- |
| dmid   | num  | 弹幕dmID                 | 必要   |      |
| cid    | num  | 视频CID                  | 必要   |      |
| csrf   | str  | CSRF Token（位于cookie） | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-111：csrf校验失败<br />-400：请求错误<br />-404：无此项<br />36301：撤回失败，弹幕发送已过2分钟<br />36302：撤回失败，弹幕已经被删除或撤回<br />36303：撤回失败，今天撤回的机会已经用完<br />36304：撤回失败，服务器出错 |
| message | str  | 错误信息 | 成功后显示剩余次数                                           |
| ttl     | num  | 1        |                                                              |

**示例：**

撤回`CID=168901231`下的弹幕`32310301474947077`的弹幕

```shell
curl 'http://api.bilibili.com/x/dm/recall'\
--data-urlencode 'cid=168901231'\
--data-urlencode 'dmid=32310301474947077'\
--data-urlencode 'csrf=xxx'\
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

> http://api.bilibili.com/x/dm/adv/buy

*请求方式：POST*

认证方式：Cookie（SESSDATA）

购买一次需要2硬币，同时向up主发送请求

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                     | 必要性 | 备注 |
| ------ | ---- | ------------------------ | ------ | ---- |
| mode   | str  | sp                       | 必要   |      |
| cid    | num  | 视频CID                  | 必要   |      |
| csrf   | str  | CSRF Token（位于cookie） | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-111：csrf校验失败<br />-107：硬币不足<br />-400：请求错误<br />36007：不允许购买<br />36009：正在确认中<br />36010：已购买 |
| message | str  | 返回信息 |                                                              |
| ttl     | num  | 1        |                                                              |

示例：

购买视频CID为`168901231`的高级弹幕发送权限

```shell
curl 'http://api.bilibili.com/x/dm/adv/buy'\
--data-urlencode 'cid=168901231'\
--data-urlencode 'mode=sp'\
--data-urlencode 'csrf=xxx'\
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

> http://api.bilibili.com/x/dm/adv/state

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名 | 类型 | 内容    | 必要性 | 备注 |
| ------ | ---- | ------- | ------ | ---- |
| mode   | str  | sp      | 必要   |      |
| cid    | num  | 视频CID | 必要   |      |

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

查询视频CID为`168901231`的视频高级弹幕权限购买状态

当前状态为已购买且同意

```shell
curl -G 'http://api.bilibili.com/x/dm/adv/state'\
--data-urlencode 'cid=168901231'\
--data-urlencode 'mode=sp'\
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
