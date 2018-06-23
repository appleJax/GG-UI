import payloadStates from 'Constants/PayloadStates'
import actionTypes   from 'Constants/ActionTypes'

const [{
  INITIAL_STATE,
  FETCHING,
  RESOLVED,
  ERROR_FETCHING
}, {
  FETCHING_DECK_TITLES,
  SET_DECK_TITLES,
  ERROR_FETCHING_DECK_TITLES
}] = [ payloadStates, actionTypes ]

const init = {
  state: INITIAL_STATE,
  data: [],
  error: null
 }

export default (state = init, action) => {
  switch (action.type) {
    case FETCHING_DECK_TITLES:
      return {
        state: FETCHING,
        data: [],
        error: null
      }

    case SET_DECK_TITLES:
      return {
        state: RESOLVED,
        data: action.titles,
        error: null
      }

    case ERROR_FETCHING_DECK_TITLES:
      return {
        state: ERROR_FETCHING,
        data: [],
        error: action.message
      }

    default:
      return state
  }
}
