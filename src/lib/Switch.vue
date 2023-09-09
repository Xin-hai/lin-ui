<template>
  <button :class="{'lin-checked': value}" @click="toggle" :disabled="disabled" class="lin-switch"><span></span></button>
  <div>{{value}}</div>
</template>

<script lang="ts">

export default {
  emits: ['update:value'],
  props: {
    value: Boolean,
    disabled: Boolean
  },
  setup(props, context){
    const toggle = ()=> {
      context.emit('update:value', !props.value)
    }

    return {toggle}
  }
}
</script>

<style scoped lang="scss">
  $background-normal: #bebebe;  $background-button: #409eff;  $background-span: #fff;
  $height-button: 22px;  $height-span: $height-button - 4px;
  .lin-switch{
    position: relative;
    border: none;
    height: $height-button;
    width: 2*$height-button;
    background: $background-normal;
    border-radius: $height-button / 2;
   > span {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $height-span;
      width: $height-span;
      background:$background-span;
      border-radius: $height-span / 2;
      transition: all 300ms;
    }
    &.lin-checked {
      background: $background-button;
      > span {
        left: calc(100% - #{$height-span} - 2px);
      }
    }
    &:focus {
      outline: none;
    }
    &:active{
      > span {width: $height-span + 4px}
    }
  }
  :disabled{
    cursor: not-allowed;
  }

</style>