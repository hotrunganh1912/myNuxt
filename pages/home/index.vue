<template>
  <div>
    <el-avatar> {{ user.fullName }} </el-avatar>
  </div>
</template>

<script>
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'HomePage',
  layout: 'protected/default',
  setup() {
    const { store } = useContext()
    const user = computed(() => store.getters['auth/getUser'])

    return { user }
  },
})
</script>
