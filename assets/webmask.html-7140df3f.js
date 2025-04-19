import{_ as c,r as a,o as d,c as i,a as n,b as s,d as t,w as l,e}from"./app-1b8d61a0.js";const u={},r=n("h1",{id:"智能防挡弹幕",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#智能防挡弹幕","aria-hidden":"true"},"#"),s(" 智能防挡弹幕")],-1),k=n("p",null,"B 站部分视频提供“智能防挡弹幕”功能，其原理是提供了一个 webmask 二进制文件，其中保存了视频中各个位置的 svg 格式蒙版。",-1),m=n("p",null,"首先需要获取 webmask 资源的地址。",-1),b=n("h2",{id:"获取-webmask-资源地址",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#获取-webmask-资源地址","aria-hidden":"true"},"#"),s(" 获取 webmask 资源地址")],-1),v=e(`<h2 id="webmask-资源" tabindex="-1"><a class="header-anchor" href="#webmask-资源" aria-hidden="true">#</a> webmask 资源</h2><p>获取的 url 没有权鉴，不需要后面的参数也可以获取。</p><p>示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> https://upos-sz-staticcos-cmask.bilivideo.com/cmaskboss/825851971_30_0.webmask <span class="token operator">&gt;&gt;</span> 825851971_30_0.webmask
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下载后是二进制文件。</p><h2 id="webmask-二进制读取" tabindex="-1"><a class="header-anchor" href="#webmask-二进制读取" aria-hidden="true">#</a> webmask 二进制读取</h2>`,6),h={href:"https://github.com/andrewvy/webmask-renderer",target:"_blank",rel:"noopener noreferrer"},f=e(`<table><thead><tr><th>name</th><th>offset</th><th>length</th><th>type</th><th>desc</th></tr></thead><tbody><tr><td>mask</td><td>0</td><td>4</td><td>char</td><td>&#39;MASK&#39; 文件头</td></tr><tr><td>version</td><td>4</td><td>4</td><td>int</td><td>是1</td></tr><tr><td>vU</td><td>8</td><td>4</td><td>?</td><td>不知道是干什么的</td></tr><tr><td>Ly</td><td>12</td><td>4</td><td>int</td><td>后续数据的段数</td></tr><tr><td>time_1</td><td>16</td><td>8</td><td>long</td><td>第一段对应视频开始时间</td></tr><tr><td>offset_1</td><td>24</td><td>8</td><td>long</td><td>第一段蒙版信息开始处对应二进制偏移</td></tr><tr><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td></tr><tr><td>time_{Ly}</td><td>16+(Ly-1)*16</td><td>8</td><td>long</td><td>第 <code>Ly</code> 段对应视频开始时间</td></tr><tr><td>offset_{Ly}</td><td>24+(Ly-1)*16</td><td>8</td><td>long</td><td>第 <code>Ly</code> 段蒙版信息开始处对应二进制偏移</td></tr><tr><td>segments_1</td><td>由前面offset_1提供</td><td>由 <code>offset_2-offset_1</code> 计算得到</td><td>binary</td><td>蒙版信息块，使用 gzip 压缩</td></tr><tr><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td></tr></tbody></table><p>蒙版信息块是经过 gzip 压缩文本得到的二进制。解压缩后得到一个字节串。</p><p>前 16 字节是两个 long，记为 <code>left</code> 和 <code>right</code>，暂时不清楚其作用。<code>left</code> 似乎和平均每张蒙版的时间有关。<code>right</code> 总是 <code>i*10000</code>，<code>i</code> 是从 0 开始数的数据段次序。</p><p>后面是各个 svg 文本直接拼起来，可以直接通过 svg 格式头 <code>data:image/svg+xml;base64,</code> 分开。</p><p>Python 示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> struct <span class="token keyword">import</span> unpack
<span class="token keyword">import</span> gzip

f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;你的 webmask&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span>
buf <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
_Ly <span class="token operator">=</span> buf<span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">:</span><span class="token number">16</span><span class="token punctuation">]</span>
Ly <span class="token operator">=</span> unpack<span class="token punctuation">(</span><span class="token string">&#39;&gt;i&#39;</span><span class="token punctuation">,</span> _Ly<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment"># 大端序 int</span>

times <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
offsets <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> idx <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>Ly<span class="token punctuation">)</span><span class="token punctuation">:</span>
    op <span class="token operator">=</span> <span class="token number">16</span> <span class="token operator">+</span> idx <span class="token operator">*</span> <span class="token number">16</span>  <span class="token comment"># 个人习惯，我算偏移时喜欢用 \`op\` 和 \`ed\` 作为开始和结束的名字。</span>
    time <span class="token operator">=</span> unpack<span class="token punctuation">(</span><span class="token string">&#39;&gt;q&#39;</span><span class="token punctuation">,</span> buf<span class="token punctuation">[</span>op<span class="token punctuation">:</span> op<span class="token operator">+</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    offset <span class="token operator">=</span> unpack<span class="token punctuation">(</span><span class="token string">&#39;&gt;q&#39;</span><span class="token punctuation">,</span> buf<span class="token punctuation">[</span>op<span class="token operator">+</span><span class="token number">8</span><span class="token punctuation">:</span> op<span class="token operator">+</span><span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    times<span class="token punctuation">.</span>append<span class="token punctuation">(</span>time<span class="token punctuation">)</span>
    offsets<span class="token punctuation">.</span>append<span class="token punctuation">(</span>offset<span class="token punctuation">)</span>

frames <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> idx <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>Ly<span class="token punctuation">)</span><span class="token punctuation">:</span>
    op <span class="token operator">=</span> offsets<span class="token punctuation">[</span>idx<span class="token punctuation">]</span>
    <span class="token keyword">if</span> idx <span class="token operator">==</span> Ly <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">:</span> ed <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span> ed <span class="token operator">=</span> offsets<span class="token punctuation">[</span>idx<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span>
    ba <span class="token operator">=</span> buf<span class="token punctuation">[</span>op<span class="token punctuation">:</span> ed<span class="token punctuation">]</span>
    bad <span class="token operator">=</span> gzip<span class="token punctuation">.</span>decompress<span class="token punctuation">(</span>ba<span class="token punctuation">)</span>
    badl <span class="token operator">=</span> bad<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">b&#39;data:image/svg+xml;base64,&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># badl[0]是16字节，\`left\` 和 \`right\`</span>
    frames<span class="token punctuation">.</span>append<span class="token punctuation">(</span>badl<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span> <span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function _(g,w){const p=a("RouterLink"),o=a("ExternalLinkIcon");return d(),i("div",null,[r,k,m,b,n("p",null,[s("通过 "),t(p,{to:"/docs/video/player.html"},{default:l(()=>[s("web 播放器资源接口")]),_:1}),s(" 获取 webmask 二进制文件的地址。")]),v,n("p",null,[s("参考："),n("a",h,[s("andrewvy/webmask-renderer"),t(o)])]),f])}const x=c(u,[["render",_],["__file","webmask.html.vue"]]);export{x as default};
