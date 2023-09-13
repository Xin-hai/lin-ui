<template>
    <h1>示例一</h1>
  <Dialog v-model:visible="visible" :close-overlay="true" :f1="f1" :f2="f2" >
    <template v-slot:title>
      <div>我是标题</div>
    </template>
    <template v-slot:content>
      <div>我是内容一</div>
      <div>我是内容二</div>
    </template>
  </Dialog>
   <Button @click="toggle">点击显示</Button>
</template>

<script>
import Dialog from "../lib/Dialog.vue";
import {ref} from "vue";
import Button from "../lib/Button.vue";
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
    return {visible,toggle,f1,f2}
  }
}
</script>

<style scoped lang="scss">

</style>