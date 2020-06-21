# 视频观看数据上报

**本页所有操作均需登录（SESSDATA）**

## 上报观看进度（暂不支持bvID）

> http://api.bilibili.com/x/v2/history/report

*方式：POST*

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名   | 类型 | 内容                | 必要性 | 备注                  |
| -------- | ---- | ------------------- | ------ | --------------------- |
| aid      | num  | 视频avID            | 必要   |                       |
| cid      | num  | 视频CID             | 必要   | 用于识别分P           |
| progress | num  | 观看进度            | 非必要 | 单位为秒<br />默认为0 |
| csrf     | str  | cookies中的bili_jct | 必要   |                       |

**json回复：**

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功 <br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |

**示例：**

记录视频`av13662970`（`CID=126654047`）的观看记录位于`1248`秒

curl -b "SESSDATA=xxx" -d "aid=13662970&cid=126654047&progress=1248&csrf=xxx" "http://api.bilibili.com/x/v2/history/report"

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

