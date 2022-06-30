<script setup lang="ts">
import { useLdReady, useLdFlag } from '../src'

// Set featureFlagKey to the feature flag key you want to evaluate
const featureFlagKey = 'my-boolean-flag'

const ldReady = useLdReady()
const flagValue = useLdFlag(featureFlagKey, false /* default flag value */)
</script>

<template>
  <div v-if="ldReady">
    SDK successfully initialized! Feature flag '{{ featureFlagKey }}' is {{ flagValue }}
    for this user.
  </div>
  <div v-else>LaunchDarkly client initializing...</div>
</template>
