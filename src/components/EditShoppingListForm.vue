<script setup lang="ts">
import { ref } from 'vue';
import { type List } from '@/settings/types'

const props = defineProps<{
  list: List
}>()

const updatedList = ref(props.list)

const editMode = ref(false)
</script>

<template>
  <div>
    <InputText v-if="editMode" v-model="updatedList.name"></InputText>
    <Calendar v-if="editMode" v-model="updatedList.dueDate"></Calendar>
    <Button type="button" v-on:click="editMode = !editMode">{{ editMode ? `Stop Edit` : `Edit` }}</Button>
  </div>
</template>
