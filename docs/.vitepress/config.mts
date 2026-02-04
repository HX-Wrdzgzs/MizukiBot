import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Mizuki Bot 帮助文档",
  description: "专为 PJSK 与 舞萌 DX 玩家打造的bot助手（划掉）",
  lang: 'zh-CN',
  
  head: [
    ['link', { rel: 'icon', href: '/Picture/logo.gif' }]
  ],

  themeConfig: {
    // 确保这里是 .gif
    logo: '/Picture/logo.gif',
    siteTitle: 'Mizuki Bot 帮助文档',

    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/usage' },
      { 
        text: '功能大全', 
        items: [
          { text: 'PJSK 相关', link: '/features/pjsk' },
          { text: '舞萌 DX', link: '/features/maimai' },
          { text: '表情制作', link: '/features/meme' },
          { text: '通用工具', link: '/features/tools' }
        ]
      },
      { text: '贡献榜', link: '/contribution' }
    ],

    sidebar: {
      '/': [
        {
          text: '入门指南',
          items: [
            { text: '如何使用', link: '/usage' },
            { text: '🔗 落雪绑定', link: '/bind' }  // ✅ 新增绑定页
          ]
        },
        {
          text: '功能文档',
          items: [
            { text: 'PJSK 相关功能', link: '/features/pjsk' },
            { text: '舞萌 DX 专项', link: '/features/maimai' },
            { text: '表情制作系统', link: '/features/meme' },
            { text: '通用工具与娱乐', link: '/features/tools' }
          ]
        },
        {
          text: '关于与规范',  // ✅ 新增分类
          items: [
            { text: '📋 群规与公告', link: '/rules' },    // ✅ 新增群规
            { text: '💡 提问的智慧', link: '/asking' },   // ✅ 新增提问
            { text: '贡献者与鸣谢', link: '/contribution' },
            { text: '免责声明', link: '/disclaimer' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HX-Wrdzgzs/MizukiBot' }
    ],

    footer: {
      message: 'Created with ♿ by HX-Wrdzgzs',
      copyright: 'Powered by Akaboshi Lab' // ✅ 已更新为 Akaboshi Lab
    },
    
    search: {
      provider: 'local'
    }
  }
})
