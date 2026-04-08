# 落雪 (LXNS) 账号绑定教程

> 通过 OAuth 2.0 授权机制，将您的落雪账号与 Mizuki Bot 安全绑定。

<br>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #1890ff; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #1890ff;">第一步：获取专属授权链接</h3>
  <p style="font-size: 14px; opacity: 0.8; margin-bottom: 15px;">
    请复制下方的专用授权链接，并将链接最末尾的 <strong>[你的QQ号]</strong> 替换为您自己真实使用的 QQ 号码，然后粘贴到浏览器中打开。
  </p>

  <div style="background: var(--vp-code-bg); padding: 15px; border-radius: 8px; overflow-wrap: anywhere; font-family: monospace; font-size: 13px; margin-top: 10px;">
    https://maimai.lxns.net/oauth/authorize?client_id=6b98af53-7b95-4a84-9198-6d2a8db0ac47&redirect_uri=urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob&response_type=code&scope=read_player+write_player+read_user_token&state=<strong>[你的QQ号]</strong>
  </div>

</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #52c41a; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #52c41a;">第二步：登录并确认授权</h3>
  <ul style="margin: 10px 0 0 20px; font-size: 14px; opacity: 0.9; line-height: 1.8;">
    <li>在浏览器中打开链接后，登录您的落雪 (LXNS) 账号。</li>
    <li>仔细阅读授权页面提示，点击 <strong>同意授权</strong>。</li>
  </ul>
</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #faad14; padding: 20px; border-radius: 12px;">
  <h3 style="margin-top: 0; color: #faad14;">第三步：发送验证码给 Bot</h3>
  <ul style="margin: 10px 0 0 20px; font-size: 14px; opacity: 0.9; line-height: 1.8;">
    <li>授权成功后，网页会自动生成并显示一串 <strong>授权代码 (Code)</strong>。</li>
    <li>请复制该代码，回到群聊或私聊界面，将其发送给 Bot，即可完成最终绑定。</li>
  </ul>
</div>
