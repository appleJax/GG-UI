import { combineReducers } from 'redux'
import auth             from 'Reducers/auth'
import countdown        from 'Reducers/countdown'
import decks            from 'Reducers/decks'
import downloadLastUpdated from 'Reducers/downloadLastUpdated'
import focusedUser      from 'Reducers/focusedUser'
import deckTitles       from 'Reducers/deckTitles'
import liveQuestions    from 'Reducers/liveQuestions'
import isNavOptionsOpen from 'Reducers/isNavOptionsOpen'
import recentAnswers    from 'Reducers/recentAnswers'
import scoreView        from 'Reducers/scoreView'
import search           from 'Reducers/search'
import users            from 'Reducers/users'

export default combineReducers({
  auth,
  countdown,
  decks,
  downloadLastUpdated,
  focusedUser,
  deckTitles,
  liveQuestions,
  isNavOptionsOpen,
  recentAnswers,
  scoreView,
  search,
  users
})
