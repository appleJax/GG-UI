import actionTypes from 'Constants/ActionTypes'

const { SET_SCORE_VIEW } = actionTypes

export default ({

  setScoreView: (page, view) => ({
    type: SET_SCORE_VIEW,
    page,
    view
  })

})
