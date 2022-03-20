import auth from '@api/auth'

export default {
  init: () => {},
  login: async ({ commit }, payload) => {
    try {
      const res = await auth.login(payload)
      const { token, 'current-user': currentUser } = res.data
      commit('SET_USER_PROFILE', currentUser)
      commit('SET_INIT_LOADING', false)

      return handerSuccess({ token })
    } catch (error) {
      return { message: error.response.data.message }
    }
  },
  getProfile: async ({ commit }) => {
    try {
      const res = await auth.profile()
      commit('SET_INIT_LOADING', false)

      return res
    } catch ({ request }) {
      return request
    }
  },
}

const handerSuccess = (data) => ({
  success: true,
  ...data,
})
