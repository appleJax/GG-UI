import { ajax } from 'Utils'
import syncActions from 'Actions/sync'

const {
  fetchingStats,
  setStats,
  errorFetchingStats
} = syncActions


export const getScores = (dispatch, params, view, search, users) => {
  // cache users
  if (users[view].search === search)
    return

  dispatch(fetchingStats(view, search))

  ajax.get('/scores', params)
      .then(users => {
        dispatch(setStats(users, view, search))
      })
      .catch(error =>
        dispatch(errorFetchingStats(error, view))
      )
  }
