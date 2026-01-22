import DefaultTheme from 'vitepress/theme'
import { h, onMounted } from 'vue'
import './custom.css'

export default {
  extends: DefaultTheme,

  // 核心逻辑：页面加载后运行
  setup() {
    onMounted(() => {
      // ===========================================
      // 1. 随机语录逻辑
      // ===========================================
      const quotes = [
        "「 ボクは……ボクでいたいだけ 」<br>我只是……想做我自己罢了",
        "「 秘密って、なんだかワクワクしない？ 」<br>所谓秘密，不觉得令人有些兴奋吗？",
        "「 25時、ナイトコードで。 」<br>25时，在 Nightcord 见。",
        "「 かわいいは正義！だよね？ 」<br>可爱即正义！对吧？",
        "「 ボクのこと、知りたい？ 」<br>想知道，关于我的事吗？",
        "「 逃げ続けるのも、悪くないかもね 」<br>一直逃避下去，或许也不坏呢",
        "「 君も、こっち側に来る？ 」<br>你也要，来这边吗？"
      ];
      
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      
      // 延时替换语录
      setTimeout(() => {
        const tagline = document.querySelector('.VPHero .tagline');
        if (tagline) {
          tagline.innerHTML = randomQuote;
          tagline.classList.add('hero-quote');
        }
      }, 50);

      // ===========================================
      // 2. 随机头像逻辑 (修复版)
      // ===========================================
      
      // 👇👇👇 以后想加图片，就在这里加逗号，继续写路径 👇👇👇
      const images = [
        '/Picture/avatar.jpg',
        '/Picture/logo.gif'
        // '/Picture/3.jpg', 
        // '/Picture/4.png' 
      ];
      
      // 随机选一张
      const randomImg = images[Math.floor(Math.random() * images.length)];
      
      // 找到图片元素并替换 src
      const avatarImg = document.getElementById('random-avatar-img') as HTMLImageElement;
      if (avatarImg) {
        avatarImg.src = randomImg;
      }
    })
  },

  // 布局渲染
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'home-hero-image': () => {
        return h('div', { class: 'hero-wrapper' }, [
          // 默认先渲染 avatar.jpg，防止空白
          // 加上 id="random-avatar-img" 方便上面 setup() 里的代码找到它
          h('img', { 
            id: 'random-avatar-img', 
            src: '/Picture/avatar.jpg', 
            class: 'random-hero-avatar', 
            alt: 'Mizuki Bot Hero'
          })
        ])
      }
    })
  }
}