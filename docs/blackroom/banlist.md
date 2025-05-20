# 封禁公示

## Enum类型代码

### 表1：已知的封禁原因类型代码总览

| 代码 | 含义                 |
| ---- | -------------------- |
| 1    | 刷屏                 |
| 2    | 抢楼                 |
| 3    | 发布色情低俗信息     |
| 4    | 发布赌博诈骗信息     |
| 5    | 发布违禁相关信息     |
| 6    | 发布垃圾广告信息     |
| 7    | 发布人身攻击言论     |
| 8    | 发布侵犯他人隐私信息 |
| 9    | 发布引战言论         |
| 10   | 发布剧透信息         |
| 11   | 恶意添加无关标签     |
| 12   | 恶意删除他人标签     |
| 13   | 发布色情信息         |
| 14   | 发布低俗信息         |
| 15   | 发布暴力血腥信息     |
| 16   | 涉及恶意投稿行为     |
| 17   | 发布非法网站信息     |
| 18   | 发布传播不实信息     |
| 19   | 发布怂恿教唆信息     |
| 20   | 恶意刷屏             |
| 21   | 账号违规             |
| 22   | 恶意抄袭             |
| 23   | 冒充自制原创         |
| 24   | 发布青少年不良内容   |
| 25   | 破坏网络安全         |
| 26   | 发布虚假误导信息     |
| 27   | 仿冒官方认证账号     |
| 28   | 发布不适宜内容       |
| 29   | 违反运营规则         |
| 30   | 恶意创建话题         |
| 31   | 发布违规抽奖         |
| 32   | 恶意冒充他人         |

### 表2：已知的违规类型代码

| 代码 | 含义     |
| ---- | -------- |
| 0    | 全部类型 |
| 1    | 评论     |
| 2    | 弹幕     |
| 3    | 私信     |
| 4    | 标签     |
| 5    | 个人资料 |
| 6    | 投稿     |
| 8    | 专栏     |
| 10   | 动态     |
| 11   | 相簿     |

## 获取封禁用户公示列表

> https://api.bilibili.com/x/credit/blocked/list

*请求方式：GET*

每页最多10项

**url参数：**

| 参数名 | 类型 | 内容     | 必要性 | 备注                                                         |
| ------ | ---- | -------- | ------ | ------------------------------------------------------------ |
| btype  | num  | 来源筛选 | 非必要 | 空：全部类型<br />`0`：系统封禁<br />`1`：风纪仲裁（仲裁系统升级后此类型已不再更新） |
| otype  | num  | 类型筛选 | 非必要 | **见[表2](#表2已知的违规类型代码)**<br />默认为`0`：全部类型 |
| pn     | num  | 页码     | 非必要 | 默认为`1`                                                    |

**json回复：**

根对象：

| 字段    | 类型   | 内容     | 备注         |
| ------- | ------ | -------- | ------------ |
| code    | num    | 返回值   | `0`：成功    |
| message | str    | 错误信息 | 默认为`0`    |
| ttl     | num    | `1`      |  |
| data    | array | 公示列表 |              |

`data`数组：

| 项   | 类型   | 内容            | 备注 |
| ---- | ------ | --------------- | ---- |
| 0    | object | 封禁公示1       |      |
| n    | object | 封禁公示（n+1） |      |
| ……   | object | ……              | ……   |

`data`数组中的对象：

| 字段                | 类型 | 内容             | 备注                                        |
| ------------------- | ---- | ---------------- | ------------------------------------------- |
| id                  | num  | 封禁公示id       |                                             |
| uname               | str  | 对象用户名       |                                             |
| face                | str  | 对象用户头像url  |                                             |
| uid                 | num  | 对象用户mid      |                                             |
| originTitle         | str  | 来源标题         |                                             |
| blockedRemark       | str  |                  |                                             |
| originUrl           | str  | 来源url          |                                             |
| originContentModify | str  | 裁决正文         |                                             |
| originType          | num  | 来源类型         | **见[表2](#表2已知的违规类型代码)**         |
| originTypeName      | str  | 来源名           |                                             |
| punishTitle         | str  | 公示标题         |                                             |
| punishTime          | num  | 处罚时间         | 时间戳                                      |
| punishType          | num  | 处理手段类型     | `2`：封禁<br />`3`：永久封禁                |
| punishTypeName      | str  | 处理手段名       |                                             |
| moralNum            | num  | `0`节操值        | 被封禁用户节操值均为`0`                     |
| blockedDays         | num  | 封禁天数         | 永封为`0`                                   |
| publishStatus       | num  | `1`              | 作用尚不明确                                |
| blockedType         | num  | 处理来源         | `0`：系统封禁<br />1：风纪仲裁              |
| blockedForever      | num  | 是否永封         | `0`：非永封<br />`1`：永封                  |
| reasonType          | num  | 封禁原因类型     | **见[表1](#表1已知的封禁原因类型代码总览)** |
| reasonTypeName      | str  | 封禁原因类型名称 |                                             |
| operatorName        | str  | 空               | 作用尚不明确                                |
| caseId              | num  | 仲裁信息id       | 系统封禁时固定为0                           |
| ctime               | num  | 创建时间         | 时间戳                                      |
| commentSum          | num  | 该条目评论数     |                                             |

**示例：**

查询所有类型，所有来源的第1页的封禁公示列表

```shell
curl -G 'https://api.bilibili.com/x/credit/blocked/list' \
--data-urlencode 'btype=' \
--data-urlencode 'otype=0' \
--data-urlencode 'pn=1'
```

<details>
<summary>查看响应示例：</summary>

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
		"originContentModify": "<p>案情：</p><p>1、大量刷屏/引战</p><p>我看新闻了，竹鼠全部被ZF无害化处理了，看的爽死我了，亏死你们，啊哈哈哈（x10）</p><p>【BV16g4y187he，2020-4-21 10：46：23～10：46：47】</p><p>2、大量人身攻击</p><p>N * * L</p><p>Deine Mu**er ist tot. （x10）</p><p>【BV1rk4y1R7id，2020-4-21 20：31：08～20：32：23】</p><p>3、引战</p><p>每次看他厨房乱七八糟的，可能有数不清的小强，你们还看美食看的有味也是奇PA</p><p>【BV1Kg4y1z7mA，2020-4-22&nbsp; 00：52：37】<br/></p><p>批注：</p><p>满地狼藉招摇过，人皆愤懑怒拳握。</p><p>余恶不堪漏夜扫，正气于心涤龌龊。</p><p><br/></p><p>（发现违规引战、人身攻击、刷屏评论，请按照相应分类进行举报。若发现反复进行上述行为，可联系工作人员反馈相关违规账号信息，我们会予以排查。）</p><p>（案例感想请发布在小黑屋评论区讨论，请勿骚扰被封禁的用户）</p><p>【本次判罚为管理员判定，请注意案件右上无蓝色标记（风纪委员众裁）】</p><p><br/></p>",
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
		"originContentModify": "<p>具体违规情况说明：</p><ol class=\" list-paddingleft-2\" style=\"list-style-type: decimal;\"><li><p>经查实确认，该账号<span style=\"text-decoration: underline;\">从未申请</span>亦<span style=\"text-decoration: underline;\">从未担任</span>过风纪委员职务。</p></li><li><p>发布多条 “您的稿件/评论涉及违规，即将下架/删除”的恐吓性言论。</p></li><li><p>谎称曾经封禁了某个up主，事实上风纪委员<span style=\"text-decoration: underline;\">无法封禁up主投稿</span>，且该up也从未被封禁。</p></li><li><p>威胁他人“要不要到小黑屋坐坐”，事实上风纪委员无法直接封禁用户。通过管理员封禁或风纪委员投票封禁的账号亦有据实申诉的机会。</p></li><li><p>故意挑衅他人“那你可以试着骂我，我们试试（举报）有没有用”。</p></li><li><p>误导他人“此评论区和弹幕无需保持礼仪”。</p></li></ol><p>批注：</p><p>如您发现：假冒风纪委员身份招摇撞骗、炫耀风纪委员身份、借风纪委员职务之便威胁恐吓他人、在风纪观点中发布违规内容等违规行为，请及时联系我们进行举报。您可直接将举报材料发送至judgement@bilibili.com。</p><p>（案例感想请发布在小黑屋评论区讨论，请勿骚扰被封禁的用户）</p><p>【本次判罚为管理员判定，请注意案件右上无蓝色标记（风纪委员众裁）】</p>",
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

</details>

## 封禁处理公示详情

> https://api.bilibili.com/x/credit/blocked/info

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容       | 必要性 | 备注 |
| ------ | ---- | ---------- | ------ | ---- |
| id     | num  | 封禁公示id | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                            |
| ------- | ---- | -------- | ----------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-404：无此信息 |
| message | str  | 错误信息 | 默认为`0`                                       |
| ttl     | num  | 1        |                                                 |
| data    | obj  | 信息本体 |                                                 |

`data`对象：

| 字段                | 类型 | 内容             | 备注                                        |
| ------------------- | ---- | ---------------- | ------------------------------------------- |
| id                  | num  | 封禁公示id       |                                             |
| uname               | str  | 对象用户名       |                                             |
| face                | str  | 对象用户头像url  |                                             |
| uid                 | num  | 对象用户mid      |                                             |
| originTitle         | str  | 来源标题         |                                             |
| blockedRemark       | str  |                  |                                             |
| originUrl           | str  | 来源url          |                                             |
| originContentModify | str  | 裁决正文         |                                             |
| originType          | num  | 来源类型         | **见[表2](#表2已知的违规类型代码)**         |
| originTypeName      | str  | 来源名           |                                             |
| punishTitle         | str  | 公示标题         |                                             |
| punishTime          | num  | 处罚时间         | 时间戳                                      |
| punishType          | num  | 处理手段类型     | `2`：封禁<br />`3`：永久封禁                |
| punishTypeName      | str  | 处理手段名       |                                             |
| moralNum            | num  | `0`节操值        | 被封禁用户节操值均为`0`                     |
| blockedDays         | num  | 封禁天数         | 永封为`0`                                   |
| publishStatus       | num  | `1`              | 作用尚不明确                                |
| blockedType         | num  | 处理来源         | `0`：系统封禁<br />`1`：风纪仲裁            |
| blockedForever      | num  | 是否永封         | `0`：非永封<br />`1`：永封                  |
| reasonType          | num  | 封禁原因类型     | **见[表1](#表1已知的封禁原因类型代码总览)** |
| reasonTypeName      | str  | 封禁原因类型名称 |                                             |
| operatorName        | str  | 空               | 作用尚不明确                                |
| caseId              | num  | 仲裁信息id       | 系统封禁时固定为0                           |
| ctime               | num  | 创建时间         | 时间戳                                      |
| commentSum          | num  | 该条目评论数     |                                             |

**示例：**

查询公示id为`1091621`的公示详情

```shell
curl -G 'https://api.bilibili.com/x/credit/blocked/info' \
--data-urlencode 'id=1091621'
```

<details>
<summary>查看响应示例：</summary>

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
		"originContentModify": "<p>具体违规情况说明：</p><ol class=\" list-paddingleft-2\" style=\"list-style-type: decimal;\"><li><p>经查实确认，该账号<span style=\"text-decoration: underline;\">从未申请</span>亦<span style=\"text-decoration: underline;\">从未担任</span>过风纪委员职务。</p></li><li><p>发布多条 “您的稿件/评论涉及违规，即将下架/删除”的恐吓性言论。</p></li><li><p>谎称曾经封禁了某个up主，事实上风纪委员<span style=\"text-decoration: underline;\">无法封禁up主投稿</span>，且该up也从未被封禁。</p></li><li><p>威胁他人“要不要到小黑屋坐坐”，事实上风纪委员无法直接封禁用户。通过管理员封禁或风纪委员投票封禁的账号亦有据实申诉的机会。</p></li><li><p>故意挑衅他人“那你可以试着骂我，我们试试（举报）有没有用”。</p></li><li><p>误导他人“此评论区和弹幕无需保持礼仪”。</p></li></ol><p>批注：</p><p>如您发现：假冒风纪委员身份招摇撞骗、炫耀风纪委员身份、借风纪委员职务之便威胁恐吓他人、在风纪观点中发布违规内容等违规行为，请及时联系我们进行举报。您可直接将举报材料发送至judgement@bilibili.com。</p><p>（案例感想请发布在小黑屋评论区讨论，请勿骚扰被封禁的用户）</p><p>【本次判罚为管理员判定，请注意案件右上无蓝色标记（风纪委员众裁）】</p>",
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

</details>
