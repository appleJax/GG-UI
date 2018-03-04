import { ajax }      from 'Utils'
import payloadStates from 'Constants/PayloadStates'
import syncActions   from 'Actions/sync'

const { INITIAL_STATE } = payloadStates
const {
  fetchingRecentAnswers,
  setRecentAnswers,
  notFoundRecentAnswers,
  errorFetchingRecentAnswers,
} = syncActions

export default ({

  fetchRecentAnswers: () =>
    (dispatch, getState) => {
      const { recentAnswers } = getState()
      if (recentAnswers.state === INITIAL_STATE)
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
