<template>
  <div :class="$style.wrapper">
    <Nuxt v-if="isAuthenticated" />
  </div>
</template>

<script>
import {
  defineComponent,
  onMounted,
  useContext,
  getCurrentInstance,
  computed,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ProtectedLayout',
  componentName: 'ProtectedLayout',
  middleware: ['authenticated'],
  setup() {
    const context = useContext()
    const vm = getCurrentInstance().proxy
    const { store, redirect, route } = context
    const isAuthenticated = computed(
      () => store.getters['auth/isAuthenticated']
    )

    const getUser = async () => {
      const rs = await store.dispatch('auth/getProfile')
      if (process.client && rs?.status === 401) {
        vm.$message.error({
          customClass: 'msg-error__custom',
          message: 'Oops, plz login before continue.',
        })
        redirect({ name: 'auth-login', query: { back: route?.fullPath } })
      }
      const { username, fullName } = rs.data
      store.commit('auth/SET_USER_PROFILE', { username, fullName })
    }
    onMounted(() => getUser())

    return {
      isAuthenticated,
    }
  },
})
</script>

<style module lang="scss">
:global(.msg-error__custom) {
  top: auto !important;
  bottom: 20px;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

:global(html, body) {
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
}
</style>
