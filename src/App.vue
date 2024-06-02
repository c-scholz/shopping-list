<script setup lang="ts">
import MenuBar from '@/components/MenuBar.vue'
import { useLists } from '@/stores/listStore'

const { list } = useLists()
</script>

<template>
  <header>
    <img alt="Shopping List logo" class="logo" src="./assets/logo.png" width="125" height="125" />

    <div class="wrapper">
      <MenuBar msg="You did it!" :list="list" />
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
