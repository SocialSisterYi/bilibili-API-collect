# protobuf历史弹幕

* * *

近日B站xml历史弹幕接口不能用了。参考[issues-147](https://github.com/SocialSisterYi/bilibili-API-collect/issues/147)  

**注:以下内容是F12抓的，不保证内容完整。**

## 接口：

>web端[http://api.bilibili.com/x/v2/dm/web/history/seg.so](http://api.bilibili.com/x/v2/dm/web/history/seg.so)

请求方式:GET

认证方式:Cookie (SESSDATA)

URL参数：

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| --- | --- | --- | --- | --- |
| type | num | 弹幕类 | 必要 | 视频为1 |
| oid | num | 视频cid | 必要 |  |
| date | str | 日期 | 必要 | YYYY-MM-DD |

示例：

无，请参考[protobuf实时弹幕](danmaku_proto.md#获取实时弹幕)
弹幕文件格式和例程可以直接拿来用
