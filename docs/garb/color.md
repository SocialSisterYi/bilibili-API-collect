# 主题色

## 获取主题色基本信息1

> https://club.bilibili.com/api/query.skin.list.do

*请求方式：GET*

鉴权方式：appkey

认证方式：仅可APP

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注          |
| ---------- | ---- | ------------ | ----------- | ------------- |
| access_key | str  | APP登录Token | APP方式必要 |               |
| appkey     | str  | APP密钥      | APP方式必要 |               |
| build      | num  | 版本         | APP方式必要 | 可为`6082000` |
| sign       | str  | APP签名      | APP方式必要 |               |

**json回复：**

根对象：

| 字段 | 类型  | 内容         | 备注                                                 |
| ---- | ----- | ------------ | ---------------------------------------------------- |
| ts   | num   | 当前时间戳   |                                                      |
| code | num   | 返回值       | 0：成功<br />-3：API校验密匙错误<br />-400：请求错误 |
| data | array | 主题颜色列表 |                                                      |

`data`数组：

| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| 0    | obj  | 主题颜色1     |      |
| n    | obj  | 主题颜色(n+1) |      |
| ……   | obj  | ……            | ……   |

`data`数组中的对象：

| 字段       | 类型 | 内容         | 备注                            |
| ---------- | ---- | ------------ | ------------------------------- |
| id         | num  | 颜色id       |                                 |
| name       | str  | 颜色名称     |                                 |
| is_free    | bool | 是否免费     | false：收费<br />true：免费     |
| price      | num  | 价格         | 单位为硬币                      |
| is_bought  | bool | 是否已购买   | false：未购买<br />true：已购买 |
| status     | num  | 状态         | 1：自动续费<br />4：已退订      |
| buy_time   | num  | 购买时间     | 毫秒时间戳                      |
| due_time   | num  | 到期时间     | 毫秒时间戳                      |
| color_name | str  | 颜色类型名称 |                                 |
| is_overdue | bool | 是否已到期   | false：未到期<br />true：已到期 |

**示例：**

```shell
curl -G 'https://club.bilibili.com/api/query.skin.list.do' \
--data-urlencode 'access_key=xxx' \
--data-urlencode 'appkey=1d8b6e7d45233436' \
--data-urlencode 'build=6082000' \
--data-urlencode 'sign=2d37f2cd6f86337a6a07cb3cf311be86'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "ts": 1599225638239,
    "code": 0,
    "data": [
        {
            "id": 2,
            "name": "少女粉",
            "is_free": true,
            "price": 0,
            "is_bought": false,
            "color_name": "pink",
            "is_overdue": false
        },
        {
            "id": 1,
            "name": "夜间模式",
            "is_free": true,
            "price": 0,
            "is_bought": false,
            "color_name": "black",
            "is_overdue": false
        },
        {
            "id": 3,
            "name": "姨妈红",
            "is_free": false,
            "price": 5,
            "is_bought": false,
            "color_name": "red",
            "is_overdue": false
        },
        {
            "id": 4,
            "name": "咸蛋黄",
            "is_free": false,
            "price": 5,
            "is_bought": false,
            "color_name": "yellow",
            "is_overdue": false
        },
        {
            "id": 5,
            "name": "早苗绿",
            "is_free": false,
            "price": 5,
            "is_bought": false,
            "status": 4,
            "buy_time": 1599219782000,
            "due_time": 1601811782000,
            "color_name": "green",
            "is_overdue": false
        },
        {
            "id": 6,
            "name": "胖次蓝",
            "is_free": false,
            "price": 5,
            "is_bought": false,
            "color_name": "blue",
            "is_overdue": false
        },
        {
            "id": 7,
            "name": "基佬紫",
            "is_free": false,
            "price": 5,
            "is_bought": false,
            "color_name": "purple",
            "is_overdue": false
        }
    ]
}
```

</details>

## 获取主题色基本信息2

> https://api.bilibili.com/x/garb/skin/color/list

*请求方式：GET*

认证方式：仅可Cookie

**url参数：**

| 参数名   | 类型 | 内容     | 必要性 | 备注          |
| -------- | ---- | -------- | ------ | ------------- |
| mobi_app | str  | 平台标识 | 非必要 | 可为`android` |
| build    | num  | 版本     | 非必要 | 可为`6082000` |

**json回复：**

根对象：

| 字段    | 类型  | 内容         | 备注                                                 |
| ------- | ----- | ------------ | ---------------------------------------------------- |
| code    | num   | 返回值       | 0：成功<br />-3：API校验密匙错误<br />-400：请求错误 |
| message | str   | 错误信息     | 默认为0                                              |
| data    | array | 主题颜色列表 |                                                      |

`data`数组：

| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| 0    | obj  | 主题颜色1     |      |
| n    | obj  | 主题颜色(n+1) |      |
| ……   | obj  | ……            | ……   |

`data`数组中的对象：

| 字段       | 类型 | 内容         | 备注                            |
| ---------- | ---- | ------------ | ------------------------------- |
| id         | num  | 颜色id       |                                 |
| name       | str  | 颜色名称     |                                 |
| is_free    | bool | 是否免费     | false：收费<br />true：免费     |
| price      | num  | 价格         | 单位为硬币                      |
| is_bought  | bool | 是否已购买   | false：未购买<br />true：已购买 |
| status     | num  | 状态         | 1：自动续费<br />4：已退订      |
| buy_time   | num  | 购买时间     | 毫秒时间戳                      |
| due_time   | num  | 到期时间     | 毫秒时间戳                      |
| color_name | str  | 颜色类型名称 |                                 |
| is_overdue | bool | 是否已到期   | false：未到期<br />true：已到期 |

**示例：**

```shell
curl -G 'https://api.bilibili.com/x/garb/skin/color/list' \
--data-urlencode 'mobi_app=android' \
--data-urlencode 'build=6082000' \
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
            "id": 8,
            "name": "简洁白",
            "is_free": true,
            "price": 0,
            "is_bought": false,
            "status": 0,
            "buy_time": 0,
            "due_time": 0,
            "color_name": "white",
            "is_overdue": false
        },
        {
            "id": 2,
            "name": "少女粉",
            "is_free": true,
            "price": 0,
            "is_bought": false,
            "status": 0,
            "buy_time": 0,
            "due_time": 0,
            "color_name": "pink",
            "is_overdue": false
        },
        {
            "id": 1,
            "name": "夜间模式",
            "is_free": true,
            "price": 0,
            "is_bought": false,
            "status": 0,
            "buy_time": 0,
            "due_time": 0,
            "color_name": "black",
            "is_overdue": false
        },
        {
            "id": 3,
            "name": "姨妈红",
            "is_free": false,
            "price": 5,
            "is_bought": false,
            "status": 0,
            "buy_time": 0,
            "due_time": 0,
            "color_name": "red",
            "is_overdue": false
        },
        {
            "id": 4,
            "name": "咸蛋黄",
            "is_free": false,
            "price": 5,
            "is_bought": false,
            "status": 0,
            "buy_time": 0,
            "due_time": 0,
            "color_name": "yellow",
            "is_overdue": false
        },
        {
            "id": 5,
            "name": "早苗绿",
            "is_free": false,
            "price": 5,
            "is_bought": false,
            "status": 4,
            "buy_time": 1599219782000,
            "due_time": 1601811782000,
            "color_name": "green",
            "is_overdue": false
        },
        {
            "id": 6,
            "name": "胖次蓝",
            "is_free": false,
            "price": 5,
            "is_bought": false,
            "status": 0,
            "buy_time": 0,
            "due_time": 0,
            "color_name": "blue",
            "is_overdue": false
        },
        {
            "id": 7,
            "name": "基佬紫",
            "is_free": false,
            "price": 5,
            "is_bought": false,
            "status": 0,
            "buy_time": 0,
            "due_time": 0,
            "color_name": "purple",
            "is_overdue": false
        }
    ]
}
```

</details>