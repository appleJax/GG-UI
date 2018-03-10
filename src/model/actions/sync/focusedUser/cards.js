import actionTypes from 'Constants/ActionTypes'

const {
  FETCHING_CORRECT_CARDS,
  SET_CORRECT_CARDS,
  NOT_FOUND_CORRECT_CARDS,
  ERROR_FETCHING_CORRECT_CARDS,

  FETCHING_INCORRECT_CARDS,
  SET_INCORRECT_CARDS,
  NOT_FOUND_INCORRECT_CARDS,
  ERROR_FETCHING_INCORRECT_CARDS,

  FETCHING_UNANSWERED_CARDS,
  SET_UNANSWERED_CARDS,
  NOT_FOUND_UNANSWERED_CARDS,
  ERROR_FETCHING_UNANSWERED_CARDS
} = actionTypes

export default ({

  fetchingCards: (view = 'correct') => {
    let type
    if (view === 'correct')
      type = FETCHING_CORRECT_CARDS

    if (view === 'incorrect')
      type = FETCHING_INCORRECT_CARDS

    if (view === 'unanswered')
      type = FETCHING_UNANSWERED_CARDS

    return { type }
  },

  setCards: (cards, view = 'correct') => {
    let type
    if (view === 'correct')
      type = SET_CORRECT_CARDS

    if (view === 'incorrect')
      type = SET_INCORRECT_CARDS

    if (view === 'unanswered')
      type = SET_UNANSWERED_CARDS

    return { type, cards }
  },

  notFoundCards: (view = 'correct') => {
    let type
    if (view === 'correct')
      type = NOT_FOUND_CORRECT_CARDS

    if (view === 'incorrect')
      type = NOT_FOUND_INCORRECT_CARDS

    if (view === 'unanswered')
      type = NOT_FOUND_UNANSWERED_CARDS

    return { type }
  },

  errorFetchingCards: (message, view = 'correct') => {
    let type
    if (view === 'correct')
      type = ERROR_FETCHING_CORRECT_CARDS

    if (view === 'incorrect')
      type = ERROR_FETCHING_INCORRECT_CARDS

    if (view === 'unanswered')
      type = ERROR_FETCHING_UNANSWERED_CARDS

    return { type, message }
  }

})
