export default {
  isAuthenticated: (state) => !!state.userProfile,
  getUser: (state) => state.userProfile ?? null,
}
