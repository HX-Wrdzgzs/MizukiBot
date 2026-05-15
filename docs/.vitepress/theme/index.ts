import DefaultTheme from 'vitepress/theme'
import { h, onMounted, ref, nextTick } from 'vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  
  Layout() {
    const currentQuote = ref('')
    // 初始设为 false 防止服务端渲染时闪烁，在 onMounted 中恢复
    const showAnnouncement = ref(false) 

    onMounted(() => {
      // 随机语录逻辑
      const quotes = [
        "「 ボクは……ボクでいたいだけ 」<br>我只是……想做我自己罢了",
        "「 秘密って、なんだかワクワクしない？ 」<br>所谓秘密，不觉得令人有些兴奋吗？",
        "「 25時、ナイトコードで。 」<br>25时，在 Nightcord 见。",
        "「 かわいいは正義！だよね？ 」<br>可爱即正义！对吧？"
      ];
      currentQuote.value = quotes[Math.floor(Math.random() * quotes.length)];

      // 检查是否已关闭公告
      if (!sessionStorage.getItem('hide_announcement')) {
        showAnnouncement.value = true;
        
        // 关键修复：动态监听公告栏的实际高度（完美适配手机端多行文字）
        nextTick(() => {
          const banner = document.getElementById('mzk-banner');
          if (banner) {
            const observer = new ResizeObserver(entries => {
              for (let entry of entries) {
                const height = entry.borderBoxSize?.[0]?.blockSize || entry.contentRect.height;
                // 利用 VitePress 原生变量完美向下推移导航栏和正文
                document.documentElement.style.setProperty('--vp-layout-top-height', `${height}px`);
              }
            });
            observer.observe(banner);
          }
        });
      } else {
        document.documentElement.style.setProperty('--vp-layout-top-height', `0px`);
      }
    })

    // 关闭公告的触发函数
    const closeBanner = () => {
      showAnnouncement.value = false;
      sessionStorage.setItem('hide_announcement', 'true');
      document.documentElement.style.setProperty('--vp-layout-top-height', `0px`);
    };

    return h(DefaultTheme.Layout, null, {
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

      'layout-top': () => {
        if (!showAnnouncement.value) return null;

        return h('div', {
          id: 'mzk-banner',
          style: {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            minHeight: '44px', // 手机端会自动撑高
            backgroundColor: 'var(--vp-c-bg)', // 纯色防透底
            color: 'var(--vp-c-brand-1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px 45px 10px 15px', // 右侧留出45px给关闭按钮，防止文字挤压
            boxSizing: 'border-box',
            borderBottom: '1px solid var(--vp-c-divider)',
            zIndex: '100000',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }
        }, [
          h('div', { 
            // 手机端自适应排版容器
            style: { 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              flexWrap: 'wrap', 
              gap: '6px',
              fontSize: '13px', 
              lineHeight: '1.6' 
            } 
          }, [
            h('span', {
              style: {
                backgroundColor: 'var(--vp-c-brand-1)',
                color: 'white',
                padding: '2px 6px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: 'bold',
                whiteSpace: 'nowrap'
              }
            }, '📢 公告'),
            h('span', null, 'Mizuki Bot 4月大更新已上线，欢迎查阅更新日志！'),
            h('a', { 
              href: '/features/bot_update',
              style: { textDecoration: 'underline', fontWeight: 'bold', color: 'var(--vp-c-brand-1)', whiteSpace: 'nowrap' }
            }, '点击查看 →')
          ]),
          h('button', {
            onClick: closeBanner,
            style: {
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'transparent',
              border: 'none',
              fontSize: '22px',
              cursor: 'pointer',
              color: 'var(--vp-c-text-2)',
              lineHeight: '1',
              padding: '0'
            },
            ariaLabel: '关闭公告'
          }, '×')
        ])
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
