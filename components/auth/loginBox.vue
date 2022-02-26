<template>
  <div></div>
</template>
<script>
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'LoginBox',
  components: {},
  setup() {
    const state = reactive({})

    return { ...toRefs(state) }
  },
})
</script>
<style module lang="scss"></style>
