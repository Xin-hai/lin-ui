<template>
  <div>
    <h1>Tabs 示例</h1>
    <Demo :component="Tabs1Demo"></Demo>
  </div>
</template>

<script lang="ts">

import Demo from './Demo.vue';
import Tabs1Demo from './Tabs1Demo.vue';

export default {
  components: {Demo},
  setup(){
    return{Tabs1Demo}
  }
}
</script>

<style scoped lang="scss">

</style>