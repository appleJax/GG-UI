export const POPULATE_SCORE = 'POPULATE_SCORE'
export const POPULATE_SCOREBOARD = 'POPULATE_SCOREBOARD'
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'


export const populateScore = (user) => ({
  type: POPULATE_SCORE,
  user
})

export const populateScoreboard = (users) => ({
  type: POPULATE_SCOREBOARD,
  users
})

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  query
})
