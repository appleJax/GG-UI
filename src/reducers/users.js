import { POPULATE_SCOREBOARD } from 'Actions/sync'

// users reducer
export default (state = [], action) => {
    switch (action.type) {
      case POPULATE_SCOREBOARD:
        return action.users

      default:
        return state
    }
  }
