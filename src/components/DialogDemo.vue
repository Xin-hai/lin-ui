<template>
    <h1>示例一</h1>
   <Dialog :visible="visible"/>
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
    return {visible,toggle}
  }
}
</script>

<style scoped lang="scss">

</style>