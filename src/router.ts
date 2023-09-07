import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/Switch.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import Dialog from './components/Dialog.vue'
import Tabs from './components/Tabs.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {path: '/doc', component: Doc, children: [
                {path: 'switch',component: Switch},
                {path: 'button',component: ButtonDemo},
                {path: 'dialog',component: Dialog},
                {path: 'tabs',component: Tabs}
            ]}
    ]
})
