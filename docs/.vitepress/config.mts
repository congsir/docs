import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'
import { version } from '../../package.json'

export default defineConfig({
  base: '/docs/',
  description: '个人博客文档站点',
  layout: 'doc', // 使用文档布局
  markdown: {
    headers: {
      level: [1, 6], // 启用所有标题层级
    },
  },
  // 默认侧边栏配置
  sidebar: sidebarMain(),
  themeConfig: {
    footer: {
      message: 'lccong个人博客',
      copyright: 'Copyright © 2023 SFXCode',
    },
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sfxcode/vitepress-blog-starter' },
    ],
    // nav: nav(),
    sidebar: sidebarMain(),
  },
  title: 'lccong个人博客',
  vite: {
    plugins: [
      Unocss({
        configFile: '../../unocss.config.ts',
      }),
    ],
  },
})

// function nav() {
//   return [
//     { text: '首页', link: '/', activeMatch: '/' },
//     { text: '指南', link: '/guide/', activeMatch: '/guide/' },
//     { text: '配置', link: '/config/', activeMatch: '/config/' },
//     { text: '项目', link: '/program/', activeMatch: '/program/' },
//     {
//       text: '文档',
//       items: [
//         {
//           text: 'VitePress',
//           link: 'https://vitepress.vuejs.org',
//         },
//         {
//           text: 'UnoCSS',
//           link: 'https://uno.antfu.me',
//         },
//       ],
//     },
//   ]
// }

function sidebarMain() {
  return [
    {
      text: '概览',
      collapsible: true,
      items: [
        { text: '首页', link: '/' },
      ],
    },
    {
      text: '项目',
      collapsible: true,
      items: [
        { text: '大屏项目', link: '/program/bigScreen' },
      ],
    },
  ]
}