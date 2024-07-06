# 弹幕元数据

2020-09-25 B站更新了互动弹幕功能，包括UP主头像弹幕、关联视频弹幕、视频内嵌引导关注按钮三大功能

详情见：

- [【客户端更新】6.10版本更新！UP主支持发布关联视频弹幕]( https://www.bilibili.com/read/cv7728299 )
- [引导关注卡片](https://www.bilibili.com/blackboard/activity-c8a0iDRQy.html )

## 获取弹幕个人配置与互动弹幕及BAS（代码）弹幕专包（web端）

> https://api.bilibili.com/x/v2/dm/web/view

*请求方式：GET*

认证方式：仅可Cookie（SESSDATA）

**url参数：**

| 参数名 | 类型 | 内容     | 必要性 | 备注        |
| ------ | ---- | -------- | ------ | ----------- |
| type   | num  | 弹幕类   | 必要   | 1：视频弹幕 |
| oid    | num  | 视频cid  | 必要   |             |
| pid    | num  | 稿件avid | 非必要 |             |

**proto回复：**

消息`DmWebViewReply`：

| 名称       | 类型                 | 含义                   | 备注                         |
| ---------- | -------------------- | ---------------------- | ---------------------------- |
| state      | int32                | 弹幕开放状态           | 0：开放弹幕<br />1：禁止弹幕 |
| text       | string               | ？                     |                              |
| textSide   | string               | ？                     |                              |
| dmSge      | DmSegConfig          | 分段弹幕包信息？       |                              |
| flag       | DanmakuFlagConfig    | ？                     |                              |
| specialDms | repeated string      | BAS（代码）弹幕专包url |                              |
| checkBox   | bool                 | ？                     |                              |
| count      | int64                | 实际弹幕总数           | 具有1500-6000不等的上限      |
| commandDms | repeated CommandDm   | 互动弹幕条目           |                              |
| dmSetting  | DanmuWebPlayerConfig | 弹幕个人配置           | 仅登录后存在                 |

消息`dmSge`：

| 名称     | 类型  | 含义         | 备注       |
| -------- | ----- | ------------ | ---------- |
| pageSize | int64 | 分段时间？   | 单位为毫秒 |
| total    | int64 | 最大分页数？ |            |

消息`flag`：

| 名称      | 类型   | 含义 | 备注 |
| --------- | ------ | ---- | ---- |
| recFlag   | int32  | ？   |      |
| recText   | string | ？   |      |
| recSwitch | int32  | ？   |      |

消息`commandDms`：

| 名称     | 类型   | 含义         | 备注                                                         |
| -------- | ------ | ------------ | ------------------------------------------------------------ |
| id       | int64  | 弹幕dmid     |                                                              |
| oid      | int64  | 视频cid      |                                                              |
| mid      | int64  | 发送者mid    |                                                              |
| command  | string | 弹幕指令     | `#UP#`：UP主头像弹幕<br />`#LINK#`：关联视频弹幕<br />`#ATTENTION#`：视频内嵌引导关注按钮 |
| content  | string | 弹幕文字     |                                                              |
| progress | int32  | 弹幕出现时间 | 单位为毫秒                                                   |
| ctime    | string | 创建时间？   | 此项为空                                                     |
| mtime    | string | 修改时间？   | 此项为空                                                     |
| extra    | string | 弹幕负载数据 | json序列字串                                                 |
| idStr    | string | 弹幕dmid     | 字串形式                                                     |

`extra`json序列：

类型为【UP主头像弹幕】时：

| 字段 | 类型 | 内容        | 备注 |
| ---- | ---- | ----------- | ---- |
| icon | str  | UP主头像url |      |

类型为【关联视频弹幕】时：

| 字段  | 类型 | 内容                | 备注 |
| ----- | ---- | ------------------- | ---- |
| aid   | num  | 关联视频的avid      |      |
| title | str  | 关联视频的标题      |      |
| icon  | str  | 关联视频按钮图片url |      |
| bvid  | str  | 关联视频的bvid      |      |

类型为【视频内嵌引导关注按钮】时：

| 字段     | 类型 | 内容         | 备注                                       |
| -------- | ---- | ------------ | ------------------------------------------ |
| duration | num  | 持续时间     | 单位为毫秒                                 |
| posX     | num  | X坐标        | 区间：[118-549]                            |
| posY     | num  | Y坐标        | 区间：[82-293]                             |
| icon     | str  | 按钮图片url  | 不应该是关注按钮吗，但这个是圆形的         |
| type     | num  | 关注按钮类型 | 0：仅关注<br />1：仅三连<br />2：关注+三连 |

消息`dmSetting`：

| 名称         | 类型   | 含义                     | 备注                                                         |
| ------------ | ------ | ------------------------ | ------------------------------------------------------------ |
| dmSwitch     | bool   | 弹幕开关                 | true：开启<br />false：关闭                                  |
| aiSwitch     | bool   | 智能云屏蔽               | 同上                                                         |
| aiLevel      | int32  | 智能云屏蔽级别           | 区间：[1-10]                                                 |
| blocktop     | bool   | 屏蔽类型-顶部            | true：不屏蔽<br />false：屏蔽                                |
| blockscroll  | bool   | 屏蔽类型-滚动            | 同上                                                         |
| blockbottom  | bool   | 屏蔽类型-底部            | 同上                                                         |
| blockcolor   | bool   | 屏蔽类型-彩色            | 同上                                                         |
| blockspecial | bool   | 屏蔽类型-特殊            | 同上                                                         |
| preventshade | bool   | 防挡弹幕（底部15%）      | true：开启<br />false：关闭                                  |
| dmask        | bool   | 智能防挡弹幕（人像蒙版） | 同上                                                         |
| opacity      | float  | 弹幕不透明度             | 区间：[0-1]                                                  |
| dmarea       | int32  | 弹幕显示区域             | 100：不重叠<br />75：3/4屏<br />50：半瓶<br />25：1/4屏<br />0：不限 |
| speedplus    | float  | 弹幕速度                 | 区间：[0.4-1.6]                                              |
| fontsize     | float  | 字体大小                 | 区间：[0.4-1.6]                                              |
| screensync   | bool   | 跟随屏幕缩放比例         |                                                              |
| speedsync    | bool   | 根据播放倍速调整速度     |                                                              |
| fontfamily   | string | 字体类型？               | 未启用                                                       |
| bold         | bool   | 粗体？                   | 未启用                                                       |
| fontborder   | int32  | 描边类型                 | 0：重墨<br />1：描边<br />2：45°投影                         |
| drawType     | string | 渲染类型？               | 未启用                                                       |

protobuf结构体：

**web_dmview.proto**

```protobuf
syntax = "proto3";

//分段弹幕包信息？
message DmSegConfig {
    int64 pageSize = 1; //分段时间？
    int64 total = 2;    //最大分页数？
}

//
message DanmakuFlagConfig {
    int32 recFlag = 1;   //
    string recText = 2;  //
    int32 recSwitch = 3; //
}

// 互动弹幕条目
message CommandDm {
    int64 id = 1;       //弹幕dmid
    int64 oid = 2;      //视频cid
    int64 mid = 3;      //发送者mid
    string command = 4; //弹幕指令
    string content = 5; //弹幕文字
    int32 progress = 6; //弹幕出现时间
    string ctime = 7;   //
    string mtime = 8;   //
    string extra = 9;   //弹幕负载数据
    string idStr = 10;  //弹幕dmid（字串形式）
}

//弹幕个人配置
message DanmuWebPlayerConfig{
    bool dmSwitch=1;      //弹幕开关
    bool aiSwitch=2;      //智能云屏蔽
    int32 aiLevel=3;      //智能云屏蔽级别
    bool blocktop=4;      //屏蔽类型-顶部
    bool blockscroll=5;   //屏蔽类型-滚动
    bool blockbottom=6;   //屏蔽类型-底部
    bool blockcolor=7;    //屏蔽类型-彩色
    bool blockspecial=8;  //屏蔽类型-特殊
    bool preventshade=9;  //防挡弹幕（底部15%）
    bool dmask=10;        //智能防挡弹幕（人像蒙版）
    float opacity=11;     //弹幕不透明度
    int32 dmarea=12;      //弹幕显示区域
    float speedplus=13;   //弹幕速度
    float fontsize=14;    //字体大小
    bool screensync=15;   //跟随屏幕缩放比例
    bool speedsync=16;    //根据播放倍速调整速度
    string fontfamily=17; //字体类型？
    bool bold=18;         //粗体？
    int32 fontborder=19;  //描边类型
    string drawType=20;   //渲染类型？
}

message DmWebViewReply {
    int32 state = 1;                     //弹幕开放状态
    string text = 2;                     //
    string textSide = 3;                 //
    DmSegConfig dmSge = 4;               //分段弹幕包信息？
    DanmakuFlagConfig flag = 5;          //
    repeated string specialDms = 6;      //BAS（代码）弹幕专包url
    bool checkBox = 7;                   //
    int64 count = 8;                     //实际弹幕总数
    repeated CommandDm commandDms = 9;   //互动弹幕条目
    DanmuWebPlayerConfig dmSetting = 10; //弹幕个人配置
}
```

**示例：**

获取视频`av797164471(cid=236871317)`的弹幕元数据

```shell
curl -G 'https://api.bilibili.com/x/v2/dm/web/view' \
--data-urlencode 'type=1' \
--data-urlencode 'oid=236871317' \
--data-urlencode 'pid=797164471' \
-b 'SESSDATA=xxx' \
-o 'danmaku_view.bin'
```

响应正文为protubuf二进制数据

## 实例

### 获取互动弹幕

获取并显示视频`av797164471(cid=236871317)`的所有互动弹幕

```python
import web_dmview_pb2
import requests

AVID = 797164471
CID = 236871317
url = f'https://api.bilibili.com/x/v2/dm/web/view?type=1&oid={CID}&pid={AVID}'

data = requests.get(url)
target = web_dmview_pb2.DmWebViewReply()
target.ParseFromString(data.content)

print(f'互动弹幕数={len(target.commandDms)}')
for i in target.commandDms:
	print(f'''\
---弹幕ID={i.id}
---视频cid={i.oid}
---发送者mid={i.mid}
---弹幕指令={i.command}
---弹幕文字={i.content}
---弹幕出现时间={i.progress}
---弹幕负载数据={i.extra}
---弹幕ID（字串）={i.idStr}'''
)
```

输出为：

```
互动弹幕数=1
---弹幕ID=38469676112019463
---视频cid=236871317
---发送者mid=501183549
---弹幕指令=#UP#
---弹幕文字=这个视频没有恰饭！别紧张！
---弹幕出现时间=157818
---弹幕负载数据={"icon":"https://i1.hdslb.com/bfs/face/559abe31f561f71f3106d8ee7b2065cac50c1235.jpg"}
---弹幕ID（字串）=38469676112019463
```

### 获取BAS（代码）弹幕专包

BAS弹幕（`pool=2` `mode=9`）只能从此包获取，代码弹幕（`pool=2` `mode=8`）也能从此包获取

获取并显示视频`av2(cid=62131)`的所有BAS（代码）弹幕专包

```python
import web_dmview_pb2
import requests

AVID = 2
CID = 62131
url = f'https://api.bilibili.com/x/v2/dm/web/view?type=1&oid={CID}&pid={AVID}'

data = requests.get(url)
target = web_dmview_pb2.DmWebViewReply()
target.ParseFromString(data.content)

print(f'特殊弹幕包数={len(target.specialDms)}')
for i in target.specialDms:
	print(f'特殊弹幕包url={i}')
```

输出为：

```
特殊弹幕包数=1
特殊弹幕包url=https://i0.hdslb.com/bfs/dm/b0d5f08c12be59292aa0d4e09b6dd8e54c2ba886.bin
```

使用[普通分段包弹幕](danmaku_proto.md#获取实时弹幕)的proto结构体反序列化此bin数据
