# 直播间禁言相关 API

## 禁言观众

> https://api.live.bilibili.com/xlive/web-ucenter/v1/banned/AddSilentUser

*请求方式：post*

认证方式：Cookie（SESSDATA）

鉴权方式：Cookie中`bili_jct`的值正确并与`csrf`相同

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名        | 类型  | 内容         | 必要性 | 备注                 |
| ---------- | --- | ---------- | --- | ------------------ |
| room_id    | str | 直播间Id      | 必要  |                    |
| tuid       | str | 要禁言的uid    | 必要  |                    |
| msg        | str | 要禁言的弹幕内容   | 非必要 |                    |
| mobile_app | str | web        | 必要  | 定值"web"即可          |
| hour | num | 禁言时长 | 必要 | -1为永久，0为本场直播 |
| csrf_token | str | CSRF Token | 必要  | cookie中的bili_jct字段 |
| csrf       | str | CSRF Token | 必要  | cookie中的bili_jct字段 |
| visit_id   | str | 不明         | 非必要 |                    |

**json 回复：**

根对象：

| 字段      | 类型  | 内容   | 备注      |
| ------- | --- | ---- | ------- |
| code    | num | 返回值  | 0：成功    |
| message | str | 错误信息 | 默认为 "0" |
| ttl     | str | 1    |         |
| data    | obj | 信息本体 | 成功为空    |

**示例：** 

```shell
curl -X POST 'https://api.live.bilibili.com/xlive/web-ucenter/v1/banned/AddSilentUser' \
--data-urlencode 'room_id=xxxxxx' \
--data-urlencode 'tuid=xxx' \
--data-urlencode 'msg=xxxx' \
--data-urlencode 'mobile_app=web' \
--data-urlencode 'csrf_token=xx' \
--data-urlencode 'csrf=xx' \
--data-urlencode 'visit_id=' \
-H 'Content-Type:application/x-www-form-urlencoded' \
-b 'SESSDATA=xxx; bili_jct=xx;'
```

<details>
<summary>查看响应示例：</summary>

```json
{"code":0,"message":"0","ttl":1,"data":{}}
```

</details>

## 查询直播间禁言列表

> https://api.live.bilibili.com/xlive/web-ucenter/v1/banned/GetSilentUserList

*请求方式：post*

认证方式：Cookie（SESSDATA）

鉴权方式：Cookie中`bili_jct`的值正确并与`csrf`相同

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名        | 类型  | 内容         | 必要性 | 备注                 |
| ---------- | --- | ---------- | --- | ------------------ |
| room_id    | str | 直播间Id      | 必要  |                    |
| ps        | str | 列表页码       | 必要  |                    |
| csrf_token | str | CSRF Token | 必要  | cookie中的bili_jct字段 |
| csrf       | str | CSRF Token | 必要  | cookie中的bili_jct字段 |
| visit_id   | str | 不明         | 非必要 |                    |

**json 回复：**

根对象：

| 字段      | 类型  | 内容   | 备注      |
| ------- | --- | ---- | ------- |
| code    | num | 返回值  | 0：成功    |
| message | str | 错误信息 | 默认为 "0" |
| ttl     | str | 1    |         |
| data    | obj | 信息本体 |         |

`data`对象：

| 字段         | 类型    | 内容     | 备注      |
| ---------- | ----- | ------ | ------- |
| data       | array | 禁言列表   | 数组中为obj |
| total      | int   | 禁言观众数量 |         |
| total_page | int   | 页码总数量  |         |

`data`对象中`data`数组的元素对象：

| 字段          | 类型  | 内容     | 备注        |
| ----------- | --- | ------ | --------- |
| tuid        | num | 禁言者uid |           |
| tname       | str | 禁言者昵称  |           |
| uid         | num | 发起者uid |           |
| name        | str | 发起者昵称  |           |
| ctime       | str | 禁言时间   |           |
| id          | num | 禁言记录Id | 解除禁言时用到   |
| is_anchor   | num | 不明     |           |
| face        | str | 禁言者头像  |           |
| admin_level | num | 发起者权限  | 0:主播，1:房管 |

**示例：** 

```shell
curl -X POST 'https://api.live.bilibili.com/xlive/web-ucenter/v1/banned/GetSilentUserList' \
--data-urlencode 'room_id=xxxxxxx' \
--data-urlencode 'ps=1' \
--data-urlencode 'csrf_token=xxx' \
--data-urlencode 'csrf=xxx' \
--data-urlencode 'visit_id=' \
-H 'Content-Type:application/x-www-form-urlencoded' \
-b 'SESSDATA=xxxx; bili_jct=xxx;'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code":0,
    "message":"0",
    "ttl":1,
    "data":{
        "data":[
            {
                "tuid":123456,
                "tname":"xxxxx",
                "uid":123456,
                "name":"xxxx",
                "ctime":"2023-12-15 16:32:46",
                "id":13493921,
                "is_anchor":0,
                "face":"https://i1.hdslb.com/bfs/face/xxxxx.jpg",
                "admin_level":1
            },
            {
                "tuid":123456,
                "tname":"xx",
                "uid":123456,
                "name":"xxxx",
                "ctime":"2021-08-23 22:26:06",
                "id":8018136,
                "is_anchor":1,
                "face":"https://i1.hdslb.com/bfs/face/xxxxxx.jpg",
                "admin_level":0
            }
        ],
        "total":2,
        "total_page":1
    }
}
```

</details>

## 解除禁言

> https://api.live.bilibili.com/banned_service/v1/Silent/del_room_block_user

*请求方式：post*

认证方式：Cookie（SESSDATA）

鉴权方式：Cookie中`bili_jct`的值正确并与`csrf`相同

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名        | 类型  | 内容         | 必要性 | 备注                     |
| ---------- | --- | ---------- | --- | ---------------------- |
| roomid     | str | 直播间Id      | 必要  | 注意该接口名称没有“_”           |
| id         | str | 禁言记录Id     | 必要  | GetSilentUserList 接口获取 |
| csrf_token | str | CSRF Token | 必要  | cookie中的bili_jct字段     |
| csrf       | str | CSRF Token | 必要  | cookie中的bili_jct字段     |
| visit_id   | str | 不明         | 非必要 |                        |

**json 回复：**

根对象：

| 字段      | 类型  | 内容   | 备注   |
| ------- | --- | ---- | ---- |
| code    | num | 返回值  | 0：成功 |
| message | str | 错误信息 | 成功为空 |
| ttl     | str | 1    |      |
| data    | obj | 信息本体 | 成功为空 |

**示例：** 

```shell
curl -X POST 'https://api.live.bilibili.com/banned_service/v1/Silent/del_room_block_user' \
--data-urlencode 'roomid=xxxxxxxxx' \
--data-urlencode 'id=xxxxx' \
--data-urlencode 'csrf_token=xxx' \
--data-urlencode 'csrf=xxx' \
--data-urlencode 'visit_id=' \
-H 'Content-Type:application/x-www-form-urlencoded' \
-b 'SESSDATA=xxxxxx; bili_jct=xxx;'
```

<details>
<summary>查看响应示例：</summary>

```json
{"code":0,"msg":"","message":"","data":[]}
```

</details>
