# 发布动态

+ [上传图片](#为图片动态（相簿）上传图片)
+ [发表纯文本动态](#发表纯文本动态)


## 为图片动态（相簿）上传图片

> http://api.vc.bilibili.com/api/v1/drawImage/upload

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
curl 'http://api.vc.bilibili.com/api/v1/drawImage/upload' \
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

> http://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/create

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
| extension | json | 常量见下,未知 |
| at_uids | |
| ctrl | |
| csrf_token | str | csrf |
| csrf | str | csrf(好像有上边那个就够了 这个不用) |

extension参数值:
```json
{"emoji_type":1,"from":{"emoji_type":1},"flag_cfg":{}}
```

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
<summary>查看示例</summary>

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