# 相簿基本信息

<details>
<summary>功能已下线</summary>

## 获取相簿详细信息

>https://api.vc.bilibili.com/link_draw/v1/doc/detail

*请求方式：GET*

认证方式：Cookie（SESSDSTA）

**url参数：**

| 参数名 | 类型 | 内容       | 必要性 | 备注 |
| ------ | ---- | ---------- | ------ | ---- |
| doc_id | num  | 目标相簿id | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                |
| ------- | ---- | -------- | ----------------------------------- |
| code    | num  | 返回值   | 0：成功<br />110001：找不到目标相簿 |
| msg     | str  | 错误信息 | 默认为success                       |
| message | str  | 错误信息 | 默认为success                       |
| data    | obj  | 信息本体 |                                     |

`data`对象：

| 字段 | 类型 | 内容     | 备注 |
| ---- | ---- | -------- | ---- |
| user | obj  | 作者信息 |      |
| item | obj  | 相簿信息 |      |

`data`中的`user`对象：

| 字段         | 类型 | 内容       | 备注 |
| ------------ | ---- | ---------- | ---- |
| uid          | num  | 作者mid    |      |
| head_url     | str  | 头像url    |      |
| name         | str  | 昵称       |      |
| vip          | obj  | 会员信息   |      |
| upload_count | str  | 相簿投稿数 |      |

`user`中的`vip`对象：

| 字段          | 类型 | 内容         | 备注                                              |
| ------------- | ---- | ------------ | ------------------------------------------------- |
| vipType       | num  | 会员类型     | 0：无<br />1：月度大会员<br />2：年度及以上大会员 |
| vipDueDate    | num  | 会员到期时间 | 毫秒 时间戳                                       |
| dueRemark     | str  | 空           | 作用尚不明确                                      |
| accessStatus  | num  | 0            | 作用尚不明确                                      |
| vipStatus     | num  | 会员开通状态 | 0：无<br />1：有                                  |
| vipStatusWarn | str  | 空           | 作用尚不明确                                      |
| themeType     | num  | 0            | 作用尚不明确                                      |
| label         | obj  | ？           | 作用尚不明确                                      |

`vip`中的`label`对象：

| 字段 | 类型 | 内容 | 备注         |
| ---- | ---- | ---- | ------------ |
| path | str  | 空   | 作用尚不明确 |

`data`中的`item`对象：

| 字段              | 类型  | 内容               | 备注                                                         |
| ----------------- | ----- | ------------------ | ------------------------------------------------------------ |
| biz               | num   | 相簿分区           | 1：画友<br />2：摄影<br />3：日常                            |
| doc_id            | num   | 相簿id             |                                                              |
| poster_uid        | num   | 作者mid            |                                                              |
| category          | str   | 子分区标识         | cos：cosplay<br />daily：日常<br />illustration：插画<br />comic：漫画<br />draw：其他<br />sifu：私服 |
| type              | num   | 相簿类型           | 0：原创<br />1：同人                                         |
| title             | str   | 标题               |                                                              |
| tags              | array | 相簿TAG            |                                                              |
| pictures          | array | 相簿图片           |                                                              |
| source            | null  |                    | 作用尚不明确                                                 |
| upload_time       | str   | 投稿时间（时间码） | YYYY-MM-DD hh:mm:ss                                          |
| upload_timestamp  | num   | 投稿时间（时间戳） |                                                              |
| upload_time_text  | str   | 投稿时间（文本）   |                                                              |
| description       | str   | 简介               |                                                              |
| role              | null  |                    | 作用尚不明确                                                 |
| settings          | obj   | 权限配置           |                                                              |
| already_collected | num   | 是否已收藏         | 需要登录（Cookie）<br />否则恒为0                            |
| already_liked     | num   | 0                  | 作用尚不明确                                                 |
| user_status       | num   | 0                  | 作用尚不明确                                                 |
| at_control        | str   | 空                 | 作用尚不明确                                                 |
| view_count        | num   | 观看数             |                                                              |
| like_count        | num   | 0                  | 作用尚不明确                                                 |
| collect_count     | num   | 收藏数             |                                                              |
| verify_status     | num   | 1                  | 作用尚不明确                                                 |
| already_voted     | num   | 是否已点赞         | 需要登录（Cookie）<br />否则恒为0                            |
| vote_count        | num   | 点赞数             |                                                              |
| comment_count     | num   | 评论数             |                                                              |

`item`中的`tags`数组：

| 项   | 类型 | 内容      | 备注 |
| ---- | ---- | --------- | ---- |
| 0    | obj  | TAG 1     |      |
| n    | obj  | TAG (n+1) |      |
| ……   | obj  | ……        | ……   |

`item`中的`tags`数组中的对象：

| 字段     | 类型 | 内容            | 备注            |
| -------- | ---- | --------------- | --------------- |
| tag      | str  | TAG名           |                 |
| type     | num  | 类型？          |                 |
| category | str  | TAG所属子分区名 |                 |
| link     | str  | 活动页面url     | 是活动TAG有此项 |
| text     | str  | TAG名           |                 |
| name     | str  | TAG名           |                 |

`item`中的`pictures`数组：

| 项   | 类型 | 内容       | 备注 |
| ---- | ---- | ---------- | ---- |
| 0    | obj  | 图片 1     |      |
| n    | obj  | 图片 (n+1) |      |
| ……   | obj  | ……         | ……   |

`item`中的`pictures`数组中的对象：

| 字段       | 类型 | 内容     | 备注        |
| ---------- | ---- | -------- | ----------- |
| img_src    | str  | 图片url  |             |
| img_width  | num  | 图片宽度 |             |
| img_height | num  | 图片高度 |             |
| img_size   | num  | 图片大小 | 单位为KByte |

`item`中的`settings`对象：

| 字段           | 类型 | 内容         | 备注                                                         |
| -------------- | ---- | ------------ | ------------------------------------------------------------ |
| copy_forbidden | num  | 禁止转载标志 | 0：不设置转载权限<br />1：开放授权-署名-非商用转载<br />2：作者授权-署名-非商用转载<br />3：禁止转载 |

**示例：**

查询相簿`id=99184721`的详细信息

```shell
curl -G 'https://api.vc.bilibili.com/link_draw/v1/doc/detail' \
--data-urlencode 'doc_id=99184721' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>


```json
{
    "code": 0,
    "msg": "success",
    "message": "success",
    "data": {
        "user": {
            "uid": 813818,
            "head_url": "https://i2.hdslb.com/bfs/face/26b12390399f3e82fb913922938f8a6662d28665.jpg",
            "name": "QYS3",
            "vip": {
                "vipType": 2,
                "vipDueDate": 1613750400000,
                "dueRemark": "",
                "accessStatus": 0,
                "vipStatus": 1,
                "vipStatusWarn": "",
                "themeType": 0,
                "label": {
                    "path": ""
                }
            },
            "upload_count": "171"
        },
        "item": {
            "biz": 1,
            "doc_id": 99184721,
            "poster_uid": 813818,
            "category": "illustration",
            "type": 1,
            "title": "旅行",
            "tags": [
                {
                    "tag": "魔女之旅",
                    "type": 4,
                    "category": "illustration",
                    "text": "魔女之旅",
                    "name": "魔女之旅"
                },
                {
                    "tag": "伊蕾娜",
                    "type": 3,
                    "category": "illustration",
                    "text": "伊蕾娜",
                    "name": "伊蕾娜"
                },
                {
                    "tag": "旅行",
                    "type": 3,
                    "category": "illustration",
                    "text": "旅行",
                    "name": "旅行"
                },
                {
                    "tag": "魔女",
                    "type": 3,
                    "category": "illustration",
                    "text": "魔女",
                    "name": "魔女"
                }
            ],
            "pictures": [
                {
                    "img_src": "https://i0.hdslb.com/bfs/album/d531e3dae34ef65b44ecdb2914d4cc4f5a4da998.jpg",
                    "img_width": 1236,
                    "img_height": 1600,
                    "img_size": 508
                }
            ],
            "source": null,
            "upload_time": "2020-11-23 23:03:12",
            "upload_timestamp": 1606143792,
            "upload_time_text": "3天前",
            "description": "伊蕾娜世界第一~！",
            "role": null,
            "settings": {
                "copy_forbidden": 0
            },
            "already_collected": 0,
            "already_liked": 0,
            "user_status": 0,
            "at_control": "",
            "view_count": 143699,
            "like_count": 0,
            "collect_count": 54,
            "verify_status": 1,
            "already_voted": 0,
            "vote_count": 2258,
            "comment_count": 98
        }
    }
}
```

</details>
</details>
