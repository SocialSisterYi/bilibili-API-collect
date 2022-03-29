# 游戏主页

## buvid

```shell
curl -H 'Host: api.bilibili.com' -H 'sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"' -H 'accept: application/json, text/plain, */*' -H 'sec-ch-ua-mobile: ?0' -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36' -H 'sec-ch-ua-platform: "macOS"' -H 'origin: https://www.biligame.com' -H 'sec-fetch-site: cross-site' -H 'sec-fetch-mode: cors' -H 'sec-fetch-dest: empty' -H 'referer: https://www.biligame.com/' -H 'accept-language: zh-CN,zh;q=0.9' --compressed 'https://api.bilibili.com/x/web-frontend/getbuvid'
```

```json
{"code":0,"data":{"buvid":"A2E7E681-1DE4-623F-8B08-B56D73F6C6C169792infoc"}}
```



## 用户get_crypto_url

猜测区块链头像

```shell
curl -H 'Host: line1-h5-pc-api.biligame.com' -H 'sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"' -H 'accept: */*' -H 'sec-ch-ua-mobile: ?0' -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36' -H 'sec-ch-ua-platform: "macOS"' -H 'origin: https://www.biligame.com' -H 'sec-fetch-site: same-site' -H 'sec-fetch-mode: cors' -H 'sec-fetch-dest: empty' -H 'referer: https://www.biligame.com/' -H 'accept-language: zh-CN,zh;q=0.9' --compressed 'https://line1-h5-pc-api.biligame.com/game/download/get_crypto_url?game_base_id=103496&_=1648450569596'
```



## 游戏信息


https://line1-h5-pc-api.biligame.com/game/detail/gameinfo

*请求方式：GET*

**请求参数：**

| 参数名       | 类型 | 内容   | 必要性 | 备注 |
| ------------ | ---- | ------ | ------ | ---- |
| game_base_id | str  | 游戏id | 必要   |      |
| _            | str  | 时间戳 | 必要   |      |

**json回复：**

根对象：

| 字段       | 类型 | 内容       | 备注   |
| ---------- | ---- | ---------- | ------ |
| code       | num  | 返回值     |        |
| message    | str  | 请求信息   | <br /> |
| request_id | num  | 请求id     |        |
| ts         | num  | 毫秒时间戳 |        |
| data       | obj  | 数据本体   |        |

data对象：

| 字段                  | 类型 | 内容         | 备注         |
| --------------------- | ---- | ------------ | ------------ |
| game_base_id          | num  | 游戏id       |              |
| title                 | str  | 游戏名称     | <br />       |
| icon                  | str  | 图标链接     |              |
| video_image           | str  | 视频头图链接 |              |
| video_url             | num  | 视频id       |              |
| bv_id                 | str  | bv号         |              |
| source                | num  |              |              |
| is_android_online     | bool |              |              |
| is_ios_online         | bool |              |              |
| is_pc_online          | bool |              |              |
| download_count        | num  |              |              |
| forum_link            | str  | 论坛地址？   |              |
| operator_name         | str  | 运营方       |              |
| developer_name        | str  | 开发者       |              |
| establisher_name      | str  | 发行方       |              |
| pc_background         | str  | pc背景链接   |              |
| pc_logo               | str  | pc logo链接  |              |
| notice_title          | str  |              |              |
| notice_content        | str  |              |              |
| summary               | str  | 简介         |              |
| android_game_status   | num  |              | 状态意义不明 |
| android_book_link     | str  |              |              |
| android_download_link | str  | 下载地址     |              |
| android_sign          | str  | 校验签名     |              |
| android_pkg_name      | str  | 包名         |              |
| android_pkg_size      | num  | 包大小       |              |
| android_pkg_ver       | num  | 包版本       |              |
| ios_game_status   | num |              | 状态意义不明 |
|ios_book_link| str  |              |              |
|ios_download_link| str  |              |              |
|pc_game_status| num |              | 状态意义不明 |
|pc_download_link| str  | 下载地址 |              |
|pc_download_link2| str  | 下载地址 |              |
|pc_book_link| str  |              |              |
|download_status| num |              |              |
|purchase_type| num |              |              |
|privacy_policy_link | str  | 隐私政策 |              |

**示例：**

```shell
curl --compressed 'https://line1-h5-pc-api.biligame.com/game/detail/gameinfo?game_base_id=103496&_=1648450569599'
```

<details>
<summary>查看响应示例：</summary>

```json
{
	"code": 0,
	"message": "成功",
	"request_id": "65a8887357184bc892b689e3d768aa7b",
	"ts": 1648450570115,
	"data": {
		"game_base_id": 103496,
		"title": "原神",
		"icon": "//i0.hdslb.com/bfs/game/ea73b7b8af285949ba31f3276ec0e9fb6598fbe3.png",
		"video_image": "//i0.hdslb.com/bfs/game/7e2850cd228c65277a41aabea92cbeda32ab011c.jpg",
		"video_url": 766338960,
		"bv_id": "BV1Er4y1h7FX",
		"source": 0,
		"is_android_online": true,
		"is_ios_online": true,
		"is_pc_online": true,
		"download_count": 15399734,
		"forum_link": "",
		"operator_name": "上海米哈游影铁科技有限公司",
		"developer_name": "上海米哈游影铁科技有限公司",
		"establisher_name": "上海米哈游影铁科技有限公司",
		"pc_background": "//i0.hdslb.com/bfs/game/368d18611c6b4bc256d2a14b19d364c507b662ba.jpg",
		"pc_logo": "//i0.hdslb.com/bfs/game/3fef1ab2325ae725e0e3b05bd1c41fb6ee0bcb7e.png",
		"notice_title": "",
		"notice_content": "",
		"summary": "跨越尘世的探索之旅",
		"android_game_status": 0,
		"android_book_link": "",
		"android_download_link": "https://pkg.biligame.com/games/ys_2.5.0_5517525_5674503_20220128_111554_27959.apk",
		"android_download_link2": "https://pkgdl.biligame.net/games/ys_2.5.0_5517525_5674503_20220128_111554_27959.apk",
		"android_sign": "0d48ed752cc30d58e7d9c04adeca5c3e",
		"android_pkg_name": "com.miHoYo.ys.bilibili",
		"android_pkg_size": 221043435,
		"android_pkg_ver": 341,
		"ios_game_status": 7,
		"ios_book_link": "",
		"ios_download_link": "",
		"pc_game_status": 0,
		"pc_download_link": "",
		"pc_download_link2": "",
		"pc_book_link": "",
		"download_status": 1,
		"purchase_type": 0,
		"privacy_policy_link": "https://user.mihoyo.com/#/about/privacyInGame?app_id=4&lang=zh-cn&channel_id=14&biz=hk4e_cn"
	}
}
```

</details>



## game官方账户

https://line1-h5-pc-api.biligame.com/game/detail/account

*请求方式：GET*

**请求参数：**

| 参数名       | 类型 | 内容    | 必要性 | 备注 |
| ------------ | ---- | ------- | ------ | ---- |
| game_base_id | str  | game id | 必要   |      |
| _            | str  | 时间戳  | 必要   |      |

**json回复：**

data对象：

| 字段            | 类型 | 内容     | 备注 |
| --------------- | ---- | -------- | ---- |
| mid             | num  | 用户id   |      |
| uname           | str  | 昵称     |      |
| face            | str  | 头像地址 |      |
| is_followed     | bool | 是否关注 |      |
| official_verify | obj  | 认证相关 |      |

official_verify对象：

| 字段 | 类型 | 内容     | 备注             |
| ---- | ---- | -------- | ---------------- |
| type | num  | 认证类型 | **状态尚不明确** |
| desc | str  | 认证描述 |                  |

**示例：**

```shell
curl 'https://line1-h5-pc-api.biligame.com/game/detail/account?game_base_id=103496&_=1648450569600'
```

<details>
<summary>查看响应示例：</summary>

```json
{"code":0,"message":"成功","request_id":"dabcee1193dd48bb8d4a41a4c4720321","ts":1648450570110,"data":{"mid":401742377,"uname":"原神","face":"//i2.hdslb.com/bfs/face/d2a95376140fb1e5efbcbed70ef62891a3e5284f.jpg","is_followed":false,"official_verify":{"type":1,"desc":"原神官方账号"}}}
```

</details>



## 游戏详情

https://line1-h5-pc-api.biligame.com/game/detail/content

*请求方式：GET*

**请求参数：**

| 参数名       | 类型 | 内容    | 必要性 | 备注 |
| ------------ | ---- | ------- | ------ | ---- |
| game_base_id | str  | game id | 必要   |      |
| _            | str  | 时间戳  | 必要   |      |

**json回复：**

data对象：

| 字段                       | 类型  | 内容         | 备注       |
| -------------------------- | ----- | ------------ | ---------- |
| game_base_id               | num   | 游戏id       |            |
| title                      | str   | 游戏名称     |            |
| screen_shots               | array | 头图地址     |            |
| tag_list                   | array | 游戏标签     | type值未知 |
| dev_introduction           | str   | 版本介绍     |            |
| editor_recommend           | str   | 编辑推荐     |            |
| book_award                 | str   |              |            |
| qq_group_list              | array | qq群         |            |
| forum_link                 | str   |              |            |
| android_latest_update      | str   | 安卓更新内容 |            |
| android_version            | str   | 安卓版本号   |            |
| android_update_time        | str   | 安卓更新时间 |            |
| ios_latest_update          | str   |              |            |
| ios_version                | str   |              |            |
| ios_update_time            | str   |              |            |
| game_weixin_image          | str   |              |            |
| game_weibo_url             | str   |              |            |
| custom_title               | str   |              |            |
| custom_desc                | str   |              |            |
| android_latest_update_time | str   |              |            |
| ios_latest_update_time     | str   |              |            |
| desc                       | str   | 游戏介绍     |            |

**示例：**

```shell
curl 'https://line1-h5-pc-api.biligame.com/game/detail/content?game_base_id=103496&_=1648450569599'
```

<details>
<summary>查看响应示例：</summary>

```json
{"code":0,"message":"成功","request_id":"6fe9512c15314d8db681404a4fef7f3c","ts":1648450570119,"data":{"game_base_id":103496,"title":"原神","screen_shots":[{"url":"//i0.hdslb.com/bfs/game/c05928de5998f943008f33710c8cda0085268742.jpg","height":720,"width":1280},{"url":"//i0.hdslb.com/bfs/game/877af6490d324599027c2b115c160107438ba8be.jpg","height":720,"width":1280},{"url":"//i0.hdslb.com/bfs/game/f88945fad60a5ab13f9794eb553afde1b48f338f.jpg","height":720,"width":1280},{"url":"//i0.hdslb.com/bfs/game/7ff09549ba90ac34f3306a0c7074403a8249b0fc.jpg","height":720,"width":1280},{"url":"//i0.hdslb.com/bfs/game/8becc029871d537e1db48440711017cf5ea83aa9.jpg","height":720,"width":1280}],"tag_list":[{"tag_id":"101484810399608196","name":"角色扮演","type":0},{"tag_id":"101492585310862419","name":"二次元","type":1},{"tag_id":"101492590455678785","name":"冒险","type":1},{"tag_id":"101492587413816225","name":"动作","type":1}],"dev_introduction":"亲爱的旅行者，全新2.5版本「薄樱初绽时」现已推出！\n各位旅行者重新下载客户端后即可继续进行体验。此次更新资源较大，建议旅行者在WiFi环境下进行版本升级。\n\n〓更新内容简介〓\n【新角色】八重神子\n「浮世笑百姿·八重神子(雷)」，使用法器的限定五星雷元素角色。\n\n【新活动】版本主题活动「三界路飨祭」\n渊下宫被不明源头的黑雾所笼罩。为了海祇岛的未来，心海提出了再探渊下宫的委托… \n活动期间内，旅行者可以探索调查黑暗笼罩的渊下宫，通过收集光界之印来升级「睦疏之匣」，对抗黑雾的侵蚀。\n \n【新剧情】传说任务更新\n八重神子传说任务 狐仙之章·第一幕「鸣神御祓祈愿祭」\n雷电将军传说任务 天下人之章·第二幕「须臾百梦」\n \n【新武器】神乐之真意\n限定五星武器「法器·神乐之真意」开放获取。\n \n【新怪物】祸津御建鸣神命\n祸津御建鸣神命——代行雷电将军权能的人偶，在对抗威胁「永恒」之敌时展现出的形态。\n\n\n•在数据方面：同在B站服务器的情况下，PC、Android平台之间的账号数据互通，旅行者可以在同一账号下切换设备，畅玩游戏。\n•在玩法方面：同在B站服务器的情况下，达到一定的冒险等阶且完成相应任务后，旅行者可申请加入彼此的游戏世界，参与联机活动。","editor_recommend":"","book_award":"","qq_group_list":[],"forum_link":"","android_latest_update":"全新2.5版本「薄樱初绽时」现已推出！\n\n【新角色】八重神子\n「浮世笑百姿·八重神子(雷)」，使用法器的限定五星雷元素角色。\n\n【新活动】版本主题活动「三界路飨祭」\n渊下宫被不明源头的黑雾所笼罩。为了海祇岛的未来，心海提出了再探渊下宫的委托… \n活动期间内，旅行者可以探索调查黑暗笼罩的渊下宫，通过收集光界之印来升级「睦疏之匣」，对抗黑雾的侵蚀。\n \n【新剧情】传说任务更新\n八重神子传说任务 狐仙之章·第一幕「鸣神御祓祈愿祭」\n雷电将军传说任务 天下人之章·第二幕「须臾百梦」\n \n【新武器】神乐之真意\n限定五星武器「法器·神乐之真意」开放获取。\n \n【新怪物】祸津御建鸣神命\n祸津御建鸣神命——代行雷电将军权能的人偶，在对抗威胁「永恒」之敌时展现出的形态。","android_version":"2.5.0_5517525_5674503","android_update_time":"2022-02-16 06:00:00","ios_latest_update":"","ios_version":"","ios_update_time":"","game_weixin_image":"","game_weibo_url":"","custom_title":"","custom_desc":"","android_latest_update_time":"2022-02-16 06:00:00","ios_latest_update_time":"","desc":"在七种元素交汇的大陆——「提瓦特」，每个人都可以成为神。\n\n你从世界之外漂流而来，降临大地。在这广阔的世界中，你自由旅行、结识同伴、寻找掌控尘世元素的七神，直到与分离的血亲重聚，在终点见证一切旅途的沉淀。\n\n维系者正在死去，创造者尚未到来。面对无法掌控的境遇，人类总会喟叹自身的无力……\n但在人生最陡峭的转折处，若有凡人的渴望达到极致，神明的视线就将投射而下。\n\n当失散的双子在尘沙中重聚、世界的谜底在「神之眼」中尽数显现之时——\n旅行者，你将去往何方？\n\n《原神》是由米哈游自研的一款全新开放世界冒险RPG。你将在游戏中探索一个被称作「提瓦特」的幻想世界。\n\n在这广阔的世界中，你可以踏遍七国，邂逅性格各异、能力独特的同伴，与他们一同对抗强敌，踏上寻回血亲之路；也可以不带目的地漫游，沉浸在充满生机的世界里，让好奇心驱使自己发掘各个角落的奥秘……\n"}}
```

</details>

## 评论回复统计

https://line1-h5-pc-api.biligame.com/game/comment/summary

*请求方式：GET*

**请求参数：**

| 参数名       | 类型 | 内容    | 必要性 | 备注 |
| ------------ | ---- | ------- | ------ | ---- |
| game_base_id | str  | game id | 必要   |      |
| _            | str  | 时间戳  | 必要   |      |

**json回复：**

data对象：

| 字段                 | 类型  | 内容       | 备注                   |
| -------------------- | ----- | ---------- | ---------------------- |
| grade                | num   | 游戏评分   |                        |
| comment_number       | num   | 评论数     |                        |
| valid_comment_number | num   | 有效评论数 | **暂未知和评论数区别** |
| star_number_list     | array | 打分列表   | 1-5分                  |
| state                | num   |            | 未知                   |

**示例：**

```shell
curl 'https://line1-h5-pc-api.biligame.com/game/comment/summary?game_base_id=103496&_=1648450569600'
```

<details>
<summary>查看响应示例：</summary>

```json
{"code":0,"message":"成功","request_id":"a7cead31f400417983cd345d5eb14892","ts":1648450570129,"data":{"grade":6.0,"comment_number":332105,"valid_comment_number":325753,"star_number_list":[106230,19307,19878,22674,106708],"state":3}}
```

</details>

## 未知

```shell
curl 'https://line1-h5-pc-api.biligame.com/game/detail/character?game_base_id=103496&_=1648450569601'
```

## Wiki

示例：

```shell
curl 'https://line1-h5-pc-api.biligame.com/game/detail/wiki?game_base_id=103496&_=1648450569689'
```

<details>
<summary>查看响应示例：</summary>

```json
{
	"code": 0,
	"message": "成功",
	"request_id": "e928fd91abee4827bc53cb093ada03cc",
	"ts": 1648450570142,
	"data": {
		"wiki_link": "https://wiki.biligame.com/ys/%E9%A6%96%E9%A1%B5?hmsr=%E6%B8%B8%E6%88%8F%E4%B8%AD%E5%BF%83&hmpl=&hmcu=&hmkw=&hmci=",
		"img_link": "//i0.hdslb.com/bfs/game/4b0bc171d4f30e52e5fe0454224f8ea70b7d46bd.png"
	}
}
```

</details>

## 介绍视频

https://line1-h5-pc-api.biligame.com/game/detail/get_video_v2

*请求方式：GET*

**请求参数：**

| 参数名       | 类型 | 内容    | 必要性 | 备注 |
| ------------ | ---- | ------- | ------ | ---- |
| game_base_id | str  | game id | 必要   |      |
| _            | str  | 时间戳  | 必要   |      |

**json回复：**

data对象：

| 字段       | 类型  | 内容         | 备注 |
| ---------- | ----- | ------------ | ---- |
| icon       | str   | icon链接地址 |      |
| game_name  | str   | 游戏名称     |      |
| video_list | array | video列表    |      |

video对象：

| 字段         | 类型  | 内容     | 备注 |
| ------------ | ----- | -------- | ---- |
| aid          | num   | 游戏id   |      |
| title        | str   | 游戏名称 |      |
| pic          | str   | 头图地址 |      |
| play         | array | 游戏标签 |      |
| review       | num   | 评论数   |      |
| video_review | num   | 弹幕数   |      |
| duration     | str   | 时长     |      |
| bv_id        | str   | bv号     |      |

**示例：**

```shell
curl 'https://line1-h5-pc-api.biligame.com/game/detail/get_video_v2?game_base_id=103496&_=1648450569690'
```

<details>
<summary>查看响应示例：</summary>

```json
{
	"code": 0,
	"message": "成功",
	"request_id": "d7056fc626d24e948322bbe87aaa3b03",
	"ts": 1648450570133,
	"data": {
		"icon": "//i0.hdslb.com/bfs/game/ea73b7b8af285949ba31f3276ec0e9fb6598fbe3.png",
		"game_name": "原神",
		"video_list": [{
			"aid": 83275598,
			"title": "《原神》新地区预告-「浮世浮生千岩间」",
			"pic": "http://i2.hdslb.com/bfs/archive/ed21bf2c820d994db748ae8bd27c6e2845ca7cf7.jpg",
			"play": 7971688,
			"review": 13250,
			"video_review": 7383,
			"duration": "1:47",
			"bv_id": "BV1MJ411H77i"
		}, {
			"aid": 79863637,
			"title": "《原神》全新角色预告-「天星不照之处」",
			"pic": "http://i0.hdslb.com/bfs/archive/e886c9b6c63402708d0169e297fb3bec1be555cb.jpg",
			"play": 3084366,
			"review": 5667,
			"video_review": 2190,
			"duration": "0:59",
			"bv_id": "BV1SJ411t7kb"
		}, {
			"aid": 61616393,
			"title": "《原神》跟着安柏一起探索提瓦特大陆吧！",
			"pic": "http://i0.hdslb.com/bfs/archive/c7510111cc86f919948a837bbe5032f4763e9ba0.jpg",
			"play": 1782223,
			"review": 15480,
			"video_review": 7989,
			"duration": "12:48",
			"bv_id": "BV1k4411f7LY"
		}, {
			"aid": 54916636,
			"title": "《原神》序章PV：捕风的异乡人",
			"pic": "http://i0.hdslb.com/bfs/archive/cdb637ccd87cba09e1278fd4474e5b23d971205b.jpg",
			"play": 3748612,
			"review": 36105,
			"video_review": 12159,
			"duration": "1:54",
			"bv_id": "BV1P4411T73c"
		}, {
			"aid": 212607395,
			"title": "【原神】绫人全能力强度拆解！神里绫人深度解析，平民玩家值得抽吗",
			"pic": "//i1.hdslb.com/bfs/archive/85022415e627e02e08d8d207ce3e81e6fa6dcb05.jpg",
			"play": 284681,
			"review": 568,
			"video_review": 503,
			"duration": "3:58",
			"bv_id": "BV1Ba411x7Qs"
		}, {
			"aid": 467503521,
			"title": "原神200多抽自抽号能抽到什么？哇！我瞎了！",
			"pic": "//i0.hdslb.com/bfs/archive/923613b26936def58b0488818df149b0a931ec34.jpg",
			"play": 17426,
			"review": 67,
			"video_review": 107,
			"duration": "4:48",
			"bv_id": "BV1QL411w75K"
		}, {
			"aid": 423962599,
			"title": "【原神】我他喵59级了才发现这个宝箱！",
			"pic": "//i1.hdslb.com/bfs/archive/b662940db3350c02c793e0950e643d6a8a2af47f.jpg",
			"play": 131420,
			"review": 111,
			"video_review": 115,
			"duration": "0:44",
			"bv_id": "BV1N341177Eb"
		}, {
			"aid": 212315657,
			"title": "【原神】不看亏亿！神里绫人最直观养成攻略！圣遗物、武器选择、技能简介",
			"pic": "//i2.hdslb.com/bfs/archive/e16e56c3a4b782fbb5be16f5d53fefd3ade21651.jpg",
			"play": 249908,
			"review": 1065,
			"video_review": 1289,
			"duration": "5:59",
			"bv_id": "BV18a41187Nq"
		}, {
			"aid": 251392165,
			"title": "【原神】此池不抽，更待何池？",
			"pic": "//i0.hdslb.com/bfs/archive/b4e2c193d7a68b818de22ff4cad23aa6c895c1c2.jpg",
			"play": 1205136,
			"review": 1364,
			"video_review": 6231,
			"duration": "3:8",
			"bv_id": "BV1ov411u7rC"
		}, {
			"aid": 930312245,
			"title": "【原神】这一抽，将贯穿星辰与深渊！",
			"pic": "//i1.hdslb.com/bfs/archive/4ed6186ac8f49fcb4cbeee0658dca7ed9fcfe160.jpg",
			"play": 5187773,
			"review": 2976,
			"video_review": 14434,
			"duration": "1:0",
			"bv_id": "BV13K4y1Z7ME"
		}, {
			"aid": 672042850,
			"title": "共青团中央点名表扬原神！原神狠狠的扇了BBC一巴掌！太爽了！",
			"pic": "//i1.hdslb.com/bfs/archive/863d335adf1639225aa08db002f02c347cd11c28.jpg",
			"play": 1834432,
			"review": 2081,
			"video_review": 5433,
			"duration": "2:49",
			"bv_id": "BV1aU4y1p7Lo"
		}, {
			"aid": 725206436,
			"title": "【原神】上百个痛苦号的总结：如何最效率练好角色？提升游戏体验！新老玩家都可以看的原神角色培养问题！",
			"pic": "//i1.hdslb.com/bfs/archive/67fdcfcd175e398b19fccebb743d0059fd01f715.jpg",
			"play": 47273,
			"review": 735,
			"video_review": 346,
			"duration": "8:57",
			"bv_id": "BV1PS4y1m7Q3"
		}, {
			"aid": 419290317,
			"title": "【原神】全网首个摆脱剧情杀，成功击败雷电将军的旅行者",
			"pic": "//i1.hdslb.com/bfs/archive/300430799322bb79502174ab5c49f37c2b13a9a5.jpg",
			"play": 3952885,
			"review": 5418,
			"video_review": 3114,
			"duration": "2:14",
			"bv_id": "BV1AV411p7bE"
		}, {
			"aid": 679388024,
			"title": "【波兰球】各国原神玩家现状",
			"pic": "//i1.hdslb.com/bfs/archive/79ebee4220522560fa2b7c1d99a647879fc606d4.jpg",
			"play": 420203,
			"review": 555,
			"video_review": 397,
			"duration": "1:48",
			"bv_id": "BV1Cm4y1R7N7"
		}, {
			"aid": 978819639,
			"title": "【原神】萌新试图偷渡了稻妻，结果...",
			"pic": "//i0.hdslb.com/bfs/archive/48c7a20148bff888220c762c817b777265804e57.jpg",
			"play": 726766,
			"review": 600,
			"video_review": 358,
			"duration": "3:42",
			"bv_id": "BV1B44y1W7FY"
		}, {
			"aid": 377759596,
			"title": "【原神】全稻妻最皮的雷灵！（送你华丽的宝箱",
			"pic": "//i1.hdslb.com/bfs/archive/9cd72c8f4ac57e02ec02c4d2e5cc3c9672b60a6b.jpg",
			"play": 361586,
			"review": 643,
			"video_review": 563,
			"duration": "5:25",
			"bv_id": "BV1nf4y1A7mJ"
		}, {
			"aid": 467371018,
			"title": "【原神】雷神 超详细养成攻略教学",
			"pic": "//i2.hdslb.com/bfs/archive/0687606c48ad3cf036e72a8f5b4c536c86780a58.jpg",
			"play": 591161,
			"review": 2360,
			"video_review": 2262,
			"duration": "23:38",
			"bv_id": "BV1XL411P7px"
		}, {
			"aid": 425091252,
			"title": "【原神同人曲/手书动画】「须臾梦方醒，浮世满薄樱」 ❀雷电影·八重神子",
			"pic": "//i1.hdslb.com/bfs/archive/2df92a9319897985c69f1cda22d843aca6ce1689.jpg",
			"play": 57380,
			"review": 750,
			"video_review": 381,
			"duration": "3:23",
			"bv_id": "BV1k3411p7CT"
		}, {
			"aid": 249180627,
			"title": "【原神】神里稳了",
			"pic": "//i0.hdslb.com/bfs/archive/6cf2ebcf6faaf17f3a3db6dfcab099cf3b772ec0.jpg",
			"play": 1571578,
			"review": 2059,
			"video_review": 11220,
			"duration": "1:52",
			"bv_id": "BV1jv411n7mb"
		}, {
			"aid": 510158756,
			"title": "别再玩假原神了！都来玩这款真原神！",
			"pic": "//i2.hdslb.com/bfs/archive/46c9f7ffe33fb112d556dd73a5418046a6b5d045.jpg",
			"play": 257259,
			"review": 722,
			"video_review": 560,
			"duration": "1:10",
			"bv_id": "BV1vu411v7HH"
		}]
	}
}
```

</details>
