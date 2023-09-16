<template>
  <div>
    <div class="topNavAndBanner">
      <TopNav />
      <div class="banner">
        <h1>lin UI</h1>
        <h2>A powerful UI framework</h2>
        <h2>一个厉害的UI框架</h2>
        <p class="actions">
          <a href="https://github.com/Xin-hai/lin-ui/tree/main" target="_blank">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
     <ul>
       <li>
         <svg class="icon" aria-hidden="true">
           <use xlink:href="#icon-vue3"></use>
         </svg>
         <h3>基于 Vue3</h3>
         <p>自信地使用 Vue 3 组合式 API</p>
       </li>
       <li>
         <svg class="icon" aria-hidden="true">
           <use xlink:href="#icon-ts"></use>
         </svg>
         <h3>基于 TypeScript </h3>
         <p>源码基本采用 TypeScript 书写</p>
       </li>
       <li>
         <svg class="icon" aria-hidden="true">
           <use xlink:href="#icon-UI"></use>
         </svg>
         <h3>源码易读</h3>
         <p>组件的源码都极其简洁，简洁易懂</p>
       </li>
     </ul>
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
  clip-path: ellipse(80% 60% at 50% 40%);
}
.features  {
  margin: 64px auto;
  padding: 0 16px;

  @media (min-width: 800px) and (max-width: 1199px) {
    width: 800px;

    >ul{
      >li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;

    >ul{
      >li {
        width: 33.33333%;
      }
    }
  }
  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text
      }
    }
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
      padding: 40px 0;
      a{
        color: #fff;
        background: $color-bg-a;
        display: inline-block;
        margin: 0 8px;
        border-radius: 40px;
        padding: 8px 24px;
        &:hover{
          text-decoration: none;
        }
      }
    }
  }

</style>