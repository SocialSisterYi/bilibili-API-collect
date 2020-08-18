# 互动视频信息

## 获取互动视频单P详细信息

> http://api.bilibili.com/x/stein/edgeinfo_v2

*请求方式：GET*

认证方式：SESSDATA

**url参数：**

| 参数名        | 类型 | 内容       | 必要性       | 备注               |
| ------------- | ---- | ---------- | ------------ | ------------------ |
| aid           | num  | 视频avID   | 必要（可选） | avID与bvID任选一个 |
| bvid          | str  | 视频bvID   | 必要（可选） | avID与bvID任选一个 |
| edge_id       | num  | 模块编号   | 非必要       |                    |
| graph_version | num  | 155446     | 必要         | 作用尚不明确       |
| platform      | str  | 平台名称   | 必要         | 电脑：pc           |
| portal        | num  | 0          | 非必要       | 作用尚不明确       |
| screen        | num  | 0          | 非必要       | 作用尚不明确       |
| buvid         | str  | 位于Cookie | 非必要       | 作用尚不明确       |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                          |
| ------- | ---- | -------- | --------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-404：无视频 |
| message | str  | 错误信息 | 默认为0                                       |
| ttl     | num  | 1        |                                               |
| data    | obj  | 信息本体 |                                               |

`data`对象：

| 字段        | 类型  | 内容           | 备注         |
| ----------- | ----- | -------------- | ------------ |
| title       | str   | 分P标题        |              |
| edge_id     | num   | 当前模块编号   |              |
| story_list  | array | 进度回溯条     |              |
| edges       | obj   | 当前模块信息   |              |
| preload     | obj   | 预加载的分P    |              |
| hidden_vars | array | 变量列表       |              |
| is_leaf     | num   | 0              | 作用尚不明确 |

`data`中的`story_list`数组：

| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| 0    | obj  | 回溯第一项    |      |
| n    | obj  | 回溯第(n+1)项 |      |
| ……   | obj  | ……            | ……   |

`story_list`数组中的对象：

| 项         | 类型 | 内容          | 备注                |
| ---------- | ---- | ------------- | ------------------- |
| node_id    | num  | 与edge_id相等 |                     |
| edge_id    | num  | 模块编号      |                     |
| title      | str  | 分P标题       |                     |
| cid        | num  | 分P CID       |                     |
| start_pos  | num  | 播放开始位置  | 毫秒单位            |
| cover      | str  | 分P封面       |                     |
| is_current | num  | 是否为当前P   | null：否<br />1：是 |
| cursor     | num  | 不定          | 作用尚不明确        |

`data`中的`edges`对象：

| 字段        | 类型  | 内容          | 备注                     |
| ----------- | ----- | ------------- | ------------------------ |
| dimension   | obj   | 当前分P分辨率 | 有部分视频无法获取分辨率 |
| questions   | array | 问题          |                          |
| skin        | obj   | 问题外观      |                          |

`data`中的`edges`对象中的`dimension`对象：

| 字段   | 类型 | 内容           | 备注                 |
| ------ | ---- | -------------- | -------------------- |
| width  | num  | 当前分P 宽度   |                      |
| height | num  | 当前分P 高度   |                      |
| rotate | num  | 是否将宽高对换 | 0：正常<br />1：对换 |

`data`中的`edges`对象中的`questions`数组：

| 项   | 类型 | 内容     | 备注 |
| ---- | ---- | -------- | ---- |
| 0    | obj  | 问题本体 |      |

`data`中的`edges`对象中的`questions`数组中的对象：

| 字段         | 类型  | 内容            | 备注                    |
| ------------ | ----- | --------------- | ----------------------- |
| id           | num   | 模块编号        |                         |
| type         | num   | 2               | 作用尚不明确            |
| start_time_r | num   | 300 或 duration | 作用尚不明确            |
| duration     | num   | 回答限时        | 不限为-1<br />5秒为5000 |
| pause_video  | num   | 1               | 作用尚不明确            |
| title        | str   | 空              | 作用尚不明确            |
| choices      | array | 回答列表        |                         |

`data`中的`edges`对象中的`questions`数组中的对象中的`choices`数组：

| 项   | 类型 | 内容        | 备注 |
| ---- | ---- | ----------- | ---- |
| 0    | obj  | 第一选项    |      |
| n    | obj  | 第(n+1)选项 |      |
| ……   | obj  | ……          | ……   |

`data`中的`edges`对象中的`questions`数组中的对象中的`choices`数组中的对象：

| 字段            | 类型 | 内容                      | 备注                  |
| --------------- | ---- | ------------------------- | --------------------- |
| id              | num  | 模块编号                  |                       |
| platform_action | str  | 点击后跳转的分P与模块编号 | JUMP 模块编号 模块cid |
| native_action   | str  | 点击后对变量进行的修改    | 每项间用分号隔开      |
| condition       | str  | 选项出现条件              |                       |
| cid             | num  | 跳转分P CID               |                       |
| x               | num  | 选项出现的x坐标           |                       |
| y               | num  | 选项出现的y坐标           |                       |
| text_align      | num  | 选项文本对齐方式          | 暂不明确              |
| option          | str  | 选项文本                  |                       |
| is_default      | num  | 是否为默认选项            | null：否<br />1：是   |

`data`中的`edges`对象中的`skin`对象：

| 字段                     | 类型 | 内容             | 备注             |
| ------------------------ | ---- | ---------------- | ---------------- |
| choice_image             | str  | 选项组件外观链接 |                  |
| title_text_color         | str  | 文字颜色         | 以下均为RGBA格式 |
| title_shadow_color       | str  | 文字阴影颜色     |                  |
| title_shadow_offset_x    | num  | 文字阴影x偏移    |                  |
| title_shadow_offset_y    | num  | 文字阴影y偏移    |                  |
| title_shadow_radius      | num  | 文字阴影半径     |                  |
| progressbar_color        | str  | 倒计时条颜色     |                  |
| progressbar_shadow_color | str  | 倒计时条阴影颜色 |                  |

`data`中的`preload`对象：

| 字段  | 类型  | 内容        | 备注 |
| ----- | ----- | ----------- | ---- |
| video | array | 预加载的分P |      |

`data`中的`preload`对象中的`video`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | obj  | 预加载第一项    |      |
| n    | obj  | 预加载第(n+1)项 |      |
| ……   | obj  | ……              | ……   |

`data`中的`preload`对象中的`video`数组中的对象：

| 字段 | 类型 | 内容     | 备注 |
| ---- | ---- | -------- | ---- |
| aid  | num  | 视频avID |      |
| cid  | num  | 分P CID  |      |

`data`中的`hidden_vars`数组：

| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| 0    | obj  | 第一个变量    |      |
| n    | obj  | 第(n+1)个变量 |      |
| ……   | obj  | ……            | ……   |

`data`中的`hidden_vars`数组中的对象：

| 字段           | 类型 | 内容         | 备注                     |
| -------------- | ---- | ------------ | ------------------------ |
| value          | num  | 变量值       |                          |
| id             | str  | 变量编号     |                          |
| id_v2          | str  | 变量编号     | 语句中一般使用这种       |
| type           | num  | 变量类型     | “随机值”变量为2，否则为1 |
| is_show        | num  | 变量是否显示 | 0：否<br />1：是         |
| name           | str  | 变量名       |                          |
| skip_overwrite | num  | 0            | 作用尚不明确             |

**示例：**

查询互动视频`av73267982`下模块`5556092`的信息

```shell
curl -G 'http://api.bilibili.com/x/stein/edgeinfo_v2'\
--data-urlencode 'aid=73267982'\
--data-urlencode 'edge_id=5556092'\
--data-urlencode 'graph_version=155446'\
--data-urlencode 'platform=pc'\
-b 'SESSDATA=xxx'
```

```json
{
    "code": 0, 
    "message": "0", 
    "ttl": 1, 
    "data": {
        "title": "4", 
        "edge_id": 5556092, 
        "story_list": [
            {
                "node_id": 1, 
                "edge_id": 1, 
                "title": "0 片头", 
                "cid": 127486603, 
                "start_pos": 27000, 
                "cover": "http://i0.hdslb.com/bfs/steins-gate/127486603_screenshot.jpg", 
                "cursor": 0
            }, 
            {
                "node_id": 5556092, 
                "edge_id": 5556092, 
                "title": "4", 
                "cid": 125499378, 
                "start_pos": 82000, 
                "cover": "http://i0.hdslb.com/bfs/steins-gate/125499378_screenshot.jpg", 
                "is_current": 1, 
                "cursor": 15
            }
        ], 
        "edges": {
            "dimension": {
                "width": 1920, 
                "height": 1000, 
                "rotate": 0, 
                "sar": ""
            }, 
            "questions": [
                {
                    "id": 0, 
                    "type": 2, 
                    "start_time_r": 300, 
                    "duration": -1, 
                    "pause_video": 1, 
                    "title": "", 
                    "choices": [
                        {
                            "id": 5556133, 
                            "platform_action": "JUMP 5556133 125499249", 
                            "native_action": "", 
                            "condition": "$H7g_64_PG2EVS>=1.00 && $H7g_64_PG2EVS<=80.00", 
                            "cid": 125499249, 
                            "x": 947, 
                            "y": 499, 
                            "text_align": 2, 
                            "option": "A <你已成为杀手> 试图砍死萌新 (成功率20%)", 
                            "is_default": 1
                        }, 
                        {
                            "id": 5556134, 
                            "platform_action": "JUMP 5556134 125502707", 
                            "native_action": "", 
                            "condition": "$H7g_64_PG2EVS>=81.00 && $H7g_64_PG2EVS<=100.00", 
                            "cid": 125502707, 
                            "x": 949, 
                            "y": 502, 
                            "text_align": 2, 
                            "option": "B <你已成为杀手> 试图砍死萌新 (成功率20%)"
                        }, 
                        {
                            "id": 5556135, 
                            "platform_action": "JUMP 5556135 125499249", 
                            "native_action": "", 
                            "condition": "", 
                            "cid": 125499249, 
                            "x": 120, 
                            "y": 145, 
                            "text_align": 2, 
                            "option": "C 直接【砍杀失败】"
                        }
                    ]
                }
            ], 
            "skin": {
                "choice_image": "https://i0.hdslb.com/bfs/app/db0ae7700d4fb1416c8b305bcfb6f0948f818cc9.png", 
                "title_text_color": "d8fbffff", 
                "title_shadow_color": "00000033", 
                "title_shadow_offset_y": 1, 
                "title_shadow_radius": 1, 
                "progressbar_color": "ffffffff", 
                "progressbar_shadow_color": "000000cc"
            }
        }, 
        "preload": {
            "video": [
                {
                    "aid": 73267982, 
                    "cid": 125499249
                }, 
                {
                    "aid": 73267982, 
                    "cid": 125502707
                }
            ]
        }, 
        "hidden_vars": [
            {
                "value": 97, 
                "id": "v-H7g@PG2EVS", 
                "id_v2": "$H7g_64_PG2EVS", 
                "type": 2, 
                "is_show": 0, 
                "name": "随机值", 
                "skip_overwrite": 0
            }, 
            {
                "value": 0, 
                "id": "v-YWB6dk1oCP", 
                "id_v2": "$YWB6dk1oCP", 
                "type": 1, 
                "is_show": 1, 
                "name": "达成假结局次数", 
                "skip_overwrite": 0
            }, 
            {
                "value": 0, 
                "id": "v-Zh4JACIiId", 
                "id_v2": "$Zh4JACIiId", 
                "type": 1, 
                "is_show": 1, 
                "name": "死亡次数", 
                "skip_overwrite": 0
            }, 
            {
                "value": 0, 
                "id": "v-a2vplaQlsP", 
                "id_v2": "$a2vplaQlsP", 
                "type": 1, 
                "is_show": 1, 
                "name": "达成真结局次数", 
                "skip_overwrite": 0
            }, 
            {
                "value": 1, 
                "id": "v-lMQqQ994Sk", 
                "id_v2": "$lMQqQ994Sk", 
                "type": 1, 
                "is_show": 1, 
                "name": "循环编号", 
                "skip_overwrite": 0
            }
        ], 
        "is_leaf": 0
    }
}
```