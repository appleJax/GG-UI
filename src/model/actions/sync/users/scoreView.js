import actionTypes from 'Constants/ActionTypes'

const { SET_SCORE_VIEW } = actionTypes

export default ({

  setScoreView: (view) => ({
    type: SET_SCORE_VIEW,
    view
  })

})
