<script setup lang="ts">
defineProps<{
  msg: string | undefined
}>()
</script>

<template>
  <div v-if="msg !== undefined">
    {{ msg }}
  </div>
</template>

<style scoped>
div {
  height: 2em;
  width: 100%;
  border: 1px solid firebrick;
  border-radius: 2px;
}
</style>