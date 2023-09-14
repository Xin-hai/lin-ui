<template>
  <div class="lin-tabs">
    <div class="lin-tabs-nav">
      <div v-for="(title,index) in titles" :key="index" v-text="title"  @click="select(title)"
           :ref="el => {if(el) navItems[index]=el}"
           class="lin-tabs-nav-item" :class="{'selected': selected===title}"></div>
      <div class="lin-tabs-nav-line"></div>
    </div>
   <div class="lin-tabs-content">
     <component v-for="(item,index) in defaults" :is="item" :key="index"
                class="lin-tabs-content-item" :class="{'selected': selected===item.props.title}" />
   </div>
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
import {onMounted, ref} from 'vue';
export default {
  name: 'Tabs',
  props: {
    selected : {
      type: String
    }
  },
  setup(props, context) {
    const navItems = ref([])
    onMounted(()=> {
      // console.log({...navItems.value})
    })
    const defaults = context.slots.default()
    defaults.forEach((tag)=> {
    // @ts-expect-error
      if(tag.type.name !== 'Tab'){
        throw new Error('Tabs 的子标签必须是 Tab')
      }
    })
    const titles = defaults.map((tag)=>tag.props.title)
    const select = (title: string)=> {
      context.emit('update:selected',title)
    }
    return {
      defaults,
      titles,
      select,
      navItems
    }
  }
}
</script>

<style scoped lang="scss">
$color-blue: #40a9ff;
$font-color: #333;
$border-color: #d9d9d9;
  .lin-tabs{
    &-nav {
      display: flex;
      position: relative;
      color: $font-color;
      border-bottom: 1px solid $border-color;

      &-item {
        padding: 8px 0;
        margin: 0 16px;
        cursor: pointer;

        &:first-child {
          margin-left: 0;
        }

        &.selected {
          color: $color-blue;
        }
      }
      &-line {
        height: 3px;
        width: 100px;
        position: absolute;
        left: 0;
        bottom: -1px;
        background: $color-blue;
      }
    }
    &-content {
      padding:  8px 0;
      ::v-deep &-item {
        display: none;
        &.selected {
          display: block;
        }
      }
    }
  }



</style>