import { createApp } from 'vue'
import App from './App.vue'
import { LDPlugin } from '../src'

// Set clientSideID to your LaunchDarkly client-side ID
const clientSideID = ''

if (!clientSideID) {
  // eslint-disable-next-line no-undef
  console.warn('Please edit main.js to set clientSideID to your LaunchDarkly client-side ID')
} else {
  // Set up the user properties. This user should appear on your LaunchDarkly
  // users dashboard soon after you run the demo.
  const user = { key: 'example-user-key', name: 'Sandy' }

  const app = createApp(App)
  app.use(LDPlugin, { clientSideID, user })
  app.mount('#app')
}
