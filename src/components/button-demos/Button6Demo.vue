<demo>
支持 loading
</demo>

<template>
  <div>
    <Button :loading="true">加载中</Button>
    <Button >加载完毕</Button>
  </div>
</template>

<script>
import Button from "../../lib/Button.vue";
export default {
  components: {Button}
}
</script>
