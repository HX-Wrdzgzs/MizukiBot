# 🎵 PJSK 相关功能

> 包含查分、查榜、组卡计算器、活动预测及各类娱乐功能。
> <br><small>*部分功能支持 `cn` (国服) 或 `tw` (台服) 前缀。*</small>

<br>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #1890ff; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
  <h3 style="margin-top: 0; color: #1890ff;">📊 玩家数据查询 (需上传数据)</h3>
  <p style="font-size: 13px; opacity: 0.8; margin-bottom: 15px;">
    <strong>日/台服上传地址：</strong> <a href="http://go.mikuware.top/" target="_blank" style="color:#1890ff; font-weight:bold;">👉 点击进入数据上传页面</a><br>
    <span style="font-size:12px; opacity:0.6;">(日服玩家可直接复制引继码给Bot上传)</span>
  </p>

| 指令 | 说明 |
| :--- | :--- |
| `rk` | 获取玩家排位信息 |
| `b39` | Rating最高39首 (仅供参考) |
| `pjsk b30` | Rating最高30首 (算法不同) |
| `pjsk进度 [ex/apd]` | 查Master/Expert完成表 |
| `pjskdetail` | 查金币、水晶、练度 (建议私聊) |
| `视奸` | 查看当前队伍综合力构成 |
| `逮捕` | 查询高难谱面 AP/FC 进度 |
| `pjskcard` | 个人卡牌图鉴 (可加角色花名) |
| `pjskevent` | 查询前10次最高排名活动 |
| `最强组卡` | 同色同队最高分卡组 |

</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #E97EB3; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
  <h3 style="margin-top: 0; color: #E97EB3;">🎵 查歌与活动 (无需上传)</h3>
  
  <h4 style="color: #E97EB3; margin-top: 15px;">基础与榜单</h4>

| 指令 | 说明 |
| :--- | :--- |
| `绑定 [ID]` | 绑定游戏ID |
| `给看/不给看` | 开放/关闭被At权限 |
| `pjskprofile` | 获取旧版个人信息卡片 |
| `查时间` | 查询注册时间 |
| `id` | 返回当前QQ绑定ID |
| `sk` | 查活动排名/档线 |
| `分数线` / `sk线` | 查当前档线分数 (5分延迟) |
| `ss` / `wlss` | 查当前/单榜档线时速 |
| `sk预测` | (日服) 查预测线 |
| `查房` | 查最近1小时活动情况 |
| `活动 [编号]` | 查活动信息 |

  <h4 style="color: #E97EB3; margin-top: 25px;">歌曲查询</h4>

| 指令 | 说明 |
| :--- | :--- |
| `pinfo [曲名]` | 查歌曲详情 |
| `查bpm` / `查物量` | 查询歌曲BPM或物量信息 |
| `谱面预览 [曲] [难度]` | 预览谱面 (ex/master/apd) |
| `技能预览` | 查看技能详情 |
| `难度排行 [lv] [难度]` | 例: `难度排行 33 master` |

</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #fa8c16; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
  <h3 style="margin-top: 0; color: #fa8c16;">🧮 组卡计算器</h3>

| 指令 | 说明 | 示例 |
| :--- | :--- | :--- |
| `组卡 [队] [色]` | 指定箱活最佳卡组 | `组卡 ln 橙` |
| `活动组卡 [曲]` | 当前活动最佳卡组 | `活动组卡 独瑞 hard` |
| `挑战组卡 [人]` | 每日挑战Live最佳卡组 | `挑战组卡 miku` |

</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #722ed1; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
  <h3 style="margin-top: 0; color: #722ed1;">🃏 卡面查询</h3>
  
| 指令 | 说明 |
| :--- | :--- |
| `查卡 [参数...]` | 查卡 (支持: 角色/属性/稀有度) |
| `card [编号]` | 根据ID查大图 |
| `cardinfo [编号]` | 根据ID查数值 |
| `看 [角色]` | 随机看一张卡图 |

</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #52c41a; padding: 20px; border-radius: 12px;">
  <h3 style="margin-top: 0; color: #52c41a;">🎉 娱乐功能</h3>
  
| 指令 | 说明 |
| :--- | :--- |
| `pjsk听歌识曲` | 开启听歌识曲 |
| `pjsk猜卡面` | 开启猜卡面 |
| `pjsk抽卡` | 模拟10连抽卡 |
| `pjsk反抽卡` | 反转概率抽卡 |
| `随个 [组合] [等级]` | 随机推歌 (例: `随个 25 33`) |
| `葱什么` | 随机一首 Miku 的歌 |

</div>
