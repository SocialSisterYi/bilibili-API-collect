import{_ as s,o as t,c as n,e as a}from"./app-1b8d61a0.js";const p={},o=a(`<h1 id="搜索建议" tabindex="-1"><a class="header-anchor" href="#搜索建议" aria-hidden="true">#</a> 搜索建议</h1><h2 id="获取搜索建议关键词-web端" tabindex="-1"><a class="header-anchor" href="#获取搜索建议关键词-web端" aria-hidden="true">#</a> 获取搜索建议关键词（web端）</h2><blockquote><p>https://s.search.bilibili.com/main/suggest</p></blockquote><p><em>请求方式：GET</em></p><p>搜索建议最多提供10个候选关键词</p><p>搜索建议内容可为任意语言（中 英 日等....），中文拼音支持全拼联想词</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>term</td><td>str</td><td>需要获得建议的输入内容</td><td>必要</td><td></td></tr><tr><td>main_ver</td><td>str</td><td>v1</td><td>非必要</td><td>默认为 <code>v1</code></td></tr><tr><td>highlight</td><td>str</td><td>任意, 无明显作用</td><td>非必要</td><td>默认为空</td></tr><tr><td>func</td><td>str</td><td>函数?</td><td>非必要</td><td>默认为 <code>suggest</code></td></tr><tr><td>suggest_type</td><td>str</td><td>建议类型?</td><td>非必要</td><td>默认为 <code>accurate</code></td></tr><tr><td>sub_type</td><td>str</td><td>子类型?</td><td>非必要</td><td>默认为 <code>tag</code></td></tr><tr><td>userid</td><td>num</td><td>本用户 mid</td><td>非必要</td><td>可能用于个性化推荐</td></tr><tr><td>bangumi_acc_num</td><td>num</td><td>番剧累积数?</td><td>非必要</td><td>默认为 <code>1</code></td></tr><tr><td>special_acc_num</td><td>num</td><td>特殊累积数?</td><td>非必要</td><td>默认为 <code>1</code></td></tr><tr><td>topic_acc_num</td><td>num</td><td>话题累积数?</td><td>非必要</td><td>默认为 <code>1</code></td></tr><tr><td>upuser_acc_num</td><td>num</td><td>UP主累积数?</td><td>非必要</td><td>默认为 <code>1</code></td></tr><tr><td>tag_num</td><td>num</td><td>Tag 数?</td><td>非必要</td><td>默认为 <code>10</code></td></tr><tr><td>special_num</td><td>num</td><td>特殊推荐数?</td><td>非必要</td><td>默认为 <code>10</code></td></tr><tr><td>bangumi_num</td><td>num</td><td>番剧推荐数?</td><td>非必要</td><td>默认为 <code>10</code></td></tr><tr><td>upuser_num</td><td>num</td><td>UP主推荐数?</td><td>非必要</td><td>默认为 <code>3</code></td></tr><tr><td>rnd</td><td>num</td><td>一个随机浮点数</td><td>非必要</td><td>由 <code>Math.random()</code> 生成?</td></tr><tr><td>buvid</td><td>str</td><td>同 Cookie 中 buvid3</td><td>非必要</td><td></td></tr><tr><td>spmid</td><td>str</td><td>333.1007</td><td>非必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>exp_str</td><td>str</td><td>实验字符串?</td><td>作用尚不明确</td></tr><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>result</td><td>obj</td><td>搜索建议结果</td><td></td></tr><tr><td>stoken</td><td>str</td><td>？？？</td><td>作用尚不明确</td></tr></tbody></table><p><code>result</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>tag</td><td>array</td><td>套了个娃</td><td></td></tr></tbody></table><p><code>result</code>中的<code>tag</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>第1建议关键词</td><td></td></tr><tr><td>n</td><td>obj</td><td>第（n+1）建议关键词</td><td>按照相关程度与热度顺序</td></tr><tr><td>9</td><td>obj</td><td>第10建议关键词</td><td>最后一项</td></tr></tbody></table><p><code>tag</code>数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>value</td><td>str</td><td>关键词内容</td><td></td></tr><tr><td>ref</td><td>num</td><td>0</td><td>作用尚不明确</td></tr><tr><td>name</td><td>str</td><td>显示内容</td><td>带有 <code>&lt;em class=&quot;suggest_high_light&quot;&gt;</code> 的 XML 标签</td></tr><tr><td>spid</td><td>num</td><td>5</td><td>作用尚不明确</td></tr><tr><td>type</td><td>str</td><td>空</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>获取关于 <code>洛天依</code> 的搜索建议</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://s.search.bilibili.com/main/suggest&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;term=洛天依&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例:</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;exp_str&quot;</span><span class="token operator">:</span> <span class="token string">&quot;106301_106700&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;洛天依&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token string">&quot;洛天依&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ref&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;em class=\\&quot;suggest_high_light\\&quot;&gt;洛天依&lt;/em&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;spid&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;洛天依十二周年&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token string">&quot;洛天依十二周年&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ref&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;em class=\\&quot;suggest_high_light\\&quot;&gt;洛天依&lt;/em&gt;十二周年&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;spid&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;洛天依演唱会&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token string">&quot;洛天依演唱会&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ref&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;em class=\\&quot;suggest_high_light\\&quot;&gt;洛天依&lt;/em&gt;演唱会&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;spid&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;洛天依手办&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token string">&quot;洛天依手办&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ref&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;em class=\\&quot;suggest_high_light\\&quot;&gt;洛天依&lt;/em&gt;手办&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;spid&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;洛天依歌曲&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token string">&quot;洛天依歌曲&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ref&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;em class=\\&quot;suggest_high_light\\&quot;&gt;洛天依&lt;/em&gt;歌曲&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;spid&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;洛天依童话镇&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token string">&quot;洛天依童话镇&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ref&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;em class=\\&quot;suggest_high_light\\&quot;&gt;洛天依&lt;/em&gt;童话镇&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;spid&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;洛天依东京不太热&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token string">&quot;洛天依东京不太热&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ref&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;em class=\\&quot;suggest_high_light\\&quot;&gt;洛天依&lt;/em&gt;东京不太热&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;spid&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;洛天依霜雪千年&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token string">&quot;洛天依霜雪千年&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ref&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;em class=\\&quot;suggest_high_light\\&quot;&gt;洛天依&lt;/em&gt;霜雪千年&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;spid&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;洛天依生日会&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token string">&quot;洛天依生日会&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ref&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;em class=\\&quot;suggest_high_light\\&quot;&gt;洛天依&lt;/em&gt;生日会&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;spid&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;洛天依生日&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token string">&quot;洛天依生日&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ref&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;em class=\\&quot;suggest_high_light\\&quot;&gt;洛天依&lt;/em&gt;生日&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;spid&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;stoken&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4020133863501304726&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,21),e=[o];function u(r,d){return t(),n("div",null,e)}const c=s(p,[["render",u],["__file","suggest.html.vue"]]);export{c as default};
