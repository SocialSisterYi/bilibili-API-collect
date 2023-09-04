# 获取当前话全部图片地址

>  https://manga.bilibili.com/twirp/comic.v1.Comic/GetImageIndex

*请求方式：POST*

认证方式：Cookie（SESSDATA）/ APP

**URL参数：**

| 参数名     | 类型 | 内容                     | 必要性         | 备注                                                         |
| ---------- | ---- | ------------------------ | -------------- | ------------------------------------------------------------ |
| access_key | str  |     APP登录凭证       | 必要    |   使用APP鉴权方式时必填                                                           |
| appkey | str  |     cc8617fd6961e070       | 非必要    |                                                              |
| mobi_app | str  |     android_comic       | 非必要    |                                                              |
| version | str  |     4.21.0 | 非必要    |                                                              |
| build | str  |   36421000 | 非必要    |                                                              |
| channel | str  |     bilicomic       | 非必要    |                                                              |
| platform | str  |     android       | 非必要    |                                                              |
| device | str  |     android       | 非必要    |  |
| buvid | str  | XY118701XXXXXXXXX104911DXXXXXCAEXXXXE | 非必要    | 长度为37 |
| machine | str  |           | 非必要    | 手机品牌+型号 |
| is_teenager | num  |     0       | 非必要    |                                                              |
| no_recommend | num  |     0       | 非必要    |                                                              |
| ts | num  |    秒级时间戳       | 非必要    |

**正文参数（ application/json ）：**

| 参数名   | 类型 | 内容                     | 必要性 | 备注                                              |
| -------- | ---- | ------------------------ | ------ | ------------------------------------------------- |
| epId（ep_id） | num  |  当前话的id   |  必要  |                                 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num   | 返回值   | 0：成功 |
| msg | str  | 错误信息 |                                                       |
| data | obj  |  |      |

`data` 对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| path | str | .index 文件路径 |  |
| images | array  | 本话图片信息 |  |
| last_modified | str | 本话信息最后修改时间 |  |
| host | str | `https://manga.hdslb.com` | |
| video | obj | | |

`images` 数组中的对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| path | str | 图片的路径 | 不包含host |
|  x   | num  | 图片宽度 | 单位：像素px |
|  y   | num  | 图片高度 | 单位：像素px |
| video_path | str |    |  |
| video_size | str |    |  |

`video` 对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| svid    | str  |    |  |
| filename    | str |    |  |
| route    | str |    |  |
| resource    | array |    |  |
| raw_width    | str |    |  |
| raw_height    | str |    |  |
| raw_rotate    | str |    |  |
| img_urls    | array |    |  |
| bin_url    | str |    |  |
| img_x_len    | num  |    |  |
| img_x_size    | num  |    |  |
| img_y_len    | num  |    |  |
| img_y_size    | num  |    |  |


**示例：**

```bash
curl -L -X POST 'https://manga.bilibili.com/twirp/comic.v1.Comic/GetImageIndex' \
-H 'Cookie: SESSDATA=xxx;' \
-H 'Content-Type: application/json' \
--data-raw '{
    "ep_id": 321912
}'
```

<details>
<summary>查看响应示例：</summary>


```json
{
  "code": 0,
  "msg": "",
  "data": {
    "path": "/bfs/manga/26564/321912/data.index?token=80eab62fef85c1c134a6399f817a938f&ts=63404145",
    "images": [
      {
        "path": "/bfs/manga/11e404e602fa9f709bfb89d692ac56d2e17f974d.jpg",
        "x": 1600,
        "y": 2268,
        "video_path": "",
        "video_size": "0"
      },
      {
        "path": "/bfs/manga/bf1c48540b68f473b429317d8f6fa8cdb6eed3a5.jpg",
        "x": 1600,
        "y": 2268,
        "video_path": "",
        "video_size": "0"
      },
      {
        "path": "/bfs/manga/a46cfe90cfb49c67a4dbfc0002e5bc3d87d02963.jpg",
        "x": 1600,
        "y": 2268,
        "video_path": "",
        "video_size": "0"
      }
    ],
    "last_modified": "2019-05-13 21:15:53",
    "host": "https://manga.hdslb.com",
    "video": {
      "svid": "",
      "filename": "",
      "route": "",
      "resource": [],
      "raw_width": "0",
      "raw_height": "0",
      "raw_rotate": "0",
      "img_urls": [],
      "bin_url": "",
      "img_x_len": 10,
      "img_x_size": 160,
      "img_y_len": 10,
      "img_y_size": 90
    }
  }
}
```

</details>

# 获取某一图片的token

>  https://manga.bilibili.com/twirp/comic.v1.Comic/ImageToken

*请求方式：POST*

认证方式：Cookie（SESSDATA）/ APP

**URL参数：**

| 参数名       | 类型 | 内容                                  | 必要性 | 备注                  |
| ------------ | ---- | ------------------------------------- | ------ | --------------------- |
| access_key   | str  | APP登录凭证                           | 必要   | 使用APP鉴权方式时必填 |
| appkey       | str  | cc8617fd6961e070                      | 非必要 |                       |
| mobi_app     | str  | android_comic                         | 非必要 |                       |
| version      | str  | 4.21.0                                | 非必要 |                       |
| build        | str  | 36421000                              | 非必要 |                       |
| channel      | str  | bilicomic                             | 非必要 |                       |
| platform     | str  | android                               | 非必要 |                       |
| device       | str  | android                               | 非必要 |                       |
| buvid        | str  | XY118701XXXXXXXXX104911DXXXXXCAEXXXXE | 非必要 | 长度为37              |
| machine      | str  | samsung+SM-G9730                      | 非必要 | 手机品牌+型号         |
| is_teenager  | num  | 0                                     | 非必要 |                       |
| no_recommend | num  | 0                                     | 非必要 |                       |
| ts           | num  | 秒级时间戳                            | 非必要 |                       |

**正文参数（ application/json ）：**

| 参数名 | 类型 | 内容                | 必要性 | 备注                                                         |
| ------ | ---- | ------------------- | ------ | ------------------------------------------------------------ |
| urls   | str  | 请求token的图片地址 | 必要   | `[\"https://i0.hdslb.com{path}\"]` <br />{path}代表图片的相对网站路径，支持jpg和webp |

**json回复：**

根对象：

| 字段 | 类型  | 内容     | 备注    |
| ---- | ----- | -------- | ------- |
| code | num   | 返回值   | 0：成功 |
| msg  | str   | 错误信息 |         |
| data | array |          |         |

`data` 数组中的对象：

| 字段  | 类型 | 内容                | 备注                                 |
| ----- | ---- | ------------------- | ------------------------------------ |
| url   | str  | 图片下载的地址      | 此时网址开头 https://manga.hdslb.com |
| token | str  | 图片下载需要的token |                                      |

**示例：**

```bash
curl -L -X POST 'https://manga.bilibili.com/twirp/comic.v1.Comic/ImageToken' \
-H 'Cookie: SESSDATA=xxx;' \
-H 'Content-Type: application/json' \
--data-raw '{
    "urls": "[\"https://i0.hdslb.com/bfs/manga/11e404e602fa9f709bfb89d692ac56d2e17f974d.jpg\"]"
}'
```

<details>
<summary>查看响应示例：</summary>



```json
{
  "code": 0,
  "msg": "",
  "data": [
    {
      "url": "https://manga.hdslb.com/bfs/manga/11e404e602fa9f709bfb89d692ac56d2e17f974d.jpg",
      "token": "36931815abb35857627a22c347dc1c86&ts=634045c2"
    }
  ]
}
```

</details>

# 下载图片

*请求方式：GET*

在上一步获取token的基础上，构建如下的url

例如获取到此token

```
{
  "code": 0,
  "msg": "",
  "data": [
    {
      "url": "https://manga.hdslb.com/bfs/manga/11e404e602fa9f709bfb89d692ac56d2e17f974d.jpg",
      "token": "36931815abb35857627a22c347dc1c86&ts=634045c2"
    }
  ]
}
```

则访问以下网址即可，注意需要添加`?token=`。此网址有效期较短

```
https://manga.hdslb.com/bfs/manga/11e404e602fa9f709bfb89d692ac56d2e17f974d.jpg?token=36931815abb35857627a22c347dc1c86&ts=634045c2
```

**注**：若不加取图 Token 直接访问 `https://(i0|i1).hdslb.com/bfs/(manga|new_dyn|archive)/11e404e602fa9f709bfb89d692ac56d2e17f974d.jpg`均无法获取
