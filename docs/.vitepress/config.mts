import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'
import { version } from '../../package.json'

export default defineConfig({
  base: '/vitepress-blog-starter/',
  description: '个人博客文档站点',
  markdown: {
    headers: {
      level: [1, 6], // 启用所有标题层级
    },
  },
  themeConfig: {
    layout: 'doc', // 使用文档布局
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
    nav: nav(),
    sidebar: {
      // 为不同路径配置不同的侧边栏
      '/': sidebarMain(),
      '/guide/': sidebarGuide(),
      '/config/': sidebarConfig(),
      '/program/': sidebarProgram()
    }
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

function nav() {
  return [
    { text: '首页', link: '/', activeMatch: '/' },
    { text: '指南', link: '/guide/', activeMatch: '/guide/' },
    { text: '配置', link: '/config/', activeMatch: '/config/' },
    { text: '项目', link: '/program/', activeMatch: '/program/' },
    {
      text: '文档',
      items: [
        {
          text: 'VitePress',
          link: 'https://vitepress.vuejs.org',
        },
        {
          text: 'UnoCSS',
          link: 'https://uno.antfu.me',
        },
      ],
    },
  ]
}

function sidebarMain() {
  return [
    {
      text: '概览',
      collapsible: true,
      items: [
        { text: '首页', link: '/' },
        { text: '简介', link: '/guide/intro' },
      ],
    },
    {
      text: '指南',
      collapsible: true,
      items: [
        { text: '入门', link: '/guide/' },
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

function sidebarGuide() {
  return [
    {
      text: '介绍',
      collapsible: true,
      items: [
        { text: '指南首页', link: '/guide/' },
        { text: '简介', link: '/guide/intro' },
      ],
    },
    {
      text: '特性',
      collapsible: true,
      items: [
        { text: 'UnoCSS', link: '/guide/features/unocss' },
      ],
    },
  ]
}

function sidebarConfig() {
  return [
    {
      text: '配置',
      items: [
        { text: '配置首页', link: '/config/' },
        { text: 'UnoCSS配置', link: '/config/unocss' },
      ],
    },
  ]
}

function sidebarProgram() {
  return [
    {
      text: '项目展示',
      items: [
        { text: '大屏项目', link: '/program/bigScreen' },
      ],
    },
  ]
}
