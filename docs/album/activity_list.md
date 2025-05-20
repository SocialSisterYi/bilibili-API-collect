# 相簿活动列表

<details>
<summary>功能已下线</summary>

## 获取相簿热门活动列表

> https://api.vc.bilibili.com/photo_activity/v2/Activity/list

*请求方式：GET*

**url参数：**

| 参数名    | 类型 | 内容     | 必要性 | 备注                                          |
| --------- | ---- | -------- | ------ | --------------------------------------------- |
| type      | num  | 活动类型 | 非必要 | 0：全部<br/>1：展示类<br/>2：比赛类           |
| biz       | num  | 分区     | 非必要 | 0：全部<br />1：画友<br/>2：摄影<br />默认为0 |
| page_num  | num  | 页码     | 非必要 | 默认为4                                       |
| page_size | num  | 每页项数 | 非必要 | 默认为0                                       |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                     |
| ------- | ---- | -------- | ------------------------ |
| code    | num  | 返回值   | 0：成功<br />1：参数错误 |
| msg     | str  | 错误信息 | 默认为success            |
| message | str  | 错误信息 | 默认为success            |
| data    | obj  | 信息本体 |                          |

`data`对象：

| 字段        | 类型  | 内容       | 备注 |
| ----------- | ----- | ---------- | ---- |
| total_count | str   | 总计活动数 |      |
| items       | array | 活动列表   |      |

`data`中的`items`数组：

| 项   | 类型 | 内容       | 备注 |
| ---- | ---- | ---------- | ---- |
| 0    | obj  | 活动 1     |      |
| n    | obj  | 活动 (n+1) |      |
| ……   | obj  | ……         | ……   |

`data`中的`items`数组中的对象：

| 字段       | 类型 | 内容          | 备注                     |
| ---------- | ---- | ------------- | ------------------------ |
| cover      | str  | 活动图片url   |                          |
| title      | str  | 活动标题      |                          |
| link       | str  | 活动页面url   |                          |
| type       | num  | 活动类型      | 1：展示类<br/>2：比赛类  |
| biz        | num  | 所属分区      | 1：画友<br/>2：摄影      |
| tag        | str  | 活动关联的TAG |                          |
| start_time | num  | 开始时间      | 时间戳                   |
| end_time   | num  | 结束时间      | 时间戳                   |
| desc       | str  | 备注          |                          |
| desc_type  | num  | 活动状态      | 1：已结束<br />2：进行中 |

**示例：**

获取`画友`分区，全部类型的5条活动

```shell
curl -G 'https://api.vc.bilibili.com/photo_activity/v2/Activity/list' \
--data-urlencode 'type=0' \
--data-urlencode 'biz=1' \
--data-urlencode 'page_num=0' \
--data-urlencode 'page_size=5'
```

<details>
<summary>查看响应示例：</summary>


```json
{
    "code": 0,
    "msg": "success",
    "message": "success",
    "data": {
        "total_count": 21,
        "items": [
            {
                "cover": "http://i0.hdslb.com/bfs/vc/344d175cf88f217ce8bd0f004a2c5e770eff2e03.png",
                "title": "#月饼拟人#创作大赛！丰厚奖励等你来拿！",
                "link": "https://www.bilibili.com/read/cv1102416",
                "type": 1,
                "biz": 1,
                "tag": "",
                "start_time": 1535817600,
                "end_time": 1540915200,
                "desc": "已结束",
                "desc_type": 1
            },
            {
                "cover": "http://i0.hdslb.com/bfs/vc/63d48fbc37f0142a9c72e06ebc950d4089f881d6.png",
                "title": "「ISLAND」同人绘画大赛",
                "link": "https://www.bilibili.com/blackboard/activity-rkOlNomMQ.html",
                "type": 2,
                "biz": 1,
                "tag": "ISLAND同人绘画",
                "start_time": 1530720000,
                "end_time": 1534435200,
                "desc": "已结束",
                "desc_type": 1
            },
            {
                "cover": "http://i0.hdslb.com/bfs/vc/08d20bc6c10e1e310946ebaaf56c2c90c921644d.jpg",
                "title": "我家大师兄脑子有坑同人绘画大赛",
                "link": "https://www.bilibili.com/blackboard/activity-S1lV0Ot6M.html",
                "type": 2,
                "biz": 1,
                "tag": "兄坑同人绘画大赛",
                "start_time": 1525449600,
                "end_time": 1528473600,
                "desc": "已结束",
                "desc_type": 1
            },
            {
                "cover": "http://i0.hdslb.com/bfs/vc/4eb48398ec0824e96fc878235536f2e0b4a8aef5.jpg",
                "title": "国宝复“活”计划",
                "link": "https://www.bilibili.com/blackboard/activity-SJ4hL_UFz.html",
                "type": 2,
                "biz": 1,
                "tag": "国宝复“活”计划",
                "start_time": 1521388800,
                "end_time": 1525017600,
                "desc": "已结束",
                "desc_type": 1
            },
            {
                "cover": "http://i0.hdslb.com/bfs/vc/9068f91f62ea5a36cbafff263d7e47af99cc9836.jpg",
                "title": "画师专访——管郁生",
                "link": "https://www.bilibili.com/blackboard/interview-guanyusheng.html",
                "type": 1,
                "biz": 1,
                "tag": "",
                "start_time": 1517414400,
                "end_time": 0,
                "desc": "进行中",
                "desc_type": 2
            }
        ]
    }
}
```

</details>
</details>
