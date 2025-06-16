<template><div><h2 id="游戏说明" tabindex="-1"><a class="header-anchor" href="#游戏说明"><span>游戏说明</span></a></h2>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749995835060-70580973-2c4b-468f-8927-5034364992b2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="游戏规则" tabindex="-1"><a class="header-anchor" href="#游戏规则"><span>游戏规则</span></a></h2>
<ol>
<li>游戏组件：
<ul>
<li>1个碟盘（đĩa）</li>
<li>1个盖碗（bắt）</li>
<li>4枚双色硬币（白色/đô色*）<br>
注：&quot;đô&quot; 可能指金色/红色（越南传统赌具常见配色）</li>
</ul>
</li>
<li>玩法流程：
<ul>
<li>玩家选择投注金额</li>
<li>将筹码押注在一个或多个预测区域</li>
<li>庄家摇动盖碗中的硬币后揭晓结果</li>
</ul>
</li>
</ol>
<hr>
<h3 id="核心投注选项" tabindex="-1"><a class="header-anchor" href="#核心投注选项"><span>核心投注选项</span></a></h3>
<table>
<thead>
<tr>
<th>投注类型</th>
<th>赔率组合</th>
<th>规则说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>CHẴN（偶数）</td>
<td>40 / 40 / 2020</td>
<td>押注白色朝上的硬币为偶数枚</td>
</tr>
<tr>
<td>LẺ（奇数）</td>
<td>3010 / 1030</td>
<td>押注白色朝上的硬币为奇数枚</td>
</tr>
</tbody>
</table>
<p>注：原文&quot;CHÁN&quot;应为&quot;CHẴN&quot;（偶数），&quot;LÊ&quot;应为&quot;LẺ&quot;（奇数）的笔误</p>
<hr>
<h3 id="概率与赔率模型" tabindex="-1"><a class="header-anchor" href="#概率与赔率模型"><span>概率与赔率模型</span></a></h3>
<p>4枚硬币组合概率：</p>
<table>
<thead>
<tr>
<th>白色硬币数量</th>
<th>概率</th>
<th>结果类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>0枚</td>
<td>6.25%</td>
<td>偶数</td>
</tr>
<tr>
<td>1枚</td>
<td>25%</td>
<td>奇数</td>
</tr>
<tr>
<td>2枚</td>
<td>37.5%</td>
<td>偶数</td>
</tr>
<tr>
<td>3枚</td>
<td>25%</td>
<td>奇数</td>
</tr>
<tr>
<td>4枚</td>
<td>6.25%</td>
<td>偶数</td>
</tr>
</tbody>
</table>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1750004877597-a2188bfb-e370-48e1-bbc9-d94f453f1001.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1750004896746-4caf56fe-3be0-4c73-a5a9-f3f208f3a4cc.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>实际赔率对比：</p>
<table>
<thead>
<tr>
<th>投注</th>
<th>标称赔率</th>
<th>实际概率</th>
<th>庄家优势</th>
</tr>
</thead>
<tbody>
<tr>
<td>偶数</td>
<td>40倍*</td>
<td>50%</td>
<td>20%↑</td>
</tr>
<tr>
<td>奇数</td>
<td>3010倍*</td>
<td>50%</td>
<td>98.3%↑</td>
</tr>
</tbody>
</table>
<p>*赔率组合解析：</p>
<ul>
<li>40/40/2020：可能对应不同场景（如2白赔40倍，4白赔2020倍）</li>
<li>3010/1030：极高赔率暗示特殊组合（如1白或3白）</li>
</ul>
<hr>
<h3 id="运作示意图" tabindex="-1"><a class="header-anchor" href="#运作示意图"><span>运作示意图</span></a></h3>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1750004934596-06eb12b3-88c2-4829-8e00-e04a7f4441b9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="关键术语校正" tabindex="-1"><a class="header-anchor" href="#关键术语校正"><span>关键术语校正</span></a></h3>
<table>
<thead>
<tr>
<th>原文</th>
<th>正确拼写</th>
<th>中文</th>
<th>数学定义</th>
</tr>
</thead>
<tbody>
<tr>
<td>CHÁN</td>
<td>CHẴN</td>
<td>偶数</td>
<td>2k (k=0,1,2)</td>
</tr>
<tr>
<td>LÊ</td>
<td>LẺ</td>
<td>奇数</td>
<td>2k+1 (k=0,1)</td>
</tr>
<tr>
<td>Đô</td>
<td>Đỏ/Vàng</td>
<td>红/金色</td>
<td>硬币对比色面</td>
</tr>
</tbody>
</table>
<h3 id="历史渊源" tabindex="-1"><a class="header-anchor" href="#历史渊源"><span>历史渊源</span></a></h3>
<p>此游戏源自越南传统 Bầu Cua（葫芦-蟹-鱼）赌戏变种：</p>
<ul>
<li>将动物符号改为硬币正反面</li>
<li>概率模型从6面骰（16.7%）升级为二项分布（更易操控）</li>
<li>现代电子版通过RNG强化庄家优势</li>
</ul>
<h3 id="特殊投注选项" tabindex="-1"><a class="header-anchor" href="#特殊投注选项"><span>特殊投注选项</span></a></h3>
<p>赔率组合：40 / 40 / 30 10 / 10 30<br>
注：此格式可能对应不同硬币组合的赔率分层，例如：</p>
<ul>
<li>2白40倍 | 4白40倍 | 1白+特殊组合30倍</li>
<li>3白10倍 | 特定排列30倍</li>
</ul>
<hr>
<h3 id="幸运方向奖池-hu-chieu-tai" tabindex="-1"><a class="header-anchor" href="#幸运方向奖池-hu-chieu-tai"><span>幸运方向奖池 (Hũ Chiều Tài)</span></a></h3>
<p>资金来源：</p>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1750005019569-41d030c8-d80c-4d0f-ab1f-d99d4683a3e9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>▸ 每局抽取部分废弃资金注入奖池并持续累积</p>
<p>触发机制：</p>
<ol>
<li>迷你转盘环节：
<ul>
<li>在揭盖（mở bát）前启动迷你转盘</li>
</ul>
</li>
<li>双重匹配条件：
<ul>
<li>转盘停止时三个图标相同</li>
<li>该图标匹配当局开盖结果</li>
</ul>
</li>
</ol>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1750005055256-de97727b-6453-4e54-a02b-01bc606736cd.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="奖金计算公式" tabindex="-1"><a class="header-anchor" href="#奖金计算公式"><span>奖金计算公式</span></a></h3>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1750005084172-11436251-a67f-4491-836a-7ddbe1c6f3dd.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="术语精准对照" tabindex="-1"><a class="header-anchor" href="#术语精准对照"><span>术语精准对照</span></a></h3>
<table>
<thead>
<tr>
<th>越南语</th>
<th>中文</th>
<th>博彩术语</th>
</tr>
</thead>
<tbody>
<tr>
<td>Tiền phế</td>
<td>废弃资金/抽水</td>
<td>Dead Money</td>
</tr>
<tr>
<td>Tích luỹ dẫn</td>
<td>累积增长</td>
<td>Progressive Pooling</td>
</tr>
<tr>
<td>Mini slot</td>
<td>迷你转盘</td>
<td>Bonus Wheel</td>
</tr>
<tr>
<td>Bát</td>
<td>盖碗</td>
<td>Cover Bowl</td>
</tr>
<tr>
<td>Cửa nổ</td>
<td>触发奖池的下注门</td>
<td>Winning Gate</td>
</tr>
</tbody>
</table>
<h2 id="游戏规则-1" tabindex="-1"><a class="header-anchor" href="#游戏规则-1"><span>游戏规则</span></a></h2>
<h3 id="下注" tabindex="-1"><a class="header-anchor" href="#下注"><span>下注</span></a></h3>
<p>注时间：<font style="color:#DF2A3F;">25</font>秒，在可下注时间内，用户可以对两边区域进行投注，游戏过程中“游戏页面”每秒刷新所有区域的投注人数和投注总额；在下注最后<font style="color:#DF2A3F;">3秒</font>，系统进行封盘（停止下注）</p>
<h3 id="赔率" tabindex="-1"><a class="header-anchor" href="#赔率"><span>赔率</span></a></h3>
<table>
<thead>
<tr>
<th>区域名称</th>
<th>赔率</th>
<th>开奖条件</th>
</tr>
</thead>
<tbody>
<tr>
<td>CHAN</td>
<td>1:2</td>
<td>两红 / 两白</td>
</tr>
<tr>
<td>LE</td>
<td>1:2</td>
<td>一红 / 一白</td>
</tr>
<tr>
<td>R3</td>
<td>1:4</td>
<td>三红一白</td>
</tr>
<tr>
<td>W3</td>
<td>1:4</td>
<td>三白一红</td>
</tr>
<tr>
<td>R4</td>
<td>1:16</td>
<td>四红</td>
</tr>
<tr>
<td>W4</td>
<td>1:16</td>
<td>四白</td>
</tr>
</tbody>
</table>
<h2 id="游戏页面" tabindex="-1"><a class="header-anchor" href="#游戏页面"><span>游戏页面</span></a></h2>
<h3 id="布局示意图" tabindex="-1"><a class="header-anchor" href="#布局示意图"><span>布局示意图</span></a></h3>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1750041181483-93345000-3b49-4076-92d5-0b1609747159.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="主页面" tabindex="-1"><a class="header-anchor" href="#主页面"><span>主页面</span></a></h3>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749995870694-ce66ff1d-7700-4c1d-be08-9b9242b32479.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="帮助页" tabindex="-1"><a class="header-anchor" href="#帮助页"><span>帮助页</span></a></h3>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749995908644-e6df32fa-a6d8-42d2-a244-dbe62983bd0d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749995887479-bc48e630-6f49-4e0d-a9f7-9608daad5057.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749995892700-376bcf23-cae9-4364-a184-268b42ab4c16.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="投注记录" tabindex="-1"><a class="header-anchor" href="#投注记录"><span>投注记录</span></a></h3>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749995947316-6268499b-892b-45c8-86e5-2fb866d86881.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="开奖历史走势图" tabindex="-1"><a class="header-anchor" href="#开奖历史走势图"><span>开奖历史走势图</span></a></h3>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749995974728-033654bd-c1d0-4080-bb22-6a8dbab4cb61.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="大奖记录" tabindex="-1"><a class="header-anchor" href="#大奖记录"><span>大奖记录</span></a></h3>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749996083760-95716b83-de46-4f21-a45e-4d28a2b55768.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="排行榜" tabindex="-1"><a class="header-anchor" href="#排行榜"><span>排行榜</span></a></h3>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749996087972-2ca708f3-5a6f-40ce-9e7e-96ac1d66ddb9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


