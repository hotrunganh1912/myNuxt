<script>
import { defineComponent, h } from '@nuxtjs/composition-api'
import ProfileCard from '@components/profile/card.vue'

export default defineComponent({
  name: 'App',
  setup() {
    return () => h(ProfileCard)
  },
})
</script>
