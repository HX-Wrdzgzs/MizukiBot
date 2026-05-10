import DefaultTheme from 'vitepress/theme'
import { h, onMounted, ref } from 'vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  
  Layout() {
    const currentAvatar = ref('/Picture/avatar.jpg') 
    const currentQuote = ref('')
    const showAnnouncement = ref(true) 

    onMounted(() => {
      const images = ['/Picture/avatar.jpg', '/Picture/logo.gif'];
      currentAvatar.value = images[Math.floor(Math.random() * images.length)];

      const quotes = [
        "「 ボクは……ボクでいたいだけ 」<br>我只是……想做我自己罢了",
        "「 秘密って、なんだかワクワクしない？ 」<br>所谓秘密，不觉得令人有些兴奋吗？",
        "「 25時、ナイトコードで。 」<br>25时，在 Nightcord 见。",
        "「 かわいいは正義！だよね？ 」<br>可爱即正义！对吧？"
      ];
      currentQuote.value = quotes[Math.floor(Math.random() * quotes.length)];

      if (sessionStorage.getItem('hide_announcement')) {
        showAnnouncement.value = false;
      }
    })

    return h(DefaultTheme.Layout, null, {
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

      'layout-top': () => {
        // 如果需要显示公告
        return showAnnouncement.value ? h('div', null, [
          // 1. 动态注入样式，将 VitePress 的核心组件整体向下推 44px
          h('style', `
            .VPNav { top: 44px !important; }
            .VPSidebar { top: calc(var(--vp-nav-height) + 44px) !important; }
            .VPLocalNav { top: calc(var(--vp-nav-height) + 44px) !important; }
            .VPContent { margin-top: 44px !important; }
          `),
          // 2. 渲染固定的顶部公告栏
          h('div', {
            style: {
              position: 'fixed',
              top: '0',
              left: '0',
              width: '100%',
              height: '44px', // 锁定绝对高度
              backgroundColor: 'var(--vp-c-brand-soft)',
              color: 'var(--vp-c-brand-1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '14px',
              fontWeight: '500',
              borderBottom: '1px solid var(--vp-c-brand-soft)',
              zIndex: '10000' // 确保在最顶层，不会被任何人遮挡
            }
          }, [
            h('span', {
              style: {
                backgroundColor: 'var(--vp-c-brand-1)',
                color: 'white',
                padding: '2px 8px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 'bold',
                marginRight: '8px'
              }
            }, '公告'),
            h('span', null, 'Mizuki Bot 4月大更新已上线，欢迎查阅更新日志！ '),
            h('a', { 
              href: '/features/bot_update',
              style: {
                textDecoration: 'underline',
                fontWeight: 'bold',
                color: 'var(--vp-c-brand-1)',
                marginLeft: '4px'
              }
            }, '点击查看 →'),
            h('button', {
              onClick: () => {
                showAnnouncement.value = false;
                sessionStorage.setItem('hide_announcement', 'true');
              },
              style: {
                position: 'absolute',
                right: '16px',
                top: '50%',
                transform: 'translateY(-50%)', // 绝对垂直居中
                background: 'transparent',
                border: 'none',
                fontSize: '22px',
                cursor: 'pointer',
                color: 'var(--vp-c-brand-1)',
                lineHeight: '1',
                padding: '0'
              },
              ariaLabel: '关闭公告'
            }, '×')
          ])
        ]) : null
      },

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
        }, '© 2020-2026 MizukiBot Team | HongXing (Jiangsu) Dev Team. 保留所有权利。')
      }
    })
  }
}
