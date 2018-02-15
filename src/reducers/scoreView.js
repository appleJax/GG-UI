import { SET_SCORE_VIEW, } from 'Actions/sync'

export default (state = 'weeklyStats', action) => {
    switch (action.type) {
      case SET_SCORE_VIEW:
        return action.view

      default:
        return state
    }
  }
