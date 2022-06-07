<script setup>
  import Feature from './Feature.vue'
  import { ref } from 'vue'
  const show = ref(true)
</script>

<template>
  <button @click="show = !show">Toggle</button>
  <div v-if="show">
    <Feature />
  </div>
</template>
