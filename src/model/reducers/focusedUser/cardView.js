import actionTypes   from 'Constants/ActionTypes'

const { SET_CARD_VIEW } = actionTypes

const init = {
  view: 'correct',
  page: 1
}

export default (state = init, action) => {
  switch (action.type) {
    case SET_CARD_VIEW:
      return {
        view: action.view,
        page: action.page
      }

    default:
      return state
  }
}
