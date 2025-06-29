import{_ as n,r as d,o as u,c as s,a as o,b as t,d as a,w as l,e as i}from"./app-abdbac1c.js";const v={},r=i('<h1 id="入站必刷视频" tabindex="-1"><a class="header-anchor" href="#入站必刷视频" aria-hidden="true">#</a> 入站必刷视频</h1><h2 id="获取入站必刷视频" tabindex="-1"><a class="header-anchor" href="#获取入站必刷视频" aria-hidden="true">#</a> 获取入站必刷视频</h2><blockquote><p>https://api.bilibili.com/x/web-interface/popular/precious</p></blockquote><p><em>请求方式：GET</em></p><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-400：请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>array</td><td>视频列表</td><td></td></tr></tbody></table><p><code>data</code> 字段：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>title</td><td>str</td><td>标题</td><td>入站必刷</td></tr><tr><td>media_id</td><td>num</td><td>media_id</td><td></td></tr><tr><td>explain</td><td>str</td><td>解释（概括）</td><td>我不允许还有人没看过这??个宝藏视频！</td></tr><tr><td>list</td><td>array</td><td>列表</td><td></td></tr></tbody></table><p><code>data</code>中的<code>list</code>数组中的对象:</p>',10),c=i(`<p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/web-interface/popular/precious&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details><summary>查看响应示例:</summary><div class="language-jsonc line-numbers-mode" data-ext="jsonc"><pre class="language-jsonc"><code>{
  &quot;code&quot;: 0,
  &quot;message&quot;: &quot;0&quot;,
  &quot;ttl&quot;: 1,
  &quot;data&quot;: {
    &quot;title&quot;: &quot;入站必刷&quot;,
    &quot;media_id&quot;: 496307088,
    &quot;explain&quot;: &quot;我不允许还有人没看过这98个宝藏视频！&quot;,
    &quot;list&quot;: [
      // ...
      {
        &quot;aid&quot;: 706,
        &quot;videos&quot;: 1,
        &quot;tid&quot;: 47,
        &quot;tname&quot;: &quot;同人·手书&quot;,
        &quot;copyright&quot;: 2,
        &quot;pic&quot;: &quot;http://i1.hdslb.com/bfs/archive/753453a776fca838165a52c7511e8557857b61ea.jpg&quot;,
        &quot;title&quot;: &quot;【東方】Bad Apple!! ＰＶ【影絵】&quot;,
        &quot;pubdate&quot;: 1256995125,
        &quot;ctime&quot;: 1497344829,
        &quot;desc&quot;: &quot;sm8628149 2011/9/25追记：大家如果看到空耳字幕请果断举报，净化弹幕环境，你我有责，感谢。&quot;,
        &quot;state&quot;: 0,
        &quot;duration&quot;: 219,
        &quot;rights&quot;: {
          &quot;bp&quot;: 0,
          &quot;elec&quot;: 0,
          &quot;download&quot;: 0,
          &quot;movie&quot;: 0,
          &quot;pay&quot;: 0,
          &quot;hd5&quot;: 0,
          &quot;no_reprint&quot;: 0,
          &quot;autoplay&quot;: 1,
          &quot;ugc_pay&quot;: 0,
          &quot;is_cooperation&quot;: 0,
          &quot;ugc_pay_preview&quot;: 0,
          &quot;no_background&quot;: 0,
          &quot;arc_pay&quot;: 0,
          &quot;pay_free_watch&quot;: 0
        },
        &quot;owner&quot;: {
          &quot;mid&quot;: 37,
          &quot;name&quot;: &quot;折射&quot;,
          &quot;face&quot;: &quot;http://i1.hdslb.com/bfs/face/49d19d3d9cc4b3938128cacd650859ac612156a1.gif&quot;
        },
        &quot;stat&quot;: {
          &quot;aid&quot;: 706,
          &quot;view&quot;: 11329388,
          &quot;danmaku&quot;: 82247,
          &quot;reply&quot;: 544932,
          &quot;favorite&quot;: 502984,
          &quot;coin&quot;: 195079,
          &quot;share&quot;: 95877,
          &quot;now_rank&quot;: 0,
          &quot;his_rank&quot;: 88,
          &quot;like&quot;: 480388,
          &quot;dislike&quot;: 0,
          &quot;vt&quot;: 0,
          &quot;vv&quot;: 11329388
        },
        &quot;dynamic&quot;: &quot;&quot;,
        &quot;cid&quot;: 3724723,
        &quot;dimension&quot;: {
          &quot;width&quot;: 480,
          &quot;height&quot;: 360,
          &quot;rotate&quot;: 0
        },
        &quot;season_id&quot;: 879555,
        &quot;short_link_v2&quot;: &quot;https://b23.tv/BV1xx411c79H&quot;,
        &quot;cover43&quot;: &quot;&quot;,
        &quot;bvid&quot;: &quot;BV1xx411c79H&quot;,
        &quot;season_type&quot;: 0,
        &quot;is_ogv&quot;: false,
        &quot;ogv_info&quot;: null,
        &quot;rcmd_reason&quot;: &quot;&quot;,
        &quot;enable_vt&quot;: 0,
        &quot;ai_rcmd&quot;: null,
        &quot;achievement&quot;: &quot;东方project标志性视频&quot;
      },
      // ...
    ]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,3);function q(m,b){const e=d("RouterLink");return u(),s("div",null,[r,o("p",null,[t("基本同"),a(e,{to:"/docs/video/info.html#%E8%8E%B7%E5%8F%96%E8%A7%86%E9%A2%91%E8%AF%A6%E7%BB%86%E4%BF%A1%E6%81%AFweb%E7%AB%AF"},{default:l(()=>[t("获取视频详细信息（web端）")]),_:1}),t("中的data对象")]),c])}const h=n(v,[["render",q],["__file","precious_videos.html.vue"]]);export{h as default};
