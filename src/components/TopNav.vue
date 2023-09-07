<template>
  <div class="topNav">
    <div class="logo">我是 logo</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
$color-bg: pink;
.topNav{
  border: 1px solid red;
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