<script setup lang="ts">
import { ldInit, useLdFlag } from '../src'

// Set clientSideID to your LaunchDarkly client-side ID
const clientSideID = ''
// Set up the user properties. This user should appear on your LaunchDarkly
// users dashboard soon after you run the demo.
const user = { key: 'example-user-key', name: 'Sandy' }
// Set featureFlagKey to the feature flag key you want to evaluate
const featureFlagKey = 'my-boolean-flag'

if (!clientSideID) {
  console.warn('Please edit App.vue to set clientSideID to your LaunchDarkly client-side ID')
}
const [ldReady, _ldClient] = ldInit({ clientSideID, user })
const flagValue = useLdFlag(featureFlagKey, false /* default flag value */)
</script>

<template>
  <div v-if="ldReady">
    SDK successfully initialized! Feature flag '{{ featureFlagKey }}' is {{ flagValue }}
    for this user.
  </div>
  <div v-else>LaunchDarkly client initializing...</div>
</template>
