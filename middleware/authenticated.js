export default function ({ store, redirect, route }) {
  const isAuthenticated = store.getters['auth/isAuthenticated']

  if (process.client && !isAuthenticated) {
    return redirect({ name: 'auth-login', query: { back: route?.fullPath } })
  }
}
