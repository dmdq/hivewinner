<template><div><h2 id="游戏说明" tabindex="-1"><a class="header-anchor" href="#游戏说明"><span>游戏说明</span></a></h2>
<figure><img src="/images/hilow.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="基本规则" tabindex="-1"><a class="header-anchor" href="#基本规则"><span>基本规则</span></a></h3>
<p>第一步：选择投注额度</p>
<ul>
<li>提供4档固定额度：<br>
10,000越南盾 | 50,000越南盾 | 100,000越南盾 | 500,000越南盾<br>
<em>(约合人民币3元/15元/30元/150元)</em></li>
</ul>
<h3 id="游戏流程" tabindex="-1"><a class="header-anchor" href="#游戏流程"><span>游戏流程</span></a></h3>
<p>第二步：启动游戏</p>
<ol>
<li>点击 &quot;开始&quot;按钮 → 系统随机发出第一张牌</li>
<li>玩家预测下一张牌的数值：
<ul>
<li>&quot;上&quot;（Trên） → 下一张牌 大于 当前牌</li>
<li>&quot;下&quot;（Dưới） → 下一张牌 小于 当前牌</li>
</ul>
</li>
</ol>
<figure><img src="/images/ct/8-qdyx.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="关键机制说明" tabindex="-1"><a class="header-anchor" href="#关键机制说明"><span>关键机制说明</span></a></h3>
<table>
<thead>
<tr>
<th>要素</th>
<th>详细规则</th>
</tr>
</thead>
<tbody>
<tr>
<td>卡牌系统</td>
<td>使用标准52张扑克牌（不含鬼牌），A最小，K最大</td>
</tr>
<tr>
<td>胜负判定</td>
<td>比较首张牌（基准牌）与第二张牌的数值大小</td>
</tr>
<tr>
<td>特殊情形</td>
<td>• 同点数：平局（通常返还本金）   • 花色不参与比较（仅看数字）</td>
</tr>
<tr>
<td>赔率设定</td>
<td>行业常见为 1：0.95（押中得本金×0.95，庄家抽水5%）</td>
</tr>
</tbody>
</table>
<p>示例：<br>
首张牌：8♦ → 玩家押注 &quot;下&quot;<br>
次张牌：5♣ → 5&lt;8 → 押中获胜</p>
<hr>
<h3 id="术语对照表" tabindex="-1"><a class="header-anchor" href="#术语对照表"><span>术语对照表</span></a></h3>
<table>
<thead>
<tr>
<th>越南语</th>
<th>中文</th>
<th>数学符号</th>
</tr>
</thead>
<tbody>
<tr>
<td>Trên (上)</td>
<td>大于</td>
<td>&gt;</td>
</tr>
<tr>
<td>Dưới (下)</td>
<td>小于</td>
<td>&lt;</td>
</tr>
<tr>
<td>Lá bài</td>
<td>扑克牌</td>
<td>-</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="设计特点" tabindex="-1"><a class="header-anchor" href="#设计特点"><span>设计特点</span></a></h3>
<ol>
<li>极简操作：只需二选一（大/小），无复杂策略</li>
<li>高速开奖：每局仅需10-15秒，适合快速游戏</li>
<li>额度分层：从低到高四档，兼顾保守/激进玩家</li>
<li>即时反馈：次张牌亮牌即公布结果</li>
</ol>
<h3 id="基本规则2" tabindex="-1"><a class="header-anchor" href="#基本规则2"><span>基本规则2</span></a></h3>
<ul>
<li>决策时限：每轮预测阶段，玩家有 最长2分钟思考时间</li>
<li>超时处理：
<ul>
<li>若玩家已抽取 ≥2张牌 → 系统 自动判定获胜</li>
<li>若玩家 未抽够2张牌 → 系统 判定失败</li>
</ul>
</li>
</ul>
<figure><img src="/images/ct/8-jbgz.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="新增规则" tabindex="-1"><a class="header-anchor" href="#新增规则"><span>新增规则</span></a></h2>
<p>中止游戏机制：</p>
<ol>
<li>操作路径：
<ul>
<li>玩家点击 &quot;新回合&quot;（Lượt mới）按钮</li>
</ul>
</li>
<li>执行效果：
<ul>
<li>立即结算当前奖金</li>
<li>自动开启全新游戏回合</li>
</ul>
</li>
</ol>
<hr>
<h3 id="关键机制说明-1" tabindex="-1"><a class="header-anchor" href="#关键机制说明-1"><span>关键机制说明</span></a></h3>
<table>
<thead>
<tr>
<th>规则类型</th>
<th>设计目的</th>
<th>注意事项</th>
</tr>
</thead>
<tbody>
<tr>
<td>2分钟限时</td>
<td>防止恶意拖延游戏进程</td>
<td>判定逻辑特殊：   抽牌≥2张反而不利庄家</td>
</tr>
<tr>
<td>中止游戏</td>
<td>增加玩家控制权</td>
<td>需主动点击&quot;新回合&quot;触发结算</td>
</tr>
<tr>
<td>自动结算</td>
<td>实现回合无缝切换</td>
<td>结算后立即重置牌局</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="术语解析" tabindex="-1"><a class="header-anchor" href="#术语解析"><span>术语解析</span></a></h3>
<ol>
<li>&quot;Thắng nếu đã rút ≥2 lá&quot;（抽≥2张牌判胜）
<ul>
<li>特殊保护机制：防止玩家因断网/掉线损失已赢牌局</li>
<li>庄家让步：当玩家已有2张牌时，默认给予优势判定</li>
</ul>
</li>
<li>&quot;Lượt mới&quot;（新回合）
<ul>
<li>双重功能：中止当前局 + 启动新局</li>
<li>行业常见名称：同类游戏多称&quot;Cash Out&quot;（提前结算）</li>
</ul>
</li>
</ol>
<h3 id="爆奖池机制" tabindex="-1"><a class="header-anchor" href="#爆奖池机制"><span>爆奖池机制</span></a></h3>
<p>当玩家在同一游戏回合中同时满足以下两个条件时，将触发爆奖池（Nổ hũ）：</p>
<ol>
<li>达成连胜：连续赢得游戏局数（无间断）</li>
<li>集齐关键牌：持有任意花色的3张A牌（如 A♥ + A♦ + A♠）</li>
</ol>
<p>奖励规则：<br>
▸ 触发后立即获得 当前奖池总额的100%</p>
<figure><img src="/images/ct/8-jlgz.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="关键术语解析" tabindex="-1"><a class="header-anchor" href="#关键术语解析"><span>关键术语解析</span></a></h3>
<table>
<thead>
<tr>
<th>越南语原文</th>
<th>中文释义</th>
<th>规则细节</th>
</tr>
</thead>
<tbody>
<tr>
<td>1 phiên chơi</td>
<td>单次游戏回合</td>
<td>指从进入游戏到主动退出/爆奖池的完整周期</td>
</tr>
<tr>
<td>Thắng liên tiếp</td>
<td>连胜</td>
<td>必须连续赢局，中间无失败局中断</td>
</tr>
<tr>
<td>3 trong 4 con Át</td>
<td>四张A中集三张</td>
<td>任意花色组合（如 ♠♥♦/♠♥♣/♠♦♣/♥♦♣）均有效，无需同花</td>
</tr>
<tr>
<td>100% quỹ thưởng</td>
<td>奖池全额</td>
<td>指游戏全局累积的奖金池总额，非单局奖金</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="设计逻辑分析" tabindex="-1"><a class="header-anchor" href="#设计逻辑分析"><span>设计逻辑分析</span></a></h3>
<ol>
<li>双条件触发
<ul>
<li>技术门槛：需要连胜（考验运气与技术）</li>
<li>收集门槛：强制保留A牌（改变常规策略）</li>
</ul>
</li>
<li>奖池分配</li>
</ol>
<table>
<thead>
<tr>
<th>阶段</th>
<th>运作原理</th>
<th>玩家策略影响</th>
</tr>
</thead>
<tbody>
<tr>
<td>奖池累积</td>
<td>每局玩家下注按比例注入奖池</td>
<td>玩家越多→奖池增长越快</td>
</tr>
<tr>
<td>爆池重置</td>
<td>触发后奖池归零并重新累积</td>
<td>刺激玩家争抢触发时机</td>
</tr>
</tbody>
</table>
<ol start="3">
<li>A牌战略价值
<ul>
<li>常规玩法：A是最大牌（14点），押&quot;上&quot;必胜</li>
<li>爆池玩法：需故意保留A牌，可能放弃当局盈利</li>
</ul>
</li>
</ol>
<p>示例情景：<br>
玩家当前持牌：[A♠, A♥, 9♦]<br>
新抽牌：5♣ → 押&quot;下&quot;（5&lt;9）获胜但未爆池<br>
新抽牌：Q♠ → 押&quot;上&quot;（Q&gt;9）获胜且抽到A♦ → 凑齐3张A 触发爆池</p>
<h2 id="游戏页面" tabindex="-1"><a class="header-anchor" href="#游戏页面"><span>游戏页面</span></a></h2>
<h3 id="主页面" tabindex="-1"><a class="header-anchor" href="#主页面"><span>主页面</span></a></h3>
<figure><img src="/images/hilow/index.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="游戏页" tabindex="-1"><a class="header-anchor" href="#游戏页"><span>游戏页</span></a></h3>
<figure><img src="/images/hilow/game.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="帮助页" tabindex="-1"><a class="header-anchor" href="#帮助页"><span>帮助页</span></a></h3>
<figure><img src="/images/hilow/help-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="/images/hilow/help-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="/images/hilow/help-3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="投注记录" tabindex="-1"><a class="header-anchor" href="#投注记录"><span>投注记录</span></a></h3>
<figure><img src="/images/hilow/my.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="大奖历史" tabindex="-1"><a class="header-anchor" href="#大奖历史"><span>大奖历史</span></a></h3>
<figure><img src="/images/hilow/his.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="/images/hilow/his-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


