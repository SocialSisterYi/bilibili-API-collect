#!/bin/bash
# 递归编译proto
lang='python'
patch=$(cd $(dirname $0); pwd)
find $patch -name '*.proto' -exec protoc -I $patch --${lang}_out=. {} \; -exec echo comp {} \;
echo 'all Done'