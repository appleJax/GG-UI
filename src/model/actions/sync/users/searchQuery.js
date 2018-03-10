import actionTypes from 'Constants/ActionTypes'

const { SET_SEARCH_QUERY } = actionTypes

export default ({

  setSearchQuery: (query) => ({
    type: SET_SEARCH_QUERY,
    query
  })

})
