<script setup lang="ts">
  import { inject } from 'vue'
  import { LD_READY, useFlag } from '../src'

  const featureFlagKey = 'my-boolean-flag'
  const myDefaultFlagValue = 'unknown'
  const $ldReady = inject(LD_READY)
  const myFlagValue = useFlag(featureFlagKey, myDefaultFlagValue)
</script>

<template>
  <div v-if="$ldReady">Feature flag "{{ featureFlagKey }}" has value "{{ myFlagValue }}" for this user.</div>
  <div v-else>LaunchDarkly client initializing...</div>
</template>
