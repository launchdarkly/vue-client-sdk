<script setup lang="ts">
  import { inject } from 'vue'
  import { ldReadyKey, ldFlagKey } from '../lib'

  const featureFlagKey = 'my-boolean-flag'
  const myDefaultFlagValue = 'unknown'
  const $ldReady = inject(ldReadyKey)
  const $ldFlag = inject(ldFlagKey)
  const myFlagValue = $ldFlag(featureFlagKey, myDefaultFlagValue)
</script>

<template>
  <div v-if="$ldReady">Feature flag "{{ featureFlagKey }}" has value "{{ myFlagValue }}" for this user.</div>
  <div v-else>LaunchDarkly client initializing...</div>
</template>
