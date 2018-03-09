import { ajax }      from 'Utils'
import syncActions   from 'Actions/sync'
import payloadStates from 'Constants/PayloadStates'

const { RESOLVED } = payloadStates
const {
  fetchingCorrectCards,
  setCorrectCards,
  notFoundCorrectCards,
  errorFetchingCorrectCards,

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
            user
            ? dispatch(setFocusedUser(user))
            : dispatch(notFoundFocusedUser())
          ).catch(error =>
            dispatch(errorFetchingFocusedUser())
          )
    },


  fetchCorrectCards: (ids) =>
    dispatch => {
      dispatch(fetchingCorrectCards())
      const params = {
        params: { ids }
      }
      ajax.get('/cards/earned', params)
          .then(cards => cards
            ? dispatch(setCorrectCards(cards))
            : dispatch(notFoundCorrectCards())
          ).catch(error =>
            dispatch(errorFetchingCorrectCards(error))
          )
    }

})
