import actionTypes   from 'Constants/ActionTypes'
import payloadStates from 'Constants/PayloadStates'

const [{
  LOGGED_IN,
  LOGGED_OUT,
  FETCHING,
  ERROR
}, {
  AUTH_TRANSITION,
  LOGIN,
  LOGIN_ERROR,
  LOGOUT,
  REQUESTING_TOGGLE_PRIVACY,
  TOGGLE_PRIVACY,
  ERROR_TOGGLE_PRIVACY
}] = [ payloadStates, actionTypes ]

const LOGGED_OUT_USER = {
  state: LOGGED_OUT,
  data: null,
  error: null
}

const init = () => {
  if (!localStorage) return LOGGED_OUT_USER

  const user = JSON.parse(localStorage.getItem('gg-user'))
  return user
    ? { state: LOGGED_IN, data: user, error: null }
    : LOGGED_OUT_USER
}

export default (state = init(), action) => {
  switch (action.type) {
    case AUTH_TRANSITION:
      return {
        ...state,
        state: FETCHING
      }

    case LOGIN:
      return {
        state: LOGGED_IN,
        data: action.user,
        error: null
      }

    case LOGIN_ERROR:
      return {
        state: ERROR,
        data: null,
        error: action.message
      }

    case LOGOUT:
      return LOGGED_OUT_USER

    case REQUESTING_TOGGLE_PRIVACY:
      return {
        ...state,
        requestingTogglePrivacy: true
      }

    case TOGGLE_PRIVACY:
      return {
        ...state,
        data: action.user,
        requestingTogglePrivacy: false
      }

    case ERROR_TOGGLE_PRIVACY:
      return {
        ...state,
        requestingTogglePrivacy: false
      }

    default:
      return state
  }
}
