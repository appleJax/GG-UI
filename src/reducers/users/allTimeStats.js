import { POPULATE_ALLTIME_STATS } from 'Actions/sync'

// users.allTimeStats reducer
export default (state = [], action) => {
    switch (action.type) {
      case POPULATE_ALLTIME_STATS:
        return action.users

      default:
        return state
    }
  }
