# 🎵 PJSK 模块功能

::: warning ⚠️ 注意：账号防丢指南
**在进行账号上传或绑定操作前，请务必一定保存你的引继码与密码！**
以免因意外情况、网络波动或平台风控导致游戏账号丢失。Bot 无法为您找回丢失的账号。
:::

> 提前准备 ID 以便全览 PJSK 功能详细配置。
> 如需查分、算分、看卡面等，请先绑定您的游戏账号。
> `<Account>`绑定功能支持 `cn` (国服) 或 `tw` (台服) 甚至 `*` (jp/en/kr)

<br>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #39C5BB; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #39C5BB;">🎮 游戏数据查询 (网上查分/抓包)</h3>
  <p style="font-size: 13px; opacity: 0.8; margin-bottom: 15px;">
    <strong>必看前置上传教程 👉</strong> <a href="http://go.mizuki.top" target="_blank" style="color:#39C5BB; font-weight:bold;">👉 点击进入获取上传抓包</a>
    <br>
    <span style="font-size: 12px; opacity: 0.6;">* 日服玩家可直接根据提示发送指令进行上传*</span>
  </p>

| 指令 | 说明 |
| :--- | :--- |
| `pjsk [3D] [文本]` | 生成表情包（例：`pjsk 3D 瑞希贴贴`） |
| `b30` | 您的目前最佳成绩 |
| `b30` | Rating查询30首 (供参考用) |
| `pjsk b30` | Rating最高30首（真实分数） |
| `pjsk进度 [ex/mst]` | 查Master/Expert完成表 |
| `pjskdetail` | 查色率，准度，推度（建议私聊） |
| `查房` | 查看当前匹配队伍的代码 |
| `谱面` | 查看单曲谱面 (d/e/m) 难度 |
| `pjskcard` | 个人卡面图鉴（可按星级筛选） |
| `pjskevent` | 查询当前全服车牌和活动 |
| `最佳流水` | 词曲团队最佳分数图 |

</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #FF7A91; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #FF7A91;">🎵 基础指令 (无需上传)</h3>

| 指令 | 说明 |
| :--- | :--- |
| `绑定 [ID]` | 绑定游戏ID |
| `背景/主背景` | 开发/换背景及名片 |
| `pjskprofile` | 获取最新个人背景卡片 |
| `落雪网` | 登录落雪网页 |
| `25` | 查看最新25时图文 |
| `cx` | 查询最新歌/曲信息 |
| `大额充` / `sx充` | 充值落雪网页版 (5元起充) |
| `cc` / `uscc` | 查询美/日服商城进度 |
| `pc充值` / `[日服] 最新充值` | 日服充值查询 |
| `落雪` | 查看最近25时活动图文 |
| `活动 [期号]` | 查看活动图鉴 |

</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #722ed1; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #722ed1;">📝 查分/排位</h3>

| 指令 | 说明 |
| :--- | :--- |
| `pinfo [期号]` | 查询排行榜 |
| `落hpc` / `落线警` | 查询目前DP/活动警报线 |
| `谱面状态 [歌] [难度]` | 预览谱面 [ex/master/apd] |
| `预测线差` | 查看线差排名 |
| `预测排行 [lx] [期数]` | 例：`预测排行 25 master` |

</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #d4b106; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #d4b106;">🎫 卡面及招募</h3>

| 指令 | 说明 |
| :--- | :--- |
| `抽卡 [次数]...` | 抽卡 (支持：常规/限定/特别等) |
| `card [编号]` | 根据ID查卡面 |
| `cardinfo [编号]` | 获取卡面数据 |
| `看 [角色]` | 随机看一张卡面 |

</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #f5222d; padding: 20px; border-radius: 12px;">
  <h3 style="margin-top: 0; color: #f5222d;">🔌 杂项辅助</h3>

| 指令 | 说明 |
| :--- | :--- |
| `pjsk歌曲数据` | 获取歌曲数据 |
| `pjsk漏卡查` | 获取漏卡表 |
| `pjsk算分` | 模拟打歌算分 |
| `pjsk反算分` | 预估最终得分 |
| `算分[期号] [分数]` | 预估排位（例：算分 25 315） |
| `查分流` | 预估一车 (h/lx) 跑速 |

</div>

<style>
.custom-card table th:nth-child(1),
.custom-card table td:nth-child(1) {
  white-space: nowrap !important;
  word-break: keep-all !important;
}
</style>
