<template>
  <div class="topNav">
    <router-link to="/" class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-huanlin"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li><router-link to="/doc">
         <span>文档</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-doc"></use>
        </svg>
      </router-link></li>
    </ul>
    <span class="toggleAside"  @click="toggleMenu" v-if="toggleMenuVisible">
      <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-toggle"></use>
      </svg>
    </span>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  props: {
    toggleMenuVisible: {
      type: Boolean,
      default: false
    }
  },
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
$color: #329894;
.topNav{
  color: $color;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    >svg {
      width: 32px;
      height: 32px;
    }
  }
  >.menu{
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 auto;
      a:hover {
        text-decoration: none;
      }
      span:hover{
        color: darken($color, 50%);
      }
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