import { ajax } from 'Utils'
import syncActions from 'Actions/sync'

const {
  fetchingLiveQuestions,
  populateLiveQuestions,
  notFoundLiveQuestions,
  errorFetchingLiveQuestions,
} = syncActions

export default ({

  fetchLiveQuestions: () =>
    dispatch => {
      dispatch(fetchingLiveQuestions())
      ajax.get('/live')
          .then(liveQuestions =>
            liveQuestions
              ? dispatch(populateLiveQuestions(liveQuestions))
              : dispatch(notFoundLiveQuestions())
          ).catch(error =>
            dispatch(errorFetchingLiveQuestions(error))
          )
    }

})
