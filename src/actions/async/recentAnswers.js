import { ajax } from 'Utils'
import syncActions from 'Actions/sync'

const {
  fetchingRecentAnswers,
  setRecentAnswers,
  notFoundRecentAnswers,
  errorFetchingRecentAnswers,
} = syncActions

export default ({

  fetchRecentAnswers: () =>
    dispatch => {
      dispatch(fetchingRecentAnswers())
      ajax.get('/recent')
          .then(recentAnswers =>
            recentAnswers
              ? dispatch(setRecentAnswers(recentAnswers))
              : dispatch(notFoundRecentAnswers())
          ).catch(error =>
            dispatch(errorFetchingRecentAnswers(error))
          )
    }

})
