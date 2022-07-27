# 发布动态

+ [上传图片](#为图片动态（相簿）上传图片)
+ [发表纯文本动态](#发表纯文本动态)


## 为图片动态（相簿）上传图片

> https://api.vc.bilibili.com/api/v1/drawImage/upload

*请求方式：POST*

认证方式：Cookie（SESSDATA）

~~这是图床？（滑稽保命）~~

注意：非日常类型像素宽高必须大于420

**正文参数（multipart/form-data）：**

| 参数名   | 类型 | 内容               | 必要性 | 备注                                                         |
| -------- | ---- | ------------------ | ------ | ------------------------------------------------------------ |
| file_up  | file | 需要上传的图片文件 | 必要   | 格式仅支持jpg  png  gif                                      |
| category | str  | 图片类型           | 必要   | daily：日常（动态）<br />draw：绘画（画友）<br />cos：摄影（COSPLAY） |

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

示例：

上传了一张图片`test.png`类型为`日常`

```shell
curl 'https://api.vc.bilibili.com/api/v1/drawImage/upload' \
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


## 发表纯文本动态

> https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/create

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（multipart/form-data）：**

| 参数名 | 类型 | 内容 |
| --- | --- | --- |
| dynamic_id | num | 0 |
| type | num | 4 |
| rid | num | 0 |
| content | str | 动态内容 |
| up_choose_comment | num | 0 |
| up_close_comment | num | 0 |
| extension | obj | 位置信息 |
| at_uids | str | 动态中at到的用户的uid,逗号分隔 |
| ctrl | obj[] | 特殊格式控制(如at别人时的蓝字体和链接) |
| csrf_token | str | csrf |
| csrf | str | csrf(好像有上边那个就够了 这个不用) |

extension参数值:
```json
{"emoji_type":1,"lbs_cfg":{"title":"**市","poi":"156330200","show_title":"**市","type":1,"address":"**市","location":{"lng":显示的经度数值,"lat":显示的纬度数值},"distance":0},"flag_cfg":{},"from_cfg":{"location":{"lat":用户实际纬度数值,"lng":用户实际经度数值}}}
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

| 字段 | 类型 | 内容 |
| --- | --- | --- |
| code | num | 0:成功 |
| msg | str | 成功为空文本 |
| message | str | 和msg一样 |
| data | obj | 详细信息 |

data对象:

| 字段 | 类型 | 内容 |
| --- | --- | --- |
| result | num | 0 |
| errmsg | str | 像是服务器日志一样的东西 |
| dynamic_id | num | 发布的新动态ID |
| create_result | num | 1 |
| dynamic_id_str | str | 文本格式的dynamic_id |
| \_gt_ | num | 0 |

<details>
<summary>查看示例(纯文本)</summary>

```bash
curl 'https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/create' \
    -X POST \
    -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0' \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -H 'Referer: https://t.bilibili.com/' \
    -H 'Cookie: SESSDATA=******; bili_jct=de2731532b4ab96bc8536da948932668;' \
    --data-raw 'dynamic_id=0&type=4&rid=0&content=Hello%20Bug~&up_choose_comment=0&up_close_comment=0&extension=%7B%22emoji_type%22%3A1%2C%22from%22%3A%7B%22emoji_type%22%3A1%7D%2C%22flag_cfg%22%3A%7B%7D%7D&at_uids=&ctrl=%5B%5D&csrf_token=de2731532b4ab96bc8536da948932668&csrf=de2731532b4ab96bc8536da948932668'
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
    -X POST -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0' \
    -H 'Accept: application/json, text/plain, */*' \
    -H 'Referer: https://t.bilibili.com/' \
    -H 'Cookie: SESSDATA=******; bili_jct=de2731532b4ab96bc8536da948932668' \
    --data-raw 'dynamic_id=0&type=4&rid=0&content=%5B%E7%83%AD%E8%AF%8D%E7%B3%BB%E5%88%97_%E7%A5%9E%E4%BB%99UP%5D%40%E6%9A%AE%E5%85%89%E5%B0%8F%E7%8C%BFwzt%20%40%E7%A4%BE%E4%BC%9A%E6%98%93%E5%A7%90QwQ%20&up_choose_comment=0&up_close_comment=0&extension=%7B%22emoji_type%22%3A1%2C%22from%22%3A%7B%22emoji_type%22%3A1%7D%2C%22flag_cfg%22%3A%7B%7D%7D&at_uids=15858903%2C293793435&ctrl=%5B%7B%22location%22%3A11%2C%22type%22%3A1%2C%22length%22%3A9%2C%22data%22%3A%2215858903%22%7D%2C%7B%22location%22%3A20%2C%22type%22%3A1%2C%22length%22%3A9%2C%22data%22%3A%22293793435%22%7D%5D&csrf_token=de2731532b4ab96bc8536da948932668&csrf=de2731532b4ab96bc8536da948932668'
```

</details>
