<demo>常规用法</demo>
<template>
<div>
  <Tabs v-model:selected="currentTitle">
    <Tab title="导航一">内容一</Tab>
    <Tab title="导航二">这是内容二</Tab>
    <Tab title="导航三">内容三</Tab>
  </Tabs>
</div>
</template>

<script lang="ts">
import Tab from '../lib/Tab.vue';
import Tabs from '../lib/Tabs.vue'
import {ref} from 'vue';
export default {
  components: {Tabs, Tab},
  setup(){
    const currentTitle = ref('导航二')
    return {
      currentTitle
    }
  }
}
</script>
