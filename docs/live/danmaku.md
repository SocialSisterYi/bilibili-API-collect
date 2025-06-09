# 直播间弹幕

## 获取当前用户对应直播间可发弹幕配置

> https://api.live.bilibili.com/xlive/web-room/v1/dM/GetDMConfigByGroup

*请求方式: GET*

认证方式: Cookie (SESSDATA)

未登录也可以获取，但颜色只有白色可用，模式只有滚动。

**url参数：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ---- | --- | --- | ---- | --- |
| room_id | num | 直播间id | 必要 |  |
| web_location | str | (?) | 非必要 | 作用尚不明确 |
| w_rid | str | wbi签名 | 非必要 | 不强制需要 |
| wts | num | 秒时间戳 | 非必要 | 不强制需要 |

**json回复：**

根对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 返回值 | 0: 成功<br />-400: 参数错误 |
| data | obj | 信息本体 |  |
| message | str | 错误信息 |  |
| msg | str | 信息 | 成功时存在，为`""`(空字符串) |
| ttl | num | `1` | 成功时不存在 |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| group | arr | 弹幕颜色组 |  |
| mode | arr | 弹幕显示模式 |  |

`data.group` 数组中对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| name | str | 显示名称 |  |
| sort | num | 用于排序 |  |
| color | arr | 该组颜色列表 |  |

`data.group[i].color` 数组中对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| name | str | 颜色名 |  |
| color | str | 十进制颜色值 | 发送弹幕用 |
| color\_hex | str | 十六进制颜色值 | 发送弹幕用 |
| status | num | 可用状态 | 0: 不可用<br />1: 可用 |
| weight | num | (?) | 作用尚不明确 |
| color\_id | num | 颜色id? |  |
| origin | num | (?) |  |

`data.mode` 数组中对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| name | str | 模式名称 |  |
| mode | num | 模式值 | 发送弹幕用 |
| type | str | 模式类型 |  |
| status | num | 可用状态 | 0: 不可用<br />1: 可用 |

**示例：**

获取未登录用户在直播间 `1` 的弹幕配置可用情况

```shell
curl 'https://api.live.bilibili.com/xlive/web-room/v1/dM/GetDMConfigByGroup?room_id=1'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "data": {
    "group": [
      {
        "name": "普",
        "sort": 0,
        "color": [
          {
            "name": "白色",
            "color": "16777215",
            "color_hex": "ffffff",
            "status": 1,
            "weight": -9999,
            "color_id": -9999,
            "origin": 0
          }
        ]
      },
      {
        "name": "航",
        "sort": 100,
        "color": [
          {
            "name": "紫色",
            "color": "14893055",
            "color_hex": "e33fff",
            "status": 0,
            "weight": 0,
            "color_id": 6,
            "origin": 1
          }
        ]
      },
      {
        "name": "粉",
        "sort": 200,
        "color": [
          {
            "name": "松石绿",
            "color": "5566168",
            "color_hex": "54eed8",
            "status": 0,
            "weight": 99,
            "color_id": 66,
            "origin": 2
          },
          {
            "name": "雨后蓝",
            "color": "5816798",
            "color_hex": "58c1de",
            "status": 0,
            "weight": 98,
            "color_id": 67,
            "origin": 2
          },
          {
            "name": "星空蓝",
            "color": "4546550",
            "color_hex": "455ff6",
            "status": 0,
            "weight": 97,
            "color_id": 68,
            "origin": 2
          },
          {
            "name": "紫罗兰",
            "color": "9920249",
            "color_hex": "975ef9",
            "status": 0,
            "weight": 96,
            "color_id": 69,
            "origin": 2
          },
          {
            "name": "梦境红",
            "color": "12802438",
            "color_hex": "c35986",
            "status": 0,
            "weight": 95,
            "color_id": 70,
            "origin": 2
          },
          {
            "name": "热力橙",
            "color": "16747553",
            "color_hex": "ff8c21",
            "status": 0,
            "weight": 94,
            "color_id": 71,
            "origin": 2
          },
          {
            "name": "香槟金",
            "color": "16774434",
            "color_hex": "fff522",
            "status": 0,
            "weight": 93,
            "color_id": 72,
            "origin": 2
          }
        ]
      },
      {
        "name": "爷",
        "sort": 300,
        "color": [
          {
            "name": "红色",
            "color": "16738408",
            "color_hex": "ff6868",
            "status": 0,
            "weight": 0,
            "color_id": 8,
            "origin": 3
          },
          {
            "name": "蓝色",
            "color": "6737151",
            "color_hex": "66ccff",
            "status": 0,
            "weight": 0,
            "color_id": 7,
            "origin": 3
          }
        ]
      },
      {
        "name": "活",
        "sort": 400,
        "color": [
          {
            "name": "盛典金",
            "color": "16766720",
            "color_hex": "ffd700",
            "status": 0,
            "weight": 100,
            "color_id": 44,
            "origin": 4
          },
          {
            "name": "升腾蓝",
            "color": "4286945",
            "color_hex": "4169e1",
            "status": 0,
            "weight": 100,
            "color_id": 43,
            "origin": 4
          },
          {
            "name": "青色",
            "color": "65532",
            "color_hex": "fffc",
            "status": 0,
            "weight": 0,
            "color_id": 5,
            "origin": 4
          },
          {
            "name": "绿色",
            "color": "8322816",
            "color_hex": "7eff00",
            "status": 0,
            "weight": 0,
            "color_id": 4,
            "origin": 4
          },
          {
            "name": "黄色弹幕",
            "color": "16772431",
            "color_hex": "ffed4f",
            "status": 0,
            "weight": 0,
            "color_id": 3,
            "origin": 4
          },
          {
            "name": "橙色",
            "color": "16750592",
            "color_hex": "ff9800",
            "status": 0,
            "weight": 0,
            "color_id": 2,
            "origin": 4
          },
          {
            "name": "粉色",
            "color": "16741274",
            "color_hex": "ff739a",
            "status": 0,
            "weight": 0,
            "color_id": 1,
            "origin": 4
          }
        ]
      }
    ],
    "mode": [
      {
        "name": "滚动",
        "mode": 1,
        "type": "scroll",
        "status": 1
      },
      {
        "name": "底部",
        "mode": 4,
        "type": "bottom",
        "status": 0
      },
      {
        "name": "顶部",
        "mode": 5,
        "type": "top",
        "status": 0
      }
    ]
  },
  "message": "",
  "msg": ""
}
```

</details>

## 设置弹幕样式

> https://api.live.bilibili.com/xlive/web-room/v1/dM/AjaxSetConfig

*请求方式: POST*

认证方式: Cookie (SESSDATA)

鉴权方式: Cookie中`bili_jct`的值正确并与`csrf`相同

**正文参数 (application/x-www-form-urlencoded)：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ---- | --- | --- | ---- | --- |
| csrf | str | CSRF Token（位于cookie） | 必要 |  |
| csrf\_token | str | 同csrf | 非必要 |  |
| room\_id | num | 直播间id | 必要 |  |
| color | str | 颜色值 | 必要（可选） | color和mode任选一个 |
| mode | num | 弹幕模式 | 必要（可选） | color和mode任选一个 |

注1: 抓取到的color格式是`"0x"+六位十六进制小写颜色值`，实际不需要`0x`，且不区分大小写。

注2: 若color和mode同时存在将只处理color，mode将被忽略。（见[#1236(comment)](https://github.com/SocialSisterYi/bilibili-API-collect/issues/1236#issuecomment-2849019923)）

**json回复：**

根对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 返回值 | 0: 成功<br />-101: 账号未登录<br />-500: 未达到使用条件<br />10064002: 参数错误<br />10065107: 颜色不存在 |
| message | str | 错误信息 |  |
| ttl | num | `1` |  |
| data | obj | 信息本体 | 部分情况不存在，10064002时为`null` |

`data` 对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| status | num | 同code |  |
| msg | str | 提示信息 | 成功时有内容 |
| roomid | num | 直播间id |  |

**示例：**

更改直播间 `1017` 的弹幕颜色为白色

```shell
curl 'https://api.live.bilibili.com/xlive/web-room/v1/dM/AjaxSetConfig' \
  --data-urlencode 'room_id=1017' \
  --data-urlencode 'color=0xffffff' \
  --data-urlencode 'csrf=xxx' \
  -b 'SESSDATA=xxx;bili_jct=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code":0,
  "message":"0",
  "ttl":1,
  "data":{
    "status":0,
    "msg":"设置成功~",
    "roomid":1017
  }
}
```

</details>

## 发送直播弹幕

> https://api.live.bilibili.com/msg/send

*请求方式: POST*

认证方式: Cookie (SESSDATA)

鉴权方式: Cookie中`bili_jct`的值正确并与`csrf`相同

**url参数：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ----- | ---- | --- | ----- | --- |
| w_rid | str | wbi签名 | 非必要 | 不强制需要 |
| wts | num | Unix 秒时间戳 | 非必要 | 不强制需要 |

**正文参数 (`application/x-www-form-urlencoded`或`multipart/form-data`)：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ---- | --- | --- | ---- | --- |
| csrf | str | CSRF Token（位于cookie） | 必要 |  |
| roomid | num | 直播间id | 必要 |  |
| msg | str | 弹幕内容 | 必要 |  |
| rnd | num | 当前 Unix 秒时间戳 | 必要 |  |
| fontsize | num | 字体大小 | 必要 | 默认为`25` |
| color | num | 十进制颜色值 | 必要 | 实际无效果 |
| mode | num | 展示模式 | 非必要 | 默认为`1` |
| bubble | num | (?) | 非必要 | 值为`0` |
| room\_type | num | (?) | 非必要 | `0` |
| jumpfrom | num | (?) | 非必要 | `0` |
| reply\_mid | num | 要“@”的用户mid | 非必要 | 默认为`0` |
| reply\_attr | num | (?) | 非必要 | `0` |
| reply\_uname | str | 要“@”的用户名称 | 非必要 | 默认为`""`，提供reply\_mid时不需要提供 |
| replay\_dmid | str | 要回复的弹幕id | 非必要 | 默认为`""` |
| statistics | str | (?) | 非必要 | `{"appId":100,"platform":5}` |
| csrf_token | str | 同csrf | 非必要 |  |

**json回复：**

根对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 返回值 | `-101`:账号未登录<br />`-111`:csrf 校验失败<br />`-400`:请求错误，带有必须参数的信息<br />`1003212`:超出限制长度<br />`10031`:发送频率过快 |
| message | str | 错误信息 |  |
| msg | str | 同`message` |  |
| data | obj | 信息本体 |  |
| ttl | num | `1` | 在小于0的code中存在 |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| mode_info | obj | 弹幕信息 |  |
| dm_v2 | null | v2弹幕 |  |

`data.mode_info` 对象:

基本上与[直播间信息流#弹幕 (DANMU_MSG)](message_stream.md#弹幕-danmu_msg)的`info[0][15]`对象相同。

**示例：**

给直播间 `1899237171` 发送内容为 `QwQ` 的弹幕

```shell
curl 'https://api.live.bilibili.com/msg/send' \
  --data-urlencode 'roomid=1899237171' \
  --data-urlencode 'msg=QwQ' \
  --data-urlencode 'rnd=1744956003' \
  --data-urlencode 'fontsize=25'
  --data-urlencode 'color=16777215'
  --data-urlencode 'csrf=xxx' \
  -b 'SESSDATA=xxx;bili_jct=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code":0,
  "data":{
    "mode_info":{
      "mode":0,
      "show_player_type":0,
      "extra":"{\"send_from_me\":true,\"master_player_hidden\":false,\"mode\":0,\"color\":16777215,\"dm_type\":0,\"font_size\":25,\"player_mode\":1,\"show_player_type\":0,\"content\":\"QwQ\",\"user_hash\":\"2402762465\",\"emoticon_unique\":\"\",\"bulge_display\":0,\"recommend_score\":7,\"main_state_dm_color\":\"\",\"objective_state_dm_color\":\"\",\"direction\":0,\"pk_direction\":0,\"quartet_direction\":0,\"anniversary_crowd\":0,\"yeah_space_type\":\"\",\"yeah_space_url\":\"\",\"jump_to_url\":\"\",\"space_type\":\"\",\"space_url\":\"\",\"animation\":{},\"emots\":null,\"is_audited\":false,\"id_str\":\"4e3ed8ede9409b234b5e1d64c06801ea3119\",\"icon\":null,\"show_reply\":true,\"reply_mid\":0,\"reply_uname\":\"\",\"reply_uname_color\":\"\",\"reply_is_mystery\":false,\"reply_type_enum\":0,\"hit_combo\":0,\"esports_jump_url\":\"\"}",
      "user":{
        "uid":438160221,
        "base":{
          "name":"weatfe",
          "face":"https://i0.hdslb.com/bfs/face/member/noface.jpg",
          "name_color":0,
          "is_mystery":false,
          "risk_ctrl_info":null,
          "origin_info":{
            "name":"weatfe",
            "face":"https://i0.hdslb.com/bfs/face/member/noface.jpg"
          },
          "official_info":{
            "role":0,
            "title":"",
            "desc":"",
            "type":-1
          },
          "name_color_str":""
        },
        "medal":null,
        "wealth":null,
        "title":{
          "old_title_css_id":"",
          "title_css_id":""
        },
        "guard":null,
        "uhead_frame":null,
        "guard_leader":{
          "is_guard_leader":false
        }
      }
    },
    "dm_v2":null
  },
  "message":"",
  "msg":""
}
```

</details>
