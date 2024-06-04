<script setup lang="ts">
</script>

<template>
  <Toolbar>
    <template #start>
      <RouterLink to="/">
        <img alt="Shopping List logo" class="logo" src="@/assets/logo.png" />
      </RouterLink>
    </template>
    <template #center>
      <h1>Shopping List</h1>
    </template>
  </Toolbar>
</template>

<style scoped>
.p-toolbar {
  padding: 1rem 2rem;
}

h1 {
  margin: 0;
}

img {
  height: 50px;
  width: auto;
}
</style>