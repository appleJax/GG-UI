import actionTypes from 'Constants/ActionTypes'

const {
  FETCHING_FOCUSED_USER,
  SET_FOCUSED_USER,
  NOT_FOUND_FOCUSED_USER,
  ERROR_FETCHING_FOCUSED_USER,

  FETCHING_EARNED_CARDS,
  SET_EARNED_CARDS,
  NOT_FOUND_EARNED_CARDS,
  ERROR_FETCHING_EARNED_CARDS,
} = actionTypes

export default ({

  // FocusedUser Object
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
  }),


  // EarnedCards field of FocusedUser
  fetchingEarnedCards: () => ({
    type: FETCHING_EARNED_CARDS
  }),

  setEarnedCards: (cards) => ({
    type: SET_EARNED_CARDS,
    cards
  }),

  notFoundEarnedCards: () => ({
    type: NOT_FOUND_EARNED_CARDS
  }),

  errorFetchingEarnedCards: (message) => ({
    type: ERROR_FETCHING_EARNED_CARDS,
    message
  })

})
