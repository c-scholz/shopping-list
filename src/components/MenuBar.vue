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
      Shopping List
    </template>
  </Toolbar>
</template>

<style scoped>
img {
  height: 50px;
  width: auto;
}
</style>