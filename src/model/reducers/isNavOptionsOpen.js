import actionTypes from 'Constants/ActionTypes'

const { OPEN_NAV_OPTIONS, CLOSE_NAV_OPTIONS } = actionTypes


export default (state = false, action) => {
    switch (action.type) {
      case OPEN_NAV_OPTIONS:
        return true

      case CLOSE_NAV_OPTIONS:
        return false

      default:
        return state
    }
  }
