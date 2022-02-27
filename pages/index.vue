<script>
import { defineComponent, h } from '@nuxtjs/composition-api'
import ProfileCard from '@components/profile/card.vue'

export default defineComponent({
  name: 'App',
  layout: 'BaseLayout',
  setup() {
    return () => h(ProfileCard)
  },
})
</script>
