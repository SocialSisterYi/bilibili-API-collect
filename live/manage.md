# 直播间管理

**本页所有操作均需登录（SESSDATA）**

## 更新直播间标题

> http://api.live.bilibili.com/room/v1/Room/update

*方式：POST*

还需验证cookie中`bili_jct`的值正确并与`csrf`相同

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名  | 类型 | 内容                | 必要性 | 备注                 |
| ------- | ---- | ------------------- | ------ | -------------------- |
| room_id | num  | 直播间ID            | 必要   | 必须为自己的直播间ID |
| title   | str  | 直播间标题          | 必要   | 最大20字符           |
| csrf    | str  | cookies中的bili_jct | 必要   |                      |

**json回复：**

根对象：

| 字段    | 类型   | 内容     | 备注                                                   |
| ------- | ------ | -------- | ------------------------------------------------------ |
| code    | num    | 返回值   | 0：成功<br />65530：token错误（登录错误）<br />1：错误 |
| msg     | str    | 错误信息 | 默认为ok                                               |
| message | str    | 错误信息 | 默认为ok                                               |
| data    | array | 空       |                                                        |

**示例：**

修改直播间`10352053`标题为`测试`

curl -b "SESSDATA=xxx;bili_jct=xxx" -d "room_id=10352053&title=%E6%B5%8B%E8%AF%95" "http://api.live.bilibili.com/room/v1/Room/update"

```json
{
    "code": 0,
    "msg": "ok",
    "message": "ok",
    "data": []
}
```



## 开始直播

> http://api.live.bilibili.com/room/v1/Room/startLive

*方式：POST*

还需验证cookie中`bili_jct`的值正确并与`csrf`相同

开播时必须有分区选择，开播后返回推流地址

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名   | 类型 | 内容                   | 必要性 | 备注                         |
| -------- | ---- | ---------------------- | ------ | ---------------------------- |
| room_id  | num  | 直播间ID               | 必要   | 必须为自己的直播间ID         |
| area_v2  | num  | 直播分区ID（子分区ID） | 必要   | 详见[直播分区](live_area.md) |
| platform | str  | 必须为`pc`             | 必要   |                              |
| csrf     | str  | cookies中的bili_jct    | 必要   |                              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />65530：token错误（登录错误）<br />1：错误<br />60009：分区不存在<br />**（其他错误码有待补充）** |
| msg     | str  | 错误信息 | 默认为空                                                     |
| message | str  | 错误信息 | 默认为空                                                     |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段      | 类型   | 内容             | 备注                   |
| --------- | ------ | ---------------- | ---------------------- |
| change    | num    | 是否改变状态     | 0：未改变<br />1：改变 |
| status    | str    | LIVE             |                        |
| room_type | num    | 0                | 作用尚不明确           |
| rtmp      | obj    | RTMP推流地址信息 |                        |
| protocols | srrary | ？？？           | 作用尚不明确           |
| try_time  | str    | ？？？           | 作用尚不明确           |
| live_key  | str    | ？？？           | 作用尚不明确           |
| notice    | obj    | ？？？           | 作用尚不明确           |

`data`中的`rtmp`对象：

| 字段     | 类型 | 内容                             | 备注         |
| -------- | ---- | -------------------------------- | ------------ |
| addr     | str  | RTMP推流（发送）地址             | **重要**     |
| code     | str  | RTMP推流参数（密钥）             | **重要**     |
| new_link | str  | 获取CDN推流ip地址重定向信息的url | 没啥用       |
| provider | str  | ？？？                           | 作用尚不明确 |

`data`中的`protocols`数组：

| 项   | 类型 | 内容   | 备注         |
| ---- | ---- | ------ | ------------ |
| 0    | obj  | ？？？ | 作用尚不明确 |

`data`中的`protocols`数组中的对象：

| 字段     | 类型 | 内容                             | 备注         |
| -------- | ---- | -------------------------------- | ------------ |
| protocol | str  | rtmp                             | 作用尚不明确 |
| addr     | str  | RTMP推流（发送）地址             |              |
| code     | str  | RTMP推流参数（密钥）             |              |
| new_link | str  | 获取CDN推流ip地址重定向信息的url |              |
| provider | str  | txy                              | 作用尚不明确 |

`data`中的`notice`对象：

| 字段        | 类型 | 内容 | 备注         |
| ----------- | ---- | ---- | ------------ |
| type        | num  | 1    | 作用尚不明确 |
| status      | num  | 0    | 作用尚不明确 |
| title       | str  | 空   | 作用尚不明确 |
| msg         | str  | 空   | 作用尚不明确 |
| button_text | str  | 空   | 作用尚不明确 |
| button_url  | str  | 空   | 作用尚不明确 |

**示例：**

以`27`作为分区ID开播直播间`10352053`

其中`"data"."rtmp"."addr"`为推流地址

`"data"."rtmp"."code"`为推流参数

curl -b "SESSDATA=xxx;bili_jct=xxx" -d "room_id=10352053&area_v2=27&platform=pc&csrf=xxx" "http://api.live.bilibili.com/room/v1/Room/startLive"

```json
{
    "code": 0,
    "msg": "",
    "message": "",
    "data": {
        "change": 1,
        "status": "LIVE",
        "room_type": 0,
        "rtmp": {
            "addr": "rtmp://txy.live-send.acg.tv/live-txy/",
            "code": "?streamname=live_293793435_1567354&key=***",
            "new_link": "http://tcdns.myqcloud.com:8086/bilibili_redirect?up_rtmp=txy.live-send.acg.tv%2Flive-txy%2F%3Fstreamname%3Dlive_293793435_1567354%26key%3D***",
            "provider": "txy"
        },
        "protocols": [
            {
                "protocol": "rtmp",
                "addr": "rtmp://txy.live-send.acg.tv/live-txy/",
                "code": "?streamname=live_293793435_1567354&key=***",
                "new_link": "http://tcdns.myqcloud.com:8086/bilibili_redirect?up_rtmp=txy.live-send.acg.tv%2Flive-txy%2F%3Fstreamname%3Dlive_293793435_1567354%26key%3D***",
                "provider": "txy"
            }
        ],
        "try_time": "0000-00-00 00:00:00",
        "live_key": "l:one:live:record:10352053:1589344980",
        "notice": {
            "type": 1,
            "status": 0,
            "title": "",
            "msg": "",
            "button_text": "",
            "button_url": ""
        }
    }
}
```



## 关闭直播

> http://api.live.bilibili.com/room/v1/Room/stopLive

*方式：POST*

还需验证cookie中`bili_jct`的值正确并与`csrf`相同

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名  | 类型 | 内容                | 必要性 | 备注                 |
| ------- | ---- | ------------------- | ------ | -------------------- |
| room_id | num  | 直播间ID            | 必要   | 必须为自己的直播间ID |
| csrf    | str  | cookies中的bili_jct | 必要   |                      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />65530：token错误（登录错误）<br />-400：没有权限<br />**（其他错误码有待补充）** |
| msg     | str  | 错误信息 | 默认为空                                                     |
| message | str  | 错误信息 | 默认为空                                                     |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段   | 类型 | 内容         | 备注                   |
| ------ | ---- | ------------ | ---------------------- |
| change | num  | 是否改变状态 | 0：未改变<br />1：改变 |
| status | str  | PREPARING    |                        |

**示例：**

关闭直播间`10352053`的直播

curl -b "SESSDATA=xxx;bili_jct=xxx" -d "room_id=10352053&csrf=xxx" "http://api.live.bilibili.com/room/v1/Room/stopLive"

```json
{
    "code": 0,
    "msg": "",
    "message": "",
    "data": {
        "change": 1,
        "status": "PREPARING"
    }
}
```

