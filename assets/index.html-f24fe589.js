import{_ as e,r as p,o as d,c as l,a as n,d as a,w as o,b as t,e as i}from"./app-ef6f9170.js";const u={},c=n("h1",{id:"视频笔记",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#视频笔记","aria-hidden":"true"},"#"),t(" 视频笔记")],-1),r=n("p",null,'2020-11-16 B站推出了测试版的功能——"视频笔记"，与视频稿件关联，为富文本模式，可供记录观看视频时的感悟以及视频中的重要内容，目前只可在web端操作',-1),k=n("p",null,"笔记分为私有笔记和公开笔记，一个稿件只能添加一篇私有笔记，但可以公开多篇笔记",-1),v=n("p",null,[t("公开笔记与【专栏】性质相同，使用"),n("code",null,"cvid"),t("寻址相应的公开笔记")],-1),b=n("hr",null,null,-1),q=n("p",null,[n("strong",null,"继续查看：")],-1),m=i(`<hr><h2 id="附表-笔记正文序列格式" tabindex="-1"><a class="header-anchor" href="#附表-笔记正文序列格式" aria-hidden="true">#</a> 附表-笔记正文序列格式</h2><p>根数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>第1个元素</td><td></td></tr><tr><td>n</td><td>obj</td><td>第(n+1)个元素</td><td></td></tr><tr><td>……</td><td>obj</td><td>……</td><td>……</td></tr></tbody></table><p>根数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>attributes</td><td>obj</td><td>元素属性</td><td>无属性无此项</td></tr><tr><td>insert</td><td>str</td><td>元素内容</td><td>为跳转/图片时无此项</td></tr><tr><td>insert</td><td>obj</td><td>元素跳转信息</td><td>非跳转/图片时无此项</td></tr></tbody></table><p>对象中的<code>attributes</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>bold</td><td>bool</td><td>是否加粗</td><td></td></tr><tr><td>strike</td><td>bool</td><td>是否删除线</td><td></td></tr><tr><td>underline</td><td>bool</td><td>是否下划线</td><td></td></tr><tr><td>background</td><td>str</td><td>背景颜色</td><td></td></tr><tr><td>color</td><td>str</td><td>文字颜色</td><td></td></tr><tr><td>list</td><td>str</td><td>列表属性</td><td>ordered有序列表/bullet无序列表</td></tr><tr><td>size</td><td>str</td><td>文字字号</td><td></td></tr></tbody></table><p>对象中的<code>insert</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>tag</td><td>obj</td><td>跳转标签</td><td>二选一</td></tr><tr><td>imageUpload</td><td>obj</td><td>笔记图片</td><td>二选一</td></tr></tbody></table><p><code>insert</code>中的<code>tag</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>cid</td><td>num</td><td>视频cid</td><td></td></tr><tr><td>status</td><td>num</td><td>0</td><td>作用尚不明确</td></tr><tr><td>index</td><td>num</td><td>在稿件中的分P索引</td><td></td></tr><tr><td>seconds</td><td>num</td><td>视频进度</td><td></td></tr><tr><td>cidCount</td><td>num</td><td>稿件总分P数</td><td></td></tr><tr><td>key</td><td>str</td><td>标签创建时间戳</td><td></td></tr><tr><td>title</td><td>str</td><td>output</td><td>作用尚不明确</td></tr></tbody></table><p><code>insert</code>中的<code>imageUpload</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>url</td><td>str</td><td>图片链接</td><td></td></tr><tr><td>status</td><td>str</td><td>done</td><td>作用尚不明确</td></tr><tr><td>width</td><td>num</td><td>图片宽度-2</td><td></td></tr></tbody></table><p>示例：</p><p>以下笔记正文序列包含<code>字号</code>、<code>加粗</code>、<code>高亮</code>、<code>普通文本</code>格式</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;24px&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;bold&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;insert&quot;</span><span class="token operator">:</span> <span class="token string">&quot;关掉&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;24px&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;insert&quot;</span><span class="token operator">:</span> <span class="token string">&quot;，&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;24px&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;bold&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;insert&quot;</span><span class="token operator">:</span> <span class="token string">&quot;关掉&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;insert&quot;</span><span class="token operator">:</span> <span class="token string">&quot;，&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;background&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#fff359&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;insert&quot;</span><span class="token operator">:</span> <span class="token string">&quot;一定要&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;background&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#fff359&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;bold&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;insert&quot;</span><span class="token operator">:</span> <span class="token string">&quot;关掉&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;insert&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\n再不关掉那些&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;bold&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;insert&quot;</span><span class="token operator">:</span> <span class="token string">&quot;网络游戏&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;insert&quot;</span><span class="token operator">:</span> <span class="token string">&quot;，小孩哪有&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;bold&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;insert&quot;</span><span class="token operator">:</span> <span class="token string">&quot;美好的未来&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;insert&quot;</span><span class="token operator">:</span> <span class="token string">&quot;，哪有&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;bold&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;insert&quot;</span><span class="token operator">:</span> <span class="token string">&quot;美好的前程&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;insert&quot;</span><span class="token operator">:</span> <span class="token string">&quot;，祖国哪有&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;bold&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;insert&quot;</span><span class="token operator">:</span> <span class="token string">&quot;栋梁之才&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;insert&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\n&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function h(y,g){const s=p("RouterLink");return d(),l("div",null,[c,r,k,v,b,q,n("ul",null,[n("li",null,[a(s,{to:"/docs/note/list.html"},{default:o(()=>[t("笔记列表")]),_:1})]),n("li",null,[a(s,{to:"/docs/note/info.html"},{default:o(()=>[t("笔记详细信息")]),_:1})]),n("li",null,[a(s,{to:"/docs/note/action.html"},{default:o(()=>[t("笔记操作")]),_:1})])]),m])}const f=e(u,[["render",h],["__file","index.html.vue"]]);export{f as default};
