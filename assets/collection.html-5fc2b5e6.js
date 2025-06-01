import{_ as l,r as p,o as u,c,a as n,b as s,d as a,w as e,e as o}from"./app-ff445881.js";const r={},d=n("h1",{id:"合集和视频列表信息",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#合集和视频列表信息","aria-hidden":"true"},"#"),s(" 合集和视频列表信息")],-1),v=n("p",null,[s("请注意区分 "),n("strong",null,"合集(seasons_archives)"),s(" 和 "),n("strong",null,"视频列表(seasons_series)")],-1),k=n("p",null,"列表即系列(series)或频道(channel), 图标为平面叠放的矩形且中央有播放按钮标识(.icon-ic_channel1), 在个人空间直接操作",-1),q={href:"https://github.com/SocialSisterYi/bilibili-API-collect/issues/945",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"获取视频合集信息",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#获取视频合集信息","aria-hidden":"true"},"#"),s(" 获取视频合集信息")],-1),m=n("blockquote",null,[n("p",null,"https://api.bilibili.com/x/polymer/web-space/seasons_archives_list (需验证referer)"),n("p",null,"https://api.bilibili.com/x/polymer/space/seasons_archives_list (旧接口, 不推荐使用, 无鉴权验证)")],-1),y=n("p",null,[n("em",null,"请求方式：GET")],-1),h=n("p",null,[n("strong",null,"url参数：")],-1),g=n("thead",null,[n("tr",null,[n("th",null,"参数名"),n("th",null,"类型"),n("th",null,"内容"),n("th",null,"必要性"),n("th",null,"备注")])],-1),_=n("tr",null,[n("td",null,"mid"),n("td",null,"num"),n("td",null,"用户 mid"),n("td",null,"必要"),n("td",null,"创建者的 mid，但也可以是任意的非负整数")],-1),f=n("tr",null,[n("td",null,"season_id"),n("td",null,"num"),n("td",null,"视频合集 ID"),n("td",null,"必要"),n("td")],-1),x=n("tr",null,[n("td",null,"sort_reverse"),n("td",null,"bool"),n("td",null,"排序方式"),n("td",null,"可选"),n("td",null,[s("true: 升序排序"),n("br"),s("false: 默认排序")])],-1),E=n("tr",null,[n("td",null,"page_num"),n("td",null,"num"),n("td",null,"页码索引"),n("td",null,"可选"),n("td",null,"默认为 1")],-1),j=n("tr",null,[n("td",null,"page_size"),n("td",null,"num"),n("td",null,"单页内容数量"),n("td",null,"可选"),n("td",null,"默认为 30")],-1),A=n("tr",null,[n("td",null,"gaia_vtoken"),n("td",null,"str"),n("td",null,"风控验证?"),n("td",null,"可选"),n("td",null,"若被风控则必要(如User-Agent不正常)")],-1),w=n("tr",null,[n("td",null,"web_location"),n("td",null,"str"),n("td",null,"页面位置?"),n("td",null,"可选"),n("td",null,"333.999")],-1),B=n("td",null,"w_rid",-1),S=n("td",null,"str",-1),V=n("td",null,"WBI 签名",-1),D=n("td",null,"可选",-1),I=n("td",null,"wts",-1),J=n("td",null,"num",-1),K=n("td",null,"UNIX 秒级时间戳",-1),T=n("td",null,"可选",-1),U=o(`<p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>aids</td><td>array</td><td>稿件 avid 列表</td><td>对应下方数组中内容 aid</td></tr><tr><td>archives</td><td>array</td><td>合集中的视频</td><td></td></tr><tr><td>meta</td><td>obj</td><td>合集元数据</td><td></td></tr><tr><td>page</td><td>obj</td><td>分页信息</td><td></td></tr></tbody></table><p><code>data</code>中的<code>archives</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>合集内容</td><td></td></tr><tr><td>n</td><td>obj</td><td>(n+1)P内容</td><td></td></tr><tr><td>……</td><td>obj</td><td>……</td><td>……</td></tr></tbody></table><p><code>archives</code>数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>aid</td><td>num</td><td>稿件 avid</td><td></td></tr><tr><td>bvid</td><td>str</td><td>稿件 bvid</td><td></td></tr><tr><td>ctime</td><td>num</td><td>创建时间</td><td>Unix 时间戳</td></tr><tr><td>duration</td><td>num</td><td>视频时长</td><td>单位为秒</td></tr><tr><td>enable_vt</td><td>bool</td><td>false</td><td>旧接口无</td></tr><tr><td>interactive_video</td><td>bool</td><td>是否是互动视频</td><td></td></tr><tr><td>pic</td><td>str</td><td>封面 URL</td><td></td></tr><tr><td>playback_position</td><td>num</td><td></td><td>会随着播放时间增长，播放完成后为 -1 。单位为 %</td></tr><tr><td>pubdate</td><td>num</td><td>发布日期</td><td>Unix 时间戳</td></tr><tr><td>stat</td><td>obj</td><td>稿件信息</td><td></td></tr><tr><td>state</td><td>num</td><td>0</td><td></td></tr><tr><td>title</td><td>str</td><td>稿件标题</td><td></td></tr><tr><td>ugc_pay</td><td>num</td><td>UGC 付费?</td><td>0: 否</td></tr><tr><td>vt_display</td><td>str</td><td>空</td><td>旧接口无</td></tr></tbody></table><p><code>archives</code>中的<code>stat</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>view</td><td>num</td><td>稿件播放量</td><td></td></tr><tr><td>vt</td><td>num</td><td>0</td><td></td></tr></tbody></table><p><code>data</code>中的<code>meta</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>category</td><td>num</td><td>0</td><td></td></tr><tr><td>cover</td><td>str</td><td>合集封面 URL</td><td></td></tr><tr><td>description</td><td>str</td><td>合集描述</td><td></td></tr><tr><td>mid</td><td>num</td><td>UP 主 ID</td><td></td></tr><tr><td>name</td><td>str</td><td>合集标题</td><td></td></tr><tr><td>ptime</td><td>num</td><td>发布时间</td><td>Unix 时间戳</td></tr><tr><td>season_id</td><td>num</td><td>合集 ID</td><td></td></tr><tr><td>total</td><td>num</td><td>合集内视频数量</td><td></td></tr></tbody></table><p><code>data</code>中的<code>page</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>page_num</td><td>num</td><td>分页页码</td><td></td></tr><tr><td>page_size</td><td>num</td><td>单页个数</td><td></td></tr><tr><td>total</td><td>num</td><td>合集内视频数量</td><td></td></tr></tbody></table><p><strong>示例:</strong></p><p>获取 <code>mid=37737161</code> 的 <code>season_id=1227671</code> 视频合集信息，默认排序，第 1 页，每页 30 个视频</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&quot;https://api.bilibili.com/x/polymer/space/seasons_archives_list&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;mid=37737161&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;sort_reverse=false&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;season_id=1227671&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;page_num=1&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;page_size=30&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例:</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;aids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">311606079</span><span class="token punctuation">,</span>
      <span class="token number">400546145</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;archives&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">311606079</span><span class="token punctuation">,</span>
        <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV1XN411K7g9&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1679651747</span><span class="token punctuation">,</span>
        <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">261</span><span class="token punctuation">,</span>
        <span class="token property">&quot;interactive_video&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i2.hdslb.com/bfs/archive/234e6bd061176dba9e148f4373c52fa7cd2d801f.jpg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1679651747</span><span class="token punctuation">,</span>
        <span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">12145</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;某些IT社区平台乱象，文章千篇一律，毫不注重版权，文章互相抄袭成潮流，希望能够好好管管！&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">400546145</span><span class="token punctuation">,</span>
        <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV1qo4y1L73P&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1682777426</span><span class="token punctuation">,</span>
        <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">335</span><span class="token punctuation">,</span>
        <span class="token property">&quot;interactive_video&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i2.hdslb.com/bfs/archive/a6b6fb0330bbf6c500720a024e5a9ade24d888c3.jpg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1682777425</span><span class="token punctuation">,</span>
        <span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">52743</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;某些搜索引擎得到的结果，官方网站反而排在一些诈骗广告后面，诱导用户下载大量捆绑垃圾软件&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;cover&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://archive.biliimg.com/bfs/archive/5e1c1f77c3065ec31eec43d7e35f7a061602e4d6.jpg&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;白马首席讲师吐槽系列视频&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;mid&quot;</span><span class="token operator">:</span> <span class="token number">37737161</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;水浅王八多，真假白马说&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;ptime&quot;</span><span class="token operator">:</span> <span class="token number">1682777425</span><span class="token punctuation">,</span>
      <span class="token property">&quot;season_id&quot;</span><span class="token operator">:</span> <span class="token number">1227671</span><span class="token punctuation">,</span>
      <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;page&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;page_num&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;page_size&quot;</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
      <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="只获取系列视频" tabindex="-1"><a class="header-anchor" href="#只获取系列视频" aria-hidden="true">#</a> 只获取系列视频</h2><blockquote><p>https://api.bilibili.com/x/polymer/web-space/home/seasons_series</p></blockquote><p><em>请求方式: GET</em></p><p><strong>URL参数:</strong></p>`,23),L=n("thead",null,[n("tr",null,[n("th",null,"参数名"),n("th",null,"类型"),n("th",null,"内容"),n("th",null,"必要性"),n("th",null,"备注")])],-1),C=n("tr",null,[n("td",null,"mid"),n("td",null,"num"),n("td",null,"用户 mid"),n("td",null,"必要"),n("td")],-1),F=n("tr",null,[n("td",null,"page_num"),n("td",null,"num"),n("td",null,"页码索引"),n("td",null,"必要"),n("td")],-1),N=n("tr",null,[n("td",null,"page_size"),n("td",null,"num"),n("td",null,"单页内容数量"),n("td",null,"必要"),n("td")],-1),R=n("tr",null,[n("td",null,"gaia_vtoken"),n("td",null,"str"),n("td",null,"风控验证?"),n("td",null,"可选"),n("td",null,"若被风控则必要(如User-Agent不正常)")],-1),P=n("td",null,"w_rid",-1),O=n("td",null,"str",-1),G=n("td",null,"WBI 签名",-1),z=n("td",null,"不必要",-1),W=n("td",null,"wts",-1),X=n("td",null,"num",-1),M=n("td",null,"UNIX 秒级时间戳",-1),Y=n("td",null,"不必要",-1),H=o(`<p><strong>JSON回复:</strong></p><p>根对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-352: 请求被风控<br>-400: 请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>items_lists</td><td>obj</td><td>内容列表</td><td>套了个娃</td></tr></tbody></table><p><code>data</code>中的<code>items_lists</code>对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>page</td><td>obj</td><td>分页信息</td><td></td></tr><tr><td>seasons_list</td><td>array</td><td>空</td><td></td></tr><tr><td>series_list</td><td>array</td><td>系列列表</td><td></td></tr></tbody></table><p><code>items_lists</code>中的<code>page</code>对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>page_num</td><td>num</td><td>分页页码</td><td></td></tr><tr><td>page_size</td><td>num</td><td>单页个数</td><td></td></tr><tr><td>total</td><td>num</td><td>总页数</td><td></td></tr></tbody></table><p><code>items_lists</code>中的<code>series_list</code>数组:</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>第1个系列内容</td><td></td></tr><tr><td>1</td><td>obj</td><td>第2个系列内容</td><td></td></tr><tr><td>……</td><td>obj</td><td>……</td><td>……</td></tr><tr><td>n</td><td>obj</td><td>第(n+1)个系列内容</td><td></td></tr></tbody></table><p><code>series_list</code>数组中的对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>archives</td><td>array</td><td>系列视频列表</td><td></td></tr><tr><td>meta</td><td>obj</td><td>系列元数据</td><td></td></tr><tr><td>recent_aids</td><td>array</td><td>系列视频 aid 列表</td><td>内容类型为num</td></tr></tbody></table><p><code>series_list</code>中的<code>archives</code>数组:</p><p>同<a href="#%E8%8E%B7%E5%8F%96%E8%A7%86%E9%A2%91%E5%90%88%E9%9B%86%E4%BF%A1%E6%81%AF">获取视频合集信息</a>中的<code>archives</code>数组</p><p><code>series_list</code>中的<code>meta</code>对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>category</td><td>num</td><td>1</td><td></td></tr><tr><td>cover</td><td>str</td><td>系列封面 URL</td><td></td></tr><tr><td>creator</td><td>str</td><td>auto</td><td></td></tr><tr><td>ctime</td><td>num</td><td>创建时间</td><td>Unix 时间戳</td></tr><tr><td>description</td><td>str</td><td>系列描述</td><td></td></tr><tr><td>keywords</td><td>array</td><td>系列关键词列表</td><td>内容类型为str</td></tr><tr><td>last_update_ts</td><td>num</td><td>最近更新时间</td><td>Unix 时间戳</td></tr><tr><td>mid</td><td>num</td><td>UP 主 ID</td><td></td></tr><tr><td>mtime</td><td>num</td><td>修改时间</td><td>Unix 时间戳</td></tr><tr><td>name</td><td>str</td><td>系列标题</td><td></td></tr><tr><td>raw_keywords</td><td>str</td><td>原始系列关键词</td><td></td></tr><tr><td>series_id</td><td>num</td><td>系列 ID</td><td></td></tr><tr><td>state</td><td>num</td><td>2</td><td></td></tr><tr><td>total</td><td>num</td><td>系列视频数量</td><td></td></tr></tbody></table><p><strong>示例:</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&quot;https://api.bilibili.com/x/polymer/web-space/home/seasons_series&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;mid=37737161&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;page_num=1&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;page_size=10&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例:</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;items_lists&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;page&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;page_num&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;page_size&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;seasons_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;series_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;archives&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">284063097</span><span class="token punctuation">,</span>
              <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV1Fc411x7xF&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1705925782</span><span class="token punctuation">,</span>
              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">8885</span><span class="token punctuation">,</span>
              <span class="token property">&quot;enable_vt&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;interactive_video&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/archive/5aa1bb0a121d89969e9bd2634bc7ae23272bf850.jpg&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;playback_position&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1705925781</span><span class="token punctuation">,</span>
              <span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">14683</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vt&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Gradle 教程 已完结 (基于Kotlin DSL讲解) 4K蓝光画质 超强的脚本式项目依赖和构建工具&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;vt_display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">367948632</span><span class="token punctuation">,</span>
              <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV1P94y1c7tV&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1703844221</span><span class="token punctuation">,</span>
              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">52036</span><span class="token punctuation">,</span>
              <span class="token property">&quot;enable_vt&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;interactive_video&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i2.hdslb.com/bfs/archive/499aeb41a0428e05523b766e367540b04f7c3ae2.jpg&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;playback_position&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1703844220</span><span class="token punctuation">,</span>
              <span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">82997</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vt&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Kotlin 教程 已完结 (IDEA 2024 最新版) 4K蓝光画质+杜比音效 零基础入门一套搞定 入门到入土经典版&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;vt_display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">836303388</span><span class="token punctuation">,</span>
              <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV1Hg4y1m7Ca&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1705401362</span><span class="token punctuation">,</span>
              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">5873</span><span class="token punctuation">,</span>
              <span class="token property">&quot;enable_vt&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;interactive_video&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i1.hdslb.com/bfs/archive/a20b09d1cc1a81f6a9c5ed8ea322656e406be725.jpg&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;playback_position&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1705401362</span><span class="token punctuation">,</span>
              <span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">8417</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vt&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Kotlin 扩展篇 已完结 (IDEA 2024 最新版) 4K蓝光画质 与Java语言混合编程&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;vt_display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;cover&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/archive/5aa1bb0a121d89969e9bd2634bc7ae23272bf850.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;creator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1705401630</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;包含Kotlin语言学习的完整流程，正在不断完善中哦~&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token string">&quot;Kotlin&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_update_ts&quot;</span><span class="token operator">:</span> <span class="token number">1705925782</span><span class="token punctuation">,</span>
            <span class="token property">&quot;mid&quot;</span><span class="token operator">:</span> <span class="token number">37737161</span><span class="token punctuation">,</span>
            <span class="token property">&quot;mtime&quot;</span><span class="token operator">:</span> <span class="token number">1705925782</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Kotlin开心路线&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;raw_keywords&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Kotlin&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;series_id&quot;</span><span class="token operator">:</span> <span class="token number">3908327</span><span class="token punctuation">,</span>
            <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;recent_aids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">284063097</span><span class="token punctuation">,</span>
            <span class="token number">367948632</span><span class="token punctuation">,</span>
            <span class="token number">836303388</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;archives&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">848832470</span><span class="token punctuation">,</span>
              <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV1CL4y1i7qR&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1635258883</span><span class="token punctuation">,</span>
              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">106474</span><span class="token punctuation">,</span>
              <span class="token property">&quot;enable_vt&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;interactive_video&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/archive/45dddea811257f78ddd6f1e70197d95d7d6b5187.jpg&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;playback_position&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1635258883</span><span class="token punctuation">,</span>
              <span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">438645</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vt&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;JavaWeb 教程 已完结（IDEA 2021版本）4K蓝光画质 入土到起立&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;vt_display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">566880413</span><span class="token punctuation">,</span>
              <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV1Kv4y1x7is&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1676544280</span><span class="token punctuation">,</span>
              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">25149</span><span class="token punctuation">,</span>
              <span class="token property">&quot;enable_vt&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;interactive_video&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i1.hdslb.com/bfs/archive/cc59de5afebc66447ba93ad9ea0ba73a9b09c117.jpg&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;playback_position&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1676544280</span><span class="token punctuation">,</span>
              <span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">87171</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vt&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Spring 核心教程 已完结（IDEA 2023最新版）4K蓝光画质 基于Spring6的全新重制版本 起立到起飞&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;vt_display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">615286308</span><span class="token punctuation">,</span>
              <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV1Lh4y1M7kx&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1688117457</span><span class="token punctuation">,</span>
              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">10373</span><span class="token punctuation">,</span>
              <span class="token property">&quot;enable_vt&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;interactive_video&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/archive/5f860de4bc0fab30651ae93396f9c572be8380b2.jpg&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;playback_position&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1688117457</span><span class="token punctuation">,</span>
              <span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">41428</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vt&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Spring MVC 教程 已完结（IDEA 2023最新版）4K蓝光画质 基于Spring6的全新重制版本 起立到起飞&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;vt_display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">403104913</span><span class="token punctuation">,</span>
              <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV1fV411M7aS&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1688560394</span><span class="token punctuation">,</span>
              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">17611</span><span class="token punctuation">,</span>
              <span class="token property">&quot;enable_vt&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;interactive_video&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i1.hdslb.com/bfs/archive/c4557a16aa3519183d6ae0114e1c64107bb23703.jpg&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;playback_position&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1688560394</span><span class="token punctuation">,</span>
              <span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">59298</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vt&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Spring Security 教程 已完结（IDEA 2023最新版）4K蓝光画质 基于Spring6的全新重制版本 起立到起飞&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;vt_display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">828666773</span><span class="token punctuation">,</span>
              <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV1xu4y1m7UP&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1689767299</span><span class="token punctuation">,</span>
              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">29696</span><span class="token punctuation">,</span>
              <span class="token property">&quot;enable_vt&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;interactive_video&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i1.hdslb.com/bfs/archive/06cf686d4d3f7ce6731975ef59938d759283318e.jpg&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;playback_position&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1689767299</span><span class="token punctuation">,</span>
              <span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">108078</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vt&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Spring Boot 教程 已完结（IDEA 2023最新版）4K蓝光画质 基于SpringBoot 3 的全新重制版本 起飞到删库跑路&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;vt_display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">852857221</span><span class="token punctuation">,</span>
              <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV1AL4y1j7RY&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1648811079</span><span class="token punctuation">,</span>
              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">55544</span><span class="token punctuation">,</span>
              <span class="token property">&quot;enable_vt&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;interactive_video&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i2.hdslb.com/bfs/archive/629755f79c13c96c9b6d91da80257a352b29dd86.jpg&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;playback_position&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1648811079</span><span class="token punctuation">,</span>
              <span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">168251</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vt&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SpringCloud 教程 已完结（IDEA 2022.1最新版）4K蓝光画质 微服务开发&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;vt_display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;cover&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/archive/45dddea811257f78ddd6f1e70197d95d7d6b5187.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;creator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1669273103</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;已排序完成，共4个系列，请至少完成Java SE篇视频之后再开始JavaEE路线哦~ 整个路线大致为：JavaWeb基础篇、SSM成长篇、SpringBoot成熟篇、SpringCloud进阶篇&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_update_ts&quot;</span><span class="token operator">:</span> <span class="token number">1696249622</span><span class="token punctuation">,</span>
            <span class="token property">&quot;mid&quot;</span><span class="token operator">:</span> <span class="token number">37737161</span><span class="token punctuation">,</span>
            <span class="token property">&quot;mtime&quot;</span><span class="token operator">:</span> <span class="token number">1696249622</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;JavaEE通关路线&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;raw_keywords&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;series_id&quot;</span><span class="token operator">:</span> <span class="token number">2800548</span><span class="token punctuation">,</span>
            <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">9</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;recent_aids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">848832470</span><span class="token punctuation">,</span>
            <span class="token number">566880413</span><span class="token punctuation">,</span>
            <span class="token number">615286308</span><span class="token punctuation">,</span>
            <span class="token number">403104913</span><span class="token punctuation">,</span>
            <span class="token number">828666773</span><span class="token punctuation">,</span>
            <span class="token number">852857221</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;archives&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">445283537</span><span class="token punctuation">,</span>
              <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV14j411S76G&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1687946670</span><span class="token punctuation">,</span>
              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">7008</span><span class="token punctuation">,</span>
              <span class="token property">&quot;enable_vt&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;interactive_video&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i1.hdslb.com/bfs/archive/208bb09ecf97fbbd73e45b3839715276ffbbe8f4.jpg&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;playback_position&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1687946670</span><span class="token punctuation">,</span>
              <span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">9483</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vt&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Apache Maven 依赖管理 极速上手 已完结（2021 版本）4K蓝光画质+杜比音效 从导入到冲突&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;vt_display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">813084463</span><span class="token punctuation">,</span>
              <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV1r34y1p7j9&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1656909478</span><span class="token punctuation">,</span>
              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">17457</span><span class="token punctuation">,</span>
              <span class="token property">&quot;enable_vt&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;interactive_video&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i2.hdslb.com/bfs/archive/798135f31dc9e03121458f32825dc81d8e403887.jpg&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;playback_position&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1656909478</span><span class="token punctuation">,</span>
              <span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">46179</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vt&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Docker 容器技术 已完结（2022 最新版）4K蓝光画质+杜比音效 从内卷到开摆&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;vt_display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">432905025</span><span class="token punctuation">,</span>
              <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV1a3411f7nh&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1669296029</span><span class="token punctuation">,</span>
              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">10393</span><span class="token punctuation">,</span>
              <span class="token property">&quot;enable_vt&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;interactive_video&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i2.hdslb.com/bfs/archive/d14c0fad064a224de7afb7edd147f8b335324c53.jpg&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;playback_position&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1669296029</span><span class="token punctuation">,</span>
              <span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">37040</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vt&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Linux 操作系统 光速入门 已完结（2021 版本）4K蓝光画质+杜比音效 从讨厌到喜欢&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;vt_display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">390385576</span><span class="token punctuation">,</span>
              <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV19d4y147Df&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1669272992</span><span class="token punctuation">,</span>
              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">23389</span><span class="token punctuation">,</span>
              <span class="token property">&quot;enable_vt&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;interactive_video&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/archive/8ba763e1a1e14c47c1c178ecf21240896d3fbb5e.jpg&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;playback_position&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1669272992</span><span class="token punctuation">,</span>
              <span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">32189</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vt&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MySQL 数据库技术 已完结（2021版本）4K蓝光画质+杜比音效 从内卷到开摆&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;vt_display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">647924810</span><span class="token punctuation">,</span>
              <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV1ce4y1W7YB&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1669275447</span><span class="token punctuation">,</span>
              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">8492</span><span class="token punctuation">,</span>
              <span class="token property">&quot;enable_vt&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;interactive_video&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/archive/f5bcc92a4e181cb12a8b80499cea255f43f2d97b.jpg&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;playback_position&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1669275447</span><span class="token punctuation">,</span>
              <span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">20004</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vt&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Git 版本控制 快速上手 已完结（2021版本）4K蓝光画质+杜比音效 从开摆到放弃&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;vt_display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">347934006</span><span class="token punctuation">,</span>
              <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV1vR4y1o7Z2&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1669295228</span><span class="token punctuation">,</span>
              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">10631</span><span class="token punctuation">,</span>
              <span class="token property">&quot;enable_vt&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;interactive_video&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/archive/f95d39b0bc1a2bdad07461a8f4b1ea48c174902c.jpg&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;playback_position&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1669295228</span><span class="token punctuation">,</span>
              <span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">25860</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vt&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Redis 缓存技术 已完结（2021版本）4K蓝光画质+杜比音效 从内卷到开摆&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;vt_display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;cover&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i1.hdslb.com/bfs/archive/208bb09ecf97fbbd73e45b3839715276ffbbe8f4.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;creator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1669273164</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;包含主线中讲解的中间件归档视频与当下必学的火热技术。&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_update_ts&quot;</span><span class="token operator">:</span> <span class="token number">1688123428</span><span class="token punctuation">,</span>
            <span class="token property">&quot;mid&quot;</span><span class="token operator">:</span> <span class="token number">37737161</span><span class="token punctuation">,</span>
            <span class="token property">&quot;mtime&quot;</span><span class="token operator">:</span> <span class="token number">1688123428</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;必学技术与中间件&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;raw_keywords&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;series_id&quot;</span><span class="token operator">:</span> <span class="token number">2800550</span><span class="token punctuation">,</span>
            <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">7</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;recent_aids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">445283537</span><span class="token punctuation">,</span>
            <span class="token number">813084463</span><span class="token punctuation">,</span>
            <span class="token number">432905025</span><span class="token punctuation">,</span>
            <span class="token number">390385576</span><span class="token punctuation">,</span>
            <span class="token number">647924810</span><span class="token punctuation">,</span>
            <span class="token number">347934006</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;archives&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">900707014</span><span class="token punctuation">,</span>
              <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV1YP4y1o75f&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1663494406</span><span class="token punctuation">,</span>
              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">103542</span><span class="token punctuation">,</span>
              <span class="token property">&quot;enable_vt&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;interactive_video&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/archive/291dd3b60b67a8f74567a81999612bd50b4e8017.jpg&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;playback_position&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1663494406</span><span class="token punctuation">,</span>
              <span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">312144</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vt&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;JavaSE 教程 已完结 (IDEA 2022 最新版) 4K蓝光画质+杜比音效 零基础入门一套搞定 入门到入土&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;vt_display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">604837097</span><span class="token punctuation">,</span>
              <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV1G84y1v7Vj&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1667815711</span><span class="token punctuation">,</span>
              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">19395</span><span class="token punctuation">,</span>
              <span class="token property">&quot;enable_vt&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;interactive_video&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/archive/4a4522194a1d0c8ae684976b26fb2fe43ce28f39.jpg&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;playback_position&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1667815711</span><span class="token punctuation">,</span>
              <span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">74496</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vt&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;JavaSE AWT/Swing 图形化编程 (IDEA 2022 最新版) 4K蓝光画质+杜比音效 快速上手桌面程序 用IDEA写IDEA&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;vt_display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">766688029</span><span class="token punctuation">,</span>
              <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV1Er4y1r7as&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1645157763</span><span class="token punctuation">,</span>
              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">21585</span><span class="token punctuation">,</span>
              <span class="token property">&quot;enable_vt&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;interactive_video&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i2.hdslb.com/bfs/archive/ced6a8c8548f0f921f306ea3589f9d470adc0446.jpg&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;playback_position&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1645157763</span><span class="token punctuation">,</span>
              <span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">133409</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vt&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Java JVM 虚拟机 已完结（IDEA 2021版本）4K蓝光画质 全程劝退&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;vt_display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">936955310</span><span class="token punctuation">,</span>
              <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV1JT4y1S7K8&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1646391131</span><span class="token punctuation">,</span>
              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">31736</span><span class="token punctuation">,</span>
              <span class="token property">&quot;enable_vt&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;interactive_video&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i1.hdslb.com/bfs/archive/9347ef3cdb6cf0e5bca29ce32e211b488e90ab7b.jpg&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;playback_position&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1646391131</span><span class="token punctuation">,</span>
              <span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">74731</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vt&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Java JUC 并发编程 已完结（IDEA 2021版本）4K蓝光画质 玩转多线程&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;vt_display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">768437265</span><span class="token punctuation">,</span>
              <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV1ar4y1J7mC&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1650881312</span><span class="token punctuation">,</span>
              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">26314</span><span class="token punctuation">,</span>
              <span class="token property">&quot;enable_vt&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;interactive_video&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/archive/7f97549147c09a386d9402b121cc6206c36e4079.jpg&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;playback_position&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1650881312</span><span class="token punctuation">,</span>
              <span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">67900</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vt&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Java NIO Netty网络编程 已完结（IDEA 2022.1最新版）4K蓝光画质 网络I/O进阶编程&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;vt_display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">684547077</span><span class="token punctuation">,</span>
              <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV1tU4y1y7Fg&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1653900327</span><span class="token punctuation">,</span>
              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">10243</span><span class="token punctuation">,</span>
              <span class="token property">&quot;enable_vt&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;interactive_video&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i2.hdslb.com/bfs/archive/dc0cc9464c6fc274c1f23f682a01dab5a358217b.jpg&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;playback_position&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1653900327</span><span class="token punctuation">,</span>
              <span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">47693</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vt&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;JavaSE 9-17 新特性 已完结（IDEA 2022.1最新版）4K蓝光画质 Java9/10/11/12/13/14/15/16/17讲解&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;vt_display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;cover&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/archive/291dd3b60b67a8f74567a81999612bd50b4e8017.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;creator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1648810702</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;已排序完成，共3个系列，完成JavaSE篇之后，就可以开启JavaEE路线了&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_update_ts&quot;</span><span class="token operator">:</span> <span class="token number">1667816253</span><span class="token punctuation">,</span>
            <span class="token property">&quot;mid&quot;</span><span class="token operator">:</span> <span class="token number">37737161</span><span class="token punctuation">,</span>
            <span class="token property">&quot;mtime&quot;</span><span class="token operator">:</span> <span class="token number">1667816253</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;JavaSE基础路线&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;raw_keywords&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;series_id&quot;</span><span class="token operator">:</span> <span class="token number">2158988</span><span class="token punctuation">,</span>
            <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">6</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;recent_aids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">900707014</span><span class="token punctuation">,</span>
            <span class="token number">604837097</span><span class="token punctuation">,</span>
            <span class="token number">766688029</span><span class="token punctuation">,</span>
            <span class="token number">936955310</span><span class="token punctuation">,</span>
            <span class="token number">768437265</span><span class="token punctuation">,</span>
            <span class="token number">684547077</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;archives&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">770027221</span><span class="token punctuation">,</span>
              <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV1Cr4y137os&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1655371329</span><span class="token punctuation">,</span>
              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">48185</span><span class="token punctuation">,</span>
              <span class="token property">&quot;enable_vt&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;interactive_video&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/archive/5d9bd135f068e623e50c7341244635f6cc96c3ea.jpg&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;playback_position&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1655371329</span><span class="token punctuation">,</span>
              <span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">275378</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vt&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C语言程序设计 已完结（CLion 2022 最新版）4K蓝光画质+杜比音效 梦开始的地方&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;vt_display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">941207928</span><span class="token punctuation">,</span>
              <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV13W4y127Ey&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1658474799</span><span class="token punctuation">,</span>
              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">69081</span><span class="token punctuation">,</span>
              <span class="token property">&quot;enable_vt&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;interactive_video&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i2.hdslb.com/bfs/archive/0bf055a0961c0f9bbb7f869b47c3e3d7df21f55c.jpg&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;playback_position&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1658474798</span><span class="token punctuation">,</span>
              <span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">220072</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vt&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;数据结构与算法 已完结（CLion 2022 最新版）4K蓝光画质+杜比音效 全程高能&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;vt_display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">426681358</span><span class="token punctuation">,</span>
              <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV1u3411P7Na&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1653033628</span><span class="token punctuation">,</span>
              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">12346</span><span class="token punctuation">,</span>
              <span class="token property">&quot;enable_vt&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;interactive_video&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/archive/4174e2976f750d5410d6cef374c3035190717cac.jpg&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;playback_position&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1653033628</span><span class="token punctuation">,</span>
              <span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">71911</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vt&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Java 设计模式 已完结（IDEA 2022.1最新版）4K蓝光画质+杜比音效&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token property">&quot;vt_display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;cover&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/archive/5d9bd135f068e623e50c7341244635f6cc96c3ea.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;creator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1653296733</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Java设计模式系列视频，提升你的代码编写规范。&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_update_ts&quot;</span><span class="token operator">:</span> <span class="token number">1658735292</span><span class="token punctuation">,</span>
            <span class="token property">&quot;mid&quot;</span><span class="token operator">:</span> <span class="token number">37737161</span><span class="token punctuation">,</span>
            <span class="token property">&quot;mtime&quot;</span><span class="token operator">:</span> <span class="token number">1658735292</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;高等院校计算机必修课&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;raw_keywords&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;series_id&quot;</span><span class="token operator">:</span> <span class="token number">2318088</span><span class="token punctuation">,</span>
            <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;recent_aids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">770027221</span><span class="token punctuation">,</span>
            <span class="token number">941207928</span><span class="token punctuation">,</span>
            <span class="token number">426681358</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="获取系列和合集视频" tabindex="-1"><a class="header-anchor" href="#获取系列和合集视频" aria-hidden="true">#</a> 获取系列和合集视频</h2><blockquote><p>https://api.bilibili.com/x/polymer/web-space/seasons_series_list</p></blockquote><p><em>请求方式: GET</em></p><p>鉴权方式: 请求头 User-Agent 为正常浏览器, 若仍被风控则请求头再带上 Referer 为 <code>.bilibili.com</code> 下任意页</p><p><strong>URL参数:</strong></p>`,25),Q=n("thead",null,[n("tr",null,[n("th",null,"参数名"),n("th",null,"类型"),n("th",null,"内容"),n("th",null,"必要性"),n("th",null,"备注")])],-1),Z=n("tr",null,[n("td",null,"mid"),n("td",null,"num"),n("td",null,"用户 mid"),n("td",null,"必要"),n("td")],-1),$=n("tr",null,[n("td",null,"page_num"),n("td",null,"num"),n("td",null,"页码"),n("td",null,"必要"),n("td",null,"默认为 1")],-1),nn=n("tr",null,[n("td",null,"page_size"),n("td",null,"num"),n("td",null,"每页数量"),n("td",null,"必要"),n("td",null,"默认为 20")],-1),sn=n("td",null,"w_rid",-1),an=n("td",null,"str",-1),tn=n("td",null,"WBI 签名",-1),en=n("td",null,"可选",-1),on=n("td",null,"wts",-1),pn=n("td",null,"num",-1),ln=n("td",null,"UNIX 秒级时间戳",-1),un=n("td",null,"可选",-1),cn=n("tr",null,[n("td",null,"web_location"),n("td",null,"str"),n("td",null,"页面位置?"),n("td",null,"可选"),n("td",null,"333.999")],-1),rn=o(`<p><strong>JSON回复:</strong></p><p>与 <a href="#%E5%8F%AA%E8%8E%B7%E5%8F%96%E7%B3%BB%E5%88%97%E8%A7%86%E9%A2%91">只获取系列视频</a> 基本一致, 但 <code>.data.items_lists.seasons_list</code> 数组不为空, 且该数组中的元素结构与 <code>.data.items_lists.series_list</code> 相同, 略</p><p><strong>示例:</strong></p><p>获取 <code>mid=37737161</code> 的系列视频列表，每页 5 条，页码为 1</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&quot;https://api.bilibili.com/x/polymer/web-space/seasons_series_list&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;mid=37737161&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;page_num=1&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;page_size=5&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;w_rid=xxx&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;wts=xxx&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例:</summary><div class="language-jsonc line-numbers-mode" data-ext="jsonc"><pre class="language-jsonc"><code>{
  &quot;code&quot;: 0,
  &quot;message&quot;: &quot;0&quot;,
  &quot;ttl&quot;: 1,
  &quot;data&quot;: {
    &quot;items_lists&quot;: {
      &quot;page&quot;: {
        &quot;page_num&quot;: 1,
        &quot;page_size&quot;: 5,
        &quot;total&quot;: 9
      },
      &quot;seasons_list&quot;: [
        {
          &quot;archives&quot;: [
            {
              &quot;aid&quot;: 343807541,
              &quot;bvid&quot;: &quot;BV1t94y1D79E&quot;,
              &quot;ctime&quot;: 1658907465,
              &quot;duration&quot;: 2164,
              &quot;enable_vt&quot;: false,
              &quot;interactive_video&quot;: false,
              &quot;pic&quot;: &quot;http://i1.hdslb.com/bfs/archive/0af0faa77a1921db4cf86c115db70aa2594983f0.jpg&quot;,
              &quot;playback_position&quot;: 0,
              &quot;pubdate&quot;: 1658907465,
              &quot;stat&quot;: {
                &quot;view&quot;: 43096,
                &quot;vt&quot;: 0
              },
              &quot;state&quot;: 0,
              &quot;title&quot;: &quot;Java学习路线两条龙版，让你不再迷茫！包含各个知识点梳理，常用技术栈介绍等。&quot;,
              &quot;ugc_pay&quot;: 0,
              &quot;vt_display&quot;: &quot;&quot;
            },
            {
              &quot;aid&quot;: 429032764,
              &quot;bvid&quot;: &quot;BV11G411h7NB&quot;,
              &quot;ctime&quot;: 1659499261,
              &quot;duration&quot;: 197,
              &quot;enable_vt&quot;: false,
              &quot;interactive_video&quot;: false,
              &quot;pic&quot;: &quot;http://i2.hdslb.com/bfs/archive/5235a0ab2738e288b08654aa8e0cd3a509a7ef96.jpg&quot;,
              &quot;playback_position&quot;: 0,
              &quot;pubdate&quot;: 1659499200,
              &quot;stat&quot;: {
                &quot;view&quot;: 22700,
                &quot;vt&quot;: 0
              },
              &quot;state&quot;: 0,
              &quot;title&quot;: &quot;好书推荐《On Java》都什么年代了，还在看传统Java书籍？&quot;,
              &quot;ugc_pay&quot;: 0,
              &quot;vt_display&quot;: &quot;&quot;
            },
            // ...
          ],
          &quot;meta&quot;: {
            &quot;category&quot;: 0,
            &quot;cover&quot;: &quot;https://archive.biliimg.com/bfs/archive/27733cf13514d990c880154b937cd8633f583aa4.jpg&quot;,
            &quot;description&quot;: &quot;除教程视频外其他的视频，均在此。&quot;,
            &quot;mid&quot;: 37737161,
            &quot;name&quot;: &quot;合集·拾枝杂谈&quot;,
            &quot;ptime&quot;: 1694682652,
            &quot;season_id&quot;: 587216,
            &quot;total&quot;: 10
          },
          &quot;recent_aids&quot;: [
            343807541,
            429032764,
            857089796,
            560181990,
            774119786,
            859397126
          ]
        },
        {
          &quot;archives&quot;: [
            {
              &quot;aid&quot;: 311606079,
              &quot;bvid&quot;: &quot;BV1XN411K7g9&quot;,
              &quot;ctime&quot;: 1679651747,
              &quot;duration&quot;: 261,
              &quot;enable_vt&quot;: false,
              &quot;interactive_video&quot;: false,
              &quot;pic&quot;: &quot;http://i2.hdslb.com/bfs/archive/234e6bd061176dba9e148f4373c52fa7cd2d801f.jpg&quot;,
              &quot;playback_position&quot;: 0,
              &quot;pubdate&quot;: 1679651747,
              &quot;stat&quot;: {
                &quot;view&quot;: 12150,
                &quot;vt&quot;: 0
              },
              &quot;state&quot;: 0,
              &quot;title&quot;: &quot;某些IT社区平台乱象，文章千篇一律，毫不注重版权，文章互相抄袭成潮流，希望能够好好管管！&quot;,
              &quot;ugc_pay&quot;: 0,
              &quot;vt_display&quot;: &quot;&quot;
            },
            {
              &quot;aid&quot;: 400546145,
              &quot;bvid&quot;: &quot;BV1qo4y1L73P&quot;,
              &quot;ctime&quot;: 1682777426,
              &quot;duration&quot;: 335,
              &quot;enable_vt&quot;: false,
              &quot;interactive_video&quot;: false,
              &quot;pic&quot;: &quot;http://i2.hdslb.com/bfs/archive/a6b6fb0330bbf6c500720a024e5a9ade24d888c3.jpg&quot;,
              &quot;playback_position&quot;: 0,
              &quot;pubdate&quot;: 1682777425,
              &quot;stat&quot;: {
                &quot;view&quot;: 52744,
                &quot;vt&quot;: 0
              },
              &quot;state&quot;: 0,
              &quot;title&quot;: &quot;某些搜索引擎得到的结果，官方网站反而排在一些诈骗广告后面，诱导用户下载大量捆绑垃圾软件&quot;,
              &quot;ugc_pay&quot;: 0,
              &quot;vt_display&quot;: &quot;&quot;
            }
          ],
          &quot;meta&quot;: {
            &quot;category&quot;: 0,
            &quot;cover&quot;: &quot;https://archive.biliimg.com/bfs/archive/5e1c1f77c3065ec31eec43d7e35f7a061602e4d6.jpg&quot;,
            &quot;description&quot;: &quot;白马首席讲师吐槽系列视频&quot;,
            &quot;mid&quot;: 37737161,
            &quot;name&quot;: &quot;合集·水浅王八多，真假白马说&quot;,
            &quot;ptime&quot;: 1682777425,
            &quot;season_id&quot;: 1227671,
            &quot;total&quot;: 2
          },
          &quot;recent_aids&quot;: [
            311606079,
            400546145
          ]
        },
        // ...
      ],
      &quot;series_list&quot;: [
        // 与前接口基本相同
      ]
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="查询指定系列" tabindex="-1"><a class="header-anchor" href="#查询指定系列" aria-hidden="true">#</a> 查询指定系列</h2><blockquote><p>https://api.bilibili.com/x/series/series</p></blockquote><p><em>请求方式: GET</em></p><p><strong>URL参数:</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>series_id</td><td>num</td><td>系列ID</td><td>必要</td><td></td></tr></tbody></table><p><strong>JSON回复:</strong></p><p>根对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>meta</td><td>obj</td><td>系列信息</td><td></td></tr><tr><td>recent_aids</td><td>array</td><td>系列 aid 列表</td><td>内容类型为 num</td></tr></tbody></table><p><code>data</code>中的<code>meta</code>对象:</p><p>同<a href="#%E5%8F%AA%E8%8E%B7%E5%8F%96%E7%B3%BB%E5%88%97%E8%A7%86%E9%A2%91">只获取系列视频</a>中的<code>meta</code>对象</p><p><strong>示例:</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/series/series&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;series_id=2158988&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;series_id&quot;</span><span class="token operator">:</span> <span class="token number">2158988</span><span class="token punctuation">,</span>
      <span class="token property">&quot;mid&quot;</span><span class="token operator">:</span> <span class="token number">37737161</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;JavaSE基础路线&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;已排序完成，共3个系列，完成JavaSE篇之后，就可以开启JavaEE路线了&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;&quot;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;creator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;last_update_ts&quot;</span><span class="token operator">:</span> <span class="token number">1667816253</span><span class="token punctuation">,</span>
      <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
      <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1648810702</span><span class="token punctuation">,</span>
      <span class="token property">&quot;mtime&quot;</span><span class="token operator">:</span> <span class="token number">1667816253</span><span class="token punctuation">,</span>
      <span class="token property">&quot;raw_keywords&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;recent_aids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">900707014</span><span class="token punctuation">,</span>
      <span class="token number">604837097</span><span class="token punctuation">,</span>
      <span class="token number">766688029</span><span class="token punctuation">,</span>
      <span class="token number">936955310</span><span class="token punctuation">,</span>
      <span class="token number">768437265</span><span class="token punctuation">,</span>
      <span class="token number">684547077</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="获取指定系列视频" tabindex="-1"><a class="header-anchor" href="#获取指定系列视频" aria-hidden="true">#</a> 获取指定系列视频</h2><blockquote><p>https://api.bilibili.com/x/series/archives</p></blockquote><p><em>请求方式: GET</em></p><p><strong>URL参数:</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>mid</td><td>num</td><td>用户 mid</td><td>必要</td><td></td></tr><tr><td>series_id</td><td>num</td><td>系列ID</td><td>必要</td><td></td></tr><tr><td>only_normal</td><td>bool</td><td>作用尚不明确</td><td>可选</td><td>默认为 true</td></tr><tr><td>sort</td><td>str</td><td>排序方式</td><td>可选</td><td>desc: 默认排序<br>asc: 升序排序</td></tr><tr><td>pn</td><td>num</td><td>页码</td><td>可选</td><td>默认为 1</td></tr><tr><td>ps</td><td>num</td><td>每页数量</td><td>可选</td><td>默认为 20</td></tr><tr><td>current_mid</td><td>num</td><td>当前用户 mid</td><td>可选</td><td>用于 <code>playback_position</code> 播放进度</td></tr></tbody></table><p><strong>JSON回复:</strong></p><p>根对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>aids</td><td>array</td><td>视频 aid 列表</td><td>内容类型为 num</td></tr><tr><td>page</td><td>obj</td><td>页码信息</td><td></td></tr><tr><td>archives</td><td>array</td><td>视频信息列表</td><td></td></tr></tbody></table><p><code>data</code>中的<code>page</code>对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>num</td><td>num</td><td>当前页码</td><td></td></tr><tr><td>size</td><td>num</td><td>每页数量</td><td></td></tr><tr><td>total</td><td>num</td><td>视频总数</td><td></td></tr></tbody></table><p><code>data</code>中的<code>archives</code>数组:</p><p>基本同<a href="#%E8%8E%B7%E5%8F%96%E8%A7%86%E9%A2%91%E5%90%88%E9%9B%86%E4%BF%A1%E6%81%AF">获取视频合集信息</a>中的<code>archives</code>数组</p><p><strong>示例:</strong></p><p>获取 <code>mid=39665558</code> 的 <code>series_id=534501</code> 系列视频列表，每页 16 条，页码为 1，默认排序, 当前用户 mid 为 <code>1070915568</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&quot;https://api.bilibili.com/x/series/archives&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;mid=39665558&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;series_id=534501&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;only_normal=true&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;sort=desc&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;pn=1&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;ps=16&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;current_mid=1070915568&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例:</summary><div class="language-jsonc line-numbers-mode" data-ext="jsonc"><pre class="language-jsonc"><code>{
  &quot;code&quot;: 0,
  &quot;message&quot;: &quot;0&quot;,
  &quot;ttl&quot;: 1,
  &quot;data&quot;: {
    &quot;aids&quot;: [
      695029098,
      724599872,
      594794875,
      41565264,
      541053051,
      499696652,
      673071936,
      462891077,
      973903762,
      61692380,
      336713491,
      372661682,
      550840795,
      51839931,
      718592873,
      87838863
    ],
    &quot;page&quot;: {
      &quot;num&quot;: 1,
      &quot;size&quot;: 16,
      &quot;total&quot;: 25
    },
    &quot;archives&quot;: [
      {
        &quot;aid&quot;: 695029098,
        &quot;title&quot;: &quot;Python控制Minecraft教程（下）：自动建造&quot;,
        &quot;pubdate&quot;: 1677321251,
        &quot;ctime&quot;: 1677321251,
        &quot;state&quot;: 0,
        &quot;pic&quot;: &quot;http://i1.hdslb.com/bfs/archive/187c0ba21b9ceba908a8760e83d49f466316824b.jpg&quot;,
        &quot;duration&quot;: 275,
        &quot;stat&quot;: {
          &quot;view&quot;: 26555
        },
        &quot;bvid&quot;: &quot;BV1k24y1J78X&quot;,
        &quot;ugc_pay&quot;: 0,
        &quot;interactive_video&quot;: false,
        &quot;enable_vt&quot;: 0,
        &quot;vt_display&quot;: &quot;&quot;,
        &quot;playback_position&quot;: 0
      },
      {
        &quot;aid&quot;: 724599872,
        &quot;title&quot;: &quot;『教程』一看就懂！Github基础教程&quot;,
        &quot;pubdate&quot;: 1646740815,
        &quot;ctime&quot;: 1646740824,
        &quot;state&quot;: 0,
        &quot;pic&quot;: &quot;http://i0.hdslb.com/bfs/archive/1401ebe64e88deddf2b44ad6a740ff8872c2fda6.jpg&quot;,
        &quot;duration&quot;: 296,
        &quot;stat&quot;: {
          &quot;view&quot;: 2412054
        },
        &quot;bvid&quot;: &quot;BV1hS4y1S7wL&quot;,
        &quot;ugc_pay&quot;: 0,
        &quot;interactive_video&quot;: false,
        &quot;enable_vt&quot;: 0,
        &quot;vt_display&quot;: &quot;&quot;,
        &quot;playback_position&quot;: 0
      },
      {
        &quot;aid&quot;: 594794875,
        &quot;title&quot;: &quot;『教程』手把手教你流畅访问Github&quot;,
        &quot;pubdate&quot;: 1647345613,
        &quot;ctime&quot;: 1647336725,
        &quot;state&quot;: 0,
        &quot;pic&quot;: &quot;http://i0.hdslb.com/bfs/archive/71cc640a84087cc99399449c00b93212fe78ee6f.jpg&quot;,
        &quot;duration&quot;: 236,
        &quot;stat&quot;: {
          &quot;view&quot;: 910491
        },
        &quot;bvid&quot;: &quot;BV1Aq4y1q7hr&quot;,
        &quot;ugc_pay&quot;: 0,
        &quot;interactive_video&quot;: false,
        &quot;enable_vt&quot;: 0,
        &quot;vt_display&quot;: &quot;&quot;,
        &quot;playback_position&quot;: 0
      },
      {
        &quot;aid&quot;: 41565264,
        &quot;title&quot;: &quot;《Python负基础到入门教程》专为\\&quot;非计算机专业和编程困难户\\&quot;制作（全13集 配音字幕重制版）&quot;,
        &quot;pubdate&quot;: 1548316071,
        &quot;ctime&quot;: 1548316072,
        &quot;state&quot;: 0,
        &quot;pic&quot;: &quot;http://i0.hdslb.com/bfs/archive/5f4f6acfc00723c84f726d35add94b1d4b4ee482.jpg&quot;,
        &quot;duration&quot;: 6395,
        &quot;stat&quot;: {
          &quot;view&quot;: 261286
        },
        &quot;bvid&quot;: &quot;BV1et411b76c&quot;,
        &quot;ugc_pay&quot;: 0,
        &quot;interactive_video&quot;: false,
        &quot;enable_vt&quot;: 0,
        &quot;vt_display&quot;: &quot;&quot;,
        &quot;playback_position&quot;: 0
      },
      {
        &quot;aid&quot;: 541053051,
        &quot;title&quot;: &quot;『教程』文字频频乱码 这背后是显卡的扭曲还是规则的沦丧？&quot;,
        &quot;pubdate&quot;: 1592996906,
        &quot;ctime&quot;: 1592996907,
        &quot;state&quot;: 0,
        &quot;pic&quot;: &quot;http://i0.hdslb.com/bfs/archive/8a3c3e3d01a91776763d34bba79add698869c82d.jpg&quot;,
        &quot;duration&quot;: 381,
        &quot;stat&quot;: {
          &quot;view&quot;: 1184937
        },
        &quot;bvid&quot;: &quot;BV1ai4y1x7Uz&quot;,
        &quot;ugc_pay&quot;: 0,
        &quot;interactive_video&quot;: false,
        &quot;enable_vt&quot;: 0,
        &quot;vt_display&quot;: &quot;&quot;,
        &quot;playback_position&quot;: 0
      },
      {
        &quot;aid&quot;: 499696652,
        &quot;title&quot;: &quot;『教程』VsCode五分钟上手教程 无一句废话&quot;,
        &quot;pubdate&quot;: 1601207369,
        &quot;ctime&quot;: 1601207369,
        &quot;state&quot;: 0,
        &quot;pic&quot;: &quot;http://i1.hdslb.com/bfs/archive/cb78c07a090ed456bdcc217b0417670867772a29.jpg&quot;,
        &quot;duration&quot;: 329,
        &quot;stat&quot;: {
          &quot;view&quot;: 417610
        },
        &quot;bvid&quot;: &quot;BV1bK411P767&quot;,
        &quot;ugc_pay&quot;: 0,
        &quot;interactive_video&quot;: false,
        &quot;enable_vt&quot;: 0,
        &quot;vt_display&quot;: &quot;&quot;,
        &quot;playback_position&quot;: 0
      },
      {
        &quot;aid&quot;: 673071936,
        &quot;title&quot;: &quot;『教程』补码怎么来的？&quot;,
        &quot;pubdate&quot;: 1620994814,
        &quot;ctime&quot;: 1620986531,
        &quot;state&quot;: 0,
        &quot;pic&quot;: &quot;http://i1.hdslb.com/bfs/archive/12c02599321a0b1386b29ddc4653ff7df9bd54b4.jpg&quot;,
        &quot;duration&quot;: 445,
        &quot;stat&quot;: {
          &quot;view&quot;: 247578
        },
        &quot;bvid&quot;: &quot;BV16U4y1t7LD&quot;,
        &quot;ugc_pay&quot;: 0,
        &quot;interactive_video&quot;: false,
        &quot;enable_vt&quot;: 0,
        &quot;vt_display&quot;: &quot;&quot;,
        &quot;playback_position&quot;: 0
      },
      {
        &quot;aid&quot;: 462891077,
        &quot;title&quot;: &quot;『教程』回调函数是个啥？&quot;,
        &quot;pubdate&quot;: 1631274885,
        &quot;ctime&quot;: 1631274885,
        &quot;state&quot;: 0,
        &quot;pic&quot;: &quot;http://i0.hdslb.com/bfs/archive/df294350462558601f65b743ca25e2fdc01de628.jpg&quot;,
        &quot;duration&quot;: 452,
        &quot;stat&quot;: {
          &quot;view&quot;: 213895
        },
        &quot;bvid&quot;: &quot;BV1vL411t78b&quot;,
        &quot;ugc_pay&quot;: 0,
        &quot;interactive_video&quot;: false,
        &quot;enable_vt&quot;: 0,
        &quot;vt_display&quot;: &quot;&quot;,
        &quot;playback_position&quot;: 98
      },
      {
        &quot;aid&quot;: 973903762,
        &quot;title&quot;: &quot;『教程』堆栈是个啥？&quot;,
        &quot;pubdate&quot;: 1625227205,
        &quot;ctime&quot;: 1625227209,
        &quot;state&quot;: 0,
        &quot;pic&quot;: &quot;http://i0.hdslb.com/bfs/archive/bf7956b6311ec0787fd52d1293bb4287d16b7e65.jpg&quot;,
        &quot;duration&quot;: 370,
        &quot;stat&quot;: {
          &quot;view&quot;: 535174
        },
        &quot;bvid&quot;: &quot;BV1P44y1q7uL&quot;,
        &quot;ugc_pay&quot;: 0,
        &quot;interactive_video&quot;: false,
        &quot;enable_vt&quot;: 0,
        &quot;vt_display&quot;: &quot;&quot;,
        &quot;playback_position&quot;: 99
      },
      {
        &quot;aid&quot;: 61692380,
        &quot;title&quot;: &quot;『教程』什么是递归？&quot;,
        &quot;pubdate&quot;: 1564660818,
        &quot;ctime&quot;: 1564637347,
        &quot;state&quot;: 0,
        &quot;pic&quot;: &quot;http://i1.hdslb.com/bfs/archive/4af853671204b9bc631fada1934a3e86145a7d19.jpg&quot;,
        &quot;duration&quot;: 658,
        &quot;stat&quot;: {
          &quot;view&quot;: 487397
        },
        &quot;bvid&quot;: &quot;BV194411f71o&quot;,
        &quot;ugc_pay&quot;: 0,
        &quot;interactive_video&quot;: false,
        &quot;enable_vt&quot;: 0,
        &quot;vt_display&quot;: &quot;&quot;,
        &quot;playback_position&quot;: 79
      },
      {
        &quot;aid&quot;: 336713491,
        &quot;title&quot;: &quot;『教程』几分钟听懂迭代器&quot;,
        &quot;pubdate&quot;: 1636713476,
        &quot;ctime&quot;: 1636713476,
        &quot;state&quot;: 0,
        &quot;pic&quot;: &quot;http://i0.hdslb.com/bfs/archive/6e255cce7c0303ab0211acd0f9d1ec5980ff03f7.jpg&quot;,
        &quot;duration&quot;: 453,
        &quot;stat&quot;: {
          &quot;view&quot;: 110688
        },
        &quot;bvid&quot;: &quot;BV18R4y1t7Hg&quot;,
        &quot;ugc_pay&quot;: 0,
        &quot;interactive_video&quot;: false,
        &quot;enable_vt&quot;: 0,
        &quot;vt_display&quot;: &quot;&quot;,
        &quot;playback_position&quot;: 97
      },
      {
        &quot;aid&quot;: 372661682,
        &quot;title&quot;: &quot;『教程』桌面精灵是怎样实现的？&quot;,
        &quot;pubdate&quot;: 1604916264,
        &quot;ctime&quot;: 1604916264,
        &quot;state&quot;: 0,
        &quot;pic&quot;: &quot;http://i0.hdslb.com/bfs/archive/aaa8bb7b6fced63dd4792e28c1f78ba903fcc4cc.jpg&quot;,
        &quot;duration&quot;: 326,
        &quot;stat&quot;: {
          &quot;view&quot;: 168775
        },
        &quot;bvid&quot;: &quot;BV1aZ4y1V7aa&quot;,
        &quot;ugc_pay&quot;: 0,
        &quot;interactive_video&quot;: false,
        &quot;enable_vt&quot;: 0,
        &quot;vt_display&quot;: &quot;&quot;,
        &quot;playback_position&quot;: 0
      },
      {
        &quot;aid&quot;: 550840795,
        &quot;title&quot;: &quot;『教程』什么是钩子技术？&quot;,
        &quot;pubdate&quot;: 1642744335,
        &quot;ctime&quot;: 1642744335,
        &quot;state&quot;: 0,
        &quot;pic&quot;: &quot;http://i0.hdslb.com/bfs/archive/380b1ff9726c673411cf916b03268c7fb16aff68.jpg&quot;,
        &quot;duration&quot;: 240,
        &quot;stat&quot;: {
          &quot;view&quot;: 237568
        },
        &quot;bvid&quot;: &quot;BV1Cq4y1c7kK&quot;,
        &quot;ugc_pay&quot;: 0,
        &quot;interactive_video&quot;: false,
        &quot;enable_vt&quot;: 0,
        &quot;vt_display&quot;: &quot;&quot;,
        &quot;playback_position&quot;: 0
      },
      {
        &quot;aid&quot;: 51839931,
        &quot;title&quot;: &quot;『教程』学编程前必知的8个电脑操作&quot;,
        &quot;pubdate&quot;: 1557313623,
        &quot;ctime&quot;: 1557313623,
        &quot;state&quot;: 0,
        &quot;pic&quot;: &quot;http://i2.hdslb.com/bfs/archive/b54535ee3ff27006912d8013f2ea1667b2a50f80.jpg&quot;,
        &quot;duration&quot;: 641,
        &quot;stat&quot;: {
          &quot;view&quot;: 139385
        },
        &quot;bvid&quot;: &quot;BV1t4411v78E&quot;,
        &quot;ugc_pay&quot;: 0,
        &quot;interactive_video&quot;: false,
        &quot;enable_vt&quot;: 0,
        &quot;vt_display&quot;: &quot;&quot;,
        &quot;playback_position&quot;: 0
      },
      {
        &quot;aid&quot;: 718592873,
        &quot;title&quot;: &quot;『教程』这些常见编程单词到底该怎么读？看你能否读对？对✔❌✅☑&quot;,
        &quot;pubdate&quot;: 1634300675,
        &quot;ctime&quot;: 1634265090,
        &quot;state&quot;: 0,
        &quot;pic&quot;: &quot;http://i1.hdslb.com/bfs/archive/de43275f44aea9f6d79c13ee68c6dcdfc9e5fc5e.jpg&quot;,
        &quot;duration&quot;: 783,
        &quot;stat&quot;: {
          &quot;view&quot;: 81193
        },
        &quot;bvid&quot;: &quot;BV1JQ4y1D79p&quot;,
        &quot;ugc_pay&quot;: 0,
        &quot;interactive_video&quot;: true,
        &quot;enable_vt&quot;: 0,
        &quot;vt_display&quot;: &quot;&quot;,
        &quot;playback_position&quot;: 100
      },
      {
        &quot;aid&quot;: 87838863,
        &quot;title&quot;: &quot;『教程』什么是环境变量&quot;,
        &quot;pubdate&quot;: 1581258353,
        &quot;ctime&quot;: 1581258353,
        &quot;state&quot;: 0,
        &quot;pic&quot;: &quot;http://i0.hdslb.com/bfs/archive/331b2304d8262c4252f338599846761d6a5a8e0c.jpg&quot;,
        &quot;duration&quot;: 353,
        &quot;stat&quot;: {
          &quot;view&quot;: 99797
        },
        &quot;bvid&quot;: &quot;BV1w741147G9&quot;,
        &quot;ugc_pay&quot;: 0,
        &quot;interactive_video&quot;: false,
        &quot;enable_vt&quot;: 0,
        &quot;vt_display&quot;: &quot;&quot;,
        &quot;playback_position&quot;: 0
      }
    ]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="根据关键词查找视频" tabindex="-1"><a class="header-anchor" href="#根据关键词查找视频" aria-hidden="true">#</a> 根据关键词查找视频</h2><blockquote><p>https://api.bilibili.com/x/series/recArchivesByKeywords</p></blockquote><p><em>请求方式：GET</em></p><p><strong>URL参数:</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>mid</td><td>num</td><td>用户 mid</td><td>必要</td><td></td></tr><tr><td>keywords</td><td>str</td><td>关键词</td><td>必要</td><td>可为空, 即获取所有视频</td></tr><tr><td>ps</td><td>num</td><td>每页视频数</td><td>非必要</td><td>默认为 0, 留空为 20</td></tr><tr><td>pn</td><td>num</td><td>页码</td><td>非必要</td><td>留空为 1</td></tr><tr><td>orderby</td><td>str</td><td>排序方式</td><td>非必要</td><td>最新发布: pubdate(默认)<br>最多播放: views<br>senddate: 最新发布</td></tr><tr><td>series_id</td><td>num</td><td>系列 ID</td><td>非必要</td><td>用于过滤结果, 即若某一视频包含在系列内则不返回该视频</td></tr></tbody></table><p><strong>JSON回复:</strong></p><p>根对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0: 成功</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为 0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code> 对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>archives</td><td>arr</td><td>视频列表</td><td></td></tr><tr><td>page</td><td>obj</td><td>页码信息</td><td></td></tr></tbody></table><p><code>archives</code> 数组:</p><p>同<a href="#%E8%8E%B7%E5%8F%96%E8%A7%86%E9%A2%91%E5%90%88%E9%9B%86%E4%BF%A1%E6%81%AF">获取视频合集信息</a>中的<code>archives</code>数组</p><p><code>page</code> 对象:</p><p>同<a href="#%E8%8E%B7%E5%8F%96%E8%A7%86%E9%A2%91%E5%90%88%E9%9B%86%E4%BF%A1%E6%81%AF">获取视频合集信息</a>中的<code>page</code>对象</p><p><strong>示例:</strong></p><p>查询用户 <code>mid=2</code> 关键词为 <code>幕</code> 的视频, 不限制每页视频数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&quot;https://api.bilibili.com/x/series/recArchivesByKeywords&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;mid=2&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;keywords=幕&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;ps=0&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例:</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;archives&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">120040</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;高级语言弹幕测试&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1311616515</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1497344798</span><span class="token punctuation">,</span>
        <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i1.hdslb.com/bfs/archive/55a553659799d8a6fcb645d8f1f9df418ad6fe4e.jpg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">911</span><span class="token punctuation">,</span>
        <span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">3584767</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV1Xx411c7cH&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;interactive_video&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;enable_vt&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;vt_display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;playback_position&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;字幕君交流场所&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1252458549</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1497344798</span><span class="token punctuation">,</span>
        <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://static.hdslb.com/images/transparent.gif&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">2055</span><span class="token punctuation">,</span>
        <span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">4609291</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV1xx411c7mD&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;interactive_video&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;enable_vt&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;vt_display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;playback_position&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">271</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;弹幕测试专用&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1249886475</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1497344798</span><span class="token punctuation">,</span>
        <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i1.hdslb.com/bfs/archive/a5980672f3d03e8292148748a63de99cd45679d3.jpg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">1213</span><span class="token punctuation">,</span>
        <span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">4857422</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV1xx411c7Xg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;interactive_video&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;enable_vt&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;vt_display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;playback_position&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;page&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;num&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="创建视频列表" tabindex="-1"><a class="header-anchor" href="#创建视频列表" aria-hidden="true">#</a> 创建视频列表</h2><blockquote><p>https://api.bilibili.com/x/series/series/createAndAddArchives</p></blockquote><p><em>请求方式: POST</em></p><p>认证方式: Cookie (SESSDATA)</p><p><strong>URL参数:</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>csrf</td><td>str</td><td>CSRF Token (即 Cookies 中 bili_jct )</td><td>必要</td><td></td></tr></tbody></table><p><strong>正文参数 (multipart/form-data):</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>mid</td><td>num</td><td>用户 mid</td><td>必要</td><td></td></tr><tr><td>name</td><td>str</td><td>标题</td><td>必要</td><td></td></tr><tr><td>keywords</td><td>str</td><td>关键词</td><td>不必要</td><td></td></tr><tr><td>description</td><td>str</td><td>简介</td><td>不必要</td><td></td></tr><tr><td>aids</td><td>str</td><td>视频 aid 列表</td><td>不必要</td><td>以 <code>,</code> 分隔, 如 <code>2,112861,112861976201494,976201494</code></td></tr></tbody></table><p><strong>JSON回复:</strong></p><p>根对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0: 成功</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为 0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code> 对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>series_id</td><td>num</td><td>视频列表 ID</td><td></td></tr></tbody></table><p><strong>示例:</strong></p><p>为 <code>mid=616368979</code> 创建视频列表, 标题为 <code>NAME</code>, 视频为 <code>112861976201494</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--url</span> <span class="token string">&quot;https://api.bilibili.com/x/series/series/createAndAddArchives&quot;</span> <span class="token punctuation">\\</span>
--url-query <span class="token string">&quot;csrf=xxxxxxxxxx&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;mid=616368979&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;name=NAME&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;aids=112861976201494&quot;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&quot;SESSDATA=xxx&quot;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例:</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;series_id&quot;</span><span class="token operator">:</span> <span class="token number">4269765</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="删除视频列表" tabindex="-1"><a class="header-anchor" href="#删除视频列表" aria-hidden="true">#</a> 删除视频列表</h2><blockquote><p>https://api.bilibili.com/x/series/series/delete</p></blockquote><p><em>请求方式: POST</em></p><p>认证方式: Cookie (SESSDATA)</p><p><strong>URL参数:</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>csrf</td><td>str</td><td>CSRF Token (即 Cookies 中 bili_jct )</td><td>必要</td><td></td></tr><tr><td>mid</td><td>num</td><td>用户 mid</td><td>必要</td><td></td></tr><tr><td>series_id</td><td>num</td><td>视频列表 ID</td><td>必要</td><td></td></tr><tr><td>aids</td><td>str</td><td>空</td><td>不必要</td><td></td></tr></tbody></table><p><strong>JSON回复:</strong></p><p>根对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0: 成功</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为 0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>空</td><td></td></tr></tbody></table><p><strong>示例:</strong></p><p>为 <code>mid=616368979</code> 删除视频列表 <code>series_id=4269765</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--url</span> <span class="token string">&quot;https://api.bilibili.com/x/series/series/delete&quot;</span> <span class="token punctuation">\\</span>
--url-query <span class="token string">&quot;csrf=xxxxxxxxxx&quot;</span> <span class="token punctuation">\\</span>
--url-query <span class="token string">&quot;series_id=4269765&quot;</span> <span class="token punctuation">\\</span>
--url-query <span class="token string">&quot;mid=616368979&quot;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&quot;SESSDATA=xxx&quot;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例:</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="删除视频列表中的稿件" tabindex="-1"><a class="header-anchor" href="#删除视频列表中的稿件" aria-hidden="true">#</a> 删除视频列表中的稿件</h2><blockquote><p>https://api.bilibili.com/x/series/series/delArchives</p></blockquote><p><em>请求方式: POST</em></p><p>认证方式: Cookie (SESSDATA)</p><p><strong>URL参数:</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>csrf</td><td>str</td><td>CSRF Token (即 Cookies 中 bili_jct )</td><td>必要</td><td></td></tr></tbody></table><p><strong>正文参数 (application/x-www-form-urlencoded):</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>mid</td><td>num</td><td>用户 mid</td><td>必要</td><td></td></tr><tr><td>series_id</td><td>num</td><td>视频列表 ID</td><td>必要</td><td></td></tr><tr><td>aids</td><td>str</td><td>视频 aid 列表</td><td>必要</td><td>以 <code>,</code> 分隔, 如 <code>2,112861,112861976201494,976201494</code></td></tr></tbody></table><p><strong>JSON回复:</strong></p><p>根对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0: 成功</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为 0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>空</td><td></td></tr></tbody></table><p><strong>示例:</strong></p><p>为 <code>mid=616368979</code> 删除视频列表 <code>series_id=4269782</code> 中的 <code>112861976201494</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--url</span> <span class="token string">&quot;https://api.bilibili.com/x/series/series/delArchives&quot;</span> <span class="token punctuation">\\</span>
--url-query <span class="token string">&quot;csrf=xxxxxxxxxx&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;mid=616368979&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;series_id=4269782&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;aids=112861976201494&quot;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&quot;SESSDATA=xxx&quot;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例:</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="添加稿件至视频列表" tabindex="-1"><a class="header-anchor" href="#添加稿件至视频列表" aria-hidden="true">#</a> 添加稿件至视频列表</h2><blockquote><p>https://api.bilibili.com/x/series/series/addArchives</p></blockquote><p><em>请求方式: POST</em></p><p>认证方式: Cookie (SESSDATA)</p><p><strong>URL参数:</strong></p><p>同<a href="#%E5%88%A0%E9%99%A4%E8%A7%86%E9%A2%91%E5%88%97%E8%A1%A8%E4%B8%AD%E7%9A%84%E7%A8%BF%E4%BB%B6">删除视频列表中的稿件</a></p><p><strong>正文参数 (application/x-www-form-urlencoded):</strong></p><p>同<a href="#%E5%88%A0%E9%99%A4%E8%A7%86%E9%A2%91%E5%88%97%E8%A1%A8%E4%B8%AD%E7%9A%84%E7%A8%BF%E4%BB%B6">删除视频列表中的稿件</a></p><p><strong>JSON回复:</strong></p><p>同<a href="#%E5%88%A0%E9%99%A4%E8%A7%86%E9%A2%91%E5%88%97%E8%A1%A8%E4%B8%AD%E7%9A%84%E7%A8%BF%E4%BB%B6">删除视频列表中的稿件</a></p><p><strong>示例:</strong></p><p>为 <code>mid=616368979</code> 添加视频 <code>112861976201494</code> 至视频列表 <code>series_id=4269782</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--url</span> <span class="token string">&quot;https://api.bilibili.com/x/series/series/addArchives&quot;</span> <span class="token punctuation">\\</span>
--url-query <span class="token string">&quot;csrf=xxxxxxxxxx&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;mid=616368979&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;series_id=4269782&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;aids=112861976201494&quot;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&quot;SESSDATA=xxx&quot;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例:</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="编辑视频列表信息" tabindex="-1"><a class="header-anchor" href="#编辑视频列表信息" aria-hidden="true">#</a> 编辑视频列表信息</h2><blockquote><p>https://api.bilibili.com/x/series/series/update</p></blockquote><p><em>请求方式: POST</em></p><p>认证方式: Cookie (SESSDATA)</p><p><strong>URL参数:</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>csrf</td><td>str</td><td>CSRF Token (即 Cookies 中 bili_jct )</td><td>必要</td><td></td></tr></tbody></table><p><strong>正文参数 (application/x-www-form-urlencoded):</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>mid</td><td>num</td><td>用户 mid</td><td>必要</td><td></td></tr><tr><td>series_id</td><td>num</td><td>视频列表 ID</td><td>必要</td><td></td></tr><tr><td>name</td><td>str</td><td>标题</td><td>必要</td><td></td></tr><tr><td>keywords</td><td>str</td><td>关键词</td><td>不必要</td><td></td></tr><tr><td>description</td><td>str</td><td>简介</td><td>不必要</td><td></td></tr><tr><td>add_aids</td><td>str</td><td>视频 aid 列表</td><td>不必要</td><td>以 <code>,</code> 分隔</td></tr><tr><td>del_aids</td><td>str</td><td>视频 aid 列表</td><td>不必要</td><td></td></tr><tr><td>aids</td><td>str</td><td>空</td><td>不必要</td><td></td></tr></tbody></table><p><strong>JSON回复:</strong></p><p>同<a href="#%E5%88%A0%E9%99%A4%E8%A7%86%E9%A2%91%E5%88%97%E8%A1%A8%E4%B8%AD%E7%9A%84%E7%A8%BF%E4%BB%B6">删除视频列表中的稿件</a></p><p><strong>示例:</strong></p><p>为 <code>mid=616368979</code> 编辑视频列表 <code>series_id=4269782</code>, 设置标题为 <code>NAME</code>, 设置简介为空, 设置关键词 <code>Telnet</code>, 添加视频 <code>112861976201494</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--url</span> <span class="token string">&quot;https://api.bilibili.com/x/series/series/update&quot;</span> <span class="token punctuation">\\</span>
--url-query <span class="token string">&quot;csrf=xxxxxxxxxx&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;name=NAME&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;mid=616368979&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;series_id=4269782&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;keywords=Telnet&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;add_aids=112861976201494&quot;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&quot;SESSDATA=xxx&quot;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例:</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,130);function dn(vn,kn){const t=p("RouterLink"),i=p("ExternalLinkIcon");return u(),c("div",null,[d,v,n("p",null,[s("合集是后加入的功能, 图标为立体叠放的正方形(.icon-heji), 可以在创作中心管理, 参见 "),a(t,{to:"/docs/creativecenter/season.html"},{default:e(()=>[s("合集管理")]),_:1})]),k,n("p",null,[s("此处保留原 Issue 的表述, 参见 "),n("a",q,[s("#945"),a(i)])]),b,m,y,h,n("table",null,[g,n("tbody",null,[_,f,x,E,j,A,w,n("tr",null,[B,S,V,D,n("td",null,[s("参见 "),a(t,{to:"/docs/misc/sign/wbi.html"},{default:e(()=>[s("WBI 签名")]),_:1})])]),n("tr",null,[I,J,K,T,n("td",null,[s("参见 "),a(t,{to:"/docs/misc/sign/wbi.html"},{default:e(()=>[s("WBI 签名")]),_:1})])])])]),U,n("table",null,[L,n("tbody",null,[C,F,N,R,n("tr",null,[P,O,G,z,n("td",null,[s("参见 "),a(t,{to:"/docs/misc/sign/wbi.html"},{default:e(()=>[s("WBI 签名")]),_:1})])]),n("tr",null,[W,X,M,Y,n("td",null,[s("参见 "),a(t,{to:"/docs/misc/sign/wbi.html"},{default:e(()=>[s("WBI 签名")]),_:1})])])])]),H,n("table",null,[Q,n("tbody",null,[Z,$,nn,n("tr",null,[sn,an,tn,en,n("td",null,[s("参见 "),a(t,{to:"/docs/misc/sign/wbi.html"},{default:e(()=>[s("WBI 签名")]),_:1})])]),n("tr",null,[on,pn,ln,un,n("td",null,[s("参见 "),a(t,{to:"/docs/misc/sign/wbi.html"},{default:e(()=>[s("WBI 签名")]),_:1})])]),cn])]),rn])}const bn=l(r,[["render",dn],["__file","collection.html.vue"]]);export{bn as default};
