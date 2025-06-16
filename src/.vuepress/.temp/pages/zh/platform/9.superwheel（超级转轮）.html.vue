<template><div><h2 id="游戏说明" tabindex="-1"><a class="header-anchor" href="#游戏说明"><span>游戏说明</span></a></h2>
<figure><img src="/images/superwheel.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>超级转轮（Super Wheel） 是经典游戏 &quot;命运之轮（Wheel of Fortune）&quot; 的升级版本！<br>
▸ 转轮设有 3个层级<br>
▸ 玩家可赢取的 奖金价值随层级提升而递增</p>
<h3 id="玩法说明" tabindex="-1"><a class="header-anchor" href="#玩法说明"><span>玩法说明</span></a></h3>
<ol>
<li>选择投注金额</li>
<li>点击 &quot;旋转&quot;按钮 启动转轮</li>
</ol>
<h3 id="核心机制图解" tabindex="-1"><a class="header-anchor" href="#核心机制图解"><span>核心机制图解</span></a></h3>
<figure><img src="/images/ct/9-hxjz.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="关键特性说明" tabindex="-1"><a class="header-anchor" href="#关键特性说明"><span>关键特性说明</span></a></h3>
<table>
<thead>
<tr>
<th>要素</th>
<th>详细规则</th>
</tr>
</thead>
<tbody>
<tr>
<td>层级系统</td>
<td>1 → 2 → 3 级奖金逐层提升（例：1级100万₫ → 3级5亿₫）</td>
</tr>
<tr>
<td>升级条件</td>
<td>行业常见模式：   • 连续命中特定区域   • 累积旋转次数   • 随机触发</td>
</tr>
<tr>
<td>奖金计算</td>
<td>最终奖金 = 投注额 × 层级倍率（3级可达1000倍以上）</td>
</tr>
<tr>
<td>视觉设计</td>
<td>多层同心转盘（内圈→外圈对应1→3级），光效随层级增强</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="术语对照表" tabindex="-1"><a class="header-anchor" href="#术语对照表"><span>术语对照表</span></a></h3>
<table>
<thead>
<tr>
<th>越南语</th>
<th>中文</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>Vòng quay</td>
<td>转轮</td>
<td>核心游戏组件</td>
</tr>
<tr>
<td>Giải thưởng</td>
<td>奖金</td>
<td>含现金/道具等</td>
</tr>
<tr>
<td>Cấp độ</td>
<td>层级</td>
<td>共3级</td>
</tr>
<tr>
<td>Đặt cược</td>
<td>投注</td>
<td>需先设置金额</td>
</tr>
<tr>
<td>Nút Quay</td>
<td>旋转按钮</td>
<td>启动游戏的关键控件</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="运作流程示例" tabindex="-1"><a class="header-anchor" href="#运作流程示例"><span>运作流程示例</span></a></h3>
<div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-plain"><span class="line"><span>玩家操作：</span></span>
<span class="line"><span>1. 投注 50,000₫ (≈15元)</span></span>
<span class="line"><span>2. 点击"旋转"</span></span>
<span class="line"><span></span></span>
<span class="line"><span>系统响应：</span></span>
<span class="line"><span>- 转轮启动 → 停留2级区域</span></span>
<span class="line"><span>- 奖金计算：50,000₫ × 50倍 = 2,500,000₫ (≈750元)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="设计优势分析" tabindex="-1"><a class="header-anchor" href="#设计优势分析"><span><strong>设计优势分析</strong></span></a></h3>
<ol>
<li><strong>成瘾性设计</strong>
<ul>
<li>层级递进制造 <strong>&quot;差一点就升级&quot;</strong> 心理</li>
<li>高倍率3级奖励刺激反复投注</li>
</ul>
</li>
<li><strong>操作极简</strong>
<ul>
<li>仅需 <strong>选金额+点按钮</strong> 两步操作</li>
</ul>
</li>
<li><strong>视觉刺激</strong>
<ul>
<li>动态光效强化 <strong>&quot;大奖即将到来&quot;</strong> 暗示</li>
</ul>
</li>
</ol>
<p>注：此为 <strong>老虎机变种游戏</strong>，通过多级奖励机制显著提升传统转轮游戏的奖金上限，常见于越南/东南亚在线菠菜平台。</p>
<ol>
<li>开始游戏
<ul>
<li>点击旋转后 → 第一级转轮启动</li>
<li>投注金额 立即从账户余额扣除</li>
</ul>
</li>
<li>结果判定
<ul>
<li>转轮完全停止后，以箭头指向的奖励格为最终结果</li>
</ul>
</li>
<li>升级机制
<ul>
<li>若停在 😊😊 特殊格 → 升级至更高层级（可直达2级或3级）</li>
<li>未触发笑脸 → 按当前层级结算</li>
</ul>
</li>
<li>顶级奖励
<ul>
<li>第三层级 提供最高价值奖励</li>
<li>奖金 = 投注额 × 35倍</li>
</ul>
</li>
</ol>
<h3 id="运作流程图示" tabindex="-1"><a class="header-anchor" href="#运作流程图示"><span>运作流程图示</span></a></h3>
<figure><img src="/images/ct/9-yzlc.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-plain"><span class="line"><span>sequenceDiagram\\</span></span>
<span class="line"><span>   玩家->>系统： 1.选择金额 + 点击旋转\\</span></span>
<span class="line"><span>   系统->>玩家： 扣除投注金\\</span></span>
<span class="line"><span>   系统->>转轮： 启动第一级转盘\\</span></span>
<span class="line"><span>   loop 判定阶段\\</span></span>
<span class="line"><span>      转轮-->>系统： 完全停止\\</span></span>
<span class="line"><span>      系统-->>玩家： 检测箭头位置\\</span></span>
<span class="line"><span>   end\\</span></span>
<span class="line"><span>   alt 停在😊😊格\\</span></span>
<span class="line"><span>      系统->>玩家： 升级至2/3级\\</span></span>
<span class="line"><span>   else 停在普通格\\</span></span>
<span class="line"><span>      系统->>玩家： 按当前级结算\\</span></span>
<span class="line"><span>   end$</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关键规则详解" tabindex="-1"><a class="header-anchor" href="#关键规则详解"><span>关键规则详解</span></a></h3>
<table>
<thead>
<tr>
<th>机制</th>
<th>说明</th>
<th>数学示例 (投注10万₫)</th>
</tr>
</thead>
<tbody>
<tr>
<td>即时扣款</td>
<td>点击旋转瞬间扣费，无论结果</td>
<td>账户-100,000₫</td>
</tr>
<tr>
<td>箭头判定</td>
<td>需完全静止后箭头中心指向的格子生效</td>
<td>误差≤1°视为有效</td>
</tr>
<tr>
<td>😊😊升级格</td>
<td>概率极低（通常&lt;5%），升级后转盘重置为更高级别</td>
<td>1级→2级：奖金范围提升3-5倍</td>
</tr>
<tr>
<td>35倍奖励</td>
<td>仅限3级特定格子（非所有3级格子），概率通常低于0.5%</td>
<td>中奖可得：100,000₫×35=3,500,000₫</td>
</tr>
</tbody>
</table>
<h3 id="层级奖励对比表" tabindex="-1"><a class="header-anchor" href="#层级奖励对比表"><span>层级奖励对比表</span></a></h3>
<table>
<thead>
<tr>
<th>层级</th>
<th>常见倍率范围</th>
<th>升级条件</th>
<th>特殊格奖励</th>
</tr>
</thead>
<tbody>
<tr>
<td>1级</td>
<td>1-15倍</td>
<td>基础层级</td>
<td>无</td>
</tr>
<tr>
<td>2级</td>
<td>8-25倍</td>
<td>1级命中😊😊</td>
<td>升级至3级</td>
</tr>
<tr>
<td>3级</td>
<td>15-35倍</td>
<td>2级命中😊😊</td>
<td>最高35倍</td>
</tr>
</tbody>
</table>
<p>⚠️ 注意</p>
<ul>
<li>笑脸格😊😊 仅触发升级，不产生直接奖金</li>
<li>35倍奖励必须达成两个条件：<br>
① 进入第3层级<br>
② 箭头停在35倍专属格</li>
</ul>
<hr>
<h3 id="术语对照与说明" tabindex="-1"><a class="header-anchor" href="#术语对照与说明"><span>术语对照与说明</span></a></h3>
<table>
<thead>
<tr>
<th>越南语</th>
<th>中文</th>
<th>补充说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>ví của bạn</td>
<td>玩家账户余额</td>
<td>即时扣款无确认流程</td>
</tr>
<tr>
<td>ô thưởng</td>
<td>奖励格子</td>
<td>不同颜色对应不同倍率</td>
</tr>
<tr>
<td>dừng hẳn</td>
<td>完全停止</td>
<td>物理引擎模拟真实惯性</td>
</tr>
<tr>
<td>phần thưởng có giá trị nhất</td>
<td>最高价值奖励</td>
<td>特指35倍而非所有3级奖励</td>
</tr>
</tbody>
</table>
<p>此设计通过层级跃迁+顶级高倍奖励制造暴富预期，实际依赖低概率升级机制（笑脸格）和极稀有35倍格控制赔付率，是典型的高风险博彩模型。</p>
<h2 id="游戏页面" tabindex="-1"><a class="header-anchor" href="#游戏页面"><span>游戏页面</span></a></h2>
<h3 id="主页面" tabindex="-1"><a class="header-anchor" href="#主页面"><span>主页面</span></a></h3>
<figure><img src="/images/superwheel/index.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="帮助页" tabindex="-1"><a class="header-anchor" href="#帮助页"><span>帮助页</span></a></h3>
<figure><img src="/images/superwheel/help-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="/images/superwheel/help-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="投注记录" tabindex="-1"><a class="header-anchor" href="#投注记录"><span>投注记录</span></a></h3>
<figure><img src="/images/superwheel/my.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="排行榜" tabindex="-1"><a class="header-anchor" href="#排行榜"><span>排行榜</span></a></h3>
<figure><img src="/images/superwheel/rank-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


