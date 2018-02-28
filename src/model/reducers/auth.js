import actionTypes   from 'Constants/ActionTypes'
import payloadStates from 'Constants/PayloadStates'

const { RESOLVED, ERROR } = payloadStates
const { LOGIN, LOGIN_ERROR, LOGOUT } = actionTypes

export default (state = null, action) => {
    switch (action.type) {
      case LOGIN:
        return {
          state: RESOLVED,
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
        return null

      default:
        return state
    }
  }
