# 贡献指南

欢迎来到 bilibili-API-collect 社区贡献指南，本文主要面向想要对本项目参与贡献的用户, 请务必认真阅读本文正文与潜在的注释

## 总则

[bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect) 项目（简称 BAC 或 b-a-c）是一个仅用于学习研究、社区开源、公益性质的 [B 站（哔哩哔哩）](https://www.bilibili.com/)API（应用程序接口）文档，使用 [CC-BY-NC 4.0 协议](https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/LICENSE)开源，它将无差别收集整理相关的**主站业务接口**。

该项目使用 [Markdown](https://zh.wikipedia.org/zh-cn/Markdown) 语法进行文档书写，按照业务类型及功能以**路径**＋**文件**形式索引，任何用户都可通过 Issue、Pull Request 与 Discussion 提供自己分析出的接口地址与使用说明。

本项目收集的接口类型包括但不限于 REST API、gRPC、WebSocket，文档内统一优先使用安全套接字协议，如 `https`、`securityRpc`、`wss`。

## Issue、Discussion 与社群讨论

对文档内容存在**不理解**之处、以及发现文档内容有所**缺失**或**错误**，可直接提出，强烈建议以提交 **Issue** 的形式 添加 / 补充 / 更新 文档中的说明，以发起 **Discussion** 的形式提出问题、代码用例、情报分享，并希望关于本项目的各种交流都是**公开进行**的，因为这样才可以保证关键信息的一致性。

提交 Issue 请遵守以下原则：

1. 标题需要点明 API 的用处, `<title>` 要替换为标题主要内容而不是保留不动，切勿仅填写 `补充`、`修复`，形式良好的标题可以是 `[新增请求] 新增 xx 接口`、`[更新请求] xx 接口地址已失效`、`[更新请求] xx 接口的参数有变化`
2. 正文请按照 Issue 模板进行填写，标明 API 来源（Web、Android、iOS、TV 等）、API 类型（REST、gRPC、WebSocket 等）、API 地址
3. 详情描述需要提供该 API 的使用场景、请求及响应字段等，可附上原始抓包记录 (文本格式优先)；在更新时还需指出原文档中与最新 API 行为不符之处，并附上已知的最新改动。例如：“在前端页面某地址 / APP 某界面访问某 API（标明地址），它的某参数与文档中不符（标明文档地址）”

发起 Discussion 请遵守以下原则：

1. 标题言简意骇，说明欲提出的问题要点，如 `如何通过 xx 接口获取 yy`、`关于 xx 字段意义的探讨`、`建议将 xx 加入 yy 分类` 等标题；切勿使用表意含糊不清或索取性的标题，如 `怎么解决风控`、`搜索的接口是什么`、`好兄弟有没有投稿的接口` 等标题
2. Discussion 正文应对遇到的问题进行尽可能详细的描述，展开并聚焦有关的信息，例如： “按照文档中某位置的说明进行了某操作，为什么无法获得预期结果”、“请问某 API 的某字段的具体含义是什么”
3. 提出问题时注意[提问的智慧](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md)并且[别像弱智一样提问](https://github.com/tangx/Stop-Ask-Questions-The-Stupid-Ways)

同时，您还可以通过加入社群的方式参与讨论

- QQ 交流群：[邀请链接](https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=ympvb3LAPT-Ulu3ezhGqbkJ8zXMKImOX&authKey=z1KdkOdKO3wytN43m9K6On9nBtnDL4pAoD6VQHCipFBb9TasNDKuDHCmOE6TF3uc&noverify=0&group_code=191187164)
- Telegram 交流群：[@bilibili_API_collect_community](https://t.me/bilibili_API_collect_community)

::: tip 提示

QQ 交流群为综合技术交流群（兼 Owner 的粉丝群），可交流探讨任何技术，包括但不限于 [BAC 项目](https://github.com/SocialSisterYi/bilibili-API-collect)

Telegram 交流群主要用作 [BAC 项目](https://github.com/SocialSisterYi/bilibili-API-collect)的 Github Bot 接收，也可以进行项目相关的讨论，但不建议在此讨论交流其他内容（公开群）

:::

::: warning 注意

群内讨论同样需要遵守**公开交流**的原则，以及群内会定期清理不活跃成员。

**QQ 交流群**的加群问题答案可以去 [Owner 的主页](https://github.com/SocialSisterYi) Contact 部分找到，如果您填写“我不知道，从 Github 来的”那么管理员将有理由禁止您进群讨论！

:::

::: danger 禁止

项目 Issue 及其相关社群中**禁止**询问讨论 风控解除、爬虫（采集）、破解、漏洞利用、买卖代码和账号 相关内容，抵制基于本项目进行的一切黑产行为！

:::

## 目录与路径结构

### 目录

文档目录以 **Markdown 无序列表**语法写在 [README.md](README.md) 中，使用缩进标识文档的层级，如 `视频` 下存在 `基本信息`、`快照`、`视频推荐`、`TAG` 等子分类，使用 **Markdown 复选框**语法该标注文档是否编写完成, 新文档写完后记得在目录添加入口

```markdown
- [ ] 视频
  - [x] 基本信息
  - [x] 快照
  - [x] 视频推荐
  - [ ] TAG
```

### 路径

路径层级应当与文档目录一致，以文件夹的形式存放在项目中的 `/docs` 路径下，命名统一使用英文小写，如 `video`、`danmaku`、`comment`, 不建议出现 `&` 等特殊字符

二级、三级路径应当存在二级三级目录，可选添加 `README.md` 以描述该子目录

### 文件

各个子接口集整理为 Markdown (.md) 文件，命名统一使用英文小写，如 `info.md`、`action.md`、`list.md`

文档文件中用于存放相关的接口的说明，如 `video/` 下的 `info.md`，存在 `查询视频基本信息`、`查询视频简介`、`查询视频分P列表` 等内容

## Markdown 文档内容格式

文档使用 [VuePress](https://vuepress.vuejs.org/) 生成，可以使用 [VuePress Markdown 扩展语法](https://vuepress.vuejs.org/guide/markdown.html)编写

注：以下文档范式主要针对接口类文档, 可根据**实际情况**进行调整, 你也可以使用 [`json-apidoc-gen`](https://github.com/SessionHu/json-apidoc-gen) 工具直接生成模板自行填充内容. 非接口类文档, 如算法等, 可以参考已有的内容

### 头部

文档首行为**一级标签**格式标题，如 `# 用户基本信息`

**文档头部不需要手写索引**，索引由 VuePress 自动生成

### 接口说明

文档中可存在多个接口说明，应当遵守同一范式，依次排列在文档中

接口说明分为 `标题`、`地址`、`说明`、`请求参数`、`响应正文`、`示例` 这些部分

接口标题为**二级以下**的标签<!--别顶着一级标题就开写-->，接口地址使用**块引用**语法，地址只保留 REST API 路径，不应携带 query 等内容

接口地址下方需要注明接口的请求方法，如 `GET`、`POST`、`PUT` 等，使用*斜体*语法

若接口存在认证或鉴权，需要在说明中注明，如 `Cookie (SESSDATA)`、`APP`（认证是针对用户的，鉴权是针对接口使用的）

其他使用说明也可写在这里，如 `限制游客访问的视频需要登录`

e.g.：

```markdown
## 获取视频详细信息_web端

> https://api.bilibili.com/x/web-interface/view

*请求方法: GET*

认证方式: Cookie (SESSDATA)

限制游客访问的视频需要登录
```

**请求参数**应在**接口说明**的下方，应注明参数类型 URL 参数或正文参数（正文参数应注明 `Content-Type`，如 `application/x-www-form-urlencoded` 或 `multipart/form-data`），使用**加粗**语法

对象的字段及其含义使用**表格**进行整理，表头统一依次为 `参数名`、`类型`、`内容`、`必要性`、`备注`，使用 `object`、`number`、`string`、`boolean`、`number[]`、`string[]`、`file` 等这种类似 TypeScript 的类型系统，必要性为 `必要`、`非必要`、`必要 (可选)` 等，表格内每个字段为一行

e.g.：

| 参数名 | 类型 | 内容      | 必要性      | 备注              |
| ------ | ---- | --------- | ----------- | ----------------- |
| aid    | num  | 稿件 avid | 必要 (可选) | avid 与 bvid 任选 |
| bvid   | str  | 稿件 bvid | 必要 (可选) | avid 与 bvid 任选 |

**响应正文**应在**请求参数**的下方，接口响应的数据格式应标注，如 `JSON 回复`、`XML 回复`、`ProtoBuf 回复`，使用**加粗**语法

JSON Object 或 ProtoBuf Message 应以对象的**表格**形式书写，表头为 `根对象` 或 `xx 中的 yy 对象` 或 `xx.yy.zz 对象`，若对象位于数组中则为 `xx 数组中的对象` 或 `xx[] 中的对象`

表头统一依次为 `字段`、`类型`、`内容`、`备注`，类型为 JSON / Protobuf 的标准类型，具体同请求参数一致

不明确定义的字段说明在内容的末尾添加问号，如 `播放数？`；定义尚未明确的字段使用 `（？）` 在内容中占位，并在备注中填写 `作用尚不明确`

多个对象及数组，使用**遍历树**的顺序进行排列, 若数组中的每一项结构均相同也可以直接省略为像 `xxx 数组中的对象` 这样的格式

e.g.：

`data` 对象：

| 字段     | 类型 | 内容        | 备注         |
| -------- | ---- | ----------- | ------------ |
| bvid     | str  | 稿件 bvid   |              |
| aid      | num  | 稿件 avid   |              |
| videos   | num  | 稿件分P总数 | 默认为 1     |
| tid      | num  | 分区 tid    |              |
| no_cache | bool | （？）      | 作用尚不明确 |

Json Array 或 ProtoBuf Repeated 类型使用数组的**表格**形式书写，表头统一依次为 `项`、`类型`、`内容`、`备注`，无限长度数组表尾需要添加**省略号**

数组每项内容若与实际数据有关联，`内容` 字段则可标为 `(n+1)P 视频内容` 这样的形式

e.g.：

`data` 中的 `pages` 数组：

| 项   | 类型 | 内容            | 备注          |
| ---- | ---- | --------------- | ------------- |
| 0    | obj  | 1P 视频内容     | 无分 P 仅有此项 |
| n    | obj  | (n+1)P 视频内容 |               |
| ……   | obj  | ……              | ……            |

**示例**部分位于所有**响应正文**部分下方，需要**加粗**格式，分为请求命令示例与响应体示例两部分

请求命令示例为一段可测试该接口的 cURL 命令或某种编程语言的代码，使用**代码块**语法书写，命令应当尽可能简短、便于使人阅读, 代码缩进为 **2** 个 **空格 (U+0020)**

示例命令中的认证信息应做**脱敏处理**，如 Cookie、Token、access_key 等，可替换为 `xxx` 占位

示例命令前后可以适当添加一些文字说明

响应体示例为一段格式化后的 JSON 或 ProtoBuf Message，使用**代码块**语法书写, 代码块语言填写清楚, 注意 `json` `jsonc` 区别. 并使用 `<details>` 标签进行折叠, 仍一律使用 **2** 个 **空格** 进行缩进

e.g.：

````markdown
**示例:**

获取视频 `av85440373` 的基本信息

```shell
curl -G 'https://api.bilibili.com/x/web-interface/view' \
	--data-urlencode 'aid=85440373'
```

<details>
<summary>查看响应示例:</summary>

```jsonc
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "bvid": "BV117411r7R1",
    "aid": 85440373,
    "videos": 1,
    "tid": 28,
    "tname": "原创音乐",
    "copyright": 1,
    // ...
  }
}
```

</details>
````

### 枚举值与属性位

接口返回或请求中若存在一些 enum 类型或二进制属性位，应当单独进行探讨，如视频的属性位 `attribute` 或视频清晰度 `qn`

这些值及其说明使用**表格**进行整理，表头统一为 `位` / `代码` / `值`、`含义`、`备注`

这些枚举值或属性位的用法应附加文字说明

e.g.：

| 值   | 含义          | 备注                                                         |
| ---- | ------------- | ------------------------------------------------------------ |
| 6    | 240P 极速     | 仅 MP4 格式支持<br />仅 `platform=html5` 时有效              |
| 16   | 360P 流畅     |                                                              |
| 32   | 480P 清晰     |                                                              |
| 64   | 720P 高清     | WEB 端默认值<br />B 站前端需要登录才能选择，但是直接发送请求可以不登录就拿到 720P 的取流地址<br />**无 720P 时则为 720P60** |
| 74   | 720P60 高帧率 | 需要登录认证                                                 |
| 80   | 1080P 高清    | TV 端与 APP 端默认值<br />需要登录认证                       |

## Proto 定义格式

proto 文件为 [Protocol Buffers](https://protobuf.dev/) 以及 [gRPC](https://grpc.io/docs/) 的数据结构体定义，多用于客户端的接口，本文档也做相关的收集

存放于项目的 `/grpc_api` 路径下，使用包名进行路径层级的组织，如：

```
/grpc_api/bilibili/main/community/reply/v1/reply.proto
/grpc_api/bilibili/app/archive/v1/archive.proto
/grpc_api/bilibili/app/view/v1/view.proto
```

proto 文件内使用**单行注释**标注字段或对象的含义，如：

```protobuf
// UP主信息
message Author {
	// UP主mid
	int64 mid = 1;
	// UP主昵称
	string name = 2;
	// UP主头像url
	string face = 3;
}
```

## 文档提交

### 拉取 (Pull) 与 提交 (Commit)

本项目仓库仅托管于 GitHub, 使用 Git 作为版本控制系统, 你需要对两者有基础的了解

请先 fork, 然后在自己的 fork 上进行修改<!--废话-->

提交的标题不要使用默认的 `Update xxx`, 请遵循 [Conventional Commits (约定式提交) 规范](https://www.conventionalcommits.org/zh-hans/v1.0.0/), 标题语言可根据个人习惯

<!--下面这两段属于常识, 但好像还有人不知道-->
当发现远程与本地仓库不一致时, 若你操作的 fork 的 branch 无打开的 PR, 建议使用变基拉取, 而不是生成一个额外的合并提交的合并拉取, 反之则相反

移动文件请使用 `git mv`, 而不是删除并添加同一个文件于不同位置 (该问题在 VSCode 的 GUI 版 Git 中存在<!--某个易姓owner干过-->), 以便后续 blame 操作

### 拉取请求 (Pull Request)

使用 拉取请求 (Pull Request, PR) 将修改后的文档提交到 `master` 分支，标题需写明修改或新增的内容, 同样也需要遵循约定式提交规范, `gh_pages` 分支将在 PR 合并后自动更新

如果你还没有完成计划的全部修改, 请创建 Draft Pull Request 表示你还没有做好被合并的准备 ~~(抢占先机, 精神可嘉, 值得鼓励)~~

PR 正文使用 **无序列表** 写明更改的每一项内容, 可以使用复选框表明进度, 需要关闭的 Issue 请使用 `close #xxxx` 这样的格式一并包含在内

如果内容包含代码等, 请一并提供测试的输入与输出的文本或截图, 最好可以附上完整的测试环境及相关可执行文件等

<!--这也是常识喵-->
PR 合并后, 请及时删除或更新分支. 特别是在使用压缩合并或变基合并后, 请 `Discard changes` 或直接删除分支, 以免在下一次 PR 后出现重复相同提交的问题
