<template>
  <div>
    <Tabs>
      <Tab title="导航一">内容一</Tab>
      <Tab title="导航二">内容二</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import Tab from '../lib/Tab.vue';
import Tabs from '../lib/Tabs.vue'
export default {
  components: {Tabs, Tab}
}
</script>

<style scoped lang="scss">

</style>