---
sidebar: false
title: AV号BV号转换工具
---

<script setup>
import * as UI from 'naive-ui';
import { ref, computed } from 'vue';
import * as defaultTheme from '@vuepress/theme-default/lib/client/composables/index';
const {
  NInput,
  NInputNumber,
  NConfigProvider,
  NInputGroup,
  NInputGroupLabel,
  NSpace,
  zhCN, 
  dateZhCN, 
  darkTheme
} = UI;

const XOR_CODE = 23442827791579n;
const MASK_CODE = 2251799813685247n;
const MAX_AID = 1n << 51n;
const BASE = 58n;

const data = 'FcwAPNKTMug3GV5Lj7EJnHpWsx4tb8haYeviqBz6rkCy12mUSDQX9RdoZf';

function av2bv(aid) {
  const bytes = ['B', 'V', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0'];
  let bv_idx = bytes.length - 1;
  let tmp = (MAX_AID | BigInt(aid)) ^ XOR_CODE;
  while (tmp > 0) {
    bytes[bv_idx] = data[Number(tmp % BigInt(BASE))];
    tmp = tmp / BASE;
    bv_idx -= 1;
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
  const tmp = bvidArr.reduce(
    (pre, bvidChar) => pre * BASE + BigInt(data.indexOf(bvidChar)),
    0n
  );
  return Number((tmp & MASK_CODE) ^ XOR_CODE);
}

const isDarkMode = defaultTheme.useDarkMode();
const avid = ref(111298867365120);
const bvid = ref('BV1L9Uoa9EUx');

const avidValue = computed({
  get() {
    return avid.value;
  },
  set(val) {
    if (!val) return;
    avid.value = val;
    bvid.value = av2bv(avid.value);
  },
});

const bvidValue = computed({
  get() {
    return bvid.value;
  },
  set(val) {
    if (!val) return;
    avid.value = bv2av(bvid.value);
    bvid.value = val;
  },
});

function avidValidator(value) {
  if (value > MAX_AID) return false;
  return true;
}

function allowInput(value) {
  return !['0', 'I', 'l', 'O'].some((str) => value.include(str));
}
</script>

 <n-config-provider
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme="isDarkMode ? darkTheme : null"
  >
  <div
    style="
      height: 70vh;
      display: flex;
      justify-content: center;
      flex-direction: column;
    "
  >
    <n-space vertical size="large">
      <n-input-group style="justify-content: center">
        <n-input-group-label>AV</n-input-group-label>
        <n-input-number
          v-model:value="avidValue"
          :validator="avidValidator"
          :style="{ width: '40%' }"
        />
      </n-input-group>
      <n-input-group style="justify-content: center">
        <n-input-group-label>BV</n-input-group-label>
        <n-input
          v-model:value="bvidValue"
          :maxlength="12"
          :allow-input="allowInput"
          :style="{ width: '40%' }"
        />
      </n-input-group>
    </n-space>
  </div>
</n-config-provider>
