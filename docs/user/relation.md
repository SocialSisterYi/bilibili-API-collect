# 用户关系相关

## 查询关系列表

<img src="../../assets/img/relation.svg" width="100" height="100" />

### 关系列表对象

以下说明中的 “目标用户” 指被查询的用户，“对方” 指返回的关系列表中的用户。

| 字段            | 类型                                        | 内容                       | 备注                                                                                      |
| --------------- | ------------------------------------------- | -------------------------- | ----------------------------------------------------------------------------------------- |
| mid             | num                                         | 用户 mid                   |                                                                                           |
| attribute       | num                                         | 对方对于**自己**的关系属性 | 0：未关注<br />~~1：悄悄关注（现已下线）~~<br />2：已关注<br />6：已互粉<br />128：已拉黑 |
| mtime           | num                                         | 对方关注目标用户时间       | 秒级时间戳<br />互关后刷新                                                                |
| tag             | 默认分组：null<br />存在至少一个分组：array | 目标用户将对方分组到的 id  |                                                                                           |
| special         | num                                         | 目标用户特别关注对方标识   | 0：否<br />1：是                                                                          |
| contract_info   | obj                                         | 契约计划相关信息           |                                                                                           |
| uname           | str                                         | 用户昵称                   |                                                                                           |
| face            | str                                         | 用户头像url                |                                                                                           |
| sign            | str                                         | 用户签名                   |                                                                                           |
| face_nft        | num                                         | 是否为 NFT 头像            | 0：非 NFT 头像<br />1：NFT 头像                                                           |
| official_verify | obj                                         | 认证信息                   |                                                                                           |
| vip             | obj                                         | 会员信息                   |                                                                                           |
| name_render     | 有效时：obj<br />无效时：null               | 昵称渲染信息               |                                                                                           |
| nft_icon        | str                                         | （？）                     |                                                                                           |
| rec_reason      | str                                         | 推荐该用户的原因           | 大多数情况下为空；如：`xxx关注了TA`、`xx粉丝 xx视频`                                      |
| track_id        | str                                         | 内部记录id                 | 大多数情况下为空；如：`up_rec_0.router-main-2021485-5f84c987cf-dv8fg.1746380060327.607`   |
| follow_time     | str                                         | （？）                     |                                                                                           |

`list`中的对象中的`tag`数组：

| 项  | 类型 | 内容                     | 备注 |
| --- | ---- | ------------------------ | ---- |
| 0   | num  | 位于分组 1 的分组 id     |      |
| n   | num  | 位于分组（n+1）的分组 id |      |
| ……  | num  | ……                       | ……   |

`list`中的对象中的`contract_info`对象：

| 字段          | 类型 | 内容                           | 备注                                                        |
| ------------- | ---- | ------------------------------ | ----------------------------------------------------------- |
| is_contract   | bool | 目标用户是否为对方的契约者     | 仅当为 `true` 时才有此项                                    |
| is_contractor | bool | 对方是否为目标用户的契约者     | 仅当为 `true` 时才有此项                                    |
| ts            | num  | 对方成为目标用户的契约者的时间 | 秒级时间戳，仅当 `is_contractor` 项的值为 `true` 时才有此项 |
| user_attr     | num  | 对方作为目标用户的契约者的属性 | 1：老粉<br />否则为原始粉丝<br />仅当有特殊属性时才有此项   |

`list`中的对象中的`official_verify`对象：

| 字段 | 类型 | 内容         | 备注                                      |
| ---- | ---- | ------------ | ----------------------------------------- |
| type | num  | 用户认证类型 | -1：无<br />0：UP 主认证<br />1：机构认证 |
| desc | str  | 用户认证信息 | 无为空                                    |

`list`中的对象中的`vip`对象：

| 字段          | 类型 | 内容         | 备注                                            |
| ------------- | ---- | ------------ | ----------------------------------------------- |
| vipType       | num  | 会员类型     | 0：无<br />1：月度大会员<br />2：年度以上大会员 |
| vipDueDate    | num  | 会员到期时间 | 时间戳 毫秒                                     |
| dueRemark     | str  | （？）       |                                                 |
| accessStatus  | num  | （？）       |                                                 |
| vipStatus     | num  | 大会员状态   | 0：无<br />1：有                                |
| vipStatusWarn | str  | （？）       |                                                 |
| themeType     | num  | （？）       |                                                 |
| label         | obj  | （？）       |                                                 |

`vip`中的`label`对象：

| 字段 | 类型 | 内容   | 备注 |
| ---- | ---- | ------ | ---- |
| path | str  | （？） |      |

### 查询用户粉丝明细（新）

> <https://api.bilibili.com/x/relation/fans>

*请求方式：GET*

认证方式：Cookie（SESSDATA）

本接口只有登录、标头 `referer` 为 `bilibili.com` 下的子域名、UA 不含 `python` 时才会返回列表

- 当请求参数 `from=main` 且目标用户为自己时，返回列表按照**智能推荐算法**排序，**仅返回前 1000 名粉丝**，且返回的列表中不含 `mtime` 字段
- 否则，返回列表按关注时间排序，此时**当前用户仅返回前 1000 名粉丝，其他用户仅返回前 100 名粉丝**，若继续往后查询则返回空列表

**url参数：**

| 参数名         | 类型 | 内容                   | 必要性 | 备注                                                                                                                                            |
| -------------- | ---- | ---------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| vmid           | num  | 目标用户 mid           | 必要   |                                                                                                                                                 |
| ps             | num  | 每页项数               | 非必要 | 默认为 50                                                                                                                                       |
| pn             | num  | 页码                   | 非必要 | 默认为 1                                                                                                                                        |
| offset         | str  | 偏移量                 | 非必要 | 从上次请求的响应数据中的 `data.offset` 获取<br />此项有效且不为 `rcmd` 时会从此偏移量开始返回粉丝列表，忽略参数 `pn`                            |
| last_access_ts | num  | 上次访问粉丝列表的时间 | 非必要 | 秒级时间戳，从[获取自己粉丝列表的未读状态](#获取自己粉丝列表的未读状态)接口获取<br />当按照**智能推荐算法**排序时，会优先展示此时间后关注的粉丝 |
| from           | str  | 请求来源               | 非必要 | 当为 `main` 且目标用户为自己时，粉丝列表按照**智能推荐算法**排序，此时响应数据中的 `data.list` 的成员中的 `rec_reason` 与 `track_id` 为非空     |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                                                                                   |
| ------- | ---- | -------- | ---------------------------------------------------------------------------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-352：请求被拦截<br />-400：请求错误<br />22118：由于该用户隐私设置，粉丝列表不可见 |
| message | str  | 错误信息 | 默认为 0                                                                                                               |
| ttl     | num  | 1        |                                                                                                                        |
| data    | obj  | 信息本体 |                                                                                                                        |

`data`对象：

| 字段       | 类型  | 内容     | 备注                                                                                                  |
| ---------- | ----- | -------- | ----------------------------------------------------------------------------------------------------- |
| list       | array | 明细列表 |                                                                                                       |
| offset     | str   | 偏移量   | 供下次请求使用<br />普通：`{列表最后的粉丝的 mtime}:{列表最后的粉丝的 mid}`<br />智能推荐算法：`rcmd` |
| re_version | num   | （？）   |                                                                                                       |
| total      | num   | 粉丝总数 |                                                                                                       |

`data`中的`list`数组：

| 项  | 类型 | 内容         | 备注                               |
| --- | ---- | ------------ | ---------------------------------- |
| 0   | obj  | 粉丝 1       | 详见 [关系列表对象](#关系列表对象) |
| n   | obj  | 粉丝 （n+1） |                                    |
| ……  | obj  | ……           | ……                                 |

**示例：**

获取用户`mid=293793435`的粉丝明细

```shell
curl -G 'https://api.bilibili.com/x/relation/fans' \
  --data-urlencode 'vmid=293793435' \
  --data-urlencode 'ps=2' \
  --data-urlencode 'pn=1' \
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
    "list": [
      {
        "mid": 289796932,
        "attribute": 0,
        "mtime": 1746199088,
        "tag": null,
        "special": 0,
        "contract_info": {},
        "uname": "Astlinga_星灵",
        "face": "https://i1.hdslb.com/bfs/face/005264524d05c0b8c132acc3ee88bb839351025b.jpg",
        "sign": "",
        "face_nft": 0,
        "official_verify": {
          "type": -1,
          "desc": ""
        },
        "vip": {
          "vipType": 1,
          "vipDueDate": 1734278400000,
          "dueRemark": "",
          "accessStatus": 0,
          "vipStatus": 0,
          "vipStatusWarn": "",
          "themeType": 0,
          "label": {
            "path": "",
            "text": "",
            "label_theme": "",
            "text_color": "",
            "bg_style": 0,
            "bg_color": "",
            "border_color": ""
          },
          "avatar_subscript": 0,
          "nickname_color": "",
          "avatar_subscript_url": ""
        },
        "name_render": {},
        "nft_icon": "",
        "rec_reason": "",
        "track_id": "",
        "follow_time": ""
      },
      {
        "mid": 3494375621396821,
        "attribute": 0,
        "mtime": 1746098997,
        "tag": null,
        "special": 0,
        "contract_info": {},
        "uname": "JSRCode",
        "face": "https://i1.hdslb.com/bfs/face/f6c74700c72d27ae224c5311634b4a3770e3cdcf.jpg",
        "sign": "一个喜欢码代码的高中牲",
        "face_nft": 0,
        "official_verify": {
          "type": -1,
          "desc": ""
        },
        "vip": {
          "vipType": 0,
          "vipDueDate": 0,
          "dueRemark": "",
          "accessStatus": 0,
          "vipStatus": 0,
          "vipStatusWarn": "",
          "themeType": 0,
          "label": {
            "path": "",
            "text": "",
            "label_theme": "",
            "text_color": "",
            "bg_style": 0,
            "bg_color": "",
            "border_color": ""
          },
          "avatar_subscript": 0,
          "nickname_color": "",
          "avatar_subscript_url": ""
        },
        "name_render": {},
        "nft_icon": "",
        "rec_reason": "",
        "track_id": "",
        "follow_time": ""
      }
    ],
    "offset": "1746098997:3494375621396821",
    "re_version": 0,
    "total": 3776
  }
}
```

</details>

### 查询用户粉丝明细（旧）

> <https://api.bilibili.com/x/relation/followers>

*请求方式：GET*

认证方式：Cookie（SESSDATA）或 APP

本接口只有登录、标头 `referer` 为 `bilibili.com` 下的子域名、UA 不含 `python` 时才会返回列表

**本接口仅可返回前 1000 名粉丝**，若继续往后查询则返回空列表

**url参数：**

| 参数名     | 类型 | 内容           | 必要性       | 备注                                 |
| ---------- | ---- | -------------- | ------------ | ------------------------------------ |
| access_key | str  | APP 登录 Token | APP 方式必要 |                                      |
| vmid       | num  | 目标用户 mid   | 必要         |                                      |
| ps         | num  | 每页项数       | 非必要       | 默认为 50                            |
| pn         | num  | 页码           | 非必要       | 默认为 1<br />仅可查看前 1000 名粉丝 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                                                                                   |
| ------- | ---- | -------- | ---------------------------------------------------------------------------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-352：请求被拦截<br />-400：请求错误<br />22118：由于该用户隐私设置，粉丝列表不可见 |
| message | str  | 错误信息 | 默认为 0                                                                                                               |
| ttl     | num  | 1        |                                                                                                                        |
| data    | obj  | 信息本体 |                                                                                                                        |

`data`对象：

| 字段       | 类型  | 内容     | 备注 |
| ---------- | ----- | -------- | ---- |
| list       | array | 明细列表 |      |
| re_version | num   | （？）   |      |
| total      | num   | 粉丝总数 |      |

`data`中的`list`数组：

| 项  | 类型 | 内容         | 备注                               |
| --- | ---- | ------------ | ---------------------------------- |
| 0   | obj  | 粉丝 1       | 详见 [关系列表对象](#关系列表对象) |
| n   | obj  | 粉丝 （n+1） | 按照添加顺序排列                   |
| ……  | obj  | ……           | ……                                 |

**示例：**

获取用户`mid=293793435`的粉丝明细

```shell
curl -G 'https://api.bilibili.com/x/relation/followers' \
  --data-urlencode 'vmid=293793435' \
  --data-urlencode 'ps=2' \
  --data-urlencode 'pn=1' \
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
    "list": [
      {
        "mid": 289796932,
        "attribute": 0,
        "mtime": 1746199088,
        "tag": null,
        "special": 0,
        "contract_info": {},
        "uname": "Astlinga_星灵",
        "face": "https://i1.hdslb.com/bfs/face/005264524d05c0b8c132acc3ee88bb839351025b.jpg",
        "sign": "",
        "face_nft": 0,
        "official_verify": {
          "type": -1,
          "desc": ""
        },
        "vip": {
          "vipType": 1,
          "vipDueDate": 1734278400000,
          "dueRemark": "",
          "accessStatus": 0,
          "vipStatus": 0,
          "vipStatusWarn": "",
          "themeType": 0,
          "label": {
            "path": "",
            "text": "",
            "label_theme": "",
            "text_color": "",
            "bg_style": 0,
            "bg_color": "",
            "border_color": ""
          },
          "avatar_subscript": 0,
          "nickname_color": "",
          "avatar_subscript_url": ""
        },
        "name_render": {},
        "nft_icon": "",
        "rec_reason": "",
        "track_id": "",
        "follow_time": ""
      },
      {
        "mid": 3494375621396821,
        "attribute": 0,
        "mtime": 1746098997,
        "tag": null,
        "special": 0,
        "contract_info": {},
        "uname": "JSRCode",
        "face": "https://i1.hdslb.com/bfs/face/f6c74700c72d27ae224c5311634b4a3770e3cdcf.jpg",
        "sign": "一个喜欢码代码的高中牲",
        "face_nft": 0,
        "official_verify": {
          "type": -1,
          "desc": ""
        },
        "vip": {
          "vipType": 0,
          "vipDueDate": 0,
          "dueRemark": "",
          "accessStatus": 0,
          "vipStatus": 0,
          "vipStatusWarn": "",
          "themeType": 0,
          "label": {
            "path": "",
            "text": "",
            "label_theme": "",
            "text_color": "",
            "bg_style": 0,
            "bg_color": "",
            "border_color": ""
          },
          "avatar_subscript": 0,
          "nickname_color": "",
          "avatar_subscript_url": ""
        },
        "name_render": {},
        "nft_icon": "",
        "rec_reason": "",
        "track_id": "",
        "follow_time": ""
      }
    ],
    "re_version": 0,
    "total": 3776
  }
}
```

</details>

### 查询用户粉丝明细

> <https://line3-h5-mobile-api.biligame.com/game/center/h5/user/relationship/follower_list>

*请求方式：GET*

认证方式：无

返回目标用户前100个粉丝

| 参数名 | 类型 | 内容         | 必要性 | 备注      |
| ------ | ---- | ------------ | ------ | --------- |
| vmid   | num  | 目标用户 mid | 必要   |           |
| ps     | num  | 每页项数     | 非必要 | 默认为 20 |
| pn     | num  | 页码         | 非必要 | 默认为 1  |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注     |
| ------- | ---- | -------- | -------- |
| code    | num  | 返回值   |          |
| message | str  | 错误信息 | 默认为 0 |
| ttl     | num  | 1        |          |
| data    | obj  | 信息本体 |          |
| ts      | num  | 时间戳   |          |

`data.list`对象：

| 字段      | 类型 | 内容    | 备注 |
| --------- | ---- | ------- | ---- |
| mid       | num  | 用户mid |      |
| uname     | str  | 用户名  |      |
| face      | str  | 头像    |      |
| attribute | num  |         |      |


**示例：**

```shell
curl 'https://line3-h5-mobile-api.biligame.com/game/center/h5/user/relationship/follower_list?vmid=504140200&pn=5&ps=21' 
```
<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "data": {
        "list": [
            {
                "mid": "3493078644034173",
                "attribute": 0,
                "uname": "雨天下小雪啦",
                "face": "//i0.hdslb.com/bfs/face/28ad110baa58db9265eca657fcba501589981555.jpg",
                "attestation_display": {
                    "type": 0,
                    "desc": ""
                }
            },
            {
                "mid": "1356049904",
                "attribute": 0,
                "uname": "一埋子",
                "face": "//i2.hdslb.com/bfs/face/84356fd3b183284bc11b011b676432badb4096bf.jpg",
                "attestation_display": {
                    "type": 0,
                    "desc": ""
                }
            },
        ]
    },
    "ts": 1748829553371,
    "request_id": "0684785391344bdc85e4e701bed41b1c"
}
```
</details>

### 获取自己粉丝列表的未读状态

> <https://api.bilibili.com/x/relation/followers/unread/count>

*请求方式：GET*

认证方式：Cookie（SESSDATA）

调用此接口后会重置未读状态

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为 0                      |
| ttl     | num  | 1        |                               |
| data    | obj  | 信息本体 |                               |

`data`对象：

| 字段  | 类型 | 内容                       | 备注                               |
| ----- | ---- | -------------------------- | ---------------------------------- |
| count | num  | 自上次访问后新增的粉丝个数 |                                    |
| time  | num  | 上次访问粉丝列表时间       | 秒级时间戳；当没有新增粉丝时为 `0` |

**示例：**

```shell
curl 'https://api.bilibili.com/x/relation/followers/unread/count' \
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
    "count": 55,
    "time": 1743677191
  }
}
```

</details>

### 查询用户关注明细

> <https://api.bilibili.com/x/relation/followings>

*请求方式：GET*

认证方式：Cookie（SESSDATA）或 APP

本接口只有登录、标头 `referer` 为 `bilibili.com` 下的子域名、UA 不含 `python` 时才会返回列表

登录可看当前用户全部，其他用户仅可查看前 100 个，访问超过 100 个时返回空列表（但 `code` 值为 `0`）

**url参数：**

| 参数名     | 类型 | 内容           | 必要性       | 备注                                                                                |
| ---------- | ---- | -------------- | ------------ | ----------------------------------------------------------------------------------- |
| access_key | str  | APP 登录 Token | APP 方式必要 |                                                                                     |
| vmid       | num  | 目标用户 mid   | 必要         |                                                                                     |
| order_type | str  | 排序方式       | 非必要       | 当目标用户为自己时有效<br />按照关注顺序排列：留空<br />按照最常访问排列：attention |
| ps         | num  | 每页项数       | 非必要       | 默认为 50                                                                           |
| pn         | num  | 页码           | 非必要       | 默认为 1<br />其他用户仅可查看前 100 个                                             |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-352：请求被拦截<br />-400：请求错误<br />22115：用户已设置隐私，无法查看 |
| message | str  | 错误信息 | 默认为 0                                                                                                     |
| ttl     | num  | 1        |                                                                                                              |
| data    | obj  | 信息本体 |                                                                                                              |

`data`对象：

| 字段       | 类型  | 内容     | 备注 |
| ---------- | ----- | -------- | ---- |
| list       | array | 明细列表 |      |
| re_version | num   | （？）   |      |
| total      | num   | 关注总数 |      |

`data`中的`list`数组：

| 项  | 类型 | 内容        | 备注                             |
| --- | ---- | ----------- | -------------------------------- |
| 0   | obj  | 关注1       | 见 [关系列表对象](#关系列表对象) |
| n   | obj  | 关注（n+1） | 按照添加顺序排列                 |
| ……  | obj  | ……          | ……                               |

**示例：**

获取用户`mid=293793435`的关注明细，按照关注顺序

```shell
curl -G 'https://api.bilibili.com/x/relation/followings' \
  --data-urlencode 'vmid=293793435' \
  --data-urlencode 'order_type=' \
  --data-urlencode 'ps=2' \
  --data-urlencode 'pn=1' \
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
    "list": [{
      "mid": 14082,
      "attribute": 2,
      "mtime": 1584271945,
      "tag": null,
      "special": 0,
      "contract_info": {},
      "uname": "山新",
      "face": "https://i0.hdslb.com/bfs/face/74c82caee6d9eb623e56161ea8ed6d68afabfeae.jpg",
      "sign": "都说了是天依爹地，不是妈咪。\r私信有点多回复不过来～商业合作啥的请移步Weibo私信@山新 哦哦哦～",
      "official_verify": {
        "type": 0,
        "desc": "配音演员、声优。洛天依声源提供者。"
      },
      "vip": {
        "vipType": 2,
        "vipDueDate": 1601654400000,
        "dueRemark": "",
        "accessStatus": 0,
        "vipStatus": 1,
        "vipStatusWarn": "",
        "themeType": 0,
        "label": {
          "path": ""
        },
        "avatar_subscript": 1,
        "nickname_color": "#FB7299",
        "avatar_subscript_url": ""
      },
      "name_render": {},
      "nft_icon": "",
      "rec_reason": "",
      "track_id": "",
      "follow_time": ""
    }, {
      "mid": 420831218,
      "attribute": 2,
      "mtime": 1584208169,
      "tag": [207542],
      "special": 0,
      "contract_info": {},
      "uname": "支付宝Alipay",
      "face": "https://i2.hdslb.com/bfs/face/aaf18aeb2d9822e28a590bd8d878572ca8c59e04.jpg",
      "sign": "阿支来了，关注点赞转发投币四连走起！",
      "official_verify": {
        "type": 1,
        "desc": "支付宝官方账号"
      },
      "vip": {
        "vipType": 1,
        "vipDueDate": 1585065600000,
        "dueRemark": "",
        "accessStatus": 0,
        "vipStatus": 1,
        "vipStatusWarn": "",
        "themeType": 0,
        "label": {
          "path": ""
        },
        "avatar_subscript": 1,
        "nickname_color": "#FB7299",
        "avatar_subscript_url": ""
      },
      "name_render": {},
      "nft_icon": "",
      "rec_reason": "",
      "track_id": "",
      "follow_time": ""
    }],
    "re_version": 0,
    "total": 1028
  }
}
```

</details>

### 查询用户关注明细2

> <https://app.biliapi.net/x/v2/relation/followings>

*请求方式：GET*

仅可查看前 5 页，对于已设置可见性隐私关注列表的用户，响应数据中的 `data.list` 为 null，且 `data.total` 为0

**url参数：**

| 参数名 | 类型 | 内容         | 必要性 | 备注                                                        |
| ------ | ---- | ------------ | ------ | ----------------------------------------------------------- |
| vmid   | num  | 目标用户 mid | 必要   |                                                             |
| order  | str  | 排序方式     | 非必要 | 按照降序排列：desc<br />按照升序排列：asc<br />默认降序排列 |
| ps     | num  | 每页项数     | 非必要 | 默认为 50                                                   |
| pn     | num  | 页码         | 非必要 | 默认为 1<br />仅可查看前 5 页                               |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                  |
| ------- | ---- | -------- | ----------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />22007：访问超过 5 页 |
| message | str  | 错误信息 | 默认为 0                                              |
| ttl     | num  | 1        |                                                       |
| data    | obj  | 信息本体 |                                                       |

`data`对象：

| 字段       | 类型  | 内容     | 备注 |
| ---------- | ----- | -------- | ---- |
| list       | array | 明细列表 |      |
| re_version | num   | （？）   |      |
| total      | num   | 关注总数 |      |

`data`中的`list`数组：

| 项  | 类型 | 内容        | 备注                                              |
| --- | ---- | ----------- | ------------------------------------------------- |
| 0   | obj  | 关注 1      | 与 [关系列表对象](#关系列表对象) 数据结构**不同** |
| n   | obj  | 关注（n+1） | 按照添加顺序排列                                  |
| ……  | obj  | ……          | ……                                                |

数组`list`中的对象：

| 字段            | 类型                                        | 内容         | 备注                                    |
| --------------- | ------------------------------------------- | ------------ | --------------------------------------- |
| mid             | num                                         | 用户 mid     |                                         |
| attribute       | num                                         | 关注属性     | 0：未关注<br />2：已关注<br />6：已互粉 |
| mtime           | num                                         | 关注对方时间 | 时间戳<br />互关后刷新                  |
| tag             | 默认分组：null<br />存在至少一个分组：array | 分组 id      |                                         |
| special         | num                                         | 特别关注标志 | 0：否<br />1：是                        |
| uname           | str                                         | 用户昵称     |                                         |
| face            | str                                         | 用户头像 url |                                         |
| sign            | str                                         | 用户签名     |                                         |
| official_verify | obj                                         | 认证信息     |                                         |
| vip             | obj                                         | 会员信息     |                                         |
| live            | num                                         | 是否直播     | 0：未直播<br />1：直播中                |

数组`list`中的对象中的`tag`数组：

| 项  | 类型 | 内容                     | 备注 |
| --- | ---- | ------------------------ | ---- |
| 0   | num  | 位于分组 1 的分组 id     |      |
| n   | num  | 位于分组（n+1）的分组 id |      |
| ……  | num  | ……                       | ……   |

`list`中的对象中的`official_verify`对象：

| 字段 | 类型 | 内容         | 备注                                     |
| ---- | ---- | ------------ | ---------------------------------------- |
| type | num  | 用户认证类型 | -1：无<br />0：UP主认证<br />1：机构认证 |
| desc | str  | 用户认证信息 | 无为空                                   |

`list`中的对象中的`vip`对象：

| 字段          | 类型 | 内容         | 备注                                            |
| ------------- | ---- | ------------ | ----------------------------------------------- |
| vipType       | num  | 会员类型     | 0：无<br />1：月度大会员<br />2：年度以上大会员 |
| vipDueDate    | num  | 会员到期时间 | 时间戳 毫秒                                     |
| dueRemark     | str  | （？）       |                                                 |
| accessStatus  | num  | （？）       |                                                 |
| vipStatus     | num  | 大会员状态   | 0：无<br />1：有                                |
| vipStatusWarn | str  | （？）       |                                                 |
| themeType     | num  | （？）       |                                                 |
| label         | obj  | （？）       |                                                 |

`vip`中的`label`对象：

| 字段 | 类型 | 内容   | 备注 |
| ---- | ---- | ------ | ---- |
| path | str  | （？） |      |

**示例：**

获取用户`mid=293793435`的关注明细，按照关注顺序

```shell
curl -G 'https://app.biliapi.net/x/v2/relation/followings' \
  --data-urlencode 'vmid=293793435' \
  --data-urlencode 'ps=2' \
  --data-urlencode 'pn=1' \
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "list": [{
      "mid": 14082,
      "attribute": 2,
      "mtime": 1584271945,
      "tag": null,
      "special": 0,
      "uname": "山新",
      "face": "https://i0.hdslb.com/bfs/face/74c82caee6d9eb623e56161ea8ed6d68afabfeae.jpg",
      "sign": "都说了是天依爹地，不是妈咪。\r私信有点多回复不过来～商业合作啥的请移步Weibo私信@山新 哦哦哦～",
      "official_verify": {
        "type": 0,
        "desc": "配音演员、声优。洛天依声源提供者。"
      },
      "vip": {
        "vipType": 2,
        "vipDueDate": 1601654400000,
        "dueRemark": "",
        "accessStatus": 0,
        "vipStatus": 1,
        "vipStatusWarn": "",
        "themeType": 0,
        "label": {
          "path": ""
        }
      },
      "live": 0
    }, {
      "mid": 420831218,
      "attribute": 2,
      "mtime": 1584208169,
      "tag": [207542],
      "special": 0,
      "uname": "支付宝Alipay",
      "face": "https://i2.hdslb.com/bfs/face/aaf18aeb2d9822e28a590bd8d878572ca8c59e04.jpg",
      "sign": "阿支来了，关注点赞转发投币四连走起！",
      "official_verify": {
        "type": 1,
        "desc": "支付宝官方账号"
      },
      "vip": {
        "vipType": 1,
        "vipDueDate": 1585065600000,
        "dueRemark": "",
        "accessStatus": 0,
        "vipStatus": 1,
        "vipStatusWarn": "",
        "themeType": 0,
        "label": {
          "path": ""
        }
      },
      "live": 0
    }],
    "re_version": 3228575555,
    "total": 699
  }
}
```

</details>

### 查询用户关注明细3

> <https://line3-h5-mobile-api.biligame.com/game/center/h5/user/relationship/following_list>

*请求方式：GET*

对于设置了可见性隐私关注列表的用户会返回空列表

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注     |
| ------ | ---- | ----------- | ------ | -------- |
| vmid   | num  | 目标用户mid | 必要   |          |
| ps     | num  | 每页项数    | 非必要 | 默认为20 |
| pn     | num  | 页码        | 非必要 | 默认为1  |

**json回复：**

根对象：

| 字段       | 类型 | 内容       | 备注                        |
| ---------- | ---- | ---------- | --------------------------- |
| code       | num  | 返回值     | 0：成功<br />-400：请求错误 |
| message    | str  | 错误信息   | 成功时无此项                |
| data       | obj  | 信息本体   | 失败时无此项                |
| ts         | num  | 当前时间戳 | 单位为毫秒                  |
| request_id | str  | 请求id     |                             |

`data`对象：

| 字段 | 类型  | 内容     | 备注 |
| ---- | ----- | -------- | ---- |
| list | array | 明细列表 |      |

`data`中的`list`数组：

| 项  | 类型 | 内容      | 备注             |
| --- | ---- | --------- | ---------------- |
| 0   | obj  | 关注1     |                  |
| n   | obj  | 关注(n+1) | 按照关注顺序排列 |
| ……  | obj  | ……        | ……               |

数组`list`中的对象：

| 字段              | 类型 | 内容                           | 备注                                    |
| ----------------- | ---- | ------------------------------ | --------------------------------------- |
| mid               | str  | 用户mid                        |                                         |
| attribute         | num  | 对方对于**目标用户**的关注属性 | 0：未关注<br />2：已关注<br />6：已互粉 |
| uname             | str  | 用户昵称                       |                                         |
| face              | str  | 用户头像url                    |                                         |
| attention_display | obj  | 用户认证信息                   |                                         |

`attention_display`对象：

| 字段 | 类型 | 内容     | 备注                                                         |
| ---- | ---- | -------- | ------------------------------------------------------------ |
| type | num  | 是否认证 | 0：无<br />1：UP主专业认证<br />2：UP主认证<br />3：机构认证 |
| desc | str  | 认证信息 |                                                              |

**示例：**

获取用户`mid=293793435`的关注明细

```shell
curl -G 'https://line3-h5-mobile-api.biligame.com/game/center/h5/user/relationship/following_list' \
  --data-urlencode 'vmid=293793435' \
  --data-urlencode 'ps=2' \
  --data-urlencode 'pn=1'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "data": {
    "list": [{
      "mid": "14082",
      "attribute": 2,
      "uname": "山新",
      "face": "https://i0.hdslb.com/bfs/face/74c82caee6d9eb623e56161ea8ed6d68afabfeae.jpg",
      "attestation_display": { "type": 0, "desc": "" }
    }, {
      "mid": "420831218",
      "attribute": 2,
      "uname": "支付宝Alipay",
      "face": "https://i2.hdslb.com/bfs/face/aaf18aeb2d9822e28a590bd8d878572ca8c59e04.jpg",
      "attestation_display": { "type": 3, "desc": "bilibili机构认证：支付宝官方账号" }
    }]
  },
  "ts": 1677410818395,
  "request_id": "d9d541b9f2d24e21821e2d6d2d16c17d"
}
```

</details>

### 搜索关注明细

> <https://api.bilibili.com/x/relation/followings/search>

*请求方式：GET*

认证方式：Cookie（SESSDATA）或 APP

**url参数：**

| 参数名     | 类型 | 内容           | 必要性       | 备注      |
| ---------- | ---- | -------------- | ------------ | --------- |
| access_key | str  | APP 登录 Token | APP 方式必要 |           |
| vmid       | str  | 目标用户 mid   | 必要         |           |
| name       | str  | 搜索关键词     | 非必要       |           |
| ps         | num  | 每页项数       | 非必要       | 默认为 50 |
| pn         | num  | 页码           | 非必要       | 默认为 1  |

根对象：

| 字段    | 类型 | 内容     | 备注                                                  |
| ------- | ---- | -------- | ----------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />22007：访问超过 5 页 |
| message | str  | 错误信息 | 默认为 0                                              |
| ttl     | num  | 1        |                                                       |
| data    | obj  | 信息本体 |                                                       |

`data` 对象：

| 字段       | 类型  | 内容     | 备注 |
| ---------- | ----- | -------- | ---- |
| list       | array | 明细列表 |      |
| re_version | num   | （？）   |      |
| total      | num   | 关注总数 |      |

`data`中的`list`数组：

| 项  | 类型 | 内容            | 备注                             |
| --- | ---- | --------------- | -------------------------------- |
| 0   | obj  | 匹配项目 1      | 见 [关系列表对象](#关系列表对象) |
| n   | obj  | 匹配项目（n+1） | 按照添加顺序排列                 |
| ……  | obj  | ……              | ……                               |

**示例：**

搜索我的关注列表中关键词`warma`

```shell
curl -G 'https://api.bilibili.com/x/relation/followings/search' \
  --data-urlencode 'vmid=293793435' \
  --data-urlencode 'name=warma' \
  --data-urlencode 'ps=2' \
  --data-urlencode 'pn=1' \
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
    "list": [
      {
        "mid": 53456,
        "attribute": 2,
        "mtime": 1586415053,
        "tag": [-10],
        "special": 1,
        "uname": "Warma",
        "face": "https://i2.hdslb.com/bfs/face/c1bbee6d255f1e7fc434e9930f0f288c8b24293a.jpg",
        "sign": "我是沃玛，做点傻开心的视频。日常发在微博：@_warma_ ",
        "official_verify": {
          "type": 0,
          "desc": "bilibili 知名UP主"
        },
        "vip": {
          "vipType": 2,
          "vipDueDate": 1637424000000,
          "dueRemark": "",
          "accessStatus": 0,
          "vipStatus": 1,
          "vipStatusWarn": "",
          "themeType": 0,
          "label": {
            "path": ""
          }
        }
      }
    ],
    "total": 1
  }
}
```

</details>

### 查询共同关注明细

> <https://api.bilibili.com/x/relation/same/followings>

*请求方式：GET*

认证方式：Cookie（SESSDATA）或 APP

**url参数：**

| 参数名     | 类型 | 内容           | 必要性       | 备注      |
| ---------- | ---- | -------------- | ------------ | --------- |
| access_key | str  | APP 登录 Token | APP 方式必要 |           |
| vmid       | num  | 目标用户 mid   | 必要         |           |
| ps         | num  | 每页项数       | 非必要       | 默认为 50 |
| pn         | num  | 页码           | 非必要       | 默认为 1  |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为 0                                          |
| ttl     | num  | 1        |                                                   |
| data    | obj  | 信息本体 |                                                   |

`data` 对象：

| 字段       | 类型  | 内容     | 备注 |
| ---------- | ----- | -------- | ---- |
| list       | array | 明细列表 |      |
| re_version | num   | （？）   |      |
| total      | num   | 关注总数 |      |

`data`中的`list`数组：

| 项  | 类型 | 内容            | 备注                             |
| --- | ---- | --------------- | -------------------------------- |
| 0   | obj  | 共同关注 1      | 见 [关系列表对象](#关系列表对象) |
| n   | obj  | 共同关注（n+1） | 按照添加顺序排列                 |
| ……  | obj  | ……              | ……                               |

**示例：**

获取自己与用户`mid=2`的共同关注明细

```shell
curl -G 'https://api.bilibili.com/x/relation/same/followings' \
  --data-urlencode 'vmid=2' \
  --data-urlencode 'ps=2' \
  --data-urlencode 'pn=1' \
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
    "list": [
      {
        "mid": 116683,
        "attribute": 2,
        "mtime": 1564627532,
        "tag": null,
        "special": 0,
        "uname": "=咬人猫=",
        "face": "https://i0.hdslb.com/bfs/face/8fad84a4470f3d894d8f0dc95555ab8f2cb10a83.jpg",
        "sign": "面瘫女仆酱~小粗腿~事业线什么的！！吐槽你就输了！喵~",
        "official_verify": {
          "type": 0,
          "desc": "bilibili 2019百大UP主、高能联盟成员"
        },
        "vip": {
          "vipType": 2,
          "vipDueDate": 1618934400000,
          "dueRemark": "",
          "accessStatus": 0,
          "vipStatus": 1,
          "vipStatusWarn": "",
          "themeType": 0,
          "label": {
            "path": ""
          }
        }
      },
      {
        "mid": 517717593,
        "attribute": 2,
        "mtime": 1592126052,
        "tag": [207542],
        "special": 0,
        "uname": "上海爱丽丝幻乐团",
        "face": "https://i0.hdslb.com/bfs/face/851a9191cbe93e66304d7577c0f6f83834e52109.jpg",
        "sign": "日本同人社团 上海爱丽丝幻乐团",
        "official_verify": {
          "type": 0,
          "desc": "上海爱丽丝幻乐团官方账号"
        },
        "vip": {
          "vipType": 1,
          "vipDueDate": 1593792000000,
          "dueRemark": "",
          "accessStatus": 0,
          "vipStatus": 0,
          "vipStatusWarn": "",
          "themeType": 0,
          "label": {
            "path": ""
          }
        }
      }
    ],
    "re_version": 2498273968,
    "total": 38
  }
}
```

</details>

### 查询悄悄关注明细

> <https://api.bilibili.com/x/relation/whispers>

*请求方式：GET*

认证方式：Cookie（SESSDATA）或 APP

**url参数：**

| 参数名     | 类型 | 内容           | 必要性       | 备注 |
| ---------- | ---- | -------------- | ------------ | ---- |
| access_key | str  | APP 登录 Token | APP 方式必要 |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        |                                                   |
| data    | obj  | 信息本体 |                                                   |

`data` 对象：

| 字段       | 类型  | 内容     | 备注 |
| ---------- | ----- | -------- | ---- |
| list       | array | 明细列表 |      |
| re_version | num   | （？）   |      |

`data`中的`list`数组：

| 项  | 类型 | 内容            | 备注                             |
| --- | ---- | --------------- | -------------------------------- |
| 0   | obj  | 悄悄关注 1      | 见 [关系列表对象](#关系列表对象) |
| n   | obj  | 悄悄关注（n+1） | 按照操作顺序排列                 |
| ……  | obj  | ……              | ……                               |

**示例：**

```shell
curl -G 'https://api.bilibili.com/x/relation/whispers' \
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
    "list": [
      {
        "mid": 178429408,
        "attribute": 1,
        "mtime": 1605972105,
        "tag": null,
        "special": 0,
        "uname": "老弟一号",
        "face": "https://i2.hdslb.com/bfs/face/21426275f3d3149b96b88783275205ba574c09e3.jpg",
        "sign": "萌新硬件玩家，前垃圾佬～(◦˙▽˙◦某宝店 老弟一号 粉丝群679540094商务合作V13869651328",
        "official_verify": {
          "type": 0,
          "desc": "知识领域优质UP主"
        },
        "vip": {
          "vipType": 2,
          "vipDueDate": 1632499200000,
          "dueRemark": "",
          "accessStatus": 0,
          "vipStatus": 1,
          "vipStatusWarn": "",
          "themeType": 0,
          "label": {
            "path": ""
          }
        }
      }
    ],
    "re_version": 2137574562
  }
}
```

</details>

### 查询互相关注明细

> <https://api.bilibili.com/x/relation/friends>

*请求方式：GET*

认证方式：Cookie（SESSDATA）或 APP

查询与自己互关的用户明细，可看全部

**url参数：**

| 参数名     | 类型 | 内容           | 必要性       | 备注 |
| ---------- | ---- | -------------- | ------------ | ---- |
| access_key | str  | APP 登录 Token | APP 方式必要 |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        |                                                   |
| data    | obj  | 信息本体 |                                                   |

`data` 对象：

| 字段       | 类型  | 内容     | 备注 |
| ---------- | ----- | -------- | ---- |
| list       | array | 明细列表 |      |
| re_version | num   | （？）   |      |

`data`中的`list`数组：

| 项  | 类型 | 内容        | 备注                             |
| --- | ---- | ----------- | -------------------------------- |
| 0   | obj  | 互关 1      | 见 [关系列表对象](#关系列表对象) |
| n   | obj  | 互关（n+1） | 按照添加顺序排列                 |
| ……  | obj  | ……          | ……                               |

**示例：**

```shell
curl -G 'https://api.bilibili.com/x/relation/friends' \
  -b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```jsonc
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "list": [
      {
        "mid": 596000,
        "attribute": 6,
        "mtime": 1685110154,
        "tag": null,
        "special": 0,
        "uname": "椛椛在睡觉",
        "face": "https://i2.hdslb.com/bfs/face/365c1ef3b2a3afe21d6832796338fad5119b2592.jpg",
        "sign": "欢迎来找椛椛玩~ https://blogs.momiji-jin.com/",
        "face_nft": 0,
        "official_verify": {
          "type": -1,
          "desc": ""
        },
        "vip": {
          "vipType": 2,
          "vipDueDate": 1702742400000,
          "dueRemark": "",
          "accessStatus": 0,
          "vipStatus": 1,
          "vipStatusWarn": "",
          "themeType": 0,
          "label": {
            "path": "",
            "text": "年度大会员",
            "label_theme": "annual_vip",
            "text_color": "#FFFFFF",
            "bg_style": 1,
            "bg_color": "#FB7299",
            "border_color": ""
          },
          "avatar_subscript": 1,
          "nickname_color": "#FB7299",
          "avatar_subscript_url": ""
        },
        "nft_icon": "",
        "rec_reason": "",
        "track_id": ""
      },
      {
        "mid": 24022863,
        "attribute": 6,
        "mtime": 1685026230,
        "tag": [-10],
        "special": 1,
        "uname": "黄禄轩电脑专用账号",
        "face": "https://i0.hdslb.com/bfs/face/a70ec7d2a3822980a915ef4b30371af0cbc79132.jpg",
        "sign": "若要私信，请私信「黄禄轩手机专用账号」http://space.bilibili.com/17640193/，群:410311648",
        "face_nft": 0,
        "official_verify": {
          "type": -1,
          "desc": ""
        },
        "vip": {
          "vipType": 2,
          "vipDueDate": 1686412800000,
          "dueRemark": "",
          "accessStatus": 0,
          "vipStatus": 1,
          "vipStatusWarn": "",
          "themeType": 0,
          "label": {
            "path": "",
            "text": "年度大会员",
            "label_theme": "annual_vip",
            "text_color": "#FFFFFF",
            "bg_style": 1,
            "bg_color": "#FB7299",
            "border_color": ""
          },
          "avatar_subscript": 1,
          "nickname_color": "#FB7299",
          "avatar_subscript_url": ""
        },
        "nft_icon": "",
        "rec_reason": "",
        "track_id": ""
      },
      {
        "mid": 85438718,
        "attribute": 6,
        "mtime": 1684759843,
        "tag": [194110],
        "special": 0,
        "uname": "忘忧北萱草Official",
        "face": "https://i2.hdslb.com/bfs/face/68d8cba01aab907dbb2cf2e17074f20947156237.jpg",
        "sign": "现已加入 OrangeFire 豪华套餐！",
        "face_nft": 0,
        "official_verify": {
          "type": -1,
          "desc": ""
        },
        "vip": {
          "vipType": 2,
          "vipDueDate": 1691683200000,
          "dueRemark": "",
          "accessStatus": 0,
          "vipStatus": 1,
          "vipStatusWarn": "",
          "themeType": 0,
          "label": {
            "path": "",
            "text": "年度大会员",
            "label_theme": "annual_vip",
            "text_color": "#FFFFFF",
            "bg_style": 1,
            "bg_color": "#FB7299",
            "border_color": ""
          },
          "avatar_subscript": 1,
          "nickname_color": "#FB7299",
          "avatar_subscript_url": ""
        },
        "nft_icon": "",
        "rec_reason": "",
        "track_id": ""
      },
      {
        "mid": 41620134,
        "attribute": 6,
        "mtime": 1684759649,
        "tag": null,
        "special": 0,
        "uname": "Tiggy_Chan",
        "face": "https://i0.hdslb.com/bfs/face/8c8d9f43eda207f8cb8503bfdf6cc3802a1cd6c1.jpg",
        "sign": "此号只发科技类视频，娱乐类转至：虎子酱233",
        "face_nft": 0,
        "official_verify": {
          "type": -1,
          "desc": ""
        },
        "vip": {
          "vipType": 1,
          "vipDueDate": 1669219200000,
          "dueRemark": "",
          "accessStatus": 0,
          "vipStatus": 0,
          "vipStatusWarn": "",
          "themeType": 0,
          "label": {
            "path": "",
            "text": "",
            "label_theme": "",
            "text_color": "",
            "bg_style": 0,
            "bg_color": "",
            "border_color": ""
          },
          "avatar_subscript": 0,
          "nickname_color": "",
          "avatar_subscript_url": ""
        },
        "nft_icon": "",
        "rec_reason": "",
        "track_id": ""
      },
      // ……
    ],
    "re_version": 0
  }
}
```

</details>

### 查询黑名单明细

> <https://api.bilibili.com/x/relation/blacks>

*请求方式：GET*

认证方式：Cookie（SESSDATA）或 APP

**url参数：**

| 参数名     | 类型 | 内容           | 必要性       | 备注                                    |
| ---------- | ---- | -------------- | ------------ | --------------------------------------- |
| access_key | str  | APP 登录 Token | APP 方式必要 |                                         |
| ps         | num  | 每页项数       | 非必要       | 默认为 50，且最多为50，大于50则按50输出 |
| pn         | num  | 页码           | 非必要       | 默认为 1                                |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为 0                                          |
| ttl     | num  | 1        |                                                   |
| data    | obj  | 信息本体 |                                                   |

`data` 对象：

| 字段       | 类型  | 内容         | 备注 |
| ---------- | ----- | ------------ | ---- |
| list       | array | 明细列表     |      |
| re_version | num   | （？）       |      |
| total      | num   | 黑名单总计数 |      |

`data`中的`list`数组：

| 项  | 类型 | 内容           | 备注                             |
| --- | ---- | -------------- | -------------------------------- |
| 0   | obj  | 黑名单 1       | 见 [关系列表对象](#关系列表对象) |
| n   | obj  | 黑名单 （n+1） | 按照添加顺序排列                 |
| ……  | obj  | ……             | ……                               |

**示例：**

获取黑名单明细

```shell
curl -G 'https://api.bilibili.com/x/relation/blacks' \
  --data-urlencode 'ps=2' \
  --data-urlencode 'pn=1' \
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
    "list": [
      {
        "mid": 22179720,
        "attribute": 128,
        "mtime": 1603032789,
        "tag": null,
        "special": 0,
        "uname": "咩2016",
        "face": "https://i0.hdslb.com/bfs/face/41fe435a7e62eae605a5908652f32f3afff2ae74.jpg",
        "sign": "",
        "official_verify": {
          "type": 0,
          "desc": ""
        },
        "vip": {
          "vipType": 0,
          "vipDueDate": 0,
          "dueRemark": "",
          "accessStatus": 0,
          "vipStatus": 0,
          "vipStatusWarn": "",
          "themeType": 0,
          "label": {
            "path": ""
          }
        }
      },
      {
        "mid": 16174624,
        "attribute": 128,
        "mtime": 1603026420,
        "tag": null,
        "special": 0,
        "uname": "其实死亡没有那么痛",
        "face": "https://i2.hdslb.com/bfs/face/79257f5a2e7194a71337ccca5927afba7706d316.jpg",
        "sign": "等我，我马上就来",
        "official_verify": {
          "type": 0,
          "desc": ""
        },
        "vip": {
          "vipType": 0,
          "vipDueDate": 0,
          "dueRemark": "",
          "accessStatus": 0,
          "vipStatus": 0,
          "vipStatusWarn": "",
          "themeType": 0,
          "label": {
            "path": ""
          }
        }
      }
    ],
    "re_version": 897205356,
    "total": 2
  }
}
```

</details>

## 操作关系

<img src="../../assets/img/follow.svg" width="200" height="100" />

### 操作用户关系

> <https://api.bilibili.com/x/relation/modify>

*请求方式：POST*

认证方式：Cookie（SESSDATA）或 APP

**正文参数（application/x-www-form-urlencoded）：**

| 参数名     | 类型 | 内容                      | 必要性          | 备注                                                                                                                                                                                                                                                                                                                                                                                |
| ---------- | ---- | ------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| access_key | str  | APP 登录 Token            | APP 方式必要    |                                                                                                                                                                                                                                                                                                                                                                                     |
| fid        | num  | 目标用户mid               | 必要            |                                                                                                                                                                                                                                                                                                                                                                                     |
| act        | num  | 操作代码                  | 必要            | **操作代码见下表**                                                                                                                                                                                                                                                                                                                                                                  |
| re_src     | num  | 关注来源代码              | 非必要          | 包月充电：1<br />个人空间：11<br />视频：14<br />评论区：15<br />视频播放器结束页面：17<br />H5推荐关注：58<br />H5关注列表：106<br />H5粉丝列表：107<br />专栏：115<br />私信：118<br />搜索：120<br />视频播放器左上角关注按钮：164<br />H5共同关注：167<br />创作激励计划：192<br />活动页面：222<br />联合投稿视频：229<br />消息中心点赞详情：235<br />视频播放器关注弹幕：245 |
| csrf       | str  | CSRF Token（位于 Cookie） | Cookie 方式必要 |                                                                                                                                                                                                                                                                                                                                                                                     |

操作代码`act`：

| 代码 | 含义         | 备注                                                 |
| ---- | ------------ | ---------------------------------------------------- |
| 1    | 关注         | 无法对已注销或不存在的用户进行此操作                 |
| 2    | 取关         |                                                      |
| 3    | 悄悄关注     | **现已下线**，使用本操作代码请求接口会提示“请求错误” |
| 4    | 取消悄悄关注 |                                                      |
| 5    | 拉黑         | 无法对已注销或不存在的用户进行此操作                 |
| 6    | 取消拉黑     |                                                      |
| 7    | 踢出粉丝     |                                                      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------- | ---- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-111：csrf校验失败<br />-400：请求错误<br />22001：不能对自己进行此操作<br />22002：因对方隐私设置，你还不能关注<br />22003：关注失败，请将该用户移除黑名单之后再试<br />22008：黑名单达到上限<br />22009：关注失败，已达关注上限<br />22013：账号已注销，无法完成操作<br />22014：已经关注用户，无法重复关注<br />22120：重复加入黑名单<br />40061：用户不存在 |
| message | str  | 错误信息 | 默认为0                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ttl     | num  | 1        |                                                                                                                                                                                                                                                                                                                                                                                                                          |

**示例：**

关注`mid=14082`的用户

```shell
curl 'https://api.bilibili.com/x/relation/modify' \
  --data-urlencode 'fid=14082' \
  --data-urlencode 'act=1' \
  --data-urlencode 're_src=11' \
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

### 批量操作用户关系

> <https://api.bilibili.com/x/relation/batch/modify>

*请求方式：POST*

认证方式：Cookie（SESSDATA）或 APP

此接口只支持关注和拉黑操作

**正文参数（application/x-www-form-urlencoded）：**

| 参数名     | 类型 | 内容                      | 必要性          | 备注                                                        |
| ---------- | ---- | ------------------------- | --------------- | ----------------------------------------------------------- |
| access_key | str  | APP 登录 Token            | APP 方式必要    |                                                             |
| fids       | nums | 目标用户 mid 列表         | 必要            | 每个成员之间用 `,` 间隔，最多 50 个成员，不能包含自己的 mid |
| act        | num  | 操作代码                  | 必要            | 同上<br />仅可为 1 或 5，故只能进行批量关注和拉黑           |
| re_src     | num  | 关注来源代码              | 非必要          | 同上                                                        |
| csrf       | str  | CSRF Token（位于 Cookie） | Cookie 方式必要 |                                                             |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                                                                                       |
| ------- | ---- | -------- | -------------------------------------------------------------------------------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-111：csrf校验失败<br />-400：请求错误<br />22003：用户位于黑名单 |
| message | str  | 错误信息 | 默认为0                                                                                                                    |
| ttl     | num  | 1        |                                                                                                                            |
| data    | obj  | 数据本体 |                                                                                                                            |

`data`对象：

| 字段        | 类型  | 内容                | 备注 |
| ----------- | ----- | ------------------- | ---- |
| failed_fids | array | 操作失败的 mid 列表 |      |

`data`中的`failed_fids`数组：

| 项  | 类型 | 内容                  | 备注 |
| --- | ---- | --------------------- | ---- |
| 0   | num  | 操作失败的 mid 1      |      |
| n   | num  | 操作失败的 mid（n+1） |      |
| ……  | num  | ……                    | ……   |

**示例：**

批量关注`mid=1,2,3,4,5`的用户

```shell
curl 'https://api.bilibili.com/x/relation/batch/modify' \
  --data-urlencode 'fid=1,2,3,4,5' \
  --data-urlencode 'act=1' \
  --data-urlencode 're_src=11' \
  --data-urlencode 'csrf=xxx' \
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
    "failed_fids": []
  }
}
```

</details>

## 查询关系属性

### 关系属性对象

| 字段      | 类型                                        | 内容         | 备注                                                                                    |
| --------- | ------------------------------------------- | ------------ | --------------------------------------------------------------------------------------- |
| mid       | num                                         | 目标用户 mid |                                                                                         |
| attribute | num                                         | 关系属性     | 0：未关注<br />~~1：悄悄关注（已弃用）~~<br />2：已关注<br />6：已互粉<br />128：已拉黑 |
| mtime     | num                                         | 关注对方时间 | 时间戳<br />未关注为 0                                                                  |
| tag       | 默认分组：null<br />存在至少一个分组：array | 分组 id      |                                                                                         |
| special   | num                                         | 特别关注标志 | 0：否<br />1：是                                                                        |

`tag`数组：

| 项  | 类型 | 内容                  | 备注 |
| --- | ---- | --------------------- | ---- |
| 0   | num  | 位于分组 1 的分组     |      |
| n   | num  | 位于分组（n+1）的分组 |      |
| ……  | num  | ……                    | ……   |

### 查询用户与自己关系（仅关注）

> <https://api.bilibili.com/x/relation>

*请求方式：GET*

认证方式：Cookie（SESSDATA）或 APP

**url参数：**

| 参数名     | 类型 | 内容           | 必要性       | 备注 |
| ---------- | ---- | -------------- | ------------ | ---- |
| access_key | str  | APP 登录 Token | APP 方式必要 |      |
| fid        | num  | 目标用户 mid   | 必要         |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        |                                                   |
| data    | obj  | 信息本体 | 详见 [关系属性对象](#关系属性对象)                |

**示例：**

可得对于`mid=258150656`的用户，在`2018/10/28 0:51:41`时关注，且设为特别关注，并位于为`-10`分组中

```shell
curl -G 'https://api.bilibili.com/x/relation' \
  --data-urlencode 'fid=258150656' \
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
    "mid": 258150656,
    "attribute": 2,
    "mtime": 1540659101,
    "tag": [-10],
    "special": 1
  }
}
```

</details>

### 查询用户与自己关系（互相关系）

> 接口1：<https://api.bilibili.com/x/space/wbi/acc/relation>

> 接口2：<https://api.bilibili.com/x/web-interface/relation>

*请求方式：GET*

认证方式：Cookie（SESSDATA）或 APP

鉴权方式（仅接口1）：[Wbi 签名](../misc/sign/wbi.md)

~~该接口的旧版 API ：<https://api.bilibili.com/x/space/acc/relation>~~（已废弃，不建议使用）

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注                                 |
| ---------- | ---- | ------------ | ----------- | ------------------------------------ |
| access_key | str  | APP登录Token | APP方式必要 |                                      |
| mid        | num  | 目标用户mid  | 必要        |                                      |
| w_rid      | str  | Wbi 签名     | 仅接口1必要 | 详见 [Wbi 签名](../misc/sign/wbi.md) |
| wts        | num  | 当前时间戳   | 仅接口1必要 | 详见 [Wbi 签名](../misc/sign/wbi.md) |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        |                                                   |
| data    | obj  | 信息本体 |                                                   |

`data`对象：

| 字段        | 类型 | 内容                       | 备注                               |
| ----------- | ---- | -------------------------- | ---------------------------------- |
| relation    | obj  | 目标用户对于当前用户的关系 | 详见 [关系属性对象](#关系属性对象) |
| be_relation | obj  | 当前用户对于目标用户的关系 | 详见 [关系属性对象](#关系属性对象) |

**示例：**

可得对于`mid=15858903`的用户，在`2019/1/24 14:24:19`时关注了对方，且互相关注，自己将对方特别关注，并同时位于为`-10`和`194110`的分组中，对方也将自己设为特别关注，并同时位于为`-10`和`56502`的分组中（虽然我看不到）

Wbi 签名的 `wts`、`w_rid`生成方式详见 [Wbi 签名](../misc/sign/wbi.md) 文档

```shell
curl -G 'https://api.bilibili.com/x/space/acc/relation' \
  --data-urlencode 'mid=15858903' \
  --data-urlencode 'wts=1686015899' \
  --data-urlencode 'w_rid=e10a3c566c9be80a7cebe7bcdf262588' \
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
    "relation": {
      "mid": 15858903,
      "attribute": 6,
      "mtime": 1548311059,
      "tag": [-10, 194110, 248468],
      "special": 1
    },
    "be_relation": {
      "mid": 293793435,
      "attribute": 6,
      "mtime": 1548311059,
      "tag": [56502, -10],
      "special": 1
    }
  }
}
```

</details>

### 批量查询用户与自己关系

> <https://api.bilibili.com/x/relation/relations>

*请求方式：GET*

认证方式：Cookie（SESSDATA）或 APP

**url参数：**

| 参数名     | 类型 | 内容           | 必要性       | 备注                          |
| ---------- | ---- | -------------- | ------------ | ----------------------------- |
| access_key | str  | APP 登录 Token | APP 方式必要 |                               |
| fids       | nums | 目标用户 mid   | 必要         | 每个之间用`,`间隔，无成员限制 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        |                                                   |
| data    | obj  | 信息本体 |                                                   |

`data`对象：

| 字段      | 类型 | 内容       | 备注                               |
| --------- | ---- | ---------- | ---------------------------------- |
| {用户mid} | obj  | 关注的用户 | 详见 [关系属性对象](#关系属性对象) |
| ……        | obj  | ……         | 下同                               |

**示例：**

批量查询`mid=1,2,3,4,5`的关系

```shell
curl -G 'https://api.bilibili.com/x/relation/relations' \
  --data-urlencode 'fid=258150656' \
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
    "1": {
      "mid": 1,
      "attribute": 2,
      "mtime": 1601654227,
      "tag": null,
      "special": 0
    },
    "2": {
      "mid": 2,
      "attribute": 2,
      "mtime": 1601654225,
      "tag": null,
      "special": 0
    }
  }
}
```

</details>

## 关注分组相关

分组 id 特殊值：

| id  | 含义     |
| --- | -------- |
| 0   | 默认分组 |
| -10 | 特别关心 |

### 查询关注分组列表

> <https://api.bilibili.com/x/relation/tags>

*请求方式：GET*

认证方式：Cookie（SESSDATA）或 APP

**url参数：**

| 参数名     | 类型 | 内容           | 必要性       | 备注 |
| ---------- | ---- | -------------- | ------------ | ---- |
| access_key | str  | APP 登录 Token | APP 方式必要 |      |

**json回复：**

根对象：

| 字段    | 类型  | 内容     | 备注                          |
| ------- | ----- | -------- | ----------------------------- |
| code    | num   | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str   | 错误信息 | 默认为 0                      |
| ttl     | num   | 1        |                               |
| data    | array | 分组列表 |                               |

`data`数组：

| 项  | 类型 | 内容        | 备注 |
| --- | ---- | ----------- | ---- |
| 0   | obj  | 分组 1      |      |
| n   | obj  | 分组（n+1） |      |
| ……  | num  | ……          | ……   |

数组`data`中的对象：

| 字段  | 类型 | 内容       | 备注                           |
| ----- | ---- | ---------- | ------------------------------ |
| tagid | num  | 分组 id    | -10：特别关注<br />0：默认分组 |
| name  | str  | 分组名称   |                                |
| count | num  | 分组成员数 |                                |
| tip   | str  | 提示信息   |                                |

**示例：**

查询所有的分组的名字以及id

```shell
curl 'https://api.bilibili.com/x/relation/tags' \
  -b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```jsonc
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": [
     {
      "tagid": -10,
      "name": "特别关注",
      "count": 19,
      "tip": "第一时间收到该分组下用户更新稿件的通知"
    },
    {
      "tagid": 0,
      "name": "默认分组",
      "count": 340,
      "tip": ""
    },
    {
      "tagid": 194110,
      "name": "基友们",
      "count": 127,
      "tip": ""
    },
    {
      "tagid": 194111,
      "name": "我的同学",
      "count": 22,
      "tip": ""
    },
    // ……
  ]
}
```

</details>

### 查询关注分组明细

> <https://api.bilibili.com/x/relation/tag>

*请求方式：GET*

认证方式：Cookie（SESSDATA）或 APP

只可查询属于自己的分组

**url参数：**

| 参数名     | 类型 | 内容           | 必要性       | 备注                                                    |
| ---------- | ---- | -------------- | ------------ | ------------------------------------------------------- |
| access_key | str  | APP 登录 Token | APP 方式必要 |                                                         |
| tagid      | num  | 分组 id        | 必要         | 0：默认分组<br />-10：特别关注<br />-20：所有           |
| order_type | str  | 排序方式       | 非必要       | 按照关注顺序排列：留空<br />按照最常访问排列：attention |
| ps         | num  | 每页项数       | 非必要       | 默认为 20                                               |
| pn         | num  | 页数           | 非必要       | 默认为1                                                 |

**json回复：**

根对象：

| 字段    | 类型  | 内容     | 备注                                                                       |
| ------- | ----- | -------- | -------------------------------------------------------------------------- |
| code    | num   | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误<br />22104：该分组不存在 |
| message | str   | 错误信息 | 默认为 0                                                                   |
| ttl     | num   | 1        |                                                                            |
| data    | array | 成员列表 |                                                                            |

`data`数组：

| 项  | 类型 | 内容            | 备注                                    |
| --- | ---- | --------------- | --------------------------------------- |
| 0   | obj  | 成员信息 1      | 与[关系列表对象](#关系列表对象)**不同** |
| n   | obj  | 成员信息（n+1） | 按照添加顺序排序                        |
| ……  | obj  | ……              | ……                                      |

`data` 数组中的对象：

| 字段            | 类型 | 内容            | 备注        |
| --------------- | ---- | --------------- | ----------- |
| mid             | num  | 用户mid         |             |
| attribute       | num  | 关系属性        | 恒为 `0`    |
| tag             | null | 关注分组id      | 恒为 `null` |
| special         | num  | 是否特别关注    | 恒为 `0`    |
| contract_info   | obj  | 契约计划信息    |             |
| uname           | str  | 用户昵称        |             |
| face            | str  | 用户头像url     |             |
| sign            | str  | 用户签名        |             |
| face_nft        | num  | 是否为 NFT 头像 |             |
| official_verify | obj  | 认证信息        | 具体见下    |
| vip             | obj  | 会员信息        |             |
| live            | obj  | 直播状态        | 具体见下    |
| nft_icon        | str  | （？）          |             |
| rec_reason      | str  | （？）          |             |
| track_id        | str  | （？）          |             |
| follow_time     | str  | （？）          |             |

`data`中的对象中的`official_verify`对象：

| 字段 | 类型 | 内容         | 备注                                      |
| ---- | ---- | ------------ | ----------------------------------------- |
| type | num  | 用户认证类型 | -1：无<br />0：UP 主认证<br />1：机构认证 |
| desc | str  | 用户认证信息 | 无为空                                    |

`data`中的对象中的`vip`对象：

| 字段          | 类型 | 内容         | 备注                                            |
| ------------- | ---- | ------------ | ----------------------------------------------- |
| vipType       | num  | 会员类型     | 0：无<br />1：月度大会员<br />2：年度以上大会员 |
| vipDueDate    | num  | 会员到期时间 | 时间戳 毫秒                                     |
| dueRemark     | str  | （？）       |                                                 |
| accessStatus  | num  | （？）       |                                                 |
| vipStatus     | num  | 大会员状态   | 0：无<br />1：有                                |
| vipStatusWarn | str  | （？）       |                                                 |
| themeType     | num  | （？）       |                                                 |
| label         | obj  | （？）       |                                                 |

`data`数组中的对象中的`live`对象：

| 字段        | 类型 | 内容     | 备注                     |
| ----------- | ---- | -------- | ------------------------ |
| live_status | num  | 直播状态 | 0：未开播<br />1：已直播 |
| jump_url    | str  | 直播链接 |                          |

`data`数组中的对象中的`contract_info`对象：

| 字段          | 类型 | 内容                           | 备注                                                        |
| ------------- | ---- | ------------------------------ | ----------------------------------------------------------- |
| is_contract   | bool | 目标用户是否为对方的契约者     | 仅当为 `true` 时才有此项                                    |
| is_contractor | bool | 对方是否为目标用户的契约者     | 仅当为 `true` 时才有此项                                    |
| ts            | num  | 对方成为目标用户的契约者的时间 | 秒级时间戳，仅当 `is_contractor` 项的值为 `true` 时才有此项 |
| user_attr     | num  | 对方作为目标用户的契约者的属性 | 1：老粉<br />否则为原始粉丝<br />仅当有特殊属性时才有此项   |

**示例：**

以每页2项的方式获取了id为`207542`分组的第1页的粉丝明细，按照关注顺序

```shell
curl -G 'https://api.bilibili.com/x/relation/tag' \
  --data-urlencode 'tagid=207542' \
  --data-urlencode 'order_type=' \
  --data-urlencode 'ps=2' \
  --data-urlencode 'pn=1' \
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
    "mid": 420831218,
    "uname": "支付宝Alipay",
    "face": "https://i2.hdslb.com/bfs/face/aaf18aeb2d9822e28a590bd8d878572ca8c59e04.jpg",
    "sign": "阿支来了，关注点赞转发投币四连走起！",
    "official_verify": {
      "type": 1,
      "desc": "支付宝官方账号"
    },
    "vip": {
      "vipType": 1,
      "vipDueDate": 1585065600000,
      "dueRemark": "",
      "accessStatus": 0,
      "vipStatus": 1,
      "vipStatusWarn": "",
      "themeType": 0,
      "label": {
        "path": ""
      }
    }
  }, {
    "mid": 125086406,
    "uname": "MSI微星科技",
    "face": "https://i1.hdslb.com/bfs/face/a844760e4e491677615b39399bc761e74c579bb4.jpg",
    "sign": "你好，这里是微星显卡官方！专注显卡三十年，欢迎私信咨询或提问MSI",
    "official_verify": {
      "type": 1,
      "desc": "微星科技官方账号"
    },
    "vip": {
      "vipType": 1,
      "vipDueDate": 1540656000000,
      "dueRemark": "",
      "accessStatus": 0,
      "vipStatus": 0,
      "vipStatusWarn": "",
      "themeType": 0,
      "label": {
        "path": ""
      }
    }
  }]
}
```

</details>

### 查询目标用户所在的分组

> <https://api.bilibili.com/x/relation/tag/user>

*请求方式：GET*

认证方式：Cookie（SESSDATA）或 APP

**url参数：**

| 参数名     | 类型 | 内容           | 必要性       | 备注 |
| ---------- | ---- | -------------- | ------------ | ---- |
| access_key | str  | APP 登录 Token | APP 方式必要 |      |
| fid        | num  | 目标用户 mid   | 必要         |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为 0                                          |
| ttl     | num  | 1        |                                                   |
| data    | obj  | 信息本体 |                                                   |

`data`对象：

| 字段            | 类型 | 内容     | 备注                               |
| --------------- | ---- | -------- | ---------------------------------- |
| {加入的分组 id} | str  | 分组名称 | 若目标用户存在默认分组中，则不显示 |
| ……              | str  | ……       | 下同                               |

**示例：**

查询用户`mid=319214221`存在的所有分组和名称

```shell
curl -G 'https://api.bilibili.com/x/relation/tag/user' \
  --data-urlencode 'fid=319214221' \
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
    "-10": "特别关注",
    "194111": "我的同学"
  }
}
```

</details>

### 查询所有特别关注 mid

> <https://api.bilibili.com/x/relation/tag/special>

*请求方式：GET*

认证方式：Cookie（SESSDATA）或 APP

**url参数：**

| 参数名     | 类型 | 内容           | 必要性       | 备注 |
| ---------- | ---- | -------------- | ------------ | ---- |
| access_key | str  | APP 登录 Token | APP 方式必要 |      |

**json回复：**

根对象：

| 字段    | 类型  | 内容     | 备注                          |
| ------- | ----- | -------- | ----------------------------- |
| code    | num   | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str   | 错误信息 | 默认为 0                      |
| ttl     | num   | 1        |                               |
| data    | array | 成员列表 |                               |

`data`数组：

| 项  | 类型 | 内容           | 备注 |
| --- | ---- | -------------- | ---- |
| 0   | num  | 成员 1 mid     |      |
| n   | num  | 成员（n+1）mid |      |
| ……  | num  | ……             | ……   |

**示例：**

```shell
curl 'https://api.bilibili.com/x/relation/tag/special' \
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
    500716647,
    32832243,
    53456,
    25944552,
    301839556,
    427494870,
    319214221,
    31949159,
    382666849,
    258318451,
    15858903,
    54992199,
    3379951,
    392279807,
    23215368,
    258150656,
    20165629,
    22179720
  ]
}
```

</details>

### 创建分组

<img src="../../assets/img/add.svg" width="100" height="100" />

> <https://api.bilibili.com/x/relation/tag/create>

*请求方式：POST*

认证方式：Cookie（SESSDATA）或 APP

**正文参数（application/x-www-form-urlencoded）：**

| 参数名     | 类型 | 内容                      | 必要性          | 备注          |
| ---------- | ---- | ------------------------- | --------------- | ------------- |
| access_key | str  | APP 登录 Token            | APP 方式必要    |               |
| tag        | str  | 分组名                    | 必要            | 最长  16 字符 |
| csrf       | str  | CSRF Token（位于 Cookie） | Cookie 方式必要 |               |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                                                                                                                                                          |
| ------- | ---- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-111：csrf校验失败<br />-101：账号未登录<br />-400：请求错误<br />22101：分组名称存在不允许的字符<br />22102：分组数量超过限制<br />22103：分组名过长<br />22106：该分组已经存在 |
| message | str  | 错误信息 | 默认为 0                                                                                                                                                                                      |
| ttl     | num  | 1        |                                                                                                                                                                                               |
| data    | obj  | 信息本体 |                                                                                                                                                                                               |

`data`对象：

| 字段  | 类型 | 内容            | 备注 |
| ----- | ---- | --------------- | ---- |
| tagid | num  | 创建的分组的 id |      |

**示例：**

创建了名为`测试`的分组，得到id为`216677`

```shell
curl 'https://api.bilibili.com/x/relation/tag/create' \
  --data-urlencode 'tag=测试' \
  --data-urlencode 'csrf=xxx' \
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
    "tagid": 216677
  }
}
```

</details>

### 重命名分组

> <https://api.bilibili.com/x/relation/tag/update>

*请求方式：POST*

认证方式：Cookie（SESSDATA）或 APP

**正文参数（application/x-www-form-urlencoded）：**

| 参数名     | 类型 | 内容                      | 必要性          | 备注         |
| ---------- | ---- | ------------------------- | --------------- | ------------ |
| access_key | str  | APP 登录 Token            | APP 方式必要    |              |
| tagid      | num  | 分组 id                   | 必要            |              |
| name       | str  | 新名称                    | 必要            | 最长 16 字符 |
| csrf       | str  | CSRF Token（位于 Cookie） | Cookie 方式必要 |              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                                                                                                                           |
| ------- | ---- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-111：csrf校验失败<br />-101：账号未登录<br />-400：请求错误<br />22101：分组名称存在不允许的字符<br />22103：分组名过长<br />22104：该分组不存在 |
| message | str  | 错误信息 | 默认为 0                                                                                                                                                       |
| ttl     | num  | 1        |                                                                                                                                                                |

**示例：**

把id为`194112`的分组更名为`膜法师`

```shell
curl 'https://api.bilibili.com/x/relation/tag/update' \
  --data-urlencode 'tagid=194112' \
  --data-urlencode 'name=膜法师' \
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

### 删除分组

<img src="../../assets/img/delete.svg" width="100" height="100" />

> <https://api.bilibili.com/x/relation/tag/del>

*请求方式：POST*

认证方式：Cookie（SESSDATA）或 APP

**正文参数（application/x-www-form-urlencoded）：**

| 参数名     | 类型 | 内容                      | 必要性          | 备注 |
| ---------- | ---- | ------------------------- | --------------- | ---- |
| access_key | str  | APP 登录 Token            | APP 方式必要    |      |
| tagid      | num  | 分组 id                   | 必要            |      |
| csrf       | str  | CSRF Token（位于 Cookie） | Cookie 方式必要 |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                                      |
| ------- | ---- | -------- | ------------------------------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-111：csrf校验失败<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为 0                                                                  |
| ttl     | num  | 1        |                                                                           |

示例：

删除分组id为`216699`的分组

```shell
curl 'https://api.bilibili.com/x/relation/tag/del' \
  --data-urlencode 'tagid=216699' \
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

### 修改分组成员

<img src="../../assets/img/add.svg" width="100" height="100" />

> <https://api.bilibili.com/x/relation/tags/addUsers>

*请求方式：POST*

认证方式：Cookie（SESSDATA）或 APP

如需删除分组中的成员，请将`tagids`设为 0，即移动至默认分组，而不是取关

**正文参数（application/x-www-form-urlencoded）：**

| 参数名     | 类型 | 内容                      | 必要性          | 备注              |
| ---------- | ---- | ------------------------- | --------------- | ----------------- |
| access_key | str  | APP 登录 Token            | APP 方式必要    |                   |
| fids       | nums | 目标用户 mid 列表         | 必要            | 每个之间用`,`间隔 |
| tagids     | nums | 分组 id 列表              | 必要            | 每个之间用`,`间隔 |
| csrf       | str  | CSRF Token（位于 Cookie） | Cookie 方式必要 |                   |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                                                                                |
| ------- | ---- | -------- | ------------------------------------------------------------------------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-111：csrf校验失败<br />-101：账号未登录<br />-400：请求错误<br />22104：分组不存在<br />22105：未关注 |
| message | str  | 错误信息 | 默认为 0                                                                                                            |
| ttl     | num  | 1        |                                                                                                                     |

**示例：**

把关注用户`mid=205631797`同时添加分组关系到id为`-10`和`207542`的分组中

```shell
curl 'https://api.bilibili.com/x/relation/tags/addUsers' \
  --data-urlencode 'fids=205631797' \
  --data-urlencode 'tagids=-10,207542' \
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

### 复制关注到分组

> <https://api.bilibili.com/x/relation/tags/copyUsers>

*请求方式：POST*

认证方式：Cookie（SESSDATA）或 APP

**正文参数（application/x-www-form-urlencoded）：**

| 参数名     | 类型 | 内容                      | 必要性          | 备注              |
| ---------- | ---- | ------------------------- | --------------- | ----------------- |
| access_key | str  | APP 登录 Token            | APP 方式必要    |                   |
| fids       | nums | 待复制的用户 mid 列表     | 必要            | 每个之间用`,`间隔 |
| tagids     | nums | 目标分组 id 列表          | 必要            | 每个之间用`,`间隔 |
| csrf       | str  | CSRF Token（位于 Cookie） | Cookie 方式必要 |                   |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                                                                                |
| ------- | ---- | -------- | ------------------------------------------------------------------------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-111：csrf校验失败<br />-101：账号未登录<br />-400：请求错误<br />22104：分组不存在<br />22105：未关注 |
| message | str  | 错误信息 | 默认为 0                                                                                                            |
| ttl     | num  | 1        |                                                                                                                     |

**示例：**

把关注用户`mid=4856007`和`mid=326499679`同时复制到为`231305`的分组id中

```shell
curl 'https://api.bilibili.com/x/relation/tags/copyUsers' \
  --data-urlencode 'fids=4856007,326499679' \
  --data-urlencode 'tagids=231305' \
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

### 移动关注到分组

> <https://api.bilibili.com/x/relation/tags/moveUsers>

*请求方式：POST*

认证方式：Cookie（SESSDATA）或 APP

**正文参数（application/x-www-form-urlencoded）：**

| 参数名       | 类型 | 内容                      | 必要性          | 备注              |
| ------------ | ---- | ------------------------- | --------------- | ----------------- |
| access_key   | str  | APP 登录 Token            | APP 方式必要    |                   |
| beforeTagids | nums | 原分组 id 列表            | 必要            | 每个之间用`,`间隔 |
| afterTagids  | nums | 新分组 id 列表            | 必要            | 每个之间用`,`间隔 |
| fids         | nums | 待移动的用户 mid 列表     | 必要            | 每个之间用`,`间隔 |
| csrf         | str  | CSRF Token（位于 Cookie） | Cookie 方式必要 |                   |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                                                                                |
| ------- | ---- | -------- | ------------------------------------------------------------------------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-111：csrf校验失败<br />-101：账号未登录<br />-400：请求错误<br />22104：分组不存在<br />22105：未关注 |
| message | str  | 错误信息 | 默认为 0                                                                                                            |
| ttl     | num  | 1        |                                                                                                                     |

**示例：**

把关注用户`mid=321173469`和`mid=327086920`同时从id为`207542`的分组移动到为`231305`的分组中

```shell
curl 'https://api.bilibili.com/x/relation/tags/moveUsers' \
  --data-urlencode 'beforeTagids=207542' \
  --data-urlencode 'afterTagids=23130' \
  --data-urlencode 'fids=321173469,327086920' \
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
