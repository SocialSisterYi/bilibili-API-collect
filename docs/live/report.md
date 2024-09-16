# 直播心跳上报

## 直播心跳 (Web端)

> https://live-trace.bilibili.com/xlive/rdata-interface/v1/heartbeat/webHeartBeat

*请求方式: GET*

**URL参数:**

| 参数名 | 类型 | 内容      | 必要性      | 备注              |
| ------ | ---- | --------- | ----------- | ----------------- |
| hb | str | heartbeat 正文 | 不必要 | 使用 base64 编码 |
| pf | str | 平台名称 | 不必要 | 可为 `web` |

`hb` 解码参数:

| 项 | 类型 | 内容 | 备注 |
| -- | ---- | ---- | ---- |
| 0 | num | 上次返回的 next_interval 值 | 默认 60 |
| 1 | num | 真实直播间号 |      |
| 2 | num | 1    | 作用尚不明确 |
| 3 | num | 0    | 作用尚不明确 |

**JSON回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| code | num | 返回值 |      |
| message | str | 错误信息 | 默认为 0 |
| ttl | num | 1    |      |
| data | obj | 信息本体 |      |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| next_interval | num | 下次心跳间隔 |      |

**示例:**

上报直播间 26863308 的心跳

```shell
curl -G "https://live-trace.bilibili.com/xlive/rdata-interface/v1/heartbeat/webHeartBeat" \
--data-urlencode "hb=$(echo "60|26863308|1|0" | base64 -)" \
--data-urlencode "pf=web"
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "next_interval": 60
  }
}
```

</details>
