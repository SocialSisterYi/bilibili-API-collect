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

| 参数名   | 类型 | 内容                     | 必要性 | 备注                                                         |
| -------- | ---- | ------------------------ | ------ | ------------------------------------------------------------ |
| room_id  | num  | 直播间id                 | 必要   | 必须为自己的直播间 id                                         |
| area_v2  | num  | 直播分区id（子分区 id）   | 必要   | 详见[直播分区](live_area.md)                                 |
| platform | str  | 直播平台                 | 必要   | 可选值：`pc`、`pc_link` (直播姬 PC), `android_link` (直播姬 Android) |
| csrf     | str  | CSRF Token（位于 cookie） | 必要   |                                                              |
| csrf_token     | str  | CSRF Token（位于 cookie） | 非必要   |                                                              |
| version  | str  | 直播姬版本号             | 非必要 | 建议与 `build` 一同提供，详见下方说明。可从[直播姬版本号获取](#直播姬版本号获取)接口获得。 |
| build    | num  | 直播姬构建号             | 非必要 | 建议与 `version` 一同提供。                                      |
| appkey   | str  | APP密钥                   | 条件性必要 | 特定情况下必要，详见下方说明。                   |
| sign     | str  | APP API签名得到的 sign     | 条件性必要 | 特定情况下必要，详见下方说明。                   |

**说明**: 截止至 2025 年 7 月 20 日，部分账户不提供 `version` `build` `appkey` `sign` 也可获取推流码，部分账户会返回 `60024` (需要人脸认证)，此时请尝试提供 `version` `build`，目前似乎没有校验，提供了就可以。(比如 `version:1.0.0` `build:1234`) 如果仍然返回 `60024`，请尝试提供 `appkey` `sign` 参数。如果你的 `version` 和 `build` 为 `7.19.0.9432` 和 `9432`，必须提供 `appkey` `sign`。

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0: 成功<br />-400: 请求错误<br />1: 错误<br />60009: 分区不存在<br />60013: 所在地区受实名认证限制无法开播<br />60024: 目标分区需要人脸认证<br />60034: 系统维护仅支持直播姬开播<br />60037: web在线开播已下线<br />65530: token错误 (登录失效)<br />**(其他错误码有待补充)** |
| msg     | str  | 提示信息 | 默认为空                                                     |
| message | str  | 提示信息 | 默认为空                                                     |
| data    | obj  | 信息本体 | 成功时返回                                                   |


`data`对象：

| 字段      | 类型  | 内容             | 备注                   |
| --------- | ----- | ---------------- | ---------------------- |
| change    | num   | 是否改变状态     | 0：未改变<br />1：改变 |
| status    | str   | 直播间状态       | `LIVE`                 |
| room_type | num   | 0                | 作用尚不明确           |
| rtmp      | obj   | RTMP推流地址信息 |                        |
| protocols | array | 推流协议、地址、密钥等信息<br />其中地址、密钥与 `rtmp` 字段的内容是一致的 | 协议只见到过 `rtmp` |
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
| provider | str  | 推流云服务节点厂商    | `txy`: 腾讯云            |

`data`中的`protocols`数组：

| 项   | 类型 | 内容   | 备注         |
| ---- | ---- | ------ | ------------ |
| 0    | obj  | 与 `rtmp` 字段在地址和密钥上相同的推流协议信息 |           |

`data`中的`protocols`数组中的对象：

| 字段     | 类型 | 内容                             | 备注         |
| -------- | ---- | -------------------------------- | ------------ |
| protocol | str  | rtmp                             | 推流协议     |
| addr     | str  | RTMP推流（发送）地址             | 格式为 `rtmp://<推流节点>/live-bvc/` |
| code     | str  | RTMP推流参数（密钥）             | 格式为 `?streamname=live_<B站UID>_<未知数字>&key=<密钥>&schedule=rtmp&pflag=<开播平台标志>` |
| new_link | str  | 获取CDN推流ip地址重定向信息的url |              |
| provider | str  | 推流云服务节点厂商                              | `txy`: 腾讯云 |

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
| platform | str  | 直播平台                 | 必要   | 直播姬（pc）：pc_link<br />直播姬（android）：android_link |
| room_id | num  | 直播间id                 | 必要   | 必须为自己的直播间id |
| csrf    | str  | CSRF Token（位于cookie） | 必要   |                      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />65530：token错误（登录错误）<br />-400：没有权限<br />60034: 系统维护仅支持直播姬关播<br />**（其他错误码有待补充）** |
| msg     | str  | 提示信息 | 默认为空                                                     |
| message | str  | 提示信息 | 默认为空                                                     |
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
  --data-urlencode 'platform=pc_link' \
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

## 预更新直播间信息

> https://api.live.bilibili.com/xlive/app-blink/v1/preLive/UpdatePreLiveInfo

*请求方法: POST*

认证方式：Cookie（SESSDATA）

鉴权方式：Cookie中`bili_jct`的值正确并与`csrf`相同

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ----- | --- | ---- | ----- | --- |
| csrf | str | CSRF Token（位于cookie） | 必要 |  |
| csrf_token | str | CSRF Token（位于cookie） | 必要 |  |
| platform | str | 平台标识 | 必要 | 似乎可随意提供<br />网页端: web |
| mobi_app | str | 平台标识? | 必要 | 似乎可随意提供<br />网页端: web |
| build | num | 构建标识? | 必要 | 建议取`1`，似乎可随意提供 |
| cover | str | 直播封面链接 | 非必要 | 图片链接需要在`.hdslb.com`域名下 |
| title | str | 直播间标题 | 非必要 | 参见[更新直播间信息](#更新直播间信息)的title参数 |
| coverVertical | str | (?) | 非必要 | 作用尚不明确 |
| liveDirectionType | num | (?) | 非必要 | `1` |
| visit_id | str | (?) | 非必要 | `""` |

**json回复：**

根对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 返回值 | 0: 成功<br />1: 错误<br />100402: 图片地址不合法 |
| message | str | 错误信息 | 成功时为`"0"` |
| ttl | num | `1` |  |
| data | obj | 内容本体 |  |

`data`对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| audit_info | obj | 审核信息 |  |

`data.audit_info`对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| audit_title | str | 被审核的标题 |  |
| audit_title_status | num | 标题审核状态 |  |
| audit_title_reason | str | 标题审核提示 |  |

**示例：**

更新直播间封面

```shell
curl 'https://api.live.bilibili.com/xlive/app-blink/v1/preLive/UpdatePreLiveInfo' \
  --data-urlencode 'platform=web' \
  --data-urlencode 'mobi_app=web' \
  --data-urlencode 'build=1' \
  --data-urlencode 'cover=https://i0.hdslb.com/bfs/live/59fc254c1f51a962dbf69ae85e4920f2f6fb8dcd.png' \
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
  "data":{
    "audit_info":{
      "audit_title": "",
      "audit_title_status": 0,
      "audit_title_reason": ""
    }
  }
}
```

</details>

使用此接口更新直播间标题

```shell
curl 'https://api.live.bilibili.com/xlive/app-blink/v1/preLive/UpdatePreLiveInfo' \
  --data-urlencode 'platform=web' \
  --data-urlencode 'mobi_app=web' \
  --data-urlencode 'build=1' \
  --data-urlencode 'title=你好你好，我是花火~咱们来找点乐子吧？小灰毛，不要害羞嘛，要大胆的来，一起欢愉吧' \
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
  "data":{
    "audit_info":{
      "audit_title": "你好你好，我是花火~咱们来找点乐子吧？小灰毛，不要害羞嘛，要大胆的来，一起欢愉吧",
      "audit_title_status": 2,
      "audit_title_reason": "先发后审"
    }
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

## PC直播姬版本号获取
> https://api.live.bilibili.com/xlive/app-blink/v1/liveVersionInfo/getHomePageLiveVersion

*请求方式：GET*

认证方式：无

鉴权方式：无

**请求参数 (Query)：**

| 参数名  | 类型 | 内容                     | 必要性 | 备注                  |
| ------- | ---- | ------------------------ | ------ | --------------------- |
| appkey   | str  | APP密钥                   | 不必要  |使用PC投稿工具的appkey和appsec|
| sign     | str  | APP API签名得到的sign     | 不必要  |                       |
| system_version | num  | 暂不清楚                 | 必要   | 可以直接写2           |
| ts       | num | 10位时间戳           | 不必要 |                       |

**json回复：**

根对象：

| 字段    | 类型  | 内容     | 备注                                                   |
| ------- | ----- | -------- | ------------------------------------------------------ |
| code    | num   | 返回值   | 0：成功<br />-400：请求错误                             |
| message | str   | 错误信息 | 默认为0                                                |
| ttl     | num   | 1        | 作用尚不明确                                           |
| data    | obj   | 内容本体 |                                                        |

`data`对象：

| 字段            | 类型 | 内容                     | 备注                   |
| --------------- | ---- | ------------------------ | ---------------------- |
| curr_version    | str  | 直播姬最新版本号         |                        |
| build           | num  | 直播姬构建号             |                        |
| instruction     | str  | 更新说明（简要）         |                        |
| file_size       | str  | 文件大小（字节）         |                        |
| file_md5        | str  | 安装包文件MD5            |                        |
| content         | str  | HTML格式的更新内容       |                        |
| download_url    | str  | 安装包下载链接           |                        |
| hdiffpatch_switch | num  | 增量更新开关?            |                        |

**示例：**

获取直播姬最新版本信息

```shell
curl 'https://api.live.bilibili.com/xlive/app-blink/v1/liveVersionInfo/getHomePageLiveVersion?appkey=aae92bc66f3edfab&sign=49d289e3ad34c509cc66fbee1c0affec&system_version=2&ts=1752971145'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "curr_version": "7.19.0.9432",
        "build": 9432,
        "instruction": "\u3010\u65b0\u589e\u3011\u65b0\u589e\u7f8e\u989c\u8c03\u6574\u5165\u53e3\n\u3010\u4f18\u5316\u3011\u5df2\u77e5\u95ee\u9898\u4f18\u5316",
        "file_size": "300867136",
        "file_md5": "e1619a8e2603aa94b58a58121f94403f",
        "content": "<p>\u3010\u65b0\u589e\u3011\u65b0\u589e\u7f8e\u989c\u8c03\u6574\u5165\u53e3<br>\u3010\u4f18\u5316\u3011\u5df2\u77e5\u95ee\u9898\u4f18\u5316</p><p></p><p><br></p>",
        "download_url": "https://dl.hdslb.com/bili/bililive/win/Livehime-Win-beta-7.19.0.9432-x64.exe",
        "hdiffpatch_switch": 1
    }
}
```

</details>


