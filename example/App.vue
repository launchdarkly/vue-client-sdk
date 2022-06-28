<script setup>
  import Feature from './Feature.vue'
  import { ref } from 'vue'
  const show = ref(true)
</script>

<template>
  <button @click="show = !show">Show/Hide</button>
  <div v-if="show">
    <Feature />
  </div>
</template>
