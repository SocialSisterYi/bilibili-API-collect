import{_ as n,r as i,o as r,c as o,a as t,b as d,d as s,e}from"./app-1b8d61a0.js";const l={},c=e(`<h1 id="视频实时信息" tabindex="-1"><a class="header-anchor" href="#视频实时信息" aria-hidden="true">#</a> 视频实时信息</h1><h2 id="认证包-上行" tabindex="-1"><a class="header-anchor" href="#认证包-上行" aria-hidden="true">#</a> 认证包（上行）</h2><p><strong>正文内容json：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>room_id</td><td>str</td><td>目标视频</td><td><code>video://{稿件avid}/{视频cid}</code></td></tr><tr><td>platform</td><td>str</td><td>平台标识</td><td>默认为<code>web</code></td></tr><tr><td>accepts</td><td>array</td><td>操作标识</td><td></td></tr></tbody></table><p><code>array</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>num</td><td>1000</td><td>作用尚不明确</td></tr><tr><td>1</td><td>num</td><td>1015</td><td>作用尚不明确</td></tr></tbody></table><p><strong>示例：</strong></p><p>发送视频<code>av706</code>（1P的cid为<code>3724723</code>）的认证包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>00000000  00 00 00 55 00 12 00 01  00 00 00 07 00 00 00 01  |...U............|
00000010  00 00 7b 22 72 6f 6f 6d  5f 69 64 22 3a 22 76 69  |..{&quot;room_id&quot;:&quot;vi|
00000020  64 65 6f 3a 2f 2f 37 30  36 2f 33 37 32 34 37 32  |deo://706/372472|
00000030  33 22 2c 22 70 6c 61 74  66 72 6f 6d 22 3a 22 77  |3&quot;,&quot;platfrom&quot;:&quot;w|
00000040  65 62 22 2c 22 61 63 63  65 70 74 73 22 3a 5b 31  |eb&quot;,&quot;accepts&quot;:[1|
00000050  30 30 30 2c 31 30 31 35  5d 7d                    |000,1015]}|
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="认证包回复-下行" tabindex="-1"><a class="header-anchor" href="#认证包回复-下行" aria-hidden="true">#</a> 认证包回复（下行）</h2><p><strong>正文内容json：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为OK</td></tr><tr><td>version</td><td>num</td><td>版本号</td><td></td></tr></tbody></table><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>00000000  00 00 00 37 00 12 00 01  00 00 00 08 00 00 00 01  |...7............|
00000010  00 00 7b 22 63 6f 64 65  22 3a 30 2c 22 6d 65 73  |..{&quot;code&quot;:0,&quot;mes|
00000020  73 61 67 65 22 3a 22 4f  4b 22 2c 22 76 65 72 73  |sage&quot;:&quot;OK&quot;,&quot;vers|
00000030  69 6f 6e 22 3a 31 7d                              |ion&quot;:1}|
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="心跳包-上行" tabindex="-1"><a class="header-anchor" href="#心跳包-上行" aria-hidden="true">#</a> 心跳包（上行）</h2><p>正文可为任意内容或为空</p><p><strong>示例：</strong></p><p>正文为空的示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>00000000  00 00 00 12 00 12 00 01  00 00 00 02 00 00 00 01  |................|
00000010  00 00                                             |..|
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>正文为<code>[object Object]</code>的示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>00000000  00 00 00 21 00 12 00 01  00 00 00 02 00 00 00 01  |...!............|
00000010  00 00 5b 6f 62 6a 65 63  74 20 4f 62 6a 65 63 74  |..[object Object|
00000020  5d                                                |]|
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="心跳包回复-实时观看数-下行" tabindex="-1"><a class="header-anchor" href="#心跳包回复-实时观看数-下行" aria-hidden="true">#</a> 心跳包回复（实时观看数）（下行）</h2><p><strong>正文内容json：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为OK</td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>room</td><td>obj</td><td>视频实时观看信息</td><td></td></tr></tbody></table><p><code>data</code>中的<code>room</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>online</td><td>num</td><td>实时观看人数</td><td></td></tr><tr><td>room_id</td><td>str</td><td>目标视频</td><td><code>video://{稿件avid}/{视频cid}</code></td></tr></tbody></table><p><strong>示例：</strong></p><p>当前视频<code>av706</code>实时观看人数为13</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>00000000  00 00 00 68 00 12 00 01  00 00 00 03 00 00 00 01  |...h............|
00000010  00 00 7b 22 63 6f 64 65  22 3a 30 2c 22 6d 65 73  |..{&quot;code&quot;:0,&quot;mes|
00000020  73 61 67 65 22 3a 22 30  22 2c 22 64 61 74 61 22  |sage&quot;:&quot;0&quot;,&quot;data&quot;|
00000030  3a 7b 22 72 6f 6f 6d 22  3a 7b 22 6f 6e 6c 69 6e  |:{&quot;room&quot;:{&quot;onlin|
00000040  65 22 3a 31 33 2c 22 72  6f 6f 6d 5f 69 64 22 3a  |e&quot;:13,&quot;room_id&quot;:|
00000050  22 76 69 64 65 6f 3a 2f  2f 37 30 36 2f 33 37 32  |&quot;video://706/372|
00000060  34 37 32 33 22 7d 7d 7d                           |4723&quot;}}}|
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="普通包-实时弹幕-下行" tabindex="-1"><a class="header-anchor" href="#普通包-实时弹幕-下行" aria-hidden="true">#</a> 普通包（实时弹幕）（下行）</h2><p><strong>正文内容json：</strong></p><p>根数组：</p>`,37),u=t("thead",null,[t("tr",null,[t("th",null,"项"),t("th",null,"类型"),t("th",null,"内容"),t("th",null,"备注")])],-1),h=t("td",null,"0",-1),b=t("td",null,"str",-1),v=t("td",null,"弹幕属性信息",-1),m={href:"https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/danmaku/danmaku_xml.md",target:"_blank",rel:"noopener noreferrer"},p=t("tr",null,[t("td",null,"1"),t("td",null,"str"),t("td",null,"弹幕内容"),t("td")],-1),g=e(`<p><strong>示例：</strong></p><p>弹幕属性为<code>0.25,1,25,16777215,1588433046,1588431486568150,0,33ad5d91,32134068443807747</code></p><p>弹幕内容为<code>此生无悔入东方，来世愿生幻想乡</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>00000000  00 00 00 91 00 12 00 01  00 00 03 e8 00 00 00 00  |................|
00000010  00 00 5b 22 30 2e 32 35  2c 31 2c 32 35 2c 31 36  |..[&quot;0.25,1,25,16|
00000020  37 37 37 32 31 35 2c 31  35 38 38 34 33 33 30 34  |777215,158843304|
00000030  36 2c 31 35 38 38 34 33  31 34 38 36 35 36 38 31  |6,15884314865681|
00000040  35 30 2c 30 2c 33 33 61  64 35 64 39 31 2c 33 32  |50,0,33ad5d91,32|
00000050  31 33 34 30 36 38 34 34  33 38 30 37 37 34 37 22  |134068443807747&quot;|
00000060  2c 22 e6 ad a4 e7 94 9f  e6 97 a0 e6 82 94 e5 85  |,&quot;此   生  无  悔|
00000070  a5 e4 b8 9c e6 96 b9 ef  bc 8c e6 9d a5 e4 b8 96  |入 东 方 ，来 世 |
00000080  e6 84 bf e7 94 9f e5 b9  bb e6 83 b3 e4 b9 a1 22  |愿  生 幻 想  乡&quot;|
00000090  5d                                                |]|
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function f(q,_){const a=i("ExternalLinkIcon");return r(),o("div",null,[c,t("table",null,[u,t("tbody",null,[t("tr",null,[h,b,v,t("td",null,[d("详见"),t("a",m,[d("「弹幕」中的属性 p"),s(a)])])]),p])]),g])}const y=n(l,[["render",f],["__file","video_room.html.vue"]]);export{y as default};
