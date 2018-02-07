export const ADD_CARDS_TO_CACHE = 'ADD_CARDS_TO_CACHE'
export const POPULATE_LIVE_QUESTIONS = 'POPULATE_LIVE_QUESTIONS'
export const POPULATE_SCOREBOARD = 'POPULATE_SCOREBOARD'
export const SET_FOCUSED_USER = 'SET_FOCUSED_USER'
export const SET_SCORE_VIEW = 'SET_SCORE_VIEW'
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'


export const addCardsToCache = (cards) => ({
  type: ADD_CARDS_TO_CACHE,
  cards
})

export const populateLiveQuestions = (liveQuestions) => ({
  type: POPULATE_LIVE_QUESTIONS,
  liveQuestions
})

export const populateScoreboard = (users) => ({
  type: POPULATE_SCOREBOARD,
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
