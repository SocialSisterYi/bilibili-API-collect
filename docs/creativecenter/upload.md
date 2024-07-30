# 投稿

## 上传视频封面

> https://member.bilibili.com/x/vu/web/cover/up

*请求方式: POST*

认证方式：Cookie(SESSDATA)

注: 目前看来上传的图片似乎不会自动删除

**URL参数:**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| ts     | num  | 当前时间 | 不必要 | UNIX 毫秒时间戳 |

**正文参数(application/x-www-form-urlencoded):**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| csrf   | str  | CSRF Token (位于 Cookie 中 bili_jct) | 必要   |      |
| cover  | base64 | 视频封面 | 必要   | 经过 base64 编码的图片数据 |

**JSON回复:**

根对象:

| 字段    | 类型 | 内容     | 备注  |
| ------- | ---- | -------- | ----- |
| code    | num  | 返回值   | 0: 成功<br />-400: 请求错误<br />-111: csrf 校验失败<br />-101: 账号未登录 |
| message | str  | 错误信息 | 默认为 0 |
| ttl     | num  | 1        |       |
| data    | obj  | 信息本体 |       |

`data` 对象:

| 字段 | 类型 | 内容     | 备注 |
| ---- | ---- | -------- | ---- |
| url  | str  | 封面 URL |       |

**示例:**

假设已经把需要发送的数据进行编码存放在文件 `./b64` 中:

```text
csrf=xxxxxxxxxxxx&cover=data%3Aimage%2Fjpeg%3Bbase64%2C%2F9j%2F4AAQSkZJRgABA...
```

发送请求:

```shell
curl -X POST --url "https://member.bilibili.com/x/vu/web/cover/up" \
--url-query "ts=$(date +%s%3N)" \
--data-binary @b64 \
-b "SESSDATA=xxxxxx; bili_jct=xxxxxx"
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "url": "https://archive.biliimg.com/bfs/archive/77906db03b1eefac02613de184afad03f7bc58d7.jpg"
  }
}
```

</details>

## 投递视频稿件

> https://member.bilibili.com/x/vu/web/add/v3

*请求方式: POST*

认证方式：Cookie(SESSDATA)

**URL参数:**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| ts     | num  | 当前时间 | 不必要 | UNIX 毫秒时间戳 |
| csrf   | str  | CSRF Token (位于 Cookie 中 bili_jct) | 必要   |      |

**正文参数(application/json):**

根对象:

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| videos | array | 视频信息 | 必要   | 若为分 P 视频, 请注意数组元素顺序 |
| cover  | str  | 视频封面 URL | 必要   | 参见[上传视频封面](#上传视频封面) |
| cover43 | str  | 视频封面 URL (比例为 4:3) | 必要   | 可为空 |
| title  | str  | 视频标题 | 必要   | 最多 80 字 |
| copyright | num  | 1: 自制<br />2: 转载 | 必要   |      |
| tid    | num  | 分类 ID | 必要   |      |
| tag    | str  | 视频标签 | 必要   | 多个标签用 `,` 分隔, 最多 10 个 |
| desc_format_id | num  | 简介格式 ID? | 必要   | 9999: 纯文本 |
| desc   | str  | 视频简介 | 必要   | 最多 2000 字 |
| recreate | num  | 是否允许二创 | 必要   | -1: 允许(默认)<br />1: 不允许 |
| dynamic | str  | 粉丝动态 | 必要   |      |
| interactive | num  | 互动视频? | 必要   | 0: 否 |
| act_reserve_create | num  | 活动预约? | 必要   | 0: 否 |
| no_disturbance | num  | 勿扰模式? | 必要   | 0: 否 |
| no_reprint | num  | 是否允许转载 | 必要   | 1: 允许<br />0: 不允许 |
| subtitle | obj  | 字幕信息 | 必要   |      |
| dolby | num  | 杜比音效 | 必要   | 0: 否(默认)<br />1: 是 |
| lossless_music | num  | 无损音乐 | 必要   | 0: 否(默认)<br />1: 是 |
| up_selection_reply | bool | 精选评论 | 必要   |      |
| up_close_reply | bool | 关闭评论 | 必要   |      |
| up_close_danmu | bool | 关闭弹幕 | 必要   |      |
| web_os | num  | 平台类型? | 必要   | 3 |

`videos` 数组中的对象:

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| filename | str  | 视频文件名 | 必要   | 从视频上传接口获取, 无后缀名 |
| title | str  | 分 P 标题 | 必要   |      |
| desc | str  | 分 P 简介 | 必要   |      |
| cid | num  | 分 P cid | 必要   | 从视频上传接口获取, 即 `biz_id` |

`subtitle` 对象:

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| open | num  | 是否启用字幕投稿 | 必要   | 0: 启用(默认)<br />1: 不启用  |
| lan | str  | 字幕投稿语言 | 必要   | 可为空 |

**示例:**

假设已经把需要发送的数据存放在文件 `./data.json` 中:

```json
{
  "videos": [
    {
      "filename": "n240728ad33h52yqhxbtw51cb06sq9gx",
      "title": "Telnet手打HTTP",
      "desc": "",
      "cid": 500001629877726
    }
  ],
  "cover": "https://archive.biliimg.com/bfs/archive/85447ea20431ef799382c403c84b4bfb82a41053.jpg",
  "cover43": "",
  "title": "Telnet手打HTTP",
  "copyright": 1,
  "tid": 122,
  "tag": "telnet,socket,tcp,linux,http",
  "desc_format_id": 9999,
  "desc": "测试用 Telnet 手打 HTTP/1.x 协议访问本地服务器, 无 SSL/TLS 支持",
  "recreate": -1,
  "dynamic": "for testing",
  "interactive": 0,
  "act_reserve_create": 0,
  "no_disturbance": 0,
  "no_reprint": 1,
  "subtitle": {
    "open": 0,
    "lan": ""
  },
  "dolby": 0,
  "lossless_music": 0,
  "up_selection_reply": false,
  "up_close_reply": false,
  "up_close_danmu": false,
  "web_os": 3,
  "csrf": "xxxxxxxxxxxxxxxxxxxxxxxx"
}
```

发送请求:

```shell
curl -X POST --url "https://member.bilibili.com/x/vu/web/add/v3" \
--url-query "ts=$(date +%s%3N)" \
--url-query "csrf=xxxxxxxxxxxxxxxxxxxxxxxx" \
-H "Content-Type: application/json; charset=utf-8" \
--data @data.json \
-b "SESSDATA=xxxxxx; bili_jct=xxxxxxxxxxxxxxxxxxxxxxxx"
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "aid": 112861976201494,
    "bvid": "BV181vnexEmB"
  }
}
```

</details>

## 上传视频文件

注: 目前看来上传的视频文件似乎不会自动删除, 而且似乎不是视频也可以上传的样子, 请注意备份

### 上传流程

整个上传流程较为复杂, 详细参见[Demo](#Demo)

1. `GET` `preupload` 接口, [获取上传元数据](#获取上传元数据-预上传)

2. `POST` 第 1 步得到的地址, [上传视频元数据](#上传视频元数据)

3. `PUT` 第 1 步得到的地址, [分片上传视频文件](#分片上传视频文件)

4. `POST` 第 1 步得到的地址, [结束上传视频文件](#结束上传视频文件)

5. `GET` 第 1 步得到的地址, [下载已上传的视频文件](#下载已上传的视频文件) , 确认上传成功 (可选)

### 上传接口

#### 获取上传元数据 (预上传)

> https://member.bilibili.com/preupload

*请求方式: GET*

认证方式：Cookie(SESSDATA)

**URL参数:**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| name   | str  | 文件名   | 必要   | 会影响返回的上传地址 |
| r      | str  | 上传区域? | 必要   | upos |
| profile | str  | 上传配置? | 必要   | 普通视频: ugcfx/bup |
| probe_version | num | 上传版本? | 不必要   | 20221109 |
| upcdn | str  | 上传 CDN? | 不必要   | txa |
| zone | str  | 上传区域? | 不必要   | cs |
| ssl | num  | 是否使用 SSL? | 不必要   | 0 |
| version | str | 上传版本? | 不必要   | 2.14.0.0 |
| build | str | 上传版本? | 不必要   | 2140000 |
| size | num | 文件大小 | 不必要   | 视频文件大小, 单位 字节 |
| webVersion | str | 上传版本? | 不必要   | 2.13.0 |

**JSON回复:**

根对象:

| 字段    | 类型 | 内容     | 备注  |
| ------- | ---- | -------- | ----- |
| OK      | num  | 1        |       |
| auth    | str  | 上传凭证 | 作为后面请求中请求头 |
| biz_id  | num  | 业务 ID?  |       |
| chunk_retry | num | 重试次数? |       |
| chunk_retry_delay | num | 重试延迟? |       |
| chunk_size | num | 分块大小 | 后面要用 |
| endpoint | str  | 上传节点 | 后面要用 |
| endpoints | array | 上传节点列表 |       |
| expose_params | null |        |       |
| put_query | str  | 上传参数? |       |
| threads | num  | 上传线程数 |       |
| timeout | num  | 超时时间? |       |
| uip     | str  | 你的 IP  |       |
| upos_uri | str  | 上传地址 | 后面要用 |

`endpoints` 数组:

| 项   | 类型 | 内容     | 备注  |
| ---- | ---- | -------- | ----- |
| 0    | str  | 上传节点1 |       |
| ……   | str  | ……       |       |
| n    | str  | 上传节点n |       |

**示例:**

假设视频文件名为 `2024-07-28_15-37-50.mkv`, 视频大小为 `305333744` 字节

```shell
curl -G "https://member.bilibili.com/preupload" \
--data-urlencode "name=2024-07-28_15-37-50.mkv" \
--data-urlencode "r=upos" \
--data-urlencode "profile=ugcfx/bup" \
-b "SESSDATA=xxxxxxxxxxx"
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "OK": 1,
  "auth": "ak=1494471752&cdn=%2F%2Fupos-cs-upcdntxa.bilivideo.com&os=upos&sign=b6c5cc520a281200906aea97e190b098&timestamp=1722155211.324&uid=616368979&uip=108.181.24.77&uport=52096&use_dqp=0",
  "biz_id": 500001630152509,
  "chunk_retry": 10,
  "chunk_retry_delay": 3,
  "chunk_size": 10485760,
  "endpoint": "//upos-cs-upcdntxa.bilivideo.com",
  "endpoints": [
    "//upos-cs-upcdntxa.bilivideo.com",
    "//upos-cs-upcdnalia.bilivideo.com"
  ],
  "expose_params": null,
  "put_query": "os=upos&profile=ugcfx%2Fbup",
  "threads": 3,
  "timeout": 1200,
  "uip": "108.181.24.77",
  "upos_uri": "upos://ugcfx2lf/n240728ad1p51if4g3ke4s3o95sznogy.mkv"
}
```

</details>

#### 上传视频元数据

> URL 拼接格式: `"https"` + [上一个接口](#获取上传元数据-预上传)的`endpoint` + 上一个接口的`upos_uri`去掉协议名  
> JavaScript 模板字符串: `https:${preupload.endpoint}/${endpoint.upos_uri.replace("upos://", "")}`

*请求方式: POST*

认证方式：请求头 `X-Upos-Auth` 为上一接口得到的 `auth`

**URL参数:**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| uploads | str  | 留空     | 必要   | 留空 |
| output | str  | 输出格式  | 不必要 | 默认为 json(推荐), 留空为 xml |
| profile | str  | 上传配置? | 必要   | 与上一个接口相同, 普通视频: ugcfx/bup |
| filesize | num | 文件大小 | 必要   | 视频文件大小, 单位 字节 |
| partsize | num | 分块大小 | 必要   | 上一个接口返回, 且后面要用 |
| biz_id | num | 业务 ID? | 必要   | 上一个接口返回, 且后面要用 |

**JSON回复:**

根对象:

| 字段    | 类型 | 内容     | 备注  |
| ------- | ---- | -------- | ----- |
| OK      | num  | 1        |       |
| bucket  | str  | 空间名?   |       |
| key     | str  | 文件名?   |       |
| upload_id | str | 上传 ID | 后面要用 |

**示例:**

假设上一接口返回的
`auth` 为 `ak=1494471752&cdn=%2F%2Fupos-cs-upcdntxa.bilivideo.com&os=upos&sign=4004b35628e982bc90b59cec86f8c441&timestamp=1722173443.298&uid=616368979&uip=104.28.153.18&uport=44282&use_dqp=0`,
`biz_id` 为`500001630454700`,
`endpoint` 为 `//upos-cs-upcdntxa.bilivideo.com`,
`upos_uri` 为 `upos://ugcfx2lf/n240728adhejliqv0kqyg2s5n6huv501.mkv`,
`chunk_size` 为 `10485760`.
视频文件大小为 `305333744` 字节.

```shell
curl -X POST --url "https://upos-cs-upcdntxa.bilivideo.com/ugcfx2lf/n240728adhejliqv0kqyg2s5n6huv501.mkv` \
--url-query "uploads=" \
--url-query "output=json" \
--url-query "profile=ugcfx/bup" \
--url-query "filesize=305333744" \
--url-query "partsize=10485760" \
--url-query "biz_id=500001630454700" \
-H "X-Upos-Auth: ak=1494471752&cdn=%2F%2Fupos-cs-upcdntxa.bilivideo.com&os=upos&sign=4004b35628e982bc90b59cec86f8c441&timestamp=1722173443.298&uid=616368979&uip=104.28.153.18&uport=44282&use_dqp=0" \
-b "SESSDATA=xxxxxxxxx"
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "OK": 1,
  "bucket": "ugcfx2lf",
  "key": "/n240728adhejliqv0kqyg2s5n6huv501.mkv",
  "upload_id": "26c674b4-0dce-45f5-a9cd-a199d9c982bf"
}
```

</details>

#### 分片上传视频文件

> URL 同 [上一个接口](#上传视频元数据)

*请求方式: PUT*

认证方式：请求头 `X-Upos-Auth` 为上上一接口得到的 `auth`

**URL参数:**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| partNumber | num | 分块序号 | 必要   | 从 1 开始 |
| uploadId | str | 上传 ID | 必要   | 上一个接口返回 |
| chunk | num | 分块序号 | 必要   | 从 0 开始 |
| chunks | num | 分块总数 | 必要   | 自行计算: 文件大小除以分块大小并向上取整 |
| size | num | 该分块大小 | 必要   | 该实际上传字节数 |
| start | num | 该分块开始位置 | 必要   | 已实际上传字节数 |
| end | num | 该分块结束位置 | 必要   | 该分块上传结束后实际上传总字节数 |
| total | num | 总大小 | 必要   | 视频文件大小, 单位 字节 |

**正文参数(application/octet-stream):**

视频文件在该分块的字节流

**纯文本回复:**

```text
MULTIPART_PUT_SUCCESS
```

**示例:**

假设上上一接口返回的
`auth` 为 `ak=1494471752&cdn=%2F%2Fupos-cs-upcdntxa.bilivideo.com&os=upos&sign=911dd5b995895805d785aa607b4153b6&timestamp=1722212776.333&uid=616368979&uip=108.181.24.77&uport=36044&use_dqp=0`,
`endpoint` 为 `//upos-cs-upcdntxa.bilivideo.com`,
`upos_uri` 为 `upos://ugcfx2lf/n240729ad7gxi43yaoml312h2nbt2pnf.xz`,
`chunk_size` 为 `10485760`.

上一接口返回的
`upload_id` 为 `8130090a-16f7-4fe6-8a29-198f5abce913`.

视频文件名为 `20240724-remove-linux-then-install.tar.xz`, 文件大小为 `278255704` 字节.

假设您要上传的分块序号为 `1`,
该分块大小为 `10485760`,
该分块开始位置为 `0`,
该分块结束位置为 `10485760`,
该分块实际上传字节数为 `10485760`,
您已将文件分块存放至 `part01.tar.xz`, `part02.tar.xz`, ..., `part27.tar.xz`.

```shell
curl -X PUT --url "https://upos-cs-upcdntxa.bilivideo.com/ugcfx2lf/n240729ad7gxi43yaoml312h2nbt2pnf.xz" \
--url-query "partNumber=1" \
--url-query "uploadId=8130090a-16f7-4fe6-8a29-198f5abce913" \
--url-query "chunk=0" \
--url-query "chunks=27" \
--url-query "size=10485760" \
--url-query "start=0" \
--url-query "end=10485760" \
--url-query "total=278255704" \
-H "X-Upos-Auth: ak=1494471752&cdn=%2F%2Fupos-cs-upcdntxa.bilivideo.com&os=upos&sign=911dd5b995895805d785aa607b4153b6&timestamp=1722212776.333&uid=616368979&uip=108.181.24.77&uport=36044&use_dqp=0" \
-H "Content-Type: application/octet-stream" \
--data-binary @part01.tar.xz \
-b "SESSDATA=xxxxxxxxx"
```

<details>
<summary>查看响应示例:</summary>

```text
MULTIPART_PUT_SUCCESS
```

</details>

#### 结束上传视频文件

> URL 同 [上一个接口](#分片上传视频文件)

*请求方式: POST*

认证方式：请求头 `X-Upos-Auth` 为上上上一接口得到的 `auth`

**URL参数:**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| output | str  | 输出格式  | 不必要 | 默认为 json(推荐), 留空为 xml |
| name | str  | 文件名   | 必要   | 视频文件名 |
| profile | str  | 上传配置? | 必要   | 与上一个接口相同, 普通视频: ugcfx/bup |
| uploadId | str | 上传 ID | 必要   | 与上一个接口相同 |
| biz_id | num | 业务 ID? | 必要   | 与上上一个接口相同 |

**正文参数(application/json):**

根对象:

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ------ | ---- | ---- | ------ | ---- |
| parts | array | 各分块信息 | 必要 | 按实际上传顺序而不是分块序号顺序 |

`parts` 数组:

| 项  | 类型 | 内容 | 必要性 | 备注 |
| --- | ---- | ---- | ------ | ---- |
| 0  | obj | 分块信息1 | 必要 | 按实际上传顺序而不是分块序号顺序 |
| 1  | obj | 分块信息2 | 必要 |      |
| …… | obj | …… |        |      |
| n  | obj | 分块信息n | 必要 |      |

`parts` 数组中的对象:

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ------ | ---- | ---- | ------ | ---- |
| partNumber | num | 分块序号 | 必要 | 从 1 开始 |
| eTag | str | `etag` | 必要 |  |

**JSON回复:**

与 [上上一个接口](#上传视频元数据) 相同

**示例:**

假设上上上一接口返回的
`auth` 为 `ak=1494471752&cdn=%2F%2Fupos-cs-upcdntxa.bilivideo.com&os=upos&sign=911dd5b995895805d785aa607b4153b6&timestamp=1722212776.333&uid=616368979&uip=108.181.24.77&uport=36044&use_dqp=0`,
`endpoint` 为 `//upos-cs-upcdntxa.bilivideo.com`,
`upos_uri` 为 `upos://ugcfx2lf/n240729ad7gxi43yaoml312h2nbt2pnf.xz`,
`biz_id` 为 `500001630826789`.

上上一接口返回的
`upload_id` 为 `8130090a-16f7-4fe6-8a29-198f5abce913`.

视频文件名为 `20240724-remove-linux-then-install.tar.xz`, 文件大小为 `278255704` 字节.

假设您已经全部上传完毕, 共上传 `27` 个分块, 本次请求上传的的内容存放在 `body.json` 文件中.

```shell
curl -X PUT --url "https://upos-cs-upcdntxa.bilivideo.com/ugcfx2lf/n240729ad7gxi43yaoml312h2nbt2pnf.xz" \
--url-query "output=json" \
--url-query "name=20240724-remove-linux-then-install.tar.xz" \
--url-query "profile=ugcfx%2Fbup" \
--url-query "uploadId=8130090a-16f7-4fe6-8a29-198f5abce913" \
--url-query "biz_id=500001630826789" \
-H "X-Upos-Auth: ak=1494471752&cdn=%2F%2Fupos-cs-upcdntxa.bilivideo.com&os=upos&sign=911dd5b995895805d785aa607b4153b6&timestamp=1722212776.333&uid=616368979&uip=108.181.24.77&uport=36044&use_dqp=0" \
-H "Content-Type: application/json" \
--data-binary @body.json \
-b "SESSDATA=xxxxxxxxx"
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "OK": 1,
  "location": "ugcfx2lf/n240729ad7gxi43yaoml312h2nbt2pnf.xz",
  "bucket": "ugcfx2lf",
  "key": "/n240729ad7gxi43yaoml312h2nbt2pnf.xz"
}
```

</details>

#### 下载已上传的视频文件

> URL 同 [上一个接口](#结束上传视频文件)

*请求方式: GET*

认证方式：请求头 `X-Upos-Auth` 为上上上上一接口得到的 `auth`

**字节流回复:**

视频文件字节流

**示例:**

假设请求上一接口时的 URL 为 `https://upos-cs-upcdntxa.bilivideo.com/ugcfx2lf/n240729ad7gxi43yaoml312h2nbt2pnf.xz`,
请求头的 `X-Upos-Auth` 为 `ak=1494471752&cdn=%2F%2Fupos-cs-upcdntxa.bilivideo.com&os=upos&sign=911dd5b995895805d785aa607b4153b6&timestamp=1722212776.333&uid=616368979&uip=108.181.24.77&uport=36044&use_dqp=0`,
您想要下载到运行目录下的 `file.tar.xz` 文件

```shell
curl -G "https://upos-cs-upcdntxa.bilivideo.com/ugcfx2lf/n240729ad7gxi43yaoml312h2nbt2pnf.xz" \
-H "X-Upos-Auth: ak=1494471752&cdn=%2F%2Fupos-cs-upcdntxa.bilivideo.com&os=upos&sign=911dd5b995895805d785aa607b4153b6&timestamp=1722212776.333&uid=616368979&uip=108.181.24.77&uport=36044&use_dqp=0" \
--output file.tar.xz
```

<details>
<summary>查看检查示例:</summary>

```text
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  265M  100  265M    0     0  9493k      0  0:00:28  0:00:28 --:--:-- 10.3M
$ sha512sum file.tar.xz
abfbedf1ac4f251c81103beb4d5406af1e0b64b9d54e99bfc77d2a8a9c4913a9fd2f1751828ace8aac036f6385609d99e251437b07a0491caca2ad7069a57003  file.tar.xz
$ sha512sum ~/Documents/video-proj/20240724-remove-linux-then-install.tar.xz
abfbedf1ac4f251c81103beb4d5406af1e0b64b9d54e99bfc77d2a8a9c4913a9fd2f1751828ace8aac036f6385609d99e251437b07a0491caca2ad7069a57003  /home/sess/Documents/video-proj/20240724-remove-linux-then-install.tar.xz
```

</details>

### Demo

#### Java

注: 需要 Gson 依赖, Java 8+, 单线程上传, 无异常处理, 仅供参考

```java
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.StringJoiner;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonSyntaxException;

/**
 * A demo class for uploading videos to Bilibili.
 * 
 * @author SessX6cf
 */
public class BiliVideoUploader {

  private static String SESSDATA;
  private static File VIDEO_FILE;

  public static void main(String[] args) throws IOException {
    long ts = System.currentTimeMillis();
    if (args.length < 2) {
      System.out.println("Usage: java BiliVideoUploader <video_file> <sessdata>");
      return;
    } else {
      VIDEO_FILE = new File(args[0]);
      if (!VIDEO_FILE.isFile()) {
        System.out.println("It is not a file!");
        return;
      } else if (!VIDEO_FILE.canRead()) {
        System.out.println("Cannot read the file!");
        return;
      } else if (VIDEO_FILE.isDirectory()) {
        System.out.println("You can play a directory?!");
        return;
      }
      SESSDATA = args[1];
    }
    // step 1: preupload video
    System.out.println("step 1: preupload video");
    JsonObject preuploadVideo = preuploadVideo();
    // step 2: post video meta
    System.out.println("step 2: post video meta");
    JsonObject postVideoMeta = postVideoMeta(preuploadVideo);
    // step 3: upload video
    System.out.println("step 3: upload video");
    int chunks = uploadVideo(preuploadVideo, postVideoMeta);
    // step 4: end upload
    System.out.println("step 4: end upload");
    endupload(preuploadVideo, postVideoMeta, chunks);
    // finished
    System.out.println("finished (" + (System.currentTimeMillis() - ts) + "ms)");
  }

  private static String querypart(String key, String value) throws IOException {
    return key + "=" + URLEncoder.encode(value, "UTF-8");
  }

  private static HttpURLConnection conn(String url, String method) throws IOException {
    HttpURLConnection conn;
    try {
      conn = (HttpURLConnection) new URI(url).toURL().openConnection();
    } catch (java.net.URISyntaxException e) {
      throw new IOException(e);
    }
    conn.setRequestMethod(method);
    // conn.setRequestProperty("User-Agent", "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0");
    if (url.contains("bilibili.com")) conn.setRequestProperty("Cookie", "SESSDATA=" + SESSDATA);
    return conn;
  }

  private static byte[] inputStreamToString(HttpURLConnection conn) throws IOException {
    ByteArrayOutputStream baos = new ByteArrayOutputStream();
    InputStream in;
    in = conn.getInputStream();
    int b;
    while ((b = in.read()) != -1) {
      baos.write(b);
    }
    in.close();
    return baos.toByteArray();
  }

  private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();

  private static JsonObject preuploadVideo() throws IOException {
    StringJoiner url = new StringJoiner("&", "https://member.bilibili.com/preupload?", "");
    url.add(querypart("name", VIDEO_FILE.getName()));
    // url.add(querypart("size", String.valueOf(VIDEO_FILE.length())));
    url.add(querypart("r", "upos"));
    url.add(querypart("profile", "ugcfx/bup"));
    HttpURLConnection conn = conn(url.toString(), "GET");
    System.out.println("GET " + url.toString());
    String response = new String(inputStreamToString(conn), StandardCharsets.UTF_8);
    try {
      JsonObject json = GSON.fromJson(response, JsonObject.class);
      System.out.println(GSON.toJson(json));
      return json;
    } catch (JsonSyntaxException e) {
      System.out.println(response);
      throw e;
    }
  }

  private static JsonObject postVideoMeta(JsonObject preuploadVideo) throws IOException {
    String schemeandhost = "https:" + preuploadVideo.get("endpoint").getAsString();
    String path = preuploadVideo.get("upos_uri").getAsString().replaceFirst("upos:/", "");
    StringJoiner url = new StringJoiner("&", schemeandhost + path + "?", "");
    url.add(querypart("uploads", "")); // WARNING: this is not a typo, it's required, or 404
    url.add(querypart("output", "json"));
    url.add(querypart("profile", "ugcfx/bup"));
    url.add(querypart("filesize", String.valueOf(VIDEO_FILE.length())));
    url.add(querypart("partsize", preuploadVideo.get("chunk_size").getAsString()));
    url.add(querypart("biz_id", preuploadVideo.get("biz_id").getAsString()));
    HttpURLConnection conn = conn(url.toString(), "POST");
    conn.setRequestProperty("X-Upos-Auth", preuploadVideo.get("auth").getAsString()); // 403 without it
    System.out.println("POST " + url.toString());
    String response = new String(inputStreamToString(conn), StandardCharsets.UTF_8);
    try {
      JsonObject json = GSON.fromJson(response, JsonObject.class);
      System.out.println(GSON.toJson(json));
      return json;
    } catch (JsonSyntaxException e) {
      System.out.println(response);
      throw e;
    }
  }

  private static int uploadVideo(JsonObject preuploadVideo, JsonObject postVideoMeta) throws IOException {
    long startts = System.currentTimeMillis() - 1;
    String schemeandhost = "https:" + preuploadVideo.get("endpoint").getAsString();
    String path = preuploadVideo.get("upos_uri").getAsString().replaceFirst("upos:/", "");
    String urlp = schemeandhost + path + "?";
    long length = VIDEO_FILE.length();
    byte[] buffer = new byte[preuploadVideo.get("chunk_size").getAsInt()];
    int size = 0;
    int chunks = (int) Math.ceil(length / (double) buffer.length);
    InputStream in = new FileInputStream(VIDEO_FILE);
    for (int chunk = 0; chunk < chunks; chunk++) {
      System.out.println("speed: " + (chunk * buffer.length) / (System.currentTimeMillis() - startts) + "bytes/s");
      System.out.println("chunk: " + (chunk + 1) + "/" + chunks);
      size = in.read(buffer, 0, buffer.length);
      if (size == -1) {
        break;
      }
      StringJoiner url = new StringJoiner("&", urlp, "");
      url.add(querypart("partNumber", String.valueOf(chunk + 1)));
      url.add(querypart("uploadId", postVideoMeta.get("upload_id").getAsString()));
      url.add(querypart("chunk", String.valueOf(chunk)));
      url.add(querypart("chunks", String.valueOf(chunks)));
      url.add(querypart("size", String.valueOf(size)));
      url.add(querypart("start", String.valueOf(chunk * buffer.length)));
      url.add(querypart("end", String.valueOf((chunk) * buffer.length + size)));
      url.add(querypart("total", String.valueOf(length)));
      HttpURLConnection conn = conn(url.toString(), "PUT");
      conn.setRequestProperty("X-Upos-Auth", preuploadVideo.get("auth").getAsString());
      conn.setRequestProperty("Content-Type", "application/octet-stream");
      conn.setRequestProperty("Content-Length", String.valueOf(size));
      conn.setDoOutput(true);
      conn.getOutputStream().write(buffer, 0, size);
      System.out.println("PUT " + url.toString());
      String response = new String(inputStreamToString(conn), StandardCharsets.UTF_8);
      System.out.println(response);
    }
    in.close();
    return chunks;
  }

  private static void endupload(JsonObject preuploadVideo, JsonObject postVideoMeta, int chunks) throws IOException {
    String schemeandhost = "https:" + preuploadVideo.get("endpoint").getAsString();
    String path = preuploadVideo.get("upos_uri").getAsString().replaceFirst("upos:/", "");
    StringJoiner url = new StringJoiner("&", schemeandhost + path + "?", "");
    url.add(querypart("output", "json"));
    url.add(querypart("name", VIDEO_FILE.getName()));
    url.add(querypart("profile", "ugcfx/bup"));
    url.add(querypart("uploadId", postVideoMeta.get("upload_id").getAsString()));
    url.add(querypart("biz_id", preuploadVideo.get("biz_id").getAsString()));
    JsonArray parts = new JsonArray();
    for (int i = 1; i <= chunks; i++) {
      JsonObject part = new JsonObject();
      part.addProperty("partNumber", i);
      part.addProperty("eTag", "etag");
      parts.add(part);
    }
    JsonObject body = new JsonObject();
    body.add("parts", parts);
    HttpURLConnection conn = conn(url.toString(), "POST");
    conn.setRequestProperty("X-Upos-Auth", preuploadVideo.get("auth").getAsString());
    conn.setRequestProperty("Content-Type", "application/json; charset=UTF-8");
    conn.setDoOutput(true);
    conn.getOutputStream().write(body.toString().getBytes(StandardCharsets.UTF_8));
    System.out.println("POST " + url.toString());
    String response = new String(inputStreamToString(conn), StandardCharsets.UTF_8);
    try {
      JsonObject json = GSON.fromJson(response, JsonObject.class);
      System.out.println(GSON.toJson(json));
    } catch (JsonSyntaxException e) {
      System.out.println(response);
      throw e;
    }
  }

}
```
