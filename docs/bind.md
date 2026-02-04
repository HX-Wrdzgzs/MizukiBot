<script setup>
import { ref } from 'vue'

const qq = ref('')

// 基础链接
const baseUrl = "https://maimai.lxns.net/oauth/authorize?client_id=6b98af53-7b95-4a84-9198-6d2a8db0ac47&redirect_uri=urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob&response_type=code&scope=read_player+write_player&state="

// 跳转函数
const jumpToAuth = () => {
  if (!qq.value) {
    alert('请先输入您的 QQ 号！')
    return
  }
  // 拼接最终链接
  const finalUrl = baseUrl + qq.value
  // 在新标签页打开
  window.open(finalUrl, '_blank')
}
</script>

# 🔗 落雪查分器绑定

> 请输入您的 QQ 号，点击按钮跳转至落雪 (LXNS) 授权页面。

<div class="bind-wrapper">
  <div class="input-group">
    <label>您的 QQ 号：</label>
    <input 
      type="number" 
      v-model="qq" 
      placeholder="例如: 2338680148" 
      class="custom-input"
      @keyup.enter="jumpToAuth"
    />
  </div>

  <button @click="jumpToAuth" class="action-button">
    🚀 跳转并获取授权代码
  </button>

  <div class="tips">
    <p><strong>操作说明：</strong></p>
    <ol>
      <li>输入 QQ 号，点击跳转按钮。</li>
      <li>在落雪页面确认授权。</li>
      <li><strong>复制</strong> 页面显示的授权代码。</li>
      <li>回到 Bot 聊天窗口，发送：<code>落雪确认 [授权代码]</code></li>
    </ol>
  </div>
</div>

<style>
.bind-wrapper {
  margin-top: 30px;
  padding: 30px;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
}

.input-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.custom-input {
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 16px;
  width: 100%;
  max-width: 400px;
}

.action-button {
  background-color: #1890ff;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: opacity 0.2s;
}

.action-button:hover {
  opacity: 0.8;
}

.tips {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px dashed var(--vp-c-divider);
  font-size: 14px;
  opacity: 0.8;
}
</style>
