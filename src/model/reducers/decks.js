import payloadStates from 'Constants/PayloadStates'
import actionTypes   from 'Constants/ActionTypes'

const [{
  INITIAL_STATE,
  FETCHING,
  RESOLVED,
  NOT_FOUND,
  ERROR_FETCHING
}, {
  ADD_DECK,
  FETCHING_DECK,
  NOT_FOUND_DECK,
  ERROR_FETCHING_DECK,
}] = [ payloadStates, actionTypes ]

export default (state = {}, action) => {
    switch (action.type) {

      case ADD_DECK:
        return {
          ...state,
          [action.game]: {
            state: RESOLVED,
            data: action.deck,
            error: null
          }
        }

      case FETCHING_DECK:
        return {
          ...state,
          [action.game]: {
            state: FETCHING,
            data: [],
            error: null
          }
        }

      case NOT_FOUND_DECK:
        return {
          ...state,
          [action.game]: {
            state: NOT_FOUND,
            data:  null,
            error: null
          }
        }

      case ERROR_FETCHING_DECK:
        return {
          ...state,
          [action.game]: {
            state: ERROR_FETCHING,
            data: null,
            error: action.message
          }
        }

      default:
        return state
    }
  }
