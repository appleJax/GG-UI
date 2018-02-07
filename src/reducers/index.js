import { combineReducers } from 'redux'
import cachedCards from 'Reducers/cachedCards'
import focusedUser from 'Reducers/focusedUser'
import liveQuestions from 'Reducers/liveQuestions'
import users from 'Reducers/users'
import scoreView from 'Reducers/scoreView'
import search from 'Reducers/search'

export default combineReducers({
  cachedCards,
  focusedUser,
  liveQuestions,
  users,
  scoreView,
  search
})
