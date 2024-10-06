import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from "@vuepress/theme-default";
import markdownItTaskLists from "markdown-it-task-lists";
import { searchPlugin } from "@vuepress/plugin-search";
import { shikiPlugin } from '@vuepress/plugin-shiki'

const base = "/bilibili-API-collect/";

export default defineUserConfig({
  bundler: viteBundler(),
  base: base,
  lang: "zh-CN",
  title: "BAC Document",
  description: "社区开源的第三方哔哩哔哩 API 文档",
  head: [["link", { rel: "icon", href: base + "logo2.jpg" }]],
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
    repo: "https://github.com/SocialSisterYi/bilibili-API-collect",
    docsBranch: "master",
    editLinkText: "在 GitHub 上编辑此页",
    colorMode: "auto",
    themePlugins: {
      prismjs: false
    }
  }),
  plugins: [
    searchPlugin({}),
    shikiPlugin({
      theme: 'dark-plus',
      langs: [
        'javascript', 'typescript', 'markdown', 'protobuf', 'json', 'jsonc',
        'shell', 'go', 'html', 'http', 'java', 'kotlin', 'python', 'rust', 'c',
        'c++', 'cs', 'php', 'swift', 'text'
      ]
    })
  ],
  extendsMarkdown: (md) => {
    md.use(markdownItTaskLists);
  }
});
