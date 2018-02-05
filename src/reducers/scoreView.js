import { SET_SCORE_VIEW, } from 'Actions/sync'

// search reducer
export default (state = 0, action) => {
    switch (action.type) {
      case SET_SCORE_VIEW:
        return action.view

      default:
        return state
    }
  }
