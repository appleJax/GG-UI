import syncActions from 'Actions/sync'
import {
  ajax,
  CARDS_PER_PAGE
} from 'Utils'

const {
  addDeckCards,
  fetchingDeck,
  notFoundDeck,
  errorFetchingDeck
} = syncActions

export default ({
  fetchDeck: (page = 1, gameSlug) =>
    dispatch => {
      dispatch(fetchingDeck(gameSlug))
      const params = {
        params: { page, pageSize: CARDS_PER_PAGE }
      }
      ajax.get(`/deck/${gameSlug}`, params)
        .then(({ cards, total }) =>
          cards
            ? dispatch(addDeckCards(gameSlug, page, cards, total))
            : dispatch(notFoundDeck(gameSlug))
        ).catch(error =>
          dispatch(errorFetchingDeck(gameSlug, error))
        )
    }
})
