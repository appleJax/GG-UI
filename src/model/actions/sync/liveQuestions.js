import actionTypes from 'Constants/ActionTypes'

const {
  FETCHING_LIVE_QUESTIONS,
  SET_LIVE_QUESTIONS,
  NOT_FOUND_LIVE_QUESTIONS,
  ERROR_FETCHING_LIVE_QUESTIONS,
} = actionTypes

export default ({

  fetchingLiveQuestions: () => ({
    type: FETCHING_LIVE_QUESTIONS
  }),

  setLiveQuestions: (liveQuestions) => ({
    type: SET_LIVE_QUESTIONS,
    liveQuestions
  }),

  notFoundLiveQuestions: () => ({
    type: NOT_FOUND_LIVE_QUESTIONS
  }),

  errorFetchingLiveQuestions: (message) => ({
    type: ERROR_FETCHING_LIVE_QUESTIONS,
    message
  })

})
