# 关注UP主分组

## 分组组名获取
> https://api.bilibili.com/x/relation/tags

*请求方式:GET*

认证方式：Cookie（SESSDATA）或APP

**url参数：无**

**json回复：**

| 字段    | 类型 | 内容     | 备注                                 |
| ------- | ---- | -------- | ------------------------------------ |
| code    | num  | 状态码   | 0：成功<br />-101：账号未登录<br />-500：服务器端异常 |
| message | str  | 错误详情 | 为0表示成功    |
| ttl | num | 1 |  |

`data`对象：

| 字段  | 类型 | 内容         | 备注                           |
| ----- | ---- | ------------ | ------------------------------ |
| tagid | num  | 分组ID       | -10：特别关注<br />0：默认分组 |
| name  | str  | 分组名       |                                |
| count | num  | 分组内UP个数 |                                |
| tip   | str  | 分组备注     |                                |

**示例：**

```shell
curl 'https://api.bilibili.com/x/relation/tags' \
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
      "tagid": -10,
      "name": "特别关注",
      "count": 1,
      "tip": "第一时间收到该分组下用户更新稿件的通知"
    },
    {
      "tagid": 0,
      "name": "默认分组",
      "count": 3,
      "tip": ""
    },
    {
      "tagid": 489683,
      "name": "游戏",
      "count": 30,
      "tip": ""
    },
    {
      "tagid": 489684,
      "name": "娱乐",
      "count": 30,
      "tip": ""
    },
    {
      "tagid": 489685,
      "name": "其他",
      "count": 19,
      "tip": ""
    },
    {
      "tagid": 489687,
      "name": "知识与学习",
      "count": 44,
      "tip": ""
    },
    {
      "tagid": 551189,
      "name": "美食",
      "count": 9,
      "tip": ""
    }
  ]
}
```
</details>


## 组内具体UP主名单获取
> https://api.bilibili.com/x/relation/tag

*请求方式:GET*

认证方式：Cookie（SESSDATA）或APP

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注 |
| ---- | ---- | ---- | ---- | ---- |
| mid | num | 用户id | ^*^必要 | ?mid |
| tagid | num | 分组id | ^*^必要 | &tagid |
| pn | num | 页码 | 非必要 | &pn 默认1 |
| ps | num | 每页条数 | 非必要 | &ps 默认20 |

**json回复：**

| 字段    | 类型 | 内容     | 备注                                 |
| ------- | ---- | -------- | ------------------------------------ |
| code    | num  | 状态码   | 0：成功<br />-101：账号未登录<br />-500：服务器端异常<br />22104：该分组不存在 |
| message | str  | 错误详情 | 为0表示成功    |
| ttl | num | 1 |  |

`data`对象：

| 字段            | 类型 | 内容        | 备注           |
| --------------- | ---- | ----------- | -------------- |
| mid             | num  | 用户id      |                |
| attribute       | num  | 0           |                |
| tag             | null | null        |                |
| special         | num  | 0           |                |
| contract_info   | json | 空的        |                |
| uname           | str  | 用户名      |                |
| face            | str  | 头像地址    |                |
| sign            | str  | 个人简介    |                |
| face_nft        | int  | ntf头像     |                |
| official_verify | json | 官方认证    | 具体见下       |
| vip             | json | 大会员      | 参考大会员文档 |
| live            | json | 直播状态    | 具体见下       |
| nft_icon        | str  | 显示nft角标 |                |
| rec_reason      | str  |             |                |
| track_id        | str  |             |                |

`data`对象中的`official_verify`：
| 字段 | 类型 | 内容         | 备注 |
| ---- | ---- | ------------ | ---- |
| type | num  | 0            |      |
| desc | str  | 官方认证内容 |      |

`data`对象中的`live`：
| 字段        | 类型 | 内容     | 备注                 |
| ----------- | ---- | -------- | -------------------- |
| live_status | num  | 0或1     | 0：未开播，1：已直播 |
| jump_url    | str  | 直播链接 |                      |

**示例：**

```shell
curl 'https://api.bilibili.com/x/relation/tag?mid=yourUid' \
--data-urlencode tagid=55507376' \
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
      "mid": 413703,
      "attribute": 0,
      "tag": null,
      "special": 0,
      "contract_info": {
        
      },
      "uname": "独立游戏蜥蜴君",
      "face": "https://i0.hdslb.com/bfs/face/d3d7f0f9e2e0eb5abdd5b31cf6592f8927e9e9ca.jpg",
      "sign": "之前的2000人独游群被人恶意举报了，新群→475085022    商务合作V：Lxi-Game",
      "face_nft": 0,
      "official_verify": {
        "type": 0,
        "desc": "优质游戏鉴赏家"
      },
      "vip": {
        "vipType": 2,
        "vipDueDate": 1709740800000,
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
      "live": {
        "live_status": 0,
        "jump_url": ""
      },
      "nft_icon": "",
      "rec_reason": "",
      "track_id": ""
    },
    {
      "mid": 1125521422,
      "attribute": 0,
      "tag": null,
      "special": 0,
      "contract_info": {
        
      },
      "uname": "顾北国服元芳",
      "face": "https://i1.hdslb.com/bfs/face/fe70fb1e542f2ec66ed3bde3c9d1c84b1f0c6f25.jpg",
      "sign": "听说关注顾北都会上到荣耀王者。巅峰上分v：1452737985",
      "face_nft": 0,
      "official_verify": {
        "type": -1,
        "desc": ""
      },
      "vip": {
        "vipType": 1,
        "vipDueDate": 1688832000000,
        "dueRemark": "",
        "accessStatus": 0,
        "vipStatus": 1,
        "vipStatusWarn": "",
        "themeType": 0,
        "label": {
          "path": "",
          "text": "大会员",
          "label_theme": "vip",
          "text_color": "#FFFFFF",
          "bg_style": 1,
          "bg_color": "#FB7299",
          "border_color": ""
        },
        "avatar_subscript": 1,
        "nickname_color": "#FB7299",
        "avatar_subscript_url": ""
      },
      "live": {
        "live_status": 0,
        "jump_url": ""
      },
      "nft_icon": "",
      "rec_reason": "",
      "track_id": ""
    },
    {
      "mid": 1440693803,
      "attribute": 0,
      "tag": null,
      "special": 0,
      "contract_info": {
        
      },
      "uname": "TeamRanger工作室",
      "face": "https://i2.hdslb.com/bfs/face/4ab82a15c1a413253b11c4885b2d4e3bf4345e37.jpg",
      "sign": "善于制作各种BUG的重型火力爱好者。群号请查看我们的首支视频简介。官网：https://www.outpostgame.net/",
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
      "live": {
        "live_status": 0,
        "jump_url": ""
      },
      "nft_icon": "",
      "rec_reason": "",
      "track_id": ""
    },
    {
      "mid": 1197454103,
      "attribute": 0,
      "tag": null,
      "special": 0,
      "contract_info": {
        
      },
      "uname": "重返未来1999",
      "face": "https://i2.hdslb.com/bfs/face/6a1936d5cb5b315311fedbf2d4793c4d404cac83.jpg",
      "sign": "1999年最后一天，一场“暴雨”坠入深空，世界似乎来到一个崭新的…...旧时代。",
      "face_nft": 0,
      "official_verify": {
        "type": 1,
        "desc": "重返未来：1999 手游官方账号"
      },
      "vip": {
        "vipType": 2,
        "vipDueDate": 1723910400000,
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
      "live": {
        "live_status": 0,
        "jump_url": ""
      },
      "nft_icon": "",
      "rec_reason": "",
      "track_id": ""
    }
  ]
}
```
</details>