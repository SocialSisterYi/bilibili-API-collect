# 删除动态

> https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/rm_dynamic

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（multipart/form-data）：**

| 参数名   | 类型 | 内容 |
| --- | --- | --- |
| dynamic_id | num | 动态id |
| csrf_token | str | csrf |

**json回复：**

根对象：

| 字段 | 类型 | 内容 |
| --- | --- | --- |
| code | num | 0:成功<br />500404:已经删除过<br />500406:不是自己的 |
| msg | str | 错误信息 |
| message | str | 和msg一样 |
| data | obj | 未知 |

**示例：**

删除动态`dynamic_id=588320531406678918`

```shell
curl 'https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/rm_dynamic' \
--data-urlencode 'dynamic_id=588320531406678918' \
--data-urlencode 'csrf_token=xxx' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "msg": "",
    "message": "",
    "data": {
        "_gt_": 0
    }
}
```

</details>
