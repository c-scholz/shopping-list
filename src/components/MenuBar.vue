<script setup lang="ts">
import { useLists } from '@/stores/listStore';

defineProps<{
  msg: string
}>()

const { list } = useLists()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ list.name || 'Unnamed Shopping List' }}</h1>
    <h3 v-if="list.dueDate">
      due: {{
        typeof list.dueDate === "string" ?
          new Date(list.dueDate).toLocaleDateString('en-EN', {
            day: 'numeric', weekday: 'long', month: 'long', year: 'numeric'
          }) :
          list.dueDate?.toLocaleDateString('en-EN', {
            day: 'numeric', weekday: 'long', month: 'long', year: 'numeric'
          })
      }}
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
