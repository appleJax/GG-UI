import { ajax }    from 'Utils'
import syncActions from 'Actions/sync'

const {
  fetchingLiveQuestions,
  setLiveQuestions,
  notFoundLiveQuestions,
  errorFetchingLiveQuestions
} = syncActions

export default ({

  fetchLiveQuestions: () =>
    dispatch => {
      dispatch(fetchingLiveQuestions())
      ajax.get('/live')
          .then(liveQuestions =>
            liveQuestions
              ? dispatch(setLiveQuestions(liveQuestions))
              : dispatch(notFoundLiveQuestions())
          ).catch(error =>
            dispatch(errorFetchingLiveQuestions(error))
          )
    }

})
