import payloadStates from 'Constants/PayloadStates'
import actionTypes   from 'Constants/ActionTypes'

const [{
  INITIAL_STATE,
  FETCHING,
  RESOLVED,
  NOT_FOUND,
  ERROR_FETCHING
}, {
  FETCHING_LIVE_QUESTIONS,
  SET_LIVE_QUESTIONS,
  NOT_FOUND_LIVE_QUESTIONS,
  ERROR_FETCHING_LIVE_QUESTIONS
}] = [ payloadStates, actionTypes ]

const init = {
  state: INITIAL_STATE,
  data: [],
  error: null
 }

export default (state = init, action) => {
    switch (action.type) {
      case FETCHING_LIVE_QUESTIONS:
        return {
          state: FETCHING,
          data: state.data,
          error: null
        }

      case SET_LIVE_QUESTIONS:
        return {
          state: RESOLVED,
          data: action.liveQuestions,
          error: null
        }

      case NOT_FOUND_LIVE_QUESTIONS:
        return {
          state: NOT_FOUND,
          data: [],
          error: null
        }

      case ERROR_FETCHING_LIVE_QUESTIONS:
        return {
          state: ERROR_FETCHING,
          data: [],
          error: action.message
        }

      default:
        return state
    }
  }
