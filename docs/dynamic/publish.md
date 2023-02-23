# 发布动态

## 为图片动态上传图片

> https://api.bilibili.com/x/dynamic/feed/draw/upload_bfs

*请求方式：POST*

认证方式：Cookie（SESSDATA）

注意：非日常类型像素宽高必须大于420

**正文参数 (multipart/form-data)：**

| 参数名   | 类型 | 内容                     | 必要性 | 备注                                                         |
| -------- | ---- | ------------------------ | ------ | ------------------------------------------------------------ |
| file_up  | file | 需要上传的图片文件       | 必要   | 格式仅支持jpg  png  gif                                      |
| category | str  | 图片类型                 | 必要   | daily：日常（动态）<br />draw：绘画（画友）<br />cos：摄影（COSPLAY） |
| biz      | str  |                          |        |                                                              |
| csrf     | str  | CSRF Token（位于cookie） | 必要   |                                                              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功 <br />-1：未添加图片<br />-2：参数错误<br />-3：图片尺寸过小<br />-4：账号未登录<br />-7：图片信息错误 |
| message | str  | 错误信息 | 默认为success                                                |
| data    | obj  | 信息本体 | 仅在正确时既`code=0`时为有效信息                             |

`data`对象：

| 字段         | 类型 | 内容           | 备注 |
| ------------ | ---- | -------------- | ---- |
| image_url | str  | 已上传图片url  |      |
| image_width  | num  | 已上传图片宽度 | 像素 |
| image_height | num  | 已上传图片高度 | 像素 |

**示例：**

上传了一张图片`test.png`类型为`日常`

```shell
curl 'https://api.bilibili.com/x/dynamic/feed/draw/upload_bfs' \
-F 'file_up=@test.png' \
-F 'category=daily'
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code":0,
    "message":"success",
    "data":{
     	"image_url":"http:\/\/i0.hdslb.com\/bfs\/album\/13f9523efe186a8066b2d72e80283cea2437eb62.png",
        "image_width":1225,
        "image_height":850
    }
}
```

</details>


## 创建投票

> https://api.vc.bilibili.com/vote_svr/v1/vote_svr/create_vote

*请求方式：POST*

认证方式：Cookie（SESSDATA）

注意: options最少两个,下标n从0开始

**正文参数 (multipart/form-data)：**

| 参数名                       | 类型 | 内容                     | 必要性 | 备注                                                     |
| ---------------------------- | ---- | ------------------------ | ------ | -------------------------------------------------------- |
| info[title]                  | str  | 投票标题                 | 必要   |                                                          |
| info[desc]                   | str  | 投票描述                 | 非必要 | 可为空                                                   |
| info[type]                   | num  | 投票类型                 | 必要   | 0:文字投票 1:图片投票                                    |
| info[choice_cnt]             | num  | 最多选几项               | 必要   |                                                          |
| info[duration]               | num  | 投票持续秒数             | 必要   | 常用:<br/>三天:259200<br/>七天:604800<br/>三十天:2592000 |
| info[options]\[ n ][desc]    | str  | 第n项选项文字内容        | 必要   |                                                          |
| info[options]\[ n ][img_url] | str  | 第n项选项投票图片        | 非必要 |                                                          |
| csrf                         | str  | CSRF Token（位于cookie） | 非必要 | 头次见非必要的csrf                                       |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                             |
| ------- | ---- | -------- | -------------------------------- |
| code    | num  | 返回值   | 0：成功 <br />5100001: 参数错误  |
| msg     | str  | 错误信息 | 成功为空                         |
| message | str  | 错误信息 | 跟上面那个一模一样               |
| data    | obj  | 信息本体 | 仅在正确时既`code=0`时为有效信息 |

`data`对象：

| 字段         | 类型 | 内容           | 备注 |
| ------------ | ---- | -------------- | ---- |
| vote_id | num | 投票id |      |
| \_gt\_ | num  | 0 |  |

**示例：**

创建一个标题为`是否自愿开学`持续七天的纯文本投票

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
<summary>查看响应示例：</summary>

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

*请求方式：POST*

认证方式：Cookie (SESSDATA)

**正文参数（multipart/form-data）：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| --- | --- | --- | --- | --- |
| dynamic_id | num | 0 | 必要 |  |
| type | num | 4 | 必要 |  |
| rid | num | 0 | 必要 |  |
| content | str | 动态内容 | 必要 |  |
| up_choose_comment | num | 0 | 非必要 |  |
| up_close_comment | num | 0 | 非必要 |  |
| extension | json | 位置信息 | 非必要 |  |
| at_uids | str | 动态中 at 到的用户的 uid | 非必要 | 使用逗号`,`分隔 |
| ctrl | array | 特殊格式控制 (如 at 别人时的蓝字体和链接) | 非必要 |  |
| csrf_token | str | CSRF Token (位于 cookie) | 非必要 |  |
| csrf | str | CSRF Token (位于 cookie) | 非必要 |  |

extension参数值:
```json
{
    "emoji_type": 1,
    "lbs_cfg": {
        "title": "**市",
        "poi": "156330200",
        "show_title": "**市",
        "type": 1,
        "address": "**市",
        "location": {
            "lng":显示的经度数值,
            "lat":显示的纬度数值
        },
        "distance": 0
    },
    "flag_cfg": {},
    "from_cfg": {
        "location": {
            "lat":用户实际纬度数值,
            "lng":用户实际经度数值
        }
    }
}
```

ctrl单个对象(注意用的时候是数组出现):
| 参数名 | 类型 | 内容 |
| --- | --- | --- |
| location | num | 从全文第几个字开始变蓝 |
| type | num | 1 (可能1代表链接到用户uid) |
| length | num | 这一段变蓝多少字 |
| data | str | 链接目标(被at人的uid) |

**json回复：**

根对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 返回值 | 0：成功 |
| message | str | 错误信息 | 成功为空 |
| data | obj | 数据本体 |  |

`data`对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| result | num | 0 |  |
| errmsg | str | 像是服务器日志一样的东西 |  |
| dynamic_id | num | 动态 id |  |
| create_result | num | 1 |  |
| dynamic_id_str | str | 动态 id | 字符串格式 |
| \_gt_ | num | 0 |  |

<details>
<summary>查看示例(纯文本)</summary>

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
<summary>查看示例(at两个人)</summary>

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

*请求方式：POST*

认证方式：Cookie (SESSDATA)

**URL参数**

| 参数名 | 类型 | 内容                     | 必要性 | 备注 |
| ------ | ---- | ------------------------ | ------ | ---- |
| csrf   | str  | CSRF Token（位于cookie） | 必要   |      |

**正文参数（application/json）：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| --- | --- | --- | --- | --- |
| dyn_req | obj | 请求本体 | 必要 |  |

`dyn_req`对象:

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| --- | --- | --- | --- | --- |
| attach_card | obj | 特殊卡片 | 非必要 | 如直播预约等 |
| content | obj | 动态内容 | 必要 | |
| meta | obj | 元信息 | 非必要 | 大概是来源信息 |
| scene | num | 动态类型? | 必要 | 纯文本: 1<br/>带图: 2 |
| pics | array | 携带图片 | 非必要 | 最多九个 |
| topic | obj | 话题 | 非必要 | |
| option | obj | 互动设置 | 非必要 | 没有此项时默认开启评论区 |
| upload_id | str | 客户端生成的 | 非必要 | 内容为`发送人mid`+`当前秒级时间戳`+`四位随机整数`,中间用`_`隔开 |

`dyn_req`对象的`meta`对象,大概是来源信息,很简单就不详细列表了:

```json
{
    "app_meta": {
        "from": "create.dynamic.web", 
        "mobi_app": "web"
    }
}
```

`dyn_req`对象的`content`对象:

| 参数名   | 类型  | 内容                 | 必要性 | 备注 |
| -------- | ----- | -------------------- | ------ | ---- |
| contents | array | 动态组件对象有序数组 | 必要   |      |

`contents`数组内每一个动态组件对象:

```json
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

`dyn_req`对象的`topic`对象

| 参数名        | 类型 | 内容    | 必要性 | 备注                       |
| ------------- | ---- | ------- | ------ | -------------------------- |
| from_source   | str  | 来源id? | 必要   | 网页版直接选为dyn.web.list |
| from_topic_id | num  | 0       | 必要   |                            |
| id            | num  | 话题id  | 必要   |                            |
| name          | str  | 话题名  | 必要   |                            |

`dyn_req`对象的`pics`数组的每一项对象:

| 参数名     | 类型  | 内容             | 必要性 | 备注                                                         |
| ---------- | ----- | ---------------- | ------ | ------------------------------------------------------------ |
| img_height | num   | 图片高           | 非必要 | 这个东西会直接原封不动传到前端,比如你都写0在网页上就看不见了,但是还会加载 |
| img_width  | num   | 图片宽           | 非必要 | 同上                                                         |
| img_size   | float | 图片文件大小(KB) | 非必要 |                                                              |
| img_src    | str   | 图片bfs链接      | 必要   |                                                              |

`dyn_req`对象的`option`对象:

| 参数名            | 类型 | 内容         | 必要性 | 备注            |
| ----------------- | ---- | ------------ | ------ | --------------- |
| up_choose_comment | num  | 精选评论flag | 非必要 | 1: 开启         |
| close_comment     | num  | 关闭评论flag | 非必要 | 同上,与上二选一 |

`dyn_req`对象的`topic`对象:

| 参数名        | 类型 | 内容         | 必要性 | 备注     |
| ------------- | ---- | ------------ | ------ | -------- |
| from_source   | str  | dyn.web.list | 非必要 | 作用不明 |
| from_topic_id | num  | 0            | 非必要 | 作用不明 |
| id            | num  | 话题id       | 必要   |          |
| name          | str  | 话题名       | 非必要 |          |

**json回复：**

根对象：

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 返回值 | 0：成功 |
| message | str | 错误信息 | 成功为空 |
| data | obj | 数据本体 |  |

`data`对象:

当Cookie中含有任意的`buvid3`时,比较干净简洁:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| result | num | 0 |  |
| message | str | 错误信息 |  |
| dyn_id | num | 动态 id |  |
| dyn_id_str | str | 动态 id | 字符串格式 |
| dyn_type | num | 动态类型 | 不带图片: 4<br/>带图片: 2<br/>其他请参考 get_dynamic_detail.md |
| \_gt_ | num | 0 |  |

**警告:下面的内容又乱又杂,而且绝大多数情况用不到,我建议大家用这个接口的时候随便带一个buvid3的cookie屏蔽掉它们算了.**

当Cookie中不含有`buvid3`时,较上述字段多出一个`fake_card`对象,大概是移动端用的卡片:

| 字段      | 类型 | 内容 | 备注         |
| --------- | ---- | ---- | ------------ |
| fake_card | obj  | 0    | 又多又乱又杂 |

`fake_card`对象:

| 字段      | 类型  | 内容         | 备注                                                         |
| --------- | ----- | ------------ | ------------------------------------------------------------ |
| card_type | num   | 卡片类型     | 不带图片: 4<br/>带图片: 2<br/>其他请参考 [获取特定动态卡片信息](get_dynamic_detail.md) |
| modules   | array | 卡片组件列表 |                                                              |
| extend    | obj   | 其他杂项信息 |                                                              |

`fake_card`对象的`modules`数组中每一项对象:

| 字段        | 类型 | 内容     | 备注                                         |
| ----------- | ---- | -------- | -------------------------------------------- |
| module_type | num  | 组件类型 | 1: 作者信息<br/>3: 动态内容<br/>其他有待发现 |
| ModuleItem  | obj  | 卡片组件 |                                              |

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
| mid              | num  | 发送者mid                        |                                                  |
| ptime_label_text | str  | 发送时间(人类可读形式)肯定是刚刚 |                                                  |
| author           | obj  | 作者详细信息                     | 请参考[用户基本信息](../user/info.md),不再赘述.. |

  `ModuleItem`内`module_desc`:

| 字段 | 类型  | 内容           | 备注 |
| ---- | ----- | -------------- | ---- |
| desc | array | 动态组件列表   |      |
| text | str   | 动态纯文本形式 |      |

`module_desc`的`desc`数组:

| 项   | 类型 | 备注                |
| ---- | ---- | ------------------- |
| 0    | obj  | 第0个动态组件       |
| n    | obj  | 第n+1个动态组件组件 |
| ...  | obj  | ...                 |

`desc`数组的每一项:

| 字段 | 类型 | 内容                                             | 备注                          |
| ---- | ---- | ------------------------------------------------ | ----------------------------- |
| text | str  | 该组件对外显示的纯文本                           | 对应请求时该组件的`raw_text`  |
| type | num  | 组件类型                                         | 对应请求时该组件的`type`      |
| rid  | str  | 组件内容的id,例如@人的mid                        | 根据需要出现,比如纯文本就没有 |
| uri  | str  | b站自定义`bilibili://`协议链接,用于@人点击跳转等 | 根据需要出现,比如纯文本就没有 |

  `ModuleItem`内`module_dynamic`:

| 字段       | 类型 | 内容               | 备注                 |
| ---------- | ---- | ------------------ | -------------------- |
| type       | num  | 不知道是什么的类型 | 5: 图片<br/>其他未知 |
| ModuleItem | obj  | 组件?              | 怎么还有套娃的?      |

当`module_dynamic`的`type`字段为`5`时:

`module_dynamic`的`ModuleItem`有唯一key`dyn_draw`:

| 字段  | 类型  | 内容                             | 备注                                             |
| ----- | ----- | -------------------------------- | ------------------------------------------------ |
| items | array | 图片数组                         | 与请求部分`dyn_req.pics`一致                     |
| id    | num   | 这条图片动态所对应的相簿`doc_id` | 可以参考本文档的[相簿基本信息](../album/info.md) |

`fake_card`的`extend`对象:

| 字段          | 类型  | 内容                                           | 备注                                     |
| ------------- | ----- | ---------------------------------------------- | ---------------------------------------- |
| dyn_id_str    | str   | 动态id字符串形式                               |                                          |
| business_id   | str   | 未知                                           | 根据情况出现                             |
| orif_img_url  | str   | 封面图url(如果有)                              |                                          |
| share_type    | str   | 一般为3                                        | 未知                                     |
| share_scene   | str   | 一般为dynamic                                  | 未知                                     |
| is_fast_share | bool  | 一般为true                                     | 未知                                     |
| dyn_type      | num   | 动态类型                                       | 不带图片: 4<br/>带图片: 2<br/>其他待探索 |
| uid           | num   | 发送者mid                                      |                                          |
| card_url      | str   | b站自定义`bilibili://`协议链接,指向该条动态    |                                          |
| desc          | array | 动态组件列表,重复了一遍`module_desc`的desc数组 |                                          |
| reply         | obj   | 评论区相关                                     |                                          |

`extend`的`reply`对象:

| 字段   | 类型  | 内容                                              | 备注 |
| ------ | ----- | ------------------------------------------------- | ---- |
| uri    | str   | b站自定义`bilibili://`协议链接,指向该条动态评论区 |      |
| params | array | 未知                                              |      |

<details>
<summary>查看示例(不带`buvid3`)</summary>

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
<summary>查看示例(带`buvid3`)</summary>

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

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数 (application/x-www-form-urlencoded)：**

| 参数名   | 类型 | 内容                     | 必要性 | 备注 |
| -------- | ---- | ------------------------ | ------ | ---- |
| draft_id | file | 定时动态(草稿)id         | 必要   |      |
| csrf     | str  | CSRF Token（位于cookie） | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注         |
| ------- | ---- | -------- | ------------ |
| code    | num  | 返回值   | 0：成功      |
| data    | obj  | 信息本体 | 正常为空对象 |
| message | str  | 错误消息 | 正常为"0"    |
| ttl     | num  | 1        | 不明         |

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
    "code":0,
    "message":"0",
    "ttl":1,
    "data":{}
}
```

</details>

