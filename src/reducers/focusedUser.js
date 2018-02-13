import { SET_FOCUSED_USER } from 'Actions/sync'

// focusedUser reducer
export default (state = {handle: false}, action) => {
    switch (action.type) {
      case SET_FOCUSED_USER:
        return action.user

      default:
        return state
    }
  }
