# 动态操作

## 删除动态

> https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/rm_dynamic

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（multipart/form-data）：**

| 参数名     | 类型 | 内容   |
| ---------- | ---- | ------ |
| dynamic_id | num  | 动态id |
| csrf_token | str  | csrf   |

**json回复：**

根对象：

| 字段    | 类型 | 内容              |
| ------- | ---- | ----------------- |
| code    | num  | 0:成功            |
|         |      | 500404:已经删除过 |
|         |      | 500406:不是自己的 |
| msg     | str  | 错误信息          |
| message | str  | 和msg一样         |
| data    | obj  | 未知              |

<details>
<summary>查看示例</summary>


```bash
curl 'https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/rm_dynamic' \
    -X POST \
    -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0' \
    -H 'Referer: https://t.bilibili.com/' \
    -H 'Cookie: SESSDATA=********; bili_jct=de2731532b4ab96bc8536da948932668;' \
    --data-raw 'dynamic_id=588320531406678918&csrf_token=de2731532b4ab96bc8536da948932668&csrf=de2731532b4ab96bc8536da948932668'
```

```json
{
    "code":0,
    "msg":"",
    "message":"",
    "data": {
        "_gt_":0
    }
}
```

</details>

## 删除草稿

> https://api.vc.bilibili.com/dynamic_draft/v1/dynamic_draft/rm_draft

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（application/x-www-form-urlencoded）：**

| 参数名     | 类型 | 内容           |
| ---------- | ---- | -------------- |
| draft_id   | num  | 定时发送草稿id |
| csrf_token | str  | csrf           |

**json回复：**

根对象：

| 字段    | 类型 | 内容                         |
| ------- | ---- | ---------------------------- |
| code    | num  | 0:成功<br/>4120015: 系统异常 |
| message | str  | 错误信息                     |
| ttl     | num  | 1                            |
| data    | obj  | 空对象                       |

<details>
<summary>查看示例</summary>


```bash
curl -X POST 'https://api.vc.bilibili.com/dynamic_draft/v1/dynamic_draft/rm_draft' \
--data-urlencode 'draft_id=755409289278914611' \
--data-urlencode 'csrf=xxxx'
-b 'SESSDATA=xxxx;' \
```

```json
{
    "code": 0, 
 	"message": "0", 
	"ttl": 1, 
 	"data": {}
}
```

</details>

