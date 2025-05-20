# 直播间管理

## 开通直播间

> https://api.live.bilibili.com/xlive/app-blink/v1/preLive/CreateRoom

*请求方式：POST*

认证方式：Cookie（SESSDATA）

鉴权方式：Cookie中`bili_jct`的值正确并与`csrf`相同

**正文参数（ application/x-www-form-urlencoded ）：**
| 参数名  | 类型 | 内容                     | 必要性 | 备注                 |
| ------- | ---- | ------------------------ | ------ | -------------------- |
| platform | str  | 客户端？                 | 必要   | 默认值web |
| visit_id   | str  | 未知               |        | 默认空           |
| csrf    | str  | CSRF Token（位于cookie） | 必要   |                      |
| csrf_token | str  | CSRF Token（位于 cookie） |     |                       |


**json回复：**

根对象：

| 字段    | 类型   | 内容     | 备注                                                   |
| ------- | ------ | -------- | ------------------------------------------------------ |
| code    | num    | 返回值   | 0：成功<br />1531193016：已经创建直播间~<br />-400：请求错误 |
| ttl     | str    | 错误信息 | 默认为1                                               |
| message | str    | 错误信息 | 默认为0                                               |
| data    | array | 信息本体       |                                                        |

`data`对象：

| 字段      | 类型  | 内容             | 备注                   |
| --------- | ----- | ---------------- | ---------------------- |
| roomID    | str   | 直播间房间号     | 创建成功返回直播间号 |

**示例：**

开通直播间

```shell
curl 'https://api.live.bilibili.com/xlive/app-blink/v1/preLive/CreateRoom' \
--data-urlencode 'platform=web' \
--data-urlencode 'visit_id=' \
--data-urlencode 'csrf=xxx' \
--data-urlencode 'csrf_token=xxx' \
-b 'SESSDATA=xxx;bili_jct=xx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "roomID": "1234"
  }
}
```

```json
{
  "code": 1531193016,
  "message": "已经创建直播间~",
  "ttl": 1,
  "data": {
    "roomID": ""
  }
}
```

</details>



## 更新直播间信息

> https://api.live.bilibili.com/room/v1/Room/update

*请求方式：POST*

认证方式：Cookie（SESSDATA）

鉴权方式：Cookie中`bili_jct`的值正确并与`csrf`相同

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名  | 类型 | 内容                     | 必要性 | 备注                 |
| ------- | ---- | ------------------------ | ------ | -------------------- |
| csrf    | str  | CSRF Token（位于cookie） | 必要   |                      |
| csrf_token | str  | CSRF Token（位于 cookie） | 非必要 |                       |
| platform | str | 平台标识                 | 非必要 |      |
| visit_id | str | (?)                      | 非必要 | 某种标识？      |
| room_id | num  | 直播间id                 | 必要   | 必须为自己的直播间id |
| title   | str  | 直播间标题               | 非必要 | 上限40个字符 |
| area\_id | num | 直播分区id（子分区id）  | 非必要 | 详见[直播分区](live_area.md) |
| add\_tag | str | 要添加的标签          | 非必要 | 开播设置界面上限10个字符 |
| del\_tag | str | 要删除的标签          | 非必要 | 若存在`add_tag`时不起作用 |

**json回复：**

根对象：

| 字段    | 类型   | 内容     | 备注                                                   |
| ------- | ------ | -------- | ------------------------------------------------------ |
| code    | num    | 返回值   | 0：成功<br />-1：操作太频繁<br />1：错误<br />3：未登录或鉴权失败<br />405：不允许的请求方法<br />60009：分区已下线<br />65530：token错误（登录错误）<br /> |
| msg     | str    | 错误信息 | 默认为ok                                               |
| message | str    | 错误信息 | 默认为ok                                               |
| data    | obj    | 信息本体 | 部分失败情况下是`[]`（空数组）                             |

`data`对象：

| 字段            | 类型 | 内容 | 备注 |
| --------------- | ---- | ---- | ---- |
| sub_session_key | str  | 信息变动标识 |      |
| audit_info      | obj  | 标题审核信息 |      |

`data`中的`audit_info`对象：

| 字段               | 类型 | 内容 | 备注 |
| ------------------ | ---- | ---- | ---- |
| audit_title_reason | str  | 标题审核提示 |      |
| audit_title_status | num  | 标题审核状态 |      |
| audit_title        | str  | 被审核的标题 | 更新标题时存在 |
| update_title       | str  | `""`   | 作用尚不明确 |

**示例：**

修改直播间`10352053`标题为`测试`

```shell
curl 'https://api.live.bilibili.com/room/v1/Room/update' \
  --data-urlencode 'room_id=10352053' \
  --data-urlencode 'title=测试' \
  --data-urlencode 'csrf=xxx' \
  -b 'SESSDATA=xxx;bili_jct=xx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code":0,
  "msg":"ok",
  "message":"ok",
  "data":{
    "sub_session_key":"",
    "audit_info":{
      "audit_title_reason":"先发后审",
      "update_title":"",
      "audit_title_status":2,
      "audit_title":"测试"
    }
  }
}
```

</details>

修改直播间`10352053`分区为`40`

```shell
curl 'https://api.live.bilibili.com/room/v1/Room/update' \
  --data-urlencode 'room_id=10352053' \
  --data-urlencode 'area_id=40' \
  --data-urlencode 'csrf=xxx' \
  -b 'SESSDATA=xxx;bili_jct=xx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "msg": "ok",
  "message": "ok",
  "data": {
    "sub_session_key": "",
    "audit_info": {
      "audit_title_reason": "",
      "update_title": "",
      "audit_title_status": 0
    }
  }
}
```

</details>

给直播间`11996900`添加一个标签为`测试标签`

```shell
curl 'https://api.live.bilibili.com/room/v1/Room/update' \
  --data-urlencode 'room_id=11996900' \
  --data-urlencode 'add_tag=测试标签' \
  --data-urlencode 'csrf=xxx' \
  -b 'SESSDATA=xxx;bili_jct=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "msg": "ok",
  "message": "ok",
  "data": {
    "sub_session_key": "",
    "audit_info": {
      "audit_title_reason": "",
      "update_title": "",
      "audit_title_status": 0
    }
  }
}
```

</details>

给直播间`11996900`删除内容为`测试标签`的标签

```shell
curl 'https://api.live.bilibili.com/room/v1/Room/update' \
  --data-urlencode 'room_id=11996900' \
  --data-urlencode 'del_tag=测试标签' \
  --data-urlencode 'csrf=xxx' \
  -b 'SESSDATA=xxx;bili_jct=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "msg": "ok",
  "message": "ok",
  "data": {
    "sub_session_key": "",
    "audit_info": {
      "audit_title_reason": "",
      "update_title": "",
      "audit_title_status": 0
    }
  }
}
```

</details>

## 开始直播

> https://api.live.bilibili.com/room/v1/Room/startLive

*请求方式：POST*

认证方式：Cookie（SESSDATA）

鉴权方式：Cookie中`bili_jct`的值正确并与`csrf`相同

开播时必须有分区选择，开播后返回推流地址

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名   | 类型 | 内容                     | 必要性 | 备注                                |
| -------- | ---- | ------------------------ | ------ | ----------------------------------- |
| room_id  | num  | 直播间id                 | 必要   | 必须为自己的直播间id                |
| area_v2  | num  | 直播分区id（子分区id）   | 必要   | 详见[直播分区](live_area.md)        |
| platform | str  | 直播平台                 | 必要   | 直播姬（pc）：pc_link<br />web在线直播：web_link<br />bililink：android_link |
| csrf     | str  | CSRF Token（位于cookie） | 必要   |                                     |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />65530：token错误（登录错误）<br />1：错误<br />60009：分区不存在<br />60024: 目标分区需要人脸认证<br />60013：非常抱歉，您所在的地区受实名认证限制无法开播<br />**（其他错误码有待补充）** |
| msg     | str  | 错误信息 | 默认为空                                                     |
| message | str  | 错误信息 | 默认为空                                                     |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段      | 类型  | 内容             | 备注                   |
| --------- | ----- | ---------------- | ---------------------- |
| change    | num   | 是否改变状态     | 0：未改变<br />1：改变 |
| status    | str   | 直播间状态       | `LIVE`                 |
| room_type | num   | 0                | 作用尚不明确           |
| rtmp      | obj   | RTMP推流地址信息 |                        |
| protocols | array | ？？？           | 作用尚不明确           |
| try_time  | str   | ？？？           | 作用尚不明确           |
| live_key  | str   | 标记直播场次的key |                        |
| sub_session_key | str   | 信息变动标识 |      |
| notice    | obj   | ？？？           | 作用尚不明确           |
| qr        | str   | `""`          | 作用尚不明确    |
| need_face_auth | bool  | 需要人脸识别? | 作用尚不明确  |
| service_source | str   | ？？？    | 作用尚不明确  |
| rtmp\_backup | null  | ？？？    | 作用尚不明确  |
| up_stream_extra | obj   | 主播推流额外信息? |    |

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

`data`中的`up_stream_extra`对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| isp | str | 主播的互联网服务提供商 |  |

**示例：**

以`27`作为分区id开播直播间`10352053`

其中`"data"."rtmp"."addr"`为推流地址

`"data"."rtmp"."code"`为推流参数

```shell
curl 'https://api.live.bilibili.com/room/v1/Room/startLive' \
--data-urlencode 'room_id=10352053' \
--data-urlencode 'area_v2=27' \
--data-urlencode 'platform=pc' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx;bili_jct=xx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "data":{
    "change": 1,
    "status": "LIVE",
    "try_time": "0000-00-00 00:00:00",
    "room_type": 0,
    "live_key": "608336837537435443",
    "sub_session_key": "608336837537435443sub_time:1747292297",
    "rtmp":{
      "type": 1,
      "addr": "rtmp://live-push.bilivideo.com/live-bvc/",
      "code": "?streamname=live_348892132_32373699\u0026key=e03061d4a7529d8eaa322dc4d330ca1c\u0026schedule=rtmp\u0026pflag=11",
      "new_link": "https://core.bilivideo.com/video/uplinkcore/selfbuild/schedule?up_rtmp=live-push.bilivideo.com%2Flive-bvc%2F%3Fstreamname%3Dlive_348892132_32373699%26key%3De73061d8a7539d8eaa233dc4d880ca1c%26schedule%3Drtmp%26pflag%3D11\u0026edge=edge",
      "provider": "live"
    },
    "protocols":[
      {
        "protocol": "rtmp",
        "addr": "rtmp://live-push.bilivideo.com/live-bvc/","code":"?streamname=live_348892132_32373699\u0026key=e73061d4a1002d8eaa322dc4d880ca1c\u0026schedule=rtmp\u0026pflag=11",
        "new_link": "https://core.bilivideo.com/video/uplinkcore/selfbuild/schedule?up_rtmp=live-push.bilivideo.com%2Flive-bvc%2F%3Fstreamname%3Dlive_348892132_32373699%26key%3De10298d4a7539d8eaa322dc4d220ca1c%26schedule%3Drtmp%26pflag%3D11\u0026edge=edge",
        "provider": "txy"
      }
    ],
    "notice":{
      "type": 1,
      "status": 0,
      "title": "",
      "msg": "",
      "button_text": "",
      "button_url": ""
    },
    "qr": "",
    "need_face_auth": false,
    "service_source": "live-streaming",
    "rtmp_backup": null,
    "up_stream_extra":{
      "isp": "电信"
    }
  },
  "message": "",
  "msg": ""
}
```

</details>

## 关闭直播

> https://api.live.bilibili.com/room/v1/Room/stopLive

*请求方式：POST*

认证方式：Cookie（SESSDATA）

鉴权方式：Cookie中`bili_jct`的值正确并与`csrf`相同

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名  | 类型 | 内容                     | 必要性 | 备注                 |
| ------- | ---- | ------------------------ | ------ | -------------------- |
| room_id | num  | 直播间id                 | 必要   | 必须为自己的直播间id |
| csrf    | str  | CSRF Token（位于cookie） | 必要   |                      |

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
| status | str  | 直播间状态   | `PREPARING`、`ROUND` |

**示例：**

关闭直播间`10352053`的直播

```shell
curl 'https://api.live.bilibili.com/room/v1/Room/stopLive' \
  --data-urlencode 'room_id=10352053' \
  --data-urlencode 'csrf=xxx' \
  -b 'SESSDATA=xxx;bili_jct=xxx'
```

<details>
<summary>查看响应示例：</summary>

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

</details>


## 更新直播间公告

> https://api.live.bilibili.com/xlive/app-blink/v1/index/updateRoomNews

*请求方式：POST*

认证方式：Cookie（SESSDATA）

鉴权方式：Cookie中`bili_jct`的值正确并与`csrf`相同

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名  | 类型 | 内容                     | 必要性 | 备注                  |
| ------- | ---- | ------------------------ | ------ | --------------------- |
| room_id | num  | 直播间id                 | 必要   | 必须为自己的直播间id  |
| uid     | num  | 用户id                   | 必要   |                       |
| content | str  | 公告内容                 | 必要   | 最大60个字符,可以为空 |
| csrf    | str  | CSRF Token（位于cookie） | 必要   |                       |
| csrf_token | str  | CSRF Token（位于 cookie） |      |                         |

**json回复：**

根对象：

| 字段    | 类型  | 内容     | 备注                                                   |
| ------- | ----- | -------- | ------------------------------------------------------ |
| code    | num   | 返回值   | 0：成功<br />65530：token错误（登录错误）<br />1：错误 |
| data    | array | 空       |                                                        |
| message | str   | 错误信息 | 默认为ok                                               |
| ttl     | num   | 1        | 作用尚不明确                                           |

**示例：**

修改直播间`11996900`公告为`测试修改公告`

```shell
curl 'https://api.live.bilibili.com/xlive/app-blink/v1/index/updateRoomNews' \
--data-urlencode 'room_id=11996900' \
--data-urlencode 'uid=306903238' \
--data-urlencode 'content=测试修改公告' \
--data-urlencode 'csrf_token=xxx' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx;bili_jct=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {}
}
```

</details>
