<template>
  <div :class="[$style.wrapper, { ['mobile']: $device.isMobile }]">
    <div :class="$style.coverImage">
      <img src="~assets/image/center-image.png" />
    </div>
  </div>
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
<style module lang="scss">
.wrapper {
  &:global(.mobile) {
    height: 100px;
    width: 100px;
  }

  border-radius: 50%;
  overflow: hidden;
  height: 300px;
  width: 300px;
  box-shadow: rgba(173, 216, 230, 0.4) -5px 5px,
    rgba(173, 216, 230, 0.3) -10px 10px, rgba(173, 216, 230, 0.2) -15px 15px,
    rgba(173, 216, 230, 0.1) -20px 20px, rgba(173, 216, 230, 0.05) -25px 25px;
}

.coverImage {
  display: block;
}
</style>
