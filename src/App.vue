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
  padding: 0 0.5rem;
  margin: 2rem 0;
  width: 100%;
  max-width: 1280px;

  @media screen and (min-width: 600px) {
    padding: 0 1rem;
  }
}
</style>
