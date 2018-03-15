import payloadStates from 'Constants/PayloadStates'
import actionTypes   from 'Constants/ActionTypes'

const [{
  INITIAL_STATE,
  FETCHING,
  RESOLVED,
  NOT_FOUND,
  ERROR_FETCHING
}, {
  ADD_DECK_CARDS,
  SET_DECK_PAGE,
  FETCHING_DECK,
  NOT_FOUND_DECK,
  ERROR_FETCHING_DECK,
}] = [ payloadStates, actionTypes ]


export default (state = {}, action) => {
  const oldDeck = state[action.game] || {}
  const oldCards = oldDeck.data || {}

  switch (action.type) {

    case ADD_DECK_CARDS:
      return {
        ...state,
        [action.game]: {
          ...oldDeck,
          state: RESOLVED,
          data: {
            ...oldCards,
            totalCards: action.total,
            deckPage: action.page,
            [action.page]: action.cards
          },
          error: null
        }
      }

    // May need for caching deck pages
    // if not, DELETE this
    case SET_DECK_PAGE:
      return {
        ...state,
        [action.game]: {
          ...oldDeck,
          data: {
            ...oldCards,
            deckPage: action.page
          }
        }
      }

    case FETCHING_DECK:
      return {
        ...state,
        [action.game]: {
          ...oldDeck,
          state: FETCHING,
          error: null
        }
      }

    case NOT_FOUND_DECK:
      return {
        ...state,
        [action.game]: {
          state: NOT_FOUND,
          data:  null,
          error: null
        }
      }

    case ERROR_FETCHING_DECK:
      return {
        ...state,
        [action.game]: {
          ...oldDeck,
          state: ERROR_FETCHING,
          error: action.message
        }
      }

    default:
      return state
  }
}
