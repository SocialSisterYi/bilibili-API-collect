# 检查昵称是否可注册
也可用于判断指定昵称的用户是否存在

### 请求地址
> http://passport.bilibili.com/web/generic/check/nickname

*方式:GET*

**参数：**
| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| -------- | ---- | ----------- | ------ | ---- |
| nickName | url | 目标昵称  | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容       | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 状态码    | **详细说明见下一表格**        |
| message | str  | 错误详情   | 若昵称可用，则不返回message   |

`code`状态码：

| 值    | 含义                              |
| ----- | --------------------------------- |
| 0     | 昵称未被注册                      |
| 2001  | 该昵称已被他人使用                |
| 40002 | 昵称包含敏感信息                  |
| 40004 | 昵称不可包含除\-和_以外的特殊字符 |
| 40005 | 昵称过长                          |
| 40006 | 昵称过短                          |
| 40014 | 昵称已存在                        |

**示例：**

查询昵称 `test` 是否被使用

http://passport.bilibili.com/web/generic/check/nickname?nickName=test

```json
{
	"code":40014,
	"message":"昵称已存在"
}
```

查询昵称 `bishi` 是否被使用

http://passport.bilibili.com/web/generic/check/nickname?nickName=bishi

```json
{
    "code":40002,
    "message":"昵称包含敏感信息"
}
```



