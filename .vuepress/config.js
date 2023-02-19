import { defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { defaultTheme } from 'vuepress'
export default defineUserConfig({
    base: '/bilibili-API-collect/',
    publicPath: '/bilibili-API-collect/',
    lang: 'zh-CN',
    title: 'Note',
    description: '哔哩哔哩-API收集整理',
    head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
    port: 8081,
    plugins: [
        backToTopPlugin(),
    ],
    markdown: {
        headers: {
            level: [2, 3, 4, 5],
        },
    },
    theme: defaultTheme({
        // 导航栏
        navbar: [
            {
                text: '介绍',
                link: '/',
            },
            {
                text: 'Github',
                link: '',
            },
        ],
    }),
})
