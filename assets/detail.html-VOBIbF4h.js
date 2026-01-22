import{_ as o,c as e,a as l,b as s,d as a,e as t,w as D,r as c,o as i}from"./app-Dgsdh8A6.js";const r={};function u(y,n){const p=c("RouteLink");return i(),e("div",null,[n[10]||(n[10]=l('<h1 id="图文详细" tabindex="-1"><a class="header-anchor" href="#图文详细"><span>图文详细</span></a></h1><h2 id="获取图文详细信息" tabindex="-1"><a class="header-anchor" href="#获取图文详细信息"><span>获取图文详细信息</span></a></h2><blockquote><p>https://api.bilibili.com/x/polymer/web-dynamic/v1/opus/detail</p></blockquote><p><em>请求方法: GET</em></p><p>鉴权方式: <code>Cookie</code> 中 <code>buvid3</code> 存在且不为空</p><p><strong>URL 参数:</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>动态 id</td><td>必要</td><td>数字</td></tr><tr><td>timezone_offset</td><td>number</td><td>时区偏移</td><td>非必要</td><td>如 <code>-480</code></td></tr><tr><td>features</td><td>string</td><td>功能</td><td>非必要（部分专栏要求htmlNewStyle）</td><td><code>onlyfansVote,onlyfansAssetsV2,decorationCard,htmlNewStyle,ugcDelete,editable,opusPrivateVisible,tribeeEdit,avatarAutoTheme,avatarTypeOpus</code></td></tr></tbody></table><p><strong>JSON 回复（旧版专栏未携带htmlNewStyle feature时）</strong></p><p>根对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>number</td><td>返回值</td><td>0: 成功<br>-352: 风控校验失败</td></tr><tr><td>data</td><td>object</td><td>数据本体</td><td></td></tr><tr><td>message</td><td>string</td><td>错误信息</td><td>成功时为 <code>0</code></td></tr><tr><td>ttl</td><td>number</td><td><code>1</code></td><td></td></tr></tbody></table><p><code>data</code> 对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>fallback</td><td>object</td><td>回退的内容信息</td><td></td></tr></tbody></table><p><code>fallback</code> 对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>number</td><td>回退的内容ID</td><td></td></tr><tr><td>type</td><td>number</td><td>回退的内容类型</td><td>已知2为专栏</td></tr></tbody></table><p><strong>JSON 回复（正常返回情况）:</strong></p><p>根对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>number</td><td>返回值</td><td>0: 成功<br>-352: 风控校验失败</td></tr><tr><td>data</td><td>object</td><td>数据本体</td><td></td></tr><tr><td>message</td><td>string</td><td>错误信息</td><td>成功时为 <code>0</code></td></tr><tr><td>ttl</td><td>number</td><td><code>1</code></td><td></td></tr></tbody></table><p><code>data</code> 对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>item</td><td>object</td><td>项</td><td>套了个娃</td></tr></tbody></table><p><code>data.item</code> 对象:</p>',20)),s("table",null,[n[9]||(n[9]=s("thead",null,[s("tr",null,[s("th",null,"字段"),s("th",null,"类型"),s("th",null,"内容"),s("th",null,"备注")])],-1)),s("tbody",null,[n[5]||(n[5]=s("tr",null,[s("td",null,"basic"),s("td",null,"object"),s("td",null,"基本信息"),s("td")],-1)),n[6]||(n[6]=s("tr",null,[s("td",null,"id_str"),s("td",null,"string"),s("td",null,"动态 id"),s("td")],-1)),s("tr",null,[n[2]||(n[2]=s("td",null,"modules",-1)),n[3]||(n[3]=s("td",null,"object[]",-1)),n[4]||(n[4]=s("td",null,"模块信息",-1)),s("td",null,[n[1]||(n[1]=a("参见 ")),t(p,{to:"/docs/opus/features.html"},{default:D(()=>n[0]||(n[0]=[a("功能模块")])),_:1,__:[0]})])]),n[7]||(n[7]=s("tr",null,[s("td",null,"type"),s("td",null,"number"),s("td",null,"类型"),s("td")],-1)),n[8]||(n[8]=s("tr",null,[s("td",null,"fallback"),s("td",null,"number"),s("td",null,"回滚信息"),s("td",null,[a("请检查请求参数 "),s("code",null,"features")])],-1))])]),n[11]||(n[11]=l(`<p><code>data.item.basic</code> 对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>comment_id_str</td><td>string</td><td>评论对象 id 字符串</td><td></td></tr><tr><td>comment_type</td><td>number</td><td>评论区类型</td><td></td></tr><tr><td>like_icon</td><td>object</td><td>点赞图标?</td><td></td></tr><tr><td>rid_str</td><td>string</td><td>关联 id 字符串</td><td></td></tr><tr><td>title</td><td>string</td><td>图文标题</td><td></td></tr><tr><td>uid</td><td>number</td><td>作者 mid (UID)</td><td></td></tr></tbody></table><p><code>data.item.basic.like_icon</code> 对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>action_url</td><td>string</td><td></td><td></td></tr><tr><td>end_url</td><td>string</td><td></td><td></td></tr><tr><td>id</td><td>number</td><td></td><td></td></tr><tr><td>start_url</td><td>string</td><td></td><td></td></tr></tbody></table><p><strong>示例:</strong></p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code class="language-shell"><span class="line"><span style="color:#DCDCAA;">curl</span><span style="color:#569CD6;"> -G</span><span style="color:#CE9178;"> &#39;https://api.bilibili.com/x/polymer/web-dynamic/v1/opus/detail&#39;</span><span style="color:#D7BA7D;"> \\</span></span>
<span class="line"><span style="color:#D4D4D4;">--url-query </span><span style="color:#CE9178;">&#39;id=933099353259638816&#39;</span><span style="color:#D7BA7D;"> \\</span></span>
<span class="line"><span style="color:#D4D4D4;">--url-query </span><span style="color:#CE9178;">&#39;features=onlyfansVote,onlyfansAssetsV2,decorationCard,htmlNewStyle,ugcDelete,editable,opusPrivateVisible,tribeeEdit,avatarAutoTheme,avatarTypeOpus&#39;</span><span style="color:#D7BA7D;"> \\</span></span>
<span class="line"><span style="color:#D4D4D4;">-b </span><span style="color:#CE9178;">&#39;buvid3=awa&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例:</summary><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code class="language-json"><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;code&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;data&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;item&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">      &quot;basic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;comment_id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;34646640&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;comment_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">12</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;like_icon&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;action_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;end_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;start_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;rid_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;34646640&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;title&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;【服务搭建】零开销在线运行代码！glot.io服务私有化部署 - 哔哩哔哩&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;uid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">293793435</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#9CDCFE;">      &quot;id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;933099353259638816&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">      &quot;modules&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_title&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;【服务搭建】零开销在线运行代码！glot.io服务私有化部署&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;MODULE_TYPE_TITLE&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_author&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;avatar&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;container_size&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1.375</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1.375</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;fallback_layers&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;is_critical_group&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;layers&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                  {</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;general_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;pos_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;axis_x&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.6875</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;axis_y&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.6875</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;coordinate_pos&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;render_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;opacity&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;size_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.787</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.787</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;layer_config&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;is_critical&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;tags&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;AVATAR_LAYER&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;GENERAL_CFG&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;config_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;general_config&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;web_css_style&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                              &quot;borderRadius&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;50%&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                            }</span></span>
<span class="line"><span style="color:#D4D4D4;">                          }</span></span>
<span class="line"><span style="color:#D4D4D4;">                        }</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;resource&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;res_image&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;image_src&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;placeholder&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">6</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;remote&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;bfs_style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;widget-layer-avatar&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                          },</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;src_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                        }</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;res_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                  },</span></span>
<span class="line"><span style="color:#D4D4D4;">                  {</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;general_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;pos_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;axis_x&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.6875</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;axis_y&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.6875</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;coordinate_pos&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;render_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;opacity&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;size_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1.375</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1.375</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;layer_config&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;tags&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;PENDENT_LAYER&quot;</span><span style="color:#D4D4D4;">: {}</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;resource&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;res_image&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;image_src&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;remote&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;bfs_style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;widget-layer-avatar&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/4f8f3f1f2d47f0dad84f66aa57acd4409ea46361.png&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                          },</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;src_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                        }</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;res_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                  },</span></span>
<span class="line"><span style="color:#D4D4D4;">                  {</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;general_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;pos_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;axis_x&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.7560000000000001</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;axis_y&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.7726666666666667</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;coordinate_pos&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;render_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;opacity&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;size_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.41666666666666663</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.41666666666666663</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;layer_config&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;tags&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;GENERAL_CFG&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;config_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;general_config&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;web_css_style&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                              &quot;background-color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;var(--bg1)&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                              &quot;border&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;2px solid var(--bg1)&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                              &quot;borderRadius&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;50%&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                              &quot;boxSizing&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;border-box&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                            }</span></span>
<span class="line"><span style="color:#D4D4D4;">                          }</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;ICON_LAYER&quot;</span><span style="color:#D4D4D4;">: {}</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;resource&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;res_image&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;image_src&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;local&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;src_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                        }</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;res_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                  }</span></span>
<span class="line"><span style="color:#D4D4D4;">                ]</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;layers&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;is_critical_group&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;layers&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;general_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;pos_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;axis_x&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.6875</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;axis_y&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.6875</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;coordinate_pos&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;render_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;opacity&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;size_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.787</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.787</span></span>
<span class="line"><span style="color:#D4D4D4;">                        }</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;layer_config&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;is_critical&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;tags&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;AVATAR_LAYER&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;GENERAL_CFG&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;config_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;general_config&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                              &quot;web_css_style&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                                &quot;borderRadius&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;50%&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                              }</span></span>
<span class="line"><span style="color:#D4D4D4;">                            }</span></span>
<span class="line"><span style="color:#D4D4D4;">                          }</span></span>
<span class="line"><span style="color:#D4D4D4;">                        }</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;resource&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;res_image&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;image_src&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;placeholder&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">6</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;remote&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                              &quot;bfs_style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;widget-layer-avatar&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                              &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                            },</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;src_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                          }</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;res_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#D4D4D4;">                {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;layers&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;general_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;pos_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;axis_x&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.6875</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;axis_y&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.6875</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;coordinate_pos&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;render_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;opacity&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;size_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1.375</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1.375</span></span>
<span class="line"><span style="color:#D4D4D4;">                        }</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;layer_config&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;tags&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;PENDENT_LAYER&quot;</span><span style="color:#D4D4D4;">: {}</span></span>
<span class="line"><span style="color:#D4D4D4;">                        }</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;resource&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;res_animation&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;webp_src&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;remote&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                              &quot;bfs_style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;widget-layer-avatar&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                              &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/fe0b83b53e2342b16646f6e7a9370d8a867decdb.webp&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                            },</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;src_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                          }</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;res_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">4</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#D4D4D4;">                {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;layers&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;general_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;pos_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;axis_x&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.7560000000000001</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;axis_y&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.7726666666666667</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;coordinate_pos&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;render_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;opacity&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;size_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.41666666666666663</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.41666666666666663</span></span>
<span class="line"><span style="color:#D4D4D4;">                        }</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;layer_config&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;tags&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;GENERAL_CFG&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;config_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;general_config&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                              &quot;web_css_style&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                                &quot;background-color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;var(--bg1)&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                                &quot;border&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;2px solid var(--bg1)&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                                &quot;borderRadius&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;50%&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                                &quot;boxSizing&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;border-box&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                              }</span></span>
<span class="line"><span style="color:#D4D4D4;">                            }</span></span>
<span class="line"><span style="color:#D4D4D4;">                          },</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;ICON_LAYER&quot;</span><span style="color:#D4D4D4;">: {}</span></span>
<span class="line"><span style="color:#D4D4D4;">                        }</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;resource&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;res_image&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;image_src&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;local&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;src_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                          }</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;res_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              ],</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;293793435&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;decorate_card&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;big_card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/c0cf2235089ed314d92f30efa855c9b5611fa2cd.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_type_name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;免费&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/c0cf2235089ed314d92f30efa855c9b5611fa2cd.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;fan&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#07b6d5&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;color_format&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;colors&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;#07b6d5FF&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;#07b6d5FF&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;end_point&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0,100&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;gradients&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#B5CEA8;">                    0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#B5CEA8;">                    100</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;start_point&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0,0&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;is_fan&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;初音未来周年纪念&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;num_desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;005638&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;number&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">5638</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2513</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/c0cf2235089ed314d92f30efa855c9b5611fa2cd.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;item_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2513</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=2513&amp;isdiy=0&amp;part=card&amp;from=post&amp;f_source=garb&amp;vmid=293793435&amp;native.theme=1&amp;navhide=1&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;初音未来粉丝专属&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;face&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;face_nft&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;following&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//space.bilibili.com/293793435&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">293793435</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;more&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;three_point_items&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;举报&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;THREE_POINT_REPORT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              ]</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;社会易姐QwQ&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;official&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;role&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;title&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">-1</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pendant&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;expire&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/4f8f3f1f2d47f0dad84f66aa57acd4409ea46361.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/fe0b83b53e2342b16646f6e7a9370d8a867decdb.webp&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance_frame&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/127c507ec8448be30cf5f79500ecc6ef2fd32f2c.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;n_pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2511</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;初音未来13周年&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2511</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_location_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_time&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;编辑于 2024年05月19日 12:18&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_ts&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1716092523</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;views_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;vip&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar_icon&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;icon_resource&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;icon_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar_subscript&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar_subscript_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;due_date&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1770825600000</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;label&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bg_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#FB7299&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bg_style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;border_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hans&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hans_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hant&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hant_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label_theme&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;annual_vip&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;path&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;http://i0.hdslb.com/bfs/vip/label_annual.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;年度大会员&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#FFFFFF&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;use_img_label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;nickname_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#FB7299&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;role&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;theme_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;tv_due_date&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1640793600</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;tv_vip_pay_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;tv_vip_status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;vip_pay_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;MODULE_TYPE_AUTHOR&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_content&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;paragraphs&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;感谢 &quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#ff968d&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;来笙云 Laysense.cn&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot; 提供算力&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;作为一个全栈工程师，开发、维护和测试一些软件系统时，必然会涉及到多种编程语言，有时还需要测试一些编程语言的安全特性，常常需要敏捷地了解它们并立即上手。在朋友的推荐和社区分享下，我了解到一个名叫 glot.io 的开源项目。&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;它支持40多种编程语言，无论是热门的 Python、Go、Rust、Kotlin，还是冷门的 COBOL、Erlang、Haskell 只需在网页上选择对应的语言，即可开始编写。为使用者提供了一个 Sandbox（沙箱）和 Playground（游乐场）环境，既不需要配置它们的 Runtime（运行环境）和 IDE（集成开发环境），也不需要担心误操作对系统产生破坏性，还不会占用任何用户端的系统资源，实现真正的零开销运行代码。&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;pic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;pics&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1120</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;live_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/article/06582181a80a3f367ae0486aec34759f293793435.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1776</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;在代码编写界面，可以创建多个源码文件，完成后点击Run就能执行它并得到输出，类似我们平时编程那样，将输出打在终端上。整个过程不会生成任何可执行文件，所以它的应用场景不是在线编译，而是在线运行代码片段。&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;pic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;pics&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;live_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/new_dyn/bb4e8fc35a33ba0b771478f4bc5aaca7293793435.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;glot.io 这个网站提供了公开的代码片段执行和分享功能，任何人在注册后都可以分享自己的代码片段，并使用它的 API。但有时为了安全性和访问速度考量，需要自行搭建这个开源平台，这篇文章将介绍 Glot 的私有化部署。&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">24</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;bold&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;Glot是什么&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;根据项目 README 上的一句介绍：&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;an open source pastebin with runnable snippets and API.&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;这是一个开源的共享剪切板和代码片段执行器，并提供 API。它使用 MIT 协议开源，代码托管于 github 之上。&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://github.com/glotcode/glot&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;Glot 并不是一个独立的工程，它分为多个组件，这样设计底层架构有利于业务解耦，降低后期维护和升级开发的难度，它们之间的逻辑关系如下：&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;pic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;pics&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;live_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/new_dyn/808dd5fa58016f392b15a36a0df27a29293793435.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;由下面这些组件构成，也全部使用 MIT 协议开源，均托管于 Github：&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;list&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;items&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;level&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                        {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#ff968d&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;glot-www&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                          }</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#D4D4D4;">                        {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;：提供 B/S 前端应用&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                          }</span></span>
<span class="line"><span style="color:#D4D4D4;">                        }</span></span>
<span class="line"><span style="color:#D4D4D4;">                      ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;order&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;level&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                        {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#ff968d&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;docker-run&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                          }</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#D4D4D4;">                        {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;：提供执行 glot-images 镜像能力的微服务&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                          }</span></span>
<span class="line"><span style="color:#D4D4D4;">                        }</span></span>
<span class="line"><span style="color:#D4D4D4;">                      ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;order&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;level&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                        {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#ff968d&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;glot-images&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                          }</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#D4D4D4;">                        {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;：按需构建的执行器镜像&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                          }</span></span>
<span class="line"><span style="color:#D4D4D4;">                        }</span></span>
<span class="line"><span style="color:#D4D4D4;">                      ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;order&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;level&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                        {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#ff968d&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;code-runner&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                          }</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#D4D4D4;">                        {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;：容器内的执行调度器&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                          }</span></span>
<span class="line"><span style="color:#D4D4D4;">                        }</span></span>
<span class="line"><span style="color:#D4D4D4;">                      ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;order&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">4</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">5</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;其中 glot-www 是一个 B/S 架构应用的服务器，用来提供一个面向用户的 WebUI（网站），它包含前后端的组件，后端使用 Haskell 语言编写。实现代码片段保存和共享、用户登录、以及共享剪切板所的功能，由 pgSQL 提供存储支持。与此同时，它与实际的代码执行业务互相解耦，使用 RestAPI 进行 RPC 调用，可做到前端服务器和后端代码执行服务器逻辑上隔离。&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;Glot 的代码执行沙箱基于 Docker，在容器中编译和运行，不但与宿主机隔离，且容器之间也相互隔离，还能对运行资源进行限制，防止宿主机被不信任的代码破坏。当然，各编程语言的执行容器构成不尽相同，这样才能在节约存储空间的同时最大保持运行效率，比如 C 和 C++ 共用了glot/clang这个镜像，C&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;rich&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//search.bilibili.com/all?keyword=%20%E5%92%8C%20F&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;# 和 F#&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;# 和 F#&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_TOPIC&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_RICH&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot; 的镜像都有 mono 这个依赖……这些 Docker 镜像由 glot-images 项目进行生成，它并非使用传统的 Dockerfile，而是使用了 nix 进行构建，支持多种主流编程语言。&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;pic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;pics&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;live_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/new_dyn/8627bd181a4c0ef3f5985f2d80ed49a5293793435.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;宿主机与沙箱的通讯，实际上就构建并将代码传入容器。这个传递方式不使用文件，而使用 stdi（基本输入）的方式传递 json，例如这样的形式：&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;code&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;echo &#39;{</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">  &amp;quot;language&amp;quot;: &amp;quot;python&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">  &amp;quot;files&amp;quot;: [</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    {</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">      &amp;quot;name&amp;quot;: &amp;quot;main.py&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">      &amp;quot;content&amp;quot;: &amp;quot;print(42)&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    }</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">  ]</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">}&#39; | docker run --rm -i --read-only --tmpfs /tmp:rw,noexec,nosuid,size=65536k --tmpfs /home/glot:rw,exec,nosuid,uid=1000,gid=1000,size=131072k -u glot -w /home/glot glot/javascript:latest&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;lang&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;language-bash&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;执行完成之后以 stdo（基本输出）的方式输出 json，stdout、stderr 流、以及错误信息在序列化后拆分成各个字段：&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;code&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;{</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">  &amp;quot;stdout&amp;quot;: &amp;quot;42</span><span style="color:#D7BA7D;">\\\\</span><span style="color:#CE9178;">n&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">  &amp;quot;stderr&amp;quot;: &amp;quot;&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">  &amp;quot;error&amp;quot;: &amp;quot;&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">}&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;lang&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;language-json&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;一般编程语言分为编译型、解释型和虚拟机型，其中解释型直接执行文本文件中的内容，编译型则需将其编译为可执行文件再执行，而虚拟机型在编译完之后，还需用 vm 执行字节码。glot-images 将各类编程语言生成的工作流统一归做 json 格式的文本流，这样标准化更利于开发和扩展，这种能力归功于 code-runner 这个组件。&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;code-runner 作为 glot 的一个特殊组件，并不运行在宿主机中，它是一个 cli 工具，运行在执行容器中，使用 Rust 语言开发。在 glot-images 的每个镜像中，均以相同方式工作在底层。它支持多种编程语言从编译到运行的生命周期管理，同时接管运行时的 stdio（基本输入输出）&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;bold&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;，&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;例如 C 语言，首先会将输入的文本反序列化，写入到文件，接着调用 clang 编译这个文件，最后再运行编译器生成的可执行文件，执行过程中也会将预定义的 stdi 发送给程序，程序的 stdo/stderr 流被它记录下来随后序列化为 json 文本返回。实际上在使用docker run这类命令执行 glot-images 镜像时，就是调用了之中的 code-runner，而不是调用了clang这种编译器。&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;使用 stdi 传递 json 给它，就会调用相应的编译执行流程：&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;code&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;echo &#39;{</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">  &amp;quot;language&amp;quot;: &amp;quot;python&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">  &amp;quot;files&amp;quot;: [</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    {</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">      &amp;quot;name&amp;quot;: &amp;quot;main.py&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">      &amp;quot;content&amp;quot;: &amp;quot;print(42)&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    }</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">  ]</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">}&#39; | code-runner&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;lang&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;language-bash&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;与 glot-images 的镜像相同，执行后也会使用 stdo 以 json 格式返回：&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;code&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;{</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">  &amp;quot;stdout&amp;quot;: &amp;quot;42</span><span style="color:#D7BA7D;">\\\\</span><span style="color:#CE9178;">n&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">  &amp;quot;stderr&amp;quot;: &amp;quot;&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">  &amp;quot;error&amp;quot;: &amp;quot;&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">}&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;lang&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;language-json&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;要将这些跑在 Docker 上的执行器服务化、RPC（远程过程调用）化，必须有一个 daemon 在底层进行调度，一边开放 HTTP 服务，另一边通过 unix socket 操纵 DockerEngine，执行容器操作。提供这个能力的就是 docker-run 组件，它也使用 Rust 语言开发。&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;例如这样访问 docker-run，和上文中的例子相同：&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;code&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;curl &#39;http://localhost:8088/run&#39; </span><span style="color:#D7BA7D;">\\\\\\n</span><span style="color:#CE9178;">  -H &#39;X-Access-Token: some-secret-token&#39; </span><span style="color:#D7BA7D;">\\\\\\n</span><span style="color:#CE9178;">  -H &#39;Content-type: application/json&#39; </span><span style="color:#D7BA7D;">\\\\\\n</span><span style="color:#CE9178;">  -d &#39;{</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">  &amp;quot;image&amp;quot;: &amp;quot;glot/python:latest&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">  &amp;quot;payload&amp;quot;: {</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    &amp;quot;language&amp;quot;: &amp;quot;python&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    &amp;quot;files&amp;quot;: [</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">      {</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">        &amp;quot;name&amp;quot;: &amp;quot;main.py&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">        &amp;quot;content&amp;quot;: &amp;quot;print(42)&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">      }</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    ]</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">  }</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">}&#39;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;lang&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;language-bash&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;有了这些组件，就可以自行私有化搭建一个 glot 服务，因为各组件的标准化和解耦，可以随意进行裁剪和二次开发。&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;接下来将介绍 docker-run 和 glot-images 这两个基本组件的搭建（不搭建前端 WebUI 和共享服务）。&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">24</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;bold&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;Glot服务搭建&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;首先应该准备一台性能不错的服务器，要求 CPU 核心数和 RAM 不能太低。以下步骤使用 Debian 12 系统进行操作，整个过程需要有稳定的网络环境，并且已更新包管理器的索引。&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">24</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;bold&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;安装Docker和运行环境&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;首先需要安装前置依赖，其中 git 和 gcc 安装 Rust 时需要，runsc 是 gVisor 运行环境&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;code&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;sudo apt-get install ca-certificates curl git gcc runsc&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;lang&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;language-bash&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;安装 Docker，这里参考了官方文档的安装方式，先进行软件源的添加，再安装各组件&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://docs.docker.com/engine/install/debian/&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;code&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;sudo install -m 0755 -d /etc/apt/keyrings</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">sudo chmod a+r /etc/apt/keyrings/docker.asc</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">echo </span><span style="color:#D7BA7D;">\\\\\\n</span><span style="color:#CE9178;">  &amp;quot;deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian </span><span style="color:#D7BA7D;">\\\\\\n</span><span style="color:#CE9178;">  $(. /etc/os-release &amp;amp;&amp;amp; echo &amp;quot;$VERSION_CODENAME&amp;quot;) stable&amp;quot; | </span><span style="color:#D7BA7D;">\\\\\\n</span><span style="color:#CE9178;">  sudo tee /etc/apt/sources.list.d/docker.list &amp;gt; /dev/null</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">sudo apt update</span><span style="color:#D7BA7D;">\\n\\n</span><span style="color:#CE9178;">sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;lang&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;language-bash&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;gVisor 作为谷歌开源的一款轻量容器运行时沙箱，可作为 Docker 的运行时中间件，隔离容器内的 syscall，提升容器安全性，具体可以参考官网 https://gvisor.dev&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;对于 Docker，需要配置 gVisor 为 DockerEngine 插件，创建配置文件后写入以下内容：&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;code&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vi /etc/docker/daemon.json&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;lang&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;language-bash&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;code&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;{</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    &amp;quot;default-runtime&amp;quot;: &amp;quot;runsc&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    &amp;quot;runtimes&amp;quot;: {</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">        &amp;quot;runsc&amp;quot;: {</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">            &amp;quot;path&amp;quot;: &amp;quot;/usr/bin/runsc&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">        }</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    }</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">}&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;lang&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;language-json&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;在修改配置文件后，应重启 DockerEngine&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;code&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;systemctl restart docker&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;lang&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;language-bash&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;可以使用以下命令检查检查 Docker 和 gVisor 安装状态&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;code&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;docker system info</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker system info | grep &#39;runsc&#39;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;lang&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;language-bash&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;pic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;pics&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;live_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/new_dyn/f2a9046662ce5bdc93a5bbe7393dd2b4293793435.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;pic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;pics&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;live_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/new_dyn/888de2ab19dede7ec6880f407269519c293793435.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;接者我们创建名为glot的用户，作为 daemon 的运行角色&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;code&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;useradd -m glot</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">usermod -aG docker glot&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;lang&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;language-bash&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;安装 Rust，这里参考官方文档，使用脚本进行安装&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://rustup.rs/&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;code&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;curl --proto &#39;=https&#39; --tlsv1.2 -sSf https://sh.rustup.rs | sh&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;lang&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;language-bash&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;pic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;pics&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;live_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/new_dyn/2d7118b743cd2f10cd289e59969eeb01293793435.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;安装完毕后，可以使用以下命令检查 Rust 的安装&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;code&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;cargo -V&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;lang&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;language-bash&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;pic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;pics&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;live_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/new_dyn/0e40ab6cc26aa95bcaf7458159316d7c293793435.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;因官方的 crates 源速度很慢，如果国内使用可以换为镜像源，这里使用了 SJTU 镜像&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;code&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vi ~/.cargo/config.toml&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;lang&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;language-bash&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;pic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;pics&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;live_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/new_dyn/4b8b4b8e7550009d6fd0c4439922564a293793435.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">24</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;bold&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;编译docker-run&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;克隆 docker-run 项目，准备使用源码进行编译安装&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;code&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;git clone https://github.com/glotcode/docker-run glot-docker-run&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;lang&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;language-bash&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;进入仓库目录，使用 cargo 编译 Rust 工程&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;code&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;cd glot-docker-run</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">cargo b -r&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;lang&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;language-bash&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;pic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;pics&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;live_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/new_dyn/7c39ed2031e7932c1bc24926ea1c3025293793435.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;检查编译结果，在工程目录的target/release中将会生成名为docker-run的可执行文件&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;pic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;pics&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;live_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/new_dyn/51d7ad2ddf5dd75c531e267965c6ddb6293793435.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;复制可执行文件和 systemd 服务模板&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;code&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;cp target/release/docker-run /home/glot/bin/</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">cp systemd/docker-run.service /etc/systemd/system/&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;lang&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;language-bash&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;docker-run 服务使用 systemd 进行托管，作为 daemon 运行，它对外提供一个 http 服务，其他应用使用 RestAPI 与之对接</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">编辑 systemd 服务配置文件&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;code&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vi /etc/systemd/system/docker-run.service&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;lang&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;language-bash&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;docker-run 的配置文件全部为环境变量，一些重要的参数已经给出了注释&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;其中SERVER_LISTEN_ADDR和SERVER_LISTEN_PORT决定了 daemon 监听的 ip 和端口号，可以根据需求修改&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;SERVER_WORKER_THREADS为 worker 线程数，根据实际业务并发量修改，即越多可同时执行的任务越多&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;API_ACCESS_TOKEN是 RestAPI 的访问 Token，设定一个较复杂的值，可防止未授权访问，在调用中以 HTTP 请求 Header 的X-Access-Token字段进行传递&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RUN_MAX_EXECUTION_TIME参数用来限制任务执行的超时时间，其单位为秒，如果一个任务大于这个时间没有执行完毕，docker-run 就会销毁这个容器，并会返回一个 400 错误&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RUN_MAX_OUTPUT_SIZE参数是用来限制最大输出量的，它的单位是 Byte，如果输出的内容过大，同样会被丢弃并报错</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">这些参数的详细配置也可以参考 docker-run 项目的 README: https://github.com/glotcode/docker-run?tab=readme-ov-file#environment-variables&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;code&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;[Unit]</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">Description=docker-run</span><span style="color:#D7BA7D;">\\n\\n</span><span style="color:#CE9178;">[Service]</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">User=glot</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">Group=glot</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">Restart=always</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">RestartSec=10</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">ExecStart=/home/glot/bin/docker-run</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;"># 服务绑定 ip</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">Environment=&amp;quot;SERVER_LISTEN_ADDR=0.0.0.0&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;"># 服务监听端口</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">Environment=&amp;quot;SERVER_LISTEN_PORT=8088&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;"># worker 线程数</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">Environment=&amp;quot;SERVER_WORKER_THREADS=10&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;"># API Token</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">Environment=&amp;quot;API_ACCESS_TOKEN=some-secret-token&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;"># Docker socket 路径</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">Environment=&amp;quot;DOCKER_UNIX_SOCKET_PATH=/var/run/docker.sock&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">Environment=&amp;quot;DOCKER_UNIX_SOCKET_READ_TIMEOUT=3&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">Environment=&amp;quot;DOCKER_UNIX_SOCKET_WRITE_TIMEOUT=3&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;"># 容器主机名</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">Environment=&amp;quot;DOCKER_CONTAINER_HOSTNAME=glot&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;"># 容器用户</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">Environment=&amp;quot;DOCKER_CONTAINER_USER=glot&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;"># 容器最大内存限制</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">Environment=&amp;quot;DOCKER_CONTAINER_MEMORY=1000000000&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;"># 容器内是否禁用网络支持</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">Environment=&amp;quot;DOCKER_CONTAINER_NETWORK_DISABLED=true&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">Environment=&amp;quot;DOCKER_CONTAINER_ULIMIT_NOFILE_SOFT=90&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">Environment=&amp;quot;DOCKER_CONTAINER_ULIMIT_NOFILE_HARD=100&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">Environment=&amp;quot;DOCKER_CONTAINER_ULIMIT_NPROC_SOFT=90&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">Environment=&amp;quot;DOCKER_CONTAINER_ULIMIT_NPROC_HARD=100&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">Environment=&amp;quot;DOCKER_CONTAINER_CAP_DROP=MKNOD NET_RAW NET_BIND_SERVICE&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">Environment=&amp;quot;DOCKER_CONTAINER_READONLY_ROOTFS=true&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">Environment=&amp;quot;DOCKER_CONTAINER_TMP_DIR_PATH=/tmp&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">Environment=&amp;quot;DOCKER_CONTAINER_TMP_DIR_OPTIONS=rw,noexec,nosuid,size=65536k&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;"># 容器工作目录</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">Environment=&amp;quot;DOCKER_CONTAINER_WORK_DIR_PATH=/home/glot&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">Environment=&amp;quot;DOCKER_CONTAINER_WORK_DIR_OPTIONS=rw,exec,nosuid,size=131072k&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;"># 容器执行超时时间</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">Environment=&amp;quot;RUN_MAX_EXECUTION_TIME=15&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;"># 最大允许输出</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">Environment=&amp;quot;RUN_MAX_OUTPUT_SIZE=100000&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;"># 日志级别</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">Environment=&amp;quot;RUST_LOG=debug&amp;quot;</span><span style="color:#D7BA7D;">\\n\\n</span><span style="color:#CE9178;">[Install]</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">WantedBy=multi-user.target&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;lang&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;language-yaml&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;修改完配置文件就可启动服务了，并将它设为开机自启&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;code&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;systemctl daemon-reload</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">systemctl enable --now docker-run.service&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;lang&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;language-bash&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;GET 请求刚才配置的那个地址的根路径，测试服务运行状态正常，我这里是 http://localhost:8088/&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;pic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;pics&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;live_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/new_dyn/7e0a6d73cdb1ba63bcfcbe94df9c7b39293793435.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">24</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;bold&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;拉取Docker镜像&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;glot-images 构建了各编程语言的执行镜像，这些镜像使用 nix 构建，但因为 nix 的配置比较复杂，且占用存储空间巨大，这里直接使用上传在 DockerHub 的镜像了（弊端就是语言版本比较旧）&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://hub.docker.com/u/glot&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;pic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;pics&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;live_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/new_dyn/e63013e3c15cd556ec7ce82048d43889293793435.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;通过 docker pull命令拉取各个镜像，可以按照自己的需求拉取，比如你只需要执行某几个编程语言&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;code&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;docker pull glot/assembly</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/ats</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/bash</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/clang</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/clisp</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/clojure</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/cobol</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/coffeescript</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/crystal</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/csharp</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/dart</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/elixir</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/elm</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/erlang</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/fsharp</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/golang</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/groovy</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/guile</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/hare</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/haskell</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/idris</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/java</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/javascript</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/julia</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/kotlin</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/lua</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/mercury</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/nim</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/nix</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/ocaml</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/pascal</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/perl</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/php</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/python</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/raku</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/ruby</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/rust</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/sac</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/scala</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/swift</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/typescript</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">docker pull glot/zig&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;lang&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;language-bash&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;这些全部拉取下来大概需要38GB，可以使用docker images命令检查拉取情况&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;pic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;pics&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;live_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/new_dyn/82a01995548eb266d59f7fd22f75e542293793435.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;如果已经拉取了所有的镜像，可以执行单元测试脚本，来验证各编程语言执行容器的正确性，在 docker-run 的目录下的scripts目录内&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;code&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;cd glot-docker-run/scripts/</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">./test_glot.sh &#39;http://localhost:8088&#39; &#39;some-secret-token&#39;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;lang&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;language-bash&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;pic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;pics&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;live_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/new_dyn/004e79df950a4bc93ff42fae8017d0aa293793435.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">24</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;bold&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;使用Glot服务&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;docker-run 这个组件对外提供 RestAPI 接口，其他进程或者其他主机可以直接调用，它共有三个功能对应其路径：&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;pic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;pics&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;live_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/new_dyn/a28b283d2075bbd78c12e1d2859fd40d293793435.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;查询服务状态&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;code&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;curl http://localhost:8088/&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;lang&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;language-bash&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;返回 daemon 的服务名、版本等&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;code&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;{</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">  &amp;quot;name&amp;quot;: &amp;quot;docker-run&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">  &amp;quot;version&amp;quot;: &amp;quot;1.4.0&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">  &amp;quot;description&amp;quot;: &amp;quot;Api for running code in transient docker containers&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">}&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;lang&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;language-json&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;查询宿主机 DockerEngine 信息，访问这个接口需要在请求 Header 的X-Access-Token字段中携带 Token&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;code&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;curl http://localhost:8088/version </span><span style="color:#D7BA7D;">\\\\\\n</span><span style="color:#CE9178;">  -H &#39;X-Access-Token: some-secret-token&#39;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;lang&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;language-bash&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;执行成功将会返回 DockerEngine 的版本信息&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;code&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;{</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">  &amp;quot;docker&amp;quot;: {</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    &amp;quot;version&amp;quot;: &amp;quot;26.1.2&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    &amp;quot;apiVersion&amp;quot;: &amp;quot;1.45&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    &amp;quot;gitCommit&amp;quot;: &amp;quot;ef1912d&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    &amp;quot;goVersion&amp;quot;: &amp;quot;go1.21.10&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    &amp;quot;os&amp;quot;: &amp;quot;linux&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    &amp;quot;arch&amp;quot;: &amp;quot;amd64&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    &amp;quot;kernelVersion&amp;quot;: &amp;quot;6.2.16-3-pve&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    &amp;quot;buildTime&amp;quot;: &amp;quot;2024-05-08T13:59:59.000000000+00:00&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    &amp;quot;platform&amp;quot;: {</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">      &amp;quot;name&amp;quot;: &amp;quot;Docker Engine - Community&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    },</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    &amp;quot;components&amp;quot;: [</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">      {</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">        &amp;quot;name&amp;quot;: &amp;quot;Engine&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">        &amp;quot;version&amp;quot;: &amp;quot;26.1.2&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">      },</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">      {</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">        &amp;quot;name&amp;quot;: &amp;quot;containerd&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">        &amp;quot;version&amp;quot;: &amp;quot;1.6.31&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">      },</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">      {</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">        &amp;quot;name&amp;quot;: &amp;quot;runsc&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">        &amp;quot;version&amp;quot;: &amp;quot;0.0~20221219.0&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">      },</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">      {</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">        &amp;quot;name&amp;quot;: &amp;quot;docker-init&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">        &amp;quot;version&amp;quot;: &amp;quot;0.19.0&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">      }</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    ]</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">  }</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">}&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;lang&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;language-json&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;执行响应的代码前，需要构建一个 json 请求体，用来描述创建的执行任务的行为，下表是它的定义：&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;pic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;pics&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;live_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/new_dyn/752ce6ef76a448158eb97222befa7c92293793435.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;payload 结构：&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;pic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;pics&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;live_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/new_dyn/752ce6ef76a448158eb97222befa7c92293793435.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;文件对象的结构：&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;pic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;pics&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;live_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/new_dyn/752ce6ef76a448158eb97222befa7c92293793435.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;eg：&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;code&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;{</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">  &amp;quot;image&amp;quot;: &amp;quot;glot/python:latest&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">  &amp;quot;payload&amp;quot;: {</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    &amp;quot;language&amp;quot;: &amp;quot;python&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    &amp;quot;files&amp;quot;: [</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">      {</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">        &amp;quot;name&amp;quot;: &amp;quot;main.py&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">        &amp;quot;content&amp;quot;: &amp;quot;print(42)&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">      }</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    ]</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">  }</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">}&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;lang&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;language-json&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;访问这个接口也需要在请求 Header 中携带 Token：&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;code&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;curl &#39;http://localhost:8088/run&#39; </span><span style="color:#D7BA7D;">\\\\\\n</span><span style="color:#CE9178;">  -H &#39;X-Access-Token: some-secret-token&#39; </span><span style="color:#D7BA7D;">\\\\\\n</span><span style="color:#CE9178;">  -H &#39;Content-type: application/json&#39; </span><span style="color:#D7BA7D;">\\\\\\n</span><span style="color:#CE9178;">  -d &#39;{</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">  &amp;quot;image&amp;quot;: &amp;quot;glot/python:latest&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">  &amp;quot;payload&amp;quot;: {</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    &amp;quot;language&amp;quot;: &amp;quot;python&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    &amp;quot;files&amp;quot;: [</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">      {</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">        &amp;quot;name&amp;quot;: &amp;quot;main.py&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">        &amp;quot;content&amp;quot;: &amp;quot;print(42)&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">      }</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    ]</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">  }</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">}&#39;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;lang&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;language-bash&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;我们可以直接将它与自己熟悉的编程语言对接，实现给应用或者平台提供运行任意代码的能力。&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;这里使用 Python 通过 RestAPI 调用 glot（docker-run），实现运行一段 rust 代码并取回输出为字符串：&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;code&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;import requests</span><span style="color:#D7BA7D;">\\n\\n</span><span style="color:#CE9178;">def run_code(image, lang, file_name, code):</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    resp = requests.post(</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">        url=&amp;quot;http://localhost:8088/run&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">        headers={</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">            &amp;quot;X-Access-Token&amp;quot;: &amp;quot;some-secret-token&amp;quot;,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">        },</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">        json={</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">            &amp;quot;image&amp;quot;: image,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">            &amp;quot;payload&amp;quot;: {</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">                &amp;quot;language&amp;quot;: lang,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">                &amp;quot;files&amp;quot;: [</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">                    {</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">                        &amp;quot;name&amp;quot;: file_name,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">                        &amp;quot;content&amp;quot;: code,</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">                    },</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">                ],</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">            },</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">        },</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    )</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    json_content = resp.json()</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    return json_content</span><span style="color:#D7BA7D;">\\n\\n\\n</span><span style="color:#CE9178;">image = &amp;quot;glot/rust:latest&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">lang = &amp;quot;rust&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">file_name = &amp;quot;main.rs&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">code = &amp;quot;&amp;quot;&amp;quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">fn main() {</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    for i in 1..=9 {</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">        for j in 1..=i {</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">            print!(&amp;quot;{}x{}={:2} &amp;quot;, j, i, j * i);</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">        }</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">        println!();</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">    }</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">}</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">&amp;quot;&amp;quot;&amp;quot;</span><span style="color:#D7BA7D;">\\n\\n</span><span style="color:#CE9178;">result = run_code(image, lang, file_name, code)</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">print(result[&amp;quot;stdout&amp;quot;])&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;lang&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;language-python&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;测试可以正确输出执行内容&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;pic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;pics&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;live_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/new_dyn/21e396261fb607d4823f7ec4327908b1293793435.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;有了通用接口的能力，我们就有了将其集成进自己平台的可能，只要发挥创造力，就可以围绕在线执行代码提供相关的业务，或者作为微服务连接上游的业务，比如搭建 OJ（在线判题）平台等。以及 glot 项目以 MIT 协议开源，这意味着我们可以随意修改底层代码，比如增加网络和共享路径支持、增加第三方库等。总之，这是一个完成度很高、十分推荐的开源项目。&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;由 &quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#ff968d&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;来笙云 Laysense.cn&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot; 强力支持&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;align&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;para_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TEXT_NODE_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;word&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;font_size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;style&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;words&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;原文链接：https://shakaianee.top/archives/1002/&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            ]</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;MODULE_TYPE_CONTENT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_extend&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;items&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;icon&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//search.bilibili.com/all?keyword=%E8%BF%90%E7%BB%B4&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;运维&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;icon&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//search.bilibili.com/all?keyword=%E6%9C%8D%E5%8A%A1%E6%90%AD%E5%BB%BA&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;服务搭建&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;icon&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//search.bilibili.com/all?keyword=glot.io&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;glot.io&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            ]</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;MODULE_TYPE_EXTEND&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_bottom&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;share_info&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pic&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://static.hdslb.com/mobile/img/app_logo.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;summary&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;感谢 来笙云 Laysense.cn 提供算力 作为一个全栈工程师，开发、维护和测试一些软件系统时，必然会涉及到多种编程语言，有时还需要测试一些编程语言的安全特性，常常需要敏捷地了解它们并立即上手。在朋友的推荐和社区分享下，我了解到一个名叫 glot.io 的开源项目。 它支持40多种编程语言，无论是热门的 Python、Go、Rust、Kotlin，还是冷门的 COBOL、Erlang、Haskell 只需在网页上选择对应的语言，即可开始编写。为使用者提供了一个 Sandbox（沙箱）和 Playground（游乐场）环境，既不需要配置它们的 Runtime（运行环境）和 IDE（集成开发环境），也不需要担心误操作对系统产生破坏性，还不会占用任何用户端的系统资源，实现真正的零开销运行代码。 [图片] 在代码编写界面，可以创建多个源码文件，完成后点击Run就能执行它并得到输出，类似我们平时编程那样，将输出打在终端上。整个过程不会生成任何可执行文件，所以它的应用场景不是在线编译，而是在线运行代码片段。 [图片] glot.io 这个网站提供了公开的代码片段执行和分享功能，任何人在注册后都可以分享自&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;title&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;【服务搭建】零开销在线运行代码！glot.io服务私有化部署&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;MODULE_TYPE_BOTTOM&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_stat&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;coin&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;comment&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;favorite&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;forward&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;like&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;MODULE_TYPE_STAT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        }</span></span>
<span class="line"><span style="color:#D4D4D4;">      ],</span></span>
<span class="line"><span style="color:#9CDCFE;">      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;message&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;ttl&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,7))])}const v=o(r,[["render",u]]),C=JSON.parse('{"path":"/docs/opus/detail.html","title":"图文详细","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768157652000,"contributors":[{"name":"SessionHu","username":"SessionHu","email":"102411014+SessionHu@users.noreply.github.com","commits":2,"url":"https://github.com/SessionHu"},{"name":"huanli233","username":"huanli233","email":"76041494+huanli233@users.noreply.github.com","commits":1,"url":"https://github.com/huanli233"}],"changelog":[{"hash":"0bf5dd275ae3ee18e0cc9ebbb53f5b3d418526ea","time":1768157652000,"email":"76041494+huanli233@users.noreply.github.com","author":"huanli233","message":"feat: Revise features parameter and add fallback details (#1429)"},{"hash":"9b7f98d06f4c58684f114e62a4980ee9e913371d","time":1752996510000,"email":"102411014+SessionHu@users.noreply.github.com","author":"SessionHu","message":"feat(opus): add detail.md to index"},{"hash":"d50f03651010fbb54c12b02bc9c735783c27f1eb","time":1752982744000,"email":"102411014+SessionHu@users.noreply.github.com","author":"SessionHu","message":"feat(opus/detail.md): add opus detail api"}]},"filePathRelative":"docs/opus/detail.md"}');export{v as comp,C as data};
