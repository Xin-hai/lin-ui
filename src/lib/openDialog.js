import Dialog from "./Dialog.vue";
import {createApp, h} from "vue";

export const openDialog = (options)=> {
    const {title,content,ok,cancel,closeOverlay} = options
    const div = document.createElement('div')
    const close = ()=> {app.unmount(div); div.remove() }
    document.body.append(div)
    const app = createApp({
        render(){
            return h(Dialog,
                {visible: true, 'onUpdate:visible': (newValue)=> {if(newValue === false){ close()} }, ok, cancel,closeOverlay},
                {
                title,
                content,
                }
                )
        }
    })
    app.mount(div)
}