# 笔记列表

- [查询所有笔记列表](#查询笔记列表)

## 查询所有笔记列表

> http://api.bilibili.com/x/note/list

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名  | 类型 | 内容         | 必要性      | 备注                                                    |
| ------- | ---- | ------------ | ----------- | ------------------------------------------------------- |
| ps      | num  | 每页项数     | 必要        |                                                 |
| pn      | num  | 页码         | 必要        |                                                  |
| csrf    | str  | CSRF Token（位于cookie） | 非必要   |                                                |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                |
| ------- | ---- | -------- | --------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-101：账号未登录   |
| message | str  | 错误信息 | 默认为0                                             |
| ttl     | num  | 1        |                                                     |
| data    | obj  | 信息本体 |                                                     |

`data`对象：

| 字段       | 类型  | 内容     | 备注         |
| ---------- | ----- | -------- | ------------ |
| list       | array | 明细列表 |              |
| page       | obj   | 页面信息 |              |

`data`中的`list`数组：

| 项   | 类型 | 内容        | 备注             |
| ---- | ---- | ----------- | ---------------- |
| 0    | obj  | 笔记1       |                  |
| n    | obj  | 笔记（n+1） | 按照创建顺序排列 |
| ……   | obj  | ……          | ……               |

`list`中的对象：

| 字段            | 类型 | 内容         | 备注                   |
| --------------- | ---- | ------------ | ---------------------- |
| title           | str  | 笔记标题     |                        |
| summary         | str  | 笔记预览文本 |                        |
| mtime           | str  | 提交时间     |                        |
| arc             | obj  | 视频信息     |                        |
| note_id         | num  | 笔记ID       |                        |
| audit_status    | num  | 0            | 作用尚不明确           |

`list`中的`arc`中的对象：

| 字段   | 类型 | 内容         | 备注                   |
| ------ | ---- | ------------ | ---------------------- |
| aid    | num  | 稿件avID     |                        |
| bvid   | str  | 稿件bvID     |                        |
| pic    | str  | 稿件封面图片url |                     |
| desc   | str  | 视频简介     |                        |
| status | num  | 0            |                        |

`data`中的`page`对象：

| 字段   | 类型 | 内容         | 备注                 |
| ------ | ---- | ------------ | -------------------- |
| total  | num  | 笔记总数     |                      |
| size   | num  | 每页项数     |                      |
| num    | num  | 页码         |                      |

**示例：**

获取笔记列表

```shell
curl 'http://api.bilibili.com/x/note/list' \
--data-urlencode 'ps=10' \
--data-urlencode 'pn=1'
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code":0,
    "message":"0",
    "ttl":1,
    "data":{
        "list":[
            {
                "title":"周刊哔哩哔哩排行榜#543",
                "summary":"test",
                "mtime":"2020-11-23 17:45",
                "arc":{
                    "aid":970322090,
                    "bvid":"BV1op4y167Uo",
                    "pic":"http://i1.hdslb.com/bfs/archive/cc67f9c9b70d6eb97f00e726517c8c3da540ee05.jpg",
                    "desc":"20年11月第3周 | 【PICK UP】栏目欢迎继续推荐，私信@周刊娘 ，附上推荐投稿的av/bv号与理由。请勿刷屏、引战",
                    "status":0
                },
                "note_id":3809605586518023,
                "audit_status":0
            },
            {
                "title":"【MV】保加利亚妖王AZIS视频合辑",
                "summary":"test2",
                "mtime":"2020-11-20 16:44",
                "arc":{
                    "aid":170001,
                    "bvid":"BV17x411w7KC",
                    "pic":"http://i2.hdslb.com/bfs/archive/1ada8c32a9d168e4b2ee3e010f24789ba3353785.jpg",
                    "desc":"sina 保加利亚超级天王 Azis1999年出道。他的音乐融合保加利亚名族曲风chalga和pop、rap等元素，不过他惊艳的易装秀与浮夸的角色诠释才是他最为出名的地方 Azis与众多保加利亚天王天后级歌手都有过合作.06年，他作为Mariana Popova的伴唱，在欧洲半决赛上演唱了他们的参赛曲Let Me Cry 06年他被Velikite Balgari评为保加利亚有史以来最伟大的名人之一",
                    "status":0
                },
                "note_id":3988570796195843,
                "audit_status":0
            }
        ],
        "page":{
            "total":2,
            "size":10,
            "num":1
        }
    }
}
```

</details>
