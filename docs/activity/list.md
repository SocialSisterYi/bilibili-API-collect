# 活动列表

## 获取活动列表

> https://api.bilibili.com/x/activity/page/list

*请求方式: GET*

**URL参数:**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| plat   | str | 活动平台类型? | 必要 | 可选范围 [1, 3], 以半角逗号分隔, 默认 `1,3` |
| mold   | int | 0 | 非必要 | |
| http   | int | 3 | 非必要 | |
| pn     | int | 目标页码 | 非必要 | 默认为 `1` |
| ps     | int | 每页条数 | 非必要 | 默认为 `15` |

**JSON回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| - | - | - | - |
| code | int | 返回值 | 0：成功<br />-400：请求错误 |
| message | str | 错误信息 | 默认为 0 |
| ttl | int | 1 |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| - | - | - | - |
| list | array | 活动列表 |  |
| num | int | 当前页码 |  |
| size | int | 每页条数 |  |
| total | int | 总条数 |  |

`list` 数组中的对象:

| 字段 | 类型 | 内容 | 备注 |
| - | - | - | - |
| id | int | 活动 ID |  |
| state | int | 1 | |
| stime | int | 开始时间 | UNIX 秒级时间戳 |
| etime | int | 结束时间 | UNIX 秒级时间戳 |
| ctime | int | 创建时间? | UNIX 秒级时间戳, 可能为 0 |
| mtime | int | 修改时间? | UNIX 秒级时间戳, 可能为 0 |
| name | str | 活动名称 |  |
| author | str | 空 ||
| pc_url | str | 空 ||
| rank | int | 0 |  |
| h5_url | str | 活动链接 |  |
| pc_cover | str | 空 |  |
| h5_cover | str | 活动封面 |  |
| page_name | str | 页面名称 |  |
| plat | int | 活动平台类型? | 即 URL 中 `plat` 参数 |
| desc | str | 活动描述 |  |
| click | int | 0 |  |
| type | int | 0 |  |
| mold | int | 0 |  |
| series | int | 0 |  |
| dept | int | 0 |  |
| reply_id | int | 0 |  |
| tp_id | int | 0 |  |
| ptime | int | 0 |  |
| catalog | int | 0 |  |
| creator | str | 空 |  |
| spm_id | str | 空 |  |

**示例:**

```shell
curl -G 'https://api.bilibili.com/x/activity/page/list' \
--url-query 'plat=1,2,3' \
--url-query 'ps=4'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "list": [
      {
        "id": 207,
        "state": 1,
        "stime": 1723262400,
        "etime": 1724774399,
        "ctime": 0,
        "mtime": 0,
        "name": "原神fes2024",
        "author": "",
        "pc_url": "",
        "rank": 0,
        "h5_url": "https://www.bilibili.com/blackboard/era/DK8i0NS7fxwcLBgm.html",
        "pc_cover": "",
        "h5_cover": "https://i0.hdslb.com/bfs/activity-plat/static/d32c2bb79f59192cb072d7bf79b61c6d/In2tYOLFTZ.png",
        "page_name": "原神fes2024",
        "plat": 2,
        "desc": "",
        "click": 0,
        "type": 0,
        "mold": 0,
        "series": 0,
        "dept": 0,
        "reply_id": 0,
        "tp_id": 0,
        "ptime": 0,
        "catalog": 0,
        "creator": "",
        "spm_id": ""
      },
      {
        "id": 210,
        "state": 1,
        "stime": 1723219200,
        "etime": 1725983999,
        "ctime": 0,
        "mtime": 0,
        "name": "暗区突围端游海外版全员夺金冲榜挑战赛",
        "author": "",
        "pc_url": "",
        "rank": 0,
        "h5_url": "https://www.bilibili.com/blackboard/era/UP8CZSTfboDVZuGr.html",
        "pc_cover": "",
        "h5_cover": "https://i0.hdslb.com/bfs/activity-plat/static/f9a67e268d55d029e6b27d81246fc59a/LPN9dlcRlW.png",
        "page_name": "暗区突围端游海外版全员夺金冲榜挑战赛",
        "plat": 2,
        "desc": "",
        "click": 0,
        "type": 0,
        "mold": 0,
        "series": 0,
        "dept": 0,
        "reply_id": 0,
        "tp_id": 0,
        "ptime": 0,
        "catalog": 0,
        "creator": "",
        "spm_id": ""
      },
      {
        "id": 199,
        "state": 1,
        "stime": 1723089600,
        "etime": 1725897599,
        "ctime": 0,
        "mtime": 0,
        "name": "剑与远征：启程公测创作者激励",
        "author": "",
        "pc_url": "",
        "rank": 0,
        "h5_url": "https://www.bilibili.com/blackboard/era/HkHatvvW9nJZXEMh.html",
        "pc_cover": "",
        "h5_cover": "https://i0.hdslb.com/bfs/activity-plat/static/7785e7ecb0434c85530b92e3586f32ff/CgKENr0ftC.jpeg",
        "page_name": "剑与远征：启程公测创作者激励",
        "plat": 2,
        "desc": "",
        "click": 0,
        "type": 0,
        "mold": 0,
        "series": 0,
        "dept": 0,
        "reply_id": 0,
        "tp_id": 0,
        "ptime": 0,
        "catalog": 0,
        "creator": "",
        "spm_id": ""
      },
      {
        "id": 203,
        "state": 1,
        "stime": 1723089600,
        "etime": 1724255999,
        "ctime": 0,
        "mtime": 0,
        "name": "王者荣耀新英雄少司缘创作激励",
        "author": "",
        "pc_url": "",
        "rank": 0,
        "h5_url": "https://www.bilibili.com/blackboard/era/g0gn2j4ZENrCLYLn.html",
        "pc_cover": "",
        "h5_cover": "https://i0.hdslb.com/bfs/activity-plat/static/a99ba278036e9fbfa81b9100d13d9e7e/9UHZg6r0Y5.jpg",
        "page_name": "王者荣耀新英雄少司缘创作激励",
        "plat": 2,
        "desc": "",
        "click": 0,
        "type": 0,
        "mold": 0,
        "series": 0,
        "dept": 0,
        "reply_id": 0,
        "tp_id": 0,
        "ptime": 0,
        "catalog": 0,
        "creator": "",
        "spm_id": ""
      }
    ],
    "num": 1,
    "size": 4,
    "total": 5391
  }
}
```

</details>
