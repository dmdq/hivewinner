<template><div><h2 id="项目背景" tabindex="-1"><a class="header-anchor" href="#项目背景"><span>项目背景</span></a></h2>
<h3 id="_1-产品定位" tabindex="-1"><a class="header-anchor" href="#_1-产品定位"><span>1.产品定位</span></a></h3>
<figure><img src="/images/ct/scdw.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_2-核心价值" tabindex="-1"><a class="header-anchor" href="#_2-核心价值"><span>2. 核心价值</span></a></h3>
<ul>
<li>技术降本：为运营商节省单款游戏$200K+研发费用</li>
<li>合规赋能：预置越南TCN 7321:2023博彩技术规范</li>
<li>生态整合：支持跨运营商玩家数据迁移</li>
</ul>
<h2 id="角色定义" tabindex="-1"><a class="header-anchor" href="#角色定义"><span>角色定义</span></a></h2>
<h3 id="游戏商-我司" tabindex="-1"><a class="header-anchor" href="#游戏商-我司"><span>游戏商（我司）</span></a></h3>
<p>专注游戏算法研发与API平台输出，通过技术授权及流水分成盈利的核心技术供应商。</p>
<h3 id="营运商-合作方" tabindex="-1"><a class="header-anchor" href="#营运商-合作方"><span>营运商（合作方）</span></a></h3>
<p>负责本地化发行、用户获取及资金结算，依托自有渠道将游戏变现的终端运营主体。</p>
<h3 id="角色定义矩阵" tabindex="-1"><a class="header-anchor" href="#角色定义矩阵"><span>角色定义矩阵</span></a></h3>
<table>
<thead>
<tr>
<th>维度</th>
<th>游戏商（我司）</th>
<th>营运商（合作方）</th>
</tr>
</thead>
<tbody>
<tr>
<td>核心定位</td>
<td>游戏内容生产者 &amp; 技术平台提供方</td>
<td>渠道发行方 &amp; 本地化运营主体</td>
</tr>
<tr>
<td>核心资产</td>
<td>游戏IP/算法专利/API系统</td>
<td>用户流量/支付牌照/本地客服团队</td>
</tr>
<tr>
<td>盈利模式</td>
<td>API接入费 + 流水分成 + 增值服务</td>
<td>游戏流水抽佣 - 研发商分成</td>
</tr>
<tr>
<td>合规责任</td>
<td>技术合规（RNG认证/数据安全）</td>
<td>运营合规（牌照维护/反洗钱执行）</td>
</tr>
</tbody>
</table>
<h2 id="api服务体系架构" tabindex="-1"><a class="header-anchor" href="#api服务体系架构"><span>API服务体系架构</span></a></h2>
<h3 id="_1-基础服务层" tabindex="-1"><a class="header-anchor" href="#_1-基础服务层"><span>1. 基础服务层</span></a></h3>
<table>
<thead>
<tr>
<th>模块</th>
<th>功能描述</th>
<th>技术实现</th>
</tr>
</thead>
<tbody>
<tr>
<td>游戏引擎API</td>
<td>9款游戏逻辑核心</td>
<td>Golang微服务+Redis实时计算</td>
</tr>
<tr>
<td>多语言包</td>
<td>越南语/英语/中文动态切换</td>
<td>gRPC协议传输语言密钥</td>
</tr>
</tbody>
</table>
<h3 id="_2-业务增强层" tabindex="-1"><a class="header-anchor" href="#_2-业务增强层"><span>2. 业务增强层</span></a></h3>
<figure><img src="/images/ct/ywzq.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="合作接入" tabindex="-1"><a class="header-anchor" href="#合作接入"><span>合作接入</span></a></h2>
<h3 id="接入流程-运营商视角" tabindex="-1"><a class="header-anchor" href="#接入流程-运营商视角"><span>接入流程（运营商视角）</span></a></h3>
<figure><img src="/images/ct/jrlc.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="游戏选型-运营商视角" tabindex="-1"><a class="header-anchor" href="#游戏选型-运营商视角"><span>游戏选型（运营商视角）</span></a></h3>
<p>合作方（运营商）在我司开户后，可选择要对接的游戏列表，接入测试完成后可对外进行运营</p>
<figure><img src="/images/index.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="附件" tabindex="-1"><a class="header-anchor" href="#附件"><span>附件</span></a></h2>
<h3 id="游戏列表-玩法介绍" tabindex="-1"><a class="header-anchor" href="#游戏列表-玩法介绍"><span>游戏列表（玩法介绍）</span></a></h3>
<table>
<thead>
<tr>
<th>ID</th>
<th>图标</th>
<th>游戏名称</th>
<th>游戏别名</th>
<th>参与模式</th>
<th>游戏类型</th>
<th>文档密码</th>
</tr>
</thead>
<tbody>
<tr>
<td>2001</td>
<td><img src="/images/tx.png" width="60" height="60" /></td>
<td>tx</td>
<td>骰宝</td>
<td>多人</td>
<td>投注</td>
<td></td>
</tr>
<tr>
<td>2002</td>
<td><img src="/images/roulette.png" width="60" height="60" /></td>
<td>roulette</td>
<td>轮盘</td>
<td>单人</td>
<td>转盘</td>
<td></td>
</tr>
<tr>
<td>2003</td>
<td><img src="/images/xocdia.png" width="60" height="60" /></td>
<td>xocdia</td>
<td>色碟</td>
<td>多人</td>
<td>投注</td>
<td></td>
</tr>
<tr>
<td>2004</td>
<td><img src="/images/mrbean.png" width="60" height="60" /></td>
<td>mrbean</td>
<td>憨豆先生</td>
<td>单人</td>
<td>休闲</td>
<td></td>
</tr>
<tr>
<td>2005</td>
<td><img src="/images/tnj.png" width="60" height="60" /></td>
<td>tnj</td>
<td>汤姆和杰瑞</td>
<td>多人</td>
<td>投注</td>
<td></td>
</tr>
<tr>
<td>2006</td>
<td><img src="/images/vsc.png" width="60" height="60" /></td>
<td>vsc</td>
<td>刮刮乐</td>
<td>单人</td>
<td>彩票</td>
<td></td>
</tr>
<tr>
<td>2007</td>
<td><img src="/images/minipoker.png" width="60" height="60" /></td>
<td>minipoker</td>
<td>迷你扑克</td>
<td>单人</td>
<td>老虎机</td>
<td></td>
</tr>
<tr>
<td>2008</td>
<td><img src="/images/hilow.png" width="60" height="60" /></td>
<td>hilow</td>
<td>上下分</td>
<td>单人</td>
<td>休闲</td>
<td></td>
</tr>
<tr>
<td>2009</td>
<td><img src="/images/superwheel.png" width="60" height="60" /></td>
<td>superwheel</td>
<td>超级转轮</td>
<td>单人</td>
<td>轮盘</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="资源下载" tabindex="-1"><a class="header-anchor" href="#资源下载"><span>资源下载</span></a></h3>
<p>包含部分示意图，启动图标；仅供参考，<a href="https://download.zhuoyigame.com/image/for88.zip" target="_blank" rel="noopener noreferrer">下载地址</a></p>
<h3 id="参考地址" tabindex="-1"><a class="header-anchor" href="#参考地址"><span>参考地址</span></a></h3>
<p>竞品地址：<a href="https://debet.so/events" target="_blank" rel="noopener noreferrer">https://debet.so/events</a></p>
</div></template>


