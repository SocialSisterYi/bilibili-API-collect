# 投稿

## 上传视频封面

> https://member.bilibili.com/x/vu/web/cover/up

*请求方式: POST*

认证方式：Cookie(SESSDATA)

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

注: <!--由于时间限制, -->请求参数大部分均为推测, 仅供参考, 暂无能力验证是否正确

**URL参数:**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| ts     | num  | 当前时间 | 不必要 | UNIX 毫秒时间戳 |
| csrf   | str  | CSRF Token (位于 Cookie 中 bili_jct) | 必要   |      |

**正文参数(application/json):**

根对象:

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| videos | array | 视频信息 | 必要   |      |
| cover  | str  | 视频封面 URL | 必要   | 参见[上传视频封面](#上传视频封面) |
| cover43 | str  | 视频封面 URL (比例为 4:3) | 必要   | 可为空 |
| title  | str  | 视频标题 | 必要   |      |
| copyright | num  | 1: 自制<br />2: 转载 | 必要   |      |
| tid    | num  | 分类 ID | 必要   |      |
| tag    | str  | 视频标签 | 必要   | 多个标签用 `,` 分隔 |
| desc_format_id | num  | 简介格式 ID? | 必要   | 9999: 纯文本 |
| desc   | str  | 视频简介 | 必要   |      |
| recreate | num  | 重新投递? | 必要   | -1 |
| dynamic | str  | 粉丝动态 | 必要   |      |
| interactive | num  | 互动视频? | 必要   | 0: 否 |
| act_reserve_create | num  | 活动预约? | 必要   | 0: 否 |
| no_disturbance | num  | 勿扰模式? | 必要   | 0: 否 |
| no_reprint | num  | 禁止转载? | 必要   | 1: 是 |
| subtitle | obj  | 字幕信息 | 必要   |      |
| dolby | num  | 杜比音效? | 必要   | 0: 否 |
| lossless_music | num  | 无损音乐? | 必要   | 0: 否 |
| up_selection_reply | bool | 精选评论 | 必要   |      |
| up_close_reply | bool | 关闭评论 | 必要   |      |
| up_close_danmu | bool | 关闭弹幕 | 必要   |      |
| web_os | num  | 平台类型? | 必要   | 3: PC 端 |

`videos` 数组中的对象:

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| filename | str  | 视频文件名 | 必要   | 从视频上传接口获取 |
| title | str  | 分 P 标题? | 必要   |      |
| desc | str  | 分 P 简介? | 必要   |      |
| cid | num  | 分 P cid | 必要   |      |

`subtitle` 对象:

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| open | num  | 字幕开关? | 必要   | 0  |
| lan | str  | 字幕语言? | 必要   | 可为空 |

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
