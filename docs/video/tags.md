# 视频TAG

## 获取视频TAG信息（新）

> <https://api.bilibili.com/x/web-interface/view/detail/tag>

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名 | 类型 | 内容     | 必要性       | 备注                             |
| ------ | ---- | -------- | ------------ | -------------------------------- |
| aid    | num  | 稿件avid | 必要（可选） | avid与bvid任选一个               |
| bvid   | str  | 稿件bvid | 必要（可选） | avid与bvid任选一个               |
| cid    | num  | 分P cid  | 非必要       | 提供此参数可返回对应分P的BGM信息 |

**json回复：**

根对象：

| 字段    | 类型  | 内容     | 备注                        |
| ------- | ----- | -------- | --------------------------- |
| code    | num   | 返回值   | 0：成功<br />-400：请求错误 |
| message | str   | 错误信息 | 默认为0                     |
| ttl     | num   | 1        |                             |
| data    | array | TAG列表  | 无TAG为空                   |

`data`数组：

| 项   | 类型 | 内容           | 备注 |
| ---- | ---- | -------------- | ---- |
| 0    | obj  | 第1个TAG       |      |
| n    | obj  | 第（n+1）个TAG |      |
| ……   | obj  | ……             | ……   |

`data`数组中的对象：

| 字段     | 类型 | 内容       | 备注                                                         |
| -------- | ---- | ---------- | ------------------------------------------------------------ |
| tag_id   | num  | tag_id     | 当`tag_type`不为`bgm`时有效                                  |
| tag_name | str  | TAG名称    |                                                              |
| music_id | str  | 背景音乐id | 当`tag_type`为`bgm`时有效，以`MA`开头                        |
| tag_type | str  | TAG类型    | `old_channel`：普通标签<br />`topic`：话题<br />`bgm`：背景音乐 |
| jump_url | str  | 跳转url    | 当`tag_type`为`topic`或`bgm`时有效                           |

**示例：**

查询视频`av89772773`/`BV1M741177Kg`的TAG

avid方式：

```shell
curl -G 'https://api.bilibili.com/x/web-interface/view/detail/tag' \
--data-urlencode 'aid=89772773' \
--data-urlencode 'cid=153322313' \
-b 'SESSDATA=xxx'
```

bvid方式：

```shell
curl -G 'https://api.bilibili.com/x/web-interface/view/detail/tag' \
--data-urlencode 'bvid=BV1M741177Kg' \
--data-urlencode 'cid=153322313' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": [
    {
      "tag_id": 0,
      "tag_name": "发现《Other Side》",
      "music_id": "MA456128506519140428",
      "tag_type": "bgm",
      "jump_url": "https://music.bilibili.com/h5/music-detail?music_id=MA456128506519140428&cid=153322313&aid=89772773&na_close_hide=1"
    },
    {
      "tag_id": 12620189,
      "tag_name": "异度侵入",
      "music_id": "",
      "tag_type": "old_channel",
      "jump_url": ""
    },
    {
      "tag_id": 707,
      "tag_name": "ED",
      "music_id": "",
      "tag_type": "old_channel",
      "jump_url": ""
    },
    {
      "tag_id": 1394,
      "tag_name": "动漫",
      "music_id": "",
      "tag_type": "old_channel",
      "jump_url": ""
    },
    {
      "tag_id": 13289329,
      "tag_name": "异度侵入ed原图",
      "music_id": "",
      "tag_type": "old_channel",
      "jump_url": ""
    },
    {
      "tag_id": 7520816,
      "tag_name": "bilibili新星计划",
      "music_id": "",
      "tag_type": "old_channel",
      "jump_url": ""
    }
  ]
}
```

</details>

## 获取视频TAG信息（旧）

> <https://api.bilibili.com/x/tag/archive/tags>

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名 | 类型 | 内容     | 必要性       | 备注               |
| ------ | ---- | -------- | ------------ | ------------------ |
| aid    | num  | 稿件avid | 必要（可选） | avid与bvid任选一个 |
| bvid   | str  | 稿件bvid | 必要（可选） | avid与bvid任选一个 |

**json回复：**

根对象：

| 字段    | 类型  | 内容     | 备注                        |
| ------- | ----- | -------- | --------------------------- |
| code    | num   | 返回值   | 0：成功<br />-400：请求错误 |
| message | str   | 错误信息 | 默认为0                     |
| ttl     | num   | 1        |                             |
| data    | array | TAG列表  | 无TAG为空                   |

`data`数组：

| 项   | 类型 | 内容           | 备注 |
| ---- | ---- | -------------- | ---- |
| 0    | obj  | 第1个TAG       |      |
| n    | obj  | 第（n+1）个TAG |      |
| ……   | obj  | ……             | ……   |

`data`数组中的对象：

| 字段          | 类型 | 内容           | 备注                                                         |
| ------------- | ---- | -------------- | ------------------------------------------------------------ |
| tag_id        | num  | tag_id         |                                                              |
| tag_name      | str  | TAG名称        |                                                              |
| cover         | str  | TAG图片url     |                                                              |
| head_cover    | str  | TAG页面头图url |                                                              |
| content       | str  | TAG介绍        |                                                              |
| short_content | str  | TAG简介        |                                                              |
| type          | num  | ？？？         |                                                              |
| state         | num  | 0              |                                                              |
| ctime         | num  | 创建时间       | 秒级时间戳                                                   |
| count         | obj  | 状态数         |                                                              |
| is_atten      | num  | 是否关注       | 0：未关注<br />1：已关注<br />需要登录(Cookie) <br />未登录为0 |
| likes         | num  | 0              | 作用尚不明确                                                 |
| hates         | num  | 0              | 作用尚不明确                                                 |
| attribute     | num  | 0              | 作用尚不明确                                                 |
| liked         | num  | 是否已经点赞   | 0：未点赞<br />1：已点赞<br />需要登录(Cookie) <br />未登录为0 |
| hated         | num  | 是否已经点踩   | 0：未点踩<br />1：已点踩<br />需要登录(Cookie) <br />未登录为0 |
| extra_attr    | num  | ? ? ?          |                                                              |

`data`数组中的对象中的`count`对象：

| 字段  | 类型 | 内容          | 备注         |
| ----- | ---- | ------------- | ------------ |
| view  | num  | 0             | 作用尚不明确 |
| use   | num  | 视频添加TAG数 |              |
| atten | num  | TAG关注       |              |

**示例：**

查询视频`av89772773`/`BV1M741177Kg`的TAG

avid方式：

```shell
curl -G 'https://api.bilibili.com/x/tag/archive/tags' \
--data-urlencode 'aid=89772773' \
-b 'SESSDATA=xxx'
```

bvid方式：

```shell
curl -G 'https://api.bilibili.com/x/tag/archive/tags' \
--data-urlencode 'bvid=BV1M741177Kg' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": [{
    "tag_id": 12620189,
    "tag_name": "异度侵入",
    "cover": "",
    "head_cover": "",
    "content": "",
    "short_content": "",
    "type": 1,
    "state": 0,
    "ctime": 1576235749,
    "count": {
      "view": 0,
      "use": 6392,
      "atten": 8938
    },
    "is_atten": 1,
    "likes": 1,
    "hates": 0,
    "attribute": 0,
    "liked": 0,
    "hated": 0
  }, {
    "tag_id": 7520816,
    "tag_name": "bilibili新星计划",
    "cover": "",
    "head_cover": "",
    "content": "",
    "short_content": "",
    "type": 4,
    "state": 0,
    "ctime": 1529717850,
    "count": {
      "view": 0,
      "use": 1967314,
      "atten": 65082
    },
    "is_atten": 0,
    "likes": 0,
    "hates": 0,
    "attribute": 0,
    "liked": 0,
    "hated": 0
  }, {
    "tag_id": 707,
    "tag_name": "ED",
    "cover": "",
    "head_cover": "",
    "content": "",
    "short_content": "",
    "type": 3,
    "state": 0,
    "ctime": 1436866637,
    "count": {
      "view": 0,
      "use": 62646,
      "atten": 75642
    },
    "is_atten": 1,
    "likes": 0,
    "hates": 0,
    "attribute": 0,
    "liked": 0,
    "hated": 0
  }, {
    "tag_id": 1394,
    "tag_name": "动漫",
    "cover": "http://i0.hdslb.com/bfs/tag/d08c5fe17ceb793e7ce95d9c67392743b33b46d0.jpg",
    "head_cover": "",
    "content": "      “动漫”是动画和漫画的合称与缩写。在其他语言相当少用。随着现代传媒技术的发展，动画（animation或anime）和漫画（comics，manga；特别是故事性漫画）之间联系日趋紧密，两者常被合而为“动漫”。\n　   由于漫画本身的发展形成了现代故事漫画的表现形式，将影视艺术融入漫画之中，使得漫画与动画更容易结合，影视艺术独特的地方在于它能通过镜头的推拉摇移和片段剪辑的蒙太奇技巧来表达想法和感受。漫画正是吸收了影视艺术的这两个特点。当讲述的故事越发复杂、人物越发丰富的时候，传统单线式叙事的方法就越行不通，蒙太奇的介入就成为一种需要了；当漫画家在传统表现手段中无法找到更合适的抒发感情的方法的时候，当读者需要作品有更强的冲击力和表现力的时候，各种镜头的灵活运用就成为一种必需了。一部现代故事漫画往往集远、中、近、特四种镜头于一身，漫画家往往能熟练地运用镜头的移动和各种蒙太奇剪接，对故事特定部分的情绪和氛围进行渲染。这就是现代故事漫画容易和动画结合的一个原因，因为它天生就像动画的分镜头剧本，读者在看漫画时如同在看一部电影。正是有着这样的相似性所以如今将动画和漫画合称为“动漫”。",
    "short_content": "",
    "type": 3,
    "state": 0,
    "ctime": 1436866637,
    "count": {
      "view": 0,
      "use": 1134143,
      "atten": 113030
    },
    "is_atten": 0,
    "likes": 0,
    "hates": 0,
    "attribute": 0,
    "liked": 0,
    "hated": 0
  }, {
    "tag_id": 13289329,
    "tag_name": "异度侵入ed原图",
    "cover": "",
    "head_cover": "",
    "content": "",
    "short_content": "",
    "type": 1,
    "state": 0,
    "ctime": 1581948411,
    "count": {
      "view": 0,
      "use": 3,
      "atten": 0
    },
    "is_atten": 0,
    "likes": 0,
    "hates": 0,
    "attribute": 0,
    "liked": 0,
    "hated": 0
  }]
}
```

</details>

## 点赞&取消点赞视频TAG

> <https://api.bilibili.com/x/tag/archive/like2>

*请求方式：POST*

认证方式：Cookie（SESSDATA）

重复请求为取消

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                     | 必要性 | 备注 |
| ------ | ---- | ------------------------ | ------ | ---- |
| aid    | num  | 稿件avid                 | 必要   |      |
| tag_id | num  | tag_id                   | 必要   |      |
| csrf   | str  | CSRF Token（位于cookie） | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                         |
| ------- | ---- | -------- | ---------------------------- |
| code    | num  | 返回值   | 0：成功 <br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                      |
| ttl     | num  | 1        |                              |

**示例：**

为视频`av89772773`的TAG`12620189`点赞

```shell
curl 'https://api.bilibili.com/x/tag/archive/like2' \
--data-urlencode 'aid=89772773' \
--data-urlencode 'tag_id=12620189' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

</details>

## 点踩&取消点踩视频TAG

> <https://api.bilibili.com/x/tag/archive/hate2>

*请求方式：POST*

认证方式：Cookie（SESSDATA）

重复请求为取消

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                     | 必要性 | 备注 |
| ------ | ---- | ------------------------ | ------ | ---- |
| aid    | num  | 稿件avid                 | 必要   |      |
| tag_id | num  | tag_id                   | 必要   |      |
| csrf   | str  | CSRF Token（位于cookie） | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                         |
| ------- | ---- | -------- | ---------------------------- |
| code    | num  | 返回值   | 0：成功 <br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                      |
| ttl     | num  | 1        |                              |

**示例：**

为视频`av89772773`的TAG`7520816`点踩

```shell
curl 'https://pi.bilibili.com/x/tag/archive/hate2' \
--data-urlencode 'aid=89772773' \
--data-urlencode 'tag_id=7520816' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

</details>
