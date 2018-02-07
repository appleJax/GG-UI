import { ADD_CARDS_TO_CACHE } from 'Actions/sync'

// cachedCards reducer
export default (state = [], action) => {
    switch (action.type) {
      case ADD_CARDS_TO_CACHE:
        return [
          ...state,
          ...action.cards
        ]

      default:
        return state
    }
  }
