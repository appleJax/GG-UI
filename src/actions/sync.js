export const POPULATE_SCORE = 'POPULATE_SCORE'
export const POPULATE_SCOREBOARD = 'POPULATE_SCOREBOARD'
export const SET_SCORE_VIEW = 'SET_SCORE_VIEW'
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'


export const populateScore = (user) => ({
  type: POPULATE_SCORE,
  user
})

export const populateScoreboard = (users) => ({
  type: POPULATE_SCOREBOARD,
  users
})

export const setScoreView = (view) => ({
  type: SET_SCORE_VIEW,
  view
})

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  query
})
