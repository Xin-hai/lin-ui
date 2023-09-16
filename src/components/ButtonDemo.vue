<template>
  <h1>Button 示例</h1>
  <div>
    <Demo :component="Button1Demo" />
    <Demo :component="Button2Demo" />
    <Demo :component="Button3Demo" />
    <Demo :component="Button4Demo" />
    <Demo :component="Button5Demo" />
    <Demo :component="Button6Demo" />
  </div>


</template>

<script lang="ts">
import Demo from './Demo.vue';
import Button1Demo from './button-demos/Button1Demo.vue';
import Button2Demo from './button-demos/Button2Demo.vue';
import Button3Demo from './button-demos/Button3Demo.vue';
import Button4Demo from './button-demos/Button4Demo.vue';
import Button5Demo from './button-demos/Button5Demo.vue';
import Button6Demo from './button-demos/Button6Demo.vue';
export default {

  components:{
    Demo,Button1Demo,Button2Demo,Button3Demo,
    Button4Demo,Button5Demo,Button6Demo
  },
  setup(){

    return {Button1Demo,Button2Demo,Button3Demo,
      Button4Demo,Button5Demo,Button6Demo, Demo}
  }
}
</script>

<style scoped lang="scss">

</style>