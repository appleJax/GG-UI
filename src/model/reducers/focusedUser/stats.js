import payloadStates from 'Constants/PayloadStates'
import actionTypes   from 'Constants/ActionTypes'

const [{
  INITIAL_STATE,
  FETCHING,
  RESOLVED,
  NOT_FOUND,
  ERROR_FETCHING
}, {
  FETCHING_FOCUSED_USER,
  SET_FOCUSED_USER,
  NOT_FOUND_FOCUSED_USER,
  ERROR_FETCHING_FOCUSED_USER,
}] = [ payloadStates, actionTypes ]

const init = {
  state: INITIAL_STATE,
  data: { handle: false },
  error: null
}

export default (state = init, action) => {
    switch (action.type) {

      case FETCHING_FOCUSED_USER:
        return {
          state: FETCHING,
          data: { handle: false },
          error: null
        }

      case SET_FOCUSED_USER:
        return {
          state: RESOLVED,
          data: action.user,
          error: null
        }

      case NOT_FOUND_FOCUSED_USER:
        return {
          state: NOT_FOUND,
          data: null,
          error: null
        }

      case ERROR_FETCHING_FOCUSED_USER:
        return {
          state: ERROR_FETCHING,
          data: null,
          error: action.message
        }

      default:
        return state

  }

}
