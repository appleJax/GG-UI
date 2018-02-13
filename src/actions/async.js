import { ajax, debounce } from 'Utils'
import {
  setFocusedUser,
  setScoreView,
  setSearchQuery,
  populateLiveQuestions,
  populateAllTimeStats,
  populateMonthlyStats,
  populateWeeklyStats
} from 'Actions/sync'


export const fetchLiveQuestions = () =>
  dispatch =>
    ajax.get('/live')
        .then(liveQuestions =>
          dispatch(populateLiveQuestions(liveQuestions))
        ).catch(console.error)

export const fetchStats = (view = 'weeklyStats', page = 1) =>
  (dispatch, getState) => {
      const { search } = getState()
      const params = {
        params: { page, view, search }
      }
      getScores(dispatch, params, view)
  }

export const fetchFocusedUser = (handle) =>
  dispatch => {
    const params = {
      params: { handle }
    }
    ajax.get('/userStats', params)
        .then(user =>
          dispatch(setFocusedUser(user))
        ).catch(console.error)
  }

export function changeScoreView(view) {
  if (view === 0) view = 'weeklyStats'
  if (view === 1) view = 'monthlyStats'
  if (view === 2) view = 'allTimeStats'

  return (dispatch, getState) => {
    dispatch(setScoreView(view))
    const { search } = getState()
    const params = {
      params: { search, view }
    }
    getScores(dispatch, params, view)
  }
}

export const fetchQuery = (search) =>
  (dispatch, getState) => {
    dispatch(setSearchQuery(search))
    debouncedFetchQuery(dispatch, getState)
  }

function fetchQueryNaive(dispatch, getState) {
  const { search, scoreView: view } = getState()
  const params = {
    params: { search, view }
  }
  getScores(dispatch, params, view)
}

const debouncedFetchQuery = debounce(fetchQueryNaive, 250)

function getScores(dispatch, params, view) {
  ajax.get('/scores', params)
      .then(users => {
        if (view === 'weeklyStats')
          dispatch(populateWeeklyStats(users))

        if (view === 'monthlyStats')
          dispatch(populateMonthlyStats(users))

        if (view === 'allTimeStats')
          dispatch(populateAllTimeStats(users))
      })
      .catch(console.error)
}
