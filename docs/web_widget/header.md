# 首页横幅头图

## 获取方法

- ❎ <s>关注 UP 主 [壁纸喵](https://space.bilibili.com/6823116) 获取静态图片</s>

- ✅ 通过主页获取头图接口获取静态图片与各部分及其动态偏移信息

## 获取首页头图

> https://api.bilibili.com/x/web-show/page/header

*请求方式: GET*

**URL参数:**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| resource_id | num | 资源 ID? | 必要   | 默认为 `142`, 实测可为任意有效整数 |

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
| name | str | 空 | |
| pic | str | 静态头图 URL | |
| litpic | str | bilibili logo URL | |
| url | str | 空 | |
| is_split_layer | str | 是否分层 | 1: 是 |
| split_layer | str | 分层信息 | 一个套在字符串里的 JSON 对象 |

`data` 对象中的`split_layer` 字符串里的 JSON 对象:

| 字段 | 类型 | 内容 | 备注 |
| -- | -- | -- | -- |
| version | str | 版本号 | 目前为 `1` |
| layers | array | 层信息 | |

`split_layer` 字符串里的 JSON 对象中的 `layers` 数组:

| 项 | 类型 | 内容 | 备注 |
| -- | -- | -- | -- |
| 0 | obj | 第 1 个层信息 | |
| 2 | obj | 第 3 个层信息 | |
| 1 | obj | 第 2 个层信息 | |
| …… | obj | …… | |
| n | obj | 第 (n+1) 个层信息 | |

`split_layer` 字符串里的 JSON 对象中的 `layers` 数组里的对象:

| 字段 | 类型 | 内容 | 备注 |
| -- | -- | -- | -- |
| resources | obj | 图层资源 | |
| scale | obj | 缩放信息 | |
| rotate | obj | 路径? | 空 |
| translate | obj | 偏移信息 | |
| blur | obj | 模糊信息? | 空 |
| opacity | obj | 不透明度? | 内容 `wrap` 为 `clamp` |
| id | num | 层 ID | 似乎即图层索引 |
| name | str | 层名称 | |

`layers` 数组里的对象中的 `resources` 对象:

| 字段 | 类型 | 内容 | 备注 |
| -- | -- | -- | -- |
| src | str | 图层 URL | |
| id | num | 0 | |

`layers` 数组里的对象中的 `scale` 对象:

| 字段 | 类型 | 内容 | 备注 |
| -- | -- | -- | -- |
| initial | num | 初始缩放值? | |
| offset | num | 缩放偏移值? | 部分层无此项 |

`layers` 数组里的对象中的 `translate` 对象:

| 字段 | 类型 | 内容 | 备注 |
| -- | -- | -- | -- |
| offset | array | 偏移值? | `[x, y]`? 部分层无此项 |

**示例:**

获取 `Sat, 03 Aug 2024 01:41:35 GMT` 时刻的 B 站首页头图

```shell
curl -G "https://api.bilibili.com/x/web-show/page/header" \
--data-urlencode "resource_id=142"
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "name": "",
    "pic": "http://i0.hdslb.com/bfs/archive/e5b7fca0c001cbe0b77a2956e4c861d9f19c4575.png",
    "litpic": "http://i0.hdslb.com/bfs/archive/c8fd97a40bf79f03e7b76cbc87236f612caef7b2.png",
    "url": "",
    "is_split_layer": 1,
    "split_layer": "{\"version\":\"1\",\"layers\":[{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/75ec2d45ce8c942a1f7379d4641171da4d90ab0d.png\",\"id\":0}],\"scale\":{\"initial\":0.54},\"rotate\":{},\"translate\":{},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":0,\"name\":\"19-背景水\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/286eb259a60a0eabfcde96d7ea92d239fe68b3fe.png\",\"id\":0}],\"scale\":{\"initial\":0.53},\"rotate\":{},\"translate\":{\"offset\":[10,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":1,\"name\":\"18-再远景\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/782d55aeca6cc75f51d2d630005f514a61a0ddfa.png\",\"id\":0}],\"scale\":{\"initial\":0.55},\"rotate\":{},\"translate\":{\"offset\":[10,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":3,\"name\":\"16-远景房子1\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/d6c941cf2d5fc6c717173f7e3f166dbc444aa15b.png\",\"id\":0}],\"scale\":{\"initial\":0.52},\"rotate\":{},\"translate\":{\"offset\":[30,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":4,\"name\":\"15-两侧房子\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/27e411d92729604aa594858beb5130ed60aad76d.png\",\"id\":0}],\"scale\":{\"initial\":0.55,\"offset\":0.2},\"rotate\":{},\"translate\":{\"offset\":[30,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":2,\"name\":\"17-远景鲸鱼机\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/09d0855b6b6d6965e8f02404777986237848c6c9.png\",\"id\":0}],\"scale\":{\"initial\":0.52},\"rotate\":{},\"translate\":{\"offset\":[300,10]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":5,\"name\":\"14-中景鲸鱼机\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/40878bbef514e2d4bf5d660fe1145c869567bec2.png\",\"id\":0}],\"scale\":{\"initial\":0.52},\"rotate\":{},\"translate\":{\"offset\":[20,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":6,\"name\":\"13-窗外垃圾\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/42485baddbca05d2c4c7710a0b76b74d303e06d7.png\",\"id\":0}],\"scale\":{\"initial\":0.54},\"rotate\":{},\"translate\":{\"offset\":[80,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":7,\"name\":\"12-机场\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/8ea0e95a8e5fc85ae227810925dba1ace1e9fcba.png\",\"id\":0}],\"scale\":{\"initial\":0.52},\"rotate\":{},\"translate\":{\"offset\":[120,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":8,\"name\":\"11-空姐\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/c13ca9c6405c71bf864ed2bc421680cb437f45ef.png\",\"id\":0}],\"scale\":{\"initial\":0.52},\"rotate\":{},\"translate\":{\"offset\":[80,40]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":9,\"name\":\"10-泡泡04\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/a43c6833d262301373234ffbd6934559d2ce7fb2.png\",\"id\":0}],\"scale\":{\"initial\":0.52},\"rotate\":{},\"translate\":{\"offset\":[100,50]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":10,\"name\":\"09-泡泡03\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/ce8c5e45230a6d3805baf60f5916f1cd441aac8e.png\",\"id\":0}],\"scale\":{\"initial\":0.54},\"rotate\":{},\"translate\":{\"offset\":[130,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":11,\"name\":\"08-22\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/cbf19f3682dfb02e62557d07fefaf241a80296a1.png\",\"id\":0}],\"scale\":{\"initial\":0.52},\"rotate\":{},\"translate\":{\"offset\":[200,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":12,\"name\":\"07-近路人\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/4a4c1f6b2977478c73e41f39a2910c3b3c33167e.webm\",\"id\":0}],\"scale\":{\"initial\":0.5},\"rotate\":{},\"translate\":{\"initial\":[1000,0],\"offset\":[20,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":21,\"name\":\"右气泡\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/7998ca9f0bc267375fb7b45f75626d96806f94d7.png\",\"id\":0}],\"scale\":{\"initial\":0.52},\"rotate\":{},\"translate\":{\"offset\":[300,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":13,\"name\":\"06-两侧前景植物\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/198efffbc58493300854c04ab0ea8d979a6f9223.png\",\"id\":0}],\"scale\":{\"initial\":0.52},\"rotate\":{},\"translate\":{\"offset\":[280,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":15,\"name\":\"04-顶部摸鱼牌子\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/142a486b8dd500a626a60b68ad993af8dabc8b55.png\",\"id\":0}],\"scale\":{\"initial\":0.52},\"rotate\":{},\"translate\":{\"offset\":[300,130]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":16,\"name\":\"03-泡泡02\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/bb6266e1525a51f7920fc8881e47cadeee271b0c.png\",\"id\":0}],\"scale\":{\"initial\":0.52},\"rotate\":{},\"translate\":{\"initial\":[200,0],\"offset\":[350,20]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":17,\"name\":\"02-泡泡01\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/cd68251cde11936871237ca94360acb451bf7ed2.png\",\"id\":0}],\"scale\":{\"initial\":0.52},\"rotate\":{},\"translate\":{\"initial\":[-200,0],\"offset\":[500,0]},\"blur\":{},\"opacity\":{\"initial\":0.5,\"wrap\":\"clamp\"},\"id\":18,\"name\":\"01-光\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/426073f920477b718b8aee5ec141aca3889500f7.webm\",\"id\":0}],\"scale\":{\"initial\":0.54},\"rotate\":{},\"translate\":{\"initial\":[400,0],\"offset\":[50,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":19,\"name\":\"中气泡\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/0de9fb9822d2d00500abc8bdb143907eb1802ddb.webm\",\"id\":0}],\"scale\":{},\"rotate\":{},\"translate\":{\"initial\":[-700,0],\"offset\":[30,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":20,\"name\":\"左气泡\"}]}",
    "request_id": "1722649278"
  }
}
```

</details>

## 图层组合处理

- **注意:** 部分图像只包含部分颜色通道, 在创建文件时务必注意!

- 图层既包含静态 PNG 图片,也包含动态 WebM 视频, 此处忽略视频, 按照 `name` 字段前的数字作为顺序, 依次导入 GIMP <s>(你也可以使用其她图像处理软件)</s>, 未进行偏移调整

- 接口提供的静态图片 http://i0.hdslb.com/bfs/archive/e5b7fca0c001cbe0b77a2956e4c861d9f19c4575.png

- 手动导入合成的图片 https://archive.biliimg.com/bfs/archive/dc96f5d4e87a1985fc6085305d737f21f006f6a8.png 
([备链](http://i0.hdslb.com/bfs/new_dyn/510715042e8847b7fd98d8253ca1f61a616368979.png))
