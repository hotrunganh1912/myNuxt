<template>
  <el-card :body-style="{ height: '90vh' }" class="box-card">
    <div slot="header" class="clearfix">
      <h3>Login page</h3>
    </div>

    <el-form
      ref="loginForm"
      :model="form"
      label-position="left"
      label-width="90px"
      size="large"
    >
      <el-form-item label="Username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="form.password" show-password></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">Login</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
import {
  defineComponent,
  reactive,
  toRefs,
  useContext,
  useRouter,
  computed,
  getCurrentInstance,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'LoginBox',
  components: {},
  setup() {
    const { store, route } = useContext()
    const router = useRouter()
    const vm = getCurrentInstance().proxy
    const state = reactive({
      form: {
        username: '',
        password: '',
      },
      pageBack: computed(() => route?.value?.query?.back ?? '/home'),
    })

    const onSubmit = async () => {
      const { username, password } = state.form
      const { token, success, message } = await store.dispatch('auth/login', {
        username,
        password,
      })

      if (process.client && success && token) {
        localStorage.setItem('access-token', `Bearer ${token}`)
        return router.replace({
          path: state.pageBack,
        })
      }
      vm.$message.error({
        customClass: 'msg-error__custom',
        message,
      })
    }

    return { ...toRefs(state), onSubmit }
  },
})
</script>
<style module lang="scss">
.loginWrapper {
  background: white;
  padding: 20px;
  border-radius: 20px;
  h3 {
    text-align: center;
    margin-bottom: 2rem;
  }
}
</style>
