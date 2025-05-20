# 拉取题目

## 拉取基础题

> https://api.bilibili.com/x/answer/v4/base

*请求方式：GET*

认证方式：Cookie或APP

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />41014：答题过快或错误太多<br />41020：用户基础题已通过<br />41023：用户答题记录不存在 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段     | 类型 | 内容     | 备注 |
| -------- | ---- | -------- | ---- |
| question | obj  | 题目内容 |      |

`data`中的`question`对象：

| 字段       | 类型  | 内容               | 备注                                                         |
| ---------- | ----- | ------------------ | ------------------------------------------------------------ |
| id         | num   | 问题id             | **问题id不代表题图，因为选项是打乱的**                       |
| number     | num   | 当前题号           |                                                              |
| q_height   | num   | 问题部分总高度     |                                                              |
| q_coord_y  | num   | 问题部分Y裁剪起始  | 当然是0                                                      |
| image      | str   | 题图url            | 题目文字+所有的选项文字排版成一张图，存储在bfs中             |
| from       | str   | 问题来源页面url    | 如：“xx弹幕是否违规”所在的视频页                             |
| options    | array | 选项列表           |                                                              |
| type_id    | num   | 题目父类型id       | 见[查询自选题分类](info.md#查询自选题分类)<br />**注：36为基础题** |
| type_name  | str   | 分院小电视提示文案 | 如：xx小电视                                                 |
| type_image | str   | 分院小电视图标url  |                                                              |

`question`中的`options`数组：

| 项   | 类型 | 内容  | 备注                   |
| ---- | ---- | ----- | ---------------------- |
| 0    | obj  | 选项A |                        |
| 1    | obj  | 选项B | 选项至少2个            |
| 2    | obj  | 选项C | 数组长度取决于选项个数 |
| 3    | obj  | 选项D |                        |

`question`中的`options`数组中的对象：

| 字段    | 类型 | 内容              | 备注                     |
| ------- | ---- | ----------------- | ------------------------ |
| number  | num  | 选项序号          | 如：1为A 2为B            |
| high    | num  | 选项部分总高度    |                          |
| coord_y | num  | 选项部分Y裁剪起始 |                          |
| hash    | str  | 选项hash          | 作为提交对应选项时应传参 |

**示例：**

```shell
curl -G 'https://api.bilibili.com/x/answer/v4/base' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "question": {
      "id": 6511,
      "number": 1,
      "q_height": 38.4,
      "q_coord_y": 0,
      "image": "https://i0.hdslb.com/bfs/member/9d7f1f1f0b7478a621d1b998a5a98982.png",
      "from": "",
      "options": [
        {
          "number": 1,
          "high": 42,
          "coord_y": 38.4,
          "hash": "f7619d6c2040d44f39dc87a7aa34fb9e"
        },
        {
          "number": 2,
          "high": 42,
          "coord_y": 80.4,
          "hash": "dce5140040f40ca4030783585684369d"
        }
      ],
      "type_id": 36,
      "type_name": "小电视校长",
      "type_image": "https://i0.hdslb.com/bfs/face/7b67c0c0da64a6ab059ff49bb0d4b92988b91806.png"
    }
  }
}
```
</details>

## 拉取附加题

> https://api.bilibili.com/x/answer/v4/extra

*请求方式：GET*

认证方式：Cookie或APP

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />41014：答题过快或错误太多<br />41021：用户基础题未通过<br />41023：用户答题记录不存在<br />41054：用户附加题已通过 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

同[拉取基础题](#拉取基础题)的`data`对象

**示例：**

```shell
curl -G 'https://api.bilibili.com/x/answer/v4/extra' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "question": {
            "id": 11492,
            "number": 44,
            "q_height": 76.8,
            "q_coord_y": 0,
            "image": "https://i0.hdslb.com/bfs/member/b6c846613bd0b44cd7c8af1d83e3f0c2.png",
            "from": "https://www.bilibili.com/video/av14659093",
            "options": [
                {
                    "number": 1,
                    "high": 42,
                    "coord_y": 76.8,
                    "hash": "ca15e6009047cf82358c50ab90fd8d9e"
                },
                {
                    "number": 2,
                    "high": 42,
                    "coord_y": 118.8,
                    "hash": "60e86a1c736c68da3462f66377e4e8ca"
                }
            ],
            "type_id": 36,
            "type_name": "小电视校长",
            "type_image": "https://i0.hdslb.com/bfs/face/7b67c0c0da64a6ab059ff49bb0d4b92988b91806.png"
        }
    }
}
```
</details>

## 拉取自选题

> https://api.bilibili.com/x/answer/v4/pro 

*请求方式：GET*

认证方式：Cookie或APP

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />41014：答题过快或错误太多<br />41021：用户基础题未通过<br />41023：用户答题记录不存在<br />41051：用户答题验证码未通过<br />41055：基础附加题未通过 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

同[拉取基础题](#拉取基础题)的`data`对象

**示例：**

```shell
curl -G 'https://api.bilibili.com/x/answer/v4/pro' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "question": {
            "id": 824,
            "number": 54,
            "q_height": 38.4,
            "q_coord_y": 0,
            "image": "https://i0.hdslb.com/bfs/member/417e02be5652f79d0312fa2fcee28869.png",
            "from": "",
            "options": [
                {
                    "number": 1,
                    "high": 42,
                    "coord_y": 38.4,
                    "hash": "c4574c23cf728c19abeab3e7525258d4"
                },
                {
                    "number": 2,
                    "high": 42,
                    "coord_y": 80.4,
                    "hash": "ffd48760758fbb8a2c183d1d04f692f8"
                },
                {
                    "number": 3,
                    "high": 42,
                    "coord_y": 122.4,
                    "hash": "898d414dff49fe20c4a1da1e148fadb2"
                },
                {
                    "number": 4,
                    "high": 42,
                    "coord_y": 164.4,
                    "hash": "09018443f09d8ef4f6fec5e96e082270"
                }
            ],
            "type_id": 1,
            "type_name": "游戏小电视",
            "type_image": "https://i0.hdslb.com/bfs/face/6590bee26086fed66ee7cc5bac26a32d2f733037.png"
        }
    }
}
```

</details>

