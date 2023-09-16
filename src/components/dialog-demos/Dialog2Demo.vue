<demo>showDialog调用</demo>

<template>
<div>
    <Button @click="showDialog">showDialog</Button>
</div>
</template>

<script>

import Button from "../../lib/Button.vue";

import {openDialog} from "../../lib/openDialog";

export default {
  components: {Button},
  setup() {
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
    return {showDialog}
  }


}
</script>

<style scoped lang="scss">

</style>