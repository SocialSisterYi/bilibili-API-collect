# APP端开屏图片

## 获取APP端开屏图片列表

> http://app.bilibili.com/x/v2/splash/brand/list

*请求方式：GET*

鉴权方式：APP

**url参数：**

| 参数名 | 类型 | 内容       | 必要性      | 备注 |
| ------ | ---- | ---------- | ----------- | ---- |
| appkey | str  | APP密钥    | APP方式必要 |      |
| ts     | num  | 当前时间戳 | APP方式必要 |      |
| sign   | str  | APP签名    | APP方式必要 |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                 |
| ------- | ---- | -------- | ---------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-3：API校验密匙错误<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                              |
| ttl     | num  | 1        |                                                      |
| data    | obj  | 信息本体 |                                                      |

`data`对象：

| 字段          | 类型  | 内容         | 备注         |
| ------------- | ----- | ------------ | ------------ |
| pull_interval | num   | 1800         | 作用尚不明确 |
| forcibly      | bool  | false        | 作用尚不明确 |
| rule          | str   | order        | 作用尚不明确 |
| list          | array | 开屏图片列表 |              |
| show          | array | 默认显示项   |              |

`data`中的`list`数组：

| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| 0    | obj  | 开屏图片1     |      |
| n    | obj  | 开屏图片(n+1) |      |
| ……   | obj  | ……            | ……   |

`list`数组中的对象：

| 字段     | 类型 | 内容                  | 备注 |
| -------- | ---- | --------------------- | ---- |
| id       | num  | 开屏图片ID            |      |
| thumb    | str  | 开屏图片url           |      |
| logo_url | str  | “bilibili”logo图片url |      |

`data`中的`show`数组：

| 项   | 类型 | 内容       | 备注 |
| ---- | ---- | ---------- | ---- |
| 0    | obj  | 套了个娃？ |      |

`show`数组中的对象：

| 字段        | 类型 | 内容       | 备注         |
| ----------- | ---- | ---------- | ------------ |
| id          | num  | 开屏图片ID |              |
| begin_time  | num  | 起始时间？ | 时间戳       |
| end_time    | num  | 结束时间？ | 时间戳       |
| probability | num  | 0          | 作用尚不明确 |
| duration    | num  | 显示时间？ | 单位为毫秒   |

**示例：**

```shell
curl -G 'http://app.bilibili.com/x/v2/splash/brand/list'\
--data-urlencode 'appkey=1d8b6e7d45233436'\
--data-urlencode 'ts=0'\
--data-urlencode 'sign=78a89e153cd6231a4a4d55013aa063ce'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "pull_interval": 1800,
        "forcibly": false,
        "rule": "order",
        "list": [
            {
                "id": 10,
                "thumb": "http://i0.hdslb.com/bfs/archive/e2d2f57e08b511d1a47203859f7bddb4ef9d4e16.png",
                "logo_url": "http://i0.hdslb.com/bfs/archive/ecc9b29bb4b803daf2a46fe5ef71bf530300162c.png"
            },
            {
                "id": 11,
                "thumb": "http://i0.hdslb.com/bfs/archive/fe737da5cdedf9dad038e5fd30e957be8a063bc2.png",
                "logo_url": "http://i0.hdslb.com/bfs/archive/ecc9b29bb4b803daf2a46fe5ef71bf530300162c.png"
            },
            {
                "id": 12,
                "thumb": "http://i0.hdslb.com/bfs/archive/574469a4a20f41ba4dc9ecd41d15f94eea875ed9.png",
                "logo_url": "http://i0.hdslb.com/bfs/archive/ecc9b29bb4b803daf2a46fe5ef71bf530300162c.png"
            },
            {
                "id": 13,
                "thumb": "http://i0.hdslb.com/bfs/archive/af0f4f611faa34340bd4f91def1973ccbfb8fbb3.png",
                "logo_url": "http://i0.hdslb.com/bfs/archive/ecc9b29bb4b803daf2a46fe5ef71bf530300162c.png"
            },
            {
                "id": 14,
                "thumb": "http://i0.hdslb.com/bfs/archive/1d40e975b09d5c87b11b3ae0c9ce6c6b82f63d9e.png",
                "logo_url": "http://i0.hdslb.com/bfs/archive/ecc9b29bb4b803daf2a46fe5ef71bf530300162c.png"
            }
        ],
        "show": [
            {
                "id": 12,
                "begin_time": 1597564800,
                "end_time": 1630753108,
                "probability": 0,
                "duration": 700
            }
        ]
    }
}
```

</details>

如ID=11的图片为：

![]( http://i0.hdslb.com/bfs/archive/fe737da5cdedf9dad038e5fd30e957be8a063bc2.png )

