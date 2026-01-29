import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Mizuki Bot 帮助文档",
  description: "Mizuki Bot 是一款专为 PJSK (Project Sekai) 和 舞萌 DX (Maimai DX) 玩家打造的 QQ 机器人。提供查分、查榜、表情包制作、3D家园资源查询等功能。",
  lang: 'zh-CN',
  
  sitemap: {
    hostname: 'https://help.mizuki.top'
  },

  head: [
    // 浏览器标签页的小图标
    ['link', { rel: 'icon', href: '/Picture/logo.gif' }],
    
    // --- 👇👇👇 SEO 核心优化：让搜索结果显示图片 👇👇👇 ---
    // Open Graph (Facebook/Discord/必应预览图)
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:site_name', content: 'Mizuki Bot 帮助文档' }],
    ['meta', { property: 'og:title', content: 'Mizuki Bot 帮助文档' }],
    // 这里指定搜索结果显示的图片 (必须是完整链接！)
    ['meta', { property: 'og:image', content: 'https://help.mizuki.top/Picture/avatar.jpg' }],
    
    // Twitter Card (推特/部分搜索引擎预览)
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Mizuki Bot 帮助文档' }],
    ['meta', { name: 'twitter:image', content: 'https://help.mizuki.top/Picture/avatar.jpg' }],
    
    // 关键词
    ['meta', { name: 'keywords', content: 'Mizuki Bot, MizukiBot, PJSK机器人, 舞萌DX查分, Maimai查分, Project Sekai, 世界计划, QQ机器人, 帮助文档, 表情包制作' }],
    ['meta', { name: 'author', content: 'HX-Wrdzgzs' }],
    ['meta', { name: 'robots', content: 'index, follow' }]
  ],

  themeConfig: {
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
            { text: '如何使用', link: '/usage' }
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
          text: '关于',
          items: [
            { text: '贡献者与鸣谢', link: '/contribution' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HX-Wrdzgzs/MizukiBot' }
    ],

    footer: {
      message: 'Created with 🎀 by HX-Wrdzgzs',
      copyright: 'Powered by HongXingOS6'
    },
    
    search: {
      provider: 'local'
    }
  }
})