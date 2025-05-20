# 相簿推荐作者

<details>
<summary>功能已下线</summary>

## 获取摄影推荐作者

> https://api.vc.bilibili.com/link_draw/v2/Photo/uper

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容     | 必要性 | 备注    |
| ------ | ---- | -------- | ------ | ------- |
| num    | num  | 请求数量 | 非必要 | 默认为6 |

**json回复：**

根对象：

| 字段    | 类型  | 内容     | 备注          |
| ------- | ----- | -------- | ------------- |
| code    | num   | 返回值   | 0：成功       |
| msg     | str   | 错误信息 | 默认为success |
| message | str   | 错误信息 | 默认为success |
| data    | array | 信息本体 |               |

`data`数组：

| 项   | 类型 | 内容       | 备注 |
| ---- | ---- | ---------- | ---- |
| 0    | obj  | 作者 1     |      |
| n    | obj  | 作者 (n+1) |      |
| ……   | obj  | ……         | ……   |

`data`数组中的对象：

| 字段        | 类型 | 内容    | 备注         |
| ----------- | ---- | ------- | ------------ |
| uid         | num  | 作者mid |              |
| head_url    | str  | 头像url |              |
| name        | str  | 昵称    |              |
| is_followed | num  | 0       | 作用尚不明确 |

**示例：**

请求获取摄影推荐作者，数量为5

```shell
curl -G 'https://api.vc.bilibili.com/link_draw/v2/Photo/uper' \
--data-urlencode 'num=5'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "msg": "success",
    "message": "success",
    "data": [
        {
            "uid": 36974706,
            "head_url": "https://i2.hdslb.com/bfs/face/fa7ef3a5124e2ebfd2094e0bc2f42c752c1abd21.jpg",
            "name": "幹物小幺",
            "is_followed": 0
        },
        {
            "uid": 3223860,
            "head_url": "https://i0.hdslb.com/bfs/face/c5400d25eb7700cd41d88dff5b800bd55ec27cfe.jpg",
            "name": "您算哪根葱",
            "is_followed": 0
        },
        {
            "uid": 941228,
            "head_url": "https://i2.hdslb.com/bfs/face/f38f000d4df21e9bea96d3573efdf81ae02f4ddf.jpg",
            "name": "碳酸熊卡",
            "is_followed": 0
        },
        {
            "uid": 2624541,
            "head_url": "https://i0.hdslb.com/bfs/face/86ccd746af8b1e8bfcdd432de7f0ce1e2b2cb8b0.jpg",
            "name": "_一之濑光",
            "is_followed": 0
        },
        {
            "uid": 29963706,
            "head_url": "https://i1.hdslb.com/bfs/face/c054f097f1b882fc6ad8a67d0f0f88e3acd3bc88.jpg",
            "name": "公子温温温如",
            "is_followed": 0
        }
    ]
}
```

</details>

## 获取画友推荐作者

> https://api.vc.bilibili.com/link_draw/v2/Doc/drawer

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容     | 必要性 | 备注    |
| ------ | ---- | -------- | ------ | ------- |
| num    | num  | 请求数量 | 非必要 | 默认为6 |

**json回复：**

见[获取摄影推荐作者](#获取摄影推荐作者)中的响应内容

**示例：**

请求获取画友推荐作者，数量为5

```shell
curl -G 'https://api.vc.bilibili.com/link_draw/v2/Doc/drawer' \
--data-urlencode 'num=5'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "msg": "success",
    "message": "success",
    "data": [
        {
            "uid": 7905675,
            "head_url": "http://i1.hdslb.com/bfs/face/d4765fd020e8b96e331861cb4d6a3afde4e70d1d.jpg",
            "name": "我真的是离城",
            "is_followed": 0
        },
        {
            "uid": 20356494,
            "head_url": "http://i0.hdslb.com/bfs/face/0686141506894df969832d7dda91f2a0c4cdc24b.jpg",
            "name": "ZM-PANDA",
            "is_followed": 0
        },
        {
            "uid": 4836885,
            "head_url": "http://i1.hdslb.com/bfs/face/48822c5aa7aeae9d3dd2010388baa2b0e1c5cc0a.jpg",
            "name": "六六子w",
            "is_followed": 0
        },
        {
            "uid": 2575079,
            "head_url": "http://i1.hdslb.com/bfs/face/cb3d6f4fb2fbe5aa85ab8773a1a19cec6d8ff1e1.jpg",
            "name": "念萦墨葵",
            "is_followed": 0
        },
        {
            "uid": 1904878,
            "head_url": "http://i0.hdslb.com/bfs/face/f6de926b3905ec7bb9e36202d80eb931d12f70ac.jpg",
            "name": "fedsnk",
            "is_followed": 0
        }
    ]
}
```

</details>
</details>
