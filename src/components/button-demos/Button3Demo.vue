<demo>
支持 size
</demo>

<template>
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
</template>

<script>
import Button from "../../lib/Button.vue";

export default {
  components: {Button}
}
</script>
