module.exports = {
    base: "/bilibili-API-collect/",
    title: "BAC Document",
    description: "社区开源的第三方哔哩哔哩 API 文档",
    head: [
        ['link', { rel: 'icon', href: './logo2.jpg' }]
    ],
    locales: {
        '/': {
            lang: 'zh-CN',
        },
    },
    themeConfig: {
        logo: './logo2.jpg',
        nav: [
            {text: '首页', link: '/'},
            {text: '目录', link: '/#🍴目录'},
            {text: '贡献指南', link: '/CONTRIBUTING.html'},
            {
                text: '相关社群',
                items: [
                    {text: 'QQ交流群', link: 'https://jq.qq.com/?_wv=1027&k=s1M0LCcu'},
                    {text: 'Telegram交流群', link: 'https://t.me/bilibili_API_collect_community'}
                ]
            },
            {text: 'GitHub', link: 'https://github.com/SocialSisterYi/bilibili-API-collect'},
        ],
        sidebar: 'auto',
        smoothScroll: true
    },
    plugins: [
        '@vuepress/back-to-top',
    ],
    markdown: {
        lineNumbers: true,
        plugins: ['task-lists']
    }
}
