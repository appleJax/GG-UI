import actionTypes from 'Constants/ActionTypes'

const { OPEN_NAV_OPTIONS, CLOSE_NAV_OPTIONS } = actionTypes


export default (state = null, action) => {
    switch (action.type) {
      case OPEN_NAV_OPTIONS:
        return action.anchorElement

      case CLOSE_NAV_OPTIONS:
        return null

      default:
        return state
    }
  }
