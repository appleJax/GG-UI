import actionTypes from 'Constants/ActionTypes'
import payloadStates from 'Constants/PayloadStates'

const {
  FETCHING_DL_LAST_UPDATED,
  SET_DL_LAST_UPDATED,
  ERROR_FETCHING_DL_LAST_UPDATED
} = actionTypes

const {
  INITIAL_STATE,
  FETCHING,
  ERROR_FETCHING,
  RESOLVED,
} = payloadStates

const init = {
  state: INITIAL_STATE,
  data: null,
  error: null
}

export default (state = init, action) => {
  switch (action.type) {
    case FETCHING_DL_LAST_UPDATED:
      return {
        state: FETCHING,
        data: null,
        error: null
      }

    case SET_DL_LAST_UPDATED:
      return {
        state: RESOLVED,
        data: action.downloadLastUpdated,
        error: null
      }

    case ERROR_FETCHING_DL_LAST_UPDATED:
      return {
        state: ERROR_FETCHING,
        data: state.data,
        error: action.error
      }

    default:
      return state
  }
}