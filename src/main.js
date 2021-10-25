import { createApp } from 'vue'
import App from './App.vue'
import pixel from '../package/index.js'

const app = createApp(App)
app.use(pixel)
app.mount('#app')
