import{_ as t,o as a,c as s,e as n}from"./app-1b8d61a0.js";const e={},d=n(`<h1 id="直播心跳上报" tabindex="-1"><a class="header-anchor" href="#直播心跳上报" aria-hidden="true">#</a> 直播心跳上报</h1><h2 id="直播心跳-web端" tabindex="-1"><a class="header-anchor" href="#直播心跳-web端" aria-hidden="true">#</a> 直播心跳 (Web端)</h2><blockquote><p>https://live-trace.bilibili.com/xlive/rdata-interface/v1/heartbeat/webHeartBeat</p></blockquote><p><em>请求方式: GET</em></p><p><strong>URL参数:</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>hb</td><td>str</td><td>heartbeat 正文</td><td>不必要</td><td>使用 base64 编码</td></tr><tr><td>pf</td><td>str</td><td>平台名称</td><td>不必要</td><td>可为 <code>web</code></td></tr></tbody></table><p><code>hb</code> 解码参数:</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>num</td><td>上次返回的 next_interval 值</td><td>默认 60</td></tr><tr><td>1</td><td>num</td><td>真实直播间号</td><td></td></tr><tr><td>2</td><td>num</td><td>1</td><td>作用尚不明确</td></tr><tr><td>3</td><td>num</td><td>0</td><td>作用尚不明确</td></tr></tbody></table><p><strong>JSON回复:</strong></p><p>根对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td></td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为 0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code> 对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>next_interval</td><td>num</td><td>下次心跳间隔</td><td></td></tr></tbody></table><p><strong>示例:</strong></p><p>上报直播间 26863308 的心跳</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&quot;https://live-trace.bilibili.com/xlive/rdata-interface/v1/heartbeat/webHeartBeat&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;hb=<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;60|26863308|1|0&quot;</span> <span class="token operator">|</span> base64 -<span class="token variable">)</span></span>&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;pf=web&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例:</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;next_interval&quot;</span><span class="token operator">:</span> <span class="token number">60</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,17),r=[d];function o(p,l){return a(),s("div",null,r)}const i=t(e,[["render",o],["__file","report.html.vue"]]);export{i as default};
