<script setup lang="ts">
import MenuBar from '@/components/MenuBar.vue'
</script>

<template>
  <header>
    <MenuBar />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  width: 100%;
}

main {
  width: 100%;
  max-width: 1280px;
}
</style>
