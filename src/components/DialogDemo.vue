<template>
    <div>
      <h2>示例一</h2>
      <Dialog v-model:visible="visible" :close-overlay="true" :ok="f1" :cancel="f2" >
        <template v-slot:title>
          <div>我是标题</div>
        </template>
        <template v-slot:content>
          <div>我是内容一</div>
          <div>我是内容二</div>
        </template>
      </Dialog>
      <Button @click="toggle">点击显示</Button>
    </div>
  <div>
    <h2>示例二</h2>
    <Button @click="showDialog">showDialog</Button>
  </div>
</template>

<script>
import Dialog from "../lib/Dialog.vue";
import {ref} from "vue";
import Button from "../lib/Button.vue";
import {openDialog} from "../lib/openDialog";
export default {
  components: {Button, Dialog},
  setup(){
    let visible = ref(false)
    function toggle(){
      visible.value = !visible.value
    }
    const f1 = ()=> {
      console.log('执行了f1')
      return false
    }
    const f2 = ()=> {
      console.log('执行了f2')
    }
    const showDialog = ()=> {
      openDialog({
        title: '标题',
        content: '你好',
        ok(){
          console.log('ok')
        },
        cancel(){
          console.log('cancel')
        },
        closeOverlay: true
      })
      console.log('showDialog')
    }
    return {visible,toggle,f1,f2,showDialog}
  }
}
</script>

<style scoped lang="scss">

</style>