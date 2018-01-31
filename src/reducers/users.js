import { POPULATE_SCOREBOARD } from 'Actions/sync'

export default scoreBoard =
  (state = [], action) => (
    switch (action.type) {
      case POPULATE_SCOREBOARD:
        return action.users

      default:
        return state
    }
  }
