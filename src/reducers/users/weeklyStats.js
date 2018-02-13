import { POPULATE_WEEKLY_STATS } from 'Actions/sync'

// users.weeklyStats reducer
export default (state = [], action) => {
    switch (action.type) {
      case POPULATE_WEEKLY_STATS:
        return action.users

      default:
        return state
    }
  }
