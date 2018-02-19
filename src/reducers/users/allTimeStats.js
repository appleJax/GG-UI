import payloadStates from 'Constants/PayloadStates'
import actionTypes   from 'Constants/ActionTypes'

const {
  INITIAL_STATE,
  FETCHING,
  RESOLVED,
  NOT_FOUND,
  ERROR_FETCHING
} = payloadStates
const {
  FETCHING_ALLTIME_STATS,
  POPULATE_ALLTIME_STATS,
  NOT_FOUND_ALLTIME_STATS,
  ERROR_FETCHING_ALLTIME_STATS
} = actionTypes

const init = {
  state: INITIAL_STATE,
  data: [],
  error: null
}

// users.allTimeStats reducer
export default (state = init, action) => {
    switch (action.type) {
      case FETCHING_ALLTIME_STATS:
        return {
          state: FETCHING,
          data: [],
          error: null
        }

      case POPULATE_ALLTIME_STATS:
        return {
          state: RESOLVED,
          data: action.users,
          error: null
        }

      case NOT_FOUND_ALLTIME_STATS:
        return {
          state: NOT_FOUND,
          data: null
        }

      case ERROR_FETCHING_ALLTIME_STATS:
        return {
          state: ERROR_FETCHING,
          data: [],
          error: action.message
        }

      default:
        return state
    }
  }
