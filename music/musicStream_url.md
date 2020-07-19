# 音频流URL

<img src="/imgs/download.svg" width="100" height="100"/>

## 获取音频流URL

> http://www.bilibili.com/audio/music-service-c/web/url

*请求方式：GET*

**url参数：**

| 参数名  | 类型 | 内容    | 必要性 | 备注 |
| ------- | ---- | ------ | ----- | ---- |
|sid      |num   |音频auID |必要    |      |
|privilege|num   |        |        |      |
|quality  |num   |        |        |      |


**json回复：**

根对象:

|字段|类型|内容|备注|
|----|---|----|----|
|code|num|返回值|0:成功|
|msg |str|    |    |
|data|obj|数据本体||

`data`对象:

|字段|类型|内容|备注|
|---|----|----|---|
|cover|nul|
|info|str|
|qualities|nul|
|sid|num|音频auID|
|size|num|文件大小（单位:字节）|
|timeout|num|有效时长(一般为三个小时)|
|title|nul|
|type|num|
|cdns|array|音频url|

`data`对象的`cdns`数组:


| 项   | 类型 | 内容              | 备注 |
|------|-----|-------------------|-----|
| 0    | str | 音频url            |     |
| 1    | str |                    |     |
