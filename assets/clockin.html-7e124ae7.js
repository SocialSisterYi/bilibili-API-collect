import{_ as s,o as t,c as a,e}from"./app-1b8d61a0.js";const n={},i=e(`<h1 id="大会员签到" tabindex="-1"><a class="header-anchor" href="#大会员签到" aria-hidden="true">#</a> 大会员签到</h1><h2 id="大积分签到" tabindex="-1"><a class="header-anchor" href="#大积分签到" aria-hidden="true">#</a> 大积分签到</h2><blockquote><p>https://api.bilibili.com/pgc/activity/score/task/sign</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie (SESSDATA) / access_key</p><p>Cookie 鉴权方式下需要满足以下条件：</p><ul><li><code>Referer</code>在<code>*.bilibili.com</code>域名下</li><li><code>SESSDATA</code> 需要进行 url 编码，即 <code>,</code> 替换为 <code>%2C</code></li></ul><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>access_key</td><td>str</td><td>APP登录Token</td><td>APP方式必要</td><td></td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token (位于cookie)</td><td>非必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段名</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>响应码</td><td>0：成功<br>-101：账号未登录<br>-401：非法访问<br>-403：访问权限不足</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>web 方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/pgc/activity/score/task/sign&#39;</span> <span class="token punctuation">\\</span>
    --data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
	<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span> <span class="token punctuation">\\</span>
	<span class="token parameter variable">--referer</span> <span class="token string">&#39;https://www.bilibili.com&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>APP 方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/pgc/activity/score/task/sign&#39;</span> <span class="token punctuation">\\</span>
	--data-urlencode <span class="token string">&#39;access_key=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,18),d=[i];function c(o,r){return t(),a("div",null,d)}const p=s(n,[["render",c],["__file","clockin.html.vue"]]);export{p as default};
