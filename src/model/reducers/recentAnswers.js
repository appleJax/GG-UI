import payloadStates from 'Constants/PayloadStates'
import actionTypes   from 'Constants/ActionTypes'

const [{
  INITIAL_STATE,
  FETCHING,
  RESOLVED,
  NOT_FOUND,
  ERROR_FETCHING
}, {
  FETCHING_RECENT_ANSWERS,
  SET_RECENT_ANSWERS,
  NOT_FOUND_RECENT_ANSWERS,
  ERROR_FETCHING_RECENT_ANSWERS
}] = [ payloadStates, actionTypes ]

const init = {
  state: INITIAL_STATE,
  data: [],
  error: null
 }

export default (state = init, action) => {
  switch (action.type) {
    case FETCHING_RECENT_ANSWERS:
      return {
        state: FETCHING,
        data: [],
        error: null
      }

    case SET_RECENT_ANSWERS:
      return {
        state: RESOLVED,
        data: action.recentAnswers,
        error: null
      }

    case NOT_FOUND_RECENT_ANSWERS:
      return {
        state: NOT_FOUND,
        data: [],
        error: null
      }

    case ERROR_FETCHING_RECENT_ANSWERS:
      return {
        state: ERROR_FETCHING,
        data: [],
        error: action.message
      }

    default:
      return state
  }
}
