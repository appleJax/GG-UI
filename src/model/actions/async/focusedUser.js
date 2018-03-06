import { ajax }      from 'Utils'
import syncActions   from 'Actions/sync'
import payloadStates from 'Constants/PayloadStates'

const { RESOLVED } = payloadStates
const {
  fetchingEarnedCards,
  setEarnedCards,
  notFoundEarnedCards,
  errorFetchingEarnedCards,

  fetchingFocusedUser,
  setFocusedUser,
  notFoundFocusedUser,
  errorFetchingFocusedUser
} = syncActions


export default ({

  fetchFocusedUser: (handle) =>
    (dispatch, getState) => {
      const { focusedUser } = getState()
      if (focusedUser.data === RESOLVED && handle !== focusedUser.data.handle)
        dispatch(fetchingFocusedUser())

      const params = {
        params: { handle }
      }
      ajax.get('/userStats', params)
          .then(user =>
            dispatch(setFocusedUser(user))
          ).catch(error =>
            dispatch(errorFetchingFocusedUser())
          )
    },


  fetchEarnedCards: (ids) =>
    dispatch => {
      dispatch(fetchingEarnedCards())
      const params = {
        params: { ids }
      }
      ajax.get('/cards/earned', params)
          .then(cards => cards
            ? dispatch(setEarnedCards(cards))
            : dispatch(notFoundEarnedCards())
          ).catch(error =>
            dispatch(errorFetchingEarnedCards(error))
          )
    }

})
