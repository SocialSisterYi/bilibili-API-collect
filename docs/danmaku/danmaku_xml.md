# xml弹幕

实时弹幕池容量有限（根据视频类型500-8000条不等），占满后再发送会使实时弹幕池底部的弹幕压入历史弹幕池（类似于堆栈）

## 获取实时弹幕1

> https://api.bilibili.com/x/v1/dm/list.so

*请求方式：GET*

**使用deflate压缩，注意解码**

**url参数：**

| 参数名 | 类型 | 内容    | 必要性 | 备注 |
| ------ | ---- | ------- | ------ | ---- |
| oid    | num  | 视频cid | 必要   |      |

**示例：**

```shell
curl -G 'https://api.bilibili.com/x/v1/dm/list.so' \
--data-urlencode 'oid=144541892' \
--compressed -o 'danmaku.xml'
```

## 获取实时弹幕2

> https://comment.bilibili.com/{cid}.xml

*请求方式：GET*

效果与前者相同

**使用deflate压缩，注意解码**

**url路径：**

| 参数名 | 类型 | 内容    | 必要性 | 备注 |
| ------ | ---- | ------- | ------ | ---- |
| cid    | num  | 视频cid | 必要   |      |

**示例：**

```shell
curl 'https://comment.bilibili.com/144541892.xml'
--compressed -o 'danmaku.xml'
```

**xml回复：**

<details>
<summary>查看响应示例：</summary>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<i>
    <chatserver>chat.bilibili.com</chatserver>
    <chatid>144541892</chatid>
    <mission>0</mission>
    <maxlimit>1500</maxlimit>
    <state>0</state>
    <real_name>0</real_name>
    <source>e-r</source>
    <d p="490.19100,1,25,16777215,1584268892,0,a16fe0dd,29950852386521095">从结尾回来看这里，更感动了！</d>
    <d p="18.77300,1,25,16777215,1584268920,0,4fe08d3,29950867226492933">咦三体居然还有动画</d>
    <d p="52.88400,1,25,16777215,1584268954,0,4fe08d3,29950885214289927">哈哈哈哈开心</d>
    <d p="25.51600,1,25,16777215,1584268957,0,e4b18b37,29950886612566021">红岸么</d>
    <d p="144.45200,1,25,16777215,1584269076,0,e4b18b37,29950948716576775">我就是想看我的世界里水滴长啥样</d>
    <d p="112.64100,1,25,16777215,1584269109,0,96606007,29950966302244871">有手指？</d>
    <d p="222.84000,1,25,16777215,1584269154,0,e4b18b37,29950989809745923">侦测到在途的聚变打击</d>
    <d p="284.77800,1,25,16777215,1584269216,0,e4b18b37,29951022237483011">都是虫子</d>
    <d p="398.00500,1,25,16777215,1584269329,0,e4b18b37,29951081615196163">ocean</d>
    <d p="432.17900,1,25,16777215,1584269363,0,e4b18b37,29951099571535943">村民，哼~</d>
    <d p="467.41900,1,25,16777215,1584269399,0,e4b18b37,29951118364639237">黄河之水天上来</d>
    <d p="6.71900,1,25,16777215,1584269422,0,70ba16f4,29951130398621699">镇站之宝</d>
    <d p="313.08600,1,25,16777215,1584269425,0,e531c9dc,29951131798994947">这水</d>
    <d p="587.87900,1,25,16777215,1584269519,0,e4b18b37,29951181142360071">海的那边是什么</d>
    <d p="618.05000,1,25,16777215,1584269549,0,e4b18b37,29951196901933061">折跃门准备完毕</d>
    …………
<i>
```

</details>

## 弹幕格式

### xml格式结构

- 标签 i

  - 标签 chatserver：chat.bilibili.com
  - 标签 chatid：视频cid
  - 标签 mission：0
  - 标签 maxlimit：实时弹幕池最大容量
  - 标签 state：弹幕状态（0：正常 1：弹幕已关闭）
  - 标签 real_name：0
  - 标签 source：e-r

  - 标签 d （带有属性 p）：弹幕内容

### 属性 p

字符串内每项用逗号`,`分隔

| 项   | 含义               | 类型   | 备注                                                         |
| ---- | ------------------ | ------ | ------------------------------------------------------------ |
| 0    | 视频内弹幕出现时间 | float  | 秒                                                           |
| 1    | 弹幕类型           | int32  | 1 2 3：普通弹幕<br />4：底部弹幕<br />5：顶部弹幕<br />6：逆向弹幕<br />7：高级弹幕<br />8：代码弹幕<br />9：BAS弹幕（`pool`必须为2） |
| 2    | 弹幕字号           | int32  | 18：小<br />25：标准<br />36：大                             |
| 3    | 弹幕颜色           | int32  | 十进制RGB888值                                               |
| 4    | 弹幕发送时间       | int32  | 时间戳                                                       |
| 5    | 弹幕池类型         | int32  | 0: 普通池<br />1: 字幕池<br />2: 特殊池 (代码/BAS弹幕)<br />3: 互动池?|
| 6    | 发送者mid的HASH    | string | 用于屏蔽用户和查看用户发送的所有弹幕   也可反查用户id        |
| 7    | 弹幕dmid           | int64  | 唯一  可用于操作参数                                         |
| 8    | 弹幕的屏蔽等级     | int32  | 0-10，低于用户设定等级的弹幕将被屏蔽<br />（新增，下方样例未包含） |

```xml
<d p="490.19100,1,25,16777215,1584268892,0,a16fe0dd,29950852386521095">从结尾回来看这里，更感动了！</d>
```

弹幕内容为：“从结尾回来看这里，更感动了！”

参数为：视频内出现的时间是490.19100秒，类型是普通弹幕，字号为标准，颜色为白色（#FFFFFF），发送时间是2020/3/15 18:41:32.........

### web版标准颜色

弹幕的颜色属性使用**十进制RGB888**值

| 颜色                                    | HEX（RGB888）                             | DEC（RGB888）                                |
| -------------------------------------- | ----------------------------------------- | ------------------------------------------- |
| <font v-pre color="#FE0302">红色</font> | <font v-pre color="#FE0302">FE0302</font> | <font v-pre color="#FE0302">16646914‬</font> |
| <font v-pre color="#FF7204">橘红</font> | <font v-pre color="#FF7204">FF7204</font> | <font v-pre color="#FF7204">16740868</font> |
| <font v-pre color="#FFAA02">橘黄</font> | <font v-pre color="#FFAA02">FFAA02</font> | <font v-pre color="#FFAA02">16755202</font> |
| <font v-pre color="#FFD302">淡黄</font> | <font v-pre color="#FFD302">FFD302</font> | <font v-pre color="#FFD302">16765698</font> |
| <font v-pre color="#FFFF00">黄色</font> | <font v-pre color="#FFFF00">FFFF00</font> | <font v-pre color="#FFFF00">16776960</font> |
| <font v-pre color="#A0EE00">草绿</font> | <font v-pre color="#A0EE00">A0EE00</font> | <font v-pre color="#A0EE00">10546688</font> |
| <font v-pre color="#00CD00">绿色</font> | <font v-pre color="#00CD00">00CD00</font> | <font v-pre color="#00CD00">52480</font>    |
| <font v-pre color="#019899">墨绿</font> | <font v-pre color="#019899">019899</font> | <font v-pre color="#019899">104601</font>   |
| <font v-pre color="#4266BE">紫色</font> | <font v-pre color="#4266BE">4266BE</font> | <font v-pre color="#4266BE">4351678</font>  |
| <font v-pre color="#89D5FF">青色</font> | <font v-pre color="#89D5FF">89D5FF</font> | <font v-pre color="#89D5FF">9022215</font>  |
| <font v-pre color="#CC0273">品红</font> | <font v-pre color="#CC0273">CC0273</font> | <font v-pre color="#CC0273">13369971</font> |
| <font v-pre color="#222222">黑色</font> | <font v-pre color="#222222">222222</font> | <font v-pre color="#222222">2236962</font>  |
| <font v-pre color="#9B9B9B">灰色</font> | <font v-pre color="#9B9B9B">9B9B9B</font> | <font v-pre color="#9B9B9B">10197915</font> |
| <font v-pre color="#FFFFFF">白色</font> | <font v-pre color="#FFFFFF">FFFFFF</font> | <font v-pre color="#FFFFFF">16777215</font> |
