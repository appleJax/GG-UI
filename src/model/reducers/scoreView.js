import actionTypes from 'Constants/ActionTypes'

const { SET_SCORE_VIEW } = actionTypes

export default (state = 'weeklyStats', action) => {

  switch (action.type) {
    case SET_SCORE_VIEW:
      return action.view

    default:
      return state

  }
}
