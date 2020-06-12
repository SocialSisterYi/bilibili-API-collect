# 封禁用户公示

**已知的违规类型代码总览：**

| 代码 | 含义                 |
| ---- | -------------------- |
| 4    | 发布赌博诈骗信息     |
| 5    | 发布违禁相关信息     |
| 6    | 发布垃圾广告信息     |
| 7    | 发布人身攻击言论     |
| 8    | 发布侵犯他人隐私信息 |
| 9    | 发布引战言论         |
| 11   | 恶意添加无关标签     |
| 12   | 恶意删除他人标签     |
| 13   | 发布色情信息         |
| 14   | 发布低俗信息         |
| 15   | 发布暴力血腥信息     |
| 16   | 涉及恶意投稿行为     |
| 18   | 发布传播不实信息     |
| 19   | 发布怂恿教唆信息     |
| 21   | 账号违规             |
| 23   | 冒充自制原创         |
| 24   | 发布青少年不良内容   |
| 26   | 发布虚假误导信息     |
| 27   | 仿冒官方认证账号     |
| 31   | 发布违规抽奖         |
| 32   | 恶意冒充他人         |



## 获取封禁用户公示列表

> http://api.bilibili.com/x/credit/blocked/list

*方式：GET*

每页最多10项

**url参数：**

| 参数名 | 类型 | 内容     | 必要性 | 备注                                                         |
| ------ | ---- | -------- | ------ | ------------------------------------------------------------ |
| btype  | num  | 来源筛选 | 非必要 | 空：全部类型<br />0：系统封禁<br />1：风纪仲裁               |
| otype  | num  | 类型筛选 | 非必要 | 0：全部类型<br />1：评论<br />2：弹幕<br />3：私信<br />4：标签<br />5：个人资料<br />6：投稿<br />8：专栏<br />10：动态<br />11：相簿 |
| pn     | num  | 页码     | 非必要 | 默认为1                                                      |

**json回复：**

根对象：

| 字段    | 类型   | 内容     | 备注         |
| ------- | ------ | -------- | ------------ |
| code    | num    | 返回值   | 0：成功      |
| message | str    | 错误信息 | 默认为0      |
| ttl     | num    | 1        | 作用尚不明确 |
| data    | array | 公示列表 |              |

`data`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | obj  | 封禁公示1       |      |
| n    | obj  | 封禁公示（n+1） |      |
| ……   | obj  | ……              | ……   |

`data`数组中的对象：

| 字段                | 类型 | 内容            | 备注                                                         |
| ------------------- | ---- | --------------- | ------------------------------------------------------------ |
| id                  | num  | 封禁公示ID      |                                                              |
| uname               | str  | 对象用户名      |                                                              |
| face                | str  | 对象用户头像url |                                                              |
| uid                 | num  | 对象用户UID     |                                                              |
| originTitle         | str  | 来源标题        |                                                              |
| blockedRemark       | str  |                 |                                                              |
| originUrl           | str  | 来源url         |                                                              |
| originContentModify | str  | 裁决正文        |                                                              |
| originType          | num  | 来源类型        | 0：全部类型<br />1：评论<br />2：弹幕<br />3：私信<br />4：标签<br />5：个人资料<br />6：投稿<br />8：专栏<br />10：动态<br />11：相簿 |
| originTypeName      | str  | 来源名          |                                                              |
| punishTitle         | str  | 公示标题        |                                                              |
| punishTime          | num  | 处罚时间        | 时间戳                                                       |
| punishType          | num  | 处理手段类型    | 2：封禁<br />3：永久封禁                                     |
| punishTypeName      | str  | 处理手段名      |                                                              |
| moralNum            | num  | 0               | 作用尚不明确                                                 |
| blockedDays         | num  | 封禁天数        | 永封为0                                                      |
| publishStatus       | num  | 1               | 作用尚不明确                                                 |
| blockedType         | num  | 处理来源        | 0：系统封禁<br />1：风纪仲裁                                 |
| blockedForever      | num  | 是否永封        | 0：非永封<br />1：永封                                       |
| reasonType          | num  | 违规类型        | **违规类型见表**                                             |
| reasonTypeName      | str  | 违规类型名称    |                                                              |
| operatorName        | str  | 空              | 作用尚不明确                                                 |
| caseId              | num  | 仲裁信息        | 心态封禁时为0                                                |
| ctime               | num  | 创建时间        | 时间戳                                                       |
| commentSum          | num  | 该条目评论数    |                                                              |

**示例：**

查询所有类型，所有来源的第1页的封禁公示列表

http://api.bilibili.com/x/credit/blocked/list?btype=&otype=0&pn=1

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": [{
		"id": 1118220,
		"uname": "漫城林语",
		"face": "http://i2.hdslb.com/bfs/face/970f2da4a58f83879e69e259f4a9d3587cba03f0.jpg",
		"uid": 135913,
		"originTitle": "【罗翔】聊聊网络喷子与键盘侠",
		"blockedRemark": "内容涉及人身攻击",
		"originUrl": "https://www.bilibili.com/video/av752825895",
		"originContentModify": "\u003cp\u003e案情：\u003c/p\u003e\u003cp\u003e1、大量刷屏/引战\u003c/p\u003e\u003cp\u003e我看新闻了，竹鼠全部被ZF无害化处理了，看的爽死我了，亏死你们，啊哈哈哈（x10）\u003c/p\u003e\u003cp\u003e【BV16g4y187he，2020-4-21 10：46：23～10：46：47】\u003c/p\u003e\u003cp\u003e2、大量人身攻击\u003c/p\u003e\u003cp\u003eN * * L\u003c/p\u003e\u003cp\u003eDeine Mu**er ist tot. （x10）\u003c/p\u003e\u003cp\u003e【BV1rk4y1R7id，2020-4-21 20：31：08～20：32：23】\u003c/p\u003e\u003cp\u003e3、引战\u003c/p\u003e\u003cp\u003e每次看他厨房乱七八糟的，可能有数不清的小强，你们还看美食看的有味也是奇PA\u003c/p\u003e\u003cp\u003e【BV1Kg4y1z7mA，2020-4-22\u0026nbsp; 00：52：37】\u003cbr/\u003e\u003c/p\u003e\u003cp\u003e批注：\u003c/p\u003e\u003cp\u003e满地狼藉招摇过，人皆愤懑怒拳握。\u003c/p\u003e\u003cp\u003e余恶不堪漏夜扫，正气于心涤龌龊。\u003c/p\u003e\u003cp\u003e\u003cbr/\u003e\u003c/p\u003e\u003cp\u003e（发现违规引战、人身攻击、刷屏评论，请按照相应分类进行举报。若发现反复进行上述行为，可联系工作人员反馈相关违规账号信息，我们会予以排查。）\u003c/p\u003e\u003cp\u003e（案例感想请发布在小黑屋评论区讨论，请勿骚扰被封禁的用户）\u003c/p\u003e\u003cp\u003e【本次判罚为管理员判定，请注意案件右上无蓝色标记（风纪委员众裁）】\u003c/p\u003e\u003cp\u003e\u003cbr/\u003e\u003c/p\u003e",
		"originType": 1,
		"originTypeName": "评论",
		"punishTitle": "在评论中发布人身攻击言论",
		"punishTime": 1587494264,
		"punishType": 3,
		"punishTypeName": "永久封禁",
		"moralNum": 0,
		"blockedDays": 0,
		"publishStatus": 1,
		"blockedType": 0,
		"blockedForever": 1,
		"reasonType": 7,
		"reasonTypeName": "发布人身攻击言论",
		"operatorName": "",
		"caseId": 0,
		"ctime": 1587494264,
		"commentSum": 606
	}, {
		"id": 1091621,
		"uname": "风纪委员会会长零八",
		"face": "http://i1.hdslb.com/bfs/face/6ea4296f7591b9a724f540a41d48df728a0881b0.jpg",
		"uid": 305542374,
		"originTitle": "巅峰赛大乔游走辅助，队友说自家法师湖南卫视都不敢像法师这么演哈哈！",
		"blockedRemark": "内容涉及传播不实信息",
		"originUrl": "https://www.bilibili.com/video/av882552073",
		"originContentModify": "\u003cp\u003e具体违规情况说明：\u003c/p\u003e\u003col class=\" list-paddingleft-2\" style=\"list-style-type: decimal;\"\u003e\u003cli\u003e\u003cp\u003e经查实确认，该账号\u003cspan style=\"text-decoration: underline;\"\u003e从未申请\u003c/span\u003e亦\u003cspan style=\"text-decoration: underline;\"\u003e从未担任\u003c/span\u003e过风纪委员职务。\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e发布多条 “您的稿件/评论涉及违规，即将下架/删除”的恐吓性言论。\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e谎称曾经封禁了某个up主，事实上风纪委员\u003cspan style=\"text-decoration: underline;\"\u003e无法封禁up主投稿\u003c/span\u003e，且该up也从未被封禁。\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e威胁他人“要不要到小黑屋坐坐”，事实上风纪委员无法直接封禁用户。通过管理员封禁或风纪委员投票封禁的账号亦有据实申诉的机会。\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e故意挑衅他人“那你可以试着骂我，我们试试（举报）有没有用”。\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e误导他人“此评论区和弹幕无需保持礼仪”。\u003c/p\u003e\u003c/li\u003e\u003c/ol\u003e\u003cp\u003e批注：\u003c/p\u003e\u003cp\u003e如您发现：假冒风纪委员身份招摇撞骗、炫耀风纪委员身份、借风纪委员职务之便威胁恐吓他人、在风纪观点中发布违规内容等违规行为，请及时联系我们进行举报。您可直接将举报材料发送至judgement@bilibili.com。\u003c/p\u003e\u003cp\u003e（案例感想请发布在小黑屋评论区讨论，请勿骚扰被封禁的用户）\u003c/p\u003e\u003cp\u003e【本次判罚为管理员判定，请注意案件右上无蓝色标记（风纪委员众裁）】\u003c/p\u003e",
		"originType": 1,
		"originTypeName": "评论",
		"punishTitle": "在评论中发布传播不实信息",
		"punishTime": 1585560309,
		"punishType": 2,
		"punishTypeName": "封禁",
		"moralNum": 0,
		"blockedDays": 15,
		"publishStatus": 1,
		"blockedType": 0,
		"blockedForever": 0,
		"reasonType": 18,
		"reasonTypeName": "发布传播不实信息",
		"operatorName": "",
		"caseId": 0,
		"ctime": 1585560309,
		"commentSum": 2379
	}, 
    …………
    ]
}
```



## 封禁处理公示详情

> http://api.bilibili.com/x/credit/blocked/info

*方式：GET*

**url参数：**

| 参数名 | 类型 | 内容       | 必要性 | 备注 |
| ------ | ---- | ---------- | ------ | ---- |
| id     | num  | 封禁公示ID | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                            |
| ------- | ---- | -------- | ----------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-404：无此信息 |
| message | str  | 错误信息 | 默认为0                                         |
| ttl     | num  | 1        | 作用尚不明确                                    |
| data    | obj  | 信息本体 |                                                 |

`data`对象：

| 字段                | 类型 | 内容            | 备注                                                         |
| ------------------- | ---- | --------------- | ------------------------------------------------------------ |
| id                  | num  | 封禁公示ID      |                                                              |
| uname               | str  | 对象用户名      |                                                              |
| face                | str  | 对象用户头像url |                                                              |
| uid                 | num  | 对象用户UID     |                                                              |
| originTitle         | str  | 来源标题        |                                                              |
| blockedRemark       | str  |                 |                                                              |
| originUrl           | str  | 来源url         |                                                              |
| originContentModify | str  | 裁决正文        |                                                              |
| originType          | num  | 来源类型        | 0：全部类型<br />1：评论<br />2：弹幕<br />3：私信<br />4：标签<br />5：个人资料<br />6：投稿<br />8：专栏<br />10：动态<br />11：相簿 |
| originTypeName      | str  | 来源名          |                                                              |
| punishTitle         | str  | 公示标题        |                                                              |
| punishTime          | num  | 处罚时间        | 时间戳                                                       |
| punishType          | num  | 处理手段类型    | 2：封禁<br />3：永久封禁                                     |
| punishTypeName      | str  | 处理手段名      |                                                              |
| moralNum            | num  | 0               | 作用尚不明确                                                 |
| blockedDays         | num  | 封禁天数        | 永封为0                                                      |
| publishStatus       | num  | 1               | 作用尚不明确                                                 |
| blockedType         | num  | 处理来源        | 0：系统封禁<br />1：风纪仲裁                                 |
| blockedForever      | num  | 是否永封        | 0：非永封<br />1：永封                                       |
| reasonType          | num  | 违规类型        | **违规类型见表**                                             |
| reasonTypeName      | str  | 违规类型名称    |                                                              |
| operatorName        | str  | 空              | 作用尚不明确                                                 |
| caseId              | num  | 仲裁信息        | 心态封禁时为0                                                |
| ctime               | num  | 创建时间        | 时间戳                                                       |
| commentSum          | num  | 该条目评论数    |                                                              |

**示例：**

查询公示ID为`1091621`的公示详情

http://api.bilibili.com/x/credit/blocked/info?id=1091621

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"id": 1091621,
		"uname": "风纪委员会会长零八",
		"face": "http://i1.hdslb.com/bfs/face/6ea4296f7591b9a724f540a41d48df728a0881b0.jpg",
		"uid": 305542374,
		"originTitle": "巅峰赛大乔游走辅助，队友说自家法师湖南卫视都不敢像法师这么演哈哈！",
		"blockedRemark": "内容涉及传播不实信息",
		"originUrl": "https://www.bilibili.com/video/BV1qK4y1C7dd",
		"originContentModify": "\u003cp\u003e具体违规情况说明：\u003c/p\u003e\u003col class=\" list-paddingleft-2\" style=\"list-style-type: decimal;\"\u003e\u003cli\u003e\u003cp\u003e经查实确认，该账号\u003cspan style=\"text-decoration: underline;\"\u003e从未申请\u003c/span\u003e亦\u003cspan style=\"text-decoration: underline;\"\u003e从未担任\u003c/span\u003e过风纪委员职务。\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e发布多条 “您的稿件/评论涉及违规，即将下架/删除”的恐吓性言论。\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e谎称曾经封禁了某个up主，事实上风纪委员\u003cspan style=\"text-decoration: underline;\"\u003e无法封禁up主投稿\u003c/span\u003e，且该up也从未被封禁。\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e威胁他人“要不要到小黑屋坐坐”，事实上风纪委员无法直接封禁用户。通过管理员封禁或风纪委员投票封禁的账号亦有据实申诉的机会。\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e故意挑衅他人“那你可以试着骂我，我们试试（举报）有没有用”。\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e误导他人“此评论区和弹幕无需保持礼仪”。\u003c/p\u003e\u003c/li\u003e\u003c/ol\u003e\u003cp\u003e批注：\u003c/p\u003e\u003cp\u003e如您发现：假冒风纪委员身份招摇撞骗、炫耀风纪委员身份、借风纪委员职务之便威胁恐吓他人、在风纪观点中发布违规内容等违规行为，请及时联系我们进行举报。您可直接将举报材料发送至judgement@bilibili.com。\u003c/p\u003e\u003cp\u003e（案例感想请发布在小黑屋评论区讨论，请勿骚扰被封禁的用户）\u003c/p\u003e\u003cp\u003e【本次判罚为管理员判定，请注意案件右上无蓝色标记（风纪委员众裁）】\u003c/p\u003e",
		"originType": 1,
		"originTypeName": "评论",
		"punishTitle": "在评论中发布传播不实信息",
		"punishTime": 1585560309,
		"punishType": 2,
		"punishTypeName": "封禁",
		"moralNum": 0,
		"blockedDays": 15,
		"publishStatus": 1,
		"blockedType": 0,
		"blockedForever": 0,
		"reasonType": 18,
		"reasonTypeName": "发布传播不实信息",
		"operatorName": "",
		"caseId": 0,
		"ctime": 1585560309,
		"commentSum": 2379
	}
}
```

