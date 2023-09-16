<template>
  <div class="layout">
    <TopNav class="nav" :toggleMenuVisible="true"/>
    <div class="content">
      <aside v-if="menuVisible">
        <h2>文档</h2>
        <ol>
          <li><router-link to="/doc/intro">介绍</router-link></li>
          <li><router-link to="/doc/install">安装</router-link></li>
          <li><router-link to="/doc/get-started">开始</router-link></li>
        </ol>
        <h2 class="component-list">组件</h2>
        <ol>
          <li><router-link to="/doc/button">Button</router-link></li>
          <li><router-link to="/doc/switch">Switch</router-link></li>
          <li><router-link to="/doc/dialog">Dialog</router-link></li>
          <li><router-link to="/doc/tabs">Tabs</router-link></li>
        </ol>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
import {inject, Ref} from 'vue';

export default {
  components: {TopNav},
  setup(){
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    return {
      menuVisible
    }
  },
}
</script>

<style scoped lang="scss">
$color-bg: lightblue;

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .nav{
    flex-shrink: 0;
  }
  .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
  .content{
    display: flex;
    > .aside{
      flex-shrink: 0;
    }
    > main {
      flex-grow: 1;
      padding: 16px;
      background: white;
      margin-top: -6px;
    }
  }
  aside {
    width: 150px;
    background: $color-bg;
    position: fixed;
    top: 0;
    left: 0;
    padding: 70px 0 16px 0;
    height: 100%;
    z-index: 10;
    > h2{
      margin-bottom: 4px;
      padding: 0 16px;
      border-bottom: 1px solid lighten(#add8e6, 8%);
    }
    > ol {
      li{
        > a{
          padding: 4px 16px;
          display: block;
        }
        >a:hover{
          text-decoration: none;
        }
        .router-link-active {
          background: #fff;
          text-decoration: none;
        }
      }
    }
   main {
     overflow: auto;
   }
  }

  .component-list {
    margin-top: 20px;
  }

</style>