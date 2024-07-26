# 合集和视频列表信息

## 获取视频合集信息

> https://api.bilibili.com/x/polymer/web-space/seasons_archives_list (需验证referer)
>
> https://api.bilibili.com/x/polymer/space/seasons_archives_list (旧接口, 无鉴权验证)

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
|--------|-----|------|--------|-----|
| mid  | num | 用户 mid | 必要 | 创建者的 mid，但也可以是任意的非负整数 |
| season_id  | num | 视频合集 ID | 必要 |  |
| sort_reverse  | bool | 排序方式 | 可选 | true: 升序排序<br />false: 默认排序 |
| page_num  | num | 页码索引 | 可选 | 默认为 1 |
| page_size  | num | 单页内容数量 | 可选 | 默认为 30 |
| gaia_vtoken | str | 风控验证? | 可选 | 若被风控则必要(如User-Agent不正常) |
| web_location | str | 页面位置? | 可选 | 333.999 |
| w_rid | str | WBI 签名 | 可选 | 参见 [WBI 签名](../misc/sign/wbi.md) |
| wts | num | UNIX 秒级时间戳 | 可选 | 参见 [WBI 签名](../misc/sign/wbi.md) |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                                                                                 |
|---------|-----|------|------------------------------------------------------------------------------------|
| code    | num | 返回值  | 0：成功 |
| message | str | 错误信息 | 默认为0 |
| ttl     | num | 1    | |
| data    | obj | 信息本体 | |

`data`对象：

| 字段                    | 类型    | 内容                           | 备注                                                         |
| ----------------------- | ------- | ------------------------------ | ----------------------------------------------------------- |
| aids                    | array     | 稿件 avid 列表                       | 对应下方数组中内容 aid                                       |
| archives                | array     | 合集中的视频                    |                                                            |
| meta                    | obj       | 合集元数据                      |                                                            |
| page                    | obj       | 分页信息                        |                                                            |

`data`中的`archives`数组：

| 项   | 类型  | 内容       | 备注      |
|-----|-----|----------|---------|
| 0   | obj | 合集内容     |  |
| n   | obj | (n+1)P内容 |         |
| ……  | obj | ……       | ……      |

`archives`数组中的对象：

| 字段       | 类型  | 内容   | 备注  |
|----------|-----|------|-----|
| aid | num | 稿件 avid ||
| bvid | str | 稿件 bvid ||
| ctime | num | 创建时间 | Unix 时间戳 |
| duration | num | 视频时长 | 单位为秒 |
| enable_vt | bool | false | 旧接口无 |
| interactive_video | bool | 是否是互动视频 | |
| pic | str | 封面 URL ||
| playback_position | num || 会随着播放时间增长，播放完成后为 -1 。单位未知 |
| pubdate | num | 发布日期 | Unix 时间戳 |
| stat | obj | 稿件信息 ||
| state | num | 0 ||
| title | str | 稿件标题||
| ugc_pay | num | UGC 付费? | 0: 否 |
| vt_display | str | 空 | 旧接口无 |

`archives`中的`stat`对象：

| 字段       | 类型  | 内容   | 备注  |
|----------|-----|------|-----|
| view | num | 稿件播放量 ||
| vt | num | 0 ||

`data`中的`meta`对象：

| 字段              | 类型  | 内容           | 备注     |
|-----------------|-----|--------------|--------|
| category | num | 0 |  |
| cover | str | 合集封面 URL |  |
| description | str | 合集描述 |  |
| mid | num | UP 主 ID |  |
| name | str | 合集标题 |  |
| ptime | num | 发布时间 | Unix 时间戳 |
| season_id | num | 合集 ID |  |
| total | num | 合集内视频数量 |  |

`data`中的`page`对象：

| 字段              | 类型  | 内容           | 备注     |
|-----------------|-----|--------------|--------|
| page_num | num | 分页页码 |  |
| page_size | num | 单页个数 |  |
| total | num | 合集内视频数量 |  |

**示例:**

获取 `mid=37737161` 的 `season_id=1227671` 视频合集信息，默认排序，第 1 页，每页 30 个视频

```shell
curl -G "https://api.bilibili.com/x/polymer/space/seasons_archives_list" \
--data-urlencode "mid=37737161" \
--data-urlencode "sort_reverse=false" \
--data-urlencode "season_id=1227671" \
--data-urlencode "page_num=1" \
--data-urlencode "page_size=30"
```

<details>
<summary>查看响应示例:</summary>


```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "aids": [
      311606079,
      400546145
    ],
    "archives": [
      {
        "aid": 311606079,
        "bvid": "BV1XN411K7g9",
        "ctime": 1679651747,
        "duration": 261,
        "interactive_video": false,
        "pic": "http://i2.hdslb.com/bfs/archive/234e6bd061176dba9e148f4373c52fa7cd2d801f.jpg",
        "pubdate": 1679651747,
        "stat": {
          "view": 12145
        },
        "state": 0,
        "title": "某些IT社区平台乱象，文章千篇一律，毫不注重版权，文章互相抄袭成潮流，希望能够好好管管！",
        "ugc_pay": 0
      },
      {
        "aid": 400546145,
        "bvid": "BV1qo4y1L73P",
        "ctime": 1682777426,
        "duration": 335,
        "interactive_video": false,
        "pic": "http://i2.hdslb.com/bfs/archive/a6b6fb0330bbf6c500720a024e5a9ade24d888c3.jpg",
        "pubdate": 1682777425,
        "stat": {
          "view": 52743
        },
        "state": 0,
        "title": "某些搜索引擎得到的结果，官方网站反而排在一些诈骗广告后面，诱导用户下载大量捆绑垃圾软件",
        "ugc_pay": 0
      }
    ],
    "meta": {
      "category": 0,
      "cover": "https://archive.biliimg.com/bfs/archive/5e1c1f77c3065ec31eec43d7e35f7a061602e4d6.jpg",
      "description": "白马首席讲师吐槽系列视频",
      "mid": 37737161,
      "name": "水浅王八多，真假白马说",
      "ptime": 1682777425,
      "season_id": 1227671,
      "total": 2
    },
    "page": {
      "page_num": 1,
      "page_size": 30,
      "total": 2
    }
  }
}
```

</details>
