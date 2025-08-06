# 表达式渲染

## LaTeX

> https://api.bilibili.com/x/web-frontend/mathjax/tex

*请求方法: GET*

暂未发现对跨源使用 `<img>` 标签使用该接口的限制

<!-- #1302 -->

**URL 参数:**

| 参数名  | 类型   | 内容 | 必要性 | 备注  |
| ------- | ------ | ---- | ------ | ----- |
| formula | string | 公式 | 非必要 | LaTeX |

**SVG 回复:**

一个完整的 SVG (image/svg+xml) 文件, 可直接用于 HTML `<img>` 或 Markdown `![]()`

**示例:**

```markdown
![](https://api.bilibili.com/x/web-frontend/mathjax/tex?formula=\pi=3.14159265358979323846...)

![](https://api.bilibili.com/x/web-frontend/mathjax/tex?formula=E=mc^2)

![](https://api.bilibili.com/x/web-frontend/mathjax/tex?formula=\ce{Fe+%2B+CuSO4+=+Cu+%2B+FeSO4})

![](https://api.bilibili.com/x/web-frontend/mathjax/tex?formula=\ce{N2(g)+%2B+3H2(g)+<=>[\text{高温、高压、催化剂}]+2NH3(g)})

![](https://api.bilibili.com/x/web-frontend/mathjax/tex?formula=S=\frac{1}{3}Sh)

![](https://api.bilibili.com/x/web-frontend/mathjax/tex?formula=y+=+\frac{1}{\dfrac{1}{x}+%2B+1} )
```

<details>
<summary>查看渲染结果:</summary>

![](https://api.bilibili.com/x/web-frontend/mathjax/tex?formula=\pi=3.14159265358979323846...)

![](https://api.bilibili.com/x/web-frontend/mathjax/tex?formula=E=mc^2)

![](https://api.bilibili.com/x/web-frontend/mathjax/tex?formula=\ce{Fe+%2B+CuSO4+=+Cu+%2B+FeSO4})

![](https://api.bilibili.com/x/web-frontend/mathjax/tex?formula=\ce{N2(g)+%2B+3H2(g)+<=>[\text{高温、高压、催化剂}]+2NH3(g)})

![](https://api.bilibili.com/x/web-frontend/mathjax/tex?formula=S=\frac{1}{3}Sh)

![](https://api.bilibili.com/x/web-frontend/mathjax/tex?formula=y+=+\frac{1}{\dfrac{1}{x}+%2B+1} )

</details>
