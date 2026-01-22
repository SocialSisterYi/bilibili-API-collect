import{_ as t,c,a as e,b as s,d as a,e as o,w as p,r as D,o as i}from"./app-Dgsdh8A6.js";const r={};function u(y,n){const l=D("RouteLink");return i(),c("div",null,[n[39]||(n[39]=e('<h1 id="用户空间动态" tabindex="-1"><a class="header-anchor" href="#用户空间动态"><span>用户空间动态</span></a></h1><h2 id="获取用户空间动态" tabindex="-1"><a class="header-anchor" href="#获取用户空间动态"><span>获取用户空间动态</span></a></h2><blockquote><p>https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/space</p><p>https://api.bilibili.com/x/polymer/web-dynamic/desktop/v1/feed/space</p></blockquote><p><em>请求方法: GET</em></p><p>鉴权方式:</p><ul><li>未登录: 请求标头 <code>User-Agent</code> 字段, <code>Cookie</code> 需含 <code>buvid3</code>; WBI 签名, <code>dm_img</code> 系列风控</li><li>已登录: 请求标头 <code>Cookie</code> 含有效 <code>SESSDATA</code></li></ul><p>注: 该接口现在有一些奇奇怪怪的校验, 存在一定运气成分, 参见 <a href="https://github.com/SocialSisterYi/bilibili-API-collect/issues/686" target="_blank" rel="noopener noreferrer">#686</a>, 所以建议您还是登录吧~</p><p><strong>URL 参数:</strong></p>',8)),s("table",null,[n[32]||(n[32]=s("thead",null,[s("tr",null,[s("th",null,"参数名"),s("th",null,"类型"),s("th",null,"内容"),s("th",null,"必要性"),s("th",null,"备注")])],-1)),s("tbody",null,[n[20]||(n[20]=s("tr",null,[s("td",null,"offset"),s("td",null,"string"),s("td",null,"分页偏移量"),s("td",null,"不必要"),s("td")],-1)),n[21]||(n[21]=s("tr",null,[s("td",null,"host_mid"),s("td",null,"string"),s("td",null,"被查询用户 UID (mid)"),s("td",null,"必要"),s("td")],-1)),n[22]||(n[22]=s("tr",null,[s("td",null,"timezone_offset"),s("td",null,"number"),s("td",null,"时区偏移"),s("td",null,"不必要"),s("td",null,[a("默认 "),s("code",null,"-480")])],-1)),n[23]||(n[23]=s("tr",null,[s("td",null,"platform"),s("td",null,"string"),s("td",null,"平台"),s("td",null,"不必要"),s("td",null,[a("如 "),s("code",null,"web")])],-1)),s("tr",null,[n[4]||(n[4]=s("td",null,"features",-1)),n[5]||(n[5]=s("td",null,"string",-1)),n[6]||(n[6]=s("td",null,"功能",-1)),n[7]||(n[7]=s("td",null,"不必要",-1)),s("td",null,[n[1]||(n[1]=a("留空为空, 默认为 ")),n[2]||(n[2]=s("code",null,"itemOpusStyle,listOnlyfans,opusBigCover,onlyfansVote,forwardListHidden,decorationCard,commentsNewVersion,onlyfansAssetsV2,ugcDelete,onlyfansQaCard",-1)),n[3]||(n[3]=a(", 参见 ")),o(l,{to:"/docs/opus/features.html#features"},{default:p(()=>n[0]||(n[0]=[a("功能模块")])),_:1,__:[0]})])]),n[24]||(n[24]=s("tr",null,[s("td",null,"web_location"),s("td",null,"string"),s("td",null,[s("code",null,"333.1387")]),s("td",null,"不必要"),s("td")],-1)),n[25]||(n[25]=s("tr",null,[s("td",null,"dm_img_switch"),s("td",null,"number"),s("td",null,[s("code",null,"0")]),s("td",null,"不必要"),s("td",null,"仅登录时存在")],-1)),n[26]||(n[26]=s("tr",null,[s("td",null,"dm_img_list"),s("td",null,"object[]"),s("td",null,[s("code",null,"dm_img"),a(" 系列风控")]),s("td",null,"不必要"),s("td",null,"仅未登录时存在")],-1)),n[27]||(n[27]=s("tr",null,[s("td",null,"dm_img_str"),s("td",null,"string"),s("td",null,[s("code",null,"dm_img"),a(" 系列风控")]),s("td",null,"不必要"),s("td",null,"仅未登录时存在")],-1)),n[28]||(n[28]=s("tr",null,[s("td",null,"dm_cover_img_str"),s("td",null,"string"),s("td",null,[s("code",null,"dm_img"),a(" 系列风控")]),s("td",null,"不必要"),s("td",null,"仅未登录时存在")],-1)),n[29]||(n[29]=s("tr",null,[s("td",null,"dm_img_inter"),s("td",null,"object"),s("td",null,[s("code",null,"dm_img"),a(" 系列风控")]),s("td",null,"不必要"),s("td",null,"仅未登录时存在")],-1)),n[30]||(n[30]=s("tr",null,[s("td",null,"x-bili-device-req-json"),s("td",null,"object"),s("td",null,[s("code",null,'{"platform":"web","device":"pc"}')]),s("td",null,"不必要"),s("td")],-1)),n[31]||(n[31]=s("tr",null,[s("td",null,"x-bili-web-req-json"),s("td",null,"object"),s("td",null,[s("code",null,'{"spm_id":"333.1387"}')]),s("td",null,"不必要"),s("td")],-1)),s("tr",null,[n[10]||(n[10]=s("td",null,"w_rid",-1)),n[11]||(n[11]=s("td",null,"string",-1)),n[12]||(n[12]=s("td",null,"WBI 签名",-1)),n[13]||(n[13]=s("td",null,"不必要",-1)),s("td",null,[n[9]||(n[9]=a("参见 ")),o(l,{to:"/docs/misc/sign/wbi.html"},{default:p(()=>n[8]||(n[8]=[a("WBI 签名")])),_:1,__:[8]})])]),s("tr",null,[n[16]||(n[16]=s("td",null,"wts",-1)),n[17]||(n[17]=s("td",null,"number",-1)),n[18]||(n[18]=s("td",null,"UNIX 秒级时间戳",-1)),n[19]||(n[19]=s("td",null,"不必要",-1)),s("td",null,[n[15]||(n[15]=a("参见 ")),o(l,{to:"/docs/misc/sign/wbi.html"},{default:p(()=>n[14]||(n[14]=[a("WBI 签名")])),_:1,__:[14]})])])])]),n[40]||(n[40]=s("p",null,[s("strong",null,"JSON 回复:")],-1)),s("p",null,[n[34]||(n[34]=a("可参考 ")),o(l,{to:"/docs/dynamic/all.html#%E8%8E%B7%E5%8F%96%E5%8A%A8%E6%80%81%E5%88%97%E8%A1%A8"},{default:p(()=>n[33]||(n[33]=[a("获取动态列表")])),_:1,__:[33]})]),n[41]||(n[41]=e(`<p><strong>示例:</strong></p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code class="language-shell"><span class="line"><span style="color:#DCDCAA;">curl</span><span style="color:#CE9178;"> &#39;https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/space?host_mid=2095498218&amp;features=itemOpusStyle,listOnlyfans,opusBigCover,onlyfansVote,forwardListHidden,decorationCard,commentsNewVersion,onlyfansAssetsV2,ugcDelete,onlyfansQaCard&#39;</span><span style="color:#D7BA7D;"> \\</span></span>
<span class="line"><span style="color:#D4D4D4;">-b </span><span style="color:#CE9178;">&#39;SESSDATA=xxx&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>点击查看响应示例:</summary><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code class="language-json"><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;code&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;message&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;ttl&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;data&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;has_more&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;items&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;basic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;comment_id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;349795473&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;comment_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">11</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//www.bilibili.com/opus/1063487284684259332&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;like_icon&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;action_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/cb34de5fbca6b8507adf7364ae785822b74df1f9.bin&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;end_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68554</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;start_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;rid_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;349795473&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1063487284684259332&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;modules&quot;</span><span style="color:#D4D4D4;">: {</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                            &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg&quot;</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                            &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                          },</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;src_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                        }</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;res_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                  }</span></span>
<span class="line"><span style="color:#D4D4D4;">                ]</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;2095498218&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;decoration_card&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;big_card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_type_name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;免费&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;fan&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#a465e5&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;color_format&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;colors&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;#a465e5FF&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;#a465e5FF&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;end_point&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0,100&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;gradients&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#B5CEA8;">                    0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#B5CEA8;">                    100</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;start_point&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0,0&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;is_fan&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;num_desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;002272&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;number&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2272</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68557</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;item_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68557</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=68557&amp;isdiy=0&amp;part=card&amp;from=post&amp;f_source=garb&amp;vmid=2095498218&amp;native.theme=1&amp;navhide=1&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空粉丝&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;face&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;face_nft&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;following&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//space.bilibili.com/2095498218/dynamic&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2095498218</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;次元壁小宋&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;official_verify&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">-1</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pendant&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;expire&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance_frame&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;n_pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68553</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68553</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_location_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_time&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;27分钟前&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_ts&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1746450829</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;AUTHOR_TYPE_NORMAL&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;vip&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar_subscript&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar_subscript_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;due_date&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1683129600000</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;label&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bg_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bg_style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;border_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hans&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hans_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hant&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hant_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label_theme&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;path&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;use_img_label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;nickname_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;theme_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_dynamic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;additional&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;major&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;opus&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;fold_action&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">                  &quot;展开&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">                  &quot;收起&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//www.bilibili.com/opus/1063487284684259332&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;pics&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                  {</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">512</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;live_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">9.783203125</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;http://i0.hdslb.com/bfs/new_dyn/8bc3298efe55f2fc3949678538ed5fa52095498218.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">512</span></span>
<span class="line"><span style="color:#D4D4D4;">                  }</span></span>
<span class="line"><span style="color:#D4D4D4;">                ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;summary&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;rich_text_nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a augue eget sapien ultricies tristique. Integer rutrum convallis elit et vestibulum. Proin porta magna id congue lobortis. Vestibulum et arcu vestibulum, dignissim est ultrices, laoreet lectus. Nam sed sem vehicula, iaculis lorem ac, tempor arcu. Aliquam nec porta sapien. Nam convallis iaculis urna, et varius dolor. Sed non pellentesque enim. Praesent molestie efficitur rutrum. Nunc sit amet tempus nisl, at sodales augue. Nunc eu risus quis eros euismod rhoncus quis at purus. Aliquam vulputate magna non enim dapibus vestibulum. Sed pellentesque leo eget imperdiet viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</span><span style="color:#D7BA7D;">\\n\\n</span><span style="color:#CE9178;">Ut porta non ex quis porta. Proin maximus, diam eget commodo tempus, justo libero ultricies ante, feugiat elementum sem ante sit amet magna. Donec auctor arcu sed ligula imperdiet, eget iaculis nunc mollis.&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a augue eget sapien ultricies tristique. Integer rutrum convallis elit et vestibulum. Proin porta magna id congue lobortis. Vestibulum et arcu vestibulum, dignissim est ultrices, laoreet lectus. Nam sed sem vehicula, iaculis lorem ac, tempor arcu. Aliquam nec porta sapien. Nam convallis iaculis urna, et varius dolor. Sed non pellentesque enim. Praesent molestie efficitur rutrum. Nunc sit amet tempus nisl, at sodales augue. Nunc eu risus quis eros euismod rhoncus quis at purus. Aliquam vulputate magna non enim dapibus vestibulum. Sed pellentesque leo eget imperdiet viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</span><span style="color:#D7BA7D;">\\n\\n</span><span style="color:#CE9178;">Ut porta non ex quis porta. Proin maximus, diam eget commodo tempus, justo libero ultricies ante, feugiat elementum sem ante sit amet magna. Donec auctor arcu sed ligula imperdiet, eget iaculis nunc mollis.&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_TEXT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a augue eget sapien ultricies tristique. Integer rutrum convallis elit et vestibulum. Proin porta magna id congue lobortis. Vestibulum et arcu vestibulum, dignissim est ultrices, laoreet lectus. Nam sed sem vehicula, iaculis lorem ac, tempor arcu. Aliquam nec porta sapien. Nam convallis iaculis urna, et varius dolor. Sed non pellentesque enim. Praesent molestie efficitur rutrum. Nunc sit amet tempus nisl, at sodales augue. Nunc eu risus quis eros euismod rhoncus quis at purus. Aliquam vulputate magna non enim dapibus vestibulum. Sed pellentesque leo eget imperdiet viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</span><span style="color:#D7BA7D;">\\n\\n</span><span style="color:#CE9178;">Ut porta non ex quis porta. Proin maximus, diam eget commodo tempus, justo libero ultricies ante, feugiat elementum sem ante sit amet magna. Donec auctor arcu sed ligula imperdiet, eget iaculis nunc mollis.&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;title&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;Lorem ipsum dolor si&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;MAJOR_TYPE_OPUS&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;topic&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_interaction&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;items&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;desc&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;rich_text_nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RPG_Teng_Lin&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;rid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;357413690&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RPG_Teng_Lin&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_AT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot; 赞了&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot; 赞了&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_TEXT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            ]</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_more&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;three_point_items&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;取消置顶&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;params&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dynamic_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1063487284684259332&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;THREE_POINT_TOP&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;删除&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;modal&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;cancel&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;取消&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;confirm&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;确认删除&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;动态删除后将无法恢复，请谨慎操作&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;title&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;要删除动态吗？&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;params&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dyn_id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1063487284684259332&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dyn_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;rid_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;349795473&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;THREE_POINT_DELETE&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            ]</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_stat&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;comment&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;forward&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;like&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_tag&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;置顶&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">          }</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;DYNAMIC_TYPE_DRAW&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;basic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;comment_id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;114443295918557&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;comment_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;like_icon&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;action_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/cb34de5fbca6b8507adf7364ae785822b74df1f9.bin&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;end_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68554</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;start_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;rid_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;114443295918557&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1062695803784527872&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;modules&quot;</span><span style="color:#D4D4D4;">: {</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                            &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg&quot;</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                            &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                          },</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;src_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                        }</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;res_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                  }</span></span>
<span class="line"><span style="color:#D4D4D4;">                ]</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;2095498218&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;decoration_card&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;big_card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_type_name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;免费&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;fan&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#a465e5&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;color_format&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;colors&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;#a465e5FF&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;#a465e5FF&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;end_point&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0,100&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;gradients&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#B5CEA8;">                    0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#B5CEA8;">                    100</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;start_point&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0,0&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;is_fan&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;num_desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;002272&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;number&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2272</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68557</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;item_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68557</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=68557&amp;isdiy=0&amp;part=card&amp;from=post&amp;f_source=garb&amp;vmid=2095498218&amp;native.theme=1&amp;navhide=1&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空粉丝&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;face&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;face_nft&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;following&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//space.bilibili.com/2095498218/dynamic&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2095498218</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;次元壁小宋&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;official_verify&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">-1</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pendant&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;expire&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance_frame&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;n_pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68553</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68553</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;投稿了视频&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_location_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_time&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;2天前&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_ts&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1746266548</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;AUTHOR_TYPE_NORMAL&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;vip&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar_subscript&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar_subscript_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;due_date&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1683129600000</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;label&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bg_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bg_style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;border_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hans&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hans_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hant&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hant_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label_theme&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;path&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;use_img_label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;nickname_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;theme_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_dynamic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;additional&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;major&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;archive&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;aid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;114443295918557&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;badge&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;bg_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#FB7299&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#FFFFFF&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;icon_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;投稿视频&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bvid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;BV1HUVnz7EX1&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;cover&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;http://i1.hdslb.com/bfs/archive/515f60c051c83f98922f78de95a072feebc8f041.jpg&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;-&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;disable_preview&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;duration_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;05:14&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//www.bilibili.com/video/BV1HUVnz7EX1/&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;stat&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;danmaku&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;play&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;26&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;title&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;来自阿洛娜的权威&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;MAJOR_TYPE_ARCHIVE&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;topic&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_interaction&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;items&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;desc&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;rich_text_nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;长安不见-雪&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;rid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;3546712641636719&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;长安不见-雪&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_AT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;、&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;、&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_TEXT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;旋转的M2&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;rid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;3493264944531941&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;旋转的M2&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_AT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot; 赞了&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot; 赞了&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_TEXT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            ]</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_more&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;three_point_items&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;置顶&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;params&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dynamic_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1062695803784527872&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;THREE_POINT_TOP&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;删除&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;modal&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;cancel&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;取消&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;confirm&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;确认删除&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;视频删除后将无法恢复，请谨慎操作&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;title&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;删除动态会同时删除视频稿件&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;params&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dyn_id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1062695803784527872&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dyn_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">8</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;rid_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;114443295918557&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;THREE_POINT_DELETE&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            ]</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_stat&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;comment&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;forward&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;like&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          }</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;DYNAMIC_TYPE_AV&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;basic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;comment_id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;114402862959003&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;comment_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;like_icon&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;action_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/cb34de5fbca6b8507adf7364ae785822b74df1f9.bin&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;end_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68554</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;start_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;rid_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;114402862959003&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1060045976462426117&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;modules&quot;</span><span style="color:#D4D4D4;">: {</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                            &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg&quot;</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                            &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                          },</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;src_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                        }</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;res_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                  }</span></span>
<span class="line"><span style="color:#D4D4D4;">                ]</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;2095498218&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;decoration_card&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;big_card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_type_name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;免费&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;fan&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#a465e5&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;color_format&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;colors&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;#a465e5FF&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;#a465e5FF&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;end_point&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0,100&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;gradients&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#B5CEA8;">                    0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#B5CEA8;">                    100</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;start_point&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0,0&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;is_fan&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;num_desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;002272&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;number&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2272</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68557</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;item_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68557</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=68557&amp;isdiy=0&amp;part=card&amp;from=post&amp;f_source=garb&amp;vmid=2095498218&amp;native.theme=1&amp;navhide=1&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空粉丝&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;face&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;face_nft&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;following&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//space.bilibili.com/2095498218/dynamic&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2095498218</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;次元壁小宋&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;official_verify&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">-1</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pendant&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;expire&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance_frame&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;n_pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68553</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68553</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;投稿了视频&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_location_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_time&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;04月26日&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_ts&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1745649587</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;AUTHOR_TYPE_NORMAL&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;vip&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar_subscript&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar_subscript_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;due_date&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1683129600000</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;label&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bg_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bg_style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;border_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hans&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hans_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hant&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hant_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label_theme&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;path&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;use_img_label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;nickname_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;theme_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_dynamic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;additional&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;major&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;archive&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;aid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;114402862959003&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;badge&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;bg_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#FB7299&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#FFFFFF&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;icon_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;投稿视频&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bvid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;BV1ovLXzPEFq&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;cover&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;http://i0.hdslb.com/bfs/archive/b361f14b56080cb17ed5ff24d0b629945c0c150d.jpg&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;-&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;disable_preview&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;duration_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;02:42&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//www.bilibili.com/video/BV1ovLXzPEFq/&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;stat&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;danmaku&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;play&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;199&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;title&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;终于把星野酱带回家了૮₍˃̶ꇴ˂̶₎ა&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;MAJOR_TYPE_ARCHIVE&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;topic&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_interaction&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;items&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;desc&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;rich_text_nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;蔚蓝绪山&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;rid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;3493074818828658&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;蔚蓝绪山&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_AT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;、&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;、&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_TEXT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;蚕茧自缠萦&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;rid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;291098307&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;蚕茧自缠萦&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_AT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot; 赞了&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot; 赞了&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_TEXT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            ]</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_more&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;three_point_items&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;置顶&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;params&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dynamic_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1060045976462426117&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;THREE_POINT_TOP&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;删除&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;modal&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;cancel&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;取消&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;confirm&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;确认删除&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;视频删除后将无法恢复，请谨慎操作&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;title&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;删除动态会同时删除视频稿件&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;params&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dyn_id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1060045976462426117&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dyn_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">8</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;rid_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;114402862959003&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;THREE_POINT_DELETE&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            ]</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_stat&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;comment&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">8</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;forward&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;like&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">9</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          }</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;DYNAMIC_TYPE_AV&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;basic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;comment_id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;114398483975404&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;comment_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;like_icon&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;action_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/cb34de5fbca6b8507adf7364ae785822b74df1f9.bin&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;end_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68554</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;start_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;rid_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;114398483975404&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1059758291001802840&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;modules&quot;</span><span style="color:#D4D4D4;">: {</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                            &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg&quot;</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                            &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                          },</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;src_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                        }</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;res_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                  }</span></span>
<span class="line"><span style="color:#D4D4D4;">                ]</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;2095498218&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;decoration_card&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;big_card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_type_name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;免费&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;fan&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#a465e5&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;color_format&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;colors&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;#a465e5FF&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;#a465e5FF&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;end_point&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0,100&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;gradients&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#B5CEA8;">                    0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#B5CEA8;">                    100</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;start_point&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0,0&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;is_fan&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;num_desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;002272&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;number&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2272</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68557</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;item_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68557</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=68557&amp;isdiy=0&amp;part=card&amp;from=post&amp;f_source=garb&amp;vmid=2095498218&amp;native.theme=1&amp;navhide=1&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空粉丝&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;face&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;face_nft&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;following&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//space.bilibili.com/2095498218/dynamic&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2095498218</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;次元壁小宋&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;official_verify&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">-1</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pendant&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;expire&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance_frame&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;n_pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68553</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68553</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;投稿了视频&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_location_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_time&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;04月25日&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_ts&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1745582605</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;AUTHOR_TYPE_NORMAL&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;vip&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar_subscript&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar_subscript_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;due_date&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1683129600000</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;label&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bg_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bg_style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;border_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hans&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hans_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hant&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hant_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label_theme&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;path&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;use_img_label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;nickname_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;theme_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_dynamic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;additional&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;major&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;archive&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;aid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;114398483975404&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;badge&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;bg_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#FB7299&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#FFFFFF&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;icon_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;投稿视频&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bvid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;BV1KXLEz9EV8&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;cover&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;http://i2.hdslb.com/bfs/archive/915817adaf0c1618ecf28d06d03eb8be8f6c89ff.jpg&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;-&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;disable_preview&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;duration_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;00:14&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//www.bilibili.com/video/BV1KXLEz9EV8/&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;stat&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;danmaku&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;play&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;205&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;title&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;玩了一年多codm，这个什么玩意……&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;MAJOR_TYPE_ARCHIVE&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;topic&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_interaction&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;items&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;desc&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;rich_text_nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;长安不见-雪&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;rid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;3546712641636719&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;长安不见-雪&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_AT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;、&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;、&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_TEXT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坤坤丨宝宝&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;rid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;510272506&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坤坤丨宝宝&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_AT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot; 赞了&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot; 赞了&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_TEXT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            ]</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_more&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;three_point_items&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;置顶&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;params&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dynamic_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1059758291001802840&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;THREE_POINT_TOP&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;删除&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;modal&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;cancel&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;取消&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;confirm&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;确认删除&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;视频删除后将无法恢复，请谨慎操作&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;title&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;删除动态会同时删除视频稿件&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;params&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dyn_id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1059758291001802840&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dyn_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">8</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;rid_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;114398483975404&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;THREE_POINT_DELETE&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            ]</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_stat&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;comment&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;forward&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;like&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">6</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          }</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;DYNAMIC_TYPE_AV&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;basic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;comment_id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;114392746165578&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;comment_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;like_icon&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;action_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/cb34de5fbca6b8507adf7364ae785822b74df1f9.bin&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;end_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68554</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;start_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;rid_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;114392746165578&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1059382215079624725&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;modules&quot;</span><span style="color:#D4D4D4;">: {</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                            &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg&quot;</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                            &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                          },</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;src_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                        }</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;res_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                  }</span></span>
<span class="line"><span style="color:#D4D4D4;">                ]</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;2095498218&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;decoration_card&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;big_card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_type_name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;免费&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;fan&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#a465e5&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;color_format&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;colors&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;#a465e5FF&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;#a465e5FF&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;end_point&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0,100&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;gradients&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#B5CEA8;">                    0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#B5CEA8;">                    100</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;start_point&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0,0&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;is_fan&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;num_desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;002272&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;number&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2272</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68557</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;item_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68557</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=68557&amp;isdiy=0&amp;part=card&amp;from=post&amp;f_source=garb&amp;vmid=2095498218&amp;native.theme=1&amp;navhide=1&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空粉丝&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;face&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;face_nft&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;following&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//space.bilibili.com/2095498218/dynamic&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2095498218</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;次元壁小宋&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;official_verify&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">-1</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pendant&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;expire&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance_frame&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;n_pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68553</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68553</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;投稿了视频&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_location_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_time&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;04月24日&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_ts&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1745495043</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;AUTHOR_TYPE_NORMAL&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;vip&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar_subscript&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar_subscript_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;due_date&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1683129600000</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;label&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bg_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bg_style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;border_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hans&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hans_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hant&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hant_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label_theme&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;path&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;use_img_label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;nickname_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;theme_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_dynamic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;additional&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;major&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;archive&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;aid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;114392746165578&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;badge&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;bg_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#FB7299&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#FFFFFF&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;icon_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;投稿视频&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bvid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;BV1oZLgz7EeX&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;cover&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;http://i1.hdslb.com/bfs/archive/f62117a5e67f2775c892123d1ebe9e23d3523ca8.jpg&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;-&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;disable_preview&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;duration_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;12:25&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//www.bilibili.com/video/BV1oZLgz7EeX/&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;stat&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;danmaku&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;play&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;335&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;title&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;什么才是叫作史上最绝望的死法，……（这爆率正常吗）&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;MAJOR_TYPE_ARCHIVE&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;topic&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_interaction&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;items&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;desc&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;rich_text_nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;菌哥电影&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;rid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;628092353&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;菌哥电影&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_AT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;、&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;、&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_TEXT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;是轻甄不是饭团酱&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;rid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;646061108&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;是轻甄不是饭团酱&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_AT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot; 赞了&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot; 赞了&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_TEXT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            ]</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_more&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;three_point_items&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;置顶&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;params&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dynamic_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1059382215079624725&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;THREE_POINT_TOP&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;删除&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;modal&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;cancel&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;取消&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;confirm&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;确认删除&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;视频删除后将无法恢复，请谨慎操作&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;title&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;删除动态会同时删除视频稿件&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;params&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dyn_id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1059382215079624725&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dyn_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">8</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;rid_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;114392746165578&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;THREE_POINT_DELETE&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            ]</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_stat&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;comment&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">8</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;forward&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;like&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">18</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          }</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;DYNAMIC_TYPE_AV&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;basic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;comment_id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;114291361449486&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;comment_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;like_icon&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;action_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/cb34de5fbca6b8507adf7364ae785822b74df1f9.bin&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;end_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68554</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;start_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;rid_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;114291361449486&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1052737677322878980&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;modules&quot;</span><span style="color:#D4D4D4;">: {</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                            &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg&quot;</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                            &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                          },</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;src_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                        }</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;res_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                  }</span></span>
<span class="line"><span style="color:#D4D4D4;">                ]</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;2095498218&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;decoration_card&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;big_card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_type_name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;免费&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;fan&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#a465e5&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;color_format&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;colors&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;#a465e5FF&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;#a465e5FF&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;end_point&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0,100&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;gradients&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#B5CEA8;">                    0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#B5CEA8;">                    100</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;start_point&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0,0&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;is_fan&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;num_desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;002272&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;number&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2272</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68557</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;item_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68557</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=68557&amp;isdiy=0&amp;part=card&amp;from=post&amp;f_source=garb&amp;vmid=2095498218&amp;native.theme=1&amp;navhide=1&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空粉丝&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;face&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;face_nft&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;following&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//space.bilibili.com/2095498218/dynamic&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2095498218</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;次元壁小宋&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;official_verify&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">-1</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pendant&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;expire&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance_frame&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;n_pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68553</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68553</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;投稿了视频&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_location_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_time&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;04月06日&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_ts&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1743947991</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;AUTHOR_TYPE_NORMAL&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;vip&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar_subscript&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar_subscript_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;due_date&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1683129600000</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;label&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bg_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bg_style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;border_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hans&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hans_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hant&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hant_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label_theme&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;path&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;use_img_label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;nickname_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;theme_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_dynamic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;additional&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;major&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;archive&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;aid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;114291361449486&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;badge&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;bg_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#FB7299&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#FFFFFF&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;icon_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;投稿视频&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bvid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;BV15tR6YEEGN&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;cover&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;http://i1.hdslb.com/bfs/archive/f53a964d2438e44db579a2ff373b49e57ea9c752.jpg&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;-&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;disable_preview&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;duration_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;10:26&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//www.bilibili.com/video/BV15tR6YEEGN/&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;stat&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;danmaku&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;play&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;152&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;title&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;有这一款游戏，爆率逆天没有别的（封神）&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;MAJOR_TYPE_ARCHIVE&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;topic&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_interaction&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;items&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;desc&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;rich_text_nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;长安不见-雪&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;rid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;3546712641636719&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;长安不见-雪&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_AT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot; 赞了&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot; 赞了&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_TEXT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            ]</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_more&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;three_point_items&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;置顶&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;params&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dynamic_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1052737677322878980&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;THREE_POINT_TOP&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;删除&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;modal&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;cancel&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;取消&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;confirm&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;确认删除&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;视频删除后将无法恢复，请谨慎操作&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;title&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;删除动态会同时删除视频稿件&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;params&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dyn_id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1052737677322878980&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dyn_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">8</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;rid_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;114291361449486&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;THREE_POINT_DELETE&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            ]</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_stat&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;comment&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;forward&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;like&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          }</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;DYNAMIC_TYPE_AV&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;basic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;comment_id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1050478468672782345&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;comment_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;like_icon&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;action_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/cb34de5fbca6b8507adf7364ae785822b74df1f9.bin&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;end_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68554</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;start_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;rid_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1050478468672782345&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1050478468672782345&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;modules&quot;</span><span style="color:#D4D4D4;">: {</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                            &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg&quot;</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                            &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                          },</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;src_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                        }</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;res_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                  }</span></span>
<span class="line"><span style="color:#D4D4D4;">                ]</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;2095498218&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;decoration_card&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;big_card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_type_name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;免费&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;fan&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#a465e5&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;color_format&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;colors&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;#a465e5FF&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;#a465e5FF&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;end_point&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0,100&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;gradients&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#B5CEA8;">                    0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#B5CEA8;">                    100</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;start_point&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0,0&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;is_fan&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;num_desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;002272&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;number&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2272</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68557</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;item_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68557</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=68557&amp;isdiy=0&amp;part=card&amp;from=post&amp;f_source=garb&amp;vmid=2095498218&amp;native.theme=1&amp;navhide=1&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空粉丝&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;face&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;face_nft&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;following&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//space.bilibili.com/2095498218/dynamic&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2095498218</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;次元壁小宋&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;official_verify&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">-1</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pendant&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;expire&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance_frame&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;n_pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68553</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68553</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_location_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_time&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;03月31日&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_ts&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1743421978</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;AUTHOR_TYPE_NORMAL&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;vip&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar_subscript&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar_subscript_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;due_date&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1683129600000</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;label&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bg_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bg_style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;border_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hans&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hans_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hant&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hant_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label_theme&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;path&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;use_img_label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;nickname_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;theme_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_dynamic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;additional&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;desc&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;rich_text_nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;我昨晚也有Bug，打航天基地的爆破第二局后我的，趴下滑铲不知道咋回事就点不了跳跃键也点不了然后就只能点开火键和操作键，投掷物能丢以外其他啥也干不了，只能跟人机样送一整局就输了&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;我昨晚也有Bug，打航天基地的爆破第二局后我的，趴下滑铲不知道咋回事就点不了跳跃键也点不了然后就只能点开火键和操作键，投掷物能丢以外其他啥也干不了，只能跟人机样送一整局就输了&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_TEXT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#D4D4D4;">                {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;emoji&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;icon_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/emote/493b36cbadea2356f09933b39e49c5a2f8f625b8.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;[坠落·空_自闭]&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span></span>
<span class="line"><span style="color:#D4D4D4;">                  },</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;[坠落·空_自闭]&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;[坠落·空_自闭]&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_EMOJI&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#D4D4D4;">                {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;emoji&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;icon_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/emote/86c614f2d21263387fa7ef168450ccd69cce9a0b.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;[坠落·空_哭泣]&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span></span>
<span class="line"><span style="color:#D4D4D4;">                  },</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;[坠落·空_哭泣]&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;[坠落·空_哭泣]&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_EMOJI&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              ],</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;我昨晚也有Bug，打航天基地的爆破第二局后我的，趴下滑铲不知道咋回事就点不了跳跃键也点不了然后就只能点开火键和操作键，投掷物能丢以外其他啥也干不了，只能跟人机样送一整局就输了[坠落·空_自闭][坠落·空_哭泣]&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;major&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;topic&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_interaction&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;items&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;desc&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;rich_text_nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;长安不见-雪&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;rid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;3546712641636719&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;长安不见-雪&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_AT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot; 赞了&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot; 赞了&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_TEXT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            ]</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_more&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;three_point_items&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;置顶&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;params&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dynamic_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1050478468672782345&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;THREE_POINT_TOP&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;删除&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;modal&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;cancel&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;取消&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;confirm&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;确认删除&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;动态删除后将无法恢复，请谨慎操作&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;title&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;要删除动态吗？&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;params&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dyn_id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1050478468672782345&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dyn_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;rid_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1050478468672782345&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;THREE_POINT_DELETE&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            ]</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_stat&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;comment&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;forward&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;like&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          }</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;orig&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;basic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;comment_id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;comment_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;like_icon&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;action_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;end_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;start_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;rid_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1049725573770772488&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;modules&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;module_author&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;container_size&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1.35</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1.35</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;fallback_layers&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;is_critical_group&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;layers&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;general_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;pos_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;axis_x&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.675</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;axis_y&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.675</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;coordinate_pos&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;render_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;opacity&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;size_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                              &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i2.hdslb.com/bfs/face/ad1944a6564f065fae1b5d7ee963d08c900fe8d3.jpg&quot;</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;289949153&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;decoration_card&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;big_card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/vip/e2ffa1d1d491fe0464338ed3921327ef5e4b42c5.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;card_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;card_type_name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;免费&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/vip/a9e3d993c7a15e88ce0bf714a142f7d2b44121e2.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;fan&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">28</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/vip/a9e3d993c7a15e88ce0bf714a142f7d2b44121e2.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;item_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">28</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=28&amp;isdiy=0&amp;part=card&amp;from=post&amp;f_source=garb&amp;vmid=289949153&amp;native.theme=1&amp;navhide=1&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;2233娘&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;face&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i2.hdslb.com/bfs/face/ad1944a6564f065fae1b5d7ee963d08c900fe8d3.jpg&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;face_nft&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;following&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//space.bilibili.com/289949153/dynamic&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">289949153</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;谁是fufu&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;official_verify&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">-1</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pendant&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;expire&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;image&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;image_enhance_frame&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;n_pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pub_action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;投稿了视频&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pub_time&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pub_ts&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1743246681</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;AUTHOR_TYPE_NORMAL&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;vip&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;avatar_subscript&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;avatar_subscript_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;due_date&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1743350400000</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;bg_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;bg_style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;border_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;img_label_uri_hans&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;img_label_uri_hans_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;img_label_uri_hant&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;img_label_uri_hant_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;label_theme&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;path&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;use_img_label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;nickname_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;theme_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;module_dynamic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;additional&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;major&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;archive&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;aid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;114245391947434&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;badge&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;bg_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#FB7299&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#FFFFFF&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;icon_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;投稿视频&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                  },</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;bvid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;BV1vmZAYDEcT&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;cover&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;http://i0.hdslb.com/bfs/archive/d3ccb1bd474d55cc4415e073d21f1c8a3d12c22d.jpg&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;-&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;disable_preview&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;duration_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;02:43&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//www.bilibili.com/video/BV1vmZAYDEcT/&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;stat&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;danmaku&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;49&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;play&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;6.5万&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                  },</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;title&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;上号成为人机了！是BUG还是分身？&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;MAJOR_TYPE_ARCHIVE&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;topic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1061343</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://m.bilibili.com/topic-detail?topic_id=1061343&amp;topic_name=%E4%BD%BF%E5%91%BD%E5%8F%AC%E5%94%A4%E6%89%8B%E6%B8%B8%E8%AE%B0%E5%BD%95&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;使命召唤手游记录&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;DYNAMIC_TYPE_AV&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;DYNAMIC_TYPE_FORWARD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;basic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;comment_id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1049490226780569608&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;comment_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;like_icon&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;action_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/cb34de5fbca6b8507adf7364ae785822b74df1f9.bin&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;end_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68554</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;start_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;rid_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1049490226780569608&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1049490226780569608&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;modules&quot;</span><span style="color:#D4D4D4;">: {</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                            &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg&quot;</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                            &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                          },</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;src_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                        }</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;res_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                  }</span></span>
<span class="line"><span style="color:#D4D4D4;">                ]</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;2095498218&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;decoration_card&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;big_card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_type_name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;免费&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;fan&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#a465e5&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;color_format&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;colors&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;#a465e5FF&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;#a465e5FF&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;end_point&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0,100&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;gradients&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#B5CEA8;">                    0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#B5CEA8;">                    100</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;start_point&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0,0&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;is_fan&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;num_desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;002272&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;number&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2272</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68557</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;item_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68557</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=68557&amp;isdiy=0&amp;part=card&amp;from=post&amp;f_source=garb&amp;vmid=2095498218&amp;native.theme=1&amp;navhide=1&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空粉丝&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;face&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;face_nft&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;following&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//space.bilibili.com/2095498218/dynamic&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2095498218</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;次元壁小宋&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;official_verify&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">-1</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pendant&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;expire&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance_frame&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;n_pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68553</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68553</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_location_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_time&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;03月29日&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_ts&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1743191885</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;AUTHOR_TYPE_NORMAL&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;vip&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar_subscript&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar_subscript_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;due_date&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1683129600000</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;label&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bg_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bg_style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;border_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hans&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hans_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hant&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hant_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label_theme&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;path&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;use_img_label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;nickname_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;theme_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_dynamic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;additional&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;desc&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;rich_text_nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;回复 &quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;回复 &quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_TEXT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#D4D4D4;">                {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;@狂热的地幔&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;rid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1333987156&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;@狂热的地幔&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_AT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#D4D4D4;">                {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot; :我试过玩上一个月删了，然后现在我又想玩不知道为什么玩几天又想删&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot; :我试过玩上一个月删了，然后现在我又想玩不知道为什么玩几天又想删&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_TEXT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#D4D4D4;">                {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;emoji&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;icon_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/emote/c3043ba94babf824dea03ce500d0e73763bf4f40.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;size&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;[笑哭]&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                  },</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;[笑哭]&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;[笑哭]&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_EMOJI&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              ],</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;回复 @狂热的地幔 :我试过玩上一个月删了，然后现在我又想玩不知道为什么玩几天又想删[笑哭]&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;major&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;topic&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_interaction&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;items&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;desc&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;rich_text_nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;长安不见-雪&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;rid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;3546712641636719&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;长安不见-雪&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_AT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot; 赞了&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot; 赞了&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_TEXT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            ]</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_more&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;three_point_items&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;置顶&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;params&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dynamic_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1049490226780569608&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;THREE_POINT_TOP&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;删除&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;modal&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;cancel&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;取消&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;confirm&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;确认删除&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;动态删除后将无法恢复，请谨慎操作&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;title&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;要删除动态吗？&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;params&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dyn_id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1049490226780569608&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dyn_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;rid_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1049490226780569608&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;THREE_POINT_DELETE&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            ]</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_stat&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;comment&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;forward&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;like&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          }</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;orig&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;basic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;comment_id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;comment_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;like_icon&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;action_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;end_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;start_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;rid_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1049336535656169477&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;modules&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;module_author&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;container_size&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1.35</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1.35</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;fallback_layers&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;is_critical_group&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;layers&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;general_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;pos_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;axis_x&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.675</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;axis_y&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.675</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;coordinate_pos&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;render_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;opacity&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;size_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                              &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i1.hdslb.com/bfs/face/929fb162c6eb9f81b55b67b3016364a3d00fb437.jpg&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                            },</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;src_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                          }</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;res_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;general_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;pos_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;axis_x&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.8000000000000002</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;axis_y&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.8000000000000002</span><span style="color:#D4D4D4;">,</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                                &quot;background-color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;rgb(255,255,255)&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                                &quot;border&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;2px solid rgba(255,255,255,1)&quot;</span><span style="color:#D4D4D4;">,</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                            &quot;local&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;src_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                          }</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;res_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;497979931&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;decoration_card&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;big_card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/vip/40b8bef91ed10dd8c2b9302d85db76c5f1f3c292.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;card_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;card_type_name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;免费&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/vip/99f54078df2412394140aa5df4422bc0a1ca3d3e.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;fan&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/vip/99f54078df2412394140aa5df4422bc0a1ca3d3e.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;item_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=5&amp;isdiy=0&amp;part=card&amp;from=post&amp;f_source=garb&amp;vmid=497979931&amp;native.theme=1&amp;navhide=1&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;33娘&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;face&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i1.hdslb.com/bfs/face/929fb162c6eb9f81b55b67b3016364a3d00fb437.jpg&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;face_nft&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;following&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//space.bilibili.com/497979931/dynamic&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">497979931</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;冰林L&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;official_verify&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pendant&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;expire&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;image&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;image_enhance_frame&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;n_pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pub_action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;投稿了视频&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pub_time&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pub_ts&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1743156101</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;AUTHOR_TYPE_NORMAL&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;vip&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;avatar_subscript&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;avatar_subscript_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;due_date&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1745856000000</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;bg_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;bg_style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;border_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;img_label_uri_hans&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;img_label_uri_hans_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;img_label_uri_hant&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;img_label_uri_hant_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;label_theme&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;path&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;use_img_label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;nickname_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;theme_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;module_dynamic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;additional&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;major&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;archive&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;aid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;114239469520401&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;badge&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;bg_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#FB7299&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#FFFFFF&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;icon_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;投稿视频&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                  },</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;bvid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;BV1E7oXYhEhp&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;cover&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;http://i2.hdslb.com/bfs/archive/db15a6d18cdf6cef3cb41b9d9f11847b5c950bc4.jpg&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;我知道MC不是我生活的全部，但我希望他能陪我更久一点，未来我可能会去尝试做一些MC动画，或者其他的游戏。&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;disable_preview&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;duration_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;02:39&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//www.bilibili.com/video/BV1E7oXYhEhp/&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;stat&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;danmaku&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;548&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;play&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;31.2万&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                  },</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;title&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;做MC视频10年了，为什么MC越来越无聊了…&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;MAJOR_TYPE_ARCHIVE&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;topic&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;DYNAMIC_TYPE_AV&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;DYNAMIC_TYPE_FORWARD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;basic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;comment_id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1046005002557980674&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;comment_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;like_icon&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;action_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/cb34de5fbca6b8507adf7364ae785822b74df1f9.bin&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;end_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68554</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;start_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;rid_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1046376087871815681&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1046005002557980674&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;modules&quot;</span><span style="color:#D4D4D4;">: {</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                            &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg&quot;</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                            &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                          },</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;src_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                        }</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;res_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                  }</span></span>
<span class="line"><span style="color:#D4D4D4;">                ]</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;2095498218&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;decoration_card&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;big_card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_type_name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;免费&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;fan&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#a465e5&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;color_format&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;colors&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;#a465e5FF&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;#a465e5FF&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;end_point&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0,100&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;gradients&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#B5CEA8;">                    0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#B5CEA8;">                    100</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;start_point&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0,0&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;is_fan&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;num_desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;002272&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;number&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2272</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68557</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;item_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68557</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=68557&amp;isdiy=0&amp;part=card&amp;from=post&amp;f_source=garb&amp;vmid=2095498218&amp;native.theme=1&amp;navhide=1&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空粉丝&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;face&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;face_nft&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;following&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//space.bilibili.com/2095498218/dynamic&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2095498218</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;次元壁小宋&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;official_verify&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">-1</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pendant&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;expire&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance_frame&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;n_pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68553</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68553</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_location_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_time&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;03月19日&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_ts&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1742380418</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;AUTHOR_TYPE_NORMAL&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;vip&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar_subscript&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar_subscript_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;due_date&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1683129600000</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;label&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bg_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bg_style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;border_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hans&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hans_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hant&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hant_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label_theme&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;path&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;use_img_label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;nickname_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;theme_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_dynamic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;additional&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;desc&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;rich_text_nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//search.bilibili.com/all?keyword=bilibili%E4%B8%AA%E6%80%A7%E8%A3%85%E6%89%AE&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#bilibili个性装扮#&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#bilibili个性装扮#&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_TOPIC&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#D4D4D4;">                {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot; 我正在使用“坠落·空”头像挂件，你也来试试~&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot; 我正在使用“坠落·空”头像挂件，你也来试试~&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_TEXT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              ],</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#bilibili个性装扮# 我正在使用“坠落·空”头像挂件，你也来试试~&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;major&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;common&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;badge&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;bg_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#FB7299&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#ffffff&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;装扮&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;biz_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;biz_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">231</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;cover&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;挂件&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1046376087871815681&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://www.bilibili.com/h5/mall/equity-link/collect-home?f_source=dynamic&amp;from=share&amp;isdiy=0&amp;item_id=68595&amp;native.theme=1&amp;navhide=1&amp;part=pendant&amp;q=953008717620250319183338&amp;vmid=2095498218&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;sketch_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1046376087871815680&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;title&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;MAJOR_TYPE_COMMON&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;topic&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_more&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;three_point_items&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;置顶&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;params&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dynamic_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1046005002557980674&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;THREE_POINT_TOP&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;删除&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;modal&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;cancel&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;取消&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;confirm&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;确认删除&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;动态删除后将无法恢复，请谨慎操作&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;title&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;要删除动态吗？&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;params&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dyn_id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1046005002557980674&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dyn_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2048</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;rid_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1046376087871815681&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;THREE_POINT_DELETE&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            ]</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_stat&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;comment&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;forward&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;like&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          }</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;DYNAMIC_TYPE_COMMON_SQUARE&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;basic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;comment_id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1044401021238902802&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;comment_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;like_icon&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;action_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/cb34de5fbca6b8507adf7364ae785822b74df1f9.bin&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;end_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68554</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;start_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;rid_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1044401021238902802&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1044401021238902802&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;modules&quot;</span><span style="color:#D4D4D4;">: {</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                            &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg&quot;</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                            &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                          },</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;src_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                        }</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;res_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                  }</span></span>
<span class="line"><span style="color:#D4D4D4;">                ]</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;2095498218&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;decoration_card&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;big_card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_type_name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;免费&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;fan&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#a465e5&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;color_format&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;colors&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;#a465e5FF&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;#a465e5FF&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;end_point&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0,100&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;gradients&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#B5CEA8;">                    0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#B5CEA8;">                    100</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;start_point&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0,0&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;is_fan&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;num_desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;002272&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;number&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2272</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68557</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;item_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68557</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=68557&amp;isdiy=0&amp;part=card&amp;from=post&amp;f_source=garb&amp;vmid=2095498218&amp;native.theme=1&amp;navhide=1&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空粉丝&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;face&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;face_nft&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;following&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//space.bilibili.com/2095498218/dynamic&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2095498218</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;次元壁小宋&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;official_verify&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">-1</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pendant&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;expire&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance_frame&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;n_pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68553</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68553</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_location_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_time&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;03月15日&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_ts&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1742006962</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;AUTHOR_TYPE_NORMAL&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;vip&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar_subscript&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar_subscript_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;due_date&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1683129600000</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;label&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bg_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bg_style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;border_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hans&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hans_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hant&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hant_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label_theme&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;path&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;use_img_label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;nickname_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;theme_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_dynamic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;additional&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;desc&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;rich_text_nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;我参与了投票&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;我参与了投票&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_TEXT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#D4D4D4;">                {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;​视频类型&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;rid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;14746295&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;​视频类型&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_VOTE&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#D4D4D4;">                {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;我投给了我想看抽象的2D动画&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;我投给了我想看抽象的2D动画&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_TEXT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              ],</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;我参与了投票​视频类型我投给了我想看抽象的2D动画&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;major&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;topic&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_interaction&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;items&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;desc&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;rich_text_nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;长安不见-雪&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;rid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;3546712641636719&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;长安不见-雪&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_AT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot; 赞了&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot; 赞了&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_TEXT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            ]</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_more&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;three_point_items&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;置顶&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;params&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dynamic_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1044401021238902802&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;THREE_POINT_TOP&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;删除&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;modal&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;cancel&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;取消&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;confirm&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;确认删除&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;动态删除后将无法恢复，请谨慎操作&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;title&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;要删除动态吗？&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;params&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dyn_id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1044401021238902802&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dyn_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;rid_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1044401021238902802&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;THREE_POINT_DELETE&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            ]</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_stat&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;comment&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;forward&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;like&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          }</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;orig&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;basic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;comment_id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;comment_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//www.bilibili.com/opus/1044394265267929093&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;like_icon&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;action_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;end_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;start_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;rid_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1044394265267929093&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;modules&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;module_author&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;container_size&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1.375</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1.375</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;fallback_layers&quot;</span><span style="color:#D4D4D4;">: {</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                              &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i1.hdslb.com/bfs/face/4e08982dd07abbdf86f35a68483424b743f07730.jpg&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                            },</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;src_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                          }</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;res_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                        &quot;res_image&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;image_src&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;remote&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                              &quot;bfs_style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;widget-layer-avatar&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                              &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i1.hdslb.com/bfs/face/5bb7bef5107e448892ab54539298d50eb678de05.png&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                            },</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;src_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                          }</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;res_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                                &quot;background-color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;rgb(255,255,255)&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                                &quot;border&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;2px solid rgba(255,255,255,1)&quot;</span><span style="color:#D4D4D4;">,</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                            &quot;local&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                            &quot;src_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                          }</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;res_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                    }</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1142084989&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;decoration_card&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;big_card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/archive/7e0eed18747150fa233ba6994489b9096f1d9fe8.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;card_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;card_type_name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;免费&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/archive/7e0eed18747150fa233ba6994489b9096f1d9fe8.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;fan&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#BFC8D2&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;color_format&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;colors&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">                      &quot;#B8C7D0FF&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">                      &quot;#A2A7B0FF&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;end_point&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;100,100&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;gradients&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#B5CEA8;">                      0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#B5CEA8;">                      100</span></span>
<span class="line"><span style="color:#D4D4D4;">                    ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;start_point&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0,0&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                  },</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;is_fan&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;XXXX&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;num_desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;047769&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;number&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">47769</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">66945</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/archive/7e0eed18747150fa233ba6994489b9096f1d9fe8.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;item_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">66945</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://www.bilibili.com/h5/mall/digital-card/home?act_id=101116&amp;from=post&amp;f_source=garb&amp;-Abrowser=live&amp;hybrid_set_header=2&amp;navhide=1&amp;anchor_task=1&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;初音未来三连快乐勋章&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;face&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i1.hdslb.com/bfs/face/4e08982dd07abbdf86f35a68483424b743f07730.jpg&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;face_nft&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;following&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//space.bilibili.com/1142084989/dynamic&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1142084989</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;不抽象的真菌零_Jack&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;official_verify&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pendant&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;expire&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;image&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i1.hdslb.com/bfs/face/5bb7bef5107e448892ab54539298d50eb678de05.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i1.hdslb.com/bfs/face/5bb7bef5107e448892ab54539298d50eb678de05.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;image_enhance_frame&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;n_pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">294</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;茶啊二中&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">294</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pub_action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pub_time&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pub_ts&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1742005389</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;AUTHOR_TYPE_NORMAL&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;vip&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;avatar_subscript&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;avatar_subscript_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;due_date&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1751558400000</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;bg_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#FB7299&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;bg_style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;border_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;img_label_uri_hans&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;img_label_uri_hans_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/vip/3788b674c69072f1ee252b79a31ecc8c43af3039.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;img_label_uri_hant&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;img_label_uri_hant_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/jwXBWRVwa5.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;label_theme&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vip&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;path&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;大会员&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#FFFFFF&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;use_img_label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;nickname_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#FB7299&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;theme_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;module_dynamic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;additional&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;ADDITIONAL_TYPE_VOTE&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;vote&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;button&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;jump_style&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;参与&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                  },</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;choice_cnt&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;default_share&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;153人参与&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;end_time&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1742091752</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;join_num&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">153</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;title&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;视频类型&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;uid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1142084989</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;vote_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">14746295</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;major&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;opus&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;fold_action&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;展开&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;收起&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//www.bilibili.com/opus/1044394265267929093&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;pics&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;summary&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;rich_text_nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                      {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;投票&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;投票&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_TEXT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#D4D4D4;">                      {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;​视频类型&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;rid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;14746295&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;​视频类型&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_VOTE&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;投票​视频类型&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                  },</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;title&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;MAJOR_TYPE_OPUS&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;topic&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;DYNAMIC_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;DYNAMIC_TYPE_FORWARD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;basic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;comment_id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1044400750626603011&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;comment_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;like_icon&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;action_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/cb34de5fbca6b8507adf7364ae785822b74df1f9.bin&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;end_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68554</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;start_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;rid_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1044400750626603011&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1044400750626603011&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;modules&quot;</span><span style="color:#D4D4D4;">: {</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                            &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg&quot;</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                            &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                          },</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;src_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                        }</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;res_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                  }</span></span>
<span class="line"><span style="color:#D4D4D4;">                ]</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;2095498218&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;decoration_card&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;big_card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_type_name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;免费&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;fan&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#a465e5&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;color_format&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;colors&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;#a465e5FF&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;#a465e5FF&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;end_point&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0,100&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;gradients&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#B5CEA8;">                    0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#B5CEA8;">                    100</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;start_point&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0,0&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;is_fan&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;num_desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;002272&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;number&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2272</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68557</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;item_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68557</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=68557&amp;isdiy=0&amp;part=card&amp;from=post&amp;f_source=garb&amp;vmid=2095498218&amp;native.theme=1&amp;navhide=1&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空粉丝&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;face&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;face_nft&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;following&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//space.bilibili.com/2095498218/dynamic&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2095498218</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;次元壁小宋&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;official_verify&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">-1</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pendant&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;expire&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance_frame&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;n_pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68553</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68553</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_location_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_time&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;03月15日&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_ts&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1742006899</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;AUTHOR_TYPE_NORMAL&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;vip&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar_subscript&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar_subscript_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;due_date&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1683129600000</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;label&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bg_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bg_style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;border_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hans&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hans_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hant&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hant_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label_theme&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;path&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;use_img_label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;nickname_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;theme_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_dynamic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;additional&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;desc&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;rich_text_nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;我参与了投票&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;我参与了投票&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_TEXT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#D4D4D4;">                {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;​你们的头像是&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;rid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;14514807&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;​你们的头像是&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_VOTE&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#D4D4D4;">                {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;我投给了女性&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;我投给了女性&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_TEXT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              ],</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;我参与了投票​你们的头像是我投给了女性&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;major&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;topic&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_more&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;three_point_items&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;置顶&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;params&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dynamic_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1044400750626603011&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;THREE_POINT_TOP&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;删除&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;modal&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;cancel&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;取消&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;confirm&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;确认删除&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;动态删除后将无法恢复，请谨慎操作&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;title&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;要删除动态吗？&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;params&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dyn_id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1044400750626603011&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dyn_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;rid_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1044400750626603011&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;THREE_POINT_DELETE&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            ]</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_stat&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;comment&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;forward&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;like&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          }</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;orig&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;basic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;comment_id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;comment_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//www.bilibili.com/opus/1034151558512640008&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;like_icon&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;action_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;end_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;start_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;rid_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1034151558512640008&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;modules&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;module_author&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;container_size&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1.35</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1.35</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;fallback_layers&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;is_critical_group&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;layers&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;general_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;pos_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;axis_x&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.675</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;axis_y&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.675</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;coordinate_pos&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;render_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;opacity&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;size_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                              &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i1.hdslb.com/bfs/face/3c35c94e5c9fc5aad09052078339ec9faf1aad87.jpg&quot;</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1403650486&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;face&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i1.hdslb.com/bfs/face/3c35c94e5c9fc5aad09052078339ec9faf1aad87.jpg&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;face_nft&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;following&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//space.bilibili.com/1403650486/dynamic&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1403650486</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;小邓Channel&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;official_verify&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">-1</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pendant&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;expire&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;image&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;image_enhance_frame&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;n_pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pub_action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pub_time&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pub_ts&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1739620573</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;AUTHOR_TYPE_NORMAL&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;vip&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;avatar_subscript&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;avatar_subscript_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;due_date&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1711382400000</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;bg_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;bg_style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;border_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;img_label_uri_hans&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;img_label_uri_hans_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;img_label_uri_hant&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;img_label_uri_hant_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;label_theme&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;path&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;use_img_label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;nickname_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;theme_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;module_dynamic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;additional&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;ADDITIONAL_TYPE_VOTE&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;vote&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;button&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;jump_style&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;参与&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                  },</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;choice_cnt&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;default_share&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1135人参与&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;end_time&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1742039701</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;join_num&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1135</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;title&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;你们的头像是&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;uid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1403650486</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;vote_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">14514807</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;major&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;opus&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;fold_action&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;展开&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;收起&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//www.bilibili.com/opus/1034151558512640008&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;pics&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;summary&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;rich_text_nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                      {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;我发起了一个投票&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;我发起了一个投票&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_TEXT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#D4D4D4;">                      {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;​你们的头像是&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;rid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;14514807&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;​你们的头像是&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_VOTE&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;我发起了一个投票​你们的头像是&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                  },</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;title&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;MAJOR_TYPE_OPUS&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;topic&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;DYNAMIC_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;DYNAMIC_TYPE_FORWARD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;basic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;comment_id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1044400681921806345&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;comment_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;like_icon&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;action_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/cb34de5fbca6b8507adf7364ae785822b74df1f9.bin&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;end_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68554</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;start_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;rid_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1044400681921806345&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1044400681921806345&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;modules&quot;</span><span style="color:#D4D4D4;">: {</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                            &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg&quot;</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                            &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                          },</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;src_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                        }</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;res_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                  }</span></span>
<span class="line"><span style="color:#D4D4D4;">                ]</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;2095498218&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;decoration_card&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;big_card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_type_name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;免费&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;card_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;fan&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#a465e5&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;color_format&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;colors&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;#a465e5FF&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;#a465e5FF&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;end_point&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0,100&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;gradients&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#B5CEA8;">                    0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#B5CEA8;">                    100</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;start_point&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;0,0&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;is_fan&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;num_desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;002272&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;number&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2272</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68557</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/5f6f72f12f56a8217913f29ef991171c897ab443.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;item_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68557</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=68557&amp;isdiy=0&amp;part=card&amp;from=post&amp;f_source=garb&amp;vmid=2095498218&amp;native.theme=1&amp;navhide=1&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空粉丝&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;face&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/face/3f77a9eeb6aa503bd5e0353865d6d737e4ff69c1.jpg&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;face_nft&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;following&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//space.bilibili.com/2095498218/dynamic&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2095498218</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;次元壁小宋&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;official_verify&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">-1</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pendant&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;expire&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/garb/item/640b9ee5a12d77bb7431cfc9c815dd25c05f9915.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;image_enhance_frame&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;n_pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68553</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;坠落·空&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">68553</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_location_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_time&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;03月15日&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;pub_ts&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1742006883</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;AUTHOR_TYPE_NORMAL&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;vip&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar_subscript&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar_subscript_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;due_date&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1683129600000</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;label&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bg_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;bg_style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;border_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hans&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hans_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hant&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;img_label_uri_hant_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label_theme&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;path&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;text_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;use_img_label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;nickname_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;theme_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_dynamic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;additional&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;desc&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;rich_text_nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;我参与了投票&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;我参与了投票&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_TEXT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#D4D4D4;">                {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;​你们露过声吗？&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;rid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;14689974&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;​你们露过声吗？&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_VOTE&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#D4D4D4;">                {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;我投给了没露过&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;我投给了没露过&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_TEXT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              ],</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;我参与了投票​你们露过声吗？我投给了没露过&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;major&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;topic&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_more&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;three_point_items&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;置顶&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;params&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dynamic_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1044400681921806345&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;THREE_POINT_TOP&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;删除&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;modal&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;cancel&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;取消&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;confirm&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;确认删除&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;content&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;动态删除后将无法恢复，请谨慎操作&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;title&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;要删除动态吗？&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;params&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dyn_id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1044400681921806345&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;dyn_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;rid_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1044400681921806345&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;THREE_POINT_DELETE&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            ]</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;module_stat&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;comment&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;forward&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;like&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;forbidden&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          }</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;orig&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;basic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;comment_id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;comment_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//www.bilibili.com/opus/1041900177728733184&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;like_icon&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;action_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;end_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;start_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;rid_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;id_str&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1041900177728733184&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;modules&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;module_author&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;avatar&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;container_size&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1.35</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1.35</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;fallback_layers&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;is_critical_group&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;layers&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                    {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;general_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;pos_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;axis_x&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.675</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;axis_y&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0.675</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;coordinate_pos&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;render_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;opacity&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                        },</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;size_spec&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;height&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                          &quot;width&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                              &quot;url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i2.hdslb.com/bfs/face/70af6734f5e92c4345c592b099200b9519fdac23.jpg&quot;</span></span>
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
<span class="line"><span style="color:#9CDCFE;">                &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;3546855879215762&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;face&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i2.hdslb.com/bfs/face/70af6734f5e92c4345c592b099200b9519fdac23.jpg&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;face_nft&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;following&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//space.bilibili.com/3546855879215762/dynamic&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;mid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3546855879215762</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;爱玩休闲区的樱梦雪&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;official_verify&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">-1</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pendant&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;expire&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;image&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;image_enhance&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;image_enhance_frame&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;n_pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;pid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pub_action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pub_time&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;pub_ts&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1741424689</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;AUTHOR_TYPE_NORMAL&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;vip&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;avatar_subscript&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;avatar_subscript_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;due_date&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;label&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;bg_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;bg_style&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;border_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;img_label_uri_hans&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;img_label_uri_hans_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;img_label_uri_hant&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;img_label_uri_hant_static&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;label_theme&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;path&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;text_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;use_img_label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;nickname_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;theme_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#9CDCFE;">            &quot;module_dynamic&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;additional&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;ADDITIONAL_TYPE_VOTE&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;vote&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;button&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;jump_style&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                      &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;参与&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                    },</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"><span style="color:#D4D4D4;">                  },</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;choice_cnt&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;default_share&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;818人参与&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;end_time&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1743239041</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;join_num&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">818</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;status&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;title&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;你们露过声吗？&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;uid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3546855879215762</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;vote_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">14689974</span></span>
<span class="line"><span style="color:#D4D4D4;">                }</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;desc&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;major&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;opus&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;fold_action&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;展开&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">                    &quot;收起&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;jump_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;//www.bilibili.com/opus/1041900177728733184&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;pics&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;summary&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;rich_text_nodes&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">                      {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;我发起了一个投票&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;我发起了一个投票&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_TEXT&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      },</span></span>
<span class="line"><span style="color:#D4D4D4;">                      {</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;orig_text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;​你们露过声吗？&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;rid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;14689974&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;​你们露过声吗？&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">                        &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;RICH_TEXT_NODE_TYPE_VOTE&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                      }</span></span>
<span class="line"><span style="color:#D4D4D4;">                    ],</span></span>
<span class="line"><span style="color:#9CDCFE;">                    &quot;text&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;我发起了一个投票​你们露过声吗？&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                  },</span></span>
<span class="line"><span style="color:#9CDCFE;">                  &quot;title&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">                },</span></span>
<span class="line"><span style="color:#9CDCFE;">                &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;MAJOR_TYPE_OPUS&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">              },</span></span>
<span class="line"><span style="color:#9CDCFE;">              &quot;topic&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;DYNAMIC_TYPE_WORD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;DYNAMIC_TYPE_FORWARD&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        &quot;visible&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    ],</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;offset&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1044400681921806345&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;update_baseline&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;update_num&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="设置置顶动态" tabindex="-1"><a class="header-anchor" href="#设置置顶动态"><span>设置置顶动态</span></a></h2>`,4)),s("p",null,[n[36]||(n[36]=a("参见 ")),o(l,{to:"/docs/dynamic/action.html#%E8%AE%BE%E7%BD%AE%E7%BD%AE%E9%A1%B6%E5%8A%A8%E6%80%81"},{default:p(()=>n[35]||(n[35]=[a("设置置顶动态")])),_:1,__:[35]})]),n[42]||(n[42]=s("h2",{id:"取消置顶动态",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#取消置顶动态"},[s("span",null,"取消置顶动态")])],-1)),s("p",null,[n[38]||(n[38]=a("参见 ")),o(l,{to:"/docs/dynamic/action.html#%E5%8F%96%E6%B6%88%E7%BD%AE%E9%A1%B6%E5%8A%A8%E6%80%81"},{default:p(()=>n[37]||(n[37]=[a("取消置顶动态")])),_:1,__:[37]})])])}const v=t(r,[["render",u]]),q=JSON.parse('{"path":"/docs/dynamic/space.html","title":"用户空间动态","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1750530532000,"contributors":[{"name":"7rikka","username":"7rikka","email":"takanashirikkax@gmail.com","commits":1,"url":"https://github.com/7rikka"},{"name":"SocialSisterYi","username":"SocialSisterYi","email":"1440239038@qq.com","commits":1,"url":"https://github.com/SocialSisterYi"},{"name":"Zhengyang Song","username":"","email":"songzy_thu@163.com","commits":1},{"name":"z0z0r4","username":"z0z0r4","email":"z0z0r4@outlook.com","commits":1,"url":"https://github.com/z0z0r4"},{"name":"W1ndys","username":"W1ndys","email":"w1ndys@outlook.com","commits":1,"url":"https://github.com/W1ndys"},{"name":"SessionHu","username":"SessionHu","email":"102411014+SessionHu@users.noreply.github.com","commits":7,"url":"https://github.com/SessionHu"},{"name":"114514ns","username":"114514ns","email":"121270969+114514ns@users.noreply.github.com","commits":1,"url":"https://github.com/114514ns"}],"changelog":[{"hash":"2f48f6c81ab400d03ac40921b25906ad8719e725","time":1750530532000,"email":"121270969+114514ns@users.noreply.github.com","author":"114514ns","message":"添加部分直播相关api (#1297)"},{"hash":"11dee979766e979fc9a52842abb4c915af3bf1ab","time":1746619234000,"email":"102411014+SessionHu@users.noreply.github.com","author":"SessionHu","message":"feat: 取消置顶动态"},{"hash":"4d20caed1eb9151b8f51dbeadbc9a403121873d2","time":1746597381000,"email":"102411014+SessionHu@users.noreply.github.com","author":"SessionHu","message":"feat: 置顶动态"},{"hash":"44f77f147186d4a7893f5d36a9e7d5dd3f4cd749","time":1746514540000,"email":"102411014+SessionHu@users.noreply.github.com","author":"SessionHu","message":"feat(dynamic/space.md): dm_img desc"},{"hash":"c5211b8712f595612bb2f215d69dad1030d27074","time":1746453287000,"email":"102411014+SessionHu@users.noreply.github.com","author":"SessionHu","message":"refactor(dynamic/space.md): update params and example"},{"hash":"52f0b45812df7fbb55d1538aef940836ac7857ad","time":1746158066000,"email":"102411014+SessionHu@users.noreply.github.com","author":"SessionHu","message":"feat(dynamic/space.md): good luck"},{"hash":"7480789edcbaa2cf770e53668d0d1108a4e7dceb","time":1746157800000,"email":"102411014+SessionHu@users.noreply.github.com","author":"SessionHu","message":"fix(dynamic/space.md): 鉴权方式"},{"hash":"0ff0b6996c39935e38bf6fe0014d8d7e22117345","time":1746072249000,"email":"102411014+SessionHu@users.noreply.github.com","author":"SessionHu","message":"feat: 获取用户空间图文"},{"hash":"f3c23a245484aa924571070998e83e854b8c62da","time":1744515231000,"email":"w1ndys@outlook.com","author":"W1ndys","message":"Update space.md (#1186)"},{"hash":"b52187a48bd05bf985b70ae7fe3afde38c254052","time":1692154766000,"email":"z0z0r4@outlook.com","author":"z0z0r4","message":"feat: <code>features: itemOpusStyle</code> (#787)"},{"hash":"47a157e08b8098ca4f07dc5dae80c0a497b1a62f","time":1689003254000,"email":"songzy_thu@163.com","author":"Zhengyang Song","message":"Fill in the correct API URL of dynamic/space. (#736)"},{"hash":"436f26f15bab7855184e40b21c54ab0e41fb6133","time":1688375040000,"email":"1440239038@qq.com","author":"SocialSisterYi","message":"修正 #517 的路径错误"},{"hash":"37009a289482d51640f16183441cd2788950abd1","time":1687361453000,"email":"takanashirikkax@gmail.com","author":"7rikka","message":"用户动态接口解析 (#517)"}]},"filePathRelative":"docs/dynamic/space.md"}');export{v as comp,q as data};
