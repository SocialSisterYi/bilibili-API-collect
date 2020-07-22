# protobuf弹幕

2020年5月23日，哔哩哔哩网页端启用了新的默认弹幕api，网页端弹幕显示的上限变为原弹幕池上限的两倍。

哔哩哔哩的视频是以6分钟为一个单位加载的，新的api也是以6分钟为一个单位加载，即每次加载6分钟内的弹幕，如果打开右侧的弹幕列表就会一次加载完所有的弹幕。

## 获取实时弹幕

> https://api.bilibili.com/x/v2/dm/web/seg.so

*请求方式:GET*

**url参数：**

| 参数名        | 类型 | 内容    | 必要性 | 备注      |
| ------------- | ---- | ------- | ------ | --------- |
| oid           | num  | 视频CID | 必要   |           |
| pid           | num  | 视频AID | 非必要 |           |
| type          | num  | 未知    | 必要   | 一般为1   |
| segment_index | num  | 分段    | 必要   | 6分钟一段 |

**返回：**

返回二进制数据，需要自行解析。

只能返回普通和高级弹幕，代码弹幕请从弹幕云屏蔽中获取。

## 弹幕格式

| 名称     | 含义                 | 类型   | 备注                                                         |
| -------- | -------------------- | ------ | ------------------------------------------------------------ |
| id       | 弹幕dmID             | int64  | 唯一  可用于操作参数                                         |
| progress | 视频内弹幕出现时间   | int32  | 毫秒                                                         |
| mode     | 弹幕类型             | int32  | 1 2 3普通弹幕<br />4底部<br />5顶部<br />6逆向<br />7高级弹幕<br />8代码弹幕<br />9BAS弹幕 |
| fontsize | 弹幕字号             | int32  | 18 小<br />25 标准<br />36 大                                |
| color    | 弹幕颜色             | uint32 | 十进制RGB888值                                               |
| midHash  | 编码后的用户UID      | string | 用于屏蔽用户和查看用户发送的所有弹幕   也可反查用户ID        |
| content  | 弹幕内容             | string | 字符串是编码格式为\\+三位数字，数字是八进制，为utf-8编码     |
| ctime    | 弹幕发送时间         | int64  | 时间戳                                                       |
| weight   | 权重                 | int32  | 云屏蔽等级                                                   |
| action   | 动作                 | string | 未知                                                         |
| pool     | 弹幕池               | int32  | 0普通池<br />1字幕池<br />2特殊池（高级弹幕）                |
| idStr    | 弹幕dmID的字符串类型 | string | 唯一  可用于操作参数                                         |

**bilidm.proto**

```protobuf
syntax = "proto3";

message DanmakuElem {
    int64 id = 1;
    int32 progress = 2;
    int32 mode = 3;
    int32 fontsize = 4;
    uint32 color = 5;
    string midHash = 6;
    string content = 7;
    int64 ctime = 8;
    int32 weight = 9;
    string action = 10;
    int32 pool = 11;
    string idStr = 12;
}

//弹幕接口返回的数据
message DmSegMobileReply {
    repeated DanmakuElem elems = 1;
}
```

**实例：**

获取炮姐弹幕，https://www.bilibili.com/video/BV1Js411o76u

编译proto文件

```powershell
protoc.exe --python_out=. .\bilidm.proto
```

生成文件：bilidm_pb2.py

main.py

```python
import bilidm_pb2
import requests
url = 'https://api.bilibili.com/x/v2/dm/web/seg.so?type=1&oid=1176840&pid=810872&segment_index=1'
data = requests.get(url)
target = bilidm_pb2.DmSegMobileReply()
target.ParseFromString(data.content)
print(target.elems[0])
print(target.elems[0].content)
```

输出：

```shell
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

