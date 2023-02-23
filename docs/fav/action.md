# 收藏夹操作

## 管理收藏夹

### 新建收藏夹

> https://api.bilibili.com/x/v3/fav/folder/add

*请求方式：POST*

认证方式：APP或Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名  | 类型 | 内容                     | 必要性         | 备注                                 |
| ------- | ---- | ------------------------ | -------------- | ------------------------------------ |
| title   | str  | 收藏夹标题               | 必要           |                                      |
| intro   | str  | 收藏夹简介               | 非必要         | 默认为空                             |
| privacy | num  | 是否公开                 | 非必要         | 默认为公开<br />0：公开<br />1：私密 |
| cover   | str  | 封面图url                | 非必要         | 封面会被审核                         |
| csrf    | str  | CSRF Token（位于cookie） | Cookie方式必要 |                                      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注    |
| ------- | ---- | -------- | ------- |
| code    | num  | 返回值   | 0：成功<br />-102：账号被封停 |
| message | str  | 错误信息 | 默认为0 |
| ttl     | num  | 1        |         |
| data    | obj  | 信息本体 |         |

`data`对象：

略....

详见[获取收藏夹元数据](info.md#获取收藏夹元数据)中的`data`对象

**示例：**

创建一个叫`test`,简介是`2333`,封面`https://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png`,的公开收藏夹:

```shell
curl 'https://api.bilibili.com/x/v3/fav/folder/add' \
--data-urlencode 'title=test' \
--data-urlencode 'intro=2333' \
--data-urlencode 'privacy=0' \
--data-urlencode 'cover=https://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png' \
--data-urlencode 'csrf=xxxx' \
-b 'SESSDATA=xxxx'
```

<details>
<summary>查看响应示例：</summary>

```json  
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "id": 1182306172,
        "fid": 11823061,
        "mid": 470310172,
        "attr": 6,
        "title": "test",
        "cover": "https://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png",
        "upper": {
            "mid": 0,
            "name": "",
            "face": "",
            "followed": false,
            "vip_type": 0,
            "vip_statue": 0
        },
        "cover_type": 0,
        "cnt_info": {
            "collect": 0,
            "play": 0,
            "thumb_up": 0,
            "share": 0
        },
        "type": 0,
        "intro": "2333",
        "ctime": 0,
        "mtime": 0,
        "state": 0,
        "fav_state": 0,
        "like_state": 0,
        "media_count": 0
    }
}
```

</details>

### 修改收藏夹

> https://api.bilibili.com/x/v3/fav/folder/edit

*请求方式：POST*

认证方式：APP或Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名   | 类型 | 内容                     | 必要性         | 备注                                       |
| -------- | ---- | ------------------------ | -------------- | ------------------------------------------ |
| media_id | num  | 目标收藏夹mdid           | 必要           |                                            |
| title    | str  | 修改收藏夹标题           | 必要           |                                            |
| intro    | str  | 修改收藏夹简介           | 非必要         |                                            |
| privacy  | num  | 是否公开                 | 非必要         | 默认为公开<br /><br />0：公开<br />1：私密 |
| cover    | str  | 封面图url                | 非必要         | 封面会被审核                               |
| csrf     | str  | CSRF Token（位于cookie） | Cookie方式必要 |                                            |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注    |
| ------- | ---- | -------- | ------- |
| code    | num  | 返回值   | 0：成功<br />-102：账号被封停 |
| message | str  | 错误信息 | 默认为0 |
| ttl     | num  | 1        |         |
| data    | obj  | 信息本体 |         |

`data`对象：

略....

详见[获取收藏夹元数据](info.md#获取收藏夹元数据)中的`data`对象

**示例：**

修改id为`1182306172`的名字为`test`,简介为`2333`,封面为`https://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png`,公开收藏夹:

```shell
curl 'https://api.bilibili.com/x/v3/fav/folder/edit' \
--data-urlencode 'media_id=1182306172' \
--data-urlencode 'title=test' \
--data-urlencode 'intro=2333' \
--data-urlencode 'privacy=0' \
--data-urlencode 'cover=https://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png' \
--data-urlencode 'csrf=xxxx' \
-b 'SESSDATA=xxxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "id": 1182306172,
        "fid": 11823061,
        "mid": 470310172,
        "attr": 6,
        "title": "test",
        "cover": "https://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png",
        "upper": {
            "mid": 0,
            "name": "",
            "face": "",
            "followed": false,
            "vip_type": 0,
            "vip_statue": 0
        },
        "cover_type": 0,
        "cnt_info": {
            "collect": 0,
            "play": 0,
            "thumb_up": 0,
            "share": 0
        },
        "type": 0,
        "intro": "2333",
        "ctime": 0,
        "mtime": 0,
        "state": 0,
        "fav_state": 0,
        "like_state": 0,
        "media_count": 0
    }
}
```

</details>

### 删除收藏夹

> https://api.bilibili.com/x/v3/fav/folder/del

*请求方式：POST*

认证方式：APP或Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名    | 类型 | 内容                     | 必要性         | 备注                |
| --------- | ---- | ------------------------ | -------------- | ------------------- |
| media_ids | nums | 目标收藏夹mdid列表       | 必要           | 每个成员间用`,`分隔 |
| csrf      | str  | CSRF Token（位于cookie） | Cookie方式必要 |                     |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注    |
| ------- | ---- | -------- | ------- |
| code    | num  | 返回值   | 0：成功 |
| message | str  | 错误信息 | 成功为0 |
| ttl     | num  | 1        |         |
| data    | num  | 信息本体 | 成功为0 |

**示例：**

删除id为`1182306172`的收藏夹:

```shell
curl 'https://api.bilibili.com/x/v3/fav/folder/del' \
--data-urlencode 'media_ids=1182306172' \
--data-urlencode 'csrf=xxxx' \
-b 'SESSDATA=xxxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code":0,
    "message":"0",
    "ttl":1,
    "data":0
}
```

</details>

## 管理收藏内容

### 批量复制内容

> https://api.bilibili.com/x/v3/fav/resource/copy

*请求方式：POST*

认证方式：APP或Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名       | 类型 | 内容                     | 必要性         | 备注                                                         |
| ------------ | ---- | ------------------------ | -------------- | ------------------------------------------------------------ |
| src_media_id | num  | 源收藏夹id               | 必要           |                                                              |
| tar_media_id | num  | 目标收藏夹id             | 必要           |                                                              |
| mid          | num  | 当前用户mid              | 必要           |                                                              |
| resources    | strs | 目标内容id列表           | 必要           | 格式：{内容id}:{内容类型}<br />每个成员间用`,`分隔<br />类型：<br />2：视频稿件<br />12：音频<br />21：视频合集<br />内容id：<br />视频稿件：视频稿件avid<br />音频：音频auid<br />视频合集：视频合集id |
| platform     | str  | 平台标识                 | 非必要         | 可为web                                                      |
| csrf         | str  | CSRF Token（位于cookie） | Cookie方式必要 |                                                              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />11010：您访问的内容不存在 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 信息本体 | 成功为0                                                      |

**示例：**

将id为`1288061499`的收藏夹中视频稿件`av21822819` `av21918689` `av22288065`复制到id为`1178751999`的收藏夹中

```shell
curl 'https://api.bilibili.com/x/v3/fav/resource/copy' \
--data-urlencode 'src_media_id=1288061499' \
--data-urlencode 'tar_media_id=1178751999' \
--data-urlencode 'mid=233333' \
--data-urlencode 'resources=21822819:2,21918689:2,22288065:2' \
--data-urlencode 'platform=web' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>


```json
{
    "code":0,
    "message":"0",
    "ttl":1,
    "data":0
}
```

</details>

### 批量移动内容

> https://api.bilibili.com/x/v3/fav/resource/move

*请求方式：POST*

认证方式：APP或Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名       | 类型 | 内容                     | 必要性         | 备注                                                         |
| ------------ | ---- | ------------------------ | -------------- | ------------------------------------------------------------ |
| src_media_id | num  | 源收藏夹id               | 必要           |                                                              |
| tar_media_id | num  | 目标收藏夹id             | 必要           |                                                              |
| mid          | num  | 当前用户mid              | 必要           |                                                              |
| resources    | strs | 目标内容id列表           | 必要           | 格式：{内容id}:{内容类型}<br />每个成员间用`,`分隔<br />类型：<br />2：视频稿件<br />12：音频<br />21：视频合集<br />内容id：<br />视频稿件：视频稿件avid<br />音频：音频auid<br />视频合集：视频合集id |
| platform     | str  | 平台标识                 | 非必要         | 可为web                                                      |
| csrf         | str  | CSRF Token（位于cookie） | Cookie方式必要 |                                                              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />11010：您访问的内容不存在 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 信息本体 | 成功为0                                                      |

**示例：**

将id为`1288061499`的收藏夹中视频稿件`av21822819` `av21918689` `av22288065`移动到id为`1178751999`的收藏夹中

```shell
curl 'https://api.bilibili.com/x/v3/fav/resource/move' \
--data-urlencode 'src_media_id=1288061499' \
--data-urlencode 'tar_media_id=1178751999' \
--data-urlencode 'mid=233333' \
--data-urlencode 'resources=21822819:2,21918689:2,22288065:2' \
--data-urlencode 'platform=web' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>


```json
{
    "code":0,
    "message":"0",
    "ttl":1,
    "data":0
}
```

</details>

### 批量删除内容

> https://api.bilibili.com/x/v3/fav/resource/batch-del

*请求方式：POST*

认证方式：APP或Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名    | 类型           | 内容                     | 必要性                                                       | 备注    |
| --------- | -------------- | ------------------------ | ------------------------------------------------------------ | ------- |
| resources | 目标内容id列表 | 必要                     | 格式：{内容id}:{内容类型}<br />每个成员间用`,`分隔<br />类型：<br />2：视频稿件<br />12：音频<br />21：视频合集<br />内容id：<br />视频稿件：视频稿件avid<br />音频：音频auid<br />视频合集：视频合集id |         |
| media_id  | num            | 目标收藏夹id             | 必要                                                         |         |
| platform  | str            | 平台标识                 | 非必要                                                       | 可为web |
| csrf      | str            | CSRF Token（位于cookie） | Cookie方式必要                                               |         |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />11010：您访问的内容不存在 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 信息本体 | 成功为0                                                      |

**示例：**

将id为`1178751999`的收藏夹中视频稿件`av21822819` `av21918689` `av22288065`取消收藏

```shell
curl 'https://api.bilibili.com/x/v3/fav/resource/batch-del' \
--data-urlencode 'resources=21822819:2,21918689:2,22288065:2' \
--data-urlencode 'media_id=1178751999' \
--data-urlencode 'platform=web' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>


```json
{
    "code":0,
    "message":"0",
    "ttl":1,
    "data":0
}
```

</details>

### 清空所有失效内容

> https://api.bilibili.com/x/v3/fav/resource/clean

*请求方式：POST*

认证方式：APP或Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名   | 类型 | 内容                     | 必要性         | 备注 |
| -------- | ---- | ------------------------ | -------------- | ---- |
| media_id | num  | 目标收藏夹id             | 必要           |      |
| csrf     | str  | CSRF Token（位于cookie） | Cookie方式必要 |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注    |
| ------- | ---- | -------- | ------- |
| code    | num  | 返回值   | 0：成功 |
| message | str  | 错误信息 | 默认为0 |
| ttl     | num  | 1        |         |
| data    | obj  | 信息本体 | 成功为0 |

**示例：**

清理id为`1161340172`的收藏夹

```shell
curl 'https://api.bilibili.com/x/v3/fav/resource/clean' \
--data-urlencode 'media_id=1161340172' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>


```json
{
    "code":0,
    "message":"0",
    "ttl":1,
    "data":0
}
```

</details>
