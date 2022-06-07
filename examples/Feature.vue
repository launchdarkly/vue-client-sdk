<script setup lang="ts">
  import { inject } from 'vue'
  import { ldReadyKey, ldFlagKey } from '../lib'

  const myFlagKey = 'YOUR-FLAG-KEY'
  const myDefaultFlagValue = 'unknown'
  const $ldReady = inject(ldReadyKey)
  const $ldFlag = inject(ldFlagKey)
  const myFlagValue = $ldFlag(myFlagKey, myDefaultFlagValue)
</script>

<template>
  <div v-if="$ldReady">Feature flag "{{ myFlagKey }}" has value "{{ myFlagValue }}" for this user.</div>
  <div v-else>LaunchDarkly client initializing...</div>
</template>
