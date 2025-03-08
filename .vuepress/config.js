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
      { text: "贡献指南", link: "/CONTRIBUTING.html" },
      {
        text: "相关社群",
        children: [
          {
            text: "QQ交流群（综合技术交流）",
            link: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=ympvb3LAPT-Ulu3ezhGqbkJ8zXMKImOX&authKey=z1KdkOdKO3wytN43m9K6On9nBtnDL4pAoD6VQHCipFBb9TasNDKuDHCmOE6TF3uc&noverify=0&group_code=191187164",
          },
          {
            text: "Telegram交流群（Github Bot推送）",
            link: "https://t.me/bilibili_API_collect_community",
          },
        ],
      },
    ],
    sidebar: "auto",
    repo: "https://github.com/SocialSisterYi/bilibili-API-collect",
    docsBranch: "master",
    editLinkText: "在 GitHub 上编辑此页",
    colorMode: "auto"
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
