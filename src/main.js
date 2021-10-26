import { createApp } from 'vue'
import App from './App.vue'
import pixel from '../package/index.js'
import { router } from './router'

const app = createApp(App)
app.use(pixel)
app.use(router)
app.mount('#app')
