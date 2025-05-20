# 直播间分区

## 获取全部直播间分区列表

> https://api.live.bilibili.com/room/v1/Area/getList

*请求方式：GET*

直播分区共有两级，分别是父分区和子分区

**json回复：**

根对象：

| 字段    | 类型   | 内容       | 备注          |
| ------- | ------ | ---------- | ------------- |
| code    | num    | 返回值     | 0：成功       |
| msg     | str    | 错误信息   | 默认为success |
| message | str    | 错误信息   | 默认为success |
| data    | array | 父分区列表 |               |

`data`数组：

| 项   | 类型 | 内容        | 备注 |
| ---- | ---- | ----------- | ---- |
| 0    | obj  | 父分区1     |      |
| n    | obj  | 父分区(n+1) |      |
| ……   | obj  | ……          | ……   |

`data`数组中的对象：

| 字段 | 类型 | 内容       | 备注 |
| ---- | ---- | ---------- | ---- |
| id   | num  | 父分区id   |      |
| name | name | 父分区名   |      |
| list | list | 子分区列表 |      |

`data`数组中的对象中的`list`数组：

| 项   | 类型 | 内容        | 备注 |
| ---- | ---- | ----------- | ---- |
| 0    | obj  | 子分区1     |      |
| n    | obj  | 子分区(n+1) |      |
| ……   | obj  | ……          | ……   |

`list`数组中的对象：

| 字段        | 类型 | 内容              | 备注             |
| ----------- | ---- | ----------------- | ---------------- |
| id          | str  | 子分区id          |                  |
| parent_id   | str  | 父分区id          |                  |
| old_area_id | str  | 旧分区id          |                  |
| name        | str  | 子分区名          |                  |
| act_id      | str  | 0                 | **作用尚不明确** |
| pk_status   | str  | ？？？            | **作用尚不明确** |
| hot_status  | num  | 是否为热门分区    | 0：否<br />1：是 |
| lock_status | str  | 0                 | **作用尚不明确** |
| pic         | str  | 子分区标志图片url |                  |
| parent_name | str  | 父分区名          |                  |
| area_type   | num  |                   |                  |

**示例：**

如想在`网游`父分区下的`英雄联盟`分区开播，则查到子分区id为`86`

```shell
curl 'https://api.live.bilibili.com/room/v1/Area/getList'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "msg": "success",
    "message": "success",
    "data": [
        {
            "id": 2,
            "name": "网游",
            "list": [
                {
                    "id": "86",
                    "parent_id": "2",
                    "old_area_id": "4",
                    "name": "英雄联盟",
                    "act_id": "0",
                    "pk_status": "0",
                    "hot_status": 1,
                    "lock_status": "0",
                    "pic": "http://i0.hdslb.com/bfs/vc/dcfb14f14ec83e503147a262e7607858b05d7ac0.png",
                    "parent_name": "网游",
                    "area_type": 0
                },
                {
                    "id": "252",
                    "parent_id": "2",
                    "old_area_id": "3",
                    "name": "逃离塔科夫",
                    "act_id": "0",
                    "pk_status": "0",
                    "hot_status": 1,
                    "lock_status": "0",
                    "pic": "http://i0.hdslb.com/bfs/vc/762a7de3dd5fe8165d1d55b232484a017941592f.png",
                    "parent_name": "网游",
                    "area_type": 0
                },
                {
                    "id": "80",
                    "parent_id": "2",
                    "old_area_id": "1",
                    "name": "绝地求生",
                    "act_id": "0",
                    "pk_status": "0",
                    "hot_status": 1,
                    "lock_status": "0",
                    "pic": "http://i0.hdslb.com/bfs/vc/43ca83fdcd10505eaeef1b76cf8ce642a53b94da.png",
                    "parent_name": "网游",
                    "area_type": 0
                },
               …………
            ]
        },
        {
            "id": 3,
            "name": "手游",
            "list": [
                {
                    "id": "35",
                    "parent_id": "3",
                    "old_area_id": "12",
                    "name": "王者荣耀",
                    "act_id": "0",
                    "pk_status": "0",
                    "hot_status": 1,
                    "lock_status": "0",
                    "pic": "http://i0.hdslb.com/bfs/vc/0fefa924760b2dd492a12dddafe179bfa1216918.png",
                    "parent_name": "手游",
                    "area_type": 0
                },
               …………
            ]
        },
        {
            "id": 6,
            "name": "单机",
            "list": [
                {
                    "id": "236",
                    "parent_id": "6",
                    "old_area_id": "1",
                    "name": "主机游戏",
                    "act_id": "0",
                    "pk_status": "0",
                    "hot_status": 1,
                    "lock_status": "0",
                    "pic": "http://i0.hdslb.com/bfs/vc/edb636ee59f902e3134a2790545045bddd70978e.png",
                    "parent_name": "单机",
                    "area_type": 0
                },
               …………
            ]
        },
        {
            "id": 1,
            "name": "娱乐",
            "list": [
                {
                    "id": "21",
                    "parent_id": "1",
                    "old_area_id": "10",
                    "name": "视频唱见",
                    "act_id": "0",
                    "pk_status": "1",
                    "hot_status": 1,
                    "lock_status": "0",
                    "pic": "http://i0.hdslb.com/bfs/vc/72b93ddafdf63c9f0b626ad546847a3c03c92b6f.png",
                    "cate_id": "12",
                    "parent_name": "娱乐",
                    "area_type": 0
                },
                …………
            ]
        },
        {
            "id": 5,
            "name": "电台",
            "list": [
                {
                    "id": "190",
                    "parent_id": "5",
                    "old_area_id": "10",
                    "name": "唱见电台",
                    "act_id": "0",
                    "pk_status": "0",
                    "hot_status": 0,
                    "lock_status": "0",
                    "pic": "http://i0.hdslb.com/bfs/vc/d22d7fafbf9b24e2bc3ce1df5eb9f006e6035e5d.png",
                    "parent_name": "电台",
                    "area_type": 0
                },
                …………
            ]
        }
    ]
}
```

</details>
