import { ajax }    from 'Utils'
import syncActions from 'Actions/sync'

const {
  fetchingStats,
  setStats,
  errorFetchingStats
} = syncActions


export const getStats = (dispatch, params, view, search, users) => {
  if (users[view].search !== search)
    dispatch(fetchingStats(view, search))

  const { params: { page } } = params
  ajax.get('/stats', params)
      .then(({ users, total }) =>
        dispatch(setStats(page, search, total, users, view))
      )
      .catch(error =>
        dispatch(errorFetchingStats(error, view))
      )
  }
