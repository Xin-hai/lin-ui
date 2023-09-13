<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="lin-dialog-overlay" @click="onCloseOverlay"></div>
      <div class="lin-dialog-wrapper">
        <div class="lin-dialog">
          <header><slot name="title"/> <span class="lin-dialog-close" @click="close"></span></header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <Button @click="runOk" color="success">OK</Button>
            <Button @click="runCancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </Teleport>
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
    },
    closeOverlay: {
      type: Boolean,
      default: false
    },
    f1: {
      type: Function
    },
    f2: {
      type: Function
    },
  },
  setup(props, context){
    const close = ()=> {
      context.emit('update:visible',false)
    }
    const onCloseOverlay = ()=> {
      if(props.closeOverlay){
        close()
      }
    }
    const runOk = ()=> {
      if(props.f1?.() !== false){
        close()
      }
    }
    const runCancel = ()=> {
      if(props.f2?.() !== false){
        close()
      }
    }
    return {close, onCloseOverlay,runOk,runCancel}
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