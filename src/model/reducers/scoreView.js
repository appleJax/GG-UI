import actionTypes from 'Constants/ActionTypes'

const { SET_SCORE_VIEW } = actionTypes

const init = {
  page: 1,
  view: 'weeklyStats'
}

export default (state = init, action) => {

  switch (action.type) {
    case SET_SCORE_VIEW:
      return {
        page: action.page,
        view: action.view
      }

    default:
      return state

  }
}
