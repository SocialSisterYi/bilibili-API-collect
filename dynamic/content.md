> 感谢Notepad++的一路陪伴，原则问题，以后便不再使用了

# 动态信息

**本页所有操作均需登录（SESSDATA）**

## 获取正在直播的已关注者

> http://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/w_live_users

**url参数：**

| 参数名 | 类型 | 内容       | 必要性 | 备注     |
| ------ | ---- | ---------- | ------ | -------- |
| size   | num  | 每页显示数 | 非必要 | 默认为10 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注    |
| ------- | ---- | -------- | ------- |
| code    | num  | 返回值   | 0：成功 |
| data    | obj  | 信息本体 |         |
| message | str  | 错误信息 | 默认为0 |
| msg     | num  | 空       |         |

`data`对象：

| 字段        | 类型  | 内容       | 备注         |
| ----------- | ----- | ---------- | ------------ |
| count       | num   | 直播者数量 |              |
| group       | str   | "default"  | 作用尚不明确 |
| items       | array | 直播者列表 |              |
| _gt_        | num   | 0          |              |

`data`中的`items`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | obj  | 第一位直播者    |      |
| n    | obj  | 第(n+1)位直播者 |      |
| ……   | obj  | ……              | ……   |

`data`中的`items`数组中的对象：

| 字段  | 类型 | 内容       | 备注 |
| ----- | ---- | ---------- | ---- |
| face  | str  | 直播者头像 |      |
| link  | str  | 直播链接   |      |
| title | str  | 直播标题   |      |
| uid   | num  | 直播者ID   |      |
| uname | str  | 直播者昵称 |      |

**示例：**

```shell
curl -G 'http://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/w_live_users'\
--data-urlencode 'size=10'\
-b 'SESSDATA=xxx'
```

```json
{
  "code": 0,
  "msg": "",
  "message": "",
  "data": {
    "count": 4,
    "group": "default",
    "items": [
      {
        "uid": 430774867,
        "uname": "AIofficial",
        "face": "https://i0.hdslb.com/bfs/face/f9a65c15bd1e9871419e6566aeee891eef420c5b.jpg",
        "link": "https://live.bilibili.com/21412734",
        "title": "【罚站AI】换装24小时AI直播间唱聊~"
      },
      {
        "uid": 456664753,
        "uname": "央视新闻",
        "face": "https://i1.hdslb.com/bfs/face/5a6808606bf1f7a2390b77e14df8d0d1d04680d9.jpg",
        "link": "https://live.bilibili.com/21686237",
        "title": "8.19中国医师节  一起“医”路同行"
      },
      {
        "uid": 5755666,
        "uname": "可爱的大枣子",
        "face": "https://i1.hdslb.com/bfs/face/248428206eca5b9ca34514dc2df54d456fbecb9e.jpg",
        "link": "https://live.bilibili.com/2116488",
        "title": "早上好"
      },
      {
        "uid": 290515513,
        "uname": "地球频道",
        "face": "https://i1.hdslb.com/bfs/face/33b60973ae3608beb27189947b02ccc2164a96d5.jpg",
        "link": "https://live.bilibili.com/9196015",
        "title": "【直播】从太空看地球"
      }
    ],
    "_gt_": 0
  }
}
```
