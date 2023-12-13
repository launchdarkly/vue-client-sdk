<script setup>
import { ldInit, useLDFlag } from 'launchdarkly-vue-client-sdk'

// Set clientSideID to your LaunchDarkly client-side ID
const clientSideID = 'client-side-id'

// Set up the context properties. This context should appear on your LaunchDarkly
// contexts dashboard soon after you run the demo.
const context = { kind:'user', key: 'example-context-key', name: 'Sandy' }

// Set featureFlagKey to the feature flag key you want to evaluate
const featureFlagKey = 'dev-test-flag'

if (!clientSideID) {
  console.warn('Please edit App.vue to set clientSideID to your LaunchDarkly client-side ID')
}
const [ldReady] = ldInit({ clientSideID, context })
const flagValue = useLDFlag(featureFlagKey, false)
</script>

<template>
  <div v-if="ldReady">
    <p>Welcome to LaunchDarkly. The Vue client SDK has been initialized.</p>
    <p>Feature flag '{{ featureFlagKey }}' is {{ flagValue }}
    for this context.</p>
  </div>
  <div v-else>LaunchDarkly client initializing...</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
