<script>
import { defineComponent, h } from '@nuxtjs/composition-api'
import LoginBox from '~/components/auth/loginBox'
export default defineComponent({
  name: 'LoginPage',
  layout: 'BaseLayout',
  setup() {
    return () => h(LoginBox)
  },
})
</script>
