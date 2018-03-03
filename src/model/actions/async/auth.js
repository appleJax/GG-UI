import { ajax }    from 'Utils'
import syncActions from 'Actions/sync'

const {
  authTransition,
  closeNavOptions,
  loginSuccess,
  loginError,
  logout
} = syncActions


export default ({

  fetchCurrentUser: () =>
    dispatch => {
      dispatch(closeNavOptions())
      dispatch(authTransition())
      fetch('/user', { credentials: 'include' })
        .then(res => res.json())
        .then(user => {
          if (user) {
            dispatch(loginSuccess(user))
            localStorage.setItem('gg-user', JSON.stringify(user))
          } else {
            dispatch(logout())
          }
        })
        .catch(error =>
          dispatch(loginError(error))
        )
    },

  updateUserDetails: () =>
    dispatch => {
      fetch('/user', { credentials: 'include' })
        .then(res => res.json())
        .then(user => {
          if (user) {
            dispatch(loginSuccess(user))
            localStorage.setItem('gg-user', JSON.stringify(user))
          }
        })
        .catch(console.error)
    },

  requestLogout: (history) =>
    dispatch => {
      dispatch(closeNavOptions())
      dispatch(authTransition())
      localStorage.removeItem('gg-user')
      fetch('/logout', { credentials: 'include' })
        .then(() => {
          dispatch(logout())
          history.push('/')
        })
        .catch(console.error)
    }

})
