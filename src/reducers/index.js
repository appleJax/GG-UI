import { combineReducers } from 'redux'
import users from 'Reducers/users'
import search from 'Reducers/search'

export default rootReducer =
  combineReducers({
    users,
    search
  })
