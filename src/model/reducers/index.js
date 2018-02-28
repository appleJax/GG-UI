import { combineReducers } from 'redux'
import auth          from 'Reducers/auth'
import countdown     from 'Reducers/countdown'
import decks         from 'Reducers/decks'
import focusedUser   from 'Reducers/focusedUser'
import gameTitles    from 'Reducers/gameTitles'
import liveQuestions from 'Reducers/liveQuestions'
import navOptions    from 'Reducers/navOptions'
import recentAnswers from 'Reducers/recentAnswers'
import scoreView     from 'Reducers/scoreView'
import search        from 'Reducers/search'
import users         from 'Reducers/users'

export default combineReducers({
  auth,
  countdown,
  decks,
  focusedUser,
  gameTitles,
  liveQuestions,
  navOptions,
  recentAnswers,
  scoreView,
  search,
  users
})
