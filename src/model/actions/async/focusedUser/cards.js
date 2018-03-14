import { getCards } from './common'
import syncActions  from 'Actions/sync'

const { setCardView } = syncActions

export default ({

  fetchCards: (page = 1, view) =>
    (dispatch, getState) => {
      if (!view) view = getState().focusedUser.cardView.view
      dispatch(setCardView(view, page))
      getCards(dispatch, getState, view, page)
    }

})
