# 音频投币&收藏

- [查询音频收藏状态](#查询音频收藏状态)
- [查询音频投币数](#查询音频投币数)

---

## 查询音频收藏状态

> http://www.bilibili.com/audio/music-service-c/web/collections/songs-coll

*请求方式：GET*

认证方式：Cookie（SESSDATA）

鉴权方式：Cookie中`DedeUserID`存在且不为0

**url参数：**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| sid    | num  | 音频auID | 必要   |      |

**json回复：**

根对象：

| 字段 | 类型 | 内容     | 备注                                                         |
| ---- | ---- | -------- | ------------------------------------------------------------ |
| code | num  | 返回值   | 0：成功<br />72000000：参数错误<br />72010002：账号未登陆<br />7201006：该音频不存在或已被下架 |
| msg  | str  | 错误信息 | 默认为success                                                |
| data | bool | 是否收藏 | false：未收藏<br />true：已收藏                              |

**示例：**

查询音频`au13598`的收藏状态

```shell
curl -G 'http://www.bilibili.com/audio/music-service-c/web/collections/songs-coll' \
--data-urlencode 'sid=13598' \
-b 'SESSDATA=xxx;DedeUserID=1;'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "msg": "success",
    "data": true
}
```

</details>

## 查询音频投币数

> http://www.bilibili.com/audio/music-service-c/web/coin/audio

*请求方式：GET*

认证方式：Cookie（SESSDATA）

鉴权方式：Cookie中`DedeUserID`存在且不为0

**url参数：**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| sid    | num  | 音频auID | 必要   |      |

**json回复：**

根对象：

| 字段 | 类型 | 内容     | 备注                                                         |
| ---- | ---- | -------- | ------------------------------------------------------------ |
| code | num  | 返回值   | 0：成功<br />72000000：参数错误<br />72010002：账号未登陆<br />7201006：该音频不存在或已被下架 |
| msg  | str  | 错误信息 | 默认为success                                                |
| data | num  | 投币数量 | 0为未投币，上限为2                                           |

**示例：**

查询音频`au13598`的投币数

```shell
curl -G 'http://www.bilibili.com/audio/music-service-c/web/coin/audio' \
--data-urlencode 'sid=15664' \
-b 'SESSDATA=xxx;DedeUserID=1;'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "msg": "success",
    "data": 1
}
```

</details>
