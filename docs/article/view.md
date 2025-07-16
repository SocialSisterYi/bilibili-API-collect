# 专栏内容

## 获取专栏正文内容

> https://api.bilibili.com/x/article/view

*请求方法: GET*

鉴权方式: 请求头 `User-Agent`

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
| attributes | number | 属性位? | 可能不存在 |
| authenMark | null | 授权码? |  |
| author | object | 作者信息 | 参考 [用户基本信息](../user/info.md) |
| banner_url | string | 文章头图 URL | 空则为无 |
| categories | object[] | 专栏分类信息 | 首项为主分区, 第二项为子分区 |
| category | object | 专栏分类信息 | 子分区 |
| check_state | number | 检查状态? |  |
| check_time | string | 检查时间? |  |
| content | string | 文章内容 | `type` 字段为 `0` 为 HTML, `3` 为 JSON |
| content_pic_list | unknown | 内容图片列表? |  |
| cover_avid | number | 封面视频 AV 号 | `0` 为无视频 |
| ctime | number | 创建时间 | UNIX 秒级时间戳 |
| dispute | unknown | 争议信息? |  |
| dyn_id_str | string | 动态 opus id |  |
| dynamic | string | 动态信息? | 可能不存在 |
| id | number | 专栏文章 ID |  |
| image_urls | string[] | 图片 URL |  |
| is_like | boolean | 是否喜欢? |  |
| keywords | string | 关键词 | 以 `,` 分隔 |
| list | object | 文集信息 | 见下 |
| media | object | 媒体信息? |  |
| mtime | number | 修改时间 | UNIX 秒级时间戳 |
| opus | object | opus 信息 | 当 `type` 字段为 `3` 时存在, 包含了更加详细的富文本信息 |
| origin_image_urls | string[] | 原始图片 URL |  |
| origin_template_id | number | 原始模板 ID? |  |
| original | number | 是否原创 | 0: 非原创<br />1: 原创 |
| private_pub | number | 仅自己可见 |  |
| publish_time | number | 发布时间 | UNIX 秒级时间戳 |
| reprint | number | 是否允许转载 | 0: 不允许<br />1: 允许规范转载 |
| state | number | 专栏状态 |  |
| stats | object | 统计数据 |  |
| summary | string | 专栏开头部分内容 | 纯文本 |
| tags | object[] | 专栏标签 |  |
| template_id | number | 模板 ID? |  |
| title | string | 专栏标题 |  |
| top_video_info | unknown | 封面食品信息? |  |
| total_art_num | number | 作者总文章数 |  |
| type | number | 类型? |  |
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

`data.content` 为字符串形式的 JSON 时代表的对象:

| 字段 | 类型     | 内容 | 备注 |
| ---- | -------- | ---- | ---- |
| ops  | object[] | 以 JSON 呈现的文本内容 | 套了个娃 |

`data.content` 代表的对象中的 `ops` 数组中的对象:

| 字段 | 类型     | 内容 | 备注 |
| ---- | -------- | ---- | ---- |
| attribute | object? | 属性 | 见下 |
| insert | string \| object | 插入内容 |  |


`data.content` 代表的对象中的 `ops[].attribute` 对象:

注: 此处属性备注为页面实际渲染的情况

| 字段       | 类型     | 内容 | 备注 |
| ---------- | -------- | ---- | ---- |
| align      | string?  | 文字对齐 | 参见 [text-align](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-align) |
| blockquote | boolean? | 块级引用 | 参见 [\<blockquote\>：块级引用元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/blockquote) |
| bold       | boolean? | 加粗 | 参见 [\<strong\>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/strong) |
| class      | string?  | 类名 | 参见 [class](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Global_attributes/class) |
| color      | string?  | 颜色 | 十六进制颜色值, 参见 [color](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color) |
| header     | number?  | 标题级别 | 参见 [\<h1\>–\<h6\>：HTML 区域标题元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/Heading_Elements) |
| strike     | boolean? | 删除线 | 参见 [\<s\>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/s) |
| link       | string?  | 站内链接 | 参见 [\<a\>：锚元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/a) |
| italic     | boolean? | 斜体 | 参见 [\<em\>：强调元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/em) | list       | string?  | 列表 | `bullet`: 无序列表, 参见 [\<ul\>：无序列表元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/ul)<br />`ordered`: 有序列表, 参见 [\<ol\>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/ol) |

`data.content` 代表的对象中的 `ops[].insert` 为对象时的对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| native-image | object? | 原生图片 | 见下, 另见 [\<img\>：图像嵌入元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/img) |
| cut-off | object? | 分割线 | 见下 |
| video-card | object? | 视频卡片 | 见下 |
| article-card | object? | 专栏卡片 | 见下 |
| vote-card | object? | 投票卡片 | 见下 |
| live-card | object? | 投票卡片 | 见下 |

`data.content` 代表的对象中的 `ops[].insert.native-image` 对象:

注: 此处属性备注为页面实际渲染的情况

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| alt  | string | 图像的备用文本描述 | 即 `<img>` 的 `alt` 属性 |
| url  | string | 图像的 URL | 即 `<img>` 的 `src` 属性 |
| width | number | 图像的宽度 | 即 `<img>` 的 `data-w` 属性 |
| height | number | 图像的高度 | 即 `<img>` 的 `data-h` 属性 |
| size | number | 图像的文件大小 | 即 `<img>` 的 `data-size` 属性 |
| status | number | `"loaded"` | 即 `<img>` 的 `data-status` 属性 |

`data.content` 代表的对象中的 `ops[].insert.cut-off` 对象:

| 字段 | 类型   | 内容 | 备注 |
| ---- | ------ | ---- | ---- |
| type | string | 类型 | 没错, 就是字符串 |
| url  | string | 分割线图片 URL |  |

`data.content` 代表的对象中的 `ops[].insert.video-card` 对象:

| 字段 | 类型   | 内容 | 备注 |
| ---- | ------ | ---- | ---- |
| alt  | string |      |      |
| height | number | 卡片高度 | 似乎恒定为 `352` |
| id   | string | 视频 id | 如 `av99999999` |
| size | null   |      |      |
| status | string | `loaded` | |
| tid  | number | `1.1` |     |
| url  | string | 卡片图片 URL |  |
| width | number | 卡片宽度 | 似乎恒定为 `2632` |

`data.content` 代表的对象中的 `ops[].insert.article-card` 对象:

| 字段 | 类型   | 内容 | 备注 |
| ---- | ------ | ---- | ---- |
| alt  | string |      |      |
| height | number | 卡片高度 | 似乎恒定为 `320` |
| id   | string | 文章 id | 如 `cv1` |
| size | null   |      |      |
| status | string | `loaded` | |
| tid  | number | `2` |     |
| url  | string | 卡片图片 URL |  |
| width | number | 卡片宽度 | 似乎恒定为 `2632` |

`data.content` 代表的对象中的 `ops[].insert.vote-card` 对象:

| 字段 | 类型   | 内容 | 备注 |
| ---- | ------ | ---- | ---- |
| alt  | string |      |      |
| height | number | 卡片高度 | 似乎恒定为 `320` |
| id   | string | 投票 id | 确实是字符串, 如 `15111509` |
| size | null   |      |      |
| status | string | `loaded` | |
| tid  | number | `7` |     |
| url  | string | 卡片图片 URL |  |
| width | number | 卡片宽度 | 似乎恒定为 `2632` |

`data.content` 代表的对象中的 `ops[].insert.live-card` 对象:

| 字段 | 类型   | 内容 | 备注 |
| ---- | ------ | ---- | ---- |
| alt  | string |      |      |
| height | number | 卡片高度 | 似乎恒定为 `352` |
| id   | string | 直播间 id | 可能为长也可能为短, 如 `lv1` `lv5440` |
| size | null   |      |      |
| status | string | `loaded` | |
| tid  | number | `8` |     |
| url  | string | 卡片图片 URL |  |
| width | number | 卡片宽度 | 似乎恒定为 `2632` |


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

`type=0`: `cv1` 未知的光

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

`type=3`: `cv41358718` 通过 DevTools 绕过 SSR 抓包某站专栏正文接口

```shell
curl 'https://api.bilibili.com/x/article/view?id=41358718' \
-A 'Mozilla/10.0'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "id": 41358718,
    "category": {
      "id": 26,
      "parent_id": 17,
      "name": "数码"
    },
    "categories": [
      {
        "id": 17,
        "parent_id": 0,
        "name": "科技"
      },
      {
        "id": 26,
        "parent_id": 17,
        "name": "数码"
      }
    ],
    "title": "通过 DevTools 绕过 SSR 抓包某站专栏正文接口",
    "summary": "背景\n最近没什么事做, 又回 BAC 看看有什么接口可以抓, 于是看到了陈年的专栏正文内容的 Issue #859\n由于泽生自己是写前端的, 对于浏览器 DevTools 的各项调试工具还算是比较了解, 打算想办法把专栏正文的接口抓下来 :)\n思路\n由于专栏正文完整的内容在页面加载的时候就已经通过 SSR (Server-Side Rendering, 服务端渲染) 的方式通过 <script> 标签注入到 HTML 网页中, 直接通过看 DevTools 的网络面板肯定是没用的\n[图片]\n最直接的方法是",
    "banner_url": "",
    "template_id": 4,
    "state": 0,
    "author": {
      "mid": 645769214,
      "name": "Session小胡",
      "face": "https://i2.hdslb.com/bfs/face/77906db03b1eefac02613de184afad03f7bc58d7.jpg",
      "pendant": {
        "pid": 0,
        "name": "",
        "image": "",
        "expire": 0
      },
      "official_verify": {
        "type": -1,
        "desc": ""
      },
      "nameplate": {
        "nid": 4,
        "name": "青铜殿堂",
        "image": "https://i2.hdslb.com/bfs/face/2879cd5fb8518f7c6da75887994c1b2a7fe670bd.png",
        "image_small": "https://i0.hdslb.com/bfs/face/6707c120e00a3445933308fd9b7bd9fad99e9ec4.png",
        "level": "普通勋章",
        "condition": "单个自制视频总播放数>=1万"
      },
      "vip": {
        "type": 1,
        "status": 0,
        "due_date": 0,
        "vip_pay_type": 0,
        "theme_type": 0,
        "label": {
          "path": "",
          "text": "",
          "label_theme": ""
        },
        "avatar_subscript": 0,
        "nickname_color": ""
      },
      "fans": 347,
      "level": 4
    },
    "reprint": 1,
    "image_urls": [
      "https://i0.hdslb.com/bfs/article/9071997152b6fec0ae465fe2a86b580e645769214.jpg"
    ],
    "publish_time": 1744789930,
    "ctime": 1744789930,
    "mtime": 1744789930,
    "stats": {
      "view": 51,
      "favorite": 2,
      "like": 3,
      "dislike": 0,
      "reply": 0,
      "share": 0,
      "coin": 2,
      "dynamic": 0
    },
    "tags": [
      {
        "tid": 12005,
        "name": "HTML"
      },
      {
        "tid": 336733,
        "name": "API"
      },
      {
        "tid": 854101,
        "name": "BAC"
      },
      {
        "tid": 2573142,
        "name": "JavaScript"
      },
      {
        "tid": 2709088,
        "name": "Bilibili"
      },
      {
        "tid": 2719113,
        "name": "GitHub"
      },
      {
        "tid": 2822654,
        "name": "Web"
      },
      {
        "tid": 3161936,
        "name": "Chromium"
      },
      {
        "tid": 3416147,
        "name": "DevTools"
      }
    ],
    "words": 2039,
    "origin_image_urls": [
      "https://i0.hdslb.com/bfs/article/9071997152b6fec0ae465fe2a86b580e645769214.jpg"
    ],
    "list": {
      "id": 326286,
      "mid": 645769214,
      "name": "电脑",
      "image_url": "",
      "update_time": 1744789924,
      "ctime": 1601636259,
      "publish_time": 1744789930,
      "summary": "",
      "words": 9501,
      "read": 0,
      "articles_count": 0,
      "state": 1,
      "reason": "",
      "apply_time": "",
      "check_time": ""
    },
    "is_like": false,
    "media": {
      "score": 0,
      "media_id": 0,
      "title": "",
      "cover": "",
      "area": "",
      "type_id": 0,
      "type_name": "",
      "spoiler": 0,
      "season_id": 0
    },
    "apply_time": "",
    "check_time": "",
    "original": 1,
    "act_id": 0,
    "dispute": null,
    "authenMark": null,
    "cover_avid": 0,
    "top_video_info": null,
    "type": 3,
    "check_state": 0,
    "origin_template_id": 4,
    "private_pub": 0,
    "content_pic_list": null,
    "content": "{\"ops\":[{\"insert\":\"背景\"},{\"attributes\":{\"header\":2},\"insert\":\"\\n\"},{\"insert\":\"最近没什么事做, 又回 BAC 看看有什么接口可以抓, 于是看到了陈年的专栏正文内容的 Issue #859\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"由于泽生自己是写前端的, 对于浏览器 DevTools 的各项调试工具还算是比较了解, 打算想办法把专栏正文的接口抓下来 :)\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"思路\"},{\"attributes\":{\"header\":2},\"insert\":\"\\n\"},{\"insert\":\"由于专栏正文完整的内容在页面加载的时候就已经通过 SSR (Server-Side Rendering, 服务端渲染) 的方式通过 <script> 标签注入到 HTML 网页中, 直接通过看 DevTools 的网络面板肯定是没用的\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"attributes\":{\"class\":\"normal-img\"},\"insert\":{\"native-image\":{\"alt\":\"read-normal-img\",\"url\":\"https://i0.hdslb.com/bfs/new_dyn/7bb121008990850bbd333fe504eebc90645769214.png\",\"width\":748,\"height\":494,\"size\":185239,\"status\":\"loaded\"}}},{\"insert\":\"最直接的方法是找到专栏相关的 JavaScript 代码, 通过大脑在没有 SourceMap 的情况下沿着 bundle 逆向出接口, 这种方法对于泽生明显不可行, 其中一个原因是屏幕太小而源码太大 (-.-;)\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"另一个方法是通过伪造 SSR 不工作, 从而诱导页面脚本手动通过 API 去获取内容, 不过伪造的方法也比较麻烦, 但可行度相对较高 😆\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"关于如何伪造 SSR 不工作的现象, 就需要分析 SSR 是如何被使用的, 某站的 SSR 是通过向页面注入 JavaScript 代码实现的, 具体是在 window 全局对象上加了个属性 __INITIAL_STATE__, 具体结构需要具体页面分析\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"目标就是要在读取之前移除这个属性, 移除方法简单, 无非是直接 window.__INITIAL_STATE__ = undefined (或者任意无效值), 或者 delete window.__INITIAL_STATE__, 别的 ES6 的反射之类的方法就不说了, 这不是重点\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"但这个脚本注入的位置就很恶心, 不在 <head> 里面, 也不在 <body> 底部, 就刚好在读取 __INITIAL_STATE__ 的脚本前面, 这使得无法使用篡改猴一类的用户脚本插件进行修改, 因为提供的用户脚本执行方式会出现还没写属性和已经读过属性的问题 (゜-゜)\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"接着就是传统的 DevTools 调试面板, 但正常手动暂停脚本执行往往已经脚本执行完成了, 解决方法就是网络节流或者 <head> 处用户脚本 debugger 语句\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"正好篡改猴高级设置允许用户脚本执行前暂停开始调试, 原理就是 debugger 语句, 只要把脚本执行位置放在 <body> 之前就有机会打断点把 __INITIAL_STATE__ 删掉 💥\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"attributes\":{\"class\":\"normal-img\"},\"insert\":{\"native-image\":{\"alt\":\"read-normal-img\",\"url\":\"https://i0.hdslb.com/bfs/new_dyn/1a20d186e8c8cddc043b5295d481c719645769214.png\",\"width\":625,\"height\":563,\"size\":320286,\"status\":\"loaded\"}}},{\"insert\":\"实践\"},{\"attributes\":{\"header\":2},\"insert\":\"\\n\"},{\"insert\":\"使用 Chromium (理论上 Firefox 也可以, 但其 DevTools 泽生用起来不是很舒服) 安装篡改猴扩展 🐒, 新建一个用户脚本, 里面是否写内容无所谓, 执行位置为 document-head, 然后在篡改猴的设置里面把调试脚本打开\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"接着打开一个使用 SSR 的网页, 不过注意要保持 DevTools 打开, 否则调试就不会生效, 页面脚本自动暂停后, 你将看到你的脚本和该页面已经加载的内容, 包含 HTML 网页, JavaScript 代码, 和 CSS 文本\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"你所需要做的就是检查 SSR 的情况是否如你所想的那样, 放在 window.__INITIAL_STATE__ 那里, 如果是直接渲染成页面元素的话, 抱歉上帝来了也救不了你, 某站 JavaScript 前端可不会管 HTML 的事情 🫠\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"如果在 __INITIAL_STATE__ 里面, 恭喜, 你可以直接继续了. 如果不是, 那就检查一下当前页面路径之类的, 看看有没有不同版本的相同内容, 毕竟专栏分新旧版, 专栏网页也分新旧版, 往往旧版能带来惊喜 ✨\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"找到了合适的 __INITIAL_STATE__, 你只需要在原地打个断点, 然后继续执行脚本, 页面就会在那里暂停, 接着执行下一步, 此时赋值完成, 可以开始改属性了\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"切到控制台, 执行那句期待已久的语句: window.__INITIAL_STATE__ = undefined, 大功告成! 🎉\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"恢复页面脚本执行, 你会看到页面好像卡了一下, 然后文章还是加载了出来, 这个时候就可以看看网络面板的情况了\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"attributes\":{\"class\":\"normal-img\"},\"insert\":{\"native-image\":{\"alt\":\"read-normal-img\",\"url\":\"https://i0.hdslb.com/bfs/new_dyn/87c88df1e15195996e34835456493d55645769214.png\",\"width\":892,\"height\":831,\"size\":473706,\"status\":\"loaded\"}}},{\"insert\":\"可以观察到, 多了一个你从来没见到过的叫 view 的野生请求, 点开详细, 复制地址, 记下参数, 保存响应, 发 Issue 去也~\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"如果这时回过头看控制台, 你会发现有这么一段错误十分显眼, 无法读取 undefined 的属性, 正是由于这个错误, 加之某站程序员的细心, 你才得以看到文章和抓到接口\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"后话\"},{\"attributes\":{\"header\":2},\"insert\":\"\\n\"},{\"insert\":\"Issue 已经发了, 估计写到文档里也是泽生的事情 🥴\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"这样的因 SSR 而省下的相关接口应该也有很多, 一个个慢慢打断点抓也不是个长久之计, 毕竟一旦直接渲染成 HTML, 就没的办法了 😮‍💨\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"学习正经的前端知识还是有利于不正经的逆向的 📚\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"希望大家都能来一起帮忙, Make BAC Great Again! 🥂\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"有改动, 原文地址: https://sess.xhustudio.eu.org/posts/2025/devtools-vs-ssr-bac/\"},{\"attributes\":{\"blockquote\":true},\"insert\":\"\\n\"}]}",
    "keywords": "BULLET,HEADER,WINDOW,LIST,SSR,WIDTH,html,undefined,VIEW,FIREFOX,BAC,JAVASCRIPT,CLASS,脚本插件,SIZE,TRUE,es6,ALT,长久之计,HTTPS,CSS,控制台,一起帮,A_PI,解决方法,期待已久,大功告成,没什么,有什么,浏览器,很舒服,无所谓,有没有,程序员,有利于,不正经",
    "version_id": 0,
    "opus": {
      "opus_id": 1056353752004427792,
      "opus_source": 2,
      "title": "通过 DevTools 绕过 SSR 抓包某站专栏正文接口",
      "content": {
        "paragraphs": [
          {
            "para_type": 1,
            "text": {
              "nodes": [
                {
                  "node_type": 1,
                  "word": {
                    "words": "背景",
                    "font_size": 22,
                    "style": {
                      "bold": true
                    },
                    "font_level": "xLarge"
                  }
                }
              ]
            }
          },
          {
            "para_type": 6,
            "format": {
              "list_format": {
                "level": 1,
                "order": 1
              }
            },
            "text": {
              "nodes": [
                {
                  "node_type": 1,
                  "word": {
                    "words": "最近没什么事做, 又回 BAC 看看有什么接口可以抓, 于是看到了陈年的专栏正文内容的 Issue #859",
                    "font_size": 17,
                    "style": {},
                    "font_level": "regular"
                  }
                }
              ]
            }
          },
          {
            "para_type": 6,
            "format": {
              "list_format": {
                "level": 1,
                "order": 2
              }
            },
            "text": {
              "nodes": [
                {
                  "node_type": 1,
                  "word": {
                    "words": "由于泽生自己是写前端的, 对于浏览器 DevTools 的各项调试工具还算是比较了解, 打算想办法把专栏正文的接口抓下来 :)",
                    "font_size": 17,
                    "style": {},
                    "font_level": "regular"
                  }
                }
              ]
            }
          },
          {
            "para_type": 1,
            "text": {
              "nodes": [
                {
                  "node_type": 1,
                  "word": {
                    "words": "思路",
                    "font_size": 22,
                    "style": {
                      "bold": true
                    },
                    "font_level": "xLarge"
                  }
                }
              ]
            }
          },
          {
            "para_type": 6,
            "format": {
              "list_format": {
                "level": 1,
                "order": 1
              }
            },
            "text": {
              "nodes": [
                {
                  "node_type": 1,
                  "word": {
                    "words": "由于专栏正文完整的内容在页面加载的时候就已经通过 SSR (Server-Side Rendering, 服务端渲染) 的方式通过 <script> 标签注入到 HTML 网页中, 直接通过看 DevTools 的网络面板肯定是没用的",
                    "font_size": 17,
                    "style": {},
                    "font_level": "regular"
                  }
                }
              ]
            }
          },
          {
            "para_type": 2,
            "pic": {
              "pics": [
                {
                  "url": "https://i0.hdslb.com/bfs/new_dyn/7bb121008990850bbd333fe504eebc90645769214.png",
                  "width": 748,
                  "height": 494,
                  "size": 180.8974609375
                }
              ],
              "style": 1
            }
          },
          {
            "para_type": 6,
            "format": {
              "list_format": {
                "level": 1,
                "order": 1
              }
            },
            "text": {
              "nodes": [
                {
                  "node_type": 1,
                  "word": {
                    "words": "最直接的方法是找到专栏相关的 JavaScript 代码, 通过大脑在没有 SourceMap 的情况下沿着 bundle 逆向出接口, 这种方法对于泽生明显不可行, 其中一个原因是屏幕太小而源码太大 (-.-;)",
                    "font_size": 17,
                    "style": {},
                    "font_level": "regular"
                  }
                }
              ]
            }
          },
          {
            "para_type": 6,
            "format": {
              "list_format": {
                "level": 1,
                "order": 2
              }
            },
            "text": {
              "nodes": [
                {
                  "node_type": 1,
                  "word": {
                    "words": "另一个方法是通过伪造 SSR 不工作, 从而诱导页面脚本手动通过 API 去获取内容, 不过伪造的方法也比较麻烦, 但可行度相对较高 😆",
                    "font_size": 17,
                    "style": {},
                    "font_level": "regular"
                  }
                }
              ]
            }
          },
          {
            "para_type": 6,
            "format": {
              "list_format": {
                "level": 1,
                "order": 3
              }
            },
            "text": {
              "nodes": [
                {
                  "node_type": 1,
                  "word": {
                    "words": "关于如何伪造 SSR 不工作的现象, 就需要分析 SSR 是如何被使用的, 某站的 SSR 是通过向页面注入 JavaScript 代码实现的, 具体是在 window 全局对象上加了个属性 __INITIAL_STATE__, 具体结构需要具体页面分析",
                    "font_size": 17,
                    "style": {},
                    "font_level": "regular"
                  }
                }
              ]
            }
          },
          {
            "para_type": 6,
            "format": {
              "list_format": {
                "level": 1,
                "order": 4
              }
            },
            "text": {
              "nodes": [
                {
                  "node_type": 1,
                  "word": {
                    "words": "目标就是要在读取之前移除这个属性, 移除方法简单, 无非是直接 window.__INITIAL_STATE__ = undefined (或者任意无效值), 或者 delete window.__INITIAL_STATE__, 别的 ES6 的反射之类的方法就不说了, 这不是重点",
                    "font_size": 17,
                    "style": {},
                    "font_level": "regular"
                  }
                }
              ]
            }
          },
          {
            "para_type": 6,
            "format": {
              "list_format": {
                "level": 1,
                "order": 5
              }
            },
            "text": {
              "nodes": [
                {
                  "node_type": 1,
                  "word": {
                    "words": "但这个脚本注入的位置就很恶心, 不在 <head> 里面, 也不在 <body> 底部, 就刚好在读取 __INITIAL_STATE__ 的脚本前面, 这使得无法使用篡改猴一类的用户脚本插件进行修改, 因为提供的用户脚本执行方式会出现还没写属性和已经读过属性的问题 (゜-゜)",
                    "font_size": 17,
                    "style": {},
                    "font_level": "regular"
                  }
                }
              ]
            }
          },
          {
            "para_type": 6,
            "format": {
              "list_format": {
                "level": 1,
                "order": 6
              }
            },
            "text": {
              "nodes": [
                {
                  "node_type": 1,
                  "word": {
                    "words": "接着就是传统的 DevTools 调试面板, 但正常手动暂停脚本执行往往已经脚本执行完成了, 解决方法就是网络节流或者 <head> 处用户脚本 debugger 语句",
                    "font_size": 17,
                    "style": {},
                    "font_level": "regular"
                  }
                }
              ]
            }
          },
          {
            "para_type": 6,
            "format": {
              "list_format": {
                "level": 1,
                "order": 7
              }
            },
            "text": {
              "nodes": [
                {
                  "node_type": 1,
                  "word": {
                    "words": "正好篡改猴高级设置允许用户脚本执行前暂停开始调试, 原理就是 debugger 语句, 只要把脚本执行位置放在 <body> 之前就有机会打断点把 __INITIAL_STATE__ 删掉 💥",
                    "font_size": 17,
                    "style": {},
                    "font_level": "regular"
                  }
                }
              ]
            }
          },
          {
            "para_type": 2,
            "pic": {
              "pics": [
                {
                  "url": "https://i0.hdslb.com/bfs/new_dyn/1a20d186e8c8cddc043b5295d481c719645769214.png",
                  "width": 625,
                  "height": 563,
                  "size": 312.779296875
                }
              ],
              "style": 1
            }
          },
          {
            "para_type": 1,
            "text": {
              "nodes": [
                {
                  "node_type": 1,
                  "word": {
                    "words": "实践",
                    "font_size": 22,
                    "style": {
                      "bold": true
                    },
                    "font_level": "xLarge"
                  }
                }
              ]
            }
          },
          {
            "para_type": 6,
            "format": {
              "list_format": {
                "level": 1,
                "order": 1
              }
            },
            "text": {
              "nodes": [
                {
                  "node_type": 1,
                  "word": {
                    "words": "使用 Chromium (理论上 Firefox 也可以, 但其 DevTools 泽生用起来不是很舒服) 安装篡改猴扩展 🐒, 新建一个用户脚本, 里面是否写内容无所谓, 执行位置为 document-head, 然后在篡改猴的设置里面把调试脚本打开",
                    "font_size": 17,
                    "style": {},
                    "font_level": "regular"
                  }
                }
              ]
            }
          },
          {
            "para_type": 6,
            "format": {
              "list_format": {
                "level": 1,
                "order": 2
              }
            },
            "text": {
              "nodes": [
                {
                  "node_type": 1,
                  "word": {
                    "words": "接着打开一个使用 SSR 的网页, 不过注意要保持 DevTools 打开, 否则调试就不会生效, 页面脚本自动暂停后, 你将看到你的脚本和该页面已经加载的内容, 包含 HTML 网页, JavaScript 代码, 和 CSS 文本",
                    "font_size": 17,
                    "style": {},
                    "font_level": "regular"
                  }
                }
              ]
            }
          },
          {
            "para_type": 6,
            "format": {
              "list_format": {
                "level": 1,
                "order": 3
              }
            },
            "text": {
              "nodes": [
                {
                  "node_type": 1,
                  "word": {
                    "words": "你所需要做的就是检查 SSR 的情况是否如你所想的那样, 放在 window.__INITIAL_STATE__ 那里, 如果是直接渲染成页面元素的话, 抱歉上帝来了也救不了你, 某站 JavaScript 前端可不会管 HTML 的事情 🫠",
                    "font_size": 17,
                    "style": {},
                    "font_level": "regular"
                  }
                }
              ]
            }
          },
          {
            "para_type": 6,
            "format": {
              "list_format": {
                "level": 1,
                "order": 4
              }
            },
            "text": {
              "nodes": [
                {
                  "node_type": 1,
                  "word": {
                    "words": "如果在 __INITIAL_STATE__ 里面, 恭喜, 你可以直接继续了. 如果不是, 那就检查一下当前页面路径之类的, 看看有没有不同版本的相同内容, 毕竟专栏分新旧版, 专栏网页也分新旧版, 往往旧版能带来惊喜 ✨",
                    "font_size": 17,
                    "style": {},
                    "font_level": "regular"
                  }
                }
              ]
            }
          },
          {
            "para_type": 6,
            "format": {
              "list_format": {
                "level": 1,
                "order": 5
              }
            },
            "text": {
              "nodes": [
                {
                  "node_type": 1,
                  "word": {
                    "words": "找到了合适的 __INITIAL_STATE__, 你只需要在原地打个断点, 然后继续执行脚本, 页面就会在那里暂停, 接着执行下一步, 此时赋值完成, 可以开始改属性了",
                    "font_size": 17,
                    "style": {},
                    "font_level": "regular"
                  }
                }
              ]
            }
          },
          {
            "para_type": 6,
            "format": {
              "list_format": {
                "level": 1,
                "order": 6
              }
            },
            "text": {
              "nodes": [
                {
                  "node_type": 1,
                  "word": {
                    "words": "切到控制台, 执行那句期待已久的语句: window.__INITIAL_STATE__ = undefined, 大功告成! 🎉",
                    "font_size": 17,
                    "style": {},
                    "font_level": "regular"
                  }
                }
              ]
            }
          },
          {
            "para_type": 6,
            "format": {
              "list_format": {
                "level": 1,
                "order": 7
              }
            },
            "text": {
              "nodes": [
                {
                  "node_type": 1,
                  "word": {
                    "words": "恢复页面脚本执行, 你会看到页面好像卡了一下, 然后文章还是加载了出来, 这个时候就可以看看网络面板的情况了",
                    "font_size": 17,
                    "style": {},
                    "font_level": "regular"
                  }
                }
              ]
            }
          },
          {
            "para_type": 2,
            "pic": {
              "pics": [
                {
                  "url": "https://i0.hdslb.com/bfs/new_dyn/87c88df1e15195996e34835456493d55645769214.png",
                  "width": 892,
                  "height": 831,
                  "size": 462.603515625
                }
              ],
              "style": 1
            }
          },
          {
            "para_type": 6,
            "format": {
              "list_format": {
                "level": 1,
                "order": 1
              }
            },
            "text": {
              "nodes": [
                {
                  "node_type": 1,
                  "word": {
                    "words": "可以观察到, 多了一个你从来没见到过的叫 view 的野生请求, 点开详细, 复制地址, 记下参数, 保存响应, 发 Issue 去也~",
                    "font_size": 17,
                    "style": {},
                    "font_level": "regular"
                  }
                }
              ]
            }
          },
          {
            "para_type": 6,
            "format": {
              "list_format": {
                "level": 1,
                "order": 2
              }
            },
            "text": {
              "nodes": [
                {
                  "node_type": 1,
                  "word": {
                    "words": "如果这时回过头看控制台, 你会发现有这么一段错误十分显眼, 无法读取 undefined 的属性, 正是由于这个错误, 加之某站程序员的细心, 你才得以看到文章和抓到接口",
                    "font_size": 17,
                    "style": {},
                    "font_level": "regular"
                  }
                }
              ]
            }
          },
          {
            "para_type": 1,
            "text": {
              "nodes": [
                {
                  "node_type": 1,
                  "word": {
                    "words": "后话",
                    "font_size": 22,
                    "style": {
                      "bold": true
                    },
                    "font_level": "xLarge"
                  }
                }
              ]
            }
          },
          {
            "para_type": 6,
            "format": {
              "list_format": {
                "level": 1,
                "order": 1
              }
            },
            "text": {
              "nodes": [
                {
                  "node_type": 1,
                  "word": {
                    "words": "Issue 已经发了, 估计写到文档里也是泽生的事情 🥴",
                    "font_size": 17,
                    "style": {},
                    "font_level": "regular"
                  }
                }
              ]
            }
          },
          {
            "para_type": 6,
            "format": {
              "list_format": {
                "level": 1,
                "order": 2
              }
            },
            "text": {
              "nodes": [
                {
                  "node_type": 1,
                  "word": {
                    "words": "这样的因 SSR 而省下的相关接口应该也有很多, 一个个慢慢打断点抓也不是个长久之计, 毕竟一旦直接渲染成 HTML, 就没的办法了 😮‍💨",
                    "font_size": 17,
                    "style": {},
                    "font_level": "regular"
                  }
                }
              ]
            }
          },
          {
            "para_type": 6,
            "format": {
              "list_format": {
                "level": 1,
                "order": 3
              }
            },
            "text": {
              "nodes": [
                {
                  "node_type": 1,
                  "word": {
                    "words": "学习正经的前端知识还是有利于不正经的逆向的 📚",
                    "font_size": 17,
                    "style": {},
                    "font_level": "regular"
                  }
                }
              ]
            }
          },
          {
            "para_type": 6,
            "format": {
              "list_format": {
                "level": 1,
                "order": 4
              }
            },
            "text": {
              "nodes": [
                {
                  "node_type": 1,
                  "word": {
                    "words": "希望大家都能来一起帮忙, Make BAC Great Again! 🥂",
                    "font_size": 17,
                    "style": {},
                    "font_level": "regular"
                  }
                }
              ]
            }
          },
          {
            "para_type": 4,
            "text": {
              "nodes": [
                {
                  "node_type": 1,
                  "word": {
                    "words": "有改动, 原文地址: https://sess.xhustudio.eu.org/posts/2025/devtools-vs-ssr-bac/",
                    "font_size": 17,
                    "style": {},
                    "font_level": "regular"
                  }
                }
              ]
            }
          }
        ]
      },
      "tags": [
        {
          "tag": {
            "show_text": "HTML",
            "link_type": 36
          }
        },
        {
          "tag": {
            "show_text": "API",
            "link_type": 36
          }
        },
        {
          "tag": {
            "show_text": "BAC",
            "link_type": 36
          }
        },
        {
          "tag": {
            "show_text": "JavaScript",
            "link_type": 36
          }
        },
        {
          "tag": {
            "show_text": "Bilibili",
            "link_type": 36
          }
        },
        {
          "tag": {
            "show_text": "GitHub",
            "link_type": 36
          }
        },
        {
          "tag": {
            "show_text": "Web",
            "link_type": 36
          }
        },
        {
          "tag": {
            "show_text": "Chromium",
            "link_type": 36
          }
        },
        {
          "tag": {
            "show_text": "DevTools",
            "link_type": 36
          }
        }
      ],
      "pub_info": {
        "uid": 645769214,
        "pub_time": 1744789930
      },
      "article": {
        "category_id": 26,
        "list_id": 326286,
        "originality": 1,
        "reproduced": 1,
        "cover": [
          {
            "url": "http://i0.hdslb.com/bfs/article/9071997152b6fec0ae465fe2a86b580e645769214.jpg",
            "width": 768,
            "height": 430,
            "size": 58.13671875
          }
        ],
        "biz_tags": [
          "JavaScript",
          "HTML",
          "Chromium",
          "DevTools",
          "BAC",
          "GitHub",
          "API",
          "Bilibili",
          "Web"
        ]
      },
      "version": {
        "cvid": 41358718,
        "version_id": 140614555890906624
      }
    },
    "dyn_id_str": "1056353752004427792",
    "total_art_num": 4
  }
}
```

</details>
