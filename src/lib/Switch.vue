<template>
  <button><span></span></button>
</template>

<script>
export default {
  name: ""
}
</script>

<style scoped lang="scss">
  $background-button: #409eff;
  $background-span: #fff;
  $height-button: 22px;
  $height-span: $height-button - 4px;
  button{
    position: relative;
    border: none;
    height: $height-button;
    width: 2*$height-button;
    background: $background-button;
    border-radius: $height-button / 2;
  }
    span {
      position: absolute;
      top: 2px;
       left: 2px;
      //left: calc(100% - #{$height-span} - 2px);
      height: $height-span;
      width: $height-span;
      background:$background-span;
      border-radius: $height-span / 2;
  }
  button:hover > span {
    left: calc(100% - #{$height-span} - 2px);
  }
</style>