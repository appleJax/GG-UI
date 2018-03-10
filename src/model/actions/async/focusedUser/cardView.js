import { getCards } from './common'
import syncActions   from 'Actions/sync'

const { setCardView } = syncActions

export default ({

  setCardView: (view = 'correct') => {
    if (view === 0) view = 'correct'
    if (view === 1) view = 'incorrect'
    if (view === 2) view = 'unanswered'

    return (dispatch, getState) => {
      dispatch(setCardView(view))
      getCards(dispatch, getState, view)
    }
  }

})
