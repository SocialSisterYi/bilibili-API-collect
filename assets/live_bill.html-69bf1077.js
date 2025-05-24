import{_ as n,o as s,c as t,e as a}from"./app-b135fa6d.js";const e={},o=a(`<h1 id="直播流水" tabindex="-1"><a class="header-anchor" href="#直播流水" aria-hidden="true">#</a> 直播流水</h1><h2 id="获取所有礼物列表" tabindex="-1"><a class="header-anchor" href="#获取所有礼物列表" aria-hidden="true">#</a> 获取所有礼物列表</h2><blockquote><p>https://api.live.bilibili.com/gift/v1/master/getGiftTypes</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie（SESSDATA）</p><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>msg</td><td>str</td><td>错误信息</td><td>默认为 success</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为 success</td></tr><tr><td>data</td><td>array</td><td>礼物列表</td><td></td></tr></tbody></table><p><code>data</code> 数组：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>gift_id</td><td>num</td><td>礼物 id</td><td></td></tr><tr><td>gift_name</td><td>str</td><td>礼物名称</td><td></td></tr><tr><td>price</td><td>num</td><td>瓜子数量</td><td>电池礼物为金瓜子数量，银瓜子礼物为银瓜子数量。 （金瓜子数量 / 100 = 电池数量）</td></tr></tbody></table><p><em>注：特殊礼物如舰长、提督、总督等没有 <code>price</code> 字段</em></p><details><summary>查看响应示例：</summary><div class="language-jsonc line-numbers-mode" data-ext="jsonc"><pre class="language-jsonc"><code>  {
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;success&quot;,
    &quot;message&quot;: &quot;success&quot;,
    &quot;data&quot;: [
      {
        &quot;gift_id&quot;: 10001,
        &quot;gift_name&quot;: &quot;总督&quot;
      },
      {
        &quot;gift_id&quot;: 10002,
        &quot;gift_name&quot;: &quot;提督&quot;
      },
      {
        &quot;gift_id&quot;: 10003,
        &quot;gift_name&quot;: &quot;舰长&quot;
      },
      {
        &quot;gift_id&quot;: 12000,
        &quot;gift_name&quot;: &quot;醒目留言&quot;
      },
      {
        &quot;gift_id&quot;: 1,
        &quot;price&quot;: 100,
        &quot;gift_name&quot;: &quot;辣条&quot;
      },
      {
        &quot;gift_id&quot;: 3,
        &quot;price&quot;: 9900,
        &quot;gift_name&quot;: &quot;B坷垃&quot;
      },
      {
        &quot;gift_id&quot;: 6,
        &quot;price&quot;: 1000,
        &quot;gift_name&quot;: &quot;亿圆&quot;
      },
      {
        &quot;gift_id&quot;: 30426,
        &quot;price&quot;: 0,
        &quot;gift_name&quot;: &quot;BLS能量石&quot;
      },
      {
        &quot;gift_id&quot;: 30706,
        &quot;price&quot;: 1000,
        &quot;gift_name&quot;: &quot;生日快乐&quot;
      },
      {
        &quot;gift_id&quot;: 30707,
        &quot;price&quot;: 5200,
        &quot;gift_name&quot;: &quot;生日蛋糕&quot;
      },
      {
        &quot;gift_id&quot;: 30708,
        &quot;price&quot;: 52000,
        &quot;gift_name&quot;: &quot;生日王冠&quot;
      },
      {
        &quot;gift_id&quot;: 31049,
        &quot;price&quot;: 6600,
        &quot;gift_name&quot;: &quot;干杯&quot;
      },
      {
        &quot;gift_id&quot;: 31116,
        &quot;price&quot;: 6600,
        &quot;gift_name&quot;: &quot;干杯&quot;
      },
      {
        &quot;gift_id&quot;: 31251,
        &quot;price&quot;: 6600,
        &quot;gift_name&quot;: &quot;干杯&quot;
      },
      {
        &quot;gift_id&quot;: 31531,
        &quot;price&quot;: 0,
        &quot;gift_name&quot;: &quot;PK票&quot;
      },
      {
        &quot;gift_id&quot;: 31588,
        &quot;price&quot;: 19900,
        &quot;gift_name&quot;: &quot;星河入梦&quot;
      },
      {
        &quot;gift_id&quot;: 31589,
        &quot;price&quot;: 131400,
        &quot;gift_name&quot;: &quot;我星永恒&quot;
      },
      {
        &quot;gift_id&quot;: 32276,
        &quot;price&quot;: 0,
        &quot;gift_name&quot;: &quot;粉丝团灯牌&quot;
      },
      // ...
    ]
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="获取流水" tabindex="-1"><a class="header-anchor" href="#获取流水" aria-hidden="true">#</a> 获取流水</h2><blockquote><p>https://api.live.bilibili.com/xlive/revenue/v1/giftStream/getReceivedGiftStreamNextList</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie（SESSDATA）</p><p>请求参数：</p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>limit</td><td>num</td><td>一页有多少条目</td><td>必要</td><td></td></tr><tr><td>coin_type</td><td>num</td><td>礼物类型</td><td>必要</td><td>0 为所有，1 为电池礼物，2 为银瓜子礼物</td></tr><tr><td>begin_time</td><td>date / string</td><td>流水的日期</td><td>必要</td><td>格式为 yyyy-MM-dd</td></tr><tr><td>uname</td><td>string</td><td>筛选的用户名</td><td>非必要</td><td></td></tr><tr><td>last_id</td><td>num</td><td>上一页页末的礼物列表 id</td><td>翻页时必要</td><td>见下方 <code>list</code> 数组说明</td></tr><tr><td>gift_id</td><td>num</td><td>筛选的礼物 id</td><td></td><td></td></tr></tbody></table><p>请求示例：<code>https://api.live.bilibili.com/xlive/revenue/v1/giftStream/getReceivedGiftStreamNextList?limit=20&amp;coin_type=0&amp;begin_time=2023-01-01</code></p><p>请求示例（翻页时）：<code>https://api.live.bilibili.com/xlive/revenue/v1/giftStream/getReceivedGiftStreamNextList?last_id=13834493&amp;limit=20&amp;coin_type=0&amp;begin_time=2023-01-01</code></p><p><strong>json 回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>msg</td><td>str</td><td>错误信息</td><td>默认为 success</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为 success</td></tr><tr><td>data</td><td>object</td><td>流水</td><td></td></tr></tbody></table><p><code>data</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>has_more</td><td>num</td><td>是否由下一页</td><td>1 为是，0 为否</td></tr><tr><td>total_hamster</td><td>num</td><td>总的金仓鼠收益</td><td></td></tr><tr><td>list</td><td>array</td><td>礼物列表</td><td></td></tr></tbody></table><p><code>list</code> 数组：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>uid</td><td>num</td><td>送礼用户的 uid</td><td></td></tr><tr><td>uname</td><td>str</td><td>用户名</td><td></td></tr><tr><td>time</td><td>date / str</td><td>送礼时间</td><td></td></tr><tr><td>gift_id</td><td>num</td><td>礼物 id</td><td></td></tr><tr><td>gift_name</td><td>str</td><td>礼物名字</td><td></td></tr><tr><td>gift_img</td><td>str</td><td>礼物图片链接</td><td></td></tr><tr><td>gift_num</td><td>num</td><td>礼物数量</td><td></td></tr><tr><td>hamster</td><td>num</td><td>金仓鼠数量</td><td></td></tr><tr><td>gold</td><td>num</td><td>礼物价值（金瓜子）</td><td></td></tr><tr><td>silver</td><td>num</td><td>礼物价值（银瓜子）</td><td></td></tr><tr><td>ios_hamster</td><td>num</td><td>由 iOS 端送出的礼物所收到的金仓鼠</td><td></td></tr><tr><td>normal_hamster</td><td>num</td><td>一般情况下收到的金仓鼠</td><td></td></tr><tr><td>ios_gold</td><td>num</td><td>由 iOS 端送出的礼物所收到的金瓜子数量</td><td></td></tr><tr><td>normal_gold</td><td>num</td><td>一般情况下收到的金瓜子数量</td><td></td></tr><tr><td>is_hybrid</td><td>bool</td><td>是否混合</td><td>作用不明</td></tr><tr><td>id</td><td>num</td><td>此项 id</td><td>用于翻页</td></tr><tr><td>is_open_platfrom</td><td>num</td><td>是否开放平台</td><td>作用不明</td></tr><tr><td>open_platfrom_rate</td><td>num</td><td>开放平台比率 (?)</td><td>作用不明</td></tr><tr><td>receive_title</td><td>str</td><td></td><td>作用不明 ，一般为 <code>&quot;主播&quot;</code></td></tr><tr><td>room_id</td><td>num</td><td>送礼房间id</td><td>如果礼物为上舰，此项为 <code>0</code></td></tr></tbody></table><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">0000000000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;XXXXXXX&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-01-01 00:00:00&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gift_id&quot;</span><span class="token operator">:</span> <span class="token number">31216</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gift_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;i了i了&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gift_img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://s1.hdslb.com/bfs/live/1157a445487b39c0b7368d91b22290c60fa665b2.png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gift_num&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;hamster&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gold&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token property">&quot;silver&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ios_hamster&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;normal_hamster&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ios_gold&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;normal_gold&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token property">&quot;is_hybrid&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">14269551</span><span class="token punctuation">,</span>
        <span class="token property">&quot;is_open_platfrom&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;open_platfrom_rate&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;receive_title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;主播&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;room_id&quot;</span><span class="token operator">:</span> <span class="token number">000001</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">0000000000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;XXXXXXX&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-01-01 00:00:00&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gift_id&quot;</span><span class="token operator">:</span> <span class="token number">10003</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gift_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;舰长&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gift_img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/live/f1be2a2d5b227ce72641de1ad64bcc7f9e4111c3.png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gift_num&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;hamster&quot;</span><span class="token operator">:</span> <span class="token number">69000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gold&quot;</span><span class="token operator">:</span> <span class="token number">138000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;silver&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ios_hamster&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;normal_hamster&quot;</span><span class="token operator">:</span> <span class="token number">69000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ios_gold&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;normal_gold&quot;</span><span class="token operator">:</span> <span class="token number">138000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;is_hybrid&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">14258453</span><span class="token punctuation">,</span>
        <span class="token property">&quot;is_open_platfrom&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;open_platfrom_rate&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;receive_title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;主播&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;room_id&quot;</span><span class="token operator">:</span> <span class="token number">000000</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">0000000000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;XXXXXXX&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-01-01 00:00:00&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gift_id&quot;</span><span class="token operator">:</span> <span class="token number">31036</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gift_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小花花&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gift_img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://s1.hdslb.com/bfs/live/8b40d0470890e7d573995383af8a8ae074d485d9.png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gift_num&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;hamster&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gold&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token property">&quot;silver&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ios_hamster&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;normal_hamster&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ios_gold&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;normal_gold&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token property">&quot;is_hybrid&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">14243903</span><span class="token punctuation">,</span>
        <span class="token property">&quot;is_open_platfrom&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;open_platfrom_rate&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;receive_title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;主播&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;room_id&quot;</span><span class="token operator">:</span> <span class="token number">000001</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">0000000000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;XXXXXXX&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-01-01 00:00:00&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gift_id&quot;</span><span class="token operator">:</span> <span class="token number">30047</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gift_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;友谊的小船&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gift_img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://s1.hdslb.com/bfs/live/b33c94c51b669bd88f811ecf5f4e34a1db22a648.png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gift_num&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;hamster&quot;</span><span class="token operator">:</span> <span class="token number">2450</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gold&quot;</span><span class="token operator">:</span> <span class="token number">4900</span><span class="token punctuation">,</span>
        <span class="token property">&quot;silver&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ios_hamster&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;normal_hamster&quot;</span><span class="token operator">:</span> <span class="token number">2450</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ios_gold&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;normal_gold&quot;</span><span class="token operator">:</span> <span class="token number">4900</span><span class="token punctuation">,</span>
        <span class="token property">&quot;is_hybrid&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">14242683</span><span class="token punctuation">,</span>
        <span class="token property">&quot;is_open_platfrom&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;open_platfrom_rate&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;receive_title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;主播&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;room_id&quot;</span><span class="token operator">:</span> <span class="token number">000001</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">0000000000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;XXXXXXX&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-01-01 00:00:00&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gift_id&quot;</span><span class="token operator">:</span> <span class="token number">31738</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gift_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;粉丝团灯牌&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gift_img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://s1.hdslb.com/bfs/live/cbed3bb0a894369b49ceaf0b5337b4491b75ac42.png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gift_num&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;hamster&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gold&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;silver&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ios_hamster&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;normal_hamster&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ios_gold&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;normal_gold&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;is_hybrid&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">14237376</span><span class="token punctuation">,</span>
        <span class="token property">&quot;is_open_platfrom&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;open_platfrom_rate&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;receive_title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;主播&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;room_id&quot;</span><span class="token operator">:</span> <span class="token number">000001</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;has_more&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;total_hamster&quot;</span><span class="token operator">:</span> <span class="token number">122050</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,28),p=[o];function i(u,l){return s(),t("div",null,p)}const d=n(e,[["render",i],["__file","live_bill.html.vue"]]);export{d as default};
