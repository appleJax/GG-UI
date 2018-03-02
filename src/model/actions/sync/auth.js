import actionTypes from 'Constants/ActionTypes'

const {
  AUTH_TRANSITION,
  LOGIN,
  LOGIN_ERROR,
  LOGOUT,
} = actionTypes


export default ({

  authTransition: () => {
    document.body.classList.add('no-scroll')
    return { type: AUTH_TRANSITION }
  },

  loginSuccess: (user) => {
    document.body.classList.remove('no-scroll')
    return {
      type: LOGIN,
      user
    }
  },

  loginError: (message) => {
    document.body.classList.remove('no-scroll')
    return {
      type: LOGIN_ERROR,
      message
    }
  },

  logout: () => {
    document.body.classList.remove('no-scroll')
    return { type: LOGOUT }
  }

})
