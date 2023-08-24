<script setup lang="ts">
  import { useNav } from '@/composables/nav'
  const { currentLocation } = useNav()

  defineProps({
    navlinks: {
      type: Object,
      default() {
        return []
      },
    },
  })
</script>
<template>
  <div class="h-full items-center">
    <div class="flex h-full space-x-2">
      <BaseButton
        v-for="(navlink, index) in navlinks"
        :key="index"
        :to="navlink.link"
        :label="navlink.text"
        size="lg"
        :variant="navlink.link === currentLocation.pathname ? 'solid' : 'ghost'"
        class="!rounded-lg"
      >
      </BaseButton>
    </div>
    <BaseButton
      class="ml-3"
      target="_blank"
      to="https://vuedesigner.com"
      size="xl"
      icon="i-mdi-pine-tree"
      color="secondary"
      trailing
    >
      <span class="pl-2">Try Now</span>
    </BaseButton>
  </div>
</template>
<style scoped></style>
