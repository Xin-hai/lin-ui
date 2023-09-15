import './lib/lin.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router';
import './assets/svgs'



const app =  createApp(App)
app.use(router)
app.mount('#app')
