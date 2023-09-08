<template>
  <div>
    <Switch v-model:value="boolean" />

  </div>
</template>

<script>
import Switch from "../lib/Switch.vue";
import {ref} from "vue";

export default {
  components: {Switch},
  setup(){
    const boolean = ref(true)
    return { boolean }
  }
}
</script>

<style scoped lang="scss">

</style>