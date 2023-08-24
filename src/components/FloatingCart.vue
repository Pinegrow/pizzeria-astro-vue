<script setup lang="ts">
  const { cartText } = useCart()
</script>
<template>
  <BaseButton
    label="My Button"
    class="!rounded-3xl"
    size="xl"
    variant="soft"
    leading-icon="i-material-symbols-shopping-basket"
    ><span>{{ cartText }}</span>
  </BaseButton>
</template>
<style scoped></style>
