import { createApp } from 'vue'
import App from './App.vue'
import pixel from 'pixel-vue'

const app = createApp(App)
app.use(pixel)
app.mount('#app')
