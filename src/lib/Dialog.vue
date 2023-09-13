<template>
  <template v-if="visible">
    <div class="lin-dialog-overlay"></div>
    <div class="lin-dialog-wrapper">
      <div class="lin-dialog">
        <header>标题 <span class="lin-dialog-close" @click="close"></span></header>
        <main>
          <p>第一行字</p>
          <p>第二行字</p>
        </main>
        <footer>
          <Button>OK</Button>
          <Button>取消</Button>
        </footer>
      </div>
    </div>
  </template>
</template>

<script>
import Button from "./Button.vue";

export default {
  components: {Button},
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context){
    const close = ()=> {
      context.emit('update:visible',false)
    }
    return {close}
  }
}
</script>

<style scoped lang="scss">
  $radius: 4px;
  $border-color: #d9d9d9;

  .lin-dialog {
    min-width: 15em;
    max-width: 90%;

    background: #fff;
    border-radius: $radius;
    box-shadow: 0 0 3px fade_out(black, 0.5);
    &-overlay {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;
      background: fade_out(black, 0.5);
    }
    &-wrapper {

      position: fixed;
      left: 50%;
      top: 50%;
      z-index: 15;
      transform: translate(-50%,-50%);
    }
    > header {
      padding: 12px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;
      border-bottom: 1px solid $border-color;
    }
    > main {
      padding: 12px 16px;
    }
    > footer {
      border-top: 1px solid $border-color;
      padding: 12px 16px;
      text-align: right;
    }
    &-close {
      position: relative;
      display: inline-block;
      width: 16px;
      height: 16px;
      cursor: pointer;
      &::before,
      &::after {
        position: absolute;
        content: '';
        height: 1px;
        background: #000;
        width: 100%;
        top: 50%;
        left: 50%;
      }
      &::before {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
      &::after {
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
  }


</style>