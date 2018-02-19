import payloadStates from 'Constants/PayloadStates'
import actionTypes   from 'Constants/ActionTypes'

const [{
  INITIAL_STATE,
  FETCHING,
  RESOLVED,
  NOT_FOUND,
  ERROR_FETCHING
}, {
  FETCHING_FOCUSED_USER,
  SET_FOCUSED_USER,
  NOT_FOUND_FOCUSED_USER,
  ERROR_FETCHING_FOCUSED_USER,

  FETCHING_EARNED_CARDS,
  SET_EARNED_CARDS,
  ERROR_FETCHING_EARNED_CARDS
}] = [ payloadStates, actionTypes ]

const init = {
  state: INITIAL_STATE,
  data: { handle: false },
  earnedCardsState: INITIAL_STATE,
  error: null
}

export default (state = init, action) => {
    switch (action.type) {

      // FocusedUser object
      case FETCHING_FOCUSED_USER:
        return {
          state: FETCHING,
          data: { handle: false },
          earnedCardsState: FETCHING
        }

      case SET_FOCUSED_USER:
        return {
          state: RESOLVED,
          data: action.user,
          earnedCardsState: INITIAL_STATE
        }

      case NOT_FOUND_FOCUSED_USER:
        return {
          state: NOT_FOUND,
          data: null,
          earnedCardsState: NOT_FOUND
        }

      case ERROR_FETCHING_FOCUSED_USER:
        return {
          state: ERROR_FETCHING,
          data: null,
          earnedCardsState: ERROR_FETCHING,
          error: action.message
        }


      // EarnedCards field of FocusedUser
      case FETCHING_EARNED_CARDS:
        return {
          ...state,
          earnedCardsState: FETCHING
        }

      case SET_EARNED_CARDS:
        return {
          ...state,
          data: {
            ...state.data,
            earnedCards: action.cards
          },
          earnedCardsState: RESOLVED
        }

      case ERROR_FETCHING_EARNED_CARDS:
        return {
          ...state,
          earnedCardsState: ERROR_FETCHING,
          error: action.message
        }

      default:
        return state
    }
  }
