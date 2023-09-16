<template>
  <div class="lin-tabs">
    <div class="lin-tabs-nav" ref="nav">
      <div v-for="(title,index) in titles" :key="index" v-text="title"  @click="select(title)"
           :ref="el => {if(title===selected) selectedItem=el}"
           class="lin-tabs-nav-item" :class="{'selected': selected===title}"></div>
      <div class="lin-tabs-nav-line" ref="line"></div>
    </div>
   <div class="lin-tabs-content">
     <component v-for="(item,index) in defaults" :is="item" :key="index"
                class="lin-tabs-content-item" :class="{'selected': selected===item.props.title}" />
   </div>
  </div>
</template>

<script >
import Tab from "./Tab.vue";
import {onMounted,  ref, watchEffect} from 'vue';
export default {
  name: 'Tabs',
  props: {
    selected : {
      type: String
    }
  },
  setup(props, context) {
    // const navItems = ref<HTMLDivElement[]>([])
    const selectedItem = ref(null)
    const line = ref(null)
    const nav = ref(null)
    onMounted(()=> {
      watchEffect(()=>{
        const {width,left:left2} = selectedItem.value.getBoundingClientRect()
        const {left:left1} = nav.value.getBoundingClientRect()
        const left = left2 - left1
        line.value.style.width = width + 'px'
        line.value.style.left = left + 'px'
      })
    })
    // watchEffect(x)
    const defaults = context.slots.default()
    defaults.forEach((tag)=> {
    // @ts-expect-error
      if(tag.type.name !== 'Tab'){
        throw new Error('Tabs 的子标签必须是 Tab')
      }
    })
    const titles = defaults.map((tag)=>tag.props.title)
    const select = (title)=> {
      context.emit('update:selected',title)
    }
    return {
      defaults,
      titles,
      select,
      selectedItem,
      line,
      nav
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
        transition: all 250ms;
      }
    }
    &-content {
      padding: 8px 0;
    }
  }

.lin-tabs-content :deep(.lin-tabs-content-item) {
  display: none;
}
.lin-tabs-content :deep(.lin-tabs-content-item.selected) {
  display: block;
}

//::v-deep 已废弃


</style>