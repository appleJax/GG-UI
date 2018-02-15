import {
  SET_EARNED_CARDS,
  SET_FOCUSED_USER
} from 'Actions/sync'

export default (state = {handle: false}, action) => {
    switch (action.type) {
      case SET_FOCUSED_USER:
        return action.user

      case SET_EARNED_CARDS:
        return {
          ...state,
          earnedCards: action.cards
        }

      default:
        return state
    }
  }
