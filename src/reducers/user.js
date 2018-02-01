import { POPULATE_SCORE } from 'Actions/sync'

// user reducer
export default (state = null, action) => {
    switch (action.type) {
      case POPULATE_SCORE:
        return action.user

      default:
        return state
    }
  }
