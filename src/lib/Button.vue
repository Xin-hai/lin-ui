<template>
    <button class="lin-button" :class=" classes " :disabled="disabled">
      <span class="lin-loading" v-if="loading"></span>
      <slot/>
    </button>
</template>

<script>
import {computed} from "vue";

export default {
  props: {
    theme: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'normal'
    },
    level: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    color: {
      type: String
    }
  },
  setup(props){
    const {theme, size, level, color} = props
    const classes = computed(()=>{
      return {
          [`lin-theme-${theme}`]: theme,
          [`lin-size-${size}`]: size,
          [`lin-level-${level}`]: level,
          [`lin-color-${color}`]: color
      }
    })

    return {classes}
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
    $font-size: 12px;
    $color-red: #ed4014;

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
    &.lin-theme-link {
      color: $color-blue;
      border-color: transparent;
      box-shadow: none;
      &:hover,&:focus{
        color: lighten($color-blue, 10%);
      }
    }
    &.lin-theme-text {
      color: inherit;
      border-color: transparent;
      box-shadow: none;
      &:hover,&:focus {
        background: darken(#fff, 6%);
      }
    }
    &.lin-size-big{
      font-size: $font-size * 2;
      height: 48px;
      padding: 0 16px;
    }

    &.lin-size-normal {}

    &.lin-size-small {
      //font-size: $font-size / 2;
      font-size: calc($font-size / 2);
      height: 20px;
      padding: 0 4px;
    }
    &.lin-theme-button {
      &.lin-level-main {
        background: $color-blue;
        color: #fff;
        border-color: $color-blue;
        &:hover,
        &:focus {
          background: darken($color-blue, 10%);
          border-color: darken($color-blue, 10%);
        }
      }

      &.lin-level-normal {}


      &.lin-level-danger {
        background: $color-red;
        border-color: $color-red;
        color: #fff;
        &:hover,
        &:focus {
          background: darken($color-red, 10%);
          border-color: darken($color-red, 10%);
        }
      }
    }

    &.lin-theme-link {
      &.lin-level-danger {
        color: $color-red;
        &:focus {
          color: darken($color-red, 10%)
        }
      }
    }

    &.lin-theme-text {
      &.lin-level-main {
        color: $color-blue;
        &:hover,
        &:focus {
          color: darken($color-blue, 10%);
        }
      }

      &.lin-level-normal {}


      &.lin-level-danger {
        color: $color-red;
        &:hover,
        &:focus {
          color: darken($color-red, 10%);
        }
      }
    }

    &.lin-theme-button {
      &[disabled]{
        cursor: not-allowed;
        color: #c5c8ce;
        background-color: #f7f7f7;
        border-color: #dcdee2;
        &:hover{
          background-color: #f7f7f7;
        }
      }
    }
    &.lin-theme-link,
    &.lin-theme-text {
      &[disabled] {
        cursor: not-allowed;
        color: #c5c8ce;
      }
    }
    > .lin-loading {
      display: inline-block;
      width: 14px;
      height: 14px;
      margin-right: 4px;
      border-radius: 8px;
      border-color: $color-blue $color-blue $color-blue transparent;
      border-style: solid;
      border-width: 2px;
      animation: lin-spin 1s infinite linear;
    }

    &.lin-theme-button {
      &.lin-color-info {
        color: #fff;
        background-color: #2db7f5;
        border-color: #2db7f5;
      }
      &.lin-color-success {
        color: #fff;
        background-color: #19be6b;
        border-color: #19be6b;
      }
      &.lin-color-warning {
        color: #fff;
        background-color: #f90;
        border-color: #f90;
      }
      &.lin-color-error {
        color: #fff;
        background-color: #ed4014;
        border-color: #ed4014;
      }
    }
  }

  @keyframes lin-spin {
    0%{transform: rotate(0deg)}
    100%{transform: rotate(360deg)}
  }


</style>