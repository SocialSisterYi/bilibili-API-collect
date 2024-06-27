import{_ as e,r as p,o,c as i,a as s,b as n,d as t,e as c}from"./app-40a6c174.js";const l={},u=s("p",null,[s("code",null,"bili_ticket"),n(" 目前没发现多少风控价值，但是暂且在这里提供一份示例。")],-1),r={href:"https://github.com/aynuarance",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/SocialSisterYi/bilibili-API-collect/issues/903",target:"_blank",rel:"noopener noreferrer"},k=s("code",null,"hmac_sha256",-1),v=s("code",null,"hexsign",-1),m={href:"https://jwt.io/",target:"_blank",rel:"noopener noreferrer"},b=s("code",null,"eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDI3NDI3NDYsImlhdCI6MTcwMjQ4MzQ4NiwicGx0IjotMX0.xQgtTAc41NA1gzvd9yKUPgucUy_DKcQj6OG1vj8V7ZA",-1),h=c(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;alg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HS256&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;kid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;s03&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;typ&quot;</span><span class="token operator">:</span> <span class="token string">&quot;JWT&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="python-示例" tabindex="-1"><a class="header-anchor" href="#python-示例" aria-hidden="true">#</a> Python 示例</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> hmac
<span class="token keyword">import</span> hashlib
<span class="token keyword">import</span> requests
<span class="token keyword">import</span> time

<span class="token keyword">def</span> <span class="token function">hmac_sha256</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    使用HMAC-SHA256算法对给定的消息进行加密
    :param key: 密钥
    :param message: 要加密的消息
    :return: 加密后的哈希值
    &quot;&quot;&quot;</span>
    <span class="token comment"># 将密钥和消息转换为字节串</span>
    key <span class="token operator">=</span> key<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
    message <span class="token operator">=</span> message<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>

    <span class="token comment"># 创建HMAC对象，使用SHA256哈希算法</span>
    hmac_obj <span class="token operator">=</span> hmac<span class="token punctuation">.</span>new<span class="token punctuation">(</span>key<span class="token punctuation">,</span> message<span class="token punctuation">,</span> hashlib<span class="token punctuation">.</span>sha256<span class="token punctuation">)</span>

    <span class="token comment"># 计算哈希值</span>
    hash_value <span class="token operator">=</span> hmac_obj<span class="token punctuation">.</span>digest<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 将哈希值转换为十六进制字符串</span>
    hash_hex <span class="token operator">=</span> hash_value<span class="token punctuation">.</span><span class="token builtin">hex</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> hash_hex


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    o <span class="token operator">=</span> hmac_sha256<span class="token punctuation">(</span><span class="token string">&quot;XgwSnGZ1p&quot;</span><span class="token punctuation">,</span><span class="token string-interpolation"><span class="token string">f&quot;ts</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">int</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
    url <span class="token operator">=</span> <span class="token string">&quot;https://api.bilibili.com/bapis/bilibili.api.ticket.v1.Ticket/GenWebTicket&quot;</span>
    params <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;key_id&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;ec02&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;hexsign&quot;</span><span class="token punctuation">:</span>o<span class="token punctuation">,</span>
        <span class="token string">&quot;context[ts]&quot;</span><span class="token punctuation">:</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">int</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">,</span>
        <span class="token string">&quot;csrf&quot;</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span>

    headers <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token string">&#39;user-agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0&quot;</span>
        <span class="token punctuation">}</span>
    resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span>url<span class="token punctuation">,</span> params<span class="token operator">=</span>params<span class="token punctuation">,</span>headers<span class="token operator">=</span>headers<span class="token punctuation">)</span><span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function _(g,q){const a=p("ExternalLinkIcon");return o(),i("div",null,[u,s("p",null,[n("由 "),s("a",r,[n("@aynuarance"),t(a)]),n(" 于 "),s("a",d,[n("#903"),t(a)]),n(" 提供的思路，根据时间戳使用 "),k,n(" 算法计算 "),v,n("。")]),s("p",null,[n("是 "),s("a",m,[n("JWT 令牌"),t(a)]),n("，有效时长为 259260 秒，即 3 天。 例如 "),b]),h])}const f=e(l,[["render",_],["__file","bili_ticket.html.vue"]]);export{f as default};
