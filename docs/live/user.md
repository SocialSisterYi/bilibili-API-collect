# 直播间用户实用 API

## 获取用户持有的粉丝勋章信息

> ~~https://api.live.bilibili.com/fans_medal/v5/live_fans_medal/iApiMedal~~ (旧)
> https://api.live.bilibili.com/xlive/app-ucenter/v1/user/GetMyMedals

*请求方式：GET*

认证方式：Cookie（SESSDATA）或 APP

**url 参数：**

| 参数名    | 类型 | 内容         | 必要性 | 备注                                              |
| --------- | ---- | ------------ | ------ | ------------------------------------------------- |
| page_size | num  | 每页的数量   | 必要   | 最大为 10，超出 `1002002：参数异常`               |
| page      | num  | 返回结果页数 | 必要   | 两个参数不填返回空，只 page 不填或错误则 500 异常 |

**json 回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-1002002：参数异常<br />-500：服务器异常 |
| message | str  | 错误信息 | 默认为 "0"                                        |
| ttl     | num  | 1        |                                                   |
| data    | obj  | 信息本体 |                                                   |

`data`对象：

| 字段      | 类型  | 内容             | 备注 |
| --------- | ----- | ---------------- | ---- |
| count     | num   | 勋章数量         |      |
| items     | array | 粉丝勋章信息本体 |      |
| page_info | obj   | 页码信息         |      |

`items`数组中的对象：

| 字段               | 类型   | 内容                 | 备注                                   |
| ------------------ | ------ | -------------------- | -------------------------------------- |
| can_delete         | bool   | 可否删除             |                                        |
| day_limit          | num    | 日经验上限（原力值） | eg: 1500                               |
| guard_level        | num    |                      |                                        |
| guard_medal_title  | str    | 加成状态             |                                        |
| intimacy           | num    | 当前已得亲密度       |                                        |
| is_lighted         | num    | 是否点亮             | 0：未点亮<br />1：点亮                   |
| level              | num    | 勋章等级             |                                        |
| medal_name         | str    | 勋章名               |                                        |
| medal_color_border | num    | 勋章边框颜色信息     | 颜色数值为 10 进制的 16 进制值（下同） |
| medal_color_start  | num    | 勋章起始颜色         | 从右往左渐变（20 级+勋章）             |
| medal_color_end    | num    | 勋章结束颜色         | 从右往左渐变（20 级+勋章）             |
| medal_id           | num    | 粉丝勋章 id          |                                        |
| next_intimacy      | num    | 升级所需经验         |                                        |
| today_feed         | num    | 本日亲密度           |                                        |
| roomid             | num    | 直播间房间号         |                                        |
| status             | num    |                      |                                        |
| target_id          | number | up 主 mid            |                                        |
| target_name        | str    | up 主用户名          |                                        |
| uname              | str    | up 主用户名          |                                        |

`page_info`对象：

| 字段       | 类型 | 内容           | 备注 |
| ---------- | ---- | -------------- | ---- |
| total_page | num  | 页码总长度     |      |
| cur_page   | num  | 当前返回的页码 |      |

**示例：**

```shell
curl https://api.live.bilibili.com/xlive/app-ucenter/v1/user/GetMyMedals?page=1&page_size=10 \
-b "SESSDATA=xxx"
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "items": [
      {
        "can_deleted": true,
        "day_limit": 1500,
        "guard_level": 0,
        "guard_medal_title": "未开启加成",
        "intimacy": 9617,
        "is_lighted": 0,
        "level": 11,
        "medal_name": "锦依卫",
        "medal_color_border": 12632256,
        "medal_color_end": 12632256,
        "medal_color_start": 12632256,
        "medal_id": 29245,
        "next_intimacy": 10000,
        "today_feed": 0,
        "roomid": 1546736,
        "status": 0,
        "target_id": 36081646,
        "target_name": "洛天依",
        "uname": "洛天依"
      }
    ],
    "page_info": {
      "cur_page": 1,
      "total_page": 1
    },
    "count": 1
  }
}
```

</details>

## 佩戴勋章

> https://api.live.bilibili.com/xlive/web-room/v1/fansMedal/wear

*请求方式：POST*

**表单参数：**

| 参数名     | 类型 | 内容                    | 必要性 | 备注 |
| ---------- | ---- | ----------------------- | ------ | ---- |
| medal_id   | num  | 勋章 id                 | 必要   |      |
| csrf       | num  | cookie 中 bili_jct 字段 | 必要   |      |
| csrf_token | num  | 同上                    | 必要   |      |

**json 回复：**

根对象：

| 字段    | 类型 | 内容     | 备注           |
| ------- | ---- | -------- | -------------- |
| code    | num  | 返回值   | 0：成功        |
| ttl     | num  | 1        |                |
| message | str  | 错误信息 | 默认为佩戴成功 |
| data    | obj  | 信息本体 | 默认为无       |

**示例：**

佩戴勋章 id 为 1 的勋章

```JavaScript
var madelForm = new FormData();
madelForm.append("medal_id", 1);
madelForm.append("csrf", bili_jct);
madelForm.append("csrf_token", bili_jct);
$.ajax({
    url: "https://api.live.bilibili.com/xlive/web-room/v1/fansMedal/wear",
    type: "POST",
    data: madelForm,
    dataType: "JSON",
    processData: false,
    contentType: false,
    cache: false,
    xhrFields: {
        withCredentials: true
    },
    success: function (){

    }
})
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "佩戴成功",
  "ttl": 1,
  "data": {}
}
```

</details>

## 直播签到

> https://api.live.bilibili.com/xlive/web-ucenter/v1/sign/DoSign

_请求方式：GET_

认证方式：Cookie（SESSDATA）或 APP

**json 回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                   |
| ------- | ---- | -------- | ---------------------- |
| code    | num  | 返回值   | 0：成功<br />1：参数错误 |
| ttl     | num  | 1        |                        |
| message | str  | 错误信息 | 默认为当日签到奖励内容 |
| data    | obj  | 信息本体 | 默认为空               |

## 本月直播签到信息

> https://api.live.bilibili.com/xlive/web-ucenter/v1/sign/WebGetSignInfo

*请求方式：GET*

认证方式：Cookie（SESSDATA）或 APP

**json 回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                   |
| ------- | ---- | -------- | ---------------------- |
| code    | num  | 返回值   | 0：成功 |
| ttl     | num  | 1        |                        |
| message | str  | 错误信息 | 默认为0 |
| data    | obj  | 信息本体 |                |

`data`对象：

| 字段              | 类型  | 内容                         | 备注                   |
| ----------------- | ----- | ---------------------------- | ---------------------- |
| text              | str   | 今日签到奖励信息             | 默认为空               |
| specialText       | str   | 连续签到奖励信息             | 默认为空               |
| status            | num   | 签到状态                     | 0：未签到<br />1：已签到 |
| allDays           | num   | 当月天数                     |                        |
| curMonth          | num   | 当前月                       |                        |
| curYear           | num   | 当前年                       |                        |
| curDay            | num   | 当前日                       |                        |
| curData           | str   | 当前日期（格式化）           | eg: 2023-2-19          |
| hadSignDays       | num   | 当月已签到天数               | 默认为0                |
| newTask           | num   | 作用未知                     | 默认为0                |
| signDaysList      | array | 当月已签到日列表             | 默认为空               |
| signBonusDaysList | array | 当月已签到且有特殊奖励日列表 | 默认为空               |

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "text": "3000点用户经验,2根辣条",
        "specialText": "再签到7天可以获得50根辣条",
        "status": 1,
        "allDays": 28,
        "curMonth": 2,
        "curYear": 2023,
        "curDay": 19,
        "curDate": "2023-2-19",
        "hadSignDays": 13,
        "newTask": 0,
        "signDaysList": [
            2,
            3,
            4,
            5,
            6,
            7,
            11,
            13,
            14,
            15,
            17,
            18,
            19
        ],
        "signBonusDaysList": [
            6
        ]
    }
}
```

</details>

## 上月直播签到信息

> https://api.live.bilibili.com/sign/getLastMonthSignDays

*请求方式：GET*

认证方式：Cookie（SESSDATA）或 APP

**json 回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                   |
| ------- | ---- | -------- | ---------------------- |
| code    | num  | 返回值   | 0：成功 |
| ttl     | num  | 1        |                        |
| message | str  | 错误信息 | 默认为0 |
| data    | obj  | 信息本体 |                |

`data`对象：

| 字段              | 类型  | 内容                         | 备注     |
| ----------------- | ----- | ---------------------------- | -------- |
| days              | num   | 上月天数                     |          |
| month             | num   | 上月月份值                   |          |
| hadSignDays       | num   | 上月已签到天数               | 默认为0  |
| signDaysList      | array | 上月已签到日列表             | 默认为空 |
| signBonusDaysList | array | 上月已签到且有特殊奖励日列表 | 默认为空 |

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "month": 1,
        "days": 31,
        "hadSignDays": 20,
        "signDaysList": [
            1,
            2,
            3,
            6,
            7,
            8,
            10,
            12,
            13,
            14,
            15,
            18,
            20,
            23,
            24,
            25,
            26,
            27,
            30,
            31
        ],
        "signBonusDaysList": [
            7,
            31
        ]
    }
}
```

</details>
