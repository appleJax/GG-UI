import { combineReducers } from 'redux'
import user from 'Reducers/user'
import users from 'Reducers/users'
import search from 'Reducers/search'

export default combineReducers({
  user,
  users,
  search
})
