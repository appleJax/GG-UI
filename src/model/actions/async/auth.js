import { ajax }    from 'Utils'
import syncActions from 'Actions/sync'

const {
  closeNavOptions,
  loginSuccess,
  loginError,
  logout
} = syncActions


export default ({

  fetchCurrentUser: () =>
    dispatch =>
      fetch('/user', { credentials: 'include' })
        .then(res => res.json())
        .then(user => {
          console.log('User:', user)
          if (user) {
            dispatch(loginSuccess(user))
            localStorage.setItem('gg-user', JSON.stringify(user))
          }
        })
        .catch(error =>
          dispatch(loginError(error))
        ),

  requestLogout: (history) =>
    dispatch => {
      localStorage.removeItem('gg-user')
      dispatch(logout())
      dispatch(closeNavOptions())
      fetch('/logout', { credentials: 'include' })
        .then(() => history.push('/'))
        .catch(console.error)
    }

})
