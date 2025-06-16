<template><div><h2 id="游戏说明" tabindex="-1"><a class="header-anchor" href="#游戏说明"><span>游戏说明</span></a></h2>
<figure><img src="/images/mrbean.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>该游是一款多人参与的投注类型游戏，玩家可通过对指定区域进行押注，系统根据设定的开奖算法对游戏进行开奖结算，对投注命中的的玩家进行指定的赔率进行赔付，对于未命中的区域的投注额进行回收</p>
<h3 id="核心玩法" tabindex="-1"><a class="header-anchor" href="#核心玩法"><span>核心玩法</span></a></h3>
<ul>
<li>选择投注金额 → 确认下注 → 飞碟载着豆子先生升空</li>
<li>奖励系数实时攀升 → 必须在飞碟消失前手动点击取款锁定奖金</li>
</ul>
<p>⚠️ 本质剖析：<br>
此为 高压心理博弈游戏，通过以下设计刺激玩家：</p>
<ul>
<li>视觉：飞碟加速上升强化紧迫感</li>
<li>数学：后期系数暴涨诱使贪婪</li>
<li>损失厌恶：放弃已见的高系数更难<br>
实际庄家优势＞25%，长期必亏。</li>
</ul>
<h3 id="详细操作流程" tabindex="-1"><a class="header-anchor" href="#详细操作流程"><span>详细操作流程</span></a></h3>
<p>步骤1：选择投注档位</p>
<table>
<thead>
<tr>
<th>低档位</th>
<th>中档位</th>
<th>高档位</th>
</tr>
</thead>
<tbody>
<tr>
<td>10,000₫</td>
<td>100,000₫</td>
<td>1,000,000₫</td>
</tr>
<tr>
<td>50,000₫</td>
<td>500,000₫</td>
<td>5,000,000₫</td>
</tr>
</tbody>
</table>
<p>步骤2：启动游戏</p>
<ul>
<li>点击 &quot;下注&quot;按钮 → 飞碟升空 → 奖励系数从1.0开始递增</li>
</ul>
<p>步骤3：关键操作</p>
<ul>
<li>观察系数增长 → 在飞碟消失前点击红色 &quot;取款&quot;按钮</li>
<li>结算公式： 奖金 = 投注额 × 当前系数</li>
</ul>
<h3 id="核心机制图解" tabindex="-1"><a class="header-anchor" href="#核心机制图解"><span>核心机制图解</span></a></h3>
<figure><img src="/images/ct/4-hxjz.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="关键规则说明" tabindex="-1"><a class="header-anchor" href="#关键规则说明"><span>关键规则说明</span></a></h3>
<table>
<thead>
<tr>
<th>机制</th>
<th>风险提示</th>
<th>行业典型数据</th>
</tr>
</thead>
<tbody>
<tr>
<td>实时系数</td>
<td>每秒增长0.1-5倍（指数递增）</td>
<td>最高记录可达500倍</td>
</tr>
<tr>
<td>消失判定</td>
<td>飞碟离屏即判定失败</td>
<td>平均可见时间8-15秒</td>
</tr>
<tr>
<td>手动取款</td>
<td>必须主动点击 → 延迟1秒即可能归零</td>
<td>超时率高达73%</td>
</tr>
<tr>
<td>高档位风险</td>
<td>5,000,000₫（≈1500元）一局可能秒损</td>
<td>越南人均日薪≈200,000₫</td>
</tr>
</tbody>
</table>
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
<td>Đĩa bay</td>
<td>飞碟</td>
<td>倒计时载体</td>
</tr>
<tr>
<td>Hệ số thưởng</td>
<td>奖励系数</td>
<td>实时浮动乘数</td>
</tr>
<tr>
<td>Rút tiền</td>
<td>取款</td>
<td>唯一结算方式</td>
</tr>
<tr>
<td>Bay đi mất</td>
<td>飞走消失</td>
<td>视觉提示+强制结束</td>
</tr>
</tbody>
</table>
<h3 id="核心功能" tabindex="-1"><a class="header-anchor" href="#核心功能"><span>核心功能</span></a></h3>
<ol>
<li>变更投注额
<ul>
<li>仅限游戏开始前调整下注金额</li>
</ul>
</li>
<li>自动投注模式
<ul>
<li>开启后系统将自动续投后续回合</li>
</ul>
</li>
<li>自动提款（止盈）
<ul>
<li>设置目标倍率 → 达成时自动结算奖金</li>
<li>注：规避手动操作延迟风险</li>
</ul>
</li>
<li>自定义止盈点
<ul>
<li>输入范围：1.1倍 - 100倍</li>
<li>支持键盘直接输入精确值</li>
</ul>
</li>
</ol>
<h3 id="运作机制图解" tabindex="-1"><a class="header-anchor" href="#运作机制图解"><span>运作机制图解</span></a></h3>
<figure><img src="/images/ct/4-yzjz.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="游戏规则" tabindex="-1"><a class="header-anchor" href="#游戏规则"><span>游戏规则</span></a></h2>
<h3 id="下注" tabindex="-1"><a class="header-anchor" href="#下注"><span>下注</span></a></h3>
<h3 id="赔率" tabindex="-1"><a class="header-anchor" href="#赔率"><span>赔率</span></a></h3>
<h3 id="结算" tabindex="-1"><a class="header-anchor" href="#结算"><span>结算</span></a></h3>
<h2 id="游戏页面" tabindex="-1"><a class="header-anchor" href="#游戏页面"><span>游戏页面</span></a></h2>
<h3 id="主页面" tabindex="-1"><a class="header-anchor" href="#主页面"><span>主页面</span></a></h3>
<figure><img src="/images/mrbean/index.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="帮助页" tabindex="-1"><a class="header-anchor" href="#帮助页"><span>帮助页</span></a></h3>
<figure><img src="/images/mrbean/help-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="/images/mrbean/help-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="/images/mrbean/help-3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="投注记录" tabindex="-1"><a class="header-anchor" href="#投注记录"><span>投注记录</span></a></h3>
<figure><img src="/images/mrbean/my.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


