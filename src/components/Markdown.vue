<template>
  <article class="markdown-body" v-html="content">

  </article>
</template>

<script lang="ts">
import md from '../markdown/install.md'
import {ref} from "vue";
export default {
  props: {
    path: {
      type: String,
      require: true
    }
  },
  setup(props){
    const content = ref(null)
    import(props.path).then(result=> {
      content.value = result.default
    })
    return {content}
  }
}
</script>

<style scoped lang="scss">

</style>