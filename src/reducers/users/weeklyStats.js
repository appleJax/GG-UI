import payloadStates from 'Constants/PayloadStates'
import actionTypes   from 'Constants/ActionTypes'

const [{
  INITIAL_STATE,
  FETCHING,
  RESOLVED,
  NOT_FOUND,
  ERROR_FETCHING
}, {
  FETCHING_WEEKLY_STATS,
  SET_WEEKLY_STATS,
  NOT_FOUND_WEEKLY_STATS,
  ERROR_FETCHING_WEEKLY_STATS
}] = [ payloadStates, actionTypes ]

const init = {
  state: INITIAL_STATE,
  data: [],
  error: null
}

// users.weeklyStats reducer
export default (state = init, action) => {
    switch (action.type) {
      case FETCHING_WEEKLY_STATS:
        return {
          state: FETCHING,
          data: [],
          error: null
        }

      case SET_WEEKLY_STATS:
        return {
          state: RESOLVED,
          data: action.users,
          error: null
        }

      case NOT_FOUND_WEEKLY_STATS:
        return {
          state: NOT_FOUND,
          data: null
        }

      case ERROR_FETCHING_WEEKLY_STATS:
        return {
          state: ERROR_FETCHING,
          data: [],
          error: action.message
        }

      default:
        return state
    }
  }
