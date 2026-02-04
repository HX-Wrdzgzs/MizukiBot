import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Mizuki Bot 帮助文档",
  description: "专为 PJSK 与 舞萌 DX 玩家打造的bot助手",
  lang: 'zh-CN',
  
  head: [
    ['link', { rel: 'icon', href: '/Picture/logo.gif' }]
  ],

  themeConfig: {
    // 这里设置网站左上角的小图标
    logo: '/Picture/logo.gif',
    siteTitle: 'Mizuki Bot 帮助文档',

    // 👇 1. 顶部导航栏 (Nav) 配置
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
      // 👇 下滑栏/顶部菜单显示新页面 👇
      { 
        text: '关于与规范', 
        items: [
           { text: '贡献榜', link: '/contribution' },
           { text: '群规', link: '/rules' },
           { text: '提问智慧', link: '/asking' }
        ]
      }
    ],

    // 👇 2. 侧边栏 (Sidebar) 配置
    sidebar: {
      '/': [
        {
          text: '入门指南',
          items: [
            { text: '如何使用', link: '/usage' },
            { text: '🔗 落雪绑定', link: '/bind' } // ✅ 绑定页在这里
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
          text: '关于与规范',
          items: [
            { text: '👥 贡献者与鸣谢', link: '/contribution' },
            { text: '📋 群规与公告', link: '/rules' }, // ✅ 群规页
            { text: '💡 提问的智慧', link: '/asking' }, // ✅ 提问页
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
