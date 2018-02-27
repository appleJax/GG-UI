import actionTypes from 'Constants/ActionTypes'

const {
  ADD_DECK,
  FETCHING_DECK,
  NOT_FOUND_DECK,
  ERROR_FETCHING_DECK
} = actionTypes


export default ({

  addDeck: (deck, game) => ({
    type: ADD_DECK,
    deck,
    game
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
