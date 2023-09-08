<template>
  <button :class="{checked: value}" @click="toggle"><span></span></button>
  <div>{{value}}</div>
</template>

<script lang="ts">
import {ref} from 'vue';


export default {
  emits: ['input'],
  props: {
    value: Boolean
  },
  setup(props, context){
    const toggle = ()=> {
      context.emit('input', !props.value)
    }
    return {
      toggle
    }
  }
}
</script>

<style scoped lang="scss">
  $background-normal: #bebebe;
  $background-button: #409eff;
  $background-span: #fff;
  $height-button: 22px;
  $height-span: $height-button - 4px;
  button{
    position: relative;
    border: none;
    height: $height-button;
    width: 2*$height-button;
    background: $background-normal;
    border-radius: $height-button / 2;
  }
    span {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $height-span;
      width: $height-span;
      background:$background-span;
      border-radius: $height-span / 2;
      transition: left 300ms;
  }
  button.checked {
    background: $background-button;
  }
  button.checked > span {
    left: calc(100% - #{$height-span} - 2px);
  }
  button:focus {
    outline: none;
  }
</style>