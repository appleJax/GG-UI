import { ajax }    from 'Utils'
import syncActions from 'Actions/sync'

const {
  addDeckCards,
  setDeckPage,
  fetchingDeck,
  notFoundDeck,
  errorFetchingDeck
} = syncActions

export default ({

  fetchDeck: (page = 1, gameSlug) =>
    dispatch => {
      dispatch(fetchingDeck(gameSlug))
      const params = {
        params: { page }
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
