export const ADD_CARDS_TO_CACHE = 'ADD_CARDS_TO_CACHE'
export const OPEN_NAV_OPTIONS = 'OPEN_NAV_OPTIONS'
export const CLOSE_NAV_OPTIONS = 'CLOSE_NAV_OPTIONS'
export const POPULATE_LIVE_QUESTIONS = 'POPULATE_LIVE_QUESTIONS'
export const POPULATE_ALLTIME_STATS = 'POPULATE_ALLTIME_STATS'
export const POPULATE_MONTHLY_STATS = 'POPULATE_MONTHLY_STATS'
export const POPULATE_WEEKLY_STATS = 'POPULATE_WEEKLY_STATS'
export const SET_FOCUSED_USER = 'SET_FOCUSED_USER'
export const SET_SCORE_VIEW = 'SET_SCORE_VIEW'
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'


export const addCardsToCache = (cards) => ({
  type: ADD_CARDS_TO_CACHE,
  cards
})

export const openNavOptions = (anchorElement) => ({
  type: OPEN_NAV_OPTIONS,
  anchorElement
})

export const closeNavOptions = () => ({
  type: CLOSE_NAV_OPTIONS
})

export const populateLiveQuestions = (liveQuestions) => ({
  type: POPULATE_LIVE_QUESTIONS,
  liveQuestions
})

export const populateWeeklyStats = (users) => ({
  type: POPULATE_WEEKLY_STATS,
  users
})

export const populateMonthlyStats = (users) => ({
  type: POPULATE_MONTHLY_STATS,
  users
})

export const populateAllTimeStats = (users) => ({
  type: POPULATE_ALLTIME_STATS,
  users
})

export const setFocusedUser = (user) => ({
  type: SET_FOCUSED_USER,
  user
})

export const setScoreView = (view) => ({
  type: SET_SCORE_VIEW,
  view
})

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  query
})
