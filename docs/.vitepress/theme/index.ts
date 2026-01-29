import DefaultTheme from 'vitepress/theme'
import { h, onMounted, ref, nextTick } from 'vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  
  Layout() {
    // 1. 定义响应式图片变量 (默认先显示静图)
    const currentImg = ref('/Picture/avatar.jpg')

    onMounted(async () => {
      // 等待 DOM 彻底渲染
      await nextTick()

      // --- 🎲 随机图片逻辑 ---
      const images = [
        '/Picture/avatar.jpg',
        '/Picture/logo.gif'
      ];
      // 强制更新图片路径
      currentImg.value = images[Math.floor(Math.random() * images.length)];

      // --- 💬 随机语录逻辑 ---
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
      
      // 暴力查找并替换 Tagline
      const tagline = document.querySelector('.VPHero .tagline');
      if (tagline) {
        tagline.innerHTML = randomQuote;
        tagline.classList.add('hero-quote'); // 添加样式类
        tagline.style.opacity = '1'; // 确保可见
      }
    })

    // 渲染布局
    return h(DefaultTheme.Layout, null, {
      'home-hero-image': () => {
        return h('div', { class: 'hero-wrapper' }, [
          h('img', { 
            // 绑定响应式变量
            src: currentImg.value, 
            class: 'random-hero-avatar', 
            alt: 'Mizuki Bot Hero'
          })
        ])
      }
    })
  }
}