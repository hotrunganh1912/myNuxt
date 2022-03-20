export default {
  SET_USER_PROFILE(state, payload) {
    state.userProfile = payload
  },
  SET_INIT_LOADING(state, payload) {
    state.isInitLoading = payload
  },
}
