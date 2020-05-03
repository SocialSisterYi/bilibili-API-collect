# 弹幕操作

## 发送视频弹幕

> http://api.bilibili.com/x/v2/dm/post 

*方式：POST*

需要登录(SESSDATA)

**参数（ application/x-www-form-urlencoded ）：**

| 参数名   | 类型 | 内容                   | 必要性 | 备注                                                         |
| -------- | ---- | ---------------------- | ------ | ------------------------------------------------------------ |
| type     | data | 1                      | 必要   |                                                              |
| oid      | data | 视频CID                | 必要   |                                                              |
| msg      | data | 弹幕内容               | 必要   | 长度小于100字符                                              |
| bvid     | data | 视频bvID               | 非必要 | avID与bvID任选一个                                           |
| aid      | data | 视频avID               | 非必要 | avID与bvID任选一个                                           |
| progress | data | 弹幕出现在视频内的时间 | 非必要 | 单位为毫秒<br />默认为0                                      |
| color    | data | 弹幕颜色设置           | 非必要 | 详见[「弹幕」中的属性 p](danmaku.md#属性 p)<br />默认为16777215（#FFFFFF）白色 |
| fontsize | data | 弹幕字号设置           | 非必要 | 详见[「弹幕」中的属性 p](danmaku.md#属性 p)<br />默认为25    |
| pool     | data | 弹幕池选择             | 非必要 | 0：普通弹幕<br />1：字幕弹幕<br />默认为0                    |
| mode     | data | 弹幕类型选择           | 必要   | 详见[「弹幕」中的属性 p](danmaku.md#属性 p)                  |
| rnd      | data | 16位10进制随机数       | 非必要 | **若无此项，则发送弹幕冷却时间限制为90s**<br />若有此项，则发送弹幕冷却时间限制为5s |
| csrf     | data | cookies中的bili_jct    | 必要   |                                                              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-111：csrf校验失败<br />-400：请求错误<br />-404：无此项<br />36702：弹幕长度大于100<br />36703：发送频率过快<br />36711：该视频禁止发送弹幕<br />36714：弹幕出现时刻超过视频总时长<br />**（其他错误码有待补充）** |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段     | 类型 | 内容   | 备注         |
| -------- | ---- | ------ | ------------ |
| action   | str  | 空     | 作用尚不明确 |
| dmid     | num  | 弹幕ID |              |
| dmid_str | str  | 弹幕ID | 字串形式     |
| visible  | bool | true   | 作用尚不明确 |

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

