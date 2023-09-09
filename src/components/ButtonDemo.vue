<template>
  <div>Button示例</div>
  <h1>示例1</h1>
  <div>
    <Button @click="onClick" @focus="onClick" @mouseover="onClick" size="small">你好呀</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components:{
    Button
  },
  setup(){
    const onClick = ()=> {
      console.log('here')
    }
    return {onClick}
  }
}
</script>

<style scoped lang="scss">

</style>