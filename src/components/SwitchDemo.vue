<template>
  <div>
    <h1>Switch 组件示例</h1>
    <div class="demo">
      <Demo :component="Switch1Demo"></Demo>
      <Demo :component="Switch2Demo"></Demo>
    </div>
  </div>
</template>

<script>
import Switch1Demo from './Switch1.demo.vue';
import Switch2Demo from './Switch2.demo.vue';
import Demo from "./Demo.vue";

export default {
  components: {Demo},
  setup() {
    return { Switch1Demo, Switch2Demo}
  }
}
</script>

