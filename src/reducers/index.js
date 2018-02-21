import { combineReducers } from 'redux'
import focusedUser   from 'Reducers/focusedUser'
import liveQuestions from 'Reducers/liveQuestions'
import navOptions    from 'Reducers/navOptions'
import recentAnswers from 'Reducers/recentAnswers'
import scoreView     from 'Reducers/scoreView'
import search        from 'Reducers/search'
import users         from 'Reducers/users'

export default combineReducers({
  focusedUser,
  liveQuestions,
  navOptions,
  recentAnswers,
  scoreView,
  search,
  users
})
