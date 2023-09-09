<template>
    <button class="lin-button" :class=" `lin-theme-${theme}` ">
      <slot/>
    </button>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: 'button'
    }
  },
  setup(){

    return {}
  }
}
</script>

<style scoped lang="scss">
  *{box-sizing: border-box}
  .lin-button{
    $height-button: 32px;
    $color-border: #d9d9d9;
    $color-font: #333;
    $color-blue: #40a9ff;
    $border-radius: 4px;

    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: $height-button;
    padding: 0 12px;
    cursor: pointer;
    white-space: nowrap;
    background: #fff;
    color: $color-font;
    border: 1px solid $color-border;
    border-radius: $border-radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    & + & {
      margin-left: 8px;
    }
    &:hover,
    &:focus {
      color: $color-blue;
      border-color: $color-blue;
      outline: none;
    }
  }
</style>