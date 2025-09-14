# APPKey

以下为已知的 APPkey / APPSec，及部分使用场景参数信息，均来自抓包与逆向工程

|      APPKEY      |              APPSEC              | platform<sup>2</sup> |      APP类型       | neuronAppId<sup>1</sup> | mobi_app<sup>2</sup> |                    备注                    |
| :--------------: | :------------------------------: | :------------------: | :----------------: | :---------------------: | :------------------: | :----------------------------------------: |
| 9d5889cf67e615cd | 8fd9bb32efea8cef801fd895bef2713d |      `android`       | Ai4cCreatorAndroid |                         |                      |                                            |
| 1d8b6e7d45233436 | 560c52ccd288fed045859ed18bffd973 |      `android`       |        粉版        |           `1`           |      `android`       |                获取资源通用                |
| 783bbb7264451d82 | 2653583c8873dea268ab9386918b1d65 |      `android`       |        粉版        |           `1`           |      `android`       |    仅获取用户信息时使用(7.X及更新版本)     |
| 57263273bc6b67f6 | a0488e488d1567960d3a765e8d129f90 |      `android`       |        粉版        |           `1`           |      `android`       |                可能来自旧版                |
| 07da50c9a0bf829f | 25bdede4e1581c836cab73a48790ca6e |      `android`       |       概念版       |           `3`           |     `android_b`      |                                            |
| 191c3b6b975af184 | 1673b15a09ef5e4427627f47b03a0578 |      `android`       |       概念版       |           `3`           |     `android_b`      |    仅获取用户信息时使用(7.X及更新版本)     |
| 178cf125136ca8ea | 34381a26236dd1171185c0beb042e1c6 |      `android`       |       概念版       |           `3`           |     `android_b`      |                可能来自旧版                |
| 7d336ec01856996b | a1ce6983bc89e20a36c37f40c4f1a0dd |      `android`       |       概念版       |           `3`           |     `android_b`      |                可能来自旧版                |
| dfca71928277209b | b5475a8825547a4fc26c7d518eaaa02e |      `android`       |       HD 版        |           `5`           |     `android_hd`     |                                            |
| bb3101000e232e27 | 36efcfed79309338ced0380abd824ac1 |      `android`       |        白版        |          `14`           |     `android_i`      |                                            |
| ae57252b0c09105d | c75875c596a69eb55bd119e74b07cfe3 |      `android`       |        白版        |          `14`           |     `android_i`      |    仅获取用户信息时使用(7.X及更新版本)     |
| 8e16697a1b4f8121 | f5dd03b752426f2e623d7badb28d190a |      `android`       |        白版        |          `14`           |     `android_i`      |                可能来自旧版                |
| 7d089525d3611b1c | acd495b248ec528c2eed1e862d393126 |      `android`       |        蓝版        |          `30`           |      `bstar_a`       |                                            |
| iVGUTjsxvpLeuDCf | aHRmhWMLkdeMuILqORnYZocwMBpMEOdt |      `android`       |         -          |            -            |          -           |        视频取流专用, 仅5.X旧版使用         |
| YvirImLGlLANCLvM | JNlZNgfNGKZEpaDTkCdPQVXntXhuiJEM |        `ios`         |         -          |            -            |          -           |                视频取流专用                |
| 27eb53fc9058f8c3 | c2ed53a74eeefe3cf99fbd01d8c9c375 |     `web`/`ios`?     |         -          |            -            |          -           |               第三方授权使用               |
| 84956560bc028eb7 | 94aba54af9065f71de72f5508f1cd42e |          ?           |       UWP 版       |            -            |          -           |    部分API不接受此appkey, 返回-663错误     |
| 85eb6835b0a1034e | 2ad42749773c441109bdc0191257a664 |          ?           |      UWP 版?       |            -            |          -           |    部分API不接受此appkey, 返回-663错误     |
| 4ebafd7c4951b366 | 8cb98205e9b2ad3669aad0fce12a4c13 |        `ios`         |   iPhone 客户端?   |        `iphone`         |          ?           |                                            |
| 8d23902c1688a798 | 710f0212e62bd499b8d3ac6e1db9302a |      `android`       | AndroidBiliThings  |            ?            |          ?           |                                            |
| 4c6e1021617d40d9 | e559a59044eb2701b7a8628c86aa12ae |      `android`       | AndroidMallTicket  |            ?            |          ?           |                                            |
| c034e8b74130a886 | e4e8966b1e71847dc4a3830f2d078523 |      `android`       |   AndroidOttSdk    |           `7`           |          ?           |                                            |
| 4409e2ce8ffd12b8 | 59b43e04ad6965f34319062b478f83dd |      `android`       | 云视听小电视(TV版) |          `9`?           |  `android_tv_yst`?   |                                            |
| 37207f2beaebf8d7 | e988e794d4d4b6dd43bc0e89d6e90c43 |      `android`       |      BiliLink      |            ?            |          ?           |                                            |
| 9a75abf7de2d8947 | 35ca1c82be6c2c242ecc04d88c735f31 |      `android`       |      BiliScan      |            ?            |          ?           |                                            |
| aae92bc66f3edfab | af125a0d5279fd576c1b4418a3e8276d |          ?           | PC 投稿工具&PC直播姬|            -            |          ?           |                                            |
| bca7e84c2d947ac6 | 60698ba2f68e01ce44738920a0ffe768 |          ?           |       login        |            -            |          ?           |                                            |
| h9Ejat5tFh81cq8V | BdiI92bjmZ9QRcjJBWv2EEssyjekAGKt |                      |                    |                         |                      |      bilibili游戏 web端 游戏详情页API      |

注释:

<sup>1</sup> `neuronAppId`，产品编号，由数据平台分配，详情如下：

- 粉（国内版）=1
- 白（GooglePlay 版）=2
- 蓝（东南亚版）=3
- 直播姬=4
- HD=5
- 海外=6
- OTT=7
- 漫画=8
- TV野版=9
- 小视频=10
- 网易漫画=11
- 网易漫画lite=12
- 网易漫画HD=13,
- 国际版=14

<sup>2</sup> `platform`, `mobi_app` 仅供参考, 具体值需要抓包确定.
