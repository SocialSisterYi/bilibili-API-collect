# 音频状态数

## 歌曲状态数

>https://www.bilibili.com/audio/music-service-c/web/stat/song

*请求方式：GET*

唯缺投币数2333333

**url参数：**

| 参数名 | 类型 | 内容     | 必要性 | 备注 |
| ------ | ---- | -------- | ------ | ---- |
| sid    | num  | 音频auid | 必要   |      |

**json回复：**

根对象：

| 字段 | 类型 | 内容     | 备注                            |
| ---- | ---- | -------- | ------------------------------- |
| code | num  | 返回值   | 0：成功<br />72000000：参数错误 |
| msg  | str  | 错误信息 | 默认为success                   |
| data | obj  | 信息本体 |                                 |

`data`对象：

| 字段    | 类型 | 内容     | 备注 |
| ------- | ---- | -------- | ---- |
| sid     | num  | 音频auid |      |
| play    | num  | 播放次数 |      |
| collect | num  | 收藏数   |      |
| comment | num  | 评论数   |      |
| share   | num  | 分享数   |      |

**示例：**

查询歌曲`au15664`的状态数

```shell
curl -G 'https://www.bilibili.com/audio/music-service-c/web/stat/song' \
--data-urlencode 'sid=15664'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "sid": 15664,
        "play": 1377390,
        "collect": 44340,
        "comment": 2756,
        "share": 4114
    }
}
```

</details>
