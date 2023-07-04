# 查询信息

## 查询答题状态

> https://api.bilibili.com/x/answer/v4/status

*请求方式：GET*

认证方式：Cookie或APP

**json回复：**

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />41014：答题过快或错误太多 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段         | 类型 | 内容               | 备注                                                         |
| ------------ | ---- | ------------------ | ------------------------------------------------------------ |
| hid          | num  | 答题会话id         |                                                              |
| mid          | num  | 答题用户mid        |                                                              |
| score        | num  | 当前得分           |                                                              |
| status       | num  | 答题状态           | 0：未答题<br />2：答题中<br />3：已通过                      |
| number       | num  | 当前题号           |                                                              |
| result       | str  | 是否通过答题       | failed：未通过<br />succeed：已通过                          |
| stage        | str  | 当前答题阶段       | base：基础题<br />extra：附加题<br />pro_type：等待选择自选题类型<br />pro：自选题<br />complete：已完成 |
| version      | str  | 答题版本           | 当前为`v4`                                                   |
| start_time   | num  | 本次答题开始时间   | 时间戳                                                       |
| first_answer | num  | （?）              |                                                              |
| progress     | str  | 当前答题进度       | 百分比<br />60分为100%                                       |
| text         | str  | 提示文案           |                                                              |
| url          | str  | 答题页面url        |                                                              |
| in_reg_audit | bool | 是否为第一次答题   |                                                              |
| edition      | num  | 答题版本           | 0：旧版（40+10+50）<br />2：新版（40+30+30）                 |
| rewards      | null | (?)                |                                                              |
| captcha      | num  | 是否已经提交验证码 | 1：已提交<br />仅新版提交验证码后存在                        |

**示例：**

```shell
curl -G 'https://api.bilibili.com/x/answer/v4/status' \
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
        "hid": 1623207905520705,
        "mid": 293793435,
        "score": 2,
        "status": 2,
        "number": 2,
        "result": "failed",
        "stage": "base",
        "version": "v4",
        "start_time": 1623207905,
        "first_answer": 2,
        "progress": "3",
        "text": "继续答题",
        "url": "https://www.bilibili.com/h5/newbie/entry?navhide=1",
        "in_reg_audit": false,
        "edition": 0,
        "rewards": null
    }
}
```

</details>

## 查询自选题分类

> https://api.bilibili.com/x/answer/v4/pro/type

*请求方式：GET*

认证方式：Cookie或APP

当字段`edition`的值不同时，该接口返回的数据也不同

**json回复：**

| 字段    | 类型  | 内容       | 备注                                                         |
| ------- | ----- | ---------- | ------------------------------------------------------------ |
| code    | num   | 返回值     | 0：成功<br />-101：账号未登录<br />41014：答题过快或错误太多<br />41021：用户基础题未通过<br />41031：自选题未通过<br />41055：基础附加题未通过 |
| message | str   | 错误信息   | 默认为0                                                      |
| ttl     | num   | 1          |                                                              |
| data    | array | 父分类列表 |                                                              |

`data`数组：

| 项   | 类型 | 内容        | 备注 |
| ---- | ---- | ----------- | ---- |
| 0    | obj  | 父分类1     |      |
| n    | obj  | 父分类(n+1) |      |
| ……   | obj  | ……          | ……   |

`data`数组中的对象：

| 字段   | 类型  | 内容       | 备注 |
| ------ | ----- | ---------- | ---- |
| id     | num   | 父分类id   |      |
| name   | str   | 父分类名   |      |
| fields | array | 子分类列表 |      |

`data`数组中的对象中的`fields`数组：

| 项   | 类型 | 内容        | 备注 |
| ---- | ---- | ----------- | ---- |
| 0    | obj  | 子分类1     |      |
| n    | obj  | 子分类(n+1) |      |
| ……   | obj  | ……          | ……   |

`fields`数组中的对象：

| 字段 | 类型 | 内容     | 备注 |
| ---- | ---- | -------- | ---- |
| id   | num  | 子分类id |      |
| name | str  | 子分类名 |      |

**示例：**

```shell
curl -G 'https://api.bilibili.com/x/answer/v4/pro/type' \
-b 'SESSDATA=xxx'
```

旧版`edition=0`返回：

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": [
        {
            "id": 1,
            "name": "游戏",
            "fields": [
                {
                    "id": 8,
                    "name": "动作射击"
                },
                {
                    "id": 9,
                    "name": "冒险格斗"
                },
                {
                    "id": 12,
                    "name": "策略模拟 "
                },
                {
                    "id": 13,
                    "name": "角色扮演 "
                },
                {
                    "id": 14,
                    "name": "音乐体育 "
                }
            ]
        },
        {
            "id": 2,
            "name": "影视",
            "fields": [
                {
                    "id": 15,
                    "name": "纪录片 "
                },
                {
                    "id": 16,
                    "name": "电影 "
                },
                {
                    "id": 17,
                    "name": "电视剧 "
                }
            ]
        },
        {
            "id": 3,
            "name": "科技",
            "fields": [
                {
                    "id": 18,
                    "name": "军事 "
                },
                {
                    "id": 19,
                    "name": "地理 "
                },
                {
                    "id": 20,
                    "name": "历史 "
                },
                {
                    "id": 21,
                    "name": "文学 "
                },
                {
                    "id": 22,
                    "name": "数学 "
                },
                {
                    "id": 23,
                    "name": "物理 "
                },
                {
                    "id": 24,
                    "name": "化学 "
                },
                {
                    "id": 25,
                    "name": "生物 "
                },
                {
                    "id": 26,
                    "name": "数码科技 "
                }
            ]
        },
        {
            "id": 4,
            "name": "动画",
            "fields": [
                {
                    "id": 27,
                    "name": "动画声优 "
                },
                {
                    "id": 28,
                    "name": "动漫内容 "
                }
            ]
        },
        {
            "id": 5,
            "name": "艺术",
            "fields": [
                {
                    "id": 29,
                    "name": "ACG音乐 "
                },
                {
                    "id": 30,
                    "name": "三次元音乐 "
                },
                {
                    "id": 31,
                    "name": "绘画 "
                }
            ]
        },
        {
            "id": 6,
            "name": "流行前线",
            "fields": [
                {
                    "id": 32,
                    "name": "娱乐 "
                },
                {
                    "id": 33,
                    "name": "时尚 "
                },
                {
                    "id": 34,
                    "name": "运动 "
                }
            ]
        },
        {
            "id": 7,
            "name": "鬼畜",
            "fields": [
                {
                    "id": 35,
                    "name": "鬼畜 "
                }
            ]
        }
    ]
}
```

</details>

新版`edition=2`返回：

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": [
        {
            "id": 1,
            "name": "游戏",
            "fields": [
                {
                    "id": 1,
                    "name": "游戏"
                }
            ]
        },
        {
            "id": 2,
            "name": "影视",
            "fields": [
                {
                    "id": 2,
                    "name": "影视"
                }
            ]
        },
        {
            "id": 3,
            "name": "科教/知识",
            "fields": [
                {
                    "id": 3,
                    "name": "科教/知识"
                }
            ]
        },
        {
            "id": 4,
            "name": "动画/动漫",
            "fields": [
                {
                    "id": 4,
                    "name": "动画/动漫"
                }
            ]
        },
        {
            "id": 5,
            "name": "音乐/舞蹈",
            "fields": [
                {
                    "id": 5,
                    "name": "音乐/舞蹈"
                }
            ]
        },
        {
            "id": 32,
            "name": "明星/娱乐",
            "fields": [
                {
                    "id": 32,
                    "name": "明星/娱乐"
                }
            ]
        },
        {
            "id": 35,
            "name": "鬼畜",
            "fields": [
                {
                    "id": 35,
                    "name": "鬼畜"
                }
            ]
        },
        {
            "id": 42,
            "name": "时尚/健身",
            "fields": [
                {
                    "id": 42,
                    "name": "时尚/健身"
                }
            ]
        }
    ]
}
```

</details>


## 查询答题结果

> https://api.bilibili.com/x/answer/v4/result 

*请求方式：GET*

认证方式：无

**url参数：**

| 参数名 | 类型 | 内容       | 必要性 | 备注 |
| ------ | ---- | ---------- | ------ | ---- |
| hid    | num  | 答题会话id | 必要   |      |

**json回复：**

| 字段    | 类型 | 内容     | 备注                                                       |
| ------- | ---- | -------- | ---------------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />41023：用户答题记录不存在 |
| message | str  | 错误信息 | 默认为0                                                    |
| ttl     | num  | 1        |                                                            |
| data    | obj  | 信息本体 |                                                            |

`data`对象：

| 字段              | 类型  | 内容                     | 备注                                |
| ----------------- | ----- | ------------------------ | ----------------------------------- |
| hid               | num   | 答题会话id               |                                     |
| mid               | num   | 答题用户mid              |                                     |
| member            | num   |                          |                                     |
| score             | num   | 得分                     |                                     |
| level             | num   | 用户等级                 |                                     |
| first_pass        | num   |                          |                                     |
| uname             | str   | 用户昵称                 |                                     |
| face              | str   | 用户头像url              |                                     |
| status            | str   | 答题结果                 | failed：未通过<br />succeed：已通过 |
| question_types    | array | 已选择的自选题列表       |                                     |
| power             | array | 自选题分类得分情况       |                                     |
| start_time        | num   | 开始答题时间             | 时间戳                              |
| share             | obj   |                          |                                     |
| can_show_rank_btn | bool  |                          |                                     |
| is_same_user      | bool  |                          |                                     |
| view_more         | str   |                          |                                     |
| video_info        | obj   |                          |                                     |
| main_tids         | array |                          |                                     |
| sub_tids          | array |                          |                                     |
| power_result      | null  |                          |                                     |
| score_rate        | num   | 分数超过平均用户的百分比 |                                     |
| permission        | obj   |                          |                                     |
| rewards           | null  |                          |                                     |

**示例：**

```shell
curl -G 'https://api.bilibili.com/x/answer/v4/result' \
--data-urlencode 'hid=1615088061307609' \
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
        "hid": 1615088061307609,
        "mid": 1386643599,
        "member": 0,
        "score": 70,
        "level": 0,
        "first_pass": 0,
        "uname": "眉凭铱ひ前非",
        "face": "http://i0.hdslb.com/bfs/face/cd83d4cdbfb521455c168eaa181915b40cb664d1.jpg",
        "status": "succeed",
        "question_types": [
            {
                "id": 12,
                "name": "策略模拟 "
            },
            {
                "id": 13,
                "name": "角色扮演 "
            },
            {
                "id": 14,
                "name": "音乐体育 "
            },
            {
                "id": 8,
                "name": "动作射击"
            },
            {
                "id": 9,
                "name": "冒险格斗"
            }
        ],
        "power": [
            {
                "score": 0,
                "name": "动画"
            },
            {
                "score": 0,
                "name": "艺术"
            },
            {
                "score": 5,
                "name": "游戏"
            },
            {
                "score": 0,
                "name": "科技"
            },
            {
                "score": 0,
                "name": "影视"
            },
            {
                "score": 0,
                "name": "鬼畜"
            }
        ],
        "start_time": 1615088061,
        "share": {
            "content": "",
            "short_content": ""
        },
        "can_show_rank_btn": false,
        "is_same_user": true,
        "view_more": "",
        "video_info": {
            "url": "",
            "name": "",
            "img": "",
            "watch_num": "",
            "up_num": ""
        },
        "main_tids": [],
        "sub_tids": [],
        "power_result": null,
        "score_rate": 84,
        "permission": {
            "reply": true,
            "color_dm": true
        }
    }
}
```

</details>