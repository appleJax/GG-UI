import payloadStates from 'Constants/PayloadStates'
import actionTypes   from 'Constants/ActionTypes'

const [{
  INITIAL_STATE,
  FETCHING,
  RESOLVED,
  NOT_FOUND,
  ERROR_FETCHING
}, {
  FETCHING_ALLTIME_STATS,
  SET_ALLTIME_STATS,
  NOT_FOUND_ALLTIME_STATS,
  ERROR_FETCHING_ALLTIME_STATS
}] = [ payloadStates, actionTypes ]

const init = {
  state: INITIAL_STATE,
  data: {},
  page: 1,
  search: '',
  total: 0,
  error: null
}

// users.allTimeStats reducer
export default (state = init, action) => {
  switch (action.type) {
    case FETCHING_ALLTIME_STATS:
      return {
        ...state,
        state: FETCHING
      }

    case SET_ALLTIME_STATS:
      return {
        state: RESOLVED,
        page: action.page,
        search: action.search,
        total: action.total,
        data: {
          ...state.data,
          [action.page]: action.users
        },
        error: null
      }

    case NOT_FOUND_ALLTIME_STATS:
      return {
        ...state,
        page: 1,
        total: 0,
        state: NOT_FOUND,
        error: null
      }

    case ERROR_FETCHING_ALLTIME_STATS:
      return {
        ...state,
        page: 1,
        total: 0,
        state: ERROR_FETCHING,
        error: action.message
      }

    default:
      return state
  }
}
