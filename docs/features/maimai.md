# 舞萌 DX 专项

> 查分、查歌与排队服务。

<br>

<div style="display: flex; flex-wrap: wrap; gap: 15px;">

  <div class="custom-card" style="flex: 1; min-width: 300px; background: var(--vp-c-bg-soft); border-left: 5px solid #faad14; padding: 20px; border-radius: 12px;">
    <h3 style="margin-top: 0; color: #faad14;">核心查询</h3>
    <table style="width: 100%; font-size: 13px;">
      <tr><td width="35%"><code>今日舞萌</code></td><td>运势与推荐</td></tr>
      <tr><td><code>b50</code></td><td>查B50成绩</td></tr>
      <tr><td><code>随个 [难度]</code></td><td>随机歌 (例: <code>随个紫</code>)</td></tr>
      <tr><td><code>查歌 [关键词]</code></td><td>查曲目信息</td></tr>
      <tr><td><code>定数查歌 [范围]</code></td><td>例: <code>定数查歌 13.5 13.9</code></td></tr>
    </table>
  </div>

  <div class="custom-card" style="flex: 1; min-width: 300px; background: var(--vp-c-bg-soft); border-left: 5px solid #52c41a; padding: 20px; border-radius: 12px;">
    <h3 style="margin-top: 0; color: #52c41a;">牌子与进度</h3>
    <table style="width: 100%; font-size: 13px;">
      <tr><td width="35%"><code>[牌子]进度</code></td><td>例: <code>霸者进度</code></td></tr>
      <tr><td><code>[等级]进度</code></td><td>例: <code>13+进度</code></td></tr>
      <tr><td><code>完成表 [等级]</code></td><td>生成完成度表格</td></tr>
      <tr><td><code>分数线 [曲ID]</code></td><td>查分数线详情</td></tr>
    </table>
  </div>

  <div class="custom-card" style="flex: 1; min-width: 300px; background: var(--vp-c-bg-soft); border-left: 5px solid #1890ff; padding: 20px; border-radius: 12px;">
    <h3 style="margin-top: 0; color: #1890ff;">别名与娱乐</h3>
    <table style="width: 100%; font-size: 13px;">
      <tr><td width="35%"><code>是什么歌</code></td><td>查别名对应曲</td></tr>
      <tr><td><code>添加别名 [ID] [名]</code></td><td>添加新别名</td></tr>
      <tr><td><code>mai猜歌</code></td><td>开启猜歌游戏</td></tr>
    </table>
  </div>

</div>

<br>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #1890ff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
  <h3 style="margin-top: 0; color: #1890ff;">舞萌服务器状态</h3>
  <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center;">
    <div style="flex: 1; min-width: 200px;">
      <p style="font-size: 13px; opacity: 0.8; line-height: 1.6;">
        获取 Milk/Chongxi/DLX/华立 代理服务器实时状态。<br>
        <strong>指令：</strong> <br>
        <code>mai状态</code> / <code>看看mai</code> / <code>舞萌状态</code><br>
        <code>看看dlx</code> / <code>看看华立</code>
      </p>
    </div>
    <div style="flex: 1; min-width: 200px; text-align: center;">
      <img src="/Picture/maimai_status.jpg" style="max-height: 100px; border-radius: 8px; border: 2px solid #1890ff;">
    </div>
  </div>
</div>

<br>

<!-- 骚话模式 -->
<div class="custom-card" style="background: var(--vp-c-bg-soft); border: 2px solid #ffc069; padding: 20px; border-radius: 12px; margin-top: 10px;">
  <h3 style="margin-top: 0; color: #fa8c16;">骚话模式</h3>
  <ul style="columns: 2; opacity: 0.8; font-size: 13px;">
    <li>“xxmai什么” (例: <code>柚子mai什么</code>)</li>
    <li>“我要在 [难度] 上 [分数] 分”</li>
    <li>“今天mai出勤打什么上分”</li>
    <li>“[等级] [评价] 进度” (例: <code>13+ SSS 进度</code>)</li>
  </ul>
</div>

<br>

<!-- ✨✨✨ 新增：成绩同步助手 ✨✨✨ -->
<div class="custom-card" style="background: var(--vp-c-bg-soft); border: 2px solid #ff4d4f; padding: 25px; border-radius: 15px; margin-top: 30px;">
  <h3 style="margin-top: 0; color: #ff4d4f;">成绩同步助手 (Sync)</h3>
  <p style="font-size: 13px; opacity: 0.8; margin-bottom: 20px;">
    协助将街机端游玩记录同步至查分器 (水鱼/落雪)。<br>
    <span style="color:#ff4d4f;">⚠️ 维护时间: 01:00-08:00 暂停服务</span>
  </p>

  <div style="display: flex; flex-wrap: wrap; gap: 25px;">
    
    <div style="flex: 1; min-width: 260px;">
      <h4 style="color: #ff7875; border-bottom: 1px dashed #ffccc7; margin-bottom: 10px;">1. 设置类型</h4>
      <ul style="font-size: 13px; line-height: 1.8; opacity: 0.9; padding-left: 20px; margin: 0;">
        <li><code>设置类型 1</code>：仅上传成绩</li>
        <li><code>设置类型 2</code>：上传后自动登出 (会上传占位曲)</li>
        <li><code>查看绑定</code> / <code>登出</code> (清理异常)</li>
      </ul>
    </div>

    <div style="flex: 1; min-width: 260px;">
      <h4 style="color: #ff7875; border-bottom: 1px dashed #ffccc7; margin-bottom: 10px;">2. 绑定账号</h4>
      <ul style="font-size: 13px; line-height: 1.8; opacity: 0.9; padding-left: 20px; margin: 0;">
        <li><strong>水鱼</strong>: <code>绑定水鱼 [Token]</code></li>
        <li><strong>落雪</strong>: <code>绑定落雪</code> -> 获取授权</li>
        <li><strong>确认</strong>: <code>落雪确认 [授权码]</code></li>
        <li><span style="font-size:12px; opacity:0.6;">(落雪绑定已升级 OAuth 2.0)</span></li>
      </ul>
    </div>

    <div style="flex: 1; min-width: 260px;">
      <h4 style="color: #ff7875; border-bottom: 1px dashed #ffccc7; margin-bottom: 10px;">3. 同步成绩</h4>
      <div style="font-size: 13px; line-height: 1.8; opacity: 0.9;">
        <p><strong>指令：</strong><code>导入成绩</code></p>
        <p><strong>操作：</strong>发送指令后，请私聊发送二维码文本。</p>
      </div>
    </div>

  </div>

  <div style="margin-top: 20px; text-align: center;">
    <a href="/disclaimer" style="display: inline-block; border: 1px solid #ff4d4f; color: #ff4d4f; padding: 8px 25px; border-radius: 20px; text-decoration: none; font-size: 13px; font-weight: bold; transition: all 0.3s;">
      阅读服务条款与免责声明 ->
    </a>
  </div>
</div>