
# bvid说明

2020-03-23 B站推出了全新的稿件视频id`bvid`来接替之前的`avid`，其意义与之相同

详见：

1. [【升级公告】AV号全面升级至BV号（专栏）](https://www.bilibili.com/read/cv5167957)
2. [【升级公告】AV号全面升级至BV号](https://www.bilibili.com/blackboard/activity-BV-PC.html)

## 概述

### 格式

“bvid”恒为长度为 12 的字符串，前 3 个固定为“BV1”，后 9 个为 base58 计算结果（不包含数字 `0` 和大写字母 `I`、 `O` 以及小写字母 `l`）

### 实质

“bvid"为“avid”的base58编码，可通过算法进行相互转化

### avid发号方式的变化

从 2009-09-09 09:09:09 [av2](https://www.bilibili.com/video/av2) 的发布到 2020-03-28 19:45:02 [av99999999](https://www.bilibili.com/video/av99999999) 的发布B站结束了以投稿时间为顺序的avid发放，改为随机发放avid

~~暗示B站东方要完？泪目~~

## 算法概述

~~算法以及程序主要参考[知乎@mcfx的回答](https://www.zhihu.com/question/381784377/answer/1099438784)~~
~~实际上该算法并不完整,新的算法参考自[【揭秘】av号转bv号的过程](https://www.bilibili.com/video/BV1N741127Tj)~~
实际上上面的算法依然不完整，新的算法参考自 [SocialSisterYi#740](https://github.com/SocialSisterYi/bilibili-API-collect/issues/740)~~来自 B 站某个 JS 文件？~~

### av->bv算法

**说明**

1. 目前的 BV 格式为 BV1XXXXXXXXX，以 BV1 开头，后面包含 9 位有效数据。
2. AV 最大值为 2⁵¹。

**算法**

- 定义一个包含初始值为 `['B', 'V', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0']` 的长度为 12 的数组`bytes`，用于存储转换后的字符。
  - 定义变量 `bv_idx` 并初始化为数组 `bytes` 的最后一个索引。
  - 将输入的 `aid` 与 avid 最大值（2⁵¹）进行按位或运算，其结果与常量 `XOR_CODE`（23442827791579）进行异或运算，得到变量 `tmp`。
  - 当 `tmp` 大于0时，循环执行以下操作直到小于0：
    - 将 `tmp` 除以 58（码表的长度） 的余数作为索引，从 `FcwAPNKTMug3GV5Lj7EJnHpWsx4tb8haYeviqBz6rkCy12mUSDQX9RdoZf` 码表中取出对应的字符，并将其赋值给 `bytes[bv_idx]`。
    - 将 `tmp` 与 58 求模赋值给 `tmp`。
    - 将 `bv_idx` 减1。
  - 将 `bytes` 数组中索引为 3 和 9 的元素进行交换。
  - 将 `bytes` 数组中索引为 4 和 7 的元素进行交换。
  - 将 `bytes` 数组转换为字符串，并返回结果。

### bv->av算法

是 #av->bv算法 的逆向

- 将 `bvid` 中索引为 3 和 9 的字符进行交换。
- 将 `bvid` 中索引为 4 和 7 的字符进行交换。
- 删除 `bvid` 前3个字符（固定为 BV1）。
- 定义变量 `tmp` 并初始化为 0。
- 遍历 `bvid` 的每个字符，执行以下操作：
  - 获取当前字符在 `FcwAPNKTMug3GV5Lj7EJnHpWsx4tb8haYeviqBz6rkCy12mUSDQX9RdoZf` 码表中的索引，并将其赋值给变量 `idx`。
  - 将 `tmp` 乘以常量 58，并加上 `idx`，最后赋值给 `tmp`。
- 将 `tmp` 与常量 2⁵¹ - 1 进行按位与运算，其结果与常量 `XOR_CODE`（23442827791579） 进行异或运算，得到最终结果。

## 编程实现

### JavaScript/TypeScript

<CodeGroup>
  <CodeGroupItem title="JavaScript">

```javascript
const XOR_CODE = 23442827791579n;
const MASK_CODE = 2251799813685247n;
const MAX_AID = 1n << 51n;
const BASE = 58n;

const data = 'FcwAPNKTMug3GV5Lj7EJnHpWsx4tb8haYeviqBz6rkCy12mUSDQX9RdoZf';

function av2bv(aid) {
  const bytes = ['B', 'V', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0'];
  let bvIndex = bytes.length - 1;
  let tmp = (MAX_AID | BigInt(aid)) ^ XOR_CODE;
  while (tmp > 0) {
    bytes[bvIndex] = data[Number(tmp % BigInt(BASE))];
    tmp = tmp / BASE;
    bvIndex -= 1;
  }
  [bytes[3], bytes[9]] = [bytes[9], bytes[3]];
  [bytes[4], bytes[7]] = [bytes[7], bytes[4]];
  return bytes.join('');
}

function bv2av(bvid) {
  const bvidArr = Array.from(bvid);
  [bvidArr[3], bvidArr[9]] = [bvidArr[9], bvidArr[3]];
  [bvidArr[4], bvidArr[7]] = [bvidArr[7], bvidArr[4]];
  bvidArr.splice(0, 3);
  const tmp = bvidArr.reduce((pre, bvidChar) => pre * BASE + BigInt(data.indexOf(bvidChar)), 0n);
  return Number((tmp & MASK_CODE) ^ XOR_CODE);
}

console.log(av2bv(111298867365120));
console.log(bv2av('BV1L9Uoa9EUx'));
```

  </CodeGroupItem>

  <CodeGroupItem title="TypeScript">

```typescript
const XOR_CODE = 23442827791579n;
const MASK_CODE = 2251799813685247n;
const MAX_AID = 1n << 51n;
const BASE = 58n;

const data = 'FcwAPNKTMug3GV5Lj7EJnHpWsx4tb8haYeviqBz6rkCy12mUSDQX9RdoZf';

function av2bv(aid: number) {
  const bytes = ['B', 'V', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0'];
  let bvIndex = bytes.length - 1;
  let tmp = (MAX_AID | BigInt(aid)) ^ XOR_CODE;
  while (tmp > 0) {
    bytes[bvIndex] = data[Number(tmp % BigInt(BASE))];
    tmp = tmp / BASE;
    bvIndex -= 1;
  }
  [bytes[3], bytes[9]] = [bytes[9], bytes[3]];
  [bytes[4], bytes[7]] = [bytes[7], bytes[4]];
  return bytes.join('') as `BV1${string}`;
}

function bv2av(bvid: `BV1${string}`) {
  const bvidArr = Array.from<string>(bvid);
  [bvidArr[3], bvidArr[9]] = [bvidArr[9], bvidArr[3]];
  [bvidArr[4], bvidArr[7]] = [bvidArr[7], bvidArr[4]];
  bvidArr.splice(0, 3);
  const tmp = bvidArr.reduce((pre, bvidChar) => pre * BASE + BigInt(data.indexOf(bvidChar)), 0n);
  return Number((tmp & MASK_CODE) ^ XOR_CODE);
}

console.log(av2bv(111298867365120));
console.log(bv2av('BV1L9Uoa9EUx'));
```
  </CodeGroupItem>
</CodeGroup>

### Python

来自：[#847](https://github.com/SocialSisterYi/bilibili-API-collect/issues/847#issuecomment-1807020675)

```python
XOR_CODE = 23442827791579
MASK_CODE = 2251799813685247
MAX_AID = 1 << 51
ALPHABET = "FcwAPNKTMug3GV5Lj7EJnHpWsx4tb8haYeviqBz6rkCy12mUSDQX9RdoZf"
ENCODE_MAP = 8, 7, 0, 5, 1, 3, 2, 4, 6
DECODE_MAP = tuple(reversed(ENCODE_MAP))

BASE = len(ALPHABET)
PREFIX = "BV1"
PREFIX_LEN = len(PREFIX)
CODE_LEN = len(ENCODE_MAP)

def av2bv(aid: int) -> str:
    bvid = [""] * 9
    tmp = (MAX_AID | aid) ^ XOR_CODE
    for i in range(CODE_LEN):
        bvid[ENCODE_MAP[i]] = ALPHABET[tmp % BASE]
        tmp //= BASE
    return PREFIX + "".join(bvid)

def bv2av(bvid: str) -> int:
    assert bvid[:3] == PREFIX

    bvid = bvid[3:]
    tmp = 0
    for i in range(CODE_LEN):
        idx = ALPHABET.index(bvid[DECODE_MAP[i]])
        tmp = tmp * BASE + idx
    return (tmp & MASK_CODE) ^ XOR_CODE

assert av2bv(111298867365120) == "BV1L9Uoa9EUx"
assert bv2av("BV1L9Uoa9EUx") == 111298867365120
```

### Rust

参考 <https://github.com/Colerar/abv/blob/main/src/lib.rs>

### Swift

```swift
fileprivate let XOR_CODE: UInt64 = 23442827791579
fileprivate let MASK_CODE: UInt64 = 2251799813685247
fileprivate let MAX_AID: UInt64 = 1 << 51

fileprivate let data: [UInt8] = [70, 99, 119, 65, 80, 78, 75, 84, 77, 117, 103, 51, 71, 86, 53, 76, 106, 55, 69, 74, 110, 72, 112, 87, 115, 120, 52, 116, 98, 56, 104, 97, 89, 101, 118, 105, 113, 66, 122, 54, 114, 107, 67, 121, 49, 50, 109, 85, 83, 68, 81, 88, 57, 82, 100, 111, 90, 102]

fileprivate let BASE: UInt64 = 58
fileprivate let BV_LEN: Int = 12
fileprivate let PREFIX: String = "BV1"

func av2bv(avid: UInt64) -> String {
    var bytes: [UInt8] = [66, 86, 49, 48, 48, 48, 48, 48, 48, 48, 48, 48]
    var bvIdx = BV_LEN - 1
    var tmp = (MAX_AID | avid) ^ XOR_CODE

    while tmp != 0 {
        bytes[bvIdx] = data[Int(tmp % BASE)]
        tmp /= BASE
        bvIdx -= 1
    }

    bytes.swapAt(3, 9)
    bytes.swapAt(4, 7)

    return String(decoding: bytes, as: UTF8.self)
}

func bv2av(bvid: String) -> UInt64 {
    let fixedBvid: String
    if bvid.hasPrefix("BV") {
        fixedBvid = bvid
    } else {
        fixedBvid = "BV" + bvid
    }
    var bvidArray = Array(fixedBvid.utf8)

    bvidArray.swapAt(3, 9)
    bvidArray.swapAt(4, 7)

    let trimmedBvid = String(decoding: bvidArray[3...], as: UTF8.self)

    var tmp: UInt64 = 0

    for char in trimmedBvid {
        if let idx = data.firstIndex(of: char.utf8.first!) {
            tmp = tmp * BASE + UInt64(idx)
        }
    }

    return (tmp & MASK_CODE) ^ XOR_CODE
}

print(av2bv(avid: 111298867365120))
print(bv2av(bvid: "BV1L9Uoa9EUx"))
```

### Java

```java
import java.math.BigInteger;

/**
 * @author cctyl
 */
public class AVBVConverter {

    private static final BigInteger XOR_CODE = BigInteger.valueOf(23442827791579L);
    private static final BigInteger MASK_CODE = BigInteger.valueOf(2251799813685247L);
    private static final BigInteger MAX_AID = BigInteger.ONE.shiftLeft(51);
    private static final int BASE = 58;

    private static final String DATA = "FcwAPNKTMug3GV5Lj7EJnHpWsx4tb8haYeviqBz6rkCy12mUSDQX9RdoZf";

    public static String av2bv(long aidParam) {
        BigInteger aid = BigInteger.valueOf(aidParam);
        char[] bytes = {'B', 'V', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0'};
        int bvIndex = bytes.length - 1;
        BigInteger tmp = MAX_AID.or(aid).xor(XOR_CODE);
        while (tmp.compareTo(BigInteger.ZERO) > 0) {
            bytes[bvIndex] = DATA.charAt(tmp.mod(BigInteger.valueOf(BASE)).intValue());
            tmp = tmp.divide(BigInteger.valueOf(BASE));
            bvIndex--;
        }
        swap(bytes, 3, 9);
        swap(bytes, 4, 7);
        return new String(bytes);
    }

    public static long bv2av(String bvid) {
        char[] bvidArr = bvid.toCharArray();
        swap(bvidArr, 3, 9);
        swap(bvidArr, 4, 7);
        String adjustedBvid = new String(bvidArr, 3, bvidArr.length - 3);
        BigInteger tmp = BigInteger.ZERO;
        for (char c : adjustedBvid.toCharArray()) {
            tmp = tmp.multiply(BigInteger.valueOf(BASE)).add(BigInteger.valueOf(DATA.indexOf(c)));
        }
        BigInteger xor = tmp.and(MASK_CODE).xor(XOR_CODE);
        return xor.longValue();
    }


    private static void swap(char[] array, int i, int j) {
        char temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    public static void main(String[] args) {

        final int aid1 = 643755790;
        final String bv1 = "BV1bY4y1j7RA";

        final int aid2 = 305988942;
        final String bv2 = "BV1aP411K7it";

        //av ==> bv
        assert av2bv(aid1).equals(bv1);
        assert av2bv(aid2).equals(bv2);

        //bv ==>av
        assert bv2av(bv1) == aid1;
        assert bv2av(bv2) == aid2;
    }
}
```

### Golang

```go
package main

import (
	"fmt"
	"strings"
)

var (
	XOR_CODE = int64(23442827791579)
	MAX_CODE = int64(2251799813685247)
	CHARTS   = "FcwAPNKTMug3GV5Lj7EJnHpWsx4tb8haYeviqBz6rkCy12mUSDQX9RdoZf"
	PAUL_NUM = int64(58)
)

func swapString(s string, x, y int) string {
	chars := []rune(s)
	chars[x], chars[y] = chars[y], chars[x]
	return string(chars)
}

func Bvid2Avid(bvid string) (avid int64) {
	s := swapString(swapString(bvid, 3, 9), 4, 7)
	bv1 := string([]rune(s)[3:])
	temp := int64(0)
	for _, c := range bv1 {
		idx := strings.IndexRune(CHARTS, c)
		temp = temp*PAUL_NUM + int64(idx)
	}
	avid = (temp & MAX_CODE) ^ XOR_CODE
	return
}

func Avid2Bvid(avid int64) (bvid string) {
	arr := [12]string{"B", "V", "1"}
	bvIdx := len(arr) - 1
	temp := (avid | (MAX_CODE + 1)) ^ XOR_CODE
	for temp > 0 {
		idx := temp % PAUL_NUM
		arr[bvIdx] = string(CHARTS[idx])
		temp /= PAUL_NUM
		bvIdx--
	}
	raw := strings.Join(arr[:], "")
	bvid = swapString(swapString(raw, 3, 9), 4, 7)
	return
}

func main() {
	avid := int64(1054803170)
	bvid := "BV1mH4y1u7UA"
	resAvid := Bvid2Avid(bvid)
	resBvid := Avid2Bvid(avid)

	fmt.Printf("convert bvid to avid: %v\tvalue:%v\n", avid == resAvid, resAvid)
	fmt.Printf("convert avid to bvid: %v\tvalue:%v\n", bvid == resBvid, resBvid)

}

```


### C++
```cpp
#include <algorithm>
#include <cassert>
#include <print>
#include <string>

constexpr int64_t XOR_CODE          = 0x1552356C4CDB;
constexpr int64_t MAX_AID           = 0x8000000000000;
constexpr int64_t MASK_CODE         = MAX_AID - 1;
constexpr int64_t BASE              = 58;
constexpr char    Table[BASE + 1]   = "FcwAPNKTMug3GV5Lj7EJnHpWsx4tb8haYeviqBz6rkCy12mUSDQX9RdoZf";
constexpr char    ReverseTable[128] = {
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x2c, 0x2d, 0x0b, 0x1a, 0x0e, 0x27, 0x11, 0x1d, 0x34, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x03, 0x25, 0x2a, 0x31, 0x12, 0x00, 0x0c, 0x15, 0x00, 0x13, 0x06, 0x0f, 0x08, 0x05, 0x00,
    0x04, 0x32, 0x35, 0x30, 0x07, 0x2f, 0x0d, 0x17, 0x33, 0x20, 0x38, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x1f, 0x1c, 0x01, 0x36, 0x21, 0x39, 0x0a, 0x1e, 0x23, 0x10, 0x29, 0x00, 0x2e, 0x14, 0x37,
    0x16, 0x24, 0x28, 0x18, 0x1b, 0x09, 0x22, 0x02, 0x19, 0x2b, 0x26, 0x00, 0x00, 0x00, 0x00, 0x00
};

std::string Av2bv(const int64_t Avid) {
    assert(Avid > 0 && "Avid must be greater than 0");
    std::string bv = "BV1";
    bv.resize(12, '\0');

    int64_t tmp = (Avid | MAX_AID) ^ XOR_CODE;
    for (size_t i = bv.size() - 1; tmp > 0 && i > 2; --i) {
        bv[i] = Table[tmp % BASE];
        tmp /= BASE;
    }
    std::ranges::swap(bv.at(3), bv.at(9));
    std::ranges::swap(bv.at(4), bv.at(7));
    return bv;
}

int64_t Bv2av(const std::string &Bvid) {
    assert(Bvid.starts_with("BV1") && "Bvid must start with 'BV1'");

    auto Bvid_ = Bvid;
    std::ranges::swap(Bvid_.at(3), Bvid_.at(9));
    std::ranges::swap(Bvid_.at(4), Bvid_.at(7));

    int64_t tmp = 0;
    for (int i = 3; i < Bvid_.size(); ++i) {
        tmp = ReverseTable[Bvid_.at(i)] + BASE * tmp;
    }
    return (tmp & MASK_CODE) ^ XOR_CODE;
}

int main() {
    assert(Av2bv(1004871019) == "BV16x4y1H7M1");
    assert(Bv2av("BV16x4y1H7M1") == 1004871019);
}
```



## 老版算法存档

**以下算法已失效**，编解码函数值域有限，不推荐使用，在此仅作为存档

<details>
<summary>查看折叠内容：</summary>

算法参考自[【揭秘】av号转bv号的过程](https://www.bilibili.com/video/BV1N741127Tj)

### av->bv算法

注：本算法及示例程序仅能编解码`avid < 29460791296`，且暂无法验证`avid >= 29460791296`的正确性
再注：本人不清楚新算法能否编解码`avid >= 29460791296`

1. a = (avid ⊕ 177451812) + 100618342136696320
2. 以 i 为循环变量循环 6 次 b[i] = (a / 58 ^ i) % 58
3. 将 b[i] 中各个数字转换为以下码表中的字符

码表：

> fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF

4. 初始化字符串 b[i]=` `

5. 按照以下字符顺序编码表编码并填充至 b[i]

字符顺序编码表：

> 0 -> 9
>
> 1 -> 8
>
> 2 -> 1
>
> 3 -> 6
>
> 4 -> 2
>
> 5 -> 4
>
> 6 -> 0
>
> 7 -> 7
>
> 8 -> 3
>
> 9 -> 5

### bv->av算法

为以上算法的逆运算

### 编程实现

使用 Python C TypeScript Java Kotlin Golang Rust 等语言作为示例，欢迎社区提交更多例程

#### Python

```python
XOR = 177451812
ADD = 100618342136696320
TABLE = "fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF"
MAP = 9, 8, 1, 6, 2, 4, 0, 7, 3, 5


def av2bv(av: int) -> str:
    av = (av ^ XOR) + ADD
    bv = [""] * 10
    for i in range(10):
        bv[MAP[i]] = TABLE[(av // 58**i) % 58]
    return "".join(bv)


def bv2av(bv: int) -> int:
    av = [""] * 10
    s = 0
    for i in range(10):
        s += TABLE.find(bv[MAP[i]]) * 58**i
    av = (s - ADD) ^ XOR

    return av


def main():
    while 1:
        mode = input("1. AV to BV\n2. BV to AV\n3. Exit\n你的选择：")
        if mode == "1":
            print(f"BV号是：BV {av2bv(int(input('AV号是：')))}")
        elif mode == "2":
            print(f"AV号是：AV {bv2av(input('BV号是：'))}")
        elif mode == "3":
            break
        else:
            print("输入错误请重新输入")


if __name__ == "__main__":
    main()
```

#### C

```c
#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>

const char table[] = "fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF"; // 码表
char tr[124]; // 反查码表
const unsigned long long XOR = 177451812; // 固定异或值
const unsigned long long ADD = 8728348608; // 固定加法值
const int s[] = {11, 10, 3, 8, 4, 6}; // 位置编码表

// 初始化反查码表
void tr_init() {
	for (int i = 0; i < 58; i++)
		tr[table[i]] = i;
}

unsigned long long bv2av(char bv[]) {
	unsigned long long r = 0;
	unsigned long long av;
	for (int i = 0; i < 6; i++)
		r += tr[bv[s[i]]] * (unsigned long long)pow(58, i);
	av = (r - ADD) ^ XOR;
	return av;
}

char *av2bv(unsigned long long av) {
	char *result = (char*)malloc(13);
	strcpy(result,"BV1  4 1 7  ");
	av = (av ^ XOR) + ADD;
	for (int i = 0; i < 6; i++)
		result[s[i]] = table[(unsigned long long)(av / (unsigned long long)pow(58, i)) % 58];
	return result;
}

int main() {
	tr_init();
	printf("%s\n", av2bv(170001));
	printf("%u\n", bv2av("BV17x411w7KC"));
	return 0;
}
```

输出为：

```
BV17x411w7KC
170001
```

#### TypeScript

感谢[#417](https://github.com/SocialSisterYi/bilibili-API-collect/issues/417#issuecomment-1186475063)提供

```typescript
export default class BvCode {
  private TABEL = 'fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF'; // 码表
  private TR: Record<string, number> = {}; // 反查码表
  private S = [11, 10, 3, 8, 4, 6]; // 位置编码表
  private XOR = 177451812; // 固定异或值
  private ADD = 8728348608; // 固定加法值
  constructor() {
    // 初始化反查码表
    const len = this.TABEL.length;
    for (let i = 0; i < len; i++) {
      this.TR[this.TABEL[i]] = i;
    }
  }
  av2bv(av: number): string {
    const x_ = (av ^ this.XOR) + this.ADD;
    const r = ['B', 'V', '1', , , '4', , '1', , '7'];
    for (let i = 0; i < 6; i++) {
      r[this.S[i]] = this.TABEL[Math.floor(x_ / 58 ** i) % 58];
    }
    return r.join('');
  }
  bv2av(bv: string): number {
    let r = 0;
    for (let i = 0; i < 6; i++) {
      r += this.TR[bv[this.S[i]]] * 58 ** i;
    }
    return (r - this.ADD) ^ this.XOR;
  }
}

const bvcode = new BvCode();

console.log(bvcode.av2bv(170001));
console.log(bvcode.bv2av('BV17x411w7KC'));
```

输出为：

```
BV17x411w7KC
170001
```

#### Java

```java
/**
 * 算法来自：https://www.zhihu.com/question/381784377/answer/1099438784
 */
public class Util {
    private static final String TABLE = "fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF";
    private static final int[] S = new int[]{11, 10, 3, 8, 4, 6};
    private static final int XOR = 177451812;
    private static final long ADD = 8728348608L;
    private static final Map<Character, Integer> MAP = new HashMap<>();

    static {
        for (int i = 0; i < 58; i++) {
            MAP.put(TABLE.charAt(i), i);
        }
    }

    public static String aidToBvid(int aid) {
        long x = (aid ^ XOR) + ADD;
        char[] chars = new char[]{'B', 'V', '1', ' ', ' ', '4', ' ', '1', ' ', '7', ' ', ' '};
        for (int i = 0; i < 6; i++) {
            int pow = (int) Math.pow(58, i);
            long i1 = x / pow;
            int index = (int) (i1 % 58);
            chars[S[i]] = TABLE.charAt(index);
        }
        return String.valueOf(chars);
    }

    public static int bvidToAid(String bvid) {
        long r = 0;
        for (int i = 0; i < 6; i++) {
            r += MAP.get(bvid.charAt(S[i])) * Math.pow(58, i);
        }
        return (int) ((r - ADD) ^ XOR);
    }
}
```

#### Kotlin

```kotlin
/**
 * 此程序非完全原创，改编自GH站内某大佬的Java程序，修改了部分代码，且转换为Kotlin
 * 算法来源同上
 */
object VideoUtils {
    //这里是由知乎大佬不知道用什么方法得出的转换用数字
    var ss = intArrayOf(11, 10, 3, 8, 4, 6, 2, 9, 5, 7)
    var xor: Long = 177451812 //二进制时加减数1

    var add = 8728348608L //十进制时加减数2

    //变量初始化工作，加载哈希表
    private const val table = "fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF"
    private val mp = HashMap<String, Int>()
    private val mp2 = HashMap<Int, String>()

    //现在，定义av号和bv号互转的方法
//定义一个power乘方方法，这是转换进制必要的
    fun power(a: Int, b: Int): Long {
        var power: Long = 1
        for (c in 0 until b) power *= a.toLong()
        return power
    }

    //bv转av方法
    fun bv2av(s: String): String {
        var r: Long = 0
        //58进制转换
        for (i in 0..57) {
            val s1 = table.substring(i, i + 1)
            mp[s1] = i
        }
        for (i in 0..5) {
            r += mp[s.substring(ss[i], ss[i] + 1)]!! * power(58, i)
        }
        //转换完成后，需要处理，带上两个随机数
        return (r - add xor xor).toString()
    }

    //av转bv方法
    fun av2bv(st: String): String {
        try {
            var s = java.lang.Long.valueOf(st.split("av".toRegex()).dropLastWhile { it.isEmpty() }
                .toTypedArray()[1])
            val sb = StringBuffer("BV1  4 1 7  ")
            //逆向思路，先将随机数还原
            s = (s xor xor) + add
            //58进制转回
            for (i in 0..57) {
                val s1 = table.substring(i, i + 1)
                mp2[i] = s1
            }
            for (i in 0..5) {
                val r = mp2[(s / power(58, i) % 58).toInt()]
                sb.replace(ss[i], ss[i] + 1, r!!)
            }
            return sb.toString()
        } catch (e: ArrayIndexOutOfBoundsException) {
            return ""
        }
    }

}
```

#### Golang

```go
package main

import "math"

const TABLE = "fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF"
var S = [11]uint{11, 10, 3, 8, 4, 6}
const XOR = 177451812
const ADD = 8728348608

var TR = map[string]int64{}

// 初始化 TR
func init() {
	for i := 0; i < 58; i++ {
		TR[TABLE[i:i+1]] = int64(i)
	}
}

func BV2AV(bv string) int64 {
	r := int64(0)
	for i := 0; i < 6; i++ {
		r += TR[bv[S[i]:S[i]+1]] * int64(math.Pow(58, float64(i)))
	}
	return (r - ADD) ^ XOR
}

func AV2BV(av int64) string {
	x := (av ^ XOR) + ADD
	r := []rune("BV1  4 1 7  ")
	for i := 0; i < 6; i++ {
		r[S[i]] = rune(TABLE[x/int64(math.Pow(58, float64(i)))%58])
	}
	return string(r)
}

func main() {
	println(AV2BV(170001))
	println(BV2AV("BV17x411w7KC"))
}
```

输出为：

```
BV17x411w7KC
170001
```

#### Rust

crate: https://github.com/stackinspector/bvid

```rust
// Copyright (c) 2023 stackinspector. MIT license.

const XORN: u64 = 177451812;
const ADDN: u64 = 100618342136696320;
const TABLE: [u8; 58] = *b"fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF";
const MAP: [usize; 10] = [9, 8, 1, 6, 2, 4, 0, 7, 3, 5];
const REV_TABLE: [u8; 74] = [
    13, 12, 46, 31, 43, 18, 40, 28,  5,  0,  0,  0,  0,  0,  0,  0, 54, 20, 15, 8,
    39, 57, 45, 36,  0, 38, 51, 42, 49, 52,  0, 53,  7,  4,  9, 50, 10, 44, 34, 6,
    25,  1,  0,  0,  0,  0,  0,  0, 26, 29, 56,  3, 24,  0, 47, 27, 22, 41, 16, 0,
    11, 37,  2, 35, 21, 17, 33, 30, 48, 23, 55, 32, 14, 19,
];
const POW58: [u64; 10] = [
    1, 58, 3364, 195112, 11316496, 656356768, 38068692544,
    2207984167552, 128063081718016, 7427658739644928,
];

fn av2bv(avid: u64) -> [u8; 10] {
    let a = (avid ^ XORN) + ADDN;
    let mut bvid = [0; 10];
    for i in 0..10 {
        bvid[MAP[i]] = TABLE[(a / POW58[i]) as usize % 58];
    }
    bvid
}

fn bv2av(bvid: [u8; 10]) -> u64 {
    let mut a = 0;
    for i in 0..10 {
        a += REV_TABLE[bvid[MAP[i]] as usize - 49] as u64 * POW58[i];
    }
    (a - ADDN) ^ XORN
}

// assert_eq!(*b"17x411w7KC", av2bv(170001));
// assert_eq!(170001, bv2av(*b"17x411w7KC"));
```

</details>
