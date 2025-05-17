<template>
  <ParentLayout>
    <template #page-bottom>
      <footer style="text-align: center">
        Copyright © 2020-2025
        <a href="https://github.com/SocialSisterYi/">SocialSisterYi</a> |
        <a
          href="https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/LICENSE"
          >CC-BY-NC-4.0 Licensed</a
        >
      </footer>
    </template>
  </ParentLayout>
</template>

<style>
  /* README.md */
  .shields a {
    margin: auto .25em;
  }
  .shields a::after {
    display: none !important;
  }
</style>

<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue';
</script>
