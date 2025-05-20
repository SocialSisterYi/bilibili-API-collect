# 全站广播

## 获取广播服务器地址

> https://api.bilibili.com/x/web-interface/broadcast/servers 

*请求方式：GET*

**url参数：**

| 参数名   | 类型 | 内容     | 必要性 | 备注                              |
| -------- | ---- | -------- | ------ | --------------------------------- |
| platform | str  | 平台选择 | 必要   | 为web时输出域名<br />其他时输出ip |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        |                             |
| data    | obj  | 信息本体 |                             |

`data`对象：

| 字段          | 类型   | 内容               | 备注 |
| ------------- | ------ | ------------------ | ---- |
| domain        | str    | 广播服务器url      |      |
| tcp_port      | num    | tcp端口            |      |
| ws_port       | num    | websocket端口      |      |
| wss_port      | num    | websocket ssl端口  |      |
| heartbeat     | num    | 最大心跳包间隔时间 |      |
| nodes         | array | 服务节点地址列表   |      |
| backoff       | obj    | ？？？             |      |
| heartbeat_max | num    | ？？？             |      |

`data`中的`nodes`数组：

| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| 0    | str  | 服务节点1     |      |
| n    | str  | 服务节点(n+1) |      |
| ……   | str  | ……            |      |

`data`中的`backoff`对象：

| 字段       | 类型 | 内容   | 备注 |
| ---------- | ---- | ------ | ---- |
| max_delay  | num  | ？？？ |      |
| base_delay | num  | ？？？ |      |
| factor     | num  | ？？？ |      |
| jitter     | num  | ？？？ |      |

示例：

当`platform`=`web`时，不显示节点ip

```shell
curl -G 'https://api.bilibili.com/x/web-interface/broadcast/servers' \
--data-urlencode 'platform=web'
```

<details>
<summary>查看响应示例：</summary>

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"domain": "broadcast.chat.bilibili.com",
		"tcp_port": 7821,
		"ws_port": 7822,
		"wss_port": 7823,
		"heartbeat": 30,
		"nodes": ["broadcast.chat.bilibili.com"],
		"backoff": {
			"max_delay": 300,
			"base_delay": 3,
			"factor": 1.8,
			"jitter": 0.3
		},
		"heartbeat_max": 3
	}
}
```

</details>

当`platform`=其他时，显示节点ip

```shell
curl -G 'https://api.bilibili.com/x/web-interface/broadcast/servers' \
--data-urlencode 'platform=1'
```

<details>
<summary>查看响应示例：</summary>

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"domain": "broadcast.chat.bilibili.com",
		"tcp_port": 7821,
		"ws_port": 7822,
		"wss_port": 7823,
		"heartbeat": 30,
		"nodes": ["134.175.207.130", "120.92.150.90", "120.92.150.212", "192.144.173.136", "154.8.217.108"],
		"backoff": {
			"max_delay": 300,
			"base_delay": 3,
			"factor": 1.8,
			"jitter": 0.3
		},
		"heartbeat_max": 3
	}
}
```

</details>

## 服务器数据包

连接服务器分为三种方式，分别是ws wss tcp，数据包分为上行和下行

单个数据包分为头部和正文

其中上行的有认证包 心跳包，下行的有认证包回复 心跳包回复 普通包

建立连接后超过30s内未发送认证包，或握手后30s内未发送心跳包，或发送了错误的认证包，都会被强制断开连接

操作流程：

1.发送认证包，等待接收认证回复

2.确认握手成功后，每30s内发送心跳包，并立即接收心跳包回复

3.空闲时间接收普通包

### 数据包结构

头部通用于上行和下行数据包

头部格式：

| 偏移量 | 长度（字节） | 类型   | 含义                                                 |
| ------ | ------------ | ------ | ---------------------------------------------------- |
| 0x00   | 4            | uint32 | 封包总大小（头部大小+正文大小）                      |
| 0x04   | 2            | uint16 | 头部大小（一般为0x0012，18字节）                     |
| 0x06   | 2            | uint16 | 协议版本，可取常数1                                  |
| 0x08   | 4            | uint32 | 操作码（包类型）<br />**见下表**                     |
| 0x0C   | 4            | uint32 | sequence（请求次数），可取常数1<br />对于普通包恒为0 |
| 0x10   | 2            | uint16 | 保留，一般为0                                        |

操作码：

| 代码 | 含义     |
| ---- | -------- |
| 2    | 心跳     |
| 3    | 心跳回复 |
| 7    | 认证     |
| 8    | 认证回复 |
| 1000 | 实时弹幕 |

**示例：**

以下为一个认证包示例，正文为文本`test`

```
00000000  00 00 00 16 00 12 00 01  00 00 00 07 00 00 00 01  |................|
00000010  00 00 74 65 73 74                                 |..test|
```


