<template>
  <div>
    <h2>Hello word !!!</h2>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'App',
  setup() {
    const state = reactive({})

    return { ...toRefs(state) }
  },
})
</script>
