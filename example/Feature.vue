<script setup lang="ts">
import { useLdReady, useLdFlag } from '../src'

const featureFlagKey = 'my-boolean-flag'
const myDefaultFlagValue = 'unknown'
const ldReady = useLdReady()
const myFlagValue = useLdFlag(featureFlagKey, myDefaultFlagValue)
</script>

<template>
  <div v-if="ldReady">Feature flag "{{ featureFlagKey }}" has value "{{ myFlagValue }}" for this user.</div>
  <div v-else>LaunchDarkly client initializing...</div>
</template>
