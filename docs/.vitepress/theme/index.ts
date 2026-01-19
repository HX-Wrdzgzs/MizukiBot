import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 劫持首页图片区域
      'home-hero-image': () => {
        // 定义图片池
        const images = [
          '/Picture/avatar.jpg', // 静图
          '/Picture/logo.gif'    // 动图
        ];
        
        // 随机取一张
        const randomImg = images[Math.floor(Math.random() * images.length)];

        // 渲染图片
        return h('img', { 
          src: randomImg, 
          class: 'random-hero-avatar', 
          alt: 'Mizuki Bot Hero'
        })
      }
    })
  }
}