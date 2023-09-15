import './lib/lin.scss';
import './index.scss';
import { createApp } from 'vue';
import App from './App.vue';
import {router} from './router';
import './assets/svgs';
import 'github-markdown-css';
import Markdown from './components/Markdown.vue';



const app =  createApp(App)
app.use(router)
app.component('Markdown',Markdown)
app.mount('#app')

