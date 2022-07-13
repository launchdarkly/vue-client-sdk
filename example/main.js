import { createApp } from 'vue'
import App from './App.vue'
import { LDPlugin } from '../src'

const app = createApp(App)
app.use(LDPlugin, { deferInitialization: true })
app.mount('#app')
