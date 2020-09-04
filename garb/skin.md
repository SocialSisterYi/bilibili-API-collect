# 主题及加载动画

## 获取主题及加载动画

> http://app.bilibili.com/x/resource/show/skin

*请求方式：GET*

鉴权方式：appkey

认证方式：仅可APP

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注          |
| ---------- | ---- | ------------ | ----------- | ------------- |
| access_key | str  | APP登录Token | APP方式必要 |               |
| appkey     | str  | APP密钥      | APP方式必要 |               |
| build      | num  | 版本         | APP方式必要 | 可为`6082000` |
| ts         | num  | 当前时间戳   | APP方式必要 | 可为`0`       |
| sign       | str  | APP签名      | APP方式必要 |               |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                 |
| ------- | ---- | -------- | ---------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-3：API校验密匙错误<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                              |
| data    | obj  | 信息本体 |                                                      |

`data`对象：

| 字段        | 类型  | 内容         | 备注         |
| ----------- | ----- | ------------ | ------------ |
| user_equip  | obj   | 个性主题信息 | 有效时有此项 |
| skin_colors | array | 主题颜色列表 |              |
| load_equip  | obj   | 加载动画信息 | 有效时有此项 |

`data`中的`user_equip`对象：

| 字段        | 类型 | 内容            | 备注   |
| ----------- | ---- | --------------- | ------ |
| id          | num  | 装扮ID          |        |
| name        | str  | 装扮名称        |        |
| preview     | str  | 装扮封面url     |        |
| ver         | num  | 装扮版本        | 时间戳 |
| package_url | str  | 装扮包url       |        |
| package_md5 | str  | 装扮包md5校验值 |        |
| data        | obj  | 装扮配置        |        |

`user_equip`中的`data`对象：

| 字段                | 类型 | 内容           | 备注                        |
| ------------------- | ---- | -------------- | --------------------------- |
| color_mode          | str  | 颜色模式       | light：亮色<br />dark：暗色 |
| color               | str  | 前景色？       |                             |
| color_second_page   | str  | 背景色？       |                             |
| side_bg_color       | str  | ？             |                             |
| tail_color          | str  | 底边栏颜色？   |                             |
| tail_color_selected | str  | ？             |                             |
| tail_icon_ani       | bool | 有无底边栏动画 | false：无<br />true：有     |
| tail_icon_ani_mode  | str  | once           | 作用尚不明确                |

`skin_colors`数组：

| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| 0    | obj  | 主题颜色1     |      |
| n    | obj  | 主题颜色(n+1) |      |
| ……   | obj  | ……            | ……   |

`skin_colors`数组中的对象：

| 字段       | 类型 | 内容         | 备注                            |
| ---------- | ---- | ------------ | ------------------------------- |
| id         | num  | 颜色ID       |                                 |
| name       | str  | 颜色名称     |                                 |
| is_free    | bool | 是否免费     | false：收费<br />true：免费     |
| price      | num  | 价格         | 单位为硬币                      |
| is_bought  | bool | 是否已购买   | false：未购买<br />true：已购买 |
| status     | num  | 状态         | 1：自动续费<br />4：已退订      |
| buy_time   | num  | 购买时间     | 毫秒时间戳                      |
| due_time   | num  | 到期时间     | 毫秒时间戳                      |
| color_name | str  | 颜色类型名称 |                                 |
| is_overdue | bool | 是否已到期   | false：未到期<br />true：已到期 |

`data`中的`load_equip`对象：

| 字段        | 类型 | 内容            | 备注   |
| ----------- | ---- | --------------- | ------ |
| id          | num  | 装扮ID          |        |
| name        | str  | 装扮名称        |        |
| ver         | num  | 装扮版本        | 时间戳 |
| loading_url | str  | 加载动画图标url |        |

**示例：**

```shell
curl -G 'http://app.bilibili.com/x/resource/show/skin'\
--data-urlencode 'access_key=xxx'\
--data-urlencode 'appkey=1d8b6e7d45233436'\
--data-urlencode 'build=6082000'\
--data-urlencode 'ts=0'\
--data-urlencode 'sign=ea212fea5b00a6278ea6d9938b4c500e'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "user_equip": {
            "id": 2529,
            "name": "初音未来-日版",
            "preview": "http://i0.hdslb.com/bfs/garb/item/2fa16380b31b3cee6c889d645f2699de8e9d9faf.jpg",
            "ver": 1598600025,
            "package_url": "http://i0.hdslb.com/bfs/garb/zip/9c393edea0c7b7b59685a20cd655363ef573a325.zip",
            "package_md5": "7b6d20d998ad543c6a275948a6a1a5fe",
            "data": {
                "color_mode": "light",
                "color": "#212121",
                "color_second_page": "#fff2d2",
                "side_bg_color": "#ffe7ae",
                "tail_color": "#996c00",
                "tail_color_selected": "#0d6872",
                "tail_icon_ani": true,
                "tail_icon_ani_mode": "once"
            }
        },
        "skin_colors": [
            {
                "id": 2,
                "name": "少女粉",
                "is_free": true,
                "color_name": "pink"
            },
            {
                "id": 1,
                "name": "夜间模式",
                "is_free": true,
                "color_name": "black"
            },
            {
                "id": 3,
                "name": "姨妈红",
                "price": 5,
                "color_name": "red"
            },
            {
                "id": 4,
                "name": "咸蛋黄",
                "price": 5,
                "color_name": "yellow"
            },
            {
                "id": 5,
                "name": "早苗绿",
                "price": 5,
                "status": 4,
                "buy_time": 1599219782000,
                "due_time": 1601811782000,
                "color_name": "green"
            },
            {
                "id": 6,
                "name": "胖次蓝",
                "price": 5,
                "color_name": "blue"
            },
            {
                "id": 7,
                "name": "基佬紫",
                "price": 5,
                "color_name": "purple"
            }
        ],
        "load_equip": {
            "id": 2531,
            "name": "初音未来13周年",
            "ver": 1598602035,
            "loading_url": "http://i0.hdslb.com/bfs/garb/item/9b12e8b5cc16a4c2e71e91c43796f09d5e132847.webp"
        }
    }
}
```

</details>