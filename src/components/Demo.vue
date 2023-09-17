<template>
  <div class="demo">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <div class="demo-component">
      <component :is="component"></component>
    </div>
    <div class="demo-actions">
      <Button color="info" @click="toggle" v-text="buttonText"></Button>
    </div>
    <Transition>
      <div class="demo-code" v-if="codeVisible">
      <pre v-html="html"
           class="language-html"></pre>
      </div>
    </Transition>
  </div>
</template>

<script>
import Button from "../lib/Button.vue";
import  'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import {computed, reactive, ref} from "vue";



export default {
  props: {
    component: Object
  },
  components: {Button},
  setup(props){
    const Prism = reactive(window.Prism)
    const codeVisible = ref(false)
    const buttonText = ref('查看代码')
    const html = computed(()=> {
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
    })
    const toggle = ()=> {
      codeVisible.value = !codeVisible.value
      buttonText.value = buttonText.value === '查看代码' ? '隐藏代码' : '查看代码';
    }
    return {Prism, html,codeVisible,toggle,buttonText}
  }
}
</script>

<style scoped lang="scss">
$border-color: #d9d9d9;

.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
      //overflow-x: auto;
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>