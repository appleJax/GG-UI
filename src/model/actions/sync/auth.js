import actionTypes from 'Constants/ActionTypes'

const {
  LOGIN,
  LOGIN_ERROR,
  LOGOUT,
} = actionTypes


export default ({

  loginSuccess: (user) => ({
    type: LOGIN,
    user
  }),

  loginError: (message) => ({
    type: LOGIN_ERROR,
    message
  }),

  logout: () => ({
    type: LOGOUT
  })

})
