# 发布动态

## 为图片动态上传图片

> https://api.bilibili.com/x/dynamic/feed/draw/upload_bfs

*请求方法: POST*

认证方式: Cookie (SESSDATA)

注意: 非日常类型像素宽高必须大于 420

**正文参数 (multipart/form-data):**

| 参数名   | 类型 | 内容                  | 必要性 | 备注 |
| -------- | ---- | --------------------- | ------ | ---- |
| file_up  | file | 需要上传的图片文件    | 必要   | 格式仅支持 `jpg` `png` `gif` |
| category | string | 图片类型            | 不必要   | daily: 日常 (动态) (默认)<br />draw: 绘画 (画友)<br />cos: 摄影 (COSPLAY) |
| biz      | string |                    | 不必要 | `new_dyn` |
| csrf     | string | CSRF Token (即 Cookie 中 bili_jct) | 必要   |    |

**JSON 回复:**

根对象：

| 字段    | 类型 | 内容     | 备注 |
| ------- | ---- | -------- | ---- |
| code    | number | 返回值   | 0: 成功<br />4100001: 参数错误<br />-101: 账号未登录 |
| message | string | 错误信息 | 默认为 `0` |
| data    | object | 信息本体 | 成功时为有效信息 |
| ttl | number | `1` | |

`data` 对象：

| 字段         | 类型 | 内容           | 备注 |
| ------------ | ---- | -------------- | ---- |
| image_url | string | 已上传图片 URL  |      |
| image_width  | number | 已上传图片宽度 | 像素 |
| image_height | number | 已上传图片高度 | 像素 |
| img_size | number | 已上传图片大小 | k |

**示例:**

上传图片 `test.png` 类型为 `日常`

```shell
curl 'https://api.bilibili.com/x/dynamic/feed/draw/upload_bfs' \
-F 'file_up=@test.png' \
-F 'category=daily' \
-F 'csrf=xxxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "image_url": "http://i0.hdslb.com/bfs/new_dyn/8ad5640045a114b62580614cb512bbc32095498218.png",
    "image_width": 73,
    "image_height": 71,
    "img_size": 6.261
  }
}
```

</details>

## 创建投票

> https://api.vc.bilibili.com/vote_svr/v1/vote_svr/create_vote

*请求方法: POST*

认证方式: Cookie (SESSDATA)

注意: `options` 最少两个, 下标 `n` 从 `0` 开始

**正文参数 (multipart/form-data)：**

| 参数名                     | 类型 | 内容 | 必要性 | 备注 |
| -------------------------- | ---- | ---- | ------ | ---- |
| info[title]                | string | 投票标题     | 必要   | |
| info[desc]                 | string | 投票描述     | 非必要 | 可为空 |
| info[type]                 | number | 投票类型     | 必要   | 0: 文字投票<br />1: 图片投票 |
| info[choice_cnt]           | number | 最多选几项   | 必要   | |
| info[duration]             | number | 投票持续秒数 | 必要   | 常用:<br/>三天: 259200<br/>七天: 604800<br/>三十天: 2592000 |
| info[options]\[ n ][desc]  | string | 第 n 项选项文字内容 | 必要   | |
| info[options]\[ n ][img_url] | strin  | 第 n 项选项投票图片        | 非必要 ||
| csrf                       | string | CSRF Token (即 Cookie 中 bili_jct) | 非必要 | |

**JSON 回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                             |
| ------- | ---- | -------- | -------------------------------- |
| code    | number | 返回值   | 0：成功 <br />5100001: 参数错误  |
| msg     | string | 错误信息 | 成功为空                         |
| message | string | 错误信息 | 跟上面那个一模一样               |
| data    | object | 信息本体 | 仅在正确时既`code=0`时为有效信息 |

`data` 对象：

| 字段         | 类型 | 内容           | 备注 |
| ------------ | ---- | -------------- | ---- |
| vote_id | number | 投票 id |      |
| \_gt\_ | number  | 0 |  |

**示例:**

创建一个标题为 `是否自愿开学` 持续七天的纯文本投票

```shell
curl -X POST 'https://api.vc.bilibili.com/vote_svr/v1/vote_svr/create_vote' \
--data-urlencode 'info[title]=是否自愿开学' \
--data-urlencode 'info[desc]=问卷调查:自愿开学' \
--data-urlencode 'info[type]=0' \
--data-urlencode 'info[choice_cnt]=1' \
--data-urlencode 'info[duration]=604800' \
--data-urlencode 'info[options][0][desc]=自愿' \
--data-urlencode 'info[options][1][desc]=不自愿' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "msg": "",
  "message": "",
  "data": {
    "vote_id": 4947171,
    "_gt_": 0
  }
}
```

</details>

## 发表纯文本动态

> https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/create

*请求方法: POST*

认证方式: Cookie (SESSDATA)

**正文参数 (multipart/form-data):**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| --- | --- | --- | --- | --- |
| dynamic_id | number | 0 | 必要 |  |
| type | number | 4 | 必要 |  |
| rid | number | 0 | 必要 |  |
| content | string | 动态内容 | 必要 |  |
| up_choose_comment | number | 0 | 非必要 |  |
| up_close_comment | number | 0 | 非必要 |  |
| extension | json | 位置信息 | 非必要 |  |
| at_uids | string | 动态中 at 到的用户的 uid | 非必要 | 使用逗号`,`分隔 |
| ctrl | array | 特殊格式控制 (如 at 别人时的蓝字体和链接) | 非必要 |  |
| csrf_token | string | CSRF Token (即 Cookie 中 bili_jct) | 非必要 |  |
| csrf | string | CSRF Token (即 Cookie 中 bili_jct) | 非必要 |  |

`extension` 参数值:

```jsonc
{
  "emoji_type": 1,
  "lbs_cfg": {
    "title": "**市",
    "poi": "156330200",
    "show_title": "**市",
    "type": 1,
    "address": "**市",
    "location": {
      "lng": //显示的经度数值,
      "lat": //显示的纬度数值
    },
    "distance": 0
  },
  "flag_cfg": {},
  "from_cfg": {
    "location": {
      "lat": //用户实际纬度数值,
      "lng": //用户实际经度数值
    }
  }
}
```

`ctrl` 数组中的对象:

| 参数名 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| location | number | 从全文第几个字开始变蓝 | |
| type | number | 1 | 可能 1 代表链接到用户 mid |
| length | number | 这一段变蓝多少字 | |
| data | string | 链接目标 | 被 at 人的 mid |

**JSON 回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | number | 返回值 | 0: 成功 |
| message | string | 错误信息 | 成功为空 |
| data | object | 数据本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| result | number | 0 |  |
| errmsg | string | 像是服务器日志一样的东西 |  |
| dynamic_id | number | 动态 id |  |
| create_result | number | 1 |  |
| dynamic_id_str | string | 动态 id | 字符串格式 |
| \_gt_ | number | 0 |  |

**示例:**

<details>
<summary>纯文本:</summary>

```bash
curl 'https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/create' \
	--data-urlencode 'dynamic_id=0' \
	--data-urlencode 'type=4' \
	--data-urlencode 'rid=0' \
	--data-urlencode 'content=Hello Bug~' \
	--data-urlencode 'up_choose_comment=0' \
	--data-urlencode 'up_close_comment=0' \
	--data-urlencode 'extension={"emoji_type":1,"from":{"emoji_type":1},"flag_cfg":{}}' \
	--data-urlencode 'at_uids=' \
	--data-urlencode 'ctrl=[]' \
	--data-urlencode 'csrf_token=de2731532b4ab96bc8536da948932668' \
	--data-urlencode 'csrf=de2731532b4ab96bc8536da948932668' \
    -b 'SESSDATA=******'
```

```json
{
  "code": 0,
  "msg": "",
  "message": "",
  "data": {
    "result": 0,
    "errmsg": "; Create dynamic:588320531406678918, res:0, result:1; Push create kafka:0; Push create databus:0; Register comment result:0; Add outbox result:1",
    "dynamic_id": 588320531406678918,
    "create_result": 1,
    "dynamic_id_str": "588320531406678918",
    "_gt_": 0
  }
}
```

</details>

<details>
<summary>at 两个人:</summary>

动态正文
```
[热词系列_神仙UP]@暮光小猿wzt @社会易姐QwQ 
```

at_uids
```
15858903,293793435
```

ctrl
```json
[
  { "location": 11, "type": 1, "length": 9, "data": "15858903" },
  { "location": 20, "type": 1, "length": 9, "data": "293793435" }
]
```

命令
```bash
curl 'https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/create' \
    --data-urlencode 'dynamic_id': '0' \
    --data-urlencode 'type': '4' \
    --data-urlencode 'rid': '0' \
    --data-urlencode 'content': '[热词系列_神仙UP]@暮光小猿wzt @社会易姐QwQ ' \
    --data-urlencode 'up_choose_comment': '0' \
    --data-urlencode 'up_close_comment': '0' \
    --data-urlencode 'extension': '{"emoji_type":1,"from":{"emoji_type":1},"flag_cfg":{}}' \
    --data-urlencode 'at_uids': '15858903,293793435' \
    --data-urlencode 'ctrl': '[{"location":11,"type":1,"length":9,"data":"15858903"},{"location":20,"type":1,"length":9,"data":"293793435"}]' \
    --data-urlencode 'csrf_token': 'de2731532b4ab96bc8536da948932668' \
    --data-urlencode 'csrf': 'de2731532b4ab96bc8536da948932668' \
    -b 'SESSDATA=******'
```

</details>

## 发表复杂动态

> https://api.bilibili.com/x/dynamic/feed/create/dyn

*请求方法：POST*

认证方式：Cookie (SESSDATA)

**URL 参数:**

| 参数名 | 类型 | 内容                     | 必要性 | 备注 |
| ------ | ---- | ------------------------ | ------ | ---- |
| csrf   | string  | CSRF Token (即 Cookie 中 bili_jct) | 必要   |      |

**正文参数 (application/json):**

根对象:

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| --- | --- | --- | --- | --- |
| dyn_req | object | 请求本体 | 必要 |  |

`dyn_req` 对象:

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| --- | --- | --- | --- | --- |
| attach_card | object | 特殊卡片 | 非必要 | 如直播预约等 |
| content | object | 动态内容 | 非必要 |  |
| meta | object | 元信息 | 非必要 | 大概是来源信息 |
| scene | number | 动态类型? | 必要 | 纯文本: 1 (实际同 2)<br/>带图: 2<br />4: 转发 |
| pics | object[] | 携带图片 | 非必要 | 最多九个 |
| topic | object | 话题 | 非必要 | |
| option | object | 互动设置 | 非必要 | 没有此项时默认开启评论区 |
| upload_id | string | 客户端生成的 | 非必要 | 内容为`发送人mid`+`当前秒级时间戳`+`四位随机整数`,中间用`_`隔开 |

`dyn_req.meta` 对象:

大概是来源信息, 示例见下

```json
{
  "app_meta": {
    "from": "create.dynamic.web",
    "mobi_app": "web"
  }
}
```

`dyn_req.content` 对象:

| 参数名   | 类型  | 内容                 | 必要性 | 备注 |
| -------- | ----- | -------------------- | ------ | ---- |
| contents | object[] | 动态组件对象有序数组 | 必要   |      |

`dyn_req.content.contents[]` 对象:

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ------ | ---- | ---- | ------ | ---- |
| raw_text | string | 文本 | 必要 |    |
| type | number | 组件类型 id | 不必要 | 参见 [富文本节点类型](../opus/rich_text_nodes.md) |
| biz_id | string | 动态组件的内容id转字符串 | 不必要 | 参见 [富文本节点类型](../opus/rich_text_nodes.md) |

`dyn_req.topic` 对象:

| 参数名        | 类型 | 内容    | 必要性 | 备注                       |
| ------------- | ---- | ------- | ------ | -------------------------- |
| from_source   | string  | 来源id? | 不必要   | 网页版直接选为 `dyn.web.list` |
| from_topic_id | number  | 0       | 不必要   |                            |
| id            | number  | 话题id  | 必要   |                            |
| name          | string  | 话题名  | 不必要   |                            |

`dyn_req.pics[]` 对象:

| 参数名     | 类型  | 内容             | 必要性 | 备注 |
| ---------- | ----- | ---------------- | ------ | ------------------------------------------------------------ |
| img_height | number   | 图高           | 非必要 | 这个东西会直接原封不动传到前端,比如你都写 0 在网页上就看不见了, 但是还会加载 |
| img_width  | number   | 图宽           | 非必要 | 同上                                                         |
| img_size   | float | 图片文件大小(KB) | 非必要 |                                                              |
| img_src    | string   | 图片 URL      | 必要   |                                                              |

`dyn_req.option` 对象:

| 参数名            | 类型 | 内容         | 必要性 | 备注            |
| ----------------- | ---- | ------------ | ------ | --------------- |
| up_choose_comment | number | 精选评论flag | 非必要 | 1: 开启         |
| close_comment     | number | 关闭评论flag | 非必要 | 同上, 上二选一 |

`dyn_req.topic` 对象:

| 参数名        | 类型 | 内容         | 必要性 | 备注     |
| ------------- | ---- | ------------ | ------ | -------- |
| from_source   | string  | `dyn.web.list` | 非必要 | 作用不明 |
| from_topic_id | number  | 0            | 非必要 | 作用不明 |
| id            | number  | 话题id       | 必要   |          |
| name          | string  | 话题名       | 非必要 |          |

**JSON 回复:**

根对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | number | 返回值 | 0: 成功<br />-101: 账号未登录<br />4126021: 你没有绑定手机，无法发布动态 |
| message | string | 错误信息 | 成功为空 |
| data | object | 数据本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| result | number | 0 |  |
| message | string | 错误信息 |  |
| dyn_id | number | 动态 id |  |
| dyn_id_str | string | 动态 id | 字符串格式 |
| dyn_type | number | 动态类型 | 1: 转发<br />2: 图文 |
| share_window | object | 分享提示 | 当 Cookie 不存在 `buvid3` 时存在 |

`data.share_window` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| main_title | string | `分享后会获得更多曝光，快去分享吧` | |

**示例:**

<details>
<summary>Cookie 带 `buvid3`:</summary>

动态正文
```
Test礼堂丁真,鉴定为一眼丁真
```

带两张一样的图:

http://i0.hdslb.com/bfs/new_dyn/322acd0fa92cfa59c0ad70e95ab95476470310172.png

然后关闭评论区

命令

```bash
curl -X POST 'https://api.bilibili.com/x/dynamic/feed/create/dyn?csrf=xxxxx' \
-b 'buvid3=114514;SESSDATA=xxxxx;' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dyn_req": {
        "content": {
            "contents": [
                {
                    "raw_text": "Test",
                    "type": 1,
                    "biz_id": ""
                },
                {
                    "raw_text": "礼堂丁真,鉴定为一眼丁真",
                    "type": 2,
                    "biz_id": "1463028352"
                }
            ]
        },
        "pics": [
            {
                "img_src": "http://i0.hdslb.com/bfs/new_dyn/322acd0fa92cfa59c0ad70e95ab95476470310172.png",
                "img_width": 1368,
                "img_height": 1500,
                "img_size": 662.6005859375
            },
            {
                "img_src": "http://i0.hdslb.com/bfs/new_dyn/322acd0fa92cfa59c0ad70e95ab95476470310172.png",
                "img_width": 1368,
                "img_height": 1500,
                "img_size": 662.6005859375
            }
        ],
        "option": {
            "close_comment": 1
        },
        "scene": 2
    }
}'
```

响应:

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "dyn_id": 755402172521250838,
    "dyn_id_str": "755402172521250838",
    "dyn_type": 2,
    "dyn_rid": 221621773
  }
}
```

</details>

## 立即发布定时动态

> https://api.vc.bilibili.com/dynamic_draft/v1/dynamic_draft/publish_now

*请求方法: POST*

认证方式: Cookie (SESSDATA)

**正文参数 (application/x-www-form-urlencoded):**

| 参数名   | 类型 | 内容                     | 必要性 | 备注 |
| -------- | ---- | ------------------------ | ------ | ---- |
| draft_id | file | 定时动态(草稿)id         | 必要   |      |
| csrf     | string | CSRF Token（即 Cookie 中 bili_jct) | 必要   |      |

**JSON 回复:**

根对象:

| 字段    | 类型 | 内容     | 备注         |
| ------- | ---- | -------- | ------------ |
| code    | number  | 返回值   | 0: 成功      |
| data    | object  | 信息本体 | 正常为空对象 |
| message | string  | 错误消息 | 正常为 `0`   |
| ttl     | number  | 1        |              |

<details>
<summary>查看示例</summary>


```bash
curl -X POST 'https://api.vc.bilibili.com/dynamic_draft/v1/dynamic_draft/publish_now' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'draft_id=755409289278914611' \
--data-urlencode 'csrf=xxx'
-b 'SESSDATA=xxxx;'
```

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {}
}
```

</details>
