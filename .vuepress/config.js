module.exports = {
    base: "/bilibili-API-collect/",
    dest: 'public',
    locales: {
        '/': {
            lang: 'zh-CN',
        },
    },
    head: [
        ['link', { rel: 'icon', href: '/logo.svg' }]

    ],
    title: "哔哩哔哩-API",
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
