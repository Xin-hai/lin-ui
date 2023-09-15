<template>
  <div>
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
    <div class="features">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-vue3"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-ts"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-UI"></use>
      </svg>
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
$color-bg-a: #02bcb0;
$color: #329894;
.topNavAndBanner {
  background: linear-gradient(145deg, rgba(227,255,253,1) 0%, rgba(183,233,230,1) 100%);
  //border-bottom-left-radius: 50% 40px;
  //border-bottom-right-radius: 50% 40px;
  clip-path: ellipse(80% 60% at 50% 40%);
}
.features  {
  >svg {
    width: 64px;
    height: 64px;
  }
}
  .banner{
    color: $color;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 0;
    .actions {
      padding: 8px 0;
      a{
        color: #fff;
        background: $color-bg-a;
        display: inline-block;
        margin: 0 8px;
        border-radius: 4px;
        padding: 8px 24px;
        &:hover{
          text-decoration: none;
        }
      }
    }
  }

</style>