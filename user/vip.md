# 大会员兑换福利

- [兑换状态查询](#兑换状态查询)
- [兑换](#兑换)

---

## 兑换状态查询

> https://api.bilibili.com/x/vip/privilege/my

*请求方式:GET*

认证方式：Cookie（SESSDATA）或APP

**json回复：**

根对象：

| 字段    | 类型 | 内容       | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 状态码    | -400：请求错误<br />0：成功 |
| message | str  | 错误详情   |                             |
| data    | obj  | 信息本体  |                              |

`data`对象：

| 字段           | 类型 | 内容             | 备注                     |
| ----- | -------|----------------|------ |
| list  | 数组   | 信息本体 |              |

`list`数组：

| 字段    | 类型 | 内容             | 备注 |
| ----- | -------|-----------------|------ |
| 0    | obj   | B币兑换状态 |              |
| 1    | obj   | 会员购优惠券兑换状态 |      |

`list内`对象：

|        字段    | 类型  | 内容             | 备注 |
| -------------- | -----|------------------|------ |
| type           | num  | 1 或 2 | 1：B币</br>2：会员购优惠券 |
| status         | num  | 兑换状态 | 0：当月未兑换</br>1：已兑换     |
| expire_time    | num  | 当月过期时间 | 当月月底 |


**示例：**

```shell
curl -G 'https://api.bilibili.com/x/vip/privilege/my' \
```

<details>
<summary>查看响应示例：</summary>

```json
{
	"code":0,
	"message":"0",
	"ttl":1,
	"data":{
		"list":[
			{"type":1,"state":1,"expire_time":1638287999},
			{"type":2,"state":1,"expire_time":1638287999}
		]
	}
}
```

</details>


## 兑换
> https://api.bilibili.com/x/vip/privilege/my

*请求方式:POST*

认证方式：Cookie（SESSDATA）
注意：请求头中的Origin字段必须为"https://www.bilibili.com/"


**正文参数：**

| 参数名     | 类型 | 内容        | 必要性         | 备注                      |
| ---------- | ---- | ---------- | -------- | ---------------------- |
| type       | num  | 1 或 2  | 必要          | 1：B币</br>2：会员购优惠券   |
| csrf       | num  | CSRF token  | 必要          | Cookie bili_jct字段 |

**示例：**

```shell
curl -G 'https://api.bilibili.com/x/vip/privilege/my' \
-H "Origin: https://www.bilibili.com/" \
-d "{\"type\": 1, \"csrf\": csrf_token}" 
```

**响应：**
无响应