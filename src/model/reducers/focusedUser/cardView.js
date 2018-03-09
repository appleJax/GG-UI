import actionTypes   from 'Constants/ActionTypes'

const { SET_CARD_VIEW } = actionTypes

export default (state = 'correct', action) => {

  switch (action.type) {
    case SET_CARD_VIEW:
      return action.view

    default:
      return state

  }
}
