# 发布动态

## 为动态（画友）上传图片

> http://api.vc.bilibili.com/api/v1/drawImage/upload

*方式：POST*

需要登录(SESSDATA)

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
| image_height | str  | 已上传图片url  |      |
| image_width  | num  | 已上传图片宽度 | 像素 |
| image_height | num  | 已上传图片高度 | 像素 |

示例：

上传了一张图片`test.png`类型为`日常`

curl -b "SESSDATA=xxx" -F "file_up=@test.png" -F "category=daily" "http://api.vc.bilibili.com/api/v1/drawImage/upload"

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

