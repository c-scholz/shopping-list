<script setup lang="ts">
import { ref } from 'vue';
import { type List } from '@/settings/types'

const props = defineProps<{
  list: List
}>()

const updateList = ref(props.list)

</script>

<template>
  <div>
    <InputText v-model="updateList.name"></InputText>
    <Calendar v-model="updateList.dueDate"></Calendar>
  </div>
</template>
