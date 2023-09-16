<demo>常规用法</demo>

<template>
<div>
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
</template>

<script>
import Dialog from "../../lib/Dialog.vue";
import Button from "../../lib/Button.vue";
import {ref} from "vue";

export default {
  components: {Button, Dialog},
  setup() {
    let visible = ref(false)

    function toggle() {
      visible.value = !visible.value
    }

    const f1 = () => {
      console.log('执行了f1')
    }
    const f2 = () => {
      console.log('执行了f2')
    }
    return {f1,f2,toggle,visible}
  }


}
</script>

<style scoped lang="scss">

</style>