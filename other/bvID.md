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

1. a=(avID⊕177451812)+100618342136696320
2. 以i为循环变量循环10次b[i]=(a/58^i)%58
3. 将b[i]中各个数字转换为以下码表中的字符

码表：

> fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF

4. 按照以下字符顺序编码表编码b[i]

字符编码表：

> 0->11
>
> 1->10
>
> 2->3
>
> 3->8
>
> 4->4
>
> 5->6
>
> 6->2
>
> 7->9
>
> 8->5
>
> 9->7

5. 最后在b[i]前面添加字符`BV`

[援引知乎@mcfx的回答](https://www.zhihu.com/question/381784377/answer/1099438784)

## bv->av算法：

为以上算法的逆运算

## 转换程序：

目前使用python与c作为示例

### python

```python
table = 'fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF' //码表
tr = {} //反查码表
for i in range(58):
    tr[table[i]] = i
s = [11, 10, 3, 8, 4, 6, 2, 9, 5, 7] //位置编码表
xor = 177451812 //固定异或值
add = 100618342136696320 //固定加法值

def bv2av(x):
    r = 0
    for i in range(10):
        r += tr[x[s[i]]] * 58 ** i
    return (r - add) ^ xor

def av2bv(x):
    x = (x ^ xor) + add
    r = list('BV          ')
    for i in range(10):
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
#include <math.h>
#include <string.h>

const char table[] = "fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF"; //码表
char tr[124]; //反查码表
const unsigned long long Xor = 177451812; //固定异或值
const unsigned long long add = 100618342136696320; //固定加法值
const int s[] = {11, 10, 3, 8, 4, 6, 2, 9, 5, 7}; //位置编码表
char result[13]; //编码结果

void tr_init()
{
	for (int i = 0; i < 58; i++)
		tr[table[i]] = i;
}

unsigned long long bv2av(char bv[])
{
	unsigned long long r = 0;
	unsigned long long av;
	for (int i = 0; i < 10; i++)
		r += tr[bv[s[i]]] * (unsigned long long)pow(58, i);
	av = (r - add) ^ Xor;
	return av;
}

char* av2bv(unsigned long long av)
{
	strcpy(result,"BV        ");
	av = (av ^ Xor) + add;
	for (int i = 0; i < 10; i++)
		result[s[i]] = table[(unsigned long long)(av / (unsigned long long)pow(58, i)) % 58];
	result[10] = '\0';//添加休止符
	char *bv=result;
	return bv;
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
