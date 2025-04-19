import{_ as a,r as e,o as s,c as d,a as t,b as o,d as q,e as n}from"./app-1b8d61a0.js";const r={},c=t("h1",{id:"首页横幅头图",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#首页横幅头图","aria-hidden":"true"},"#"),o(" 首页横幅头图")],-1),l=t("h2",{id:"获取方法",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#获取方法","aria-hidden":"true"},"#"),o(" 获取方法")],-1),i={href:"https://space.bilibili.com/6823116",target:"_blank",rel:"noopener noreferrer"},p=t("li",null,[t("p",null,"✅ 通过主页获取头图接口获取静态图片与各部分及其动态偏移信息")],-1),b=n(`<h2 id="获取首页头图" tabindex="-1"><a class="header-anchor" href="#获取首页头图" aria-hidden="true">#</a> 获取首页头图</h2><blockquote><p>https://api.bilibili.com/x/web-show/page/header</p></blockquote><p><em>请求方式: GET</em></p><p><strong>URL参数:</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>resource_id</td><td>num</td><td>资源 ID?</td><td>必要</td><td>默认为 <code>142</code>, 实测可为任意有效整数</td></tr></tbody></table><p><strong>JSON回复:</strong></p><p>根对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0: 成功</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为 0</td></tr><tr><td>ttl</td><td>str</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code> 对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>name</td><td>str</td><td>空</td><td></td></tr><tr><td>pic</td><td>str</td><td>静态头图 URL</td><td></td></tr><tr><td>litpic</td><td>str</td><td>bilibili logo URL</td><td></td></tr><tr><td>url</td><td>str</td><td>空</td><td></td></tr><tr><td>is_split_layer</td><td>str</td><td>是否分层</td><td>1: 是</td></tr><tr><td>split_layer</td><td>str</td><td>分层信息</td><td>一个套在字符串里的 JSON 对象</td></tr></tbody></table><p><code>data</code> 对象中的<code>split_layer</code> 字符串里的 JSON 对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>version</td><td>str</td><td>版本号</td><td>目前为 <code>1</code></td></tr><tr><td>layers</td><td>array</td><td>层信息</td><td></td></tr></tbody></table><p><code>split_layer</code> 字符串里的 JSON 对象中的 <code>layers</code> 数组:</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>第 1 个层信息</td><td></td></tr><tr><td>2</td><td>obj</td><td>第 3 个层信息</td><td></td></tr><tr><td>1</td><td>obj</td><td>第 2 个层信息</td><td></td></tr><tr><td>……</td><td>obj</td><td>……</td><td></td></tr><tr><td>n</td><td>obj</td><td>第 (n+1) 个层信息</td><td></td></tr></tbody></table><p><code>split_layer</code> 字符串里的 JSON 对象中的 <code>layers</code> 数组里的对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>resources</td><td>obj</td><td>图层资源</td><td></td></tr><tr><td>scale</td><td>obj</td><td>缩放信息</td><td></td></tr><tr><td>rotate</td><td>obj</td><td>路径?</td><td>空</td></tr><tr><td>translate</td><td>obj</td><td>偏移信息</td><td></td></tr><tr><td>blur</td><td>obj</td><td>模糊信息?</td><td>空</td></tr><tr><td>opacity</td><td>obj</td><td>不透明度?</td><td>内容 <code>wrap</code> 为 <code>clamp</code></td></tr><tr><td>id</td><td>num</td><td>层 ID</td><td>似乎即图层索引</td></tr><tr><td>name</td><td>str</td><td>层名称</td><td></td></tr></tbody></table><p><code>layers</code> 数组里的对象中的 <code>resources</code> 对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>src</td><td>str</td><td>图层 URL</td><td></td></tr><tr><td>id</td><td>num</td><td>0</td><td></td></tr></tbody></table><p><code>layers</code> 数组里的对象中的 <code>scale</code> 对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>initial</td><td>num</td><td>初始缩放值?</td><td></td></tr><tr><td>offset</td><td>num</td><td>缩放偏移值?</td><td>部分层无此项</td></tr></tbody></table><p><code>layers</code> 数组里的对象中的 <code>translate</code> 对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>offset</td><td>array</td><td>偏移值?</td><td><code>[x, y]</code>? 部分层无此项</td></tr></tbody></table><p><strong>示例:</strong></p><p>获取 <code>Sat, 03 Aug 2024 01:41:35 GMT</code> 时刻的 B 站首页头图</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&quot;https://api.bilibili.com/x/web-show/page/header&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;resource_id=142&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例:</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/archive/e5b7fca0c001cbe0b77a2956e4c861d9f19c4575.png&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;litpic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/archive/c8fd97a40bf79f03e7b76cbc87236f612caef7b2.png&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_split_layer&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;split_layer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{\\&quot;version\\&quot;:\\&quot;1\\&quot;,\\&quot;layers\\&quot;:[{\\&quot;resources\\&quot;:[{\\&quot;src\\&quot;:\\&quot;https://i0.hdslb.com/bfs/vc/75ec2d45ce8c942a1f7379d4641171da4d90ab0d.png\\&quot;,\\&quot;id\\&quot;:0}],\\&quot;scale\\&quot;:{\\&quot;initial\\&quot;:0.54},\\&quot;rotate\\&quot;:{},\\&quot;translate\\&quot;:{},\\&quot;blur\\&quot;:{},\\&quot;opacity\\&quot;:{\\&quot;wrap\\&quot;:\\&quot;clamp\\&quot;},\\&quot;id\\&quot;:0,\\&quot;name\\&quot;:\\&quot;19-背景水\\&quot;},{\\&quot;resources\\&quot;:[{\\&quot;src\\&quot;:\\&quot;https://i0.hdslb.com/bfs/vc/286eb259a60a0eabfcde96d7ea92d239fe68b3fe.png\\&quot;,\\&quot;id\\&quot;:0}],\\&quot;scale\\&quot;:{\\&quot;initial\\&quot;:0.53},\\&quot;rotate\\&quot;:{},\\&quot;translate\\&quot;:{\\&quot;offset\\&quot;:[10,0]},\\&quot;blur\\&quot;:{},\\&quot;opacity\\&quot;:{\\&quot;wrap\\&quot;:\\&quot;clamp\\&quot;},\\&quot;id\\&quot;:1,\\&quot;name\\&quot;:\\&quot;18-再远景\\&quot;},{\\&quot;resources\\&quot;:[{\\&quot;src\\&quot;:\\&quot;https://i0.hdslb.com/bfs/vc/782d55aeca6cc75f51d2d630005f514a61a0ddfa.png\\&quot;,\\&quot;id\\&quot;:0}],\\&quot;scale\\&quot;:{\\&quot;initial\\&quot;:0.55},\\&quot;rotate\\&quot;:{},\\&quot;translate\\&quot;:{\\&quot;offset\\&quot;:[10,0]},\\&quot;blur\\&quot;:{},\\&quot;opacity\\&quot;:{\\&quot;wrap\\&quot;:\\&quot;clamp\\&quot;},\\&quot;id\\&quot;:3,\\&quot;name\\&quot;:\\&quot;16-远景房子1\\&quot;},{\\&quot;resources\\&quot;:[{\\&quot;src\\&quot;:\\&quot;https://i0.hdslb.com/bfs/vc/d6c941cf2d5fc6c717173f7e3f166dbc444aa15b.png\\&quot;,\\&quot;id\\&quot;:0}],\\&quot;scale\\&quot;:{\\&quot;initial\\&quot;:0.52},\\&quot;rotate\\&quot;:{},\\&quot;translate\\&quot;:{\\&quot;offset\\&quot;:[30,0]},\\&quot;blur\\&quot;:{},\\&quot;opacity\\&quot;:{\\&quot;wrap\\&quot;:\\&quot;clamp\\&quot;},\\&quot;id\\&quot;:4,\\&quot;name\\&quot;:\\&quot;15-两侧房子\\&quot;},{\\&quot;resources\\&quot;:[{\\&quot;src\\&quot;:\\&quot;https://i0.hdslb.com/bfs/vc/27e411d92729604aa594858beb5130ed60aad76d.png\\&quot;,\\&quot;id\\&quot;:0}],\\&quot;scale\\&quot;:{\\&quot;initial\\&quot;:0.55,\\&quot;offset\\&quot;:0.2},\\&quot;rotate\\&quot;:{},\\&quot;translate\\&quot;:{\\&quot;offset\\&quot;:[30,0]},\\&quot;blur\\&quot;:{},\\&quot;opacity\\&quot;:{\\&quot;wrap\\&quot;:\\&quot;clamp\\&quot;},\\&quot;id\\&quot;:2,\\&quot;name\\&quot;:\\&quot;17-远景鲸鱼机\\&quot;},{\\&quot;resources\\&quot;:[{\\&quot;src\\&quot;:\\&quot;https://i0.hdslb.com/bfs/vc/09d0855b6b6d6965e8f02404777986237848c6c9.png\\&quot;,\\&quot;id\\&quot;:0}],\\&quot;scale\\&quot;:{\\&quot;initial\\&quot;:0.52},\\&quot;rotate\\&quot;:{},\\&quot;translate\\&quot;:{\\&quot;offset\\&quot;:[300,10]},\\&quot;blur\\&quot;:{},\\&quot;opacity\\&quot;:{\\&quot;wrap\\&quot;:\\&quot;clamp\\&quot;},\\&quot;id\\&quot;:5,\\&quot;name\\&quot;:\\&quot;14-中景鲸鱼机\\&quot;},{\\&quot;resources\\&quot;:[{\\&quot;src\\&quot;:\\&quot;https://i0.hdslb.com/bfs/vc/40878bbef514e2d4bf5d660fe1145c869567bec2.png\\&quot;,\\&quot;id\\&quot;:0}],\\&quot;scale\\&quot;:{\\&quot;initial\\&quot;:0.52},\\&quot;rotate\\&quot;:{},\\&quot;translate\\&quot;:{\\&quot;offset\\&quot;:[20,0]},\\&quot;blur\\&quot;:{},\\&quot;opacity\\&quot;:{\\&quot;wrap\\&quot;:\\&quot;clamp\\&quot;},\\&quot;id\\&quot;:6,\\&quot;name\\&quot;:\\&quot;13-窗外垃圾\\&quot;},{\\&quot;resources\\&quot;:[{\\&quot;src\\&quot;:\\&quot;https://i0.hdslb.com/bfs/vc/42485baddbca05d2c4c7710a0b76b74d303e06d7.png\\&quot;,\\&quot;id\\&quot;:0}],\\&quot;scale\\&quot;:{\\&quot;initial\\&quot;:0.54},\\&quot;rotate\\&quot;:{},\\&quot;translate\\&quot;:{\\&quot;offset\\&quot;:[80,0]},\\&quot;blur\\&quot;:{},\\&quot;opacity\\&quot;:{\\&quot;wrap\\&quot;:\\&quot;clamp\\&quot;},\\&quot;id\\&quot;:7,\\&quot;name\\&quot;:\\&quot;12-机场\\&quot;},{\\&quot;resources\\&quot;:[{\\&quot;src\\&quot;:\\&quot;https://i0.hdslb.com/bfs/vc/8ea0e95a8e5fc85ae227810925dba1ace1e9fcba.png\\&quot;,\\&quot;id\\&quot;:0}],\\&quot;scale\\&quot;:{\\&quot;initial\\&quot;:0.52},\\&quot;rotate\\&quot;:{},\\&quot;translate\\&quot;:{\\&quot;offset\\&quot;:[120,0]},\\&quot;blur\\&quot;:{},\\&quot;opacity\\&quot;:{\\&quot;wrap\\&quot;:\\&quot;clamp\\&quot;},\\&quot;id\\&quot;:8,\\&quot;name\\&quot;:\\&quot;11-空姐\\&quot;},{\\&quot;resources\\&quot;:[{\\&quot;src\\&quot;:\\&quot;https://i0.hdslb.com/bfs/vc/c13ca9c6405c71bf864ed2bc421680cb437f45ef.png\\&quot;,\\&quot;id\\&quot;:0}],\\&quot;scale\\&quot;:{\\&quot;initial\\&quot;:0.52},\\&quot;rotate\\&quot;:{},\\&quot;translate\\&quot;:{\\&quot;offset\\&quot;:[80,40]},\\&quot;blur\\&quot;:{},\\&quot;opacity\\&quot;:{\\&quot;wrap\\&quot;:\\&quot;clamp\\&quot;},\\&quot;id\\&quot;:9,\\&quot;name\\&quot;:\\&quot;10-泡泡04\\&quot;},{\\&quot;resources\\&quot;:[{\\&quot;src\\&quot;:\\&quot;https://i0.hdslb.com/bfs/vc/a43c6833d262301373234ffbd6934559d2ce7fb2.png\\&quot;,\\&quot;id\\&quot;:0}],\\&quot;scale\\&quot;:{\\&quot;initial\\&quot;:0.52},\\&quot;rotate\\&quot;:{},\\&quot;translate\\&quot;:{\\&quot;offset\\&quot;:[100,50]},\\&quot;blur\\&quot;:{},\\&quot;opacity\\&quot;:{\\&quot;wrap\\&quot;:\\&quot;clamp\\&quot;},\\&quot;id\\&quot;:10,\\&quot;name\\&quot;:\\&quot;09-泡泡03\\&quot;},{\\&quot;resources\\&quot;:[{\\&quot;src\\&quot;:\\&quot;https://i0.hdslb.com/bfs/vc/ce8c5e45230a6d3805baf60f5916f1cd441aac8e.png\\&quot;,\\&quot;id\\&quot;:0}],\\&quot;scale\\&quot;:{\\&quot;initial\\&quot;:0.54},\\&quot;rotate\\&quot;:{},\\&quot;translate\\&quot;:{\\&quot;offset\\&quot;:[130,0]},\\&quot;blur\\&quot;:{},\\&quot;opacity\\&quot;:{\\&quot;wrap\\&quot;:\\&quot;clamp\\&quot;},\\&quot;id\\&quot;:11,\\&quot;name\\&quot;:\\&quot;08-22\\&quot;},{\\&quot;resources\\&quot;:[{\\&quot;src\\&quot;:\\&quot;https://i0.hdslb.com/bfs/vc/cbf19f3682dfb02e62557d07fefaf241a80296a1.png\\&quot;,\\&quot;id\\&quot;:0}],\\&quot;scale\\&quot;:{\\&quot;initial\\&quot;:0.52},\\&quot;rotate\\&quot;:{},\\&quot;translate\\&quot;:{\\&quot;offset\\&quot;:[200,0]},\\&quot;blur\\&quot;:{},\\&quot;opacity\\&quot;:{\\&quot;wrap\\&quot;:\\&quot;clamp\\&quot;},\\&quot;id\\&quot;:12,\\&quot;name\\&quot;:\\&quot;07-近路人\\&quot;},{\\&quot;resources\\&quot;:[{\\&quot;src\\&quot;:\\&quot;https://i0.hdslb.com/bfs/vc/4a4c1f6b2977478c73e41f39a2910c3b3c33167e.webm\\&quot;,\\&quot;id\\&quot;:0}],\\&quot;scale\\&quot;:{\\&quot;initial\\&quot;:0.5},\\&quot;rotate\\&quot;:{},\\&quot;translate\\&quot;:{\\&quot;initial\\&quot;:[1000,0],\\&quot;offset\\&quot;:[20,0]},\\&quot;blur\\&quot;:{},\\&quot;opacity\\&quot;:{\\&quot;wrap\\&quot;:\\&quot;clamp\\&quot;},\\&quot;id\\&quot;:21,\\&quot;name\\&quot;:\\&quot;右气泡\\&quot;},{\\&quot;resources\\&quot;:[{\\&quot;src\\&quot;:\\&quot;https://i0.hdslb.com/bfs/vc/7998ca9f0bc267375fb7b45f75626d96806f94d7.png\\&quot;,\\&quot;id\\&quot;:0}],\\&quot;scale\\&quot;:{\\&quot;initial\\&quot;:0.52},\\&quot;rotate\\&quot;:{},\\&quot;translate\\&quot;:{\\&quot;offset\\&quot;:[300,0]},\\&quot;blur\\&quot;:{},\\&quot;opacity\\&quot;:{\\&quot;wrap\\&quot;:\\&quot;clamp\\&quot;},\\&quot;id\\&quot;:13,\\&quot;name\\&quot;:\\&quot;06-两侧前景植物\\&quot;},{\\&quot;resources\\&quot;:[{\\&quot;src\\&quot;:\\&quot;https://i0.hdslb.com/bfs/vc/198efffbc58493300854c04ab0ea8d979a6f9223.png\\&quot;,\\&quot;id\\&quot;:0}],\\&quot;scale\\&quot;:{\\&quot;initial\\&quot;:0.52},\\&quot;rotate\\&quot;:{},\\&quot;translate\\&quot;:{\\&quot;offset\\&quot;:[280,0]},\\&quot;blur\\&quot;:{},\\&quot;opacity\\&quot;:{\\&quot;wrap\\&quot;:\\&quot;clamp\\&quot;},\\&quot;id\\&quot;:15,\\&quot;name\\&quot;:\\&quot;04-顶部摸鱼牌子\\&quot;},{\\&quot;resources\\&quot;:[{\\&quot;src\\&quot;:\\&quot;https://i0.hdslb.com/bfs/vc/142a486b8dd500a626a60b68ad993af8dabc8b55.png\\&quot;,\\&quot;id\\&quot;:0}],\\&quot;scale\\&quot;:{\\&quot;initial\\&quot;:0.52},\\&quot;rotate\\&quot;:{},\\&quot;translate\\&quot;:{\\&quot;offset\\&quot;:[300,130]},\\&quot;blur\\&quot;:{},\\&quot;opacity\\&quot;:{\\&quot;wrap\\&quot;:\\&quot;clamp\\&quot;},\\&quot;id\\&quot;:16,\\&quot;name\\&quot;:\\&quot;03-泡泡02\\&quot;},{\\&quot;resources\\&quot;:[{\\&quot;src\\&quot;:\\&quot;https://i0.hdslb.com/bfs/vc/bb6266e1525a51f7920fc8881e47cadeee271b0c.png\\&quot;,\\&quot;id\\&quot;:0}],\\&quot;scale\\&quot;:{\\&quot;initial\\&quot;:0.52},\\&quot;rotate\\&quot;:{},\\&quot;translate\\&quot;:{\\&quot;initial\\&quot;:[200,0],\\&quot;offset\\&quot;:[350,20]},\\&quot;blur\\&quot;:{},\\&quot;opacity\\&quot;:{\\&quot;wrap\\&quot;:\\&quot;clamp\\&quot;},\\&quot;id\\&quot;:17,\\&quot;name\\&quot;:\\&quot;02-泡泡01\\&quot;},{\\&quot;resources\\&quot;:[{\\&quot;src\\&quot;:\\&quot;https://i0.hdslb.com/bfs/vc/cd68251cde11936871237ca94360acb451bf7ed2.png\\&quot;,\\&quot;id\\&quot;:0}],\\&quot;scale\\&quot;:{\\&quot;initial\\&quot;:0.52},\\&quot;rotate\\&quot;:{},\\&quot;translate\\&quot;:{\\&quot;initial\\&quot;:[-200,0],\\&quot;offset\\&quot;:[500,0]},\\&quot;blur\\&quot;:{},\\&quot;opacity\\&quot;:{\\&quot;initial\\&quot;:0.5,\\&quot;wrap\\&quot;:\\&quot;clamp\\&quot;},\\&quot;id\\&quot;:18,\\&quot;name\\&quot;:\\&quot;01-光\\&quot;},{\\&quot;resources\\&quot;:[{\\&quot;src\\&quot;:\\&quot;https://i0.hdslb.com/bfs/vc/426073f920477b718b8aee5ec141aca3889500f7.webm\\&quot;,\\&quot;id\\&quot;:0}],\\&quot;scale\\&quot;:{\\&quot;initial\\&quot;:0.54},\\&quot;rotate\\&quot;:{},\\&quot;translate\\&quot;:{\\&quot;initial\\&quot;:[400,0],\\&quot;offset\\&quot;:[50,0]},\\&quot;blur\\&quot;:{},\\&quot;opacity\\&quot;:{\\&quot;wrap\\&quot;:\\&quot;clamp\\&quot;},\\&quot;id\\&quot;:19,\\&quot;name\\&quot;:\\&quot;中气泡\\&quot;},{\\&quot;resources\\&quot;:[{\\&quot;src\\&quot;:\\&quot;https://i0.hdslb.com/bfs/vc/0de9fb9822d2d00500abc8bdb143907eb1802ddb.webm\\&quot;,\\&quot;id\\&quot;:0}],\\&quot;scale\\&quot;:{},\\&quot;rotate\\&quot;:{},\\&quot;translate\\&quot;:{\\&quot;initial\\&quot;:[-700,0],\\&quot;offset\\&quot;:[30,0]},\\&quot;blur\\&quot;:{},\\&quot;opacity\\&quot;:{\\&quot;wrap\\&quot;:\\&quot;clamp\\&quot;},\\&quot;id\\&quot;:20,\\&quot;name\\&quot;:\\&quot;左气泡\\&quot;}]}&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;request_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1722649278&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="图层组合处理" tabindex="-1"><a class="header-anchor" href="#图层组合处理" aria-hidden="true">#</a> 图层组合处理</h2>`,27),h=t("li",null,[t("p",null,[t("strong",null,"注意:"),o(" 部分图像只包含部分颜色通道, 在创建文件时务必注意!")])],-1),f=t("li",null,[t("p",null,[o("图层既包含静态 PNG 图片,也包含动态 WebM 视频, 此处忽略视频, 按照 "),t("code",null,"name"),o(" 字段前的数字作为顺序, 依次导入 GIMP "),t("s",null,"(你也可以使用其她图像处理软件)"),o(", 未进行偏移调整")])],-1),m=t("li",null,[t("p",null,"接口提供的静态图片 http://i0.hdslb.com/bfs/archive/e5b7fca0c001cbe0b77a2956e4c861d9f19c4575.png")],-1),v={href:"http://i0.hdslb.com/bfs/new_dyn/510715042e8847b7fd98d8253ca1f61a616368979.png",target:"_blank",rel:"noopener noreferrer"};function y(k,g){const u=e("ExternalLinkIcon");return s(),d("div",null,[c,l,t("ul",null,[t("li",null,[t("p",null,[o("❎ "),t("s",null,[o("关注 UP 主 "),t("a",i,[o("壁纸喵"),q(u)]),o(" 获取静态图片")])])]),p]),b,t("ul",null,[h,f,m,t("li",null,[t("p",null,[o("手动导入合成的图片 https://archive.biliimg.com/bfs/archive/dc96f5d4e87a1985fc6085305d737f21f006f6a8.png ("),t("a",v,[o("备链"),q(u)]),o(")")])])])])}const w=a(r,[["render",y],["__file","header.html.vue"]]);export{w as default};
