# 视频排行榜

<img src="/imgs/ranking.svg" width="100" height="100"/>

## 获取分区排行榜视频列表

>http://api.bilibili.com/x/web-interface/ranking/region

*方式：GET*

获取相应时间段内播放量增速为前11的视频

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注                                                 |
| ------ | ---- | ----------- | ------ | ---------------------------------------------------- |
| day    | num  | 页码        | 非必要 | 1：单日榜<br />3：三日榜<br />7：一周榜<br />默认为3 |
| rid    | num  | 目标分区tID | 必要   |                                                      |

**json回复：**

根对象：

| 字段    | 类型   | 内容     | 备注                        |
| ------- | ------ | -------- | --------------------------- |
| code    | num    | 返回值   | 0：成功<br />-400：请求错误 |
| message | str    | 错误信息 | 默认为0                     |
| ttl     | num    | 1        | 作用尚不明确                |
| data    | array | 视频列表 |                             |

`data`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | obj  | 排行榜第1名     |      |
| n    | obj  | 排行榜第(n+1)名 |      |
| ……   | obj  | ……              | ……   |
| 10   | obj  | 排行榜第11名    |      |

`data`数组中的对象：

基本同「[视频详细信息](https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/video/info.md#视频详细信息（avID/bvID互转）)」中的data对象

**示例：**

获取`tID=1`（动画）分区中的三日视频排行榜

http://api.bilibili.com/x/web-interface/ranking/region?rid=1&day=3

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": [{
		"aid": "412584612",
		"bvid": "BV1CV411f76u",
		"typename": "短片·手书·配音",
		"title": "这TM才叫平等！！！",
		"subtitle": "",
		"play": 1247112,
		"review": 2018,
		"video_review": 2264,
		"favorites": 19546,
		"mid": 719238,
		"author": "谷谷永不咕咕",
		"description": "原视频：https://www.youtube.com/watch?v=a8KgVluAJzI\u0026t=\n作者：장삐쭈\n配音大赛 台词翻配赛道 谢谢大家！",
		"create": "2020-04-05 14:30",
		"pic": "http://i0.hdslb.com/bfs/archive/64de0b0738606f24ed1eeea6676469b7970c81ca.jpg",
		"coins": 19567,
		"duration": "1:43",
		"badgepay": false,
		"pts": 1114365,
		"rights": {
			"bp": 0,
			"elec": 0,
			"download": 0,
			"movie": 0,
			"pay": 0,
			"hd5": 1,
			"no_reprint": 1,
			"autoplay": 1,
			"ugc_pay": 0,
			"is_cooperation": 0,
			"ugc_pay_preview": 0,
			"no_background": 0
		}
	}, {
		"aid": "837736324",
		"bvid": "BV1ag4y187ec",
		"typename": "综合",
		"title": "灌篮高手全国大赛第一集",
		"subtitle": "",
		"play": 607079,
		"review": 2360,
		"video_review": 5246,
		"favorites": 23999,
		"mid": 61195337,
		"author": "enptypictures",
		"description": "“教练，我想打篮球！”老板，请让我过吧！",
		"create": "2020-04-05 13:27",
		"pic": "http://i1.hdslb.com/bfs/archive/cb4022fd764d6347983437271a10f6da64363544.jpg",
		"coins": 59153,
		"duration": "20:17",
		"badgepay": false,
		"pts": 857636,
		"rights": {
			"bp": 0,
			"elec": 0,
			"download": 0,
			"movie": 0,
			"pay": 0,
			"hd5": 1,
			"no_reprint": 1,
			"autoplay": 1,
			"ugc_pay": 0,
			"is_cooperation": 0,
			"ugc_pay_preview": 0,
			"no_background": 0
		}
	}, {
		"aid": "370159204",
		"bvid": "BV1PZ4y1x7K3",
		"typename": "综合",
		"title": "史上最强浩克，「绿殇大帝」王者归来！浩克将自己撕成碎片",
		"subtitle": "",
		"play": 589145,
		"review": 1937,
		"video_review": 4392,
		"favorites": 5237,
		"mid": 7487399,
		"author": "努力的Lorre",
		"description": "史上最强浩克，「绿殇大帝」王者归来！浩克将自己撕成碎片",
		"create": "2020-04-05 17:07",
		"pic": "http://i0.hdslb.com/bfs/archive/513c6eb8bfafd976fd69963ae943a186c9df1321.jpg",
		"coins": 9233,
		"duration": "12:12",
		"badgepay": false,
		"pts": 582708,
		"rights": {
			"bp": 0,
			"elec": 0,
			"download": 0,
			"movie": 0,
			"pay": 0,
			"hd5": 0,
			"no_reprint": 1,
			"autoplay": 1,
			"ugc_pay": 0,
			"is_cooperation": 0,
			"ugc_pay_preview": 0,
			"no_background": 0
		}
	}, {
		"aid": "370032119",
		"bvid": "BV1nZ4y1j76z",
		"typename": "综合",
		"title": "史上最恶心国产动画！！！",
		"subtitle": "",
		"play": 579883,
		"review": 1701,
		"video_review": 7107,
		"favorites": 3727,
		"mid": 31261235,
		"author": "L另唐",
		"description": "文案参考：百度百科\nbgm：石田勝範 - おさんぽ、ビーロボ三悪\nToby Fox - sans\nL-Train - Alphys\nVarious Artists - Feast of Spring",
		"create": "2020-04-03 22:45",
		"pic": "http://i1.hdslb.com/bfs/archive/c78e7e1df34f64a19dbcd63021806e6387c100f6.jpg",
		"coins": 2692,
		"duration": "10:42",
		"badgepay": false,
		"pts": 580753,
		"rights": {
			"bp": 0,
			"elec": 0,
			"download": 0,
			"movie": 0,
			"pay": 0,
			"hd5": 1,
			"no_reprint": 1,
			"autoplay": 1,
			"ugc_pay": 0,
			"is_cooperation": 0,
			"ugc_pay_preview": 0,
			"no_background": 0
		}
	}, {
		"aid": "582575540",
		"bvid": "BV1w64y1u7Go",
		"typename": "短片·手书·配音",
		"title": "这TM才叫素质教育！！",
		"subtitle": "",
		"play": 482363,
		"review": 671,
		"video_review": 1760,
		"favorites": 10616,
		"mid": 9354231,
		"author": "快乐的台长",
		"description": "素质系列第四集\n第一集BV1LE411j7QS\n第二集BV17E411A7ZL\n第三集BV1vK4y1C7GA\n动画名称：小浣熊\n剧本\u0026配音：台长\n收藏过5000继续制作该系列",
		"create": "2020-04-05 12:05",
		"pic": "http://i0.hdslb.com/bfs/archive/0ebc7cd732ccbb55d5413275acd75b8d0153b32d.jpg",
		"coins": 7356,
		"duration": "1:51",
		"badgepay": false,
		"pts": 544518,
		"rights": {
			"bp": 0,
			"elec": 0,
			"download": 0,
			"movie": 0,
			"pay": 0,
			"hd5": 0,
			"no_reprint": 1,
			"autoplay": 1,
			"ugc_pay": 0,
			"is_cooperation": 0,
			"ugc_pay_preview": 0,
			"no_background": 0
		}
	}, {
		"aid": "882646972",
		"bvid": "BV1xK4y1r7Gy",
		"typename": "综合",
		"title": "【火影人物志58】从樱酱到樱哥，小樱到底经历了些什么？",
		"subtitle": "",
		"play": 378643,
		"review": 4087,
		"video_review": 7923,
		"favorites": 8362,
		"mid": 10040906,
		"author": "四季萌芽",
		"description": "小樱的故事不只有恋爱...\n如果您喜欢这个视频，记得关注我，还有三连支持一下╮(￣▽￣)╭\n相关人物志：赤砂之蝎-BV1xt411L7Fu 纲手-BV1Tb411L7n8 雏田-BV1h4411f7vq",
		"create": "2020-04-05 17:17",
		"pic": "http://i0.hdslb.com/bfs/archive/8f827200ddad2c3f504c2545edfa6274125ddcd8.jpg",
		"coins": 25143,
		"duration": "18:02",
		"badgepay": false,
		"pts": 536641,
		"rights": {
			"bp": 0,
			"elec": 0,
			"download": 0,
			"movie": 0,
			"pay": 0,
			"hd5": 0,
			"no_reprint": 1,
			"autoplay": 1,
			"ugc_pay": 0,
			"is_cooperation": 0,
			"ugc_pay_preview": 0,
			"no_background": 0
		}
	}, {
		"aid": "925191174",
		"bvid": "BV1GT4y1G7m7",
		"typename": "综合",
		"title": "一个视频告诉你，初中男生的欲望有多恐怖",
		"subtitle": "",
		"play": 358611,
		"review": 1241,
		"video_review": 2513,
		"favorites": 8640,
		"mid": 420182,
		"author": "郁郁_Yu",
		"description": "漫画名：《故作清纯的她》\n             《清楚なフリをしてますが》",
		"create": "2020-04-05 19:18",
		"pic": "http://i2.hdslb.com/bfs/archive/e32c2ec404a703d5907f89895d195be160d5c3b0.jpg",
		"coins": 8106,
		"duration": "5:03",
		"badgepay": false,
		"pts": 441684,
		"rights": {
			"bp": 0,
			"elec": 0,
			"download": 0,
			"movie": 0,
			"pay": 0,
			"hd5": 1,
			"no_reprint": 1,
			"autoplay": 1,
			"ugc_pay": 0,
			"is_cooperation": 0,
			"ugc_pay_preview": 0,
			"no_background": 0
		}
	}, {
		"aid": "455018358",
		"bvid": "BV1X541167K2",
		"typename": "短片·手书·配音",
		"title": "一拳超人第三季 第一集",
		"subtitle": "",
		"play": 374134,
		"review": 608,
		"video_review": 839,
		"favorites": 1392,
		"mid": 391922072,
		"author": "庄尼兔拟音实验室",
		"description": "我特么。。。。我特么太累了。。。再不给茶兔三连奶一口的话真的要和你们阴阳相隔了。。\n本期视频得到了小伙伴——一只萌萌哒的喵砸 给我们上色 大家有兴趣也可以关注这个萌妹\n还有电影《那年我的初恋》的女主角——张咏娴的配音。 我是这部电影的配乐师！！！！！\n      另外就是想招募喜欢玩配音的小伙伴！~如果你对配音感兴趣的话。请私信我。。。。因为我真的配音太业余了。。我尽力了\n 我累！~！~！~！~！~！~！~！~！~！~三连鸭三连鸭三连鸭三连鸭三连鸭三连鸭三连鸭三连鸭三连鸭三连鸭三连鸭三连鸭三连鸭三连鸭三连",
		"create": "2020-04-04 09:18",
		"pic": "http://i2.hdslb.com/bfs/archive/2cd9f93f0ffcd98cd6e20ff45522339da1b67739.jpg",
		"coins": 3749,
		"duration": "21:22",
		"badgepay": false,
		"pts": 372642,
		"rights": {
			"bp": 0,
			"elec": 0,
			"download": 0,
			"movie": 0,
			"pay": 0,
			"hd5": 0,
			"no_reprint": 1,
			"autoplay": 1,
			"ugc_pay": 0,
			"is_cooperation": 0,
			"ugc_pay_preview": 0,
			"no_background": 0
		}
	}, {
		"aid": "455013248",
		"bvid": "BV1r541167xx",
		"typename": "短片·手书·配音",
		"title": "1996年发行的SFC游戏《在杰难逃》（迫真）",
		"subtitle": "",
		"play": 207381,
		"review": 792,
		"video_review": 4694,
		"favorites": 12307,
		"mid": 16604395,
		"author": "基洛夫战机V",
		"description": "时隔十年，某公司在SFC平台上重制了他们在FC上失败的《在杰难逃》，但是由于原作销量惨淡，重制版靠捆绑《楼下的妹妹 高清版》卖出了114份。\n\n感谢@三氧化二钢 兄贵在创意过程中提供的帮助\n\n音乐：使用了MD平台的《洛克人世界》音乐（用MD平台的音乐冒充SFC的音乐，好大的胆子）\nRockman 2： Game Start\nRockman 2： Air Man Stage\nRockman 2： Bubble Man Stage\nRockman 2： Clash Man Stage\nRockman 2： F",
		"create": "2020-04-05 04:29",
		"pic": "http://i1.hdslb.com/bfs/archive/e5ecfa9ac956933627b15eb2bb4b7a57df3f5fe5.jpg",
		"coins": 13625,
		"duration": "36:26",
		"badgepay": false,
		"pts": 355418,
		"rights": {
			"bp": 0,
			"elec": 0,
			"download": 0,
			"movie": 0,
			"pay": 0,
			"hd5": 0,
			"no_reprint": 1,
			"autoplay": 0,
			"ugc_pay": 0,
			"is_cooperation": 0,
			"ugc_pay_preview": 0,
			"no_background": 0
		}
	}, {
		"aid": "625155108",
		"bvid": "BV1st4y1U7Ei",
		"typename": "短片·手书·配音",
		"title": "司令不在家，一赞10巴掌！【定格动画】",
		"subtitle": "",
		"play": 200943,
		"review": 983,
		"video_review": 1114,
		"favorites": 12700,
		"mid": 2017611,
		"author": "利利那TD25",
		"description": "本视频其实可以拆成很多单独的，又何必呢，一次管够！\n初号机真的挺难拍的，固定不易腿还特别软，figma绫波丽是也让人头疼\n\n角色表：\n海洋堂、figma绫波丽、明日香\nfigma眼镜娘\nRG、寿屋初号机\n\n素材均来自站内：\n新宝岛、jojo、今天妈妈不在家、苏卡不列、病名为爱、抖肩舞、搓腚、安塞腰鼓、塞班\n火红的萨日朗：BV1r7411W7uR\n米津玄师lemon：BV1ut411s7ZV",
		"create": "2020-04-06 11:46",
		"pic": "http://i1.hdslb.com/bfs/archive/22a78c9a8ccba9b267b2b230b69bc243e2039667.jpg",
		"coins": 28478,
		"duration": "2:58",
		"badgepay": false,
		"pts": 322009,
		"rights": {
			"bp": 0,
			"elec": 0,
			"download": 0,
			"movie": 0,
			"pay": 0,
			"hd5": 1,
			"no_reprint": 1,
			"autoplay": 1,
			"ugc_pay": 0,
			"is_cooperation": 0,
			"ugc_pay_preview": 0,
			"no_background": 0
		}
	}, {
		"aid": "540066906",
		"bvid": "BV1ai4y1b7qV",
		"typename": "综合",
		"title": "全球45亿点击，被翻译成28种语言！！B站新番【神之塔】",
		"subtitle": "",
		"play": 349274,
		"review": 969,
		"video_review": 752,
		"favorites": 2530,
		"mid": 392518574,
		"author": "py86-",
		"description": "昨天默哀，延迟投稿，大家见谅！这次是B站新番的神之塔！！大家喜欢的话可以三连支持一下",
		"create": "2020-04-05 07:58",
		"pic": "http://i2.hdslb.com/bfs/archive/326f340b52bac51ebbc399d27a63ef2e2279738e.jpg",
		"coins": 1786,
		"duration": "4:10",
		"badgepay": false,
		"pts": 317935,
		"rights": {
			"bp": 0,
			"elec": 0,
			"download": 0,
			"movie": 0,
			"pay": 0,
			"hd5": 1,
			"no_reprint": 1,
			"autoplay": 1,
			"ugc_pay": 0,
			"is_cooperation": 0,
			"ugc_pay_preview": 0,
			"no_background": 0
		}
	}]
}
```

