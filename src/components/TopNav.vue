<template>
  <div class="topNav">
    <div class="logo">我是 logo</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside"  @click="toggleMenu">
      <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-toggle"></use>
      </svg>
    </span>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  setup(){
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    const toggleMenu = ()=> {
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
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
  > .toggleAside{
    display: none;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    svg{
      margin-top: 4px;
    }
  }
  @media(max-width: 500px){
    > .toggleAside{display: inline-block;}
    > .menu{display: none}
    > .logo{margin: 0 auto}
  }
}
</style>