import { ajax }      from 'Utils'
import syncActions   from 'Actions/sync'
import payloadStates from 'Constants/PayloadStates'

const { LOGGED_IN } = payloadStates
const {
  authTransition,
  closeNavOptions,
  loginSuccess,
  loginError,
  logout,
  requestingTogglePrivacy,
  setFocusedUser,
  togglePrivacy,
  errorTogglePrivacy
} = syncActions

export default ({
  fetchCurrentUser: () =>
    (dispatch, getState) => {
      const { auth } = getState()
      if (auth.state !== LOGGED_IN) {
        dispatch(closeNavOptions())
        dispatch(authTransition())
      }

      ajax.get('/session/user', { withCredentials: true })
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
    (dispatch, getState) => {
      const { auth } = getState()
      if (auth.state === LOGGED_IN) {
        ajax.get(`/user/${auth.data.userId}`)
          .then(user => {
            if (user) {
              dispatch(loginSuccess(user))
              localStorage.setItem('gg-user', JSON.stringify(user))
            }
          })
          .catch(err => {
            dispatch(loginError(err))
            console.error(err)
          })
      }
    },

  requestTogglePrivacy: () =>
    (dispatch, getState) => {
      const { auth } = getState()
      if (auth.state === LOGGED_IN) {
        dispatch(requestingTogglePrivacy())

        ajax.post(`/togglePrivacy`)
          .then(user => {
            if (user) {
              dispatch(togglePrivacy(user))
              dispatch(setFocusedUser(user))
              localStorage.setItem('gg-user', JSON.stringify(user))
            } else {
              dispatch(errorTogglePrivacy())
            }
          })
          .catch((err) => {
            dispatch(errorTogglePrivacy())
            console.error(err)
          })
      }
    },

  requestLogout: (history) =>
    dispatch => {
      dispatch(closeNavOptions())
      dispatch(authTransition())
      ajax.post('/logout')
        .then(() => {
          localStorage.removeItem('gg-user')
          dispatch(logout())
          history.push('/')
        })
        .catch(console.error)
    }
})
