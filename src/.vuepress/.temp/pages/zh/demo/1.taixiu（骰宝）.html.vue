<template><div><h2 id="游戏说明" tabindex="-1"><a class="header-anchor" href="#游戏说明"><span>游戏说明</span></a></h2>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749993659206-034de4b9-1e21-4aaf-81c2-df6904d626ef.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>该游是一款多人参与的投注类型游戏，玩家可通过对指定区域进行投注，系统根据设定的开奖算法对游戏进行开奖结算。</p>
</blockquote>
<h3 id="基本规则" tabindex="-1"><a class="header-anchor" href="#基本规则"><span>基本规则</span></a></h3>
<ol>
<li>公平性认证
<ul>
<li>所有结果由 RNG（随机数生成器）系统生成，确保绝对随机与公平</li>
</ul>
</li>
<li>下注目标
<ul>
<li>预测 三颗骰子 的总点数结果</li>
<li>大（Tài）：总和 11-18</li>
<li>小（Xỉu）：总和 3-10</li>
</ul>
</li>
<li>头奖机制
<ul>
<li>大极端：总和=18点（如🎲6+6+6）</li>
<li>小极端：总和=3点（如🎲1+1+1）</li>
</ul>
</li>
</ol>
<hr>
<h3 id="概率分布与赔率" tabindex="-1"><a class="header-anchor" href="#概率分布与赔率"><span>概率分布与赔率</span></a></h3>
<table>
<thead>
<tr>
<th>下注类型</th>
<th>概率</th>
<th>标准赔率</th>
<th>庄家优势</th>
</tr>
</thead>
<tbody>
<tr>
<td>大</td>
<td>48.61%</td>
<td>1:0.95</td>
<td>2.78%</td>
</tr>
<tr>
<td>小</td>
<td>48.61%</td>
<td>1:0.95</td>
<td>2.78%</td>
</tr>
<tr>
<td>头奖</td>
<td>0.46%</td>
<td>1:50+</td>
<td>≥15%</td>
</tr>
</tbody>
</table>
<p>注：基于3颗六面骰的概率模型计算</p>
<hr>
<h3 id="机制图解" tabindex="-1"><a class="header-anchor" href="#机制图解"><span>机制图解</span></a></h3>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1750002524014-98b81e77-cada-441d-8f54-c980ca2728c2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="术语对照表" tabindex="-1"><a class="header-anchor" href="#术语对照表"><span>术语对照表</span></a></h3>
<table>
<thead>
<tr>
<th>越南语</th>
<th>中文</th>
<th>英文术语</th>
</tr>
</thead>
<tbody>
<tr>
<td>Xí ngầu</td>
<td>骰子</td>
<td>Dice</td>
</tr>
<tr>
<td>Tài</td>
<td>大</td>
<td>Big</td>
</tr>
<tr>
<td>Xỉu</td>
<td>小</td>
<td>Small</td>
</tr>
<tr>
<td>Tổng số điểm</td>
<td>总点数</td>
<td>Total Points</td>
</tr>
<tr>
<td>Jackpot</td>
<td>头奖</td>
<td>Jackpot</td>
</tr>
</tbody>
</table>
<h3 id="头奖分配机制" tabindex="-1"><a class="header-anchor" href="#头奖分配机制"><span>头奖分配机制</span></a></h3>
<p>计算公式：</p>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1750002704568-8cd2297e-b0da-4340-bfed-3727819dff9e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>触发条件：</p>
<ol>
<li>必须参与该局游戏并投注</li>
<li>仅当开出 18点（大极端） 或 3点（小极端） 时激活</li>
</ol>
<p>实例计算:</p>
<p>▸ 头奖池：5亿₫<br>
▸ 获胜方总投注额：2.5亿₫<br>
▸ 玩家A投注额：500万₫</p>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1750002911916-07a72e6a-241a-47b5-8872-3853574ac971.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>实际收益率：200%（净赚500万₫）</p>
<h3 id="md5公平性验证流程" tabindex="-1"><a class="header-anchor" href="#md5公平性验证流程"><span>MD5公平性验证流程</span></a></h3>
<p>步骤：</p>
<ol>
<li>开局存档
<ul>
<li>游戏开始时复制系统提供的 初始MD5字符串（例：<code v-pre>a1b2c3...</code>）</li>
</ul>
</li>
<li>结果验证
<ul>
<li>开奖后复制 结果生成码（非MD5值）</li>
<li>访问第三方验证站：<a href="https://md5.cz/" target="_blank" rel="noopener noreferrer">https://md5.cz/</a></li>
<li>将结果生成码粘贴至输入框 → 点击 <code v-pre>hash darling, hash!</code></li>
</ul>
</li>
<li>数据比对
<ul>
<li>将网站输出的 MD5哈希值 与开局保存的初始MD5比对</li>
<li>完全一致 ⇒ 结果未被篡改</li>
</ul>
</li>
</ol>
<h3 id="关键术语解析" tabindex="-1"><a class="header-anchor" href="#关键术语解析"><span>关键术语解析</span></a></h3>
<table>
<thead>
<tr>
<th>越南语</th>
<th>中文</th>
<th>技术含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>Tiền chia thưởng</td>
<td>奖金分配额</td>
<td>按投注比例计算</td>
</tr>
<tr>
<td>Tổng cực bên thắng</td>
<td>获胜方总投注额</td>
<td>分母项，决定分配比例</td>
</tr>
<tr>
<td>Phiên</td>
<td>单局游戏</td>
<td>独立计算单元</td>
</tr>
<tr>
<td>Chuỗi MD5</td>
<td>MD5字符串</td>
<td>128位哈希值（例：e4d909c...）</td>
</tr>
<tr>
<td>Đối chiếu</td>
<td>数据比对</td>
<td>一致性验证核心</td>
</tr>
</tbody>
</table>
<h2 id="游戏规则" tabindex="-1"><a class="header-anchor" href="#游戏规则"><span>游戏规则</span></a></h2>
<h3 id="开始" tabindex="-1"><a class="header-anchor" href="#开始"><span>开始</span></a></h3>
<p>游戏开始，系统重置游戏对局编号（页面右上角 #<font style="color:#DF2A3F;">12333356</font> 字样），并且通知所有在线玩家可以进行下注</p>
<h3 id="下注" tabindex="-1"><a class="header-anchor" href="#下注"><span>下注</span></a></h3>
<p>下注时间：<font style="color:#DF2A3F;">20</font>秒，在可下注时间内，用户可以对两边区域进行投注，游戏过程中“游戏页面”每秒刷新两边区域的投注人数和投注总额；在下注最后<font style="color:#DF2A3F;">3秒</font>，系统进行封盘（停止下注）</p>
<h3 id="结算" tabindex="-1"><a class="header-anchor" href="#结算"><span>结算</span></a></h3>
<p>赔率：<strong><font style="color:#DF2A3F;">1.96</font></strong>，假设玩家A，对“TAI”区域进行押注10K，游戏结算时，开奖结果为“TAI”，则该玩家一共获得19.6k的赔付金额（本金包含在内）</p>
<h2 id="游戏页面" tabindex="-1"><a class="header-anchor" href="#游戏页面"><span>游戏页面</span></a></h2>
<h3 id="布局介绍" tabindex="-1"><a class="header-anchor" href="#布局介绍"><span>布局介绍</span></a></h3>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1750038280358-33256281-91fc-489e-98d9-5a65de6e8cb2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>区域1: 为菜单列表，从上往下分别为</p>
<blockquote>
<p>菜单收缩按钮（点击后可折叠菜单导航）</p>
<p>帮助按钮（点击后可显示帮助页面）</p>
<p>历史投注（用户历史投注，一页20条数据，可分页）</p>
<p>走势图（系统开奖历史，以报表形式展示）</p>
<p>爆奖池历史（系统开出头奖的记录- 18点或者6点）</p>
</blockquote>
<p>区域2: 为筹码列表，用户可选择指定的金额，选中后当前筹码高亮显示，用户可以点击投入输入框，将投注金额投注至指定区域（可累积）；注意：需要点击中间绿色投注按钮才进行投注确认</p>
<p>区域3: 投注操作按钮，从左往右分别为</p>
<blockquote>
<p>继续投注（按用户最后一次成功投注的相同投注额继续进行投注一次：请求即确认）</p>
<p>确认投注（用户在筹码区域投注至指定的区域后需要手动提交确认）</p>
<p>x2 （最后一次成功投注额的两倍金额进行投注：请求即确认）</p>
</blockquote>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749993733924-130d89f1-7959-4115-9ec0-7c11dd0dc306.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="帮助页" tabindex="-1"><a class="header-anchor" href="#帮助页"><span>帮助页</span></a></h3>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749993831563-4f8b522a-6deb-4139-859a-034645a09343.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749993843906-e12127d4-d839-49c5-944b-211ff5317650.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="投注记录" tabindex="-1"><a class="header-anchor" href="#投注记录"><span>投注记录</span></a></h3>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749994952710-602d9317-f94b-48c4-a145-4b177cfb880a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="开奖历史走势图" tabindex="-1"><a class="header-anchor" href="#开奖历史走势图"><span>开奖历史走势图</span></a></h3>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749995054999-64afc414-f115-4eb4-8d2b-3c6815c1b967.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749995073442-432c1346-4a52-4bc2-a439-36421f9127c5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


