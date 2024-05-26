<script setup lang="ts">
import { type Item } from '../settings/types'
import { ref } from 'vue'
import ToolingIcon from './icons/IconTooling.vue'

const props = defineProps<Item>()

const isChecked = ref(props.checked)
</script>

<template>
  <div class="">
    <span class="input">
      <input type="checkbox" v-model="isChecked" v-on:change="$emit('changed', isChecked)" />
    </span>
    <span class="name">
      {{ props.name }}
    </span>
    <span class="amount">
      {{ props.amount }}
    </span>
    <span class="edit">
      <button>
        <i>
          <ToolingIcon />
        </i>
      </button>
    </span>
    <span class="remove">
      <button v-on:click="$emit('removeItem')">
        X
      </button>
    </span>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  gap: 1em;
}

span {
  color: var(--color-text);
}
</style>