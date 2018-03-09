import payloadStates from 'Constants/PayloadStates'
import actionTypes   from 'Constants/ActionTypes'

const [{
  INITIAL_STATE,
  FETCHING,
  RESOLVED,
  NOT_FOUND,
  ERROR_FETCHING
}, {
  FETCHING_CORRECT_CARDS,
  SET_CORRECT_CARDS,
  NOT_FOUND_CORRECT_CARDS,
  ERROR_FETCHING_CORRECT_CARDS
}] = [ payloadStates, actionTypes ]


const init = {
  state: INITIAL_STATE,
  data: [],
  error: null
}

export default (state = init, action) => {
    switch (action.type) {

      case FETCHING_CORRECT_CARDS:
        return {
          ...state,
          state: FETCHING
        }

      case SET_CORRECT_CARDS:
        return {
          state: RESOLVED,
          data: action.cards,
          error: null
        }

      case NOT_FOUND_CORRECT_CARDS:
        return {
          state: NOT_FOUND,
          data: [],
          error: null
        }

      case ERROR_FETCHING_CORRECT_CARDS:
        return {
          state: ERROR_FETCHING,
          data: [],
          error: action.message
        }

      default:
        return state
    }
  }
