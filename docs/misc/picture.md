# 图片格式化

已知 `*.hdslb.com` `*.biliimg.com` 等域名作用等效, 对于请求头 `Referer` 要求留空或在 `.bilibili.com` 等 B 站域名下 <!--(所以 B 站图床 img 标签要加上 `referrerpolicy="no-referrer"`)-->

对于以上域名的 `/bfs/` 下的图片文件都可以使用以下可选格式化参数

使用 `@` 开始参数 (无论格式如何, 无论是否有参数, 通过计算 HASH 发现, 使用 `@` 均会导致返回图片不同), 多个参数以 `_` 分隔, 图片格式无需分隔且必须放在最后

参见: [#191](https://github.com/SocialSisterYi/bilibili-API-collect/issues/191)

注: jpg 即 jpeg, 二者等效. 网页端常用 AVIF, WebP.

| 参数 | 格式    | 含义             | 备注             |
| ---- | ------- | ---------------- | ---------------- |
| w    | ${int}w | 图片最大限制宽度 | 范围 [1, 9223372036854775807] |
| h    | ${int}h | 图片最大限制高度 | 范围 [1, 9223372036854775807] |
| s    | ${int}s | 作用尚不明确     | 不影响输出结果, 范围 [1, 9223372036854775807] |
| e    | ${int}e | 改变大小         | 0: 保留比例取其小, 1: 保留比例取其大, 2: 不保留原比例 |
| p    | ${int}p | 缩放倍数        | 默认100, 范围 [1, 1000] |
| o    | ${int}o | 作用尚不明确     | 不影响输出结果 范围 [0, 1] |
| q    | ${int}q | 图片质量百分比   | 仅限webp/jpeg/avif         |
| c    | ${int}c | 裁切图片(如果宽高允许)        | 0: 不裁切但会修改图片, 1: 上传时的预设规则(若无则右下), 2: 左上, 3: 右上 |
| f    | ${int}f | 作用尚不明确     | [0, 1]: 不改变图片, 2: 会改变图片 |
| progressive | progressive | 图片编码方式 | 仅限 jpeg(无: baseline, 有: progressive)/png(无:non-interlaced, 有: interlaced) |
| !    | !${str} | 加载来源         | web-home-carousel-cover, header, web-dynamic, web-avatar-space-header, ... |
| .    | .${str} | 图片格式         | 仅限 png/jpeg/webp/avif/[avg_color](#avg_color格式说明) |

**示例：**

<details>
<summary>查看示例:</summary>

原始图片

https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg

<img src="https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg" referrerpolicy="no-referrer" />

高度限制为100

https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg@100h

<img src="https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg@100h" referrerpolicy="no-referrer" />

宽度限制为100

https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg@100w

<img src="https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg@100w" referrerpolicy="no-referrer" />

转换格式为webp

https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg@.webp

<img src="https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg@.webp" referrerpolicy="no-referrer" />

转换为webp图片质量为1%

https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg@1q.webp

<img src="https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg@1q.webp" referrerpolicy="no-referrer" />
</details>

## avg_color格式说明

当图片格式化输出格式为`avg_color`时

> /bfs/\*/\*.*@\*.avg_color

*请求方式：GET*

**json回复：**

根对象：

| 字段   | 类型 | 内容         | 备注   |
| ------ | ---- | ----------- | ------ |
| RGB    | str  | 平均颜色值   | HEX    |

**示例：**

获取 https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg 的平均颜色值

```shell
curl 'https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg@.avg_color'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "RGB": "#7d6f6c"
}
```

</details>
