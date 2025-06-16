<template><div><h2 id="项目背景" tabindex="-1"><a class="header-anchor" href="#项目背景"><span>项目背景</span></a></h2>
<h3 id="_1-市场定位" tabindex="-1"><a class="header-anchor" href="#_1-市场定位"><span>1. 市场定位</span></a></h3>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1750045485396-b6eb1020-70ca-4b75-af33-245ef42ae422.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
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
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1750045540991-cd000bc9-844d-417f-8242-25163237ee16.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="合作接入" tabindex="-1"><a class="header-anchor" href="#合作接入"><span>合作接入</span></a></h2>
<h3 id="接入流程-运营商视角" tabindex="-1"><a class="header-anchor" href="#接入流程-运营商视角"><span>接入流程（运营商视角）</span></a></h3>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1750045689857-b8f641ea-0dcd-4a20-88cd-0dc9d10c4820.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="游戏选型-运营商视角" tabindex="-1"><a class="header-anchor" href="#游戏选型-运营商视角"><span>游戏选型（运营商视角）</span></a></h3>
<p>合作方（运营商）在我司开户后，可选择要对接的游戏列表，接入测试完成后可对外进行运营</p>
<figure><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749992119461-4c0e0fe1-9cac-4092-ac76-a4bba6b868a3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="附件-游戏列表-玩法介绍" tabindex="-1"><a class="header-anchor" href="#附件-游戏列表-玩法介绍"><span>附件：游戏列表（玩法介绍）</span></a></h2>
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
<td><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749992458634-0711cf2d-c7a2-43f6-a1e3-30ea4be89bb9.png" alt="" loading="lazy"></td>
<td>tx</td>
<td>骰宝</td>
<td>多人</td>
<td>投注</td>
<td><a href="https://www.yuque.com/u34203502/wotydg/ntdsiw99a012kwfu?singleDoc#%20%E3%80%8A1.taixiu%EF%BC%88%E9%AA%B0%E5%AE%9D%EF%BC%89%E3%80%8B%20%E5%AF%86%E7%A0%81%EF%BC%9Aif22" target="_blank" rel="noopener noreferrer">if22</a></td>
</tr>
<tr>
<td>2002</td>
<td><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749992522201-7a2e7076-2a4d-44d1-8491-7b9ed1070aae.png" alt="" loading="lazy"></td>
<td>roulete</td>
<td>轮盘</td>
<td>单人</td>
<td>转盘</td>
<td><a href="https://www.yuque.com/u34203502/wotydg/iw3hy3nx3xucc2m0?singleDoc#%20%E3%80%8A2.roulete%EF%BC%88%E8%BD%AE%E7%9B%98%EF%BC%89%E3%80%8B%20%E5%AF%86%E7%A0%81%EF%BC%9Anizc" target="_blank" rel="noopener noreferrer">nizc</a></td>
</tr>
<tr>
<td>2003</td>
<td><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749992515665-9609cb85-deed-40d4-adff-59730f8fb5cb.png" alt="" loading="lazy"></td>
<td>xocdia</td>
<td>色碟</td>
<td>多人</td>
<td>投注</td>
<td><a href="https://www.yuque.com/u34203502/wotydg/zpxn8hzpflrvg2fd?singleDoc#%20%E3%80%8A3.xoc%EF%BC%88%E8%89%B2%E7%A2%9F%EF%BC%89%E3%80%8B%20%E5%AF%86%E7%A0%81%EF%BC%9Anec5" target="_blank" rel="noopener noreferrer">nec5</a></td>
</tr>
<tr>
<td>2004</td>
<td><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749992510589-3ff7ae90-c106-4da1-80e3-e415d0fb4f1f.png" alt="" loading="lazy"></td>
<td>mrbean</td>
<td>憨豆先生</td>
<td>单人</td>
<td>休闲</td>
<td><a href="https://www.yuque.com/u34203502/wotydg/ucr3yb6a1ruch7i5?singleDoc#%20%E3%80%8A4.mrbean%EF%BC%88%E6%86%A8%E8%B1%86%E5%85%88%E7%94%9F%EF%BC%89%E3%80%8B%20%E5%AF%86%E7%A0%81%EF%BC%9Aadkp" target="_blank" rel="noopener noreferrer">adkp</a></td>
</tr>
<tr>
<td>2005</td>
<td><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749992501968-c0f00423-9f19-4c60-94b9-5ad91804b0a3.png" alt="" loading="lazy"></td>
<td>tnj</td>
<td>汤姆和杰瑞</td>
<td>多人</td>
<td>投注</td>
<td><a href="https://www.yuque.com/u34203502/wotydg/pcbqd1zot8nn3re5?singleDoc#%20%E3%80%8A5.tnj%EF%BC%88%E6%B1%A4%E5%A7%86%E5%92%8C%E6%9D%B0%E7%91%9E%EF%BC%89%E3%80%8B%20%E5%AF%86%E7%A0%81%EF%BC%9Atfqk" target="_blank" rel="noopener noreferrer">tfqk</a></td>
</tr>
<tr>
<td>2006</td>
<td><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749992495234-3cf53eab-c9d5-4eb3-ae77-0083fed9f218.png" alt="" loading="lazy"></td>
<td>vsc</td>
<td>刮刮乐</td>
<td>单人</td>
<td>彩票</td>
<td><a href="https://www.yuque.com/u34203502/wotydg/znv9hfkeygrm8ren?singleDoc#%20%E3%80%8A6.vsc%EF%BC%88%E5%88%AE%E5%88%AE%E4%B9%90%EF%BC%89%E3%80%8B%20%E5%AF%86%E7%A0%81%EF%BC%9Abbcp" target="_blank" rel="noopener noreferrer">bbcp</a></td>
</tr>
<tr>
<td>2007</td>
<td><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749992570790-1fa8e047-ac75-4c7f-930b-504d1c27e471.png" alt="" loading="lazy"></td>
<td>minipoker</td>
<td>迷你扑克</td>
<td>单人</td>
<td>老虎机</td>
<td><a href="https://www.yuque.com/u34203502/wotydg/zk46bnsmhbvgl5r4?singleDoc#%20%E3%80%8A7.minipoker%EF%BC%88%E8%BF%B7%E4%BD%A0%E6%89%91%E5%85%8B%EF%BC%89%E3%80%8B%20%E5%AF%86%E7%A0%81%EF%BC%9Abdfe" target="_blank" rel="noopener noreferrer">bdfe</a></td>
</tr>
<tr>
<td>2008</td>
<td><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749992564331-44b082a3-a275-4675-96f0-1821a1862e1a.png" alt="" loading="lazy"></td>
<td>hilow</td>
<td>上下分</td>
<td>单人</td>
<td>休闲</td>
<td><a href="https://www.yuque.com/u34203502/wotydg/kmzyh2qttgorz1mq?singleDoc#%20%E3%80%8A8.hilow%EF%BC%88%E4%B8%8A%E4%B8%8B%E5%88%86%EF%BC%89%E3%80%8B%20%E5%AF%86%E7%A0%81%EF%BC%9Atob5" target="_blank" rel="noopener noreferrer">tob5</a></td>
</tr>
<tr>
<td>2009</td>
<td><img src="https://cdn.nlark.com/yuque/0/2025/png/35742495/1749992605819-56ec1cac-5b9f-40ad-a653-cfb887c83327.png" alt="" loading="lazy"></td>
<td>superwheel</td>
<td>超级转轮</td>
<td>单人</td>
<td>轮盘</td>
<td><a href="https://www.yuque.com/u34203502/wotydg/dczhsp4ghg72hrq8?singleDoc#%20%E3%80%8A9.superwheel%EF%BC%88%E8%B6%85%E7%BA%A7%E8%BD%AC%E8%BD%AE%EF%BC%89%E3%80%8B%20%E5%AF%86%E7%A0%81%EF%BC%9Axanz" target="_blank" rel="noopener noreferrer">xanz</a></td>
</tr>
</tbody>
</table>
</div></template>


