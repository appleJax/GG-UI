import { getCards } from './common'

export default ({

  fetchCards: (view = 'correct') =>
    (dispatch, getState) =>
      getCards(dispatch, getState, view)

})
