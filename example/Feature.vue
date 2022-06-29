<script setup lang="ts">
  import { useIsLdReady, useLdFlag } from '../src'

  const featureFlagKey = 'my-boolean-flag'
  const myDefaultFlagValue = 'unknown'
  const isldReady = useIsLdReady()
  const myFlagValue = useLdFlag(featureFlagKey, myDefaultFlagValue)
</script>

<template>
  <div v-if="isldReady">Feature flag "{{ featureFlagKey }}" has value "{{ myFlagValue }}" for this user.</div>
  <div v-else>LaunchDarkly client initializing...</div>
</template>
