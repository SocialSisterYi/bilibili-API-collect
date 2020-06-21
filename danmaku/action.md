# 弹幕操作

## 发送视频弹幕

> http://api.bilibili.com/x/v2/dm/post 

*方式：POST*

需要登录(SESSDATA)

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名   | 类型 | 内容                   | 必要性       | 备注                                                         |
| -------- | ---- | ---------------------- | ------------ | ------------------------------------------------------------ |
| type     | num  | 1                      | 必要         |                                                              |
| oid      | num  | 视频CID                | 必要         |                                                              |
| msg      | str  | 弹幕内容               | 必要         | 长度小于100字符                                              |
| bvid     | str  | 视频bvID               | 必要（可选） | avID与bvID任选一个                                           |
| aid      | num  | 视频avID               | 必要（可选） | avID与bvID任选一个                                           |
| progress | num  | 弹幕出现在视频内的时间 | 非必要       | 单位为毫秒<br />默认为0                                      |
| color    | num  | 弹幕颜色设置           | 非必要       | 详见[「弹幕」中的属性 p](danmaku.md#属性 p)<br />默认为16777215（#FFFFFF）白色 |
| fontsize | num  | 弹幕字号设置           | 非必要       | 详见[「弹幕」中的属性 p](danmaku.md#属性 p)<br />默认为25    |
| pool     | num  | 弹幕池选择             | 非必要       | 0：普通弹幕<br />1：字幕弹幕<br />2：BAS弹幕<br />默认为0    |
| mode     | num  | 弹幕类型选择           | 必要         | 1：普通<br />4：底部<br />5：顶部<br />7：高级<br />9：BAS（`pool`必须为2） |
| rnd      | num  | 16位10进制随机数       | 非必要       | **若无此项，则发送弹幕冷却时间限制为90s**<br />若有此项，则发送弹幕冷却时间限制为5s |
| csrf     | str  | cookies中的bili_jct    | 必要         |                                                              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-111：csrf校验失败<br />-400：请求错误<br />-404：无此项<br />36702：弹幕长度大于100<br />36703：发送频率过快<br />36709：您的等级不足，不能发送高级弹幕<br />36710：您的权限不足，不能发送这种样式的弹幕<br />36711：该视频禁止发送弹幕<br />36714：弹幕出现时刻超过视频总时长<br />**（其他错误码有待补充）** |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段     | 类型 | 内容     | 备注         |
| -------- | ---- | -------- | ------------ |
| action   | str  | 空       | 作用尚不明确 |
| dmid     | num  | 弹幕dmID |              |
| dmid_str | str  | 弹幕dmID | 字串形式     |
| visible  | bool | true     | 作用尚不明确 |

**示例：**

为视频`av2`/`BV1xx411c7mD`（CID为`62131`）的5s位置发送一条弹幕`前来考古`（颜色为#FFFFFF，字号25，普通弹幕，游动弹幕）

curl -b "SESSDATA=xxx" -d "type=1&oid=62131&msg=%e5%89%8d%e6%9d%a5%e8%80%83%e5%8f%a4&aid=2&progress=5000&color=16777215&fontsize=25&pool=0&mode=1&rnd=3456789987654321&csrf=xxx" "http://api.bilibili.com/x/v2/dm/post"

同curl -b "SESSDATA=xxx" -d "type=1&oid=62131&msg=%e5%89%8d%e6%9d%a5%e8%80%83%e5%8f%a4&bvid=BV1xx411c7mD&progress=5000&color=16777215&fontsize=25&pool=0&mode=1&rnd=3456789987654321&csrf=xxx" "http://api.bilibili.com/x/v2/dm/post"

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



## 撤回弹幕

> http://api.bilibili.com/x/dm/recall

*方式：POST*

仅能撤回自己两分钟内的弹幕，且每天只有3次机会

需要登录(SESSDATA)

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                | 必要性 | 备注 |
| ------ | ---- | ------------------- | ------ | ---- |
| dmid   | num  | 弹幕dmID            | 必要   |      |
| cid    | num  | 视频CID             | 必要   |      |
| csrf   | str  | cookies中的bili_jct | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-111：csrf校验失败<br />-400：请求错误<br />-404：无此项<br />36301：撤回失败，弹幕发送已过2分钟<br />36302：撤回失败，弹幕已经被删除或撤回<br />36303：撤回失败，今天撤回的机会已经用完<br />**（其他错误码有待补充）** |
| message | str  | 错误信息 | 成功后显示剩余次数                                           |
| ttl     | num  | 1        | 作用尚不明确                                                 |

**示例：**

撤回视频CID为`168901231`弹幕ID为`32310301474947077`的弹幕

curl -b "SESSDATA=xxx" -d "dmid=32310301474947077&cid=168901231&csrf=xxx" "http://api.bilibili.com/x/dm/recall"

```json
{
    "code": 0,
    "message": "撤回成功，你还有3次撤回机会"
}
```



## 购买高级弹幕发送权限

> http://api.bilibili.com/x/dm/adv/buy

*方式：POST*

需要登录(SESSDATA)

购买一次需要2硬币，同时向up主发送请求

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                | 必要性 | 备注 |
| ------ | ---- | ------------------- | ------ | ---- |
| mode   | str  | sp                  | 必要   |      |
| cid    | num  | 视频CID             | 必要   |      |
| csrf   | str  | cookies中的bili_jct | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-111：csrf校验失败<br />-107：硬币不足<br />-400：请求错误<br />36010：已购买 |
| message | str  | 返回信息 |                                                              |
| ttl     | num  | 1        | 作用尚不明确                                                 |

示例：

购买视频CID为`168901231`的高级弹幕发送权限

curl -b "SESSDATA=xxx" -d "mode=sp&cid=168901231&csrf=xxx" "http://api.bilibili.com/x/dm/adv/buy"

```json
{
    "code":0,
    "message":"已成功购买"
}
```



## 检测高级弹幕发送权限

> http://api.bilibili.com/x/dm/adv/state

*方式：GET*

需要登录(SESSDATA)

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
| ttl     | num                           | 1                | 作用尚不明确                                       |
| data    | 有效时：obj<br />无效时：null | 有效时：信息本体 |                                                    |

`data`对象：

| 字段    | 类型 | 内容             | 备注                                       |
| ------- | ---- | ---------------- | ------------------------------------------ |
| coins   | num  | 需要支付的硬币数 |                                            |
| confirm | num  | 是否同意         | 1：同意<br />2：未同意<br />未购买时无此项 |
| accept  | bool | 是否允许申请     |                                            |
| hasBuy  | bool | 是否已购买       | true：已购买<br />未购买时无此项           |

**示例：**

查询视频CID为`168901231`的视频高级弹幕权限购买状态

当前状态为已购买且同意

https://api.bilibili.com/x/dm/adv/state?cid=168901231&mode=sp

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

