<demo> 支持 level</demo>

<template>
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
</template>

<script>
import Button from "../../lib/Button.vue";
export default {
  components: {Button}
}
</script>
