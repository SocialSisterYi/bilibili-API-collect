# protobuf弹幕

2020年5月23日，哔哩哔哩网页端及移动端启用了新的默认弹幕api，网页端弹幕显示的上限变为原弹幕池上限的两倍。

新的api是以6分钟为一个单位加载，即每次加载6分钟内的弹幕

## 获取实时弹幕

> http://api.bilibili.com/x/v2/dm/web/seg.so
>
> http://api.bilibili.com/x/v2/dm/list/seg.so

*请求方式：GET*

此接口与漫画弹幕相同

只能返回普通和高级弹幕，代码（BAS）弹幕请从云推荐弹幕中获取

**注：仅获取6min的整数倍时间内的弹幕（如第一包中弹幕`progress`值域为0-360000）**

**url参数：**

| 参数名        | 类型 | 内容     | 必要性 | 备注        |
| ------------- | ---- | -------- | ------ | ----------- |
| type          | num  | 弹幕分类 | 必要   | 1：视频弹幕 |
| oid           | num  | 视频CID  | 必要   |             |
| pid           | num  | 视频avID | 非必要 |             |
| segment_index | num  | 分包     | 必要   | 6分钟一包   |

**回复：**

返回二进制数据，需要自行解析

**示例：**

获取视频`av810872(CID=1176840)`的实时弹幕分段`1`

```shell
curl -G 'http://api.bilibili.com/x/v2/dm/web/seg.so'\
--data-urlencode 'type=1'\
--data-urlencode 'oid=1176840'\
--data-urlencode 'pid=810872'\
--data-urlencode 'segment_index=1'\
-o 'danmaku.bin'
```

响应正文为protubuf二进制数据

## 弹幕格式

protobuf结构体：

**bilidm.proto**

```protobuf
syntax = "proto3";

message DanmakuElem {
    int64 id = 1;       //弹幕dmID
    int32 progress = 2; //出现时间
    int32 mode = 3;     //弹幕类型
    int32 fontsize = 4; //文字大小
    uint32 color = 5;   //弹幕颜色
    string midHash = 6; //发送者UID的HASH
    string content = 7; //弹幕内容
    int64 ctime = 8;    //发送时间
    int32 weight = 9;   //权重
    string action = 10; //动作
    int32 pool = 11;    //弹幕池
    string idStr = 12;  //弹幕dmID
}

message DmSegMobileReply {
    repeated DanmakuElem elems = 1;
}
```

| 名称     | 含义                 | 类型   | 备注                                                         |
| -------- | -------------------- | ------ | ------------------------------------------------------------ |
| id       | 弹幕dmID             | int64  | 唯一  可用于操作参数                                         |
| progress | 视频内弹幕出现时间   | int32  | 毫秒                                                         |
| mode     | 弹幕类型             | int32  | 1 2 3：普通弹幕<br />4：底部弹幕<br />5：顶部弹幕<br />6：逆向弹幕<br />7：高级弹幕<br />8：代码弹幕<br />9：BAS弹幕 |
| fontsize | 弹幕字号             | int32  | 18：小<br />25：标准<br />36：大                             |
| color    | 弹幕颜色             | uint32 | 十进制RGB888值                                               |
| midHash  | 发送者UID的HASH      | string | 用于屏蔽用户和查看用户发送的所有弹幕   也可反查用户ID        |
| content  | 弹幕内容             | string | utf-8编码                                                    |
| ctime    | 弹幕发送时间         | int64  | 时间戳                                                       |
| weight   | 权重                 | int32  | 用于智能屏蔽级别                                             |
| action   | 动作                 | string | 未知                                                         |
| pool     | 弹幕池               | int32  | 0：普通池<br />1：字幕池<br />2：特殊池（代码/BAS弹幕）      |
| idStr    | 弹幕dmID的字符串类型 | string | 唯一  可用于操作参数                                         |

## 实例

获取炮姐弹幕第1包，[BV1Js411o76u](https://www.bilibili.com/video/BV1Js411o76u)

编译proto结构文件

```shell
protoc --python_out=. bilidm.proto
```

生成bilidm_pb2.py

---

以下为python测试代码

```python
import bilidm_pb2
import requests
url = 'http://api.bilibili.com/x/v2/dm/web/seg.so?type=1&oid=1176840&pid=810872&segment_index=1'
data = requests.get(url)
target = bilidm_pb2.DmSegMobileReply()
target.ParseFromString(data.content)
print(target.elems[0])
print(target.elems[0].content)
```

输出：

```
id: 682225690
progress: 44125
mode: 1
fontsize: 25
color: 16777215
midHash: "af4aa003"
content: "\346\210\221\347\202\256\350\277\230\350\203\275\345\206\215\346\210\230500\345\271\264\357\274\201\357\274\201\357\274\201\346\210\221\347\202\256\350\277\230\350\203\275\345\206\215\346\210\230500\345\271\264\357\274\201\357\274\201\357\274\201\346\210\221\347\202\256\350\277\230\350\203\275\345\206\215\346\210\230500\345\271\264\357\274\201\357\274\201\357\274\201\346\210\221\347\202\256\350\277\230\350\203\275\345\206\215\346\210\230500\345\271\264"
ctime: 1416323487
weight: 6
idStr: "682225690"

我炮还能再战500年！！！我炮还能再战500年！！！我炮还能再战500年！！！我炮还能再战500年
```

