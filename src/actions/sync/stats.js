import actionTypes from 'Constants/ActionTypes'

const {
  FETCHING_WEEKLY_STATS,
  POPULATE_WEEKLY_STATS,
  NOT_FOUND_WEEKLY_STATS,
  ERROR_FETCHING_WEEKLY_STATS,

  FETCHING_MONTHLY_STATS,
  POPULATE_MONTHLY_STATS,
  NOT_FOUND_MONTHLY_STATS,
  ERROR_FETCHING_MONTHLY_STATS,

  FETCHING_ALLTIME_STATS,
  POPULATE_ALLTIME_STATS,
  NOT_FOUND_ALLTIME_STATS,
  ERROR_FETCHING_ALLTIME_STATS
} = actionTypes

export default ({

  fetchingStats: (view) => {
    let type
    if (view === 'weeklyStats')
      type = FETCHING_WEEKLY_STATS

    if (view === 'monthlyStats')
      type = FETCHING_MONTHLY_STATS

    if (view === 'allTimeStats')
      type = FETCHING_ALLTIME_STATS

    return { type }
  },

  populateStats: (users, view) => {
    let type
    if (view === 'weeklyStats')
      type = (users)
        ? POPULATE_WEEKLY_STATS
        : NOT_FOUND_WEEKLY_STATS

    if (view === 'monthlyStats')
      type = (users)
        ? POPULATE_MONTHLY_STATS
        : NOT_FOUND_MONTHLY_STATS

    if (view === 'allTimeStats')
      type = (users)
        ? POPULATE_ALLTIME_STATS
        : NOT_FOUND_ALLTIME_STATS

    return { type, users }
  },

  errorFetchingStats: (message) => {
    let type
    if (view === 'weeklyStats')
      type = ERROR_FETCHING_WEEKLY_STATS

    if (view === 'monthlyStats')
      type = ERROR_FETCHING_MONTHLY_STATS

    if (view === 'allTimeStats')
      type = ERROR_FETCHING_ALLTIME_STATS

    return { type, message }
  }

})
