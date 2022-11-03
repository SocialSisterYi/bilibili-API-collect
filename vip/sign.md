# 大积分签到

> https://api.biliapi.com/pgc/activity/score/task/sign

请求方式：`POST`

是否需要登录：`是`

鉴权方式：`SESSDATA`/`access_key`

Content-Type：`application/x-www-form-urlencoded`

## URL参数

| 参数名          | 类型  | 必填  | 内容             | 备注              |
|--------------|-----|-----|----------------|-----------------|
| access_key   | str | √   | 登录`access_key` | 与`SESSDATA`二选其一 |
| appkey       | str |     |                |                 |
| csrf         | str |     |                |                 |
| disable_rcmd | num |     |                |                 |
| statistics   | str |     |                |                 |
| ts           | num |     |                |                 |
| sign         | str |     |                |                 |

## Json回复

### 根对象

| 字段名     | 类型  | 内容  | 备注                                 |
|---------|-----|-----|------------------------------------|
| code    | num | 响应码 | 0：成功<br/>-401：非法访问<br/>-403：访问权限不足 |
| message | str | 0   |                                    |

## 请求示例

### `SESSDATA`方式

**需要添加Referer**

```shell
curl -L -X POST 'https://api.biliapi.com/pgc/activity/score/task/sign' \
-H 'Cookie: SESSDATA=xxx' \
-H 'referer: https://www.bilibili.com'
```

### `access_key`方式

```shell
curl -L -X POST 'https://api.biliapi.com/pgc/activity/score/task/sign?access_key=xxx'
```

## 响应示例

<details>
<summary>点击查看</summary>

```json
{
    "code": 0,
    "message": "success"
}
```

</details>