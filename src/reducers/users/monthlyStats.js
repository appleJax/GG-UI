import payloadStates from 'Constants/PayloadStates'
import actionTypes   from 'Constants/ActionTypes'

const [{
  INITIAL_STATE,
  FETCHING,
  RESOLVED,
  NOT_FOUND,
  ERROR_FETCHING
}, {
  FETCHING_MONTHLY_STATS,
  SET_MONTHLY_STATS,
  NOT_FOUND_MONTHLY_STATS,
  ERROR_FETCHING_MONTHLY_STATS
}] = [ payloadStates, actionTypes ]

const init = {
  state: INITIAL_STATE,
  data: [],
  error: null
}

// users.monthlyStats reducer
export default (state = init, action) => {
    switch (action.type) {
      case FETCHING_MONTHLY_STATS:
        return {
          state: FETCHING,
          data: [],
          error: null
        }

      case SET_MONTHLY_STATS:
        return {
          state: RESOLVED,
          data: action.users,
          error: null
        }

      case NOT_FOUND_MONTHLY_STATS:
        return {
          state: NOT_FOUND,
          data: null
        }

      case ERROR_FETCHING_MONTHLY_STATS:
        return {
          state: ERROR_FETCHING,
          data: [],
          error: action.message
        }

      default:
        return state
    }
  }
