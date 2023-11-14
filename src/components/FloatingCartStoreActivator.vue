<script setup lang="ts">
  import { getCurrentInstance } from 'vue'
  import pinia from '@/plugins/pinia'

  const app = getCurrentInstance().appContext.app
  app.use(pinia)
</script>
<template>
  <div></div>
</template>
<style scoped></style>
