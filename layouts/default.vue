<template>
  <div :class="$style.wrapper">
    <Nuxt />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'BaseLayout',
})
</script>

<style module>
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
