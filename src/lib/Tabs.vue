<template>
  <div>
    <div v-for="(title,index) in titles" :key="index" v-text="title"></div>
    <component v-for="(item,index) in defaults" :is="item" :key="index"></component>
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
export default {
  name: 'Tabs',
  setup(props, context) {
    const defaults = context.slots.default()
    defaults.forEach((tag)=> {
    // @ts-expect-error
      if(tag.type.name !== 'Tab'){
        throw new Error('Tabs 的子标签必须是 Tab')
      }
    })
    const titles = defaults.map((tag)=>tag.props.title)
    return {defaults, titles}
  }
}
</script>

<style scoped lang="scss">

</style>