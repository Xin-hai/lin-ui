<template>
  <div class="topNavAndBanner">
    <TopNav />
    <div class="banner">
      <h1>lin UI</h1>
      <h2>一个厉害的UI框架</h2>
      <p class="actions">
        <a href="#">GitHub</a>
       <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';
export default {
  components: {
    TopNav
  }
}
</script>

<style scoped lang="scss">
$color-bg: lightblue;
$color-bg-a: #fff;
  .banner{
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 0;
    .actions {
      padding: 8px 0;
      a{
        $height: 28px;
        border: 1px solid green;
        background: $color-bg-a;
        display: inline-block;
        margin: 0 8px;
        height: $height;
        line-height: $height;
        border-radius: $height/3;
        padding: 0 8px;
      }
    }
  }
.topNavAndBanner {
  background: linear-gradient(145deg, rgba(227,255,253,1) 0%, rgba(183,233,230,1) 100%);
}
</style>