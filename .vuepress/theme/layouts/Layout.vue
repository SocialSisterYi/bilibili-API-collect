<template>
  <ParentLayout>
    <template #page-bottom>
      <footer style="text-align: center;">
        Copyright © 2020-2023 <a href="https://github.com/SocialSisterYi/">SocialSisterYi</a> |
        <a href="https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/LICENSE">CC-BY-NC-4.0 Licensed</a> 
      </footer>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  name: 'Layout',
  components: {
    ParentLayout
  }
}
</script>