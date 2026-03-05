# 🤖 Mizuki Bot 更新日志

> 记录 Mizuki Bot 的成长与功能迭代，感谢每一位用户的支持与陪伴！

<br>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #a855f7; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #a855f7;">✨ 2026.3.1 | 经济系统进阶与修复</h3>
  <ul style="margin: 10px 0 0 20px; font-size: 14px; opacity: 0.9; line-height: 1.8;">
    <li><strong>经济指令</strong>：新增 <code>经济帮助</code> 文本版指令。</li>
    <li><strong>CDK 兑换系统</strong>：管理可通过发放 CDK 给玩家兑换物品，玩家需在 <code>store.mizuki.top</code> 复制文案发送给 Bot 扣除对应 PC 兑换。</li>
    <li><strong>打工与体力</strong>：修复打工随机分配机制（只需发送 <code>打工</code> 即可分配社交/技术/搬运）；体力不足时会显示下一体力值恢复时间。</li>
    <li><strong>Bug 修复</strong>：修复了经济榜与商城的部分 Bug；更正了个人信息与经济榜中的等级显示差异。</li>
    <li><strong>机制调整</strong>：修复 PJSK 猜卡面 Bug，目前触发部分角色名发图时将自动禁言 42-45 秒。</li>
  </ul>
</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #ff4d4f; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #ff4d4f;">🧧 2026.2.20 | 马年春节大版本</h3>
  <ul style="margin: 10px 0 0 20px; font-size: 14px; opacity: 0.9; line-height: 1.8;">
    <li><strong>经济扩展</strong>：新增商店与背包功能，达到特定等级可购买并使用补给、头衔、主题等；扩展黄历事件与语录，修复 <code>list.mizuki.top</code> 网页缩放及时间格式。</li>
    <li><strong>群管功能</strong>：更新欢迎/离群插件，自动检测并发送对应文案（各设 10 条）。</li>
    <li><strong>性能与清理</strong>：修复猜卡面/猜歌大文件无法上传的问题；因使用率较低，移除 AI Vits 语音服务。</li>
    <li><strong>系统底座</strong>：HongXingOS6 3月Dev版本修复内核假死问题。</li>
  </ul>
</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #1890ff; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #1890ff;">⚙️ 2026.2.16 | 服务器分流与重构</h3>
  <ul style="margin: 10px 0 0 20px; font-size: 14px; opacity: 0.9; line-height: 1.8;">
    <li><strong>账号分流</strong>：因不可抗因素，Bot 正式划分为综合功能机（1、3、5号机）与 PJSK 专属机（2、4、6号机）。</li>
    <li><strong>数据重置与上线</strong>：重构签到与经济插件（测试版数据清空，正式版上线），更新商城、用户等级、黄历及多打工类型。</li>
    <li><strong>旧版清理</strong>：删除旧版 Status、旧版签到及逆天欢迎语。</li>
  </ul>
</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #52c41a; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #52c41a;">💰 2026.2.6 - 2.13 | 经济系统与烤森接入</h3>
  <ul style="margin: 10px 0 0 20px; font-size: 14px; opacity: 0.9; line-height: 1.8;">
    <li><strong>全新经济生态</strong>：上线 Mizuki 经济系统，支持签到、PK（需对方同意）、转账（带手续费机制）、发红包及每日随机事件。</li>
    <li><strong>群聊响应优化</strong>：新增多 Bot 同群分流机制（仅单 Bot 响应）及 PJSK 游玩次数限制保护（默认 20 次）。</li>
    <li><strong>功能接入</strong>：接入“烤森”功能。为防封禁，拉 Bot 需先加入 <code>1053964431</code> 群聊。</li>
  </ul>
</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #39C5BB; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #39C5BB;">📈 2026.2.3 | 数据对接与十万级并发</h3>
  <ul style="margin: 10px 0 0 20px; font-size: 14px; opacity: 0.9; line-height: 1.8;">
    <li><strong>数据与安全</strong>：更新水鱼/落雪成绩上传，新增玩家成就感查看，提升落雪 OAuth 绑定安全性。</li>
    <li><strong>里程碑</strong>：Bot 日活量达 3.4w，使用人数近 1w 人，帮助文档提升至必应首页。</li>
    <li><strong>系统底座</strong>：HongXingOS6 2月Bui版将消息上限由 1w/h 提升至 10w/h，修复 DDOS 误判导致的内核假死问题。</li>
    <li><strong>其他插件</strong>：<code>homo_qso</code> 插件支持全中继查询、adif 导出及呼号绑定。</li>
  </ul>
</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #d4b106; padding: 20px; border-radius: 12px;">
  <h3 style="margin-top: 0; color: #d4b106;">🚀 2026.1 | 正式起航与飞速迭代</h3>
  <ul style="margin: 10px 0 0 20px; font-size: 14px; opacity: 0.9; line-height: 1.8;">
    <li><strong>1.31</strong>：删除旧版反馈插件，转为飞书/腾讯文档反馈；实现舞萌成绩上传。</li>
    <li><strong>1.27</strong>：上线 <code>Amia@mizuki.top</code> 专属邮箱，提供情绪疏导与问题解答（数据永久保密）。</li>
    <li><strong>1.25</strong>：重磅上线 <strong>PJSK 车队助手</strong>，支持属性筛选、快捷发车（满员/补人/炸车）及跨群车队广播。</li>
    <li><strong>1.24</strong>：遭遇机房断网后全线恢复，团队正式更名为 <strong>Akaboshi Lab | 赤星实验室</strong>；内测具有自我学习风格的 AI 对话功能。</li>
    <li><strong>1.19</strong>：关闭私聊功能，开始重写各路底层逻辑。</li>
    <li><strong>1.11</strong>：Meme 系统全盘重构并接入海豚数据库，新增 Meme 屏蔽群聊功能。</li>
    <li><strong>1.1 (正式版发布)</strong>：Mizuki Bot 正式投入使用，集成 PJSK 全家桶、舞萌助手及娱乐模组。特别鸣谢 Te:Rivet、uni_mayu、ecomter、Sirius、zhu 的技术支持。</li>
  </ul>
</div>
