import actionTypes from 'Constants/ActionTypes'

const { SET_CARD_VIEW } = actionTypes

export default ({

  setCardView: (view, page = 1) => ({
    type: SET_CARD_VIEW,
    view,
    page
  })

})
