<script setup lang="ts">
import { type Item } from '../settings/types'
import { ref } from 'vue'
import ToolingIcon from './icons/IconTooling.vue'

const props = defineProps<Item>()

const isChecked = ref(props.checked)
</script>

<template>
  <div class="">
    <span>
      <Checkbox v-model="isChecked" :binary="true" v-on:change="$emit('changed', isChecked)" />
    </span>
    <span class="name">
      {{ props.name }}
    </span>
    <span class="amount">
      {{ props.amount }}
    </span>
    <Button>
      <i>
        <ToolingIcon />
      </i>
    </Button>
    <Button v-on:click="$emit('removeItem')">
      X
    </Button>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  gap: 1em;
  flex: auto;
}

span {
  color: var(--color-text);
}
</style>