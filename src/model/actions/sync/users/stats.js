import actionTypes from 'Constants/ActionTypes'

const {
  FETCHING_WEEKLY_STATS,
  SET_WEEKLY_STATS,
  NOT_FOUND_WEEKLY_STATS,
  ERROR_FETCHING_WEEKLY_STATS,

  FETCHING_MONTHLY_STATS,
  SET_MONTHLY_STATS,
  NOT_FOUND_MONTHLY_STATS,
  ERROR_FETCHING_MONTHLY_STATS,

  FETCHING_ALLTIME_STATS,
  SET_ALLTIME_STATS,
  NOT_FOUND_ALLTIME_STATS,
  ERROR_FETCHING_ALLTIME_STATS
} = actionTypes

export default ({
  fetchingStats: (view, search) => {
    let type
    if (view === 'weeklyStats') {
      type = FETCHING_WEEKLY_STATS
    }

    if (view === 'monthlyStats') {
      type = FETCHING_MONTHLY_STATS
    }

    if (view === 'allTimeStats') {
      type = FETCHING_ALLTIME_STATS
    }

    return { type, search }
  },

  setStats: (page, search, total, users, view) => {
    const hasUsers = users && users.length > 0
    let type
    if (view === 'weeklyStats') {
      type = (hasUsers)
        ? SET_WEEKLY_STATS
        : NOT_FOUND_WEEKLY_STATS
    }

    if (view === 'monthlyStats') {
      type = (hasUsers)
        ? SET_MONTHLY_STATS
        : NOT_FOUND_MONTHLY_STATS
    }

    if (view === 'allTimeStats') {
      type = (hasUsers)
        ? SET_ALLTIME_STATS
        : NOT_FOUND_ALLTIME_STATS
    }

    return {
      type,
      page,
      search,
      total,
      users
    }
  },

  errorFetchingStats: (message, view) => {
    let type
    if (view === 'weeklyStats') {
      type = ERROR_FETCHING_WEEKLY_STATS
    }

    if (view === 'monthlyStats') {
      type = ERROR_FETCHING_MONTHLY_STATS
    }

    if (view === 'allTimeStats') {
      type = ERROR_FETCHING_ALLTIME_STATS
    }

    return { type, message }
  }
})
