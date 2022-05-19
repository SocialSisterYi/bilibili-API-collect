# 购买漫画章节

> https://manga.bilibili.com/twirp/comic.v1.Comic/BuyEpisode

*请求方式：POST*

认证方式：Cookie（SESSDATA）/ APP

**URL参数：**

| 参数名     | 类型 | 内容                     | 必要性         | 备注                                                         |
| ---------- | ---- | ------------------------ | -------------- | ------------------------------------------------------------ |
| access_key | str  |     APP登录凭证       | 必要    |   使用APP鉴权方式时必填                                                           |
| appkey | str  |     cc8617fd6961e070       | 非必要    |                                                              |
| mobi_app | str  |     android_comic       | 非必要    |                                                              |
| version | str  |     4.13.0       | 非必要    |                                                              |
| build | str  |     36413002       | 非必要    |                                                              |
| channel | str  |     bilicomic       | 非必要    |                                                              |
| platform | str  |     android       | 必要    |                                                              |
| device | str  |     android       | 非必要    |                                                              |
| buvid | str  |            | 非必要    |                                                              |
| machine | str  |     samsung+SM-G9730       | 非必要    |                                                              |
| is_teenager | num  |     0       | 非必要    |                                                              |
| no_recommend | num  |     0       | 非必要    |                                                              |
| ts | num  |    秒级时间戳       | 非必要    |                                                              |

**正文参数（ application/json ）：**

| 参数名   | 类型 | 内容                     | 必要性 | 备注                                              |
| -------- | ---- | ------------------------ | ------ | ------------------------------------------------- |
| epId   | num  |     章节id             |  必要  |                                 |
| buyMethod   | num  |     购买方式             | 必要   |  2：漫读券<br />5：通用券                         |
| couponId   | num  |     漫读券id             | 必要   |                             |
| autoPayGoldStatus   | num  |     2             | 必要   |                             |
| isPresale   | num  |     0            | 必要   |                             |

漫读券购买

```
{
    "epId": 484366,
    "buyMethod": 2,
    "couponId": 7461430,
    "autoPayGoldStatus": 2,
    "isPresale": 0
}
```

通用券购买

```
{
    "epId": 484366,
    "buyMethod": 5,
    "couponId": 0,
    "autoPayGoldStatus": 2,
    "payAmount": 1,
    "isPresale": 0
}
```
**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num   | 返回值   | 0：成功<br />0：本话无需购买<br />1：没有足够的卡券使用次数<br /> |
| msg | str  | 错误信息 |                                                       |

**示例：**

```bash
curl -L -X POST 'https://manga.bilibili.com/twirp/comic.v1.Comic/BuyEpisode?platform=android' \
-H 'Cookie: SESSDATA=xxx;' \
-H 'Content-Type: application/json' \
--data-raw '{
    "epId": 484366,
    "buyMethod": 2,
    "couponId": 7461430,
    "autoPayGoldStatus": 2,
    "isPresale": 0
}'
```

<details>
<summary>购买成功：</summary>


```json
{
  "code": 0,
  "msg": "",
  "data": {
    "auto_use_item": ""
  }
}
```

</details>