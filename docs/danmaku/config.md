# 弹幕个人配置修改

## 修改弹幕个人配置（web端）

> https://api.bilibili.com/x/v2/dm/web/config

*请求方式：POST*

认证方式：Cookie（SESSDATA）或APP

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名       | 类型   | 内容                     | 必要性         | 备注                                                         |
| ------------ | ------ | ------------------------ | -------------- | ------------------------------------------------------------ |
| access_key   | str    | APP登录Token             | APP方式必要    |                                                              |
| dm_switch    | bool   | 弹幕开关                 | 非必要         | true：开启<br />false：关闭                                  |
| blockscroll  | bool   | 屏蔽类型-滚动            | 非必要         | true：不屏蔽<br />false：屏蔽                                |
| blocktop     | bool   | 屏蔽类型-顶部            | 非必要         | 同上                                                         |
| blockbottom  | bool   | 屏蔽类型-底部            | 非必要         | 同上                                                         |
| blockcolor   | bool   | 屏蔽类型-彩色            | 非必要         | 同上                                                         |
| blockspecial | bool   | 屏蔽类型-特殊            | 非必要         | 同上                                                         |
| ai_switch    | bool   | 是否打开智能云屏蔽       | 非必要         | true：开启<br />false：关闭                                  |
| ai_level     | num    | 智能云屏蔽等级           | 非必要         | 区间：[0-10]<br />0为默认等级（3级）                         |
| preventshade | bool   | 防挡弹幕（底部15%）      | 非必要         | true：开启<br />false：关闭                                  |
| dmask        | bool   | 智能防挡弹幕（人像蒙版） | 非必要         | 同上                                                         |
| opacity      | num    | 弹幕不透明度             | 非必要         | 区间：[0-1]                                                  |
| dmarea       | num    | 弹幕显示区域             | 非必要         | 100：不重叠<br />75：3/4屏<br />50：半瓶<br />25：1/4屏<br />0：不限 |
| speedplus    | num    | 弹幕速度                 | 非必要         | 区间：[0.4-1.6]                                              |
| fontsize     | num    | 字体大小                 | 非必要         | 区间：[0.4-1.6]                                              |
| screensync   | bool   | 跟随屏幕缩放比例         | 非必要         | true：开启<br />false：关闭                                  |
| speedsync    | bool   | 根据播放倍速调整速度     | 非必要         | 同上                                                         |
| fontfamily   | str    | 字体类型                 | 非必要         | 未启用                                                       |
| bold         | bool   | 粗体                     | 非必要         | 未启用                                                       |
| fontborder   | num    | 描边类型                 | 非必要         | 0：重墨<br />1：描边<br />2：45°投影                         |
| drawType     | string | 渲染类型                 | 非必要         | 未启用                                                       |
| ts           | num    | 当前时间戳               | 非必要         |                                                              |
| csrf         | str    | CSRF Token（位于cookie） | Cookie方式必要 |                                                              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />23004：数据没有修改 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

关闭弹幕

```shell
curl 'https://api.bilibili.com/x/v2/dm/web/config' \
--data-urlencode 'dm_switch=false' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code":0,
    "message":"0",
    "ttl":1
}
```

</details>