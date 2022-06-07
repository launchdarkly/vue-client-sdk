import { createApp } from 'vue'
import App from './App.vue'
import { LDPlugin } from '../lib'

const clientSideID = 'YOUR_CLIENT_SIDE_ID'
const user = { anonymous: true }

const app = createApp(App)
app.use(LDPlugin, { clientSideID, user })
app.mount('#app')
