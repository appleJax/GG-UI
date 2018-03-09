import actionTypes from 'Constants/ActionTypes'

const {
  FETCHING_FOCUSED_USER,
  SET_FOCUSED_USER,
  NOT_FOUND_FOCUSED_USER,
  ERROR_FETCHING_FOCUSED_USER,

  FETCHING_CORRECT_CARDS,
  SET_CORRECT_CARDS,
  NOT_FOUND_CORRECT_CARDS,
  ERROR_FETCHING_CORRECT_CARDS,
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


  // CorrectCards field of FocusedUser
  fetchingCorrectCards: () => ({
    type: FETCHING_CORRECT_CARDS
  }),

  setCorrectCards: (cards) => ({
    type: SET_CORRECT_CARDS,
    cards
  }),

  notFoundCorrectCards: () => ({
    type: NOT_FOUND_CORRECT_CARDS
  }),

  errorFetchingCorrectCards: (message) => ({
    type: ERROR_FETCHING_CORRECT_CARDS,
    message
  })

})
