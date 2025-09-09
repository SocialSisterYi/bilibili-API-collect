# 横幅轮播图

## 获取各分区的轮播图_web端

> https://api.bilibili.com/x/web-show/region/banner

*请求方式: GET*

需要请求头参数 User-Agent

鉴权方式：Wbi 签名 (可选)

**URL参数:**

| 字段      | 类型  | 内容      | 必要性   |  备注          |
| -------   | ---- | --------  | ------- | -------------- |
| region_id | num  | 目标分区id | 必要    | 参见[视频分区一览v2](../video/video_zone_v2.md) |
| w_rid     | str  | Wbi 签名   | 非必要  | 详见 [Wbi 签名](../misc/sign/wbi.md) |
| wts       | num  | 当前时间戳	 | 非必要  | 详见 [Wbi 签名](../misc/sign/wbi.md) |

**JSON回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| -- | -- | -- | -- |
| code | num | 返回值 | 0: 成功 |
| message | str | 错误信息 | 默认为 0 |
| ttl | str | 1 | |
| data | obj | 信息本体 | |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| -- | -- | -- | -- |
| region_banner_list | array | 存储轮播图的对象 | |

`data` 对象里的 `region_banner_list` 数组:

| 项 | 类型 | 内容 | 备注 |
| -- | -- | -- | -- | 
| 0 | obj | 第一个轮播图对象 | |
| n | obj | 第 (n+1) 轮播图对象 | |
| …… | obj | …… | |

`region_banner_list` 数组里的对象:

| 字段 | 类型 | 内容 | 备注 |
| -- | -- | -- | -- |
| image | str | 封面资源路径 | |
| title | str | 封面标题 | |
| sub_title | str | 封面子标题 | 空 |
| url | str | 点击封面后指向的链接 | 可能为视频地址，也有可能是活动地址 |
| rid | num | 分区参见[视频分区一览v2](../video/video_zone_v2.md) | |

**示例:**

获取 `音乐区` 时刻为 `Wed, 06 Aug 2025 01:41:35 GMT` 的 B 站轮播图 [音乐区地址](https://www.bilibili.com/c/music/)

```shell
curl -G "https://api.bilibili.com/x/web-show/region/banner" \
      --data-urlencode "region_id=1003" \
      -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko Chrome/58.0.3029.110 Safari/537.36"
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "region_banner_list": [
      {
        "image": "http://i0.hdslb.com/bfs/app/61e4bf3bba74f7d975342ae9d6ec7b0a2ea7c83f.jpg",
        "title": "舞力全开派对首测共创活动上线啦！",
        "sub_title": "",
        "url": "https://www.bilibili.com/blackboard/era/wzjckpevcdCgf4Rv.html",
        "rid": 1003
      },
      {
        "image": "http://i0.hdslb.com/bfs/app/a7d63dc78d10f769bd80c6c27ba6cc337b00d9d9.jpg",
        "title": "玛莎拉达带着他的一系列爆款术曲来了！",
        "sub_title": "",
        "url": "https://www.bilibili.com/video/BV1Tbtjz1Ehv",
        "rid": 1003
      },
      {
        "image": "http://i0.hdslb.com/bfs/app/01beb60c493f98eea6844cc2efcbde7315ce6224.jpg",
        "title": "陶喆Alin合作曲MV首播！",
        "sub_title": "",
        "url": "https://www.bilibili.com/video/BV1w1tnznEMw/?spm_id_from=333.337.search-card.all.click",
        "rid": 1003
      },
      {
        "image": "http://i0.hdslb.com/bfs/app/64060527172b03292b860e43532ff56faabdbe2d.jpg",
        "title": "四种语言版《AMANI》：愿世界和平",
        "sub_title": "",
        "url": "https://www.bilibili.com/video/BV1WTgVzHE2S/",
        "rid": 1003
      },
      {
        "image": "http://i0.hdslb.com/bfs/app/cbc4469b10c041702c49e847552301afeea323cd.jpg",
        "title": "孙亦航来B站啦！",
        "sub_title": "",
        "url": "https://www.bilibili.com/video/BV1RHtFzLEUA",
        "rid": 1003
      },
      {
        "image": "http://i0.hdslb.com/bfs/app/134cede692acbbe3080dc2a2ecc920db1f4f7498.jpg",
        "title": "潘玮柏狂爱《Yes I Do》",
        "sub_title": "",
        "url": "https://www.bilibili.com/video/BV1RAtcz7EJX/?spm_id_from=333.337.search-card.all.click",
        "rid": 1003
      }
    ]
  }
}
```
</details>

* Tip: 可以使用 [图片格式化](../misc/picture.md)中 获取主色调的方式获取轮播图封面的主色调
