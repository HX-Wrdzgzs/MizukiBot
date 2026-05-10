import DefaultTheme from 'vitepress/theme'
import { h, onMounted, ref } from 'vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  
  Layout() {
    const currentQuote = ref('')
    const showAnnouncement = ref(true) 
    
    // 强制修正其他组件偏移的样式
    const styleOverride = `
      .VPNav { top: 44px !important; transition: top 0.1s ease; }
      .VPLocalNav { top: calc(var(--vp-nav-height) + 44px) !important; transition: top 0.1s ease; }
      .VPSidebar { top: calc(var(--vp-nav-height) + 44px) !important; transition: top 0.1s ease; }
      .VPContent { margin-top: 44px !important; transition: margin-top 0.1s ease; }
    `;

    onMounted(() => {
      // 初始化检查是否已手动关闭公告
      if (sessionStorage.getItem('hide_announcement')) {
        showAnnouncement.value = false;
      }

      // 随机语录逻辑
      const quotes = [
        "「 ボクは……ボクでいたいだけ 」<br>我只是……想做我自己罢了",
        "「 秘密って、なんだかワクワクしない？ 」<br>所谓秘密，不觉得令人有些兴奋吗？",
        "「 25時、ナイトコードで。 」<br>25时，在 Nightcord 见。",
        "「 かわいいは正義！だよね？ 」<br>可爱即正义！对吧？"
      ];
      currentQuote.value = quotes[Math.floor(Math.random() * quotes.length)];
    })

    return h(DefaultTheme.Layout, null, {
      // 首页 Hero 头像固定为 avatar.jpg
      'home-hero-image': () => {
        return h('div', { class: 'hero-wrapper' }, [
          h('img', { 
            src: '/Picture/avatar.jpg', 
            class: 'random-hero-avatar', 
            alt: 'Hero Logo'
          }),
          h('div', {
            class: 'my-custom-quote',
            innerHTML: currentQuote.value
          })
        ])
      },

      // 置顶公告栏
      'layout-top': () => {
        if (!showAnnouncement.value) return null;

        return h('div', null, [
          h('style', styleOverride),
          h('div', {
            style: {
              position: 'fixed',
              top: '0',
              left: '0',
              width: '100%',
              height: '44px',
              backgroundColor: 'var(--vp-c-bg)', // 使用纯色背景防止透字
              color: 'var(--vp-c-brand-1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              fontSize: '14px',
              fontWeight: '500',
              borderBottom: '2px solid var(--vp-c-brand-1)',
              zIndex: '10000',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
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
            }, '点击查看 →'),
            h('button', {
              onClick: () => {
                showAnnouncement.value = false;
                sessionStorage.setItem('hide_announcement', 'true');
              },
              style: {
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
                color: 'var(--vp-c-brand-1)',
                lineHeight: '1',
                padding: '0'
              },
              ariaLabel: '关闭公告'
            }, '×')
          ])
        ])
      },

      // 全局页脚
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
