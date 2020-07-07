# 电磁力相关

本页所有操作均需登录（SESSDATA）

电磁力每周日下午刷新

## 获取电磁力数据

> <http://api.bilibili.com/studio/up-rating/rating/summary>

*方式：GET*

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | ------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                       |
| ttl     | num  | 1       | 作用尚不明确                  |
| data    | obj  | 信息本体 |                               |

`data`对象：

| 字段              | 类型  | 内容           | 备注 |
| ----------------- | ---- | -------------- | ---- |
| date              | str  | 刷新时间        |      |
| level             | obj  | 电磁力等级      |      |
| creative          | obj  | 创作力         |      |
| influence         | obj  | 影响力         |      |
| credit            | obj  | 信用分         |      |

`data`中的`level` `creative` `influence` `credit`对象：

| 字段     | 类型 | 内容      | 备注 |
| -------- | ---- | -------- | ---- |
| data     | num  | 数值     |      |
| prev     | num  | 尚不明确 |      |
| desc     | num  | 描述     |      |
| date     | num  | 刷新时间 |      |

**示例：**

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "date": "2020-07-05",
        "level": {
            "data": 1,
            "prev": 0,
            "desc": "正式开启创作之路，希望未来的路上我们携手相伴，创作更多优质内容~",
            "date": 1593878400
        },
        "creative": {
            "data": 39,
            "prev": 39,
            "desc": "考察近一年来的创作行为，良好的原创投稿行为和互动数据有助于提升创作力。",
            "date": 1593878400
        },
        "influence": {
            "data": 54,
            "prev": 54,
            "desc": "根据近一年活跃粉丝数据进行评估，良好的粉丝活跃度是影响力的基础。",
            "date": 1593878400
        },
        "credit": {
            "data": 100,
            "prev": 100,
            "desc": "良好的投稿记录将维持较高的信用分，违反投稿公约的行为将扣除信用分。",
            "date": 1594106147
        }
    }
}
```
