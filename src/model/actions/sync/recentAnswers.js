import actionTypes from 'Constants/ActionTypes'

const {
  FETCHING_RECENT_ANSWERS,
  SET_RECENT_ANSWERS,
  NOT_FOUND_RECENT_ANSWERS,
  ERROR_FETCHING_RECENT_ANSWERS
} = actionTypes

export default ({

  fetchingRecentAnswers: () => ({
    type: FETCHING_RECENT_ANSWERS
  }),

  setRecentAnswers: (recentAnswers) => ({
    type: SET_RECENT_ANSWERS,
    recentAnswers
  }),

  notFoundRecentAnswers: () => ({
    type: NOT_FOUND_RECENT_ANSWERS
  }),

  errorFetchingRecentAnswers: (message) => ({
    type: ERROR_FETCHING_RECENT_ANSWERS,
    message
  })

})
