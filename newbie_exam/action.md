# 操作

- [提交答题](#提交答题)
  - [提交基础题](#提交基础题)
  - 提交附加题
  - 提交自选题

- 获取极验验证码
- 提交自选题分类
- 提前交卷

---

## 提交答题

### 提交基础题

> http://api.bilibili.com/x/answer/v4/base/check

*请求方式：POST*

认证方式：APP或Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名      | 类型 | 内容                     | 必要性         | 备注                                       |
| ----------- | ---- | ------------------------ | -------------- | ------------------------------------------ |
| question_id | num  | 题目id                   | 必要           | 从[拉取基础题api](fetch.md#拉取基础题)获得 |
| ans_hash    | str  | 选项hash                 | 必要           | 从[拉取基础题api](fetch.md#拉取基础题)获得 |
| csrf        | str  | CSRF Token（位于cookie） | Cookie方式必要 |                                            |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误<br />41014：答题过快或错误太多<br />41012：用户答题提交题目id不合法<br />41020：用户基础题已通过 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段   | 类型 | 内容         | 备注                                |
| ------ | ---- | ------------ | ----------------------------------- |
| passed | bool | 选项是否正确 | true：选项正确<br />false：选项错误 |

**示例：**

提交题目id为`104`的题，选项hash为`cb4c8cc9424fc771f7c1598e74de498f`

```shell
curl 'http://api.bilibili.com/x/answer/v4/base/check' \
--data-urlencode 'question_id=104' \
--data-urlencode 'ans_hash=cb4c8cc9424fc771f7c1598e74de498f' \
--data-urlencode 'csrf=xxxx' \
-b 'SESSDATA=xxxx'
```

<details>
<summary>查看响应示例：</summary>


```json  
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "passed": true
    }
}
```

</details>