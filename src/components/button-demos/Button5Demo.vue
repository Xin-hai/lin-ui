<demo>支持 disabled</demo>

<template>
  <div>
    <Button theme="button" disabled>禁用按钮</Button>
    <Button theme="text" disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用按钮</Button>
  </div>
</template>

<script>
import Button from "../../lib/Button.vue";
export default {
  components: {Button}
}
</script>
