import { SET_SEARCH_QUERY, } from 'Actions/sync'

// search reducer
export default (state = '', action) => {
    switch (action.type) {
      case SET_SEARCH_QUERY:
        return action.query

      default:
        return state
    }
  }
