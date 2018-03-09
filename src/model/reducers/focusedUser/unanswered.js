import payloadStates from 'Constants/PayloadStates'
import actionTypes   from 'Constants/ActionTypes'

const [{
  INITIAL_STATE,
  FETCHING,
  RESOLVED,
  NOT_FOUND,
  ERROR_FETCHING
}, {
  FETCHING_UNANSWERED_CARDS,
  SET_UNANSWERED_CARDS,
  NOT_FOUND_UNANSWERED_CARDS,
  ERROR_FETCHING_UNANSWERED_CARDS
}] = [ payloadStates, actionTypes ]


const init = {
  state: INITIAL_STATE,
  data: [],
  error: null
}

export default (state = init, action) => {
    switch (action.type) {

      case FETCHING_UNANSWERED_CARDS:
        return {
          ...state,
          state: FETCHING
        }

      case SET_UNANSWERED_CARDS:
        return {
          state: RESOLVED,
          data: action.cards,
          error: null
        }

      case NOT_FOUND_UNANSWERED_CARDS:
        return {
          state: NOT_FOUND,
          data: [],
          error: null
        }

      case ERROR_FETCHING_UNANSWERED_CARDS:
        return {
          state: ERROR_FETCHING,
          data: [],
          error: action.message
        }

      default:
        return state
    }
  }
