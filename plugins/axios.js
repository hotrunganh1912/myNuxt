export default function ({ $axios, redirect, route }) {
  $axios.onError((error) => {
    const statusCode = error.response.status
    const originalRequest = error.config

    if (statusCode === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      return $axios
        .get('auth/refresh/token', originalRequest)
        .then((response) => {
          const {
            data: { token },
          } = response
          window.localStorage.setItem('access-token', 'Bearer ' + token)
          originalRequest.headers.Authorization = 'Bearer ' + token

          return $axios(originalRequest)
        })
        .catch(() => {
          return redirect({
            name: 'auth-login',
            query: { back: route?.fullPath },
          })
        })
    }

    return Promise.reject(error)
  })
  $axios.onRequest((config) => {
    if (process.client) {
      config.headers.common.Authorization = `${window.localStorage.getItem(
        'access-token'
      )}`
    }
  })
}
