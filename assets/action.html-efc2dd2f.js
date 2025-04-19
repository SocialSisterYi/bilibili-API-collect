import{_ as t,o as s,c as n,e as a}from"./app-1b8d61a0.js";const d={},e=a(`<h1 id="动态操作" tabindex="-1"><a class="header-anchor" href="#动态操作" aria-hidden="true">#</a> 动态操作</h1><h2 id="删除动态" tabindex="-1"><a class="header-anchor" href="#删除动态" aria-hidden="true">#</a> 删除动态</h2><blockquote><p>https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/rm_dynamic</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）</p><p><strong>正文参数（multipart/form-data）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>dynamic_id</td><td>num</td><td>动态id</td><td>必要</td><td></td></tr><tr><td>csrf_token</td><td>str</td><td>csrf</td><td>必要</td><td></td></tr><tr><td>csrf</td><td>str</td><td>csrf</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录<br>500404：已经删除过该动态<br>500406：动态不是自己的</td></tr><tr><td>msg</td><td>str</td><td>错误信息</td><td>成功时为空文本</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>同<code>msg</code></td></tr><tr><td>data</td><td>obj</td><td>数据本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>_gt_</td><td>num</td><td>0</td><td><strong>作用尚不明确</strong></td></tr></tbody></table><p><strong>示例：</strong></p><p>删除动态<code>dynamic_id=588320531406678918</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/rm_dynamic&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;dynamic_id=588320531406678918&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf_token=xxx&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_gt_&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,16),o=[e];function r(c,p){return s(),n("div",null,o)}const l=t(d,[["render",r],["__file","action.html.vue"]]);export{l as default};
