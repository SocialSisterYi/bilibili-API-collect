# 专栏内容

## 获取专栏正文内容

> https://api.bilibili.com/x/article/view

*请求方法: GET*

**URL 参数:**

| 参数  | 类型   | 内容        | 必要性 | 备注 |
| ----- | ------ | ----------- | ------ | ---- |
| id    | number | 专栏文章 ID | 必要   |      |
| gaia_source | string | `main_web` | 不必要 | |
| w_rid | string | WBI 签名    | 不必要 | 参见 [WBI 签名](../misc/sign/wbi.md) |
| wts   | number | UNIX 秒级时间戳 | 不必要 | 参见 [WBI 签名](../misc/sign/wbi.md) |

**JSON 回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| code | number | 返回值 | 0: 成功<br />-352: 请求被风控<br />-400: 请求错误<br />-404: 啥都木有 |
| data | object | 数据本体 | 见下 |
| message | string | 错误信息 | 成功时为 `0` |
| ttl | number | `1` |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| act_id | number | 操作 ID? |  |
| apply_time | string | 应用时间? |  |
| attributes | number | 属性位? |  |
| authenMark | null | 授权码? |  |
| author | object | 作者信息 | 参考 [用户基本信息](../user/info.md) |
| banner_url | string | 文章头图 URL |  |
| categories | object[] | 专栏分类信息 | 首项为主分区, 第二项为子分区 |
| category | object | 专栏分类信息 | 子分区 |
| check_state | number | 检查状态? |  |
| check_time | string | 检查时间? |  |
| content | string | 文章内容 | 可能为 JSON , 也可能为 HTML |
| content_pic_list | unknown | 内容图片列表? |  |
| cover_avid | number | 封面视频 AV 号 | `0` 为无视频 |
| ctime | number | 创建时间 | UNIX 秒级时间戳 |
| dispute | unknown | 争议信息? |  |
| dyn_id_str | string | 动态 upos id |  |
| dynamic | string | 动态信息? | 可能不存在 |
| id | number | 专栏文章 ID |  |
| image_urls | string[] | 图片 URL |  |
| is_like | boolean | 是否喜欢? |  |
| keywords | string | 关键词 | 以 `,` 分隔 |
| list | object | 文集信息 | 见下 |
| media | object | 媒体信息? |  |
| mtime | number | 修改时间 | UNIX 秒级时间戳 |
| origin_image_urls | string[] | 原始图片 URL |  |
| origin_template_id | number | 原始模板 ID? |  |
| original | number | 是否原创 | 0: 非原创<br />1: 原创 |
| private_pub | number | 仅自己可见 |  |
| publish_time | number | 发布时间 | UNIX 秒级时间戳 |
| reprint | number | 是否允许转载 | 0: 不允许<br />1: 允许规范转载 |
| state | number | 专栏状态 |  |
| stats | object | 统计数据 |  |
| summary | string | 专栏开头部分内容 |  |
| tags | object[] | 专栏标签 |  |
| template_id | number | 模板 ID? |  |
| title | string | 专栏标题 |  |
| top_video_info | unknown | 封面食品信息? |  |
| total_art_num | number | 作者总文章数 |  |
| type | number | 类型? |  |
| upos | object | upos 信息 | 部分无该字段 |
| version_id | number | 版本 ID? |  |
| words | number | 文章总词数 |  |

`data.categories[]` 对象:

另见 [专栏分类](category.md)

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| id | number | 分类 ID | |
| name | string | 分类名称 |  |
| parent_id | number | 父分类 ID |  |

`data.category` 对象:

同 `data.categories[]` 中的对象

`data.list` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| apply_time | string | 空 |  |
| articles_count | number | 0 |  |
| check_time | string | 空 |  |
| ctime | number | 创建时间 | UNIX 秒级时间戳 |
| id | number | 文集 ID |  |
| image_url | string | 文集封面 URL |  |
| mid | number | 作者 mid |  |
| name | string | 文集名称 |  |
| publish_time | number | 最新发布时间 | UNIX 秒级时间戳 |
| read | number | 0 |  |
| reason | string | 审核不通过理由? |  |
| state | number | 文集状态 |  |
| summary | string | 文集描述 |  |
| update_time | number | 文集更新时间 | UNIX 秒级时间戳 |
| words | number | 文集总词数 |  |

`data.media` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| area | string |  |  |
| cover | string |  |  |
| media_id | number |  |  |
| score | number |  |  |
| season_id | number |  |  |
| spoiler | number |  |  |
| title | string |  |  |
| type_id | number |  |  |
| type_name | string |  |  |

`data.stats` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| coin | number | 硬币数 |  |
| dislike | number | 点踩数 | 0 |
| dynamic | number | 动态数? |  |
| favorite | number | 收藏数 |  |
| like | number | 点赞数 |  |
| reply | number | 回复数 |  |
| share | number | 分享数 |  |
| view | number | 查看数 |  |

`data.tags[]` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| name | string | 标签名 |  |
| tid | number | 标签 ID |  |

**示例:**

`cv1` 未知的光

```shell
curl -G 'https://api.bilibili.com/x/article/view' \
--url-query 'id=1' \
-A 'Mozilla/5.0'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "data": {
    "act_id": 0,
    "apply_time": "",
    "attributes": 24,
    "authenMark": null,
    "author": {
      "face": "https://i1.hdslb.com/bfs/face/89fe260a17891fdadc3365a9698fee52796c7765.jpg",
      "fans": 3051,
      "level": 6,
      "mid": 91221505,
      "name": "健行见远渐忘",
      "nameplate": {
        "condition": "2018.6.26-7.8某一天是年度大会员",
        "image": "https://i0.hdslb.com/bfs/face/421179426c929dfeaed4117461c83f5d07ffb148.png",
        "image_small": "https://i0.hdslb.com/bfs/face/682001c2e1c2ae887bdf2a0e18eef61180c48f84.png",
        "level": "稀有勋章",
        "name": "大会员2018年度勋章",
        "nid": 74
      },
      "official_verify": {
        "desc": "",
        "type": -1
      },
      "pendant": {
        "expire": 0,
        "image": "https://i1.hdslb.com/bfs/face/7ae15f06f8c912435206a2578509d6bc77c12353.png",
        "name": "作文鬼才",
        "pid": 255
      },
      "vip": {
        "avatar_subscript": 1,
        "due_date": 0,
        "label": {
          "label_theme": "annual_vip",
          "path": "http://i0.hdslb.com/bfs/vip/label_annual.png",
          "text": "年度大会员"
        },
        "nickname_color": "#FB7299",
        "status": 1,
        "theme_type": 0,
        "type": 2,
        "vip_pay_type": 0
      }
    },
    "banner_url": "https://i0.hdslb.com/bfs/article/b1e1029c08d8ad1bb06460d736839a7741dd7925.jpg",
    "categories": [
      {
        "id": 3,
        "name": "生活",
        "parent_id": 0
      },
      {
        "id": 15,
        "name": "日常",
        "parent_id": 3
      }
    ],
    "category": {
      "id": 15,
      "name": "日常",
      "parent_id": 3
    },
    "check_state": 0,
    "check_time": "",
    "content": "<p>天空像是倾倒出的墨水，黑得静谧而深邃。黎明还远，光亮全无。</p><p>夜不能寐。披衣，起床。茶香的弥漫，一盏灯的相伴。夜，你是我久别重逢的朋友，那一刹那的相见，带给了我久违的安思。如果不是梦魇的皮闹，我本不该投入你的怀抱，此时此刻，万念侵扰，思绪咆哮。</p><p>台灯在角落里静静注视着我，不稳定的电流偶尔会吱吱作响。一切都像打在海绵上的水，渐渐消失，慢慢隐身于黑夜，独独留下我自己。一盏灯就可以把夜撕出个伤口，我似乎听到夜逃离光亮的脚步声，窸窸窣窣。它在蔓延，吞噬的野心已越过了窗沿。</p><p>我捧着茶杯，仿佛是在捧着一整个空间，凝重而诡异。茶香绕过茶杯脱落的瓷层向四周扩散，空气闻到了茶香，于是身边的气息似乎活跃了起来。转念一想，人生如茶。器皿的束缚不是茶香的归宿，所以人生的低谷也不是生命的全部。黑暗是光明的束缚，但光明却是黑暗的归宿。</p><p>灯光下，书架上一本金色题字的书的书名熠熠发光，我起身取下书，发现是海伦写的《假如给我三天光明》，我内心一热，忽然间有些感动。一个身体残疾的孩子，孱弱的身躯却支撑起了刚劲的灵魂。她的眼前一片漆黑，但内心世界却是光彩艳丽的。她的心中永远都有一抹无形的光，指引着她踏遍人生的路途。</p><p>时钟告诉我现在是凌晨四点。我舒展下筋骨，刚要起身，一只飞虫不偏不斜恰好闯入我的视线。灯光是它唯一的追寻。我不敢有任何的动作，只好也只能静静看着这只可爱的生灵。它好像不知道我是它的伙伴，也许它真的以为光亮是它唯一的追寻。但是我却欣慰于这突如其来的伙伴。光明可以带来很多东西，有时候也包括一份黑暗中的灵魂的一份安慰。我不忍打扰它与光明的约会，于是悄悄起身慢慢摸索着到了阳台。</p><p>阳台和我沉入了外面黑暗的梦乡。隐约可以听到一些不知名的昆虫在开着它们的舞会，我猜它们都端着无形的酒杯。它们在黑暗中买醉，因为明天的天明将是它们的散会。我有些感怀，也有些悲哀。</p><p>夜风股股咆哮着，我昂首顶住风头，仰望着漆黑的四周。很远很远处，灯塔若隐若现。它向来就是一头巨大的野兽，而此时它却空荡的像杯将尽的酒。它散发出柔弱的灯光在风中摇曳，忽明忽暗，像是一场与黑暗的决斗，随时都可能葬身在这黎明的前奏。</p><p>不忍心这惨烈的一幕，我踱步来到窗前。窗子很旧了，旧到已经无法再承受住时间的践踏了。可无论它多么陈旧，此时的它是神奇的——窗外黑暗窗内光。人心不也是一扇窗户吗？一半明媚一半伤。窗户把光亮的一面给了光明，人心是不是也应该把明媚的一半朝向世界呢？</p><p>屋内的灯倏忽闪了闪，我晃过神来，发现天边已经有抹淡红色了。黎明的脚步已经迈出了一半。那只与台灯约会的虫子似乎很满意，兴高采烈的向着呼之欲出的朝阳的方向窜去了。我望着它的背影，轻轻挥了挥手，心中暗念：“亲爱的朋友，恭喜你找到了属于自己的方向和追求，希望你能在光和热中接受生命的升华。”</p><p>天空见亮了，有点空灵，光晕中泛着感动。第一缕曙光穿透了云层，是的，我看到了，那一抹光，越来越近，越来越亮……</p>",
    "content_pic_list": null,
    "cover_avid": 0,
    "ctime": 1497973729,
    "dispute": null,
    "dyn_id_str": "38554821905721204",
    "dynamic": "It's now or never !",
    "id": 1,
    "image_urls": [
      "https://i0.hdslb.com/bfs/article/d2eedf1fd338bceca10099e2f7b33fa9017c859b.jpg"
    ],
    "is_like": false,
    "keywords": "天空像是倾倒出的墨水，黑得静谧而深邃。黎明还远，光亮全无。夜不能寐。披衣，起床。茶香的弥漫，一盏灯的相伴。夜，你是我久别重逢的朋友，那一刹那的相见，带给了我久违的安思。如果不是梦魇的皮闹，我本不该投入",
    "list": {
      "apply_time": "",
      "articles_count": 0,
      "check_time": "",
      "ctime": 1588601669,
      "id": 253534,
      "image_url": "",
      "mid": 91221505,
      "name": "静夜思",
      "publish_time": 1625900652,
      "read": 0,
      "reason": "",
      "state": 1,
      "summary": "",
      "update_time": 1625900518,
      "words": 3059
    },
    "media": {
      "area": "",
      "cover": "",
      "media_id": 0,
      "score": 0,
      "season_id": 0,
      "spoiler": 0,
      "title": "",
      "type_id": 0,
      "type_name": ""
    },
    "mtime": 1589209079,
    "origin_image_urls": [
      "https://i0.hdslb.com/bfs/article/b1e1029c08d8ad1bb06460d736839a7741dd7925.jpg"
    ],
    "origin_template_id": 4,
    "original": 0,
    "private_pub": 0,
    "publish_time": 1519913233,
    "reprint": 0,
    "state": 0,
    "stats": {
      "coin": 2543,
      "dislike": 1,
      "dynamic": 0,
      "favorite": 17520,
      "like": 32484,
      "reply": 14399,
      "share": 616,
      "view": 1631212
    },
    "summary": "天空像是倾倒出的墨水，黑得静谧而深邃。黎明还远，光亮全无。夜不能寐。披衣，起床。茶香的弥漫，一盏灯的相伴。夜，你是我久别重逢的朋友，那一刹那的相见，带给了我久违的安思。如果不是梦魇的皮闹，我本不该投入",
    "tags": [
      {
        "name": "静夜思",
        "tid": 239416
      }
    ],
    "template_id": 4,
    "title": "未知的光",
    "top_video_info": null,
    "total_art_num": 5,
    "type": 0,
    "version_id": 0,
    "words": 1190
  },
  "message": "0",
  "ttl": 1
}
```
</details>

<!-- Generated by json-apidoc-gen @ 2025-04-22T16:42:30.354080534Z -->
