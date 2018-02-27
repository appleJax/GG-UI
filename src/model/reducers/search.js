import actionTypes from 'Constants/ActionTypes'

const { SET_SEARCH_QUERY, } = actionTypes

export default (state = '', action) => {
    switch (action.type) {
      case SET_SEARCH_QUERY:
        return action.query

      default:
        return state
    }
  }
