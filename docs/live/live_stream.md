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
<summary>查看响应示例及响应含义</summary>

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

示例代码（python）:
```python
def get_stream_url(data):
    for stream in data['data']['playurl_info']['playurl']['stream']:
        for format in stream['format']:
            for codec in format['codec']:
                for url_info in codec['url_info']:
                    yield ''.join([url_info['host'], codec['base_url'], url_info['extra']])
```
最终从响应的链接随意选择一个即可，按照一般视频流处理即可（目前发现有m3u8和flv两种格式），至于编码格式之类问题，相关的下载器应该都能处理，或者自己根据需要在json回应中挑选

另外，有注意到部分链接可能包含客户端ip地址，在这方面（现在或者将来）可能有检测


> [根据真实直播间号获取直播视频流 （旧）](https://github.com/SocialSisterYi/bilibili-API-collect/blob/f6760f4be38d5b592d396b211e48c666286524de/docs/live/live_stream.md)