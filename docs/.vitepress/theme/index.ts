import DefaultTheme from 'vitepress/theme'
import { h, onMounted, ref } from 'vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  
  Layout() {
    const currentAvatar = ref('/Picture/avatar.jpg') 
    const currentQuote = ref('')

    onMounted(() => {
      // 🎲 随机头像逻辑
      const images = ['/Picture/avatar.jpg', '/Picture/logo.gif'];
      currentAvatar.value = images[Math.floor(Math.random() * images.length)];

      // 💬 随机语录逻辑
      const quotes = [
        "「 ボクは……ボクでいたいだけ 」<br>我只是……想做我自己罢了",
        "「 秘密って、なんだかワクワクしない？ 」<br>所谓秘密，不觉得令人有些兴奋吗？",
        "「 25時、ナイトコードで。 」<br>25时，在 Nightcord 见。",
        "「 かわいいは正義！だよね？ 」<br>可爱即正义！对吧？"
      ];
      currentQuote.value = quotes[Math.floor(Math.random() * quotes.length)];
    })

    return h(DefaultTheme.Layout, null, {
      // 1. 原有的首页随机头像
      'home-hero-image': () => {
        return h('div', { class: 'hero-wrapper' }, [
          h('img', { 
            src: currentAvatar.value, 
            class: 'random-hero-avatar', 
            alt: 'Hero'
          }),
          h('div', {
            class: 'my-custom-quote',
            innerHTML: currentQuote.value
          })
        ])
      },

      // 2. 漂亮版：全站顶部全局公告 (像大厂官网一样的横幅)
      'layout-top': () => {
        return h('div', {
          style: {
            backgroundColor: 'var(--vp-c-brand-soft)',
            color: 'var(--vp-c-brand-1)',
            padding: '10px 16px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            fontSize: '14px',
            fontWeight: '500',
            borderBottom: '1px solid var(--vp-c-brand-soft)'
          }
        }, [
          h('span', {
            style: {
              backgroundColor: 'var(--vp-c-brand-1)',
              color: 'white',
              padding: '2px 8px',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: 'bold'
            }
          }, '📢 公告'),
          h('span', null, 'Mizuki Bot 4月大更新已上线，欢迎查阅更新日志！'),
          h('a', { 
            href: '/features/bot_update',
            style: {
              textDecoration: 'underline',
              fontWeight: 'bold',
              color: 'var(--vp-c-brand-1)'
            }
          }, '点击查看 →')
        ])
      },

      // 3. 强制全局显示的页脚 (覆盖所有页面，包括文档页)
      'layout-bottom': () => {
        return h('div', {
          style: {
            textAlign: 'center',
            padding: '30px 20px',
            fontSize: '14px',
            color: 'var(--vp-c-text-2)',
            borderTop: '1px solid var(--vp-c-divider)',
            backgroundColor: 'var(--vp-c-bg)',
            width: '100%',
            marginTop: 'auto'
          }
        }, '© 2018-2026 MizukiBot Team | HongXing (Jiangsu) Dev Team. 保留所有权利。')
      }
    })
  }
}
