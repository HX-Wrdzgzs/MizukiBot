<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-before>
      <div class="global-announcement">
        <span class="announcement-tag">公告</span>
        <span class="announcement-content">Mizuki Bot 4月大更新已上线，欢迎查阅更新日志！</span>
        <a href="/features/bot_update" class="announcement-link">点击查看 →</a>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.global-announcement {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-brand-1);
  padding: 12px 20px;
  border-radius: 8px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
}

.announcement-tag {
  background-color: var(--vp-c-brand-1);
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 12px;
}

.announcement-content {
  flex: 1;
  color: var(--vp-c-text-1);
}

.announcement-link {
  color: var(--vp-c-brand-1);
  font-weight: bold;
  text-decoration: none;
}

.announcement-link:hover {
  text-decoration: underline;
}
</style>
