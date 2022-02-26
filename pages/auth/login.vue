<script>
import { defineComponent, h } from '@nuxtjs/composition-api'
import ProfileCard from '~/components/profile/card'
export default defineComponent({
  name: 'LoginPage',
  layout: 'BaseLayout',
  setup() {
    return () => h(ProfileCard)
  },
})
</script>
