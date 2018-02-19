import { ajax } from 'Utils'
import syncActions from 'Actions/sync'

const {
  fetchingStats,
  setStats,
  errorFetchingStats
} = syncActions


export const getScores = (dispatch, params, view) => {
    dispatch(fetchingStats(view))

    ajax.get('/scores', params)
        .then(users => {
          dispatch(setStats(users, view))
        })
        .catch(error =>
          dispatch(errorFetchingStats(error, view))
        )
  }
