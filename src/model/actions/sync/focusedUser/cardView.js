import actionTypes from 'Constants/ActionTypes'

const { SET_CARD_VIEW } = actionTypes

export default ({

  setCardView: (view) => ({
    type: SET_CARD_VIEW,
    view
  })

})
