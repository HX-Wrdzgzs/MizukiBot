import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Mizuki Bot 帮助文档",
  description: "专为 PJSK 与 舞萌 DX 玩家打造的bot助手（划掉）",
  lang: 'zh-CN',
  
  head: [
    ['link', { rel: 'icon', href: '/Picture/logo.gif' }]
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

    // 👇👇👇 侧边栏配置 (已按您要求调整顺序) 👇👇👇
    sidebar: {
      '/': [
        {
          text: '入门指南',
          items: [
            { text: '如何使用', link: '/usage' },
            // ❌ 删除这里的绑定，移到下面
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
          text: '关于与绑定', // 这里的分类名改了一下
          items: [
            { text: '🔗 落雪绑定', link: '/bind' },          // 1. 绑定在最前
            { text: '👥 贡献者与鸣谢', link: '/contribution' },// 2. 贡献在中间
          ]
        },
        {
          text: '社区规范',
          items: [
             { text: '📋 群规与公告', link: '/rules' },       // 3. 群规在贡献后
             { text: '💡 提问的智慧', link: '/asking' },      // 4. 提问在贡献后
             { text: '⚖️ 免责声明', link: '/disclaimer' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HX-Wrdzgzs/MizukiBot' }
    ],

    footer: {
      message: 'Created with ♿ by HX-Wrdzgzs',
      copyright: 'Powered by Akaboshi Lab'
    },
    
    search: {
      provider: 'local'
    }
  }
})
