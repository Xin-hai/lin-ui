<template>
  <div class="topNav">
    <div class="logo" @click="toggleMenu">我是 logo</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  setup(){
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    console.log('topnav获取的menuVisible的值为'+ menuVisible.value)
    const toggleMenu = ()=> {
      console.log(1)
      menuVisible.value = !menuVisible.value
    }
    return{
      toggleMenu
    }
  }
}
</script>

<style scoped lang="scss">
$color-bg: pink;
.topNav{
  position: relative;
  z-index: 5;
  background: $color-bg;
  display: flex;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  >.menu{
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 auto;
    }
  }
}
</style>