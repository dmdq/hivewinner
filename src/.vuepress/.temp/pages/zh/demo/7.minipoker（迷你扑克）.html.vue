<template><div><h2 id="游戏说明" tabindex="-1"><a class="header-anchor" href="#游戏说明"><span>游戏说明</span></a></h2>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749998030382-efd4b93b-7022-427a-9785-9db2f11adc73.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="基本规则" tabindex="-1"><a class="header-anchor" href="#基本规则"><span>基本规则</span></a></h3>
<ol>
<li>游戏界面
<ul>
<li>包含 5张扑克牌 + 1个旋转轴（用于启动游戏）</li>
</ul>
</li>
<li>游戏流程
<ul>
<li>玩家点击 &quot;旋转&quot;按钮 → 系统随机生成结果 → 显示 5张牌（从52张标准扑克牌中抽取）</li>
</ul>
</li>
<li>获胜条件
<ul>
<li>当5张牌组成特定 奖励组合 时，玩家获得对应奖金</li>
</ul>
</li>
</ol>
<hr>
<h3 id="核心机制图解" tabindex="-1"><a class="header-anchor" href="#核心机制图解"><span>核心机制图解</span></a></h3>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1750003299941-1614d85e-9333-42fb-93df-0054397370af.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>▸ 牌组来源：标准52张扑克牌（无鬼牌）<br>
▸ 胜负判定：根据最终牌型匹配预设的奖金组合（如对子、顺子等）</p>
<h3 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h3>
<ol>
<li>与传统扑克区别
<ul>
<li>无需下注决策，结果完全由随机系统决定</li>
<li>本质为 即时开奖游戏（类似老虎机与扑克的结合）</li>
</ul>
</li>
<li>典型奖励组合</li>
</ol>
<table>
<thead>
<tr>
<th>牌型</th>
<th>示例</th>
<th>奖金倍数</th>
</tr>
</thead>
<tbody>
<tr>
<td>皇家同花顺</td>
<td>A♦ K♦ Q♦ J♦ 10♦</td>
<td>最高 x 4</td>
</tr>
<tr>
<td>同花顺</td>
<td>9♠ 8♠ 7♠ 6♠ 5♠</td>
<td>高 x 10000</td>
</tr>
<tr>
<td>四条</td>
<td>J♥ J♦ J♣ J♠ 3♦</td>
<td>中高 x 1500</td>
</tr>
<tr>
<td>葫芦</td>
<td>Q♣ Q♦ Q♠ 7♥ 7♣</td>
<td>中等 x 50</td>
</tr>
<tr>
<td>同花</td>
<td>A♦ K♦ Q♦ 8♦ 5♦</td>
<td>中等 x 20</td>
</tr>
<tr>
<td>顺子</td>
<td>5♦ 6♠  7♦ 8♦ 9♣</td>
<td>中等 x 13</td>
</tr>
<tr>
<td>三张</td>
<td>6♦ 6♠  6♦ 8♦ 9♣</td>
<td>一般 x 8</td>
</tr>
<tr>
<td>两队</td>
<td>7♦ 7♠  K♦K♦ A♣</td>
<td>一般 x 5</td>
</tr>
<tr>
<td>一对</td>
<td>8♦ 8♠ J♦Q♦ A♣</td>
<td>低等 x 2.5</td>
</tr>
</tbody>
</table>
<p>注：具体赔率需以游戏实际规则为准</p>
<hr>
<p>此游戏属于 随机开奖博彩游戏，通过预设的牌型赔率表实现快速判定，兼具扑克元素与即时开奖特性。</p>
<h2 id="功能指南" tabindex="-1"><a class="header-anchor" href="#功能指南"><span>功能指南</span></a></h2>
<h3 id="核心功能" tabindex="-1"><a class="header-anchor" href="#核心功能"><span>核心功能</span></a></h3>
<ol>
<li>自动旋转
<ul>
<li>系统将持续自动开奖，直至玩家手动停止 或 账户余额归零</li>
</ul>
</li>
<li>极速模式
<ul>
<li>减少动画特效 → 加速结果展示（提升游戏节奏）</li>
</ul>
</li>
<li>排行榜系统
<ul>
<li>实时展示玩家 爆奖池记录 与 大奖成就</li>
<li>注：&quot;nổ hũ&quot; = 爆分/爆奖池；&quot;thẳng lớn&quot; = 中大额奖金</li>
</ul>
</li>
<li>投注历史
<ul>
<li>完整记录每局游戏的 详细结果</li>
<li>明确标注 每局输掉的本金金额</li>
<li>注：&quot;thẳng thua&quot; = 直接输掉（本金）</li>
</ul>
</li>
</ol>
<hr>
<h3 id="运作机制深度解析" tabindex="-1"><a class="header-anchor" href="#运作机制深度解析"><span>运作机制深度解析</span></a></h3>
<table>
<thead>
<tr>
<th>功能</th>
<th>运作逻辑</th>
<th>玩家影响</th>
</tr>
</thead>
<tbody>
<tr>
<td>自动旋转</td>
<td>系统循环开奖 → 触发停止条件：   • 玩家主动中断   • 账户余额≤0</td>
<td>实现挂机操作，需注意余额监控</td>
</tr>
<tr>
<td>极速模式</td>
<td>关闭牌面动画/光效 → 结果直接弹出</td>
<td>单位时间内游戏局数提升30%-50%</td>
</tr>
<tr>
<td>排行榜</td>
<td>动态追踪两种成就：   • 累计爆奖池次数 (nổ hũ)   • 单局最高赢额 (thẳng lớn)</td>
<td>刺激竞争心理，促进持续投注</td>
</tr>
<tr>
<td>投注历史</td>
<td>每局生成数据包：   • 牌型组合   • 投注金额   • 本金损失额 (thẳng thua)</td>
<td>提供审计依据，强调风险提示</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="关键术语对照表" tabindex="-1"><a class="header-anchor" href="#关键术语对照表"><span>关键术语对照表</span></a></h3>
<table>
<thead>
<tr>
<th>越南语原文</th>
<th>中文释义</th>
<th>行业应用场景</th>
</tr>
</thead>
<tbody>
<tr>
<td>Tự quay</td>
<td>自动旋转</td>
<td>老虎机/扑克类博彩通用功能</td>
</tr>
<tr>
<td>Siêu tốc</td>
<td>极速模式</td>
<td>高频开奖游戏标配</td>
</tr>
<tr>
<td>Nổ hũ</td>
<td>爆奖池/触发大奖</td>
<td>累计奖池清空事件</td>
</tr>
<tr>
<td>Thẳng lớn</td>
<td>中得大奖</td>
<td>单局高额赔付</td>
</tr>
<tr>
<td>Thẳng thua</td>
<td>本金全损</td>
<td>未中奖时投注金额归零</td>
</tr>
</tbody>
</table>
<h2 id="游戏页面" tabindex="-1"><a class="header-anchor" href="#游戏页面"><span>游戏页面</span></a></h2>
<h3 id="主页面" tabindex="-1"><a class="header-anchor" href="#主页面"><span>主页面</span></a></h3>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749998043546-9519f29e-b24d-4fec-b0a9-9a7bbfccf1ba.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="开奖结果" tabindex="-1"><a class="header-anchor" href="#开奖结果"><span>开奖结果</span></a></h3>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749998714971-8cde8e09-9605-442b-b75b-ed93fd2c8256.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="帮助页" tabindex="-1"><a class="header-anchor" href="#帮助页"><span>帮助页</span></a></h3>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749998058618-b475d2bf-b232-4f20-ba5a-a6156f34fff5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749998064301-e8170b0b-f160-46ca-90e1-a7f25ce510e7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749998069917-f2854755-72c8-4d7b-945b-23e44ac1cfaf.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749998073871-262d5c30-6719-403d-8f34-d4461e656c65.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749998079108-553b74e9-ebb3-4796-87c7-367f7acab20e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="投注记录" tabindex="-1"><a class="header-anchor" href="#投注记录"><span>投注记录</span></a></h3>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749998695189-d96dbf94-3fb5-445d-abbd-138a86d196e7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


