module.exports = {
    base: "/bilibili-API-collect/",
    locales: {
        '/': {
            lang: 'zh-CN',
        },
    },
    head: [
        ['link', { rel: 'icon', href: './logo.png' }]

    ],
    title: "bilibili-API-collect",
    description: "本项目旨在对 B站 WEB、APP、TV 等客户端中，散落在世界各地的野生 API 进行收集整理，研究使用方法并对其进行说明。",
    themeConfig: {
        nav: [
            { text: '介绍', link: '/' },
            { text: '目录', link: '/contents.html' },
            { text: 'Github', link: 'https://github.com/SocialSisterYi/bilibili-API-collect' },
        ],
        sidebar: 'auto',
    },
    plugins: ['@vuepress/back-to-top'],
}
