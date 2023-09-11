<template>

  <h1>示例1</h1>
  <div>
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <br><br>
  <h1>示例2</h1>
  <div>
    <Button theme="button" size="big">button</Button>
    <Button theme="button" size="normal">button</Button>
    <Button theme="button" size="small">button</Button>
  </div>
  <div>
    <Button theme="text" size="big">text</Button>
    <Button theme="text" size="normal">text</Button>
    <Button theme="text" size="small">text</Button>
  </div>
  <div>
    <Button theme="link" size="big">link</Button>
    <Button theme="link" size="normal">link</Button>
    <Button theme="link" size="small">link</Button>
  </div>
  <br><br>
  <h1>示例3</h1>
  <div>
    <Button theme="button" level="main">主要按钮</Button>
    <Button theme="button" level="normal">默认按钮</Button>
    <Button theme="button" level="danger">危险按钮</Button>
  </div>
  <div>
    <Button theme="text" level="main">主要按钮</Button>
    <Button theme="text" level="normal">默认按钮</Button>
    <Button theme="text" level="danger">危险按钮</Button>
  </div>
  <div>
    <Button theme="link" level="main">主要按钮</Button>
    <Button theme="link" level="normal">默认按钮</Button>
    <Button theme="link" level="danger">危险按钮</Button>
  </div>

  <h1>示例4</h1>
  <div>
    <Button theme="button" disabled>禁用按钮</Button>
    <Button theme="text" disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用按钮</Button>
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

    }
    return {onClick}
  }
}
</script>

<style scoped lang="scss">

</style>