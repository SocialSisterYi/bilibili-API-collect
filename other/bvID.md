# bvID说明

2020-03-23 B站推出了全新的稿件视频ID“bvID”来接替之前的“avID”，其用法与性质等价于“avID”

详见：

1. [【升级公告】AV号全面升级至BV号（专栏）](https://www.bilibili.com/read/cv5167957)
2. [【升级公告】AV号全面升级至BV号](https://www.bilibili.com/blackboard/activity-BV-PC.html)

## 格式：

“bvID”恒为长度为12的字符串，前两个字母为大写“BV”，后10个位base58计算结果

## 实质：

“bvID"为“avID”的base58编码，可通过算法进行相互转化

## avID发放方式的变化：

从2009-09-09 09:09:09 [av2](https://www.bilibili.com/video/av2)的发布到2020-03-28  19:45:02 [av99999999](https://www.bilibili.com/video/av99999999)的发布B站结束了以投稿时间为顺序的avID发放，改为随机发放avID

~~暗示B站东方要完？泪目~~

## av->bv算法：

注：本算法及示例程序仅能编码及解码avID<` 29460791296  `，无法验证avID>=` 29460791296  `的正确性

1. a=(avID⊕177451812)+8728348608
2. 以i为循环变量循环6次b[i]=(a/58^i)%58
3. 将b[i]中各个数字转换为以下码表中的字符

码表：

> fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF

4. 初始化字符串b[i]=`BV1 4 1 7 `

5. 按照以下字符顺序编码表编码并填充至b[i]

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

算法以及程序主要参考[知乎@mcfx的回答](https://www.zhihu.com/question/381784377/answer/1099438784)

## bv->av算法：

为以上算法的逆运算

## 转换程序：

目前使用**Python**与**C**作为示例

### python

```python
table = 'fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF' #码表
tr = {} #反查码表
#初始化反查码表
for i in range(58):
    tr[table[i]] = i
s = [11, 10, 3, 8, 4, 6] #位置编码表
xor = 177451812 #固定异或值
add = 8728348608 #固定加法值

def bv2av(x):
    r = 0
    for i in range(6):
        r += tr[x[s[i]]] * 58 ** i
    return (r - add) ^ xor

def av2bv(x):
    x = (x ^ xor) + add
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

### C语言

```c
#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>

const char table[] = "fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF"; //码表
char tr[124]; //反查码表
const unsigned long long Xor = 177451812; //固定异或值
const unsigned long long add = 8728348608; //固定加法值
const int s[] = {11, 10, 3, 8, 4, 6}; //位置编码表

//初始化反查码表
void tr_init()
{
	for (int i = 0; i < 58; i++)
		tr[table[i]] = i;
}

unsigned long long bv2av(char bv[])
{
	unsigned long long r = 0;
	unsigned long long av;
	for (int i = 0; i < 6; i++)
		r += tr[bv[s[i]]] * (unsigned long long)pow(58, i);
	av = (r - add) ^ Xor;
	return av;
}

char* av2bv(unsigned long long av)
{
	char* result = (char*)malloc(13);
	strcpy(result,"BV1  4 1 7  ");
	av = (av ^ Xor) + add;
	for (int i = 0; i < 6; i++)
		result[s[i]] = table[(unsigned long long)(av / (unsigned long long)pow(58, i)) % 58];
	return result;
}

int main()
{
	tr_init();
	printf("%s\n",av2bv(170001));
	printf("%u\n",bv2av("BV17x411w7KC"));
	return 0;
}
```

输出为：

```
BV17x411w7KC
170001
```
