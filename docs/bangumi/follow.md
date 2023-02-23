# 追番相关

## 追番
> https://api.bilibili.com/pgc/web/follow/add

*请求方式：POST*

鉴权方式：Cookie（SESSDATA）

**url参数：**

| 参数名      | 类型  | 内容     | 必要性 | 备注  |
|----------|-----|--------|-----|-----|
| season_id | str | 剧集ssid | 必要  |     |
| csrf | str | csrf token(位于cookies中的bili_jct) | 必要  |     |

**json回复：**

根对象：

| 字段    | 类型 | 内容   | 备注                            |
| ------- | ---- | ------ | ------------------------------- |
| code    | num  | 返回值 | 0：成功<br />-111：csrf校验失败 |
| message | str  | 信息   |            成功时：success                    |
| result | obj  |见下表|                                 |

根对象中的`result`对象：

| 字段     | 类型 | 内容       | 备注 |
| -------- | ---- | ---------- | ---- |
| fmid     | num  |      0      |      |
| relation | bool |        false    |      |
| status   | num  |        2    |      |
| toast    | str  | 自己追的番就要好好看完哟^o^ |      |

**示例：**

追番`ssid=41410`的番剧

```shell
curl -G 'https://api.bilibili.com/pgc/web/follow/add' \
--data-urlencode 'season_id=41410' \
--data-urlencode 'csrf=xxx' \
```

<details>

<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "success",
  "result": {
    "fmid": 0,
    "relation": false,
    "status": 2,
    "toast": "自己追的番就要好好看完哟^o^"
  }
}
```
</details>

## 取消追番

> https://api.bilibili.com/pgc/web/follow/del

*请求方式：POST*

鉴权方式：Cookie（SESSDATA）

**url参数：**

| 参数名    | 类型 | 内容                                | 必要性 | 备注 |
| --------- | ---- | ----------------------------------- | ------ | ---- |
| season_id | str  | 剧集ssid                            | 必要   |      |
| csrf      | str  | csrf token(位于cookies中的bili_jct) | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容   | 备注                            |
| ------- | ---- | ------ | ------------------------------- |
| code    | num  | 返回值 | 0：成功<br />-111：csrf校验失败 |
| message | str  | 信息   |              成功时：success                  |
| result  | obj  | 见下表 |                                 |

根对象中的`result`对象：

| 字段     | 类型 | 内容       | 备注 |
| -------- | ---- | ---------- | ---- |
| fmid     | num  |       0     |      |
| relation | bool |     true       |      |
| status   | num  |     0       |      |
| toast    | str  | 已取消追番 |      |

**示例：**

取消`ssid=41410`的追番

```shell
curl -G 'https://api.bilibili.com/pgc/web/follow/del' \
--data-urlencode 'season_id=41410' \
--data-urlencode 'csrf=xxx' \
```

<details>

<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "success",
  "result": {
    "fmid": 0,
    "relation": false,
    "status": 0,
    "toast": "已取消追番"
  }
}
```
</details>
