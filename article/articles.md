# 文集基本信息

## 获取文集基本信息

> https://api.bilibili.com/x/article/list/web/articles

*请求方式：GET*

认证方式：我不确定，dalao你帮我写吧

**url参数：**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| id     | num  | 文集rlID | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                            |
| ------- | ---- | -------- | ----------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-404：无此信息 |
| message | str  | 错误信息 | 默认为0                                         |
| ttl     | num  | 1        |                                                 |
| data    | obj  | 信息本体 |                                                 |

`data`对象：

| 字段      | 类型  | 内容             | 备注                                                                        |
| --------- | ----- | ---------------- | --------------------------------------------------------------------------- |
| list      | obj   | 文集概览         |                                                                             |
| articles  | array | 文集内的文章列表 |                                                                             |
| author    | obj   | 文集作者         |                                                                             |
| last      | obj   |                  | 作用尚不明确<br />结构与data.articles[]中相似                               |
| attention | bool  | 是否关注文集作者 | false：未关注<br />true：已关注<br />需要登录(SESSDATA) <br />未登录为false |

`data`中的`list`对象：

| 字段           | 类型 | 内容         | 备注         |
| -------------- | ---- | ------------ | ------------ |
| id             | num  | 文集ID       |              |
| mid            | num  | 文集作者UID  |              |
| name           | str  | 文集作者昵称 |              |
| image_url      | str  | 文集封面url  |              |
| update_time    | num  | 更新时间     | 秒时间戳     |
| ctime          | num  | 创建时间     | 秒时间戳     |
| publish_time   | num  | 发布时间     | 秒时间戳     |
| summary        | str  | 文集简介     |              |
| words          | num  | 文集字数     |              |
| read           | num  | 文集阅读量   |              |
| articles_count | num  | 文章数量     |              |
| state          | num  | 1或3         | 作用尚不明确 |
| reason         | str  | 空           | 作用尚不明确 |
| apply_time     | str  | 空           | 作用尚不明确 |
| check_time     | str  | 空           | 作用尚不明确 |

`data`中的`articles`数组：

| 项   | 类型 | 内容              | 备注 |
| ---- | ---- | ----------------- | ---- |
| 0    | obj  | 列表第1篇文章     |      |
| n    | obj  | 列表第(n+1)篇文章 |      |

`data`中的`articles`数组中的对象：

| 字段         | 类型 | 内容         | 备注         |
| ------------ | ---- | ------------ | ------------ |
| id           | num  | 专栏cvID     |              |
| title        | str  | 文章标题     |              |
| state        | num  | 0            | 作用尚不明确 |
| publish_time | num  | 发布时间     | 秒时间戳     |