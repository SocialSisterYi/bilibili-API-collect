# 直播APP电池任务

- [获取任务进度](#获取任务进度)
- [领取电池任务](#领取电池)

> 需要发送五条弹幕才能领取
> 部分用户没有该任务

## 获取任务进度

> https://api.live.bilibili.com/xlive/app-ucenter/v1/userTask/GetUserTaskProgress 

_请求方式：GET_

认证方式： APP

**url 参数：**

无

**json 回复：**

根对象：

|字段|类型|内容|备注|
|--|--|--|--|
|code|num|返回值|0：成功<br/>-1002002：参数异常<br/>-500：服务器异常|
|message|str|错误信息|默认为 "0"|
|ttl|str|1||
|data|obj|信息本体||

`data`对象：

|字段|类型|内容|备注|
|--|--|--|--|
|is_surplus|num|任务状态<br/>-1:用户没有此任务<br/>1:任务进行中<br/>||
|status|num|状态:<br/>0:未完成<br/>1:进行中<br/>2:可领取<br/>3:已领取||
|progress|num|每日任务(发送弹幕)进度||
|target|num|每日任务(发送弹幕)数量||
|wallet|obj|钱包||
|linked_actions_progress|?|未知|有时候请求没有此字段|
|week_task|obj|每周任务|有可能为空|
|week_total|num|每周累计天数||
|week_group|num|未知||
|day_task|obj|每日任务||

`wallet`对象:

|字段|类型|内容|备注|
|--|--|--|--|
|gold|num|电池数|后两位为小数，如 `100` = `1电池`|
|silver|num|银瓜子数量||

`week_task`对象:

|字段|类型|内容|备注|
|--|--|--|--|
|reward_num|num|奖励电池数||
|minimal_day|num|需要完成天数||
|status|num|状态:<br/>0:未完成<br/>2:可领取<br/>3:已领取||
|id|num|任务id||

`day_task`对象:

|字段|类型|内容|备注|
|--|--|--|--|
|status|num|状态:<br/>0:未完成<br/>1:进行中<br/>2:可领取<br/>3:已领取||
|progress|num|每日任务(发送弹幕)进度||
|target|num|每日任务(发送弹幕)数量||

<br/>


<details>
<summary>查看响应示例：</summary>

未开始
```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "is_surplus": 1,
        "status": 0,
        "progress": 0,
        "target": 5,
        "wallet": {
            "gold": 18600,
            "silver": 49592
        },
        "linked_actions_progress": null,
        "week_task": [
            {
                "reward_num": 1,
                "minimal_day": 3,
                "status": 3,
                "id": 1
            },
            {
                "reward_num": 2,
                "minimal_day": 5,
                "status": 0,
                "id": 2
            },
            {
                "reward_num": 3,
                "minimal_day": 7,
                "status": 0,
                "id": 3
            }
        ],
        "week_total": 3,
        "week_group": 1,
        "day_task": {
            "status": 0,
            "progress": 0,
            "target": 5
        }
    }
}
```
每日任务进行中
```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "is_surplus": 1,
        "status": 1,
        "progress": 2,
        "target": 5,
        "wallet": {
            "gold": 18600,
            "silver": 49592
        },
        "week_task": [
            {
                "reward_num": 1,
                "minimal_day": 3,
                "status": 3,
                "id": 1
            },
            {
                "reward_num": 2,
                "minimal_day": 5,
                "status": 0,
                "id": 2
            },
            {
                "reward_num": 3,
                "minimal_day": 7,
                "status": 0,
                "id": 3
            }
        ],
        "week_total": 3,
        "week_group": 1,
        "day_task": {
            "status": 1,
            "progress": 2,
            "target": 5
        }
    }
}
```
每日任务完成
```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "is_surplus": 1,
        "status": 2,
        "progress": 5,
        "target": 5,
        "wallet": {
            "gold": 18700,
            "silver": 49592
        },
        "week_task": [
            {
                "reward_num": 1,
                "minimal_day": 3,
                "status": 3,
                "id": 1
            },
            {
                "reward_num": 2,
                "minimal_day": 5,
                "status": 0,
                "id": 2
            },
            {
                "reward_num": 3,
                "minimal_day": 7,
                "status": 0,
                "id": 3
            }
        ],
        "week_total": 4,
        "week_group": 1,
        "day_task": {
            "status": 2,
            "progress": 5,
            "target": 5
        }
    }
}
```
</details>

## 领取电池

> https://api.live.bilibili.com/xlive/app-ucenter/v1/userTask/UserTaskReceiveRewards 

_请求方式：POST_

认证方式： APP

**url 参数：**

|字段|类型|内容|备注|
|--|--|--|--|
|access_key|str|APP登录Token||
|actionKey|str|appkey||
|appkey|str|1d8b6e7d45233436|[APPKEY，参考这里](https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/other/API_sign.md#%E5%B7%B2%E7%9F%A5%E7%9A%84appkey)|
|build|str|7120200|APP build号|
|c_locale|str|zh_CN||
|channel|str|xiaomi_cn_tv.danmaku.bili_20210930|或其他APP渠道号|
|device|str|android||
|disable_rcmd|num|0||
|mobi_app|str|android||
|platform|str|android||
|s_locale|str|zh_CN||
|statistics|str|{"appId":1,"platform":3,"version":"7.12.0","abtest":""}|需要URLEncoder|
|ts|num|1672917355|时间戳，单位秒|
|target_id|num|1022|可任意直播房间号|
|reward_index|str|0|任务id<br/>0:每日任务<br/>1~3:每周任务id|
|sign|str|签名|将以上内容根据字典顺序键值对进行`md5签名` [签名顺序参考](https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/other/API_sign.md)|

**Header 参数:**

|字段|内容|备注|
|--|--|--|
|APP-KEY|android64||
|Accept-Encoding|gzip, deflate, br||
|Connection|keep-alive||
|Content-Type|application/x-www-form-urlencoded; charset=utf-8||
|Host|api.live.bilibili.com||
|User-Agent|Mozilla/5.0 BiliDroid/7.4.0 (bbcallen@gmail.com) os/android model/22061218C mobi_app/android build/7040300 channel/xiaomi_cn_tv.danmaku.bili_20210930 innerVer/7040310 osVer/12 network/2||
|bili-http-engine|cronet||
|buvid|buvid3|web端为操作登录接口时Cookie中的`buvid3`<br/>若登录设备无`buvid`则留空|
|env|prod||
|fp_local|992219737dd69e7d98864235335347c53476691d4482fc3e57a835e894751811|64位随机|
|fp_remote|992219737dd69e7d98864235335347c53476691d4482fc3e57a835e894751811|64位随机,同fp_local|
|session_id|99221973|fp_local头8个字符|
|x-bili-aurora-eid|WFICRlE=||
|x-bili-aurora-zone||留空|
|x-bili-mid|0|用户uid|
|x-bili-trace-id|992219737dd69e7d98864235335347c5:3476691d4482fc3e:0:0|32随机:16随机:0:0|


<details>
<summary>x-bili-trace-id、fp_local、session_id字段，建议用两个`md5`来拼接，如：</summary>

```java
String md5_1 = getMD5(System.currentTimeMillis());
String md5_2 = getMD5(System.currentTimeMillis());
String trace_id = md5_1 + ":" + md5_2.substring(0, 16) + ":0:0";
String session_id = md5_1.substring(0, 8);
String fp_local = md5_1 + md5_2;
```
</details>


**json 回复：**

_需要Brotli解压_

根对象：

|字段|类型|内容|备注|
|--|--|--|--|
|code|num|返回值|0：成功<br/>-1002002：参数异常<br/>-500：服务器异常 <br/>27000002:已领取过|
|message|str|错误信息|默认为 "0"|
|ttl|str|1||
|data|obj|信息本体||

`data`对象：

|字段|类型|内容|备注|
|--|--|--|--|
|num|num|领取电池数||



<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "num": 1
    }
}
```
```json
{
    "code": 27000002,
    "message": "领取失败，请重试",
    "ttl": 1,
    "data": {
        "num": 0
    }
}
```

</details>
