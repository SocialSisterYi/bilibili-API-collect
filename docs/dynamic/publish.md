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

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| --- | --- | --- | --- | --- |
| dyn_req | object | 请求本体 | 必要 |  |

`dyn_req` 对象:

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| --- | --- | --- | --- | --- |
| attach_card | object | 特殊卡片 | 非必要 | 如直播预约等 |
| content | object | 动态内容 | 必要 | |
| meta | object | 元信息 | 非必要 | 大概是来源信息 |
| scene | number | 动态类型? | 必要 | 纯文本: 1<br/>带图: 2 |
| pics | array | 携带图片 | 非必要 | 最多九个 |
| topic | object | 话题 | 非必要 | |
| option | object | 互动设置 | 非必要 | 没有此项时默认开启评论区 |
| upload_id | string | 客户端生成的 | 非必要 | 内容为`发送人mid`+`当前秒级时间戳`+`四位随机整数`,中间用`_`隔开 |

`dyn_req` 对象的 `meta` 对象:

大概是来源信息, 示例见下

```json
{
  "app_meta": {
    "from": "create.dynamic.web",
    "mobi_app": "web"
  }
}
```

`dyn_req` 对象的 `content` 对象:

| 参数名   | 类型  | 内容                 | 必要性 | 备注 |
| -------- | ----- | -------------------- | ------ | ---- |
| contents | array | 动态组件对象有序数组 | 必要   |      |

`contents` 数组内每一个动态组件对象:

```jsonc
{
  "raw_text": "ui上直接显示的字符串",
  "type": 组件类型id,
  "biz_id": "动态组件的内容id转字符串,比如投票id"
}
```

动态组件类型:

| 组件名 | type | `biz_id`含义 |
| ------ | ---- | ------------ |
| 纯文本 | 1    | 空           |
| AT人   | 2    | AT人的mid    |
| 表情   | 9    | 空           |
| 投票   | 4    | 投票id       |

`dyn_req` 对象的 `topic` 对象:

| 参数名        | 类型 | 内容    | 必要性 | 备注                       |
| ------------- | ---- | ------- | ------ | -------------------------- |
| from_source   | string  | 来源id? | 必要   | 网页版直接选为 `dyn.web.list` |
| from_topic_id | number  | 0       | 必要   |                            |
| id            | number  | 话题id  | 必要   |                            |
| name          | string  | 话题名  | 必要   |                            |

`dyn_req` 对象的 `pics` 数组的每一项对象:

| 参数名     | 类型  | 内容             | 必要性 | 备注 |
| ---------- | ----- | ---------------- | ------ | ------------------------------------------------------------ |
| img_height | number   | 图高           | 非必要 | 这个东西会直接原封不动传到前端,比如你都写 0 在网页上就看不见了, 但是还会加载 |
| img_width  | number   | 图宽           | 非必要 | 同上                                                         |
| img_size   | float | 图片文件大小(KB) | 非必要 |                                                              |
| img_src    | string   | 图片 URL      | 必要   |                                                              |

`dyn_req`对象的`option`对象:

| 参数名            | 类型 | 内容         | 必要性 | 备注            |
| ----------------- | ---- | ------------ | ------ | --------------- |
| up_choose_comment | number | 精选评论flag | 非必要 | 1: 开启         |
| close_comment     | number | 关闭评论flag | 非必要 | 同上, 上二选一 |

`dyn_req`对象的`topic`对象:

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

`data`对象:

当Cookie中含有任意的`buvid3`时,比较干净简洁:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| result | number | 0 |  |
| message | string | 错误信息 |  |
| dyn_id | number | 动态 id |  |
| dyn_id_str | string | 动态 id | 字符串格式 |
| dyn_type | number | 动态类型 | 不带图片: 4<br/>带图片: 2<br/>其他请参考 get_dynamic_detail.md |
| \_gt_ | number | 0 |  |

**警告:下面的内容又乱又杂,而且绝大多数情况用不到,我建议大家用这个接口的时候随便带一个buvid3的cookie屏蔽掉它们算了.**

当Cookie中不含有`buvid3`时,较上述字段多出一个`fake_card`对象,大概是移动端用的卡片:

| 字段      | 类型 | 内容 | 备注         |
| --------- | ---- | ---- | ------------ |
| fake_card | object  | 0    | 又多又乱又杂 |

`fake_card`对象:

| 字段      | 类型  | 内容         | 备注                                                         |
| --------- | ----- | ------------ | ------------------------------------------------------------ |
| card_type | number   | 卡片类型     | 不带图片: 4<br/>带图片: 2<br/>其他请参考 [获取特定动态卡片信息](get_dynamic_detail.md) |
| modules   | array | 卡片组件列表 |                                                              |
| extend    | object   | 其他杂项信息 |                                                              |

`fake_card`对象的`modules`数组中每一项对象:

| 字段        | 类型 | 内容     | 备注                                         |
| ----------- | ---- | -------- | -------------------------------------------- |
| module_type | number  | 组件类型 | 1: 作者信息<br/>3: 动态内容<br/>其他有待发现 |
| ModuleItem  | object  | 卡片组件 |                                              |

`ModuleItem`对象与`module_type`对应关系:

| module_type | `ModuleItem`含有的唯一一个key | 备注                    |
| ----------- | ----------------------------- | ----------------------- |
| 1           | module_author                 | 作者信息                |
| 3           | module_desc                   | 动态内容                |
| 4           | module_dynamic                | 携带图片等              |
| 9           | module_stat                   | 不明,貌似一直都是空对象 |

  `ModuleItem`内`module_author`:

| 字段             | 类型 | 内容                             | 备注                                             |
| ---------------- | ---- | -------------------------------- | ------------------------------------------------ |
| mid              | number  | 发送者mid                        |                                                  |
| ptime_label_text | string  | 发送时间(人类可读形式)肯定是刚刚 |                                                  |
| author           | object  | 作者详细信息                     | 请参考[用户基本信息](../user/info.md),不再赘述.. |

  `ModuleItem`内`module_desc`:

| 字段 | 类型  | 内容           | 备注 |
| ---- | ----- | -------------- | ---- |
| desc | array | 动态组件列表   |      |
| text | string   | 动态纯文本形式 |      |

`module_desc`的`desc`数组:

| 项   | 类型 | 备注                |
| ---- | ---- | ------------------- |
| 0    | object  | 第0个动态组件       |
| n    | object  | 第n+1个动态组件组件 |
| ...  | object  | ...                 |

`desc`数组的每一项:

| 字段 | 类型 | 内容                                             | 备注                          |
| ---- | ---- | ------------------------------------------------ | ----------------------------- |
| text | string  | 该组件对外显示的纯文本                           | 对应请求时该组件的`raw_text`  |
| type | number  | 组件类型                                         | 对应请求时该组件的`type`      |
| rid  | string  | 组件内容的id,例如@人的mid                        | 根据需要出现,比如纯文本就没有 |
| uri  | string  | b站自定义`bilibili://`协议链接,用于@人点击跳转等 | 根据需要出现,比如纯文本就没有 |

  `ModuleItem`内`module_dynamic`:

| 字段       | 类型 | 内容               | 备注                 |
| ---------- | ---- | ------------------ | -------------------- |
| type       | number  | 不知道是什么的类型 | 5: 图片<br/>其他未知 |
| ModuleItem | object  | 组件?              | 怎么还有套娃的?      |

当`module_dynamic`的`type`字段为`5`时:

`module_dynamic`的`ModuleItem`有唯一key`dyn_draw`:

| 字段  | 类型  | 内容                             | 备注                                             |
| ----- | ----- | -------------------------------- | ------------------------------------------------ |
| items | array | 图片数组                         | 与请求部分`dyn_req.pics`一致                     |
| id    | number   | 这条图片动态所对应的相簿`doc_id` | 可以参考本文档的[相簿基本信息](../album/info.md) |

`fake_card`的`extend`对象:

| 字段          | 类型  | 内容                                           | 备注                                     |
| ------------- | ----- | ---------------------------------------------- | ---------------------------------------- |
| dyn_id_str    | string   | 动态id字符串形式                               |                                          |
| business_id   | string   | 未知                                           | 根据情况出现                             |
| orif_img_url  | string   | 封面图url(如果有)                              |                                          |
| share_type    | string   | 一般为3                                        | 未知                                     |
| share_scene   | string   | 一般为dynamic                                  | 未知                                     |
| is_fast_share | bool  | 一般为true                                     | 未知                                     |
| dyn_type      | number   | 动态类型                                       | 不带图片: 4<br/>带图片: 2<br/>其他待探索 |
| uid           | number   | 发送者mid                                      |                                          |
| card_url      | string   | b站自定义`bilibili://`协议链接,指向该条动态    |                                          |
| desc          | array | 动态组件列表,重复了一遍`module_desc`的desc数组 |                                          |
| reply         | object   | 评论区相关                                     |                                          |

`extend`的`reply`对象:

| 字段   | 类型  | 内容                                              | 备注 |
| ------ | ----- | ------------------------------------------------- | ---- |
| uri    | string   | b站自定义`bilibili://`协议链接,指向该条动态评论区 |      |
| params | array | 未知                                              |      |

**示例:**
 
<details>
<summary>Cookie 不带 `buvid3`:</summary>

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
    "dyn_id": 755402937023332386,
    "dyn_id_str": "755402937023332386",
    "dyn_type": 2,
    "dyn_rid": 221621929,
    "fake_card": {
      "card_type": 7,
      "modules": [
        {
          "module_type": 1,
          "ModuleItem": {
            "module_author": {
              "mid": 470310172,
              "ptime_label_text": "刚刚",
              "author": {
                "mid": 470310172,
                "name": "I_Min",
                "face": "https://i1.hdslb.com/bfs/face/d36e9dc2d14b545a055980a2f3c1f2d5621646c6.png",
                "official": {
                  "type": -1
                },
                "vip": {
                  "Type": 1,
                  "due_date": 1673366400000,
                  "label": {}
                },
                "uri": "bilibili://space/470310172?defaultTab=dynamic",
                "pendant": {},
                "nameplate": {
                  "nid": 3,
                  "name": "白银殿堂",
                  "image": "https://i1.hdslb.com/bfs/face/f6a31275029365ae5dc710006585ddcf1139bde1.png",
                  "image_small": "https://i0.hdslb.com/bfs/face/b09cdb4c119c467cf2d15db5263b4f539fa6e30b.png",
                  "level": "高级勋章",
                  "condition": "单个自制视频总播放数>=10万"
                }
              },
              "decorate_card": {
                "id": 984,
                "card_url": "https://i0.hdslb.com/bfs/vip/e42569d2f91a17346cdb991c7c34d3bbc677d4ef.png",
                "jump_url": "https://www.bilibili.com/h5/mall/equity-link/home?navhide=1&item_id=984&part=card&f_source=garb&from=post&isdiy=0",
                "fan": {
                  "number_str": "000000"
                }
              },
              "tp_list": [
                {
                  "type": 3,
                  "Item": {
                    "share": {
                      "icon": "http://i0.hdslb.com/bfs/feed-admin/ee5902a63bbe4a0d78646d11036b062ea60573f6.png",
                      "title": "分享"
                    }
                  }
                },
                {
                  "type": 7,
                  "Item": {
                    "default": {
                      "icon": "http://i0.hdslb.com/bfs/feed-admin/9163a7b29964cb84cb5fc35e4f7b899151cf2afc.png",
                      "title": "删除"
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "module_type": 3,
          "ModuleItem": {
            "module_desc": {
              "desc": [
                {
                  "text": "Test",
                  "type": 1
                },
                {
                  "text": "礼堂丁真,鉴定为一眼丁真",
                  "type": 2,
                  "uri": "bilibili://space/1463028352?defaultTab=dynamic",
                  "rid": "1463028352"
                }
              ],
              "text": "Test礼堂丁真,鉴定为一眼丁真"
            }
          }
        },
        {
          "module_type": 4,
          "ModuleItem": {
            "module_dynamic": {
              "type": 5,
              "ModuleItem": {
                "dyn_draw": {
                  "items": [
                    {
                      "src": "http://i0.hdslb.com/bfs/new_dyn/322acd0fa92cfa59c0ad70e95ab95476470310172.png",
                      "width": 1368,
                      "height": 1500,
                      "size": 662.6006
                    },
                    {
                      "src": "http://i0.hdslb.com/bfs/new_dyn/322acd0fa92cfa59c0ad70e95ab95476470310172.png",
                      "width": 1368,
                      "height": 1500,
                      "size": 662.6006
                    }
                  ],
                  "id": 221621929
                }
              }
            }
          }
        },
        {
          "module_type": 9,
          "ModuleItem": {
            "module_stat": {}
          }
        }
      ],
      "extend": {
        "dyn_id_str": "755402937023332386",
        "business_id": "221621929",
        "orig_img_url": "http://i0.hdslb.com/bfs/new_dyn/322acd0fa92cfa59c0ad70e95ab95476470310172.png",
        "desc": [
          {
            "text": "Test",
            "type": 1
          },
          {
            "text": "礼堂丁真,鉴定为一眼丁真",
            "type": 2,
            "uri": "bilibili://space/1463028352?defaultTab=dynamic",
            "rid": "1463028352"
          }
        ],
        "share_type": "3",
        "share_scene": "dynamic",
        "is_fast_share": true,
        "dyn_type": 2,
        "uid": 470310172,
        "card_url": "bilibili://following/detail/755402937023332386?cardType=2&rid=221621929",
        "reply": {
          "uri": "bilibili://following/detail/755402937023332386?cardType=2&rid=221621929",
          "params": [
            {
              "key": "comment_on",
              "value": "1"
            }
          ]
        }
      }
    }
  }
}
```

</details>

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
