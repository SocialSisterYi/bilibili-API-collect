# data.index

## data.index文件解析

本解密及数据解析例程以《在魔王城说晚安 第 1 话 不眠之城的公主》为例

本话链接：https://manga.bilibili.com/mc26731/329893 （mcid=`26731`, epid=`329893`）

使用 Python 语言为例

### 获取data.index

直接使用 GET 方法请求该话对应的 data.index 文件地址，就会得到一个二进制文件

```bash
curl -s 'https://manga.hdslb.com/bfs/manga/26731/329893/data.index?token=4b93ced19dc5ade671064804232ef4f5&ts=634e1943' | hexdump -C
```

data.index 文件内容的 HEX 如下

首部有 9 Byte 作为 File Magic 内容是 ASCII 编码的 `BILICOMIC`

```
00000000  42 49 4c 49 43 4f 4d 49  43 f5 43 06 04 7f 68 08  |BILICOMIC.C...h.|
00000010  00 ad 08 05 00 6b 68 00  00 a5 08 05 00 6b 68 00  |.....kh......kh.|
00000020  00 a5 08 0c 00 6b 68 69  6e c1 6d 7d 2e 0f 09 74  |.....khin.m}...t|
00000030  ec 33 c3 8f 5c 2c 64 86  df 40 a4 82 58 9c 42 f5  |.3..\,d..@..X.B.|
00000040  ab 21 51 4d aa f9 f1 e0  84 84 9b 40 12 58 87 1e  |.!QM.......@.X..|
00000050  ba 28 29 7d ce 89 04 03  d9 91 8d fd 7e 31 1d be  |.()}........~1..|
00000060  ba d8 35 ef cb a0 83 db  71 5e f1 ee f1 90 19 43  |..5.....q^.....C|
00000070  03 dd 32 f7 b8 7a b7 07  7f b9 3f 7d 3a d5 54 7e  |..2..z....?}:.T~|
00000080  5f fa e2 bd c1 90 bb 0f  9c 7d 34 e4 f0 49 2f 17  |_........}4..I/.|
00000090  39 1b c0 cc 45 25 47 72  76 34 13 12 b9 12 f9 f3  |9...E%Grv4......|
000000a0  8b b9 56 13 72 be 60 5e  55 27 5f 98 e0 3e 41 78  |..V.r.`^U'_..>Ax|
000000b0  d5 af 56 d0 82 3c d5 e0  55 94 70 d0 0c 16 5f 33  |..V..<..U.p..._3|
000000c0  c5 bb 14 d7 e9 e5 4a 7c  7f db 04 ea 7b 9b 90 94  |......J|....{...|
000000d0  fd 53 e1 d2 f8 86 1b 7c  ea 97 dd 0b 22 33 75 39  |.S.....|...."3u9|
000000e0  24 76 39 38 6d 58 a4 ed  b4 14 8f 71 49 95 9c cb  |$v98mX.....qI...|
000000f0  eb 42 eb ec df a2 22 ae  39 0c 3d 03 95 43 27 55  |.B....".9.=..C'U|
00000100  c1 c8 b2 37 2c 01 b0 f4  22 7c 51 1a 93 b5 ab 6d  |...7,..."|Q....m|
00000110  72 95 0c 33 9a ed 2d d6  22 f0 08 b6 5c bb f6 b5  |r..3..-."...\...|
00000120  07 5f cf a1 3a 66 c8 30  41 29 31 dd 17 63 46 85  |._..:f.0A)1..cF.|
00000130  ea 53 20 a0 aa 89 65 91  78 37 ac 4b 06 e6 59 7a  |.S ...e.x7.K..Yz|
00000140  c2 b7 10 56 cc a0 2e 85  94 09 01 89 83 43 82 a4  |...V.........C..|
00000150  db 60 91 89 15 83 aa 45  aa d6 5f fd 6a 64 f9 1c  |.`.....E.._.jd..|
00000160  9d ef c3 6c 34 85 e7 49  8a a7 c3 bc 32 09 eb b8  |...l4..I....2...|
00000170  ef 70 ab d6 6a d2 7f f6  96 b1 9a 75 eb f8 47 34  |.p..j......u..G4|
00000180  db 1d 99 78 57 58 04 4e  e0 c4 a4 58 d8 81 f5 02  |...xWX.N...X....|
00000190  3c 42 7e 1c 27 98 3c 70  df 04 13 33 fa ff 21 3b  |<B~.'.<p...3..!;|
000001a0  6c b4 52 ed 16 27 c8 c9  3a a5 fb 21 b9 dc a9 8a  |l.R..'..:..!....|
000001b0  68 0a 38 f0 4c 33 55 96  a8 a5 dd b1 1a 75 b0 26  |h.8.L3U......u.&|
000001c0  83 ea a4 49 23 03 77 42  bd f3 f1 5d 82 a8 73 67  |...I#.wB...]..sg|
000001d0  2f ef 67 49 14 69 8c b9  d6 62 2c 8d 43 93 f2 b9  |/.gI.i...b,.C...|
000001e0  d2 bd 21 4f 2d 48 20 f6  02 d0 05 17 d3 8e 1b 9d  |..!O-H .........|
000001f0  58 6c 6a 67 a9 ef 64 ca  4d 9c 40 17 c3 6f 2a 70  |Xljg..d.M.@..o*p|
00000200  36 0b 14 4c 51 a9 4f ff  b9 75 42 b2 8f 2c fb c3  |6..LQ.O..uB..,..|
00000210  d1 13 2c 0b de 48 24 64  24 6f 88 b4 eb af cf ce  |..,..H$d$o......|
00000220  66 3a 12 58 dc 3f c5 03  94 a3 e1 ef 1d 59 ca d5  |f:.X.?.......Y..|
00000230  58 07 b8 e3 c9 71 b2 e0  c9 15 54 4c cd e1 62 19  |X....q....TL..b.|
00000240  66 4e 02 f0 a0 85 8c a4  b5 f6 47 e3 c9 dd c3 54  |fN........G....T|
00000250  4d fc c8 45 e7 8f 22 00  68 e0 46 f4 ec 19 b4 b0  |M..E..".h.F.....|
00000260  f8 01 53 21 68 ad 49 6b  37 f5 fa 5f 0e 18 07 f3  |..S!h.Ik7.._....|
00000270  14 bf 03 59 f4 d5 5e a7  9c fd e1 90 9b 18 a9 12  |...Y..^.........|
00000280  b1 a7 2c 52 1d d2 b8 81  c7 3d 22 6f 5b de f9 4e  |..,R.....="o[..N|
00000290  ba 38 c0 84 99 5d e3 7b  ba 04 e1 e1 9a 0d bc 31  |.8...].{.......1|
000002a0  ef 6e 79 5c 38 e7 1d 72  9a 51 ea 55 6e fb a1 b8  |.ny\8..r.Q.Un...|
000002b0  75 29 b3 06 a9 52 10 53  17 24 e6 84 4b 00 f5 59  |u)...R.S.$..K..Y|
000002c0  81 28 ad cd cc dd a9 a6  56 a5 06 e7 65 39 6b 89  |.(......V...e9k.|
000002d0  5c 13 ba 51 c0 48 91 fc  74 19 b5 f9 bd d4 d5 44  |\..Q.H..t......D|
000002e0  ea 6a e7 02 6c 96 9d ed  2d d7 37 49 7f c3 e2 cd  |.j..l...-.7I....|
000002f0  ff 0e f7 90 ea 88 7e bc  17 4a df e5 fb 98 93 3f  |......~..J.....?|
00000300  01 a5 08 fa ff 3b 23 07  08 ac 60 82 8a be 6a 00  |.....;#...`...j.|
00000310  00 dd 02 05 00 3b 23 01  02 b1 08 11 00 63 68 08  |.....;#......ch.|
00000320  00 a5 08 05 00 62 00 87  8a 70 0a 05 00 13 62 00  |.....b...p....b.|
00000330  00 ac 08 05 00 6b 68 00  00 a5 08 05 00 6b 68 00  |.....kh......kh.|
00000340  00 a5 08 6c 6e 0f 0d 78  2e c1 69 71 50 20 6d 06  |...ln..x..iqP m.|
00000350  00 a5 08 05 01 6b 69 00  37 a5 08 05 0c 68 68 00  |.....ki.7....hh.|
00000360  00 a5                                             |..|
```

### 文件解密算法

首先以`mcid`（对应漫画id）以及`epid`（对应单话）生成一个 8 Byte 的数组作为密钥

具体内容为前 4 Byte 为 epid 后 4 Byte 为 mcid，字节排序均为小端序 MSB First

接下来从返回数据的 09H 处开始，逐字节与密钥取单个字节进行 **XOR（异或）**运算，密钥数组每 8 Byte 循环一次

解密成功的数据是一个 zip 格式的压缩文件，提取`index.dat`中的数据并以 JSON 数据解析就完成了

### 进行解密操作

设`mcid=26731` `epid=329893`，计算得到的数组便是密钥

```python
mcid = 26731
epid = 329893
key = list(epid.to_bytes(4, 'little') + mcid.to_bytes(4, 'little'))
print(key)
```

```python
[165, 8, 5, 0, 107, 104, 0, 0]
```

拉取索引数据并解密，需要**跳过前 9 Byte**，这时候已经能看到数据具有 zip 格式压缩文件的特征，前两 Byte 为 “PK”（50H 4BH）

```python
import requests

data = requests.get('https://manga.hdslb.com/bfs/manga/26731/329893/data.index?token=0ba7042d3a5d138c59151316a1914058&ts=634e53fb').content

temp = bytearray(data[9:])
for i in range(len(temp)):
   temp[i] ^= key[i % 8]
print(temp)
```

```python
bytearray(b'PK\x03\x04\x14\x00\x08\x00\x08\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\t\x00\x00\x00index.dat\xec\x96\xcb\x8a\\G\x0c\x86\xdf\xe5\xac\x87X\xf7*\xf5\xab\x84YH\xaa\x92\x99\xe0\x84!\x93E\x123\xef\x1e\xba\x8d!x\xce\xe2l\x03\xd94\x85\xf8~Zu\xbe\xba}=\xea\xcb\xcb\xeb\xdbq\xfb\xf9\xeb\xf1\xfbqC\x03x:\xf2\xb8\x11\xdf\x07\x7f\x1c7x:\xbe<~__\xea\xb8\xc1\xfb\xd3\x0f\x9c\xd8<\xe1\xf0"G\x179\xbe\xc8\xc9EN/rv\x91\x1b\x17\xb9y\x91\xf3\x8b\x1c^\x16r\xd5\x08^U\x82W\x9d\xe0U)x\xd5\n^\xd5\x82W\xbd\xe0U1x\xd5\x0c}73\xc5\x1e\x1c\xd2\xe9\x8e"|\x7f~\x0c\xef{\xf0\xf8\x94\xfd\xf6\xe9\xd7\xf8\xeds|\xea2\xd5\x0e"X\x1d9$\xd31=m3\xcc\xed\xb4\xb1\x87tI\xfe\xf4\xcb\xeb\xe7\xe3\xe9\xdf\xc9J\xae9\xa95\x06\x95(OU\xc1m\xba2,j\xd8\xf4"\xd9Y\x1f\x93\xde\xc3mr0\x046\x9a\x86E\xd6"U\x00\xb3\\\xd0\x9e\xb5\x07\xfa\xc7\xa4:\r\xa00A\x8c9\xd8\x17\x08.\x85\xea\xf6(\xa5\xaa\xe2\r\x91x\x92\xa4N\x06\x8d1z\xc2\x12\x18S\xcc\xcbF\x85\x94\xac\t\x8c\x83(\xea\xa4\xdb\xc5\x99\x8c\x15\xe8\xc2E\xaasW\xf8j\x0f\x91\x1c\x9dJ\xcbi4\xee\x8fI\x8a\x02\xcb\xb92b\x83\xb8\xef\xd5\xa3\xd3j\xb9\x17\xf6\x96\x14\x92p\xeb\x93/4\xdb\xb8\x91}W3lN\xe0a\xac]\xd8\xea\x9d\x02<\xe7v\x19\'\xf3Tp\xdf\xa1\x1b6\xfa\x94I;l\x11Z\xe8\x16L\xa0\xc9:\x00\xf3$\xb9\xb7\xc1\x8ah\xaf0\xf5LX=\x96\xa8\x00\xd5\xb4\x1a\x1e\xd8&\x83O\xacL#h\x1fB\xbdV\xf9X\x82\xc3\x1bg/JoL\x14\x02\xe4\xb9\xd6\xc7$\x88C\xf8\x9a\xb9\xd2\x18)J-#H\xf6\x02u\r\x12\xd3\xe5s\x9dX\xc9bb\xa9\x84\x0c\xcaM9H\x12\xc3\x04Bp6\xae\x1cIQ\xc2\'\xff\xb9\xd0J\xb7\x8fG\x93\xc3\xd1\xb6$\x0e\xde#Ld$\xca\x80\xb1\xeb\xc4\xa7\xcef\x9f\x1a]\xdcT\xad\x03\x94\x06\xe9\xea\x1d2\xa2\xd5X\xa2\xb0\xe6\xc9\x1a\xda\xe0\xc9\xb0\\I\xcd\x8a\n\x19f\xeb\n\xf5\xa0\xee\xe4\xa4\xb5SO\xe6\xc9\xb6\xabTMY\xc0@\xe7\xe4J\x00hEN\xf1\xecr\xdc\xb0\xf8\xa4[$h\xc6!k7P\xf2Z\x0eso\xf3\x14\x1a\x0b\\\xf4\xbe6\xa7\x9cX\xe9\x95\x9bs\xc1\x12\xb1\x02$W\x1d\xb9\xd0\x81\xc7\x98*j[\xb5\x91N\xba\x9d\xc8\x81\x996\x8b{\xba\xa1\xe9\xe4\x9af\xd41\xef\xcbqY8\x8cur\x9a\xf4\xe2Pn\x90\xc9\xb8u\x8c\xbb\x03\xa99xS\x17\x81\xee\x81Kk\x9dY\x81\x8d\xa5\xc8\xcc\xb6\xc1\xa6V\x00\x0e\xe2eR\x03\x89\\\xb6\xb2T\xc0#\xf9\xfct\xbc\xbd\xfc\xbd\xbf\xbdD\xea\xcf\xef\x07l\xfd\xf5\xed-r?L\x7f\xa8\x8a\xcd\xff\xab\xff\x95\xea\xe3\x16\xbc\x17\xef\xd7\xe0\xfb\xf3\xfb?\x01\x00\x00\xff\xffPK\x07\x08\th\x87\x8a\xd5\x02\x00\x00x\n\x00\x00PK\x01\x02\x14\x00\x14\x00\x08\x00\x08\x00\x00\x00\x00\x00\th\x87\x8a\xd5\x02\x00\x00x\n\x00\x00\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00index.datPK\x05\x06\x00\x00\x00\x00\x01\x00\x01\x007\x00\x00\x00\x0c\x03\x00\x00\x00\x00')
```

进行解压缩数据，提取`index.dat`中的数据

```python
import zipfile
from io import BytesIO

with zipfile.ZipFile(BytesIO(temp)) as zf:
    index_data = zf.read('index.dat')
print(index_data)
```

JSON 内容如下：

<details>
<summary>查看json内容：</summary>

```json
{
    "clips": [
        {"r": 1600, "b": 2300, "t": 0, "l": 0, "pic": 0},
        {"r": 1600, "b": 2468, "t": 0, "l": 0, "pic": 1},
        {"r": 1600, "b": 2468, "t": 0, "l": 0, "pic": 2},
        {"r": 1600, "b": 2468, "t": 0, "l": 0, "pic": 3},
        {"r": 1600, "b": 2468, "t": 0, "l": 0, "pic": 4},
        {"r": 1600, "b": 2468, "t": 0, "l": 0, "pic": 5},
        {"r": 1600, "b": 2468, "t": 0, "l": 0, "pic": 6},
        {"r": 1600, "b": 2468, "t": 0, "l": 0, "pic": 7},
        {"r": 1600, "b": 2468, "t": 0, "l": 0, "pic": 8},
        {"r": 1600, "b": 2468, "t": 0, "l": 0, "pic": 9},
        {"r": 1600, "b": 2468, "t": 0, "l": 0, "pic": 10},
        {"r": 1600, "b": 2468, "t": 0, "l": 0, "pic": 11},
        {"r": 1600, "b": 2468, "t": 0, "l": 0, "pic": 12},
        {"r": 1600, "b": 2468, "t": 0, "l": 0, "pic": 13},
        {"r": 1600, "b": 2468, "t": 0, "l": 0, "pic": 14},
        {"r": 1600, "b": 2468, "t": 0, "l": 0, "pic": 15},
        {"r": 1600, "b": 2468, "t": 0, "l": 0, "pic": 16},
        {"r": 1600, "b": 2468, "t": 0, "l": 0, "pic": 17},
        {"r": 1600, "b": 2468, "t": 0, "l": 0, "pic": 18},
        {"r": 1600, "b": 2468, "t": 0, "l": 0, "pic": 19},
        {"r": 1600, "b": 2468, "t": 0, "l": 0, "pic": 20},
        {"r": 846,  "b": 1200, "t": 0, "l": 0, "pic": 21}
    ],
    "pics": [
        "/bfs/manga/fc655fa220dfab74bb91b9b6e308e92e1f74fc4b.jpg",
        "/bfs/manga/cb3c882f5a72c45385541e65dba6ac7689c24ebc.jpg",
        "/bfs/manga/9f79683a30a1f165a6abcd2550066bd0f9bce719.jpg",
        "/bfs/manga/592702a6411a8739d041d50cff9ac52ccc3e0ab1.jpg",
        "/bfs/manga/52fb305a77f80d4078469c67ca4c4d8031722acc.jpg",
        "/bfs/manga/d3bb31ca1943c2558eca9df9a44b7fb52d927f1e.jpg",
        "/bfs/manga/2ac06b8dbaae0499edf7fb6cd99c1fe4b424a96f.jpg",
        "/bfs/manga/98f63f139ecf30e3b037635fc1f59fb40388e947.jpg",
        "/bfs/manga/55099ea5e0e198482ea6d216a5e41b02835701b7.jpg",
        "/bfs/manga/ee60daaf9ca659bb0df7d45402c86c79a1f64739.jpg",
        "/bfs/manga/8620f9742fddc97d4179f18fd2b9f1b1420138dd.jpg",
        "/bfs/manga/0490a9d8bdb6312ac56baa24ed0595a2465d98dc.jpg",
        "/bfs/manga/bc3234cb0ba2be2b724b1a640a418f1db7b2ac43.jpg",
        "/bfs/manga/0d16c5e9779f187916e4b173e7a6447b14707ece.jpg",
        "/bfs/manga/58f3985afc3f2cf57052725dfea47af5634ac1c8.jpg",
        "/bfs/manga/de09b30d952566c2c1308f5da59a2ffb3b2deb5c.jpg",
        "/bfs/manga/36ecc5565340605883cb000f513b49bfc91e0d3e.jpg",
        "/bfs/manga/120f3174def02b3dd908ee69b427d094506b884d.jpg",
        "/bfs/manga/fdbe3bd0d446c0129557bd19037785456e55f12c.jpg",
        "/bfs/manga/813a1bb68c3f89616583c8662fa81984d6a907db.jpg",
        "/bfs/manga/fd3a53f04831e577707e4c873e2fc205e71d5cde.jpg",
        "/bfs/manga/50e1c513336e0685ca01723d64c712294e534ca0.jpg"
    ],
    "sizes": [
        {"cx": 1600, "cy": 2300},
        {"cx": 1600, "cy": 2468},
        {"cx": 1600, "cy": 2468},
        {"cx": 1600, "cy": 2468},
        {"cx": 1600, "cy": 2468},
        {"cx": 1600, "cy": 2468},
        {"cx": 1600, "cy": 2468},
        {"cx": 1600, "cy": 2468},
        {"cx": 1600, "cy": 2468},
        {"cx": 1600, "cy": 2468},
        {"cx": 1600, "cy": 2468},
        {"cx": 1600, "cy": 2468},
        {"cx": 1600, "cy": 2468},
        {"cx": 1600, "cy": 2468},
        {"cx": 1600, "cy": 2468},
        {"cx": 1600, "cy": 2468},
        {"cx": 1600, "cy": 2468},
        {"cx": 1600, "cy": 2468},
        {"cx": 1600, "cy": 2468},
        {"cx": 1600, "cy": 2468},
        {"cx": 1600, "cy": 2468},
        {"cx": 846,  "cy": 1200}
    ]
}
```

</details> 

## data.index内容

以下内容为解密后的 JSON 数据定义

根对象：

| 字段  | 类型  | 内容     | 备注 |
| ----- | ----- | -------- | ---- |
| clips | array | 尺寸信息 |      |
| pics  | array | 图片路径 |      |
| sizes | array | 尺寸信息 |      |

根对象中的`clips`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | obj  | 第 1 页信息     |      |
| n    | obj  | 第 (n+1) 页信息 |      |
| ……   | obj  | ……              | ……   |

`clips`数组中的对象：

| 字段 | 类型 | 内容         | 备注          |
| ---- | ---- | ------------ | ------------- |
| r    | num  | 图片宽度     |               |
| b    | num  | 图片高度     |               |
| t    | num  | (?)          |               |
| l    | num  | (?)          |               |
| pic  | num  | 图片页码序号 | 从 0 开始递增 |

根对象中的`pics`数组：

| 项   | 类型 | 内容              | 备注                           |
| ---- | ---- | ----------------- | ------------------------------ |
| 0    | str  | 第 1 图片路径     | 图片不能直接访问，需要二次鉴权 |
| n    | str  | 第 (n+1) 图片路径 |                                |
| ……   | str  | ……                | ……                             |

根对象中的`sizes`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | obj  | 第 1 页信息     |      |
| n    | obj  | 第 (n+1) 页信息 |      |
| ……   | obj  | ……              | ……   |

`clips`数组中的对象：

| 字段 | 类型 | 内容     | 备注 |
| ---- | ---- | -------- | ---- |
| cx   | num  | 图片宽度 |      |
| cy   | num  | 图片高度 |      |
