<script setup lang="ts">
  import { inject } from 'vue'
  import { LD_READY, LD_FLAG } from '../src'

  const featureFlagKey = 'my-boolean-flag'
  const myDefaultFlagValue = 'unknown'
  const $ldReady = inject(LD_READY)
  const $ldFlag = inject(LD_FLAG)
  const myFlagValue = $ldFlag && $ldFlag(featureFlagKey, myDefaultFlagValue)
</script>

<template>
  <div v-if="$ldReady">Feature flag "{{ featureFlagKey }}" has value "{{ myFlagValue }}" for this user.</div>
  <div v-else>LaunchDarkly client initializing...</div>
</template>
