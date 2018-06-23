import actionTypes from 'Constants/ActionTypes'

const {
  ADD_DECK_CARDS,
  SET_DECK_PAGE,
  FETCHING_DECK,
  NOT_FOUND_DECK,
  ERROR_FETCHING_DECK
} = actionTypes

export default ({
  addDeckCards: (game, page, cards, total) => ({
    type: ADD_DECK_CARDS,
    game,
    page,
    cards,
    total
  }),

  setDeckPage: (game, page) => ({
    type: SET_DECK_PAGE,
    game,
    page
  }),

  fetchingDeck: (game) => ({
    type: FETCHING_DECK,
    game
  }),

  notFoundDeck: (game) => ({
    type: NOT_FOUND_DECK,
    game
  }),

  errorFetchingDeck: (game, message) => ({
    type: ERROR_FETCHING_DECK,
    game,
    message
  })
})
