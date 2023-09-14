import { defaultTheme, defineUserConfig } from "vuepress";
import markdownItTaskLists from "markdown-it-task-lists";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  base: "/bilibili-API-collect/",
  lang: "zh-CN",
  title: "BAC Document",
  description: "社区开源的第三方哔哩哔哩 API 文档",
  head: [["link", { rel: "icon", href: "/logo2.jpg" }]],
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  theme: defaultTheme({
    logo: "/logo2.jpg",
    navbar: [
      { text: "首页", link: "/" },
      { text: "目录", link: "/#🍴目录" },
      { text: "贡献指南", link: "/CONTRIBUTING.html" },
      {
        text: "相关社群",
        children: [
          {
            text: "QQ交流群",
            link: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=2rRJXK3zgU5yi3e_4rNLeJYUjMLzw_Jj&authKey=L%2FN3EfZXo3QFjEuHq4ifTgh%2F384UmrYpjl7dbYPhYHtznhfJWxkymxQKObQunmEQ&noverify=0&group_code=560304737",
          },
          {
            text: "Telegram交流群",
            link: "https://t.me/bilibili_API_collect_community",
          },
        ],
      },
    ],
    sidebar: "auto",
    repo: "SocialSisterYi/bilibili-API-collect",
    docsBranch: "master",
    editLinkText: "在 GitHub 上编辑此页",
  }),
  plugins: [copyCodePlugin({}), searchPlugin({})],
  markdown: {
    code: {
      lineNumbers: true,
    },
  },
  extendsMarkdown: (md) => {
    md.use(markdownItTaskLists);
  },
});
