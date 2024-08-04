# 直播间视频流

## 根据真实直播间号获取直播视频流链接

> https://api.live.bilibili.com/xlive/web-room/v2/index/getRoomPlayInfo

_请求方式：GET_

**url参数：**
| 参数名     | 类型  | 内容     | 必要性 | 备注 |
| ---------- | ----- | -------- | ------ | ---- |
| room_id    | num   | 直播间号 | 必要   | 房间号 |
| no_playurl | num   | 无视频流 | 非必要 | 置`0`才有视频流 |
| mask       | num   | -        | -      | 作用未知，未观察到响应改变 默认1 |
| qn         | num   | 质量     | 非必要 | 3000杜比 20000 4K 10000 原画 <br /> 400 蓝光 250 超清 150 高清 <br /> 0 应该是默认 |
| platform   | str   | 平台     | -      | 参考：`web` |
| protocol   | num[] | 协议     | -      | 参考：`0,1` |
| format     | num[] | 格式     | -      | 参考：`0,1,2`  |
| codec      | num[] | 编码     | -      | 参考：`0,1,2`  |
| dolby      | num   | 杜比     | -      | 参考：`5`  |
| panorama   | num   | 环绕音   | -      | 参考：`1`  |

> 注意：请将Referer设置为相关链接，如`https://live.bilibili.com/`

**json回复：**

> 由于返回字段数过多，故在响应示例中标记
>
> 该示例作出合理修改，以便于阅读，相关情况请自行构造请求

<details>
<summary>查看响应示例</summary>

请求：
```bash
curl -G 'https://api.live.bilibili.com/xlive/web-room/v2/index/getRoomPlayInfo' \
  --data-urlencode 'room_id=123456789' \  # 请自行替换对应房间号
  --data-urlencode 'qn=0' \
  --data-urlencode 'platform=web'\
  --data-urlencode 'protocol=0,1' \
  --data-urlencode 'format=0,1,2' \
  --data-urlencode 'codec=0,1,2' \
  --data-urlencode 'dolby=5' \
  --data-urlencode 'panorama=1' \
  --header 'Referer: https://live.bilibili.com' \
  --header 'accept: application/json'
```

响应：
```json
{
  "code": 0,        // 标记是否成功
  "message": "0",   // 错误信息（如果有），人类可读
  "ttl": 1,         
  "data": {         // 主体部分，如果请求错误则为 `null`
    "room_id": 132465798,       // 同请求参数同名
    "short_id": 0,              // 房间短id
    "uid": 132465798,           // 主播用户id （就是主页链接那个https://space.bilibili.com/<uid>）
    "is_hidden": false,         // 是否隐藏
    "is_locked": false,         // 是否锁定
    "is_portrait": false,       
    "live_status": 1,           // 直播状态：1为开播，0为下播
    "hidden_till": 0,           // 隐藏直到（目前未找到相关样本）
    "lock_till": 0,             // 同上，锁定直到
    "encrypted": false,         
    "pwd_verified": true,       
    "live_time": 1722697729,
    "room_shield": 0,
    "all_special_types": [],
    "playurl_info": {           // 播放链接
      "conf_json": "{\"cdn_rate\":10000,\"report_interval_sec\":150}",
      "playurl": {              // 播放链接
        "cid": 32497242,
        "g_qn_desc": [          // 清晰度描述（推测用于UI展示）
          {
            "qn": 30000,
            "desc": "杜比",
            "hdr_desc": "",
            "attr_desc": null
          },
          {
            "qn": 20000,
            "desc": "4K",
            "hdr_desc": "",
            "attr_desc": null
          },
          {
            "qn": 10000,
            "desc": "原画",
            "hdr_desc": "",
            "attr_desc": null
          },
          {
            "qn": 400,
            "desc": "蓝光",
            "hdr_desc": "",
            "attr_desc": null
          }
          // ...
        ],
        "stream": [   // 直播流信息
          {
            "protocol_name": "http_stream",         // 协议信息
            "format": [
              {
                "format_name": "flv",               // 格式信息
                "codec": [
                  {
                    "codec_name": "avc",            // 编码格式
                    "current_qn": 10000,            // 当前质量
                    "accept_qn": [                  // 应许质量
                      10000
                    ],
                    "base_url": "/live-bvc/123465789/live_123_456.flv?",    // 详细见下取流部分
                    "url_info": [
                      {
                        "host": "https://cn-cq-cm-01-30.bilivideo.com",     // 详细见下取流部分
                        "extra": "expires=172270...rc=puv3",                // 详细见下取流部分
                        "stream_ttl": 0
                      }
                    ],
                    "hdr_qn": null,
                    "dolby_type": 0,
                    "attr_name": ""
                  }
                ],
                "master_url": ""
              }
            ]
          }
          // 其他部分类似，省略
        ],
        "p2p_data": {                     // p2p 相关数据
          "p2p": true,
          "p2p_type": 1,
          "m_p2p": false,
          "m_servers": null
        },
        "dolby_qn": null
      }
    },
    "official_type": 0,
    "official_room_id": 0,
    "risk_with_delay": 0
  }
}
```
</details>

## 视频取流

- 取JSON中`data.playurl_info.playurl.stream`记做`streams`
- 对于`streams`中的每一项，取`format`其中一项（一或若干项，对应不同的编码格式）
- `format[n].codec[n]`中就是链接相关信息了，取`base_url`、`url_info[n].host`和`url_info[n].extra`
- 最终链接为 `host + base_url + extra`

示例代码（javascript）:
```javascript
function get_stream_url(data) {
  let result = [];
  data.data.playurl_info.playurl.stream.map((stream) =>
    stream.format.map((format) =>
      format.codec.map((codec) => 
        codec.url_info.map((url_info) =>
         result.push(url_info.host + codec.base_url + url_info.extra)
        )
      ),
    ),
  );
  return result
}
```
最终从响应的链接随意选择一个即可，按照一般m3u8处理即可，至于编码格式之类问题，相关的下载器应该都能处理，或者自己根据需要在json回应中挑选

另外，有注意到部分链接可能包含客户端ip地址，在这方面（现在或者将来）可能有检测


<details>
<summary>
根据真实直播间号获取直播视频流 （旧）
</summary>

> https://api.live.bilibili.com/room/v1/Room/playUrl

_请求方式：GET_

**url参数：**

| 参数名   | 类型 | 内容             | 必要性 | 备注                                                                                                                 |
| -------- | ---- | ---------------- | ------ | -------------------------------------------------------------------------------------------------------------------- |
| cid      | num  | 目标真实直播间号 | 必要   | 直播间的`room_id`（非短号）                                                                                          |
| platform | str  | 直播流格式       | 非必要 | h5：hls方式<br />web：http-flv方式<br />默认为http-flv方式                                                           |
| quality  | num  | 画质             | 非必要 | `qn`与`quality`任选其一<br />2：流畅<br />3：高清<br />4：原画                                                       |
| qn       | str  | 画质             | 非必要 | `qn`与`quality`任选其一<br />80：流畅<br />150：高清<br />400：蓝光<br />10000：原画<br />20000：4K<br />30000：杜比 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                      |
| ------- | ---- | -------- | --------------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：参数错误<br />19002003：房间信息不存在 |
| message | str  | 错误信息 | 默认为0                                                   |
| ttl     | str  | 1        |                                                           |
| data    | obj  | 信息本体 |                                                           |

`data`对象：

| 字段                | 类型  | 内容                  | 备注 |
| ------------------- | ----- | --------------------- | ---- |
| current_quality     | num   | 当前画质代码`qn`      |      |
| accept_quality      | array | 可选画质数参数        |      |
| current_qn          | num   | 当前画质代码`quality` |      |
| quality_description | array | 可选画质参数`quality` |      |
| durl                | array | 直播流url组           |      |

`accept_quality`数组：

| 项  | 类型 | 内容              | 备注 |
| --- | ---- | ----------------- | ---- |
| 0   | str  | `qn`画质代码1     |      |
| n   | str  | `qn`画质代码(n+1) |      |
| ……  | str  | ……                | ……   |

`quality_description`数组：

| 项  | 类型 | 内容          | 备注 |
| --- | ---- | ------------- | ---- |
| 0   | obj  | 画质代码1     |      |
| n   | obj  | 画质代码(n+1) |      |
| ……  | obj  | ……            | ……   |

`quality_description`数组中的对象：

| 字段 | 类型 | 内容                 | 备注 |
| ---- | ---- | -------------------- | ---- |
| qn   | num  | 画质代码             |      |
| desc | str  | 该代码对应的画质名称 |      |

`durl`数组：

| 项  | 类型 | 内容        | 备注 |
| --- | ---- | ----------- | ---- |
| 0   | obj  | 主线服务器  |      |
| n   | obj  | 备线n服务器 |      |
| ……  | obj  | ……          | ……   |

`durl`数组中的对象：

| 字段        | 类型 | 内容           | 备注                                |
| ----------- | ---- | -------------- | ----------------------------------- |
| url         | str  | 直播流url      | flv或m3u8格式<br />**注：带有转义** |
| length      | num  | 0              | 作用尚不明确                        |
| order       | num  | 服务器线路序号 |                                     |
| stream_type | num  | 0              | 作用尚不明确                        |
| p2p_type    | num  | 0              | 作用尚不明确                        |

**示例：**

查询直播间`cid=14073662`的直播间信息

```shell
curl -G 'https://api.live.bilibili.com/room/v1/Room/playUrl' \
--data-urlencode 'cid=14073662' \
--data-urlencode 'qn=10000' \
--data-urlencode 'platform=web'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "current_quality": 3,
    "accept_quality": ["4", "3", "2"],
    "current_qn": 3,
    "quality_description": [
      {
        "qn": 4,
        "desc": "原画"
      },
      {
        "qn": 3,
        "desc": "高清"
      },
      {
        "qn": 2,
        "desc": "流畅"
      }
    ],
    "durl": [
      {
        "url": "https://d1--cn-gotcha04.bilivideo.com/live-bvc/601131/live_14073662_bs_3699814_1500.flv?cdn=cn-gotcha04&expires=1602496530&len=0&oi=1939228219&pt=&qn=150&trid=e6540d81a5d04c2ea459c46ebe77472a&sigparams=cdn,expires,len,oi,pt,qn,trid&sign=20e4ac695fbdd1d11d5dac4f93caa783&ptype=0&src=9&sl=1&order=1",
        "length": 0,
        "order": 1,
        "stream_type": 0,
        "p2p_type": 0
      },
      {
        "url": "https://d1--cn-gotcha01.bilivideo.com/live-bvc/757951/live_14073662_bs_3699814_1500.flv?cdn=cn-gotcha01&expires=1602496530&len=0&oi=1939228219&pt=&qn=150&trid=e6540d81a5d04c2ea459c46ebe77472a&sigparams=cdn,expires,len,oi,pt,qn,trid&sign=9deea67bb9e9c1f0fa3886a34aa09473&ptype=0&src=9&sl=1&order=2",
        "length": 0,
        "order": 2,
        "stream_type": 0,
        "p2p_type": 0
      },
      {
        "url": "https://d1--cn-gotcha04.bilivideo.com/live-bvc/982058/live_14073662_bs_3699814_1500.flv?cdn=cn-gotcha04&expires=1602496530&len=0&oi=1939228219&pt=&qn=150&trid=e6540d81a5d04c2ea459c46ebe77472a&sigparams=cdn,expires,len,oi,pt,qn,trid&sign=8753b270960034660184d975d86c0161&ptype=0&src=9&sl=1&order=3",
        "length": 0,
        "order": 3,
        "stream_type": 0,
        "p2p_type": 0
      },
      {
        "url": "https://d1--cn-gotcha04.bilivideo.com/live-bvc/139554/live_14073662_bs_3699814_1500.flv?cdn=cn-gotcha04&expires=1602496530&len=0&oi=1939228219&pt=&qn=150&trid=e6540d81a5d04c2ea459c46ebe77472a&sigparams=cdn,expires,len,oi,pt,qn,trid&sign=cf93474e923c9ba8288c45d954f81045&ptype=0&src=9&sl=1&order=4",
        "length": 0,
        "order": 4,
        "stream_type": 0,
        "p2p_type": 0
      }
    ]
  }
}
```

</details>
</details>
