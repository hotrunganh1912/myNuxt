export default {
  profile() {
    return global.$nuxt.$axios.get('users/profile')
  },
  login(payload) {
    return global.$nuxt.$axios.post('/auth/login', payload)
  },
  refresh() {
    return global.$http.post('refresh/token')
  },
}
