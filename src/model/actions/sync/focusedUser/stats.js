import actionTypes from 'Constants/ActionTypes'

const {
  FETCHING_FOCUSED_USER,
  SET_FOCUSED_USER,
  NOT_FOUND_FOCUSED_USER,
  ERROR_FETCHING_FOCUSED_USER
} = actionTypes

export default ({
  fetchingFocusedUser: () => ({
    type: FETCHING_FOCUSED_USER
  }),

  setFocusedUser: (user) => ({
    type: SET_FOCUSED_USER,
    user
  }),

  notFoundFocusedUser: () => ({
    type: NOT_FOUND_FOCUSED_USER
  }),

  errorFetchingFocusedUser: (message) => ({
    type: ERROR_FETCHING_FOCUSED_USER,
    message
  })
})
