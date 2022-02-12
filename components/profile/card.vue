<template>
  <h2>profile-card</h2>
</template>

<script>
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ProfileCard',
  setup() {
    const state = reactive({})

    return { ...toRefs(state) }
  },
})
</script>

<!--<style module>-->
<!--</style>-->
