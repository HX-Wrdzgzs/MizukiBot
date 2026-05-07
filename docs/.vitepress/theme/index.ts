import DefaultTheme from 'vitepress/theme'
import { h, onMounted, ref } from 'vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  
  Layout() {
    const currentAvatar = ref('/Picture/avatar.jpg') 
    const currentQuote = ref('')
    // 新增：控制公告显示状态的变量
    const showAnnouncement = ref(true) 

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

      // 检查当前会话是否已经关闭过公告
      if (sessionStorage.getItem('hide_announcement')) {
        showAnnouncement.value = false;
      }
    })

    return h(DefaultTheme.Layout, null, {
      // 1. 首页随机头像
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

      // 2. 带有关闭按钮的全局公告
      'layout-top': () => {
        // 如果 showAnnouncement 为 false，则渲染 null（隐藏公告）
        return showAnnouncement.value ? h('div', {
          style: {
            backgroundColor: 'var(--vp-c-brand-soft)',
            color: 'var(--vp-c-brand-1)',
            padding: '10px 40px 10px 16px', // 右侧留出 40px 给关闭按钮
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            fontSize: '14px',
            fontWeight: '500',
            borderBottom: '1px solid var(--vp-c-brand-soft)',
            position: 'relative' // 为关闭按钮的绝对定位做参照
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
          // ✖ 关闭按钮
          h('button', {
            onClick: () => {
              showAnnouncement.value = false; // 隐藏界面
              sessionStorage.setItem('hide_announcement', 'true'); // 记录到缓存
            },
            style: {
              position: 'absolute',
              right: '16px',
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
        ]) : null
      },

      // 3. 强制全局显示的页脚
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
