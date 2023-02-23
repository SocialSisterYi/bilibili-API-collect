# bvid说明

2020-03-23 B站推出了全新的稿件视频id`bvid`来接替之前的`avid`，其意义与之相同

详见：

1. [【升级公告】AV号全面升级至BV号（专栏）](https://www.bilibili.com/read/cv5167957)
2. [【升级公告】AV号全面升级至BV号](https://www.bilibili.com/blackboard/activity-BV-PC.html)

## 概述

### 格式

“bvid”恒为长度为 12 的字符串，前两个字母为大写“BV”，后 10 个为 base58 计算结果

### 实质

“bvid"为“avid”的base58编码，可通过算法进行相互转化

### avid发号方式的变化

从 2009-09-09 09:09:09 [av2](https://www.bilibili.com/video/av2) 的发布到 2020-03-28  19:45:02 [av99999999](https://www.bilibili.com/video/av99999999) 的发布B站结束了以投稿时间为顺序的avid发放，改为随机发放avid

~~暗示B站东方要完？泪目~~

## 算法概述

算法以及程序主要参考[知乎@mcfx的回答](https://www.zhihu.com/question/381784377/answer/1099438784)

### av->bv算法

注：本算法及示例程序仅能编解码`avid < 29460791296`，且暂无法验证`avid >= 29460791296`的正确性

1. a = (avid ⊕ 177451812) + 8728348608
2. 以 i 为循环变量循环 6 次 b[i] = (a / 58 ^ i) % 58
3. 将 b[i] 中各个数字转换为以下码表中的字符

码表：

> fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF

4. 初始化字符串 b[i]=`BV1 4 1 7 `

5. 按照以下字符顺序编码表编码并填充至 b[i]

字符顺序编码表：

> 0 -> 11
>
> 1 -> 10
>
> 2 -> 3
>
> 3 -> 8
>
> 4 -> 4
>
> 5 -> 6


### bv->av算法

为以上算法的逆运算

## 编程实现

使用 Python、C、TypeScript、Java、Kotlin 以及 Golang 等语言作为示例，欢迎社区提交更多例程

### Python

```python
table = 'fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF' # 码表
tr = {} # 反查码表
# 初始化反查码表
for i in range(58):
    tr[table[i]] = i
s = [11, 10, 3, 8, 4, 6] # 位置编码表
XOR = 177451812 # 固定异或值
ADD = 8728348608 # 固定加法值

def bv2av(x):
    r = 0
    for i in range(6):
        r += tr[x[s[i]]] * 58 ** i
    return (r - ADD) ^ XOR

def av2bv(x):
    x = (x ^ XOR) + ADD
    r = list('BV1  4 1 7  ')
    for i in range(6):
        r[s[i]] = table[x // 58 ** i % 58]
    return ''. join(r)

print(av2bv(170001))
print(bv2av('BV17x411w7KC'))
```

输出为：

```
BV17x411w7KC
170001
```

### C

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

### TypeScript

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

### Java

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

### Kotlin
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

### Golang
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
