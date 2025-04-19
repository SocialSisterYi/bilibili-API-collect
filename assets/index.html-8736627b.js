import{_ as r,r as p,o as c,c as l,a as t,d as s,w as e,b as a,e as o}from"./app-1b8d61a0.js";const i={},u=o('<h1 id="登录操作" tabindex="-1"><a class="header-anchor" href="#登录操作" aria-hidden="true">#</a> 登录操作</h1><p>人机验证方式登录包含<strong>账号密码登录</strong>与<strong>手机短信验证码登录</strong></p><p><strong>注：扫码登录</strong>不需要进行<strong>人机验证</strong>，故<strong>不使用</strong>以下接口</p><h2 id="扫码登录" tabindex="-1"><a class="header-anchor" href="#扫码登录" aria-hidden="true">#</a> 扫码登录</h2>',4),h=o('<h2 id="验证登录" tabindex="-1"><a class="header-anchor" href="#验证登录" aria-hidden="true">#</a> 验证登录</h2><p>人机验证流程：</p><ol><li>请求验证码参数，得到登录密钥<code>key</code>与极验id<code>gt</code>和极验KEY<code>challenge</code></li><li>进行滑动or点击验证</li><li>返回验证结果<code>validate</code>与<code>seccode</code>，进行短信或密码登录</li></ol><h3 id="申请captcha验证码" tabindex="-1"><a class="header-anchor" href="#申请captcha验证码" aria-hidden="true">#</a> 申请captcha验证码</h3><blockquote><p>https://passport.bilibili.com/x/passport-login/captcha?source=main_web</p></blockquote><p><em>请求方式：GET</em></p>',6),b=o(`<p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>message</td><td>str</td><td>返回信息</td><td></td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>geetest</td><td>obj</td><td>极验captcha数据</td><td></td></tr><tr><td>tencent</td><td>obj</td><td>(?)</td><td><strong>作用尚不明确</strong></td></tr><tr><td>token</td><td>str</td><td>登录 API token</td><td>与 captcha 无关，与登录接口有关</td></tr><tr><td>type</td><td>str</td><td>验证方式</td><td>用于判断使用哪一种验证方式，目前所见只有极验<br>geetest：极验</td></tr></tbody></table><p><code>geetest</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>gt</td><td>str</td><td>极验id</td><td>一般为固定值</td></tr><tr><td>challenge</td><td>str</td><td>极验KEY</td><td>由B站后端产生用于人机验证</td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://passport.bilibili.com/x/passport-login/captcha?source=main_web&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;geetest&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;00fbe75cc2864ba0af969231f193a974&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;geetest&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;challenge&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a57d9be17505d4a15ed84694c48fbf74&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;gt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ac597a4506fee079629df5d8b66dd4fe&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;tencent&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;appid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="申请captcha验证码-旧版" tabindex="-1"><a class="header-anchor" href="#申请captcha验证码-旧版" aria-hidden="true">#</a> 申请captcha验证码 (旧版)</h3><blockquote><p>http://passport.bilibili.com/web/captcha/combine</p></blockquote><p><em>请求方式：GET</em></p><p>该接口曾从文档移除过, 经过测试仍可正常使用</p><p><strong>URL参数:</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>plat</td><td>num</td><td>平台类型</td><td>必要</td><td>默认为 6</td></tr></tbody></table><p><strong>JSON回复:</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>result</td><td>obj</td><td>套了个娃</td><td></td></tr><tr><td>type</td><td>num</td><td>1</td><td><strong>作用尚不明确</strong></td></tr></tbody></table><p><code>result</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>success</td><td>num</td><td>1</td><td><strong>作用尚不明确</strong></td></tr><tr><td>gt</td><td>str</td><td>极验id</td><td>一般为固定值</td></tr><tr><td>challenge</td><td>str</td><td>极验KEY</td><td>由B站后端产生用于人机验证</td></tr><tr><td>key</td><td>str</td><td>登录秘钥</td><td>与 captcha 无关, 与登录接口有关, 亦作 token</td></tr></tbody></table><p><strong>示例:</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://passport.bilibili.com/web/captcha/combine?plat=6&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;success&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;gt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bd111e81eda1cbb9f54425aafc0908ac&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;challenge&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2903a8eb967a1d990444cb23ea42f417&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;76fb59fbd83a4d9d816162c5156fc964&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="进行验证" tabindex="-1"><a class="header-anchor" href="#进行验证" aria-hidden="true">#</a> 进行验证</h3>`,27),k={href:"https://docs.geetest.com/sensebot/start/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://kuresaru.github.io/geetest-validator/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/kuresaru/geetest-validator",target:"_blank",rel:"noopener noreferrer"},v=o('<ol><li>打开手动验证器，在1、2分别填入上面API返回的<code>gt</code>和<code>challenge</code></li><li>点击按钮3，稍等加载验证码，点击按钮4进行验证</li><li>验证完成后，点击按钮5生成验证结果</li><li>使用最开始获得到的<code>key</code>、<code>challenge</code>和刚获得到的<code>validate</code>、<code>seccode</code>继续之后的登录操作</li></ol><h3 id="继续登录" tabindex="-1"><a class="header-anchor" href="#继续登录" aria-hidden="true">#</a> 继续登录</h3>',2);function q(y,_){const n=p("RouterLink"),d=p("ExternalLinkIcon");return c(),l("div",null,[u,t("ul",null,[t("li",null,[s(n,{to:"/docs/login/login_action/QR.html"},{default:e(()=>[a("扫码登录")]),_:1})])]),h,t("p",null,[a("注: 另外参见 "),s(n,{to:"/docs/login/login_action/password.html#%E8%8E%B7%E5%8F%96-captcha"},{default:e(()=>[a("密码登录-手机号验证-获取 captcha")]),_:1})]),b,t("p",null,[a("本文档为 Bilibili 文档，验证码为 "),t("a",k,[a("geetest 极验"),s(d)]),a(" 提供，故不提供相关 API")]),t("p",null,[a("附: "),t("a",g,[a("手动验证器"),s(d)]),t("a",m,[a("及其源码"),s(d)])]),v,t("ul",null,[t("li",null,[s(n,{to:"/docs/login/login_action/SMS.html"},{default:e(()=>[a("短信登录")]),_:1})]),t("li",null,[s(n,{to:"/docs/login/login_action/password.html"},{default:e(()=>[a("密码登录")]),_:1})])])])}const x=r(i,[["render",q],["__file","index.html.vue"]]);export{x as default};
