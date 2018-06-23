import { ajax, getCardIds } from 'Utils'
import payloadStates        from 'Constants/PayloadStates'
import syncActions          from 'Actions/sync'

const { RESOLVED } = payloadStates
const {
  fetchingCards,
  setCards,
  notFoundCards,
  errorFetchingCards
} = syncActions

export function getCards(
  dispatch,
  getState,
  view = 'correct',
  page = 1
) {
  const { focusedUser } = getState()
  if (focusedUser[view].state !== RESOLVED) {
    dispatch(fetchingCards(view))
  }

  const ids = getCardIds(focusedUser, view, page)
  const params = {
    params: { ids }
  }
  ajax.get('/cards', params)
    .then(cards => {
      cards
        ? dispatch(setCards(cards, view, page))
        : dispatch(notFoundCards(view))
    }).catch(error =>
      dispatch(errorFetchingCards(error, view))
    )
}
