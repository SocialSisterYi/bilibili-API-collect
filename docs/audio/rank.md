# 音频榜单

以下接口均来自页面 https://music.bilibili.com/pc/rank

## 获取音频榜单每期列表

> https://api.bilibili.com/x/copyright-music-publicity/toplist/all_period

*请求方式：GET*

**url参数：**

| 参数名    | 类型 | 内容                     | 必要性 | 备注                   |
| --------- | ---- | ------------------------ | ------ | ---------------------- |
| list_type | num  | 榜单类型                 | 必要   | 1：热榜<br />2：原创榜 |
| csrf      | str  | CSRF Token（位于cookie） | 非必要 |                        |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为 0                    |
| ttl     | num  | 1        |                             |
| data    | obj  | 信息本体 |                             |

`data`对象：

| 字段 | 类型 | 内容     | 备注 |
| ---- | ---- | -------- | ---- |
| list | obj  | 年份索引 |      |

`data`中的`list`对象：

| 字段   | 类型  | 内容                   | 备注 |
| ------ | ----- | ---------------------- | ---- |
| {年份} | array | 对应年份索引的每期信息 |      |
| ……     | array | ……                     |      |

`list`中的`{年份}`数组：

| 项   | 类型 | 内容             | 备注 |
| ---- | ---- | ---------------- | ---- |
| 0    | obj  | 该年中的单期数据 |      |
| ……   | obj  | ……               | ……   |

`{年份}`数组中的对象：

| 字段         | 类型 | 内容     | 备注     |
| ------------ | ---- | -------- | -------- |
| ID           | num  | 榜单 id  |          |
| priod        | num  | 榜单期数 |          |
| publish_time | num  | 发布时间 | 秒时间戳 |

**示例：**

```bash
curl -G 'https://api.bilibili.com/x/copyright-music-publicity/toplist/all_period' \
	--data-urlencode 'list_type=1'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "list": {
            "2022": [
                {
                    "ID": 38,
                    "priod": 29,
                    "publish_time": 1672394399
                },
                {
                    "ID": 36,
                    "priod": 28,
                    "publish_time": 1671789599
                },
                {
                    "ID": 34,
                    "priod": 27,
                    "publish_time": 1671184800
                },
                {
                    "ID": 32,
                    "priod": 26,
                    "publish_time": 1670579999
                },
                {
                    "ID": 30,
                    "priod": 25,
                    "publish_time": 1669976540
                },
                {
                    "ID": 28,
                    "priod": 24,
                    "publish_time": 1669370757
                },
                {
                    "ID": 26,
                    "priod": 23,
                    "publish_time": 1668766987
                },
                {
                    "ID": 22,
                    "priod": 22,
                    "publish_time": 1668163419
                },
                {
                    "ID": 21,
                    "priod": 21,
                    "publish_time": 1667558276
                },
                {
                    "ID": 20,
                    "priod": 20,
                    "publish_time": 1666951199
                },
                {
                    "ID": 19,
                    "priod": 19,
                    "publish_time": 1666346399
                },
                {
                    "ID": 18,
                    "priod": 18,
                    "publish_time": 1665741599
                },
                {
                    "ID": 17,
                    "priod": 17,
                    "publish_time": 1665136799
                },
                {
                    "ID": 16,
                    "priod": 16,
                    "publish_time": 1664531999
                },
                {
                    "ID": 15,
                    "priod": 15,
                    "publish_time": 1663927199
                },
                {
                    "ID": 14,
                    "priod": 14,
                    "publish_time": 1663322399
                },
                {
                    "ID": 13,
                    "priod": 13,
                    "publish_time": 1662717599
                },
                {
                    "ID": 12,
                    "priod": 12,
                    "publish_time": 1662113559
                },
                {
                    "ID": 11,
                    "priod": 11,
                    "publish_time": 1661508657
                },
                {
                    "ID": 10,
                    "priod": 10,
                    "publish_time": 1660903199
                },
                {
                    "ID": 9,
                    "priod": 9,
                    "publish_time": 1660298400
                },
                {
                    "ID": 8,
                    "priod": 8,
                    "publish_time": 1659693599
                },
                {
                    "ID": 7,
                    "priod": 7,
                    "publish_time": 1659088799
                },
                {
                    "ID": 6,
                    "priod": 6,
                    "publish_time": 1658483999
                },
                {
                    "ID": 5,
                    "priod": 5,
                    "publish_time": 1657879200
                },
                {
                    "ID": 4,
                    "priod": 4,
                    "publish_time": 1657274399
                },
                {
                    "ID": 3,
                    "priod": 3,
                    "publish_time": 1656669600
                },
                {
                    "ID": 2,
                    "priod": 2,
                    "publish_time": 1656064800
                },
                {
                    "ID": 1,
                    "priod": 1,
                    "publish_time": 1655460091
                }
            ],
            "2023": [
                {
                    "ID": 76,
                    "priod": 48,
                    "publish_time": 1683885696
                },
                {
                    "ID": 74,
                    "priod": 47,
                    "publish_time": 1683281010
                },
                {
                    "ID": 72,
                    "priod": 46,
                    "publish_time": 1682675999
                },
                {
                    "ID": 70,
                    "priod": 45,
                    "publish_time": 1682071442
                },
                {
                    "ID": 68,
                    "priod": 44,
                    "publish_time": 1681466400
                },
                {
                    "ID": 66,
                    "priod": 43,
                    "publish_time": 1680861599
                },
                {
                    "ID": 64,
                    "priod": 42,
                    "publish_time": 1680256799
                },
                {
                    "ID": 62,
                    "priod": 41,
                    "publish_time": 1679652088
                },
                {
                    "ID": 60,
                    "priod": 40,
                    "publish_time": 1679047199
                },
                {
                    "ID": 58,
                    "priod": 39,
                    "publish_time": 1678442399
                },
                {
                    "ID": 56,
                    "priod": 38,
                    "publish_time": 1677837600
                },
                {
                    "ID": 54,
                    "priod": 37,
                    "publish_time": 1677232800
                },
                {
                    "ID": 52,
                    "priod": 36,
                    "publish_time": 1676628000
                },
                {
                    "ID": 50,
                    "priod": 35,
                    "publish_time": 1676023199
                },
                {
                    "ID": 48,
                    "priod": 34,
                    "publish_time": 1675418399
                },
                {
                    "ID": 46,
                    "priod": 33,
                    "publish_time": 1674813599
                },
                {
                    "ID": 44,
                    "priod": 32,
                    "publish_time": 1674208799
                },
                {
                    "ID": 42,
                    "priod": 31,
                    "publish_time": 1673603999
                },
                {
                    "ID": 40,
                    "priod": 30,
                    "publish_time": 1672999199
                }
            ]
        }
    }
}
```

</details>

## 查询音频榜单单期信息

> https://api.bilibili.com/x/copyright-music-publicity/toplist/detail

*请求方式：GET*

**url参数：**

| 参数名  | 类型 | 内容                     | 必要性 | 备注                                             |
| ------- | ---- | ------------------------ | ------ | ------------------------------------------------ |
| list_id | num  | 榜单 id                  | 必要   | 见 [获取音频榜单每期列表](#获取音频榜单每期列表) |
| csrf    | str  | CSRF Token（位于cookie） | 非必要 |                                                  |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为 0                    |
| ttl     | num  | 1        |                             |
| data    | obj  | 信息本体 |                             |

`data`对象：

| 字段         | 类型 | 内容                    | 备注                                                         |
| ------------ | ---- | ----------------------- | ------------------------------------------------------------ |
| listen_fid   | num  | 畅听版歌单收藏夹原始 id | 非真实收藏夹 mlid<br />需要在后方拼接用户 mid 的后两位，如`16484498`->`1648449844` |
| all_fid      | num  | 完整版歌单收藏夹原始 id | 非真实收藏夹 mlid<br />算法同上                              |
| fav_mid      | num  | 绑定收藏夹用户的 mid    | 例如`1164440244`（[音乐热榜bot](https://space.bilibili.com/1164440244)账号） |
| cover_url    | str  | 榜单封面 url            |                                                              |
| is_subscribe | bool | 是否已订阅榜单          | `true`：已订阅<br />`false`：未订阅<br />需要登录（Cookie 或 APP），未登录恒为`false` |
| listen_count | num  | 平台有版权音频的数量    |                                                              |

**示例：**

查询 [第 48 期音频榜单](https://music.bilibili.com/pc/rank?list_id=76)（id=76） 信息

```bash
curl -G 'https://api.bilibili.com/x/copyright-music-publicity/toplist/detail' \
	--data-urlencode 'list_id=76'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "listen_fid": 23317138,
        "all_fid": 23672948,
        "fav_mid": 1164440244,
        "cover_url": "http://i0.hdslb.com/bfs/music-publicity/d8509dc6ee94dd5cc4658a2cbca4f525b4396df5.png",
        "is_subscribe": false,
        "listen_count": 5
    }
}
```

</details>

## 获取音频榜单单期内容

> https://api.bilibili.com/x/copyright-music-publicity/toplist/music_list

*请求方式：GET*

**url参数：**

| 参数名  | 类型 | 内容                     | 必要性 | 备注                                             |
| ------- | ---- | ------------------------ | ------ | ------------------------------------------------ |
| list_id | num  | 榜单 id                  | 必要   | 见 [获取音频榜单每期列表](#获取音频榜单每期列表) |
| csrf    | str  | CSRF Token（位于cookie） | 非必要 |                                                  |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为 0                    |
| ttl     | num  | 1        |                             |
| data    | obj  | 信息本体 |                             |

`data`对象：

| 字段 | 类型  | 内容     | 备注 |
| ---- | ----- | -------- | ---- |
| list | array | 内容列表 |      |

`data`中的`list`数组：

| 项   | 类型 | 内容           | 备注 |
| ---- | ---- | -------------- | ---- |
| 0    | obj  | 榜单内容 1     |      |
| n    | obj  | 榜单内容 (n+1) |      |
| ……   | obj  | ……             | ……   |

`list`数组中的对象：

| 字段              | 类型  | 内容               | 备注                                        |
| ----------------- | ----- | ------------------ | ------------------------------------------- |
| music_id          | str   | 音频 MAID          | 例如`MA409252256362326366`                  |
| music_title       | str   | 音频标题           |                                             |
| singer            | str   | 音频作者           |                                             |
| album             | str   | 音频专辑           |                                             |
| mv_aid            | num   | 音频 MV 的 avid    | 若该音频无 MV 则该字段为 0                  |
| mv_bvid           | str   | 音频 MV 的 bvid    |                                             |
| mv_cover          | str   | 音频封面 url       |                                             |
| heat              | num   | 热度值             |                                             |
| rank              | num   | 排序值             | 1 为最高排序，DESC 方式                     |
| can_listen        | bool  | 平台是否有版权     | `true`：平台有版权<br />`false`：平台无版权 |
| recommendation    | str   | （？）             |                                             |
| creation_aid      | num   | 关联稿件 avid      |                                             |
| creation_bvid     | str   | 关联稿件 bvid      |                                             |
| creation_cover    | str   | 关联稿件封面 url   |                                             |
| creation_title    | str   | 关联稿件标题       |                                             |
| creation_up       | num   | 关联稿件 UP 主 mid |                                             |
| creation_nickname | str   | 关联稿件 UP 主昵称 |                                             |
| creation_duration | num   | 关联稿件时长       | 单位为秒                                    |
| creation_play     | num   | 关联稿件播放量     |                                             |
| creation_reason   | str   | 关联稿件二级分区名 |                                             |
| achievements      | array | 获得成就           |                                             |
| material_id       | num   | （？）             |                                             |
| material_use_num  | num   | （？）             |                                             |
| material_duration | num   | （？）             |                                             |
| material_show     | num   | （？）             |                                             |
| song_type         | num   | （？）             |                                             |

`list`数组中的对象中的`achievements`数组：

| 项   | 类型 | 内容           | 备注 |
| ---- | ---- | -------------- | ---- |
| 0    | str  | 成就文案 1     |      |
| n    | str  | 成就文案 (n+1) |      |
| ……   | str  | ……             | ……   |

**示例：**

查询 [第 48 期音频榜单](https://music.bilibili.com/pc/rank?list_id=76)（id=76） 榜单内容列表

```bash
curl -G 'https://api.bilibili.com/x/copyright-music-publicity/toplist/music_list' \
	--data-urlencode 'list_id=76'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "list": [
            {
                "music_id": "MA409252256362326366",
                "music_title": "極楽浄土",
                "singer": "GARNiDELiA",
                "album": "約束 -Promise code-",
                "mv_aid": 28361833,
                "mv_bvid": "BV1us41137Fd",
                "mv_cover": "https://i0.hdslb.com/bfs/station_src/music_metadata/07e0d9826c574e37df25387cab6df062.jpg",
                "heat": 5328979,
                "rank": 1,
                "can_listen": true,
                "recommendation": "",
                "creation_aid": 910787823,
                "creation_bvid": "BV1HM4y1b79Z",
                "creation_cover": "http://i1.hdslb.com/bfs/archive/5780a05437ec9880301ed093537d6af97b0f8bdb.jpg",
                "creation_title": "【MARiA】乘风2023初舞台！《极乐净土》，虽迟但到！",
                "creation_up": 110352985,
                "creation_nickname": "GARNiDELiA",
                "creation_duration": 100,
                "creation_play": 13487670,
                "creation_reason": "官方现场",
                "achievements": [
                    "重回榜单",
                    "最高排名1"
                ],
                "material_id": 0,
                "material_use_num": 0,
                "material_duration": 0,
                "material_show": 1,
                "song_type": 2
            },
            {
                "music_id": "MA456045402056087707",
                "music_title": "アイドル",
                "singer": "YOASOBI",
                "album": "アイドル",
                "mv_aid": 227499491,
                "mv_bvid": "BV17h411u7sb",
                "mv_cover": "http://i0.hdslb.com/bfs/station_src/music_metadata/4bf2fe90e9d2361c3c4ddf59064c6e69.jpg",
                "heat": 1856277,
                "rank": 2,
                "can_listen": false,
                "recommendation": "",
                "creation_aid": 952765045,
                "creation_bvid": "BV1Ws4y1A7fS",
                "creation_cover": "http://i0.hdslb.com/bfs/archive/8326350bab039ffee9274d7e1f94240d170fa096.jpg",
                "creation_title": "【中文字幕】我推的孩子「アイドル」官方MV（4K 60帧/Hi-Res）",
                "creation_up": 11585165,
                "creation_nickname": "爱莉丝青贝尔克",
                "creation_duration": 226,
                "creation_play": 3742892,
                "creation_reason": "音乐MV",
                "achievements": [
                    "本期排名持平",
                    "最高排名1"
                ],
                "material_id": 0,
                "material_use_num": 0,
                "material_duration": 0,
                "material_show": 1,
                "song_type": 2
            },
            {
                "music_id": "MA458652518440821364",
                "music_title": "野火wildfire",
                "singer": "HOYO- Mix,Jonathan Steingard",
                "album": "雪融于烬",
                "mv_aid": 0,
                "mv_bvid": "",
                "mv_cover": "https://i0.hdslb.com/bfs/station_src/music_metadata/e0825a2cfee22ce77f02d4d80826a1d9.jpg",
                "heat": 1767135,
                "rank": 3,
                "can_listen": false,
                "recommendation": "",
                "creation_aid": 355732312,
                "creation_bvid": "BV1ZX4y117Dx",
                "creation_cover": "http://i0.hdslb.com/bfs/archive/c98bd629876e8b7b4c056d39bcfeaabe7327e996.jpg",
                "creation_title": "这首“野火”神曲，我还能再听亿遍！！！",
                "creation_up": 394861137,
                "creation_nickname": "Hanserのcece",
                "creation_duration": 219,
                "creation_play": 2158925,
                "creation_reason": "动画创作",
                "achievements": [
                    "本期排名↑1",
                    "最高排名3"
                ],
                "material_id": 0,
                "material_use_num": 0,
                "material_duration": 0,
                "material_show": 1,
                "song_type": 2
            },
            {
                "music_id": "MA459088929228874460",
                "music_title": "不问别离",
                "singer": "指尖笑",
                "album": "不问别离",
                "mv_aid": 0,
                "mv_bvid": "",
                "mv_cover": "http://i0.hdslb.com/bfs/station_src/music_metadata/b1507c1649500a0dcf0295b4b68e4b15.jpg",
                "heat": 1576823,
                "rank": 4,
                "can_listen": false,
                "recommendation": "",
                "creation_aid": 740818022,
                "creation_bvid": "BV1Sk4y1E7qH",
                "creation_cover": "http://i2.hdslb.com/bfs/archive/5301b2fee7ad520c8946b5eb92888cf8be563a80.jpg",
                "creation_title": "日推歌单 | \"我叹那春花秋月不问别离 长风起孤城笛声里全是你\" |《不问ciaga》",
                "creation_up": 550445292,
                "creation_nickname": "peach63",
                "creation_duration": 164,
                "creation_play": 274898,
                "creation_reason": "音乐MV",
                "achievements": [
                    "本期排名↑10",
                    "最高排名4"
                ],
                "material_id": 0,
                "material_use_num": 0,
                "material_duration": 0,
                "material_show": 1,
                "song_type": 2
            },
            {
                "music_id": "MA459819223808501000",
                "music_title": "Spicy",
                "singer": "aespa",
                "album": "MY WORLD - The 3rd Mini Album",
                "mv_aid": 570920682,
                "mv_bvid": "BV1qz4y1a7m8",
                "mv_cover": "http://i0.hdslb.com/bfs/station_src/music_metadata/6455687e7d72dd838ffd2aa753fd7761.jpg",
                "heat": 1441365,
                "rank": 5,
                "can_listen": false,
                "recommendation": "",
                "creation_aid": 570920682,
                "creation_bvid": "BV1qz4y1a7m8",
                "creation_cover": "http://i2.hdslb.com/bfs/archive/cd5456735bd645343a51b8df9b4a91236b08e657.jpg",
                "creation_title": "aespa《Spicy》MV",
                "creation_up": 3493085782739496,
                "creation_nickname": "SMTOWN",
                "creation_duration": 205,
                "creation_play": 2363321,
                "creation_reason": "官方MV",
                "achievements": [
                    "新晋上榜",
                    "最高排名5"
                ],
                "material_id": 0,
                "material_use_num": 0,
                "material_duration": 0,
                "material_show": 1,
                "song_type": 2
            },
            {
                "music_id": "MA458946536466866804",
                "music_title": "UNFORGIVEN (feat. Nile Rodgers)",
                "singer": "LE SSERAFIM,Nile Rodgers",
                "album": "UNFORGIVEN",
                "mv_aid": 528370662,
                "mv_bvid": "BV1LM41137Pc",
                "mv_cover": "http://i0.hdslb.com/bfs/station_src/music_metadata/47e6685cfe44185ec4daab5e765e3b26.jpg",
                "heat": 1362593,
                "rank": 6,
                "can_listen": true,
                "recommendation": "",
                "creation_aid": 698312930,
                "creation_bvid": "BV1wm4y1y76i",
                "creation_cover": "http://i1.hdslb.com/bfs/archive/4f097f5067fc3408118f7d59b2c36d8278660dd9.jpg",
                "creation_title": "假如让金采源唱全曲......",
                "creation_up": 496743369,
                "creation_nickname": "YuueFriloeyyy_",
                "creation_duration": 183,
                "creation_play": 319267,
                "creation_reason": "歌曲演唱",
                "achievements": [
                    "本期排名↑3",
                    "最高排名6"
                ],
                "material_id": 0,
                "material_use_num": 0,
                "material_duration": 0,
                "material_show": 1,
                "song_type": 2
            },
            {
                "music_id": "MA451591354456234292",
                "music_title": "雪 Distance",
                "singer": "Capper,罗言",
                "album": "Uniconfication",
                "mv_aid": 0,
                "mv_bvid": "",
                "mv_cover": "https://i0.hdslb.com/bfs/station_src/music_metadata/5899008cea7ed157b8bdb6f9b89dd7ff.jpg",
                "heat": 1233174,
                "rank": 7,
                "can_listen": false,
                "recommendation": "",
                "creation_aid": 355903423,
                "creation_bvid": "BV1QX4y127jq",
                "creation_cover": "http://i2.hdslb.com/bfs/archive/e3542cf8d7cf7cc58268c840d845bb12d4c52662.jpg",
                "creation_title": "⚡️“可是雪啊，埋进土里”⚡️",
                "creation_up": 22169833,
                "creation_nickname": "寒了个羽",
                "creation_duration": 158,
                "creation_play": 2622705,
                "creation_reason": "音乐创作",
                "achievements": [
                    "本期排名↓1",
                    "最高排名3"
                ],
                "material_id": 0,
                "material_use_num": 0,
                "material_duration": 0,
                "material_show": 1,
                "song_type": 2
            },
            {
                "music_id": "MA460246447678301091",
                "music_title": "Ghost Face (鬼脸) (LIVE版)",
                "singer": "法老",
                "album": "中国说唱巅峰对决2023 第一期",
                "mv_aid": 0,
                "mv_bvid": "",
                "mv_cover": "https://i0.hdslb.com/bfs/station_src/music_metadata/0d4050feb7cac1a568849832d5fa9f67.jpg",
                "heat": 1163291,
                "rank": 8,
                "can_listen": false,
                "recommendation": "",
                "creation_aid": 355995337,
                "creation_bvid": "BV1qX4y1y78r",
                "creation_cover": "http://i0.hdslb.com/bfs/archive/f5e7a51dbe1f48441042dad1e45148c400a3f9fe.jpg",
                "creation_title": "【法老Pharaoh】虽迟但到！说唱巅峰对决《Ghost Face》live",
                "creation_up": 12807175,
                "creation_nickname": "法老爷爷",
                "creation_duration": 79,
                "creation_play": 885856,
                "creation_reason": "官方现场",
                "achievements": [
                    "新晋上榜",
                    "最高排名8"
                ],
                "material_id": 0,
                "material_use_num": 0,
                "material_duration": 0,
                "material_show": 1,
                "song_type": 2
            },
            {
                "music_id": "MA458974797167092444",
                "music_title": "F*ck My Life",
                "singer": "SEVENTEEN",
                "album": "SEVENTEEN 10th Mini Album 'FML'",
                "mv_aid": 313423265,
                "mv_bvid": "BV1tP41117mv",
                "mv_cover": "http://i0.hdslb.com/bfs/station_src/music_metadata/6723df38fcca9b2ab85b564e3809426e.jpg",
                "heat": 735517,
                "rank": 9,
                "can_listen": true,
                "recommendation": "",
                "creation_aid": 313423265,
                "creation_bvid": "BV1tP41117mv",
                "creation_cover": "http://i1.hdslb.com/bfs/archive/38377552bd74cc32851d6466343dc3a26983c3b6.jpg",
                "creation_title": "SEVENTEEN 'F*ck My Life' Official MV",
                "creation_up": 692206640,
                "creation_nickname": "SEVENTEEN",
                "creation_duration": 220,
                "creation_play": 1008830,
                "creation_reason": "官方MV",
                "achievements": [
                    "新晋上榜",
                    "最高排名9"
                ],
                "material_id": 0,
                "material_use_num": 0,
                "material_duration": 0,
                "material_show": 1,
                "song_type": 2
            },
            {
                "music_id": "MA460247474041267107",
                "music_title": "Control's Wishes",
                "singer": "Steven Grove,塞壬唱片-MSR",
                "album": "孤星OST",
                "mv_aid": 0,
                "mv_bvid": "",
                "mv_cover": "http://i0.hdslb.com/bfs/station_src/music_metadata/6068f2c64c6796f68b8dae7772f891ac.jpg",
                "heat": 628233,
                "rank": 10,
                "can_listen": false,
                "recommendation": "",
                "creation_aid": 740625544,
                "creation_bvid": "BV1ck4y1E7KJ",
                "creation_cover": "http://i1.hdslb.com/bfs/archive/11381997120391d655c91b19bc08e110ca8201e5.jpg",
                "creation_title": "【小提琴/钢琴】明日方舟四周年孤星PV曲《Control's Wishes》",
                "creation_up": 2016022052,
                "creation_nickname": "-桑榆墨景-",
                "creation_duration": 193,
                "creation_play": 37881,
                "creation_reason": "器乐演奏",
                "achievements": [
                    "新晋上榜",
                    "最高排名10"
                ],
                "material_id": 0,
                "material_use_num": 0,
                "material_duration": 0,
                "material_show": 1,
                "song_type": 2
            },
            {
                "music_id": "MA459266635128138957",
                "music_title": "花园种花（在小小的花园里种小小的花）",
                "singer": "桃子老师花开富贵",
                "album": "花园种花",
                "mv_aid": 0,
                "mv_bvid": "",
                "mv_cover": "http://i0.hdslb.com/bfs/station_src/music_metadata/fb1d6a44bb8337edf6c9d32c421e9c89.jpg",
                "heat": 623604,
                "rank": 11,
                "can_listen": false,
                "recommendation": "",
                "creation_aid": 398216313,
                "creation_bvid": "BV1uo4y1x7UF",
                "creation_cover": "http://i0.hdslb.com/bfs/archive/9562b126010376f7dcfedf0397170696eb1a19c5.jpg",
                "creation_title": "姬子老师:开拓者家长们，路上有点堵车，这节挖呀挖呀挖课来晚了",
                "creation_up": 391636983,
                "creation_nickname": "动漫跳舞姬",
                "creation_duration": 33,
                "creation_play": 566777,
                "creation_reason": "动画创作",
                "achievements": [
                    "新晋上榜",
                    "最高排名11"
                ],
                "material_id": 0,
                "material_use_num": 0,
                "material_duration": 0,
                "material_show": 1,
                "song_type": 2
            },
            {
                "music_id": "MA455203227252613620",
                "music_title": "Cupid",
                "singer": "FIFTY FIFTY",
                "album": "The Beginning: Cupid",
                "mv_aid": 226830843,
                "mv_bvid": "BV1sh41137rs",
                "mv_cover": "http://i0.hdslb.com/bfs/station_src/music_metadata/e91891c4e2573f4d4ada329db9a86b30.jpg",
                "heat": 562273,
                "rank": 12,
                "can_listen": false,
                "recommendation": "",
                "creation_aid": 485862497,
                "creation_bvid": "BV19T411b7nE",
                "creation_cover": "http://i2.hdslb.com/bfs/archive/ece27463e3eb13f9fbbcb799436375495a795e3c.jpg",
                "creation_title": "挑战在cp29和一百位coser比心！",
                "creation_up": 1477074,
                "creation_nickname": "菌儿rikushi",
                "creation_duration": 148,
                "creation_play": 1216246,
                "creation_reason": "COSPLAY创作",
                "achievements": [
                    "重回榜单",
                    "最高排名12"
                ],
                "material_id": 0,
                "material_use_num": 0,
                "material_duration": 0,
                "material_show": 1,
                "song_type": 2
            },
            {
                "music_id": "MA457806074590836885",
                "music_title": "星间旅行",
                "singer": "HOYO-MiX,茶理理理子",
                "album": "崩坏星穹铁道-星间旅行 Interstellar Journ",
                "mv_aid": 612992200,
                "mv_bvid": "BV1rh4y1n77f",
                "mv_cover": "https://i0.hdslb.com/bfs/station_src/music_metadata/20ddff696bbbd7f00fc8b76f7b5334f7.jpg",
                "heat": 515238,
                "rank": 13,
                "can_listen": false,
                "recommendation": "",
                "creation_aid": 995418876,
                "creation_bvid": "BV1vs4y197gt",
                "creation_cover": "http://i0.hdslb.com/bfs/archive/2d6997320bd2bb20f50b363a894033f325fed871.jpg",
                "creation_title": "《星穹铁道玩家现状》",
                "creation_up": 551188239,
                "creation_nickname": "企鹅带带北极熊",
                "creation_duration": 88,
                "creation_play": 1570181,
                "creation_reason": "音乐创作",
                "achievements": [
                    "本期排名↓10",
                    "最高排名2"
                ],
                "material_id": 0,
                "material_use_num": 0,
                "material_duration": 0,
                "material_show": 1,
                "song_type": 2
            },
            {
                "music_id": "MA434298821720206219",
                "music_title": "可愛くてごめん (feat. かぴ)",
                "singer": "HoneyWorks,かぴ",
                "album": "告白実行委員会 -FLYING SONGS- 恋してる",
                "mv_aid": 779733306,
                "mv_bvid": "BV1iy4y1Z7Ri",
                "mv_cover": "https://i0.hdslb.com/bfs/station_src/music_metadata/45ce3f52d31386741589a3a5ca9a420c.jpg",
                "heat": 438720,
                "rank": 14,
                "can_listen": true,
                "recommendation": "",
                "creation_aid": 862702118,
                "creation_bvid": "BV1gG4y117nV",
                "creation_cover": "http://i1.hdslb.com/bfs/archive/38d94515fe5f6294bf7712d8b26eb049ec3cf627.jpg",
                "creation_title": "这么可爱真是抱歉！❤️（*/∇＼*）天台宅舞",
                "creation_up": 434476793,
                "creation_nickname": "优联酱uu",
                "creation_duration": 140,
                "creation_play": 1199819,
                "creation_reason": "舞蹈创作",
                "achievements": [
                    "重回榜单",
                    "最高排名2"
                ],
                "material_id": 0,
                "material_use_num": 0,
                "material_duration": 0,
                "material_show": 1,
                "song_type": 2
            },
            {
                "music_id": "MA440555130794857381",
                "music_title": "阳光开朗大男孩",
                "singer": "卦者灵风",
                "album": "阳光开朗大男孩",
                "mv_aid": 421697247,
                "mv_bvid": "BV1z341187Y9",
                "mv_cover": "https://i0.hdslb.com/bfs/station_src/music_metadata/220c674ca22acb91114f6e0705d0f426.jpg",
                "heat": 371851,
                "rank": 15,
                "can_listen": true,
                "recommendation": "",
                "creation_aid": 995281134,
                "creation_bvid": "BV1as4y1d7QR",
                "creation_cover": "http://i0.hdslb.com/bfs/archive/4628837eb5baf879a2be79b16836c90e0466dd6c.jpg",
                "creation_title": "【灵能手书】阳光开朗大男孩",
                "creation_up": 8504036,
                "creation_nickname": "kipoki",
                "creation_duration": 81,
                "creation_play": 627123,
                "creation_reason": "动画创作",
                "achievements": [
                    "重回榜单",
                    "最高排名1"
                ],
                "material_id": 0,
                "material_use_num": 0,
                "material_duration": 0,
                "material_show": 1,
                "song_type": 2
            },
            {
                "music_id": "MA406539170333366962",
                "music_title": "此生不换",
                "singer": "青鸟飞鱼",
                "album": "仙剑奇侠传三 电视剧原声带",
                "mv_aid": 0,
                "mv_bvid": "",
                "mv_cover": "http://i0.hdslb.com/bfs/station_src/music_metadata/450bd04688ef6a691b1adb816ace6155.jpg",
                "heat": 361410,
                "rank": 16,
                "can_listen": false,
                "recommendation": "",
                "creation_aid": 545438082,
                "creation_bvid": "BV1Cq4y1J7Ge",
                "creation_cover": "http://i1.hdslb.com/bfs/archive/1b8b80f7ba9dccaf648cfb641b40e1d38965a4a4.jpg",
                "creation_title": "开口爷青回！男生宿舍回忆向翻唱仙剑3插曲《此生不换》｜我和室友的翻唱日常.",
                "creation_up": 346782115,
                "creation_nickname": "陈家淇_B11",
                "creation_duration": 258,
                "creation_play": 2976435,
                "creation_reason": "歌曲演唱",
                "achievements": [
                    "重回榜单",
                    "最高排名15"
                ],
                "material_id": 0,
                "material_use_num": 0,
                "material_duration": 0,
                "material_show": 1,
                "song_type": 2
            },
            {
                "music_id": "MA444928930235832050",
                "music_title": "太空电梯",
                "singer": "阿鲲",
                "album": "流浪地球2电影原声大碟",
                "mv_aid": 0,
                "mv_bvid": "",
                "mv_cover": "https://i0.hdslb.com/bfs/station_src/music_metadata/c64c10b911ace04ae45b3172abe3a1d8.jpg",
                "heat": 352572,
                "rank": 17,
                "can_listen": false,
                "recommendation": "",
                "creation_aid": 269421756,
                "creation_bvid": "BV1ic41157cc",
                "creation_cover": "http://i0.hdslb.com/bfs/archive/39a27b9d804750325b260f6bc69a3afa8c01a1dc.jpg",
                "creation_title": "都说是涂装问题了，看，这战斗力不就上来了吗！",
                "creation_up": 478832800,
                "creation_nickname": "大刀王五EP",
                "creation_duration": 87,
                "creation_play": 706377,
                "creation_reason": "动画创作",
                "achievements": [
                    "重回榜单",
                    "最高排名1"
                ],
                "material_id": 0,
                "material_use_num": 0,
                "material_duration": 0,
                "material_show": 1,
                "song_type": 2
            },
            {
                "music_id": "MA400017093531020491",
                "music_title": "兰亭序",
                "singer": "周杰伦",
                "album": "魔杰座",
                "mv_aid": 0,
                "mv_bvid": "",
                "mv_cover": "https://i0.hdslb.com/bfs/station_src/music_metadata/a03f7d174c3b01e4c6b3907a115c5434.jpg",
                "heat": 347017,
                "rank": 18,
                "can_listen": false,
                "recommendation": "",
                "creation_aid": 825572396,
                "creation_bvid": "BV1kg4y1L7v6",
                "creation_cover": "http://i0.hdslb.com/bfs/archive/59e8436511ff45402e3d5dcf2c01feeb94897103.jpg",
                "creation_title": "无关风月我题序等你回《兰亭序》",
                "creation_up": 628615890,
                "creation_nickname": "qqq还在梦里",
                "creation_duration": 125,
                "creation_play": 522133,
                "creation_reason": "歌曲演唱",
                "achievements": [
                    "重回榜单",
                    "最高排名6"
                ],
                "material_id": 0,
                "material_use_num": 0,
                "material_duration": 0,
                "material_show": 1,
                "song_type": 2
            },
            {
                "music_id": "MA457811156946443719",
                "music_title": "I'll Do It",
                "singer": "Heidi Montag",
                "album": "Superficial",
                "mv_aid": 0,
                "mv_bvid": "",
                "mv_cover": "https://i0.hdslb.com/bfs/station_src/music_metadata/e1d95f62257da69db1dc36e949f789f5.jpg",
                "heat": 345773,
                "rank": 19,
                "can_listen": false,
                "recommendation": "",
                "creation_aid": 313275936,
                "creation_bvid": "BV1XP411y7UD",
                "creation_cover": "http://i1.hdslb.com/bfs/archive/c42e54074a50ee1eaddbd5495091c2152aad8ecf.jpg",
                "creation_title": "“嗨，老婆” 【崩坏星穹铁道】",
                "creation_up": 14158002,
                "creation_nickname": "Ishi丶",
                "creation_duration": 61,
                "creation_play": 103542,
                "creation_reason": "动画创作",
                "achievements": [
                    "本期排名↓12",
                    "最高排名6"
                ],
                "material_id": 0,
                "material_use_num": 0,
                "material_duration": 0,
                "material_show": 1,
                "song_type": 2
            },
            {
                "music_id": "MA409255441550338398",
                "music_title": "失恋阵线联盟",
                "singer": "草蜢",
                "album": "失恋阵线联盟",
                "mv_aid": 0,
                "mv_bvid": "",
                "mv_cover": "https://i0.hdslb.com/bfs/station_src/music_metadata/5d6b27035d5f7c0e7781b779871aca04.jpg",
                "heat": 337176,
                "rank": 20,
                "can_listen": false,
                "recommendation": "",
                "creation_aid": 415864088,
                "creation_bvid": "BV1QV411b7CT",
                "creation_cover": "http://i1.hdslb.com/bfs/archive/8735563d73f86ef7073ed580a41e12c409bd2a5b.jpg",
                "creation_title": "年会舞蹈《失恋阵线联盟》完整版",
                "creation_up": 451425930,
                "creation_nickname": "舞大师舞蹈工作室",
                "creation_duration": 135,
                "creation_play": 5336890,
                "creation_reason": "舞蹈创作",
                "achievements": [
                    "重回榜单",
                    "最高排名20"
                ],
                "material_id": 0,
                "material_use_num": 0,
                "material_duration": 0,
                "material_show": 1,
                "song_type": 2
            }
        ]
    }
}
```

</details>

## 订阅或退订榜单

> https://api.bilibili.com/x/copyright-music-publicity/toplist/subscribe/update

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数(application/x-www-form-urlencoded)：**

| 参数名  | 类型 | 内容                     | 必要性          | 备注                                             |
| ------- | ---- | ------------------------ | --------------- | ------------------------------------------------ |
| state   | num  | 操作代码                 | 必要            | 1：订阅<br />2：退订                             |
| list_id | num  | 榜单 id                  | 非必要          | 见 [获取音频榜单每期列表](#获取音频榜单每期列表) |
| csrf    | str  | CSRF Token（位于cookie） | Cookie 方式必要 |                                                  |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf 验证失败<br />400：请求错误 |
| message | str  | 错误信息 | 默认为 0                                                     |
| ttl     | num  | 1        |                                                              |

**示例：**

```bash
curl 'https://api.bilibili.com/x/copyright-music-publicity/toplist/subscribe/update' \
	--data-urlencode 'state=1' \
	--data-urlencode 'state=76' \
	--data-urlencode 'csrf=xxx' \
	-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

</details>
