<script setup>
import { ref } from 'vue'

const qq = ref('')
const baseUrl = "https://maimai.lxns.net/oauth/authorize?client_id=6b98af53-7b95-4a84-9198-6d2a8db0ac47&redirect_uri=urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob&response_type=code&scope=read_player+write_player&state="

const jumpToAuth = () => {
  if (!qq.value) {
    alert('请先输入您的 QQ 号！')
    return
  }
  const finalUrl = baseUrl + qq.value
  window.open(finalUrl, '_blank')
}
</script>

# 🔗 落雪查分器绑定

<br>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #1890ff; padding: 30px; border-radius: 15px;">
  <h3 style="margin-top: 0; color: #1890ff;">🚀 绑定流程</h3>
  <p style="opacity: 0.8; margin-bottom: 20px;">请输入您的 QQ 号，点击按钮跳转至落雪 (LXNS) 授权页面。</p>

  <div class="input-group">
    <label style="font-weight:bold; display:block; margin-bottom:8px;">您的 QQ 号：</label>
    <input 
      type="number" 
      v-model="qq" 
      placeholder="例如: 3675727244" 
      class="custom-input"
      @keyup.enter="jumpToAuth"
    />
  </div>

  <button @click="jumpToAuth" class="action-button">
    跳转并获取授权代码
  </button>

  <div style="margin-top: 25px; padding-top: 20px; border-top: 1px dashed #ccc;">
    <p><strong>⚠️ 获取授权码后：</strong></p>
    <p style="font-size: 13px; opacity: 0.8;">请回到 Bot 聊天窗口 (群聊或私聊)，发送以下指令：</p>
    <div style="background: var(--vp-c-bg); padding: 10px; border-radius: 6px; margin-top: 8px; font-family: monospace; color: #ff4d4f;">
      @Mizuki Bot 落雪确认 [授权码]
    </div>
  </div>
</div>

<style>
.input-group { margin-bottom: 20px; }
.custom-input {
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 16px;
  width: 100%;
  max-width: 100%; /* 手机端撑满 */
}
.action-button {
  background-color: #1890ff;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  width: 100%;
  transition: opacity 0.2s;
}
.action-button:hover { opacity: 0.8; }
</style>
