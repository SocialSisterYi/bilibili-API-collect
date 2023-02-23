# APP主题

## 获取主题及加载动画

> https://app.bilibili.com/x/resource/show/skin

*请求方式：GET*

鉴权方式：appkey

认证方式：仅可APP

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注          |
| ---------- | ---- | ------------ | ----------- | ------------- |
| access_key | str  | APP登录Token | APP方式必要 |               |
| appkey     | str  | APP密钥      | APP方式必要 |               |
| build      | num  | 版本         | APP方式必要 | 可为`6082000` |
| ts         | num  | 当前时间戳   | APP方式必要 | 可为`0`       |
| sign       | str  | APP签名      | APP方式必要 |               |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                 |
| ------- | ---- | -------- | ---------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-3：API校验密匙错误<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                              |
| data    | obj  | 信息本体 |                                                      |

`data`对象：

| 字段        | 类型  | 内容         | 备注         |
| ----------- | ----- | ------------ | ------------ |
| user_equip  | obj   | 个性主题信息 | 有效时有此项 |
| skin_colors | array | 主题颜色列表 |              |
| load_equip  | obj   | 加载动画信息 | 有效时有此项 |

`data`中的`user_equip`对象：

| 字段        | 类型 | 内容            | 备注   |
| ----------- | ---- | --------------- | ------ |
| id          | num  | 装扮id          |        |
| name        | str  | 装扮名称        |        |
| preview     | str  | 装扮封面url     |        |
| ver         | num  | 装扮版本        | 时间戳 |
| package_url | str  | 装扮包url       |        |
| package_md5 | str  | 装扮包md5校验值 |        |
| data        | obj  | 装扮配置        |        |

`user_equip`中的`data`对象：

| 字段                | 类型 | 内容                | 必要性    | 备注                        |
| ------------------- | ---- | ----------------- | -------- | --------------------------- |
| color_mode          | str  | 颜色模式           |  必要  | light：亮色<br />dark：暗色 |
| color               | str  | 前景色？           |  必要  | 颜色<br />1. 使用十六进制颜色值<br />2. 颜色值的大小写不限，下同<br />3. 例：#ffffff |
| color_second_page   | str  | 背景色？           |  必要  | 颜色                         |
| tail_color          | str  | 底边栏颜色         |  必要  | 颜色                          |
| tail_color_selected | str  | 底边栏颜色(选择时)  |  必要  | 颜色                       |
| tail_icon_ani       | bool | 有无底边栏动画      |  必要  | false：无<br />true：有     |
| tail_icon_ani_mode  | str  | 底边栏动画循环播放   |  必要  | once：播放一次   |
| head_myself_mp4_play| str  | 我的页面头图（视频）循环 |  必要  | once：播放一次<br />loop：循环播放   |
| tail_icon_mode      | str  | 底栏改图标或改颜色  |  必要  | img：图标<br />color：颜色   |
| side_bg_color       | str  | 侧边栏颜色         | 非必要 |  颜色<br />5.x 版本客户端的侧边栏         |
| side_line_color     | str  | 侧边栏线条颜色？    | 非必要 |  颜色<br />5.x 版本客户端的侧边栏         |
| tail_icon_color     | str  | 底栏图标颜色      | 可能必要 |  颜色<br />若 tail_icon_mode = "color"，则必要 |
| tail_icon_color_dark| str  | 底栏图标颜色(夜间模式) | 可能必要 |  颜色<br />若 tail_icon_mode = "color"，则必要 |
| tail_icon_color_selected| str  | 底栏图标颜色(选择时) | 可能必要 |  颜色<br />若 tail_icon_mode = "color"，则必要 |
| tail_icon_color_selected_dark| str  | 底栏图标颜色(选择时)(夜间模式) | 可能必要 |  颜色<br />若 tail_icon_mode = "color"，则必要 |

`skin_colors`数组：

| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| 0    | obj  | 主题颜色1     |      |
| n    | obj  | 主题颜色(n+1) |      |
| ……   | obj  | ……            | ……   |

`skin_colors`数组中的对象：

| 字段       | 类型 | 内容         | 备注                            |
| ---------- | ---- | ------------ | ------------------------------- |
| id         | num  | 颜色id       |                                 |
| name       | str  | 颜色名称     |                                 |
| is_free    | bool | 是否免费     | false：收费<br />true：免费     |
| price      | num  | 价格         | 单位为硬币                      |
| is_bought  | bool | 是否已购买   | false：未购买<br />true：已购买 |
| status     | num  | 状态         | 1：自动续费<br />4：已退订      |
| buy_time   | num  | 购买时间     | 毫秒时间戳                      |
| due_time   | num  | 到期时间     | 毫秒时间戳                      |
| color_name | str  | 颜色类型名称 |                                 |
| is_overdue | bool | 是否已到期   | false：未到期<br />true：已到期 |

`data`中的`load_equip`对象：

| 字段        | 类型 | 内容            | 备注   |
| ----------- | ---- | --------------- | ------ |
| id          | num  | 装扮id          |        |
| name        | str  | 装扮名称        |        |
| ver         | num  | 装扮版本        | 时间戳 |
| loading_url | str  | 加载动画图标url |        |

**示例：**

```shell
curl -G 'https://app.bilibili.com/x/resource/show/skin' \
--data-urlencode 'access_key=xxx' \
--data-urlencode 'appkey=1d8b6e7d45233436' \
--data-urlencode 'build=6082000' \
--data-urlencode 'ts=0' \
--data-urlencode 'sign=ea212fea5b00a6278ea6d9938b4c500e'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "user_equip": {
            "id": 2529,
            "name": "初音未来-日版",
            "preview": "http://i0.hdslb.com/bfs/garb/item/2fa16380b31b3cee6c889d645f2699de8e9d9faf.jpg",
            "ver": 1598600025,
            "package_url": "http://i0.hdslb.com/bfs/garb/zip/9c393edea0c7b7b59685a20cd655363ef573a325.zip",
            "package_md5": "7b6d20d998ad543c6a275948a6a1a5fe",
            "data": {
                "color_mode": "light",
                "color": "#212121",
                "color_second_page": "#fff2d2",
                "side_bg_color": "#ffe7ae",
                "tail_color": "#996c00",
                "tail_color_selected": "#0d6872",
                "tail_icon_ani": true,
                "tail_icon_ani_mode": "once"
            }
        },
        "skin_colors": [
            {
                "id": 2,
                "name": "少女粉",
                "is_free": true,
                "color_name": "pink"
            },
            {
                "id": 1,
                "name": "夜间模式",
                "is_free": true,
                "color_name": "black"
            },
            {
                "id": 3,
                "name": "姨妈红",
                "price": 5,
                "color_name": "red"
            },
            {
                "id": 4,
                "name": "咸蛋黄",
                "price": 5,
                "color_name": "yellow"
            },
            {
                "id": 5,
                "name": "早苗绿",
                "price": 5,
                "status": 4,
                "buy_time": 1599219782000,
                "due_time": 1601811782000,
                "color_name": "green"
            },
            {
                "id": 6,
                "name": "胖次蓝",
                "price": 5,
                "color_name": "blue"
            },
            {
                "id": 7,
                "name": "基佬紫",
                "price": 5,
                "color_name": "purple"
            }
        ],
        "load_equip": {
            "id": 2531,
            "name": "初音未来13周年",
            "ver": 1598602035,
            "loading_url": "http://i0.hdslb.com/bfs/garb/item/9b12e8b5cc16a4c2e71e91c43796f09d5e132847.webp"
        }
    }
}
```

</details>

## 主题包结构

主题包为app端付费主题（套装）的整合包，以zip格式通过url分发

包内的图片文件为app对应的资源替换，替换时可随意修改后缀 jpg 或 png

必要性：head_bg 及 head_tab_bg 为必要，其他非必要

| 文件名                             | 说明                       |
| --------------------------------- | -------------------------- |
| head_bg.jpg                       | 首页顶部栏背景             |
| head_tab_bg.jpg                   | 顶部栏背景                 |
| head_myself_bg.jpg                | 【我的】页面头图（小）     |
| head_myself_squared_bg.jpg        | 【我的】页面头图（大）     |
| head_myself_mp4_bg.mp4            | 【我的】页面头图（视频）<br />格式参考：后缀必须 mp4、分辨率 1242 x 1074、60 FPS、去掉音轨(音频) |
| side_bg.jpg                       | 侧边栏背景                 |
| side_bg_bottom.jpg                | 侧边栏底部背景             |
| tail_bg.png                       |  底部栏背景                |
| tail_icon_main.png                | 【首页】按钮               |
| tail_icon_channel.png             | 【频道】按钮               |
| tail_icon_dynamic.png             | 【动态】按钮               |
| tail_icon_shop.png                | 【会员购】按钮             |
| tail_icon_myself.png              | 【我的】按钮               |
| tail_icon_pub_btn_bg.png          | 【发布】按钮               |
| tail_icon_selected_main.png       | 【首页】按钮（选中状态）   |
| tail_icon_selected_channel.png    | 【频道】按钮（选中状态）   |
| tail_icon_selected_dynamic.png    | 【动态】按钮（选中状态）   |
| tail_icon_selected_shop.png       | 【会员购】按钮（选中状态） |
| tail_icon_selected_myself.png     | 【我的】按钮（选中状态）   |
| tail_icon_selected_pub_btn_bg.png | 【发布】按钮（选中状态）   |


以`id=2529（初音未来-日版）`的资源为例

```shell
wget https://i0.hdslb.com/bfs/garb/zip/9c393edea0c7b7b59685a20cd655363ef573a325.zip
unzip -l 9c393edea0c7b7b59685a20cd655363ef573a325.zip
```

返回为

```
Archive:  9c393edea0c7b7b59685a20cd655363ef573a325.zip
  Length      Date    Time    Name
---------  ---------- -----   ----
    22995  1980-00-00 00:00   tail_icon_selected_myself.png
    18444  1980-00-00 00:00   head_bg.jpg
     3061  1980-00-00 00:00   head_tab_bg.jpg
   188898  1980-00-00 00:00   side_bg.jpg
     2842  1980-00-00 00:00   side_bg_bottom.jpg
   203134  1980-00-00 00:00   tail_bg.png
    27539  1980-00-00 00:00   tail_icon_main.png
    25632  1980-00-00 00:00   tail_icon_selected_main.png
    27415  1980-00-00 00:00   tail_icon_selected_channel.png
   191706  1980-00-00 00:00   head_myself_squared_bg.jpg
    27919  1980-00-00 00:00   tail_icon_channel.png
    27262  1980-00-00 00:00   tail_icon_selected_dynamic.png
   147738  1980-00-00 00:00   head_myself_bg.jpg
    28182  1980-00-00 00:00   tail_icon_dynamic.png
    25878  1980-00-00 00:00   tail_icon_shop.png
    26487  1980-00-00 00:00   tail_icon_selected_shop.png
    21831  1980-00-00 00:00   tail_icon_myself.png
---------                     -------
  1016963                     17 files
```

