# 图片格式化

对于\*.hdslb.com/bfs下的图片文件都可以使用以下格式化参数

> \*.hdslb.com/bfs/\*/\*.\[jpg/png/gif\]@{width}w\_{high}h\_{quality}q.{format}

| 可选参数 | 含义             | 备注             |
| -------- | ---------------- | ---------------- |
| width    | 图片最大限制宽度 |                  |
| high     | 图片最大限制高度 |                  |
| quality  | 图片质量百分比   | 仅限webp         |
| format   | 图片格式         | 仅限png/jpg/webp |

**示例：**

原始图片

https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg

![](https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg)

高度限制为100

https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg@100h

![](https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg@100h)

宽度限制为100

https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg@100w

![](https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg@100w)

转换格式为webp

https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg@.webp

![](https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg@.webp)

转换为webp图片质量为1%

https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg@1q.webp

![](https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg@1q.webp)