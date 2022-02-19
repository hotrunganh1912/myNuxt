<template>
  <div :class="[$style.cardWrapper, { ['mobile']: $device.isMobile }]">
    <cover-image />
    <div :class="$style.introduceText">
      <div :class="$style.introduceTextWrapper">
        <h1>{{ name }}</h1>
        <p>{{ job }}</p>
        <p>{{ location }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ProfileCard',
  components: {
    'cover-image': () => import('@components/profile/cover-image.vue'),
  },
  setup(props) {
    const { name, job, location } = props

    const state = reactive({
      name: name ?? 'Hồ Trung Anh',
      job: job ?? 'Front-end developer',
      location: location ?? 'DaNang, VietNam',
    })

    return { ...toRefs(state) }
  },
})
</script>
<style module lang="scss">
.cardWrapper {
  display: flex;
  flex-direction: row;
  color: white;
  wrap: 30px;

  &:global(.mobile) {
    flex-direction: column;
    gap: 30px;
  }
}
.introduceText {
  box-shadow: rgba(173, 216, 230, 0.4) 5px 5px,
    rgba(173, 216, 230, 0.3) 10px 10px, rgba(173, 216, 230, 0.2) 15px 15px,
    rgba(2173, 216, 230, 0.1) 20px 20px, rgba(173, 216, 230, 0.05) 25px 25px;
  border-radius: 20px;
  min-width: 300px;

  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  .introduceTextWrapper {
    h1 {
      padding-bottom: 1rem;
      font-weight: bold;
      font-size: 30px;
    }

    p {
      text-align: center;

      + p {
        padding-top: 0.5rem;
      }
    }
  }
}
</style>
