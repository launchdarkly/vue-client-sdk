import { createApp } from 'vue'
import App from './App.vue'
import { LDPlugin } from 'launchdarkly-vue-client-sdk'

const app = createApp(App)
app.use(LDPlugin, { deferInitialization: true })
app.mount('#app')
