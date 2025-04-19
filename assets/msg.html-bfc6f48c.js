import{_ as t,o as s,c as a,e as n}from"./app-1b8d61a0.js";const e={},d=n(`<h1 id="客服消息" tabindex="-1"><a class="header-anchor" href="#客服消息" aria-hidden="true">#</a> 客服消息</h1><h2 id="心跳" tabindex="-1"><a class="header-anchor" href="#心跳" aria-hidden="true">#</a> 心跳</h2><blockquote><p>https://customerservice.bilibili.com/x/custom/session_svr/v1/heart_beat</p></blockquote><p><em>请求方式: GET</em></p><p>认证方式: Cookie (SESSDATA)</p><p><strong>URL参数:</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>shop_id</td><td>num</td><td>0</td><td>非必要</td><td></td></tr><tr><td>shop_father_id</td><td>num</td><td>0</td><td>非必要</td><td></td></tr><tr><td>build</td><td>num</td><td>客户端版本</td><td>非必要</td><td>web: 0</td></tr><tr><td>mobi_app</td><td>str</td><td>客户端类型</td><td>非必要</td><td>如 <code>web</code></td></tr></tbody></table><p><strong>JSON回复:</strong></p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0: 成功</td></tr><tr><td>msg</td><td>str</td><td><code>ok</code></td><td>失败时不存在</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>成功时为 <code>ok</code></td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr></tbody></table><p><strong>示例:</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&quot;https://customerservice.bilibili.com/x/custom/session_svr/v1/heart_beat&quot;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&quot;SESSDATA=xxx&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例:</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="上传文件" tabindex="-1"><a class="header-anchor" href="#上传文件" aria-hidden="true">#</a> 上传文件</h2><blockquote><p>https://customerservice.bilibili.com/x/custom/msg_svr/v1/upload</p></blockquote><p><em>请求方式: POST</em></p><p>认证方式: Cookie (SESSDATA)</p><p>注: 上传的文件 15 分钟内有效, 过期后下载会返回 HTTP 403</p><p><strong>正文参数 (multipart/form-data):</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>file</td><td>file</td><td>文件内容</td><td>必要</td><td></td></tr><tr><td>filename</td><td>str</td><td>文件名</td><td>必要</td><td></td></tr><tr><td>mid</td><td>num</td><td>用户 mid</td><td>必要</td><td></td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token (位于 Cookie 中 bili_jct)</td><td>必要</td><td></td></tr></tbody></table><p><strong>JSON回复:</strong></p><p>根对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0: 成功<br>1000011: 仅支持上传300M内的文件<br>1200201: 获取用户信息失败</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>成功时为 <code>ok</code></td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>上传结果</td><td></td></tr></tbody></table><p><code>data</code> 对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>key</td><td>str</td><td>文件名</td><td></td></tr><tr><td>url</td><td>str</td><td>文件 URL</td><td>注意转义</td></tr></tbody></table><p><strong>示例:</strong></p><p>上传文件 <code>./headers/xx-out.xcf</code>, 文件名 <code>ihavenoname</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token string">&quot;https://customerservice.bilibili.com/x/custom/msg_svr/v1/upload&quot;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-F</span> <span class="token string">&#39;file=@./headers/xx-out.xcf&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-F</span> <span class="token string">&#39;filename=ihavenoname&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-F</span> <span class="token string">&#39;mid=1070915568&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-F</span> <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx; bili_jct=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例:</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1a0c88d240852155a111e4cc6893be39.xcf&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://jssz-boss.hdslb.com/customer-video-upload/1a0c88d240852155a111e4cc6893be39.xcf?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=f9TxwsagojnE1DWM%2F20240803%2Fjssz%2Fs3%2Faws4_request&amp;X-Amz-Date=20240803T115447Z&amp;X-Amz-Expires=900&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=cef962c8e503c6ff564fd485bdef1079df1b4a7e38f4fbd9c21a5667207f406e&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,28),o=[d];function r(p,i){return s(),a("div",null,o)}const l=t(e,[["render",r],["__file","msg.html.vue"]]);export{l as default};
