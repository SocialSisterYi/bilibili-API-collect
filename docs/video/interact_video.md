# 互动视频信息

注：互动视频分P与普通视频分P不互通

## 获取互动视频模块详细信息

> https://api.bilibili.com/x/stein/edgeinfo_v2

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名        | 类型 | 内容     | 必要性       | 备注               |
| ------------- | ---- | -------- | ------------ | ------------------ |
| aid           | num  | 稿件avid | 必要（可选） | avid与bvid任选一个 |
| bvid          | str  | 稿件bvid | 必要（可选） | avid与bvid任选一个 |
| graph_version | num  | 剧情图id | 必要         | 可于[播放器](/docs/video/player.md)接口的 `interaction` 對象取得 |
| edge_id       | num  | 模块编号 | 非必要       | 0或留空为起始模块  |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-404：无视频<br />99003：剧情图被修改已失效<br />99077：请输入aid/bvid |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段            | 类型  | 内容                | 备注                                             |
| --------------- | ----- | ------------------- | ------------------------------------------------ |
| title           | str   | 视频模块（分P）标题 |                                                  |
| edge_id         | num   | 当前模块id          |                                                  |
| story_list      | array | 进度回溯信息        | 未登录仅有起始模块                               |
| edges           | obj   | 当前模块信息        |                                                  |
| preload         | obj   | 预加载的分P         |                                                  |
| hidden_vars     | array | 变量列表            | 无变量时不存在此项                               |
| is_leaf         | num   | 是否为结束模块      | 0：当前模块为普通模块<br />1：当前模块为结束模块 |
| no_tutorial     | num   | 禁止记录选择        | 1：禁止<br />非禁止时无此项                      |
| no_backtracking | num   | 禁止进度回溯        | 1：禁止<br />非禁止时无此项                      |
| no_evaluation   | num   | 禁止结尾评分        | 1：禁止<br />非禁止时无此项                      |

`data`中的`story_list`数组：

| 项   | 类型 | 内容              | 备注 |
| ---- | ---- | ----------------- | ---- |
| 0    | obj  | 回溯第一项模块    |      |
| n    | obj  | 回溯第(n+1)项模块 |      |
| ……   | obj  | ……                | ……   |

`story_list`数组中的对象：

| 项         | 类型 | 内容             | 备注                          |
| ---------- | ---- | ---------------- | ----------------------------- |
| node_id    | num  | 模块编号         |                               |
| edge_id    | num  | **同上**         |                               |
| title      | str  | 模块（分P）标题  |                               |
| cid        | num  | 模块（分P）cid   |                               |
| start_pos  | num  | 记录播放开始位置 | 单位为毫秒                    |
| cover      | str  | 分P封面url       |                               |
| is_current | num  | 是否为当前模块   | 1：是<br />仅为当前模块时存在 |
| cursor     | num  | 进度序号         | 从0开始向上增长               |

`data`中的`edges`对象：

| 字段      | 类型  | 内容          | 备注                     |
| --------- | ----- | ------------- | ------------------------ |
| dimension | obj   | 当前分P分辨率 | 有部分视频无法获取分辨率 |
| questions | array | 问题          | 结束模块无此项           |
| skin      | obj   | 问题外观      |                          |

`edges`中的`dimension`对象：

| 字段   | 类型 | 内容           | 备注                 |
| ------ | ---- | -------------- | -------------------- |
| width  | num  | 当前分P 宽度   |                      |
| height | num  | 当前分P 高度   |                      |
| rotate | num  | 是否将宽高对换 | 0：正常<br />1：对换 |
| sar    | str  | ？？？         | 作用尚不明确         |

`edges`中的`questions`数组：

| 项   | 类型 | 内容     | 备注 |
| ---- | ---- | -------- | ---- |
| 0    | obj  | 套了个娃 |      |

`edges`中的`questions`数组中的对象：

| 字段          | 类型  | 内容             | 备注                                                         |
| ------------- | ----- | ---------------- | ------------------------------------------------------------ |
| id            | num   | ？？？           | 作用尚不明确                                                 |
| type          | num   | 选项显示模式     | 0：不显示选项<br />1：底部选项模式<br />2：坐标定点模式<br />3：？？？<br />127：？？？ |
| start_time_r  | num   | 300 或 duration  | 作用尚不明确                                                 |
| duration      | num   | 回答限时         | 单位为毫秒<br />不限时为`-1`                                 |
| pause_video   | num   | 是否暂停播放视频 | 0：不暂停<br />1：暂停播放                                   |
| title         | str   | 空               | 作用尚不明确                                                 |
| choices       | array | 选项列表         |                                                              |
| fade_in_time  | num   | 选项淡入时间     | 毫秒                                                         |
| fade_out_time | num   | 选项淡出时间     | 毫秒                                                         |

`questions`数组中的对象中的`choices`数组：

| 项   | 类型 | 内容        | 备注 |
| ---- | ---- | ----------- | ---- |
| 0    | obj  | 第一选项    |      |
| n    | obj  | 第(n+1)选项 |      |
| ……   | obj  | ……          | ……   |

`questions`数组中的对象中的`choices`数组中的对象：

| 字段            | 类型 | 内容                 | 备注                                  |
| --------------- | ---- | -------------------- | ------------------------------------- |
| id              | num  | 选项所跳转的模块id   |                                       |
| platform_action | str  | 跳转信息文字         | JUMP+{所跳转的模块编号}+{所跳转的cid} |
| native_action   | str  | 点击后对变量运算语句 | 每项间用分号隔开<br />无为空          |
| condition       | str  | 选项出现条件判断语句 | 无为空                                |
| cid             | num  | 选项所跳转分P的cid   |                                       |
| x               | num  | 选项出现的x坐标      | 仅坐标模式有此项                      |
| y               | num  | 选项出现的y坐标      | 仅坐标模式有此项                      |
| text_align      | num  | 选项文本对齐方式     |                                       |
| option          | str  | 选项文字             |                                       |
| selected        | obj  | 选择动画信息         |                                       |
| submited        | obj  | 提交动画信息         |                                       |
| is_default      | num  | 是否为默认选项       | 1：是<br />非默认选项无此项           |
| is_hidden       | num  | 是否为隐藏选项       | 1：是<br />非隐藏选项无此项           |

`edges`中的`skin`对象：

| 字段                     | 类型 | 内容                | 备注             |
| ------------------------ | ---- | ------------------- | ---------------- |
| choice_image             | str  | 选项组件外观图片url |                  |
| title_text_color         | str  | 文字颜色            | 以下均为RGBA格式 |
| title_shadow_color       | str  | 文字阴影颜色        |                  |
| title_shadow_offset_x    | num  | 文字阴影x偏移       |                  |
| title_shadow_offset_y    | num  | 文字阴影y偏移       |                  |
| title_shadow_radius      | num  | 文字阴影半径        |                  |
| progressbar_color        | str  | 倒计时条颜色        |                  |
| progressbar_shadow_color | str  | 倒计时条阴影颜色    |                  |

`data`中的`preload`对象：

| 字段  | 类型  | 内容        | 备注 |
| ----- | ----- | ----------- | ---- |
| video | array | 预加载的分P |      |

`preload`中的`video`数组：

| 项   | 类型 | 内容            | 备注                                 |
| ---- | ---- | --------------- | ------------------------------------ |
| 0    | obj  | 预加载第一项    | 预加载的内容为当前所有选项的跳转视频 |
| n    | obj  | 预加载第(n+1)项 |                                      |
| ……   | obj  | ……              | ……                                   |

`preload`中的`video`数组中的对象：

| 字段 | 类型 | 内容     | 备注 |
| ---- | ---- | -------- | ---- |
| aid  | num  | 稿件avid |      |
| cid  | num  | 分P cid  |      |

`data`中的`hidden_vars`数组：

| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| 0    | obj  | 第一个变量    |      |
| n    | obj  | 第(n+1)个变量 |      |
| ……   | obj  | ……            | ……   |

`data`中的`hidden_vars`数组中的对象：

| 字段           | 类型 | 内容         | 备注                       |
| -------------- | ---- | ------------ | -------------------------- |
| value          | num  | 变量值       | 随机值为随机整数           |
| id             | str  | 变量编号     |                            |
| id_v2          | str  | 变量编号     | 语句中一般使用这种         |
| type           | num  | 变量类型     | 1：普通变量<br />2：随机值 |
| is_show        | num  | 是否展示变量 | 0：否<br />1：是           |
| name           | str  | 变量名       |                            |
| skip_overwrite | num  | 0            | 作用尚不明确               |

**示例：**

查询互动视频`av73267982`下剧情图`155446`模块`5556092`的信息

avid方式：

```shell
curl -G 'https://api.bilibili.com/x/stein/edgeinfo_v2' \
--data-urlencode 'aid=73267982' \
--data-urlencode 'graph_version=155446' \
--data-urlencode 'edge_id=5556092' \
-b 'SESSDATA=xxx'
```

bvid方式：

```shell
curl -G 'https://api.bilibili.com/x/stein/edgeinfo_v2' \
--data-urlencode 'bvid=BV1UE411y7Wy' \
--data-urlencode 'graph_version=155446' \
--data-urlencode 'edge_id=5556092' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

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

</details>
