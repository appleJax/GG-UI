import { POPULATE_MONTHLY_STATS } from 'Actions/sync'

// users.monthlyStats reducer
export default (state = [], action) => {
    switch (action.type) {
      case POPULATE_MONTHLY_STATS:
        return action.users

      default:
        return state
    }
  }
