# 直播间基本信息

## 获取直播间信息

> https://api.live.bilibili.com/room/v1/Room/get_info

*请求方式: GET*

**URL参数：**

| 参数名     | 类型  | 内容   | 必要性 | 备注    |
|---------|-----|------|-----|-------|
| room_id | num | 直播间号 | 必要  | 可以为短号 |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注              |
|---------|-----|------|-----------------|
| code    | num | 返回值  | 0：成功<br />1：不存在 |
| message | str | 错误信息 |                 |
| msg     | str | 错误信息 |                 |
| data    | obj | 信息本体 |                 |

`data`对象：

| 字段                      | 类型        | 内容     | 备注                          |
|-------------------------|-----------|--------|-----------------------------|
| uid                     | num       | 主播mid  |                             |
| room_id                 | num       | 直播间长号  |                             |
| short_id                | num       | 直播间短号  | 为0是无短号                      |
| attention               | num       | 关注数量   |                             |
| online                  | num       | 观看人数   |                             |
| is_portrait             | bool      | 是否竖屏   |                             |
| description             | str       | 描述     |                             |
| live_status             | num       | 直播状态   | 0：未开播<br />1：直播中<br />2：轮播中 |
| area_id                 | num       | 分区id   |                             |
| parent_area_id          | num       | 父分区id  |                             |
| parent_area_name        | str       | 父分区名称  |                             |
| old_area_id             | num       | 旧版分区id |                             |
| background              | str       | 背景图片链接 |                             |
| title                   | str       | 标题     |                             |
| user_cover              | str       | 封面     |                             |
| keyframe                | str       | 关键帧    | 用于网页端悬浮展示                   |
| is_strict_room          | bool      | 未知     | 未知                          |
| live_time               | str       | 直播开始时间 | YYYY-MM-DD HH:mm:ss         |
| tags                    | str       | 标签     | ','分隔                       |
| is_anchor               | num       | 未知     | 未知                          |
| room_silent_type        | str       | 禁言状态   |                             |
| room_silent_level       | num       | 禁言等级   |                             |
| room_silent_second      | num       | 禁言时间   | 单位是秒                        |
| area_name               | str       | 分区名称   |                             |
| pardants                | str       | 未知     | 未知                          |
| area_pardants           | str       | 未知     | 未知                          |
| hot_words               | list(str) | 热词     |                             |
| hot_words_status        | num       | 热词状态   |                             |
| verify                  | str       | 未知     | 未知                          |
| new_pendants            | obj       | 头像框\大v |                             |
| up_session              | str       | 未知     |                             |
| pk_status               | num       | pk状态   |                             |
| pk_id                   | num       | pk id  |                             |
| battle_id               | num       | 未知     |                             |
| allow_change_area_time  | num       |        |                             |
| allow_upload_cover_time | num       |        |                             |
| studio_info             | obj       |        |                             |

`new_pendants`对象：

| 字段           | 类型  | 内容  | 备注                |
|--------------|-----|-----|-------------------|
| frame        | obj | 头像框 |                   |
| mobile_frame | obj | 同上  | 手机版, 结构一致, 可能null |
| badge        | obj | 大v  |                   |
| mobile_badge | obj | 同上  | 手机版, 结构一致, 可能null |

`frame`对象：

| 字段           | 类型   | 内容     | 备注  |
|--------------|------|--------|-----|
| name         | str  | 名称     |     |
| value        | str  | 值      |     |
| position     | num  | 位置     |     |
| desc         | str  | 描述     |     |
| area         | num  | 分区     |     |
| area_old     | num  | 旧分区    |     |
| bg_color     | str  | 背景色    |     |
| bg_pic       | str  | 背景图    |     |
| use_old_area | bool | 是否旧分区号 |     |

`badge`对象：

| 字段       | 类型  | 内容  | 备注                                        |
|----------|-----|-----|-------------------------------------------|
| name     | str | 类型  | v_person: 个人认证(黄) <br /> v_company: 企业认证(蓝) |
| position | num | 位置  |                                           |
| value    | str | 值   |                                           |
| desc     | str | 描述  |                                           |

`studio_info`对象：

| 字段          | 类型    | 内容  | 备注  |
|-------------|-------|-----|-----|
| status      | num   |     |     |
| master_list | array |     |     |

**示例：**

查询直播间`room_id=1`信息

```shell
curl -G 'https://api.live.bilibili.com/room/v1/Room/get_info' \
--data-urlencode 'room_id=1'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "msg": "ok",
  "message": "ok",
  "data": {
    "uid": 9617619,
    "room_id": 5440,
    "short_id": 1,
    "attention": 11919499,
    "online": 0,
    "is_portrait": false,
    "description": "欢迎加入bilibili《快乐运动研究社》，和B站UP主们一起探讨有关运动的经历感受，解决身体和情绪的“疑难杂症”，寻找适合自己的运动，一起跟练！本期我们一起探讨：运动健身能缓解社交恐惧吗？",
    "live_status": 2,
    "area_id": 145,
    "parent_area_id": 1,
    "parent_area_name": "娱乐",
    "old_area_id": 6,
    "background": "",
    "title": "快乐运动研究社",
    "user_cover": "https://i0.hdslb.com/bfs/live/new_room_cover/96943b8d106a777a34cf796421bb4254163b30e1.jpg",
    "keyframe": "https://i0.hdslb.com/bfs/live-key-frame/keyframe08121926000000005440np0q7a.jpg",
    "is_strict_room": false,
    "live_time": "0000-00-00 00:00:00",
    "tags": "",
    "is_anchor": 0,
    "room_silent_type": "",
    "room_silent_level": 1,
    "room_silent_second": 0,
    "area_name": "视频聊天",
    "pendants": "",
    "area_pendants": "",
    "hot_words": [
      "2333333",
      "喂，妖妖零吗",
      "红红火火恍恍惚惚",
      "FFFFFFFFFF",
      "Yooooooo",
      "啪啪啪啪啪",
      "666666666",
      "老司机带带我",
      "你为什么这么熟练啊",
      "gg",
      "prprpr",
      "向大佬低头",
      "请大家注意弹幕礼仪哦！",
      "还有这种操作！",
      "囍",
      "打call",
      "你气不气？",
      "队友呢？"
    ],
    "hot_words_status": 0,
    "verify": "",
    "new_pendants": {
      "frame": {
        "name": "",
        "value": "",
        "position": 0,
        "desc": "",
        "area": 0,
        "area_old": 0,
        "bg_color": "",
        "bg_pic": "",
        "use_old_area": false
      },
      "badge": {
        "name": "v_company",
        "position": 3,
        "value": "",
        "desc": "哔哩哔哩直播官方账号"
      },
      "mobile_frame": {
        "name": "",
        "value": "",
        "position": 0,
        "desc": "",
        "area": 0,
        "area_old": 0,
        "bg_color": "",
        "bg_pic": "",
        "use_old_area": false
      },
      "mobile_badge": null
    },
    "up_session": "",
    "pk_status": 0,
    "pk_id": 0,
    "battle_id": 0,
    "allow_change_area_time": 0,
    "allow_upload_cover_time": 0,
    "studio_info": {
      "status": 0,
      "master_list": []
    }
  }
}
```

</details>

## 获取用户对应的直播间状态

> https://api.live.bilibili.com/room/v1/Room/getRoomInfoOld

*请求方式：GET*

**url参数：**

| 参数名 | 类型  | 内容      | 必要性 | 备注  |
|-----|-----|---------|-----|-----|
| mid | num | 目标用户mid | 必要  |     |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                  |
|---------|-----|------|---------------------|
| code    | num | 返回值  | 0：成功<br />-400：请求错误 |
| message | str | 错误信息 | 默认为0                |
| ttl     | num | 1    |                     |
| data    | obj | 信息本体 |                     |

`data`对象：

| 字段             | 类型  | 内容        | 备注               |
|----------------|-----|-----------|------------------|
| roomStatus     | num | 直播间状态     | 0：无房间<br />1：有房间 |
| roundStatus    | num | 轮播状态      | 0：未轮播<br />1：轮播  |
| live_status    | num | 直播状态      | 0：未开播<br />1：直播中 |
| url            | str | 直播间网页url  |                  |
| title          | str | 直播间标题     |                  |
| cover          | str | 直播间封面url  |                  |
| online         | num | 直播间人气     | 值为上次直播时刷新        |
| roomid         | num | 直播间id（短号） |                  |
| broadcast_type | num | 0         |                  |
| online_hidden  | num | 0         |                  |

**示例：**

查询用户`mid=322892`的直播间信息

```shell
curl -G 'https://api.live.bilibili.com/room/v1/Room/getRoomInfoOld' \
--data-urlencode 'mid=322892'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "roomStatus": 1,
    "roundStatus": 0,
    "live_status": 1,
    "url": "https://live.bilibili.com/5441",
    "title": "好久没当黑铁主播了",
    "cover": "http://i0.hdslb.com/bfs/live/room_cover/833f7ff506bac17c06010e8834922993657505b2.jpg",
    "online": 268602,
    "roomid": 5441,
    "broadcast_type": 0,
    "online_hidden": 0
  }
}
```

</details>

## 获取房间页初始化信息

> https://api.live.bilibili.com/room/v1/Room/room_init

*请求方式：GET*

**url参数：**

| 参数名 | 类型  | 内容         | 必要性 | 备注  |
|-----|-----|------------|-----|-----|
| id  | num | 目标直播间号（短号） | 必要  |     |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                     |
|---------|-----|------|------------------------|
| code    | num | 返回值  | 0：成功<br />60004：直播间不存在 |
| msg     | str | 错误信息 | 默认为ok                  |
| message | str | 错误信息 | 默认为ok                  |
| data    | obj | 信息本体 |                        |

`data`对象：

| 字段           | 类型   | 内容           | 备注                                 |
|--------------|------|--------------|------------------------------------|
| room_id      | num  | 直播间真实id      |                                    |
| short_id     | num  | 直播间id（短号）    |                                    |
| uid          | num  | 主播用户mid      |                                    |
| need_p2p     | num  | 是否p2p        |                                    |
| is_hidden    | bool | 是否隐藏         |                                    |
| is_locked    | bool | 是否锁定         |                                    |
| is_portrait  | bool | 是否竖屏         |                                    |
| live_status  | num  | 直播状态         | 0：未开播<br />1：直播中<br />2：轮播中        |
| hidden_till  | num  | 隐藏时间戳        | 	                                  |
| lock_till    | num  | 锁定时间戳        | 		                                 |
| encrypted    | bool | 是否加密         | 		                                 |
| pwd_verified | bool | 加密房间是否通过密码验证 | `encrypted`=true时才有意义              |
| live_time    | num  | 开播时间         | 未开播时为`-62170012800`                |
| room_shield  | num  | 未知           |                                    |
| is_sp        | num  | 是否为特殊直播间     | 0：普通直播间<br />1：付费直播间               |
| special_type | num  | 特殊直播间标志      | 0：普通直播间<br />1：付费直播间<br />2：拜年祭直播间 |

**示例：**

查询直播间`id=76`的直播间信息

```shell
curl -G 'https://api.live.bilibili.com/room/v1/Room/room_init' \
--data-urlencode 'id=76'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "msg": "ok",
  "message": "ok",
  "data": {
    "room_id": 14073662,
    "short_id": 76,
    "uid": 50333369,
    "need_p2p": 0,
    "is_hidden": false,
    "is_locked": false,
    "is_portrait": false,
    "live_status": 1,
    "hidden_till": 0,
    "lock_till": 0,
    "encrypted": false,
    "pwd_verified": false,
    "live_time": 1602151186,
    "room_shield": 1,
    "is_sp": 0,
    "special_type": 0
  }
}
```

</details>

## 获取主播信息

> https://api.live.bilibili.com/live_user/v1/Master/info

*请求方式：GET*

**url参数：**

| 参数名 | 类型  | 内容      | 必要性 | 备注  |
|-----|-----|---------|-----|-----|
| uid | num | 目标用户mid | 必要  |     |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注               |
|---------|-----|------|------------------|
| code    | num | 返回值  | 0：成功<br />1：参数错误 |
| msg     | str | 错误信息 | 默认为空             |
| message | str | 错误信息 | 默认为空             |
| data    | obj | 信息本体 |                  |

`data`对象：

| 字段             | 类型  | 内容        | 备注         |
|----------------|-----|-----------|------------|
| info           | obj | 主播信息      |            |
| exp            | obj | 经验等级      |            |
| follower_num   | num | 主播粉丝数     |            |
| room_id        | num | 直播间id（短号） |            |
| medal_name     | str | 粉丝勋章名     |            |
| glory_count    | num | 主播荣誉数     |            |
| pendant        | str | 直播间头像框url |            |
| link_group_num | num | 0         | **作用尚不明确** |
| room_news      | obj | 主播公告      |            |

`info`对象：

| 字段              | 类型  | 内容      | 备注                      |
|-----------------|-----|---------|-------------------------|
| uid             | num | 主播mid   |                         |
| uname           | str | 主播用户名   |                         |
| face            | str | 主播头像url |                         |
| official_verify | obj | 认证信息    |                         |
| gender          | num | 主播性别    | -1：保密<br />0：女<br />1：男 |

`info`中的`official_verify`对象：

| 字段   | 类型  | 内容     | 备注                           |
|------|-----|--------|------------------------------|
| type | num | 主播认证类型 | -1：无<br />0：个人认证<br />1：机构认证 |
| desc | str | 主播认证信息 |                              |

`exp`对象：

| 字段           | 类型  | 内容   | 备注  |
|--------------|-----|------|-----|
| master_level | obj | 主播等级 |     |

`exp`中的`master_level`对象：

| 字段      | 类型    | 内容     | 备注  |
|---------|-------|--------|-----|
| level   | num   | 当前等级   |     |
| color   | num   | 等级框颜色  |     |
| current | array | 当前等级信息 |     |
| next    | array | 下一等级信息 |     |

`master_level`中的`current`数组：

| 项   | 类型  | 内容   | 备注  |
|-----|-----|------|-----|
| 0   | num | 升级积分 |     |
| 1   | num | 总积分  |     |

`master_level`中的`next`数组：

| 项   | 类型  | 内容   | 备注  |
|-----|-----|------|-----|
| 0   | num | 升级积分 |     |
| 1   | num | 总积分  |     |

`room_news`对象：

| 字段         | 类型  | 内容   | 备注  |
|------------|-----|------|-----|
| content    | str | 公告内容 |     |
| ctime      | str | 公告时间 |     |
| ctime_text | str | 公告日期 |     |

**示例：**

查询直播间`mid=2`的主播信息

```shell
curl -G 'https://api.live.bilibili.com/live_user/v1/Master/info' \
--data-urlencode 'uid=2'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "msg": "",
  "message": "",
  "data": {
    "info": {
      "uid": 2,
      "uname": "碧诗",
      "face": "https://i0.hdslb.com/bfs/face/ef0457addb24141e15dfac6fbf45293ccf1e32ab.jpg",
      "official_verify": {
        "type": 0,
        "desc": "bilibili个人认证:bilibili创始人（站长）"
      },
      "gender": 1
    },
    "exp": {
      "master_level": {
        "level": 30,
        "color": 10512625,
        "current": [
          2870000,
          11883810
        ],
        "next": [
          3730000,
          15613810
        ]
      }
    },
    "follower_num": 926624,
    "room_id": 1024,
    "medal_name": "逸国",
    "glory_count": 0,
    "pendant": "",
    "link_group_num": 0,
    "room_news": {
      "content": "",
      "ctime": "",
      "ctime_text": ""
    }
  }
}
```

</details>

## 获取直播间基本信息

> https://api.live.bilibili.com/xlive/web-room/v1/index/getRoomBaseInfo

*请求方式: GET*

注: 亦可用于批量获取

<!--{
  "gh": [745]
}-->

**URL参数:**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ----- | ---- | --- | - | - |
| req_biz | str | `web_room_componet` | 必要 | |
| room_ids | num | 直播间短ID | 不必要 | 多个重复该参数即可 |

**JSON回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 返回值 | 0: 成功<br />-400: 请求错误 |
| message | str | 错误信息 | 默认为 0 |
| ttl | num | 1 | |
| data | obj | 信息本体 | |

`data`对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| by_uids | obj | 空 |  |
| by_room_ids | obj | 直播间信息 |  |

`data`中的`by_room_ids`对象:

以直播间长ID为键, 直播间信息为值的, 按键名降序排序

`by_room_ids`中的值对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| room_id | num | 直播间长ID |  |
| uid | num | 主播用户mid |  |
| area_id | num | 直播间分区ID |  |
| live_status | num | 直播状态 | 0: 未开播<br />1: 直播中<br />2: 轮播中 |
| live_url | str | 直播间网页url |  |
| parent_area_id | num | 直播间父分区ID |  |
| title | str | 直播间标题 |  |
| parent_area_name | str | 直播间父分区名称 |  |
| area_name | str | 直播间分区名称 |  |
| live_time | str | 开播时间 | `yyyy-MM-dd HH:mm:ss` |
| description | str | 直播间简介 |  |
| tags | str | 直播间标签 | 以 `,` 分隔 |
| attention | num | 关注数 |  |
| online | num | 在线人数 |  |
| short_id | num | 直播间短ID | 为0是无短号 |
| uname | str | 主播用户名 |  |
| cover | str | 直播间封面url |  |
| background | str | 直播间背景url |  |
| join_slide | num | 1 |  |
| live_id | num | 0 |  |
| live_id_str | str | "0" |  |

**示例:**

```shell
curl -G 'https://api.live.bilibili.com/xlive/web-room/v1/index/getRoomBaseInfo' \
--url-query 'req_biz=web_room_componet' \
--url-query 'room_ids=1' \
--url-query 'room_ids=3
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "by_uids": {},
    "by_room_ids": {
      "23058": {
        "room_id": 23058,
        "uid": 11153765,
        "area_id": 190,
        "live_status": 0,
        "live_url": "https://live.bilibili.com/23058",
        "parent_area_id": 5,
        "title": "哔哩哔哩音悦台",
        "parent_area_name": "电台",
        "area_name": "唱见电台",
        "live_time": "0000-00-00 00:00:00",
        "description": "<p>这里是哔哩哔哩官方音乐台喔！</p><p>一起来听音乐吧ε=ε=(ノ≧∇≦)ノ</p><p>没想到蒸汽配圣诞下装，意外的很暴露呢=3=</p>\n",
        "tags": "",
        "attention": 225431,
        "online": 0,
        "short_id": 3,
        "uname": "3号直播间",
        "cover": "",
        "background": "https://i0.hdslb.com/bfs/live/2836bb7b84c792e2c6aadfd4d1cce13484775fa3.jpg",
        "join_slide": 1,
        "live_id": 0,
        "live_id_str": "0"
      },
      "5440": {
        "room_id": 5440,
        "uid": 9617619,
        "area_id": 701,
        "live_status": 2,
        "live_url": "https://live.bilibili.com/5440",
        "parent_area_id": 11,
        "title": "华为nova Flip新生之夜",
        "parent_area_name": "知识",
        "area_name": "科技·科学",
        "live_time": "0000-00-00 00:00:00",
        "description": "<p>华为novaFlip新生之夜正在直播中！备案号：Z0910417240818001<br></p>",
        "tags": "",
        "attention": 17848313,
        "online": 0,
        "short_id": 1,
        "uname": "哔哩哔哩直播",
        "cover": "http://i0.hdslb.com/bfs/live/1a862058e4211a5e73a8a1bf0635953ea08a4091.jpg",
        "background": "http://i0.hdslb.com/bfs/live/ec518ede15d4c2547c83cb59f14752450c0889b0.jpg",
        "join_slide": 1,
        "live_id": 0,
        "live_id_str": "0"
      }
    }
  }
}
```

</details>

## 批量查询直播间状态

> https://api.live.bilibili.com/room/v1/Room/get_status_info_by_uids

*请求方式：GET/POST*

认证方式：无 (无需添加Cookie)

**url参数 (GET方式)：**

| 参数名    | 类型    | 内容         | 必要性 | 备注  |
|--------|-------|------------|-----|-----|
| uids[] | array | 要查询的主播 mid | 必要  |     |

**正文参数 (POST方式)：**

| 参数名  | 类型   | 内容         | 必要性 | 备注  |
|------|------|------------|-----|-----|
| uids | nums | 要查询的主播 mid | 必要  |     |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                      |
|---------|-----|------|-------------------------|
| code    | num | 返回值  | 0：成功<br />-111：csrf校验失败 |
| message | str | 错误信息 | 默认为success              |
| msg     | str | 错误信息 | 默认为success              |
| ttl     | num | 1    |                         |
| data    | obj | 信息本体 |                         |

`data`对象：

| 字段  | 类型  | 内容    | 备注         |
|-----|-----|-------|------------|
| uid | str | 直播间信息 | 实际字段为主播mid |

`uid`对象：

| 字段                  | 类型  | 内容        | 备注                           |
|---------------------|-----|-----------|------------------------------|
| title               | str | 直播间标题     |                              |
| room_id             | num | 直播间房间号    | 直播间实际房间号                     |
| uid                 | num | 主播mid     |                              |
| online              | num | 直播间在线人数   |                              |
| live_time           | num | 开播时间戳，单位秒，未开播时为0    |                              |
| live_status         | num | 直播间开播状态   | 0：未开播<br />1：正在直播<br />2：轮播中 |
| short_id            | num | 直播间房间号    | 直播间短房间号，常见于签约主播              |
| area                | num | 直播间分区id   |                              |
| area_name           | str | 直播间分区名    |                              |
| area_v2_id          | num | 直播间新版分区id |                              |
| area_v2_name        | str | 直播间新版分区名  |                              |
| area_v2_parent_id   | num | 直播间父分区id  |                              |
| area_v2_parent_name | str | 直播间父分区名   |                              |
| uname               | str | 主播用户名     |                              |
| face                | str | 主播头像url   |                              |
| tag_name            | str | 直播间标签     |                              |
| tags                | str | 直播间自定标签   |                              |
| cover_from_user     | str | 直播间封面url  |                              |
| keyframe            | str | 直播间关键帧url |                              |
| lock_till           | str | 直播间封禁信息   |                              |
| hidden_till         | str | 直播间隐藏信息   |                              |
| broadcast_type      | num | 直播类型      | 0：普通直播<br />1：手机直播          |

**示例：**

查询用户`mid=672328094`的直播间信息

```shell
# GET方式
curl -G 'https://api.live.bilibili.com/room/v1/Room/get_status_info_by_uids'
--data-urlencode 'uids[]=672328094'

# POST方式
curl 'https://api.live.bilibili.com/room/v1/Room/get_status_info_by_uids' \
-H "Content-Type: application/json" \
-d "{\"uids\": [672328094]}" 
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "msg": "success",
  "message": "success",
  "data": {
    "672328094": {
      "title": "【B限】玩个毛线",
      "room_id": 22637261,
      "uid": 672328094,
      "online": 4087370,
      "live_time": 0,
      "live_status": 2,
      "short_id": 0,
      "area": 6,
      "area_name": "生活娱乐",
      "area_v2_id": 371,
      "area_v2_name": "虚拟主播",
      "area_v2_parent_name": "虚拟主播",
      "area_v2_parent_id": 9,
      "uname": "嘉然今天吃什么",
      "face": "http://i2.hdslb.com/bfs/face/d399d6f5cf7943a996ae96999ba3e6ae2a2988de.jpg",
      "tag_name": "日常,学习,萌宠,厨艺,手机直播",
      "tags": "",
      "cover_from_user": "http://i0.hdslb.com/bfs/live/new_room_cover/f3ed7a782c13086e536ec8bc6e9593bb4918f905.jpg",
      "keyframe": "http://i0.hdslb.com/bfs/live-key-frame/keyframe041722000000226372619dr3m8.jpg",
      "lock_till": "0000-00-00 00:00:00",
      "hidden_till": "0000-00-00 00:00:00",
      "broadcast_type": 0
    }
  }
}
```

</details>


## 清晰度代码

| 代码    | 说明  |
|-------|-----|
| 30000 | 杜比  |
| 20000 | 4K  |
| 10000 | 原画  |
| 400   | 蓝光  |
| 250   | 超清  |
| 150   | 高清  |
| 80    | 流畅  |

## 获取直播间信息

> https://api.live.bilibili.com/xlive/web-room/v2/index/getRoomPlayInfo

*请求方式：GET*

认证方式：无 (无需添加Cookie)

**url参数 (GET方式)：**

| 参数名      | 类型  | 内容    | 必填  | 备注                                             |
|----------|-----|-------|-----|------------------------------------------------|
| room_id  | num | 直播间id | 必要  |                                                |
| protocol | str | 直播协议  | 必要  | 0：http_stream<br/>1：http_hls<br/>可多选, 使用英文逗号分隔 |
| format   | str | 格式    | 必要  | 0：flv<br/>1：ts<br/>2：fmp4<br/>可多选, 使用英文逗号分隔    |
| codec    | str | 编码格式  | 必要  | 0：AVC<br/>1：HEVC<br/>可多选, 使用英文逗号分隔             |
| qn       | num | 清晰度编码 |     | 默认`150`<br/>[清晰度代码](#清晰度代码)                    |
| platform | str | `web` |     |                                                |
| ptype    | num | `8`   |     |                                                |
| dolby    | num | `5`   |     |                                                |
| panorama | num | `1`   |     |                                                |
| only_audio | num | 是否为音频流 | 非必要 | 默认为视频流，`1` 为音频流               |

**json回复：**

根对象：

| 字段名     | 类型  | 内容   | 备注                    |
|---------|-----|------|-----------------------|
| code    | num | 响应码  | 0：成功<br/>1002002：参数错误 |
| message | str | 0    |                       |
| ttl     | num | 1    |                       |
| data    | obj | 信息本体 |                       |

`data`对象：

| 字段名               | 类型    | 内容        | 备注                        |
|-------------------|-------|-----------|---------------------------|
| room_id           | num   | 直播间id     |                           |
| short_id          | num   | 直播间短id    |                           |
| uid               | num   | 主播uid     |                           |
| is_hidden         | bool  | 直播间是否被隐藏  |                           |
| is_locked         | bool  | 直播间是否被锁定  |                           |
| is_portrait       | bool  | 是否竖屏      |                           |
| live_status       | num   | 直播状态      | 0：未开播<br/>1：直播中<br/>2：轮播中 |
| hidden_till       | num   | 隐藏结束时间    |                           |
| lock_till         | num   | 封禁结束时间    | 秒级时间戳                     |
| encrypted         | bool  | 直播间为加密直播间 |                           |
| pwd_verified      | bool  | 是否通过密码验证  | 当`encrypted`为`true`时才有意义  |
| live_time         | num   | 本次开播时间    | 秒级时间戳                     |
| room_shield       | num   |           |                           |
| all_special_types | array |           |                           |
| playurl_info      | obj   | 直播流信息     |                           |

`playurl_info`对象

| 字段名       | 类型  | 内容  | 备注  |
|-----------|-----|-----|-----|
| conf_json | str |     |     |
| playurl   | obj |     |     |

`playurl`对象

| 字段名       | 类型    | 内容    | 备注  |
|-----------|-------|-------|-----|
| cid       | num   | 直播间id |     |
| g_qn_desc | array | 清晰度列表 |     |
| stream    | array | 直播流信息 |     |
| p2p_data  | obj   |       |     |
| dolby_qn  |       |       |     |

`g_qn_desc`数组中的对象

| 字段名       | 类型  | 内容    | 备注              |
|-----------|-----|-------|-----------------|
| qn        | num | 清晰度代码 | [清晰度代码](#清晰度代码) |
| desc      | str | 清晰度描述 |                 |
| hdr_desc  | str |       |                 |
| attr_desc |     |       |                 |

`stream`数组中的对象

| 字段名           | 类型    | 内容   | 备注  |
|---------------|-------|------|-----|
| protocol_name | str   | 协议名  |     |
| format        | array | 格式列表 |     |

`format`数组中的对象

| 字段名         | 类型    | 内容   | 备注  |
|-------------|-------|------|-----|
| format_name | str   | 格式名  |     |
| codec       | array | 编码列表 |     |

`codec`数组中的对象

| 字段名        | 类型    | 内容        | 备注              |
|------------|-------|-----------|-----------------|
| codec_name | str   | 编码名       |                 |
| current_qn | num   | 当前清晰度编码   | [清晰度代码](#清晰度代码) |
| accept_qn  | array | 可用清晰度编码列表 | [清晰度代码](#清晰度代码) |
| base_url   | str   | 播放源路径     |                 |
| url_info   | array | 域名信息列表    |                 |
| hdr_qn     | null  |           |                 |
| dolby_type | num   |           |                 |
| attr_name  | str   |           |                 |

`url_info`数组中的对象

| 字段名        | 类型  | 内容    | 备注  |
|------------|-----|-------|-----|
| host       | str | 域名    |     |
| extra      | str | URL参数 |     |
| stream_ttl | num |       |     |

`p2p_data`对象

| 字段名       | 类型   | 内容  | 备注  |
|-----------|------|-----|-----|
| p2p       | bool |     |     |
| p2p_type  | num  |     |     |
| m_p2p     | bool |     |     |
| m_servers | null |     |     |

**示例：**

查询`room_id=3`的直播间信息

```shell
curl -L -X GET 'https://api.live.bilibili.com/xlive/web-room/v2/index/getRoomPlayInfo?room_id=3&protocol=0,1&format=0,1,2&codec=0,1&qn=10000'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "room_id": 23058,
    "short_id": 3,
    "uid": 11153765,
    "is_hidden": false,
    "is_locked": false,
    "is_portrait": false,
    "live_status": 1,
    "hidden_till": 0,
    "lock_till": 0,
    "encrypted": false,
    "pwd_verified": true,
    "live_time": 1671425336,
    "room_shield": 1,
    "all_special_types": [],
    "playurl_info": {
      "conf_json": "{\"cdn_rate\":10000,\"report_interval_sec\":150}",
      "playurl": {
        "cid": 23058,
        "g_qn_desc": [
          {
            "qn": 30000,
            "desc": "杜比",
            "hdr_desc": "",
            "attr_desc": null
          },
          {
            "qn": 20000,
            "desc": "4K",
            "hdr_desc": "",
            "attr_desc": null
          },
          {
            "qn": 10000,
            "desc": "原画",
            "hdr_desc": "",
            "attr_desc": null
          },
          {
            "qn": 400,
            "desc": "蓝光",
            "hdr_desc": "HDR",
            "attr_desc": null
          },
          {
            "qn": 250,
            "desc": "超清",
            "hdr_desc": "HDR",
            "attr_desc": null
          },
          {
            "qn": 150,
            "desc": "高清",
            "hdr_desc": "",
            "attr_desc": null
          },
          {
            "qn": 80,
            "desc": "流畅",
            "hdr_desc": "",
            "attr_desc": null
          }
        ],
        "stream": [
          {
            "protocol_name": "http_stream",
            "format": [
              {
                "format_name": "flv",
                "codec": [
                  {
                    "codec_name": "avc",
                    "current_qn": 10000,
                    "accept_qn": [
                      10000,
                      150
                    ],
                    "base_url": "/live-bvc/462997/live_11153765_9369560.flv?",
                    "url_info": [
                      {
                        "host": "https://cn-hbcd-cu-02-20.bilivideo.com",
                        "extra": "expires=1674103815&pt=web&deadline=1674103815&len=0&oi=1963941079&platform=web&qn=10000&trid=1000061f434c07ac4f4184820bfb141e75e8&uipk=100&uipv=100&nbs=1&uparams=cdn,deadline,len,oi,platform,qn,trid,uipk,uipv,nbs&cdn=cn-gotcha01&upsig=f494aa9e92e24943061fe5082494ec44&sk=33541455720f64c7671bc1480acfb176&p2p_type=1&src=57345&sl=1&free_type=0&sid=cn-hbcd-cu-02-20&chash=1&sche=ban&score=12&pp=rtmp&machinezone=jd&source=onetier&trace=0&site=92e80b6f3ebfd393e7d1c1e2e648d9c1&order=1",
                        "stream_ttl": 3600
                      }
                    ],
                    "hdr_qn": null,
                    "dolby_type": 0,
                    "attr_name": ""
                  }
                ]
              }
            ]
          },
          {
            "protocol_name": "http_hls",
            "format": [
              {
                "format_name": "ts",
                "codec": [
                  {
                    "codec_name": "avc",
                    "current_qn": 10000,
                    "accept_qn": [
                      10000,
                      150
                    ],
                    "base_url": "/live-bvc/462997/live_11153765_9369560.m3u8?",
                    "url_info": [
                      {
                        "host": "https://cn-hbcd-cu-02-20.bilivideo.com",
                        "extra": "expires=1674103815&len=0&oi=1963941079&pt=web&qn=10000&trid=1003061f434c07ac4f4184820bfb141e75e8&sigparams=cdn,expires,len,oi,pt,qn,trid&cdn=cn-gotcha01&sign=4f9bcec18e3afdca04b31ffb285ec915&sk=33541455720f64c7671bc1480acfb176&p2p_type=1&src=57345&sl=1&free_type=0&sid=cn-hbcd-cu-02-20&chash=1&sche=ban&score=12&pp=rtmp&machinezone=jd&source=onetier&trace=0&site=92e80b6f3ebfd393e7d1c1e2e648d9c1&order=1",
                        "stream_ttl": 3600
                      }
                    ],
                    "hdr_qn": null,
                    "dolby_type": 0,
                    "attr_name": ""
                  }
                ]
              },
              {
                "format_name": "fmp4",
                "codec": [
                  {
                    "codec_name": "avc",
                    "current_qn": 10000,
                    "accept_qn": [
                      10000,
                      150
                    ],
                    "base_url": "/live-bvc/462997/live_11153765_9369560/index.m3u8?",
                    "url_info": [
                      {
                        "host": "https://cn-hbcd-cu-02-20.bilivideo.com",
                        "extra": "expires=1674103815&len=0&oi=1963941079&pt=web&qn=10000&trid=1007061f434c07ac4f4184820bfb141e75e8&sigparams=cdn,expires,len,oi,pt,qn,trid&cdn=cn-gotcha01&sign=cc57dce528316d8389f2f34e7bd15f5c&sk=a99391b8b4d5779b2e32e41dbc989d2d&flvsk=33541455720f64c7671bc1480acfb176&p2p_type=1&src=57345&sl=1&free_type=0&sid=cn-hbcd-cu-02-20&chash=1&sche=ban&bvchls=1&score=12&pp=rtmp&machinezone=jd&source=onetier&trace=0&site=92e80b6f3ebfd393e7d1c1e2e648d9c1&order=1",
                        "stream_ttl": 3600
                      },
                      {
                        "host": "https://c1--cn-gotcha208.bilivideo.com",
                        "extra": "expires=1674103815&len=0&oi=1963941079&pt=web&qn=10000&trid=1007061f434c07ac4f4184820bfb141e75e8&sigparams=cdn,expires,len,oi,pt,qn,trid&cdn=cn-gotcha208&sign=2ff96adf5056c8dbee546955260fc2df&sk=a99391b8b4d5779b2e32e41dbc989d2d&p2p_type=1&src=57345&sl=1&free_type=0&pp=rtmp&machinezone=jd&source=onetier&trace=0&site=92e80b6f3ebfd393e7d1c1e2e648d9c1&order=2",
                        "stream_ttl": 3600
                      }
                    ],
                    "hdr_qn": null,
                    "dolby_type": 0,
                    "attr_name": ""
                  }
                ]
              }
            ]
          }
        ],
        "p2p_data": {
          "p2p": true,
          "p2p_type": 1,
          "m_p2p": false,
          "m_servers": null
        },
        "dolby_qn": null
      }
    }
  }
}
```

</details>





## 获取直播间主播信息

> https://api.live.bilibili.com/live_user/v1/UserInfo/get_anchor_in_room

*请求方式: GET*

**URL参数：**

| 参数名     | 类型  | 内容   | 必要性 | 备注    |
|---------|-----|------|-----|-------|
| roomid | num | 直播间号 | 必要  | 可以为短号 |


**json回复：**


根对象：

| 字段      | 类型  | 内容   | 备注              |
|---------|-----|------|-----------------|
| code    | num | 返回值  | 0：成功 （直播间不存在也为0） |
| message | str | 错误信息 |                 |
| msg     | str | 错误信息 |                 |
| data    | obj | 信息本体 |                  |



`data`对象：

| 字段                      | 类型        | 内容     | 备注                          |
|-------------------------|-----------|--------|-----------------------------|
| info                     | obj       | 主播信息  |                     |
| level                 | obj       | 直播等级  |                         |
| san                | num       | 主播san值  |       12满分              |


`info`对象:


| 字段              | 类型 | 内容             | 备注     |
|-------------------|------|------------------|----------|
| uid               | num  | 主播mid          |          |
| uname             | str  | 主播用户名          |          |
| face              | str  | 主播头像URL      |          |
| rank              | str  | 主播排名         |          |
| platform_user_level | num  | 平台用户等级     |          |
| mobile_verify     | num  | 手机验证状态     |          |
| identification    | num  | 身份认证状态     |          |
| official_verify   | obj  | 认证信息         |          |
| vip_type          | num  | VIP类型          |          |
| gender            | num  | 主播性别         |     -1：保密<br />0：女<br />1：男     |


`info`中的`official_verify`对象:

| 字段 | 类型 | 内容             | 备注     |
|------|------|----------|-----|
| type | num | 主播认证类型 | -1：无<br />0：个人认证<br />1：机构认证 |
| desc | str | 主播认证信息 |                              |
| role | num  | 未知       |       |

`level`对象:



| 字段         | 类型 |  内容           | 备注     |
|--------------|------|------------------|----------|
| uid          | num  | 用户ID           |          |
| cost         | num  | 消费金额         |          |
| rcost        | num  | 充值金额         |          |
| user_score   | str  | 用户积分         |          |
| vip          | num  | VIP状态          |          |
| vip_time     | str  | VIP到期时间      |          |
| svip         | num  | SVIP状态         |          |
| svip_time    | str  | SVIP到期时间     |          |
| update_time  | str  | 更新时间         |          |
| master_level | obj  | 主播等级     |          |
| user_level   | num  | 用户等级         |          |
| color        | num  | 颜色值           |          |
| anchor_score | num  | 主播积分        |          |



`level` 中的 `master_level`对象:

| 字段              | 类型 | 内容        | 备注     |
|-------------------|------|------------------|----------|
| level             | num  | 主播等级             |          |
| color             | num  | 颜色值           |          |
| current           | list | 当前积分     |          |
| next              | list | 下一等级积分  |          |
| anchor_score      | num  | 主播积分          |          |
| upgrade_score     | num  | 升级积分          |          |
| master_level_color | num  | 主播等级颜色值   |          |
| sort              | str  | 排名             |          |


**示例：**

查询`roomid=1`的直播间主播信息

```shell
curl -G 'https://api.live.bilibili.com/live_user/v1/UserInfo/get_anchor_in_room' \
--data-urlencode 'roomid=1'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "msg": "success",
  "message": "success",
  "data": {
    "info": {
      "uid": 9617619,
      "uname": "哔哩哔哩直播",
      "face": "https://i0.hdslb.com/bfs/face/8f6a614a48a3813d90da7a11894ae56a59396fcd.jpg",
      "rank": "10000",
      "platform_user_level": 6,
      "mobile_verify": 1,
      "identification": 1,
      "official_verify": {
        "type": 1,
        "desc": "哔哩哔哩直播官方账号",
        "role": 3
      },
      "vip_type": 2,
      "gender": -1
    },
    "level": {
      "uid": 9617619,
      "cost": 7782673656,
      "rcost": 20199200291,
      "user_score": "0",
      "vip": 0,
      "vip_time": "0000-00-00 00:00:00",
      "svip": 0,
      "svip_time": "0000-00-00 00:00:00",
      "update_time": "2024-08-08 17:13:12",
      "master_level": {
        "level": 40,
        "color": 16746162,
        "current": [0, 147013810],
        "next": [0, 147013810],
        "anchor_score": 201992002,
        "upgrade_score": 0,
        "master_level_color": 16746162,
        "sort": "\u003E10000"
      },
      "user_level": 60,
      "color": 16752445,
      "anchor_score": 201992002
    },
    "san": 12
  }
}
```

</details>
